import {
  AppInstallationService
} from "./chunk-D267LEKG.js";
import {
  AppRatingDisplayComponent
} from "./chunk-MSUTE3TJ.js";
import {
  AppStatusBadgeComponent
} from "./chunk-SRH4Q32Y.js";
import {
  AppStoreService,
  mapAppReviewFromApi
} from "./chunk-26EHOY33.js";
import {
  TimelineModule
} from "./chunk-SD7CD6SE.js";
import {
  ModalListFormComponent
} from "./chunk-EY6ER4MP.js";
import {
  CardModule
} from "./chunk-ERWSOVMD.js";
import {
  AccordionModule
} from "./chunk-PVMHRDPC.js";
import {
  ModalFormService,
  Rating,
  RatingModule
} from "./chunk-JHNPE5AD.js";
import {
  Dialog,
  DialogModule
} from "./chunk-BUQLELQY.js";
import "./chunk-IDQPRALM.js";
import "./chunk-T5WYQJMH.js";
import {
  Textarea,
  TextareaModule
} from "./chunk-W5XLQNKH.js";
import "./chunk-B2VOHKSQ.js";
import "./chunk-RAMUTPV2.js";
import "./chunk-3ELTUYPI.js";
import "./chunk-IM6TEFQQ.js";
import "./chunk-PAFIW2EK.js";
import {
  DefaultValueAccessor,
  FormsModule,
  InputText,
  InputTextModule,
  NgControlStatus,
  NgModel,
  Validators
} from "./chunk-4CAIP3KE.js";
import {
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-BJMVTXFZ.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-2UAXSVOA.js";
import {
  Button,
  ButtonModule
} from "./chunk-PBS4GE25.js";
import {
  PrimeTemplate
} from "./chunk-YL4UBWIM.js";
import {
  ActivatedRoute,
  ApiUrlService,
  AuthDataService,
  ClientDataService,
  CommonModule,
  DEFAULT_SYSTEM_ID,
  DatePipe,
  DecimalPipe,
  HttpClient,
  HttpParams,
  Location,
  Router,
  RouterModule,
  createDropdownField,
  createTextAreaField,
  isNullOrUndefined,
  toObservable,
  toSignal
} from "./chunk-UNWLID6Q.js";
import {
  Component,
  DestroyRef,
  Injectable,
  catchError,
  computed,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4KHPVNTA.js";
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
var _forTrack0 = ($index, $item) => $item.id;
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
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("loading", ctx_r1.isPerformingInstallationAction());
  }
}
function AppDetailComponent_Conditional_2_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 74);
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
    \u0275\u0275element(0, "p-button", 32);
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
  }
}
function AppDetailComponent_Conditional_2_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 33);
    \u0275\u0275element(1, "i", 75);
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
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "i", 76);
    \u0275\u0275elementStart(2, "div", 77)(3, "p", 78);
    \u0275\u0275text(4, "Draft Application");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, " This app is currently in draft. You can continue editing or submit it for review. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 79)(8, "p-button", 80);
    \u0275\u0275listener("onClick", function AppDetailComponent_Conditional_2_Conditional_47_Template_p_button_onClick_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startEdit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p-button", 81);
    \u0275\u0275listener("onClick", function AppDetailComponent_Conditional_2_Conditional_47_Template_p_button_onClick_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitDraftForReview());
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
function AppDetailComponent_Conditional_2_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 82);
    \u0275\u0275element(2, "i", 83);
    \u0275\u0275elementStart(3, "div", 84)(4, "p", 85);
    \u0275\u0275text(5, " Administrator Review Required ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 86);
    \u0275\u0275text(7, " Verify this application's permissions and functionality before approval. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 79)(9, "p-button", 87);
    \u0275\u0275listener("onClick", function AppDetailComponent_Conditional_2_Conditional_48_Template_p_button_onClick_9_listener() {
      \u0275\u0275restoreView(_r7);
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
function AppDetailComponent_Conditional_2_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 33);
    \u0275\u0275element(1, "i", 75);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.approvalError(), " ");
  }
}
function AppDetailComponent_Conditional_2_Conditional_64_Conditional_0_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 97);
    \u0275\u0275element(1, "i", 104);
    \u0275\u0275text(2, " Verified ");
    \u0275\u0275elementEnd();
  }
}
function AppDetailComponent_Conditional_2_Conditional_64_Conditional_0_For_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 101);
    \u0275\u0275text(1, "Excellent");
    \u0275\u0275elementEnd();
  }
}
function AppDetailComponent_Conditional_2_Conditional_64_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90)(1, "div", 91)(2, "div", 92)(3, "div", 93);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 94);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 95)(9, "span", 96);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, AppDetailComponent_Conditional_2_Conditional_64_Conditional_0_For_2_Conditional_11_Template, 3, 0, "span", 97);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "span", 98);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 99);
    \u0275\u0275element(16, "p-rating", 100);
    \u0275\u0275conditionalCreate(17, AppDetailComponent_Conditional_2_Conditional_64_Conditional_0_For_2_Conditional_17_Template, 2, 0, "span", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "h4", 102);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 103);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const review_r8 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", review_r8.userName.charAt(0).toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", review_r8.userName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r8.organizationName);
    \u0275\u0275advance();
    \u0275\u0275conditional(review_r8.isVerifiedPurchase ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 11, review_r8.createdDate, "MMM d, y"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", review_r8.rating)("readonly", true)("stars", 5);
    \u0275\u0275advance();
    \u0275\u0275conditional(review_r8.rating >= 4 ? 17 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", review_r8.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", review_r8.comment, " ");
  }
}
function AppDetailComponent_Conditional_2_Conditional_64_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275repeaterCreate(1, AppDetailComponent_Conditional_2_Conditional_64_Conditional_0_For_2_Template, 22, 14, "div", 90, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reviewsList_r9 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(reviewsList_r9);
  }
}
function AppDetailComponent_Conditional_2_Conditional_64_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275element(1, "i", 105);
    \u0275\u0275elementStart(2, "p", 39);
    \u0275\u0275text(3, "No reviews yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 106);
    \u0275\u0275text(5, " Be the first to share your experience with this app! ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p-button", 107);
    \u0275\u0275listener("onClick", function AppDetailComponent_Conditional_2_Conditional_64_Conditional_1_Template_p_button_onClick_6_listener() {
      \u0275\u0275restoreView(_r10);
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
function AppDetailComponent_Conditional_2_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AppDetailComponent_Conditional_2_Conditional_64_Conditional_0_Template, 3, 0, "div", 88)(1, AppDetailComponent_Conditional_2_Conditional_64_Conditional_1_Template, 7, 1, "div", 89);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.length > 0 ? 0 : 1);
  }
}
function AppDetailComponent_Conditional_2_For_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div")(2, "p", 108);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const point_r11 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", point_r11.screenId, " ");
  }
}
function AppDetailComponent_Conditional_2_For_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r12, " ");
  }
}
function AppDetailComponent_Conditional_2_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275element(1, "i", 109);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.reviewError(), " ");
  }
}
function AppDetailComponent_Conditional_2_ng_template_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 110)(1, "p-button", 111);
    \u0275\u0275listener("onClick", function AppDetailComponent_Conditional_2_ng_template_100_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeReviewModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 112);
    \u0275\u0275listener("onClick", function AppDetailComponent_Conditional_2_ng_template_100_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r13);
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
    \u0275\u0275conditionalCreate(27, AppDetailComponent_Conditional_2_Conditional_27_Template, 1, 1, "p-button", 30)(28, AppDetailComponent_Conditional_2_Conditional_28_Template, 1, 1, "p-button", 31)(29, AppDetailComponent_Conditional_2_Conditional_29_Template, 1, 1, "p-button", 32);
    \u0275\u0275conditionalCreate(30, AppDetailComponent_Conditional_2_Conditional_30_Template, 3, 1, "p", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 34)(32, "div", 35);
    \u0275\u0275element(33, "app-rating-display", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 37);
    \u0275\u0275element(35, "i", 38);
    \u0275\u0275elementStart(36, "span", 39);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 40);
    \u0275\u0275text(40, "installations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 37);
    \u0275\u0275element(42, "i", 41);
    \u0275\u0275elementStart(43, "span", 40);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 42);
    \u0275\u0275conditionalCreate(47, AppDetailComponent_Conditional_2_Conditional_47_Template, 10, 3, "div", 43);
    \u0275\u0275conditionalCreate(48, AppDetailComponent_Conditional_2_Conditional_48_Template, 10, 1, "div", 44);
    \u0275\u0275conditionalCreate(49, AppDetailComponent_Conditional_2_Conditional_49_Template, 3, 1, "p", 33);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(50, "div", 45)(51, "div", 46)(52, "div", 47)(53, "h3", 48);
    \u0275\u0275element(54, "span", 49);
    \u0275\u0275text(55, " Product Overview ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "p", 50);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 47)(59, "div", 51)(60, "h3", 52);
    \u0275\u0275element(61, "span", 49);
    \u0275\u0275text(62, " User Feedback ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "p-button", 53);
    \u0275\u0275listener("onClick", function AppDetailComponent_Conditional_2_Template_p_button_onClick_63_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openReviewModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(64, AppDetailComponent_Conditional_2_Conditional_64_Template, 2, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 12)(66, "div", 47)(67, "h3", 54);
    \u0275\u0275element(68, "span", 49);
    \u0275\u0275text(69, " Integration Points ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 55);
    \u0275\u0275repeaterCreate(71, AppDetailComponent_Conditional_2_For_72_Template, 4, 1, "div", 56, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 47)(74, "h3", 54);
    \u0275\u0275element(75, "span", 49);
    \u0275\u0275text(76, " Categories ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 57);
    \u0275\u0275repeaterCreate(78, AppDetailComponent_Conditional_2_For_79_Template, 2, 1, "span", 58, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(80, "p-dialog", 59);
    \u0275\u0275listener("onHide", function AppDetailComponent_Conditional_2_Template_p_dialog_onHide_80_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeReviewModal());
    });
    \u0275\u0275elementStart(81, "div", 60)(82, "p", 61);
    \u0275\u0275text(83, " Your feedback helps the community discover better integrations and helps developers improve their work. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div", 55)(85, "label", 62);
    \u0275\u0275text(86, "Rating");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "div", 63)(88, "p-rating", 64);
    \u0275\u0275listener("ngModelChange", function AppDetailComponent_Conditional_2_Template_p_rating_ngModelChange_88_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newReviewRating.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "span", 65);
    \u0275\u0275text(90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "div")(92, "label", 66);
    \u0275\u0275text(93, "Review Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "input", 67);
    \u0275\u0275listener("ngModelChange", function AppDetailComponent_Conditional_2_Template_input_ngModelChange_94_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newReviewTitle.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "div")(96, "label", 68);
    \u0275\u0275text(97, "Your Feedback");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "textarea", 69);
    \u0275\u0275listener("ngModelChange", function AppDetailComponent_Conditional_2_Template_textarea_ngModelChange_98_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newReviewComment.set($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(99, AppDetailComponent_Conditional_2_Conditional_99_Template, 3, 1, "div", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275template(100, AppDetailComponent_Conditional_2_ng_template_100_Template, 3, 3, "ng-template", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_22_0;
    const app_r14 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("text", true);
    \u0275\u0275advance(8);
    \u0275\u0275property("src", app_r14.iconUrl, \u0275\u0275sanitizeUrl)("alt", app_r14.name + " icon");
    \u0275\u0275advance();
    \u0275\u0275conditional(app_r14.status === "approved" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("status", app_r14.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", app_r14.name, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(app_r14.developerName);
    \u0275\u0275advance();
    \u0275\u0275conditional(app_r14.developerName ? 22 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", app_r14.categories[0] || "Uncategorized", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isInstalled() ? 27 : ctx_r1.canInstall() ? 28 : app_r14.status !== "approved" ? 29 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.installationError() ? 30 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("averageRating", app_r14.averageRating)("reviewCount", app_r14.reviewCount);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 32, app_r14.installCount));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Updated ", \u0275\u0275pipeBind2(45, 34, app_r14.updatedDate, "MMM d, y"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(app_r14.status === "draft" ? 47 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isAdmin() && ctx_r1.isInPendingReview() ? 48 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.approvalError() ? 49 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", app_r14.description, " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("text", true);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_22_0 = ctx_r1.reviews()) ? 64 : -1, tmp_22_0);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(app_r14.integrationPoints);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(app_r14.categories);
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
    \u0275\u0275conditional(ctx_r1.reviewError() ? 99 : -1);
  }
}
var AppDetailComponent = class _AppDetailComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  location = inject(Location);
  appStoreService = inject(AppStoreService);
  reviewService = inject(ReviewService);
  appInstallationService = inject(AppInstallationService);
  authDataService = inject(AuthDataService);
  clientDataService = inject(ClientDataService);
  modalFormService = inject(ModalFormService);
  destroyRef = inject(DestroyRef);
  // Identity - Reactive signals that update when auth state changes
  currentUserId = computed(() => this.authDataService.getUserProfileSignal()()?.id ?? null, ...ngDevMode ? [{ debugName: "currentUserId" }] : []);
  isAdmin = computed(() => this.authDataService.getUserProfileSignal()()?.roles?.some((role) => role.id === DEFAULT_SYSTEM_ID) ?? false, ...ngDevMode ? [{ debugName: "isAdmin" }] : []);
  // App Data (Signal-based)
  appId = toSignal(this.route.paramMap.pipe(map((params) => params.get("id"))));
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  // Refresh trigger for app data (similar to reviews)
  refreshAppTrigger = signal(0, ...ngDevMode ? [{ debugName: "refreshAppTrigger" }] : []);
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
  app = computed(() => this.appData(), ...ngDevMode ? [{ debugName: "app" }] : []);
  // Review State
  refreshReviewsTrigger = signal(0, ...ngDevMode ? [{ debugName: "refreshReviewsTrigger" }] : []);
  reviews = toSignal(toObservable(computed(() => ({
    id: this.appId(),
    trigger: this.refreshReviewsTrigger()
  }))).pipe(switchMap(({ id }) => {
    if (isNullOrUndefined(id))
      return of([]);
    return this.reviewService.getReviewsForApp(id).pipe(catchError(() => of([])));
  })), { initialValue: [] });
  isSubmittingReview = signal(false, ...ngDevMode ? [{ debugName: "isSubmittingReview" }] : []);
  reviewError = signal(null, ...ngDevMode ? [{ debugName: "reviewError" }] : []);
  isSubmittingApproval = signal(false, ...ngDevMode ? [{ debugName: "isSubmittingApproval" }] : []);
  approvalError = signal(null, ...ngDevMode ? [{ debugName: "approvalError" }] : []);
  // Installation State
  refreshInstallationTrigger = signal(0, ...ngDevMode ? [{ debugName: "refreshInstallationTrigger" }] : []);
  isPerformingInstallationAction = signal(false, ...ngDevMode ? [{ debugName: "isPerformingInstallationAction" }] : []);
  installationError = signal(null, ...ngDevMode ? [{ debugName: "installationError" }] : []);
  userInstallation = toSignal(toObservable(computed(() => ({
    appId: this.appId(),
    trigger: this.refreshInstallationTrigger()
  }))).pipe(switchMap(({ appId }) => {
    const userId = this.currentUserId();
    if (isNullOrUndefined(appId) || isNullOrUndefined(userId))
      return of(null);
    return this.appInstallationService.getInstallations({ owner: userId }).pipe(map((installations) => installations.find((inst) => inst.appId === appId) ?? null), catchError(() => of(null)));
  })), { initialValue: null });
  isInstalled = computed(() => this.userInstallation() !== null, ...ngDevMode ? [{ debugName: "isInstalled" }] : []);
  canInstall = computed(() => {
    const app = this.app();
    return app?.status === "approved" && !this.isInstalled();
  }, ...ngDevMode ? [{ debugName: "canInstall" }] : []);
  // Review Form
  showReviewModal = signal(false, ...ngDevMode ? [{ debugName: "showReviewModal" }] : []);
  newReviewRating = signal(5, ...ngDevMode ? [{ debugName: "newReviewRating" }] : []);
  newReviewTitle = signal("", ...ngDevMode ? [{ debugName: "newReviewTitle" }] : []);
  newReviewComment = signal("", ...ngDevMode ? [{ debugName: "newReviewComment" }] : []);
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
    const userId = this.currentUserId();
    this.reviewService.addReview(id, {
      userId: userId ?? "anonymous",
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
  isApproved = computed(() => (this.app()?.status ?? "") === "approved", ...ngDevMode ? [{ debugName: "isApproved" }] : []);
  canEdit = computed(() => {
    const app = this.app();
    if (!app)
      return false;
    return app.developerId === this.currentUserId() && (app.status ?? "") === "draft";
  }, ...ngDevMode ? [{ debugName: "canEdit" }] : []);
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
  }, ...ngDevMode ? [{ debugName: "isEditDisabled" }] : []);
  getEditDisabledReason = computed(() => {
    const app = this.app();
    if (!app)
      return "";
    const status = app.status ?? "";
    if (status === "pendingReview")
      return "Editing is disabled while under review";
    if (status === "approved")
      return "Editing is disabled for approved apps";
    if (status === "suspended")
      return "Editing is disabled for suspended apps";
    if (status === "rejected")
      return "App was rejected. Create a new app or contact support.";
    return "You can only edit apps in draft status";
  }, ...ngDevMode ? [{ debugName: "getEditDisabledReason" }] : []);
  isInPendingReview = computed(() => (this.app()?.status ?? "") === "pendingReview", ...ngDevMode ? [{ debugName: "isInPendingReview" }] : []);
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
            { label: "Request Changes", value: "changesRequested" },
            { label: "Under Review", value: "underReview" }
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
  submitDraftForReview() {
    const app = this.app();
    if (!app || (app.status ?? "") !== "draft")
      return;
    this.approvalError.set(null);
    this.isSubmittingApproval.set(true);
    this.appStoreService.submitForReview(app.id).pipe(tap(() => {
      this.approvalError.set(null);
      this.refreshAppData();
    }), catchError(() => {
      this.approvalError.set("Could not submit for review. Please try again.");
      return of(null);
    })).subscribe({
      complete: () => this.isSubmittingApproval.set(false)
    });
  }
  installApp() {
    const app = this.app();
    const userId = this.currentUserId();
    if (!app || !this.canInstall() || isNullOrUndefined(userId))
      return;
    this.installationError.set(null);
    this.isPerformingInstallationAction.set(true);
    this.appInstallationService.installApp(app.id, userId, {}, app.name, app.developerId).pipe(tap(() => {
      this.refreshInstallationTrigger.update((n) => n + 1);
      this.installationError.set(null);
    }), catchError((err) => {
      console.error("App installation error:", err);
      this.installationError.set("Could not install the app. Please try again.");
      return of(null);
    })).subscribe({
      complete: () => this.isPerformingInstallationAction.set(false)
    });
  }
  uninstallApp() {
    const installation = this.userInstallation();
    const userId = this.currentUserId();
    if (!installation || isNullOrUndefined(userId))
      return;
    this.installationError.set(null);
    this.isPerformingInstallationAction.set(true);
    this.appInstallationService.uninstallApp(installation.id, userId).pipe(tap(() => {
      this.refreshInstallationTrigger.update((n) => n + 1);
      this.installationError.set(null);
    }), catchError((err) => {
      console.error("App uninstallation error:", err);
      this.installationError.set("Could not uninstall the app. Please try again.");
      return of(null);
    })).subscribe({
      complete: () => this.isPerformingInstallationAction.set(false)
    });
  }
  static \u0275fac = function AppDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppDetailComponent, selectors: [["app-detail"]], decls: 3, vars: 1, consts: [[1, "flex", "flex-col", "items-center", "justify-center", "h-full", "gap-3", "py-20"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "text-center", "h-full"], ["strokeWidth", "3", 1, "w-12", "h-12"], [1, "text-surface-500", "font-medium"], [1, "w-20", "h-20", "rounded-full", "flex", "items-center", "justify-center", "mb-6"], [1, "pi", "pi-exclamation-triangle", "text-4xl"], [1, "text-2xl", "font-bold", "text-surface-900", "mb-2"], [1, "text-surface-600", "max-w-sm"], ["label", "Return to Marketplace", "severity", "secondary", 1, "mt-8", 3, "onClick"], [1, "p-4", "flex-none", "border-b", "border-subtle"], ["label", "Marketplace", "icon", "pi pi-arrow-left", "size", "small", 1, "!text-surface-600", "hover:!text-primary", "font-bold", 3, "onClick", "text"], [1, "flex-1", "overflow-auto", "p-6"], [1, "space-y-6"], [1, "rounded-2xl", "border", "border-subtle", "shadow-sm", "overflow-hidden"], [1, "p-6", "lg:p-10"], [1, "flex", "flex-col", "lg:flex-row", "gap-8", "lg:gap-12"], [1, "flex", "flex-col", "items-center", "lg:items-start", "gap-4", "flex-none"], [1, "relative", "group"], [1, "w-32", "h-32", "rounded-3xl", "object-cover", "shadow-md", "group-hover:scale-105", "transition-transform", "duration-300", 3, "src", "alt"], ["pTooltip", "Verified Secure", 1, "absolute", "-top-3", "-right-3", "text-green-600", "w-8", "h-8", "rounded-full", "flex", "items-center", "justify-center", "border-4", "border-white", "shadow-sm", "bg-surface-0"], [3, "status"], [1, "flex-grow", "space-y-4"], [1, "flex", "flex-col", "md:flex-row", "md:items-start", "justify-between", "gap-4"], [1, "text-3xl", "font-black", "text-surface-900", "tracking-tight"], [1, "flex", "items-center", "gap-2", "mt-2"], [1, "text-primary", "font-bold", "hover:underline", "cursor-pointer"], ["pTooltip", "Verified Partner", 1, "pi", "pi-verified-fill"], [1, "flex", "flex-col", "items-end", "gap-2"], [1, "text-xs", "font-bold", "uppercase", "tracking-widest", "text-surface-400"], [1, "pt-4", "border-t"], ["label", "Uninstall", "icon", "pi pi-trash", "severity", "danger", "size", "large", "styleClass", "w-full font-black", 3, "loading"], ["label", "Install App", "icon", "pi pi-download", "severity", "success", "size", "large", "styleClass", "w-full font-black", 3, "loading"], ["label", "Not Available", "icon", "pi pi-lock", "severity", "secondary", "size", "large", "styleClass", "w-full font-black", "pTooltip", "Only approved apps can be installed", 3, "disabled"], [1, "p-error", "text-xs", "mt-2", "px-1", "font-bold", "flex", "items-center", "gap-1"], [1, "flex", "flex-wrap", "items-center", "gap-x-8", "gap-y-4", "pt-4", "border-t"], [1, "flex", "items-center", "gap-2"], [3, "averageRating", "reviewCount"], [1, "flex", "items-center", "gap-2", "text-surface-600"], [1, "pi", "pi-download", "text-primary"], [1, "font-bold", "text-surface-900"], [1, "text-sm", "font-medium"], [1, "pi", "pi-calendar", "text-primary"], [1, "mt-6", "space-y-3"], [1, "flex", "items-center", "gap-3", "p-4", "rounded-xl", "border-left-3", "surface-border", "text-surface-800"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "gap-4", "p-4", "rounded-xl", "border", "border-primary/20"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-2", "space-y-6"], [1, "rounded-2xl", "border", "border-subtle", "p-8", "shadow-sm"], [1, "text-xl", "font-black", "text-surface-900", "mb-6", "uppercase", "tracking-wider", "flex", "items-center", "gap-2", "text-sm"], [1, "w-1.5", "h-6", "bg-primary", "rounded-full"], [1, "text-surface-700", "leading-relaxed", "whitespace-pre-line", "text-base"], [1, "flex", "items-center", "justify-between", "mb-8"], [1, "text-xl", "font-black", "text-surface-900", "uppercase", "tracking-wider", "flex", "items-center", "gap-2", "text-sm"], ["label", "Write Review", "icon", "pi pi-plus", "size", "small", 1, "font-extrabold", "!text-primary", 3, "onClick", "text"], [1, "text-xl", "font-black", "text-surface-900", "uppercase", "tracking-wider", "flex", "items-center", "gap-2", "text-sm", "mb-6"], [1, "space-y-4"], [1, "flex", "items-start", "gap-3", "group"], [1, "flex", "flex-wrap", "gap-2"], [1, "px-3", "py-1.5", "rounded-full", "text-surface-700", "font-bold", "text-[10px]", "uppercase", "tracking-wider", "border", "hover:bg-primary/10", "hover:border-primary/20", "hover:text-primary", "cursor-default", "transition-all", "duration-300"], ["header", "Write a Guest Review", "styleClass", "w-full md:w-[600px] border-none shadow-2xl rounded-2xl overflow-hidden", "maskStyleClass", "backdrop-blur-sm", 3, "onHide", "visible", "modal", "draggable", "resizable"], [1, "space-y-6", "p-2"], [1, "text-surface-500", "text-sm", "font-medium"], ["for", "review-rating-input", 1, "block", "text-xs", "font-black", "uppercase", "tracking-widest", "text-surface-600", "mb-3", "ml-1"], [1, "flex", "items-center", "gap-4", "p-4", "rounded-xl", "border", "shadow-inner"], [3, "ngModelChange", "ngModel", "stars"], [1, "font-black", "text-primary", "text-lg"], ["for", "review-title-input", 1, "block", "text-xs", "font-black", "uppercase", "tracking-widest", "text-surface-600", "mb-2", "ml-1"], ["id", "review-title-input", "pInputText", "", "type", "text", "placeholder", "Sum up your experience...", 1, "w-full", "!p-4", "!rounded-xl", "!text-surface-900", "focus:!bg-white", "transition-all", "font-bold", 3, "ngModelChange", "ngModel"], ["for", "review-comment-input", 1, "block", "text-xs", "font-black", "uppercase", "tracking-widest", "text-surface-600", "mb-2", "ml-1"], ["id", "review-comment-input", "pTextarea", "", "rows", "5", "placeholder", "What do you like or dislike about this integration?", 1, "w-full", "!p-4", "!rounded-xl", "!text-surface-900", "focus:!bg-white", "transition-all", "text-sm", "leading-relaxed", 3, "ngModelChange", "ngModel", "autoResize"], [1, "p-3", "border-left-3", "surface-border", "rounded-lg", "text-xs", "font-bold", "flex", "items-center", "gap-2"], ["pTemplate", "footer"], [1, "pi", "pi-shield", "text-xs", "font-bold"], ["label", "Uninstall", "icon", "pi pi-trash", "severity", "danger", "size", "large", "styleClass", "w-full font-black", 3, "onClick", "loading"], ["label", "Install App", "icon", "pi pi-download", "severity", "success", "size", "large", "styleClass", "w-full font-black", 3, "onClick", "loading"], [1, "pi", "pi-exclamation-circle"], [1, "pi", "pi-info-circle", "text-lg"], [1, "flex-grow", "text-sm"], [1, "font-bold"], [1, "flex", "gap-2"], ["label", "Editor", "icon", "pi pi-pencil", "severity", "info", "size", "small", "tooltipPosition", "top", 3, "onClick", "disabled", "pTooltip"], ["label", "Submit", "icon", "pi pi-send", "severity", "primary", "size", "small", 3, "onClick", "loading"], [1, "flex-grow", "flex", "items-center", "gap-3"], [1, "pi", "pi-shield", "text-primary", "text-xl"], [1, "text-sm"], [1, "font-bold", "text-primary"], [1, "text-surface-600"], ["label", "Review App", "icon", "pi pi-file-edit", "severity", "info", "size", "small", 3, "onClick", "loading"], [1, "space-y-8"], [1, "text-center", "py-16", "rounded-2xl", "border", "border-dashed"], [1, "group", "py-6", "first:pt-0", "last:pb-0", "border-b", "last:border-0", "transition-all", "-mx-4", "px-4", "rounded-xl"], [1, "flex", "items-start", "justify-between", "mb-4"], [1, "flex", "items-center", "gap-4"], [1, "w-12", "h-12", "rounded-2xl", "border", "border-primary/20", "text-primary", "flex", "items-center", "justify-center", "font-black", "text-xl", "shadow-inner"], [1, "font-black", "text-surface-900"], [1, "flex", "items-center", "gap-2", "mt-0.5"], [1, "text-xs", "font-bold", "text-surface-400"], [1, "text-surface-700", "px-1.5", "py-0.5", "rounded", "text-[10px]", "font-black", "uppercase", "tracking-tighter", "flex", "items-center", "gap-1", "surface-border"], [1, "text-[10px]", "font-bold", "text-surface-400", "uppercase", "tracking-widest"], [1, "flex", "items-center", "gap-2", "mb-3"], [3, "ngModel", "readonly", "stars"], [1, "text-xs", "font-black", "uppercase", "px-2", "py-0.5", "rounded", "border", "border-green-200", "text-green-600"], [1, "font-black", "text-surface-900", "mb-2"], [1, "text-surface-600", "leading-relaxed", "text-sm", "mb-4"], [1, "pi", "pi-check-circle"], [1, "pi", "pi-comments", "!text-5xl", "text-surface-200", "mb-4", "block"], [1, "text-surface-500", "text-sm", "mt-1"], ["label", "Review it now", "severity", "secondary", 1, "mt-4", "font-black", 3, "onClick", "text"], [1, "font-black", "text-surface-800", "text-sm"], [1, "pi", "pi-exclamation-circle", "text-lg"], [1, "flex", "items-center", "justify-end", "gap-3", "p-4", "pt-0"], ["label", "Discard", "severity", "secondary", 1, "font-extrabold", 3, "onClick", "text"], ["label", "Publish Review", "icon", "pi pi-send", "iconPos", "right", "severity", "primary", "rounded", "true", 1, "font-black", 3, "onClick", "loading", "disabled"]], template: function AppDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AppDetailComponent_Conditional_0_Template, 4, 0, "div", 0)(1, AppDetailComponent_Conditional_1_Template, 8, 1, "div", 1)(2, AppDetailComponent_Conditional_2_Template, 101, 37);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional(ctx.isLoading() ? 0 : ctx.error() ? 1 : (tmp_0_0 = ctx.app()) ? 2 : -1, tmp_0_0);
    }
  }, dependencies: [
    CommonModule,
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
    ProgressSpinnerModule,
    ProgressSpinner,
    AppStatusBadgeComponent,
    AppRatingDisplayComponent,
    DecimalPipe,
    DatePipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  font-family: var(--font-family);\n  font-size: var(--base-font-size);\n  font-weight: var(--font-weight);\n  background-color: var(--main-background-color);\n  color: var(--nav-text-color);\n}\n/*# sourceMappingURL=app-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppDetailComponent, [{
    type: Component,
    args: [{ selector: "app-detail", standalone: true, imports: [
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
      AppStatusBadgeComponent,
      AppRatingDisplayComponent
    ], template: `@if (isLoading()) {
  <div class="flex flex-col items-center justify-center h-full gap-3 py-20">
    <p-progressSpinner class="w-12 h-12" strokeWidth="3"></p-progressSpinner>
    <p class="text-surface-500 font-medium">Loading app details...</p>
  </div>
} @else if (error()) {
  <div
    class="flex flex-col items-center justify-center py-20 text-center h-full"
  >
    <div class="w-20 h-20 rounded-full flex items-center justify-center mb-6">
      <i class="pi pi-exclamation-triangle text-4xl"></i>
    </div>
    <h3 class="text-2xl font-bold text-surface-900 mb-2">{{ error() }}</h3>
    <p class="text-surface-600 max-w-sm">
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
  <div class="p-4 flex-none border-b border-subtle">
    <p-button
      (onClick)="goBack()"
      label="Marketplace"
      icon="pi pi-arrow-left"
      [text]="true"
      size="small"
      class="!text-surface-600 hover:!text-primary font-bold"
    />
  </div>

  <div class="flex-1 overflow-auto p-6">
    <div class="space-y-6">
      <!-- App Header Card -->
      <div class="rounded-2xl border border-subtle shadow-sm overflow-hidden">
        <div class="p-6 lg:p-10">
          <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <!-- Left: App Icon + Status -->
            <div
              class="flex flex-col items-center lg:items-start gap-4 flex-none"
            >
              <div class="relative group">
                <img
                  [src]="app.iconUrl"
                  [alt]="app.name + ' icon'"
                  class="w-32 h-32 rounded-3xl object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
                />
                @if (app.status === 'approved') {
                  <div
                    class="absolute -top-3 -right-3 text-green-600 w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow-sm bg-surface-0"
                    pTooltip="Verified Secure"
                  >
                    <i class="pi pi-shield text-xs font-bold"></i>
                  </div>
                }
              </div>
              <app-status-badge [status]="app.status" />
            </div>

            <!-- Middle: Title, Meta, Stats -->
            <div class="flex-grow space-y-4">
              <div
                class="flex flex-col md:flex-row md:items-start justify-between gap-4"
              >
                <div>
                  <h1
                    class="text-3xl font-black text-surface-900 tracking-tight"
                  >
                    {{ app.name }}
                  </h1>
                  <div class="flex items-center gap-2 mt-2">
                    <span class="text-surface-500 font-medium"
                      >Developed by</span
                    >
                    <span
                      class="text-primary font-bold hover:underline cursor-pointer"
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

                <div class="flex flex-col items-end gap-2">
                  <span
                    class="text-xs font-bold uppercase tracking-widest text-surface-400"
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
                } @else if (app.status !== 'approved') {
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
                    class="p-error text-xs mt-2 px-1 font-bold flex items-center gap-1"
                  >
                    <i class="pi pi-exclamation-circle"></i>
                    {{ installationError() }}
                  </p>
                }
              </div>

              <!-- Stats & Summary Info -->
              <div
                class="flex flex-wrap items-center gap-x-8 gap-y-4 pt-4 border-t"
              >
                <div class="flex items-center gap-2">
                  <app-rating-display
                    [averageRating]="app.averageRating"
                    [reviewCount]="app.reviewCount"
                  />
                </div>
                <div class="flex items-center gap-2 text-surface-600">
                  <i class="pi pi-download text-primary"></i>
                  <span class="font-bold text-surface-900">{{
                    app.installCount | number
                  }}</span>
                  <span class="text-sm font-medium">installations</span>
                </div>
                <div class="flex items-center gap-2 text-surface-600">
                  <i class="pi pi-calendar text-primary"></i>
                  <span class="text-sm font-medium"
                    >Updated {{ app.updatedDate | date: 'MMM d, y' }}</span
                  >
                </div>
              </div>

              <!-- Content/Editor Notifications -->
              <div class="mt-6 space-y-3">
                @if (app.status === 'draft') {
                  <div
                    class="flex items-center gap-3 p-4 rounded-xl border-left-3 surface-border text-surface-800"
                  >
                    <i class="pi pi-info-circle text-lg"></i>
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
                        (onClick)="submitDraftForReview()"
                      />
                    </div>
                  </div>
                }

                @if (isAdmin() && isInPendingReview()) {
                  <div
                    class="flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-xl border border-primary/20"
                  >
                    <div class="flex-grow flex items-center gap-3">
                      <i class="pi pi-shield text-primary text-xl"></i>
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
                    class="p-error text-xs mt-2 px-1 font-bold flex items-center gap-1"
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
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Main Description Area -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Overview -->
          <div class="rounded-2xl border border-subtle p-8 shadow-sm">
            <h3
              class="text-xl font-black text-surface-900 mb-6 uppercase tracking-wider flex items-center gap-2 text-sm"
            >
              <span class="w-1.5 h-6 bg-primary rounded-full"></span>
              Product Overview
            </h3>
            <p
              class="text-surface-700 leading-relaxed whitespace-pre-line text-base"
            >
              {{ app.description }}
            </p>
          </div>

          <!-- Reviews List -->
          <div class="rounded-2xl border border-subtle p-8 shadow-sm">
            <div class="flex items-center justify-between mb-8">
              <h3
                class="text-xl font-black text-surface-900 uppercase tracking-wider flex items-center gap-2 text-sm"
              >
                <span class="w-1.5 h-6 bg-primary rounded-full"></span>
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
                      class="group py-6 first:pt-0 last:pb-0 border-b last:border-0 transition-all -mx-4 px-4 rounded-xl"
                    >
                      <div class="flex items-start justify-between mb-4">
                        <div class="flex items-center gap-4">
                          <div
                            class="w-12 h-12 rounded-2xl border border-primary/20 text-primary flex items-center justify-center font-black text-xl shadow-inner"
                          >
                            {{ review.userName.charAt(0).toUpperCase() }}
                          </div>
                          <div>
                            <div class="font-black text-surface-900">
                              {{ review.userName }}
                            </div>
                            <div class="flex items-center gap-2 mt-0.5">
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

                      <div class="flex items-center gap-2 mb-3">
                        <p-rating
                          [ngModel]="review.rating"
                          [readonly]="true"
                          [stars]="5"
                        />
                        @if (review.rating >= 4) {
                          <span
                            class="text-xs font-black uppercase px-2 py-0.5 rounded border border-green-200 text-green-600"
                            >Excellent</span
                          >
                        }
                      </div>

                      <h4 class="font-black text-surface-900 mb-2">
                        {{ review.title }}
                      </h4>
                      <p class="text-surface-600 leading-relaxed text-sm mb-4">
                        {{ review.comment }}
                      </p>
                    </div>
                  }
                </div>
              } @else {
                <div class="text-center py-16 rounded-2xl border border-dashed">
                  <i
                    class="pi pi-comments !text-5xl text-surface-200 mb-4 block"
                  ></i>
                  <p class="font-bold text-surface-900">No reviews yet</p>
                  <p class="text-surface-500 text-sm mt-1">
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
          <div class="rounded-2xl border border-subtle p-8 shadow-sm">
            <h3
              class="text-xl font-black text-surface-900 uppercase tracking-wider flex items-center gap-2 text-sm mb-6"
            >
              <span class="w-1.5 h-6 bg-primary rounded-full"></span>
              Integration Points
            </h3>
            <div class="space-y-4">
              @for (point of app.integrationPoints; track $index) {
                <div class="flex items-start gap-3 group">
                  <div>
                    <p class="font-black text-surface-800 text-sm">
                      {{ point.screenId }}
                    </p>
                  </div>
                </div>
              }
            </div>
          </div>

          <!-- Tags -->
          <div class="rounded-2xl border border-subtle p-8 shadow-sm">
            <h3
              class="text-xl font-black text-surface-900 uppercase tracking-wider flex items-center gap-2 text-sm mb-6"
            >
              <span class="w-1.5 h-6 bg-primary rounded-full"></span>
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
    <div class="space-y-6 p-2">
      <p class="text-surface-500 text-sm font-medium">
        Your feedback helps the community discover better integrations and helps
        developers improve their work.
      </p>

      <div class="space-y-4">
        <label
          for="review-rating-input"
          class="block text-xs font-black uppercase tracking-widest text-surface-600 mb-3 ml-1"
          >Rating</label
        >
        <div class="flex items-center gap-4 p-4 rounded-xl border shadow-inner">
          <p-rating
            [ngModel]="newReviewRating()"
            (ngModelChange)="newReviewRating.set($event)"
            [stars]="5"
          />
          <span class="font-black text-primary text-lg"
            >{{ newReviewRating() }}/5</span
          >
        </div>

        <div>
          <label
            for="review-title-input"
            class="block text-xs font-black uppercase tracking-widest text-surface-600 mb-2 ml-1"
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
            class="block text-xs font-black uppercase tracking-widest text-surface-600 mb-2 ml-1"
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
          class="p-3 border-left-3 surface-border rounded-lg text-xs font-bold flex items-center gap-2"
        >
          <i class="pi pi-exclamation-circle text-lg"></i>
          {{ reviewError() }}
        </div>
      }
    </div>

    <ng-template pTemplate="footer">
      <div class="flex items-center justify-end gap-3 p-4 pt-0">
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppDetailComponent, { className: "AppDetailComponent", filePath: "src/app/features/app-store/pages/app-detail/app-detail.component.ts", lineNumber: 62 });
})();
export {
  AppDetailComponent
};
//# sourceMappingURL=chunk-TZMSRGAN.js.map
