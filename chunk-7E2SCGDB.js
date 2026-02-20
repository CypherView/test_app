import {
  WizardComponent
} from "./chunk-NDSQJJRI.js";
import {
  AppStoreService
} from "./chunk-26EHOY33.js";
import {
  Card,
  CardModule
} from "./chunk-ERWSOVMD.js";
import "./chunk-BUQLELQY.js";
import {
  Textarea,
  TextareaModule
} from "./chunk-W5XLQNKH.js";
import {
  Checkbox,
  CheckboxModule
} from "./chunk-IM6TEFQQ.js";
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
  ReactiveFormsModule,
  SelectModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-4CAIP3KE.js";
import "./chunk-2UAXSVOA.js";
import {
  Button,
  ButtonModule
} from "./chunk-PBS4GE25.js";
import {
  PrimeTemplate
} from "./chunk-YL4UBWIM.js";
import {
  ActivatedRoute,
  ClientDataService,
  CommonModule,
  Location,
  Router,
  RouterModule,
  UserSessionService,
  isDefined,
  takeUntilDestroyed,
  toSignal
} from "./chunk-UNWLID6Q.js";
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
} from "./chunk-4KHPVNTA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/features/app-store/models/app-store.models.ts
var AVAILABLE_SCREENS = [
  { id: "tripDetails", name: "Trip Details Screen" },
  { id: "positionActivityStats", name: "Vehicle Activity Screen" }
];

