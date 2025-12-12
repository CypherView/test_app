import {
  AuthTokenManagerService
} from "./chunk-DPYJ3T2M.js";
import {
  AccountsService,
  ApiUrlService,
  AuthService,
  ClientDataService,
  DEFAULT_SYSTEM_ID,
  LOCAL_STORAGE_KEY_ACCESS_TOKEN,
  LOCAL_STORAGE_KEY_REFRESH_TOKEN,
  LOCAL_STORAGE_KEY_TOKEN_EXPIRY,
  LOCAL_STORAGE_KEY_USER_SESSION,
  LocalStorageService,
  Router,
  SUPER_ADMIN_ROLE_ID,
  ThemesService,
  UserSessionService,
  hasProperty,
  isDefined,
  isEmpty,
  isNullOrUndefined,
  isObject,
  isString,
  require_lodash
} from "./chunk-YZ4HW4J4.js";
import {
  BehaviorSubject,
  Injectable,
  Injector,
  Subject,
  computed,
  filter,
  firstValueFrom,
  inject,
  map,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-JFBAI7HQ.js";
import {
  __commonJS,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-7WUTQBRG.js";

// node_modules/color-name/index.js
var require_color_name = __commonJS({
  "node_modules/color-name/index.js"(exports, module) {
    "use strict";
    module.exports = {
      "aliceblue": [240, 248, 255],
      "antiquewhite": [250, 235, 215],
      "aqua": [0, 255, 255],
      "aquamarine": [127, 255, 212],
      "azure": [240, 255, 255],
      "beige": [245, 245, 220],
      "bisque": [255, 228, 196],
      "black": [0, 0, 0],
      "blanchedalmond": [255, 235, 205],
      "blue": [0, 0, 255],
      "blueviolet": [138, 43, 226],
      "brown": [165, 42, 42],
      "burlywood": [222, 184, 135],
      "cadetblue": [95, 158, 160],
      "chartreuse": [127, 255, 0],
      "chocolate": [210, 105, 30],
      "coral": [255, 127, 80],
      "cornflowerblue": [100, 149, 237],
      "cornsilk": [255, 248, 220],
      "crimson": [220, 20, 60],
      "cyan": [0, 255, 255],
      "darkblue": [0, 0, 139],
      "darkcyan": [0, 139, 139],
      "darkgoldenrod": [184, 134, 11],
      "darkgray": [169, 169, 169],
      "darkgreen": [0, 100, 0],
      "darkgrey": [169, 169, 169],
      "darkkhaki": [189, 183, 107],
      "darkmagenta": [139, 0, 139],
      "darkolivegreen": [85, 107, 47],
      "darkorange": [255, 140, 0],
      "darkorchid": [153, 50, 204],
      "darkred": [139, 0, 0],
      "darksalmon": [233, 150, 122],
      "darkseagreen": [143, 188, 143],
      "darkslateblue": [72, 61, 139],
      "darkslategray": [47, 79, 79],
      "darkslategrey": [47, 79, 79],
      "darkturquoise": [0, 206, 209],
      "darkviolet": [148, 0, 211],
      "deeppink": [255, 20, 147],
      "deepskyblue": [0, 191, 255],
      "dimgray": [105, 105, 105],
      "dimgrey": [105, 105, 105],
      "dodgerblue": [30, 144, 255],
      "firebrick": [178, 34, 34],
      "floralwhite": [255, 250, 240],
      "forestgreen": [34, 139, 34],
      "fuchsia": [255, 0, 255],
      "gainsboro": [220, 220, 220],
      "ghostwhite": [248, 248, 255],
      "gold": [255, 215, 0],
      "goldenrod": [218, 165, 32],
      "gray": [128, 128, 128],
      "green": [0, 128, 0],
      "greenyellow": [173, 255, 47],
      "grey": [128, 128, 128],
      "honeydew": [240, 255, 240],
      "hotpink": [255, 105, 180],
      "indianred": [205, 92, 92],
      "indigo": [75, 0, 130],
      "ivory": [255, 255, 240],
      "khaki": [240, 230, 140],
      "lavender": [230, 230, 250],
      "lavenderblush": [255, 240, 245],
      "lawngreen": [124, 252, 0],
      "lemonchiffon": [255, 250, 205],
      "lightblue": [173, 216, 230],
      "lightcoral": [240, 128, 128],
      "lightcyan": [224, 255, 255],
      "lightgoldenrodyellow": [250, 250, 210],
      "lightgray": [211, 211, 211],
      "lightgreen": [144, 238, 144],
      "lightgrey": [211, 211, 211],
      "lightpink": [255, 182, 193],
      "lightsalmon": [255, 160, 122],
      "lightseagreen": [32, 178, 170],
      "lightskyblue": [135, 206, 250],
      "lightslategray": [119, 136, 153],
      "lightslategrey": [119, 136, 153],
      "lightsteelblue": [176, 196, 222],
      "lightyellow": [255, 255, 224],
      "lime": [0, 255, 0],
      "limegreen": [50, 205, 50],
      "linen": [250, 240, 230],
      "magenta": [255, 0, 255],
      "maroon": [128, 0, 0],
      "mediumaquamarine": [102, 205, 170],
      "mediumblue": [0, 0, 205],
      "mediumorchid": [186, 85, 211],
      "mediumpurple": [147, 112, 219],
      "mediumseagreen": [60, 179, 113],
      "mediumslateblue": [123, 104, 238],
      "mediumspringgreen": [0, 250, 154],
      "mediumturquoise": [72, 209, 204],
      "mediumvioletred": [199, 21, 133],
      "midnightblue": [25, 25, 112],
      "mintcream": [245, 255, 250],
      "mistyrose": [255, 228, 225],
      "moccasin": [255, 228, 181],
      "navajowhite": [255, 222, 173],
      "navy": [0, 0, 128],
      "oldlace": [253, 245, 230],
      "olive": [128, 128, 0],
      "olivedrab": [107, 142, 35],
      "orange": [255, 165, 0],
      "orangered": [255, 69, 0],
      "orchid": [218, 112, 214],
      "palegoldenrod": [238, 232, 170],
      "palegreen": [152, 251, 152],
      "paleturquoise": [175, 238, 238],
      "palevioletred": [219, 112, 147],
      "papayawhip": [255, 239, 213],
      "peachpuff": [255, 218, 185],
      "peru": [205, 133, 63],
      "pink": [255, 192, 203],
      "plum": [221, 160, 221],
      "powderblue": [176, 224, 230],
      "purple": [128, 0, 128],
      "rebeccapurple": [102, 51, 153],
      "red": [255, 0, 0],
      "rosybrown": [188, 143, 143],
      "royalblue": [65, 105, 225],
      "saddlebrown": [139, 69, 19],
      "salmon": [250, 128, 114],
      "sandybrown": [244, 164, 96],
      "seagreen": [46, 139, 87],
      "seashell": [255, 245, 238],
      "sienna": [160, 82, 45],
      "silver": [192, 192, 192],
      "skyblue": [135, 206, 235],
      "slateblue": [106, 90, 205],
      "slategray": [112, 128, 144],
      "slategrey": [112, 128, 144],
      "snow": [255, 250, 250],
      "springgreen": [0, 255, 127],
      "steelblue": [70, 130, 180],
      "tan": [210, 180, 140],
      "teal": [0, 128, 128],
      "thistle": [216, 191, 216],
      "tomato": [255, 99, 71],
      "turquoise": [64, 224, 208],
      "violet": [238, 130, 238],
      "wheat": [245, 222, 179],
      "white": [255, 255, 255],
      "whitesmoke": [245, 245, 245],
      "yellow": [255, 255, 0],
      "yellowgreen": [154, 205, 50]
    };
  }
});

// node_modules/is-arrayish/index.js
var require_is_arrayish = __commonJS({
  "node_modules/is-arrayish/index.js"(exports, module) {
    "use strict";
    module.exports = function isArrayish(obj) {
      if (!obj || typeof obj === "string") {
        return false;
      }
      return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== "String");
    };
  }
});

// node_modules/simple-swizzle/index.js
var require_simple_swizzle = __commonJS({
  "node_modules/simple-swizzle/index.js"(exports, module) {
    "use strict";
    var isArrayish = require_is_arrayish();
    var concat = Array.prototype.concat;
    var slice = Array.prototype.slice;
    var swizzle = module.exports = function swizzle2(args) {
      var results = [];
      for (var i = 0, len = args.length; i < len; i++) {
        var arg = args[i];
        if (isArrayish(arg)) {
          results = concat.call(results, slice.call(arg));
        } else {
          results.push(arg);
        }
      }
      return results;
    };
    swizzle.wrap = function(fn) {
      return function() {
        return fn(swizzle(arguments));
      };
    };
  }
});

// node_modules/color-string/index.js
var require_color_string = __commonJS({
  "node_modules/color-string/index.js"(exports, module) {
    "use strict";
    var colorNames = require_color_name();
    var swizzle = require_simple_swizzle();
    var hasOwnProperty = Object.hasOwnProperty;
    var reverseNames = /* @__PURE__ */ Object.create(null);
    for (name in colorNames) {
      if (hasOwnProperty.call(colorNames, name)) {
        reverseNames[colorNames[name]] = name;
      }
    }
    var name;
    var cs = module.exports = {
      to: {},
      get: {}
    };
    cs.get = function(string) {
      var prefix = string.substring(0, 3).toLowerCase();
      var val;
      var model;
      switch (prefix) {
        case "hsl":
          val = cs.get.hsl(string);
          model = "hsl";
          break;
        case "hwb":
          val = cs.get.hwb(string);
          model = "hwb";
          break;
        default:
          val = cs.get.rgb(string);
          model = "rgb";
          break;
      }
      if (!val) {
        return null;
      }
      return { model, value: val };
    };
    cs.get.rgb = function(string) {
      if (!string) {
        return null;
      }
      var abbr = /^#([a-f0-9]{3,4})$/i;
      var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
      var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
      var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
      var keyword = /^(\w+)$/;
      var rgb = [0, 0, 0, 1];
      var match;
      var i;
      var hexAlpha;
      if (match = string.match(hex)) {
        hexAlpha = match[2];
        match = match[1];
        for (i = 0; i < 3; i++) {
          var i2 = i * 2;
          rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
        }
        if (hexAlpha) {
          rgb[3] = parseInt(hexAlpha, 16) / 255;
        }
      } else if (match = string.match(abbr)) {
        match = match[1];
        hexAlpha = match[3];
        for (i = 0; i < 3; i++) {
          rgb[i] = parseInt(match[i] + match[i], 16);
        }
        if (hexAlpha) {
          rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
        }
      } else if (match = string.match(rgba)) {
        for (i = 0; i < 3; i++) {
          rgb[i] = parseInt(match[i + 1], 0);
        }
        if (match[4]) {
          if (match[5]) {
            rgb[3] = parseFloat(match[4]) * 0.01;
          } else {
            rgb[3] = parseFloat(match[4]);
          }
        }
      } else if (match = string.match(per)) {
        for (i = 0; i < 3; i++) {
          rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
        }
        if (match[4]) {
          if (match[5]) {
            rgb[3] = parseFloat(match[4]) * 0.01;
          } else {
            rgb[3] = parseFloat(match[4]);
          }
        }
      } else if (match = string.match(keyword)) {
        if (match[1] === "transparent") {
          return [0, 0, 0, 0];
        }
        if (!hasOwnProperty.call(colorNames, match[1])) {
          return null;
        }
        rgb = colorNames[match[1]];
        rgb[3] = 1;
        return rgb;
      } else {
        return null;
      }
      for (i = 0; i < 3; i++) {
        rgb[i] = clamp(rgb[i], 0, 255);
      }
      rgb[3] = clamp(rgb[3], 0, 1);
      return rgb;
    };
    cs.get.hsl = function(string) {
      if (!string) {
        return null;
      }
      var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
      var match = string.match(hsl);
      if (match) {
        var alpha = parseFloat(match[4]);
        var h = (parseFloat(match[1]) % 360 + 360) % 360;
        var s = clamp(parseFloat(match[2]), 0, 100);
        var l = clamp(parseFloat(match[3]), 0, 100);
        var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
        return [h, s, l, a];
      }
      return null;
    };
    cs.get.hwb = function(string) {
      if (!string) {
        return null;
      }
      var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
      var match = string.match(hwb);
      if (match) {
        var alpha = parseFloat(match[4]);
        var h = (parseFloat(match[1]) % 360 + 360) % 360;
        var w = clamp(parseFloat(match[2]), 0, 100);
        var b = clamp(parseFloat(match[3]), 0, 100);
        var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
        return [h, w, b, a];
      }
      return null;
    };
    cs.to.hex = function() {
      var rgba = swizzle(arguments);
      return "#" + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : "");
    };
    cs.to.rgb = function() {
      var rgba = swizzle(arguments);
      return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ")" : "rgba(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ", " + rgba[3] + ")";
    };
    cs.to.rgb.percent = function() {
      var rgba = swizzle(arguments);
      var r = Math.round(rgba[0] / 255 * 100);
      var g = Math.round(rgba[1] / 255 * 100);
      var b = Math.round(rgba[2] / 255 * 100);
      return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + r + "%, " + g + "%, " + b + "%)" : "rgba(" + r + "%, " + g + "%, " + b + "%, " + rgba[3] + ")";
    };
    cs.to.hsl = function() {
      var hsla = swizzle(arguments);
      return hsla.length < 4 || hsla[3] === 1 ? "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)" : "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + hsla[3] + ")";
    };
    cs.to.hwb = function() {
      var hwba = swizzle(arguments);
      var a = "";
      if (hwba.length >= 4 && hwba[3] !== 1) {
        a = ", " + hwba[3];
      }
      return "hwb(" + hwba[0] + ", " + hwba[1] + "%, " + hwba[2] + "%" + a + ")";
    };
    cs.to.keyword = function(rgb) {
      return reverseNames[rgb.slice(0, 3)];
    };
    function clamp(num, min, max) {
      return Math.min(Math.max(min, num), max);
    }
    function hexDouble(num) {
      var str = Math.round(num).toString(16).toUpperCase();
      return str.length < 2 ? "0" + str : str;
    }
  }
});

