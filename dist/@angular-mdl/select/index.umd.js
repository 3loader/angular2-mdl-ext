(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"), require("@angular/platform-browser"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "@angular/common", "@angular/platform-browser"], factory);
	else if(typeof exports === 'object')
		exports["angularMdl.select"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"), require("@angular/platform-browser"));
	else
		root["angularMdl.select"] = factory(root["ng"]["core"], root["ng"]["forms"], root["ng"]["common"], root["ng"]["platformBrowser"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_13__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlOptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MdlOptionComponent = (function () {
    function MdlOptionComponent(changeDetectionRef) {
        this.changeDetectionRef = changeDetectionRef;
        this.multiple = false;
        this.selected = false;
        this.onSelect = Function.prototype;
    }
    MdlOptionComponent.prototype.setMultiple = function (multiple) {
        this.multiple = multiple;
        this.changeDetectionRef.detectChanges();
    };
    MdlOptionComponent.prototype.updateSelected = function (value) {
        var _this = this;
        if (this.multiple) {
            this.selected = (value.map(function (v) { return _this.stringifyValue(v); }).indexOf(this.stringValue) != -1);
        }
        else {
            this.selected = this.value == value;
        }
        this.changeDetectionRef.detectChanges();
    };
    MdlOptionComponent.prototype.ngAfterViewInit = function () {
        this.text = this.contentWrapper.nativeElement.textContent.trim();
    };
    Object.defineProperty(MdlOptionComponent.prototype, "stringValue", {
        get: function () {
            return this.stringifyValue(this.value);
        },
        enumerable: true,
        configurable: true
    });
    MdlOptionComponent.prototype.stringifyValue = function (value) {
        switch (typeof value) {
            case 'number': return String(value);
            case 'object': return JSON.stringify(value);
            default: return (!!value) ? String(value) : '';
        }
    };
    return MdlOptionComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('value'),
    __metadata("design:type", Object)
], MdlOptionComponent.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('contentWrapper'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], MdlOptionComponent.prototype, "contentWrapper", void 0);
MdlOptionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-option',
        host: {
            '[class.mdl-option__container]': 'true'
        },
        template: __webpack_require__(7)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
], MdlOptionComponent);



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isArray_1 = __webpack_require__(18);
var isObject_1 = __webpack_require__(19);
var isFunction_1 = __webpack_require__(2);
var tryCatch_1 = __webpack_require__(20);
var errorObject_1 = __webpack_require__(4);
var UnsubscriptionError_1 = __webpack_require__(21);
/**
 * Represents a disposable resource, such as the execution of an Observable. A
 * Subscription has one important method, `unsubscribe`, that takes no argument
 * and just disposes the resource held by the subscription.
 *
 * Additionally, subscriptions may be grouped together through the `add()`
 * method, which will attach a child Subscription to the current Subscription.
 * When a Subscription is unsubscribed, all its children (and its grandchildren)
 * will be unsubscribed as well.
 *
 * @class Subscription
 */
var Subscription = (function () {
    /**
     * @param {function(): void} [unsubscribe] A function describing how to
     * perform the disposal of resources when the `unsubscribe` method is called.
     */
    function Subscription(unsubscribe) {
        /**
         * A flag to indicate whether this Subscription has already been unsubscribed.
         * @type {boolean}
         */
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    /**
     * Disposes the resources held by the subscription. May, for instance, cancel
     * an ongoing Observable execution or cancel any other type of work that
     * started when the Subscription was created.
     * @return {void}
     */
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        // null out _subscriptions first so any child subscriptions that attempt
        // to remove themselves from this subscription will noop
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        // if this._parent is null, then so is this._parents, and we
        // don't have to remove ourselves from any parent subscriptions.
        while (_parent) {
            _parent.remove(this);
            // if this._parents is null or index >= len,
            // then _parent is set to null, and the loop exits
            _parent = ++index < len && _parents[index] || null;
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
            if (trial === errorObject_1.errorObject) {
                hasErrors = true;
                errors = errors || (errorObject_1.errorObject.e instanceof UnsubscriptionError_1.UnsubscriptionError ?
                    flattenUnsubscriptionErrors(errorObject_1.errorObject.e.errors) : [errorObject_1.errorObject.e]);
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                    if (trial === errorObject_1.errorObject) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = errorObject_1.errorObject.e;
                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                        }
                        else {
                            errors.push(err);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    /**
     * Adds a tear down to be called during the unsubscribe() of this
     * Subscription.
     *
     * If the tear down being added is a subscription that is already
     * unsubscribed, is the same reference `add` is being called on, or is
     * `Subscription.EMPTY`, it will not be added.
     *
     * If this subscription is already in an `closed` state, the passed
     * tear down logic will be executed immediately.
     *
     * @param {TeardownLogic} teardown The additional logic to execute on
     * teardown.
     * @return {Subscription} Returns the Subscription used or created to be
     * added to the inner subscriptions list. This Subscription can be used with
     * `remove()` to remove the passed teardown logic from the inner subscriptions
     * list.
     */
    Subscription.prototype.add = function (teardown) {
        if (!teardown || (teardown === Subscription.EMPTY)) {
            return Subscription.EMPTY;
        }
        if (teardown === this) {
            return this;
        }
        var subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (typeof subscription._addParent !== 'function' /* quack quack */) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        var subscriptions = this._subscriptions || (this._subscriptions = []);
        subscriptions.push(subscription);
        subscription._addParent(this);
        return subscription;
    };
    /**
     * Removes a Subscription from the internal list of subscriptions that will
     * unsubscribe during the unsubscribe process of this Subscription.
     * @param {Subscription} subscription The subscription to remove.
     * @return {void}
     */
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        if (!_parent || _parent === parent) {
            // If we don't have a parent, or the new parent is the same as the
            // current parent, then set this._parent to the new parent.
            this._parent = parent;
        }
        else if (!_parents) {
            // If there's already one parent, but not multiple, allocate an Array to
            // store the rest of the parent Subscriptions.
            this._parents = [parent];
        }
        else if (_parents.indexOf(parent) === -1) {
            // Only add the new parent to the _parents list if it's not already there.
            _parents.push(parent);
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// typeof any so that it we don't have to cast when comparing a result to the error object
exports.errorObject = { e: {} };
//# sourceMappingURL=errorObject.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
// CommonJS / Node have global context exposed as "global" variable.
// We don't want to include the whole node.d.ts this this compilation unit so we'll just fake
// the global "global" var for now.
var __window = typeof window !== 'undefined' && window;
var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' &&
    self instanceof WorkerGlobalScope && self;
var __global = typeof global !== 'undefined' && global;
var _root = __window || __global || __self;
exports.root = _root;
// Workaround Closure Compiler restriction: The body of a goog.module cannot use throw.
// This is needed when used with angular/tsickle which inserts a goog.module statement.
// Wrap in IIFE
(function () {
    if (!_root) {
        throw new Error('RxJS could not find any global context (window, self, global)');
    }
})();
//# sourceMappingURL=root.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__option__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlOptionComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__option__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__select__ = __webpack_require__(8);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SearchableComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__select__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlSelectComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__select__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MdlSelectModule", function() { return __WEBPACK_IMPORTED_MODULE_1__select__["b"]; });




/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "<div\n    class=\"mdl-list__item\"\n    (click)=\"onSelect(value)\"\n    [class.is-active]=\"selected\">\n\n  <div *ngIf=\"multiple\" class=\"mdl-list__item-secondary-action\">\n    <div\n        class=\"mdl-checkbox is-upgraded\"\n        [class.is-checked]=\"selected\"\n        (click)=\"onSelect(value)\">\n      <input type=\"checkbox\" class=\"mdl-checkbox__input\">\n      <span class=\"mdl-checkbox__label\"></span>\n      <span class=\"mdl-checkbox__focus-helper\"></span>\n      <span class=\"mdl-checkbox__box-outline\">\n        <span class=\"mdl-checkbox__tick-outline\"></span>\n      </span>\n    </div>\n  </div>\n\n  <div #contentWrapper class=\"mdl-list__item-primary-content\">\n    <ng-content></ng-content>\n  </div>\n\n</div>\n";

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SearchableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlSelectModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__option__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__keyboard__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_debounceTime__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operator_debounceTime__);
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var uniq = function (array) { return Array.from(new Set(array)); };
var isEqual = function (a, b) { return JSON.stringify(a) === JSON.stringify(b); };
function toBoolean(value) {
    return value != null && "" + value !== 'false';
}
function randomId() {
    var S4 = function () { return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1); };
    return (S4() + S4());
}
var MDL_SELECT_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return MdlSelectComponent; }),
    multi: true
};
var SearchableComponent = (function () {
    function SearchableComponent() {
        this.searchQuery = '';
        this.clearTimeout = null;
    }
    // short search query will be cleared after 300 ms
    SearchableComponent.prototype.updateShortSearchQuery = function ($event) {
        var _this = this;
        if (this.clearTimeout) {
            clearTimeout(this.clearTimeout);
        }
        this.clearTimeout = setTimeout(function () {
            _this.searchQuery = '';
        }, 300);
        this.searchQuery += Object(__WEBPACK_IMPORTED_MODULE_5__keyboard__["d" /* keyboardEventKey */])($event).toLowerCase();
    };
    return SearchableComponent;
}());

var MdlSelectComponent = (function (_super) {
    __extends(MdlSelectComponent, _super);
    function MdlSelectComponent(changeDetectionRef) {
        var _this = _super.call(this) || this;
        _this.changeDetectionRef = changeDetectionRef;
        _this.disabled = false;
        _this.autocomplete = false;
        _this.label = '';
        _this.placeholder = '';
        _this.multiple = false;
        _this.arrowUp = 'keyboard_arrow_down';
        _this.arrowDown = 'keyboard_arrow_down';
        _this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](true);
        _this.inputChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](true);
        _this._isFloatingLabel = false;
        _this.text = '';
        _this.textByValue = {};
        _this.onChange = Function.prototype;
        _this.onTouched = Function.prototype;
        _this.focused = false;
        _this.textfieldId = "mdl-textfield-" + randomId();
        return _this;
    }
    Object.defineProperty(MdlSelectComponent.prototype, "isFloatingLabel", {
        get: function () { return this._isFloatingLabel; },
        set: function (value) { this._isFloatingLabel = toBoolean(value); },
        enumerable: true,
        configurable: true
    });
    MdlSelectComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.bindOptions();
        this.renderValue(this.ngModel);
        this.optionComponents.changes.subscribe(function () {
            _this.bindOptions();
            _this.renderValue(_this.ngModel);
        });
        this.popoverComponent.onShow.subscribe(function () { return _this.onOpen(); });
        this.popoverComponent.onHide.subscribe(function () { return _this.onClose(); });
    };
    MdlSelectComponent.prototype.onKeyDown = function ($event) {
        if (!this.disabled && this.popoverComponent.isVisible && !this.multiple) {
            if (Object(__WEBPACK_IMPORTED_MODULE_5__keyboard__["c" /* isKey */])($event, __WEBPACK_IMPORTED_MODULE_5__keyboard__["a" /* Key */].UpArrow)) {
                this.onArrow($event, -1);
            }
            else if (Object(__WEBPACK_IMPORTED_MODULE_5__keyboard__["c" /* isKey */])($event, __WEBPACK_IMPORTED_MODULE_5__keyboard__["a" /* Key */].DownArrow)) {
                this.onArrow($event, 1);
            }
            else if (!this.autocomplete && Object(__WEBPACK_IMPORTED_MODULE_5__keyboard__["b" /* isCharacterKey */])($event)) {
                this.onCharacterKeydown($event);
            }
        }
    };
    MdlSelectComponent.prototype.onKeyUp = function ($event) {
        var inputField = $event.target;
        var inputValue = inputField.value;
        if (!this.multiple && Object(__WEBPACK_IMPORTED_MODULE_5__keyboard__["c" /* isKey */])($event, __WEBPACK_IMPORTED_MODULE_5__keyboard__["a" /* Key */].Enter, __WEBPACK_IMPORTED_MODULE_5__keyboard__["a" /* Key */].Escape, __WEBPACK_IMPORTED_MODULE_5__keyboard__["a" /* Key */].Tab)) {
            this.searchQuery = '';
            if (Object(__WEBPACK_IMPORTED_MODULE_5__keyboard__["c" /* isKey */])($event, __WEBPACK_IMPORTED_MODULE_5__keyboard__["a" /* Key */].Enter)) {
                this.setCurrentOptionValue();
            }
            else {
                inputField.value = this.text;
            }
            inputField.blur();
            this.popoverComponent.hide();
        }
        else if (this.autocomplete && !Object(__WEBPACK_IMPORTED_MODULE_5__keyboard__["c" /* isKey */])($event, __WEBPACK_IMPORTED_MODULE_5__keyboard__["a" /* Key */].DownArrow, __WEBPACK_IMPORTED_MODULE_5__keyboard__["a" /* Key */].UpArrow)) {
            this.inputChange.emit(inputValue);
            this.searchQuery = inputValue;
        }
        $event.preventDefault();
    };
    MdlSelectComponent.prototype.setCurrentOptionValue = function () {
        var currentOption = this.getCurrentOption(), autoSelectedValue = this.getAutoSelection(), value = autoSelectedValue || (currentOption ? currentOption.value : this.ngModel);
        this.resetText();
        if (!isEqual(this.ngModel, value)) {
            this.writeValue(value);
            this.change.emit(value);
        }
    };
    MdlSelectComponent.prototype.resetText = function () {
        this.text = this.selectInput.nativeElement.value;
        this.changeDetectionRef.detectChanges();
    };
    MdlSelectComponent.prototype.getCurrentOption = function () {
        return this.optionComponents ? this.optionComponents.toArray().find(function (option) { return option.selected; }) : null;
    };
    MdlSelectComponent.prototype.isDirty = function () {
        return Boolean(this.selectInput.nativeElement.value);
    };
    MdlSelectComponent.prototype.onCharacterKeydown = function ($event) {
        this.updateShortSearchQuery($event);
        var autoSelectedValue = this.getAutoSelection();
        if (autoSelectedValue) {
            this.onSelect(autoSelectedValue);
        }
        $event.preventDefault();
    };
    MdlSelectComponent.prototype.getAutoSelection = function () {
        var _this = this;
        var optionsList = this.optionComponents.toArray();
        var filteredOptions = optionsList.filter(function (option) {
            return option.text.toLowerCase().startsWith(_this.searchQuery);
        });
        var selectedOption = optionsList.find(function (option) { return option.selected; });
        if (filteredOptions.length > 0) {
            var selectedOptionInFiltered = filteredOptions.indexOf(selectedOption) != -1;
            if (!selectedOptionInFiltered && !filteredOptions[0].selected) {
                return filteredOptions[0].value;
            }
        }
        return null;
    };
    MdlSelectComponent.prototype.onArrow = function ($event, offset) {
        var arr = this.optionComponents.toArray(), selectedOption = arr.find(function (option) { return option.selected; }), selectedOptionIndex = arr.indexOf(selectedOption), optionForSelection = selectedOption !== null
            ? arr[selectedOptionIndex + offset]
            : arr[offset > 0 ? -1 : 0];
        if (optionForSelection) {
            var value = optionForSelection.value;
            this.focusValue(value);
        }
        $event.preventDefault();
    };
    MdlSelectComponent.prototype.focusValue = function (value) {
        this.scrollToValue(value);
        if (this.optionComponents) {
            this.optionComponents.forEach(function (selectOptionComponent) {
                selectOptionComponent.updateSelected(value);
            });
        }
    };
    MdlSelectComponent.prototype.isEmpty = function () {
        return this.multiple ? !this.ngModel.length : !this.ngModel;
    };
    // rebind options and reset value in connected select
    MdlSelectComponent.prototype.reset = function (resetValue) {
        if (resetValue === void 0) { resetValue = true; }
        if (resetValue && !this.isEmpty()) {
            this.ngModel = this.multiple ? [] : '';
            this.onChange(this.ngModel);
            this.change.emit(this.ngModel);
            this.renderValue(this.ngModel);
        }
    };
    MdlSelectComponent.prototype.bindOptions = function () {
        var _this = this;
        this.optionComponents.forEach(function (selectOptionComponent) {
            selectOptionComponent.setMultiple(_this.multiple);
            selectOptionComponent.onSelect = _this.onSelect.bind(_this);
            if (selectOptionComponent.value != null) {
                _this.textByValue[_this.stringifyValue(selectOptionComponent.value)] = selectOptionComponent.text;
            }
        });
    };
    MdlSelectComponent.prototype.renderValue = function (value) {
        var _this = this;
        if (this.multiple) {
            this.text = value.map(function (value) { return _this.textByValue[_this.stringifyValue(value)]; }).join(', ');
        }
        else {
            this.text = this.textByValue[this.stringifyValue(value)] || '';
        }
        this.changeDetectionRef.detectChanges();
        if (this.optionComponents) {
            var _value_1 = (!this.multiple && this.optionComponents.length === 1)
                ? this.optionComponents.toArray()[0].value
                : value;
            this.optionComponents.forEach(function (selectOptionComponent) {
                selectOptionComponent.updateSelected(_value_1);
            });
        }
    };
    MdlSelectComponent.prototype.stringifyValue = function (value) {
        switch (typeof value) {
            case 'number': return String(value);
            case 'object': return JSON.stringify(value);
            default: return (!!value) ? String(value) : '';
        }
    };
    MdlSelectComponent.prototype.toggle = function ($event) {
        if (!this.disabled) {
            $event.stopPropagation();
            this.popoverComponent.toggle($event);
        }
    };
    MdlSelectComponent.prototype.onFocus = function ($event) {
        var _this = this;
        if (!this.popoverComponent.isVisible) {
            setTimeout(function () {
                _this.popoverComponent.show($event);
                _this.selectInput.nativeElement.focus();
            }, 200);
        }
    };
    MdlSelectComponent.prototype.onInputFocus = function ($event) {
        if (this.autocomplete) {
            this.selectInput.nativeElement.select();
        }
    };
    MdlSelectComponent.prototype.onOpen = function () {
        if (!this.disabled) {
            this.focused = true;
            this.focusValue(this.ngModel);
        }
    };
    MdlSelectComponent.prototype.onClose = function () {
        if (!this.disabled) {
            this.focused = false;
            this.focusValue(this.ngModel);
            this.selectInput.nativeElement.value = this.text;
        }
    };
    MdlSelectComponent.prototype.onSelect = function (value) {
        if (!this.multiple) {
            this.scrollToValue(value);
        }
        if (!isEqual(this.ngModel, value)) {
            this.writeValue(value);
            this.change.emit(value);
        }
    };
    MdlSelectComponent.prototype.scrollToValue = function (value) {
        var popover = this.popoverComponent.elementRef.nativeElement;
        var list = popover.querySelector(".mdl-list");
        var option = null;
        this.optionComponents.forEach(function (o) {
            // not great for long lists because break is not available
            if (o.value == value) {
                option = o.contentWrapper.nativeElement;
            }
        });
        if (option) {
            var selectedItemElem = option.parentElement;
            var computedScrollTop = selectedItemElem.offsetTop - (list.clientHeight / 2) + (selectedItemElem.clientHeight / 2);
            list.scrollTop = Math.max(computedScrollTop, 0);
        }
    };
    MdlSelectComponent.prototype.writeValue = function (value) {
        var _this = this;
        if (this.multiple) {
            this.ngModel = this.ngModel || [];
            if (!value || this.ngModel === value) {
            }
            else if (Array.isArray(value)) {
                this.ngModel = uniq(this.ngModel.concat(value));
            }
            else if (this.ngModel.map(function (v) { return _this.stringifyValue(v); }).indexOf(this.stringifyValue(value)) != -1) {
                this.ngModel = this.ngModel.filter(function (v) { return _this.stringifyValue(v) !== _this.stringifyValue(value); }).slice();
            }
            else if (!!value) {
                this.ngModel = this.ngModel.concat([value]);
            }
        }
        else {
            this.ngModel = value;
        }
        this.onChange(this.ngModel);
        this.renderValue(this.ngModel);
    };
    MdlSelectComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    MdlSelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    MdlSelectComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    return MdlSelectComponent;
}(SearchableComponent));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MdlSelectComponent.prototype, "ngModel", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], MdlSelectComponent.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], MdlSelectComponent.prototype, "autocomplete", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MdlSelectComponent.prototype, "label", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('floating-label'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdlSelectComponent.prototype, "isFloatingLabel", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MdlSelectComponent.prototype, "placeholder", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], MdlSelectComponent.prototype, "multiple", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MdlSelectComponent.prototype, "arrowUp", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MdlSelectComponent.prototype, "arrowDown", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], MdlSelectComponent.prototype, "change", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], MdlSelectComponent.prototype, "inputChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('selectInput'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], MdlSelectComponent.prototype, "selectInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__popover_index__["a" /* MdlPopoverComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__popover_index__["a" /* MdlPopoverComponent */])
], MdlSelectComponent.prototype, "popoverComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_4__option__["a" /* MdlOptionComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
], MdlSelectComponent.prototype, "optionComponents", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], MdlSelectComponent.prototype, "onKeyDown", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], MdlSelectComponent.prototype, "onKeyUp", null);
MdlSelectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mdl-select',
        host: {
            '[class.mdl-select]': 'true',
            '[class.mdl-select--floating-label]': 'isFloatingLabel',
            '[class.has-placeholder]': 'placeholder'
        },
        template: __webpack_require__(30),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        providers: [MDL_SELECT_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
], MdlSelectComponent);

