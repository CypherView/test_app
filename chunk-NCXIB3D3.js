import {
  require_exceljs_min
} from "./chunk-ZQZCMXYO.js";
import {
  ToastService
} from "./chunk-47TCRRSK.js";
import {
  Table,
  TableModule
} from "./chunk-5WWRPFVI.js";
import "./chunk-6RKFIQXA.js";
import {
  DynamicDialogConfig,
  DynamicDialogRef
} from "./chunk-N3IYAUEM.js";
import "./chunk-6RNH5RNU.js";
import "./chunk-HAP3H3Y2.js";
import "./chunk-JE2L2HEP.js";
import {
  FileUpload,
  FileUploadModule
} from "./chunk-KMNNT5Y5.js";
import {
  ProgressBar,
  ProgressBarModule
} from "./chunk-437DZVOB.js";
import {
  Message,
  MessageModule
} from "./chunk-ZD2L3BUO.js";
import "./chunk-HUGEA54Y.js";
import "./chunk-233GVLOY.js";
import "./chunk-7YJUDWRM.js";
import {
  TranslatePipe
} from "./chunk-RNIEZZVX.js";
import {
  AdminStateService,
  BroadcastEventMessageService,
  Configuration,
  EntitiesService,
  HttpClient,
  HttpContext,
  HttpHeaders,
  takeUntilDestroyed
} from "./chunk-6H7AOYCU.js";
import "./chunk-7BSAABDZ.js";
import {
  Button,
  ButtonModule,
  CommonModule,
  PrimeTemplate
} from "./chunk-T7ZENNNQ.js";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Injectable,
  finalize,
  forkJoin,
  inject,
  setClassMetadata,
  signal,
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
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JFHDN3YU.js";
import "./chunk-M4PBGCJ5.js";
import {
  __toESM
} from "./chunk-7WUTQBRG.js";

// src/app/features/administration/components/shared/bulk-import-dialog/bulk-import-dialog.component.ts
var ExcelJS = __toESM(require_exceljs_min());