// node_modules/color-convert/conversions.js
var require_conversions = __commonJS({
  "node_modules/color-convert/conversions.js"(exports, module) {
    "use strict";
    var cssKeywords = require_color_name();
    var reverseKeywords = {};
    for (const key of Object.keys(cssKeywords)) {
      reverseKeywords[cssKeywords[key]] = key;
    }
    var convert = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    module.exports = convert;
    for (const model of Object.keys(convert)) {
      if (!("channels" in convert[model])) {
        throw new Error("missing channels property: " + model);
      }
      if (!("labels" in convert[model])) {
        throw new Error("missing channel labels property: " + model);
      }
      if (convert[model].labels.length !== convert[model].channels) {
        throw new Error("channel and label counts mismatch: " + model);
      }
      const { channels, labels } = convert[model];
      delete convert[model].channels;
      delete convert[model].labels;
      Object.defineProperty(convert[model], "channels", { value: channels });
      Object.defineProperty(convert[model], "labels", { value: labels });
    }
    convert.rgb.hsl = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const min = Math.min(r, g, b);
      const max = Math.max(r, g, b);
      const delta = max - min;
      let h;
      let s;
      if (max === min) {
        h = 0;
      } else if (r === max) {
        h = (g - b) / delta;
      } else if (g === max) {
        h = 2 + (b - r) / delta;
      } else if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h = Math.min(h * 60, 360);
      if (h < 0) {
        h += 360;
      }
      const l = (min + max) / 2;
      if (max === min) {
        s = 0;
      } else if (l <= 0.5) {
        s = delta / (max + min);
      } else {
        s = delta / (2 - max - min);
      }
      return [h, s * 100, l * 100];
    };
    convert.rgb.hsv = function(rgb) {
      let rdif;
      let gdif;
      let bdif;
      let h;
      let s;
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const v = Math.max(r, g, b);
      const diff = v - Math.min(r, g, b);
      const diffc = function(c) {
        return (v - c) / 6 / diff + 1 / 2;
      };
      if (diff === 0) {
        h = 0;
        s = 0;
      } else {
        s = diff / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);
        if (r === v) {
          h = bdif - gdif;
        } else if (g === v) {
          h = 1 / 3 + rdif - bdif;
        } else if (b === v) {
          h = 2 / 3 + gdif - rdif;
        }
        if (h < 0) {
          h += 1;
        } else if (h > 1) {
          h -= 1;
        }
      }
      return [
        h * 360,
        s * 100,
        v * 100
      ];
    };
    convert.rgb.hwb = function(rgb) {
      const r = rgb[0];
      const g = rgb[1];
      let b = rgb[2];
      const h = convert.rgb.hsl(rgb)[0];
      const w = 1 / 255 * Math.min(r, Math.min(g, b));
      b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
      return [h, w * 100, b * 100];
    };
    convert.rgb.cmyk = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const k = Math.min(1 - r, 1 - g, 1 - b);
      const c = (1 - r - k) / (1 - k) || 0;
      const m = (1 - g - k) / (1 - k) || 0;
      const y = (1 - b - k) / (1 - k) || 0;
      return [c * 100, m * 100, y * 100, k * 100];
    };
    function comparativeDistance(x, y) {
      return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
    }
    convert.rgb.keyword = function(rgb) {
      const reversed = reverseKeywords[rgb];
      if (reversed) {
        return reversed;
      }
      let currentClosestDistance = Infinity;
      let currentClosestKeyword;
      for (const keyword of Object.keys(cssKeywords)) {
        const value = cssKeywords[keyword];
        const distance = comparativeDistance(rgb, value);
        if (distance < currentClosestDistance) {
          currentClosestDistance = distance;
          currentClosestKeyword = keyword;
        }
      }
      return currentClosestKeyword;
    };
    convert.keyword.rgb = function(keyword) {
      return cssKeywords[keyword];
    };
    convert.rgb.xyz = function(rgb) {
      let r = rgb[0] / 255;
      let g = rgb[1] / 255;
      let b = rgb[2] / 255;
      r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
      g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
      b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
      const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
      const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
      const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
      return [x * 100, y * 100, z * 100];
    };
    convert.rgb.lab = function(rgb) {
      const xyz = convert.rgb.xyz(rgb);
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z);
      return [l, a, b];
    };
    convert.hsl.rgb = function(hsl) {
      const h = hsl[0] / 360;
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      let t2;
      let t3;
      let val;
      if (s === 0) {
        val = l * 255;
        return [val, val, val];
      }
      if (l < 0.5) {
        t2 = l * (1 + s);
      } else {
        t2 = l + s - l * s;
      }
      const t1 = 2 * l - t2;
      const rgb = [0, 0, 0];
      for (let i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb[i] = val * 255;
      }
      return rgb;
    };
    convert.hsl.hsv = function(hsl) {
      const h = hsl[0];
      let s = hsl[1] / 100;
      let l = hsl[2] / 100;
      let smin = s;
      const lmin = Math.max(l, 0.01);
      l *= 2;
      s *= l <= 1 ? l : 2 - l;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      const v = (l + s) / 2;
      const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
      return [h, sv * 100, v * 100];
    };
    convert.hsv.rgb = function(hsv) {
      const h = hsv[0] / 60;
      const s = hsv[1] / 100;
      let v = hsv[2] / 100;
      const hi = Math.floor(h) % 6;
      const f = h - Math.floor(h);
      const p = 255 * v * (1 - s);
      const q = 255 * v * (1 - s * f);
      const t = 255 * v * (1 - s * (1 - f));
      v *= 255;
      switch (hi) {
        case 0:
          return [v, t, p];
        case 1:
          return [q, v, p];
        case 2:
          return [p, v, t];
        case 3:
          return [p, q, v];
        case 4:
          return [t, p, v];
        case 5:
          return [v, p, q];
      }
    };
    convert.hsv.hsl = function(hsv) {
      const h = hsv[0];
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const vmin = Math.max(v, 0.01);
      let sl;
      let l;
      l = (2 - s) * v;
      const lmin = (2 - s) * vmin;
      sl = s * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l /= 2;
      return [h, sl * 100, l * 100];
    };
    convert.hwb.rgb = function(hwb) {
      const h = hwb[0] / 360;
      let wh = hwb[1] / 100;
      let bl = hwb[2] / 100;
      const ratio = wh + bl;
      let f;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      const i = Math.floor(6 * h);
      const v = 1 - bl;
      f = 6 * h - i;
      if ((i & 1) !== 0) {
        f = 1 - f;
      }
      const n = wh + f * (v - wh);
      let r;
      let g;
      let b;
      switch (i) {
        default:
        case 6:
        case 0:
          r = v;
          g = n;
          b = wh;
          break;
        case 1:
          r = n;
          g = v;
          b = wh;
          break;
        case 2:
          r = wh;
          g = v;
          b = n;
          break;
        case 3:
          r = wh;
          g = n;
          b = v;
          break;
        case 4:
          r = n;
          g = wh;
          b = v;
          break;
        case 5:
          r = v;
          g = wh;
          b = n;
          break;
      }
      return [r * 255, g * 255, b * 255];
    };
    convert.cmyk.rgb = function(cmyk) {
      const c = cmyk[0] / 100;
      const m = cmyk[1] / 100;
      const y = cmyk[2] / 100;
      const k = cmyk[3] / 100;
      const r = 1 - Math.min(1, c * (1 - k) + k);
      const g = 1 - Math.min(1, m * (1 - k) + k);
      const b = 1 - Math.min(1, y * (1 - k) + k);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.rgb = function(xyz) {
      const x = xyz[0] / 100;
      const y = xyz[1] / 100;
      const z = xyz[2] / 100;
      let r;
      let g;
      let b;
      r = x * 3.2406 + y * -1.5372 + z * -0.4986;
      g = x * -0.9689 + y * 1.8758 + z * 0.0415;
      b = x * 0.0557 + y * -0.204 + z * 1.057;
      r = r > 31308e-7 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92;
      g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : g * 12.92;
      b = b > 31308e-7 ? 1.055 * b ** (1 / 2.4) - 0.055 : b * 12.92;
      r = Math.min(Math.max(0, r), 1);
      g = Math.min(Math.max(0, g), 1);
      b = Math.min(Math.max(0, b), 1);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.lab = function(xyz) {
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z);
      return [l, a, b];
    };
    convert.lab.xyz = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let x;
      let y;
      let z;
      y = (l + 16) / 116;
      x = a / 500 + y;
      z = y - b / 200;
      const y2 = y ** 3;
      const x2 = x ** 3;
      const z2 = z ** 3;
      y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
      x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
      z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
      x *= 95.047;
      y *= 100;
      z *= 108.883;
      return [x, y, z];
    };
    convert.lab.lch = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let h;
      const hr = Math.atan2(b, a);
      h = hr * 360 / 2 / Math.PI;
      if (h < 0) {
        h += 360;
      }
      const c = Math.sqrt(a * a + b * b);
      return [l, c, h];
    };
    convert.lch.lab = function(lch) {
      const l = lch[0];
      const c = lch[1];
      const h = lch[2];
      const hr = h / 360 * 2 * Math.PI;
      const a = c * Math.cos(hr);
      const b = c * Math.sin(hr);
      return [l, a, b];
    };
    convert.rgb.ansi16 = function(args, saturation = null) {
      const [r, g, b] = args;
      let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
      value = Math.round(value / 50);
      if (value === 0) {
        return 30;
      }
      let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
      if (value === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert.hsv.ansi16 = function(args) {
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };
    convert.rgb.ansi256 = function(args) {
      const r = args[0];
      const g = args[1];
      const b = args[2];
      if (r === g && g === b) {
        if (r < 8) {
          return 16;
        }
        if (r > 248) {
          return 231;
        }
        return Math.round((r - 8) / 247 * 24) + 232;
      }
      const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
      return ansi;
    };
    convert.ansi16.rgb = function(args) {
      let color = args % 10;
      if (color === 0 || color === 7) {
        if (args > 50) {
          color += 3.5;
        }
        color = color / 10.5 * 255;
        return [color, color, color];
      }
      const mult = (~~(args > 50) + 1) * 0.5;
      const r = (color & 1) * mult * 255;
      const g = (color >> 1 & 1) * mult * 255;
      const b = (color >> 2 & 1) * mult * 255;
      return [r, g, b];
    };
    convert.ansi256.rgb = function(args) {
      if (args >= 232) {
        const c = (args - 232) * 10 + 8;
        return [c, c, c];
      }
      args -= 16;
      let rem;
      const r = Math.floor(args / 36) / 5 * 255;
      const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
      const b = rem % 6 / 5 * 255;
      return [r, g, b];
    };
    convert.rgb.hex = function(args) {
      const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.hex.rgb = function(args) {
      const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!match) {
        return [0, 0, 0];
      }
      let colorString = match[0];
      if (match[0].length === 3) {
        colorString = colorString.split("").map((char) => {
          return char + char;
        }).join("");
      }
      const integer = parseInt(colorString, 16);
      const r = integer >> 16 & 255;
      const g = integer >> 8 & 255;
      const b = integer & 255;
      return [r, g, b];
    };
    convert.rgb.hcg = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const max = Math.max(Math.max(r, g), b);
      const min = Math.min(Math.min(r, g), b);
      const chroma = max - min;
      let grayscale;
      let hue;
      if (chroma < 1) {
        grayscale = min / (1 - chroma);
      } else {
        grayscale = 0;
      }
      if (chroma <= 0) {
        hue = 0;
      } else if (max === r) {
        hue = (g - b) / chroma % 6;
      } else if (max === g) {
        hue = 2 + (b - r) / chroma;
      } else {
        hue = 4 + (r - g) / chroma;
      }
      hue /= 6;
      hue %= 1;
      return [hue * 360, chroma * 100, grayscale * 100];
    };
    convert.hsl.hcg = function(hsl) {
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
      let f = 0;
      if (c < 1) {
        f = (l - 0.5 * c) / (1 - c);
      }
      return [hsl[0], c * 100, f * 100];
    };
    convert.hsv.hcg = function(hsv) {
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const c = s * v;
      let f = 0;
      if (c < 1) {
        f = (v - c) / (1 - c);
      }
      return [hsv[0], c * 100, f * 100];
    };
    convert.hcg.rgb = function(hcg) {
      const h = hcg[0] / 360;
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      if (c === 0) {
        return [g * 255, g * 255, g * 255];
      }
      const pure = [0, 0, 0];
      const hi = h % 1 * 6;
      const v = hi % 1;
      const w = 1 - v;
      let mg = 0;
      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v;
          pure[2] = 0;
          break;
        case 1:
          pure[0] = w;
          pure[1] = 1;
          pure[2] = 0;
          break;
        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v;
          break;
        case 3:
          pure[0] = 0;
          pure[1] = w;
          pure[2] = 1;
          break;
        case 4:
          pure[0] = v;
          pure[1] = 0;
          pure[2] = 1;
          break;
        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w;
      }
      mg = (1 - c) * g;
      return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
      ];
    };
    convert.hcg.hsv = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      let f = 0;
      if (v > 0) {
        f = c / v;
      }
      return [hcg[0], f * 100, v * 100];
    };
    convert.hcg.hsl = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const l = g * (1 - c) + 0.5 * c;
      let s = 0;
      if (l > 0 && l < 0.5) {
        s = c / (2 * l);
      } else if (l >= 0.5 && l < 1) {
        s = c / (2 * (1 - l));
      }
      return [hcg[0], s * 100, l * 100];
    };
    convert.hcg.hwb = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      return [hcg[0], (v - c) * 100, (1 - v) * 100];
    };
    convert.hwb.hcg = function(hwb) {
      const w = hwb[1] / 100;
      const b = hwb[2] / 100;
      const v = 1 - b;
      const c = v - w;
      let g = 0;
      if (c < 1) {
        g = (v - c) / (1 - c);
      }
      return [hwb[0], c * 100, g * 100];
    };
    convert.apple.rgb = function(apple) {
      return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
    };
    convert.rgb.apple = function(rgb) {
      return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
    };
    convert.gray.rgb = function(args) {
      return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
    };
    convert.gray.hsl = function(args) {
      return [0, 0, args[0]];
    };
    convert.gray.hsv = convert.gray.hsl;
    convert.gray.hwb = function(gray) {
      return [0, 100, gray[0]];
    };
    convert.gray.cmyk = function(gray) {
      return [0, 0, 0, gray[0]];
    };
    convert.gray.lab = function(gray) {
      return [gray[0], 0, 0];
    };
    convert.gray.hex = function(gray) {
      const val = Math.round(gray[0] / 100 * 255) & 255;
      const integer = (val << 16) + (val << 8) + val;
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.rgb.gray = function(rgb) {
      const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [val / 255 * 100];
    };
  }
});

