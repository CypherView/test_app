import {
  DynamicTabPanelComponent
} from "./chunk-RAXUOXTP.js";
import {
  EntityDetailsService
} from "./chunk-UP5L6WRJ.js";
import "./chunk-U5T4J3BK.js";
import "./chunk-JJGIUWJ2.js";
import {
  Card,
  CardModule,
  ChartModule,
  UIChart,
  adapters
} from "./chunk-VDFX22QF.js";
import "./chunk-PPRVSR7K.js";
import {
  ProgressBarModule,
  TimeAgoPipe,
  compareAsc,
  differenceInMilliseconds,
  differenceInMonths,
  differenceInSeconds,
  endOfDay,
  endOfMonth,
  getRoundingMethod
} from "./chunk-7HIRWNPC.js";
import "./chunk-S3HO5ZVD.js";
import "./chunk-DSMHE36S.js";
import "./chunk-GM73WNCJ.js";
import {
  SortIcon,
  SortableColumn,
  Table,
  TableModule,
  constructFrom,
  differenceInCalendarDays,
  enUS,
  format,
  getDefaultOptions,
  getDefaultOptions2,
  getISOWeek,
  getTimezoneOffsetInMilliseconds,
  getWeek,
  getWeekYear,
  isProtectedDayOfYearToken,
  isProtectedWeekYearToken,
  isValid,
  longFormatters,
  millisecondsInHour,
  millisecondsInMinute,
  millisecondsInSecond,
  normalizeDates,
  startOfDay,
  startOfISOWeek,
  startOfWeek,
  startOfYear,
  takeUntilDestroyed,
  toDate,
  warnOrThrowProtectedError
} from "./chunk-C2NNNFHP.js";
import {
  BaseComponent,
  BaseStyle,
  ButtonModule,
  FormsModule,
  NgControlStatus,
  NgModel,
  PrimeTemplate,
  Select,
  SelectModule,
  SharedModule
} from "./chunk-SIZTMCIF.js";
import "./chunk-G6AKSBPY.js";
import {
  BroadcastEventMessageService
} from "./chunk-7UUZS7IM.js";
import "./chunk-72EIB3HH.js";
import {
  isDefined
} from "./chunk-UW6Q2JGR.js";
import {
  ActivatedRoute,
  CommonModule,
  DatePipe,
  DecimalPipe,
  NavigationEnd,
  NgClass,
  NgIf,
  NgTemplateOutlet,
  Router,
  RouterModule,
  RouterOutlet,
  TitleCasePipe,
  UpperCasePipe
} from "./chunk-L35GT5ED.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DestroyRef,
  HostBinding,
  Injectable,
  Input,
  NgModule,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  filter,
  inject,
  interval,
  map,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-7FSD67AL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/features/administration/components/system-health/azure-functions/azure-functions.component.ts
