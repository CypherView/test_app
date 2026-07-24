import {
  EntityDetailsStateService
} from "./chunk-HAEK3MNB.js";
import {
  WizardComponent
} from "./chunk-NOYOHX5Z.js";
import "./chunk-DPIEMUOA.js";
import {
  Tag,
  TagModule
} from "./chunk-3PDKK7YX.js";
import "./chunk-227XKAZG.js";
import {
  FaIconComponent,
  FontAwesomeModule,
  faLink,
  faLock,
  faSync
} from "./chunk-LWZPKT57.js";
import "./chunk-AB3PBDIK.js";
import "./chunk-7UON6CU4.js";
import "./chunk-UIOPXNY5.js";
import "./chunk-WLMUTOYA.js";
import "./chunk-HEDH66RH.js";
import "./chunk-RAHCTZWE.js";
import "./chunk-EDNONQMY.js";
import "./chunk-SV3SMBHH.js";
import "./chunk-5ZKUO7BH.js";
import "./chunk-VJ76VAAI.js";
import "./chunk-T2NLXXYI.js";
import "./chunk-DXDIX3ID.js";
import "./chunk-S4WNLXX2.js";
import {
  DynamicFormComponent,
  Password,
  PasswordModule
} from "./chunk-3L22U4Q2.js";
import "./chunk-EVW4PTKX.js";
import "./chunk-S5OZ6G2W.js";
import "./chunk-NT6TC2O6.js";
import "./chunk-LHPCQEY3.js";
import "./chunk-2YBWOZSJ.js";
import "./chunk-BTNVOKO5.js";
import "./chunk-FYHRO7AA.js";
import {
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-6ZLKOSJY.js";
import "./chunk-47TCRRSK.js";
import "./chunk-5WWRPFVI.js";
import "./chunk-6RKFIQXA.js";
import {
  DynamicDialogRef
} from "./chunk-N3IYAUEM.js";
import "./chunk-6RNH5RNU.js";
import {
  InputText,
  InputTextModule
} from "./chunk-HAP3H3Y2.js";
import "./chunk-JE2L2HEP.js";
import "./chunk-KMNNT5Y5.js";
import "./chunk-437DZVOB.js";
import {
  Message,
  MessageModule
} from "./chunk-ZD2L3BUO.js";
import "./chunk-HUGEA54Y.js";
import "./chunk-233GVLOY.js";
import {
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-7YJUDWRM.js";
import {
  TranslatePipe
} from "./chunk-RNIEZZVX.js";
import {
  EntitiesService,
  HttpBackend,
  HttpClient,
  HttpHeaders,
  HttpParams,
  SEARCH_DEBOUNCE_TIME,
  createAutocompleteField,
  environment,
  isDefined,
  isNullOrUndefined,
  takeUntilDestroyed,
  toSignal
} from "./chunk-6H7AOYCU.js";
import "./chunk-7BSAABDZ.js";
import {
  Button,
  ButtonModule,
  CommonModule
} from "./chunk-T7ZENNNQ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  Injectable,
  Subject,
  ViewChild,
  catchError,
  concatMap,
  debounceTime,
  delay,
  firstValueFrom,
  forkJoin,
  from,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  switchMap,
  tap,
  toArray,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-JFHDN3YU.js";
import "./chunk-M4PBGCJ5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/features/administration/services/key-sync.service.ts
var KeyTelematicsSyncService = class _KeyTelematicsSyncService {
  http = new HttpClient(inject(HttpBackend));
  entitiesService = inject(EntitiesService);
  keyTelematicsApiUrl = environment.keyTelematicsApiUrl;
  static SESSION_KEY = "kt_login_state";
  loginState = (() => {
    try {
      const raw = sessionStorage.getItem(_KeyTelematicsSyncService.SESSION_KEY);
      return isDefined(raw) ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  })();
  get isAuthenticated() {
    return this.loginState !== null && !!this.loginState.ownerContextId;
  }
  getAccounts() {
    return this.loginState?.accounts ?? [];
  }
  getSelectedAccount() {
    if (isNullOrUndefined(this.loginState?.ownerContextId))
      return null;
    return (this.loginState.accounts ?? []).find((u) => u.owner.id === this.loginState?.ownerContextId) ?? null;
  }
  selectAccount(user) {
    return this.http.get(`${this.keyTelematicsApiUrl}/auth/select/user/${user.id}`, { headers: this.buildHeaders() }).pipe(tap((response) => {
      this.loginState = {
        accessToken: response.accessToken,
        ownerContextId: user.owner.id,
        accounts: this.loginState?.accounts ?? []
      };
      sessionStorage.setItem(_KeyTelematicsSyncService.SESSION_KEY, JSON.stringify(this.loginState));
    }), map(() => void 0), catchError((err) => {
      if (err?.status === 401)
        this.clearToken();
      throw err;
    }));
  }
  clearToken() {
    this.loginState = null;
    sessionStorage.removeItem(_KeyTelematicsSyncService.SESSION_KEY);
  }
  login(username, password) {
    return this.http.post(`${this.keyTelematicsApiUrl}/auth/signin`, {
      username,
      password
    }).pipe(tap((response) => {
      const users = response.users ?? [];
      if (users.length === 0)
        throw new Error("No user returned from Key Telematics login.");
      const autoSelected = users.length === 1 ? users[0] : null;
      this.loginState = {
        accessToken: response.accessToken,
        ownerContextId: autoSelected?.owner.id ?? "",
        accounts: users
      };
      sessionStorage.setItem(_KeyTelematicsSyncService.SESSION_KEY, JSON.stringify(this.loginState));
    }));
  }
  // ── Session ───────────────────────────────────────────────────────────────
  verifySession() {
    if (!this.loginState)
      return of(false);
    return this.http.get(`${this.keyTelematicsApiUrl}/accounts/clients`, {
      headers: this.buildHeaders(),
      params: new HttpParams().set("owner", this.loginState.ownerContextId).set("limit", "1")
    }).pipe(map(() => true), catchError((err) => {
      if (err?.status === 401)
        this.clearToken();
      return of(false);
    }));
  }
  // ── Search ────────────────────────────────────────────────────────────────
  searchClients(term) {
    if (!this.loginState)
      return of([]);
    return this.searchEntities("accounts/clients", term, this.loginState.ownerContextId);
  }
  searchAssetTypes(term, clientId) {
    return this.searchEntities("entities/assettypes", term, clientId);
  }
  searchCostCentres(term, clientId) {
    return this.searchEntities("entities/costcentres", term, clientId);
  }
  searchGroups(term, clientId) {
    return this.searchEntities("entities/assetgroups", term, clientId);
  }
  searchCategories(term, clientId) {
    return this.searchEntities("entities/assetcategories", term, clientId);
  }
  searchDeviceTypes(term, clientId) {
    return this.searchEntities("entities/devicetypes", term, clientId);
  }
  searchKtDevices(term, clientId) {
    return this.searchEntities("entities/devices", term, clientId);
  }
  // ── Fetch ─────────────────────────────────────────────────────────────────
  fetchDevices(asset) {
    const deviceIds = (asset.devices ?? []).map((d) => d.id).filter((id) => !!id);
    if (deviceIds.length === 0)
      return of([]);
    return forkJoin(deviceIds.map((id) => this.entitiesService.getDevice(id).pipe(catchError(() => of(null))))).pipe(map((results) => results.filter((d) => d !== null)));
  }
  // ── Check ─────────────────────────────────────────────────────────────────
  checkEntities(asset, devices, keyTelematicsClientId, ktDeviceSelections, ktDeviceTypeOverrides) {
    if (!this.loginState) {
      return of({ asset, devicePlans: [], entityChecks: [] });
    }
    const headers = this.buildHeaders();
    const assetsUrl = `${this.keyTelematicsApiUrl}/entities/assets`;
    const simCardsUrl = `${this.keyTelematicsApiUrl}/entities/simcards`;
    const assetCheck$ = this.findByName(assetsUrl, asset.name ?? "", keyTelematicsClientId, headers);
    const plans = devices.map((device) => this.buildDevicePlan(device, keyTelematicsClientId, ktDeviceSelections, ktDeviceTypeOverrides, headers, simCardsUrl));
    const devicePlans$ = plans.length === 0 ? of([]) : forkJoin(plans);
    return forkJoin([assetCheck$, devicePlans$]).pipe(map(([assetFound, devicePlans]) => {
      const entityChecks = [
        {
          type: "asset",
          label: asset.name ?? "",
          existingId: assetFound?.id ?? null
        }
      ];
      for (const dp of devicePlans) {
        entityChecks.push({
          type: "device",
          label: dp.device.name ?? dp.device.id,
          existingId: dp.existingKtDeviceId,
          conflict: dp.deviceConflict,
          conflictOwnerName: dp.deviceConflictOwnerName
        });
        if (dp.simCard) {
          entityChecks.push({
            type: "simCard",
            label: dp.simCard.name ?? dp.simCard.id,
            existingId: dp.existingKtSimCardId
          });
        }
      }
      return { asset, devicePlans, entityChecks };
    }));
  }
  // ── Sync ──────────────────────────────────────────────────────────────────
  syncAsset(plan, keyTelematicsClientId, resolvedIds, ktDeviceTypeOverrides, ktGroups, ktCategories) {
    if (!this.loginState) {
      return of({
        success: false,
        message: "Not authenticated with Key Telematics."
      });
    }
    return this.executeSync(plan, keyTelematicsClientId, resolvedIds, ktDeviceTypeOverrides, ktGroups, ktCategories);
  }
  // ── Private: execute sync ─────────────────────────────────────────────────
  executeSync(plan, keyTelematicsClientId, resolvedIds, ktDeviceTypeOverrides, ktGroups, ktCategories) {
    const { asset, devicePlans, entityChecks } = plan;
    const headers = this.buildHeaders();
    const assetsUrl = `${this.keyTelematicsApiUrl}/entities/assets`;
    const assetExistingId = entityChecks.find((c) => c.type === "asset")?.existingId ?? null;
    const ktAssetId$ = isDefined(assetExistingId) ? this.put(`${assetsUrl}/${assetExistingId}`, this.buildAssetUpdateBody(asset, resolvedIds, ktGroups, ktCategories), headers).pipe(map((r) => r.ok ? assetExistingId : "")) : this.http.post(assetsUrl, this.buildAssetCreateBody(asset, keyTelematicsClientId, resolvedIds, ktGroups, ktCategories), { headers }).pipe(map((res) => res.id ?? ""), catchError((err) => {
      if (err?.status === 401)
        this.clearToken();
      console.error("[KeyTelematicsSyncService] Asset POST failed:", err);
      return of("");
    }), delay(1100));
    return ktAssetId$.pipe(switchMap((ktAssetId) => {
      if (!ktAssetId) {
        return of({
          success: false,
          message: "Failed to create/update asset in Key Telematics."
        });
      }
      if (devicePlans.length === 0) {
        return of({
          success: true,
          message: "1 asset synced to Key Telematics successfully."
        });
      }
      return from(devicePlans).pipe(concatMap((dp) => this.syncDevice(dp, ktAssetId, asset.name ?? "", keyTelematicsClientId, ktDeviceTypeOverrides, headers)), toArray(), map((results) => {
        const failed = results.filter((r) => !r.ok).length;
        if (failed > 0) {
          return {
            success: false,
            message: `1 asset synced but ${failed} device${failed === 1 ? "" : "s"} failed to sync.`
          };
        }
        const deviceCount = results.length;
        const simCount = results.filter((r) => r.simCardSynced).length;
        const parts = [
          `${deviceCount} device${deviceCount === 1 ? "" : "s"}`
        ];
        if (simCount > 0) {
          parts.push(`${simCount} SIM card${simCount === 1 ? "" : "s"}`);
        }
        return {
          success: true,
          message: `1 asset and ${parts.join(" and ")} synced to Key Telematics.`
        };
      }));
    }), catchError(() => {
      return of({
        success: false,
        message: "An unexpected error occurred during sync."
      });
    }));
  }
  buildDevicePlan(device, keyTelematicsClientId, ktDeviceSelections, ktDeviceTypeOverrides, headers, simCardsUrl) {
    const manualKtDeviceId = ktDeviceSelections.get(device.id) ?? null;
    const ktTypeId = ktDeviceTypeOverrides.get(device.id);
    const ktDeviceLookup$ = isDefined(manualKtDeviceId) ? of({ id: manualKtDeviceId, conflict: false, ownerName: "" }) : isDefined(ktTypeId) && isDefined(device.name) ? this.http.get(`${this.keyTelematicsApiUrl}/entities/devices/name/${encodeURIComponent(ktTypeId)}/${encodeURIComponent(device.name)}`, { headers }).pipe(map((d) => {
      if (!isDefined(d?.id))
        return { id: null, conflict: false, ownerName: "" };
      const ownerId = d.owner?.id ?? "";
      const conflict = ownerId.length > 0 && ownerId !== keyTelematicsClientId;
      return {
        id: conflict ? null : d.id,
        conflict,
        ownerName: d.owner?.name ?? ""
      };
    }), catchError(() => of({ id: null, conflict: false, ownerName: "" }))) : of({ id: null, conflict: false, ownerName: "" });
    const simCardId = device.simcard?.id;
    return ktDeviceLookup$.pipe(switchMap(({ id: existingKtDeviceId, conflict: deviceConflict, ownerName }) => {
      if (deviceConflict) {
        return of({
          device,
          simCard: null,
          existingKtDeviceId: null,
          existingKtSimCardId: null,
          deviceConflict: true,
          deviceConflictOwnerName: ownerName
        });
      }
      if (!isDefined(simCardId)) {
        return of({
          device,
          simCard: null,
          existingKtDeviceId,
          existingKtSimCardId: null
        });
      }
      return this.buildDevicePlanWithSimCard(device, existingKtDeviceId, simCardId, keyTelematicsClientId, headers, simCardsUrl);
    }));
  }
  buildDevicePlanWithSimCard(device, existingKtDeviceId, simCardId, keyTelematicsClientId, headers, simCardsUrl) {
    return this.entitiesService.getSimCard(simCardId).pipe(catchError(() => of(null))).pipe(switchMap((simCard) => {
      if (!simCard) {
        return of({
          device,
          simCard: null,
          existingKtDeviceId,
          existingKtSimCardId: null
        });
      }
      return this.findByName(simCardsUrl, simCard.name ?? "", keyTelematicsClientId, headers).pipe(map((ktSimCard) => ({
        device,
        simCard,
        existingKtDeviceId,
        existingKtSimCardId: ktSimCard?.id ?? null
      })));
    }));
  }
  syncDevice(dp, ktAssetId, ktAssetName, ownerId, ktDeviceTypeOverrides, headers) {
    const devicesUrl = `${this.keyTelematicsApiUrl}/entities/devices`;
    const ktDeviceTypeId = ktDeviceTypeOverrides.get(dp.device.id);
    const ktSimCardId$ = dp.simCard ? this.syncSimCard(dp.simCard, dp.existingKtSimCardId, ownerId, headers) : of(null);
    return ktSimCardId$.pipe(switchMap((ktSimCardId) => {
      const simCardSynced = isDefined(ktSimCardId);
      const assetLink = { id: ktAssetId, name: ktAssetName };
      const simcardLink = simCardSynced ? { simcard: { id: ktSimCardId, name: dp.simCard?.name ?? "" } } : {};
      if (isDefined(dp.existingKtDeviceId)) {
        const updateBody = __spreadValues(__spreadProps(__spreadValues({}, this.buildDeviceUpdateBody(dp.device, ktDeviceTypeId)), {
          asset: assetLink
        }), simcardLink);
        return this.put(`${devicesUrl}/${dp.existingKtDeviceId}`, updateBody, headers).pipe(map((r) => __spreadProps(__spreadValues({}, r), { simCardSynced })));
      }
      const createBody = __spreadValues(__spreadProps(__spreadValues({}, this.buildDeviceCreateBody(dp.device, ownerId, ktDeviceTypeId)), {
        asset: assetLink
      }), simcardLink);
      return this.http.post(devicesUrl, createBody, { headers }).pipe(map(() => ({ ok: true, simCardSynced })), catchError((err) => {
        if (err?.status === 401)
          this.clearToken();
        console.error("[KeyTelematicsSyncService] Device POST failed:", err);
        return of({ ok: false, simCardSynced: false });
      }), delay(1100));
    }), catchError(() => {
      return of({ ok: false, simCardSynced: false });
    }));
  }
  syncSimCard(simCard, existingKtSimCardId, ownerId, headers) {
    const simCardsUrl = `${this.keyTelematicsApiUrl}/entities/simcards`;
    if (isDefined(existingKtSimCardId)) {
      return this.put(`${simCardsUrl}/${existingKtSimCardId}`, this.buildSimCardUpdateBody(simCard), headers).pipe(map((r) => r.ok ? existingKtSimCardId : null));
    }
    return this.http.post(simCardsUrl, this.buildSimCardCreateBody(simCard, ownerId), {
      headers
    }).pipe(map((res) => res.id ?? null), catchError((err) => {
      if (err?.status === 401)
        this.clearToken();
      return of(null);
    }), delay(1100));
  }
  // ── Private: body builders ────────────────────────────────────────────────
  buildAssetCreateBody(asset, ownerId, resolvedIds, ktGroups, ktCategories) {
    return {
      ownerId,
      name: asset.name ?? "",
      assetType: this.resolveIdName("assetType", asset.assetType, resolvedIds),
      costCentre: this.resolveIdName("costCentre", asset.costCentre, resolvedIds),
      groups: ktGroups,
      categories: ktCategories,
      state: asset.state,
      fields: asset.fields,
      tags: asset.tags,
      color: asset.color
    };
  }
  buildAssetUpdateBody(asset, resolvedIds, ktGroups, ktCategories) {
    return {
      name: asset.name,
      assetType: this.resolveIdName("assetType", asset.assetType, resolvedIds),
      costCentre: this.resolveIdName("costCentre", asset.costCentre, resolvedIds),
      groups: ktGroups,
      categories: ktCategories,
      state: asset.state,
      fields: asset.fields,
      tags: asset.tags,
      color: asset.color
    };
  }
  buildDeviceCreateBody(device, ownerId, ktDeviceTypeId) {
    return __spreadProps(__spreadValues({
      ownerId,
      name: device.name ?? ""
    }, isDefined(ktDeviceTypeId) && {
      deviceType: { id: ktDeviceTypeId, name: device.deviceType?.name ?? "" }
    }), {
      state: device.state,
      fields: device.fields
    });
  }
  buildDeviceUpdateBody(device, ktDeviceTypeId) {
    return {
      name: device.name,
      deviceType: isDefined(ktDeviceTypeId) ? { id: ktDeviceTypeId, name: device.deviceType?.name ?? "" } : void 0,
      state: device.state,
      fields: device.fields
    };
  }
  buildSimCardCreateBody(simCard, ownerId) {
    return {
      ownerId,
      name: simCard.name ?? "",
      networkName: simCard.networkName ?? "",
      number: simCard.number ?? "",
      description: simCard.description ?? "",
      state: simCard.state,
      fields: simCard.fields
    };
  }
  buildSimCardUpdateBody(simCard) {
    return {
      name: simCard.name,
      networkName: simCard.networkName,
      number: simCard.number,
      description: simCard.description,
      state: simCard.state,
      fields: simCard.fields
    };
  }
  resolveIdName(type, source, resolvedIds) {
    const name = source?.name ?? null;
    const resolvedId = isDefined(name) ? resolvedIds.get(`${type}:${name}`) : void 0;
    const id = resolvedId ?? source?.id ?? "";
    if (!id)
      console.warn(`[KeyTelematicsSyncService] resolveIdName: no id resolved for ${type}:${name}`);
    return { id, name };
  }
  // ── Private: search helper ───────────────────────────────────────────────
  searchEntities(endpoint, term, clientId) {
    if (!this.loginState)
      return of([]);
    return this.http.get(`${this.keyTelematicsApiUrl}/${endpoint}`, {
      headers: this.buildHeaders(),
      params: this.buildSearchParams(term, clientId)
    }).pipe(map((res) => res.items ?? []), catchError((err) => {
      if (err?.status === 401)
        this.clearToken();
      return of([]);
    }));
  }
  // ── Private: HTTP helpers ─────────────────────────────────────────────────
  findByName(url, name, owner, headers) {
    const params = new HttpParams().set("owner", owner).set("limit", "1").set("filter", `name=${this.ktEncode(name)}`);
    return this.http.get(url, { headers, params }).pipe(map((res) => res.items?.find((i) => i.name === name) ?? null), catchError((err) => {
      if (err?.status === 401)
        this.clearToken();
      return of(null);
    }));
  }
  buildSearchParams(term, owner) {
    const encoded = this.ktEncode(term);
    const base = new HttpParams().set("owner", owner).set("limit", "20").set("sort", "name");
    return encoded ? base.set("filter", `name=*${encoded}*`) : base;
  }
  // KT filter values use $XX hex encoding (like URL encoding but with $ instead of %).
  // Angular's HttpUrlEncodingCodec keeps $ unescaped per RFC 3986, so it reaches the
  // server as-is and KT's filter parser decodes it correctly.
  ktEncode(value) {
    return encodeURIComponent(value.trim()).replaceAll("%", "$");
  }
  put(url, body, headers) {
    return this.http.put(url, body, { headers }).pipe(map(() => ({ ok: true })), catchError((err) => {
      if (err?.status === 401)
        this.clearToken();
      return of({ ok: false });
    }), delay(1100));
  }
  buildHeaders() {
    return new HttpHeaders({
      "x-access-token": this.loginState?.accessToken ?? "",
      "Content-Type": "application/json"
    });
  }
  static \u0275fac = function KeyTelematicsSyncService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KeyTelematicsSyncService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _KeyTelematicsSyncService, factory: _KeyTelematicsSyncService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KeyTelematicsSyncService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/administration/components/assets/keys-sync-dialog/key-telematics-sync-dialog.component.ts
var _c0 = ["loginContent"];
var _c1 = ["clientContent"];
var _c2 = ["depContent"];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.label;
function KeyTelematicsSyncDialogComponent_ng_template_0_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 15);
    \u0275\u0275element(2, "span", 16);
    \u0275\u0275elementStart(3, "div", 17)(4, "p", 18);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 19);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "p-button", 20);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("onClick", function KeyTelematicsSyncDialogComponent_ng_template_0_Conditional_11_Conditional_3_Template_p_button_onClick_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.switchAccount());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "ADMIN.ASSETS.KEY_TELEMATICS.CREDENTIALS.ACTIVE_ACCOUNT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedAccountName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(10, 6, "ADMIN.ASSETS.KEY_TELEMATICS.BUTTONS.SWITCH_ACCOUNT"))("outlined", true);
  }
}
function KeyTelematicsSyncDialogComponent_ng_template_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-message", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, KeyTelematicsSyncDialogComponent_ng_template_0_Conditional_11_Conditional_3_Template, 11, 8, "div", 12);
    \u0275\u0275elementStart(4, "div", 13)(5, "p-button", 14);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("onClick", function KeyTelematicsSyncDialogComponent_ng_template_0_Conditional_11_Template_p_button_onClick_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.reAuthenticate());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, "ADMIN.ASSETS.KEY_TELEMATICS.CREDENTIALS.CONNECTED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.ktAccounts().length > 1 ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(6, 6, "ADMIN.ASSETS.KEY_TELEMATICS.BUTTONS.SIGN_IN_DIFFERENT"))("text", true);
  }
}
function KeyTelematicsSyncDialogComponent_ng_template_0_Conditional_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "p-progressSpinner", 22);
    \u0275\u0275elementStart(2, "p", 23);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "ADMIN.ASSETS.KEY_TELEMATICS.CREDENTIALS.CONNECTING"), " ");
  }
}
function KeyTelematicsSyncDialogComponent_ng_template_0_Conditional_12_Conditional_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 28);
    \u0275\u0275listener("click", function KeyTelematicsSyncDialogComponent_ng_template_0_Conditional_12_Conditional_1_For_5_Template_button_click_1_listener() {
      const account_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.onSelectAccount(account_r6));
    });
    \u0275\u0275element(2, "span", 29);
    \u0275\u0275elementStart(3, "span", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "span", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const account_r6 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(account_r6.owner.name ?? account_r6.username);
  }
}
function KeyTelematicsSyncDialogComponent_ng_template_0_Conditional_12_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.loginError());
  }
}
function KeyTelematicsSyncDialogComponent_ng_template_0_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 25);
    \u0275\u0275repeaterCreate(4, KeyTelematicsSyncDialogComponent_ng_template_0_Conditional_12_Conditional_1_For_5_Template, 6, 1, "li", null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, KeyTelematicsSyncDialogComponent_ng_template_0_Conditional_12_Conditional_1_Conditional_6_Template, 2, 1, "p-message", 26);
    \u0275\u0275elementStart(7, "div", 27)(8, "p-button", 14);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275listener("onClick", function KeyTelematicsSyncDialogComponent_ng_template_0_Conditional_12_Conditional_1_Template_p_button_onClick_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.reAuthenticate());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, "ADMIN.ASSETS.KEY_TELEMATICS.CREDENTIALS.MULTIPLE_ACCOUNTS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.ktAccounts());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.loginError() ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(9, 6, "ADMIN.ASSETS.KEY_TELEMATICS.BUTTONS.SIGN_IN_DIFFERENT"))("text", true);
  }
}
function KeyTelematicsSyncDialogComponent_ng_template_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, KeyTelematicsSyncDialogComponent_ng_template_0_Conditional_12_Conditional_0_Template, 5, 3, "div", 21)(1, KeyTelematicsSyncDialogComponent_ng_template_0_Conditional_12_Conditional_1_Template, 10, 8);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.isSelectingAccount() ? 0 : 1);
  }
}
function KeyTelematicsSyncDialogComponent_ng_template_0_Conditional_13_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.loginError());
  }
}
function KeyTelematicsSyncDialogComponent_ng_template_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 32);
    \u0275\u0275listener("ngSubmit", function KeyTelematicsSyncDialogComponent_ng_template_0_Conditional_13_Template_form_ngSubmit_0_listener($event) {
      return $event.preventDefault();
    });
    \u0275\u0275elementStart(1, "div", 33)(2, "label", 34);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 35);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 33)(8, "label", 36);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "p-password", 37);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, KeyTelematicsSyncDialogComponent_ng_template_0_Conditional_13_Conditional_13_Template, 2, 1, "p-message", 38);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r2.credForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 8, "ADMIN.ASSETS.KEY_TELEMATICS.CREDENTIALS.FIELDS.USERNAME"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("placeholder", \u0275\u0275pipeBind1(6, 10, "ADMIN.ASSETS.KEY_TELEMATICS.CREDENTIALS.FIELDS.USERNAME_PLACEHOLDER"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 12, "ADMIN.ASSETS.KEY_TELEMATICS.CREDENTIALS.FIELDS.PASSWORD"));
    \u0275\u0275advance(2);
    \u0275\u0275property("feedback", false)("toggleMask", true)("placeholder", \u0275\u0275pipeBind1(12, 14, "ADMIN.ASSETS.KEY_TELEMATICS.CREDENTIALS.FIELDS.PASSWORD_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.loginError() ? 13 : -1);
  }
}
function KeyTelematicsSyncDialogComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275element(2, "fa-icon", 7);
    \u0275\u0275elementStart(3, "div", 8)(4, "div", 9)(5, "h2", 10);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(11, KeyTelematicsSyncDialogComponent_ng_template_0_Conditional_11_Template, 7, 8)(12, KeyTelematicsSyncDialogComponent_ng_template_0_Conditional_12_Template, 2, 1)(13, KeyTelematicsSyncDialogComponent_ng_template_0_Conditional_13_Template, 14, 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r2.faLock);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, "ADMIN.ASSETS.KEY_TELEMATICS.CREDENTIALS.TITLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 6, "ADMIN.ASSETS.KEY_TELEMATICS.CREDENTIALS.DESCRIPTION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.loginStage() === "connected" ? 11 : ctx_r2.loginStage() === "account-select" ? 12 : 13);
  }
}
function KeyTelematicsSyncDialogComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275element(2, "fa-icon", 7);
    \u0275\u0275elementStart(3, "div", 8)(4, "div", 9)(5, "h2", 10);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "app-dynamic-form", 39);
    \u0275\u0275listener("formReady", function KeyTelematicsSyncDialogComponent_ng_template_2_Template_app_dynamic_form_formReady_11_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFormReady($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r2.faSync);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, "ADMIN.ASSETS.KEY_TELEMATICS.SELECT_CLIENT.TITLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 7, "ADMIN.ASSETS.KEY_TELEMATICS.SELECT_CLIENT.DESCRIPTION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("fields", ctx_r2.clientFormFields)("hideActions", true);
  }
}
function KeyTelematicsSyncDialogComponent_ng_template_4_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 40);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ADMIN.ASSETS.KEY_TELEMATICS.MAP_DEPS.NO_DEPS"), " ");
  }
}
function KeyTelematicsSyncDialogComponent_ng_template_4_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-dynamic-form", 39);
    \u0275\u0275listener("formReady", function KeyTelematicsSyncDialogComponent_ng_template_4_Conditional_12_Template_app_dynamic_form_formReady_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onDepFormReady($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("fields", ctx_r2.depFormFields)("hideActions", true);
  }
}
function KeyTelematicsSyncDialogComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275element(2, "fa-icon", 7);
    \u0275\u0275elementStart(3, "div", 8)(4, "div", 9)(5, "h2", 10);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(11, KeyTelematicsSyncDialogComponent_ng_template_4_Conditional_11_Template, 3, 3, "p", 40)(12, KeyTelematicsSyncDialogComponent_ng_template_4_Conditional_12_Template, 1, 2, "app-dynamic-form", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r2.faLink);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, "ADMIN.ASSETS.KEY_TELEMATICS.MAP_DEPS.TITLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 6, "ADMIN.ASSETS.KEY_TELEMATICS.MAP_DEPS.DESCRIPTION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.depFormFields.length === 0 ? 11 : 12);
  }
}
function KeyTelematicsSyncDialogComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-wizard", 42);
    \u0275\u0275listener("onCancel", function KeyTelematicsSyncDialogComponent_Conditional_6_Template_app_wizard_onCancel_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onWizardCancel());
    })("complete", function KeyTelematicsSyncDialogComponent_Conditional_6_Template_app_wizard_complete_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onWizardComplete());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("contentOnly", true)("useWizardButtonsOnly", true)("steps", ctx_r2.steps())("showSteps", false)("loading", ctx_r2.isLoggingIn());
  }
}
function KeyTelematicsSyncDialogComponent_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "p-progressSpinner", 22);
    \u0275\u0275elementStart(2, "p", 23);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "ADMIN.ASSETS.KEY_TELEMATICS.CONFIRM.CHECKING"), " ");
  }
}
function KeyTelematicsSyncDialogComponent_Conditional_7_Conditional_1_For_6_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const check_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "ADMIN.ASSETS.KEY_TELEMATICS.CONFIRM.OWNED_BY"), "", check_r11.conflictOwnerName ? ": " + check_r11.conflictOwnerName : " " + \u0275\u0275pipeBind1(3, 4, "ADMIN.ASSETS.KEY_TELEMATICS.CONFIRM.DIFFERENT_CLIENT"), " ");
  }
}
function KeyTelematicsSyncDialogComponent_Conditional_7_Conditional_1_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 45)(1, "div", 50);
    \u0275\u0275element(2, "span", 51);
    \u0275\u0275elementStart(3, "div", 52)(4, "div", 53)(5, "span", 54);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 55);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, KeyTelematicsSyncDialogComponent_Conditional_7_Conditional_1_For_6_Conditional_9_Template, 4, 6, "span", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "p-tag", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const check_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pi-exclamation-circle", check_r11.conflict)("pi-plus-circle", !check_r11.conflict && check_r11.existingId === null)("pi-pencil", !check_r11.conflict && check_r11.existingId !== null)("text-red-500", check_r11.conflict)("text-green-500", !check_r11.conflict && check_r11.existingId === null)("text-yellow-500", !check_r11.conflict && check_r11.existingId !== null);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(check_r11.type === "simCard" ? "SIM Card" : check_r11.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(check_r11.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(check_r11.conflict ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.checkLabel(check_r11))("severity", ctx_r2.checkSeverity(check_r11));
  }
}
function KeyTelematicsSyncDialogComponent_Conditional_7_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ADMIN.ASSETS.KEY_TELEMATICS.CONFIRM.CONFLICT_ERROR"), " ");
  }
}
function KeyTelematicsSyncDialogComponent_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "p", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 44);
    \u0275\u0275repeaterCreate(5, KeyTelematicsSyncDialogComponent_Conditional_7_Conditional_1_For_6_Template, 11, 17, "li", 45, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, KeyTelematicsSyncDialogComponent_Conditional_7_Conditional_1_Conditional_7_Template, 3, 3, "p-message", 26);
    \u0275\u0275elementStart(8, "div", 46)(9, "p-button", 47);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("onClick", function KeyTelematicsSyncDialogComponent_Conditional_7_Conditional_1_Template_p_button_onClick_9_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onBackToWizard());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p-button", 48);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275listener("onClick", function KeyTelematicsSyncDialogComponent_Conditional_7_Conditional_1_Template_p_button_onClick_11_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onCancelSync());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p-button", 49);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("onClick", function KeyTelematicsSyncDialogComponent_Conditional_7_Conditional_1_Template_p_button_onClick_13_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onConfirmSync());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, "ADMIN.ASSETS.KEY_TELEMATICS.CONFIRM.REVIEW"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.syncPlan().entityChecks);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.hasConflicts ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(10, 9, "SHARED.COMMON.BUTTONS.BACK"))("outlined", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(12, 11, "SHARED.COMMON.BUTTONS.CANCEL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(14, 13, "ADMIN.ASSETS.KEY_TELEMATICS.BUTTONS.PROCEED"))("disabled", ctx_r2.hasConflicts);
  }
}
function KeyTelematicsSyncDialogComponent_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275element(1, "span", 59);
    \u0275\u0275elementStart(2, "p", 60);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 61)(6, "p-button", 48);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("onClick", function KeyTelematicsSyncDialogComponent_Conditional_7_Conditional_2_Template_p_button_onClick_6_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onCancelSync());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p-button", 62);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275listener("onClick", function KeyTelematicsSyncDialogComponent_Conditional_7_Conditional_2_Template_p_button_onClick_8_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onConfirmSync());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "ADMIN.ASSETS.KEY_TELEMATICS.CONFIRM.VERIFY_ERROR"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(7, 5, "SHARED.COMMON.BUTTONS.CANCEL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(9, 7, "ADMIN.ASSETS.KEY_TELEMATICS.BUTTONS.PROCEED_ANYWAY"));
  }
}
function KeyTelematicsSyncDialogComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, KeyTelematicsSyncDialogComponent_Conditional_7_Conditional_0_Template, 5, 3, "div", 4)(1, KeyTelematicsSyncDialogComponent_Conditional_7_Conditional_1_Template, 15, 15)(2, KeyTelematicsSyncDialogComponent_Conditional_7_Conditional_2_Template, 10, 9);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.isChecking() ? 0 : ctx_r2.syncPlan() ? 1 : 2);
  }
}
function KeyTelematicsSyncDialogComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "p-progressSpinner", 22);
    \u0275\u0275elementStart(2, "p", 23);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "ADMIN.ASSETS.KEY_TELEMATICS.SYNCING"), " ");
  }
}
function KeyTelematicsSyncDialogComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 64);
  }
}
function KeyTelematicsSyncDialogComponent_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 65);
  }
}
function KeyTelematicsSyncDialogComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275conditionalCreate(1, KeyTelematicsSyncDialogComponent_Conditional_9_Conditional_1_Template, 1, 0, "span", 64)(2, KeyTelematicsSyncDialogComponent_Conditional_9_Conditional_2_Template, 1, 0, "span", 65);
    \u0275\u0275elementStart(3, "p", 60);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 66)(6, "p-button", 67);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("onClick", function KeyTelematicsSyncDialogComponent_Conditional_9_Template_p_button_onClick_6_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onClose());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_4_0 = ctx_r2.syncResult()) == null ? null : tmp_4_0.success) ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_5_0 = ctx_r2.syncResult()) == null ? null : tmp_5_0.message);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(7, 3, "SHARED.COMMON.BUTTONS.CLOSE"));
  }
}
var KeyTelematicsSyncDialogComponent = class _KeyTelematicsSyncDialogComponent {
  fb = inject(NonNullableFormBuilder);
  dialogRef = inject(DynamicDialogRef);
  keySyncService = inject(KeyTelematicsSyncService);
  entityStateService = inject(EntityDetailsStateService);
  destroyRef = inject(DestroyRef);
  cdr = inject(ChangeDetectorRef);
  // ── Stage ────────────────────────────────────────────────────────────────
  stage = signal("wizard", ...ngDevMode ? [{ debugName: "stage" }] : (
    /* istanbul ignore next */
    []
  ));
  syncResult = signal(null, ...ngDevMode ? [{ debugName: "syncResult" }] : (
    /* istanbul ignore next */
    []
  ));
  syncPlan = signal(null, ...ngDevMode ? [{ debugName: "syncPlan" }] : (
    /* istanbul ignore next */
    []
  ));
  isChecking = signal(false, ...ngDevMode ? [{ debugName: "isChecking" }] : (
    /* istanbul ignore next */
    []
  ));
  // ── Step 1: Credentials ──────────────────────────────────────────────────
  credForm = this.fb.group({
    username: ["", Validators.required],
    password: ["", Validators.required]
  });
  isLoggingIn = signal(false, ...ngDevMode ? [{ debugName: "isLoggingIn" }] : (
    /* istanbul ignore next */
    []
  ));
  isSelectingAccount = signal(false, ...ngDevMode ? [{ debugName: "isSelectingAccount" }] : (
    /* istanbul ignore next */
    []
  ));
  loginError = signal(null, ...ngDevMode ? [{ debugName: "loginError" }] : (
    /* istanbul ignore next */
    []
  ));
  loginStage = signal("credentials", ...ngDevMode ? [{ debugName: "loginStage" }] : (
    /* istanbul ignore next */
    []
  ));
  ktAccounts = signal([], ...ngDevMode ? [{ debugName: "ktAccounts" }] : (
    /* istanbul ignore next */
    []
  ));
  credFormValid = toSignal(this.credForm.statusChanges.pipe(map(() => this.credForm.valid)), { initialValue: false });
  // ── Step 2: Client Selection ─────────────────────────────────────────────
  clientSearchResults = signal(void 0, ...ngDevMode ? [{ debugName: "clientSearchResults" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedClient = signal(null, ...ngDevMode ? [{ debugName: "selectedClient" }] : (
    /* istanbul ignore next */
    []
  ));
  clientFormFields = [];
  clientSearchSubject = new Subject();
  // ── Step 3: Dependency Mapping + Device Selection ────────────────────────
  assetDevices = signal([], ...ngDevMode ? [{ debugName: "assetDevices" }] : (
    /* istanbul ignore next */
    []
  ));
  depFormFields = [];
  depFieldMeta = [];
  deviceSelectionMeta = [];
  deviceTypeOverrideMeta = [];
  resolvedIds = /* @__PURE__ */ new Map();
  ktGroups = [];
  ktCategories = [];
  ktDeviceSelections = /* @__PURE__ */ new Map();
  ktDeviceTypeOverrides = /* @__PURE__ */ new Map();
  assetTypeSearch$ = new Subject();
  costCentreSearch$ = new Subject();
  groupSearch$ = new Subject();
  categorySearch$ = new Subject();
  ktDeviceSearch$ = new Subject();
  deviceTypeSearch$ = new Subject();
  // ── Wizard ───────────────────────────────────────────────────────────────
  steps = signal([], ...ngDevMode ? [{ debugName: "steps" }] : (
    /* istanbul ignore next */
    []
  ));
  loginContent;
  clientContent;
  depContent;
  faSync = faSync;
  faLock = faLock;
  faLink = faLink;
  constructor() {
    const accounts = this.keySyncService.getAccounts();
    if (this.keySyncService.isAuthenticated) {
      this.loginStage.set("connected");
      this.ktAccounts.set(accounts);
    } else if (accounts.length > 0) {
      this.loginStage.set("account-select");
      this.ktAccounts.set(accounts);
    }
    this.setupClientSearch();
    this.setupDepSearches();
  }
  get selectedAccountName() {
    return this.keySyncService.getSelectedAccount()?.owner.name ?? "";
  }
  ngAfterViewInit() {
    this.buildSteps();
    this.setupStepReactivity();
  }
  // ── Setup ─────────────────────────────────────────────────────────────────
  buildSteps() {
    this.steps.set([
      {
        value: 1,
        header: "Login",
        content: this.loginContent,
        disableNext: this.loginStage() !== "connected" && !this.credFormValid(),
        validate: () => {
          if (this.loginStage() === "connected")
            return this.verifyAndProceed();
          if (this.loginStage() === "credentials")
            return this.performLogin();
          return false;
        }
      },
      {
        value: 2,
        header: "Select Client",
        content: this.clientContent,
        disableNext: !this.selectedClient(),
        validate: () => this.loadDevicesAndBuildDepForm()
      },
      {
        value: 3,
        header: "Map Dependencies",
        content: this.depContent,
        disableNext: true
      }
    ]);
    this.clientFormFields = [
      createAutocompleteField("client", "Key Telematics Client", null, this.clientSearchResults(), (term) => this.onClientSearch(term), {
        props: {
          field: "name",
          appendTo: "body",
          placeholder: "Search for a client in Key Telematics",
          completeOnFocus: false,
          typeahead: true,
          showEmptyMessage: true,
          emptyMessage: "No clients found",
          forceSelection: true
        }
      })
    ];
  }
  setupStepReactivity() {
    this.credForm.statusChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.steps.update((current) => current.map((s) => s.value === 1 ? __spreadProps(__spreadValues({}, s), {
        disableNext: this.loginStage() !== "connected" && (!this.credForm.valid || this.isLoggingIn())
      }) : s));
    });
  }
  setupClientSearch() {
    this.clientSearchSubject.pipe(debounceTime(SEARCH_DEBOUNCE_TIME), takeUntilDestroyed(this.destroyRef), switchMap((term) => this.keySyncService.searchClients(term).pipe(catchError(() => of([]))))).subscribe((results) => {
      this.clientSearchResults.set(results);
      const field = this.clientFormFields.find((f) => f.key === "client");
      if (field?.props) {
        field.props = __spreadProps(__spreadValues({}, field.props), { suggestions: results });
      }
      this.cdr.detectChanges();
    });
  }
  setupDepSearches() {
    const depConfigs = [
      {
        subject: this.assetTypeSearch$,
        search: (t, c) => this.keySyncService.searchAssetTypes(t, c),
        depType: "assetType"
      },
      {
        subject: this.costCentreSearch$,
        search: (t, c) => this.keySyncService.searchCostCentres(t, c),
        depType: "costCentre"
      },
      {
        subject: this.groupSearch$,
        search: (t, c) => this.keySyncService.searchGroups(t, c),
        depType: "group"
      },
      {
        subject: this.categorySearch$,
        search: (t, c) => this.keySyncService.searchCategories(t, c),
        depType: "category"
      }
    ];
    for (const config of depConfigs) {
      config.subject.pipe(debounceTime(SEARCH_DEBOUNCE_TIME), takeUntilDestroyed(this.destroyRef), switchMap((term) => config.search(term, this.selectedClient()?.id ?? "").pipe(catchError(() => of([]))))).subscribe((results) => {
        this.updateDepFieldSuggestions(config.depType, results);
        this.cdr.detectChanges();
      });
    }
    this.ktDeviceSearch$.pipe(debounceTime(SEARCH_DEBOUNCE_TIME), takeUntilDestroyed(this.destroyRef), switchMap((term) => this.keySyncService.searchKtDevices(term, this.selectedClient()?.id ?? "").pipe(catchError(() => of([]))))).subscribe((results) => {
      this.updateDeviceFieldSuggestions(results);
      this.cdr.detectChanges();
    });
    this.deviceTypeSearch$.pipe(debounceTime(SEARCH_DEBOUNCE_TIME), takeUntilDestroyed(this.destroyRef), switchMap((term) => this.keySyncService.searchDeviceTypes(term, this.selectedClient()?.id ?? "").pipe(catchError(() => of([]))))).subscribe((results) => {
      this.updateDeviceTypeFieldSuggestions(results);
      this.cdr.detectChanges();
    });
  }
  // ── Actions ───────────────────────────────────────────────────────────────
  async performLogin() {
    const { username, password } = this.credForm.getRawValue();
    this.isLoggingIn.set(true);
    this.loginError.set(null);
    this.steps.update((s) => s.map((step) => step.value === 1 ? __spreadProps(__spreadValues({}, step), { disableNext: true }) : step));
    try {
      await firstValueFrom(this.keySyncService.login(username, password));
      this.isLoggingIn.set(false);
      const accounts = this.keySyncService.getAccounts();
      this.ktAccounts.set(accounts);
      if (this.keySyncService.isAuthenticated) {
        this.loginStage.set("connected");
        this.steps.update((s) => s.map((step) => step.value === 1 ? __spreadProps(__spreadValues({}, step), { disableNext: false }) : step));
        return true;
      } else {
        this.loginStage.set("account-select");
        this.steps.update((s) => s.map((step) => step.value === 1 ? __spreadProps(__spreadValues({}, step), { disableNext: true }) : step));
        this.cdr.detectChanges();
        return false;
      }
    } catch (err) {
      this.isLoggingIn.set(false);
      const status = err?.status;
      this.loginError.set(status === 401 ? "Invalid credentials. Please check your Key Telematics username and password." : "Login failed. Please try again.");
      this.steps.update((s) => s.map((step) => step.value === 1 ? __spreadProps(__spreadValues({}, step), { disableNext: !this.credForm.valid }) : step));
      return false;
    }
  }
  async verifyAndProceed() {
    const valid = await firstValueFrom(this.keySyncService.verifySession());
    if (!valid) {
      this.loginStage.set("credentials");
      this.loginError.set("Your session has expired. Please sign in again.");
      this.steps.update((s) => s.map((step) => step.value === 1 ? __spreadProps(__spreadValues({}, step), { disableNext: !this.credForm.valid }) : step));
    }
    return valid;
  }
  async loadDevicesAndBuildDepForm() {
    const client = this.selectedClient();
    const asset = this.entityStateService.selectedItem();
    if (!client || !asset)
      return false;
    let devices = [];
    try {
      devices = await firstValueFrom(this.keySyncService.fetchDevices(asset));
      this.assetDevices.set(devices);
      const ktPreFetch = await this.prefetchKtMatches(asset, devices, client.id);
      this.buildDepFormFields(asset, devices, ktPreFetch);
    } catch {
      this.buildDepFormFields(asset, devices, _KeyTelematicsSyncDialogComponent.EMPTY_KT_PRE_FETCH);
    }
    const hasRequiredFields = this.depFieldMeta.length > 0 || this.deviceTypeOverrideMeta.length > 0;
    this.steps.update((s) => s.map((step) => step.value === 3 ? __spreadProps(__spreadValues({}, step), { disableNext: hasRequiredFields }) : step));
    this.cdr.detectChanges();
    return true;
  }
  async prefetchKtMatches(asset, devices, clientId) {
    const exact = (obs$, name) => obs$.pipe(map((r) => r.find((x) => x !== null && x.name === name) ?? null), catchError(() => of(null)));
    const groups = (asset.groups ?? []).filter((g) => isDefined(g.name));
    const categories = (asset.categories ?? []).filter((c) => isDefined(c.name));
    const assetTypeName = asset.assetType?.name;
    const costCentreName = asset.costCentre?.name;
    const [assetType, costCentre, groupMatches, categoryMatches, deviceMatches] = await Promise.all([
      isDefined(assetTypeName) ? firstValueFrom(exact(this.keySyncService.searchAssetTypes(assetTypeName, clientId), assetTypeName)) : Promise.resolve(null),
      isDefined(costCentreName) ? firstValueFrom(exact(this.keySyncService.searchCostCentres(costCentreName, clientId), costCentreName)) : Promise.resolve(null),
      groups.length > 0 ? firstValueFrom(forkJoin(groups.map((g) => exact(this.keySyncService.searchGroups(g.name, clientId), g.name)))) : Promise.resolve([]),
      categories.length > 0 ? firstValueFrom(forkJoin(categories.map((c) => exact(this.keySyncService.searchCategories(c.name, clientId), c.name)))) : Promise.resolve([]),
      devices.length > 0 ? firstValueFrom(forkJoin(devices.map((d) => forkJoin([
        isDefined(d.name) ? exact(this.keySyncService.searchKtDevices(d.name, clientId), d.name) : of(null),
        isDefined(d.deviceType?.name) ? exact(this.keySyncService.searchDeviceTypes(d.deviceType.name, clientId), d.deviceType.name) : of(null)
      ])))) : Promise.resolve([])
    ]);
    return {
      assetType,
      costCentre,
      groups: groupMatches,
      categories: categoryMatches,
      deviceMatches
    };
  }
  static EMPTY_KT_PRE_FETCH = {
    assetType: null,
    costCentre: null,
    groups: [],
    categories: [],
    deviceMatches: []
  };
  buildDepFormFields(asset, devices, ktPreFetch = _KeyTelematicsSyncDialogComponent.EMPTY_KT_PRE_FETCH) {
    const depMeta = [];
    const fields = [];
    const assetTypeName = asset.assetType?.name;
    if (isDefined(assetTypeName)) {
      const preMatch = ktPreFetch.assetType;
      depMeta.push({
        fieldKey: "assetType",
        depType: "assetType",
        sourceName: assetTypeName
      });
      fields.push(createAutocompleteField("assetType", "Asset Type", preMatch, preMatch ? [preMatch] : [], (term) => this.onDepSearch("assetType", term), {
        hint: `CypherView: "${assetTypeName}"`,
        props: this.acFieldProps("Search asset types\u2026")
      }));
    }
    const costCentreName = asset.costCentre?.name;
    if (isDefined(costCentreName)) {
      const preMatch = ktPreFetch.costCentre;
      depMeta.push({
        fieldKey: "costCentre",
        depType: "costCentre",
        sourceName: costCentreName
      });
      fields.push(createAutocompleteField("costCentre", "Cost Centre", preMatch, preMatch ? [preMatch] : [], (term) => this.onDepSearch("costCentre", term), {
        hint: `CypherView: "${costCentreName}"`,
        props: this.acFieldProps("Search cost centres\u2026")
      }));
    }
    const groupNames = (asset.groups ?? []).map((g) => g.name).filter((n) => isDefined(n));
    if (groupNames.length > 0) {
      const preGroups = ktPreFetch.groups.filter((g) => g !== null);
      fields.push(createAutocompleteField("groups", "Groups", preGroups, preGroups, (term) => this.onDepSearch("group", term), {
        hint: `CypherView: ${groupNames.map((n) => `"${n}"`).join(", ")}`,
        props: __spreadProps(__spreadValues({}, this.acFieldProps("Search groups\u2026")), { multiple: true })
      }));
    }
    const categoryNames = (asset.categories ?? []).map((c) => c.name).filter((n) => isDefined(n));
    if (categoryNames.length > 0) {
      const preCategories = ktPreFetch.categories.filter((c) => c !== null);
      fields.push(createAutocompleteField("categories", "Categories", preCategories, preCategories, (term) => this.onDepSearch("category", term), {
        hint: `CypherView: ${categoryNames.map((n) => `"${n}"`).join(", ")}`,
        props: __spreadProps(__spreadValues({}, this.acFieldProps("Search categories\u2026")), {
          multiple: true
        })
      }));
    }
    const { deviceMeta, deviceTypeOverrideMeta, fields: deviceFields } = this.buildDeviceFormFields(devices, ktPreFetch);
    this.depFieldMeta = depMeta;
    this.deviceSelectionMeta = deviceMeta;
    this.deviceTypeOverrideMeta = deviceTypeOverrideMeta;
    this.depFormFields = [...fields, ...deviceFields];
  }
  buildDeviceFormFields(devices, ktPreFetch) {
    const deviceMeta = [];
    const deviceTypeOverrideMeta = [];
    const fields = [];
    for (const [i, device] of devices.entries()) {
      const deviceId = device.id;
      if (!isDefined(deviceId))
        continue;
      const [ktDeviceMatch, ktDeviceTypeMatch] = ktPreFetch.deviceMatches[i] ?? [null, null];
      const deviceTypeName = device.deviceType?.name ?? null;
      const deviceLabel = device.name ?? deviceId;
      const deviceFieldKey = `ktDevice_${deviceId}`;
      deviceMeta.push({ fieldKey: deviceFieldKey, cvDeviceId: deviceId });
      fields.push(createAutocompleteField(deviceFieldKey, `KT Device: ${deviceLabel}`, ktDeviceMatch, ktDeviceMatch ? [ktDeviceMatch] : [], (term) => this.onKtDeviceSearch(term), {
        hint: `CypherView: "${deviceLabel}" \u2014 leave empty to create a new device in KT`,
        props: this.acFieldProps("Search devices in Key Telematics\u2026")
      }));
      const typeFieldKey = `deviceType_${deviceId}`;
      deviceTypeOverrideMeta.push({
        fieldKey: typeFieldKey,
        cvDeviceId: deviceId
      });
      fields.push(createAutocompleteField(typeFieldKey, `Device Type: ${deviceLabel}`, ktDeviceTypeMatch, ktDeviceTypeMatch ? [ktDeviceTypeMatch] : [], (term) => this.onDeviceTypeSearch(term), {
        hint: isDefined(deviceTypeName) ? `CypherView type: "${deviceTypeName}"` : void 0,
        props: this.acFieldProps("Search device types in Key Telematics\u2026")
      }));
    }
    return { deviceMeta, deviceTypeOverrideMeta, fields };
  }
  acFieldProps(placeholder) {
    return {
      field: "name",
      appendTo: "body",
      placeholder,
      completeOnFocus: true,
      typeahead: true,
      showEmptyMessage: true,
      emptyMessage: "No results found",
      forceSelection: true
    };
  }
  updateDepFieldSuggestions(depType, results) {
    const fieldKeyMap = {
      assetType: "assetType",
      costCentre: "costCentre",
      group: "groups",
      category: "categories"
    };
    const targetKey = fieldKeyMap[depType];
    for (const field of this.depFormFields) {
      if (field.key === targetKey && field.props) {
        field.props = __spreadProps(__spreadValues({}, field.props), { suggestions: results });
      }
    }
  }
  updateDeviceFieldSuggestions(results) {
    const keys = new Set(this.deviceSelectionMeta.map((m) => m.fieldKey));
    for (const field of this.depFormFields) {
      if (keys.has(field.key) && field.props) {
        field.props = __spreadProps(__spreadValues({}, field.props), { suggestions: results });
      }
    }
  }
  updateDeviceTypeFieldSuggestions(results) {
    const keys = new Set(this.deviceTypeOverrideMeta.map((m) => m.fieldKey));
    for (const field of this.depFormFields) {
      if (keys.has(field.key) && field.props) {
        field.props = __spreadProps(__spreadValues({}, field.props), { suggestions: results });
      }
    }
  }
  onFormReady(form) {
    form.get("client")?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((client) => {
      this.onClientSelected(client);
    });
  }
  onDepFormReady(form) {
    this.applyDepFormValues(form.getRawValue());
    form.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((values) => {
      this.applyDepFormValues(values);
    });
  }
  applyDepFormValues(values) {
    const allKeys = this.depFormFields.map((f) => f.key);
    if (!allKeys.every((k) => k in values))
      return;
    const newResolved = /* @__PURE__ */ new Map();
    for (const meta of this.depFieldMeta) {
      const selected = values[meta.fieldKey];
      if (selected !== null && isDefined(selected?.id)) {
        newResolved.set(`${meta.depType}:${meta.sourceName}`, selected.id);
      }
    }
    this.resolvedIds = newResolved;
    const groupsRaw = values["groups"];
    this.ktGroups = Array.isArray(groupsRaw) ? groupsRaw : [];
    const categoriesRaw = values["categories"];
    this.ktCategories = Array.isArray(categoriesRaw) ? categoriesRaw : [];
    const newDeviceSelections = /* @__PURE__ */ new Map();
    for (const meta of this.deviceSelectionMeta) {
      const selected = values[meta.fieldKey];
      if (selected !== null && isDefined(selected?.id)) {
        newDeviceSelections.set(meta.cvDeviceId, selected.id);
      }
    }
    this.ktDeviceSelections = newDeviceSelections;
    const newDeviceTypeOverrides = /* @__PURE__ */ new Map();
    for (const meta of this.deviceTypeOverrideMeta) {
      const selected = values[meta.fieldKey];
      if (selected !== null && isDefined(selected?.id)) {
        newDeviceTypeOverrides.set(meta.cvDeviceId, selected.id);
      }
    }
    this.ktDeviceTypeOverrides = newDeviceTypeOverrides;
    const allDeviceTypesResolved = this.deviceTypeOverrideMeta.every((meta) => newDeviceTypeOverrides.has(meta.cvDeviceId));
    const allResolved = newResolved.size >= this.depFieldMeta.length && allDeviceTypesResolved;
    this.steps.update((s) => s.map((step) => step.value === 3 ? __spreadProps(__spreadValues({}, step), { disableNext: !allResolved }) : step));
  }
  onClientSearch(term) {
    this.clientSearchResults.set(void 0);
    this.clientSearchSubject.next(term);
  }
  onClientSelected(client) {
    this.selectedClient.set(client);
    this.steps.update((s) => s.map((step) => step.value === 2 ? __spreadProps(__spreadValues({}, step), { disableNext: !client }) : step));
  }
  onDepSearch(depType, term) {
    const subjectMap = {
      assetType: this.assetTypeSearch$,
      costCentre: this.costCentreSearch$,
      group: this.groupSearch$,
      category: this.categorySearch$
    };
    subjectMap[depType].next(term);
  }
  onKtDeviceSearch(term) {
    this.ktDeviceSearch$.next(term);
  }
  onDeviceTypeSearch(term) {
    this.deviceTypeSearch$.next(term);
  }
  onWizardComplete() {
    const client = this.selectedClient();
    const asset = this.entityStateService.selectedItem();
    if (!client || !asset)
      return;
    this.isChecking.set(true);
    this.stage.set("confirm");
    this.cdr.detectChanges();
    this.keySyncService.checkEntities(asset, this.assetDevices(), client.id, this.ktDeviceSelections, this.ktDeviceTypeOverrides).subscribe({
      next: (plan) => {
        this.syncPlan.set(plan);
        this.isChecking.set(false);
        this.cdr.detectChanges();
      },
      error: () => {
        this.syncPlan.set(null);
        this.isChecking.set(false);
        this.cdr.detectChanges();
      }
    });
  }
  onConfirmSync() {
    const plan = this.syncPlan();
    const client = this.selectedClient();
    if (!plan || !client)
      return;
    this.stage.set("syncing");
    this.cdr.detectChanges();
    this.keySyncService.syncAsset(plan, client.id, this.resolvedIds, this.ktDeviceTypeOverrides, this.ktGroups, this.ktCategories).subscribe({
      next: (result) => {
        this.syncResult.set(result);
        this.stage.set("result");
        this.cdr.detectChanges();
      },
      error: () => {
        this.syncResult.set({
          success: false,
          message: "An unexpected error occurred during sync."
        });
        this.stage.set("result");
        this.cdr.detectChanges();
      }
    });
  }
  async onSelectAccount(user) {
    this.isSelectingAccount.set(true);
    this.loginError.set(null);
    try {
      await firstValueFrom(this.keySyncService.selectAccount(user));
      this.loginStage.set("connected");
      this.steps.update((s) => s.map((step) => step.value === 1 ? __spreadProps(__spreadValues({}, step), { disableNext: false }) : step));
    } catch {
      this.loginError.set("Failed to select account. Please try again.");
    } finally {
      this.isSelectingAccount.set(false);
      this.cdr.detectChanges();
    }
  }
  switchAccount() {
    this.loginStage.set("account-select");
    this.selectedClient.set(null);
    this.steps.update((s) => s.map((step) => {
      if (step.value === 1)
        return __spreadProps(__spreadValues({}, step), { disableNext: true });
      if (step.value === 2)
        return __spreadProps(__spreadValues({}, step), { disableNext: true });
      return step;
    }));
  }
  reAuthenticate() {
    this.keySyncService.clearToken();
    this.loginStage.set("credentials");
    this.ktAccounts.set([]);
    this.loginError.set(null);
    this.selectedClient.set(null);
    this.steps.update((s) => s.map((step) => {
      if (step.value === 1)
        return __spreadProps(__spreadValues({}, step), { disableNext: !this.credForm.valid });
      if (step.value === 2)
        return __spreadProps(__spreadValues({}, step), { disableNext: true });
      return step;
    }));
  }
  onBackToWizard() {
    this.syncPlan.set(null);
    this.stage.set("wizard");
  }
  onWizardCancel() {
    this.dialogRef.close();
  }
  onCancelSync() {
    this.dialogRef.close();
  }
  onClose() {
    this.dialogRef.close(this.syncResult());
  }
  get hasConflicts() {
    return this.syncPlan()?.entityChecks.some((c) => c.conflict === true) ?? false;
  }
  checkLabel(check) {
    if (check.conflict === true)
      return "Conflict";
    return check.existingId === null ? "Create" : "Update";
  }
  checkSeverity(check) {
    if (check.conflict === true)
      return "danger";
    return check.existingId === null ? "success" : "warn";
  }
  static \u0275fac = function KeyTelematicsSyncDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KeyTelematicsSyncDialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KeyTelematicsSyncDialogComponent, selectors: [["app-keys-sync-dialog"]], viewQuery: function KeyTelematicsSyncDialogComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5)(_c1, 5)(_c2, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loginContent = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.clientContent = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.depContent = _t.first);
    }
  }, decls: 10, vars: 1, consts: [["loginContent", ""], ["clientContent", ""], ["depContent", ""], [3, "contentOnly", "useWizardButtonsOnly", "steps", "showSteps", "loading"], [1, "flex", "flex-col", "items-center", "justify-center", "py-10", "gap-3"], [1, "card", "pt-2"], [1, "mb-4", "p-2", "flex", "justify-start", "items-center"], [1, "!text-[2.5rem]", 3, "icon"], [1, "pl-6", "flex-1"], [1, "flex", "justify-between", "items-center"], [1, "text-xl", "font-semibold", "m-0"], ["severity", "success"], [1, "active-account-card", "mt-4", "flex", "items-center", "justify-between", "gap-3", "px-3.5", "py-2.5"], [1, "mt-3"], ["severity", "secondary", "size", "small", 3, "onClick", "label", "text"], [1, "flex", "items-center", "gap-2", "min-w-0"], [1, "pi", "pi-building", "active-account-icon", "flex-shrink-0"], [1, "min-w-0"], [1, "text-xs", "m-0", "mb-0.5", "opacity-60"], [1, "text-sm", "font-semibold", "m-0", "truncate"], ["severity", "secondary", "size", "small", 3, "onClick", "label", "outlined"], [1, "flex", "flex-col", "items-center", "justify-center", "gap-3", "py-10"], [1, "w-12", "h-12"], [1, "text-sm", "m-0"], [1, "text-sm", "opacity-60", "m-0", "mb-3"], [1, "list-none", "p-0", "m-0", "flex", "flex-col", "gap-2"], ["severity", "error", 1, "mt-3"], [1, "mt-4"], ["type", "button", 1, "account-item", "w-full", "flex", "items-center", "gap-3", "px-4", "py-3", "cursor-pointer", "text-left", "transition-colors", "duration-150", 3, "click"], [1, "pi", "pi-building", "account-icon", "flex-shrink-0", "transition-colors", "duration-150"], [1, "account-name", "flex-1", "text-sm", "font-medium", "leading-tight"], [1, "pi", "pi-chevron-right", "account-chevron", "flex-shrink-0", "text-xs", "transition-colors", "duration-150"], [1, "flex", "flex-col", "gap-3", 3, "ngSubmit", "formGroup"], [1, "flex", "flex-col", "gap-1"], ["for", "keys-username", 1, "text-sm", "font-medium"], ["id", "keys-username", "type", "text", "pInputText", "", "formControlName", "username", "autocomplete", "username", 1, "w-full"], ["for", "keys-password", 1, "text-sm", "font-medium"], ["inputId", "keys-password", "formControlName", "password", "inputStyleClass", "w-full", "autocomplete", "current-password", 1, "w-full", 3, "feedback", "toggleMask", "placeholder"], ["severity", "error"], [3, "formReady", "fields", "hideActions"], [1, "text-sm", "text-surface-500", "m-0"], [3, "fields", "hideActions"], [3, "onCancel", "complete", "contentOnly", "useWizardButtonsOnly", "steps", "showSteps", "loading"], [1, "flex", "flex-col", "gap-3", "pt-2"], [1, "list-none", "m-0", "p-0", "flex", "flex-col", "gap-2"], [1, "flex", "items-start", "justify-between", "gap-3", "py-1"], [1, "flex", "justify-end", "gap-2", "pt-4"], ["severity", "secondary", "icon", "pi pi-arrow-left", 3, "onClick", "label", "outlined"], ["severity", "secondary", 3, "onClick", "label"], ["icon", "pi pi-sync", 3, "onClick", "label", "disabled"], [1, "flex", "items-center", "gap-2", "text-sm"], [1, "pi", "mt-0.5"], [1, "flex", "flex-col"], [1, "flex", "items-center", "gap-2"], [1, "font-medium", "capitalize"], [1, "text-surface-500"], [1, "text-xs", "text-red-500", "mt-0.5"], [3, "value", "severity"], [1, "flex", "flex-col", "items-center", "gap-3", "py-6"], [1, "pi", "pi-exclamation-triangle", "text-yellow-500", "text-5xl"], [1, "text-sm", "text-center", "m-0"], [1, "flex", "justify-end", "gap-2", "pt-2"], ["icon", "pi pi-sync", 3, "onClick", "label"], [1, "flex", "flex-col", "items-center", "gap-4", "py-6"], [1, "pi", "pi-check-circle", "text-green-500", "text-5xl"], [1, "pi", "pi-times-circle", "text-red-500", "text-5xl"], [1, "flex", "justify-end", "pt-2"], [3, "onClick", "label"]], template: function KeyTelematicsSyncDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, KeyTelematicsSyncDialogComponent_ng_template_0_Template, 14, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(2, KeyTelematicsSyncDialogComponent_ng_template_2_Template, 12, 9, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(4, KeyTelematicsSyncDialogComponent_ng_template_4_Template, 13, 8, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275conditionalCreate(6, KeyTelematicsSyncDialogComponent_Conditional_6_Template, 1, 5, "app-wizard", 3)(7, KeyTelematicsSyncDialogComponent_Conditional_7_Template, 3, 1)(8, KeyTelematicsSyncDialogComponent_Conditional_8_Template, 5, 3, "div", 4)(9, KeyTelematicsSyncDialogComponent_Conditional_9_Template, 8, 5);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.stage() === "wizard" ? 6 : ctx.stage() === "confirm" ? 7 : ctx.stage() === "syncing" ? 8 : 9);
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    ButtonModule,
    Button,
    InputTextModule,
    InputText,
    PasswordModule,
    Password,
    ProgressSpinnerModule,
    ProgressSpinner,
    MessageModule,
    Message,
    TagModule,
    Tag,
    WizardComponent,
    DynamicFormComponent,
    FontAwesomeModule,
    FaIconComponent,
    TranslatePipe
  ], styles: ["\n.account-item[_ngcontent-%COMP%] {\n  border: 1px solid var(--content-border-color);\n  border-radius: var(--border-radius);\n  background: var(--surface-0);\n  color: var(--text-color);\n}\n.account-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-primary-color);\n  background: var(--primary-50, var(--surface-50));\n}\n.account-item[_ngcontent-%COMP%]:hover   .account-icon[_ngcontent-%COMP%], \n.account-item[_ngcontent-%COMP%]:hover   .account-chevron[_ngcontent-%COMP%] {\n  color: var(--color-primary-color);\n}\n.account-item[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--color-primary-color);\n  outline-offset: 2px;\n}\n.account-icon[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.active-account-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--content-border-color);\n  border-radius: var(--border-radius);\n  background: var(--surface-50, var(--surface-ground));\n}\n.active-account-icon[_ngcontent-%COMP%] {\n  color: var(--color-primary-color);\n}\n/*# sourceMappingURL=key-telematics-sync-dialog.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KeyTelematicsSyncDialogComponent, [{
    type: Component,
    args: [{ selector: "app-keys-sync-dialog", imports: [
      CommonModule,
      ReactiveFormsModule,
      ButtonModule,
      InputTextModule,
      PasswordModule,
      ProgressSpinnerModule,
      MessageModule,
      TagModule,
      WizardComponent,
      DynamicFormComponent,
      FontAwesomeModule,
      TranslatePipe
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<!-- Step templates \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->

<ng-template #loginContent>
  <div class="card pt-2">
    <div class="mb-4 p-2 flex justify-start items-center">
      <fa-icon [icon]="faLock" class="!text-[2.5rem]"></fa-icon>

      <div class="pl-6 flex-1">
        <div class="flex justify-between items-center">
          <h2 class="text-xl font-semibold m-0">
            {{ 'ADMIN.ASSETS.KEY_TELEMATICS.CREDENTIALS.TITLE' | translate }}
          </h2>
        </div>
        <span>
          {{
            'ADMIN.ASSETS.KEY_TELEMATICS.CREDENTIALS.DESCRIPTION' | translate
          }}
        </span>
      </div>
    </div>

    @if (loginStage() === 'connected') {
      <p-message severity="success">
        {{ 'ADMIN.ASSETS.KEY_TELEMATICS.CREDENTIALS.CONNECTED' | translate }}
      </p-message>
      @if (ktAccounts().length > 1) {
        <div
          class="active-account-card mt-4 flex items-center justify-between gap-3 px-3.5 py-2.5"
        >
          <div class="flex items-center gap-2 min-w-0">
            <span
              class="pi pi-building active-account-icon flex-shrink-0"
            ></span>
            <div class="min-w-0">
              <p class="text-xs m-0 mb-0.5 opacity-60">
                {{
                  'ADMIN.ASSETS.KEY_TELEMATICS.CREDENTIALS.ACTIVE_ACCOUNT'
                    | translate
                }}
              </p>
              <p class="text-sm font-semibold m-0 truncate">
                {{ selectedAccountName }}
              </p>
            </div>
          </div>
          <p-button
            [label]="
              'ADMIN.ASSETS.KEY_TELEMATICS.BUTTONS.SWITCH_ACCOUNT' | translate
            "
            severity="secondary"
            [outlined]="true"
            size="small"
            (onClick)="switchAccount()"
          ></p-button>
        </div>
      }
      <div class="mt-3">
        <p-button
          [label]="
            'ADMIN.ASSETS.KEY_TELEMATICS.BUTTONS.SIGN_IN_DIFFERENT' | translate
          "
          severity="secondary"
          [text]="true"
          size="small"
          (onClick)="reAuthenticate()"
        ></p-button>
      </div>
    } @else if (loginStage() === 'account-select') {
      @if (isSelectingAccount()) {
        <div class="flex flex-col items-center justify-center gap-3 py-10">
          <p-progressSpinner class="w-12 h-12"></p-progressSpinner>
          <p class="text-sm m-0">
            {{
              'ADMIN.ASSETS.KEY_TELEMATICS.CREDENTIALS.CONNECTING' | translate
            }}
          </p>
        </div>
      } @else {
        <p class="text-sm opacity-60 m-0 mb-3">
          {{
            'ADMIN.ASSETS.KEY_TELEMATICS.CREDENTIALS.MULTIPLE_ACCOUNTS'
              | translate
          }}
        </p>
        <ul class="list-none p-0 m-0 flex flex-col gap-2">
          @for (account of ktAccounts(); track account.id) {
            <li>
              <button
                type="button"
                class="account-item w-full flex items-center gap-3 px-4 py-3 cursor-pointer text-left transition-colors duration-150"
                (click)="onSelectAccount(account)"
              >
                <span
                  class="pi pi-building account-icon flex-shrink-0 transition-colors duration-150"
                ></span>
                <span
                  class="account-name flex-1 text-sm font-medium leading-tight"
                  >{{ account.owner.name ?? account.username }}</span
                >
                <span
                  class="pi pi-chevron-right account-chevron flex-shrink-0 text-xs transition-colors duration-150"
                ></span>
              </button>
            </li>
          }
        </ul>
        @if (loginError()) {
          <p-message severity="error" class="mt-3">{{
            loginError()
          }}</p-message>
        }
        <div class="mt-4">
          <p-button
            [label]="
              'ADMIN.ASSETS.KEY_TELEMATICS.BUTTONS.SIGN_IN_DIFFERENT'
                | translate
            "
            severity="secondary"
            [text]="true"
            size="small"
            (onClick)="reAuthenticate()"
          ></p-button>
        </div>
      }
    } @else {
      <form
        [formGroup]="credForm"
        class="flex flex-col gap-3"
        (ngSubmit)="$event.preventDefault()"
      >
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium" for="keys-username">{{
            'ADMIN.ASSETS.KEY_TELEMATICS.CREDENTIALS.FIELDS.USERNAME'
              | translate
          }}</label>
          <input
            id="keys-username"
            type="text"
            pInputText
            formControlName="username"
            class="w-full"
            [attr.placeholder]="
              'ADMIN.ASSETS.KEY_TELEMATICS.CREDENTIALS.FIELDS.USERNAME_PLACEHOLDER'
                | translate
            "
            autocomplete="username"
          />
        </div>

        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium" for="keys-password">{{
            'ADMIN.ASSETS.KEY_TELEMATICS.CREDENTIALS.FIELDS.PASSWORD'
              | translate
          }}</label>
          <p-password
            inputId="keys-password"
            formControlName="password"
            [feedback]="false"
            [toggleMask]="true"
            inputStyleClass="w-full"
            class="w-full"
            [placeholder]="
              'ADMIN.ASSETS.KEY_TELEMATICS.CREDENTIALS.FIELDS.PASSWORD_PLACEHOLDER'
                | translate
            "
            autocomplete="current-password"
          ></p-password>
        </div>
      </form>

      @if (loginError()) {
        <p-message severity="error">{{ loginError() }}</p-message>
      }
    }
  </div>