// node_modules/color-convert/route.js
var require_route = __commonJS({
  "node_modules/color-convert/route.js"(exports, module) {
    "use strict";
    var conversions = require_conversions();
    function buildGraph() {
      const graph = {};
      const models = Object.keys(conversions);
      for (let len = models.length, i = 0; i < len; i++) {
        graph[models[i]] = {
          // http://jsperf.com/1-vs-infinity
          // micro-opt, but this is simple.
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    function deriveBFS(fromModel) {
      const graph = buildGraph();
      const queue = [fromModel];
      graph[fromModel].distance = 0;
      while (queue.length) {
        const current = queue.pop();
        const adjacents = Object.keys(conversions[current]);
        for (let len = adjacents.length, i = 0; i < len; i++) {
          const adjacent = adjacents[i];
          const node = graph[adjacent];
          if (node.distance === -1) {
            node.distance = graph[current].distance + 1;
            node.parent = current;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    function link(from, to) {
      return function(args) {
        return to(from(args));
      };
    }
    function wrapConversion(toModel, graph) {
      const path = [graph[toModel].parent, toModel];
      let fn = conversions[graph[toModel].parent][toModel];
      let cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path.unshift(graph[cur].parent);
        fn = link(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
      }
      fn.conversion = path;
      return fn;
    }
    module.exports = function(fromModel) {
      const graph = deriveBFS(fromModel);
      const conversion = {};
      const models = Object.keys(graph);
      for (let len = models.length, i = 0; i < len; i++) {
        const toModel = models[i];
        const node = graph[toModel];
        if (node.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    };
  }
});

// node_modules/color-convert/index.js
var require_color_convert = __commonJS({
  "node_modules/color-convert/index.js"(exports, module) {
    "use strict";
    var conversions = require_conversions();
    var route = require_route();
    var convert = {};
    var models = Object.keys(conversions);
    function wrapRaw(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        return fn(args);
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    function wrapRounded(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        const result = fn(args);
        if (typeof result === "object") {
          for (let len = result.length, i = 0; i < len; i++) {
            result[i] = Math.round(result[i]);
          }
        }
        return result;
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    models.forEach((fromModel) => {
      convert[fromModel] = {};
      Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
      Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
      const routes = route(fromModel);
      const routeModels = Object.keys(routes);
      routeModels.forEach((toModel) => {
        const fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
      });
    });
    module.exports = convert;
  }
});

// node_modules/color/index.js
var require_color = __commonJS({
  "node_modules/color/index.js"(exports, module) {
    "use strict";
    var colorString = require_color_string();
    var convert = require_color_convert();
    var skippedModels = [
      // To be honest, I don't really feel like keyword belongs in color convert, but eh.
      "keyword",
      // Gray conflicts with some method names, and has its own method defined.
      "gray",
      // Shouldn't really be in color-convert either...
      "hex"
    ];
    var hashedModelKeys = {};
    for (const model of Object.keys(convert)) {
      hashedModelKeys[[...convert[model].labels].sort().join("")] = model;
    }
    var limiters = {};
    function Color3(object, model) {
      if (!(this instanceof Color3)) {
        return new Color3(object, model);
      }
      if (model && model in skippedModels) {
        model = null;
      }
      if (model && !(model in convert)) {
        throw new Error("Unknown model: " + model);
      }
      let i;
      let channels;
      if (object == null) {
        this.model = "rgb";
        this.color = [0, 0, 0];
        this.valpha = 1;
      } else if (object instanceof Color3) {
        this.model = object.model;
        this.color = [...object.color];
        this.valpha = object.valpha;
      } else if (typeof object === "string") {
        const result = colorString.get(object);
        if (result === null) {
          throw new Error("Unable to parse color from string: " + object);
        }
        this.model = result.model;
        channels = convert[this.model].channels;
        this.color = result.value.slice(0, channels);
        this.valpha = typeof result.value[channels] === "number" ? result.value[channels] : 1;
      } else if (object.length > 0) {
        this.model = model || "rgb";
        channels = convert[this.model].channels;
        const newArray = Array.prototype.slice.call(object, 0, channels);
        this.color = zeroArray(newArray, channels);
        this.valpha = typeof object[channels] === "number" ? object[channels] : 1;
      } else if (typeof object === "number") {
        this.model = "rgb";
        this.color = [
          object >> 16 & 255,
          object >> 8 & 255,
          object & 255
        ];
        this.valpha = 1;
      } else {
        this.valpha = 1;
        const keys = Object.keys(object);
        if ("alpha" in object) {
          keys.splice(keys.indexOf("alpha"), 1);
          this.valpha = typeof object.alpha === "number" ? object.alpha : 0;
        }
        const hashedKeys = keys.sort().join("");
        if (!(hashedKeys in hashedModelKeys)) {
          throw new Error("Unable to parse color from object: " + JSON.stringify(object));
        }
        this.model = hashedModelKeys[hashedKeys];
        const { labels } = convert[this.model];
        const color = [];
        for (i = 0; i < labels.length; i++) {
          color.push(object[labels[i]]);
        }
        this.color = zeroArray(color);
      }
      if (limiters[this.model]) {
        channels = convert[this.model].channels;
        for (i = 0; i < channels; i++) {
          const limit = limiters[this.model][i];
          if (limit) {
            this.color[i] = limit(this.color[i]);
          }
        }
      }
      this.valpha = Math.max(0, Math.min(1, this.valpha));
      if (Object.freeze) {
        Object.freeze(this);
      }
    }
    Color3.prototype = {
      toString() {
        return this.string();
      },
      toJSON() {
        return this[this.model]();
      },
      string(places) {
        let self = this.model in colorString.to ? this : this.rgb();
        self = self.round(typeof places === "number" ? places : 1);
        const args = self.valpha === 1 ? self.color : [...self.color, this.valpha];
        return colorString.to[self.model](args);
      },
      percentString(places) {
        const self = this.rgb().round(typeof places === "number" ? places : 1);
        const args = self.valpha === 1 ? self.color : [...self.color, this.valpha];
        return colorString.to.rgb.percent(args);
      },
      array() {
        return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
      },
      object() {
        const result = {};
        const { channels } = convert[this.model];
        const { labels } = convert[this.model];
        for (let i = 0; i < channels; i++) {
          result[labels[i]] = this.color[i];
        }
        if (this.valpha !== 1) {
          result.alpha = this.valpha;
        }
        return result;
      },
      unitArray() {
        const rgb = this.rgb().color;
        rgb[0] /= 255;
        rgb[1] /= 255;
        rgb[2] /= 255;
        if (this.valpha !== 1) {
          rgb.push(this.valpha);
        }
        return rgb;
      },
      unitObject() {
        const rgb = this.rgb().object();
        rgb.r /= 255;
        rgb.g /= 255;
        rgb.b /= 255;
        if (this.valpha !== 1) {
          rgb.alpha = this.valpha;
        }
        return rgb;
      },
      round(places) {
        places = Math.max(places || 0, 0);
        return new Color3([...this.color.map(roundToPlace(places)), this.valpha], this.model);
      },
      alpha(value) {
        if (value !== void 0) {
          return new Color3([...this.color, Math.max(0, Math.min(1, value))], this.model);
        }
        return this.valpha;
      },
      // Rgb
      red: getset("rgb", 0, maxfn(255)),
      green: getset("rgb", 1, maxfn(255)),
      blue: getset("rgb", 2, maxfn(255)),
      hue: getset(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (value) => (value % 360 + 360) % 360),
      saturationl: getset("hsl", 1, maxfn(100)),
      lightness: getset("hsl", 2, maxfn(100)),
      saturationv: getset("hsv", 1, maxfn(100)),
      value: getset("hsv", 2, maxfn(100)),
      chroma: getset("hcg", 1, maxfn(100)),
      gray: getset("hcg", 2, maxfn(100)),
      white: getset("hwb", 1, maxfn(100)),
      wblack: getset("hwb", 2, maxfn(100)),
      cyan: getset("cmyk", 0, maxfn(100)),
      magenta: getset("cmyk", 1, maxfn(100)),
      yellow: getset("cmyk", 2, maxfn(100)),
      black: getset("cmyk", 3, maxfn(100)),
      x: getset("xyz", 0, maxfn(95.047)),
      y: getset("xyz", 1, maxfn(100)),
      z: getset("xyz", 2, maxfn(108.833)),
      l: getset("lab", 0, maxfn(100)),
      a: getset("lab", 1),
      b: getset("lab", 2),
      keyword(value) {
        if (value !== void 0) {
          return new Color3(value);
        }
        return convert[this.model].keyword(this.color);
      },
      hex(value) {
        if (value !== void 0) {
          return new Color3(value);
        }
        return colorString.to.hex(this.rgb().round().color);
      },
      hexa(value) {
        if (value !== void 0) {
          return new Color3(value);
        }
        const rgbArray = this.rgb().round().color;
        let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
        if (alphaHex.length === 1) {
          alphaHex = "0" + alphaHex;
        }
        return colorString.to.hex(rgbArray) + alphaHex;
      },
      rgbNumber() {
        const rgb = this.rgb().color;
        return (rgb[0] & 255) << 16 | (rgb[1] & 255) << 8 | rgb[2] & 255;
      },
      luminosity() {
        const rgb = this.rgb().color;
        const lum = [];
        for (const [i, element] of rgb.entries()) {
          const chan = element / 255;
          lum[i] = chan <= 0.04045 ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
        }
        return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
      },
      contrast(color2) {
        const lum1 = this.luminosity();
        const lum2 = color2.luminosity();
        if (lum1 > lum2) {
          return (lum1 + 0.05) / (lum2 + 0.05);
        }
        return (lum2 + 0.05) / (lum1 + 0.05);
      },
      level(color2) {
        const contrastRatio = this.contrast(color2);
        if (contrastRatio >= 7) {
          return "AAA";
        }
        return contrastRatio >= 4.5 ? "AA" : "";
      },
      isDark() {
        const rgb = this.rgb().color;
        const yiq = (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 1e4;
        return yiq < 128;
      },
      isLight() {
        return !this.isDark();
      },
      negate() {
        const rgb = this.rgb();
        for (let i = 0; i < 3; i++) {
          rgb.color[i] = 255 - rgb.color[i];
        }
        return rgb;
      },
      lighten(ratio) {
        const hsl = this.hsl();
        hsl.color[2] += hsl.color[2] * ratio;
        return hsl;
      },
      darken(ratio) {
        const hsl = this.hsl();
        hsl.color[2] -= hsl.color[2] * ratio;
        return hsl;
      },
      saturate(ratio) {
        const hsl = this.hsl();
        hsl.color[1] += hsl.color[1] * ratio;
        return hsl;
      },
      desaturate(ratio) {
        const hsl = this.hsl();
        hsl.color[1] -= hsl.color[1] * ratio;
        return hsl;
      },
      whiten(ratio) {
        const hwb = this.hwb();
        hwb.color[1] += hwb.color[1] * ratio;
        return hwb;
      },
      blacken(ratio) {
        const hwb = this.hwb();
        hwb.color[2] += hwb.color[2] * ratio;
        return hwb;
      },
      grayscale() {
        const rgb = this.rgb().color;
        const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
        return Color3.rgb(value, value, value);
      },
      fade(ratio) {
        return this.alpha(this.valpha - this.valpha * ratio);
      },
      opaquer(ratio) {
        return this.alpha(this.valpha + this.valpha * ratio);
      },
      rotate(degrees) {
        const hsl = this.hsl();
        let hue = hsl.color[0];
        hue = (hue + degrees) % 360;
        hue = hue < 0 ? 360 + hue : hue;
        hsl.color[0] = hue;
        return hsl;
      },
      mix(mixinColor, weight) {
        if (!mixinColor || !mixinColor.rgb) {
          throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
        }
        const color1 = mixinColor.rgb();
        const color2 = this.rgb();
        const p = weight === void 0 ? 0.5 : weight;
        const w = 2 * p - 1;
        const a = color1.alpha() - color2.alpha();
        const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
        const w2 = 1 - w1;
        return Color3.rgb(
          w1 * color1.red() + w2 * color2.red(),
          w1 * color1.green() + w2 * color2.green(),
          w1 * color1.blue() + w2 * color2.blue(),
          color1.alpha() * p + color2.alpha() * (1 - p)
        );
      }
    };
    for (const model of Object.keys(convert)) {
      if (skippedModels.includes(model)) {
        continue;
      }
      const { channels } = convert[model];
      Color3.prototype[model] = function(...args) {
        if (this.model === model) {
          return new Color3(this);
        }
        if (args.length > 0) {
          return new Color3(args, model);
        }
        return new Color3([...assertArray(convert[this.model][model].raw(this.color)), this.valpha], model);
      };
      Color3[model] = function(...args) {
        let color = args[0];
        if (typeof color === "number") {
          color = zeroArray(args, channels);
        }
        return new Color3(color, model);
      };
    }
    function roundTo(number, places) {
      return Number(number.toFixed(places));
    }
    function roundToPlace(places) {
      return function(number) {
        return roundTo(number, places);
      };
    }
    function getset(model, channel, modifier) {
      model = Array.isArray(model) ? model : [model];
      for (const m of model) {
        (limiters[m] || (limiters[m] = []))[channel] = modifier;
      }
      model = model[0];
      return function(value) {
        let result;
        if (value !== void 0) {
          if (modifier) {
            value = modifier(value);
          }
          result = this[model]();
          result.color[channel] = value;
          return result;
        }
        result = this[model]().color[channel];
        if (modifier) {
          result = modifier(result);
        }
        return result;
      };
    }
    function maxfn(max) {
      return function(v) {
        return Math.max(0, Math.min(max, v));
      };
    }
    function assertArray(value) {
      return Array.isArray(value) ? value : [value];
    }
    function zeroArray(array, length) {
      for (let i = 0; i < length; i++) {
        if (typeof array[i] !== "number") {
          array[i] = 0;
        }
      }
      return array;
    }
    module.exports = Color3;
  }
});

// src/app/features/administration/services/broadcast-event-messages.service.ts
var BroadcastEventMessageService = class _BroadcastEventMessageService {
  messageSubject = new Subject();
  /**
   * Broadcast a message to all subscribers
   * @param type The message type identifier
   * @param data The data payload
   */
  broadcast(type, data) {
    this.messageSubject.next({ type, data });
  }
  /**
   * Listen for messages of a specific type
   * @param type The message type to listen for
   * @returns An observable that emits when messages of the specified type are broadcast
   */
  on(type) {
    return this.messageSubject.pipe(filter((message) => message.type === type), map((message) => message.data));
  }
  static \u0275fac = function BroadcastEventMessageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BroadcastEventMessageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BroadcastEventMessageService, factory: _BroadcastEventMessageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BroadcastEventMessageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/core/models/message.model.ts
var ActionType;
(function(ActionType2) {
  ActionType2["navigate"] = "navigate";
  ActionType2["get_auth_tokens"] = "get_auth_tokens";
  ActionType2["update_auth_tokens"] = "update_auth_tokens";
  ActionType2["logout"] = "logout";
  ActionType2["profile_changed"] = "profile_changed";
  ActionType2["update_hash"] = "update_hash";
  ActionType2["ready"] = "ready";
  ActionType2["r2_token_generated"] = "r2_token_generated";
  ActionType2["r2_token_failed"] = "r2_token_failed";
  ActionType2["entity_updated"] = "entity_updated";
})(ActionType || (ActionType = {}));
var NavigationPaths;
(function(NavigationPaths2) {
  NavigationPaths2["positions"] = "positions";
  NavigationPaths2["login"] = "login";
  NavigationPaths2["test"] = "test";
  NavigationPaths2["auth"] = "auth";
})(NavigationPaths || (NavigationPaths = {}));

// src/app/features/administration/models/admin-tree-state.interface.ts
var UserPermissionLevel;
(function(UserPermissionLevel2) {
  UserPermissionLevel2["CLIENT_ONLY"] = "client-only";
  UserPermissionLevel2["VENDOR"] = "vendor";
  UserPermissionLevel2["DISTRIBUTOR"] = "distributor";
  UserPermissionLevel2["SUPER_ADMIN"] = "super-admin";
})(UserPermissionLevel || (UserPermissionLevel = {}));

// src/app/features/administration/services/state/admin-state.service.ts
var AdminStateService = class _AdminStateService {
  // Private signals for state
  state = signal({
    // New distributor-scoped data
    distributorVendors: {},
    vendorClients: {},
    vendorGroups: {},
    groupClients: {},
    loadedVendors: {},
    loadingVendors: {},
    failedVendors: {},
    expandedNodes: {},
    expandedGroups: {},
    clientPagination: {},
    // Global state
    selectedClient: null,
    clientVendor: null,
    vendorDistributor: null,
    distributors: [],
    initialLoading: false,
    expandedDistributors: /* @__PURE__ */ new Set(),
    userPermissionLevel: null
  }, ...ngDevMode ? [{ debugName: "state" }] : []);
  // Public computed values
  distributorVendors = computed(() => this.state().distributorVendors, ...ngDevMode ? [{ debugName: "distributorVendors" }] : []);
  vendorClients = computed(() => this.state().vendorClients, ...ngDevMode ? [{ debugName: "vendorClients" }] : []);
  vendorGroups = computed(() => this.state().vendorGroups, ...ngDevMode ? [{ debugName: "vendorGroups" }] : []);
  groupClients = computed(() => this.state().groupClients, ...ngDevMode ? [{ debugName: "groupClients" }] : []);
  loadedVendors = computed(() => this.state().loadedVendors, ...ngDevMode ? [{ debugName: "loadedVendors" }] : []);
  loadingVendors = computed(() => this.state().loadingVendors, ...ngDevMode ? [{ debugName: "loadingVendors" }] : []);
  failedVendors = computed(() => this.state().failedVendors, ...ngDevMode ? [{ debugName: "failedVendors" }] : []);
  expandedNodes = computed(() => this.state().expandedNodes, ...ngDevMode ? [{ debugName: "expandedNodes" }] : []);
  expandedGroups = computed(() => this.state().expandedGroups, ...ngDevMode ? [{ debugName: "expandedGroups" }] : []);
  clientPagination = computed(() => this.state().clientPagination, ...ngDevMode ? [{ debugName: "clientPagination" }] : []);
  selectedClient = computed(() => this.state().selectedClient, ...ngDevMode ? [{ debugName: "selectedClient" }] : []);
  clientVendor = computed(() => this.state().clientVendor, ...ngDevMode ? [{ debugName: "clientVendor" }] : []);
  vendorDistributor = computed(() => this.state().vendorDistributor, ...ngDevMode ? [{ debugName: "vendorDistributor" }] : []);
  distributors = computed(() => this.state().distributors, ...ngDevMode ? [{ debugName: "distributors" }] : []);
  initialLoading = computed(() => this.state().initialLoading, ...ngDevMode ? [{ debugName: "initialLoading" }] : []);
  expandedDistributors = computed(() => this.state().expandedDistributors, ...ngDevMode ? [{ debugName: "expandedDistributors" }] : []);
  // Computed values that depend on multiple state properties
  isLoading = computed(() => {
    const state = this.state();
    if (state.initialLoading) {
      return true;
    }
    const currentContextId = this.getActiveContextId();
    if (isNullOrUndefined(currentContextId)) {
      return false;
    }
    const contextLoadingVendors = state.loadingVendors[currentContextId];
    return isDefined(contextLoadingVendors) ? contextLoadingVendors.size > 0 : false;
  }, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
  hasClientData = computed(() => !!this.state().selectedClient, ...ngDevMode ? [{ debugName: "hasClientData" }] : []);
  hasVendorData = computed(() => !!this.state().clientVendor, ...ngDevMode ? [{ debugName: "hasVendorData" }] : []);
  hasDistributorData = computed(() => !!this.state().vendorDistributor, ...ngDevMode ? [{ debugName: "hasDistributorData" }] : []);
  userPermissionLevel = computed(() => this.state().userPermissionLevel, ...ngDevMode ? [{ debugName: "userPermissionLevel" }] : []);
  // Helper to generate pagination key
  getPaginationKey(vendorId, groupId) {
    return isDefined(groupId) ? `${vendorId}_${groupId}` : vendorId;
  }
  /**
   * Validates vendor ID and throws if invalid
   * @param vendorId - The vendor ID to validate
   * @throws Error if vendor ID is invalid
   */
  validateVendorId(vendorId) {
    if (!vendorId?.trim()) {
      throw new Error("Invalid vendor ID");
    }
  }
  /**
   * Gets the current context ID for scoping vendor/client data.
   * This method handles both distributor-level and vendor-only contexts:
   * - For distributor users: returns the actual distributor ID
   * - For vendor-only users: returns vendor.owner.id (the vendor's parent/owner used as scope)
   * - For client-only users: returns null
   *
   * @returns The active context ID or null if not available
   */
  getActiveContextId() {
    const vendorDistributor = this.vendorDistributor();
    if (isDefined(vendorDistributor)) {
      return vendorDistributor.id;
    }
    const clientVendor = this.clientVendor();
    if (isDefined(clientVendor)) {
      return clientVendor.owner?.id ?? null;
    }
    return null;
  }
  /**
   * Helper method to get distributor-scoped pagination key
   * @param distributorId - The distributor ID
   * @param vendorId - The vendor ID
   * @param groupId - Optional group ID
   * @returns Combined pagination key
   */
  getDistributorPaginationKey(distributorId, vendorId, groupId) {
    const baseKey = isDefined(groupId) ? `${vendorId}_${groupId}` : vendorId;
    return `${distributorId}_${baseKey}`;
  }
  // State update methods
  /**
   * Sets the initial loading state of the administration tree
   * @param loading - Boolean indicating if initial data is being loaded
   */
  setInitialLoading(loading) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), {
      initialLoading: loading
    }));
  }
  /**
   * Marks a vendor as failed to load for a specific distributor
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor to mark as failed
   */
  markDistributorVendorAsFailedToLoad(distributorId, vendorId) {
    this.state.update((state) => {
      const distributorFailedVendors = state.failedVendors[distributorId] ?? /* @__PURE__ */ new Set();
      return __spreadProps(__spreadValues({}, state), {
        failedVendors: __spreadProps(__spreadValues({}, state.failedVendors), {
          [distributorId]: new Set(distributorFailedVendors).add(vendorId)
        })
      });
    });
  }
  /**
   * Checks if a vendor is currently loading within a specific distributor
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor
   * @returns Whether the vendor is loading
   */
  isDistributorVendorLoading(distributorId, vendorId) {
    return this.state().loadingVendors[distributorId]?.has(vendorId) ?? false;
  }
  /**
   * Checks if a vendor has been loaded within a specific distributor
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor
   * @returns Whether the vendor has been loaded
   */
  isDistributorVendorLoaded(distributorId, vendorId) {
    return this.state().loadedVendors[distributorId]?.has(vendorId) ?? false;
  }
  /**
   * Checks if a vendor failed to load within a specific distributor
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor
   * @returns Whether the vendor failed to load
   */
  isDistributorVendorFailedToLoad(distributorId, vendorId) {
    return this.state().failedVendors[distributorId]?.has(vendorId) ?? false;
  }
  /**
   * Clears failed vendor state for a specific distributor
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor to clear from failed state
   */
  clearDistributorVendorFailedState(distributorId, vendorId) {
    this.state.update((state) => {
      const distributorFailedVendors = state.failedVendors[distributorId] ?? /* @__PURE__ */ new Set();
      const newFailedVendors = new Set(distributorFailedVendors);
      newFailedVendors.delete(vendorId);
      return __spreadProps(__spreadValues({}, state), {
        failedVendors: __spreadProps(__spreadValues({}, state.failedVendors), {
          [distributorId]: newFailedVendors
        })
      });
    });
  }
  /**
   * Gets all vendor IDs that are currently loading for a specific distributor
   * @param distributorId - The ID of the distributor
   * @returns Set of vendor IDs that are loading
   */
  getDistributorLoadingVendorIds(distributorId) {
    return this.state().loadingVendors[distributorId] ?? /* @__PURE__ */ new Set();
  }
  /**
   * Gets all vendor IDs that have been loaded for a specific distributor
   * @param distributorId - The ID of the distributor
   * @returns Set of vendor IDs that have been loaded
   */
  getDistributorLoadedVendorIds(distributorId) {
    return this.state().loadedVendors[distributorId] ?? /* @__PURE__ */ new Set();
  }
  /**
   * Gets all vendor IDs that failed to load for a specific distributor
   * @param distributorId - The ID of the distributor
   * @returns Set of vendor IDs that failed to load
   */
  getDistributorFailedVendorIds(distributorId) {
    return this.state().failedVendors[distributorId] ?? /* @__PURE__ */ new Set();
  }
  /**
   * Set the loading state for a specific vendor in a distributor
   */
  setVendorLoadingForDistributor(distributorId, vendorId) {
    this.state.update((state) => {
      const distributorLoading = state.loadingVendors[distributorId] ?? /* @__PURE__ */ new Set();
      return __spreadProps(__spreadValues({}, state), {
        loadingVendors: __spreadProps(__spreadValues({}, state.loadingVendors), {
          [distributorId]: new Set(distributorLoading).add(vendorId)
        })
      });
    });
  }
  /**
   * Clear the loading state for a specific vendor in a distributor
   */
  clearVendorLoadingForDistributor(distributorId, vendorId) {
    this.state.update((state) => {
      const distributorLoading = state.loadingVendors[distributorId];
      if (isNullOrUndefined(distributorLoading))
        return state;
      const newLoadingVendors = new Set(distributorLoading);
      newLoadingVendors.delete(vendorId);
      return __spreadProps(__spreadValues({}, state), {
        loadingVendors: __spreadProps(__spreadValues({}, state.loadingVendors), {
          [distributorId]: newLoadingVendors
        })
      });
    });
  }
  /**
   * Sets the currently selected client
   * @param client - The client response object or null to clear selection
   */
  setSelectedClient(client) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), {
      selectedClient: client
    }));
  }
  /**
   * Sets the vendor associated with the selected client
   * @param vendor - The vendor response object or null to clear
   */
  setClientVendor(vendor) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), {
      clientVendor: vendor
    }));
  }
  /**
   * Sets the distributor associated with the current vendor
   * @param vendor - The vendor response object or null to clear
   */
  setVendorDistributor(vendor) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), {
      vendorDistributor: vendor
    }));
  }
  /**
   * Updates the list of vendors in the state
   * @param vendors - Array of vendor list items
   */
  setVendors(vendors) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), {
      vendors
    }));
  }
  /**
   * Updates the list of distributors in the state
   * @param distributors - Array of distributor list items
   */
  setDistributors(distributors) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), {
      distributors
    }));
  }
  /**
   * Adds or appends group clients and updates pagination state.
   * @param distributorId - The ID of the distributor.
   * @param vendorId - The ID of the vendor.
   * @param groupId - The ID of the group.
   * @param clients - Array of client items.
   * @param pagination - Pagination info from the API call.
   * @param append - Whether to append or replace clients.
   */
  addGroupClients(distributorId, vendorId, groupId, clients, pagination, append = false) {
    this.validateVendorId(vendorId);
    if (!groupId)
      return;
    const paginationKey = this.getDistributorPaginationKey(distributorId, vendorId, groupId);
    this.state.update((state) => {
      const distributorGroupClients = state.groupClients[distributorId] ?? {};
      const vendorGroups = distributorGroupClients[vendorId] ?? {};
      const existingClients = append ? vendorGroups[groupId] ?? [] : [];
      const newGroupClients = __spreadProps(__spreadValues({}, state.groupClients), {
        [distributorId]: __spreadProps(__spreadValues({}, distributorGroupClients), {
          [vendorId]: __spreadProps(__spreadValues({}, vendorGroups), {
            [groupId]: [...existingClients, ...clients]
          })
        })
      });
      const distributorPagination = state.clientPagination[distributorId] ?? {};
      const newPagination = __spreadProps(__spreadValues({}, state.clientPagination), {
        [distributorId]: __spreadProps(__spreadValues({}, distributorPagination), {
          [paginationKey]: __spreadProps(__spreadValues({}, pagination), { loadingMore: false })
        })
      });
      return __spreadProps(__spreadValues({}, state), {
        groupClients: newGroupClients,
        clientPagination: newPagination
      });
    });
  }
  /**
   * Gets clients for a specific group
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor
   * @param groupId - The ID of the group
   * @returns Array of client items associated with the group
   */
  getGroupClients(distributorId, vendorId, groupId) {
    return this.state().groupClients[distributorId]?.[vendorId]?.[groupId] ?? [];
  }
  /**
   * Checks if a group has any clients loaded
   * @param vendorId - The ID of the vendor
   * @param groupId - The ID of the group
   * @returns boolean indicating if group has clients
   */
  hasGroupClients(distributorId, vendorId, groupId) {
    return this.getGroupClients(distributorId, vendorId, groupId).length > 0;
  }
  /**
   * Updates the children of a specific group node within a distributor context
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor
   * @param groupId - The ID of the group
   * @param children - Array of tree nodes representing the children
   */
  updateGroupChildren(distributorId, vendorId, groupId, children) {
    this.state.update((state) => {
      const distributorGroupClients = state.groupClients[distributorId] ?? {};
      const vendorGroups = distributorGroupClients[vendorId] ?? {};
      return __spreadProps(__spreadValues({}, state), {
        groupClients: __spreadProps(__spreadValues({}, state.groupClients), {
          [distributorId]: __spreadProps(__spreadValues({}, distributorGroupClients), {
            [vendorId]: __spreadProps(__spreadValues({}, vendorGroups), {
              [groupId]: children.map((node) => node.data)
            })
          })
        })
      });
    });
  }
  /**
   * Resets all state to initial values
   * Use this when navigating away or cleaning up
   */
  clearAllState() {
    this.state.set({
      loadedVendors: {},
      loadingVendors: {},
      failedVendors: {},
      expandedNodes: {},
      vendorClients: {},
      vendorGroups: {},
      groupClients: {},
      selectedClient: null,
      clientVendor: null,
      vendorDistributor: null,
      distributors: [],
      initialLoading: false,
      expandedGroups: {},
      expandedDistributors: /* @__PURE__ */ new Set(),
      clientPagination: {},
      distributorVendors: {},
      userPermissionLevel: null
    });
  }
  /**
   * Fallback handler when only client data is available
   * Clears all vendor-related data and sets the client
   * @param client - The client response object to fall back to
   */
  setFallbackToClient(client) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), {
      selectedClient: client,
      clientVendor: null,
      vendorDistributor: null,
      // Clear other vendor-related data
      vendorClients: {},
      vendorGroups: {},
      loadedVendors: {},
      loadingVendors: {},
      failedVendors: {}
    }));
  }
  /**
   * Fallback handler when only vendor data is available
   * Preserves the current vendor's context data while clearing stale data from previous distributor contexts
   * @param vendor - The vendor response or list item to fall back to
   */
  setFallbackToVendor(vendor) {
    this.state.update((state) => {
      const currentContextId = vendor.owner?.id;
      const filterByContextId = (record) => {
        if (!currentContextId)
          return {};
        return currentContextId in record ? { [currentContextId]: record[currentContextId] } : {};
      };
      return __spreadProps(__spreadValues({}, state), {
        clientVendor: vendor,
        vendorDistributor: null,
        // Keep only current vendor's context data, clear stale distributor data
        distributorVendors: filterByContextId(state.distributorVendors),
        vendorClients: filterByContextId(state.vendorClients),
        vendorGroups: filterByContextId(state.vendorGroups),
        groupClients: filterByContextId(state.groupClients),
        loadedVendors: filterByContextId(state.loadedVendors),
        loadingVendors: filterByContextId(state.loadingVendors),
        failedVendors: filterByContextId(state.failedVendors),
        expandedNodes: filterByContextId(state.expandedNodes),
        expandedGroups: filterByContextId(state.expandedGroups),
        clientPagination: filterByContextId(state.clientPagination),
        // Clear distributor-level state
        expandedDistributors: /* @__PURE__ */ new Set(),
        distributors: []
      });
    });
  }
  /**
   * Checks if a vendor has any associated clients in a specific distributor context
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor to check
   * @returns boolean indicating if vendor has clients
   * @throws Error if vendor ID is invalid
   */
  hasDistributorVendorClients(distributorId, vendorId) {
    this.validateVendorId(vendorId);
    const clients = this.state().vendorClients[distributorId]?.[vendorId];
    return Array.isArray(clients) && clients.length > 0;
  }
  /**
   * Sets expanded state for a group within a specific distributor context
   * @param distributorId - The ID of the distributor
   * @param groupId - The ID of the group
   * @param expanded - Whether the group is expanded
   */
  setDistributorExpandedGroup(distributorId, groupId, expanded) {
    this.state.update((state) => {
      const distributorExpandedGroups = state.expandedGroups[distributorId] ?? /* @__PURE__ */ new Set();
      const newExpandedGroups = new Set(distributorExpandedGroups);
      if (expanded) {
        newExpandedGroups.add(groupId);
      } else {
        newExpandedGroups.delete(groupId);
      }
      return __spreadProps(__spreadValues({}, state), {
        expandedGroups: __spreadProps(__spreadValues({}, state.expandedGroups), {
          [distributorId]: newExpandedGroups
        })
      });
    });
  }
  /**
   * Checks if a group is expanded within a specific distributor context
   * @param distributorId - The ID of the distributor
   * @param groupId - The ID of the group
   * @returns Whether the group is expanded
   */
  isDistributorGroupExpanded(distributorId, groupId) {
    return this.state().expandedGroups[distributorId]?.has(groupId) ?? false;
  }
  /**
   * Sets initial expansion state for a group within a distributor context
   * @param distributorId - The ID of the distributor
   * @param groupId - The ID of the group
   */
  setDistributorInitialGroupExpansion(distributorId, groupId) {
    this.state.update((state) => {
      const distributorExpandedGroups = state.expandedGroups[distributorId] ?? /* @__PURE__ */ new Set();
      return __spreadProps(__spreadValues({}, state), {
        expandedGroups: __spreadProps(__spreadValues({}, state.expandedGroups), {
          [distributorId]: new Set(distributorExpandedGroups).add(groupId)
        })
      });
    });
  }
  setExpandedDistributor(distributorId, expanded) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), {
      expandedDistributors: expanded ? new Set(state.expandedDistributors).add(distributorId) : new Set([...state.expandedDistributors].filter((id) => id !== distributorId))
    }));
  }
  /**
   * Gets a specific client by ID from any loaded clients within distributor contexts
   * @param clientId - The ID of the client to find
   * @param distributorId - Optional distributor ID to scope the search
   * @returns The client object if found, null otherwise
   */
  getClientById(clientId, distributorId) {
    if (!clientId) {
      return null;
    }
    if (this.state().selectedClient?.id === clientId) {
      return this.state().selectedClient;
    }
    if (isDefined(distributorId)) {
      return this.getClientByIdInDistributor(clientId, distributorId);
    }
    const distributorVendorClients = this.state().vendorClients;
    for (const [distId] of Object.entries(distributorVendorClients)) {
      const client = this.getClientByIdInDistributor(clientId, distId);
      if (client)
        return client;
    }
    return null;
  }
  /**
   * Helper method to find a client within a specific distributor's data
   * @param clientId - The ID of the client to find
   * @param distributorId - The ID of the distributor to search within
   * @returns The client object if found, null otherwise
   */
  getClientByIdInDistributor(clientId, distributorId) {
    const vendorClients = this.state().vendorClients[distributorId] ?? {};
    for (const clients of Object.values(vendorClients)) {
      const client = clients.find((c) => c.id === clientId);
      if (client)
        return client;
    }
    const groupClients = this.state().groupClients[distributorId] ?? {};
    for (const vendorGroups of Object.values(groupClients)) {
      for (const clients of Object.values(vendorGroups)) {
        const client = clients.find((c) => c.id === clientId);
        if (client)
          return client;
      }
    }
    return null;
  }
  /**
   * Gets a specific vendor by ID within distributor contexts
   * @param vendorId - The ID of the vendor to find
   * @param distributorId - Optional distributor ID to scope the search
   * @returns The vendor object if found, null otherwise
   */
  getVendorById(vendorId, distributorId) {
    if (!vendorId) {
      return null;
    }
    if (this.state().clientVendor?.id === vendorId) {
      return this.state().clientVendor;
    }
    if (isDefined(distributorId)) {
      const distributorVendors = this.state().distributorVendors[distributorId] ?? [];
      const vendor = distributorVendors.find((v) => v.id === vendorId);
      if (vendor)
        return vendor;
    } else {
      const distributorVendors = this.state().distributorVendors;
      for (const vendors of Object.values(distributorVendors)) {
        const vendor = vendors.find((v) => v.id === vendorId);
        if (vendor)
          return vendor;
      }
    }
    return null;
  }
  /**
   * Gets the parent vendor for a specific client within distributor contexts
   * @param clientId - The ID of the client
   * @param distributorId - Optional distributor ID to scope the search
   * @returns The parent vendor if found, null otherwise
   */
  getVendorForClient(clientId, distributorId) {
    if (!clientId) {
      return null;
    }
    if (this.state().selectedClient?.id === clientId) {
      return this.state().clientVendor;
    }
    if (isDefined(distributorId)) {
      return this.getVendorForClientInDistributor(clientId, distributorId);
    }
    const distributorVendorClients = this.state().vendorClients;
    for (const [distId] of Object.entries(distributorVendorClients)) {
      const vendor = this.getVendorForClientInDistributor(clientId, distId);
      if (vendor)
        return vendor;
    }
    return null;
  }
  /**
   * Helper method to find the vendor for a client within a specific distributor
   * @param clientId - The ID of the client
   * @param distributorId - The ID of the distributor to search within
   * @returns The parent vendor if found, null otherwise
   */
  getVendorForClientInDistributor(clientId, distributorId) {
    const vendorClients = this.state().vendorClients[distributorId] ?? {};
    for (const [vendorId, clients] of Object.entries(vendorClients)) {
      const foundClient = clients.find((c) => c.id === clientId);
      if (foundClient) {
        return this.getVendorById(vendorId, distributorId);
      }
    }
    const groupClients = this.state().groupClients[distributorId] ?? {};
    for (const [vendorId, vendorGroups] of Object.entries(groupClients)) {
      for (const clients of Object.values(vendorGroups)) {
        const foundClient = clients.find((c) => c.id === clientId);
        if (foundClient) {
          return this.getVendorById(vendorId, distributorId);
        }
      }
    }
    return null;
  }
  /**
   * Gets all clients for a specific vendor within a distributor context
   * @param vendorId - The ID of the vendor
   * @param distributorId - The ID of the distributor
   * @returns Array of all clients associated with the vendor within the distributor
   */
  getAllClientsForVendorInDistributor(vendorId, distributorId) {
    if (!vendorId || !distributorId) {
      return [];
    }
    const allClients = [];
    const directClients = this.state().vendorClients[distributorId]?.[vendorId] ?? [];
    allClients.push(...directClients);
    const vendorGroups = this.state().groupClients[distributorId]?.[vendorId] ?? {};
    for (const clients of Object.values(vendorGroups)) {
      allClients.push(...clients);
    }
    return allClients;
  }
  /**
   * Sets the loading state for loading more clients within a distributor context
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor
   * @param groupId - Optional group ID
   * @param loading - Whether more clients are being loaded
   */
  setLoadingMoreClients(distributorId, vendorId, groupId, loading) {
    const paginationKey = this.getDistributorPaginationKey(distributorId, vendorId, groupId);
    this.state.update((state) => {
      const distributorPagination = state.clientPagination[distributorId] ?? {};
      const currentPagination = distributorPagination[paginationKey];
      if (isNullOrUndefined(currentPagination)) {
        return state;
      }
      return __spreadProps(__spreadValues({}, state), {
        clientPagination: __spreadProps(__spreadValues({}, state.clientPagination), {
          [distributorId]: __spreadProps(__spreadValues({}, distributorPagination), {
            [paginationKey]: __spreadProps(__spreadValues({}, currentPagination), { loadingMore: loading })
          })
        })
      });
    });
  }
  /**
   * @deprecated Use clearDistributorGroupPagination instead
   * Clears pagination state for a specific group (legacy method for backward compatibility)
   * @param vendorId - The ID of the vendor
   * @param groupId - The ID of the group
   */
  clearGroupPagination(vendorId, groupId) {
    const contextId = this.getActiveContextId();
    if (isDefined(contextId)) {
      this.clearDistributorGroupPagination(contextId, vendorId, groupId);
    } else {
      const key = this.getPaginationKey(vendorId, groupId);
      this.state.update((state) => {
        const newPagination = __spreadValues({}, state.clientPagination);
        delete newPagination[key];
        return __spreadProps(__spreadValues({}, state), { clientPagination: newPagination });
      });
    }
  }
  /**
   * Clears pagination state for a vendor's direct clients
   * @param vendorId - ID of the vendor
   */
  clearVendorPagination(vendorId) {
    this.state.update((state) => {
      const paginationKey = vendorId;
      const newPagination = __spreadValues({}, state.clientPagination);
      delete newPagination[paginationKey];
      return __spreadProps(__spreadValues({}, state), {
        clientPagination: newPagination
      });
    });
  }
  /**
   * Clears all client data for a specific vendor
   * @param vendorId - ID of the vendor
   */
  clearVendorClients(vendorId) {
    this.state.update((state) => {
      const newVendorClients = __spreadValues({}, state.vendorClients);
      delete newVendorClients[vendorId];
      return __spreadProps(__spreadValues({}, state), {
        vendorClients: newVendorClients
      });
    });
  }
  /**
   * Clears all group data for a specific vendor
   * @param vendorId - ID of the vendor
   */
  clearVendorGroups(vendorId) {
    this.state.update((state) => {
      const newVendorGroups = __spreadValues({}, state.vendorGroups);
      delete newVendorGroups[vendorId];
      const newGroupClients = __spreadValues({}, state.groupClients);
      for (const key of Object.keys(newGroupClients)) {
        if (key.startsWith(`${vendorId}_`)) {
          delete newGroupClients[key];
        }
      }
      const newPagination = __spreadValues({}, state.clientPagination);
      for (const key of Object.keys(newPagination)) {
        if (key.startsWith(`${vendorId}_`)) {
          delete newPagination[key];
        }
      }
      return __spreadProps(__spreadValues({}, state), {
        vendorGroups: newVendorGroups,
        groupClients: newGroupClients,
        clientPagination: newPagination
      });
    });
  }
  // ========================================
  // NEW DISTRIBUTOR-SCOPED METHODS
  // ========================================
  /**
   * Sets vendors for a specific distributor
   * @param distributorId - The ID of the distributor
   * @param vendors - Array of vendor items
   */
  setDistributorVendors(distributorId, vendors) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), {
      distributorVendors: __spreadProps(__spreadValues({}, state.distributorVendors), {
        [distributorId]: vendors
      })
    }));
  }
  /**
   * Gets vendors for a specific distributor
   * @param distributorId - The ID of the distributor
   * @returns Array of vendors for the distributor
   */
  getDistributorVendors(distributorId) {
    return this.state().distributorVendors[distributorId] ?? [];
  }
  /**
   * Gets vendors for the current context (distributor or vendor-only)
   * @returns Array of vendors for the current context
   */
  getVendorsForCurrentDistributor() {
    const contextId = this.getActiveContextId();
    if (isNullOrUndefined(contextId)) {
      return [];
    }
    return this.getDistributorVendors(contextId);
  }
  /**
   * Adds or appends vendor clients for a specific distributor and vendor
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor
   * @param clients - Array of client items
   * @param pagination - Pagination info from the API call
   * @param append - Whether to append or replace clients
   */
  addDistributorVendorClients(distributorId, vendorId, clients, pagination, append = false) {
    this.validateVendorId(vendorId);
    const paginationKey = this.getDistributorPaginationKey(distributorId, vendorId);
    this.state.update((state) => {
      const distributorClients = state.vendorClients[distributorId] ?? {};
      const existingClients = append ? distributorClients[vendorId] ?? [] : [];
      const newVendorClients = __spreadProps(__spreadValues({}, state.vendorClients), {
        [distributorId]: __spreadProps(__spreadValues({}, distributorClients), {
          [vendorId]: [...existingClients, ...clients]
        })
      });
      const distributorPagination = state.clientPagination[distributorId] ?? {};
      const newPagination = __spreadProps(__spreadValues({}, state.clientPagination), {
        [distributorId]: __spreadProps(__spreadValues({}, distributorPagination), {
          [paginationKey]: __spreadProps(__spreadValues({}, pagination), { loadingMore: false })
        })
      });
      return __spreadProps(__spreadValues({}, state), {
        vendorClients: newVendorClients,
        clientPagination: newPagination
      });
    });
  }
  /**
   * Sets vendor groups for a specific distributor and vendor
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor
   * @param groups - Array of company group responses
   */
  setDistributorVendorGroups(distributorId, vendorId, groups) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), {
      vendorGroups: __spreadProps(__spreadValues({}, state.vendorGroups), {
        [distributorId]: __spreadProps(__spreadValues({}, state.vendorGroups[distributorId]), {
          [vendorId]: groups
        })
      })
    }));
  }
  /**
   * Gets vendor clients for a specific distributor and vendor
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor
   * @returns Array of clients for the vendor within the distributor
   */
  getDistributorVendorClients(distributorId, vendorId) {
    return this.state().vendorClients[distributorId]?.[vendorId] ?? [];
  }
  /**
   * Gets vendor groups for a specific distributor and vendor
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor
   * @returns Array of groups for the vendor within the distributor
   */
  getDistributorVendorGroups(distributorId, vendorId) {
    return this.state().vendorGroups[distributorId]?.[vendorId] ?? [];
  }
  /**
   * Removes a vendor from the loaded vendors set for a specific distributor
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor to remove from loaded state
   */
  removeDistributorLoadedVendor(distributorId, vendorId) {
    this.state.update((state) => {
      const distributorLoadedVendors = state.loadedVendors[distributorId] ?? /* @__PURE__ */ new Set();
      const newLoadedVendors = new Set(distributorLoadedVendors);
      newLoadedVendors.delete(vendorId);
      return __spreadProps(__spreadValues({}, state), {
        loadedVendors: __spreadProps(__spreadValues({}, state.loadedVendors), {
          [distributorId]: newLoadedVendors
        })
      });
    });
  }
  /**
   * Marks a vendor as loaded for a specific distributor
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor to mark as loaded
   */
  markDistributorVendorAsLoaded(distributorId, vendorId) {
    this.state.update((state) => {
      const distributorLoadedVendors = state.loadedVendors[distributorId] ?? /* @__PURE__ */ new Set();
      return __spreadProps(__spreadValues({}, state), {
        loadedVendors: __spreadProps(__spreadValues({}, state.loadedVendors), {
          [distributorId]: new Set(distributorLoadedVendors).add(vendorId)
        })
      });
    });
  }
  setDistributorNodeExpanded(distributorId, nodeId, expanded) {
    this.state.update((state) => {
      const distributorExpandedNodes = state.expandedNodes[distributorId] ?? /* @__PURE__ */ new Set();
      const newExpandedNodes = new Set(distributorExpandedNodes);
      if (expanded) {
        newExpandedNodes.add(nodeId);
      } else {
        newExpandedNodes.delete(nodeId);
      }
      return __spreadProps(__spreadValues({}, state), {
        expandedNodes: __spreadProps(__spreadValues({}, state.expandedNodes), {
          [distributorId]: newExpandedNodes
        })
      });
    });
  }
  /**
   * Checks if a node is expanded within a specific distributor
   * @param distributorId - The ID of the distributor
   * @param nodeId - The ID of the node
   * @returns Whether the node is expanded
   */
  isDistributorNodeExpanded(distributorId, nodeId) {
    return this.state().expandedNodes[distributorId]?.has(nodeId) ?? false;
  }
  /**
   * Gets pagination state for a specific distributor, vendor, and optional group
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor
   * @param groupId - Optional group ID
   * @returns Pagination state or undefined if not found
   */
  getDistributorPaginationState(distributorId, vendorId, groupId) {
    const paginationKey = this.getDistributorPaginationKey(distributorId, vendorId, groupId);
    return this.state().clientPagination[distributorId]?.[paginationKey];
  }
  /**
   * Updates loading more state for a specific distributor pagination
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor
   * @param groupId - Optional group ID
   * @param loadingMore - Whether more data is being loaded
   */
  setDistributorLoadingMore(distributorId, vendorId, groupId, loadingMore) {
    const paginationKey = this.getDistributorPaginationKey(distributorId, vendorId, groupId);
    this.state.update((state) => {
      const distributorPagination = state.clientPagination[distributorId] ?? {};
      const currentPagination = distributorPagination[paginationKey];
      if (isNullOrUndefined(currentPagination)) {
        return state;
      }
      return __spreadProps(__spreadValues({}, state), {
        clientPagination: __spreadProps(__spreadValues({}, state.clientPagination), {
          [distributorId]: __spreadProps(__spreadValues({}, distributorPagination), {
            [paginationKey]: __spreadProps(__spreadValues({}, currentPagination), {
              loadingMore
            })
          })
        })
      });
    });
  }
  /**
   * Clears pagination state for a specific group within a distributor context
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor
   * @param groupId - The ID of the group
   */
  clearDistributorGroupPagination(distributorId, vendorId, groupId) {
    const paginationKey = this.getDistributorPaginationKey(distributorId, vendorId, groupId);
    this.state.update((state) => {
      const distributorPagination = state.clientPagination[distributorId] ?? {};
      const newDistributorPagination = __spreadValues({}, distributorPagination);
      delete newDistributorPagination[paginationKey];
      return __spreadProps(__spreadValues({}, state), {
        clientPagination: __spreadProps(__spreadValues({}, state.clientPagination), {
          [distributorId]: newDistributorPagination
        })
      });
    });
  }
  /**
   * Checks if a distributor is expanded
   * @param distributorId - The ID of the distributor
   * @returns Whether the distributor is expanded
   */
  isDistributorExpanded(distributorId) {
    return this.state().expandedDistributors.has(distributorId);
  }
  /**
   * Sets a vendor node as loading within a distributor context
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor
   */
  setDistributorNodeLoading(distributorId, vendorId) {
    this.validateVendorId(vendorId);
    this.state.update((state) => {
      const distributorLoadingVendors = state.loadingVendors[distributorId] ?? /* @__PURE__ */ new Set();
      return __spreadProps(__spreadValues({}, state), {
        loadingVendors: __spreadProps(__spreadValues({}, state.loadingVendors), {
          [distributorId]: new Set(distributorLoadingVendors).add(vendorId)
        })
      });
    });
  }
  /**
   * Clears the loading state for a vendor node within a distributor context
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor
   */
  clearDistributorNodeLoading(distributorId, vendorId) {
    this.state.update((state) => {
      const distributorLoadingVendors = state.loadingVendors[distributorId] ?? /* @__PURE__ */ new Set();
      const newLoadingVendors = new Set(distributorLoadingVendors);
      newLoadingVendors.delete(vendorId);
      return __spreadProps(__spreadValues({}, state), {
        loadingVendors: __spreadProps(__spreadValues({}, state.loadingVendors), {
          [distributorId]: newLoadingVendors
        })
      });
    });
  }
  /**
   * Sets the user's permission level
   * @param level - The user's permission level
   */
  setUserPermissionLevel(level) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), {
      userPermissionLevel: level
    }));
  }
  /**
   * Checks if the user has permission to access vendor-level data.
   * Returns true if permission level is vendor or higher, or null (not yet determined).
   * Returns false only if explicitly set to CLIENT_ONLY.
   * @returns boolean indicating access permission
   */
  canAccessVendorLevel() {
    const permissionLevel = this.userPermissionLevel();
    if (permissionLevel === null) {
      return true;
    }
    return permissionLevel === UserPermissionLevel.VENDOR || permissionLevel === UserPermissionLevel.DISTRIBUTOR || permissionLevel === UserPermissionLevel.SUPER_ADMIN;
  }
  /**
   * Checks if the user has permission to access distributor-level data.
   * Returns true if permission level is distributor or higher, or null (not yet determined).
   * Returns false if explicitly set to CLIENT_ONLY or VENDOR.
   * @returns boolean indicating access permission
   */
  canAccessDistributorLevel() {
    const permissionLevel = this.userPermissionLevel();
    if (permissionLevel === null) {
      return true;
    }
    return permissionLevel === UserPermissionLevel.DISTRIBUTOR || permissionLevel === UserPermissionLevel.SUPER_ADMIN;
  }
  /**
   * Checks if the user has permission to access super admin data.
   * Returns false if permission is not explicitly SUPER_ADMIN.
   * @returns boolean indicating access permission
   */
  canAccessSuperAdminLevel() {
    return this.userPermissionLevel() === UserPermissionLevel.SUPER_ADMIN;
  }
  static \u0275fac = function AdminStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminStateService, factory: _AdminStateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/services/theme-data.service.ts
