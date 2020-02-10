(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-call-tree-entry-maintenance></app-call-tree-entry-maintenance>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/call-tree-entry-maintenance/call-tree-editor/call-tree-editor.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/call-tree-entry-maintenance/call-tree-editor/call-tree-editor.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>Edit a Call Tree</h2>\r\n<form #callTreeEditForm=\"ngForm\" (ngSubmit)=\"onSubmit(callTreeEditForm)\" novalidate>\r\n  Modify this call tree is/are affected the following system(s):\r\n  <table>\r\n    <tr>\r\n      <td>Division:</td><td>System:</td>\r\n    </tr>\r\n    <tr *ngFor=\"let callTreeEntry of callTreeEntryList\">\r\n      <td style=\"text-align: center;\">{{callTreeEntry.division}}</td>\r\n      <td [innerHtml]=\"callTreeEntry.systemName|safeHtml\"></td>\r\n    </tr>\r\n  </table>\r\n  Call Tree Detail:\r\n  <ckeditor\r\n    required\r\n    name=\"callTreeDetail\"\r\n    [config]=\"ckeditorConfig\"\r\n    #callTreeDetail1=\"ngModel\"\r\n    [(ngModel)]=\"this.callTree.callTreeDetail\">\r\n  </ckeditor>\r\n  <mat-error *ngIf=\"(callTreeDetail1.touched || callTreeEditForm.submitted)  && callTreeDetail1.hasError('required')\">\r\n    Call tree is <strong>required</strong>\r\n  </mat-error>\r\n\r\n  <mat-dialog-actions>\r\n    <button mat-raised-button type=\"submit\" color=\"primary\" class=\"Update-btn\">Save</button>\r\n    <button mat-raised-button type=\"button\" class=\"Discard-btn\" (click)=\"closeDialog()\">Close</button>\r\n  </mat-dialog-actions>\r\n</form>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/call-tree-entry-maintenance/call-tree-entry-editor/call-tree-entry-editor.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/call-tree-entry-maintenance/call-tree-entry-editor/call-tree-entry-editor.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>{{ action }} A Call Tree Entry</h2>\r\n<form #callTreeEntryEditForm=\"ngForm\" (ngSubmit)=\"onSubmit(callTreeEntryEditForm)\" novalidate>\r\n  <div mat-dialog-content>\r\n    <input type=hidden name=\"callTreeEntryId\" [(ngModel)]=\"this.callTreeEntry.callTreeEntryId\">\r\n    <app-division-list-input-box\r\n      name=\"division\"\r\n      style=\"width:40%\"\r\n      [(ngModel)]=\"this.callTreeEntry.division\">\r\n    </app-division-list-input-box>\r\n    <mat-form-field style=\"width:60%;\">\r\n      <mat-label>System</mat-label>\r\n      <textarea matInput\r\n        cdkTextareaAutosize\r\n        #autosize=\"cdkTextareaAutosize\"\r\n        cdkAutosizeMinRows=\"1\"\r\n        cdkAutosizeMaxRows=\"5\"\r\n        required\r\n        name=\"systemName\"\r\n        #systemName=\"ngModel\"\r\n        [(ngModel)]=\"this.callTreeEntry.systemName\">\r\n      </textarea>\r\n      <mat-error [hidden]=\"systemName.valid || systemName.pristine\">\r\n        System Name is <strong>required</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <br>\r\n    <mat-form-field style=\"width:90%;\">\r\n      <mat-label>Location</mat-label>\r\n      <textarea matInput\r\n                cdkTextareaAutosize\r\n                #autosize=\"cdkTextareaAutosize\"\r\n                cdkAutosizeMinRows=\"1\"\r\n                cdkAutosizeMaxRows=\"5\"\r\n                required\r\n                name=\"location\"\r\n                #location=\"ngModel\"\r\n                [(ngModel)]=\"this.callTreeEntry.location\">\r\n      </textarea>\r\n      <mat-error  [hidden]=\"location.valid || location.pristine\">\r\n        Location is <strong>required</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <br>\r\n    <mat-form-field>\r\n      <mat-label>Service Level</mat-label>\r\n      <mat-select [(ngModel)]=\"this.callTreeEntry.serviceLevel\" name=\"serviceLevel\" #serviceLevel=\"ngModel\" required>\r\n        <mat-option *ngFor=\"let serviceLevel of this.serviceLevelList\" [value]=serviceLevel>\r\n          {{serviceLevel}}\r\n        </mat-option>\r\n      </mat-select>\r\n      <mat-error  [hidden]=\"serviceLevel.valid || serviceLevel.pristine\">\r\n        Service Level is <strong>required</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <mat-label>Mission Critical</mat-label>\r\n        <input matInput type=\"text\"\r\n                [(ngModel)]=\"this.callTreeEntry.missionCritical\"\r\n                required\r\n                name=\"missionCritical\"\r\n                #missionCritical=\"ngModel\">\r\n        <mat-error [hidden]=\"missionCritical.valid || missionCritical.pristine\">\r\n          Missiong Critical is <strong>required</strong>\r\n        </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field style=\"width:250px\">\r\n      <mat-label>Appreciation Log Recipients</mat-label>\r\n        <textarea matInput\r\n                  cdkTextareaAutosize\r\n                  #autosize=\"cdkTextareaAutosize\"\r\n                  cdkAutosizeMinRows=\"1\"\r\n                  cdkAutosizeMaxRows=\"5\"\r\n                  required\r\n                  appLogRecipientValidator\r\n                  name=\"logRecipients\"\r\n                  #logRecipients=\"ngModel\"\r\n                  [(ngModel)]=\"this.callTreeEntry.logRecipients\"></textarea>\r\n      <mat-error *ngIf=\"logRecipients.hasError('required')\">\r\n        Appreciation Log Recipients is <strong>required</strong>\r\n      </mat-error>\r\n      <mat-error *ngIf=\"logRecipients.hasError('email')\">\r\n        {{logRecipients.errors['email']}} is not a valid email address.\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <mat-label>Status</mat-label>\r\n      <mat-select\r\n        [(ngModel)]=\"this.callTreeEntry.status\"\r\n        name=\"status\"\r\n        #status=\"ngModel\">\r\n        <mat-option [value]=\"activeCallTreeEntry\">Active</mat-option>\r\n        <mat-option [value]=\"inActiveCallTreeEntry\">Inactive</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <mat-form-field style=\"width:350px\">\r\n      <mat-label>\r\n        Time Interval to start established procedures\r\n      </mat-label>\r\n      <textarea matInput\r\n          cdkTextareaAutosize\r\n          #autosize=\"cdkTextareaAutosize\"\r\n          cdkAutosizeMinRows=\"1\"\r\n          cdkAutosizeMaxRows=\"5\"\r\n          required\r\n          name=\"timeToStartProcedure\"\r\n          #timeToStartProcedure=\"ngModel\"\r\n          [(ngModel)]=\"this.callTreeEntry.timeToStartProcedure\">\r\n      </textarea>\r\n      <mat-error [hidden]=\"timeToStartProcedure.valid||timeToStartProcedure.pristine\">\r\n        Time Interval to start established procedures is <strong>required</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field style=\"width:300px\">\r\n        <mat-label>\r\n          Time Interval to escalate if no reply\r\n        </mat-label>\r\n        <textarea matInput\r\n          cdkTextareaAutosize\r\n          #autosize=\"cdkTextareaAutosize\"\r\n          cdkAutosizeMinRows=\"1\"\r\n          cdkAutosizeMaxRows=\"5\"\r\n          required\r\n          name=\"timeToEscalate\"\r\n          #timeToEscalate=\"ngModel\"\r\n          [(ngModel)]=\"this.callTreeEntry.timeToEscalate\">\r\n        </textarea>\t\r\n        <mat-error [hidden]=\"timeToEscalate.valid||timeToEscalate.pristine\">\r\n          Time Interval to escalate if no reply is <strong>required</strong>\r\n        </mat-error>\r\n    </mat-form-field>\r\n    <br>\r\n\t  <div *ngIf=\"(this.callTreeEntry.callTreeEntryId==-1)\">\r\n      <hr>\r\n      Call Tree:\r\n      <mat-radio-group\r\n        name=\"callTreeType\"\r\n        (ngModelChange)=onCallTreeTypeChange($event)\r\n        [(ngModel)]=\"callTreeType\">\r\n        <div style=\"display:flex;flex-direction: column;padding-top: 5px;\">\r\n          <div style=\"display:flex;flex-direction: column;\">\r\n            <mat-radio-button style=\"padding-bottom: 5px;\" [value]=\"1\">Create an individual CallTree</mat-radio-button>\r\n            <div tyle=\"display:flex;\" *ngIf=\"(callTreeType==1)\">\r\n              Call Tree Detail:\r\n              <ckeditor\r\n                required\r\n                name=\"callTreeDetail\"\r\n                [config]=\"callTreeDetailEditorConfig\"\r\n                #callTreeDetail1=\"ngModel\"\r\n                [(ngModel)]=\"this.callTreeEntry.callTree.callTreeDetail\">\r\n              </ckeditor>\r\n              <mat-error *ngIf=\"(callTreeDetail1.touched || callTreeEntryEditForm.submitted)  && callTreeDetail1.hasError('required')\">\r\n                Call tree is <strong>required</strong>\r\n              </mat-error>\r\n            </div>\r\n          </div>\r\n          <div style=\"display:flex;flex-direction: column;padding-top: 5px;\">\r\n            <mat-radio-button [value]=\"2\">Share CallTree with the following system:</mat-radio-button>\r\n            <div tyle=\"display:flex;padding-top:5px;\" *ngIf=\"(callTreeType==2)\">\r\n              <mat-form-field>\r\n                <mat-label>Division</mat-label>\r\n                <mat-select\r\n                  required\r\n                  name=\"sharedDivision\"\r\n                  [(ngModel)]=\"sharedDivision\"\r\n                  (ngModelChange)=onSharedDivisionChange($event)\r\n                  #sharedDivisionValidator=\"ngModel\">\r\n                  <mat-option *ngFor=\"let division of this.sharedDivisionList\" [value]=\"division\">\r\n                    {{division}}\r\n                  </mat-option>\r\n                </mat-select>\r\n                <mat-error *ngIf=\"sharedDivisionValidator.hasError('required')\">\r\n                  Division is <strong>required</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <mat-label>System</mat-label>\r\n                <mat-select\r\n                  required\r\n                  name=\"sharedCallTreeId\"\r\n                  [(ngModel)]=\"this.callTreeEntry.callTree.callTreeId\"\r\n                  (selectionChange)=\"updateCallTreeDetail($event)\"\r\n                  #sharedSystemValidator=\"ngModel\">\r\n                  <mat-option\r\n                    *ngFor=\"let sharedSystemName of this.sharedSystemNameList\" [value]=\"this.systemToCalltree[sharedSystemName].callTreeId\">\r\n                    {{sharedSystemName}}\r\n                  </mat-option>\r\n                </mat-select>\r\n                <mat-error *ngIf=\"sharedSystemValidator.hasError('required')\">\r\n                  System is <strong>required</strong>\r\n                </mat-error>\r\n              </mat-form-field><br>\r\n              Call Tree Detail:\r\n              <div [innerHTML]=\"this.sharedCallTreeDetail|safeHtml\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-radio-group>\r\n      <hr>\r\n      <app-manual-list  \r\n        name=\"manuals\" \r\n        [message]=\"this.manualMessage\"\r\n        [(ngModel)]=\"this.callTreeEntry.manuals\">\r\n      </app-manual-list>\r\n<!--      \r\n      <table style=\"width:100%;\">\r\n        <tr>\r\n          <td>Operation Manual(Optional):</td>\r\n          <td>\r\n            <button style=\"float:right\" mat-raised-button type=\"button\" color=\"primary\" class=\"Update-btn\" (click)=\"addManual()\">\r\n              Add Operation Manual\r\n            </button>\r\n          </td>\r\n        </tr>\r\n        <tr *ngFor=\"let manual of this.callTreeEntry.manuals; let i = index\">\r\n          <td colspan=2>\r\n            <mat-form-field>\r\n              <mat-label>Manual Location</mat-label>\r\n              <input\r\n                matInput\r\n                required\r\n                type=\"text\"\r\n                [(ngModel)]=\"manual.manualLocation\"\r\n                name=\"manualLocation{{i}}\"\r\n                #manualLocationValidator=\"ngModel\">\r\n              <mat-error *ngIf=\"manualLocationValidator.hasError('required')\">\r\n                Manual location is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <mat-label>Manual Description</mat-label>\r\n              <input\r\n                matInput\r\n                required\r\n                type=\"text\"\r\n                [(ngModel)]=\"manual.description\"\r\n                name=\"manualDesc{{i}}\"\r\n                #manualDescValidator=\"ngModel\">\r\n              <mat-error *ngIf=\"manualDescValidator.hasError('required')\">\r\n                Manual Description is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <mat-label>Last Update Date</mat-label>\r\n              <input\r\n                matInput\r\n                required\r\n                type=\"text\"\r\n                [(ngModel)]=\"manual.lastUpdateDate\"\r\n                name=\"manualLastUpdateDate{{i}}\"\r\n                #manualLastUpdateDateValidator=\"ngModel\">\r\n              <mat-error *ngIf=\"manualLastUpdateDateValidator.hasError('required')\">\r\n                Last Update Date is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n            &nbsp;&nbsp;&nbsp;&nbsp;\r\n            <button\r\n              style=\"font-weight: bold;;font-size: 30px;vertical-align: middle;\"\r\n              mat-raised-button type=\"button\"\r\n              color=\"primary\"\r\n              class=\"Update-btn\"\r\n              (click)=\"removeManual(i)\">\r\n                -\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n-->      \r\n    </div>\r\n  </div>\r\n  \r\n  <mat-dialog-actions>\r\n    <button mat-raised-button type=\"submit\" color=\"primary\" class=\"Update-btn\">Save</button>\r\n    <button mat-raised-button type=\"button\" class=\"Discard-btn\" (click)=\"closeDialog()\">Close</button>\r\n  </mat-dialog-actions>\r\n</form>\r\n<!--\r\n{{this.callTreeEntry|json}}\r\n-->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/call-tree-entry-maintenance/call-tree-entry-maintenance.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/call-tree-entry-maintenance/call-tree-entry-maintenance.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"center\">Call Tree Entry Maintenance</div>\n<table style=\"margin-left: 30px;margin-right: 30px;\" >\n  <tr>\n    <td>\n      <mat-form-field>\n        <mat-label>\n          Filter\n        </mat-label>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\">\n      </mat-form-field>\n    </td>\n    <td>\n      <button \n        style=\"float:right\" \n        mat-raised-button \n        color=\"primary\" \n        (click)=\"popupDialog('Add',callTreeEntryTemplate)\">\n          Add New Call Tree Entry\n      </button>\n    </td>\n  </tr>\n  <tr>\n    <td colspan=\"2\">\n      <table \n        mat-table \n        [dataSource]=\"callTreeEntryDataSource\" \n        matSort \n        matSortActive=\"systemName\" \n        matSortDirection=\"asc\" \n        class=\"mat-elevation-z8\">\n        <ng-container matColumnDef=\"division\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Division</th>\n            <td mat-cell style=\"text-align: left !important;\" *matCellDef=\"let element\"> {{element.division}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"systemName\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header=\"systemName\">System</th>\n            <td mat-cell style=\"text-align: left !important;\" *matCellDef=\"let element\"> {{element.systemName}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"location\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Location</th>\n            <td mat-cell *matCellDef=\"let element\" [innerHTML]=\"element.location| safeHtml\"></td>\n        </ng-container>\n        <ng-container matColumnDef=\"serviceLevel\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Service<br>Level<a href=\"#serviceLevel\">*</a></th>\n            <td mat-cell *matCellDef=\"let element\">{{element.serviceLevel}}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"missionCritical\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Mission Critical</th>\n          <td mat-cell *matCellDef=\"let element\">{{element.missionCritical}}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"timeToStartProcedure\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Time Interval to start established<br>procedures<a href=\"#timeLimit\">#</a></th>\n            <td mat-cell *matCellDef=\"let element\">{{element.timeToStartProcedure}}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"contact\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Call tree</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <a href=\"javascript:void(0)\" (click)=\"popupDialog('EditCallTree',element)\">Edit CallTree</a>\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"timeToEscalate\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Time Interval to <br>escalate<br>if no reply</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.timeToEscalate}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"logRecipients\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Appreciation<br>Log Recipients</th>\n            <td mat-cell style=\"text-align: left !important;\" *matCellDef=\"let element\" [innerHTML]=\"element.logRecipients| safeHtml\"></td>\n        </ng-container>\n        <ng-container matColumnDef=\"manual\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Operation Manual</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <a href=\"javascript:void(0)\" (click)=\"popupDialog('EditManual',element)\">Edit Manual Info</a>\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"status\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\n            <td mat-cell *matCellDef=\"let element\" [innerHTML]=\"(element.status === activeCallTreeEntry)?'Active':'Inactive'\"></td>\n        </ng-container>\n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Action</th>\n          <td mat-cell *matCellDef=\"let element\" class=\"action-link\">\n            <a href=\"javascript:void(0)\" (click)=\"popupDialog('Edit',element)\">Edit</a>|<a *ngIf=\"(element.status === activeCallTreeEntry)\" href=\"javascript:void(0)\" (click)=\"popupDialog('Disable',element)\">Disable</a><a *ngIf=\"(element.status === inActiveCallTreeEntry)\" href=\"javascript:void(0)\" (click)=\"popupDialog('Enable',element)\">Enable</a>\n          </td>\n        </ng-container>\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\" class=\"heading\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n      <br>\n      Remark:\n      <p>\n        If a problematic system reported is under all Branches but not listed in the F5 Operator Call Tree,<br>Operator should let the originator (the one who reported the problematic system) know the system is not covered in the list of systems monitored by F5 Operator <br>and ask the originator to provide the follow-up contacts, and call the relevant officers accordingly.In case the originator does not know who should be contacted,<br>Operator should call SEO(F)51, SO(F)51 or SSO(F)5 for assistance.\n      </p>\n      <ul style=\"margin: 0; padding: 0;list-style: none\">\n        <li>\n          <a name=\"serviceLevel\">*Service Level</a>\n          <ol>\n            <li>system monitoring + problem reporting</li>\n            <li>system monitoring + problem reporting + system reboot</li>\n            <li>system monitoring + problem reporting + system reboot+ routine computer operation</li>\n          </ol>\n          <br>\n        </li>\n        <li>\n          <a name=\"timeLimit\">\n            # Start to count after identified the system\n          </a>\n        </li>\n      </ul>\n    </td>\n  </tr>\n</table>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/call-tree-entry-maintenance/manual-editor/manual-editor.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/call-tree-entry-maintenance/manual-editor/manual-editor.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>Edit a Operation Manual</h2>\r\n<form #manualEditForm=\"ngForm\" (ngSubmit)=\"onSubmit(manualEditForm)\" novalidate>\r\n  <input type=hidden name=\"callTreeEntryId\" [(ngModel)]=\"this.callTreeEntryId\">\r\n  <app-manual-list  \r\n    name=\"manuals\" \r\n    [message]=\"this.message\"\r\n    [(ngModel)]=\"this.callTreeEntry.manuals\">\r\n  </app-manual-list>\r\n  <mat-dialog-actions>\r\n    <button mat-raised-button type=\"submit\" color=\"primary\" class=\"Update-btn\">Save</button>\r\n    <button mat-raised-button type=\"button\" class=\"Discard-btn\" (click)=\"closeDialog()\">Close</button>\r\n  </mat-dialog-actions>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/utility/components/confirmation-box/confirmation-box.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/utility/components/confirmation-box/confirmation-box.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content>\r\n  {{title}}\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button mat-raised-button type=\"button\" color=\"primary\" class=\"Update-btn\" (click)=\"sayYes()\">Yes</button>\r\n  <button mat-raised-button type=\"button\" class=\"Discard-btn\" (click)=\"sayNo()\">No</button>\r\n</mat-dialog-actions>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/utility/components/division-list-input-box/division-list-input-box.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/utility/components/division-list-input-box/division-list-input-box.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field>\r\n  <mat-label>Division</mat-label>\r\n    <input matInput type=\"text\"\r\n      [(ngModel)]=\"division\"\r\n      required\r\n      [matAutocomplete]=\"divisions\"\r\n      name=\"division2\"\r\n      [divisionValidator]=\"this.divisionList\"\r\n      (ngModelChange)=\"autoCompleteFilter($event)\"\r\n      #division2=\"ngModel\">\r\n      <mat-error *ngIf=\"division2.hasError('invalidDivisionName')\">\r\n        {{division2.errors['invalidDivisionName']}} is not a valid divison name.\r\n      </mat-error>\r\n      <mat-error *ngIf=\"division2.hasError('required')\">\r\n        Division Name is <strong>required</strong>\r\n      </mat-error>\r\n      <mat-autocomplete  #divisions=\"matAutocomplete\">\r\n        <mat-option *ngFor=\"let division of this.filteredDivisionList\" [value]=\"division\">\r\n          {{ division }}\r\n        </mat-option>\r\n      </mat-autocomplete>\r\n</mat-form-field>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/utility/components/manual-list/manual-list.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/utility/components/manual-list/manual-list.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"headerRow\">\r\n      <div>\r\n      {{message}}\r\n      </div>\r\n      <div>\r\n        <button \r\n          mat-raised-button \r\n          type=\"button\" \r\n          color=\"primary\" \r\n          class=\"Update-btn\" \r\n          (click)=\"addManual()\">\r\n              Add Operation Manual\r\n            </button>\r\n      </div>\r\n    </div>\r\n    <div *ngFor=\"let manual of this.manuals; let i = index\" class=\"manualRow\" >\r\n      <div>\r\n        <mat-form-field>\r\n        <mat-label>Manual Location</mat-label>\r\n            <input\r\n              matInput\r\n              required\r\n              type=\"text\"\r\n              (ngModelChange)=\"onChange(this.manuals)\"\r\n              [(ngModel)]=\"manual.manualLocation\"\r\n              name=\"manualLocation{{i}}\"\r\n              #manualLocationValidator=\"ngModel\">\r\n            <mat-error *ngIf=\"manualLocationValidator.hasError('required')\">\r\n              Manual location is <strong>required</strong>\r\n            </mat-error>\r\n        </mat-form-field>  \r\n      </div>\r\n      <div>\r\n        <mat-form-field>\r\n            <mat-label>Manual Description</mat-label>\r\n            <input\r\n              matInput\r\n              required\r\n              (ngModelChange)=\"onChange(this.manuals)\"\r\n              type=\"text\"\r\n              [(ngModel)]=\"manual.description\"\r\n              name=\"manualDesc{{i}}\"\r\n              #manualDescValidator=\"ngModel\">\r\n            <mat-error *ngIf=\"manualDescValidator.hasError('required')\">\r\n              Manual Description is <strong>required</strong>\r\n            </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <mat-form-field style=\"width:100%\">\r\n            <mat-label>Last Update Date</mat-label>\r\n            <input\r\n              matInput\r\n              required\r\n              (ngModelChange)=\"onChange(this.manuals)\"\r\n              type=\"text\"\r\n              [(ngModel)]=\"manual.lastUpdateDate\"\r\n              name=\"manualLastUpdateDate{{i}}\"\r\n              #manualLastUpdateDateValidator=\"ngModel\">\r\n            <mat-error *ngIf=\"manualLastUpdateDateValidator.hasError('required')\">\r\n              Last Update Date is <strong>required</strong>\r\n            </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"removeButton\">\r\n         <button\r\n            style=\"font-weight: bold;font-size: 30px;vertical-align: middle;\"\r\n            mat-raised-button type=\"button\"\r\n            color=\"primary\"\r\n            class=\"Update-btn\"\r\n            (click)=\"removeManual(i)\">\r\n              -\r\n          </button>\r\n      </div>\r\n    </div>\r\n  </div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'frontEndSrc';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _modules_call_tree_entry_maintenance_call_tree_entry_maintenance_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/call-tree-entry-maintenance/call-tree-entry-maintenance.module */ "./src/app/modules/call-tree-entry-maintenance/call-tree-entry-maintenance.module.ts");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ckeditor4-angular */ "./node_modules/ckeditor4-angular/fesm2015/ckeditor4-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modules_utility_utility_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/utility/utility.module */ "./src/app/modules/utility/utility.module.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        ],
        imports: [
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            ckeditor4_angular__WEBPACK_IMPORTED_MODULE_6__["CKEditorModule"],
            _modules_call_tree_entry_maintenance_call_tree_entry_maintenance_module__WEBPACK_IMPORTED_MODULE_5__["CallTreeEntryMaintenanceModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _modules_utility_utility_module__WEBPACK_IMPORTED_MODULE_10__["UtilityModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/classes/CallTree.ts":
/*!*************************************!*\
  !*** ./src/app/classes/CallTree.ts ***!
  \*************************************/
/*! exports provided: CallTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallTree", function() { return CallTree; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CallTree {
    constructor() {
        this.callTreeId = -1;
        this.callTreeDetail = '';
    }
}


/***/ }),

/***/ "./src/app/classes/CallTreeEntry.ts":
/*!******************************************!*\
  !*** ./src/app/classes/CallTreeEntry.ts ***!
  \******************************************/
/*! exports provided: CallTreeEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallTreeEntry", function() { return CallTreeEntry; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _CallTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CallTree */ "./src/app/classes/CallTree.ts");


