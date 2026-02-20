import {
  EntityDetailsService
} from "./chunk-SQXJEHHB.js";
import {
  DynamicTabPanelComponent
} from "./chunk-62QE5I2S.js";
import "./chunk-6KKY4MOV.js";
import {
  Tag,
  TagModule
} from "./chunk-36BRMQBM.js";
import "./chunk-YKG5LWOW.js";
import "./chunk-OKZD7IEG.js";
import "./chunk-FC26RJEU.js";
import {
  ChartModule,
  UIChart
} from "./chunk-SBBOYAQU.js";
import "./chunk-SD7CD6SE.js";
import "./chunk-EY6ER4MP.js";
import "./chunk-LN4L6VZC.js";
import {
  Chart,
  adapters,
  registerables
} from "./chunk-DXDVPHIO.js";
import {
  Card,
  CardModule
} from "./chunk-ERWSOVMD.js";
import {
  DataView,
  DataViewModule,
  TimeAgoPipe,
  compareAsc,
  differenceInMilliseconds,
  differenceInMonths,
  differenceInSeconds,
  endOfDay,
  endOfMonth,
  getRoundingMethod
} from "./chunk-GYVQCOXJ.js";
import "./chunk-PVMHRDPC.js";
import {
  RowToggler,
  SortIcon,
  SortableColumn,
  Table,
  TableModule
} from "./chunk-NVVPOS2X.js";
import "./chunk-MZGGMYX2.js";
import "./chunk-JHNPE5AD.js";
import "./chunk-BUQLELQY.js";
import "./chunk-IDQPRALM.js";
import {
  ProgressBarModule
} from "./chunk-T5WYQJMH.js";
import "./chunk-W5XLQNKH.js";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  TabsModule
} from "./chunk-B2VOHKSQ.js";
import "./chunk-RAMUTPV2.js";
import "./chunk-3ELTUYPI.js";
import "./chunk-IM6TEFQQ.js";
import "./chunk-PAFIW2EK.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  Select,
  SelectModule
} from "./chunk-4CAIP3KE.js";
import "./chunk-BJMVTXFZ.js";
import "./chunk-2UAXSVOA.js";
import {
  Button,
  ButtonModule
} from "./chunk-PBS4GE25.js";
import {
  PrimeTemplate
} from "./chunk-YL4UBWIM.js";
import {
  ActivatedRoute,
  BroadcastEventMessageService,
  CommonModule,
  DatePipe,
  DecimalPipe,
  HttpClient,
  NavigationEnd,
  NgClass,
  PercentPipe,
  Router,
  RouterOutlet,
  constructFrom,
  differenceInCalendarDays,
  enUS,
  environment,
  format,
  getDefaultOptions,
  getDefaultOptions2,
  getISOWeek,
  getTimezoneOffsetInMilliseconds,
  getWeek,
  getWeekYear,
  isDefined,
  isProtectedDayOfYearToken,
  isProtectedWeekYearToken,
  isValid,
  longFormatters,
  millisecondsInHour,
  millisecondsInMinute,
  millisecondsInSecond,
  minutesInDay,
  minutesInMonth,
  minutesInYear,
  normalizeDates,
  startOfDay,
  startOfISOWeek,
  startOfWeek,
  startOfYear,
  takeUntilDestroyed,
  toDate,
  warnOrThrowProtectedError
} from "./chunk-UNWLID6Q.js";
import {
  BehaviorSubject,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  HostBinding,
  Injectable,
  Subject,
  ViewChild,
  catchError,
  filter,
  forkJoin,
  inject,
  lastValueFrom,
  map,
  of,
  setClassMetadata,
  signal,
  timer,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-4KHPVNTA.js";
import {
  __spreadValues
} from "./chunk-7WUTQBRG.js";

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

// node_modules/date-fns/formatDistanceStrict.js
function formatDistanceStrict(laterDate, earlierDate, options) {
  const defaultOptions = getDefaultOptions();
  const locale = options?.locale ?? defaultOptions.locale ?? enUS;
  const comparison = compareAsc(laterDate, earlierDate);
  if (isNaN(comparison)) {
    throw new RangeError("Invalid time value");
  }
  const localizeOptions = Object.assign({}, options, {
    addSuffix: options?.addSuffix,
    comparison
  });
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    ...comparison > 0 ? [earlierDate, laterDate] : [laterDate, earlierDate]
  );
  const roundingMethod = getRoundingMethod(options?.roundingMethod ?? "round");
  const milliseconds = earlierDate_.getTime() - laterDate_.getTime();
  const minutes = milliseconds / millisecondsInMinute;
  const timezoneOffset = getTimezoneOffsetInMilliseconds(earlierDate_) - getTimezoneOffsetInMilliseconds(laterDate_);
  const dstNormalizedMinutes = (milliseconds - timezoneOffset) / millisecondsInMinute;
  const defaultUnit = options?.unit;
  let unit;
  if (!defaultUnit) {
    if (minutes < 1) {
      unit = "second";
    } else if (minutes < 60) {
      unit = "minute";
    } else if (minutes < minutesInDay) {
      unit = "hour";
    } else if (dstNormalizedMinutes < minutesInMonth) {
      unit = "day";
    } else if (dstNormalizedMinutes < minutesInYear) {
      unit = "month";
    } else {
      unit = "year";
    }
  } else {
    unit = defaultUnit;
  }
  if (unit === "second") {
    const seconds = roundingMethod(milliseconds / 1e3);
    return locale.formatDistance("xSeconds", seconds, localizeOptions);
  } else if (unit === "minute") {
    const roundedMinutes = roundingMethod(minutes);
    return locale.formatDistance("xMinutes", roundedMinutes, localizeOptions);
  } else if (unit === "hour") {
    const hours = roundingMethod(minutes / 60);
    return locale.formatDistance("xHours", hours, localizeOptions);
  } else if (unit === "day") {
    const days = roundingMethod(dstNormalizedMinutes / minutesInDay);
    return locale.formatDistance("xDays", days, localizeOptions);
  } else if (unit === "month") {
    const months = roundingMethod(dstNormalizedMinutes / minutesInMonth);
    return months === 12 && defaultUnit !== "month" ? locale.formatDistance("xYears", 1, localizeOptions) : locale.formatDistance("xMonths", months, localizeOptions);
  } else {
    const years = roundingMethod(dstNormalizedMinutes / minutesInYear);
    return locale.formatDistance("xYears", years, localizeOptions);
  }
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

// src/app/core/services/websocket.service.ts
var WebSocketService = class _WebSocketService {
  ws = null;
  config = null;
  reconnectAttempt = 0;
  messageSubject = new Subject();
  statusSubject = new BehaviorSubject(false);
  destroyRef = inject(DestroyRef);
  messages$ = this.messageSubject.asObservable();
  status$ = this.statusSubject.asObservable();
  connect(config) {
    this.config = __spreadValues({
      reconnectInterval: 5e3,
      reconnectAttempts: 10,
      heartbeatInterval: 3e4
    }, config);
    this.createConnection();
  }
  disconnect() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
      this.statusSubject.next(false);
    }
  }
  send(message) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(message));
    } else {
      console.error("WebSocket is not connected");
    }
  }
  subscribe(topics) {
    this.send({
      type: "subscribe",
      topics
    });
  }
  createConnection() {
    if (!this.config)
      return;
    try {
      this.ws = new WebSocket(this.config.url);
      this.ws.onopen = () => {
        this.statusSubject.next(true);
        this.reconnectAttempt = 0;
        this.subscribe(["health", "metrics", "alerts"]);
      };
      this.ws.onmessage = (event) => {
        try {
          const message = JSON.parse(event.data);
          this.messageSubject.next(message);
        } catch (error) {
          console.error("Error parsing WebSocket message:", error);
        }
      };
      this.ws.onerror = (error) => {
        console.error("WebSocket error:", error);
      };
      this.ws.onclose = () => {
        this.statusSubject.next(false);
        this.attemptReconnect();
      };
    } catch (error) {
      console.error("Error creating WebSocket connection:", error);
      this.attemptReconnect();
    }
  }
  attemptReconnect() {
    if (!this.config)
      return;
    const maxAttempts = this.config.reconnectAttempts ?? 10;
    if (this.reconnectAttempt >= maxAttempts) {
      console.error("Max reconnection attempts reached");
      return;
    }
    this.reconnectAttempt++;
    const reconnectDelay = this.config.reconnectInterval ?? 5e3;
    timer(reconnectDelay).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.createConnection();
    });
  }
  isConnected() {
    return this.ws?.readyState === WebSocket.OPEN;
  }
  static \u0275fac = function WebSocketService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WebSocketService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WebSocketService, factory: _WebSocketService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WebSocketService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

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

