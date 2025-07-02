import {
  HttpClient
} from "./chunk-MWRHVJ6S.js";
import {
  InjectionToken,
  catchError,
  of,
  switchMap,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UOQWYEAO.js";
import {
  __spreadValues
} from "./chunk-R327OCYJ.js";

// src/environments/environment.ts
var environment = {
  production: false,
  showApiDropdown: true,
  apiUrls: [
    "https://v1-test-api.cypherview.net",
    "https://api.us1.kt1.io/fleet/v2",
    "https://api.staging.kt1.io/fleet/v2"
  ],
  defaultThemeId: "454d57b6-1678-4e61-8688-fb68b8b1f74c",
  flutterUrl: "/assets/flutter/index.html",
  graphqlUrl: "ws://api.us1.kt1.io/fleet/v2/gql",
  googleMapsApiKey: "AIzaSyC3PVw5GHsMfQiP5MjGxp1EW-Uea43WN48"
};

// src/app/core/models/constants.ts
var LOCAL_STORAGE_KEY_SELECTED_CLIENT = "app-client";
var LOCAL_STORAGE_KEY_ACCESS_TOKEN = "accessToken";
var LOCAL_STORAGE_KEY_REFRESH_TOKEN = "refreshToken";
var LOCAL_STORAGE_KEY_TOKEN_EXPIRY = "tokenExpiry";
var LOCAL_STORAGE_KEY_USER_SESSION = "userSession";
var MOBILE_BREAKPOINT = 768;
var DEFAULT_PAGE_SIZE = 100;
var DEFAULT_PAGE_SIZE_OPTIONS = [10, 25, 50, 100];
var DEFAULT_SYSTEM_ID = "00000000-0000-0000-0000-000000000000";
var DEFAULT_LIST_SIZE = 100;
var DEFAULT_EMAIL_PROVIDER = {
  id: "00000000-0000-0000-0000-000000000000",
  name: "Default",
  state: "active"
};
var GRID_CONFIGS = new InjectionToken("GRID_CONFIGS");
var TREE_TABLE_CONFIGS = new InjectionToken("TREE_TABLE_CONFIGS");
var COLORS = [
  "blue",
  "lightblue",
  "green",
  "olive",
  "orange",
  "pink",
  "purple",
  "red",
  "teal",
  "yellow",
  "white",
  "gray"
];

// src/app/core/models/error-reasons.enum.ts
var ErrorReasons;
(function(ErrorReasons2) {
  ErrorReasons2[ErrorReasons2["AccessTokenExpired"] = 0] = "AccessTokenExpired";
  ErrorReasons2[ErrorReasons2["RefreshTokenExpired"] = 1] = "RefreshTokenExpired";
  ErrorReasons2[ErrorReasons2["TooManyLogins"] = 2] = "TooManyLogins";
  ErrorReasons2[ErrorReasons2["RequestTimeout"] = 3] = "RequestTimeout";
  ErrorReasons2[ErrorReasons2["NoTokenAvailable"] = 4] = "NoTokenAvailable";
  ErrorReasons2[ErrorReasons2["Unknown"] = 5] = "Unknown";
  ErrorReasons2[ErrorReasons2["Unauthorized"] = 6] = "Unauthorized";
  ErrorReasons2[ErrorReasons2["NetworkError"] = 7] = "NetworkError";
  ErrorReasons2[ErrorReasons2["ServerError"] = 8] = "ServerError";
  ErrorReasons2[ErrorReasons2["InvalidEndpoint"] = 9] = "InvalidEndpoint";
  ErrorReasons2[ErrorReasons2["BadRequest"] = 10] = "BadRequest";
})(ErrorReasons || (ErrorReasons = {}));

// src/app/shared/utils/type-guards.ts
function isNullOrUndefined(value) {
  return value === null || value === void 0;
}
function isDefined(value) {
  return value !== null && value !== void 0;
}
function isString(value) {
  return typeof value === "string";
}
function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}
function isBoolean(value) {
  return typeof value === "boolean";
}
function isArray(value) {
  return Array.isArray(value);
}
function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function isValidDate(value) {
  return value instanceof Date && !isNaN(value.getTime());
}
function isEmpty(value) {
  if (isNullOrUndefined(value))
    return true;
  if (isString(value))
    return value.trim().length === 0;
  if (isArray(value))
    return value.length === 0;
  if (isObject(value))
    return Object.keys(value).length === 0;
  return false;
}
function hasProperty(value, prop) {
  return isObject(value) && prop in value;
}
function isFunction(value) {
  return typeof value === "function";
}
function isSelectOption(value) {
  return isObject(value) && hasProperty(value, "label") && hasProperty(value, "value") && isString(value["label"]);
}
function isDeepEqual(obj1, obj2) {
  if (obj1 === obj2)
    return true;
  if (isNullOrUndefined(obj1) || isNullOrUndefined(obj2))
    return false;
  const type1 = typeof obj1;
  const type2 = typeof obj2;
  if (type1 !== type2)
    return false;
  if (isValidDate(obj1) && isValidDate(obj2)) {
    return obj1.getTime() === obj2.getTime();
  }
  if (isArray(obj1) && isArray(obj2)) {
    if (obj1.length !== obj2.length)
      return false;
    return obj1.every((item, index) => isDeepEqual(item, obj2[index]));
  }
  if (isObject(obj1) && isObject(obj2)) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length)
      return false;
    return keys1.every((key) => {
      return hasProperty(obj2, key) && isDeepEqual(obj1[key], obj2[key]);
    });
  }
  return false;
}

// src/app/shared/utils/route.utils.ts
function getAllRouteParams(route) {
  let currentRoute = route;
  const params = {};
  while (isDefined(currentRoute)) {
    for (const key of currentRoute.paramMap.keys) {
      params[key] = currentRoute.paramMap.get(key);
    }
    currentRoute = currentRoute.parent;
  }
  return params;
}
function createGuardedGridRoute(basePath, guard, gridComponent, baseComponent, gridPath = "grid/:type") {
  return [
    {
      path: basePath,
      canActivate: [guard],
      component: baseComponent || void 0,
      children: []
      // Keep empty children array to allow for future sub components
    },
    {
      path: `${basePath}/${gridPath}`,
      component: gridComponent
    },
    {
      path: `${basePath}/${gridPath}/:entityType/:entityId`,
      component: gridComponent
    }
  ];
}

