var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { CURRENT_DATE, DATEPICKER_CONFIG, DatePickerDialogComponent } from './datepicker.component';
import { NgModule } from '@angular/core';
import { MdlButtonModule, MdlDialogModule, MdlDialogService, MdlIconModule, MdlRippleModule } from '@angular-mdl/core';
import { CommonModule } from '@angular/common';
var MdlDatePickerService = (function () {
    function MdlDatePickerService(dialogService) {
        this.dialogService = dialogService;
    }
    MdlDatePickerService.prototype.selectDate = function (currentDate, options) {
        if (currentDate === void 0) { currentDate = null; }
        if (options === void 0) { options = {}; }
        var subject = new Subject();
        var pDialog = this.dialogService.showCustomDialog({
            classes: 'mdl-datepicker',
            component: DatePickerDialogComponent,
            providers: [
                { provide: CURRENT_DATE, useValue: currentDate },
                { provide: DATEPICKER_CONFIG, useValue: options }
            ],
            isModal: true,
            styles: { 'width': '320px' },
            openFrom: options.openFrom
        });
        pDialog.subscribe(function (dialogReference) {
            dialogReference.onHide().subscribe(function (date) {
                subject.next(date);
                subject.complete();
            });
        });
        return subject.asObservable();
    };
    return MdlDatePickerService;
}());
MdlDatePickerService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [MdlDialogService])
], MdlDatePickerService);
export { MdlDatePickerService };
var MdlDatePickerModule = (function () {
    function MdlDatePickerModule() {
    }
    return MdlDatePickerModule;
}());
MdlDatePickerModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            MdlButtonModule,
            MdlIconModule,
            MdlRippleModule,
            MdlDialogModule
        ],
        exports: [],
        declarations: [DatePickerDialogComponent],
        entryComponents: [DatePickerDialogComponent],
        providers: [
            MdlDatePickerService,
            MdlDialogService
        ]
    })
], MdlDatePickerModule);
export { MdlDatePickerModule };

//# sourceMappingURL=datepicker.service.js.map