var AzureFunctionsComponent = class _AzureFunctionsComponent {
  static \u0275fac = function AzureFunctionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AzureFunctionsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AzureFunctionsComponent, selectors: [["app-azure-functions"]], decls: 2, vars: 0, template: function AzureFunctionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p");
      \u0275\u0275text(1, "azure-functions works!");
      \u0275\u0275elementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AzureFunctionsComponent, [{
    type: Component,
    args: [{ selector: "app-azure-functions", imports: [], template: "<p>azure-functions works!</p>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AzureFunctionsComponent, { className: "AzureFunctionsComponent", filePath: "src/app/features/administration/components/system-health/azure-functions/azure-functions.component.ts", lineNumber: 9 });
})();

// src/app/features/administration/components/system-health/data-storage/data-storage.component.ts
var DataStorageComponent = class _DataStorageComponent {
  static \u0275fac = function DataStorageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DataStorageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DataStorageComponent, selectors: [["app-data-storage"]], decls: 2, vars: 0, template: function DataStorageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p");
      \u0275\u0275text(1, "data-storage works!");
      \u0275\u0275elementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataStorageComponent, [{
    type: Component,
    args: [{ selector: "app-data-storage", imports: [], template: "<p>data-storage works!</p>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DataStorageComponent, { className: "DataStorageComponent", filePath: "src/app/features/administration/components/system-health/data-storage/data-storage.component.ts", lineNumber: 9 });
})();

// src/app/features/administration/components/system-health/errors-and-alerts/errors-and-alerts.component.ts
var ErrorsAndAlertsComponent = class _ErrorsAndAlertsComponent {
  static \u0275fac = function ErrorsAndAlertsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ErrorsAndAlertsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ErrorsAndAlertsComponent, selectors: [["app-errors-and-alerts"]], decls: 2, vars: 0, template: function ErrorsAndAlertsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p");
      \u0275\u0275text(1, "errors-and-alerts works!");
      \u0275\u0275elementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorsAndAlertsComponent, [{
    type: Component,
    args: [{ selector: "app-errors-and-alerts", imports: [], template: "<p>errors-and-alerts works!</p>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ErrorsAndAlertsComponent, { className: "ErrorsAndAlertsComponent", filePath: "src/app/features/administration/components/system-health/errors-and-alerts/errors-and-alerts.component.ts", lineNumber: 9 });
})();

// src/app/features/administration/components/system-health/event-flow/event-flow.component.ts
var EventFlowComponent = class _EventFlowComponent {
  static \u0275fac = function EventFlowComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventFlowComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventFlowComponent, selectors: [["app-event-flow"]], decls: 2, vars: 0, template: function EventFlowComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p");
      \u0275\u0275text(1, "event-flow works!");
      \u0275\u0275elementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventFlowComponent, [{
    type: Component,
    args: [{ selector: "app-event-flow", imports: [], template: "<p>event-flow works!</p>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventFlowComponent, { className: "EventFlowComponent", filePath: "src/app/features/administration/components/system-health/event-flow/event-flow.component.ts", lineNumber: 9 });
})();

// node_modules/date-fns/addDays.js
function addDays(date, amount, options) {
  const _date = toDate(date, options?.in);
  if (isNaN(amount)) return constructFrom(options?.in || date, NaN);
  if (!amount) return _date;
  _date.setDate(_date.getDate() + amount);
  return _date;
}

// node_modules/date-fns/addMonths.js
function addMonths(date, amount, options) {
  const _date = toDate(date, options?.in);
  if (isNaN(amount)) return constructFrom(options?.in || date, NaN);
  if (!amount) {
    return _date;
  }
  const dayOfMonth = _date.getDate();
  const endOfDesiredMonth = constructFrom(options?.in || date, _date.getTime());
  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth;
  } else {
    _date.setFullYear(
      endOfDesiredMonth.getFullYear(),
      endOfDesiredMonth.getMonth(),
      dayOfMonth
    );
    return _date;
  }
}

// node_modules/date-fns/addMilliseconds.js
function addMilliseconds(date, amount, options) {
  return constructFrom(options?.in || date, +toDate(date) + amount);
}

// node_modules/date-fns/addHours.js
function addHours(date, amount, options) {
  return addMilliseconds(date, amount * millisecondsInHour, options);
}

// node_modules/date-fns/addMinutes.js
function addMinutes(date, amount, options) {
  const _date = toDate(date, options?.in);
  _date.setTime(_date.getTime() + amount * millisecondsInMinute);
  return _date;
}

// node_modules/date-fns/addQuarters.js
function addQuarters(date, amount, options) {
  return addMonths(date, amount * 3, options);
}

// node_modules/date-fns/addSeconds.js
function addSeconds(date, amount, options) {
  return addMilliseconds(date, amount * 1e3, options);
}

// node_modules/date-fns/addWeeks.js
function addWeeks(date, amount, options) {
  return addDays(date, amount * 7, options);
}

// node_modules/date-fns/addYears.js
function addYears(date, amount, options) {
  return addMonths(date, amount * 12, options);
}

// node_modules/date-fns/differenceInCalendarYears.js
function differenceInCalendarYears(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return laterDate_.getFullYear() - earlierDate_.getFullYear();
}

// node_modules/date-fns/differenceInDays.js
function differenceInDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const sign = compareLocalAsc(laterDate_, earlierDate_);
  const difference = Math.abs(
    differenceInCalendarDays(laterDate_, earlierDate_)
  );
  laterDate_.setDate(laterDate_.getDate() - sign * difference);
  const isLastDayNotFull = Number(
    compareLocalAsc(laterDate_, earlierDate_) === -sign
  );
  const result = sign * (difference - isLastDayNotFull);
  return result === 0 ? 0 : result;
}
function compareLocalAsc(laterDate, earlierDate) {
  const diff = laterDate.getFullYear() - earlierDate.getFullYear() || laterDate.getMonth() - earlierDate.getMonth() || laterDate.getDate() - earlierDate.getDate() || laterDate.getHours() - earlierDate.getHours() || laterDate.getMinutes() - earlierDate.getMinutes() || laterDate.getSeconds() - earlierDate.getSeconds() || laterDate.getMilliseconds() - earlierDate.getMilliseconds();
  if (diff < 0) return -1;
  if (diff > 0) return 1;
  return diff;
}

// node_modules/date-fns/differenceInHours.js
function differenceInHours(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const diff = (+laterDate_ - +earlierDate_) / millisecondsInHour;
  return getRoundingMethod(options?.roundingMethod)(diff);
}

// node_modules/date-fns/differenceInMinutes.js
function differenceInMinutes(dateLeft, dateRight, options) {
  const diff = differenceInMilliseconds(dateLeft, dateRight) / millisecondsInMinute;
  return getRoundingMethod(options?.roundingMethod)(diff);
}

// node_modules/date-fns/differenceInQuarters.js
function differenceInQuarters(laterDate, earlierDate, options) {
  const diff = differenceInMonths(laterDate, earlierDate, options) / 3;
  return getRoundingMethod(options?.roundingMethod)(diff);
}

// node_modules/date-fns/differenceInWeeks.js
function differenceInWeeks(laterDate, earlierDate, options) {
  const diff = differenceInDays(laterDate, earlierDate, options) / 7;
  return getRoundingMethod(options?.roundingMethod)(diff);
}

// node_modules/date-fns/differenceInYears.js
function differenceInYears(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const sign = compareAsc(laterDate_, earlierDate_);
  const diff = Math.abs(differenceInCalendarYears(laterDate_, earlierDate_));
  laterDate_.setFullYear(1584);
  earlierDate_.setFullYear(1584);
  const partial = compareAsc(laterDate_, earlierDate_) === -sign;
  const result = sign * (diff - +partial);
  return result === 0 ? 0 : result;
}

// node_modules/date-fns/startOfQuarter.js
function startOfQuarter(date, options) {
  const _date = toDate(date, options?.in);
  const currentMonth = _date.getMonth();
  const month = currentMonth - currentMonth % 3;
  _date.setMonth(month, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/date-fns/startOfMonth.js
function startOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  _date.setDate(1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/date-fns/endOfYear.js
function endOfYear(date, options) {
  const _date = toDate(date, options?.in);
  const year = _date.getFullYear();
  _date.setFullYear(year + 1, 0, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// node_modules/date-fns/endOfHour.js
function endOfHour(date, options) {
  const _date = toDate(date, options?.in);
  _date.setMinutes(59, 59, 999);
  return _date;
}

// node_modules/date-fns/endOfWeek.js
function endOfWeek(date, options) {
  const defaultOptions = getDefaultOptions();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  const _date = toDate(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  _date.setDate(_date.getDate() + diff);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// node_modules/date-fns/endOfMinute.js
function endOfMinute(date, options) {
  const _date = toDate(date, options?.in);
  _date.setSeconds(59, 999);
  return _date;
}

// node_modules/date-fns/endOfQuarter.js
function endOfQuarter(date, options) {
  const _date = toDate(date, options?.in);
  const currentMonth = _date.getMonth();
  const month = currentMonth - currentMonth % 3 + 3;
  _date.setMonth(month, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// node_modules/date-fns/endOfSecond.js
function endOfSecond(date, options) {
  const _date = toDate(date, options?.in);
  _date.setMilliseconds(999);
  return _date;
}

// node_modules/date-fns/getISODay.js
function getISODay(date, options) {
  const day = toDate(date, options?.in).getDay();
  return day === 0 ? 7 : day;
}

// node_modules/date-fns/transpose.js
function transpose(date, constructor) {
  const date_ = isConstructor(constructor) ? new constructor(0) : constructFrom(constructor, 0);
  date_.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
  date_.setHours(
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  );
  return date_;
}
function isConstructor(constructor) {
  return typeof constructor === "function" && constructor.prototype?.constructor === constructor;
}

// node_modules/date-fns/parse/_lib/Setter.js
var TIMEZONE_UNIT_PRIORITY = 10;
var Setter = class {
  subPriority = 0;
  validate(_utcDate, _options) {
    return true;
  }
};
var ValueSetter = class extends Setter {
  constructor(value, validateValue, setValue, priority, subPriority) {
    super();
    this.value = value;
    this.validateValue = validateValue;
    this.setValue = setValue;
    this.priority = priority;
    if (subPriority) {
      this.subPriority = subPriority;
    }
  }
  validate(date, options) {
    return this.validateValue(date, this.value, options);
  }
  set(date, flags, options) {
    return this.setValue(date, flags, this.value, options);
  }
};
var DateTimezoneSetter = class extends Setter {
  priority = TIMEZONE_UNIT_PRIORITY;
  subPriority = -1;
  constructor(context, reference) {
    super();
    this.context = context || ((date) => constructFrom(reference, date));
  }
  set(date, flags) {
    if (flags.timestampIsSet) return date;
    return constructFrom(date, transpose(date, this.context));
  }
};

// node_modules/date-fns/parse/_lib/Parser.js
var Parser = class {
  run(dateString, token, match, options) {
    const result = this.parse(dateString, token, match, options);
    if (!result) {
      return null;
    }
    return {
      setter: new ValueSetter(
        result.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: result.rest
    };
  }
  validate(_utcDate, _value, _options) {
    return true;
  }
};

// node_modules/date-fns/parse/_lib/parsers/EraParser.js
var EraParser = class extends Parser {
  priority = 140;
  parse(dateString, token, match) {
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return match.era(dateString, { width: "abbreviated" }) || match.era(dateString, { width: "narrow" });
      // A, B
      case "GGGGG":
        return match.era(dateString, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return match.era(dateString, { width: "wide" }) || match.era(dateString, { width: "abbreviated" }) || match.era(dateString, { width: "narrow" });
    }
  }
  set(date, flags, value) {
    flags.era = value;
    date.setFullYear(value, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["R", "u", "t", "T"];
};

// node_modules/date-fns/parse/_lib/constants.js
var numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
};
var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

// node_modules/date-fns/parse/_lib/utils.js
function mapValue(parseFnResult, mapFn) {
  if (!parseFnResult) {
    return parseFnResult;
  }
  return {
    value: mapFn(parseFnResult.value),
    rest: parseFnResult.rest
  };
}
function parseNumericPattern(pattern, dateString) {
  const matchResult = dateString.match(pattern);
  if (!matchResult) {
    return null;
  }
  return {
    value: parseInt(matchResult[0], 10),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseTimezonePattern(pattern, dateString) {
  const matchResult = dateString.match(pattern);
  if (!matchResult) {
    return null;
  }
  if (matchResult[0] === "Z") {
    return {
      value: 0,
      rest: dateString.slice(1)
    };
  }
  const sign = matchResult[1] === "+" ? 1 : -1;
  const hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  const minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  const seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
  return {
    value: sign * (hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * millisecondsInSecond),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseAnyDigitsSigned(dateString) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, dateString);
}
function parseNDigits(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, dateString);
    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, dateString);
    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, dateString);
    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, dateString);
    default:
      return parseNumericPattern(new RegExp("^\\d{1," + n + "}"), dateString);
  }
}
function parseNDigitsSigned(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, dateString);
    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, dateString);
    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, dateString);
    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, dateString);
    default:
      return parseNumericPattern(new RegExp("^-?\\d{1," + n + "}"), dateString);
  }
}
function dayPeriodEnumToHours(dayPeriod) {
  switch (dayPeriod) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  const isCommonEra = currentYear > 0;
  const absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
  let result;
  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    const rangeEnd = absCurrentYear + 50;
    const rangeEndCentury = Math.trunc(rangeEnd / 100) * 100;
    const isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }
  return isCommonEra ? result : 1 - result;
}
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

// node_modules/date-fns/parse/_lib/parsers/YearParser.js
var YearParser = class extends Parser {
  priority = 130;
  incompatibleTokens = ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"];
  parse(dateString, token, match) {
    const valueCallback = (year) => ({
      year,
      isTwoDigitYear: token === "yy"
    });
    switch (token) {
      case "y":
        return mapValue(parseNDigits(4, dateString), valueCallback);
      case "yo":
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: "year"
          }),
          valueCallback
        );
      default:
        return mapValue(parseNDigits(token.length, dateString), valueCallback);
    }
  }
  validate(_date, value) {
    return value.isTwoDigitYear || value.year > 0;
  }
  set(date, flags, value) {
    const currentYear = date.getFullYear();
    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = normalizeTwoDigitYear(
        value.year,
        currentYear
      );
      date.setFullYear(normalizedTwoDigitYear, 0, 1);
      date.setHours(0, 0, 0, 0);
      return date;
    }
    const year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
    date.setFullYear(year, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
};

// node_modules/date-fns/parse/_lib/parsers/LocalWeekYearParser.js
var LocalWeekYearParser = class extends Parser {
  priority = 130;
  parse(dateString, token, match) {
    const valueCallback = (year) => ({
      year,
      isTwoDigitYear: token === "YY"
    });
    switch (token) {
      case "Y":
        return mapValue(parseNDigits(4, dateString), valueCallback);
      case "Yo":
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: "year"
          }),
          valueCallback
        );
      default:
        return mapValue(parseNDigits(token.length, dateString), valueCallback);
    }
  }
  validate(_date, value) {
    return value.isTwoDigitYear || value.year > 0;
  }
  set(date, flags, value, options) {
    const currentYear = getWeekYear(date, options);
    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = normalizeTwoDigitYear(
        value.year,
        currentYear
      );
      date.setFullYear(
        normalizedTwoDigitYear,
        0,
        options.firstWeekContainsDate
      );
      date.setHours(0, 0, 0, 0);
      return startOfWeek(date, options);
    }
    const year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
    date.setFullYear(year, 0, options.firstWeekContainsDate);
    date.setHours(0, 0, 0, 0);
    return startOfWeek(date, options);
  }
  incompatibleTokens = [
    "y",
    "R",
    "u",
    "Q",
    "q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "i",
    "t",
    "T"
  ];
};

// node_modules/date-fns/parse/_lib/parsers/ISOWeekYearParser.js
var ISOWeekYearParser = class extends Parser {
  priority = 130;
  parse(dateString, token) {
    if (token === "R") {
      return parseNDigitsSigned(4, dateString);
    }
    return parseNDigitsSigned(token.length, dateString);
  }
  set(date, _flags, value) {
    const firstWeekOfYear = constructFrom(date, 0);
    firstWeekOfYear.setFullYear(value, 0, 4);
    firstWeekOfYear.setHours(0, 0, 0, 0);
    return startOfISOWeek(firstWeekOfYear);
  }
  incompatibleTokens = [
    "G",
    "y",
    "Y",
    "u",
    "Q",
    "q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "e",
    "c",
    "t",
    "T"
  ];
};

// node_modules/date-fns/parse/_lib/parsers/ExtendedYearParser.js
var ExtendedYearParser = class extends Parser {
  priority = 130;
  parse(dateString, token) {
    if (token === "u") {
      return parseNDigitsSigned(4, dateString);
    }
    return parseNDigitsSigned(token.length, dateString);
  }
  set(date, _flags, value) {
    date.setFullYear(value, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"];
};

// node_modules/date-fns/parse/_lib/parsers/QuarterParser.js
var QuarterParser = class extends Parser {
  priority = 120;
  parse(dateString, token, match) {
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
      case "QQ":
        return parseNDigits(token.length, dateString);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return match.ordinalNumber(dateString, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return match.quarter(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.quarter(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return match.quarter(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return match.quarter(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.quarter(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.quarter(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 4;
  }
  set(date, _flags, value) {
    date.setMonth((value - 1) * 3, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
};

// node_modules/date-fns/parse/_lib/parsers/StandAloneQuarterParser.js
var StandAloneQuarterParser = class extends Parser {
  priority = 120;
  parse(dateString, token, match) {
    switch (token) {
      // 1, 2, 3, 4
      case "q":
      case "qq":
        return parseNDigits(token.length, dateString);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return match.ordinalNumber(dateString, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return match.quarter(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.quarter(dateString, {
          width: "narrow",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return match.quarter(dateString, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return match.quarter(dateString, {
          width: "wide",
          context: "standalone"
        }) || match.quarter(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.quarter(dateString, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 4;
  }
  set(date, _flags, value) {
    date.setMonth((value - 1) * 3, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "Q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
};

// node_modules/date-fns/parse/_lib/parsers/MonthParser.js
var MonthParser = class extends Parser {
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "L",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
  priority = 110;
  parse(dateString, token, match) {
    const valueCallback = (value) => value - 1;
    switch (token) {
      // 1, 2, ..., 12
      case "M":
        return mapValue(
          parseNumericPattern(numericPatterns.month, dateString),
          valueCallback
        );
      // 01, 02, ..., 12
      case "MM":
        return mapValue(parseNDigits(2, dateString), valueCallback);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: "month"
          }),
          valueCallback
        );
      // Jan, Feb, ..., Dec
      case "MMM":
        return match.month(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.month(dateString, { width: "narrow", context: "formatting" });
      // J, F, ..., D
      case "MMMMM":
        return match.month(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return match.month(dateString, { width: "wide", context: "formatting" }) || match.month(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.month(dateString, { width: "narrow", context: "formatting" });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 11;
  }
  set(date, _flags, value) {
    date.setMonth(value, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
};

// node_modules/date-fns/parse/_lib/parsers/StandAloneMonthParser.js
var StandAloneMonthParser = class extends Parser {
  priority = 110;
  parse(dateString, token, match) {
    const valueCallback = (value) => value - 1;
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return mapValue(
          parseNumericPattern(numericPatterns.month, dateString),
          valueCallback
        );
      // 01, 02, ..., 12
      case "LL":
        return mapValue(parseNDigits(2, dateString), valueCallback);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: "month"
          }),
          valueCallback
        );
      // Jan, Feb, ..., Dec
      case "LLL":
        return match.month(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.month(dateString, { width: "narrow", context: "standalone" });
      // J, F, ..., D
      case "LLLLL":
        return match.month(dateString, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return match.month(dateString, { width: "wide", context: "standalone" }) || match.month(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.month(dateString, { width: "narrow", context: "standalone" });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 11;
  }
  set(date, _flags, value) {
    date.setMonth(value, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "M",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
};

// node_modules/date-fns/setWeek.js
function setWeek(date, week, options) {
  const date_ = toDate(date, options?.in);
  const diff = getWeek(date_, options) - week;
  date_.setDate(date_.getDate() - diff * 7);
  return toDate(date_, options?.in);
}

// node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.js
var LocalWeekParser = class extends Parser {
  priority = 100;
  parse(dateString, token, match) {
    switch (token) {
      case "w":
        return parseNumericPattern(numericPatterns.week, dateString);
      case "wo":
        return match.ordinalNumber(dateString, { unit: "week" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 53;
  }
  set(date, _flags, value, options) {
    return startOfWeek(setWeek(date, value, options), options);
  }
  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "i",
    "t",
    "T"
  ];
};

// node_modules/date-fns/setISOWeek.js
function setISOWeek(date, week, options) {
  const _date = toDate(date, options?.in);
  const diff = getISOWeek(_date, options) - week;
  _date.setDate(_date.getDate() - diff * 7);
  return _date;
}

// node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.js
var ISOWeekParser = class extends Parser {
  priority = 100;
  parse(dateString, token, match) {
    switch (token) {
      case "I":
        return parseNumericPattern(numericPatterns.week, dateString);
      case "Io":
        return match.ordinalNumber(dateString, { unit: "week" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 53;
  }
  set(date, _flags, value) {
    return startOfISOWeek(setISOWeek(date, value));
  }
  incompatibleTokens = [
    "y",
    "Y",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "e",
    "c",
    "t",
    "T"
  ];
};

// node_modules/date-fns/parse/_lib/parsers/DateParser.js
var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
var DateParser = class extends Parser {
  priority = 90;
  subPriority = 1;
  parse(dateString, token, match) {
    switch (token) {
      case "d":
        return parseNumericPattern(numericPatterns.date, dateString);
      case "do":
        return match.ordinalNumber(dateString, { unit: "date" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(date, value) {
    const year = date.getFullYear();
    const isLeapYear = isLeapYearIndex(year);
    const month = date.getMonth();
    if (isLeapYear) {
      return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
    } else {
      return value >= 1 && value <= DAYS_IN_MONTH[month];
    }
  }
  set(date, _flags, value) {
    date.setDate(value);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
};

// node_modules/date-fns/parse/_lib/parsers/DayOfYearParser.js
var DayOfYearParser = class extends Parser {
  priority = 90;
  subpriority = 1;
  parse(dateString, token, match) {
    switch (token) {
      case "D":
      case "DD":
        return parseNumericPattern(numericPatterns.dayOfYear, dateString);
      case "Do":
        return match.ordinalNumber(dateString, { unit: "date" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(date, value) {
    const year = date.getFullYear();
    const isLeapYear = isLeapYearIndex(year);
    if (isLeapYear) {
      return value >= 1 && value <= 366;
    } else {
      return value >= 1 && value <= 365;
    }
  }
  set(date, _flags, value) {
    date.setMonth(0, value);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "E",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
};

// node_modules/date-fns/setDay.js
function setDay(date, day, options) {
  const defaultOptions = getDefaultOptions();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  const date_ = toDate(date, options?.in);
  const currentDay = date_.getDay();
  const remainder = day % 7;
  const dayIndex = (remainder + 7) % 7;
  const delta = 7 - weekStartsOn;
  const diff = day < 0 || day > 6 ? day - (currentDay + delta) % 7 : (dayIndex + delta) % 7 - (currentDay + delta) % 7;
  return addDays(date_, diff, options);
}

// node_modules/date-fns/parse/_lib/parsers/DayParser.js
var DayParser = class extends Parser {
  priority = 90;
  parse(dateString, token, match) {
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return match.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.day(dateString, { width: "short", context: "formatting" }) || match.day(dateString, { width: "narrow", context: "formatting" });
      // T
      case "EEEEE":
        return match.day(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return match.day(dateString, { width: "short", context: "formatting" }) || match.day(dateString, { width: "narrow", context: "formatting" });
      // Tuesday
      case "EEEE":
      default:
        return match.day(dateString, { width: "wide", context: "formatting" }) || match.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.day(dateString, { width: "short", context: "formatting" }) || match.day(dateString, { width: "narrow", context: "formatting" });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 6;
  }
  set(date, _flags, value, options) {
    date = setDay(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["D", "i", "e", "c", "t", "T"];
};

// node_modules/date-fns/parse/_lib/parsers/LocalDayParser.js
var LocalDayParser = class extends Parser {
  priority = 90;
  parse(dateString, token, match, options) {
    const valueCallback = (value) => {
      const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
      return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
    };
    switch (token) {
      // 3
      case "e":
      case "ee":
        return mapValue(parseNDigits(token.length, dateString), valueCallback);
      // 3rd
      case "eo":
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: "day"
          }),
          valueCallback
        );
      // Tue
      case "eee":
        return match.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.day(dateString, { width: "short", context: "formatting" }) || match.day(dateString, { width: "narrow", context: "formatting" });
      // T
      case "eeeee":
        return match.day(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return match.day(dateString, { width: "short", context: "formatting" }) || match.day(dateString, { width: "narrow", context: "formatting" });
      // Tuesday
      case "eeee":
      default:
        return match.day(dateString, { width: "wide", context: "formatting" }) || match.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.day(dateString, { width: "short", context: "formatting" }) || match.day(dateString, { width: "narrow", context: "formatting" });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 6;
  }
  set(date, _flags, value, options) {
    date = setDay(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "E",
    "i",
    "c",
    "t",
    "T"
  ];
};

// node_modules/date-fns/parse/_lib/parsers/StandAloneLocalDayParser.js
var StandAloneLocalDayParser = class extends Parser {
  priority = 90;
  parse(dateString, token, match, options) {
    const valueCallback = (value) => {
      const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
      return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
    };
    switch (token) {
      // 3
      case "c":
      case "cc":
        return mapValue(parseNDigits(token.length, dateString), valueCallback);
      // 3rd
      case "co":
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: "day"
          }),
          valueCallback
        );
      // Tue
      case "ccc":
        return match.day(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.day(dateString, { width: "short", context: "standalone" }) || match.day(dateString, { width: "narrow", context: "standalone" });
      // T
      case "ccccc":
        return match.day(dateString, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return match.day(dateString, { width: "short", context: "standalone" }) || match.day(dateString, { width: "narrow", context: "standalone" });
      // Tuesday
      case "cccc":
      default:
        return match.day(dateString, { width: "wide", context: "standalone" }) || match.day(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.day(dateString, { width: "short", context: "standalone" }) || match.day(dateString, { width: "narrow", context: "standalone" });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 6;
  }
  set(date, _flags, value, options) {
    date = setDay(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "E",
    "i",
    "e",
    "t",
    "T"
  ];
};

// node_modules/date-fns/setISODay.js
function setISODay(date, day, options) {
  const date_ = toDate(date, options?.in);
  const currentDay = getISODay(date_, options);
  const diff = day - currentDay;
  return addDays(date_, diff, options);
}

// node_modules/date-fns/parse/_lib/parsers/ISODayParser.js
var ISODayParser = class extends Parser {
  priority = 90;
  parse(dateString, token, match) {
    const valueCallback = (value) => {
      if (value === 0) {
        return 7;
      }
      return value;
    };
    switch (token) {
      // 2
      case "i":
      case "ii":
        return parseNDigits(token.length, dateString);
      // 2nd
      case "io":
        return match.ordinalNumber(dateString, { unit: "day" });
      // Tue
      case "iii":
        return mapValue(
          match.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match.day(dateString, {
            width: "narrow",
            context: "formatting"
          }),
          valueCallback
        );
      // T
      case "iiiii":
        return mapValue(
          match.day(dateString, {
            width: "narrow",
            context: "formatting"
          }),
          valueCallback
        );
      // Tu
      case "iiiiii":
        return mapValue(
          match.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match.day(dateString, {
            width: "narrow",
            context: "formatting"
          }),
          valueCallback
        );
      // Tuesday
      case "iiii":
      default:
        return mapValue(
          match.day(dateString, {
            width: "wide",
            context: "formatting"
          }) || match.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match.day(dateString, {
            width: "narrow",
            context: "formatting"
          }),
          valueCallback
        );
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 7;
  }
  set(date, _flags, value) {
    date = setISODay(date, value);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "y",
    "Y",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "E",
    "e",
    "c",
    "t",
    "T"
  ];
};

// node_modules/date-fns/parse/_lib/parsers/AMPMParser.js
var AMPMParser = class extends Parser {
  priority = 80;
  parse(dateString, token, match) {
    switch (token) {
      case "a":
      case "aa":
      case "aaa":
        return match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return match.dayPeriod(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(date, _flags, value) {
    date.setHours(dayPeriodEnumToHours(value), 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["b", "B", "H", "k", "t", "T"];
};

// node_modules/date-fns/parse/_lib/parsers/AMPMMidnightParser.js
var AMPMMidnightParser = class extends Parser {
  priority = 80;
  parse(dateString, token, match) {
    switch (token) {
      case "b":
      case "bb":
      case "bbb":
        return match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return match.dayPeriod(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(date, _flags, value) {
    date.setHours(dayPeriodEnumToHours(value), 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["a", "B", "H", "k", "t", "T"];
};

// node_modules/date-fns/parse/_lib/parsers/DayPeriodParser.js
var DayPeriodParser = class extends Parser {
  priority = 80;
  parse(dateString, token, match) {
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return match.dayPeriod(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(date, _flags, value) {
    date.setHours(dayPeriodEnumToHours(value), 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["a", "b", "t", "T"];
};

// node_modules/date-fns/parse/_lib/parsers/Hour1to12Parser.js
var Hour1to12Parser = class extends Parser {
  priority = 70;
  parse(dateString, token, match) {
    switch (token) {
      case "h":
        return parseNumericPattern(numericPatterns.hour12h, dateString);
      case "ho":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 12;
  }
  set(date, _flags, value) {
    const isPM = date.getHours() >= 12;
    if (isPM && value < 12) {
      date.setHours(value + 12, 0, 0, 0);
    } else if (!isPM && value === 12) {
      date.setHours(0, 0, 0, 0);
    } else {
      date.setHours(value, 0, 0, 0);
    }
    return date;
  }
  incompatibleTokens = ["H", "K", "k", "t", "T"];
};

// node_modules/date-fns/parse/_lib/parsers/Hour0to23Parser.js
var Hour0to23Parser = class extends Parser {
  priority = 70;
  parse(dateString, token, match) {
    switch (token) {
      case "H":
        return parseNumericPattern(numericPatterns.hour23h, dateString);
      case "Ho":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 23;
  }
  set(date, _flags, value) {
    date.setHours(value, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["a", "b", "h", "K", "k", "t", "T"];
};

// node_modules/date-fns/parse/_lib/parsers/Hour0To11Parser.js
var Hour0To11Parser = class extends Parser {
  priority = 70;
  parse(dateString, token, match) {
    switch (token) {
      case "K":
        return parseNumericPattern(numericPatterns.hour11h, dateString);
      case "Ko":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 11;
  }
  set(date, _flags, value) {
    const isPM = date.getHours() >= 12;
    if (isPM && value < 12) {
      date.setHours(value + 12, 0, 0, 0);
    } else {
      date.setHours(value, 0, 0, 0);
    }
    return date;
  }
  incompatibleTokens = ["h", "H", "k", "t", "T"];
};

// node_modules/date-fns/parse/_lib/parsers/Hour1To24Parser.js
var Hour1To24Parser = class extends Parser {
  priority = 70;
  parse(dateString, token, match) {
    switch (token) {
      case "k":
        return parseNumericPattern(numericPatterns.hour24h, dateString);
      case "ko":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 24;
  }
  set(date, _flags, value) {
    const hours = value <= 24 ? value % 24 : value;
    date.setHours(hours, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["a", "b", "h", "H", "K", "t", "T"];
};

// node_modules/date-fns/parse/_lib/parsers/MinuteParser.js
var MinuteParser = class extends Parser {
  priority = 60;
  parse(dateString, token, match) {
    switch (token) {
      case "m":
        return parseNumericPattern(numericPatterns.minute, dateString);
      case "mo":
        return match.ordinalNumber(dateString, { unit: "minute" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 59;
  }
  set(date, _flags, value) {
    date.setMinutes(value, 0, 0);
    return date;
  }
  incompatibleTokens = ["t", "T"];
};

// node_modules/date-fns/parse/_lib/parsers/SecondParser.js
var SecondParser = class extends Parser {
  priority = 50;
  parse(dateString, token, match) {
    switch (token) {
      case "s":
        return parseNumericPattern(numericPatterns.second, dateString);
      case "so":
        return match.ordinalNumber(dateString, { unit: "second" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 59;
  }
  set(date, _flags, value) {
    date.setSeconds(value, 0);
    return date;
  }
  incompatibleTokens = ["t", "T"];
};

// node_modules/date-fns/parse/_lib/parsers/FractionOfSecondParser.js
var FractionOfSecondParser = class extends Parser {
  priority = 30;
  parse(dateString, token) {
    const valueCallback = (value) => Math.trunc(value * Math.pow(10, -token.length + 3));
    return mapValue(parseNDigits(token.length, dateString), valueCallback);
  }
  set(date, _flags, value) {
    date.setMilliseconds(value);
    return date;
  }
  incompatibleTokens = ["t", "T"];
};

// node_modules/date-fns/parse/_lib/parsers/ISOTimezoneWithZParser.js
var ISOTimezoneWithZParser = class extends Parser {
  priority = 10;
  parse(dateString, token) {
    switch (token) {
      case "X":
        return parseTimezonePattern(
          timezonePatterns.basicOptionalMinutes,
          dateString
        );
      case "XX":
        return parseTimezonePattern(timezonePatterns.basic, dateString);
      case "XXXX":
        return parseTimezonePattern(
          timezonePatterns.basicOptionalSeconds,
          dateString
        );
      case "XXXXX":
        return parseTimezonePattern(
          timezonePatterns.extendedOptionalSeconds,
          dateString
        );
      case "XXX":
      default:
        return parseTimezonePattern(timezonePatterns.extended, dateString);
    }
  }
  set(date, flags, value) {
    if (flags.timestampIsSet) return date;
    return constructFrom(
      date,
      date.getTime() - getTimezoneOffsetInMilliseconds(date) - value
    );
  }
  incompatibleTokens = ["t", "T", "x"];
};

// node_modules/date-fns/parse/_lib/parsers/ISOTimezoneParser.js
var ISOTimezoneParser = class extends Parser {
  priority = 10;
  parse(dateString, token) {
    switch (token) {
      case "x":
        return parseTimezonePattern(
          timezonePatterns.basicOptionalMinutes,
          dateString
        );
      case "xx":
        return parseTimezonePattern(timezonePatterns.basic, dateString);
      case "xxxx":
        return parseTimezonePattern(
          timezonePatterns.basicOptionalSeconds,
          dateString
        );
      case "xxxxx":
        return parseTimezonePattern(
          timezonePatterns.extendedOptionalSeconds,
          dateString
        );
      case "xxx":
      default:
        return parseTimezonePattern(timezonePatterns.extended, dateString);
    }
  }
  set(date, flags, value) {
    if (flags.timestampIsSet) return date;
    return constructFrom(
      date,
      date.getTime() - getTimezoneOffsetInMilliseconds(date) - value
    );
  }
  incompatibleTokens = ["t", "T", "X"];
};

// node_modules/date-fns/parse/_lib/parsers/TimestampSecondsParser.js
var TimestampSecondsParser = class extends Parser {
  priority = 40;
  parse(dateString) {
    return parseAnyDigitsSigned(dateString);
  }
  set(date, _flags, value) {
    return [constructFrom(date, value * 1e3), { timestampIsSet: true }];
  }
  incompatibleTokens = "*";
};

// node_modules/date-fns/parse/_lib/parsers/TimestampMillisecondsParser.js
var TimestampMillisecondsParser = class extends Parser {
  priority = 20;
  parse(dateString) {
    return parseAnyDigitsSigned(dateString);
  }
  set(date, _flags, value) {
    return [constructFrom(date, value), { timestampIsSet: true }];
  }
  incompatibleTokens = "*";
};

// node_modules/date-fns/parse/_lib/parsers.js
var parsers = {
  G: new EraParser(),
  y: new YearParser(),
  Y: new LocalWeekYearParser(),
  R: new ISOWeekYearParser(),
  u: new ExtendedYearParser(),
  Q: new QuarterParser(),
  q: new StandAloneQuarterParser(),
  M: new MonthParser(),
  L: new StandAloneMonthParser(),
  w: new LocalWeekParser(),
  I: new ISOWeekParser(),
  d: new DateParser(),
  D: new DayOfYearParser(),
  E: new DayParser(),
  e: new LocalDayParser(),
  c: new StandAloneLocalDayParser(),
  i: new ISODayParser(),
  a: new AMPMParser(),
  b: new AMPMMidnightParser(),
  B: new DayPeriodParser(),
  h: new Hour1to12Parser(),
  H: new Hour0to23Parser(),
  K: new Hour0To11Parser(),
  k: new Hour1To24Parser(),
  m: new MinuteParser(),
  s: new SecondParser(),
  S: new FractionOfSecondParser(),
  X: new ISOTimezoneWithZParser(),
  x: new ISOTimezoneParser(),
  t: new TimestampSecondsParser(),
  T: new TimestampMillisecondsParser()
};

// node_modules/date-fns/parse.js
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var notWhitespaceRegExp = /\S/;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function parse(dateStr, formatStr, referenceDate, options) {
  const invalidDate = () => constructFrom(options?.in || referenceDate, NaN);
  const defaultOptions = getDefaultOptions2();
  const locale = options?.locale ?? defaultOptions.locale ?? enUS;
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  if (!formatStr)
    return dateStr ? invalidDate() : toDate(referenceDate, options?.in);
  const subFnOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale
  };
  const setters = [new DateTimezoneSetter(options?.in, referenceDate)];
  const tokens = formatStr.match(longFormattingTokensRegExp).map((substring) => {
    const firstCharacter = substring[0];
    if (firstCharacter in longFormatters) {
      const longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp);
  const usedTokens = [];
  for (let token of tokens) {
    if (!options?.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token)) {
      warnOrThrowProtectedError(token, formatStr, dateStr);
    }
    if (!options?.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
      warnOrThrowProtectedError(token, formatStr, dateStr);
    }
    const firstCharacter = token[0];
    const parser = parsers[firstCharacter];
    if (parser) {
      const { incompatibleTokens } = parser;
      if (Array.isArray(incompatibleTokens)) {
        const incompatibleToken = usedTokens.find(
          (usedToken) => incompatibleTokens.includes(usedToken.token) || usedToken.token === firstCharacter
        );
        if (incompatibleToken) {
          throw new RangeError(
            `The format string mustn't contain \`${incompatibleToken.fullToken}\` and \`${token}\` at the same time`
          );
        }
      } else if (parser.incompatibleTokens === "*" && usedTokens.length > 0) {
        throw new RangeError(
          `The format string mustn't contain \`${token}\` and any other token at the same time`
        );
      }
      usedTokens.push({ token: firstCharacter, fullToken: token });
      const parseResult = parser.run(
        dateStr,
        token,
        locale.match,
        subFnOptions
      );
      if (!parseResult) {
        return invalidDate();
      }
      setters.push(parseResult.setter);
      dateStr = parseResult.rest;
    } else {
      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + firstCharacter + "`"
        );
      }
      if (token === "''") {
        token = "'";
      } else if (firstCharacter === "'") {
        token = cleanEscapedString(token);
      }
      if (dateStr.indexOf(token) === 0) {
        dateStr = dateStr.slice(token.length);
      } else {
        return invalidDate();
      }
    }
  }
  if (dateStr.length > 0 && notWhitespaceRegExp.test(dateStr)) {
    return invalidDate();
  }
  const uniquePrioritySetters = setters.map((setter) => setter.priority).sort((a, b) => b - a).filter((priority, index, array) => array.indexOf(priority) === index).map(
    (priority) => setters.filter((setter) => setter.priority === priority).sort((a, b) => b.subPriority - a.subPriority)
  ).map((setterArray) => setterArray[0]);
  let date = toDate(referenceDate, options?.in);
  if (isNaN(+date)) return invalidDate();
  const flags = {};
  for (const setter of uniquePrioritySetters) {
    if (!setter.validate(date, subFnOptions)) {
      return invalidDate();
    }
    const result = setter.set(date, flags, subFnOptions);
    if (Array.isArray(result)) {
      date = result[0];
      Object.assign(flags, result[1]);
    } else {
      date = result;
    }
  }
  return date;
}
function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

// node_modules/date-fns/startOfHour.js
function startOfHour(date, options) {
  const _date = toDate(date, options?.in);
  _date.setMinutes(0, 0, 0);
  return _date;
}

// node_modules/date-fns/startOfMinute.js
function startOfMinute(date, options) {
  const date_ = toDate(date, options?.in);
  date_.setSeconds(0, 0);
  return date_;
}

// node_modules/date-fns/startOfSecond.js
function startOfSecond(date, options) {
  const date_ = toDate(date, options?.in);
  date_.setMilliseconds(0);
  return date_;
}

// node_modules/date-fns/parseISO.js
function parseISO(argument, options) {
  const invalidDate = () => constructFrom(options?.in, NaN);
  const additionalDigits = options?.additionalDigits ?? 2;
  const dateStrings = splitDateString(argument);
  let date;
  if (dateStrings.date) {
    const parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(+date)) return invalidDate();
  const timestamp = +date;
  let time = 0;
  let offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) return invalidDate();
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) return invalidDate();
  } else {
    const tmpDate = new Date(timestamp + time);
    const result = toDate(0, options?.in);
    result.setFullYear(
      tmpDate.getUTCFullYear(),
      tmpDate.getUTCMonth(),
      tmpDate.getUTCDate()
    );
    result.setHours(
      tmpDate.getUTCHours(),
      tmpDate.getUTCMinutes(),
      tmpDate.getUTCSeconds(),
      tmpDate.getUTCMilliseconds()
    );
    return result;
  }
  return toDate(timestamp + time + offset, options?.in);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  const dateStrings = {};
  const array = dateString.split(patterns.dateTimeDelimiter);
  let timeString;
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(
        dateStrings.date.length,
        dateString.length
      );
    }
  }
  if (timeString) {
    const token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], "");
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  const regex = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" + (4 + additionalDigits) + "})|(\\d{2}|[+-]\\d{" + (2 + additionalDigits) + "})$)"
  );
  const captures = dateString.match(regex);
  if (!captures) return { year: NaN, restDateString: "" };
  const year = captures[1] ? parseInt(captures[1]) : null;
  const century = captures[2] ? parseInt(captures[2]) : null;
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  if (year === null) return /* @__PURE__ */ new Date(NaN);
  const captures = dateString.match(dateRegex);
  if (!captures) return /* @__PURE__ */ new Date(NaN);
  const isWeekDate = !!captures[4];
  const dayOfYear = parseDateUnit(captures[1]);
  const month = parseDateUnit(captures[2]) - 1;
  const day = parseDateUnit(captures[3]);
  const week = parseDateUnit(captures[4]);
  const dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    const date = /* @__PURE__ */ new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  const captures = timeString.match(timeRegex);
  if (!captures) return NaN;
  const hours = parseTimeUnit(captures[1]);
  const minutes = parseTimeUnit(captures[2]);
  const seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * 1e3;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(",", ".")) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === "Z") return 0;
  const captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  const sign = captures[1] === "+" ? -1 : 1;
  const hours = parseInt(captures[2]);
  const minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * millisecondsInHour + minutes * millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  const date = /* @__PURE__ */ new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  const fourthOfJanuaryDay = date.getUTCDay() || 7;
  const diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex2(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex2(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex2(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

// src/app/features/administration/components/system-health/system-health-container/system-health-container.component.ts
var _c0 = ["main"];
function SystemHealthContainerComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
var SystemHealthContainerComponent = class _SystemHealthContainerComponent {
  cdr = inject(ChangeDetectorRef);
  mainTemplate;
  systemHealthTabs = [
    { id: "overview", label: "System Overview", route: "overview", level: 0 },
    {
      id: "azure-functions",
      label: "Azure Functions",
      route: "azure-functions",
      level: 0
    },
    { id: "event-flow", label: "Event Flow", route: "event-flow", level: 0 },
    {
      id: "data-storage",
      label: "Data Storage",
      route: "data-storage",
      level: 0
    },
    {
      id: "errors-and-alerts",
      label: "Errors & Alerts",
      route: "errors-and-alerts",
      level: 0
    }
  ];
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  destroyRef = inject(DestroyRef);
  detailsService = inject(EntityDetailsService);
  isContentScrollable = signal(false);
  // Signal to control styling
  get contentScrollableActive() {
    return !this.isContentScrollable();
  }
  ngAfterViewInit() {
    this.applyTemplateToTabs(this.systemHealthTabs, this.mainTemplate);
    this.cdr.detectChanges();
  }
  applyTemplateToTabs(tabs, template) {
    for (const tab of tabs) {
      tab.template = template;
      if (tab.children) {
        this.applyTemplateToTabs(tab.children, template);
      }
    }
  }
  onTabChange() {
    this.detailsService.closeDetailsPanel();
  }
  ngOnInit() {
    const getScrollableState = (route) => {
      let currentRoute = route;
      while (currentRoute.firstChild) {
        currentRoute = currentRoute.firstChild;
      }
      const routeData = currentRoute.snapshot.data;
      if (isDefined(routeData) && typeof routeData["nestedContentScrollable"] === "boolean") {
        return routeData["nestedContentScrollable"];
      }
      return false;
    };
    this.isContentScrollable.set(getScrollableState(this.activatedRoute));
    this.cdr.detectChanges();
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => getScrollableState(this.activatedRoute)),
      // Reuse the logic
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((scrollableValue) => {
      if (this.isContentScrollable() !== scrollableValue) {
        this.isContentScrollable.set(scrollableValue);
        this.cdr.detectChanges();
      }
    });
  }
  static \u0275fac = function SystemHealthContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemHealthContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemHealthContainerComponent, selectors: [["app-system-health-container"]], viewQuery: function SystemHealthContainerComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.mainTemplate = _t.first);
    }
  }, hostVars: 2, hostBindings: function SystemHealthContainerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("content-scrollable-inactive", ctx.contentScrollableActive);
    }
  }, decls: 4, vars: 1, consts: [["main", ""], [1, "w-full", "h-full"], ["styleClass", "h-full overflow-hidden", 3, "tabChange", "tabs"]], template: function SystemHealthContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "app-dynamic-tab-panel", 2);
      \u0275\u0275listener("tabChange", function SystemHealthContainerComponent_Template_app_dynamic_tab_panel_tabChange_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onTabChange());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(2, SystemHealthContainerComponent_ng_template_2_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("tabs", ctx.systemHealthTabs);
    }
  }, dependencies: [DynamicTabPanelComponent, RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemHealthContainerComponent, [{
    type: Component,
    args: [{ selector: "app-system-health-container", imports: [DynamicTabPanelComponent, RouterOutlet], template: '<div class="w-full h-full">\n  <app-dynamic-tab-panel\n    [tabs]="systemHealthTabs"\n    (tabChange)="onTabChange()"\n    styleClass="h-full overflow-hidden"\n  ></app-dynamic-tab-panel>\n</div>\n\n<ng-template #main>\n  <router-outlet />\n</ng-template>\n' }]
  }], null, { mainTemplate: [{
    type: ViewChild,
    args: ["main"]
  }], contentScrollableActive: [{
    type: HostBinding,
    args: ["class.content-scrollable-inactive"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemHealthContainerComponent, { className: "SystemHealthContainerComponent", filePath: "src/app/features/administration/components/system-health/system-health-container/system-health-container.component.ts", lineNumber: 34 });
})();

// node_modules/@primeuix/styles/dist/tag/index.mjs
var style = "\n    .p-tag {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        background: dt('tag.primary.background');\n        color: dt('tag.primary.color');\n        font-size: dt('tag.font.size');\n        font-weight: dt('tag.font.weight');\n        padding: dt('tag.padding');\n        border-radius: dt('tag.border.radius');\n        gap: dt('tag.gap');\n    }\n\n    .p-tag-icon {\n        font-size: dt('tag.icon.size');\n        width: dt('tag.icon.size');\n        height: dt('tag.icon.size');\n    }\n\n    .p-tag-rounded {\n        border-radius: dt('tag.rounded.border.radius');\n    }\n\n    .p-tag-success {\n        background: dt('tag.success.background');\n        color: dt('tag.success.color');\n    }\n\n    .p-tag-info {\n        background: dt('tag.info.background');\n        color: dt('tag.info.color');\n    }\n\n    .p-tag-warn {\n        background: dt('tag.warn.background');\n        color: dt('tag.warn.color');\n    }\n\n    .p-tag-danger {\n        background: dt('tag.danger.background');\n        color: dt('tag.danger.color');\n    }\n\n    .p-tag-secondary {\n        background: dt('tag.secondary.background');\n        color: dt('tag.secondary.color');\n    }\n\n    .p-tag-contrast {\n        background: dt('tag.contrast.background');\n        color: dt('tag.contrast.color');\n    }\n";

// node_modules/primeng/fesm2022/primeng-tag.mjs
var _c02 = ["icon"];
var _c1 = ["*"];
function Tag_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.cx("icon"));
    \u0275\u0275property("ngClass", ctx_r0.icon);
  }
}
function Tag_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Tag_ng_container_1_span_1_Template, 1, 3, "span", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.icon);
  }
}
function Tag_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Tag_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Tag_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Tag_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, Tag_span_2_1_Template, 1, 0, null, 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("icon"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.iconTemplate || ctx_r0._iconTemplate);
  }
}
var classes = {
  root: ({
    instance
  }) => ["p-tag p-component", {
    "p-tag-info": instance.severity === "info",
    "p-tag-success": instance.severity === "success",
    "p-tag-warn": instance.severity === "warn",
    "p-tag-danger": instance.severity === "danger",
    "p-tag-secondary": instance.severity === "secondary",
    "p-tag-contrast": instance.severity === "contrast",
    "p-tag-rounded": instance.rounded
  }],
  icon: "p-tag-icon",
  label: "p-tag-label"
};
var TagStyle = class _TagStyle extends BaseStyle {
  name = "tag";
  theme = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TagStyle_BaseFactory;
    return function TagStyle_Factory(__ngFactoryType__) {
      return (\u0275TagStyle_BaseFactory || (\u0275TagStyle_BaseFactory = \u0275\u0275getInheritedFactory(_TagStyle)))(__ngFactoryType__ || _TagStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TagStyle,
    factory: _TagStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagStyle, [{
    type: Injectable
  }], null, null);
})();
var TagClasses;
(function(TagClasses2) {
  TagClasses2["root"] = "p-tag";
  TagClasses2["icon"] = "p-tag-icon";
  TagClasses2["label"] = "p-tag-label";
})(TagClasses || (TagClasses = {}));
var Tag = class _Tag extends BaseComponent {
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Severity type of the tag.
   * @group Props
   */
  severity;
  /**
   * Value to display inside the tag.
   * @group Props
   */
  value;
  /**
   * Icon of the tag to display next to the value.
   * @group Props
   */
  icon;
  /**
   * Whether the corners of the tag are rounded.
   * @group Props
   */
  rounded;
  iconTemplate;
  templates;
  _iconTemplate;
  _componentStyle = inject(TagStyle);
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "icon":
          this._iconTemplate = item.template;
          break;
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Tag_BaseFactory;
    return function Tag_Factory(__ngFactoryType__) {
      return (\u0275Tag_BaseFactory || (\u0275Tag_BaseFactory = \u0275\u0275getInheritedFactory(_Tag)))(__ngFactoryType__ || _Tag);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Tag,
    selectors: [["p-tag"]],
    contentQueries: function Tag_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c02, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.iconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 2,
    hostBindings: function Tag_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      styleClass: "styleClass",
      severity: "severity",
      value: "value",
      icon: "icon",
      rounded: [2, "rounded", "rounded", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([TagStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c1,
    decls: 5,
    vars: 5,
    consts: [[4, "ngIf"], [3, "class", 4, "ngIf"], [3, "class", "ngClass", 4, "ngIf"], [3, "ngClass"], [4, "ngTemplateOutlet"]],
    template: function Tag_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275template(1, Tag_ng_container_1_Template, 2, 1, "ng-container", 0)(2, Tag_span_2_Template, 2, 3, "span", 1);
        \u0275\u0275elementStart(3, "span");
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.iconTemplate && !ctx._iconTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.iconTemplate || ctx._iconTemplate);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("label"));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.value);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tag, [{
    type: Component,
    args: [{
      selector: "p-tag",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: `
        <ng-content></ng-content>
        <ng-container *ngIf="!iconTemplate && !_iconTemplate">
            <span [class]="cx('icon')" [ngClass]="icon" *ngIf="icon"></span>
        </ng-container>
        <span [class]="cx('icon')" *ngIf="iconTemplate || _iconTemplate">
            <ng-template *ngTemplateOutlet="iconTemplate || _iconTemplate"></ng-template>
        </span>
        <span [class]="cx('label')">{{ value }}</span>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [TagStyle],
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      }
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    severity: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    rounded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var TagModule = class _TagModule {
  static \u0275fac = function TagModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TagModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TagModule,
    imports: [Tag, SharedModule],
    exports: [Tag, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Tag, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagModule, [{
    type: NgModule,
    args: [{
      imports: [Tag, SharedModule],
      exports: [Tag, SharedModule]
    }]
  }], null, null);
})();

// node_modules/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.esm.js
var FORMATS = {
  datetime: "MMM d, yyyy, h:mm:ss aaaa",
  millisecond: "h:mm:ss.SSS aaaa",
  second: "h:mm:ss aaaa",
  minute: "h:mm aaaa",
  hour: "ha",
  day: "MMM d",
  week: "PP",
  month: "MMM yyyy",
  quarter: "qqq - yyyy",
  year: "yyyy"
};
adapters._date.override({
  _id: "date-fns",
  // DEBUG
  formats: function() {
    return FORMATS;
  },
  parse: function(value, fmt) {
    if (value === null || typeof value === "undefined") {
      return null;
    }
    const type = typeof value;
    if (type === "number" || value instanceof Date) {
      value = toDate(value);
    } else if (type === "string") {
      if (typeof fmt === "string") {
        value = parse(value, fmt, /* @__PURE__ */ new Date(), this.options);
      } else {
        value = parseISO(value, this.options);
      }
    }
    return isValid(value) ? value.getTime() : null;
  },
  format: function(time, fmt) {
    return format(time, fmt, this.options);
  },
  add: function(time, amount, unit) {
    switch (unit) {
      case "millisecond":
        return addMilliseconds(time, amount);
      case "second":
        return addSeconds(time, amount);
      case "minute":
        return addMinutes(time, amount);
      case "hour":
        return addHours(time, amount);
      case "day":
        return addDays(time, amount);
      case "week":
        return addWeeks(time, amount);
      case "month":
        return addMonths(time, amount);
      case "quarter":
        return addQuarters(time, amount);
      case "year":
        return addYears(time, amount);
      default:
        return time;
    }
  },
  diff: function(max, min, unit) {
    switch (unit) {
      case "millisecond":
        return differenceInMilliseconds(max, min);
      case "second":
        return differenceInSeconds(max, min);
      case "minute":
        return differenceInMinutes(max, min);
      case "hour":
        return differenceInHours(max, min);
      case "day":
        return differenceInDays(max, min);
      case "week":
        return differenceInWeeks(max, min);
      case "month":
        return differenceInMonths(max, min);
      case "quarter":
        return differenceInQuarters(max, min);
      case "year":
        return differenceInYears(max, min);
      default:
        return 0;
    }
  },
  startOf: function(time, unit, weekday) {
    switch (unit) {
      case "second":
        return startOfSecond(time);
      case "minute":
        return startOfMinute(time);
      case "hour":
        return startOfHour(time);
      case "day":
        return startOfDay(time);
      case "week":
        return startOfWeek(time);
      case "isoWeek":
        return startOfWeek(time, { weekStartsOn: +weekday });
      case "month":
        return startOfMonth(time);
      case "quarter":
        return startOfQuarter(time);
      case "year":
        return startOfYear(time);
      default:
        return time;
    }
  },
  endOf: function(time, unit) {
    switch (unit) {
      case "second":
        return endOfSecond(time);
      case "minute":
        return endOfMinute(time);
      case "hour":
        return endOfHour(time);
      case "day":
        return endOfDay(time);
      case "week":
        return endOfWeek(time);
      case "month":
        return endOfMonth(time);
      case "quarter":
        return endOfQuarter(time);
      case "year":
        return endOfYear(time);
      default:
        return time;
    }
  }
});

// src/app/features/administration/services/system-health-broadcast.service.ts
var SystemHealthBroadcastService = class _SystemHealthBroadcastService {
  broadcastService = inject(BroadcastEventMessageService);
  // Convenience methods for system health events
  broadcastHealthUpdate(data) {
    this.broadcastService.broadcast("system-health-update", {
      data,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
  }
  broadcastWebSocketStatus(connected, reason) {
    this.broadcastService.broadcast("websocket-status-change", {
      connected,
      reason
    });
  }
  broadcastServiceAlert(serviceName, severity, message) {
    this.broadcastService.broadcast("health-service-alert", {
      serviceName,
      severity,
      message
    });
  }
  // Subscription methods
  onHealthUpdate() {
    return this.broadcastService.on("system-health-update");
  }
  onWebSocketStatusChange() {
    return this.broadcastService.on("websocket-status-change");
  }
  onServiceAlert() {
    return this.broadcastService.on("health-service-alert");
  }
  onDashboardRefreshRequested(source) {
    return this.broadcastService.broadcast("dashboard-refresh-requested", {
      source: source ?? "manual-refresh"
    });
  }
  static \u0275fac = function SystemHealthBroadcastService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemHealthBroadcastService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SystemHealthBroadcastService, factory: _SystemHealthBroadcastService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemHealthBroadcastService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/services/mock-system-health.service.ts
var MockSystemHealthService = class _MockSystemHealthService {
  healthDataSubject = new BehaviorSubject(this.generateMockData());
  // Simulate real-time updates every 30 seconds
  constructor() {
    interval(3e4).subscribe(() => {
      this.healthDataSubject.next(this.generateMockData());
    });
  }
  getSystemHealth() {
    return this.healthDataSubject.asObservable();
  }
  // Simulate WebSocket connection status
  getConnectionStatus() {
    return interval(5e3).pipe(map(() => Math.random() > 0.1));
  }
  generateMockData() {
    const now = /* @__PURE__ */ new Date();
    return {
      overview: {
        services: this.generateServiceStatuses(),
        overallHealth: this.calculateOverallHealth(),
        lastUpdated: now.toISOString()
      },
      timeline: this.generateTimeline(),
      azureFunctions: this.generateFunctionMetrics(),
      eventFlow: this.generateEventFlowMetrics(),
      storage: this.generateStorageMetrics(),
      alerts: this.generateAlerts()
    };
  }
  generateServiceStatuses() {
    const services = [
      "Azure Functions",
      "Event Hub",
      "Cosmos DB",
      "PostgreSQL",
      "Blob Storage",
      "Redis Cache"
    ];
    return services.map((name) => {
      const now = /* @__PURE__ */ new Date();
      const baseService = {
        name,
        status: this.getRandomStatus(),
        uptime: 95 + Math.random() * 5,
        // 95-100%
        errorRate: Math.random() * 2,
        // 0-2%
        responseTime: 100 + Math.random() * 400,
        // 100-500ms
        lastUpdated: new Date(now.getTime() - Math.random() * 6e4).toISOString()
        // Within last minute
      };
      switch (name) {
        case "Event Hub":
          return __spreadProps(__spreadValues({}, baseService), {
            eventsPerSecond: Math.floor(1e3 + Math.random() * 9e3)
            // 1K-10K events/sec
          });
        case "Cosmos DB":
          return __spreadProps(__spreadValues({}, baseService), {
            ruPerSecond: Math.floor(100 + Math.random() * 900),
            // 100-1000 RU/s
            eventsPerSecond: Math.floor(500 + Math.random() * 2e3)
            // 500-2.5K events/sec
          });
        case "Azure Functions":
          return __spreadProps(__spreadValues({}, baseService), {
            eventsPerSecond: Math.floor(200 + Math.random() * 800)
            // 200-1K events/sec
          });
        case "PostgreSQL":
          return __spreadProps(__spreadValues({}, baseService), {
            eventsPerSecond: Math.floor(100 + Math.random() * 500)
            // 100-600 events/sec
          });
        case "Redis Cache":
          return __spreadProps(__spreadValues({}, baseService), {
            eventsPerSecond: Math.floor(2e3 + Math.random() * 8e3)
            // 2K-10K events/sec
          });
        case "Blob Storage":
          return __spreadProps(__spreadValues({}, baseService), {
            eventsPerSecond: Math.floor(50 + Math.random() * 200)
            // 50-250 events/sec
          });
        default:
          return baseService;
      }
    });
  }
  generateTimeline() {
    const timeline = [];
    const now = /* @__PURE__ */ new Date();
    for (let i = 0; i < 288; i++) {
      const timestamp = new Date(now.getTime() - i * 5 * 60 * 1e3);
      const status = this.getRandomStatus();
      timeline.push({
        timestamp: timestamp.toISOString(),
        status,
        incident: status !== "healthy" ? `${status} condition detected` : void 0
      });
    }
    return timeline.reverse();
  }
  generateFunctionMetrics() {
    const functions = [
      "ProcessTelemetryData",
      "ValidateMessages",
      "EnrichData",
      "ArchiveOldData",
      "GenerateReports"
    ];
    return functions.map((functionName) => ({
      functionName,
      executionCount: Math.floor(Math.random() * 1e4),
      errorRate: Math.random() * 5,
      // 0-5%
      avgDuration: 200 + Math.random() * 800,
      // 200-1000ms
      lastExecution: new Date(Date.now() - Math.random() * 3e5).toISOString()
      // Last 5 minutes
    }));
  }
  generateEventFlowMetrics() {
    return [
      {
        eventHubName: "telemetry-hub",
        incomingMessages: Math.floor(Math.random() * 5e4),
        outgoingMessages: Math.floor(Math.random() * 48e3),
        consumerLag: Math.floor(Math.random() * 100),
        throughputMbps: 10 + Math.random() * 90
      }
    ];
  }
  generateStorageMetrics() {
    return [
      {
        serviceName: "telemetry-cosmosdb",
        type: "cosmosdb",
        operations: Math.floor(Math.random() * 1e5),
        availability: 99.5 + Math.random() * 0.5,
        latency: 5 + Math.random() * 20,
        ruConsumption: Math.floor(Math.random() * 1e4)
      },
      {
        serviceName: "analytics-postgresql",
        type: "postgresql",
        operations: Math.floor(Math.random() * 5e4),
        availability: 99.8 + Math.random() * 0.2,
        latency: 10 + Math.random() * 40
      },
      {
        serviceName: "archive-blob",
        type: "blob",
        operations: Math.floor(Math.random() * 25e3),
        availability: 99.9 + Math.random() * 0.1,
        latency: 50 + Math.random() * 200
      }
    ];
  }
  generateAlerts() {
    const alertMessages = [
      "High error rate detected in ProcessTelemetryData function",
      "Event Hub consumer lag increasing",
      "Cosmos DB RU consumption above threshold",
      "PostgreSQL connection pool near capacity",
      "Blob storage latency spike detected"
    ];
    return alertMessages.map((message, index) => ({
      id: `alert-${index}`,
      severity: ["warning", "error", "critical"][Math.floor(Math.random() * 3)],
      message,
      source: "Azure Monitor",
      timestamp: new Date(Date.now() - Math.random() * 36e5).toISOString(),
      // Last hour
      resolved: Math.random() > 0.3
      // 70% resolved
    }));
  }
  getRandomStatus() {
    const rand = Math.random();
    if (rand < 0.7)
      return "healthy";
    if (rand < 0.9)
      return "warning";
    return "critical";
  }
  calculateOverallHealth() {
    const rand = Math.random();
    if (rand < 0.8)
      return "healthy";
    if (rand < 0.95)
      return "warning";
    return "critical";
  }
  static \u0275fac = function MockSystemHealthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MockSystemHealthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MockSystemHealthService, factory: _MockSystemHealthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MockSystemHealthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/features/administration/services/system-health.service.ts
var SystemHealthService = class _SystemHealthService {
  mockService = inject(MockSystemHealthService);
  broadcastService = inject(SystemHealthBroadcastService);
  destroyRef = inject(DestroyRef);
  systemHealth$ = this.mockService.getSystemHealth();
  currentHealthData;
  connectionStatus$ = this.mockService.getConnectionStatus();
  initializeHealthListeners() {
    this.systemHealth$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) => {
      this.currentHealthData = data;
      this.broadcastService.broadcastHealthUpdate(data);
    });
    this.mockService.getConnectionStatus().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((status) => {
      this.broadcastService.broadcastWebSocketStatus(status, status ? "Connected" : "Connection lost");
    });
  }
  refreshData() {
    this.broadcastService.onDashboardRefreshRequested("manual-refresh");
  }
  static \u0275fac = function SystemHealthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemHealthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SystemHealthService, factory: _SystemHealthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemHealthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/components/system-health/system-overview/system-overview.component.ts
var _c03 = () => [];
function SystemOverviewComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 22);
    \u0275\u0275text(2, " Service ");
    \u0275\u0275element(3, "p-sortIcon", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 24);
    \u0275\u0275text(5, " Status ");
    \u0275\u0275element(6, "p-sortIcon", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 26);
    \u0275\u0275text(8, " Response Time ");
    \u0275\u0275element(9, "p-sortIcon", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 28);
    \u0275\u0275text(11, " Events/sec ");
    \u0275\u0275element(12, "p-sortIcon", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 30);
    \u0275\u0275text(14, " RU/s ");
    \u0275\u0275element(15, "p-sortIcon", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 32);
    \u0275\u0275text(17, " Last Updated ");
    \u0275\u0275element(18, "p-sortIcon", 33);
    \u0275\u0275elementEnd()();
  }
}
function SystemOverviewComponent_ng_template_35_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const service_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, service_r1.eventsPerSecond), " ");
  }
}
function SystemOverviewComponent_ng_template_35_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function SystemOverviewComponent_ng_template_35_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const service_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, service_r1.ruPerSecond), " ");
  }
}
function SystemOverviewComponent_ng_template_35_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function SystemOverviewComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275element(4, "p-tag", 8);
    \u0275\u0275pipe(5, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275template(9, SystemOverviewComponent_ng_template_35_span_9_Template, 3, 3, "span", 34)(10, SystemOverviewComponent_ng_template_35_ng_template_10_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275template(13, SystemOverviewComponent_ng_template_35_span_13_Template, 3, 3, "span", 34)(14, SystemOverviewComponent_ng_template_35_ng_template_14_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span", 35);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "timeAgo");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const service_r1 = ctx.$implicit;
    const noEvents_r2 = \u0275\u0275reference(11);
    const noRu_r3 = \u0275\u0275reference(15);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", \u0275\u0275pipeBind1(5, 10, service_r1.status))("severity", ctx_r3.getStatusSeverity(service_r1.status))("rounded", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", service_r1.responseTime.toFixed(0), "ms");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", service_r1.eventsPerSecond)("ngIfElse", noEvents_r2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", service_r1.ruPerSecond)("ngIfElse", noRu_r3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 12, service_r1.lastUpdated), " ");
  }
}
var SystemOverviewComponent = class _SystemOverviewComponent {
  broadcastService = inject(SystemHealthBroadcastService);
  healthService = inject(SystemHealthService);
  cdr = inject(ChangeDetectorRef);
  destroyRef = inject(DestroyRef);
  healthData;
  connected = true;
  // Time range selector
  timeRanges = [6, 12, 24];
  // Hours
  timeRangeOptions = this.timeRanges.map((range) => ({
    label: range + "h",
    value: range
  }));
  selectedTimeRange = 6;
  // Default to 6 hours
  // Chart data for system health timeline
  timelineChartData = { datasets: [] };
  timelineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "bottom",
        labels: {
          generateLabels: (_chart) => {
            return [
              {
                text: "Healthy",
                fillStyle: "#10b981",
                // Green
                strokeStyle: "#10b981",
                lineWidth: 2,
                font: {
                  family: "'Ubuntu', sans-serif",
                  size: 12
                }
              },
              {
                text: "Warning",
                fillStyle: "#f59e0b",
                // Yellow
                strokeStyle: "#f59e0b",
                lineWidth: 2,
                font: {
                  family: "'Ubuntu', sans-serif",
                  size: 12
                }
              },
              {
                text: "Critical",
                fillStyle: "#ef4444",
                // Red
                strokeStyle: "#ef4444",
                lineWidth: 2,
                font: {
                  family: "'Ubuntu', sans-serif",
                  size: 12
                }
              }
            ];
          }
        }
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const dataPoint = context.raw;
            const status = context.parsed.y === 1 ? "Healthy" : context.parsed.y === 2 ? "Warning" : "Critical";
            let label = `Status: ${status}`;
            if (isDefined(dataPoint.incident)) {
              label += ` | Incident: ${dataPoint.incident}`;
            }
            return label;
          }
        },
        titleFont: {
          family: "'Ubuntu', sans-serif"
        },
        bodyFont: {
          family: "'Ubuntu', sans-serif"
        }
      }
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "hour"
        },
        ticks: {
          font: {
            family: "'Ubuntu' sans-serif"
          }
        }
      },
      y: {
        beginAtZero: true,
        max: 3,
        ticks: {
          stepSize: 1,
          callback: function(value) {
            const labels = ["", "Healthy", "Warning", "Critical"];
            if (typeof value === "number" && value >= 0 && value < labels.length) {
              return labels[value];
            }
            return "";
          },
          font: {
            family: "'Ubuntu', sans-serif"
          }
        }
      }
    },
    elements: {
      line: {
        stepped: true
      }
    }
  };
  ngOnInit() {
    this.healthService.initializeHealthListeners();
    const currentHealthData = this.healthService.currentHealthData;
    if (currentHealthData) {
      this.healthData = currentHealthData;
      this.updateTimelineChart();
      this.cdr.detectChanges();
    }
    this.broadcastService.onHealthUpdate().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((update) => {
      this.healthData = update.data;
      this.updateTimelineChart();
      this.cdr.detectChanges();
    });
    this.broadcastService.onWebSocketStatusChange().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((status) => {
      this.connected = status.connected;
    });
  }
  getStatusSeverity(status) {
    switch (status) {
      case "healthy":
        return "success";
      case "warning":
        return "warn";
      case "critical":
        return "danger";
      default:
        return "info";
    }
  }
  getHealthyServicesCount() {
    const count = this.healthData?.overview?.services?.filter((s) => s.status === "healthy").length;
    return count ?? 0;
  }
  getTotalServicesCount() {
    const count = this.healthData?.overview?.services?.length;
    return count ?? 0;
  }
  getAverageErrorRate() {
    const services = this.healthData?.overview?.services;
    if (!services || services.length === 0)
      return 0;
    const totalErrorRate = services.reduce((sum, s) => sum + s.errorRate, 0);
    return totalErrorRate / services.length;
  }
  getAverageResponseTime() {
    const services = this.healthData?.overview?.services;
    if (!services || services.length === 0)
      return 0;
    const totalResponseTime = services.reduce((sum, s) => sum + s.responseTime, 0);
    return totalResponseTime / services.length;
  }
  selectTimeRange(hours) {
    this.selectedTimeRange = hours;
    this.updateTimelineChart();
    this.cdr.detectChanges();
  }
  onTimeRangeChange(event) {
    this.selectTimeRange(+event.value);
  }
  updateTimelineChart() {
    if (!this.healthData?.timeline)
      return;
    const now = /* @__PURE__ */ new Date();
    const cutoff = new Date(now.getTime() - this.selectedTimeRange * 60 * 60 * 1e3);
    const filteredTimeline = this.healthData.timeline.filter((entry) => new Date(entry.timestamp) >= cutoff);
    const data = filteredTimeline.map((entry) => ({
      x: new Date(entry.timestamp).valueOf(),
      y: entry.status === "healthy" ? 1 : entry.status === "warning" ? 2 : 3,
      incident: entry.incident
    }));
    const getStatusColor = (y, type) => {
      if (y === 3)
        return type === "border" ? "var(--red-500)" : "rgba(239, 68, 68, 0.2)";
      if (y === 2)
        return type === "border" ? "var(--yellow-500)" : "rgba(234, 179, 8, 0.2)";
      return type === "border" ? "var(--green-500)" : "rgba(34, 197, 94, 0.2)";
    };
    this.timelineChartData = {
      datasets: [
        {
          label: "System Health",
          data,
          fill: true,
          tension: 0.4,
          pointRadius: data.map((d) => isDefined(d.incident) ? 5 : 0),
          segment: {
            borderColor: (ctx) => {
              const y = data[ctx.p0DataIndex].y;
              return getStatusColor(y, "border");
            },
            backgroundColor: (ctx) => {
              const y = data[ctx.p0DataIndex].y;
              return getStatusColor(y, "background");
            }
          }
        }
      ]
    };
    this.cdr.markForCheck();
  }
  static \u0275fac = function SystemOverviewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemOverviewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemOverviewComponent, selectors: [["app-system-overview"]], decls: 36, vars: 28, consts: [["noEvents", ""], ["noRu", ""], [1, "system-overview"], [1, "p-4", "rounded-md", "m-4", "flex", "items-center", "gap-2", 3, "ngClass"], [1, "pi"], [1, "grid", "grid-cols-[repeat(auto-fit,minmax(250px,1fr))]", "gap-4", "m-4"], ["header", "Overall Health"], [1, "metric-content"], [3, "value", "severity", "rounded"], [1, "pl-2"], ["header", "Active Services"], [1, "text-[2rem]", "font-bold", "text-primary", "mb-2"], ["header", "Error Rate"], ["header", "Avg Response Time"], [1, "m-4", 3, "header"], [1, "mb-4"], [1, "p-2", 3, "ngModelChange", "onChange", "ngModel", "options"], ["type", "line", "height", "200px", 3, "data", "options"], ["header", "Service Health Status", 1, "m-4"], [3, "value", "sortMode"], ["pTemplate", "header"], ["pTemplate", "body"], ["pSortableColumn", "name", "scope", "col"], ["field", "name"], ["pSortableColumn", "status", "scope", "col"], ["field", "status"], ["pSortableColumn", "responseTime", "scope", "col"], ["field", "responseTime"], ["pSortableColumn", "eventsPerSecond", "scope", "col"], ["field", "eventsPerSecond"], ["pSortableColumn", "ruPerSecond", "scope", "col"], ["field", "ruPerSecond"], ["pSortableColumn", "lastUpdated", "scope", "col"], ["field", "lastUpdated"], [4, "ngIf", "ngIfElse"], [1, "text-sm", "text-gray-600"], [1, "text-gray-400"]], template: function SystemOverviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
      \u0275\u0275element(2, "i", 4);
      \u0275\u0275elementStart(3, "span");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 5)(6, "p-card", 6)(7, "div", 7);
      \u0275\u0275element(8, "p-tag", 8);
      \u0275\u0275pipe(9, "titlecase");
      \u0275\u0275elementStart(10, "small", 9);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "p-card", 10)(14, "div", 11);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "small");
      \u0275\u0275text(17, "Services running normally");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "p-card", 12)(19, "div", 11);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "small");
      \u0275\u0275text(22, "Average across all services");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "p-card", 13)(24, "div", 11);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "small");
      \u0275\u0275text(27, "Average response time");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "p-card", 14)(29, "div", 15)(30, "p-select", 16);
      \u0275\u0275twoWayListener("ngModelChange", function SystemOverviewComponent_Template_p_select_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedTimeRange, $event) || (ctx.selectedTimeRange = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function SystemOverviewComponent_Template_p_select_onChange_30_listener($event) {
        return ctx.onTimeRangeChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275element(31, "p-chart", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "p-card", 18)(33, "p-table", 19);
      \u0275\u0275template(34, SystemOverviewComponent_ng_template_34_Template, 19, 0, "ng-template", 20)(35, SystemOverviewComponent_ng_template_35_Template, 20, 14, "ng-template", 21);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.connected ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800");
      \u0275\u0275advance();
      \u0275\u0275classProp("pi-wifi", ctx.connected)("pi-times", !ctx.connected);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.connected ? "Real-time data connected" : "Connection lost - showing cached data");
      \u0275\u0275advance(4);
      \u0275\u0275property("value", \u0275\u0275pipeBind1(9, 22, ctx.healthData == null ? null : ctx.healthData.overview == null ? null : ctx.healthData.overview.overallHealth) || "Unknown")("severity", ctx.getStatusSeverity((ctx.healthData == null ? null : ctx.healthData.overview == null ? null : ctx.healthData.overview.overallHealth) || "unknown"))("rounded", true);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("Last updated: ", \u0275\u0275pipeBind2(12, 24, ctx.healthData == null ? null : ctx.healthData.overview == null ? null : ctx.healthData.overview.lastUpdated, "short"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2(" ", ctx.getHealthyServicesCount(), " / ", ctx.getTotalServicesCount(), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.getAverageErrorRate().toFixed(2), "% ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.getAverageResponseTime().toFixed(0), "ms ");
      \u0275\u0275advance(3);
      \u0275\u0275property("header", \u0275\u0275interpolate1("System Health Timeline (Last ", ctx.selectedTimeRange, " Hours)"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedTimeRange);
      \u0275\u0275property("options", ctx.timeRangeOptions);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.timelineChartData)("options", ctx.timelineChartOptions);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", (ctx.healthData == null ? null : ctx.healthData.overview == null ? null : ctx.healthData.overview.services) || \u0275\u0275pureFunction0(27, _c03))("sortMode", "multiple");
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgIf,
    UpperCasePipe,
    DecimalPipe,
    TitleCasePipe,
    DatePipe,
    TableModule,
    Table,
    PrimeTemplate,
    SortableColumn,
    SortIcon,
    TagModule,
    Tag,
    CardModule,
    Card,
    ProgressBarModule,
    ChartModule,
    UIChart,
    ButtonModule,
    SelectModule,
    Select,
    FormsModule,
    NgControlStatus,
    NgModel,
    TimeAgoPipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemOverviewComponent, [{
    type: Component,
    args: [{ selector: "app-system-overview", imports: [
      CommonModule,
      TableModule,
      TagModule,
      CardModule,
      ProgressBarModule,
      ChartModule,
      ButtonModule,
      SelectModule,
      FormsModule,
      TimeAgoPipe
    ], template: `<div class="system-overview">
  <!-- Connection Status Banner -->
  <div
    class="p-4 rounded-md m-4 flex items-center gap-2"
    [ngClass]="
      connected ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
    "
  >
    <i class="pi" [class.pi-wifi]="connected" [class.pi-times]="!connected"></i>
    <span>{{
      connected
        ? 'Real-time data connected'
        : 'Connection lost - showing cached data'
    }}</span>
  </div>

  <!-- Key Metrics Cards -->
  <div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 m-4">
    <p-card header="Overall Health">
      <div class="metric-content">
        <p-tag
          [value]="
            (healthData?.overview?.overallHealth | titlecase) || 'Unknown'
          "
          [severity]="
            getStatusSeverity(healthData?.overview?.overallHealth || 'unknown')
          "
          [rounded]="true"
        >
        </p-tag>
        <small class="pl-2"
          >Last updated:
          {{ healthData?.overview?.lastUpdated | date: 'short' }}</small
        >
      </div>
    </p-card>

    <p-card header="Active Services">
      <div class="text-[2rem] font-bold text-primary mb-2">
        {{ getHealthyServicesCount() }}
        /
        {{ getTotalServicesCount() }}
      </div>
      <small>Services running normally</small>
    </p-card>

    <p-card header="Error Rate">
      <div class="text-[2rem] font-bold text-primary mb-2">
        {{ getAverageErrorRate().toFixed(2) }}%
      </div>
      <small>Average across all services</small>
    </p-card>

    <p-card header="Avg Response Time">
      <div class="text-[2rem] font-bold text-primary mb-2">
        {{ getAverageResponseTime().toFixed(0) }}ms
      </div>
      <small>Average response time</small>
    </p-card>
  </div>

  <!-- System Health Timeline -->
  <p-card
    header="System Health Timeline (Last {{ selectedTimeRange }} Hours)"
    class="m-4"
  >
    <div class="mb-4">
      <p-select
        class="p-2"
        [(ngModel)]="selectedTimeRange"
        [options]="timeRangeOptions"
        (onChange)="onTimeRangeChange($event)"
      >
      </p-select>
    </div>
    <p-chart
      type="line"
      [data]="timelineChartData"
      [options]="timelineChartOptions"
      height="200px"
    ></p-chart>
  </p-card>

  <!-- Services Status Table -->
  <p-card header="Service Health Status" class="m-4">
    <p-table
      [value]="healthData?.overview?.services || []"
      [sortMode]="'multiple'"
    >
      <ng-template pTemplate="header">
        <tr>
          <th pSortableColumn="name" scope="col">
            Service <p-sortIcon field="name"></p-sortIcon>
          </th>
          <th pSortableColumn="status" scope="col">
            Status <p-sortIcon field="status"></p-sortIcon>
          </th>
          <th pSortableColumn="responseTime" scope="col">
            Response Time <p-sortIcon field="responseTime"></p-sortIcon>
          </th>
          <th pSortableColumn="eventsPerSecond" scope="col">
            Events/sec <p-sortIcon field="eventsPerSecond"></p-sortIcon>
          </th>
          <th pSortableColumn="ruPerSecond" scope="col">
            RU/s <p-sortIcon field="ruPerSecond"></p-sortIcon>
          </th>
          <th pSortableColumn="lastUpdated" scope="col">
            Last Updated <p-sortIcon field="lastUpdated"></p-sortIcon>
          </th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-service>
        <tr>
          <td>{{ service.name }}</td>
          <td>
            <p-tag
              [value]="service.status | uppercase"
              [severity]="getStatusSeverity(service.status)"
              [rounded]="true"
            >
            </p-tag>
          </td>
          <td>{{ service.responseTime.toFixed(0) }}ms</td>
          <td>
            <span *ngIf="service.eventsPerSecond; else noEvents">
              {{ service.eventsPerSecond | number }}
            </span>
            <ng-template #noEvents>
              <span class="text-gray-400">\u2014</span>
            </ng-template>
          </td>
          <td>
            <span *ngIf="service.ruPerSecond; else noRu">
              {{ service.ruPerSecond | number }}
            </span>
            <ng-template #noRu>
              <span class="text-gray-400">\u2014</span>
            </ng-template>
          </td>
          <td>
            <span class="text-sm text-gray-600">
              {{ service.lastUpdated | timeAgo }}
            </span>
          </td>
        </tr>
      </ng-template>
    </p-table>
  </p-card>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemOverviewComponent, { className: "SystemOverviewComponent", filePath: "src/app/features/administration/components/system-health/system-overview/system-overview.component.ts", lineNumber: 49 });
})();

// src/app/features/administration/components/system-health/system-health-routing.module.ts
var routes = [
  {
    path: "",
    component: SystemHealthContainerComponent,
    children: [
      {
        path: "",
        redirectTo: "overview",
        pathMatch: "full"
      },
      {
        path: "overview",
        component: SystemOverviewComponent
      },
      {
        path: "azure-functions",
        component: AzureFunctionsComponent
      },
      {
        path: "event-flow",
        component: EventFlowComponent
      },
      {
        path: "data-storage",
        component: DataStorageComponent
      },
      {
        path: "errors-and-alerts",
        component: ErrorsAndAlertsComponent
      }
    ]
  }
];
var SystemHealthRoutingModule = class _SystemHealthRoutingModule {
  static \u0275fac = function SystemHealthRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemHealthRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SystemHealthRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemHealthRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();
export {
  SystemHealthRoutingModule
};
/*! Bundled license information:

chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.esm.js:
  (*!
   * chartjs-adapter-date-fns v3.0.0
   * https://www.chartjs.org
   * (c) 2022 chartjs-adapter-date-fns Contributors
   * Released under the MIT license
   *)
*/
//# sourceMappingURL=chunk-V5CIZNGE.js.map