var import_lodash3 = __toESM(require_lodash());

// src/app/shared/models/theme-dictionary.ts
var import_lodash = __toESM(require_lodash());
var import_color = __toESM(require_color());
var THEME_DEFAULT_SETTINGS = {
  default: {
    primaryColor_main: "#f33636",
    primaryColor_invert: "#ffffff",
    navigationColor_background: "#ffffff",
    navigationColor_foreground: "#676a6c",
    navigationColor_border: "#e6e6e6",
    navigationColor_accent: "whitesmoke",
    navigationColor_accentInvert: "#676a6c",
    navigationActiveState: "left-border",
    headerColor_background: "#ffffff",
    headerColor_foreground: "#676a6c",
    headerColor_border: "rgba(0, 0, 0, .05)",
    headerColor_accent: "whitesmoke",
    headerColor_accentInvert: "#676a6c",
    headerColorActive_background: "whitesmoke",
    headerColorActive_foreground: "#676a6c",
    headerColorActive_border: "#e6e6e6",
    graphColors: [
      "#69aaf8",
      "#f33636",
      "#F5B400",
      "#5F39BF",
      "#F47C2A",
      "#B199F4",
      "#86E57E",
      "#857986",
      "#6b0392",
      "#f05b4f",
      "#dda458",
      "#eacf7d",
      "#86797d",
      "#b2c326",
      "#6188e2",
      "#a748ca",
      "#69aaf8",
      "#F5B400",
      "#5F39BF",
      "#F47C2A",
      "#B199F4",
      "#86E57E",
      "#857986",
      "#6b0392",
      "#f05b4f",
      "#dda458",
      "#eacf7d"
    ],
    graphAxesLabelColor: "rgba(103, 106, 108, .5)",
    textColor_default: "rgb(103, 106, 108)",
    textColor_invert: "#ffffff"
  },
  nightrider: {
    primaryColor_main: "#0072C5",
    primaryColor_invert: "#ffffff",
    navigationColor_background: "#333333",
    navigationColor_foreground: "#ffffff",
    navigationColor_border: "#2b2b2b",
    navigationColor_accent: "#4A4A4A",
    navigationColor_accentInvert: "#ffffff",
    navigationActiveState: "background",
    headerColor_background: "#333333",
    headerColor_foreground: "rgba(255, 255, 255, 0.8)",
    headerColor_border: "#2b2b2b",
    headerColor_accent: "#4A4A4A",
    headerColor_accentInvert: "#ffffff",
    headerColorActive_background: "#404040",
    headerColorActive_foreground: "rgba(255, 255, 255, 0.8)",
    headerColorActive_border: "#383838",
    graphColors: [
      "rgba(91, 189, 218, 0.8)",
      "#b32a2a",
      "#fdcdcd",
      "#cbccce",
      "#b0e1d8",
      "#eee9b4",
      "#d3c6d6",
      "#aaaaaa",
      "#88b7b8",
      "#e0bba9",
      "#ffda90",
      "#a8cca0",
      "#969abd",
      "#ba9db6"
    ],
    graphAxesLabelColor: "rgba(255, 255, 255, .4)",
    textColor_default: "rgba(255, 255, 255, 0.8)",
    textColor_invert: "#1E1E1E"
  }
};
var THEME_VARIABLES = [
  {
    key: "navigationColor_background",
    type: "color",
    variables: ["--color-bg-menu"]
  },
  {
    key: "navigationColor_foreground",
    type: "color",
    variables: ["--color-bg-menu-contrast"]
  },
  {
    key: "navigationColor_border",
    type: "border",
    relatedColor: "navigationColor_background",
    variables: ["--color-bg-menu-border"]
  },
  {
    key: "navigationColor_accent",
    type: "accent",
    relatedColor: "navigationColor_background",
    variables: ["--color-bg-menu-accent"]
  },
  {
    key: "navigationColor_accentInvert",
    type: "match",
    relatedColor: "navigationColor_foreground",
    variables: ["--color-bg-menu-accent-contrast"]
  },
  {
    key: "headerColor_background",
    type: "color",
    variables: ["--color-bg-header"]
  },
  {
    key: "headerColor_foreground",
    type: "color",
    variables: ["--color-bg-header-contrast"]
  },
  {
    key: "headerColor_border",
    type: "border",
    relatedColor: "headerColor_background",
    variables: ["--color-bg-header-border"]
  },
  {
    key: "headerColor_accent",
    type: "accent",
    relatedColor: "headerColor_background",
    variables: ["--color-bg-header-accent"]
  },
  {
    key: "headerColor_accentInvert",
    type: "match",
    relatedColor: "headerColor_foreground",
    variables: ["--color-bg-header-accent-contrast"]
  },
  {
    key: "headerColorActive_background",
    type: "color",
    variables: ["--color-bg-header-active"]
  },
  {
    key: "headerColorActive_foreground",
    type: "color",
    variables: ["--color-bg-header-active-contrast"]
  },
  {
    key: "headerColorActive_border",
    type: "border",
    relatedColor: "headerColorActive_background",
    variables: ["--color-bg-header-active-border"]
  }
];
function isLegacyTheme(theme) {
  const themeDictionary = getThemeDictionary();
  const base = isDefined(theme.theme) ? themeDictionary[theme.theme] : void 0;
  if (isDefined(base)) {
    const legacyKeys = base.variableSettings.map((x) => x.key);
    return theme.theme === "nightrider" || (0, import_lodash.intersection)(legacyKeys, Object.keys(theme.settings ?? {})).length > 0;
  }
  return false;
}
function convertLegacyTheme(theme) {
  const result = {};
  if (theme["theme"] === "nightrider") {
    (0, import_lodash.set)(result, "main.background.color", "#161616");
    (0, import_lodash.set)(result, "content.background.color", "#252526");
    (0, import_lodash.set)(result, "header.background.color", "#333333");
    (0, import_lodash.set)(result, "footer.background.color", "#4a4a4a");
    (0, import_lodash.set)(result, "table.header.background.color", "#2e2e2e");
  }
  (0, import_lodash.set)(result, "navigation.active.style", isDefined(theme.settings?.["navigationActiveState"]) || (theme.theme === "nightrider" ? "background" : "left-border"));
  const defaultSettings = isDefined(theme.theme) && theme.theme in THEME_DEFAULT_SETTINGS ? THEME_DEFAULT_SETTINGS[theme.theme] : void 0;
  theme.variableSettings?.forEach((item) => {
    const value = getComputedColor(item, isDefined(theme["settings"]) ? theme["settings"] : {}, defaultSettings);
    switch (item.key) {
      case "navigationColor_background":
        (0, import_lodash.set)(result, "navigation.background.color", value);
        break;
      case "navigationColor_foreground":
        (0, import_lodash.set)(result, "navigation.font.color", value);
        break;
      case "navigationColor_border":
        (0, import_lodash.set)(result, "navigation.border.color", value);
        break;
      case "navigationColor_accent":
        break;
      case "navigationColor_accentInvert":
        break;
      case "headerColor_background":
        (0, import_lodash.set)(result, "header.background.color", value);
        if (theme["theme"] === "nightrider") {
          (0, import_lodash.set)(result, "footer.background.color", value);
        }
        break;
      case "headerColor_foreground":
        (0, import_lodash.set)(result, "header.font.color", value);
        if (theme["theme"] === "nightrider") {
          (0, import_lodash.set)(result, "footer.font.color", value);
        }
        break;
      case "headerColor_border":
        (0, import_lodash.set)(result, "header.border.color", value);
        break;
      case "headerColor_accent":
        break;
      case "headerColor_accentInvert":
        break;
      case "headerColorActive_background":
        (0, import_lodash.set)(result, "tab.active.background.color", value);
        break;
      case "headerColorActive_foreground":
        (0, import_lodash.set)(result, "tab.active.font.color", value);
        break;
      case "headerColorActive_border":
        (0, import_lodash.set)(result, "tab.active.border.color", value);
        break;
      case "primaryColor_main":
        (0, import_lodash.set)(result, "color.primary.color", value);
        break;
      case "primaryColor_invert":
        (0, import_lodash.set)(result, "color.primary.contrast", value);
        break;
      default:
        break;
    }
  });
  return result;
}
function getComputedColor(item, settings, defaultSettings) {
  if (isNullOrUndefined(item.relatedColor)) {
    return settings[item.key];
  }
  const relatedColor = (0, import_color.default)(settings[item.relatedColor]);
  const textOnDark = (0, import_color.default)(settings["textColor_default"]).isDark() ? settings["textColor_invert"] : settings["textColor_default"];
  const isDefault = settings[item.relatedColor] === defaultSettings?.[item.relatedColor];
  switch (item.type) {
    case "contrast":
      return isDefault ? defaultSettings[item.key] : relatedColor.isDark() ? textOnDark : relatedColor.darken(0.8).string();
    case "match":
      return isDefault ? defaultSettings[item.key] : settings[item.relatedColor];
    case "border":
    case "accent":
      return isDefault ? defaultSettings[item.key] : relatedColor.isDark() ? relatedColor.lighten(0.1).string() : relatedColor.darken(0.1).string();
    default:
      return settings[item.key];
  }
}
var getDefaultThemeForm = (i18n, baseTheme, fields) => {
  const translate = (value) => isDefined(i18n) ? i18n.instant("SHARED.THEME." + value) : value;
  const resetAction = {
    icon: "undo",
    name: i18n.instant("ADMIN.EDITORS.CLIENT.CUSTOMIZE.RESET_COLOR"),
    click: (_action, field, values) => {
      if (field.type === "swatches" && isDefined(field.values)) {
        field.values.forEach((kv) => {
          values[kv.key] = baseTheme.settings?.[kv.key];
        });
      } else {
        values[field.id] = baseTheme.settings?.[field.id];
      }
      return null;
    }
  };
  return {
    groups: [
      {
        fields: [
          {
            type: "color",
            id: "primaryColor_main",
            title: translate("PRIMARY_COLOR"),
            required: false,
            actions: [resetAction]
          },
          {
            type: "swatches",
            id: "navigationColor",
            title: translate("NAVIGATION_COLOR"),
            required: false,
            actions: [resetAction],
            values: [
              {
                key: "navigationColor_background",
                value: translate("BACKGROUND")
              },
              {
                key: "navigationColor_foreground",
                value: translate("FOREGROUND")
              }
            ]
          },
          {
            type: "combo",
            id: "navigationActiveState",
            title: translate("NAVIGATION_ACTIVE_STATE"),
            actions: [resetAction],
            values: [
              { key: "background", value: translate("BACKGROUND") },
              { key: "left-border", value: translate("LEFT_BORDER") },
              { key: "right-border", value: translate("RIGHT_BORDER") }
            ],
            required: false
          },
          {
            type: "swatches",
            id: "headerColor",
            title: translate("HEADER_COLOR"),
            required: false,
            actions: [resetAction],
            values: [
              { key: "headerColor_background", value: translate("BACKGROUND") },
              { key: "headerColor_foreground", value: translate("FOREGROUND") }
            ]
          },
          {
            type: "swatches",
            id: "headerColorActive",
            title: translate("HEADER_ACTIVE_COLOR"),
            required: false,
            actions: [resetAction],
            values: [
              {
                key: "headerColorActive_background",
                value: translate("BACKGROUND")
              },
              {
                key: "headerColorActive_foreground",
                value: translate("FOREGROUND")
              }
            ]
          },
          ...fields ?? []
        ]
      }
    ]
  };
};
var getThemeDictionary = () => {
  const value = {
    default: {
      id: "default",
      owner: null,
      entity: null,
      theme: "default",
      name: "Default Light",
      variableSettings: [
        ...THEME_VARIABLES,
        {
          key: "primaryColor_main",
          type: "color",
          variables: ["--color-primary", "--color-text-link"]
        },
        {
          key: "primaryColor_invert",
          type: "contrast",
          relatedColor: "primaryColor_main",
          variables: ["--color-primary-contrast"]
        }
      ],
      settings: THEME_DEFAULT_SETTINGS["default"],
      customStyles: "",
      logoPath: "",
      getSettingsForm: (i18n, fields) => getDefaultThemeForm(i18n, value["default"], fields)
    },
    nightrider: {
      id: "nightrider",
      owner: null,
      entity: null,
      theme: "nightrider",
      name: "Default Dark",
      variableSettings: [
        ...THEME_VARIABLES,
        {
          key: "primaryColor_main",
          type: "color",
          variables: [
            "--color-primary",
            "--color-text-link",
            "--color-bg-list-active"
          ]
        },
        {
          key: "primaryColor_invert",
          type: "contrast",
          relatedColor: "primaryColor_main",
          variables: [
            "--color-primary-contrast",
            "--color-bg-list-active-contrast"
          ]
        }
      ],
      settings: THEME_DEFAULT_SETTINGS["nightrider"],
      customStyles: "",
      logoPath: "",
      getSettingsForm: (i18n, fields) => getDefaultThemeForm(i18n, value["nightrider"], fields)
    }
  };
  return (0, import_lodash.cloneDeep)(value);
};

