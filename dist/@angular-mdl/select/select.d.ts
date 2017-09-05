import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, ModuleWithProviders, QueryList } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { MdlPopoverComponent } from '../popover/index';
import { MdlOptionComponent } from './option';
import 'rxjs/operator/debounceTime';
export declare class SearchableComponent {
    searchQuery: string;
    private clearTimeout;
    protected updateShortSearchQuery($event: KeyboardEvent): void;
}
export declare class MdlSelectComponent extends SearchableComponent implements ControlValueAccessor, AfterContentInit {
    private changeDetectionRef;
    ngModel: any;
    disabled: boolean;
    autocomplete: boolean;
    label: string;
    isFloatingLabel: boolean;
    placeholder: string;
    multiple: boolean;
    arrowUp: string;
    arrowDown: string;
    change: EventEmitter<any>;
    inputChange: EventEmitter<any>;
    selectInput: ElementRef;
    popoverComponent: MdlPopoverComponent;
    optionComponents: QueryList<MdlOptionComponent>;
    private _isFloatingLabel;
    textfieldId: string;
    text: string;
    private textByValue;
    private onChange;
    private onTouched;
    focused: boolean;
    constructor(changeDetectionRef: ChangeDetectorRef);
    ngAfterContentInit(): void;
    private onKeyDown($event);
    private onKeyUp($event);
    private setCurrentOptionValue();
    private resetText();
    private getCurrentOption();
    isDirty(): boolean;
    private onCharacterKeydown($event);
    private getAutoSelection();
    private onArrow($event, offset);
    private focusValue(value);
    private isEmpty();
    reset(resetValue?: boolean): void;
    private bindOptions();
    private renderValue(value);
    private stringifyValue(value);
    toggle($event: Event): void;
    onFocus($event: Event): void;
    onInputFocus($event: Event): void;
    private onOpen();
    private onClose();
    private onSelect(value);
    private scrollToValue(value);
    writeValue(value: any): void;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
}
export declare class MdlSelectModule {
    static forRoot(): ModuleWithProviders;
}