</ng-template>

<ng-template #clientContent>
  <div class="card pt-2">
    <div class="mb-4 p-2 flex justify-start items-center">
      <fa-icon [icon]="faSync" class="!text-[2.5rem]"></fa-icon>

      <div class="pl-6 flex-1">
        <div class="flex justify-between items-center">
          <h2 class="text-xl font-semibold m-0">
            {{ 'ADMIN.ASSETS.KEY_TELEMATICS.SELECT_CLIENT.TITLE' | translate }}
          </h2>
        </div>
        <span>
          {{
            'ADMIN.ASSETS.KEY_TELEMATICS.SELECT_CLIENT.DESCRIPTION' | translate
          }}
        </span>
      </div>
    </div>

    <app-dynamic-form
      [fields]="clientFormFields"
      [hideActions]="true"
      (formReady)="onFormReady($event)"
    ></app-dynamic-form>
  </div>
</ng-template>

<ng-template #depContent>
  <div class="card pt-2">
    <div class="mb-4 p-2 flex justify-start items-center">
      <fa-icon [icon]="faLink" class="!text-[2.5rem]"></fa-icon>

      <div class="pl-6 flex-1">
        <div class="flex justify-between items-center">
          <h2 class="text-xl font-semibold m-0">
            {{ 'ADMIN.ASSETS.KEY_TELEMATICS.MAP_DEPS.TITLE' | translate }}
          </h2>
        </div>
        <span>
          {{ 'ADMIN.ASSETS.KEY_TELEMATICS.MAP_DEPS.DESCRIPTION' | translate }}
        </span>
      </div>
    </div>

    @if (depFormFields.length === 0) {
      <p class="text-sm text-surface-500 m-0">
        {{ 'ADMIN.ASSETS.KEY_TELEMATICS.MAP_DEPS.NO_DEPS' | translate }}
      </p>
    } @else {
      <app-dynamic-form
        [fields]="depFormFields"
        [hideActions]="true"
        (formReady)="onDepFormReady($event)"
      ></app-dynamic-form>
    }
  </div>
