import {
  isNullOrUndefined
} from "./chunk-6H7AOYCU.js";
import {
  CommonModule,
  NgClass,
  formatCurrency
} from "./chunk-T7ZENNNQ.js";
import {
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-JFHDN3YU.js";

// src/app/features/app-store/utils/fee.utils.ts
function getFeeLabel(feeModel, translateService) {
  if (isNullOrUndefined(feeModel) || isNullOrUndefined(feeModel.amount) || feeModel.amount <= 0) {
    return translateService.instant("ADMIN.APP_STORE.FEE.FREE");
  }
  const amount = formatCurrency(feeModel.amount, "en-ZA", "R", "ZAR");
  const key = feeModel.type === "perInstallation" ? "ADMIN.APP_STORE.FEE.PER_INSTALL" : "ADMIN.APP_STORE.FEE.PER_ACTIVE_DEVICE";
  return translateService.instant(key, { amount });
}

// src/app/features/app-store/components/app-visibility-badge/app-visibility-badge.component.ts
function AppVisibilityBadgeComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 1);
  }
}
function AppVisibilityBadgeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 0);
    \u0275\u0275conditionalCreate(1, AppVisibilityBadgeComponent_Conditional_0_Conditional_1_Template, 1, 0, "i", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.badgeClass());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.visibility() === "unlisted" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.label(), " ");
  }
}
var AppVisibilityBadgeComponent = class _AppVisibilityBadgeComponent {
  visibility = input.required(...ngDevMode ? [{ debugName: "visibility" }] : (
    /* istanbul ignore next */
    []
  ));
  showBadge = computed(() => this.visibility() !== "global", ...ngDevMode ? [{ debugName: "showBadge" }] : (
    /* istanbul ignore next */
    []
  ));
  label = computed(() => {
    switch (this.visibility()) {
      case "ourOperations":
        return "Our Operations";
      case "unlisted":
        return "Unlisted";
      default:
        return null;
    }
  }, ...ngDevMode ? [{ debugName: "label" }] : (
    /* istanbul ignore next */
    []
  ));
  badgeClass = computed(() => {
    switch (this.visibility()) {
      case "ourOperations":
        return "visibility-our-operations";
      case "unlisted":
        return "visibility-unlisted";
      default:
        return null;
    }
  }, ...ngDevMode ? [{ debugName: "badgeClass" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function AppVisibilityBadgeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppVisibilityBadgeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppVisibilityBadgeComponent, selectors: [["app-visibility-badge"]], inputs: { visibility: [1, "visibility"] }, decls: 1, vars: 1, consts: [[1, "px-2", "py-0.5", "rounded-full", "text-[10px]", "font-medium", "uppercase", "tracking-wider", 3, "ngClass"], [1, "pi", "pi-lock", "mr-1", "text-[9px]"]], template: function AppVisibilityBadgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AppVisibilityBadgeComponent_Conditional_0_Template, 3, 3, "span", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.showBadge() ? 0 : -1);
    }
  }, dependencies: [CommonModule, NgClass], styles: ["\n.visibility-our-operations[_ngcontent-%COMP%] {\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(253 230 138 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 251 235 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(180 83 9 / var(--tw-text-opacity, 1));\n}\n.visibility-unlisted[_ngcontent-%COMP%] {\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: color-mix(in srgb, var(--p-surface-200) calc(100% * var(--tw-border-opacity, 1)), transparent);\n  --tw-bg-opacity: 1;\n  background-color: color-mix(in srgb, var(--p-surface-50) calc(100% * var(--tw-bg-opacity, 1)), transparent);\n  --tw-text-opacity: 1;\n  color: color-mix(in srgb, var(--p-surface-500) calc(100% * var(--tw-text-opacity, 1)), transparent);\n}\n/*# sourceMappingURL=app-visibility-badge.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppVisibilityBadgeComponent, [{
    type: Component,
    args: [{ selector: "app-visibility-badge", standalone: true, imports: [CommonModule], template: `@if (showBadge()) {
  <span class="px-2 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider"
        [ngClass]="badgeClass()">
    @if (visibility() === 'unlisted') {
      <i class="pi pi-lock mr-1 text-[9px]"></i>
    }
    {{ label() }}
  </span>
}
`, styles: ["/* src/app/features/app-store/components/app-visibility-badge/app-visibility-badge.component.scss */\n.visibility-our-operations {\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(253 230 138 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 251 235 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(180 83 9 / var(--tw-text-opacity, 1));\n}\n.visibility-unlisted {\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: color-mix(in srgb, var(--p-surface-200) calc(100% * var(--tw-border-opacity, 1)), transparent);\n  --tw-bg-opacity: 1;\n  background-color: color-mix(in srgb, var(--p-surface-50) calc(100% * var(--tw-bg-opacity, 1)), transparent);\n  --tw-text-opacity: 1;\n  color: color-mix(in srgb, var(--p-surface-500) calc(100% * var(--tw-text-opacity, 1)), transparent);\n}\n/*# sourceMappingURL=app-visibility-badge.component.css.map */\n"] }]
  }], null, { visibility: [{ type: Input, args: [{ isSignal: true, alias: "visibility", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppVisibilityBadgeComponent, { className: "AppVisibilityBadgeComponent", filePath: "src/app/features/app-store/components/app-visibility-badge/app-visibility-badge.component.ts", lineNumber: 12 });
})();

// src/app/features/app-store/models/app-store-permissions.constants.ts
var ACTION_EXPANSION = {
  list: ["list", "get"],
  get: ["list", "get"],
  create: ["list", "get", "create", "update"],
  update: ["list", "get", "update"],
  migrate: ["list", "get", "update"],
  run: ["list", "get", "run"],
  schedule: ["list", "get", "schedule"],
  modify: ["list", "get", "update"],
  delete: ["list", "get", "delete"]
};
var TARGETS_BY_SCOPE = {
  system: [
    "assettagtype",
    "distributor",
    "assettype",
    "dashboard",
    "dashboardtemplate",
    "device",
    "deviceconfigprofile",
    "deviceprovider",
    "deviceprovidertype",
    "devicetype",
    "domaininfo",
    "emailprovider",
    "emailprovidertype",
    "fuelcard",
    "geolockprofile",
    "mapset",
    "policy",
    "policystatement",
    "reportdefinition",
    "smsgatewayprovidertype",
    "theme",
    "user",
    "userrole"
  ],
  distributor: [
    "dashboard",
    "dashboardtemplate",
    "vendor",
    "device",
    "deviceconfigprofile",
    "emailprovider",
    "geolockprofile",
    "policy",
    "policystatement",
    "roadprofile",
    "theme",
    "user",
    "userrole"
  ],
  vendor: [
    "companygroup",
    "dashboard",
    "dashboardtemplate",
    "client",
    "device",
    "deviceconfigprofile",
    "emailprovider",
    "exporttask",
    "geolockprofile",
    "iotype",
    "label",
    "overspeedprofile",
    "policy",
    "policystatement",
    "roadprofile",
    "smsgateway",
    "theme",
    "user",
    "userrole"
  ],
  client: [
    "alert",
    "asset",
    "assetcategory",
    "assetgroup",
    "assetratingprofile",
    "assetstateprofile",
    "assettag",
    "costcentre",
    "dashboard",
    "dashboardtemplate",
    "device",
    "deviceconfigprofile",
    "emailprovider",
    "geolockprofile",
    "iotype",
    "overspeedprofile",
    "policy",
    "policystatement",
    "reminder",
    "reporttemplate",
    "roadprofile",
    "scheduledreport",
    "simcard",
    "smsgateway",
    "theme",
    "user",
    "userrole",
    "zone",
    "zonegroup"
  ]
};
var TARGET_ACTIONS = {
  // Read-only entities
  assettype: ["list", "get"],
  assetcategory: ["list", "get"],
  devicetype: ["list", "get"],
  deviceprovidertype: ["list", "get"],
  emailprovidertype: ["list", "get"],
  smsgatewayprovidertype: ["list", "get"],
  domaininfo: ["list", "get"],
  // Runnable / schedulable
  scheduledreport: ["list", "get", "create", "update", "delete", "run", "schedule"],
  exporttask: ["list", "get", "create", "run"],
  // Standard CRUD (default — explicit for clarity)
  alert: ["list", "get", "create", "update", "delete"],
  asset: ["list", "get", "create", "update", "delete"],
  assetgroup: ["list", "get", "create", "update", "delete"],
  assetratingprofile: ["list", "get", "create", "update", "delete"],
  assetstateprofile: ["list", "get", "create", "update", "delete"],
  assettag: ["list", "get", "create", "update", "delete"],
  assettagtype: ["list", "get", "create", "update", "delete"],
  client: ["list", "get", "create", "update", "delete"],
  companygroup: ["list", "get", "create", "update", "delete"],
  costcentre: ["list", "get", "create", "update", "delete"],
  dashboard: ["list", "get", "create", "update", "delete"],
  dashboardtemplate: ["list", "get", "create", "update", "delete"],
  device: ["list", "get", "create", "update", "delete"],
  deviceconfigprofile: ["list", "get", "create", "update", "delete"],
  deviceprovider: ["list", "get", "create", "update", "delete"],
  distributor: ["list", "get", "create", "update", "delete"],
  emailprovider: ["list", "get", "create", "update", "delete"],
  fuelcard: ["list", "get", "create", "update", "delete"],
  geolockprofile: ["list", "get", "create", "update", "delete"],
  iotype: ["list", "get", "create", "update", "delete"],
  label: ["list", "get", "create", "update", "delete"],
  mapset: ["list", "get", "create", "update", "delete"],
  overspeedprofile: ["list", "get", "create", "update", "delete"],
  policy: ["list", "get", "create", "update", "delete"],
  policystatement: ["list", "get", "create", "update", "delete"],
  reminder: ["list", "get", "create", "update", "delete"],
  reportdefinition: ["list", "get", "create", "update", "delete"],
  reporttemplate: ["list", "get", "create", "update", "delete"],
  roadprofile: ["list", "get", "create", "update", "delete"],
  simcard: ["list", "get", "create", "update", "delete"],
  smsgateway: ["list", "get", "create", "update", "delete"],
  theme: ["list", "get", "create", "update", "delete"],
  user: ["list", "get", "create", "update", "delete"],
  userrole: ["list", "get", "create", "update", "delete"],
  vendor: ["list", "get", "create", "update", "delete"],
  zone: ["list", "get", "create", "update", "delete"],
  zonegroup: ["list", "get", "create", "update", "delete"]
};
var TARGET_LABELS = {
  alert: "Alert",
  asset: "Asset",
  assetcategory: "Asset Category",
  assetgroup: "Asset Group",
  assetratingprofile: "Asset Rating Profile",
  assetstateprofile: "Asset State Profile",
  assettag: "Asset Tag",
  assettagtype: "Asset Tag Type",
  assettype: "Asset Type",
  client: "Client",
  companygroup: "Company Group",
  costcentre: "Cost Centre",
  dashboard: "Dashboard",
  dashboardtemplate: "Dashboard Template",
  device: "Device",
  deviceconfigprofile: "Device Config Profile",
  deviceprovider: "Device Provider",
  deviceprovidertype: "Device Provider Type",
  devicetype: "Device Type",
  distributor: "Distributor",
  domaininfo: "Domain Info",
  emailprovider: "Email Provider",
  emailprovidertype: "Email Provider Type",
  exporttask: "Export Task",
  fuelcard: "Fuel Card",
  geolockprofile: "Geo-lock Profile",
  iotype: "IO Type",
  label: "Label",
  mapset: "Map Set",
  overspeedprofile: "Overspeed Profile",
  policy: "Policy",
  policystatement: "Policy Statement",
  reminder: "Reminder",
  reportdefinition: "Report Definition",
  reporttemplate: "Report Template",
  roadprofile: "Road Profile",
  scheduledreport: "Scheduled Report",
  simcard: "SIM Card",
  smsgateway: "SMS Gateway",
  smsgatewayprovidertype: "SMS Gateway Provider Type",
  theme: "Theme",
  user: "User",
  userrole: "User Role",
  vendor: "Vendor",
  zone: "Zone",
  zonegroup: "Zone Group"
};

export {
  getFeeLabel,
  ACTION_EXPANSION,
  TARGETS_BY_SCOPE,
  TARGET_ACTIONS,
  TARGET_LABELS,
  AppVisibilityBadgeComponent
};
//# sourceMappingURL=chunk-KR6I554L.js.map