// src/app/shared/utils/form-utils.ts
function setNestedProperty(target, path, value) {
  if (isNullOrUndefined(target) || !path) {
    return null;
  }
  const keys = path.split(".");
  let current = target;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (current[key] === void 0 || current[key] === null || typeof current[key] !== "object") {
      current[key] = {};
    }
    current = current[key];
  }
  const lastKey = keys[keys.length - 1];
  current[lastKey] = value;
  return target;
}
function enumToSelectOptionValues(enumObj, formatLabel) {
  return Object.entries(enumObj).filter(([key]) => isNaN(Number(key))).map(([key, value]) => ({
    label: formatLabel ? formatLabel(key) : formatEnumKey(key),
    value
  }));
}
function formatEnumKey(key) {
  if (key.includes("_")) {
    return key.split("_").map((word) => capitalizeFirstLetter(word)).join(" ");
  }
  return key.replace(/([A-Z])/g, " $1").trim().split(" ").map((word) => capitalizeFirstLetter(word)).join(" ");
}
function capitalizeFirstLetter(str) {
  if (!str)
    return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// src/app/shared/utils/map.utils.ts
var SpatialUtils = class _SpatialUtils {
  static earthRadius = 6367;
  // radius in km
  static degToRad(x) {
    return x * Math.PI / 180;
  }
  static radToDeg(x) {
    return x * 180 / Math.PI;
  }
  static calculateCoord(origin, brng, arcLength) {
    const lat1 = _SpatialUtils.degToRad(origin.y);
    const lon1 = _SpatialUtils.degToRad(origin.x);
    const centralAngle = arcLength / _SpatialUtils.earthRadius;
    const lat2 = Math.asin(Math.sin(lat1) * Math.cos(centralAngle) + Math.cos(lat1) * Math.sin(centralAngle) * Math.cos(_SpatialUtils.degToRad(brng)));
    const lon2 = lon1 + Math.atan2(Math.sin(_SpatialUtils.degToRad(brng)) * Math.sin(centralAngle) * Math.cos(lat1), Math.cos(centralAngle) - Math.sin(lat1) * Math.sin(lat2));
    return {
      x: _SpatialUtils.radToDeg(lon2),
      y: _SpatialUtils.radToDeg(lat2)
    };
  }
  static getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const dLat = _SpatialUtils.degToRad(lat2 - lat1);
    const dLon = _SpatialUtils.degToRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(_SpatialUtils.degToRad(lat1)) * Math.cos(_SpatialUtils.degToRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = _SpatialUtils.earthRadius * c;
    return d;
  }
  static generateRegularPolygon(centerPoint, radius, numberOfPoints) {
    const points = [];
    const centralAngle = 360 / numberOfPoints;
    const offset = numberOfPoints === 4 ? 45 : 0;
    for (let i = 0; i < numberOfPoints; i++) {
      points.push(_SpatialUtils.calculateCoord(centerPoint, (i * centralAngle + offset) % 360, radius));
    }
    return points;
  }
  static pointInPolygon(point, polygon) {
    const { x, y } = point;
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const xi = polygon[i].x, yi = polygon[i].y;
      const xj = polygon[j].x, yj = polygon[j].y;
      const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
      if (intersect) {
        inside = !inside;
      }
    }
    return inside;
  }
};