</ng-template>

<!-- Dialog body \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->

@if (stage() === 'wizard') {
  <app-wizard
    [contentOnly]="true"
    [useWizardButtonsOnly]="true"
    [steps]="steps()"
    [showSteps]="false"
    [loading]="isLoggingIn()"
    (onCancel)="onWizardCancel()"
    (complete)="onWizardComplete()"
  ></app-wizard>
} @else if (stage() === 'confirm') {
  @if (isChecking()) {
    <div class="flex flex-col items-center justify-center py-10 gap-3">
      <p-progressSpinner class="w-12 h-12"></p-progressSpinner>
      <p class="text-sm m-0">
        {{ 'ADMIN.ASSETS.KEY_TELEMATICS.CONFIRM.CHECKING' | translate }}
      </p>
    </div>
  } @else if (syncPlan()) {
    <div class="flex flex-col gap-3 pt-2">
      <p class="text-sm m-0">
        {{ 'ADMIN.ASSETS.KEY_TELEMATICS.CONFIRM.REVIEW' | translate }}
      </p>

      <ul class="list-none m-0 p-0 flex flex-col gap-2">
        @for (check of syncPlan()!.entityChecks; track check.label) {
          <li class="flex items-start justify-between gap-3 py-1">
            <div class="flex items-center gap-2 text-sm">
              <span
                class="pi mt-0.5"
                [class.pi-exclamation-circle]="check.conflict"
                [class.pi-plus-circle]="
                  !check.conflict && check.existingId === null
                "
                [class.pi-pencil]="!check.conflict && check.existingId !== null"
                [class.text-red-500]="check.conflict"
                [class.text-green-500]="
                  !check.conflict && check.existingId === null
                "
                [class.text-yellow-500]="
                  !check.conflict && check.existingId !== null
                "
              ></span>
              <div class="flex flex-col">
                <div class="flex items-center gap-2">
                  <span class="font-medium capitalize">{{
                    check.type === 'simCard' ? 'SIM Card' : check.type
                  }}</span>
                  <span class="text-surface-500">{{ check.label }}</span>
                </div>
                @if (check.conflict) {
                  <span class="text-xs text-red-500 mt-0.5">
                    {{
                      'ADMIN.ASSETS.KEY_TELEMATICS.CONFIRM.OWNED_BY'
                        | translate
                    }}{{
                      check.conflictOwnerName
                        ? ': ' + check.conflictOwnerName
                        : ' ' +
                          ('ADMIN.ASSETS.KEY_TELEMATICS.CONFIRM.DIFFERENT_CLIENT'
                            | translate)
                    }}
                  </span>
                }
              </div>
            </div>
            <p-tag
              [value]="checkLabel(check)"
              [severity]="checkSeverity(check)"
            ></p-tag>
          </li>
        }
      </ul>
    </div>

    @if (hasConflicts) {
      <p-message severity="error" class="mt-3">
        {{ 'ADMIN.ASSETS.KEY_TELEMATICS.CONFIRM.CONFLICT_ERROR' | translate }}
      </p-message>
    }

    <div class="flex justify-end gap-2 pt-4">
      <p-button
        [label]="'SHARED.COMMON.BUTTONS.BACK' | translate"
        severity="secondary"
        [outlined]="true"
        icon="pi pi-arrow-left"
        (onClick)="onBackToWizard()"
      ></p-button>
      <p-button
        [label]="'SHARED.COMMON.BUTTONS.CANCEL' | translate"
        severity="secondary"
        (onClick)="onCancelSync()"
      ></p-button>
      <p-button
        [label]="'ADMIN.ASSETS.KEY_TELEMATICS.BUTTONS.PROCEED' | translate"
        icon="pi pi-sync"
        [disabled]="hasConflicts"
        (onClick)="onConfirmSync()"
      ></p-button>
    </div>
  } @else {
    <div class="flex flex-col items-center gap-3 py-6">
      <span class="pi pi-exclamation-triangle text-yellow-500 text-5xl"></span>
      <p class="text-sm text-center m-0">
        {{ 'ADMIN.ASSETS.KEY_TELEMATICS.CONFIRM.VERIFY_ERROR' | translate }}
      </p>
    </div>
    <div class="flex justify-end gap-2 pt-2">
      <p-button
        [label]="'SHARED.COMMON.BUTTONS.CANCEL' | translate"
        severity="secondary"
        (onClick)="onCancelSync()"
      ></p-button>
      <p-button
        [label]="
          'ADMIN.ASSETS.KEY_TELEMATICS.BUTTONS.PROCEED_ANYWAY' | translate
        "
        icon="pi pi-sync"
        (onClick)="onConfirmSync()"
      ></p-button>
    </div>
  }
} @else if (stage() === 'syncing') {
  <div class="flex flex-col items-center justify-center py-10 gap-3">
    <p-progressSpinner class="w-12 h-12"></p-progressSpinner>
    <p class="text-sm m-0">
      {{ 'ADMIN.ASSETS.KEY_TELEMATICS.SYNCING' | translate }}
    </p>
  </div>
} @else {
  <div class="flex flex-col items-center gap-4 py-6">
    @if (syncResult()?.success) {
      <span class="pi pi-check-circle text-green-500 text-5xl"></span>
    } @else {
      <span class="pi pi-times-circle text-red-500 text-5xl"></span>
    }
    <p class="text-sm text-center m-0">{{ syncResult()?.message }}</p>
  </div>

  <div class="flex justify-end pt-2">
    <p-button
      [label]="'SHARED.COMMON.BUTTONS.CLOSE' | translate"
      (onClick)="onClose()"
    ></p-button>
  </div>
}
`, styles: ["/* src/app/features/administration/components/assets/keys-sync-dialog/key-telematics-sync-dialog.component.scss */\n.account-item {\n  border: 1px solid var(--content-border-color);\n  border-radius: var(--border-radius);\n  background: var(--surface-0);\n  color: var(--text-color);\n}\n.account-item:hover {\n  border-color: var(--color-primary-color);\n  background: var(--primary-50, var(--surface-50));\n}\n.account-item:hover .account-icon,\n.account-item:hover .account-chevron {\n  color: var(--color-primary-color);\n}\n.account-item:focus-visible {\n  outline: 2px solid var(--color-primary-color);\n  outline-offset: 2px;\n}\n.account-icon {\n  color: var(--text-color-secondary);\n}\n.active-account-card {\n  border: 1px solid var(--content-border-color);\n  border-radius: var(--border-radius);\n  background: var(--surface-50, var(--surface-ground));\n}\n.active-account-icon {\n  color: var(--color-primary-color);\n}\n/*# sourceMappingURL=key-telematics-sync-dialog.component.css.map */\n"] }]
  }], () => [], { loginContent: [{
    type: ViewChild,
    args: ["loginContent"]
  }], clientContent: [{
    type: ViewChild,
    args: ["clientContent"]
  }], depContent: [{
    type: ViewChild,
    args: ["depContent"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KeyTelematicsSyncDialogComponent, { className: "KeyTelematicsSyncDialogComponent", filePath: "src/app/features/administration/components/assets/keys-sync-dialog/key-telematics-sync-dialog.component.ts", lineNumber: 117 });
})();
export {
  KeyTelematicsSyncDialogComponent
};
//# sourceMappingURL=chunk-KM3FO4L6.js.map
