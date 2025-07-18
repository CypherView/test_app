import {
  CustomizeDistributorComponent,
  DistributorAddressComponent,
  DistributorDetailsComponent,
  DistributorExternalAuthenticationComponent,
  DistributorNotificationSettingsComponent,
  DistributorSettingsComponent,
  DistributorSslCertificatesComponent,
  Divider,
  DividerModule
} from "./chunk-S4J3BTVO.js";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionModule,
  AccordionPanel
} from "./chunk-GYDTB4QV.js";
import "./chunk-CGA5RVXV.js";
import {
  takeUntilDestroyed
} from "./chunk-2BEMARFJ.js";
import "./chunk-FXSZ45B7.js";
import "./chunk-G6AKSBPY.js";
import "./chunk-VIPD3CDA.js";
import "./chunk-3PVKXQWG.js";
import {
  ActivatedRoute,
  CommonModule,
  RouterModule
} from "./chunk-FRWWEFIZ.js";
import {
  Component,
  DestroyRef,
  NgModule,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-FCYO5PMO.js";
import "./chunk-KWSTWQNB.js";

// src/app/features/administration/components/distributors/distributor-details/distributor-details-container/distributor-details-container.component.ts
var DistributorDetailsContainerComponent = class _DistributorDetailsContainerComponent {
  route = inject(ActivatedRoute);
  destroyRef = inject(DestroyRef);
  distributor = signal(null);
  ngOnInit() {
    this.route.parent?.parent?.data.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (data) => this.distributor.set(data["distributor"])
    });
  }
  static \u0275fac = function DistributorDetailsContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DistributorDetailsContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DistributorDetailsContainerComponent, selectors: [["app-distributor-details-container"]], decls: 28, vars: 7, consts: [["value", "information"], [1, "uppercase"], [3, "entity"], ["value", "settings"], ["value", "statistics"]], template: function DistributorDetailsContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p-accordion", 0)(1, "p-accordion-panel", 0)(2, "p-accordion-header")(3, "span", 1);
      \u0275\u0275text(4, "Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "p-accordion-content");
      \u0275\u0275element(6, "app-distributor-details", 2)(7, "p-divider")(8, "app-customize-distributor", 2)(9, "p-divider")(10, "app-distributor-address", 2)(11, "p-divider")(12, "app-distributor-ssl-certificates", 2);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "p-accordion-panel", 3)(14, "p-accordion-header")(15, "span", 1);
      \u0275\u0275text(16, "Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "p-accordion-content");
      \u0275\u0275element(18, "app-distributor-settings", 2)(19, "p-divider")(20, "app-distributor-notification-settings", 2)(21, "p-divider")(22, "app-distributor-external-authentication", 2);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "p-accordion-panel", 4)(24, "p-accordion-header")(25, "span", 1);
      \u0275\u0275text(26, "Statistics");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(27, "p-accordion-content");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("entity", ctx.distributor());
      \u0275\u0275advance(2);
      \u0275\u0275property("entity", ctx.distributor());
      \u0275\u0275advance(2);
      \u0275\u0275property("entity", ctx.distributor());
      \u0275\u0275advance(2);
      \u0275\u0275property("entity", ctx.distributor());
      \u0275\u0275advance(6);
      \u0275\u0275property("entity", ctx.distributor());
      \u0275\u0275advance(2);
      \u0275\u0275property("entity", ctx.distributor());
      \u0275\u0275advance(2);
      \u0275\u0275property("entity", ctx.distributor());
    }
  }, dependencies: [
    AccordionModule,
    Accordion,
    AccordionPanel,
    AccordionHeader,
    AccordionContent,
    DividerModule,
    Divider,
    // Information
    DistributorDetailsComponent,
    CustomizeDistributorComponent,
    DistributorAddressComponent,
    DistributorSslCertificatesComponent,
    //Settings
    DistributorSettingsComponent,
    DistributorNotificationSettingsComponent,
    DistributorExternalAuthenticationComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DistributorDetailsContainerComponent, [{
    type: Component,
    args: [{ selector: "app-distributor-details-container", imports: [
      AccordionModule,
      DividerModule,
      // Information
      DistributorDetailsComponent,
      CustomizeDistributorComponent,
      DistributorAddressComponent,
      DistributorSslCertificatesComponent,
      //Settings
      DistributorSettingsComponent,
      DistributorNotificationSettingsComponent,
      DistributorExternalAuthenticationComponent
    ], template: '<p-accordion value="information">\n  <p-accordion-panel value="information">\n    <p-accordion-header>\n      <span class="uppercase">Information</span>\n    </p-accordion-header>\n\n    <p-accordion-content>\n      <app-distributor-details [entity]="distributor()" />\n      <p-divider />\n      <app-customize-distributor [entity]="distributor()" />\n      <p-divider />\n      <app-distributor-address [entity]="distributor()" />\n      <p-divider />\n      <app-distributor-ssl-certificates\n        [entity]="distributor()"\n      /> </p-accordion-content\n  ></p-accordion-panel>\n\n  <p-accordion-panel value="settings">\n    <p-accordion-header>\n      <span class="uppercase">Settings</span>\n    </p-accordion-header>\n\n    <p-accordion-content>\n      <app-distributor-settings [entity]="distributor()" />\n      <p-divider />\n      <app-distributor-notification-settings [entity]="distributor()" />\n      <p-divider />\n      <app-distributor-external-authentication [entity]="distributor()" />\n    </p-accordion-content>\n  </p-accordion-panel>\n\n  <p-accordion-panel value="statistics">\n    <p-accordion-header>\n      <span class="uppercase">Statistics</span>\n    </p-accordion-header>\n\n    <p-accordion-content> </p-accordion-content> </p-accordion-panel\n></p-accordion>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DistributorDetailsContainerComponent, { className: "DistributorDetailsContainerComponent", filePath: "src/app/features/administration/components/distributors/distributor-details/distributor-details-container/distributor-details-container.component.ts", lineNumber: 38 });
})();

// src/app/features/administration/components/distributors/distributor-details/distributor-details-routing.module.ts
var routes = [
  {
    path: "",
    component: DistributorDetailsContainerComponent
  }
];
var DistributorDetailsRoutingModule = class _DistributorDetailsRoutingModule {
  static \u0275fac = function DistributorDetailsRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DistributorDetailsRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DistributorDetailsRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DistributorDetailsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/features/administration/components/distributors/distributor-details/distributor-details.module.ts
var DistributorDetailsModule = class _DistributorDetailsModule {
  static \u0275fac = function DistributorDetailsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DistributorDetailsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DistributorDetailsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, DistributorDetailsRoutingModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DistributorDetailsModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [CommonModule, DistributorDetailsRoutingModule]
    }]
  }], null, null);
})();
export {
  DistributorDetailsModule
};
//# sourceMappingURL=chunk-3OQAAI5T.js.map
