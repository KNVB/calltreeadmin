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
/* harmony default export */ __webpack_exports__["default"] = ("<app-edit-call-tree-info></app-edit-call-tree-info>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/edit-call-tree-info/call-tree-info-editor/call-tree-info-editor.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/edit-call-tree-info/call-tree-info-editor/call-tree-info-editor.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>{{ action }} a Call Tree</h2>\n<form #callTreeInfoEditForm=\"ngForm\" (ngSubmit)=\"onSubmit(callTreeInfoEditForm)\" novalidate>\n    <input type=hidden name=\"callTreeInfoId\" [(ngModel)]=\"this.callTreeInfo.callTreeInfoId\">\n    <app-division-list-input-box\n      name=\"division\"\n      [(ngModel)]=\"this.callTreeInfo.division\">\n    </app-division-list-input-box>\n    <mat-form-field>\n      <mat-label>System</mat-label>\n      <input matInput\n        type=\"text\"\n        required\n        [(ngModel)]=\"this.callTreeInfo.systemName\"\n        name=\"systemName\"\n        #systemName=\"ngModel\">\n      <mat-error [hidden]=\"systemName.valid || systemName.pristine\">\n        System Name is <strong>required</strong>\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-label>Location</mat-label>\n      <textarea matInput\n                cdkTextareaAutosize\n                #autosize=\"cdkTextareaAutosize\"\n                cdkAutosizeMinRows=\"1\"\n                cdkAutosizeMaxRows=\"5\"\n                required\n                name=\"location\"\n                #location=\"ngModel\"\n                [(ngModel)]=\"this.callTreeInfo.location\">\n      </textarea>\n      <mat-error  [hidden]=\"location.valid || location.pristine\">\n        Location is <strong>required</strong>\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-label>Service Level</mat-label>\n      <mat-select [(ngModel)]=\"this.callTreeInfo.serviceLevel\" name=\"serviceLevel\" #serviceLevel=\"ngModel\" required>\n        <mat-option *ngFor=\"let serviceLevel of this.serviceLevelList\" [value]=serviceLevel>\n          {{serviceLevel}}\n        </mat-option>\n      </mat-select>\n      <mat-error  [hidden]=\"serviceLevel.valid || serviceLevel.pristine\">\n        Service Level is <strong>required</strong>\n      </mat-error>\n    </mat-form-field>\n    <br>\n    <mat-form-field>\n      <mat-label>Mission Critical</mat-label>\n        <input matInput type=\"text\"\n                [(ngModel)]=\"this.callTreeInfo.missionCritical\"\n                required\n                name=\"missionCritical\"\n                #missionCritical=\"ngModel\">\n        <mat-error [hidden]=\"missionCritical.valid || missionCritical.pristine\">\n          Missiong Critical is <strong>required</strong>\n        </mat-error>\n    </mat-form-field>\n    <mat-form-field style=\"width:350px\">\n      <mat-label>\n        Time Interval to start established procedures\n      </mat-label>\n      <input matInput type=\"text\"\n            [(ngModel)]=\"this.callTreeInfo.timeToStartProcedure\"\n            required\n            #timeToStartProcedure=\"ngModel\"\n            name=\"timeToStartProcedure\">\n      <mat-error [hidden]=\"timeToStartProcedure.valid||timeToStartProcedure.pristine\">\n        Time Interval to start established procedures is <strong>required</strong>\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field style=\"width:300px\">\n        <mat-label>\n          Time Interval to escalate if no reply\n        </mat-label>\n        <input matInput type=\"text\" [(ngModel)]=\"this.callTreeInfo.timeToEscalate\"\n              required\n              name=\"timeToEscalate\"\n              #timeToEscalate=\"ngModel\">\n        <mat-error [hidden]=\"timeToEscalate.valid||timeToEscalate.pristine\">\n          Time Interval to escalate if no reply is <strong>required</strong>\n        </mat-error>\n    </mat-form-field>\n    <br>\n    <mat-form-field style=\"width:250px\">\n      <mat-label>Appreciation Log Recipients</mat-label>\n        <textarea matInput\n                  cdkTextareaAutosize\n                  #autosize=\"cdkTextareaAutosize\"\n                  cdkAutosizeMinRows=\"1\"\n                  cdkAutosizeMaxRows=\"5\"\n                  required\n                  appLogRecipientValidator\n                  name=\"logRecipients\"\n                  #logRecipients=\"ngModel\"\n                  [(ngModel)]=\"this.callTreeInfo.logRecipients\"></textarea>\n      <mat-error *ngIf=\"logRecipients.hasError('required')\">\n        Appreciation Log Recipients is <strong>required</strong>\n      </mat-error>\n      <mat-error *ngIf=\"logRecipients.hasError('email')\">\n        {{logRecipients.errors['email']}} is not a valid email address.\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-label>Status</mat-label>\n      <mat-select\n        [(ngModel)]=\"this.callTreeInfo.status\"\n        name=\"status\"\n        #status=\"ngModel\">\n        <mat-option [value]=\"activeCallTree\">Active</mat-option>\n        <mat-option [value]=\"inActiveCallTree\">Inactive</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <div *ngIf=\"(this.callTreeInfo.callTreeInfoId==-1)\">\n      <hr>\n      Call Tree:\n      <mat-radio-group name=\"callTreeType\"  [(ngModel)]=\"callTreeType\">\n        <div style=\"display:flex;flex-direction: column;padding-top: 5px;\">\n          <div style=\"display:flex;flex-direction: column;\">\n            <mat-radio-button style=\"padding-bottom: 5px;\" [value]=\"1\">Create an individual CallTree</mat-radio-button>\n            <div tyle=\"display:flex;\" *ngIf=\"(callTreeType==1)\">\n              <ckeditor\n                required\n                name=\"callTreeDetail\"\n                [config]=\"ckeditorConfig\"\n                #callTreeDetail1=\"ngModel\"\n                [(ngModel)]=\"this.callTreeInfo.callTree.callTreeDetail\">\n              </ckeditor>\n              <mat-error *ngIf=\"(callTreeDetail1.touched || callTreeInfoEditForm.submitted)  && callTreeDetail1.hasError('required')\">\n                Call tree contact is <strong>required</strong>\n              </mat-error>\n            </div>\n          </div>\n          <div style=\"display:flex;flex-direction: column;padding-top: 5px;\">\n            <mat-radio-button [value]=\"2\">Share CallTree with the following system:</mat-radio-button>\n            <div tyle=\"display:flex;\" *ngIf=\"(callTreeType==2)\">\n              <mat-form-field>\n                <mat-label>Division</mat-label>\n                <mat-select\n                  required\n                  name=\"sharedDivision\"\n                  [(ngModel)]=\"sharedDivision\"\n                  (ngModelChange)=onChange($event)\n                  #sharedDivisionValidator=\"ngModel\">\n                  <mat-option *ngFor=\"let division of this.sharedDivisionList\" [value]=\"division\">\n                    {{division}}\n                  </mat-option>\n                </mat-select>\n                <mat-error *ngIf=\"sharedDivisionValidator.hasError('required')\">\n                  Division is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <mat-form-field>\n                <mat-label>System</mat-label>\n                <mat-select\n                  required\n                  [(ngModel)]=\"this.sharedSystemName\"\n                  name=\"sharedSystem\">\n                  <mat-option\n                    *ngFor=\"let sharedSystemName of this.sharedSystemNameList\" [value]=\"sharedSystemName\">\n                    {{sharedSystemName}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n        </div>\n      </mat-radio-group>\n      <hr>\n      <table style=\"width:100%;\">\n        <tr>\n          <td>Operation Manual(Optional):</td>\n          <td>\n            <button style=\"float:right\" mat-raised-button type=\"button\" color=\"primary\" class=\"Update-btn\" (click)=\"addManual()\">\n              Add Operation Manual\n            </button>\n          </td>\n        </tr>\n        <tr *ngFor=\"let manual of this.callTreeInfo.manuals; let i = index\">\n          <td colspan=2>\n            <mat-form-field>\n              <mat-label>Manual Location</mat-label>\n              <input\n                matInput\n                required\n                type=\"text\"\n                [(ngModel)]=\"manual.manualLocation\"\n                name=\"manualLocation{{i}}\"\n                #manualLocationValidator=\"ngModel\">\n              <mat-error *ngIf=\"manualLocationValidator.hasError('required')\">\n                Manual location is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n            <mat-form-field>\n              <mat-label>Manual Description</mat-label>\n              <input\n                matInput\n                required\n                type=\"text\"\n                [(ngModel)]=\"manual.description\"\n                name=\"manualDesc{{i}}\"\n                #manualDescValidator=\"ngModel\">\n              <mat-error *ngIf=\"manualDescValidator.hasError('required')\">\n                Manual Description is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n            <mat-form-field>\n              <mat-label>Last Update Date</mat-label>\n              <input\n                matInput\n                required\n                type=\"text\"\n                [(ngModel)]=\"manual.lastUpdateDate\"\n                name=\"manualLastUpdateDate{{i}}\"\n                #manualLastUpdateDateValidator=\"ngModel\">\n              <mat-error *ngIf=\"manualLastUpdateDateValidator.hasError('required')\">\n                Last Update Date is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n            &nbsp;&nbsp;&nbsp;&nbsp;\n            <button\n              style=\"font-weight: bold;;font-size: 30px;vertical-align: middle;\"\n              mat-raised-button type=\"button\"\n              color=\"primary\"\n              class=\"Update-btn\"\n              (click)=\"removeManual(i)\">\n                -\n            </button>\n          </td>\n      </table>\n    </div>\n  <mat-dialog-actions>\n    <button mat-raised-button type=\"submit\" color=\"primary\" class=\"Update-btn\">Save</button>\n    <button mat-raised-button type=\"button\" class=\"Discard-btn\" (click)=\"closeDialog()\">Close</button>\n  </mat-dialog-actions>\n</form>\n{{this.callTreeInfo|json}}<br>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/edit-call-tree-info/edit-call-tree-info.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/edit-call-tree-info/edit-call-tree-info.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"center\">Call Tree Info Maintenance</div>\n<table style=\"width:90%;margin-left: 30px;\" >\n  <tr>\n    <td>\n      <mat-form-field>\n        <mat-label>\n          Filter\n        </mat-label>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\">\n      </mat-form-field>\n    </td>\n    <td>\n      <button  style=\"float:right\" mat-raised-button color=\"primary\" (click)=\"popupDialog('Add',callTreeInfoTemplate)\">Add New Call Tree</button>\n    </td>\n  </tr>\n  <tr>\n    <td colspan=\"2\">\n      <table mat-table [dataSource]=\"callTreeInfoDataSource\" matSort matSortActive=\"systemName\" matSortDirection=\"asc\" class=\"mat-elevation-z8\">\n        <ng-container matColumnDef=\"division\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Division</th>\n            <td mat-cell style=\"text-align: left !important;\" *matCellDef=\"let element\"> {{element.division}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"systemName\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header=\"systemName\">System</th>\n            <td mat-cell style=\"text-align: left !important;\" *matCellDef=\"let element\"> {{element.systemName}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"location\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Location</th>\n            <td mat-cell *matCellDef=\"let element\" [innerHTML]=\"element.location| safeHtml\"></td>\n        </ng-container>\n        <ng-container matColumnDef=\"serviceLevel\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Service<br>Level<a href=\"#serviceLevel\">*</a></th>\n            <td mat-cell *matCellDef=\"let element\">{{element.serviceLevel}}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"missionCritical\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Mission Critical</th>\n          <td mat-cell *matCellDef=\"let element\">{{element.missionCritical}}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"timeToStartProcedure\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Time Interval to start established<br>procedures<a href=\"#timeLimit\">#</a></th>\n            <td mat-cell *matCellDef=\"let element\">{{element.timeToStartProcedure}}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"contact\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Call tree</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <a href=\"javascript:openCallTreeEditor(element.callTree)\">Edit CallTree</a>\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"timeToEscalate\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Time Interval to <br>escalate<br>if no reply</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.timeToEscalate}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"logRecipients\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Appreciation<br>Log Recipients</th>\n            <td mat-cell style=\"text-align: left !important;padding-left: 10px;\" *matCellDef=\"let element\" [innerHTML]=\"element.logRecipients| safeHtml\"></td>\n        </ng-container>\n        <ng-container matColumnDef=\"manual\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Operation Manual</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <a href=\"javascript:openManualEditor(element.manuals)\">Edit Manual Info</a>\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"status\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\n            <td mat-cell *matCellDef=\"let element\" [innerHTML]=\"(element.status === activeCallTreeInfo)?'Active':'Inactive'\"></td>\n        </ng-container>\n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Action</th>\n          <td mat-cell *matCellDef=\"let element\" class=\"action-link\">\n            <a href=\"javascript:void(0)\" (click)=\"popupDialog('Edit',element)\">Edit</a>|<a *ngIf=\"(element.status === activeCallTreeInfo)\" href=\"javascript:void(0)\" (click)=\"popupDialog('Disable',element)\">Disable</a><a *ngIf=\"(element.status === inActiveCallTreeInfo)\" href=\"javascript:void(0)\" (click)=\"popupDialog('Enable',element)\">Enable</a>\n          </td>\n        </ng-container>\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\" class=\"heading\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n      <br>\n      Remark:\n      <p>\n        If a problematic system reported is under all Branches but not listed in the F5 Operator Call Tree,<br>Operator should let the originator (the one who reported the problematic system) know the system is not covered in the list of systems monitored by F5 Operator <br>and ask the originator to provide the follow-up contacts, and call the relevant officers accordingly.In case the originator does not know who should be contacted,<br>Operator should call SEO(F)51, SO(F)51 or SSO(F)5 for assistance.\n      </p>\n      <ul style=\"margin: 0; padding: 0;list-style: none\">\n        <li>\n          <a name=\"serviceLevel\">*Service Level</a>\n          <ol>\n            <li>system monitoring + problem reporting</li>\n            <li>system monitoring + problem reporting + system reboot</li>\n            <li>system monitoring + problem reporting + system reboot+ routine computer operation</li>\n          </ol>\n          <br>\n        </li>\n        <li>\n          <a name=\"timeLimit\">\n            # Start to count after identified the system\n          </a>\n        </li>\n      </ul>\n    </td>\n  </tr>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/utility/components/confirmation-box/confirmation-box.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/utility/components/confirmation-box/confirmation-box.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content>\n  {{title}}\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-raised-button type=\"button\" color=\"primary\" class=\"Update-btn\" (click)=\"sayYes()\">Yes</button>\n  <button mat-raised-button type=\"button\" class=\"Discard-btn\" (click)=\"sayNo()\">No</button>\n</mat-dialog-actions>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/utility/components/division-list-input-box/division-list-input-box.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/utility/components/division-list-input-box/division-list-input-box.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field>\n  <mat-label>Division</mat-label>\n    <input matInput type=\"text\"\n      [(ngModel)]=\"division\"\n      required\n      [matAutocomplete]=\"divisions\"\n      name=\"division2\"\n      [divisionValidator]=\"this.divisionList\"\n      (ngModelChange)=\"autoCompleteFilter($event)\"\n      #division2=\"ngModel\">\n      <mat-error *ngIf=\"division2.hasError('invalidDivisionName')\">\n        {{division2.errors['invalidDivisionName']}} is not a valid divison name.\n      </mat-error>\n      <mat-error *ngIf=\"division2.hasError('required')\">\n        Division Name is <strong>required</strong>\n      </mat-error>\n      <mat-autocomplete  #divisions=\"matAutocomplete\">\n        <mat-option *ngFor=\"let division of this.filteredDivisionList\" [value]=\"division\">\n          {{ division }}\n        </mat-option>\n      </mat-autocomplete>\n</mat-form-field>\n");

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
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ckeditor4-angular */ "./node_modules/ckeditor4-angular/fesm2015/ckeditor4-angular.js");
/* harmony import */ var _modules_edit_call_tree_info_edit_call_tree_info_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/edit-call-tree-info/edit-call-tree-info.module */ "./src/app/modules/edit-call-tree-info/edit-call-tree-info.module.ts");
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
            ckeditor4_angular__WEBPACK_IMPORTED_MODULE_5__["CKEditorModule"],
            _modules_edit_call_tree_info_edit_call_tree_info_module__WEBPACK_IMPORTED_MODULE_6__["EditCallTreeInfoModule"],
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

