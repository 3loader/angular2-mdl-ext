var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, NgModule, ContentChild, ContentChildren, EventEmitter, Output, Input, QueryList, HostListener, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition, } from '@angular/animations';
var MdlExpansionPanelHeaderComponent = (function () {
    function MdlExpansionPanelHeaderComponent() {
        this.isExpanded = false;
        this.onChange = new EventEmitter();
    }
    MdlExpansionPanelHeaderComponent.prototype.onClick = function () {
        this.onChange.emit();
    };
    return MdlExpansionPanelHeaderComponent;
}());
MdlExpansionPanelHeaderComponent = __decorate([
    Component({
        selector: 'mdl-expansion-panel-header',
        template: "\n    <ng-content></ng-content>\n    <div class=\"mdl-expansion-panel__header--expand-icon\" (click)=\"onClick()\">\n      <span *ngIf=\"!isExpanded\" class=\"material-icons\">expand_more</span>\n      <span *ngIf=\"isExpanded\" class=\"material-icons\">expand_less</span>\n    </div>\n  ",
        host: {
            '[class.mdl-expansion-panel__header]': 'true'
        }
    })
], MdlExpansionPanelHeaderComponent);
export { MdlExpansionPanelHeaderComponent };
var MdlExpansionPanelHeaderListContentComponent = (function () {
    function MdlExpansionPanelHeaderListContentComponent() {
    }
    return MdlExpansionPanelHeaderListContentComponent;
}());
MdlExpansionPanelHeaderListContentComponent = __decorate([
    Component({
        selector: 'mdl-expansion-panel-header-list-content',
        template: '<ng-content></ng-content>',
        host: {
            '[class.mdl-expansion-panel__header--list-content]': 'true'
        }
    })
], MdlExpansionPanelHeaderListContentComponent);
export { MdlExpansionPanelHeaderListContentComponent };
var MdlExpansionPanelHeaderSecondaryContentComponent = (function () {
    function MdlExpansionPanelHeaderSecondaryContentComponent() {
    }
    return MdlExpansionPanelHeaderSecondaryContentComponent;
}());
MdlExpansionPanelHeaderSecondaryContentComponent = __decorate([
    Component({
        selector: 'mdl-expansion-panel-header-secondary-content',
        template: '<ng-content></ng-content>',
        host: {
            '[class.mdl-expansion-panel__header--secondary-content]': 'true'
        }
    })
], MdlExpansionPanelHeaderSecondaryContentComponent);
export { MdlExpansionPanelHeaderSecondaryContentComponent };
var MdlExpansionPanelContentComponent = (function () {
    function MdlExpansionPanelContentComponent() {
        this.isExpanded = 'false';
    }
    return MdlExpansionPanelContentComponent;
}());
MdlExpansionPanelContentComponent = __decorate([
    Component({
        selector: 'mdl-expansion-panel-content',
        template: '<ng-content></ng-content>',
        host: {
            '[class.mdl-expansion-panel__content]': 'true',
            '[@isExpanded]': 'isExpanded'
        },
        animations: [
            trigger('isExpanded', [
                state('true', style({ height: '*' })),
                state('false', style({ height: '0px' })),
                transition('* => *', animate('250ms ease-in'))
            ])
        ]
    })
], MdlExpansionPanelContentComponent);
export { MdlExpansionPanelContentComponent };
var MdlExpansionPanelBodyComponent = (function () {
    function MdlExpansionPanelBodyComponent() {
    }
    return MdlExpansionPanelBodyComponent;
}());
MdlExpansionPanelBodyComponent = __decorate([
    Component({
        selector: 'mdl-expansion-panel-body',
        template: '<ng-content></ng-content>',
        host: {
            '[class.mdl-expansion-panel__content--body]': 'true'
        }
    })
], MdlExpansionPanelBodyComponent);
export { MdlExpansionPanelBodyComponent };
var MdlExpansionPanelFooterComponent = (function () {
    function MdlExpansionPanelFooterComponent() {
    }
    return MdlExpansionPanelFooterComponent;
}());
MdlExpansionPanelFooterComponent = __decorate([
    Component({
        selector: 'mdl-expansion-panel-footer',
        template: '<ng-content></ng-content>',
        host: {
            '[class.mdl-expansion-panel__content--footer]': 'true'
        }
    })
], MdlExpansionPanelFooterComponent);
export { MdlExpansionPanelFooterComponent };
var MdlExpansionPanelComponent = (function () {
    function MdlExpansionPanelComponent() {
        this.onChange = new EventEmitter();
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
    ContentChild(MdlExpansionPanelHeaderComponent),
    __metadata("design:type", MdlExpansionPanelHeaderComponent)
], MdlExpansionPanelComponent.prototype, "header", void 0);
__decorate([
    ContentChild(MdlExpansionPanelContentComponent),
    __metadata("design:type", MdlExpansionPanelContentComponent)
], MdlExpansionPanelComponent.prototype, "content", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], MdlExpansionPanelComponent.prototype, "onChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MdlExpansionPanelComponent.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], MdlExpansionPanelComponent.prototype, "expanded", null);
__decorate([
    HostListener('keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MdlExpansionPanelComponent.prototype, "onKeyUp", null);
MdlExpansionPanelComponent = __decorate([
    Component({
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
export { MdlExpansionPanelComponent };
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
    ContentChildren(MdlExpansionPanelComponent),
    __metadata("design:type", QueryList)
], MdlExpansionPanelGroupComponent.prototype, "panels", void 0);
MdlExpansionPanelGroupComponent = __decorate([
    Component({
        selector: 'mdl-expansion-panel-group',
        template: '<ng-content></ng-content>',
        host: {
            '[class.mdl-expansion-panel-group]': 'true'
        }
    })
], MdlExpansionPanelGroupComponent);
export { MdlExpansionPanelGroupComponent };
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
    NgModule({
        imports: [CommonModule],
        exports: MDL_EXPANSION_PANEL_DIRECTIVES,
        declarations: MDL_EXPANSION_PANEL_DIRECTIVES,
    })
], MdlExpansionPanelModule);
export { MdlExpansionPanelModule };
var MdlExpansionPanelModule_1;

//# sourceMappingURL=expansion-panel.component.js.map
