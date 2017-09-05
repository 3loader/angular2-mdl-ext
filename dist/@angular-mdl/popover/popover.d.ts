import { ChangeDetectorRef, ElementRef, EventEmitter, ModuleWithProviders } from '@angular/core';
export declare class MdlPopoverRegistry {
    private doc;
    private popoverComponents;
    constructor(doc: any);
    add(popoverComponent: MdlPopoverComponent): void;
    remove(popoverComponent: MdlPopoverComponent): void;
    hideAllExcept(popoverComponent: MdlPopoverComponent): void;
}
export declare class MdlPopoverComponent {
    private changeDetectionRef;
    elementRef: ElementRef;
    private popoverRegistry;
    hideOnClick: boolean;
    onShow: EventEmitter<any>;
    onHide: EventEmitter<any>;
    isVisible: boolean;
    directionUp: boolean;
    onClick(event: Event): void;
    constructor(changeDetectionRef: ChangeDetectorRef, elementRef: ElementRef, popoverRegistry: MdlPopoverRegistry);
    ngOnDestroy(): void;
    toggle(event: Event): void;
    hide(): void;
    private hideAllPopovers();
    show(event: Event): void;
    private updateDirection(event);
}
export declare class MdlPopoverModule {
    static forRoot(): ModuleWithProviders;
}