var MdlSelectModule = MdlSelectModule_1 = (function () {
    function MdlSelectModule() {
    }
    MdlSelectModule.forRoot = function () {
        return {
            ngModule: MdlSelectModule_1,
            providers: []
        };
    };
    return MdlSelectModule;
}());
MdlSelectModule = MdlSelectModule_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__popover_index__["b" /* MdlPopoverModule */]
        ],
        exports: [
            MdlSelectComponent,
            __WEBPACK_IMPORTED_MODULE_4__option__["a" /* MdlOptionComponent */]
        ],
        declarations: [
            MdlSelectComponent,
            __WEBPACK_IMPORTED_MODULE_4__option__["a" /* MdlOptionComponent */]
        ],
        providers: [
            MDL_SELECT_VALUE_ACCESSOR
        ]
    })
], MdlSelectModule);

var MdlSelectModule_1;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popover__ = __webpack_require__(12);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__popover__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__popover__["b"]; });



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MdlPopoverRegistry */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlPopoverComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlPopoverModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(13);
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
        template: __webpack_require__(14),
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
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n";

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Key; });
/* unused harmony export keyboardEventKeyCode */
/* harmony export (immutable) */ __webpack_exports__["d"] = keyboardEventKey;
/* harmony export (immutable) */ __webpack_exports__["c"] = isKey;
/* harmony export (immutable) */ __webpack_exports__["b"] = isCharacterKey;
var Key;
(function (Key) {
    Key[Key["Tab"] = 9] = "Tab";
    Key[Key["Enter"] = 13] = "Enter";
    Key[Key["Escape"] = 27] = "Escape";
    Key[Key["UpArrow"] = 38] = "UpArrow";
    Key[Key["DownArrow"] = 40] = "DownArrow";
    Key[Key["A"] = 65] = "A";
    Key[Key["B"] = 66] = "B";
    Key[Key["C"] = 67] = "C";
    Key[Key["D"] = 68] = "D";
    Key[Key["E"] = 69] = "E";
    Key[Key["F"] = 70] = "F";
    Key[Key["G"] = 71] = "G";
    Key[Key["H"] = 72] = "H";
    Key[Key["I"] = 73] = "I";
    Key[Key["J"] = 74] = "J";
    Key[Key["K"] = 75] = "K";
    Key[Key["L"] = 76] = "L";
    Key[Key["M"] = 77] = "M";
    Key[Key["N"] = 78] = "N";
    Key[Key["O"] = 79] = "O";
    Key[Key["P"] = 80] = "P";
    Key[Key["Q"] = 81] = "Q";
    Key[Key["R"] = 82] = "R";
    Key[Key["S"] = 83] = "S";
    Key[Key["T"] = 84] = "T";
    Key[Key["U"] = 85] = "U";
    Key[Key["V"] = 86] = "V";
    Key[Key["W"] = 87] = "W";
    Key[Key["X"] = 88] = "X";
    Key[Key["Y"] = 89] = "Y";
    Key[Key["Z"] = 90] = "Z";
})(Key || (Key = {}));
function keyboardEventKeyCode($event) {
    return ($event.which || $event.charCode || $event.keyCode);
}
function keyboardEventKey($event) {
    return $event.key || String.fromCharCode(keyboardEventKeyCode($event));
}
function isKey($event) {
    var keys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments[_i];
    }
    return keys.indexOf(keyboardEventKeyCode($event)) !== -1;
}
function isCharacterKey($event) {
    var keyCode = keyboardEventKeyCode($event);
    return !!String.fromCharCode(keyCode) && keyCode >= 48 && keyCode <= 90;
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(17);
var async_1 = __webpack_require__(25);
/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return this.lift(new DebounceTimeOperator(dueTime, scheduler));
}
exports.debounceTime = debounceTime;
var DebounceTimeOperator = (function () {
    function DebounceTimeOperator(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    DebounceTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    };
    return DebounceTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DebounceTimeSubscriber = (function (_super) {
    __extends(DebounceTimeSubscriber, _super);
    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
        _super.call(this, destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
        this.debouncedSubscription = null;
        this.lastValue = null;
        this.hasValue = false;
    }
    DebounceTimeSubscriber.prototype._next = function (value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    };
    DebounceTimeSubscriber.prototype._complete = function () {
        this.debouncedNext();
        this.destination.complete();
    };
    DebounceTimeSubscriber.prototype.debouncedNext = function () {
        this.clearDebounce();
        if (this.hasValue) {
            this.destination.next(this.lastValue);
            this.lastValue = null;
            this.hasValue = false;
        }
    };
    DebounceTimeSubscriber.prototype.clearDebounce = function () {
        var debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    };
    return DebounceTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}
//# sourceMappingURL=debounceTime.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isFunction_1 = __webpack_require__(2);
var Subscription_1 = __webpack_require__(3);
var Observer_1 = __webpack_require__(22);
var rxSubscriber_1 = __webpack_require__(23);
/**
 * Implements the {@link Observer} interface and extends the
 * {@link Subscription} class. While the {@link Observer} is the public API for
 * consuming the values of an {@link Observable}, all Observers get converted to
 * a Subscriber, in order to provide Subscription-like capabilities such as
 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
 * implementing operators, but it is rarely used as a public API.
 *
 * @class Subscriber<T>
 */
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    /**
     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
     * defined Observer or a `next` callback function.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     */
    function Subscriber(destinationOrNext, error, complete) {
        _super.call(this);
        this.syncErrorValue = null;
        this.syncErrorThrown = false;
        this.syncErrorThrowable = false;
        this.isStopped = false;
        switch (arguments.length) {
            case 0:
                this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        this.destination = destinationOrNext;
                        this.destination.add(this);
                    }
                    else {
                        this.syncErrorThrowable = true;
                        this.destination = new SafeSubscriber(this, destinationOrNext);
                    }
                    break;
                }
            default:
                this.syncErrorThrowable = true;
                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                break;
        }
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    /**
     * A static factory for a Subscriber, given a (potentially partial) definition
     * of an Observer.
     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
     * Observer represented by the given arguments.
     */
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    /**
     * The {@link Observer} callback to receive notifications of type `next` from
     * the Observable, with a value. The Observable may call this method 0 or more
     * times.
     * @param {T} [value] The `next` value.
     * @return {void}
     */
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    /**
     * The {@link Observer} callback to receive notifications of type `error` from
     * the Observable, with an attached {@link Error}. Notifies the Observer that
     * the Observable has experienced an error condition.
     * @param {any} [err] The `error` exception.
     * @return {void}
     */
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    /**
     * The {@link Observer} callback to receive a valueless notification of type
     * `complete` from the Observable. Notifies the Observer that the Observable
     * has finished sending push-based notifications.
     * @return {void}
     */
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        _super.call(this);
        this._parentSubscriber = _parentSubscriber;
        var next;
        var context = this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = this.unsubscribe.bind(this);
            }
        }
        this._context = context;
        this._next = next;
        this._error = error;
        this._complete = complete;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._error) {
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                throw err;
            }
            else {
                _parentSubscriber.syncErrorValue = err;
                _parentSubscriber.syncErrorThrown = true;
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            throw err;
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
//# sourceMappingURL=Subscriber.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
//# sourceMappingURL=isArray.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isObject(x) {
    return x != null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var errorObject_1 = __webpack_require__(4);
var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    }
    catch (e) {
        errorObject_1.errorObject.e = e;
        return errorObject_1.errorObject;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
exports.tryCatch = tryCatch;
;
//# sourceMappingURL=tryCatch.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when one or more errors have occurred during the
 * `unsubscribe` of a {@link Subscription}.
 */
var UnsubscriptionError = (function (_super) {
    __extends(UnsubscriptionError, _super);
    function UnsubscriptionError(errors) {
        _super.call(this);
        this.errors = errors;
        var err = Error.call(this, errors ?
            errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n  ') : '');
        this.name = err.name = 'UnsubscriptionError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return UnsubscriptionError;
}(Error));
exports.UnsubscriptionError = UnsubscriptionError;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) { throw err; },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(5);
var Symbol = root_1.root.Symbol;
exports.rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
    Symbol.for('rxSubscriber') : '@@rxSubscriber';
/**
 * @deprecated use rxSubscriber instead
 */
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),
/* 24 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var AsyncAction_1 = __webpack_require__(26);
var AsyncScheduler_1 = __webpack_require__(28);
/**
 *
 * Async Scheduler
 *
 * <span class="informal">Schedule task as if you used setTimeout(task, duration)</span>
 *
 * `async` scheduler schedules tasks asynchronously, by putting them on the JavaScript
 * event loop queue. It is best used to delay tasks in time or to schedule tasks repeating
 * in intervals.
 *
 * If you just want to "defer" task, that is to perform it right after currently
 * executing synchronous code ends (commonly achieved by `setTimeout(deferredTask, 0)`),
 * better choice will be the {@link asap} scheduler.
 *
 * @example <caption>Use async scheduler to delay task</caption>
 * const task = () => console.log('it works!');
 *
 * Rx.Scheduler.async.schedule(task, 2000);
 *
 * // After 2 seconds logs:
 * // "it works!"
 *
 *
 * @example <caption>Use async scheduler to repeat task in intervals</caption>
 * function task(state) {
 *   console.log(state);
 *   this.schedule(state + 1, 1000); // `this` references currently executing Action,
 *                                   // which we reschedule with new state and delay
 * }
 *
 * Rx.Scheduler.async.schedule(task, 3000, 0);
 *
 * // Logs:
 * // 0 after 3s
 * // 1 after 4s
 * // 2 after 5s
 * // 3 after 6s
 *
 * @static true
 * @name async
 * @owner Scheduler
 */
exports.async = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
//# sourceMappingURL=async.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var root_1 = __webpack_require__(5);
var Action_1 = __webpack_require__(27);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        // Always replace the current state with the new state.
        this.state = state;
        // Set the pending flag indicating that this action has been scheduled, or
        // has recursively rescheduled itself.
        this.pending = true;
        var id = this.id;
        var scheduler = this.scheduler;
        //
        // Important implementation note:
        //
        // Actions only execute once by default, unless rescheduled from within the
        // scheduled callback. This allows us to implement single and repeat
        // actions via the same code path, without adding API surface area, as well
        // as mimic traditional recursion but across asynchronous boundaries.
        //
        // However, JS runtimes and timers distinguish between intervals achieved by
        // serial `setTimeout` calls vs. a single `setInterval` call. An interval of
        // serial `setTimeout` calls can be individually delayed, which delays
        // scheduling the next `setTimeout`, and so on. `setInterval` attempts to
        // guarantee the interval callback will be invoked more precisely to the
        // interval period, regardless of load.
        //
        // Therefore, we use `setInterval` to schedule single and repeat actions.
        // If the action reschedules itself with the same delay, the interval is not
        // canceled. If the action doesn't reschedule, or reschedules with a
        // different delay, the interval will be canceled after scheduled callback
        // execution.
        //
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.delay = delay;
        // If this action has already an async Id, don't request a new one.
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return root_1.root.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If this action is rescheduled with the same delay time, don't clear the interval id.
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        // Otherwise, if the action's delay time is different from the current delay,
        // or the action has been rescheduled before it's executed, clear the interval id
        return root_1.root.clearInterval(id) && undefined || undefined;
    };
    /**
     * Immediately executes this action and the `work` it contains.
     * @return {any}
     */
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            // Dequeue if the action didn't reschedule itself. Don't call
            // unsubscribe(), because the action could reschedule later.
            // For example:
            // ```
            // scheduler.schedule(function doWork(counter) {
            //   /* ... I'm a busy worker bee ... */
            //   var originalAction = this;
            //   /* wait 100ms before rescheduling the action */
            //   setTimeout(function () {
            //     originalAction.schedule(counter + 1);
            //   }, 100);
            // }, 1000);
            // ```
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(Action_1.Action));
exports.AsyncAction = AsyncAction;
//# sourceMappingURL=AsyncAction.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = __webpack_require__(3);
/**
 * A unit of work to be executed in a {@link Scheduler}. An action is typically
 * created from within a Scheduler and an RxJS user does not need to concern
 * themselves about creating and manipulating an Action.
 *
 * ```ts
 * class Action<T> extends Subscription {
 *   new (scheduler: Scheduler, work: (state?: T) => void);
 *   schedule(state?: T, delay: number = 0): Subscription;
 * }
 * ```
 *
 * @class Action<T>
 */
