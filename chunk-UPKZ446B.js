import {
  AppVersionService
} from "./chunk-SRQ22PRN.js";
import {
  AppInstallFacadeService,
  AppRatingDisplayComponent
} from "./chunk-XLWAERGL.js";
import {
  AppStatusBadgeComponent
} from "./chunk-6EOXXF5M.js";
import {
  AppStoreService,
  mapAppReviewFromApi
} from "./chunk-HLBFLHW7.js";
import {
  Timeline,
  TimelineModule
} from "./chunk-F7RP5TDX.js";
import {
  ModalListFormComponent
} from "./chunk-WSLDKKBX.js";
import {
  CardModule
} from "./chunk-T6XIC3AO.js";
import {
  AccordionModule
} from "./chunk-MRNY44LL.js";
import {
  ImgFallbackDirective
} from "./chunk-6TCB2NTQ.js";
import {
  ModalFormService,
  Rating,
  RatingModule
} from "./chunk-AJ5RAXL3.js";
import "./chunk-DGXIJI5N.js";
import {
  ToggleSwitch,
  ToggleSwitchModule
} from "./chunk-RQOCDJ5X.js";
import {
  Dialog,
  DialogModule,
  Textarea,
  TextareaModule
} from "./chunk-UF6FA7CZ.js";
import "./chunk-I3W3CONJ.js";
import "./chunk-YALVSCY4.js";
import {
  DefaultValueAccessor,
  FormsModule,
  InputText,
  InputTextModule,
  NgControlStatus,
  NgModel,
  Tooltip,
  TooltipModule,
  Validators
} from "./chunk-TH3LNORR.js";
import {
  Button,
  ButtonModule,
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-52LQUIDL.js";
import "./chunk-TMX3INZE.js";
import {
  PrimeTemplate
} from "./chunk-WHNMSFOF.js";
import {
  ActivatedRoute,
  ApiUrlService,
  AuthDataService,
  BroadcastEventMessageService,
  ClientDataService,
  CommonModule,
  DEFAULT_SYSTEM_ID,
  DatePipe,
  DecimalPipe,
  HttpClient,
  HttpParams,
  Location,
  NgClass,
  Router,
  RouterModule,
  createDropdownField,
  createTextAreaField,
  isNullOrUndefined,
  toObservable,
  toSignal
} from "./chunk-L7IB7NHM.js";
import {
  Component,
  DestroyRef,
  Injectable,
  catchError,
  computed,
  finalize,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  switchMap,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
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
  ɵɵpureFunction1,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PNETQGIO.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/app-store/services/review.service.ts
var ReviewService = class _ReviewService {
  http = inject(HttpClient);
  apiUrlService = inject(ApiUrlService);
  baseUrl;
  constructor() {
    this.baseUrl = `${this.apiUrlService.getCurrentApiUrl()}/telemetrystore`;
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
   * @param ownerId The owner (client/org) submitting the review
   * @param review Review data
   */
  addReview(appId, ownerId, review) {
    const request = {
      appId,
      ownerId,
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
var _c0 = (a0) => ["flex w-2 h-2 rounded-full", a0];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.field;
function AppDetailComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "p-progressSpinner", 2);
    \u0275\u0275elementStart(2, "p", 3);
    \u0275\u0275text(3, "Loading app details...");
    \u0275\u0275elementEnd()();
  }
}
function AppDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 4);
    \u0275\u0275element(2, "i", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 7);
    \u0275\u0275text(6, " Please check your connection or try again later. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p-button", 8);
    \u0275\u0275listener("onClick", function AppDetailComponent_Conditional_1_Template_p_button_onClick_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function AppDetailComponent_Conditional_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "i", 72);
    \u0275\u0275elementEnd();
  }
}
function AppDetailComponent_Conditional_2_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 26);
  }
}
function AppDetailComponent_Conditional_2_Conditional_27_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 77);
  }
}
function AppDetailComponent_Conditional_2_Conditional_27_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275element(1, "i", 78);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.toggleEnabledError(), " ");
  }
}
function AppDetailComponent_Conditional_2_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 73);
    \u0275\u0275listener("onClick", function AppDetailComponent_Conditional_2_Conditional_27_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.uninstallApp());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 74)(2, "span", 75);
    \u0275\u0275text(3, "App Enabled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-toggleswitch", 76);
    \u0275\u0275listener("ngModelChange", function AppDetailComponent_Conditional_2_Conditional_27_Template_p_toggleswitch_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleEnabled());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, AppDetailComponent_Conditional_2_Conditional_27_Conditional_5_Template, 1, 0, "i", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, AppDetailComponent_Conditional_2_Conditional_27_Conditional_6_Template, 3, 1, "p", 32);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("loading", ctx_r1.isPerformingInstallationAction());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.installationIsEnabled())("disabled", ctx_r1.isTogglingEnabled());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isTogglingEnabled() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.toggleEnabledError() ? 6 : -1);
  }
}
function AppDetailComponent_Conditional_2_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 79);
    \u0275\u0275listener("onClick", function AppDetailComponent_Conditional_2_Conditional_28_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.installApp());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("loading", ctx_r1.isPerformingInstallationAction());
  }
}
function AppDetailComponent_Conditional_2_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-button", 31);
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
  }
}
function AppDetailComponent_Conditional_2_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275element(1, "i", 78);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.installationError(), " ");
  }
}
function AppDetailComponent_Conditional_2_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "i", 80);
    \u0275\u0275elementStart(2, "div", 81)(3, "p", 82);
    \u0275\u0275text(4, "Draft Application");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, " This app is currently in draft. You can continue editing or submit it for review. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 83)(8, "p-button", 84);
    \u0275\u0275listener("onClick", function AppDetailComponent_Conditional_2_Conditional_47_Template_p_button_onClick_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startEdit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p-button", 85);
    \u0275\u0275listener("onClick", function AppDetailComponent_Conditional_2_Conditional_47_Template_p_button_onClick_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openSubmitVersionDialog());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r1.isEditDisabled())("pTooltip", ctx_r1.getEditDisabledReason());
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r1.isSubmittingApproval());
  }
}
function AppDetailComponent_Conditional_2_Conditional_48_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(' "', ctx_r1.latestReview().comments, '" ');
  }
}
function AppDetailComponent_Conditional_2_Conditional_48_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 91);
    \u0275\u0275text(1, " The reviewer has requested changes to this app. ");
    \u0275\u0275elementEnd();
  }
}
function AppDetailComponent_Conditional_2_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 86);
    \u0275\u0275element(2, "i", 87);
    \u0275\u0275elementStart(3, "div", 88)(4, "p", 89);
    \u0275\u0275text(5, " Changes Requested ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, AppDetailComponent_Conditional_2_Conditional_48_Conditional_6_Template, 2, 1, "p", 90)(7, AppDetailComponent_Conditional_2_Conditional_48_Conditional_7_Template, 2, 0, "p", 91);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p-button", 92);
    \u0275\u0275listener("onClick", function AppDetailComponent_Conditional_2_Conditional_48_Template_p_button_onClick_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startEdit());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(((tmp_3_0 = ctx_r1.latestReview()) == null ? null : tmp_3_0.comments) ? 6 : 7);
  }
}
function AppDetailComponent_Conditional_2_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 93);
    \u0275\u0275element(2, "i", 94);
    \u0275\u0275elementStart(3, "div", 88)(4, "p", 95);
    \u0275\u0275text(5, " Administrator Review Required ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 96);
    \u0275\u0275text(7, " Verify this application's permissions and functionality before approval. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 83)(9, "p-button", 97);
    \u0275\u0275listener("onClick", function AppDetailComponent_Conditional_2_Conditional_49_Template_p_button_onClick_9_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openSubmissionReviewModal());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("loading", ctx_r1.isSubmittingApproval());
  }
}
function AppDetailComponent_Conditional_2_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275element(1, "i", 78);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.approvalError(), " ");
  }
}
function AppDetailComponent_Conditional_2_Conditional_65_Conditional_0_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 107);
    \u0275\u0275element(1, "i", 114);
    \u0275\u0275text(2, " Verified ");
    \u0275\u0275elementEnd();
  }
}
function AppDetailComponent_Conditional_2_Conditional_65_Conditional_0_For_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 111);
    \u0275\u0275text(1, "Excellent");
    \u0275\u0275elementEnd();
  }
}
function AppDetailComponent_Conditional_2_Conditional_65_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "div", 101)(2, "div", 102)(3, "div", 103);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 104);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 105)(9, "span", 106);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, AppDetailComponent_Conditional_2_Conditional_65_Conditional_0_For_2_Conditional_11_Template, 3, 0, "span", 107);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "span", 108);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 109);
    \u0275\u0275element(16, "p-rating", 110);
    \u0275\u0275conditionalCreate(17, AppDetailComponent_Conditional_2_Conditional_65_Conditional_0_For_2_Conditional_17_Template, 2, 0, "span", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "h4", 112);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 113);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const review_r9 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", review_r9.userName.charAt(0).toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", review_r9.userName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r9.organizationName);
    \u0275\u0275advance();
    \u0275\u0275conditional(review_r9.isVerifiedPurchase ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 11, review_r9.createdDate, "MMM d, y"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", review_r9.rating)("readonly", true)("stars", 5);
    \u0275\u0275advance();
    \u0275\u0275conditional(review_r9.rating >= 4 ? 17 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", review_r9.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", review_r9.comment, " ");
  }
}
function AppDetailComponent_Conditional_2_Conditional_65_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275repeaterCreate(1, AppDetailComponent_Conditional_2_Conditional_65_Conditional_0_For_2_Template, 22, 14, "div", 100, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reviewsList_r10 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(reviewsList_r10);
  }
}
function AppDetailComponent_Conditional_2_Conditional_65_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275element(1, "i", 115);
    \u0275\u0275elementStart(2, "p", 38);
    \u0275\u0275text(3, "No reviews yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 116);
    \u0275\u0275text(5, " Be the first to share your experience with this app! ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p-button", 117);
    \u0275\u0275listener("onClick", function AppDetailComponent_Conditional_2_Conditional_65_Conditional_1_Template_p_button_onClick_6_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openReviewModal());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275property("text", true);
  }
}
function AppDetailComponent_Conditional_2_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AppDetailComponent_Conditional_2_Conditional_65_Conditional_0_Template, 3, 0, "div", 98)(1, AppDetailComponent_Conditional_2_Conditional_65_Conditional_1_Template, 7, 1, "div", 99);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.length > 0 ? 0 : 1);
  }
}
function AppDetailComponent_Conditional_2_For_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div")(2, "p", 118);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const point_r12 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", point_r12.screenId, " ");
  }
}
function AppDetailComponent_Conditional_2_For_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r13, " ");
  }
}
function AppDetailComponent_Conditional_2_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275element(1, "p-progress-spinner", 119);
    \u0275\u0275elementStart(2, "span", 120);
    \u0275\u0275text(3, "Loading version history\u2026");
    \u0275\u0275elementEnd()();
  }
}
function AppDetailComponent_Conditional_2_Conditional_82_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 124);
  }
  if (rf & 2) {
    const version_r14 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(1, _c0, version_r14.status === "approved" ? "bg-green-500" : "bg-surface-300"));
  }
}
function AppDetailComponent_Conditional_2_Conditional_82_ng_template_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 128);
    \u0275\u0275text(1, "major");
    \u0275\u0275elementEnd();
  }
}
function AppDetailComponent_Conditional_2_Conditional_82_ng_template_6_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 129);
    \u0275\u0275text(1, "minor");
    \u0275\u0275elementEnd();
  }
}
function AppDetailComponent_Conditional_2_Conditional_82_ng_template_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 130);
    \u0275\u0275text(1, "patch");
    \u0275\u0275elementEnd();
  }
}
function AppDetailComponent_Conditional_2_Conditional_82_ng_template_6_Conditional_13_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 135);
    \u0275\u0275text(1, " No tracked field changes. ");
    \u0275\u0275elementEnd();
  }
}
function AppDetailComponent_Conditional_2_Conditional_82_ng_template_6_Conditional_13_Conditional_2_Conditional_3_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 141)(1, "td", 142);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 143);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 144);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const change_r17 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", change_r17.field, " ");
    \u0275\u0275advance();
    \u0275\u0275property("title", change_r17.before);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", change_r17.before, " ");
    \u0275\u0275advance();
    \u0275\u0275property("title", change_r17.after);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", change_r17.after, " ");
  }
}
function AppDetailComponent_Conditional_2_Conditional_82_ng_template_6_Conditional_13_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 136)(1, "thead")(2, "tr", 137)(3, "th", 138);
    \u0275\u0275text(4, " Field ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 139);
    \u0275\u0275text(6, "Before");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 140);
    \u0275\u0275text(8, "After");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "tbody");
    \u0275\u0275repeaterCreate(10, AppDetailComponent_Conditional_2_Conditional_82_ng_template_6_Conditional_13_Conditional_2_Conditional_3_For_11_Template, 7, 5, "tr", 141, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const diff_r18 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(10);
    \u0275\u0275repeater(diff_r18);
  }
}
function AppDetailComponent_Conditional_2_Conditional_82_ng_template_6_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 134);
    \u0275\u0275conditionalCreate(2, AppDetailComponent_Conditional_2_Conditional_82_ng_template_6_Conditional_13_Conditional_2_Conditional_2_Template, 2, 0, "p", 135)(3, AppDetailComponent_Conditional_2_Conditional_82_ng_template_6_Conditional_13_Conditional_2_Conditional_3_Template, 12, 0, "table", 136);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r18 = \u0275\u0275nextContext(2);
    const version_r16 = ctx_r18.$implicit;
    const i_r20 = ctx_r18.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    const diff_r21 = \u0275\u0275storeLet(ctx_r1.getVersionDiff(version_r16, ctx_r1.versions()[i_r20 - 1]));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(diff_r21.length === 0 ? 2 : 3);
  }
}
function AppDetailComponent_Conditional_2_Conditional_82_ng_template_6_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 133);
    \u0275\u0275listener("click", function AppDetailComponent_Conditional_2_Conditional_82_ng_template_6_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const version_r16 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleVersionExpanded(version_r16.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, AppDetailComponent_Conditional_2_Conditional_82_ng_template_6_Conditional_13_Conditional_2_Template, 4, 2, "div", 134);
  }
  if (rf & 2) {
    const version_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.expandedVersions().has(version_r16.id) ? "Hide changes" : "Show changes vs previous", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.expandedVersions().has(version_r16.id) ? 2 : -1);
  }
}
function AppDetailComponent_Conditional_2_Conditional_82_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 125)(1, "div", 126)(2, "span", 127);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, AppDetailComponent_Conditional_2_Conditional_82_ng_template_6_Conditional_4_Template, 2, 0, "span", 128)(5, AppDetailComponent_Conditional_2_Conditional_82_ng_template_6_Conditional_5_Template, 2, 0, "span", 129)(6, AppDetailComponent_Conditional_2_Conditional_82_ng_template_6_Conditional_6_Template, 2, 0, "span", 130);
    \u0275\u0275element(7, "app-status-badge", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 131);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 132);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, AppDetailComponent_Conditional_2_Conditional_82_ng_template_6_Conditional_13_Template, 3, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const version_r16 = ctx.$implicit;
    const i_r20 = ctx.index;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("v", version_r16.version);
    \u0275\u0275advance();
    \u0275\u0275conditional(version_r16.bumpType === "major" ? 4 : version_r16.bumpType === "minor" ? 5 : 6);
    \u0275\u0275advance(3);
    \u0275\u0275property("status", version_r16.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 6, version_r16.createdDate, "MMM d, y"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", version_r16.changelog, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(i_r20 > 0 ? 13 : -1);
  }
}
function AppDetailComponent_Conditional_2_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "h3", 48);
    \u0275\u0275element(2, "span", 49);
    \u0275\u0275text(3, " Version History ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-timeline", 121);
    \u0275\u0275template(5, AppDetailComponent_Conditional_2_Conditional_82_ng_template_5_Template, 1, 3, "ng-template", 122)(6, AppDetailComponent_Conditional_2_Conditional_82_ng_template_6_Template, 14, 9, "ng-template", 123);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.versions());
  }
}
function AppDetailComponent_Conditional_2_Conditional_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275element(1, "i", 145);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.reviewError(), " ");
  }
}
function AppDetailComponent_Conditional_2_ng_template_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 146)(1, "p-button", 147);
    \u0275\u0275listener("onClick", function AppDetailComponent_Conditional_2_ng_template_103_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeReviewModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 148);
    \u0275\u0275listener("onClick", function AppDetailComponent_Conditional_2_ng_template_103_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitReview());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r1.isSubmittingReview())("disabled", ctx_r1.isSubmittingReview() || !ctx_r1.newReviewTitle().trim() || !ctx_r1.newReviewComment().trim());
  }
}
function AppDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "p-button", 10);
    \u0275\u0275listener("onClick", function AppDetailComponent_Conditional_2_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(2, "div", 11)(3, "div", 12)(4, "div", 13)(5, "div", 14)(6, "div", 15)(7, "div", 16)(8, "div", 17);
    \u0275\u0275element(9, "img", 18);
    \u0275\u0275conditionalCreate(10, AppDetailComponent_Conditional_2_Conditional_10_Template, 2, 0, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "app-status-badge", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 21)(13, "div", 22)(14, "div")(15, "h1", 23);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 24)(18, "span", 3);
    \u0275\u0275text(19, "Developed by");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 25);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(22, AppDetailComponent_Conditional_2_Conditional_22_Template, 1, 0, "i", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 27)(24, "span", 28);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 29);
    \u0275\u0275conditionalCreate(27, AppDetailComponent_Conditional_2_Conditional_27_Template, 7, 5)(28, AppDetailComponent_Conditional_2_Conditional_28_Template, 1, 1, "p-button", 30)(29, AppDetailComponent_Conditional_2_Conditional_29_Template, 1, 1, "p-button", 31);
    \u0275\u0275conditionalCreate(30, AppDetailComponent_Conditional_2_Conditional_30_Template, 3, 1, "p", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 33)(32, "div", 34);
    \u0275\u0275element(33, "app-rating-display", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 36);
    \u0275\u0275element(35, "i", 37);
    \u0275\u0275elementStart(36, "span", 38);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 39);
    \u0275\u0275text(40, "installations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 36);
    \u0275\u0275element(42, "i", 40);
    \u0275\u0275elementStart(43, "span", 39);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 41);
    \u0275\u0275conditionalCreate(47, AppDetailComponent_Conditional_2_Conditional_47_Template, 10, 3, "div", 42);
    \u0275\u0275conditionalCreate(48, AppDetailComponent_Conditional_2_Conditional_48_Template, 9, 1, "div", 43);
    \u0275\u0275conditionalCreate(49, AppDetailComponent_Conditional_2_Conditional_49_Template, 10, 1, "div", 44);
    \u0275\u0275conditionalCreate(50, AppDetailComponent_Conditional_2_Conditional_50_Template, 3, 1, "p", 32);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(51, "div", 45)(52, "div", 46)(53, "div", 47)(54, "h3", 48);
    \u0275\u0275element(55, "span", 49);
    \u0275\u0275text(56, " Product Overview ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "p", 50);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 47)(60, "div", 51)(61, "h3", 52);
    \u0275\u0275element(62, "span", 49);
    \u0275\u0275text(63, " User Feedback ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "p-button", 53);
    \u0275\u0275listener("onClick", function AppDetailComponent_Conditional_2_Template_p_button_onClick_64_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openReviewModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(65, AppDetailComponent_Conditional_2_Conditional_65_Template, 2, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 12)(67, "div", 47)(68, "h3", 48);
    \u0275\u0275element(69, "span", 49);
    \u0275\u0275text(70, " Integration Points ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 54);
    \u0275\u0275repeaterCreate(72, AppDetailComponent_Conditional_2_For_73_Template, 4, 1, "div", 55, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 47)(75, "h3", 48);
    \u0275\u0275element(76, "span", 49);
    \u0275\u0275text(77, " Categories ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "div", 56);
    \u0275\u0275repeaterCreate(79, AppDetailComponent_Conditional_2_For_80_Template, 2, 1, "span", 57, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(81, AppDetailComponent_Conditional_2_Conditional_81_Template, 4, 0, "div", 58)(82, AppDetailComponent_Conditional_2_Conditional_82_Template, 7, 1, "div", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "p-dialog", 59);
    \u0275\u0275listener("onHide", function AppDetailComponent_Conditional_2_Template_p_dialog_onHide_83_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeReviewModal());
    });
    \u0275\u0275elementStart(84, "div", 60)(85, "p", 61);
    \u0275\u0275text(86, " Your feedback helps the community discover better integrations and helps developers improve their work. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "div", 54)(88, "label", 62);
    \u0275\u0275text(89, "Rating");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "div", 63)(91, "p-rating", 64);
    \u0275\u0275listener("ngModelChange", function AppDetailComponent_Conditional_2_Template_p_rating_ngModelChange_91_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newReviewRating.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "span", 65);
    \u0275\u0275text(93);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "div")(95, "label", 66);
    \u0275\u0275text(96, "Review Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "input", 67);
    \u0275\u0275listener("ngModelChange", function AppDetailComponent_Conditional_2_Template_input_ngModelChange_97_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newReviewTitle.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "div")(99, "label", 68);
    \u0275\u0275text(100, "Your Feedback");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "textarea", 69);
    \u0275\u0275listener("ngModelChange", function AppDetailComponent_Conditional_2_Template_textarea_ngModelChange_101_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newReviewComment.set($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(102, AppDetailComponent_Conditional_2_Conditional_102_Template, 3, 1, "div", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275template(103, AppDetailComponent_Conditional_2_ng_template_103_Template, 3, 3, "ng-template", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_24_0;
    const app_r23 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("text", true);
    \u0275\u0275advance(8);
    \u0275\u0275property("src", app_r23.iconUrl, \u0275\u0275sanitizeUrl)("alt", app_r23.name + " icon")("fallbackText", app_r23.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(app_r23.version.activeVersionId !== null ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("status", (app_r23.version.pending == null ? null : app_r23.version.pending.status) ?? (app_r23.version.active == null ? null : app_r23.version.active.status) ?? "draft");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", app_r23.name, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(app_r23.developerName);
    \u0275\u0275advance();
    \u0275\u0275conditional(app_r23.developerName ? 22 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", app_r23.categories[0] || "Uncategorized", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isInstalled() ? 27 : ctx_r1.canInstall() ? 28 : app_r23.version.activeVersionId === null ? 29 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.installationError() ? 30 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("averageRating", app_r23.stats.averageRating)("reviewCount", app_r23.stats.reviewCount);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 35, app_r23.stats.installCount));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Updated ", \u0275\u0275pipeBind2(45, 37, app_r23.updatedDate, "MMM d, y"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(app_r23.version.activeVersionId === null && app_r23.version.pending === null ? 47 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((app_r23.version.pending == null ? null : app_r23.version.pending.status) === "changesRequested" ? 48 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isAdmin() && ctx_r1.isInPendingReview() ? 49 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.approvalError() ? 50 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", app_r23.description, " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("text", true);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_24_0 = ctx_r1.reviews()) ? 65 : -1, tmp_24_0);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(app_r23.integrationPoints);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(app_r23.categories);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.versionsLoading() ? 81 : ctx_r1.versions().length > 0 ? 82 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("visible", ctx_r1.showReviewModal())("modal", true)("draggable", false)("resizable", false);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngModel", ctx_r1.newReviewRating())("stars", 5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.newReviewRating(), "/5");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.newReviewTitle());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.newReviewComment())("autoResize", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.reviewError() ? 102 : -1);
  }
}
var AppDetailComponent = class _AppDetailComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  location = inject(Location);
  appStoreService = inject(AppStoreService);
  reviewService = inject(ReviewService);
  installFacade = inject(AppInstallFacadeService);
  authDataService = inject(AuthDataService);
  clientDataService = inject(ClientDataService);
  modalFormService = inject(ModalFormService);
  appVersionService = inject(AppVersionService);
  destroyRef = inject(DestroyRef);
  broadcastService = inject(BroadcastEventMessageService);
  // Identity - Reactive signals that update when auth state changes
  currentUserId = computed(() => this.authDataService.getUserProfileSignal()()?.id ?? null, ...ngDevMode ? [{ debugName: "currentUserId" }] : (
    /* istanbul ignore next */
    []
  ));
  isAdmin = computed(() => this.authDataService.getUserProfileSignal()()?.roles?.some((role) => role.id === DEFAULT_SYSTEM_ID) ?? false, ...ngDevMode ? [{ debugName: "isAdmin" }] : (
    /* istanbul ignore next */
    []
  ));
  // App Data (Signal-based)
  appId = toSignal(this.route.paramMap.pipe(map((params) => params.get("id"))));
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : (
    /* istanbul ignore next */
    []
  ));
  // Refresh trigger for app data (similar to reviews)
  refreshAppTrigger = signal(0, ...ngDevMode ? [{ debugName: "refreshAppTrigger" }] : (
    /* istanbul ignore next */
    []
  ));
  appData = toSignal(toObservable(computed(() => ({
    id: this.appId(),
    trigger: this.refreshAppTrigger()
  }))).pipe(tap(() => this.isLoading.set(true)), switchMap(({ id }) => {
    if (isNullOrUndefined(id))
      return of(null);
    return this.appStoreService.getAppById(id, this.clientDataService.getSelectedClient()?.id ?? "").pipe(tap(() => this.isLoading.set(false)), catchError((err) => {
      console.error("Error loading app:", err);
      this.error.set("Unable to load app details. Please try again.");
      this.isLoading.set(false);
      return of(null);
    }));
  })), { initialValue: null });
  app = computed(() => this.appData(), ...ngDevMode ? [{ debugName: "app" }] : (
    /* istanbul ignore next */
    []
  ));
  // Review State
  refreshReviewsTrigger = signal(0, ...ngDevMode ? [{ debugName: "refreshReviewsTrigger" }] : (
    /* istanbul ignore next */
    []
  ));
  reviews = toSignal(toObservable(computed(() => ({
    id: this.appId(),
    trigger: this.refreshReviewsTrigger()
  }))).pipe(switchMap(({ id }) => {
    if (isNullOrUndefined(id))
      return of([]);
    return this.reviewService.getReviewsForApp(id).pipe(catchError(() => of([])));
  })), { initialValue: [] });
  // Submission review (for changesRequested banner)
  latestReview = toSignal(toObservable(this.app).pipe(switchMap((app) => {
    if (!app || app.version.pending?.status !== "changesRequested")
      return of(null);
    return this.appStoreService.getSubmissionReviews(app.id).pipe(map((reviews) => reviews[0] ?? null), catchError(() => of(null)));
  })), { initialValue: null });
  // Version history (developer + admin only)
  versionsLoading = signal(false, ...ngDevMode ? [{ debugName: "versionsLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  versions = toSignal(toObservable(this.app).pipe(switchMap((app) => {
    const isDeveloper = app?.developerId === this.currentUserId();
    if (!app || !isDeveloper && !this.isAdmin())
      return of([]);
    this.versionsLoading.set(true);
    return this.appVersionService.getVersions(app.id).pipe(catchError(() => of([])), finalize(() => this.versionsLoading.set(false)));
  })), { initialValue: [] });
  // Version history expand/collapse state
  expandedVersions = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "expandedVersions" }] : (
    /* istanbul ignore next */
    []
  ));
  toggleVersionExpanded(id) {
    this.expandedVersions.update((set) => {
      const next = new Set(set);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }
  getVersionDiff(curr, prev) {
    const changes = [];
    const check = (field, a, b) => {
      if ((a ?? "") !== (b ?? ""))
        changes.push({ field, before: a ?? "\u2014", after: b ?? "\u2014" });
    };
    const checkArr = (field, a, b) => {
      if (JSON.stringify(a.slice().sort()) !== JSON.stringify(b.slice().sort()))
        changes.push({
          field,
          before: a.join(", ") || "\u2014",
          after: b.join(", ") || "\u2014"
        });
    };
    check("Name", prev.name, curr.name);
    check("Short description", prev.shortDescription, curr.shortDescription);
    check("Description", prev.description, curr.description);
    check("Health check URL", prev.healthCheckUrl, curr.healthCheckUrl);
    check("Icon URL", prev.iconUrl, curr.iconUrl);
    check("Developer name", prev.developerName, curr.developerName);
    checkArr("Categories", prev.categories, curr.categories);
    checkArr("Tags", prev.tags, curr.tags);
    const prevPoints = (prev.integrationPoints ?? []).map((p) => p.screenId).sort().join(", ");
    const currPoints = (curr.integrationPoints ?? []).map((p) => p.screenId).sort().join(", ");
    if (prevPoints !== currPoints)
      changes.push({
        field: "Integration points",
        before: prevPoints || "\u2014",
        after: currPoints || "\u2014"
      });
    return changes;
  }
  isSubmittingReview = signal(false, ...ngDevMode ? [{ debugName: "isSubmittingReview" }] : (
    /* istanbul ignore next */
    []
  ));
  reviewError = signal(null, ...ngDevMode ? [{ debugName: "reviewError" }] : (
    /* istanbul ignore next */
    []
  ));
  isSubmittingApproval = signal(false, ...ngDevMode ? [{ debugName: "isSubmittingApproval" }] : (
    /* istanbul ignore next */
    []
  ));
  approvalError = signal(null, ...ngDevMode ? [{ debugName: "approvalError" }] : (
    /* istanbul ignore next */
    []
  ));
  // Installation State — derived directly from app.installation (populated by the API when owner is provided)
  // Expose facade state for template bindings
  isPerformingInstallationAction = this.installFacade.isPerformingAction;
  installationError = this.installFacade.error;
  isTogglingEnabled = this.installFacade.isTogglingEnabled;
  toggleEnabledError = this.installFacade.toggleEnabledError;
  isInstalled = computed(() => this.app()?.installation != null, ...ngDevMode ? [{ debugName: "isInstalled" }] : (
    /* istanbul ignore next */
    []
  ));
  installationIsEnabled = computed(() => this.app()?.installation?.isEnabled ?? false, ...ngDevMode ? [{ debugName: "installationIsEnabled" }] : (
    /* istanbul ignore next */
    []
  ));
  canInstall = computed(() => {
    const app = this.app();
    return app?.version.activeVersionId != null && !this.isInstalled();
  }, ...ngDevMode ? [{ debugName: "canInstall" }] : (
    /* istanbul ignore next */
    []
  ));
  // Review Form
  showReviewModal = signal(false, ...ngDevMode ? [{ debugName: "showReviewModal" }] : (
    /* istanbul ignore next */
    []
  ));
  newReviewRating = signal(5, ...ngDevMode ? [{ debugName: "newReviewRating" }] : (
    /* istanbul ignore next */
    []
  ));
  newReviewTitle = signal("", ...ngDevMode ? [{ debugName: "newReviewTitle" }] : (
    /* istanbul ignore next */
    []
  ));
  newReviewComment = signal("", ...ngDevMode ? [{ debugName: "newReviewComment" }] : (
    /* istanbul ignore next */
    []
  ));
  openReviewModal() {
    this.showReviewModal.set(true);
  }
  closeReviewModal() {
    this.showReviewModal.set(false);
    this.resetReviewForm();
  }
  submitReview() {
    const id = this.appId();
    if (isNullOrUndefined(id))
      return;
    const currentTitle = this.newReviewTitle().trim();
    const currentComment = this.newReviewComment().trim();
    const currentRating = this.newReviewRating();
    const profile = this.authDataService.getUserProfileSignal()();
    if (!currentTitle || !currentComment || currentRating < 1) {
      this.reviewError.set("Please provide a title, comment, and rating.");
      return;
    }
    const firstName = profile?.["firstName"];
    const lastName = profile?.["lastName"];
    const fullName = [firstName, lastName].filter(Boolean).join(" ") || "Anonymous";
    const organization = profile?.["organizationName"];
    const organizationName = organization?.trim() ?? "Unknown";
    this.reviewError.set(null);
    this.isSubmittingReview.set(true);
    const clientId = this.clientDataService.getSelectedClient()?.id ?? "";
    this.reviewService.addReview(id, clientId, {
      userName: fullName,
      organizationName,
      rating: currentRating,
      title: currentTitle,
      comment: currentComment
    }).pipe(tap(() => {
      this.refreshReviewsTrigger.update((n) => n + 1);
      this.closeReviewModal();
    }), catchError((err) => {
      console.error("Review submission error:", err);
      this.reviewError.set("Could not submit your review. Please try again.");
      return of(null);
    })).subscribe({
      complete: () => this.isSubmittingReview.set(false)
    });
  }
  resetReviewForm() {
    this.newReviewRating.set(5);
    this.newReviewTitle.set("");
    this.newReviewComment.set("");
  }
  refreshAppData() {
    this.refreshAppTrigger.update((n) => n + 1);
  }
  isApproved = computed(() => this.app()?.version.activeVersionId != null, ...ngDevMode ? [{ debugName: "isApproved" }] : (
    /* istanbul ignore next */
    []
  ));
  canEdit = computed(() => {
    const app = this.app();
    if (!app)
      return false;
    const isDeveloper = app.developerId === this.currentUserId();
    const noPendingReview = app.version.pending == null || app.version.pending.status === "changesRequested";
    return isDeveloper && noPendingReview;
  }, ...ngDevMode ? [{ debugName: "canEdit" }] : (
    /* istanbul ignore next */
    []
  ));
  goBack() {
    this.location.back();
  }
  startEdit() {
    const app = this.app();
    if (!app)
      return;
    this.router.navigate(["/app-store/editor"], {
      queryParams: { appId: app.id },
      state: { appToEdit: app }
    }).catch(() => {
    });
  }
  isEditDisabled = computed(() => {
    const app = this.app();
    if (!app)
      return true;
    return !this.canEdit();
  }, ...ngDevMode ? [{ debugName: "isEditDisabled" }] : (
    /* istanbul ignore next */
    []
  ));
  getEditDisabledReason = computed(() => {
    const app = this.app();
    if (!app)
      return "";
    if (app.version.pending?.status === "pendingReview")
      return "Editing is disabled while under review";
    if (app.state === "suspended")
      return "Editing is disabled for suspended apps";
    return "You can only edit apps in this status";
  }, ...ngDevMode ? [{ debugName: "getEditDisabledReason" }] : (
    /* istanbul ignore next */
    []
  ));
  isInPendingReview = computed(() => this.app()?.version.pending?.status === "pendingReview", ...ngDevMode ? [{ debugName: "isInPendingReview" }] : (
    /* istanbul ignore next */
    []
  ));
  openSubmissionReviewModal() {
    const app = this.app();
    if (!app)
      return;
    const dummyField = createTextAreaField("dummy", "dummy", void 0);
    this.modalFormService.openListItemModal({
      modalConfig: {
        modalComponent: ModalListFormComponent,
        modalTitle: "Review App Submission",
        modalFields: [
          createDropdownField("status", "Decision", [
            { label: "Approve", value: "approved" },
            { label: "Reject", value: "rejected" },
            { label: "Suspend", value: "suspended" },
            { label: "Request Changes", value: "changesRequested" }
          ], void 0, {
            validations: [
              { name: "required", validator: Validators.required }
            ]
          }),
          createTextAreaField("comments", "Comments to Developer", void 0, {
            placeholder: "Explain the reason for this decision...",
            validations: [
              { name: "required", validator: Validators.required }
            ]
          }),
          createTextAreaField("internalNotes", "Internal Notes", void 0, {
            placeholder: "Internal notes for the team..."
          })
        ],
        onSubmit: (data, ref) => {
          const request = {
            id: app.id,
            developerId: app.developerId,
            status: data["status"],
            comments: data["comments"],
            internalNotes: data["internalNotes"]
          };
          this.approvalError.set(null);
          this.isSubmittingApproval.set(true);
          return new Promise((resolve) => {
            this.appStoreService.reviewApp(app.id, request).subscribe({
              next: () => {
                this.refreshAppData();
                this.isSubmittingApproval.set(false);
                ref.close();
                resolve(true);
              },
              error: (err) => {
                console.error(err);
                this.approvalError.set("Could not submit review. Please try again.");
                this.isSubmittingApproval.set(false);
                resolve(false);
              }
            });
          });
        }
      },
      itemData: {
        status: "",
        comments: "",
        internalNotes: ""
      },
      destroyRef: this.destroyRef,
      field: dummyField
    }).subscribe();
  }
  openSubmitVersionDialog() {
    const app = this.app();
    if (!app)
      return;
    const isFirstSubmission = app.version.activeVersionId == null;
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
          this.appVersionService.submitVersion(app.id, {
            bumpType: isFirstSubmission ? "patch" : data["bumpType"],
            changelog: data["changelog"]
          }).subscribe({
            next: () => {
              this.refreshAppData();
              ref.close();
              resolve(true);
            },
            error: () => resolve(false)
          });
        })
      },
      itemData: { bumpType: "", changelog: "" },
      destroyRef: this.destroyRef,
      field: dummyField
    }).subscribe();
  }
  installApp() {
    const app = this.app();
    if (!app || !this.canInstall())
      return;
    this.installFacade.installApp(app, this.destroyRef, () => {
      this.refreshAppData();
    });
  }
  uninstallApp() {
    const app = this.app();
    const installationId = app?.installation?.id;
    if (isNullOrUndefined(installationId))
      return;
    const isExternalApp = app?.integrationPoints?.some((p) => p.screenId === "appSidebar") ?? false;
    this.installFacade.uninstallApp(installationId, isExternalApp, () => {
      this.refreshAppData();
    });
  }
  toggleEnabled() {
    const installation = this.app()?.installation;
    if (isNullOrUndefined(installation))
      return;
    this.installFacade.toggleEnabled(installation.id, installation.isEnabled, () => {
      this.refreshAppData();
    });
  }
  static \u0275fac = function AppDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppDetailComponent, selectors: [["app-detail"]], decls: 3, vars: 1, consts: [[1, "flex", "flex-col", "gap-3", "justify-center", "items-center", "py-20", "h-full"], [1, "flex", "flex-col", "justify-center", "items-center", "py-20", "h-full", "text-center"], ["strokeWidth", "3", 1, "w-12", "h-12"], [1, "font-medium", "text-surface-500"], [1, "flex", "justify-center", "items-center", "mb-6", "w-20", "h-20", "rounded-full"], [1, "text-4xl", "pi", "pi-exclamation-triangle"], [1, "mb-2", "text-2xl", "font-bold", "text-surface-900"], [1, "max-w-sm", "text-surface-600"], ["label", "Return to Marketplace", "severity", "secondary", 1, "mt-8", 3, "onClick"], [1, "flex-none", "p-4", "border-b", "border-subtle"], ["label", "Marketplace", "icon", "pi pi-arrow-left", "size", "small", 1, "!text-surface-600", "hover:!text-primary", "font-bold", 3, "onClick", "text"], [1, "overflow-auto", "flex-1", "p-6"], [1, "space-y-6"], [1, "overflow-hidden", "rounded-2xl", "border", "shadow-sm", "border-subtle"], [1, "p-6", "lg:p-10"], [1, "flex", "flex-col", "gap-8", "lg:flex-row", "lg:gap-12"], [1, "flex", "flex-col", "flex-none", "gap-4", "items-center", "lg:items-start"], [1, "relative", "group"], ["appImgFallback", "", 1, "object-cover", "w-32", "h-32", "rounded-3xl", "shadow-md", "transition-transform", "duration-300", "group-hover:scale-105", 3, "src", "alt", "fallbackText"], ["pTooltip", "Verified Secure", 1, "flex", "absolute", "-top-3", "-right-3", "justify-center", "items-center", "w-8", "h-8", "text-green-600", "rounded-full", "border-4", "border-white", "shadow-sm", "bg-surface-0"], [3, "status"], [1, "flex-grow", "space-y-4"], [1, "flex", "flex-col", "gap-4", "justify-between", "md:flex-row", "md:items-start"], [1, "text-3xl", "font-black", "tracking-tight", "text-surface-900"], [1, "flex", "gap-2", "items-center", "mt-2"], [1, "font-bold", "cursor-pointer", "text-primary", "hover:underline"], ["pTooltip", "Verified Partner", 1, "pi", "pi-verified-fill"], [1, "flex", "flex-col", "gap-2", "items-end"], [1, "text-xs", "font-bold", "tracking-widest", "uppercase", "text-surface-400"], [1, "pt-4", "border-t"], ["label", "Install App", "icon", "pi pi-download", "severity", "success", "size", "large", "styleClass", "w-full font-black", 3, "loading"], ["label", "Not Available", "icon", "pi pi-lock", "severity", "secondary", "size", "large", "styleClass", "w-full font-black", "pTooltip", "Only approved apps can be installed", 3, "disabled"], [1, "flex", "gap-1", "items-center", "px-1", "mt-2", "text-xs", "font-bold", "p-error"], [1, "flex", "flex-wrap", "gap-y-4", "gap-x-8", "items-center", "pt-4", "border-t"], [1, "flex", "gap-2", "items-center"], [3, "averageRating", "reviewCount"], [1, "flex", "gap-2", "items-center", "text-surface-600"], [1, "pi", "pi-download", "text-primary"], [1, "font-bold", "text-surface-900"], [1, "text-sm", "font-medium"], [1, "pi", "pi-calendar", "text-primary"], [1, "mt-6", "space-y-3"], [1, "flex", "gap-3", "items-center", "p-4", "rounded-xl", "border-left-3", "surface-border", "text-surface-800"], [1, "flex", "flex-col", "gap-4", "p-4", "bg-amber-50", "rounded-xl", "border", "border-amber-200", "md:flex-row", "md:items-center"], [1, "flex", "flex-col", "gap-4", "p-4", "rounded-xl", "border", "md:flex-row", "md:items-center", "border-primary/20"], [1, "grid", "grid-cols-1", "gap-6", "lg:grid-cols-3"], [1, "space-y-6", "lg:col-span-2"], [1, "p-8", "rounded-2xl", "border", "shadow-sm", "border-subtle"], [1, "flex", "gap-2", "items-center", "mb-6", "text-xl", "font-black", "tracking-wider", "uppercase", "text-surface-900"], [1, "w-1.5", "h-6", "rounded-full", "bg-primary"], [1, "text-base", "leading-relaxed", "whitespace-pre-line", "text-surface-700"], [1, "flex", "justify-between", "items-center", "mb-8"], [1, "flex", "gap-2", "items-center", "text-xl", "font-black", "tracking-wider", "uppercase", "text-surface-900"], ["label", "Write Review", "icon", "pi pi-plus", "size", "small", 1, "font-extrabold", "!text-primary", 3, "onClick", "text"], [1, "space-y-4"], [1, "flex", "gap-3", "items-start", "group"], [1, "flex", "flex-wrap", "gap-2"], [1, "px-3", "py-1.5", "rounded-full", "text-surface-700", "font-bold", "text-[10px]", "uppercase", "tracking-wider", "border", "hover:bg-primary/10", "hover:border-primary/20", "hover:text-primary", "cursor-default", "transition-all", "duration-300"], [1, "flex", "gap-3", "items-center", "p-8", "rounded-2xl", "border", "shadow-sm", "border-subtle"], ["header", "Write a Guest Review", "styleClass", "w-full md:w-[600px] border-none shadow-2xl rounded-2xl overflow-hidden", "maskStyleClass", "backdrop-blur-sm", 3, "onHide", "visible", "modal", "draggable", "resizable"], [1, "p-2", "space-y-6"], [1, "text-sm", "font-medium", "text-surface-500"], ["for", "review-rating-input", 1, "block", "mb-3", "ml-1", "text-xs", "font-black", "tracking-widest", "uppercase", "text-surface-600"], [1, "flex", "gap-4", "items-center", "p-4", "rounded-xl", "border", "shadow-inner"], [3, "ngModelChange", "ngModel", "stars"], [1, "text-lg", "font-black", "text-primary"], ["for", "review-title-input", 1, "block", "mb-2", "ml-1", "text-xs", "font-black", "tracking-widest", "uppercase", "text-surface-600"], ["id", "review-title-input", "pInputText", "", "type", "text", "placeholder", "Sum up your experience...", 1, "w-full", "!p-4", "!rounded-xl", "!text-surface-900", "focus:!bg-white", "transition-all", "font-bold", 3, "ngModelChange", "ngModel"], ["for", "review-comment-input", 1, "block", "mb-2", "ml-1", "text-xs", "font-black", "tracking-widest", "uppercase", "text-surface-600"], ["id", "review-comment-input", "pTextarea", "", "rows", "5", "placeholder", "What do you like or dislike about this integration?", 1, "w-full", "!p-4", "!rounded-xl", "!text-surface-900", "focus:!bg-white", "transition-all", "text-sm", "leading-relaxed", 3, "ngModelChange", "ngModel", "autoResize"], [1, "flex", "gap-2", "items-center", "p-3", "text-xs", "font-bold", "rounded-lg", "border-left-3", "surface-border"], ["pTemplate", "footer"], [1, "text-xs", "font-bold", "pi", "pi-shield"], ["label", "Uninstall", "icon", "pi pi-trash", "severity", "danger", "size", "large", "styleClass", "w-full font-black", 3, "onClick", "loading"], [1, "flex", "gap-3", "items-center", "mt-3"], [1, "text-sm", "font-bold", "text-surface-700"], [3, "ngModelChange", "ngModel", "disabled"], [1, "pi", "pi-spinner", "pi-spin", "text-primary"], [1, "pi", "pi-exclamation-circle"], ["label", "Install App", "icon", "pi pi-download", "severity", "success", "size", "large", "styleClass", "w-full font-black", 3, "onClick", "loading"], [1, "text-lg", "pi", "pi-info-circle"], [1, "flex-grow", "text-sm"], [1, "font-bold"], [1, "flex", "gap-2"], ["label", "Editor", "icon", "pi pi-pencil", "severity", "info", "size", "small", "tooltipPosition", "top", 3, "onClick", "disabled", "pTooltip"], ["label", "Submit", "icon", "pi pi-send", "severity", "primary", "size", "small", 3, "onClick", "loading"], [1, "flex", "flex-grow", "gap-3", "items-start"], [1, "mt-0.5", "text-lg", "text-amber-600", "pi", "pi-exclamation-triangle"], [1, "text-sm"], [1, "font-bold", "text-amber-800"], [1, "mt-1", "text-amber-700"], [1, "text-amber-700"], ["label", "Edit App", "icon", "pi pi-pencil", "severity", "warn", "size", "small", 3, "onClick"], [1, "flex", "flex-grow", "gap-3", "items-center"], [1, "text-xl", "pi", "pi-shield", "text-primary"], [1, "font-bold", "text-primary"], [1, "text-surface-600"], ["label", "Review App", "icon", "pi pi-file-edit", "severity", "info", "size", "small", 3, "onClick", "loading"], [1, "space-y-8"], [1, "py-16", "text-center", "rounded-2xl", "border", "border-dashed"], [1, "px-4", "py-6", "-mx-4", "rounded-xl", "border-b", "transition-all", "group", "first:pt-0", "last:pb-0", "last:border-0"], [1, "flex", "justify-between", "items-start", "mb-4"], [1, "flex", "gap-4", "items-center"], [1, "flex", "justify-center", "items-center", "w-12", "h-12", "text-xl", "font-black", "rounded-2xl", "border", "shadow-inner", "border-primary/20", "text-primary"], [1, "font-black", "text-surface-900"], [1, "flex", "gap-2", "items-center", "mt-0.5"], [1, "text-xs", "font-bold", "text-surface-400"], [1, "text-surface-700", "px-1.5", "py-0.5", "rounded", "text-[10px]", "font-black", "uppercase", "tracking-tighter", "flex", "items-center", "gap-1", "surface-border"], [1, "text-[10px]", "font-bold", "text-surface-400", "uppercase", "tracking-widest"], [1, "flex", "gap-2", "items-center", "mb-3"], [3, "ngModel", "readonly", "stars"], [1, "px-2", "py-0.5", "text-xs", "font-black", "text-green-600", "uppercase", "rounded", "border", "border-green-200"], [1, "mb-2", "font-black", "text-surface-900"], [1, "mb-4", "text-sm", "leading-relaxed", "text-surface-600"], [1, "pi", "pi-check-circle"], [1, "pi", "pi-comments", "!text-5xl", "text-surface-200", "mb-4", "block"], [1, "mt-1", "text-sm", "text-surface-500"], ["label", "Review it now", "severity", "secondary", 1, "mt-4", "font-black", 3, "onClick", "text"], [1, "text-sm", "font-black", "text-surface-800"], ["styleClass", "w-6 h-6", "strokeWidth", "4"], [1, "text-sm", "text-surface-500"], ["align", "left", 3, "value"], ["pTemplate", "marker"], ["pTemplate", "content"], [3, "ngClass"], [1, "pb-6"], [1, "flex", "flex-wrap", "gap-2", "items-center", "mb-1"], [1, "font-mono", "font-bold", "text-surface-900"], [1, "px-1.5", "py-0.5", "text-[10px]", "font-black", "uppercase", "tracking-wider", "rounded", "border", "border-red-200", "text-red-600"], [1, "px-1.5", "py-0.5", "text-[10px]", "font-black", "uppercase", "tracking-wider", "rounded", "border", "border-blue-200", "text-blue-600"], [1, "px-1.5", "py-0.5", "text-[10px]", "font-black", "uppercase", "tracking-wider", "rounded", "border", "border-surface-200", "text-surface-500"], [1, "mb-2", "text-xs", "text-surface-400"], [1, "text-sm", "leading-relaxed", "text-surface-700"], [1, "mt-2", "text-xs", "font-bold", "text-primary", "hover:underline", 3, "click"], [1, "mt-3"], [1, "text-xs", "text-surface-400"], [1, "w-full", "text-xs", "border-collapse"], [1, "text-left", "border-b", "text-surface-400", "border-surface-200"], [1, "pr-4", "pb-1", "w-32", "font-semibold"], [1, "pr-4", "pb-1", "font-semibold"], [1, "pb-1", "font-semibold"], [1, "border-b", "border-surface-100", "last:border-0"], [1, "py-1.5", "pr-4", "font-bold", "text-amber-700", "align-top"], [1, "py-1.5", "pr-4", "max-w-xs", "line-through", "truncate", "align-top", "text-surface-400", 3, "title"], [1, "py-1.5", "max-w-xs", "font-medium", "truncate", "align-top", "text-surface-800", 3, "title"], [1, "text-lg", "pi", "pi-exclamation-circle"], [1, "flex", "gap-3", "justify-end", "items-center", "p-4", "pt-0"], ["label", "Discard", "severity", "secondary", 1, "font-extrabold", 3, "onClick", "text"], ["label", "Publish Review", "icon", "pi pi-send", "iconPos", "right", "severity", "primary", "rounded", "true", 1, "font-black", 3, "onClick", "loading", "disabled"]], template: function AppDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AppDetailComponent_Conditional_0_Template, 4, 0, "div", 0)(1, AppDetailComponent_Conditional_1_Template, 8, 1, "div", 1)(2, AppDetailComponent_Conditional_2_Template, 104, 40);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional(ctx.isLoading() ? 0 : ctx.error() ? 1 : (tmp_0_0 = ctx.app()) ? 2 : -1, tmp_0_0);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    RouterModule,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    ButtonModule,
    Button,
    PrimeTemplate,
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
    CardModule,
    TimelineModule,
    Timeline,
    ProgressSpinnerModule,
    ProgressSpinner,
    ToggleSwitchModule,
    ToggleSwitch,
    AppStatusBadgeComponent,
    AppRatingDisplayComponent,
    ImgFallbackDirective,
    DecimalPipe,
    DatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  font-family: var(--font-family);\n  font-size: var(--base-font-size);\n  font-weight: var(--font-weight);\n  background-color: var(--main-background-color);\n  color: var(--nav-text-color);\n}\n/*# sourceMappingURL=app-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppDetailComponent, [{
    type: Component,
    args: [{ selector: "app-detail", imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      ButtonModule,
      RatingModule,
      DialogModule,
      InputTextModule,
      TextareaModule,
      TooltipModule,
      AccordionModule,
      CardModule,
      TimelineModule,
      ProgressSpinnerModule,
      ToggleSwitchModule,
      AppStatusBadgeComponent,
      AppRatingDisplayComponent,
      ImgFallbackDirective
    ], template: `@if (isLoading()) {
  <div class="flex flex-col gap-3 justify-center items-center py-20 h-full">
    <p-progressSpinner class="w-12 h-12" strokeWidth="3"></p-progressSpinner>
    <p class="font-medium text-surface-500">Loading app details...</p>
  </div>
} @else if (error()) {
  <div
    class="flex flex-col justify-center items-center py-20 h-full text-center"
  >
    <div class="flex justify-center items-center mb-6 w-20 h-20 rounded-full">
      <i class="text-4xl pi pi-exclamation-triangle"></i>
    </div>
    <h3 class="mb-2 text-2xl font-bold text-surface-900">{{ error() }}</h3>
    <p class="max-w-sm text-surface-600">
      Please check your connection or try again later.
    </p>
    <p-button
      (onClick)="goBack()"
      label="Return to Marketplace"
      severity="secondary"
      class="mt-8"
    />
  </div>
} @else if (app(); as app) {
  <!-- Back Button -->
  <div class="flex-none p-4 border-b border-subtle">
    <p-button
      (onClick)="goBack()"
      label="Marketplace"
      icon="pi pi-arrow-left"
      [text]="true"
      size="small"
      class="!text-surface-600 hover:!text-primary font-bold"
    />
  </div>

  <div class="overflow-auto flex-1 p-6">
    <div class="space-y-6">
      <!-- App Header Card -->
      <div class="overflow-hidden rounded-2xl border shadow-sm border-subtle">
        <div class="p-6 lg:p-10">
          <div class="flex flex-col gap-8 lg:flex-row lg:gap-12">
            <!-- Left: App Icon + Status -->
            <div
              class="flex flex-col flex-none gap-4 items-center lg:items-start"
            >
              <div class="relative group">
                <img
                  [src]="app.iconUrl"
                  [alt]="app.name + ' icon'"
                  class="object-cover w-32 h-32 rounded-3xl shadow-md transition-transform duration-300 group-hover:scale-105"
                  appImgFallback
                  [fallbackText]="app.name"
                />
                @if (app.version.activeVersionId !== null) {
                  <div
                    class="flex absolute -top-3 -right-3 justify-center items-center w-8 h-8 text-green-600 rounded-full border-4 border-white shadow-sm bg-surface-0"
                    pTooltip="Verified Secure"
                  >
                    <i class="text-xs font-bold pi pi-shield"></i>
                  </div>
                }
              </div>
              <app-status-badge
                [status]="
                  app.version.pending?.status ??
                  app.version.active?.status ??
                  'draft'
                "
              />
            </div>

            <!-- Middle: Title, Meta, Stats -->
            <div class="flex-grow space-y-4">
              <div
                class="flex flex-col gap-4 justify-between md:flex-row md:items-start"
              >
                <div>
                  <h1
                    class="text-3xl font-black tracking-tight text-surface-900"
                  >
                    {{ app.name }}
                  </h1>
                  <div class="flex gap-2 items-center mt-2">
                    <span class="font-medium text-surface-500"
                      >Developed by</span
                    >
                    <span
                      class="font-bold cursor-pointer text-primary hover:underline"
                      >{{ app.developerName }}</span
                    >
                    @if (app.developerName) {
                      <i
                        class="pi pi-verified-fill"
                        pTooltip="Verified Partner"
                      ></i>
                    }
                  </div>
                </div>

                <div class="flex flex-col gap-2 items-end">
                  <span
                    class="text-xs font-bold tracking-widest uppercase text-surface-400"
                  >
                    {{ app.categories[0] || 'Uncategorized' }}
                  </span>
                </div>
              </div>

              <!-- Install/Uninstall Button -->
              <div class="pt-4 border-t">
                @if (isInstalled()) {
                  <p-button
                    label="Uninstall"
                    icon="pi pi-trash"
                    severity="danger"
                    size="large"
                    [loading]="isPerformingInstallationAction()"
                    (onClick)="uninstallApp()"
                    styleClass="w-full font-black"
                  />
                  <div class="flex gap-3 items-center mt-3">
                    <span class="text-sm font-bold text-surface-700"
                      >App Enabled</span
                    >
                    <p-toggleswitch
                      [ngModel]="installationIsEnabled()"
                      (ngModelChange)="toggleEnabled()"
                      [disabled]="isTogglingEnabled()"
                    />
                    @if (isTogglingEnabled()) {
                      <i class="pi pi-spinner pi-spin text-primary"></i>
                    }
                  </div>
                  @if (toggleEnabledError()) {
                    <p
                      class="flex gap-1 items-center px-1 mt-2 text-xs font-bold p-error"
                    >
                      <i class="pi pi-exclamation-circle"></i>
                      {{ toggleEnabledError() }}
                    </p>
                  }
                } @else if (canInstall()) {
                  <p-button
                    label="Install App"
                    icon="pi pi-download"
                    severity="success"
                    size="large"
                    [loading]="isPerformingInstallationAction()"
                    (onClick)="installApp()"
                    styleClass="w-full font-black"
                  />
                } @else if (app.version.activeVersionId === null) {
                  <p-button
                    label="Not Available"
                    icon="pi pi-lock"
                    severity="secondary"
                    size="large"
                    [disabled]="true"
                    styleClass="w-full font-black"
                    pTooltip="Only approved apps can be installed"
                  />
                }

                @if (installationError()) {
                  <p
                    class="flex gap-1 items-center px-1 mt-2 text-xs font-bold p-error"
                  >
                    <i class="pi pi-exclamation-circle"></i>
                    {{ installationError() }}
                  </p>
                }
              </div>

              <!-- Stats & Summary Info -->
              <div
                class="flex flex-wrap gap-y-4 gap-x-8 items-center pt-4 border-t"
              >
                <div class="flex gap-2 items-center">
                  <app-rating-display
                    [averageRating]="app.stats.averageRating"
                    [reviewCount]="app.stats.reviewCount"
                  />
                </div>
                <div class="flex gap-2 items-center text-surface-600">
                  <i class="pi pi-download text-primary"></i>
                  <span class="font-bold text-surface-900">{{
                    app.stats.installCount | number
                  }}</span>
                  <span class="text-sm font-medium">installations</span>
                </div>
                <div class="flex gap-2 items-center text-surface-600">
                  <i class="pi pi-calendar text-primary"></i>
                  <span class="text-sm font-medium"
                    >Updated {{ app.updatedDate | date: 'MMM d, y' }}</span
                  >
                </div>
              </div>

              <!-- Content/Editor Notifications -->
              <div class="mt-6 space-y-3">
                @if (
                  app.version.activeVersionId === null &&
                  app.version.pending === null
                ) {
                  <div
                    class="flex gap-3 items-center p-4 rounded-xl border-left-3 surface-border text-surface-800"
                  >
                    <i class="text-lg pi pi-info-circle"></i>
                    <div class="flex-grow text-sm">
                      <p class="font-bold">Draft Application</p>
                      <p>
                        This app is currently in draft. You can continue editing
                        or submit it for review.
                      </p>
                    </div>
                    <div class="flex gap-2">
                      <p-button
                        label="Editor"
                        icon="pi pi-pencil"
                        severity="info"
                        size="small"
                        [disabled]="isEditDisabled()"
                        [pTooltip]="getEditDisabledReason()"
                        tooltipPosition="top"
                        (onClick)="startEdit()"
                      />
                      <p-button
                        label="Submit"
                        icon="pi pi-send"
                        severity="primary"
                        size="small"
                        [loading]="isSubmittingApproval()"
                        (onClick)="openSubmitVersionDialog()"
                      />
                    </div>
                  </div>
                }

                @if (app.version.pending?.status === 'changesRequested') {
                  <div
                    class="flex flex-col gap-4 p-4 bg-amber-50 rounded-xl border border-amber-200 md:flex-row md:items-center"
                  >
                    <div class="flex flex-grow gap-3 items-start">
                      <i
                        class="mt-0.5 text-lg text-amber-600 pi pi-exclamation-triangle"
                      ></i>
                      <div class="text-sm">
                        <p class="font-bold text-amber-800">
                          Changes Requested
                        </p>
                        @if (latestReview()?.comments) {
                          <p class="mt-1 text-amber-700">
                            "{{ latestReview()!.comments }}"
                          </p>
                        } @else {
                          <p class="text-amber-700">
                            The reviewer has requested changes to this app.
                          </p>
                        }
                      </div>
                    </div>
                    <p-button
                      label="Edit App"
                      icon="pi pi-pencil"
                      severity="warn"
                      size="small"
                      (onClick)="startEdit()"
                    />
                  </div>
                }

                @if (isAdmin() && isInPendingReview()) {
                  <div
                    class="flex flex-col gap-4 p-4 rounded-xl border md:flex-row md:items-center border-primary/20"
                  >
                    <div class="flex flex-grow gap-3 items-center">
                      <i class="text-xl pi pi-shield text-primary"></i>
                      <div class="text-sm">
                        <p class="font-bold text-primary">
                          Administrator Review Required
                        </p>
                        <p class="text-surface-600">
                          Verify this application's permissions and
                          functionality before approval.
                        </p>
                      </div>
                    </div>
                    <div class="flex gap-2">
                      <p-button
                        label="Review App"
                        icon="pi pi-file-edit"
                        severity="info"
                        size="small"
                        [loading]="isSubmittingApproval()"
                        (onClick)="openSubmissionReviewModal()"
                      />
                    </div>
                  </div>
                }

                @if (approvalError()) {
                  <p
                    class="flex gap-1 items-center px-1 mt-2 text-xs font-bold p-error"
                  >
                    <i class="pi pi-exclamation-circle"></i>
                    {{ approvalError() }}
                  </p>
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Detail Sections -->
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <!-- Main Description Area -->
        <div class="space-y-6 lg:col-span-2">
          <!-- Overview -->
          <div class="p-8 rounded-2xl border shadow-sm border-subtle">
            <h3
              class="flex gap-2 items-center mb-6 text-xl font-black tracking-wider uppercase text-surface-900"
            >
              <span class="w-1.5 h-6 rounded-full bg-primary"></span>
              Product Overview
            </h3>
            <p
              class="text-base leading-relaxed whitespace-pre-line text-surface-700"
            >
              {{ app.description }}
            </p>
          </div>

          <!-- Reviews List -->
          <div class="p-8 rounded-2xl border shadow-sm border-subtle">
            <div class="flex justify-between items-center mb-8">
              <h3
                class="flex gap-2 items-center text-xl font-black tracking-wider uppercase text-surface-900"
              >
                <span class="w-1.5 h-6 rounded-full bg-primary"></span>
                User Feedback
              </h3>
              <p-button
                label="Write Review"
                icon="pi pi-plus"
                size="small"
                [text]="true"
                class="font-extrabold !text-primary"
                (onClick)="openReviewModal()"
              />
            </div>

            @if (reviews(); as reviewsList) {
              @if (reviewsList.length > 0) {
                <div class="space-y-8">
                  @for (review of reviewsList; track review.id) {
                    <div
                      class="px-4 py-6 -mx-4 rounded-xl border-b transition-all group first:pt-0 last:pb-0 last:border-0"
                    >
                      <div class="flex justify-between items-start mb-4">
                        <div class="flex gap-4 items-center">
                          <div
                            class="flex justify-center items-center w-12 h-12 text-xl font-black rounded-2xl border shadow-inner border-primary/20 text-primary"
                          >
                            {{ review.userName.charAt(0).toUpperCase() }}
                          </div>
                          <div>
                            <div class="font-black text-surface-900">
                              {{ review.userName }}
                            </div>
                            <div class="flex gap-2 items-center mt-0.5">
                              <span
                                class="text-xs font-bold text-surface-400"
                                >{{ review.organizationName }}</span
                              >
                              @if (review.isVerifiedPurchase) {
                                <span
                                  class="text-surface-700 px-1.5 py-0.5 rounded text-[10px] font-black uppercase tracking-tighter flex items-center gap-1 surface-border"
                                >
                                  <i class="pi pi-check-circle"></i>
                                  Verified
                                </span>
                              }
                            </div>
                          </div>
                        </div>
                        <span
                          class="text-[10px] font-bold text-surface-400 uppercase tracking-widest"
                          >{{ review.createdDate | date: 'MMM d, y' }}</span
                        >
                      </div>

                      <div class="flex gap-2 items-center mb-3">
                        <p-rating
                          [ngModel]="review.rating"
                          [readonly]="true"
                          [stars]="5"
                        />
                        @if (review.rating >= 4) {
                          <span
                            class="px-2 py-0.5 text-xs font-black text-green-600 uppercase rounded border border-green-200"
                            >Excellent</span
                          >
                        }
                      </div>

                      <h4 class="mb-2 font-black text-surface-900">
                        {{ review.title }}
                      </h4>
                      <p class="mb-4 text-sm leading-relaxed text-surface-600">
                        {{ review.comment }}
                      </p>
                    </div>
                  }
                </div>
              } @else {
                <div class="py-16 text-center rounded-2xl border border-dashed">
                  <i
                    class="pi pi-comments !text-5xl text-surface-200 mb-4 block"
                  ></i>
                  <p class="font-bold text-surface-900">No reviews yet</p>
                  <p class="mt-1 text-sm text-surface-500">
                    Be the first to share your experience with this app!
                  </p>
                  <p-button
                    label="Review it now"
                    severity="secondary"
                    [text]="true"
                    class="mt-4 font-black"
                    (onClick)="openReviewModal()"
                  />
                </div>
              }
            }
          </div>
        </div>

        <!-- Right Side: Sidebar Info -->
        <div class="space-y-6">
          <!-- Features/Capabilities -->
          <div class="p-8 rounded-2xl border shadow-sm border-subtle">
            <h3
              class="flex gap-2 items-center mb-6 text-xl font-black tracking-wider uppercase text-surface-900"
            >
              <span class="w-1.5 h-6 rounded-full bg-primary"></span>
              Integration Points
            </h3>
            <div class="space-y-4">
              @for (point of app.integrationPoints; track $index) {
                <div class="flex gap-3 items-start group">
                  <div>
                    <p class="text-sm font-black text-surface-800">
                      {{ point.screenId }}
                    </p>
                  </div>
                </div>
              }
            </div>
          </div>

          <!-- Tags -->
          <div class="p-8 rounded-2xl border shadow-sm border-subtle">
            <h3
              class="flex gap-2 items-center mb-6 text-xl font-black tracking-wider uppercase text-surface-900"
            >
              <span class="w-1.5 h-6 rounded-full bg-primary"></span>
              Categories
            </h3>
            <div class="flex flex-wrap gap-2">
              @for (category of app.categories; track category) {
                <span
                  class="px-3 py-1.5 rounded-full text-surface-700 font-bold text-[10px] uppercase tracking-wider border hover:bg-primary/10 hover:border-primary/20 hover:text-primary cursor-default transition-all duration-300"
                >
                  {{ category }}
                </span>
              }
            </div>
          </div>
        </div>
      </div>

      <!-- Version History (developer/admin only) -->
      @if (versionsLoading()) {
        <div
          class="flex gap-3 items-center p-8 rounded-2xl border shadow-sm border-subtle"
        >
          <p-progress-spinner styleClass="w-6 h-6" strokeWidth="4" />
          <span class="text-sm text-surface-500">Loading version history\u2026</span>
        </div>
      } @else if (versions().length > 0) {
        <div class="p-8 rounded-2xl border shadow-sm border-subtle">
          <h3
            class="flex gap-2 items-center mb-6 text-xl font-black tracking-wider uppercase text-surface-900"
          >
            <span class="w-1.5 h-6 rounded-full bg-primary"></span>
            Version History
          </h3>
          <p-timeline [value]="versions()" align="left">
            <ng-template pTemplate="marker" let-version>
              <span
                [ngClass]="[
                  'flex w-2 h-2 rounded-full',
                  version.status === 'approved'
                    ? 'bg-green-500'
                    : 'bg-surface-300',
                ]"
              >
              </span>
            </ng-template>
            <ng-template pTemplate="content" let-version let-i="index">
              <div class="pb-6">
                <!-- Header row -->
                <div class="flex flex-wrap gap-2 items-center mb-1">
                  <span class="font-mono font-bold text-surface-900"
                    >v{{ version.version }}</span
                  >
                  @if (version.bumpType === 'major') {
                    <span
                      class="px-1.5 py-0.5 text-[10px] font-black uppercase tracking-wider rounded border border-red-200 text-red-600"
                      >major</span
                    >
                  } @else if (version.bumpType === 'minor') {
                    <span
                      class="px-1.5 py-0.5 text-[10px] font-black uppercase tracking-wider rounded border border-blue-200 text-blue-600"
                      >minor</span
                    >
                  } @else {
                    <span
                      class="px-1.5 py-0.5 text-[10px] font-black uppercase tracking-wider rounded border border-surface-200 text-surface-500"
                      >patch</span
                    >
                  }
                  <app-status-badge [status]="version.status" />
                </div>
                <!-- Date row -->
                <p class="mb-2 text-xs text-surface-400">
                  {{ version.createdDate | date: 'MMM d, y' }}
                </p>
                <!-- Changelog -->
                <p class="text-sm leading-relaxed text-surface-700">
                  {{ version.changelog }}
                </p>
                <!-- Expandable diff (only for versions after the first) -->
                @if (i > 0) {
                  <button
                    class="mt-2 text-xs font-bold text-primary hover:underline"
                    (click)="toggleVersionExpanded(version.id)"
                  >
                    {{
                      expandedVersions().has(version.id)
                        ? 'Hide changes'
                        : 'Show changes vs previous'
                    }}
                  </button>
                  @if (expandedVersions().has(version.id)) {
                    @let diff = getVersionDiff(version, versions()[i - 1]);
                    <div class="mt-3">
                      @if (diff.length === 0) {
                        <p class="text-xs text-surface-400">
                          No tracked field changes.
                        </p>
                      } @else {
                        <table class="w-full text-xs border-collapse">
                          <thead>
                            <tr
                              class="text-left border-b text-surface-400 border-surface-200"
                            >
                              <th class="pr-4 pb-1 w-32 font-semibold">
                                Field
                              </th>
                              <th class="pr-4 pb-1 font-semibold">Before</th>
                              <th class="pb-1 font-semibold">After</th>
                            </tr>
                          </thead>
                          <tbody>
                            @for (change of diff; track change.field) {
                              <tr
                                class="border-b border-surface-100 last:border-0"
                              >
                                <td
                                  class="py-1.5 pr-4 font-bold text-amber-700 align-top"
                                >
                                  {{ change.field }}
                                </td>
                                <td
                                  class="py-1.5 pr-4 max-w-xs line-through truncate align-top text-surface-400"
                                  [title]="change.before"
                                >
                                  {{ change.before }}
                                </td>
                                <td
                                  class="py-1.5 max-w-xs font-medium truncate align-top text-surface-800"
                                  [title]="change.after"
                                >
                                  {{ change.after }}
                                </td>
                              </tr>
                            }
                          </tbody>
                        </table>
                      }
                    </div>
                  }
                }
              </div>
            </ng-template>
          </p-timeline>
        </div>
      }
    </div>
  </div>

  <!-- Review Modal -->
  <p-dialog
    header="Write a Guest Review"
    [visible]="showReviewModal()"
    [modal]="true"
    styleClass="w-full md:w-[600px] border-none shadow-2xl rounded-2xl overflow-hidden"
    [draggable]="false"
    [resizable]="false"
    (onHide)="closeReviewModal()"
    maskStyleClass="backdrop-blur-sm"
  >
    <div class="p-2 space-y-6">
      <p class="text-sm font-medium text-surface-500">
        Your feedback helps the community discover better integrations and helps
        developers improve their work.
      </p>

      <div class="space-y-4">
        <label
          for="review-rating-input"
          class="block mb-3 ml-1 text-xs font-black tracking-widest uppercase text-surface-600"
          >Rating</label
        >
        <div class="flex gap-4 items-center p-4 rounded-xl border shadow-inner">
          <p-rating
            [ngModel]="newReviewRating()"
            (ngModelChange)="newReviewRating.set($event)"
            [stars]="5"
          />
          <span class="text-lg font-black text-primary"
            >{{ newReviewRating() }}/5</span
          >
        </div>

        <div>
          <label
            for="review-title-input"
            class="block mb-2 ml-1 text-xs font-black tracking-widest uppercase text-surface-600"
            >Review Title</label
          >
          <input
            id="review-title-input"
            pInputText
            [ngModel]="newReviewTitle()"
            (ngModelChange)="newReviewTitle.set($event)"
            type="text"
            class="w-full !p-4 !rounded-xl !text-surface-900 focus:!bg-white transition-all font-bold"
            placeholder="Sum up your experience..."
          />
        </div>

        <div>
          <label
            for="review-comment-input"
            class="block mb-2 ml-1 text-xs font-black tracking-widest uppercase text-surface-600"
            >Your Feedback</label
          >
          <textarea
            id="review-comment-input"
            pTextarea
            [ngModel]="newReviewComment()"
            (ngModelChange)="newReviewComment.set($event)"
            rows="5"
            class="w-full !p-4 !rounded-xl !text-surface-900 focus:!bg-white transition-all text-sm leading-relaxed"
            placeholder="What do you like or dislike about this integration?"
            [autoResize]="true"
          ></textarea>
        </div>
      </div>

      @if (reviewError()) {
        <div
          class="flex gap-2 items-center p-3 text-xs font-bold rounded-lg border-left-3 surface-border"
        >
          <i class="text-lg pi pi-exclamation-circle"></i>
          {{ reviewError() }}
        </div>
      }
    </div>

    <ng-template pTemplate="footer">
      <div class="flex gap-3 justify-end items-center p-4 pt-0">
        <p-button
          label="Discard"
          [text]="true"
          severity="secondary"
          class="font-extrabold"
          (onClick)="closeReviewModal()"
        />
        <p-button
          label="Publish Review"
          icon="pi pi-send"
          iconPos="right"
          [loading]="isSubmittingReview()"
          [disabled]="
            isSubmittingReview() ||
            !newReviewTitle().trim() ||
            !newReviewComment().trim()
          "
          (onClick)="submitReview()"
          severity="primary"
          class="font-black"
          rounded="true"
        />
      </div>
    </ng-template>
  </p-dialog>
}
`, styles: ["/* src/app/features/app-store/pages/app-detail/app-detail.component.scss */\n:host {\n  font-family: var(--font-family);\n  font-size: var(--base-font-size);\n  font-weight: var(--font-weight);\n  background-color: var(--main-background-color);\n  color: var(--nav-text-color);\n}\n/*# sourceMappingURL=app-detail.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppDetailComponent, { className: "AppDetailComponent", filePath: "src/app/features/app-store/pages/app-detail/app-detail.component.ts", lineNumber: 75 });
})();
export {
  AppDetailComponent
};
//# sourceMappingURL=chunk-UPKZ446B.js.map
