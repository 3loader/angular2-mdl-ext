import { ModuleWithProviders, AfterContentInit, EventEmitter, QueryList } from '@angular/core';
export declare class MdlExpansionPanelHeaderComponent {
    isExpanded: boolean;
    onChange: EventEmitter<null>;
    onClick(): void;
}
export declare class MdlExpansionPanelHeaderListContentComponent {
}
export declare class MdlExpansionPanelHeaderSecondaryContentComponent {
}
export declare class MdlExpansionPanelContentComponent {
    isExpanded: string;
}
export declare class MdlExpansionPanelBodyComponent {
}
export declare class MdlExpansionPanelFooterComponent {
}
export declare class MdlExpansionPanelComponent implements AfterContentInit {
    header: MdlExpansionPanelHeaderComponent;
    content: MdlExpansionPanelContentComponent;
    onChange: EventEmitter<boolean>;
    disabled: boolean;
    expanded: boolean;
    private isExpanded;
    ngAfterContentInit(): void;
    onKeyUp($event: any): void;
    toggle(): void;
    expand(): void;
    collapse(): void;
    disableToggle(): void;
    enableToggle(): void;
    private _toggle(isExpanded);
}
export declare class MdlExpansionPanelGroupComponent implements AfterContentInit {
    panels: QueryList<MdlExpansionPanelComponent>;
    expandedIndex: number;
    ngAfterContentInit(): void;
    getExpanded(): number;
    getPanel(index: number): MdlExpansionPanelComponent;
    private throw(message);
}
export declare class MdlExpansionPanelModule {
    static forRoot(): ModuleWithProviders;
}
