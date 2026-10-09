import {
  BulkSelectionService
} from "./chunk-GSIZVJGA.js";
import {
  DynamicFormComponent
} from "./chunk-6T4KKLJ2.js";
import "./chunk-DPDEPVGA.js";
import {
  UtilityService
} from "./chunk-KQV6ELFC.js";
import "./chunk-C3S5JBH6.js";
import "./chunk-NZYIVIIH.js";
import "./chunk-X7SLJGLA.js";
import "./chunk-2MAVYZTX.js";
import "./chunk-KH2DX732.js";
import "./chunk-OZ7Y7KLW.js";
import {
  DynamicDialogConfig,
  DynamicDialogRef
} from "./chunk-6XUBSI5W.js";
import "./chunk-BPZLZB2M.js";
import "./chunk-ANNNOBKU.js";
import "./chunk-IPJMLONF.js";
import "./chunk-YUHFA5TH.js";
import "./chunk-IK2S4CRO.js";
import "./chunk-UCPR2BFA.js";
import "./chunk-GN57VRNR.js";
import "./chunk-CEEFD5AP.js";
import {
  ReactiveFormsModule,
  Validators
} from "./chunk-G3BGTR7Z.js";
import {
  TranslatePipe,
  TranslateService
} from "./chunk-2HXDJU6P.js";
import {
  AccountsService,
  AssetMoveSummary,
  BroadcastEventMessageService,
  EntitiesService,
  HttpContext,
  SEARCH_DEBOUNCE_TIME,
  SILENT_ERROR,
  createAutocompleteField,
  createDropdownField,
  hasProperty,
  isDefined,
  isNullOrUndefined,
  takeUntilDestroyed
} from "./chunk-5UW7Z56K.js";
import "./chunk-UUYJUDRG.js";
import {
  Button,
  ButtonModule,
  CommonModule
} from "./chunk-ZFGBXUUT.js";
import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  EMPTY,
  Subject,
  catchError,
  concatMap,
  debounceTime,
  defer,
  effect,
  finalize,
  from,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-JGTMR4UQ.js";