class CallTreeEntry {
    constructor() {
        this.callTreeEntryId = -1;
        this.callTree = new _CallTree__WEBPACK_IMPORTED_MODULE_1__["CallTree"]();
        this.division = '';
        this.location = '';
        this.logRecipients = '';
        this.manuals = [];
        this.missionCritical = '';
        this.systemName = '';
        this.status = CallTreeEntry.inactive;
        this.timeToStartProcedure = '';
        this.timeToEscalate = '';
    }
}
CallTreeEntry.active = 1;
CallTreeEntry.inactive = 0;


/***/ }),

/***/ "./src/app/classes/Manual.ts":
/*!***********************************!*\
  !*** ./src/app/classes/Manual.ts ***!
  \***********************************/
/*! exports provided: Manual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Manual", function() { return Manual; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Manual {
    constructor() {
        this.manualId = -1;
        this.manualLocation = '';
        this.description = '';
        this.lastUpdateDate = '';
    }
}


/***/ }),

/***/ "./src/app/modules/call-tree-entry-maintenance/call-tree-editor/call-tree-editor.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/call-tree-entry-maintenance/call-tree-editor/call-tree-editor.component.css ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table\r\n{\r\n  border-collapse: collapse;\r\n}\r\ntable, td, th\r\n{\r\n  border: 1px solid black;\r\n}\r\ntr:nth-child(even) \r\n{\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jYWxsLXRyZWUtZW50cnktbWFpbnRlbmFuY2UvY2FsbC10cmVlLWVkaXRvci9jYWxsLXRyZWUtZWRpdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUseUJBQXlCO0FBQzNCO0FBQ0E7O0VBRUUsdUJBQXVCO0FBQ3pCO0FBQ0E7O0VBRUUseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jYWxsLXRyZWUtZW50cnktbWFpbnRlbmFuY2UvY2FsbC10cmVlLWVkaXRvci9jYWxsLXRyZWUtZWRpdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZVxyXG57XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG50YWJsZSwgdGQsIHRoXHJcbntcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG50cjpudGgtY2hpbGQoZXZlbikgXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/modules/call-tree-entry-maintenance/call-tree-editor/call-tree-editor.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/call-tree-entry-maintenance/call-tree-editor/call-tree-editor.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: CallTreeEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallTreeEditorComponent", function() { return CallTreeEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_call_tree_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/call-tree.service */ "./src/app/services/call-tree.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let CallTreeEditorComponent = class CallTreeEditorComponent {
    constructor(callTreeService, dialog, dialogRef, data) {
        this.callTreeService = callTreeService;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.ckeditorConfig = { extraPlugins: 'colorbutton',
            removeButtons: 'BGColor,BulletedList,PasteFromWord,PasteText',
            toolbarGroups: [
                { name: 'clipboard', groups: ['clipboard', 'undo'] },
                { name: 'colors', groups: ['colors'] },
                { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
                { name: 'paragraph', groups: ['list'] },
            ]
        };
        this.callTree = data.callTree;
        this.callTreeService.getCallTreeEntryByCallTreeId(this.callTree.callTreeId).subscribe((res) => {
            this.callTreeEntryList = res;
        });
    }
    closeDialog() {
        this.dialog.closeAll();
    }
    onSubmit(form) {
        if (form.pristine && form.valid) {
            this.closeDialog();
        }
        else {
            if (form.valid) {
                this.updateCallTree();
            }
        }
    }
    updateCallTree() {
        this.callTreeService.updateCallTree(this.callTree).subscribe((res) => {
            let message = '';
            if (res) {
                message += 'Update Call Tree success.';
                this.dialogRef.close();
            }
            else {
                message += 'Update Call Tree Entry failure.';
            }
            alert(message);
        });
    }
};
CallTreeEditorComponent.ctorParameters = () => [
    { type: src_app_services_call_tree_service__WEBPACK_IMPORTED_MODULE_1__["CallTreeService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
CallTreeEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-call-tree-editor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./call-tree-editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/call-tree-entry-maintenance/call-tree-editor/call-tree-editor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./call-tree-editor.component.css */ "./src/app/modules/call-tree-entry-maintenance/call-tree-editor/call-tree-editor.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], CallTreeEditorComponent);



/***/ }),

/***/ "./src/app/modules/call-tree-entry-maintenance/call-tree-entry-editor/call-tree-entry-editor.component.css":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/call-tree-entry-maintenance/call-tree-entry-editor/call-tree-entry-editor.component.css ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2FsbC10cmVlLWVudHJ5LW1haW50ZW5hbmNlL2NhbGwtdHJlZS1lbnRyeS1lZGl0b3IvY2FsbC10cmVlLWVudHJ5LWVkaXRvci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/call-tree-entry-maintenance/call-tree-entry-editor/call-tree-entry-editor.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/call-tree-entry-maintenance/call-tree-entry-editor/call-tree-entry-editor.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: CallTreeEntryEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallTreeEntryEditorComponent", function() { return CallTreeEntryEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_classes_CallTreeEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/CallTreeEntry */ "./src/app/classes/CallTreeEntry.ts");
/* harmony import */ var src_app_services_call_tree_entry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/call-tree-entry.service */ "./src/app/services/call-tree-entry.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_classes_Manual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/classes/Manual */ "./src/app/classes/Manual.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");






let CallTreeEntryEditorComponent = class CallTreeEntryEditorComponent {
    constructor(callTreeEntryService, dialog, dialogRef, data) {
        this.callTreeEntryService = callTreeEntryService;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.manualMessage = 'Operation Manual(Optional):';
        this.activeCallTreeEntry = src_app_classes_CallTreeEntry__WEBPACK_IMPORTED_MODULE_1__["CallTreeEntry"].active;
        this.inActiveCallTreeEntry = src_app_classes_CallTreeEntry__WEBPACK_IMPORTED_MODULE_1__["CallTreeEntry"].inactive;
        this.callTreeEntry = null;
        this.callTreeType = 1;
        this.divisionToSystem = [];
        this.systemToCalltree = [];
        this.serviceLevelList = ['1', '2', '3'];
        this.callTreeDetailEditorConfig = { extraPlugins: 'colorbutton',
            removeButtons: 'BGColor,BulletedList,PasteFromWord,PasteText',
            toolbarGroups: [
                { name: 'clipboard', groups: ['clipboard', 'undo'] },
                { name: 'colors', groups: ['colors'] },
                { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
                { name: 'paragraph', groups: ['list'] },
            ]
        };
        const callTreeEntryId = data.callTreeEntryId;
        this.action = data.action;
        if (callTreeEntryId === -1) {
            this.callTreeEntry = new src_app_classes_CallTreeEntry__WEBPACK_IMPORTED_MODULE_1__["CallTreeEntry"]();
        }
        data.callTreeEntryList.forEach((sharedCallTreeEntry) => {
            if (callTreeEntryId > -1) {
                if (sharedCallTreeEntry.callTreeEntryId === callTreeEntryId) {
                    this.callTreeEntry = sharedCallTreeEntry;
                }
            }
            if (!this.divisionToSystem.hasOwnProperty(sharedCallTreeEntry.division)) {
                this.divisionToSystem[sharedCallTreeEntry.division] = [];
            }
            this.divisionToSystem[sharedCallTreeEntry.division].push(sharedCallTreeEntry.systemName);
            if (!this.systemToCalltree.hasOwnProperty(sharedCallTreeEntry.systemName)) {
                this.systemToCalltree[sharedCallTreeEntry.systemName] = [];
            }
            this.systemToCalltree[sharedCallTreeEntry.systemName] = sharedCallTreeEntry.callTree;
        });
        this.sharedDivisionList = Object.keys(this.divisionToSystem);
        /*
        console.log(this.systemToCalltree);
        console.log(this.divisionToSystem);
        */
    }
    addCallTreeEntry() {
        let message = '';
        console.log(this.callTreeEntry.manuals);
        this.callTreeEntryService.addCallTreeEntry(this.callTreeEntry).subscribe((res) => {
            if (res !== null) {
                message += 'Add Call Tree Entry success.';
                this.callTreeEntry = res;
                this.dialogRef.close({ addSuccess: res, action: this.action, callTreeEntry: this.callTreeEntry });
            }
            else {
                message += 'Add Call Tree Entry failure.';
            }
            alert(message);
            console.log('action:' + this.action);
        });
    }
    addManual() {
        const manual = new src_app_classes_Manual__WEBPACK_IMPORTED_MODULE_4__["Manual"]();
        this.callTreeEntry.manuals.push(manual);
    }
    closeDialog() {
        this.dialog.closeAll();
    }
    ngOnInit() {
    }
    onCallTreeTypeChange(callTreeType) {
        if (callTreeType === 1) { // new a individual call tree
            this.callTreeEntry.callTree.callTreeId = -1;
            this.sharedCallTreeDetail = '';
        }
    }
    onSharedDivisionChange(division) {
        this.sharedSystemNameList = this.divisionToSystem[division];
    }
    onSubmit(form) {
        console.log('form.dirty=' + form.dirty);
        console.log('form.valid=' + form.valid);
        if (form.pristine && form.valid) {
            this.closeDialog();
        }
        else {
            if (form.valid) {
                switch (this.action) {
                    case 'Add':
                        this.addCallTreeEntry();
                        break;
                    case 'Edit':
                        this.updateCallTreeEntry();
                        break;
                }
            }
        }
    }
    removeManual(index) {
        this.callTreeEntry.manuals.splice(index, 1);
    }
    updateCallTreeDetail(event) {
        const target = event.source.selected._element.nativeElement;
        const systemName = target.innerText.trim();
        this.sharedCallTreeDetail = this.systemToCalltree[systemName].callTreeDetail;
        this.sharedCallTreeDetail = this.sharedCallTreeDetail.replace(/<br \/>/g, '');
    }
    updateCallTreeEntry() {
        let message = '';
        this.callTreeEntryService.updateCallTreeEntry(this.callTreeEntry).subscribe((res) => {
            if (res) {
                message += 'Update Call Tree Entry success.';
                this.dialogRef.close({ addSuccess: res, action: this.action, callTreeEntry: this.callTreeEntry });
            }
            else {
                message += 'Update Call Tree Entry failure.';
            }
            alert(message);
            console.log('action:' + this.action);
        });
    }
};
CallTreeEntryEditorComponent.ctorParameters = () => [
    { type: src_app_services_call_tree_entry_service__WEBPACK_IMPORTED_MODULE_2__["CallTreeEntryService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
];
CallTreeEntryEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-call-tree-entry-editor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./call-tree-entry-editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/call-tree-entry-maintenance/call-tree-entry-editor/call-tree-entry-editor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./call-tree-entry-editor.component.css */ "./src/app/modules/call-tree-entry-maintenance/call-tree-entry-editor/call-tree-entry-editor.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]))
], CallTreeEntryEditorComponent);



/***/ }),

/***/ "./src/app/modules/call-tree-entry-maintenance/call-tree-entry-maintenance.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/call-tree-entry-maintenance/call-tree-entry-maintenance.component.css ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".heading\r\n{\r\n  background-color:#ccffcc;\r\n  text-align: center;\r\n  font:bold 14px Calibri;\r\n}\r\n.center\r\n{\r\n  display: table;\r\n  margin: 0 auto;\r\n  text-align: center ;\r\n  font:bold 20px arial;\r\n  font-weight:bold;\r\n}\r\n.container\r\n{\r\n  /*\r\n  border:1px solid #709394;\r\n  */\r\n  margin: 30px;\r\n  overflow: hidden;\r\n  position: absolute;\r\n}\r\n.mat-table\r\n{\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  padding: 0px;\r\n  table-layout: fixed;\r\n  font-family:arial;\r\n  position: relative;\r\n  max-height:70%;\r\n}\r\n.mat-table th\r\n{\r\n  border: 1px solid black;\r\n  padding:0px;\r\n  margin:0px;\r\n  font:bold 14px Calibri;\r\n}\r\n.mat-table td\r\n{\r\n  border: 1px solid #999;\r\n  padding: 3px;\r\n  margin: 0px;\r\n  position: relative;\r\n}\r\n.mat-row:hover {\r\n  background-color: rgb(243, 243, 243);\r\n}\r\n.mat-cell\r\n{\r\n  font:12px Calibri;\r\n  text-align: center;\r\n  padding-left:3px;\r\n}\r\n.mat-header-cell {\r\n  text-align: center;\r\n}\r\n.normal\r\n{\r\n  font:12px Calibri;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jYWxsLXRyZWUtZW50cnktbWFpbnRlbmFuY2UvY2FsbC10cmVlLWVudHJ5LW1haW50ZW5hbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7QUFDQTs7RUFFRSxjQUFjO0VBQ2QsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUU7O0dBRUM7RUFDRCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUVBOztFQUVFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7QUFDQTs7RUFFRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBOztFQUVFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NhbGwtdHJlZS1lbnRyeS1tYWludGVuYW5jZS9jYWxsLXRyZWUtZW50cnktbWFpbnRlbmFuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5nXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNjY2ZmY2M7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQ6Ym9sZCAxNHB4IENhbGlicmk7XHJcbn1cclxuLmNlbnRlclxyXG57XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyIDtcclxuICBmb250OmJvbGQgMjBweCBhcmlhbDtcclxuICBmb250LXdlaWdodDpib2xkO1xyXG59XHJcbi5jb250YWluZXJcclxue1xyXG4gIC8qXHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjNzA5Mzk0O1xyXG4gICovXHJcbiAgbWFyZ2luOiAzMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4ubWF0LXRhYmxlXHJcbntcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gIGZvbnQtZmFtaWx5OmFyaWFsO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtaGVpZ2h0OjcwJTtcclxufVxyXG4ubWF0LXRhYmxlIHRoXHJcbntcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nOjBweDtcclxuICBtYXJnaW46MHB4O1xyXG4gIGZvbnQ6Ym9sZCAxNHB4IENhbGlicmk7XHJcbn1cclxuLm1hdC10YWJsZSB0ZFxyXG57XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5tYXQtcm93OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyNDMsIDI0Myk7XHJcbn1cclxuLm1hdC1jZWxsXHJcbntcclxuICBmb250OjEycHggQ2FsaWJyaTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OjNweDtcclxufVxyXG4ubWF0LWhlYWRlci1jZWxsIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm5vcm1hbFxyXG57XHJcbiAgZm9udDoxMnB4IENhbGlicmk7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/modules/call-tree-entry-maintenance/call-tree-entry-maintenance.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/call-tree-entry-maintenance/call-tree-entry-maintenance.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CallTreeEntryMaintenanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallTreeEntryMaintenanceComponent", function() { return CallTreeEntryMaintenanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_classes_CallTreeEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/CallTreeEntry */ "./src/app/classes/CallTreeEntry.ts");
/* harmony import */ var src_app_services_call_tree_entry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/call-tree-entry.service */ "./src/app/services/call-tree-entry.service.ts");
/* harmony import */ var _call_tree_editor_call_tree_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./call-tree-editor/call-tree-editor.component */ "./src/app/modules/call-tree-entry-maintenance/call-tree-editor/call-tree-editor.component.ts");
/* harmony import */ var _call_tree_entry_editor_call_tree_entry_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./call-tree-entry-editor/call-tree-entry-editor.component */ "./src/app/modules/call-tree-entry-maintenance/call-tree-entry-editor/call-tree-entry-editor.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _utility_components_confirmation_box_confirmation_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utility/components/confirmation-box/confirmation-box.component */ "./src/app/modules/utility/components/confirmation-box/confirmation-box.component.ts");
/* harmony import */ var _manual_editor_manual_editor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manual-editor/manual-editor.component */ "./src/app/modules/call-tree-entry-maintenance/manual-editor/manual-editor.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");