// src/app/shared/models/theme-engine.ts
var import_lodash2 = __toESM(require_lodash());

// src/app/shared/models/theme-defaults.ts
var THEME_OFF_WHITE = "#f7f7f7";
var THEME_OFF_BLACK = "#676a6c";
var THEME_DEFAULTS = {
  main: {
    font: {
      family: "Ubuntu",
      size: "1rem",
      weight: "400",
      color: `var(--main-background-color).inverse("${THEME_OFF_WHITE}", "${THEME_OFF_BLACK}")`
    },
    background: {
      color: THEME_OFF_WHITE
    },
    border: {
      color: "var(--main-background-color).darken(0.1)"
    },
    gutter: {
      width: "0"
    },
    shadow: "none",
    icon: {
      pack: "fontawesome:900"
    }
  },
  content: {
    font: {
      family: "var(--main-font-family)",
      size: "1rem",
      color: "var(--main-font-color)"
    },
    background: {
      color: "var(--main-background-color).lighten(0.1)"
    },
    border: {
      width: "1px",
      color: "var(--content-background-color).darken(0.1)"
    },
    shadow: "none"
  },
  sidebar: {
    font: {
      family: "var(--content-font-family)",
      size: "1rem",
      color: "var(--content-font-color)"
    },
    background: {
      color: "var(--content-background-color)"
    },
    border: {
      width: "1px",
      color: "var(--sidebar-background-color).darken(0.05)"
    },
    shadow: "none"
  },
  loader: {
    style: "spinner",
    font: {
      color: "var(--main-font-color)"
    },
    overlay: {
      background: {
        color: "var(--main-background-color).fade(0.6)"
      }
    }
  },
  color: {
    primary: {
      color: "#f33636",
      contrast: `var(--color-primary-color).inverse("${THEME_OFF_WHITE}", "${THEME_OFF_BLACK}")`
    },
    secondary: {
      color: "var(--content-background-color).darken(0.05)",
      contrast: `var(--color-secondary-color).inverse("${THEME_OFF_WHITE}", "${THEME_OFF_BLACK}")`
    },
    success: {
      color: "#5cb85c",
      contrast: `var(--color-success-color).inverse("${THEME_OFF_WHITE}", "${THEME_OFF_BLACK}")`
    },
    info: {
      color: "#5bc0de",
      contrast: `var(--color-info-color).inverse("${THEME_OFF_WHITE}", "${THEME_OFF_BLACK}")`
    },
    notify: {
      color: "#f9f6e8",
      contrast: `var(--color-notify-color).inverse("${THEME_OFF_WHITE}", "${THEME_OFF_BLACK}")`
    },
    warning: {
      color: "#f0ad4e",
      contrast: `var(--color-warning-color).inverse("${THEME_OFF_WHITE}", "${THEME_OFF_BLACK}")`
    },
    danger: {
      color: "#d9534f",
      contrast: `var(--color-danger-color).inverse("${THEME_OFF_WHITE}", "${THEME_OFF_BLACK}")`
    },
    light: {
      color: "#F5F5F5",
      contrast: `var(--color-light-color).inverse("${THEME_OFF_WHITE}", "${THEME_OFF_BLACK}")`
    },
    dark: {
      color: "#55595c",
      contrast: `var(--color-dark-color).inverse("${THEME_OFF_WHITE}", "${THEME_OFF_BLACK}")`
    }
  },
  header: {
    font: {
      family: "var(--main-font-family)",
      size: "1rem",
      color: "var(--main-font-color)",
      weight: "400",
      transform: "unset"
    },
    background: {
      color: "var(--content-background-color)"
    },
    border: {
      width: "1px",
      color: "var(--header-background-color).darken(0.05)"
    }
  },
  subheader: {
    font: {
      family: "var(--content-font-family)",
      color: "var(--content-font-color)",
      size: "1rem",
      weight: "400",
      transform: "unset"
    },
    background: {
      color: "var(--content-background-color).darken(0.025)"
    },
    border: {
      color: "var(--subheader-background-color).darken(0.05)"
    }
  },
  footer: {
    font: {
      family: "var(--main-font-family)",
      size: "1rem",
      color: "var(--main-font-color)"
    },
    background: {
      color: "var(--content-background-color).darken(0.025)"
    },
    border: {
      width: "1px",
      color: "var(--footer-background-color).darken(0.1)"
    }
  },
  navigation: {
    size: "auto",
    position: "left",
    font: {
      family: "var(--main-font-family)",
      size: "1rem",
      color: "var(--main-font-color)",
      weight: "400",
      transform: "unset"
    },
    background: {
      color: "var(--content-background-color)"
    },
    border: {
      width: "1px",
      color: "var(--navigation-background-color).darken(0.1)"
    },
    separator: {
      width: "0px",
      color: "var(--main-border-color)"
    },
    active: {
      style: "left-border",
      font: {
        color: "var(--color-primary-contrast)"
      },
      background: {
        color: "var(--color-primary-color)"
      }
    },
    subnav: {
      font: {
        color: "var(--main-font-color)"
      },
      background: {
        color: "var(--navigation-background-color).darken(0.05)"
      }
    },
    client: {
      font: {
        family: "var(--main-font-family)",
        size: "1rem",
        color: "var(--footer-font-color)"
      },
      background: {
        color: "var(--footer-background-color)"
      },
      border: {
        width: "1px",
        color: "var(--footer-border-color)"
      }
    },
    logo: {
      background: {
        color: "#ffffff"
      },
      border: {
        width: "1px",
        color: "var(--navigation-logo-background-color).darken(0.1)"
      }
    }
  },
  topnavigation: {
    style: "hidden",
    font: {
      family: "var(--header-font-family)",
      size: "1rem",
      color: "var(--header-font-color)",
      weight: "400"
    },
    background: {
      color: "var(--header-background-color)"
    },
    border: {
      width: "1px",
      color: "var(--topnavigation-background-color).darken(0.1)"
    },
    subnav: {
      font: {
        color: "var(--header-font-color)"
      },
      background: {
        color: "var(--topnavigation-background-color).darken(0.05)"
      }
    },
    active: {
      font: {
        color: "var(--color-primary)"
      },
      background: {
        color: "transparent"
      },
      tab: {
        font: {
          color: "var(--topnavigation-font-color)"
        },
        background: {
          color: "var(--topnavigation-background-color).darken(0.05)"
        }
      },
      indicator: {
        style: "var(--tab-active-indicator-style)",
        color: "var(--tab-active-indicator-color)"
      }
    },
    logo: {
      style: "right"
    }
  },
  accordion: {
    font: {
      family: "var(--main-font-family)",
      color: "var(--main-font-color)",
      size: "0.9rem",
      weight: "500",
      transform: "uppercase"
    },
    background: {
      color: "var(--content-background-color)"
    },
    border: {
      width: "1px",
      color: "var(--accordion-background-color).darken(0.05)"
    },
    active: {
      font: {
        color: "var(--subheader-font-color)"
      },
      background: {
        color: "var(--subheader-background-color)"
      },
      border: {
        width: "1px",
        color: "var(--accordion-active-background-color).darken(0.1)"
      }
    }
  },
  table: {
    font: {
      family: "var(--main-font-family)",
      size: "1rem",
      color: "var(--main-font-color)",
      weight: "var(--main-font-weight)"
    },
    background: {
      color: "var(--content-background-color)"
    },
    border: {
      width: "1px",
      color: "var(--table-background-color).darken(0.05)"
    },
    header: {
      font: {
        family: "var(--subheader-font-family)",
        size: "1rem",
        color: "var(--subheader-font-color)",
        weight: "500",
        transform: "unset"
      },
      background: {
        color: "var(--subheader-background-color)"
      },
      border: {
        width: "1px",
        color: "var(--table-header-background-color).darken(0.1)"
      }
    },
    active: {
      font: {
        color: "var(--color-primary-contrast)"
      },
      background: {
        color: "var(--color-primary-color)"
      },
      border: {
        width: "1px",
        color: "var(--table-active-background-color).darken(0.1)"
      }
    }
  },
  tree: {
    background: {
      color: "var(--content-background-color)"
    },
    border: {
      width: "1px",
      color: "var(--tree-background-color).darken(0.1)"
    },
    active: {
      font: {
        color: "var(--color-primary-contrast)"
      },
      background: {
        color: "var(--color-primary-color)"
      }
    }
  },
  list: {
    font: {
      family: "var(--main-font-family)",
      size: "1rem",
      color: "var(--main-font-color)",
      weight: "var(--main-font-weight)"
    },
    background: {
      color: "var(--content-background-color)"
    },
    border: {
      width: "1px",
      color: "var(--list-background-color).darken(0.05)"
    },
    icon: {
      color: "var(--list-background-color).darken(0.1)"
    },
    active: {
      font: {
        color: "var(--main-font-color)"
      },
      icon: {
        color: "var(--color-primary-color)"
      },
      background: {
        color: "var(--list-background-color).darken(0.025)"
      }
    }
  },
  feed: {
    font: {
      family: "var(--main-font-family)",
      size: "1rem",
      color: "var(--main-font-color)",
      weight: "var(--main-font-weight)"
    },
    background: {
      color: "var(--content-background-color)"
    },
    border: {
      width: "1px",
      color: "var(--feed-background-color).darken(0.05)"
    },
    header: {
      font: {
        color: "var(--content-font-color)"
      },
      background: {
        color: "var(--feed-background-color)"
      },
      border: {
        color: "var(--feed-background-color).darken(0.05)"
      }
    },
    active: {
      font: {
        color: "var(--main-font-color)"
      },
      background: {
        color: "var(--feed-background-color).darken(0.025)"
      }
    }
  },
  tab: {
    font: {
      family: "var(--main-font-family)",
      size: "1rem",
      color: "var(--main-font-color)",
      weight: "var(--main-font-weight)",
      transform: "unset"
    },
    background: {
      color: "var(--header-background-color)"
    },
    border: {
      width: "1px",
      color: "var(--tab-background-color).darken(0.05)"
    },
    active: {
      font: {
        color: "var(--main-font-color)"
      },
      background: {
        color: "var(--tab-background-color).darken(0.05)"
      },
      indicator: {
        style: "none",
        color: "var(--color-primary-color)"
      }
    }
  },
  input: {
    font: {
      family: "var(--main-font-family)",
      size: "1rem",
      color: "var(--main-font-color)",
      weight: "var(--main-font-weight)"
    },
    background: {
      color: "var(--content-background-color).lighten(0.1)"
    },
    border: {
      width: "1px",
      color: "var(--content-background-color).darken(0.1)"
    }
  },
  button: {
    font: {
      family: "var(--main-font-family)",
      size: "1rem",
      color: "var(--main-font-color)",
      weight: "var(--main-font-weight)",
      transform: "unset"
    },
    border: {
      radius: "2px",
      shadow: "none"
    },
    hover: {
      border: {
        shadow: "none"
      }
    },
    active: {
      border: {
        shadow: "none"
      }
    }
  },
  snackbar: {
    font: {
      family: "var(--main-font-family)",
      size: "1rem",
      color: "var(--main-font-color)",
      weight: "var(--main-font-weight)"
    },
    background: {
      color: "var(--content-background-color).lighten(0.2)"
    },
    border: {
      width: "1px",
      color: "var(--snackbar-background-color).darken(0.1)"
    }
  },
  map: {
    control: {
      font: {
        family: "var(--main-font-family)",
        size: "1rem",
        color: "#676a6c",
        weight: "var(--main-font-weight)"
      },
      background: {
        color: "#fff"
      },
      secondary: {
        background: {
          color: "var(--map-control-background-color).darken(0.05)"
        }
      },
      border: {
        width: "1px",
        color: "var(--map-control-background-color).darken(0.1)"
      }
    }
  },
  graph: {
    palette: "default",
    label: {
      font: {
        family: "var(--main-font-family)",
        size: "0.8rem",
        color: "var(--main-font-color).lighten(0.5)",
        weight: "var(--main-font-weight)"
      }
    }
  },
  modal: {
    font: {
      family: "var(--content-font-family)",
      size: "1rem",
      color: "var(--content-font-color)"
    },
    background: {
      color: "var(--content-background-color)"
    },
    border: {
      width: "1px",
      color: "var(--content-border-color)"
    },
    header: {
      font: {
        family: "var(--header-font-family)",
        size: "1rem",
        color: "var(--header-font-color)",
        weight: "var(--header-font-weight)",
        transform: "var(--header-font-transform)"
      },
      background: {
        color: "var(--header-background-color)"
      },
      border: {
        width: "1px",
        color: "var(--header-border-color)"
      }
    },
    footer: {
      font: {
        family: "var(--footer-font-family)",
        size: "1rem",
        color: "var(--footer-font-color)"
      },
      background: {
        color: "var(--footer-background-color)"
      },
      border: {
        width: "1px",
        color: "var(--footer-border-color)"
      }
    }
  }
};

