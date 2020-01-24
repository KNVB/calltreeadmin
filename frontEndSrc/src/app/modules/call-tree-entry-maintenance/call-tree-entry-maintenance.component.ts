import { CallTree } from 'src/app/classes/CallTree';
import { CallTreeEntry } from 'src/app/classes/CallTreeEntry';
import { CallTreeEntryService } from 'src/app/services/call-tree-entry.service';
import { CallTreeEditorComponent } from './call-tree-editor/call-tree-editor.component';
import { CallTreeEntryEditorComponent } from './call-tree-entry-editor/call-tree-entry-editor.component';
import { Component, ViewChild } from '@angular/core';
import { ConfirmationBoxComponent } from '../utility/components/confirmation-box/confirmation-box.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-call-tree-entry-maintenance',
  templateUrl: './call-tree-entry-maintenance.component.html',
  styleUrls: ['./call-tree-entry-maintenance.component.css']
})
export class CallTreeEntryMaintenanceComponent  {
  activeCallTreeEntry = CallTreeEntry.active;
  inActiveCallTreeEntry = CallTreeEntry.inactive;
  callTreeEntryList: CallTreeEntry[];
  callTreeEntryDataSource: MatTableDataSource<CallTreeEntry>;
  callTreeInfoTemplate = new CallTreeEntry();
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['division', 'systemName', 'location', 'serviceLevel', 'missionCritical',
                                'timeToStartProcedure', 'contact', 'timeToEscalate', 'logRecipients',
                                'manual', 'status',  'action'];
  constructor(private callTreeInfoService: CallTreeEntryService,
              public dialog: MatDialog) {
    this.callTreeInfoService.getAllCallTreeInfo().subscribe((res: CallTreeEntry[]) => {
      this.callTreeEntryList = res;
      this.callTreeEntryDataSource = new MatTableDataSource<CallTreeEntry>(res);
      this.callTreeEntryDataSource.sort = this.sort;
      this.callTreeEntryDataSource.filterPredicate = (callTreeInfo: CallTreeEntry, filter: string) => {
        let result = false;
        result = result || (callTreeInfo.division.trim().toLowerCase().indexOf(filter) !== -1);
        result = result || (callTreeInfo.systemName.trim().toLowerCase().indexOf(filter) !== -1);
        result = result || (callTreeInfo.location.trim().toLowerCase().indexOf(filter) !== -1);
        result = result || (callTreeInfo.logRecipients.trim().toLowerCase().indexOf(filter) !== -1);
        result = result || (callTreeInfo.missionCritical.trim().toLowerCase().indexOf(filter) !== -1);
        result = result || (callTreeInfo.serviceLevel.toString().trim().toLowerCase().indexOf(filter) !== -1);
        if (callTreeInfo.status === CallTreeEntry.active) {
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
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.callTreeEntryDataSource.filter = filterValue;
  }
  popupDialog(action: string, callTreeInfo: CallTreeEntry) {
    switch (action) {
      case 'Add':
      case 'Edit':  this.popupCallTreeInfoEditor(action, callTreeInfo);
                    break;
      case 'Disable':
      case 'Enable': this.popupConfirmationBox(action, callTreeInfo);
                     break;
      case 'EditCallTree': this.popupCallTreeEditor(callTreeInfo);
                           break;
      case 'EditManual': this.popupManualEditor(callTreeInfo);
                         break;
    }
  }
  popupCallTreeEditor(callTreeInfo: CallTreeEntry) {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.minHeight = '600px';

    dialogConfig.autoFocus = false; // do not set focus on the first form element
    dialogConfig.width = '900px';
    dialogConfig.data = {
      callTree: callTreeInfo.callTree
    };
    const dialogRef = this.dialog.open(CallTreeEditorComponent, dialogConfig);
  }
  popupCallTreeInfoEditor(action: string, callTreeEntry: CallTreeEntry) {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.minHeight = '600px';

    dialogConfig.autoFocus = false; // do not set focus on the first form element
    dialogConfig.width = '900px';

    dialogConfig.data = {
      action,
      callTreeEntryId: callTreeEntry.callTreeEntryId,
      callTreeEntryList : this.callTreeEntryList,
    };
    const dialogRef = this.dialog.open(CallTreeEntryEditorComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((res) => {
      if (res !== undefined) {
        switch (res.action) {
          case 'Add': if (res.addSuccess) {
                        this.callTreeEntryList.push(res.callTreeInfo);
                        this.refreshDataSource();
                      }
                      break;
          case 'Edit': if (res.updateSuccess) {
                        this.updateCallTreeInfoTable(res.callTreeInfo);
                      }
                       break;
        }
      }
    });
  }
  popupConfirmationBox(action: string, callTreeInfo: CallTreeEntry) {
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
          callTreeInfo.status = CallTreeEntry.active;
          this.callTreeInfoService.enableCallTreeInfo(callTreeInfo.callTreeEntryId).subscribe((res: boolean) => {
              if (res) {
                message = 'The call tree info status is set to active succesfully.';
              } else {
                message = 'The call tree info status is fail to set to active.';
                callTreeInfo.status = CallTreeEntry.inactive;
              }
              alert(message);
          });
        } else {
          callTreeInfo.status = CallTreeEntry.inactive;
          this.callTreeInfoService.disableCallTreeInfo(callTreeInfo.callTreeEntryId).subscribe((res: boolean) => {
            if (res) {
              message = 'The call tree info status is set to inactive succesfully.';
            } else {
              message = 'The call tree info status is fail to set to inactive.';
              callTreeInfo.status = CallTreeEntry.active;
            }
            alert(message);
          });
        }
      }
    });
  }
  popupManualEditor(callTreeInfo: CallTreeEntry) {

  }
  refreshDataSource() {
    this.callTreeEntryList = this.callTreeEntryDataSource.sortData(this.callTreeEntryList, this.sort);
    this.callTreeEntryDataSource = new MatTableDataSource<CallTreeEntry>(this.callTreeEntryList);
    this.callTreeEntryDataSource.sort = this.sort;
  }
  updateCallTreeInfoTable(res: CallTreeEntry) {
    this.callTreeEntryList.filter((value) => {
      if (value.callTreeEntryId === res.callTreeEntryId) {
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