let CallTreeEntryMaintenanceComponent = class CallTreeEntryMaintenanceComponent {
    constructor(callTreeEntryService, dialog) {
        this.callTreeEntryService = callTreeEntryService;
        this.dialog = dialog;
        this.activeCallTreeEntry = src_app_classes_CallTreeEntry__WEBPACK_IMPORTED_MODULE_1__["CallTreeEntry"].active;
        this.inActiveCallTreeEntry = src_app_classes_CallTreeEntry__WEBPACK_IMPORTED_MODULE_1__["CallTreeEntry"].inactive;
        this.callTreeEntryTemplate = new src_app_classes_CallTreeEntry__WEBPACK_IMPORTED_MODULE_1__["CallTreeEntry"]();
        this.displayedColumns = ['division', 'systemName', 'location', 'serviceLevel', 'missionCritical',
            'timeToStartProcedure', 'contact', 'timeToEscalate', 'logRecipients',
            'manual', 'status', 'action'];
        this.callTreeEntryService.getAllCallTreeEntry().subscribe((res) => {
            this.callTreeEntryList = res;
            this.callTreeEntryDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](res);
            this.callTreeEntryDataSource.sort = this.sort;
            this.callTreeEntryDataSource.filterPredicate = (callTreeEntry, filter) => {
                let result = false;
                result = result || (callTreeEntry.division.trim().toLowerCase().indexOf(filter) !== -1);
                result = result || (callTreeEntry.systemName.trim().toLowerCase().indexOf(filter) !== -1);
                result = result || (callTreeEntry.location.trim().toLowerCase().indexOf(filter) !== -1);
                result = result || (callTreeEntry.logRecipients.trim().toLowerCase().indexOf(filter) !== -1);
                result = result || (callTreeEntry.missionCritical.trim().toLowerCase().indexOf(filter) !== -1);
                result = result || (callTreeEntry.serviceLevel.toString().trim().toLowerCase().indexOf(filter) !== -1);
                if (callTreeEntry.status === src_app_classes_CallTreeEntry__WEBPACK_IMPORTED_MODULE_1__["CallTreeEntry"].active) {
                    result = result || ('active'.indexOf(filter) !== -1);
                }
                else {
                    result = result || ('inactive'.indexOf(filter) !== -1);
                }
                result = result || (callTreeEntry.timeToEscalate.trim().toLowerCase().indexOf(filter) !== -1);
                result = result || (callTreeEntry.timeToStartProcedure.trim().toLowerCase().indexOf(filter) !== -1);
                return result;
            };
        });
    }
    applyFilter(filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.callTreeEntryDataSource.filter = filterValue;
    }
    popupDialog(action, callTreeEntry) {
        switch (action) {
            case 'Add':
            case 'Edit':
                this.popupCallTreeEntryEditor(action, callTreeEntry);
                break;
            case 'Disable':
            case 'Enable':
                this.popupConfirmationBox(action, callTreeEntry);
                break;
            case 'EditCallTree':
                this.popupCallTreeEditor(callTreeEntry);
                break;
            case 'EditManual':
                this.popupManualEditor(callTreeEntry);
                break;
        }
    }
    popupCallTreeEditor(callTreeEntry) {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
        // dialogConfig.disableClose = true;
        // dialogConfig.minHeight = '600px';
        dialogConfig.autoFocus = false; // do not set focus on the first form element
        dialogConfig.width = '900px';
        dialogConfig.data = {
            callTree: callTreeEntry.callTree,
        };
        const dialogRef = this.dialog.open(_call_tree_editor_call_tree_editor_component__WEBPACK_IMPORTED_MODULE_3__["CallTreeEditorComponent"], dialogConfig);
    }
    popupCallTreeEntryEditor(action, callTreeEntry) {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
        // dialogConfig.disableClose = true;
        // dialogConfig.minHeight = '600px';
        dialogConfig.autoFocus = false; // do not set focus on the first form element
        dialogConfig.width = '900px';
        dialogConfig.data = {
            action,
            callTreeEntryId: callTreeEntry.callTreeEntryId,
            callTreeEntryList: this.callTreeEntryList,
        };
        const dialogRef = this.dialog.open(_call_tree_entry_editor_call_tree_entry_editor_component__WEBPACK_IMPORTED_MODULE_4__["CallTreeEntryEditorComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe((res) => {
            if (res !== undefined) {
                switch (res.action) {
                    case 'Add':
                        if (res.addSuccess) {
                            this.callTreeEntryList.push(res.callTreeEntry);
                            this.refreshDataSource();
                        }
                        break;
                    case 'Edit':
                        if (res.updateSuccess) {
                            this.updateCallTreeEntryTable(res.callTreeEntry);
                        }
                        break;
                }
            }
        });
    }
    popupConfirmationBox(action, callTreeEntry) {
        let message = 'Are you sure to ' + action + ' this call tree entry?';
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
        // dialogConfig.disableClose = true;
        // dialogConfig.minHeight = '600px';
        dialogConfig.autoFocus = false; // do not set focus on the first form element
        dialogConfig.width = '350px';
        dialogConfig.data = { title: message };
        const dialogRef = this.dialog.open(_utility_components_confirmation_box_confirmation_box_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationBoxComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe((sayYes) => {
            if (sayYes) {
                if (action === 'Enable') {
                    callTreeEntry.status = src_app_classes_CallTreeEntry__WEBPACK_IMPORTED_MODULE_1__["CallTreeEntry"].active;
                    this.callTreeEntryService.enableCallTreeEntry(callTreeEntry.callTreeEntryId).subscribe((res) => {
                        if (res) {
                            message = 'The call tree entry status is set to active succesfully.';
                        }
                        else {
                            message = 'The call tree entry status is fail to set to active.';
                            callTreeEntry.status = src_app_classes_CallTreeEntry__WEBPACK_IMPORTED_MODULE_1__["CallTreeEntry"].inactive;
                        }
                        alert(message);
                    });
                }
                else {
                    callTreeEntry.status = src_app_classes_CallTreeEntry__WEBPACK_IMPORTED_MODULE_1__["CallTreeEntry"].inactive;
                    this.callTreeEntryService.disableCallTreeEntry(callTreeEntry.callTreeEntryId).subscribe((res) => {
                        if (res) {
                            message = 'The call tree entry status is set to inactive succesfully.';
                        }
                        else {
                            message = 'The call tree entry status is fail to set to inactive.';
                            callTreeEntry.status = src_app_classes_CallTreeEntry__WEBPACK_IMPORTED_MODULE_1__["CallTreeEntry"].active;
                        }
                        alert(message);
                    });
                }
            }
        });
    }
    popupManualEditor(callTreeEntry) {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
        // dialogConfig.disableClose = true;
        // dialogConfig.minHeight = '600px';
        dialogConfig.autoFocus = false; // do not set focus on the first form element
        dialogConfig.width = '900px';
        dialogConfig.data = {
            callTreeEntry,
        };
        const dialogRef = this.dialog.open(_manual_editor_manual_editor_component__WEBPACK_IMPORTED_MODULE_7__["ManualEditorComponent"], dialogConfig);
    }
    refreshDataSource() {
        this.callTreeEntryList = this.callTreeEntryDataSource.sortData(this.callTreeEntryList, this.sort);
        this.callTreeEntryDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](this.callTreeEntryList);
        this.callTreeEntryDataSource.sort = this.sort;
    }
    updateCallTreeEntryTable(res) {
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
};
CallTreeEntryMaintenanceComponent.ctorParameters = () => [
    { type: src_app_services_call_tree_entry_service__WEBPACK_IMPORTED_MODULE_2__["CallTreeEntryService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"], { static: true })
], CallTreeEntryMaintenanceComponent.prototype, "sort", void 0);
CallTreeEntryMaintenanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-call-tree-entry-maintenance',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./call-tree-entry-maintenance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/call-tree-entry-maintenance/call-tree-entry-maintenance.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./call-tree-entry-maintenance.component.css */ "./src/app/modules/call-tree-entry-maintenance/call-tree-entry-maintenance.component.css")).default]
    })
], CallTreeEntryMaintenanceComponent);



