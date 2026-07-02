import {
  DynamicFormComponent
} from "./chunk-WZT5XRCN.js";
import "./chunk-TQTAL3D3.js";
import {
  UtilityService
} from "./chunk-LSGFQNNG.js";
import "./chunk-A45ENGP2.js";
import "./chunk-GOGTD2CJ.js";
import "./chunk-M7S2S5LG.js";
import "./chunk-IOKQPKSK.js";
import "./chunk-VN4TXOP4.js";
import "./chunk-POWMBANG.js";
import {
  DynamicDialogConfig,
  DynamicDialogRef
} from "./chunk-EGJXNLZU.js";
import "./chunk-HZONOUZI.js";
import "./chunk-UGO3PNLI.js";
import "./chunk-E46PJIXV.js";
import "./chunk-ML5T5ZEG.js";
import "./chunk-LVMLZ3VX.js";
import "./chunk-CUF5ZGX4.js";
import "./chunk-Y76T4QP2.js";
import {
  ReactiveFormsModule,
  Validators
} from "./chunk-ELMGQUTA.js";
import {
  ButtonModule
} from "./chunk-4VRJFGPA.js";
import "./chunk-NTFNF324.js";
import {
  TranslatePipe,
  TranslateService
} from "./chunk-AHALUXAA.js";
import {
  AccountsService,
  BroadcastEventMessageService,
  CommonModule,
  EntitiesService,
  SEARCH_DEBOUNCE_TIME,
  createAutocompleteField,
  createDropdownField,
  hasProperty,
  isDefined,
  isNullOrUndefined,
  takeUntilDestroyed
} from "./chunk-2Y2RLXE3.js";
import "./chunk-M4PBGCJ5.js";
import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  Subject,
  catchError,
  concatMap,
  debounceTime,
  effect,
  from,
  inject,
  of,
  setClassMetadata,
  signal,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-VOGNWKLY.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/features/administration/components/assets/asset-move-form/asset-move-form.component.ts
var AssetMoveFormComponent = class _AssetMoveFormComponent {
  entitiesService = inject(EntitiesService);
  broadcastService = inject(BroadcastEventMessageService);
  utilityService = inject(UtilityService);
  accountsService = inject(AccountsService);
  destroyRef = inject(DestroyRef);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  translate = inject(TranslateService);
  ownerId = null;
  assetIds = [];
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
      this.assetIds = this.dialogConfig.data.assetIds ?? [];
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
        }
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
          if (isNullOrUndefined(form))
            return true;
          return form.pristine || form.invalid;
        }
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
          this.clientsSearchResults.set(isNullOrUndefined(data.items) ? [] : data.items);
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
    if (this.assetIds.length === 0)
      return;
    from(this.assetIds).pipe(concatMap((id) => this.entitiesService.moveAsset(id, context)), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => {
        this.broadcastService.broadcast("entity-updated", {
          entityType: "asset",
          operation: "update",
          entityId: response.id
        });
      },
      complete: () => this.dialogRef.close(),
      error: () => {
      }
    });
  }
  // Update cancel to close dialog with no result
  onCancel() {
    this.dialogRef.close();
  }
  static \u0275fac = function AssetMoveFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssetMoveFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetMoveFormComponent, selectors: [["app-asset-move-form"]], decls: 5, vars: 5, consts: [[1, "muted", "text-justify"], [1, "p-fluid", "mt-4"], [3, "fields", "actions"]], template: function AssetMoveFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "span", 0);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 1);
      \u0275\u0275element(4, "app-dynamic-form", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "ADMIN.ASSETS.MOVE.MOVE_ASSET_DESCRIPTION"));
      \u0275\u0275advance(3);
      \u0275\u0275property("fields", ctx.formFields)("actions", ctx.actions);
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    DynamicFormComponent,
    TranslatePipe
  ], styles: ["\n.p-dialog-content[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=asset-move-form.component.css.map */"] });
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
    ], template: `<span class="muted text-justify">{{
  'ADMIN.ASSETS.MOVE.MOVE_ASSET_DESCRIPTION' | translate
}}</span>

<div class="p-fluid mt-4">
  <app-dynamic-form [fields]="formFields" [actions]="actions">
  </app-dynamic-form>
</div>
`, styles: ["/* src/app/features/administration/components/assets/asset-move-form/asset-move-form.component.scss */\n.p-dialog-content {\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=asset-move-form.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetMoveFormComponent, { className: "AssetMoveFormComponent", filePath: "src/app/features/administration/components/assets/asset-move-form/asset-move-form.component.ts", lineNumber: 61 });
})();
export {
  AssetMoveFormComponent
};
//# sourceMappingURL=chunk-KNZ573MT.js.map
