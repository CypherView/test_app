import {
  AutoFocus,
  BaseComponent,
  BaseEditableHolder,
  BaseIcon,
  BaseInput,
  BaseStyle,
  Bind,
  BindModule,
  Button,
  C,
  C2,
  CheckIcon,
  ChevronDownIcon,
  Chip,
  DomHandler,
  FilterService,
  Fluid,
  Footer,
  FormsModule,
  Header,
  IconField,
  InputIcon,
  InputText,
  J2 as J,
  Lt,
  M,
  Mt,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgModel,
  ObjectUtils,
  Overlay,
  OverlayService,
  P,
  PARENT_INSTANCE,
  PrimeTemplate,
  R,
  Ripple,
  Scroller,
  SearchIcon,
  SharedModule,
  TimesIcon,
  Tooltip,
  TranslationKeys,
  Tt,
  U,
  W,
  _t,
  b,
  blockBodyScroll,
  bt,
  h,
  k2 as k,
  p,
  q,
  s,
  s2,
  unblockBodyScroll,
  ut,
  v,
  vt,
  y,
  z,
  zindexutils
} from "./chunk-MEA6GYLW.js";
import {
  animate,
  animation,
  style,
  transition,
  trigger,
  useAnimation
} from "./chunk-H6GBOP4J.js";
import {
  APP_FEATURE_FLAGS,
  AccountsService,
  ApiUrlService,
  AppFeatureDefaults,
  BACKEND_FEATURE_FLAGS,
  BackendFeatureDefaults,
  LOCAL_STORAGE_KEY_SELECTED_CLIENT,
  LocalStorageService,
  UserSessionService,
  isDeepEqual,
  isDefined,
  isEmpty,
  isNullOrUndefined,
  isNumber,
  isObject,
  isString,
  require_lodash
} from "./chunk-2UEPSESS.js";
import {
  CommonModule,
  NgClass,
  NgComponentOutlet,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  Router,
  isPlatformBrowser
} from "./chunk-3VCLKKY2.js";
import {
  ApplicationRef,
  BehaviorSubject,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  DestroyRef,
  Directive,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Observable,
  Output,
  PLATFORM_ID,
  ReplaySubject,
  RuntimeError,
  Subject,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  assertInInjectionContext,
  assertNotInReactiveContext,
  booleanAttribute,
  catchError,
  combineLatest,
  computed,
  createComponent,
  distinctUntilChanged,
  effect,
  filter,
  firstValueFrom,
  forwardRef,
  from,
  inject,
  input,
  numberAttribute,
  of,
  pairwise,
  setClassMetadata,
  share,
  signal,
  switchMap,
  takeUntil,
  tap,
  untracked,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-3T455PKD.js";
import {
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-KWSTWQNB.js";

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
  }, { injector, manualCleanup: true });
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
      /* StateKind.NoValue */
    }, { equal });
  } else {
    state = signal({ kind: 1, value: options?.initialValue }, { equal });
  }
  let destroyUnregisterFn;
  const sub = source.subscribe({
    next: (value) => state.set({ kind: 1, value }),
    error: (error) => {
      state.set({ kind: 2, error });
      destroyUnregisterFn?.();
    },
    complete: () => {
      destroyUnregisterFn?.();
    }
    // Completion of the Observable is meaningless to the signal. Signals don't have a concept of
    // "complete".
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
  }, { equal: options?.equal });
}
function makeToSignalEqual(userEquality = Object.is) {
  return (a, b2) => a.kind === 1 && b2.kind === 1 && userEquality(a.value, b2.value);
}

// src/app/features/clients/services/client-data.service.ts
var import_lodash = __toESM(require_lodash());

// src/app/shared/models/form-field.model.ts
function createTextField(key, label, value, options = {}) {
  if (!isString(key)) {
    throw new Error("Key must be a string");
  }
  if (!isString(label)) {
    throw new Error("Label must be a string");
  }
  return {
    key,
    name: isString(options.name) ? options.name : "",
    type: "text",
    label,
    layout: isDefined(options.layout) ? options.layout : "horizontal",
    labelWidth: isString(options.labelWidth) ? options.labelWidth : "1/3",
    validations: Array.isArray(options.validations) ? options.validations : [],
    value: isDefined(value) ? value : void 0,
    placeholder: isString(options.placeholder) ? options.placeholder : void 0,
    props: isObject(options.props) ? __spreadProps(__spreadValues({}, options.props), {
      typeahead: isDefined(options.props?.typeahead) ? options.props?.typeahead : true
    }) : void 0,
    events: isObject(options.events) ? options.events : void 0,
    hint: isString(options.hint) ? options.hint : void 0,
    hidden: isDefined(options.hidden) ? options.hidden : false,
    readonly: isDefined(options.readonly) ? options.readonly : false
  };
}
function createPasswordField(key, label, options = {}) {
  if (!isString(key)) {
    throw new Error("Key must be a string");
  }
  if (!isString(label)) {
    throw new Error("Label must be a string");
  }
  return {
    key,
    name: isString(options.name) ? options.name : "",
    type: "password",
    label,
    layout: isDefined(options.layout) ? options.layout : "horizontal",
    labelWidth: isString(options.labelWidth) ? options.labelWidth : "1/3",
    validations: Array.isArray(options.validations) ? options.validations : [],
    placeholder: isString(options.placeholder) ? options.placeholder : void 0,
    props: isObject(options.props) ? options.props : void 0,
    events: isObject(options.events) ? options.events : void 0,
    hint: isString(options.hint) ? options.hint : void 0
  };
}
function createDropdownField(key, label, optionsList, value, options = {}) {
  if (!isString(key)) {
    throw new Error("Key must be a string");
  }
  if (!isString(label)) {
    throw new Error("Label must be a string");
  }
  return {
    key,
    name: isString(options.name) ? options.name : "",
    type: "dropdown",
    label,
    layout: isString(options.layout) ? options.layout : "horizontal",
    labelWidth: isString(options.labelWidth) ? options.labelWidth : "1/3",
    validations: Array.isArray(options.validations) ? options.validations : [],
    value: isDefined(value) ? value : void 0,
    options: optionsList,
    placeholder: isString(options.placeholder) ? options.placeholder : void 0,
    props: isObject(options.props) ? options.props : void 0,
    events: isObject(options.events) ? options.events : void 0,
    hint: isString(options.hint) ? options.hint : void 0,
    conditional: isDefined(options.conditional) ? options.conditional : void 0,
    conditions: isDefined(options.conditions) ? options.conditions : void 0,
    disabled: isDefined(options.disabled) ? options.disabled : void 0
  };
}
function createAutocompleteField(key, label, value, suggestions, onSearch, options = {}) {
  if (!isString(key)) {
    throw new Error("Key must be a string");
  }
  if (!isString(label)) {
    throw new Error("Label must be a string");
  }
  return {
    key,
    name: isString(options.name) ? options.name : "",
    type: "autocomplete",
    label,
    layout: isString(options.layout) ? options.layout : "horizontal",
    labelWidth: isString(options.labelWidth) ? options.labelWidth : "1/3",
    validations: Array.isArray(options.validations) ? options.validations : [],
    value: isDefined(value) ? value : void 0,
    placeholder: isString(options.placeholder) ? options.placeholder : void 0,
    props: __spreadProps(__spreadValues({}, options.props), {
      dropdown: options.props?.dropdown ?? true,
      suggestions,
      placeholder: "Search for clients..."
    }),
    events: __spreadProps(__spreadValues({}, options.events), {
      onSearch
    }),
    hint: options.hint,
    autocompleteLoading: isDefined(options.autocompleteLoading) ? options.autocompleteLoading : false
  };
}
function createNumberField(key, label, value, options = {}) {
  if (!isString(key)) {
    throw new Error("Key must be a string");
  }
  if (!isString(label)) {
    throw new Error("Label must be a string");
  }
  return {
    key,
    name: isString(options.name) ? options.name : "",
    type: "number",
    label,
    layout: isString(options.layout) ? options.layout : "horizontal",
    labelWidth: isString(options.labelWidth) ? options.labelWidth : "1/3",
    validations: Array.isArray(options.validations) ? options.validations : [],
    value: isNumber(value) ? value : void 0,
    placeholder: isString(options.placeholder) ? options.placeholder : void 0,
    props: isObject(options.props) ? options.props : void 0,
    hint: isString(options.hint) ? options.hint : void 0,
    hidden: isDefined(options.hidden) ? options.hidden : false
  };
}
function createDateField(key, label, value, options = {}) {
  if (!isString(key)) {
    throw new Error("Key must be a string");
  }
  if (!isString(label)) {
    throw new Error("Label must be a string");
  }
  return {
    key,
    name: isString(options.name) ? options.name : "",
    type: "date",
    label,
    layout: isString(options.layout) ? options.layout : "horizontal",
    labelWidth: isString(options.labelWidth) ? options.labelWidth : "1/3",
    validations: Array.isArray(options.validations) ? options.validations : [],
    value,
    placeholder: isString(options.placeholder) ? options.placeholder : void 0,
    props: isObject(options.props) ? options.props : void 0,
    hint: isString(options.hint) ? options.hint : void 0,
    styleClass: options.styleClass,
    style: options.style
  };
}
function createTextAreaField(key, label, value, options = {}) {
  const validations = options.validations ?? [];
  return {
    key,
    name: options.name ?? "",
    type: "textarea",
    label,
    layout: options.layout ?? "horizontal",
    labelWidth: options.labelWidth ?? "1/3",
    validations,
    value,
    placeholder: options.placeholder,
    props: options.props,
    hint: options.hint,
    readonly: isDefined(options.readonly) ? options.readonly : void 0
  };
}
function createMultiselectField(key, label, value, optionsList, options = {}) {
  const validations = options.validations ?? [];
  return {
    key,
    name: options.name ?? "",
    type: "multiselect",
    label,
    layout: options.layout ?? "horizontal",
    labelWidth: options.labelWidth ?? "1/3",
    validations,
    value,
    options: optionsList,
    placeholder: options.placeholder,
    props: options.props,
    hint: options.hint
  };
}
function createListboxField(key, label, value, optionsList, options = {}) {
  const validations = options.validations ?? [];
  return {
    key,
    name: options.name ?? "",
    type: "listbox",
    label,
    layout: options.layout ?? "horizontal",
    labelWidth: options.labelWidth ?? "1/3",
    validations,
    value,
    options: optionsList,
    placeholder: options.placeholder,
    props: options.props,
    hint: options.hint
  };
}
function createEventFilterField(key, label, value, groupTypes, options = {}) {
  return {
    key,
    name: options.name ?? key,
    label,
    type: "eventFilter",
    value: value ?? { conditions: [] },
    props: __spreadProps(__spreadValues({}, options.props), {
      groupTypes
    }),
    validations: options.validations ?? [],
    events: options.events,
    layout: options.layout ?? "horizontal",
    labelWidth: options.labelWidth ?? "1/3"
  };
}
function createAssetFilterField(key, label, value, allowedAssetTypes, options = {}) {
  return {
    key,
    name: options.name ?? key,
    label,
    type: "assetFilter",
    value: value ?? {
      selectedAssets: [],
      selectedGroups: [],
      selectedCategories: [],
      selectedTypes: [],
      selectedCostCentres: []
    },
    props: __spreadProps(__spreadValues({}, options.props), {
      allowedAssetTypes
    }),
    validations: options.validations ?? [],
    events: options.events,
    layout: options.layout ?? "horizontal",
    labelWidth: options.labelWidth ?? "1/3",
    readonly: isDefined(options.readonly) ? options.readonly : false
  };
}
function createTreeSelectField(key, label, value, optionsList, options = {}) {
  const validations = options.validations ?? [];
  return {
    key,
    name: options.name ?? "",
    type: "treeselect",
    label,
    layout: options.layout ?? "horizontal",
    labelWidth: options.labelWidth ?? "1/3",
    validations,
    value,
    treeNodeOptions: optionsList,
    placeholder: options.placeholder,
    props: options.props,
    hint: options.hint
  };
}
function createModalListField(key, label, value, options = {}) {
  const validations = options.validations ?? [];
  return {
    key,
    name: options.name ?? "",
    type: "modalList",
    label,
    layout: options.layout ?? "horizontal",
    labelWidth: options.labelWidth ?? "1/3",
    validations,
    value,
    placeholder: options.placeholder,
    props: options.props,
    hint: options.hint
  };
}
function createTreeSplitButtonListField(key, label, value, treeNodes, options = {}) {
  const validations = options.validations ?? [];
  return {
    key,
    name: options.name ?? key,
    type: "treeSplitButtonList",
    label,
    layout: options.layout ?? "horizontal",
    labelWidth: options.labelWidth ?? "1/3",
    validations,
    value: value ?? [],
    treeNodeOptions: treeNodes,
    placeholder: options.placeholder,
    props: __spreadProps(__spreadValues({}, options.props), {
      listItemFormatter: options.listItemFormatter,
      transformTreeNodeToItem: options.transformTreeNodeToItem,
      addButtonLabel: options.addButtonLabel,
      listItemTemplate: options.listItemTemplate
    }),
    hint: options.hint
  };
}
function createColorPickerField(key, label, value, options = {}) {
  if (!isString(key)) {
    throw new Error("Key must be a string");
  }
  if (!isString(label)) {
    throw new Error("Label must be a string");
  }
  return {
    key,
    name: isString(options.name) ? options.name : "",
    type: "colorPicker",
    label,
    layout: isString(options.layout) ? options.layout : "horizontal",
    labelWidth: isString(options.labelWidth) ? options.labelWidth : "1/3",
    validations: Array.isArray(options.validations) ? options.validations : [],
    value: isString(value) ? value : void 0,
    placeholder: isString(options.placeholder) ? options.placeholder : void 0,
    props: __spreadProps(__spreadValues({}, isObject(options.props) ? options.props : {}), {
      colorOptions: options?.props?.colorOptions ?? void 0
    }),
    hint: isString(options.hint) ? options.hint : void 0
  };
}
function createToggleSwitchField(key, label, value, options = {}) {
  if (!isString(key)) {
    throw new Error("Key must be a string");
  }
  if (!isString(label)) {
    throw new Error("Label must be a string");
  }
  return {
    key,
    name: isString(options.name) ? options.name : key,
    type: "toggle-switch",
    label,
    value: isDefined(value) ? value : false,
    // Default to false if undefined
    layout: isString(options.layout) ? options.layout : "horizontal",
    labelWidth: isString(options.labelWidth) ? options.labelWidth : "1/3",
    validations: Array.isArray(options.validations) ? options.validations : [],
    props: isObject(options.props) ? options.props : void 0,
    hint: isString(options.hint) ? options.hint : void 0,
    disabled: isDefined(options.disabled) ? options.disabled : false,
    readonly: isDefined(options.readonly) ? options.readonly : false,
    styleClass: options.styleClass
  };
}
function createIconSelectorField(key, label, value, options = {}) {
  if (!isString(key)) {
    throw new Error("Key must be a string");
  }
  if (!isString(label)) {
    throw new Error("Label must be a string");
  }
  return {
    key,
    type: "icon-selector",
    name: isString(options.name) ? options.name : key,
    label,
    value: value ?? null,
    required: isDefined(options.required) ? options.required : false,
    placeholder: isString(options.placeholder) ? options.placeholder : void 0,
    hidden: isDefined(options.hidden) ? options.hidden : false,
    layout: options.layout === "vertical" ? "vertical" : "horizontal",
    labelWidth: isString(options.labelWidth) ? options.labelWidth : "1/3",
    validations: Array.isArray(options.validations) ? options.validations : [],
    props: isObject(options.props) ? options.props : void 0,
    events: isObject(options.events) ? options.events : void 0,
    hint: isString(options.hint) ? options.hint : void 0,
    disabled: isDefined(options.disabled) ? options.disabled : false,
    readonly: isDefined(options.readonly) ? options.readonly : false
  };
}

// src/app/shared/models/unit-formatters.ts
var UnitFormatters = class _UnitFormatters {
  /**
   * Format date units to readable format
   */
  static formatDateUnit(unit) {
    const dateFormats2 = {
      yyyymmdd1: "yyyy/mm/dd",
      yyyymmdd2: "yyyy.mm.dd",
      yyyymmdd3: "yyyy-mm-dd",
      ddmmyyyy1: "dd/mm/yyyy",
      ddmmyyyy2: "dd.mm.yyyy",
      ddmmyyyy3: "dd-mm-yyyy",
      dmyyyy1: "d/m/yyyy",
      dmyyyy2: "d.m.yyyy",
      dmyyyy3: "d-m-yyyy",
      mmddyyyy1: "mm/dd/yyyy",
      mdyyyy1: "m/d/yyyy"
    };
    return dateFormats2[unit] || unit;
  }
  /**
   * Format time units to readable format
   */
  static formatTimeUnit(unit) {
    const timeFormats2 = {
      HHmmss: "HH:mm:ss",
      Hmmss: "H:mm:ss",
      hmmssa: "h:mm:ss AM/PM"
    };
    return timeFormats2[unit] || unit;
  }
  /**
   * Format distance/altitude units to readable format
   */
  static formatDistanceUnit(unit) {
    const distanceFormats = {
      kilometres: "Kilometres",
      meters: "Metres",
      feet: "Feet",
      inches: "Inches",
      miles: "Miles",
      nauticalMiles: "Nautical Miles",
      yards: "Yards"
    };
    return distanceFormats[unit] || _UnitFormatters.capitalizeFirstLetter(unit);
  }
  /**
   * Format speed units to readable format
   */
  static formatSpeedUnit(unit) {
    const speedFormats = {
      kilometresPerHour: "Kilometres Per Hour",
      metresPerSecond: "Metres Per Second",
      milesPerHour: "Miles Per Hour",
      knots: "Knots"
    };
    return speedFormats[unit] || _UnitFormatters.decamelize(unit);
  }
  /**
   * Format volume units to readable format
   */
  static formatVolumeUnit(unit) {
    const volumeFormats = {
      litres: "Litres",
      cubicMetres: "Cubic Metres",
      cubicFeet: "Cubic Feet",
      gallons: "Gallons (UK)",
      ounces: "Ounces (UK)",
      gallonsUs: "Gallons (US)",
      ouncesUs: "Ounces (US)"
    };
    return volumeFormats[unit] || _UnitFormatters.decamelize(unit);
  }
  /**
   * Format weight units to readable format
   */
  static formatWeightUnit(unit) {
    const weightFormats = {
      kilograms: "Kilograms",
      ounces: "Ounces (UK)",
      pounds: "Pounds",
      tonnes: "Tonnes"
    };
    return weightFormats[unit] || _UnitFormatters.decamelize(unit);
  }
  /**
   * Format area units to readable format
   */
  static formatAreaUnit(unit) {
    const areaFormats = {
      squareKilometres: "Square Kilometres",
      acres: "Acres",
      hectares: "Hectares",
      squareFeet: "Square Feet",
      squareMetres: "Square Metres",
      squareInches: "Square Inches",
      squareMiles: "Square Miles",
      squareYards: "Square Yards"
    };
    return areaFormats[unit] || _UnitFormatters.decamelize(unit);
  }
  /**
   * Format temperature units to readable format
   */
  static formatTemperatureUnit(unit) {
    const tempFormats = {
      celsius: "Celsius",
      fahrenheit: "Fahrenheit"
    };
    return tempFormats[unit] || _UnitFormatters.capitalizeFirstLetter(unit);
  }
  /**
   * Helper method to capitalize the first letter of a string
   */
  static capitalizeFirstLetter(str) {
    if (!str)
      return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  /**
   * Helper method to convert camelCase to Title Case With Spaces
   */
  static decamelize(str) {
    if (!str)
      return "";
    const result = str.replace(/([A-Z])/g, " $1").trim();
    return _UnitFormatters.capitalizeFirstLetter(result);
  }
};

// src/app/shared/models/measurement-units.interface.ts
var MeasurementUnitType;
(function(MeasurementUnitType2) {
  MeasurementUnitType2["DISTANCE"] = "distance";
  MeasurementUnitType2["ALTITUDE"] = "altitude";
  MeasurementUnitType2["SPEED"] = "speed";
  MeasurementUnitType2["AREA"] = "area";
  MeasurementUnitType2["VOLUME"] = "volume";
  MeasurementUnitType2["WEIGHT"] = "weight";
  MeasurementUnitType2["DATE"] = "date";
  MeasurementUnitType2["TEMPERATURE"] = "temperature";
  MeasurementUnitType2["TIME"] = "time";
})(MeasurementUnitType || (MeasurementUnitType = {}));
var DATE_FORMATS = {
  DATE_TIME_SECONDS: "DD/MM/YYYY HH:mm:ss",
  DATE_ONLY: "DD/MM/YYYY",
  TIME_ONLY_SECONDS: "HH:mm:ss"
  // Add other formats as needed
};

// src/app/shared/models/entity-icons.model.ts
var ENTITY_ICON_MAP = {
  // Company structure entities
  client: {
    faIcon: "fas fa-building-user",
    colorHint: "primary"
  },
  vendor: {
    primeIcon: "pi pi-building",
    colorHint: "primary"
  },
  distributor: {
    primeIcon: "pi pi-globe",
    colorHint: "primary"
  },
  group: {
    primeIcon: "pi pi-users",
    colorHint: "primary"
  },
  companygroup: {
    primeIcon: "pi pi-sitemap",
    colorHint: "primary"
  },
  // Asset entities
  asset: {
    primeIcon: "pi pi-box",
    colorHint: "primary"
  },
  assetgroup: {
    faIcon: "fas fa-cubes",
    colorHint: "primary"
  },
  assetcategory: {
    primeIcon: "pi pi-tags",
    colorHint: "primary"
  },
  assettag: {
    primeIcon: "pi pi-tag",
    colorHint: "primary"
  },
  assetratingprofile: {
    primeIcon: "pi pi-star",
    colorHint: "primary"
  },
  assetstateprofile: {
    primeIcon: "pi pi-bolt",
    colorHint: "primary"
  },
  // Device entities
  device: {
    faIcon: "fas fa-microchip",
    colorHint: "primary"
  },
  deviceconfigprofile: {
    faIcon: "fas fa-microchip",
    colorHint: "primary"
  },
  deviceprovider: {
    primeIcon: "pi pi-wifi",
    colorHint: "primary"
  },
  devicebitmaps: {
    faIcon: "fas fa-binary",
    colorHint: "primary"
  },
  iotype: {
    faIcon: "fas fa-gauge",
    colorHint: "primary"
  },
  // Communication entities
  simcard: {
    primeIcon: "pi pi-mobile",
    colorHint: "primary"
  },
  smsgateway: {
    primeIcon: "pi pi-comment",
    colorHint: "primary"
  },
  // Financial entities
  fuelcard: {
    primeIcon: "pi pi-credit-card",
    colorHint: "primary"
  },
  costcentre: {
    faIcon: "fas fa-sitemap",
    colorHint: "primary"
  },
  // Location entities
  zone: {
    primeIcon: "pi pi-map-marker",
    colorHint: "primary"
  },
  zonegroup: {
    primeIcon: "pi pi-map",
    colorHint: "primary"
  },
  // User entities
  user: {
    primeIcon: "pi pi-user",
    colorHint: "primary"
  },
  userrole: {
    primeIcon: "pi pi-shield",
    colorHint: "primary"
  },
  // Profile entities
  overspeedprofile: {
    primeIcon: "pi pi-gauge",
    colorHint: "primary"
  },
  geolockprofile: {
    primeIcon: "pi pi-lock",
    colorHint: "primary"
  },
  roadprofile: {
    faIcon: "fas fa-road",
    colorHint: "primary"
  },
  reminderprofile: {
    primeIcon: "pi pi-bell",
    colorHint: "primary"
  },
  privacyprofile: {
    faIcon: "fas fa-user-secret",
    colorHint: "primary"
  },
  // System entities
  alert: {
    primeIcon: "pi pi-exclamation-triangle",
    colorHint: "danger"
  },
  customfield: {
    primeIcon: "pi pi-list",
    colorHint: "primary"
  },
  theme: {
    primeIcon: "pi pi-palette",
    colorHint: "primary"
  }
};
var DEFAULT_ENTITY_ICON = {
  primeIcon: "pi pi-circle",
  colorHint: "secondary"
};
function getEntityIcon(entityType) {
  if (!entityType) {
    return DEFAULT_ENTITY_ICON;
  }
  const normalizedType = entityType.toLowerCase().trim();
  const iconConfig = ENTITY_ICON_MAP[normalizedType];
  return iconConfig ?? DEFAULT_ENTITY_ICON;
}
function getEntityIconClass(entityType) {
  const config = getEntityIcon(entityType);
  if (config.primeIcon !== void 0 && config.primeIcon.length > 0) {
    return config.primeIcon;
  }
  if (config.faIcon !== void 0 && config.faIcon.length > 0) {
    return config.faIcon;
  }
  return DEFAULT_ENTITY_ICON.primeIcon ?? "pi pi-circle";
}
function isEntityIconFontAwesome(entityType) {
  const config = getEntityIcon(entityType);
  const hasPrimeIcon = config.primeIcon !== void 0 && config.primeIcon.length > 0;
  const hasFaIcon = config.faIcon !== void 0 && config.faIcon.length > 0;
  return !hasPrimeIcon && hasFaIcon;
}

// node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
var formatDistance = (token, count, options) => {
  let result;
  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};

// node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function buildFormatLongFn(args) {
  return (options = {}) => {
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format3 = args.formats[width] || args.formats[args.defaultWidth];
    return format3;
  };
}

// node_modules/date-fns/locale/en-US/_lib/formatLong.js
var dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};

// node_modules/date-fns/locale/en-US/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
var formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];

// node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";
    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;
    return valuesArray[index];
  };
}

// node_modules/date-fns/locale/en-US/_lib/localize.js
var eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
};
var dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
var ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
var localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};

// node_modules/date-fns/locale/_lib/buildMatchFn.js
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;
    const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];
    const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString)) : (
      // [TODO] -- I challenge you to fix the type
      findKey(parsePatterns, (pattern) => pattern.test(matchedString))
    );
    let value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      options.valueCallback(value)
    ) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}
function findKey(object, predicate) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}

// node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];
    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}

// node_modules/date-fns/locale/en-US/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10)
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};

// node_modules/date-fns/locale/en-US.js
var enUS = {
  code: "en-US",
  formatDistance,
  formatLong,
  formatRelative,
  localize,
  match,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};

// node_modules/date-fns/_lib/defaultOptions.js
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}

// node_modules/date-fns/constants.js
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
var minTime = -maxTime;
var millisecondsInWeek = 6048e5;
var millisecondsInDay = 864e5;
var millisecondsInMinute = 6e4;
var millisecondsInHour = 36e5;
var millisecondsInSecond = 1e3;
var minutesInYear = 525600;
var minutesInMonth = 43200;
var minutesInDay = 1440;
var secondsInHour = 3600;
var secondsInDay = secondsInHour * 24;
var secondsInWeek = secondsInDay * 7;
var secondsInYear = secondsInDay * daysInYear;
var secondsInMonth = secondsInYear / 12;
var secondsInQuarter = secondsInMonth * 3;
var constructFromSymbol = Symbol.for("constructDateFrom");

// node_modules/date-fns/constructFrom.js
function constructFrom(date, value) {
  if (typeof date === "function") return date(value);
  if (date && typeof date === "object" && constructFromSymbol in date)
    return date[constructFromSymbol](value);
  if (date instanceof Date) return new date.constructor(value);
  return new Date(value);
}

// node_modules/date-fns/toDate.js
function toDate(argument, context) {
  return constructFrom(context || argument, argument);
}

// node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function getTimezoneOffsetInMilliseconds(date) {
  const _date = toDate(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds()
    )
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}

// node_modules/date-fns/_lib/normalizeDates.js
function normalizeDates(context, ...dates) {
  const normalize = constructFrom.bind(
    null,
    context || dates.find((date) => typeof date === "object")
  );
  return dates.map(normalize);
}

// node_modules/date-fns/startOfDay.js
function startOfDay(date, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/date-fns/differenceInCalendarDays.js
function differenceInCalendarDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const laterStartOfDay = startOfDay(laterDate_);
  const earlierStartOfDay = startOfDay(earlierDate_);
  const laterTimestamp = +laterStartOfDay - getTimezoneOffsetInMilliseconds(laterStartOfDay);
  const earlierTimestamp = +earlierStartOfDay - getTimezoneOffsetInMilliseconds(earlierStartOfDay);
  return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInDay);
}

// node_modules/date-fns/startOfYear.js
function startOfYear(date, options) {
  const date_ = toDate(date, options?.in);
  date_.setFullYear(date_.getFullYear(), 0, 1);
  date_.setHours(0, 0, 0, 0);
  return date_;
}

// node_modules/date-fns/getDayOfYear.js
function getDayOfYear(date, options) {
  const _date = toDate(date, options?.in);
  const diff = differenceInCalendarDays(_date, startOfYear(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// node_modules/date-fns/startOfWeek.js
function startOfWeek(date, options) {
  const defaultOptions2 = getDefaultOptions();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 0;
  const _date = toDate(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/date-fns/startOfISOWeek.js
function startOfISOWeek(date, options) {
  return startOfWeek(date, __spreadProps(__spreadValues({}, options), { weekStartsOn: 1 }));
}

// node_modules/date-fns/getISOWeekYear.js
function getISOWeekYear(date, options) {
  const _date = toDate(date, options?.in);
  const year = _date.getFullYear();
  const fourthOfJanuaryOfNextYear = constructFrom(_date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
  const fourthOfJanuaryOfThisYear = constructFrom(_date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/startOfISOWeekYear.js
function startOfISOWeekYear(date, options) {
  const year = getISOWeekYear(date, options);
  const fourthOfJanuary = constructFrom(options?.in || date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return startOfISOWeek(fourthOfJanuary);
}

// node_modules/date-fns/getISOWeek.js
function getISOWeek(date, options) {
  const _date = toDate(date, options?.in);
  const diff = +startOfISOWeek(_date) - +startOfISOWeekYear(_date);
  return Math.round(diff / millisecondsInWeek) + 1;
}

// node_modules/date-fns/getWeekYear.js
function getWeekYear(date, options) {
  const _date = toDate(date, options?.in);
  const year = _date.getFullYear();
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const firstWeekOfNextYear = constructFrom(options?.in || date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
  const firstWeekOfThisYear = constructFrom(options?.in || date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
  if (+_date >= +startOfNextYear) {
    return year + 1;
  } else if (+_date >= +startOfThisYear) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/startOfWeekYear.js
function startOfWeekYear(date, options) {
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const year = getWeekYear(date, options);
  const firstWeek = constructFrom(options?.in || date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = startOfWeek(firstWeek, options);
  return _date;
}

// node_modules/date-fns/getWeek.js
function getWeek(date, options) {
  const _date = toDate(date, options?.in);
  const diff = +startOfWeek(_date, options) - +startOfWeekYear(_date, options);
  return Math.round(diff / millisecondsInWeek) + 1;
}

// node_modules/date-fns/_lib/addLeadingZeros.js
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}

// node_modules/date-fns/_lib/format/lightFormatters.js
var lightFormatters = {
  // Year
  y(date, token) {
    const signedYear = date.getFullYear();
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },
  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d(date, token) {
    return addLeadingZeros(date.getDate(), token.length);
  },
  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(date, token) {
    return addLeadingZeros(date.getHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H(date, token) {
    return addLeadingZeros(date.getHours(), token.length);
  },
  // Minute
  m(date, token) {
    return addLeadingZeros(date.getMinutes(), token.length);
  },
  // Second
  s(date, token) {
    return addLeadingZeros(date.getSeconds(), token.length);
  },
  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3)
    );
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};

// node_modules/date-fns/_lib/format/formatters.js
var dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
var formatters = {
  // Era
  G: function(date, token, localize2) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize2.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize2.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize2.era(era, { width: "wide" });
    }
  },
  // Year
  y: function(date, token, localize2) {
    if (token === "yo") {
      const signedYear = date.getFullYear();
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize2.ordinalNumber(year, { unit: "year" });
    }
    return lightFormatters.y(date, token);
  },
  // Local week-numbering year
  Y: function(date, token, localize2, options) {
    const signedWeekYear = getWeekYear(date, options);
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize2.ordinalNumber(weekYear, { unit: "year" });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function(date, token) {
    const isoWeekYear = getISOWeekYear(date);
    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(date, token) {
    const year = date.getFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function(date, token, localize2) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize2.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(date, token, localize2) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize2.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(date, token, localize2) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize2.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize2.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return localize2.month(month, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize2.month(month, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(date, token, localize2) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return addLeadingZeros(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize2.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize2.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return localize2.month(month, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize2.month(month, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(date, token, localize2, options) {
    const week = getWeek(date, options);
    if (token === "wo") {
      return localize2.ordinalNumber(week, { unit: "week" });
    }
    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function(date, token, localize2) {
    const isoWeek = getISOWeek(date);
    if (token === "Io") {
      return localize2.ordinalNumber(isoWeek, { unit: "week" });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function(date, token, localize2) {
    if (token === "do") {
      return localize2.ordinalNumber(date.getDate(), { unit: "date" });
    }
    return lightFormatters.d(date, token);
  },
  // Day of year
  D: function(date, token, localize2) {
    const dayOfYear = getDayOfYear(date);
    if (token === "Do") {
      return localize2.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function(date, token, localize2) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(date, token, localize2, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize2.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(date, token, localize2, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize2.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(date, token, localize2) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize2.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(date, token, localize2) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(date, token, localize2) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(date, token, localize2) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(date, token, localize2) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return lightFormatters.h(date, token);
  },
  // Hour [0-23]
  H: function(date, token, localize2) {
    if (token === "Ho") {
      return localize2.ordinalNumber(date.getHours(), { unit: "hour" });
    }
    return lightFormatters.H(date, token);
  },
  // Hour [0-11]
  K: function(date, token, localize2) {
    const hours = date.getHours() % 12;
    if (token === "Ko") {
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function(date, token, localize2) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;
    if (token === "ko") {
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function(date, token, localize2) {
    if (token === "mo") {
      return localize2.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }
    return lightFormatters.m(date, token);
  },
  // Second
  s: function(date, token, localize2) {
    if (token === "so") {
      return localize2.ordinalNumber(date.getSeconds(), { unit: "second" });
    }
    return lightFormatters.s(date, token);
  },
  // Fraction of second
  S: function(date, token) {
    return lightFormatters.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function(date, token, _localize) {
    const timestamp = Math.trunc(+date / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function(date, token, _localize) {
    return addLeadingZeros(+date, token.length);
  }
};
function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}
function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = addLeadingZeros(Math.trunc(absOffset / 60), 2);
  const minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

// node_modules/date-fns/_lib/format/longFormatters.js
var dateLongFormatter = (pattern, formatLong2) => {
  switch (pattern) {
    case "P":
      return formatLong2.date({ width: "short" });
    case "PP":
      return formatLong2.date({ width: "medium" });
    case "PPP":
      return formatLong2.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong2.date({ width: "full" });
  }
};
var timeLongFormatter = (pattern, formatLong2) => {
  switch (pattern) {
    case "p":
      return formatLong2.time({ width: "short" });
    case "pp":
      return formatLong2.time({ width: "medium" });
    case "ppp":
      return formatLong2.time({ width: "long" });
    case "pppp":
    default:
      return formatLong2.time({ width: "full" });
  }
};
var dateTimeLongFormatter = (pattern, formatLong2) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong2);
  }
  let dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong2.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong2.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong2.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong2.dateTime({ width: "full" });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};

// node_modules/date-fns/_lib/protectedTokens.js
var dayOfYearTokenRE = /^D+$/;
var weekYearTokenRE = /^Y+$/;
var throwTokens = ["D", "DD", "YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format3, input2) {
  const _message = message(token, format3, input2);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format3, input2) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format3}\`) for formatting ${subject} to the input \`${input2}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}

// node_modules/date-fns/isDate.js
function isDate(value) {
  return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}

// node_modules/date-fns/isValid.js
function isValid(date) {
  return !(!isDate(date) && typeof date !== "number" || isNaN(+toDate(date)));
}

// node_modules/date-fns/format.js
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(date, formatStr, options) {
  const defaultOptions2 = getDefaultOptions();
  const locale = options?.locale ?? defaultOptions2.locale ?? enUS;
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 0;
  const originalDate = toDate(date, options?.in);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  let parts = formatStr.match(longFormattingTokensRegExp).map((substring) => {
    const firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      const longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map((substring) => {
    if (substring === "''") {
      return { isToken: false, value: "'" };
    }
    const firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return { isToken: false, value: cleanEscapedString(substring) };
    }
    if (formatters[firstCharacter]) {
      return { isToken: true, value: substring };
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + firstCharacter + "`"
      );
    }
    return { isToken: false, value: substring };
  });
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }
  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale
  };
  return parts.map((part) => {
    if (!part.isToken) return part.value;
    const token = part.value;
    if (!options?.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token) || !options?.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
      warnOrThrowProtectedError(token, formatStr, String(date));
    }
    const formatter = formatters[token[0]];
    return formatter(originalDate, token, locale.localize, formatterOptions);
  }).join("");
}
function cleanEscapedString(input2) {
  const matched = input2.match(escapedStringRegExp);
  if (!matched) {
    return input2;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

// node_modules/date-fns/getDefaultOptions.js
function getDefaultOptions2() {
  return Object.assign({}, getDefaultOptions());
}

// node_modules/date-fns-tz/dist/esm/_lib/tzTokenizeDate/index.js
function tzTokenizeDate(date, timeZone) {
  const dtf = getDateTimeFormat(timeZone);
  return "formatToParts" in dtf ? partsOffset(dtf, date) : hackyOffset(dtf, date);
}
var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function partsOffset(dtf, date) {
  try {
    const formatted = dtf.formatToParts(date);
    const filled = [];
    for (let i = 0; i < formatted.length; i++) {
      const pos = typeToPos[formatted[i].type];
      if (pos !== void 0) {
        filled[pos] = parseInt(formatted[i].value, 10);
      }
    }
    return filled;
  } catch (error) {
    if (error instanceof RangeError) {
      return [NaN];
    }
    throw error;
  }
}
function hackyOffset(dtf, date) {
  const formatted = dtf.format(date);
  const parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted);
  return [
    parseInt(parsed[3], 10),
    parseInt(parsed[1], 10),
    parseInt(parsed[2], 10),
    parseInt(parsed[4], 10),
    parseInt(parsed[5], 10),
    parseInt(parsed[6], 10)
  ];
}
var dtfCache = {};
var testDateFormatted = new Intl.DateTimeFormat("en-US", {
  hourCycle: "h23",
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z"));
var hourCycleSupported = testDateFormatted === "06/25/2014, 00:00:00" || testDateFormatted === "\u200E06\u200E/\u200E25\u200E/\u200E2014\u200E \u200E00\u200E:\u200E00\u200E:\u200E00";
function getDateTimeFormat(timeZone) {
  if (!dtfCache[timeZone]) {
    dtfCache[timeZone] = hourCycleSupported ? new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return dtfCache[timeZone];
}

// node_modules/date-fns-tz/dist/esm/_lib/newDateUTC/index.js
function newDateUTC(fullYear, month, day, hour, minute, second, millisecond) {
  const utcDate = /* @__PURE__ */ new Date(0);
  utcDate.setUTCFullYear(fullYear, month, day);
  utcDate.setUTCHours(hour, minute, second, millisecond);
  return utcDate;
}

// node_modules/date-fns-tz/dist/esm/_lib/tzParseTimezone/index.js
var MILLISECONDS_IN_HOUR = 36e5;
var MILLISECONDS_IN_MINUTE = 6e4;
var patterns = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function tzParseTimezone(timezoneString, date, isUtcDate) {
  if (!timezoneString) {
    return 0;
  }
  let token = patterns.timezoneZ.exec(timezoneString);
  if (token) {
    return 0;
  }
  let hours;
  let absoluteOffset;
  token = patterns.timezoneHH.exec(timezoneString);
  if (token) {
    hours = parseInt(token[1], 10);
    if (!validateTimezone(hours)) {
      return NaN;
    }
    return -(hours * MILLISECONDS_IN_HOUR);
  }
  token = patterns.timezoneHHMM.exec(timezoneString);
  if (token) {
    hours = parseInt(token[2], 10);
    const minutes = parseInt(token[3], 10);
    if (!validateTimezone(hours, minutes)) {
      return NaN;
    }
    absoluteOffset = Math.abs(hours) * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
    return token[1] === "+" ? -absoluteOffset : absoluteOffset;
  }
  if (isValidTimezoneIANAString(timezoneString)) {
    date = new Date(date || Date.now());
    const utcDate = isUtcDate ? date : toUtcDate(date);
    const offset = calcOffset(utcDate, timezoneString);
    const fixedOffset = isUtcDate ? offset : fixOffset(date, offset, timezoneString);
    return -fixedOffset;
  }
  return NaN;
}
function toUtcDate(date) {
  return newDateUTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
}
function calcOffset(date, timezoneString) {
  const tokens = tzTokenizeDate(date, timezoneString);
  const asUTC = newDateUTC(tokens[0], tokens[1] - 1, tokens[2], tokens[3] % 24, tokens[4], tokens[5], 0).getTime();
  let asTS = date.getTime();
  const over = asTS % 1e3;
  asTS -= over >= 0 ? over : 1e3 + over;
  return asUTC - asTS;
}
function fixOffset(date, offset, timezoneString) {
  const localTS = date.getTime();
  let utcGuess = localTS - offset;
  const o2 = calcOffset(new Date(utcGuess), timezoneString);
  if (offset === o2) {
    return offset;
  }
  utcGuess -= o2 - offset;
  const o3 = calcOffset(new Date(utcGuess), timezoneString);
  if (o2 === o3) {
    return o2;
  }
  return Math.max(o2, o3);
}
function validateTimezone(hours, minutes) {
  return -23 <= hours && hours <= 23 && (minutes == null || 0 <= minutes && minutes <= 59);
}
var validIANATimezoneCache = {};
function isValidTimezoneIANAString(timeZoneString) {
  if (validIANATimezoneCache[timeZoneString])
    return true;
  try {
    new Intl.DateTimeFormat(void 0, { timeZone: timeZoneString });
    validIANATimezoneCache[timeZoneString] = true;
    return true;
  } catch (error) {
    return false;
  }
}

// node_modules/date-fns-tz/dist/esm/format/formatters/index.js
var MILLISECONDS_IN_MINUTE2 = 60 * 1e3;

// node_modules/date-fns-tz/dist/esm/_lib/getTimezoneOffsetInMilliseconds/index.js
function getTimezoneOffsetInMilliseconds2(date) {
  const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return +date - +utcDate;
}

// node_modules/date-fns-tz/dist/esm/_lib/tzPattern/index.js
var tzPattern = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;

// node_modules/date-fns-tz/dist/esm/toDate/index.js
var MILLISECONDS_IN_HOUR2 = 36e5;
var MILLISECONDS_IN_MINUTE3 = 6e4;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns2 = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    // 0 additional digits
    /^([+-]\d{3})$/,
    // 1 additional digit
    /^([+-]\d{4})$/
    // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    // 0 additional digits
    /^([+-]\d{5})/,
    // 1 additional digit
    /^([+-]\d{6})/
    // 2 additional digits
  ],
  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  // time zone tokens (to identify the presence of a tz)
  timeZone: tzPattern
};
function toDate2(argument, options = {}) {
  if (arguments.length < 1) {
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  }
  if (argument === null) {
    return /* @__PURE__ */ new Date(NaN);
  }
  const additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : Number(options.additionalDigits);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  }
  if (argument instanceof Date || typeof argument === "object" && Object.prototype.toString.call(argument) === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || Object.prototype.toString.call(argument) === "[object Number]") {
    return new Date(argument);
  } else if (!(Object.prototype.toString.call(argument) === "[object String]")) {
    return /* @__PURE__ */ new Date(NaN);
  }
  const dateStrings = splitDateString(argument);
  const { year, restDateString } = parseYear(dateStrings.date, additionalDigits);
  const date = parseDate(restDateString, year);
  if (date === null || isNaN(date.getTime())) {
    return /* @__PURE__ */ new Date(NaN);
  }
  if (date) {
    const timestamp = date.getTime();
    let time = 0;
    let offset;
    if (dateStrings.time) {
      time = parseTime(dateStrings.time);
      if (time === null || isNaN(time)) {
        return /* @__PURE__ */ new Date(NaN);
      }
    }
    if (dateStrings.timeZone || options.timeZone) {
      offset = tzParseTimezone(dateStrings.timeZone || options.timeZone, new Date(timestamp + time));
      if (isNaN(offset)) {
        return /* @__PURE__ */ new Date(NaN);
      }
    } else {
      offset = getTimezoneOffsetInMilliseconds2(new Date(timestamp + time));
      offset = getTimezoneOffsetInMilliseconds2(new Date(timestamp + time + offset));
    }
    return new Date(timestamp + time + offset);
  } else {
    return /* @__PURE__ */ new Date(NaN);
  }
}
function splitDateString(dateString) {
  const dateStrings = {};
  let parts = patterns2.dateTimePattern.exec(dateString);
  let timeString;
  if (!parts) {
    parts = patterns2.datePattern.exec(dateString);
    if (parts) {
      dateStrings.date = parts[1];
      timeString = parts[2];
    } else {
      dateStrings.date = null;
      timeString = dateString;
    }
  } else {
    dateStrings.date = parts[1];
    timeString = parts[3];
  }
  if (timeString) {
    const token = patterns2.timeZone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], "");
      dateStrings.timeZone = token[1].trim();
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  if (dateString) {
    const patternYYY = patterns2.YYY[additionalDigits];
    const patternYYYYY = patterns2.YYYYY[additionalDigits];
    let token = patterns2.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
    if (token) {
      const yearString = token[1];
      return {
        year: parseInt(yearString, 10),
        restDateString: dateString.slice(yearString.length)
      };
    }
    token = patterns2.YY.exec(dateString) || patternYYY.exec(dateString);
    if (token) {
      const centuryString = token[1];
      return {
        year: parseInt(centuryString, 10) * 100,
        restDateString: dateString.slice(centuryString.length)
      };
    }
  }
  return {
    year: null
  };
}
function parseDate(dateString, year) {
  if (year === null) {
    return null;
  }
  let date;
  let month;
  let week;
  if (!dateString || !dateString.length) {
    date = /* @__PURE__ */ new Date(0);
    date.setUTCFullYear(year);
    return date;
  }
  let token = patterns2.MM.exec(dateString);
  if (token) {
    date = /* @__PURE__ */ new Date(0);
    month = parseInt(token[1], 10) - 1;
    if (!validateDate(year, month)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, month);
    return date;
  }
  token = patterns2.DDD.exec(dateString);
  if (token) {
    date = /* @__PURE__ */ new Date(0);
    const dayOfYear = parseInt(token[1], 10);
    if (!validateDayOfYearDate(year, dayOfYear)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, 0, dayOfYear);
    return date;
  }
  token = patterns2.MMDD.exec(dateString);
  if (token) {
    date = /* @__PURE__ */ new Date(0);
    month = parseInt(token[1], 10) - 1;
    const day = parseInt(token[2], 10);
    if (!validateDate(year, month, day)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, month, day);
    return date;
  }
  token = patterns2.Www.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    if (!validateWeekDate(week)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    return dayOfISOWeekYear(year, week);
  }
  token = patterns2.WwwD.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    const dayOfWeek = parseInt(token[2], 10) - 1;
    if (!validateWeekDate(week, dayOfWeek)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  }
  return null;
}
function parseTime(timeString) {
  let hours;
  let minutes;
  let token = patterns2.HH.exec(timeString);
  if (token) {
    hours = parseFloat(token[1].replace(",", "."));
    if (!validateTime(hours)) {
      return NaN;
    }
    return hours % 24 * MILLISECONDS_IN_HOUR2;
  }
  token = patterns2.HHMM.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseFloat(token[2].replace(",", "."));
    if (!validateTime(hours, minutes)) {
      return NaN;
    }
    return hours % 24 * MILLISECONDS_IN_HOUR2 + minutes * MILLISECONDS_IN_MINUTE3;
  }
  token = patterns2.HHMMSS.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseInt(token[2], 10);
    const seconds = parseFloat(token[3].replace(",", "."));
    if (!validateTime(hours, minutes, seconds)) {
      return NaN;
    }
    return hours % 24 * MILLISECONDS_IN_HOUR2 + minutes * MILLISECONDS_IN_MINUTE3 + seconds * 1e3;
  }
  return null;
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  week = week || 0;
  day = day || 0;
  const date = /* @__PURE__ */ new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  const fourthOfJanuaryDay = date.getUTCDay() || 7;
  const diff = week * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  if (month < 0 || month > 11) {
    return false;
  }
  if (date != null) {
    if (date < 1) {
      return false;
    }
    const isLeapYear = isLeapYearIndex(year);
    if (isLeapYear && date > DAYS_IN_MONTH_LEAP_YEAR[month]) {
      return false;
    }
    if (!isLeapYear && date > DAYS_IN_MONTH[month]) {
      return false;
    }
  }
  return true;
}
function validateDayOfYearDate(year, dayOfYear) {
  if (dayOfYear < 1) {
    return false;
  }
  const isLeapYear = isLeapYearIndex(year);
  if (isLeapYear && dayOfYear > 366) {
    return false;
  }
  if (!isLeapYear && dayOfYear > 365) {
    return false;
  }
  return true;
}
function validateWeekDate(week, day) {
  if (week < 0 || week > 52) {
    return false;
  }
  if (day != null && (day < 0 || day > 6)) {
    return false;
  }
  return true;
}
function validateTime(hours, minutes, seconds) {
  if (hours < 0 || hours >= 25) {
    return false;
  }
  if (minutes != null && (minutes < 0 || minutes >= 60)) {
    return false;
  }
  if (seconds != null && (seconds < 0 || seconds >= 60)) {
    return false;
  }
  return true;
}

// node_modules/date-fns-tz/dist/esm/toZonedTime/index.js
function toZonedTime(date, timeZone, options) {
  date = toDate2(date, options);
  const offsetMilliseconds = tzParseTimezone(timeZone, date, true);
  const d = new Date(date.getTime() - offsetMilliseconds);
  const resultDate = /* @__PURE__ */ new Date(0);
  resultDate.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
  resultDate.setHours(d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds());
  return resultDate;
}

// src/app/shared/services/measurement-units/measurement-date-time.service.ts
var MeasurementDateTimeService = class _MeasurementDateTimeService {
  _locale = "en-US";
  _userTimezoneId = Intl.DateTimeFormat().resolvedOptions().timeZone;
  constructor() {
  }
  setLocale(locale) {
    this._locale = locale;
  }
  getLocale() {
    return this._locale;
  }
  setTimezoneId(timezoneId) {
    try {
      Intl.DateTimeFormat(void 0, { timeZone: timezoneId });
      this._userTimezoneId = timezoneId;
    } catch (e) {
      console.error(`Invalid timezoneId: ${timezoneId}. Falling back to ${this._userTimezoneId}.`, e);
    }
  }
  getTimezoneId() {
    return this._userTimezoneId;
  }
  /**
   * Format a date using a custom format pattern
   *
   * @param date The date to format (assumed to be UTC)
   * @param formatPattern The format pattern to use (e.g., 'YYYY-MM-DD', 'DD/MM/YYYY')
   * @returns The formatted date string in the user's local timezone
   */
  formatDate(date, formatPattern) {
    if (!this.isValidDate(date)) {
      console.warn("Invalid date provided to formatDate:", date);
      return "";
    }
    if (!formatPattern) {
      return new Intl.DateTimeFormat(this.getLocale(), {
        timeZone: this.getTimezoneId(),
        year: "numeric",
        month: "numeric",
        day: "numeric"
      }).format(date);
    }
    const locale = this.getLocale();
    const timeZone = this.getTimezoneId();
    if (formatPattern === "dddd, D MMMM YYYY") {
      return new Intl.DateTimeFormat(locale, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone
      }).format(date);
    }
    if (formatPattern === "dddd, MMMM D, YYYY") {
      return new Intl.DateTimeFormat(locale, {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone
      }).format(date);
    }
    return this.formatCustomDate(date, formatPattern);
  }
  /**
   * Format a time using a custom format pattern
   *
   * @param date The date to format (assumed to be UTC)
   * @param format The format pattern to use (e.g., 'HH:mm:ss', 'h:mm A')
   * @returns The formatted time string in the user's local timezone
   */
  formatTime(date, format3) {
    if (!this.isValidDate(date)) {
      console.warn("Invalid date provided to formatTime:", date);
      return "";
    }
    const locale = this.getLocale();
    const timeZone = this.getTimezoneId();
    if (format3 === "HH:mm:ss") {
      return new Intl.DateTimeFormat(locale, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone
      }).format(date);
    }
    if (format3 === "HH:mm") {
      return new Intl.DateTimeFormat(locale, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone
      }).format(date);
    }
    if (format3 === "h:mm A") {
      return new Intl.DateTimeFormat(locale, {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone
      }).format(date);
    }
    return this.formatCustomTime(date, format3);
  }
  /**
   * Formats a date and time using a custom combined pattern.
   * The input date is assumed to be UTC.
   * The output will be in the user's configured local timezone.
   *
   * @param date The date to format (assumed to be UTC).
   * @param formatPattern The format pattern (e.g., 'MM/DD/YYYY HH:mm:ss').
   * @returns The formatted date-time string in the user's local timezone.
   */
  formatDateTime(date, formatPattern) {
    if (!this.isValidDate(date)) {
      console.warn("Invalid date provided to formatDateTime:", date);
      return "";
    }
    if (!formatPattern) {
      return new Intl.DateTimeFormat(this.getLocale(), {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZone: this.getTimezoneId()
      }).format(date);
    }
    try {
      return this.formatCustomDateTime(date, formatPattern);
    } catch (error) {
      console.error("Error in formatDateTime:", error);
      return new Intl.DateTimeFormat(this.getLocale(), {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZone: this.getTimezoneId()
      }).format(date);
    }
  }
  isValidDate(date) {
    return date instanceof Date && !isNaN(date.getTime());
  }
  formatCustomDate(date, format3) {
    if (!this.isValidDate(date)) {
      console.warn("Invalid date in formatCustomDate:", date);
      return "";
    }
    if (!format3) {
      return new Intl.DateTimeFormat(this.getLocale(), {
        timeZone: this.getTimezoneId(),
        year: "numeric",
        month: "numeric",
        day: "numeric"
      }).format(date);
    }
    const zonedDate = toZonedTime(date, this.getTimezoneId());
    try {
      return format3.replace(/YYYY/g, zonedDate.getFullYear().toString()).replace(/MM/g, (zonedDate.getMonth() + 1).toString().padStart(2, "0")).replace(/M/g, (zonedDate.getMonth() + 1).toString()).replace(/DD/g, zonedDate.getDate().toString().padStart(2, "0")).replace(/D/g, zonedDate.getDate().toString());
    } catch (error) {
      console.error("Error in formatCustomDate:", error);
      return new Intl.DateTimeFormat(this.getLocale(), {
        timeZone: this.getTimezoneId(),
        year: "numeric",
        month: "numeric",
        day: "numeric"
      }).format(date);
    }
  }
  formatCustomTime(date, format3) {
    if (!this.isValidDate(date)) {
      console.warn("Invalid date in formatCustomTime:", date);
      return "";
    }
    if (!format3) {
      return new Intl.DateTimeFormat(this.getLocale(), {
        timeZone: this.getTimezoneId(),
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
      }).format(date);
    }
    const zonedDate = toZonedTime(date, this.getTimezoneId());
    const hours24 = zonedDate.getHours();
    const hours12 = hours24 % 12 || 12;
    const minutes = zonedDate.getMinutes();
    const seconds = zonedDate.getSeconds();
    const ampm = hours24 >= 12 ? "PM" : "AM";
    const replacements = /* @__PURE__ */ new Map([
      ["HH", hours24.toString().padStart(2, "0")],
      ["H", hours24.toString()],
      ["hh", hours12.toString().padStart(2, "0")],
      ["h", hours12.toString()],
      ["mm", minutes.toString().padStart(2, "0")],
      ["m", minutes.toString()],
      ["ss", seconds.toString().padStart(2, "0")],
      ["s", seconds.toString()],
      ["A", ampm],
      ["a", ampm.toLowerCase()]
    ]);
    let result = format3;
    replacements.forEach((value, pattern) => {
      result = result.replace(new RegExp(pattern, "g"), value);
    });
    return result;
  }
  formatCustomDateTime(date, format3) {
    if (!this.isValidDate(date)) {
      console.warn("Invalid date in formatCustomDateTime:", date);
      return "";
    }
    const zonedDate = toZonedTime(date, this.getTimezoneId());
    const year = zonedDate.getFullYear();
    const month = zonedDate.getMonth() + 1;
    const day = zonedDate.getDate();
    const hours24 = zonedDate.getHours();
    const hours12 = hours24 % 12 || 12;
    const minutes = zonedDate.getMinutes();
    const seconds = zonedDate.getSeconds();
    const ampm = hours24 >= 12 ? "PM" : "AM";
    const replacements = /* @__PURE__ */ new Map([
      ["YYYY", year.toString()],
      ["YY", year.toString().slice(-2)],
      ["MM", month.toString().padStart(2, "0")],
      ["M", month.toString()],
      ["DD", day.toString().padStart(2, "0")],
      ["D", day.toString()],
      ["HH", hours24.toString().padStart(2, "0")],
      ["H", hours24.toString()],
      ["hh", hours12.toString().padStart(2, "0")],
      ["h", hours12.toString()],
      ["mm", minutes.toString().padStart(2, "0")],
      ["m", minutes.toString()],
      ["ss", seconds.toString().padStart(2, "0")],
      ["s", seconds.toString()],
      ["A", ampm],
      ["a", ampm.toLowerCase()]
    ]);
    let result = format3;
    for (const [pattern, replacement] of replacements) {
      result = result.replace(new RegExp(pattern, "g"), replacement);
    }
    return result;
  }
  formatDateType(value, unit, variant) {
    const dateInput = typeof value === "string" && !value.endsWith("Z") && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(value) ? /* @__PURE__ */ new Date(value + "Z") : new Date(value);
    if (!this.isValidDate(dateInput)) {
      console.warn("Invalid date value in formatDateType:", value);
      return "";
    }
    return this.formatDate(dateInput, variant === "long" ? unit.long ?? unit.unit : unit.unit);
  }
  formatTimeType(value, unit, variant) {
    const dateInput = typeof value === "string" && !value.endsWith("Z") && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(value) ? /* @__PURE__ */ new Date(value + "Z") : new Date(value);
    if (!this.isValidDate(dateInput)) {
      console.warn("Invalid date value in formatTimeType:", value);
      return "";
    }
    return this.formatTime(dateInput, variant === "short" ? unit.short ?? unit.unit : unit.unit);
  }
  /**
   * Creates a Date object from various input types, ALWAYS treating input as UTC.
   * @param value The input: a Date object, a UTC timestamp (number), or a date string.
   * @returns A Date object representing the input as UTC time.
   */
  createDateAssumingUtc(value) {
    if (value instanceof Date) {
      return value;
    }
    if (typeof value === "number") {
      return new Date(value);
    }
    if (typeof value === "string") {
      if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,3})?$/.test(value)) {
        return /* @__PURE__ */ new Date(value + "Z");
      }
      if (/^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/.test(value)) {
        const isoFormat = value.replace(/(\d{4})\/(\d{2})\/(\d{2}) /, "$1-$2-$3T");
        return /* @__PURE__ */ new Date(isoFormat + "Z");
      }
      if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(value)) {
        return /* @__PURE__ */ new Date(value.replace(" ", "T") + "Z");
      }
      if (/^\d{4}\/\d{2}\/\d{2}$/.test(value)) {
        const isoFormat = value.replace(/(\d{4})\/(\d{2})\/(\d{2})/, "$1-$2-$3");
        return /* @__PURE__ */ new Date(isoFormat + "T00:00:00Z");
      }
      if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
        return /* @__PURE__ */ new Date(value + "T00:00:00Z");
      }
      if (/Z$|[+-]\d{2}:\d{2}$/.test(value)) {
        return new Date(value);
      }
      const fallbackDate = new Date(value);
      if (!isNaN(fallbackDate.getTime())) {
        console.warn(`createDateAssumingUtc: Unhandled format "${value}", using browser default parsing (may not be UTC)`);
        return fallbackDate;
      }
      console.error(`createDateAssumingUtc: Unable to parse date string "${value}"`);
      return /* @__PURE__ */ new Date(NaN);
    }
    console.warn("createDateAssumingUtc received an unexpected type:", value);
    return /* @__PURE__ */ new Date(NaN);
  }
  static \u0275fac = function MeasurementDateTimeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MeasurementDateTimeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MeasurementDateTimeService, factory: _MeasurementDateTimeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeasurementDateTimeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/shared/services/measurement-units/measurement-unit-registry.service.ts
var MeasurementUnitRegistryService = class _MeasurementUnitRegistryService {
  unitListCache = /* @__PURE__ */ new Map();
  dateTimeService = inject(MeasurementDateTimeService);
  /**
   * Get the list of measurement units for a specific type
   *
   * @param type The measurement unit type (e.g., distance, temperature)
   * @returns The unit type configuration
   */
  getUnitList(type) {
    if (isDefined(type) && this.unitListCache.has(type)) {
      return this.unitListCache.get(type);
    }
    const result = this.buildUnitList(type);
    if (isDefined(type)) {
      this.unitListCache.set(type, result);
    }
    return result;
  }
  /**
   * Clear the unit list cache
   */
  clearCache() {
    this.unitListCache.clear();
  }
  /**
   * Build the unit list based on the specified type
   *
   * @param type The measurement unit type (e.g., distance, temperature)
   * @returns The unit type configuration
   */
  buildUnitList(type) {
    switch (type) {
      case MeasurementUnitType.DISTANCE:
        return this.getDistanceUnits();
      case MeasurementUnitType.ALTITUDE:
        return this.getAltitudeUnits();
      case MeasurementUnitType.SPEED:
        return this.getSpeedUnits();
      case MeasurementUnitType.AREA:
        return this.getAreaUnits();
      case MeasurementUnitType.VOLUME:
        return this.getVolumeUnits();
      case MeasurementUnitType.WEIGHT:
        return this.getWeightUnits();
      case MeasurementUnitType.TEMPERATURE:
        return this.getTemperatureUnits();
      case MeasurementUnitType.DATE:
        return this.getDateUnits();
      case MeasurementUnitType.TIME:
        return this.getTimeUnits();
      default:
        return {
          error: "ERROR: Unit does not exist"
        };
    }
  }
  /**
   * Get the base distance units configuration
   *
   * @returns The base distance unit type configuration
   */
  getBaseDistanceUnits() {
    return {
      metres: { multiplier: 1e-3, unit: "metres", symbol: "m" },
      kilometres: { multiplier: 1, unit: "kilometres", symbol: "km" },
      feet: { multiplier: 3048e-7, unit: "feet", symbol: "ft" },
      inches: { multiplier: 254e-7, unit: "inches", symbol: "in" },
      miles: { multiplier: 1.609344, unit: "miles", symbol: "mi" },
      nauticalMiles: {
        multiplier: 1.852,
        unit: "nautical miles",
        symbol: "nmi"
      },
      yards: { multiplier: 9144e-7, unit: "yards", symbol: "yd" }
    };
  }
  /**
   * Get the distance units configuration
   *
   * @returns The distance unit type configuration
   */
  getDistanceUnits() {
    return {
      units: this.getBaseDistanceUnits()
    };
  }
  /**
   * Get the altitude units configuration
   *
   * @returns The altitude unit type configuration
   */
  getAltitudeUnits() {
    return {
      units: this.getBaseDistanceUnits(),
      value: (raw, unit) => Number(raw) / ((unit.multiplier ?? 1) * 1e3)
    };
  }
  /**
   * Get the speed units configuration
   *
   * @returns The speed unit type configuration
   */
  getSpeedUnits() {
    return {
      units: {
        metresPerSecond: {
          multiplier: 3.6,
          unit: "metres per second",
          symbol: "m/s"
        },
        kilometresPerHour: {
          multiplier: 1,
          unit: "kilometres per hour",
          symbol: "km/h"
        },
        milesPerHour: {
          multiplier: 1.609344,
          unit: "miles per hour",
          symbol: "mph"
        },
        knots: { multiplier: 1.852, unit: "knots", symbol: "kn" }
      },
      value: (raw, unit) => Math.round(Number(raw) / (unit.multiplier ?? 1)),
      format: (value, unit, _variant) => `${Number(value).toFixed(0)} ${unit.symbol}`
    };
  }
  /**
   * Get the area units configuration
   *
   * @returns The area unit type configuration
   */
  getAreaUnits() {
    return {
      units: {
        acres: { multiplier: 0.00404685642, unit: "acres", symbol: "ac" },
        hectares: { multiplier: 0.01, unit: "hectares", symbol: "ha" },
        squareFeet: {
          multiplier: 9290304e-14,
          unit: "square feet",
          symbol: "ft2"
        },
        squareInches: {
          multiplier: 64516e-14,
          unit: "square inches",
          symbol: "in2"
        },
        squareKilometres: {
          multiplier: 1,
          unit: "square kilometres",
          symbol: "km2"
        },
        squaremetres: {
          multiplier: 1e-6,
          unit: "square metres",
          symbol: "m2"
        },
        squareMiles: {
          multiplier: 2.58998811,
          unit: "square miles",
          symbol: "mi2"
        },
        squareYards: {
          multiplier: 83612736e-14,
          unit: "square yards",
          symbol: "yd2"
        }
      }
    };
  }
  /**
   * Get the volume units configuration
   *
   * @returns The volume unit type configuration
   */
  getVolumeUnits() {
    return {
      units: {
        litres: { multiplier: 1, unit: "litres", symbol: "l" },
        cubicmetres: {
          multiplier: 1e3,
          unit: "cubic metres",
          symbol: "m3"
        },
        cubicFeet: {
          multiplier: 28.3168466,
          unit: "cubic feet",
          symbol: "ft3"
        },
        gallons: { multiplier: 4.54609, unit: "gallons", symbol: "gal" },
        gallonsUs: {
          multiplier: 3.78541178,
          unit: "gallons",
          symbol: "gal"
        },
        ounces: {
          multiplier: 0.0284131,
          unit: "fluid ounce",
          symbol: "fl oz"
        },
        ouncesUs: {
          multiplier: 0.0295735296,
          unit: "fluid ounce",
          symbol: "fl oz"
        }
      }
    };
  }
  /**
   * Get the weight units configuration
   *
   * @returns The weight unit type configuration
   */
  getWeightUnits() {
    return {
      units: {
        kilograms: { multiplier: 1, unit: "kilograms", symbol: "kg" },
        ounces: { multiplier: 0.0283495231, unit: "ounces", symbol: "oz" },
        pounds: { multiplier: 0.45359237, unit: "pounds", symbol: "lb" },
        tonnes: { multiplier: 1e3, unit: "tonnes", symbol: "t" }
      }
    };
  }
  /**
   * Convert Celsius to Fahrenheit
   *
   * @param celsius The temperature in Celsius
   * @returns The temperature in Fahrenheit
   */
  celsiusToFahrenheit(celsius) {
    return Math.round((celsius * 1.8 + 32) * 10) / 10;
  }
  /**
   * Convert Fahrenheit to Celsius
   *
   * @param fahrenheit The temperature in Fahrenheit
   * @returns The temperature in Celsius
   */
  fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
  }
  /**
   * Get the temperature units configuration
   *
   * @returns The temperature unit type configuration
   */
  getTemperatureUnits() {
    return {
      units: {
        celsius: { unit: "celsius", symbol: "\xB0C" },
        fahrenheit: { unit: "fahrenheit", symbol: "\xB0F" }
      },
      value: (raw, unit) => unit.unit === "fahrenheit" ? this.fahrenheitToCelsius(Number(raw)) : Number(raw),
      format: (value, unit) => `${Number(value).toFixed(1)} ${unit.symbol}`,
      toBackend: (value, unit) => unit.unit === "fahrenheit" ? this.celsiusToFahrenheit(Number(value)) : value,
      fromBackend: (raw, unit, roundingDigits) => unit.unit === "fahrenheit" && roundingDigits !== void 0 ? Math.round((raw * 1.8 + 32) * Math.pow(10, roundingDigits)) / Math.pow(10, roundingDigits) : raw
    };
  }
  /**
   * Get the date units configuration
   *
   * @returns The date unit type configuration
   */
  getDateUnits() {
    return {
      units: {
        yyyymmdd1: { unit: "YYYY/MM/DD", long: "dddd, D MMMM YYYY" },
        yyyymmdd2: { unit: "YYYY.MM.DD", long: "dddd, D MMMM YYYY" },
        yyyymmdd3: { unit: "YYYY-MM-DD", long: "dddd, D MMMM YYYY" },
        ddmmyyyy1: { unit: "DD/MM/YYYY", long: "dddd, D MMMM YYYY" },
        ddmmyyyy2: { unit: "DD.MM.YYYY", long: "dddd, D MMMM YYYY" },
        ddmmyyyy3: { unit: "DD-MM-YYYY", long: "dddd, D MMMM YYYY" },
        dmyyyy1: { unit: "D/M/YYYY", long: "dddd, D MMMM YYYY" },
        dmyyyy2: { unit: "D.M.YYYY", long: "dddd, D MMMM YYYY" },
        dmyyyy3: { unit: "D-M-YYYY", long: "dddd, D MMMM YYYY" },
        mmddyyyy1: { unit: "MM/DD/YYYY", long: "dddd, MMMM D, YYYY" },
        mdyyyy1: { unit: "M/D/YYYY", long: "dddd, MMMM D, YYYY" }
      },
      value: (raw) => {
        return new Date(raw).toISOString();
      },
      format: (value, unit, variant) => {
        const date = new Date(value);
        return this.dateTimeService.formatDate(date, variant === "long" ? unit.long ?? unit.unit : unit.unit);
      },
      toBackend: (value) => {
        return new Date(value).toISOString();
      }
    };
  }
  /**
   * Get the time units configuration
   *
   * @returns The time unit type configuration
   */
  getTimeUnits() {
    return {
      units: {
        HHmmss: { unit: "HH:mm:ss", short: "HH:mm" },
        Hmmss: { unit: "H:mm:ss", short: "H:mm" },
        hmmssa: { unit: "h:mm:ss A", short: "h:mm A" }
      },
      value: (raw) => {
        return new Date(raw).toISOString();
      },
      format: (value, unit, variant) => {
        const date = new Date(value);
        return this.dateTimeService.formatTime(date, variant === "short" ? unit.short ?? unit.unit : unit.unit);
      },
      toBackend: (value) => {
        return new Date(value).toISOString();
      }
    };
  }
  static \u0275fac = function MeasurementUnitRegistryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MeasurementUnitRegistryService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MeasurementUnitRegistryService, factory: _MeasurementUnitRegistryService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeasurementUnitRegistryService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/services/measurement-units/measurement-converter.service.ts
var MeasurementConverterService = class _MeasurementConverterService {
  unitRegistry = inject(MeasurementUnitRegistryService);
  /**
   * Format a raw value according to the specified measurement type and unit configuration
   *
   * @param raw The raw value to format
   * @param type The measurement unit type (e.g., distance, temperature)
   * @param configValue The specific unit configuration to use (e.g., 'miles', 'celsius')
   * @param variant Optional formatting variant (e.g., 'short', 'long')
   * @returns A formatted measurement object containing the converted value and display format
   */
  format(raw, type, configValue, variant) {
    const list = this.unitRegistry.getUnitList(type);
    if (isNullOrUndefined(raw) && raw !== 0 || isNullOrUndefined(type) || isDefined(list.error) || isNullOrUndefined(list.units)) {
      return {
        value: null,
        format: "",
        unit: "",
        multiplier: 1,
        error: isDefined(list.error) ? list.error : "Invalid input"
      };
    }
    const unit = list.units[configValue];
    if (isNullOrUndefined(unit)) {
      return {
        value: null,
        format: "",
        unit: "",
        multiplier: 1,
        error: `Unit configuration '${configValue}' not found for type ${type}`
      };
    }
    try {
      let value;
      if (list.value) {
        value = list.value(raw, unit);
      } else {
        const numericValue = isString(raw) ? parseFloat(raw) : raw;
        if (isNaN(numericValue)) {
          throw new Error("Cannot convert value to number");
        }
        value = numericValue / (unit.multiplier ?? 1);
      }
      const format3 = list.format ? list.format(value, unit, variant) : `${value.toFixed(2)} ${unit.symbol}`;
      return {
        value,
        format: format3,
        unit: unit.symbol ?? "",
        multiplier: unit.multiplier ?? 1
      };
    } catch (error) {
      return {
        value: null,
        format: "",
        unit: unit.symbol ?? "",
        multiplier: unit.multiplier ?? 1,
        error: `Conversion error: ${error.message}`
      };
    }
  }
  /**
   * Convert a value from backend format to frontend format
   *
   * @param type The measurement unit type (e.g., distance, temperature)
   * @param value The raw value to convert
   * @param configValue The specific unit configuration to use (e.g., 'miles', 'celsius')
   * @param roundingDigits Optional number of digits to round the result
   * @returns The converted value in frontend format
   */
  fromBackend(type, value, configValue, roundingDigits) {
    const list = this.unitRegistry.getUnitList(type);
    if (!list.units) {
      return value;
    }
    const unit = list.units[configValue];
    if (isNullOrUndefined(unit)) {
      return value;
    }
    if (list.fromBackend) {
      return list.fromBackend(value, unit, roundingDigits);
    }
    const val = value / (unit.multiplier ?? 1);
    return this.roundValue(val, roundingDigits);
  }
  /**
   * Convert a value from frontend format to backend format
   *
   * @param type The measurement unit type (e.g., distance, temperature)
   * @param value The raw value to convert
   * @param configValue The specific unit configuration to use (e.g., 'miles', 'celsius')
   * @param roundingDigits Optional number of digits to round the result
   * @returns The converted value in backend format
   */
  toBackend(type, value, configValue, roundingDigits) {
    const list = this.unitRegistry.getUnitList(type);
    if (!list.units) {
      return value;
    }
    const unit = list.units[configValue];
    if (isNullOrUndefined(unit)) {
      return value;
    }
    if (list.toBackend) {
      return list.toBackend(value, unit);
    }
    if (typeof value !== "number") {
      return value;
    }
    const val = value * (unit.multiplier ?? 1);
    return this.roundValue(val, roundingDigits);
  }
  /**
   * Round a value to a specified number of decimal places
   *
   * @param value The value to round
   * @param digits Optional number of decimal places to round to
   * @returns The rounded value
   */
  roundValue(value, digits) {
    if (digits === 0) {
      return Math.round(value);
    } else if (isDefined(digits) && digits > 0) {
      const factor = Math.pow(10, digits);
      return Math.round(value * factor) / factor;
    }
    return value;
  }
  static \u0275fac = function MeasurementConverterService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MeasurementConverterService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MeasurementConverterService, factory: _MeasurementConverterService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeasurementConverterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/services/measurement-units/measurement-units.service.ts
var MeasurementUnitsService = class _MeasurementUnitsService {
  unitRegistry = new MeasurementUnitRegistryService();
  converterService = new MeasurementConverterService();
  _defaultConfig = Object.freeze({
    altitudeUnit: "feet",
    areaUnit: "squareKilometres",
    dateUnit: "dmyyyy2",
    distanceUnit: "miles",
    speedUnit: "milesPerHour",
    temperatureUnit: "celsius",
    timeUnit: "HHmmss",
    volumeUnit: "gallons",
    weightUnit: "kilograms"
  });
  destroyRef = inject(DestroyRef);
  configSubject = new BehaviorSubject(__spreadValues({}, this._defaultConfig));
  config$ = this.configSubject.asObservable().pipe(takeUntilDestroyed(this.destroyRef));
  get config() {
    return this.configSubject.value;
  }
  set config(value) {
    this.configSubject.next(__spreadValues(__spreadValues({}, this._defaultConfig), value));
  }
  constructor() {
    this.setupCacheInvalidation();
  }
  setupCacheInvalidation() {
    this.config$.pipe(pairwise(), filter(([prev, curr]) => !isDeepEqual(prev, curr))).subscribe(() => {
      this.unitRegistry.clearCache();
    });
  }
  /**
   * Format a raw value into a formatted measurement.
   * This method takes a raw value, a measurement type, and an optional variant.
   * It uses the converter service to format the value based on the unit configuration.
   *
   * @param {number | string} raw - The raw value to format.
   * @param {MeasurementUnitType} type - The type of measurement unit.
   * @param {string} [variant] - Optional variant for formatting.
   * @return {FormattedMeasurement} - The formatted measurement object.
   */
  format(raw, type, variant) {
    const unitConfig = this.getUnitConfig(type);
    return this.converterService.format(raw, type, unitConfig, variant);
  }
  /**
   * Get the unit for a specific measurement type.
   * This method retrieves the unit based on the provided type.
   *
   * @param {MeasurementUnitType} type - The type of measurement unit to retrieve.
   * @return {string | undefined} - The unit for the specified type.
   */
  unit(type) {
    const list = this.unitRegistry.getUnitList(type);
    const configValue = this.getUnitConfig(type);
    return isDefined(list.error) || isNullOrUndefined(list.units) ? void 0 : list.units[configValue].unit;
  }
  /**
   * Get the symbol for a specific measurement type.
   * This method retrieves the symbol based on the provided type.
   * If no type is provided, it returns undefined.
   *
   * @param {MeasurementUnitType} type - The type of measurement unit to retrieve.
   * @return {string | undefined} - The symbol for the specified type.
   */
  unitSymbol(type) {
    const list = this.unitRegistry.getUnitList(type);
    const configValue = this.getUnitConfig(type);
    return isDefined(list.error) || isNullOrUndefined(list.units) ? void 0 : list.units[configValue].symbol;
  }
  /**
   * Get the unit configuration for a specific measurement type.
   * This method retrieves the unit configuration based on the provided type.
   * If no type is provided, it returns an empty string.
   *
   * @param {MeasurementUnitType} [type] - The type of measurement unit to retrieve.
   * @returns {string} - The unit configuration for the specified type.
   */
  getUnitConfig(type) {
    if (isNullOrUndefined(type))
      return "";
    const key = `${type}Unit`;
    return this.config[key] ?? "";
  }
  /**
   * Convert a value from the backend format to a specific measurement type.
   * This method is useful for displaying data in the user interface.
   * It takes into account the unit configuration for the specified type.
   *
   * @param {MeasurementUnitType} type - The type of measurement unit to convert.
   * @param {number} value - The value to convert.
   * @param {number} [roundingDigits] - Optional number of digits to round the result.
   * @returns {number} - The converted value in the specified measurement unit.
   */
  fromBackend(type, value, roundingDigits) {
    const configValue = this.getUnitConfig(type);
    return this.converterService.fromBackend(type, value, configValue, roundingDigits);
  }
  /**
   * Convert a value to the backend format for a specific measurement type.
   * This method is useful for preparing data to be sent to a backend service.
   * It takes into account the unit configuration for the specified type.
   *
   * @param {MeasurementUnitType} type - The type of measurement unit to convert.
   * @param {number | string} value - The value to convert.
   * @param {number} [roundingDigits] - Optional number of digits to round the result.
   * @returns {string | number} - The converted value in the backend format.
   */
  toBackend(type, value, roundingDigits) {
    const configValue = this.getUnitConfig(type);
    return this.converterService.toBackend(type, value, configValue, roundingDigits);
  }
  /**
   * Set the unit preference for a specific measurement type.
   * This method updates the configuration with the specified unit value for the given type.
   *
   * @param {MeasurementUnitType} type - The type of measurement unit to set.
   * @param {string} value - The value of the unit to set.
   * @returns {void}
   */
  setUnitPreference(type, value) {
    const key = `${type}Unit`;
    this.config = __spreadProps(__spreadValues({}, this.config), {
      [key]: value
    });
  }
  /**
   * Reset the configuration to its default values.
   * This method is useful for restoring the initial state of the configuration.
   * It can be called when the user wants to reset their preferences or when
   * the application needs to revert to the default settings.
   *
   * @returns {void}
   */
  resetToDefaults() {
    this.config = __spreadValues({}, this._defaultConfig);
  }
  /**
   * Check if a given value is a valid unit for a specific measurement type.
   * This method verifies if the provided value exists in the unit list for the specified type.
   *
   * @param {MeasurementUnitType} type - The type of measurement unit to check.
   * @param {string} value - The value to check against the unit list.
   * @returns {boolean} - True if the value is a valid unit, false otherwise.
   */
  isValidUnitValue(type, value) {
    const unitList = this.unitRegistry.getUnitList(type);
    return !!unitList.units && isDefined(unitList.units[value]);
  }
  /**
   * Update the configuration with a partial set of preferences.
   * This method allows updating only specific properties of the configuration
   * without affecting the others.
   *
   * @param {Partial<UnitPreferences>} partialConfig - The partial configuration to update.
   * @returns {void}
   */
  updatePartialConfig(partialConfig) {
    this.config = __spreadValues(__spreadValues({}, this.config), partialConfig);
  }
  static \u0275fac = function MeasurementUnitsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MeasurementUnitsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MeasurementUnitsService, factory: _MeasurementUnitsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeasurementUnitsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/shared/services/request-cache.service.ts
var RequestCacheService = class _RequestCacheService {
  cache = /* @__PURE__ */ new Map();
  ongoingRequests = /* @__PURE__ */ new Map();
  locks = /* @__PURE__ */ new Set();
  /**
   * Clear the entire cache or a specific key
   *
   * @param key Optional key to clear. If not provided, clears the entire cache.
   */
  clearCache(key) {
    if (isDefined(key)) {
      this.cache.delete(key);
    } else {
      this.cache.clear();
    }
  }
  /**
   * Atomic check and set operation for the locks Set
   *
   * @param key The key to check and lock
   * @returns True if the key was not locked and is now locked, false if it was already locked
   */
  checkAndLock(key) {
    if (this.locks.has(key)) {
      return false;
    }
    this.locks.add(key);
    return true;
  }
  /**
   * Get or fetch data with caching and request deduplication
   *
   * @param key The cache key
   * @param fetchFn Function that returns a Promise or Observable to fetch the data
   * @param ttl Optional time-to-live in milliseconds for the cache entry
   * @returns An Observable that emits the cached or fetched data
   */
  getOrFetch(key, fetchFn, ttl) {
    if (this.cache.has(key)) {
      return of(this.cache.get(key));
    }
    if (this.ongoingRequests.has(key)) {
      return this.ongoingRequests.get(key);
    }
    const gotLock = this.checkAndLock(key);
    if (!gotLock) {
      return new Observable((subscriber) => {
        setTimeout(() => {
          this.getOrFetch(key, fetchFn, ttl).subscribe({
            next: (value) => subscriber.next(value),
            error: (err) => subscriber.error(err),
            complete: () => subscriber.complete()
          });
        }, 10);
      });
    }
    try {
      if (this.cache.has(key)) {
        this.locks.delete(key);
        return of(this.cache.get(key));
      }
      if (this.ongoingRequests.has(key)) {
        this.locks.delete(key);
        return this.ongoingRequests.get(key);
      }
      const source = fetchFn();
      const request$ = (source instanceof Observable ? source : from(source)).pipe(tap({
        next: (result) => {
          this.cache.set(key, result);
          if ((ttl ?? 0) > 0) {
            setTimeout(() => {
              this.cache.delete(key);
            }, ttl);
          }
        },
        finalize: () => {
          this.ongoingRequests.delete(key);
          this.locks.delete(key);
        }
      }), share());
      this.ongoingRequests.set(key, request$);
      return request$;
    } catch (error) {
      this.locks.delete(key);
      throw error;
    }
  }
  /**
   * Get or fetch data with caching and request deduplication (Promise version)
   *
   * @param key The cache key
   * @param fetchFn Function that returns a Promise to fetch the data
   * @param ttl Optional time-to-live in milliseconds for the cache entry
   * @returns A Promise that resolves to the cached or fetched data
   */
  async getOrFetchAsync(key, fetchFn, ttl) {
    return firstValueFrom(this.getOrFetch(key, fetchFn, ttl));
  }
  /**
   * Clear cache entries that match a pattern
   * @param pattern String pattern to match against cache keys
   */
  clearCacheByPattern(pattern) {
    const keysToDelete = [];
    for (const key of this.cache.keys()) {
      if (key.includes(pattern)) {
        keysToDelete.push(key);
      }
    }
    for (const key of keysToDelete) {
      this.cache.delete(key);
      this.ongoingRequests.delete(key);
    }
  }
  /**
   * Clear all cache entries for a specific client
   * @param clientId The client ID to clear caches for
   */
  clearClientCache(clientId) {
    this.clearCacheByPattern(`-${clientId}-`);
  }
  static \u0275fac = function RequestCacheService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RequestCacheService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RequestCacheService, factory: _RequestCacheService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestCacheService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/clients/services/client-data.service.ts
var ClientDataService = class _ClientDataService {
  selectedClient = signal(null, ...ngDevMode ? [{ debugName: "selectedClient" }] : []);
  features = signal(__spreadValues(__spreadValues({}, AppFeatureDefaults), BackendFeatureDefaults), ...ngDevMode ? [{ debugName: "features" }] : []);
  localStorageService = inject(LocalStorageService);
  cachedFeatures = null;
  measurementUnitsService = inject(MeasurementUnitsService);
  router = inject(Router);
  // Tracks whether initial client loading attempt (restore/fetch) is complete
  initializationCompleted = signal(false, ...ngDevMode ? [{ debugName: "initializationCompleted" }] : []);
  userSessionService = inject(UserSessionService);
  accountsService = inject(AccountsService);
  requestCacheService = inject(RequestCacheService);
  // Computed signal that extracts just the client ID for effect tracking
  selectedClientId = computed(() => this.selectedClient()?.id ?? null, ...ngDevMode ? [{ debugName: "selectedClientId" }] : []);
  constructor() {
    combineLatest([
      toObservable(this.localStorageService.getCurrentUserIdSignal()),
      toObservable(this.userSessionService.currentUserSession)
    ]).pipe(
      // Only proceed when we have a user ID
      filter(([userId, userSession]) => userId !== null && isDefined(userSession)),
      distinctUntilChanged(([prevUserId, prevSession], [currUserId, currSession]) => prevUserId === currUserId && prevSession?.defaultClient?.id === currSession?.defaultClient?.id),
      switchMap(([_userId, session]) => {
        const persistedClient = this.localStorageService.getItem(LOCAL_STORAGE_KEY_SELECTED_CLIENT, true);
        if (isDefined(persistedClient?.id)) {
          return this.accountsService.getClient(persistedClient.id).pipe(catchError((error) => {
            console.warn("Failed to load persisted client, falling back to default", error);
            return this.loadDefaultClient(session);
          }));
        }
        return this.loadDefaultClient(session);
      })
    ).subscribe({
      next: (client) => {
        if (isDefined(client)) {
          this.setSelectedClient(client);
        } else {
          this.clearSelectedClient();
        }
        this.markInitializationComplete();
      },
      error: () => {
        this.clearSelectedClient();
        this.markInitializationComplete();
      }
    });
    effect(() => {
      this.selectedClientId();
      untracked(() => {
        const client = this.selectedClient();
        if (isDefined(client) && !this.isCompleteClientData(client) && isDefined(client.id)) {
          this.ensureCompleteClientData(client.id).catch((error) => {
            console.error("Failed to ensure complete client data:", error);
          });
        } else {
          this.getFeaturesForClient();
        }
      });
    });
  }
  /**
   * Checks if a client object has all required fields for feature evaluation
   */
  isCompleteClientData(client) {
    return isDefined(client.id) && isDefined(client.name) && isDefined(client.meta) && isDefined(client.flags);
  }
  /**
   * Fetches complete client data from API with caching to prevent duplicate requests.
   * Uses a short TTL to ensure fresh data while avoiding redundant API calls.
   * @param clientId The client ID to fetch
   * @returns Observable of complete client data
   */
  fetchClientWithCache(clientId) {
    const cacheKey = `client-${clientId}`;
    return this.requestCacheService.getOrFetch(cacheKey, () => this.accountsService.getClient(clientId), 2e3);
  }
  /**
   * Ensures the client has complete data by fetching from API if needed.
   * Uses caching to prevent duplicate requests.
   */
  async ensureCompleteClientData(clientId) {
    try {
      const completeClient = await firstValueFrom(this.fetchClientWithCache(clientId));
      const currentClient = this.selectedClient();
      if (currentClient?.id === clientId && !this.isCompleteClientData(currentClient)) {
        this.setSelectedClient(completeClient);
      }
    } catch (error) {
      console.error("Failed to fetch complete client data:", error);
      this.getFeaturesForClient();
    }
  }
  /**
   * Load the default client from the user session
   */
  loadDefaultClient(session) {
    const clientId = session?.defaultClient?.id;
    if (!isDefined(clientId)) {
      return of(null);
    }
    return this.accountsService.getClient(clientId).pipe(catchError(() => {
      console.warn("Failed to load default client");
      return of(null);
    }));
  }
  /**
   * Mark that initial client initialization has completed (success or not).
   * Guards waiting on readiness can then proceed.
   */
  markInitializationComplete() {
    if (!this.initializationCompleted()) {
      this.initializationCompleted.set(true);
    }
  }
  /**
   * Returns true when feature evaluation can happen (client selected or init finished)
   */
  isFeatureEvaluationReady() {
    return !!this.selectedClient() || this.initializationCompleted();
  }
  /**
   * Wait for readiness (with timeout) before resolving.
   */
  waitForFeatureReadiness(timeoutMs = 4e3) {
    if (this.isFeatureEvaluationReady())
      return Promise.resolve(true);
    return new Promise((resolve) => {
      let completed = false;
      const ref = effect(() => {
        if (this.isFeatureEvaluationReady() && !completed) {
          completed = true;
          resolve(true);
          ref.destroy();
        }
      }, ...ngDevMode ? [{ debugName: "ref" }] : []);
      setTimeout(() => {
        if (!completed) {
          completed = true;
          resolve(false);
          ref.destroy();
        }
      }, timeoutMs);
    });
  }
  /**
   * Sets the selected client by ID, ensuring complete data is fetched.
   * This is the preferred method when you only have a client ID.
   * @param clientId The client ID to fetch and set
   */
  async setSelectedClientById(clientId) {
    try {
      const completeClient = await firstValueFrom(this.fetchClientWithCache(clientId));
      this.setSelectedClient(completeClient);
    } catch (error) {
      console.error("Failed to fetch and set client:", error);
      throw error;
    }
  }
  /**
   * Sets the selected client and stores it in localStorage.
   * This persists across page refreshes and logout/login cycles.
   * @param client The client to be selected.
   */
  setSelectedClient(client) {
    const selectedClientData = {
      customFields: client?.customFields,
      id: client.id,
      flags: client?.flags,
      name: client.name,
      measurementUnits: client?.measurementUnits,
      owner: client?.owner,
      theme: client?.theme,
      mapSet: client?.mapSet,
      group: client?.group,
      meta: client?.meta,
      availableDeviceTypes: client?.availableDeviceTypes
    };
    this.selectedClient.set(selectedClientData);
    this.localStorageService.setItem(LOCAL_STORAGE_KEY_SELECTED_CLIENT, selectedClientData, void 0, true);
    this.cachedFeatures = null;
    this.updateMeasurementUnits(client);
  }
  /**
   * Retrieves the selected client.
   * @returns The selected client.
   */
  getSelectedClient() {
    return this.selectedClient();
  }
  /**
   * Retrieves the selected client as a signal.
   * @returns The selected client signal.
   */
  getSelectedClientSignal() {
    return this.selectedClient;
  }
  /**
   * Clears the selected client and removes it from localStorage.
   */
  clearSelectedClient() {
    const clientId = this.selectedClient()?.id;
    this.selectedClient.set(null);
    this.updateMeasurementUnits(null);
    this.localStorageService.removeItem(LOCAL_STORAGE_KEY_SELECTED_CLIENT, true);
    if (isDefined(clientId)) {
      this.requestCacheService.clearCache(`client-${clientId}`);
    }
  }
  /**
   * Clears only the selected client signal without affecting localStorage.
   * Useful for temporary client deselection (e.g., during logout).
   */
  clearSelectedClientSignal() {
    this.selectedClient.set(null);
  }
  /**
   * Retrieves feature flags for the selected client, merging default values
   * with any client-specific overrides.
   * @returns A merged object containing both app and backend feature flags
   */
  getFeaturesForClient() {
    const client = this.selectedClient();
    const clientId = client?.id ?? null;
    const flagsSignature = this.getFlagsSignature(client?.flags);
    const defaultFeatures = __spreadValues(__spreadValues({}, AppFeatureDefaults), BackendFeatureDefaults);
    let result;
    if (this.cachedFeatures?.clientId === clientId && this.cachedFeatures?.flagsSignature === flagsSignature) {
      result = this.cachedFeatures.features;
    } else if (isNullOrUndefined(client)) {
      result = (0, import_lodash.cloneDeep)(defaultFeatures);
      this.cachedFeatures = {
        clientId,
        features: result,
        flagsSignature: null
      };
    } else {
      result = (0, import_lodash.cloneDeep)(defaultFeatures);
      const flags = client?.meta?.mergedFlags ?? {};
      const appFlags = flags[APP_FEATURE_FLAGS] ?? {};
      for (const [id, value] of Object.entries(appFlags)) {
        this.setFeatureFlag(result, id, value);
      }
      const backendFlags = flags[BACKEND_FEATURE_FLAGS] ?? {};
      for (const [id, value] of Object.entries(backendFlags)) {
        this.setFeatureFlag(result, id, value);
      }
      this.cachedFeatures = { clientId, features: result, flagsSignature };
    }
    this.features.set(result);
    this.enforceActiveRouteAccess(result);
    return result;
  }
  // Helper to create a stable signature for caching
  getFlagsSignature(flags) {
    if (isNullOrUndefined(flags))
      return null;
    try {
      return JSON.stringify(flags);
    } catch {
      return null;
    }
  }
  /**
   * Helper method to safely set a feature flag value
   * @param target Object to update
   * @param path Path to the property (with hyphens)
   * @param value Value to set
   */
  setFeatureFlag(target, path, value) {
    try {
      const normalizedPath = path.replaceAll("-", ".");
      (0, import_lodash.set)(target, normalizedPath, value);
    } catch (err) {
      console.warn(`Error setting feature flag at path ${path}:`, err);
    }
  }
  // Enforce that the currently active route is accessible with the latest features
  enforceActiveRouteAccess(features) {
    try {
      const data = this.findFeatureFlagInSnapshot(this.router.routerState.snapshot.root);
      if (!data)
        return;
      const allowed = this.isAllowedByFlags(features, data.flag, data.requireAll);
      if (!allowed) {
        void this.router.navigateByUrl("/", { replaceUrl: true });
      }
    } catch {
    }
  }
  findFeatureFlagInSnapshot(root) {
    let deepest = root;
    while (deepest.firstChild)
      deepest = deepest.firstChild;
    let current = deepest;
    while (current) {
      const data = current.data ?? {};
      const flag = data["featureFlag"];
      if (flag !== void 0) {
        const requireAll = data["requireAll"] ?? true;
        return { flag, requireAll };
      }
      current = current.parent ?? null;
    }
    return null;
  }
  isAllowedByFlags(features, flag, requireAll) {
    const evaluate = (path) => Boolean((0, import_lodash.get)(features, path));
    return Array.isArray(flag) ? requireAll ? flag.every(evaluate) : flag.some(evaluate) : evaluate(flag);
  }
  /**
   * Retrieves the features signal.
   */
  getFeaturesSignal() {
    return this.features;
  }
  /**
   * Updates measurement units based on client preferences
   * @param client - The client with measurement preferences
   */
  mapClientUnitsToPreferences(clientUnits) {
    const unitPreferences = {};
    const unitMappings = [
      {
        type: MeasurementUnitType.DISTANCE,
        value: clientUnits.distanceUnit,
        key: "distanceUnit"
      },
      {
        type: MeasurementUnitType.ALTITUDE,
        value: clientUnits.altitudeUnit,
        key: "altitudeUnit"
      },
      {
        type: MeasurementUnitType.AREA,
        value: clientUnits.areaUnit,
        key: "areaUnit"
      },
      {
        type: MeasurementUnitType.SPEED,
        value: clientUnits.speedUnit,
        key: "speedUnit"
      },
      {
        type: MeasurementUnitType.TEMPERATURE,
        value: clientUnits.temperatureUnit,
        key: "temperatureUnit"
      },
      {
        type: MeasurementUnitType.WEIGHT,
        value: clientUnits.weightUnit,
        key: "weightUnit"
      },
      {
        type: MeasurementUnitType.VOLUME,
        value: clientUnits.volumeUnit,
        key: "volumeUnit"
      },
      {
        type: MeasurementUnitType.DATE,
        value: clientUnits.dateUnit,
        key: "dateUnit"
      },
      {
        type: MeasurementUnitType.TIME,
        value: clientUnits.timeUnit,
        key: "timeUnit"
      }
    ];
    for (const { type, value, key } of unitMappings) {
      if (isDefined(value) && this.isValidUnitValue(type, value)) {
        unitPreferences[key] = value;
      }
    }
    return unitPreferences;
  }
  /**
   * Updates measurement units in the service based on client data
   * @param client - The client response object
   */
  // This method is called when the selected client changes
  // It updates the measurement units in the service based on the client's preferences
  // If the client has no measurement units, it resets to defaults
  updateMeasurementUnits(client) {
    if (isEmpty(client?.measurementUnits)) {
      this.measurementUnitsService.resetToDefaults();
      return;
    }
    const clientUnits = client?.measurementUnits ?? {};
    const unitPreferences = this.mapClientUnitsToPreferences(clientUnits);
    this.measurementUnitsService.updatePartialConfig(unitPreferences);
  }
  isValidUnitValue(type, value) {
    return this.measurementUnitsService.isValidUnitValue(type, value);
  }
  static \u0275fac = function ClientDataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientDataService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ClientDataService, factory: _ClientDataService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientDataService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/primeng/fesm2022/primeng-icons-angledown.mjs
var _c0 = ["data-p-icon", "angle-down"];
var AngleDownIcon = class _AngleDownIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AngleDownIcon_BaseFactory;
    return function AngleDownIcon_Factory(__ngFactoryType__) {
      return (\u0275AngleDownIcon_BaseFactory || (\u0275AngleDownIcon_BaseFactory = \u0275\u0275getInheritedFactory(_AngleDownIcon)))(__ngFactoryType__ || _AngleDownIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AngleDownIcon,
    selectors: [["", "data-p-icon", "angle-down"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c0,
    decls: 1,
    vars: 0,
    consts: [["d", "M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z", "fill", "currentColor"]],
    template: function AngleDownIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "path", 0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngleDownIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="angle-down"]',
      standalone: true,
      template: `
        <svg:path
            d="M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z"
            fill="currentColor"
        />
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-angleright.mjs
var _c02 = ["data-p-icon", "angle-right"];
var AngleRightIcon = class _AngleRightIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AngleRightIcon_BaseFactory;
    return function AngleRightIcon_Factory(__ngFactoryType__) {
      return (\u0275AngleRightIcon_BaseFactory || (\u0275AngleRightIcon_BaseFactory = \u0275\u0275getInheritedFactory(_AngleRightIcon)))(__ngFactoryType__ || _AngleRightIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AngleRightIcon,
    selectors: [["", "data-p-icon", "angle-right"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c02,
    decls: 1,
    vars: 0,
    consts: [["d", "M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z", "fill", "currentColor"]],
    template: function AngleRightIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "path", 0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngleRightIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="angle-right"]',
      standalone: true,
      template: `
        <svg:path
            d="M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z"
            fill="currentColor"
        />
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-angleup.mjs
var _c03 = ["data-p-icon", "angle-up"];
var AngleUpIcon = class _AngleUpIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AngleUpIcon_BaseFactory;
    return function AngleUpIcon_Factory(__ngFactoryType__) {
      return (\u0275AngleUpIcon_BaseFactory || (\u0275AngleUpIcon_BaseFactory = \u0275\u0275getInheritedFactory(_AngleUpIcon)))(__ngFactoryType__ || _AngleUpIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AngleUpIcon,
    selectors: [["", "data-p-icon", "angle-up"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c03,
    decls: 1,
    vars: 0,
    consts: [["d", "M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z", "fill", "currentColor"]],
    template: function AngleUpIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "path", 0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngleUpIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="angle-up"]',
      standalone: true,
      template: `
        <svg:path
            d="M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z"
            fill="currentColor"
        />
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-minus.mjs
var _c04 = ["data-p-icon", "minus"];
var MinusIcon = class _MinusIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MinusIcon_BaseFactory;
    return function MinusIcon_Factory(__ngFactoryType__) {
      return (\u0275MinusIcon_BaseFactory || (\u0275MinusIcon_BaseFactory = \u0275\u0275getInheritedFactory(_MinusIcon)))(__ngFactoryType__ || _MinusIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MinusIcon,
    selectors: [["", "data-p-icon", "minus"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c04,
    decls: 1,
    vars: 0,
    consts: [["d", "M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z", "fill", "currentColor"]],
    template: function MinusIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "path", 0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinusIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="minus"]',
      standalone: true,
      template: `
        <svg:path
            d="M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z"
            fill="currentColor"
        />
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-plus.mjs
var _c05 = ["data-p-icon", "plus"];
var PlusIcon = class _PlusIcon extends BaseIcon {
  pathId;
  onInit() {
    this.pathId = "url(#" + s2() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PlusIcon_BaseFactory;
    return function PlusIcon_Factory(__ngFactoryType__) {
      return (\u0275PlusIcon_BaseFactory || (\u0275PlusIcon_BaseFactory = \u0275\u0275getInheritedFactory(_PlusIcon)))(__ngFactoryType__ || _PlusIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _PlusIcon,
    selectors: [["", "data-p-icon", "plus"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c05,
    decls: 5,
    vars: 2,
    consts: [["d", "M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function PlusIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElementStart(0, "g");
        \u0275\u0275domElement(1, "path", 0);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "defs")(3, "clipPath", 1);
        \u0275\u0275domElement(4, "rect", 2);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275domProperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlusIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="plus"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-windowmaximize.mjs
var _c06 = ["data-p-icon", "window-maximize"];
var WindowMaximizeIcon = class _WindowMaximizeIcon extends BaseIcon {
  pathId;
  onInit() {
    this.pathId = "url(#" + s2() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275WindowMaximizeIcon_BaseFactory;
    return function WindowMaximizeIcon_Factory(__ngFactoryType__) {
      return (\u0275WindowMaximizeIcon_BaseFactory || (\u0275WindowMaximizeIcon_BaseFactory = \u0275\u0275getInheritedFactory(_WindowMaximizeIcon)))(__ngFactoryType__ || _WindowMaximizeIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _WindowMaximizeIcon,
    selectors: [["", "data-p-icon", "window-maximize"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c06,
    decls: 5,
    vars: 2,
    consts: [["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function WindowMaximizeIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElementStart(0, "g");
        \u0275\u0275domElement(1, "path", 0);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "defs")(3, "clipPath", 1);
        \u0275\u0275domElement(4, "rect", 2);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275domProperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowMaximizeIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="window-maximize"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-windowminimize.mjs
var _c07 = ["data-p-icon", "window-minimize"];
var WindowMinimizeIcon = class _WindowMinimizeIcon extends BaseIcon {
  pathId;
  onInit() {
    this.pathId = "url(#" + s2() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275WindowMinimizeIcon_BaseFactory;
    return function WindowMinimizeIcon_Factory(__ngFactoryType__) {
      return (\u0275WindowMinimizeIcon_BaseFactory || (\u0275WindowMinimizeIcon_BaseFactory = \u0275\u0275getInheritedFactory(_WindowMinimizeIcon)))(__ngFactoryType__ || _WindowMinimizeIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _WindowMinimizeIcon,
    selectors: [["", "data-p-icon", "window-minimize"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c07,
    decls: 5,
    vars: 2,
    consts: [["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function WindowMinimizeIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElementStart(0, "g");
        \u0275\u0275domElement(1, "path", 0);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "defs")(3, "clipPath", 1);
        \u0275\u0275domElement(4, "rect", 2);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275domProperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowMinimizeIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="window-minimize"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-focustrap.mjs
var FocusTrap = class _FocusTrap extends BaseComponent {
  /**
   * When set as true, focus wouldn't be managed.
   * @group Props
   */
  pFocusTrapDisabled = false;
  platformId = inject(PLATFORM_ID);
  document = inject(DOCUMENT);
  firstHiddenFocusableElement;
  lastHiddenFocusableElement;
  onInit() {
    if (isPlatformBrowser(this.platformId) && !this.pFocusTrapDisabled) {
      !this.firstHiddenFocusableElement && !this.lastHiddenFocusableElement && this.createHiddenFocusableElements();
    }
  }
  onChanges(changes) {
    if (changes.pFocusTrapDisabled && isPlatformBrowser(this.platformId)) {
      if (changes.pFocusTrapDisabled.currentValue) {
        this.removeHiddenFocusableElements();
      } else {
        this.createHiddenFocusableElements();
      }
    }
  }
  removeHiddenFocusableElements() {
    if (this.firstHiddenFocusableElement && this.firstHiddenFocusableElement.parentNode) {
      this.firstHiddenFocusableElement.parentNode.removeChild(this.firstHiddenFocusableElement);
    }
    if (this.lastHiddenFocusableElement && this.lastHiddenFocusableElement.parentNode) {
      this.lastHiddenFocusableElement.parentNode.removeChild(this.lastHiddenFocusableElement);
    }
  }
  getComputedSelector(selector) {
    return `:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${selector ?? ""}`;
  }
  createHiddenFocusableElements() {
    const tabindex = "0";
    const createFocusableElement = (onFocus) => {
      return U("span", {
        class: "p-hidden-accessible p-hidden-focusable",
        tabindex,
        role: "presentation",
        "aria-hidden": true,
        "data-p-hidden-accessible": true,
        "data-p-hidden-focusable": true,
        onFocus: onFocus?.bind(this)
      });
    };
    this.firstHiddenFocusableElement = createFocusableElement(this.onFirstHiddenElementFocus);
    this.lastHiddenFocusableElement = createFocusableElement(this.onLastHiddenElementFocus);
    this.firstHiddenFocusableElement.setAttribute("data-pc-section", "firstfocusableelement");
    this.lastHiddenFocusableElement.setAttribute("data-pc-section", "lastfocusableelement");
    this.el.nativeElement.prepend(this.firstHiddenFocusableElement);
    this.el.nativeElement.append(this.lastHiddenFocusableElement);
  }
  onFirstHiddenElementFocus(event) {
    const {
      currentTarget,
      relatedTarget
    } = event;
    const focusableElement = relatedTarget === this.lastHiddenFocusableElement || !this.el.nativeElement?.contains(relatedTarget) ? vt(currentTarget.parentElement, ":not(.p-hidden-focusable)") : this.lastHiddenFocusableElement;
    bt(focusableElement);
  }
  onLastHiddenElementFocus(event) {
    const {
      currentTarget,
      relatedTarget
    } = event;
    const focusableElement = relatedTarget === this.firstHiddenFocusableElement || !this.el.nativeElement?.contains(relatedTarget) ? Lt(currentTarget.parentElement, ":not(.p-hidden-focusable)") : this.firstHiddenFocusableElement;
    bt(focusableElement);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FocusTrap_BaseFactory;
    return function FocusTrap_Factory(__ngFactoryType__) {
      return (\u0275FocusTrap_BaseFactory || (\u0275FocusTrap_BaseFactory = \u0275\u0275getInheritedFactory(_FocusTrap)))(__ngFactoryType__ || _FocusTrap);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FocusTrap,
    selectors: [["", "pFocusTrap", ""]],
    inputs: {
      pFocusTrapDisabled: [2, "pFocusTrapDisabled", "pFocusTrapDisabled", booleanAttribute]
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrap, [{
    type: Directive,
    args: [{
      selector: "[pFocusTrap]",
      standalone: true
    }]
  }], null, {
    pFocusTrapDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var FocusTrapModule = class _FocusTrapModule {
  static \u0275fac = function FocusTrapModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FocusTrapModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FocusTrapModule,
    imports: [FocusTrap],
    exports: [FocusTrap]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapModule, [{
    type: NgModule,
    args: [{
      imports: [FocusTrap],
      exports: [FocusTrap]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/dialog/index.mjs
var style2 = "\n    .p-dialog {\n        max-height: 90%;\n        transform: scale(1);\n        border-radius: dt('dialog.border.radius');\n        box-shadow: dt('dialog.shadow');\n        background: dt('dialog.background');\n        border: 1px solid dt('dialog.border.color');\n        color: dt('dialog.color');\n    }\n\n    .p-dialog-content {\n        overflow-y: auto;\n        padding: dt('dialog.content.padding');\n    }\n\n    .p-dialog-header {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        flex-shrink: 0;\n        padding: dt('dialog.header.padding');\n    }\n\n    .p-dialog-title {\n        font-weight: dt('dialog.title.font.weight');\n        font-size: dt('dialog.title.font.size');\n    }\n\n    .p-dialog-footer {\n        flex-shrink: 0;\n        padding: dt('dialog.footer.padding');\n        display: flex;\n        justify-content: flex-end;\n        gap: dt('dialog.footer.gap');\n    }\n\n    .p-dialog-header-actions {\n        display: flex;\n        align-items: center;\n        gap: dt('dialog.header.gap');\n    }\n\n    .p-dialog-enter-active {\n        transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n    }\n\n    .p-dialog-leave-active {\n        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);\n    }\n\n    .p-dialog-enter-from,\n    .p-dialog-leave-to {\n        opacity: 0;\n        transform: scale(0.7);\n    }\n\n    .p-dialog-top .p-dialog,\n    .p-dialog-bottom .p-dialog,\n    .p-dialog-left .p-dialog,\n    .p-dialog-right .p-dialog,\n    .p-dialog-topleft .p-dialog,\n    .p-dialog-topright .p-dialog,\n    .p-dialog-bottomleft .p-dialog,\n    .p-dialog-bottomright .p-dialog {\n        margin: 0.75rem;\n        transform: translate3d(0px, 0px, 0px);\n    }\n\n    .p-dialog-top .p-dialog-enter-active,\n    .p-dialog-top .p-dialog-leave-active,\n    .p-dialog-bottom .p-dialog-enter-active,\n    .p-dialog-bottom .p-dialog-leave-active,\n    .p-dialog-left .p-dialog-enter-active,\n    .p-dialog-left .p-dialog-leave-active,\n    .p-dialog-right .p-dialog-enter-active,\n    .p-dialog-right .p-dialog-leave-active,\n    .p-dialog-topleft .p-dialog-enter-active,\n    .p-dialog-topleft .p-dialog-leave-active,\n    .p-dialog-topright .p-dialog-enter-active,\n    .p-dialog-topright .p-dialog-leave-active,\n    .p-dialog-bottomleft .p-dialog-enter-active,\n    .p-dialog-bottomleft .p-dialog-leave-active,\n    .p-dialog-bottomright .p-dialog-enter-active,\n    .p-dialog-bottomright .p-dialog-leave-active {\n        transition: all 0.3s ease-out;\n    }\n\n    .p-dialog-top .p-dialog-enter-from,\n    .p-dialog-top .p-dialog-leave-to {\n        transform: translate3d(0px, -100%, 0px);\n    }\n\n    .p-dialog-bottom .p-dialog-enter-from,\n    .p-dialog-bottom .p-dialog-leave-to {\n        transform: translate3d(0px, 100%, 0px);\n    }\n\n    .p-dialog-left .p-dialog-enter-from,\n    .p-dialog-left .p-dialog-leave-to,\n    .p-dialog-topleft .p-dialog-enter-from,\n    .p-dialog-topleft .p-dialog-leave-to,\n    .p-dialog-bottomleft .p-dialog-enter-from,\n    .p-dialog-bottomleft .p-dialog-leave-to {\n        transform: translate3d(-100%, 0px, 0px);\n    }\n\n    .p-dialog-right .p-dialog-enter-from,\n    .p-dialog-right .p-dialog-leave-to,\n    .p-dialog-topright .p-dialog-enter-from,\n    .p-dialog-topright .p-dialog-leave-to,\n    .p-dialog-bottomright .p-dialog-enter-from,\n    .p-dialog-bottomright .p-dialog-leave-to {\n        transform: translate3d(100%, 0px, 0px);\n    }\n\n    .p-dialog-left:dir(rtl) .p-dialog-enter-from,\n    .p-dialog-left:dir(rtl) .p-dialog-leave-to,\n    .p-dialog-topleft:dir(rtl) .p-dialog-enter-from,\n    .p-dialog-topleft:dir(rtl) .p-dialog-leave-to,\n    .p-dialog-bottomleft:dir(rtl) .p-dialog-enter-from,\n    .p-dialog-bottomleft:dir(rtl) .p-dialog-leave-to {\n        transform: translate3d(100%, 0px, 0px);\n    }\n\n    .p-dialog-right:dir(rtl) .p-dialog-enter-from,\n    .p-dialog-right:dir(rtl) .p-dialog-leave-to,\n    .p-dialog-topright:dir(rtl) .p-dialog-enter-from,\n    .p-dialog-topright:dir(rtl) .p-dialog-leave-to,\n    .p-dialog-bottomright:dir(rtl) .p-dialog-enter-from,\n    .p-dialog-bottomright:dir(rtl) .p-dialog-leave-to {\n        transform: translate3d(-100%, 0px, 0px);\n    }\n\n    .p-dialog-maximized {\n        width: 100vw !important;\n        height: 100vh !important;\n        top: 0px !important;\n        left: 0px !important;\n        max-height: 100%;\n        height: 100%;\n        border-radius: 0;\n    }\n\n    .p-dialog-maximized .p-dialog-content {\n        flex-grow: 1;\n    }\n\n    .p-dialog .p-resizable-handle {\n        position: absolute;\n        font-size: 0.1px;\n        display: block;\n        cursor: se-resize;\n        width: 12px;\n        height: 12px;\n        right: 1px;\n        bottom: 1px;\n    }\n";

// node_modules/primeng/fesm2022/primeng-dialog.mjs
var _c08 = ["header"];
var _c1 = ["content"];
var _c2 = ["footer"];
var _c3 = ["closeicon"];
var _c4 = ["maximizeicon"];
var _c5 = ["minimizeicon"];
var _c6 = ["headless"];
var _c7 = ["titlebar"];
var _c8 = ["*", [["p-footer"]]];
var _c9 = ["*", "p-footer"];
var _c10 = (a0, a1) => ({
  transform: a0,
  transition: a1
});
var _c11 = (a0) => ({
  value: "visible",
  params: a0
});
function Dialog_div_0_div_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dialog_div_0_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dialog_div_0_div_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1._headlessTemplate || ctx_r1.headlessTemplate || ctx_r1.headlessT);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275listener("mousedown", function Dialog_div_0_div_1_ng_template_3_div_0_Template_div_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.initResize($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("resizeHandle"));
    \u0275\u0275styleProp("z-index", 90);
    \u0275\u0275property("pBind", ctx_r1.ptm("resizeHandle"));
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(ctx_r1.cx("title"));
    \u0275\u0275property("id", ctx_r1.ariaLabelledBy)("pBind", ctx_r1.ptm("title"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.header);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_p_button_5_ng_template_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 23);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275property("ngClass", ctx_r1.maximized ? ctx_r1.minimizeIcon : ctx_r1.maximizeIcon);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 26);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 27);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dialog_div_0_div_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_1__svg_svg_1_Template, 1, 0, "svg", 24)(2, Dialog_div_0_div_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_1__svg_svg_2_Template, 1, 0, "svg", 25);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.maximized && !ctx_r1._maximizeiconTemplate && !ctx_r1.maximizeIconTemplate && !ctx_r1.maximizeIconT);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.maximized && !ctx_r1._minimizeiconTemplate && !ctx_r1.minimizeIconTemplate && !ctx_r1.minimizeIconT);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_2_1_ng_template_0_Template(rf, ctx) {
}
function Dialog_div_0_div_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dialog_div_0_div_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dialog_div_0_div_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_2_1_Template, 1, 0, null, 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1._maximizeiconTemplate || ctx_r1.maximizeIconTemplate || ctx_r1.maximizeIconT);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_3_1_ng_template_0_Template(rf, ctx) {
}
function Dialog_div_0_div_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_3_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dialog_div_0_div_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dialog_div_0_div_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_3_1_Template, 1, 0, null, 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1._minimizeiconTemplate || ctx_r1.minimizeIconTemplate || ctx_r1.minimizeIconT);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_p_button_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dialog_div_0_div_1_ng_template_3_div_1_p_button_5_ng_template_1_span_0_Template, 1, 1, "span", 21)(1, Dialog_div_0_div_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_1_Template, 3, 2, "ng-container", 22)(2, Dialog_div_0_div_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_2_Template, 2, 1, "ng-container", 22)(3, Dialog_div_0_div_1_ng_template_3_div_1_p_button_5_ng_template_1_ng_container_3_Template, 2, 1, "ng-container", 22);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275property("ngIf", ctx_r1.maximizeIcon && !ctx_r1._maximizeiconTemplate && !ctx_r1._minimizeiconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.maximizeIcon && !(ctx_r1.maximizeButtonProps == null ? null : ctx_r1.maximizeButtonProps.icon));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.maximized);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.maximized);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_p_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 20);
    \u0275\u0275listener("onClick", function Dialog_div_0_div_1_ng_template_3_div_1_p_button_5_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.maximize());
    })("keydown.enter", function Dialog_div_0_div_1_ng_template_3_div_1_p_button_5_Template_p_button_keydown_enter_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.maximize());
    });
    \u0275\u0275template(1, Dialog_div_0_div_1_ng_template_3_div_1_p_button_5_ng_template_1_Template, 4, 4, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("pt", ctx_r1.ptm("pcMaximizeButton"))("styleClass", ctx_r1.cx("pcMaximizeButton"))("ariaLabel", ctx_r1.maximized ? ctx_r1.minimizeLabel : ctx_r1.maximizeLabel)("tabindex", ctx_r1.maximizable ? "0" : "-1")("buttonProps", ctx_r1.maximizeButtonProps);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_p_button_6_ng_template_1_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(8);
    \u0275\u0275classMap(ctx_r1.closeIcon);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_p_button_6_ng_template_1_ng_container_0__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 30);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_p_button_6_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dialog_div_0_div_1_ng_template_3_div_1_p_button_6_ng_template_1_ng_container_0_span_1_Template, 1, 2, "span", 28)(2, Dialog_div_0_div_1_ng_template_3_div_1_p_button_6_ng_template_1_ng_container_0__svg_svg_2_Template, 1, 0, "svg", 29);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.closeIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.closeIcon);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_p_button_6_ng_template_1_span_1_1_ng_template_0_Template(rf, ctx) {
}
function Dialog_div_0_div_1_ng_template_3_div_1_p_button_6_ng_template_1_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dialog_div_0_div_1_ng_template_3_div_1_p_button_6_ng_template_1_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_p_button_6_ng_template_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, Dialog_div_0_div_1_ng_template_3_div_1_p_button_6_ng_template_1_span_1_1_Template, 1, 0, null, 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1._closeiconTemplate || ctx_r1.closeIconTemplate || ctx_r1.closeIconT);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_p_button_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dialog_div_0_div_1_ng_template_3_div_1_p_button_6_ng_template_1_ng_container_0_Template, 3, 2, "ng-container", 22)(1, Dialog_div_0_div_1_ng_template_3_div_1_p_button_6_ng_template_1_span_1_Template, 2, 1, "span", 22);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275property("ngIf", !ctx_r1._closeiconTemplate && !ctx_r1.closeIconTemplate && !ctx_r1.closeIconT && !(ctx_r1.closeButtonProps == null ? null : ctx_r1.closeButtonProps.icon));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1._closeiconTemplate || ctx_r1.closeIconTemplate || ctx_r1.closeIconT);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_p_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 20);
    \u0275\u0275listener("onClick", function Dialog_div_0_div_1_ng_template_3_div_1_p_button_6_Template_p_button_onClick_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.close($event));
    })("keydown.enter", function Dialog_div_0_div_1_ng_template_3_div_1_p_button_6_Template_p_button_keydown_enter_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.close($event));
    });
    \u0275\u0275template(1, Dialog_div_0_div_1_ng_template_3_div_1_p_button_6_ng_template_1_Template, 2, 2, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("pt", ctx_r1.ptm("pcCloseButton"))("styleClass", ctx_r1.cx("pcCloseButton"))("ariaLabel", ctx_r1.closeAriaLabel)("tabindex", ctx_r1.closeTabindex)("buttonProps", ctx_r1.closeButtonProps);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15, 3);
    \u0275\u0275listener("mousedown", function Dialog_div_0_div_1_ng_template_3_div_1_Template_div_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.initDrag($event));
    });
    \u0275\u0275template(2, Dialog_div_0_div_1_ng_template_3_div_1_span_2_Template, 2, 5, "span", 16)(3, Dialog_div_0_div_1_ng_template_3_div_1_ng_container_3_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementStart(4, "div", 17);
    \u0275\u0275template(5, Dialog_div_0_div_1_ng_template_3_div_1_p_button_5_Template, 3, 5, "p-button", 18)(6, Dialog_div_0_div_1_ng_template_3_div_1_p_button_6_Template, 3, 5, "p-button", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("header"));
    \u0275\u0275property("pBind", ctx_r1.ptm("header"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1._headerTemplate && !ctx_r1.headerTemplate && !ctx_r1.headerT);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1._headerTemplate || ctx_r1.headerTemplate || ctx_r1.headerT);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("headerActions"));
    \u0275\u0275property("pBind", ctx_r1.ptm("headerActions"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.maximizable);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.closable);
  }
}
function Dialog_div_0_div_1_ng_template_3_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17, 5);
    \u0275\u0275projection(2, 1);
    \u0275\u0275template(3, Dialog_div_0_div_1_ng_template_3_div_6_ng_container_3_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("footer"));
    \u0275\u0275property("pBind", ctx_r1.ptm("footer"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1._footerTemplate || ctx_r1.footerTemplate || ctx_r1.footerT);
  }
}
function Dialog_div_0_div_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dialog_div_0_div_1_ng_template_3_div_0_Template, 1, 5, "div", 12)(1, Dialog_div_0_div_1_ng_template_3_div_1_Template, 7, 10, "div", 13);
    \u0275\u0275elementStart(2, "div", 7, 2);
    \u0275\u0275projection(4);
    \u0275\u0275template(5, Dialog_div_0_div_1_ng_template_3_ng_container_5_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, Dialog_div_0_div_1_ng_template_3_div_6_Template, 4, 4, "div", 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.resizable);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showHeader);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("content"), ctx_r1.contentStyleClass));
    \u0275\u0275property("ngStyle", ctx_r1.contentStyle)("pBind", ctx_r1.ptm("content"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1._contentTemplate || ctx_r1.contentTemplate || ctx_r1.contentT);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1._footerTemplate || ctx_r1.footerTemplate || ctx_r1.footerT);
  }
}
function Dialog_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9, 0);
    \u0275\u0275listener("@animation.start", function Dialog_div_0_div_1_Template_div_animation_animation_start_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAnimationStart($event));
    })("@animation.done", function Dialog_div_0_div_1_Template_div_animation_animation_done_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAnimationEnd($event));
    });
    \u0275\u0275template(2, Dialog_div_0_div_1_ng_container_2_Template, 2, 1, "ng-container", 10)(3, Dialog_div_0_div_1_ng_template_3_Template, 7, 8, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notHeadless_r7 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(ctx_r1.sx("root"));
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("root"), ctx_r1.styleClass));
    \u0275\u0275property("ngStyle", ctx_r1.style)("pBind", ctx_r1.ptm("root"))("pFocusTrapDisabled", ctx_r1.focusTrap === false)("@animation", \u0275\u0275pureFunction1(16, _c11, \u0275\u0275pureFunction2(13, _c10, ctx_r1.transformOptions, ctx_r1.transitionOptions)));
    \u0275\u0275attribute("role", ctx_r1.role)("aria-labelledby", ctx_r1.ariaLabelledBy)("aria-modal", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1._headlessTemplate || ctx_r1.headlessTemplate || ctx_r1.headlessT)("ngIfElse", notHeadless_r7);
  }
}
function Dialog_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, Dialog_div_0_div_1_Template, 5, 18, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r1.sx("mask"));
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("mask"), ctx_r1.maskStyleClass));
    \u0275\u0275property("ngStyle", ctx_r1.maskStyle)("pBind", ctx_r1.ptm("mask"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.visible);
  }
}
var inlineStyles = {
  mask: ({
    instance
  }) => ({
    position: "fixed",
    height: "100%",
    width: "100%",
    left: 0,
    top: 0,
    display: "flex",
    justifyContent: instance.position === "left" || instance.position === "topleft" || instance.position === "bottomleft" ? "flex-start" : instance.position === "right" || instance.position === "topright" || instance.position === "bottomright" ? "flex-end" : "center",
    alignItems: instance.position === "top" || instance.position === "topleft" || instance.position === "topright" ? "flex-start" : instance.position === "bottom" || instance.position === "bottomleft" || instance.position === "bottomright" ? "flex-end" : "center",
    pointerEvents: instance.modal ? "auto" : "none"
  }),
  root: {
    display: "flex",
    flexDirection: "column",
    pointerEvents: "auto"
  }
};
var classes = {
  mask: ({
    instance
  }) => {
    const positions = ["left", "right", "top", "topleft", "topright", "bottom", "bottomleft", "bottomright"];
    const pos = positions.find((item) => item === instance.position);
    return ["p-dialog-mask", {
      "p-overlay-mask p-overlay-mask-enter": instance.modal
    }, pos ? `p-dialog-${pos}` : ""];
  },
  root: ({
    instance
  }) => ["p-dialog p-component", {
    "p-dialog-maximized": instance.maximizable && instance.maximized
  }],
  header: "p-dialog-header",
  title: "p-dialog-title",
  resizeHandle: "p-resizable-handle",
  headerActions: "p-dialog-header-actions",
  pcMaximizeButton: "p-dialog-maximize-button",
  pcCloseButton: "p-dialog-close-button",
  content: () => ["p-dialog-content"],
  footer: "p-dialog-footer"
};
var DialogStyle = class _DialogStyle extends BaseStyle {
  name = "dialog";
  style = style2;
  classes = classes;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DialogStyle_BaseFactory;
    return function DialogStyle_Factory(__ngFactoryType__) {
      return (\u0275DialogStyle_BaseFactory || (\u0275DialogStyle_BaseFactory = \u0275\u0275getInheritedFactory(_DialogStyle)))(__ngFactoryType__ || _DialogStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DialogStyle,
    factory: _DialogStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogStyle, [{
    type: Injectable
  }], null, null);
})();
var DialogClasses;
(function(DialogClasses2) {
  DialogClasses2["mask"] = "p-dialog-mask";
  DialogClasses2["root"] = "p-dialog";
  DialogClasses2["header"] = "p-dialog-header";
  DialogClasses2["title"] = "p-dialog-title";
  DialogClasses2["headerActions"] = "p-dialog-header-actions";
  DialogClasses2["pcMaximizeButton"] = "p-dialog-maximize-button";
  DialogClasses2["pcCloseButton"] = "p-dialog-close-button";
  DialogClasses2["content"] = "p-dialog-content";
  DialogClasses2["footer"] = "p-dialog-footer";
})(DialogClasses || (DialogClasses = {}));
var DIALOG_INSTANCE = new InjectionToken("DIALOG_INSTANCE");
var showAnimation = animation([style({
  transform: "{{transform}}",
  opacity: 0
}), animate("{{transition}}")]);
var hideAnimation = animation([animate("{{transition}}", style({
  transform: "{{transform}}",
  opacity: 0
}))]);
var Dialog = class _Dialog extends BaseComponent {
  hostName = "";
  $pcDialog = inject(DIALOG_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("host"));
  }
  /**
   * Title text of the dialog.
   * @group Props
   */
  header;
  /**
   * Enables dragging to change the position using header.
   * @group Props
   */
  draggable = true;
  /**
   * Enables resizing of the content.
   * @group Props
   */
  resizable = true;
  /**
   * Style of the content section.
   * @group Props
   */
  contentStyle;
  /**
   * Style class of the content.
   * @group Props
   */
  contentStyleClass;
  /**
   * Defines if background should be blocked when dialog is displayed.
   * @group Props
   */
  modal = false;
  /**
   * Specifies if pressing escape key should hide the dialog.
   * @group Props
   */
  closeOnEscape = true;
  /**
   * Specifies if clicking the modal background should hide the dialog.
   * @group Props
   */
  dismissableMask = false;
  /**
   * When enabled dialog is displayed in RTL direction.
   * @group Props
   */
  rtl = false;
  /**
   * Adds a close icon to the header to hide the dialog.
   * @group Props
   */
  closable = true;
  /**
   * Object literal to define widths per screen size.
   * @group Props
   */
  breakpoints;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the mask.
   * @group Props
   */
  maskStyleClass;
  /**
   * Style of the mask.
   * @group Props
   */
  maskStyle;
  /**
   * Whether to show the header or not.
   * @group Props
   */
  showHeader = true;
  /**
   * Whether background scroll should be blocked when dialog is visible.
   * @group Props
   */
  blockScroll = false;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * Minimum value for the left coordinate of dialog in dragging.
   * @group Props
   */
  minX = 0;
  /**
   * Minimum value for the top coordinate of dialog in dragging.
   * @group Props
   */
  minY = 0;
  /**
   * When enabled, first focusable element receives focus on show.
   * @group Props
   */
  focusOnShow = true;
  /**
   * Whether the dialog can be displayed full screen.
   * @group Props
   */
  maximizable = false;
  /**
   * Keeps dialog in the viewport.
   * @group Props
   */
  keepInViewport = true;
  /**
   * When enabled, can only focus on elements inside the dialog.
   * @group Props
   */
  focusTrap = true;
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Name of the close icon.
   * @group Props
   */
  closeIcon;
  /**
   * Defines a string that labels the close button for accessibility.
   * @group Props
   */
  closeAriaLabel;
  /**
   * Index of the close button in tabbing order.
   * @group Props
   */
  closeTabindex = "0";
  /**
   * Name of the minimize icon.
   * @group Props
   */
  minimizeIcon;
  /**
   * Name of the maximize icon.
   * @group Props
   */
  maximizeIcon;
  /**
   * Used to pass all properties of the ButtonProps to the Button component.
   * @group Props
   */
  closeButtonProps = {
    severity: "secondary",
    variant: "text",
    rounded: true
  };
  /**
   * Used to pass all properties of the ButtonProps to the Button component.
   * @group Props
   */
  maximizeButtonProps = {
    severity: "secondary",
    variant: "text",
    rounded: true
  };
  /**
   * Specifies the visibility of the dialog.
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(value) {
    this._visible = value;
    if (this._visible && !this.maskVisible) {
      this.maskVisible = true;
    }
  }
  /**
   * Inline style of the component.
   * @group Props
   */
  get style() {
    return this._style;
  }
  set style(value) {
    if (value) {
      this._style = __spreadValues({}, value);
      this.originalStyle = value;
    }
  }
  /**
   * Position of the dialog.
   * @group Props
   */
  get position() {
    return this._position;
  }
  set position(value) {
    this._position = value;
    switch (value) {
      case "topleft":
      case "bottomleft":
      case "left":
        this.transformOptions = "translate3d(-100%, 0px, 0px)";
        break;
      case "topright":
      case "bottomright":
      case "right":
        this.transformOptions = "translate3d(100%, 0px, 0px)";
        break;
      case "bottom":
        this.transformOptions = "translate3d(0px, 100%, 0px)";
        break;
      case "top":
        this.transformOptions = "translate3d(0px, -100%, 0px)";
        break;
      default:
        this.transformOptions = "scale(0.7)";
        break;
    }
  }
  /**
   * Role attribute of html element.
   * @group Emits
   */
  role = "dialog";
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @defaultValue 'self'
   * @group Props
   */
  appendTo = input(void 0, ...ngDevMode ? [{
    debugName: "appendTo"
  }] : []);
  /**
   * Callback to invoke when dialog is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when dialog is hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * This EventEmitter is used to notify changes in the visibility state of a component.
   * @param {boolean} value - New value.
   * @group Emits
   */
  visibleChange = new EventEmitter();
  /**
   * Callback to invoke when dialog resizing is initiated.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onResizeInit = new EventEmitter();
  /**
   * Callback to invoke when dialog resizing is completed.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onResizeEnd = new EventEmitter();
  /**
   * Callback to invoke when dialog dragging is completed.
   * @param {DragEvent} event - Drag event.
   * @group Emits
   */
  onDragEnd = new EventEmitter();
  /**
   * Callback to invoke when dialog maximized or unmaximized.
   * @group Emits
   */
  onMaximize = new EventEmitter();
  headerViewChild;
  contentViewChild;
  footerViewChild;
  /**
   * Header template.
   * @group Props
   */
  headerTemplate;
  /**
   * Content template.
   * @group Props
   */
  contentTemplate;
  /**
   * Footer template.
   * @group Props
   */
  footerTemplate;
  /**
   * Close icon template.
   * @group Props
   */
  closeIconTemplate;
  /**
   * Maximize icon template.
   * @group Props
   */
  maximizeIconTemplate;
  /**
   * Minimize icon template.
   * @group Props
   */
  minimizeIconTemplate;
  /**
   * Headless template.
   * @group Props
   */
  headlessTemplate;
  _headerTemplate;
  _contentTemplate;
  _footerTemplate;
  _closeiconTemplate;
  _maximizeiconTemplate;
  _minimizeiconTemplate;
  _headlessTemplate;
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{
    debugName: "$appendTo"
  }] : []);
  _visible = false;
  maskVisible;
  container;
  wrapper;
  dragging;
  ariaLabelledBy = this.getAriaLabelledBy();
  documentDragListener;
  documentDragEndListener;
  resizing;
  documentResizeListener;
  documentResizeEndListener;
  documentEscapeListener;
  maskClickListener;
  lastPageX;
  lastPageY;
  preventVisibleChangePropagation;
  maximized;
  preMaximizeContentHeight;
  preMaximizeContainerWidth;
  preMaximizeContainerHeight;
  preMaximizePageX;
  preMaximizePageY;
  id = s2("pn_id_");
  _style = {};
  _position = "center";
  originalStyle;
  transformOptions = "scale(0.7)";
  styleElement;
  window;
  _componentStyle = inject(DialogStyle);
  headerT;
  contentT;
  footerT;
  closeIconT;
  maximizeIconT;
  minimizeIconT;
  headlessT;
  zIndexForLayering;
  get maximizeLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)["maximizeLabel"];
  }
  get minimizeLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)["minimizeLabel"];
  }
  zone = inject(NgZone);
  get maskClass() {
    const positions = ["left", "right", "top", "topleft", "topright", "bottom", "bottomleft", "bottomright"];
    const pos = positions.find((item) => item === this.position);
    return {
      "p-dialog-mask": true,
      "p-overlay-mask p-overlay-mask-enter": this.modal || this.dismissableMask,
      [`p-dialog-${pos}`]: pos
    };
  }
  onInit() {
    if (this.breakpoints) {
      this.createStyle();
    }
  }
  templates;
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this.headerT = item.template;
          break;
        case "content":
          this.contentT = item.template;
          break;
        case "footer":
          this.footerT = item.template;
          break;
        case "closeicon":
          this.closeIconT = item.template;
          break;
        case "maximizeicon":
          this.maximizeIconT = item.template;
          break;
        case "minimizeicon":
          this.minimizeIconT = item.template;
          break;
        case "headless":
          this.headlessT = item.template;
          break;
        default:
          this.contentT = item.template;
          break;
      }
    });
  }
  getAriaLabelledBy() {
    return this.header !== null ? s2("pn_id_") + "_header" : null;
  }
  parseDurationToMilliseconds(durationString) {
    const transitionTimeRegex = /([\d\.]+)(ms|s)\b/g;
    let totalMilliseconds = 0;
    let match2;
    while ((match2 = transitionTimeRegex.exec(durationString)) !== null) {
      const value = parseFloat(match2[1]);
      const unit = match2[2];
      if (unit === "ms") {
        totalMilliseconds += value;
      } else if (unit === "s") {
        totalMilliseconds += value * 1e3;
      }
    }
    if (totalMilliseconds === 0) {
      return void 0;
    }
    return totalMilliseconds;
  }
  _focus(focusParentElement) {
    if (focusParentElement) {
      const timeoutDuration = this.parseDurationToMilliseconds(this.transitionOptions);
      let _focusableElements = DomHandler.getFocusableElements(focusParentElement);
      if (_focusableElements && _focusableElements.length > 0) {
        this.zone.runOutsideAngular(() => {
          setTimeout(() => _focusableElements[0].focus(), timeoutDuration || 5);
        });
        return true;
      }
    }
    return false;
  }
  focus(focusParentElement = this.contentViewChild?.nativeElement) {
    let focused = this._focus(focusParentElement);
    if (!focused) {
      focused = this._focus(this.footerViewChild?.nativeElement);
      if (!focused) {
        focused = this._focus(this.headerViewChild?.nativeElement);
        if (!focused) {
          this._focus(this.contentViewChild?.nativeElement);
        }
      }
    }
  }
  close(event) {
    this.visibleChange.emit(false);
    event.preventDefault();
  }
  enableModality() {
    if (this.closable && this.dismissableMask) {
      this.maskClickListener = this.renderer.listen(this.wrapper, "mousedown", (event) => {
        if (this.wrapper && this.wrapper.isSameNode(event.target)) {
          this.close(event);
        }
      });
    }
    if (this.modal) {
      blockBodyScroll();
    }
  }
  disableModality() {
    if (this.wrapper) {
      if (this.dismissableMask) {
        this.unbindMaskClickListener();
      }
      const scrollBlockers = document.querySelectorAll(".p-dialog-mask-scrollblocker");
      if (this.modal && scrollBlockers && scrollBlockers.length == 1) {
        unblockBodyScroll();
      }
      if (!this.cd.destroyed) {
        this.cd.detectChanges();
      }
    }
  }
  maximize() {
    this.maximized = !this.maximized;
    if (!this.modal && !this.blockScroll) {
      if (this.maximized) {
        blockBodyScroll();
      } else {
        unblockBodyScroll();
      }
    }
    this.onMaximize.emit({
      maximized: this.maximized
    });
  }
  unbindMaskClickListener() {
    if (this.maskClickListener) {
      this.maskClickListener();
      this.maskClickListener = null;
    }
  }
  moveOnTop() {
    if (this.autoZIndex) {
      zindexutils.set("modal", this.container, this.baseZIndex + this.config.zIndex.modal);
      this.wrapper.style.zIndex = String(parseInt(this.container.style.zIndex, 10) - 1);
    } else {
      this.zIndexForLayering = zindexutils.generateZIndex("modal", (this.baseZIndex ?? 0) + this.config.zIndex.modal);
    }
  }
  createStyle() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.styleElement) {
        this.styleElement = this.renderer.createElement("style");
        this.styleElement.type = "text/css";
        _t(this.styleElement, "nonce", this.config?.csp()?.nonce);
        this.renderer.appendChild(this.document.head, this.styleElement);
        let innerHTML = "";
        for (let breakpoint in this.breakpoints) {
          innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            .p-dialog[${this.id}]:not(.p-dialog-maximized) {
                                width: ${this.breakpoints[breakpoint]} !important;
                            }
                        }
                    `;
        }
        this.renderer.setProperty(this.styleElement, "innerHTML", innerHTML);
        _t(this.styleElement, "nonce", this.config?.csp()?.nonce);
      }
    }
  }
  initDrag(event) {
    if (R(event.target, "p-dialog-maximize-icon") || R(event.target, "p-dialog-header-close-icon") || R(event.target?.parentElement, "p-dialog-header-icon")) {
      return;
    }
    if (this.draggable) {
      this.dragging = true;
      this.lastPageX = event.pageX;
      this.lastPageY = event.pageY;
      this.container.style.margin = "0";
      W(this.document.body, "p-unselectable-text");
    }
  }
  onDrag(event) {
    if (this.dragging && this.container) {
      const containerWidth = v(this.container);
      const containerHeight = C(this.container);
      const deltaX = event.pageX - this.lastPageX;
      const deltaY = event.pageY - this.lastPageY;
      const offset = this.container.getBoundingClientRect();
      const containerComputedStyle = getComputedStyle(this.container);
      const leftMargin = parseFloat(containerComputedStyle.marginLeft);
      const topMargin = parseFloat(containerComputedStyle.marginTop);
      const leftPos = offset.left + deltaX - leftMargin;
      const topPos = offset.top + deltaY - topMargin;
      const viewport = h();
      this.container.style.position = "fixed";
      if (this.keepInViewport) {
        if (leftPos >= this.minX && leftPos + containerWidth < viewport.width) {
          this._style.left = `${leftPos}px`;
          this.lastPageX = event.pageX;
          this.container.style.left = `${leftPos}px`;
        }
        if (topPos >= this.minY && topPos + containerHeight < viewport.height) {
          this._style.top = `${topPos}px`;
          this.lastPageY = event.pageY;
          this.container.style.top = `${topPos}px`;
        }
      } else {
        this.lastPageX = event.pageX;
        this.container.style.left = `${leftPos}px`;
        this.lastPageY = event.pageY;
        this.container.style.top = `${topPos}px`;
      }
    }
  }
  endDrag(event) {
    if (this.dragging) {
      this.dragging = false;
      P(this.document.body, "p-unselectable-text");
      this.cd.detectChanges();
      this.onDragEnd.emit(event);
    }
  }
  resetPosition() {
    this.container.style.position = "";
    this.container.style.left = "";
    this.container.style.top = "";
    this.container.style.margin = "";
  }
  //backward compatibility
  center() {
    this.resetPosition();
  }
  initResize(event) {
    if (this.resizable) {
      this.resizing = true;
      this.lastPageX = event.pageX;
      this.lastPageY = event.pageY;
      W(this.document.body, "p-unselectable-text");
      this.onResizeInit.emit(event);
    }
  }
  onResize(event) {
    if (this.resizing) {
      let deltaX = event.pageX - this.lastPageX;
      let deltaY = event.pageY - this.lastPageY;
      let containerWidth = v(this.container);
      let containerHeight = C(this.container);
      let contentHeight = C(this.contentViewChild?.nativeElement);
      let newWidth = containerWidth + deltaX;
      let newHeight = containerHeight + deltaY;
      let minWidth = this.container.style.minWidth;
      let minHeight = this.container.style.minHeight;
      let offset = this.container.getBoundingClientRect();
      let viewport = h();
      let hasBeenDragged = !parseInt(this.container.style.top) || !parseInt(this.container.style.left);
      if (hasBeenDragged) {
        newWidth += deltaX;
        newHeight += deltaY;
      }
      if ((!minWidth || newWidth > parseInt(minWidth)) && offset.left + newWidth < viewport.width) {
        this._style.width = newWidth + "px";
        this.container.style.width = this._style.width;
      }
      if ((!minHeight || newHeight > parseInt(minHeight)) && offset.top + newHeight < viewport.height) {
        this.contentViewChild.nativeElement.style.height = contentHeight + newHeight - containerHeight + "px";
        if (this._style.height) {
          this._style.height = newHeight + "px";
          this.container.style.height = this._style.height;
        }
      }
      this.lastPageX = event.pageX;
      this.lastPageY = event.pageY;
    }
  }
  resizeEnd(event) {
    if (this.resizing) {
      this.resizing = false;
      P(this.document.body, "p-unselectable-text");
      this.onResizeEnd.emit(event);
    }
  }
  bindGlobalListeners() {
    if (this.draggable) {
      this.bindDocumentDragListener();
      this.bindDocumentDragEndListener();
    }
    if (this.resizable) {
      this.bindDocumentResizeListeners();
    }
    if (this.closeOnEscape && this.closable) {
      this.bindDocumentEscapeListener();
    }
  }
  unbindGlobalListeners() {
    this.unbindDocumentDragListener();
    this.unbindDocumentDragEndListener();
    this.unbindDocumentResizeListeners();
    this.unbindDocumentEscapeListener();
  }
  bindDocumentDragListener() {
    if (!this.documentDragListener) {
      this.zone.runOutsideAngular(() => {
        this.documentDragListener = this.renderer.listen(this.document.defaultView, "mousemove", this.onDrag.bind(this));
      });
    }
  }
  unbindDocumentDragListener() {
    if (this.documentDragListener) {
      this.documentDragListener();
      this.documentDragListener = null;
    }
  }
  bindDocumentDragEndListener() {
    if (!this.documentDragEndListener) {
      this.zone.runOutsideAngular(() => {
        this.documentDragEndListener = this.renderer.listen(this.document.defaultView, "mouseup", this.endDrag.bind(this));
      });
    }
  }
  unbindDocumentDragEndListener() {
    if (this.documentDragEndListener) {
      this.documentDragEndListener();
      this.documentDragEndListener = null;
    }
  }
  bindDocumentResizeListeners() {
    if (!this.documentResizeListener && !this.documentResizeEndListener) {
      this.zone.runOutsideAngular(() => {
        this.documentResizeListener = this.renderer.listen(this.document.defaultView, "mousemove", this.onResize.bind(this));
        this.documentResizeEndListener = this.renderer.listen(this.document.defaultView, "mouseup", this.resizeEnd.bind(this));
      });
    }
  }
  unbindDocumentResizeListeners() {
    if (this.documentResizeListener && this.documentResizeEndListener) {
      this.documentResizeListener();
      this.documentResizeEndListener();
      this.documentResizeListener = null;
      this.documentResizeEndListener = null;
    }
  }
  bindDocumentEscapeListener() {
    const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
    this.documentEscapeListener = this.renderer.listen(documentTarget, "keydown", (event) => {
      if (event.key == "Escape") {
        const currentZIndex = zindexutils.getCurrent();
        if (parseInt(this.container.style.zIndex) == currentZIndex || this.zIndexForLayering == currentZIndex) {
          this.close(event);
        }
      }
    });
  }
  unbindDocumentEscapeListener() {
    if (this.documentEscapeListener) {
      this.documentEscapeListener();
      this.documentEscapeListener = null;
    }
  }
  appendContainer() {
    if (this.$appendTo() && this.$appendTo() !== "self") {
      if (this.$appendTo() === "body") this.renderer.appendChild(this.document.body, this.wrapper);
      else ut(this.$appendTo(), this.wrapper);
    }
  }
  restoreAppend() {
    if (this.container && this.$appendTo() !== "self") {
      this.renderer.appendChild(this.el.nativeElement, this.wrapper);
    }
  }
  onAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        this.container = event.element;
        this.wrapper = this.container?.parentElement;
        this.$attrSelector && this.container?.setAttribute(this.$attrSelector, "");
        this.appendContainer();
        this.moveOnTop();
        this.bindGlobalListeners();
        this.container?.setAttribute(this.id, "");
        if (this.modal) {
          this.enableModality();
        }
        if (this.focusOnShow) {
          this.focus();
        }
        break;
      case "void":
        if (this.wrapper && this.modal) {
          W(this.wrapper, "p-overlay-mask-leave");
        }
        break;
    }
  }
  onAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        this.onContainerDestroy();
        this.onHide.emit({});
        this.cd.markForCheck();
        if (this.maskVisible !== this.visible) {
          this.maskVisible = this.visible;
        }
        break;
      case "visible":
        this.onShow.emit({});
        break;
    }
  }
  onContainerDestroy() {
    this.unbindGlobalListeners();
    this.dragging = false;
    this.maskVisible = false;
    if (this.maximized) {
      this.document.body.style.removeProperty("--scrollbar;-width");
      this.maximized = false;
    }
    if (this.modal) {
      this.disableModality();
    }
    if (R(this.document.body, "p-overflow-hidden")) {
      P(this.document.body, "p-overflow-hidden");
    }
    if (this.container && this.autoZIndex) {
      zindexutils.clear(this.container);
    }
    if (this.zIndexForLayering) {
      zindexutils.revertZIndex(this.zIndexForLayering);
    }
    this.container = null;
    this.wrapper = null;
    this._style = this.originalStyle ? __spreadValues({}, this.originalStyle) : {};
  }
  destroyStyle() {
    if (this.styleElement) {
      this.renderer.removeChild(this.document.head, this.styleElement);
      this.styleElement = null;
    }
  }
  onDestroy() {
    if (this.container) {
      this.restoreAppend();
      this.onContainerDestroy();
    }
    this.destroyStyle();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Dialog_BaseFactory;
    return function Dialog_Factory(__ngFactoryType__) {
      return (\u0275Dialog_BaseFactory || (\u0275Dialog_BaseFactory = \u0275\u0275getInheritedFactory(_Dialog)))(__ngFactoryType__ || _Dialog);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Dialog,
    selectors: [["p-dialog"]],
    contentQueries: function Dialog_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c08, 4);
        \u0275\u0275contentQuery(dirIndex, _c1, 4);
        \u0275\u0275contentQuery(dirIndex, _c2, 4);
        \u0275\u0275contentQuery(dirIndex, _c3, 4);
        \u0275\u0275contentQuery(dirIndex, _c4, 4);
        \u0275\u0275contentQuery(dirIndex, _c5, 4);
        \u0275\u0275contentQuery(dirIndex, _c6, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx._headerTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx._contentTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx._footerTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx._closeiconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx._maximizeiconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx._minimizeiconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx._headlessTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.templates = _t2);
      }
    },
    viewQuery: function Dialog_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c7, 5);
        \u0275\u0275viewQuery(_c1, 5);
        \u0275\u0275viewQuery(_c2, 5);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.headerViewChild = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.contentViewChild = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.footerViewChild = _t2.first);
      }
    },
    inputs: {
      hostName: "hostName",
      header: "header",
      draggable: [2, "draggable", "draggable", booleanAttribute],
      resizable: [2, "resizable", "resizable", booleanAttribute],
      contentStyle: "contentStyle",
      contentStyleClass: "contentStyleClass",
      modal: [2, "modal", "modal", booleanAttribute],
      closeOnEscape: [2, "closeOnEscape", "closeOnEscape", booleanAttribute],
      dismissableMask: [2, "dismissableMask", "dismissableMask", booleanAttribute],
      rtl: [2, "rtl", "rtl", booleanAttribute],
      closable: [2, "closable", "closable", booleanAttribute],
      breakpoints: "breakpoints",
      styleClass: "styleClass",
      maskStyleClass: "maskStyleClass",
      maskStyle: "maskStyle",
      showHeader: [2, "showHeader", "showHeader", booleanAttribute],
      blockScroll: [2, "blockScroll", "blockScroll", booleanAttribute],
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      minX: [2, "minX", "minX", numberAttribute],
      minY: [2, "minY", "minY", numberAttribute],
      focusOnShow: [2, "focusOnShow", "focusOnShow", booleanAttribute],
      maximizable: [2, "maximizable", "maximizable", booleanAttribute],
      keepInViewport: [2, "keepInViewport", "keepInViewport", booleanAttribute],
      focusTrap: [2, "focusTrap", "focusTrap", booleanAttribute],
      transitionOptions: "transitionOptions",
      closeIcon: "closeIcon",
      closeAriaLabel: "closeAriaLabel",
      closeTabindex: "closeTabindex",
      minimizeIcon: "minimizeIcon",
      maximizeIcon: "maximizeIcon",
      closeButtonProps: "closeButtonProps",
      maximizeButtonProps: "maximizeButtonProps",
      visible: "visible",
      style: "style",
      position: "position",
      role: "role",
      appendTo: [1, "appendTo"],
      headerTemplate: [0, "content", "headerTemplate"],
      contentTemplate: "contentTemplate",
      footerTemplate: "footerTemplate",
      closeIconTemplate: "closeIconTemplate",
      maximizeIconTemplate: "maximizeIconTemplate",
      minimizeIconTemplate: "minimizeIconTemplate",
      headlessTemplate: "headlessTemplate"
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide",
      visibleChange: "visibleChange",
      onResizeInit: "onResizeInit",
      onResizeEnd: "onResizeEnd",
      onDragEnd: "onDragEnd",
      onMaximize: "onMaximize"
    },
    features: [\u0275\u0275ProvidersFeature([DialogStyle, {
      provide: DIALOG_INSTANCE,
      useExisting: _Dialog
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Dialog
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c9,
    decls: 1,
    vars: 1,
    consts: [["container", ""], ["notHeadless", ""], ["content", ""], ["titlebar", ""], ["icon", ""], ["footer", ""], [3, "class", "style", "ngStyle", "pBind", 4, "ngIf"], [3, "ngStyle", "pBind"], ["pFocusTrap", "", 3, "class", "style", "ngStyle", "pBind", "pFocusTrapDisabled", 4, "ngIf"], ["pFocusTrap", "", 3, "ngStyle", "pBind", "pFocusTrapDisabled"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet"], [3, "class", "pBind", "z-index", "mousedown", 4, "ngIf"], [3, "class", "pBind", "mousedown", 4, "ngIf"], [3, "class", "pBind", 4, "ngIf"], [3, "mousedown", "pBind"], [3, "id", "class", "pBind", 4, "ngIf"], [3, "pBind"], [3, "pt", "styleClass", "ariaLabel", "tabindex", "buttonProps", "onClick", "keydown.enter", 4, "ngIf"], [3, "id", "pBind"], [3, "onClick", "keydown.enter", "pt", "styleClass", "ariaLabel", "tabindex", "buttonProps"], [3, "ngClass", 4, "ngIf"], [4, "ngIf"], [3, "ngClass"], ["data-p-icon", "window-maximize", 4, "ngIf"], ["data-p-icon", "window-minimize", 4, "ngIf"], ["data-p-icon", "window-maximize"], ["data-p-icon", "window-minimize"], [3, "class", 4, "ngIf"], ["data-p-icon", "times", 4, "ngIf"], ["data-p-icon", "times"]],
    template: function Dialog_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c8);
        \u0275\u0275template(0, Dialog_div_0_Template, 2, 7, "div", 6);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.maskVisible);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, Button, FocusTrap, TimesIcon, WindowMaximizeIcon, WindowMinimizeIcon, SharedModule, Bind],
    encapsulation: 2,
    data: {
      animation: [trigger("animation", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dialog, [{
    type: Component,
    args: [{
      selector: "p-dialog",
      standalone: true,
      imports: [CommonModule, Button, FocusTrap, TimesIcon, WindowMaximizeIcon, WindowMinimizeIcon, SharedModule, Bind],
      template: `
        <div *ngIf="maskVisible" [class]="cn(cx('mask'), maskStyleClass)" [style]="sx('mask')" [ngStyle]="maskStyle" [pBind]="ptm('mask')">
            <div
                *ngIf="visible"
                #container
                [class]="cn(cx('root'), styleClass)"
                [style]="sx('root')"
                [ngStyle]="style"
                [pBind]="ptm('root')"
                pFocusTrap
                [pFocusTrapDisabled]="focusTrap === false"
                [@animation]="{
                    value: 'visible',
                    params: { transform: transformOptions, transition: transitionOptions }
                }"
                (@animation.start)="onAnimationStart($event)"
                (@animation.done)="onAnimationEnd($event)"
                [attr.role]="role"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-modal]="true"
            >
                <ng-container *ngIf="_headlessTemplate || headlessTemplate || headlessT; else notHeadless">
                    <ng-container *ngTemplateOutlet="_headlessTemplate || headlessTemplate || headlessT"></ng-container>
                </ng-container>

                <ng-template #notHeadless>
                    <div *ngIf="resizable" [class]="cx('resizeHandle')" [pBind]="ptm('resizeHandle')" [style.z-index]="90" (mousedown)="initResize($event)"></div>
                    <div #titlebar [class]="cx('header')" [pBind]="ptm('header')" (mousedown)="initDrag($event)" *ngIf="showHeader">
                        <span [id]="ariaLabelledBy" [class]="cx('title')" [pBind]="ptm('title')" *ngIf="!_headerTemplate && !headerTemplate && !headerT">{{ header }}</span>
                        <ng-container *ngTemplateOutlet="_headerTemplate || headerTemplate || headerT"></ng-container>
                        <div [class]="cx('headerActions')" [pBind]="ptm('headerActions')">
                            <p-button
                                [pt]="ptm('pcMaximizeButton')"
                                *ngIf="maximizable"
                                [styleClass]="cx('pcMaximizeButton')"
                                [ariaLabel]="maximized ? minimizeLabel : maximizeLabel"
                                (onClick)="maximize()"
                                (keydown.enter)="maximize()"
                                [tabindex]="maximizable ? '0' : '-1'"
                                [buttonProps]="maximizeButtonProps"
                            >
                                <ng-template #icon>
                                    <span *ngIf="maximizeIcon && !_maximizeiconTemplate && !_minimizeiconTemplate" [ngClass]="maximized ? minimizeIcon : maximizeIcon"></span>
                                    <ng-container *ngIf="!maximizeIcon && !maximizeButtonProps?.icon">
                                        <svg data-p-icon="window-maximize" *ngIf="!maximized && !_maximizeiconTemplate && !maximizeIconTemplate && !maximizeIconT" />
                                        <svg data-p-icon="window-minimize" *ngIf="maximized && !_minimizeiconTemplate && !minimizeIconTemplate && !minimizeIconT" />
                                    </ng-container>
                                    <ng-container *ngIf="!maximized">
                                        <ng-template *ngTemplateOutlet="_maximizeiconTemplate || maximizeIconTemplate || maximizeIconT"></ng-template>
                                    </ng-container>
                                    <ng-container *ngIf="maximized">
                                        <ng-template *ngTemplateOutlet="_minimizeiconTemplate || minimizeIconTemplate || minimizeIconT"></ng-template>
                                    </ng-container>
                                </ng-template>
                            </p-button>
                            <p-button
                                [pt]="ptm('pcCloseButton')"
                                *ngIf="closable"
                                [styleClass]="cx('pcCloseButton')"
                                [ariaLabel]="closeAriaLabel"
                                (onClick)="close($event)"
                                (keydown.enter)="close($event)"
                                [tabindex]="closeTabindex"
                                [buttonProps]="closeButtonProps"
                            >
                                <ng-template #icon>
                                    <ng-container *ngIf="!_closeiconTemplate && !closeIconTemplate && !closeIconT && !closeButtonProps?.icon">
                                        <span *ngIf="closeIcon" [class]="closeIcon"></span>
                                        <svg data-p-icon="times" *ngIf="!closeIcon" />
                                    </ng-container>
                                    <span *ngIf="_closeiconTemplate || closeIconTemplate || closeIconT">
                                        <ng-template *ngTemplateOutlet="_closeiconTemplate || closeIconTemplate || closeIconT"></ng-template>
                                    </span>
                                </ng-template>
                            </p-button>
                        </div>
                    </div>
                    <div #content [class]="cn(cx('content'), contentStyleClass)" [ngStyle]="contentStyle" [pBind]="ptm('content')">
                        <ng-content></ng-content>
                        <ng-container *ngTemplateOutlet="_contentTemplate || contentTemplate || contentT"></ng-container>
                    </div>
                    <div #footer [class]="cx('footer')" [pBind]="ptm('footer')" *ngIf="_footerTemplate || footerTemplate || footerT">
                        <ng-content select="p-footer"></ng-content>
                        <ng-container *ngTemplateOutlet="_footerTemplate || footerTemplate || footerT"></ng-container>
                    </div>
                </ng-template>
            </div>
        </div>
    `,
      animations: [trigger("animation", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [DialogStyle, {
        provide: DIALOG_INSTANCE,
        useExisting: Dialog
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Dialog
      }],
      hostDirectives: [Bind]
    }]
  }], null, {
    hostName: [{
      type: Input
    }],
    header: [{
      type: Input
    }],
    draggable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    resizable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    contentStyle: [{
      type: Input
    }],
    contentStyleClass: [{
      type: Input
    }],
    modal: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    closeOnEscape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dismissableMask: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rtl: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    closable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    breakpoints: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    maskStyleClass: [{
      type: Input
    }],
    maskStyle: [{
      type: Input
    }],
    showHeader: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    blockScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    minX: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    minY: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    focusOnShow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    maximizable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    keepInViewport: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    focusTrap: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    transitionOptions: [{
      type: Input
    }],
    closeIcon: [{
      type: Input
    }],
    closeAriaLabel: [{
      type: Input
    }],
    closeTabindex: [{
      type: Input
    }],
    minimizeIcon: [{
      type: Input
    }],
    maximizeIcon: [{
      type: Input
    }],
    closeButtonProps: [{
      type: Input
    }],
    maximizeButtonProps: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    role: [{
      type: Input
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    visibleChange: [{
      type: Output
    }],
    onResizeInit: [{
      type: Output
    }],
    onResizeEnd: [{
      type: Output
    }],
    onDragEnd: [{
      type: Output
    }],
    onMaximize: [{
      type: Output
    }],
    headerViewChild: [{
      type: ViewChild,
      args: ["titlebar"]
    }],
    contentViewChild: [{
      type: ViewChild,
      args: ["content"]
    }],
    footerViewChild: [{
      type: ViewChild,
      args: ["footer"]
    }],
    headerTemplate: [{
      type: Input,
      args: ["content"]
    }],
    contentTemplate: [{
      type: Input
    }],
    footerTemplate: [{
      type: Input
    }],
    closeIconTemplate: [{
      type: Input
    }],
    maximizeIconTemplate: [{
      type: Input
    }],
    minimizeIconTemplate: [{
      type: Input
    }],
    headlessTemplate: [{
      type: Input
    }],
    _headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    _contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    _footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    _closeiconTemplate: [{
      type: ContentChild,
      args: ["closeicon", {
        descendants: false
      }]
    }],
    _maximizeiconTemplate: [{
      type: ContentChild,
      args: ["maximizeicon", {
        descendants: false
      }]
    }],
    _minimizeiconTemplate: [{
      type: ContentChild,
      args: ["minimizeicon", {
        descendants: false
      }]
    }],
    _headlessTemplate: [{
      type: ContentChild,
      args: ["headless", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var DialogModule = class _DialogModule {
  static \u0275fac = function DialogModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DialogModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DialogModule,
    imports: [Dialog, SharedModule],
    exports: [Dialog, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Dialog, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogModule, [{
    type: NgModule,
    args: [{
      imports: [Dialog, SharedModule],
      exports: [Dialog, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-dynamicdialog.mjs
var _c09 = () => ({
  severity: "secondary",
  variant: "text",
  rounded: true
});
function DynamicDialog_1_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DynamicDialog_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DynamicDialog_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngComponentOutlet", ctx_r0.headerTemplate);
  }
}
function DynamicDialog_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DynamicDialog_1_ng_template_0_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
}
function DynamicDialog_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DynamicDialog_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DynamicDialog_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngComponentOutlet", ctx_r0.contentTemplate);
  }
}
function DynamicDialog_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DynamicDialog_2_ng_template_0_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
}
function DynamicDialog_3_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DynamicDialog_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DynamicDialog_3_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngComponentOutlet", ctx_r0.footerTemplate);
  }
}
function DynamicDialog_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DynamicDialog_3_ng_template_0_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
  }
}
function DynamicDialog_4_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DynamicDialog_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DynamicDialog_4_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngComponentOutlet", ctx_r0.closeIconTemplate);
  }
}
function DynamicDialog_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DynamicDialog_4_ng_template_0_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
  }
}
function DynamicDialog_5_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DynamicDialog_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DynamicDialog_5_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngComponentOutlet", ctx_r0.maximizeIconTemplate);
  }
}
function DynamicDialog_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DynamicDialog_5_ng_template_0_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
  }
}
function DynamicDialog_6_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DynamicDialog_6_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DynamicDialog_6_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngComponentOutlet", ctx_r0.minimizeIconTemplate);
  }
}
function DynamicDialog_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DynamicDialog_6_ng_template_0_Template, 1, 1, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
  }
}
function DynamicDialog_7_ng_template_0_Template(rf, ctx) {
}
function DynamicDialog_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DynamicDialog_7_ng_template_0_Template, 0, 0, "ng-template", 9);
  }
}
function DynamicDialog_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.ddconfig.footer);
  }
}
var DynamicDialogContent = class _DynamicDialogContent {
  viewContainerRef;
  constructor(viewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }
  static \u0275fac = function DynamicDialogContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DynamicDialogContent)(\u0275\u0275directiveInject(ViewContainerRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _DynamicDialogContent,
    selectors: [["", "pDynamicDialogContent", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicDialogContent, [{
    type: Directive,
    args: [{
      selector: "[pDynamicDialogContent]",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }], null);
})();
var DynamicDialogStyle = class _DynamicDialogStyle extends DialogStyle {
  name = "dialog";
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DynamicDialogStyle_BaseFactory;
    return function DynamicDialogStyle_Factory(__ngFactoryType__) {
      return (\u0275DynamicDialogStyle_BaseFactory || (\u0275DynamicDialogStyle_BaseFactory = \u0275\u0275getInheritedFactory(_DynamicDialogStyle)))(__ngFactoryType__ || _DynamicDialogStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DynamicDialogStyle,
    factory: _DynamicDialogStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicDialogStyle, [{
    type: Injectable
  }], null, null);
})();
var DynamicDialogClasses;
(function(DynamicDialogClasses2) {
  DynamicDialogClasses2["mask"] = "p-dialog-mask";
  DynamicDialogClasses2["root"] = "p-dialog";
  DynamicDialogClasses2["header"] = "p-dialog-header";
  DynamicDialogClasses2["title"] = "p-dialog-title";
  DynamicDialogClasses2["headerActions"] = "p-dialog-header-actions";
  DynamicDialogClasses2["pcMaximizeButton"] = "p-dialog-maximize-button";
  DynamicDialogClasses2["pcCloseButton"] = "p-dialog-close-button";
  DynamicDialogClasses2["content"] = "p-dialog-content";
  DynamicDialogClasses2["footer"] = "p-dialog-footer";
})(DynamicDialogClasses || (DynamicDialogClasses = {}));
var DynamicDialogConfig = class {
  /**
   * An object to pass to the component loaded inside the Dialog.
   * @group Props
   */
  data;
  /**
   * An object to pass to the component loaded inside the Dialog.
   * @group Props
   */
  inputValues;
  /**
   * Header text of the dialog.
   * @group Props
   */
  header;
  /**
   * Identifies the element (or elements) that labels the element it is applied to.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Footer text of the dialog.
   * @group Props
   */
  footer;
  /**
   * Width of the dialog.
   * @group Props
   */
  width;
  /**
   * Height of the dialog.
   * @group Props
   */
  height;
  /**
   * Specifies if pressing escape key should hide the dialog.
   * @group Props
   */
  closeOnEscape = false;
  /**
   * Specifies if autofocus should happen on show.
   * @group Props
   */
  focusOnShow = true;
  /**
   * When enabled, can only focus on elements inside the dialog.
   * @group Props
   */
  focusTrap = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex;
  /**
   * Whether to re-enforce layering through applying zIndex.
   * @group Props
   */
  autoZIndex = false;
  /**
   * Specifies if clicking the modal background should hide the dialog.
   * @group Props
   */
  dismissableMask = false;
  /**
   * Inline style of the component.
   * @group Props
   */
  rtl = false;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Inline style of the content.
   * @group Props
   */
  contentStyle;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions;
  /**
   * Adds a close icon to the header to hide the dialog.
   * @group Props
   */
  closable = false;
  /**
   * Whether to show the header or not.
   * @group Props
   */
  showHeader = false;
  /**
   * Defines if background should be blocked when dialog is displayed.
   * @group Props
   */
  modal = false;
  /**
   * Style class of the mask.
   * @group Props
   */
  maskStyleClass;
  /**
   * Enables resizing of the content.
   * @group Props
   */
  resizable = false;
  /**
   * Enables dragging to change the position using header.
   * @group Props
   */
  draggable = false;
  /**
   * Keeps dialog in the viewport.
   * @group Props
   */
  keepInViewport = false;
  /**
   * Minimum value for the left coordinate of dialog in dragging.
   * @group Props
   */
  minX;
  /**
   * Minimum value for the top coordinate of dialog in dragging.
   * @group Props
   */
  minY;
  /**
   * Whether the dialog can be displayed full screen.
   * @group Props
   */
  maximizable = false;
  /**
   * Name of the maximize icon.
   * @group Props
   */
  maximizeIcon;
  /**
   * Name of the minimize icon.
   * @group Props
   */
  minimizeIcon;
  /**
   * Position of the dialog, options are "center", "top", "bottom", "left", "right", "topleft", "topright", "bottomleft" or "bottomright".
   * @group Props
   */
  position;
  /**
   * Defines a string that labels the close button for accessibility.
   * @group Props
   */
  closeAriaLabel;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * A boolean to determine if it can be duplicate.
   * @group Props
   */
  duplicate = false;
  /**
   * Object literal to define widths per screen size.
   * @group Props
   */
  breakpoints;
  /**
   * Dialog templates.
   * @group Props
   */
  templates;
};
var DynamicDialogRef = class {
  constructor() {
  }
  /**
   * Closes dialog.
   * @group Method
   */
  close(result) {
    this._onClose.next(result);
    setTimeout(() => {
      this._onClose.complete();
    }, 1e3);
  }
  /**
   * Destroys the dialog instance.
   * @group Method
   */
  destroy() {
    this._onDestroy.next(null);
  }
  /**
   * Callback to invoke on drag start.
   * @param {MouseEvent} event - Mouse event.
   * @group Method
   */
  dragStart(event) {
    this._onDragStart.next(event);
  }
  /**
   * Callback to invoke on drag end.
   * @param {MouseEvent} event - Mouse event.
   * @group Method
   */
  dragEnd(event) {
    this._onDragEnd.next(event);
  }
  /**
   * Callback to invoke on resize start.
   * @param {MouseEvent} event - Mouse event.
   * @group Method
   */
  resizeInit(event) {
    this._onResizeInit.next(event);
  }
  /**
   * Callback to invoke on resize start.
   * @param {MouseEvent} event - Mouse event.
   * @group Method
   */
  resizeEnd(event) {
    this._onResizeEnd.next(event);
  }
  /**
   * Callback to invoke on dialog is maximized.
   * @param {*} value - Size value.
   * @group Method
   */
  maximize(value) {
    this._onMaximize.next(value);
  }
  _onClose = new Subject();
  /**
   * Event triggered on dialog is closed.
   * @group Events
   */
  onClose = this._onClose.asObservable();
  _onDestroy = new Subject();
  /**
   * Event triggered on dialog instance is destroyed.
   * @group Events
   */
  onDestroy = this._onDestroy.asObservable();
  _onDragStart = new Subject();
  /**
   * Event triggered on drag start.
   * @param {MouseEvent} event - Mouse event.
   * @group Events
   */
  onDragStart = this._onDragStart.asObservable();
  _onDragEnd = new Subject();
  /**
   * Event triggered on drag end.
   * @param {MouseEvent} event - Mouse event.
   * @group Events
   */
  onDragEnd = this._onDragEnd.asObservable();
  _onResizeInit = new Subject();
  /**
   * Event triggered on resize start.
   * @param {MouseEvent} event - Mouse event.
   * @group Events
   */
  onResizeInit = this._onResizeInit.asObservable();
  _onResizeEnd = new Subject();
  /**
   * Event triggered on resize end.
   * @param {MouseEvent} event - Mouse event.
   * @group Events
   */
  onResizeEnd = this._onResizeEnd.asObservable();
  _onMaximize = new Subject();
  /**
   * Event triggered on dialog is maximized.
   * @param {*} value - Size value.
   * @group Events
   */
  onMaximize = this._onMaximize.asObservable();
  /**
   * Event triggered on child component load.
   * @param {*} value - Chi.
   * @group Events
   */
  onChildComponentLoaded = new Subject();
};
var DYNAMIC_DIALOG_INSTANCE = new InjectionToken("DYNAMIC_DIALOG_INSTANCE");
var DynamicDialog = class _DynamicDialog extends BaseComponent {
  ddconfig;
  dialogRef;
  _componentStyle = inject(DynamicDialogStyle);
  $pcDynamicDialog = inject(DYNAMIC_DIALOG_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  visible = true;
  componentRef;
  id = s2("pn_id_");
  insertionPoint;
  dialog;
  childComponentType;
  inputValues;
  get minX() {
    return this.ddconfig.minX ? this.ddconfig.minX : 0;
  }
  get minY() {
    return this.ddconfig.minY ? this.ddconfig.minY : 0;
  }
  get keepInViewport() {
    return this.ddconfig.keepInViewport;
  }
  get maximizable() {
    return this.ddconfig.maximizable;
  }
  get maximizeIcon() {
    return this.ddconfig.maximizeIcon;
  }
  get minimizeIcon() {
    return this.ddconfig.minimizeIcon;
  }
  get closable() {
    return this.ddconfig.closable;
  }
  get position() {
    return this.ddconfig.position;
  }
  get defaultCloseAriaLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)["close"];
  }
  get breakpoints() {
    return this.ddconfig.breakpoints;
  }
  get footerTemplate() {
    return this.ddconfig?.templates?.footer;
  }
  get headerTemplate() {
    return this.ddconfig?.templates?.header;
  }
  get contentTemplate() {
    return this.ddconfig?.templates?.content;
  }
  get minimizeIconTemplate() {
    return this.ddconfig?.templates?.minimizeicon;
  }
  get maximizeIconTemplate() {
    return this.ddconfig?.templates?.maximizeicon;
  }
  get closeIconTemplate() {
    return this.ddconfig?.templates?.closeicon;
  }
  get dialogStyle() {
    return __spreadValues(__spreadValues(__spreadValues({}, this.ddconfig?.style || {}), this.ddconfig?.width && {
      width: this.ddconfig.width
    }), this.ddconfig?.height && {
      height: this.ddconfig.height
    });
  }
  get header() {
    return this.ddconfig.header;
  }
  get data() {
    return this.ddconfig.data;
  }
  get dialogId() {
    return this.$attrSelector;
  }
  maximized;
  dragging;
  resizing;
  ariaLabelledBy;
  _style = {};
  styleElement;
  lastPageX;
  lastPageY;
  contentViewChild;
  footerViewChild;
  headerViewChild;
  maskViewChild;
  maskClickListener;
  documentDragListener;
  documentDragEndListener;
  documentResizeListener;
  documentResizeEndListener;
  documentEscapeListener;
  constructor(ddconfig, dialogRef) {
    super();
    this.ddconfig = ddconfig;
    this.dialogRef = dialogRef;
  }
  onAfterViewInit() {
    this.loadChildComponent(this.childComponentType);
    this.ariaLabelledBy = this.getAriaLabelledBy();
    this.cd.detectChanges();
  }
  getAriaLabelledBy() {
    const {
      header,
      showHeader
    } = this.ddconfig;
    if (header === null || showHeader === false) {
      return null;
    }
    return s2("pn_id_") + "_header";
  }
  loadChildComponent(componentType) {
    let viewContainerRef = this.insertionPoint?.viewContainerRef;
    viewContainerRef?.clear();
    this.componentRef = viewContainerRef?.createComponent(componentType);
    if (this.inputValues && this.componentRef) {
      Object.entries(this.inputValues).forEach(([key, value]) => {
        this.componentRef.setInput(key, value);
      });
    }
    this.dialogRef.onChildComponentLoaded.next(this.componentRef.instance);
  }
  onDialogHide(event) {
    this.dialogRef.destroy();
  }
  onDialogMaximize(event) {
    this.maximized = event.maximized;
    this.dialogRef.maximize(event);
  }
  onDialogResizeInit(event) {
    this.resizing = true;
    this.dialogRef.resizeInit(event);
  }
  onDialogResizeEnd(event) {
    this.resizing = false;
    this.dialogRef.resizeEnd(event);
  }
  onDialogDragEnd(event) {
    this.dragging = false;
    this.dialogRef.dragEnd(event);
  }
  close() {
    this.visible = false;
    this.cd.markForCheck();
  }
  hide() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
  get _parent() {
    const domElements = Array.from(this.document.getElementsByClassName("p-dialog"));
    if (domElements.length > 1) {
      return domElements.pop();
    }
  }
  get parentContent() {
    const domElements = Array.from(this.document.getElementsByClassName("p-dialog"));
    if (domElements.length > 0) {
      const contentElements = domElements[domElements.length - 1].querySelector(".p-dialog-content");
      if (contentElements) return Array.isArray(contentElements) ? contentElements[0] : contentElements;
    }
  }
  container;
  wrapper;
  unbindGlobalListeners() {
    this.unbindDocumentEscapeListener();
    this.unbindDocumentResizeListeners();
    this.unbindDocumentDragListener();
    this.unbindDocumentDragEndListener();
  }
  onAnimationStart(event) {
    if (event.toState === "visible") {
      if (this._parent) {
        this.unbindGlobalListeners();
      }
      if (this.ddconfig.modal) {
        this.enableModality();
      }
    }
  }
  onAnimationEnd(event) {
    if (event.toState === "void") {
      this.onContainerDestroy();
      this.dialogRef.destroy();
    }
  }
  onContainerDestroy() {
    this.unbindGlobalListeners();
    if (this.ddconfig.modal) {
      this.disableModality();
    }
    this.container = null;
  }
  bindDocumentDragListener() {
    if (!this.documentDragListener) {
      this.documentDragListener = this.renderer.listen(this.document.defaultView, "mousemove", (event) => {
        this.onDrag(event);
      });
    }
  }
  bindDocumentDragEndListener() {
    if (!this.documentDragEndListener) {
      this.documentDragEndListener = this.renderer.listen(this.document.defaultView, "mouseup", (event) => {
        this.endDrag(event);
      });
    }
  }
  unbindDocumentDragEndListener() {
    if (this.documentDragEndListener) {
      this.documentDragEndListener();
      this.documentDragEndListener = null;
    }
  }
  unbindDocumentDragListener() {
    if (this.documentDragListener) {
      this.documentDragListener();
      this.documentDragListener = null;
    }
  }
  initDrag(event) {
    if (event.target instanceof HTMLElement) {
      const target = event.target;
      if (target.closest(".p-dialog-header-icon") || target.closest(".p-dialog-header-icons")) {
        return;
      }
    }
    this.dragging = true;
    this.lastPageX = event.pageX;
    this.lastPageY = event.pageY;
    this.dialogRef.dragStart(event);
    this.bindDocumentDragListener();
    this.bindDocumentDragEndListener();
  }
  onDrag(event) {
    if (this.dragging) {
      this.lastPageX = event.pageX;
      this.lastPageY = event.pageY;
      if (this.ddconfig.keepInViewport && this.container) {
        this.container.style.position = "fixed";
      }
    }
  }
  endDrag(event) {
    if (this.dragging) {
      this.dragging = false;
      this.dialogRef.dragEnd(event);
      this.cd.detectChanges();
    }
  }
  resetPosition() {
    if (this.container) {
      this.container.style.position = "";
      this.container.style.left = "";
      this.container.style.top = "";
      this.container.style.margin = "";
    }
  }
  bindDocumentResizeListeners() {
    if (!this.documentResizeListener) {
      this.documentResizeListener = this.renderer.listen(this.document.defaultView, "mousemove", (event) => {
        this.onResize(event);
      });
    }
    if (!this.documentResizeEndListener) {
      this.documentResizeEndListener = this.renderer.listen(this.document.defaultView, "mouseup", (event) => {
        this.resizeEnd(event);
      });
    }
  }
  unbindDocumentResizeListeners() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
    if (this.documentResizeEndListener) {
      this.documentResizeEndListener();
      this.documentResizeEndListener = null;
    }
  }
  initResize(event) {
    this.resizing = true;
    this.lastPageX = event.pageX;
    this.lastPageY = event.pageY;
    this.dialogRef.resizeInit(event);
  }
  onResize(event) {
    if (this.resizing) {
      this.lastPageX = event.pageX;
      this.lastPageY = event.pageY;
    }
  }
  resizeEnd(event) {
    if (this.resizing) {
      this.resizing = false;
      this.dialogRef.resizeEnd(event);
    }
  }
  maximize() {
    this.maximized = !this.maximized;
    this.dialogRef.maximize({
      maximized: this.maximized
    });
  }
  enableModality() {
    if (this.ddconfig.dismissableMask && this.wrapper) {
      this.maskClickListener = this.renderer.listen(this.wrapper, "mousedown", (event) => {
        if (this.wrapper && this.wrapper.isSameNode(event.target)) {
          this.hide();
        }
      });
    }
  }
  disableModality() {
    this.unbindMaskClickListener();
    this.cd.detectChanges();
  }
  unbindMaskClickListener() {
    if (this.maskClickListener) {
      this.maskClickListener();
      this.maskClickListener = null;
    }
  }
  bindDocumentEscapeListener() {
    if (this.ddconfig.closeOnEscape) {
      this.documentEscapeListener = this.renderer.listen(this.document, "keydown", (event) => {
        if (event.key === "Escape" && this.container) {
          this.hide();
        }
      });
    }
  }
  unbindDocumentEscapeListener() {
    if (this.documentEscapeListener) {
      this.documentEscapeListener();
      this.documentEscapeListener = null;
    }
  }
  createStyle() {
    if (!this.styleElement && this.breakpoints) {
      this.styleElement = this.renderer.createElement("style");
      this.styleElement.type = "text/css";
      this.renderer.appendChild(this.document.head, this.styleElement);
      let innerHTML = "";
      for (let breakpoint in this.breakpoints) {
        innerHTML += `
                    @media screen and (max-width: ${breakpoint}) {
                        .p-dialog[${this.dialogId}] {
                            width: ${this.breakpoints[breakpoint]} !important;
                        }
                    }
                `;
      }
      this.renderer.setProperty(this.styleElement, "innerHTML", innerHTML);
    }
  }
  destroyStyle() {
    if (this.styleElement) {
      this.renderer.removeChild(this.document.head, this.styleElement);
      this.styleElement = null;
    }
  }
  onDestroy() {
    if (this.componentRef && typeof this.componentRef.destroy === "function") {
      this.componentRef.destroy();
    }
  }
  ngOnDestroy() {
    this.onContainerDestroy();
    if (this.componentRef && typeof this.componentRef.destroy === "function") {
      this.componentRef.destroy();
    }
    this.destroyStyle();
  }
  static \u0275fac = function DynamicDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DynamicDialog)(\u0275\u0275directiveInject(DynamicDialogConfig), \u0275\u0275directiveInject(DynamicDialogRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _DynamicDialog,
    selectors: [["p-dynamicDialog"], ["p-dynamicdialog"], ["p-dynamic-dialog"]],
    viewQuery: function DynamicDialog_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(DynamicDialogContent, 5);
        \u0275\u0275viewQuery(Dialog, 5);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.insertionPoint = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.dialog = _t2.first);
      }
    },
    features: [\u0275\u0275ProvidersFeature([DynamicDialogStyle, {
      provide: DYNAMIC_DIALOG_INSTANCE,
      useExisting: _DynamicDialog
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _DynamicDialog
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 9,
    vars: 42,
    consts: [["header", ""], ["content", ""], ["footer", ""], ["closeicon", ""], ["maximizeicon", ""], ["minimizeicon", ""], ["hostName", "DynamicDialog", 3, "visibleChange", "onHide", "onMaximize", "onResizeInit", "onResizeEnd", "onDragEnd", "visible", "header", "draggable", "resizable", "contentStyle", "modal", "closeOnEscape", "dismissableMask", "rtl", "closable", "breakpoints", "styleClass", "maskStyleClass", "showHeader", "autoZIndex", "baseZIndex", "minX", "minY", "focusOnShow", "maximizable", "keepInViewport", "focusTrap", "transitionOptions", "closeAriaLabel", "minimizeIcon", "maximizeIcon", "closeButtonProps", "maximizeButtonProps", "position", "pt"], [4, "ngIf"], [4, "ngComponentOutlet"], ["pDynamicDialogContent", ""]],
    template: function DynamicDialog_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p-dialog", 6);
        \u0275\u0275twoWayListener("visibleChange", function DynamicDialog_Template_p_dialog_visibleChange_0_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.visible, $event) || (ctx.visible = $event);
          return $event;
        });
        \u0275\u0275listener("onHide", function DynamicDialog_Template_p_dialog_onHide_0_listener($event) {
          return ctx.onDialogHide($event);
        })("onMaximize", function DynamicDialog_Template_p_dialog_onMaximize_0_listener($event) {
          return ctx.onDialogMaximize($event);
        })("onResizeInit", function DynamicDialog_Template_p_dialog_onResizeInit_0_listener($event) {
          return ctx.onDialogResizeInit($event);
        })("onResizeEnd", function DynamicDialog_Template_p_dialog_onResizeEnd_0_listener($event) {
          return ctx.onDialogResizeEnd($event);
        })("onDragEnd", function DynamicDialog_Template_p_dialog_onDragEnd_0_listener($event) {
          return ctx.onDialogDragEnd($event);
        });
        \u0275\u0275template(1, DynamicDialog_1_Template, 2, 0, null, 7)(2, DynamicDialog_2_Template, 2, 0, null, 7)(3, DynamicDialog_3_Template, 2, 0, null, 7)(4, DynamicDialog_4_Template, 2, 0, null, 7)(5, DynamicDialog_5_Template, 2, 0, null, 7)(6, DynamicDialog_6_Template, 2, 0, null, 7)(7, DynamicDialog_7_Template, 1, 0, null, 7)(8, DynamicDialog_div_8_Template, 2, 1, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.dialogStyle);
        \u0275\u0275twoWayProperty("visible", ctx.visible);
        \u0275\u0275property("header", ctx.ddconfig == null ? null : ctx.ddconfig.header)("draggable", (ctx.ddconfig == null ? null : ctx.ddconfig.draggable) !== false)("resizable", (ctx.ddconfig == null ? null : ctx.ddconfig.resizable) !== false)("contentStyle", ctx.ddconfig == null ? null : ctx.ddconfig.contentStyle)("modal", (ctx.ddconfig == null ? null : ctx.ddconfig.modal) !== false)("closeOnEscape", (ctx.ddconfig == null ? null : ctx.ddconfig.closeOnEscape) !== false)("dismissableMask", ctx.ddconfig == null ? null : ctx.ddconfig.dismissableMask)("rtl", ctx.ddconfig == null ? null : ctx.ddconfig.rtl)("closable", ctx.closable)("breakpoints", ctx.breakpoints)("styleClass", ctx.ddconfig == null ? null : ctx.ddconfig.styleClass)("maskStyleClass", ctx.ddconfig == null ? null : ctx.ddconfig.maskStyleClass)("showHeader", (ctx.ddconfig == null ? null : ctx.ddconfig.showHeader) !== false)("autoZIndex", (ctx.ddconfig == null ? null : ctx.ddconfig.autoZIndex) !== false)("baseZIndex", (ctx.ddconfig == null ? null : ctx.ddconfig.baseZIndex) || 0)("minX", ctx.minX)("minY", ctx.minY)("focusOnShow", (ctx.ddconfig == null ? null : ctx.ddconfig.focusOnShow) !== false)("maximizable", ctx.maximizable)("keepInViewport", ctx.keepInViewport)("focusTrap", (ctx.ddconfig == null ? null : ctx.ddconfig.focusTrap) !== false)("transitionOptions", (ctx.ddconfig == null ? null : ctx.ddconfig.transitionOptions) || "150ms cubic-bezier(0, 0, 0.2, 1)")("closeAriaLabel", (ctx.ddconfig == null ? null : ctx.ddconfig.closeAriaLabel) || ctx.defaultCloseAriaLabel)("minimizeIcon", ctx.minimizeIcon)("maximizeIcon", ctx.maximizeIcon)("closeButtonProps", \u0275\u0275pureFunction0(40, _c09))("maximizeButtonProps", \u0275\u0275pureFunction0(41, _c09))("position", ctx.position)("pt", ctx.ptm("pcDialog"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.headerTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.contentTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.footerTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.closeIconTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.maximizeIconTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.minimizeIconTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.contentTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ddconfig.footer && !ctx.footerTemplate);
      }
    },
    dependencies: [CommonModule, NgComponentOutlet, NgIf, SharedModule, DynamicDialogContent, Dialog, BindModule],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicDialog, [{
    type: Component,
    args: [{
      selector: "p-dynamicDialog, p-dynamicdialog, p-dynamic-dialog",
      standalone: true,
      imports: [CommonModule, SharedModule, DynamicDialogContent, Dialog, BindModule],
      template: `
        <p-dialog
            [(visible)]="visible"
            [header]="ddconfig?.header"
            [draggable]="ddconfig?.draggable !== false"
            [resizable]="ddconfig?.resizable !== false"
            [contentStyle]="ddconfig?.contentStyle"
            [modal]="ddconfig?.modal !== false"
            [closeOnEscape]="ddconfig?.closeOnEscape !== false"
            [dismissableMask]="ddconfig?.dismissableMask"
            [rtl]="ddconfig?.rtl"
            [closable]="closable"
            [breakpoints]="breakpoints"
            [styleClass]="ddconfig?.styleClass"
            [maskStyleClass]="ddconfig?.maskStyleClass"
            [showHeader]="ddconfig?.showHeader !== false"
            [autoZIndex]="ddconfig?.autoZIndex !== false"
            [baseZIndex]="ddconfig?.baseZIndex || 0"
            [minX]="minX"
            [minY]="minY"
            [focusOnShow]="ddconfig?.focusOnShow !== false"
            [maximizable]="maximizable"
            [keepInViewport]="keepInViewport"
            [focusTrap]="ddconfig?.focusTrap !== false"
            [transitionOptions]="ddconfig?.transitionOptions || '150ms cubic-bezier(0, 0, 0.2, 1)'"
            [closeAriaLabel]="ddconfig?.closeAriaLabel || defaultCloseAriaLabel"
            [minimizeIcon]="minimizeIcon"
            [maximizeIcon]="maximizeIcon"
            [closeButtonProps]="{ severity: 'secondary', variant: 'text', rounded: true }"
            [maximizeButtonProps]="{ severity: 'secondary', variant: 'text', rounded: true }"
            [style]="dialogStyle"
            [position]="position"
            (onHide)="onDialogHide($event)"
            (onMaximize)="onDialogMaximize($event)"
            (onResizeInit)="onDialogResizeInit($event)"
            (onResizeEnd)="onDialogResizeEnd($event)"
            (onDragEnd)="onDialogDragEnd($event)"
            [pt]="ptm('pcDialog')"
            hostName="DynamicDialog"
        >
            <ng-template #header *ngIf="headerTemplate">
                <ng-container *ngComponentOutlet="headerTemplate"></ng-container>
            </ng-template>
            <ng-template #content *ngIf="contentTemplate">
                <ng-container *ngComponentOutlet="contentTemplate"></ng-container>
            </ng-template>
            <ng-template #footer *ngIf="footerTemplate">
                <ng-container *ngComponentOutlet="footerTemplate"></ng-container>
            </ng-template>
            <ng-template #closeicon *ngIf="closeIconTemplate">
                <ng-container *ngComponentOutlet="closeIconTemplate"></ng-container>
            </ng-template>
            <ng-template #maximizeicon *ngIf="maximizeIconTemplate">
                <ng-container *ngComponentOutlet="maximizeIconTemplate"></ng-container>
            </ng-template>
            <ng-template #minimizeicon *ngIf="minimizeIconTemplate">
                <ng-container *ngComponentOutlet="minimizeIconTemplate"></ng-container>
            </ng-template>

            <ng-template pDynamicDialogContent *ngIf="!contentTemplate"></ng-template>
            <div *ngIf="ddconfig.footer && !footerTemplate">{{ ddconfig.footer }}</div>
        </p-dialog>
    `,
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      providers: [DynamicDialogStyle, {
        provide: DYNAMIC_DIALOG_INSTANCE,
        useExisting: DynamicDialog
      }, {
        provide: PARENT_INSTANCE,
        useExisting: DynamicDialog
      }],
      hostDirectives: [Bind]
    }]
  }], () => [{
    type: DynamicDialogConfig
  }, {
    type: DynamicDialogRef
  }], {
    insertionPoint: [{
      type: ViewChild,
      args: [DynamicDialogContent]
    }],
    dialog: [{
      type: ViewChild,
      args: [Dialog]
    }]
  });
})();
var DynamicDialogModule = class _DynamicDialogModule {
  static \u0275fac = function DynamicDialogModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DynamicDialogModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DynamicDialogModule,
    imports: [DynamicDialog, SharedModule],
    exports: [DynamicDialog, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [DynamicDialog, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicDialogModule, [{
    type: NgModule,
    args: [{
      imports: [DynamicDialog, SharedModule],
      exports: [DynamicDialog, SharedModule]
    }]
  }], null, null);
})();
var DynamicDialogInjector = class {
  _parentInjector;
  _additionalTokens;
  constructor(_parentInjector, _additionalTokens) {
    this._parentInjector = _parentInjector;
    this._additionalTokens = _additionalTokens;
  }
  get(token, notFoundValue, options) {
    const value = this._additionalTokens.get(token);
    if (value) return value;
    return this._parentInjector.get(token, notFoundValue);
  }
};
var DialogService = class _DialogService {
  appRef;
  injector;
  document;
  dialogComponentRefMap = /* @__PURE__ */ new Map();
  constructor(appRef, injector, document2) {
    this.appRef = appRef;
    this.injector = injector;
    this.document = document2;
  }
  /**
   * Displays the dialog using the dynamic dialog object options.
   * @param {*} componentType - Dynamic component for content template.
   * @param {DynamicDialogConfig} config - DynamicDialog object.
   * @returns {DynamicDialogRef} DynamicDialog instance.
   * @group Method
   */
  open(componentType, config) {
    if (!this.duplicationPermission(componentType, config)) {
      return null;
    }
    const dialogRef = this.appendDialogComponentToBody(config, componentType);
    const componentRefInstance = this.dialogComponentRefMap.get(dialogRef);
    if (componentRefInstance) {
      componentRefInstance.instance.childComponentType = componentType;
      componentRefInstance.instance.inputValues = config.inputValues || {};
    }
    return dialogRef;
  }
  /**
   * Returns the dynamic dialog component instance.
   * @param {DynamicDialogRef} ref - DynamicDialog instance.
   * @group Method
   */
  getInstance(ref) {
    return this.dialogComponentRefMap.get(ref)?.instance;
  }
  appendDialogComponentToBody(config, componentType) {
    const map = /* @__PURE__ */ new WeakMap();
    map.set(DynamicDialogConfig, config);
    const dialogRef = new DynamicDialogRef();
    map.set(DynamicDialogRef, dialogRef);
    const sub = dialogRef.onClose.subscribe(() => {
      this.dialogComponentRefMap.get(dialogRef)?.instance.close();
    });
    const destroySub = dialogRef.onDestroy.subscribe(() => {
      this.removeDialogComponentFromBody(dialogRef);
      destroySub.unsubscribe();
      sub.unsubscribe();
    });
    const componentRef = createComponent(DynamicDialog, {
      environmentInjector: this.appRef.injector,
      elementInjector: new DynamicDialogInjector(this.injector, map)
    });
    this.appRef.attachView(componentRef.hostView);
    const domElem = componentRef.hostView.rootNodes[0];
    if (!config.appendTo || config.appendTo === "body") {
      this.document.body.appendChild(domElem);
    } else {
      ut(config.appendTo, domElem);
    }
    this.dialogComponentRefMap.set(dialogRef, componentRef);
    return dialogRef;
  }
  removeDialogComponentFromBody(dialogRef) {
    if (!dialogRef || !this.dialogComponentRefMap.has(dialogRef)) {
      return;
    }
    const dialogComponentRef = this.dialogComponentRefMap.get(dialogRef);
    if (dialogComponentRef) {
      this.appRef.detachView(dialogComponentRef.hostView);
      dialogComponentRef.destroy();
      dialogComponentRef.changeDetectorRef.detectChanges();
    }
    this.dialogComponentRefMap.delete(dialogRef);
  }
  duplicationPermission(componentType, config) {
    if (config.duplicate) {
      return true;
    }
    let permission = true;
    for (const [key, value] of this.dialogComponentRefMap) {
      if (value.instance.childComponentType === componentType) {
        permission = false;
        break;
      }
    }
    return permission;
  }
  static \u0275fac = function DialogService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DialogService)(\u0275\u0275inject(ApplicationRef), \u0275\u0275inject(Injector), \u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DialogService,
    factory: _DialogService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogService, [{
    type: Injectable
  }], () => [{
    type: ApplicationRef
  }, {
    type: Injector
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();

// node_modules/@primeuix/styles/dist/checkbox/index.mjs
var style3 = "\n    .p-checkbox {\n        position: relative;\n        display: inline-flex;\n        user-select: none;\n        vertical-align: bottom;\n        width: dt('checkbox.width');\n        height: dt('checkbox.height');\n    }\n\n    .p-checkbox-input {\n        cursor: pointer;\n        appearance: none;\n        position: absolute;\n        inset-block-start: 0;\n        inset-inline-start: 0;\n        width: 100%;\n        height: 100%;\n        padding: 0;\n        margin: 0;\n        opacity: 0;\n        z-index: 1;\n        outline: 0 none;\n        border: 1px solid transparent;\n        border-radius: dt('checkbox.border.radius');\n    }\n\n    .p-checkbox-box {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-radius: dt('checkbox.border.radius');\n        border: 1px solid dt('checkbox.border.color');\n        background: dt('checkbox.background');\n        width: dt('checkbox.width');\n        height: dt('checkbox.height');\n        transition:\n            background dt('checkbox.transition.duration'),\n            color dt('checkbox.transition.duration'),\n            border-color dt('checkbox.transition.duration'),\n            box-shadow dt('checkbox.transition.duration'),\n            outline-color dt('checkbox.transition.duration');\n        outline-color: transparent;\n        box-shadow: dt('checkbox.shadow');\n    }\n\n    .p-checkbox-icon {\n        transition-duration: dt('checkbox.transition.duration');\n        color: dt('checkbox.icon.color');\n        font-size: dt('checkbox.icon.size');\n        width: dt('checkbox.icon.size');\n        height: dt('checkbox.icon.size');\n    }\n\n    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {\n        border-color: dt('checkbox.hover.border.color');\n    }\n\n    .p-checkbox-checked .p-checkbox-box {\n        border-color: dt('checkbox.checked.border.color');\n        background: dt('checkbox.checked.background');\n    }\n\n    .p-checkbox-checked .p-checkbox-icon {\n        color: dt('checkbox.icon.checked.color');\n    }\n\n    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {\n        background: dt('checkbox.checked.hover.background');\n        border-color: dt('checkbox.checked.hover.border.color');\n    }\n\n    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {\n        color: dt('checkbox.icon.checked.hover.color');\n    }\n\n    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {\n        border-color: dt('checkbox.focus.border.color');\n        box-shadow: dt('checkbox.focus.ring.shadow');\n        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');\n        outline-offset: dt('checkbox.focus.ring.offset');\n    }\n\n    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {\n        border-color: dt('checkbox.checked.focus.border.color');\n    }\n\n    .p-checkbox.p-invalid > .p-checkbox-box {\n        border-color: dt('checkbox.invalid.border.color');\n    }\n\n    .p-checkbox.p-variant-filled .p-checkbox-box {\n        background: dt('checkbox.filled.background');\n    }\n\n    .p-checkbox-checked.p-variant-filled .p-checkbox-box {\n        background: dt('checkbox.checked.background');\n    }\n\n    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {\n        background: dt('checkbox.checked.hover.background');\n    }\n\n    .p-checkbox.p-disabled {\n        opacity: 1;\n    }\n\n    .p-checkbox.p-disabled .p-checkbox-box {\n        background: dt('checkbox.disabled.background');\n        border-color: dt('checkbox.checked.disabled.border.color');\n    }\n\n    .p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {\n        color: dt('checkbox.icon.disabled.color');\n    }\n\n    .p-checkbox-sm,\n    .p-checkbox-sm .p-checkbox-box {\n        width: dt('checkbox.sm.width');\n        height: dt('checkbox.sm.height');\n    }\n\n    .p-checkbox-sm .p-checkbox-icon {\n        font-size: dt('checkbox.icon.sm.size');\n        width: dt('checkbox.icon.sm.size');\n        height: dt('checkbox.icon.sm.size');\n    }\n\n    .p-checkbox-lg,\n    .p-checkbox-lg .p-checkbox-box {\n        width: dt('checkbox.lg.width');\n        height: dt('checkbox.lg.height');\n    }\n\n    .p-checkbox-lg .p-checkbox-icon {\n        font-size: dt('checkbox.icon.lg.size');\n        width: dt('checkbox.icon.lg.size');\n        height: dt('checkbox.icon.lg.size');\n    }\n";

// node_modules/primeng/fesm2022/primeng-checkbox.mjs
var _c010 = ["icon"];
var _c12 = ["input"];
var _c22 = (a0, a1) => ({
  checked: a0,
  class: a1
});
function Checkbox_ng_container_3_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("icon"));
    \u0275\u0275property("ngClass", ctx_r1.checkboxIcon)("pBind", ctx_r1.ptm("icon"));
  }
}
function Checkbox_ng_container_3_ng_container_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("icon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("icon"));
  }
}
function Checkbox_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Checkbox_ng_container_3_ng_container_1_span_1_Template, 1, 4, "span", 6)(2, Checkbox_ng_container_3_ng_container_1__svg_svg_2_Template, 1, 3, "svg", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.checkboxIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.checkboxIcon);
  }
}
function Checkbox_ng_container_3__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("icon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("icon"));
  }
}
function Checkbox_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Checkbox_ng_container_3_ng_container_1_Template, 3, 2, "ng-container", 3)(2, Checkbox_ng_container_3__svg_svg_2_Template, 1, 3, "svg", 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.checked);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1._indeterminate());
  }
}
function Checkbox_4_ng_template_0_Template(rf, ctx) {
}
function Checkbox_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Checkbox_4_ng_template_0_Template, 0, 0, "ng-template");
  }
}
var style4 = (
  /*css*/
  `
    ${style3}

    /* For PrimeNG */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`
);
var classes2 = {
  root: ({
    instance
  }) => ["p-checkbox p-component", {
    "p-checkbox-checked p-highlight": instance.checked,
    "p-disabled": instance.$disabled(),
    "p-invalid": instance.invalid(),
    "p-variant-filled": instance.$variant() === "filled",
    "p-checkbox-sm p-inputfield-sm": instance.size() === "small",
    "p-checkbox-lg p-inputfield-lg": instance.size() === "large"
  }],
  box: "p-checkbox-box",
  input: "p-checkbox-input",
  icon: "p-checkbox-icon"
};
var CheckboxStyle = class _CheckboxStyle extends BaseStyle {
  name = "checkbox";
  style = style4;
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckboxStyle_BaseFactory;
    return function CheckboxStyle_Factory(__ngFactoryType__) {
      return (\u0275CheckboxStyle_BaseFactory || (\u0275CheckboxStyle_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxStyle)))(__ngFactoryType__ || _CheckboxStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _CheckboxStyle,
    factory: _CheckboxStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxStyle, [{
    type: Injectable
  }], null, null);
})();
var CheckboxClasses;
(function(CheckboxClasses2) {
  CheckboxClasses2["root"] = "p-checkbox";
  CheckboxClasses2["box"] = "p-checkbox-box";
  CheckboxClasses2["input"] = "p-checkbox-input";
  CheckboxClasses2["icon"] = "p-checkbox-icon";
})(CheckboxClasses || (CheckboxClasses = {}));
var CHECKBOX_INSTANCE = new InjectionToken("CHECKBOX_INSTANCE");
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Checkbox),
  multi: true
};
var Checkbox = class _Checkbox extends BaseEditableHolder {
  hostName = "";
  /**
   * Value of the checkbox.
   * @group Props
   */
  value;
  /**
   * Allows to select a boolean value instead of multiple values.
   * @group Props
   */
  binary;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Used to define a string that labels the input element.
   * @group Props
   */
  ariaLabel;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Inline style of the input element.
   * @group Props
   */
  inputStyle;
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the input element.
   * @group Props
   */
  inputClass;
  /**
   * When present, it specifies input state as indeterminate.
   * @group Props
   */
  indeterminate = false;
  /**
   * Form control value.
   * @group Props
   */
  formControl;
  /**
   * Icon class of the checkbox icon.
   * @group Props
   */
  checkboxIcon;
  /**
   * When present, it specifies that the component cannot be edited.
   * @group Props
   */
  readonly;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Value in checked state.
   * @group Props
   */
  trueValue = true;
  /**
   * Value in unchecked state.
   * @group Props
   */
  falseValue = false;
  /**
   * Specifies the input variant of the component.
   * @defaultValue undefined
   * @group Props
   */
  variant = input(...ngDevMode ? [void 0, {
    debugName: "variant"
  }] : []);
  /**
   * Specifies the size of the component.
   * @defaultValue undefined
   * @group Props
   */
  size = input(...ngDevMode ? [void 0, {
    debugName: "size"
  }] : []);
  /**
   * Callback to invoke on value change.
   * @param {CheckboxChangeEvent} event - Custom value change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke when the receives focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  inputViewChild;
  get checked() {
    return this._indeterminate() ? false : this.binary ? this.modelValue() === this.trueValue : q(this.value, this.modelValue());
  }
  _indeterminate = signal(void 0, ...ngDevMode ? [{
    debugName: "_indeterminate"
  }] : []);
  /**
   * The template of the checkbox icon.
   * @group Templates
   */
  checkboxIconTemplate;
  templates;
  _checkboxIconTemplate;
  focused = false;
  _componentStyle = inject(CheckboxStyle);
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  $pcCheckbox = inject(CHECKBOX_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  $variant = computed(() => this.variant() || this.config.inputStyle() || this.config.inputVariant(), ...ngDevMode ? [{
    debugName: "$variant"
  }] : []);
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "icon":
          this._checkboxIconTemplate = item.template;
          break;
        case "checkboxicon":
          this._checkboxIconTemplate = item.template;
          break;
      }
    });
  }
  onChanges(changes) {
    if (changes.indeterminate) {
      this._indeterminate.set(changes.indeterminate.currentValue);
    }
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  updateModel(event) {
    let newModelValue;
    const selfControl = this.injector.get(NgControl, null, {
      optional: true,
      self: true
    });
    const currentModelValue = selfControl && !this.formControl ? selfControl.value : this.modelValue();
    if (!this.binary) {
      if (this.checked || this._indeterminate()) newModelValue = currentModelValue.filter((val) => !k(val, this.value));
      else newModelValue = currentModelValue ? [...currentModelValue, this.value] : [this.value];
      this.onModelChange(newModelValue);
      this.writeModelValue(newModelValue);
      if (this.formControl) {
        this.formControl.setValue(newModelValue);
      }
    } else {
      newModelValue = this._indeterminate() ? this.trueValue : this.checked ? this.falseValue : this.trueValue;
      this.writeModelValue(newModelValue);
      this.onModelChange(newModelValue);
    }
    if (this._indeterminate()) {
      this._indeterminate.set(false);
    }
    this.onChange.emit({
      checked: newModelValue,
      originalEvent: event
    });
  }
  handleChange(event) {
    if (!this.readonly) {
      this.updateModel(event);
    }
  }
  onInputFocus(event) {
    this.focused = true;
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    this.onBlur.emit(event);
    this.onModelTouched();
  }
  focus() {
    this.inputViewChild?.nativeElement.focus();
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    setModelValue(value);
    this.cd.markForCheck();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Checkbox_BaseFactory;
    return function Checkbox_Factory(__ngFactoryType__) {
      return (\u0275Checkbox_BaseFactory || (\u0275Checkbox_BaseFactory = \u0275\u0275getInheritedFactory(_Checkbox)))(__ngFactoryType__ || _Checkbox);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Checkbox,
    selectors: [["p-checkbox"], ["p-checkBox"], ["p-check-box"]],
    contentQueries: function Checkbox_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c010, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.checkboxIconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.templates = _t2);
      }
    },
    viewQuery: function Checkbox_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c12, 5);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.inputViewChild = _t2.first);
      }
    },
    hostVars: 5,
    hostBindings: function Checkbox_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-p-highlight", ctx.checked)("data-p-checked", ctx.checked)("data-p-disabled", ctx.$disabled());
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      hostName: "hostName",
      value: "value",
      binary: [2, "binary", "binary", booleanAttribute],
      ariaLabelledBy: "ariaLabelledBy",
      ariaLabel: "ariaLabel",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      inputId: "inputId",
      inputStyle: "inputStyle",
      styleClass: "styleClass",
      inputClass: "inputClass",
      indeterminate: [2, "indeterminate", "indeterminate", booleanAttribute],
      formControl: "formControl",
      checkboxIcon: "checkboxIcon",
      readonly: [2, "readonly", "readonly", booleanAttribute],
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      trueValue: "trueValue",
      falseValue: "falseValue",
      variant: [1, "variant"],
      size: [1, "size"]
    },
    outputs: {
      onChange: "onChange",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [\u0275\u0275ProvidersFeature([CHECKBOX_VALUE_ACCESSOR, CheckboxStyle, {
      provide: CHECKBOX_INSTANCE,
      useExisting: _Checkbox
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Checkbox
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 5,
    vars: 24,
    consts: [["input", ""], ["type", "checkbox", 3, "focus", "blur", "change", "checked", "pBind"], [3, "pBind"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["data-p-icon", "minus", 3, "class", "pBind", 4, "ngIf"], [3, "class", "ngClass", "pBind", 4, "ngIf"], ["data-p-icon", "check", 3, "class", "pBind", 4, "ngIf"], [3, "ngClass", "pBind"], ["data-p-icon", "check", 3, "pBind"], ["data-p-icon", "minus", 3, "pBind"]],
    template: function Checkbox_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "input", 1, 0);
        \u0275\u0275listener("focus", function Checkbox_Template_input_focus_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputFocus($event));
        })("blur", function Checkbox_Template_input_blur_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputBlur($event));
        })("change", function Checkbox_Template_input_change_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.handleChange($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275template(3, Checkbox_ng_container_3_Template, 3, 2, "ng-container", 3)(4, Checkbox_4_Template, 1, 0, null, 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.inputStyle);
        \u0275\u0275classMap(ctx.cn(ctx.cx("input"), ctx.inputClass));
        \u0275\u0275property("checked", ctx.checked)("pBind", ctx.ptm("input"));
        \u0275\u0275attribute("id", ctx.inputId)("value", ctx.value)("name", ctx.name())("tabindex", ctx.tabindex)("required", ctx.required() ? "" : void 0)("readonly", ctx.readonly ? "" : void 0)("disabled", ctx.$disabled() ? "" : void 0)("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel);
        \u0275\u0275advance(2);
        \u0275\u0275classMap(ctx.cx("box"));
        \u0275\u0275property("pBind", ctx.ptm("box"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.checkboxIconTemplate && !ctx._checkboxIconTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.checkboxIconTemplate || ctx._checkboxIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(21, _c22, ctx.checked, ctx.cx("icon")));
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, SharedModule, CheckIcon, MinusIcon, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Checkbox, [{
    type: Component,
    args: [{
      selector: "p-checkbox, p-checkBox, p-check-box",
      standalone: true,
      imports: [CommonModule, SharedModule, CheckIcon, MinusIcon, BindModule],
      template: `
        <input
            #input
            [attr.id]="inputId"
            type="checkbox"
            [attr.value]="value"
            [attr.name]="name()"
            [checked]="checked"
            [attr.tabindex]="tabindex"
            [attr.required]="required() ? '' : undefined"
            [attr.readonly]="readonly ? '' : undefined"
            [attr.disabled]="$disabled() ? '' : undefined"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-label]="ariaLabel"
            [style]="inputStyle"
            [class]="cn(cx('input'), inputClass)"
            [pBind]="ptm('input')"
            (focus)="onInputFocus($event)"
            (blur)="onInputBlur($event)"
            (change)="handleChange($event)"
        />
        <div [class]="cx('box')" [pBind]="ptm('box')">
            <ng-container *ngIf="!checkboxIconTemplate && !_checkboxIconTemplate">
                <ng-container *ngIf="checked">
                    <span *ngIf="checkboxIcon" [class]="cx('icon')" [ngClass]="checkboxIcon" [pBind]="ptm('icon')"></span>
                    <svg data-p-icon="check" *ngIf="!checkboxIcon" [class]="cx('icon')" [pBind]="ptm('icon')" />
                </ng-container>
                <svg data-p-icon="minus" *ngIf="_indeterminate()" [class]="cx('icon')" [pBind]="ptm('icon')" />
            </ng-container>
            <ng-template *ngTemplateOutlet="checkboxIconTemplate || _checkboxIconTemplate; context: { checked: checked, class: cx('icon') }"></ng-template>
        </div>
    `,
      providers: [CHECKBOX_VALUE_ACCESSOR, CheckboxStyle, {
        provide: CHECKBOX_INSTANCE,
        useExisting: Checkbox
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Checkbox
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[attr.data-p-highlight]": "checked",
        "[attr.data-p-checked]": "checked",
        "[attr.data-p-disabled]": "$disabled()"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    hostName: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    binary: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    inputId: [{
      type: Input
    }],
    inputStyle: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    inputClass: [{
      type: Input
    }],
    indeterminate: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    formControl: [{
      type: Input
    }],
    checkboxIcon: [{
      type: Input
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    trueValue: [{
      type: Input
    }],
    falseValue: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    inputViewChild: [{
      type: ViewChild,
      args: ["input"]
    }],
    checkboxIconTemplate: [{
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
var CheckboxModule = class _CheckboxModule {
  static \u0275fac = function CheckboxModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CheckboxModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CheckboxModule,
    imports: [Checkbox, SharedModule],
    exports: [Checkbox, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Checkbox, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [Checkbox, SharedModule],
      exports: [Checkbox, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/inputnumber/index.mjs
var style5 = "\n    .p-inputnumber {\n        display: inline-flex;\n        position: relative;\n    }\n\n    .p-inputnumber-button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex: 0 0 auto;\n        cursor: pointer;\n        background: dt('inputnumber.button.background');\n        color: dt('inputnumber.button.color');\n        width: dt('inputnumber.button.width');\n        transition:\n            background dt('inputnumber.transition.duration'),\n            color dt('inputnumber.transition.duration'),\n            border-color dt('inputnumber.transition.duration'),\n            outline-color dt('inputnumber.transition.duration');\n    }\n\n    .p-inputnumber-button:disabled {\n        cursor: auto;\n    }\n\n    .p-inputnumber-button:not(:disabled):hover {\n        background: dt('inputnumber.button.hover.background');\n        color: dt('inputnumber.button.hover.color');\n    }\n\n    .p-inputnumber-button:not(:disabled):active {\n        background: dt('inputnumber.button.active.background');\n        color: dt('inputnumber.button.active.color');\n    }\n\n    .p-inputnumber-stacked .p-inputnumber-button {\n        position: relative;\n        flex: 1 1 auto;\n        border: 0 none;\n    }\n\n    .p-inputnumber-stacked .p-inputnumber-button-group {\n        display: flex;\n        flex-direction: column;\n        position: absolute;\n        inset-block-start: 1px;\n        inset-inline-end: 1px;\n        height: calc(100% - 2px);\n        z-index: 1;\n    }\n\n    .p-inputnumber-stacked .p-inputnumber-increment-button {\n        padding: 0;\n        border-start-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);\n    }\n\n    .p-inputnumber-stacked .p-inputnumber-decrement-button {\n        padding: 0;\n        border-end-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);\n    }\n\n    .p-inputnumber-stacked .p-inputnumber-input {\n        padding-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));\n    }\n\n    .p-inputnumber-horizontal .p-inputnumber-button {\n        border: 1px solid dt('inputnumber.button.border.color');\n    }\n\n    .p-inputnumber-horizontal .p-inputnumber-button:hover {\n        border-color: dt('inputnumber.button.hover.border.color');\n    }\n\n    .p-inputnumber-horizontal .p-inputnumber-button:active {\n        border-color: dt('inputnumber.button.active.border.color');\n    }\n\n    .p-inputnumber-horizontal .p-inputnumber-increment-button {\n        order: 3;\n        border-start-end-radius: dt('inputnumber.button.border.radius');\n        border-end-end-radius: dt('inputnumber.button.border.radius');\n        border-inline-start: 0 none;\n    }\n\n    .p-inputnumber-horizontal .p-inputnumber-input {\n        order: 2;\n        border-radius: 0;\n    }\n\n    .p-inputnumber-horizontal .p-inputnumber-decrement-button {\n        order: 1;\n        border-start-start-radius: dt('inputnumber.button.border.radius');\n        border-end-start-radius: dt('inputnumber.button.border.radius');\n        border-inline-end: 0 none;\n    }\n\n    .p-floatlabel:has(.p-inputnumber-horizontal) label {\n        margin-inline-start: dt('inputnumber.button.width');\n    }\n\n    .p-inputnumber-vertical {\n        flex-direction: column;\n    }\n\n    .p-inputnumber-vertical .p-inputnumber-button {\n        border: 1px solid dt('inputnumber.button.border.color');\n        padding: dt('inputnumber.button.vertical.padding');\n    }\n\n    .p-inputnumber-vertical .p-inputnumber-button:hover {\n        border-color: dt('inputnumber.button.hover.border.color');\n    }\n\n    .p-inputnumber-vertical .p-inputnumber-button:active {\n        border-color: dt('inputnumber.button.active.border.color');\n    }\n\n    .p-inputnumber-vertical .p-inputnumber-increment-button {\n        order: 1;\n        border-start-start-radius: dt('inputnumber.button.border.radius');\n        border-start-end-radius: dt('inputnumber.button.border.radius');\n        width: 100%;\n        border-block-end: 0 none;\n    }\n\n    .p-inputnumber-vertical .p-inputnumber-input {\n        order: 2;\n        border-radius: 0;\n        text-align: center;\n    }\n\n    .p-inputnumber-vertical .p-inputnumber-decrement-button {\n        order: 3;\n        border-end-start-radius: dt('inputnumber.button.border.radius');\n        border-end-end-radius: dt('inputnumber.button.border.radius');\n        width: 100%;\n        border-block-start: 0 none;\n    }\n\n    .p-inputnumber-input {\n        flex: 1 1 auto;\n    }\n\n    .p-inputnumber-fluid {\n        width: 100%;\n    }\n\n    .p-inputnumber-fluid .p-inputnumber-input {\n        width: 1%;\n    }\n\n    .p-inputnumber-fluid.p-inputnumber-vertical .p-inputnumber-input {\n        width: 100%;\n    }\n\n    .p-inputnumber:has(.p-inputtext-sm) .p-inputnumber-button .p-icon {\n        font-size: dt('form.field.sm.font.size');\n        width: dt('form.field.sm.font.size');\n        height: dt('form.field.sm.font.size');\n    }\n\n    .p-inputnumber:has(.p-inputtext-lg) .p-inputnumber-button .p-icon {\n        font-size: dt('form.field.lg.font.size');\n        width: dt('form.field.lg.font.size');\n        height: dt('form.field.lg.font.size');\n    }\n\n    .p-inputnumber-clear-icon {\n        position: absolute;\n        top: 50%;\n        margin-top: -0.5rem;\n        cursor: pointer;\n        inset-inline-end: dt('form.field.padding.x');\n        color: dt('form.field.icon.color');\n    }\n\n    .p-inputnumber:has(.p-inputnumber-clear-icon) .p-inputnumber-input {\n        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));\n    }\n\n    .p-inputnumber-stacked .p-inputnumber-clear-icon {\n        inset-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));\n    }\n\n    .p-inputnumber-stacked:has(.p-inputnumber-clear-icon) .p-inputnumber-input {\n        padding-inline-end: calc(dt('inputnumber.button.width') + (dt('form.field.padding.x') * 2) + dt('icon.size'));\n    }\n\n    .p-inputnumber-horizontal .p-inputnumber-clear-icon {\n        inset-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));\n    }\n";

// node_modules/primeng/fesm2022/primeng-inputnumber.mjs
var _c011 = ["clearicon"];
var _c13 = ["incrementbuttonicon"];
var _c23 = ["decrementbuttonicon"];
var _c32 = ["input"];
function InputNumber_ng_container_2__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 7);
    \u0275\u0275listener("click", function InputNumber_ng_container_2__svg_svg_1_Template_svg_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clear());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.cx("clearIcon"));
    \u0275\u0275property("pBind", ctx_r2.ptm("clearIcon"));
  }
}
function InputNumber_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function InputNumber_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InputNumber_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275listener("click", function InputNumber_ng_container_2_span_2_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clear());
    });
    \u0275\u0275template(1, InputNumber_ng_container_2_span_2_1_Template, 1, 0, null, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.cx("clearIcon"));
    \u0275\u0275property("pBind", ctx_r2.ptm("clearIcon"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.clearIconTemplate || ctx_r2._clearIconTemplate);
  }
}
function InputNumber_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InputNumber_ng_container_2__svg_svg_1_Template, 1, 3, "svg", 5)(2, InputNumber_ng_container_2_span_2_Template, 2, 4, "span", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.clearIconTemplate && !ctx_r2._clearIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.clearIconTemplate || ctx_r2._clearIconTemplate);
  }
}
function InputNumber_span_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("pBind", ctx_r2.ptm("incrementButtonIcon"))("ngClass", ctx_r2.incrementButtonIcon);
  }
}
function InputNumber_span_3_ng_container_3__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 15);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("pBind", ctx_r2.ptm("incrementButtonIcon"));
  }
}
function InputNumber_span_3_ng_container_3_2_ng_template_0_Template(rf, ctx) {
}
function InputNumber_span_3_ng_container_3_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InputNumber_span_3_ng_container_3_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_span_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InputNumber_span_3_ng_container_3__svg_svg_1_Template, 1, 1, "svg", 14)(2, InputNumber_span_3_ng_container_3_2_Template, 1, 0, null, 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.incrementButtonIconTemplate && !ctx_r2._incrementButtonIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.incrementButtonIconTemplate || ctx_r2._incrementButtonIconTemplate);
  }
}
function InputNumber_span_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("pBind", ctx_r2.ptm("decrementButtonIcon"))("ngClass", ctx_r2.decrementButtonIcon);
  }
}
function InputNumber_span_3_ng_container_6__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 17);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("pBind", ctx_r2.ptm("decrementButtonIcon"));
  }
}
function InputNumber_span_3_ng_container_6_2_ng_template_0_Template(rf, ctx) {
}
function InputNumber_span_3_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InputNumber_span_3_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_span_3_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InputNumber_span_3_ng_container_6__svg_svg_1_Template, 1, 1, "svg", 16)(2, InputNumber_span_3_ng_container_6_2_Template, 1, 0, null, 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.decrementButtonIconTemplate && !ctx_r2._decrementButtonIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.decrementButtonIconTemplate || ctx_r2._decrementButtonIconTemplate);
  }
}
function InputNumber_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 10)(1, "button", 11);
    \u0275\u0275listener("mousedown", function InputNumber_span_3_Template_button_mousedown_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonMouseDown($event));
    })("mouseup", function InputNumber_span_3_Template_button_mouseup_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonMouseUp());
    })("mouseleave", function InputNumber_span_3_Template_button_mouseleave_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonMouseLeave());
    })("keydown", function InputNumber_span_3_Template_button_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonKeyDown($event));
    })("keyup", function InputNumber_span_3_Template_button_keyup_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonKeyUp());
    });
    \u0275\u0275template(2, InputNumber_span_3_span_2_Template, 1, 2, "span", 12)(3, InputNumber_span_3_ng_container_3_Template, 3, 2, "ng-container", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 11);
    \u0275\u0275listener("mousedown", function InputNumber_span_3_Template_button_mousedown_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonMouseDown($event));
    })("mouseup", function InputNumber_span_3_Template_button_mouseup_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonMouseUp());
    })("mouseleave", function InputNumber_span_3_Template_button_mouseleave_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonMouseLeave());
    })("keydown", function InputNumber_span_3_Template_button_keydown_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonKeyDown($event));
    })("keyup", function InputNumber_span_3_Template_button_keyup_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonKeyUp());
    });
    \u0275\u0275template(5, InputNumber_span_3_span_5_Template, 1, 2, "span", 12)(6, InputNumber_span_3_ng_container_6_Template, 3, 2, "ng-container", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.cx("buttonGroup"));
    \u0275\u0275property("pBind", ctx_r2.ptm("buttonGroup"));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.cn(ctx_r2.cx("incrementButton"), ctx_r2.incrementButtonClass));
    \u0275\u0275property("pBind", ctx_r2.ptm("incrementButton"));
    \u0275\u0275attribute("disabled", ctx_r2.$disabled() ? "" : void 0)("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.incrementButtonIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.incrementButtonIcon);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.cn(ctx_r2.cx("decrementButton"), ctx_r2.decrementButtonClass));
    \u0275\u0275property("pBind", ctx_r2.ptm("decrementButton"));
    \u0275\u0275attribute("disabled", ctx_r2.$disabled() ? "" : void 0)("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.decrementButtonIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.decrementButtonIcon);
  }
}
function InputNumber_button_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("pBind", ctx_r2.ptm("incrementButtonIcon"))("ngClass", ctx_r2.incrementButtonIcon);
  }
}
function InputNumber_button_4_ng_container_2__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 15);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("pBind", ctx_r2.ptm("incrementButtonIcon"));
  }
}
function InputNumber_button_4_ng_container_2_2_ng_template_0_Template(rf, ctx) {
}
function InputNumber_button_4_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InputNumber_button_4_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_button_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InputNumber_button_4_ng_container_2__svg_svg_1_Template, 1, 1, "svg", 14)(2, InputNumber_button_4_ng_container_2_2_Template, 1, 0, null, 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.incrementButtonIconTemplate && !ctx_r2._incrementButtonIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.incrementButtonIconTemplate || ctx_r2._incrementButtonIconTemplate);
  }
}
function InputNumber_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("mousedown", function InputNumber_button_4_Template_button_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonMouseDown($event));
    })("mouseup", function InputNumber_button_4_Template_button_mouseup_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonMouseUp());
    })("mouseleave", function InputNumber_button_4_Template_button_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonMouseLeave());
    })("keydown", function InputNumber_button_4_Template_button_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonKeyDown($event));
    })("keyup", function InputNumber_button_4_Template_button_keyup_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonKeyUp());
    });
    \u0275\u0275template(1, InputNumber_button_4_span_1_Template, 1, 2, "span", 12)(2, InputNumber_button_4_ng_container_2_Template, 3, 2, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.cn(ctx_r2.cx("incrementButton"), ctx_r2.incrementButtonClass));
    \u0275\u0275property("pBind", ctx_r2.ptm("incrementButton"));
    \u0275\u0275attribute("disabled", ctx_r2.$disabled() ? "" : void 0)("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.incrementButtonIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.incrementButtonIcon);
  }
}
function InputNumber_button_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("pBind", ctx_r2.ptm("decrementButtonIcon"))("ngClass", ctx_r2.decrementButtonIcon);
  }
}
function InputNumber_button_5_ng_container_2__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 17);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("pBind", ctx_r2.ptm("decrementButtonIcon"));
  }
}
function InputNumber_button_5_ng_container_2_2_ng_template_0_Template(rf, ctx) {
}
function InputNumber_button_5_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InputNumber_button_5_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_button_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InputNumber_button_5_ng_container_2__svg_svg_1_Template, 1, 1, "svg", 16)(2, InputNumber_button_5_ng_container_2_2_Template, 1, 0, null, 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.decrementButtonIconTemplate && !ctx_r2._decrementButtonIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.decrementButtonIconTemplate || ctx_r2._decrementButtonIconTemplate);
  }
}
function InputNumber_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("mousedown", function InputNumber_button_5_Template_button_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonMouseDown($event));
    })("mouseup", function InputNumber_button_5_Template_button_mouseup_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonMouseUp());
    })("mouseleave", function InputNumber_button_5_Template_button_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonMouseLeave());
    })("keydown", function InputNumber_button_5_Template_button_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonKeyDown($event));
    })("keyup", function InputNumber_button_5_Template_button_keyup_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonKeyUp());
    });
    \u0275\u0275template(1, InputNumber_button_5_span_1_Template, 1, 2, "span", 12)(2, InputNumber_button_5_ng_container_2_Template, 3, 2, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.cn(ctx_r2.cx("decrementButton"), ctx_r2.decrementButtonClass));
    \u0275\u0275property("pBind", ctx_r2.ptm("decrementButton"));
    \u0275\u0275attribute("disabled", ctx_r2.$disabled() ? "" : void 0)("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.decrementButtonIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.decrementButtonIcon);
  }
}
var style6 = (
  /*css*/
  `
    ${style5}

    /* For PrimeNG */
    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext {
        border-color: dt('inputtext.invalid.border.color');
    }

    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
    }

    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext::placeholder,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext::placeholder,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`
);
var classes3 = {
  root: ({
    instance
  }) => ["p-inputnumber p-component p-inputwrapper", {
    "p-inputwrapper-filled": instance.$filled() || instance.allowEmpty === false,
    "p-inputwrapper-focus": instance.focused,
    "p-inputnumber-stacked": instance.showButtons && instance.buttonLayout === "stacked",
    "p-inputnumber-horizontal": instance.showButtons && instance.buttonLayout === "horizontal",
    "p-inputnumber-vertical": instance.showButtons && instance.buttonLayout === "vertical",
    "p-inputnumber-fluid": instance.hasFluid,
    "p-invalid": instance.invalid()
  }],
  pcInputText: "p-inputnumber-input",
  buttonGroup: "p-inputnumber-button-group",
  incrementButton: ({
    instance
  }) => ["p-inputnumber-button p-inputnumber-increment-button", {
    "p-disabled": instance.showButtons && instance.max() != null && instance.maxlength()
  }],
  decrementButton: ({
    instance
  }) => ["p-inputnumber-button p-inputnumber-decrement-button", {
    "p-disabled": instance.showButtons && instance.min() != null && instance.minlength()
  }],
  clearIcon: "p-inputnumber-clear-icon"
};
var InputNumberStyle = class _InputNumberStyle extends BaseStyle {
  name = "inputnumber";
  style = style6;
  classes = classes3;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InputNumberStyle_BaseFactory;
    return function InputNumberStyle_Factory(__ngFactoryType__) {
      return (\u0275InputNumberStyle_BaseFactory || (\u0275InputNumberStyle_BaseFactory = \u0275\u0275getInheritedFactory(_InputNumberStyle)))(__ngFactoryType__ || _InputNumberStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InputNumberStyle,
    factory: _InputNumberStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputNumberStyle, [{
    type: Injectable
  }], null, null);
})();
var InputNumberClasses;
(function(InputNumberClasses2) {
  InputNumberClasses2["root"] = "p-inputnumber";
  InputNumberClasses2["pcInputText"] = "p-inputnumber-input";
  InputNumberClasses2["buttonGroup"] = "p-inputnumber-button-group";
  InputNumberClasses2["incrementButton"] = "p-inputnumber-increment-button";
  InputNumberClasses2["decrementButton"] = "p-inputnumber-decrement-button";
  InputNumberClasses2["clearIcon"] = "p-autocomplete-clear-icon";
})(InputNumberClasses || (InputNumberClasses = {}));
var INPUTNUMBER_INSTANCE = new InjectionToken("INPUTNUMBER_INSTANCE");
var INPUTNUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputNumber),
  multi: true
};
var InputNumber = class _InputNumber extends BaseInput {
  injector;
  $pcInputNumber = inject(INPUTNUMBER_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  _componentStyle = inject(InputNumberStyle);
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Displays spinner buttons.
   * @group Props
   */
  showButtons = false;
  /**
   * Whether to format the value.
   * @group Props
   */
  format = true;
  /**
   * Layout of the buttons, valid values are "stacked" (default), "horizontal" and "vertical".
   * @group Props
   */
  buttonLayout = "stacked";
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Advisory information to display on input.
   * @group Props
   */
  placeholder;
  /**
   * Specifies tab order of the element.
   * @group Props
   */
  tabindex;
  /**
   * Title text of the input text.
   * @group Props
   */
  title;
  /**
   * Specifies one or more IDs in the DOM that labels the input field.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Specifies one or more IDs in the DOM that describes the input field.
   * @group Props
   */
  ariaDescribedBy;
  /**
   * Used to define a string that labels the input element.
   * @group Props
   */
  ariaLabel;
  /**
   * Used to indicate that user input is required on an element before a form can be submitted.
   * @group Props
   */
  ariaRequired;
  /**
   * Used to define a string that autocomplete attribute the current element.
   * @group Props
   */
  autocomplete;
  /**
   * Style class of the increment button.
   * @group Props
   */
  incrementButtonClass;
  /**
   * Style class of the decrement button.
   * @group Props
   */
  decrementButtonClass;
  /**
   * Style class of the increment button.
   * @group Props
   */
  incrementButtonIcon;
  /**
   * Style class of the decrement button.
   * @group Props
   */
  decrementButtonIcon;
  /**
   * When present, it specifies that an input field is read-only.
   * @group Props
   */
  readonly;
  /**
   * Determines whether the input field is empty.
   * @group Props
   */
  allowEmpty = true;
  /**
   * Locale to be used in formatting.
   * @group Props
   */
  locale;
  /**
   * The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit". See Locale Negotiation for details.
   * @group Props
   */
  localeMatcher;
  /**
   * Defines the behavior of the component, valid values are "decimal" and "currency".
   * @group Props
   */
  mode = "decimal";
  /**
   * The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar, "EUR" for the euro, or "CNY" for the Chinese RMB. There is no default value; if the style is "currency", the currency property must be provided.
   * @group Props
   */
  currency;
  /**
   * How to display the currency in currency formatting. Possible values are "symbol" to use a localized currency symbol such as €, ü"code" to use the ISO currency code, "name" to use a localized currency name such as "dollar"; the default is "symbol".
   * @group Props
   */
  currencyDisplay;
  /**
   * Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators.
   * @group Props
   */
  useGrouping = true;
  /**
   * The minimum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number and percent formatting is 0; the default for currency formatting is the number of minor unit digits provided by the ISO 4217 currency code list (2 if the list doesn't provide that information).
   * @group Props
   */
  minFractionDigits;
  /**
   * The maximum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number formatting is the larger of minimumFractionDigits and 3; the default for currency formatting is the larger of minimumFractionDigits and the number of minor unit digits provided by the ISO 4217 currency code list (2 if the list doesn't provide that information).
   * @group Props
   */
  maxFractionDigits;
  /**
   * Text to display before the value.
   * @group Props
   */
  prefix;
  /**
   * Text to display after the value.
   * @group Props
   */
  suffix;
  /**
   * Inline style of the input field.
   * @group Props
   */
  inputStyle;
  /**
   * Style class of the input field.
   * @group Props
   */
  inputStyleClass;
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear = false;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Callback to invoke on input.
   * @param {InputNumberInputEvent} event - Custom input event.
   * @group Emits
   */
  onInput = new EventEmitter();
  /**
   * Callback to invoke when the component receives focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the component loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke on input key press.
   * @param {KeyboardEvent} event - Keyboard event.
   * @group Emits
   */
  onKeyDown = new EventEmitter();
  /**
   * Callback to invoke when clear token is clicked.
   * @group Emits
   */
  onClear = new EventEmitter();
  /**
   * Template of the clear icon.
   * @group Templates
   */
  clearIconTemplate;
  /**
   * Template of the increment button icon.
   * @group Templates
   */
  incrementButtonIconTemplate;
  /**
   * Template of the decrement button icon.
   * @group Templates
   */
  decrementButtonIconTemplate;
  templates;
  input;
  _clearIconTemplate;
  _incrementButtonIconTemplate;
  _decrementButtonIconTemplate;
  value;
  focused;
  initialized;
  groupChar = "";
  prefixChar = "";
  suffixChar = "";
  isSpecialChar;
  timer;
  lastValue;
  _numeral;
  numberFormat;
  _decimal;
  _decimalChar = "";
  _group;
  _minusSign;
  _currency;
  _prefix;
  _suffix;
  _index;
  ngControl = null;
  constructor(injector) {
    super();
    this.injector = injector;
  }
  onChanges(simpleChange) {
    const props = ["locale", "localeMatcher", "mode", "currency", "currencyDisplay", "useGrouping", "minFractionDigits", "maxFractionDigits", "prefix", "suffix"];
    if (props.some((p2) => !!simpleChange[p2])) {
      this.updateConstructParser();
    }
  }
  onInit() {
    this.ngControl = this.injector.get(NgControl, null, {
      optional: true
    });
    this.constructParser();
    this.initialized = true;
  }
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "clearicon":
          this._clearIconTemplate = item.template;
          break;
        case "incrementbuttonicon":
          this._incrementButtonIconTemplate = item.template;
          break;
        case "decrementbuttonicon":
          this._decrementButtonIconTemplate = item.template;
          break;
      }
    });
  }
  getOptions() {
    const validateFractionDigits = (value, min, max) => {
      if (value == null || isNaN(value) || !isFinite(value)) {
        return void 0;
      }
      return Math.max(min, Math.min(max, Math.floor(value)));
    };
    const minFractionDigits = validateFractionDigits(this.minFractionDigits, 0, 20);
    const maxFractionDigits = validateFractionDigits(this.maxFractionDigits, 0, 100);
    const validatedMinFractionDigits = minFractionDigits != null && maxFractionDigits != null && minFractionDigits > maxFractionDigits ? maxFractionDigits : minFractionDigits;
    return {
      localeMatcher: this.localeMatcher,
      style: this.mode,
      currency: this.currency,
      currencyDisplay: this.currencyDisplay,
      useGrouping: this.useGrouping,
      minimumFractionDigits: validatedMinFractionDigits,
      maximumFractionDigits: maxFractionDigits
    };
  }
  constructParser() {
    const options = this.getOptions();
    const cleanOptions = Object.fromEntries(Object.entries(options).filter(([_key, value]) => value !== void 0));
    this.numberFormat = new Intl.NumberFormat(this.locale, cleanOptions);
    const numerals = [...new Intl.NumberFormat(this.locale, {
      useGrouping: false
    }).format(9876543210)].reverse();
    const index = new Map(numerals.map((d, i) => [d, i]));
    this._numeral = new RegExp(`[${numerals.join("")}]`, "g");
    this._group = this.getGroupingExpression();
    this._minusSign = this.getMinusSignExpression();
    this._currency = this.getCurrencyExpression();
    this._decimal = this.getDecimalExpression();
    this._decimalChar = this.getDecimalChar();
    this._suffix = this.getSuffixExpression();
    this._prefix = this.getPrefixExpression();
    this._index = (d) => index.get(d);
  }
  updateConstructParser() {
    if (this.initialized) {
      this.constructParser();
    }
  }
  escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }
  getDecimalExpression() {
    const decimalChar = this.getDecimalChar();
    return new RegExp(`[${decimalChar}]`, "g");
  }
  getDecimalChar() {
    const formatter = new Intl.NumberFormat(this.locale, __spreadProps(__spreadValues({}, this.getOptions()), {
      useGrouping: false
    }));
    return formatter.format(1.1).replace(this._currency, "").trim().replace(this._numeral, "");
  }
  getGroupingExpression() {
    const formatter = new Intl.NumberFormat(this.locale, {
      useGrouping: true
    });
    this.groupChar = formatter.format(1e6).trim().replace(this._numeral, "").charAt(0);
    return new RegExp(`[${this.groupChar}]`, "g");
  }
  getMinusSignExpression() {
    const formatter = new Intl.NumberFormat(this.locale, {
      useGrouping: false
    });
    return new RegExp(`[${formatter.format(-1).trim().replace(this._numeral, "")}]`, "g");
  }
  getCurrencyExpression() {
    if (this.currency) {
      const formatter = new Intl.NumberFormat(this.locale, {
        style: "currency",
        currency: this.currency,
        currencyDisplay: this.currencyDisplay,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      return new RegExp(`[${formatter.format(1).replace(/\s/g, "").replace(this._numeral, "").replace(this._group, "")}]`, "g");
    }
    return new RegExp(`[]`, "g");
  }
  getPrefixExpression() {
    if (this.prefix) {
      this.prefixChar = this.prefix;
    } else {
      const formatter = new Intl.NumberFormat(this.locale, {
        style: this.mode,
        currency: this.currency,
        currencyDisplay: this.currencyDisplay
      });
      this.prefixChar = formatter.format(1).split("1")[0];
    }
    return new RegExp(`${this.escapeRegExp(this.prefixChar || "")}`, "g");
  }
  getSuffixExpression() {
    if (this.suffix) {
      this.suffixChar = this.suffix;
    } else {
      const formatter = new Intl.NumberFormat(this.locale, {
        style: this.mode,
        currency: this.currency,
        currencyDisplay: this.currencyDisplay,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      this.suffixChar = formatter.format(1).split("1")[1];
    }
    return new RegExp(`${this.escapeRegExp(this.suffixChar || "")}`, "g");
  }
  formatValue(value) {
    if (value != null) {
      if (value === "-") {
        return value;
      }
      if (this.format) {
        let formatter = new Intl.NumberFormat(this.locale, this.getOptions());
        let formattedValue = formatter.format(value);
        if (this.prefix && value != this.prefix) {
          formattedValue = this.prefix + formattedValue;
        }
        if (this.suffix && value != this.suffix) {
          formattedValue = formattedValue + this.suffix;
        }
        return formattedValue;
      }
      return value.toString();
    }
    return "";
  }
  parseValue(text) {
    const suffixRegex = this._suffix ? new RegExp(this._suffix, "") : /(?:)/;
    const prefixRegex = this._prefix ? new RegExp(this._prefix, "") : /(?:)/;
    const currencyRegex = this._currency ? new RegExp(this._currency, "") : /(?:)/;
    let filteredText = text.replace(suffixRegex, "").replace(prefixRegex, "").trim().replace(/\s/g, "").replace(currencyRegex, "").replace(this._group, "").replace(this._minusSign, "-").replace(this._decimal, ".").replace(this._numeral, this._index);
    if (filteredText) {
      if (filteredText === "-")
        return filteredText;
      let parsedValue = +filteredText;
      return isNaN(parsedValue) ? null : parsedValue;
    }
    return null;
  }
  repeat(event, interval, dir) {
    if (this.readonly) {
      return;
    }
    let i = interval || 500;
    this.clearTimer();
    this.timer = setTimeout(() => {
      this.repeat(event, 40, dir);
    }, i);
    this.spin(event, dir);
  }
  spin(event, dir) {
    let step = (this.step() ?? 1) * dir;
    let currentValue = this.parseValue(this.input?.nativeElement.value) || 0;
    let newValue = this.validateValue(currentValue + step);
    const max = this.maxlength();
    if (max && max < this.formatValue(newValue).length) {
      return;
    }
    this.updateInput(newValue, null, "spin", null);
    this.updateModel(event, newValue);
    this.handleOnInput(event, currentValue, newValue);
  }
  clear() {
    this.value = null;
    this.onModelChange(this.value);
    this.onClear.emit();
  }
  onUpButtonMouseDown(event) {
    if (event.button === 2) {
      this.clearTimer();
      return;
    }
    if (!this.$disabled()) {
      this.input?.nativeElement.focus();
      this.repeat(event, null, 1);
      event.preventDefault();
    }
  }
  onUpButtonMouseUp() {
    if (!this.$disabled()) {
      this.clearTimer();
    }
  }
  onUpButtonMouseLeave() {
    if (!this.$disabled()) {
      this.clearTimer();
    }
  }
  onUpButtonKeyDown(event) {
    if (event.keyCode === 32 || event.keyCode === 13) {
      this.repeat(event, null, 1);
    }
  }
  onUpButtonKeyUp() {
    if (!this.$disabled()) {
      this.clearTimer();
    }
  }
  onDownButtonMouseDown(event) {
    if (event.button === 2) {
      this.clearTimer();
      return;
    }
    if (!this.$disabled()) {
      this.input?.nativeElement.focus();
      this.repeat(event, null, -1);
      event.preventDefault();
    }
  }
  onDownButtonMouseUp() {
    if (!this.$disabled()) {
      this.clearTimer();
    }
  }
  onDownButtonMouseLeave() {
    if (!this.$disabled()) {
      this.clearTimer();
    }
  }
  onDownButtonKeyUp() {
    if (!this.$disabled()) {
      this.clearTimer();
    }
  }
  onDownButtonKeyDown(event) {
    if (event.keyCode === 32 || event.keyCode === 13) {
      this.repeat(event, null, -1);
    }
  }
  onUserInput(event) {
    if (this.readonly) {
      return;
    }
    if (this.isSpecialChar) {
      event.target.value = this.lastValue;
    }
    this.isSpecialChar = false;
  }
  onInputKeyDown(event) {
    if (this.readonly) {
      return;
    }
    this.lastValue = event.target.value;
    if (event.shiftKey || event.altKey) {
      this.isSpecialChar = true;
      return;
    }
    let selectionStart = event.target.selectionStart;
    let selectionEnd = event.target.selectionEnd;
    let inputValue = event.target.value;
    let newValueStr = null;
    if (event.altKey) {
      event.preventDefault();
    }
    switch (event.key) {
      case "ArrowUp":
        this.spin(event, 1);
        event.preventDefault();
        break;
      case "ArrowDown":
        this.spin(event, -1);
        event.preventDefault();
        break;
      case "ArrowLeft":
        for (let index = selectionStart; index <= inputValue.length; index++) {
          const previousCharIndex = index === 0 ? 0 : index - 1;
          if (this.isNumeralChar(inputValue.charAt(previousCharIndex))) {
            this.input.nativeElement.setSelectionRange(index, index);
            break;
          }
        }
        break;
      case "ArrowRight":
        for (let index = selectionEnd; index >= 0; index--) {
          if (this.isNumeralChar(inputValue.charAt(index))) {
            this.input.nativeElement.setSelectionRange(index, index);
            break;
          }
        }
        break;
      case "Tab":
      case "Enter":
        newValueStr = this.validateValue(this.parseValue(this.input.nativeElement.value));
        this.input.nativeElement.value = this.formatValue(newValueStr);
        this.input.nativeElement.setAttribute("aria-valuenow", newValueStr);
        this.updateModel(event, newValueStr);
        break;
      case "Backspace": {
        event.preventDefault();
        if (selectionStart === selectionEnd) {
          if (selectionStart == 1 && this.prefix || selectionStart == inputValue.length && this.suffix) {
            break;
          }
          const deleteChar = inputValue.charAt(selectionStart - 1);
          const {
            decimalCharIndex,
            decimalCharIndexWithoutPrefix
          } = this.getDecimalCharIndexes(inputValue);
          if (this.isNumeralChar(deleteChar)) {
            const decimalLength = this.getDecimalLength(inputValue);
            if (this._group.test(deleteChar)) {
              this._group.lastIndex = 0;
              newValueStr = inputValue.slice(0, selectionStart - 2) + inputValue.slice(selectionStart - 1);
            } else if (this._decimal.test(deleteChar)) {
              this._decimal.lastIndex = 0;
              if (decimalLength) {
                this.input?.nativeElement.setSelectionRange(selectionStart - 1, selectionStart - 1);
              } else {
                newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
              }
            } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
              const insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < decimalLength ? "" : "0";
              newValueStr = inputValue.slice(0, selectionStart - 1) + insertedText + inputValue.slice(selectionStart);
            } else if (decimalCharIndexWithoutPrefix === 1) {
              newValueStr = inputValue.slice(0, selectionStart - 1) + "0" + inputValue.slice(selectionStart);
              newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : "";
            } else {
              newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
            }
          } else if (this.mode === "currency" && this._currency && deleteChar.search(this._currency) != -1) {
            newValueStr = inputValue.slice(1);
          }
          this.updateValue(event, newValueStr, null, "delete-single");
        } else {
          newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
          this.updateValue(event, newValueStr, null, "delete-range");
        }
        break;
      }
      case "Delete":
        event.preventDefault();
        if (selectionStart === selectionEnd) {
          if (selectionStart == 0 && this.prefix || selectionStart == inputValue.length - 1 && this.suffix) {
            break;
          }
          const deleteChar = inputValue.charAt(selectionStart);
          const {
            decimalCharIndex,
            decimalCharIndexWithoutPrefix
          } = this.getDecimalCharIndexes(inputValue);
          if (this.isNumeralChar(deleteChar)) {
            const decimalLength = this.getDecimalLength(inputValue);
            if (this._group.test(deleteChar)) {
              this._group.lastIndex = 0;
              newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 2);
            } else if (this._decimal.test(deleteChar)) {
              this._decimal.lastIndex = 0;
              if (decimalLength) {
                this.input?.nativeElement.setSelectionRange(selectionStart + 1, selectionStart + 1);
              } else {
                newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
              }
            } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
              const insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < decimalLength ? "" : "0";
              newValueStr = inputValue.slice(0, selectionStart) + insertedText + inputValue.slice(selectionStart + 1);
            } else if (decimalCharIndexWithoutPrefix === 1) {
              newValueStr = inputValue.slice(0, selectionStart) + "0" + inputValue.slice(selectionStart + 1);
              newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : "";
            } else {
              newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
            }
          }
          this.updateValue(event, newValueStr, null, "delete-back-single");
        } else {
          newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
          this.updateValue(event, newValueStr, null, "delete-range");
        }
        break;
      case "Home":
        if (this.min()) {
          this.updateModel(event, this.min());
          event.preventDefault();
        }
        break;
      case "End":
        if (this.max()) {
          this.updateModel(event, this.max());
          event.preventDefault();
        }
        break;
      default:
        break;
    }
    this.onKeyDown.emit(event);
  }
  onInputKeyPress(event) {
    if (this.readonly) {
      return;
    }
    let code = event.which || event.keyCode;
    let char = String.fromCharCode(code);
    let isDecimalSign = this.isDecimalSign(char);
    const isMinusSign = this.isMinusSign(char);
    if (code != 13) {
      event.preventDefault();
    }
    if (!isDecimalSign && event.code === "NumpadDecimal") {
      isDecimalSign = true;
      char = this._decimalChar;
      code = char.charCodeAt(0);
    }
    const {
      value,
      selectionStart,
      selectionEnd
    } = this.input.nativeElement;
    const newValue = this.parseValue(value + char);
    const newValueStr = newValue != null ? newValue.toString() : "";
    const selectedValue = value.substring(selectionStart, selectionEnd);
    const selectedValueParsed = this.parseValue(selectedValue);
    const selectedValueStr = selectedValueParsed != null ? selectedValueParsed.toString() : "";
    if (selectionStart !== selectionEnd && selectedValueStr.length > 0) {
      this.insert(event, char, {
        isDecimalSign,
        isMinusSign
      });
      return;
    }
    const max = this.maxlength();
    if (max && newValueStr.length > max) {
      return;
    }
    if (48 <= code && code <= 57 || isMinusSign || isDecimalSign) {
      this.insert(event, char, {
        isDecimalSign,
        isMinusSign
      });
    }
  }
  onPaste(event) {
    if (!this.$disabled() && !this.readonly) {
      event.preventDefault();
      let data = (event.clipboardData || this.document.defaultView["clipboardData"]).getData("Text");
      if (this.inputId === "integeronly" && /[^\d-]/.test(data)) {
        return;
      }
      if (data) {
        if (this.maxlength()) {
          data = data.toString().substring(0, this.maxlength());
        }
        let filteredData = this.parseValue(data);
        if (filteredData != null) {
          this.insert(event, filteredData.toString());
        }
      }
    }
  }
  allowMinusSign() {
    const min = this.min();
    return min == null || min < 0;
  }
  isMinusSign(char) {
    if (this._minusSign.test(char) || char === "-") {
      this._minusSign.lastIndex = 0;
      return true;
    }
    return false;
  }
  isDecimalSign(char) {
    if (this._decimal.test(char)) {
      this._decimal.lastIndex = 0;
      return true;
    }
    return false;
  }
  isDecimalMode() {
    return this.mode === "decimal";
  }
  getDecimalCharIndexes(val) {
    let decimalCharIndex = val.search(this._decimal);
    this._decimal.lastIndex = 0;
    const filteredVal = val.replace(this._prefix, "").trim().replace(/\s/g, "").replace(this._currency, "");
    const decimalCharIndexWithoutPrefix = filteredVal.search(this._decimal);
    this._decimal.lastIndex = 0;
    return {
      decimalCharIndex,
      decimalCharIndexWithoutPrefix
    };
  }
  getCharIndexes(val) {
    const decimalCharIndex = val.search(this._decimal);
    this._decimal.lastIndex = 0;
    const minusCharIndex = val.search(this._minusSign);
    this._minusSign.lastIndex = 0;
    const suffixCharIndex = val.search(this._suffix);
    this._suffix.lastIndex = 0;
    const currencyCharIndex = val.search(this._currency);
    this._currency.lastIndex = 0;
    return {
      decimalCharIndex,
      minusCharIndex,
      suffixCharIndex,
      currencyCharIndex
    };
  }
  insert(event, text, sign = {
    isDecimalSign: false,
    isMinusSign: false
  }) {
    const minusCharIndexOnText = text.search(this._minusSign);
    this._minusSign.lastIndex = 0;
    if (!this.allowMinusSign() && minusCharIndexOnText !== -1) {
      return;
    }
    let selectionStart = this.input?.nativeElement.selectionStart;
    let selectionEnd = this.input?.nativeElement.selectionEnd;
    let inputValue = this.input?.nativeElement.value.trim();
    const {
      decimalCharIndex,
      minusCharIndex,
      suffixCharIndex,
      currencyCharIndex
    } = this.getCharIndexes(inputValue);
    let newValueStr;
    if (sign.isMinusSign) {
      if (selectionStart === 0) {
        newValueStr = inputValue;
        if (minusCharIndex === -1 || selectionEnd !== 0) {
          newValueStr = this.insertText(inputValue, text, 0, selectionEnd);
        }
        this.updateValue(event, newValueStr, text, "insert");
      }
    } else if (sign.isDecimalSign) {
      if (decimalCharIndex > 0 && selectionStart === decimalCharIndex) {
        this.updateValue(event, inputValue, text, "insert");
      } else if (decimalCharIndex > selectionStart && decimalCharIndex < selectionEnd) {
        newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
        this.updateValue(event, newValueStr, text, "insert");
      } else if (decimalCharIndex === -1 && this.maxFractionDigits) {
        newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
        this.updateValue(event, newValueStr, text, "insert");
      }
    } else {
      const maxFractionDigits = this.numberFormat.resolvedOptions().maximumFractionDigits;
      const operation = selectionStart !== selectionEnd ? "range-insert" : "insert";
      if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
        if (selectionStart + text.length - (decimalCharIndex + 1) <= maxFractionDigits) {
          const charIndex = currencyCharIndex >= selectionStart ? currencyCharIndex - 1 : suffixCharIndex >= selectionStart ? suffixCharIndex : inputValue.length;
          newValueStr = inputValue.slice(0, selectionStart) + text + inputValue.slice(selectionStart + text.length, charIndex) + inputValue.slice(charIndex);
          this.updateValue(event, newValueStr, text, operation);
        }
      } else {
        newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
        this.updateValue(event, newValueStr, text, operation);
      }
    }
  }
  insertText(value, text, start, end) {
    let textSplit = text === "." ? text : text.split(".");
    if (textSplit.length === 2) {
      const decimalCharIndex = value.slice(start, end).search(this._decimal);
      this._decimal.lastIndex = 0;
      return decimalCharIndex > 0 ? value.slice(0, start) + this.formatValue(text) + value.slice(end) : value || this.formatValue(text);
    } else if (end - start === value.length) {
      return this.formatValue(text);
    } else if (start === 0) {
      return text + value.slice(end);
    } else if (end === value.length) {
      return value.slice(0, start) + text;
    } else {
      return value.slice(0, start) + text + value.slice(end);
    }
  }
  deleteRange(value, start, end) {
    let newValueStr;
    if (end - start === value.length) newValueStr = "";
    else if (start === 0) newValueStr = value.slice(end);
    else if (end === value.length) newValueStr = value.slice(0, start);
    else newValueStr = value.slice(0, start) + value.slice(end);
    return newValueStr;
  }
  initCursor() {
    let selectionStart = this.input?.nativeElement.selectionStart;
    let selectionEnd = this.input?.nativeElement.selectionEnd;
    let inputValue = this.input?.nativeElement.value;
    let valueLength = inputValue.length;
    let index = null;
    let prefixLength = (this.prefixChar || "").length;
    inputValue = inputValue.replace(this._prefix, "");
    if (selectionStart === selectionEnd || selectionStart !== 0 || selectionEnd < prefixLength) {
      selectionStart -= prefixLength;
    }
    let char = inputValue.charAt(selectionStart);
    if (this.isNumeralChar(char)) {
      return selectionStart + prefixLength;
    }
    let i = selectionStart - 1;
    while (i >= 0) {
      char = inputValue.charAt(i);
      if (this.isNumeralChar(char)) {
        index = i + prefixLength;
        break;
      } else {
        i--;
      }
    }
    if (index !== null) {
      this.input?.nativeElement.setSelectionRange(index + 1, index + 1);
    } else {
      i = selectionStart;
      while (i < valueLength) {
        char = inputValue.charAt(i);
        if (this.isNumeralChar(char)) {
          index = i + prefixLength;
          break;
        } else {
          i++;
        }
      }
      if (index !== null) {
        this.input?.nativeElement.setSelectionRange(index, index);
      }
    }
    return index || 0;
  }
  onInputClick() {
    const currentValue = this.input?.nativeElement.value;
    if (!this.readonly && currentValue !== Mt()) {
      this.initCursor();
    }
  }
  isNumeralChar(char) {
    if (char.length === 1 && (this._numeral.test(char) || this._decimal.test(char) || this._group.test(char) || this._minusSign.test(char))) {
      this.resetRegex();
      return true;
    }
    return false;
  }
  resetRegex() {
    this._numeral.lastIndex = 0;
    this._decimal.lastIndex = 0;
    this._group.lastIndex = 0;
    this._minusSign.lastIndex = 0;
  }
  updateValue(event, valueStr, insertedValueStr, operation) {
    let currentValue = this.input?.nativeElement.value;
    let newValue = null;
    if (valueStr != null) {
      newValue = this.parseValue(valueStr);
      newValue = !newValue && !this.allowEmpty ? 0 : newValue;
      this.updateInput(newValue, insertedValueStr, operation, valueStr);
      this.handleOnInput(event, currentValue, newValue);
    }
  }
  handleOnInput(event, currentValue, newValue) {
    if (this.isValueChanged(currentValue, newValue)) {
      this.input.nativeElement.value = this.formatValue(newValue);
      this.input?.nativeElement.setAttribute("aria-valuenow", newValue);
      this.updateModel(event, newValue);
      this.onInput.emit({
        originalEvent: event,
        value: newValue,
        formattedValue: currentValue
      });
    }
  }
  isValueChanged(currentValue, newValue) {
    if (newValue === null && currentValue !== null) {
      return true;
    }
    if (newValue != null) {
      let parsedCurrentValue = typeof currentValue === "string" ? this.parseValue(currentValue) : currentValue;
      return newValue !== parsedCurrentValue;
    }
    return false;
  }
  validateValue(value) {
    if (value === "-" || value == null) {
      return null;
    }
    const min = this.min();
    const max = this.max();
    if (min != null && value < min) {
      return this.min();
    }
    if (max != null && value > max) {
      return max;
    }
    return value;
  }
  updateInput(value, insertedValueStr, operation, valueStr) {
    insertedValueStr = insertedValueStr || "";
    let inputValue = this.input?.nativeElement.value;
    let newValue = this.formatValue(value);
    let currentLength = inputValue.length;
    if (newValue !== valueStr) {
      newValue = this.concatValues(newValue, valueStr);
    }
    if (currentLength === 0) {
      this.input.nativeElement.value = newValue;
      this.input.nativeElement.setSelectionRange(0, 0);
      const index = this.initCursor();
      const selectionEnd = index + insertedValueStr.length;
      this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
    } else {
      let selectionStart = this.input.nativeElement.selectionStart;
      let selectionEnd = this.input.nativeElement.selectionEnd;
      const maxlength = this.maxlength();
      if (maxlength && newValue.length > maxlength) {
        newValue = newValue.slice(0, maxlength);
        selectionStart = Math.min(selectionStart, maxlength);
        selectionEnd = Math.min(selectionEnd, maxlength);
      }
      if (maxlength && maxlength < newValue.length) {
        return;
      }
      this.input.nativeElement.value = newValue;
      let newLength = newValue.length;
      if (operation === "range-insert") {
        const startValue = this.parseValue((inputValue || "").slice(0, selectionStart));
        const startValueStr = startValue !== null ? startValue.toString() : "";
        const startExpr = startValueStr.split("").join(`(${this.groupChar})?`);
        const sRegex = new RegExp(startExpr, "g");
        sRegex.test(newValue);
        const tExpr = insertedValueStr.split("").join(`(${this.groupChar})?`);
        const tRegex = new RegExp(tExpr, "g");
        tRegex.test(newValue.slice(sRegex.lastIndex));
        selectionEnd = sRegex.lastIndex + tRegex.lastIndex;
        this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
      } else if (newLength === currentLength) {
        if (operation === "insert" || operation === "delete-back-single") this.input.nativeElement.setSelectionRange(selectionEnd + 1, selectionEnd + 1);
        else if (operation === "delete-single") this.input.nativeElement.setSelectionRange(selectionEnd - 1, selectionEnd - 1);
        else if (operation === "delete-range" || operation === "spin") this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
      } else if (operation === "delete-back-single") {
        let prevChar = inputValue.charAt(selectionEnd - 1);
        let nextChar = inputValue.charAt(selectionEnd);
        let diff = currentLength - newLength;
        let isGroupChar = this._group.test(nextChar);
        if (isGroupChar && diff === 1) {
          selectionEnd += 1;
        } else if (!isGroupChar && this.isNumeralChar(prevChar)) {
          selectionEnd += -1 * diff + 1;
        }
        this._group.lastIndex = 0;
        this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
      } else if (inputValue === "-" && operation === "insert") {
        this.input.nativeElement.setSelectionRange(0, 0);
        const index = this.initCursor();
        const selectionEnd2 = index + insertedValueStr.length + 1;
        this.input.nativeElement.setSelectionRange(selectionEnd2, selectionEnd2);
      } else {
        selectionEnd = selectionEnd + (newLength - currentLength);
        this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
      }
    }
    this.input.nativeElement.setAttribute("aria-valuenow", value);
  }
  concatValues(val1, val2) {
    if (val1 && val2) {
      let decimalCharIndex = val2.search(this._decimal);
      this._decimal.lastIndex = 0;
      if (this.suffixChar) {
        return decimalCharIndex !== -1 ? val1.replace(this.suffixChar, "").split(this._decimal)[0] + val2.replace(this.suffixChar, "").slice(decimalCharIndex) + this.suffixChar : val1;
      } else {
        return decimalCharIndex !== -1 ? val1.split(this._decimal)[0] + val2.slice(decimalCharIndex) : val1;
      }
    }
    return val1;
  }
  getDecimalLength(value) {
    if (value) {
      const valueSplit = value.split(this._decimal);
      if (valueSplit.length === 2) {
        return valueSplit[1].replace(this._suffix, "").trim().replace(/\s/g, "").replace(this._currency, "").length;
      }
    }
    return 0;
  }
  onInputFocus(event) {
    this.focused = true;
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    const newValueNumber = this.validateValue(this.parseValue(this.input.nativeElement.value));
    const newValueString = newValueNumber?.toString();
    this.input.nativeElement.value = this.formatValue(newValueString);
    this.input.nativeElement.setAttribute("aria-valuenow", newValueString);
    this.updateModel(event, newValueNumber);
    this.onModelTouched();
    this.onBlur.emit(event);
  }
  formattedValue() {
    const val = !this.value && !this.allowEmpty ? 0 : this.value;
    return this.formatValue(val);
  }
  updateModel(event, value) {
    const isBlurUpdateOnMode = this.ngControl?.control?.updateOn === "blur";
    if (this.value !== value) {
      this.value = value;
      if (!(isBlurUpdateOnMode && this.focused)) {
        this.onModelChange(value);
      }
    } else if (isBlurUpdateOnMode) {
      this.onModelChange(value);
    }
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    this.value = value ? Number(value) : value;
    setModelValue(value);
    this.cd.markForCheck();
  }
  clearTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  static \u0275fac = function InputNumber_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputNumber)(\u0275\u0275directiveInject(Injector));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _InputNumber,
    selectors: [["p-inputNumber"], ["p-inputnumber"], ["p-input-number"]],
    contentQueries: function InputNumber_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c011, 4);
        \u0275\u0275contentQuery(dirIndex, _c13, 4);
        \u0275\u0275contentQuery(dirIndex, _c23, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.clearIconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.incrementButtonIconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.decrementButtonIconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.templates = _t2);
      }
    },
    viewQuery: function InputNumber_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c32, 5);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.input = _t2.first);
      }
    },
    hostVars: 2,
    hostBindings: function InputNumber_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      showButtons: [2, "showButtons", "showButtons", booleanAttribute],
      format: [2, "format", "format", booleanAttribute],
      buttonLayout: "buttonLayout",
      inputId: "inputId",
      styleClass: "styleClass",
      placeholder: "placeholder",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      title: "title",
      ariaLabelledBy: "ariaLabelledBy",
      ariaDescribedBy: "ariaDescribedBy",
      ariaLabel: "ariaLabel",
      ariaRequired: [2, "ariaRequired", "ariaRequired", booleanAttribute],
      autocomplete: "autocomplete",
      incrementButtonClass: "incrementButtonClass",
      decrementButtonClass: "decrementButtonClass",
      incrementButtonIcon: "incrementButtonIcon",
      decrementButtonIcon: "decrementButtonIcon",
      readonly: [2, "readonly", "readonly", booleanAttribute],
      allowEmpty: [2, "allowEmpty", "allowEmpty", booleanAttribute],
      locale: "locale",
      localeMatcher: "localeMatcher",
      mode: "mode",
      currency: "currency",
      currencyDisplay: "currencyDisplay",
      useGrouping: [2, "useGrouping", "useGrouping", booleanAttribute],
      minFractionDigits: [2, "minFractionDigits", "minFractionDigits", (value) => numberAttribute(value, void 0)],
      maxFractionDigits: [2, "maxFractionDigits", "maxFractionDigits", (value) => numberAttribute(value, void 0)],
      prefix: "prefix",
      suffix: "suffix",
      inputStyle: "inputStyle",
      inputStyleClass: "inputStyleClass",
      showClear: [2, "showClear", "showClear", booleanAttribute],
      autofocus: [2, "autofocus", "autofocus", booleanAttribute]
    },
    outputs: {
      onInput: "onInput",
      onFocus: "onFocus",
      onBlur: "onBlur",
      onKeyDown: "onKeyDown",
      onClear: "onClear"
    },
    features: [\u0275\u0275ProvidersFeature([INPUTNUMBER_VALUE_ACCESSOR, InputNumberStyle, {
      provide: INPUTNUMBER_INSTANCE,
      useExisting: _InputNumber
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _InputNumber
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 36,
    consts: [["input", ""], ["pInputText", "", "role", "spinbutton", "inputmode", "decimal", 3, "input", "keydown", "keypress", "paste", "click", "focus", "blur", "value", "ngStyle", "variant", "invalid", "pSize", "pt", "pAutoFocus", "fluid"], [4, "ngIf"], [3, "pBind", "class", 4, "ngIf"], ["type", "button", "tabindex", "-1", 3, "pBind", "class", "mousedown", "mouseup", "mouseleave", "keydown", "keyup", 4, "ngIf"], ["data-p-icon", "times", 3, "pBind", "class", "click", 4, "ngIf"], [3, "pBind", "class", "click", 4, "ngIf"], ["data-p-icon", "times", 3, "click", "pBind"], [3, "click", "pBind"], [4, "ngTemplateOutlet"], [3, "pBind"], ["type", "button", "tabindex", "-1", 3, "mousedown", "mouseup", "mouseleave", "keydown", "keyup", "pBind"], [3, "pBind", "ngClass", 4, "ngIf"], [3, "pBind", "ngClass"], ["data-p-icon", "angle-up", 3, "pBind", 4, "ngIf"], ["data-p-icon", "angle-up", 3, "pBind"], ["data-p-icon", "angle-down", 3, "pBind", 4, "ngIf"], ["data-p-icon", "angle-down", 3, "pBind"]],
    template: function InputNumber_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "input", 1, 0);
        \u0275\u0275listener("input", function InputNumber_Template_input_input_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onUserInput($event));
        })("keydown", function InputNumber_Template_input_keydown_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputKeyDown($event));
        })("keypress", function InputNumber_Template_input_keypress_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputKeyPress($event));
        })("paste", function InputNumber_Template_input_paste_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPaste($event));
        })("click", function InputNumber_Template_input_click_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputClick());
        })("focus", function InputNumber_Template_input_focus_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputFocus($event));
        })("blur", function InputNumber_Template_input_blur_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputBlur($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(2, InputNumber_ng_container_2_Template, 3, 2, "ng-container", 2)(3, InputNumber_span_3_Template, 7, 17, "span", 3)(4, InputNumber_button_4_Template, 3, 7, "button", 4)(5, InputNumber_button_5_Template, 3, 7, "button", 4);
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cn(ctx.cx("pcInputText"), ctx.inputStyleClass));
        \u0275\u0275property("value", ctx.formattedValue())("ngStyle", ctx.inputStyle)("variant", ctx.$variant())("invalid", ctx.invalid())("pSize", ctx.size())("pt", ctx.ptm("pcInputText"))("pAutoFocus", ctx.autofocus)("fluid", ctx.hasFluid);
        \u0275\u0275attribute("id", ctx.inputId)("aria-valuemin", ctx.min())("aria-valuemax", ctx.max())("aria-valuenow", ctx.value)("placeholder", ctx.placeholder)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("aria-describedby", ctx.ariaDescribedBy)("title", ctx.title)("size", ctx.inputSize())("name", ctx.name())("autocomplete", ctx.autocomplete)("maxlength", ctx.maxlength())("minlength", ctx.minlength())("tabindex", ctx.tabindex)("aria-required", ctx.ariaRequired)("min", ctx.min())("max", ctx.max())("step", ctx.step() ?? 1)("required", ctx.required() ? "" : void 0)("readonly", ctx.readonly ? "" : void 0)("disabled", ctx.$disabled() ? "" : void 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.buttonLayout != "vertical" && ctx.showClear && ctx.value);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showButtons && ctx.buttonLayout === "stacked");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showButtons && ctx.buttonLayout !== "stacked");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showButtons && ctx.buttonLayout !== "stacked");
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, InputText, AutoFocus, TimesIcon, AngleUpIcon, AngleDownIcon, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputNumber, [{
    type: Component,
    args: [{
      selector: "p-inputNumber, p-inputnumber, p-input-number",
      standalone: true,
      imports: [CommonModule, InputText, AutoFocus, TimesIcon, AngleUpIcon, AngleDownIcon, SharedModule, BindModule],
      template: `
        <input
            pInputText
            #input
            [attr.id]="inputId"
            role="spinbutton"
            [class]="cn(cx('pcInputText'), inputStyleClass)"
            [value]="formattedValue()"
            [ngStyle]="inputStyle"
            [variant]="$variant()"
            [invalid]="invalid()"
            [attr.aria-valuemin]="min()"
            [attr.aria-valuemax]="max()"
            [attr.aria-valuenow]="value"
            [attr.placeholder]="placeholder"
            [attr.aria-label]="ariaLabel"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-describedby]="ariaDescribedBy"
            [attr.title]="title"
            [pSize]="size()"
            [attr.size]="inputSize()"
            [attr.name]="name()"
            [attr.autocomplete]="autocomplete"
            [attr.maxlength]="maxlength()"
            [attr.minlength]="minlength()"
            [attr.tabindex]="tabindex"
            [attr.aria-required]="ariaRequired"
            [attr.min]="min()"
            [attr.max]="max()"
            [attr.step]="step() ?? 1"
            [attr.required]="required() ? '' : undefined"
            [attr.readonly]="readonly ? '' : undefined"
            [attr.disabled]="$disabled() ? '' : undefined"
            inputmode="decimal"
            (input)="onUserInput($event)"
            (keydown)="onInputKeyDown($event)"
            (keypress)="onInputKeyPress($event)"
            (paste)="onPaste($event)"
            (click)="onInputClick()"
            (focus)="onInputFocus($event)"
            (blur)="onInputBlur($event)"
            [pt]="ptm('pcInputText')"
            [pAutoFocus]="autofocus"
            [fluid]="hasFluid"
        />
        <ng-container *ngIf="buttonLayout != 'vertical' && showClear && value">
            <svg data-p-icon="times" *ngIf="!clearIconTemplate && !_clearIconTemplate" [pBind]="ptm('clearIcon')" [class]="cx('clearIcon')" (click)="clear()" />
            <span *ngIf="clearIconTemplate || _clearIconTemplate" [pBind]="ptm('clearIcon')" (click)="clear()" [class]="cx('clearIcon')">
                <ng-template *ngTemplateOutlet="clearIconTemplate || _clearIconTemplate"></ng-template>
            </span>
        </ng-container>
        <span [pBind]="ptm('buttonGroup')" [class]="cx('buttonGroup')" *ngIf="showButtons && buttonLayout === 'stacked'">
            <button
                type="button"
                [pBind]="ptm('incrementButton')"
                [class]="cn(cx('incrementButton'), incrementButtonClass)"
                [attr.disabled]="$disabled() ? '' : undefined"
                tabindex="-1"
                (mousedown)="onUpButtonMouseDown($event)"
                (mouseup)="onUpButtonMouseUp()"
                (mouseleave)="onUpButtonMouseLeave()"
                (keydown)="onUpButtonKeyDown($event)"
                (keyup)="onUpButtonKeyUp()"
                [attr.aria-hidden]="true"
            >
                <span *ngIf="incrementButtonIcon" [pBind]="ptm('incrementButtonIcon')" [ngClass]="incrementButtonIcon"></span>
                <ng-container *ngIf="!incrementButtonIcon">
                    <svg data-p-icon="angle-up" [pBind]="ptm('incrementButtonIcon')" *ngIf="!incrementButtonIconTemplate && !_incrementButtonIconTemplate" />
                    <ng-template *ngTemplateOutlet="incrementButtonIconTemplate || _incrementButtonIconTemplate"></ng-template>
                </ng-container>
            </button>

            <button
                type="button"
                [pBind]="ptm('decrementButton')"
                [class]="cn(cx('decrementButton'), decrementButtonClass)"
                [attr.disabled]="$disabled() ? '' : undefined"
                tabindex="-1"
                [attr.aria-hidden]="true"
                (mousedown)="onDownButtonMouseDown($event)"
                (mouseup)="onDownButtonMouseUp()"
                (mouseleave)="onDownButtonMouseLeave()"
                (keydown)="onDownButtonKeyDown($event)"
                (keyup)="onDownButtonKeyUp()"
            >
                <span *ngIf="decrementButtonIcon" [pBind]="ptm('decrementButtonIcon')" [ngClass]="decrementButtonIcon"></span>
                <ng-container *ngIf="!decrementButtonIcon">
                    <svg data-p-icon="angle-down" [pBind]="ptm('decrementButtonIcon')" *ngIf="!decrementButtonIconTemplate && !_decrementButtonIconTemplate" />
                    <ng-template *ngTemplateOutlet="decrementButtonIconTemplate || _decrementButtonIconTemplate"></ng-template>
                </ng-container>
            </button>
        </span>
        <button
            *ngIf="showButtons && buttonLayout !== 'stacked'"
            type="button"
            [pBind]="ptm('incrementButton')"
            [class]="cn(cx('incrementButton'), incrementButtonClass)"
            [attr.disabled]="$disabled() ? '' : undefined"
            tabindex="-1"
            [attr.aria-hidden]="true"
            (mousedown)="onUpButtonMouseDown($event)"
            (mouseup)="onUpButtonMouseUp()"
            (mouseleave)="onUpButtonMouseLeave()"
            (keydown)="onUpButtonKeyDown($event)"
            (keyup)="onUpButtonKeyUp()"
        >
            <span *ngIf="incrementButtonIcon" [pBind]="ptm('incrementButtonIcon')" [ngClass]="incrementButtonIcon"></span>
            <ng-container *ngIf="!incrementButtonIcon">
                <svg data-p-icon="angle-up" [pBind]="ptm('incrementButtonIcon')" *ngIf="!incrementButtonIconTemplate && !_incrementButtonIconTemplate" />
                <ng-template *ngTemplateOutlet="incrementButtonIconTemplate || _incrementButtonIconTemplate"></ng-template>
            </ng-container>
        </button>
        <button
            *ngIf="showButtons && buttonLayout !== 'stacked'"
            type="button"
            [pBind]="ptm('decrementButton')"
            [class]="cn(cx('decrementButton'), decrementButtonClass)"
            [attr.disabled]="$disabled() ? '' : undefined"
            tabindex="-1"
            [attr.aria-hidden]="true"
            (mousedown)="onDownButtonMouseDown($event)"
            (mouseup)="onDownButtonMouseUp()"
            (mouseleave)="onDownButtonMouseLeave()"
            (keydown)="onDownButtonKeyDown($event)"
            (keyup)="onDownButtonKeyUp()"
        >
            <span *ngIf="decrementButtonIcon" [pBind]="ptm('decrementButtonIcon')" [ngClass]="decrementButtonIcon"></span>
            <ng-container *ngIf="!decrementButtonIcon">
                <svg data-p-icon="angle-down" [pBind]="ptm('decrementButtonIcon')" *ngIf="!decrementButtonIconTemplate && !_decrementButtonIconTemplate" />
                <ng-template *ngTemplateOutlet="decrementButtonIconTemplate || _decrementButtonIconTemplate"></ng-template>
            </ng-container>
        </button>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [INPUTNUMBER_VALUE_ACCESSOR, InputNumberStyle, {
        provide: INPUTNUMBER_INSTANCE,
        useExisting: InputNumber
      }, {
        provide: PARENT_INSTANCE,
        useExisting: InputNumber
      }],
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      },
      hostDirectives: [Bind]
    }]
  }], () => [{
    type: Injector
  }], {
    showButtons: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    format: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    buttonLayout: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    title: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaDescribedBy: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaRequired: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autocomplete: [{
      type: Input
    }],
    incrementButtonClass: [{
      type: Input
    }],
    decrementButtonClass: [{
      type: Input
    }],
    incrementButtonIcon: [{
      type: Input
    }],
    decrementButtonIcon: [{
      type: Input
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    allowEmpty: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    locale: [{
      type: Input
    }],
    localeMatcher: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    currency: [{
      type: Input
    }],
    currencyDisplay: [{
      type: Input
    }],
    useGrouping: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    minFractionDigits: [{
      type: Input,
      args: [{
        transform: (value) => numberAttribute(value, void 0)
      }]
    }],
    maxFractionDigits: [{
      type: Input,
      args: [{
        transform: (value) => numberAttribute(value, void 0)
      }]
    }],
    prefix: [{
      type: Input
    }],
    suffix: [{
      type: Input
    }],
    inputStyle: [{
      type: Input
    }],
    inputStyleClass: [{
      type: Input
    }],
    showClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onInput: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onKeyDown: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    clearIconTemplate: [{
      type: ContentChild,
      args: ["clearicon", {
        descendants: false
      }]
    }],
    incrementButtonIconTemplate: [{
      type: ContentChild,
      args: ["incrementbuttonicon", {
        descendants: false
      }]
    }],
    decrementButtonIconTemplate: [{
      type: ContentChild,
      args: ["decrementbuttonicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    input: [{
      type: ViewChild,
      args: ["input"]
    }]
  });
})();
var InputNumberModule = class _InputNumberModule {
  static \u0275fac = function InputNumberModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputNumberModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _InputNumberModule,
    imports: [InputNumber, SharedModule],
    exports: [InputNumber, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [InputNumber, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputNumberModule, [{
    type: NgModule,
    args: [{
      imports: [InputNumber, SharedModule],
      exports: [InputNumber, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/radiobutton/index.mjs
var style7 = "\n    .p-radiobutton {\n        position: relative;\n        display: inline-flex;\n        user-select: none;\n        vertical-align: bottom;\n        width: dt('radiobutton.width');\n        height: dt('radiobutton.height');\n    }\n\n    .p-radiobutton-input {\n        cursor: pointer;\n        appearance: none;\n        position: absolute;\n        top: 0;\n        inset-inline-start: 0;\n        width: 100%;\n        height: 100%;\n        padding: 0;\n        margin: 0;\n        opacity: 0;\n        z-index: 1;\n        outline: 0 none;\n        border: 1px solid transparent;\n        border-radius: 50%;\n    }\n\n    .p-radiobutton-box {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-radius: 50%;\n        border: 1px solid dt('radiobutton.border.color');\n        background: dt('radiobutton.background');\n        width: dt('radiobutton.width');\n        height: dt('radiobutton.height');\n        transition:\n            background dt('radiobutton.transition.duration'),\n            color dt('radiobutton.transition.duration'),\n            border-color dt('radiobutton.transition.duration'),\n            box-shadow dt('radiobutton.transition.duration'),\n            outline-color dt('radiobutton.transition.duration');\n        outline-color: transparent;\n        box-shadow: dt('radiobutton.shadow');\n    }\n\n    .p-radiobutton-icon {\n        transition-duration: dt('radiobutton.transition.duration');\n        background: transparent;\n        font-size: dt('radiobutton.icon.size');\n        width: dt('radiobutton.icon.size');\n        height: dt('radiobutton.icon.size');\n        border-radius: 50%;\n        backface-visibility: hidden;\n        transform: translateZ(0) scale(0.1);\n    }\n\n    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {\n        border-color: dt('radiobutton.hover.border.color');\n    }\n\n    .p-radiobutton-checked .p-radiobutton-box {\n        border-color: dt('radiobutton.checked.border.color');\n        background: dt('radiobutton.checked.background');\n    }\n\n    .p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {\n        background: dt('radiobutton.icon.checked.color');\n        transform: translateZ(0) scale(1, 1);\n        visibility: visible;\n    }\n\n    .p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {\n        border-color: dt('radiobutton.checked.hover.border.color');\n        background: dt('radiobutton.checked.hover.background');\n    }\n\n    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {\n        background: dt('radiobutton.icon.checked.hover.color');\n    }\n\n    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {\n        border-color: dt('radiobutton.focus.border.color');\n        box-shadow: dt('radiobutton.focus.ring.shadow');\n        outline: dt('radiobutton.focus.ring.width') dt('radiobutton.focus.ring.style') dt('radiobutton.focus.ring.color');\n        outline-offset: dt('radiobutton.focus.ring.offset');\n    }\n\n    .p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {\n        border-color: dt('radiobutton.checked.focus.border.color');\n    }\n\n    .p-radiobutton.p-invalid > .p-radiobutton-box {\n        border-color: dt('radiobutton.invalid.border.color');\n    }\n\n    .p-radiobutton.p-variant-filled .p-radiobutton-box {\n        background: dt('radiobutton.filled.background');\n    }\n\n    .p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {\n        background: dt('radiobutton.checked.background');\n    }\n\n    .p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {\n        background: dt('radiobutton.checked.hover.background');\n    }\n\n    .p-radiobutton.p-disabled {\n        opacity: 1;\n    }\n\n    .p-radiobutton.p-disabled .p-radiobutton-box {\n        background: dt('radiobutton.disabled.background');\n        border-color: dt('radiobutton.checked.disabled.border.color');\n    }\n\n    .p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {\n        background: dt('radiobutton.icon.disabled.color');\n    }\n\n    .p-radiobutton-sm,\n    .p-radiobutton-sm .p-radiobutton-box {\n        width: dt('radiobutton.sm.width');\n        height: dt('radiobutton.sm.height');\n    }\n\n    .p-radiobutton-sm .p-radiobutton-icon {\n        font-size: dt('radiobutton.icon.sm.size');\n        width: dt('radiobutton.icon.sm.size');\n        height: dt('radiobutton.icon.sm.size');\n    }\n\n    .p-radiobutton-lg,\n    .p-radiobutton-lg .p-radiobutton-box {\n        width: dt('radiobutton.lg.width');\n        height: dt('radiobutton.lg.height');\n    }\n\n    .p-radiobutton-lg .p-radiobutton-icon {\n        font-size: dt('radiobutton.icon.lg.size');\n        width: dt('radiobutton.icon.lg.size');\n        height: dt('radiobutton.icon.lg.size');\n    }\n";

// node_modules/primeng/fesm2022/primeng-radiobutton.mjs
var _c012 = ["input"];
var style8 = (
  /*css*/
  `
    ${style7}

    /* For PrimeNG */
    p-radioButton.ng-invalid.ng-dirty .p-radiobutton-box,
    p-radio-button.ng-invalid.ng-dirty .p-radiobutton-box,
    p-radiobutton.ng-invalid.ng-dirty .p-radiobutton-box {
        border-color: dt('radiobutton.invalid.border.color');
    }
`
);
var classes4 = {
  root: ({
    instance
  }) => ["p-radiobutton p-component", {
    "p-radiobutton-checked": instance.checked,
    "p-disabled": instance.$disabled(),
    "p-invalid": instance.invalid(),
    "p-variant-filled": instance.$variant() === "filled",
    "p-radiobutton-sm p-inputfield-sm": instance.size() === "small",
    "p-radiobutton-lg p-inputfield-lg": instance.size() === "large"
  }],
  box: "p-radiobutton-box",
  input: "p-radiobutton-input",
  icon: "p-radiobutton-icon"
};
var RadioButtonStyle = class _RadioButtonStyle extends BaseStyle {
  name = "radiobutton";
  style = style8;
  classes = classes4;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RadioButtonStyle_BaseFactory;
    return function RadioButtonStyle_Factory(__ngFactoryType__) {
      return (\u0275RadioButtonStyle_BaseFactory || (\u0275RadioButtonStyle_BaseFactory = \u0275\u0275getInheritedFactory(_RadioButtonStyle)))(__ngFactoryType__ || _RadioButtonStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RadioButtonStyle,
    factory: _RadioButtonStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButtonStyle, [{
    type: Injectable
  }], null, null);
})();
var RadioButtonClasses;
(function(RadioButtonClasses2) {
  RadioButtonClasses2["root"] = "p-radiobutton";
  RadioButtonClasses2["box"] = "p-radiobutton-box";
  RadioButtonClasses2["input"] = "p-radiobutton-input";
  RadioButtonClasses2["icon"] = "p-radiobutton-icon";
})(RadioButtonClasses || (RadioButtonClasses = {}));
var RADIOBUTTON_INSTANCE = new InjectionToken("RADIOBUTTON_INSTANCE");
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioButton),
  multi: true
};
var RadioControlRegistry = class _RadioControlRegistry {
  accessors = [];
  add(control, accessor) {
    this.accessors.push([control, accessor]);
  }
  remove(accessor) {
    this.accessors = this.accessors.filter((c) => {
      return c[1] !== accessor;
    });
  }
  select(accessor) {
    this.accessors.forEach((c) => {
      if (this.isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].writeValue(accessor.value);
      }
    });
  }
  isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control) {
      return false;
    }
    return controlPair[0].control.root === accessor.control.control.root && controlPair[1].name() === accessor.name();
  }
  static \u0275fac = function RadioControlRegistry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioControlRegistry)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RadioControlRegistry,
    factory: _RadioControlRegistry.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RadioButton = class _RadioButton extends BaseEditableHolder {
  $pcRadioButton = inject(RADIOBUTTON_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Value of the radiobutton.
   * @group Props
   */
  value;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Used to define a string that labels the input element.
   * @group Props
   */
  ariaLabel;
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Allows to select a boolean value.
   * @group Props
   */
  binary;
  /**
   * Specifies the input variant of the component.
   * @defaultValue undefined
   * @group Props
   */
  variant = input(...ngDevMode ? [void 0, {
    debugName: "variant"
  }] : []);
  /**
   * Specifies the size of the component.
   * @defaultValue undefined
   * @group Props
   */
  size = input(...ngDevMode ? [void 0, {
    debugName: "size"
  }] : []);
  /**
   * Callback to invoke on radio button click.
   * @param {RadioButtonClickEvent} event - Custom click event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Callback to invoke when the receives focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  inputViewChild;
  $variant = computed(() => this.variant() || this.config.inputStyle() || this.config.inputVariant(), ...ngDevMode ? [{
    debugName: "$variant"
  }] : []);
  checked;
  focused;
  control;
  _componentStyle = inject(RadioButtonStyle);
  injector = inject(Injector);
  registry = inject(RadioControlRegistry);
  onInit() {
    this.control = this.injector.get(NgControl);
    this.registry.add(this.control, this);
  }
  onChange(event) {
    if (!this.$disabled()) {
      this.select(event);
    }
  }
  select(event) {
    if (!this.$disabled()) {
      this.checked = true;
      this.writeModelValue(this.checked);
      this.onModelChange(this.value);
      this.registry.select(this);
      this.onClick.emit({
        originalEvent: event,
        value: this.value
      });
    }
  }
  onInputFocus(event) {
    this.focused = true;
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    this.onModelTouched();
    this.onBlur.emit(event);
  }
  /**
   * Applies focus to input field.
   * @group Method
   */
  focus() {
    this.inputViewChild.nativeElement.focus();
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    this.checked = !this.binary ? value == this.value : !!value;
    setModelValue(this.checked);
    this.cd.markForCheck();
  }
  onDestroy() {
    this.registry.remove(this);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RadioButton_BaseFactory;
    return function RadioButton_Factory(__ngFactoryType__) {
      return (\u0275RadioButton_BaseFactory || (\u0275RadioButton_BaseFactory = \u0275\u0275getInheritedFactory(_RadioButton)))(__ngFactoryType__ || _RadioButton);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _RadioButton,
    selectors: [["p-radioButton"], ["p-radiobutton"], ["p-radio-button"]],
    viewQuery: function RadioButton_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c012, 5);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.inputViewChild = _t2.first);
      }
    },
    hostVars: 2,
    hostBindings: function RadioButton_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      value: "value",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      inputId: "inputId",
      ariaLabelledBy: "ariaLabelledBy",
      ariaLabel: "ariaLabel",
      styleClass: "styleClass",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      binary: [2, "binary", "binary", booleanAttribute],
      variant: [1, "variant"],
      size: [1, "size"]
    },
    outputs: {
      onClick: "onClick",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [\u0275\u0275ProvidersFeature([RADIO_VALUE_ACCESSOR, RadioButtonStyle, {
      provide: RADIOBUTTON_INSTANCE,
      useExisting: _RadioButton
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _RadioButton
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 4,
    vars: 20,
    consts: [["input", ""], ["type", "radio", 3, "focus", "blur", "change", "checked", "pAutoFocus", "pBind"], [3, "pBind"]],
    template: function RadioButton_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "input", 1, 0);
        \u0275\u0275listener("focus", function RadioButton_Template_input_focus_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputFocus($event));
        })("blur", function RadioButton_Template_input_blur_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputBlur($event));
        })("change", function RadioButton_Template_input_change_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onChange($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275element(3, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("input"));
        \u0275\u0275property("checked", ctx.checked)("pAutoFocus", ctx.autofocus)("pBind", ctx.ptm("input"));
        \u0275\u0275attribute("id", ctx.inputId)("name", ctx.name())("required", ctx.required() ? "" : void 0)("disabled", ctx.$disabled() ? "" : void 0)("value", ctx.modelValue())("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("aria-checked", ctx.checked)("tabindex", ctx.tabindex);
        \u0275\u0275advance(2);
        \u0275\u0275classMap(ctx.cx("box"));
        \u0275\u0275property("pBind", ctx.ptm("box"));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("icon"));
        \u0275\u0275property("pBind", ctx.ptm("icon"));
      }
    },
    dependencies: [CommonModule, AutoFocus, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButton, [{
    type: Component,
    args: [{
      selector: "p-radioButton, p-radiobutton, p-radio-button",
      standalone: true,
      imports: [CommonModule, AutoFocus, SharedModule, BindModule],
      template: `
        <input
            #input
            [attr.id]="inputId"
            type="radio"
            [class]="cx('input')"
            [attr.name]="name()"
            [attr.required]="required() ? '' : undefined"
            [attr.disabled]="$disabled() ? '' : undefined"
            [checked]="checked"
            [attr.value]="modelValue()"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-label]="ariaLabel"
            [attr.aria-checked]="checked"
            [attr.tabindex]="tabindex"
            (focus)="onInputFocus($event)"
            (blur)="onInputBlur($event)"
            (change)="onChange($event)"
            [pAutoFocus]="autofocus"
            [pBind]="ptm('input')"
        />
        <div [class]="cx('box')" [pBind]="ptm('box')">
            <div [class]="cx('icon')" [pBind]="ptm('icon')"></div>
        </div>
    `,
      providers: [RADIO_VALUE_ACCESSOR, RadioButtonStyle, {
        provide: RADIOBUTTON_INSTANCE,
        useExisting: RadioButton
      }, {
        provide: PARENT_INSTANCE,
        useExisting: RadioButton
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class]": "cx('root')"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    value: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    inputId: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    binary: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    inputViewChild: [{
      type: ViewChild,
      args: ["input"]
    }]
  });
})();
var RadioButtonModule = class _RadioButtonModule {
  static \u0275fac = function RadioButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioButtonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _RadioButtonModule,
    imports: [RadioButton, SharedModule],
    exports: [RadioButton, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [RadioButton, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButtonModule, [{
    type: NgModule,
    args: [{
      imports: [RadioButton, SharedModule],
      exports: [RadioButton, SharedModule]
    }]
  }], null, null);
})();

// src/app/core/services/api-schema.service.ts
var ApiSchemaService = class _ApiSchemaService {
  apiUrlService = inject(ApiUrlService);
  modernSchemaBackendUrl = "https://v1-test-api.cypherview.net";
  schema = {
    SmsGatewayProvider: { typePropertyName: "smsgatewayproviderType" },
    EmailProvider: { typePropertyName: "emailproviderType" },
    ioType: { typePropertyName: "iotypeType" }
  };
  constructor() {
  }
  getTypePropertyNameInternal(entityName) {
    return this.schema[entityName]?.typePropertyName || "type";
  }
  // Public accessor for the type property name
  getEntityTypePropertyName(entityName) {
    return this.getTypePropertyNameInternal(entityName);
  }
  /**
   * Checks if the current API URL corresponds to the backend using the modern property schema.
   * (e.g., [Entity]Type instead of Type)
   *
   * @return {boolean} True if the modern schema is used, false otherwise.
   */
  usesModernSchema() {
    return this.apiUrlService.getCurrentApiUrl() === this.modernSchemaBackendUrl;
  }
  /**
   * Gets the correct property key for the 'type' field based on the active API schema.
   * @param entityName The name of the entity (e.g., 'SmsGatewayProvider', 'EmailProvider').
   * @returns The property key (e.g., 'smsgatewayproviderType' or 'type').
   */
  getTypePropertyKey(entityName) {
    if (this.usesModernSchema()) {
      return `${entityName.charAt(0).toLowerCase()}${entityName.slice(1)}Type`;
    }
    return "type";
  }
  /**
   * Gets the type object from an entity using the correct property key.
   * @param entity The entity object.
   * @param entityName The name of the entity.
   * @returns The type object or undefined.
   */
  getEntityType(entity, entityName) {
    const typePropertyName = this.getTypePropertyKey(entityName);
    if (typePropertyName in entity && typeof entity[typePropertyName] !== "undefined") {
      return entity[typePropertyName];
    }
    return null;
  }
  /**
   * Sets the type object on a payload using the correct property key.
   * @param payload The payload object to modify.
   * @param entityName The name of the entity.
   * @param value The value to set for the type property.
   */
  setEntityType(payload, entityName, value) {
    const typePropertyName = this.getTypePropertyNameInternal(entityName);
    payload[typePropertyName] = value;
  }
  static \u0275fac = function ApiSchemaService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApiSchemaService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiSchemaService, factory: _ApiSchemaService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiSchemaService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@primeuix/styles/dist/scrollpanel/index.mjs
var style9 = "\n    .p-scrollpanel-content-container {\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n        position: relative;\n        z-index: 1;\n        float: left;\n    }\n\n    .p-scrollpanel-content {\n        height: calc(100% + calc(2 * dt('scrollpanel.bar.size')));\n        width: calc(100% + calc(2 * dt('scrollpanel.bar.size')));\n        padding-inline: 0 calc(2 * dt('scrollpanel.bar.size'));\n        padding-block: 0 calc(2 * dt('scrollpanel.bar.size'));\n        position: relative;\n        overflow: auto;\n        box-sizing: border-box;\n        scrollbar-width: none;\n    }\n\n    .p-scrollpanel-content::-webkit-scrollbar {\n        display: none;\n    }\n\n    .p-scrollpanel-bar {\n        position: relative;\n        border-radius: dt('scrollpanel.bar.border.radius');\n        z-index: 2;\n        cursor: pointer;\n        opacity: 0;\n        outline-color: transparent;\n        background: dt('scrollpanel.bar.background');\n        border: 0 none;\n        transition:\n            outline-color dt('scrollpanel.transition.duration'),\n            opacity dt('scrollpanel.transition.duration');\n    }\n\n    .p-scrollpanel-bar:focus-visible {\n        box-shadow: dt('scrollpanel.bar.focus.ring.shadow');\n        outline: dt('scrollpanel.barfocus.ring.width') dt('scrollpanel.bar.focus.ring.style') dt('scrollpanel.bar.focus.ring.color');\n        outline-offset: dt('scrollpanel.barfocus.ring.offset');\n    }\n\n    .p-scrollpanel-bar-y {\n        width: dt('scrollpanel.bar.size');\n        inset-block-start: 0;\n    }\n\n    .p-scrollpanel-bar-x {\n        height: dt('scrollpanel.bar.size');\n        inset-block-end: 0;\n    }\n\n    .p-scrollpanel-hidden {\n        visibility: hidden;\n    }\n\n    .p-scrollpanel:hover .p-scrollpanel-bar,\n    .p-scrollpanel:active .p-scrollpanel-bar {\n        opacity: 1;\n    }\n\n    .p-scrollpanel-grabbed {\n        user-select: none;\n    }\n";

// node_modules/primeng/fesm2022/primeng-scrollpanel.mjs
var _c013 = ["content"];
var _c14 = ["xBar"];
var _c24 = ["yBar"];
var _c33 = ["*"];
function ScrollPanel_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function ScrollPanel_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
var style10 = (
  /*css*/
  `
    ${style9}

    .p-scrollpanel {
        display: block;
    }
`
);
var classes5 = {
  root: "p-scrollpanel p-component",
  contentContainer: "p-scrollpanel-content-container",
  content: "p-scrollpanel-content",
  barX: "p-scrollpanel-bar p-scrollpanel-bar-x",
  barY: "p-scrollpanel-bar p-scrollpanel-bar-y"
};
var ScrollPanelStyle = class _ScrollPanelStyle extends BaseStyle {
  name = "scrollpanel";
  style = style10;
  classes = classes5;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ScrollPanelStyle_BaseFactory;
    return function ScrollPanelStyle_Factory(__ngFactoryType__) {
      return (\u0275ScrollPanelStyle_BaseFactory || (\u0275ScrollPanelStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ScrollPanelStyle)))(__ngFactoryType__ || _ScrollPanelStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ScrollPanelStyle,
    factory: _ScrollPanelStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollPanelStyle, [{
    type: Injectable
  }], null, null);
})();
var ScrollPanelClasses;
(function(ScrollPanelClasses2) {
  ScrollPanelClasses2["root"] = "p-scrollpanel";
  ScrollPanelClasses2["contentContainer"] = "p-scrollpanel-content-container";
  ScrollPanelClasses2["content"] = "p-scrollpanel-content";
  ScrollPanelClasses2["barX"] = "p-scrollpanel-bar-x";
  ScrollPanelClasses2["barY"] = "p-scrollpanel-bar-y";
})(ScrollPanelClasses || (ScrollPanelClasses = {}));
var SCROLLPANEL_INSTANCE = new InjectionToken("SCROLLPANEL_INSTANCE");
var ScrollPanel = class _ScrollPanel extends BaseComponent {
  $pcScrollPanel = inject(SCROLLPANEL_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Step factor to scroll the content while pressing the arrow keys.
   * @group Props
   */
  step = 5;
  contentViewChild;
  xBarViewChild;
  yBarViewChild;
  /**
   * Defines template option for content.
   * @group Templates
   */
  contentTemplate;
  templates;
  _contentTemplate;
  scrollYRatio;
  scrollXRatio;
  timeoutFrame = (fn) => setTimeout(fn, 0);
  initialized = false;
  lastPageY;
  lastPageX;
  isXBarClicked = false;
  isYBarClicked = false;
  lastScrollLeft = 0;
  lastScrollTop = 0;
  orientation = "vertical";
  timer;
  contentId;
  windowResizeListener;
  contentScrollListener;
  mouseEnterListener;
  xBarMouseDownListener;
  yBarMouseDownListener;
  documentMouseMoveListener;
  documentMouseUpListener;
  _componentStyle = inject(ScrollPanelStyle);
  zone = inject(NgZone);
  onInit() {
    this.contentId = s2("pn_id_") + "_content";
  }
  onAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        this.moveBar();
        this.moveBar = this.moveBar.bind(this);
        this.onXBarMouseDown = this.onXBarMouseDown.bind(this);
        this.onYBarMouseDown = this.onYBarMouseDown.bind(this);
        this.onDocumentMouseMove = this.onDocumentMouseMove.bind(this);
        this.onDocumentMouseUp = this.onDocumentMouseUp.bind(this);
        this.windowResizeListener = this.renderer.listen(window, "resize", this.moveBar);
        this.contentScrollListener = this.renderer.listen(this.contentViewChild.nativeElement, "scroll", this.moveBar);
        this.mouseEnterListener = this.renderer.listen(this.contentViewChild.nativeElement, "mouseenter", this.moveBar);
        this.xBarMouseDownListener = this.renderer.listen(this.xBarViewChild.nativeElement, "mousedown", this.onXBarMouseDown);
        this.yBarMouseDownListener = this.renderer.listen(this.yBarViewChild.nativeElement, "mousedown", this.onYBarMouseDown);
        this.calculateContainerHeight();
        this.initialized = true;
      });
    }
  }
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  calculateContainerHeight() {
    let container = this.el.nativeElement;
    let content = this.contentViewChild.nativeElement;
    let xBar = this.xBarViewChild.nativeElement;
    const window2 = this.document.defaultView;
    let containerStyles = window2.getComputedStyle(container), xBarStyles = window2.getComputedStyle(xBar), pureContainerHeight = Tt(container) - parseInt(xBarStyles["height"], 10);
    if (containerStyles["max-height"] != "none" && pureContainerHeight == 0) {
      if (content.offsetHeight + parseInt(xBarStyles["height"], 10) > parseInt(containerStyles["max-height"], 10)) {
        container.style.height = containerStyles["max-height"];
      } else {
        container.style.height = content.offsetHeight + parseFloat(containerStyles.paddingTop) + parseFloat(containerStyles.paddingBottom) + parseFloat(containerStyles.borderTopWidth) + parseFloat(containerStyles.borderBottomWidth) + "px";
      }
    }
  }
  moveBar() {
    let container = this.el.nativeElement;
    let content = this.contentViewChild.nativeElement;
    let xBar = this.xBarViewChild.nativeElement;
    let totalWidth = content.scrollWidth;
    let ownWidth = content.clientWidth;
    let bottom = (container.clientHeight - xBar.clientHeight) * -1;
    this.scrollXRatio = ownWidth / totalWidth;
    let yBar = this.yBarViewChild.nativeElement;
    let totalHeight = content.scrollHeight;
    let ownHeight = content.clientHeight;
    let right = (container.clientWidth - yBar.clientWidth) * -1;
    this.scrollYRatio = ownHeight / totalHeight;
    this.requestAnimationFrame(() => {
      if (this.scrollXRatio >= 1) {
        xBar.setAttribute("data-p-scrollpanel-hidden", "true");
        W(xBar, "p-scrollpanel-hidden");
      } else {
        xBar.setAttribute("data-p-scrollpanel-hidden", "false");
        P(xBar, "p-scrollpanel-hidden");
        const xBarWidth = Math.max(this.scrollXRatio * 100, 10);
        const xBarLeft = Math.abs(content.scrollLeft * (100 - xBarWidth) / (totalWidth - ownWidth));
        xBar.style.cssText = "width:" + xBarWidth + "%; inset-inline-start:" + xBarLeft + "%;bottom:" + bottom + "px;";
      }
      if (this.scrollYRatio >= 1) {
        yBar.setAttribute("data-p-scrollpanel-hidden", "true");
        W(yBar, "p-scrollpanel-hidden");
      } else {
        yBar.setAttribute("data-p-scrollpanel-hidden", "false");
        P(yBar, "p-scrollpanel-hidden");
        const yBarHeight = Math.max(this.scrollYRatio * 100, 10);
        const yBarTop = content.scrollTop * (100 - yBarHeight) / (totalHeight - ownHeight);
        yBar.style.cssText = "height:" + yBarHeight + "%; top: calc(" + yBarTop + "% - " + xBar.clientHeight + "px); inset-inline-end:" + right + "px;";
      }
    });
    this.cd.markForCheck();
  }
  onScroll(event) {
    if (this.lastScrollLeft !== event.target.scrollLeft) {
      this.lastScrollLeft = event.target.scrollLeft;
      this.orientation = "horizontal";
    } else if (this.lastScrollTop !== event.target.scrollTop) {
      this.lastScrollTop = event.target.scrollTop;
      this.orientation = "vertical";
    }
    this.moveBar();
  }
  onKeyDown(event) {
    if (this.orientation === "vertical") {
      switch (event.code) {
        case "ArrowDown": {
          this.setTimer("scrollTop", this.step);
          event.preventDefault();
          break;
        }
        case "ArrowUp": {
          this.setTimer("scrollTop", this.step * -1);
          event.preventDefault();
          break;
        }
        case "ArrowLeft":
        case "ArrowRight": {
          event.preventDefault();
          break;
        }
        default:
          break;
      }
    } else if (this.orientation === "horizontal") {
      switch (event.code) {
        case "ArrowRight": {
          this.setTimer("scrollLeft", this.step);
          event.preventDefault();
          break;
        }
        case "ArrowLeft": {
          this.setTimer("scrollLeft", this.step * -1);
          event.preventDefault();
          break;
        }
        case "ArrowDown":
        case "ArrowUp": {
          event.preventDefault();
          break;
        }
        default:
          break;
      }
    }
  }
  onKeyUp() {
    this.clearTimer();
  }
  repeat(bar, step) {
    this.contentViewChild?.nativeElement && (this.contentViewChild.nativeElement[bar] += step);
    this.moveBar();
  }
  setTimer(bar, step) {
    this.clearTimer();
    this.timer = setTimeout(() => {
      this.repeat(bar, step);
    }, 40);
  }
  clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
  bindDocumentMouseListeners() {
    if (!this.documentMouseMoveListener) {
      this.documentMouseMoveListener = (e) => {
        this.onDocumentMouseMove(e);
      };
      this.document.addEventListener("mousemove", this.documentMouseMoveListener);
    }
    if (!this.documentMouseUpListener) {
      this.documentMouseUpListener = (e) => {
        this.onDocumentMouseUp(e);
      };
      this.document.addEventListener("mouseup", this.documentMouseUpListener);
    }
  }
  unbindDocumentMouseListeners() {
    if (this.documentMouseMoveListener) {
      this.document.removeEventListener("mousemove", this.documentMouseMoveListener);
      this.documentMouseMoveListener = null;
    }
    if (this.documentMouseUpListener) {
      document.removeEventListener("mouseup", this.documentMouseUpListener);
      this.documentMouseUpListener = null;
    }
  }
  onYBarMouseDown(e) {
    this.isYBarClicked = true;
    this.yBarViewChild?.nativeElement?.focus();
    this.lastPageY = e.pageY;
    this.yBarViewChild?.nativeElement?.setAttribute("data-p-scrollpanel-grabbed", "true");
    W(this.yBarViewChild.nativeElement, "p-scrollpanel-grabbed");
    this.document.body.setAttribute("data-p-scrollpanel-grabbed", "true");
    W(this.document.body, "p-scrollpanel-grabbed");
    this.bindDocumentMouseListeners();
    e.preventDefault();
  }
  onXBarMouseDown(e) {
    this.isXBarClicked = true;
    this.xBarViewChild?.nativeElement?.focus();
    this.lastPageX = e.pageX;
    this.xBarViewChild?.nativeElement?.setAttribute("data-p-scrollpanel-grabbed", "false");
    W(this.xBarViewChild.nativeElement, "p-scrollpanel-grabbed");
    this.document.body.setAttribute("data-p-scrollpanel-grabbed", "false");
    W(this.document.body, "p-scrollpanel-grabbed");
    this.bindDocumentMouseListeners();
    e.preventDefault();
  }
  onDocumentMouseMove(e) {
    if (this.isXBarClicked) {
      this.onMouseMoveForXBar(e);
    } else if (this.isYBarClicked) {
      this.onMouseMoveForYBar(e);
    } else {
      this.onMouseMoveForXBar(e);
      this.onMouseMoveForYBar(e);
    }
  }
  onMouseMoveForXBar(e) {
    let deltaX = e.pageX - this.lastPageX;
    this.lastPageX = e.pageX;
    this.requestAnimationFrame(() => {
      this.contentViewChild.nativeElement.scrollLeft += deltaX / this.scrollXRatio;
    });
  }
  onMouseMoveForYBar(e) {
    let deltaY = e.pageY - this.lastPageY;
    this.lastPageY = e.pageY;
    this.requestAnimationFrame(() => {
      this.contentViewChild.nativeElement.scrollTop += deltaY / this.scrollYRatio;
    });
  }
  /**
   * Scrolls the top location to the given value.
   * @param scrollTop
   * @group Method
   */
  scrollTop(scrollTop) {
    let scrollableHeight = this.contentViewChild.nativeElement.scrollHeight - this.contentViewChild.nativeElement.clientHeight;
    scrollTop = scrollTop > scrollableHeight ? scrollableHeight : scrollTop > 0 ? scrollTop : 0;
    this.contentViewChild.nativeElement.scrollTop = scrollTop;
  }
  onFocus(event) {
    if (this.xBarViewChild?.nativeElement?.isSameNode(event.target)) {
      this.orientation = "horizontal";
    } else if (this.yBarViewChild?.nativeElement?.isSameNode(event.target)) {
      this.orientation = "vertical";
    }
  }
  onBlur() {
    if (this.orientation === "horizontal") {
      this.orientation = "vertical";
    }
  }
  onDocumentMouseUp(e) {
    this.yBarViewChild?.nativeElement?.setAttribute("data-p-scrollpanel-grabbed", "false");
    P(this.yBarViewChild.nativeElement, "p-scrollpanel-grabbed");
    this.xBarViewChild?.nativeElement?.setAttribute("data-p-scrollpanel-grabbed", "false");
    P(this.xBarViewChild.nativeElement, "p-scrollpanel-grabbed");
    this.document.body.setAttribute("data-p-scrollpanel-grabbed", "false");
    P(this.document.body, "p-scrollpanel-grabbed");
    this.unbindDocumentMouseListeners();
    this.isXBarClicked = false;
    this.isYBarClicked = false;
  }
  requestAnimationFrame(f) {
    let frame = window.requestAnimationFrame || this.timeoutFrame;
    frame(f);
  }
  unbindListeners() {
    if (this.windowResizeListener) {
      this.windowResizeListener();
      this.windowResizeListener = null;
    }
    if (this.contentScrollListener) {
      this.contentScrollListener();
      this.contentScrollListener = null;
    }
    if (this.mouseEnterListener) {
      this.mouseEnterListener();
      this.mouseEnterListener = null;
    }
    if (this.xBarMouseDownListener) {
      this.xBarMouseDownListener();
      this.xBarMouseDownListener = null;
    }
    if (this.yBarMouseDownListener) {
      this.yBarMouseDownListener();
      this.yBarMouseDownListener = null;
    }
  }
  onDestroy() {
    if (this.initialized) {
      this.unbindListeners();
    }
  }
  /**
   * Refreshes the position and size of the scrollbar.
   * @group Method
   */
  refresh() {
    this.moveBar();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ScrollPanel_BaseFactory;
    return function ScrollPanel_Factory(__ngFactoryType__) {
      return (\u0275ScrollPanel_BaseFactory || (\u0275ScrollPanel_BaseFactory = \u0275\u0275getInheritedFactory(_ScrollPanel)))(__ngFactoryType__ || _ScrollPanel);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ScrollPanel,
    selectors: [["p-scroll-panel"], ["p-scrollPanel"], ["p-scrollpanel"]],
    contentQueries: function ScrollPanel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c013, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.templates = _t2);
      }
    },
    viewQuery: function ScrollPanel_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c013, 5);
        \u0275\u0275viewQuery(_c14, 5);
        \u0275\u0275viewQuery(_c24, 5);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.contentViewChild = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.xBarViewChild = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.yBarViewChild = _t2.first);
      }
    },
    hostVars: 2,
    hostBindings: function ScrollPanel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      styleClass: "styleClass",
      step: [2, "step", "step", numberAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([ScrollPanelStyle, {
      provide: SCROLLPANEL_INSTANCE,
      useExisting: _ScrollPanel
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ScrollPanel
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c33,
    decls: 9,
    vars: 20,
    consts: [["content", ""], ["xBar", ""], ["yBar", ""], [3, "pBind"], [3, "mouseenter", "scroll", "pBind"], [4, "ngTemplateOutlet"], ["tabindex", "0", "role", "scrollbar", 3, "mousedown", "keydown", "keyup", "focus", "blur", "pBind"], ["tabindex", "0", "role", "scrollbar", 3, "mousedown", "keydown", "keyup", "focus", "pBind"]],
    template: function ScrollPanel_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 3)(1, "div", 4, 0);
        \u0275\u0275listener("mouseenter", function ScrollPanel_Template_div_mouseenter_1_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.moveBar());
        })("scroll", function ScrollPanel_Template_div_scroll_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onScroll($event));
        });
        \u0275\u0275conditionalCreate(3, ScrollPanel_Conditional_3_Template, 1, 0);
        \u0275\u0275template(4, ScrollPanel_ng_container_4_Template, 1, 0, "ng-container", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 6, 1);
        \u0275\u0275listener("mousedown", function ScrollPanel_Template_div_mousedown_5_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onXBarMouseDown($event));
        })("keydown", function ScrollPanel_Template_div_keydown_5_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onKeyDown($event));
        })("keyup", function ScrollPanel_Template_div_keyup_5_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onKeyUp());
        })("focus", function ScrollPanel_Template_div_focus_5_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onFocus($event));
        })("blur", function ScrollPanel_Template_div_blur_5_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onBlur());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 7, 2);
        \u0275\u0275listener("mousedown", function ScrollPanel_Template_div_mousedown_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onYBarMouseDown($event));
        })("keydown", function ScrollPanel_Template_div_keydown_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onKeyDown($event));
        })("keyup", function ScrollPanel_Template_div_keyup_7_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onKeyUp());
        })("focus", function ScrollPanel_Template_div_focus_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onFocus($event));
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("contentContainer"));
        \u0275\u0275property("pBind", ctx.ptm("contentContainer"));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("content"));
        \u0275\u0275property("pBind", ctx.ptm("content"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.contentTemplate && !ctx._contentTemplate ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate || ctx._contentTemplate);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("barX"));
        \u0275\u0275property("pBind", ctx.ptm("barX"));
        \u0275\u0275attribute("aria-orientation", "horizontal")("aria-valuenow", ctx.lastScrollLeft)("aria-controls", ctx.contentId);
        \u0275\u0275advance(2);
        \u0275\u0275classMap(ctx.cx("barY"));
        \u0275\u0275property("pBind", ctx.ptm("barY"));
        \u0275\u0275attribute("aria-orientation", "vertical")("aria-valuenow", ctx.lastScrollTop)("aria-controls", ctx.contentId);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollPanel, [{
    type: Component,
    args: [{
      selector: "p-scroll-panel, p-scrollPanel, p-scrollpanel",
      standalone: true,
      imports: [CommonModule, SharedModule, BindModule],
      template: `
        <div [pBind]="ptm('contentContainer')" [class]="cx('contentContainer')">
            <div #content [pBind]="ptm('content')" [class]="cx('content')" (mouseenter)="moveBar()" (scroll)="onScroll($event)">
                @if (!contentTemplate && !_contentTemplate) {
                    <ng-content></ng-content>
                }
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
            </div>
        </div>
        <div
            #xBar
            [pBind]="ptm('barX')"
            [class]="cx('barX')"
            tabindex="0"
            role="scrollbar"
            [attr.aria-orientation]="'horizontal'"
            [attr.aria-valuenow]="lastScrollLeft"
            [attr.aria-controls]="contentId"
            (mousedown)="onXBarMouseDown($event)"
            (keydown)="onKeyDown($event)"
            (keyup)="onKeyUp()"
            (focus)="onFocus($event)"
            (blur)="onBlur()"
        ></div>
        <div
            #yBar
            [pBind]="ptm('barY')"
            [class]="cx('barY')"
            tabindex="0"
            role="scrollbar"
            [attr.aria-orientation]="'vertical'"
            [attr.aria-valuenow]="lastScrollTop"
            [attr.aria-controls]="contentId"
            (mousedown)="onYBarMouseDown($event)"
            (keydown)="onKeyDown($event)"
            (keyup)="onKeyUp()"
            (focus)="onFocus($event)"
        ></div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ScrollPanelStyle, {
        provide: SCROLLPANEL_INSTANCE,
        useExisting: ScrollPanel
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ScrollPanel
      }],
      host: {
        "[class]": 'cn(cx("root"), styleClass)'
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    step: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    contentViewChild: [{
      type: ViewChild,
      args: ["content"]
    }],
    xBarViewChild: [{
      type: ViewChild,
      args: ["xBar"]
    }],
    yBarViewChild: [{
      type: ViewChild,
      args: ["yBar"]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ScrollPanelModule = class _ScrollPanelModule {
  static \u0275fac = function ScrollPanelModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollPanelModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ScrollPanelModule,
    imports: [ScrollPanel, SharedModule, BindModule],
    exports: [ScrollPanel, SharedModule, BindModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ScrollPanel, SharedModule, BindModule, SharedModule, BindModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollPanelModule, [{
    type: NgModule,
    args: [{
      imports: [ScrollPanel, SharedModule, BindModule],
      exports: [ScrollPanel, SharedModule, BindModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/togglebutton/index.mjs
var style11 = "\n    .p-togglebutton {\n        display: inline-flex;\n        cursor: pointer;\n        user-select: none;\n        overflow: hidden;\n        position: relative;\n        color: dt('togglebutton.color');\n        background: dt('togglebutton.background');\n        border: 1px solid dt('togglebutton.border.color');\n        padding: dt('togglebutton.padding');\n        font-size: 1rem;\n        font-family: inherit;\n        font-feature-settings: inherit;\n        transition:\n            background dt('togglebutton.transition.duration'),\n            color dt('togglebutton.transition.duration'),\n            border-color dt('togglebutton.transition.duration'),\n            outline-color dt('togglebutton.transition.duration'),\n            box-shadow dt('togglebutton.transition.duration');\n        border-radius: dt('togglebutton.border.radius');\n        outline-color: transparent;\n        font-weight: dt('togglebutton.font.weight');\n    }\n\n    .p-togglebutton-content {\n        display: inline-flex;\n        flex: 1 1 auto;\n        align-items: center;\n        justify-content: center;\n        gap: dt('togglebutton.gap');\n        padding: dt('togglebutton.content.padding');\n        background: transparent;\n        border-radius: dt('togglebutton.content.border.radius');\n        transition:\n            background dt('togglebutton.transition.duration'),\n            color dt('togglebutton.transition.duration'),\n            border-color dt('togglebutton.transition.duration'),\n            outline-color dt('togglebutton.transition.duration'),\n            box-shadow dt('togglebutton.transition.duration');\n    }\n\n    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {\n        background: dt('togglebutton.hover.background');\n        color: dt('togglebutton.hover.color');\n    }\n\n    .p-togglebutton.p-togglebutton-checked {\n        background: dt('togglebutton.checked.background');\n        border-color: dt('togglebutton.checked.border.color');\n        color: dt('togglebutton.checked.color');\n    }\n\n    .p-togglebutton-checked .p-togglebutton-content {\n        background: dt('togglebutton.content.checked.background');\n        box-shadow: dt('togglebutton.content.checked.shadow');\n    }\n\n    .p-togglebutton:focus-visible {\n        box-shadow: dt('togglebutton.focus.ring.shadow');\n        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');\n        outline-offset: dt('togglebutton.focus.ring.offset');\n    }\n\n    .p-togglebutton.p-invalid {\n        border-color: dt('togglebutton.invalid.border.color');\n    }\n\n    .p-togglebutton:disabled {\n        opacity: 1;\n        cursor: default;\n        background: dt('togglebutton.disabled.background');\n        border-color: dt('togglebutton.disabled.border.color');\n        color: dt('togglebutton.disabled.color');\n    }\n\n    .p-togglebutton-label,\n    .p-togglebutton-icon {\n        position: relative;\n        transition: none;\n    }\n\n    .p-togglebutton-icon {\n        color: dt('togglebutton.icon.color');\n    }\n\n    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {\n        color: dt('togglebutton.icon.hover.color');\n    }\n\n    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {\n        color: dt('togglebutton.icon.checked.color');\n    }\n\n    .p-togglebutton:disabled .p-togglebutton-icon {\n        color: dt('togglebutton.icon.disabled.color');\n    }\n\n    .p-togglebutton-sm {\n        padding: dt('togglebutton.sm.padding');\n        font-size: dt('togglebutton.sm.font.size');\n    }\n\n    .p-togglebutton-sm .p-togglebutton-content {\n        padding: dt('togglebutton.content.sm.padding');\n    }\n\n    .p-togglebutton-lg {\n        padding: dt('togglebutton.lg.padding');\n        font-size: dt('togglebutton.lg.font.size');\n    }\n\n    .p-togglebutton-lg .p-togglebutton-content {\n        padding: dt('togglebutton.content.lg.padding');\n    }\n\n    .p-togglebutton-fluid {\n        width: 100%;\n    }\n";

// node_modules/primeng/fesm2022/primeng-togglebutton.mjs
var _c014 = ["icon"];
var _c15 = ["content"];
var _c25 = (a0) => ({
  $implicit: a0
});
function ToggleButton_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ToggleButton_Conditional_2_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("icon"), ctx_r0.checked ? ctx_r0.onIcon : ctx_r0.offIcon, ctx_r0.iconPos === "left" ? ctx_r0.cx("iconLeft") : ctx_r0.cx("iconRight")));
    \u0275\u0275property("pBind", ctx_r0.ptm("icon"));
  }
}
function ToggleButton_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ToggleButton_Conditional_2_Conditional_0_Conditional_0_Template, 1, 3, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.onIcon || ctx_r0.offIcon ? 0 : -1);
  }
}
function ToggleButton_Conditional_2_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ToggleButton_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ToggleButton_Conditional_2_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.iconTemplate || ctx_r0._iconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c25, ctx_r0.checked));
  }
}
function ToggleButton_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ToggleButton_Conditional_2_Conditional_0_Template, 1, 1)(1, ToggleButton_Conditional_2_Conditional_1_Template, 1, 4, "ng-container");
    \u0275\u0275elementStart(2, "span", 0);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r0.iconTemplate ? 0 : 1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.cx("label"));
    \u0275\u0275property("pBind", ctx_r0.ptm("label"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.checked ? ctx_r0.hasOnLabel ? ctx_r0.onLabel : "\xA0" : ctx_r0.hasOffLabel ? ctx_r0.offLabel : "\xA0");
  }
}
var style12 = (
  /*css*/
  `
    ${style11}

    /* For PrimeNG (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }

    .p-togglebutton.ng-invalid.ng-dirty {
        border-color: dt('togglebutton.invalid.border.color');
    }
`
);
var classes6 = {
  root: ({
    instance
  }) => ["p-togglebutton p-component", {
    "p-togglebutton-checked": instance.checked,
    "p-invalid": instance.invalid(),
    "p-disabled": instance.$disabled(),
    "p-togglebutton-sm p-inputfield-sm": instance.size === "small",
    "p-togglebutton-lg p-inputfield-lg": instance.size === "large",
    "p-togglebutton-fluid": instance.fluid()
  }],
  content: "p-togglebutton-content",
  icon: "p-togglebutton-icon",
  iconLeft: "p-togglebutton-icon-left",
  iconRight: "p-togglebutton-icon-right",
  label: "p-togglebutton-label"
};
var ToggleButtonStyle = class _ToggleButtonStyle extends BaseStyle {
  name = "togglebutton";
  style = style12;
  classes = classes6;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ToggleButtonStyle_BaseFactory;
    return function ToggleButtonStyle_Factory(__ngFactoryType__) {
      return (\u0275ToggleButtonStyle_BaseFactory || (\u0275ToggleButtonStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ToggleButtonStyle)))(__ngFactoryType__ || _ToggleButtonStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ToggleButtonStyle,
    factory: _ToggleButtonStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButtonStyle, [{
    type: Injectable
  }], null, null);
})();
var ToggleButtonClasses;
(function(ToggleButtonClasses2) {
  ToggleButtonClasses2["root"] = "p-togglebutton";
  ToggleButtonClasses2["icon"] = "p-togglebutton-icon";
  ToggleButtonClasses2["iconLeft"] = "p-togglebutton-icon-left";
  ToggleButtonClasses2["iconRight"] = "p-togglebutton-icon-right";
  ToggleButtonClasses2["label"] = "p-togglebutton-label";
})(ToggleButtonClasses || (ToggleButtonClasses = {}));
var TOGGLEBUTTON_INSTANCE = new InjectionToken("TOGGLEBUTTON_INSTANCE");
var TOGGLEBUTTON_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ToggleButton),
  multi: true
};
var ToggleButton = class _ToggleButton extends BaseEditableHolder {
  $pcToggleButton = inject(TOGGLEBUTTON_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  onKeyDown(event) {
    switch (event.code) {
      case "Enter":
        this.toggle(event);
        event.preventDefault();
        break;
      case "Space":
        this.toggle(event);
        event.preventDefault();
        break;
    }
  }
  toggle(event) {
    if (!this.$disabled() && !(this.allowEmpty === false && this.checked)) {
      this.checked = !this.checked;
      this.writeModelValue(this.checked);
      this.onModelChange(this.checked);
      this.onModelTouched();
      this.onChange.emit({
        originalEvent: event,
        checked: this.checked
      });
      this.cd.markForCheck();
    }
  }
  /**
   * Label for the on state.
   * @group Props
   */
  onLabel = "Yes";
  /**
   * Label for the off state.
   * @group Props
   */
  offLabel = "No";
  /**
   * Icon for the on state.
   * @group Props
   */
  onIcon;
  /**
   * Icon for the off state.
   * @group Props
   */
  offIcon;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Style class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Position of the icon.
   * @group Props
   */
  iconPos = "left";
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Defines the size of the component.
   * @group Props
   */
  size;
  /**
   * Whether selection can not be cleared.
   * @group Props
   */
  allowEmpty;
  /**
   * Spans 100% width of the container when enabled.
   * @defaultValue undefined
   * @group Props
   */
  fluid = input(void 0, ...ngDevMode ? [{
    debugName: "fluid",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  /**
   * Callback to invoke on value change.
   * @param {ToggleButtonChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Custom icon template.
   * @group Templates
   */
  iconTemplate;
  /**
   * Custom content template.
   * @group Templates
   */
  contentTemplate;
  templates;
  checked = false;
  onInit() {
    if (this.checked === null || this.checked === void 0) {
      this.checked = false;
    }
  }
  _componentStyle = inject(ToggleButtonStyle);
  onBlur() {
    this.onModelTouched();
  }
  get hasOnLabel() {
    return this.onLabel && this.onLabel.length > 0;
  }
  get hasOffLabel() {
    return this.offLabel && this.offLabel.length > 0;
  }
  get active() {
    return this.checked === true;
  }
  _iconTemplate;
  _contentTemplate;
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "icon":
          this._iconTemplate = item.template;
          break;
        case "content":
          this._contentTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    this.checked = value;
    setModelValue(value);
    this.cd.markForCheck();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ToggleButton_BaseFactory;
    return function ToggleButton_Factory(__ngFactoryType__) {
      return (\u0275ToggleButton_BaseFactory || (\u0275ToggleButton_BaseFactory = \u0275\u0275getInheritedFactory(_ToggleButton)))(__ngFactoryType__ || _ToggleButton);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ToggleButton,
    selectors: [["p-toggleButton"], ["p-togglebutton"], ["p-toggle-button"]],
    contentQueries: function ToggleButton_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c014, 4);
        \u0275\u0275contentQuery(dirIndex, _c15, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.iconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.templates = _t2);
      }
    },
    hostVars: 8,
    hostBindings: function ToggleButton_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function ToggleButton_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        })("click", function ToggleButton_click_HostBindingHandler($event) {
          return ctx.toggle($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("aria-pressed", ctx.checked ? "true" : "false")("role", "button")("tabindex", ctx.tabindex !== void 0 ? ctx.tabindex : !ctx.$disabled() ? 0 : -1)("data-pc-name", "togglebutton");
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      onLabel: "onLabel",
      offLabel: "offLabel",
      onIcon: "onIcon",
      offIcon: "offIcon",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      styleClass: "styleClass",
      inputId: "inputId",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      iconPos: "iconPos",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      size: "size",
      allowEmpty: "allowEmpty",
      fluid: [1, "fluid"]
    },
    outputs: {
      onChange: "onChange"
    },
    features: [\u0275\u0275ProvidersFeature([TOGGLEBUTTON_VALUE_ACCESSOR, ToggleButtonStyle, {
      provide: TOGGLEBUTTON_INSTANCE,
      useExisting: _ToggleButton
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ToggleButton
    }]), \u0275\u0275HostDirectivesFeature([Ripple, Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 3,
    vars: 8,
    consts: [[3, "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", "pBind"]],
    template: function ToggleButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "span", 0);
        \u0275\u0275template(1, ToggleButton_ng_container_1_Template, 1, 0, "ng-container", 1);
        \u0275\u0275conditionalCreate(2, ToggleButton_Conditional_2_Template, 4, 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("content"));
        \u0275\u0275property("pBind", ctx.ptm("content"));
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate || ctx._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(6, _c25, ctx.checked));
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.contentTemplate ? 2 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButton, [{
    type: Component,
    args: [{
      selector: "p-toggleButton, p-togglebutton, p-toggle-button",
      standalone: true,
      imports: [CommonModule, SharedModule, BindModule],
      hostDirectives: [{
        directive: Ripple
      }, Bind],
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[attr.aria-labelledby]": "ariaLabelledBy",
        "[attr.aria-label]": "ariaLabel",
        "[attr.aria-pressed]": 'checked ? "true" : "false"',
        "[attr.role]": '"button"',
        "[attr.tabindex]": "tabindex !== undefined ? tabindex : (!$disabled() ? 0 : -1)",
        "[attr.data-pc-name]": "'togglebutton'"
      },
      template: `<span [class]="cx('content')" [pBind]="ptm('content')">
        <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: checked }"></ng-container>
        @if (!contentTemplate) {
            @if (!iconTemplate) {
                @if (onIcon || offIcon) {
                    <span [class]="cn(cx('icon'), checked ? this.onIcon : this.offIcon, iconPos === 'left' ? cx('iconLeft') : cx('iconRight'))" [pBind]="ptm('icon')"></span>
                }
            } @else {
                <ng-container *ngTemplateOutlet="iconTemplate || _iconTemplate; context: { $implicit: checked }"></ng-container>
            }
            <span [class]="cx('label')" [pBind]="ptm('label')">{{ checked ? (hasOnLabel ? onLabel : '\xA0') : hasOffLabel ? offLabel : '\xA0' }}</span>
        }
    </span>`,
      providers: [TOGGLEBUTTON_VALUE_ACCESSOR, ToggleButtonStyle, {
        provide: TOGGLEBUTTON_INSTANCE,
        useExisting: ToggleButton
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ToggleButton
      }],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    onKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }],
    toggle: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onLabel: [{
      type: Input
    }],
    offLabel: [{
      type: Input
    }],
    onIcon: [{
      type: Input
    }],
    offIcon: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    iconPos: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    size: [{
      type: Input
    }],
    allowEmpty: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon", {
        descendants: false
      }]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ToggleButtonModule = class _ToggleButtonModule {
  static \u0275fac = function ToggleButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToggleButtonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ToggleButtonModule,
    imports: [ToggleButton, SharedModule],
    exports: [ToggleButton, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ToggleButton, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButtonModule, [{
    type: NgModule,
    args: [{
      imports: [ToggleButton, SharedModule],
      exports: [ToggleButton, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/multiselect/index.mjs
var style13 = "\n    .p-multiselect {\n        display: inline-flex;\n        cursor: pointer;\n        position: relative;\n        user-select: none;\n        background: dt('multiselect.background');\n        border: 1px solid dt('multiselect.border.color');\n        transition:\n            background dt('multiselect.transition.duration'),\n            color dt('multiselect.transition.duration'),\n            border-color dt('multiselect.transition.duration'),\n            outline-color dt('multiselect.transition.duration'),\n            box-shadow dt('multiselect.transition.duration');\n        border-radius: dt('multiselect.border.radius');\n        outline-color: transparent;\n        box-shadow: dt('multiselect.shadow');\n    }\n\n    .p-multiselect:not(.p-disabled):hover {\n        border-color: dt('multiselect.hover.border.color');\n    }\n\n    .p-multiselect:not(.p-disabled).p-focus {\n        border-color: dt('multiselect.focus.border.color');\n        box-shadow: dt('multiselect.focus.ring.shadow');\n        outline: dt('multiselect.focus.ring.width') dt('multiselect.focus.ring.style') dt('multiselect.focus.ring.color');\n        outline-offset: dt('multiselect.focus.ring.offset');\n    }\n\n    .p-multiselect.p-variant-filled {\n        background: dt('multiselect.filled.background');\n    }\n\n    .p-multiselect.p-variant-filled:not(.p-disabled):hover {\n        background: dt('multiselect.filled.hover.background');\n    }\n\n    .p-multiselect.p-variant-filled.p-focus {\n        background: dt('multiselect.filled.focus.background');\n    }\n\n    .p-multiselect.p-invalid {\n        border-color: dt('multiselect.invalid.border.color');\n    }\n\n    .p-multiselect.p-disabled {\n        opacity: 1;\n        background: dt('multiselect.disabled.background');\n    }\n\n    .p-multiselect-dropdown {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-shrink: 0;\n        background: transparent;\n        color: dt('multiselect.dropdown.color');\n        width: dt('multiselect.dropdown.width');\n        border-start-end-radius: dt('multiselect.border.radius');\n        border-end-end-radius: dt('multiselect.border.radius');\n    }\n\n    .p-multiselect-clear-icon {\n        align-self: center;\n        color: dt('multiselect.clear.icon.color');\n        inset-inline-end: dt('multiselect.dropdown.width');\n    }\n\n    .p-multiselect-label-container {\n        overflow: hidden;\n        flex: 1 1 auto;\n        cursor: pointer;\n    }\n\n    .p-multiselect-label {\n        white-space: nowrap;\n        cursor: pointer;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        padding: dt('multiselect.padding.y') dt('multiselect.padding.x');\n        color: dt('multiselect.color');\n    }\n\n    .p-multiselect-display-chip .p-multiselect-label {\n        display: flex;\n        align-items: center;\n        gap: calc(dt('multiselect.padding.y') / 2);\n    }\n\n    .p-multiselect-label.p-placeholder {\n        color: dt('multiselect.placeholder.color');\n    }\n\n    .p-multiselect.p-invalid .p-multiselect-label.p-placeholder {\n        color: dt('multiselect.invalid.placeholder.color');\n    }\n\n    .p-multiselect.p-disabled .p-multiselect-label {\n        color: dt('multiselect.disabled.color');\n    }\n\n    .p-multiselect-label-empty {\n        overflow: hidden;\n        visibility: hidden;\n    }\n\n    .p-multiselect-overlay {\n        position: absolute;\n        top: 0;\n        left: 0;\n        background: dt('multiselect.overlay.background');\n        color: dt('multiselect.overlay.color');\n        border: 1px solid dt('multiselect.overlay.border.color');\n        border-radius: dt('multiselect.overlay.border.radius');\n        box-shadow: dt('multiselect.overlay.shadow');\n        min-width: 100%;\n    }\n\n    .p-multiselect-header {\n        display: flex;\n        align-items: center;\n        padding: dt('multiselect.list.header.padding');\n    }\n\n    .p-multiselect-header .p-checkbox {\n        margin-inline-end: dt('multiselect.option.gap');\n    }\n\n    .p-multiselect-filter-container {\n        flex: 1 1 auto;\n    }\n\n    .p-multiselect-filter {\n        width: 100%;\n    }\n\n    .p-multiselect-list-container {\n        overflow: auto;\n    }\n\n    .p-multiselect-list {\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n        padding: dt('multiselect.list.padding');\n        display: flex;\n        flex-direction: column;\n        gap: dt('multiselect.list.gap');\n    }\n\n    .p-multiselect-option {\n        cursor: pointer;\n        font-weight: normal;\n        white-space: nowrap;\n        position: relative;\n        overflow: hidden;\n        display: flex;\n        align-items: center;\n        gap: dt('multiselect.option.gap');\n        padding: dt('multiselect.option.padding');\n        border: 0 none;\n        color: dt('multiselect.option.color');\n        background: transparent;\n        transition:\n            background dt('multiselect.transition.duration'),\n            color dt('multiselect.transition.duration'),\n            border-color dt('multiselect.transition.duration'),\n            box-shadow dt('multiselect.transition.duration'),\n            outline-color dt('multiselect.transition.duration');\n        border-radius: dt('multiselect.option.border.radius');\n    }\n\n    .p-multiselect-option:not(.p-multiselect-option-selected):not(.p-disabled).p-focus {\n        background: dt('multiselect.option.focus.background');\n        color: dt('multiselect.option.focus.color');\n    }\n\n    .p-multiselect-option.p-multiselect-option-selected {\n        background: dt('multiselect.option.selected.background');\n        color: dt('multiselect.option.selected.color');\n    }\n\n    .p-multiselect-option.p-multiselect-option-selected.p-focus {\n        background: dt('multiselect.option.selected.focus.background');\n        color: dt('multiselect.option.selected.focus.color');\n    }\n\n    .p-multiselect-option-group {\n        cursor: auto;\n        margin: 0;\n        padding: dt('multiselect.option.group.padding');\n        background: dt('multiselect.option.group.background');\n        color: dt('multiselect.option.group.color');\n        font-weight: dt('multiselect.option.group.font.weight');\n    }\n\n    .p-multiselect-empty-message {\n        padding: dt('multiselect.empty.message.padding');\n    }\n\n    .p-multiselect-label .p-chip {\n        padding-block-start: calc(dt('multiselect.padding.y') / 2);\n        padding-block-end: calc(dt('multiselect.padding.y') / 2);\n        border-radius: dt('multiselect.chip.border.radius');\n    }\n\n    .p-multiselect-label:has(.p-chip) {\n        padding: calc(dt('multiselect.padding.y') / 2) calc(dt('multiselect.padding.x') / 2);\n    }\n\n    .p-multiselect-fluid {\n        display: flex;\n        width: 100%;\n    }\n\n    .p-multiselect-sm .p-multiselect-label {\n        font-size: dt('multiselect.sm.font.size');\n        padding-block: dt('multiselect.sm.padding.y');\n        padding-inline: dt('multiselect.sm.padding.x');\n    }\n\n    .p-multiselect-sm .p-multiselect-dropdown .p-icon {\n        font-size: dt('multiselect.sm.font.size');\n        width: dt('multiselect.sm.font.size');\n        height: dt('multiselect.sm.font.size');\n    }\n\n    .p-multiselect-lg .p-multiselect-label {\n        font-size: dt('multiselect.lg.font.size');\n        padding-block: dt('multiselect.lg.padding.y');\n        padding-inline: dt('multiselect.lg.padding.x');\n    }\n\n    .p-multiselect-lg .p-multiselect-dropdown .p-icon {\n        font-size: dt('multiselect.lg.font.size');\n        width: dt('multiselect.lg.font.size');\n        height: dt('multiselect.lg.font.size');\n    }\n\n    .p-floatlabel-in .p-multiselect-filter {\n        padding-block-start: dt('multiselect.padding.y');\n        padding-block-end: dt('multiselect.padding.y');\n    }\n";

// node_modules/primeng/fesm2022/primeng-multiselect.mjs
var _c015 = ["pMultiSelectItem", ""];
var _c16 = (a0) => ({
  $implicit: a0
});
var _c26 = (a0, a1) => ({
  checked: a0,
  class: a1
});
function MultiSelectItem_ng_container_1_ng_template_1_0_ng_template_0_Template(rf, ctx) {
}
function MultiSelectItem_ng_container_1_ng_template_1_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelectItem_ng_container_1_ng_template_1_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelectItem_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelectItem_ng_container_1_ng_template_1_0_Template, 1, 0, null, 3);
  }
  if (rf & 2) {
    const klass_r1 = ctx.class;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.itemCheckboxIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c26, ctx_r1.selected, klass_r1));
  }
}
function MultiSelectItem_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelectItem_ng_container_1_ng_template_1_Template, 1, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
}
function MultiSelectItem_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.label ?? "empty");
  }
}
function MultiSelectItem_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
var _c34 = ["item"];
var _c42 = ["group"];
var _c52 = ["loader"];
var _c62 = ["header"];
var _c72 = ["filter"];
var _c82 = ["footer"];
var _c92 = ["emptyfilter"];
var _c102 = ["empty"];
var _c112 = ["selecteditems"];
var _c122 = ["loadingicon"];
var _c132 = ["filtericon"];
var _c142 = ["removetokenicon"];
var _c152 = ["chipicon"];
var _c162 = ["clearicon"];
var _c17 = ["dropdownicon"];
var _c18 = ["itemcheckboxicon"];
var _c19 = ["headercheckboxicon"];
var _c20 = ["overlay"];
var _c21 = ["filterInput"];
var _c222 = ["focusInput"];
var _c232 = ["items"];
var _c242 = ["scroller"];
var _c252 = ["lastHiddenFocusableEl"];
var _c262 = ["firstHiddenFocusableEl"];
var _c27 = ["headerCheckbox"];
var _c28 = [[["p-header"]], [["p-footer"]]];
var _c29 = ["p-header", "p-footer"];
var _c30 = () => ({
  class: "p-multiselect-chip-icon"
});
var _c31 = (a0, a1) => ({
  $implicit: a0,
  removeChip: a1
});
var _c322 = (a0) => ({
  options: a0
});
var _c332 = (a0, a1, a2) => ({
  checked: a0,
  partialSelected: a1,
  class: a2
});
var _c342 = (a0) => ({
  height: a0
});
var _c35 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
var _c36 = () => ({});
function MultiSelect_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.label() || "empty");
  }
}
function MultiSelect_ng_container_5_ng_container_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getSelectedItemsLabel(), " ");
  }
}
function MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_ng_template_1_ng_container_0_span_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_ng_template_1_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275listener("click", function MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_ng_template_1_ng_container_0_span_1_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const item_r4 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeOption(item_r4, $event));
    });
    \u0275\u0275template(1, MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_ng_template_1_ng_container_0_span_1_ng_container_1_Template, 1, 0, "ng-container", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(8);
    \u0275\u0275classMap(ctx_r1.cx("chipIcon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("chipIcon"));
    \u0275\u0275attribute("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.chipIconTemplate || ctx_r1._chipIconTemplate || ctx_r1.removeTokenIconTemplate || ctx_r1._removeTokenIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction0(6, _c30));
  }
}
function MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_ng_template_1_ng_container_0_span_1_Template, 2, 7, "span", 26);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.chipIconTemplate || ctx_r1._chipIconTemplate || ctx_r1.removeTokenIconTemplate || ctx_r1._removeTokenIconTemplate);
  }
}
function MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275property("ngIf", !ctx_r1.$disabled() && !ctx_r1.readonly);
  }
}
function MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_ng_template_1_Template, 1, 1, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
}
function MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19, 4)(2, "p-chip", 25);
    \u0275\u0275listener("onRemove", function MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_Template_p_chip_onRemove_2_listener($event) {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeOption(item_r4, $event));
    });
    \u0275\u0275template(3, MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_Template, 3, 0, "ng-container", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("chipItem"));
    \u0275\u0275property("pBind", ctx_r1.ptm("chipItem"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.cx("pcChip"));
    \u0275\u0275property("pt", ctx_r1.ptm("pcChip"))("label", ctx_r1.getLabelByValue(item_r4))("removable", !ctx_r1.$disabled() && !ctx_r1.readonly)("removeIcon", ctx_r1.chipIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.chipIconTemplate || ctx_r1._chipIconTemplate || ctx_r1.removeTokenIconTemplate || ctx_r1._removeTokenIconTemplate);
  }
}
function MultiSelect_ng_container_5_ng_container_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_Template, 4, 10, "div", 24);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngForOf", ctx_r1.chipSelectedItems());
  }
}
function MultiSelect_ng_container_5_ng_container_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.placeholder() || "empty");
  }
}
function MultiSelect_ng_container_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275conditionalCreate(1, MultiSelect_ng_container_5_ng_container_2_Conditional_1_Template, 1, 1)(2, MultiSelect_ng_container_5_ng_container_2_Conditional_2_Template, 1, 1, "div", 23);
    \u0275\u0275template(3, MultiSelect_ng_container_5_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.chipSelectedItems() && ctx_r1.chipSelectedItems().length === ctx_r1.maxSelectedLabels ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.modelValue() || ctx_r1.modelValue().length === 0);
  }
}
function MultiSelect_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 20)(2, MultiSelect_ng_container_5_ng_container_2_Template, 4, 2, "ng-container", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.display === "comma");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.display === "chip");
  }
}
function MultiSelect_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.placeholder() || "empty");
  }
}
function MultiSelect_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 28)(2, MultiSelect_ng_container_6_ng_container_2_Template, 2, 1, "ng-container", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.selectedItemsTemplate || ctx_r1._selectedItemsTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(3, _c31, ctx_r1.selectedOptions, ctx_r1.removeOption.bind(ctx_r1)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.modelValue() || ctx_r1.modelValue().length === 0);
  }
}
function MultiSelect_ng_container_7__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 31);
    \u0275\u0275listener("click", function MultiSelect_ng_container_7__svg_svg_1_Template_svg_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clear($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("clearIcon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("clearIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function MultiSelect_ng_container_7_span_2_1_ng_template_0_Template(rf, ctx) {
}
function MultiSelect_ng_container_7_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_container_7_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_ng_container_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275listener("click", function MultiSelect_ng_container_7_span_2_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clear($event));
    });
    \u0275\u0275template(1, MultiSelect_ng_container_7_span_2_1_Template, 1, 0, null, 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("clearIcon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("clearIcon"));
    \u0275\u0275attribute("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.clearIconTemplate || ctx_r1._clearIconTemplate);
  }
}
function MultiSelect_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_7__svg_svg_1_Template, 1, 4, "svg", 29)(2, MultiSelect_ng_container_7_span_2_Template, 2, 5, "span", 30);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.clearIconTemplate && !ctx_r1._clearIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.clearIconTemplate || ctx_r1._clearIconTemplate);
  }
}
function MultiSelect_ng_container_9_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_container_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_9_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 32);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.loadingIconTemplate || ctx_r1._loadingIconTemplate);
  }
}
function MultiSelect_ng_container_9_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("loadingIcon"), "pi-spin " + ctx_r1.loadingIcon));
    \u0275\u0275property("pBind", ctx_r1.ptm("loadingIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function MultiSelect_ng_container_9_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("loadingIcon"), "pi pi-spinner pi-spin"));
    \u0275\u0275property("pBind", ctx_r1.ptm("loadingIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function MultiSelect_ng_container_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_9_ng_container_2_span_1_Template, 1, 4, "span", 33)(2, MultiSelect_ng_container_9_ng_container_2_span_2_Template, 1, 4, "span", 33);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingIcon);
  }
}
function MultiSelect_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_9_ng_container_1_Template, 2, 1, "ng-container", 20)(2, MultiSelect_ng_container_9_ng_container_2_Template, 3, 2, "ng-container", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingIconTemplate || ctx_r1._loadingIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingIconTemplate && !ctx_r1._loadingIconTemplate);
  }
}
function MultiSelect_ng_template_10_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 36);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("dropdownIcon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("dropdownIcon"))("ngClass", ctx_r1.dropdownIcon);
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function MultiSelect_ng_template_10_ng_container_0__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 37);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("dropdownIcon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("dropdownIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function MultiSelect_ng_template_10_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_template_10_ng_container_0_span_1_Template, 1, 5, "span", 34)(2, MultiSelect_ng_template_10_ng_container_0__svg_svg_2_Template, 1, 4, "svg", 35);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.dropdownIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.dropdownIcon);
  }
}
function MultiSelect_ng_template_10_span_1_1_ng_template_0_Template(rf, ctx) {
}
function MultiSelect_ng_template_10_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_10_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_ng_template_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275template(1, MultiSelect_ng_template_10_span_1_1_Template, 1, 0, null, 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("dropdownIcon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("dropdownIcon"));
    \u0275\u0275attribute("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.dropdownIconTemplate || ctx_r1._dropdownIconTemplate);
  }
}
function MultiSelect_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_10_ng_container_0_Template, 3, 2, "ng-container", 20)(1, MultiSelect_ng_template_10_span_1_Template, 2, 5, "span", 33);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", !ctx_r1.dropdownIconTemplate && !ctx_r1._dropdownIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.dropdownIconTemplate || ctx_r1._dropdownIconTemplate);
  }
}
function MultiSelect_ng_template_14_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_div_4_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_template_14_div_4_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 28);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.filterTemplate || ctx_r1._filterTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c322, ctx_r1.filterOptions));
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_ng_template_2__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 45);
  }
  if (rf & 2) {
    const klass_r10 = \u0275\u0275nextContext().class;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(klass_r10);
    \u0275\u0275property("pBind", ctx_r1.getHeaderCheckboxPTOptions("pcHeaderCheckbox.icon"));
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_ng_template_2_1_ng_template_0_Template(rf, ctx) {
}
function MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_ng_template_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_ng_template_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_ng_template_2__svg_svg_0_Template, 1, 3, "svg", 44)(1, MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_ng_template_2_1_Template, 1, 0, null, 28);
  }
  if (rf & 2) {
    const klass_r10 = ctx.class;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngIf", !ctx_r1.headerCheckboxIconTemplate && !ctx_r1._headerCheckboxIconTemplate && ctx_r1.allSelected());
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headerCheckboxIconTemplate || ctx_r1._headerCheckboxIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(3, _c332, ctx_r1.allSelected(), ctx_r1.partialSelected(), klass_r10));
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-checkbox", 43, 10);
    \u0275\u0275listener("onChange", function MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_Template_p_checkbox_onChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onToggleAll($event));
    });
    \u0275\u0275template(2, MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_ng_template_2_Template, 2, 7, "ng-template", null, 11, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("pt", ctx_r1.getHeaderCheckboxPTOptions("pcHeaderCheckbox"))("ngModel", ctx_r1.allSelected())("ariaLabel", ctx_r1.toggleAllAriaLabel)("binary", true)("variant", ctx_r1.$variant())("disabled", ctx_r1.$disabled());
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_p_iconfield_1__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 50);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("pBind", ctx_r1.ptm("filterIcon"));
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_p_iconfield_1_span_5_1_ng_template_0_Template(rf, ctx) {
}
function MultiSelect_ng_template_14_div_4_ng_template_3_p_iconfield_1_span_5_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_div_4_ng_template_3_p_iconfield_1_span_5_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_p_iconfield_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275template(1, MultiSelect_ng_template_14_div_4_ng_template_3_p_iconfield_1_span_5_1_Template, 1, 0, null, 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("pBind", ctx_r1.ptm("filterIcon"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.filterIconTemplate || ctx_r1._filterIconTemplate);
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_p_iconfield_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iconfield", 46)(1, "input", 47, 12);
    \u0275\u0275listener("input", function MultiSelect_ng_template_14_div_4_ng_template_3_p_iconfield_1_Template_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onFilterInputChange($event));
    })("keydown", function MultiSelect_ng_template_14_div_4_ng_template_3_p_iconfield_1_Template_input_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onFilterKeyDown($event));
    })("click", function MultiSelect_ng_template_14_div_4_ng_template_3_p_iconfield_1_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onInputClick($event));
    })("blur", function MultiSelect_ng_template_14_div_4_ng_template_3_p_iconfield_1_Template_input_blur_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onFilterBlur($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-inputicon", 46);
    \u0275\u0275template(4, MultiSelect_ng_template_14_div_4_ng_template_3_p_iconfield_1__svg_svg_4_Template, 1, 1, "svg", 48)(5, MultiSelect_ng_template_14_div_4_ng_template_3_p_iconfield_1_span_5_Template, 2, 2, "span", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("pcFilterContainer"));
    \u0275\u0275property("pt", ctx_r1.ptm("pcFilterContainer"));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("pcFilter"));
    \u0275\u0275property("pt", ctx_r1.ptm("pcFilter"))("variant", ctx_r1.$variant())("value", ctx_r1._filterValue() || "");
    \u0275\u0275attribute("autocomplete", ctx_r1.autocomplete)("aria-owns", ctx_r1.id + "_list")("aria-activedescendant", ctx_r1.focusedOptionId)("disabled", ctx_r1.$disabled() ? "" : void 0)("placeholder", ctx_r1.filterPlaceHolder)("aria-label", ctx_r1.ariaFilterLabel);
    \u0275\u0275advance(2);
    \u0275\u0275property("pt", ctx_r1.ptm("pcFilterIconContainer"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.filterIconTemplate && !ctx_r1._filterIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filterIconTemplate || ctx_r1._filterIconTemplate);
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_Template, 4, 6, "p-checkbox", 41)(1, MultiSelect_ng_template_14_div_4_ng_template_3_p_iconfield_1_Template, 6, 17, "p-iconfield", 42);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.showToggleAll && !ctx_r1.selectionLimit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filter);
  }
}
function MultiSelect_ng_template_14_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275projection(1);
    \u0275\u0275template(2, MultiSelect_ng_template_14_div_4_ng_container_2_Template, 2, 4, "ng-container", 21)(3, MultiSelect_ng_template_14_div_4_ng_template_3_Template, 2, 2, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const builtInFilterElement_r12 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("header"));
    \u0275\u0275property("pBind", ctx_r1.ptm("header"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.filterTemplate || ctx_r1._filterTemplate)("ngIfElse", builtInFilterElement_r12);
  }
}
function MultiSelect_ng_template_14_p_scroller_6_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_p_scroller_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_p_scroller_6_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 28);
  }
  if (rf & 2) {
    const items_r14 = ctx.$implicit;
    const scrollerOptions_r15 = ctx.options;
    \u0275\u0275nextContext(2);
    const buildInItems_r16 = \u0275\u0275reference(9);
    \u0275\u0275property("ngTemplateOutlet", buildInItems_r16)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c35, items_r14, scrollerOptions_r15));
  }
}
function MultiSelect_ng_template_14_p_scroller_6_ng_container_4_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_p_scroller_6_ng_container_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_p_scroller_6_ng_container_4_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 28);
  }
  if (rf & 2) {
    const scrollerOptions_r17 = ctx.options;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.loaderTemplate || ctx_r1._loaderTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c322, scrollerOptions_r17));
  }
}
function MultiSelect_ng_template_14_p_scroller_6_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_template_14_p_scroller_6_ng_container_4_ng_template_1_Template, 1, 4, "ng-template", null, 14, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
}
function MultiSelect_ng_template_14_p_scroller_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-scroller", 52, 13);
    \u0275\u0275listener("onLazyLoad", function MultiSelect_ng_template_14_p_scroller_6_Template_p_scroller_onLazyLoad_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onLazyLoad.emit($event));
    });
    \u0275\u0275template(2, MultiSelect_ng_template_14_p_scroller_6_ng_template_2_Template, 1, 5, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(4, MultiSelect_ng_template_14_p_scroller_6_ng_container_4_Template, 3, 0, "ng-container", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(9, _c342, ctx_r1.scrollHeight));
    \u0275\u0275property("items", ctx_r1.visibleOptions())("itemSize", ctx_r1.virtualScrollItemSize)("autoSize", true)("tabindex", -1)("lazy", ctx_r1.lazy)("options", ctx_r1.virtualScrollOptions);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.loaderTemplate || ctx_r1._loaderTemplate);
  }
}
function MultiSelect_ng_template_14_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_template_14_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 28);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const buildInItems_r16 = \u0275\u0275reference(9);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", buildInItems_r16)("ngTemplateOutletContext", \u0275\u0275pureFunction2(3, _c35, ctx_r1.visibleOptions(), \u0275\u0275pureFunction0(2, _c36)));
  }
}
function MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r18 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getOptionGroupLabel(option_r18.optionGroup));
  }
}
function MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 58);
  }
  if (rf & 2) {
    const option_r18 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.groupTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c16, option_r18.optionGroup));
  }
}
function MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 56);
    \u0275\u0275template(2, MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_0_span_2_Template, 2, 1, "span", 20)(3, MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_0_ng_container_3_Template, 1, 4, "ng-container", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r18 = \u0275\u0275nextContext();
    const option_r18 = ctx_r18.$implicit;
    const i_r20 = ctx_r18.index;
    const scrollerOptions_r21 = \u0275\u0275nextContext().options;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("optionGroup"));
    \u0275\u0275property("pBind", ctx_r1.ptm("optionGroup"))("ngStyle", \u0275\u0275pureFunction1(7, _c342, scrollerOptions_r21.itemSize + "px"));
    \u0275\u0275attribute("id", ctx_r1.id + "_" + ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.groupTemplate && option_r18.optionGroup);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", option_r18.optionGroup && ctx_r1.groupTemplate);
  }
}
function MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 59);
    \u0275\u0275listener("onClick", function MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_1_Template_li_onClick_1_listener($event) {
      \u0275\u0275restoreView(_r22);
      const i_r20 = \u0275\u0275nextContext().index;
      const scrollerOptions_r21 = \u0275\u0275nextContext().options;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOptionSelect($event, false, ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21)));
    })("onMouseEnter", function MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_1_Template_li_onMouseEnter_1_listener($event) {
      \u0275\u0275restoreView(_r22);
      const i_r20 = \u0275\u0275nextContext().index;
      const scrollerOptions_r21 = \u0275\u0275nextContext().options;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOptionMouseEnter($event, ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r18 = \u0275\u0275nextContext();
    const option_r18 = ctx_r18.$implicit;
    const i_r20 = ctx_r18.index;
    const scrollerOptions_r21 = \u0275\u0275nextContext().options;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r1.getPTOptions(option_r18, ctx_r1.getItemOptions, i_r20, "option"))("id", ctx_r1.id + "_" + ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21))("option", option_r18)("selected", ctx_r1.isSelected(option_r18))("label", ctx_r1.getOptionLabel(option_r18))("disabled", ctx_r1.isOptionDisabled(option_r18))("template", ctx_r1.itemTemplate || ctx_r1._itemTemplate)("itemCheckboxIconTemplate", ctx_r1.itemCheckboxIconTemplate || ctx_r1._itemCheckboxIconTemplate)("itemSize", scrollerOptions_r21.itemSize)("focused", ctx_r1.focusedOptionIndex() === ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21))("ariaPosInset", ctx_r1.getAriaPosInset(ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21)))("ariaSetSize", ctx_r1.ariaSetSize)("variant", ctx_r1.$variant())("highlightOnSelect", ctx_r1.highlightOnSelect)("pt", ctx_r1.pt);
  }
}
function MultiSelect_ng_template_14_ng_template_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_0_Template, 4, 9, "ng-container", 20)(1, MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_1_Template, 2, 15, "ng-container", 20);
  }
  if (rf & 2) {
    const option_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.isOptionGroup(option_r18));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isOptionGroup(option_r18));
  }
}
function MultiSelect_ng_template_14_ng_template_8_li_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.emptyFilterMessageLabel, " ");
  }
}
function MultiSelect_ng_template_14_ng_template_8_li_3_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_ng_template_8_li_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_ng_template_8_li_3_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 32);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.emptyFilterTemplate || ctx_r1._emptyFilterTemplate || ctx_r1.emptyTemplate || ctx_r1._emptyFilterTemplate);
  }
}
function MultiSelect_ng_template_14_ng_template_8_li_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 56);
    \u0275\u0275conditionalCreate(1, MultiSelect_ng_template_14_ng_template_8_li_3_Conditional_1_Template, 1, 1)(2, MultiSelect_ng_template_14_ng_template_8_li_3_Conditional_2_Template, 1, 1, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r21 = \u0275\u0275nextContext().options;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("emptyMessage"));
    \u0275\u0275property("pBind", ctx_r1.ptm("emptyMessage"))("ngStyle", \u0275\u0275pureFunction1(5, _c342, scrollerOptions_r21.itemSize + "px"));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.emptyFilterTemplate && !ctx_r1._emptyFilterTemplate && !ctx_r1.emptyTemplate && !ctx_r1._emptyTemplate ? 1 : 2);
  }
}
function MultiSelect_ng_template_14_ng_template_8_li_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.emptyMessageLabel, " ");
  }
}
function MultiSelect_ng_template_14_ng_template_8_li_4_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_ng_template_8_li_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_ng_template_8_li_4_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 32);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.emptyTemplate || ctx_r1._emptyTemplate);
  }
}
function MultiSelect_ng_template_14_ng_template_8_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 56);
    \u0275\u0275conditionalCreate(1, MultiSelect_ng_template_14_ng_template_8_li_4_Conditional_1_Template, 1, 1)(2, MultiSelect_ng_template_14_ng_template_8_li_4_Conditional_2_Template, 1, 1, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r21 = \u0275\u0275nextContext().options;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("emptyMessage"));
    \u0275\u0275property("pBind", ctx_r1.ptm("emptyMessage"))("ngStyle", \u0275\u0275pureFunction1(5, _c342, scrollerOptions_r21.itemSize + "px"));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.emptyTemplate && !ctx_r1._emptyTemplate ? 1 : 2);
  }
}
function MultiSelect_ng_template_14_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 53, 15);
    \u0275\u0275template(2, MultiSelect_ng_template_14_ng_template_8_ng_template_2_Template, 2, 2, "ng-template", 54)(3, MultiSelect_ng_template_14_ng_template_8_li_3_Template, 3, 7, "li", 55)(4, MultiSelect_ng_template_14_ng_template_8_li_4_Template, 3, 7, "li", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r23 = ctx.$implicit;
    const scrollerOptions_r21 = ctx.options;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(scrollerOptions_r21.contentStyle);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("list"), scrollerOptions_r21.contentStyleClass));
    \u0275\u0275property("pBind", ctx_r1.ptm("list"));
    \u0275\u0275attribute("aria-label", ctx_r1.listLabel);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", items_r23);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasFilter() && ctx_r1.isEmpty());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.hasFilter() && ctx_r1.isEmpty());
  }
}
function MultiSelect_ng_template_14_div_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275projection(1, 1);
    \u0275\u0275template(2, MultiSelect_ng_template_14_div_10_ng_container_2_Template, 1, 0, "ng-container", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.footerTemplate || ctx_r1._footerTemplate);
  }
}
function MultiSelect_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "span", 39, 6);
    \u0275\u0275listener("focus", function MultiSelect_ng_template_14_Template_span_focus_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFirstHiddenFocus($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, MultiSelect_ng_template_14_ng_container_3_Template, 1, 0, "ng-container", 32)(4, MultiSelect_ng_template_14_div_4_Template, 5, 5, "div", 33);
    \u0275\u0275elementStart(5, "div", 19);
    \u0275\u0275template(6, MultiSelect_ng_template_14_p_scroller_6_Template, 5, 11, "p-scroller", 40)(7, MultiSelect_ng_template_14_ng_container_7_Template, 2, 6, "ng-container", 20)(8, MultiSelect_ng_template_14_ng_template_8_Template, 5, 9, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, MultiSelect_ng_template_14_div_10_Template, 3, 1, "div", 20);
    \u0275\u0275elementStart(11, "span", 39, 8);
    \u0275\u0275listener("focus", function MultiSelect_ng_template_14_Template_span_focus_11_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLastHiddenFocus($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("overlay"), ctx_r1.panelStyleClass));
    \u0275\u0275property("pBind", ctx_r1.ptm("overlay"))("ngStyle", ctx_r1.panelStyle);
    \u0275\u0275attribute("id", ctx_r1.id + "_list");
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r1.ptm("firstHiddenFocusableEl"));
    \u0275\u0275attribute("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headerTemplate || ctx_r1._headerTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showHeader);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("listContainer"));
    \u0275\u0275styleProp("max-height", ctx_r1.virtualScroll ? "auto" : ctx_r1.scrollHeight || "auto");
    \u0275\u0275property("pBind", ctx_r1.ptm("listContainer"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.virtualScroll);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.virtualScroll);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.footerFacet || ctx_r1.footerTemplate || ctx_r1._footerTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r1.ptm("lastHiddenFocusableEl"));
    \u0275\u0275attribute("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
  }
}
var style14 = (
  /*css*/
  `
    ${style13}

    /* For PrimeNG */
   .p-multiselect.ng-invalid.ng-dirty {
        border-color: dt('multiselect.invalid.border.color');
    }
    p-multiSelect.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder,
    p-multi-select.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder,
    p-multiselect.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder {
        color: dt('multiselect.invalid.placeholder.color');
    }
`
);
var inlineStyles2 = {
  root: ({
    instance
  }) => ({
    position: instance.$appendTo() === "self" ? "relative" : void 0
  })
};
var classes7 = {
  root: ({
    instance
  }) => ["p-multiselect p-component p-inputwrapper", {
    "p-multiselect p-component p-inputwrapper": true,
    "p-multiselect-display-chip": instance.display === "chip",
    "p-disabled": instance.$disabled(),
    "p-invalid": instance.invalid(),
    "p-variant-filled": instance.$variant() === "filled",
    "p-focus": instance.focused,
    "p-inputwrapper-filled": instance.$filled(),
    "p-inputwrapper-focus": instance.focused || instance.overlayVisible,
    "p-multiselect-open": instance.overlayVisible,
    "p-multiselect-fluid": instance.hasFluid,
    "p-multiselect-sm p-inputfield-sm": instance.size() === "small",
    "p-multiselect-lg p-inputfield-lg": instance.size() === "large"
  }],
  labelContainer: "p-multiselect-label-container",
  label: ({
    instance
  }) => ({
    "p-multiselect-label": true,
    "p-placeholder": instance.label() === instance.placeholder(),
    "p-multiselect-label-empty": !instance.placeholder() && !instance.defaultLabel && (!instance.modelValue() || instance.modelValue().length === 0)
  }),
  chipItem: "p-multiselect-chip-item",
  pcChip: "p-multiselect-chip",
  chipIcon: "p-multiselect-chip-icon",
  dropdown: "p-multiselect-dropdown",
  loadingIcon: "p-multiselect-loading-icon",
  dropdownIcon: "p-multiselect-dropdown-icon",
  overlay: "p-multiselect-overlay p-component-overlay p-component",
  header: "p-multiselect-header",
  pcFilterContainer: "p-multiselect-filter-container",
  pcFilter: "p-multiselect-filter",
  listContainer: "p-multiselect-list-container",
  list: "p-multiselect-list",
  optionGroup: "p-multiselect-option-group",
  option: ({
    instance
  }) => ({
    "p-multiselect-option": true,
    "p-multiselect-option-selected": instance.selected && instance.highlightOnSelect,
    "p-disabled": instance.disabled,
    "p-focus": instance.focused
  }),
  emptyMessage: "p-multiselect-empty-message",
  clearIcon: "p-multiselect-clear-icon"
};
var MultiSelectStyle = class _MultiSelectStyle extends BaseStyle {
  name = "multiselect";
  style = style14;
  classes = classes7;
  inlineStyles = inlineStyles2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MultiSelectStyle_BaseFactory;
    return function MultiSelectStyle_Factory(__ngFactoryType__) {
      return (\u0275MultiSelectStyle_BaseFactory || (\u0275MultiSelectStyle_BaseFactory = \u0275\u0275getInheritedFactory(_MultiSelectStyle)))(__ngFactoryType__ || _MultiSelectStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MultiSelectStyle,
    factory: _MultiSelectStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiSelectStyle, [{
    type: Injectable
  }], null, null);
})();
var MultiSelectClasses;
(function(MultiSelectClasses2) {
  MultiSelectClasses2["root"] = "p-multiselect";
  MultiSelectClasses2["labelContainer"] = "p-multiselect-label-container";
  MultiSelectClasses2["label"] = "p-multiselect-label";
  MultiSelectClasses2["chipItem"] = "p-multiselect-chip-item";
  MultiSelectClasses2["pcChip"] = "p-multiselect-chip";
  MultiSelectClasses2["chipIcon"] = "p-multiselect-chip-icon";
  MultiSelectClasses2["dropdown"] = "p-multiselect-dropdown";
  MultiSelectClasses2["loadingIcon"] = "p-multiselect-loading-icon";
  MultiSelectClasses2["dropdownIcon"] = "p-multiselect-dropdown-icon";
  MultiSelectClasses2["overlay"] = "p-multiselect-overlay";
  MultiSelectClasses2["header"] = "p-multiselect-header";
  MultiSelectClasses2["pcFilterContainer"] = "p-multiselect-filter-container";
  MultiSelectClasses2["pcFilter"] = "p-multiselect-filter";
  MultiSelectClasses2["listContainer"] = "p-multiselect-list-container";
  MultiSelectClasses2["list"] = "p-multiselect-list";
  MultiSelectClasses2["optionGroup"] = "p-multiselect-option-group";
  MultiSelectClasses2["option"] = "p-multiselect-option";
  MultiSelectClasses2["emptyMessage"] = "p-multiselect-empty-message";
  MultiSelectClasses2["clearIcon"] = "p-autocomplete-clear-icon";
})(MultiSelectClasses || (MultiSelectClasses = {}));
var MULTISELECT_INSTANCE = new InjectionToken("MULTISELECT_INSTANCE");
var MULTISELECT_ITEM_INSTANCE = new InjectionToken("MULTISELECT_ITEM_INSTANCE");
var MULTISELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MultiSelect),
  multi: true
};
var MultiSelectItem = class _MultiSelectItem extends BaseComponent {
  $pcMultiSelectItem = inject(MULTISELECT_ITEM_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  hostName = "MultiSelect";
  getPTOptions(key) {
    return this.ptm(key, {
      context: {
        selected: this.selected,
        focused: this.focused,
        disabled: this.disabled
      }
    });
  }
  option;
  selected;
  label;
  disabled;
  itemSize;
  focused;
  ariaPosInset;
  ariaSetSize;
  variant;
  template;
  checkIconTemplate;
  itemCheckboxIconTemplate;
  highlightOnSelect;
  onClick = new EventEmitter();
  onMouseEnter = new EventEmitter();
  _componentStyle = inject(MultiSelectStyle);
  onOptionClick(event) {
    this.onClick.emit({
      originalEvent: event,
      option: this.option,
      selected: this.selected
    });
    event.stopPropagation();
    event.preventDefault();
  }
  onOptionMouseEnter(event) {
    this.onMouseEnter.emit({
      originalEvent: event,
      option: this.option,
      selected: this.selected
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MultiSelectItem_BaseFactory;
    return function MultiSelectItem_Factory(__ngFactoryType__) {
      return (\u0275MultiSelectItem_BaseFactory || (\u0275MultiSelectItem_BaseFactory = \u0275\u0275getInheritedFactory(_MultiSelectItem)))(__ngFactoryType__ || _MultiSelectItem);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MultiSelectItem,
    selectors: [["li", "pMultiSelectItem", ""]],
    hostAttrs: ["role", "option"],
    hostVars: 12,
    hostBindings: function MultiSelectItem_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MultiSelectItem_click_HostBindingHandler($event) {
          return ctx.onOptionClick($event);
        })("mouseenter", function MultiSelectItem_mouseenter_HostBindingHandler($event) {
          return ctx.onOptionMouseEnter($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", ctx.label)("aria-setsize", ctx.ariaSetSize)("aria-posinset", ctx.ariaPosInset)("aria-selected", ctx.selected)("data-p-focused", ctx.focused)("data-p-highlight", ctx.selected)("data-p-disabled", ctx.disabled)("aria-checked", ctx.selected);
        \u0275\u0275classMap(ctx.cx("option"));
        \u0275\u0275styleProp("height", ctx.itemSize, "px");
      }
    },
    inputs: {
      option: "option",
      selected: [2, "selected", "selected", booleanAttribute],
      label: "label",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      itemSize: [2, "itemSize", "itemSize", numberAttribute],
      focused: [2, "focused", "focused", booleanAttribute],
      ariaPosInset: "ariaPosInset",
      ariaSetSize: "ariaSetSize",
      variant: "variant",
      template: "template",
      checkIconTemplate: "checkIconTemplate",
      itemCheckboxIconTemplate: "itemCheckboxIconTemplate",
      highlightOnSelect: [2, "highlightOnSelect", "highlightOnSelect", booleanAttribute]
    },
    outputs: {
      onClick: "onClick",
      onMouseEnter: "onMouseEnter"
    },
    features: [\u0275\u0275ProvidersFeature([MultiSelectStyle]), \u0275\u0275InheritDefinitionFeature],
    attrs: _c015,
    decls: 4,
    vars: 12,
    consts: [["icon", ""], [3, "ngModel", "binary", "tabindex", "variant", "ariaLabel", "pt"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function MultiSelectItem_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p-checkbox", 1);
        \u0275\u0275template(1, MultiSelectItem_ng_container_1_Template, 3, 0, "ng-container", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(2, MultiSelectItem_span_2_Template, 2, 1, "span", 2)(3, MultiSelectItem_ng_container_3_Template, 1, 0, "ng-container", 3);
      }
      if (rf & 2) {
        \u0275\u0275property("ngModel", ctx.selected)("binary", true)("tabindex", -1)("variant", ctx.variant)("ariaLabel", ctx.label)("pt", ctx.getPTOptions("pcOptionCheckbox"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.itemCheckboxIconTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.template);
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", \u0275\u0275pureFunction1(10, _c16, ctx.option));
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, Checkbox, FormsModule, NgControlStatus, NgModel, SharedModule],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiSelectItem, [{
    type: Component,
    args: [{
      selector: "li[pMultiSelectItem]",
      standalone: true,
      imports: [CommonModule, Checkbox, FormsModule, SharedModule],
      template: `
        <p-checkbox [ngModel]="selected" [binary]="true" [tabindex]="-1" [variant]="variant" [ariaLabel]="label" [pt]="getPTOptions('pcOptionCheckbox')">
            <ng-container *ngIf="itemCheckboxIconTemplate">
                <ng-template #icon let-klass="class">
                    <ng-template *ngTemplateOutlet="itemCheckboxIconTemplate; context: { checked: selected, class: klass }"></ng-template>
                </ng-template>
            </ng-container>
        </p-checkbox>
        <span *ngIf="!template">{{ label ?? 'empty' }}</span>
        <ng-container *ngTemplateOutlet="template; context: { $implicit: option }"></ng-container>
    `,
      encapsulation: ViewEncapsulation.None,
      providers: [MultiSelectStyle],
      host: {
        "[style.height.px]": "itemSize",
        "[attr.aria-label]": "label",
        role: "option",
        "[attr.aria-setsize]": "ariaSetSize",
        "[attr.aria-posinset]": "ariaPosInset",
        "[attr.aria-selected]": "selected",
        "[attr.data-p-focused]": "focused",
        "[attr.data-p-highlight]": "selected",
        "[attr.data-p-disabled]": "disabled",
        "[attr.aria-checked]": "selected",
        "(click)": "onOptionClick($event)",
        "(mouseenter)": "onOptionMouseEnter($event)",
        "[class]": "cx('option')"
      }
    }]
  }], null, {
    option: [{
      type: Input
    }],
    selected: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    label: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    itemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    focused: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaPosInset: [{
      type: Input
    }],
    ariaSetSize: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    checkIconTemplate: [{
      type: Input
    }],
    itemCheckboxIconTemplate: [{
      type: Input
    }],
    highlightOnSelect: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: Output
    }],
    onMouseEnter: [{
      type: Output
    }]
  });
})();
var MultiSelect = class _MultiSelect extends BaseEditableHolder {
  zone;
  filterService;
  overlayService;
  /**
   * Unique identifier of the component
   * @group Props
   */
  id;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Style class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the overlay panel.
   * @group Props
   */
  panelStyle;
  /**
   * Style class of the overlay panel element.
   * @group Props
   */
  panelStyleClass;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * When present, it specifies that the component cannot be edited.
   * @group Props
   */
  readonly;
  /**
   * Whether to display options as grouped when nested options are provided.
   * @group Props
   */
  group;
  /**
   * When specified, displays an input field to filter the items on keyup.
   * @group Props
   */
  filter = true;
  /**
   * Defines placeholder of the filter input.
   * @group Props
   */
  filterPlaceHolder;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Specifies the visibility of the options panel.
   * @group Props
   */
  overlayVisible = false;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * A property to uniquely identify a value in options.
   * @group Props
   */
  dataKey;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Whether to show labels of selected item labels or use default label.
   * @group Props
   * @defaultValue true
   */
  set displaySelectedLabel(val) {
    this._displaySelectedLabel = val;
  }
  get displaySelectedLabel() {
    return this._displaySelectedLabel;
  }
  /**
   * Decides how many selected item labels to show at most.
   * @group Props
   * @defaultValue 3
   */
  set maxSelectedLabels(val) {
    this._maxSelectedLabels = val || 0;
  }
  get maxSelectedLabels() {
    return this._maxSelectedLabels;
  }
  /**
   * Maximum number of selectable items.
   * @group Props
   */
  selectionLimit;
  /**
   * Label to display after exceeding max selected labels e.g. ({0} items selected), defaults "ellipsis" keyword to indicate a text-overflow.
   * @group Props
   */
  selectedItemsLabel;
  /**
   * Whether to show the checkbox at header to toggle all items at once.
   * @group Props
   */
  showToggleAll = true;
  /**
   * Text to display when filtering does not return any results.
   * @group Props
   */
  emptyFilterMessage = "";
  /**
   * Text to display when there is no data. Defaults to global value in i18n translation configuration.
   * @group Props
   */
  emptyMessage = "";
  /**
   * Clears the filter value when hiding the dropdown.
   * @group Props
   */
  resetFilterOnHide = false;
  /**
   * Icon class of the dropdown icon.
   * @group Props
   */
  dropdownIcon;
  /**
   * Icon class of the chip icon.
   * @group Props
   */
  chipIcon;
  /**
   * Name of the label field of an option.
   * @group Props
   */
  optionLabel;
  /**
   * Name of the value field of an option.
   * @group Props
   */
  optionValue;
  /**
   * Name of the disabled field of an option.
   * @group Props
   */
  optionDisabled;
  /**
   * Name of the label field of an option group.
   * @group Props
   */
  optionGroupLabel = "label";
  /**
   * Name of the options field of an option group.
   * @group Props
   */
  optionGroupChildren = "items";
  /**
   * Whether to show the header.
   * @group Props
   */
  showHeader = true;
  /**
   * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
   * @group Props
   */
  filterBy;
  /**
   * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  scrollHeight = "200px";
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  lazy = false;
  /**
   * Whether the data should be loaded on demand during scroll.
   * @group Props
   */
  virtualScroll;
  /**
   * Whether the multiselect is in loading state.
   * @group Props
   */
  loading = false;
  /**
   * Height of an item in the list for VirtualScrolling.
   * @group Props
   */
  virtualScrollItemSize;
  /**
   * Icon to display in loading state.
   * @group Props
   */
  loadingIcon;
  /**
   * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
   * @group Props
   */
  virtualScrollOptions;
  /**
   * Whether to use overlay API feature. The properties of overlay API can be used like an object in it.
   * @group Props
   */
  overlayOptions;
  /**
   * Defines a string that labels the filter input.
   * @group Props
   */
  ariaFilterLabel;
  /**
   * Defines how the items are filtered.
   * @group Props
   */
  filterMatchMode = "contains";
  /**
   * Advisory information to display in a tooltip on hover.
   * @group Props
   */
  tooltip = "";
  /**
   * Position of the tooltip.
   * @group Props
   */
  tooltipPosition = "right";
  /**
   * Type of CSS position.
   * @group Props
   */
  tooltipPositionStyle = "absolute";
  /**
   * Style class of the tooltip.
   * @group Props
   */
  tooltipStyleClass;
  /**
   * Applies focus to the filter element when the overlay is shown.
   * @group Props
   */
  autofocusFilter = false;
  /**
   * Defines how the selected items are displayed.
   * @group Props
   */
  display = "comma";
  /**
   * Defines the autocomplete is active.
   * @group Props
   */
  autocomplete = "off";
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear = false;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Label to display when there are no selections.
   * @group Props
   */
  set placeholder(val) {
    this._placeholder.set(val);
  }
  get placeholder() {
    return this._placeholder.asReadonly();
  }
  /**
   * An array of objects to display as the available options.
   * @group Props
   */
  get options() {
    return this._options();
  }
  set options(val) {
    if (!y(this._options(), val)) {
      this._options.set(val || []);
    }
  }
  /**
   * When specified, filter displays with this value.
   * @group Props
   */
  get filterValue() {
    return this._filterValue();
  }
  set filterValue(val) {
    this._filterValue.set(val);
  }
  /**
   * Whether all data is selected.
   * @group Props
   */
  get selectAll() {
    return this._selectAll;
  }
  set selectAll(value) {
    this._selectAll = value;
  }
  /**
   * Indicates whether to focus on options when hovering over them, defaults to optionLabel.
   * @group Props
   */
  focusOnHover = true;
  /**
   * Fields used when filtering the options, defaults to optionLabel.
   * @group Props
   */
  filterFields;
  /**
   * Determines if the option will be selected on focus.
   * @group Props
   */
  selectOnFocus = false;
  /**
   * Whether to focus on the first visible or selected element when the overlay panel is shown.
   * @group Props
   */
  autoOptionFocus = false;
  /**
   * Whether the selected option will be add highlight class.
   * @group Props
   */
  highlightOnSelect = true;
  /**
   * Specifies the size of the component.
   * @defaultValue undefined
   * @group Props
   */
  size = input(...ngDevMode ? [void 0, {
    debugName: "size"
  }] : []);
  /**
   * Specifies the input variant of the component.
   * @defaultValue undefined
   * @group Props
   */
  variant = input(...ngDevMode ? [void 0, {
    debugName: "variant"
  }] : []);
  /**
   * Spans 100% width of the container when enabled.
   * @defaultValue undefined
   * @group Props
   */
  fluid = input(void 0, ...ngDevMode ? [{
    debugName: "fluid",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @defaultValue 'self'
   * @group Props
   */
  appendTo = input(void 0, ...ngDevMode ? [{
    debugName: "appendTo"
  }] : []);
  /**
   * Callback to invoke when value changes.
   * @param {MultiSelectChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke when data is filtered.
   * @param {MultiSelectFilterEvent} event - Custom filter event.
   * @group Emits
   */
  onFilter = new EventEmitter();
  /**
   * Callback to invoke when multiselect receives focus.
   * @param {MultiSelectFocusEvent} event - Custom focus event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when multiselect loses focus.
   * @param {MultiSelectBlurEvent} event - Custom blur event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke when component is clicked.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Callback to invoke when input field is cleared.
   * @group Emits
   */
  onClear = new EventEmitter();
  /**
   * Callback to invoke when overlay panel becomes visible.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   */
  onPanelShow = new EventEmitter();
  /**
   * Callback to invoke when overlay panel becomes hidden.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   */
  onPanelHide = new EventEmitter();
  /**
   * Callback to invoke in lazy mode to load new data.
   * @param {MultiSelectLazyLoadEvent} event - Lazy load event.
   * @group Emits
   */
  onLazyLoad = new EventEmitter();
  /**
   * Callback to invoke in lazy mode to load new data.
   * @param {MultiSelectRemoveEvent} event - Remove event.
   * @group Emits
   */
  onRemove = new EventEmitter();
  /**
   * Callback to invoke when all data is selected.
   * @param {MultiSelectSelectAllChangeEvent} event - Custom select event.
   * @group Emits
   */
  onSelectAllChange = new EventEmitter();
  overlayViewChild;
  filterInputChild;
  focusInputViewChild;
  itemsViewChild;
  scroller;
  lastHiddenFocusableElementOnOverlay;
  firstHiddenFocusableElementOnOverlay;
  headerCheckboxViewChild;
  footerFacet;
  headerFacet;
  _componentStyle = inject(MultiSelectStyle);
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  searchValue;
  searchTimeout;
  _selectAll = null;
  _placeholder = signal(void 0, ...ngDevMode ? [{
    debugName: "_placeholder"
  }] : []);
  _disableTooltip = false;
  value;
  _filteredOptions;
  focus;
  filtered;
  itemTemplate;
  groupTemplate;
  loaderTemplate;
  headerTemplate;
  filterTemplate;
  footerTemplate;
  emptyFilterTemplate;
  emptyTemplate;
  selectedItemsTemplate;
  loadingIconTemplate;
  filterIconTemplate;
  removeTokenIconTemplate;
  chipIconTemplate;
  clearIconTemplate;
  dropdownIconTemplate;
  itemCheckboxIconTemplate;
  headerCheckboxIconTemplate;
  templates;
  _itemTemplate;
  _groupTemplate;
  _loaderTemplate;
  _headerTemplate;
  _filterTemplate;
  _footerTemplate;
  _emptyFilterTemplate;
  _emptyTemplate;
  _selectedItemsTemplate;
  _loadingIconTemplate;
  _filterIconTemplate;
  _removeTokenIconTemplate;
  _chipIconTemplate;
  _clearIconTemplate;
  _dropdownIconTemplate;
  _itemCheckboxIconTemplate;
  _headerCheckboxIconTemplate;
  $variant = computed(() => this.variant() || this.config.inputStyle() || this.config.inputVariant(), ...ngDevMode ? [{
    debugName: "$variant"
  }] : []);
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{
    debugName: "$appendTo"
  }] : []);
  $pcMultiSelect = inject(MULTISELECT_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  pcFluid = inject(Fluid, {
    optional: true,
    host: true,
    skipSelf: true
  });
  get hasFluid() {
    return this.fluid() ?? !!this.pcFluid;
  }
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this._itemTemplate = item.template;
          break;
        case "group":
          this._groupTemplate = item.template;
          break;
        case "selectedItems":
        case "selecteditems":
          this._selectedItemsTemplate = item.template;
          break;
        case "header":
          this._headerTemplate = item.template;
          break;
        case "filter":
          this._filterTemplate = item.template;
          break;
        case "emptyfilter":
          this._emptyFilterTemplate = item.template;
          break;
        case "empty":
          this._emptyTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        case "loader":
          this._loaderTemplate = item.template;
          break;
        case "headercheckboxicon":
          this._headerCheckboxIconTemplate = item.template;
          break;
        case "loadingicon":
          this._loadingIconTemplate = item.template;
          break;
        case "filtericon":
          this._filterIconTemplate = item.template;
          break;
        case "removetokenicon":
          this._removeTokenIconTemplate = item.template;
          break;
        case "clearicon":
          this._clearIconTemplate = item.template;
          break;
        case "dropdownicon":
          this._dropdownIconTemplate = item.template;
          break;
        case "itemcheckboxicon":
          this._itemCheckboxIconTemplate = item.template;
          break;
        case "chipicon":
          this._chipIconTemplate = item.template;
          break;
        default:
          this._itemTemplate = item.template;
          break;
      }
    });
  }
  headerCheckboxFocus;
  filterOptions;
  preventModelTouched;
  focused = false;
  itemsWrapper;
  _displaySelectedLabel = true;
  _maxSelectedLabels = 3;
  modelValue = signal(null, ...ngDevMode ? [{
    debugName: "modelValue"
  }] : []);
  _filterValue = signal(null, ...ngDevMode ? [{
    debugName: "_filterValue"
  }] : []);
  _options = signal([], ...ngDevMode ? [{
    debugName: "_options"
  }] : []);
  startRangeIndex = signal(-1, ...ngDevMode ? [{
    debugName: "startRangeIndex"
  }] : []);
  focusedOptionIndex = signal(-1, ...ngDevMode ? [{
    debugName: "focusedOptionIndex"
  }] : []);
  selectedOptions;
  clickInProgress = false;
  get emptyMessageLabel() {
    return this.emptyMessage || this.config.getTranslation(TranslationKeys.EMPTY_MESSAGE);
  }
  get emptyFilterMessageLabel() {
    return this.emptyFilterMessage || this.config.getTranslation(TranslationKeys.EMPTY_FILTER_MESSAGE);
  }
  get isVisibleClearIcon() {
    return this.modelValue() != null && this.modelValue() !== "" && s(this.modelValue()) && this.showClear && !this.$disabled() && !this.readonly && this.$filled();
  }
  get toggleAllAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria[this.allSelected() ? "selectAll" : "unselectAll"] : void 0;
  }
  get listLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)["listLabel"];
  }
  getAllVisibleAndNonVisibleOptions() {
    return this.group ? this.flatOptions(this.options) : this.options || [];
  }
  visibleOptions = computed(() => {
    const options = this.getAllVisibleAndNonVisibleOptions();
    const isArrayOfObjects = C2(options) && ObjectUtils.isObject(options[0]);
    if (this._filterValue()) {
      let filteredOptions;
      if (isArrayOfObjects) {
        filteredOptions = this.filterService.filter(options, this.searchFields(), this._filterValue(), this.filterMatchMode, this.filterLocale);
      } else {
        filteredOptions = options.filter((option) => option.toString().toLocaleLowerCase().includes(this._filterValue().toLocaleLowerCase()));
      }
      if (this.group) {
        const optionGroups = this.options || [];
        const filtered = [];
        optionGroups.forEach((group) => {
          const groupChildren = this.getOptionGroupChildren(group);
          const filteredItems = groupChildren.filter((item) => filteredOptions.includes(item));
          if (filteredItems.length > 0) filtered.push(__spreadProps(__spreadValues({}, group), {
            [typeof this.optionGroupChildren === "string" ? this.optionGroupChildren : "items"]: [...filteredItems]
          }));
        });
        return this.flatOptions(filtered);
      }
      return filteredOptions;
    }
    return options;
  }, ...ngDevMode ? [{
    debugName: "visibleOptions"
  }] : []);
  label = computed(() => {
    let label;
    const modelValue = this.modelValue();
    if (modelValue && modelValue?.length && this.displaySelectedLabel) {
      if (s(this.maxSelectedLabels) && modelValue?.length > (this.maxSelectedLabels || 0)) {
        return this.getSelectedItemsLabel();
      } else {
        label = "";
        for (let i = 0; i < modelValue.length; i++) {
          if (i !== 0) {
            label += ", ";
          }
          label += this.getLabelByValue(modelValue[i]);
        }
      }
    } else {
      label = this.placeholder() || "";
    }
    return label;
  }, ...ngDevMode ? [{
    debugName: "label"
  }] : []);
  chipSelectedItems = computed(() => {
    return s(this.maxSelectedLabels) && this.modelValue() && this.modelValue()?.length > (this.maxSelectedLabels || 0) ? this.modelValue()?.slice(0, this.maxSelectedLabels) : this.modelValue();
  }, ...ngDevMode ? [{
    debugName: "chipSelectedItems"
  }] : []);
  constructor(zone, filterService, overlayService) {
    super();
    this.zone = zone;
    this.filterService = filterService;
    this.overlayService = overlayService;
    effect(() => {
      const modelValue = this.modelValue();
      const allVisibleAndNonVisibleOptions = this.getAllVisibleAndNonVisibleOptions();
      if (allVisibleAndNonVisibleOptions && s(allVisibleAndNonVisibleOptions)) {
        if (this.optionValue && this.optionLabel && modelValue) {
          this.selectedOptions = allVisibleAndNonVisibleOptions.filter((option) => modelValue.includes(option[this.optionLabel]) || modelValue.includes(option[this.optionValue]));
        } else {
          this.selectedOptions = modelValue;
        }
        this.cd.markForCheck();
      }
    });
  }
  onInit() {
    this.id = this.id || s2("pn_id_");
    this.autoUpdateModel();
    if (this.filterBy) {
      this.filterOptions = {
        filter: (value) => this.onFilterInputChange(value),
        reset: () => this.resetFilter()
      };
    }
  }
  maxSelectionLimitReached() {
    return this.selectionLimit && this.modelValue() && this.modelValue().length === this.selectionLimit;
  }
  onAfterViewInit() {
    if (this.overlayVisible) {
      this.show();
    }
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
    if (this.filtered) {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          this.overlayViewChild?.alignOverlay();
        }, 1);
      });
      this.filtered = false;
    }
  }
  flatOptions(options) {
    return (options || []).reduce((result, option, index) => {
      result.push({
        optionGroup: option,
        group: true,
        index
      });
      const optionGroupChildren = this.getOptionGroupChildren(option);
      optionGroupChildren && optionGroupChildren.forEach((o) => result.push(o));
      return result;
    }, []);
  }
  autoUpdateModel() {
    if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption()) {
      this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex());
      const value = this.getOptionValue(this.visibleOptions()[this.focusedOptionIndex()]);
      this.onOptionSelect({
        originalEvent: null,
        option: [value]
      });
    }
  }
  /**
   * Updates the model value.
   * @group Method
   */
  updateModel(value, event) {
    this.value = value;
    this.onModelChange(value);
    this.writeValue(value);
  }
  onInputClick(event) {
    event.stopPropagation();
    event.preventDefault();
    this.focusedOptionIndex.set(-1);
  }
  onOptionSelect(event, isFocus = false, index = -1) {
    const {
      originalEvent,
      option
    } = event;
    if (this.$disabled() || this.isOptionDisabled(option)) {
      return;
    }
    let selected = this.isSelected(option);
    let value = [];
    if (selected) {
      value = this.modelValue().filter((val) => !k(val, this.getOptionValue(option), this.equalityKey() || ""));
    } else {
      value = [...this.modelValue() || [], this.getOptionValue(option)];
    }
    this.updateModel(value, originalEvent);
    index !== -1 && this.focusedOptionIndex.set(index);
    isFocus && bt(this.focusInputViewChild?.nativeElement);
    this.onChange.emit({
      originalEvent: event,
      value,
      itemValue: option
    });
  }
  findSelectedOptionIndex() {
    return this.hasSelectedOption() ? this.visibleOptions().findIndex((option) => this.isValidSelectedOption(option)) : -1;
  }
  onOptionSelectRange(event, start = -1, end = -1) {
    start === -1 && (start = this.findNearestSelectedOptionIndex(end, true));
    end === -1 && (end = this.findNearestSelectedOptionIndex(start));
    if (start !== -1 && end !== -1) {
      const rangeStart = Math.min(start, end);
      const rangeEnd = Math.max(start, end);
      const value = this.visibleOptions().slice(rangeStart, rangeEnd + 1).filter((option) => this.isValidOption(option)).map((option) => this.getOptionValue(option));
      this.updateModel(value, event);
    }
  }
  searchFields() {
    return (this.filterBy || this.optionLabel || "label").split(",");
  }
  findNearestSelectedOptionIndex(index, firstCheckUp = false) {
    let matchedOptionIndex = -1;
    if (this.hasSelectedOption()) {
      if (firstCheckUp) {
        matchedOptionIndex = this.findPrevSelectedOptionIndex(index);
        matchedOptionIndex = matchedOptionIndex === -1 ? this.findNextSelectedOptionIndex(index) : matchedOptionIndex;
      } else {
        matchedOptionIndex = this.findNextSelectedOptionIndex(index);
        matchedOptionIndex = matchedOptionIndex === -1 ? this.findPrevSelectedOptionIndex(index) : matchedOptionIndex;
      }
    }
    return matchedOptionIndex > -1 ? matchedOptionIndex : index;
  }
  findPrevSelectedOptionIndex(index) {
    const matchedOptionIndex = this.hasSelectedOption() && index > 0 ? M(this.visibleOptions().slice(0, index), (option) => this.isValidSelectedOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : -1;
  }
  findFirstFocusedOptionIndex() {
    const selectedIndex = this.findFirstSelectedOptionIndex();
    return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
  }
  findFirstOptionIndex() {
    return this.visibleOptions().findIndex((option) => this.isValidOption(option));
  }
  findFirstSelectedOptionIndex() {
    return this.hasSelectedOption() ? this.visibleOptions().findIndex((option) => this.isValidSelectedOption(option)) : -1;
  }
  findNextSelectedOptionIndex(index) {
    const matchedOptionIndex = this.hasSelectedOption() && index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex((option) => this.isValidSelectedOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : -1;
  }
  equalityKey() {
    return this.optionValue ? null : this.dataKey;
  }
  hasSelectedOption() {
    return s(this.modelValue());
  }
  isValidSelectedOption(option) {
    return this.isValidOption(option) && this.isSelected(option);
  }
  isOptionGroup(option) {
    return option && (this.group || this.optionGroupLabel) && option.optionGroup && option.group;
  }
  isValidOption(option) {
    return option && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
  }
  isOptionDisabled(option) {
    if (this.maxSelectionLimitReached() && !this.isSelected(option)) {
      return true;
    }
    return this.optionDisabled ? p(option, this.optionDisabled) : option && option.disabled !== void 0 ? option.disabled : false;
  }
  isSelected(option) {
    const optionValue = this.getOptionValue(option);
    return (this.modelValue() || []).some((value) => k(value, optionValue, this.equalityKey() || ""));
  }
  isOptionMatched(option) {
    return this.isValidOption(option) && this.getOptionLabel(option).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue?.toLocaleLowerCase(this.filterLocale));
  }
  isEmpty() {
    return !this._options() || this.visibleOptions() && this.visibleOptions().length === 0;
  }
  getOptionIndex(index, scrollerOptions) {
    return this.virtualScrollerDisabled ? index : scrollerOptions && scrollerOptions.getItemOptions(index)["index"];
  }
  getAriaPosInset(index) {
    return (this.optionGroupLabel ? index - this.visibleOptions().slice(0, index).filter((option) => this.isOptionGroup(option)).length : index) + 1;
  }
  get ariaSetSize() {
    return this.visibleOptions().filter((option) => !this.isOptionGroup(option)).length;
  }
  getLabelByValue(value) {
    const options = this.group ? this.flatOptions(this._options()) : this._options() || [];
    const matchedOption = options.find((option) => !this.isOptionGroup(option) && k(this.getOptionValue(option), value, this.equalityKey() || ""));
    return matchedOption ? this.getOptionLabel(matchedOption) : null;
  }
  getSelectedItemsLabel() {
    let pattern = /{(.*?)}/;
    let message2 = this.selectedItemsLabel ? this.selectedItemsLabel : this.config.getTranslation(TranslationKeys.SELECTION_MESSAGE);
    if (pattern.test(message2)) {
      return message2.replace(message2.match(pattern)[0], this.modelValue().length + "");
    }
    return message2;
  }
  getOptionLabel(option) {
    return this.optionLabel ? p(option, this.optionLabel) : option && option.label != void 0 ? option.label : option;
  }
  getOptionValue(option) {
    return this.optionValue ? p(option, this.optionValue) : !this.optionLabel && option && option.value !== void 0 ? option.value : option;
  }
  getOptionGroupLabel(optionGroup) {
    return this.optionGroupLabel ? p(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label != void 0 ? optionGroup.label : optionGroup;
  }
  getOptionGroupChildren(optionGroup) {
    return optionGroup ? this.optionGroupChildren ? p(optionGroup, this.optionGroupChildren) : optionGroup.items : [];
  }
  onKeyDown(event) {
    if (this.$disabled()) {
      event.preventDefault();
      return;
    }
    const metaKey = event.metaKey || event.ctrlKey;
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "PageDown":
        this.onPageDownKey(event);
        break;
      case "PageUp":
        this.onPageUpKey(event);
        break;
      case "Enter":
      case "Space":
        this.onEnterKey(event);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event);
        break;
      case "ShiftLeft":
      case "ShiftRight":
        this.onShiftKey();
        break;
      default:
        if (event.code === "KeyA" && metaKey) {
          const value = this.visibleOptions().filter((option) => this.isValidOption(option)).map((option) => this.getOptionValue(option));
          this.updateModel(value, event);
          event.preventDefault();
          break;
        }
        if (!metaKey && J(event.key)) {
          !this.overlayVisible && this.show();
          this.searchOptions(event, event.key);
          event.preventDefault();
        }
        break;
    }
  }
  onFilterKeyDown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event, true);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        this.onArrowLeftKey(event, true);
        break;
      case "Home":
        this.onHomeKey(event, true);
        break;
      case "End":
        this.onEndKey(event, true);
        break;
      case "Enter":
      case "NumpadEnter":
        this.onEnterKey(event);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event, true);
        break;
      default:
        break;
    }
  }
  onArrowLeftKey(event, pressedInInputText = false) {
    pressedInInputText && this.focusedOptionIndex.set(-1);
  }
  onArrowDownKey(event) {
    const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.findFirstFocusedOptionIndex();
    if (event.shiftKey) {
      this.onOptionSelectRange(event, this.startRangeIndex(), optionIndex);
    }
    this.changeFocusedOptionIndex(event, optionIndex);
    !this.overlayVisible && this.show();
    event.preventDefault();
    event.stopPropagation();
  }
  onArrowUpKey(event, pressedInInputText = false) {
    if (event.altKey && !pressedInInputText) {
      if (this.focusedOptionIndex() !== -1) {
        this.onOptionSelect(event, this.visibleOptions()[this.focusedOptionIndex()]);
      }
      this.overlayVisible && this.hide();
      event.preventDefault();
    } else {
      const optionIndex = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.findLastFocusedOptionIndex();
      if (event.shiftKey) {
        this.onOptionSelectRange(event, optionIndex, this.startRangeIndex());
      }
      this.changeFocusedOptionIndex(event, optionIndex);
      !this.overlayVisible && this.show();
      event.preventDefault();
    }
    event.stopPropagation();
  }
  onHomeKey(event, pressedInInputText = false) {
    const {
      currentTarget
    } = event;
    if (pressedInInputText) {
      const len = currentTarget.value.length;
      currentTarget.setSelectionRange(0, event.shiftKey ? len : 0);
      this.focusedOptionIndex.set(-1);
    } else {
      let metaKey = event.metaKey || event.ctrlKey;
      let optionIndex = this.findFirstOptionIndex();
      if (event.shiftKey && metaKey) {
        this.onOptionSelectRange(event, optionIndex, this.startRangeIndex());
      }
      this.changeFocusedOptionIndex(event, optionIndex);
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
  }
  onEndKey(event, pressedInInputText = false) {
    const {
      currentTarget
    } = event;
    if (pressedInInputText) {
      const len = currentTarget.value.length;
      currentTarget.setSelectionRange(event.shiftKey ? 0 : len, len);
      this.focusedOptionIndex.set(-1);
    } else {
      let metaKey = event.metaKey || event.ctrlKey;
      let optionIndex = this.findLastFocusedOptionIndex();
      if (event.shiftKey && metaKey) {
        this.onOptionSelectRange(event, this.startRangeIndex(), optionIndex);
      }
      this.changeFocusedOptionIndex(event, optionIndex);
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
  }
  onPageDownKey(event) {
    this.scrollInView(this.visibleOptions().length - 1);
    event.preventDefault();
  }
  onPageUpKey(event) {
    this.scrollInView(0);
    event.preventDefault();
  }
  onEnterKey(event) {
    if (!this.overlayVisible) {
      this.onArrowDownKey(event);
    } else {
      if (this.focusedOptionIndex() !== -1) {
        if (event.shiftKey) {
          this.onOptionSelectRange(event, this.focusedOptionIndex());
        } else {
          this.onOptionSelect({
            originalEvent: event,
            option: this.visibleOptions()[this.focusedOptionIndex()]
          });
        }
      }
    }
    event.preventDefault();
  }
  onEscapeKey(event) {
    if (this.overlayVisible) {
      this.hide(true);
      event.stopPropagation();
      event.preventDefault();
    }
  }
  onTabKey(event, pressedInInputText = false) {
    if (!pressedInInputText) {
      if (this.overlayVisible && this.hasFocusableElements()) {
        bt(event.shiftKey ? this.lastHiddenFocusableElementOnOverlay?.nativeElement : this.firstHiddenFocusableElementOnOverlay?.nativeElement);
        event.preventDefault();
      } else {
        if (this.focusedOptionIndex() !== -1) {
          const option = this.visibleOptions()[this.focusedOptionIndex()];
          !this.isSelected(option) && this.onOptionSelect({
            originalEvent: event,
            option
          });
        }
        this.overlayVisible && this.hide(this.filter);
      }
    }
  }
  onShiftKey() {
    this.startRangeIndex.set(this.focusedOptionIndex());
  }
  onContainerClick(event) {
    if (this.$disabled() || this.loading || this.readonly || event.target?.isSameNode?.(this.focusInputViewChild?.nativeElement)) {
      return;
    }
    if (!this.overlayViewChild || !this.overlayViewChild.el.nativeElement.contains(event.target)) {
      if (this.clickInProgress) {
        return;
      }
      this.clickInProgress = true;
      setTimeout(() => {
        this.clickInProgress = false;
      }, 150);
      this.overlayVisible ? this.hide(true) : this.show(true);
    }
    this.focusInputViewChild?.nativeElement.focus({
      preventScroll: true
    });
    this.onClick.emit(event);
    this.cd.detectChanges();
  }
  onFirstHiddenFocus(event) {
    const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? vt(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])') : this.focusInputViewChild?.nativeElement;
    bt(focusableEl);
  }
  onInputFocus(event) {
    this.focused = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
    this.focusedOptionIndex.set(focusedOptionIndex);
    this.overlayVisible && this.scrollInView(this.focusedOptionIndex());
    this.onFocus.emit({
      originalEvent: event
    });
  }
  onInputBlur(event) {
    this.focused = false;
    this.onBlur.emit({
      originalEvent: event
    });
    if (!this.preventModelTouched) {
      this.onModelTouched();
    }
    this.preventModelTouched = false;
  }
  onFilterInputChange(event) {
    let value = event.target.value;
    this._filterValue.set(value);
    this.focusedOptionIndex.set(-1);
    this.onFilter.emit({
      originalEvent: event,
      filter: this._filterValue()
    });
    !this.virtualScrollerDisabled && this.scroller?.scrollToIndex(0);
    setTimeout(() => {
      this.overlayViewChild?.alignOverlay();
    });
  }
  onLastHiddenFocus(event) {
    const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? Lt(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])') : this.focusInputViewChild?.nativeElement;
    bt(focusableEl);
  }
  onOptionMouseEnter(event, index) {
    if (this.focusOnHover) {
      this.changeFocusedOptionIndex(event, index);
    }
  }
  onFilterBlur(event) {
    this.focusedOptionIndex.set(-1);
  }
  onToggleAll(event) {
    if (this.$disabled() || this.readonly) {
      return;
    }
    if (this.selectAll != null) {
      this.onSelectAllChange.emit({
        originalEvent: event,
        checked: !this.allSelected()
      });
    } else {
      const selectedDisabledOptions = this.getAllVisibleAndNonVisibleOptions().filter((option) => this.isSelected(option) && (this.optionDisabled ? p(option, this.optionDisabled) : option && option.disabled !== void 0 ? option.disabled : false));
      const visibleOptions = this.allSelected() ? this.visibleOptions().filter((option) => !this.isValidOption(option) && this.isSelected(option)) : this.visibleOptions().filter((option) => this.isSelected(option) || this.isValidOption(option));
      const selectedOptionsBeforeSearch = this.filter && !this.allSelected() ? this.getAllVisibleAndNonVisibleOptions().filter((option) => this.isSelected(option) && this.isValidOption(option)) : [];
      const optionValues = [...selectedOptionsBeforeSearch, ...selectedDisabledOptions, ...visibleOptions].map((option) => this.getOptionValue(option));
      const value = [...new Set(optionValues)];
      this.updateModel(value, event);
      if (!value.length || value.length === this.getAllVisibleAndNonVisibleOptions().length) {
        this.onSelectAllChange.emit({
          originalEvent: event,
          checked: !!value.length
        });
      }
    }
    if (this.partialSelected()) {
      this.selectedOptions = [];
      this.cd.markForCheck();
    }
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
    DomHandler.focus(this.headerCheckboxViewChild?.inputViewChild?.nativeElement);
    this.headerCheckboxFocus = true;
    event.originalEvent.preventDefault();
    event.originalEvent.stopPropagation();
  }
  changeFocusedOptionIndex(event, index) {
    if (this.focusedOptionIndex() !== index) {
      this.focusedOptionIndex.set(index);
      this.scrollInView();
    }
  }
  get virtualScrollerDisabled() {
    return !this.virtualScroll;
  }
  scrollInView(index = -1) {
    const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
    if (this.itemsViewChild && this.itemsViewChild.nativeElement) {
      const element = z(this.itemsViewChild.nativeElement, `li[id="${id}"]`);
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        });
      } else if (!this.virtualScrollerDisabled) {
        setTimeout(() => {
          this.virtualScroll && this.scroller?.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex());
        }, 0);
      }
    }
  }
  get focusedOptionId() {
    return this.focusedOptionIndex() !== -1 ? `${this.id}_${this.focusedOptionIndex()}` : null;
  }
  allSelected() {
    return this.selectAll !== null ? this.selectAll : s(this.visibleOptions()) && this.visibleOptions().every((option) => this.isOptionGroup(option) || this.isOptionDisabled(option) || this.isSelected(option));
  }
  partialSelected() {
    return this.selectedOptions && this.selectedOptions.length > 0 && this.selectedOptions.length < (this.options?.length || 0);
  }
  /**
   * Displays the panel.
   * @group Method
   */
  show(isFocus) {
    this.overlayVisible = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.findSelectedOptionIndex();
    this.focusedOptionIndex.set(focusedOptionIndex);
    if (isFocus) {
      bt(this.focusInputViewChild?.nativeElement);
    }
    this.cd.markForCheck();
  }
  /**
   * Hides the panel.
   * @group Method
   */
  hide(isFocus) {
    this.overlayVisible = false;
    this.focusedOptionIndex.set(-1);
    if (this.filter && this.resetFilterOnHide) {
      this.resetFilter();
    }
    if (this.overlayOptions?.mode === "modal") {
      unblockBodyScroll();
    }
    isFocus && bt(this.focusInputViewChild?.nativeElement);
    this.cd.markForCheck();
  }
  onOverlayAnimationStart(event) {
    if (event.toState === "visible") {
      this.itemsWrapper = z(this.overlayViewChild?.overlayViewChild?.nativeElement, this.virtualScroll ? ".p-scroller" : ".p-multiselect-list-container");
      this.virtualScroll && this.scroller?.setContentEl(this.itemsViewChild?.nativeElement);
      if (this.options && this.options.length) {
        if (this.virtualScroll) {
          const selectedIndex = this.modelValue() ? this.focusedOptionIndex() : -1;
          if (selectedIndex !== -1) {
            this.scroller?.scrollToIndex(selectedIndex);
          }
        } else {
          let selectedListItem = z(this.itemsWrapper, '[data-p-highlight="true"]');
          if (selectedListItem) {
            selectedListItem.scrollIntoView({
              block: "nearest",
              inline: "nearest"
            });
          }
        }
      }
      if (this.filterInputChild && this.filterInputChild.nativeElement) {
        this.preventModelTouched = true;
        if (this.autofocusFilter) {
          this.filterInputChild.nativeElement.focus();
        }
      }
      this.onPanelShow.emit(event);
    }
    if (event.toState === "void") {
      this.itemsWrapper = null;
      this.onModelTouched();
      this.onPanelHide.emit(event);
    }
  }
  resetFilter() {
    if (this.filterInputChild && this.filterInputChild.nativeElement) {
      this.filterInputChild.nativeElement.value = "";
    }
    this._filterValue.set(null);
    this._filteredOptions = null;
  }
  onOverlayHide(event) {
    this.focusedOptionIndex.set(-1);
    if (this.filter && this.resetFilterOnHide) {
      this.resetFilter();
    }
  }
  close(event) {
    this.hide();
    event.preventDefault();
    event.stopPropagation();
  }
  clear(event) {
    this.value = [];
    this.updateModel(null, event);
    this.selectedOptions = [];
    this.onClear.emit();
    this._disableTooltip = true;
    event.stopPropagation();
  }
  labelContainerMouseLeave() {
    if (this._disableTooltip) this._disableTooltip = false;
  }
  removeOption(optionValue, event) {
    let value = this.modelValue().filter((val) => !k(val, optionValue, this.equalityKey() || ""));
    this.updateModel(value, event);
    this.onChange.emit({
      originalEvent: event,
      value,
      itemValue: optionValue
    });
    this.onRemove.emit({
      newValue: value,
      removed: optionValue
    });
    event && event.stopPropagation();
  }
  findNextOptionIndex(index) {
    const matchedOptionIndex = index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex((option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
  }
  findPrevOptionIndex(index) {
    const matchedOptionIndex = index > 0 ? M(this.visibleOptions().slice(0, index), (option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : index;
  }
  findLastSelectedOptionIndex() {
    return this.hasSelectedOption() ? M(this.visibleOptions(), (option) => this.isValidSelectedOption(option)) : -1;
  }
  findLastFocusedOptionIndex() {
    const selectedIndex = this.findLastSelectedOptionIndex();
    return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
  }
  findLastOptionIndex() {
    return M(this.visibleOptions(), (option) => this.isValidOption(option));
  }
  searchOptions(event, char) {
    this.searchValue = (this.searchValue || "") + char;
    let optionIndex = -1;
    let matched = false;
    if (this.focusedOptionIndex() !== -1) {
      optionIndex = this.visibleOptions().slice(this.focusedOptionIndex()).findIndex((option) => this.isOptionMatched(option));
      optionIndex = optionIndex === -1 ? this.visibleOptions().slice(0, this.focusedOptionIndex()).findIndex((option) => this.isOptionMatched(option)) : optionIndex + this.focusedOptionIndex();
    } else {
      optionIndex = this.visibleOptions().findIndex((option) => this.isOptionMatched(option));
    }
    if (optionIndex !== -1) {
      matched = true;
    }
    if (optionIndex === -1 && this.focusedOptionIndex() === -1) {
      optionIndex = this.findFirstFocusedOptionIndex();
    }
    if (optionIndex !== -1) {
      this.changeFocusedOptionIndex(event, optionIndex);
    }
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.searchValue = "";
      this.searchTimeout = null;
    }, 500);
    return matched;
  }
  hasFocusableElements() {
    return b(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])').length > 0;
  }
  hasFilter() {
    return this._filterValue() && this._filterValue().trim().length > 0;
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    this.value = value;
    setModelValue(value);
    this.cd.markForCheck();
  }
  getHeaderCheckboxPTOptions(key) {
    return this.ptm(key, {
      context: {
        selected: this.allSelected()
      }
    });
  }
  getPTOptions(option, itemOptions, index, key) {
    return this.ptm(key, {
      context: {
        selected: this.isSelected(option),
        focused: this.focusedOptionIndex() === this.getOptionIndex(index, itemOptions),
        disabled: this.isOptionDisabled(option)
      }
    });
  }
  static \u0275fac = function MultiSelect_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MultiSelect)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(FilterService), \u0275\u0275directiveInject(OverlayService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MultiSelect,
    selectors: [["p-multiSelect"], ["p-multiselect"], ["p-multi-select"]],
    contentQueries: function MultiSelect_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, Footer, 5);
        \u0275\u0275contentQuery(dirIndex, Header, 5);
        \u0275\u0275contentQuery(dirIndex, _c34, 4);
        \u0275\u0275contentQuery(dirIndex, _c42, 4);
        \u0275\u0275contentQuery(dirIndex, _c52, 4);
        \u0275\u0275contentQuery(dirIndex, _c62, 4);
        \u0275\u0275contentQuery(dirIndex, _c72, 4);
        \u0275\u0275contentQuery(dirIndex, _c82, 4);
        \u0275\u0275contentQuery(dirIndex, _c92, 4);
        \u0275\u0275contentQuery(dirIndex, _c102, 4);
        \u0275\u0275contentQuery(dirIndex, _c112, 4);
        \u0275\u0275contentQuery(dirIndex, _c122, 4);
        \u0275\u0275contentQuery(dirIndex, _c132, 4);
        \u0275\u0275contentQuery(dirIndex, _c142, 4);
        \u0275\u0275contentQuery(dirIndex, _c152, 4);
        \u0275\u0275contentQuery(dirIndex, _c162, 4);
        \u0275\u0275contentQuery(dirIndex, _c17, 4);
        \u0275\u0275contentQuery(dirIndex, _c18, 4);
        \u0275\u0275contentQuery(dirIndex, _c19, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.footerFacet = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.headerFacet = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.itemTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.groupTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.loaderTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.filterTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.emptyFilterTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.emptyTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.selectedItemsTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.loadingIconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.filterIconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.removeTokenIconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.chipIconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.clearIconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.dropdownIconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.itemCheckboxIconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.headerCheckboxIconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.templates = _t2);
      }
    },
    viewQuery: function MultiSelect_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c20, 5);
        \u0275\u0275viewQuery(_c21, 5);
        \u0275\u0275viewQuery(_c222, 5);
        \u0275\u0275viewQuery(_c232, 5);
        \u0275\u0275viewQuery(_c242, 5);
        \u0275\u0275viewQuery(_c252, 5);
        \u0275\u0275viewQuery(_c262, 5);
        \u0275\u0275viewQuery(_c27, 5);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.overlayViewChild = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.filterInputChild = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.focusInputViewChild = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.itemsViewChild = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.scroller = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.lastHiddenFocusableElementOnOverlay = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.firstHiddenFocusableElementOnOverlay = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.headerCheckboxViewChild = _t2.first);
      }
    },
    hostVars: 5,
    hostBindings: function MultiSelect_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MultiSelect_click_HostBindingHandler($event) {
          return ctx.onContainerClick($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id);
        \u0275\u0275styleMap(ctx.sx("root"));
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      id: "id",
      ariaLabel: "ariaLabel",
      styleClass: "styleClass",
      panelStyle: "panelStyle",
      panelStyleClass: "panelStyleClass",
      inputId: "inputId",
      readonly: [2, "readonly", "readonly", booleanAttribute],
      group: [2, "group", "group", booleanAttribute],
      filter: [2, "filter", "filter", booleanAttribute],
      filterPlaceHolder: "filterPlaceHolder",
      filterLocale: "filterLocale",
      overlayVisible: [2, "overlayVisible", "overlayVisible", booleanAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      dataKey: "dataKey",
      ariaLabelledBy: "ariaLabelledBy",
      displaySelectedLabel: "displaySelectedLabel",
      maxSelectedLabels: "maxSelectedLabels",
      selectionLimit: [2, "selectionLimit", "selectionLimit", numberAttribute],
      selectedItemsLabel: "selectedItemsLabel",
      showToggleAll: [2, "showToggleAll", "showToggleAll", booleanAttribute],
      emptyFilterMessage: "emptyFilterMessage",
      emptyMessage: "emptyMessage",
      resetFilterOnHide: [2, "resetFilterOnHide", "resetFilterOnHide", booleanAttribute],
      dropdownIcon: "dropdownIcon",
      chipIcon: "chipIcon",
      optionLabel: "optionLabel",
      optionValue: "optionValue",
      optionDisabled: "optionDisabled",
      optionGroupLabel: "optionGroupLabel",
      optionGroupChildren: "optionGroupChildren",
      showHeader: [2, "showHeader", "showHeader", booleanAttribute],
      filterBy: "filterBy",
      scrollHeight: "scrollHeight",
      lazy: [2, "lazy", "lazy", booleanAttribute],
      virtualScroll: [2, "virtualScroll", "virtualScroll", booleanAttribute],
      loading: [2, "loading", "loading", booleanAttribute],
      virtualScrollItemSize: [2, "virtualScrollItemSize", "virtualScrollItemSize", numberAttribute],
      loadingIcon: "loadingIcon",
      virtualScrollOptions: "virtualScrollOptions",
      overlayOptions: "overlayOptions",
      ariaFilterLabel: "ariaFilterLabel",
      filterMatchMode: "filterMatchMode",
      tooltip: "tooltip",
      tooltipPosition: "tooltipPosition",
      tooltipPositionStyle: "tooltipPositionStyle",
      tooltipStyleClass: "tooltipStyleClass",
      autofocusFilter: [2, "autofocusFilter", "autofocusFilter", booleanAttribute],
      display: "display",
      autocomplete: "autocomplete",
      showClear: [2, "showClear", "showClear", booleanAttribute],
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      placeholder: "placeholder",
      options: "options",
      filterValue: "filterValue",
      selectAll: "selectAll",
      focusOnHover: [2, "focusOnHover", "focusOnHover", booleanAttribute],
      filterFields: "filterFields",
      selectOnFocus: [2, "selectOnFocus", "selectOnFocus", booleanAttribute],
      autoOptionFocus: [2, "autoOptionFocus", "autoOptionFocus", booleanAttribute],
      highlightOnSelect: [2, "highlightOnSelect", "highlightOnSelect", booleanAttribute],
      size: [1, "size"],
      variant: [1, "variant"],
      fluid: [1, "fluid"],
      appendTo: [1, "appendTo"]
    },
    outputs: {
      onChange: "onChange",
      onFilter: "onFilter",
      onFocus: "onFocus",
      onBlur: "onBlur",
      onClick: "onClick",
      onClear: "onClear",
      onPanelShow: "onPanelShow",
      onPanelHide: "onPanelHide",
      onLazyLoad: "onLazyLoad",
      onRemove: "onRemove",
      onSelectAllChange: "onSelectAllChange"
    },
    features: [\u0275\u0275ProvidersFeature([MULTISELECT_VALUE_ACCESSOR, MultiSelectStyle, {
      provide: MULTISELECT_INSTANCE,
      useExisting: _MultiSelect
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _MultiSelect
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c29,
    decls: 16,
    vars: 46,
    consts: [["focusInput", ""], ["elseBlock", ""], ["overlay", ""], ["content", ""], ["token", ""], ["removeicon", ""], ["firstHiddenFocusableEl", ""], ["buildInItems", ""], ["lastHiddenFocusableEl", ""], ["builtInFilterElement", ""], ["headerCheckbox", ""], ["icon", ""], ["filterInput", ""], ["scroller", ""], ["loader", ""], ["items", ""], [1, "p-hidden-accessible", 3, "pBind"], ["role", "combobox", 3, "focus", "blur", "keydown", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "pAutoFocus", "pBind"], [3, "mouseleave", "pBind", "pTooltip", "tooltipDisabled", "tooltipPosition", "positionStyle", "tooltipStyleClass"], [3, "pBind"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], [3, "visibleChange", "onAnimationStart", "onHide", "hostAttrSelector", "visible", "options", "target", "appendTo", "pt"], [3, "pBind", "class"], [3, "pBind", "class", 4, "ngFor", "ngForOf"], [3, "onRemove", "pt", "label", "removable", "removeIcon"], [3, "class", "pBind", "click", 4, "ngIf"], [3, "click", "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["data-p-icon", "times", 3, "pBind", "class", "click", 4, "ngIf"], [3, "pBind", "class", "click", 4, "ngIf"], ["data-p-icon", "times", 3, "click", "pBind"], [4, "ngTemplateOutlet"], [3, "pBind", "class", 4, "ngIf"], [3, "pBind", "class", "ngClass", 4, "ngIf"], ["data-p-icon", "chevron-down", 3, "pBind", "class", 4, "ngIf"], [3, "pBind", "ngClass"], ["data-p-icon", "chevron-down", 3, "pBind"], [3, "pBind", "ngStyle"], ["role", "presentation", 1, "p-hidden-accessible", "p-hidden-focusable", 3, "focus", "pBind"], [3, "items", "style", "itemSize", "autoSize", "tabindex", "lazy", "options", "onLazyLoad", 4, "ngIf"], [3, "pt", "ngModel", "ariaLabel", "binary", "variant", "disabled", "onChange", 4, "ngIf"], [3, "pt", "class", 4, "ngIf"], [3, "onChange", "pt", "ngModel", "ariaLabel", "binary", "variant", "disabled"], ["data-p-icon", "check", 3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "check", 3, "pBind"], [3, "pt"], ["pInputText", "", "type", "text", "role", "searchbox", 3, "input", "keydown", "click", "blur", "pt", "variant", "value"], ["data-p-icon", "search", 3, "pBind", 4, "ngIf"], ["class", "p-multiselect-filter-icon", 3, "pBind", 4, "ngIf"], ["data-p-icon", "search", 3, "pBind"], [1, "p-multiselect-filter-icon", 3, "pBind"], [3, "onLazyLoad", "items", "itemSize", "autoSize", "tabindex", "lazy", "options"], ["role", "listbox", "aria-multiselectable", "true", 3, "pBind"], ["ngFor", "", 3, "ngForOf"], ["role", "option", 3, "pBind", "class", "ngStyle", 4, "ngIf"], ["role", "option", 3, "pBind", "ngStyle"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["pMultiSelectItem", "", "pRipple", "", 3, "onClick", "onMouseEnter", "pBind", "id", "option", "selected", "label", "disabled", "template", "itemCheckboxIconTemplate", "itemSize", "focused", "ariaPosInset", "ariaSetSize", "variant", "highlightOnSelect", "pt"]],
    template: function MultiSelect_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef(_c28);
        \u0275\u0275elementStart(0, "div", 16)(1, "input", 17, 0);
        \u0275\u0275listener("focus", function MultiSelect_Template_input_focus_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputFocus($event));
        })("blur", function MultiSelect_Template_input_blur_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputBlur($event));
        })("keydown", function MultiSelect_Template_input_keydown_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onKeyDown($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(3, "div", 18);
        \u0275\u0275listener("mouseleave", function MultiSelect_Template_div_mouseleave_3_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.labelContainerMouseLeave());
        });
        \u0275\u0275elementStart(4, "div", 19);
        \u0275\u0275template(5, MultiSelect_ng_container_5_Template, 3, 2, "ng-container", 20)(6, MultiSelect_ng_container_6_Template, 3, 6, "ng-container", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, MultiSelect_ng_container_7_Template, 3, 2, "ng-container", 20);
        \u0275\u0275elementStart(8, "div", 19);
        \u0275\u0275template(9, MultiSelect_ng_container_9_Template, 3, 2, "ng-container", 21)(10, MultiSelect_ng_template_10_Template, 2, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p-overlay", 22, 2);
        \u0275\u0275twoWayListener("visibleChange", function MultiSelect_Template_p_overlay_visibleChange_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.overlayVisible, $event) || (ctx.overlayVisible = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("onAnimationStart", function MultiSelect_Template_p_overlay_onAnimationStart_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onOverlayAnimationStart($event));
        })("onHide", function MultiSelect_Template_p_overlay_onHide_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onOverlayHide($event));
        });
        \u0275\u0275template(14, MultiSelect_ng_template_14_Template, 13, 23, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const elseBlock_r24 = \u0275\u0275reference(11);
        \u0275\u0275property("pBind", ctx.ptm("hiddenInputContainer"));
        \u0275\u0275attribute("data-p-hidden-accessible", true);
        \u0275\u0275advance();
        \u0275\u0275property("pTooltip", ctx.tooltip)("tooltipPosition", ctx.tooltipPosition)("positionStyle", ctx.tooltipPositionStyle)("tooltipStyleClass", ctx.tooltipStyleClass)("pAutoFocus", ctx.autofocus)("pBind", ctx.ptm("hiddenInput"));
        \u0275\u0275attribute("aria-disabled", ctx.$disabled())("id", ctx.inputId)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("aria-haspopup", "listbox")("aria-expanded", ctx.overlayVisible ?? false)("aria-controls", ctx.overlayVisible ? ctx.id + "_list" : null)("tabindex", !ctx.$disabled() ? ctx.tabindex : -1)("aria-activedescendant", ctx.focused ? ctx.focusedOptionId : void 0)("value", ctx.modelValue())("name", ctx.name())("required", ctx.required() ? "" : void 0)("disabled", ctx.$disabled() ? "" : void 0);
        \u0275\u0275advance(2);
        \u0275\u0275classMap(ctx.cx("labelContainer"));
        \u0275\u0275property("pBind", ctx.ptm("labelContainer"))("pTooltip", ctx.tooltip)("tooltipDisabled", ctx._disableTooltip)("tooltipPosition", ctx.tooltipPosition)("positionStyle", ctx.tooltipPositionStyle)("tooltipStyleClass", ctx.tooltipStyleClass);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("label"));
        \u0275\u0275property("pBind", ctx.ptm("label"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.selectedItemsTemplate && !ctx._selectedItemsTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedItemsTemplate || ctx._selectedItemsTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isVisibleClearIcon);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("dropdown"));
        \u0275\u0275property("pBind", ctx.ptm("dropdown"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading)("ngIfElse", elseBlock_r24);
        \u0275\u0275advance(3);
        \u0275\u0275property("hostAttrSelector", ctx.$attrSelector);
        \u0275\u0275twoWayProperty("visible", ctx.overlayVisible);
        \u0275\u0275property("options", ctx.overlayOptions)("target", "@parent")("appendTo", ctx.$appendTo())("pt", ctx.ptm("pcOverlay"));
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, MultiSelectItem, Overlay, SharedModule, Tooltip, Scroller, AutoFocus, CheckIcon, SearchIcon, TimesIcon, ChevronDownIcon, IconField, InputIcon, InputText, Chip, Checkbox, FormsModule, NgControlStatus, NgModel, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiSelect, [{
    type: Component,
    args: [{
      selector: "p-multiSelect, p-multiselect, p-multi-select",
      standalone: true,
      imports: [CommonModule, MultiSelectItem, Overlay, SharedModule, Tooltip, Scroller, AutoFocus, CheckIcon, SearchIcon, TimesIcon, ChevronDownIcon, IconField, InputIcon, InputText, Chip, Checkbox, FormsModule, BindModule],
      hostDirectives: [Bind],
      template: `
        <div class="p-hidden-accessible" [attr.data-p-hidden-accessible]="true" [pBind]="ptm('hiddenInputContainer')">
            <input
                #focusInput
                [pTooltip]="tooltip"
                [tooltipPosition]="tooltipPosition"
                [positionStyle]="tooltipPositionStyle"
                [tooltipStyleClass]="tooltipStyleClass"
                [attr.aria-disabled]="$disabled()"
                [attr.id]="inputId"
                role="combobox"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-haspopup]="'listbox'"
                [attr.aria-expanded]="overlayVisible ?? false"
                [attr.aria-controls]="overlayVisible ? id + '_list' : null"
                [attr.tabindex]="!$disabled() ? tabindex : -1"
                [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                (keydown)="onKeyDown($event)"
                [pAutoFocus]="autofocus"
                [attr.value]="modelValue()"
                [attr.name]="name()"
                [attr.required]="required() ? '' : undefined"
                [attr.disabled]="$disabled() ? '' : undefined"
                [pBind]="ptm('hiddenInput')"
            />
        </div>
        <div
            [pBind]="ptm('labelContainer')"
            [class]="cx('labelContainer')"
            [pTooltip]="tooltip"
            (mouseleave)="labelContainerMouseLeave()"
            [tooltipDisabled]="_disableTooltip"
            [tooltipPosition]="tooltipPosition"
            [positionStyle]="tooltipPositionStyle"
            [tooltipStyleClass]="tooltipStyleClass"
        >
            <div [pBind]="ptm('label')" [class]="cx('label')">
                <ng-container *ngIf="!selectedItemsTemplate && !_selectedItemsTemplate">
                    <ng-container *ngIf="display === 'comma'">{{ label() || 'empty' }}</ng-container>
                    <ng-container *ngIf="display === 'chip'">
                        @if (chipSelectedItems() && chipSelectedItems().length === maxSelectedLabels) {
                            {{ getSelectedItemsLabel() }}
                        } @else {
                            <div #token *ngFor="let item of chipSelectedItems(); let i = index" [pBind]="ptm('chipItem')" [class]="cx('chipItem')">
                                <p-chip [pt]="ptm('pcChip')" [class]="cx('pcChip')" [label]="getLabelByValue(item)" [removable]="!$disabled() && !readonly" (onRemove)="removeOption(item, $event)" [removeIcon]="chipIcon">
                                    <ng-container *ngIf="chipIconTemplate || _chipIconTemplate || removeTokenIconTemplate || _removeTokenIconTemplate">
                                        <ng-template #removeicon>
                                            <ng-container *ngIf="!$disabled() && !readonly">
                                                <span
                                                    [class]="cx('chipIcon')"
                                                    *ngIf="chipIconTemplate || _chipIconTemplate || removeTokenIconTemplate || _removeTokenIconTemplate"
                                                    (click)="removeOption(item, $event)"
                                                    [attr.aria-hidden]="true"
                                                    [pBind]="ptm('chipIcon')"
                                                >
                                                    <ng-container *ngTemplateOutlet="chipIconTemplate || _chipIconTemplate || removeTokenIconTemplate || _removeTokenIconTemplate; context: { class: 'p-multiselect-chip-icon' }"></ng-container>
                                                </span>
                                            </ng-container>
                                        </ng-template>
                                    </ng-container>
                                </p-chip>
                            </div>
                        }
                        <ng-container *ngIf="!modelValue() || modelValue().length === 0">{{ placeholder() || 'empty' }}</ng-container>
                    </ng-container>
                </ng-container>
                <ng-container *ngIf="selectedItemsTemplate || _selectedItemsTemplate">
                    <ng-container *ngTemplateOutlet="selectedItemsTemplate || _selectedItemsTemplate; context: { $implicit: selectedOptions, removeChip: removeOption.bind(this) }"></ng-container>
                    <ng-container *ngIf="!modelValue() || modelValue().length === 0">{{ placeholder() || 'empty' }}</ng-container>
                </ng-container>
            </div>
        </div>
        <ng-container *ngIf="isVisibleClearIcon">
            <svg data-p-icon="times" *ngIf="!clearIconTemplate && !_clearIconTemplate" [pBind]="ptm('clearIcon')" [class]="cx('clearIcon')" (click)="clear($event)" [attr.aria-hidden]="true" />
            <span *ngIf="clearIconTemplate || _clearIconTemplate" [pBind]="ptm('clearIcon')" [class]="cx('clearIcon')" (click)="clear($event)" [attr.aria-hidden]="true">
                <ng-template *ngTemplateOutlet="clearIconTemplate || _clearIconTemplate"></ng-template>
            </span>
        </ng-container>
        <div [pBind]="ptm('dropdown')" [class]="cx('dropdown')">
            <ng-container *ngIf="loading; else elseBlock">
                <ng-container *ngIf="loadingIconTemplate || _loadingIconTemplate">
                    <ng-container *ngTemplateOutlet="loadingIconTemplate || _loadingIconTemplate"></ng-container>
                </ng-container>
                <ng-container *ngIf="!loadingIconTemplate && !_loadingIconTemplate">
                    <span *ngIf="loadingIcon" [pBind]="ptm('loadingIcon')" [class]="cn(cx('loadingIcon'), 'pi-spin ' + loadingIcon)" [attr.aria-hidden]="true"></span>
                    <span *ngIf="!loadingIcon" [pBind]="ptm('loadingIcon')" [class]="cn(cx('loadingIcon'), 'pi pi-spinner pi-spin')" [attr.aria-hidden]="true"></span>
                </ng-container>
            </ng-container>
            <ng-template #elseBlock>
                <ng-container *ngIf="!dropdownIconTemplate && !_dropdownIconTemplate">
                    <span *ngIf="dropdownIcon" [pBind]="ptm('dropdownIcon')" [class]="cx('dropdownIcon')" [ngClass]="dropdownIcon" [attr.aria-hidden]="true"></span>
                    <svg data-p-icon="chevron-down" *ngIf="!dropdownIcon" [pBind]="ptm('dropdownIcon')" [class]="cx('dropdownIcon')" [attr.aria-hidden]="true" />
                </ng-container>
                <span *ngIf="dropdownIconTemplate || _dropdownIconTemplate" [pBind]="ptm('dropdownIcon')" [class]="cx('dropdownIcon')" [attr.aria-hidden]="true">
                    <ng-template *ngTemplateOutlet="dropdownIconTemplate || _dropdownIconTemplate"></ng-template>
                </span>
            </ng-template>
        </div>
        <p-overlay
            #overlay
            [hostAttrSelector]="$attrSelector"
            [(visible)]="overlayVisible"
            [options]="overlayOptions"
            [target]="'@parent'"
            [appendTo]="$appendTo()"
            (onAnimationStart)="onOverlayAnimationStart($event)"
            (onHide)="onOverlayHide($event)"
            [pt]="ptm('pcOverlay')"
        >
            <ng-template #content>
                <div [pBind]="ptm('overlay')" [attr.id]="id + '_list'" [class]="cn(cx('overlay'), panelStyleClass)" [ngStyle]="panelStyle">
                    <span
                        #firstHiddenFocusableEl
                        role="presentation"
                        class="p-hidden-accessible p-hidden-focusable"
                        [attr.tabindex]="0"
                        (focus)="onFirstHiddenFocus($event)"
                        [attr.data-p-hidden-accessible]="true"
                        [attr.data-p-hidden-focusable]="true"
                        [pBind]="ptm('firstHiddenFocusableEl')"
                    >
                    </span>
                    <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                    <div [pBind]="ptm('header')" [class]="cx('header')" *ngIf="showHeader">
                        <ng-content select="p-header"></ng-content>
                        <ng-container *ngIf="filterTemplate || _filterTemplate; else builtInFilterElement">
                            <ng-container *ngTemplateOutlet="filterTemplate || _filterTemplate; context: { options: filterOptions }"></ng-container>
                        </ng-container>
                        <ng-template #builtInFilterElement>
                            <p-checkbox
                                [pt]="getHeaderCheckboxPTOptions('pcHeaderCheckbox')"
                                [ngModel]="allSelected()"
                                [ariaLabel]="toggleAllAriaLabel"
                                [binary]="true"
                                (onChange)="onToggleAll($event)"
                                *ngIf="showToggleAll && !selectionLimit"
                                [variant]="$variant()"
                                [disabled]="$disabled()"
                                #headerCheckbox
                            >
                                <ng-template #icon let-klass="class">
                                    <svg data-p-icon="check" *ngIf="!headerCheckboxIconTemplate && !_headerCheckboxIconTemplate && allSelected()" [class]="klass" [pBind]="getHeaderCheckboxPTOptions('pcHeaderCheckbox.icon')" />
                                    <ng-template
                                        *ngTemplateOutlet="
                                            headerCheckboxIconTemplate || _headerCheckboxIconTemplate;
                                            context: {
                                                checked: allSelected(),
                                                partialSelected: partialSelected(),
                                                class: klass
                                            }
                                        "
                                    ></ng-template>
                                </ng-template>
                            </p-checkbox>

                            <p-iconfield *ngIf="filter" [pt]="ptm('pcFilterContainer')" [class]="cx('pcFilterContainer')">
                                <input
                                    #filterInput
                                    pInputText
                                    [pt]="ptm('pcFilter')"
                                    [variant]="$variant()"
                                    type="text"
                                    [attr.autocomplete]="autocomplete"
                                    role="searchbox"
                                    [attr.aria-owns]="id + '_list'"
                                    [attr.aria-activedescendant]="focusedOptionId"
                                    [value]="_filterValue() || ''"
                                    (input)="onFilterInputChange($event)"
                                    (keydown)="onFilterKeyDown($event)"
                                    (click)="onInputClick($event)"
                                    (blur)="onFilterBlur($event)"
                                    [class]="cx('pcFilter')"
                                    [attr.disabled]="$disabled() ? '' : undefined"
                                    [attr.placeholder]="filterPlaceHolder"
                                    [attr.aria-label]="ariaFilterLabel"
                                />
                                <p-inputicon [pt]="ptm('pcFilterIconContainer')">
                                    <svg data-p-icon="search" *ngIf="!filterIconTemplate && !_filterIconTemplate" [pBind]="ptm('filterIcon')" />
                                    <span *ngIf="filterIconTemplate || _filterIconTemplate" [pBind]="ptm('filterIcon')" class="p-multiselect-filter-icon">
                                        <ng-template *ngTemplateOutlet="filterIconTemplate || _filterIconTemplate"></ng-template>
                                    </span>
                                </p-inputicon>
                            </p-iconfield>
                        </ng-template>
                    </div>
                    <div [pBind]="ptm('listContainer')" [class]="cx('listContainer')" [style.max-height]="virtualScroll ? 'auto' : scrollHeight || 'auto'">
                        <p-scroller
                            *ngIf="virtualScroll"
                            #scroller
                            [items]="visibleOptions()"
                            [style]="{ height: scrollHeight }"
                            [itemSize]="virtualScrollItemSize"
                            [autoSize]="true"
                            [tabindex]="-1"
                            [lazy]="lazy"
                            (onLazyLoad)="onLazyLoad.emit($event)"
                            [options]="virtualScrollOptions"
                        >
                            <ng-template #content let-items let-scrollerOptions="options">
                                <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: items, options: scrollerOptions }"></ng-container>
                            </ng-template>
                            <ng-container *ngIf="loaderTemplate || _loaderTemplate">
                                <ng-template #loader let-scrollerOptions="options">
                                    <ng-container *ngTemplateOutlet="loaderTemplate || _loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                                </ng-template>
                            </ng-container>
                        </p-scroller>
                        <ng-container *ngIf="!virtualScroll">
                            <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: visibleOptions(), options: {} }"></ng-container>
                        </ng-container>

                        <ng-template #buildInItems let-items let-scrollerOptions="options">
                            <ul #items [pBind]="ptm('list')" [class]="cn(cx('list'), scrollerOptions.contentStyleClass)" [style]="scrollerOptions.contentStyle" role="listbox" aria-multiselectable="true" [attr.aria-label]="listLabel">
                                <ng-template ngFor let-option [ngForOf]="items" let-i="index">
                                    <ng-container *ngIf="isOptionGroup(option)">
                                        <li [pBind]="ptm('optionGroup')" [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)" [class]="cx('optionGroup')" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                            <span *ngIf="!groupTemplate && option.optionGroup">{{ getOptionGroupLabel(option.optionGroup) }}</span>
                                            <ng-container *ngIf="option.optionGroup && groupTemplate" [ngTemplateOutlet]="groupTemplate" [ngTemplateOutletContext]="{ $implicit: option.optionGroup }"></ng-container>
                                        </li>
                                    </ng-container>
                                    <ng-container *ngIf="!isOptionGroup(option)">
                                        <li
                                            pMultiSelectItem
                                            pRipple
                                            [pBind]="getPTOptions(option, getItemOptions, i, 'option')"
                                            [id]="id + '_' + getOptionIndex(i, scrollerOptions)"
                                            [option]="option"
                                            [selected]="isSelected(option)"
                                            [label]="getOptionLabel(option)"
                                            [disabled]="isOptionDisabled(option)"
                                            [template]="itemTemplate || _itemTemplate"
                                            [itemCheckboxIconTemplate]="itemCheckboxIconTemplate || _itemCheckboxIconTemplate"
                                            [itemSize]="scrollerOptions.itemSize"
                                            [focused]="focusedOptionIndex() === getOptionIndex(i, scrollerOptions)"
                                            [ariaPosInset]="getAriaPosInset(getOptionIndex(i, scrollerOptions))"
                                            [ariaSetSize]="ariaSetSize"
                                            [variant]="$variant()"
                                            [highlightOnSelect]="highlightOnSelect"
                                            (onClick)="onOptionSelect($event, false, getOptionIndex(i, scrollerOptions))"
                                            (onMouseEnter)="onOptionMouseEnter($event, getOptionIndex(i, scrollerOptions))"
                                            [pt]="pt"
                                        ></li>
                                    </ng-container>
                                </ng-template>

                                <li *ngIf="hasFilter() && isEmpty()" [pBind]="ptm('emptyMessage')" [class]="cx('emptyMessage')" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                    @if (!emptyFilterTemplate && !_emptyFilterTemplate && !emptyTemplate && !_emptyTemplate) {
                                        {{ emptyFilterMessageLabel }}
                                    } @else {
                                        <ng-container *ngTemplateOutlet="emptyFilterTemplate || _emptyFilterTemplate || emptyTemplate || _emptyFilterTemplate"></ng-container>
                                    }
                                </li>
                                <li *ngIf="!hasFilter() && isEmpty()" [pBind]="ptm('emptyMessage')" [class]="cx('emptyMessage')" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                    @if (!emptyTemplate && !_emptyTemplate) {
                                        {{ emptyMessageLabel }}
                                    } @else {
                                        <ng-container *ngTemplateOutlet="emptyTemplate || _emptyTemplate"></ng-container>
                                    }
                                </li>
                            </ul>
                        </ng-template>
                    </div>
                    <div *ngIf="footerFacet || footerTemplate || _footerTemplate">
                        <ng-content select="p-footer"></ng-content>
                        <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
                    </div>

                    <span
                        #lastHiddenFocusableEl
                        role="presentation"
                        class="p-hidden-accessible p-hidden-focusable"
                        [attr.tabindex]="0"
                        (focus)="onLastHiddenFocus($event)"
                        [attr.data-p-hidden-accessible]="true"
                        [attr.data-p-hidden-focusable]="true"
                        [pBind]="ptm('lastHiddenFocusableEl')"
                    ></span>
                </div>
            </ng-template>
        </p-overlay>
    `,
      providers: [MULTISELECT_VALUE_ACCESSOR, MultiSelectStyle, {
        provide: MULTISELECT_INSTANCE,
        useExisting: MultiSelect
      }, {
        provide: PARENT_INSTANCE,
        useExisting: MultiSelect
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[attr.id]": "id",
        "(click)": "onContainerClick($event)",
        "[class]": "cn(cx('root'), styleClass)",
        "[style]": "sx('root')"
      }
    }]
  }], () => [{
    type: NgZone
  }, {
    type: FilterService
  }, {
    type: OverlayService
  }], {
    id: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    panelStyle: [{
      type: Input
    }],
    panelStyleClass: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    group: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filterPlaceHolder: [{
      type: Input
    }],
    filterLocale: [{
      type: Input
    }],
    overlayVisible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    dataKey: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    displaySelectedLabel: [{
      type: Input
    }],
    maxSelectedLabels: [{
      type: Input
    }],
    selectionLimit: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    selectedItemsLabel: [{
      type: Input
    }],
    showToggleAll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    emptyFilterMessage: [{
      type: Input
    }],
    emptyMessage: [{
      type: Input
    }],
    resetFilterOnHide: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dropdownIcon: [{
      type: Input
    }],
    chipIcon: [{
      type: Input
    }],
    optionLabel: [{
      type: Input
    }],
    optionValue: [{
      type: Input
    }],
    optionDisabled: [{
      type: Input
    }],
    optionGroupLabel: [{
      type: Input
    }],
    optionGroupChildren: [{
      type: Input
    }],
    showHeader: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filterBy: [{
      type: Input
    }],
    scrollHeight: [{
      type: Input
    }],
    lazy: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    loading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScrollItemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    loadingIcon: [{
      type: Input
    }],
    virtualScrollOptions: [{
      type: Input
    }],
    overlayOptions: [{
      type: Input
    }],
    ariaFilterLabel: [{
      type: Input
    }],
    filterMatchMode: [{
      type: Input
    }],
    tooltip: [{
      type: Input
    }],
    tooltipPosition: [{
      type: Input
    }],
    tooltipPositionStyle: [{
      type: Input
    }],
    tooltipStyleClass: [{
      type: Input
    }],
    autofocusFilter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    display: [{
      type: Input
    }],
    autocomplete: [{
      type: Input
    }],
    showClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    placeholder: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    filterValue: [{
      type: Input
    }],
    selectAll: [{
      type: Input
    }],
    focusOnHover: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filterFields: [{
      type: Input
    }],
    selectOnFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoOptionFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    highlightOnSelect: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onChange: [{
      type: Output
    }],
    onFilter: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onClick: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    onPanelShow: [{
      type: Output
    }],
    onPanelHide: [{
      type: Output
    }],
    onLazyLoad: [{
      type: Output
    }],
    onRemove: [{
      type: Output
    }],
    onSelectAllChange: [{
      type: Output
    }],
    overlayViewChild: [{
      type: ViewChild,
      args: ["overlay"]
    }],
    filterInputChild: [{
      type: ViewChild,
      args: ["filterInput"]
    }],
    focusInputViewChild: [{
      type: ViewChild,
      args: ["focusInput"]
    }],
    itemsViewChild: [{
      type: ViewChild,
      args: ["items"]
    }],
    scroller: [{
      type: ViewChild,
      args: ["scroller"]
    }],
    lastHiddenFocusableElementOnOverlay: [{
      type: ViewChild,
      args: ["lastHiddenFocusableEl"]
    }],
    firstHiddenFocusableElementOnOverlay: [{
      type: ViewChild,
      args: ["firstHiddenFocusableEl"]
    }],
    headerCheckboxViewChild: [{
      type: ViewChild,
      args: ["headerCheckbox"]
    }],
    footerFacet: [{
      type: ContentChild,
      args: [Footer]
    }],
    headerFacet: [{
      type: ContentChild,
      args: [Header]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
    }],
    groupTemplate: [{
      type: ContentChild,
      args: ["group", {
        descendants: false
      }]
    }],
    loaderTemplate: [{
      type: ContentChild,
      args: ["loader", {
        descendants: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    filterTemplate: [{
      type: ContentChild,
      args: ["filter", {
        descendants: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    emptyFilterTemplate: [{
      type: ContentChild,
      args: ["emptyfilter", {
        descendants: false
      }]
    }],
    emptyTemplate: [{
      type: ContentChild,
      args: ["empty", {
        descendants: false
      }]
    }],
    selectedItemsTemplate: [{
      type: ContentChild,
      args: ["selecteditems", {
        descendants: false
      }]
    }],
    loadingIconTemplate: [{
      type: ContentChild,
      args: ["loadingicon", {
        descendants: false
      }]
    }],
    filterIconTemplate: [{
      type: ContentChild,
      args: ["filtericon", {
        descendants: false
      }]
    }],
    removeTokenIconTemplate: [{
      type: ContentChild,
      args: ["removetokenicon", {
        descendants: false
      }]
    }],
    chipIconTemplate: [{
      type: ContentChild,
      args: ["chipicon", {
        descendants: false
      }]
    }],
    clearIconTemplate: [{
      type: ContentChild,
      args: ["clearicon", {
        descendants: false
      }]
    }],
    dropdownIconTemplate: [{
      type: ContentChild,
      args: ["dropdownicon", {
        descendants: false
      }]
    }],
    itemCheckboxIconTemplate: [{
      type: ContentChild,
      args: ["itemcheckboxicon", {
        descendants: false
      }]
    }],
    headerCheckboxIconTemplate: [{
      type: ContentChild,
      args: ["headercheckboxicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var MultiSelectModule = class _MultiSelectModule {
  static \u0275fac = function MultiSelectModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MultiSelectModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MultiSelectModule,
    imports: [MultiSelect, SharedModule],
    exports: [MultiSelect, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MultiSelect, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiSelectModule, [{
    type: NgModule,
    args: [{
      imports: [MultiSelect, SharedModule],
      exports: [MultiSelect, SharedModule]
    }]
  }], null, null);
})();

export {
  createTextField,
  createPasswordField,
  createDropdownField,
  createAutocompleteField,
  createNumberField,
  createDateField,
  createTextAreaField,
  createMultiselectField,
  createListboxField,
  createEventFilterField,
  createAssetFilterField,
  createTreeSelectField,
  createModalListField,
  createTreeSplitButtonListField,
  createColorPickerField,
  createToggleSwitchField,
  createIconSelectorField,
  UnitFormatters,
  MeasurementUnitType,
  DATE_FORMATS,
  getEntityIconClass,
  isEntityIconFontAwesome,
  enUS,
  getDefaultOptions,
  millisecondsInMinute,
  millisecondsInHour,
  millisecondsInSecond,
  minutesInYear,
  minutesInMonth,
  minutesInDay,
  constructFrom,
  toDate,
  getTimezoneOffsetInMilliseconds,
  normalizeDates,
  startOfDay,
  differenceInCalendarDays,
  startOfYear,
  startOfWeek,
  startOfISOWeek,
  getISOWeek,
  getWeekYear,
  getWeek,
  longFormatters,
  isProtectedDayOfYearToken,
  isProtectedWeekYearToken,
  warnOrThrowProtectedError,
  isValid,
  format,
  getDefaultOptions2,
  MeasurementDateTimeService,
  takeUntilDestroyed,
  toSignal,
  MeasurementUnitsService,
  RequestCacheService,
  ClientDataService,
  ScrollPanel,
  ScrollPanelModule,
  AngleRightIcon,
  MinusIcon,
  PlusIcon,
  FocusTrap,
  FocusTrapModule,
  Dialog,
  DialogModule,
  Checkbox,
  CheckboxModule,
  InputNumber,
  InputNumberModule,
  RadioButton,
  RadioButtonModule,
  ToggleButton,
  ToggleButtonModule,
  MultiSelect,
  MultiSelectModule,
  ApiSchemaService,
  DynamicDialogConfig,
  DynamicDialogRef,
  DialogService
};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v20.3.9
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-BX3CNJDQ.js.map