// src/app/shared/models/theme-color.ts
var import_color2 = __toESM(require_color());
var ThemeColor = class _ThemeColor {
  color;
  constructor(value) {
    this.color = typeof value === "string" ? (0, import_color2.default)(value) : value.color;
  }
  hex() {
    if (this.color.alpha() === 1) {
      return this.color.hex().toLowerCase();
    } else {
      return this.color.rgb().string();
    }
  }
  negate() {
    this.color = this.color.negate();
    return this;
  }
  lighten(ratio) {
    this.color = this.color.lighten(ratio);
    return this;
  }
  darken(ratio) {
    this.color = this.color.darken(ratio);
    return this;
  }
  saturate(ratio) {
    this.color = this.color.saturate(ratio);
    return this;
  }
  desaturate(ratio) {
    this.color = this.color.desaturate(ratio);
    return this;
  }
  whiten(ratio) {
    this.color = this.color.whiten(ratio);
    return this;
  }
  blacken(ratio) {
    this.color = this.color.blacken(ratio);
    return this;
  }
  grayscale() {
    this.color = this.color.grayscale();
    return this;
  }
  fade(ratio) {
    this.color = this.color.fade(ratio);
    return this;
  }
  opaquer(ratio) {
    this.color = this.color.opaquer(ratio);
    return this;
  }
  rotate(degrees) {
    this.color = this.color.rotate(degrees);
    return this;
  }
  inverse(light, dark) {
    return this.color.isDark() ? new _ThemeColor(light) : new _ThemeColor(dark);
  }
};