// src/app/core/models/feature-flags.model.ts
var APP_FEATURE_FLAGS = "fleet-ui-v2";
var BACKEND_FEATURE_FLAGS = "fleet-backend-v2";
var PAGE_ICONS = {
  overview: "compass",
  dashboards: "analytics",
  alerts: "exclamation-triangle",
  videos: "photo-video",
  replay: "history",
  mapsearch: "search-location",
  reporting: "chart-bar",
  admin: "cog",
  demo: "palette",
  system: "heartbeat",
  external: "browser",
  geofence: "draw-polygon",
  assetperformance: "medal",
  devicehealth: "heart-pulse",
  settings: "sliders",
  maps: "map-marked-alt",
  notifications: "bell"
};
var AppFeatureDefaults = {
  page: {
    overview: {
      enabled: true,
      name: "",
      icon: "",
      layout: "advanced",
      show: {
        activity: true,
        events: true,
        alerts: true,
        videos: false,
        sharing: false,
        tasks: false,
        editing: false
      },
      pageSize: 300,
      customPanels: "",
      group: "",
      order: 10
    },
    dashboards: {
      enabled: false,
      show: {
        hours: false
      },
      group: "",
      order: 40
    },
    videos: {
      enabled: false,
      maxDuration: 60,
      group: "",
      order: 30
    },
    alerts: {
      enabled: false,
      feedLoadLimit: 30,
      actions: "",
      // an array of allowed action types, separated by commas
      group: "",
      order: 20
    },
    replay: {
      enabled: false,
      group: "",
      order: 50
    },
    mapsearch: {
      enabled: false,
      group: "",
      order: 60
    },
    assetperformance: {
      enabled: false,
      name: "",
      icon: "",
      group: "",
      order: 61
    },
    reporting: {
      enabled: false,
      show: {
        analytics: false
      },
      reports: "",
      // an array of guid's separated by commas
      dateLimitOverride: false,
      // enable to remove the standard report date limits and set all to 31 days (not recommended)
      group: "",
      order: 70
    },
    external: {
      enabled: false,
      tabs: ""
      // a list of name:url pairs separated by newlines
    },
    admin: {
      enabled: false,
      customPanels: "",
      show: {
        fuelCards: false
      },
      availableAssetTypes: "",
      // an array of guid's separated by commas
      group: "",
      order: 80
    },
    devicehealth: {
      enabled: false,
      order: 81,
      supportUrl: ""
    },
    geofence: {
      enabled: false,
      group: "",
      order: 90
    }
  },
  maps: {
    enabled: true,
    liveTracking: {
      enabled: true,
      refreshRate: 30
      // seconds
    },
    customMarkers: {
      enabled: true
    },
    geofences: {
      enabled: true,
      alerting: true
    },
    traffic: {
      enabled: true
    }
  },
  reporting: {
    enabled: true,
    exportFormats: {
      pdf: true,
      excel: true,
      csv: true
    },
    scheduling: {
      enabled: true
    }
  },
  notifications: {
    enabled: true,
    channels: {
      email: true,
      sms: true,
      push: true
    }
  },
  settings: {
    userManagement: {
      enabled: true,
      roles: {
        admin: true,
        manager: true,
        user: true
      }
    },
    branding: {
      enabled: true,
      logoCustomization: true,
      colorSchemes: true
    }
  }
};
var BackendFeatureDefaults = {
  geocoding: {
    roadspeed: {
      enabled: false,
      radiusRoads: 100
    }
  },
  shifts: {
    _only: ["system"],
    shifts: {
      enabled: false
    }
  },
  parsing: {
    _only: ["system"],
    native: {
      enabled: false
    },
    linking: {
      enabled: false
    },
    fnol: {
      enabled: false
    },
    v2tripcalculation: {
      enabled: false
    }
  },
  tasks: {
    _only: ["system"],
    taskservice: {
      enabled: false
    }
  },
  reports: {
    _only: ["system"],
    new_processor: {
      enabled: false
    },
    new_renderer: {
      enabled: false
    }
  },
  privacy: {
    _only: ["system"],
    trip_privacy: {
      enabled: false
    }
  },
  api: {
    rateLimit: 100,
    caching: {
      enabled: true,
      ttl: 300
    }
  },
  dataRetention: {
    tripHistory: 90,
    auditLogs: 30
  },
  integrations: {
    enabled: false,
    thirdParty: {
      _only: ["admin"],
      webhook: {
        enabled: false
      },
      restApi: {
        enabled: false
      }
    }
  }
};
var AppFeatures = {};
var AppFeatureFlagDefaults = {};
var AppFeatureSection = class {
  page;
  id;
  icon = "";
  title = "";
  fields = [];
  subfields = [];
  constructor(page, defaultState) {
    this.page = page;
    this.id = page;
    this.title = AppFeatureTranslations[page.toUpperCase()]?.["TITLE"] ?? page.toUpperCase();
    this.icon = PAGE_ICONS[page.split("-")[1]] ?? "cog";
    this.fields.push({
      id: this.page + "-enabled",
      title: "Page",
      type: "dropdown",
      required: true,
      values: [
        { key: null, value: "Inherit" },
        // Use null for 'Inherit'
        { key: true, value: "Enabled", fields: this.subfields },
        { key: false, value: "Disabled" }
      ]
    });
    this.addDefault("enabled", defaultState);
    AppFeatures[this.page] = this;
  }
  addDefault(id, defaultValue) {
    let separator = ",";
    if (id === "tabs") {
      separator = "\n";
    }
    const valueToStore = Array.isArray(defaultValue) ? defaultValue.join(separator) : defaultValue;
    AppFeatureFlagDefaults[`${this.page}-${id}`] = valueToStore;
  }
  addEnabledToggle(id, defaultValue) {
    this.addDefault(id, defaultValue);
    this.subfields.push({
      id: `${this.page}-${id}`,
      title: AppFeatureTranslations[this.page.toUpperCase()]?.[id.toUpperCase()] ?? id.toUpperCase(),
      type: "dropdown",
      required: true,
      values: [
        { key: null, value: "Inherit" },
        { key: true, value: "Enabled" },
        { key: false, value: "Disabled" }
      ],
      hint: AppFeatureTranslations[this.page.toUpperCase()]?.[`${id.toUpperCase()}-DESC`] ?? ""
    });
    return this;
  }
  addCombo(id, values, defaultValue) {
    this.addDefault(id, defaultValue);
    this.subfields.push({
      id: `${this.page}-${id}`,
      title: AppFeatureTranslations[this.page.toUpperCase()]?.[id.toUpperCase()] ?? id.toUpperCase(),
      type: "dropdown",
      required: true,
      values: [{ key: null, value: "Inherit" }, ...values],
      // Add Inherit option
      hint: AppFeatureTranslations[this.page.toUpperCase()]?.[`${id.toUpperCase()}-DESC`] ?? ""
    });
    return this;
  }
  addNumber(id, min, max, defaultValue) {
    this.addDefault(id, defaultValue);
    this.subfields.push({
      id: `${this.page}-${id}`,
      title: AppFeatureTranslations[this.page.toUpperCase()]?.[id.toUpperCase()] ?? id.toUpperCase(),
      type: "number",
      required: false,
      // Numbers are often optional overrides
      min,
      max,
      hint: AppFeatureTranslations[this.page.toUpperCase()]?.[`${id.toUpperCase()}-DESC`] ?? ""
    });
    return this;
  }
  addCheckList(id, lookupKey, defaultValue) {
    this.addDefault(id, defaultValue);
    this.subfields.push({
      id: `${this.page}-${id}`,
      title: AppFeatureTranslations[this.page.toUpperCase()]?.[id.toUpperCase()] ?? id.toUpperCase(),
      type: "checklist",
      required: false,
      values: [],
      valueLookup: lookupKey,
      hint: AppFeatureTranslations[this.page.toUpperCase()]?.[`${id.toUpperCase()}-DESC`] ?? ""
    });
    return this;
  }
  addMemo(id, defaultValue) {
    this.addDefault(id, defaultValue);
    this.subfields.push({
      id: `${this.page}-${id}`,
      title: AppFeatureTranslations[this.page.toUpperCase()]?.[id.toUpperCase()] ?? id.toUpperCase(),
      type: "memo",
      required: false,
      hint: AppFeatureTranslations[this.page.toUpperCase()]?.[`${id.toUpperCase()}-DESC`] ?? ""
    });
    return this;
  }
  addText(id, defaultValue, required) {
    this.addDefault(id, defaultValue);
    this.subfields.push({
      id: `${this.page}-${id}`,
      title: AppFeatureTranslations[this.page.toUpperCase()]?.[id.toUpperCase()] ?? id.toUpperCase(),
      type: "text",
      required,
      hint: AppFeatureTranslations[this.page.toUpperCase()]?.[`${id.toUpperCase()}-DESC`] ?? ""
    });
    return this;
  }
  addList(id) {
    this.addDefault(id, "");
    this.subfields.push({
      id: `${this.page}-${id}`,
      title: AppFeatureTranslations[this.page.toUpperCase()]?.[id.toUpperCase()] ?? id.toUpperCase(),
      type: "list",
      required: false,
      hint: AppFeatureTranslations[this.page.toUpperCase()]?.[`${id.toUpperCase()}-DESC`] ?? ""
    });
    return this;
  }
};
var BackendFeatureSection = class {
  page;
  id;
  icon = "cog";
  title = "";
  fields = [];
  defaults = {};
  constructor(page) {
    this.page = page;
    this.id = page;
    this.title = AppBackendFeatureTranslations[page.toUpperCase()]?.["TITLE"] ?? page.toUpperCase();
  }
  addDefault(id, defaultValue) {
    const valueToStore = Array.isArray(defaultValue) ? defaultValue.join(",") : defaultValue;
    this.defaults[`${this.page}-${id}`] = valueToStore;
  }
  addEnabledToggle(id, defaultValue) {
    this.addDefault(id, defaultValue);
    this.fields.push({
      id: `${this.page}-${id}`,
      title: AppBackendFeatureTranslations[this.page.toUpperCase()]?.[id.toUpperCase()] ?? id.toUpperCase(),
      type: "dropdown",
      required: true,
      values: [
        { key: null, value: "Inherit" },
        { key: true, value: "Enabled" },
        { key: false, value: "Disabled" }
      ],
      hint: AppBackendFeatureTranslations[this.page.toUpperCase()]?.[`${id.toUpperCase()}-DESC`] ?? ""
    });
    return this;
  }
  addCombo(id, values, defaultValue) {
    this.addDefault(id, defaultValue);
    this.fields.push({
      id: `${this.page}-${id}`,
      title: AppBackendFeatureTranslations[this.page.toUpperCase()]?.[id.toUpperCase()] ?? id.toUpperCase(),
      type: "dropdown",
      required: true,
      values: [{ key: null, value: "Inherit" }, ...values],
      hint: AppBackendFeatureTranslations[this.page.toUpperCase()]?.[`${id.toUpperCase()}-DESC`] ?? ""
    });
    return this;
  }
  addNumber(id, min, max, defaultValue) {
    this.addDefault(id, defaultValue);
    this.fields.push({
      id: `${this.page}-${id}`,
      title: AppBackendFeatureTranslations[this.page.toUpperCase()]?.[id.toUpperCase()] ?? id.toUpperCase(),
      type: "number",
      required: false,
      min,
      max,
      hint: AppBackendFeatureTranslations[this.page.toUpperCase()]?.[`${id.toUpperCase()}-DESC`] ?? ""
    });
    return this;
  }
  addCheckList(id, lookupKey, defaultValue) {
    this.addDefault(id, defaultValue);
    this.fields.push({
      id: `${this.page}-${id}`,
      title: AppBackendFeatureTranslations[this.page.toUpperCase()]?.[id.toUpperCase()] ?? id.toUpperCase(),
      type: "checklist",
      required: false,
      values: [],
      valueLookup: lookupKey,
      hint: AppBackendFeatureTranslations[this.page.toUpperCase()]?.[`${id.toUpperCase()}-DESC`] ?? ""
    });
    return this;
  }
  addMemo(id, defaultValue) {
    this.addDefault(id, defaultValue);
    this.fields.push({
      id: `${this.page}-${id}`,
      title: AppBackendFeatureTranslations[this.page.toUpperCase()]?.[id.toUpperCase()] ?? id.toUpperCase(),
      type: "memo",
      required: false,
      hint: AppBackendFeatureTranslations[this.page.toUpperCase()]?.[`${id.toUpperCase()}-DESC`] ?? ""
    });
    return this;
  }
  addText(id, defaultValue, required) {
    this.addDefault(id, defaultValue);
    this.fields.push({
      id: `${this.page}-${id}`,
      title: AppBackendFeatureTranslations[this.page.toUpperCase()]?.[id.toUpperCase()] ?? id.toUpperCase(),
      type: "text",
      required,
      hint: AppBackendFeatureTranslations[this.page.toUpperCase()]?.[`${id.toUpperCase()}-DESC`] ?? `${this.page.toUpperCase()}.${id.toUpperCase()}-DESC`
    });
    return this;
  }
  addList(id) {
    this.addDefault(id, "");
    this.fields.push({
      id: `${this.page}-${id}`,
      title: AppBackendFeatureTranslations[this.page.toUpperCase()]?.[id.toUpperCase()] ?? id.toUpperCase(),
      type: "list",
      required: false,
      hint: AppBackendFeatureTranslations[this.page.toUpperCase()]?.[`${id.toUpperCase()}-DESC`] ?? ""
    });
    return this;
  }
};
function createFeature(pageId, defaultState) {
  return new AppFeatureSection("page-" + pageId, defaultState);
}
function getBackendFeatureDefaults(ownerType) {
  const result = {
    bucket: BACKEND_FEATURE_FLAGS,
    sections: {},
    defaults: {}
  };
  Object.keys(BackendFeatureDefaults).forEach((name) => {
    const sectionConfig = BackendFeatureDefaults[name];
    if (isNullOrUndefined(sectionConfig) || // Type guard
    !("_only" in sectionConfig) || Array.isArray(sectionConfig._only) && sectionConfig._only.includes(ownerType)) {
      const section = new BackendFeatureSection(name);
      Object.keys(sectionConfig).forEach((featureKey) => {
        if (featureKey !== "_only") {
          const featureValue = sectionConfig[featureKey];
          if (typeof featureValue === "object" && featureValue !== null && "enabled" in featureValue && typeof featureValue.enabled === "boolean") {
            section.addEnabledToggle(`${featureKey}-enabled`, featureValue.enabled);
          }
          if (isDefined(featureValue) && typeof featureValue === "object" && !Array.isArray(featureValue) && featureValue !== null) {
            Object.keys(featureValue).forEach((propKey) => {
              const propValue = featureValue[propKey];
              if (propKey !== "enabled") {
                if (typeof propValue === "number") {
                  section.addNumber(
                    `${featureKey}-${propKey}`,
                    0,
                    // Default min, adjust if needed
                    propValue * 10 || 1e3,
                    // Default max (10x default or 1000), adjust if needed
                    propValue
                  );
                } else if (typeof propValue === "string") {
                }
              }
            });
          } else if (typeof featureValue === "number") {
            section.addNumber(featureKey, 0, featureValue * 10 || 1e3, featureValue);
          }
        }
      });
      if (section.fields.length > 0) {
        result.sections[name] = section;
        result.defaults = __spreadValues(__spreadValues({}, result.defaults), section.defaults);
      }
    }
  });
  return result;
}
function initializeShowToggles(section, showConfig) {
  Object.keys(showConfig).forEach((featureKey) => {
    const feature = featureKey;
    const defaultValue = showConfig[feature];
    if (typeof defaultValue === "boolean") {
      section.addEnabledToggle(`show-${feature}`, defaultValue);
    }
  });
}
function initializeBasicProperties(section, pageConfig) {
  if (pageConfig.group !== void 0) {
    section.addText("group", pageConfig.group, false);
  }
  if (isDefined(pageConfig.order)) {
    section.addNumber("order", 0, 1e3, pageConfig.order);
  }
  if (isDefined(pageConfig.name)) {
    section.addText("name", pageConfig.name, false);
  }
  if (isDefined(pageConfig.icon)) {
    section.addText("icon", pageConfig.icon, false);
  }
}
function initializeAdvancedProperties(section, pageConfig) {
  if (isDefined(pageConfig.pageSize)) {
    section.addNumber("pageSize", 5, 1e3, pageConfig.pageSize);
  }
  if (isDefined(pageConfig.layout)) {
    section.addCombo("layout", [
      { key: "advanced", value: "Advanced" },
      { key: "basic", value: "Basic" }
    ], pageConfig.layout);
  }
  if (isDefined(pageConfig.maxDuration)) {
    section.addNumber("maxDuration", 1, 600, pageConfig.maxDuration);
  }
  if (isDefined(pageConfig.feedLoadLimit)) {
    section.addNumber("feedLoadLimit", 30, 500, pageConfig.feedLoadLimit);
  }
}
function initializeListProperties(section, pageConfig) {
  if (isDefined(pageConfig.actions)) {
    section.addCheckList("actions", "alert-actions", pageConfig.actions.split(",").filter((a) => a));
  }
  if (isDefined(pageConfig.reports)) {
    section.addCheckList("reports", "reports", pageConfig.reports.split(",").filter((r) => r));
  }
  if (isDefined(pageConfig.tabs)) {
    section.addList("tabs");
  }
  if (isDefined(pageConfig.availableAssetTypes)) {
    section.addCheckList("availableAssetTypes", "assetTypes", pageConfig.availableAssetTypes.split(",").filter((t) => t));
  }
  if (isDefined(pageConfig.customPanels)) {
    section.addList("customPanels");
  }
}
function initializeFeatureDefaults() {
  Object.keys(AppFeatureDefaults.page).forEach((name) => {
    const pageConfig = AppFeatureDefaults.page[name];
    if (isNullOrUndefined(pageConfig))
      return;
    const section = createFeature(name, pageConfig.enabled ?? false);
    if (pageConfig.show) {
      initializeShowToggles(section, pageConfig.show);
    }
    initializeBasicProperties(section, pageConfig);
    initializeAdvancedProperties(section, pageConfig);
    initializeListProperties(section, pageConfig);
    if (isDefined(pageConfig.dateLimitOverride)) {
      section.addEnabledToggle("dateLimitOverride", pageConfig.dateLimitOverride);
    }
    if (isDefined(pageConfig.supportUrl)) {
      section.addText("supportUrl", pageConfig.supportUrl, false);
    }
  });
}
var AppBackendFeatureTranslations = {
  GEOCODING: {
    TITLE: "Geocoding",
    DESC: "Select the geocoding features to enable for this client.",
    "ROADSPEED-ENABLED": "Road Speed",
    "ROADSPEED-ENABLED-DESC": "Enable retrieval of road speed limits.",
    RADIUSROADS: "Road Radius",
    "RADIUSROADS-DESC": "The radius (in meters) around a coordinate that geocoding will search for roads (default 100m, max 1000m)."
  },
  PARSING: {
    TITLE: "Parsing",
    DESC: "Select the parsing features to enable for this client.",
    "NATIVE-ENABLED": "Native",
    "NATIVE-ENABLED-DESC": "Enable native device parsing.",
    "LINKING-ENABLED": "Asset Linking",
    "LINKING-ENABLED-DESC": "Enable automatic asset linking.",
    "FNOL-ENABLED": "FNOL Reports",
    "FNOL-ENABLED-DESC": "Enable First Notice of Loss report generation.",
    "V2TRIPCALCULATION-ENABLED": "V2 Trip Calculation",
    "V2TRIPCALCULATION-ENABLED-DESC": "Use the V2 trip calculation engine."
  },
  SHIFTS: {
    TITLE: "Shifts",
    DESC: "Enable shifts for this client.",
    "SHIFTS-ENABLED": "Enable Shifts",
    "SHIFTS-ENABLED-DESC": "Allow users to define and use work shifts."
  },
  TASKS: {
    TITLE: "Tasks",
    DESC: "Select the task features to enable for this client",
    "TASKSERVICE-ENABLED": "Enable TaskService",
    "TASKSERVICE-ENABLED-DESC": "Activate the task management service."
  },
  REPORTS: {
    TITLE: "Reports",
    DESC: "Select the reporting backend features to enable for this client",
    "NEW_PROCESSOR-ENABLED": "New Processing",
    "NEW_PROCESSOR-ENABLED-DESC": "Use the new report processing engine.",
    "NEW_RENDERER-ENABLED": "New Renderer",
    "NEW_RENDERER-ENABLED-DESC": "Use the new report rendering engine."
  },
  PRIVACY: {
    TITLE: "Privacy Features",
    DESC: "Select the privacy features to enable for this client. Note that enabling these has a performance impact for the client.",
    "TRIP_PRIVACY-ENABLED": "Trip Privacy",
    "TRIP_PRIVACY-ENABLED-DESC": "Enable trip privacy mode features."
  },
  API: {
    TITLE: "API Settings",
    DESC: "Configure API behavior.",
    RATELIMIT: "Rate Limit (requests/minute)",
    "RATELIMIT-DESC": "Set the maximum number of API requests allowed per minute.",
    "CACHING-ENABLED": "Enable Caching",
    "CACHING-ENABLED-DESC": "Enable server-side caching for API responses.",
    TTL: "Cache TTL (seconds)",
    "TTL-DESC": "Set the time-to-live for cached API responses."
  },
  DATARETENTION: {
    TITLE: "Data Retention",
    DESC: "Configure data retention periods.",
    TRIPHISTORY: "Trip History (days)",
    "TRIPHISTORY-DESC": "Number of days to retain trip history data.",
    AUDITLOGS: "Audit Logs (days)",
    "AUDITLOGS-DESC": "Number of days to retain audit log data."
  },
  INTEGRATIONS: {
    TITLE: "Integrations",
    DESC: "Configure third-party integrations.",
    "ENABLED-ENABLED": "Enable Integrations",
    // Assuming top-level enable toggle
    "ENABLED-ENABLED-DESC": "Globally enable or disable third-party integrations.",
    "WEBHOOK-ENABLED": "Webhook Support",
    "WEBHOOK-ENABLED-DESC": "Enable outgoing webhooks for event notifications.",
    "RESTAPI-ENABLED": "REST API Access",
    "RESTAPI-ENABLED-DESC": "Enable access via the third-party REST API."
  }
};
var AppFeatureTranslations = {
  "PAGE-OVERVIEW": {
    TITLE: "Overview Page",
    DESC: "The overview page provides a central page to locate assets and view their recent activity.",
    PAGE: "Page",
    "SHOW-ACTIVITY": "Activity Feed",
    "SHOW-ACTIVITY-DESC": "Enable to display the last couple of trips that an asset has completed.",
    "SHOW-EVENTS": "Event Feed",
    "SHOW-EVENTS-DESC": "Enable to display the most recent events generated by the asset.",
    "SHOW-ALERTS": "Alert Feed",
    "SHOW-ALERTS-DESC": "Enable to display the most recent alerts triggered by the asset.",
    "SHOW-VIDEOS": "Video Feed",
    "SHOW-VIDEOS-DESC": "Enable to display the most recent videos generated by the asset.",
    "SHOW-TASKS": "Tasks Feed",
    // Corrected typo from SHOW-TASK-DESC
    "SHOW-TASKS-DESC": "Enable to display the most recent tasks generated by the asset.",
    "SHOW-SHARING": "Location Sharing",
    "SHOW-SHARING-DESC": "Enable to allow sharing asset locations with third parties.",
    "SHOW-EDITING": "Asset Editing",
    "SHOW-EDITING-DESC": "Enable to allow editing assets from the overview screen.",
    PAGESIZE: "Page Size",
    "PAGESIZE-DESC": "The number of assets to load and display at one time. Larger values will negatively affect performance.",
    NAME: "Title",
    "NAME-DESC": "Optionally specify a new title for the overview page. Leave blank for default.",
    ICON: "Icon",
    "ICON-DESC": "Optionally specify a different icon, any FontAwesome icon name is accepted. Leave blank for default.",
    LAYOUT: "Layout",
    "LAYOUT-DESC": "Choose between Basic or Advanced layouts.",
    CUSTOMPANELS: "Custom Panels",
    "CUSTOMPANELS-DESC": "Add custom panels (title:url format, one per line) to the asset details view.",
    GROUP: "Section",
    "GROUP-DESC": "Choose which section within the navigation panel this page will belong to.",
    ORDER: "Order",
    "ORDER-DESC": "Specify the position of this page within the navigation panel with respect to the other items in its section."
  },
  "PAGE-DASHBOARDS": {
    TITLE: "Dashboard Page",
    DESC: "Pin dashboard graphs to generate a daily metric overview.",
    PAGE: "Page",
    "SHOW-HOURS": "Hours",
    "SHOW-HOURS-DESC": "Enable hourly reports",
    GROUP: "Section",
    "GROUP-DESC": "Choose which section within the navigation panel this page will belong to.",
    ORDER: "Order",
    "ORDER-DESC": "Specify the position of this page within the navigation panel with respect to the other items in its section."
  },
  "PAGE-VIDEOS": {
    TITLE: "Videos Page",
    DESC: "Create, monitor and respond to asset triggered videos.",
    PAGE: "Page",
    MAXDURATION: "Max duration (seconds)",
    "MAXDURATION-DESC": "Set the maximum duration for requested videos.",
    GROUP: "Section",
    "GROUP-DESC": "Choose which section within the navigation panel this page will belong to.",
    ORDER: "Order",
    "ORDER-DESC": "Specify the position of this page within the navigation panel with respect to the other items in its section.",
    "SHOW-SAVEDVIDEOS": "Saved Videos",
    "SHOW-SAVEDVIDEOS-DESC": "Enable to allow saving videos."
  },
  "PAGE-ALERTS": {
    TITLE: "Alerts Page",
    DESC: "Create, monitor and respond to asset triggered event alerts.",
    PAGE: "Page",
    ACTIONS: "Available Actions",
    "ACTIONS-DESC": "Select which actions users can perform on alerts.",
    GROUP: "Section",
    "GROUP-DESC": "Choose which section within the navigation panel this page will belong to.",
    ORDER: "Order",
    "ORDER-DESC": "Specify the position of this page within the navigation panel with respect to the other items in its section.",
    FEEDLOADLIMIT: "Alert Feed Limit",
    "FEEDLOADLIMIT-DESC": "Define the amount of Alerts to display per feed."
  },
  "PAGE-REPLAY": {
    TITLE: "Trip History Page",
    DESC: "Retrieve and replay historic trip information.",
    PAGE: "Page",
    CUSTOMPANELS: "Custom Panels",
    "CUSTOMPANELS-DESC": "Enter each custom panel on a line, in the format <title>:<url>",
    GROUP: "Section",
    "GROUP-DESC": "Choose which section within the navigation panel this page will belong to.",
    ORDER: "Order",
    "ORDER-DESC": "Specify the position of this page within the navigation panel with respect to the other items in its section."
  },
  "PAGE-MAPSEARCH": {
    TITLE: "Map Search Page",
    DESC: "Search for historic activity on a map.",
    PAGE: "Page",
    GROUP: "Section",
    "GROUP-DESC": "Choose which section within the navigation panel this page will belong to.",
    ORDER: "Order",
    "ORDER-DESC": "Specify the position of this page within the navigation panel with respect to the other items in its section."
  },
  "PAGE-ASSETPERFORMANCE": {
    TITLE: "Driver Performance Page",
    DESC: "View performance data for the assets within the system.",
    PAGE: "Page",
    NAME: "Title",
    "NAME-DESC": "Optionally specify a new title for the driver performance. Leave blank for default.",
    ICON: "Icon",
    "ICON-DESC": "Optionally specify a different icon, any FontAwesome icon name is accepted. Leave blank for default.",
    GROUP: "Section",
    "GROUP-DESC": "Choose which section within the navigation panel this page will belong to.",
    ORDER: "Order",
    "ORDER-DESC": "Specify the position of this page within the navigation panel with respect to the other items in its section."
  },
  "PAGE-DEVICEHEALTH": {
    TITLE: "Device Health Page",
    DESC: "Get an overview of device health in a handy dashboard.",
    PAGE: "Page",
    GROUP: "Section",
    "GROUP-DESC": "Choose which section within the navigation panel this page will belong to.",
    ORDER: "Order",
    "ORDER-DESC": "Specify the position of this page within the navigation panel with respect to the other items in its section.",
    SUPPORTURL: "Support Url",
    "SUPPORTURL-DESC": "Enter a URL to redirect to when a user requests support for a device issue."
  },
  "PAGE-REPORTING": {
    TITLE: "Reporting Page",
    DESC: "Generate PDF and live dashboard reports.",
    PAGE: "Page",
    "SHOW-ANALYTICS": "Dashboard Reports",
    "SHOW-ANALYTICS-DESC": "Enable to allow users to run dashboard reports.",
    REPORTS: "Reports",
    "REPORTS-DESC": "Only checked reports will be available for use by clients.",
    DATELIMITOVERRIDE: "Date Limit Override",
    "DATELIMITOVERRIDE-DESC": "WARNING: Removing the report date limits could cause report generation to fail if sufficiently large documents are requested.",
    GROUP: "Section",
    "GROUP-DESC": "Choose which section within the navigation panel this page will belong to.",
    ORDER: "Order",
    "ORDER-DESC": "Specify the position of this page within the navigation panel with respect to the other items in its section."
  },
  "PAGE-ADMIN": {
    TITLE: "Administration Page",
    DESC: "Add, modify and administer entities.",
    PAGE: "Page",
    CUSTOMPANELS: "Custom Panels",
    "CUSTOMPANELS-DESC": "Add custom panels (title:url format, one per line) to specific entity views.",
    "SHOW-FUELCARDS": "Show Fuel Cards",
    "SHOW-FUELCARDS-DESC": "Enable the fuel card management section.",
    AVAILABLEASSETTYPES: "Available Asset Types",
    "AVAILABLEASSETTYPES-DESC": "Select which asset types can be created and managed.",
    GROUP: "Section",
    "GROUP-DESC": "Choose which section within the navigation panel this page will belong to.",
    ORDER: "Order",
    "ORDER-DESC": "Specify the position of this page within the navigation panel with respect to the other items in its section."
  },
  "PAGE-EXTERNAL": {
    TITLE: "External Tabs",
    DESC: "Add external applications to the custom tabs section",
    PAGE: "Page",
    TABS: "Tabs",
    "TABS-DESC": "Add external tabs (title:url format, one per line) to the main navigation."
  },
  "PAGE-GEOFENCE": {
    TITLE: "Geofence Shortcut",
    DESC: "Display a button to open Geofence actions",
    PAGE: "Page",
    GROUP: "Section",
    "GROUP-DESC": "Choose which section within the navigation panel this page will belong to.",
    ORDER: "Order",
    "ORDER-DESC": "Specify the position of this page within the navigation panel with respect to the other items in its section."
  }
};
var AppListsTranslations = {
  MODALS: {
    "EXTERNAL-TABS": {
      TITLE: "External Tab",
      DESC: "Complete the following fields to add an external tab to the main navigation bar."
    },
    "OVERVIEW-TABS": {
      TITLE: "Overview Custom Panel",
      DESC: "Complete the following fields to add a custom tab to the asset details view."
    },
    "ADMIN-ENTITY-TABS": {
      TITLE: "Admin Entity Panel",
      DESC: "Complete the following fields to add a custom panel to an entity view."
    }
  },
  FIELDS: {
    TITLE: "Title",
    URL: "URL",
    ICON: "Icon",
    ENTITY: "Entity",
    SECTION: "Section",
    SECTION_DESC: "Leave blank to place the item in the default 'Applications' sub menu.",
    ORDER: "Order",
    ORDER_DESC: "Specify the position of this page within the navigation panel with respect to the other items in its section."
  }
};

