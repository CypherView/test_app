import {
  AppStoreService,
  mapAppReviewFromApi
} from "./chunk-MCXFASER.js";
import {
  Tag,
  TagModule
} from "./chunk-KQ2PA3AE.js";
import {
  Timeline,
  TimelineModule
} from "./chunk-TE7KYM2F.js";
import {
  Card,
  CardModule
} from "./chunk-XG3QZFP7.js";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionModule,
  AccordionPanel
} from "./chunk-UWSUC7LR.js";
import {
  Rating,
  RatingModule
} from "./chunk-K2ZPTIYP.js";
import {
  Dialog,
  DialogModule,
  Textarea,
  TextareaModule
} from "./chunk-GMXIORZL.js";
import {
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-QDDPOQB6.js";
import {
  Button,
  ButtonModule,
  DefaultValueAccessor,
  FormsModule,
  InputText,
  InputTextModule,
  NgControlStatus,
  NgModel,
  PrimeTemplate,
  Tooltip,
  TooltipModule
} from "./chunk-A5WLHX2Q.js";
import {
  AuthDataService
} from "./chunk-5X3HWCES.js";
import "./chunk-BHSMGPUW.js";
import "./chunk-WREEVIYK.js";
import {
  DEFAULT_SYSTEM_ID
} from "./chunk-DXUIOPUE.js";
import {
  ActivatedRoute,
  ApiUrlService,
  AsyncPipe,
  CommonModule,
  DatePipe,
  DecimalPipe,
  HttpClient,
  HttpParams,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-EMFP3DUF.js";
import {
  Component,
  Injectable,
  catchError,
  inject,
  map,
  of,
  setClassMetadata,
  shareReplay,
  switchMap,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LH7TWNW2.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/app-store/services/review.service.ts
var ReviewService = class _ReviewService {
  http = inject(HttpClient);
  apiUrlService = inject(ApiUrlService);
  baseUrl;
  constructor() {
    this.baseUrl = `${this.apiUrlService.getCurrentApiUrl()}/appstore`;
  }
  /**
   * Get reviews for a specific app
   * @param appId The app ID
   * @param params Optional query parameters for filtering
   */
  getReviewsForApp(appId, params) {
    let httpParams = new HttpParams();
    if (params) {
      if (params.owner !== void 0) {
        httpParams = httpParams.set("owner", params.owner);
      }
      if (params.offset !== void 0) {
        httpParams = httpParams.set("offset", params.offset.toString());
      }
      if (params.limit !== void 0) {
        httpParams = httpParams.set("limit", params.limit.toString());
      }
      if (params.sort !== void 0) {
        httpParams = httpParams.set("sort", params.sort);
      }
      if (params.filter !== void 0) {
        httpParams = httpParams.set("filter", params.filter);
      }
    }
    return this.http.get(`${this.baseUrl}/apps/${appId}/reviews`, {
      params: httpParams
    }).pipe(map((response) => response.items.map(mapAppReviewFromApi)));
  }
  /**
   * Add a review for an app
   * @param appId The app ID
   * @param review Review data
   */
  addReview(appId, review) {
    const request = {
      appId,
      ownerId: review.userId ?? "",
      userName: review.userName ?? "",
      organizationName: review.organizationName ?? "",
      rating: review.rating ?? 0,
      title: review.title ?? "",
      comment: review.comment ?? ""
    };
    return this.http.post(`${this.baseUrl}/apps/${appId}/reviews`, request).pipe(map(mapAppReviewFromApi));
  }
  static \u0275fac = function ReviewService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReviewService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReviewService, factory: _ReviewService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReviewService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/features/app-store/pages/app-detail/app-detail.component.ts
var _c0 = () => ["details", "gallery", "reviews"];
function AppDetailComponent_Conditional_0_ng_template_3_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275element(1, "i", 53);
    \u0275\u0275elementStart(2, "span", 54);
    \u0275\u0275text(3, "Verified Developer");
    \u0275\u0275elementEnd()();
  }
}
function AppDetailComponent_Conditional_0_ng_template_3_Conditional_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " This app is in draft status. Save changes in the editor and submit for review when ready. ");
  }
}
function AppDetailComponent_Conditional_0_ng_template_3_Conditional_13_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " This app is under review. Installation is disabled until the review is complete. ");
  }
}
function AppDetailComponent_Conditional_0_ng_template_3_Conditional_13_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " This app was rejected. Please review feedback and create a new submission. ");
  }
}
function AppDetailComponent_Conditional_0_ng_template_3_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275conditionalCreate(3, AppDetailComponent_Conditional_0_ng_template_3_Conditional_13_Conditional_3_Template, 1, 0)(4, AppDetailComponent_Conditional_0_ng_template_3_Conditional_13_Conditional_4_Template, 1, 0)(5, AppDetailComponent_Conditional_0_ng_template_3_Conditional_13_Conditional_5_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const app_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(app_r2.status === "DRAFT" ? 3 : app_r2.status === "PENDING_REVIEW" ? 4 : app_r2.status === "REJECTED" ? 5 : -1);
  }
}
function AppDetailComponent_Conditional_0_ng_template_3_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 31)(2, "p", 56);
    \u0275\u0275text(3, "Draft App");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 57);
    \u0275\u0275text(5, "Continue editing or submit for review");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 58)(7, "p-button", 59);
    \u0275\u0275listener("onClick", function AppDetailComponent_Conditional_0_ng_template_3_Conditional_14_Template_p_button_onClick_7_listener() {
      \u0275\u0275restoreView(_r3);
      const app_r2 = \u0275\u0275nextContext(2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.startEdit(app_r2));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p-button", 60);
    \u0275\u0275listener("onClick", function AppDetailComponent_Conditional_0_ng_template_3_Conditional_14_Template_p_button_onClick_8_listener() {
      \u0275\u0275restoreView(_r3);
      const app_r2 = \u0275\u0275nextContext(2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.submitDraftForReview(app_r2));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275property("loading", ctx_r3.isSubmittingApproval)("disabled", ctx_r3.isSubmittingApproval);
  }
}
function AppDetailComponent_Conditional_0_ng_template_3_Conditional_15_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.approvalError);
  }
}
function AppDetailComponent_Conditional_0_ng_template_3_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "p", 61);
    \u0275\u0275text(2, "Admin Review Actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 58)(4, "p-button", 62);
    \u0275\u0275listener("onClick", function AppDetailComponent_Conditional_0_ng_template_3_Conditional_15_Template_p_button_onClick_4_listener() {
      \u0275\u0275restoreView(_r5);
      const app_r2 = \u0275\u0275nextContext(2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.approveApp(app_r2));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p-button", 63);
    \u0275\u0275listener("onClick", function AppDetailComponent_Conditional_0_ng_template_3_Conditional_15_Template_p_button_onClick_5_listener() {
      \u0275\u0275restoreView(_r5);
      const app_r2 = \u0275\u0275nextContext(2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.rejectApp(app_r2));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, AppDetailComponent_Conditional_0_ng_template_3_Conditional_15_Conditional_6_Template, 2, 1, "p", 64);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("loading", ctx_r3.isSubmittingApproval)("disabled", ctx_r3.isSubmittingApproval);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r3.isSubmittingApproval)("disabled", ctx_r3.isSubmittingApproval);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.approvalError ? 6 : -1);
  }
}
function AppDetailComponent_Conditional_0_ng_template_3_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "p-button", 65);
    \u0275\u0275listener("onClick", function AppDetailComponent_Conditional_0_ng_template_3_Conditional_16_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r6);
      const app_r2 = \u0275\u0275nextContext(2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.suspendApp(app_r2));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("outlined", true)("loading", ctx_r3.isSubmittingApproval)("disabled", ctx_r3.isSubmittingApproval);
  }
}
function AppDetailComponent_Conditional_0_ng_template_3_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 66);
    \u0275\u0275listener("onClick", function AppDetailComponent_Conditional_0_ng_template_3_Conditional_36_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r7);
      const app_r2 = \u0275\u0275nextContext(2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.startEdit(app_r2));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("outlined", true);
  }
}
function AppDetailComponent_Conditional_0_ng_template_3_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-button", 52);
  }
  if (rf & 2) {
    const app_r2 = \u0275\u0275nextContext(2);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("outlined", true)("disabled", true)("pTooltip", ctx_r3.getEditDisabledReason(app_r2));
  }
}
function AppDetailComponent_Conditional_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "img", 30);
    \u0275\u0275elementStart(2, "div", 31)(3, "div", 32)(4, "h2", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 34);
    \u0275\u0275element(7, "p-tag", 35)(8, "p-tag", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 36)(10, "span", 37);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, AppDetailComponent_Conditional_0_ng_template_3_Conditional_12_Template, 4, 0, "span", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, AppDetailComponent_Conditional_0_ng_template_3_Conditional_13_Template, 6, 1, "div", 39);
    \u0275\u0275conditionalCreate(14, AppDetailComponent_Conditional_0_ng_template_3_Conditional_14_Template, 9, 2, "div", 40);
    \u0275\u0275conditionalCreate(15, AppDetailComponent_Conditional_0_ng_template_3_Conditional_15_Template, 7, 5, "div", 41);
    \u0275\u0275conditionalCreate(16, AppDetailComponent_Conditional_0_ng_template_3_Conditional_16_Template, 2, 3, "div", 42);
    \u0275\u0275elementStart(17, "div", 43)(18, "div", 44);
    \u0275\u0275element(19, "p-rating", 45);
    \u0275\u0275elementStart(20, "span", 46);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 47);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div")(25, "span", 46);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 47);
    \u0275\u0275text(29, " installations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 47);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 48);
    \u0275\u0275element(34, "p-button", 49)(35, "p-button", 50);
    \u0275\u0275conditionalCreate(36, AppDetailComponent_Conditional_0_ng_template_3_Conditional_36_Template, 1, 1, "p-button", 51);
    \u0275\u0275conditionalCreate(37, AppDetailComponent_Conditional_0_ng_template_3_Conditional_37_Template, 1, 3, "p-button", 52);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const app_r2 = \u0275\u0275nextContext();
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", app_r2.iconUrl, \u0275\u0275sanitizeUrl)("alt", app_r2.name + " icon");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(app_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r3.statusLabel(app_r2.status))("severity", ctx_r3.statusSeverity(app_r2.status));
    \u0275\u0275advance();
    \u0275\u0275property("value", app_r2.pricing.model === "FREE" ? "Free" : app_r2.pricing.currency + " " + app_r2.pricing.price)("severity", app_r2.pricing.model === "FREE" ? "success" : "info");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(app_r2.developerName);
    \u0275\u0275advance();
    \u0275\u0275conditional(app_r2.developerName ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r3.isApproved(app_r2) ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.canEdit(app_r2) ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isAdmin && ctx_r3.isInPendingReview(app_r2) ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isAdmin && ctx_r3.isApproved(app_r2) ? 16 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", app_r2.averageRating)("readonly", true)("stars", 5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(app_r2.averageRating);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", app_r2.reviewCount, " reviews)");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 25, app_r2.installCount));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Updated ", \u0275\u0275pipeBind2(32, 27, app_r2.updatedAt, "mediumDate"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("label", app_r2.pricing.model === "FREE" ? "Install Now" : "Start Free Trial")("disabled", !ctx_r3.isApproved(app_r2));
    \u0275\u0275advance();
    \u0275\u0275property("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.canEdit(app_r2) ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isEditDisabled(app_r2) ? 37 : -1);
  }
}
function AppDetailComponent_Conditional_0_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1, " Adds widget to ");
    \u0275\u0275elementStart(2, "span", 37);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const point_r8 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(point_r8.screenId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", point_r8.widgetSize, ") ");
  }
}
function AppDetailComponent_Conditional_0_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 13);
  }
  if (rf & 2) {
    const category_r9 = ctx.$implicit;
    \u0275\u0275property("value", category_r9);
  }
}
function AppDetailComponent_Conditional_0_Conditional_48_Conditional_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275element(1, "i", 72);
    \u0275\u0275elementEnd();
  }
}
function AppDetailComponent_Conditional_0_Conditional_48_Conditional_0_ng_template_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 75);
    \u0275\u0275element(1, "i", 81);
    \u0275\u0275text(2, " Verified Purchase ");
    \u0275\u0275elementEnd();
  }
}
function AppDetailComponent_Conditional_0_Conditional_48_Conditional_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 32)(2, "div")(3, "div", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 74);
    \u0275\u0275text(6);
    \u0275\u0275conditionalCreate(7, AppDetailComponent_Conditional_0_Conditional_48_Conditional_0_ng_template_3_Conditional_7_Template, 3, 0, "span", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 74);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 76);
    \u0275\u0275element(12, "p-rating", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 56);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 77);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 78)(18, "button", 79);
    \u0275\u0275listener("click", function AppDetailComponent_Conditional_0_Conditional_48_Conditional_0_ng_template_3_Template_button_click_18_listener() {
      const review_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.markHelpful(review_r11.id));
    });
    \u0275\u0275element(19, "i", 80);
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const review_r11 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", review_r11.userName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", review_r11.organizationName, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(review_r11.isVerifiedPurchase ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 10, review_r11.createdAt, "short"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", review_r11.rating)("readonly", true)("stars", 5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(review_r11.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(review_r11.comment);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Helpful (", review_r11.helpfulCount, ")");
  }
}
function AppDetailComponent_Conditional_0_Conditional_48_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "p-timeline", 69);
    \u0275\u0275template(2, AppDetailComponent_Conditional_0_Conditional_48_Conditional_0_ng_template_2_Template, 2, 0, "ng-template", 70)(3, AppDetailComponent_Conditional_0_Conditional_48_Conditional_0_ng_template_3_Template, 22, 13, "ng-template", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reviews_r12 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("value", reviews_r12);
  }
}
function AppDetailComponent_Conditional_0_Conditional_48_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275element(1, "i", 82);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No reviews yet. Be the first to review this app!");
    \u0275\u0275elementEnd()();
  }
}
function AppDetailComponent_Conditional_0_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AppDetailComponent_Conditional_0_Conditional_48_Conditional_0_Template, 4, 1, "div", 67)(1, AppDetailComponent_Conditional_0_Conditional_48_Conditional_1_Template, 4, 0, "div", 68);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.length > 0 ? 0 : 1);
  }
}
function AppDetailComponent_Conditional_0_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.reviewError);
  }
}
function AppDetailComponent_Conditional_0_ng_template_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83)(1, "p-button", 84);
    \u0275\u0275listener("onClick", function AppDetailComponent_Conditional_0_ng_template_65_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.closeReviewModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 85);
    \u0275\u0275listener("onClick", function AppDetailComponent_Conditional_0_ng_template_65_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.submitReview());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("loading", ctx_r3.isSubmittingReview)("disabled", ctx_r3.isSubmittingReview || ctx_r3.newReviewRating < 1 || !ctx_r3.newReviewTitle.trim() || !ctx_r3.newReviewComment.trim());
  }
}
function AppDetailComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "p-button", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-card", 2);
    \u0275\u0275template(3, AppDetailComponent_Conditional_0_ng_template_3_Template, 38, 30, "ng-template", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "p-accordion", 5)(6, "p-accordion-panel", 6)(7, "p-accordion-header")(8, "span", 7);
    \u0275\u0275text(9, "App Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p-accordion-content")(11, "div", 8)(12, "div")(13, "h4", 9);
    \u0275\u0275text(14, "About this App");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 10);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "h4", 9);
    \u0275\u0275text(19, "Integration Points");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ul", 11);
    \u0275\u0275repeaterCreate(21, AppDetailComponent_Conditional_0_For_22_Template, 5, 2, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div")(24, "h4", 9);
    \u0275\u0275text(25, "Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 12);
    \u0275\u0275repeaterCreate(27, AppDetailComponent_Conditional_0_For_28_Template, 1, 1, "p-tag", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(29, "p-accordion-panel", 14)(30, "p-accordion-header")(31, "span", 7);
    \u0275\u0275text(32, "Gallery");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "p-accordion-content")(34, "div", 15)(35, "div", 16);
    \u0275\u0275text(36, " Screenshot 1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 16);
    \u0275\u0275text(38, " Screenshot 2 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 16);
    \u0275\u0275text(40, " Screenshot 3 ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "p-accordion-panel", 17)(42, "p-accordion-header")(43, "span", 7);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "p-accordion-content")(46, "div", 18)(47, "p-button", 19);
    \u0275\u0275listener("onClick", function AppDetailComponent_Conditional_0_Template_p_button_onClick_47_listener() {
      const app_r2 = \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openReviewModal(app_r2.id));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(48, AppDetailComponent_Conditional_0_Conditional_48_Template, 2, 1);
    \u0275\u0275pipe(49, "async");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(50, "p-dialog", 20);
    \u0275\u0275twoWayListener("visibleChange", function AppDetailComponent_Conditional_0_Template_p_dialog_visibleChange_50_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.showReviewModal, $event) || (ctx_r3.showReviewModal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onHide", function AppDetailComponent_Conditional_0_Template_p_dialog_onHide_50_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeReviewModal());
    });
    \u0275\u0275elementStart(51, "div", 8)(52, "div")(53, "label", 21);
    \u0275\u0275text(54, "Rating");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "p-rating", 22);
    \u0275\u0275twoWayListener("ngModelChange", function AppDetailComponent_Conditional_0_Template_p_rating_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newReviewRating, $event) || (ctx_r3.newReviewRating = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div")(57, "label", 23);
    \u0275\u0275text(58, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function AppDetailComponent_Conditional_0_Template_input_ngModelChange_59_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newReviewTitle, $event) || (ctx_r3.newReviewTitle = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div")(61, "label", 25);
    \u0275\u0275text(62, "Comment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "textarea", 26);
    \u0275\u0275twoWayListener("ngModelChange", function AppDetailComponent_Conditional_0_Template_textarea_ngModelChange_63_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newReviewComment, $event) || (ctx_r3.newReviewComment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(64, AppDetailComponent_Conditional_0_Conditional_64_Template, 2, 1, "p", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(65, AppDetailComponent_Conditional_0_ng_template_65_Template, 3, 2, "ng-template", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_9_0;
    const app_r2 = ctx;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("text", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", \u0275\u0275pureFunction0(17, _c0))("multiple", true);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", app_r2.description, " ");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(app_r2.integrationPoints);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(app_r2.categories);
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate1("Reviews (", app_r2.reviewCount, ")");
    \u0275\u0275advance(4);
    \u0275\u0275conditional((tmp_9_0 = \u0275\u0275pipeBind1(49, 15, ctx_r3.reviews$)) ? 48 : -1, tmp_9_0);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("visible", ctx_r3.showReviewModal);
    \u0275\u0275property("modal", true)("draggable", false)("resizable", false);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newReviewRating);
    \u0275\u0275property("stars", 5);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newReviewTitle);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newReviewComment);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.reviewError ? 64 : -1);
  }
}
function AppDetailComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275element(1, "p-progressSpinner", 87);
    \u0275\u0275elementStart(2, "p", 88);
    \u0275\u0275text(3, "Loading app details...");
    \u0275\u0275elementEnd()();
  }
}
function AppDetailComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275element(1, "span", 89);
    \u0275\u0275elementStart(2, "p", 90);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.error);
  }
}
function AppDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AppDetailComponent_Conditional_2_Conditional_0_Template, 4, 0, "div", 86)(1, AppDetailComponent_Conditional_2_Conditional_1_Template, 4, 1, "div", 86);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r3.loading ? 0 : ctx_r3.error ? 1 : -1);
  }
}
var AppDetailComponent = class _AppDetailComponent {
  app$;
  reviews$;
  loading = false;
  error = null;
  isSubmittingReview = false;
  reviewError = null;
  isSubmittingApproval = false;
  approvalError = null;
  // Review Form
  showReviewModal = false;
  targetAppId = null;
  newReviewRating = 5;
  newReviewTitle = "";
  newReviewComment = "";
  route = inject(ActivatedRoute);
  router = inject(Router);
  appStoreService = inject(AppStoreService);
  reviewService = inject(ReviewService);
  authDataService = inject(AuthDataService);
  currentUserId = this.authDataService.getUserProfile()?.id;
  isAdmin = this.authDataService.getUserProfile()?.roles?.some((role) => role.id === DEFAULT_SYSTEM_ID);
  constructor() {
    this.app$ = this.route.paramMap.pipe(switchMap((params) => {
      const id = params.get("id");
      if (id === null || id === void 0) {
        this.loading = false;
        this.error = "App not found.";
        return of(null);
      }
      this.loading = true;
      this.error = null;
      this.reviews$ = this.reviewService.getReviewsForApp(id);
      return this.appStoreService.getAppById(id).pipe(tap(() => {
        this.loading = false;
      }), catchError(() => {
        this.loading = false;
        this.error = "Unable to load app details. Please try again.";
        return of(null);
      }));
    }), shareReplay(1));
  }
  openReviewModal(appId) {
    this.targetAppId = appId;
    this.showReviewModal = true;
  }
  closeReviewModal() {
    this.showReviewModal = false;
    this.targetAppId = null;
    this.resetReviewForm();
  }
  submitReview() {
    if (this.targetAppId === null)
      return;
    const title = this.newReviewTitle.trim();
    const comment = this.newReviewComment.trim();
    if (!title || !comment || this.newReviewRating < 1) {
      this.reviewError = "Please provide a title, comment, and rating.";
      return;
    }
    this.reviewError = null;
    this.isSubmittingReview = true;
    this.reviewService.addReview(this.targetAppId, {
      userId: "current-user",
      userName: "Current User",
      organizationName: "My Org",
      rating: this.newReviewRating,
      title,
      comment,
      isVerifiedPurchase: true
    }).pipe(tap(() => {
      if (this.targetAppId !== null) {
        this.reviews$ = this.reviewService.getReviewsForApp(this.targetAppId);
      }
      this.closeReviewModal();
    }), catchError(() => {
      this.reviewError = "Could not submit your review. Please try again.";
      return of(null);
    })).subscribe({
      complete: () => this.isSubmittingReview = false
    });
  }
  markHelpful(_reviewId) {
  }
  resetReviewForm() {
    this.newReviewRating = 5;
    this.newReviewTitle = "";
    this.newReviewComment = "";
  }
  isApproved(app) {
    return app?.status === "APPROVED";
  }
  canEdit(app) {
    if (!app)
      return false;
    return app.userId === this.currentUserId && app.status === "DRAFT";
  }
  statusSeverity(status) {
    if (status === "APPROVED")
      return "success";
    if (status === "PENDING_REVIEW")
      return "warn";
    if (status === "DRAFT")
      return "secondary";
    if (status === "SUSPENDED")
      return "danger";
    return "info";
  }
  statusLabel(status) {
    return status.toLowerCase().split("_").map((part) => part[0].toUpperCase() + part.slice(1)).join(" ");
  }
  startEdit(app) {
    this.router.navigate(["/app-store/create"], {
      queryParams: { appId: app.id },
      state: { appToEdit: app }
    }).catch(() => {
    });
  }
  isEditDisabled(app) {
    if (!app)
      return true;
    return !this.canEdit(app);
  }
  getEditDisabledReason(app) {
    if (!app)
      return "";
    if (app.status === "PENDING_REVIEW") {
      return "Editing is disabled while under review";
    }
    if (app.status === "APPROVED") {
      return "Editing is disabled for approved apps";
    }
    if (app.status === "SUSPENDED") {
      return "Editing is disabled for suspended apps";
    }
    if (app.status === "REJECTED") {
      return "App was rejected. Create a new app or contact support.";
    }
    return "You can only edit apps in draft status";
  }
  isInPendingReview(app) {
    return app?.status === "PENDING_REVIEW";
  }
  approveApp(app) {
    if (!app)
      return;
    this.approvalError = null;
    this.isSubmittingApproval = true;
    this.appStoreService.approveApp(app.id).pipe(tap(() => {
      this.approvalError = null;
    }), catchError(() => {
      this.approvalError = "Could not approve this app. Please try again.";
      return of(null);
    })).subscribe({
      complete: () => this.isSubmittingApproval = false
    });
  }
  rejectApp(app) {
    if (!app)
      return;
    this.approvalError = null;
    this.isSubmittingApproval = true;
    this.appStoreService.rejectApp(app.id).pipe(tap(() => {
      this.approvalError = null;
    }), catchError(() => {
      this.approvalError = "Could not reject this app. Please try again.";
      return of(null);
    })).subscribe({
      complete: () => this.isSubmittingApproval = false
    });
  }
  suspendApp(app) {
    if (!app)
      return;
    this.approvalError = null;
    this.isSubmittingApproval = true;
    this.appStoreService.suspendApp(app.id).pipe(tap(() => {
      this.approvalError = null;
    }), catchError(() => {
      this.approvalError = "Could not suspend this app. Please try again.";
      return of(null);
    })).subscribe({
      complete: () => this.isSubmittingApproval = false
    });
  }
  submitDraftForReview(app) {
    if (!app?.status || app.status !== "DRAFT")
      return;
    this.approvalError = null;
    this.isSubmittingApproval = true;
    this.appStoreService.submitForReview(app.id).pipe(tap(() => {
      this.approvalError = null;
    }), catchError(() => {
      this.approvalError = "Could not submit for review. Please try again.";
      return of(null);
    })).subscribe({
      complete: () => this.isSubmittingApproval = false
    });
  }
  static \u0275fac = function AppDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppDetailComponent, selectors: [["app-app-detail"]], decls: 3, vars: 3, consts: [[1, "p-4", "flex-none"], ["routerLink", "..", "label", "Back to Browse", "icon", "pi pi-arrow-left", "size", "small", 3, "text"], [1, "m-4"], ["pTemplate", "content"], [1, "details-container", "m-4"], [3, "value", "multiple"], ["value", "details"], [1, "uppercase"], [1, "space-y-4"], [1, "font-semibold", "mb-2"], [1, "text-sm", "leading-relaxed", "whitespace-pre-line"], [1, "list-disc", "list-inside", "text-sm", "space-y-1"], [1, "flex", "gap-2", "flex-wrap"], ["severity", "secondary", 3, "value"], ["value", "gallery"], [1, "flex", "gap-4", "overflow-x-auto", "pb-4"], [1, "w-64", "h-40", "border", "border-subtle", "rounded-lg", "flex-shrink-0", "flex", "items-center", "justify-center", "text-muted"], ["value", "reviews"], [1, "mb-4"], ["label", "Write a Review", "icon", "pi pi-pencil", "size", "small", 3, "onClick"], ["header", "Write a Review", "styleClass", "w-full md:w-1/2", 3, "visibleChange", "onHide", "visible", "modal", "draggable", "resizable"], ["for", "review-rating", 1, "block", "text-sm", "font-medium", "mb-1"], [3, "ngModelChange", "ngModel", "stars"], ["for", "review-title", 1, "block", "text-sm", "font-medium", "mb-1"], ["id", "review-title", "pInputText", "", "type", "text", "placeholder", "Great app for fleet monitoring", 1, "w-full", 3, "ngModelChange", "ngModel"], ["for", "review-comment", 1, "block", "text-sm", "font-medium", "mb-1"], ["id", "review-comment", "pTextarea", "", "rows", "4", "placeholder", "Share your experience...", 1, "w-full", 3, "ngModelChange", "ngModel"], [1, "text-danger", "text-sm"], ["pTemplate", "footer"], [1, "flex", "flex-col", "md:flex-row", "gap-6"], [1, "w-24", "h-24", "rounded-lg", "object-cover", 3, "src", "alt"], [1, "flex-grow"], [1, "flex", "items-start", "justify-between", "mb-2"], [1, "text-2xl", "font-semibold"], [1, "flex", "gap-2", "items-center"], [3, "value", "severity"], [1, "flex", "items-center", "gap-2", "text-sm", "mb-4"], [1, "font-medium"], [1, "flex", "items-center", "gap-1"], [1, "p-3", "mb-3", "rounded-lg", "bg-yellow-50", "text-sm", "text-yellow-800", "border", "border-yellow-200", "flex", "items-center", "gap-2"], [1, "p-3", "mb-3", "rounded-lg", "bg-blue-50", "text-sm", "text-blue-800", "border", "border-blue-200", "flex", "items-between", "gap-2"], [1, "p-3", "mb-3", "rounded-lg", "bg-blue-50", "text-sm", "text-blue-800", "border", "border-blue-200"], [1, "p-3", "mb-3", "rounded-lg", "bg-gray-50", "text-sm", "text-gray-700", "border", "border-gray-200"], [1, "flex", "items-center", "gap-6", "mb-4", "text-sm", "flex-wrap"], [1, "flex", "items-center", "gap-2"], [3, "ngModel", "readonly", "stars"], [1, "font-semibold"], [1, "text-muted"], [1, "flex", "gap-3"], ["severity", "primary", "icon", "pi pi-download", 3, "label", "disabled"], ["label", "Contact Sales", "severity", "secondary", "icon", "pi pi-envelope", 3, "outlined"], ["label", "Edit App", "icon", "pi pi-pencil", "severity", "secondary", 3, "outlined"], ["label", "Edit App", "icon", "pi pi-pencil", "severity", "secondary", 3, "outlined", "disabled", "pTooltip"], [1, "pi", "pi-verified", "text-primary"], [1, "text-sm"], [1, "pi", "pi-info-circle"], [1, "font-semibold", "mb-1"], [1, "text-xs"], [1, "flex", "gap-2"], ["label", "Edit", "icon", "pi pi-pencil", "severity", "info", "size", "small", 3, "onClick"], ["label", "Submit for Review", "icon", "pi pi-send", "severity", "primary", "size", "small", 3, "onClick", "loading", "disabled"], [1, "mb-2", "font-semibold"], ["label", "Approve", "icon", "pi pi-check", "severity", "success", "size", "small", 3, "onClick", "loading", "disabled"], ["label", "Reject", "icon", "pi pi-times", "severity", "danger", "size", "small", 3, "onClick", "loading", "disabled"], [1, "text-danger", "text-xs", "mt-2"], ["label", "Suspend App", "icon", "pi pi-ban", "severity", "secondary", "size", "small", 3, "onClick", "outlined", "loading", "disabled"], ["label", "Edit App", "icon", "pi pi-pencil", "severity", "secondary", 3, "onClick", "outlined"], [1, "max-h-[600px]", "overflow-y-auto", "pr-2"], [1, "text-center", "py-8", "text-muted"], ["align", "right", 3, "value"], ["pTemplate", "marker"], [1, "flex", "items-center", "justify-center", "w-8", "h-8", "rounded-full", "bg-primary", "text-primary-contrast"], [1, "pi", "pi-user"], [1, "pb-6", "text-left"], [1, "text-sm", "text-muted"], [1, "ml-2"], [1, "mb-2"], [1, "text-sm", "mb-2"], [1, "flex", "items-center", "gap-4", "text-sm"], [1, "text-muted", "hover:text-primary", "flex", "items-center", "gap-1", 3, "click"], [1, "pi", "pi-thumbs-up"], [1, "pi", "pi-check-circle", "text-success"], [1, "pi", "pi-comments", "text-4xl", "mb-2", "block"], [1, "flex", "justify-end", "gap-2", "w-full"], ["label", "Cancel", "severity", "secondary", 3, "onClick"], ["label", "Submit Review", "icon", "pi pi-check", "severity", "primary", 3, "onClick", "loading", "disabled"], [1, "flex", "flex-col", "items-center", "justify-center", "py-12", "gap-3"], ["strokeWidth", "4", 1, "w-10", "h-10"], [1, "text", "muted"], [1, "pi", "pi-exclamation-triangle", "text-danger", "text-4xl"], [1, "text-lg", "font-semibold"]], template: function AppDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AppDetailComponent_Conditional_0_Template, 66, 18);
      \u0275\u0275pipe(1, "async");
      \u0275\u0275conditionalBranchCreate(2, AppDetailComponent_Conditional_2_Template, 2, 1);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(1, 1, ctx.app$)) ? 0 : 2, tmp_0_0);
    }
  }, dependencies: [
    CommonModule,
    RouterModule,
    RouterLink,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    ButtonModule,
    Button,
    PrimeTemplate,
    TagModule,
    Tag,
    RatingModule,
    Rating,
    DialogModule,
    Dialog,
    InputTextModule,
    InputText,
    TextareaModule,
    Textarea,
    TooltipModule,
    Tooltip,
    AccordionModule,
    Accordion,
    AccordionPanel,
    AccordionHeader,
    AccordionContent,
    CardModule,
    Card,
    TimelineModule,
    Timeline,
    ProgressSpinnerModule,
    ProgressSpinner,
    AsyncPipe,
    DecimalPipe,
    DatePipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  font-family: var(--font-family);\n  font-size: var(--base-font-size);\n  font-weight: var(--font-weight);\n  background-color: var(--main-background-color);\n  color: var(--nav-text-color);\n}\n/*# sourceMappingURL=app-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppDetailComponent, [{
    type: Component,
    args: [{ selector: "app-app-detail", standalone: true, imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      ButtonModule,
      TagModule,
      RatingModule,
      DialogModule,
      InputTextModule,
      TextareaModule,
      TooltipModule,
      AccordionModule,
      CardModule,
      TimelineModule,
      ProgressSpinnerModule
    ], template: `@if (app$ | async; as app) {
  <!-- Back Button -->
  <div class="p-4 flex-none">
    <p-button
      routerLink=".."
      label="Back to Browse"
      icon="pi pi-arrow-left"
      [text]="true"
      size="small"
    />
  </div>

  <!-- App Header -->
  <p-card class="m-4">
    <ng-template pTemplate="content">
      <div class="flex flex-col md:flex-row gap-6">
        <img
          [src]="app.iconUrl"
          [alt]="app.name + ' icon'"
          class="w-24 h-24 rounded-lg object-cover"
        />
        <div class="flex-grow">
          <div class="flex items-start justify-between mb-2">
            <h2 class="text-2xl font-semibold">{{ app.name }}</h2>
            <div class="flex gap-2 items-center">
              <p-tag
                [value]="statusLabel(app.status)"
                [severity]="statusSeverity(app.status)"
              ></p-tag>
              <p-tag
                [value]="
                  app.pricing.model === 'FREE'
                    ? 'Free'
                    : app.pricing.currency + ' ' + app.pricing.price
                "
                [severity]="app.pricing.model === 'FREE' ? 'success' : 'info'"
              ></p-tag>
            </div>
          </div>
          <div class="flex items-center gap-2 text-sm mb-4">
            <span class="font-medium">{{ app.developerName }}</span>
            @if (app.developerName) {
              <span class="flex items-center gap-1">
                <i class="pi pi-verified text-primary"></i>
                <span class="text-sm">Verified Developer</span>
              </span>
            }
          </div>
          @if (!isApproved(app)) {
            <div
              class="p-3 mb-3 rounded-lg bg-yellow-50 text-sm text-yellow-800 border border-yellow-200 flex items-center gap-2"
            >
              <i class="pi pi-info-circle"></i>
              <span>
                @if (app.status === 'DRAFT') {
                  This app is in draft status. Save changes in the editor and
                  submit for review when ready.
                } @else if (app.status === 'PENDING_REVIEW') {
                  This app is under review. Installation is disabled until the
                  review is complete.
                } @else if (app.status === 'REJECTED') {
                  This app was rejected. Please review feedback and create a new
                  submission.
                }
              </span>
            </div>
          }
          @if (canEdit(app)) {
            <div
              class="p-3 mb-3 rounded-lg bg-blue-50 text-sm text-blue-800 border border-blue-200 flex items-between gap-2"
            >
              <div class="flex-grow">
                <p class="font-semibold mb-1">Draft App</p>
                <p class="text-xs">Continue editing or submit for review</p>
              </div>
              <div class="flex gap-2">
                <p-button
                  label="Edit"
                  icon="pi pi-pencil"
                  severity="info"
                  size="small"
                  (onClick)="startEdit(app)"
                />
                <p-button
                  label="Submit for Review"
                  icon="pi pi-send"
                  severity="primary"
                  size="small"
                  [loading]="isSubmittingApproval"
                  [disabled]="isSubmittingApproval"
                  (onClick)="submitDraftForReview(app)"
                />
              </div>
            </div>
          }
          @if (isAdmin && isInPendingReview(app)) {
            <div
              class="p-3 mb-3 rounded-lg bg-blue-50 text-sm text-blue-800 border border-blue-200"
            >
              <p class="mb-2 font-semibold">Admin Review Actions</p>
              <div class="flex gap-2">
                <p-button
                  label="Approve"
                  icon="pi pi-check"
                  severity="success"
                  size="small"
                  [loading]="isSubmittingApproval"
                  [disabled]="isSubmittingApproval"
                  (onClick)="approveApp(app)"
                />
                <p-button
                  label="Reject"
                  icon="pi pi-times"
                  severity="danger"
                  size="small"
                  [loading]="isSubmittingApproval"
                  [disabled]="isSubmittingApproval"
                  (onClick)="rejectApp(app)"
                />
              </div>
              @if (approvalError) {
                <p class="text-danger text-xs mt-2">{{ approvalError }}</p>
              }
            </div>
          }
          @if (isAdmin && isApproved(app)) {
            <div
              class="p-3 mb-3 rounded-lg bg-gray-50 text-sm text-gray-700 border border-gray-200"
            >
              <p-button
                label="Suspend App"
                icon="pi pi-ban"
                severity="secondary"
                [outlined]="true"
                size="small"
                [loading]="isSubmittingApproval"
                [disabled]="isSubmittingApproval"
                (onClick)="suspendApp(app)"
              />
            </div>
          }
          <div class="flex items-center gap-6 mb-4 text-sm flex-wrap">
            <div class="flex items-center gap-2">
              <p-rating
                [ngModel]="app.averageRating"
                [readonly]="true"
                [stars]="5"
              ></p-rating>
              <span class="font-semibold">{{ app.averageRating }}</span>
              <span class="text-muted">({{ app.reviewCount }} reviews)</span>
            </div>
            <div>
              <span class="font-semibold">{{ app.installCount | number }}</span>
              <span class="text-muted"> installations</span>
            </div>
            <div class="text-muted">
              Updated {{ app.updatedAt | date: 'mediumDate' }}
            </div>
          </div>
          <div class="flex gap-3">
            <p-button
              [label]="
                app.pricing.model === 'FREE'
                  ? 'Install Now'
                  : 'Start Free Trial'
              "
              severity="primary"
              icon="pi pi-download"
              [disabled]="!isApproved(app)"
            />
            <p-button
              label="Contact Sales"
              severity="secondary"
              icon="pi pi-envelope"
              [outlined]="true"
            />
            @if (canEdit(app)) {
              <p-button
                label="Edit App"
                icon="pi pi-pencil"
                severity="secondary"
                [outlined]="true"
                (onClick)="startEdit(app)"
              />
            }
            @if (isEditDisabled(app)) {
              <p-button
                label="Edit App"
                icon="pi pi-pencil"
                severity="secondary"
                [outlined]="true"
                [disabled]="true"
                [pTooltip]="getEditDisabledReason(app)"
              />
            }
          </div>
        </div>
      </div>
    </ng-template>
  </p-card>

  <!-- Main Content with Accordion -->
  <div class="details-container m-4">
    <p-accordion [value]="['details', 'gallery', 'reviews']" [multiple]="true">
      <!-- App Details -->
      <p-accordion-panel value="details">
        <p-accordion-header>
          <span class="uppercase">App Details</span>
        </p-accordion-header>
        <p-accordion-content>
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold mb-2">About this App</h4>
              <p class="text-sm leading-relaxed whitespace-pre-line">
                {{ app.description }}
              </p>
            </div>

            <div>
              <h4 class="font-semibold mb-2">Integration Points</h4>
              <ul class="list-disc list-inside text-sm space-y-1">
                @for (point of app.integrationPoints; track point) {
                  <li>
                    Adds widget to
                    <span class="font-medium">{{ point.screenId }}</span>
                    ({{ point.widgetSize }})
                  </li>
                }
              </ul>
            </div>

            <div>
              <h4 class="font-semibold mb-2">Categories</h4>
              <div class="flex gap-2 flex-wrap">
                @for (category of app.categories; track category) {
                  <p-tag [value]="category" severity="secondary"></p-tag>
                }
              </div>
            </div>
          </div>
        </p-accordion-content>
      </p-accordion-panel>

      <!-- Gallery -->
      <p-accordion-panel value="gallery">
        <p-accordion-header>
          <span class="uppercase">Gallery</span>
        </p-accordion-header>
        <p-accordion-content>
          <div class="flex gap-4 overflow-x-auto pb-4">
            <div
              class="w-64 h-40 border border-subtle rounded-lg flex-shrink-0 flex items-center justify-center text-muted"
            >
              Screenshot 1
            </div>
            <div
              class="w-64 h-40 border border-subtle rounded-lg flex-shrink-0 flex items-center justify-center text-muted"
            >
              Screenshot 2
            </div>
            <div
              class="w-64 h-40 border border-subtle rounded-lg flex-shrink-0 flex items-center justify-center text-muted"
            >
              Screenshot 3
            </div>
          </div>
        </p-accordion-content>
      </p-accordion-panel>

      <!-- Reviews -->
      <p-accordion-panel value="reviews">
        <p-accordion-header>
          <span class="uppercase">Reviews ({{ app.reviewCount }})</span>
        </p-accordion-header>
        <p-accordion-content>
          <div class="mb-4">
            <p-button
              label="Write a Review"
              icon="pi pi-pencil"
              (onClick)="openReviewModal(app.id)"
              size="small"
            />
          </div>

          @if (reviews$ | async; as reviews) {
            @if (reviews.length > 0) {
              <div class="max-h-[600px] overflow-y-auto pr-2">
                <p-timeline [value]="reviews" align="right">
                  <ng-template pTemplate="marker" let-review>
                    <div
                      class="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-contrast"
                    >
                      <i class="pi pi-user"></i>
                    </div>
                  </ng-template>
                  <ng-template pTemplate="content" let-review>
                    <div class="pb-6 text-left">
                      <div class="flex items-start justify-between mb-2">
                        <div>
                          <div class="font-semibold">
                            {{ review.userName }}
                          </div>
                          <div class="text-sm text-muted">
                            {{ review.organizationName }}
                            @if (review.isVerifiedPurchase) {
                              <span class="ml-2">
                                <i class="pi pi-check-circle text-success"></i>
                                Verified Purchase
                              </span>
                            }
                          </div>
                        </div>
                        <div class="text-sm text-muted">
                          {{ review.createdAt | date: 'short' }}
                        </div>
                      </div>
                      <div class="mb-2">
                        <p-rating
                          [ngModel]="review.rating"
                          [readonly]="true"
                          [stars]="5"
                        ></p-rating>
                      </div>
                      <div class="font-semibold mb-1">{{ review.title }}</div>
                      <p class="text-sm mb-2">{{ review.comment }}</p>
                      <div class="flex items-center gap-4 text-sm">
                        <button
                          class="text-muted hover:text-primary flex items-center gap-1"
                          (click)="markHelpful(review.id)"
                        >
                          <i class="pi pi-thumbs-up"></i>
                          <span>Helpful ({{ review.helpfulCount }})</span>
                        </button>
                      </div>
                    </div>
                  </ng-template>
                </p-timeline>
              </div>
            } @else {
              <div class="text-center py-8 text-muted">
                <i class="pi pi-comments text-4xl mb-2 block"></i>
                <p>No reviews yet. Be the first to review this app!</p>
              </div>
            }
          }
        </p-accordion-content>
      </p-accordion-panel>
    </p-accordion>
  </div>

  <!-- Review Modal -->
  <p-dialog
    header="Write a Review"
    [(visible)]="showReviewModal"
    [modal]="true"
    styleClass="w-full md:w-1/2"
    [draggable]="false"
    [resizable]="false"
    (onHide)="closeReviewModal()"
  >
    <div class="space-y-4">
      <div>
        <label for="review-rating" class="block text-sm font-medium mb-1"
          >Rating</label
        >
        <p-rating [(ngModel)]="newReviewRating" [stars]="5"></p-rating>
      </div>
      <div>
        <label for="review-title" class="block text-sm font-medium mb-1"
          >Title</label
        >
        <input
          id="review-title"
          pInputText
          [(ngModel)]="newReviewTitle"
          type="text"
          class="w-full"
          placeholder="Great app for fleet monitoring"
        />
      </div>
      <div>
        <label for="review-comment" class="block text-sm font-medium mb-1"
          >Comment</label
        >
        <textarea
          id="review-comment"
          pTextarea
          [(ngModel)]="newReviewComment"
          rows="4"
          class="w-full"
          placeholder="Share your experience..."
        ></textarea>
      </div>
      @if (reviewError) {
        <p class="text-danger text-sm">{{ reviewError }}</p>
      }
    </div>

    <ng-template pTemplate="footer">
      <div class="flex justify-end gap-2 w-full">
        <p-button
          label="Cancel"
          severity="secondary"
          (onClick)="closeReviewModal()"
        />
        <p-button
          label="Submit Review"
          icon="pi pi-check"
          [loading]="isSubmittingReview"
          [disabled]="
            isSubmittingReview ||
            newReviewRating < 1 ||
            !newReviewTitle.trim() ||
            !newReviewComment.trim()
          "
          (onClick)="submitReview()"
          severity="primary"
        />
      </div>
    </ng-template>
  </p-dialog>
} @else {
  @if (loading) {
    <div class="flex flex-col items-center justify-center py-12 gap-3">
      <p-progressSpinner class="w-10 h-10" strokeWidth="4"></p-progressSpinner>
      <p class="text muted">Loading app details...</p>
    </div>
  } @else if (error) {
    <div class="flex flex-col items-center justify-center py-12 gap-3">
      <span class="pi pi-exclamation-triangle text-danger text-4xl"></span>
      <p class="text-lg font-semibold">{{ error }}</p>
    </div>
  }
}
`, styles: ["/* src/app/features/app-store/pages/app-detail/app-detail.component.scss */\n:host {\n  font-family: var(--font-family);\n  font-size: var(--base-font-size);\n  font-weight: var(--font-weight);\n  background-color: var(--main-background-color);\n  color: var(--nav-text-color);\n}\n/*# sourceMappingURL=app-detail.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppDetailComponent, { className: "AppDetailComponent", filePath: "src/app/features/app-store/pages/app-detail/app-detail.component.ts", lineNumber: 46 });
})();
export {
  AppDetailComponent
};
//# sourceMappingURL=chunk-VSGZVR5Y.js.map
