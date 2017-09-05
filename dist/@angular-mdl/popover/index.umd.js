(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/platform-browser"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/platform-browser"], factory);
	else if(typeof exports === 'object')
		exports["angularMdl.popover"] = factory(require("@angular/core"), require("@angular/platform-browser"));
	else
		root["angularMdl.popover"] = factory(root["ng"]["core"], root["ng"]["platformBrowser"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popover__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlPopoverRegistry", function() { return __WEBPACK_IMPORTED_MODULE_0__popover__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlPopoverComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__popover__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlPopoverModule", function() { return __WEBPACK_IMPORTED_MODULE_0__popover__["b"]; });



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MdlPopoverRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlPopoverComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlPopoverModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__);
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


var MdlPopoverRegistry = (function () {
    function MdlPopoverRegistry(doc) {
        var _this = this;
        this.doc = doc;
        this.popoverComponents = [];
        this.doc.addEventListener('click', function () {
            _this.popoverComponents
                .filter(function (component) { return component.isVisible; })
                .forEach(function (component) { return component.hide(); });
        });
    }
    ;
    MdlPopoverRegistry.prototype.add = function (popoverComponent) {
        this.popoverComponents.push(popoverComponent);
    };
    MdlPopoverRegistry.prototype.remove = function (popoverComponent) {
        this.popoverComponents.slice(this.popoverComponents.indexOf(popoverComponent), 1);
    };
    MdlPopoverRegistry.prototype.hideAllExcept = function (popoverComponent) {
        this.popoverComponents.forEach(function (component) {
            if (component !== popoverComponent) {
                component.hide();
            }
        });
    };
    return MdlPopoverRegistry;
}());
MdlPopoverRegistry = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DOCUMENT"])),
    __metadata("design:paramtypes", [Object])
], MdlPopoverRegistry);

var MdlPopoverComponent = (function () {
    function MdlPopoverComponent(changeDetectionRef, elementRef, popoverRegistry) {
        this.changeDetectionRef = changeDetectionRef;
        this.elementRef = elementRef;
        this.popoverRegistry = popoverRegistry;
        this.hideOnClick = false;
        this.onShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isVisible = false;
        this.directionUp = false;
        this.popoverRegistry.add(this);
    }
    MdlPopoverComponent.prototype.onClick = function (event) {
        if (!this.hideOnClick) {
            event.stopPropagation();
        }
    };
    MdlPopoverComponent.prototype.ngOnDestroy = function () {
        this.popoverRegistry.remove(this);
    };
    MdlPopoverComponent.prototype.toggle = function (event) {
        if (this.isVisible) {
            this.hide();
        }
        else {
            this.show(event);
        }
    };
    MdlPopoverComponent.prototype.hide = function () {
        if (this.isVisible) {
            this.onHide.emit(null);
            this.isVisible = false;
            this.changeDetectionRef.markForCheck();
        }
    };
    MdlPopoverComponent.prototype.hideAllPopovers = function () {
        this.popoverRegistry.hideAllExcept(this);
    };
    MdlPopoverComponent.prototype.show = function (event) {
        this.hideAllPopovers();
        event.stopPropagation();
        if (!this.isVisible) {
            this.onShow.emit(null);
            this.isVisible = true;
            this.updateDirection(event);
        }
    };
    MdlPopoverComponent.prototype.updateDirection = function (event) {
        var _this = this;
        var nativeEl = this.elementRef.nativeElement;
        var targetRect = event.target.getBoundingClientRect();
        var viewHeight = window.innerHeight;
        setTimeout(function () {
            var height = nativeEl.offsetHeight;
            if (height) {
                var spaceAvailable = {
                    top: targetRect.top,
                    bottom: viewHeight - targetRect.bottom
                };
                _this.directionUp = spaceAvailable.bottom < height;
                _this.changeDetectionRef.markForCheck();
            }
        });
    };
    return MdlPopoverComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('hide-on-click'),
    __metadata("design:type", Boolean)
], MdlPopoverComponent.prototype, "hideOnClick", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], MdlPopoverComponent.prototype, "onShow", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], MdlPopoverComponent.prototype, "onHide", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.is-visible'),
    __metadata("design:type", Object)
], MdlPopoverComponent.prototype, "isVisible", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.direction-up'),
    __metadata("design:type", Object)
], MdlPopoverComponent.prototype, "directionUp", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], MdlPopoverComponent.prototype, "onClick", null);
MdlPopoverComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-popover',
        host: {
            '[class.mdl-popover]': 'true'
        },
        template: __webpack_require__(4),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
        MdlPopoverRegistry])
], MdlPopoverComponent);

var MdlPopoverModule = MdlPopoverModule_1 = (function () {
    function MdlPopoverModule() {
    }
    MdlPopoverModule.forRoot = function () {
        return {
            ngModule: MdlPopoverModule_1,
            providers: []
        };
    };
    return MdlPopoverModule;
}());
MdlPopoverModule = MdlPopoverModule_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [],
        exports: [MdlPopoverComponent],
        declarations: [MdlPopoverComponent],
        providers: [MdlPopoverRegistry],
    })
], MdlPopoverModule);

var MdlPopoverModule_1;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n";

/***/ })
/******/ ]);
});
//# sourceMappingURL=popover.js.map