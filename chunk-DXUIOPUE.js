import {
  ApiUrlService,
  hasProperty,
  isDefined,
  isNullOrUndefined,
  isNumber,
  isObject,
  isString
} from "./chunk-EMFP3DUF.js";
import {
  DestroyRef,
  Injectable,
  InjectionToken,
  Injector,
  Observable,
  ReplaySubject,
  RuntimeError,
  assertInInjectionContext,
  assertNotInReactiveContext,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  takeUntil,
  untracked,
  ɵɵdefineInjectable
} from "./chunk-LH7TWNW2.js";
import {
  __commonJS,
  __spreadValues,
  __toESM
} from "./chunk-7WUTQBRG.js";

// node_modules/lz-string/libs/lz-string.js
var require_lz_string = __commonJS({
  "node_modules/lz-string/libs/lz-string.js"(exports, module) {
    "use strict";
    var LZString2 = (function() {
      var f = String.fromCharCode;
      var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
      var baseReverseDic = {};
      function getBaseValue(alphabet, character) {
        if (!baseReverseDic[alphabet]) {
          baseReverseDic[alphabet] = {};
          for (var i = 0; i < alphabet.length; i++) {
            baseReverseDic[alphabet][alphabet.charAt(i)] = i;
          }
        }
        return baseReverseDic[alphabet][character];
      }
      var LZString3 = {
        compressToBase64: function(input) {
          if (input == null) return "";
          var res = LZString3._compress(input, 6, function(a) {
            return keyStrBase64.charAt(a);
          });
          switch (res.length % 4) {
            // To produce valid Base64
            default:
            // When could this happen ?
            case 0:
              return res;
            case 1:
              return res + "===";
            case 2:
              return res + "==";
            case 3:
              return res + "=";
          }
        },
        decompressFromBase64: function(input) {
          if (input == null) return "";
          if (input == "") return null;
          return LZString3._decompress(input.length, 32, function(index) {
            return getBaseValue(keyStrBase64, input.charAt(index));
          });
        },
        compressToUTF16: function(input) {
          if (input == null) return "";
          return LZString3._compress(input, 15, function(a) {
            return f(a + 32);
          }) + " ";
        },
        decompressFromUTF16: function(compressed) {
          if (compressed == null) return "";
          if (compressed == "") return null;
          return LZString3._decompress(compressed.length, 16384, function(index) {
            return compressed.charCodeAt(index) - 32;
          });
        },
        //compress into uint8array (UCS-2 big endian format)
        compressToUint8Array: function(uncompressed) {
          var compressed = LZString3.compress(uncompressed);
          var buf = new Uint8Array(compressed.length * 2);
          for (var i = 0, TotalLen = compressed.length; i < TotalLen; i++) {
            var current_value = compressed.charCodeAt(i);
            buf[i * 2] = current_value >>> 8;
            buf[i * 2 + 1] = current_value % 256;
          }
          return buf;
        },
        //decompress from uint8array (UCS-2 big endian format)
        decompressFromUint8Array: function(compressed) {
          if (compressed === null || compressed === void 0) {
            return LZString3.decompress(compressed);
          } else {
            var buf = new Array(compressed.length / 2);
            for (var i = 0, TotalLen = buf.length; i < TotalLen; i++) {
              buf[i] = compressed[i * 2] * 256 + compressed[i * 2 + 1];
            }
            var result = [];
            buf.forEach(function(c) {
              result.push(f(c));
            });
            return LZString3.decompress(result.join(""));
          }
        },
        //compress into a string that is already URI encoded
        compressToEncodedURIComponent: function(input) {
          if (input == null) return "";
          return LZString3._compress(input, 6, function(a) {
            return keyStrUriSafe.charAt(a);
          });
        },
        //decompress from an output of compressToEncodedURIComponent
        decompressFromEncodedURIComponent: function(input) {
          if (input == null) return "";
          if (input == "") return null;
          input = input.replace(/ /g, "+");
          return LZString3._decompress(input.length, 32, function(index) {
            return getBaseValue(keyStrUriSafe, input.charAt(index));
          });
        },
        compress: function(uncompressed) {
          return LZString3._compress(uncompressed, 16, function(a) {
            return f(a);
          });
        },
        _compress: function(uncompressed, bitsPerChar, getCharFromInt) {
          if (uncompressed == null) return "";
          var i, value, context_dictionary = {}, context_dictionaryToCreate = {}, context_c = "", context_wc = "", context_w = "", context_enlargeIn = 2, context_dictSize = 3, context_numBits = 2, context_data = [], context_data_val = 0, context_data_position = 0, ii;
          for (ii = 0; ii < uncompressed.length; ii += 1) {
            context_c = uncompressed.charAt(ii);
            if (!Object.prototype.hasOwnProperty.call(context_dictionary, context_c)) {
              context_dictionary[context_c] = context_dictSize++;
              context_dictionaryToCreate[context_c] = true;
            }
            context_wc = context_w + context_c;
            if (Object.prototype.hasOwnProperty.call(context_dictionary, context_wc)) {
              context_w = context_wc;
            } else {
              if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
                if (context_w.charCodeAt(0) < 256) {
                  for (i = 0; i < context_numBits; i++) {
                    context_data_val = context_data_val << 1;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                  }
                  value = context_w.charCodeAt(0);
                  for (i = 0; i < 8; i++) {
                    context_data_val = context_data_val << 1 | value & 1;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                    value = value >> 1;
                  }
                } else {
                  value = 1;
                  for (i = 0; i < context_numBits; i++) {
                    context_data_val = context_data_val << 1 | value;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                    value = 0;
                  }
                  value = context_w.charCodeAt(0);
                  for (i = 0; i < 16; i++) {
                    context_data_val = context_data_val << 1 | value & 1;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                    value = value >> 1;
                  }
                }
                context_enlargeIn--;
                if (context_enlargeIn == 0) {
                  context_enlargeIn = Math.pow(2, context_numBits);
                  context_numBits++;
                }
                delete context_dictionaryToCreate[context_w];
              } else {
                value = context_dictionary[context_w];
                for (i = 0; i < context_numBits; i++) {
                  context_data_val = context_data_val << 1 | value & 1;
                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                  value = value >> 1;
                }
              }
              context_enlargeIn--;
              if (context_enlargeIn == 0) {
                context_enlargeIn = Math.pow(2, context_numBits);
                context_numBits++;
              }
              context_dictionary[context_wc] = context_dictSize++;
              context_w = String(context_c);
            }
          }
          if (context_w !== "") {
            if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
              if (context_w.charCodeAt(0) < 256) {
                for (i = 0; i < context_numBits; i++) {
                  context_data_val = context_data_val << 1;
                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                }
                value = context_w.charCodeAt(0);
                for (i = 0; i < 8; i++) {
                  context_data_val = context_data_val << 1 | value & 1;
                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                  value = value >> 1;
                }
              } else {
                value = 1;
                for (i = 0; i < context_numBits; i++) {
                  context_data_val = context_data_val << 1 | value;
                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                  value = 0;
                }
                value = context_w.charCodeAt(0);
                for (i = 0; i < 16; i++) {
                  context_data_val = context_data_val << 1 | value & 1;
                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                  value = value >> 1;
                }
              }
              context_enlargeIn--;
              if (context_enlargeIn == 0) {
                context_enlargeIn = Math.pow(2, context_numBits);
                context_numBits++;
              }
              delete context_dictionaryToCreate[context_w];
            } else {
              value = context_dictionary[context_w];
              for (i = 0; i < context_numBits; i++) {
                context_data_val = context_data_val << 1 | value & 1;
                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }
                value = value >> 1;
              }
            }
            context_enlargeIn--;
            if (context_enlargeIn == 0) {
              context_enlargeIn = Math.pow(2, context_numBits);
              context_numBits++;
            }
          }
          value = 2;
          for (i = 0; i < context_numBits; i++) {
            context_data_val = context_data_val << 1 | value & 1;
            if (context_data_position == bitsPerChar - 1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
          while (true) {
            context_data_val = context_data_val << 1;
            if (context_data_position == bitsPerChar - 1) {
              context_data.push(getCharFromInt(context_data_val));
              break;
            } else context_data_position++;
          }
          return context_data.join("");
        },
        decompress: function(compressed) {
          if (compressed == null) return "";
          if (compressed == "") return null;
          return LZString3._decompress(compressed.length, 32768, function(index) {
            return compressed.charCodeAt(index);
          });
        },
        _decompress: function(length, resetValue, getNextValue) {
          var dictionary = [], next, enlargeIn = 4, dictSize = 4, numBits = 3, entry = "", result = [], i, w, bits, resb, maxpower, power, c, data = { val: getNextValue(0), position: resetValue, index: 1 };
          for (i = 0; i < 3; i += 1) {
            dictionary[i] = i;
          }
          bits = 0;
          maxpower = Math.pow(2, 2);
          power = 1;
          while (power != maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb > 0 ? 1 : 0) * power;
            power <<= 1;
          }
          switch (next = bits) {
            case 0:
              bits = 0;
              maxpower = Math.pow(2, 8);
              power = 1;
              while (power != maxpower) {
                resb = data.val & data.position;
                data.position >>= 1;
                if (data.position == 0) {
                  data.position = resetValue;
                  data.val = getNextValue(data.index++);
                }
                bits |= (resb > 0 ? 1 : 0) * power;
                power <<= 1;
              }
              c = f(bits);
              break;
            case 1:
              bits = 0;
              maxpower = Math.pow(2, 16);
              power = 1;
              while (power != maxpower) {
                resb = data.val & data.position;
                data.position >>= 1;
                if (data.position == 0) {
                  data.position = resetValue;
                  data.val = getNextValue(data.index++);
                }
                bits |= (resb > 0 ? 1 : 0) * power;
                power <<= 1;
              }
              c = f(bits);
              break;
            case 2:
              return "";
          }
          dictionary[3] = c;
          w = c;
          result.push(c);
          while (true) {
            if (data.index > length) {
              return "";
            }
            bits = 0;
            maxpower = Math.pow(2, numBits);
            power = 1;
            while (power != maxpower) {
              resb = data.val & data.position;
              data.position >>= 1;
              if (data.position == 0) {
                data.position = resetValue;
                data.val = getNextValue(data.index++);
              }
              bits |= (resb > 0 ? 1 : 0) * power;
              power <<= 1;
            }
            switch (c = bits) {
              case 0:
                bits = 0;
                maxpower = Math.pow(2, 8);
                power = 1;
                while (power != maxpower) {
                  resb = data.val & data.position;
                  data.position >>= 1;
                  if (data.position == 0) {
                    data.position = resetValue;
                    data.val = getNextValue(data.index++);
                  }
                  bits |= (resb > 0 ? 1 : 0) * power;
                  power <<= 1;
                }
                dictionary[dictSize++] = f(bits);
                c = dictSize - 1;
                enlargeIn--;
                break;
              case 1:
                bits = 0;
                maxpower = Math.pow(2, 16);
                power = 1;
                while (power != maxpower) {
                  resb = data.val & data.position;
                  data.position >>= 1;
                  if (data.position == 0) {
                    data.position = resetValue;
                    data.val = getNextValue(data.index++);
                  }
                  bits |= (resb > 0 ? 1 : 0) * power;
                  power <<= 1;
                }
                dictionary[dictSize++] = f(bits);
                c = dictSize - 1;
                enlargeIn--;
                break;
              case 2:
                return result.join("");
            }
            if (enlargeIn == 0) {
              enlargeIn = Math.pow(2, numBits);
              numBits++;
            }
            if (dictionary[c]) {
              entry = dictionary[c];
            } else {
              if (c === dictSize) {
                entry = w + w.charAt(0);
              } else {
                return null;
              }
            }
            result.push(entry);
            dictionary[dictSize++] = w + entry.charAt(0);
            enlargeIn--;
            w = entry;
            if (enlargeIn == 0) {
              enlargeIn = Math.pow(2, numBits);
              numBits++;
            }
          }
        }
      };
      return LZString3;
    })();
    if (typeof define === "function" && define.amd) {
      define(function() {
        return LZString2;
      });
    } else if (typeof module !== "undefined" && module != null) {
      module.exports = LZString2;
    } else if (typeof angular !== "undefined" && angular != null) {
      angular.module("LZString", []).factory("LZString", function() {
        return LZString2;
      });
    }
  }
});