/***/ }),

/***/ "./src/app/modules/call-tree-entry-maintenance/call-tree-entry-maintenance.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/call-tree-entry-maintenance/call-tree-entry-maintenance.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: CallTreeEntryMaintenanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallTreeEntryMaintenanceModule", function() { return CallTreeEntryMaintenanceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _call_tree_editor_call_tree_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./call-tree-editor/call-tree-editor.component */ "./src/app/modules/call-tree-entry-maintenance/call-tree-editor/call-tree-editor.component.ts");
/* harmony import */ var _call_tree_entry_editor_call_tree_entry_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./call-tree-entry-editor/call-tree-entry-editor.component */ "./src/app/modules/call-tree-entry-maintenance/call-tree-entry-editor/call-tree-entry-editor.component.ts");
/* harmony import */ var _call_tree_entry_maintenance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./call-tree-entry-maintenance.component */ "./src/app/modules/call-tree-entry-maintenance/call-tree-entry-maintenance.component.ts");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ckeditor4-angular */ "./node_modules/ckeditor4-angular/fesm2015/ckeditor4-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _manual_editor_manual_editor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./manual-editor/manual-editor.component */ "./src/app/modules/call-tree-entry-maintenance/manual-editor/manual-editor.component.ts");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var src_app_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/pipes/safe-html.pipe */ "./src/app/pipes/safe-html.pipe.ts");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm2015/text-field.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utility/utility.module */ "./src/app/modules/utility/utility.module.ts");





