/***/ "./src/app/classes/CallTreeInfo.ts":
/*!*****************************************!*\
  !*** ./src/app/classes/CallTreeInfo.ts ***!
  \*****************************************/
/*! exports provided: CallTreeInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallTreeInfo", function() { return CallTreeInfo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _CallTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CallTree */ "./src/app/classes/CallTree.ts");


class CallTreeInfo {
    constructor() {
        this.callTreeInfoId = -1;
        this.callTree = new _CallTree__WEBPACK_IMPORTED_MODULE_1__["CallTree"]();
        this.division = '';
        this.location = '';
        this.logRecipients = '';
        this.manuals = [];
        this.missionCritical = '';
        this.systemName = '';
        this.status = CallTreeInfo.inactive;
        this.timeToStartProcedure = '';
        this.timeToEscalate = '';
    }
}
CallTreeInfo.active = 1;
CallTreeInfo.inactive = 0;


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

/***/ "./src/app/modules/edit-call-tree-info/call-tree-info-editor/call-tree-info-editor.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/edit-call-tree-info/call-tree-info-editor/call-tree-info-editor.component.css ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZWRpdC1jYWxsLXRyZWUtaW5mby9jYWxsLXRyZWUtaW5mby1lZGl0b3IvY2FsbC10cmVlLWluZm8tZWRpdG9yLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/edit-call-tree-info/call-tree-info-editor/call-tree-info-editor.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/edit-call-tree-info/call-tree-info-editor/call-tree-info-editor.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: CallTreeInfoEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallTreeInfoEditorComponent", function() { return CallTreeInfoEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_classes_CallTreeInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/CallTreeInfo */ "./src/app/classes/CallTreeInfo.ts");
/* harmony import */ var src_app_services_call_tree_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/call-tree-info.service */ "./src/app/services/call-tree-info.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_division_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/division.service */ "./src/app/services/division.service.ts");
/* harmony import */ var src_app_classes_Manual__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/classes/Manual */ "./src/app/classes/Manual.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");







