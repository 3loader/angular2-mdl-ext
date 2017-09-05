var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MdlFabMenuComponent } from './fab-menu';
var MdlFabMenuItemComponent = (function () {
    function MdlFabMenuItemComponent() {
        this.menuClick = new EventEmitter();
        this.isHoovering = false;
    }
    MdlFabMenuItemComponent.prototype.ngOnInit = function () {
        this.isHoovering = false;
    };
    return MdlFabMenuItemComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], MdlFabMenuItemComponent.prototype, "label", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MdlFabMenuItemComponent.prototype, "icon", void 0);
__decorate([
    Input(),
    __metadata("design:type", MdlFabMenuComponent)
], MdlFabMenuItemComponent.prototype, "fabMenu", void 0);
__decorate([
    Output('menu-clicked'),
    __metadata("design:type", EventEmitter)
], MdlFabMenuItemComponent.prototype, "menuClick", void 0);
MdlFabMenuItemComponent = __decorate([
    Component({selector: 'mdl-fab-menu-item',
        template: "<button mdl-button mdl-button-type=\"mini-fab\" (mouseover)=\"isHoovering = true\" (mouseleave)=\"isHoovering = false\" (click)=\"menuClick.emit()\"> <mdl-icon>{{icon}}</mdl-icon> </button> <mdl-chip [mdl-label]=\"label\" [hidden]=\"!(fabMenu.alwaysShowTooltips || isHoovering)\"></mdl-chip> ",
        styles: [":host { display: flex; flex-direction: row-reverse; margin-bottom: 1rem; .mdl-chip { display: inline-block; } .mdl-button { margin: 0 0 0 2rem; background: white; } } "]
    }),
    __metadata("design:paramtypes", [])
], MdlFabMenuItemComponent);
export { MdlFabMenuItemComponent };

//# sourceMappingURL=fab-menu-item.js.map