import "./chunk-M4PBGCJ5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/features/administration/components/assets/asset-move-form/asset-move-form.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AssetMoveFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275element(4, "app-dynamic-form", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "ADMIN.ASSETS.MOVE.MOVE_ASSET_DESCRIPTION"));
    \u0275\u0275advance(3);
    \u0275\u0275property("fields", ctx_r0.formFields)("actions", ctx_r0.actions);
  }
}
function AssetMoveFormComponent_Conditional_1_For_6_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const result_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(result_r2.message);
  }
}
function AssetMoveFormComponent_Conditional_1_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 7);
    \u0275\u0275element(1, "i", 8);
    \u0275\u0275elementStart(2, "div", 9)(3, "span", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 11);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, AssetMoveFormComponent_Conditional_1_For_6_Conditional_8_Template, 2, 1, "span", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const result_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.statusIcon(result_r2.status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(result_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "ADMIN.ASSETS.MOVE.RESULT." + result_r2.status.toUpperCase()));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(result_r2.message ? 8 : -1);
  }
}
function AssetMoveFormComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "span", 5);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 6);
    \u0275\u0275repeaterCreate(5, AssetMoveFormComponent_Conditional_1_For_6_Template, 9, 7, "li", 7, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "ADMIN.ASSETS.MOVE.RESULT.TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.results());
  }
}
function AssetMoveFormComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "p-button", 13);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("onClick", function AssetMoveFormComponent_Conditional_2_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onClose());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(2, 1, "SHARED.COMMON.BUTTONS.CLOSE"));
  }
}
function requireSelectedClient(control) {
  const value = control.value;
  return isDefined(value?.id) ? null : { required: true };
}
var AssetMoveFormComponent = class _AssetMoveFormComponent {
  entitiesService = inject(EntitiesService);
  broadcastService = inject(BroadcastEventMessageService);
  utilityService = inject(UtilityService);
  accountsService = inject(AccountsService);
  destroyRef = inject(DestroyRef);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  bulkSelectionService = inject(BulkSelectionService);
  translate = inject(TranslateService);
  ownerId = null;
  /** The client the assets are moved out of; it is not offered as a destination. */
  sourceClientId = null;
  /** Assets still to move. Each one is removed as soon as it has moved, so it is never sent twice. */
  assetIds = [];
  /** Display names by asset id, for the result list. */
  names = /* @__PURE__ */ new Map();
  /** One line per asset of the last batch: moved, restored into a deleted copy, blocked or failed, with the reason. */
  results = signal([], ...ngDevMode ? [{ debugName: "results" }] : (
    /* istanbul ignore next */
    []
  ));
  /** The batch is over: the form gives way to the result list and a Close button. */
  finished = signal(false, ...ngDevMode ? [{ debugName: "finished" }] : (
    /* istanbul ignore next */
    []
  ));
  /** True while a batch is being sent, so a second OK click cannot start a parallel batch. */
  moving = signal(false, ...ngDevMode ? [{ debugName: "moving" }] : (
    /* istanbul ignore next */
    []
  ));
  cancelRequested = false;
  formFields = [];
  clientsSearchResults = signal(void 0, ...ngDevMode ? [{ debugName: "clientsSearchResults" }] : (
    /* istanbul ignore next */
    []
  ));
  searchSubject = new Subject();
  cdr = inject(ChangeDetectorRef);
  actions = this.buildDefaultActions();
  constructor() {
    effect(() => {
      const searchResults = this.clientsSearchResults();
      const field = this.formFields.find((f) => f.key === "destinationClientId");
      if (field?.props) {
        field.props = __spreadProps(__spreadValues({}, field.props), {
          suggestions: searchResults
        });
      }
      this.cdr.detectChanges();
    });
  }
  ngOnInit() {
    if (isDefined(this.dialogConfig.data)) {
      this.ownerId = this.dialogConfig.data.ownerId ?? null;
      this.sourceClientId = this.dialogConfig.data.sourceClientId ?? null;
      this.assetIds = this.dialogConfig.data.assetIds ?? [];
      const assets = this.dialogConfig.data.assets ?? [];
      this.names = new Map(assets.map((asset) => [asset.id, asset.name]));
    }
    this.formFields = [
      createAutocompleteField("destinationClientId", this.translate.instant("ADMIN.ASSETS.MOVE.FIELDS.DESTINATION_CLIENT"), [], this.clientsSearchResults(), this.searchClient.bind(this), {
        layout: "horizontal",
        labelWidth: "1/3",
        name: "destinationClientId",
        props: {
          appendTo: "body",
          showClear: true,
          multiple: false,
          field: "name",
          completeOnFocus: false,
          typeahead: true,
          showEmptyMessage: true,
          emptyMessage: this.translate.instant("SHARED.CLIENT_SELECTION_FORM", {
            count: 0
          })
        },
        validations: [
          {
            name: "required",
            validator: requireSelectedClient,
            message: this.translate.instant("SHARED.COMMON.FORMS.SHARED.REQUIRED", {
              field: this.translate.instant("ADMIN.ASSETS.MOVE.FIELDS.DESTINATION_CLIENT")
            })
          }
        ]
      }),
      createDropdownField("includeDevice", this.translate.instant("ADMIN.ASSETS.MOVE.FIELDS.INCLUDE_DEVICE"), [
        {
          label: this.translate.instant("SHARED.COMMON.FORMS.CHECKBOX.YES"),
          value: true
        },
        {
          label: this.translate.instant("SHARED.COMMON.FORMS.CHECKBOX.NO"),
          value: false
        }
      ], true, {
        layout: "horizontal",
        labelWidth: "1/3",
        name: "includeDevice",
        props: {
          appendTo: "body"
        },
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: this.translate.instant("SHARED.COMMON.FORMS.SHARED.REQUIRED", {
              field: this.translate.instant("ADMIN.ASSETS.MOVE.FIELDS.INCLUDE_DEVICE")
            })
          }
        ]
      }),
      createDropdownField("includeSimCard", this.translate.instant("ADMIN.ASSETS.MOVE.FIELDS.INCLUDE_SIMCARD"), [
        {
          label: this.translate.instant("SHARED.COMMON.FORMS.CHECKBOX.YES"),
          value: true
        },
        {
          label: this.translate.instant("SHARED.COMMON.FORMS.CHECKBOX.NO"),
          value: false
        }
      ], true, {
        layout: "horizontal",
        labelWidth: "1/3",
        name: "includeSimCard",
        props: {
          appendTo: "body"
        }
      })
    ];
    this.setUpClientsSearch();
  }
  buildDefaultActions() {
    return [
      {
        label: this.translate.instant("SHARED.COMMON.BUTTONS.CANCEL"),
        action: () => this.onCancel(),
        severity: "secondary"
      },
      {
        label: this.translate.instant("SHARED.COMMON.BUTTONS.OK"),
        action: (formData) => {
          const value = __spreadProps(__spreadValues({}, formData.value), {
            destinationClientId: formData.value["destinationClientId"]?.id
          });
          this.onWizardComplete(value);
        },
        severity: "primary",
        disabled: (form) => {
          if (isNullOrUndefined(form) || this.moving())
            return true;
          return form.pristine || form.invalid;
        },
        loading: () => this.moving()
      }
    ];
  }
  setUpClientsSearch() {
    this.searchSubject.pipe(debounceTime(SEARCH_DEBOUNCE_TIME), takeUntilDestroyed(this.destroyRef), switchMap((searchTerm) => {
      const trimmedSearchTerm = searchTerm.trim();
      if (trimmedSearchTerm.length === 0) {
        return of({ items: [] });
      }
      const filters = {
        state: { value: "active", operator: "=" },
        name: { value: `*${trimmedSearchTerm}*`, operator: "=" }
      };
      const rqlFilter = this.utilityService.constructRqlFilter(filters);
      return this.accountsService.listClients(this.ownerId ?? "", 0, 10, "name", rqlFilter).pipe(catchError(() => {
        return of({ items: [] });
      }));
    })).subscribe({
      next: (data) => {
        if (isDefined(data) && hasProperty(data, "items")) {
          const clients = isNullOrUndefined(data.items) ? [] : data.items;
          this.clientsSearchResults.set(clients.filter((client) => client.id !== this.sourceClientId));
        }
      },
      error: () => {
        this.clientsSearchResults.set([]);
      }
    });
  }
  searchClient(searchTerm) {
    this.clientsSearchResults.set(void 0);
    this.searchSubject.next(searchTerm);
  }
  onWizardComplete(context) {
    if (this.moving() || this.assetIds.length === 0 || isNullOrUndefined(context.destinationClientId) || // The source client is filtered out of the suggestions; this only guards a stale selection.
    String(context.destinationClientId) === String(this.sourceClientId)) {
      return;
    }
    this.moving.set(true);
    this.cancelRequested = false;
    const batch = [...this.assetIds];
    const movedIds = [];
    this.results.set(batch.map((id) => ({ id, name: this.nameOf(id), status: "waiting" })));
    from(batch).pipe(
      // Checked as each asset's turn comes, so Cancel stops after the move already in flight. A failed move does
      // not stop the batch: its reason goes in the result list.
      concatMap((id) => this.cancelRequested ? EMPTY : this.moveOne(id, context)),
      takeUntilDestroyed(this.destroyRef),
      // However the batch ends (done, failed, or the dialog closed mid-way), the assets that moved leave the
      // bulk selection and the dialog stops counting as busy.
      finalize(() => {
        this.moving.set(false);
        this.dropFromBulkSelection(movedIds);
      })
    ).subscribe({
      next: (result) => {
        this.setResult(result);
        if (result.status === "moved" || result.status === "restored") {
          movedIds.push(result.id);
          this.assetIds = this.assetIds.filter((assetId) => assetId !== result.id);
        }
      },
      complete: () => this.finishBatch(),
      // moveOne turns every failed request into a result, so this only catches an unexpected error.
      error: () => this.finishBatch(this.translate.instant("ADMIN.ASSETS.MOVE.RESULT.UNKNOWN_ERROR"))
    });
  }
  /**
   * Settles the result list: assets never sent are marked skipped, and after an unexpected error the one in flight
   * failed. One asset that simply moved needs no report, so the dialog closes; otherwise the list stays up.
   */
  finishBatch(error) {
    this.results.update((results2) => results2.map((result) => {
      if (result.status === "waiting") {
        return __spreadProps(__spreadValues({}, result), { status: "skipped" });
      }
      if (result.status === "moving" && isDefined(error)) {
        return __spreadProps(__spreadValues({}, result), { status: "failed", message: error });
      }
      return result;
    }));
    const results = this.results();
    if (isNullOrUndefined(error) && results.length === 1 && results[0].status === "moved") {
      this.dialogRef.close();
      return;
    }
    this.finished.set(true);
  }
  /** Sends one move and reports how it went; errors become a result instead of failing the batch. */
  moveOne(id, context) {
    this.setResult({ id, name: this.nameOf(id), status: "moving" });
    return defer(() => this.entitiesService.moveAsset(id, context, "body", false, {
      // The result list shows the reason, so the interceptor's toast is not needed.
      context: new HttpContext().set(SILENT_ERROR, true)
    })).pipe(map((response) => {
      this.broadcastService.broadcast("entity-deleted", {
        entityType: "asset",
        operation: "delete",
        entityId: id
      });
      this.broadcastService.broadcast("entity-updated", {
        entityType: "asset",
        operation: "update",
        entityId: response.id
      });
      return {
        id,
        name: this.nameOf(id),
        status: response.move?.outcome === AssetMoveSummary.OutcomeEnum.Restored ? "restored" : "moved"
      };
    }), catchError((error) => of(this.failureOf(id, error))));
  }
  /**
   * 400, 404 and 409 mean the API refused the move and changed nothing (a duplicate, a deleted asset, another move
   * running). Anything else failed while moving; the API then says whether it undid the move.
   */
  failureOf(id, error) {
    const apiError = error;
    const status = apiError?.originalError?.status;
    const body = apiError?.originalError?.error;
    const serverMessage = typeof body?.message === "string" && body.message !== "" ? body.message : void 0;
    const message = (status === 400 ? apiError?.errorMessage : serverMessage) ?? apiError?.errorMessage ?? this.translate.instant("ADMIN.ASSETS.MOVE.RESULT.UNKNOWN_ERROR");
    return {
      id,
      name: this.nameOf(id),
      status: status === 400 || status === 404 || status === 409 ? "blocked" : "failed",
      message
    };
  }
  setResult(result) {
    this.results.update((results) => results.map((current) => current.id === result.id ? result : current));
  }
  nameOf(id) {
    const name = this.names.get(id);
    return isNullOrUndefined(name) || name === "" ? id : name;
  }
  statusIcon(status) {
    switch (status) {
      case "moving":
        return "pi pi-spin pi-spinner text-surface-500";
      case "moved":
        return "pi pi-check-circle text-green-500";
      case "restored":
        return "pi pi-replay text-green-500";
      case "blocked":
        return "pi pi-ban text-orange-500";
      case "failed":
        return "pi pi-times-circle text-red-500";
      case "skipped":
        return "pi pi-minus-circle text-surface-400";
      default:
        return "pi pi-clock text-surface-400";
    }
  }
  onClose() {
    this.dialogRef.close();
  }
  onCancel() {
    if (this.moving()) {
      this.cancelRequested = true;
      return;
    }
    this.dialogRef.close();
  }
  dropFromBulkSelection(movedIds) {
    if (movedIds.length === 0)
      return;
    const moved = new Set(movedIds);
    this.bulkSelectionService.setAll(this.bulkSelectionService.checkedItems().filter((item) => !moved.has(String(item.id))));
  }
  static \u0275fac = function AssetMoveFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssetMoveFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetMoveFormComponent, selectors: [["app-asset-move-form"]], decls: 3, vars: 3, consts: [[1, "move-results", "mt-4"], [1, "flex", "justify-end", "mt-4"], [1, "muted", "text-justify"], [1, "p-fluid", "mt-4"], [3, "fields", "actions"], [1, "font-semibold"], [1, "move-results__list"], [1, "move-results__item"], ["aria-hidden", "true"], [1, "move-results__text"], [1, "move-results__name"], [1, "text-color-secondary"], [1, "move-results__message"], [3, "onClick", "label"]], template: function AssetMoveFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AssetMoveFormComponent_Conditional_0_Template, 5, 5);
      \u0275\u0275conditionalCreate(1, AssetMoveFormComponent_Conditional_1_Template, 7, 3, "div", 0);
      \u0275\u0275conditionalCreate(2, AssetMoveFormComponent_Conditional_2_Template, 3, 3, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.finished() ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.results().length > 0 ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.finished() ? 2 : -1);
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    Button,
    DynamicFormComponent,
    TranslatePipe
  ], styles: ["\n.p-dialog-content[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.move-results__list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0.5rem 0 0;\n  padding: 0;\n  max-height: 20rem;\n  overflow-y: auto;\n}\n.move-results__item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid var(--p-surface-200);\n}\n.move-results__item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.move-results__item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 0.2rem;\n}\n.move-results__text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.move-results__name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  overflow-wrap: anywhere;\n}\n.move-results__message[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  overflow-wrap: anywhere;\n}\n/*# sourceMappingURL=asset-move-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetMoveFormComponent, [{
    type: Component,
    args: [{ selector: "app-asset-move-form", imports: [
      CommonModule,
      ReactiveFormsModule,
      ButtonModule,
      DynamicFormComponent,
      TranslatePipe
    ], template: `@if (!finished()) {
  <span class="muted text-justify">{{
    'ADMIN.ASSETS.MOVE.MOVE_ASSET_DESCRIPTION' | translate
  }}</span>

  <div class="p-fluid mt-4">
    <app-dynamic-form [fields]="formFields" [actions]="actions">
    </app-dynamic-form>
  </div>
}

@if (results().length > 0) {
  <div class="move-results mt-4">
    <span class="font-semibold">{{
      'ADMIN.ASSETS.MOVE.RESULT.TITLE' | translate
    }}</span>
    <ul class="move-results__list">
      @for (result of results(); track result.id) {
        <li class="move-results__item">
          <i [class]="statusIcon(result.status)" aria-hidden="true"></i>
          <div class="move-results__text">
            <span class="move-results__name">{{ result.name }}</span>
            <span class="text-color-secondary">{{
              'ADMIN.ASSETS.MOVE.RESULT.' + result.status.toUpperCase()
                | translate
            }}</span>
            @if (result.message) {
              <span class="move-results__message">{{ result.message }}</span>
            }
          </div>
        </li>
      }
    </ul>
  </div>
}

@if (finished()) {
  <div class="flex justify-end mt-4">
    <p-button
      [label]="'SHARED.COMMON.BUTTONS.CLOSE' | translate"
      (onClick)="onClose()"
    ></p-button>
  </div>
}
`, styles: ["/* src/app/features/administration/components/assets/asset-move-form/asset-move-form.component.scss */\n.p-dialog-content {\n  margin-top: 1rem;\n}\n.move-results__list {\n  list-style: none;\n  margin: 0.5rem 0 0;\n  padding: 0;\n  max-height: 20rem;\n  overflow-y: auto;\n}\n.move-results__item {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid var(--p-surface-200);\n}\n.move-results__item:last-child {\n  border-bottom: none;\n}\n.move-results__item i {\n  margin-top: 0.2rem;\n}\n.move-results__text {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.move-results__name {\n  font-weight: 600;\n  overflow-wrap: anywhere;\n}\n.move-results__message {\n  font-size: 0.875rem;\n  overflow-wrap: anywhere;\n}\n/*# sourceMappingURL=asset-move-form.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetMoveFormComponent, { className: "AssetMoveFormComponent", filePath: "src/app/features/administration/components/assets/asset-move-form/asset-move-form.component.ts", lineNumber: 103 });
})();
export {
  AssetMoveFormComponent
};
//# sourceMappingURL=chunk-7DPU6SCD.js.map
