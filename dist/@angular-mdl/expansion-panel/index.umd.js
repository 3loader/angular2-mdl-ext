(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("@angular/animations"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common", "@angular/animations"], factory);
	else if(typeof exports === 'object')
		exports["angularMdl.expansionpanel"] = factory(require("@angular/core"), require("@angular/common"), require("@angular/animations"));
	else
		root["angularMdl.expansionpanel"] = factory(root["ng"]["core"], root["ng"]["common"], root["ng"]["animations"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__expansion_panel_component__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlExpansionPanelHeaderComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__expansion_panel_component__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlExpansionPanelHeaderListContentComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__expansion_panel_component__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlExpansionPanelHeaderSecondaryContentComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__expansion_panel_component__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlExpansionPanelContentComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__expansion_panel_component__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlExpansionPanelBodyComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__expansion_panel_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlExpansionPanelFooterComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__expansion_panel_component__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlExpansionPanelComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__expansion_panel_component__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlExpansionPanelGroupComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__expansion_panel_component__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlExpansionPanelModule", function() { return __WEBPACK_IMPORTED_MODULE_0__expansion_panel_component__["i"]; });



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MdlExpansionPanelHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return MdlExpansionPanelHeaderListContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return MdlExpansionPanelHeaderSecondaryContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MdlExpansionPanelContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlExpansionPanelBodyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MdlExpansionPanelFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlExpansionPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MdlExpansionPanelGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return MdlExpansionPanelModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_animations__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MdlExpansionPanelHeaderComponent = (function () {
    function MdlExpansionPanelHeaderComponent() {
        this.isExpanded = false;
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MdlExpansionPanelHeaderComponent.prototype.onClick = function () {
        this.onChange.emit();
    };
    return MdlExpansionPanelHeaderComponent;
}());
MdlExpansionPanelHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-expansion-panel-header',
        template: "\n    <ng-content></ng-content>\n    <div class=\"mdl-expansion-panel__header--expand-icon\" (click)=\"onClick()\">\n      <span *ngIf=\"!isExpanded\" class=\"material-icons\">expand_more</span>\n      <span *ngIf=\"isExpanded\" class=\"material-icons\">expand_less</span>\n    </div>\n  ",
        host: {
            '[class.mdl-expansion-panel__header]': 'true'
        }
    })
], MdlExpansionPanelHeaderComponent);

var MdlExpansionPanelHeaderListContentComponent = (function () {
    function MdlExpansionPanelHeaderListContentComponent() {
    }
    return MdlExpansionPanelHeaderListContentComponent;
}());
MdlExpansionPanelHeaderListContentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-expansion-panel-header-list-content',
        template: '<ng-content></ng-content>',
        host: {
            '[class.mdl-expansion-panel__header--list-content]': 'true'
        }
    })
], MdlExpansionPanelHeaderListContentComponent);

var MdlExpansionPanelHeaderSecondaryContentComponent = (function () {
    function MdlExpansionPanelHeaderSecondaryContentComponent() {
    }
    return MdlExpansionPanelHeaderSecondaryContentComponent;
}());
MdlExpansionPanelHeaderSecondaryContentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-expansion-panel-header-secondary-content',
        template: '<ng-content></ng-content>',
        host: {
            '[class.mdl-expansion-panel__header--secondary-content]': 'true'
        }
    })
], MdlExpansionPanelHeaderSecondaryContentComponent);

var MdlExpansionPanelContentComponent = (function () {
    function MdlExpansionPanelContentComponent() {
        this.isExpanded = 'false';
    }
    return MdlExpansionPanelContentComponent;
}());
MdlExpansionPanelContentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-expansion-panel-content',
        template: '<ng-content></ng-content>',
        host: {
            '[class.mdl-expansion-panel__content]': 'true',
            '[@isExpanded]': 'isExpanded'
        },
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["trigger"])('isExpanded', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["state"])('true', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({ height: '*' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["state"])('false', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({ height: '0px' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["transition"])('* => *', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["animate"])('250ms ease-in'))
            ])
        ]
    })
], MdlExpansionPanelContentComponent);

var MdlExpansionPanelBodyComponent = (function () {
    function MdlExpansionPanelBodyComponent() {
    }
    return MdlExpansionPanelBodyComponent;
}());
MdlExpansionPanelBodyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-expansion-panel-body',
        template: '<ng-content></ng-content>',
        host: {
            '[class.mdl-expansion-panel__content--body]': 'true'
        }
    })
], MdlExpansionPanelBodyComponent);

var MdlExpansionPanelFooterComponent = (function () {
    function MdlExpansionPanelFooterComponent() {
    }
    return MdlExpansionPanelFooterComponent;
}());
MdlExpansionPanelFooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-expansion-panel-footer',
        template: '<ng-content></ng-content>',
        host: {
            '[class.mdl-expansion-panel__content--footer]': 'true'
        }
    })
], MdlExpansionPanelFooterComponent);