let CallTreeInfoEditorComponent = class CallTreeInfoEditorComponent {
    constructor(callTreeInfoService, divisionService, dialog, dialogRef, data) {
        this.callTreeInfoService = callTreeInfoService;
        this.divisionService = divisionService;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.activeCallTree = src_app_classes_CallTreeInfo__WEBPACK_IMPORTED_MODULE_1__["CallTreeInfo"].active;
        this.inActiveCallTree = src_app_classes_CallTreeInfo__WEBPACK_IMPORTED_MODULE_1__["CallTreeInfo"].inactive;
        this.callTreeInfo = null;
        this.callTreeType = 1;
        this.serviceLevelList = ['1', '2', '3'];
        this.shareCallTreeList = [];
        this.ckeditorConfig = { extraPlugins: 'colorbutton',
            removeButtons: 'BulletedList,PasteFromWord,PasteText',
            toolbarGroups: [
                { name: 'clipboard', groups: ['clipboard', 'undo'] },
                { name: 'colors', groups: ['colors'] },
                { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
                { name: 'paragraph', groups: ['list'] },
            ]
        };
        const callTreeInfoId = data.callTreeInfoId;
        this.action = data.action;
        if (callTreeInfoId === -1) {
            this.callTreeInfo = new src_app_classes_CallTreeInfo__WEBPACK_IMPORTED_MODULE_1__["CallTreeInfo"]();
        }
        data.callTreeInfoList.forEach((sharedCallTreeInfo) => {
            if (!this.shareCallTreeList.hasOwnProperty(sharedCallTreeInfo.division)) {
                this.shareCallTreeList[sharedCallTreeInfo.division] = [];
            }
        });
        data.callTreeInfoList.forEach((sharedCallTreeInfo) => {
            this.shareCallTreeList[sharedCallTreeInfo.division][sharedCallTreeInfo.systemName] = sharedCallTreeInfo.callTree;
        });
        console.log(this.shareCallTreeList);
        this.sharedDivisionList = Object.keys(this.shareCallTreeList);
    }
    addCallInfo() {
        let message = '';
        this.callTreeInfoService.addCallTreeInfo(this.callTreeInfo).subscribe((res) => {
            if (res) {
                message += 'Add Call Tree success.';
                this.dialogRef.close({ addSuccess: res, action: this.action, callTreeInfo: this.callTreeInfo });
            }
            else {
                message += 'Add Call Tree failure.';
            }
            alert(message);
            console.log('action:' + this.action);
        });
    }
    addManual() {
        const manual = new src_app_classes_Manual__WEBPACK_IMPORTED_MODULE_5__["Manual"]();
        this.callTreeInfo.manuals.push(manual);
    }
    closeDialog() {
        this.dialog.closeAll();
    }
    ngOnInit() {
    }
    onChange(event) {
        this.sharedSystemNameList = (this.shareCallTreeList[event]);
        console.log(this.sharedSystemNameList);
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
                        this.addCallInfo();
                        break;
                    case 'Edit':
                        this.updateCallInfo();
                        break;
                }
            }
        }
    }
    removeManual(index) {
        this.callTreeInfo.manuals.splice(index, 1);
    }
    updateCallInfo() {
    }
};
CallTreeInfoEditorComponent.ctorParameters = () => [
    { type: src_app_services_call_tree_info_service__WEBPACK_IMPORTED_MODULE_2__["CallTreeInfoService"] },
    { type: src_app_services_division_service__WEBPACK_IMPORTED_MODULE_4__["DivisionService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"],] }] }
];
CallTreeInfoEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-call-tree-info-editor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./call-tree-info-editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/edit-call-tree-info/call-tree-info-editor/call-tree-info-editor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./call-tree-info-editor.component.css */ "./src/app/modules/edit-call-tree-info/call-tree-info-editor/call-tree-info-editor.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"]))
], CallTreeInfoEditorComponent);