// src/app/core/services/api-url.service.ts
var ApiUrlService = class _ApiUrlService {
  apiUrl = environment.apiUrls[0];
  // Default fallback
  cachedUrlObj = null;
  constructor() {
    const savedUrl = localStorage.getItem("apiUrl");
    this.setApiUrl(isString(savedUrl) ? savedUrl : this.apiUrl);
  }
  setApiUrl(url) {
    if (!url.trim())
      throw new Error("Empty API URL");
    try {
      const urlObj = new URL(url);
      this.cachedUrlObj = urlObj;
      this.apiUrl = url;
      localStorage.setItem("apiUrl", url);
    } catch (error) {
      this.cachedUrlObj = null;
      throw error;
    }
  }
  getCurrentApiUrl() {
    return this.apiUrl;
  }
  getUrlObject() {
    if (!this.cachedUrlObj) {
      throw new Error("No valid API URL configured. Please check your settings.");
    }
    return this.cachedUrlObj;
  }
  static \u0275fac = function ApiUrlService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApiUrlService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiUrlService, factory: _ApiUrlService.\u0275fac, providedIn: "root" });
};

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  http;
  apiUrlService;
  constructor(http, apiUrlService) {
    this.http = http;
    this.apiUrlService = apiUrlService;
  }
  login(username, password) {
    const currentApiUrl = this.apiUrlService.getCurrentApiUrl();
    return this.http.post(`${currentApiUrl}/auth/signin`, {
      username,
      password
    });
  }
  refreshToken(refreshToken) {
    const currentApiUrl = this.apiUrlService.getCurrentApiUrl();
    return this.http.post(`${currentApiUrl}/auth/refresh`, {
      refreshToken
    });
  }
  isAuthenticated() {
    const expiry = localStorage.getItem("tokenExpiry");
    if (isNullOrUndefined(expiry)) {
      return false;
    }
    return Date.now() < parseInt(expiry, 10);
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(ApiUrlService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};

// src/app/core/services/auth-token-manager.service.ts
var AuthTokenManagerService = class _AuthTokenManagerService {
  authService;
  // private readonly TOKEN_EXPIRY_BUFFER = 60000*59+55000; // 1 minute before expiry
  TOKEN_EXPIRY_BUFFER = 6e4;
  // 1 minute before expiry
  TOKEN_EXPIRY_TIME = 36e5;
  // 1 hour in milliseconds
  refreshTokenTimeout = null;
  constructor(authService) {
    this.authService = authService;
    this.scheduleTokenRefresh();
  }
  // Store tokens in localStorage
  storeTokens(response) {
    localStorage.setItem(LOCAL_STORAGE_KEY_ACCESS_TOKEN, response.accessToken);
    localStorage.setItem(LOCAL_STORAGE_KEY_REFRESH_TOKEN, response.refreshToken);
    localStorage.setItem(LOCAL_STORAGE_KEY_TOKEN_EXPIRY, (Date.now() + this.TOKEN_EXPIRY_TIME).toString());
    localStorage.setItem(LOCAL_STORAGE_KEY_USER_SESSION, JSON.stringify(response.users));
    this.scheduleTokenRefresh();
  }
  // Get access token from localStForage
  getAccessToken() {
    return localStorage.getItem(LOCAL_STORAGE_KEY_ACCESS_TOKEN);
  }
  // Get refresh token from localStorage
  getRefreshToken() {
    return localStorage.getItem(LOCAL_STORAGE_KEY_REFRESH_TOKEN);
  }
  getTokenExpiry() {
    const expiry = localStorage.getItem(LOCAL_STORAGE_KEY_TOKEN_EXPIRY);
    if (!isString(expiry))
      return null;
    const expiryTimestamp = parseInt(expiry, 10);
    if (isNaN(expiryTimestamp))
      return null;
    return new Date(expiryTimestamp).toISOString();
  }
  // Check if the token is expired
  isTokenExpired() {
    const expiry = localStorage.getItem(LOCAL_STORAGE_KEY_TOKEN_EXPIRY);
    if (!isString(expiry))
      return true;
    const expiryTimestamp = parseInt(expiry, 10);
    return isNaN(expiryTimestamp) || Date.now() > expiryTimestamp;
  }
  // Clear tokens from localStorage
  clearTokens() {
    localStorage.removeItem(LOCAL_STORAGE_KEY_ACCESS_TOKEN);
    localStorage.removeItem(LOCAL_STORAGE_KEY_REFRESH_TOKEN);
    localStorage.removeItem(LOCAL_STORAGE_KEY_TOKEN_EXPIRY);
    localStorage.removeItem(LOCAL_STORAGE_KEY_USER_SESSION);
    if (isDefined(this.refreshTokenTimeout)) {
      clearTimeout(this.refreshTokenTimeout);
      this.refreshTokenTimeout = null;
    }
  }
  // Schedule token refresh before expiry
  scheduleTokenRefresh() {
    if (this.isTokenExpired()) {
      this.clearTokens();
      return;
    }
    const expiry = localStorage.getItem(LOCAL_STORAGE_KEY_TOKEN_EXPIRY);
    if (!isString(expiry)) {
      this.clearTokens();
      return;
    }
    const expiryTimestamp = parseInt(expiry, 10);
    if (isNaN(expiryTimestamp)) {
      this.clearTokens();
      return;
    }
    const timeout = expiryTimestamp - Date.now() - this.TOKEN_EXPIRY_BUFFER;
    if (isDefined(this.refreshTokenTimeout)) {
      clearTimeout(this.refreshTokenTimeout);
    }
    setTimeout(() => {
      this.refreshToken().subscribe();
    }, timeout);
  }
  // Refresh the token
  refreshToken() {
    const refreshToken = this.getRefreshToken();
    if (!isString(refreshToken)) {
      this.clearTokens();
      return throwError(() => "No refresh token available");
    }
    return this.authService.refreshToken(refreshToken).pipe(switchMap((response) => {
      this.storeTokens(response);
      return of(response);
    }), catchError((error) => {
      this.clearTokens();
      return throwError(() => error);
    }));
  }
  static \u0275fac = function AuthTokenManagerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthTokenManagerService)(\u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthTokenManagerService, factory: _AuthTokenManagerService.\u0275fac, providedIn: "root" });
};

