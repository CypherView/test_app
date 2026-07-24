import {
  AppInviteService,
  AppInviteStatusBadgeComponent,
  ConfirmPopup
} from "./chunk-CSOVKPGS.js";
import {
  AppInstallationService
} from "./chunk-FO6ZES52.js";
import {
  AppStatusBadgeComponent
} from "./chunk-RW7U7JZW.js";
import {
  AppStoreService
} from "./chunk-5LL4AMNO.js";
import {
  Drawer,
  DrawerModule
} from "./chunk-GQ7U7Y4R.js";
import {
  CardModule
} from "./chunk-HEDH66RH.js";
import {
  GridComponent
} from "./chunk-VJ76VAAI.js";
import "./chunk-T2NLXXYI.js";
import {
  ImgFallbackDirective
} from "./chunk-DXDIX3ID.js";
import "./chunk-LHPCQEY3.js";
import {
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-6ZLKOSJY.js";
import "./chunk-5WWRPFVI.js";
import "./chunk-6RKFIQXA.js";
import "./chunk-6RNH5RNU.js";
import "./chunk-HAP3H3Y2.js";
import "./chunk-JE2L2HEP.js";
import {
  Message,
  MessageModule
} from "./chunk-ZD2L3BUO.js";
import "./chunk-233GVLOY.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-7YJUDWRM.js";
import "./chunk-RNIEZZVX.js";
import {
  ClientDataService,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-6H7AOYCU.js";
import "./chunk-7BSAABDZ.js";
import {
  Button,
  ButtonModule,
  CommonModule,
  ConfirmationService,
  DatePipe,
  NgClass,
  PrimeTemplate
} from "./chunk-T7ZENNNQ.js";
import {
  Component,
  ViewChild,
  catchError,
  computed,
  inject,
  of,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-JFHDN3YU.js";
import "./chunk-M4PBGCJ5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/features/app-store/pages/app-creator-dashboard/app-creator-dashboard.component.ts
var _c0 = ["appIconTemplate"];
var _c1 = ["statusTemplate"];
var _c2 = ["inReviewTemplate"];
var _c3 = ["actionsTemplate"];
var _c4 = ["invitesActionTemplate"];
var _c5 = ["installersActionTemplate"];
var _c6 = ["clientIdTemplate"];
var _c7 = (a0) => ["/app-store", a0];
var _forTrack0 = ($index, $item) => $item.id;
function AppCreatorDashboardComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "p-message", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.actionError());
  }
}
function AppCreatorDashboardComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 15);
    \u0275\u0275element(2, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 18);
    \u0275\u0275text(6, "Please try refreshing the page.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p-button", 19);
    \u0275\u0275listener("onClick", function AppCreatorDashboardComponent_Conditional_6_Template_p_button_onClick_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.reload());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function AppCreatorDashboardComponent_Conditional_7_Conditional_0_For_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const app_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(' "', ctx_r0.reviewComments().get(app_r3.id), '" ');
  }
}
function AppCreatorDashboardComponent_Conditional_7_Conditional_0_For_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 34);
    \u0275\u0275listener("onClick", function AppCreatorDashboardComponent_Conditional_7_Conditional_0_For_5_Conditional_8_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const app_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.editApp(app_r3));
    });
    \u0275\u0275elementEnd();
  }
}
function AppCreatorDashboardComponent_Conditional_7_Conditional_0_For_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 35);
    \u0275\u0275listener("onClick", function AppCreatorDashboardComponent_Conditional_7_Conditional_0_For_5_Conditional_9_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r5);
      const app_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.editApp(app_r3));
    });
    \u0275\u0275elementEnd();
  }
}
function AppCreatorDashboardComponent_Conditional_7_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "img", 26);
    \u0275\u0275elementStart(2, "div", 27)(3, "div", 28)(4, "span", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "app-status-badge", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, AppCreatorDashboardComponent_Conditional_7_Conditional_0_For_5_Conditional_7_Template, 2, 1, "p", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, AppCreatorDashboardComponent_Conditional_7_Conditional_0_For_5_Conditional_8_Template, 1, 0, "p-button", 32)(9, AppCreatorDashboardComponent_Conditional_7_Conditional_0_For_5_Conditional_9_Template, 1, 0, "p-button", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const app_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", app_r3.iconUrl, \u0275\u0275sanitizeUrl)("alt", app_r3.name)("fallbackText", app_r3.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(app_r3.name);
    \u0275\u0275advance();
    \u0275\u0275property("status", app_r3.version.pendingVersionStatus ?? (app_r3.version.activeVersionId ? "approved" : "draft"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.reviewComments().get(app_r3.id) ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(app_r3.version.pendingVersionStatus === "changesRequested" ? 8 : 9);
  }
}
function AppCreatorDashboardComponent_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "h3", 23);
    \u0275\u0275text(2, " Needs Attention ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24);
    \u0275\u0275repeaterCreate(4, AppCreatorDashboardComponent_Conditional_7_Conditional_0_For_5_Template, 10, 7, "div", 25, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.attentionApps());
  }
}
function AppCreatorDashboardComponent_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-grid", 21);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("columns", ctx_r0.columns())("data", ctx_r0.apps())("loading", ctx_r0.isLoading())("pagination", true)("rows", 10)("sortable", true);
  }
}
function AppCreatorDashboardComponent_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 36);
    \u0275\u0275element(2, "i", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 38);
    \u0275\u0275text(4, " Build Your First App ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 39);
    \u0275\u0275text(6, " Create custom integrations and widgets to enhance the CypherView experience for everyone. ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "p-button", 40);
    \u0275\u0275elementEnd();
  }
}
function AppCreatorDashboardComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AppCreatorDashboardComponent_Conditional_7_Conditional_0_Template, 6, 0, "div", 20);
    \u0275\u0275conditionalCreate(1, AppCreatorDashboardComponent_Conditional_7_Conditional_1_Template, 1, 6, "app-grid", 21)(2, AppCreatorDashboardComponent_Conditional_7_Conditional_2_Template, 8, 0, "div", 22);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.attentionApps().length > 0 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.apps().length > 0 || ctx_r0.isLoading() ? 1 : 2);
  }
}
function AppCreatorDashboardComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "img", 42);
    \u0275\u0275elementStart(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const app_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", app_r6.iconUrl, \u0275\u0275sanitizeUrl)("alt", app_r6.name + " icon")("fallbackText", app_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(app_r6.name);
  }
}
function AppCreatorDashboardComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-status-badge", 30);
  }
  if (rf & 2) {
    const app_r7 = ctx.$implicit;
    \u0275\u0275property("status", app_r7.version.pendingVersionStatus ?? (app_r7.version.activeVersionId ? "approved" : "draft"));
  }
}
function AppCreatorDashboardComponent_ng_template_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "span", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "app-status-badge", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const app_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(app_r8.version.pendingVersionNumber);
    \u0275\u0275advance();
    \u0275\u0275property("status", app_r8.version.pendingVersionStatus ?? "pendingReview");
  }
}
function AppCreatorDashboardComponent_ng_template_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AppCreatorDashboardComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AppCreatorDashboardComponent_ng_template_12_Conditional_0_Template, 4, 2, "div", 43)(1, AppCreatorDashboardComponent_ng_template_12_Conditional_1_Template, 2, 0, "span", 44);
  }
  if (rf & 2) {
    const app_r8 = ctx.$implicit;
    \u0275\u0275conditional(app_r8.version.pendingVersionNumber ? 0 : 1);
  }
}
function AppCreatorDashboardComponent_ng_template_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 51);
    \u0275\u0275listener("onClick", function AppCreatorDashboardComponent_ng_template_14_Conditional_3_Template_p_button_onClick_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const app_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmArchiveApp($event, app_r10));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const app_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("text", true)("loading", ctx_r0.processingAppId() === app_r10.id);
  }
}
function AppCreatorDashboardComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275element(1, "p-button", 47);
    \u0275\u0275elementStart(2, "p-button", 48);
    \u0275\u0275listener("onClick", function AppCreatorDashboardComponent_ng_template_14_Template_p_button_onClick_2_listener() {
      const app_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.editApp(app_r10));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, AppCreatorDashboardComponent_ng_template_14_Conditional_3_Template, 1, 2, "p-button", 49);
    \u0275\u0275elementStart(4, "p-button", 50);
    \u0275\u0275listener("onClick", function AppCreatorDashboardComponent_ng_template_14_Template_p_button_onClick_4_listener($event) {
      const app_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmDeleteApp($event, app_r10));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const app_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c7, app_r10.id))("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("text", true)("disabled", ctx_r0.isEditDisabled(app_r10))("pTooltip", ctx_r0.isEditDisabled(app_r10) ? "v" + app_r10.version.pendingVersionNumber + " is currently under review" : "Edit App");
    \u0275\u0275advance();
    \u0275\u0275conditional(app_r10.state !== "inactive" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("text", true)("disabled", app_r10.stats.installCount > 0)("pTooltip", app_r10.stats.installCount > 0 ? "Archive the app first to remove active installations before deleting" : "Delete App")("loading", ctx_r0.processingAppId() === app_r10.id);
  }
}
function AppCreatorDashboardComponent_ng_template_16_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "span", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-button", 53);
    \u0275\u0275listener("onClick", function AppCreatorDashboardComponent_ng_template_16_Conditional_0_Template_p_button_onClick_3_listener() {
      \u0275\u0275restoreView(_r12);
      const app_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.copyClientId(app_r13.version.active == null ? null : app_r13.version.active.clientId));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const app_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(app_r13.version.active == null ? null : app_r13.version.active.clientId);
    \u0275\u0275advance();
    \u0275\u0275property("text", true);
  }
}
function AppCreatorDashboardComponent_ng_template_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AppCreatorDashboardComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AppCreatorDashboardComponent_ng_template_16_Conditional_0_Template, 4, 2, "div", 43)(1, AppCreatorDashboardComponent_ng_template_16_Conditional_1_Template, 2, 0, "span", 44);
  }
  if (rf & 2) {
    const app_r13 = ctx.$implicit;
    \u0275\u0275conditional((app_r13.version.active == null ? null : app_r13.version.active.clientId) ? 0 : 1);
  }
}
function AppCreatorDashboardComponent_ng_template_18_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 55);
    \u0275\u0275listener("onClick", function AppCreatorDashboardComponent_ng_template_18_Conditional_0_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r14);
      const app_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openInvitePanel(app_r15));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("text", true);
  }
}
function AppCreatorDashboardComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AppCreatorDashboardComponent_ng_template_18_Conditional_0_Template, 1, 1, "p-button", 54);
  }
  if (rf & 2) {
    const app_r15 = ctx.$implicit;
    \u0275\u0275conditional(app_r15.visibility === "unlisted" ? 0 : -1);
  }
}
function AppCreatorDashboardComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 56);
    \u0275\u0275listener("onClick", function AppCreatorDashboardComponent_ng_template_20_Template_p_button_onClick_0_listener() {
      const app_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openInstallerPanel(app_r17));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("text", true);
  }
}
function AppCreatorDashboardComponent_Conditional_23_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "div")(2, "h3", 62);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 63);
    \u0275\u0275text(5, "Installers");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const app_r18 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(app_r18.name);
  }
}
function AppCreatorDashboardComponent_Conditional_23_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275element(1, "p-progressSpinner", 64);
    \u0275\u0275elementEnd();
  }
}
function AppCreatorDashboardComponent_Conditional_23_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275element(1, "i", 65);
    \u0275\u0275elementStart(2, "p", 66);
    \u0275\u0275text(3, "No installations yet.");
    \u0275\u0275elementEnd()();
  }
}
function AppCreatorDashboardComponent_Conditional_23_Conditional_4_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1, " Fee Pending ");
    \u0275\u0275elementEnd();
  }
}
function AppCreatorDashboardComponent_Conditional_23_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 27)(2, "p", 68);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 69)(5, "span", 70);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, AppCreatorDashboardComponent_Conditional_23_Conditional_4_For_1_Conditional_7_Template, 2, 0, "span", 71);
    \u0275\u0275elementStart(8, "span", 72);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const installer_r19 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", installer_r19.ownerId, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", installer_r19.isEnabled ? "bg-green-100 text-green-700" : "bg-surface-100 text-surface-500");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", installer_r19.isEnabled ? "Enabled" : "Disabled", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(installer_r19.pendingFeeAcknowledgement ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Installed ", \u0275\u0275pipeBind2(10, 5, installer_r19.createdAt, "mediumDate"), " ");
  }
}
function AppCreatorDashboardComponent_Conditional_23_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, AppCreatorDashboardComponent_Conditional_23_Conditional_4_For_1_Template, 11, 8, "div", 67, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r0.installers());
  }
}
function AppCreatorDashboardComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AppCreatorDashboardComponent_Conditional_23_ng_template_0_Template, 6, 1, "ng-template", 57);
    \u0275\u0275elementStart(1, "div", 58);
    \u0275\u0275conditionalCreate(2, AppCreatorDashboardComponent_Conditional_23_Conditional_2_Template, 2, 0, "div", 59)(3, AppCreatorDashboardComponent_Conditional_23_Conditional_3_Template, 4, 0, "div", 60)(4, AppCreatorDashboardComponent_Conditional_23_Conditional_4_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.installersLoading() ? 2 : ctx_r0.installers().length === 0 ? 3 : 4);
  }
}
function AppCreatorDashboardComponent_Conditional_25_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "div")(2, "h3", 62);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 63);
    \u0275\u0275text(5, "Invite Management");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p-button", 74);
    \u0275\u0275listener("onClick", function AppCreatorDashboardComponent_Conditional_25_ng_template_0_Template_p_button_onClick_6_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.createInvite());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const app_r21 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(app_r21.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("loading", ctx_r0.isCreatingInvite());
  }
}
function AppCreatorDashboardComponent_Conditional_25_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275element(1, "p-progressSpinner", 64);
    \u0275\u0275elementEnd();
  }
}
function AppCreatorDashboardComponent_Conditional_25_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275element(1, "i", 75);
    \u0275\u0275elementStart(2, "p", 66);
    \u0275\u0275text(3, "No invites yet. Generate one to share access.");
    \u0275\u0275elementEnd()();
  }
}
function AppCreatorDashboardComponent_Conditional_25_Conditional_4_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const invite_r23 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Expires ", \u0275\u0275pipeBind2(2, 1, invite_r23.expiresDate, "mediumDate"), " ");
  }
}
function AppCreatorDashboardComponent_Conditional_25_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 27)(2, "p", 68);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 43);
    \u0275\u0275element(5, "app-invite-status-badge", 30);
    \u0275\u0275conditionalCreate(6, AppCreatorDashboardComponent_Conditional_25_Conditional_4_For_1_Conditional_6_Template, 3, 4, "span", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p-button", 76);
    \u0275\u0275listener("onClick", function AppCreatorDashboardComponent_Conditional_25_Conditional_4_For_1_Template_p_button_onClick_7_listener() {
      const invite_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.revokeInvite(invite_r23));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const invite_r23 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(invite_r23.token);
    \u0275\u0275advance(2);
    \u0275\u0275property("status", invite_r23.status);
    \u0275\u0275advance();
    \u0275\u0275conditional(invite_r23.expiresDate ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("text", true)("disabled", invite_r23.status !== "pending");
  }
}
function AppCreatorDashboardComponent_Conditional_25_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, AppCreatorDashboardComponent_Conditional_25_Conditional_4_For_1_Template, 8, 5, "div", 67, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r0.invites());
  }
}
function AppCreatorDashboardComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AppCreatorDashboardComponent_Conditional_25_ng_template_0_Template, 7, 2, "ng-template", 57);
    \u0275\u0275elementStart(1, "div", 58);
    \u0275\u0275conditionalCreate(2, AppCreatorDashboardComponent_Conditional_25_Conditional_2_Template, 2, 0, "div", 59)(3, AppCreatorDashboardComponent_Conditional_25_Conditional_3_Template, 4, 0, "div", 60)(4, AppCreatorDashboardComponent_Conditional_25_Conditional_4_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.invitesLoading() ? 2 : ctx_r0.invites().length === 0 ? 3 : 4);
  }
}
var AppCreatorDashboardComponent = class _AppCreatorDashboardComponent {
  appStoreService = inject(AppStoreService);
  clientDataService = inject(ClientDataService);
  appInviteService = inject(AppInviteService);
  appInstallationService = inject(AppInstallationService);
  confirmationService = inject(ConfirmationService);
  router = inject(Router);
  appIconTemplate;
  statusTemplate;
  inReviewTemplate;
  actionsTemplate;
  invitesActionTemplate;
  installersActionTemplate;
  clientIdTemplate;
  // State Signals
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : (
    /* istanbul ignore next */
    []
  ));
  apps = signal([], ...ngDevMode ? [{ debugName: "apps" }] : (
    /* istanbul ignore next */
    []
  ));
  reviewComments = signal(/* @__PURE__ */ new Map(), ...ngDevMode ? [{ debugName: "reviewComments" }] : (
    /* istanbul ignore next */
    []
  ));
  processingAppId = signal(null, ...ngDevMode ? [{ debugName: "processingAppId" }] : (
    /* istanbul ignore next */
    []
  ));
  actionError = signal(null, ...ngDevMode ? [{ debugName: "actionError" }] : (
    /* istanbul ignore next */
    []
  ));
  // Invite panel state
  invitePanelApp = signal(null, ...ngDevMode ? [{ debugName: "invitePanelApp" }] : (
    /* istanbul ignore next */
    []
  ));
  invites = signal([], ...ngDevMode ? [{ debugName: "invites" }] : (
    /* istanbul ignore next */
    []
  ));
  invitesLoading = signal(false, ...ngDevMode ? [{ debugName: "invitesLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  isCreatingInvite = signal(false, ...ngDevMode ? [{ debugName: "isCreatingInvite" }] : (
    /* istanbul ignore next */
    []
  ));
  // Installer panel state
  installerPanelApp = signal(null, ...ngDevMode ? [{ debugName: "installerPanelApp" }] : (
    /* istanbul ignore next */
    []
  ));
  installers = signal([], ...ngDevMode ? [{ debugName: "installers" }] : (
    /* istanbul ignore next */
    []
  ));
  installersLoading = signal(false, ...ngDevMode ? [{ debugName: "installersLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  attentionApps = computed(() => this.apps().filter((app) => app.version.pendingVersionStatus === "changesRequested"), ...ngDevMode ? [{ debugName: "attentionApps" }] : (
    /* istanbul ignore next */
    []
  ));
  columns = signal([], ...ngDevMode ? [{ debugName: "columns" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.loadApps();
  }
  ngOnInit() {
    this.setupColumns();
  }
  setupColumns() {
    this.columns.set([
      {
        field: "name",
        header: "App",
        sortable: true,
        cellTemplate: this.appIconTemplate
      },
      {
        field: "status",
        header: "Status",
        sortable: true,
        cellTemplate: this.statusTemplate
      },
      {
        field: "version.activeVersionNumber",
        header: "Live Version",
        sortable: false,
        valueGetter: (app) => app.version.activeVersionNumber ?? "\u2014"
      },
      {
        field: "version.pendingVersionNumber",
        header: "In Review",
        sortable: false,
        cellTemplate: this.inReviewTemplate
      },
      {
        field: "stats.installCount",
        header: "Installs",
        sortable: true,
        transform: "font-mono",
        valueGetter: (app) => app.stats.installCount
      },
      {
        field: "stats.averageRating",
        header: "Rating",
        sortable: true,
        valueGetter: (app) => app.stats.averageRating
      },
      {
        field: "updatedDate",
        header: "Last Updated",
        sortable: true,
        valueGetter: (app) => new Date(app.updatedDate).toLocaleDateString()
      },
      {
        field: "actions",
        header: "Actions",
        cellTemplate: this.actionsTemplate
      },
      {
        field: "version.active.clientId",
        header: "Client ID",
        cellTemplate: this.clientIdTemplate
      },
      {
        field: "invites",
        header: "Invites",
        cellTemplate: this.invitesActionTemplate
      },
      {
        field: "installers",
        header: "Installers",
        cellTemplate: this.installersActionTemplate
      }
    ]);
  }
  loadApps() {
    this.isLoading.set(true);
    this.error.set(null);
    this.appStoreService.getMyApps({
      owner: this.clientDataService.getSelectedClient()?.id ?? ""
    }).pipe(catchError(() => {
      this.error.set("Unable to load your apps. Please try again.");
      return of([]);
    })).subscribe((apps) => {
      this.apps.set(apps);
      this.isLoading.set(false);
      this.loadReviewComments(apps);
    });
  }
  loadReviewComments(apps) {
    const attentionApps = apps.filter((app) => app.version.pendingVersionStatus === "changesRequested");
    attentionApps.forEach((app) => {
      this.appStoreService.getSubmissionReviews(app.id).pipe(catchError(() => of([]))).subscribe((reviews) => {
        if (reviews.length > 0) {
          this.reviewComments.update((map) => {
            const updated = new Map(map);
            updated.set(app.id, reviews[0].comments);
            return updated;
          });
        }
      });
    });
  }
  isEditDisabled(app) {
    return app.version.pendingVersionStatus === "pendingReview";
  }
  confirmArchiveApp(event, app) {
    this.confirmationService.confirm({
      target: event.target,
      message: `Archive <strong>${app.name}</strong>? It will be removed from the marketplace. You can re-publish it later.`,
      icon: "pi pi-archive",
      acceptLabel: "Archive",
      rejectLabel: "Cancel",
      accept: () => this.archiveApp(app)
    });
  }
  archiveApp(app) {
    this.actionError.set(null);
    this.processingAppId.set(app.id);
    this.appStoreService.archiveApp(app.id).pipe(catchError(() => {
      this.actionError.set(`Failed to archive "${app.name}". Please try again.`);
      return of(null);
    })).subscribe((updated) => {
      if (updated) {
        this.apps.update((list) => list.map((a) => a.id === updated.id ? __spreadProps(__spreadValues({}, a), { state: updated.state }) : a));
      }
      this.processingAppId.set(null);
    });
  }
  confirmDeleteApp(event, app) {
    this.confirmationService.confirm({
      target: event.target,
      message: `Permanently delete <strong>${app.name}</strong>? This cannot be undone.`,
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Delete",
      acceptButtonStyleClass: "p-button-danger",
      rejectLabel: "Cancel",
      accept: () => this.deleteApp(app)
    });
  }
  deleteApp(app) {
    this.actionError.set(null);
    this.processingAppId.set(app.id);
    let failed = false;
    this.appStoreService.deleteApp(app.id).pipe(catchError((err) => {
      failed = true;
      const message = err?.status === 400 ? `"${app.name}" has active installations and cannot be deleted. Archive it first to remove it from the marketplace.` : `Failed to delete "${app.name}". Please try again.`;
      this.actionError.set(message);
      return of(void 0);
    })).subscribe(() => {
      if (!failed) {
        this.apps.update((list) => list.filter((a) => a.id !== app.id));
      }
      this.processingAppId.set(null);
    });
  }
  reload() {
    this.loadApps();
  }
  editApp(app) {
    this.router.navigate(["/app-store/editor"], {
      queryParams: { appId: app.id },
      state: { appToEdit: app }
    }).catch(() => {
    });
  }
  openInvitePanel(app) {
    this.invitePanelApp.set(app);
    this.invitesLoading.set(true);
    this.invites.set([]);
    this.appInviteService.getInvites(app.id).pipe(catchError(() => of([]))).subscribe((invites) => {
      this.invites.set(invites);
      this.invitesLoading.set(false);
    });
  }
  closeInvitePanel() {
    this.invitePanelApp.set(null);
    this.invites.set([]);
  }
  openInstallerPanel(app) {
    this.installerPanelApp.set(app);
    this.installersLoading.set(true);
    this.installers.set([]);
    this.appInstallationService.getAppInstallations(app.id).pipe(catchError(() => of([]))).subscribe((installers) => {
      this.installers.set(installers);
      this.installersLoading.set(false);
    });
  }
  closeInstallerPanel() {
    this.installerPanelApp.set(null);
    this.installers.set([]);
  }
  createInvite() {
    const app = this.invitePanelApp();
    if (!app)
      return;
    this.isCreatingInvite.set(true);
    this.appInviteService.createInvite(app.id).pipe(catchError(() => of(null))).subscribe((invite) => {
      if (invite) {
        this.invites.update((list) => [invite, ...list]);
      }
      this.isCreatingInvite.set(false);
    });
  }
  copyClientId(clientId) {
    navigator.clipboard.writeText(clientId).catch(() => {
    });
  }
  revokeInvite(invite) {
    const app = this.invitePanelApp();
    if (!app)
      return;
    this.appInviteService.revokeInvite(app.id, invite.id).pipe(catchError(() => of(null))).subscribe((updated) => {
      if (updated) {
        this.invites.update((list) => list.map((i) => i.id === updated.id ? updated : i));
      }
    });
  }
  static \u0275fac = function AppCreatorDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppCreatorDashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppCreatorDashboardComponent, selectors: [["app-creator-dashboard"]], viewQuery: function AppCreatorDashboardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 7)(_c1, 7)(_c2, 7)(_c3, 7)(_c4, 7)(_c5, 7)(_c6, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.appIconTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.statusTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inReviewTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.actionsTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.invitesActionTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.installersActionTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.clientIdTemplate = _t.first);
    }
  }, features: [\u0275\u0275ProvidersFeature([ConfirmationService])], decls: 26, vars: 6, consts: [["appIconTemplate", ""], ["statusTemplate", ""], ["inReviewTemplate", ""], ["actionsTemplate", ""], ["clientIdTemplate", ""], ["invitesActionTemplate", ""], ["installersActionTemplate", ""], [1, "flex", "flex-col", "w-full", "h-full"], [1, "flex", "flex-none", "justify-end", "items-center", "px-6", "pt-6"], ["routerLink", "../editor", "label", "Create New App", "icon", "pi pi-plus", "severity", "primary"], [1, "px-6", "pt-4"], [1, "overflow-hidden", "flex-1", "p-6", "w-full", "min-h-0"], [1, "flex", "flex-col", "justify-center", "items-center", "py-20", "text-center"], ["position", "right", "styleClass", "w-[480px]", 3, "onHide", "visible"], ["severity", "error"], [1, "flex", "justify-center", "items-center", "mb-4", "w-16", "h-16", "rounded-full", "bg-surface-50"], [1, "text-3xl", "pi", "pi-exclamation-triangle"], [1, "mb-2", "text-xl", "font-bold", "text-surface-900"], [1, "text-surface-600"], ["label", "Try Again", "icon", "pi pi-refresh", "severity", "secondary", 1, "mt-4", 3, "onClick"], [1, "mb-6"], ["styleClass", "h-full", 3, "columns", "data", "loading", "pagination", "rows", "sortable"], [1, "flex", "flex-col", "justify-center", "items-center", "py-24", "text-center"], [1, "mb-3", "text-sm", "font-semibold", "text-surface-600", "uppercase", "tracking-wide"], [1, "flex", "flex-col", "gap-3"], [1, "flex", "items-center", "gap-4", "p-4", "rounded-lg", "border", "border-surface-200", "bg-surface-0"], ["appImgFallback", "", 1, "w-10", "h-10", "rounded", "object-cover", "bg-surface-100", 3, "src", "alt", "fallbackText"], [1, "flex-1", "min-w-0"], [1, "flex", "items-center", "gap-2", "mb-1"], [1, "font-medium", "text-surface-900"], [3, "status"], [1, "text-sm", "text-surface-600", "truncate"], ["label", "Edit", "icon", "pi pi-pencil", "size", "small", "severity", "secondary"], ["label", "Submit New Version", "icon", "pi pi-send", "size", "small", "severity", "primary"], ["label", "Edit", "icon", "pi pi-pencil", "size", "small", "severity", "secondary", 3, "onClick"], ["label", "Submit New Version", "icon", "pi pi-send", "size", "small", "severity", "primary", 3, "onClick"], [1, "flex", "justify-center", "items-center", "mb-6", "w-20", "h-20", "rounded-full", "bg-primary/10"], [1, "text-4xl", "pi", "pi-plus", "text-primary"], [1, "mb-2", "text-2xl", "font-bold", "text-surface-900"], [1, "mb-8", "max-w-md", "text-surface-600"], ["routerLink", "../editor", "label", "Start Creating", "icon", "pi pi-rocket", "severity", "primary", "size", "large"], [1, "flex", "gap-2", "items-center"], ["appImgFallback", "", 1, "object-cover", "w-8", "h-8", "rounded", "shadow-sm", "bg-surface-100", 3, "src", "alt", "fallbackText"], [1, "flex", "items-center", "gap-2"], [1, "text-surface-400"], [1, "font-mono", "text-sm"], [1, "flex", "gap-2"], ["icon", "pi pi-eye", "size", "small", "severity", "secondary", "pTooltip", "View Details", 3, "routerLink", "text"], ["icon", "pi pi-pencil", "size", "small", "severity", "secondary", 3, "onClick", "text", "disabled", "pTooltip"], ["icon", "pi pi-inbox", "size", "small", "severity", "secondary", "pTooltip", "Archive App", 3, "text", "loading"], ["icon", "pi pi-trash", "size", "small", "severity", "danger", 3, "onClick", "text", "disabled", "pTooltip", "loading"], ["icon", "pi pi-inbox", "size", "small", "severity", "secondary", "pTooltip", "Archive App", 3, "onClick", "text", "loading"], [1, "font-mono", "text-xs", "text-surface-700"], ["icon", "pi pi-copy", "size", "small", "severity", "secondary", "pTooltip", "Copy Client ID", 3, "onClick", "text"], ["icon", "pi pi-key", "size", "small", "severity", "secondary", "pTooltip", "Manage Invites", 3, "text"], ["icon", "pi pi-key", "size", "small", "severity", "secondary", "pTooltip", "Manage Invites", 3, "onClick", "text"], ["icon", "pi pi-users", "size", "small", "severity", "secondary", "pTooltip", "View Installers", 3, "onClick", "text"], ["pTemplate", "header"], [1, "flex", "flex-col", "gap-3", "pt-2"], [1, "flex", "justify-center", "items-center", "py-12"], [1, "flex", "flex-col", "items-center", "justify-center", "py-12", "text-center"], [1, "flex", "items-center", "w-full"], [1, "text-lg", "font-semibold", "text-surface-900"], [1, "text-sm", "text-surface-500"], ["styleClass", "w-8 h-8", "strokeWidth", "3"], [1, "pi", "pi-users", "text-4xl", "text-surface-300", "mb-3"], [1, "text-surface-500", "text-sm"], [1, "flex", "items-center", "gap-3", "p-3", "rounded-lg", "border", "border-surface-200", "bg-surface-0"], [1, "font-mono", "text-xs", "text-surface-700", "truncate", "mb-1"], [1, "flex", "items-center", "gap-2", "flex-wrap"], [1, "px-2", "py-0.5", "rounded-full", "text-[10px]", "font-medium", "uppercase", "tracking-wider", 3, "ngClass"], [1, "px-2", "py-0.5", "rounded-full", "text-[10px]", "font-medium", "uppercase", "tracking-wider", "bg-amber-100", "text-amber-700"], [1, "text-xs", "text-surface-400"], [1, "flex", "justify-between", "items-center", "w-full"], ["label", "Generate New Invite", "icon", "pi pi-plus", "size", "small", "severity", "primary", 3, "onClick", "loading"], [1, "pi", "pi-envelope", "text-4xl", "text-surface-300", "mb-3"], ["label", "Revoke", "size", "small", "severity", "danger", 3, "onClick", "text", "disabled"]], template: function AppCreatorDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-confirmpopup");
      \u0275\u0275elementStart(1, "div", 7)(2, "div", 8);
      \u0275\u0275element(3, "p-button", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, AppCreatorDashboardComponent_Conditional_4_Template, 3, 1, "div", 10);
      \u0275\u0275elementStart(5, "div", 11);
      \u0275\u0275conditionalCreate(6, AppCreatorDashboardComponent_Conditional_6_Template, 8, 1, "div", 12)(7, AppCreatorDashboardComponent_Conditional_7_Template, 3, 2);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, AppCreatorDashboardComponent_ng_template_8_Template, 4, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(10, AppCreatorDashboardComponent_ng_template_10_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(12, AppCreatorDashboardComponent_ng_template_12_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(14, AppCreatorDashboardComponent_ng_template_14_Template, 5, 12, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(16, AppCreatorDashboardComponent_ng_template_16_Template, 2, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(18, AppCreatorDashboardComponent_ng_template_18_Template, 1, 1, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(20, AppCreatorDashboardComponent_ng_template_20_Template, 1, 1, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(22, "p-drawer", 13);
      \u0275\u0275listener("onHide", function AppCreatorDashboardComponent_Template_p_drawer_onHide_22_listener() {
        return ctx.closeInstallerPanel();
      });
      \u0275\u0275conditionalCreate(23, AppCreatorDashboardComponent_Conditional_23_Template, 5, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p-drawer", 13);
      \u0275\u0275listener("onHide", function AppCreatorDashboardComponent_Template_p_drawer_onHide_24_listener() {
        return ctx.closeInvitePanel();
      });
      \u0275\u0275conditionalCreate(25, AppCreatorDashboardComponent_Conditional_25_Template, 5, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_10_0;
      let tmp_12_0;
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.actionError() ? 4 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.error() ? 6 : 7);
      \u0275\u0275advance(16);
      \u0275\u0275property("visible", ctx.installerPanelApp() !== null);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_10_0 = ctx.installerPanelApp()) ? 23 : -1, tmp_10_0);
      \u0275\u0275advance();
      \u0275\u0275property("visible", ctx.invitePanelApp() !== null);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_12_0 = ctx.invitePanelApp()) ? 25 : -1, tmp_12_0);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    RouterModule,
    RouterLink,
    ButtonModule,
    Button,
    PrimeTemplate,
    CardModule,
    ProgressSpinnerModule,
    ProgressSpinner,
    TooltipModule,
    Tooltip,
    DrawerModule,
    Drawer,
    ConfirmPopup,
    MessageModule,
    Message,
    GridComponent,
    AppStatusBadgeComponent,
    AppInviteStatusBadgeComponent,
    ImgFallbackDirective,
    DatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=app-creator-dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppCreatorDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-creator-dashboard", imports: [
      CommonModule,
      RouterModule,
      ButtonModule,
      CardModule,
      ProgressSpinnerModule,
      TooltipModule,
      DrawerModule,
      ConfirmPopup,
      MessageModule,
      GridComponent,
      AppStatusBadgeComponent,
      AppInviteStatusBadgeComponent,
      ImgFallbackDirective
    ], providers: [ConfirmationService], template: `<p-confirmpopup />

<div class="flex flex-col w-full h-full">
  <div class="flex flex-none justify-end items-center px-6 pt-6">
    <p-button
      routerLink="../editor"
      label="Create New App"
      icon="pi pi-plus"
      severity="primary"
    />
  </div>

  @if (actionError()) {
    <div class="px-6 pt-4">
      <p-message severity="error">{{ actionError() }}</p-message>
    </div>
  }

  <!-- Content Area -->
  <div class="overflow-hidden flex-1 p-6 w-full min-h-0">
    @if (error()) {
      <div class="flex flex-col justify-center items-center py-20 text-center">
        <div
          class="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-surface-50"
        >
          <i class="text-3xl pi pi-exclamation-triangle"></i>
        </div>
        <h3 class="mb-2 text-xl font-bold text-surface-900">{{ error() }}</h3>
        <p class="text-surface-600">Please try refreshing the page.</p>
        <p-button
          label="Try Again"
          icon="pi pi-refresh"
          (onClick)="reload()"
          class="mt-4"
          severity="secondary"
        />
      </div>
    } @else {
      <!-- Needs Attention Section -->
      @if (attentionApps().length > 0) {
        <div class="mb-6">
          <h3
            class="mb-3 text-sm font-semibold text-surface-600 uppercase tracking-wide"
          >
            Needs Attention
          </h3>
          <div class="flex flex-col gap-3">
            @for (app of attentionApps(); track app.id) {
              <div
                class="flex items-center gap-4 p-4 rounded-lg border border-surface-200 bg-surface-0"
              >
                <img
                  [src]="app.iconUrl"
                  [alt]="app.name"
                  appImgFallback
                  [fallbackText]="app.name"
                  class="w-10 h-10 rounded object-cover bg-surface-100"
                />
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 mb-1">
                    <span class="font-medium text-surface-900">{{
                      app.name
                    }}</span>
                    <app-status-badge
                      [status]="
                        app.version.pendingVersionStatus ??
                        (app.version.activeVersionId ? 'approved' : 'draft')
                      "
                    />
                  </div>
                  @if (reviewComments().get(app.id)) {
                    <p class="text-sm text-surface-600 truncate">
                      "{{ reviewComments().get(app.id) }}"
                    </p>
                  }
                </div>
                @if (app.version.pendingVersionStatus === 'changesRequested') {
                  <p-button
                    label="Edit"
                    icon="pi pi-pencil"
                    size="small"
                    severity="secondary"
                    (onClick)="editApp(app)"
                  />
                } @else {
                  <p-button
                    label="Submit New Version"
                    icon="pi pi-send"
                    size="small"
                    severity="primary"
                    (onClick)="editApp(app)"
                  />
                }
              </div>
            }
          </div>
        </div>
      }

      @if (apps().length > 0 || isLoading()) {
        <app-grid
          [columns]="columns()"
          [data]="apps()"
          [loading]="isLoading()"
          [pagination]="true"
          [rows]="10"
          [sortable]="true"
          styleClass="h-full"
        />
      } @else {
        <div
          class="flex flex-col justify-center items-center py-24 text-center"
        >
          <div
            class="flex justify-center items-center mb-6 w-20 h-20 rounded-full bg-primary/10"
          >
            <i class="text-4xl pi pi-plus text-primary"></i>
          </div>
          <h3 class="mb-2 text-2xl font-bold text-surface-900">
            Build Your First App
          </h3>
          <p class="mb-8 max-w-md text-surface-600">
            Create custom integrations and widgets to enhance the CypherView
            experience for everyone.
          </p>
          <p-button
            routerLink="../editor"
            label="Start Creating"
            icon="pi pi-rocket"
            severity="primary"
            size="large"
          />
        </div>
      }
    }
  </div>
</div>

<ng-template #appIconTemplate let-app>
  <div class="flex gap-2 items-center">
    <img
      [src]="app.iconUrl"
      [alt]="app.name + ' icon'"
      class="object-cover w-8 h-8 rounded shadow-sm bg-surface-100"
      appImgFallback
      [fallbackText]="app.name"
    />
    <span class="font-medium text-surface-900">{{ app.name }}</span>
  </div>
</ng-template>

<ng-template #statusTemplate let-app>
  <app-status-badge
    [status]="
      app.version.pendingVersionStatus ??
      (app.version.activeVersionId ? 'approved' : 'draft')
    "
  />
</ng-template>

<ng-template #inReviewTemplate let-app>
  @if (app.version.pendingVersionNumber) {
    <div class="flex items-center gap-2">
      <span class="font-mono text-sm">{{
        app.version.pendingVersionNumber
      }}</span>
      <app-status-badge
        [status]="app.version.pendingVersionStatus ?? 'pendingReview'"
      />
    </div>
  } @else {
    <span class="text-surface-400">\u2014</span>
  }
</ng-template>

<ng-template #actionsTemplate let-app>
  <div class="flex gap-2">
    <p-button
      [routerLink]="['/app-store', app.id]"
      icon="pi pi-eye"
      size="small"
      [text]="true"
      severity="secondary"
      pTooltip="View Details"
    />
    <p-button
      icon="pi pi-pencil"
      size="small"
      [text]="true"
      severity="secondary"
      [disabled]="isEditDisabled(app)"
      [pTooltip]="
        isEditDisabled(app)
          ? 'v' +
            app.version.pendingVersionNumber +
            ' is currently under review'
          : 'Edit App'
      "
      (onClick)="editApp(app)"
    />
    @if (app.state !== 'inactive') {
      <p-button
        icon="pi pi-inbox"
        size="small"
        [text]="true"
        severity="secondary"
        pTooltip="Archive App"
        [loading]="processingAppId() === app.id"
        (onClick)="confirmArchiveApp($event, app)"
      />
    }
    <p-button
      icon="pi pi-trash"
      size="small"
      [text]="true"
      severity="danger"
      [disabled]="app.stats.installCount > 0"
      [pTooltip]="
        app.stats.installCount > 0
          ? 'Archive the app first to remove active installations before deleting'
          : 'Delete App'
      "
      [loading]="processingAppId() === app.id"
      (onClick)="confirmDeleteApp($event, app)"
    />
  </div>
</ng-template>

<ng-template #clientIdTemplate let-app>
  @if (app.version.active?.clientId) {
    <div class="flex items-center gap-2">
      <span class="font-mono text-xs text-surface-700">{{ app.version.active?.clientId }}</span>
      <p-button
        icon="pi pi-copy"
        size="small"
        [text]="true"
        severity="secondary"
        pTooltip="Copy Client ID"
        (onClick)="copyClientId(app.version.active?.clientId)"
      />
    </div>
  } @else {
    <span class="text-surface-400">\u2014</span>
  }
</ng-template>

<ng-template #invitesActionTemplate let-app>
  @if (app.visibility === 'unlisted') {
    <p-button
      icon="pi pi-key"
      size="small"
      [text]="true"
      severity="secondary"
      pTooltip="Manage Invites"
      (onClick)="openInvitePanel(app)"
    />
  }
</ng-template>

<ng-template #installersActionTemplate let-app>
  <p-button
    icon="pi pi-users"
    size="small"
    [text]="true"
    severity="secondary"
    pTooltip="View Installers"
    (onClick)="openInstallerPanel(app)"
  />
</ng-template>

<!-- Installers Drawer -->
<p-drawer
  [visible]="installerPanelApp() !== null"
  position="right"
  styleClass="w-[480px]"
  (onHide)="closeInstallerPanel()"
>
  @if (installerPanelApp(); as app) {
    <ng-template pTemplate="header">
      <div class="flex items-center w-full">
        <div>
          <h3 class="text-lg font-semibold text-surface-900">{{ app.name }}</h3>
          <p class="text-sm text-surface-500">Installers</p>
        </div>
      </div>
    </ng-template>

    <div class="flex flex-col gap-3 pt-2">
      @if (installersLoading()) {
        <div class="flex justify-center items-center py-12">
          <p-progressSpinner styleClass="w-8 h-8" strokeWidth="3" />
        </div>
      } @else if (installers().length === 0) {
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <i class="pi pi-users text-4xl text-surface-300 mb-3"></i>
          <p class="text-surface-500 text-sm">No installations yet.</p>
        </div>
      } @else {
        @for (installer of installers(); track installer.id) {
          <div class="flex items-center gap-3 p-3 rounded-lg border border-surface-200 bg-surface-0">
            <div class="flex-1 min-w-0">
              <!-- TODO: replace ownerId with org name once lookup is available -->
              <p class="font-mono text-xs text-surface-700 truncate mb-1">
                {{ installer.ownerId }}
              </p>
              <div class="flex items-center gap-2 flex-wrap">
                <span
                  class="px-2 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider"
                  [ngClass]="installer.isEnabled
                    ? 'bg-green-100 text-green-700'
                    : 'bg-surface-100 text-surface-500'"
                >
                  {{ installer.isEnabled ? 'Enabled' : 'Disabled' }}
                </span>
                @if (installer.pendingFeeAcknowledgement) {
                  <span class="px-2 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider bg-amber-100 text-amber-700">
                    Fee Pending
                  </span>
                }
                <span class="text-xs text-surface-400">
                  Installed {{ installer.createdAt | date: 'mediumDate' }}
                </span>
              </div>
            </div>
          </div>
        }
      }
    </div>
  }
</p-drawer>

<!-- Invite Management Drawer -->
<p-drawer
  [visible]="invitePanelApp() !== null"
  position="right"
  styleClass="w-[480px]"
  (onHide)="closeInvitePanel()"
>
  @if (invitePanelApp(); as app) {
    <ng-template pTemplate="header">
      <div class="flex justify-between items-center w-full">
        <div>
          <h3 class="text-lg font-semibold text-surface-900">{{ app.name }}</h3>
          <p class="text-sm text-surface-500">Invite Management</p>
        </div>
        <p-button
          label="Generate New Invite"
          icon="pi pi-plus"
          size="small"
          severity="primary"
          [loading]="isCreatingInvite()"
          (onClick)="createInvite()"
        />
      </div>
    </ng-template>

    <div class="flex flex-col gap-3 pt-2">
      @if (invitesLoading()) {
        <div class="flex justify-center items-center py-12">
          <p-progressSpinner styleClass="w-8 h-8" strokeWidth="3" />
        </div>
      } @else if (invites().length === 0) {
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <i class="pi pi-envelope text-4xl text-surface-300 mb-3"></i>
          <p class="text-surface-500 text-sm">No invites yet. Generate one to share access.</p>
        </div>
      } @else {
        @for (invite of invites(); track invite.id) {
          <div class="flex items-center gap-3 p-3 rounded-lg border border-surface-200 bg-surface-0">
            <div class="flex-1 min-w-0">
              <p class="font-mono text-xs text-surface-700 truncate mb-1">{{ invite.token }}</p>
              <div class="flex items-center gap-2">
                <app-invite-status-badge [status]="invite.status" />
                @if (invite.expiresDate) {
                  <span class="text-xs text-surface-400">
                    Expires {{ invite.expiresDate | date: 'mediumDate' }}
                  </span>
                }
              </div>
            </div>
            <p-button
              label="Revoke"
              size="small"
              severity="danger"
              [text]="true"
              [disabled]="invite.status !== 'pending'"
              (onClick)="revokeInvite(invite)"
            />
          </div>
        }
      }
    </div>
  }
</p-drawer>
`, styles: ["/* src/app/features/app-store/pages/app-creator-dashboard/app-creator-dashboard.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=app-creator-dashboard.component.css.map */\n"] }]
  }], () => [], { appIconTemplate: [{
    type: ViewChild,
    args: ["appIconTemplate", { static: true }]
  }], statusTemplate: [{
    type: ViewChild,
    args: ["statusTemplate", { static: true }]
  }], inReviewTemplate: [{
    type: ViewChild,
    args: ["inReviewTemplate", { static: true }]
  }], actionsTemplate: [{
    type: ViewChild,
    args: ["actionsTemplate", { static: true }]
  }], invitesActionTemplate: [{
    type: ViewChild,
    args: ["invitesActionTemplate", { static: true }]
  }], installersActionTemplate: [{
    type: ViewChild,
    args: ["installersActionTemplate", { static: true }]
  }], clientIdTemplate: [{
    type: ViewChild,
    args: ["clientIdTemplate", { static: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppCreatorDashboardComponent, { className: "AppCreatorDashboardComponent", filePath: "src/app/features/app-store/pages/app-creator-dashboard/app-creator-dashboard.component.ts", lineNumber: 55 });
})();
export {
  AppCreatorDashboardComponent
};
//# sourceMappingURL=chunk-RI5NI6MI.js.map