/***/ }),

/***/ "./src/app/modules/edit-call-tree-info/edit-call-tree-info.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/edit-call-tree-info/edit-call-tree-info.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZWRpdC1jYWxsLXRyZWUtaW5mby9lZGl0LWNhbGwtdHJlZS1pbmZvLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/edit-call-tree-info/edit-call-tree-info.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/edit-call-tree-info/edit-call-tree-info.component.ts ***!
  \******************************************************************************/
/*! exports provided: EditCallTreeInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCallTreeInfoComponent", function() { return EditCallTreeInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_classes_CallTreeInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/CallTreeInfo */ "./src/app/classes/CallTreeInfo.ts");
/* harmony import */ var src_app_services_call_tree_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/call-tree-info.service */ "./src/app/services/call-tree-info.service.ts");
/* harmony import */ var _call_tree_info_editor_call_tree_info_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./call-tree-info-editor/call-tree-info-editor.component */ "./src/app/modules/edit-call-tree-info/call-tree-info-editor/call-tree-info-editor.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _utility_components_confirmation_box_confirmation_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utility/components/confirmation-box/confirmation-box.component */ "./src/app/modules/utility/components/confirmation-box/confirmation-box.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");









let EditCallTreeInfoComponent = class EditCallTreeInfoComponent {
    constructor(callTreeInfoService, dialog) {
        this.callTreeInfoService = callTreeInfoService;
        this.dialog = dialog;
        this.activeCallTreeInfo = src_app_classes_CallTreeInfo__WEBPACK_IMPORTED_MODULE_1__["CallTreeInfo"].active;
        this.inActiveCallTreeInfo = src_app_classes_CallTreeInfo__WEBPACK_IMPORTED_MODULE_1__["CallTreeInfo"].inactive;
        this.callTreeInfoTemplate = new src_app_classes_CallTreeInfo__WEBPACK_IMPORTED_MODULE_1__["CallTreeInfo"]();
        this.displayedColumns = ['division', 'systemName', 'location', 'serviceLevel', 'missionCritical',
            'timeToStartProcedure', 'contact', 'timeToEscalate', 'logRecipients',
            'manual', 'status', 'action'];
        this.callTreeInfoService.getAllCallTreeInfo().subscribe((res) => {
            this.callTreeInfoList = res;
            this.callTreeInfoDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](res);
            this.callTreeInfoDataSource.sort = this.sort;
            this.callTreeInfoDataSource.filterPredicate = (callTreeInfo, filter) => {
                let result = false;
                result = result || (callTreeInfo.division.trim().toLowerCase().indexOf(filter) !== -1);
                result = result || (callTreeInfo.systemName.trim().toLowerCase().indexOf(filter) !== -1);
                result = result || (callTreeInfo.location.trim().toLowerCase().indexOf(filter) !== -1);
                result = result || (callTreeInfo.logRecipients.trim().toLowerCase().indexOf(filter) !== -1);
                result = result || (callTreeInfo.missionCritical.trim().toLowerCase().indexOf(filter) !== -1);
                result = result || (callTreeInfo.serviceLevel.toString().trim().toLowerCase().indexOf(filter) !== -1);
                if (callTreeInfo.status === src_app_classes_CallTreeInfo__WEBPACK_IMPORTED_MODULE_1__["CallTreeInfo"].active) {
                    result = result || ('active'.indexOf(filter) !== -1);
                }
                else {
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
    applyFilter(filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.callTreeInfoDataSource.filter = filterValue;
    }
    popupDialog(action, callTreeInfo) {
        switch (action) {
            case 'Add':
            case 'Edit':
                this.popupCallTreeInfoEditor(action, callTreeInfo);
                break;
            case 'Disable':
            case 'Enable':
                this.popupConfirmationBox(action, callTreeInfo);
                break;
        }
    }
    popupCallTreeInfoEditor(action, callTreeInfo) {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
        // dialogConfig.disableClose = true;
        // dialogConfig.minHeight = '600px';
        dialogConfig.autoFocus = false; // do not set focus on the first form element
        dialogConfig.width = '900px';
        /*
        if (callTreeInfo.callTreeInfoId === -1) {
          dialogConfig.height = '900px';
        } else {
          dialogConfig.height = '500px';
        }
        */
        dialogConfig.data = {
            action,
            callTreeInfoId: callTreeInfo.callTreeInfoId,
            callTreeInfoList: this.callTreeInfoList,
        };
        const dialogRef = this.dialog.open(_call_tree_info_editor_call_tree_info_editor_component__WEBPACK_IMPORTED_MODULE_3__["CallTreeInfoEditorComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe((res) => {
            if (res !== undefined) {
                switch (res.action) {
                    case 'Add':
                        if (res.addSuccess) {
                            this.callTreeInfoList.push(res.callTreeInfo);
                            this.refreshDataSource();
                        }
                        break;
                    case 'Edit':
                        if (res.updateSuccess) {
                            this.updateCallTreeInfoTable(res.callTreeInfo);
                        }
                        break;
                }
            }
        });
    }
    popupConfirmationBox(action, callTreeInfo) {
        let message = 'Are you sure to ' + action + ' this call tree info?';
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
        // dialogConfig.disableClose = true;
        // dialogConfig.minHeight = '600px';
        dialogConfig.autoFocus = false; // do not set focus on the first form element
        dialogConfig.width = '350px';
        dialogConfig.data = { title: message };
        const dialogRef = this.dialog.open(_utility_components_confirmation_box_confirmation_box_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationBoxComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe((sayYes) => {
            if (sayYes) {
                if (action === 'Enable') {
                    callTreeInfo.status = src_app_classes_CallTreeInfo__WEBPACK_IMPORTED_MODULE_1__["CallTreeInfo"].active;
                    this.callTreeInfoService.enableCallTreeInfo(callTreeInfo.callTreeInfoId).subscribe((res) => {
                        if (res) {
                            message = 'The call tree info status is set to active succesfully.';
                        }
                        else {
                            message = 'The call tree info status is fail to set to active.';
                            callTreeInfo.status = src_app_classes_CallTreeInfo__WEBPACK_IMPORTED_MODULE_1__["CallTreeInfo"].inactive;
                        }
                    });
                }
                else {
                    callTreeInfo.status = src_app_classes_CallTreeInfo__WEBPACK_IMPORTED_MODULE_1__["CallTreeInfo"].inactive;
                    this.callTreeInfoService.disableCallTreeInfo(callTreeInfo.callTreeInfoId).subscribe((res) => {
                        if (res) {
                            message = 'The call tree info status is set to inactive succesfully.';
                        }
                        else {
                            message = 'The call tree info status is fail to set to inactive.';
                            callTreeInfo.status = src_app_classes_CallTreeInfo__WEBPACK_IMPORTED_MODULE_1__["CallTreeInfo"].active;
                        }
                    });
                }
                alert(message);
            }
        });
    }
    refreshDataSource() {
        this.callTreeInfoList = this.callTreeInfoDataSource.sortData(this.callTreeInfoList, this.sort);
        this.callTreeInfoDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.callTreeInfoList);
        this.callTreeInfoDataSource.sort = this.sort;
    }
    updateCallTreeInfoTable(res) {
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
};
EditCallTreeInfoComponent.ctorParameters = () => [
    { type: src_app_services_call_tree_info_service__WEBPACK_IMPORTED_MODULE_2__["CallTreeInfoService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], { static: true })
], EditCallTreeInfoComponent.prototype, "sort", void 0);
EditCallTreeInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-edit-call-tree-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-call-tree-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/edit-call-tree-info/edit-call-tree-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-call-tree-info.component.css */ "./src/app/modules/edit-call-tree-info/edit-call-tree-info.component.css")).default]
    })
], EditCallTreeInfoComponent);



