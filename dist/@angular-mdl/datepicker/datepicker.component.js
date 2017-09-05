var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, HostListener, Inject, InjectionToken, ViewChild, ViewEncapsulation } from '@angular/core';
import { MdlButtonComponent, MdlDialogReference } from '@angular-mdl/core';
import * as moment from 'moment';
export var CURRENT_DATE = new InjectionToken('current-date');
export var DATEPICKER_CONFIG = new InjectionToken('datepicker-options');
var DatePickerDialogComponent = (function () {
    function DatePickerDialogComponent(dialog, initialDate, options) {
        var _this = this;
        this.dialog = dialog;
        this.initialDate = initialDate;
        this.options = options;
        this.prevEnabled = true;
        this.nextEnabled = true;
        this.mDate = moment(initialDate || new Date());
        this.mCurrentMonth = this.mDate.clone();
        var startOfWeek = moment().startOf('week');
        var endOfWeek = moment().endOf('week');
        this.monthGridWeekDays = [];
        var day = startOfWeek;
        while (day <= endOfWeek) {
            this.monthGridWeekDays.push(moment.weekdaysMin(day.day()));
            day = day.clone().add(1, 'd');
        }
        this.okLabel = options.okLabel || 'Ok';
        this.cancelLabel = options.cancelLabel || 'Cancel';
        dialog.onVisible().subscribe(function () {
            _this.okButton.elementRef.nativeElement.focus();
        });
    }
    Object.defineProperty(DatePickerDialogComponent.prototype, "mCurrentMonth", {
        get: function () {
            return this._mCurrentMonth;
        },
        set: function (m) {
            this._mCurrentMonth = m;
            this.calculateMonthGrid();
        },
        enumerable: true,
        configurable: true
    });
    DatePickerDialogComponent.prototype.onEsc = function () {
        this.dialog.hide(this.initialDate);
    };
    DatePickerDialogComponent.prototype.onOk = function () {
        this.dialog.hide(this.mDate.toDate());
    };
    DatePickerDialogComponent.prototype.onCancel = function () {
        this.dialog.hide(this.initialDate);
    };
    DatePickerDialogComponent.prototype.prevMonth = function () {
        this.mCurrentMonth = this.mCurrentMonth.subtract(1, 'months');
    };
    DatePickerDialogComponent.prototype.nextMonth = function () {
        this.mCurrentMonth = this.mCurrentMonth.add(1, 'months');
    };
    DatePickerDialogComponent.prototype.calculateMonthGrid = function () {
        var startDateOfMonth = this.mCurrentMonth.clone().startOf('month').clone();
        var startWeek = startDateOfMonth.week();
        var endWeek = this.mCurrentMonth.clone().endOf('month').week();
        // caveat year switch
        // 52 - 5
        // 48 - 1
        // console.log(startWeek, endWeek);
        this.monthGridDays = [];
        var week = startWeek;
        this.monthGridDays.push(this.createMonthRow(startDateOfMonth, week));
        do {
            var firstDayInWeek = startDateOfMonth.add(1, 'week');
            week = firstDayInWeek.week();
            this.monthGridDays.push(this.createMonthRow(this.mCurrentMonth.clone(), week));
        } while (week != endWeek);
    };
    DatePickerDialogComponent.prototype.createMonthRow = function (mDate, week) {
        var _this = this;
        return {
            week: week,
            days: Array(7).fill(0).map(function (n, i) {
                var mDay = mDate.week(week).startOf('week').clone().add(n + i, 'day');
                return {
                    day: mDay,
                    isCurrentMonth: _this.isCurrentMonth(mDay)
                };
            })
        };
    };
    DatePickerDialogComponent.prototype.isActualDate = function (day) {
        return this.mDate.isSame(day, 'day');
    };
    DatePickerDialogComponent.prototype.isCurrentMonth = function (day) {
        return this.mCurrentMonth.isSame(day, 'month');
    };
    DatePickerDialogComponent.prototype.setCurrentDay = function (day) {
        this.mDate = day;
    };
    return DatePickerDialogComponent;
}());
__decorate([
    ViewChild('okButton'),
    __metadata("design:type", MdlButtonComponent)
], DatePickerDialogComponent.prototype, "okButton", void 0);
__decorate([
    HostListener('keydown.esc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DatePickerDialogComponent.prototype, "onEsc", null);
DatePickerDialogComponent = __decorate([
    Component({selector: 'datepicker',
        template: "<div class=\"mdl-datepicker-header\"> <div class=\"mdl-datepicker-header-year\">{{mDate.format('YYYY')}}</div> <h3 class=\"mdl-datepicker-header-day-month\">{{mDate.format('ddd, MMM DD')}}</h3> </div> <div class=\"mdl-dialog__content\"> <div class=\"mdl-datepicker-month-navigation-buttons\"> <button [disabled]=\"!prevEnabled\" (click)=\"prevMonth()\" class=\"mdl-datepicker-prev-month\" mdl-button mdl-button-type=\"icon\"><mdl-icon>keyboard_arrow_left</mdl-icon></button> <button [disabled]=\"!nextEnabled\" (click)=\"nextMonth()\" class=\"mdl-datepicker-next-month\" mdl-button mdl-button-type=\"icon\"><mdl-icon>keyboard_arrow_right</mdl-icon></button> </div> <div class=\"mdl-datepicker-month\"> <div class=\"mdl-datepicker-month-title\">{{mCurrentMonth.format('MMMM YYYY')}}</div> <div class=\"mdl-datepicker-weekdays\"> <div class=\"mdl-datepicker-weekday\" *ngFor=\"let wd of monthGridWeekDays\">{{wd}}</div> </div> <div class=\"mdl-datepicker-monthgrid\"> <div class=\"mdl-datepicker-weekdays\" *ngFor=\"let week of monthGridDays\"> <div class=\"mdl-datepicker-weekday\" *ngFor=\"let dayInfo of week.days\"> <button [disabled]=\"!dayInfo.isCurrentMonth\" mdl-button mdl-ripple mdl-button class=\"day\" [ngClass]=\"{'actual': isActualDate(dayInfo.day)}\" (click)=\"setCurrentDay(dayInfo.day)\" >{{dayInfo.day.date()}}</button> </div> </div> </div> </div> </div> <div class=\"mdl-dialog__actions\"> <button #okButton mdl-button mdl-colored=\"primary\" type=\"button\" (click)=\"onOk()\" class=\"close mdl-datepicker-ok-button\">{{okLabel}}</button> <button mdl-button mdl-colored=\"primary\" type=\"button\" (click)=\"onCancel()\" class=\"mdl-datepicker-cancel-button\">{{cancelLabel}}</button> </div>",
        encapsulation: ViewEncapsulation.None
    }),
    __param(1, Inject(CURRENT_DATE)),
    __param(2, Inject(DATEPICKER_CONFIG)),
    __metadata("design:paramtypes", [MdlDialogReference,
        Date, Object])
], DatePickerDialogComponent);
export { DatePickerDialogComponent };

//# sourceMappingURL=datepicker.component.js.map
