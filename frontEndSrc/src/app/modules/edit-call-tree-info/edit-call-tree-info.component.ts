import { CallTreeInfo } from 'src/app/classes/CallTreeInfo';
import { CallTreeInfoService } from 'src/app/services/call-tree-info.service';
import { CallTreeInfoEditorComponent } from './call-tree-info-editor/call-tree-info-editor.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationBoxComponent } from '../utility/components/confirmation-box/confirmation-box.component';
import { DivisionService } from 'src/app/services/division.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-edit-call-tree-info',
  templateUrl: './edit-call-tree-info.component.html',
  styleUrls: ['./edit-call-tree-info.component.css']
})
export class EditCallTreeInfoComponent implements OnInit {
  activeCallTreeInfo = CallTreeInfo.active;
  inActiveCallTreeInfo = CallTreeInfo.inactive;
  divisionList: string [];
  callTreeInfoList: CallTreeInfo[];
  callTreeInfoDataSource: MatTableDataSource<CallTreeInfo>;
  callTreeInfoTemplate = new CallTreeInfo();
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['division', 'systemName', 'location', 'serviceLevel', 'missionCritical',
                                'timeToStartProcedure', 'contact', 'timeToEscalate', 'logRecipients',
                                'manual', 'status',  'action'];
  constructor(private callTreeInfoService: CallTreeInfoService,
              private divisionService: DivisionService,
              public dialog: MatDialog) {
    this.divisionService.getActiveDivisionList().subscribe((res: string[]) => {
      this.divisionList = res;
    });
    this.callTreeInfoService.getAllCallTreeInfo().subscribe((res: CallTreeInfo[]) => {
      this.callTreeInfoList = res;
      this.callTreeInfoDataSource = new MatTableDataSource<CallTreeInfo>(res);
      this.callTreeInfoDataSource.sort = this.sort;
      this.callTreeInfoDataSource.filterPredicate = (callTreeInfo: CallTreeInfo, filter: string) => {
        let result = false;
        result = result || (callTreeInfo.division.trim().toLowerCase().indexOf(filter) !== -1);
        result = result || (callTreeInfo.systemName.trim().toLowerCase().indexOf(filter) !== -1);
        result = result || (callTreeInfo.location.trim().toLowerCase().indexOf(filter) !== -1);
        result = result || (callTreeInfo.logRecipients.trim().toLowerCase().indexOf(filter) !== -1);
        result = result || (callTreeInfo.missionCritical.trim().toLowerCase().indexOf(filter) !== -1);
        result = result || (callTreeInfo.serviceLevel.toString().trim().toLowerCase().indexOf(filter) !== -1);
        if (callTreeInfo.status === CallTreeInfo.active) {
          result = result || ('active'.indexOf(filter) !== -1);
        } else {
          result = result || ('inactive'.indexOf(filter) !== -1);
        }
        result = result || (callTreeInfo.timeToEscalate.trim().toLowerCase().indexOf(filter) !== -1);
        result = result || (callTreeInfo.timeToStartProcedure.trim().toLowerCase().indexOf(filter) !== -1);
        return result;
      };
    });
  }

  ngOnInit() {
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.callTreeInfoDataSource.filter = filterValue;
  }
  popupDialog(action: string, callTreeInfo: CallTreeInfo) {
    switch (action) {
      case 'Add':
      case 'Edit':  this.popupCallTreeInfoEditor(action, callTreeInfo);
                    break;
      case 'Disable':
      case 'Enable': this.popupConfirmationBox(action, callTreeInfo);
                     break;
    }
  }
  popupCallTreeInfoEditor(action: string, callTreeInfo: CallTreeInfo) {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.minHeight = '600px';

    dialogConfig.autoFocus = false; // do not set focus on the first form element
    dialogConfig.width = '900px';
    dialogConfig.height = '900px';
    dialogConfig.data = {
      action,
      callTreeInfo: JSON.parse(JSON.stringify(callTreeInfo)),
      divisionList: this.divisionList
    };
    const dialogRef = this.dialog.open(CallTreeInfoEditorComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((res) => {
      if (res !== undefined) {
        if (res.updateSuccess) {
          switch (res.action) {
            case 'Add':
                        this.callTreeInfoList.push(res.callTreeInfo);
                        this.refreshDataSource();
                        break;
            case 'Edit': this.updateCallTreeTable(res.callTree);
                         break;
          }
        }
      }
    });
  }
  popupConfirmationBox(action: string, callTreeInfo: CallTreeInfo) {
    let message = 'Are you sure to ' + action + ' this call tree info?';
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.minHeight = '600px';

    dialogConfig.autoFocus = false; // do not set focus on the first form element
    dialogConfig.width = '350px';

    dialogConfig.data = {title: message};
    const dialogRef = this.dialog.open(ConfirmationBoxComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((sayYes: boolean) => {
      if (sayYes) {
        if (action === 'Enable') {
          callTreeInfo.status = CallTreeInfo.active;
        } else {
          callTreeInfo.status = CallTreeInfo.inactive;
        }
        this.callTreeInfoService.saveCallTreeInfo(callTreeInfo).subscribe((res: boolean) => {
          switch (action) {
            case 'Enable':  message = 'active';
                            break;
            case 'Disable':
                            message = 'inactive';
                            break;
          }
          if (res) {
            message = 'The call tree status is set to ' + message + ' succesfully.';
          } else {
            message = 'The call tree status is fail to set ' + message + '.';
          }
        });
      }
    });
  }
  refreshDataSource() {
    this.callTreeInfoList = this.callTreeInfoDataSource.sortData(this.callTreeInfoList, this.sort);
    this.callTreeInfoDataSource = new MatTableDataSource<CallTreeInfo>(this.callTreeInfoList);
    this.callTreeInfoDataSource.sort = this.sort;
  }
  updateCallTreeTable(res: CallTreeInfo) {
    this.callTreeInfoList.filter((value) => {
      if (value.callTreeInfoId === res.callTreeInfoId) {
        value.division = res.division;
        value.systemName = res.systemName;
        value.location = res.location;
        value.serviceLevel = res.serviceLevel;
        value.missionCritical = res.missionCritical;
        value.timeToStartProcedure = res.timeToStartProcedure;
        value.timeToEscalate = res.timeToEscalate;
        value.logRecipients = res.logRecipients;
        value.status = res.status;
        value.version = res.version;
        this.refreshDataSource();
        return true;
      }
    });
  }
}