let CallTreeEntryMaintenanceModule = class CallTreeEntryMaintenanceModule {
};
CallTreeEntryMaintenanceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _call_tree_editor_call_tree_editor_component__WEBPACK_IMPORTED_MODULE_2__["CallTreeEditorComponent"],
            _call_tree_entry_editor_call_tree_entry_editor_component__WEBPACK_IMPORTED_MODULE_3__["CallTreeEntryEditorComponent"],
            _call_tree_entry_maintenance_component__WEBPACK_IMPORTED_MODULE_4__["CallTreeEntryMaintenanceComponent"],
            src_app_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_18__["SafeHtml"],
            _manual_editor_manual_editor_component__WEBPACK_IMPORTED_MODULE_8__["ManualEditorComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            ckeditor4_angular__WEBPACK_IMPORTED_MODULE_5__["CKEditorModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
            _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_19__["TextFieldModule"],
            _utility_utility_module__WEBPACK_IMPORTED_MODULE_20__["UtilityModule"],
        ],
        exports: [_call_tree_entry_maintenance_component__WEBPACK_IMPORTED_MODULE_4__["CallTreeEntryMaintenanceComponent"]],
        entryComponents: [_call_tree_editor_call_tree_editor_component__WEBPACK_IMPORTED_MODULE_2__["CallTreeEditorComponent"],
            _call_tree_entry_editor_call_tree_entry_editor_component__WEBPACK_IMPORTED_MODULE_3__["CallTreeEntryEditorComponent"],
            _manual_editor_manual_editor_component__WEBPACK_IMPORTED_MODULE_8__["ManualEditorComponent"]],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]]
    })
], CallTreeEntryMaintenanceModule);



