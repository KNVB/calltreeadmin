import { CallTreeEntry } from 'src/app/classes/CallTreeEntry';
import { CallTreeEntryService } from 'src/app/services/call-tree-entry.service';
import { CallTreeEditorComponent } from './call-tree-editor/call-tree-editor.component';
import { CallTreeEntryEditorComponent } from './call-tree-entry-editor/call-tree-entry-editor.component';
import { Component, ViewChild } from '@angular/core';
import { ConfirmationBoxComponent } from '../utility/components/confirmation-box/confirmation-box.component';
import { ManualEditorComponent } from './manual-editor/manual-editor.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
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
  callTreeEntryTemplate = new CallTreeEntry();
  divisionToSystem: string[] = [];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['division', 'systemName', 'location', 'serviceLevel', 'missionCritical',
                                'timeToStartProcedure', 'contact', 'timeToEscalate', 'logRecipients',
                                'manual', 'status',  'action'];
  sharedDivisionList: string[];
  systemToCalltree = [];
  constructor(private callTreeEntryService: CallTreeEntryService,
              public dialog: MatDialog) {
    this.callTreeEntryService.getAllCallTreeEntry().subscribe((res: CallTreeEntry[]) => {
      this.callTreeEntryList = res;
      this.callTreeEntryDataSource = new MatTableDataSource<CallTreeEntry>(this.callTreeEntryList);
      this.callTreeEntryDataSource.sort = this.sort;
      this.callTreeEntryDataSource.filterPredicate = (callTreeEntry: CallTreeEntry, filter: string) => {
        let result = false;
        result = result || (callTreeEntry.division.trim().toLowerCase().indexOf(filter) !== -1);
        result = result || (callTreeEntry.systemName.trim().toLowerCase().indexOf(filter) !== -1);
        result = result || (callTreeEntry.location.trim().toLowerCase().indexOf(filter) !== -1);
        result = result || (callTreeEntry.logRecipients.trim().toLowerCase().indexOf(filter) !== -1);
        result = result || (callTreeEntry.missionCritical.trim().toLowerCase().indexOf(filter) !== -1);
        result = result || (callTreeEntry.serviceLevel.toString().trim().toLowerCase().indexOf(filter) !== -1);
        if (callTreeEntry.status === CallTreeEntry.active) {
          result = result || ('active'.indexOf(filter) !== -1);
        } else {
          result = result || ('inactive'.indexOf(filter) !== -1);
        }
        result = result || (callTreeEntry.timeToEscalate.trim().toLowerCase().indexOf(filter) !== -1);
        result = result || (callTreeEntry.timeToStartProcedure.trim().toLowerCase().indexOf(filter) !== -1);
        return result;
      };
      this.callTreeEntryList.forEach((sharedCallTreeEntry: CallTreeEntry) => {
        if (!this.divisionToSystem.hasOwnProperty(sharedCallTreeEntry.division)) {
          this.divisionToSystem[sharedCallTreeEntry.division] = [];
        }
        this.divisionToSystem[sharedCallTreeEntry.division].push(sharedCallTreeEntry.systemName);
        if (!this.systemToCalltree.hasOwnProperty(sharedCallTreeEntry.systemName)) {
          this.systemToCalltree[sharedCallTreeEntry.systemName] = [];
        }
        this.systemToCalltree[sharedCallTreeEntry.systemName] = sharedCallTreeEntry.callTree;
      });
      this.sharedDivisionList = Object.keys(this.divisionToSystem).sort();
    });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.callTreeEntryDataSource.filter = filterValue;
  }
  popupDialog(action: string, callTreeEntry: CallTreeEntry) {
    switch (action) {
      case 'Add':
      case 'Edit':  this.popupCallTreeEntryEditor(action, callTreeEntry);
                    break;
      case 'Disable':
      case 'Enable': this.popupConfirmationBox(action, callTreeEntry);
                     break;
      case 'EditCallTree': this.popupCallTreeEditor(callTreeEntry);
                           break;
      case 'EditManual': this.popupManualEditor(callTreeEntry);
                         break;
    }
  }
  popupCallTreeEditor(callTreeEntry: CallTreeEntry) {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.minHeight = '600px';

    dialogConfig.autoFocus = false; // do not set focus on the first form element
    dialogConfig.width = '900px';
    dialogConfig.data = {
      callTree: callTreeEntry.callTree,
    };
    const dialogRef = this.dialog.open(CallTreeEditorComponent, dialogConfig);
  }
  popupCallTreeEntryEditor(action: string, callTreeEntry: CallTreeEntry) {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.minHeight = '600px';

    dialogConfig.autoFocus = false; // do not set focus on the first form element
    dialogConfig.width = '900px';

    dialogConfig.data = {
      action,
      callTreeEntry: JSON.parse(JSON.stringify(callTreeEntry)),
      divisionToSystem: this.divisionToSystem,
      sharedDivisionList: this.sharedDivisionList,
      systemToCalltree: this.systemToCalltree,
    };
    const dialogRef = this.dialog.open(CallTreeEntryEditorComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((res) => {
      if (res !== undefined) {
        let message = '';
        switch (res.action) {
          case 'Add': if (res.addSuccess) {
                        this.callTreeEntryList.push(res.callTreeEntry);
                        this.refreshDataSource();
                        message = 'Add Call Tree Entry success.';
                      } else {
                        message = 'Add Call Tree Entry failure.';
                      }
                      break;
          case 'Edit': if (res.updateSuccess) {
                        this.updateCallTreeEntryTable(res.callTreeEntry);
                        message = 'Update Call Tree Entry success.';
                       } else {
                        message = 'Update Call Tree Entry failure.';
                       }
                       break;
        }
        alert(message);
      }
    });
  }
  popupConfirmationBox(action: string, callTreeEntry: CallTreeEntry) {
    let message = 'Are you sure to ' + action + ' this call tree entry?';
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
          callTreeEntry.status = CallTreeEntry.active;
          this.callTreeEntryService.enableCallTreeEntry(callTreeEntry.callTreeEntryId).subscribe((res: boolean) => {
              if (res) {
                message = 'The call tree entry status is set to active succesfully.';
              } else {
                message = 'The call tree entry status is fail to set to active.';
                callTreeEntry.status = CallTreeEntry.inactive;
              }
              alert(message);
          });
        } else {
          callTreeEntry.status = CallTreeEntry.inactive;
          this.callTreeEntryService.disableCallTreeEntry(callTreeEntry.callTreeEntryId).subscribe((res: boolean) => {
            if (res) {
              message = 'The call tree entry status is set to inactive succesfully.';
            } else {
              message = 'The call tree entry status is fail to set to inactive.';
              callTreeEntry.status = CallTreeEntry.active;
            }
            alert(message);
          });
        }
      }
    });
  }
  popupManualEditor(callTreeEntry: CallTreeEntry) {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.minHeight = '600px';
    dialogConfig.autoFocus = false; // do not set focus on the first form element
    dialogConfig.width = '900px';
    dialogConfig.data = {
      callTreeEntry: JSON.parse(JSON.stringify(callTreeEntry)),
    };
    const dialogRef = this.dialog.open(ManualEditorComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((res) => {
      if (res !== undefined) {
        let c: CallTreeEntry;
        let message = '';
        console.log('updateSuccess=' + res.updateSuccess);
        if (res.updateSuccess) {
          const updatedCallTreeEntry = res.returnObj;
          message = 'The operation manual information is updated successfully.';
          for (let i = 0; i < this.callTreeEntryList.length; i++) {
            c = this.callTreeEntryList[i];
            if (c.callTreeEntryId === updatedCallTreeEntry.callTreeEntryId) {
              this.callTreeEntryList[i] = JSON.parse(JSON.stringify(updatedCallTreeEntry));
              this.refreshDataSource();
              break;
            }
          }
        } else {
          message = 'The operation manual information is failed to update.';
        }
        alert(message);
      }
    });
  }
  refreshDataSource() {
    this.callTreeEntryList = this.callTreeEntryDataSource.sortData(this.callTreeEntryList, this.sort);
    this.callTreeEntryDataSource = new MatTableDataSource<CallTreeEntry>(this.callTreeEntryList);
    this.callTreeEntryDataSource.sort = this.sort;
  }
  updateCallTreeEntryTable(res: CallTreeEntry) {
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
