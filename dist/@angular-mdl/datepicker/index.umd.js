(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular-mdl/core"), require("moment"), require("rxjs/Subject"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular-mdl/core", "moment", "rxjs/Subject", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["angularMdl.datepicker"] = factory(require("@angular/core"), require("@angular-mdl/core"), require("moment"), require("rxjs/Subject"), require("@angular/common"));
	else
		root["angularMdl.datepicker"] = factory(root["ng"]["core"], root["angularMdl"]["@angular-mdl/core"], root["moment"]["moment"], root["rx"]["Subject"], root["ng"]["common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENT_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DATEPICKER_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DatePickerDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_mdl_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_mdl_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_mdl_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
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



var CURRENT_DATE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('current-date');
var DATEPICKER_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('datepicker-options');
var DatePickerDialogComponent = (function () {
    function DatePickerDialogComponent(dialog, initialDate, options) {
        var _this = this;
        this.dialog = dialog;
        this.initialDate = initialDate;
        this.options = options;
        this.prevEnabled = true;
        this.nextEnabled = true;
        this.mDate = __WEBPACK_IMPORTED_MODULE_2_moment__(initialDate || new Date());
        this.mCurrentMonth = this.mDate.clone();
        var startOfWeek = __WEBPACK_IMPORTED_MODULE_2_moment__().startOf('week');
        var endOfWeek = __WEBPACK_IMPORTED_MODULE_2_moment__().endOf('week');
        this.monthGridWeekDays = [];
        var day = startOfWeek;
        while (day <= endOfWeek) {
            this.monthGridWeekDays.push(__WEBPACK_IMPORTED_MODULE_2_moment__["weekdaysMin"](day.day()));
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('okButton'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_mdl_core__["MdlButtonComponent"])
], DatePickerDialogComponent.prototype, "okButton", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keydown.esc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DatePickerDialogComponent.prototype, "onEsc", null);
DatePickerDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'datepicker',
        template: __webpack_require__(5),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(CURRENT_DATE)),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(DATEPICKER_CONFIG)),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_mdl_core__["MdlDialogReference"],
        Date, Object])
], DatePickerDialogComponent);



/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__datepicker_component__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CURRENT_DATE", function() { return __WEBPACK_IMPORTED_MODULE_0__datepicker_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DATEPICKER_CONFIG", function() { return __WEBPACK_IMPORTED_MODULE_0__datepicker_component__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DatePickerDialogComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__datepicker_component__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datepicker_service__ = __webpack_require__(6);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlDatePickerService", function() { return __WEBPACK_IMPORTED_MODULE_1__datepicker_service__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlDatePickerModule", function() { return __WEBPACK_IMPORTED_MODULE_1__datepicker_service__["a"]; });




/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-datepicker-header\">\n  <div class=\"mdl-datepicker-header-year\">{{mDate.format('YYYY')}}</div>\n  <h3 class=\"mdl-datepicker-header-day-month\">{{mDate.format('ddd, MMM DD')}}</h3>\n</div>\n\n<div class=\"mdl-dialog__content\">\n  <div class=\"mdl-datepicker-month-navigation-buttons\">\n    <button [disabled]=\"!prevEnabled\" (click)=\"prevMonth()\" class=\"mdl-datepicker-prev-month\" mdl-button mdl-button-type=\"icon\"><mdl-icon>keyboard_arrow_left</mdl-icon></button>\n    <button [disabled]=\"!nextEnabled\" (click)=\"nextMonth()\" class=\"mdl-datepicker-next-month\" mdl-button mdl-button-type=\"icon\"><mdl-icon>keyboard_arrow_right</mdl-icon></button>\n  </div>\n  <div class=\"mdl-datepicker-month\">\n    <div class=\"mdl-datepicker-month-title\">{{mCurrentMonth.format('MMMM YYYY')}}</div>\n    <div class=\"mdl-datepicker-weekdays\">\n       <div class=\"mdl-datepicker-weekday\" *ngFor=\"let wd of monthGridWeekDays\">{{wd}}</div>\n    </div>\n    <div class=\"mdl-datepicker-monthgrid\">\n\n      <div class=\"mdl-datepicker-weekdays\" *ngFor=\"let week of monthGridDays\">\n        <div class=\"mdl-datepicker-weekday\"\n             *ngFor=\"let dayInfo of week.days\">\n          <button\n                  [disabled]=\"!dayInfo.isCurrentMonth\"\n                  mdl-button\n                  mdl-ripple\n                  mdl-button\n                  class=\"day\"\n                  [ngClass]=\"{'actual': isActualDate(dayInfo.day)}\"\n                  (click)=\"setCurrentDay(dayInfo.day)\"\n          >{{dayInfo.day.date()}}</button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n<div class=\"mdl-dialog__actions\">\n  <button #okButton\n          mdl-button mdl-colored=\"primary\"\n          type=\"button\"\n          (click)=\"onOk()\"\n          class=\"close mdl-datepicker-ok-button\">{{okLabel}}</button>\n  <button\n          mdl-button mdl-colored=\"primary\"\n          type=\"button\"\n          (click)=\"onCancel()\"\n          class=\"mdl-datepicker-cancel-button\">{{cancelLabel}}</button>\n</div>";

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlDatePickerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlDatePickerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datepicker_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_mdl_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_mdl_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_mdl_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_common__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MdlDatePickerService = (function () {
    function MdlDatePickerService(dialogService) {
        this.dialogService = dialogService;
    }
    MdlDatePickerService.prototype.selectDate = function (currentDate, options) {
        if (currentDate === void 0) { currentDate = null; }
        if (options === void 0) { options = {}; }
        var subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        var pDialog = this.dialogService.showCustomDialog({
            classes: 'mdl-datepicker',
            component: __WEBPACK_IMPORTED_MODULE_2__datepicker_component__["c" /* DatePickerDialogComponent */],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__datepicker_component__["a" /* CURRENT_DATE */], useValue: currentDate },
                { provide: __WEBPACK_IMPORTED_MODULE_2__datepicker_component__["b" /* DATEPICKER_CONFIG */], useValue: options }
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_mdl_core__["MdlDialogService"]])
], MdlDatePickerService);

var MdlDatePickerModule = (function () {
    function MdlDatePickerModule() {
    }
    return MdlDatePickerModule;
}());
MdlDatePickerModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_mdl_core__["MdlButtonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_mdl_core__["MdlIconModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_mdl_core__["MdlRippleModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_mdl_core__["MdlDialogModule"]
        ],
        exports: [],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__datepicker_component__["c" /* DatePickerDialogComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__datepicker_component__["c" /* DatePickerDialogComponent */]],
        providers: [
            MdlDatePickerService,
            __WEBPACK_IMPORTED_MODULE_3__angular_mdl_core__["MdlDialogService"]
        ]
    })
], MdlDatePickerModule);



/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=datepicker.js.map