/***/ }),

/***/ "./src/app/modules/call-tree-entry-maintenance/manual-editor/manual-editor.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/call-tree-entry-maintenance/manual-editor/manual-editor.component.css ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2FsbC10cmVlLWVudHJ5LW1haW50ZW5hbmNlL21hbnVhbC1lZGl0b3IvbWFudWFsLWVkaXRvci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/call-tree-entry-maintenance/manual-editor/manual-editor.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/call-tree-entry-maintenance/manual-editor/manual-editor.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ManualEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualEditorComponent", function() { return ManualEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_manual_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/manual.service */ "./src/app/services/manual.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let ManualEditorComponent = class ManualEditorComponent {
    constructor(manualService, dialog, dialogRef, data) {
        this.manualService = manualService;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.callTreeEntry = data.callTreeEntry;
        this.message = this.callTreeEntry.systemName + ' has ';
        this.message += ((this.callTreeEntry.manuals == null) ? "0" : this.callTreeEntry.manuals.length);
        this.message += ' operation manual(s)';
    }
    closeDialog() {
        this.dialog.closeAll();
    }
    onSubmit(form) {
        console.log('form.dirty=' + form.dirty);
        console.log('form.valid=' + form.valid);
        if (form.pristine && form.valid) {
            this.closeDialog();
        }
        else {
            if (form.valid) {
                this.updateManual();
            }
        }
    }
    updateManual() {
        this.manualService.updateManuals(this.callTreeEntry).subscribe((res) => {
            console.log("Go");
        });
    }
};
ManualEditorComponent.ctorParameters = () => [
    { type: src_app_services_manual_service__WEBPACK_IMPORTED_MODULE_2__["ManualService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
ManualEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manual-editor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manual-editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/call-tree-entry-maintenance/manual-editor/manual-editor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manual-editor.component.css */ "./src/app/modules/call-tree-entry-maintenance/manual-editor/manual-editor.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], ManualEditorComponent);



/***/ }),

/***/ "./src/app/modules/utility/components/confirmation-box/confirmation-box.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/utility/components/confirmation-box/confirmation-box.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXRpbGl0eS9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi1ib3gvY29uZmlybWF0aW9uLWJveC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/utility/components/confirmation-box/confirmation-box.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/utility/components/confirmation-box/confirmation-box.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ConfirmationBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationBoxComponent", function() { return ConfirmationBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ConfirmationBoxComponent = class ConfirmationBoxComponent {
    constructor(dialog, dialogRef, data) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.title = data.title;
    }
    ngOnInit() {
    }
    sayYes() {
        this.dialogRef.close(true);
    }
    sayNo() {
        this.dialogRef.close(false);
    }
};
ConfirmationBoxComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ConfirmationBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirmation-box',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirmation-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/utility/components/confirmation-box/confirmation-box.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirmation-box.component.css */ "./src/app/modules/utility/components/confirmation-box/confirmation-box.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ConfirmationBoxComponent);



/***/ }),

/***/ "./src/app/modules/utility/components/division-list-input-box/division-list-input-box.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/utility/components/division-list-input-box/division-list-input-box.component.css ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXRpbGl0eS9jb21wb25lbnRzL2RpdmlzaW9uLWxpc3QtaW5wdXQtYm94L2RpdmlzaW9uLWxpc3QtaW5wdXQtYm94LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/utility/components/division-list-input-box/division-list-input-box.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/utility/components/division-list-input-box/division-list-input-box.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: DivisionListInputBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisionListInputBoxComponent", function() { return DivisionListInputBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_division_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/division.service */ "./src/app/services/division.service.ts");
var DivisionListInputBoxComponent_1;




