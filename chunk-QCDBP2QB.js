import {
  Step,
  StepItem,
  StepPanel,
  Stepper,
  StepperModule
} from "./chunk-227XKAZG.js";
import {
  Tab,
  TabList,
  TabPanel,
  Tabs,
  TabsModule
} from "./chunk-2YBWOZSJ.js";
import "./chunk-JE2L2HEP.js";
import "./chunk-7BSAABDZ.js";
import {
  Button,
  ButtonModule,
  CommonModule,
  Location,
  NgTemplateOutlet
} from "./chunk-T7ZENNNQ.js";
import {
  Component,
  ViewChild,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-JFHDN3YU.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/app-store/pages/app-store-docs/app-store-docs.component.ts
var _c0 = ["overviewStep"];
var _c1 = ["basicInfoStep"];
var _c2 = ["publishingStep"];
var _c3 = ["integrationStep"];
var _c4 = ["permissionsStep"];
var _c5 = ["submitStep"];
var _c6 = ["protocolStep"];
var _c7 = ["contextStep"];
var _c8 = ["apiStep"];
var _c9 = ["securityStep"];
var _c10 = ["constraintsStep"];
var _c11 = (a0) => ({ $implicit: a0 });
var _forTrack0 = ($index, $item) => $item.value;
function AppStoreDocsComponent_Conditional_16_For_2_ng_template_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AppStoreDocsComponent_Conditional_16_For_2_ng_template_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 31);
    \u0275\u0275listener("onClick", function AppStoreDocsComponent_Conditional_16_For_2_ng_template_4_Conditional_3_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r3);
      const step_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.prevStep(ctx_r1.createSteps(), step_r4.value, ctx_r1.createCurrentStep.set.bind(ctx_r1.createCurrentStep)));
    });
    \u0275\u0275elementEnd();
  }
}
function AppStoreDocsComponent_Conditional_16_For_2_ng_template_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 32);
    \u0275\u0275listener("onClick", function AppStoreDocsComponent_Conditional_16_For_2_ng_template_4_Conditional_4_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r5);
      const step_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextStep(ctx_r1.createSteps(), step_r4.value, ctx_r1.createCurrentStep.set.bind(ctx_r1.createCurrentStep)));
    });
    \u0275\u0275elementEnd();
  }
}
function AppStoreDocsComponent_Conditional_16_For_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, AppStoreDocsComponent_Conditional_16_For_2_ng_template_4_ng_container_1_Template, 1, 0, "ng-container", 27);
    \u0275\u0275elementStart(2, "div", 28);
    \u0275\u0275conditionalCreate(3, AppStoreDocsComponent_Conditional_16_For_2_ng_template_4_Conditional_3_Template, 1, 0, "p-button", 29);
    \u0275\u0275conditionalCreate(4, AppStoreDocsComponent_Conditional_16_For_2_ng_template_4_Conditional_4_Template, 1, 0, "p-button", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", step_r4.content)("ngTemplateOutletContext", \u0275\u0275pureFunction1(4, _c11, step_r4));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.isFirst(ctx_r1.createSteps(), step_r4.value) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isLast(ctx_r1.createSteps(), step_r4.value) ? 4 : -1);
  }
}
function AppStoreDocsComponent_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-step-item", 25)(1, "p-step");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-step-panel");
    \u0275\u0275template(4, AppStoreDocsComponent_Conditional_16_For_2_ng_template_4_Template, 5, 6, "ng-template", null, 11, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r4 = ctx.$implicit;
    \u0275\u0275property("value", step_r4.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r4.header);
  }
}
function AppStoreDocsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-stepper", 24);
    \u0275\u0275listener("valueChange", function AppStoreDocsComponent_Conditional_16_Template_p_stepper_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event !== void 0 && ctx_r1.createCurrentStep.set($event));
    });
    \u0275\u0275repeaterCreate(1, AppStoreDocsComponent_Conditional_16_For_2_Template, 6, 2, "p-step-item", 25, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r1.createCurrentStep())("linear", false);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.createSteps());
  }
}
function AppStoreDocsComponent_Conditional_19_For_2_ng_template_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AppStoreDocsComponent_Conditional_19_For_2_ng_template_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 31);
    \u0275\u0275listener("onClick", function AppStoreDocsComponent_Conditional_19_For_2_ng_template_4_Conditional_3_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r7);
      const step_r8 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.prevStep(ctx_r1.devSteps(), step_r8.value, ctx_r1.devCurrentStep.set.bind(ctx_r1.devCurrentStep)));
    });
    \u0275\u0275elementEnd();
  }
}
function AppStoreDocsComponent_Conditional_19_For_2_ng_template_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 32);
    \u0275\u0275listener("onClick", function AppStoreDocsComponent_Conditional_19_For_2_ng_template_4_Conditional_4_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r9);
      const step_r8 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextStep(ctx_r1.devSteps(), step_r8.value, ctx_r1.devCurrentStep.set.bind(ctx_r1.devCurrentStep)));
    });
    \u0275\u0275elementEnd();
  }
}
function AppStoreDocsComponent_Conditional_19_For_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, AppStoreDocsComponent_Conditional_19_For_2_ng_template_4_ng_container_1_Template, 1, 0, "ng-container", 27);
    \u0275\u0275elementStart(2, "div", 28);
    \u0275\u0275conditionalCreate(3, AppStoreDocsComponent_Conditional_19_For_2_ng_template_4_Conditional_3_Template, 1, 0, "p-button", 29);
    \u0275\u0275conditionalCreate(4, AppStoreDocsComponent_Conditional_19_For_2_ng_template_4_Conditional_4_Template, 1, 0, "p-button", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", step_r8.content)("ngTemplateOutletContext", \u0275\u0275pureFunction1(4, _c11, step_r8));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.isFirst(ctx_r1.devSteps(), step_r8.value) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isLast(ctx_r1.devSteps(), step_r8.value) ? 4 : -1);
  }
}
function AppStoreDocsComponent_Conditional_19_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-step-item", 25)(1, "p-step");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-step-panel");
    \u0275\u0275template(4, AppStoreDocsComponent_Conditional_19_For_2_ng_template_4_Template, 5, 6, "ng-template", null, 11, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r8 = ctx.$implicit;
    \u0275\u0275property("value", step_r8.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r8.header);
  }
}
function AppStoreDocsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-stepper", 24);
    \u0275\u0275listener("valueChange", function AppStoreDocsComponent_Conditional_19_Template_p_stepper_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event !== void 0 && ctx_r1.devCurrentStep.set($event));
    });
    \u0275\u0275repeaterCreate(1, AppStoreDocsComponent_Conditional_19_For_2_Template, 6, 2, "p-step-item", 25, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r1.devCurrentStep())("linear", false);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.devSteps());
  }
}
function AppStoreDocsComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "h2");
    \u0275\u0275text(2, "What is the App Store?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " The CypherView App Store lets you build and publish web apps that embed directly inside the CypherView platform. Your app is a standard web page hosted on your own server \u2014 CypherView loads it in an iframe and passes contextual data to it. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Platform Support");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Not all integration points are available on every platform:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "table")(10, "thead")(11, "tr")(12, "th");
    \u0275\u0275text(13, "Integration Point");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Web");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Flutter (Mobile)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody")(19, "tr")(20, "td")(21, "code");
    \u0275\u0275text(22, "tripDetails");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td");
    \u0275\u0275text(26, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "tr")(28, "td")(29, "code");
    \u0275\u0275text(30, "positionActivityStats");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "td");
    \u0275\u0275text(32, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td");
    \u0275\u0275text(34, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "tr")(36, "td")(37, "code");
    \u0275\u0275text(38, "appSidebar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "td");
    \u0275\u0275text(40, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "td");
    \u0275\u0275text(42, "\u2014");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "h2");
    \u0275\u0275text(44, "Before you start, you'll need:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "ul")(46, "li");
    \u0275\u0275text(47, "A hosted ");
    \u0275\u0275elementStart(48, "strong");
    \u0275\u0275text(49, "HTTPS endpoint");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50, " \u2014 the URL CypherView will load in an iframe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "li");
    \u0275\u0275text(52, "An ");
    \u0275\u0275elementStart(53, "strong");
    \u0275\u0275text(54, "icon image");
    \u0275\u0275elementEnd();
    \u0275\u0275text(55, " accessible via HTTPS (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "li");
    \u0275\u0275text(57, "A ");
    \u0275\u0275elementStart(58, "strong");
    \u0275\u0275text(59, "health check URL");
    \u0275\u0275elementEnd();
    \u0275\u0275text(60, " that returns ");
    \u0275\u0275elementStart(61, "code");
    \u0275\u0275text(62, "200");
    \u0275\u0275elementEnd();
    \u0275\u0275text(63, " (optional but recommended)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "blockquote");
    \u0275\u0275text(65, "The app creation wizard is at ");
    \u0275\u0275elementStart(66, "strong");
    \u0275\u0275text(67, "/app-store/editor");
    \u0275\u0275elementEnd();
    \u0275\u0275text(68, " or via ");
    \u0275\u0275elementStart(69, "strong");
    \u0275\u0275text(70, "Create App");
    \u0275\u0275elementEnd();
    \u0275\u0275text(71, " on your Creator Dashboard.");
    \u0275\u0275elementEnd()();
  }
}
function AppStoreDocsComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "h2");
    \u0275\u0275text(2, "Basic Info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "This step defines your app's identity in the marketplace.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "table")(6, "thead")(7, "tr")(8, "th");
    \u0275\u0275text(9, "Field");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Required");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Notes");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody")(15, "tr")(16, "td")(17, "strong");
    \u0275\u0275text(18, "Name");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22, "Display name shown in listings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "tr")(24, "td")(25, "strong");
    \u0275\u0275text(26, "Short Description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275text(28, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td");
    \u0275\u0275text(30, "One-liner (max 100 characters)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "tr")(32, "td")(33, "strong");
    \u0275\u0275text(34, "Description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "td");
    \u0275\u0275text(36, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "td");
    \u0275\u0275text(38, "Full description on the app detail page");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "tr")(40, "td")(41, "strong");
    \u0275\u0275text(42, "Icon URL");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "td");
    \u0275\u0275text(44, "No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "td");
    \u0275\u0275text(46, "HTTPS URL to your app icon; defaults to a placeholder");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "tr")(48, "td")(49, "strong");
    \u0275\u0275text(50, "Health Check URL");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "td");
    \u0275\u0275text(52, "No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "td");
    \u0275\u0275text(54, "HTTPS endpoint pinged to verify your app is reachable");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(55, "blockquote")(56, "strong");
    \u0275\u0275text(57, "Health Check URL");
    \u0275\u0275elementEnd();
    \u0275\u0275text(58, " \u2014 CypherView sends a ");
    \u0275\u0275elementStart(59, "code");
    \u0275\u0275text(60, "HEAD");
    \u0275\u0275elementEnd();
    \u0275\u0275text(61, ' request to this URL before loading your app on mobile. If it fails or times out (5s), users see an "unavailable" tile with a retry button instead of your app. ');
    \u0275\u0275elementEnd()();
  }
}
function AppStoreDocsComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "h2");
    \u0275\u0275text(2, "Visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Controls who can discover and install your app.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "table")(6, "thead")(7, "tr")(8, "th");
    \u0275\u0275text(9, "Option");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Description");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody")(13, "tr")(14, "td")(15, "code");
    \u0275\u0275text(16, "global");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18, "Listed publicly \u2014 anyone can find and install it");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "tr")(20, "td")(21, "code");
    \u0275\u0275text(22, "ourOperations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24, "Visible only within your own organisation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "tr")(26, "td")(27, "code");
    \u0275\u0275text(28, "unlisted");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td");
    \u0275\u0275text(30, "Hidden from marketplace; installable via invite only");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "h2");
    \u0275\u0275text(32, "Fee Model");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "table")(34, "thead")(35, "tr")(36, "th");
    \u0275\u0275text(37, "Option");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th");
    \u0275\u0275text(39, "Description");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "tbody")(41, "tr")(42, "td")(43, "strong");
    \u0275\u0275text(44, "Free");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "td");
    \u0275\u0275text(46, "No charge to installers");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "tr")(48, "td")(49, "strong");
    \u0275\u0275text(50, "Per Installation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "td");
    \u0275\u0275text(52, "Fixed ZAR amount charged once when an org installs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "tr")(54, "td")(55, "strong");
    \u0275\u0275text(56, "Per Active Device");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "td");
    \u0275\u0275text(58, "ZAR amount \xD7 number of active devices in the org");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(59, "blockquote");
    \u0275\u0275text(60, "A fee amount is required if you select a paid model. The wizard shows a live cost preview as you type.");
    \u0275\u0275elementEnd()();
  }
}
function AppStoreDocsComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "h2");
    \u0275\u0275text(2, "Integration Points");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Integration points define ");
    \u0275\u0275elementStart(5, "em");
    \u0275\u0275text(6, "where");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " your app embeds inside CypherView. You must select at least one.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "table")(9, "thead")(10, "tr")(11, "th");
    \u0275\u0275text(12, "Screen ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Display Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Web");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Flutter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Description");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody")(22, "tr")(23, "td")(24, "code");
    \u0275\u0275text(25, "tripDetails");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td");
    \u0275\u0275text(27, "Trip Details Screen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "td");
    \u0275\u0275text(29, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td");
    \u0275\u0275text(31, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "td");
    \u0275\u0275text(33, "Embedded inside a specific trip's detail view");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "tr")(35, "td")(36, "code");
    \u0275\u0275text(37, "positionActivityStats");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "td");
    \u0275\u0275text(39, "Vehicle Activity Screen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "td");
    \u0275\u0275text(41, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "td");
    \u0275\u0275text(43, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "td");
    \u0275\u0275text(45, "Embedded in the vehicle activity stats panel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "tr")(47, "td")(48, "code");
    \u0275\u0275text(49, "appSidebar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "td");
    \u0275\u0275text(51, "App Sidebar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "td");
    \u0275\u0275text(53, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "td");
    \u0275\u0275text(55, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "td");
    \u0275\u0275text(57, "Persistent sidebar in the main navigation (web only)");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(58, "p");
    \u0275\u0275text(59, "For each screen you select, you must provide a ");
    \u0275\u0275elementStart(60, "strong");
    \u0275\u0275text(61, "Base URL");
    \u0275\u0275elementEnd();
    \u0275\u0275text(62, " \u2014 the HTTPS URL CypherView loads in an iframe for that screen.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "h2");
    \u0275\u0275text(64, "Context data passed to your app");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "p");
    \u0275\u0275text(66, "CypherView delivers context via ");
    \u0275\u0275elementStart(67, "code");
    \u0275\u0275text(68, "postMessage");
    \u0275\u0275elementEnd();
    \u0275\u0275text(69, " after your iframe signals ");
    \u0275\u0275elementStart(70, "code");
    \u0275\u0275text(71, "READY");
    \u0275\u0275elementEnd();
    \u0275\u0275text(72, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "table")(74, "thead")(75, "tr")(76, "th");
    \u0275\u0275text(77, "Screen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "th");
    \u0275\u0275text(79, "Data passed");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(80, "tbody")(81, "tr")(82, "td")(83, "code");
    \u0275\u0275text(84, "tripDetails");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "td")(86, "code");
    \u0275\u0275text(87, "tripId");
    \u0275\u0275elementEnd();
    \u0275\u0275text(88, ", ");
    \u0275\u0275elementStart(89, "code");
    \u0275\u0275text(90, "assetId");
    \u0275\u0275elementEnd();
    \u0275\u0275text(91, ", ");
    \u0275\u0275elementStart(92, "code");
    \u0275\u0275text(93, "startDate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(94, ", ");
    \u0275\u0275elementStart(95, "code");
    \u0275\u0275text(96, "endDate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(97, ", ");
    \u0275\u0275elementStart(98, "code");
    \u0275\u0275text(99, "vehicleName");
    \u0275\u0275elementEnd();
    \u0275\u0275text(100, ", ");
    \u0275\u0275elementStart(101, "code");
    \u0275\u0275text(102, "accessToken");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(103, "tr")(104, "td")(105, "code");
    \u0275\u0275text(106, "positionActivityStats");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "td")(108, "code");
    \u0275\u0275text(109, "assetId");
    \u0275\u0275elementEnd();
    \u0275\u0275text(110, ", ");
    \u0275\u0275elementStart(111, "code");
    \u0275\u0275text(112, "startDate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(113, ", ");
    \u0275\u0275elementStart(114, "code");
    \u0275\u0275text(115, "endDate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(116, ", ");
    \u0275\u0275elementStart(117, "code");
    \u0275\u0275text(118, "accessToken");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(119, "tr")(120, "td")(121, "code");
    \u0275\u0275text(122, "appSidebar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(123, "td")(124, "code");
    \u0275\u0275text(125, "accessToken");
    \u0275\u0275elementEnd()()()()()();
  }
}
function AppStoreDocsComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "h2");
    \u0275\u0275text(2, "Permissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Declare what CypherView data your app needs. These are shown to users at install time. Format: ");
    \u0275\u0275elementStart(5, "code");
    \u0275\u0275text(6, "resource:action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8, "Fleet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "table")(10, "thead")(11, "tr")(12, "th");
    \u0275\u0275text(13, "Resource");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Available Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody")(17, "tr")(18, "td")(19, "code");
    \u0275\u0275text(20, "asset");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td")(22, "code");
    \u0275\u0275text(23, "list");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, ", ");
    \u0275\u0275elementStart(25, "code");
    \u0275\u0275text(26, "get");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, ", ");
    \u0275\u0275elementStart(28, "code");
    \u0275\u0275text(29, "create");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, ", ");
    \u0275\u0275elementStart(31, "code");
    \u0275\u0275text(32, "update");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "tr")(34, "td")(35, "code");
    \u0275\u0275text(36, "device");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "td")(38, "code");
    \u0275\u0275text(39, "list");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, ", ");
    \u0275\u0275elementStart(41, "code");
    \u0275\u0275text(42, "get");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43, ", ");
    \u0275\u0275elementStart(44, "code");
    \u0275\u0275text(45, "create");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46, ", ");
    \u0275\u0275elementStart(47, "code");
    \u0275\u0275text(48, "update");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "tr")(50, "td")(51, "code");
    \u0275\u0275text(52, "driver");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "td")(54, "code");
    \u0275\u0275text(55, "list");
    \u0275\u0275elementEnd();
    \u0275\u0275text(56, ", ");
    \u0275\u0275elementStart(57, "code");
    \u0275\u0275text(58, "get");
    \u0275\u0275elementEnd();
    \u0275\u0275text(59, ", ");
    \u0275\u0275elementStart(60, "code");
    \u0275\u0275text(61, "create");
    \u0275\u0275elementEnd();
    \u0275\u0275text(62, ", ");
    \u0275\u0275elementStart(63, "code");
    \u0275\u0275text(64, "update");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "tr")(66, "td")(67, "code");
    \u0275\u0275text(68, "trip");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "td")(70, "code");
    \u0275\u0275text(71, "list");
    \u0275\u0275elementEnd();
    \u0275\u0275text(72, ", ");
    \u0275\u0275elementStart(73, "code");
    \u0275\u0275text(74, "get");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(75, "tr")(76, "td")(77, "code");
    \u0275\u0275text(78, "position");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "td")(80, "code");
    \u0275\u0275text(81, "list");
    \u0275\u0275elementEnd();
    \u0275\u0275text(82, ", ");
    \u0275\u0275elementStart(83, "code");
    \u0275\u0275text(84, "get");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(85, "h3");
    \u0275\u0275text(86, "Configuration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "table")(88, "thead")(89, "tr")(90, "th");
    \u0275\u0275text(91, "Resource");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "th");
    \u0275\u0275text(93, "Available Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(94, "tbody")(95, "tr")(96, "td")(97, "code");
    \u0275\u0275text(98, "assettype");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "td")(100, "code");
    \u0275\u0275text(101, "list");
    \u0275\u0275elementEnd();
    \u0275\u0275text(102, ", ");
    \u0275\u0275elementStart(103, "code");
    \u0275\u0275text(104, "get");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(105, "tr")(106, "td")(107, "code");
    \u0275\u0275text(108, "assetcategory");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "td")(110, "code");
    \u0275\u0275text(111, "list");
    \u0275\u0275elementEnd();
    \u0275\u0275text(112, ", ");
    \u0275\u0275elementStart(113, "code");
    \u0275\u0275text(114, "get");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(115, "tr")(116, "td")(117, "code");
    \u0275\u0275text(118, "devicetype");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(119, "td")(120, "code");
    \u0275\u0275text(121, "list");
    \u0275\u0275elementEnd();
    \u0275\u0275text(122, ", ");
    \u0275\u0275elementStart(123, "code");
    \u0275\u0275text(124, "get");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(125, "tr")(126, "td")(127, "code");
    \u0275\u0275text(128, "geofence");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(129, "td")(130, "code");
    \u0275\u0275text(131, "list");
    \u0275\u0275elementEnd();
    \u0275\u0275text(132, ", ");
    \u0275\u0275elementStart(133, "code");
    \u0275\u0275text(134, "get");
    \u0275\u0275elementEnd();
    \u0275\u0275text(135, ", ");
    \u0275\u0275elementStart(136, "code");
    \u0275\u0275text(137, "create");
    \u0275\u0275elementEnd();
    \u0275\u0275text(138, ", ");
    \u0275\u0275elementStart(139, "code");
    \u0275\u0275text(140, "update");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(141, "h3");
    \u0275\u0275text(142, "Reporting");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "table")(144, "thead")(145, "tr")(146, "th");
    \u0275\u0275text(147, "Resource");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(148, "th");
    \u0275\u0275text(149, "Available Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(150, "tbody")(151, "tr")(152, "td")(153, "code");
    \u0275\u0275text(154, "report");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(155, "td")(156, "code");
    \u0275\u0275text(157, "list");
    \u0275\u0275elementEnd();
    \u0275\u0275text(158, ", ");
    \u0275\u0275elementStart(159, "code");
    \u0275\u0275text(160, "get");
    \u0275\u0275elementEnd();
    \u0275\u0275text(161, ", ");
    \u0275\u0275elementStart(162, "code");
    \u0275\u0275text(163, "run");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(164, "tr")(165, "td")(166, "code");
    \u0275\u0275text(167, "schedule");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(168, "td")(169, "code");
    \u0275\u0275text(170, "list");
    \u0275\u0275elementEnd();
    \u0275\u0275text(171, ", ");
    \u0275\u0275elementStart(172, "code");
    \u0275\u0275text(173, "get");
    \u0275\u0275elementEnd();
    \u0275\u0275text(174, ", ");
    \u0275\u0275elementStart(175, "code");
    \u0275\u0275text(176, "create");
    \u0275\u0275elementEnd();
    \u0275\u0275text(177, ", ");
    \u0275\u0275elementStart(178, "code");
    \u0275\u0275text(179, "update");
    \u0275\u0275elementEnd();
    \u0275\u0275text(180, ", ");
    \u0275\u0275elementStart(181, "code");
    \u0275\u0275text(182, "schedule");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(183, "tr")(184, "td")(185, "code");
    \u0275\u0275text(186, "alert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(187, "td")(188, "code");
    \u0275\u0275text(189, "list");
    \u0275\u0275elementEnd();
    \u0275\u0275text(190, ", ");
    \u0275\u0275elementStart(191, "code");
    \u0275\u0275text(192, "get");
    \u0275\u0275elementEnd();
    \u0275\u0275text(193, ", ");
    \u0275\u0275elementStart(194, "code");
    \u0275\u0275text(195, "create");
    \u0275\u0275elementEnd();
    \u0275\u0275text(196, ", ");
    \u0275\u0275elementStart(197, "code");
    \u0275\u0275text(198, "update");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(199, "blockquote");
    \u0275\u0275text(200, "Selecting certain resources auto-grants read access on related ones \u2014 e.g. selecting ");
    \u0275\u0275elementStart(201, "code");
    \u0275\u0275text(202, "trip");
    \u0275\u0275elementEnd();
    \u0275\u0275text(203, " also implies ");
    \u0275\u0275elementStart(204, "code");
    \u0275\u0275text(205, "asset");
    \u0275\u0275elementEnd();
    \u0275\u0275text(206, ", ");
    \u0275\u0275elementStart(207, "code");
    \u0275\u0275text(208, "driver");
    \u0275\u0275elementEnd();
    \u0275\u0275text(209, ", and ");
    \u0275\u0275elementStart(210, "code");
    \u0275\u0275text(211, "position");
    \u0275\u0275elementEnd();
    \u0275\u0275text(212, ".");
    \u0275\u0275elementEnd()();
  }
}
function AppStoreDocsComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "h2");
    \u0275\u0275text(2, "Review & Submit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "The final step shows a summary of all your inputs. You have two options:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Save as Draft");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Saves your app without submitting for review. Your app is created but invisible in the marketplace. Use this to continue editing later.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h3");
    \u0275\u0275text(10, "Submit for Review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12, "Submits your app to the CypherView team. A dialog appears asking for:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ul")(14, "li")(15, "strong");
    \u0275\u0275text(16, "Changelog");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " \u2014 describe what's in this version (required)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "li")(19, "strong");
    \u0275\u0275text(20, "Version Bump");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " (for updates after first approval): ");
    \u0275\u0275elementStart(22, "ul")(23, "li")(24, "code");
    \u0275\u0275text(25, "patch");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " \u2014 bug fixes, no new features");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "li")(28, "code");
    \u0275\u0275text(29, "minor");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " \u2014 new features, backward compatible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "li")(32, "code");
    \u0275\u0275text(33, "major");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " \u2014 breaking changes");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "h2");
    \u0275\u0275text(36, "After Submission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "p");
    \u0275\u0275text(38, "Review takes ");
    \u0275\u0275elementStart(39, "strong");
    \u0275\u0275text(40, "24\u201348 hours");
    \u0275\u0275elementEnd();
    \u0275\u0275text(41, ". Status flow:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "pre");
    \u0275\u0275text(43, "draft \u2192 pendingReview \u2192 approved\n                       \u2192 changesRequested \u2192 pendingReview (resubmit)\n                       \u2192 rejected");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "blockquote");
    \u0275\u0275text(45, " Once approved, you receive a ");
    \u0275\u0275elementStart(46, "strong");
    \u0275\u0275text(47, "clientId");
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, " and ");
    \u0275\u0275elementStart(49, "strong");
    \u0275\u0275text(50, "clientSecret");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, " \u2014 shown ");
    \u0275\u0275elementStart(52, "strong");
    \u0275\u0275text(53, "once");
    \u0275\u0275elementEnd();
    \u0275\u0275text(54, " after approval. Store them immediately. These are your OAuth credentials for calling the CypherView API from your backend. ");
    \u0275\u0275elementEnd()();
  }
}
function AppStoreDocsComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "h2");
    \u0275\u0275text(2, "How It Works");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Your app is a standard web page hosted on your own server. CypherView loads it inside an ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "iframe");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " and delivers contextual data (trip ID, asset ID, access token, etc.) via the browser's ");
    \u0275\u0275elementStart(8, "code");
    \u0275\u0275text(9, "postMessage");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " API. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12, "You do not need any CypherView SDK \u2014 just a web page that speaks the postMessage protocol.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "h2");
    \u0275\u0275text(14, "The Handshake");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ol")(16, "li");
    \u0275\u0275text(17, "CypherView loads your ");
    \u0275\u0275elementStart(18, "code");
    \u0275\u0275text(19, "baseUrl");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " in an iframe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "li");
    \u0275\u0275text(22, "Your app posts a ");
    \u0275\u0275elementStart(23, "code");
    \u0275\u0275text(24, "READY");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " message to the parent window");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "li");
    \u0275\u0275text(27, "CypherView responds with a ");
    \u0275\u0275elementStart(28, "code");
    \u0275\u0275text(29, "WIDGET_CONFIG");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " message containing context data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "li");
    \u0275\u0275text(32, "Your app renders using that data");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "blockquote");
    \u0275\u0275text(34, "CypherView may re-send ");
    \u0275\u0275elementStart(35, "code");
    \u0275\u0275text(36, "WIDGET_CONFIG");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, " without reloading your iframe when the user navigates to a different trip or asset. Handle this \u2014 don't assume config is only received once.");
    \u0275\u0275elementEnd()();
  }
}
function AppStoreDocsComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "h2");
    \u0275\u0275text(2, "postMessage Protocol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Step 1 \u2014 Signal ready");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Once your page has loaded, post a ");
    \u0275\u0275elementStart(7, "code");
    \u0275\u0275text(8, "READY");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " message:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "pre")(11, "code");
    \u0275\u0275text(12, "window.parent.postMessage({ type: 'READY' }, '*');");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "h3");
    \u0275\u0275text(14, "Step 2 \u2014 Receive config");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16, "Listen for ");
    \u0275\u0275elementStart(17, "code");
    \u0275\u0275text(18, "WIDGET_CONFIG");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " from CypherView:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "pre")(21, "code");
    \u0275\u0275text(22, "window.addEventListener('message', (event) => {\n  if (event.data?.type !== 'WIDGET_CONFIG') return;\n\n  const {\n    tripId,       // string | undefined\n    assetId,      // string | undefined\n    startDate,    // string | undefined  (ISO 8601)\n    endDate,      // string | undefined  (ISO 8601)\n    vehicleName,  // string | undefined\n    accessToken,  // string | undefined\n  } = event.data.payload;\n\n  renderApp(event.data.payload);\n});");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "h3");
    \u0275\u0275text(24, "Minimal example");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "pre")(26, "code");
    \u0275\u0275text(27, "window.addEventListener('message', (event) => {\n  if (event.data?.type !== 'WIDGET_CONFIG') return;\n  const { tripId, accessToken } = event.data.payload;\n  document.getElementById('content').textContent = `Trip: ${tripId}`;\n});\n\n// Signal ready after registering the listener\nwindow.parent.postMessage({ type: 'READY' }, '*');");
    \u0275\u0275elementEnd()()();
  }
}
function AppStoreDocsComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "h2");
    \u0275\u0275text(2, "Context Data per Screen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "All fields are optional \u2014 guard against ");
    \u0275\u0275elementStart(5, "code");
    \u0275\u0275text(6, "undefined");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, ".");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "table")(9, "thead")(10, "tr")(11, "th");
    \u0275\u0275text(12, "Field");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Available on");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody")(18, "tr")(19, "td")(20, "code");
    \u0275\u0275text(21, "tripId");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275text(23, "string");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td")(25, "code");
    \u0275\u0275text(26, "tripDetails");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "tr")(28, "td")(29, "code");
    \u0275\u0275text(30, "assetId");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "td");
    \u0275\u0275text(32, "string");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td")(34, "code");
    \u0275\u0275text(35, "tripDetails");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, ", ");
    \u0275\u0275elementStart(37, "code");
    \u0275\u0275text(38, "positionActivityStats");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "tr")(40, "td")(41, "code");
    \u0275\u0275text(42, "startDate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "td");
    \u0275\u0275text(44, "string (ISO 8601)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "td")(46, "code");
    \u0275\u0275text(47, "tripDetails");
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, ", ");
    \u0275\u0275elementStart(49, "code");
    \u0275\u0275text(50, "positionActivityStats");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "tr")(52, "td")(53, "code");
    \u0275\u0275text(54, "endDate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "td");
    \u0275\u0275text(56, "string (ISO 8601)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "td")(58, "code");
    \u0275\u0275text(59, "tripDetails");
    \u0275\u0275elementEnd();
    \u0275\u0275text(60, ", ");
    \u0275\u0275elementStart(61, "code");
    \u0275\u0275text(62, "positionActivityStats");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "tr")(64, "td")(65, "code");
    \u0275\u0275text(66, "vehicleName");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "td");
    \u0275\u0275text(68, "string");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "td")(70, "code");
    \u0275\u0275text(71, "tripDetails");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(72, "tr")(73, "td")(74, "code");
    \u0275\u0275text(75, "accessToken");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "td");
    \u0275\u0275text(77, "string");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "td");
    \u0275\u0275text(79, "all screens");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(80, "h2");
    \u0275\u0275text(81, "Context Updates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "p");
    \u0275\u0275text(83, " CypherView may re-send ");
    \u0275\u0275elementStart(84, "code");
    \u0275\u0275text(85, "WIDGET_CONFIG");
    \u0275\u0275elementEnd();
    \u0275\u0275text(86, " without reloading your iframe when the user navigates between trips or assets. Make sure your listener updates the UI on each call. ");
    \u0275\u0275elementEnd()();
  }
}
function AppStoreDocsComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "h2");
    \u0275\u0275text(2, "Using the Access Token");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "The ");
    \u0275\u0275elementStart(5, "code");
    \u0275\u0275text(6, "accessToken");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " is a Bearer token scoped to the permissions your app declared at registration. Use it to call the CypherView API:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "pre")(9, "code");
    \u0275\u0275text(10, "const res = await fetch(\n  'https://api.cypherview.io/telemetrystore/trips/' + tripId,\n  { headers: { Authorization: `Bearer ${accessToken}` } }\n);");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "blockquote");
    \u0275\u0275text(12, " The token is tied to the installing organisation's session. Only resources covered by your declared permissions will be accessible \u2014 other requests return ");
    \u0275\u0275elementStart(13, "code");
    \u0275\u0275text(14, "403 Forbidden");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "h2");
    \u0275\u0275text(17, "clientId & clientSecret");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p");
    \u0275\u0275text(19, " After your app is approved, you receive a ");
    \u0275\u0275elementStart(20, "strong");
    \u0275\u0275text(21, "clientId");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " and ");
    \u0275\u0275elementStart(23, "strong");
    \u0275\u0275text(24, "clientSecret");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, ". These are OAuth credentials for authenticating your ");
    \u0275\u0275elementStart(26, "strong");
    \u0275\u0275text(27, "backend server");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " when calling the CypherView API on behalf of an installer \u2014 separate from the per-session ");
    \u0275\u0275elementStart(29, "code");
    \u0275\u0275text(30, "accessToken");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, ". ");
    \u0275\u0275elementEnd()();
  }
}
function AppStoreDocsComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "h2");
    \u0275\u0275text(2, "Security");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Validate ");
    \u0275\u0275elementStart(5, "code");
    \u0275\u0275text(6, "event.origin");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " in production to prevent other sites from sending fake config:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "pre")(9, "code");
    \u0275\u0275text(10, "const ALLOWED_ORIGIN = 'https://app.cypherview.io';\n\nwindow.addEventListener('message', (event) => {\n  if (event.origin !== ALLOWED_ORIGIN) return;\n  // safe to process\n});");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "ul")(12, "li");
    \u0275\u0275text(13, "Your ");
    \u0275\u0275elementStart(14, "code");
    \u0275\u0275text(15, "baseUrl");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " must use ");
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18, "HTTPS");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " \u2014 HTTP is rejected");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li");
    \u0275\u0275text(21, "Treat the ");
    \u0275\u0275elementStart(22, "code");
    \u0275\u0275text(23, "accessToken");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " as a short-lived credential \u2014 don't persist it");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "h2");
    \u0275\u0275text(26, "Health Check");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p");
    \u0275\u0275text(28, " If you provide a ");
    \u0275\u0275elementStart(29, "code");
    \u0275\u0275text(30, "healthCheckUrl");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, ", CypherView sends a ");
    \u0275\u0275elementStart(32, "code");
    \u0275\u0275text(33, "HEAD");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " request before loading your iframe (5-second timeout). Return ");
    \u0275\u0275elementStart(35, "code");
    \u0275\u0275text(36, "2xx");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, " to confirm your service is up. On failure, users see a retry tile. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "h2");
    \u0275\u0275text(39, "iframe Size Constraints");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "table")(41, "thead")(42, "tr")(43, "th");
    \u0275\u0275text(44, "Screen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th");
    \u0275\u0275text(46, "Height on Flutter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "th");
    \u0275\u0275text(48, "Width");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "tbody")(50, "tr")(51, "td")(52, "code");
    \u0275\u0275text(53, "tripDetails");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "td");
    \u0275\u0275text(55, "267px (fixed)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "td");
    \u0275\u0275text(57, "100%");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "tr")(59, "td")(60, "code");
    \u0275\u0275text(61, "positionActivityStats");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "td");
    \u0275\u0275text(63, "130px (fixed)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "td");
    \u0275\u0275text(65, "100%");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "tr")(67, "td")(68, "code");
    \u0275\u0275text(69, "appSidebar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "td");
    \u0275\u0275text(71, "Full height (web only)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "td");
    \u0275\u0275text(73, "Fixed sidebar width");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(74, "blockquote");
    \u0275\u0275text(75, "On web, heights are not fixed. On mobile, the heights above are enforced \u2014 design compact UIs for those screens.");
    \u0275\u0275elementEnd()();
  }
}
var AppStoreDocsComponent = class _AppStoreDocsComponent {
  // Create an App steps
  overviewStep;
  basicInfoStep;
  publishingStep;
  integrationStep;
  permissionsStep;
  submitStep;
  // Developer guide steps
  protocolStep;
  contextStep;
  apiStep;
  securityStep;
  constraintsStep;
  location = inject(Location);
  createSteps = signal([], ...ngDevMode ? [{ debugName: "createSteps" }] : (
    /* istanbul ignore next */
    []
  ));
  devSteps = signal([], ...ngDevMode ? [{ debugName: "devSteps" }] : (
    /* istanbul ignore next */
    []
  ));
  createCurrentStep = signal(1, ...ngDevMode ? [{ debugName: "createCurrentStep" }] : (
    /* istanbul ignore next */
    []
  ));
  devCurrentStep = signal(1, ...ngDevMode ? [{ debugName: "devCurrentStep" }] : (
    /* istanbul ignore next */
    []
  ));
  activeTab = signal("create", ...ngDevMode ? [{ debugName: "activeTab" }] : (
    /* istanbul ignore next */
    []
  ));
  ngAfterViewInit() {
    this.createSteps.set([
      { value: 1, header: "Overview", content: this.overviewStep, disableNext: false },
      { value: 2, header: "Basic Info", content: this.basicInfoStep, disableNext: false },
      { value: 3, header: "Publishing", content: this.publishingStep, disableNext: false },
      { value: 4, header: "Integration Points", content: this.integrationStep, disableNext: false },
      { value: 5, header: "Permissions", content: this.permissionsStep, disableNext: false },
      { value: 6, header: "Review & Submit", content: this.submitStep, disableNext: false }
    ]);
    this.devSteps.set([
      { value: 1, header: "How It Works", content: this.protocolStep, disableNext: false },
      { value: 2, header: "postMessage Protocol", content: this.contextStep, disableNext: false },
      { value: 3, header: "Context Data", content: this.apiStep, disableNext: false },
      { value: 4, header: "Using the API", content: this.securityStep, disableNext: false },
      { value: 5, header: "Security & Constraints", content: this.constraintsStep, disableNext: false }
    ]);
  }
  downloadDoc() {
    const file = this.activeTab() === "create" ? { path: "assets/docs/app-store-create-app.md", name: "app-store-create-app.md" } : { path: "assets/docs/app-store-developer-guide.md", name: "app-store-developer-guide.md" };
    const a = document.createElement("a");
    a.href = file.path;
    a.download = file.name;
    a.click();
  }
  goBack() {
    this.location.back();
  }
  prevStep(steps, current, setter) {
    const idx = steps.findIndex((s) => s.value === current);
    if (idx > 0)
      setter(steps[idx - 1].value);
  }
  nextStep(steps, current, setter) {
    const idx = steps.findIndex((s) => s.value === current);
    if (idx < steps.length - 1)
      setter(steps[idx + 1].value);
  }
  isFirst(steps, current) {
    return steps[0]?.value === current;
  }
  isLast(steps, current) {
    return steps[steps.length - 1]?.value === current;
  }
  static \u0275fac = function AppStoreDocsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppStoreDocsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppStoreDocsComponent, selectors: [["app-store-docs"]], viewQuery: function AppStoreDocsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5)(_c1, 5)(_c2, 5)(_c3, 5)(_c4, 5)(_c5, 5)(_c6, 5)(_c7, 5)(_c8, 5)(_c9, 5)(_c10, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overviewStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.basicInfoStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.publishingStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.integrationStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.permissionsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.submitStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.protocolStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contextStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.apiStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.securityStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.constraintsStep = _t.first);
    }
  }, decls: 42, vars: 5, consts: [["overviewStep", ""], ["basicInfoStep", ""], ["publishingStep", ""], ["integrationStep", ""], ["permissionsStep", ""], ["submitStep", ""], ["protocolStep", ""], ["contextStep", ""], ["apiStep", ""], ["securityStep", ""], ["constraintsStep", ""], ["content", ""], [1, "flex-none", "flex", "items-center", "justify-between", "px-6", "py-4", "border-b", "border-subtle", "bg-surface-0"], [1, "flex", "items-center", "gap-3"], ["icon", "pi pi-arrow-left", "severity", "secondary", "pTooltip", "Go back", 3, "onClick", "text"], [1, "text-lg", "font-semibold"], ["label", "Download", "icon", "pi pi-download", "severity", "secondary", 3, "onClick", "outlined"], [3, "valueChange", "value"], ["value", "create"], [1, "pi", "pi-plus-circle", "mr-2"], ["value", "dev"], [1, "pi", "pi-code", "mr-2"], [1, "overflow-y-auto", "p-6", "bg-surface-50"], [1, "w-full", 3, "value", "linear"], [1, "w-full", 3, "valueChange", "value", "linear"], [3, "value"], [1, "flex", "flex-col"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "flex", "gap-2", "px-6", "pb-6", "pt-2"], ["label", "Back", "icon", "pi pi-arrow-left", "severity", "secondary"], ["label", "Next", "icon", "pi pi-arrow-right", "iconPos", "right"], ["label", "Back", "icon", "pi pi-arrow-left", "severity", "secondary", 3, "onClick"], ["label", "Next", "icon", "pi pi-arrow-right", "iconPos", "right", 3, "onClick"], [1, "docs-content", "p-6", "max-w-3xl"]], template: function AppStoreDocsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "p-button", 14);
      \u0275\u0275listener("onClick", function AppStoreDocsComponent_Template_p_button_onClick_2_listener() {
        return ctx.goBack();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "h1", 15);
      \u0275\u0275text(4, "Integration Documentation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "p-button", 16);
      \u0275\u0275listener("onClick", function AppStoreDocsComponent_Template_p_button_onClick_5_listener() {
        return ctx.downloadDoc();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "p-tabs", 17);
      \u0275\u0275listener("valueChange", function AppStoreDocsComponent_Template_p_tabs_valueChange_6_listener($event) {
        return $event !== void 0 && ctx.activeTab.set($event.toString());
      });
      \u0275\u0275elementStart(7, "p-tablist")(8, "p-tab", 18);
      \u0275\u0275element(9, "i", 19);
      \u0275\u0275text(10, "Creating an App");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p-tab", 20);
      \u0275\u0275element(12, "i", 21);
      \u0275\u0275text(13, "Developer Guide");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "p-tabpanel", 18)(15, "div", 22);
      \u0275\u0275conditionalCreate(16, AppStoreDocsComponent_Conditional_16_Template, 3, 2, "p-stepper", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "p-tabpanel", 20)(18, "div", 22);
      \u0275\u0275conditionalCreate(19, AppStoreDocsComponent_Conditional_19_Template, 3, 2, "p-stepper", 23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(20, AppStoreDocsComponent_ng_template_20_Template, 72, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(22, AppStoreDocsComponent_ng_template_22_Template, 62, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(24, AppStoreDocsComponent_ng_template_24_Template, 61, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(26, AppStoreDocsComponent_ng_template_26_Template, 126, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(28, AppStoreDocsComponent_ng_template_28_Template, 213, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(30, AppStoreDocsComponent_ng_template_30_Template, 55, 0, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(32, AppStoreDocsComponent_ng_template_32_Template, 38, 0, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(34, AppStoreDocsComponent_ng_template_34_Template, 28, 0, "ng-template", null, 7, \u0275\u0275templateRefExtractor)(36, AppStoreDocsComponent_ng_template_36_Template, 87, 0, "ng-template", null, 8, \u0275\u0275templateRefExtractor)(38, AppStoreDocsComponent_ng_template_38_Template, 32, 0, "ng-template", null, 9, \u0275\u0275templateRefExtractor)(40, AppStoreDocsComponent_ng_template_40_Template, 76, 0, "ng-template", null, 10, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("text", true);
      \u0275\u0275advance(3);
      \u0275\u0275property("outlined", true);
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.activeTab());
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.createSteps().length > 0 ? 16 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.devSteps().length > 0 ? 19 : -1);
    }
  }, dependencies: [CommonModule, NgTemplateOutlet, ButtonModule, Button, StepperModule, Stepper, StepPanel, StepItem, Step, TabsModule, Tabs, TabPanel, TabList, Tab], styles: ["\n.docs-content[_ngcontent-%COMP%] {\n  line-height: 1.7;\n  color: var(--p-surface-800);\n}\n.docs-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  margin: 0 0 1.5rem;\n}\n.docs-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 2rem 0 0.75rem;\n  padding-bottom: 0.4rem;\n  border-bottom: 1px solid var(--p-surface-200);\n}\n.docs-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 1.5rem 0 0.5rem;\n}\n.docs-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.75rem 0;\n  font-size: 0.9rem;\n}\n.docs-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--p-primary-color);\n  text-decoration: underline;\n}\n.docs-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.docs-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  padding-left: 1.5rem;\n  margin: 0.75rem 0;\n  font-size: 0.9rem;\n}\n.docs-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0.3rem 0;\n}\n.docs-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 1rem 0;\n  font-size: 0.875rem;\n}\n.docs-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--p-surface-100);\n  font-weight: 600;\n  text-align: left;\n  padding: 0.5rem 0.75rem;\n  border: 1px solid var(--p-surface-200);\n}\n.docs-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid var(--p-surface-200);\n  vertical-align: top;\n}\n.docs-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even)   td[_ngcontent-%COMP%] {\n  background: var(--p-surface-50);\n}\n.docs-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: var(--p-surface-100);\n  border-radius: 4px;\n  padding: 0.15em 0.4em;\n  font-size: 0.85em;\n  font-family: monospace;\n}\n.docs-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background: var(--p-surface-100);\n  border-radius: 8px;\n  padding: 1rem;\n  overflow-x: auto;\n  margin: 1rem 0;\n}\n.docs-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: none;\n  padding: 0;\n}\n.docs-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--p-primary-color);\n  margin: 1rem 0;\n  padding: 0.5rem 1rem;\n  background: var(--p-surface-50);\n  font-style: italic;\n  font-size: 0.875rem;\n}\n.docs-content[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 1px solid var(--p-surface-200);\n  margin: 2rem 0;\n}\n/*# sourceMappingURL=app-store-docs.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppStoreDocsComponent, [{
    type: Component,
    args: [{ selector: "app-store-docs", imports: [CommonModule, ButtonModule, StepperModule, TabsModule], template: `<!-- Header -->
<div class="flex-none flex items-center justify-between px-6 py-4 border-b border-subtle bg-surface-0">
  <div class="flex items-center gap-3">
    <p-button icon="pi pi-arrow-left" [text]="true" severity="secondary" (onClick)="goBack()" pTooltip="Go back" />
    <h1 class="text-lg font-semibold">Integration Documentation</h1>
  </div>
  <p-button label="Download" icon="pi pi-download" severity="secondary" [outlined]="true" (onClick)="downloadDoc()" />
</div>

<!-- Tabs -->
<p-tabs [value]="activeTab()" (valueChange)="$event !== undefined && activeTab.set($event.toString())">
  <p-tablist>
    <p-tab value="create"><i class="pi pi-plus-circle mr-2"></i>Creating an App</p-tab>
    <p-tab value="dev"><i class="pi pi-code mr-2"></i>Developer Guide</p-tab>
  </p-tablist>

  <!-- \u2500\u2500 Tab 1: Creating an App \u2500\u2500 -->
  <p-tabpanel value="create">
    <div class="overflow-y-auto p-6 bg-surface-50">
      @if (createSteps().length > 0) {
        <p-stepper [value]="createCurrentStep()" [linear]="false" (valueChange)="$event !== undefined && createCurrentStep.set($event)" class="w-full">
          @for (step of createSteps(); track step.value) {
            <p-step-item [value]="step.value">
              <p-step>{{ step.header }}</p-step>
              <p-step-panel>
                <ng-template #content let-activateCallback="activateCallback">
                  <div class="flex flex-col">
                    <ng-container *ngTemplateOutlet="step.content; context: { $implicit: step }"></ng-container>
                    <div class="flex gap-2 px-6 pb-6 pt-2">
                      @if (!isFirst(createSteps(), step.value)) {
                        <p-button label="Back" icon="pi pi-arrow-left" severity="secondary"
                          (onClick)="prevStep(createSteps(), step.value, createCurrentStep.set.bind(createCurrentStep))" />
                      }
                      @if (!isLast(createSteps(), step.value)) {
                        <p-button label="Next" icon="pi pi-arrow-right" iconPos="right"
                          (onClick)="nextStep(createSteps(), step.value, createCurrentStep.set.bind(createCurrentStep))" />
                      }
                    </div>
                  </div>
                </ng-template>
              </p-step-panel>
            </p-step-item>
          }
        </p-stepper>
      }
    </div>
  </p-tabpanel>

  <!-- \u2500\u2500 Tab 2: Developer Guide \u2500\u2500 -->
  <p-tabpanel value="dev">
    <div class="overflow-y-auto p-6 bg-surface-50">
      @if (devSteps().length > 0) {
        <p-stepper [value]="devCurrentStep()" [linear]="false" (valueChange)="$event !== undefined && devCurrentStep.set($event)" class="w-full">
          @for (step of devSteps(); track step.value) {
            <p-step-item [value]="step.value">
              <p-step>{{ step.header }}</p-step>
              <p-step-panel>
                <ng-template #content let-activateCallback="activateCallback">
                  <div class="flex flex-col">
                    <ng-container *ngTemplateOutlet="step.content; context: { $implicit: step }"></ng-container>
                    <div class="flex gap-2 px-6 pb-6 pt-2">
                      @if (!isFirst(devSteps(), step.value)) {
                        <p-button label="Back" icon="pi pi-arrow-left" severity="secondary"
                          (onClick)="prevStep(devSteps(), step.value, devCurrentStep.set.bind(devCurrentStep))" />
                      }
                      @if (!isLast(devSteps(), step.value)) {
                        <p-button label="Next" icon="pi pi-arrow-right" iconPos="right"
                          (onClick)="nextStep(devSteps(), step.value, devCurrentStep.set.bind(devCurrentStep))" />
                      }
                    </div>
                  </div>
                </ng-template>
              </p-step-panel>
            </p-step-item>
          }
        </p-stepper>
      }
    </div>
  </p-tabpanel>
</p-tabs>


<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<!-- CREATE AN APP \u2014 Step Templates                      -->
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<!-- Step 1: Overview -->
<ng-template #overviewStep>
  <div class="docs-content p-6 max-w-3xl">
    <h2>What is the App Store?</h2>
    <p>
      The CypherView App Store lets you build and publish web apps that embed directly inside the CypherView platform.
      Your app is a standard web page hosted on your own server \u2014 CypherView loads it in an iframe and passes contextual data to it.
    </p>
    <h2>Platform Support</h2>
    <p>Not all integration points are available on every platform:</p>
    <table>
      <thead><tr><th>Integration Point</th><th>Web</th><th>Flutter (Mobile)</th></tr></thead>
      <tbody>
        <tr><td><code>tripDetails</code></td><td>\u2713</td><td>\u2713</td></tr>
        <tr><td><code>positionActivityStats</code></td><td>\u2713</td><td>\u2713</td></tr>
        <tr><td><code>appSidebar</code></td><td>\u2713</td><td>\u2014</td></tr>
      </tbody>
    </table>
    <h2>Before you start, you'll need:</h2>
    <ul>
      <li>A hosted <strong>HTTPS endpoint</strong> \u2014 the URL CypherView will load in an iframe</li>
      <li>An <strong>icon image</strong> accessible via HTTPS (optional)</li>
      <li>A <strong>health check URL</strong> that returns <code>200</code> (optional but recommended)</li>
    </ul>
    <blockquote>The app creation wizard is at <strong>/app-store/editor</strong> or via <strong>Create App</strong> on your Creator Dashboard.</blockquote>
  </div>
</ng-template>

<!-- Step 2: Basic Info -->
<ng-template #basicInfoStep>
  <div class="docs-content p-6 max-w-3xl">
    <h2>Basic Info</h2>
    <p>This step defines your app's identity in the marketplace.</p>
    <table>
      <thead><tr><th>Field</th><th>Required</th><th>Notes</th></tr></thead>
      <tbody>
        <tr><td><strong>Name</strong></td><td>Yes</td><td>Display name shown in listings</td></tr>
        <tr><td><strong>Short Description</strong></td><td>Yes</td><td>One-liner (max 100 characters)</td></tr>
        <tr><td><strong>Description</strong></td><td>Yes</td><td>Full description on the app detail page</td></tr>
        <tr><td><strong>Icon URL</strong></td><td>No</td><td>HTTPS URL to your app icon; defaults to a placeholder</td></tr>
        <tr><td><strong>Health Check URL</strong></td><td>No</td><td>HTTPS endpoint pinged to verify your app is reachable</td></tr>
      </tbody>
    </table>
    <blockquote>
      <strong>Health Check URL</strong> \u2014 CypherView sends a <code>HEAD</code> request to this URL before loading your app on mobile.
      If it fails or times out (5s), users see an "unavailable" tile with a retry button instead of your app.
    </blockquote>
  </div>
</ng-template>

<!-- Step 3: Publishing -->
<ng-template #publishingStep>
  <div class="docs-content p-6 max-w-3xl">
    <h2>Visibility</h2>
    <p>Controls who can discover and install your app.</p>
    <table>
      <thead><tr><th>Option</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><code>global</code></td><td>Listed publicly \u2014 anyone can find and install it</td></tr>
        <tr><td><code>ourOperations</code></td><td>Visible only within your own organisation</td></tr>
        <tr><td><code>unlisted</code></td><td>Hidden from marketplace; installable via invite only</td></tr>
      </tbody>
    </table>
    <h2>Fee Model</h2>
    <table>
      <thead><tr><th>Option</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Free</strong></td><td>No charge to installers</td></tr>
        <tr><td><strong>Per Installation</strong></td><td>Fixed ZAR amount charged once when an org installs</td></tr>
        <tr><td><strong>Per Active Device</strong></td><td>ZAR amount \xD7 number of active devices in the org</td></tr>
      </tbody>
    </table>
    <blockquote>A fee amount is required if you select a paid model. The wizard shows a live cost preview as you type.</blockquote>
  </div>
</ng-template>

<!-- Step 4: Integration Points -->
<ng-template #integrationStep>
  <div class="docs-content p-6 max-w-3xl">
    <h2>Integration Points</h2>
    <p>Integration points define <em>where</em> your app embeds inside CypherView. You must select at least one.</p>
    <table>
      <thead><tr><th>Screen ID</th><th>Display Name</th><th>Web</th><th>Flutter</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><code>tripDetails</code></td><td>Trip Details Screen</td><td>\u2713</td><td>\u2713</td><td>Embedded inside a specific trip's detail view</td></tr>
        <tr><td><code>positionActivityStats</code></td><td>Vehicle Activity Screen</td><td>\u2713</td><td>\u2713</td><td>Embedded in the vehicle activity stats panel</td></tr>
        <tr><td><code>appSidebar</code></td><td>App Sidebar</td><td>\u2713</td><td>\u2014</td><td>Persistent sidebar in the main navigation (web only)</td></tr>
      </tbody>
    </table>
    <p>For each screen you select, you must provide a <strong>Base URL</strong> \u2014 the HTTPS URL CypherView loads in an iframe for that screen.</p>
    <h2>Context data passed to your app</h2>
    <p>CypherView delivers context via <code>postMessage</code> after your iframe signals <code>READY</code>:</p>
    <table>
      <thead><tr><th>Screen</th><th>Data passed</th></tr></thead>
      <tbody>
        <tr><td><code>tripDetails</code></td><td><code>tripId</code>, <code>assetId</code>, <code>startDate</code>, <code>endDate</code>, <code>vehicleName</code>, <code>accessToken</code></td></tr>
        <tr><td><code>positionActivityStats</code></td><td><code>assetId</code>, <code>startDate</code>, <code>endDate</code>, <code>accessToken</code></td></tr>
        <tr><td><code>appSidebar</code></td><td><code>accessToken</code></td></tr>
      </tbody>
    </table>
  </div>
</ng-template>

<!-- Step 5: Permissions -->
<ng-template #permissionsStep>
  <div class="docs-content p-6 max-w-3xl">
    <h2>Permissions</h2>
    <p>Declare what CypherView data your app needs. These are shown to users at install time. Format: <code>resource:action</code></p>
    <h3>Fleet</h3>
    <table>
      <thead><tr><th>Resource</th><th>Available Actions</th></tr></thead>
      <tbody>
        <tr><td><code>asset</code></td><td><code>list</code>, <code>get</code>, <code>create</code>, <code>update</code></td></tr>
        <tr><td><code>device</code></td><td><code>list</code>, <code>get</code>, <code>create</code>, <code>update</code></td></tr>
        <tr><td><code>driver</code></td><td><code>list</code>, <code>get</code>, <code>create</code>, <code>update</code></td></tr>
        <tr><td><code>trip</code></td><td><code>list</code>, <code>get</code></td></tr>
        <tr><td><code>position</code></td><td><code>list</code>, <code>get</code></td></tr>
      </tbody>
    </table>
    <h3>Configuration</h3>
    <table>
      <thead><tr><th>Resource</th><th>Available Actions</th></tr></thead>
      <tbody>
        <tr><td><code>assettype</code></td><td><code>list</code>, <code>get</code></td></tr>
        <tr><td><code>assetcategory</code></td><td><code>list</code>, <code>get</code></td></tr>
        <tr><td><code>devicetype</code></td><td><code>list</code>, <code>get</code></td></tr>
        <tr><td><code>geofence</code></td><td><code>list</code>, <code>get</code>, <code>create</code>, <code>update</code></td></tr>
      </tbody>
    </table>
    <h3>Reporting</h3>
    <table>
      <thead><tr><th>Resource</th><th>Available Actions</th></tr></thead>
      <tbody>
        <tr><td><code>report</code></td><td><code>list</code>, <code>get</code>, <code>run</code></td></tr>
        <tr><td><code>schedule</code></td><td><code>list</code>, <code>get</code>, <code>create</code>, <code>update</code>, <code>schedule</code></td></tr>
        <tr><td><code>alert</code></td><td><code>list</code>, <code>get</code>, <code>create</code>, <code>update</code></td></tr>
      </tbody>
    </table>
    <blockquote>Selecting certain resources auto-grants read access on related ones \u2014 e.g. selecting <code>trip</code> also implies <code>asset</code>, <code>driver</code>, and <code>position</code>.</blockquote>
  </div>
</ng-template>

<!-- Step 6: Review & Submit -->
<ng-template #submitStep>
  <div class="docs-content p-6 max-w-3xl">
    <h2>Review & Submit</h2>
    <p>The final step shows a summary of all your inputs. You have two options:</p>
    <h3>Save as Draft</h3>
    <p>Saves your app without submitting for review. Your app is created but invisible in the marketplace. Use this to continue editing later.</p>
    <h3>Submit for Review</h3>
    <p>Submits your app to the CypherView team. A dialog appears asking for:</p>
    <ul>
      <li><strong>Changelog</strong> \u2014 describe what's in this version (required)</li>
      <li><strong>Version Bump</strong> (for updates after first approval):
        <ul>
          <li><code>patch</code> \u2014 bug fixes, no new features</li>
          <li><code>minor</code> \u2014 new features, backward compatible</li>
          <li><code>major</code> \u2014 breaking changes</li>
        </ul>
      </li>
    </ul>
    <h2>After Submission</h2>
    <p>Review takes <strong>24\u201348 hours</strong>. Status flow:</p>
    <pre>draft \u2192 pendingReview \u2192 approved
                       \u2192 changesRequested \u2192 pendingReview (resubmit)
                       \u2192 rejected</pre>
    <blockquote>
      Once approved, you receive a <strong>clientId</strong> and <strong>clientSecret</strong> \u2014 shown <strong>once</strong> after approval. Store them immediately. These are your OAuth credentials for calling the CypherView API from your backend.
    </blockquote>
  </div>
</ng-template>


<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<!-- DEVELOPER GUIDE \u2014 Step Templates                   -->
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<!-- Dev Step 1: How It Works -->
<ng-template #protocolStep>
  <div class="docs-content p-6 max-w-3xl">
    <h2>How It Works</h2>
    <p>
      Your app is a standard web page hosted on your own server.
      CypherView loads it inside an <strong>iframe</strong> and delivers contextual data (trip ID, asset ID, access token, etc.)
      via the browser's <code>postMessage</code> API.
    </p>
    <p>You do not need any CypherView SDK \u2014 just a web page that speaks the postMessage protocol.</p>
    <h2>The Handshake</h2>
    <ol>
      <li>CypherView loads your <code>baseUrl</code> in an iframe</li>
      <li>Your app posts a <code>READY</code> message to the parent window</li>
      <li>CypherView responds with a <code>WIDGET_CONFIG</code> message containing context data</li>
      <li>Your app renders using that data</li>
    </ol>
    <blockquote>CypherView may re-send <code>WIDGET_CONFIG</code> without reloading your iframe when the user navigates to a different trip or asset. Handle this \u2014 don't assume config is only received once.</blockquote>
  </div>
</ng-template>

<!-- Dev Step 2: postMessage Protocol -->
<ng-template #contextStep>
  <div class="docs-content p-6 max-w-3xl">
    <h2>postMessage Protocol</h2>
    <h3>Step 1 \u2014 Signal ready</h3>
    <p>Once your page has loaded, post a <code>READY</code> message:</p>
    <pre><code>window.parent.postMessage(&#123; type: 'READY' &#125;, '*');</code></pre>
    <h3>Step 2 \u2014 Receive config</h3>
    <p>Listen for <code>WIDGET_CONFIG</code> from CypherView:</p>
    <pre><code>window.addEventListener('message', (event) => &#123;
  if (event.data?.type !== 'WIDGET_CONFIG') return;

  const &#123;
    tripId,       // string | undefined
    assetId,      // string | undefined
    startDate,    // string | undefined  (ISO 8601)
    endDate,      // string | undefined  (ISO 8601)
    vehicleName,  // string | undefined
    accessToken,  // string | undefined
  &#125; = event.data.payload;

  renderApp(event.data.payload);
&#125;);</code></pre>
    <h3>Minimal example</h3>
    <pre><code>window.addEventListener('message', (event) => &#123;
  if (event.data?.type !== 'WIDGET_CONFIG') return;
  const &#123; tripId, accessToken &#125; = event.data.payload;
  document.getElementById('content').textContent = \`Trip: $&#123;tripId&#125;\`;
&#125;);

// Signal ready after registering the listener
window.parent.postMessage(&#123; type: 'READY' &#125;, '*');</code></pre>
  </div>
</ng-template>

<!-- Dev Step 3: Context Data -->
<ng-template #apiStep>
  <div class="docs-content p-6 max-w-3xl">
    <h2>Context Data per Screen</h2>
    <p>All fields are optional \u2014 guard against <code>undefined</code>.</p>
    <table>
      <thead><tr><th>Field</th><th>Type</th><th>Available on</th></tr></thead>
      <tbody>
        <tr><td><code>tripId</code></td><td>string</td><td><code>tripDetails</code></td></tr>
        <tr><td><code>assetId</code></td><td>string</td><td><code>tripDetails</code>, <code>positionActivityStats</code></td></tr>
        <tr><td><code>startDate</code></td><td>string (ISO 8601)</td><td><code>tripDetails</code>, <code>positionActivityStats</code></td></tr>
        <tr><td><code>endDate</code></td><td>string (ISO 8601)</td><td><code>tripDetails</code>, <code>positionActivityStats</code></td></tr>
        <tr><td><code>vehicleName</code></td><td>string</td><td><code>tripDetails</code></td></tr>
        <tr><td><code>accessToken</code></td><td>string</td><td>all screens</td></tr>
      </tbody>
    </table>
    <h2>Context Updates</h2>
    <p>
      CypherView may re-send <code>WIDGET_CONFIG</code> without reloading your iframe when the user navigates between trips or assets.
      Make sure your listener updates the UI on each call.
    </p>
  </div>
</ng-template>

<!-- Dev Step 4: Using the API -->
<ng-template #securityStep>
  <div class="docs-content p-6 max-w-3xl">
    <h2>Using the Access Token</h2>
    <p>The <code>accessToken</code> is a Bearer token scoped to the permissions your app declared at registration. Use it to call the CypherView API:</p>
    <pre><code>const res = await fetch(
  'https://api.cypherview.io/telemetrystore/trips/' + tripId,
  &#123; headers: &#123; Authorization: \`Bearer $&#123;accessToken&#125;\` &#125; &#125;
);</code></pre>
    <blockquote>
      The token is tied to the installing organisation's session.
      Only resources covered by your declared permissions will be accessible \u2014 other requests return <code>403 Forbidden</code>.
    </blockquote>
    <h2>clientId &amp; clientSecret</h2>
    <p>
      After your app is approved, you receive a <strong>clientId</strong> and <strong>clientSecret</strong>.
      These are OAuth credentials for authenticating your <strong>backend server</strong> when calling the CypherView API on behalf of an installer \u2014 separate from the per-session <code>accessToken</code>.
    </p>
  </div>
</ng-template>

<!-- Dev Step 5: Security & Constraints -->
<ng-template #constraintsStep>
  <div class="docs-content p-6 max-w-3xl">
    <h2>Security</h2>
    <p>Validate <code>event.origin</code> in production to prevent other sites from sending fake config:</p>
    <pre><code>const ALLOWED_ORIGIN = 'https://app.cypherview.io';

window.addEventListener('message', (event) => &#123;
  if (event.origin !== ALLOWED_ORIGIN) return;
  // safe to process
&#125;);</code></pre>
    <ul>
      <li>Your <code>baseUrl</code> must use <strong>HTTPS</strong> \u2014 HTTP is rejected</li>
      <li>Treat the <code>accessToken</code> as a short-lived credential \u2014 don't persist it</li>
    </ul>
    <h2>Health Check</h2>
    <p>
      If you provide a <code>healthCheckUrl</code>, CypherView sends a <code>HEAD</code> request before loading your iframe (5-second timeout).
      Return <code>2xx</code> to confirm your service is up. On failure, users see a retry tile.
    </p>
    <h2>iframe Size Constraints</h2>
    <table>
      <thead><tr><th>Screen</th><th>Height on Flutter</th><th>Width</th></tr></thead>
      <tbody>
        <tr><td><code>tripDetails</code></td><td>267px (fixed)</td><td>100%</td></tr>
        <tr><td><code>positionActivityStats</code></td><td>130px (fixed)</td><td>100%</td></tr>
        <tr><td><code>appSidebar</code></td><td>Full height (web only)</td><td>Fixed sidebar width</td></tr>
      </tbody>
    </table>
    <blockquote>On web, heights are not fixed. On mobile, the heights above are enforced \u2014 design compact UIs for those screens.</blockquote>
  </div>
</ng-template>
`, styles: ["/* src/app/features/app-store/pages/app-store-docs/app-store-docs.component.scss */\n.docs-content {\n  line-height: 1.7;\n  color: var(--p-surface-800);\n}\n.docs-content h1 {\n  font-size: 1.75rem;\n  font-weight: 700;\n  margin: 0 0 1.5rem;\n}\n.docs-content h2 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 2rem 0 0.75rem;\n  padding-bottom: 0.4rem;\n  border-bottom: 1px solid var(--p-surface-200);\n}\n.docs-content h3 {\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 1.5rem 0 0.5rem;\n}\n.docs-content p {\n  margin: 0.75rem 0;\n  font-size: 0.9rem;\n}\n.docs-content a {\n  color: var(--p-primary-color);\n  text-decoration: underline;\n}\n.docs-content ul,\n.docs-content ol {\n  padding-left: 1.5rem;\n  margin: 0.75rem 0;\n  font-size: 0.9rem;\n}\n.docs-content li {\n  margin: 0.3rem 0;\n}\n.docs-content table {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 1rem 0;\n  font-size: 0.875rem;\n}\n.docs-content table th {\n  background: var(--p-surface-100);\n  font-weight: 600;\n  text-align: left;\n  padding: 0.5rem 0.75rem;\n  border: 1px solid var(--p-surface-200);\n}\n.docs-content table td {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid var(--p-surface-200);\n  vertical-align: top;\n}\n.docs-content table tr:nth-child(even) td {\n  background: var(--p-surface-50);\n}\n.docs-content code {\n  background: var(--p-surface-100);\n  border-radius: 4px;\n  padding: 0.15em 0.4em;\n  font-size: 0.85em;\n  font-family: monospace;\n}\n.docs-content pre {\n  background: var(--p-surface-100);\n  border-radius: 8px;\n  padding: 1rem;\n  overflow-x: auto;\n  margin: 1rem 0;\n}\n.docs-content pre code {\n  background: none;\n  padding: 0;\n}\n.docs-content blockquote {\n  border-left: 3px solid var(--p-primary-color);\n  margin: 1rem 0;\n  padding: 0.5rem 1rem;\n  background: var(--p-surface-50);\n  font-style: italic;\n  font-size: 0.875rem;\n}\n.docs-content hr {\n  border: none;\n  border-top: 1px solid var(--p-surface-200);\n  margin: 2rem 0;\n}\n/*# sourceMappingURL=app-store-docs.component.css.map */\n"] }]
  }], null, { overviewStep: [{
    type: ViewChild,
    args: ["overviewStep"]
  }], basicInfoStep: [{
    type: ViewChild,
    args: ["basicInfoStep"]
  }], publishingStep: [{
    type: ViewChild,
    args: ["publishingStep"]
  }], integrationStep: [{
    type: ViewChild,
    args: ["integrationStep"]
  }], permissionsStep: [{
    type: ViewChild,
    args: ["permissionsStep"]
  }], submitStep: [{
    type: ViewChild,
    args: ["submitStep"]
  }], protocolStep: [{
    type: ViewChild,
    args: ["protocolStep"]
  }], contextStep: [{
    type: ViewChild,
    args: ["contextStep"]
  }], apiStep: [{
    type: ViewChild,
    args: ["apiStep"]
  }], securityStep: [{
    type: ViewChild,
    args: ["securityStep"]
  }], constraintsStep: [{
    type: ViewChild,
    args: ["constraintsStep"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppStoreDocsComponent, { className: "AppStoreDocsComponent", filePath: "src/app/features/app-store/pages/app-store-docs/app-store-docs.component.ts", lineNumber: 14 });
})();
export {
  AppStoreDocsComponent
};
//# sourceMappingURL=chunk-QCDBP2QB.js.map
