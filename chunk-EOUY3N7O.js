import {
  WizardComponent
} from "./chunk-ZHMW4M7P.js";
import {
  AppStoreService
} from "./chunk-4OTOUT7F.js";
import {
  Card,
  CardModule
} from "./chunk-LVNNH5BK.js";
import "./chunk-UNBXKGC2.js";
import {
  Textarea,
  TextareaModule
} from "./chunk-6IZKR6AN.js";
import {
  Checkbox,
  CheckboxModule
} from "./chunk-LI62R7PU.js";
import {
  Select,
  SelectModule
} from "./chunk-IYMFWGPL.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  InputText,
  InputTextModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-INFBSQIL.js";
import {
  Button,
  ButtonModule
} from "./chunk-4RWFSH5R.js";
import {
  PrimeTemplate
} from "./chunk-I44PV4DK.js";
import {
  ActivatedRoute,
  CommonModule,
  Router,
  RouterModule,
  UserSessionService,
  isDefined,
  takeUntilDestroyed,
  toSignal
} from "./chunk-N4VRQVSD.js";
import {
  Component,
  DestroyRef,
  ViewChild,
  catchError,
  computed,
  finalize,
  inject,
  of,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-J5TUQDPD.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/features/app-store/models/app-store.models.ts
var AVAILABLE_SCREENS = [
  { id: "TRIP_DETAILS", name: "Trip Details Screen" },
  { id: "VEHICLE_ACTIVITY", name: "Vehicle Activity Screen" }
];
var PRICING_MODELS = [
  { label: "Free", value: "FREE" },
  { label: "Subscription", value: "SUBSCRIPTION" },
  { label: "One Time Purchase", value: "ONE_TIME" }
];
var CURRENCIES = [
  { label: "ZAR", value: "ZAR" },
  { label: "USD", value: "USD" },
  { label: "EUR", value: "EUR" }
];

// src/app/features/app-store/pages/app-create-wizard/app-create-wizard.component.ts
var _c0 = ["basicInfoStep"];
var _c1 = ["integrationPointsStep"];
var _c2 = ["endpointStep"];
var _c3 = ["pricingStep"];
var _c4 = ["reviewStep"];
var _c5 = () => ({ standalone: true });
var _forTrack0 = ($index, $item) => $item.id;
function AppCreateWizardComponent_Conditional_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275elementStart(2, "div", 11)(3, "h3", 12);
    \u0275\u0275text(4, "Submitted for review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 13);
    \u0275\u0275text(6, " Your app has been sent for approval. We'll notify you when the review is complete. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 14)(8, "p-button", 15);
    \u0275\u0275listener("onClick", function AppCreateWizardComponent_Conditional_1_ng_template_2_Template_p_button_onClick_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToAppDetail(ctx_r2.submittedApp().id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p-button", 16);
    \u0275\u0275listener("onClick", function AppCreateWizardComponent_Conditional_1_ng_template_2_Template_p_button_onClick_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToMarketplace());
    });
    \u0275\u0275elementEnd()()()();
  }
}
function AppCreateWizardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "p-card", 7);
    \u0275\u0275template(2, AppCreateWizardComponent_Conditional_1_ng_template_2_Template, 10, 0, "ng-template", 8);
    \u0275\u0275elementEnd()();
  }
}
function AppCreateWizardComponent_ng_template_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 22);
    \u0275\u0275text(1, "App name is required");
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_2_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Short description is required ");
  }
}
function AppCreateWizardComponent_ng_template_2_Conditional_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Maximum 100 characters allowed ");
  }
}
function AppCreateWizardComponent_ng_template_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 22);
    \u0275\u0275conditionalCreate(1, AppCreateWizardComponent_ng_template_2_Conditional_14_Conditional_1_Template, 1, 0)(2, AppCreateWizardComponent_ng_template_2_Conditional_14_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_8_0 = ctx_r2.appForm.get("basicInfo.shortDescription")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors["required"]) ? 1 : 2);
  }
}
function AppCreateWizardComponent_ng_template_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 22);
    \u0275\u0275text(1, "Full description is required");
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h2", 17);
    \u0275\u0275text(2, "Basic Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 18)(4, "div", 19)(5, "div")(6, "label", 20);
    \u0275\u0275text(7, "App Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 21);
    \u0275\u0275conditionalCreate(9, AppCreateWizardComponent_ng_template_2_Conditional_9_Template, 2, 0, "small", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div")(11, "label", 23);
    \u0275\u0275text(12, "Short Description *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 24);
    \u0275\u0275conditionalCreate(14, AppCreateWizardComponent_ng_template_2_Conditional_14_Template, 3, 1, "small", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div")(16, "label", 25);
    \u0275\u0275text(17, "Full Description *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "textarea", 26);
    \u0275\u0275conditionalCreate(19, AppCreateWizardComponent_ng_template_2_Conditional_19_Template, 2, 0, "small", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div")(21, "label", 27);
    \u0275\u0275text(22, "Icon URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 28);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r2.appForm);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("ng-invalid", ((tmp_8_0 = ctx_r2.appForm.get("basicInfo.name")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r2.appForm.get("basicInfo.name")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_9_0 = ctx_r2.appForm.get("basicInfo.name")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r2.appForm.get("basicInfo.name")) == null ? null : tmp_9_0.touched) ? 9 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("ng-invalid", ((tmp_10_0 = ctx_r2.appForm.get("basicInfo.shortDescription")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r2.appForm.get("basicInfo.shortDescription")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_11_0 = ctx_r2.appForm.get("basicInfo.shortDescription")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx_r2.appForm.get("basicInfo.shortDescription")) == null ? null : tmp_11_0.touched) ? 14 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("ng-invalid", ((tmp_12_0 = ctx_r2.appForm.get("basicInfo.description")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r2.appForm.get("basicInfo.description")) == null ? null : tmp_12_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_13_0 = ctx_r2.appForm.get("basicInfo.description")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r2.appForm.get("basicInfo.description")) == null ? null : tmp_13_0.touched) ? 19 : -1);
  }
}
function AppCreateWizardComponent_ng_template_4_For_8_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "p-checkbox", 34);
    \u0275\u0275listener("onChange", function AppCreateWizardComponent_ng_template_4_For_8_ng_template_1_Template_p_checkbox_onChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const screen_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleIntegrationPoint(screen_r5.id, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const screen_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("inputId", screen_r5.id)("binary", true)("ngModel", ctx_r2.isScreenSelected(screen_r5.id))("ngModelOptions", \u0275\u0275pureFunction0(6, _c5));
    \u0275\u0275advance();
    \u0275\u0275property("for", screen_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(screen_r5.name);
  }
}
function AppCreateWizardComponent_ng_template_4_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-card");
    \u0275\u0275template(1, AppCreateWizardComponent_ng_template_4_For_8_ng_template_1_Template, 4, 7, "ng-template", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const screen_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.isScreenSelected(screen_r5.id) ? "border-primary" : "");
  }
}
function AppCreateWizardComponent_ng_template_4_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 22);
    \u0275\u0275text(1, "Please select at least one integration point.");
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h2", 29);
    \u0275\u0275text(2, "Integration Points");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 30);
    \u0275\u0275text(4, " Where will your app integrate with CypherView? Select at least one. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "form", 18)(6, "div", 31);
    \u0275\u0275repeaterCreate(7, AppCreateWizardComponent_ng_template_4_For_8_Template, 2, 2, "p-card", 32, _forTrack0);
    \u0275\u0275conditionalCreate(9, AppCreateWizardComponent_ng_template_4_Conditional_9_Template, 2, 0, "small", 22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r2.appForm);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.availableScreens);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.integrationPoints.invalid && ctx_r2.integrationPoints.touched ? 9 : -1);
  }
}
function AppCreateWizardComponent_ng_template_6_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Base URL is required ");
  }
}
function AppCreateWizardComponent_ng_template_6_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Must be a valid HTTPS URL ");
  }
}
function AppCreateWizardComponent_ng_template_6_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 22);
    \u0275\u0275conditionalCreate(1, AppCreateWizardComponent_ng_template_6_Conditional_9_Conditional_1_Template, 1, 0)(2, AppCreateWizardComponent_ng_template_6_Conditional_9_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_8_0 = ctx_r2.appForm.get("endpoint.baseUrl")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors["required"]) ? 1 : 2);
  }
}
function AppCreateWizardComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h2", 17);
    \u0275\u0275text(2, "Endpoint Configuration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 18)(4, "div", 36)(5, "div")(6, "label", 37);
    \u0275\u0275text(7, "Base URL *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 38);
    \u0275\u0275conditionalCreate(9, AppCreateWizardComponent_ng_template_6_Conditional_9_Template, 3, 1, "small", 22);
    \u0275\u0275elementStart(10, "p", 39);
    \u0275\u0275text(11, " Must be HTTPS. This is where the iframe will point to. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "label", 40);
    \u0275\u0275text(14, "Health Check URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 41);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_9_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r2.appForm);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("ng-invalid", ((tmp_8_0 = ctx_r2.appForm.get("endpoint.baseUrl")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r2.appForm.get("endpoint.baseUrl")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_9_0 = ctx_r2.appForm.get("endpoint.baseUrl")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r2.appForm.get("endpoint.baseUrl")) == null ? null : tmp_9_0.touched) ? 9 : -1);
  }
}
function AppCreateWizardComponent_ng_template_8_Conditional_9_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 22);
    \u0275\u0275text(1, "Price must be greater than 0 for paid apps.");
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_8_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div")(2, "label", 46);
    \u0275\u0275text(3, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "label", 48);
    \u0275\u0275text(7, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "p-select", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, AppCreateWizardComponent_ng_template_8_Conditional_9_Conditional_9_Template, 2, 0, "small", 22);
    \u0275\u0275elementStart(10, "div")(11, "label", 50);
    \u0275\u0275text(12, "Trial Days");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_10_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("ng-invalid", ((tmp_8_0 = ctx_r2.appForm.get("pricing.price")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r2.appForm.get("pricing.price")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r2.currencies);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_10_0 = ctx_r2.appForm.get("pricing.price")) == null ? null : tmp_10_0.value) <= 0 ? 9 : -1);
  }
}
function AppCreateWizardComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h2", 17);
    \u0275\u0275text(2, "Pricing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 18)(4, "div", 42)(5, "div")(6, "label", 43);
    \u0275\u0275text(7, "Model");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "p-select", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, AppCreateWizardComponent_ng_template_8_Conditional_9_Template, 14, 4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_9_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r2.appForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("options", ctx_r2.pricingModels);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_9_0 = ctx_r2.appForm.get("pricing.model")) == null ? null : tmp_9_0.value) !== "FREE" ? 9 : -1);
  }
}
function AppCreateWizardComponent_ng_template_10_ng_template_5_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_9_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", (tmp_9_0 = ctx_r2.formValue()) == null ? null : tmp_9_0.pricing == null ? null : tmp_9_0.pricing.currency, " ", (tmp_9_0 = ctx_r2.formValue()) == null ? null : tmp_9_0.pricing == null ? null : tmp_9_0.pricing.price);
  }
}
function AppCreateWizardComponent_ng_template_10_ng_template_5_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const point_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", point_r7.screenId, " ");
  }
}
function AppCreateWizardComponent_ng_template_10_ng_template_5_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1, "None selected");
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_10_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 62)(2, "div")(3, "span", 63);
    \u0275\u0275text(4, "App Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 64);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "span", 63);
    \u0275\u0275text(9, "Short Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 65);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "span", 63);
    \u0275\u0275text(14, "Base URL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "code", 66);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 62)(18, "div")(19, "span", 63);
    \u0275\u0275text(20, "Pricing Model");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 67);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, AppCreateWizardComponent_ng_template_10_ng_template_5_Conditional_23_Template, 2, 2, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div")(25, "span", 63);
    \u0275\u0275text(26, "Integrations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 69);
    \u0275\u0275repeaterCreate(28, AppCreateWizardComponent_ng_template_10_ng_template_5_For_29_Template, 2, 1, "span", 70, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(30, AppCreateWizardComponent_ng_template_10_ng_template_5_Conditional_30_Template, 2, 0, "span", 71);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((tmp_8_0 = ctx_r2.formValue()) == null ? null : tmp_8_0.basicInfo == null ? null : tmp_8_0.basicInfo.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_9_0 = ctx_r2.formValue()) == null ? null : tmp_9_0.basicInfo == null ? null : tmp_9_0.basicInfo.shortDescription);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_10_0 = ctx_r2.formValue()) == null ? null : tmp_10_0.endpoint == null ? null : tmp_10_0.endpoint.baseUrl);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", (tmp_11_0 = ctx_r2.formValue()) == null ? null : tmp_11_0.pricing == null ? null : tmp_11_0.pricing.model, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_12_0 = ctx_r2.formValue()) == null ? null : tmp_12_0.pricing == null ? null : tmp_12_0.pricing.model) !== "FREE" ? 23 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275repeater((tmp_13_0 = ctx_r2.formValue()) == null ? null : tmp_13_0.integration == null ? null : tmp_13_0.integration.points);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!((tmp_14_0 = ctx_r2.formValue()) == null ? null : tmp_14_0.integration == null ? null : tmp_14_0.integration.points == null ? null : tmp_14_0.integration.points.length) ? 30 : -1);
  }
}
function AppCreateWizardComponent_ng_template_10_ng_template_7_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Please ensure all changes are correct before updating your app. ");
  }
}
function AppCreateWizardComponent_ng_template_10_ng_template_7_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Your app will be submitted to the review team. This usually takes 24-48 hours. ");
  }
}
function AppCreateWizardComponent_ng_template_10_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275element(1, "i", 73);
    \u0275\u0275elementStart(2, "div")(3, "p", 74);
    \u0275\u0275text(4, "Final Verification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 75);
    \u0275\u0275conditionalCreate(6, AppCreateWizardComponent_ng_template_10_ng_template_7_Conditional_6_Template, 1, 0)(7, AppCreateWizardComponent_ng_template_10_ng_template_7_Conditional_7_Template, 1, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r2.isEditMode() ? 6 : 7);
  }
}
function AppCreateWizardComponent_ng_template_10_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275element(1, "i", 76);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.submissionError());
  }
}
function AppCreateWizardComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "h2", 17);
    \u0275\u0275text(2, "Review & Submit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p-card", 52);
    \u0275\u0275template(5, AppCreateWizardComponent_ng_template_10_ng_template_5_Template, 31, 6, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p-card", 53);
    \u0275\u0275template(7, AppCreateWizardComponent_ng_template_10_ng_template_7_Template, 8, 1, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, AppCreateWizardComponent_ng_template_10_Conditional_8_Template, 4, 1, "div", 54);
    \u0275\u0275elementStart(9, "div", 55)(10, "p-button", 56);
    \u0275\u0275listener("onClick", function AppCreateWizardComponent_ng_template_10_Template_p_button_onClick_10_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onWizardCancel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "div", 57);
    \u0275\u0275elementStart(12, "p-button", 58);
    \u0275\u0275listener("onClick", function AppCreateWizardComponent_ng_template_10_Template_p_button_onClick_12_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.currentStep.set(ctx_r2.prevStepValue()));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p-button", 59);
    \u0275\u0275listener("onClick", function AppCreateWizardComponent_ng_template_10_Template_p_button_onClick_13_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveDraft());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p-button", 60);
    \u0275\u0275listener("onClick", function AppCreateWizardComponent_ng_template_10_Template_p_button_onClick_14_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submitForReview());
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r2.submissionError() ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("text", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("outlined", true)("loading", ctx_r2.isSubmitting() && ctx_r2.submitAction === "draft")("disabled", !ctx_r2.appForm.valid || ctx_r2.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r2.isSubmitting() && ctx_r2.submitAction === "review")("disabled", !ctx_r2.appForm.valid || ctx_r2.isSubmitting());
  }
}
var AppCreateWizardComponent = class _AppCreateWizardComponent {
  basicInfoStep;
  integrationPointsStep;
  endpointStep;
  pricingStep;
  reviewStep;
  fb = inject(FormBuilder);
  router = inject(Router);
  route = inject(ActivatedRoute);
  appStoreService = inject(AppStoreService);
  destroyRef = inject(DestroyRef);
  userSessionService = inject(UserSessionService);
  steps = signal([], ...ngDevMode ? [{ debugName: "steps" }] : []);
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
  visible = signal(true, ...ngDevMode ? [{ debugName: "visible" }] : []);
  submissionError = signal(null, ...ngDevMode ? [{ debugName: "submissionError" }] : []);
  submittedApp = signal(null, ...ngDevMode ? [{ debugName: "submittedApp" }] : []);
  isEditMode = signal(false, ...ngDevMode ? [{ debugName: "isEditMode" }] : []);
  existingAppId = null;
  existingAppData = null;
  currentStep = signal(1, ...ngDevMode ? [{ debugName: "currentStep" }] : []);
  isLastStep = computed(() => {
    const steps = this.steps();
    return steps.length > 0 && this.currentStep() === steps.at(-1)?.value;
  }, ...ngDevMode ? [{ debugName: "isLastStep" }] : []);
  prevStepValue = computed(() => {
    const steps = this.steps();
    const currentIndex = steps.findIndex((s) => s.value === this.currentStep());
    return currentIndex > 0 ? steps[currentIndex - 1].value : 1;
  }, ...ngDevMode ? [{ debugName: "prevStepValue" }] : []);
  appForm;
  formValue;
  submitAction = null;
  availableScreens = AVAILABLE_SCREENS;
  pricingModels = PRICING_MODELS;
  currencies = CURRENCIES;
  constructor() {
    this.appForm = this.fb.group({
      basicInfo: this.fb.group({
        name: ["", Validators.required],
        shortDescription: [
          "",
          [Validators.required, Validators.maxLength(100)]
        ],
        description: ["", Validators.required],
        iconUrl: [""]
      }),
      integration: this.fb.group({
        points: this.fb.array([], Validators.required)
      }),
      endpoint: this.fb.group({
        baseUrl: ["", [Validators.required, Validators.pattern("https?://.+")]],
        healthCheckUrl: [""]
      }),
      pricing: this.fb.group({
        model: ["FREE", Validators.required],
        price: [0],
        currency: ["ZAR"],
        trialDays: [30]
      })
    });
    this.formValue = toSignal(this.appForm.valueChanges.pipe(startWith(this.appForm.value)));
    this.bootstrapEditContext();
  }
  get integrationPoints() {
    return this.appForm.get("integration.points");
  }
  toggleIntegrationPoint(screenId, event) {
    const isChecked = event.checked;
    const existingIndex = this.integrationPoints.controls.findIndex((x) => x.value.screenId === screenId);
    if (isChecked) {
      if (existingIndex === -1) {
        this.integrationPoints.push(this.fb.group({
          screenId: [screenId],
          widgetSize: ["MEDIUM"],
          position: ["RIGHT_SIDEBAR"],
          requiredData: [""]
        }));
      }
    } else if (existingIndex >= 0) {
      this.integrationPoints.removeAt(existingIndex);
    }
  }
  isScreenSelected(screenId) {
    return this.integrationPoints.controls.some((x) => x.value.screenId === screenId);
  }
  getIntegrationPointControl(screenId) {
    return this.integrationPoints.controls.find((x) => x.value.screenId === screenId);
  }
  ngAfterViewInit() {
    this.steps.set([
      {
        value: 1,
        header: "Basic Info",
        content: this.basicInfoStep,
        disableNext: true
      },
      {
        value: 2,
        header: "Integration Points",
        content: this.integrationPointsStep,
        disableNext: true
      },
      {
        value: 3,
        header: "Endpoint",
        content: this.endpointStep,
        disableNext: true
      },
      {
        value: 4,
        header: "Pricing",
        content: this.pricingStep,
        disableNext: true
      },
      {
        value: 5,
        header: "Review",
        content: this.reviewStep,
        disableNext: false,
        hideDefaultFooter: true
      }
    ]);
    this.updateStepStates();
    this.appForm.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.updateStepStates());
  }
  onWizardComplete() {
    this.submit();
  }
  onWizardCancel() {
    this.visible.set(false);
  }
  saveDraft() {
    this.submitAction = "draft";
    this.submit();
  }
  submitForReview() {
    this.submitAction = "review";
    this.submit();
  }
  submit() {
    if (!this.appForm.valid || this.isSubmitting()) {
      return;
    }
    this.submissionError.set(null);
    this.isSubmitting.set(true);
    const formValue = this.appForm.value;
    const action = this.submitAction || "draft";
    if (isDefined(this.existingAppId) && this.existingAppData) {
      this.handleEditSubmit(formValue, action);
    } else {
      this.handleCreateSubmit(formValue, action);
    }
  }
  handleEditSubmit(formValue, action) {
    const changes = {};
    if (formValue.basicInfo.name !== this.existingAppData?.name) {
      changes.name = formValue.basicInfo.name;
    }
    if (formValue.basicInfo.shortDescription !== this.existingAppData?.shortDescription) {
      changes.shortDescription = formValue.basicInfo.shortDescription;
    }
    if (formValue.basicInfo.description !== this.existingAppData?.description) {
      changes.description = formValue.basicInfo.description;
    }
    if (formValue.basicInfo.iconUrl !== this.existingAppData?.iconUrl) {
      changes.iconUrl = formValue.basicInfo.iconUrl;
    }
    if (JSON.stringify(formValue.endpoint) !== JSON.stringify(this.existingAppData?.endpoint)) {
      changes.endpoint = formValue.endpoint;
    }
    if (JSON.stringify(formValue.pricing) !== JSON.stringify(this.existingAppData?.pricing)) {
      changes.pricing = formValue.pricing;
    }
    if (JSON.stringify(formValue.integration.points) !== JSON.stringify(this.existingAppData?.integrationPoints)) {
      changes.integrationPoints = formValue.integration.points;
    }
    changes.status = action === "review" ? "PENDING_REVIEW" : "DRAFT";
    if (isDefined(this.existingAppId)) {
      this.appStoreService.updateApp(this.existingAppId, changes).pipe(tap((app) => {
        if (isDefined(app)) {
          this.submittedApp.set(app);
          this.visible.set(false);
        }
      }), catchError(() => {
        this.submissionError.set("Could not update your app. Please try again.");
        return of(null);
      }), finalize(() => {
        this.isSubmitting.set(false);
        this.submitAction = null;
      })).subscribe();
    }
  }
  handleCreateSubmit(formValue, action) {
    const user = this.userSessionService.currentUserSession();
    const payload = __spreadProps(__spreadValues({}, formValue.basicInfo), {
      iconUrl: formValue.basicInfo.iconUrl ?? "assets/default-app-icon.png",
      userId: user?.id ?? "unknown-user",
      developerName: user?.name ?? "Unknown Developer",
      integrationPoints: formValue.integration.points,
      endpoint: formValue.endpoint,
      pricing: formValue.pricing,
      categories: ["Productivity"],
      tags: []
    });
    this.appStoreService.createApp(payload).pipe(switchMap((createdApp) => {
      if (action === "review") {
        return this.appStoreService.submitForReview(createdApp.id).pipe(catchError(() => of(createdApp)));
      }
      return of(createdApp);
    }), tap((app) => {
      if (isDefined(app)) {
        this.submittedApp.set(app);
        this.visible.set(false);
      }
    }), catchError(() => {
      this.submissionError.set("Could not save your app. Please try again.");
      return of(null);
    }), finalize(() => {
      this.isSubmitting.set(false);
      this.submitAction = null;
    })).subscribe();
  }
  goToAppDetail(appId) {
    this.router.navigate(["/app-store", appId]).catch(() => {
    });
  }
  goToMarketplace() {
    this.router.navigate(["/app-store"]).catch(() => {
    });
  }
  bootstrapEditContext() {
    const navState = history.state;
    const appFromState = navState?.appToEdit;
    const appIdFromQuery = this.route.snapshot.queryParamMap.get("appId");
    if (appFromState) {
      this.enterEditMode(appFromState);
      return;
    }
    if (isDefined(appIdFromQuery)) {
      this.loadAppForEdit(appIdFromQuery);
    }
  }
  loadAppForEdit(appId) {
    this.appStoreService.getAppById(appId).pipe(tap((app) => {
      if (app) {
        this.enterEditMode(app);
      }
    }), catchError(() => {
      this.submissionError.set("Could not load the app to edit.");
      return of(null);
    }), takeUntilDestroyed(this.destroyRef)).subscribe();
  }
  enterEditMode(app) {
    this.existingAppId = app.id;
    this.existingAppData = __spreadValues({}, app);
    this.isEditMode.set(true);
    this.appForm.patchValue({
      basicInfo: {
        name: app.name,
        shortDescription: app.shortDescription,
        description: app.description,
        iconUrl: app.iconUrl
      },
      endpoint: app.endpoint,
      pricing: app.pricing
    });
    this.integrationPoints.clear();
    app.integrationPoints.forEach((point) => {
      this.integrationPoints.push(this.fb.group({
        screenId: [point.screenId],
        widgetSize: [point.widgetSize],
        position: ["RIGHT_SIDEBAR"],
        requiredData: [""]
      }));
    });
    this.updateStepStates();
  }
  updateStepStates() {
    const steps = this.steps();
    if (!steps.length)
      return;
    const basicInfoValid = this.appForm.get("basicInfo")?.valid ?? false;
    const integrationValid = (this.integrationPoints.length ?? 0) > 0;
    const endpointValid = this.appForm.get("endpoint")?.valid ?? false;
    const pricingModel = this.appForm.get("pricing.model")?.value;
    const pricingValid = pricingModel === "FREE" ? true : (this.appForm.get("pricing.price")?.value ?? 0) > 0;
    this.steps.set([
      __spreadProps(__spreadValues({}, steps[0]), { disableNext: !basicInfoValid }),
      __spreadProps(__spreadValues({}, steps[1]), { disableNext: !integrationValid }),
      __spreadProps(__spreadValues({}, steps[2]), { disableNext: !endpointValid }),
      __spreadProps(__spreadValues({}, steps[3]), { disableNext: !pricingValid }),
      steps[4]
    ]);
  }
  static \u0275fac = function AppCreateWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppCreateWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppCreateWizardComponent, selectors: [["app-app-create-wizard"]], viewQuery: function AppCreateWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
      \u0275\u0275viewQuery(_c2, 5);
      \u0275\u0275viewQuery(_c3, 5);
      \u0275\u0275viewQuery(_c4, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.basicInfoStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.integrationPointsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.endpointStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.pricingStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.reviewStep = _t.first);
    }
  }, decls: 12, vars: 9, consts: [["basicInfoStep", ""], ["integrationPointsStep", ""], ["endpointStep", ""], ["pricingStep", ""], ["reviewStep", ""], [3, "visibleChange", "currentStepChange", "complete", "onCancel", "contentOnly", "visible", "header", "steps", "showSteps", "useWizardButtonsOnly", "currentStep", "loading"], [1, "p-4"], [1, "bg-green-50", "border", "border-green-200"], ["pTemplate", "content"], [1, "flex", "items-start", "gap-3"], [1, "pi", "pi-check-circle", "text-green-600", "text-xl"], [1, "space-y-1"], [1, "text-lg", "font-semibold"], [1, "text-sm", "text-green-800"], [1, "flex", "gap-2", "mt-2"], ["label", "View App", "icon", "pi pi-eye", "size", "small", 3, "onClick"], ["label", "Back to More Apps", "icon", "pi pi-arrow-left", "severity", "secondary", "size", "small", 3, "onClick"], [1, "text-xl", "font-semibold", "mb-4"], [3, "formGroup"], ["formGroupName", "basicInfo", 1, "space-y-4"], ["for", "app-name", 1, "block", "text-sm", "font-medium", "mb-1"], ["id", "app-name", "pInputText", "", "formControlName", "name", "type", "text", 1, "w-full"], [1, "text-red-500"], ["for", "app-short-desc", 1, "block", "text-sm", "font-medium", "mb-1"], ["id", "app-short-desc", "pInputText", "", "formControlName", "shortDescription", "type", "text", "placeholder", "Brief summary (max 100 chars)", 1, "w-full"], ["for", "app-desc", 1, "block", "text-sm", "font-medium", "mb-1"], ["id", "app-desc", "pTextarea", "", "formControlName", "description", "rows", "5", 1, "w-full"], ["for", "app-icon", 1, "block", "text-sm", "font-medium", "mb-1"], ["id", "app-icon", "pInputText", "", "formControlName", "iconUrl", "type", "text", "placeholder", "https://...", 1, "w-full"], [1, "text-xl", "font-semibold", "mb-2"], [1, "text-sm", "border-b", "pb-2", "mb-4"], ["formGroupName", "integration", 1, "space-y-4"], [3, "class"], [1, "flex", "items-center", "mb-3"], [3, "onChange", "inputId", "binary", "ngModel", "ngModelOptions"], [1, "ml-2", "block", "text-sm", "font-medium", "cursor-pointer", 3, "for"], ["formGroupName", "endpoint", 1, "space-y-4"], ["for", "base-url", 1, "block", "text-sm", "font-medium", "mb-1"], ["id", "base-url", "pInputText", "", "formControlName", "baseUrl", "type", "text", "placeholder", "https://api.yourapp.com/widget/", 1, "w-full"], [1, "text-xs", "muted", "mt-1"], ["for", "health-check-url", 1, "block", "text-sm", "font-medium", "mb-1"], ["id", "health-check-url", "pInputText", "", "formControlName", "healthCheckUrl", "type", "text", 1, "w-full"], ["formGroupName", "pricing", 1, "space-y-4"], ["for", "pricing-model", 1, "block", "text-sm", "font-medium", "mb-1"], ["inputId", "pricing-model", "formControlName", "model", "optionLabel", "label", "optionValue", "value", 1, "w-full", 3, "options"], [1, "grid", "grid-cols-2", "gap-4"], ["for", "price-amount", 1, "block", "text-sm", "font-medium", "mb-1"], ["id", "price-amount", "pInputText", "", "formControlName", "price", "type", "number", 1, "w-full"], ["for", "price-currency", 1, "block", "text-sm", "font-medium", "mb-1"], ["inputId", "price-currency", "formControlName", "currency", "optionLabel", "label", "optionValue", "value", 3, "options"], ["for", "trial-days", 1, "block", "text-sm", "font-medium", "mb-1"], ["id", "trial-days", "pInputText", "", "formControlName", "trialDays", "type", "number", 1, "w-full"], [1, "mb-4", "shadow-sm", "border", "border-slate-200"], ["severity", "warn", 1, "bg-yellow-50", "mb-4", "border", "border-yellow-100"], [1, "p-3", "mb-4", "bg-red-50", "text-red-700", "rounded-md", "border", "border-red-100", "flex", "items-center", "gap-2"], [1, "flex", "gap-3", "justify-end", "mt-6", "pt-4", "border-t", "border-slate-100"], ["label", "Cancel", "icon", "pi pi-times", "severity", "secondary", 3, "onClick", "text"], [1, "flex-grow"], ["label", "Back", "icon", "pi pi-arrow-left", "severity", "secondary", 3, "onClick", "outlined"], ["label", "Save Draft", "icon", "pi pi-save", "severity", "secondary", 3, "onClick", "outlined", "loading", "disabled"], ["label", "Submit for Review", "icon", "pi pi-send", "severity", "primary", 3, "onClick", "loading", "disabled"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "space-y-4"], [1, "block", "text-xs", "font-semibold", "uppercase", "text-slate-500", "mb-1"], [1, "text-lg", "font-medium"], [1, "text-sm", "line-clamp-2"], [1, "text-xs", "bg-slate-100", "p-1", "rounded"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-blue-100", "text-blue-800"], [1, "ml-2", "font-medium"], [1, "flex", "flex-wrap", "gap-2"], [1, "text-xs", "border", "rounded-md", "px-2", "py-1", "bg-slate-50"], [1, "text-xs", "text-red-500", "italic"], [1, "flex", "items-start", "gap-3", "text-sm"], [1, "pi", "pi-exclamation-triangle", "text-yellow-600", "text-lg", "mt-0.5"], [1, "font-medium", "text-yellow-800"], [1, "text-yellow-700"], [1, "pi", "pi-times-circle"]], template: function AppCreateWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-wizard", 5);
      \u0275\u0275twoWayListener("visibleChange", function AppCreateWizardComponent_Template_app_wizard_visibleChange_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.visible, $event) || (ctx.visible = $event);
        return \u0275\u0275resetView($event);
      })("currentStepChange", function AppCreateWizardComponent_Template_app_wizard_currentStepChange_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentStep, $event) || (ctx.currentStep = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("complete", function AppCreateWizardComponent_Template_app_wizard_complete_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardComplete());
      })("onCancel", function AppCreateWizardComponent_Template_app_wizard_onCancel_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      })("visibleChange", function AppCreateWizardComponent_Template_app_wizard_visibleChange_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(1, AppCreateWizardComponent_Conditional_1_Template, 3, 0, "div", 6);
      \u0275\u0275template(2, AppCreateWizardComponent_ng_template_2_Template, 24, 10, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, AppCreateWizardComponent_ng_template_4_Template, 10, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(6, AppCreateWizardComponent_ng_template_6_Template, 16, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(8, AppCreateWizardComponent_ng_template_8_Template, 10, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(10, AppCreateWizardComponent_ng_template_10_Template, 15, 8, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("contentOnly", false);
      \u0275\u0275twoWayProperty("visible", ctx.visible);
      \u0275\u0275property("header", ctx.isEditMode() ? "Edit App" : "Create New App")("steps", ctx.steps())("showSteps", true)("useWizardButtonsOnly", true);
      \u0275\u0275twoWayProperty("currentStep", ctx.currentStep);
      \u0275\u0275property("loading", ctx.isSubmitting());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.submittedApp() ? 1 : -1);
    }
  }, dependencies: [
    CommonModule,
    RouterModule,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    FormGroupName,
    ButtonModule,
    Button,
    PrimeTemplate,
    InputTextModule,
    InputText,
    TextareaModule,
    Textarea,
    SelectModule,
    Select,
    CheckboxModule,
    Checkbox,
    CardModule,
    Card,
    WizardComponent
  ], styles: ["\n\n/*# sourceMappingURL=app-create-wizard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppCreateWizardComponent, [{
    type: Component,
    args: [{ selector: "app-app-create-wizard", imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      ButtonModule,
      InputTextModule,
      TextareaModule,
      SelectModule,
      CheckboxModule,
      CardModule,
      WizardComponent
    ], template: `<app-wizard
  [contentOnly]="false"
  [(visible)]="visible"
  [header]="isEditMode() ? 'Edit App' : 'Create New App'"
  [steps]="steps()"
  [showSteps]="true"
  [useWizardButtonsOnly]="true"
  [(currentStep)]="currentStep"
  [loading]="isSubmitting()"
  (complete)="onWizardComplete()"
  (onCancel)="onWizardCancel()"
  (visibleChange)="onWizardCancel()"
>
</app-wizard>

@if (submittedApp()) {
  <div class="p-4">
    <p-card class="bg-green-50 border border-green-200">
      <ng-template pTemplate="content">
        <div class="flex items-start gap-3">
          <i class="pi pi-check-circle text-green-600 text-xl"></i>
          <div class="space-y-1">
            <h3 class="text-lg font-semibold">Submitted for review</h3>
            <p class="text-sm text-green-800">
              Your app has been sent for approval. We'll notify you when the
              review is complete.
            </p>
            <div class="flex gap-2 mt-2">
              <p-button
                label="View App"
                icon="pi pi-eye"
                (onClick)="goToAppDetail(submittedApp()!.id)"
                size="small"
              />
              <p-button
                label="Back to More Apps"
                icon="pi pi-arrow-left"
                severity="secondary"
                (onClick)="goToMarketplace()"
                size="small"
              />
            </div>
          </div>
        </div>
      </ng-template>
    </p-card>
  </div>
}

<!-- Step 1: Basic Info -->
<ng-template #basicInfoStep let-step>
  <div class="p-4">
    <h2 class="text-xl font-semibold mb-4">Basic Information</h2>
    <form [formGroup]="appForm">
      <div class="space-y-4" formGroupName="basicInfo">
        <div>
          <label for="app-name" class="block text-sm font-medium mb-1"
            >App Name *</label
          >
          <input
            id="app-name"
            pInputText
            formControlName="name"
            type="text"
            class="w-full"
            [class.ng-invalid]="
              appForm.get('basicInfo.name')?.invalid &&
              appForm.get('basicInfo.name')?.touched
            "
          />
          @if (
            appForm.get('basicInfo.name')?.invalid &&
            appForm.get('basicInfo.name')?.touched
          ) {
            <small class="text-red-500">App name is required</small>
          }
        </div>
        <div>
          <label for="app-short-desc" class="block text-sm font-medium mb-1"
            >Short Description *</label
          >
          <input
            id="app-short-desc"
            pInputText
            formControlName="shortDescription"
            type="text"
            class="w-full"
            placeholder="Brief summary (max 100 chars)"
            [class.ng-invalid]="
              appForm.get('basicInfo.shortDescription')?.invalid &&
              appForm.get('basicInfo.shortDescription')?.touched
            "
          />
          @if (
            appForm.get('basicInfo.shortDescription')?.invalid &&
            appForm.get('basicInfo.shortDescription')?.touched
          ) {
            <small class="text-red-500">
              @if (
                appForm.get('basicInfo.shortDescription')?.errors?.['required']
              ) {
                Short description is required
              } @else {
                Maximum 100 characters allowed
              }
            </small>
          }
        </div>
        <div>
          <label for="app-desc" class="block text-sm font-medium mb-1"
            >Full Description *</label
          >
          <textarea
            id="app-desc"
            pTextarea
            formControlName="description"
            rows="5"
            class="w-full"
            [class.ng-invalid]="
              appForm.get('basicInfo.description')?.invalid &&
              appForm.get('basicInfo.description')?.touched
            "
          ></textarea>
          @if (
            appForm.get('basicInfo.description')?.invalid &&
            appForm.get('basicInfo.description')?.touched
          ) {
            <small class="text-red-500">Full description is required</small>
          }
        </div>
        <div>
          <label for="app-icon" class="block text-sm font-medium mb-1"
            >Icon URL</label
          >
          <input
            id="app-icon"
            pInputText
            formControlName="iconUrl"
            type="text"
            class="w-full"
            placeholder="https://..."
          />
        </div>
      </div>
    </form>
  </div>
</ng-template>

<!-- Step 2: Integration Points -->
<ng-template #integrationPointsStep let-step>
  <div class="p-4">
    <h2 class="text-xl font-semibold mb-2">Integration Points</h2>
    <p class="text-sm border-b pb-2 mb-4">
      Where will your app integrate with CypherView? Select at least one.
    </p>
    <form [formGroup]="appForm">
      <div class="space-y-4" formGroupName="integration">
        @for (screen of availableScreens; track screen.id) {
          <p-card [class]="isScreenSelected(screen.id) ? 'border-primary' : ''">
            <ng-template pTemplate="content">
              <div class="flex items-center mb-3">
                <p-checkbox
                  [inputId]="screen.id"
                  [binary]="true"
                  (onChange)="toggleIntegrationPoint(screen.id, $event)"
                  [ngModel]="isScreenSelected(screen.id)"
                  [ngModelOptions]="{ standalone: true }"
                ></p-checkbox>
                <label
                  [for]="screen.id"
                  class="ml-2 block text-sm font-medium cursor-pointer"
                  >{{ screen.name }}</label
                >
              </div>
            </ng-template>
          </p-card>
        }
        @if (integrationPoints.invalid && integrationPoints.touched) {
          <small class="text-red-500"
            >Please select at least one integration point.</small
          >
        }
      </div>
    </form>
  </div>
</ng-template>

<!-- Step 3: Endpoint -->
<ng-template #endpointStep let-step>
  <div class="p-4">
    <h2 class="text-xl font-semibold mb-4">Endpoint Configuration</h2>
    <form [formGroup]="appForm">
      <div class="space-y-4" formGroupName="endpoint">
        <div>
          <label for="base-url" class="block text-sm font-medium mb-1"
            >Base URL *</label
          >
          <input
            id="base-url"
            pInputText
            formControlName="baseUrl"
            type="text"
            class="w-full"
            placeholder="https://api.yourapp.com/widget/"
            [class.ng-invalid]="
              appForm.get('endpoint.baseUrl')?.invalid &&
              appForm.get('endpoint.baseUrl')?.touched
            "
          />
          @if (
            appForm.get('endpoint.baseUrl')?.invalid &&
            appForm.get('endpoint.baseUrl')?.touched
          ) {
            <small class="text-red-500">
              @if (appForm.get('endpoint.baseUrl')?.errors?.['required']) {
                Base URL is required
              } @else {
                Must be a valid HTTPS URL
              }
            </small>
          }
          <p class="text-xs muted mt-1">
            Must be HTTPS. This is where the iframe will point to.
          </p>
        </div>
        <div>
          <label for="health-check-url" class="block text-sm font-medium mb-1"
            >Health Check URL</label
          >
          <input
            id="health-check-url"
            pInputText
            formControlName="healthCheckUrl"
            type="text"
            class="w-full"
          />
        </div>
      </div>
    </form>
  </div>
</ng-template>

<!-- Step 4: Pricing -->
<ng-template #pricingStep let-step>
  <div class="p-4">
    <h2 class="text-xl font-semibold mb-4">Pricing</h2>
    <form [formGroup]="appForm">
      <div class="space-y-4" formGroupName="pricing">
        <div>
          <label for="pricing-model" class="block text-sm font-medium mb-1"
            >Model</label
          >
          <p-select
            inputId="pricing-model"
            formControlName="model"
            [options]="pricingModels"
            optionLabel="label"
            optionValue="value"
            class="w-full"
          ></p-select>
        </div>
        @if (appForm.get('pricing.model')?.value !== 'FREE') {
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="price-amount" class="block text-sm font-medium mb-1"
                >Price</label
              >
              <input
                id="price-amount"
                pInputText
                formControlName="price"
                type="number"
                class="w-full"
                [class.ng-invalid]="
                  appForm.get('pricing.price')?.invalid &&
                  appForm.get('pricing.price')?.touched
                "
              />
            </div>
            <div>
              <label for="price-currency" class="block text-sm font-medium mb-1"
                >Currency</label
              >
              <p-select
                inputId="price-currency"
                formControlName="currency"
                [options]="currencies"
                optionLabel="label"
                optionValue="value"
              ></p-select>
            </div>
          </div>
          @if (appForm.get('pricing.price')?.value <= 0) {
            <small class="text-red-500"
              >Price must be greater than 0 for paid apps.</small
            >
          }
          <div>
            <label for="trial-days" class="block text-sm font-medium mb-1"
              >Trial Days</label
            >
            <input
              id="trial-days"
              pInputText
              formControlName="trialDays"
              type="number"
              class="w-full"
            />
          </div>
        }
      </div>
    </form>
  </div>
</ng-template>

<!-- Step 5: Review -->
<ng-template #reviewStep let-step>
  <div class="p-4">
    <h2 class="text-xl font-semibold mb-4">Review & Submit</h2>
    <div>
      <p-card class="mb-4 shadow-sm border border-slate-200">
        <ng-template pTemplate="content">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <span
                  class="block text-xs font-semibold uppercase text-slate-500 mb-1"
                  >App Name</span
                >
                <span class="text-lg font-medium">{{
                  formValue()?.basicInfo?.name
                }}</span>
              </div>
              <div>
                <span
                  class="block text-xs font-semibold uppercase text-slate-500 mb-1"
                  >Short Description</span
                >
                <span class="text-sm line-clamp-2">{{
                  formValue()?.basicInfo?.shortDescription
                }}</span>
              </div>
              <div>
                <span
                  class="block text-xs font-semibold uppercase text-slate-500 mb-1"
                  >Base URL</span
                >
                <code class="text-xs bg-slate-100 p-1 rounded">{{
                  formValue()?.endpoint?.baseUrl
                }}</code>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <span
                  class="block text-xs font-semibold uppercase text-slate-500 mb-1"
                  >Pricing Model</span
                >
                <span
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                >
                  {{ formValue()?.pricing?.model }}
                </span>
                @if (formValue()?.pricing?.model !== 'FREE') {
                  <span class="ml-2 font-medium"
                    >{{ formValue()?.pricing?.currency }}
                    {{ formValue()?.pricing?.price }}</span
                  >
                }
              </div>
              <div>
                <span
                  class="block text-xs font-semibold uppercase text-slate-500 mb-1"
                  >Integrations</span
                >
                <div class="flex flex-wrap gap-2">
                  @for (
                    point of formValue()?.integration?.points;
                    track $index
                  ) {
                    <span
                      class="text-xs border rounded-md px-2 py-1 bg-slate-50"
                    >
                      {{ point.screenId }}
                    </span>
                  }
                  @if (!formValue()?.integration?.points?.length) {
                    <span class="text-xs text-red-500 italic"
                      >None selected</span
                    >
                  }
                </div>
              </div>
            </div>
          </div>
        </ng-template>
      </p-card>

      <p-card
        severity="warn"
        class="bg-yellow-50 mb-4 border border-yellow-100"
      >
        <ng-template pTemplate="content">
          <div class="flex items-start gap-3 text-sm">
            <i
              class="pi pi-exclamation-triangle text-yellow-600 text-lg mt-0.5"
            ></i>
            <div>
              <p class="font-medium text-yellow-800">Final Verification</p>
              <p class="text-yellow-700">
                @if (isEditMode()) {
                  Please ensure all changes are correct before updating your
                  app.
                } @else {
                  Your app will be submitted to the review team. This usually
                  takes 24-48 hours.
                }
              </p>
            </div>
          </div>
        </ng-template>
      </p-card>

      @if (submissionError()) {
        <div
          class="p-3 mb-4 bg-red-50 text-red-700 rounded-md border border-red-100 flex items-center gap-2"
        >
          <i class="pi pi-times-circle"></i>
          <span>{{ submissionError() }}</span>
        </div>
      }

      <div class="flex gap-3 justify-end mt-6 pt-4 border-t border-slate-100">
        <p-button
          label="Cancel"
          icon="pi pi-times"
          [text]="true"
          severity="secondary"
          (onClick)="onWizardCancel()"
        />
        <div class="flex-grow"></div>
        <p-button
          label="Back"
          icon="pi pi-arrow-left"
          [outlined]="true"
          severity="secondary"
          (onClick)="currentStep.set(prevStepValue())"
        />
        <p-button
          label="Save Draft"
          icon="pi pi-save"
          [outlined]="true"
          severity="secondary"
          [loading]="isSubmitting() && submitAction === 'draft'"
          [disabled]="!appForm.valid || isSubmitting()"
          (onClick)="saveDraft()"
        />
        <p-button
          label="Submit for Review"
          icon="pi pi-send"
          severity="primary"
          [loading]="isSubmitting() && submitAction === 'review'"
          [disabled]="!appForm.valid || isSubmitting()"
          (onClick)="submitForReview()"
        />
      </div>
    </div>
  </div>
</ng-template>
`, styles: ["/* src/app/features/app-store/pages/app-create-wizard/app-create-wizard.component.scss */\n/*# sourceMappingURL=app-create-wizard.component.css.map */\n"] }]
  }], () => [], { basicInfoStep: [{
    type: ViewChild,
    args: ["basicInfoStep"]
  }], integrationPointsStep: [{
    type: ViewChild,
    args: ["integrationPointsStep"]
  }], endpointStep: [{
    type: ViewChild,
    args: ["endpointStep"]
  }], pricingStep: [{
    type: ViewChild,
    args: ["pricingStep"]
  }], reviewStep: [{
    type: ViewChild,
    args: ["reviewStep"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppCreateWizardComponent, { className: "AppCreateWizardComponent", filePath: "src/app/features/app-store/pages/app-create-wizard/app-create-wizard.component.ts", lineNumber: 83 });
})();
export {
  AppCreateWizardComponent
};
//# sourceMappingURL=chunk-EOUY3N7O.js.map
