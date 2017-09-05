var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlPopoverModule } from '../popover/popover';
import { MdlFabMenuItemComponent } from './fab-menu-item';
import { MdlModule } from '@angular-mdl/core';
var MdlFabMenuComponent = (function () {
    function MdlFabMenuComponent() {
    }
    MdlFabMenuComponent.prototype.ngOnInit = function () {
    };
    return MdlFabMenuComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MdlFabMenuComponent.prototype, "alwaysShowTooltips", void 0);
MdlFabMenuComponent = __decorate([
    Component({selector: 'mdl-fab-menu',
        template: "<button mdl-button mdl-button-type=\"fab\" mdl-colored=\"primary\" (click)=\"fabPopover.toggle($event)\" (touchstart)=\"alwaysShowTooltips = true\" > <mdl-icon>add</mdl-icon> </button> <mdl-popover #fabPopover [hide-on-click]=\"true\" [class.direction-up]=\"true\"> <ng-content></ng-content> </mdl-popover> ",
        styles: [":host { position: fixed; right: 0.5rem; bottom: 0.5rem; z-index: 1000; .mdl-popover { background: none; &.direction-up { bottom: 56px; } right: calc((56px - 40px)/2); } } "]
    }),
    __metadata("design:paramtypes", [])
], MdlFabMenuComponent);
export { MdlFabMenuComponent };
var MdlFabMenuModule = MdlFabMenuModule_1 = (function () {
    function MdlFabMenuModule() {
    }
    MdlFabMenuModule.forRoot = function () {
        return {
            ngModule: MdlFabMenuModule_1,
            providers: []
        };
    };
    return MdlFabMenuModule;
}());
MdlFabMenuModule = MdlFabMenuModule_1 = __decorate([
    NgModule({
        imports: [
            CommonModule,
            MdlModule,
            MdlPopoverModule
        ],
        exports: [
            MdlFabMenuComponent,
            MdlFabMenuItemComponent
        ],
        declarations: [
            MdlFabMenuComponent,
            MdlFabMenuItemComponent
        ]
    })
], MdlFabMenuModule);
export { MdlFabMenuModule };
var MdlFabMenuModule_1;

//# sourceMappingURL=fab-menu.js.map
