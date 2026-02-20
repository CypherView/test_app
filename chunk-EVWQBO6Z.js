import {
  AnalyticalReportComponent
} from "./chunk-4XKFW6UE.js";
import "./chunk-DXDVPHIO.js";
import {
  Card,
  CardModule
} from "./chunk-ERWSOVMD.js";
import "./chunk-PVMHRDPC.js";
import {
  UtilityService
} from "./chunk-IDQPRALM.js";
import {
  AutoComplete,
  AutoCompleteModule,
  Message,
  MessageModule
} from "./chunk-T5WYQJMH.js";
import "./chunk-W5XLQNKH.js";
import {
  DatePicker,
  DatePickerModule
} from "./chunk-3ELTUYPI.js";
import "./chunk-IM6TEFQQ.js";
import "./chunk-PAFIW2EK.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  Select,
  SelectModule
} from "./chunk-4CAIP3KE.js";
import {
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-BJMVTXFZ.js";
import "./chunk-2UAXSVOA.js";
import {
  Button,
  ButtonModule
} from "./chunk-PBS4GE25.js";
import "./chunk-YL4UBWIM.js";
import {
  AssetsService,
  AuthDataService,
  ClientsService,
  CommonModule,
  DataService,
  DatePipe,
  DecimalPipe,
  HistoryService,
  HttpClient,
  HttpHeaders,
  isDefined,
  isNullOrUndefined
} from "./chunk-UNWLID6Q.js";
import {
  Component,
  Injectable,
  catchError,
  computed,
  forkJoin,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
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
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate4,
  ɵɵtextInterpolate7,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4KHPVNTA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/features/development/services/dual-api.service.ts
var DualApiService = class _DualApiService {
  http = inject(HttpClient);
  config = {
    cypherViewUrl: "https://v1-test-api.cypherview.net",
    keyApiUrl: "https://api.us1.kt1.io/fleet/v2",
    cypherViewAuth: {
      username: "",
      // Will be set from user input or environment
      password: ""
    },
    keyApiAuth: {
      username: "",
      // Will be set from user input or environment
      password: ""
    }
  };
  cypherViewToken = null;
  keyApiToken = null;
  /**
   * Authenticate with CypherView API
   */
  authenticateCypherView() {
    const authUrl = `${this.config.cypherViewUrl}/auth/signin`;
    return this.http.post(authUrl, {
      username: this.config.cypherViewAuth.username,
      password: this.config.cypherViewAuth.password
    }).pipe(map((response) => {
      const token = response.accessToken ?? response.idToken;
      if (isNullOrUndefined(token)) {
        throw new Error("No access token received from CypherView");
      }
      this.cypherViewToken = token;
      return token;
    }), catchError((error) => {
      throw error;
    }));
  }
  /**
   * Authenticate with Key API
   */
  authenticateKeyApi() {
    const authUrl = `${this.config.keyApiUrl}/auth/signin`;
    return this.http.post(authUrl, {
      username: this.config.keyApiAuth.username,
      password: this.config.keyApiAuth.password
    }).pipe(map((response) => {
      const token = response.accessToken ?? response.idToken;
      if (isNullOrUndefined(token)) {
        throw new Error("No access token received from Key API");
      }
      this.keyApiToken = token;
      return token;
    }), catchError((error) => {
      console.error("\u{1F510} Auth error details:", {
        status: error.status,
        statusText: error.statusText,
        url: authUrl,
        username: this.config.keyApiAuth.username,
        message: error.message
      });
      if (error.status === 401) {
        console.error("\u{1F6AB} Invalid credentials for Key API - check username/password");
      } else if (error.status === 404) {
        console.error("\u{1F6AB} Key API authentication endpoint not found");
      }
      throw error;
    }));
  }
  /**
   * Get telemetry data from CypherView API
   */
  getCypherViewTelemetry(vehicleId, startDate, endDate, limit) {
    const url = `/api/v2/history/telemetry/${vehicleId}`;
    const params = {
      start: startDate,
      end: endDate
    };
    if (isDefined(limit))
      params.limit = limit.toString();
    return this.http.get(url, { params }).pipe(map((response) => {
      return response.items ?? [];
    }), catchError((error) => {
      console.error("\u274C Error details:", {
        status: error.status,
        statusText: error.statusText,
        message: error.message,
        url: error.url
      });
      return of([]);
    }));
  }
  /**
   * Search for a vehicle in Key API by device name
   */
  searchKeyApiVehicleByDeviceName(deviceName) {
    const authObs = isDefined(this.keyApiToken) ? of(this.keyApiToken) : this.authenticateKeyApi();
    return authObs.pipe(switchMap((token) => {
      const url = `${this.config.keyApiUrl}/entities/assets`;
      const params = {
        limit: "100",
        search: deviceName
      };
      const headers = new HttpHeaders({
        "x-access-token": token,
        "Content-Type": "application/json"
      });
      return this.http.get(url, { headers, params });
    }), map((response) => {
      if (isNullOrUndefined(response["items"]) || !Array.isArray(response["items"])) {
        return null;
      }
      const matchingVehicle = response["items"].find((vehicle) => {
        const vehicleDeviceName = vehicle.device?.name ?? vehicle.name ?? "";
        return vehicleDeviceName === deviceName;
      });
      if (isDefined(matchingVehicle)) {
        return matchingVehicle.id ?? null;
      } else {
        console.warn("\u26A0\uFE0F No matching vehicle found for device name:", deviceName);
        return null;
      }
    }), catchError((error) => {
      console.error("\u{1F4CD} Search error details:", {
        status: error.status,
        statusText: error.statusText,
        message: error.message,
        url: error.url,
        deviceName
      });
      if (error.status === 401 || error.status === 403) {
        this.keyApiToken = null;
      }
      return of(null);
    }));
  }
  /**
   * Get telemetry data from Key API
   * First tries the CypherView vehicle ID directly, then falls back to device name mapping if that fails
   */
  getKeyApiTelemetry(cypherViewVehicleId, startDate, endDate, limit, deviceName) {
    return this.fetchKeyApiTelemetryData(cypherViewVehicleId, startDate, endDate, limit).pipe(catchError((error) => {
      if ((error.status === 404 || error.status === 401) && isDefined(deviceName)) {
        console.warn("\u26A0\uFE0F CypherView vehicle ID failed on Key API, trying device name mapping...");
        return this.searchKeyApiVehicleByDeviceName(deviceName).pipe(switchMap((keyVehicleId) => {
          if (isNullOrUndefined(keyVehicleId)) {
            console.error("\u274C Could not find matching vehicle in Key API for device:", deviceName);
            return of([]);
          }
          return this.fetchKeyApiTelemetryData(keyVehicleId, startDate, endDate, limit);
        }), catchError(() => {
          return of([]);
        }));
      } else {
        console.error("\u274C Key API telemetry failed and no device name available for mapping");
        return of([]);
      }
    }));
  }
  /**
   * Fetch telemetry data from Key API using a specific vehicle ID
   */
  fetchKeyApiTelemetryData(keyVehicleId, startDate, endDate, limit) {
    const authObs = isDefined(this.keyApiToken) ? of(this.keyApiToken) : this.authenticateKeyApi();
    return authObs.pipe(switchMap((token) => {
      const url = `${this.config.keyApiUrl}/data/history/telemetry/${keyVehicleId}`;
      const params = {
        start: startDate,
        end: endDate
      };
      if (isDefined(limit))
        params["limit"] = limit.toString();
      const headers = new HttpHeaders({
        "x-access-token": token,
        "Content-Type": "application/json"
      });
      return this.http.get(url, { headers, params });
    }), map((response) => {
      return response.items ?? [];
    }), catchError((error) => {
      console.error("\u{1F4CD} Error details:", {
        status: error.status,
        statusText: error.statusText,
        message: error.message,
        url: error.url,
        vehicleId: keyVehicleId
      });
      if (error.status === 404) {
        console.warn("\u26A0\uFE0F Vehicle ID not found in Key API:", keyVehicleId);
      }
      if (error.status === 401 || error.status === 403) {
        this.keyApiToken = null;
      }
      return of([]);
    }));
  }
  /**
   * Set authentication credentials
   */
  setCredentials(cypherViewAuth, keyApiAuth) {
    this.config.cypherViewAuth = cypherViewAuth;
    this.config.keyApiAuth = keyApiAuth;
    this.cypherViewToken = null;
    this.keyApiToken = null;
  }
  /**
   * Get events data from Key API
   */
  getKeyApiEvents(cypherViewVehicleId, startDate, endDate, limit, deviceName) {
    return this.fetchKeyApiEventsData(cypherViewVehicleId, startDate, endDate, limit).pipe(catchError((error) => {
      if ((error.status === 404 || error.status === 401) && isDefined(deviceName)) {
        console.warn("\u26A0\uFE0F CypherView vehicle ID failed on Key API events, trying device name mapping...");
        return this.searchKeyApiVehicleByDeviceName(deviceName).pipe(switchMap((keyVehicleId) => {
          if (isNullOrUndefined(keyVehicleId)) {
            console.error("\u274C Could not find matching vehicle in Key API for events device:", deviceName);
            return of([]);
          }
          return this.fetchKeyApiEventsData(keyVehicleId, startDate, endDate, limit);
        }), catchError((searchError) => {
          console.error("\u274C Device name mapping for events also failed:", searchError);
          return of([]);
        }));
      } else {
        console.error("\u274C Key API events failed and no device name available for mapping");
        return of([]);
      }
    }));
  }
  /**
   * Fetch events data from Key API using a specific vehicle ID
   */
  fetchKeyApiEventsData(keyVehicleId, startDate, endDate, limit) {
    const authObs = isDefined(this.keyApiToken) ? of(this.keyApiToken) : this.authenticateKeyApi();
    return authObs.pipe(switchMap((token) => {
      const url = `${this.config.keyApiUrl}/data/history/events/${keyVehicleId}`;
      const params = {
        start: startDate,
        end: endDate
      };
      if (isDefined(limit))
        params["limit"] = limit.toString();
      const headers = new HttpHeaders({
        "x-access-token": token,
        "Content-Type": "application/json"
      });
      return this.http.get(url, { headers, params });
    }), map((response) => {
      return response.items ?? [];
    }), catchError((error) => {
      console.error("\u{1F4CD} Events error details:", {
        status: error.status,
        statusText: error.statusText,
        message: error.message,
        url: error.url,
        vehicleId: keyVehicleId
      });
      if (error.status === 404) {
        console.warn("\u26A0\uFE0F Vehicle ID not found in Key API events:", keyVehicleId);
      }
      if (error.status === 401 || error.status === 403) {
        this.keyApiToken = null;
      }
      return of([]);
    }));
  }
  /**
   * Get trips data from Key API
   */
  getKeyApiTrips(cypherViewVehicleId, startDate, endDate, limit, deviceName) {
    return this.fetchKeyApiTripsData(cypherViewVehicleId, startDate, endDate, limit).pipe(catchError((error) => {
      if ((error.status === 404 || error.status === 401) && isDefined(deviceName)) {
        console.warn("\u26A0\uFE0F CypherView vehicle ID failed on Key API trips, trying device name mapping...");
        return this.searchKeyApiVehicleByDeviceName(deviceName).pipe(switchMap((keyVehicleId) => {
          if (isNullOrUndefined(keyVehicleId)) {
            console.error("\u274C Could not find matching vehicle in Key API for trips device:", deviceName);
            return of([]);
          }
          return this.fetchKeyApiTripsData(keyVehicleId, startDate, endDate, limit);
        }), catchError((searchError) => {
          console.error("\u274C Device name mapping for trips also failed:", searchError);
          return of([]);
        }));
      } else {
        console.error("\u274C Key API trips failed and no device name available for mapping");
        return of([]);
      }
    }));
  }
  /**
   * Fetch trips data from Key API using a specific vehicle ID
   */
  fetchKeyApiTripsData(keyVehicleId, startDate, endDate, limit) {
    const authObs = isDefined(this.keyApiToken) ? of(this.keyApiToken) : this.authenticateKeyApi();
    return authObs.pipe(switchMap((token) => {
      const url = `${this.config.keyApiUrl}/data/history/trips/${keyVehicleId}`;
      const params = {
        start: startDate,
        end: endDate
      };
      if (isDefined(limit))
        params["limit"] = limit.toString();
      const headers = new HttpHeaders({
        "x-access-token": token,
        "Content-Type": "application/json"
      });
      return this.http.get(url, { headers, params });
    }), map((response) => {
      return response.items ?? [];
    }), catchError((error) => {
      console.error("\u{1F4CD} Trips error details:", {
        status: error.status,
        statusText: error.statusText,
        message: error.message,
        url: error.url,
        vehicleId: keyVehicleId
      });
      if (error.status === 404) {
        console.warn("\u26A0\uFE0F Vehicle ID not found in Key API trips:", keyVehicleId);
      }
      if (error.status === 401 || error.status === 403) {
        this.keyApiToken = null;
      }
      return of([]);
    }));
  }
  /**
   * Test authentication for both APIs
   */
  testAuthentication() {
    const cypherViewTest = isDefined(this.cypherViewToken) ? of(true) : this.authenticateCypherView().pipe(map(() => true), catchError(() => of(false)));
    const keyApiTest = this.authenticateKeyApi().pipe(map(() => true), catchError(() => of(false)));
    return forkJoin({
      cypherView: cypherViewTest,
      keyApi: keyApiTest
    });
  }
  static \u0275fac = function DualApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DualApiService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DualApiService, factory: _DualApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DualApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/development/services/telemetry-comparison.service.ts
var TelemetryComparisonService = class _TelemetryComparisonService {
  historyService = inject(HistoryService);
  dataService = inject(DataService);
  dualApiService = inject(DualApiService);
  getTelemetryComparison(vehicleId, startDate, endDate, limit, deviceName) {
    const cypherViewData$ = this.historyService.getTelemetryHistory(vehicleId, startDate.toISOString(), endDate.toISOString(), limit).pipe(map((response) => response.items ?? []), catchError((error) => {
      console.error("\u274C CypherView telemetry error:", error);
      return of([]);
    }));
    const keyData$ = this.dualApiService.getKeyApiTelemetry(vehicleId, startDate.toISOString(), endDate.toISOString(), limit, deviceName);
    return forkJoin({
      testData: cypherViewData$.pipe(map((items) => this.mapToTelemetryRecords(items))),
      prodData: keyData$.pipe(map((items) => this.mapToTelemetryRecords(items)))
    }).pipe(map(({ testData, prodData }) => {
      const alignedRecords = this.alignRecordsByTimestamp(testData, prodData);
      const summary = this.calculateSummary(alignedRecords);
      return {
        alignedRecords,
        summary,
        testRecords: testData,
        prodRecords: prodData
      };
    }), catchError((error) => {
      console.error("Error fetching telemetry comparison:", error);
      return of({
        alignedRecords: [],
        summary: this.getEmptySummary(),
        testRecords: [],
        prodRecords: []
      });
    }));
  }
  mapToTelemetryRecords(items) {
    return items.map((item) => __spreadProps(__spreadValues({}, item), {
      timestamp: item.date ?? item["timestamp"] ?? item.received
    }));
  }
  setKeyApiCredentials(username, password) {
    this.dualApiService.setCredentials(
      { username: "", password: "" },
      // CypherView uses existing auth
      { username, password }
    );
  }
  // For now, we'll simulate comparison by fetching the same data twice
  // TODO: Replace with actual test/prod API calls when Key API is available
  simulateEnvironmentDifferences(records, environment) {
    if (environment === "test") {
      return records;
    }
    return records.map((record) => {
      const modifiedRecord = __spreadValues({}, record);
      if (modifiedRecord.telemetry) {
        const telemetry = __spreadValues({}, modifiedRecord.telemetry);
        Object.keys(telemetry).forEach((key) => {
          if (key.toLowerCase().includes("speed") && typeof telemetry[key] === "object") {
            const speedData = telemetry[key];
            if (speedData.value !== void 0) {
              speedData.value = speedData.value + Math.floor(Math.random() * 3);
            }
          }
        });
        modifiedRecord.telemetry = telemetry;
      }
      if (Math.random() > 0.8) {
        modifiedRecord.zones = [];
      }
      return modifiedRecord;
    });
  }
  generateMockData(environment, vehicleId, startDate, endDate, limit) {
    const records = [];
    const duration = endDate.getTime() - startDate.getTime();
    const recordCount = Math.min(limit ?? 20, 20);
    for (let i = 0; i < recordCount; i++) {
      const timestamp = new Date(startDate.getTime() + duration * i / recordCount);
      const record = {
        timestamp: timestamp.toISOString(),
        received: timestamp.toISOString(),
        active: true,
        location: {
          lat: -26.2041 + (Math.random() - 0.5) * 0.01,
          lon: 28.0473 + (Math.random() - 0.5) * 0.01,
          accuracy: environment === "test" ? 0 : Math.floor(Math.random() * 50),
          gc: {
            country: "South Africa",
            city: "Johannesburg"
          }
        },
        zones: [{ id: "123", name: "Test Zone" }],
        telemetry: {
          speed: Math.floor(Math.random() * 120),
          ignition: true,
          fuel_level: 80 + Math.floor(Math.random() * 20),
          battery_voltage: 12.5 + Math.random() * 2
        },
        origin: {
          id: vehicleId,
          name: `Vehicle ${vehicleId}`
        }
      };
      if (environment === "prod" && record.telemetry) {
        record.telemetry["speed"] = (Number(record.telemetry["speed"]) || 0) + Math.floor(Math.random() * 5);
        if (Math.random() > 0.8) {
          delete record.zones;
        }
      }
      records.push(record);
    }
    return records;
  }
  alignRecordsByTimestamp(testRecords, prodRecords, toleranceSeconds = 2) {
    const aligned = [];
    const usedProdIndices = /* @__PURE__ */ new Set();
    const parseTimestamp = (record) => {
      if (!record)
        return null;
      const tsStr = record.timestamp ?? record.received;
      if (isNullOrUndefined(tsStr))
        return null;
      try {
        return new Date(tsStr.replace("Z", "+00:00"));
      } catch {
        return null;
      }
    };
    const sortedTestRecords = [...testRecords].sort((a, b) => {
      const aTime = parseTimestamp(a);
      const bTime = parseTimestamp(b);
      if (!aTime || !bTime)
        return 0;
      return aTime.getTime() - bTime.getTime();
    });
    const sortedProdRecords = [...prodRecords].map((record, index) => ({ record, originalIndex: index })).sort((a, b) => {
      const aTime = parseTimestamp(a.record);
      const bTime = parseTimestamp(b.record);
      if (!aTime || !bTime)
        return 0;
      return aTime.getTime() - bTime.getTime();
    });
    sortedTestRecords.forEach((testRecord, index) => {
      const testTime = parseTimestamp(testRecord);
      let bestMatch = null;
      let bestDiff = Infinity;
      let bestIdx = null;
      if (testTime) {
        sortedProdRecords.forEach(({ record: prodRecord, originalIndex }) => {
          if (usedProdIndices.has(originalIndex))
            return;
          const prodTime = parseTimestamp(prodRecord);
          if (prodTime) {
            const diff = Math.abs((testTime.getTime() - prodTime.getTime()) / 1e3);
            if (diff <= toleranceSeconds && diff < bestDiff) {
              bestMatch = prodRecord;
              bestDiff = diff;
              bestIdx = originalIndex;
            }
          }
        });
      }
      if (isDefined(bestMatch) && bestIdx !== null) {
        usedProdIndices.add(bestIdx);
        aligned.push({
          testRecord,
          prodRecord: bestMatch,
          index,
          timestampDiff: bestDiff
        });
      } else {
        aligned.push({
          testRecord,
          prodRecord: null,
          index,
          timestampDiff: void 0
        });
      }
    });
    sortedProdRecords.forEach(({ record: prodRecord, originalIndex }) => {
      if (!usedProdIndices.has(originalIndex)) {
        aligned.push({
          testRecord: null,
          prodRecord,
          index: aligned.length,
          timestampDiff: void 0
        });
      }
    });
    return aligned;
  }
  calculateSummary(alignedRecords) {
    const bothPresent = alignedRecords.filter((r) => r.testRecord && r.prodRecord).length;
    const testOnly = alignedRecords.filter((r) => isDefined(r.testRecord) && !r.prodRecord).length;
    const prodOnly = alignedRecords.filter((r) => isNullOrUndefined(r.testRecord) && isDefined(r.prodRecord)).length;
    const totalAligned = alignedRecords.length;
    const matchRate = totalAligned > 0 ? bothPresent / totalAligned * 100 : 0;
    let qualityStatus = "\u{1F534} Poor";
    if (matchRate >= 95)
      qualityStatus = "\u{1F7E2} Excellent";
    else if (matchRate >= 85)
      qualityStatus = "\u{1F7E1} Good";
    else if (matchRate >= 70)
      qualityStatus = "\u{1F7E0} Fair";
    return {
      totalAligned,
      bothPresent,
      testOnly,
      prodOnly,
      matchRate,
      qualityStatus
    };
  }
  getEmptySummary() {
    return {
      totalAligned: 0,
      bothPresent: 0,
      testOnly: 0,
      prodOnly: 0,
      matchRate: 0,
      qualityStatus: "\u274C No Data"
    };
  }
  formatTimestampForDisplay(timestamp) {
    if (!timestamp)
      return "";
    try {
      const dt = new Date(timestamp);
      return dt.toLocaleString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
    } catch {
      return timestamp;
    }
  }
  extractAllFields(record) {
    if (!record)
      return {};
    const fields = {};
    fields["timestamp"] = this.formatTimestampForDisplay(record.timestamp ?? record.received ?? "");
    fields["active"] = String(record.active ?? "");
    const zones = record.zones ?? [];
    if (Array.isArray(zones)) {
      const zoneNames = zones.map((z) => z.name).filter(Boolean);
      const zoneIds = zones.map((z) => z.id).filter(Boolean);
      fields["zones.names"] = zoneNames.join(", ");
      fields["zones.ids"] = zoneIds.join(", ");
      fields["zones.count"] = String(zones.length);
    }
    const location = record.location ?? {};
    Object.entries(location).forEach(([key, value]) => {
      if (key === "gc" && typeof value === "object") {
        Object.entries(value).forEach(([gcKey, gcValue]) => {
          fields[`location.gc.${gcKey}`] = String(gcValue ?? "");
        });
      } else if (["lat", "latitude", "lon", "longitude"].includes(key) && value != null) {
        try {
          fields[`location.${key}`] = Number(value).toFixed(6);
        } catch {
          fields[`location.${key}`] = String(value ?? "");
        }
      } else {
        fields[`location.${key}`] = String(value ?? "");
      }
    });
    const telemetry = record.telemetry ?? {};
    Object.entries(telemetry).forEach(([key, value]) => {
      let fieldName = key;
      if (key.startsWith("cvc_")) {
        fieldName = key.substring(4);
      } else if (key.startsWith("cve_")) {
        fieldName = key.substring(4);
      } else if (key.startsWith("cv_")) {
        fieldName = key.substring(3);
      }
      fields[`telemetry.${fieldName}`] = String(value ?? "");
    });
    if (!record.telemetry) {
      const commonTelemetryFields = [
        "ignition",
        "priority",
        "eventId",
        "moving",
        "fuel_level",
        "engine_temp",
        "battery_voltage",
        "satellites",
        "hdop",
        "pdop",
        "gsm_signal",
        "total_mileage",
        "vehicle_speed",
        "accelerator_pedal_position",
        "driver_id",
        "fuel_consumed",
        "output_01",
        "output_02",
        "digital_01",
        "digital_02",
        "speed",
        "heading",
        "direction"
      ];
      commonTelemetryFields.forEach((field) => {
        if (field in record) {
          fields[field] = String(record[field] ?? "");
        }
      });
    }
    return fields;
  }
  compareFields(testRecord, prodRecord) {
    const testFields = this.extractAllFields(testRecord);
    const prodFields = this.extractAllFields(prodRecord);
    const allFields = /* @__PURE__ */ new Set([
      ...Object.keys(testFields),
      ...Object.keys(prodFields)
    ]);
    const priorityFields = [
      "timestamp",
      "active",
      "zones.count",
      "zones.names",
      "zones.ids"
    ];
    const sortedFields = [
      ...priorityFields.filter((f) => allFields.has(f)),
      ...Array.from(allFields).filter((f) => !priorityFields.includes(f)).sort((a, b) => a.localeCompare(b))
    ];
    return sortedFields.map((field) => {
      const testValue = testFields[field] || "";
      const prodValue = prodFields[field] || "";
      let status;
      let displayTest = testValue;
      let displayProd = prodValue;
      const normalizeValue = (val) => {
        if (!val)
          return "";
        try {
          return String(parseFloat(val));
        } catch {
          return val.trim();
        }
      };
      const testNormalized = normalizeValue(testValue);
      const prodNormalized = normalizeValue(prodValue);
      if (!testValue && prodValue) {
        status = "missing_test";
        displayTest = "\u274C MISSING";
      } else if (testValue && !prodValue) {
        status = "missing_prod";
        displayProd = "\u274C MISSING";
      } else if (testNormalized !== prodNormalized && testValue && prodValue) {
        status = "different";
        displayTest = `\u{1F539} ${testValue}`;
        displayProd = `\u{1F538} ${prodValue}`;
      } else if (testNormalized === prodNormalized && testValue) {
        status = "identical";
        displayTest = `\u2705 ${testValue}`;
        displayProd = `\u2705 ${prodValue}`;
      } else {
        status = "identical";
      }
      return {
        field,
        testValue,
        prodValue,
        status,
        displayTest,
        displayProd
      };
    });
  }
  static \u0275fac = function TelemetryComparisonService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TelemetryComparisonService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TelemetryComparisonService, factory: _TelemetryComparisonService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TelemetryComparisonService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/development/services/events.service.ts
var EventsService = class _EventsService {
  historyService = inject(HistoryService);
  /**
   * Get events for a specific asset within a date range
   * Wraps the HistoryService.getEventHistory method
   */
  getEvents(assetId, startDate, endDate, limit) {
    return this.historyService.getEventHistory(assetId, startDate, endDate, limit);
  }
  static \u0275fac = function EventsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EventsService, factory: _EventsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/development/services/events-comparison.service.ts
var EventsComparisonService = class _EventsComparisonService {
  eventsService = inject(EventsService);
  dualApiService = inject(DualApiService);
  getEventsComparison(vehicleId, startDate, endDate, limit, deviceName) {
    const cypherViewEvents$ = this.eventsService.getEvents(vehicleId, startDate.toISOString(), endDate.toISOString(), limit).pipe(map((response) => response.items ?? []), catchError((error) => {
      console.error("\u274C CypherView events error:", error);
      return of([]);
    }));
    const keyEvents$ = this.dualApiService.getKeyApiEvents(vehicleId, startDate.toISOString(), endDate.toISOString(), limit, deviceName);
    return forkJoin({
      testData: cypherViewEvents$.pipe(map((items) => this.mapToEventRecords(items))),
      prodData: keyEvents$.pipe(map((items) => this.mapToEventRecords(items)))
    }).pipe(map(({ testData, prodData }) => {
      const alignedRecords = this.alignRecordsByTimestamp(testData, prodData);
      const summary = this.calculateSummary(alignedRecords);
      return {
        alignedRecords,
        summary,
        testRecords: testData,
        prodRecords: prodData
      };
    }), catchError((error) => {
      console.error("Error fetching events comparison:", error);
      return of({
        alignedRecords: [],
        summary: this.getEmptySummary(),
        testRecords: [],
        prodRecords: []
      });
    }));
  }
  mapToEventRecords(items) {
    return items.map((item) => __spreadProps(__spreadValues({}, item), {
      timestamp: item.eventDate ?? item["eventTime"] ?? item["timestamp"] ?? item["received"] ?? item["date"]
    }));
  }
  setKeyApiCredentials(username, password) {
    this.dualApiService.setCredentials(
      { username: "", password: "" },
      // CypherView uses existing auth
      { username, password }
    );
  }
  alignRecordsByTimestamp(testRecords, prodRecords, toleranceSeconds = 2) {
    const aligned = [];
    const usedProdIndices = /* @__PURE__ */ new Set();
    const parseTimestamp = (record) => {
      if (!record)
        return null;
      const tsStr = record.timestamp ?? record["eventDate"] ?? record.eventTime ?? record.received;
      if (isNullOrUndefined(tsStr))
        return null;
      try {
        return new Date(String(tsStr).replace("Z", "+00:00"));
      } catch {
        return null;
      }
    };
    const sortedTestRecords = [...testRecords].sort((a, b) => {
      const aTime = parseTimestamp(a);
      const bTime = parseTimestamp(b);
      if (!aTime || !bTime)
        return 0;
      return aTime.getTime() - bTime.getTime();
    });
    const sortedProdRecords = [...prodRecords].map((record, index) => ({ record, originalIndex: index })).sort((a, b) => {
      const aTime = parseTimestamp(a.record);
      const bTime = parseTimestamp(b.record);
      if (!aTime || !bTime)
        return 0;
      return aTime.getTime() - bTime.getTime();
    });
    sortedTestRecords.forEach((testRecord, index) => {
      const testTime = parseTimestamp(testRecord);
      let bestMatch = null;
      let bestDiff = Infinity;
      let bestIdx = null;
      if (testTime) {
        sortedProdRecords.forEach(({ record: prodRecord, originalIndex }) => {
          if (usedProdIndices.has(originalIndex))
            return;
          const prodTime = parseTimestamp(prodRecord);
          if (prodTime) {
            const diff = Math.abs((testTime.getTime() - prodTime.getTime()) / 1e3);
            if (diff <= toleranceSeconds && diff < bestDiff) {
              bestMatch = prodRecord;
              bestDiff = diff;
              bestIdx = originalIndex;
            }
          }
        });
      }
      if (isDefined(bestMatch) && bestIdx !== null) {
        usedProdIndices.add(bestIdx);
        aligned.push({
          testRecord,
          prodRecord: bestMatch,
          index,
          timestampDiff: bestDiff
        });
      } else {
        aligned.push({
          testRecord,
          prodRecord: null,
          index,
          timestampDiff: void 0
        });
      }
    });
    sortedProdRecords.forEach(({ record: prodRecord, originalIndex }) => {
      if (!usedProdIndices.has(originalIndex)) {
        aligned.push({
          testRecord: null,
          prodRecord,
          index: aligned.length,
          timestampDiff: void 0
        });
      }
    });
    return aligned;
  }
  calculateSummary(alignedRecords) {
    const bothPresent = alignedRecords.filter((r) => isDefined(r.testRecord) && isDefined(r.prodRecord)).length;
    const testOnly = alignedRecords.filter((r) => isDefined(r.testRecord) && !isDefined(r.prodRecord)).length;
    const prodOnly = alignedRecords.filter((r) => !isDefined(r.testRecord) && isDefined(r.prodRecord)).length;
    const totalAligned = alignedRecords.length;
    const matchRate = totalAligned > 0 ? bothPresent / totalAligned * 100 : 0;
    let qualityStatus = "\u{1F534} Poor";
    if (matchRate >= 95)
      qualityStatus = "\u{1F7E2} Excellent";
    else if (matchRate >= 85)
      qualityStatus = "\u{1F7E1} Good";
    else if (matchRate >= 70)
      qualityStatus = "\u{1F7E0} Fair";
    return {
      totalAligned,
      bothPresent,
      testOnly,
      prodOnly,
      matchRate,
      qualityStatus
    };
  }
  getEmptySummary() {
    return {
      totalAligned: 0,
      bothPresent: 0,
      testOnly: 0,
      prodOnly: 0,
      matchRate: 0,
      qualityStatus: "\u274C No Data"
    };
  }
  formatTimestampForDisplay(timestamp) {
    if (!timestamp)
      return "";
    try {
      const dt = new Date(timestamp);
      return dt.toLocaleString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
    } catch {
      return timestamp;
    }
  }
  isTimestamp(value) {
    if (!value)
      return false;
    try {
      const dt = new Date(value);
      return !isNaN(dt.getTime()) && (value.includes("T") || value.includes("Z") || !!RegExp(/\d{4}-\d{2}-\d{2}/).exec(value));
    } catch {
      return false;
    }
  }
  setDateField(fields, key, value) {
    let str;
    if (value == null)
      str = "";
    else if (typeof value === "object")
      str = JSON.stringify(value);
    else if (typeof value === "string" || typeof value === "number" || typeof value === "boolean")
      str = String(value);
    else
      str = JSON.stringify(value);
    fields[key] = this.isTimestamp(str) ? this.formatTimestampForDisplay(str) : str;
  }
  setIdNameField(fields, key, value) {
    fields[key] = isDefined(value) ? value.name ?? value.id ?? JSON.stringify(value) : "";
  }
  setCountField(fields, key, value) {
    const arr = value ?? [];
    fields[key] = Array.isArray(arr) ? String(arr.length) : "0";
  }
  extractLocationFields(fields, location) {
    if (!isDefined(location) || typeof location !== "object")
      return;
    const safe = (k) => {
      const v = location?.[k];
      if (v == null)
        return "";
      if (typeof v === "object")
        return JSON.stringify(v);
      if (typeof v === "string" || typeof v === "number" || typeof v === "boolean")
        return String(v);
      return JSON.stringify(v);
    };
    if (location["lat"] != null) {
      try {
        fields["location.latitude"] = Number(location["lat"]).toFixed(6);
      } catch {
        fields["location.latitude"] = String(safe("lat"));
      }
    }
    if (location["lon"] != null) {
      try {
        fields["location.longitude"] = Number(location["lon"]).toFixed(6);
      } catch {
        fields["location.longitude"] = String(safe("lon"));
      }
    }
    ["speed", "heading", "altitude", "accuracy", "age", "address"].forEach((k) => {
      if (location[k] != null)
        fields[`location.${k}`] = String(safe(k));
    });
    const gc = location["gc"] ?? {};
    if (isDefined(gc) && typeof gc === "object") {
      const gcObj = gc;
      fields["location.gc.ct"] = String(gcObj["ct"] ?? "");
      fields["location.gc.pr"] = String(gcObj["pr"] ?? "");
      fields["location.gc.tw"] = String(gcObj["tw"] ?? "");
    }
  }
  extractTelemetryFields(fields, telemetry) {
    if (!isDefined(telemetry) || typeof telemetry !== "object")
      return;
    const telemetryData = telemetry["telemetry"] ?? {};
    if (isDefined(telemetryData) && typeof telemetryData === "object") {
      Object.entries(telemetryData).forEach(([key, value]) => {
        if (value == null)
          return;
        const stringValue = typeof value === "object" ? JSON.stringify(value) : String(value);
        fields[`telemetry.${key}`] = key === "tco_timestamp" && this.isTimestamp(stringValue) ? this.formatTimestampForDisplay(stringValue) : stringValue;
      });
    }
    const zones = telemetry["zones"] ?? [];
    if (Array.isArray(zones)) {
      const zoneNames = zones.map((z) => z.name).filter(Boolean);
      const zoneIds = zones.map((z) => z.id).filter(Boolean);
      fields["zones.names"] = zoneNames.join(", ");
      fields["zones.ids"] = zoneIds.join(", ");
      fields["zones.count"] = String(zones.length);
    } else {
      fields["zones.names"] = "";
      fields["zones.ids"] = "";
      fields["zones.count"] = "0";
    }
    if (telemetry["active"] != null) {
      fields["active"] = String(telemetry["active"] ?? "");
    }
    const timestamp = telemetry["date"] ?? telemetry["received"] ?? "";
    if (isDefined(timestamp)) {
      this.setDateField(fields, "timestamp", timestamp);
    }
  }
  extractAllFields(record) {
    if (!record)
      return {};
    const fields = {};
    fields["id"] = String(record["id"] ?? record.eventId ?? "");
    fields["type"] = String(record["type"] ?? record.eventType ?? "");
    fields["eventClass"] = String(record["eventClass"] ?? "");
    fields["eventType"] = String(record["eventType"] ?? "");
    const eventTime = record["eventDate"] ?? record.eventTime ?? record.timestamp ?? "";
    this.setDateField(fields, "eventDate", eventTime);
    this.setDateField(fields, "creationDate", record["creationDate"]);
    this.setDateField(fields, "modifiedDate", record["modifiedDate"]);
    this.setIdNameField(fields, "owner", record["owner"]);
    this.setIdNameField(fields, "origin", record["origin"]);
    this.setCountField(fields, "linked.count", record["linked"]);
    this.setCountField(fields, "alerts.count", record["alerts"]);
    this.setCountField(fields, "notify.count", record["notify"]);
    const details = record["details"] ?? {};
    const telemetry = details["telemetry"] ?? {};
    const location = telemetry["location"] ?? record["location"] ?? {};
    this.extractLocationFields(fields, location);
    this.extractTelemetryFields(fields, telemetry);
    const asset = details["asset"] ?? record["asset"];
    if (isDefined(asset)) {
      fields["asset.name"] = asset.name ?? "";
      fields["asset.id"] = asset.id ?? "";
    }
    fields["priority"] = String(record.priority ?? "");
    return fields;
  }
  compareFields(testRecord, prodRecord) {
    const testFields = this.extractAllFields(testRecord);
    const prodFields = this.extractAllFields(prodRecord);
    const allFields = /* @__PURE__ */ new Set([
      ...Object.keys(testFields),
      ...Object.keys(prodFields)
    ]);
    const priorityFields = [
      "id",
      "type",
      "eventClass",
      "eventType",
      "eventDate",
      "creationDate",
      "owner",
      "origin",
      "linked.count",
      "alerts.count",
      "notify.count"
    ];
    const sortedFields = [
      ...priorityFields.filter((f) => allFields.has(f)),
      ...Array.from(allFields).filter((f) => !priorityFields.includes(f)).sort((a, b) => a.localeCompare(b))
    ];
    return sortedFields.map((field) => {
      const testValue = testFields[field] || "";
      const prodValue = prodFields[field] || "";
      let status;
      let displayTest = testValue;
      let displayProd = prodValue;
      const normalizeValue = (val) => {
        if (!val)
          return "";
        try {
          return String(parseFloat(val));
        } catch {
          return val.trim();
        }
      };
      const testNormalized = normalizeValue(testValue);
      const prodNormalized = normalizeValue(prodValue);
      if (!testValue && prodValue) {
        status = "missing_test";
        displayTest = "\u274C MISSING";
      } else if (testValue && !prodValue) {
        status = "missing_prod";
        displayProd = "\u274C MISSING";
      } else if (testNormalized !== prodNormalized && testValue && prodValue) {
        status = "different";
        displayTest = `\u{1F539} ${testValue}`;
        displayProd = `\u{1F538} ${prodValue}`;
      } else if (testNormalized === prodNormalized && testValue) {
        status = "identical";
        displayTest = `\u2705 ${testValue}`;
        displayProd = `\u2705 ${prodValue}`;
      } else {
        status = "identical";
      }
      return {
        field,
        testValue,
        prodValue,
        status,
        displayTest,
        displayProd
      };
    });
  }
  static \u0275fac = function EventsComparisonService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventsComparisonService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EventsComparisonService, factory: _EventsComparisonService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventsComparisonService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/development/services/trips.service.ts
var TripsService = class _TripsService {
  historyService = inject(HistoryService);
  /**
   * Get trips for a specific asset within a date range
   * Wraps the HistoryService.getTripHistory method
   */
  getTrips(assetId, startDate, endDate, limit) {
    return this.historyService.getTripHistory(assetId, startDate, endDate, void 0, limit);
  }
  static \u0275fac = function TripsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TripsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TripsService, factory: _TripsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TripsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/development/services/trips-comparison.service.ts
var TripsComparisonService = class _TripsComparisonService {
  tripsService = inject(TripsService);
  dualApiService = inject(DualApiService);
  getTripsComparison(vehicleId, startDate, endDate, limit, deviceName) {
    const cypherViewTrips$ = this.tripsService.getTrips(vehicleId, startDate.toISOString(), endDate.toISOString(), limit).pipe(map((response) => response.items ?? []), catchError((error) => {
      console.error("\u274C CypherView trips error:", error);
      return of([]);
    }));
    const keyTrips$ = this.dualApiService.getKeyApiTrips(vehicleId, startDate.toISOString(), endDate.toISOString(), limit, deviceName);
    return forkJoin({
      testData: cypherViewTrips$.pipe(map((items) => this.mapToTripRecords(items))),
      prodData: keyTrips$.pipe(map((items) => this.mapToTripRecords(items)))
    }).pipe(map(({ testData, prodData }) => {
      const alignedRecords = this.alignRecordsByTimestamp(testData, prodData);
      const summary = this.calculateSummary(alignedRecords);
      return {
        alignedRecords,
        summary,
        testRecords: testData,
        prodRecords: prodData
      };
    }), catchError((error) => {
      console.error("Error fetching trips comparison:", error);
      return of({
        alignedRecords: [],
        summary: this.getEmptySummary(),
        testRecords: [],
        prodRecords: []
      });
    }));
  }
  mapToTripRecords(items) {
    return items.map((item) => __spreadProps(__spreadValues({}, item), {
      timestamp: item["startTime"] ?? item["timestamp"] ?? item["received"] ?? item["date"],
      startTime: item["startTime"] ?? item.start?.["date"] ?? item.dateStart,
      endTime: item["endTime"] ?? item.end?.["date"] ?? item.dateEnd
    }));
  }
  setKeyApiCredentials(username, password) {
    this.dualApiService.setCredentials(
      { username: "", password: "" },
      // CypherView uses existing auth
      { username, password }
    );
  }
  alignRecordsByTimestamp(testRecords, prodRecords, toleranceSeconds = 30) {
    const aligned = [];
    const usedProdIndices = /* @__PURE__ */ new Set();
    const parseTimestamp = (record) => {
      if (!record)
        return null;
      const tsStr = record.timestamp ?? record.startTime ?? record["start"]?.date ?? record["received"];
      if (isNullOrUndefined(tsStr))
        return null;
      try {
        return new Date(tsStr.replace("Z", "+00:00"));
      } catch {
        return null;
      }
    };
    const sortedTestRecords = [...testRecords].sort((a, b) => {
      const aTime = parseTimestamp(a);
      const bTime = parseTimestamp(b);
      if (!aTime || !bTime)
        return 0;
      return aTime.getTime() - bTime.getTime();
    });
    const sortedProdRecords = [...prodRecords].map((record, index) => ({ record, originalIndex: index })).sort((a, b) => {
      const aTime = parseTimestamp(a.record);
      const bTime = parseTimestamp(b.record);
      if (!aTime || !bTime)
        return 0;
      return aTime.getTime() - bTime.getTime();
    });
    sortedTestRecords.forEach((testRecord, index) => {
      const testTime = parseTimestamp(testRecord);
      let bestMatch = null;
      let bestDiff = Infinity;
      let bestIdx = null;
      if (testTime) {
        sortedProdRecords.forEach(({ record: prodRecord, originalIndex }) => {
          if (usedProdIndices.has(originalIndex))
            return;
          const prodTime = parseTimestamp(prodRecord);
          if (prodTime) {
            const diff = Math.abs((testTime.getTime() - prodTime.getTime()) / 1e3);
            if (diff <= toleranceSeconds && diff < bestDiff) {
              bestMatch = prodRecord;
              bestDiff = diff;
              bestIdx = originalIndex;
            }
          }
        });
      }
      if (isDefined(bestMatch) && bestIdx !== null) {
        usedProdIndices.add(bestIdx);
        aligned.push({
          testRecord,
          prodRecord: bestMatch,
          index,
          timestampDiff: bestDiff
        });
      } else {
        aligned.push({
          testRecord,
          prodRecord: null,
          index,
          timestampDiff: void 0
        });
      }
    });
    sortedProdRecords.forEach(({ record: prodRecord, originalIndex }) => {
      if (!usedProdIndices.has(originalIndex)) {
        aligned.push({
          testRecord: null,
          prodRecord,
          index: aligned.length,
          timestampDiff: void 0
        });
      }
    });
    return aligned;
  }
  calculateSummary(alignedRecords) {
    const bothPresent = alignedRecords.filter((r) => isDefined(r.testRecord) && isDefined(r.prodRecord)).length;
    const testOnly = alignedRecords.filter((r) => isDefined(r.testRecord) && !isDefined(r.prodRecord)).length;
    const prodOnly = alignedRecords.filter((r) => !isDefined(r.testRecord) && isDefined(r.prodRecord)).length;
    const totalAligned = alignedRecords.length;
    const matchRate = totalAligned > 0 ? bothPresent / totalAligned * 100 : 0;
    let qualityStatus = "\u{1F534} Poor";
    if (matchRate >= 95)
      qualityStatus = "\u{1F7E2} Excellent";
    else if (matchRate >= 85)
      qualityStatus = "\u{1F7E1} Good";
    else if (matchRate >= 70)
      qualityStatus = "\u{1F7E0} Fair";
    return {
      totalAligned,
      bothPresent,
      testOnly,
      prodOnly,
      matchRate,
      qualityStatus
    };
  }
  getEmptySummary() {
    return {
      totalAligned: 0,
      bothPresent: 0,
      testOnly: 0,
      prodOnly: 0,
      matchRate: 0,
      qualityStatus: "\u274C No Data"
    };
  }
  formatTimestampForDisplay(timestamp) {
    if (!timestamp)
      return "";
    try {
      const dt = new Date(timestamp);
      return dt.toLocaleString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
    } catch {
      return timestamp;
    }
  }
  isTimestamp(value) {
    if (!value)
      return false;
    try {
      const dt = new Date(value);
      return !isNaN(dt.getTime()) && (value.includes("T") || value.includes("Z") || !!RegExp(/\d{4}-\d{2}-\d{2}/).exec(value));
    } catch {
      return false;
    }
  }
  extractAllFields(record) {
    if (!record)
      return {};
    const fields = {};
    this._extractDateTimeFields(record, fields);
    this._extractTripInfoFields(record, fields);
    this._extractMeasurementFields(record, fields);
    this._extractAssetInfo(record, fields);
    this._extractLocationFields(record, fields);
    this._extractZoneFields(record, fields);
    return fields;
  }
  _extractDateTimeFields(record, fields) {
    const startTime = record.startTime ?? record.timestamp ?? "";
    fields["dateStart"] = this.isTimestamp(startTime) ? this.formatTimestampForDisplay(startTime) : startTime;
    const endTime = record.endTime ?? "";
    fields["dateEnd"] = this.isTimestamp(endTime) ? this.formatTimestampForDisplay(endTime) : endTime;
    const creationDate = record["creationDate"] ?? "";
    const creationDateStr = String(creationDate);
    fields["creationDate"] = this.isTimestamp(creationDateStr) ? this.formatTimestampForDisplay(creationDateStr) : creationDateStr;
  }
  _extractTripInfoFields(record, fields) {
    const idVal = record.tripId ?? record["id"] ?? "";
    fields["id"] = typeof idVal === "string" ? idVal : String(idVal);
  }
  _formatValue(value, unit, toFixed) {
    if (value == null)
      return "";
    try {
      return `${Number(value).toFixed(toFixed)} ${unit}`;
    } catch {
      return String(value ?? "");
    }
  }
  _extractMeasurementFields(record, fields) {
    const distance = record.distance ?? record["distance"] ?? null;
    fields["distance"] = this._formatValue(distance, "km", 2);
    const duration = record.duration ?? record["drivingTime"] ?? null;
    fields["drivingTime"] = this._formatValue(duration, "min", 2);
    const maxSpeed = record.maxSpeed ?? record["maxes"]?.speed;
    fields["maxSpeed"] = this._formatValue(maxSpeed, "km/h", 2);
    if (fields["distance"] && fields["drivingTime"]) {
      try {
        const distanceKm = Number(fields["distance"].replace(" km", ""));
        const durationHours = Number(fields["drivingTime"].replace(" min", "")) / 60;
        if (durationHours > 0) {
          fields["averageSpeed"] = `${(distanceKm / durationHours).toFixed(2)} km/h`;
        } else {
          fields["averageSpeed"] = "";
        }
      } catch {
        fields["averageSpeed"] = "";
      }
    } else {
      fields["averageSpeed"] = "";
    }
    const fuelUsed = record.fuelUsed ?? record["fuel"] ?? null;
    fields["fuelUsed"] = this._formatValue(fuelUsed, "L", 2);
    const idleTime = record["idleTime"];
    if (idleTime != null) {
      try {
        fields["idleTime"] = `${(Number(idleTime) / 60).toFixed(2)} min`;
      } catch {
        fields["idleTime"] = String(idleTime ?? "");
      }
    } else {
      fields["idleTime"] = "";
    }
  }
  _extractAssetInfo(record, fields) {
    const asset = record["asset"];
    if (isDefined(asset)) {
      fields["asset.name"] = asset.name ?? "";
    }
  }
  _extractLocationFields(record, fields) {
    const start = record.startLocation || record["start"];
    if (isDefined(start)) {
      fields["startAddress"] = start.address ?? "";
      fields["start.latitude"] = this._formatValue(start.lat, "", 6);
      fields["start.longitude"] = this._formatValue(start.lon, "", 6);
      fields["start.odometer"] = this._formatValue(start["odometer"], "km", 2);
      fields["start.hours"] = this._formatValue(start["hours"], "h", 2);
    }
    const end = record.endLocation || record["end"];
    if (isDefined(end)) {
      fields["endAddress"] = end.address ?? "";
      fields["end.latitude"] = this._formatValue(end.lat, "", 6);
      fields["end.longitude"] = this._formatValue(end.lon, "", 6);
      fields["end.odometer"] = this._formatValue(end["odometer"], "km", 2);
      fields["end.hours"] = this._formatValue(end["hours"], "h", 2);
    }
  }
  _extractZoneFields(record, fields) {
    const zones = record.zones ?? [];
    if (Array.isArray(zones)) {
      const zoneNames = zones.map((z) => z.name).filter(Boolean);
      const zoneIds = zones.map((z) => z.id).filter(Boolean);
      fields["zones.names"] = zoneNames.join(", ");
      fields["zones.ids"] = zoneIds.join(", ");
      fields["zones.count"] = String(zones.length);
    } else {
      fields["zones.names"] = "";
      fields["zones.ids"] = "";
      fields["zones.count"] = "0";
    }
  }
  compareFields(testRecord, prodRecord) {
    const testFields = this.extractAllFields(testRecord);
    const prodFields = this.extractAllFields(prodRecord);
    const allFields = /* @__PURE__ */ new Set([
      ...Object.keys(testFields),
      ...Object.keys(prodFields)
    ]);
    const priorityFields = [
      "dateStart",
      "dateEnd",
      "id",
      "distance",
      "drivingTime",
      "averageSpeed",
      "maxSpeed",
      "fuelUsed",
      "idleTime"
    ];
    const sortedFields = [
      ...priorityFields.filter((f) => allFields.has(f)),
      ...Array.from(allFields).filter((f) => !priorityFields.includes(f)).sort((a, b) => a.localeCompare(b))
    ];
    return sortedFields.map((field) => {
      const testValue = testFields[field] || "";
      const prodValue = prodFields[field] || "";
      let status;
      let displayTest = testValue;
      let displayProd = prodValue;
      const normalizeValue = (val) => {
        if (!val)
          return "";
        try {
          return String(parseFloat(val));
        } catch {
          return val.trim();
        }
      };
      const testNormalized = normalizeValue(testValue);
      const prodNormalized = normalizeValue(prodValue);
      if (!testValue && prodValue) {
        status = "missing_test";
        displayTest = "\u274C MISSING";
      } else if (testValue && !prodValue) {
        status = "missing_prod";
        displayProd = "\u274C MISSING";
      } else if (testNormalized !== prodNormalized && testValue && prodValue) {
        status = "different";
        displayTest = `\u{1F539} ${testValue}`;
        displayProd = `\u{1F538} ${prodValue}`;
      } else if (testNormalized === prodNormalized && testValue) {
        status = "identical";
        displayTest = `\u2705 ${testValue}`;
        displayProd = `\u2705 ${prodValue}`;
      } else {
        status = "identical";
      }
      return {
        field,
        testValue,
        prodValue,
        status,
        displayTest,
        displayProd
      };
    });
  }
  static \u0275fac = function TripsComparisonService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TripsComparisonService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TripsComparisonService, factory: _TripsComparisonService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TripsComparisonService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/development/services/unified-timeline.service.ts
var UnifiedTimelineService = class _UnifiedTimelineService {
  telemetryService = inject(TelemetryComparisonService);
  eventsService = inject(EventsComparisonService);
  tripsService = inject(TripsComparisonService);
  /**
   * Get unified timeline comparing telemetry, events, and trips data
   * Replicates Python merge_json_reports.py functionality
   */
  getUnifiedTimeline(vehicleId, startDate, endDate, limit, deviceName) {
    const telemetryData$ = this.telemetryService.getTelemetryComparison(vehicleId, startDate, endDate, limit, deviceName);
    const eventsData$ = this.eventsService.getEventsComparison(vehicleId, startDate, endDate, limit, deviceName);
    const tripsData$ = this.tripsService.getTripsComparison(vehicleId, startDate, endDate, limit, deviceName);
    return forkJoin({
      telemetry: telemetryData$,
      events: eventsData$,
      trips: tripsData$
    }).pipe(map(({ telemetry, events, trips }) => {
      const unifiedRecords = this.mergeRecordsChronologically(telemetry, events, trips);
      const summary = this.calculateUnifiedSummary(unifiedRecords, startDate, endDate);
      return {
        records: unifiedRecords,
        summary,
        rawData: { telemetry, events, trips }
      };
    }), catchError((error) => {
      console.error("\u274C Unified timeline error:", error);
      return of({
        records: [],
        summary: this.getEmptyUnifiedSummary(startDate, endDate),
        rawData: {
          telemetry: { alignedRecords: [], testRecords: [], prodRecords: [] },
          events: { alignedRecords: [], testRecords: [], prodRecords: [] },
          trips: { alignedRecords: [], testRecords: [], prodRecords: [] }
        }
      });
    }));
  }
  /**
   * Merge records from all data types and sort chronologically
   * Replicates Python merge_records() functionality
   */
  mergeRecordsChronologically(telemetry, events, trips) {
    const unifiedRecords = [];
    telemetry.alignedRecords.forEach((record, index) => {
      unifiedRecords.push(this.convertToUnifiedRecord("telemetry", record, index));
    });
    events.alignedRecords.forEach((record, index) => {
      unifiedRecords.push(this.convertToUnifiedRecord("event", record, index));
    });
    trips.alignedRecords.forEach((record, index) => {
      unifiedRecords.push(this.convertToUnifiedRecord("trip_start", record, index));
      unifiedRecords.push(this.convertToUnifiedRecord("trip_end", record, index));
    });
    return unifiedRecords.sort((a, b) => {
      try {
        const timeA = new Date(a.timestamp).getTime();
        const timeB = new Date(b.timestamp).getTime();
        if (isNaN(timeA) || isNaN(timeB)) {
          console.warn("\u26A0\uFE0F Invalid timestamp found:", {
            recordA: a.type,
            timestampA: a.timestamp,
            recordB: b.type,
            timestampB: b.timestamp
          });
          return 0;
        }
        return timeA - timeB;
      } catch (error) {
        console.error("\u274C Error sorting records:", error, {
          recordA: a,
          recordB: b
        });
        return 0;
      }
    });
  }
  /**
   * Convert individual aligned records to unified format
   * Replicates get_record_timestamp() and record conversion logic
   */
  convertToUnifiedRecord(type, alignedRecord, index) {
    const testRecord = alignedRecord.testRecord;
    const prodRecord = alignedRecord.prodRecord;
    const timestamp = this.extractTimestamp(testRecord, type) ?? this.extractTimestamp(prodRecord, type) ?? (/* @__PURE__ */ new Date()).toISOString();
    let status;
    if (testRecord && prodRecord) {
      status = "both-environments";
    } else if (testRecord && !prodRecord) {
      status = "cypherView-only";
    } else {
      status = "key-only";
    }
    const { matchingFields, totalFields, matchPercentage } = this.calculateRecordMatching(type, alignedRecord);
    return {
      type,
      timestamp,
      index,
      timestampDiff: alignedRecord.timestampDiff,
      testRecord,
      prodRecord,
      status,
      matchingFields,
      totalFields,
      matchPercentage,
      data: alignedRecord
      // Store original for detailed comparison
    };
  }
  /**
   * Extract timestamp from any record type
   * Replicates Python get_record_timestamp() logic
   */
  extractTimestamp(record, recordType) {
    if (isNullOrUndefined(record))
      return null;
    const timestampKeys = this.getTimestampKeys(recordType);
    for (const key of timestampKeys) {
      const ts = record[key];
      if (isDefined(ts)) {
        try {
          const normalizedTs = typeof ts === "string" ? ts : ts.toString();
          const testDate = new Date(normalizedTs);
          if (!isNaN(testDate.getTime())) {
            return normalizedTs;
          }
        } catch {
          console.warn("\u26A0\uFE0F Invalid timestamp format encountered:", ts);
        }
      }
    }
    return null;
  }
  /**
   * Get the priority-ordered list of keys to check for a timestamp.
   */
  getTimestampKeys(recordType) {
    switch (recordType) {
      case "event":
        return ["eventDate", "eventTime", "timestamp", "received", "date"];
      case "trip_start":
        return ["startTime", "timestamp", "date"];
      case "trip_end":
        return ["endTime", "timestamp", "date"];
      default:
        return ["timestamp", "received", "date"];
    }
  }
  /**
   * Calculate field matching percentage for a record
   * Uses appropriate comparison service based on record type
   */
  calculateRecordMatching(type, alignedRecord) {
    let comparisons = [];
    switch (type) {
      case "telemetry":
        comparisons = this.telemetryService.compareFields(alignedRecord.testRecord, alignedRecord.prodRecord);
        break;
      case "event":
        comparisons = this.eventsService.compareFields(alignedRecord.testRecord, alignedRecord.prodRecord);
        break;
      case "trip_start":
      case "trip_end":
        comparisons = this.tripsService.compareFields(alignedRecord.testRecord, alignedRecord.prodRecord);
        break;
    }
    const totalFields = comparisons.length;
    const matchingFields = comparisons.filter((c) => c.status === "identical").length;
    const matchPercentage = totalFields > 0 ? matchingFields / totalFields * 100 : 0;
    return { matchingFields, totalFields, matchPercentage };
  }
  /**
   * Calculate unified summary statistics
   * Replicates Python create_unified_report() summary logic
   */
  calculateUnifiedSummary(records, startDate, endDate) {
    const totalRecords = records.length;
    const telemetryCount = records.filter((r) => r.type === "telemetry").length;
    const eventsCount = records.filter((r) => r.type === "event").length;
    const tripsCount = records.filter((r) => r.type === "trip_start" || r.type === "trip_end").length;
    const bothPresentCount = records.filter((r) => r.status === "both-environments").length;
    const testOnlyCount = records.filter((r) => r.status === "cypherView-only").length;
    const prodOnlyCount = records.filter((r) => r.status === "key-only").length;
    const totalMatches = records.reduce((sum, r) => sum + (r.matchingFields ?? 0), 0);
    const totalFields = records.reduce((sum, r) => sum + (r.totalFields ?? 0), 0);
    const overallMatchRate = totalFields > 0 ? totalMatches / totalFields * 100 : 0;
    let qualityStatus = "\u{1F534} Poor";
    if (overallMatchRate >= 95)
      qualityStatus = "\u{1F7E2} Excellent";
    else if (overallMatchRate >= 85)
      qualityStatus = "\u{1F7E1} Good";
    else if (overallMatchRate >= 70)
      qualityStatus = "\u{1F7E0} Fair";
    const duration = endDate.getTime() - startDate.getTime();
    const durationHours = Math.round(duration / (1e3 * 60 * 60) * 10) / 10;
    return {
      totalRecords,
      telemetryCount,
      eventsCount,
      tripsCount,
      bothPresentCount,
      testOnlyCount,
      prodOnlyCount,
      overallMatchRate,
      qualityStatus,
      timeRange: {
        start: startDate.toISOString(),
        end: endDate.toISOString(),
        duration: `${durationHours}h`
      }
    };
  }
  /**
   * Get empty summary for error cases
   */
  getEmptyUnifiedSummary(startDate, endDate) {
    const duration = endDate.getTime() - startDate.getTime();
    const durationHours = Math.round(duration / (1e3 * 60 * 60) * 10) / 10;
    return {
      totalRecords: 0,
      telemetryCount: 0,
      eventsCount: 0,
      tripsCount: 0,
      bothPresentCount: 0,
      testOnlyCount: 0,
      prodOnlyCount: 0,
      overallMatchRate: 0,
      qualityStatus: "\u274C No Data",
      timeRange: {
        start: startDate.toISOString(),
        end: endDate.toISOString(),
        duration: `${durationHours}h`
      }
    };
  }
  /**
   * Export unified timeline as JSON (replicates Python JSON export)
   */
  exportAsJson(result) {
    return JSON.stringify({
      summary: result.summary,
      records: result.records,
      metadata: {
        generated: (/* @__PURE__ */ new Date()).toISOString(),
        tool: "CypherView Unified Timeline",
        version: "1.0"
      }
    }, null, 2);
  }
  /**
   * Export unified timeline as detailed text report (replicates Python text export)
   */
  exportAsTextReport(result) {
    const { summary, records } = result;
    let report = `UNIFIED TIMELINE COMPARISON REPORT
`;
    report += `Generated: ${(/* @__PURE__ */ new Date()).toISOString()}
`;
    report += `
`;
    report += `SUMMARY:
`;
    report += `--------
`;
    report += `Total Records: ${summary.totalRecords}
`;
    report += `- Telemetry: ${summary.telemetryCount}
`;
    report += `- Events: ${summary.eventsCount}
`;
    report += `- Trips: ${summary.tripsCount}
`;
    report += `
`;
    report += `Status Distribution:
`;
    report += `- Both Environments: ${summary.bothPresentCount}
`;
    report += `- CypherView Only: ${summary.testOnlyCount}
`;
    report += `- Key Only: ${summary.prodOnlyCount}
`;
    report += `
`;
    report += `Overall Match Rate: ${summary.overallMatchRate.toFixed(1)}% (${summary.qualityStatus})
`;
    report += `Time Range: ${summary.timeRange.start} - ${summary.timeRange.end} (${summary.timeRange.duration})
`;
    report += `
`;
    report += `CHRONOLOGICAL TIMELINE:
`;
    report += `=======================
`;
    records.forEach((record, index) => {
      report += `
[${index + 1}] ${record.timestamp} - ${record.type.toUpperCase()}
`;
      report += `Status: ${record.status}
`;
      if (record.matchPercentage !== void 0) {
        report += `Field Match: ${record.matchingFields}/${record.totalFields} (${record.matchPercentage.toFixed(1)}%)
`;
      }
      if (record.timestampDiff !== void 0) {
        report += `Time Diff: \xB1${record.timestampDiff.toFixed(1)}s
`;
      }
      report += `---
`;
    });
    return report;
  }
  static \u0275fac = function UnifiedTimelineService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UnifiedTimelineService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UnifiedTimelineService, factory: _UnifiedTimelineService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnifiedTimelineService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/development/components/telemetry-comparison/telemetry-comparison.component.ts
var _forTrack0 = ($index, $item) => $item.field;
function TelemetryComparisonComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function TelemetryComparisonComponent_ng_template_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 12);
    \u0275\u0275listener("onClick", function TelemetryComparisonComponent_ng_template_11_Conditional_3_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.restartAnalysis());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("outlined", true);
  }
}
function TelemetryComparisonComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, TelemetryComparisonComponent_ng_template_11_Conditional_3_Template, 1, 1, "p-button", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.analysisComplete() ? "Analysis Configuration" : "Asset Selection");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.analysisComplete() ? 3 : -1);
  }
}
function TelemetryComparisonComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 13)(2, "div", 14)(3, "strong", 15);
    \u0275\u0275text(4, "Client:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 14)(8, "strong", 15);
    \u0275\u0275text(9, "Asset:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 16);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 14)(13, "strong", 15);
    \u0275\u0275text(14, "Period:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 16);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 14)(20, "strong", 15);
    \u0275\u0275text(21, "Duration:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 16);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 17)(25, "p-button", 18);
    \u0275\u0275listener("onClick", function TelemetryComparisonComponent_Conditional_13_Template_p_button_onClick_25_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleSearchArea());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.selectedClientName());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedAssetName());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(17, 6, ctx_r0.startDate(), "short"), " - ", \u0275\u0275pipeBind2(18, 9, ctx_r0.endDate(), "short"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate((tmp_5_0 = ctx_r0.selectedTimeRange()) == null ? null : tmp_5_0.label);
    \u0275\u0275advance(2);
    \u0275\u0275property("outlined", true);
  }
}
function TelemetryComparisonComponent_Conditional_14_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "p-progress-spinner", 38);
    \u0275\u0275elementEnd();
  }
}
function TelemetryComparisonComponent_Conditional_14_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "p-progress-spinner", 38);
    \u0275\u0275elementEnd();
  }
}
function TelemetryComparisonComponent_Conditional_14_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 39)(2, "strong", 40);
    \u0275\u0275text(3, "Start:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 41);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 39)(8, "strong", 40);
    \u0275\u0275text(9, "End:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 41);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 42)(14, "strong", 40);
    \u0275\u0275text(15, "Duration:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 41);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 3, ctx_r0.startDate(), "short"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 6, ctx_r0.endDate(), "short"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((tmp_5_0 = ctx_r0.selectedTimeRange()) == null ? null : tmp_5_0.label);
  }
}
function TelemetryComparisonComponent_Conditional_14_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 43);
    \u0275\u0275listener("onClick", function TelemetryComparisonComponent_Conditional_14_Conditional_35_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.clearAnalysis());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 44);
    \u0275\u0275listener("onClick", function TelemetryComparisonComponent_Conditional_14_Conditional_35_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.expandedRecords().size > 0 ? ctx_r0.collapseAllRecords() : ctx_r0.expandAllRecords());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r0.expandedRecords().size > 0 ? "Collapse All" : "Expand All")("icon", ctx_r0.expandedRecords().size > 0 ? "pi pi-minus" : "pi pi-plus")("outlined", true);
  }
}
function TelemetryComparisonComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 19)(2, "div", 20)(3, "label", 21);
    \u0275\u0275text(4, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 22)(6, "p-autocomplete", 23);
    \u0275\u0275twoWayListener("ngModelChange", function TelemetryComparisonComponent_Conditional_14_Template_p_autocomplete_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedClient, $event) || (ctx_r0.selectedClient = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("completeMethod", function TelemetryComparisonComponent_Conditional_14_Template_p_autocomplete_completeMethod_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSearchClients($event));
    })("onSelect", function TelemetryComparisonComponent_Conditional_14_Template_p_autocomplete_onSelect_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onClientSelect($event));
    })("onUnselect", function TelemetryComparisonComponent_Conditional_14_Template_p_autocomplete_onUnselect_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onClientUnselect());
    })("onClear", function TelemetryComparisonComponent_Conditional_14_Template_p_autocomplete_onClear_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onClientUnselect());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, TelemetryComparisonComponent_Conditional_14_Conditional_7_Template, 2, 0, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 20)(9, "label", 25);
    \u0275\u0275text(10, "Asset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 22)(12, "p-autocomplete", 26);
    \u0275\u0275twoWayListener("ngModelChange", function TelemetryComparisonComponent_Conditional_14_Template_p_autocomplete_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedAsset, $event) || (ctx_r0.selectedAsset = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("completeMethod", function TelemetryComparisonComponent_Conditional_14_Template_p_autocomplete_completeMethod_12_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSearchAssets($event));
    })("onSelect", function TelemetryComparisonComponent_Conditional_14_Template_p_autocomplete_onSelect_12_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onAssetSelect($event));
    })("onUnselect", function TelemetryComparisonComponent_Conditional_14_Template_p_autocomplete_onUnselect_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onAssetUnselect());
    })("onClear", function TelemetryComparisonComponent_Conditional_14_Template_p_autocomplete_onClear_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onAssetUnselect());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, TelemetryComparisonComponent_Conditional_14_Conditional_13_Template, 2, 0, "div", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 19)(15, "div", 20)(16, "label", 27);
    \u0275\u0275text(17, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p-datepicker", 28);
    \u0275\u0275twoWayListener("ngModelChange", function TelemetryComparisonComponent_Conditional_14_Template_p_datepicker_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.startDate, $event) || (ctx_r0.startDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onSelect", function TelemetryComparisonComponent_Conditional_14_Template_p_datepicker_onSelect_18_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onStartDateChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 20)(20, "label", 29);
    \u0275\u0275text(21, "Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p-select", 30);
    \u0275\u0275twoWayListener("ngModelChange", function TelemetryComparisonComponent_Conditional_14_Template_p_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedTimeRange, $event) || (ctx_r0.selectedTimeRange = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function TelemetryComparisonComponent_Conditional_14_Template_p_select_onChange_22_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onTimeRangeChange($event.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 19)(24, "div", 20)(25, "label", 31);
    \u0275\u0275text(26, "Key API Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function TelemetryComparisonComponent_Conditional_14_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.keyApiUsername, $event) || (ctx_r0.keyApiUsername = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 20)(29, "label", 33);
    \u0275\u0275text(30, "Key API Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function TelemetryComparisonComponent_Conditional_14_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.keyApiPassword, $event) || (ctx_r0.keyApiPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(32, TelemetryComparisonComponent_Conditional_14_Conditional_32_Template, 18, 9, "div", 35);
    \u0275\u0275elementStart(33, "div", 36)(34, "p-button", 37);
    \u0275\u0275listener("onClick", function TelemetryComparisonComponent_Conditional_14_Template_p_button_onClick_34_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onAnalyzeTelemetry());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(35, TelemetryComparisonComponent_Conditional_14_Conditional_35_Template, 2, 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedClient);
    \u0275\u0275property("suggestions", ctx_r0.filteredClients())("minLength", 0)("delay", 100)("showClear", true)("forceSelection", true)("completeOnFocus", true)("dropdown", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.loadingClients() ? 7 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedAsset);
    \u0275\u0275property("suggestions", ctx_r0.filteredAssets())("minLength", 0)("delay", 100)("disabled", !ctx_r0.selectedClient())("showClear", true)("forceSelection", true)("completeOnFocus", true)("dropdown", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.loadingAssets() ? 13 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.startDate);
    \u0275\u0275property("showTime", true)("showSeconds", false)("showIcon", true)("showClear", true);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedTimeRange);
    \u0275\u0275property("options", ctx_r0.timeRangeOptions())("showClear", true);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.keyApiUsername);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.keyApiPassword);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.startDate() && ctx_r0.selectedTimeRange() ? 32 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.isReadyForAnalysis() || ctx_r0.isAnalyzing())("loading", ctx_r0.isAnalyzing());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.analysisComplete() ? 35 : -1);
  }
}
function TelemetryComparisonComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "p-progress-spinner", 45);
    \u0275\u0275elementStart(2, "h3", 46);
    \u0275\u0275text(3, " Analyzing Telemetry Data ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 47);
    \u0275\u0275text(5, " Fetching and comparing data from CypherView and Key environments... ");
    \u0275\u0275elementEnd()();
  }
}
function TelemetryComparisonComponent_Conditional_17_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57)(2, "span", 58);
    \u0275\u0275text(3, "\u{1F4CA} Unified Timeline:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 59);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 60)(8, "span", 61);
    \u0275\u0275text(9, "Show:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 62)(11, "p-button", 63);
    \u0275\u0275listener("onClick", function TelemetryComparisonComponent_Conditional_17_Conditional_0_Template_p_button_onClick_11_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleTelemetryFilter());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p-button", 63);
    \u0275\u0275listener("onClick", function TelemetryComparisonComponent_Conditional_17_Conditional_0_Template_p_button_onClick_12_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleEventsFilter());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p-button", 63);
    \u0275\u0275listener("onClick", function TelemetryComparisonComponent_Conditional_17_Conditional_0_Template_p_button_onClick_13_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleTripsFilter());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const summary_r8 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate7("", summary_r8.totalRecords, " records (\u{1F4E1}", summary_r8.telemetryCount, " \u26A1", summary_r8.eventsCount, " \u{1F697}", summary_r8.tripsCount, ") \u2022 ", summary_r8.bothPresentCount, " both \u2022 ", \u0275\u0275pipeBind2(6, 16, summary_r8.overallMatchRate, "1.0-0"), "% match \u2022 ", summary_r8.qualityStatus);
    \u0275\u0275advance(6);
    \u0275\u0275property("label", ctx_r0.telemetryFilterLabel())("severity", ctx_r0.showTelemetry() ? "primary" : "secondary")("outlined", !ctx_r0.showTelemetry());
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r0.eventsFilterLabel())("severity", ctx_r0.showEvents() ? "info" : "secondary")("outlined", !ctx_r0.showEvents());
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r0.tripsFilterLabel())("severity", ctx_r0.showTrips() ? "help" : "secondary")("outlined", !ctx_r0.showTrips());
  }
}
function TelemetryComparisonComponent_Conditional_17_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57)(2, "span", 58);
    \u0275\u0275text(3, "\u{1F4CA} Telemetry Only:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 59);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const summary_r9 = ctx;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate4("", summary_r9.totalAligned, " records \u2022 ", summary_r9.bothPresent, " both \u2022 ", \u0275\u0275pipeBind2(6, 4, summary_r9.matchRate, "1.0-0"), "% match \u2022 ", summary_r9.qualityStatus);
  }
}
function TelemetryComparisonComponent_Conditional_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, TelemetryComparisonComponent_Conditional_17_Conditional_1_Conditional_0_Template, 7, 7, "div", 56);
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_3_0 = ctx_r0.comparisonSummary()) ? 0 : -1, tmp_3_0);
  }
}
function TelemetryComparisonComponent_Conditional_17_Conditional_10_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const record_r11 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(\xB1", \u0275\u0275pipeBind2(2, 1, record_r11.timestampDiff, "1.0-0"), "s)");
  }
}
function TelemetryComparisonComponent_Conditional_17_Conditional_10_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 75);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 71)(4, "span", 76);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 77);
    \u0275\u0275text(7, "vs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 78);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const comparison_r12 = ctx.$implicit;
    \u0275\u0275classMap("grid grid-cols-[150px_1fr] gap-2 px-2 py-1 border-b border-gray-100 text-[0.7rem] items-center even:bg-gray-50 last:border-b-0 field-row " + comparison_r12.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", comparison_r12.field, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-value", comparison_r12.testValue);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(comparison_r12.displayTest);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("has-value", comparison_r12.prodValue);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(comparison_r12.displayProd);
  }
}
function TelemetryComparisonComponent_Conditional_17_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275listener("keydown", function TelemetryComparisonComponent_Conditional_17_Conditional_10_Template_div_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onKeyDown($event));
    });
    \u0275\u0275elementStart(1, "div", 65)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 66);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 67);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, TelemetryComparisonComponent_Conditional_17_Conditional_10_Conditional_8_Template, 3, 4, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 69)(10, "div", 70);
    \u0275\u0275text(11, "Field");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 71)(13, "span", 72);
    \u0275\u0275text(14, "\u{1F539} CypherView");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 73);
    \u0275\u0275text(16, "vs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 74);
    \u0275\u0275text(18, "\u{1F538} Key API");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div");
    \u0275\u0275repeaterCreate(20, TelemetryComparisonComponent_Conditional_17_Conditional_10_For_21_Template, 10, 9, "div", 54, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const record_r11 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("border border-gray-200 rounded bg-white outline-none focus:ring-2 focus:ring-blue-200 compact-record " + ctx_r0.getRecordStatus(record_r11));
    \u0275\u0275advance(2);
    \u0275\u0275classMap("px-2 py-0.5 rounded-xl text-[0.6rem] font-bold uppercase tracking-wide min-w-fit record-type-badge " + ctx_r0.getRecordTypeBadgeClass(record_r11));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getRecordTypeDisplay(record_r11), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getRecordStatusIcon(record_r11));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getRecordTimestamp(record_r11));
    \u0275\u0275advance();
    \u0275\u0275conditional(record_r11.timestampDiff !== void 0 ? 8 : -1);
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r0.getFieldComparisons(record_r11));
  }
}
function TelemetryComparisonComponent_Conditional_17_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1, " No telemetry records found. ");
    \u0275\u0275elementEnd();
  }
}
function TelemetryComparisonComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, TelemetryComparisonComponent_Conditional_17_Conditional_0_Template, 14, 19)(1, TelemetryComparisonComponent_Conditional_17_Conditional_1_Template, 1, 1);
    \u0275\u0275elementStart(2, "div", 6)(3, "div", 48)(4, "p-button", 49);
    \u0275\u0275listener("onClick", function TelemetryComparisonComponent_Conditional_17_Template_p_button_onClick_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToRecord(0));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p-button", 50);
    \u0275\u0275listener("onClick", function TelemetryComparisonComponent_Conditional_17_Template_p_button_onClick_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToPreviousRecord());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 51);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p-button", 52);
    \u0275\u0275listener("onClick", function TelemetryComparisonComponent_Conditional_17_Template_p_button_onClick_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToNextRecord());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p-button", 53);
    \u0275\u0275listener("onClick", function TelemetryComparisonComponent_Conditional_17_Template_p_button_onClick_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToRecord(ctx_r0.totalRecords() - 1));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(10, TelemetryComparisonComponent_Conditional_17_Conditional_10_Template, 22, 8, "div", 54)(11, TelemetryComparisonComponent_Conditional_17_Conditional_11_Template, 2, 0, "div", 55);
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_12_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_2_0 = ctx_r0.unifiedSummary()) ? 0 : 1, tmp_2_0);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r0.hasPrevious())("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.hasPrevious())("outlined", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.recordPosition());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.hasNext())("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.hasNext())("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_12_0 = ctx_r0.currentRecord()) ? 10 : 11, tmp_12_0);
  }
}
function TelemetryComparisonComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "h3", 80);
    \u0275\u0275text(2, " Selected Configuration ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 81)(4, "div", 82)(5, "strong", 83);
    \u0275\u0275text(6, "Client:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 84);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 82)(10, "strong", 83);
    \u0275\u0275text(11, "Asset:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 84);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 82)(15, "strong", 83);
    \u0275\u0275text(16, "Time Range:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 84);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 82)(22, "strong", 83);
    \u0275\u0275text(23, "Duration:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 84);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div")(27, "div", 9);
    \u0275\u0275element(28, "i", 85);
    \u0275\u0275elementStart(29, "h3", 46);
    \u0275\u0275text(30, " Ready for Telemetry Analysis ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p", 47);
    \u0275\u0275text(32, ' Click "Analyze Telemetry" to compare data between CypherView and Key environments. ');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p", 86);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.selectedClientName());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedAssetName());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(19, 8, ctx_r0.startDate(), "short"), " - ", \u0275\u0275pipeBind2(20, 11, ctx_r0.endDate(), "short"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate((tmp_5_0 = ctx_r0.selectedTimeRange()) == null ? null : tmp_5_0.label);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate3(" ", ctx_r0.selectedClientName(), " \u2192 ", ctx_r0.selectedAssetName(), " (", (tmp_6_0 = ctx_r0.selectedTimeRange()) == null ? null : tmp_6_0.label, ") ");
  }
}
function TelemetryComparisonComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "i", 87);
    \u0275\u0275elementStart(2, "h3", 46);
    \u0275\u0275text(3, " Complete Configuration ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 47);
    \u0275\u0275text(5, " Please select a client, asset, start date, and duration to begin telemetry analysis. ");
    \u0275\u0275elementEnd()();
  }
}
var TelemetryComparisonComponent = class _TelemetryComparisonComponent {
  clientsService = inject(ClientsService);
  assetsService = inject(AssetsService);
  authDataService = inject(AuthDataService);
  utilityService = inject(UtilityService);
  telemetryComparisonService = inject(TelemetryComparisonService);
  eventsComparisonService = inject(EventsComparisonService);
  tripsComparisonService = inject(TripsComparisonService);
  unifiedTimelineService = inject(UnifiedTimelineService);
  title = "Telemetry Comparison";
  // Signals for reactive state management
  clients = signal([], ...ngDevMode ? [{ debugName: "clients" }] : []);
  assets = signal([], ...ngDevMode ? [{ debugName: "assets" }] : []);
  filteredClients = signal([], ...ngDevMode ? [{ debugName: "filteredClients" }] : []);
  filteredAssets = signal([], ...ngDevMode ? [{ debugName: "filteredAssets" }] : []);
  selectedClient = signal(null, ...ngDevMode ? [{ debugName: "selectedClient" }] : []);
  selectedAsset = signal(null, ...ngDevMode ? [{ debugName: "selectedAsset" }] : []);
  loadingClients = signal(false, ...ngDevMode ? [{ debugName: "loadingClients" }] : []);
  loadingAssets = signal(false, ...ngDevMode ? [{ debugName: "loadingAssets" }] : []);
  errorMessage = signal(null, ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  currentOwnerId = signal(null, ...ngDevMode ? [{ debugName: "currentOwnerId" }] : []);
  // Date/time range signals
  startDate = signal(null, ...ngDevMode ? [{ debugName: "startDate" }] : []);
  selectedTimeRange = signal(null, ...ngDevMode ? [{ debugName: "selectedTimeRange" }] : []);
  timeRangeOptions = signal([
    { label: "20 minutes", value: "20min", hours: 0.33 },
    { label: "1 hour", value: "1h", hours: 1 },
    { label: "4 hours", value: "4h", hours: 4 },
    { label: "12 hours", value: "12h", hours: 12 }
  ], ...ngDevMode ? [{ debugName: "timeRangeOptions" }] : []);
  // Key API credentials signals
  keyApiUsername = signal("", ...ngDevMode ? [{ debugName: "keyApiUsername" }] : []);
  keyApiPassword = signal("", ...ngDevMode ? [{ debugName: "keyApiPassword" }] : []);
  // Unified timeline comparison signals
  unifiedTimeline = signal([], ...ngDevMode ? [{ debugName: "unifiedTimeline" }] : []);
  unifiedSummary = signal(null, ...ngDevMode ? [{ debugName: "unifiedSummary" }] : []);
  isAnalyzing = signal(false, ...ngDevMode ? [{ debugName: "isAnalyzing" }] : []);
  analysisComplete = signal(false, ...ngDevMode ? [{ debugName: "analysisComplete" }] : []);
  expandedRecords = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "expandedRecords" }] : []);
  // Legacy telemetry-only comparison (for fallback)
  alignedRecords = signal([], ...ngDevMode ? [{ debugName: "alignedRecords" }] : []);
  comparisonSummary = signal(null, ...ngDevMode ? [{ debugName: "comparisonSummary" }] : []);
  // UI state for collapsible search area
  showCompactSummary = signal(true, ...ngDevMode ? [{ debugName: "showCompactSummary" }] : []);
  showFullSearchForm = signal(false, ...ngDevMode ? [{ debugName: "showFullSearchForm" }] : []);
  // Record type filters
  showTelemetry = signal(true, ...ngDevMode ? [{ debugName: "showTelemetry" }] : []);
  showEvents = signal(true, ...ngDevMode ? [{ debugName: "showEvents" }] : []);
  showTrips = signal(true, ...ngDevMode ? [{ debugName: "showTrips" }] : []);
  // Pagination signals
  currentRecordIndex = signal(0, ...ngDevMode ? [{ debugName: "currentRecordIndex" }] : []);
  pageSize = signal(1, ...ngDevMode ? [{ debugName: "pageSize" }] : []);
  // Show one record at a time
  showPagination = signal(true, ...ngDevMode ? [{ debugName: "showPagination" }] : []);
  // Computed properties for template usage
  selectedClientName = computed(() => {
    const client = this.selectedClient();
    return client?.label ?? "Unknown";
  }, ...ngDevMode ? [{ debugName: "selectedClientName" }] : []);
  selectedAssetName = computed(() => {
    const asset = this.selectedAsset();
    return asset?.label ?? "Unknown";
  }, ...ngDevMode ? [{ debugName: "selectedAssetName" }] : []);
  endDate = computed(() => {
    const start = this.startDate();
    const timeRange = this.selectedTimeRange();
    if (!start || !timeRange)
      return null;
    const endDateTime = new Date(start.getTime() + timeRange.hours * 60 * 60 * 1e3);
    return endDateTime;
  }, ...ngDevMode ? [{ debugName: "endDate" }] : []);
  isReadyForAnalysis = computed(() => {
    return !!(isDefined(this.selectedClient()?.value) && isDefined(this.selectedAsset()?.value) && isDefined(this.startDate()) && isDefined(this.selectedTimeRange()) && this.keyApiUsername().trim() && this.keyApiPassword().trim());
  }, ...ngDevMode ? [{ debugName: "isReadyForAnalysis" }] : []);
  filteredRecords = computed(() => {
    const records = this.unifiedTimeline().length > 0 ? this.unifiedTimeline() : this.alignedRecords();
    if (this.unifiedTimeline().length > 0) {
      return records.filter((record) => {
        if (this.isUnifiedTimelineRecord(record)) {
          if (record.type === "telemetry")
            return this.showTelemetry();
          if (record.type === "event")
            return this.showEvents();
          if (record.type === "trip_start" || record.type === "trip_end")
            return this.showTrips();
        }
        return true;
      });
    } else {
      return this.showTelemetry() ? records : [];
    }
  }, ...ngDevMode ? [{ debugName: "filteredRecords" }] : []);
  currentRecord = computed(() => {
    const records = this.filteredRecords();
    const index = this.currentRecordIndex();
    return records[index] ?? null;
  }, ...ngDevMode ? [{ debugName: "currentRecord" }] : []);
  totalRecords = computed(() => {
    return this.filteredRecords().length;
  }, ...ngDevMode ? [{ debugName: "totalRecords" }] : []);
  hasPrevious = computed(() => {
    return this.currentRecordIndex() > 0;
  }, ...ngDevMode ? [{ debugName: "hasPrevious" }] : []);
  hasNext = computed(() => {
    return this.currentRecordIndex() < this.totalRecords() - 1;
  }, ...ngDevMode ? [{ debugName: "hasNext" }] : []);
  recordPosition = computed(() => {
    const current = this.currentRecordIndex() + 1;
    const total = this.totalRecords();
    return `${current} of ${total}`;
  }, ...ngDevMode ? [{ debugName: "recordPosition" }] : []);
  // Filter button labels with counts
  telemetryFilterLabel = computed(() => {
    const count = this.unifiedTimeline().filter((r) => r.type === "telemetry").length;
    return `\u{1F4E1} Telemetry (${count})`;
  }, ...ngDevMode ? [{ debugName: "telemetryFilterLabel" }] : []);
  eventsFilterLabel = computed(() => {
    const count = this.unifiedTimeline().filter((r) => r.type === "event").length;
    return `\u26A1 Events (${count})`;
  }, ...ngDevMode ? [{ debugName: "eventsFilterLabel" }] : []);
  tripsFilterLabel = computed(() => {
    const count = this.unifiedTimeline().filter((r) => r.type === "trip_start" || r.type === "trip_end").length;
    return `\u{1F697} Trips (${count})`;
  }, ...ngDevMode ? [{ debugName: "tripsFilterLabel" }] : []);
  constructor() {
  }
  isUnifiedTimelineRecord(record) {
    return isDefined(record) && typeof record === "object" && record !== null && "type" in record;
  }
  ngOnInit() {
    const now = /* @__PURE__ */ new Date();
    const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1e3);
    this.startDate.set(oneHourAgo);
    this.selectedTimeRange.set(this.timeRangeOptions()[1]);
    const userProfile = this.authDataService.getUserProfile();
    if (isDefined(userProfile?.owner?.id)) {
      this.currentOwnerId.set(userProfile.owner.id);
      this.loadInitialClients(userProfile.owner.id);
    } else {
      this.errorMessage.set("Unable to determine user owner ID");
    }
  }
  loadInitialClients(ownerId) {
    this.loadingClients.set(true);
    this.errorMessage.set(null);
    const filters = {
      state: {
        value: "active",
        operator: "="
      }
    };
    const rqlFilter = this.utilityService.constructRqlFilter(filters);
    this.clientsService.listClients(ownerId, 0, 100, "name:asc", rqlFilter).subscribe({
      next: (response) => {
        const clientOptions = response.items?.map((client) => ({
          label: client.name || `Client ${client.id}`,
          value: client.id
        })) ?? [];
        this.clients.set(clientOptions);
        this.filteredClients.set(clientOptions);
        this.loadingClients.set(false);
      },
      error: (_error) => {
        this.errorMessage.set("Failed to load clients. Please try again.");
        this.loadingClients.set(false);
      }
    });
  }
  onSearchClients(event) {
    const query = event.query?.trim() || "";
    const ownerId = this.currentOwnerId();
    if (!isDefined(ownerId)) {
      return;
    }
    this.loadingClients.set(true);
    const filters = {
      state: {
        value: "active",
        operator: "="
      }
    };
    if (query.length > 0) {
      filters["name"] = {
        value: `*${query}*`,
        operator: "="
      };
    }
    const rqlFilter = this.utilityService.constructRqlFilter(filters);
    this.clientsService.listClients(ownerId, 0, 100, "name:asc", rqlFilter).subscribe({
      next: (response) => {
        const clientOptions = response.items?.map((client) => ({
          label: client.name || `Client ${client.id}`,
          value: client.id
        })) ?? [];
        this.filteredClients.set(clientOptions);
        this.loadingClients.set(false);
      },
      error: (_error) => {
        this.filteredClients.set([]);
        this.loadingClients.set(false);
      }
    });
  }
  onClientSelect(event) {
    const client = event.value;
    this.selectedClient.set(client);
    this.selectedAsset.set(null);
    this.assets.set([]);
    this.filteredAssets.set([]);
    if (client?.value) {
      this.loadInitialAssets(client.value);
    }
  }
  onClientUnselect() {
    this.selectedClient.set(null);
    this.selectedAsset.set(null);
    this.assets.set([]);
    this.filteredAssets.set([]);
  }
  loadInitialAssets(clientId) {
    this.loadingAssets.set(true);
    this.errorMessage.set(null);
    this.assetsService.listAssets(clientId, 0, 1e3).subscribe({
      next: (response) => {
        const assetOptions = response.items?.map((asset) => ({
          label: asset.name || `Asset ${asset.id}`,
          value: asset.id,
          assetData: asset
          // Store the full asset data
        })) ?? [];
        this.assets.set(assetOptions);
        this.filteredAssets.set(assetOptions);
        this.loadingAssets.set(false);
      },
      error: () => {
        this.errorMessage.set("Failed to load assets. Please try again.");
        this.loadingAssets.set(false);
      }
    });
  }
  onSearchAssets(event) {
    const query = event.query.trim().toLowerCase();
    const allAssets = this.assets();
    if (!query) {
      this.filteredAssets.set(allAssets);
      return;
    }
    const filtered = allAssets.filter((asset) => asset.label.toLowerCase().includes(query));
    this.filteredAssets.set(filtered);
  }
  onAssetSelect(event) {
    const asset = event.value;
    this.selectedAsset.set(asset);
    if (asset?.value && isDefined(this.selectedClient()?.value)) {
    }
  }
  onAssetUnselect() {
    this.selectedAsset.set(null);
  }
  onStartDateChange(date) {
    this.startDate.set(date);
  }
  onTimeRangeChange(timeRange) {
    this.selectedTimeRange.set(timeRange);
    if (timeRange && this.startDate()) {
      const currentStartDate = this.startDate();
      if (currentStartDate) {
        const now = /* @__PURE__ */ new Date();
        const durationMs = timeRange.hours * 60 * 60 * 1e3;
        const endDate = new Date(currentStartDate.getTime() + durationMs);
        if (endDate > now) {
          const adjustedStartDate = new Date(now.getTime() - durationMs);
          this.startDate.set(adjustedStartDate);
        }
      }
    }
  }
  /**
   * Extract device name from the selected asset
   */
  getDeviceNameFromAsset(asset) {
    const assetData = asset.assetData;
    if (!assetData?.devices || !Array.isArray(assetData.devices) || assetData.devices.length === 0) {
      return void 0;
    }
    const firstDevice = assetData.devices[0];
    const deviceName = firstDevice?.name ?? void 0;
    return deviceName;
  }
  onAnalyzeTelemetry() {
    const _client = this.selectedClient();
    const asset = this.selectedAsset();
    const startDate = this.startDate();
    const endDate = this.endDate();
    const timeRange = this.selectedTimeRange();
    if (this.isReadyForAnalysis() && startDate && endDate && isDefined(asset?.value)) {
      this.isAnalyzing.set(true);
      this.errorMessage.set(null);
      this.analysisComplete.set(false);
      this.unifiedTimeline.set([]);
      this.unifiedSummary.set(null);
      this.alignedRecords.set([]);
      this.comparisonSummary.set(null);
      const keyUsername = this.keyApiUsername().trim();
      const keyPassword = this.keyApiPassword().trim();
      this.telemetryComparisonService.setKeyApiCredentials(keyUsername, keyPassword);
      this.eventsComparisonService.setKeyApiCredentials(keyUsername, keyPassword);
      this.tripsComparisonService.setKeyApiCredentials(keyUsername, keyPassword);
      const deviceName = this.getDeviceNameFromAsset(asset);
      this.unifiedTimelineService.getUnifiedTimeline(
        asset.value,
        startDate,
        endDate,
        200,
        // Limit to 200 records for now
        deviceName
      ).subscribe({
        next: (result) => {
          const _cypherViewRecords = result.records.filter((r) => r.testRecord);
          const totalCypherViewData = result.rawData.telemetry.testRecords.length + result.rawData.events.testRecords.length + result.rawData.trips.testRecords.length;
          if (totalCypherViewData === 0) {
            this.isAnalyzing.set(false);
            this.analysisComplete.set(false);
            this.errorMessage.set(`No CypherView data found for ${asset?.label} during the selected time period (${timeRange?.label}). Please verify that the device was pointing to CypherView ingestion services during this time.`);
            return;
          }
          this.unifiedTimeline.set(result.records);
          this.unifiedSummary.set(result.summary);
          this.isAnalyzing.set(false);
          this.analysisComplete.set(true);
          this.currentRecordIndex.set(0);
          this.expandAllRecords();
        },
        error: (_error) => {
          this.errorMessage.set("Failed to analyze unified timeline. Please try again.");
          this.isAnalyzing.set(false);
          this.analysisComplete.set(false);
        }
      });
    } else {
      this.errorMessage.set("Please complete all fields including Key API credentials.");
    }
  }
  toggleRecordExpansion(index) {
    const expanded = this.expandedRecords();
    const newExpanded = new Set(expanded);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    this.expandedRecords.set(newExpanded);
  }
  getFieldComparisons(record) {
    if (this.isUnifiedTimelineRecord(record)) {
      switch (record.type) {
        case "telemetry":
          return this.telemetryComparisonService.compareFields(record.testRecord, record.prodRecord);
        case "event":
          return this.eventsComparisonService.compareFields(record.testRecord, record.prodRecord);
        case "trip_start":
        case "trip_end":
          return this.tripsComparisonService.compareFields(record.testRecord, record.prodRecord);
        default:
          return [];
      }
    } else {
      const alignedRecord = record;
      return this.telemetryComparisonService.compareFields(alignedRecord.testRecord, alignedRecord.prodRecord);
    }
  }
  getRecordTimestamp(record) {
    if (this.isUnifiedTimelineRecord(record)) {
      const timestamp = record.timestamp;
      try {
        const dt = new Date(timestamp);
        return dt.toLocaleString("en-GB", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
          // Remove timeZone to use browser's local timezone
        });
      } catch {
        return timestamp;
      }
    } else {
      const alignedRecord = record;
      const dataRecord = alignedRecord.testRecord || alignedRecord.prodRecord;
      if (!dataRecord)
        return "UNKNOWN TIME";
      const timestamp = dataRecord.timestamp ?? dataRecord["date"] ?? dataRecord.received;
      if (isNullOrUndefined(timestamp))
        return "UNKNOWN TIME";
      try {
        const dt = new Date(timestamp);
        return dt.toLocaleString("en-GB", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
          // Remove timeZone to use browser's local timezone
        });
      } catch {
        return timestamp;
      }
    }
  }
  getRecordStatus(record) {
    if (this.isUnifiedTimelineRecord(record)) {
      return record.status;
    } else {
      const alignedRecord = record;
      if (alignedRecord.testRecord && alignedRecord.prodRecord) {
        return "both-environments";
      } else if (alignedRecord.testRecord) {
        return "cypherView-only";
      } else {
        return "key-only";
      }
    }
  }
  getRecordStatusIcon(record) {
    if (this.isUnifiedTimelineRecord(record)) {
      if (record.testRecord && record.prodRecord) {
        return "\u2705";
      } else if (record.testRecord) {
        return "\u{1F539}";
      } else {
        return "\u{1F538}";
      }
    } else {
      const alignedRecord = record;
      if (alignedRecord.testRecord && alignedRecord.prodRecord) {
        return "\u2705";
      } else if (alignedRecord.testRecord) {
        return "\u{1F539}";
      } else {
        return "\u{1F538}";
      }
    }
  }
  getRecordTypeDisplay(record) {
    if (this.isUnifiedTimelineRecord(record)) {
      switch (record.type) {
        case "telemetry":
          return "TELEMETRY";
        case "event":
          return "EVENT";
        case "trip_start":
          return "TRIP START";
        case "trip_end":
          return "TRIP END";
        default:
          return "UNKNOWN";
      }
    } else {
      return "TELEMETRY";
    }
  }
  getRecordTypeBadgeClass(record) {
    if (this.isUnifiedTimelineRecord(record)) {
      switch (record.type) {
        case "telemetry":
          return "badge-telemetry";
        case "event":
          return "badge-event";
        case "trip_start":
        case "trip_end":
          return "badge-trip";
        default:
          return "badge-unknown";
      }
    } else {
      return "badge-telemetry";
    }
  }
  clearAnalysis() {
    this.alignedRecords.set([]);
    this.comparisonSummary.set(null);
    this.analysisComplete.set(false);
    this.expandedRecords.set(/* @__PURE__ */ new Set());
    this.currentRecordIndex.set(0);
  }
  // Pagination methods
  goToPreviousRecord() {
    if (this.hasPrevious()) {
      this.currentRecordIndex.update((index) => index - 1);
    }
  }
  goToNextRecord() {
    if (this.hasNext()) {
      this.currentRecordIndex.update((index) => index + 1);
    }
  }
  goToRecord(index) {
    if (index >= 0 && index < this.totalRecords()) {
      this.currentRecordIndex.set(index);
    }
  }
  expandAllRecords() {
    const totalRecords = this.totalRecords();
    const allIndices = new Set(Array.from({ length: totalRecords }, (_, i) => i));
    this.expandedRecords.set(allIndices);
  }
  collapseAllRecords() {
    this.expandedRecords.set(/* @__PURE__ */ new Set());
  }
  toggleSearchArea() {
    this.showCompactSummary.update((current) => !current);
    this.showFullSearchForm.update((current) => !current);
  }
  restartAnalysis() {
    this.analysisComplete.set(false);
    this.unifiedTimeline.set([]);
    this.unifiedSummary.set(null);
    this.alignedRecords.set([]);
    this.comparisonSummary.set(null);
    this.errorMessage.set(null);
    this.currentRecordIndex.set(0);
    this.expandedRecords.set(/* @__PURE__ */ new Set());
    this.showTelemetry.set(true);
    this.showEvents.set(true);
    this.showTrips.set(true);
    this.showCompactSummary.set(false);
    this.showFullSearchForm.set(false);
  }
  toggleTelemetryFilter() {
    this.showTelemetry.update((current) => !current);
    this.resetToFirstRecord();
  }
  toggleEventsFilter() {
    this.showEvents.update((current) => !current);
    this.resetToFirstRecord();
  }
  toggleTripsFilter() {
    this.showTrips.update((current) => !current);
    this.resetToFirstRecord();
  }
  resetToFirstRecord() {
    this.currentRecordIndex.set(0);
  }
  // Keyboard navigation
  onKeyDown(event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      this.goToPreviousRecord();
    } else if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      this.goToNextRecord();
    } else if (event.key === "Home") {
      event.preventDefault();
      this.goToRecord(0);
    } else if (event.key === "End") {
      event.preventDefault();
      this.goToRecord(this.totalRecords() - 1);
    }
  }
  static \u0275fac = function TelemetryComparisonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TelemetryComparisonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TelemetryComparisonComponent, selectors: [["app-telemetry-comparison"]], decls: 20, vars: 4, consts: [["title", ""], [1, "p-4", "max-w-6xl", "mx-auto"], [1, "mb-4", "p-4", "bg-gradient-to-br", "from-white", "to-gray-50", "rounded-lg", "border", "border-gray-200", "shadow-sm"], [1, "text-3xl", "font-bold", "text-gray-800", "mb-2"], [1, "text-sm", "text-gray-600", "m-0"], ["severity", "error", 1, "mb-6"], [1, "mb-2"], [1, "flex", "justify-between", "items-center", "gap-4"], ["header", "Unified Timeline Analysis", 1, "analysis-panel", "compact-card"], [1, "text-center", "py-12", "px-8", "bg-gray-50", "rounded", "border-2", "border-dashed", "border-gray-200"], [1, "flex", "justify-between", "items-center", "w-full"], ["icon", "pi pi-refresh", "label", "New Search", "size", "small", "severity", "secondary", 3, "outlined"], ["icon", "pi pi-refresh", "label", "New Search", "size", "small", "severity", "secondary", 3, "onClick", "outlined"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-4", "gap-3", "flex-1", "min-w-0"], [1, "flex", "gap-2", "items-baseline"], [1, "text-gray-600", "text-xs", "font-semibold", "uppercase", "tracking-wider", "whitespace-nowrap"], [1, "text-gray-800", "text-sm", "font-medium"], [1, "flex", "gap-2"], ["icon", "pi pi-pencil", "label", "Edit", "size", "small", "severity", "secondary", 3, "onClick", "outlined"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4", "mb-4"], [1, "flex", "flex-col", "gap-1"], ["for", "client-autocomplete", 1, "font-medium", "text-gray-600", "text-xs", "uppercase", "tracking-wider"], [1, "relative", "w-full"], ["id", "client-autocomplete", "placeholder", "Search for a client...", "field", "label", "inputStyleClass", "w-full", 1, "w-full", 3, "ngModelChange", "completeMethod", "onSelect", "onUnselect", "onClear", "ngModel", "suggestions", "minLength", "delay", "showClear", "forceSelection", "completeOnFocus", "dropdown"], [1, "absolute", "right-10", "top-1/2", "transform", "-translate-y-1/2", "z-10", "pointer-events-none", "flex", "items-center", "justify-center"], ["for", "asset-autocomplete", 1, "font-medium", "text-gray-600", "text-xs", "uppercase", "tracking-wider"], ["id", "asset-autocomplete", "placeholder", "Search for an asset...", "field", "label", "inputStyleClass", "w-full", 1, "w-full", 3, "ngModelChange", "completeMethod", "onSelect", "onUnselect", "onClear", "ngModel", "suggestions", "minLength", "delay", "disabled", "showClear", "forceSelection", "completeOnFocus", "dropdown"], ["for", "start-date-picker", 1, "font-medium", "text-gray-600", "text-xs", "uppercase", "tracking-wider"], ["id", "start-date-picker", "placeholder", "Select start date and time", "hourFormat", "24", "inputStyleClass", "w-full", 1, "w-full", 3, "ngModelChange", "onSelect", "ngModel", "showTime", "showSeconds", "showIcon", "showClear"], ["for", "time-range-select", 1, "font-medium", "text-gray-600", "text-xs", "uppercase", "tracking-wider"], ["id", "time-range-select", "placeholder", "Select duration", "optionLabel", "label", 1, "w-full", 3, "ngModelChange", "onChange", "ngModel", "options", "showClear"], ["for", "key-username", 1, "font-medium", "text-gray-600", "text-xs", "uppercase", "tracking-wider"], ["id", "key-username", "type", "text", "placeholder", "Enter Key API username", "autocomplete", "username", 1, "p-inputtext", "p-component", "w-full", 3, "ngModelChange", "ngModel"], ["for", "key-password", 1, "font-medium", "text-gray-600", "text-xs", "uppercase", "tracking-wider"], ["id", "key-password", "type", "password", "placeholder", "Enter Key API password", "autocomplete", "current-password", 1, "p-inputtext", "p-component", "w-full", 3, "ngModelChange", "ngModel"], [1, "mb-3", "p-3", "bg-gray-50", "rounded", "border", "border-gray-200"], [1, "flex", "justify-start", "pt-2", "border-t", "border-gray-200"], ["label", "Analyze Telemetry", "icon", "pi pi-chart-scatter", "severity", "primary", 3, "onClick", "disabled", "loading"], ["strokeWidth", "2", 1, "w-[16px]", "h-[16px]"], [1, "flex", "justify-between", "items-center", "mb-2"], [1, "text-gray-600", "text-sm", "uppercase", "tracking-wider"], [1, "text-gray-600", "font-mono", "text-sm"], [1, "flex", "justify-between", "items-center"], ["label", "Clear Results", "icon", "pi pi-times", "severity", "secondary", 3, "onClick", "outlined"], ["severity", "secondary", 3, "onClick", "label", "icon", "outlined"], ["strokeWidth", "2", 1, "mb-4"], [1, "my-4", "text-gray-600", "text-xl", "font-medium"], [1, "my-2", "text-gray-500"], [1, "flex", "justify-center", "items-center", "gap-1", "p-1", "bg-gray-50", "rounded", "border", "border-gray-200"], ["icon", "pi pi-angle-double-left", "size", "small", "severity", "secondary", 3, "onClick", "disabled", "outlined"], ["icon", "pi pi-angle-left", "size", "small", "severity", "secondary", 3, "onClick", "disabled", "outlined"], [1, "px-2", "font-semibold", "text-gray-600", "text-xs", "min-w-[60px]", "text-center"], ["icon", "pi pi-angle-right", "size", "small", "severity", "secondary", 3, "onClick", "disabled", "outlined"], ["icon", "pi pi-angle-double-right", "size", "small", "severity", "secondary", 3, "onClick", "disabled", "outlined"], [3, "class"], [1, "p-12", "text-center", "text-gray-500", "bg-gray-50", "rounded-lg", "border", "border-gray-200"], [1, "mb-2", "p-2", "px-3", "bg-gray-50", "rounded", "border-l-4", "border-green-500"], [1, "flex", "gap-2", "items-center", "text-sm"], [1, "font-semibold", "text-gray-600"], [1, "text-gray-500"], [1, "flex", "items-center", "gap-3", "mb-2", "p-2", "bg-gray-50", "rounded", "border", "border-gray-200"], [1, "font-semibold", "text-gray-600", "text-xs", "uppercase", "tracking-wider", "whitespace-nowrap"], [1, "flex", "gap-2", "flex-wrap"], ["size", "small", "styleClass", "filter-btn", 3, "onClick", "label", "severity", "outlined"], [3, "keydown"], [1, "flex", "items-center", "gap-2", "px-3", "py-2", "bg-gray-50", "border-b", "border-gray-200", "text-xs"], [1, "text-base"], [1, "font-semibold", "text-gray-700", "flex-1"], [1, "text-gray-500", "text-xs", "bg-gray-200", "px-1", "py-0.5", "rounded"], [1, "grid", "grid-cols-[150px_1fr]", "gap-2", "px-2", "py-2", "bg-gray-200", "border-b-2", "border-gray-600", "text-[0.7rem]", "font-bold", "uppercase", "tracking-wide", "text-gray-600"], [1, "flex", "items-center", "justify-start"], [1, "flex", "items-center", "gap-1", "font-mono", "text-[0.65rem]"], [1, "flex-1", "text-center", "text-blue-900", "bg-blue-50", "px-1", "py-1", "rounded", "border-l-2", "border-blue-500", "font-semibold"], [1, "text-gray-500", "text-[0.625rem]", "font-semibold", "min-w-fit"], [1, "flex-1", "text-center", "text-yellow-700", "bg-yellow-50", "px-1", "py-1", "rounded", "border-l-2", "border-yellow-400", "font-semibold"], [1, "font-semibold", "text-gray-600", "break-words", "text-[0.65rem]"], [1, "flex-1", "px-1", "py-0.5", "rounded", "break-all", "cv-value"], [1, "text-gray-500", "text-[0.625rem]", "font-semibold"], [1, "flex-1", "px-1", "py-0.5", "rounded", "break-all", "key-value"], [1, "mb-8", "p-6", "bg-gradient-to-br", "from-gray-50", "to-gray-100", "rounded-lg", "border-l-4", "border-blue-500", "shadow-sm"], [1, "m-0", "mb-4", "text-gray-600", "text-lg", "font-medium"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-4"], [1, "flex", "flex-col", "gap-2", "p-4", "bg-white", "rounded", "shadow-sm"], [1, "text-gray-600", "text-sm", "uppercase", "tracking-wider", "font-semibold"], [1, "text-gray-800", "text-base", "font-medium"], [1, "pi", "pi-chart-scatter", "text-5xl", "text-gray-500"], [1, "text-sm", "text-gray-400", "italic"], [1, "pi", "pi-info-circle", "text-5xl", "text-gray-500"]], template: function TelemetryComparisonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h1", 3);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 4)(5, "strong");
      \u0275\u0275text(6, "Compare CypherView data with Key API data.");
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " This development tool analyzes and compares telemetry, events, and trips between both systems. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(8, TelemetryComparisonComponent_Conditional_8_Template, 2, 1, "p-message", 5);
      \u0275\u0275elementStart(9, "div")(10, "p-card", 6);
      \u0275\u0275template(11, TelemetryComparisonComponent_ng_template_11_Template, 4, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275conditionalCreate(13, TelemetryComparisonComponent_Conditional_13_Template, 26, 12, "div", 7)(14, TelemetryComparisonComponent_Conditional_14_Template, 36, 33, "div");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p-card", 8);
      \u0275\u0275conditionalCreate(16, TelemetryComparisonComponent_Conditional_16_Template, 6, 0, "div", 9)(17, TelemetryComparisonComponent_Conditional_17_Template, 12, 11)(18, TelemetryComparisonComponent_Conditional_18_Template, 35, 14)(19, TelemetryComparisonComponent_Conditional_19_Template, 6, 0, "div", 9);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      const title_r13 = \u0275\u0275reference(12);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(title_r13);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.errorMessage() ? 8 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.analysisComplete() && ctx.showCompactSummary() ? 13 : 14);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isAnalyzing() ? 16 : ctx.analysisComplete() ? 17 : ctx.isReadyForAnalysis() ? 18 : 19);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    SelectModule,
    Select,
    AutoCompleteModule,
    AutoComplete,
    DatePickerModule,
    DatePicker,
    MessageModule,
    Message,
    CardModule,
    Card,
    ButtonModule,
    Button,
    ProgressSpinnerModule,
    ProgressSpinner,
    DecimalPipe,
    DatePipe
  ], styles: ["\n\n.compact-record.both-environments[_ngcontent-%COMP%] {\n  border-left: 4px solid #28a745;\n}\n.compact-record.cypherView-only[_ngcontent-%COMP%] {\n  border-left: 4px solid #007bff;\n}\n.compact-record.key-only[_ngcontent-%COMP%] {\n  border-left: 4px solid #ff9800;\n}\n.record-type-badge.badge-telemetry[_ngcontent-%COMP%] {\n  background: rgba(0, 123, 255, 0.15);\n  color: #004085;\n  border: 1px solid rgba(0, 123, 255, 0.3);\n}\n.record-type-badge.badge-event[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.15);\n  color: #856404;\n  border: 1px solid rgba(255, 193, 7, 0.3);\n}\n.record-type-badge.badge-trip[_ngcontent-%COMP%] {\n  background: rgba(40, 167, 69, 0.15);\n  color: #155724;\n  border: 1px solid rgba(40, 167, 69, 0.3);\n}\n.record-type-badge.badge-unknown[_ngcontent-%COMP%] {\n  background: rgba(108, 117, 125, 0.15);\n  color: #495057;\n  border: 1px solid rgba(108, 117, 125, 0.3);\n}\n.cv-value[_ngcontent-%COMP%] {\n  background: rgba(0, 123, 255, 0.08);\n  border-left: 2px solid #007bff;\n  color: #004085;\n}\n.cv-value.has-value[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.key-value[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.15);\n  border-left: 2px solid #ffc107;\n  color: #856404;\n}\n.key-value.has-value[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.field-row.identical[_ngcontent-%COMP%]   .cv-value[_ngcontent-%COMP%], \n.field-row.identical[_ngcontent-%COMP%]   .key-value[_ngcontent-%COMP%] {\n  color: #155724;\n  font-weight: 500;\n}\n.field-row.different[_ngcontent-%COMP%]   .cv-value[_ngcontent-%COMP%], \n.field-row.different[_ngcontent-%COMP%]   .key-value[_ngcontent-%COMP%] {\n  color: #721c24;\n  font-weight: 600;\n  background-color: rgba(220, 53, 69, 0.1);\n}\n.field-row.missing_test[_ngcontent-%COMP%]   .cv-value[_ngcontent-%COMP%] {\n  color: #721c24;\n  font-weight: 600;\n  background: rgba(220, 53, 69, 0.15);\n  border-left-color: #dc3545;\n}\n.field-row.missing_prod[_ngcontent-%COMP%]   .key-value[_ngcontent-%COMP%] {\n  color: #721c24;\n  font-weight: 600;\n  background: rgba(220, 53, 69, 0.15);\n  border-left-color: #dc3545;\n}\n.compact-card[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:ng-deep   .p-card-header[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.compact-card[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:ng-deep   .p-card-content[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n}\n[_ngcontent-%COMP%]:ng-deep   .filter-btn[_ngcontent-%COMP%]   .p-button-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n[_ngcontent-%COMP%]:ng-deep   .p-autocomplete[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%], \n[_ngcontent-%COMP%]:ng-deep   .p-datepicker[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%], \n[_ngcontent-%COMP%]:ng-deep   .p-select[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%], \n[_ngcontent-%COMP%]:ng-deep   .p-inputtext[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  font-size: 0.875rem;\n  height: auto;\n  min-height: 2.25rem;\n}\n[_ngcontent-%COMP%]:ng-deep   .p-autocomplete-input[_ngcontent-%COMP%], \n[_ngcontent-%COMP%]:ng-deep   .p-datepicker-input[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem !important;\n  font-size: 0.875rem !important;\n  height: 2.25rem !important;\n}\n[_ngcontent-%COMP%]:ng-deep   .p-select[_ngcontent-%COMP%] {\n  min-height: 2.25rem;\n}\n[_ngcontent-%COMP%]:ng-deep   .p-select[_ngcontent-%COMP%]   .p-select-label[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  font-size: 0.875rem;\n}\n[_ngcontent-%COMP%]:ng-deep   .p-button[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n}\n[_ngcontent-%COMP%]:ng-deep   .p-button.p-button-sm[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.75rem;\n  font-size: 0.75rem;\n}\n/*# sourceMappingURL=telemetry-comparison.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TelemetryComparisonComponent, [{
    type: Component,
    args: [{ selector: "app-telemetry-comparison", imports: [
      CommonModule,
      FormsModule,
      SelectModule,
      AutoCompleteModule,
      DatePickerModule,
      MessageModule,
      CardModule,
      ButtonModule,
      ProgressSpinnerModule
    ], template: `<div class="p-4 max-w-6xl mx-auto">
  <div
    class="mb-4 p-4 bg-gradient-to-br from-white to-gray-50 rounded-lg border border-gray-200 shadow-sm"
  >
    <h1 class="text-3xl font-bold text-gray-800 mb-2">{{ title }}</h1>
    <p class="text-sm text-gray-600 m-0">
      <strong>Compare CypherView data with Key API data.</strong> This
      development tool analyzes and compares telemetry, events, and trips
      between both systems.
    </p>
  </div>

  @if (errorMessage()) {
    <p-message severity="error" class="mb-6">{{ errorMessage() }}</p-message>
  }

  <div>
    <!-- Selection Panel -->
    <p-card class="mb-2">
      <ng-template #title>
        <div class="flex justify-between items-center w-full">
          <span>{{
            analysisComplete() ? 'Analysis Configuration' : 'Asset Selection'
          }}</span>
          @if (analysisComplete()) {
            <p-button
              icon="pi pi-refresh"
              label="New Search"
              size="small"
              severity="secondary"
              [outlined]="true"
              (onClick)="restartAnalysis()"
            />
          }
        </div>
      </ng-template>

      @if (analysisComplete() && showCompactSummary()) {
        <!-- Compact Configuration Summary -->
        <div class="flex justify-between items-center gap-4">
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 flex-1 min-w-0"
          >
            <div class="flex gap-2 items-baseline">
              <strong
                class="text-gray-600 text-xs font-semibold uppercase tracking-wider whitespace-nowrap"
                >Client:</strong
              >
              <span class="text-gray-800 text-sm font-medium">{{
                selectedClientName()
              }}</span>
            </div>
            <div class="flex gap-2 items-baseline">
              <strong
                class="text-gray-600 text-xs font-semibold uppercase tracking-wider whitespace-nowrap"
                >Asset:</strong
              >
              <span class="text-gray-800 text-sm font-medium">{{
                selectedAssetName()
              }}</span>
            </div>
            <div class="flex gap-2 items-baseline">
              <strong
                class="text-gray-600 text-xs font-semibold uppercase tracking-wider whitespace-nowrap"
                >Period:</strong
              >
              <span class="text-gray-800 text-sm font-medium"
                >{{ startDate() | date: 'short' }} -
                {{ endDate() | date: 'short' }}</span
              >
            </div>
            <div class="flex gap-2 items-baseline">
              <strong
                class="text-gray-600 text-xs font-semibold uppercase tracking-wider whitespace-nowrap"
                >Duration:</strong
              >
              <span class="text-gray-800 text-sm font-medium">{{
                selectedTimeRange()?.label
              }}</span>
            </div>
          </div>
          <div class="flex gap-2">
            <p-button
              icon="pi pi-pencil"
              label="Edit"
              size="small"
              severity="secondary"
              [outlined]="true"
              (onClick)="toggleSearchArea()"
            />
          </div>
        </div>
      } @else {
        <!-- Full Selection Form -->
        <div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <!-- Client Autocomplete -->
            <div class="flex flex-col gap-1">
              <label
                for="client-autocomplete"
                class="font-medium text-gray-600 text-xs uppercase tracking-wider"
                >Client</label
              >
              <div class="relative w-full">
                <p-autocomplete
                  id="client-autocomplete"
                  [(ngModel)]="selectedClient"
                  [suggestions]="filteredClients()"
                  (completeMethod)="onSearchClients($event)"
                  (onSelect)="onClientSelect($event)"
                  (onUnselect)="onClientUnselect()"
                  (onClear)="onClientUnselect()"
                  placeholder="Search for a client..."
                  field="label"
                  [minLength]="0"
                  [delay]="100"
                  [showClear]="true"
                  [forceSelection]="true"
                  class="w-full"
                  inputStyleClass="w-full"
                  [completeOnFocus]="true"
                  [dropdown]="true"
                />
                @if (loadingClients()) {
                  <div
                    class="absolute right-10 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none flex items-center justify-center"
                  >
                    <p-progress-spinner
                      strokeWidth="2"
                      class="w-[16px] h-[16px]"
                    />
                  </div>
                }
              </div>
            </div>

            <!-- Asset Autocomplete -->
            <div class="flex flex-col gap-1">
              <label
                for="asset-autocomplete"
                class="font-medium text-gray-600 text-xs uppercase tracking-wider"
                >Asset</label
              >
              <div class="relative w-full">
                <p-autocomplete
                  id="asset-autocomplete"
                  [(ngModel)]="selectedAsset"
                  [suggestions]="filteredAssets()"
                  (completeMethod)="onSearchAssets($event)"
                  (onSelect)="onAssetSelect($event)"
                  (onUnselect)="onAssetUnselect()"
                  (onClear)="onAssetUnselect()"
                  placeholder="Search for an asset..."
                  field="label"
                  [minLength]="0"
                  [delay]="100"
                  [disabled]="!selectedClient()"
                  [showClear]="true"
                  [forceSelection]="true"
                  class="w-full"
                  inputStyleClass="w-full"
                  [completeOnFocus]="true"
                  [dropdown]="true"
                />
                @if (loadingAssets()) {
                  <div
                    class="absolute right-10 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none flex items-center justify-center"
                  >
                    <p-progress-spinner
                      strokeWidth="2"
                      class="w-[16px] h-[16px]"
                    />
                  </div>
                }
              </div>
            </div>
          </div>

          <!-- Date/Time Range Row -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <!-- Start Date Picker -->
            <div class="flex flex-col gap-1">
              <label
                for="start-date-picker"
                class="font-medium text-gray-600 text-xs uppercase tracking-wider"
                >Start Date</label
              >
              <p-datepicker
                id="start-date-picker"
                [(ngModel)]="startDate"
                (onSelect)="onStartDateChange($event)"
                placeholder="Select start date and time"
                [showTime]="true"
                [showSeconds]="false"
                hourFormat="24"
                [showIcon]="true"
                [showClear]="true"
                class="w-full"
                inputStyleClass="w-full"
              />
            </div>

            <!-- Time Range Dropdown -->
            <div class="flex flex-col gap-1">
              <label
                for="time-range-select"
                class="font-medium text-gray-600 text-xs uppercase tracking-wider"
                >Duration</label
              >
              <p-select
                id="time-range-select"
                [(ngModel)]="selectedTimeRange"
                [options]="timeRangeOptions()"
                (onChange)="onTimeRangeChange($event.value)"
                placeholder="Select duration"
                optionLabel="label"
                [showClear]="true"
                class="w-full"
              />
            </div>
          </div>

          <!-- Key API Credentials Row -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div class="flex flex-col gap-1">
              <label
                for="key-username"
                class="font-medium text-gray-600 text-xs uppercase tracking-wider"
                >Key API Username</label
              >
              <input
                id="key-username"
                type="text"
                [(ngModel)]="keyApiUsername"
                placeholder="Enter Key API username"
                class="p-inputtext p-component w-full"
                autocomplete="username"
              />
            </div>

            <div class="flex flex-col gap-1">
              <label
                for="key-password"
                class="font-medium text-gray-600 text-xs uppercase tracking-wider"
                >Key API Password</label
              >
              <input
                id="key-password"
                type="password"
                [(ngModel)]="keyApiPassword"
                placeholder="Enter Key API password"
                class="p-inputtext p-component w-full"
                autocomplete="current-password"
              />
            </div>
          </div>

          <!-- Date Range Summary -->
          @if (startDate() && selectedTimeRange()) {
            <div class="mb-3 p-3 bg-gray-50 rounded border border-gray-200">
              <div class="flex justify-between items-center mb-2">
                <strong class="text-gray-600 text-sm uppercase tracking-wider"
                  >Start:</strong
                >
                <span class="text-gray-600 font-mono text-sm">{{
                  startDate() | date: 'short'
                }}</span>
              </div>
              <div class="flex justify-between items-center mb-2">
                <strong class="text-gray-600 text-sm uppercase tracking-wider"
                  >End:</strong
                >
                <span class="text-gray-600 font-mono text-sm">{{
                  endDate() | date: 'short'
                }}</span>
              </div>
              <div class="flex justify-between items-center">
                <strong class="text-gray-600 text-sm uppercase tracking-wider"
                  >Duration:</strong
                >
                <span class="text-gray-600 font-mono text-sm">{{
                  selectedTimeRange()?.label
                }}</span>
              </div>
            </div>
          }

          <!-- Action Button -->
          <div class="flex justify-start pt-2 border-t border-gray-200">
            <p-button
              label="Analyze Telemetry"
              icon="pi pi-chart-scatter"
              (onClick)="onAnalyzeTelemetry()"
              [disabled]="!isReadyForAnalysis() || isAnalyzing()"
              [loading]="isAnalyzing()"
              severity="primary"
            />
            @if (analysisComplete()) {
              <p-button
                label="Clear Results"
                icon="pi pi-times"
                (onClick)="clearAnalysis()"
                severity="secondary"
                [outlined]="true"
              />
              <p-button
                [label]="
                  expandedRecords().size > 0 ? 'Collapse All' : 'Expand All'
                "
                [icon]="
                  expandedRecords().size > 0 ? 'pi pi-minus' : 'pi pi-plus'
                "
                (onClick)="
                  expandedRecords().size > 0
                    ? collapseAllRecords()
                    : expandAllRecords()
                "
                severity="secondary"
                [outlined]="true"
              />
            }
          </div>
        </div>
      }
    </p-card>

    <!-- Analysis Results Panel -->
    <p-card
      header="Unified Timeline Analysis"
      class="analysis-panel compact-card"
    >
      @if (isAnalyzing()) {
        <div
          class="text-center py-12 px-8 bg-gray-50 rounded border-2 border-dashed border-gray-200"
        >
          <p-progress-spinner strokeWidth="2" class="mb-4" />
          <h3 class="my-4 text-gray-600 text-xl font-medium">
            Analyzing Telemetry Data
          </h3>
          <p class="my-2 text-gray-500">
            Fetching and comparing data from CypherView and Key environments...
          </p>
        </div>
      } @else if (analysisComplete()) {
        <!-- Unified Timeline Summary -->
        @if (unifiedSummary(); as summary) {
          <div
            class="mb-2 p-2 px-3 bg-gray-50 rounded border-l-4 border-green-500"
          >
            <div class="flex gap-2 items-center text-sm">
              <span class="font-semibold text-gray-600"
                >\u{1F4CA} Unified Timeline:</span
              >
              <span class="text-gray-500"
                >{{ summary.totalRecords }} records (\u{1F4E1}{{
                  summary.telemetryCount
                }}
                \u26A1{{ summary.eventsCount }} \u{1F697}{{ summary.tripsCount }}) \u2022
                {{ summary.bothPresentCount }} both \u2022
                {{ summary.overallMatchRate | number: '1.0-0' }}% match \u2022
                {{ summary.qualityStatus }}</span
              >
            </div>
          </div>

          <!-- Record Type Filters -->
          <div
            class="flex items-center gap-3 mb-2 p-2 bg-gray-50 rounded border border-gray-200"
          >
            <span
              class="font-semibold text-gray-600 text-xs uppercase tracking-wider whitespace-nowrap"
              >Show:</span
            >
            <div class="flex gap-2 flex-wrap">
              <p-button
                [label]="telemetryFilterLabel()"
                size="small"
                [severity]="showTelemetry() ? 'primary' : 'secondary'"
                [outlined]="!showTelemetry()"
                (onClick)="toggleTelemetryFilter()"
                styleClass="filter-btn"
              />
              <p-button
                [label]="eventsFilterLabel()"
                size="small"
                [severity]="showEvents() ? 'info' : 'secondary'"
                [outlined]="!showEvents()"
                (onClick)="toggleEventsFilter()"
                styleClass="filter-btn"
              />
              <p-button
                [label]="tripsFilterLabel()"
                size="small"
                [severity]="showTrips() ? 'help' : 'secondary'"
                [outlined]="!showTrips()"
                (onClick)="toggleTripsFilter()"
                styleClass="filter-btn"
              />
            </div>
          </div>
        } @else {
          <!-- Legacy telemetry-only summary -->
          @if (comparisonSummary(); as summary) {
            <div
              class="mb-2 p-2 px-3 bg-gray-50 rounded border-l-4 border-green-500"
            >
              <div class="flex gap-2 items-center text-sm">
                <span class="font-semibold text-gray-600"
                  >\u{1F4CA} Telemetry Only:</span
                >
                <span class="text-gray-500"
                  >{{ summary.totalAligned }} records \u2022
                  {{ summary.bothPresent }} both \u2022
                  {{ summary.matchRate | number: '1.0-0' }}% match \u2022
                  {{ summary.qualityStatus }}</span
                >
              </div>
            </div>
          }
        }

        <!-- Compact Pagination -->
        <div class="mb-2">
          <div
            class="flex justify-center items-center gap-1 p-1 bg-gray-50 rounded border border-gray-200"
          >
            <p-button
              icon="pi pi-angle-double-left"
              [disabled]="!hasPrevious()"
              (onClick)="goToRecord(0)"
              size="small"
              severity="secondary"
              [outlined]="true"
            />
            <p-button
              icon="pi pi-angle-left"
              [disabled]="!hasPrevious()"
              (onClick)="goToPreviousRecord()"
              size="small"
              severity="secondary"
              [outlined]="true"
            />
            <span
              class="px-2 font-semibold text-gray-600 text-xs min-w-[60px] text-center"
              >{{ recordPosition() }}</span
            >
            <p-button
              icon="pi pi-angle-right"
              [disabled]="!hasNext()"
              (onClick)="goToNextRecord()"
              size="small"
              severity="secondary"
              [outlined]="true"
            />
            <p-button
              icon="pi pi-angle-double-right"
              [disabled]="!hasNext()"
              (onClick)="goToRecord(totalRecords() - 1)"
              size="small"
              severity="secondary"
              [outlined]="true"
            />
          </div>
        </div>

        <!-- Compact Record Display -->
        @if (currentRecord(); as record) {
          <div
            (keydown)="onKeyDown($event)"
            [class]="
              'border border-gray-200 rounded bg-white outline-none focus:ring-2 focus:ring-blue-200 compact-record ' +
              getRecordStatus(record)
            "
          >
            <!-- Compact Header -->
            <div
              class="flex items-center gap-2 px-3 py-2 bg-gray-50 border-b border-gray-200 text-xs"
            >
              <div
                [class]="
                  'px-2 py-0.5 rounded-xl text-[0.6rem] font-bold uppercase tracking-wide min-w-fit record-type-badge ' +
                  getRecordTypeBadgeClass(record)
                "
              >
                {{ getRecordTypeDisplay(record) }}
              </div>
              <span class="text-base">{{ getRecordStatusIcon(record) }}</span>
              <span class="font-semibold text-gray-700 flex-1">{{
                getRecordTimestamp(record)
              }}</span>
              @if (record.timestampDiff !== undefined) {
                <span
                  class="text-gray-500 text-xs bg-gray-200 px-1 py-0.5 rounded"
                  >(\xB1{{ record.timestampDiff | number: '1.0-0' }}s)</span
                >
              }
            </div>

            <!-- Comparison Header -->
            <div
              class="grid grid-cols-[150px_1fr] gap-2 px-2 py-2 bg-gray-200 border-b-2 border-gray-600 text-[0.7rem] font-bold uppercase tracking-wide text-gray-600"
            >
              <div class="flex items-center justify-start">Field</div>
              <div class="flex items-center gap-1 font-mono text-[0.65rem]">
                <span
                  class="flex-1 text-center text-blue-900 bg-blue-50 px-1 py-1 rounded border-l-2 border-blue-500 font-semibold"
                  >\u{1F539} CypherView</span
                >
                <span
                  class="text-gray-500 text-[0.625rem] font-semibold min-w-fit"
                  >vs</span
                >
                <span
                  class="flex-1 text-center text-yellow-700 bg-yellow-50 px-1 py-1 rounded border-l-2 border-yellow-400 font-semibold"
                  >\u{1F538} Key API</span
                >
              </div>
            </div>

            <!-- Compact Comparison Table -->
            <div>
              @for (
                comparison of getFieldComparisons(record);
                track comparison.field
              ) {
                <div
                  [class]="
                    'grid grid-cols-[150px_1fr] gap-2 px-2 py-1 border-b border-gray-100 text-[0.7rem] items-center even:bg-gray-50 last:border-b-0 field-row ' +
                    comparison.status
                  "
                >
                  <div
                    class="font-semibold text-gray-600 break-words text-[0.65rem]"
                  >
                    {{ comparison.field }}
                  </div>
                  <div class="flex items-center gap-1 font-mono text-[0.65rem]">
                    <span
                      class="flex-1 px-1 py-0.5 rounded break-all cv-value"
                      [class.has-value]="comparison.testValue"
                      >{{ comparison.displayTest }}</span
                    >
                    <span class="text-gray-500 text-[0.625rem] font-semibold"
                      >vs</span
                    >
                    <span
                      class="flex-1 px-1 py-0.5 rounded break-all key-value"
                      [class.has-value]="comparison.prodValue"
                      >{{ comparison.displayProd }}</span
                    >
                  </div>
                </div>
              }
            </div>
          </div>
        } @else {
          <div
            class="p-12 text-center text-gray-500 bg-gray-50 rounded-lg border border-gray-200"
          >
            No telemetry records found.
          </div>
        }
      } @else if (isReadyForAnalysis()) {
        <div
          class="mb-8 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border-l-4 border-blue-500 shadow-sm"
        >
          <h3 class="m-0 mb-4 text-gray-600 text-lg font-medium">
            Selected Configuration
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="flex flex-col gap-2 p-4 bg-white rounded shadow-sm">
              <strong
                class="text-gray-600 text-sm uppercase tracking-wider font-semibold"
                >Client:</strong
              >
              <span class="text-gray-800 text-base font-medium">{{
                selectedClientName()
              }}</span>
            </div>
            <div class="flex flex-col gap-2 p-4 bg-white rounded shadow-sm">
              <strong
                class="text-gray-600 text-sm uppercase tracking-wider font-semibold"
                >Asset:</strong
              >
              <span class="text-gray-800 text-base font-medium">{{
                selectedAssetName()
              }}</span>
            </div>
            <div class="flex flex-col gap-2 p-4 bg-white rounded shadow-sm">
              <strong
                class="text-gray-600 text-sm uppercase tracking-wider font-semibold"
                >Time Range:</strong
              >
              <span class="text-gray-800 text-base font-medium"
                >{{ startDate() | date: 'short' }} -
                {{ endDate() | date: 'short' }}</span
              >
            </div>
            <div class="flex flex-col gap-2 p-4 bg-white rounded shadow-sm">
              <strong
                class="text-gray-600 text-sm uppercase tracking-wider font-semibold"
                >Duration:</strong
              >
              <span class="text-gray-800 text-base font-medium">{{
                selectedTimeRange()?.label
              }}</span>
            </div>
          </div>
        </div>

        <div>
          <div
            class="text-center py-12 px-8 bg-gray-50 rounded border-2 border-dashed border-gray-200"
          >
            <i class="pi pi-chart-scatter text-5xl text-gray-500"></i>
            <h3 class="my-4 text-gray-600 text-xl font-medium">
              Ready for Telemetry Analysis
            </h3>
            <p class="my-2 text-gray-500">
              Click "Analyze Telemetry" to compare data between CypherView and
              Key environments.
            </p>
            <p class="text-sm text-gray-400 italic">
              {{ selectedClientName() }} \u2192 {{ selectedAssetName() }} ({{
                selectedTimeRange()?.label
              }})
            </p>
          </div>
        </div>
      } @else {
        <div
          class="text-center py-12 px-8 bg-gray-50 rounded border-2 border-dashed border-gray-200"
        >
          <i class="pi pi-info-circle text-5xl text-gray-500"></i>
          <h3 class="my-4 text-gray-600 text-xl font-medium">
            Complete Configuration
          </h3>
          <p class="my-2 text-gray-500">
            Please select a client, asset, start date, and duration to begin
            telemetry analysis.
          </p>
        </div>
      }
    </p-card>
  </div>
</div>
`, styles: ["/* src/app/features/development/components/telemetry-comparison/telemetry-comparison.component.scss */\n.compact-record.both-environments {\n  border-left: 4px solid #28a745;\n}\n.compact-record.cypherView-only {\n  border-left: 4px solid #007bff;\n}\n.compact-record.key-only {\n  border-left: 4px solid #ff9800;\n}\n.record-type-badge.badge-telemetry {\n  background: rgba(0, 123, 255, 0.15);\n  color: #004085;\n  border: 1px solid rgba(0, 123, 255, 0.3);\n}\n.record-type-badge.badge-event {\n  background: rgba(255, 193, 7, 0.15);\n  color: #856404;\n  border: 1px solid rgba(255, 193, 7, 0.3);\n}\n.record-type-badge.badge-trip {\n  background: rgba(40, 167, 69, 0.15);\n  color: #155724;\n  border: 1px solid rgba(40, 167, 69, 0.3);\n}\n.record-type-badge.badge-unknown {\n  background: rgba(108, 117, 125, 0.15);\n  color: #495057;\n  border: 1px solid rgba(108, 117, 125, 0.3);\n}\n.cv-value {\n  background: rgba(0, 123, 255, 0.08);\n  border-left: 2px solid #007bff;\n  color: #004085;\n}\n.cv-value.has-value {\n  font-weight: 500;\n}\n.key-value {\n  background: rgba(255, 193, 7, 0.15);\n  border-left: 2px solid #ffc107;\n  color: #856404;\n}\n.key-value.has-value {\n  font-weight: 500;\n}\n.field-row.identical .cv-value,\n.field-row.identical .key-value {\n  color: #155724;\n  font-weight: 500;\n}\n.field-row.different .cv-value,\n.field-row.different .key-value {\n  color: #721c24;\n  font-weight: 600;\n  background-color: rgba(220, 53, 69, 0.1);\n}\n.field-row.missing_test .cv-value {\n  color: #721c24;\n  font-weight: 600;\n  background: rgba(220, 53, 69, 0.15);\n  border-left-color: #dc3545;\n}\n.field-row.missing_prod .key-value {\n  color: #721c24;\n  font-weight: 600;\n  background: rgba(220, 53, 69, 0.15);\n  border-left-color: #dc3545;\n}\n.compact-card :ng-deep .p-card-header {\n  padding: 0.75rem 1rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.compact-card :ng-deep .p-card-content {\n  padding: 0.75rem 1rem;\n}\n:ng-deep .filter-btn .p-button-label {\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n:ng-deep .p-autocomplete .p-inputtext,\n:ng-deep .p-datepicker .p-inputtext,\n:ng-deep .p-select .p-inputtext,\n:ng-deep .p-inputtext .p-inputtext {\n  padding: 0.5rem 0.75rem;\n  font-size: 0.875rem;\n  height: auto;\n  min-height: 2.25rem;\n}\n:ng-deep .p-autocomplete-input,\n:ng-deep .p-datepicker-input {\n  padding: 0.5rem 0.75rem !important;\n  font-size: 0.875rem !important;\n  height: 2.25rem !important;\n}\n:ng-deep .p-select {\n  min-height: 2.25rem;\n}\n:ng-deep .p-select .p-select-label {\n  padding: 0.5rem 0.75rem;\n  font-size: 0.875rem;\n}\n:ng-deep .p-button {\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n}\n:ng-deep .p-button.p-button-sm {\n  padding: 0.375rem 0.75rem;\n  font-size: 0.75rem;\n}\n/*# sourceMappingURL=telemetry-comparison.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TelemetryComparisonComponent, { className: "TelemetryComparisonComponent", filePath: "src/app/features/development/components/telemetry-comparison/telemetry-comparison.component.ts", lineNumber: 66 });
})();

// src/app/features/development/development.routes.ts
var DEVELOPMENT_ROUTES = [
  {
    path: "",
    redirectTo: "telemetry-comparison",
    pathMatch: "full"
  },
  {
    path: "telemetry-comparison",
    component: TelemetryComparisonComponent
  },
  {
    path: "analytical-report",
    component: AnalyticalReportComponent
  }
];
export {
  DEVELOPMENT_ROUTES
};
//# sourceMappingURL=chunk-EVWQBO6Z.js.map