let DivisionListInputBoxComponent = DivisionListInputBoxComponent_1 = class DivisionListInputBoxComponent {
    constructor(divisionService) {
        this.divisionService = divisionService;
        this.divisionService.getActiveDivisionList().subscribe((res) => {
            this.divisionList = res;
            this.filteredDivisionList = this.divisionList;
        });
    }
    autoCompleteFilter(evt) {
        this.onChange(evt);
        if (!evt) {
            this.filteredDivisionList = this.divisionList;
        }
        else {
            this.filteredDivisionList = this.divisionList.filter(item => item.toLocaleLowerCase().indexOf(evt.toLocaleLowerCase()) >= 0);
        }
    }
    writeValue(obj) {
        if (obj != null) {
            this.division = obj;
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
};
DivisionListInputBoxComponent.ctorParameters = () => [
    { type: src_app_services_division_service__WEBPACK_IMPORTED_MODULE_3__["DivisionService"] }
];
DivisionListInputBoxComponent = DivisionListInputBoxComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-division-list-input-box',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./division-list-input-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/utility/components/division-list-input-box/division-list-input-box.component.html")).default,
        providers: [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => DivisionListInputBoxComponent_1),
                multi: true
            }
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./division-list-input-box.component.css */ "./src/app/modules/utility/components/division-list-input-box/division-list-input-box.component.css")).default]
    })
], DivisionListInputBoxComponent);



/***/ }),

/***/ "./src/app/modules/utility/components/manual-list/manual-list.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/utility/components/manual-list/manual-list.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container\r\n{\r\n  width:100%;\r\n  display:-webkit-box;\r\n  display:flex;\r\n  -webkit-box-orient:vertical;\r\n  -webkit-box-direction:normal;\r\n          flex-direction:column;\r\n  /*\r\n  border:1px solid red;\r\n  */\r\n}\r\n.headerRow\r\n{\r\n  width:100%;\r\n  display:-webkit-box;\r\n  display:flex;\r\n  -webkit-box-orient:horizontal;\r\n  -webkit-box-direction:normal;\r\n          flex-direction:row;\r\n  -webkit-box-pack:justify;\r\n          justify-content:space-between;\r\n  padding-bottom: 10px;\r\n  /*\r\n  border:1px solid blue;\r\n  */\r\n}\r\n.manualRow\r\n{\r\n  width:100%;\r\n  display:-webkit-box;\r\n  display:flex;\r\n  -webkit-box-orient:horizontal;\r\n  -webkit-box-direction:normal;\r\n          flex-direction:row;\r\n  -webkit-box-pack:space-evenly;\r\n          justify-content:space-evenly;\r\n  /*\r\n  border:1px solid green;\r\n  */\r\n}\r\n.manualRow > div\r\n{\r\n  /*\r\n  border:1px solid brown;\r\n  */\r\n  -webkit-box-flex: 1;\r\n          flex: 1 1 auto;\r\n}\r\n.manualRow > div >mat-form-field\r\n{\r\n  width:95%\r\n}\r\n.removeButton\r\n{\r\n  display:-webkit-box;\r\n  display:flex;\r\n  -webkit-box-pack:center;\r\n          justify-content:center;\r\n  -webkit-box-align:center;\r\n          align-items:center;\r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91dGlsaXR5L2NvbXBvbmVudHMvbWFudWFsLWxpc3QvbWFudWFsLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxVQUFVO0VBQ1YsbUJBQVk7RUFBWixZQUFZO0VBQ1osMkJBQXFCO0VBQXJCLDRCQUFxQjtVQUFyQixxQkFBcUI7RUFDckI7O0dBRUM7QUFDSDtBQUNBOztFQUVFLFVBQVU7RUFDVixtQkFBWTtFQUFaLFlBQVk7RUFDWiw2QkFBa0I7RUFBbEIsNEJBQWtCO1VBQWxCLGtCQUFrQjtFQUNsQix3QkFBNkI7VUFBN0IsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQjs7R0FFQztBQUNIO0FBQ0E7O0VBRUUsVUFBVTtFQUNWLG1CQUFZO0VBQVosWUFBWTtFQUNaLDZCQUFrQjtFQUFsQiw0QkFBa0I7VUFBbEIsa0JBQWtCO0VBQ2xCLDZCQUE0QjtVQUE1Qiw0QkFBNEI7RUFDNUI7O0dBRUM7QUFDSDtBQUNBOztFQUVFOztHQUVDO0VBQ0QsbUJBQWM7VUFBZCxjQUFjO0FBQ2hCO0FBQ0E7O0VBRUU7QUFDRjtBQUNBOztFQUVFLG1CQUFZO0VBQVosWUFBWTtFQUNaLHVCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsd0JBQWtCO1VBQWxCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXRpbGl0eS9jb21wb25lbnRzL21hbnVhbC1saXN0L21hbnVhbC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyXHJcbntcclxuICB3aWR0aDoxMDAlO1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgLypcclxuICBib3JkZXI6MXB4IHNvbGlkIHJlZDtcclxuICAqL1xyXG59XHJcbi5oZWFkZXJSb3dcclxue1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAvKlxyXG4gIGJvcmRlcjoxcHggc29saWQgYmx1ZTtcclxuICAqL1xyXG59XHJcbi5tYW51YWxSb3dcclxue1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O1xyXG4gIC8qXHJcbiAgYm9yZGVyOjFweCBzb2xpZCBncmVlbjtcclxuICAqL1xyXG59XHJcbi5tYW51YWxSb3cgPiBkaXZcclxue1xyXG4gIC8qXHJcbiAgYm9yZGVyOjFweCBzb2xpZCBicm93bjtcclxuICAqL1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbi5tYW51YWxSb3cgPiBkaXYgPm1hdC1mb3JtLWZpZWxkXHJcbntcclxuICB3aWR0aDo5NSVcclxufVxyXG4ucmVtb3ZlQnV0dG9uXHJcbntcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbn0gIl19 */");

/***/ }),

/***/ "./src/app/modules/utility/components/manual-list/manual-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/utility/components/manual-list/manual-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ManualListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualListComponent", function() { return ManualListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_classes_Manual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/classes/Manual */ "./src/app/classes/Manual.ts");
var ManualListComponent_1;




let ManualListComponent = ManualListComponent_1 = class ManualListComponent {
    constructor() {
    }
    writeValue(obj) {
        if (obj != null) {
            this.manuals = obj;
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    addManual() {
        const manual = new src_app_classes_Manual__WEBPACK_IMPORTED_MODULE_3__["Manual"]();
        if (this.manuals === null) {
            this.manuals = [];
        }
        this.manuals.push(manual);
        this.onChange(this.manuals);
    }
    removeManual(index) {
        this.manuals.splice(index, 1);
        this.onChange(this.manuals);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('message')
], ManualListComponent.prototype, "message", void 0);
ManualListComponent = ManualListComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manual-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manual-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/utility/components/manual-list/manual-list.component.html")).default,
        providers: [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => ManualListComponent_1),
                multi: true
            }
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manual-list.component.css */ "./src/app/modules/utility/components/manual-list/manual-list.component.css")).default]
    })
], ManualListComponent);



/***/ }),

/***/ "./src/app/modules/utility/directives/division-validator.directive.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/utility/directives/division-validator.directive.ts ***!
  \****************************************************************************/
/*! exports provided: DivisionValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisionValidatorDirective", function() { return DivisionValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var DivisionValidatorDirective_1;



let DivisionValidatorDirective = DivisionValidatorDirective_1 = class DivisionValidatorDirective {
    constructor() { }
    validate(control) {
        let result = null;
        if ((control.dirty) && (control.valid)) {
            for (const division of this.divisionList) {
                if (division === control.value) {
                    result = null;
                    break;
                }
                else {
                    result = { invalidDivisionName: control.value };
                }
            }
        }
        return result;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('divisionValidator')
], DivisionValidatorDirective.prototype, "divisionList", void 0);
DivisionValidatorDirective = DivisionValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        // tslint:disable-next-line: directive-selector
        selector: '[divisionValidator]',
        providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: DivisionValidatorDirective_1, multi: true }]
    })
], DivisionValidatorDirective);



/***/ }),

/***/ "./src/app/modules/utility/directives/log-recipient-validator.directive.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/utility/directives/log-recipient-validator.directive.ts ***!
  \*********************************************************************************/
/*! exports provided: LogRecipientValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogRecipientValidatorDirective", function() { return LogRecipientValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var LogRecipientValidatorDirective_1;



let LogRecipientValidatorDirective = LogRecipientValidatorDirective_1 = class LogRecipientValidatorDirective {
    constructor(renderer2) {
        this.renderer2 = renderer2;
    }
    validate(control) {
        if ((control.dirty) && (control.valid)) {
            const logRecipients = control.value.trim().split('\n');
            const tempBox = this.renderer2.createElement('input');
            let result = null;
            let invalidEmailAddress = '';
            tempBox.type = 'text';
            for (const logRecipient of logRecipients) {
                tempBox.value = logRecipient;
                result = (_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email(tempBox));
                // console.log(logRecipient + ',' + result);
                if (result != null) {
                    invalidEmailAddress = logRecipient;
                    break;
                }
            }
            // console.log('Return :' + result);
            if (result != null) {
                result = { email: invalidEmailAddress };
            }
            return result;
        }
        else {
            // console.log('Return null');
            return null;
        }
    }
};
LogRecipientValidatorDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appLogRecipientValidator')
], LogRecipientValidatorDirective.prototype, "logRecipients", void 0);
LogRecipientValidatorDirective = LogRecipientValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appLogRecipientValidator]',
        providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: LogRecipientValidatorDirective_1, multi: true }]
    })
], LogRecipientValidatorDirective);



/***/ }),

