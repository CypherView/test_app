import {
  DynamicDialogConfig,
  DynamicDialogRef,
  DynamicFormComponent
} from "./chunk-JHNPE5AD.js";
import "./chunk-BUQLELQY.js";
import {
  UtilityService
} from "./chunk-IDQPRALM.js";
import "./chunk-T5WYQJMH.js";
import "./chunk-W5XLQNKH.js";
import "./chunk-B2VOHKSQ.js";
import "./chunk-RAMUTPV2.js";
import "./chunk-3ELTUYPI.js";
import "./chunk-IM6TEFQQ.js";
import "./chunk-PAFIW2EK.js";
import {
  ReactiveFormsModule,
  Validators
} from "./chunk-4CAIP3KE.js";
import "./chunk-BJMVTXFZ.js";
import "./chunk-2UAXSVOA.js";
import {
  ButtonModule
} from "./chunk-PBS4GE25.js";
import "./chunk-YL4UBWIM.js";
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
} from "./chunk-UNWLID6Q.js";
import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  Subject,
  catchError,
  debounceTime,
  effect,
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
  ɵɵproperty,
  ɵɵtext
} from "./chunk-4KHPVNTA.js";
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
  ownerId = null;
  assetId = null;
  formFields = [];
  clientsSearchResults = signal(void 0, ...ngDevMode ? [{ debugName: "clientsSearchResults" }] : []);
  searchSubject = new Subject();
  cdr = inject(ChangeDetectorRef);
  actions = [
    {
      label: "Cancel",
      action: () => this.onCancel(),
      severity: "secondary"
    },
    {
      label: "Ok",
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
      this.assetId = this.dialogConfig.data.assetId ?? null;
    }
    this.formFields = [
      createAutocompleteField("destinationClientId", "Destination Client", [], this.clientsSearchResults(), this.searchClient.bind(this), {
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
          emptyMessage: "No clients found"
        }
      }),
      createDropdownField("includeDevice", "Include Device", [
        {
          label: "Yes",
          value: true
        },
        {
          label: "No",
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
            message: "Include Device is required"
          }
        ]
      }),
      createDropdownField("includeSimCard", "Include Sim Card", [
        {
          label: "Yes",
          value: true
        },
        {
          label: "No",
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
    if (isNullOrUndefined(this.assetId)) {
      return;
    }
    this.entitiesService.moveAsset(this.assetId, context).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => {
        this.broadcastService.broadcast("entity-updated", {
          entityType: "asset",
          operation: "update",
          entityId: response.id
        });
        this.dialogRef.close(response);
      },
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetMoveFormComponent, selectors: [["app-asset-move-form"]], decls: 4, vars: 2, consts: [[1, "muted", "text-justify"], [1, "p-fluid", "mt-4"], [3, "fields", "actions"]], template: function AssetMoveFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "span", 0);
      \u0275\u0275text(1, "Select the destination client into which you'd like to move this asset. The asset will be copied to the new client and then deleted in this client.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 1);
      \u0275\u0275element(3, "app-dynamic-form", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("fields", ctx.formFields)("actions", ctx.actions);
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    DynamicFormComponent
  ], styles: ["\n\n.p-dialog-content[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=asset-move-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetMoveFormComponent, [{
    type: Component,
    args: [{ selector: "app-asset-move-form", imports: [
      CommonModule,
      ReactiveFormsModule,
      ButtonModule,
      DynamicFormComponent
    ], template: `<span class="muted text-justify"
  >Select the destination client into which you'd like to move this asset. The
  asset will be copied to the new client and then deleted in this client.</span
>
<div class="p-fluid mt-4">
  <app-dynamic-form [fields]="formFields" [actions]="actions">
  </app-dynamic-form>
</div>
`, styles: ["/* src/app/features/administration/components/assets/asset-move-form/asset-move-form.component.scss */\n.p-dialog-content {\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=asset-move-form.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetMoveFormComponent, { className: "AssetMoveFormComponent", filePath: "src/app/features/administration/components/assets/asset-move-form/asset-move-form.component.ts", lineNumber: 51 });
})();
export {
  AssetMoveFormComponent
};
//# sourceMappingURL=chunk-EU2D33SJ.js.map