// src/app/core/models/constants.ts
var LOCAL_STORAGE_KEY_SELECTED_CLIENT = "app-client";
var LOCAL_STORAGE_KEY_ACCESS_TOKEN = "accessToken";
var LOCAL_STORAGE_KEY_REFRESH_TOKEN = "refreshToken";
var LOCAL_STORAGE_KEY_TOKEN_EXPIRY = "tokenExpiry";
var LOCAL_STORAGE_KEY_USER_SESSION = "userSession";
var LOCAL_STORAGE_KEY_SELECTED_SESSION_ID = "selectedSessionId";
var LOCAL_STORAGE_SIDEBAR_STATE_KEY = "sidebar-main-visible";
var LOCAL_STORAGE_LAST_AUTHENTICATED_USER_ID = "lastAuthenticatedUserId";
var LOCAL_STORAGE_KEY_RECENT_CLIENTS = "cypherview_recent_clients";
var MAX_RECENT_CLIENTS = 5;
var MOBILE_BREAKPOINT = 768;
var DEFAULT_PAGE_SIZE = 100;
var DEFAULT_PAGE_SIZE_OPTIONS = [10, 25, 50, 100];
var DEFAULT_SYSTEM_ID = "00000000-0000-0000-0000-000000000000";
var SUPER_ADMIN_ROLE_ID = "00000000-0000-0000-0000-000000000001";
var DEFAULT_LIST_SIZE = 100;
var ASSET_TYPE_WITH_AVATAR = "driver";
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
var SEARCH_DEBOUNCE_TIME = 300;
var CLIENT_SEARCH_LIMIT = 6;