var Action = (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        _super.call(this);
    }
    /**
     * Schedules this action on its parent Scheduler for execution. May be passed
     * some context object, `state`. May happen at some point in the future,
     * according to the `delay` parameter, if specified.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler.
     * @return {void}
     */
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription_1.Subscription));
exports.Action = Action;
//# sourceMappingURL=Action.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Scheduler_1 = __webpack_require__(29);
var AsyncScheduler = (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler() {
        _super.apply(this, arguments);
        this.actions = [];
        /**
         * A flag to indicate whether the Scheduler is currently executing a batch of
         * queued actions.
         * @type {boolean}
         */
        this.active = false;
        /**
         * An internal ID used to track the latest asynchronous task such as those
         * coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and
         * others.
         * @type {any}
         */
        this.scheduled = undefined;
    }
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift()); // exhaust the scheduler queue
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler_1.Scheduler));
exports.AsyncScheduler = AsyncScheduler;
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * An execution context and a data structure to order tasks and schedule their
 * execution. Provides a notion of (potentially virtual) time, through the
 * `now()` getter method.
 *
 * Each unit of work in a Scheduler is called an {@link Action}.
 *
 * ```ts
 * class Scheduler {
 *   now(): number;
 *   schedule(work, delay?, state?): Subscription;
 * }
 * ```
 *
 * @class Scheduler
 */