// src/app/shared/models/theme-engine.ts
var colorPrefix = ["#", "rgb(", "rgba(", "hsl(", "hwb("];
var FALLBACK_COLOR = "#000000";
function getvar(input) {
  if (input instanceof ThemeColor) {
    return input;
  }
  if (colorPrefix.some((prefix) => input.startsWith(prefix))) {
    return new ThemeColor(input);
  }
  return input;
}
var ThemeEngine = class _ThemeEngine {
  variables = {};
  formulaCache = {};
  ALLOWED_OPERATORS = ["+", "-", "*", "/", "(", ")", ",", "."];
  ALLOWED_FUNCTIONS = [
    "var",
    "rgb",
    "rgba",
    "hsl",
    "hwb",
    "family",
    "getvar",
    "inverse",
    "lighten",
    "weight",
    "function",
    "return",
    "color",
    "transform",
    "size",
    "darken",
    "width",
    "shadow",
    "pack",
    "style",
    "fade",
    "contrast",
    "position",
    "radius",
    "palette"
  ];
  sanitizeExpression(expression) {
    let sanitized = expression.replace(/\s+/g, "");
    sanitized = sanitized.split("").filter((char) => this.ALLOWED_OPERATORS.includes(char) || /[0-9a-zA-Z]/.test(char)).join("");
    return sanitized;
  }
  settingsToVariables(settings) {
    return this.resolveVariables(this.themeSettingsToVariables(this.themeSettingsMergedWithDefault(settings)));
  }
  resolveFormula(formula) {
    if (isEmpty(this.variables)) {
      return FALLBACK_COLOR;
    }
    if (!hasProperty(this.formulaCache, formula)) {
      this.resolveVariables(__spreadProps(__spreadValues({}, this.variables), {
        "--single-formula": formula
      }));
    }
    const result = hasProperty(this.formulaCache, formula) ? this.formulaCache[formula] : FALLBACK_COLOR;
    return result;
  }
  resolveVariables(variables) {
    this.variables = variables;
    const unpack = (valStr, depth = 0) => {
      if (isNullOrUndefined(valStr)) {
        return `getvar(${JSON.stringify(FALLBACK_COLOR)})`;
      }
      valStr = String(valStr);
      if (depth >= 10) {
        console.warn(`\u26A0\uFE0F Max recursion depth reached for: ${valStr}`);
        return `getvar(${JSON.stringify(FALLBACK_COLOR)})`;
      }
      const varRegex = /var\s*\((--[^)]+)\)/g;
      if (varRegex.test(valStr)) {
        varRegex.lastIndex = 0;
        const replacedVarString = valStr.replace(varRegex, (match, varName) => {
          if (!hasProperty(this.variables, varName)) {
            return `getvar(${JSON.stringify(FALLBACK_COLOR)})`;
          }
          const varActualValue = this.variables[varName];
          if (isNullOrUndefined(varActualValue)) {
            console.warn(`\u274C Variable ${varName} is null/undefined`);
            return `getvar(${JSON.stringify(FALLBACK_COLOR)})`;
          }
          return unpack(String(varActualValue), depth + 1);
        });
        return replacedVarString;
      }
      if (colorPrefix.some((prefix) => valStr.startsWith(prefix))) {
        return `getvar(${JSON.stringify(valStr)})`;
      } else if (!isNaN(parseFloat(valStr)) && isFinite(valStr) && valStr.trim() !== "") {
        return valStr;
      } else {
        return JSON.stringify(valStr);
      }
    };
    let evaled;
    const code = `{ ${Object.entries(variables).filter(([key]) => isString(key)).map(([key, originalValue]) => {
      const escapedKey = JSON.stringify(key);
      const expressionToEvaluate = unpack(originalValue);
      return `${escapedKey}: (function() { 
                   try { 
                     return ${expressionToEvaluate}; // Evaluate the fully formed expression
                   } catch (e) { 
                     console.error('Error evaluating variable ' + ${escapedKey} + ' (expression: "${expressionToEvaluate}"):', e, '. Falling back to default.'); 
                     return getvar(${JSON.stringify(FALLBACK_COLOR)}); 
                   } 
                 })()`;
    }).join(",")} }`;
    try {
      evaled = this.safeEval(code, { getvar });
    } catch (err) {
      console.error("Critical evaluation failure during safeEval:", err, "Code:", code);
      evaled = Object.keys(variables).reduce((acc, key) => {
        acc[key] = FALLBACK_COLOR;
        return acc;
      }, {});
    }
    return Object.entries(evaled).reduce((obj, [key, val]) => {
      if (isDefined(val)) {
        const str = this.isThemeColor(val) ? val.hex() : String(val);
        const originalFormula = variables[key];
        if (isString(originalFormula)) {
          this.formulaCache[originalFormula] = str;
        }
        if (key === "--single-formula" && isString(variables["--single-formula"])) {
          this.formulaCache[variables["--single-formula"]] = str;
        }
        obj[key] = str;
      } else {
        obj[key] = FALLBACK_COLOR;
        const originalFormula = variables[key];
        if (isString(originalFormula)) {
          this.formulaCache[originalFormula] = FALLBACK_COLOR;
        }
      }
      return obj;
    }, {});
  }
  isThemeColor(value) {
    return isObject(value) && hasProperty(value, "hex") && typeof value["hex"] === "function";
  }
  themeSettingsToVariables(settings, separator = "-") {
    const flat = (obj) => Object.entries(isDefined(obj) ? obj : {}).reduce((acc, [key, value]) => {
      if (!isObject(value)) {
        return __spreadProps(__spreadValues({}, acc), {
          [key]: String(value)
        });
      }
      const flattenedChild = flat(value);
      return __spreadValues(__spreadValues({}, acc), Object.entries(flattenedChild).reduce((childAcc, [childKey, childValue]) => __spreadProps(__spreadValues({}, childAcc), {
        [`${key}${separator}${childKey}`]: childValue
      }), {}));
    }, {});
    const flattened = flat(settings);
    return Object.entries(flattened).reduce((obj, [key, value]) => {
      if (isDefined(value)) {
        obj[`${separator}${separator}${key}`] = value;
      }
      return obj;
    }, {});
  }
  themeSettingsMergedWithDefault(settings) {
    return (0, import_lodash2.merge)({}, THEME_DEFAULTS, settings);
  }
  safeEval(expression, context = {}) {
    const contextKeys = Object.keys(context);
    const contextValues = Object.values(context);
    const func = new Function(...contextKeys, `return ${expression};`);
    return func(...contextValues);
  }
  static \u0275fac = function ThemeEngine_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeEngine)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeEngine, factory: _ThemeEngine.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeEngine, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/services/theme-data.service.ts
