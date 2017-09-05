import { EventEmitter, OnInit } from '@angular/core';
import { MdlFabMenuComponent } from './fab-menu';
export declare class MdlFabMenuItemComponent implements OnInit {
    label: string;
    icon: string;
    fabMenu: MdlFabMenuComponent;
    menuClick: EventEmitter<any>;
    isHoovering: boolean;
    constructor();
    ngOnInit(): void;
}