/***/ }),

/***/ "./src/app/modules/edit-call-tree-info/edit-call-tree-info.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/edit-call-tree-info/edit-call-tree-info.module.ts ***!
  \***************************************************************************/
/*! exports provided: EditCallTreeInfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCallTreeInfoModule", function() { return EditCallTreeInfoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _call_tree_info_editor_call_tree_info_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./call-tree-info-editor/call-tree-info-editor.component */ "./src/app/modules/edit-call-tree-info/call-tree-info-editor/call-tree-info-editor.component.ts");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ckeditor4-angular */ "./node_modules/ckeditor4-angular/fesm2015/ckeditor4-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _edit_call_tree_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-call-tree-info.component */ "./src/app/modules/edit-call-tree-info/edit-call-tree-info.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/pipes/safe-html.pipe */ "./src/app/pipes/safe-html.pipe.ts");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utility/utility.module */ "./src/app/modules/utility/utility.module.ts");


















let EditCallTreeInfoModule = class EditCallTreeInfoModule {
};
EditCallTreeInfoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_15__["NgModule"])({
        declarations: [
            _edit_call_tree_info_component__WEBPACK_IMPORTED_MODULE_4__["EditCallTreeInfoComponent"],
            _call_tree_info_editor_call_tree_info_editor_component__WEBPACK_IMPORTED_MODULE_1__["CallTreeInfoEditorComponent"],
            src_app_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_16__["SafeHtml"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            ckeditor4_angular__WEBPACK_IMPORTED_MODULE_2__["CKEditorModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
            _utility_utility_module__WEBPACK_IMPORTED_MODULE_17__["UtilityModule"],
        ],
        entryComponents: [_call_tree_info_editor_call_tree_info_editor_component__WEBPACK_IMPORTED_MODULE_1__["CallTreeInfoEditorComponent"]],
        exports: [_edit_call_tree_info_component__WEBPACK_IMPORTED_MODULE_4__["EditCallTreeInfoComponent"]],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]]
    })
], EditCallTreeInfoModule);



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
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _directives_system_name_validator_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./directives/system-name-validator.directive */ "./src/app/modules/utility/directives/system-name-validator.directive.ts");



