// src/app/core/services/real-system-health.service.ts
var RealSystemHealthService = class _RealSystemHealthService {
  http = inject(HttpClient);
  wsService = inject(WebSocketService);
  broadcastService = inject(SystemHealthBroadcastService);
  destroyRef = inject(DestroyRef);
  healthDataSubject = new BehaviorSubject(null);
  systemHealth$ = this.healthDataSubject.asObservable();
  initialized = false;
  initialize() {
    if (this.initialized)
      return;
    this.initialized = true;
    this.wsService.connect({
      url: environment.wsUrl,
      reconnectInterval: 5e3,
      reconnectAttempts: 10
    });
    this.wsService.status$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((connected) => {
      this.broadcastService.broadcastWebSocketStatus(connected, connected ? "Connected" : "Disconnected");
      if (connected) {
        void this.fetchAllHealthData();
      }
    });
    this.wsService.messages$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((message) => {
      this.handleWebSocketMessage(message);
    });
  }
  handleWebSocketMessage(message) {
    switch (message.type) {
      case "health_update":
        if (message["data"] != null) {
          this.updateHealthData(message["data"]);
        }
        break;
      case "service_alert":
        this.broadcastService.broadcastServiceAlert(message["serviceName"], message["severity"], message["message"]);
        break;
      default:
        break;
    }
  }
  async fetchAllHealthData(timeRange) {
    try {
      const [serviceDetails, functions, storage, throughput, alerts] = await Promise.all([
        lastValueFrom(this.fetchServiceDetails(timeRange)),
        lastValueFrom(this.fetchFunctions(timeRange)),
        lastValueFrom(this.fetchStorageMetrics(timeRange)),
        lastValueFrom(this.fetchThroughputMetrics(timeRange)),
        lastValueFrom(this.fetchRecentAlerts(timeRange))
      ]);
      const overview = {
        services: serviceDetails ?? [],
        overallHealth: this.calculateOverallHealth(serviceDetails ?? []),
        lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
      };
      const healthData = {
        overview,
        timeline: [],
        azureFunctions: functions ?? [],
        eventFlow: throughput ?? {
          timeRange: timeRange ?? "1h",
          averageRequestsPerSecond: 0,
          averageEventsPerSecond: 0,
          averageDependenciesPerSecond: 0,
          peakRequestsPerSecond: 0,
          peakEventsPerSecond: 0,
          totalRequests: 0,
          totalEvents: 0,
          totalDependencies: 0,
          dataPoints: []
        },
        storage: storage ?? {
          timeRange: timeRange ?? "1h",
          totalOperations: 0,
          totalSuccessRate: 0,
          storageServices: []
        },
        alerts: alerts ?? {
          timeRange: timeRange ?? "1h",
          totalAlerts: 0,
          criticalCount: 0,
          errorCount: 0,
          warningCount: 0,
          informationCount: 0,
          alerts: []
        }
      };
      this.healthDataSubject.next(healthData);
      this.broadcastService.broadcastHealthUpdate(healthData);
    } catch (error) {
      console.error("Error fetching health data:", error);
    }
  }
  fetchServiceDetails(timeRange) {
    const queryParam = timeRange != null && timeRange !== "" ? `?timeRange=${timeRange}` : "";
    const url = `${environment.apiUrl}/api/health/service-details${queryParam}`;
    return this.http.get(url).pipe(catchError((error) => {
      console.error("Error fetching service details:", error);
      return of(null);
    }));
  }
  fetchFunctions(timeRange) {
    const queryParam = timeRange != null && timeRange !== "" ? `?timeRange=${timeRange}` : "";
    const url = `${environment.apiUrl}/api/health/functions${queryParam}`;
    return this.http.get(url).pipe(catchError((error) => {
      console.error("Error fetching functions:", error);
      return of(null);
    }));
  }
  fetchStorageMetrics(timeRange) {
    const queryParam = timeRange != null && timeRange !== "" ? `?timeRange=${timeRange}` : "";
    const url = `${environment.apiUrl}/api/metrics/storage${queryParam}`;
    return this.http.get(url).pipe(catchError((error) => {
      console.error("Error fetching storage metrics:", error);
      return of(null);
    }));
  }
  fetchThroughputMetrics(timeRange) {
    const queryParam = timeRange != null && timeRange !== "" ? `?timeRange=${timeRange}` : "";
    const url = `${environment.apiUrl}/api/metrics/throughput${queryParam}`;
    return this.http.get(url).pipe(catchError((error) => {
      console.error("Error fetching throughput metrics:", error);
      return of(null);
    }));
  }
  fetchRecentAlerts(timeRange) {
    const queryParam = timeRange != null && timeRange !== "" ? `?timeRange=${timeRange}` : "";
    const url = `${environment.apiUrl}/api/alerts/recent${queryParam}`;
    return this.http.get(url).pipe(catchError((error) => {
      console.error("Error fetching recent alerts:", error);
      return of(null);
    }));
  }
  fetchErrorTimeline(timeRange) {
    const queryParam = timeRange != null && timeRange !== "" ? `?timeRange=${timeRange}` : "";
    const url = `${environment.apiUrl}/api/alerts/timeline${queryParam}`;
    return this.http.get(url).pipe(catchError((error) => {
      console.error("Error fetching error timeline:", error);
      return of(null);
    }));
  }
  updateHealthData(update) {
    const currentData = this.healthDataSubject.value;
    if (currentData) {
      const updatedData = __spreadValues(__spreadValues({}, currentData), update);
      this.healthDataSubject.next(updatedData);
      this.broadcastService.broadcastHealthUpdate(updatedData);
    }
  }
  fetchFunctionTimeline(timeRange, granularity) {
    const params = new URLSearchParams();
    if (isDefined(timeRange)) {
      params.append("timeRange", timeRange);
    }
    if (isDefined(granularity)) {
      params.append("granularity", granularity);
    }
    const queryParam = params.toString() ? `?${params.toString()}` : "";
    const url = `${environment.apiUrl}/api/health/functions/timeline${queryParam}`;
    return this.http.get(url).pipe(catchError((error) => {
      console.error("Error fetching function timeline:", error);
      return of(null);
    }));
  }
  fetchFunctionResources(timeRange) {
    const queryParam = timeRange != null && timeRange !== "" ? `?timeRange=${timeRange}` : "";
    const url = `${environment.apiUrl}/api/health/functions/resources${queryParam}`;
    return this.http.get(url).pipe(catchError((error) => {
      console.error("Error fetching function resources:", error);
      return of(null);
    }));
  }
  fetchFunctionDependencies(timeRange) {
    const queryParam = timeRange != null && timeRange !== "" ? `?timeRange=${timeRange}` : "";
    const url = `${environment.apiUrl}/api/health/functions/dependencies${queryParam}`;
    return this.http.get(url).pipe(catchError((error) => {
      console.error("Error fetching function dependencies:", error);
      return of(null);
    }));
  }
  refreshData(timeRange) {
    void this.fetchAllHealthData(timeRange);
  }
  getCurrentHealthData() {
    return this.healthDataSubject.value;
  }
  // Public methods for components to fetch specific data types
  fetchAlerts(timeRange) {
    return this.fetchRecentAlerts(timeRange);
  }
  fetchServices(timeRange) {
    return this.fetchServiceDetails(timeRange);
  }
  fetchAzureFunctions(timeRange) {
    return this.fetchFunctions(timeRange);
  }
  fetchStorage(timeRange) {
    return this.fetchStorageMetrics(timeRange);
  }
  fetchEventFlow(timeRange) {
    return this.fetchThroughputMetrics(timeRange);
  }
  fetchErrorTimelineData(timeRange) {
    return this.fetchErrorTimeline(timeRange);
  }
  calculateOverallHealth(services) {
    if (services.length === 0)
      return "Healthy";
    const criticalCount = services.filter((s) => s.status === "Critical").length;
    const warningCount = services.filter((s) => s.status === "Warning").length;
    if (criticalCount > 0)
      return "Critical";
    if (warningCount > 0)
      return "Warning";
    return "Healthy";
  }
  static \u0275fac = function RealSystemHealthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RealSystemHealthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RealSystemHealthService, factory: _RealSystemHealthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RealSystemHealthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/components/system-health/azure-functions/azure-functions.component.ts
var _c0 = ["timelineCanvas"];
var _c1 = ["coldStartCanvas"];
var _c2 = () => [5, 10, 20, 50];
var _forTrack0 = ($index, $item) => $item.dependencyName;
function AzureFunctionsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "p-card")(2, "div", 26)(3, "div", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 28);
    \u0275\u0275text(6, "Total Functions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "p-card")(8, "div", 26)(9, "div", 29);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 28);
    \u0275\u0275text(13, "Total Executions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "p-card")(15, "div", 26)(16, "div", 30);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 28);
    \u0275\u0275text(20, "Avg Success Rate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "p-card")(22, "div", 26)(23, "div", 31);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 28);
    \u0275\u0275text(27, "Cold Starts");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.functions.length, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 4, ctx_r0.getTotalExecutions(), "1.0-0"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(18, 7, ctx_r0.getAverageSuccessRate(), "1.1-1"), "% ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(25, 10, ctx_r0.resources.totalColdStarts, "1.0-0"), " ");
  }
}
function AzureFunctionsComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "i", 32);
    \u0275\u0275elementStart(2, "p", 33);
    \u0275\u0275text(3, "Loading functions data...");
    \u0275\u0275elementEnd()();
  }
}
function AzureFunctionsComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "i", 34);
    \u0275\u0275elementStart(2, "p", 35);
    \u0275\u0275text(3, "No functions data available");
    \u0275\u0275elementEnd()();
  }
}
function AzureFunctionsComponent_Conditional_25_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275element(1, "th", 36);
    \u0275\u0275elementStart(2, "th", 37);
    \u0275\u0275text(3, " Function Name ");
    \u0275\u0275element(4, "p-sortIcon", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 39);
    \u0275\u0275text(6, " Status ");
    \u0275\u0275element(7, "p-sortIcon", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 41);
    \u0275\u0275text(9, " Executions ");
    \u0275\u0275element(10, "p-sortIcon", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 43);
    \u0275\u0275text(12, " Success Rate ");
    \u0275\u0275element(13, "p-sortIcon", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 45);
    \u0275\u0275text(15, " Avg Duration ");
    \u0275\u0275element(16, "p-sortIcon", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 47);
    \u0275\u0275text(18, " P95 Duration ");
    \u0275\u0275element(19, "p-sortIcon", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 49);
    \u0275\u0275text(21, " Last Execution ");
    \u0275\u0275element(22, "p-sortIcon", 50);
    \u0275\u0275elementEnd()();
  }
}
function AzureFunctionsComponent_Conditional_25_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "p-button", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275element(7, "p-tag", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 53);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 53)(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 53);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 53);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const func_r2 = ctx.$implicit;
    const expanded_r3 = ctx.expanded;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("pRowToggler", func_r2)("icon", expanded_r3 ? "pi pi-chevron-down" : "pi pi-chevron-right");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(func_r2.functionName);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", func_r2.status)("severity", ctx_r0.getStatusSeverity(func_r2.status))("icon", "pi " + ctx_r0.getStatusIcon(func_r2.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 13, func_r2.totalExecutions, "1.0-0"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(func_r2.successRate >= 99 ? "text-green-800 font-semibold" : func_r2.successRate >= 95 ? "text-yellow-800 font-semibold" : "text-red-800 font-semibold");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 16, func_r2.successRate, "1.2-2"), "% ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDuration(func_r2.avgDuration), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDuration(func_r2.p95Duration), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 19, func_r2.lastExecution, "short"));
  }
}
function AzureFunctionsComponent_Conditional_25_ng_template_5_Conditional_49_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 68);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dep_r4 = ctx.$implicit;
    \u0275\u0275classMap("text-sm border-l-2 pl-2 " + (dep_r4.errorRate > 5 ? "border-red-500" : "border-green-500"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", dep_r4.dependencyType, ": ", dep_r4.dependencyName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", dep_r4.totalCalls, " calls, ", \u0275\u0275pipeBind2(5, 6, dep_r4.errorRate, "1.1-1"), "% error rate ");
  }
}
function AzureFunctionsComponent_Conditional_25_ng_template_5_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275repeaterCreate(1, AzureFunctionsComponent_Conditional_25_ng_template_5_Conditional_49_For_2_Template, 6, 9, "div", 67, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const func_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.getFunctionDependencies(func_r5.functionName));
  }
}
function AzureFunctionsComponent_Conditional_25_ng_template_5_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 66);
    \u0275\u0275text(1, " No dependencies tracked ");
    \u0275\u0275elementEnd();
  }
}
function AzureFunctionsComponent_Conditional_25_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 54)(2, "div", 55)(3, "h4", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 57)(6, "p-card", 58)(7, "div", 59)(8, "div", 60)(9, "span", 61);
    \u0275\u0275text(10, "Total:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 62);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 60)(15, "span", 61);
    \u0275\u0275text(16, "Failed:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 63);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 60)(21, "span", 61);
    \u0275\u0275text(22, "Error Rate:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 62);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "p-card", 64)(27, "div", 59)(28, "div", 60)(29, "span", 61);
    \u0275\u0275text(30, "Min:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 62);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 60)(34, "span", 61);
    \u0275\u0275text(35, "P50:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 62);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 60)(39, "span", 61);
    \u0275\u0275text(40, "P99:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 62);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 60)(44, "span", 61);
    \u0275\u0275text(45, "Max:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 62);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(48, "p-card", 65);
    \u0275\u0275conditionalCreate(49, AzureFunctionsComponent_Conditional_25_ng_template_5_Conditional_49_Template, 3, 0, "div", 59)(50, AzureFunctionsComponent_Conditional_25_ng_template_5_Conditional_50_Template, 2, 0, "p", 66);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const func_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", func_r5.functionName, " - Detailed Metrics ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 9, func_r5.totalExecutions, "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 12, func_r5.failedExecutions, "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(25, 15, func_r5.errorRate, "1.2-2"), "%");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.formatDuration(func_r5.minDuration));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatDuration(func_r5.p50Duration));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatDuration(func_r5.p99Duration));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatDuration(func_r5.maxDuration));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.getFunctionDependencies(func_r5.functionName).length > 0 ? 49 : 50);
  }
}
function AzureFunctionsComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 19);
    \u0275\u0275template(1, AzureFunctionsComponent_Conditional_25_ng_template_1_Template, 23, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, AzureFunctionsComponent_Conditional_25_ng_template_3_Template, 22, 22, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(5, AzureFunctionsComponent_Conditional_25_ng_template_5_Template, 51, 18, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r0.functions)("paginator", true)("rows", 10)("rowsPerPageOptions", \u0275\u0275pureFunction0(5, _c2))("expandedRowKeys", ctx_r0.expandedRows);
  }
}
function AzureFunctionsComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "i", 32);
    \u0275\u0275elementStart(2, "p", 33);
    \u0275\u0275text(3, "Loading timeline data...");
    \u0275\u0275elementEnd()();
  }
}
function AzureFunctionsComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "canvas", null, 3);
    \u0275\u0275elementEnd();
  }
}
function AzureFunctionsComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "i", 69);
    \u0275\u0275elementStart(2, "p", 35);
    \u0275\u0275text(3, "No timeline data available");
    \u0275\u0275elementEnd()();
  }
}
function AzureFunctionsComponent_Conditional_36_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "canvas", null, 4);
    \u0275\u0275elementEnd();
  }
}
function AzureFunctionsComponent_Conditional_36_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "i", 78);
    \u0275\u0275elementStart(2, "p", 35);
    \u0275\u0275text(3, "No cold starts detected");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 79);
    \u0275\u0275text(5, "All functions are running optimally");
    \u0275\u0275elementEnd()();
  }
}
function AzureFunctionsComponent_Conditional_36_Conditional_24_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 37);
    \u0275\u0275text(2, " Function ");
    \u0275\u0275element(3, "p-sortIcon", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 80);
    \u0275\u0275text(5, " Cold Starts ");
    \u0275\u0275element(6, "p-sortIcon", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 82);
    \u0275\u0275text(8, " Rate ");
    \u0275\u0275element(9, "p-sortIcon", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 84);
    \u0275\u0275text(11, " Avg Cold ");
    \u0275\u0275element(12, "p-sortIcon", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 86);
    \u0275\u0275text(14, " Avg Warm ");
    \u0275\u0275element(15, "p-sortIcon", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 88);
    \u0275\u0275text(17, " Impact ");
    \u0275\u0275element(18, "p-sortIcon", 89);
    \u0275\u0275elementEnd()();
  }
}
function AzureFunctionsComponent_Conditional_36_Conditional_24_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 53);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 53)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 53);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 53);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 53)(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const func_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(func_r6.functionName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 10, func_r6.coldStarts, "1.0-0"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(func_r6.coldStartRate > 20 ? "text-red-800 font-semibold" : func_r6.coldStartRate > 10 ? "text-orange-800 font-semibold" : "text-green-800");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 13, func_r6.coldStartRate, "1.2-2"), "% ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDuration(func_r6.avgColdStartDuration), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDuration(func_r6.avgWarmStartDuration), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(func_r6.coldStartImpact > 2e3 ? "text-red-800 font-semibold" : "text-gray-800");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ctx_r0.formatDuration(func_r6.coldStartImpact), " ");
  }
}
function AzureFunctionsComponent_Conditional_36_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 77);
    \u0275\u0275template(1, AzureFunctionsComponent_Conditional_36_Conditional_24_ng_template_1_Template, 19, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, AzureFunctionsComponent_Conditional_36_Conditional_24_ng_template_3_Template, 17, 16, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r0.getFunctionsWithColdStarts())("paginator", true)("rows", 10);
  }
}
function AzureFunctionsComponent_Conditional_36_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "i", 78);
    \u0275\u0275elementStart(2, "p", 35);
    \u0275\u0275text(3, "No cold starts detected");
    \u0275\u0275elementEnd()();
  }
}
function AzureFunctionsComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "p-card", 70)(2, "div", 71)(3, "div", 26)(4, "div", 72);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 28);
    \u0275\u0275text(8, "Total Cold Starts");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 26)(10, "div", 73);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 28);
    \u0275\u0275text(14, "Avg Cold Start Rate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 26)(16, "div", 74);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 28);
    \u0275\u0275text(19, "Functions Analyzed");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "p-card", 75);
    \u0275\u0275conditionalCreate(21, AzureFunctionsComponent_Conditional_36_Conditional_21_Template, 3, 0, "div", 23)(22, AzureFunctionsComponent_Conditional_36_Conditional_22_Template, 6, 0, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p-card", 76);
    \u0275\u0275conditionalCreate(24, AzureFunctionsComponent_Conditional_36_Conditional_24_Template, 5, 3, "p-table", 77)(25, AzureFunctionsComponent_Conditional_36_Conditional_25_Template, 4, 0, "div", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 5, ctx_r0.resources.totalColdStarts, "1.0-0"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 8, ctx_r0.resources.avgColdStartRate, "1.2-2"), "% ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.resources.functions.length, " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.getFunctionsWithColdStarts().length > 0 ? 21 : 22);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.getFunctionsWithColdStarts().length > 0 ? 24 : 25);
  }
}
function AzureFunctionsComponent_Conditional_38_Conditional_20_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 37);
    \u0275\u0275text(2, " Function ");
    \u0275\u0275element(3, "p-sortIcon", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 92);
    \u0275\u0275text(5, " Type ");
    \u0275\u0275element(6, "p-sortIcon", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 94);
    \u0275\u0275text(8, " Dependency ");
    \u0275\u0275element(9, "p-sortIcon", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 96);
    \u0275\u0275text(11, " Calls ");
    \u0275\u0275element(12, "p-sortIcon", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 98);
    \u0275\u0275text(14, " Failed ");
    \u0275\u0275element(15, "p-sortIcon", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 100);
    \u0275\u0275text(17, " Error Rate ");
    \u0275\u0275element(18, "p-sortIcon", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 45);
    \u0275\u0275text(20, " Avg Duration ");
    \u0275\u0275element(21, "p-sortIcon", 46);
    \u0275\u0275elementEnd()();
  }
}
function AzureFunctionsComponent_Conditional_38_Conditional_20_ng_template_3_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dep_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", dep_r7.primaryTarget, " ");
  }
}
function AzureFunctionsComponent_Conditional_38_Conditional_20_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "div", 102);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, AzureFunctionsComponent_Conditional_38_Conditional_20_ng_template_3_Conditional_9_Template, 2, 1, "div", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 53);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 53)(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 53)(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 53);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dep_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dep_r7.functionName);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("px-2 py-1 rounded text-xs font-semibold " + (dep_r7.dependencyType === "SQL" ? "bg-blue-100 text-blue-800" : dep_r7.dependencyType === "HTTP" ? "bg-green-100 text-green-800" : dep_r7.dependencyType === "Azure blob" ? "bg-purple-100 text-purple-800" : "bg-gray-100 text-gray-800"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", dep_r7.dependencyType, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", dep_r7.dependencyName, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(dep_r7.primaryTarget ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 14, dep_r7.totalCalls, "1.0-0"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(dep_r7.failedCalls > 0 ? "text-red-800 font-semibold" : "text-gray-800");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(16, 17, dep_r7.failedCalls, "1.0-0"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(dep_r7.errorRate > 5 ? "text-red-800 font-semibold" : dep_r7.errorRate > 1 ? "text-orange-800 font-semibold" : "text-green-800");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(20, 20, dep_r7.errorRate, "1.2-2"), "% ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDuration(dep_r7.avgDuration), " ");
  }
}
function AzureFunctionsComponent_Conditional_38_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 77);
    \u0275\u0275template(1, AzureFunctionsComponent_Conditional_38_Conditional_20_ng_template_1_Template, 22, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, AzureFunctionsComponent_Conditional_38_Conditional_20_ng_template_3_Template, 23, 23, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r0.dependencies.dependencies)("paginator", true)("rows", 15);
  }
}
function AzureFunctionsComponent_Conditional_38_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "i", 34);
    \u0275\u0275elementStart(2, "p", 35);
    \u0275\u0275text(3, "No dependency data available");
    \u0275\u0275elementEnd()();
  }
}
function AzureFunctionsComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-card")(1, "div", 90)(2, "div", 26)(3, "div", 74);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 28);
    \u0275\u0275text(7, "Total Dependency Calls");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 26)(9, "div", 91);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 28);
    \u0275\u0275text(13, "Failed Calls");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 26)(15, "div", 72);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 28);
    \u0275\u0275text(19, "Overall Error Rate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(20, AzureFunctionsComponent_Conditional_38_Conditional_20_Template, 5, 3, "p-table", 77)(21, AzureFunctionsComponent_Conditional_38_Conditional_21_Template, 4, 0, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 4, ctx_r0.dependencies.totalDependencyCalls, "1.0-0"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 7, ctx_r0.dependencies.totalFailedCalls, "1.0-0"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(17, 10, ctx_r0.dependencies.overallErrorRate, "1.2-2"), "% ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.dependencies.dependencies.length > 0 ? 20 : 21);
  }
}
function AzureFunctionsComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-card", 25)(1, "div", 18);
    \u0275\u0275element(2, "i", 32);
    \u0275\u0275elementStart(3, "p", 33);
    \u0275\u0275text(4, "Loading Azure Functions data...");
    \u0275\u0275elementEnd()()();
  }
}
Chart.register(...registerables);
var AzureFunctionsComponent = class _AzureFunctionsComponent {
  healthService = inject(RealSystemHealthService);
  cdr = inject(ChangeDetectorRef);
  destroyRef = inject(DestroyRef);
  timelineCanvas;
  coldStartCanvas;
  // Data
  functions = [];
  timeline = null;
  resources = null;
  dependencies = null;
  // Loading states
  loading = false;
  timelineLoading = false;
  resourcesLoading = false;
  dependenciesLoading = false;
  // Charts
  timelineChart = null;
  coldStartChart = null;
  // Time range selector
  timeRanges = [1, 6, 12, 24];
  // Hours
  timeRangeOptions = this.timeRanges.map((range) => ({
    label: range + "h",
    value: range
  }));
  selectedTimeRange = 1;
  // Default to 1 hour
  // Granularity for timeline
  granularityOptions = [
    { label: "1 minute", value: "1m" },
    { label: "5 minutes", value: "5m" },
    { label: "15 minutes", value: "15m" },
    { label: "30 minutes", value: "30m" },
    { label: "1 hour", value: "1h" }
  ];
  selectedGranularity = "5m";
  // Expanded rows for table
  expandedRows = {};
  ngOnInit() {
    this.loadAllData();
    this.healthService.systemHealth$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((health) => {
      if (health?.azureFunctions) {
        this.functions = health.azureFunctions;
        this.cdr.detectChanges();
      }
    });
  }
  ngAfterViewInit() {
    if (this.timeline) {
      this.createTimelineChart();
    }
    if (this.resources) {
      this.createColdStartChart();
    }
  }
  loadAllData() {
    this.loading = true;
    const timeRange = `${this.selectedTimeRange}h`;
    forkJoin({
      functions: this.healthService.fetchAzureFunctions(timeRange),
      timeline: this.healthService.fetchFunctionTimeline(timeRange, this.selectedGranularity),
      resources: this.healthService.fetchFunctionResources(timeRange),
      dependencies: this.healthService.fetchFunctionDependencies(timeRange)
    }).subscribe({
      next: (data) => {
        this.functions = data.functions ?? [];
        this.timeline = data.timeline;
        this.resources = data.resources;
        this.dependencies = data.dependencies;
        this.loading = false;
        this.cdr.detectChanges();
        if (this.timelineCanvas?.nativeElement != null) {
          this.createTimelineChart();
        }
        if (this.coldStartCanvas?.nativeElement != null) {
          this.createColdStartChart();
        }
      },
      error: (error) => {
        console.error("Error loading Azure Functions data:", error);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  onTimeRangeChange(event) {
    this.selectedTimeRange = +event.value;
    this.loadAllData();
  }
  onGranularityChange(event) {
    this.selectedGranularity = event.value;
    this.loadTimeline();
  }
  loadTimeline() {
    this.timelineLoading = true;
    const timeRange = `${this.selectedTimeRange}h`;
    this.healthService.fetchFunctionTimeline(timeRange, this.selectedGranularity).subscribe({
      next: (timeline) => {
        this.timeline = timeline;
        this.timelineLoading = false;
        this.cdr.detectChanges();
        if (this.timelineCanvas?.nativeElement != null) {
          this.createTimelineChart();
        }
      },
      error: (error) => {
        console.error("Error loading timeline:", error);
        this.timelineLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  refreshData() {
    this.loadAllData();
  }
  getStatusSeverity(status) {
    switch (status) {
      case "Healthy":
        return "success";
      case "Warning":
        return "warn";
      case "Critical":
        return "danger";
      case "Unknown":
        return "secondary";
      default:
        return "secondary";
    }
  }
  getStatusIcon(status) {
    switch (status) {
      case "Healthy":
        return "pi-check-circle";
      case "Warning":
        return "pi-exclamation-triangle";
      case "Critical":
        return "pi-times-circle";
      case "Unknown":
        return "pi-question-circle";
      default:
        return "pi-circle";
    }
  }
  formatDuration(ms) {
    if (ms < 1e3)
      return `${Math.round(ms)}ms`;
    return `${(ms / 1e3).toFixed(2)}s`;
  }
  getFunctionDependencies(functionName) {
    return this.dependencies?.dependencies.filter((d) => d.functionName === functionName) ?? [];
  }
  createTimelineChart() {
    const canvas = this.timelineCanvas?.nativeElement;
    if (this.timeline == null || canvas == null)
      return;
    const ctx = canvas.getContext("2d");
    if (!ctx)
      return;
    if (this.timelineChart) {
      this.timelineChart.destroy();
    }
    const colors = [
      "#3b82f6",
      "#8b5cf6",
      "#ec4899",
      "#f59e0b",
      "#10b981",
      "#06b6d4",
      "#ef4444"
    ];
    const datasets = this.timeline.functionNames.map((funcName, index) => {
      const funcData = this.timeline?.dataPoints.filter((dp) => dp.functionName === funcName) ?? [];
      return {
        label: funcName,
        data: funcData.map((dp) => ({
          x: new Date(dp.timestamp).getTime(),
          y: dp.executions
        })),
        borderColor: colors[index % colors.length],
        backgroundColor: colors[index % colors.length] + "20",
        borderWidth: 2,
        tension: 0.4,
        fill: true
      };
    });
    const config = {
      type: "line",
      data: { datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: "index",
          intersect: false
        },
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              usePointStyle: true,
              padding: 15,
              font: { family: "Ubuntu" }
            }
          },
          tooltip: {
            callbacks: {
              title: (items) => {
                const xValue = items[0]?.parsed?.x;
                if (xValue == null || xValue === 0)
                  return "";
                return new Date(xValue).toLocaleString();
              },
              label: (context) => {
                const label = context.dataset.label ?? "";
                const value = context.parsed.y;
                return `${label}: ${value} execution${value === 1 ? "" : "s"}`;
              }
            }
          }
        },
        scales: {
          x: {
            type: "time",
            time: {
              unit: "minute",
              displayFormats: {
                minute: "HH:mm",
                hour: "MMM d, HH:mm"
              }
            },
            title: {
              display: true,
              text: "Time",
              font: { family: "Ubuntu" }
            },
            grid: { display: true, color: "#f3f4f6" },
            ticks: { font: { family: "Ubuntu" } }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Executions",
              font: { family: "Ubuntu" }
            },
            ticks: {
              precision: 0,
              font: { family: "Ubuntu" }
            },
            grid: { color: "#f3f4f6" }
          }
        }
      }
    };
    this.timelineChart = new Chart(ctx, config);
  }
  createColdStartChart() {
    const canvas = this.coldStartCanvas?.nativeElement;
    if (this.resources == null || canvas == null)
      return;
    const ctx = canvas.getContext("2d");
    if (!ctx)
      return;
    if (this.coldStartChart) {
      this.coldStartChart.destroy();
    }
    const functions = this.resources.functions.filter((f) => f.coldStarts > 0).sort((a, b) => b.coldStartRate - a.coldStartRate).slice(0, 10);
    const config = {
      type: "bar",
      data: {
        labels: functions.map((f) => f.functionName),
        datasets: [
          {
            label: "Cold Start Rate (%)",
            data: functions.map((f) => f.coldStartRate),
            backgroundColor: "#ef4444",
            borderColor: "#dc2626",
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: "y",
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (context) => {
                const func = functions[context.dataIndex];
                return [
                  `Cold Start Rate: ${func.coldStartRate}%`,
                  `Cold Starts: ${func.coldStarts}`,
                  `Total Executions: ${func.totalExecutions}`,
                  `Avg Cold Start: ${func.avgColdStartDuration}ms`,
                  `Avg Warm Start: ${func.avgWarmStartDuration}ms`
                ];
              }
            }
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Cold Start Rate (%)",
              font: { family: "Ubuntu" }
            },
            grid: { color: "#f3f4f6" },
            ticks: { font: { family: "Ubuntu" } }
          },
          y: {
            grid: { display: false },
            ticks: { font: { family: "Ubuntu", size: 11 } }
          }
        }
      }
    };
    this.coldStartChart = new Chart(ctx, config);
  }
  getFunctionsWithColdStarts() {
    return this.resources?.functions.filter((f) => f.coldStarts > 0) ?? [];
  }
  getTotalExecutions() {
    return this.functions.reduce((sum, f) => sum + f.totalExecutions, 0);
  }
  getAverageSuccessRate() {
    if (this.functions.length === 0)
      return 0;
    const totalSuccessRate = this.functions.reduce((sum, f) => sum + f.successRate, 0);
    return totalSuccessRate / this.functions.length;
  }
  static \u0275fac = function AzureFunctionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AzureFunctionsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AzureFunctionsComponent, selectors: [["app-azure-functions"]], viewQuery: function AzureFunctionsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.timelineCanvas = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.coldStartCanvas = _t.first);
    }
  }, decls: 40, vars: 11, consts: [["header", ""], ["body", ""], ["expandedrow", ""], ["timelineCanvas", ""], ["coldStartCanvas", ""], [1, "m-4", "flex", "items-center", "justify-between", "gap-4", "flex-wrap"], [1, "text-2xl", "font-bold", "text-gray-800"], [1, "flex", "items-center", "gap-4", "flex-wrap"], [1, "flex", "items-center", "gap-2"], ["for", "timeRange", 1, "text-sm", "font-semibold", "text-gray-700"], ["inputId", "timeRange", "placeholder", "Select time range", 1, "min-w-[100px]", 3, "ngModelChange", "onChange", "options", "ngModel"], ["icon", "pi pi-refresh", "label", "Refresh", "severity", "secondary", "size", "small", 3, "onClick", "loading"], [1, "grid", "grid-cols-[repeat(auto-fit,minmax(200px,1fr))]", "gap-4", "m-4"], ["value", "0", 1, "m-4"], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], [1, "text-center", "py-8", "text-gray-500"], ["dataKey", "functionName", 1, "p-datatable-sm", 3, "value", "paginator", "rows", "rowsPerPageOptions", "expandedRowKeys"], [1, "mb-4", "flex", "items-center", "gap-4"], ["for", "granularity", 1, "text-sm", "font-semibold", "text-gray-700"], ["inputId", "granularity", 1, "min-w-[150px]", 3, "ngModelChange", "onChange", "options", "ngModel"], [1, "relative", "h-[400px]", "w-full"], [1, "grid", "gap-4"], [1, "m-4"], [1, "text-center"], [1, "text-[2rem]", "font-bold", "text-gray-800", "mb-1"], [1, "text-sm", "text-gray-800"], [1, "text-[2rem]", "font-bold", "text-blue-800", "mb-1"], [1, "text-[2rem]", "font-bold", "text-green-800", "mb-1"], [1, "text-[2rem]", "font-bold", "text-orange-800", "mb-1"], [1, "pi", "pi-spin", "pi-spinner", "text-5xl", "mb-4", "block"], [1, "text-lg", "font-medium"], [1, "pi", "pi-inbox", "text-5xl", "text-gray-800", "mb-4", "block"], [1, "text-lg", "font-semibold"], [2, "width", "3rem"], ["pSortableColumn", "functionName"], ["field", "functionName"], ["pSortableColumn", "status"], ["field", "status"], ["pSortableColumn", "totalExecutions", 1, "text-right"], ["field", "totalExecutions"], ["pSortableColumn", "successRate", 1, "text-right"], ["field", "successRate"], ["pSortableColumn", "avgDuration", 1, "text-right"], ["field", "avgDuration"], ["pSortableColumn", "p95Duration", 1, "text-right"], ["field", "p95Duration"], ["pSortableColumn", "lastExecution"], ["field", "lastExecution"], ["pRipple", "", 1, "p-button-text", "p-button-rounded", "p-button-plain", 3, "pRowToggler", "icon"], [3, "value", "severity", "icon"], [1, "text-right"], ["colspan", "8"], [1, "p-4"], [1, "text-lg", "font-semibold", "mb-3"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-4", "mb-4"], ["header", "Execution Statistics"], [1, "space-y-2"], [1, "flex", "justify-between", "text-sm"], [1, "text-gray-800"], [1, "font-semibold"], [1, "font-semibold", "text-red-800"], ["header", "Duration Metrics"], ["header", "Dependencies"], [1, "text-sm", "text-gray-500"], [3, "class"], [1, "text-xs", "text-gray-800"], [1, "pi", "pi-chart-line", "text-5xl", "text-gray-800", "mb-4", "block"], ["header", "Cold Start Summary"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-4"], [1, "text-3xl", "font-bold", "text-orange-800", "mb-1"], [1, "text-3xl", "font-bold", "text-blue-800", "mb-1"], [1, "text-3xl", "font-bold", "text-gray-800", "mb-1"], ["header", "Top Functions by Cold Start Rate"], ["header", "Cold Start Details by Function"], [1, "p-datatable-sm", 3, "value", "paginator", "rows"], [1, "pi", "pi-check-circle", "text-5xl", "text-green-500", "mb-4", "block"], [1, "text-sm"], ["pSortableColumn", "coldStarts", 1, "text-right"], ["field", "coldStarts"], ["pSortableColumn", "coldStartRate", 1, "text-right"], ["field", "coldStartRate"], ["pSortableColumn", "avgColdStartDuration", 1, "text-right"], ["field", "avgColdStartDuration"], ["pSortableColumn", "avgWarmStartDuration", 1, "text-right"], ["field", "avgWarmStartDuration"], ["pSortableColumn", "coldStartImpact", 1, "text-right"], ["field", "coldStartImpact"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-4", "mb-6"], [1, "text-3xl", "font-bold", "text-red-800", "mb-1"], ["pSortableColumn", "dependencyType"], ["field", "dependencyType"], ["pSortableColumn", "dependencyName"], ["field", "dependencyName"], ["pSortableColumn", "totalCalls", 1, "text-right"], ["field", "totalCalls"], ["pSortableColumn", "failedCalls", 1, "text-right"], ["field", "failedCalls"], ["pSortableColumn", "errorRate", 1, "text-right"], ["field", "errorRate"], [1, "text-sm", "font-semibold"], [1, "text-xs", "text-gray-500"]], template: function AzureFunctionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 5)(1, "h2", 6);
      \u0275\u0275text(2, "Azure Functions Performance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 7)(4, "div", 8)(5, "label", 9);
      \u0275\u0275text(6, "Time Range:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p-select", 10);
      \u0275\u0275twoWayListener("ngModelChange", function AzureFunctionsComponent_Template_p_select_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedTimeRange, $event) || (ctx.selectedTimeRange = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function AzureFunctionsComponent_Template_p_select_onChange_7_listener($event) {
        return ctx.onTimeRangeChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "p-button", 11);
      \u0275\u0275listener("onClick", function AzureFunctionsComponent_Template_p_button_onClick_8_listener() {
        return ctx.refreshData();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(9, AzureFunctionsComponent_Conditional_9_Template, 28, 13, "div", 12);
      \u0275\u0275elementStart(10, "p-tabs", 13)(11, "p-tablist")(12, "p-tab", 14);
      \u0275\u0275text(13, "Functions Overview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p-tab", 15);
      \u0275\u0275text(15, "Execution Timeline");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p-tab", 16);
      \u0275\u0275text(17, "Cold Start Analysis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p-tab", 17);
      \u0275\u0275text(19, "Dependencies");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "p-tabpanels")(21, "p-tabpanel", 14)(22, "p-card");
      \u0275\u0275conditionalCreate(23, AzureFunctionsComponent_Conditional_23_Template, 4, 0, "div", 18)(24, AzureFunctionsComponent_Conditional_24_Template, 4, 0, "div", 18)(25, AzureFunctionsComponent_Conditional_25_Template, 7, 6, "p-table", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "p-tabpanel", 15)(27, "p-card")(28, "div", 20)(29, "label", 21);
      \u0275\u0275text(30, "Granularity:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p-select", 22);
      \u0275\u0275twoWayListener("ngModelChange", function AzureFunctionsComponent_Template_p_select_ngModelChange_31_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedGranularity, $event) || (ctx.selectedGranularity = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function AzureFunctionsComponent_Template_p_select_onChange_31_listener($event) {
        return ctx.onGranularityChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(32, AzureFunctionsComponent_Conditional_32_Template, 4, 0, "div", 18)(33, AzureFunctionsComponent_Conditional_33_Template, 3, 0, "div", 23)(34, AzureFunctionsComponent_Conditional_34_Template, 4, 0, "div", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "p-tabpanel", 16);
      \u0275\u0275conditionalCreate(36, AzureFunctionsComponent_Conditional_36_Template, 26, 11, "div", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "p-tabpanel", 17);
      \u0275\u0275conditionalCreate(38, AzureFunctionsComponent_Conditional_38_Template, 22, 13, "p-card");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(39, AzureFunctionsComponent_Conditional_39_Template, 5, 0, "p-card", 25);
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("options", ctx.timeRangeOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedTimeRange);
      \u0275\u0275advance();
      \u0275\u0275property("loading", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.resources ? 9 : -1);
      \u0275\u0275advance(14);
      \u0275\u0275conditional(ctx.loading && ctx.functions.length === 0 ? 23 : ctx.functions.length === 0 ? 24 : 25);
      \u0275\u0275advance(8);
      \u0275\u0275property("options", ctx.granularityOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedGranularity);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.timelineLoading ? 32 : ctx.timeline && ctx.timeline.dataPoints.length > 0 ? 33 : 34);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.resources ? 36 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.dependencies ? 38 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading && ctx.functions.length === 0 ? 39 : -1);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    NgControlStatus,
    NgModel,
    CardModule,
    Card,
    TableModule,
    Table,
    SortableColumn,
    RowToggler,
    SortIcon,
    ButtonModule,
    Button,
    SelectModule,
    Select,
    TabsModule,
    Tabs,
    TabPanels,
    TabPanel,
    TabList,
    Tab,
    TagModule,
    Tag,
    DecimalPipe,
    DatePipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-thead > tr > th {\n  background-color: #f9fafb;\n  color: #374151;\n  font-weight: 600;\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr {\n  transition: background-color 0.2s;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr:hover {\n  opacity: 0.9;\n  cursor: pointer;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td {\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid #f3f4f6;\n}\n[_nghost-%COMP%]     .p-tabview .p-tabview-nav {\n  background: transparent;\n  border-bottom: 2px solid #e5e7eb;\n}\n[_nghost-%COMP%]     .p-tabview .p-tabview-nav li .p-tabview-nav-link {\n  padding: 1rem 1.5rem;\n  color: #6b7280;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n[_nghost-%COMP%]     .p-tabview .p-tabview-nav li .p-tabview-nav-link:hover {\n  color: #374151;\n  background-color: #f9fafb;\n}\n[_nghost-%COMP%]     .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {\n  color: #3b82f6;\n  border-color: #3b82f6;\n}\n/*# sourceMappingURL=azure-functions.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AzureFunctionsComponent, [{
    type: Component,
    args: [{ selector: "app-azure-functions", imports: [
      CommonModule,
      FormsModule,
      CardModule,
      TableModule,
      ButtonModule,
      SelectModule,
      TabsModule,
      TagModule
    ], template: `<!-- eslint-disable @angular-eslint/template/no-inline-styles -->
<!-- Header with Controls -->
<div class="m-4 flex items-center justify-between gap-4 flex-wrap">
  <h2 class="text-2xl font-bold text-gray-800">Azure Functions Performance</h2>

  <div class="flex items-center gap-4 flex-wrap">
    <!-- Time Range Selector -->
    <div class="flex items-center gap-2">
      <label for="timeRange" class="text-sm font-semibold text-gray-700"
        >Time Range:</label
      >
      <p-select
        inputId="timeRange"
        [options]="timeRangeOptions"
        [(ngModel)]="selectedTimeRange"
        (onChange)="onTimeRangeChange($event)"
        placeholder="Select time range"
        class="min-w-[100px]"
      />
    </div>

    <!-- Refresh Button -->
    <p-button
      icon="pi pi-refresh"
      [loading]="loading"
      (onClick)="refreshData()"
      label="Refresh"
      severity="secondary"
      size="small"
    />
  </div>
</div>

<!-- Summary Cards -->
@if (resources) {
  <div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 m-4">
    <p-card>
      <div class="text-center">
        <div class="text-[2rem] font-bold text-gray-800 mb-1">
          {{ functions.length }}
        </div>
        <div class="text-sm text-gray-800">Total Functions</div>
      </div>
    </p-card>

    <p-card>
      <div class="text-center">
        <div class="text-[2rem] font-bold text-blue-800 mb-1">
          {{ getTotalExecutions() | number: '1.0-0' }}
        </div>
        <div class="text-sm text-gray-800">Total Executions</div>
      </div>
    </p-card>

    <p-card>
      <div class="text-center">
        <div class="text-[2rem] font-bold text-green-800 mb-1">
          {{ getAverageSuccessRate() | number: '1.1-1' }}%
        </div>
        <div class="text-sm text-gray-800">Avg Success Rate</div>
      </div>
    </p-card>

    <p-card>
      <div class="text-center">
        <div class="text-[2rem] font-bold text-orange-800 mb-1">
          {{ resources.totalColdStarts | number: '1.0-0' }}
        </div>
        <div class="text-sm text-gray-800">Cold Starts</div>
      </div>
    </p-card>
  </div>
}

<!-- Tabs for Different Views -->
<p-tabs value="0" class="m-4">
  <p-tablist>
    <p-tab value="0">Functions Overview</p-tab>
    <p-tab value="1">Execution Timeline</p-tab>
    <p-tab value="2">Cold Start Analysis</p-tab>
    <p-tab value="3">Dependencies</p-tab>
  </p-tablist>
  <p-tabpanels>
    <!-- Functions Overview Tab -->
    <p-tabpanel value="0">
      <p-card>
        @if (loading && functions.length === 0) {
          <div class="text-center py-8 text-gray-500">
            <i class="pi pi-spin pi-spinner text-5xl mb-4 block"></i>
            <p class="text-lg font-medium">Loading functions data...</p>
          </div>
        } @else if (functions.length === 0) {
          <div class="text-center py-8 text-gray-500">
            <i class="pi pi-inbox text-5xl text-gray-800 mb-4 block"></i>
            <p class="text-lg font-semibold">No functions data available</p>
          </div>
        } @else {
          <p-table
            [value]="functions"
            [paginator]="true"
            [rows]="10"
            [rowsPerPageOptions]="[5, 10, 20, 50]"
            [expandedRowKeys]="expandedRows"
            dataKey="functionName"
            class="p-datatable-sm"
          >
            <ng-template #header>
              <tr>
                <th style="width: 3rem"></th>
                <th pSortableColumn="functionName">
                  Function Name <p-sortIcon field="functionName" />
                </th>
                <th pSortableColumn="status">
                  Status <p-sortIcon field="status" />
                </th>
                <th pSortableColumn="totalExecutions" class="text-right">
                  Executions <p-sortIcon field="totalExecutions" />
                </th>
                <th pSortableColumn="successRate" class="text-right">
                  Success Rate <p-sortIcon field="successRate" />
                </th>
                <th pSortableColumn="avgDuration" class="text-right">
                  Avg Duration <p-sortIcon field="avgDuration" />
                </th>
                <th pSortableColumn="p95Duration" class="text-right">
                  P95 Duration <p-sortIcon field="p95Duration" />
                </th>
                <th pSortableColumn="lastExecution">
                  Last Execution <p-sortIcon field="lastExecution" />
                </th>
              </tr>
            </ng-template>

            <ng-template #body let-func let-expanded="expanded">
              <tr>
                <td>
                  <p-button
                    pRipple
                    [pRowToggler]="func"
                    class="p-button-text p-button-rounded p-button-plain"
                    [icon]="
                      expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'
                    "
                  ></p-button>
                </td>
                <td>
                  <span>{{ func.functionName }}</span>
                </td>
                <td>
                  <p-tag
                    [value]="func.status"
                    [severity]="getStatusSeverity(func.status)"
                    [icon]="'pi ' + getStatusIcon(func.status)"
                  />
                </td>
                <td class="text-right">
                  {{ func.totalExecutions | number: '1.0-0' }}
                </td>
                <td class="text-right">
                  <span
                    [class]="
                      func.successRate >= 99
                        ? 'text-green-800 font-semibold'
                        : func.successRate >= 95
                          ? 'text-yellow-800 font-semibold'
                          : 'text-red-800 font-semibold'
                    "
                  >
                    {{ func.successRate | number: '1.2-2' }}%
                  </span>
                </td>
                <td class="text-right">
                  {{ formatDuration(func.avgDuration) }}
                </td>
                <td class="text-right">
                  {{ formatDuration(func.p95Duration) }}
                </td>
                <td>{{ func.lastExecution | date: 'short' }}</td>
              </tr>
            </ng-template>

            <ng-template #expandedrow let-func>
              <tr>
                <td colspan="8">
                  <div class="p-4">
                    <h4 class="text-lg font-semibold mb-3">
                      {{ func.functionName }} - Detailed Metrics
                    </h4>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <!-- Execution Stats -->
                      <p-card header="Execution Statistics">
                        <div class="space-y-2">
                          <div class="flex justify-between text-sm">
                            <span class="text-gray-800">Total:</span>
                            <span class="font-semibold">{{
                              func.totalExecutions | number: '1.0-0'
                            }}</span>
                          </div>
                          <div class="flex justify-between text-sm">
                            <span class="text-gray-800">Failed:</span>
                            <span class="font-semibold text-red-800">{{
                              func.failedExecutions | number: '1.0-0'
                            }}</span>
                          </div>
                          <div class="flex justify-between text-sm">
                            <span class="text-gray-800">Error Rate:</span>
                            <span class="font-semibold"
                              >{{ func.errorRate | number: '1.2-2' }}%</span
                            >
                          </div>
                        </div>
                      </p-card>

                      <!-- Duration Metrics -->
                      <p-card header="Duration Metrics">
                        <div class="space-y-2">
                          <div class="flex justify-between text-sm">
                            <span class="text-gray-800">Min:</span>
                            <span class="font-semibold">{{
                              formatDuration(func.minDuration)
                            }}</span>
                          </div>
                          <div class="flex justify-between text-sm">
                            <span class="text-gray-800">P50:</span>
                            <span class="font-semibold">{{
                              formatDuration(func.p50Duration)
                            }}</span>
                          </div>
                          <div class="flex justify-between text-sm">
                            <span class="text-gray-800">P99:</span>
                            <span class="font-semibold">{{
                              formatDuration(func.p99Duration)
                            }}</span>
                          </div>
                          <div class="flex justify-between text-sm">
                            <span class="text-gray-800">Max:</span>
                            <span class="font-semibold">{{
                              formatDuration(func.maxDuration)
                            }}</span>
                          </div>
                        </div>
                      </p-card>

                      <!-- Dependencies -->
                      <p-card header="Dependencies">
                        @if (
                          getFunctionDependencies(func.functionName).length > 0
                        ) {
                          <div class="space-y-2">
                            @for (
                              dep of getFunctionDependencies(func.functionName);
                              track dep.dependencyName
                            ) {
                              <div
                                [class]="
                                  'text-sm border-l-2 pl-2 ' +
                                  (dep.errorRate > 5
                                    ? 'border-red-500'
                                    : 'border-green-500')
                                "
                              >
                                <div class="font-semibold">
                                  {{ dep.dependencyType }}:
                                  {{ dep.dependencyName }}
                                </div>
                                <div class="text-xs text-gray-800">
                                  {{ dep.totalCalls }} calls,
                                  {{ dep.errorRate | number: '1.1-1' }}% error
                                  rate
                                </div>
                              </div>
                            }
                          </div>
                        } @else {
                          <p class="text-sm text-gray-500">
                            No dependencies tracked
                          </p>
                        }
                      </p-card>
                    </div>
                  </div>
                </td>
              </tr>
            </ng-template>
          </p-table>
        }
      </p-card>
    </p-tabpanel>

    <!-- Execution Timeline Tab -->
    <p-tabpanel value="1">
      <p-card>
        <div class="mb-4 flex items-center gap-4">
          <label for="granularity" class="text-sm font-semibold text-gray-700"
            >Granularity:</label
          >
          <p-select
            inputId="granularity"
            [options]="granularityOptions"
            [(ngModel)]="selectedGranularity"
            (onChange)="onGranularityChange($event)"
            class="min-w-[150px]"
          />
        </div>

        @if (timelineLoading) {
          <div class="text-center py-8 text-gray-500">
            <i class="pi pi-spin pi-spinner text-5xl mb-4 block"></i>
            <p class="text-lg font-medium">Loading timeline data...</p>
          </div>
        } @else if (timeline && timeline.dataPoints.length > 0) {
          <div class="relative h-[400px] w-full">
            <canvas #timelineCanvas></canvas>
          </div>
        } @else {
          <div class="text-center py-8 text-gray-500">
            <i class="pi pi-chart-line text-5xl text-gray-800 mb-4 block"></i>
            <p class="text-lg font-semibold">No timeline data available</p>
          </div>
        }
      </p-card>
    </p-tabpanel>

    <!-- Cold Starts Tab -->
    <p-tabpanel value="2">
      @if (resources) {
        <div class="grid gap-4">
          <!-- Summary Card -->
          <p-card header="Cold Start Summary">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="text-center">
                <div class="text-3xl font-bold text-orange-800 mb-1">
                  {{ resources.totalColdStarts | number: '1.0-0' }}
                </div>
                <div class="text-sm text-gray-800">Total Cold Starts</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-blue-800 mb-1">
                  {{ resources.avgColdStartRate | number: '1.2-2' }}%
                </div>
                <div class="text-sm text-gray-800">Avg Cold Start Rate</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-gray-800 mb-1">
                  {{ resources.functions.length }}
                </div>
                <div class="text-sm text-gray-800">Functions Analyzed</div>
              </div>
            </div>
          </p-card>

          <!-- Cold Start Chart -->
          <p-card header="Top Functions by Cold Start Rate">
            @if (getFunctionsWithColdStarts().length > 0) {
              <div class="relative h-[400px] w-full">
                <canvas #coldStartCanvas></canvas>
              </div>
            } @else {
              <div class="text-center py-8 text-gray-500">
                <i
                  class="pi pi-check-circle text-5xl text-green-500 mb-4 block"
                ></i>
                <p class="text-lg font-semibold">No cold starts detected</p>
                <p class="text-sm">All functions are running optimally</p>
              </div>
            }
          </p-card>

          <!-- Detailed Cold Start Table -->
          <p-card header="Cold Start Details by Function">
            @if (getFunctionsWithColdStarts().length > 0) {
              <p-table
                [value]="getFunctionsWithColdStarts()"
                [paginator]="true"
                [rows]="10"
                class="p-datatable-sm"
              >
                <ng-template #header>
                  <tr>
                    <th pSortableColumn="functionName">
                      Function <p-sortIcon field="functionName" />
                    </th>
                    <th pSortableColumn="coldStarts" class="text-right">
                      Cold Starts <p-sortIcon field="coldStarts" />
                    </th>
                    <th pSortableColumn="coldStartRate" class="text-right">
                      Rate <p-sortIcon field="coldStartRate" />
                    </th>
                    <th
                      pSortableColumn="avgColdStartDuration"
                      class="text-right"
                    >
                      Avg Cold <p-sortIcon field="avgColdStartDuration" />
                    </th>
                    <th
                      pSortableColumn="avgWarmStartDuration"
                      class="text-right"
                    >
                      Avg Warm <p-sortIcon field="avgWarmStartDuration" />
                    </th>
                    <th pSortableColumn="coldStartImpact" class="text-right">
                      Impact <p-sortIcon field="coldStartImpact" />
                    </th>
                  </tr>
                </ng-template>

                <ng-template #body let-func>
                  <tr>
                    <td>{{ func.functionName }}</td>
                    <td class="text-right">
                      {{ func.coldStarts | number: '1.0-0' }}
                    </td>
                    <td class="text-right">
                      <span
                        [class]="
                          func.coldStartRate > 20
                            ? 'text-red-800 font-semibold'
                            : func.coldStartRate > 10
                              ? 'text-orange-800 font-semibold'
                              : 'text-green-800'
                        "
                      >
                        {{ func.coldStartRate | number: '1.2-2' }}%
                      </span>
                    </td>
                    <td class="text-right">
                      {{ formatDuration(func.avgColdStartDuration) }}
                    </td>
                    <td class="text-right">
                      {{ formatDuration(func.avgWarmStartDuration) }}
                    </td>
                    <td class="text-right">
                      <span
                        [class]="
                          func.coldStartImpact > 2000
                            ? 'text-red-800 font-semibold'
                            : 'text-gray-800'
                        "
                      >
                        +{{ formatDuration(func.coldStartImpact) }}
                      </span>
                    </td>
                  </tr>
                </ng-template>
              </p-table>
            } @else {
              <div class="text-center py-8 text-gray-500">
                <i
                  class="pi pi-check-circle text-5xl text-green-500 mb-4 block"
                ></i>
                <p class="text-lg font-semibold">No cold starts detected</p>
              </div>
            }
          </p-card>
        </div>
      }
    </p-tabpanel>

    <!-- Dependencies Tab -->
    <p-tabpanel value="3">
      @if (dependencies) {
        <p-card>
          <!-- Summary -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div class="text-center">
              <div class="text-3xl font-bold text-gray-800 mb-1">
                {{ dependencies.totalDependencyCalls | number: '1.0-0' }}
              </div>
              <div class="text-sm text-gray-800">Total Dependency Calls</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-red-800 mb-1">
                {{ dependencies.totalFailedCalls | number: '1.0-0' }}
              </div>
              <div class="text-sm text-gray-800">Failed Calls</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-orange-800 mb-1">
                {{ dependencies.overallErrorRate | number: '1.2-2' }}%
              </div>
              <div class="text-sm text-gray-800">Overall Error Rate</div>
            </div>
          </div>

          <!-- Dependencies Table -->
          @if (dependencies.dependencies.length > 0) {
            <p-table
              [value]="dependencies.dependencies"
              [paginator]="true"
              [rows]="15"
              class="p-datatable-sm"
            >
              <ng-template #header>
                <tr>
                  <th pSortableColumn="functionName">
                    Function <p-sortIcon field="functionName" />
                  </th>
                  <th pSortableColumn="dependencyType">
                    Type <p-sortIcon field="dependencyType" />
                  </th>
                  <th pSortableColumn="dependencyName">
                    Dependency <p-sortIcon field="dependencyName" />
                  </th>
                  <th pSortableColumn="totalCalls" class="text-right">
                    Calls <p-sortIcon field="totalCalls" />
                  </th>
                  <th pSortableColumn="failedCalls" class="text-right">
                    Failed <p-sortIcon field="failedCalls" />
                  </th>
                  <th pSortableColumn="errorRate" class="text-right">
                    Error Rate <p-sortIcon field="errorRate" />
                  </th>
                  <th pSortableColumn="avgDuration" class="text-right">
                    Avg Duration <p-sortIcon field="avgDuration" />
                  </th>
                </tr>
              </ng-template>

              <ng-template #body let-dep>
                <tr>
                  <td>{{ dep.functionName }}</td>
                  <td>
                    <span
                      [class]="
                        'px-2 py-1 rounded text-xs font-semibold ' +
                        (dep.dependencyType === 'SQL'
                          ? 'bg-blue-100 text-blue-800'
                          : dep.dependencyType === 'HTTP'
                            ? 'bg-green-100 text-green-800'
                            : dep.dependencyType === 'Azure blob'
                              ? 'bg-purple-100 text-purple-800'
                              : 'bg-gray-100 text-gray-800')
                      "
                    >
                      {{ dep.dependencyType }}
                    </span>
                  </td>
                  <td>
                    <div class="text-sm font-semibold">
                      {{ dep.dependencyName }}
                    </div>
                    @if (dep.primaryTarget) {
                      <div class="text-xs text-gray-500">
                        {{ dep.primaryTarget }}
                      </div>
                    }
                  </td>
                  <td class="text-right">
                    {{ dep.totalCalls | number: '1.0-0' }}
                  </td>
                  <td class="text-right">
                    <span
                      [class]="
                        dep.failedCalls > 0
                          ? 'text-red-800 font-semibold'
                          : 'text-gray-800'
                      "
                    >
                      {{ dep.failedCalls | number: '1.0-0' }}
                    </span>
                  </td>
                  <td class="text-right">
                    <span
                      [class]="
                        dep.errorRate > 5
                          ? 'text-red-800 font-semibold'
                          : dep.errorRate > 1
                            ? 'text-orange-800 font-semibold'
                            : 'text-green-800'
                      "
                    >
                      {{ dep.errorRate | number: '1.2-2' }}%
                    </span>
                  </td>
                  <td class="text-right">
                    {{ formatDuration(dep.avgDuration) }}
                  </td>
                </tr>
              </ng-template>
            </p-table>
          } @else {
            <div class="text-center py-8 text-gray-500">
              <i class="pi pi-inbox text-5xl text-gray-800 mb-4 block"></i>
              <p class="text-lg font-semibold">No dependency data available</p>
            </div>
          }
        </p-card>
      }
    </p-tabpanel>
  </p-tabpanels>
</p-tabs>

<!-- Loading State -->
@if (loading && functions.length === 0) {
  <p-card class="m-4">
    <div class="text-center py-8 text-gray-500">
      <i class="pi pi-spin pi-spinner text-5xl mb-4 block"></i>
      <p class="text-lg font-medium">Loading Azure Functions data...</p>
    </div>
  </p-card>
}
`, styles: ["/* src/app/features/administration/components/system-health/azure-functions/azure-functions.component.scss */\n:host {\n  display: block;\n}\n:host ::ng-deep .p-datatable .p-datatable-thead > tr > th {\n  background-color: #f9fafb;\n  color: #374151;\n  font-weight: 600;\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr {\n  transition: background-color 0.2s;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr:hover {\n  opacity: 0.9;\n  cursor: pointer;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td {\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid #f3f4f6;\n}\n:host ::ng-deep .p-tabview .p-tabview-nav {\n  background: transparent;\n  border-bottom: 2px solid #e5e7eb;\n}\n:host ::ng-deep .p-tabview .p-tabview-nav li .p-tabview-nav-link {\n  padding: 1rem 1.5rem;\n  color: #6b7280;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n:host ::ng-deep .p-tabview .p-tabview-nav li .p-tabview-nav-link:hover {\n  color: #374151;\n  background-color: #f9fafb;\n}\n:host ::ng-deep .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {\n  color: #3b82f6;\n  border-color: #3b82f6;\n}\n/*# sourceMappingURL=azure-functions.component.css.map */\n"] }]
  }], null, { timelineCanvas: [{
    type: ViewChild,
    args: ["timelineCanvas"]
  }], coldStartCanvas: [{
    type: ViewChild,
    args: ["coldStartCanvas"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AzureFunctionsComponent, { className: "AzureFunctionsComponent", filePath: "src/app/features/administration/components/system-health/azure-functions/azure-functions.component.ts", lineNumber: 60 });
})();

// src/app/features/administration/components/system-health/data-storage/data-storage.component.ts
var _c02 = () => [];
var _c12 = () => [5, 10, 20, 50];
function DataStorageComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "p-card")(2, "div", 14)(3, "div", 15);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 16);
    \u0275\u0275text(7, "Total Operations");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "p-card")(9, "div", 14)(10, "div", 17);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "percent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 16);
    \u0275\u0275text(14, "Total Success Rate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, ctx_r0.storage.totalOperations), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 4, ctx_r0.storage.totalSuccessRate / 100, "1.1-1"), " ");
  }
}
function DataStorageComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275elementStart(2, "p", 19);
    \u0275\u0275text(3, "Loading storage data...");
    \u0275\u0275elementEnd()();
  }
}
function DataStorageComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "i", 20);
    \u0275\u0275elementStart(2, "p", 21);
    \u0275\u0275text(3, "No storage data available");
    \u0275\u0275elementEnd()();
  }
}
function DataStorageComponent_Conditional_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275element(1, "th", 22);
    \u0275\u0275elementStart(2, "th", 23);
    \u0275\u0275text(3, " Storage Type ");
    \u0275\u0275element(4, "p-sortIcon", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 25);
    \u0275\u0275text(6, " Target ");
    \u0275\u0275element(7, "p-sortIcon", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 27);
    \u0275\u0275text(9, " Status ");
    \u0275\u0275element(10, "p-sortIcon", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 29);
    \u0275\u0275text(12, " Operations ");
    \u0275\u0275element(13, "p-sortIcon", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 31);
    \u0275\u0275text(15, " Success Rate ");
    \u0275\u0275element(16, "p-sortIcon", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 33);
    \u0275\u0275text(18, " Avg Latency ");
    \u0275\u0275element(19, "p-sortIcon", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 35);
    \u0275\u0275text(21, " P95 Latency ");
    \u0275\u0275element(22, "p-sortIcon", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 37);
    \u0275\u0275text(24, " Throughput ");
    \u0275\u0275element(25, "p-sortIcon", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 39);
    \u0275\u0275text(27, " Last Activity ");
    \u0275\u0275element(28, "p-sortIcon", 40);
    \u0275\u0275elementEnd()();
  }
}
function DataStorageComponent_Conditional_13_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "p-button", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "span", 43);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275element(10, "p-tag", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 45);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 45)(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 45);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 45);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 45);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const storage_r2 = ctx.$implicit;
    const expanded_r3 = ctx.expanded;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("pRowToggler", storage_r2)("icon", expanded_r3 ? "pi pi-chevron-down" : "pi pi-chevron-right");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(storage_r2.storageType);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(storage_r2.target);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", storage_r2.status)("severity", ctx_r0.getStatusSeverity(storage_r2.status))("icon", "pi " + ctx_r0.getStatusIcon(storage_r2.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 15, storage_r2.totalOperations, "1.0-0"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(storage_r2.successRate >= 95 ? "text-green-800 font-semibold" : storage_r2.successRate >= 90 ? "text-yellow-800 font-semibold" : "text-red-800 font-semibold");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(17, 18, storage_r2.successRate, "1.2-2"), "% ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(20, 21, storage_r2.avgLatencyMs, "1.0-0"), "ms ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(23, 24, storage_r2.p95LatencyMs, "1.0-0"), "ms ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 27, storage_r2.throughputOpsPerSec, "1.2-2"), " ops/s ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 30, storage_r2.lastActivity, "short"));
  }
}
function DataStorageComponent_Conditional_13_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 46)(2, "div", 47)(3, "h4", 48);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 49)(6, "p-card", 50)(7, "div", 51)(8, "div", 52)(9, "span", 53);
    \u0275\u0275text(10, "Total:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 42);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 52)(15, "span", 53);
    \u0275\u0275text(16, "Successful:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 54);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 52)(21, "span", 53);
    \u0275\u0275text(22, "Failed:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 55);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 52)(27, "span", 53);
    \u0275\u0275text(28, "Error Rate:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 42);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "p-card", 56)(33, "div", 51)(34, "div", 52)(35, "span", 53);
    \u0275\u0275text(36, "Min:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 42);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 52)(41, "span", 53);
    \u0275\u0275text(42, "P50:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 42);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 52)(47, "span", 53);
    \u0275\u0275text(48, "P95:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 42);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 52)(53, "span", 53);
    \u0275\u0275text(54, "P99:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span", 42);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 52)(59, "span", 53);
    \u0275\u0275text(60, "Max:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 42);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(64, "p-card", 57)(65, "div", 51)(66, "div", 52)(67, "span", 53);
    \u0275\u0275text(68, "Throughput:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "span", 42);
    \u0275\u0275text(70);
    \u0275\u0275pipe(71, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 52)(73, "span", 53);
    \u0275\u0275text(74, "Avg Latency:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "span", 42);
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 52)(79, "span", 53);
    \u0275\u0275text(80, "Success Rate:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "span", 42);
    \u0275\u0275text(82);
    \u0275\u0275pipe(83, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 52)(85, "span", 53);
    \u0275\u0275text(86, "Last Activity:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "span", 42);
    \u0275\u0275text(88);
    \u0275\u0275pipe(89, "date");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    const storage_r4 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", storage_r4.storageType, " (", storage_r4.target, ") - Detailed Metrics ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 15, storage_r4.totalOperations, "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 18, storage_r4.successfulOperations, "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 21, storage_r4.failedOperations, "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(31, 24, storage_r4.errorRate, "1.2-2"), "%");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(39, 27, storage_r4.minLatencyMs, "1.0-0"), "ms");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(45, 30, storage_r4.p50LatencyMs, "1.0-0"), "ms");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(51, 33, storage_r4.p95LatencyMs, "1.0-0"), "ms");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(57, 36, storage_r4.p99LatencyMs, "1.0-0"), "ms");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(63, 39, storage_r4.maxLatencyMs, "1.0-0"), "ms");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(71, 42, storage_r4.throughputOpsPerSec, "1.2-2"), " ops/s");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(77, 45, storage_r4.avgLatencyMs, "1.0-0"), "ms");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(83, 48, storage_r4.successRate, "1.2-2"), "%");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(89, 51, storage_r4.lastActivity, "short"));
  }
}
function DataStorageComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 13);
    \u0275\u0275template(1, DataStorageComponent_Conditional_13_ng_template_1_Template, 29, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, DataStorageComponent_Conditional_13_ng_template_3_Template, 30, 33, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(5, DataStorageComponent_Conditional_13_ng_template_5_Template, 90, 54, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", (ctx_r0.storage == null ? null : ctx_r0.storage.storageServices) ?? \u0275\u0275pureFunction0(5, _c02))("paginator", true)("rows", 10)("rowsPerPageOptions", \u0275\u0275pureFunction0(6, _c12))("expandedRowKeys", ctx_r0.expandedRows);
  }
}
var DataStorageComponent = class _DataStorageComponent {
  healthService = inject(RealSystemHealthService);
  cdr = inject(ChangeDetectorRef);
  destroyRef = inject(DestroyRef);
  //Data
  storage = null;
  // Loading states
  loading = false;
  // Expanded rows tracking
  expandedRows = {};
  // Time range selector
  timeRanges = [6, 12, 24];
  // Hours
  timeRangeOptions = this.timeRanges.map((range) => ({
    label: range + "h",
    value: range
  }));
  selectedTimeRange = 6;
  // Default to 6 hours
  ngOnInit() {
    this.fetchStorageData();
  }
  fetchStorageData() {
    this.loading = true;
    this.healthService.fetchStorage(`${this.selectedTimeRange}h`).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (data) => {
        this.storage = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  onTimeRangeChange(event) {
    this.selectedTimeRange = +event.value;
    this.fetchStorageData();
  }
  refreshData() {
    this.fetchStorageData();
  }
  getStatusSeverity(status) {
    switch (status?.toLowerCase()) {
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
  getStatusIcon(status) {
    switch (status?.toLowerCase()) {
      case "healthy":
        return "pi-check-circle";
      case "warning":
        return "pi-exclamation-triangle";
      case "critical":
        return "pi-times-circle";
      default:
        return "pi-info-circle";
    }
  }
  static \u0275fac = function DataStorageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DataStorageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DataStorageComponent, selectors: [["app-data-storage"]], decls: 14, vars: 5, consts: [["header", ""], ["body", ""], ["expandedrow", ""], [1, "m-4", "flex", "items-center", "justify-between", "gap-4", "flex-wrap"], [1, "text-2xl", "font-bold", "text-gray-800"], [1, "flex", "items-center", "gap-4", "flex-wrap"], [1, "flex", "items-center", "gap-2"], ["for", "timeRange", 1, "text-sm", "font-semibold", "text-gray-700"], ["inputId", "timeRange", "placeholder", "Select time range", 1, "min-w-[100px]", 3, "ngModelChange", "onChange", "options", "ngModel"], ["icon", "pi pi-refresh", "label", "Refresh", "severity", "secondary", "size", "small", 3, "onClick", "loading"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-4", "m-4"], ["header", "Storage Overview", 1, "m-4"], [1, "text-center", "py-8", "text-gray-500"], ["dataKey", "target", 1, "p-datatable-sm", 3, "value", "paginator", "rows", "rowsPerPageOptions", "expandedRowKeys"], [1, "text-center"], [1, "text-[2rem]", "font-bold", "text-gray-800", "mb-1"], [1, "text-sm", "text-gray-800"], [1, "text-[2rem]", "font-bold", "text-green-800", "mb-1"], [1, "pi", "pi-spin", "pi-spinner", "text-5xl", "mb-4", "block"], [1, "text-lg", "font-medium"], [1, "pi", "pi-inbox", "text-5xl", "text-gray-800", "mb-4", "block"], [1, "text-lg", "font-semibold"], ["scope", "col", 1, "w-12"], ["scope", "col", "pSortableColumn", "storageType"], ["field", "storageType"], ["scope", "col", "pSortableColumn", "target"], ["field", "target"], ["scope", "col", "pSortableColumn", "status"], ["field", "status"], ["scope", "col", "pSortableColumn", "totalOperations", 1, "text-right"], ["field", "totalOperations"], ["scope", "col", "pSortableColumn", "successRate", 1, "text-right"], ["field", "successRate"], ["scope", "col", "pSortableColumn", "avgLatencyMs", 1, "text-right"], ["field", "avgLatencyMs"], ["scope", "col", "pSortableColumn", "p95LatencyMs", 1, "text-right"], ["field", "p95LatencyMs"], ["scope", "col", "pSortableColumn", "throughputOpsPerSec", 1, "text-right"], ["field", "throughputOpsPerSec"], ["scope", "col", "pSortableColumn", "lastActivity"], ["field", "lastActivity"], ["pRipple", "", 1, "p-button-text", "p-button-rounded", "p-button-plain", 3, "pRowToggler", "icon"], [1, "font-semibold"], [1, "text-sm"], [3, "value", "severity", "icon"], [1, "text-right"], ["colspan", "10"], [1, "p-4"], [1, "text-lg", "font-semibold", "mb-3"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-4"], ["header", "Operation Statistics"], [1, "space-y-2"], [1, "flex", "justify-between", "text-sm"], [1, "text-gray-800"], [1, "font-semibold", "text-green-800"], [1, "font-semibold", "text-red-800"], ["header", "Latency Percentiles"], ["header", "Performance Summary"]], template: function DataStorageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "h2", 4);
      \u0275\u0275text(2, "Data Storage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 5)(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6, "Time Range:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p-select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function DataStorageComponent_Template_p_select_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedTimeRange, $event) || (ctx.selectedTimeRange = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function DataStorageComponent_Template_p_select_onChange_7_listener($event) {
        return ctx.onTimeRangeChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "p-button", 9);
      \u0275\u0275listener("onClick", function DataStorageComponent_Template_p_button_onClick_8_listener() {
        return ctx.refreshData();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(9, DataStorageComponent_Conditional_9_Template, 15, 7, "div", 10);
      \u0275\u0275elementStart(10, "p-card", 11);
      \u0275\u0275conditionalCreate(11, DataStorageComponent_Conditional_11_Template, 4, 0, "div", 12)(12, DataStorageComponent_Conditional_12_Template, 4, 0, "div", 12)(13, DataStorageComponent_Conditional_13_Template, 7, 7, "p-table", 13);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("options", ctx.timeRangeOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedTimeRange);
      \u0275\u0275advance();
      \u0275\u0275property("loading", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.storage ? 9 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading && !ctx.storage ? 11 : !(ctx.storage == null ? null : ctx.storage.storageServices) || (ctx.storage == null ? null : ctx.storage.storageServices == null ? null : ctx.storage.storageServices.length) === 0 ? 12 : 13);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    NgControlStatus,
    NgModel,
    CardModule,
    Card,
    TableModule,
    Table,
    SortableColumn,
    RowToggler,
    SortIcon,
    ButtonModule,
    Button,
    SelectModule,
    Select,
    TagModule,
    Tag,
    DecimalPipe,
    PercentPipe,
    DatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataStorageComponent, [{
    type: Component,
    args: [{ selector: "app-data-storage", imports: [
      CommonModule,
      FormsModule,
      CardModule,
      TableModule,
      ButtonModule,
      SelectModule,
      TagModule
    ], template: `<!-- Header with Controls -->
<div class="m-4 flex items-center justify-between gap-4 flex-wrap">
  <h2 class="text-2xl font-bold text-gray-800">Data Storage</h2>

  <div class="flex items-center gap-4 flex-wrap">
    <!-- Time Range Selector -->
    <div class="flex items-center gap-2">
      <label for="timeRange" class="text-sm font-semibold text-gray-700"
        >Time Range:</label
      >
      <p-select
        inputId="timeRange"
        [options]="timeRangeOptions"
        [(ngModel)]="selectedTimeRange"
        (onChange)="onTimeRangeChange($event)"
        placeholder="Select time range"
        class="min-w-[100px]"
      />
    </div>

    <!-- Refresh Button -->
    <p-button
      icon="pi pi-refresh"
      [loading]="loading"
      (onClick)="refreshData()"
      label="Refresh"
      severity="secondary"
      size="small"
    />
  </div>
</div>

<!-- Summary Cards -->
@if (storage) {
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 m-4">
    <p-card>
      <div class="text-center">
        <div class="text-[2rem] font-bold text-gray-800 mb-1">
          {{ storage.totalOperations | number }}
        </div>
        <div class="text-sm text-gray-800">Total Operations</div>
      </div>
    </p-card>

    <p-card>
      <div class="text-center">
        <div class="text-[2rem] font-bold text-green-800 mb-1">
          {{ storage.totalSuccessRate / 100 | percent: '1.1-1' }}
        </div>
        <div class="text-sm text-gray-800">Total Success Rate</div>
      </div>
    </p-card>
  </div>
}

<!-- Storage Overview table -->
<p-card header="Storage Overview" class="m-4">
  @if (loading && !storage) {
    <div class="text-center py-8 text-gray-500">
      <i class="pi pi-spin pi-spinner text-5xl mb-4 block"></i>
      <p class="text-lg font-medium">Loading storage data...</p>
    </div>
  } @else if (
    !storage?.storageServices || storage?.storageServices?.length === 0
  ) {
    <div class="text-center py-8 text-gray-500">
      <i class="pi pi-inbox text-5xl text-gray-800 mb-4 block"></i>
      <p class="text-lg font-semibold">No storage data available</p>
    </div>
  } @else {
    <p-table
      [value]="storage?.storageServices ?? []"
      [paginator]="true"
      [rows]="10"
      [rowsPerPageOptions]="[5, 10, 20, 50]"
      [expandedRowKeys]="expandedRows"
      dataKey="target"
      class="p-datatable-sm"
    >
      <ng-template #header>
        <tr>
          <th scope="col" class="w-12"></th>
          <th scope="col" pSortableColumn="storageType">
            Storage Type <p-sortIcon field="storageType" />
          </th>
          <th scope="col" pSortableColumn="target">
            Target <p-sortIcon field="target" />
          </th>
          <th scope="col" pSortableColumn="status">
            Status <p-sortIcon field="status" />
          </th>
          <th scope="col" pSortableColumn="totalOperations" class="text-right">
            Operations <p-sortIcon field="totalOperations" />
          </th>
          <th scope="col" pSortableColumn="successRate" class="text-right">
            Success Rate <p-sortIcon field="successRate" />
          </th>
          <th scope="col" pSortableColumn="avgLatencyMs" class="text-right">
            Avg Latency <p-sortIcon field="avgLatencyMs" />
          </th>
          <th scope="col" pSortableColumn="p95LatencyMs" class="text-right">
            P95 Latency <p-sortIcon field="p95LatencyMs" />
          </th>
          <th
            scope="col"
            pSortableColumn="throughputOpsPerSec"
            class="text-right"
          >
            Throughput <p-sortIcon field="throughputOpsPerSec" />
          </th>
          <th scope="col" pSortableColumn="lastActivity">
            Last Activity <p-sortIcon field="lastActivity" />
          </th>
        </tr>
      </ng-template>

      <ng-template #body let-storage let-expanded="expanded">
        <tr>
          <td>
            <p-button
              pRipple
              [pRowToggler]="storage"
              class="p-button-text p-button-rounded p-button-plain"
              [icon]="expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'"
            ></p-button>
          </td>
          <td>
            <span class="font-semibold">{{ storage.storageType }}</span>
          </td>
          <td>
            <span class="text-sm">{{ storage.target }}</span>
          </td>
          <td>
            <p-tag
              [value]="storage.status"
              [severity]="getStatusSeverity(storage.status)"
              [icon]="'pi ' + getStatusIcon(storage.status)"
            />
          </td>
          <td class="text-right">
            {{ storage.totalOperations | number: '1.0-0' }}
          </td>
          <td class="text-right">
            <span
              [class]="
                storage.successRate >= 95
                  ? 'text-green-800 font-semibold'
                  : storage.successRate >= 90
                    ? 'text-yellow-800 font-semibold'
                    : 'text-red-800 font-semibold'
              "
            >
              {{ storage.successRate | number: '1.2-2' }}%
            </span>
          </td>
          <td class="text-right">
            {{ storage.avgLatencyMs | number: '1.0-0' }}ms
          </td>
          <td class="text-right">
            {{ storage.p95LatencyMs | number: '1.0-0' }}ms
          </td>
          <td class="text-right">
            {{ storage.throughputOpsPerSec | number: '1.2-2' }} ops/s
          </td>
          <td>{{ storage.lastActivity | date: 'short' }}</td>
        </tr>
      </ng-template>

      <ng-template #expandedrow let-storage>
        <tr>
          <td colspan="10">
            <div class="p-4">
              <h4 class="text-lg font-semibold mb-3">
                {{ storage.storageType }} ({{ storage.target }}) - Detailed
                Metrics
              </h4>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <!-- Operation Statistics -->
                <p-card header="Operation Statistics">
                  <div class="space-y-2">
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-800">Total:</span>
                      <span class="font-semibold">{{
                        storage.totalOperations | number: '1.0-0'
                      }}</span>
                    </div>
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-800">Successful:</span>
                      <span class="font-semibold text-green-800">{{
                        storage.successfulOperations | number: '1.0-0'
                      }}</span>
                    </div>
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-800">Failed:</span>
                      <span class="font-semibold text-red-800">{{
                        storage.failedOperations | number: '1.0-0'
                      }}</span>
                    </div>
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-800">Error Rate:</span>
                      <span class="font-semibold"
                        >{{ storage.errorRate | number: '1.2-2' }}%</span
                      >
                    </div>
                  </div>
                </p-card>

                <!-- Latency Percentiles -->
                <p-card header="Latency Percentiles">
                  <div class="space-y-2">
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-800">Min:</span>
                      <span class="font-semibold"
                        >{{ storage.minLatencyMs | number: '1.0-0' }}ms</span
                      >
                    </div>
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-800">P50:</span>
                      <span class="font-semibold"
                        >{{ storage.p50LatencyMs | number: '1.0-0' }}ms</span
                      >
                    </div>
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-800">P95:</span>
                      <span class="font-semibold"
                        >{{ storage.p95LatencyMs | number: '1.0-0' }}ms</span
                      >
                    </div>
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-800">P99:</span>
                      <span class="font-semibold"
                        >{{ storage.p99LatencyMs | number: '1.0-0' }}ms</span
                      >
                    </div>
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-800">Max:</span>
                      <span class="font-semibold"
                        >{{ storage.maxLatencyMs | number: '1.0-0' }}ms</span
                      >
                    </div>
                  </div>
                </p-card>

                <!-- Performance Summary -->
                <p-card header="Performance Summary">
                  <div class="space-y-2">
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-800">Throughput:</span>
                      <span class="font-semibold"
                        >{{
                          storage.throughputOpsPerSec | number: '1.2-2'
                        }}
                        ops/s</span
                      >
                    </div>
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-800">Avg Latency:</span>
                      <span class="font-semibold"
                        >{{ storage.avgLatencyMs | number: '1.0-0' }}ms</span
                      >
                    </div>
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-800">Success Rate:</span>
                      <span class="font-semibold"
                        >{{ storage.successRate | number: '1.2-2' }}%</span
                      >
                    </div>
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-800">Last Activity:</span>
                      <span class="font-semibold">{{
                        storage.lastActivity | date: 'short'
                      }}</span>
                    </div>
                  </div>
                </p-card>
              </div>
            </div>
          </td>
        </tr>
      </ng-template>
    </p-table>
  }
</p-card>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DataStorageComponent, { className: "DataStorageComponent", filePath: "src/app/features/administration/components/system-health/data-storage/data-storage.component.ts", lineNumber: 45 });
})();

// src/app/features/administration/components/system-health/errors-and-alerts/errors-and-alerts.component.ts
var _c03 = ["errorTimelineCanvas"];
var _c13 = (a0, a1) => [a0, a1];
var _forTrack02 = ($index, $item) => $item.timestamp;
function ErrorsAndAlertsComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "i", 27);
    \u0275\u0275elementStart(2, "p", 28);
    \u0275\u0275text(3, "Loading error timeline...");
    \u0275\u0275elementEnd()();
  }
}
function ErrorsAndAlertsComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "canvas", null, 2);
    \u0275\u0275elementEnd();
  }
}
function ErrorsAndAlertsComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275elementStart(2, "p", 30);
    \u0275\u0275text(3, "No error data available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 31);
    \u0275\u0275text(5, "Error timeline data will appear here when available");
    \u0275\u0275elementEnd()();
  }
}
function ErrorsAndAlertsComponent_ng_template_47_For_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275element(1, "i", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const alert_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", alert_r2.count, "x ");
  }
}
function ErrorsAndAlertsComponent_ng_template_47_For_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44);
    \u0275\u0275text(2, " Sample Error: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const alert_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", alert_r2.sampleError, " ");
  }
}
function ErrorsAndAlertsComponent_ng_template_47_For_1_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44);
    \u0275\u0275text(2, " Details: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const alert_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", alert_r2.details, " ");
  }
}
function ErrorsAndAlertsComponent_ng_template_47_For_1_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 46);
    \u0275\u0275element(2, "i", 55);
    \u0275\u0275text(3, "Affected Resource ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 56);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const alert_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", alert_r2.affectedResource, " ");
  }
}
function ErrorsAndAlertsComponent_ng_template_47_For_1_Conditional_64_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const alert_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", alert_r2.durationMinutes, " min ");
  }
}
function ErrorsAndAlertsComponent_ng_template_47_For_1_Conditional_64_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const alert_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, alert_r2.durationMinutes / 60, "1.1-1"), " hours ");
  }
}
function ErrorsAndAlertsComponent_ng_template_47_For_1_Conditional_64_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const alert_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, alert_r2.durationMinutes / 1440, "1.1-1"), " days ");
  }
}
function ErrorsAndAlertsComponent_ng_template_47_For_1_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 46);
    \u0275\u0275element(2, "i", 57);
    \u0275\u0275text(3, "Duration ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16);
    \u0275\u0275conditionalCreate(5, ErrorsAndAlertsComponent_ng_template_47_For_1_Conditional_64_Conditional_5_Template, 1, 1)(6, ErrorsAndAlertsComponent_ng_template_47_For_1_Conditional_64_Conditional_6_Template, 2, 4)(7, ErrorsAndAlertsComponent_ng_template_47_For_1_Conditional_64_Conditional_7_Template, 2, 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const alert_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275conditional(alert_r2.durationMinutes < 60 ? 5 : alert_r2.durationMinutes < 1440 ? 6 : 7);
  }
}
function ErrorsAndAlertsComponent_ng_template_47_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "p-card")(2, "div", 33)(3, "div", 34);
    \u0275\u0275element(4, "i", 35);
    \u0275\u0275elementStart(5, "div")(6, "div", 36)(7, "span", 37);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 38);
    \u0275\u0275element(10, "i", 39);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 40);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, ErrorsAndAlertsComponent_ng_template_47_For_1_Conditional_14_Template, 3, 1, "span", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 42);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 43)(18, "div", 44);
    \u0275\u0275text(19, " Message: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 16);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(22, ErrorsAndAlertsComponent_ng_template_47_For_1_Conditional_22_Template, 5, 1, "div", 43);
    \u0275\u0275conditionalCreate(23, ErrorsAndAlertsComponent_ng_template_47_For_1_Conditional_23_Template, 5, 1, "div", 43);
    \u0275\u0275elementStart(24, "div", 45)(25, "div")(26, "div", 46);
    \u0275\u0275element(27, "i", 47);
    \u0275\u0275text(28, "Source ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 16);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(31, ErrorsAndAlertsComponent_ng_template_47_For_1_Conditional_31_Template, 6, 1, "div");
    \u0275\u0275elementStart(32, "div")(33, "div", 46);
    \u0275\u0275element(34, "i", 48);
    \u0275\u0275text(35, "Unique Issues ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 16);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div")(39, "div", 46);
    \u0275\u0275element(40, "i", 49);
    \u0275\u0275text(41, "Affected Operations ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 16);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div")(45, "div", 46);
    \u0275\u0275element(46, "i", 50);
    \u0275\u0275text(47, "First Occurrence ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 16);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "timeAgo");
    \u0275\u0275elementStart(51, "span", 51);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div")(55, "div", 46);
    \u0275\u0275element(56, "i", 52);
    \u0275\u0275text(57, "Last Occurrence ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 16);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "timeAgo");
    \u0275\u0275elementStart(61, "span", 51);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(64, ErrorsAndAlertsComponent_ng_template_47_For_1_Conditional_64_Template, 8, 1, "div");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const alert_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap("border-l-4 " + ctx_r2.getAlertBorderClass(alert_r2.severity));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(33, _c13, ctx_r2.getSeverityIcon(alert_r2.severity), ctx_r2.getSeverityColorClass(alert_r2.severity)));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.getSeverityBadgeClass(alert_r2.severity));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", alert_r2.severity.toUpperCase(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.getStatusBadgeClass(alert_r2.status));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.getStatusIcon(alert_r2.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", alert_r2.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", alert_r2.type, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(alert_r2.count > 1 ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Alert ID: ", alert_r2.id, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(alert_r2.message);
    \u0275\u0275advance();
    \u0275\u0275conditional(alert_r2.sampleError ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(alert_r2.details ? 23 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(alert_r2.source);
    \u0275\u0275advance();
    \u0275\u0275conditional(alert_r2.affectedResource ? 31 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", alert_r2.uniqueIssues, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", alert_r2.affectedOperations, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(50, 23, alert_r2.firstOccurrence), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(53, 25, alert_r2.firstOccurrence, "medium"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(60, 28, alert_r2.lastOccurrence), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(63, 30, alert_r2.lastOccurrence, "medium"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(alert_r2.durationMinutes > 0 ? 64 : -1);
  }
}
function ErrorsAndAlertsComponent_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ErrorsAndAlertsComponent_ng_template_47_For_1_Template, 65, 36, "div", 32, _forTrack02);
  }
  if (rf & 2) {
    const alerts_r4 = ctx.$implicit;
    \u0275\u0275repeater(alerts_r4);
  }
}
function ErrorsAndAlertsComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "i", 58);
    \u0275\u0275elementStart(2, "p", 30);
    \u0275\u0275text(3, "No alerts found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 31);
    \u0275\u0275text(5, "All systems are operating normally");
    \u0275\u0275elementEnd()();
  }
}
function ErrorsAndAlertsComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-card", 26)(1, "div", 21);
    \u0275\u0275element(2, "i", 27);
    \u0275\u0275elementStart(3, "p", 28);
    \u0275\u0275text(4, "Loading alerts...");
    \u0275\u0275elementEnd()()();
  }
}
Chart.register(...registerables);
var ErrorsAndAlertsComponent = class _ErrorsAndAlertsComponent {
  healthService = inject(RealSystemHealthService);
  cdr = inject(ChangeDetectorRef);
  destroyRef = inject(DestroyRef);
  errorTimelineCanvas;
  alerts = [];
  alertsSummary = null;
  errorTimeline = null;
  loading = false;
  chartLoading = false;
  chart = null;
  // Pagination
  rows = 10;
  // Items per page
  first = 0;
  // Starting index
  // Sorting
  sortField = "!timestamp";
  // Default sort value for the dropdown
  sortOrder = -1;
  // -1 = descending (newest first)
  sortOptions = [
    { label: "Newest First", value: "!timestamp" },
    { label: "Oldest First", value: "timestamp" },
    { label: "Severity (High to Low)", value: "!severity" },
    { label: "Most Occurrences", value: "!count" },
    { label: "Most Unique Issues", value: "!uniqueIssues" },
    { label: "Active First", value: "!status" }
  ];
  // Time range selector
  timeRanges = [6, 12, 24, 48];
  // Hours
  timeRangeOptions = this.timeRanges.map((range) => ({
    label: range + "h",
    value: range
  }));
  selectedTimeRange = 6;
  // Default to 6 hours for alerts
  // Filter options
  severityFilter = "all";
  severityOptions = [
    { label: "All Severities", value: "all" },
    { label: "Critical", value: "Critical" },
    { label: "Error", value: "Error" },
    { label: "Warning", value: "Warning" },
    { label: "Information", value: "Information" }
  ];
  ngOnInit() {
    this.loadAlerts();
    this.loadErrorTimeline();
    this.healthService.systemHealth$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((healthData) => {
      if (healthData?.alerts) {
        this.alertsSummary = healthData.alerts;
        this.alerts = this.sortAlerts(healthData.alerts.alerts);
        this.cdr.detectChanges();
      }
    });
  }
  ngAfterViewInit() {
    if (this.errorTimeline !== null) {
      this.createOrUpdateChart();
    }
  }
  loadAlerts() {
    this.loading = true;
    this.healthService.fetchAlerts(`${this.selectedTimeRange}h`).subscribe({
      next: (alertsSummary) => {
        this.alertsSummary = alertsSummary;
        this.alerts = this.sortAlerts(alertsSummary?.alerts ?? []);
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error loading alerts:", error);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  onTimeRangeChange(event) {
    this.selectedTimeRange = +event.value;
    this.first = 0;
    this.loadAlerts();
  }
  onSeverityFilterChange(event) {
    this.severityFilter = event.value;
    this.first = 0;
  }
  onSortChange(event) {
    const value = event.value;
    if (value.startsWith("!")) {
      this.sortOrder = -1;
      this.sortField = value.substring(1);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
    this.alerts = this.sortAlerts(this.alerts);
  }
  sortAlerts(alerts) {
    const sorted = [...alerts];
    const fieldName = this.sortField.startsWith("!") ? this.sortField.substring(1) : this.sortField;
    sorted.sort((a, b) => {
      let result;
      switch (fieldName) {
        case "timestamp":
          result = new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
          break;
        case "severity":
          result = this.getSeverityWeight(a.severity) - this.getSeverityWeight(b.severity);
          break;
        case "count":
          result = a.count - b.count;
          break;
        case "uniqueIssues":
          result = a.uniqueIssues - b.uniqueIssues;
          break;
        case "status":
          result = this.getStatusWeight(a.status) - this.getStatusWeight(b.status);
          break;
        default:
          return 0;
      }
      return result * this.sortOrder;
    });
    return sorted;
  }
  getSeverityWeight(severity) {
    switch (severity) {
      case "Critical":
        return 4;
      case "Error":
        return 3;
      case "Warning":
        return 2;
      case "Information":
        return 1;
      default:
        return 0;
    }
  }
  getStatusWeight(status) {
    switch (status) {
      case "Active":
        return 3;
      case "Recent":
        return 2;
      case "Resolved":
        return 1;
      default:
        return 0;
    }
  }
  getFilteredAlerts() {
    if (this.severityFilter === "all") {
      return this.alerts;
    }
    return this.alerts.filter((alert) => alert.severity === this.severityFilter);
  }
  // App Insights alerts are just alerts - no "resolved" state like Azure Monitor alerts
  // We just show all alerts within the time range
  getAllAlerts() {
    return this.getFilteredAlerts();
  }
  getSeverityIcon(severity) {
    switch (severity) {
      case "Critical":
        return "pi-times-circle";
      case "Error":
        return "pi-exclamation-circle";
      case "Warning":
        return "pi-exclamation-triangle";
      case "Information":
        return "pi-info-circle";
      default:
        return "pi-info-circle";
    }
  }
  getSeverityColorClass(severity) {
    switch (severity) {
      case "Critical":
        return "text-red-600";
      case "Error":
        return "text-orange-600";
      case "Warning":
        return "text-yellow-600";
      case "Information":
        return "text-blue-600";
      default:
        return "text-gray-600";
    }
  }
  getSeverityBadgeClass(severity) {
    switch (severity) {
      case "Critical":
        return "bg-red-100 text-red-800";
      case "Error":
        return "bg-orange-100 text-orange-800";
      case "Warning":
        return "bg-yellow-100 text-yellow-800";
      case "Information":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  }
  getAlertBorderClass(severity) {
    switch (severity) {
      case "Critical":
        return "border-red-500";
      case "Error":
        return "border-orange-500";
      case "Warning":
        return "border-yellow-500";
      case "Information":
        return "border-blue-500";
      default:
        return "border-gray-500";
    }
  }
  getAlertDuration(firstOccurrence, lastOccurrence) {
    try {
      const first = parseISO(firstOccurrence);
      const last = parseISO(lastOccurrence);
      return formatDistanceStrict(first, last);
    } catch {
      return "N/A";
    }
  }
  getStatusBadgeClass(status) {
    switch (status) {
      case "Active":
        return "bg-red-100 text-red-800 border border-red-200";
      case "Recent":
        return "bg-orange-100 text-orange-800 border border-orange-200";
      case "Resolved":
        return "bg-green-100 text-green-800 border border-green-200";
      default:
        return "bg-gray-100 text-gray-800";
    }
  }
  getStatusIcon(status) {
    switch (status) {
      case "Active":
        return "pi-exclamation-circle";
      case "Recent":
        return "pi-clock";
      case "Resolved":
        return "pi-check-circle";
      default:
        return "pi-info-circle";
    }
  }
  refreshAlerts() {
    this.loadAlerts();
    this.loadErrorTimeline();
  }
  loadErrorTimeline() {
    this.chartLoading = true;
    this.healthService.fetchErrorTimelineData(`${this.selectedTimeRange}h`).subscribe({
      next: (timeline) => {
        this.errorTimeline = timeline;
        this.chartLoading = false;
        this.cdr.detectChanges();
        const canvasEl = this.errorTimelineCanvas?.nativeElement;
        if (canvasEl !== void 0) {
          this.createOrUpdateChart();
        }
      },
      error: (err) => {
        console.error("Error loading error timeline:", err);
        this.chartLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  createOrUpdateChart() {
    const canvasEl = this.errorTimelineCanvas?.nativeElement;
    if (!this.errorTimeline || canvasEl === void 0) {
      return;
    }
    const ctx = canvasEl.getContext("2d");
    if (!ctx) {
      return;
    }
    if (this.chart) {
      this.chart.destroy();
    }
    const serviceColors = {
      "Azure Functions": "#3b82f6",
      "Cosmos DB": "#8b5cf6",
      PostgreSQL: "#06b6d4",
      "Blob Storage": "#10b981",
      "Redis Cache": "#f59e0b",
      "Event Hub": "#ef4444",
      "Azure Table Storage": "#ec4899"
    };
    const datasets = this.errorTimeline.services.map((service) => {
      const timeline = this.errorTimeline;
      if (!timeline) {
        return null;
      }
      const serviceData = timeline.dataPoints.filter((dp) => dp.service === service).map((dp) => ({
        x: new Date(dp.timestamp).getTime(),
        y: dp.errorCount
      }));
      return {
        label: service,
        data: serviceData,
        borderColor: serviceColors[service] ?? "#6b7280",
        backgroundColor: (serviceColors[service] ?? "#6b7280") + "20",
        borderWidth: 2,
        tension: 0.4,
        fill: true
      };
    }).filter((dataset) => dataset !== null);
    const config = {
      type: "line",
      data: {
        datasets
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: "index",
          intersect: false
        },
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              usePointStyle: true,
              padding: 15,
              font: {
                family: "Ubuntu"
              }
            }
          },
          tooltip: {
            callbacks: {
              title: (items) => {
                const xValue = items[0]?.parsed?.x;
                if (xValue == null) {
                  return "";
                }
                const date = new Date(xValue);
                return date.toLocaleString();
              },
              label: (context) => {
                const label = context.dataset.label ?? "";
                const value = context.parsed.y;
                return `${label}: ${value} error${value === 1 ? "" : "s"}`;
              }
            }
          }
        },
        scales: {
          x: {
            type: "time",
            time: {
              unit: "minute",
              displayFormats: {
                minute: "HH:mm",
                hour: "MMM d, HH:mm"
              }
            },
            title: {
              display: true,
              text: "Time",
              font: {
                family: "Ubuntu"
              }
            },
            grid: {
              display: true,
              color: "#f3f4f6"
            },
            ticks: {
              font: {
                family: "Ubuntu"
              }
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Error Count",
              font: {
                family: "Ubuntu"
              }
            },
            ticks: {
              precision: 0,
              font: {
                family: "Ubuntu"
              }
            },
            grid: {
              color: "#f3f4f6"
            }
          }
        }
      }
    };
    this.chart = new Chart(ctx, config);
  }
  static \u0275fac = function ErrorsAndAlertsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ErrorsAndAlertsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ErrorsAndAlertsComponent, selectors: [["app-errors-and-alerts"]], viewQuery: function ErrorsAndAlertsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorTimelineCanvas = _t.first);
    }
  }, decls: 51, vars: 19, consts: [["dv", ""], ["list", ""], ["errorTimelineCanvas", ""], [1, "m-4", "flex", "items-center", "justify-between", "gap-4", "flex-wrap"], [1, "flex", "items-center", "gap-4", "flex-wrap"], [1, "flex", "items-center", "gap-2"], ["for", "sortBy", 1, "text-sm", "font-semibold", "text-gray-700"], ["inputId", "sortBy", "placeholder", "Sort by", "styleClass", "min-w-[180px]", 3, "ngModelChange", "onChange", "options", "ngModel"], ["for", "severityFilter", 1, "text-sm", "font-semibold", "text-gray-700"], ["inputId", "severityFilter", "placeholder", "All Severities", "styleClass", "min-w-[150px]", 3, "ngModelChange", "onChange", "options", "ngModel"], ["for", "timeRange", 1, "text-sm", "font-semibold", "text-gray-700"], ["inputId", "timeRange", "placeholder", "Select time range", "styleClass", "min-w-[100px]", 3, "ngModelChange", "onChange", "options", "ngModel"], ["icon", "pi pi-refresh", "label", "Refresh", "severity", "secondary", "size", "small", 3, "onClick", "loading"], [1, "grid", "grid-cols-[repeat(auto-fit,minmax(200px,1fr))]", "gap-4", "m-4"], [1, "text-center"], [1, "text-[2rem]", "font-bold", "text-gray-800", "mb-1"], [1, "text-sm", "text-gray-800"], [1, "text-[2rem]", "font-bold", "text-red-800", "mb-1"], [1, "text-[2rem]", "font-bold", "text-orange-800", "mb-1"], [1, "text-[2rem]", "font-bold", "text-yellow-800", "mb-1"], ["header", "Error Timeline by Service", 1, "m-4"], [1, "text-center", "py-8", "text-gray-500"], [1, "chart-container"], ["header", "Recent Alerts", 1, "m-4"], ["emptyMessage", "No alerts found", 3, "value", "paginator", "rows", "first", "alwaysShowPaginator", "loading"], ["pTemplate", "empty"], ["styleClass", "m-4"], [1, "pi", "pi-spin", "pi-spinner", "text-5xl", "mb-4", "block"], [1, "text-lg", "font-medium"], [1, "pi", "pi-chart-line", "text-5xl", "text-gray-800", "mb-4", "block"], [1, "text-lg", "font-semibold"], [1, "text-sm"], [1, "mb-4"], [1, "flex", "items-start", "justify-between", "gap-4", "mb-3"], [1, "flex", "items-center", "gap-3"], [1, "pi", "text-2xl", 3, "ngClass"], [1, "flex", "items-center", "gap-2", "mb-1", "flex-wrap"], [1, "px-2", "py-1", "rounded", "text-xs", "font-bold", 3, "ngClass"], [1, "px-2", "py-1", "rounded", "text-xs", "font-semibold", "flex", "items-center", "gap-1", 3, "ngClass"], [1, "pi", "text-xs", 3, "ngClass"], [1, "px-2", "py-1", "bg-gray-100", "rounded", "text-xs", "font-medium"], [1, "px-2", "py-1", "bg-purple-100", "text-purple-800", "rounded", "text-xs", "font-semibold"], [1, "text-xs", "text-gray-500"], [1, "mb-3"], [1, "text-sm", "font-semibold", "text-gray-700", "mb-1"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-3", "pt-3", "border-t", "border-gray-200"], [1, "text-xs", "font-semibold", "text-gray-800", "mb-1"], [1, "pi", "pi-box", "mr-1"], [1, "pi", "pi-list", "mr-1"], [1, "pi", "pi-sitemap", "mr-1"], [1, "pi", "pi-calendar-plus", "mr-1"], [1, "text-xs", "text-gray-500", "block"], [1, "pi", "pi-calendar-times", "mr-1"], [1, "pi", "pi-sync", "mr-1"], [1, "text-xs", "text-gray-800", "bg-gray-50", "p-2", "rounded", "font-mono", "break-all"], [1, "pi", "pi-server", "mr-1"], [1, "text-sm", "text-gray-800", "break-all"], [1, "pi", "pi-clock", "mr-1"], [1, "pi", "pi-check-circle", "text-5xl", "text-green-500", "mb-4", "block"]], template: function ErrorsAndAlertsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "label", 6);
      \u0275\u0275text(4, "Sort:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p-select", 7);
      \u0275\u0275twoWayListener("ngModelChange", function ErrorsAndAlertsComponent_Template_p_select_ngModelChange_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.sortField, $event) || (ctx.sortField = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("onChange", function ErrorsAndAlertsComponent_Template_p_select_onChange_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSortChange($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 5)(7, "label", 8);
      \u0275\u0275text(8, "Severity:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p-select", 9);
      \u0275\u0275twoWayListener("ngModelChange", function ErrorsAndAlertsComponent_Template_p_select_ngModelChange_9_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.severityFilter, $event) || (ctx.severityFilter = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("onChange", function ErrorsAndAlertsComponent_Template_p_select_onChange_9_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSeverityFilterChange($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 5)(11, "label", 10);
      \u0275\u0275text(12, "Time Range:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p-select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function ErrorsAndAlertsComponent_Template_p_select_ngModelChange_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedTimeRange, $event) || (ctx.selectedTimeRange = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("onChange", function ErrorsAndAlertsComponent_Template_p_select_onChange_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onTimeRangeChange($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "p-button", 12);
      \u0275\u0275listener("onClick", function ErrorsAndAlertsComponent_Template_p_button_onClick_14_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.refreshAlerts());
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 13)(16, "p-card")(17, "div", 14)(18, "div", 15);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 16);
      \u0275\u0275text(21, "Total Alerts");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "p-card")(23, "div", 14)(24, "div", 17);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 16);
      \u0275\u0275text(27, "Critical");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "p-card")(29, "div", 14)(30, "div", 18);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 16);
      \u0275\u0275text(33, "Errors");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "p-card")(35, "div", 14)(36, "div", 19);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 16);
      \u0275\u0275text(39, "Warnings");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(40, "p-card", 20);
      \u0275\u0275conditionalCreate(41, ErrorsAndAlertsComponent_Conditional_41_Template, 4, 0, "div", 21)(42, ErrorsAndAlertsComponent_Conditional_42_Template, 3, 0, "div", 22)(43, ErrorsAndAlertsComponent_Conditional_43_Template, 6, 0, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "p-card", 23)(45, "p-dataview", 24, 0);
      \u0275\u0275template(47, ErrorsAndAlertsComponent_ng_template_47_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(49, ErrorsAndAlertsComponent_ng_template_49_Template, 6, 0, "ng-template", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(50, ErrorsAndAlertsComponent_Conditional_50_Template, 5, 0, "p-card", 26);
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("options", ctx.sortOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.sortField);
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.severityOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.severityFilter);
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.timeRangeOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedTimeRange);
      \u0275\u0275advance();
      \u0275\u0275property("loading", ctx.loading);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", (ctx.alertsSummary == null ? null : ctx.alertsSummary.totalAlerts) ?? 0, " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", (ctx.alertsSummary == null ? null : ctx.alertsSummary.criticalCount) ?? 0, " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", (ctx.alertsSummary == null ? null : ctx.alertsSummary.errorCount) ?? 0, " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", (ctx.alertsSummary == null ? null : ctx.alertsSummary.warningCount) ?? 0, " ");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.chartLoading ? 41 : ctx.errorTimeline && ctx.errorTimeline.dataPoints.length > 0 ? 42 : 43);
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.getAllAlerts())("paginator", ctx.getAllAlerts().length > ctx.rows)("rows", ctx.rows)("first", ctx.first)("alwaysShowPaginator", false)("loading", ctx.loading);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.loading && ctx.alerts.length === 0 ? 50 : -1);
    }
  }, dependencies: [CommonModule, NgClass, CardModule, Card, PrimeTemplate, SelectModule, Select, ButtonModule, Button, FormsModule, NgControlStatus, NgModel, DataViewModule, DataView, DecimalPipe, DatePipe, TimeAgoPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.chart-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 400px;\n}\n  .p-dataview .p-dataview-content {\n  background: transparent;\n  border: none;\n}\n  .p-dataview .p-paginator {\n  background: transparent;\n  border: none;\n  padding: 1rem 0;\n}\n  p-message {\n  display: block;\n}\n  .p-card {\n  border-width: 1px;\n}\n/*# sourceMappingURL=errors-and-alerts.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorsAndAlertsComponent, [{
    type: Component,
    args: [{ selector: "app-errors-and-alerts", imports: [
      CommonModule,
      CardModule,
      SelectModule,
      ButtonModule,
      FormsModule,
      DataViewModule,
      TimeAgoPipe
    ], template: `<!-- Header with Filters -->
<div class="m-4 flex items-center justify-between gap-4 flex-wrap">
  <div class="flex items-center gap-4 flex-wrap">
    <!-- Sort By -->
    <div class="flex items-center gap-2">
      <label for="sortBy" class="text-sm font-semibold text-gray-700"
        >Sort:</label
      >
      <p-select
        inputId="sortBy"
        [options]="sortOptions"
        [(ngModel)]="sortField"
        (onChange)="onSortChange($event)"
        placeholder="Sort by"
        styleClass="min-w-[180px]"
      />
    </div>

    <!-- Severity Filter -->
    <div class="flex items-center gap-2">
      <label for="severityFilter" class="text-sm font-semibold text-gray-700"
        >Severity:</label
      >
      <p-select
        inputId="severityFilter"
        [options]="severityOptions"
        [(ngModel)]="severityFilter"
        (onChange)="onSeverityFilterChange($event)"
        placeholder="All Severities"
        styleClass="min-w-[150px]"
      />
    </div>

    <!-- Time Range Selector -->
    <div class="flex items-center gap-2">
      <label for="timeRange" class="text-sm font-semibold text-gray-700"
        >Time Range:</label
      >
      <p-select
        inputId="timeRange"
        [options]="timeRangeOptions"
        [(ngModel)]="selectedTimeRange"
        (onChange)="onTimeRangeChange($event)"
        placeholder="Select time range"
        styleClass="min-w-[100px]"
      />
    </div>

    <!-- Refresh Button -->
    <p-button
      icon="pi pi-refresh"
      [loading]="loading"
      (onClick)="refreshAlerts()"
      label="Refresh"
      severity="secondary"
      size="small"
    />
  </div>
</div>

<!-- Summary Cards -->
<div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 m-4">
  <p-card>
    <div class="text-center">
      <div class="text-[2rem] font-bold text-gray-800 mb-1">
        {{ alertsSummary?.totalAlerts ?? 0 }}
      </div>
      <div class="text-sm text-gray-800">Total Alerts</div>
    </div>
  </p-card>

  <p-card>
    <div class="text-center">
      <div class="text-[2rem] font-bold text-red-800 mb-1">
        {{ alertsSummary?.criticalCount ?? 0 }}
      </div>
      <div class="text-sm text-gray-800">Critical</div>
    </div>
  </p-card>

  <p-card>
    <div class="text-center">
      <div class="text-[2rem] font-bold text-orange-800 mb-1">
        {{ alertsSummary?.errorCount ?? 0 }}
      </div>
      <div class="text-sm text-gray-800">Errors</div>
    </div>
  </p-card>

  <p-card>
    <div class="text-center">
      <div class="text-[2rem] font-bold text-yellow-800 mb-1">
        {{ alertsSummary?.warningCount ?? 0 }}
      </div>
      <div class="text-sm text-gray-800">Warnings</div>
    </div>
  </p-card>
</div>

<!-- Error Timeline Chart -->
<p-card header="Error Timeline by Service" class="m-4">
  @if (chartLoading) {
    <div class="text-center py-8 text-gray-500">
      <i class="pi pi-spin pi-spinner text-5xl mb-4 block"></i>
      <p class="text-lg font-medium">Loading error timeline...</p>
    </div>
  } @else if (errorTimeline && errorTimeline.dataPoints.length > 0) {
    <div class="chart-container">
      <canvas #errorTimelineCanvas></canvas>
    </div>
  } @else {
    <div class="text-center py-8 text-gray-500">
      <i class="pi pi-chart-line text-5xl text-gray-800 mb-4 block"></i>
      <p class="text-lg font-semibold">No error data available</p>
      <p class="text-sm">Error timeline data will appear here when available</p>
    </div>
  }
</p-card>

<!-- Alerts DataView with Pagination -->
<p-card header="Recent Alerts" class="m-4">
  <p-dataview
    #dv
    [value]="getAllAlerts()"
    [paginator]="getAllAlerts().length > rows"
    [rows]="rows"
    [first]="first"
    [alwaysShowPaginator]="false"
    [loading]="loading"
    emptyMessage="No alerts found"
  >
    <!-- List Template -->
    <ng-template let-alerts #list>
      @for (alert of alerts; track alert.timestamp) {
        <div class="mb-4">
          <p-card [class]="'border-l-4 ' + getAlertBorderClass(alert.severity)">
            <!-- Alert Header -->
            <div class="flex items-start justify-between gap-4 mb-3">
              <div class="flex items-center gap-3">
                <i
                  class="pi text-2xl"
                  [ngClass]="[
                    getSeverityIcon(alert.severity),
                    getSeverityColorClass(alert.severity),
                  ]"
                ></i>
                <div>
                  <div class="flex items-center gap-2 mb-1 flex-wrap">
                    <span
                      class="px-2 py-1 rounded text-xs font-bold"
                      [ngClass]="getSeverityBadgeClass(alert.severity)"
                    >
                      {{ alert.severity.toUpperCase() }}
                    </span>
                    <span
                      class="px-2 py-1 rounded text-xs font-semibold flex items-center gap-1"
                      [ngClass]="getStatusBadgeClass(alert.status)"
                    >
                      <i
                        class="pi text-xs"
                        [ngClass]="getStatusIcon(alert.status)"
                      ></i>
                      {{ alert.status }}
                    </span>
                    <span
                      class="px-2 py-1 bg-gray-100 rounded text-xs font-medium"
                    >
                      {{ alert.type }}
                    </span>
                    @if (alert.count > 1) {
                      <span
                        class="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs font-semibold"
                      >
                        <i class="pi pi-sync mr-1"></i>
                        {{ alert.count }}x
                      </span>
                    }
                  </div>
                  <div class="text-xs text-gray-500">
                    Alert ID: {{ alert.id }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Alert Message -->
            <div class="mb-3">
              <div class="text-sm font-semibold text-gray-700 mb-1">
                Message:
              </div>
              <div class="text-sm text-gray-800">{{ alert.message }}</div>
            </div>

            <!-- Sample Error (if available) -->
            @if (alert.sampleError) {
              <div class="mb-3">
                <div class="text-sm font-semibold text-gray-700 mb-1">
                  Sample Error:
                </div>
                <div
                  class="text-xs text-gray-800 bg-gray-50 p-2 rounded font-mono break-all"
                >
                  {{ alert.sampleError }}
                </div>
              </div>
            }

            <!-- Alert Details (if available) -->
            @if (alert.details) {
              <div class="mb-3">
                <div class="text-sm font-semibold text-gray-700 mb-1">
                  Details:
                </div>
                <div
                  class="text-xs text-gray-800 bg-gray-50 p-2 rounded font-mono break-all"
                >
                  {{ alert.details }}
                </div>
              </div>
            }

            <!-- Alert Metadata Grid -->
            <div
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-3 border-t border-gray-200"
            >
              <!-- Source -->
              <div>
                <div class="text-xs font-semibold text-gray-800 mb-1">
                  <i class="pi pi-box mr-1"></i>Source
                </div>
                <div class="text-sm text-gray-800">{{ alert.source }}</div>
              </div>

              <!-- Affected Resource -->
              @if (alert.affectedResource) {
                <div>
                  <div class="text-xs font-semibold text-gray-800 mb-1">
                    <i class="pi pi-server mr-1"></i>Affected Resource
                  </div>
                  <div class="text-sm text-gray-800 break-all">
                    {{ alert.affectedResource }}
                  </div>
                </div>
              }

              <!-- Unique Issues -->
              <div>
                <div class="text-xs font-semibold text-gray-800 mb-1">
                  <i class="pi pi-list mr-1"></i>Unique Issues
                </div>
                <div class="text-sm text-gray-800">
                  {{ alert.uniqueIssues }}
                </div>
              </div>

              <!-- Affected Operations -->
              <div>
                <div class="text-xs font-semibold text-gray-800 mb-1">
                  <i class="pi pi-sitemap mr-1"></i>Affected Operations
                </div>
                <div class="text-sm text-gray-800">
                  {{ alert.affectedOperations }}
                </div>
              </div>

              <!-- First Occurrence -->
              <div>
                <div class="text-xs font-semibold text-gray-800 mb-1">
                  <i class="pi pi-calendar-plus mr-1"></i>First Occurrence
                </div>
                <div class="text-sm text-gray-800">
                  {{ alert.firstOccurrence | timeAgo }}
                  <span class="text-xs text-gray-500 block">
                    {{ alert.firstOccurrence | date: 'medium' }}
                  </span>
                </div>
              </div>

              <!-- Last Occurrence -->
              <div>
                <div class="text-xs font-semibold text-gray-800 mb-1">
                  <i class="pi pi-calendar-times mr-1"></i>Last Occurrence
                </div>
                <div class="text-sm text-gray-800">
                  {{ alert.lastOccurrence | timeAgo }}
                  <span class="text-xs text-gray-500 block">
                    {{ alert.lastOccurrence | date: 'medium' }}
                  </span>
                </div>
              </div>

              <!-- Duration -->
              @if (alert.durationMinutes > 0) {
                <div>
                  <div class="text-xs font-semibold text-gray-800 mb-1">
                    <i class="pi pi-clock mr-1"></i>Duration
                  </div>
                  <div class="text-sm text-gray-800">
                    @if (alert.durationMinutes < 60) {
                      {{ alert.durationMinutes }} min
                    } @else if (alert.durationMinutes < 1440) {
                      {{ alert.durationMinutes / 60 | number: '1.1-1' }} hours
                    } @else {
                      {{ alert.durationMinutes / 1440 | number: '1.1-1' }} days
                    }
                  </div>
                </div>
              }
            </div>
          </p-card>
        </div>
      }
    </ng-template>

    <!-- Empty Message Template -->
    <ng-template pTemplate="empty">
      <div class="text-center py-8 text-gray-500">
        <i class="pi pi-check-circle text-5xl text-green-500 mb-4 block"></i>
        <p class="text-lg font-semibold">No alerts found</p>
        <p class="text-sm">All systems are operating normally</p>
      </div>
    </ng-template>
  </p-dataview>
</p-card>

<!-- Loading State -->
@if (loading && alerts.length === 0) {
  <p-card styleClass="m-4">
    <div class="text-center py-8 text-gray-500">
      <i class="pi pi-spin pi-spinner text-5xl mb-4 block"></i>
      <p class="text-lg font-medium">Loading alerts...</p>
    </div>
  </p-card>
}
`, styles: ["/* src/app/features/administration/components/system-health/errors-and-alerts/errors-and-alerts.component.scss */\n:host {\n  display: block;\n}\n.chart-container {\n  position: relative;\n  height: 400px;\n}\n::ng-deep .p-dataview .p-dataview-content {\n  background: transparent;\n  border: none;\n}\n::ng-deep .p-dataview .p-paginator {\n  background: transparent;\n  border: none;\n  padding: 1rem 0;\n}\n::ng-deep p-message {\n  display: block;\n}\n::ng-deep .p-card {\n  border-width: 1px;\n}\n/*# sourceMappingURL=errors-and-alerts.component.css.map */\n"] }]
  }], null, { errorTimelineCanvas: [{
    type: ViewChild,
    args: ["errorTimelineCanvas"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ErrorsAndAlertsComponent, { className: "ErrorsAndAlertsComponent", filePath: "src/app/features/administration/components/system-health/errors-and-alerts/errors-and-alerts.component.ts", lineNumber: 48 });
})();

// src/app/features/administration/components/system-health/event-flow/event-flow.component.ts
function EventFlowComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "p-card")(2, "div", 10)(3, "div", 11);
    \u0275\u0275text(4, "Avg Requests/sec");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 12);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 13);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "p-card")(12, "div", 10)(13, "div", 11);
    \u0275\u0275text(14, "Avg Events/sec");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 14);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 13);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "p-card")(22, "div", 10)(23, "div", 11);
    \u0275\u0275text(24, "Avg Dependencies/sec");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 15);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 13);
    \u0275\u0275text(29, "Real-time throughput");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "p-card")(31, "div", 10)(32, "div", 11);
    \u0275\u0275text(33, "Total Operations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 16);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 13);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "div", 17)(40, "p-card", 18)(41, "div", 19)(42, "div")(43, "div", 20);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 21);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(49, "i", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "p-card", 23)(51, "div", 19)(52, "div")(53, "div", 24);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 21);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(59, "i", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "p-card", 26)(61, "div", 19)(62, "div")(63, "div", 27);
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 21);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(69, "i", 28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 13, ctx_r0.throughput.averageRequestsPerSecond, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Peak: ", \u0275\u0275pipeBind2(10, 16, ctx_r0.throughput.peakRequestsPerSecond, "1.2-2"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(17, 19, ctx_r0.throughput.averageEventsPerSecond, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Peak: ", \u0275\u0275pipeBind2(20, 22, ctx_r0.throughput.peakEventsPerSecond, "1.2-2"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(27, 25, ctx_r0.throughput.averageDependenciesPerSecond, "1.2-2"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(36, 28, ctx_r0.throughput.totalRequests + ctx_r0.throughput.totalEvents + ctx_r0.throughput.totalDependencies, "1.0-0"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("in ", ctx_r0.throughput.timeRange);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(45, 31, ctx_r0.throughput.totalRequests, "1.0-0"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(48, 34, ctx_r0.throughput.averageRequestsPerSecond, "1.2-2"), " requests/sec ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(55, 37, ctx_r0.throughput.totalEvents, "1.0-0"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(58, 40, ctx_r0.throughput.averageEventsPerSecond, "1.2-2"), " events/sec ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(65, 43, ctx_r0.throughput.totalDependencies, "1.0-0"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(68, 46, ctx_r0.throughput.averageDependenciesPerSecond, "1.2-2"), " calls/sec ");
  }
}
function EventFlowComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275elementStart(2, "p", 30);
    \u0275\u0275text(3, "Loading throughput data...");
    \u0275\u0275elementEnd()();
  }
}
function EventFlowComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "i", 31);
    \u0275\u0275elementStart(2, "p", 32);
    \u0275\u0275text(3, "No throughput data available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 33);
    \u0275\u0275text(5, " Throughput metrics will appear here once data is collected. ");
    \u0275\u0275elementEnd()();
  }
}
function EventFlowComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-chart", 34);
    \u0275\u0275elementStart(1, "div", 35)(2, "div", 3);
    \u0275\u0275element(3, "div", 36);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Requests per second");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 3);
    \u0275\u0275element(7, "div", 37);
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "Events per second");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 3);
    \u0275\u0275element(11, "div", 38);
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "Dependencies per second");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.chartData)("options", ctx_r0.chartOptions);
  }
}
var EventFlowComponent = class _EventFlowComponent {
  healthService = inject(RealSystemHealthService);
  cdr = inject(ChangeDetectorRef);
  destroyRef = inject(DestroyRef);
  // Data
  throughput = null;
  // Loading states
  loading = false;
  // Chart data
  chartData;
  chartOptions;
  // Time range selector
  timeRanges = [1, 6, 12, 24];
  // Hours
  timeRangeOptions = this.timeRanges.map((range) => ({
    label: range + "h",
    value: range
  }));
  selectedTimeRange = 6;
  // Default to 6 hours
  ngOnInit() {
    this.initializeChartOptions();
    this.fetchThroughputData();
  }
  fetchThroughputData() {
    this.loading = true;
    this.healthService.fetchEventFlow(`${this.selectedTimeRange}h`).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (data) => {
        this.throughput = data;
        this.updateChartData();
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  initializeChartOptions() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--p-text-color");
    const textColorSecondary = documentStyle.getPropertyValue("--p-text-muted-color");
    const surfaceBorder = documentStyle.getPropertyValue("--p-content-border-color");
    this.chartOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        },
        tooltip: {
          mode: "index",
          intersect: false
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        },
        y: {
          type: "linear",
          display: true,
          position: "left",
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          },
          title: {
            display: true,
            text: "Operations per Second",
            color: textColor
          }
        }
      }
    };
  }
  updateChartData() {
    if (!this.throughput?.dataPoints || this.throughput.dataPoints.length === 0)
      return;
    const labels = this.throughput.dataPoints.map((dp) => new Date(dp.timestamp).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }));
    const documentStyle = getComputedStyle(document.documentElement);
    this.chartData = {
      labels,
      datasets: [
        {
          label: "Requests/sec",
          data: this.throughput.dataPoints.map((dp) => dp.requestsPerSecond),
          fill: false,
          borderColor: documentStyle.getPropertyValue("--p-blue-500"),
          backgroundColor: documentStyle.getPropertyValue("--p-blue-500"),
          tension: 0.4
        },
        {
          label: "Events/sec",
          data: this.throughput.dataPoints.map((dp) => dp.eventsPerSecond),
          fill: false,
          borderColor: documentStyle.getPropertyValue("--p-green-500"),
          backgroundColor: documentStyle.getPropertyValue("--p-green-500"),
          tension: 0.4
        },
        {
          label: "Dependencies/sec",
          data: this.throughput.dataPoints.map((dp) => dp.dependencyCallsPerSecond),
          fill: false,
          borderColor: documentStyle.getPropertyValue("--p-orange-500"),
          backgroundColor: documentStyle.getPropertyValue("--p-orange-500"),
          tension: 0.4
        }
      ]
    };
  }
  onTimeRangeChange(event) {
    this.selectedTimeRange = +event.value;
    this.fetchThroughputData();
  }
  refreshData() {
    this.fetchThroughputData();
  }
  static \u0275fac = function EventFlowComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventFlowComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventFlowComponent, selectors: [["app-event-flow"]], decls: 14, vars: 5, consts: [[1, "m-4", "flex", "items-center", "justify-between", "gap-4", "flex-wrap"], [1, "text-2xl", "font-bold", "text-gray-800"], [1, "flex", "items-center", "gap-4", "flex-wrap"], [1, "flex", "items-center", "gap-2"], ["for", "timeRange", 1, "text-sm", "font-semibold", "text-gray-700"], ["inputId", "timeRange", "placeholder", "Select time range", 1, "min-w-[100px]", 3, "ngModelChange", "onChange", "options", "ngModel"], ["icon", "pi pi-refresh", "label", "Refresh", "severity", "secondary", "size", "small", 3, "onClick", "loading"], ["header", "Throughput Over Time", 1, "m-4"], [1, "text-center", "py-8", "text-gray-500"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-4", "gap-4", "m-4"], [1, "text-center"], [1, "text-sm", "text-gray-800", "mb-1"], [1, "text-[2rem]", "font-bold", "text-blue-800", "mb-1"], [1, "text-xs", "text-gray-500"], [1, "text-[2rem]", "font-bold", "text-green-800", "mb-1"], [1, "text-[2rem]", "font-bold", "text-orange-800", "mb-1"], [1, "text-[2rem]", "font-bold", "text-gray-800", "mb-1"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-4", "m-4"], ["header", "Total Requests"], [1, "flex", "items-center", "justify-between"], [1, "text-3xl", "font-bold", "text-blue-800"], [1, "text-sm", "text-gray-800", "mt-1"], [1, "pi", "pi-globe", "text-5xl", "text-blue-300"], ["header", "Total Events"], [1, "text-3xl", "font-bold", "text-green-800"], [1, "pi", "pi-chart-line", "text-5xl", "text-green-300"], ["header", "Total Dependencies"], [1, "text-3xl", "font-bold", "text-orange-800"], [1, "pi", "pi-sitemap", "text-5xl", "text-orange-300"], [1, "pi", "pi-spin", "pi-spinner", "text-5xl", "mb-4", "block"], [1, "text-lg", "font-medium"], [1, "pi", "pi-chart-line", "text-5xl", "text-gray-800", "mb-4", "block"], [1, "text-lg", "font-semibold"], [1, "text-sm", "mt-2"], ["type", "line", 3, "data", "options"], [1, "mt-4", "flex", "gap-6", "justify-center", "text-sm"], [1, "w-4", "h-4", "rounded", "bg-blue-500"], [1, "w-4", "h-4", "rounded", "bg-green-500"], [1, "w-4", "h-4", "rounded", "bg-orange-500"]], template: function EventFlowComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Event Flow & Throughput");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "label", 4);
      \u0275\u0275text(6, "Time Range:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p-select", 5);
      \u0275\u0275twoWayListener("ngModelChange", function EventFlowComponent_Template_p_select_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedTimeRange, $event) || (ctx.selectedTimeRange = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function EventFlowComponent_Template_p_select_onChange_7_listener($event) {
        return ctx.onTimeRangeChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "p-button", 6);
      \u0275\u0275listener("onClick", function EventFlowComponent_Template_p_button_onClick_8_listener() {
        return ctx.refreshData();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(9, EventFlowComponent_Conditional_9_Template, 70, 49);
      \u0275\u0275elementStart(10, "p-card", 7);
      \u0275\u0275conditionalCreate(11, EventFlowComponent_Conditional_11_Template, 4, 0, "div", 8)(12, EventFlowComponent_Conditional_12_Template, 6, 0, "div", 8)(13, EventFlowComponent_Conditional_13_Template, 14, 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("options", ctx.timeRangeOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedTimeRange);
      \u0275\u0275advance();
      \u0275\u0275property("loading", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.throughput ? 9 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading && !ctx.throughput ? 11 : !(ctx.throughput == null ? null : ctx.throughput.dataPoints) || (ctx.throughput == null ? null : ctx.throughput.dataPoints == null ? null : ctx.throughput.dataPoints.length) === 0 ? 12 : 13);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    NgControlStatus,
    NgModel,
    CardModule,
    Card,
    ChartModule,
    UIChart,
    ButtonModule,
    Button,
    SelectModule,
    Select,
    DecimalPipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventFlowComponent, [{
    type: Component,
    args: [{ selector: "app-event-flow", imports: [
      CommonModule,
      FormsModule,
      CardModule,
      ChartModule,
      ButtonModule,
      SelectModule
    ], template: `<!-- Header with Controls -->
<div class="m-4 flex items-center justify-between gap-4 flex-wrap">
  <h2 class="text-2xl font-bold text-gray-800">Event Flow & Throughput</h2>

  <div class="flex items-center gap-4 flex-wrap">
    <!-- Time Range Selector -->
    <div class="flex items-center gap-2">
      <label for="timeRange" class="text-sm font-semibold text-gray-700"
        >Time Range:</label
      >
      <p-select
        inputId="timeRange"
        [options]="timeRangeOptions"
        [(ngModel)]="selectedTimeRange"
        (onChange)="onTimeRangeChange($event)"
        placeholder="Select time range"
        class="min-w-[100px]"
      />
    </div>

    <!-- Refresh Button -->
    <p-button
      icon="pi pi-refresh"
      [loading]="loading"
      (onClick)="refreshData()"
      label="Refresh"
      severity="secondary"
      size="small"
    />
  </div>
</div>

<!-- Summary Cards -->
@if (throughput) {
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4">
    <p-card>
      <div class="text-center">
        <div class="text-sm text-gray-800 mb-1">Avg Requests/sec</div>
        <div class="text-[2rem] font-bold text-blue-800 mb-1">
          {{ throughput.averageRequestsPerSecond | number: '1.2-2' }}
        </div>
        <div class="text-xs text-gray-500">
          Peak: {{ throughput.peakRequestsPerSecond | number: '1.2-2' }}
        </div>
      </div>
    </p-card>

    <p-card>
      <div class="text-center">
        <div class="text-sm text-gray-800 mb-1">Avg Events/sec</div>
        <div class="text-[2rem] font-bold text-green-800 mb-1">
          {{ throughput.averageEventsPerSecond | number: '1.2-2' }}
        </div>
        <div class="text-xs text-gray-500">
          Peak: {{ throughput.peakEventsPerSecond | number: '1.2-2' }}
        </div>
      </div>
    </p-card>

    <p-card>
      <div class="text-center">
        <div class="text-sm text-gray-800 mb-1">Avg Dependencies/sec</div>
        <div class="text-[2rem] font-bold text-orange-800 mb-1">
          {{ throughput.averageDependenciesPerSecond | number: '1.2-2' }}
        </div>
        <div class="text-xs text-gray-500">Real-time throughput</div>
      </div>
    </p-card>

    <p-card>
      <div class="text-center">
        <div class="text-sm text-gray-800 mb-1">Total Operations</div>
        <div class="text-[2rem] font-bold text-gray-800 mb-1">
          {{
            throughput.totalRequests +
              throughput.totalEvents +
              throughput.totalDependencies | number: '1.0-0'
          }}
        </div>
        <div class="text-xs text-gray-500">in {{ throughput.timeRange }}</div>
      </div>
    </p-card>
  </div>

  <!-- Detailed Metrics Cards -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 m-4">
    <p-card header="Total Requests">
      <div class="flex items-center justify-between">
        <div>
          <div class="text-3xl font-bold text-blue-800">
            {{ throughput.totalRequests | number: '1.0-0' }}
          </div>
          <div class="text-sm text-gray-800 mt-1">
            {{ throughput.averageRequestsPerSecond | number: '1.2-2' }}
            requests/sec
          </div>
        </div>
        <i class="pi pi-globe text-5xl text-blue-300"></i>
      </div>
    </p-card>

    <p-card header="Total Events">
      <div class="flex items-center justify-between">
        <div>
          <div class="text-3xl font-bold text-green-800">
            {{ throughput.totalEvents | number: '1.0-0' }}
          </div>
          <div class="text-sm text-gray-800 mt-1">
            {{ throughput.averageEventsPerSecond | number: '1.2-2' }}
            events/sec
          </div>
        </div>
        <i class="pi pi-chart-line text-5xl text-green-300"></i>
      </div>
    </p-card>

    <p-card header="Total Dependencies">
      <div class="flex items-center justify-between">
        <div>
          <div class="text-3xl font-bold text-orange-800">
            {{ throughput.totalDependencies | number: '1.0-0' }}
          </div>
          <div class="text-sm text-gray-800 mt-1">
            {{ throughput.averageDependenciesPerSecond | number: '1.2-2' }}
            calls/sec
          </div>
        </div>
        <i class="pi pi-sitemap text-5xl text-orange-300"></i>
      </div>
    </p-card>
  </div>
}

<!-- Throughput Timeline Chart -->
<p-card header="Throughput Over Time" class="m-4">
  @if (loading && !throughput) {
    <div class="text-center py-8 text-gray-500">
      <i class="pi pi-spin pi-spinner text-5xl mb-4 block"></i>
      <p class="text-lg font-medium">Loading throughput data...</p>
    </div>
  } @else if (!throughput?.dataPoints || throughput?.dataPoints?.length === 0) {
    <div class="text-center py-8 text-gray-500">
      <i class="pi pi-chart-line text-5xl text-gray-800 mb-4 block"></i>
      <p class="text-lg font-semibold">No throughput data available</p>
      <p class="text-sm mt-2">
        Throughput metrics will appear here once data is collected.
      </p>
    </div>
  } @else {
    <p-chart type="line" [data]="chartData" [options]="chartOptions" />

    <!-- Legend Info -->
    <div class="mt-4 flex gap-6 justify-center text-sm">
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 rounded bg-blue-500"></div>
        <span>Requests per second</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 rounded bg-green-500"></div>
        <span>Events per second</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 rounded bg-orange-500"></div>
        <span>Dependencies per second</span>
      </div>
    </div>
  }
</p-card>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventFlowComponent, { className: "EventFlowComponent", filePath: "src/app/features/administration/components/system-health/event-flow/event-flow.component.ts", lineNumber: 33 });
})();

// src/app/features/administration/components/system-health/system-health-container/system-health-container.component.ts
var _c04 = ["main"];
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
  isContentScrollable = signal(false, ...ngDevMode ? [{ debugName: "isContentScrollable" }] : []);
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
      \u0275\u0275viewQuery(_c04, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.mainTemplate = _t.first);
    }
  }, hostVars: 2, hostBindings: function SystemHealthContainerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("content-scrollable-inactive", ctx.contentScrollableActive);
    }
  }, decls: 4, vars: 2, consts: [["main", ""], [1, "w-full", "h-full"], ["styleClass", "h-full overflow-hidden", 3, "tabChange", "tabs", "contentScrollable"]], template: function SystemHealthContainerComponent_Template(rf, ctx) {
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
      \u0275\u0275property("tabs", ctx.systemHealthTabs)("contentScrollable", true);
    }
  }, dependencies: [DynamicTabPanelComponent, RouterOutlet], styles: ["\n\n  .p-card {\n  border-width: 1px;\n}\n/*# sourceMappingURL=system-health-container.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemHealthContainerComponent, [{
    type: Component,
    args: [{ selector: "app-system-health-container", imports: [DynamicTabPanelComponent, RouterOutlet], template: '<div class="w-full h-full">\n  <app-dynamic-tab-panel\n    [tabs]="systemHealthTabs"\n    [contentScrollable]="true"\n    (tabChange)="onTabChange()"\n    styleClass="h-full overflow-hidden"\n  ></app-dynamic-tab-panel>\n</div>\n\n<ng-template #main>\n  <router-outlet />\n</ng-template>\n', styles: ["/* src/app/features/administration/components/system-health/system-health-container/system-health-container.component.scss */\n::ng-deep .p-card {\n  border-width: 1px;\n}\n/*# sourceMappingURL=system-health-container.component.css.map */\n"] }]
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

// src/app/features/administration/services/system-health.service.ts
var SystemHealthService = class _SystemHealthService {
  realService = inject(RealSystemHealthService);
  broadcastService = inject(SystemHealthBroadcastService);
  destroyRef = inject(DestroyRef);
  systemHealth$ = this.realService.systemHealth$;
  currentHealthData = null;
  initializeHealthListeners() {
    this.realService.initialize();
    this.systemHealth$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) => {
      this.currentHealthData = data;
    });
  }
  refreshData(timeRange) {
    this.realService.refreshData(timeRange);
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
function SystemOverviewComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 20);
    \u0275\u0275text(2, " Service ");
    \u0275\u0275element(3, "p-sortIcon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 22);
    \u0275\u0275text(5, " Type ");
    \u0275\u0275element(6, "p-sortIcon", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 24);
    \u0275\u0275text(8, " Status ");
    \u0275\u0275element(9, "p-sortIcon", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 26);
    \u0275\u0275text(11, " Uptime ");
    \u0275\u0275element(12, "p-sortIcon", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 28);
    \u0275\u0275text(14, " Error Rate ");
    \u0275\u0275element(15, "p-sortIcon", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 30);
    \u0275\u0275text(17, " Operations ");
    \u0275\u0275element(18, "p-sortIcon", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 32);
    \u0275\u0275text(20, " Avg Response ");
    \u0275\u0275element(21, "p-sortIcon", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 34);
    \u0275\u0275text(23, " P95 ");
    \u0275\u0275element(24, "p-sortIcon", 35);
    \u0275\u0275elementEnd()();
  }
}
function SystemOverviewComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275element(6, "p-tag", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r1.service);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r1.type);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", service_r1.status)("severity", ctx_r1.getStatusSeverity(service_r1.status == null ? null : service_r1.status.toLowerCase()))("rounded", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(9, 10, service_r1.uptimePercent, "1.2-2"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(12, 13, service_r1.errorRatePercent, "1.2-2"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 16, service_r1.operations));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(18, 18, service_r1.avgResponseMs, "1.0-0"), "ms");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(21, 21, service_r1.p95Ms, "1.0-0"), "ms");
  }
}
function SystemOverviewComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 37);
    \u0275\u0275text(2, " No service data available ");
    \u0275\u0275elementEnd()();
  }
}
function SystemOverviewComponent_Conditional_36_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 39);
    \u0275\u0275text(2, " Function Name ");
    \u0275\u0275element(3, "p-sortIcon", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 24);
    \u0275\u0275text(5, " Status ");
    \u0275\u0275element(6, "p-sortIcon", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 41);
    \u0275\u0275text(8, " Executions ");
    \u0275\u0275element(9, "p-sortIcon", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 43);
    \u0275\u0275text(11, " Success Rate ");
    \u0275\u0275element(12, "p-sortIcon", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 45);
    \u0275\u0275text(14, " Avg Duration ");
    \u0275\u0275element(15, "p-sortIcon", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 47);
    \u0275\u0275text(17, " P95 Duration ");
    \u0275\u0275element(18, "p-sortIcon", 48);
    \u0275\u0275elementEnd()();
  }
}
function SystemOverviewComponent_Conditional_36_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275element(4, "p-tag", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const func_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(func_r3.functionName);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", func_r3.status)("severity", ctx_r1.getStatusSeverity(func_r3.status == null ? null : func_r3.status.toLowerCase()))("rounded", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, func_r3.totalExecutions));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 10, func_r3.successRate, "1.2-2"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(13, 13, func_r3.avgDuration, "1.0-0"), "ms");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(16, 16, func_r3.p95Duration, "1.0-0"), "ms");
  }
}
function SystemOverviewComponent_Conditional_36_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 49);
    \u0275\u0275text(2, " No function data available ");
    \u0275\u0275elementEnd()();
  }
}
function SystemOverviewComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-card", 19)(1, "p-table", 38);
    \u0275\u0275template(2, SystemOverviewComponent_Conditional_36_ng_template_2_Template, 19, 0, "ng-template", 16)(3, SystemOverviewComponent_Conditional_36_ng_template_3_Template, 17, 19, "ng-template", 17)(4, SystemOverviewComponent_Conditional_36_ng_template_4_Template, 3, 0, "ng-template", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.functions)("sortMode", "multiple")("paginator", true)("rows", 10);
  }
}
var SystemOverviewComponent = class _SystemOverviewComponent {
  broadcastService = inject(SystemHealthBroadcastService);
  healthService = inject(SystemHealthService);
  cdr = inject(ChangeDetectorRef);
  destroyRef = inject(DestroyRef);
  healthData;
  connected = true;
  // Flattened data for easy display - using Record to allow flexible backend data
  services = [];
  functions = [];
  // Time range selector
  timeRanges = [6, 12, 24];
  // Hours
  timeRangeOptions = this.timeRanges.map((range) => ({
    label: range + "h",
    value: range
  }));
  selectedTimeRange = 6;
  // Default to 6 hours
  ngOnInit() {
    this.healthService.initializeHealthListeners();
    this.broadcastService.onHealthUpdate().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((update) => {
      this.healthData = update.data;
      this.processHealthData();
      this.cdr.detectChanges();
    });
    this.broadcastService.onWebSocketStatusChange().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((status) => {
      this.connected = status.connected;
    });
  }
  processHealthData() {
    if (!this.healthData)
      return;
    this.services = this.healthData.overview?.services ?? [];
    this.functions = this.healthData.azureFunctions ?? [];
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
  getSeverityTag(severity) {
    switch (severity?.toLowerCase()) {
      case "critical":
        return "danger";
      case "error":
        return "danger";
      case "warning":
        return "warn";
      case "information":
        return "info";
      default:
        return "info";
    }
  }
  getHealthyServicesCount() {
    return this.services.filter((s) => String(s["status"]).toLowerCase() === "healthy").length;
  }
  getTotalServicesCount() {
    return this.services.length;
  }
  getAverageErrorRate() {
    if (this.services.length === 0)
      return 0;
    const totalErrorRate = this.services.reduce((sum, s) => sum + (Number(s["errorRatePercent"]) || 0), 0);
    return totalErrorRate / this.services.length;
  }
  getAverageResponseTime() {
    if (this.services.length === 0)
      return 0;
    const totalResponseTime = this.services.reduce((sum, s) => sum + (Number(s["avgResponseMs"]) || 0), 0);
    return totalResponseTime / this.services.length;
  }
  selectTimeRange(hours) {
    this.selectedTimeRange = hours;
    this.healthService.refreshData(`${hours}h`);
    this.cdr.detectChanges();
  }
  onTimeRangeChange(event) {
    this.selectTimeRange(+event.value);
  }
  static \u0275fac = function SystemOverviewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemOverviewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemOverviewComponent, selectors: [["app-system-overview"]], decls: 37, vars: 15, consts: [[1, "system-overview"], [1, "m-4", "flex", "items-center", "justify-between", "gap-4"], [1, "p-4", "rounded-md", "flex", "items-center", "gap-2", "flex-1", 3, "ngClass"], [1, "pi"], [1, "flex", "items-center", "gap-2"], ["for", "timeRange", 1, "font-semibold", "text-gray-700"], ["inputId", "timeRange", "placeholder", "Select time range", "styleClass", "w-[100px]", 3, "ngModelChange", "onChange", "options", "ngModel"], [1, "grid", "grid-cols-[repeat(auto-fit,minmax(250px,1fr))]", "gap-4", "m-4"], ["header", "Total Services"], [1, "text-[2rem]", "font-bold", "text-primary", "mb-2"], ["header", "Healthy Services"], [1, "text-[2rem]", "font-bold", "text-green-800", "mb-2"], ["header", "Avg Error Rate"], ["header", "Avg Response Time"], ["header", "Service Health Status", 1, "m-4"], [3, "value", "sortMode"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["header", "Azure Functions Performance", 1, "m-4"], ["pSortableColumn", "service", "scope", "col"], ["field", "service"], ["pSortableColumn", "type", "scope", "col"], ["field", "type"], ["pSortableColumn", "status", "scope", "col"], ["field", "status"], ["pSortableColumn", "uptimePercent", "scope", "col"], ["field", "uptimePercent"], ["pSortableColumn", "errorRatePercent", "scope", "col"], ["field", "errorRatePercent"], ["pSortableColumn", "operations", "scope", "col"], ["field", "operations"], ["pSortableColumn", "avgResponseMs", "scope", "col"], ["field", "avgResponseMs"], ["pSortableColumn", "p95Ms", "scope", "col"], ["field", "p95Ms"], [3, "value", "severity", "rounded"], ["colspan", "8", 1, "text-center", "p-4", "text-gray-500"], [3, "value", "sortMode", "paginator", "rows"], ["pSortableColumn", "functionName", "scope", "col"], ["field", "functionName"], ["pSortableColumn", "totalExecutions", "scope", "col"], ["field", "totalExecutions"], ["pSortableColumn", "successRate", "scope", "col"], ["field", "successRate"], ["pSortableColumn", "avgDuration", "scope", "col"], ["field", "avgDuration"], ["pSortableColumn", "p95Duration", "scope", "col"], ["field", "p95Duration"], ["colspan", "6", 1, "text-center", "p-4", "text-gray-500"]], template: function SystemOverviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementStart(4, "span");
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "label", 5);
      \u0275\u0275text(8, "Time Range:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p-select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function SystemOverviewComponent_Template_p_select_ngModelChange_9_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedTimeRange, $event) || (ctx.selectedTimeRange = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function SystemOverviewComponent_Template_p_select_onChange_9_listener($event) {
        return ctx.onTimeRangeChange($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 7)(11, "p-card", 8)(12, "div", 9);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "small");
      \u0275\u0275text(15, "Services monitored");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "p-card", 10)(17, "div", 11);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "small");
      \u0275\u0275text(20, "Running normally");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "p-card", 12)(22, "div", 9);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "small");
      \u0275\u0275text(25, "Average across all services");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "p-card", 13)(27, "div", 9);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "small");
      \u0275\u0275text(30, "Average response time");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "p-card", 14)(32, "p-table", 15);
      \u0275\u0275template(33, SystemOverviewComponent_ng_template_33_Template, 25, 0, "ng-template", 16)(34, SystemOverviewComponent_ng_template_34_Template, 22, 24, "ng-template", 17)(35, SystemOverviewComponent_ng_template_35_Template, 3, 0, "ng-template", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(36, SystemOverviewComponent_Conditional_36_Template, 5, 4, "p-card", 19);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.connected ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800");
      \u0275\u0275advance();
      \u0275\u0275classProp("pi-wifi", ctx.connected)("pi-times", !ctx.connected);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.connected ? "Real-time data connected" : "Connection lost - showing cached data");
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.timeRangeOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedTimeRange);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.getTotalServicesCount(), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.getHealthyServicesCount(), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.getAverageErrorRate().toFixed(2), "% ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.getAverageResponseTime().toFixed(0), "ms ");
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.services)("sortMode", "multiple");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.functions.length > 0 ? 36 : -1);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
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
    ButtonModule,
    SelectModule,
    Select,
    FormsModule,
    NgControlStatus,
    NgModel,
    DecimalPipe
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
      FormsModule
    ], template: `<div class="system-overview">
  <!-- Header with Connection Status and Time Range Selector -->
  <div class="m-4 flex items-center justify-between gap-4">
    <!-- Connection Status Banner -->
    <div
      class="p-4 rounded-md flex items-center gap-2 flex-1"
      [ngClass]="
        connected ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      "
    >
      <i
        class="pi"
        [class.pi-wifi]="connected"
        [class.pi-times]="!connected"
      ></i>
      <span>{{
        connected
          ? 'Real-time data connected'
          : 'Connection lost - showing cached data'
      }}</span>
    </div>

    <!-- Time Range Selector -->
    <div class="flex items-center gap-2">
      <label for="timeRange" class="font-semibold text-gray-700"
        >Time Range:</label
      >
      <p-select
        inputId="timeRange"
        [options]="timeRangeOptions"
        [(ngModel)]="selectedTimeRange"
        (onChange)="onTimeRangeChange($event)"
        placeholder="Select time range"
        styleClass="w-[100px]"
      />
    </div>
  </div>

  <!-- Key Metrics Cards -->
  <div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 m-4">
    <p-card header="Total Services">
      <div class="text-[2rem] font-bold text-primary mb-2">
        {{ getTotalServicesCount() }}
      </div>
      <small>Services monitored</small>
    </p-card>

    <p-card header="Healthy Services">
      <div class="text-[2rem] font-bold text-green-800 mb-2">
        {{ getHealthyServicesCount() }}
      </div>
      <small>Running normally</small>
    </p-card>

    <p-card header="Avg Error Rate">
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

  <!-- Services Status Table -->
  <p-card header="Service Health Status" class="m-4">
    <p-table [value]="services" [sortMode]="'multiple'">
      <ng-template pTemplate="header">
        <tr>
          <th pSortableColumn="service" scope="col">
            Service <p-sortIcon field="service"></p-sortIcon>
          </th>
          <th pSortableColumn="type" scope="col">
            Type <p-sortIcon field="type"></p-sortIcon>
          </th>
          <th pSortableColumn="status" scope="col">
            Status <p-sortIcon field="status"></p-sortIcon>
          </th>
          <th pSortableColumn="uptimePercent" scope="col">
            Uptime <p-sortIcon field="uptimePercent"></p-sortIcon>
          </th>
          <th pSortableColumn="errorRatePercent" scope="col">
            Error Rate <p-sortIcon field="errorRatePercent"></p-sortIcon>
          </th>
          <th pSortableColumn="operations" scope="col">
            Operations <p-sortIcon field="operations"></p-sortIcon>
          </th>
          <th pSortableColumn="avgResponseMs" scope="col">
            Avg Response <p-sortIcon field="avgResponseMs"></p-sortIcon>
          </th>
          <th pSortableColumn="p95Ms" scope="col">
            P95 <p-sortIcon field="p95Ms"></p-sortIcon>
          </th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-service>
        <tr>
          <td>{{ service.service }}</td>
          <td>{{ service.type }}</td>
          <td>
            <p-tag
              [value]="service.status"
              [severity]="getStatusSeverity(service.status?.toLowerCase())"
              [rounded]="true"
            >
            </p-tag>
          </td>
          <td>{{ service.uptimePercent | number: '1.2-2' }}%</td>
          <td>{{ service.errorRatePercent | number: '1.2-2' }}%</td>
          <td>{{ service.operations | number }}</td>
          <td>{{ service.avgResponseMs | number: '1.0-0' }}ms</td>
          <td>{{ service.p95Ms | number: '1.0-0' }}ms</td>
        </tr>
      </ng-template>
      <ng-template pTemplate="emptymessage">
        <tr>
          <td colspan="8" class="text-center p-4 text-gray-500">
            No service data available
          </td>
        </tr>
      </ng-template>
    </p-table>
  </p-card>

  <!-- Azure Functions Performance -->
  @if (functions.length > 0) {
    <p-card header="Azure Functions Performance" class="m-4">
      <p-table
        [value]="functions"
        [sortMode]="'multiple'"
        [paginator]="true"
        [rows]="10"
      >
        <ng-template pTemplate="header">
          <tr>
            <th pSortableColumn="functionName" scope="col">
              Function Name <p-sortIcon field="functionName"></p-sortIcon>
            </th>
            <th pSortableColumn="status" scope="col">
              Status <p-sortIcon field="status"></p-sortIcon>
            </th>
            <th pSortableColumn="totalExecutions" scope="col">
              Executions <p-sortIcon field="totalExecutions"></p-sortIcon>
            </th>
            <th pSortableColumn="successRate" scope="col">
              Success Rate <p-sortIcon field="successRate"></p-sortIcon>
            </th>
            <th pSortableColumn="avgDuration" scope="col">
              Avg Duration <p-sortIcon field="avgDuration"></p-sortIcon>
            </th>
            <th pSortableColumn="p95Duration" scope="col">
              P95 Duration <p-sortIcon field="p95Duration"></p-sortIcon>
            </th>
          </tr>
        </ng-template>
        <ng-template pTemplate="body" let-func>
          <tr>
            <td>{{ func.functionName }}</td>
            <td>
              <p-tag
                [value]="func.status"
                [severity]="getStatusSeverity(func.status?.toLowerCase())"
                [rounded]="true"
              >
              </p-tag>
            </td>
            <td>{{ func.totalExecutions | number }}</td>
            <td>{{ func.successRate | number: '1.2-2' }}%</td>
            <td>{{ func.avgDuration | number: '1.0-0' }}ms</td>
            <td>{{ func.p95Duration | number: '1.0-0' }}ms</td>
          </tr>
        </ng-template>
        <ng-template pTemplate="emptymessage">
          <tr>
            <td colspan="6" class="text-center p-4 text-gray-500">
              No function data available
            </td>
          </tr>
        </ng-template>
      </p-table>
    </p-card>
  }
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemOverviewComponent, { className: "SystemOverviewComponent", filePath: "src/app/features/administration/components/system-health/system-overview/system-overview.component.ts", lineNumber: 50 });
})();

// src/app/features/administration/components/system-health/system-health.routes.ts
var ADMIN_SYSTEM_HEALTH_ROUTES = [
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
        component: SystemOverviewComponent,
        data: { nestedContentScrollable: true }
      },
      {
        path: "azure-functions",
        component: AzureFunctionsComponent,
        data: { nestedContentScrollable: true }
      },
      {
        path: "event-flow",
        component: EventFlowComponent,
        data: { nestedContentScrollable: true }
      },
      {
        path: "data-storage",
        component: DataStorageComponent,
        data: { nestedContentScrollable: true }
      },
      {
        path: "errors-and-alerts",
        component: ErrorsAndAlertsComponent,
        data: { nestedContentScrollable: true }
      }
    ]
  }
];
export {
  ADMIN_SYSTEM_HEALTH_ROUTES
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
//# sourceMappingURL=chunk-O4PDUO5J.js.map