var ThemeDataService = class _ThemeDataService {
  themeSubject = new BehaviorSubject(null);
  themesService = inject(ThemesService);
  themeEngine = inject(ThemeEngine);
  theme$ = this.themeSubject.asObservable();
  fetchTheme(themeId) {
    return this.themesService.getTheme(themeId).pipe(tap((theme) => {
      this.themeSubject.next(theme);
    }));
  }
  setTheme(theme) {
    const convertedTheme = this.convertToThemeResponse(theme);
    this.themeSubject.next(convertedTheme);
    return convertedTheme;
  }
  /** This function is called by the APP_INITIALIZER hook before the application is initialized */
  getDomainTheme(domain) {
    return this.themesService.getThemeForDomain(domain).pipe(map((result) => result.theme));
  }
  convertToThemeResponse(input) {
    const theme = (0, import_lodash3.cloneDeep)(input);
    if (isLegacyTheme(theme)) {
      const themeDictionary = getThemeDictionary();
      if (isNullOrUndefined(theme.theme) || !(theme.theme in themeDictionary)) {
        throw new Error("Invalid theme key");
      }
      const baseTheme = themeDictionary[theme.theme];
      const mergedTheme = (0, import_lodash3.merge)((0, import_lodash3.cloneDeep)(baseTheme), theme);
      theme.settings = convertLegacyTheme(mergedTheme);
    }
    if (theme.settings) {
      theme.variables = __spreadValues(__spreadValues({}, theme.variables), Object.fromEntries(Object.entries(this.themeEngine.settingsToVariables(theme.settings)).map(([key, value]) => [
        key,
        Array.isArray(value) ? value.join(",") : value
      ])));
    }
    return theme;
  }
  clearTheme() {
    this.themeSubject.next(null);
  }
  static \u0275fac = function ThemeDataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeDataService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeDataService, factory: _ThemeDataService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeDataService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/services/grid-config-registry.service.ts
var GridConfigRegistryService = class _GridConfigRegistryService {
  registry = /* @__PURE__ */ new Set();
  /**
   * Registers a configuration instance.
   * @param config The grid or tree table configuration to register.
   */
  register(config) {
    this.registry.add(config);
  }
  /**
   * Clears filters from all registered configurations.
   * Should be called during the logout process.
   */
  clearAll() {
    this.registry.forEach((config) => {
      if (config.clearFilters) {
        config.clearFilters();
      }
    });
  }
  static \u0275fac = function GridConfigRegistryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GridConfigRegistryService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GridConfigRegistryService, factory: _GridConfigRegistryService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridConfigRegistryService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/core/services/session-cleanup.service.ts
var SessionCleanupService = class _SessionCleanupService {
  localStorage = inject(LocalStorageService);
  authTokenManager = inject(AuthTokenManagerService);
  adminState = inject(AdminStateService);
  userSessionService = inject(UserSessionService);
  themeDataService = inject(ThemeDataService);
  clientDataService = inject(ClientDataService);
  gridConfigRegistry = inject(GridConfigRegistryService);
  injector = inject(Injector);
  get broadcastMessageService() {
    return this.injector.get(BroadcastMessageService);
  }
  /**
   * Clears all authentication and user data.
   * Use this for logout operations.
   */
  clearAllAuthData() {
    this.authTokenManager.clearTokens();
    this.userSessionService.clearAllSessions();
    this.adminState.clearAllState();
    this.themeDataService.clearTheme();
    this.clientDataService.reset();
    this.gridConfigRegistry.clearAll();
    this.broadcastMessageService.reset();
  }
  /**
   * Detects and handles user mismatch scenarios.
   * Returns true if mismatch was detected and cleaned up.
   */
  detectAndHandleUserMismatch(newUserId) {
    const hasMismatch = this.localStorage.detectUserMismatch(newUserId);
    if (hasMismatch) {
      console.warn("User mismatch detected, clearing previous user data");
      this.localStorage.clearUserScopedData();
      this.userSessionService.clearAllSessions();
      return true;
    }
    return false;
  }
  /**
   * Records the last authenticated user.
   */
  setLastAuthenticatedUser(userId) {
    this.localStorage.setLastAuthenticatedUserId(userId);
  }
  static \u0275fac = function SessionCleanupService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SessionCleanupService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SessionCleanupService, factory: _SessionCleanupService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SessionCleanupService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/core/services/auth-data.service.ts
var AuthDataService = class _AuthDataService {
  userProfileSignal = signal(null, ...ngDevMode ? [{ debugName: "userProfileSignal" }] : []);
  userPermissionsSignal = signal([], ...ngDevMode ? [{ debugName: "userPermissionsSignal" }] : []);
  router = inject(Router);
  authService = inject(AuthService);
  accountsService = inject(AccountsService);
  sessionCleanup = inject(SessionCleanupService);
  localStorage = inject(LocalStorageService);
  userSessionService = inject(UserSessionService);
  injector = inject(Injector);
  flags = {
    otpTestingEnabled: () => this.getUserProfile()?.owner.type === "system" || (this.getUserProfile()?.emailAddress?.endsWith("keytelematics.com") ?? false),
    labelsEnabled: () => true,
    tripLimitsEnabled: () => true,
    assetPerformanceEnabled: () => this.getUserProfile()?.owner?.type === "system" || (this.getUserProfile()?.emailAddress?.endsWith("keytelematics.com") ?? false),
    deviceHealthEnabled: () => this.getUserProfile()?.owner?.type === "system" || (this.getUserProfile()?.emailAddress?.endsWith("keytelematics.com") ?? false)
  };
  /**
   * Computed signal for accessing the user profile
   */
  profile = computed(() => this.userProfileSignal(), ...ngDevMode ? [{ debugName: "profile" }] : []);
  /**
   * Returns the writable signal for the user profile
   */
  getUserProfileSignal() {
    return this.userProfileSignal;
  }
  /**
   * Returns the current user profile value
   */
  getUserProfile() {
    return this.userProfileSignal();
  }
  /**
   * Updates the user profile, merging with existing data if present
   * Also extracts and sets user permissions.
   * @param userProfile - Partial user profile data to update
   */
  async setUserProfile(userProfile) {
    const currentProfile = this.userProfileSignal();
    let updatedProfile;
    if (isNullOrUndefined(currentProfile)) {
      updatedProfile = userProfile;
    } else {
      updatedProfile = __spreadValues(__spreadValues({}, currentProfile), userProfile);
    }
    this.userProfileSignal.set(updatedProfile);
    if (updatedProfile.id) {
      this.localStorage.setCurrentUserId(updatedProfile.id);
    }
    await this.extractAndSetAllPermissions(updatedProfile.roles ?? []);
  }
  /**
   * Extracts permissions from all user roles and updates the permissions signal.
   * @param roles - Array of user roles
   */
  async extractAndSetAllPermissions(roles) {
    if (!roles || roles.length === 0) {
      this.userPermissionsSignal.set([]);
      return;
    }
    const allPermissions = [];
    for (const role of roles) {
      const permissions = await this.extractPermissionsFromRole(role.id);
      allPermissions.push(...permissions);
    }
    this.userPermissionsSignal.set([...new Set(allPermissions)]);
  }
  /**
   * Extracts permissions from a single role
   * @param roleId - The role ID
   * @returns Promise<string[]> - Array of permissions for this role
   */
  async extractPermissionsFromRole(roleId) {
    if (isNullOrUndefined(roleId)) {
      console.warn("Cannot extract permissions: Role ID is missing.");
      return [];
    }
    if (roleId === DEFAULT_SYSTEM_ID) {
      return ["system:all"];
    }
    try {
      const userRole = await firstValueFrom(this.accountsService.getUserRole(roleId));
      if (isNullOrUndefined(userRole) || !userRole.legacyRights) {
        if (isNullOrUndefined(userRole)) {
          console.warn("UserRoleResponse is null or undefined.");
        } else {
          console.warn("legacyRights are missing in UserRoleResponse.");
        }
        return [];
      }
      const permissions = [];
      const legacyRights = userRole.legacyRights;
      for (const feature in legacyRights) {
        if (Object.hasOwn(legacyRights, feature)) {
          const actions = legacyRights[feature];
          if (Array.isArray(actions)) {
            for (const action of actions) {
              permissions.push(`${feature}:${action}`);
            }
          }
        }
      }
      return permissions;
    } catch (error) {
      console.error("Error fetching or processing user role for permissions:", error);
      return [];
    }
  }
  /**
   * Checks if the current user has a specific permission.
   * @param permission - The permission string to check for.
   */
  hasPermission(permission) {
    return this.userPermissionsSignal().includes(permission) || this.userPermissionsSignal().includes("system:all");
  }
  /**
   * Checks if the current user has ALL of the specified permissions.
   * @param permissions - An array of permission strings to check for.
   */
  hasAllPermissions(permissions) {
    if (isEmpty(permissions) || permissions.length === 0) {
      return true;
    }
    const userPerms = this.userPermissionsSignal();
    return permissions.every((p) => userPerms.includes(p)) || userPerms.includes("system:all");
  }
  /**
   * Checks if the current user has ANY of the specified permissions.
   * @param permissions - An array of permission strings to check for.
   */
  hasAnyPermission(permissions) {
    if (isEmpty(permissions) || permissions.length === 0) {
      return true;
    }
    const userPerms = this.userPermissionsSignal();
    return permissions.some((p) => userPerms.includes(p)) || userPerms.includes("system:all");
  }
  /**
   * Clears the user profile data and permissions (for account switching)
   * Preserves currentUserId to maintain namespace
   */
  clearUserProfile() {
    this.userProfileSignal.set(null);
    this.userPermissionsSignal.set([]);
  }
  /**
   * Clears the user profile data and permissions
   */
  clearAllUserData() {
    this.clearUserProfile();
    this.localStorage.setCurrentUserId(null);
  }
  logout() {
    this.authService.signOut({}).subscribe({
      next: () => {
        this.clearAllUserData();
        this.userSessionService.clearAllSessions();
        this.clearPreviewClientIfAvailable();
        this.sessionCleanup.clearAllAuthData();
        this.router.navigate(["/auth/login"]).catch(() => {
        });
      },
      error: () => {
        this.forceLogout();
      }
    });
  }
  forceLogout() {
    this.clearAllUserData();
    this.userSessionService.clearAllSessions();
    this.clearPreviewClientIfAvailable();
    this.sessionCleanup.clearAllAuthData();
    this.router.navigate(["/auth/login"]).catch(() => {
    });
  }
  /**
   * Clears preview client if ClientDataService is available.
   * Lazy-loaded to avoid circular dependency issues.
   */
  clearPreviewClientIfAvailable() {
    try {
      import("./chunk-VJQET3FC.js").then((module) => {
        const clientDataService = this.injector.get(module.ClientDataService);
        clientDataService?.clearPreviewClient();
      }).catch(() => {
      });
    } catch {
    }
  }
  /**
   * Checks if the current user is a Super Admin.
   */
  isSuperAdmin() {
    const userProfile = this.userProfileSignal();
    if (!userProfile?.roles)
      return false;
    return userProfile.roles.some((role) => role.id === DEFAULT_SYSTEM_ID || role.id === SUPER_ADMIN_ROLE_ID || (role.name?.toLowerCase().includes("super admin") ?? false));
  }
  /**
   * Gets the user's owner type
   * @returns The owner type ('system', 'distributor', 'vendor', 'client') or null if not available
   */
  getUserOwnerType() {
    const userProfile = this.userProfileSignal();
    if (isNullOrUndefined(userProfile?.owner?.type) && userProfile?.owner?.id === DEFAULT_SYSTEM_ID) {
      return "system";
    }
    return userProfile?.owner?.type ?? null;
  }
  /**
   * Checks if the current user is a system-level user
   */
  isSystemUser() {
    return this.getUserOwnerType() === "system";
  }
  /**
   * Checks if the current user is a distributor-level user
   */
  isDistributorUser() {
    return this.getUserOwnerType() === "distributor";
  }
  /**
   * Checks if the current user is a vendor-level user
   */
  isVendorUser() {
    return this.getUserOwnerType() === "vendor";
  }
  /**
   * Checks if the current user is a client-level user
   */
  isClientUser() {
    return this.getUserOwnerType() === "client";
  }
  /**
   * Gets the user's owner ID
   * @returns The owner ID or null if not available
   */
  getUserOwnerId() {
    const userProfile = this.userProfileSignal();
    return userProfile?.owner?.id ?? null;
  }
  /**
   * Determines if the user should have access to the tree navigation
   * Client-level users should not see the tree
   */
  shouldShowTreeNavigation() {
    const ownerType = this.getUserOwnerType();
    return ownerType !== "client";
  }
  static \u0275fac = function AuthDataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthDataService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthDataService, factory: _AuthDataService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthDataService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/core/services/message.service.ts
var BroadcastMessageService = class _BroadcastMessageService {
  authDataService = inject(AuthDataService);
  router = inject(Router);
  apiUrlService = inject(ApiUrlService);
  broadcastEventMessageService = inject(BroadcastEventMessageService);
  localStorageService = inject(LocalStorageService);
  channel;
  messageSubject = new BehaviorSubject([]);
  connectionStatusSubject = new BehaviorSubject({
    isConnected: false
  });
  isUpdatingHash = false;
  hasSentInitialRoute = false;
  MAX_INITIAL_ROUTE_RETRIES = 3;
  initialRouteRetryCount = 0;
  lastTokenSendTime = 0;
  MIN_TOKEN_SEND_INTERVAL = 2e3;
  // 2 seconds minimum between sends
  pendingTokenSend = null;
  messages$ = this.messageSubject.asObservable();
  connectionStatus$ = this.connectionStatusSubject.asObservable();
  constructor() {
    this.initializeChannel();
    this.subscribeToBroadcastEvents();
  }
  subscribeToBroadcastEvents() {
    this.broadcastEventMessageService.on("entity-updated").subscribe((payload) => {
      this.sendAction(ActionType.entity_updated, payload, "Entity updated event");
    });
  }
  sendInitialRoute() {
    try {
      const currentPath = window.location.hash.substring(1);
      if (currentPath !== "") {
        const [path, queryString] = currentPath.split("?");
        const cleanPath = path.replaceAll(/(^\/+|\/+$)/g, "");
        const flutterRoute = this.getFlutterRoute(cleanPath);
        if (flutterRoute === "/auth/login") {
          return;
        }
        const queryParams = queryString !== void 0 && queryString !== "" ? Object.fromEntries(new URLSearchParams(queryString)) : void 0;
        this.sendAction(ActionType.navigate, {
          route: flutterRoute || "/position",
          // Fallback to position if path is empty
          queryParams
        }, "Sending initial route to Flutter");
      } else {
        this.sendAction(ActionType.navigate, {
          route: "/position",
          queryParams: void 0
        }, "Sending default route to Flutter");
      }
    } catch (error) {
      this.handleError("Failed to send initial route", error);
    }
  }
  initializeChannel() {
    try {
      this.channel = new BroadcastChannel("flutter-angular-channel");
      this.connectionStatusSubject.next({ isConnected: true });
      this.channel.onmessage = async (event) => {
        const message = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        await this.handleReceivedMessage(message);
      };
      this.channel.onmessageerror = (error) => {
        this.handleError("Message error occurred", error);
      };
      window.addEventListener("unload", () => {
        this.channel.close();
      });
    } catch (error) {
      this.handleError("Failed to initialize channel", error);
    }
  }
  async handleReceivedMessage(message) {
    switch (message.type) {
      case "message": {
        const currentMessages = this.messageSubject.value;
        this.messageSubject.next([...currentMessages, message]);
        break;
      }
      case "action": {
        const currentMessages = this.messageSubject.value;
        this.messageSubject.next([...currentMessages, message]);
        if (isDefined(message.action)) {
          await this.performAction(message.action, message.payload);
        }
        break;
      }
      default:
        break;
    }
  }
  async performAction(action, payload) {
    switch (action) {
      case ActionType.ready: {
        if (!this.hasSentInitialRoute) {
          try {
            this.sendInitialRoute();
            this.hasSentInitialRoute = true;
            this.initialRouteRetryCount = 0;
          } catch (error) {
            this.handleError("Failed to send initial route", error);
            if (this.initialRouteRetryCount < this.MAX_INITIAL_ROUTE_RETRIES) {
              this.initialRouteRetryCount++;
              void new Promise((resolve) => {
                setTimeout(() => {
                  this.hasSentInitialRoute = false;
                  resolve();
                }, 1e3 * this.initialRouteRetryCount);
              }).then(() => this.performAction(ActionType.ready, void 0));
            }
          }
        }
        break;
      }
      case ActionType.update_hash: {
        if (this.isUpdatingHash) {
          return;
        }
        const hashPayload = payload;
        if (hashPayload?.path !== void 0 && hashPayload.path !== "" || hashPayload?.queryParams !== void 0 && Object.keys(hashPayload.queryParams).length > 0) {
          this.isUpdatingHash = true;
          try {
            if (hashPayload.path !== void 0 && hashPayload.path !== "") {
              const route = hashPayload.path.startsWith("/") ? hashPayload.path.substring(1) : hashPayload.path;
              await this.router.navigate([route], {
                queryParams: hashPayload.queryParams,
                replaceUrl: true
              });
            } else {
              const baseUrl = window.location.href.split("#")[0];
              const currentPath = window.location.hash.substring(1) || "";
              const pathWithoutQuery = currentPath.split("?")[0];
              let newHash = `#${pathWithoutQuery}`;
              if (hashPayload.queryParams !== void 0 && Object.keys(hashPayload.queryParams).length > 0) {
                const currentQueryString = currentPath.split("?")[1] || "";
                const params = new URLSearchParams(currentQueryString);
                for (const [key, value] of Object.entries(hashPayload.queryParams)) {
                  params.set(key, value);
                }
                newHash += `?${params.toString()}`;
              }
              window.history.replaceState(null, "", baseUrl + newHash);
            }
          } catch (error) {
            this.handleError("Failed to update hash", error);
          } finally {
            this.isUpdatingHash = false;
          }
        }
        break;
      }
      case ActionType.navigate: {
        const navPayload = payload;
        if (navPayload?.route !== void 0 && navPayload.route !== "") {
          const route = navPayload.route.startsWith("/") ? navPayload.route.substring(1) : navPayload.route;
          if (navPayload.updateUrlOnly === true) {
            await this.router.navigate([route], {
              queryParams: navPayload.queryParams,
              replaceUrl: true,
              skipLocationChange: false
            });
          } else if (navPayload?.queryParams !== void 0) {
            await this.router.navigate([route], {
              queryParams: navPayload.queryParams
            });
          } else {
            await this.router.navigate([route]);
          }
        }
        break;
      }
      case ActionType.get_auth_tokens:
        this.sendAuthTokensToFlutter(true);
        break;
      case ActionType.update_auth_tokens: {
        const tokenPayload = payload;
        if (tokenPayload?.accessToken !== void 0 && tokenPayload.accessToken !== "") {
          this.localStorageService.setItem(LOCAL_STORAGE_KEY_ACCESS_TOKEN, tokenPayload.accessToken, void 0, true);
          this.localStorageService.setItem(LOCAL_STORAGE_KEY_REFRESH_TOKEN, tokenPayload.refreshToken, void 0, true);
          this.localStorageService.setItem(LOCAL_STORAGE_KEY_TOKEN_EXPIRY, tokenPayload.tokenExpiry, void 0, true);
          this.localStorageService.setItem(LOCAL_STORAGE_KEY_USER_SESSION, tokenPayload.userSession, void 0, true);
        }
        break;
      }
      case ActionType.logout:
        this.authDataService.logout();
        break;
      case ActionType.profile_changed: {
        const profilePayload = payload;
        if (isDefined(profilePayload?.clientId)) {
          this.sendProfileChangedEventToFlutter(profilePayload.clientId);
        }
        break;
      }
      // Handle R2 token generation success
      case ActionType.r2_token_generated: {
        const tokenPayload = payload;
        if (tokenPayload?.r2Token !== void 0 && tokenPayload.r2Token !== "") {
        }
        break;
      }
      // Handle R2 token generation failure
      case ActionType.r2_token_failed: {
        const errorPayload = payload;
        console.error("R2 token generation failed:", errorPayload.error !== void 0 && errorPayload.error !== "" ? errorPayload.error : "unknown error");
        setTimeout(() => {
          this.sendAuthTokensToFlutter();
        }, 5e3);
        break;
      }
      default:
        console.warn("Unknown action:", action);
        break;
    }
  }
  sendAuthTokensToFlutter(force = false) {
    const now = Date.now();
    const timeSinceLastSend = now - this.lastTokenSendTime;
    if (!force && timeSinceLastSend < this.MIN_TOKEN_SEND_INTERVAL) {
      if (this.pendingTokenSend !== null) {
        return;
      }
      const delay = this.MIN_TOKEN_SEND_INTERVAL - timeSinceLastSend;
      this.pendingTokenSend = setTimeout(() => {
        this.pendingTokenSend = null;
        this.sendAuthTokensToFlutter(true);
      }, delay);
      return;
    }
    if (this.pendingTokenSend !== null) {
      clearTimeout(this.pendingTokenSend);
      this.pendingTokenSend = null;
    }
    const accessToken = this.localStorageService.getItem(LOCAL_STORAGE_KEY_ACCESS_TOKEN, true) ?? "";
    const refreshToken = this.localStorageService.getItem(LOCAL_STORAGE_KEY_REFRESH_TOKEN, true) ?? "";
    const tokenExpiry = this.localStorageService.getItem(LOCAL_STORAGE_KEY_TOKEN_EXPIRY, true) ?? "";
    const userSession = this.localStorageService.getItem(LOCAL_STORAGE_KEY_USER_SESSION, true) ?? "";
    const currentApiUrl = this.apiUrlService.getCurrentApiUrl();
    if (accessToken && refreshToken && userSession) {
      try {
        this.lastTokenSendTime = now;
        this.sendAction(ActionType.update_auth_tokens, {
          accessToken,
          refreshToken,
          tokenExpiry,
          userSession,
          forceRegenerateR2Token: true,
          timestamp: now,
          apiUrl: currentApiUrl
        }, "Sending auth tokens to flutter with R2 token regeneration flag");
      } catch (error) {
        console.error("Error sending auth tokens to Flutter:", error);
      }
    } else {
      console.warn("Cannot send auth tokens to Flutter - missing required tokens");
    }
  }
  sendProfileChangedEventToFlutter(id) {
    this.sendAction(ActionType.profile_changed, {
      id
    }, "Profile changed event");
  }
  sendMessage(content) {
    if (isNullOrUndefined(this.channel)) {
      this.handleError("Channel not initialized", null);
      return;
    }
    try {
      const message = {
        id: crypto.randomUUID(),
        content,
        timestamp: Date.now(),
        sender: "angular",
        type: "message"
      };
      this.channel.postMessage(JSON.stringify(message));
      const currentMessages = this.messageSubject.value;
      this.messageSubject.next([...currentMessages, message]);
    } catch (error) {
      this.handleError("Failed to send message", error);
    }
  }
  sendAction(action, payload, content) {
    if (isNullOrUndefined(this.channel)) {
      this.handleError("Channel not initialized", null);
      return;
    }
    try {
      const message = {
        id: crypto.randomUUID(),
        timestamp: Date.now(),
        sender: "angular",
        type: "action",
        content: isString(content) ? content : "",
        action,
        payload
      };
      this.channel.postMessage(JSON.stringify(message));
    } catch (error) {
      this.handleError("Failed to send action", error);
    }
  }
  handleError(message, error) {
    console.error(message, error);
    const errorMessage = isObject(error) && hasProperty(error, "message") ? error["message"] : "Unknown error";
    this.connectionStatusSubject.next({
      isConnected: false,
      lastError: `${message}: ${errorMessage}`
    });
  }
  // Add route mapping based on your existing routes
  routeMapping = {
    position: "/position",
    alerts: "/alerts",
    media: "/media",
    history: "/history",
    user: "/user",
    admin: "/admin"
  };
  // Add method to convert Angular routes to Flutter routes
  getFlutterRoute(angularRoute) {
    const normalizedRoute = angularRoute.replace(/^[/#]+/, "");
    for (const [key, value] of Object.entries(this.routeMapping)) {
      if (normalizedRoute.startsWith(key)) {
        return value;
      }
    }
    return "/" + normalizedRoute;
  }
  /**
   * Resets the service state.
   * Should be called on logout to prevent stale state issues.
   */
  reset() {
    this.messageSubject.next([]);
    this.hasSentInitialRoute = false;
    this.initialRouteRetryCount = 0;
    this.lastTokenSendTime = 0;
    if (this.pendingTokenSend !== null) {
      clearTimeout(this.pendingTokenSend);
      this.pendingTokenSend = null;
    }
  }
  static \u0275fac = function BroadcastMessageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BroadcastMessageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BroadcastMessageService, factory: _BroadcastMessageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BroadcastMessageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  ActionType,
  UserPermissionLevel,
  AdminStateService,
  getThemeDictionary,
  THEME_OFF_WHITE,
  THEME_OFF_BLACK,
  ThemeColor,
  ThemeEngine,
  ThemeDataService,
  GridConfigRegistryService,
  BroadcastEventMessageService,
  BroadcastMessageService,
  SessionCleanupService,
  AuthDataService
};
//# sourceMappingURL=chunk-G5YW7B2S.js.map