// src/app/core/models/feature-flags.model.ts
var APP_FEATURE_FLAGS = "fleet-ui-v2";
var BACKEND_FEATURE_FLAGS = "fleet-backend-v2";
var PAGE_ICONS = {
  overview: "compass",
  dashboards: "chart-line",
  alerts: "exclamation-triangle",
  videos: "photo-video",
  replay: "history",
  mapsearch: "search-location",
  reporting: "chart-bar",
  admin: "cog",
  demo: "palette",
  system: "heartbeat",
  external: "window-maximize",
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
    /*  dashboards: {
      enabled: false,
      show: {
        hours: false,
      },
      group: '',
      order: 40,
    }, */
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
    /*   mapsearch: {
      enabled: false,
      group: '',
      order: 60,
    },
    assetperformance: {
      enabled: false,
      name: '',
      icon: '',
      group: '',
      order: 61,
    },
    reporting: {
      enabled: false,
      show: {
        analytics: false,
      },
      reports: '', // an array of guid's separated by commas
      dateLimitOverride: false, // enable to remove the standard report date limits and set all to 31 days (not recommended)
      group: '',
      order: 70,
    }, */
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
        { key: "null", value: "Inherit" },
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
        { key: "null", value: "Inherit" },
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
      values: [{ key: "null", value: "Inherit" }, ...values],
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
        { key: "null", value: "Inherit" },
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
      values: [{ key: "null", value: "Inherit" }, ...values],
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
  ErrorReasons2[ErrorReasons2["Forbidden"] = 11] = "Forbidden";
})(ErrorReasons || (ErrorReasons = {}));