// src/app/features/app-store/pages/app-create-wizard/app-create-wizard.component.ts
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
function AppCreateWizardComponent_ng_template_6_ng_template_5_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 51);
    \u0275\u0275text(2, "Health Check");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "code", 57);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_7_0 = ctx_r2.formValue()) == null ? null : tmp_7_0.basicInfo == null ? null : tmp_7_0.basicInfo.healthCheckUrl);
  }
}
function AppCreateWizardComponent_ng_template_6_ng_template_5_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "p", 58);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "code", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const point_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(point_r8.screenId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(point_r8.baseUrl);
  }
}
function AppCreateWizardComponent_ng_template_6_ng_template_5_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1, "None selected");
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_6_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50)(2, "div")(3, "span", 51);
    \u0275\u0275text(4, "App Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 52);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "span", 51);
    \u0275\u0275text(9, "Short Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 53);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, AppCreateWizardComponent_ng_template_6_ng_template_5_Conditional_12_Template, 5, 1, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 50)(14, "div")(15, "span", 51);
    \u0275\u0275text(16, "Integrations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 54);
    \u0275\u0275repeaterCreate(18, AppCreateWizardComponent_ng_template_6_ng_template_5_For_19_Template, 5, 2, "div", 55, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(20, AppCreateWizardComponent_ng_template_6_ng_template_5_Conditional_20_Template, 2, 0, "span", 56);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((tmp_6_0 = ctx_r2.formValue()) == null ? null : tmp_6_0.basicInfo == null ? null : tmp_6_0.basicInfo.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_7_0 = ctx_r2.formValue()) == null ? null : tmp_7_0.basicInfo == null ? null : tmp_7_0.basicInfo.shortDescription);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_8_0 = ctx_r2.formValue()) == null ? null : tmp_8_0.basicInfo == null ? null : tmp_8_0.basicInfo.healthCheckUrl) ? 12 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275repeater((tmp_9_0 = ctx_r2.formValue()) == null ? null : tmp_9_0.integration == null ? null : tmp_9_0.integration.points);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!((tmp_10_0 = ctx_r2.formValue()) == null ? null : tmp_10_0.integration == null ? null : tmp_10_0.integration.points == null ? null : tmp_10_0.integration.points.length) ? 20 : -1);
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
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275elementStart(2, "div")(3, "p", 62);
    \u0275\u0275text(4, "Final Verification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 63);
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
    \u0275\u0275element(1, "i", 64);
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
    \u0275\u0275template(5, AppCreateWizardComponent_ng_template_6_ng_template_5_Template, 21, 4, "ng-template", 6);
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
  reviewStep;
  fb = inject(FormBuilder);
  router = inject(Router);
  route = inject(ActivatedRoute);
  appStoreService = inject(AppStoreService);
  destroyRef = inject(DestroyRef);
  userSessionService = inject(UserSessionService);
  clientDataService = inject(ClientDataService);
  location = inject(Location);
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
    const changes = __spreadProps(__spreadValues({}, formValue.basicInfo), {
      integrationPoints: formValue.integration.points,
      status: action === "review" ? "pendingReview" : "draft"
    });
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
      developerId: user?.id ?? "unknown-user",
      developerName: user?.name ?? "Unknown Developer",
      integrationPoints: formValue.integration.points,
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
    this.existingAppData = __spreadValues({}, app);
    this.isEditMode.set(true);
    this.appForm.patchValue({
      basicInfo: {
        name: app.name,
        shortDescription: app.shortDescription,
        description: app.description,
        iconUrl: app.iconUrl,
        healthCheckUrl: app.healthCheckUrl
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
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
      \u0275\u0275viewQuery(_c2, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.basicInfoStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.integrationPointsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.reviewStep = _t.first);
    }
  }, decls: 8, vars: 9, consts: [["basicInfoStep", ""], ["integrationPointsStep", ""], ["reviewStep", ""], [3, "visibleChange", "currentStepChange", "complete", "contentOnly", "visible", "header", "steps", "showSteps", "useWizardButtonsOnly", "currentStep", "loading"], [1, "p-4"], [1, "bg-surface-0", "border-left-3", "surface-border"], ["pTemplate", "content"], [1, "flex", "items-start", "gap-3"], [1, "pi", "pi-check-circle", "text-xl"], [1, "space-y-1"], [1, "text-lg", "font-semibold"], [1, "text-sm", "text-surface-800"], [1, "flex", "gap-2", "mt-2"], ["label", "View App", "icon", "pi pi-eye", "size", "small", 3, "onClick"], ["label", "Back to More Apps", "icon", "pi pi-arrow-left", "severity", "secondary", "size", "small", 3, "onClick"], [1, "text-xl", "font-semibold", "mb-4"], [3, "formGroup"], ["formGroupName", "basicInfo", 1, "space-y-4"], ["for", "app-name", 1, "block", "text-sm", "font-medium", "mb-1"], ["id", "app-name", "pInputText", "", "formControlName", "name", "type", "text", 1, "w-full"], [1, "p-error"], ["for", "app-short-desc", 1, "block", "text-sm", "font-medium", "mb-1"], ["id", "app-short-desc", "pInputText", "", "formControlName", "shortDescription", "type", "text", "placeholder", "Brief summary (max 100 chars)", 1, "w-full"], ["for", "app-desc", 1, "block", "text-sm", "font-medium", "mb-1"], ["id", "app-desc", "pTextarea", "", "formControlName", "description", "rows", "5", 1, "w-full"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], ["for", "app-icon", 1, "block", "text-sm", "font-medium", "mb-1"], ["id", "app-icon", "pInputText", "", "formControlName", "iconUrl", "type", "text", "placeholder", "https://...", 1, "w-full"], ["for", "health-check-url", 1, "block", "text-sm", "font-medium", "mb-1"], ["id", "health-check-url", "pInputText", "", "formControlName", "healthCheckUrl", "type", "text", "placeholder", "https://...", 1, "w-full"], [1, "text-xl", "font-semibold", "mb-2"], [1, "text-sm", "border-b", "pb-2", "mb-4"], ["formGroupName", "integration", 1, "space-y-4"], [3, "class"], [1, "flex", "items-center", "mb-3"], [3, "onChange", "inputId", "binary", "ngModel", "ngModelOptions"], [1, "ml-2", "block", "text-sm", "font-medium", "cursor-pointer", 3, "for"], [1, "pl-7", "space-y-3", 3, "formGroup"], [1, "block", "text-xs", "font-semibold", "uppercase", "text-surface-500", "mb-1", 3, "for"], ["pInputText", "", "formControlName", "baseUrl", "type", "text", "placeholder", "https://api.yourapp.com/widget/", 1, "w-full", "text-sm", 3, "id"], [1, "mb-4", "shadow-sm", "border-surface-200"], [1, "bg-surface-0", "mb-4", "border-left-3", "border-orange-400", "surface-border"], [1, "p-3", "mb-4", "bg-red-50", "text-red-700", "rounded-md", "border-left-3", "border-red-500", "flex", "items-center", "gap-2"], [1, "flex", "gap-3", "justify-end", "mt-6", "pt-4", "border-t", "surface-border"], ["label", "Cancel", "icon", "pi pi-times", "severity", "secondary", 3, "onClick", "text"], [1, "flex-grow"], ["label", "Back", "icon", "pi pi-arrow-left", "severity", "secondary", 3, "onClick", "outlined"], ["label", "Save Draft", "icon", "pi pi-save", "severity", "secondary", 3, "onClick", "outlined", "loading", "disabled"], ["label", "Submit for Review", "icon", "pi pi-send", "severity", "primary", 3, "onClick", "loading", "disabled"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "space-y-4"], [1, "block", "text-xs", "font-semibold", "uppercase", "text-surface-500", "mb-1"], [1, "text-lg", "font-medium"], [1, "text-sm", "line-clamp-2"], [1, "space-y-2"], [1, "p-2", "bg-surface-50", "rounded-md", "border"], [1, "text-xs", "p-error", "italic"], [1, "text-xs"], [1, "text-sm", "font-bold"], [1, "text-[10px]", "break-all"], [1, "flex", "items-start", "gap-3", "text-sm"], [1, "pi", "pi-exclamation-triangle", "text-lg", "mt-0.5", "text-orange-400"], [1, "font-medium", "text-surface-900"], [1, "text-surface-700"], [1, "pi", "pi-times-circle"]], template: function AppCreateWizardComponent_Template(rf, ctx) {
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
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardComplete());
      })("visibleChange", function AppCreateWizardComponent_Template_app_wizard_visibleChange_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
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
  ], styles: ["\n\n/*# sourceMappingURL=app-create-wizard.component.css.map */"] });
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
              <div>
                <span
                  class="block text-xs font-semibold uppercase text-surface-500 mb-1"
                  >App Name</span
                >
                <span class="text-lg font-medium">{{
                  formValue()?.basicInfo?.name
                }}</span>
              </div>
              <div>
                <span
                  class="block text-xs font-semibold uppercase text-surface-500 mb-1"
                  >Short Description</span
                >
                <span class="text-sm line-clamp-2">{{
                  formValue()?.basicInfo?.shortDescription
                }}</span>
              </div>
              @if (formValue()?.basicInfo?.healthCheckUrl) {
                <div>
                  <span
                    class="block text-xs font-semibold uppercase text-surface-500 mb-1"
                    >Health Check</span
                  >
                  <code class="text-xs">{{
                    formValue()?.basicInfo?.healthCheckUrl
                  }}</code>
                </div>
              }
            </div>

            <div class="space-y-4">
              <div>
                <span
                  class="block text-xs font-semibold uppercase text-surface-500 mb-1"
                  >Integrations</span
                >
                <div class="space-y-2">
                  @for (
                    point of formValue()?.integration?.points;
                    track $index
                  ) {
                    <div class="p-2 bg-surface-50 rounded-md border">
                      <p class="text-sm font-bold">{{ point.screenId }}</p>
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
  }], reviewStep: [{
    type: ViewChild,
    args: ["reviewStep"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppCreateWizardComponent, { className: "AppCreateWizardComponent", filePath: "src/app/features/app-store/pages/app-create-wizard/app-create-wizard.component.ts", lineNumber: 73 });
})();
export {
  AppCreateWizardComponent
};
//# sourceMappingURL=chunk-7E2SCGDB.js.map
