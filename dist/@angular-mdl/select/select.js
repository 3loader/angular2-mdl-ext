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
import { Component, ChangeDetectorRef, ContentChildren, ElementRef, EventEmitter, forwardRef, Input, NgModule, Output, QueryList, ViewChild, ViewEncapsulation, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MdlPopoverModule, MdlPopoverComponent } from '../popover/index';
import { MdlOptionComponent } from './option';
import { Key, isKey, isCharacterKey, keyboardEventKey } from './keyboard';
import 'rxjs/operator/debounceTime';
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
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return MdlSelectComponent; }),
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
        this.searchQuery += keyboardEventKey($event).toLowerCase();
    };
    return SearchableComponent;
}());
export { SearchableComponent };
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
        _this.change = new EventEmitter(true);
        _this.inputChange = new EventEmitter(true);
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
            if (isKey($event, Key.UpArrow)) {
                this.onArrow($event, -1);
            }
            else if (isKey($event, Key.DownArrow)) {
                this.onArrow($event, 1);
            }
            else if (!this.autocomplete && isCharacterKey($event)) {
                this.onCharacterKeydown($event);
            }
        }
    };
    MdlSelectComponent.prototype.onKeyUp = function ($event) {
        var inputField = $event.target;
        var inputValue = inputField.value;
        if (!this.multiple && isKey($event, Key.Enter, Key.Escape, Key.Tab)) {
            this.searchQuery = '';
            if (isKey($event, Key.Enter)) {
                this.setCurrentOptionValue();
            }
            else {
                inputField.value = this.text;
            }
            inputField.blur();
            this.popoverComponent.hide();
        }
        else if (this.autocomplete && !isKey($event, Key.DownArrow, Key.UpArrow)) {
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
    Input(),
    __metadata("design:type", Object)
], MdlSelectComponent.prototype, "ngModel", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MdlSelectComponent.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MdlSelectComponent.prototype, "autocomplete", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MdlSelectComponent.prototype, "label", void 0);
__decorate([
    Input('floating-label'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdlSelectComponent.prototype, "isFloatingLabel", null);
__decorate([
    Input(),
    __metadata("design:type", String)
], MdlSelectComponent.prototype, "placeholder", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MdlSelectComponent.prototype, "multiple", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MdlSelectComponent.prototype, "arrowUp", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MdlSelectComponent.prototype, "arrowDown", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], MdlSelectComponent.prototype, "change", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], MdlSelectComponent.prototype, "inputChange", void 0);
__decorate([
    ViewChild('selectInput'),
    __metadata("design:type", ElementRef)
], MdlSelectComponent.prototype, "selectInput", void 0);
__decorate([
    ViewChild(MdlPopoverComponent),
    __metadata("design:type", MdlPopoverComponent)
], MdlSelectComponent.prototype, "popoverComponent", void 0);
__decorate([
    ContentChildren(MdlOptionComponent),
    __metadata("design:type", QueryList)
], MdlSelectComponent.prototype, "optionComponents", void 0);
__decorate([
    HostListener('keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], MdlSelectComponent.prototype, "onKeyDown", null);
__decorate([
    HostListener('keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], MdlSelectComponent.prototype, "onKeyUp", null);
MdlSelectComponent = __decorate([
    Component({selector: 'mdl-select',
        host: {
            '[class.mdl-select]': 'true',
            '[class.mdl-select--floating-label]': 'isFloatingLabel',
            '[class.has-placeholder]': 'placeholder'
        },
        template: "<div class=\"mdl-textfield is-upgraded\" [class.is-focused]=\"popoverComponent.isVisible || focused\" [class.is-disabled]=\"disabled\" [class.is-dirty]=\"isDirty()\" > <span [attr.tabindex]=\"!disabled ? 0 : null\" (focus)=\"onFocus($event);\"> </span> <input #selectInput tabindex=\"-1\" [readonly]=\"disabled || !autocomplete\" class=\"mdl-textfield__input\" (click)=\"toggle($event)\" (change)=\"$event.stopPropagation()\" (focus)=\"onInputFocus($event);\" [placeholder]=\"placeholder ? placeholder : ''\" [attr.id]=\"textfieldId\" [value]=\"text\"> <span class=\"mdl-select__toggle material-icons\" (click)=\"toggle($event)\"> {{ focused ? arrowUp : arrowDown }} </span> <label class=\"mdl-textfield__label\" [attr.for]=\"textfieldId\">{{ label }}</label> <span class=\"mdl-textfield__error\"></span> <mdl-popover #popover tabindex=\"-1\" [class.mdl-popover--above]=\"autocomplete\" [hide-on-click]=\"!multiple\" [style.width.%]=\"100\"> <div class=\"mdl-list mdl-shadow--6dp\"> <ng-content *ngIf=\"popoverComponent.isVisible\"></ng-content> </div> </mdl-popover> </div> ",
        encapsulation: ViewEncapsulation.None,
        providers: [MDL_SELECT_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef])
], MdlSelectComponent);
export { MdlSelectComponent };
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
    NgModule({
        imports: [
            CommonModule,
            MdlPopoverModule
        ],
        exports: [
            MdlSelectComponent,
            MdlOptionComponent
        ],
        declarations: [
            MdlSelectComponent,
            MdlOptionComponent
        ],
        providers: [
            MDL_SELECT_VALUE_ACCESSOR
        ]
    })
], MdlSelectModule);
export { MdlSelectModule };
var MdlSelectModule_1;

//# sourceMappingURL=select.js.map
