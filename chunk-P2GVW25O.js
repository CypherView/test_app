import {
  AppVersionService
} from "./chunk-SRQ22PRN.js";
import {
  WizardComponent
} from "./chunk-3XB5RLMJ.js";
import {
  AppStoreService
} from "./chunk-HLBFLHW7.js";
import {
  ModalListFormComponent
} from "./chunk-WSLDKKBX.js";
import {
  Card,
  CardModule
} from "./chunk-T6XIC3AO.js";
import {
  ModalFormService
} from "./chunk-AJ5RAXL3.js";
import "./chunk-DGXIJI5N.js";
import "./chunk-RQOCDJ5X.js";
import {
  Textarea,
  TextareaModule
} from "./chunk-UF6FA7CZ.js";
import "./chunk-I3W3CONJ.js";
import "./chunk-YALVSCY4.js";
import {
  Checkbox,
  CheckboxModule,
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
  ReactiveFormsModule,
  SelectModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-TH3LNORR.js";
import {
  Button,
  ButtonModule
} from "./chunk-52LQUIDL.js";
import "./chunk-TMX3INZE.js";
import {
  PrimeTemplate
} from "./chunk-WHNMSFOF.js";
import {
  ActivatedRoute,
  ClientDataService,
  CommonModule,
  Location,
  Router,
  RouterModule,
  UserSessionService,
  createDropdownField,
  createTextAreaField,
  isDefined,
  isNullOrUndefined,
  require_lodash,
  takeUntilDestroyed,
  toSignal
} from "./chunk-L7IB7NHM.js";
import {
  Component,
  DestroyRef,
  ViewChild,
  catchError,
  computed,
  finalize,
  inject,
  map,
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
  ɵɵdeclareLet,
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
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-PNETQGIO.js";
import {
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-7WUTQBRG.js";

// src/app/features/app-store/models/app-store.models.ts
var AVAILABLE_SCREENS = [
  { id: "tripDetails", name: "Trip Details Screen" },
  { id: "positionActivityStats", name: "Vehicle Activity Screen" },
  { id: "appSidebar", name: "App Sidebar" }
];

// src/app/features/app-store/pages/app-create-wizard/app-create-wizard.component.ts
var import_lodash = __toESM(require_lodash());
var _c0 = ["basicInfoStep"];
var _c1 = ["integrationPointsStep"];
var _c2 = ["reviewStep"];
var _c3 = () => ({ standalone: true });
var _forTrack0 = ($index, $item) => $item.id;
function AppCreateWizardComponent_Conditional_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "i", 8);
    \u0275\u0275elementStart(2, "div", 9)(3, "h3", 10);
    \u0275\u0275text(4, "Submitted for review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 11);
    \u0275\u0275text(6, " Your app has been sent for approval. We'll notify you when the review is complete. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "p-button", 13);
    \u0275\u0275listener("onClick", function AppCreateWizardComponent_Conditional_1_ng_template_2_Template_p_button_onClick_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToAppDetail(ctx_r2.submittedApp().id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p-button", 14);
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
    \u0275\u0275elementStart(0, "div", 4)(1, "p-card", 5);
    \u0275\u0275template(2, AppCreateWizardComponent_Conditional_1_ng_template_2_Template, 10, 0, "ng-template", 6);
    \u0275\u0275elementEnd()();
  }
}
function AppCreateWizardComponent_ng_template_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 20);
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
    \u0275\u0275elementStart(0, "small", 20);
    \u0275\u0275conditionalCreate(1, AppCreateWizardComponent_ng_template_2_Conditional_14_Conditional_1_Template, 1, 0)(2, AppCreateWizardComponent_ng_template_2_Conditional_14_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_6_0 = ctx_r2.appForm.get("basicInfo.shortDescription")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["required"]) ? 1 : 2);
  }
}
function AppCreateWizardComponent_ng_template_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 20);
    \u0275\u0275text(1, "Full description is required");
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "h2", 15);
    \u0275\u0275text(2, "Basic Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 16)(4, "div", 17)(5, "div")(6, "label", 18);
    \u0275\u0275text(7, "App Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 19);
    \u0275\u0275conditionalCreate(9, AppCreateWizardComponent_ng_template_2_Conditional_9_Template, 2, 0, "small", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div")(11, "label", 21);
    \u0275\u0275text(12, "Short Description *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 22);
    \u0275\u0275conditionalCreate(14, AppCreateWizardComponent_ng_template_2_Conditional_14_Template, 3, 1, "small", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div")(16, "label", 23);
    \u0275\u0275text(17, "Full Description *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "textarea", 24);
    \u0275\u0275conditionalCreate(19, AppCreateWizardComponent_ng_template_2_Conditional_19_Template, 2, 0, "small", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 25)(21, "div")(22, "label", 26);
    \u0275\u0275text(23, "Icon URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div")(26, "label", 28);
    \u0275\u0275text(27, "Health Check URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 29);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r2.appForm);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("ng-invalid", ((tmp_6_0 = ctx_r2.appForm.get("basicInfo.name")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r2.appForm.get("basicInfo.name")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_7_0 = ctx_r2.appForm.get("basicInfo.name")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r2.appForm.get("basicInfo.name")) == null ? null : tmp_7_0.touched) ? 9 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("ng-invalid", ((tmp_8_0 = ctx_r2.appForm.get("basicInfo.shortDescription")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r2.appForm.get("basicInfo.shortDescription")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_9_0 = ctx_r2.appForm.get("basicInfo.shortDescription")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r2.appForm.get("basicInfo.shortDescription")) == null ? null : tmp_9_0.touched) ? 14 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("ng-invalid", ((tmp_10_0 = ctx_r2.appForm.get("basicInfo.description")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r2.appForm.get("basicInfo.description")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_11_0 = ctx_r2.appForm.get("basicInfo.description")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx_r2.appForm.get("basicInfo.description")) == null ? null : tmp_11_0.touched) ? 19 : -1);
  }
}
function AppCreateWizardComponent_ng_template_4_For_8_ng_template_2_Conditional_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 20);
    \u0275\u0275text(1, "Valid HTTPS URL is required");
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_4_For_8_ng_template_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div")(2, "label", 38);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 39);
    \u0275\u0275conditionalCreate(5, AppCreateWizardComponent_ng_template_4_For_8_ng_template_2_Conditional_4_Conditional_5_Template, 2, 0, "small", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_22_0;
    const screen_r5 = \u0275\u0275nextContext(2).$implicit;
    const control_r6 = \u0275\u0275readContextLet(0);
    \u0275\u0275property("formGroup", control_r6);
    \u0275\u0275advance(2);
    \u0275\u0275property("for", "base-url-" + screen_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Base URL for ", screen_r5.name, " *");
    \u0275\u0275advance();
    \u0275\u0275property("id", "base-url-" + screen_r5.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_22_0 = control_r6.get("baseUrl")) == null ? null : tmp_22_0.invalid) && ((tmp_22_0 = control_r6.get("baseUrl")) == null ? null : tmp_22_0.touched) ? 5 : -1);
  }
}
function AppCreateWizardComponent_ng_template_4_For_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "p-checkbox", 35);
    \u0275\u0275listener("onChange", function AppCreateWizardComponent_ng_template_4_For_8_ng_template_2_Template_p_checkbox_onChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const screen_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleIntegrationPoint(screen_r5.id, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(4, AppCreateWizardComponent_ng_template_4_For_8_ng_template_2_Conditional_4_Template, 6, 5, "div", 37);
  }
  if (rf & 2) {
    const screen_r5 = \u0275\u0275nextContext().$implicit;
    const control_r6 = \u0275\u0275readContextLet(0);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("inputId", screen_r5.id)("binary", true)("ngModel", ctx_r2.isScreenSelected(screen_r5.id))("ngModelOptions", \u0275\u0275pureFunction0(7, _c3));
    \u0275\u0275advance();
    \u0275\u0275property("for", screen_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(screen_r5.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isScreenSelected(screen_r5.id) && control_r6 ? 4 : -1);
  }
}
function AppCreateWizardComponent_ng_template_4_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "p-card");
    \u0275\u0275template(2, AppCreateWizardComponent_ng_template_4_For_8_ng_template_2_Template, 5, 8, "ng-template", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const screen_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275storeLet(ctx_r2.getIntegrationPointControl(screen_r5.id));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.isScreenSelected(screen_r5.id) ? "border-primary" : "");
  }
}
function AppCreateWizardComponent_ng_template_4_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 20);
    \u0275\u0275text(1, "Please select at least one integration point and fill in the URLs.");
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "h2", 30);
    \u0275\u0275text(2, "Integration Points");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 31);
    \u0275\u0275text(4, " Where will your app integrate with CypherView? Provide the Base URL for each selected point. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "form", 16)(6, "div", 32);
    \u0275\u0275repeaterCreate(7, AppCreateWizardComponent_ng_template_4_For_8_Template, 3, 3, "p-card", 33, _forTrack0);
    \u0275\u0275conditionalCreate(9, AppCreateWizardComponent_ng_template_4_Conditional_9_Template, 2, 0, "small", 20);
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
function AppCreateWizardComponent_ng_template_6_ng_template_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "Changed");
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_6_ng_template_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_7_0 = ctx_r2.existingAppData()) == null ? null : tmp_7_0.name, " ");
  }
}
function AppCreateWizardComponent_ng_template_6_ng_template_5_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "Changed");
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_6_ng_template_5_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_7_0 = ctx_r2.existingAppData()) == null ? null : tmp_7_0.shortDescription, " ");
  }
}
function AppCreateWizardComponent_ng_template_6_ng_template_5_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "Changed");
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_6_ng_template_5_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_7_0 = ctx_r2.existingAppData()) == null ? null : tmp_7_0.description, " ");
  }
}
function AppCreateWizardComponent_ng_template_6_ng_template_5_Conditional_23_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "Changed");
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_6_ng_template_5_Conditional_23_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 53)(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_8_0 = ctx_r2.existingAppData()) == null ? null : tmp_8_0.healthCheckUrl);
  }
}
function AppCreateWizardComponent_ng_template_6_ng_template_5_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 51);
    \u0275\u0275text(2, " Health Check ");
    \u0275\u0275conditionalCreate(3, AppCreateWizardComponent_ng_template_6_ng_template_5_Conditional_23_Conditional_3_Template, 2, 0, "span", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, AppCreateWizardComponent_ng_template_6_ng_template_5_Conditional_23_Conditional_4_Template, 3, 1, "p", 53);
    \u0275\u0275elementStart(5, "code", 61);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_7_0 = ctx_r2.changedFields()) == null ? null : tmp_7_0.healthCheckUrl) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_8_0 = ctx_r2.changedFields()) == null ? null : tmp_8_0.healthCheckUrl) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-l-2", (tmp_9_0 = ctx_r2.changedFields()) == null ? null : tmp_9_0.healthCheckUrl)("border-amber-400", (tmp_10_0 = ctx_r2.changedFields()) == null ? null : tmp_10_0.healthCheckUrl)("pl-2", (tmp_11_0 = ctx_r2.changedFields()) == null ? null : tmp_11_0.healthCheckUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_12_0 = ctx_r2.formValue()) == null ? null : tmp_12_0.basicInfo == null ? null : tmp_12_0.basicInfo.healthCheckUrl);
  }
}
function AppCreateWizardComponent_ng_template_6_ng_template_5_Conditional_24_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "Changed");
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_6_ng_template_5_Conditional_24_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 53)(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_8_0 = ctx_r2.existingAppData()) == null ? null : tmp_8_0.iconUrl);
  }
}
function AppCreateWizardComponent_ng_template_6_ng_template_5_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 51);
    \u0275\u0275text(2, " Icon URL ");
    \u0275\u0275conditionalCreate(3, AppCreateWizardComponent_ng_template_6_ng_template_5_Conditional_24_Conditional_3_Template, 2, 0, "span", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, AppCreateWizardComponent_ng_template_6_ng_template_5_Conditional_24_Conditional_4_Template, 3, 1, "p", 53);
    \u0275\u0275elementStart(5, "code", 62);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_7_0 = ctx_r2.changedFields()) == null ? null : tmp_7_0.iconUrl) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_8_0 = ctx_r2.changedFields()) == null ? null : tmp_8_0.iconUrl) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-l-2", (tmp_9_0 = ctx_r2.changedFields()) == null ? null : tmp_9_0.iconUrl)("border-amber-400", (tmp_10_0 = ctx_r2.changedFields()) == null ? null : tmp_10_0.iconUrl)("pl-2", (tmp_11_0 = ctx_r2.changedFields()) == null ? null : tmp_11_0.iconUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_12_0 = ctx_r2.formValue()) == null ? null : tmp_12_0.basicInfo == null ? null : tmp_12_0.basicInfo.iconUrl);
  }
}
function AppCreateWizardComponent_ng_template_6_ng_template_5_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "Changed");
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_6_ng_template_5_For_32_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const origPoint_r8 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(origPoint_r8 == null ? null : origPoint_r8.baseUrl);
  }
}
function AppCreateWizardComponent_ng_template_6_ng_template_5_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 63)(2, "p", 64);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, AppCreateWizardComponent_ng_template_6_ng_template_5_For_32_Conditional_4_Template, 2, 1, "code", 65);
    \u0275\u0275elementStart(5, "code", 66);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_17_0;
    const point_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    const origPoint_r10 = \u0275\u0275storeLet(ctx_r2.getOriginalIntegrationPoint(point_r9.screenId));
    const urlChanged_r11 = ((tmp_17_0 = ctx_r2.changedFields()) == null ? null : tmp_17_0.integrationPoints) && !!origPoint_r10 && origPoint_r10.baseUrl !== point_r9.baseUrl;
    \u0275\u0275advance();
    \u0275\u0275classProp("border-l-2", urlChanged_r11)("border-amber-400", urlChanged_r11);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(point_r9.screenId);
    \u0275\u0275advance();
    \u0275\u0275conditional(urlChanged_r11 ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(point_r9.baseUrl);
  }
}
function AppCreateWizardComponent_ng_template_6_ng_template_5_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1, "None selected");
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_6_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50)(2, "div")(3, "span", 51);
    \u0275\u0275text(4, " App Name ");
    \u0275\u0275conditionalCreate(5, AppCreateWizardComponent_ng_template_6_ng_template_5_Conditional_5_Template, 2, 0, "span", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, AppCreateWizardComponent_ng_template_6_ng_template_5_Conditional_6_Template, 2, 1, "p", 53);
    \u0275\u0275elementStart(7, "span", 54);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div")(10, "span", 51);
    \u0275\u0275text(11, " Short Description ");
    \u0275\u0275conditionalCreate(12, AppCreateWizardComponent_ng_template_6_ng_template_5_Conditional_12_Template, 2, 0, "span", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, AppCreateWizardComponent_ng_template_6_ng_template_5_Conditional_13_Template, 2, 1, "p", 53);
    \u0275\u0275elementStart(14, "span", 55);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "span", 51);
    \u0275\u0275text(18, " Full Description ");
    \u0275\u0275conditionalCreate(19, AppCreateWizardComponent_ng_template_6_ng_template_5_Conditional_19_Template, 2, 0, "span", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(20, AppCreateWizardComponent_ng_template_6_ng_template_5_Conditional_20_Template, 2, 1, "p", 56);
    \u0275\u0275elementStart(21, "p", 57);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(23, AppCreateWizardComponent_ng_template_6_ng_template_5_Conditional_23_Template, 7, 9, "div");
    \u0275\u0275conditionalCreate(24, AppCreateWizardComponent_ng_template_6_ng_template_5_Conditional_24_Template, 7, 9, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 50)(26, "div")(27, "span", 51);
    \u0275\u0275text(28, " Integrations ");
    \u0275\u0275conditionalCreate(29, AppCreateWizardComponent_ng_template_6_ng_template_5_Conditional_29_Template, 2, 0, "span", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 58);
    \u0275\u0275repeaterCreate(31, AppCreateWizardComponent_ng_template_6_ng_template_5_For_32_Template, 7, 8, "div", 59, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(33, AppCreateWizardComponent_ng_template_6_ng_template_5_Conditional_33_Template, 2, 0, "span", 60);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_18_0;
    let tmp_19_0;
    let tmp_20_0;
    let tmp_21_0;
    let tmp_22_0;
    let tmp_23_0;
    let tmp_24_0;
    let tmp_25_0;
    let tmp_26_0;
    let tmp_27_0;
    let tmp_28_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(((tmp_6_0 = ctx_r2.changedFields()) == null ? null : tmp_6_0.name) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_7_0 = ctx_r2.changedFields()) == null ? null : tmp_7_0.name) ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-l-2", (tmp_8_0 = ctx_r2.changedFields()) == null ? null : tmp_8_0.name)("border-amber-400", (tmp_9_0 = ctx_r2.changedFields()) == null ? null : tmp_9_0.name)("pl-2", (tmp_10_0 = ctx_r2.changedFields()) == null ? null : tmp_10_0.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_11_0 = ctx_r2.formValue()) == null ? null : tmp_11_0.basicInfo == null ? null : tmp_11_0.basicInfo.name);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(((tmp_12_0 = ctx_r2.changedFields()) == null ? null : tmp_12_0.shortDescription) ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_13_0 = ctx_r2.changedFields()) == null ? null : tmp_13_0.shortDescription) ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-l-2", (tmp_14_0 = ctx_r2.changedFields()) == null ? null : tmp_14_0.shortDescription)("border-amber-400", (tmp_15_0 = ctx_r2.changedFields()) == null ? null : tmp_15_0.shortDescription)("pl-2", (tmp_16_0 = ctx_r2.changedFields()) == null ? null : tmp_16_0.shortDescription);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_17_0 = ctx_r2.formValue()) == null ? null : tmp_17_0.basicInfo == null ? null : tmp_17_0.basicInfo.shortDescription);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(((tmp_18_0 = ctx_r2.changedFields()) == null ? null : tmp_18_0.description) ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_19_0 = ctx_r2.changedFields()) == null ? null : tmp_19_0.description) ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-l-2", (tmp_20_0 = ctx_r2.changedFields()) == null ? null : tmp_20_0.description)("border-amber-400", (tmp_21_0 = ctx_r2.changedFields()) == null ? null : tmp_21_0.description)("pl-2", (tmp_22_0 = ctx_r2.changedFields()) == null ? null : tmp_22_0.description);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_23_0 = ctx_r2.formValue()) == null ? null : tmp_23_0.basicInfo == null ? null : tmp_23_0.basicInfo.description, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_24_0 = ctx_r2.formValue()) == null ? null : tmp_24_0.basicInfo == null ? null : tmp_24_0.basicInfo.healthCheckUrl) || ((tmp_24_0 = ctx_r2.existingAppData()) == null ? null : tmp_24_0.healthCheckUrl) ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_25_0 = ctx_r2.formValue()) == null ? null : tmp_25_0.basicInfo == null ? null : tmp_25_0.basicInfo.iconUrl) || ((tmp_25_0 = ctx_r2.existingAppData()) == null ? null : tmp_25_0.iconUrl) ? 24 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(((tmp_26_0 = ctx_r2.changedFields()) == null ? null : tmp_26_0.integrationPoints) ? 29 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater((tmp_27_0 = ctx_r2.formValue()) == null ? null : tmp_27_0.integration == null ? null : tmp_27_0.integration.points);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!((tmp_28_0 = ctx_r2.formValue()) == null ? null : tmp_28_0.integration == null ? null : tmp_28_0.integration.points == null ? null : tmp_28_0.integration.points.length) ? 33 : -1);
  }
}
function AppCreateWizardComponent_ng_template_6_ng_template_7_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Please ensure all changes are correct before updating your app. ");
  }
}
function AppCreateWizardComponent_ng_template_6_ng_template_7_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Your app will be submitted to the review team. This usually takes 24-48 hours. ");
  }
}
function AppCreateWizardComponent_ng_template_6_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275element(1, "i", 68);
    \u0275\u0275elementStart(2, "div")(3, "p", 69);
    \u0275\u0275text(4, "Final Verification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 70);
    \u0275\u0275conditionalCreate(6, AppCreateWizardComponent_ng_template_6_ng_template_7_Conditional_6_Template, 1, 0)(7, AppCreateWizardComponent_ng_template_6_ng_template_7_Conditional_7_Template, 1, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r2.isEditMode() ? 6 : 7);
  }
}
function AppCreateWizardComponent_ng_template_6_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "i", 71);
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
function AppCreateWizardComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "h2", 15);
    \u0275\u0275text(2, "Review & Submit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p-card", 40);
    \u0275\u0275template(5, AppCreateWizardComponent_ng_template_6_ng_template_5_Template, 34, 31, "ng-template", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p-card", 41);
    \u0275\u0275template(7, AppCreateWizardComponent_ng_template_6_ng_template_7_Template, 8, 1, "ng-template", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, AppCreateWizardComponent_ng_template_6_Conditional_8_Template, 4, 1, "div", 42);
    \u0275\u0275elementStart(9, "div", 43)(10, "p-button", 44);
    \u0275\u0275listener("onClick", function AppCreateWizardComponent_ng_template_6_Template_p_button_onClick_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onWizardCancel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "div", 45);
    \u0275\u0275elementStart(12, "p-button", 46);
    \u0275\u0275listener("onClick", function AppCreateWizardComponent_ng_template_6_Template_p_button_onClick_12_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.currentStep.set(ctx_r2.prevStepValue()));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p-button", 47);
    \u0275\u0275listener("onClick", function AppCreateWizardComponent_ng_template_6_Template_p_button_onClick_13_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveDraft());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p-button", 48);
    \u0275\u0275listener("onClick", function AppCreateWizardComponent_ng_template_6_Template_p_button_onClick_14_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openSubmitVersionDialog());
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
  reviewStep;
  fb = inject(FormBuilder);
  router = inject(Router);
  route = inject(ActivatedRoute);
  appStoreService = inject(AppStoreService);
  appVersionService = inject(AppVersionService);
  modalFormService = inject(ModalFormService);
  destroyRef = inject(DestroyRef);
  userSessionService = inject(UserSessionService);
  clientDataService = inject(ClientDataService);
  location = inject(Location);
  steps = signal([], ...ngDevMode ? [{ debugName: "steps" }] : (
    /* istanbul ignore next */
    []
  ));
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : (
    /* istanbul ignore next */
    []
  ));
  visible = signal(true, ...ngDevMode ? [{ debugName: "visible" }] : (
    /* istanbul ignore next */
    []
  ));
  submissionError = signal(null, ...ngDevMode ? [{ debugName: "submissionError" }] : (
    /* istanbul ignore next */
    []
  ));
  submittedApp = signal(null, ...ngDevMode ? [{ debugName: "submittedApp" }] : (
    /* istanbul ignore next */
    []
  ));
  isEditMode = signal(false, ...ngDevMode ? [{ debugName: "isEditMode" }] : (
    /* istanbul ignore next */
    []
  ));
  existingAppId = null;
  existingAppData = signal(null, ...ngDevMode ? [{ debugName: "existingAppData" }] : (
    /* istanbul ignore next */
    []
  ));
  draftVersion = signal(null, ...ngDevMode ? [{ debugName: "draftVersion" }] : (
    /* istanbul ignore next */
    []
  ));
  baselineVersion = signal(null, ...ngDevMode ? [{ debugName: "baselineVersion" }] : (
    /* istanbul ignore next */
    []
  ));
  currentStep = signal(1, ...ngDevMode ? [{ debugName: "currentStep" }] : (
    /* istanbul ignore next */
    []
  ));
  isLastStep = computed(() => {
    const steps = this.steps();
    return steps.length > 0 && this.currentStep() === steps.at(-1)?.value;
  }, ...ngDevMode ? [{ debugName: "isLastStep" }] : (
    /* istanbul ignore next */
    []
  ));
  prevStepValue = computed(() => {
    const steps = this.steps();
    const currentIndex = steps.findIndex((s) => s.value === this.currentStep());
    return currentIndex > 0 ? steps[currentIndex - 1].value : 1;
  }, ...ngDevMode ? [{ debugName: "prevStepValue" }] : (
    /* istanbul ignore next */
    []
  ));
  appForm;
  formValue;
  submitAction = null;
  pendingBumpType = signal(null, ...ngDevMode ? [{ debugName: "pendingBumpType" }] : (
    /* istanbul ignore next */
    []
  ));
  pendingChangelog = signal(null, ...ngDevMode ? [{ debugName: "pendingChangelog" }] : (
    /* istanbul ignore next */
    []
  ));
  availableScreens = AVAILABLE_SCREENS;
  changedFields = computed(() => {
    if (!this.isEditMode())
      return null;
    const orig = this.existingAppData();
    const fv = this.formValue();
    const baselineVersion = this.baselineVersion();
    const baseline = baselineVersion ?? (isNullOrUndefined(orig?.version.activeVersionId) ? null : orig);
    if (!baseline)
      return null;
    return {
      name: fv?.basicInfo.name !== baseline.name,
      shortDescription: fv?.basicInfo.shortDescription !== baseline.shortDescription,
      description: fv?.basicInfo.description !== baseline.description,
      iconUrl: fv?.basicInfo.iconUrl !== baseline.iconUrl,
      healthCheckUrl: fv?.basicInfo.healthCheckUrl !== (baseline.healthCheckUrl ?? ""),
      integrationPoints: !(0, import_lodash.isEqual)(fv?.integration.points, baseline.integrationPoints)
    };
  }, ...ngDevMode ? [{ debugName: "changedFields" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.appForm = this.fb.group({
      basicInfo: this.fb.group({
        name: ["", Validators.required],
        shortDescription: [
          "",
          [Validators.required, Validators.maxLength(100)]
        ],
        description: ["", Validators.required],
        iconUrl: [""],
        healthCheckUrl: ["", [Validators.pattern("https?://.+")]]
      }),
      integration: this.fb.group({
        points: this.fb.array([], Validators.required)
      })
    });
    this.formValue = toSignal(this.appForm.valueChanges.pipe(startWith(null), map(() => this.appForm.value)));
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
          baseUrl: [
            "",
            [Validators.required, Validators.pattern("https?://.+")]
          ],
          requiredPermissions: [[]]
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
  getOriginalIntegrationPoint(screenId) {
    return this.existingAppData()?.integrationPoints.find((p) => p.screenId === screenId);
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
    this.location.back();
  }
  saveDraft() {
    this.submitAction = "draft";
    this.submit();
  }
  openSubmitVersionDialog() {
    const isFirstSubmission = this.existingAppData()?.version.activeVersionId == null;
    const dummyField = createTextAreaField("dummy", "dummy", void 0);
    const modalFields = [
      ...isFirstSubmission ? [] : [
        createDropdownField("bumpType", "Version Bump", [
          { label: "Patch \u2014 bug fixes, no new features", value: "patch" },
          {
            label: "Minor \u2014 new features, backward compatible",
            value: "minor"
          },
          { label: "Major \u2014 breaking changes", value: "major" }
        ], void 0, {
          validations: [
            { name: "required", validator: Validators.required }
          ]
        })
      ],
      createTextAreaField("changelog", "Changelog", void 0, {
        placeholder: "Describe what changed in this version...",
        validations: [{ name: "required", validator: Validators.required }]
      })
    ];
    this.modalFormService.openListItemModal({
      modalConfig: {
        modalComponent: ModalListFormComponent,
        modalTitle: "Submit New Version",
        modalFields,
        onSubmit: (data, ref) => new Promise((resolve) => {
          this.pendingBumpType.set(isFirstSubmission ? "patch" : data["bumpType"]);
          this.pendingChangelog.set(data["changelog"]);
          ref.close();
          this.submitAction = "review";
          this.submit();
          resolve(true);
        })
      },
      itemData: { bumpType: "", changelog: "" },
      destroyRef: this.destroyRef,
      field: dummyField
    }).subscribe();
  }
  submit() {
    if (!this.appForm.valid || this.isSubmitting()) {
      return;
    }
    this.submissionError.set(null);
    this.isSubmitting.set(true);
    const formValue = this.appForm.value;
    const action = this.submitAction || "draft";
    if (isDefined(this.existingAppId) && this.existingAppData()) {
      this.handleEditSubmit(formValue, action);
    } else {
      this.handleCreateSubmit(formValue, action);
    }
  }
  handleEditSubmit(formValue, action) {
    if (!isDefined(this.existingAppId))
      return;
    if (action === "draft") {
      const draft = this.draftVersion();
      if (!isDefined(draft)) {
        this.submissionError.set("No draft version found to update.");
        this.isSubmitting.set(false);
        return;
      }
      this.appVersionService.updateVersion(this.existingAppId, draft.id, {
        name: formValue.basicInfo.name,
        description: formValue.basicInfo.description,
        shortDescription: formValue.basicInfo.shortDescription,
        iconUrl: formValue.basicInfo.iconUrl,
        healthCheckUrl: formValue.basicInfo.healthCheckUrl,
        integrationPoints: formValue.integration.points.map((p) => ({
          screenId: p.screenId,
          requiredPermissions: p.requiredPermissions,
          baseUrl: p.baseUrl
        }))
      }).pipe(tap((updated) => {
        this.draftVersion.set(updated);
        this.visible.set(false);
      }), catchError(() => {
        this.submissionError.set("Could not update your draft. Please try again.");
        return of(null);
      }), finalize(() => {
        this.isSubmitting.set(false);
        this.submitAction = null;
      })).subscribe();
      return;
    }
    const bumpType = this.pendingBumpType();
    const changelog = this.pendingChangelog();
    if (!isDefined(bumpType) || !isDefined(changelog)) {
      this.isSubmitting.set(false);
      return;
    }
    const changed = this.changedFields();
    const payload = { bumpType, changelog };
    if (isDefined(changed)) {
      if (changed.name)
        payload.name = formValue.basicInfo.name;
      if (changed.description)
        payload.description = formValue.basicInfo.description;
      if (changed.shortDescription)
        payload.shortDescription = formValue.basicInfo.shortDescription;
      if (changed.iconUrl)
        payload.iconUrl = formValue.basicInfo.iconUrl;
      if (changed.healthCheckUrl)
        payload.healthCheckUrl = formValue.basicInfo.healthCheckUrl;
      if (changed.integrationPoints)
        payload.integrationPoints = formValue.integration.points.map((p) => ({
          screenId: p.screenId,
          requiredPermissions: p.requiredPermissions,
          baseUrl: p.baseUrl
        }));
    }
    this.appVersionService.submitVersion(this.existingAppId, payload).pipe(tap(() => {
      const existingApp = this.existingAppData();
      if (isDefined(existingApp)) {
        this.submittedApp.set(existingApp);
        this.visible.set(false);
      }
    }), catchError(() => {
      this.submissionError.set("Could not submit your app version. Please try again.");
      return of(null);
    }), finalize(() => {
      this.isSubmitting.set(false);
      this.submitAction = null;
      this.pendingBumpType.set(null);
      this.pendingChangelog.set(null);
    })).subscribe();
  }
  handleCreateSubmit(formValue, action) {
    const user = this.userSessionService.currentUserSession();
    const payload = __spreadProps(__spreadValues({}, formValue.basicInfo), {
      iconUrl: formValue.basicInfo.iconUrl ?? "assets/default-app-icon.png",
      developerId: user?.id ?? "unknown-user",
      developerName: user?.name ?? "Unknown Developer",
      integrationPoints: formValue.integration.points,
      categories: ["Productivity"],
      tags: []
    });
    this.appStoreService.createApp(payload).pipe(switchMap((createdApp) => {
      const bumpType = this.pendingBumpType();
      const changelog = this.pendingChangelog();
      if (action === "review" && isDefined(bumpType) && isDefined(changelog)) {
        return this.appVersionService.submitVersion(createdApp.id, { bumpType, changelog }).pipe(map(() => createdApp), catchError(() => of(createdApp)));
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
      this.pendingBumpType.set(null);
      this.pendingChangelog.set(null);
    })).subscribe();
  }
  goToAppDetail(appId) {
    this.router.navigate(["/app-store", appId]).catch(() => {
    });
  }
  goToMarketplace() {
    this.location.back();
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
    this.appStoreService.getAppById(appId, this.clientDataService.getSelectedClient()?.id ?? "").pipe(tap((app) => {
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
    this.existingAppData.set(__spreadValues({}, app));
    this.isEditMode.set(true);
    this.appVersionService.getVersions(app.id).pipe(tap((versions) => {
      const draft = versions.find((v) => v.status === "draft") ?? null;
      this.draftVersion.set(draft);
      const isPreFirstApproval = isNullOrUndefined(app.version.activeVersionId);
      const latestVersion = versions.at(0) ?? null;
      const versionSource = draft ?? (isPreFirstApproval ? latestVersion : null);
      this.baselineVersion.set(versionSource);
      const source = versionSource ?? (!isPreFirstApproval ? app : null);
      if (!source)
        return;
      this.appForm.patchValue({
        basicInfo: {
          name: source.name,
          shortDescription: source.shortDescription,
          description: source.description,
          iconUrl: source.iconUrl,
          healthCheckUrl: source.healthCheckUrl ?? ""
        }
      });
      this.integrationPoints.clear();
      source.integrationPoints.forEach((point) => {
        this.integrationPoints.push(this.fb.group({
          screenId: [point.screenId],
          baseUrl: [
            point.baseUrl,
            [Validators.required, Validators.pattern("https?://.+")]
          ],
          requiredPermissions: [point.requiredPermissions]
        }));
      });
      this.updateStepStates();
    }), catchError(() => {
      if (isNullOrUndefined(app.version.activeVersionId)) {
        this.updateStepStates();
        return of([]);
      }
      this.appForm.patchValue({
        basicInfo: {
          name: app.name,
          shortDescription: app.shortDescription,
          description: app.description,
          iconUrl: app.iconUrl,
          healthCheckUrl: app.healthCheckUrl ?? ""
        }
      });
      this.integrationPoints.clear();
      app.integrationPoints.forEach((point) => {
        this.integrationPoints.push(this.fb.group({
          screenId: [point.screenId],
          baseUrl: [
            point.baseUrl,
            [Validators.required, Validators.pattern("https?://.+")]
          ],
          requiredPermissions: [point.requiredPermissions]
        }));
      });
      this.updateStepStates();
      return of([]);
    }), takeUntilDestroyed(this.destroyRef)).subscribe();
  }
  updateStepStates() {
    const steps = this.steps();
    if (!steps.length)
      return;
    const basicInfoValid = this.appForm.get("basicInfo")?.valid ?? false;
    const integrationValid = this.integrationPoints.valid && (this.integrationPoints.length ?? 0) > 0;
    this.steps.set([
      __spreadProps(__spreadValues({}, steps[0]), { disableNext: !basicInfoValid }),
      __spreadProps(__spreadValues({}, steps[1]), { disableNext: !integrationValid }),
      steps[2]
    ]);
  }
  static \u0275fac = function AppCreateWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppCreateWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppCreateWizardComponent, selectors: [["app-create-wizard"]], viewQuery: function AppCreateWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5)(_c1, 5)(_c2, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.basicInfoStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.integrationPointsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.reviewStep = _t.first);
    }
  }, decls: 8, vars: 9, consts: [["basicInfoStep", ""], ["integrationPointsStep", ""], ["reviewStep", ""], [3, "visibleChange", "currentStepChange", "complete", "contentOnly", "visible", "header", "steps", "showSteps", "useWizardButtonsOnly", "currentStep", "loading"], [1, "p-4"], [1, "bg-surface-0", "border-left-3", "surface-border"], ["pTemplate", "content"], [1, "flex", "items-start", "gap-3"], [1, "pi", "pi-check-circle", "text-xl"], [1, "space-y-1"], [1, "text-lg", "font-semibold"], [1, "text-sm", "text-surface-800"], [1, "flex", "gap-2", "mt-2"], ["label", "View App", "icon", "pi pi-eye", "size", "small", 3, "onClick"], ["label", "Back to More Apps", "icon", "pi pi-arrow-left", "severity", "secondary", "size", "small", 3, "onClick"], [1, "text-xl", "font-semibold", "mb-4"], [3, "formGroup"], ["formGroupName", "basicInfo", 1, "space-y-4"], ["for", "app-name", 1, "block", "text-sm", "font-medium", "mb-1"], ["id", "app-name", "pInputText", "", "formControlName", "name", "type", "text", 1, "w-full"], [1, "p-error"], ["for", "app-short-desc", 1, "block", "text-sm", "font-medium", "mb-1"], ["id", "app-short-desc", "pInputText", "", "formControlName", "shortDescription", "type", "text", "placeholder", "Brief summary (max 100 chars)", 1, "w-full"], ["for", "app-desc", 1, "block", "text-sm", "font-medium", "mb-1"], ["id", "app-desc", "pTextarea", "", "formControlName", "description", "rows", "5", 1, "w-full"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], ["for", "app-icon", 1, "block", "text-sm", "font-medium", "mb-1"], ["id", "app-icon", "pInputText", "", "formControlName", "iconUrl", "type", "text", "placeholder", "https://...", 1, "w-full"], ["for", "health-check-url", 1, "block", "text-sm", "font-medium", "mb-1"], ["id", "health-check-url", "pInputText", "", "formControlName", "healthCheckUrl", "type", "text", "placeholder", "https://...", 1, "w-full"], [1, "text-xl", "font-semibold", "mb-2"], [1, "text-sm", "border-b", "pb-2", "mb-4"], ["formGroupName", "integration", 1, "space-y-4"], [3, "class"], [1, "flex", "items-center", "mb-3"], [3, "onChange", "inputId", "binary", "ngModel", "ngModelOptions"], [1, "ml-2", "block", "text-sm", "font-medium", "cursor-pointer", 3, "for"], [1, "pl-7", "space-y-3", 3, "formGroup"], [1, "block", "text-xs", "font-semibold", "uppercase", "text-surface-500", "mb-1", 3, "for"], ["pInputText", "", "formControlName", "baseUrl", "type", "text", "placeholder", "https://api.yourapp.com/widget/", 1, "w-full", "text-sm", 3, "id"], [1, "mb-4", "shadow-sm", "border-surface-200"], [1, "bg-surface-0", "mb-4", "border-left-3", "border-orange-400", "surface-border"], [1, "p-3", "mb-4", "bg-red-50", "text-red-700", "rounded-md", "border-left-3", "border-red-500", "flex", "items-center", "gap-2"], [1, "flex", "gap-3", "justify-end", "mt-6", "pt-4", "border-t", "surface-border"], ["label", "Cancel", "icon", "pi pi-times", "severity", "secondary", 3, "onClick", "text"], [1, "flex-grow"], ["label", "Back", "icon", "pi pi-arrow-left", "severity", "secondary", 3, "onClick", "outlined"], ["label", "Save Draft", "icon", "pi pi-save", "severity", "secondary", 3, "onClick", "outlined", "loading", "disabled"], ["label", "Submit for Review", "icon", "pi pi-send", "severity", "primary", 3, "onClick", "loading", "disabled"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "space-y-4"], [1, "block", "text-xs", "font-semibold", "uppercase", "text-surface-500", "mb-1"], [1, "ml-1", "px-1", "py-0.5", "text-[10px]", "bg-amber-100", "text-amber-700", "rounded", "font-semibold"], [1, "text-surface-400", "line-through", "text-xs", "mb-1"], [1, "text-lg", "font-medium"], [1, "text-sm", "line-clamp-2"], [1, "text-surface-400", "line-through", "text-xs", "mb-1", "line-clamp-2"], [1, "text-sm", "line-clamp-3"], [1, "space-y-2"], [1, "p-2", "bg-surface-50", "rounded-md", "border", 3, "border-l-2", "border-amber-400"], [1, "text-xs", "p-error", "italic"], [1, "text-xs"], [1, "text-xs", "break-all"], [1, "p-2", "bg-surface-50", "rounded-md", "border"], [1, "text-sm", "font-bold"], [1, "text-[10px]", "break-all", "text-surface-400", "line-through", "block"], [1, "text-[10px]", "break-all"], [1, "flex", "items-start", "gap-3", "text-sm"], [1, "pi", "pi-exclamation-triangle", "text-lg", "mt-0.5", "text-orange-400"], [1, "font-medium", "text-surface-900"], [1, "text-surface-700"], [1, "pi", "pi-times-circle"]], template: function AppCreateWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-wizard", 3);
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
        return ctx.onWizardComplete();
      })("visibleChange", function AppCreateWizardComponent_Template_app_wizard_visibleChange_0_listener() {
        return ctx.onWizardCancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(1, AppCreateWizardComponent_Conditional_1_Template, 3, 0, "div", 4);
      \u0275\u0275template(2, AppCreateWizardComponent_ng_template_2_Template, 29, 10, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, AppCreateWizardComponent_ng_template_4_Template, 10, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(6, AppCreateWizardComponent_ng_template_6_Template, 15, 8, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
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
    CheckboxModule,
    Checkbox,
    CardModule,
    Card,
    WizardComponent
  ], styles: ["\n/*# sourceMappingURL=app-create-wizard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppCreateWizardComponent, [{
    type: Component,
    args: [{ selector: "app-create-wizard", imports: [
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
  (visibleChange)="onWizardCancel()"
>
</app-wizard>

@if (submittedApp()) {
  <div class="p-4">
    <p-card class="bg-surface-0 border-left-3 surface-border">
      <ng-template pTemplate="content">
        <div class="flex items-start gap-3">
          <i class="pi pi-check-circle text-xl"></i>
          <div class="space-y-1">
            <h3 class="text-lg font-semibold">Submitted for review</h3>
            <p class="text-sm text-surface-800">
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
            <small class="p-error">App name is required</small>
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
            <small class="p-error">
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
            <small class="p-error">Full description is required</small>
          }
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              placeholder="https://..."
            />
          </div>
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
      Where will your app integrate with CypherView? Provide the Base URL for
      each selected point.
    </p>
    <form [formGroup]="appForm">
      <div class="space-y-4" formGroupName="integration">
        @for (screen of availableScreens; track screen.id) {
          @let control = getIntegrationPointControl(screen.id);
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

              @if (isScreenSelected(screen.id) && control) {
                <div [formGroup]="control" class="pl-7 space-y-3">
                  <div>
                    <label
                      [for]="'base-url-' + screen.id"
                      class="block text-xs font-semibold uppercase text-surface-500 mb-1"
                      >Base URL for {{ screen.name }} *</label
                    >
                    <input
                      [id]="'base-url-' + screen.id"
                      pInputText
                      formControlName="baseUrl"
                      type="text"
                      class="w-full text-sm"
                      placeholder="https://api.yourapp.com/widget/"
                    />
                    @if (
                      control.get('baseUrl')?.invalid &&
                      control.get('baseUrl')?.touched
                    ) {
                      <small class="p-error">Valid HTTPS URL is required</small>
                    }
                  </div>
                </div>
              }
            </ng-template>
          </p-card>
        }
        @if (integrationPoints.invalid && integrationPoints.touched) {
          <small class="p-error"
            >Please select at least one integration point and fill in the
            URLs.</small
          >
        }
      </div>
    </form>
  </div>
</ng-template>

<!-- Step 3: Review -->
<ng-template #reviewStep let-step>
  <div class="p-4">
    <h2 class="text-xl font-semibold mb-4">Review & Submit</h2>
    <div>
      <p-card class="mb-4 shadow-sm border-surface-200">
        <ng-template pTemplate="content">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <!-- App Name -->
              <div>
                <span
                  class="block text-xs font-semibold uppercase text-surface-500 mb-1"
                >
                  App Name
                  @if (changedFields()?.name) {
                    <span
                      class="ml-1 px-1 py-0.5 text-[10px] bg-amber-100 text-amber-700 rounded font-semibold"
                      >Changed</span
                    >
                  }
                </span>
                @if (changedFields()?.name) {
                  <p class="text-surface-400 line-through text-xs mb-1">
                    {{ existingAppData()?.name }}
                  </p>
                }
                <span
                  class="text-lg font-medium"
                  [class.border-l-2]="changedFields()?.name"
                  [class.border-amber-400]="changedFields()?.name"
                  [class.pl-2]="changedFields()?.name"
                  >{{ formValue()?.basicInfo?.name }}</span
                >
              </div>

              <!-- Short Description -->
              <div>
                <span
                  class="block text-xs font-semibold uppercase text-surface-500 mb-1"
                >
                  Short Description
                  @if (changedFields()?.shortDescription) {
                    <span
                      class="ml-1 px-1 py-0.5 text-[10px] bg-amber-100 text-amber-700 rounded font-semibold"
                      >Changed</span
                    >
                  }
                </span>
                @if (changedFields()?.shortDescription) {
                  <p class="text-surface-400 line-through text-xs mb-1">
                    {{ existingAppData()?.shortDescription }}
                  </p>
                }
                <span
                  class="text-sm line-clamp-2"
                  [class.border-l-2]="changedFields()?.shortDescription"
                  [class.border-amber-400]="changedFields()?.shortDescription"
                  [class.pl-2]="changedFields()?.shortDescription"
                  >{{ formValue()?.basicInfo?.shortDescription }}</span
                >
              </div>

              <!-- Full Description -->
              <div>
                <span
                  class="block text-xs font-semibold uppercase text-surface-500 mb-1"
                >
                  Full Description
                  @if (changedFields()?.description) {
                    <span
                      class="ml-1 px-1 py-0.5 text-[10px] bg-amber-100 text-amber-700 rounded font-semibold"
                      >Changed</span
                    >
                  }
                </span>
                @if (changedFields()?.description) {
                  <p
                    class="text-surface-400 line-through text-xs mb-1 line-clamp-2"
                  >
                    {{ existingAppData()?.description }}
                  </p>
                }
                <p
                  class="text-sm line-clamp-3"
                  [class.border-l-2]="changedFields()?.description"
                  [class.border-amber-400]="changedFields()?.description"
                  [class.pl-2]="changedFields()?.description"
                >
                  {{ formValue()?.basicInfo?.description }}
                </p>
              </div>

              <!-- Health Check URL -->
              @if (
                formValue()?.basicInfo?.healthCheckUrl ||
                existingAppData()?.healthCheckUrl
              ) {
                <div>
                  <span
                    class="block text-xs font-semibold uppercase text-surface-500 mb-1"
                  >
                    Health Check
                    @if (changedFields()?.healthCheckUrl) {
                      <span
                        class="ml-1 px-1 py-0.5 text-[10px] bg-amber-100 text-amber-700 rounded font-semibold"
                        >Changed</span
                      >
                    }
                  </span>
                  @if (changedFields()?.healthCheckUrl) {
                    <p class="text-surface-400 line-through text-xs mb-1">
                      <code>{{ existingAppData()?.healthCheckUrl }}</code>
                    </p>
                  }
                  <code
                    class="text-xs"
                    [class.border-l-2]="changedFields()?.healthCheckUrl"
                    [class.border-amber-400]="changedFields()?.healthCheckUrl"
                    [class.pl-2]="changedFields()?.healthCheckUrl"
                    >{{ formValue()?.basicInfo?.healthCheckUrl }}</code
                  >
                </div>
              }

              <!-- Icon URL -->
              @if (
                formValue()?.basicInfo?.iconUrl || existingAppData()?.iconUrl
              ) {
                <div>
                  <span
                    class="block text-xs font-semibold uppercase text-surface-500 mb-1"
                  >
                    Icon URL
                    @if (changedFields()?.iconUrl) {
                      <span
                        class="ml-1 px-1 py-0.5 text-[10px] bg-amber-100 text-amber-700 rounded font-semibold"
                        >Changed</span
                      >
                    }
                  </span>
                  @if (changedFields()?.iconUrl) {
                    <p class="text-surface-400 line-through text-xs mb-1">
                      <code>{{ existingAppData()?.iconUrl }}</code>
                    </p>
                  }
                  <code
                    class="text-xs break-all"
                    [class.border-l-2]="changedFields()?.iconUrl"
                    [class.border-amber-400]="changedFields()?.iconUrl"
                    [class.pl-2]="changedFields()?.iconUrl"
                    >{{ formValue()?.basicInfo?.iconUrl }}</code
                  >
                </div>
              }
            </div>

            <!-- Integration Points -->
            <div class="space-y-4">
              <div>
                <span
                  class="block text-xs font-semibold uppercase text-surface-500 mb-1"
                >
                  Integrations
                  @if (changedFields()?.integrationPoints) {
                    <span
                      class="ml-1 px-1 py-0.5 text-[10px] bg-amber-100 text-amber-700 rounded font-semibold"
                      >Changed</span
                    >
                  }
                </span>
                <div class="space-y-2">
                  @for (
                    point of formValue()?.integration?.points;
                    track $index
                  ) {
                    @let origPoint =
                      getOriginalIntegrationPoint(point.screenId);
                    @let urlChanged =
                      changedFields()?.integrationPoints &&
                      !!origPoint &&
                      origPoint.baseUrl !== point.baseUrl;
                    <div
                      class="p-2 bg-surface-50 rounded-md border"
                      [class.border-l-2]="urlChanged"
                      [class.border-amber-400]="urlChanged"
                    >
                      <p class="text-sm font-bold">{{ point.screenId }}</p>
                      @if (urlChanged) {
                        <code
                          class="text-[10px] break-all text-surface-400 line-through block"
                          >{{ origPoint?.baseUrl }}</code
                        >
                      }
                      <code class="text-[10px] break-all">{{
                        point.baseUrl
                      }}</code>
                    </div>
                  }
                  @if (!formValue()?.integration?.points?.length) {
                    <span class="text-xs p-error italic">None selected</span>
                  }
                </div>
              </div>
            </div>
          </div>
        </ng-template>
      </p-card>

      <p-card
        class="bg-surface-0 mb-4 border-left-3 border-orange-400 surface-border"
      >
        <ng-template pTemplate="content">
          <div class="flex items-start gap-3 text-sm">
            <i
              class="pi pi-exclamation-triangle text-lg mt-0.5 text-orange-400"
            ></i>
            <div>
              <p class="font-medium text-surface-900">Final Verification</p>
              <p class="text-surface-700">
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
          class="p-3 mb-4 bg-red-50 text-red-700 rounded-md border-left-3 border-red-500 flex items-center gap-2"
        >
          <i class="pi pi-times-circle"></i>
          <span>{{ submissionError() }}</span>
        </div>
      }

      <div class="flex gap-3 justify-end mt-6 pt-4 border-t surface-border">
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
          (onClick)="openSubmitVersionDialog()"
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
  }], reviewStep: [{
    type: ViewChild,
    args: ["reviewStep"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppCreateWizardComponent, { className: "AppCreateWizardComponent", filePath: "src/app/features/app-store/pages/app-create-wizard/app-create-wizard.component.ts", lineNumber: 86 });
})();
export {
  AppCreateWizardComponent
};
//# sourceMappingURL=chunk-P2GVW25O.js.map
