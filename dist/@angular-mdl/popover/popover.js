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
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, HostBinding, HostListener, Inject, Injectable, Input, NgModule, Output, ViewEncapsulation, } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
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
    Injectable(),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object])
], MdlPopoverRegistry);
export { MdlPopoverRegistry };
var MdlPopoverComponent = (function () {
    function MdlPopoverComponent(changeDetectionRef, elementRef, popoverRegistry) {
        this.changeDetectionRef = changeDetectionRef;
        this.elementRef = elementRef;
        this.popoverRegistry = popoverRegistry;
        this.hideOnClick = false;
        this.onShow = new EventEmitter();
        this.onHide = new EventEmitter();
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
    Input('hide-on-click'),
    __metadata("design:type", Boolean)
], MdlPopoverComponent.prototype, "hideOnClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], MdlPopoverComponent.prototype, "onShow", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], MdlPopoverComponent.prototype, "onHide", void 0);
__decorate([
    HostBinding('class.is-visible'),
    __metadata("design:type", Object)
], MdlPopoverComponent.prototype, "isVisible", void 0);
__decorate([
    HostBinding('class.direction-up'),
    __metadata("design:type", Object)
], MdlPopoverComponent.prototype, "directionUp", void 0);
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], MdlPopoverComponent.prototype, "onClick", null);
MdlPopoverComponent = __decorate([
    Component({selector: 'mdl-popover',
        host: {
            '[class.mdl-popover]': 'true'
        },
        template: "<ng-content></ng-content> ",
        encapsulation: ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef,
        ElementRef,
        MdlPopoverRegistry])
], MdlPopoverComponent);
export { MdlPopoverComponent };
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
    NgModule({
        imports: [],
        exports: [MdlPopoverComponent],
        declarations: [MdlPopoverComponent],
        providers: [MdlPopoverRegistry],
    })
], MdlPopoverModule);
export { MdlPopoverModule };
var MdlPopoverModule_1;

//# sourceMappingURL=popover.js.map