/***/ "./src/app/modules/utility/directives/system-name-validator.directive.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/utility/directives/system-name-validator.directive.ts ***!
  \*******************************************************************************/
/*! exports provided: SystemNameValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemNameValidatorDirective", function() { return SystemNameValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var SystemNameValidatorDirective_1;



let SystemNameValidatorDirective = SystemNameValidatorDirective_1 = class SystemNameValidatorDirective {
    constructor() { }
    validate(control) {
        let result = null;
        if ((control.dirty) && (control.valid)) {
            for (const systemName of this.systemNameList) {
                if (systemName === control.value) {
                    result = null;
                    break;
                }
                else {
                    result = { invalidSystemName: control.value };
                }
            }
        }
        return result;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('systemNameValidator')
], SystemNameValidatorDirective.prototype, "systemNameList", void 0);
SystemNameValidatorDirective = SystemNameValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        // tslint:disable-next-line: directive-selector
        selector: '[systemNameValidator]',
        providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: SystemNameValidatorDirective_1, multi: true }]
    })
], SystemNameValidatorDirective);



/***/ }),

/***/ "./src/app/modules/utility/utility.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/utility/utility.module.ts ***!
  \***************************************************/
/*! exports provided: UtilityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityModule", function() { return UtilityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ckeditor4-angular */ "./node_modules/ckeditor4-angular/fesm2015/ckeditor4-angular.js");
/* harmony import */ var _components_confirmation_box_confirmation_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/confirmation-box/confirmation-box.component */ "./src/app/modules/utility/components/confirmation-box/confirmation-box.component.ts");
/* harmony import */ var _components_division_list_input_box_division_list_input_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/division-list-input-box/division-list-input-box.component */ "./src/app/modules/utility/components/division-list-input-box/division-list-input-box.component.ts");
/* harmony import */ var _directives_division_validator_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/division-validator.directive */ "./src/app/modules/utility/directives/division-validator.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _directives_log_recipient_validator_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/log-recipient-validator.directive */ "./src/app/modules/utility/directives/log-recipient-validator.directive.ts");
/* harmony import */ var _components_manual_list_manual_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/manual-list/manual-list.component */ "./src/app/modules/utility/components/manual-list/manual-list.component.ts");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _directives_system_name_validator_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./directives/system-name-validator.directive */ "./src/app/modules/utility/directives/system-name-validator.directive.ts");




















let UtilityModule = class UtilityModule {
};
UtilityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_confirmation_box_confirmation_box_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmationBoxComponent"],
            _components_division_list_input_box_division_list_input_box_component__WEBPACK_IMPORTED_MODULE_5__["DivisionListInputBoxComponent"],
            _directives_division_validator_directive__WEBPACK_IMPORTED_MODULE_6__["DivisionValidatorDirective"],
            _directives_log_recipient_validator_directive__WEBPACK_IMPORTED_MODULE_8__["LogRecipientValidatorDirective"],
            _components_manual_list_manual_list_component__WEBPACK_IMPORTED_MODULE_9__["ManualListComponent"],
            _directives_system_name_validator_directive__WEBPACK_IMPORTED_MODULE_19__["SystemNameValidatorDirective"],
        ],
        imports: [
            ckeditor4_angular__WEBPACK_IMPORTED_MODULE_3__["CKEditorModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
        ],
        entryComponents: [_components_confirmation_box_confirmation_box_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmationBoxComponent"], _components_division_list_input_box_division_list_input_box_component__WEBPACK_IMPORTED_MODULE_5__["DivisionListInputBoxComponent"]],
        exports: [
            _components_confirmation_box_confirmation_box_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmationBoxComponent"],
            _components_division_list_input_box_division_list_input_box_component__WEBPACK_IMPORTED_MODULE_5__["DivisionListInputBoxComponent"],
            _directives_division_validator_directive__WEBPACK_IMPORTED_MODULE_6__["DivisionValidatorDirective"],
            _directives_log_recipient_validator_directive__WEBPACK_IMPORTED_MODULE_8__["LogRecipientValidatorDirective"],
            _components_manual_list_manual_list_component__WEBPACK_IMPORTED_MODULE_9__["ManualListComponent"],
            _directives_system_name_validator_directive__WEBPACK_IMPORTED_MODULE_19__["SystemNameValidatorDirective"],
        ]
    })
], UtilityModule);



/***/ }),

/***/ "./src/app/pipes/safe-html.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/safe-html.pipe.ts ***!
  \*****************************************/
/*! exports provided: SafeHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtml", function() { return SafeHtml; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SafeHtml = class SafeHtml {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(html) {
        const output = html.replace(/\n/g, '<br />');
        return this.sanitizer.bypassSecurityTrustHtml(output);
    }
};
SafeHtml.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafeHtml = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safeHtml'
    })
], SafeHtml);



/***/ }),

/***/ "./src/app/services/call-tree-entry.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/call-tree-entry.service.ts ***!
  \*****************************************************/
/*! exports provided: CallTreeEntryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallTreeEntryService", function() { return CallTreeEntryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let CallTreeEntryService = class CallTreeEntryService {
    constructor(http) {
        this.http = http;
        this.url = '../RestfulServices/CallTreeEntry/';
    }
    addCallTreeEntry(callTreeEntry) {
        const serviceURL = this.url + 'addCallTreeEntry';
        return this.http.post(serviceURL, callTreeEntry).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    getAllCallTreeEntry() {
        const serviceURL = this.url + 'getAllCallTreeEntry';
        return this.http.get(serviceURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    updateCallTreeEntry(callTreeEntry) {
        const serviceURL = this.url + 'updateCallTreeEntry';
        return this.http.post(serviceURL, callTreeEntry).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    enableCallTreeEntry(callTreeEntryId) {
        const serviceURL = this.url + 'enableCallTreeEntry';
        let requestParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        requestParams = requestParams.append('callTreeEntryId', callTreeEntryId.toString());
        return this.http.post(serviceURL, requestParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    disableCallTreeEntry(callTreeEntryId) {
        const serviceURL = this.url + 'disableCallTreeEntry';
        let requestParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        requestParams = requestParams.append('callTreeEntryId', callTreeEntryId.toString());
        return this.http.post(serviceURL, requestParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
};
CallTreeEntryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CallTreeEntryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], CallTreeEntryService);



/***/ }),

/***/ "./src/app/services/call-tree.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/call-tree.service.ts ***!
  \***********************************************/
/*! exports provided: CallTreeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallTreeService", function() { return CallTreeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let CallTreeService = class CallTreeService {
    constructor(http) {
        this.http = http;
        this.url = '../RestfulServices/CallTree/';
    }
    getCallTreeEntryByCallTreeId(callTreeId) {
        const serviceURL = this.url + 'getCallTreeEntryByCallTreeId';
        let requestParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        requestParams = requestParams.append('callTreeId', callTreeId.toString());
        return this.http.post(serviceURL, requestParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    updateCallTree(callTree) {
        const serviceURL = this.url + 'updateCallTree';
        return this.http.post(serviceURL, callTree).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
};
CallTreeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CallTreeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], CallTreeService);



/***/ }),

/***/ "./src/app/services/division.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/division.service.ts ***!
  \**********************************************/
/*! exports provided: DivisionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisionService", function() { return DivisionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let DivisionService = class DivisionService {
    constructor(http) {
        this.http = http;
        this.url = '../RestfulServices/DivisionService/';
    }
    getActiveDivisionList() {
        const serviceURL = this.url + 'getActiveDivisionList';
        return this.http.get(serviceURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
};
DivisionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DivisionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DivisionService);



/***/ }),

/***/ "./src/app/services/manual.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/manual.service.ts ***!
  \********************************************/
/*! exports provided: ManualService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualService", function() { return ManualService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let ManualService = class ManualService {
    constructor(http) {
        this.http = http;
        this.url = '../RestfulServices/ManualService/';
    }
    getManualsByCallTreeEntryId(callTreeEntryId) {
        const serviceURL = this.url + 'getManualsByCallTreeEntryId';
        let requestParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        requestParams = requestParams.append('callTreeEntryId', callTreeEntryId.toString());
        return this.http.post(serviceURL, requestParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    updateManuals(callTreeEntry) {
        const serviceURL = this.url + 'updateManuals';
        /*
        To the following code working, a lot of work in server side need to do.
        Please refer the following web page for detail:
        https://stackoverflow.com/questions/39635108/java-jersey-creating-own-injection-resolver-with-paraminjectionresolver-stra/39636141#39636141
        */
        /*
         let requestParams = {};
         requestParams['callTreeEntryId']=callTreeEntryId;
         requestParams ['manuals']=manuals;
         */
        return this.http.post(serviceURL, callTreeEntry).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
};
ManualService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ManualService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ManualService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Users\Roy\workspace\calltreeadmin\frontEndSrc\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map