let UtilityModule = class UtilityModule {
};
UtilityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_confirmation_box_confirmation_box_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmationBoxComponent"],
            _components_division_list_input_box_division_list_input_box_component__WEBPACK_IMPORTED_MODULE_5__["DivisionListInputBoxComponent"],
            _directives_division_validator_directive__WEBPACK_IMPORTED_MODULE_6__["DivisionValidatorDirective"],
            _directives_log_recipient_validator_directive__WEBPACK_IMPORTED_MODULE_8__["LogRecipientValidatorDirective"],
            _directives_system_name_validator_directive__WEBPACK_IMPORTED_MODULE_18__["SystemNameValidatorDirective"],
        ],
        imports: [
            ckeditor4_angular__WEBPACK_IMPORTED_MODULE_3__["CKEditorModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
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
        ],
        entryComponents: [_components_confirmation_box_confirmation_box_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmationBoxComponent"], _components_division_list_input_box_division_list_input_box_component__WEBPACK_IMPORTED_MODULE_5__["DivisionListInputBoxComponent"]],
        exports: [
            _components_confirmation_box_confirmation_box_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmationBoxComponent"],
            _components_division_list_input_box_division_list_input_box_component__WEBPACK_IMPORTED_MODULE_5__["DivisionListInputBoxComponent"],
            _directives_division_validator_directive__WEBPACK_IMPORTED_MODULE_6__["DivisionValidatorDirective"],
            _directives_log_recipient_validator_directive__WEBPACK_IMPORTED_MODULE_8__["LogRecipientValidatorDirective"],
            _directives_system_name_validator_directive__WEBPACK_IMPORTED_MODULE_18__["SystemNameValidatorDirective"],
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

/***/ "./src/app/services/call-tree-info.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/call-tree-info.service.ts ***!
  \****************************************************/
/*! exports provided: CallTreeInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallTreeInfoService", function() { return CallTreeInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let CallTreeInfoService = class CallTreeInfoService {
    constructor(http) {
        this.http = http;
        this.url = '../RestfulServices/CallTreeInfo/';
    }
    getAllCallTreeInfo() {
        const serviceURL = this.url + 'getAllCallTreeInfo';
        return this.http.get(serviceURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    getSharedCallTree() {
        const serviceURL = this.url + 'getSharedCallTree';
        return this.http.get(serviceURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    addCallTreeInfo(callTreeInfo) {
        const serviceURL = this.url + 'addCallTreeInfo';
        return this.http.post(serviceURL, callTreeInfo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    updateCallTreeInfo(callTreeInfo) {
        const serviceURL = this.url + 'updateCallTreeInfo';
        return this.http.post(serviceURL, callTreeInfo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    enableCallTreeInfo(callTreeInfoId) {
        const serviceURL = this.url + 'enableCallTreeInfo';
        let requestParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        requestParams = requestParams.append('callTreeInfoId', callTreeInfoId.toString());
        return this.http.post(serviceURL, requestParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
    disableCallTreeInfo(callTreeInfoId) {
        const serviceURL = this.url + 'disableCallTreeInfo';
        let requestParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        requestParams = requestParams.append('callTreeInfoId', callTreeInfoId.toString());
        return this.http.post(serviceURL, requestParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res));
    }
};
CallTreeInfoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CallTreeInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], CallTreeInfoService);



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

module.exports = __webpack_require__(/*! E:\Users\cstsang\workspace\CallTreeAdmin\frontEndSrc\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map