// src/app/shared/services/local-storage.service.ts
var LZString = __toESM(require_lz_string());
var StorageQuotaError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "StorageQuotaError";
  }
};
var LocalStorageService = class _LocalStorageService {
  static MAX_ITEM_SIZE = 2 * 1024 * 1024;
  // 2MB
  static STORAGE_LIMIT = 5 * 1024 * 1024;
  // 5MB
  static COMPRESSION_THRESHOLD = 1024;
  // 1KB
  static CURRENT_VERSION = 1;
  // Keys that should be scoped per-user
  static USER_SCOPED_KEYS = /* @__PURE__ */ new Set([
    LOCAL_STORAGE_KEY_SELECTED_CLIENT,
    LOCAL_STORAGE_SIDEBAR_STATE_KEY,
    LOCAL_STORAGE_KEY_RECENT_CLIENTS
  ]);
  // Keys that should never be namespaced (truly global)
  static GLOBAL_KEYS = /* @__PURE__ */ new Set([
    LOCAL_STORAGE_LAST_AUTHENTICATED_USER_ID
  ]);
  // Keys that should only be namespaced by API (shared across users on same API)
  // Note: User sessions are API-scoped because they're available before profile loads
  static API_SCOPED_KEYS = /* @__PURE__ */ new Set([
    LOCAL_STORAGE_KEY_ACCESS_TOKEN,
    LOCAL_STORAGE_KEY_REFRESH_TOKEN,
    LOCAL_STORAGE_KEY_TOKEN_EXPIRY,
    LOCAL_STORAGE_KEY_USER_SESSION,
    LOCAL_STORAGE_KEY_SELECTED_SESSION_ID
  ]);
  apiUrlService = inject(ApiUrlService);
  // Store current user ID internally to avoid circular dependency
  currentUserIdSignal = signal(null, ...ngDevMode ? [{ debugName: "currentUserIdSignal" }] : []);
  /**
   * Sets the current user ID for namespacing.
   * Should be called by AuthDataService after profile is loaded.
   */
  setCurrentUserId(userId) {
    this.currentUserIdSignal.set(userId);
  }
  /**
   * Gets the current user ID for namespacing.
   */
  getCurrentUserId() {
    return this.currentUserIdSignal();
  }
  /**
   * Gets the current user ID as a signal for reactive access.
   */
  getCurrentUserIdSignal() {
    return this.currentUserIdSignal.asReadonly();
  }
  /**
   * Generates a namespaced key based on scope requirements.
   * - GLOBAL_KEYS: No namespace
   * - API_SCOPED_KEYS: API URL hash only
   * - USER_SCOPED_KEYS: API URL hash + User ID
   * - Default: API URL hash + User ID
   *
   * @param key - The original key
   * @returns A namespaced key
   */
  generateNamespacedKey(key) {
    try {
      if (_LocalStorageService.GLOBAL_KEYS.has(key)) {
        return key;
      }
      const apiUrl = this.apiUrlService.getCurrentApiUrl();
      const apiHash = this.simpleHash(apiUrl);
      if (_LocalStorageService.API_SCOPED_KEYS.has(key)) {
        return `${apiHash}_${key}`;
      }
      if (_LocalStorageService.USER_SCOPED_KEYS.has(key)) {
        const userId2 = this.currentUserIdSignal() ?? "pending";
        return `${apiHash}_${userId2}_${key}`;
      }
      const userId = this.currentUserIdSignal() ?? "anonymous";
      return `${apiHash}_${userId}_${key}`;
    } catch (error) {
      console.warn("Could not generate namespaced key, using original key:", error);
      return key;
    }
  }
  /**
   * Simple hash function to create a short identifier from API URL
   */
  simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.codePointAt(i);
      if (char !== void 0) {
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
      }
    }
    return Math.abs(hash).toString(36);
  }
  /**
   * Clears all user-scoped data for a specific user.
   * @param userId - The user ID whose data should be cleared (optional, uses current if not provided)
   */
  clearUserScopedData(userId) {
    try {
      const apiUrl = this.apiUrlService.getCurrentApiUrl();
      const apiHash = this.simpleHash(apiUrl);
      const targetUserId = userId ?? this.getCurrentUserId() ?? "pending";
      const prefix = `${apiHash}_${targetUserId}_`;
      const keysToRemove = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (isDefined(key) && key.startsWith(prefix)) {
          keysToRemove.push(key);
        }
      }
      for (const key of keysToRemove) {
        localStorage.removeItem(key);
      }
    } catch (error) {
      console.error("Error clearing user-scoped data:", error);
    }
  }
  /**
   * Clears all API-scoped data (tokens, etc.) for the current API.
   * Used during logout to clear authentication state.
   */
  clearApiScopedData() {
    try {
      const apiUrl = this.apiUrlService.getCurrentApiUrl();
      const apiHash = this.simpleHash(apiUrl);
      for (const key of _LocalStorageService.API_SCOPED_KEYS) {
        const storageKey = `${apiHash}_${key}`;
        localStorage.removeItem(storageKey);
      }
    } catch (error) {
      console.error("Error clearing API-scoped data:", error);
    }
  }
  /**
   * Checks if there's a user mismatch (different user trying to access data).
   * Returns true if the last authenticated user is different from the current user.
   */
  detectUserMismatch(currentUserId) {
    const lastUserId = localStorage.getItem(LOCAL_STORAGE_LAST_AUTHENTICATED_USER_ID);
    return isDefined(lastUserId) && lastUserId !== currentUserId;
  }
  /**
   * Records the current authenticated user ID.
   */
  setLastAuthenticatedUserId(userId) {
    localStorage.setItem(LOCAL_STORAGE_LAST_AUTHENTICATED_USER_ID, userId);
  }
  /**
   * Migrates data from 'pending' namespace to actual user ID namespace.
   * Called after successful login when user profile becomes available.
   */
  migrateFromPendingToUser(userId) {
    try {
      const apiUrl = this.apiUrlService.getCurrentApiUrl();
      const apiHash = this.simpleHash(apiUrl);
      const pendingPrefix = `${apiHash}_pending_`;
      const userPrefix = `${apiHash}_${userId}_`;
      const keysToMigrate = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (isDefined(key) && key.startsWith(pendingPrefix)) {
          const baseName = key.substring(pendingPrefix.length);
          keysToMigrate.push({
            old: key,
            new: `${userPrefix}${baseName}`
          });
        }
      }
      for (const { old: oldKey, new: newKey } of keysToMigrate) {
        const value = localStorage.getItem(oldKey);
        if (isDefined(value)) {
          localStorage.setItem(newKey, value);
          localStorage.removeItem(oldKey);
        }
      }
    } catch (error) {
      console.error("Error migrating from pending to user:", error);
    }
  }
  /**
   * Migrates an existing non-namespaced item to the current namespace.
   * This is useful for migrating existing user preferences and settings.
   *
   * @param key - The key of the item to migrate
   * @param removeOriginal - Whether to remove the original non-namespaced item (default: true)
   * @returns true if migration was successful, false if no data found to migrate
   */
  migrateToNamespace(key, removeOriginal = true) {
    try {
      const existingData = this.getItem(key, false);
      if (existingData === null) {
        return false;
      }
      this.setItem(key, existingData, void 0, true);
      if (removeOriginal) {
        this.removeItem(key, false);
      }
      return true;
    } catch (error) {
      console.error(`Failed to migrate localStorage key ${key}:`, error);
      return false;
    }
  }
  /**
   * Migrates multiple keys to the current namespace.
   *
   * @param keys - Array of keys to migrate
   * @param removeOriginals - Whether to remove original non-namespaced items (default: true)
   * @returns Object with migration results for each key
   */
  migrateMultipleToNamespace(keys, removeOriginals = true) {
    const results = {};
    for (const key of keys) {
      results[key] = this.migrateToNamespace(key, removeOriginals);
    }
    return results;
  }
  getItem(key, useNamespace = true) {
    try {
      const storageKey = useNamespace ? this.generateNamespacedKey(key) : key;
      const value = localStorage.getItem(storageKey);
      if (isNullOrUndefined(value))
        return null;
      let parsedValue;
      try {
        parsedValue = JSON.parse(value);
        if (!isObject(parsedValue) || !hasProperty(parsedValue, "metadata")) {
          return JSON.parse(value);
        }
      } catch {
        return value;
      }
      if (parsedValue.metadata.version !== _LocalStorageService.CURRENT_VERSION) {
        console.warn(`Version mismatch for key: ${key}`);
        this.removeItem(key);
        return null;
      }
      if (hasProperty(parsedValue.metadata, "expires") && isNumber(parsedValue.metadata.expires) && Date.now() > parsedValue.metadata.expires) {
        this.removeItem(key);
        return null;
      }
      let data = parsedValue.data;
      if (hasProperty(parsedValue.metadata, "compressed") && parsedValue.metadata.compressed === true) {
        if (isString(data)) {
          data = LZString.decompress(data);
        }
      }
      return isString(data) ? JSON.parse(data) : data;
    } catch (error) {
      console.warn(`Failed to retrieve item with key: ${key}`, error);
      return null;
    }
  }
  setItem(key, value, ttlMinutes, useNamespace = true) {
    if (!isString(key) || !this.validateKey(key)) {
      throw new Error("Invalid key provided");
    }
    const metadata = {
      version: _LocalStorageService.CURRENT_VERSION,
      timestamp: Date.now(),
      expires: isDefined(ttlMinutes) && isNumber(ttlMinutes) ? Date.now() + ttlMinutes * 60 * 1e3 : void 0
    };
    let stringValue = JSON.stringify(value);
    if (stringValue.length > _LocalStorageService.COMPRESSION_THRESHOLD) {
      stringValue = LZString.compress(stringValue);
      metadata.compressed = true;
    }
    const storageItem = {
      data: stringValue,
      metadata
    };
    const finalValue = JSON.stringify(storageItem);
    const itemSize = new Blob([finalValue]).size;
    if (itemSize > _LocalStorageService.MAX_ITEM_SIZE) {
      throw new StorageQuotaError(`Item size (${itemSize} bytes) exceeds maximum allowed size`);
    }
    if (!this.hasAvailableSpace(itemSize)) {
      throw new StorageQuotaError("Storage quota exceeded");
    }
    try {
      const storageKey = useNamespace ? this.generateNamespacedKey(key) : key;
      localStorage.setItem(storageKey, finalValue);
    } catch (error) {
      if (this.isQuotaExceededError(error)) {
        throw new StorageQuotaError("Storage quota exceeded");
      }
      throw error;
    }
  }
  removeItem(key, useNamespace = true) {
    try {
      const storageKey = useNamespace ? this.generateNamespacedKey(key) : key;
      localStorage.removeItem(storageKey);
    } catch (error) {
      console.error("Error removing from localStorage:", error);
    }
  }
  clear() {
    try {
      localStorage.clear();
    } catch (error) {
      console.error("Error clearing localStorage:", error);
    }
  }
  getCurrentUsage() {
    let totalSize = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (isDefined(key) && isString(key)) {
        const item = localStorage.getItem(key);
        if (isDefined(item)) {
          totalSize += new Blob([item]).size;
        }
      }
    }
    return totalSize;
  }
  validateKey(key) {
    return isString(key) && key.length > 0;
  }
  hasAvailableSpace(additionalBytes) {
    if (!isNumber(additionalBytes))
      return false;
    let totalSize = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (isDefined(key)) {
        const item = localStorage.getItem(key);
        if (isDefined(item)) {
          totalSize += new Blob([item]).size;
        }
      }
    }
    return totalSize + additionalBytes <= _LocalStorageService.STORAGE_LIMIT;
  }
  isQuotaExceededError(error) {
    return isObject(error) && hasProperty(error, "name") && isString(error["name"]) && (error["name"] === "QuotaExceededError" || error["name"] === "NS_ERROR_DOM_QUOTA_REACHED");
  }
  /**
   * One-time migration: copy legacy (non-namespaced) auth tokens into API-scoped keys.
   * Safe to leave in place; it no-ops once data is migrated.
   */
  migrateLegacyAuthTokensToApiNamespace() {
    try {
      const accessTokenLegacy = this.getItem(LOCAL_STORAGE_KEY_ACCESS_TOKEN, false);
      const refreshTokenLegacy = this.getItem(LOCAL_STORAGE_KEY_REFRESH_TOKEN, false);
      const tokenExpiryLegacy = this.getItem(LOCAL_STORAGE_KEY_TOKEN_EXPIRY, false);
      const userSessionLegacy = this.getItem(LOCAL_STORAGE_KEY_USER_SESSION, false);
      const accessTokenNamespaced = this.getItem(LOCAL_STORAGE_KEY_ACCESS_TOKEN, true);
      if (isDefined(accessTokenNamespaced)) {
        return;
      }
      if (isDefined(accessTokenLegacy) && isDefined(refreshTokenLegacy)) {
        this.setItem(LOCAL_STORAGE_KEY_ACCESS_TOKEN, accessTokenLegacy, void 0, true);
        this.setItem(LOCAL_STORAGE_KEY_REFRESH_TOKEN, refreshTokenLegacy, void 0, true);
        if (isDefined(tokenExpiryLegacy)) {
          this.setItem(LOCAL_STORAGE_KEY_TOKEN_EXPIRY, tokenExpiryLegacy, void 0, true);
        }
        if (isDefined(userSessionLegacy)) {
          this.setItem(LOCAL_STORAGE_KEY_USER_SESSION, userSessionLegacy, void 0, true);
        }
        localStorage.removeItem(LOCAL_STORAGE_KEY_ACCESS_TOKEN);
        localStorage.removeItem(LOCAL_STORAGE_KEY_REFRESH_TOKEN);
        localStorage.removeItem(LOCAL_STORAGE_KEY_TOKEN_EXPIRY);
        localStorage.removeItem(LOCAL_STORAGE_KEY_USER_SESSION);
      }
    } catch (error) {
      console.warn("Auth token namespace migration failed:", error);
    }
  }
  static \u0275fac = function LocalStorageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalStorageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LocalStorageService, factory: _LocalStorageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalStorageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    ngDevMode && assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((subscriber) => {
    if (destroyRef.destroyed) {
      subscriber.next();
      return;
    }
    const unregisterFn = destroyRef.onDestroy(subscriber.next.bind(subscriber));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}
function toObservable(source, options) {
  if (ngDevMode && !options?.injector) {
    assertInInjectionContext(toObservable);
  }
  const injector = options?.injector ?? inject(Injector);
  const subject = new ReplaySubject(1);
  const watcher = effect(() => {
    let value;
    try {
      value = source();
    } catch (err) {
      untracked(() => subject.error(err));
      return;
    }
    untracked(() => subject.next(value));
  }, {
    injector,
    manualCleanup: true
  });
  injector.get(DestroyRef).onDestroy(() => {
    watcher.destroy();
    subject.complete();
  });
  return subject.asObservable();
}
function toSignal(source, options) {
  typeof ngDevMode !== "undefined" && ngDevMode && assertNotInReactiveContext(toSignal, "Invoking `toSignal` causes new subscriptions every time. Consider moving `toSignal` outside of the reactive context and read the signal value where needed.");
  const requiresCleanup = !options?.manualCleanup;
  if (ngDevMode && requiresCleanup && !options?.injector) {
    assertInInjectionContext(toSignal);
  }
  const cleanupRef = requiresCleanup ? options?.injector?.get(DestroyRef) ?? inject(DestroyRef) : null;
  const equal = makeToSignalEqual(options?.equal);
  let state;
  if (options?.requireSync) {
    state = signal({
      kind: 0
    }, __spreadValues({
      equal
    }, ngDevMode ? createDebugNameObject(options?.debugName, "state") : void 0));
  } else {
    state = signal({
      kind: 1,
      value: options?.initialValue
    }, __spreadValues({
      equal
    }, ngDevMode ? createDebugNameObject(options?.debugName, "state") : void 0));
  }
  let destroyUnregisterFn;
  const sub = source.subscribe({
    next: (value) => state.set({
      kind: 1,
      value
    }),
    error: (error) => {
      state.set({
        kind: 2,
        error
      });
      destroyUnregisterFn?.();
    },
    complete: () => {
      destroyUnregisterFn?.();
    }
  });
  if (options?.requireSync && state().kind === 0) {
    throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
  }
  destroyUnregisterFn = cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
  return computed(() => {
    const current = state();
    switch (current.kind) {
      case 1:
        return current.value;
      case 2:
        throw current.error;
      case 0:
        throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
    }
  }, __spreadValues({
    equal: options?.equal
  }, ngDevMode ? createDebugNameObject(options?.debugName, "source") : void 0));
}
function makeToSignalEqual(userEquality = Object.is) {
  return (a, b) => a.kind === 1 && b.kind === 1 && userEquality(a.value, b.value);
}
function createDebugNameObject(toSignalDebugName, internalSignalDebugName) {
  return {
    debugName: `toSignal${toSignalDebugName ? "#" + toSignalDebugName : ""}.${internalSignalDebugName}`
  };
}

// src/app/core/services/user-session.service.ts
var UserSessionService = class _UserSessionService {
  localStorageService = inject(LocalStorageService);
  // Private writable signals
  _userSessions = signal([], ...ngDevMode ? [{ debugName: "_userSessions" }] : []);
  _currentUserSession = signal(null, ...ngDevMode ? [{ debugName: "_currentUserSession" }] : []);
  // Public readonly signals
  userSessions = this._userSessions.asReadonly();
  currentUserSession = this._currentUserSession.asReadonly();
  constructor() {
    this.loadSessionsFromStorage();
    effect(() => {
      const session = this._currentUserSession();
      if (session) {
        this.localStorageService.setItem(LOCAL_STORAGE_KEY_SELECTED_SESSION_ID, session.id, void 0, true);
      } else {
        this.localStorageService.removeItem(LOCAL_STORAGE_KEY_SELECTED_SESSION_ID, true);
      }
    });
  }
  setUserSessions(sessions) {
    this._userSessions.set(sessions);
    try {
      const serialized = JSON.stringify(sessions);
      this.localStorageService.setItem(LOCAL_STORAGE_KEY_USER_SESSION, serialized, void 0, true);
    } catch {
      console.warn("[UserSessionService] Failed to serialize sessions");
    }
  }
  setCurrentUserSession(sessionId) {
    const session = this._userSessions().find((s) => s.id === sessionId);
    if (isDefined(session)) {
      this._currentUserSession.set(session);
    }
  }
  loadSessionsFromStorage() {
    const sessionsStr = this.localStorageService.getItem(LOCAL_STORAGE_KEY_USER_SESSION, true);
    if (isDefined(sessionsStr)) {
      try {
        const sessions = JSON.parse(sessionsStr);
        this._userSessions.set(sessions);
        const selectedId = this.localStorageService.getItem(LOCAL_STORAGE_KEY_SELECTED_SESSION_ID, true);
        if (isDefined(selectedId)) {
          this.setCurrentUserSession(selectedId);
        }
      } catch {
        this.clearAllSessions();
      }
    }
  }
  /**
   * Reloads sessions from storage.
   * Should be called after user profile is loaded to ensure correct namespace.
   */
  reloadSessionsFromStorage() {
    this.loadSessionsFromStorage();
  }
  clearAllSessions() {
    this._userSessions.set([]);
    this._currentUserSession.set(null);
    this.localStorageService.removeItem(LOCAL_STORAGE_KEY_USER_SESSION, true);
    this.localStorageService.removeItem(LOCAL_STORAGE_KEY_SELECTED_SESSION_ID, true);
  }
  static \u0275fac = function UserSessionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserSessionService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserSessionService, factory: _UserSessionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserSessionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  LOCAL_STORAGE_KEY_SELECTED_CLIENT,
  LOCAL_STORAGE_KEY_ACCESS_TOKEN,
  LOCAL_STORAGE_KEY_REFRESH_TOKEN,
  LOCAL_STORAGE_KEY_TOKEN_EXPIRY,
  LOCAL_STORAGE_KEY_USER_SESSION,
  LOCAL_STORAGE_KEY_SELECTED_SESSION_ID,
  LOCAL_STORAGE_SIDEBAR_STATE_KEY,
  LOCAL_STORAGE_KEY_RECENT_CLIENTS,
  MAX_RECENT_CLIENTS,
  MOBILE_BREAKPOINT,
  DEFAULT_PAGE_SIZE,
  DEFAULT_PAGE_SIZE_OPTIONS,
  DEFAULT_SYSTEM_ID,
  SUPER_ADMIN_ROLE_ID,
  DEFAULT_LIST_SIZE,
  ASSET_TYPE_WITH_AVATAR,
  DEFAULT_EMAIL_PROVIDER,
  GRID_CONFIGS,
  TREE_TABLE_CONFIGS,
  COLORS,
  SEARCH_DEBOUNCE_TIME,
  CLIENT_SEARCH_LIMIT,
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
  LocalStorageService,
  takeUntilDestroyed,
  toObservable,
  toSignal,
  UserSessionService
};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v21.0.3
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-DXUIOPUE.js.map