var MdlExpansionPanelComponent = (function () {
    function MdlExpansionPanelComponent() {
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.disabled = false;
        this.isExpanded = false;
    }
    Object.defineProperty(MdlExpansionPanelComponent.prototype, "expanded", {
        get: function () {
            return this.isExpanded;
        },
        // expanded property is getter/setter for the internal 'isExpanded' flag
        set: function (bool) {
            this._toggle(bool);
        },
        enumerable: true,
        configurable: true
    });
    ;
    MdlExpansionPanelComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.header.onChange.subscribe(function () {
            if (!_this.disabled)
                _this._toggle(!_this.isExpanded);
        });
    };
    MdlExpansionPanelComponent.prototype.onKeyUp = function ($event) {
        if ($event.key === 'Enter' && !this.disabled)
            this.toggle();
    };
    MdlExpansionPanelComponent.prototype.toggle = function () {
        this._toggle(!this.isExpanded);
    };
    MdlExpansionPanelComponent.prototype.expand = function () {
        this._toggle(true);
    };
    MdlExpansionPanelComponent.prototype.collapse = function () {
        this._toggle(false);
    };
    MdlExpansionPanelComponent.prototype.disableToggle = function () {
        this.disabled = true;
    };
    MdlExpansionPanelComponent.prototype.enableToggle = function () {
        this.disabled = false;
    };
    MdlExpansionPanelComponent.prototype._toggle = function (isExpanded) {
        this.isExpanded = isExpanded;
        this.content.isExpanded = "" + isExpanded;
        this.header.isExpanded = isExpanded;
        this.onChange.emit(isExpanded);
    };
    return MdlExpansionPanelComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])(MdlExpansionPanelHeaderComponent),
    __metadata("design:type", MdlExpansionPanelHeaderComponent)
], MdlExpansionPanelComponent.prototype, "header", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])(MdlExpansionPanelContentComponent),
    __metadata("design:type", MdlExpansionPanelContentComponent)
], MdlExpansionPanelComponent.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], MdlExpansionPanelComponent.prototype, "onChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], MdlExpansionPanelComponent.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], MdlExpansionPanelComponent.prototype, "expanded", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MdlExpansionPanelComponent.prototype, "onKeyUp", null);
MdlExpansionPanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-expansion-panel',
        template: '<ng-content></ng-content>',
        host: {
            '[class.mdl-expansion-panel]': 'true',
            '[class.expanded]': 'expanded',
            '[class.disabled]': 'disabled',
            '[tabindex]': '0'
        }
    })
], MdlExpansionPanelComponent);

var MdlExpansionPanelGroupComponent = (function () {
    function MdlExpansionPanelGroupComponent() {
        this.expandedIndex = -1;
    }
    MdlExpansionPanelGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.panels.forEach(function (panel, i) {
            /**
             * Set the expanded index to the panel index which is initialized in expanded state
             *
             * Having more than one of the panels being initialized in expanded state
             * is NOT supported
             */
            if (panel.expanded) {
                if (_this.expandedIndex > -1) {
                    var errorMessage = "\n            PanelGroup does not support more than one Panel to be expanded initially.\n            \n            Make sure only one <mdl-expansion-panel> receives input like [expanded]=\"true\".\n            ";
                    _this.throw(errorMessage);
                }
                _this.expandedIndex = i;
            }
            /**
             * Expand the panel and collapse previously
             * expanded panel when a panel is toggled.
             * Save the new expanded panel index.
             */
            panel.onChange.subscribe(function (isExpanded) {
                if (isExpanded) {
                    if (i !== _this.expandedIndex && _this.expandedIndex >= 0) {
                        _this.panels.toArray()[_this.expandedIndex].collapse();
                    }
                    _this.expandedIndex = i;
                }
                if (!isExpanded && i === _this.expandedIndex) {
                    _this.expandedIndex = -1;
                }
            });
        });
    };
    MdlExpansionPanelGroupComponent.prototype.getExpanded = function () {
        return this.expandedIndex;
    };
    MdlExpansionPanelGroupComponent.prototype.getPanel = function (index) {
        return this.panels.toArray()[index];
    };
    MdlExpansionPanelGroupComponent.prototype.throw = function (message) {
        throw new Error(message);
    };
    return MdlExpansionPanelGroupComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(MdlExpansionPanelComponent),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
], MdlExpansionPanelGroupComponent.prototype, "panels", void 0);
MdlExpansionPanelGroupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-expansion-panel-group',
        template: '<ng-content></ng-content>',
        host: {
            '[class.mdl-expansion-panel-group]': 'true'
        }
    })
], MdlExpansionPanelGroupComponent);

var MDL_EXPANSION_PANEL_DIRECTIVES = [
    MdlExpansionPanelGroupComponent,
    MdlExpansionPanelComponent,
    MdlExpansionPanelHeaderComponent,
    MdlExpansionPanelHeaderListContentComponent,
    MdlExpansionPanelHeaderSecondaryContentComponent,
    MdlExpansionPanelContentComponent,
    MdlExpansionPanelBodyComponent,
    MdlExpansionPanelFooterComponent
];
var MdlExpansionPanelModule = MdlExpansionPanelModule_1 = (function () {
    function MdlExpansionPanelModule() {
    }
    MdlExpansionPanelModule.forRoot = function () {
        return {
            ngModule: MdlExpansionPanelModule_1,
            providers: []
        };
    };
    return MdlExpansionPanelModule;
}());
MdlExpansionPanelModule = MdlExpansionPanelModule_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        exports: MDL_EXPANSION_PANEL_DIRECTIVES,
        declarations: MDL_EXPANSION_PANEL_DIRECTIVES,
    })
], MdlExpansionPanelModule);

var MdlExpansionPanelModule_1;


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

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=expansion-panel.js.map