var Scheduler = (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    /**
     * Schedules a function, `work`, for execution. May happen at some point in
     * the future, according to the `delay` parameter, if specified. May be passed
     * some context object, `state`, which will be passed to the `work` function.
     *
     * The given arguments will be processed an stored as an Action object in a
     * queue of actions.
     *
     * @param {function(state: ?T): ?Subscription} work A function representing a
     * task, or some unit of work to be executed by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler itself.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @return {Subscription} A subscription in order to be able to unsubscribe
     * the scheduled work.
     */
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = Date.now ? Date.now : function () { return +new Date(); };
    return Scheduler;
}());
exports.Scheduler = Scheduler;
//# sourceMappingURL=Scheduler.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"mdl-textfield is-upgraded\"\n  [class.is-focused]=\"popoverComponent.isVisible || focused\"\n  [class.is-disabled]=\"disabled\"\n  [class.is-dirty]=\"isDirty()\"\n>\n  <span\n      [attr.tabindex]=\"!disabled ? 0 : null\"\n      (focus)=\"onFocus($event);\">\n  </span>\n  <input #selectInput tabindex=\"-1\"\n      [readonly]=\"disabled || !autocomplete\"\n      class=\"mdl-textfield__input\"\n      (click)=\"toggle($event)\"\n      (change)=\"$event.stopPropagation()\"\n      (focus)=\"onInputFocus($event);\"\n      [placeholder]=\"placeholder ? placeholder : ''\"\n      [attr.id]=\"textfieldId\"\n      [value]=\"text\">\n  <span\n      class=\"mdl-select__toggle material-icons\"\n      (click)=\"toggle($event)\">\n    {{ focused ? arrowUp : arrowDown }}\n  </span>\n  <label class=\"mdl-textfield__label\" [attr.for]=\"textfieldId\">{{ label }}</label>\n  <span class=\"mdl-textfield__error\"></span>\n  <mdl-popover #popover tabindex=\"-1\"\n               [class.mdl-popover--above]=\"autocomplete\"\n               [hide-on-click]=\"!multiple\"\n               [style.width.%]=\"100\">\n    <div class=\"mdl-list mdl-shadow--6dp\">\n      <ng-content *ngIf=\"popoverComponent.isVisible\"></ng-content>\n    </div>\n  </mdl-popover>\n</div>\n";

/***/ })
/******/ ]);
});
//# sourceMappingURL=select.js.map