export {
  isNullOrUndefined,
  isDefined,
  isString,
  isNumber,
  isBoolean,
  isArray,
  isObject,
  isEmpty,
  hasProperty,
  isFunction,
  isSelectOption,
  isDeepEqual,
  getAllRouteParams,
  createGuardedGridRoute,
  setNestedProperty,
  enumToSelectOptionValues,
  SpatialUtils,
  environment,
  ApiUrlService,
  AuthService,
  LOCAL_STORAGE_KEY_SELECTED_CLIENT,
  LOCAL_STORAGE_KEY_ACCESS_TOKEN,
  LOCAL_STORAGE_KEY_REFRESH_TOKEN,
  LOCAL_STORAGE_KEY_TOKEN_EXPIRY,
  LOCAL_STORAGE_KEY_USER_SESSION,
  MOBILE_BREAKPOINT,
  DEFAULT_PAGE_SIZE,
  DEFAULT_PAGE_SIZE_OPTIONS,
  DEFAULT_SYSTEM_ID,
  DEFAULT_LIST_SIZE,
  DEFAULT_EMAIL_PROVIDER,
  GRID_CONFIGS,
  TREE_TABLE_CONFIGS,
  COLORS,
  ErrorReasons,
  APP_FEATURE_FLAGS,
  BACKEND_FEATURE_FLAGS,
  AppFeatureDefaults,
  BackendFeatureDefaults,
  AppFeatures,
  AppFeatureFlagDefaults,
  getBackendFeatureDefaults,
  initializeFeatureDefaults,
  AppListsTranslations,
  AuthTokenManagerService
};
//# sourceMappingURL=chunk-DIN3XHWB.js.map