// src/app/features/administration/services/bulk-import.service.ts
var BulkImportService = class _BulkImportService {
  httpClient = inject(HttpClient);
  configuration = inject(Configuration);
  bulkImportDevices(ownerId, file, observe = "body", reportProgress = false, options) {
    if (ownerId === null || ownerId === void 0) {
      throw new Error("Required parameter ownerId was null or undefined when calling bulkImportDevices.");
    }
    if (file === null || file === void 0) {
      throw new Error("Required parameter file was null or undefined when calling bulkImportDevices.");
    }
    const queryParameters = new URLSearchParams();
    queryParameters.append("ownerId", ownerId);
    let localVarHeaders = new HttpHeaders();
    const localVarCredential = this.configuration.lookupCredential("access_token");
    if (localVarCredential !== null && localVarCredential !== void 0 && localVarCredential !== "") {
      localVarHeaders = localVarHeaders.set("x-access-token", localVarCredential);
    }
    let localVarHttpHeaderAcceptSelected = options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === void 0) {
      const httpHeaderAccepts = ["application/json"];
      localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    let localVarHttpContext = options && options.context;
    if (localVarHttpContext === void 0) {
      localVarHttpContext = new HttpContext();
    }
    const formData = new FormData();
    formData.append("file", file, file.name);
    const localVarPath = `/entities/devices/bulk-import?${queryParameters.toString()}`;
    if (observe === "response") {
      return this.httpClient.request("post", `${this.configuration.basePath}${localVarPath}`, {
        context: localVarHttpContext,
        body: formData,
        responseType: "json",
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: "response",
        reportProgress
      });
    } else if (observe === "events") {
      return this.httpClient.request("post", `${this.configuration.basePath}${localVarPath}`, {
        context: localVarHttpContext,
        body: formData,
        responseType: "json",
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: "events",
        reportProgress
      });
    } else {
      return this.httpClient.request("post", `${this.configuration.basePath}${localVarPath}`, {
        context: localVarHttpContext,
        body: formData,
        responseType: "json",
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: "body",
        reportProgress
      });
    }
  }
  static \u0275fac = function BulkImportService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BulkImportService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BulkImportService, factory: _BulkImportService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BulkImportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/components/shared/bulk-import-dialog/bulk-import-dialog.component.ts
var _c0 = (a0, a1) => ({ name: a0, size: a1 });
function BulkImportDialogComponent_Conditional_20_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "p", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "ADMIN.SHARED.BULK_IMPORT.SELECTED_FILE", \u0275\u0275pureFunction2(4, _c0, ctx_r1.selectedFile().name, (ctx_r1.selectedFile().size / 1024).toFixed(2))), " ");
  }
}
function BulkImportDialogComponent_Conditional_20_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-message", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("text", ctx_r1.errorMessage());
  }
}
function BulkImportDialogComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "p-fileUpload", 13);
    \u0275\u0275listener("onSelect", function BulkImportDialogComponent_Conditional_20_Template_p_fileUpload_onSelect_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileSelect($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, BulkImportDialogComponent_Conditional_20_Conditional_2_Template, 4, 7, "div", 14);
    \u0275\u0275conditionalCreate(3, BulkImportDialogComponent_Conditional_20_Conditional_3_Template, 1, 1, "p-message", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("maxFileSize", ctx_r1.maxFileSize)("auto", false)("chooseLabel", ctx_r1.selectedFile() ? "Change File" : "Choose CSV File")("disabled", ctx_r1.isUploading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedFile() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.errorMessage() ? 3 : -1);
  }
}
function BulkImportDialogComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "p-progressBar", 17);
    \u0275\u0275elementStart(2, "p", 18);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "ADMIN.SHARED.BULK_IMPORT.UPLOADING"), " ");
  }
}
function BulkImportDialogComponent_Conditional_22_Conditional_23_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 31);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 32);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "ADMIN.SHARED.BULK_IMPORT.COLUMNS.ROW"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "ADMIN.SHARED.BULK_IMPORT.COLUMNS.FIELD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 7, "ADMIN.SHARED.BULK_IMPORT.COLUMNS.MESSAGE"), " ");
  }
}
function BulkImportDialogComponent_Conditional_22_Conditional_23_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const error_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(error_r3.rowNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(error_r3.field || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(error_r3.message);
  }
}
function BulkImportDialogComponent_Conditional_22_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "h4", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-table", 28);
    \u0275\u0275template(5, BulkImportDialogComponent_Conditional_22_Conditional_23_ng_template_5_Template, 10, 9, "ng-template", 29)(6, BulkImportDialogComponent_Conditional_22_Conditional_23_ng_template_6_Template, 7, 3, "ng-template", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "ADMIN.SHARED.BULK_IMPORT.ERRORS_TITLE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.importResult().errors)("scrollable", true);
  }
}
function BulkImportDialogComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h3", 3);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19)(5, "div", 20)(6, "p", 7);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 21);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 22)(12, "p", 7);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 23);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 24)(18, "p", 7);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 25);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(23, BulkImportDialogComponent_Conditional_22_Conditional_23_Template, 7, 5, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 8, "ADMIN.SHARED.BULK_IMPORT.RESULTS_TITLE"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 10, "ADMIN.SHARED.BULK_IMPORT.TOTAL_REQUESTED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.importResult().totalRequested, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 12, "ADMIN.SHARED.BULK_IMPORT.SUCCESSFUL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.importResult().successCount, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 14, "ADMIN.SHARED.BULK_IMPORT.FAILED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.importResult().failureCount, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasErrors ? 23 : -1);
  }
}
function BulkImportDialogComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 33);
    \u0275\u0275listener("onClick", function BulkImportDialogComponent_Conditional_24_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 34);
    \u0275\u0275listener("onClick", function BulkImportDialogComponent_Conditional_24_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUpload());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.isUploading());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.canUpload);
  }
}
function BulkImportDialogComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 35);
    \u0275\u0275listener("onClick", function BulkImportDialogComponent_Conditional_25_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275elementEnd();
  }
}
var BulkImportDialogComponent = class _BulkImportDialogComponent {
  bulkImportService = inject(BulkImportService);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  destroyRef = inject(DestroyRef);
  broadcastService = inject(BroadcastEventMessageService);
  toastService = inject(ToastService);
  entitiesService = inject(EntitiesService);
  adminStateService = inject(AdminStateService);
  ownerId = signal("", ...ngDevMode ? [{ debugName: "ownerId" }] : (
    /* istanbul ignore next */
    []
  ));
  clientName = signal("", ...ngDevMode ? [{ debugName: "clientName" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedFile = signal(null, ...ngDevMode ? [{ debugName: "selectedFile" }] : (
    /* istanbul ignore next */
    []
  ));
  isUploading = signal(false, ...ngDevMode ? [{ debugName: "isUploading" }] : (
    /* istanbul ignore next */
    []
  ));
  uploadProgress = signal(0, ...ngDevMode ? [{ debugName: "uploadProgress" }] : (
    /* istanbul ignore next */
    []
  ));
  importResult = signal(null, ...ngDevMode ? [{ debugName: "importResult" }] : (
    /* istanbul ignore next */
    []
  ));
  errorMessage = signal(null, ...ngDevMode ? [{ debugName: "errorMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoadingTemplate = signal(false, ...ngDevMode ? [{ debugName: "isLoadingTemplate" }] : (
    /* istanbul ignore next */
    []
  ));
  maxFileSize = 10 * 1024 * 1024;
  // 10MB
  // Template data
  deviceTypes = [];
  assetTypes = [];
  costCentres = [];
  assetGroups = [];
  primaryColor = "#1976d2";
  // Default blue color
  constructor() {
    const ownerId = this.dialogConfig.data?.["ownerId"];
    if (ownerId !== null && ownerId !== void 0) {
      this.ownerId.set(ownerId);
    }
    const clientName = this.dialogConfig.data?.["clientName"];
    if (clientName !== null && clientName !== void 0) {
      this.clientName.set(clientName);
    } else {
      const selectedClient = this.adminStateService.selectedClient();
      if (selectedClient?.name !== null && selectedClient?.name !== void 0) {
        this.clientName.set(selectedClient.name);
      }
    }
    this.getPrimaryColor();
  }
  getPrimaryColor() {
    try {
      const primaryColor = getComputedStyle(document.documentElement).getPropertyValue("--primary-color");
      if (primaryColor !== null && primaryColor !== void 0 && primaryColor.trim() !== "") {
        this.primaryColor = primaryColor.trim();
      }
    } catch {
      console.warn("Could not get primary color, using default");
    }
  }
  ngOnInit() {
    this.loadTemplateData();
  }
  loadTemplateData() {
    const ownerId = this.ownerId();
    if (ownerId === null || ownerId === void 0 || ownerId === "")
      return;
    this.isLoadingTemplate.set(true);
    forkJoin({
      deviceTypes: this.entitiesService.listDeviceTypes(ownerId),
      assetTypes: this.entitiesService.listAssetTypes(ownerId),
      costCentres: this.entitiesService.listCostCentres(ownerId),
      assetGroups: this.entitiesService.listAssetGroups(ownerId)
    }).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isLoadingTemplate.set(false))).subscribe({
      next: (data) => {
        this.deviceTypes = data.deviceTypes.items.map((dt) => dt.name).filter((name) => name !== null && name !== void 0).sort();
        this.assetTypes = data.assetTypes.items.map((at) => at.name).filter((name) => name !== null && name !== void 0).sort();
        this.costCentres = data.costCentres.items.map((cc) => cc.name).filter((name) => name !== null && name !== void 0).sort();
        this.assetGroups = data.assetGroups.items.map((ag) => ag.name).filter((name) => name !== null && name !== void 0).sort();
      },
      error: () => {
        this.toastService.showWarning("Template Data", "Could not load all dropdown options. Template will be generated with basic structure.");
      }
    });
  }
  onFileSelect(event) {
    this.errorMessage.set(null);
    this.importResult.set(null);
    const file = event.files[0];
    if (file === null || file === void 0) {
      return;
    }
    const extension = file.name.split(".").pop()?.toLowerCase();
    if (extension !== "csv") {
      this.errorMessage.set("Only CSV files are supported");
      this.selectedFile.set(null);
      return;
    }
    if (file.size > this.maxFileSize) {
      this.errorMessage.set("File size cannot exceed 10MB");
      this.selectedFile.set(null);
      return;
    }
    this.selectedFile.set(file);
  }
  onUpload() {
    const file = this.selectedFile();
    const ownerId = this.ownerId();
    if (file === null || file === void 0 || ownerId === null || ownerId === void 0 || ownerId === "") {
      this.errorMessage.set("No file selected or owner ID not provided");
      return;
    }
    this.isUploading.set(true);
    this.uploadProgress.set(0);
    this.errorMessage.set(null);
    this.importResult.set(null);
    this.bulkImportService.bulkImportDevices(ownerId, file, "body", true).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => {
      this.isUploading.set(false);
      this.uploadProgress.set(100);
    })).subscribe({
      next: (response) => {
        this.importResult.set(response);
        if (response.successCount > 0) {
          this.toastService.showSuccess("Import Complete", `Successfully imported ${response.successCount} device(s)`);
          this.broadcastService.broadcast("entity-updated", {
            entityType: "devices",
            operation: "create"
          });
        }
        if (response.failureCount > 0) {
          this.toastService.showWarning("Import Completed with Errors", `${response.failureCount} row(s) failed to import. See details below.`);
        }
      },
      error: (error) => {
        const errorMsg = (error?.error?.Message !== null && error?.error?.Message !== void 0 && error?.error?.Message !== "" ? error.error.Message : error?.message !== null && error?.message !== void 0 && error?.message !== "" ? error.message : null) ?? "An error occurred during bulk import";
        this.errorMessage.set(errorMsg);
        this.toastService.showError("Import Failed", errorMsg);
        throw error;
      }
    });
  }
  onCancel() {
    this.dialogRef.close();
  }
  onClose() {
    const result = this.importResult();
    this.dialogRef.close(result);
  }
  async downloadTemplate() {
    const clientName = this.clientName() || "Client";
    const fileName = `${clientName} - Bulk Import Template.xlsx`;
    try {
      const workbook = new ExcelJS.Workbook();
      workbook.creator = "CypherView";
      workbook.created = /* @__PURE__ */ new Date();
      const worksheet = workbook.addWorksheet("Import Data", {
        properties: { tabColor: { argb: this.hexToArgb(this.primaryColor) } }
      });
      const headers = [
        "DeviceSerialNr",
        "DeviceIMEI",
        "DeviceUnitType",
        "Device_PreTested",
        "Device_Comment",
        "SimCard_SIMNumber",
        "SimCard_VoiceNumber",
        "SimCard_Network",
        "SimCard_Comment",
        "AssetName",
        "AssetTypeName",
        "AssetCostCentreName",
        "AssetGroupNames",
        "AssetComment"
      ];
      const headerRow = worksheet.addRow(headers);
      const primaryColorArgb = this.hexToArgb(this.primaryColor);
      headerRow.eachCell((cell, colNumber) => {
        cell.font = { bold: true, color: { argb: "FFFFFFFF" } };
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: primaryColorArgb }
        };
        cell.alignment = { horizontal: "center", vertical: "middle" };
        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" }
        };
        if (colNumber === 6) {
          cell.note = {
            texts: [
              {
                font: { bold: true, size: 10, color: { argb: "FF000000" } },
                text: "International Format Required:\n"
              },
              {
                font: { size: 9, color: { argb: "FF000000" } },
                text: "SIM number must start with '+' followed by the country code.\n\nExample: +27123456789\n\nNumbers without the '+' prefix will be rejected."
              }
            ],
            margins: {
              insetmode: "custom",
              inset: [0.13, 0.13, 0.25, 0.25]
            }
          };
        }
        if (colNumber === 13) {
          cell.note = {
            texts: [
              {
                font: { bold: true, size: 10, color: { argb: "FF000000" } },
                text: "Multiple Groups:\n"
              },
              {
                font: { size: 9, color: { argb: "FF000000" } },
                text: "You can enter multiple asset groups separated by commas.\n\nExample: Fleet,VIP,Premium\n\nUse the dropdown to see available groups, then manually type multiple values separated by commas."
              }
            ],
            margins: {
              insetmode: "custom",
              inset: [0.13, 0.13, 0.25, 0.25]
            }
          };
        }
      });
      worksheet.columns = [
        { width: 18 },
        // DeviceSerialNr
        { width: 20 },
        // DeviceIMEI
        { width: 20 },
        // DeviceUnitType
        { width: 18 },
        // Device_PreTested
        { width: 25 },
        // Device_Comment
        { width: 24 },
        // SimCard_SIMNumber
        { width: 24 },
        // SimCard_VoiceNumber
        { width: 20 },
        // SimCard_Network
        { width: 20 },
        // SimCard_Comment
        { width: 15 },
        // AssetName
        { width: 20 },
        // AssetTypeName
        { width: 25 },
        // AssetCostCentreName
        { width: 20 },
        // AssetGroupNames
        { width: 25 }
        // AssetComment
      ];
      worksheet.addRow([
        "1234567890",
        "123456789012345",
        this.deviceTypes[0] || "GPS Tracker",
        "1",
        "Test device comment",
        "+27123456789",
        "+27123456789",
        "Vodacom",
        "SIM comment",
        "Vehicle 1",
        this.assetTypes[0] || "Vehicle",
        this.costCentres[0] || "Default",
        this.assetGroups[0] || "Fleet",
        "Asset comment"
      ]);
      worksheet.addRow([
        "1234567891",
        "123456789012346",
        this.deviceTypes[0] || "GPS Tracker",
        "0",
        "Another device",
        "+27123456790",
        "+27123456790",
        "MTN",
        "Another SIM",
        "Vehicle 2",
        this.assetTypes[1] || "Trailer",
        this.costCentres[1] || "Sales",
        `${this.assetGroups[0] || "Fleet"},${this.assetGroups[1] || "VIP"}`,
        "Second asset"
      ]);
      if (this.deviceTypes.length > 0) {
        worksheet.getColumn(3).eachCell({ includeEmpty: true }, (cell, rowNumber) => {
          if (rowNumber > 1) {
            cell.dataValidation = {
              type: "list",
              allowBlank: true,
              formulae: [`"${this.deviceTypes.join(",")}"`],
              showErrorMessage: true,
              errorStyle: "warning",
              errorTitle: "Invalid Value",
              error: "Please select a valid Device Type from the dropdown"
            };
          }
        });
      }
      if (this.assetTypes.length > 0) {
        worksheet.getColumn(11).eachCell({ includeEmpty: true }, (cell, rowNumber) => {
          if (rowNumber > 1) {
            cell.dataValidation = {
              type: "list",
              allowBlank: true,
              formulae: [`"${this.assetTypes.join(",")}"`],
              showErrorMessage: true,
              errorStyle: "warning",
              errorTitle: "Invalid Value",
              error: "Please select a valid Asset Type from the dropdown"
            };
          }
        });
      }
      if (this.costCentres.length > 0) {
        worksheet.getColumn(12).eachCell({ includeEmpty: true }, (cell, rowNumber) => {
          if (rowNumber > 1) {
            cell.dataValidation = {
              type: "list",
              allowBlank: true,
              formulae: [`"${this.costCentres.join(",")}"`],
              showErrorMessage: true,
              errorStyle: "warning",
              errorTitle: "Invalid Value",
              error: "Please select a valid Cost Centre from the dropdown"
            };
          }
        });
      }
      if (this.assetGroups.length > 0) {
        worksheet.getColumn(13).eachCell({ includeEmpty: true }, (cell, rowNumber) => {
          if (rowNumber > 1) {
            cell.dataValidation = {
              type: "list",
              allowBlank: true,
              formulae: [`"${this.assetGroups.join(",")}"`],
              showErrorMessage: false
              // Don't show error, allow custom values
            };
          }
        });
      }
      const refWorksheet = workbook.addWorksheet("Reference Data", {
        properties: {
          tabColor: {
            argb: this.hexToArgb(this.getLighterColor(this.primaryColor))
          }
        }
      });
      const maxLength = Math.max(this.deviceTypes.length, this.assetTypes.length, this.costCentres.length, this.assetGroups.length);
      const refHeaderRow = refWorksheet.addRow([
        "Available Device Types",
        "Available Asset Types",
        "Available Cost Centres",
        "Available Asset Groups"
      ]);
      const lighterColorArgb = this.hexToArgb(this.getLighterColor(this.primaryColor));
      refHeaderRow.eachCell((cell) => {
        cell.font = { bold: true, color: { argb: "FFFFFFFF" } };
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: lighterColorArgb }
        };
        cell.alignment = { horizontal: "center", vertical: "middle" };
        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" }
        };
      });
      for (let i = 0; i < maxLength; i++) {
        refWorksheet.addRow([
          this.deviceTypes[i] || "",
          this.assetTypes[i] || "",
          this.costCentres[i] || "",
          this.assetGroups[i] || ""
        ]);
      }
      refWorksheet.columns = [
        { width: 25 },
        { width: 25 },
        { width: 25 },
        { width: 25 }
      ];
      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      try {
        link.click();
      } finally {
        window.URL.revokeObjectURL(url);
      }
      this.toastService.showSuccess("Download Complete", "Template downloaded. Please save as CSV before uploading.");
    } catch (error) {
      this.toastService.showError("Template Generation Failed", "An error occurred while generating the template. Please try again.");
      throw error;
    }
  }
  get hasErrors() {
    const result = this.importResult();
    return result ? result.errors.length > 0 : false;
  }
  get canUpload() {
    return !!this.selectedFile() && !this.isUploading();
  }
  /**
   * Convert hex color to ARGB format for ExcelJS (with alpha channel)
   * @param hex Hex color string (e.g., '#1976d2' or 'rgb(25, 118, 210)')
   * @returns ARGB string (e.g., 'FF1976D2')
   */
  hexToArgb(hex) {
    if (hex.startsWith("rgb")) {
      const match = hex.match(/\d+/g);
      if (match && match.length >= 3) {
        const rgb = match.slice(0, 3).map((x) => parseInt(x).toString(16).padStart(2, "0")).join("").toUpperCase();
        return `FF${rgb}`;
      }
    }
    hex = hex.replace("#", "");
    if (hex.length === 3) {
      hex = hex.split("").map((x) => x + x).join("");
    }
    return `FF${hex.toUpperCase()}`;
  }
  /**
   * Convert hex color to RGB format (without alpha)
   * @param hex Hex color string
   * @returns RGB string without # (e.g., '1976D2')
   */
  hexToRgb(hex) {
    return this.hexToArgb(hex).substring(2);
  }
  /**
   * Get a lighter version of the color for the second tab
   * @param color Hex color string
   * @returns Lighter hex color string
   */
  getLighterColor(color) {
    const rgb = this.hexToRgb(color);
    const r = parseInt(rgb.substring(0, 2), 16);
    const g = parseInt(rgb.substring(2, 4), 16);
    const b = parseInt(rgb.substring(4, 6), 16);
    const lighter = (val) => Math.min(255, Math.floor(val + (255 - val) * 0.4));
    const newR = lighter(r).toString(16).padStart(2, "0");
    const newG = lighter(g).toString(16).padStart(2, "0");
    const newB = lighter(b).toString(16).padStart(2, "0");
    return `#${newR}${newG}${newB}`;
  }
  static \u0275fac = function BulkImportDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BulkImportDialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BulkImportDialogComponent, selectors: [["app-bulk-import-dialog"]], decls: 26, vars: 21, consts: [[1, "bulk-import-dialog", "p-4"], [1, "flex", "flex-col", "gap-4"], [1, "instructions"], [1, "text-lg", "font-semibold", "mb-2"], [1, "mb-2"], [1, "flex", "gap-2", "mb-4"], ["label", "Download Template", "icon", "pi pi-download", 1, "p-button-sm", "p-button-outlined", 3, "onClick", "disabled", "loading"], [1, "text-sm", "text-gray-600"], [1, "file-upload-section", "px-4"], [1, "upload-progress"], [1, "import-results"], [1, "flex", "justify-end", "gap-2", "mt-4"], ["label", "Close"], ["mode", "basic", "name", "file", "accept", ".csv", 3, "onSelect", "maxFileSize", "auto", "chooseLabel", "disabled"], [1, "mt-2"], ["severity", "error", "styleClass", "mt-2 w-full", 3, "text"], [1, "text-sm"], ["mode", "indeterminate", "styleClass", "h-6"], [1, "text-sm", "text-center", "mt-2"], [1, "grid", "grid-cols-3", "gap-4", "mb-4"], [1, "stat-card", "p-3", "bg-blue-50", "rounded"], [1, "text-2xl", "font-bold"], [1, "stat-card", "p-3", "bg-green-50", "rounded"], [1, "text-2xl", "font-bold", "text-green-600"], [1, "stat-card", "p-3", "bg-red-50", "rounded"], [1, "text-2xl", "font-bold", "text-red-600"], [1, "error-details", "mt-4"], [1, "text-md", "font-semibold", "mb-2"], ["scrollHeight", "300px", "styleClass", "p-datatable-sm", 3, "value", "scrollable"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "w-20"], [1, "w-38"], ["label", "Cancel", 1, "p-button-outlined", 3, "onClick", "disabled"], ["label", "Upload", "icon", "pi pi-upload", 3, "onClick", "disabled"], ["label", "Close", 3, "onClick"]], template: function BulkImportDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 5)(10, "p-button", 6);
      \u0275\u0275listener("onClick", function BulkImportDialogComponent_Template_p_button_onClick_10_listener() {
        return ctx.downloadTemplate();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "p", 7)(12, "strong");
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementStart(17, "strong");
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(20, BulkImportDialogComponent_Conditional_20_Template, 4, 6, "div", 8);
      \u0275\u0275conditionalCreate(21, BulkImportDialogComponent_Conditional_21_Template, 5, 3, "div", 9);
      \u0275\u0275conditionalCreate(22, BulkImportDialogComponent_Conditional_22_Template, 24, 16, "div", 10);
      \u0275\u0275elementStart(23, "div", 11);
      \u0275\u0275conditionalCreate(24, BulkImportDialogComponent_Conditional_24_Template, 2, 2)(25, BulkImportDialogComponent_Conditional_25_Template, 1, 0, "p-button", 12);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 11, "ADMIN.SHARED.BULK_IMPORT.TITLE"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 13, "ADMIN.SHARED.BULK_IMPORT.DESCRIPTION"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.isLoadingTemplate())("loading", ctx.isLoadingTemplate());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 15, "ADMIN.SHARED.BULK_IMPORT.NOTE_LABEL"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 17, "ADMIN.SHARED.BULK_IMPORT.NOTE_BODY"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 19, "ADMIN.SHARED.BULK_IMPORT.NOTE_FORMAT_WARNING"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.importResult() ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isUploading() ? 21 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.importResult() && !ctx.isUploading() ? 22 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.importResult() ? 24 : 25);
    }
  }, dependencies: [
    CommonModule,
    ButtonModule,
    Button,
    PrimeTemplate,
    FileUploadModule,
    FileUpload,
    ProgressBarModule,
    ProgressBar,
    MessageModule,
    Message,
    TableModule,
    Table,
    TranslatePipe
  ], styles: ["\n.bulk-import-dialog[_ngcontent-%COMP%] {\n  min-width: 600px;\n  max-width: 800px;\n}\n.bulk-import-dialog[_ngcontent-%COMP%]   .instructions[_ngcontent-%COMP%] {\n  background-color: var(--surface-ground);\n  color: var(--text-color);\n  padding: 1rem;\n  border-radius: 4px;\n  border-left: 4px solid var(--primary-color);\n}\n.bulk-import-dialog[_ngcontent-%COMP%]   .instructions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-color);\n}\n.bulk-import-dialog[_ngcontent-%COMP%]   .instructions[_ngcontent-%COMP%]   .text-sm[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.bulk-import-dialog[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  text-align: center;\n  border: 1px solid var(--surface-border);\n  background-color: var(--surface-card);\n}\n.bulk-import-dialog[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-color);\n}\n.bulk-import-dialog[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .text-sm[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.bulk-import-dialog[_ngcontent-%COMP%]   .error-details[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--surface-border);\n  padding-top: 1rem;\n}\n/*# sourceMappingURL=bulk-import-dialog.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BulkImportDialogComponent, [{
    type: Component,
    args: [{ selector: "app-bulk-import-dialog", imports: [
      CommonModule,
      ButtonModule,
      FileUploadModule,
      ProgressBarModule,
      MessageModule,
      TableModule,
      TranslatePipe
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="bulk-import-dialog p-4">
  <div class="flex flex-col gap-4">
    <!-- Instructions Section -->
    <div class="instructions">
      <h3 class="text-lg font-semibold mb-2">
        {{ 'ADMIN.SHARED.BULK_IMPORT.TITLE' | translate }}
      </h3>
      <p class="mb-2">
        {{ 'ADMIN.SHARED.BULK_IMPORT.DESCRIPTION' | translate }}
      </p>
      <div class="flex gap-2 mb-4">
        <p-button
          label="Download Template"
          icon="pi pi-download"
          class="p-button-sm p-button-outlined"
          (onClick)="downloadTemplate()"
          [disabled]="isLoadingTemplate()"
          [loading]="isLoadingTemplate()"
        >
        </p-button>
      </div>
      <p class="text-sm text-gray-600">
        <strong>{{ 'ADMIN.SHARED.BULK_IMPORT.NOTE_LABEL' | translate }}</strong>
        {{ 'ADMIN.SHARED.BULK_IMPORT.NOTE_BODY' | translate }}
        <strong>{{
          'ADMIN.SHARED.BULK_IMPORT.NOTE_FORMAT_WARNING' | translate
        }}</strong>
      </p>
    </div>

    <!-- File Upload Section -->
    @if (!importResult()) {
      <div class="file-upload-section px-4">
        <p-fileUpload
          mode="basic"
          name="file"
          accept=".csv"
          [maxFileSize]="maxFileSize"
          [auto]="false"
          [chooseLabel]="selectedFile() ? 'Change File' : 'Choose CSV File'"
          (onSelect)="onFileSelect($event)"
          [disabled]="isUploading()"
        ></p-fileUpload>

        @if (selectedFile()) {
          <div class="mt-2">
            <p class="text-sm">
              {{
                'ADMIN.SHARED.BULK_IMPORT.SELECTED_FILE'
                  | translate
                    : {
                        name: selectedFile()!.name,
                        size: (selectedFile()!.size / 1024).toFixed(2),
                      }
              }}
            </p>
          </div>
        }

        @if (errorMessage()) {
          <p-message
            severity="error"
            [text]="errorMessage()!"
            styleClass="mt-2 w-full"
          ></p-message>
        }
      </div>
    }

    <!-- Upload Progress -->
    @if (isUploading()) {
      <div class="upload-progress">
        <p-progressBar mode="indeterminate" styleClass="h-6"></p-progressBar>
        <p class="text-sm text-center mt-2">
          {{ 'ADMIN.SHARED.BULK_IMPORT.UPLOADING' | translate }}
        </p>
      </div>
    }

    <!-- Import Results -->
    @if (importResult() && !isUploading()) {
      <div class="import-results">
        <h3 class="text-lg font-semibold mb-2">
          {{ 'ADMIN.SHARED.BULK_IMPORT.RESULTS_TITLE' | translate }}
        </h3>

        <div class="grid grid-cols-3 gap-4 mb-4">
          <div class="stat-card p-3 bg-blue-50 rounded">
            <p class="text-sm text-gray-600">
              {{ 'ADMIN.SHARED.BULK_IMPORT.TOTAL_REQUESTED' | translate }}
            </p>
            <p class="text-2xl font-bold">
              {{ importResult()!.totalRequested }}
            </p>
          </div>
          <div class="stat-card p-3 bg-green-50 rounded">
            <p class="text-sm text-gray-600">
              {{ 'ADMIN.SHARED.BULK_IMPORT.SUCCESSFUL' | translate }}
            </p>
            <p class="text-2xl font-bold text-green-600">
              {{ importResult()!.successCount }}
            </p>
          </div>
          <div class="stat-card p-3 bg-red-50 rounded">
            <p class="text-sm text-gray-600">
              {{ 'ADMIN.SHARED.BULK_IMPORT.FAILED' | translate }}
            </p>
            <p class="text-2xl font-bold text-red-600">
              {{ importResult()!.failureCount }}
            </p>
          </div>
        </div>

        <!-- Error Details -->
        @if (hasErrors) {
          <div class="error-details mt-4">
            <h4 class="text-md font-semibold mb-2">
              {{ 'ADMIN.SHARED.BULK_IMPORT.ERRORS_TITLE' | translate }}
            </h4>
            <p-table
              [value]="importResult()!.errors"
              [scrollable]="true"
              scrollHeight="300px"
              styleClass="p-datatable-sm"
            >
              <ng-template pTemplate="header">
                <tr>
                  <th class="w-20">
                    {{ 'ADMIN.SHARED.BULK_IMPORT.COLUMNS.ROW' | translate }}
                  </th>
                  <th class="w-38">
                    {{ 'ADMIN.SHARED.BULK_IMPORT.COLUMNS.FIELD' | translate }}
                  </th>
                  <th>
                    {{ 'ADMIN.SHARED.BULK_IMPORT.COLUMNS.MESSAGE' | translate }}
                  </th>
                </tr>
              </ng-template>
              <ng-template pTemplate="body" let-error>
                <tr>
                  <td>{{ error.rowNumber }}</td>
                  <td>{{ error.field || '-' }}</td>
                  <td>{{ error.message }}</td>
                </tr>
              </ng-template>
            </p-table>
          </div>
        }
      </div>
    }

    <!-- Action Buttons -->
    <div class="flex justify-end gap-2 mt-4">
      @if (!importResult()) {
        <p-button
          label="Cancel"
          class="p-button-outlined"
          (onClick)="onCancel()"
          [disabled]="isUploading()"
        ></p-button>
        <p-button
          label="Upload"
          icon="pi pi-upload"
          (onClick)="onUpload()"
          [disabled]="!canUpload"
        ></p-button>
      } @else {
        <p-button label="Close" (onClick)="onClose()"></p-button>
      }
    </div>
  </div>
</div>
`, styles: ["/* src/app/features/administration/components/shared/bulk-import-dialog/bulk-import-dialog.component.scss */\n.bulk-import-dialog {\n  min-width: 600px;\n  max-width: 800px;\n}\n.bulk-import-dialog .instructions {\n  background-color: var(--surface-ground);\n  color: var(--text-color);\n  padding: 1rem;\n  border-radius: 4px;\n  border-left: 4px solid var(--primary-color);\n}\n.bulk-import-dialog .instructions p {\n  color: var(--text-color);\n}\n.bulk-import-dialog .instructions .text-sm {\n  color: var(--text-color-secondary);\n}\n.bulk-import-dialog .stat-card {\n  text-align: center;\n  border: 1px solid var(--surface-border);\n  background-color: var(--surface-card);\n}\n.bulk-import-dialog .stat-card p {\n  color: var(--text-color);\n}\n.bulk-import-dialog .stat-card .text-sm {\n  color: var(--text-color-secondary);\n}\n.bulk-import-dialog .error-details {\n  border-top: 1px solid var(--surface-border);\n  padding-top: 1rem;\n}\n/*# sourceMappingURL=bulk-import-dialog.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BulkImportDialogComponent, { className: "BulkImportDialogComponent", filePath: "src/app/features/administration/components/shared/bulk-import-dialog/bulk-import-dialog.component.ts", lineNumber: 43 });
})();
export {
  BulkImportDialogComponent
};
//# sourceMappingURL=chunk-NCXIB3D3.js.map
