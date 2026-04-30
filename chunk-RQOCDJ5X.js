import {
  BaseEditableHolder,
  BlankIcon,
  CheckIcon,
  Checkbox,
  FormsModule,
  IconField,
  InputIcon,
  InputText,
  MotionDirective,
  MotionModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  Scroller,
  SearchIcon,
  TimesIcon,
  zindexutils
} from "./chunk-TH3LNORR.js";
import {
  AutoFocus,
  ConnectedOverlayScrollHandler
} from "./chunk-52LQUIDL.js";
import {
  BaseComponent,
  BaseStyle,
  Bind,
  BindModule,
  D,
  FilterService,
  Footer,
  Header,
  J2 as J,
  K,
  M,
  OverlayService,
  PARENT_INSTANCE,
  PrimeTemplate,
  Ripple,
  SharedModule,
  Ut,
  W,
  Yt,
  bt,
  c,
  k2 as k,
  l,
  p,
  rr,
  s,
  s2,
  ut,
  vt,
  z
} from "./chunk-WHNMSFOF.js";
import {
  AuthDataService,
  ClientDataService,
  CommonModule,
  DEFAULT_SYSTEM_ID,
  EntitiesService,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  RequestCacheService,
  isDefined,
  isNullOrUndefined,
  isPlatformBrowser
} from "./chunk-L7IB7NHM.js";
import {
  APP_ID,
  ApplicationRef,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ConnectableObservable,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  HostListener,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  IterableDiffers,
  NgModule,
  NgZone,
  Observable,
  Output,
  PLATFORM_ID,
  Renderer2,
  RendererFactory2,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  afterNextRender,
  animationFrameScheduler,
  asapScheduler,
  auditTime,
  booleanAttribute,
  computed,
  createComponent,
  distinctUntilChanged,
  effect,
  filter,
  firstValueFrom,
  forwardRef,
  inject,
  input,
  interval,
  isObservable,
  map,
  merge,
  numberAttribute,
  of,
  pairwise,
  setClassMetadata,
  shareReplay,
  signal,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  untracked,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵanimateEnter,
  ɵɵanimateLeave,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
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
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-PNETQGIO.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/features/administration/models/tree-node-data.interface.ts
var ADMIN_TREE = {
  PAGINATION: {
    DEFAULT_PAGE_SIZE: 100,
    INITIAL_PAGE: 0
  },
  ICONS: {
    SUPER_ADMIN: "pi pi-crown",
    DISTRIBUTOR: "pi pi-building",
    VENDOR: "pi pi-building-columns",
    GROUP: "pi pi-folder",
    CLIENT: "pi pi-user"
  },
  NODE_TYPES: {
    SUPER_ADMIN: "super_admin",
    DISTRIBUTOR: "distributor",
    VENDOR: "vendor",
    GROUP: "group",
    CLIENT: "client",
    LOAD_MORE: "load_more"
  },
  LABELS: {
    SUPER_ADMIN: "(Super Admin)",
    DISTRIBUTOR: "(Distributor)",
    VENDOR: "(Vendor)",
    GROUP: "(Company Group)",
    CLIENT: "(Client)"
  },
  DEFAULT_GROUP_ID: DEFAULT_SYSTEM_ID,
  DELETED_STATE: "deleted"
};

// src/app/features/administration/models/reminder.interface.ts
var ReminderType;
(function(ReminderType2) {
  ReminderType2["ODOMETER"] = "odo";
  ReminderType2["ENGINE_HOURS"] = "hours";
  ReminderType2["TIME_BASED"] = "time";
})(ReminderType || (ReminderType = {}));

// src/app/features/administration/models/calendar-options.interface.ts
var WEEKDAY_OPTIONS = [
  { label: "Sunday", value: "0" },
  { label: "Monday", value: "1" },
  { label: "Tuesday", value: "2" },
  { label: "Wednesday", value: "3" },
  { label: "Thursday", value: "4" },
  { label: "Friday", value: "5" },
  { label: "Saturday", value: "6" }
];
var MONTH_OPTIONS = [
  { label: "January", value: "1" },
  { label: "February", value: "2" },
  { label: "March", value: "3" },
  { label: "April", value: "4" },
  { label: "May", value: "5" },
  { label: "June", value: "6" },
  { label: "July", value: "7" },
  { label: "August", value: "8" },
  { label: "September", value: "9" },
  { label: "October", value: "10" },
  { label: "November", value: "11" },
  { label: "December", value: "12" }
];
var DAY_OF_MONTH_OPTIONS = Array.from({ length: 31 }, (_, i) => ({
  label: String(i + 1),
  value: String(i + 1)
}));

// src/app/features/administration/models/io-types.constants.ts
var IO_TYPE_MAP = {
  analog_input: "Analog Inputs",
  camera_input: "Camera Inputs",
  can_input: "CAN Inputs",
  counter_input: "Counter Inputs",
  digital_input: "Digital Inputs",
  digital_output: "Digital Outputs",
  temperature_input: "Temperature Inputs",
  value_input: "Value Inputs"
};

// src/app/features/administration/models/custom-fields.interface.ts
var CUSTOM_FIELD_TYPES = [
  "text",
  "memo",
  "combo",
  "checkbox",
  "date",
  "datetime",
  "url"
];
var CUSTOM_FIELD_TYPES_MAP = {
  text: "Text",
  memo: "Memo",
  combo: "Combo",
  checkbox: "Checkbox",
  date: "Date",
  datetime: "DateTime",
  url: "URL"
};

// src/app/features/administration/models/legacy-rights.constants.ts
var LEGACY_CLIENT_RIGHTS = [
  {
    name: "user-roles",
    title: "Users Roles",
    description: "Rights relating to user role management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the user roles in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete user roles"
      }
    ]
  },
  {
    name: "users",
    title: "Users",
    description: "Rights relating to user management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the users in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete users"
      }
    ]
  },
  {
    name: "access-groups",
    title: "Cost Centres",
    description: "Rights relating to cost centre management",
    rights: [
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete cost centres"
      }
    ]
  },
  {
    name: "asset-categories",
    title: "Asset Categories",
    description: "Rights relating to asset category management",
    rights: [
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete asset categories"
      }
    ]
  },
  {
    name: "assets-groups",
    title: "Asset Groups",
    description: "Rights relating to asset group management",
    rights: [
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete asset groups"
      }
    ]
  },
  {
    name: "assets",
    title: "Assets",
    description: "Rights relating to asset management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the assets in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete assets"
      }
    ]
  },
  {
    name: "devices",
    title: "Devices",
    description: "Rights relating to device management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the devices in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete devices"
      },
      {
        title: "Poll",
        name: "poll",
        description: "Poll devices for telemetry updates"
      },
      {
        title: "Toggle Outputs",
        name: "outputs",
        description: "Toggle device outputs"
      },
      {
        title: "Upload Parameters",
        name: "setparams",
        description: "Upload parameters to devices"
      }
    ]
  },
  {
    name: "simcards",
    title: "SIM Cards",
    description: "Rights relating to SIM card management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the SIM cards in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete SIM cards"
      }
    ]
  },
  {
    name: "fuelcards",
    title: "Fuel Cards",
    description: "Rights relating to fuel card management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the fuel cards in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete fuel cards"
      }
    ]
  },
  {
    name: "deviceProviders",
    title: "Device Providers",
    description: "Rights relating to device provider management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the device providers in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete device providers"
      }
    ]
  },
  {
    name: "smsGatewayProviders",
    title: "SMS Gateways",
    description: "Rights relating to SMS gateway management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the SMS gateways in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete SMS gateways"
      }
    ]
  },
  {
    name: "emailProviders",
    title: "Email Providers",
    description: "Rights relating to email provider management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the email providers in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete email providers"
      }
    ]
  },
  {
    name: "zones",
    title: "Geofences",
    description: "Rights relating to geofence management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the geofences in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete geofences and their groups"
      }
    ]
  },
  {
    name: "alerts",
    title: "Alerts",
    description: "Rights relating to alert management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the alerts in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete alert definitions"
      }
    ]
  },
  {
    name: "media",
    title: "Media",
    description: "Rights relating to viewing and generating media events",
    rights: [
      {
        title: "View",
        name: "view",
        description: "View and list videos and images"
      },
      {
        title: "Create",
        name: "create",
        description: "Create media requests"
      },
      {
        title: "Update",
        name: "update",
        description: "Modify media requests"
      },
      {
        title: "Delete",
        name: "delete",
        description: "Delete recorded media files"
      }
    ]
  },
  {
    name: "analytics",
    title: "Analytics",
    description: "Rights relating to analytics reports",
    rights: [
      {
        title: "View",
        name: "view",
        description: "View analytics reports"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete analytics reports"
      }
    ]
  },
  {
    name: "reports",
    title: "Reports",
    description: "Rights relating to reports",
    rights: [
      {
        title: "Run",
        name: "run",
        description: "Run reports on demand."
      },
      {
        title: "Schedule",
        name: "schedule",
        description: "Create, modify and delete scheduled reports"
      },
      {
        title: "Templates",
        name: "templates",
        description: "Create, modify and delete report templates"
      }
    ]
  },
  {
    name: "customFields",
    title: "Custom Fields",
    description: "Rights relating to custom fields",
    rights: [
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete custom fields."
      }
    ]
  }
];
var LEGACY_VENDOR_RIGHTS = [
  {
    name: "clients",
    title: "Clients",
    description: "Rights relating to client management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the clients in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete clients"
      },
      {
        title: "List Users",
        name: "list-users",
        description: "List client users and user roles"
      },
      {
        title: "Modify Users",
        name: "users",
        description: "Create, modify and delete client users and their roles"
      },
      {
        title: "List Assets",
        name: "list-assets",
        description: "List client assets"
      },
      {
        title: "Modify Assets",
        name: "assets",
        description: "Create, modify and delete assets and their groups"
      },
      {
        title: "List Devices",
        name: "list-devices",
        description: "List client devices"
      },
      {
        title: "Modify Devices",
        name: "devices",
        description: "Create, modify and delete devices"
      },
      {
        title: "List SIM Cards",
        name: "list-simcards",
        description: "List SIM cards"
      },
      {
        title: "Modify SIM Cards",
        name: "simcards",
        description: "Create, modify and delete SIM cards"
      },
      {
        title: "List Fuel Cards",
        name: "list-fuelcards",
        description: "List fuel cards"
      },
      {
        title: "Modify Fuel Cards",
        name: "fuelcards",
        description: "Create, modify and delete fuel cards"
      },
      {
        title: "List Device Providers",
        name: "list-deviceProviders",
        description: "List client device providers"
      },
      {
        title: "Modify Device Providers",
        name: "deviceProviders",
        description: "Create, modify and delete device providers"
      },
      {
        title: "List SMS Gateways",
        name: "list-smsGatewayProviders",
        description: "List client SMS gateways"
      },
      {
        title: "Modify SMS Gateways",
        name: "smsGatewayProviders",
        description: "Create, modify and delete SMS gateways"
      },
      {
        title: "List Email Providers",
        name: "list-emailProviders",
        description: "List client email providers"
      },
      {
        title: "Modify Email Providers",
        name: "emailProviders",
        description: "Create, modify and delete email providers"
      },
      {
        title: "List Geofences",
        name: "list-zones",
        description: "List client geofences"
      },
      {
        title: "Modify Geofences",
        name: "zones",
        description: "Create, modify and delete geofences and their groups"
      },
      {
        title: "View Media",
        name: "list-media",
        description: "View client media"
      },
      {
        title: "Modify Media",
        name: "media",
        description: "Request media and update media events"
      },
      {
        title: "Modify Alerts",
        name: "alerts",
        description: "Create, modify and delete alert definitions"
      },
      {
        title: "Poll",
        name: "poll",
        description: "Poll devices for telemetry updates"
      },
      {
        title: "Upload Parameters",
        name: "setparams",
        description: "Upload parameters to devices"
      },
      {
        title: "Toggle Outputs",
        name: "outputs",
        description: "Toggle device outputs"
      },
      {
        title: "Run Reports",
        name: "reports",
        description: "Run and schedule reports"
      },
      {
        title: "Modify Report Templates",
        name: "report-templates",
        description: "Create, modify and delete report templates"
      },
      {
        title: "Custom Fields",
        name: "customFields",
        description: "Create, modify and delete custom fields"
      },
      {
        title: "Analytics Reports",
        name: "analytics",
        description: "Create, modify and delete analytics reports"
      },
      {
        title: "List User Roles",
        name: "list-userroles",
        description: "List the user roles for a client"
      },
      {
        title: "Modify User Roles",
        name: "userroles",
        description: "Create, modify and delete user roles for a client"
      }
    ]
  },
  {
    name: "user-roles",
    title: "Users Roles",
    description: "Rights relating to user role management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the user roles in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete user roles"
      }
    ]
  },
  {
    name: "users",
    title: "Users",
    description: "Rights relating to user management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the users in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete users"
      }
    ]
  },
  {
    name: "themes",
    title: "Themes",
    description: "Rights relating to theme management",
    rights: [
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete themes"
      }
    ]
  },
  {
    name: "mapSets",
    title: "Map Sets",
    description: "Rights relating to map set management",
    rights: [
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete map sets"
      }
    ]
  },
  {
    name: "billing",
    title: "Billing",
    description: "Rights relating to billing profiles",
    rights: [
      {
        title: "Create Profiles",
        name: "createProfile",
        description: "Create, modify and delete billing profiles"
      }
    ]
  }
];
var LEGACY_DISTRIBUTOR_RIGHTS = [
  {
    name: "vendors",
    title: "Vendors",
    description: "Rights relating to vendor management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the vendors in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete vendors"
      },
      {
        title: "Migrate",
        name: "migrate",
        description: "Migrate vendors between distributors"
      },
      {
        title: "List Users",
        name: "list-users",
        description: "List vendor users and user roles"
      },
      {
        title: "Modify Users",
        name: "users",
        description: "Create, modify and delete vendor users"
      },
      {
        title: "List User Roles",
        name: "list-userroles",
        description: "List the user roles for a client"
      },
      {
        title: "Modify User Roles",
        name: "userroles",
        description: "Create, modify and delete user roles for a client"
      }
    ]
  },
  {
    name: "clients",
    title: "Clients",
    description: "Rights relating to client management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the clients in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete clients"
      },
      {
        title: "List Users",
        name: "list-users",
        description: "List client users and user roles"
      },
      {
        title: "Modify Users",
        name: "users",
        description: "Create, modify and delete client users and their roles"
      },
      {
        title: "List Assets",
        name: "list-assets",
        description: "List client assets"
      },
      {
        title: "Modify Assets",
        name: "assets",
        description: "Create, modify and delete assets and their groups"
      },
      {
        title: "List Devices",
        name: "list-devices",
        description: "List client devices"
      },
      {
        title: "Modify Devices",
        name: "devices",
        description: "Create, modify and delete devices"
      },
      {
        title: "List SIM Cards",
        name: "list-simcards",
        description: "List SIM cards"
      },
      {
        title: "Modify SIM Cards",
        name: "simcards",
        description: "Create, modify and delete SIM cards"
      },
      {
        title: "List Fuel Cards",
        name: "list-fuelcards",
        description: "List fuel cards"
      },
      {
        title: "Modify Fuel Cards",
        name: "fuelcards",
        description: "Create, modify and delete fuel cards"
      },
      {
        title: "List Device Providers",
        name: "list-deviceProviders",
        description: "List client device providers"
      },
      {
        title: "Modify Device Providers",
        name: "deviceProviders",
        description: "Create, modify and delete device providers"
      },
      {
        title: "List SMS Gateways",
        name: "list-smsGatewayProviders",
        description: "List client SMS gateways"
      },
      {
        title: "Modify SMS Gateways",
        name: "smsGatewayProviders",
        description: "Create, modify and delete SMS gateways"
      },
      {
        title: "List Email Providers",
        name: "list-emailProviders",
        description: "List client email providers"
      },
      {
        title: "Modify Email Providers",
        name: "emailProviders",
        description: "Create, modify and delete email providers"
      },
      {
        title: "List Geofences",
        name: "list-zones",
        description: "List client geofences"
      },
      {
        title: "Modify Geofences",
        name: "zones",
        description: "Create, modify and delete geofences and their groups"
      },
      {
        title: "View Media",
        name: "list-media",
        description: "View client media"
      },
      {
        title: "Modify Media",
        name: "media",
        description: "Request media and update media events"
      },
      {
        title: "Modify Alerts",
        name: "alerts",
        description: "Create, modify and delete alert definitions"
      },
      {
        title: "Poll",
        name: "poll",
        description: "Poll devices for telemetry updates"
      },
      {
        title: "Upload Parameters",
        name: "setparams",
        description: "Upload parameters to devices"
      },
      {
        title: "Toggle Outputs",
        name: "outputs",
        description: "Toggle device outputs"
      },
      {
        title: "Run Reports",
        name: "reports",
        description: "Run and schedule reports"
      },
      {
        title: "Modify Report Templates",
        name: "report-templates",
        description: "Create, modify and delete report templates"
      },
      {
        title: "Custom Fields",
        name: "customFields",
        description: "Create, modify and delete custom fields"
      },
      {
        title: "Analytics Reports",
        name: "analytics",
        description: "Create, modify and delete analytics reports"
      },
      {
        title: "List User Roles",
        name: "list-userroles",
        description: "List the user roles for a client"
      },
      {
        title: "Modify User Roles",
        name: "userroles",
        description: "Create, modify and delete user roles for a client"
      }
    ]
  },
  {
    name: "user-roles",
    title: "Users Roles",
    description: "Rights relating to user role management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the user roles in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete user roles"
      }
    ]
  },
  {
    name: "users",
    title: "Users",
    description: "Rights relating to user management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the users in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete users"
      }
    ]
  },
  {
    name: "themes",
    title: "Themes",
    description: "Rights relating to theme management",
    rights: [
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete themes"
      }
    ]
  },
  {
    name: "mapSets",
    title: "Map Sets",
    description: "Rights relating to map set management",
    rights: [
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete map sets"
      }
    ]
  },
  {
    name: "billing",
    title: "Billing",
    description: "Rights relating to billing profiles",
    rights: [
      {
        title: "Create Profiles",
        name: "createProfile",
        description: "Create, modify and delete billing profiles"
      }
    ]
  }
];
var LEGACY_SYSTEM_RIGHTS = [
  {
    name: "system",
    title: "System",
    description: "Rights relating to system management",
    rights: [
      {
        title: "Global Lookups",
        name: "global-lookups",
        description: "Create, modify and delete global lookups"
      }
    ]
  },
  {
    name: "distributors",
    title: "Distributors",
    description: "Rights relating to distributor management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the distributors in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete distributors"
      },
      {
        title: "List Users",
        name: "list-users",
        description: "List distributor users and user roles"
      },
      {
        title: "Modify Users",
        name: "users",
        description: "Create, modify and delete distributor users"
      }
    ]
  },
  {
    name: "vendors",
    title: "Vendors",
    description: "Rights relating to vendor management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the vendors in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete vendors"
      },
      {
        title: "Migrate",
        name: "migrate",
        description: "Migrate vendors between distributors"
      },
      {
        title: "List Users",
        name: "list-users",
        description: "List vendor users and user roles"
      },
      {
        title: "Modify Users",
        name: "users",
        description: "Create, modify and delete vendor users"
      },
      {
        title: "List User Roles",
        name: "list-userroles",
        description: "List the user roles for a client"
      },
      {
        title: "Modify User Roles",
        name: "roles",
        description: "Create, modify and delete user roles for a client"
      }
    ]
  },
  {
    name: "clients",
    title: "Clients",
    description: "Rights relating to client management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the clients in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete clients"
      },
      {
        title: "List Users",
        name: "list-users",
        description: "List client users and user roles"
      },
      {
        title: "Modify Users",
        name: "users",
        description: "Create, modify and delete client users and their roles"
      },
      {
        title: "List Assets",
        name: "list-assets",
        description: "List client assets"
      },
      {
        title: "Modify Assets",
        name: "assets",
        description: "Create, modify and delete assets and their groups"
      },
      {
        title: "List Devices",
        name: "list-devices",
        description: "List client devices"
      },
      {
        title: "Modify Devices",
        name: "devices",
        description: "Create, modify and delete devices"
      },
      {
        title: "List SIM Cards",
        name: "list-simcards",
        description: "List SIM cards"
      },
      {
        title: "Modify SIM Cards",
        name: "simcards",
        description: "Create, modify and delete SIM cards"
      },
      {
        title: "List Fuel Cards",
        name: "list-fuelcards",
        description: "List fuel cards"
      },
      {
        title: "Modify Fuel Cards",
        name: "fuelcards",
        description: "Create, modify and delete fuel cards"
      },
      {
        title: "List Device Providers",
        name: "list-deviceProviders",
        description: "List client device providers"
      },
      {
        title: "Modify Device Providers",
        name: "deviceProviders",
        description: "Create, modify and delete device providers"
      },
      {
        title: "List SMS Gateways",
        name: "list-smsGatewayProviders",
        description: "List client SMS gateways"
      },
      {
        title: "Modify SMS Gateways",
        name: "smsGatewayProviders",
        description: "Create, modify and delete SMS gateways"
      },
      {
        title: "List Email Providers",
        name: "list-emailProviders",
        description: "List client email providers"
      },
      {
        title: "Modify Email Providers",
        name: "emailProviders",
        description: "Create, modify and delete email providers"
      },
      {
        title: "List Geofences",
        name: "list-zones",
        description: "List client geofences"
      },
      {
        title: "Modify Geofences",
        name: "zones",
        description: "Create, modify and delete geofences and their groups"
      },
      {
        title: "View Media",
        name: "list-media",
        description: "View client media"
      },
      {
        title: "Modify Media",
        name: "media",
        description: "Request media and update media events"
      },
      {
        title: "Modify Alerts",
        name: "alerts",
        description: "Create, modify and delete alert definitions"
      },
      {
        title: "Poll",
        name: "poll",
        description: "Poll devices for telemetry updates"
      },
      {
        title: "Upload Parameters",
        name: "setparams",
        description: "Upload parameters to devices"
      },
      {
        title: "Toggle Outputs",
        name: "outputs",
        description: "Toggle device outputs"
      },
      {
        title: "Run Reports",
        name: "reports",
        description: "Run and schedule reports"
      },
      {
        title: "Modify Report Templates",
        name: "report-templates",
        description: "Create, modify and delete report templates"
      },
      {
        title: "Custom Fields",
        name: "customFields",
        description: "Create, modify and delete custom fields"
      },
      {
        title: "Analytics Reports",
        name: "analytics",
        description: "Create, modify and delete analytics reports"
      },
      {
        title: "List Roles",
        name: "list-roles",
        description: "List the user roles for a client"
      },
      {
        title: "Modify Roles",
        name: "roles",
        description: "Create, modify and delete user roles for a client"
      }
    ]
  },
  {
    name: "user-roles",
    title: "Users Roles",
    description: "Rights relating to user role management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the user roles in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete user roles"
      }
    ]
  },
  {
    name: "users",
    title: "Users",
    description: "Rights relating to user management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the users in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete users"
      }
    ]
  },
  {
    name: "themes",
    title: "Themes",
    description: "Rights relating to theme management",
    rights: [
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete themes"
      }
    ]
  },
  {
    name: "mapSets",
    title: "Map Sets",
    description: "Rights relating to map set management",
    rights: [
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete map sets"
      }
    ]
  },
  {
    name: "billing",
    title: "Billing",
    description: "Rights relating to billing profiles",
    rights: [
      {
        title: "Create Profiles",
        name: "createProfile",
        description: "Create, modify and delete billing profiles"
      }
    ]
  }
];
var LEGACY_RIGHTS = {
  system: LEGACY_SYSTEM_RIGHTS,
  distributor: LEGACY_DISTRIBUTOR_RIGHTS,
  vendor: LEGACY_VENDOR_RIGHTS,
  client: LEGACY_CLIENT_RIGHTS
};

// src/app/features/administration/models/theme-form.constants.ts
var AVAILABLE_FONTS = [
  "Muli",
  "Roboto",
  "Open Sans",
  "Source Sans Pro",
  "Montserrat",
  "Lato",
  "Ubuntu",
  "Arimo"
];
var FONT_WEIGHTS = ["300", "400", "500", "600", "700"];
var FONT_TRANSFORMS = [
  { label: "None", value: "unset" },
  { label: "Title Case", value: "capitalize" },
  { label: "Upper Case", value: "uppercase" },
  { label: "Lower Case", value: "lowercase" }
];
var DROP_SHADOW_OPTIONS = [
  { label: "None", value: "none" },
  { label: "Tiny", value: "1px 2px 5px 0 rgba(0, 0, 0, 0.1)" },
  { label: "Small", value: "1px 2px 5px 0 rgba(0, 0, 0, 0.2)" },
  { label: "Medium", value: "2px 4px 8px 0 rgba(0, 0, 0, 0.2)" },
  { label: "Large", value: "4px 8px 12px 0 rgba(0, 0, 0, 0.2)" }
];
var DEFAULT_SHADE_VALUES = [0.025, 0.05, 0.1];
var ICON_PACKS = [
  { label: "Font Awesome Solid", value: "fontawesome:900" },
  { label: "Font Awesome Regular", value: "fontawesome:400" },
  { label: "Font Awesome Light", value: "fontawesome:300" }
];
var SIZE_OPTIONS = [
  { label: "Hidden", value: "hidden" },
  { label: "Auto", value: "auto" },
  { label: "Compact", value: "compact" },
  { label: "Expanded", value: "expanded" }
];
var POSITION_OPTIONS = [
  { label: "Left", value: "left" },
  { label: "Right", value: "right" }
];

// src/app/core/services/utility.service.ts
var UtilityService = class _UtilityService {
  convertBlobToBase64(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }
  /**
   * Constructs an RQL filter string from the given filters object.
   * @param filters An object containing filter criteria.
   * @returns A string representing the RQL filter.
   */
  handleArrayValue(key, value) {
    return `${key}=in=(${value.map((v) => encodeURIComponent(String(v))).join(",")})`;
  }
  handleFilterValueArray(key, values, operator) {
    if (values.length === 0)
      return "";
    const conditions = values.map((v) => `${key}${operator === "in" ? "=" : operator}${encodeURIComponent(String(v))}`).join("|");
    return values.length > 1 ? `(${conditions})` : conditions;
  }
  handleFilterValue(key, value) {
    const operator = isDefined(value.operator) ? value.operator : "=";
    let condition;
    if (Array.isArray(value.value)) {
      condition = this.handleFilterValueArray(key, value.value, operator);
    } else {
      condition = `${key}${operator}${String(value.value)}`;
    }
    return value.wrap ?? false ? `(${condition})` : condition;
  }
  constructRqlFilter(filters) {
    return Object.entries(filters).map(([key, value]) => {
      if (Array.isArray(value)) {
        return this.handleArrayValue(key, value);
      } else if (typeof value === "string") {
        return `${key}=eq=${encodeURIComponent(value)}`;
      } else if (typeof value === "number") {
        return `${key}=eq=${value}`;
      } else if (typeof value === "object" && value !== null) {
        return this.handleFilterValue(key, value);
      }
      return "";
    }).filter(Boolean).join("&");
  }
  /**
   * Converts a string to title case (capitalizes first letter of each word)
   * @param str The string to convert
   * @returns The title cased string
   */
  toTitleCase(str) {
    if (!str)
      return "";
    return str.toLowerCase().split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  escapeRqlValue(value) {
    const result = encodeURIComponent(value.replace(/[%/\\^$+?.()|[\]{}]/g, "\\$&")).replace(/!/g, "%21").replace(/~/g, "%7E").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/'/g, "%27").replace(/\*/g, "%2A");
    return result;
  }
  decamelize(str) {
    if (isNullOrUndefined(str))
      return "";
    return str.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/_/g, " ").toLowerCase().trim();
  }
  getWeekdaysString(weekdays) {
    return WEEKDAY_OPTIONS.filter((option) => weekdays.includes(option.value)).map((option) => option.label).join(", ");
  }
  static \u0275fac = function UtilityService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UtilityService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UtilityService, factory: _UtilityService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UtilityService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/message/index.mjs
var style = "\n    .p-message {\n        display: grid;\n        grid-template-rows: 1fr;\n        border-radius: dt('message.border.radius');\n        outline-width: dt('message.border.width');\n        outline-style: solid;\n    }\n\n    .p-message-content-wrapper {\n        min-height: 0;\n    }\n\n    .p-message-content {\n        display: flex;\n        align-items: center;\n        padding: dt('message.content.padding');\n        gap: dt('message.content.gap');\n    }\n\n    .p-message-icon {\n        flex-shrink: 0;\n    }\n\n    .p-message-close-button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-shrink: 0;\n        margin-inline-start: auto;\n        overflow: hidden;\n        position: relative;\n        width: dt('message.close.button.width');\n        height: dt('message.close.button.height');\n        border-radius: dt('message.close.button.border.radius');\n        background: transparent;\n        transition:\n            background dt('message.transition.duration'),\n            color dt('message.transition.duration'),\n            outline-color dt('message.transition.duration'),\n            box-shadow dt('message.transition.duration'),\n            opacity 0.3s;\n        outline-color: transparent;\n        color: inherit;\n        padding: 0;\n        border: none;\n        cursor: pointer;\n        user-select: none;\n    }\n\n    .p-message-close-icon {\n        font-size: dt('message.close.icon.size');\n        width: dt('message.close.icon.size');\n        height: dt('message.close.icon.size');\n    }\n\n    .p-message-close-button:focus-visible {\n        outline-width: dt('message.close.button.focus.ring.width');\n        outline-style: dt('message.close.button.focus.ring.style');\n        outline-offset: dt('message.close.button.focus.ring.offset');\n    }\n\n    .p-message-info {\n        background: dt('message.info.background');\n        outline-color: dt('message.info.border.color');\n        color: dt('message.info.color');\n        box-shadow: dt('message.info.shadow');\n    }\n\n    .p-message-info .p-message-close-button:focus-visible {\n        outline-color: dt('message.info.close.button.focus.ring.color');\n        box-shadow: dt('message.info.close.button.focus.ring.shadow');\n    }\n\n    .p-message-info .p-message-close-button:hover {\n        background: dt('message.info.close.button.hover.background');\n    }\n\n    .p-message-info.p-message-outlined {\n        color: dt('message.info.outlined.color');\n        outline-color: dt('message.info.outlined.border.color');\n    }\n\n    .p-message-info.p-message-simple {\n        color: dt('message.info.simple.color');\n    }\n\n    .p-message-success {\n        background: dt('message.success.background');\n        outline-color: dt('message.success.border.color');\n        color: dt('message.success.color');\n        box-shadow: dt('message.success.shadow');\n    }\n\n    .p-message-success .p-message-close-button:focus-visible {\n        outline-color: dt('message.success.close.button.focus.ring.color');\n        box-shadow: dt('message.success.close.button.focus.ring.shadow');\n    }\n\n    .p-message-success .p-message-close-button:hover {\n        background: dt('message.success.close.button.hover.background');\n    }\n\n    .p-message-success.p-message-outlined {\n        color: dt('message.success.outlined.color');\n        outline-color: dt('message.success.outlined.border.color');\n    }\n\n    .p-message-success.p-message-simple {\n        color: dt('message.success.simple.color');\n    }\n\n    .p-message-warn {\n        background: dt('message.warn.background');\n        outline-color: dt('message.warn.border.color');\n        color: dt('message.warn.color');\n        box-shadow: dt('message.warn.shadow');\n    }\n\n    .p-message-warn .p-message-close-button:focus-visible {\n        outline-color: dt('message.warn.close.button.focus.ring.color');\n        box-shadow: dt('message.warn.close.button.focus.ring.shadow');\n    }\n\n    .p-message-warn .p-message-close-button:hover {\n        background: dt('message.warn.close.button.hover.background');\n    }\n\n    .p-message-warn.p-message-outlined {\n        color: dt('message.warn.outlined.color');\n        outline-color: dt('message.warn.outlined.border.color');\n    }\n\n    .p-message-warn.p-message-simple {\n        color: dt('message.warn.simple.color');\n    }\n\n    .p-message-error {\n        background: dt('message.error.background');\n        outline-color: dt('message.error.border.color');\n        color: dt('message.error.color');\n        box-shadow: dt('message.error.shadow');\n    }\n\n    .p-message-error .p-message-close-button:focus-visible {\n        outline-color: dt('message.error.close.button.focus.ring.color');\n        box-shadow: dt('message.error.close.button.focus.ring.shadow');\n    }\n\n    .p-message-error .p-message-close-button:hover {\n        background: dt('message.error.close.button.hover.background');\n    }\n\n    .p-message-error.p-message-outlined {\n        color: dt('message.error.outlined.color');\n        outline-color: dt('message.error.outlined.border.color');\n    }\n\n    .p-message-error.p-message-simple {\n        color: dt('message.error.simple.color');\n    }\n\n    .p-message-secondary {\n        background: dt('message.secondary.background');\n        outline-color: dt('message.secondary.border.color');\n        color: dt('message.secondary.color');\n        box-shadow: dt('message.secondary.shadow');\n    }\n\n    .p-message-secondary .p-message-close-button:focus-visible {\n        outline-color: dt('message.secondary.close.button.focus.ring.color');\n        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');\n    }\n\n    .p-message-secondary .p-message-close-button:hover {\n        background: dt('message.secondary.close.button.hover.background');\n    }\n\n    .p-message-secondary.p-message-outlined {\n        color: dt('message.secondary.outlined.color');\n        outline-color: dt('message.secondary.outlined.border.color');\n    }\n\n    .p-message-secondary.p-message-simple {\n        color: dt('message.secondary.simple.color');\n    }\n\n    .p-message-contrast {\n        background: dt('message.contrast.background');\n        outline-color: dt('message.contrast.border.color');\n        color: dt('message.contrast.color');\n        box-shadow: dt('message.contrast.shadow');\n    }\n\n    .p-message-contrast .p-message-close-button:focus-visible {\n        outline-color: dt('message.contrast.close.button.focus.ring.color');\n        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');\n    }\n\n    .p-message-contrast .p-message-close-button:hover {\n        background: dt('message.contrast.close.button.hover.background');\n    }\n\n    .p-message-contrast.p-message-outlined {\n        color: dt('message.contrast.outlined.color');\n        outline-color: dt('message.contrast.outlined.border.color');\n    }\n\n    .p-message-contrast.p-message-simple {\n        color: dt('message.contrast.simple.color');\n    }\n\n    .p-message-text {\n        font-size: dt('message.text.font.size');\n        font-weight: dt('message.text.font.weight');\n    }\n\n    .p-message-icon {\n        font-size: dt('message.icon.size');\n        width: dt('message.icon.size');\n        height: dt('message.icon.size');\n    }\n\n    .p-message-sm .p-message-content {\n        padding: dt('message.content.sm.padding');\n    }\n\n    .p-message-sm .p-message-text {\n        font-size: dt('message.text.sm.font.size');\n    }\n\n    .p-message-sm .p-message-icon {\n        font-size: dt('message.icon.sm.size');\n        width: dt('message.icon.sm.size');\n        height: dt('message.icon.sm.size');\n    }\n\n    .p-message-sm .p-message-close-icon {\n        font-size: dt('message.close.icon.sm.size');\n        width: dt('message.close.icon.sm.size');\n        height: dt('message.close.icon.sm.size');\n    }\n\n    .p-message-lg .p-message-content {\n        padding: dt('message.content.lg.padding');\n    }\n\n    .p-message-lg .p-message-text {\n        font-size: dt('message.text.lg.font.size');\n    }\n\n    .p-message-lg .p-message-icon {\n        font-size: dt('message.icon.lg.size');\n        width: dt('message.icon.lg.size');\n        height: dt('message.icon.lg.size');\n    }\n\n    .p-message-lg .p-message-close-icon {\n        font-size: dt('message.close.icon.lg.size');\n        width: dt('message.close.icon.lg.size');\n        height: dt('message.close.icon.lg.size');\n    }\n\n    .p-message-outlined {\n        background: transparent;\n        outline-width: dt('message.outlined.border.width');\n    }\n\n    .p-message-simple {\n        background: transparent;\n        outline-color: transparent;\n        box-shadow: none;\n    }\n\n    .p-message-simple .p-message-content {\n        padding: dt('message.simple.content.padding');\n    }\n\n    .p-message-outlined .p-message-close-button:hover,\n    .p-message-simple .p-message-close-button:hover {\n        background: transparent;\n    }\n\n    .p-message-enter-active {\n        animation: p-animate-message-enter 0.3s ease-out forwards;\n        overflow: hidden;\n    }\n\n    .p-message-leave-active {\n        animation: p-animate-message-leave 0.15s ease-in forwards;\n        overflow: hidden;\n    }\n\n    @keyframes p-animate-message-enter {\n        from {\n            opacity: 0;\n            grid-template-rows: 0fr;\n        }\n        to {\n            opacity: 1;\n            grid-template-rows: 1fr;\n        }\n    }\n\n    @keyframes p-animate-message-leave {\n        from {\n            opacity: 1;\n            grid-template-rows: 1fr;\n        }\n        to {\n            opacity: 0;\n            margin: 0;\n            grid-template-rows: 0fr;\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-message.mjs
var _c0 = ["container"];
var _c1 = ["icon"];
var _c2 = ["closeicon"];
var _c3 = ["*"];
var _c4 = (a0) => ({
  closeCallback: a0
});
function Message_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Message_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Message_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.iconTemplate || ctx_r0._iconTemplate);
  }
}
function Message_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("icon"), ctx_r0.icon));
    \u0275\u0275property("pBind", ctx_r0.ptm("icon"));
    \u0275\u0275attribute("data-p", ctx_r0.dataP);
  }
}
function Message_Conditional_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Message_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Message_Conditional_4_ng_container_0_Template, 1, 0, "ng-container", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.containerTemplate || ctx_r0._containerTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c4, ctx_r0.closeCallback));
  }
}
function Message_Conditional_5_div_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("pBind", ctx_r0.ptm("text"))("ngClass", ctx_r0.cx("text"))("innerHTML", ctx_r0.text, \u0275\u0275sanitizeHtml);
    \u0275\u0275attribute("data-p", ctx_r0.dataP);
  }
}
function Message_Conditional_5_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, Message_Conditional_5_div_0_span_1_Template, 1, 4, "span", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.escape);
  }
}
function Message_Conditional_5_ng_template_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("pBind", ctx_r0.ptm("text"))("ngClass", ctx_r0.cx("text"));
    \u0275\u0275attribute("data-p", ctx_r0.dataP);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.text);
  }
}
function Message_Conditional_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Message_Conditional_5_ng_template_1_span_0_Template, 2, 4, "span", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r0.escape && ctx_r0.text);
  }
}
function Message_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Message_Conditional_5_div_0_Template, 2, 1, "div", 6)(1, Message_Conditional_5_ng_template_1_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(3, "span", 7);
    \u0275\u0275projection(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const escapeOut_r2 = \u0275\u0275reference(2);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", !ctx_r0.escape)("ngIfElse", escapeOut_r2);
    \u0275\u0275advance(3);
    \u0275\u0275property("pBind", ctx_r0.ptm("text"))("ngClass", ctx_r0.cx("text"));
    \u0275\u0275attribute("data-p", ctx_r0.dataP);
  }
}
function Message_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("closeIcon"), ctx_r0.closeIcon));
    \u0275\u0275property("pBind", ctx_r0.ptm("closeIcon"))("ngClass", ctx_r0.closeIcon);
    \u0275\u0275attribute("data-p", ctx_r0.dataP);
  }
}
function Message_Conditional_6_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Message_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Message_Conditional_6_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.closeIconTemplate || ctx_r0._closeIconTemplate);
  }
}
function Message_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 14);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.cx("closeIcon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("closeIcon"));
    \u0275\u0275attribute("data-p", ctx_r0.dataP);
  }
}
function Message_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function Message_Conditional_6_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.close($event));
    });
    \u0275\u0275conditionalCreate(1, Message_Conditional_6_Conditional_1_Template, 1, 5, "i", 12);
    \u0275\u0275conditionalCreate(2, Message_Conditional_6_Conditional_2_Template, 1, 1, "ng-container");
    \u0275\u0275conditionalCreate(3, Message_Conditional_6_Conditional_3_Template, 1, 4, ":svg:svg", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("closeButton"));
    \u0275\u0275property("pBind", ctx_r0.ptm("closeButton"));
    \u0275\u0275attribute("aria-label", ctx_r0.closeAriaLabel)("data-p", ctx_r0.dataP);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.closeIcon ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.closeIconTemplate || ctx_r0._closeIconTemplate ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.closeIconTemplate && !ctx_r0._closeIconTemplate && !ctx_r0.closeIcon ? 3 : -1);
  }
}
var classes = {
  root: ({
    instance
  }) => ["p-message p-component p-message-" + instance.severity, instance.variant && "p-message-" + instance.variant, {
    "p-message-sm": instance.size === "small",
    "p-message-lg": instance.size === "large"
  }],
  contentWrapper: "p-message-content-wrapper",
  content: "p-message-content",
  icon: "p-message-icon",
  text: "p-message-text",
  closeButton: "p-message-close-button",
  closeIcon: "p-message-close-icon"
};
var MessageStyle = class _MessageStyle extends BaseStyle {
  name = "message";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MessageStyle_BaseFactory;
    return function MessageStyle_Factory(__ngFactoryType__) {
      return (\u0275MessageStyle_BaseFactory || (\u0275MessageStyle_BaseFactory = \u0275\u0275getInheritedFactory(_MessageStyle)))(__ngFactoryType__ || _MessageStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MessageStyle,
    factory: _MessageStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageStyle, [{
    type: Injectable
  }], null, null);
})();
var MessageClasses;
(function(MessageClasses2) {
  MessageClasses2["root"] = "p-message";
  MessageClasses2["content"] = "p-message-content";
  MessageClasses2["icon"] = "p-message-icon";
  MessageClasses2["text"] = "p-message-text";
  MessageClasses2["closeButton"] = "p-message-close-button";
  MessageClasses2["closeIcon"] = "p-message-close-icon";
})(MessageClasses || (MessageClasses = {}));
var MESSAGE_INSTANCE = new InjectionToken("MESSAGE_INSTANCE");
var Message = class _Message extends BaseComponent {
  componentName = "Message";
  _componentStyle = inject(MessageStyle);
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  $pcMessage = inject(MESSAGE_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Severity level of the message.
   * @defaultValue 'info'
   * @group Props
   */
  severity = "info";
  /**
   * Text content.
   * @deprecated since v20.0.0. Use content projection instead '<p-message>Content</p-message>'.
   * @group Props
   */
  text;
  /**
   * Whether displaying messages would be escaped or not.
   * @deprecated since v20.0.0. Use content projection instead '<p-message>Content</p-message>'.
   * @group Props
   */
  escape = true;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Whether the message can be closed manually using the close icon.
   * @group Props
   * @defaultValue false
   */
  closable = false;
  /**
   * Icon to display in the message.
   * @group Props
   * @defaultValue undefined
   */
  icon;
  /**
   * Icon to display in the message close button.
   * @group Props
   * @defaultValue undefined
   */
  closeIcon;
  /**
   * Delay in milliseconds to close the message automatically.
   * @defaultValue undefined
   */
  life;
  /**
   * Transition options of the show animation.
   * @defaultValue '300ms ease-out'
   * @group Props
   * @deprecated since v21.0.0, use `motionOptions` instead.
   */
  showTransitionOptions = "300ms ease-out";
  /**
   * Transition options of the hide animation.
   * @defaultValue '200ms cubic-bezier(0.86, 0, 0.07, 1)'
   * @group Props
   * @deprecated since v21.0.0, use `motionOptions` instead.
   */
  hideTransitionOptions = "200ms cubic-bezier(0.86, 0, 0.07, 1)";
  /**
   * Defines the size of the component.
   * @group Props
   */
  size;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant;
  /**
   * The motion options.
   * @group Props
   */
  motionOptions = input(void 0, ...ngDevMode ? [{
    debugName: "motionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  computedMotionOptions = computed(() => {
    return __spreadValues(__spreadValues({}, this.ptm("motion")), this.motionOptions());
  }, ...ngDevMode ? [{
    debugName: "computedMotionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Emits when the message is closed.
   * @param {{ originalEvent: Event }} event - The event object containing the original event.
   * @group Emits
   */
  onClose = new EventEmitter();
  get closeAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.close : void 0;
  }
  visible = signal(true, ...ngDevMode ? [{
    debugName: "visible"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Custom template of the message container.
   * @param {MessageContainerTemplateContext} context - container context.
   * @see {@link MessageContainerTemplateContext}
   * @group Templates
   */
  containerTemplate;
  /**
   * Custom template of the message icon.
   * @group Templates
   */
  iconTemplate;
  /**
   * Custom template of the close icon.
   * @group Templates
   */
  closeIconTemplate;
  templates;
  _containerTemplate;
  _iconTemplate;
  _closeIconTemplate;
  closeCallback = (event) => {
    this.close(event);
  };
  onInit() {
    if (this.life) {
      setTimeout(() => {
        this.visible.set(false);
      }, this.life);
    }
  }
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "container":
          this._containerTemplate = item.template;
          break;
        case "icon":
          this._iconTemplate = item.template;
          break;
        case "closeicon":
          this._closeIconTemplate = item.template;
          break;
      }
    });
  }
  /**
   * Closes the message.
   * @param {Event} event - Browser event.
   * @group Method
   */
  close(event) {
    this.visible.set(false);
    this.onClose.emit({
      originalEvent: event
    });
  }
  get dataP() {
    return this.cn({
      outlined: this.variant === "outlined",
      simple: this.variant === "simple",
      [this.severity]: this.severity,
      [this.size]: this.size
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Message_BaseFactory;
    return function Message_Factory(__ngFactoryType__) {
      return (\u0275Message_BaseFactory || (\u0275Message_BaseFactory = \u0275\u0275getInheritedFactory(_Message)))(__ngFactoryType__ || _Message);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Message,
    selectors: [["p-message"]],
    contentQueries: function Message_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 4)(dirIndex, _c1, 4)(dirIndex, _c2, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.containerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.iconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.closeIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostAttrs: ["role", "alert", "aria-live", "polite"],
    hostVars: 5,
    hostBindings: function Message_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275animateEnter(function Message_HostBindings_animateenter_cb() {
          return "p-message-enter-active";
        });
        \u0275\u0275animateLeave(function Message_HostBindings_animateleave_cb() {
          return "p-message-leave-active";
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("data-p", ctx.dataP);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
        \u0275\u0275classProp("p-message-leave-active", !ctx.visible());
      }
    },
    inputs: {
      severity: "severity",
      text: "text",
      escape: [2, "escape", "escape", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      closable: [2, "closable", "closable", booleanAttribute],
      icon: "icon",
      closeIcon: "closeIcon",
      life: "life",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      size: "size",
      variant: "variant",
      motionOptions: [1, "motionOptions"]
    },
    outputs: {
      onClose: "onClose"
    },
    features: [\u0275\u0275ProvidersFeature([MessageStyle, {
      provide: MESSAGE_INSTANCE,
      useExisting: _Message
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Message
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c3,
    decls: 7,
    vars: 12,
    consts: [["escapeOut", ""], [3, "pBind"], [3, "pBind", "class"], ["pRipple", "", "type", "button", 3, "pBind", "class"], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf", "ngIfElse"], [3, "pBind", "ngClass"], [3, "pBind", "ngClass", "innerHTML", 4, "ngIf"], [3, "pBind", "ngClass", "innerHTML"], [3, "pBind", "ngClass", 4, "ngIf"], ["pRipple", "", "type", "button", 3, "click", "pBind"], [3, "pBind", "class", "ngClass"], ["data-p-icon", "times", 3, "pBind", "class"], ["data-p-icon", "times", 3, "pBind"]],
    template: function Message_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 1);
        \u0275\u0275conditionalCreate(2, Message_Conditional_2_Template, 1, 1, "ng-container");
        \u0275\u0275conditionalCreate(3, Message_Conditional_3_Template, 1, 4, "i", 2);
        \u0275\u0275conditionalCreate(4, Message_Conditional_4_Template, 1, 4, "ng-container")(5, Message_Conditional_5_Template, 5, 5);
        \u0275\u0275conditionalCreate(6, Message_Conditional_6_Template, 4, 8, "button", 3);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("contentWrapper"));
        \u0275\u0275property("pBind", ctx.ptm("contentWrapper"));
        \u0275\u0275attribute("data-p", ctx.dataP);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("content"));
        \u0275\u0275property("pBind", ctx.ptm("content"));
        \u0275\u0275attribute("data-p", ctx.dataP);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.iconTemplate || ctx._iconTemplate ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.icon ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.containerTemplate || ctx._containerTemplate ? 4 : 5);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.closable ? 6 : -1);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, TimesIcon, Ripple, SharedModule, Bind, MotionModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Message, [{
    type: Component,
    args: [{
      selector: "p-message",
      standalone: true,
      imports: [CommonModule, TimesIcon, Ripple, SharedModule, Bind, MotionModule],
      template: `
        <div [pBind]="ptm('contentWrapper')" [class]="cx('contentWrapper')" [attr.data-p]="dataP">
            <div [pBind]="ptm('content')" [class]="cx('content')" [attr.data-p]="dataP">
                @if (iconTemplate || _iconTemplate) {
                    <ng-container *ngTemplateOutlet="iconTemplate || _iconTemplate"></ng-container>
                }
                @if (icon) {
                    <i [pBind]="ptm('icon')" [class]="cn(cx('icon'), icon)" [attr.data-p]="dataP"></i>
                }

                @if (containerTemplate || _containerTemplate) {
                    <ng-container *ngTemplateOutlet="containerTemplate || _containerTemplate; context: { closeCallback: closeCallback }"></ng-container>
                } @else {
                    <div *ngIf="!escape; else escapeOut">
                        <span [pBind]="ptm('text')" *ngIf="!escape" [ngClass]="cx('text')" [innerHTML]="text" [attr.data-p]="dataP"></span>
                    </div>

                    <ng-template #escapeOut>
                        <span [pBind]="ptm('text')" *ngIf="escape && text" [ngClass]="cx('text')" [attr.data-p]="dataP">{{ text }}</span>
                    </ng-template>

                    <span [pBind]="ptm('text')" [ngClass]="cx('text')" [attr.data-p]="dataP">
                        <ng-content></ng-content>
                    </span>
                }
                @if (closable) {
                    <button [pBind]="ptm('closeButton')" pRipple type="button" [class]="cx('closeButton')" (click)="close($event)" [attr.aria-label]="closeAriaLabel" [attr.data-p]="dataP">
                        @if (closeIcon) {
                            <i [pBind]="ptm('closeIcon')" [class]="cn(cx('closeIcon'), closeIcon)" [ngClass]="closeIcon" [attr.data-p]="dataP"></i>
                        }
                        @if (closeIconTemplate || _closeIconTemplate) {
                            <ng-container *ngTemplateOutlet="closeIconTemplate || _closeIconTemplate"></ng-container>
                        }
                        @if (!closeIconTemplate && !_closeIconTemplate && !closeIcon) {
                            <svg [pBind]="ptm('closeIcon')" data-p-icon="times" [class]="cx('closeIcon')" [attr.data-p]="dataP" />
                        }
                    </button>
                }
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [MessageStyle, {
        provide: MESSAGE_INSTANCE,
        useExisting: Message
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Message
      }],
      hostDirectives: [Bind],
      host: {
        "[attr.data-p]": "dataP",
        role: "alert",
        "aria-live": "polite",
        "[class]": 'cn(cx("root"), styleClass)',
        "[animate.enter]": '"p-message-enter-active"',
        "[animate.leave]": '"p-message-leave-active"',
        "[class.p-message-leave-active]": "!visible()"
      }
    }]
  }], null, {
    severity: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    escape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    closable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    icon: [{
      type: Input
    }],
    closeIcon: [{
      type: Input
    }],
    life: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    motionOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "motionOptions",
        required: false
      }]
    }],
    onClose: [{
      type: Output
    }],
    containerTemplate: [{
      type: ContentChild,
      args: ["container", {
        descendants: false
      }]
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon", {
        descendants: false
      }]
    }],
    closeIconTemplate: [{
      type: ContentChild,
      args: ["closeicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var MessageModule = class _MessageModule {
  static \u0275fac = function MessageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessageModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MessageModule,
    imports: [Message, SharedModule],
    exports: [Message, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Message, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageModule, [{
    type: NgModule,
    args: [{
      imports: [Message, SharedModule],
      exports: [Message, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/toggleswitch/index.mjs
var style2 = "\n    .p-toggleswitch {\n        display: inline-block;\n        width: dt('toggleswitch.width');\n        height: dt('toggleswitch.height');\n    }\n\n    .p-toggleswitch-input {\n        cursor: pointer;\n        appearance: none;\n        position: absolute;\n        top: 0;\n        inset-inline-start: 0;\n        width: 100%;\n        height: 100%;\n        padding: 0;\n        margin: 0;\n        opacity: 0;\n        z-index: 1;\n        outline: 0 none;\n        border-radius: dt('toggleswitch.border.radius');\n    }\n\n    .p-toggleswitch-slider {\n        cursor: pointer;\n        width: 100%;\n        height: 100%;\n        border-width: dt('toggleswitch.border.width');\n        border-style: solid;\n        border-color: dt('toggleswitch.border.color');\n        background: dt('toggleswitch.background');\n        transition:\n            background dt('toggleswitch.transition.duration'),\n            color dt('toggleswitch.transition.duration'),\n            border-color dt('toggleswitch.transition.duration'),\n            outline-color dt('toggleswitch.transition.duration'),\n            box-shadow dt('toggleswitch.transition.duration');\n        border-radius: dt('toggleswitch.border.radius');\n        outline-color: transparent;\n        box-shadow: dt('toggleswitch.shadow');\n    }\n\n    .p-toggleswitch-handle {\n        position: absolute;\n        top: 50%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background: dt('toggleswitch.handle.background');\n        color: dt('toggleswitch.handle.color');\n        width: dt('toggleswitch.handle.size');\n        height: dt('toggleswitch.handle.size');\n        inset-inline-start: dt('toggleswitch.gap');\n        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));\n        border-radius: dt('toggleswitch.handle.border.radius');\n        transition:\n            background dt('toggleswitch.transition.duration'),\n            color dt('toggleswitch.transition.duration'),\n            inset-inline-start dt('toggleswitch.slide.duration'),\n            box-shadow dt('toggleswitch.slide.duration');\n    }\n\n    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {\n        background: dt('toggleswitch.checked.background');\n        border-color: dt('toggleswitch.checked.border.color');\n    }\n\n    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {\n        background: dt('toggleswitch.handle.checked.background');\n        color: dt('toggleswitch.handle.checked.color');\n        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));\n    }\n\n    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {\n        background: dt('toggleswitch.hover.background');\n        border-color: dt('toggleswitch.hover.border.color');\n    }\n\n    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {\n        background: dt('toggleswitch.handle.hover.background');\n        color: dt('toggleswitch.handle.hover.color');\n    }\n\n    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {\n        background: dt('toggleswitch.checked.hover.background');\n        border-color: dt('toggleswitch.checked.hover.border.color');\n    }\n\n    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {\n        background: dt('toggleswitch.handle.checked.hover.background');\n        color: dt('toggleswitch.handle.checked.hover.color');\n    }\n\n    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {\n        box-shadow: dt('toggleswitch.focus.ring.shadow');\n        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');\n        outline-offset: dt('toggleswitch.focus.ring.offset');\n    }\n\n    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {\n        border-color: dt('toggleswitch.invalid.border.color');\n    }\n\n    .p-toggleswitch.p-disabled {\n        opacity: 1;\n    }\n\n    .p-toggleswitch.p-disabled .p-toggleswitch-slider {\n        background: dt('toggleswitch.disabled.background');\n    }\n\n    .p-toggleswitch.p-disabled .p-toggleswitch-handle {\n        background: dt('toggleswitch.handle.disabled.background');\n    }\n";

// node_modules/primeng/fesm2022/primeng-toggleswitch.mjs
var _c02 = ["handle"];
var _c12 = ["input"];
var _c22 = (a0) => ({
  checked: a0
});
function ToggleSwitch_Conditional_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ToggleSwitch_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ToggleSwitch_Conditional_4_ng_container_0_Template, 1, 0, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.handleTemplate || ctx_r0._handleTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c22, ctx_r0.checked()));
  }
}
var style3 = (
  /*css*/
  `
    ${style2}

    p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }
`
);
var inlineStyles = {
  root: {
    position: "relative"
  }
};
var classes2 = {
  root: ({
    instance
  }) => ["p-toggleswitch p-component", {
    "p-toggleswitch p-component": true,
    "p-toggleswitch-checked": instance.checked(),
    "p-disabled": instance.$disabled(),
    "p-invalid": instance.invalid()
  }],
  input: "p-toggleswitch-input",
  slider: "p-toggleswitch-slider",
  handle: "p-toggleswitch-handle"
};
var ToggleSwitchStyle = class _ToggleSwitchStyle extends BaseStyle {
  name = "toggleswitch";
  style = style3;
  classes = classes2;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ToggleSwitchStyle_BaseFactory;
    return function ToggleSwitchStyle_Factory(__ngFactoryType__) {
      return (\u0275ToggleSwitchStyle_BaseFactory || (\u0275ToggleSwitchStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ToggleSwitchStyle)))(__ngFactoryType__ || _ToggleSwitchStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ToggleSwitchStyle,
    factory: _ToggleSwitchStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleSwitchStyle, [{
    type: Injectable
  }], null, null);
})();
var ToggleSwitchClasses;
(function(ToggleSwitchClasses2) {
  ToggleSwitchClasses2["root"] = "p-toggleswitch";
  ToggleSwitchClasses2["input"] = "p-toggleswitch-input";
  ToggleSwitchClasses2["slider"] = "p-toggleswitch-slider";
})(ToggleSwitchClasses || (ToggleSwitchClasses = {}));
var TOGGLESWITCH_INSTANCE = new InjectionToken("TOGGLESWITCH_INSTANCE");
var TOGGLESWITCH_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ToggleSwitch),
  multi: true
};
var ToggleSwitch = class _ToggleSwitch extends BaseEditableHolder {
  componentName = "ToggleSwitch";
  $pcToggleSwitch = inject(TOGGLESWITCH_INSTANCE, {
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
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Identifier of the input element.
   * @group Props
   */
  inputId;
  /**
   * When present, it specifies that the component cannot be edited.
   * @group Props
   */
  readonly;
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
   * Used to define a string that autocomplete attribute the current element.
   * @group Props
   */
  ariaLabel;
  /**
   * Specifies the size of the component.
   * @defaultValue undefined
   * @group Props
   */
  size = input(...ngDevMode ? [void 0, {
    debugName: "size"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Callback to invoke when the on value change.
   * @param {ToggleSwitchChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  input;
  /**
   * Custom handle template.
   * @param {ToggleSwitchHandleTemplateContext} context - handle context.
   * @see {@link ToggleSwitchHandleTemplateContext}
   * @group Templates
   */
  handleTemplate;
  _handleTemplate;
  focused = false;
  _componentStyle = inject(ToggleSwitchStyle);
  templates;
  onHostClick(event) {
    this.onClick(event);
  }
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "handle":
          this._handleTemplate = item.template;
          break;
        default:
          this._handleTemplate = item.template;
          break;
      }
    });
  }
  onClick(event) {
    if (!this.$disabled() && !this.readonly) {
      this.writeModelValue(this.checked() ? this.falseValue : this.trueValue);
      this.onModelChange(this.modelValue());
      this.onChange.emit({
        originalEvent: event,
        checked: this.modelValue()
      });
      this.input.nativeElement.focus();
    }
  }
  onFocus() {
    this.focused = true;
  }
  onBlur() {
    this.focused = false;
    this.onModelTouched();
  }
  checked() {
    return this.modelValue() === this.trueValue;
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
  get dataP() {
    return this.cn({
      checked: this.checked(),
      disabled: this.$disabled(),
      invalid: this.invalid()
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ToggleSwitch_BaseFactory;
    return function ToggleSwitch_Factory(__ngFactoryType__) {
      return (\u0275ToggleSwitch_BaseFactory || (\u0275ToggleSwitch_BaseFactory = \u0275\u0275getInheritedFactory(_ToggleSwitch)))(__ngFactoryType__ || _ToggleSwitch);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ToggleSwitch,
    selectors: [["p-toggleswitch"], ["p-toggleSwitch"], ["p-toggle-switch"]],
    contentQueries: function ToggleSwitch_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c02, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.handleTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function ToggleSwitch_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c12, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.input = _t.first);
      }
    },
    hostVars: 7,
    hostBindings: function ToggleSwitch_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function ToggleSwitch_click_HostBindingHandler($event) {
          return ctx.onHostClick($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("data-p-checked", ctx.checked())("data-p-disabled", ctx.$disabled())("data-p", ctx.dataP);
        \u0275\u0275styleMap(ctx.sx("root"));
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      styleClass: "styleClass",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      inputId: "inputId",
      readonly: [2, "readonly", "readonly", booleanAttribute],
      trueValue: "trueValue",
      falseValue: "falseValue",
      ariaLabel: "ariaLabel",
      size: [1, "size"],
      ariaLabelledBy: "ariaLabelledBy",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute]
    },
    outputs: {
      onChange: "onChange"
    },
    features: [\u0275\u0275ProvidersFeature([TOGGLESWITCH_VALUE_ACCESSOR, ToggleSwitchStyle, {
      provide: TOGGLESWITCH_INSTANCE,
      useExisting: _ToggleSwitch
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ToggleSwitch
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 5,
    vars: 22,
    consts: [["input", ""], ["type", "checkbox", "role", "switch", 3, "focus", "blur", "checked", "pAutoFocus", "pBind"], [3, "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function ToggleSwitch_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "input", 1, 0);
        \u0275\u0275listener("focus", function ToggleSwitch_Template_input_focus_0_listener() {
          return ctx.onFocus();
        })("blur", function ToggleSwitch_Template_input_blur_0_listener() {
          return ctx.onBlur();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 2);
        \u0275\u0275conditionalCreate(4, ToggleSwitch_Conditional_4_Template, 1, 4, "ng-container");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("input"));
        \u0275\u0275property("checked", ctx.checked())("pAutoFocus", ctx.autofocus)("pBind", ctx.ptm("input"));
        \u0275\u0275attribute("id", ctx.inputId)("required", ctx.required() ? "" : void 0)("disabled", ctx.$disabled() ? "" : void 0)("aria-checked", ctx.checked())("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("name", ctx.name())("tabindex", ctx.tabindex);
        \u0275\u0275advance(2);
        \u0275\u0275classMap(ctx.cx("slider"));
        \u0275\u0275property("pBind", ctx.ptm("slider"));
        \u0275\u0275attribute("data-p", ctx.dataP);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("handle"));
        \u0275\u0275property("pBind", ctx.ptm("handle"));
        \u0275\u0275attribute("data-p", ctx.dataP);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.handleTemplate || ctx._handleTemplate ? 4 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet, AutoFocus, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleSwitch, [{
    type: Component,
    args: [{
      selector: "p-toggleswitch, p-toggleSwitch, p-toggle-switch",
      standalone: true,
      imports: [CommonModule, AutoFocus, SharedModule, BindModule],
      template: `
        <input
            #input
            [attr.id]="inputId"
            type="checkbox"
            role="switch"
            [class]="cx('input')"
            [checked]="checked()"
            [attr.required]="required() ? '' : undefined"
            [attr.disabled]="$disabled() ? '' : undefined"
            [attr.aria-checked]="checked()"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-label]="ariaLabel"
            [attr.name]="name()"
            [attr.tabindex]="tabindex"
            (focus)="onFocus()"
            (blur)="onBlur()"
            [pAutoFocus]="autofocus"
            [pBind]="ptm('input')"
        />
        <div [class]="cx('slider')" [pBind]="ptm('slider')" [attr.data-p]="dataP">
            <div [class]="cx('handle')" [pBind]="ptm('handle')" [attr.data-p]="dataP">
                @if (handleTemplate || _handleTemplate) {
                    <ng-container *ngTemplateOutlet="handleTemplate || _handleTemplate; context: { checked: checked() }" />
                }
            </div>
        </div>
    `,
      providers: [TOGGLESWITCH_VALUE_ACCESSOR, ToggleSwitchStyle, {
        provide: TOGGLESWITCH_INSTANCE,
        useExisting: ToggleSwitch
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ToggleSwitch
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[style]": "sx('root')",
        "[attr.data-p-checked]": "checked()",
        "[attr.data-p-disabled]": "$disabled()",
        "[attr.data-p]": "dataP"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    styleClass: [{
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
    readonly: [{
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
    ariaLabel: [{
      type: Input
    }],
    size: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "size",
        required: false
      }]
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onChange: [{
      type: Output
    }],
    input: [{
      type: ViewChild,
      args: ["input"]
    }],
    handleTemplate: [{
      type: ContentChild,
      args: ["handle", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    onHostClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var ToggleSwitchModule = class _ToggleSwitchModule {
  static \u0275fac = function ToggleSwitchModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToggleSwitchModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ToggleSwitchModule,
    imports: [ToggleSwitch, SharedModule],
    exports: [ToggleSwitch, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ToggleSwitch, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleSwitchModule, [{
    type: NgModule,
    args: [{
      imports: [ToggleSwitch, SharedModule],
      exports: [ToggleSwitch, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/progressbar/index.mjs
var style4 = "\n    .p-progressbar {\n        display: block;\n        position: relative;\n        overflow: hidden;\n        height: dt('progressbar.height');\n        background: dt('progressbar.background');\n        border-radius: dt('progressbar.border.radius');\n    }\n\n    .p-progressbar-value {\n        margin: 0;\n        background: dt('progressbar.value.background');\n    }\n\n    .p-progressbar-label {\n        color: dt('progressbar.label.color');\n        font-size: dt('progressbar.label.font.size');\n        font-weight: dt('progressbar.label.font.weight');\n    }\n\n    .p-progressbar-determinate .p-progressbar-value {\n        height: 100%;\n        width: 0%;\n        position: absolute;\n        display: none;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        transition: width 1s ease-in-out;\n    }\n\n    .p-progressbar-determinate .p-progressbar-label {\n        display: inline-flex;\n    }\n\n    .p-progressbar-indeterminate .p-progressbar-value::before {\n        content: '';\n        position: absolute;\n        background: inherit;\n        inset-block-start: 0;\n        inset-inline-start: 0;\n        inset-block-end: 0;\n        will-change: inset-inline-start, inset-inline-end;\n        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    }\n\n    .p-progressbar-indeterminate .p-progressbar-value::after {\n        content: '';\n        position: absolute;\n        background: inherit;\n        inset-block-start: 0;\n        inset-inline-start: 0;\n        inset-block-end: 0;\n        will-change: inset-inline-start, inset-inline-end;\n        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n        animation-delay: 1.15s;\n    }\n\n    @keyframes p-progressbar-indeterminate-anim {\n        0% {\n            inset-inline-start: -35%;\n            inset-inline-end: 100%;\n        }\n        60% {\n            inset-inline-start: 100%;\n            inset-inline-end: -90%;\n        }\n        100% {\n            inset-inline-start: 100%;\n            inset-inline-end: -90%;\n        }\n    }\n    @-webkit-keyframes p-progressbar-indeterminate-anim {\n        0% {\n            inset-inline-start: -35%;\n            inset-inline-end: 100%;\n        }\n        60% {\n            inset-inline-start: 100%;\n            inset-inline-end: -90%;\n        }\n        100% {\n            inset-inline-start: 100%;\n            inset-inline-end: -90%;\n        }\n    }\n\n    @keyframes p-progressbar-indeterminate-anim-short {\n        0% {\n            inset-inline-start: -200%;\n            inset-inline-end: 100%;\n        }\n        60% {\n            inset-inline-start: 107%;\n            inset-inline-end: -8%;\n        }\n        100% {\n            inset-inline-start: 107%;\n            inset-inline-end: -8%;\n        }\n    }\n    @-webkit-keyframes p-progressbar-indeterminate-anim-short {\n        0% {\n            inset-inline-start: -200%;\n            inset-inline-end: 100%;\n        }\n        60% {\n            inset-inline-start: 107%;\n            inset-inline-end: -8%;\n        }\n        100% {\n            inset-inline-start: 107%;\n            inset-inline-end: -8%;\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-progressbar.mjs
var _c03 = ["content"];
var _c13 = (a0) => ({
  $implicit: a0
});
function ProgressBar_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("display", ctx_r0.value != null && ctx_r0.value !== 0 ? "flex" : "none");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r0.value, "", ctx_r0.unit);
  }
}
function ProgressBar_div_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ProgressBar_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 2);
    \u0275\u0275template(2, ProgressBar_div_0_div_2_Template, 2, 4, "div", 3)(3, ProgressBar_div_0_ng_container_3_Template, 1, 0, "ng-container", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("value"), ctx_r0.valueStyleClass));
    \u0275\u0275styleProp("width", ctx_r0.value + "%")("display", "flex")("background", ctx_r0.color);
    \u0275\u0275property("pBind", ctx_r0.ptm("value"));
    \u0275\u0275attribute("data-p", ctx_r0.dataP);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.cx("label"));
    \u0275\u0275property("pBind", ctx_r0.ptm("label"));
    \u0275\u0275attribute("data-p", ctx_r0.dataP);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showValue && !ctx_r0.contentTemplate && !ctx_r0._contentTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.contentTemplate || ctx_r0._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(17, _c13, ctx_r0.value));
  }
}
function ProgressBar_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("value"), ctx_r0.valueStyleClass));
    \u0275\u0275styleProp("background", ctx_r0.color);
    \u0275\u0275property("pBind", ctx_r0.ptm("value"));
    \u0275\u0275attribute("data-p", ctx_r0.dataP);
  }
}
var classes3 = {
  root: ({
    instance
  }) => ["p-progressbar p-component", {
    "p-progressbar-determinate": instance.mode == "determinate",
    "p-progressbar-indeterminate": instance.mode == "indeterminate"
  }],
  value: "p-progressbar-value",
  label: "p-progressbar-label"
};
var ProgressBarStyle = class _ProgressBarStyle extends BaseStyle {
  name = "progressbar";
  style = style4;
  classes = classes3;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ProgressBarStyle_BaseFactory;
    return function ProgressBarStyle_Factory(__ngFactoryType__) {
      return (\u0275ProgressBarStyle_BaseFactory || (\u0275ProgressBarStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ProgressBarStyle)))(__ngFactoryType__ || _ProgressBarStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ProgressBarStyle,
    factory: _ProgressBarStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarStyle, [{
    type: Injectable
  }], null, null);
})();
var ProgressBarClasses;
(function(ProgressBarClasses2) {
  ProgressBarClasses2["root"] = "p-progressbar";
  ProgressBarClasses2["value"] = "p-progressbar-value";
  ProgressBarClasses2["label"] = "p-progressbar-label";
})(ProgressBarClasses || (ProgressBarClasses = {}));
var PROGRESSBAR_INSTANCE = new InjectionToken("PROGRESSBAR_INSTANCE");
var ProgressBar = class _ProgressBar extends BaseComponent {
  componentName = "ProgressBar";
  $pcProgressBar = inject(PROGRESSBAR_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  /**
   * Current value of the progress.
   * @group Props
   */
  value;
  /**
   * Whether to display the progress bar value.
   * @group Props
   */
  showValue = true;
  /**
   * Style class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the value element.
   * @group Props
   */
  valueStyleClass;
  /**
   * Unit sign appended to the value.
   * @group Props
   */
  unit = "%";
  /**
   * Defines the mode of the progress
   * @defaultValue 'determinate'
   * @group Props
   */
  mode = "determinate";
  /**
   * Color for the background of the progress.
   * @group Props
   */
  color;
  /**
   * Template of the content.
   * @param {ProgressBarContentTemplateContext} context - content context.
   * @see {@link ProgressBarContentTemplateContext}
   * @group Templates
   */
  contentTemplate;
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  _componentStyle = inject(ProgressBarStyle);
  templates;
  _contentTemplate;
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
      }
    });
  }
  get dataP() {
    return this.cn({
      determinate: this.mode === "determinate",
      indeterminate: this.mode === "indeterminate"
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ProgressBar_BaseFactory;
    return function ProgressBar_Factory(__ngFactoryType__) {
      return (\u0275ProgressBar_BaseFactory || (\u0275ProgressBar_BaseFactory = \u0275\u0275getInheritedFactory(_ProgressBar)))(__ngFactoryType__ || _ProgressBar);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ProgressBar,
    selectors: [["p-progressBar"], ["p-progressbar"], ["p-progress-bar"]],
    contentQueries: function ProgressBar_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c03, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostAttrs: ["role", "progressbar"],
    hostVars: 7,
    hostBindings: function ProgressBar_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-valuemin", 0)("aria-valuenow", ctx.value)("aria-valuemax", 100)("aria-level", ctx.value + ctx.unit)("data-p", ctx.dataP);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      value: [2, "value", "value", numberAttribute],
      showValue: [2, "showValue", "showValue", booleanAttribute],
      styleClass: "styleClass",
      valueStyleClass: "valueStyleClass",
      unit: "unit",
      mode: "mode",
      color: "color"
    },
    features: [\u0275\u0275ProvidersFeature([ProgressBarStyle, {
      provide: PROGRESSBAR_INSTANCE,
      useExisting: _ProgressBar
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ProgressBar
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 2,
    consts: [[3, "class", "pBind", "width", "display", "background", 4, "ngIf"], [3, "class", "pBind", "background", 4, "ngIf"], [3, "pBind"], [3, "display", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function ProgressBar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ProgressBar_div_0_Template, 4, 19, "div", 0)(1, ProgressBar_div_1_Template, 1, 6, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.mode === "determinate");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mode === "indeterminate");
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, SharedModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBar, [{
    type: Component,
    args: [{
      selector: "p-progressBar, p-progressbar, p-progress-bar",
      standalone: true,
      imports: [CommonModule, SharedModule, Bind],
      template: `
        <div *ngIf="mode === 'determinate'" [class]="cn(cx('value'), valueStyleClass)" [pBind]="ptm('value')" [style.width]="value + '%'" [style.display]="'flex'" [style.background]="color" [attr.data-p]="dataP">
            <div [class]="cx('label')" [pBind]="ptm('label')" [attr.data-p]="dataP">
                <div *ngIf="showValue && !contentTemplate && !_contentTemplate" [style.display]="value != null && value !== 0 ? 'flex' : 'none'">{{ value }}{{ unit }}</div>
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: value }"></ng-container>
            </div>
        </div>
        <div *ngIf="mode === 'indeterminate'" [class]="cn(cx('value'), valueStyleClass)" [pBind]="ptm('value')" [style.background]="color" [attr.data-p]="dataP"></div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ProgressBarStyle, {
        provide: PROGRESSBAR_INSTANCE,
        useExisting: ProgressBar
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ProgressBar
      }],
      host: {
        role: "progressbar",
        "[attr.aria-valuemin]": "0",
        "[attr.aria-valuenow]": "value",
        "[attr.aria-valuemax]": "100",
        "[attr.aria-level]": "value + unit",
        "[class]": "cn(cx('root'), styleClass)",
        "[attr.data-p]": "dataP"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    showValue: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    styleClass: [{
      type: Input
    }],
    valueStyleClass: [{
      type: Input
    }],
    unit: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    color: [{
      type: Input
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
var ProgressBarModule = class _ProgressBarModule {
  static \u0275fac = function ProgressBarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressBarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ProgressBarModule,
    imports: [ProgressBar, SharedModule],
    exports: [ProgressBar, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ProgressBar, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarModule, [{
    type: NgModule,
    args: [{
      imports: [ProgressBar, SharedModule],
      exports: [ProgressBar, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/_style-loader-chunk.mjs
var appsWithLoaders = /* @__PURE__ */ new WeakMap();
var _CdkPrivateStyleLoader = class __CdkPrivateStyleLoader {
  _appRef;
  _injector = inject(Injector);
  _environmentInjector = inject(EnvironmentInjector);
  load(loader) {
    const appRef = this._appRef = this._appRef || this._injector.get(ApplicationRef);
    let data = appsWithLoaders.get(appRef);
    if (!data) {
      data = {
        loaders: /* @__PURE__ */ new Set(),
        refs: []
      };
      appsWithLoaders.set(appRef, data);
      appRef.onDestroy(() => {
        appsWithLoaders.get(appRef)?.refs.forEach((ref) => ref.destroy());
        appsWithLoaders.delete(appRef);
      });
    }
    if (!data.loaders.has(loader)) {
      data.loaders.add(loader);
      data.refs.push(createComponent(loader, {
        environmentInjector: this._environmentInjector
      }));
    }
  }
  static \u0275fac = function _CdkPrivateStyleLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __CdkPrivateStyleLoader)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: __CdkPrivateStyleLoader,
    factory: __CdkPrivateStyleLoader.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_CdkPrivateStyleLoader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/_shadow-dom-chunk.mjs
var shadowDomIsSupported;
function _supportsShadowDom() {
  if (shadowDomIsSupported == null) {
    const head = typeof document !== "undefined" ? document.head : null;
    shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
  }
  return shadowDomIsSupported;
}
function _getShadowRoot(element) {
  if (_supportsShadowDom()) {
    const rootNode = element.getRootNode ? element.getRootNode() : null;
    if (typeof ShadowRoot !== "undefined" && ShadowRoot && rootNode instanceof ShadowRoot) {
      return rootNode;
    }
  }
  return null;
}
function _getEventTarget(event) {
  return event.composedPath ? event.composedPath()[0] : event.target;
}

// node_modules/@angular/cdk/fesm2022/_fake-event-detection-chunk.mjs
function isFakeMousedownFromScreenReader(event) {
  return event.buttons === 0 || event.detail === 0;
}
function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0];
  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}

// node_modules/@angular/cdk/fesm2022/_element-chunk.mjs
function coerceNumberProperty(value, fallbackValue = 0) {
  if (_isNumberValue(value)) {
    return Number(value);
  }
  return arguments.length === 2 ? fallbackValue : 0;
}
function _isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

// node_modules/@angular/cdk/fesm2022/_platform-chunk.mjs
var hasV8BreakIterator;
try {
  hasV8BreakIterator = typeof Intl !== "undefined" && Intl.v8BreakIterator;
} catch {
  hasV8BreakIterator = false;
}
var Platform = class _Platform {
  _platformId = inject(PLATFORM_ID);
  isBrowser = this._platformId ? isPlatformBrowser(this._platformId) : typeof document === "object" && !!document;
  EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
  TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
  BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== "undefined" && !this.EDGE && !this.TRIDENT;
  WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
  IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
  FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
  ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
  SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
  constructor() {
  }
  static \u0275fac = function Platform_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Platform)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Platform,
    factory: _Platform.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Platform, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@angular/cdk/fesm2022/_directionality-chunk.mjs
var DIR_DOCUMENT = new InjectionToken("cdk-dir-doc", {
  providedIn: "root",
  factory: () => inject(DOCUMENT)
});
var RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || "";
  if (value === "auto" && typeof navigator !== "undefined" && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? "rtl" : "ltr";
  }
  return value === "rtl" ? "rtl" : "ltr";
}
var Directionality = class _Directionality {
  get value() {
    return this.valueSignal();
  }
  valueSignal = signal("ltr", ...ngDevMode ? [{
    debugName: "valueSignal"
  }] : []);
  change = new EventEmitter();
  constructor() {
    const _document = inject(DIR_DOCUMENT, {
      optional: true
    });
    if (_document) {
      const bodyDir = _document.body ? _document.body.dir : null;
      const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
      this.valueSignal.set(_resolveDirectionality(bodyDir || htmlDir || "ltr"));
    }
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static \u0275fac = function Directionality_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Directionality)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Directionality,
    factory: _Directionality.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Directionality, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@angular/cdk/fesm2022/_scrolling-chunk.mjs
var RtlScrollAxisType;
(function(RtlScrollAxisType2) {
  RtlScrollAxisType2[RtlScrollAxisType2["NORMAL"] = 0] = "NORMAL";
  RtlScrollAxisType2[RtlScrollAxisType2["NEGATED"] = 1] = "NEGATED";
  RtlScrollAxisType2[RtlScrollAxisType2["INVERTED"] = 2] = "INVERTED";
})(RtlScrollAxisType || (RtlScrollAxisType = {}));
var rtlScrollAxisType;
var scrollBehaviorSupported;
function supportsScrollBehavior() {
  if (scrollBehaviorSupported == null) {
    if (typeof document !== "object" || !document || typeof Element !== "function" || !Element) {
      scrollBehaviorSupported = false;
      return scrollBehaviorSupported;
    }
    if (document.documentElement?.style && "scrollBehavior" in document.documentElement.style) {
      scrollBehaviorSupported = true;
    } else {
      const scrollToFunction = Element.prototype.scrollTo;
      if (scrollToFunction) {
        scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
      } else {
        scrollBehaviorSupported = false;
      }
    }
  }
  return scrollBehaviorSupported;
}
function getRtlScrollAxisType() {
  if (typeof document !== "object" || !document) {
    return RtlScrollAxisType.NORMAL;
  }
  if (rtlScrollAxisType == null) {
    const scrollContainer = document.createElement("div");
    const containerStyle = scrollContainer.style;
    scrollContainer.dir = "rtl";
    containerStyle.width = "1px";
    containerStyle.overflow = "auto";
    containerStyle.visibility = "hidden";
    containerStyle.pointerEvents = "none";
    containerStyle.position = "absolute";
    const content = document.createElement("div");
    const contentStyle = content.style;
    contentStyle.width = "2px";
    contentStyle.height = "1px";
    scrollContainer.appendChild(content);
    document.body.appendChild(scrollContainer);
    rtlScrollAxisType = RtlScrollAxisType.NORMAL;
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
    }
    scrollContainer.remove();
  }
  return rtlScrollAxisType;
}

// node_modules/@angular/cdk/fesm2022/_data-source-chunk.mjs
var DataSource = class {
};
function isDataSource(value) {
  return value && typeof value.connect === "function" && !(value instanceof ConnectableObservable);
}

// node_modules/@angular/cdk/fesm2022/_recycle-view-repeater-strategy-chunk.mjs
var ArrayDataSource = class extends DataSource {
  _data;
  constructor(_data) {
    super();
    this._data = _data;
  }
  connect() {
    return isObservable(this._data) ? this._data : of(this._data);
  }
  disconnect() {
  }
};
var _ViewRepeaterOperation;
(function(_ViewRepeaterOperation2) {
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["REPLACED"] = 0] = "REPLACED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["INSERTED"] = 1] = "INSERTED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["MOVED"] = 2] = "MOVED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["REMOVED"] = 3] = "REMOVED";
})(_ViewRepeaterOperation || (_ViewRepeaterOperation = {}));
var _RecycleViewRepeaterStrategy = class {
  viewCacheSize = 20;
  _viewCache = [];
  applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
    changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
      let view;
      let operation;
      if (record.previousIndex == null) {
        const viewArgsFactory = () => itemContextFactory(record, adjustedPreviousIndex, currentIndex);
        view = this._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = view ? _ViewRepeaterOperation.INSERTED : _ViewRepeaterOperation.REPLACED;
      } else if (currentIndex == null) {
        this._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);
        operation = _ViewRepeaterOperation.REMOVED;
      } else {
        view = this._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = _ViewRepeaterOperation.MOVED;
      }
      if (itemViewChanged) {
        itemViewChanged({
          context: view?.context,
          operation,
          record
        });
      }
    });
  }
  detach() {
    for (const view of this._viewCache) {
      view.destroy();
    }
    this._viewCache = [];
  }
  _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
    const cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);
    if (cachedView) {
      cachedView.context.$implicit = value;
      return void 0;
    }
    const viewArgs = viewArgsFactory();
    return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
  }
  _detachAndCacheView(index, viewContainerRef) {
    const detachedView = viewContainerRef.detach(index);
    this._maybeCacheView(detachedView, viewContainerRef);
  }
  _moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
    const view = viewContainerRef.get(adjustedPreviousIndex);
    viewContainerRef.move(view, currentIndex);
    view.context.$implicit = value;
    return view;
  }
  _maybeCacheView(view, viewContainerRef) {
    if (this._viewCache.length < this.viewCacheSize) {
      this._viewCache.push(view);
    } else {
      const index = viewContainerRef.indexOf(view);
      if (index === -1) {
        view.destroy();
      } else {
        viewContainerRef.remove(index);
      }
    }
  }
  _insertViewFromCache(index, viewContainerRef) {
    const cachedView = this._viewCache.pop();
    if (cachedView) {
      viewContainerRef.insert(cachedView, index);
    }
    return cachedView || null;
  }
};

// node_modules/@angular/cdk/fesm2022/bidi.mjs
var Dir = class _Dir {
  _isInitialized = false;
  _rawDir = "";
  change = new EventEmitter();
  get dir() {
    return this.valueSignal();
  }
  set dir(value) {
    const previousValue = this.valueSignal();
    this.valueSignal.set(_resolveDirectionality(value));
    this._rawDir = value;
    if (previousValue !== this.valueSignal() && this._isInitialized) {
      this.change.emit(this.valueSignal());
    }
  }
  get value() {
    return this.dir;
  }
  valueSignal = signal("ltr", ...ngDevMode ? [{
    debugName: "valueSignal"
  }] : []);
  ngAfterContentInit() {
    this._isInitialized = true;
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static \u0275fac = function Dir_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dir)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _Dir,
    selectors: [["", "dir", ""]],
    hostVars: 1,
    hostBindings: function Dir_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("dir", ctx._rawDir);
      }
    },
    inputs: {
      dir: "dir"
    },
    outputs: {
      change: "dirChange"
    },
    exportAs: ["dir"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: Directionality,
      useExisting: _Dir
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dir, [{
    type: Directive,
    args: [{
      selector: "[dir]",
      providers: [{
        provide: Directionality,
        useExisting: Dir
      }],
      host: {
        "[attr.dir]": "_rawDir"
      },
      exportAs: "dir"
    }]
  }], null, {
    change: [{
      type: Output,
      args: ["dirChange"]
    }],
    dir: [{
      type: Input
    }]
  });
})();
var BidiModule = class _BidiModule {
  static \u0275fac = function BidiModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BidiModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BidiModule,
    imports: [Dir],
    exports: [Dir]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BidiModule, [{
    type: NgModule,
    args: [{
      imports: [Dir],
      exports: [Dir]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/scrolling.mjs
var _c04 = ["contentWrapper"];
var _c14 = ["*"];
var VIRTUAL_SCROLL_STRATEGY = new InjectionToken("VIRTUAL_SCROLL_STRATEGY");
var FixedSizeVirtualScrollStrategy = class {
  _scrolledIndexChange = new Subject();
  scrolledIndexChange = this._scrolledIndexChange.pipe(distinctUntilChanged());
  _viewport = null;
  _itemSize;
  _minBufferPx;
  _maxBufferPx;
  constructor(itemSize, minBufferPx, maxBufferPx) {
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
  }
  attach(viewport) {
    this._viewport = viewport;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  detach() {
    this._scrolledIndexChange.complete();
    this._viewport = null;
  }
  updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
    if (maxBufferPx < minBufferPx && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx");
    }
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  onContentScrolled() {
    this._updateRenderedRange();
  }
  onDataLengthChanged() {
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  onContentRendered() {
  }
  onRenderedOffsetChanged() {
  }
  scrollToIndex(index, behavior) {
    if (this._viewport) {
      this._viewport.scrollToOffset(index * this._itemSize, behavior);
    }
  }
  _updateTotalContentSize() {
    if (!this._viewport) {
      return;
    }
    this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
  }
  _updateRenderedRange() {
    if (!this._viewport) {
      return;
    }
    const renderedRange = this._viewport.getRenderedRange();
    const newRange = {
      start: renderedRange.start,
      end: renderedRange.end
    };
    const viewportSize = this._viewport.getViewportSize();
    const dataLength = this._viewport.getDataLength();
    let scrollOffset = this._viewport.measureScrollOffset();
    let firstVisibleIndex = this._itemSize > 0 ? scrollOffset / this._itemSize : 0;
    if (newRange.end > dataLength) {
      const maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
      const newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems));
      if (firstVisibleIndex != newVisibleIndex) {
        firstVisibleIndex = newVisibleIndex;
        scrollOffset = newVisibleIndex * this._itemSize;
        newRange.start = Math.floor(firstVisibleIndex);
      }
      newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
    }
    const startBuffer = scrollOffset - newRange.start * this._itemSize;
    if (startBuffer < this._minBufferPx && newRange.start != 0) {
      const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
      newRange.start = Math.max(0, newRange.start - expandStart);
      newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
    } else {
      const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
      if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
        const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
        if (expandEnd > 0) {
          newRange.end = Math.min(dataLength, newRange.end + expandEnd);
          newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
        }
      }
    }
    this._viewport.setRenderedRange(newRange);
    this._viewport.setRenderedContentOffset(Math.round(this._itemSize * newRange.start));
    this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
  }
};
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
  return fixedSizeDir._scrollStrategy;
}
var CdkFixedSizeVirtualScroll = class _CdkFixedSizeVirtualScroll {
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(value) {
    this._itemSize = coerceNumberProperty(value);
  }
  _itemSize = 20;
  get minBufferPx() {
    return this._minBufferPx;
  }
  set minBufferPx(value) {
    this._minBufferPx = coerceNumberProperty(value);
  }
  _minBufferPx = 100;
  get maxBufferPx() {
    return this._maxBufferPx;
  }
  set maxBufferPx(value) {
    this._maxBufferPx = coerceNumberProperty(value);
  }
  _maxBufferPx = 200;
  _scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
  ngOnChanges() {
    this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
  }
  static \u0275fac = function CdkFixedSizeVirtualScroll_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkFixedSizeVirtualScroll)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkFixedSizeVirtualScroll,
    selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
    inputs: {
      itemSize: "itemSize",
      minBufferPx: "minBufferPx",
      maxBufferPx: "maxBufferPx"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: VIRTUAL_SCROLL_STRATEGY,
      useFactory: _fixedSizeVirtualScrollStrategyFactory,
      deps: [forwardRef(() => _CdkFixedSizeVirtualScroll)]
    }]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFixedSizeVirtualScroll, [{
    type: Directive,
    args: [{
      selector: "cdk-virtual-scroll-viewport[itemSize]",
      providers: [{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [forwardRef(() => CdkFixedSizeVirtualScroll)]
      }]
    }]
  }], null, {
    itemSize: [{
      type: Input
    }],
    minBufferPx: [{
      type: Input
    }],
    maxBufferPx: [{
      type: Input
    }]
  });
})();
var DEFAULT_SCROLL_TIME = 20;
var ScrollDispatcher = class _ScrollDispatcher {
  _ngZone = inject(NgZone);
  _platform = inject(Platform);
  _renderer = inject(RendererFactory2).createRenderer(null, null);
  _cleanupGlobalListener;
  constructor() {
  }
  _scrolled = new Subject();
  _scrolledCount = 0;
  scrollContainers = /* @__PURE__ */ new Map();
  register(scrollable) {
    if (!this.scrollContainers.has(scrollable)) {
      this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(() => this._scrolled.next(scrollable)));
    }
  }
  deregister(scrollable) {
    const scrollableReference = this.scrollContainers.get(scrollable);
    if (scrollableReference) {
      scrollableReference.unsubscribe();
      this.scrollContainers.delete(scrollable);
    }
  }
  scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
    if (!this._platform.isBrowser) {
      return of();
    }
    return new Observable((observer) => {
      if (!this._cleanupGlobalListener) {
        this._cleanupGlobalListener = this._ngZone.runOutsideAngular(() => this._renderer.listen("document", "scroll", () => this._scrolled.next()));
      }
      const subscription = auditTimeInMs > 0 ? this._scrolled.pipe(auditTime(auditTimeInMs)).subscribe(observer) : this._scrolled.subscribe(observer);
      this._scrolledCount++;
      return () => {
        subscription.unsubscribe();
        this._scrolledCount--;
        if (!this._scrolledCount) {
          this._cleanupGlobalListener?.();
          this._cleanupGlobalListener = void 0;
        }
      };
    });
  }
  ngOnDestroy() {
    this._cleanupGlobalListener?.();
    this._cleanupGlobalListener = void 0;
    this.scrollContainers.forEach((_, container) => this.deregister(container));
    this._scrolled.complete();
  }
  ancestorScrolled(elementOrElementRef, auditTimeInMs) {
    const ancestors = this.getAncestorScrollContainers(elementOrElementRef);
    return this.scrolled(auditTimeInMs).pipe(filter((target) => !target || ancestors.indexOf(target) > -1));
  }
  getAncestorScrollContainers(elementOrElementRef) {
    const scrollingContainers = [];
    this.scrollContainers.forEach((_subscription, scrollable) => {
      if (this._scrollableContainsElement(scrollable, elementOrElementRef)) {
        scrollingContainers.push(scrollable);
      }
    });
    return scrollingContainers;
  }
  _scrollableContainsElement(scrollable, elementOrElementRef) {
    let element = coerceElement(elementOrElementRef);
    let scrollableElement = scrollable.getElementRef().nativeElement;
    do {
      if (element == scrollableElement) {
        return true;
      }
    } while (element = element.parentElement);
    return false;
  }
  static \u0275fac = function ScrollDispatcher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollDispatcher)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ScrollDispatcher,
    factory: _ScrollDispatcher.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CdkScrollable = class _CdkScrollable {
  elementRef = inject(ElementRef);
  scrollDispatcher = inject(ScrollDispatcher);
  ngZone = inject(NgZone);
  dir = inject(Directionality, {
    optional: true
  });
  _scrollElement = this.elementRef.nativeElement;
  _destroyed = new Subject();
  _renderer = inject(Renderer2);
  _cleanupScroll;
  _elementScrolled = new Subject();
  constructor() {
  }
  ngOnInit() {
    this._cleanupScroll = this.ngZone.runOutsideAngular(() => this._renderer.listen(this._scrollElement, "scroll", (event) => this._elementScrolled.next(event)));
    this.scrollDispatcher.register(this);
  }
  ngOnDestroy() {
    this._cleanupScroll?.();
    this._elementScrolled.complete();
    this.scrollDispatcher.deregister(this);
    this._destroyed.next();
    this._destroyed.complete();
  }
  elementScrolled() {
    return this._elementScrolled;
  }
  getElementRef() {
    return this.elementRef;
  }
  scrollTo(options) {
    const el = this.elementRef.nativeElement;
    const isRtl = this.dir && this.dir.value == "rtl";
    if (options.left == null) {
      options.left = isRtl ? options.end : options.start;
    }
    if (options.right == null) {
      options.right = isRtl ? options.start : options.end;
    }
    if (options.bottom != null) {
      options.top = el.scrollHeight - el.clientHeight - options.bottom;
    }
    if (isRtl && getRtlScrollAxisType() != RtlScrollAxisType.NORMAL) {
      if (options.left != null) {
        options.right = el.scrollWidth - el.clientWidth - options.left;
      }
      if (getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
        options.left = options.right;
      } else if (getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
        options.left = options.right ? -options.right : options.right;
      }
    } else {
      if (options.right != null) {
        options.left = el.scrollWidth - el.clientWidth - options.right;
      }
    }
    this._applyScrollToOptions(options);
  }
  _applyScrollToOptions(options) {
    const el = this.elementRef.nativeElement;
    if (supportsScrollBehavior()) {
      el.scrollTo(options);
    } else {
      if (options.top != null) {
        el.scrollTop = options.top;
      }
      if (options.left != null) {
        el.scrollLeft = options.left;
      }
    }
  }
  measureScrollOffset(from) {
    const LEFT = "left";
    const RIGHT = "right";
    const el = this.elementRef.nativeElement;
    if (from == "top") {
      return el.scrollTop;
    }
    if (from == "bottom") {
      return el.scrollHeight - el.clientHeight - el.scrollTop;
    }
    const isRtl = this.dir && this.dir.value == "rtl";
    if (from == "start") {
      from = isRtl ? RIGHT : LEFT;
    } else if (from == "end") {
      from = isRtl ? LEFT : RIGHT;
    }
    if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
      if (from == LEFT) {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      } else {
        return el.scrollLeft;
      }
    } else if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
      if (from == LEFT) {
        return el.scrollLeft + el.scrollWidth - el.clientWidth;
      } else {
        return -el.scrollLeft;
      }
    } else {
      if (from == LEFT) {
        return el.scrollLeft;
      } else {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      }
    }
  }
  static \u0275fac = function CdkScrollable_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkScrollable)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkScrollable,
    selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollable, [{
    type: Directive,
    args: [{
      selector: "[cdk-scrollable], [cdkScrollable]"
    }]
  }], () => [], null);
})();
var DEFAULT_RESIZE_TIME = 20;
var ViewportRuler = class _ViewportRuler {
  _platform = inject(Platform);
  _listeners;
  _viewportSize = null;
  _change = new Subject();
  _document = inject(DOCUMENT);
  constructor() {
    const ngZone = inject(NgZone);
    const renderer = inject(RendererFactory2).createRenderer(null, null);
    ngZone.runOutsideAngular(() => {
      if (this._platform.isBrowser) {
        const changeListener = (event) => this._change.next(event);
        this._listeners = [renderer.listen("window", "resize", changeListener), renderer.listen("window", "orientationchange", changeListener)];
      }
      this.change().subscribe(() => this._viewportSize = null);
    });
  }
  ngOnDestroy() {
    this._listeners?.forEach((cleanup) => cleanup());
    this._change.complete();
  }
  getViewportSize() {
    if (!this._viewportSize) {
      this._updateViewportSize();
    }
    const output = {
      width: this._viewportSize.width,
      height: this._viewportSize.height
    };
    if (!this._platform.isBrowser) {
      this._viewportSize = null;
    }
    return output;
  }
  getViewportRect() {
    const scrollPosition = this.getViewportScrollPosition();
    const {
      width,
      height
    } = this.getViewportSize();
    return {
      top: scrollPosition.top,
      left: scrollPosition.left,
      bottom: scrollPosition.top + height,
      right: scrollPosition.left + width,
      height,
      width
    };
  }
  getViewportScrollPosition() {
    if (!this._platform.isBrowser) {
      return {
        top: 0,
        left: 0
      };
    }
    const document2 = this._document;
    const window2 = this._getWindow();
    const documentElement = document2.documentElement;
    const documentRect = documentElement.getBoundingClientRect();
    const top = -documentRect.top || document2.body?.scrollTop || window2.scrollY || documentElement.scrollTop || 0;
    const left = -documentRect.left || document2.body?.scrollLeft || window2.scrollX || documentElement.scrollLeft || 0;
    return {
      top,
      left
    };
  }
  change(throttleTime = DEFAULT_RESIZE_TIME) {
    return throttleTime > 0 ? this._change.pipe(auditTime(throttleTime)) : this._change;
  }
  _getWindow() {
    return this._document.defaultView || window;
  }
  _updateViewportSize() {
    const window2 = this._getWindow();
    this._viewportSize = this._platform.isBrowser ? {
      width: window2.innerWidth,
      height: window2.innerHeight
    } : {
      width: 0,
      height: 0
    };
  }
  static \u0275fac = function ViewportRuler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewportRuler)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ViewportRuler,
    factory: _ViewportRuler.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewportRuler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var VIRTUAL_SCROLLABLE = new InjectionToken("VIRTUAL_SCROLLABLE");
var CdkVirtualScrollable = class _CdkVirtualScrollable extends CdkScrollable {
  constructor() {
    super();
  }
  measureViewportSize(orientation) {
    const viewportEl = this.elementRef.nativeElement;
    return orientation === "horizontal" ? viewportEl.clientWidth : viewportEl.clientHeight;
  }
  static \u0275fac = function CdkVirtualScrollable_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualScrollable)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkVirtualScrollable,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollable, [{
    type: Directive
  }], () => [], null);
})();
function rangesEqual(r1, r2) {
  return r1.start == r2.start && r1.end == r2.end;
}
var SCROLL_SCHEDULER = typeof requestAnimationFrame !== "undefined" ? animationFrameScheduler : asapScheduler;
var CDK_VIRTUAL_SCROLL_VIEWPORT = new InjectionToken("CDK_VIRTUAL_SCROLL_VIEWPORT");
var CdkVirtualScrollViewport = class _CdkVirtualScrollViewport extends CdkVirtualScrollable {
  elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _scrollStrategy = inject(VIRTUAL_SCROLL_STRATEGY, {
    optional: true
  });
  scrollable = inject(VIRTUAL_SCROLLABLE, {
    optional: true
  });
  _platform = inject(Platform);
  _detachedSubject = new Subject();
  _renderedRangeSubject = new Subject();
  _renderedContentOffsetSubject = new Subject();
  get orientation() {
    return this._orientation;
  }
  set orientation(orientation) {
    if (this._orientation !== orientation) {
      this._orientation = orientation;
      this._calculateSpacerSize();
    }
  }
  _orientation = "vertical";
  appendOnly = false;
  scrolledIndexChange = new Observable((observer) => this._scrollStrategy.scrolledIndexChange.subscribe((index) => Promise.resolve().then(() => this.ngZone.run(() => observer.next(index)))));
  _contentWrapper;
  renderedRangeStream = this._renderedRangeSubject;
  renderedContentOffset = this._renderedContentOffsetSubject.pipe(filter((offset) => offset !== null), distinctUntilChanged());
  _totalContentSize = 0;
  _totalContentWidth = signal("", ...ngDevMode ? [{
    debugName: "_totalContentWidth"
  }] : []);
  _totalContentHeight = signal("", ...ngDevMode ? [{
    debugName: "_totalContentHeight"
  }] : []);
  _renderedContentTransform;
  _renderedRange = {
    start: 0,
    end: 0
  };
  _dataLength = 0;
  _viewportSize = 0;
  _forOf = null;
  _renderedContentOffset = 0;
  _renderedContentOffsetNeedsRewrite = false;
  _changeDetectionNeeded = signal(false, ...ngDevMode ? [{
    debugName: "_changeDetectionNeeded"
  }] : []);
  _runAfterChangeDetection = [];
  _viewportChanges = Subscription.EMPTY;
  _injector = inject(Injector);
  _isDestroyed = false;
  constructor() {
    super();
    const viewportRuler = inject(ViewportRuler);
    if (!this._scrollStrategy && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
    }
    this._viewportChanges = viewportRuler.change().subscribe(() => {
      this.checkViewportSize();
    });
    if (!this.scrollable) {
      this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable");
      this.scrollable = this;
    }
    const ref = effect(() => {
      if (this._changeDetectionNeeded()) {
        this._doChangeDetection();
      }
    }, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "ref"
    } : {}), {
      injector: inject(ApplicationRef).injector
    }));
    inject(DestroyRef).onDestroy(() => void ref.destroy());
  }
  ngOnInit() {
    if (!this._platform.isBrowser) {
      return;
    }
    if (this.scrollable === this) {
      super.ngOnInit();
    }
    this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
      this._measureViewportSize();
      this._scrollStrategy.attach(this);
      this.scrollable.elementScrolled().pipe(startWith(null), auditTime(0, SCROLL_SCHEDULER), takeUntil(this._destroyed)).subscribe(() => this._scrollStrategy.onContentScrolled());
      this._markChangeDetectionNeeded();
    }));
  }
  ngOnDestroy() {
    this.detach();
    this._scrollStrategy.detach();
    this._renderedRangeSubject.complete();
    this._detachedSubject.complete();
    this._viewportChanges.unsubscribe();
    this._isDestroyed = true;
    super.ngOnDestroy();
  }
  attach(forOf) {
    if (this._forOf && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("CdkVirtualScrollViewport is already attached.");
    }
    this.ngZone.runOutsideAngular(() => {
      this._forOf = forOf;
      this._forOf.dataStream.pipe(takeUntil(this._detachedSubject)).subscribe((data) => {
        const newLength = data.length;
        if (newLength !== this._dataLength) {
          this._dataLength = newLength;
          this._scrollStrategy.onDataLengthChanged();
        }
        this._doChangeDetection();
      });
    });
  }
  detach() {
    this._forOf = null;
    this._detachedSubject.next();
  }
  getDataLength() {
    return this._dataLength;
  }
  getViewportSize() {
    return this._viewportSize;
  }
  getRenderedRange() {
    return this._renderedRange;
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from];
  }
  setTotalContentSize(size) {
    if (this._totalContentSize !== size) {
      this._totalContentSize = size;
      this._calculateSpacerSize();
      this._markChangeDetectionNeeded();
    }
  }
  setRenderedRange(range) {
    if (!rangesEqual(this._renderedRange, range)) {
      if (this.appendOnly) {
        range = {
          start: 0,
          end: Math.max(this._renderedRange.end, range.end)
        };
      }
      this._renderedRangeSubject.next(this._renderedRange = range);
      this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered());
    }
  }
  getOffsetToRenderedContentStart() {
    return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
  }
  setRenderedContentOffset(offset, to = "to-start") {
    offset = this.appendOnly && to === "to-start" ? 0 : offset;
    const isRtl = this.dir && this.dir.value == "rtl";
    const isHorizontal = this.orientation == "horizontal";
    const axis = isHorizontal ? "X" : "Y";
    const axisDirection = isHorizontal && isRtl ? -1 : 1;
    let transform = `translate${axis}(${Number(axisDirection * offset)}px)`;
    this._renderedContentOffset = offset;
    if (to === "to-end") {
      transform += ` translate${axis}(-100%)`;
      this._renderedContentOffsetNeedsRewrite = true;
    }
    if (this._renderedContentTransform != transform) {
      this._renderedContentTransform = transform;
      this._markChangeDetectionNeeded(() => {
        if (this._renderedContentOffsetNeedsRewrite) {
          this._renderedContentOffset -= this.measureRenderedContentSize();
          this._renderedContentOffsetNeedsRewrite = false;
          this.setRenderedContentOffset(this._renderedContentOffset);
        } else {
          this._scrollStrategy.onRenderedOffsetChanged();
        }
      });
    }
  }
  scrollToOffset(offset, behavior = "auto") {
    const options = {
      behavior
    };
    if (this.orientation === "horizontal") {
      options.start = offset;
    } else {
      options.top = offset;
    }
    this.scrollable.scrollTo(options);
  }
  scrollToIndex(index, behavior = "auto") {
    this._scrollStrategy.scrollToIndex(index, behavior);
  }
  measureScrollOffset(from) {
    let measureScrollOffset;
    if (this.scrollable == this) {
      measureScrollOffset = (_from) => super.measureScrollOffset(_from);
    } else {
      measureScrollOffset = (_from) => this.scrollable.measureScrollOffset(_from);
    }
    return Math.max(0, measureScrollOffset(from ?? (this.orientation === "horizontal" ? "start" : "top")) - this.measureViewportOffset());
  }
  measureViewportOffset(from) {
    let fromRect;
    const LEFT = "left";
    const RIGHT = "right";
    const isRtl = this.dir?.value == "rtl";
    if (from == "start") {
      fromRect = isRtl ? RIGHT : LEFT;
    } else if (from == "end") {
      fromRect = isRtl ? LEFT : RIGHT;
    } else if (from) {
      fromRect = from;
    } else {
      fromRect = this.orientation === "horizontal" ? "left" : "top";
    }
    const scrollerClientRect = this.scrollable.measureBoundingClientRectWithScrollOffset(fromRect);
    const viewportClientRect = this.elementRef.nativeElement.getBoundingClientRect()[fromRect];
    return viewportClientRect - scrollerClientRect;
  }
  measureRenderedContentSize() {
    const contentEl = this._contentWrapper.nativeElement;
    return this.orientation === "horizontal" ? contentEl.offsetWidth : contentEl.offsetHeight;
  }
  measureRangeSize(range) {
    if (!this._forOf) {
      return 0;
    }
    return this._forOf.measureRangeSize(range, this.orientation);
  }
  checkViewportSize() {
    this._measureViewportSize();
    this._scrollStrategy.onDataLengthChanged();
  }
  _measureViewportSize() {
    this._viewportSize = this.scrollable.measureViewportSize(this.orientation);
  }
  _markChangeDetectionNeeded(runAfter) {
    if (runAfter) {
      this._runAfterChangeDetection.push(runAfter);
    }
    if (untracked(this._changeDetectionNeeded)) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      Promise.resolve().then(() => {
        this.ngZone.run(() => {
          this._changeDetectionNeeded.set(true);
        });
      });
    });
  }
  _doChangeDetection() {
    if (this._isDestroyed) {
      return;
    }
    this.ngZone.run(() => {
      this._changeDetectorRef.markForCheck();
      this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
      this._renderedContentOffsetSubject.next(this.getOffsetToRenderedContentStart());
      afterNextRender(() => {
        this._changeDetectionNeeded.set(false);
        const runAfterChangeDetection = this._runAfterChangeDetection;
        this._runAfterChangeDetection = [];
        for (const fn of runAfterChangeDetection) {
          fn();
        }
      }, {
        injector: this._injector
      });
    });
  }
  _calculateSpacerSize() {
    this._totalContentHeight.set(this.orientation === "horizontal" ? "" : `${this._totalContentSize}px`);
    this._totalContentWidth.set(this.orientation === "horizontal" ? `${this._totalContentSize}px` : "");
  }
  static \u0275fac = function CdkVirtualScrollViewport_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualScrollViewport)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkVirtualScrollViewport,
    selectors: [["cdk-virtual-scroll-viewport"]],
    viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c04, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentWrapper = _t.first);
      }
    },
    hostAttrs: [1, "cdk-virtual-scroll-viewport"],
    hostVars: 4,
    hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
      }
    },
    inputs: {
      orientation: "orientation",
      appendOnly: [2, "appendOnly", "appendOnly", booleanAttribute]
    },
    outputs: {
      scrolledIndexChange: "scrolledIndexChange"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkScrollable,
      useFactory: () => inject(VIRTUAL_SCROLLABLE, {
        optional: true
      }) || inject(_CdkVirtualScrollViewport)
    }, {
      provide: CDK_VIRTUAL_SCROLL_VIEWPORT,
      useExisting: _CdkVirtualScrollViewport
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c14,
    decls: 4,
    vars: 4,
    consts: [["contentWrapper", ""], [1, "cdk-virtual-scroll-content-wrapper"], [1, "cdk-virtual-scroll-spacer"]],
    template: function CdkVirtualScrollViewport_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElementStart(0, "div", 1, 0);
        \u0275\u0275projection(2);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElement(3, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275styleProp("width", ctx._totalContentWidth())("height", ctx._totalContentHeight());
      }
    },
    styles: ["cdk-virtual-scroll-viewport {\n  display: block;\n  position: relative;\n  transform: translateZ(0);\n}\n\n.cdk-virtual-scrollable {\n  overflow: auto;\n  will-change: scroll-position;\n  contain: strict;\n}\n\n.cdk-virtual-scroll-content-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  contain: content;\n}\n[dir=rtl] .cdk-virtual-scroll-content-wrapper {\n  right: 0;\n  left: auto;\n}\n\n.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper {\n  min-height: 100%;\n}\n.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {\n  padding-left: 0;\n  padding-right: 0;\n  margin-left: 0;\n  margin-right: 0;\n  border-left-width: 0;\n  border-right-width: 0;\n  outline: none;\n}\n\n.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper {\n  min-width: 100%;\n}\n.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  border-top-width: 0;\n  border-bottom-width: 0;\n  outline: none;\n}\n\n.cdk-virtual-scroll-spacer {\n  height: 1px;\n  transform-origin: 0 0;\n  flex: 0 0 auto;\n}\n[dir=rtl] .cdk-virtual-scroll-spacer {\n  transform-origin: 100% 0;\n}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollViewport, [{
    type: Component,
    args: [{
      selector: "cdk-virtual-scroll-viewport",
      host: {
        "class": "cdk-virtual-scroll-viewport",
        "[class.cdk-virtual-scroll-orientation-horizontal]": 'orientation === "horizontal"',
        "[class.cdk-virtual-scroll-orientation-vertical]": 'orientation !== "horizontal"'
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: CdkScrollable,
        useFactory: () => inject(VIRTUAL_SCROLLABLE, {
          optional: true
        }) || inject(CdkVirtualScrollViewport)
      }, {
        provide: CDK_VIRTUAL_SCROLL_VIEWPORT,
        useExisting: CdkVirtualScrollViewport
      }],
      template: '<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class="cdk-virtual-scroll-content-wrapper">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class="cdk-virtual-scroll-spacer"\n     [style.width]="_totalContentWidth()" [style.height]="_totalContentHeight()"></div>\n',
      styles: ["cdk-virtual-scroll-viewport {\n  display: block;\n  position: relative;\n  transform: translateZ(0);\n}\n\n.cdk-virtual-scrollable {\n  overflow: auto;\n  will-change: scroll-position;\n  contain: strict;\n}\n\n.cdk-virtual-scroll-content-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  contain: content;\n}\n[dir=rtl] .cdk-virtual-scroll-content-wrapper {\n  right: 0;\n  left: auto;\n}\n\n.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper {\n  min-height: 100%;\n}\n.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {\n  padding-left: 0;\n  padding-right: 0;\n  margin-left: 0;\n  margin-right: 0;\n  border-left-width: 0;\n  border-right-width: 0;\n  outline: none;\n}\n\n.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper {\n  min-width: 100%;\n}\n.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  border-top-width: 0;\n  border-bottom-width: 0;\n  outline: none;\n}\n\n.cdk-virtual-scroll-spacer {\n  height: 1px;\n  transform-origin: 0 0;\n  flex: 0 0 auto;\n}\n[dir=rtl] .cdk-virtual-scroll-spacer {\n  transform-origin: 100% 0;\n}\n"]
    }]
  }], () => [], {
    orientation: [{
      type: Input
    }],
    appendOnly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrolledIndexChange: [{
      type: Output
    }],
    _contentWrapper: [{
      type: ViewChild,
      args: ["contentWrapper", {
        static: true
      }]
    }]
  });
})();
function getOffset(orientation, direction, node) {
  const el = node;
  if (!el.getBoundingClientRect) {
    return 0;
  }
  const rect = el.getBoundingClientRect();
  if (orientation === "horizontal") {
    return direction === "start" ? rect.left : rect.right;
  }
  return direction === "start" ? rect.top : rect.bottom;
}
var CdkVirtualForOf = class _CdkVirtualForOf {
  _viewContainerRef = inject(ViewContainerRef);
  _template = inject(TemplateRef);
  _differs = inject(IterableDiffers);
  _viewRepeater = new _RecycleViewRepeaterStrategy();
  _viewport = inject(CDK_VIRTUAL_SCROLL_VIEWPORT, {
    skipSelf: true
  });
  viewChange = new Subject();
  _dataSourceChanges = new Subject();
  get cdkVirtualForOf() {
    return this._cdkVirtualForOf;
  }
  set cdkVirtualForOf(value) {
    this._cdkVirtualForOf = value;
    if (isDataSource(value)) {
      this._dataSourceChanges.next(value);
    } else {
      this._dataSourceChanges.next(new ArrayDataSource(isObservable(value) ? value : Array.from(value || [])));
    }
  }
  _cdkVirtualForOf;
  get cdkVirtualForTrackBy() {
    return this._cdkVirtualForTrackBy;
  }
  set cdkVirtualForTrackBy(fn) {
    this._needsUpdate = true;
    this._cdkVirtualForTrackBy = fn ? (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item) : void 0;
  }
  _cdkVirtualForTrackBy;
  set cdkVirtualForTemplate(value) {
    if (value) {
      this._needsUpdate = true;
      this._template = value;
    }
  }
  get cdkVirtualForTemplateCacheSize() {
    return this._viewRepeater.viewCacheSize;
  }
  set cdkVirtualForTemplateCacheSize(size) {
    this._viewRepeater.viewCacheSize = coerceNumberProperty(size);
  }
  dataStream = this._dataSourceChanges.pipe(startWith(null), pairwise(), switchMap(([prev, cur]) => this._changeDataSource(prev, cur)), shareReplay(1));
  _differ = null;
  _data = [];
  _renderedItems = [];
  _renderedRange = {
    start: 0,
    end: 0
  };
  _needsUpdate = false;
  _destroyed = new Subject();
  constructor() {
    const ngZone = inject(NgZone);
    this.dataStream.subscribe((data) => {
      this._data = data;
      this._onRenderedDataChange();
    });
    this._viewport.renderedRangeStream.pipe(takeUntil(this._destroyed)).subscribe((range) => {
      this._renderedRange = range;
      if (this.viewChange.observers.length) {
        ngZone.run(() => this.viewChange.next(this._renderedRange));
      }
      this._onRenderedDataChange();
    });
    this._viewport.attach(this);
  }
  measureRangeSize(range, orientation) {
    if (range.start >= range.end) {
      return 0;
    }
    if ((range.start < this._renderedRange.start || range.end > this._renderedRange.end) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Error: attempted to measure an item that isn't rendered.`);
    }
    const renderedStartIndex = range.start - this._renderedRange.start;
    const rangeLen = range.end - range.start;
    let firstNode;
    let lastNode;
    for (let i = 0; i < rangeLen; i++) {
      const view = this._viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        firstNode = lastNode = view.rootNodes[0];
        break;
      }
    }
    for (let i = rangeLen - 1; i > -1; i--) {
      const view = this._viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        lastNode = view.rootNodes[view.rootNodes.length - 1];
        break;
      }
    }
    return firstNode && lastNode ? getOffset(orientation, "end", lastNode) - getOffset(orientation, "start", firstNode) : 0;
  }
  ngDoCheck() {
    if (this._differ && this._needsUpdate) {
      const changes = this._differ.diff(this._renderedItems);
      if (!changes) {
        this._updateContext();
      } else {
        this._applyChanges(changes);
      }
      this._needsUpdate = false;
    }
  }
  ngOnDestroy() {
    this._viewport.detach();
    this._dataSourceChanges.next(void 0);
    this._dataSourceChanges.complete();
    this.viewChange.complete();
    this._destroyed.next();
    this._destroyed.complete();
    this._viewRepeater.detach();
  }
  _onRenderedDataChange() {
    if (!this._renderedRange) {
      return;
    }
    this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
    if (!this._differ) {
      this._differ = this._differs.find(this._renderedItems).create((index, item) => {
        return this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(index, item) : item;
      });
    }
    this._needsUpdate = true;
  }
  _changeDataSource(oldDs, newDs) {
    if (oldDs) {
      oldDs.disconnect(this);
    }
    this._needsUpdate = true;
    return newDs ? newDs.connect(this) : of();
  }
  _updateContext() {
    const count = this._data.length;
    let i = this._viewContainerRef.length;
    while (i--) {
      const view = this._viewContainerRef.get(i);
      view.context.index = this._renderedRange.start + i;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
      view.detectChanges();
    }
  }
  _applyChanges(changes) {
    this._viewRepeater.applyChanges(changes, this._viewContainerRef, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record, currentIndex), (record) => record.item);
    changes.forEachIdentityChange((record) => {
      const view = this._viewContainerRef.get(record.currentIndex);
      view.context.$implicit = record.item;
    });
    const count = this._data.length;
    let i = this._viewContainerRef.length;
    while (i--) {
      const view = this._viewContainerRef.get(i);
      view.context.index = this._renderedRange.start + i;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
    }
  }
  _updateComputedContextProperties(context) {
    context.first = context.index === 0;
    context.last = context.index === context.count - 1;
    context.even = context.index % 2 === 0;
    context.odd = !context.even;
  }
  _getEmbeddedViewArgs(record, index) {
    return {
      templateRef: this._template,
      context: {
        $implicit: record.item,
        cdkVirtualForOf: this._cdkVirtualForOf,
        index: -1,
        count: -1,
        first: false,
        last: false,
        odd: false,
        even: false
      },
      index
    };
  }
  static ngTemplateContextGuard(directive, context) {
    return true;
  }
  static \u0275fac = function CdkVirtualForOf_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualForOf)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkVirtualForOf,
    selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
    inputs: {
      cdkVirtualForOf: "cdkVirtualForOf",
      cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
      cdkVirtualForTemplate: "cdkVirtualForTemplate",
      cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualForOf, [{
    type: Directive,
    args: [{
      selector: "[cdkVirtualFor][cdkVirtualForOf]"
    }]
  }], () => [], {
    cdkVirtualForOf: [{
      type: Input
    }],
    cdkVirtualForTrackBy: [{
      type: Input
    }],
    cdkVirtualForTemplate: [{
      type: Input
    }],
    cdkVirtualForTemplateCacheSize: [{
      type: Input
    }]
  });
})();
var CdkVirtualScrollableElement = class _CdkVirtualScrollableElement extends CdkVirtualScrollable {
  constructor() {
    super();
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from] - this.measureScrollOffset(from);
  }
  static \u0275fac = function CdkVirtualScrollableElement_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualScrollableElement)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkVirtualScrollableElement,
    selectors: [["", "cdkVirtualScrollingElement", ""]],
    hostAttrs: [1, "cdk-virtual-scrollable"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: VIRTUAL_SCROLLABLE,
      useExisting: _CdkVirtualScrollableElement
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableElement, [{
    type: Directive,
    args: [{
      selector: "[cdkVirtualScrollingElement]",
      providers: [{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableElement
      }],
      host: {
        "class": "cdk-virtual-scrollable"
      }
    }]
  }], () => [], null);
})();
var CdkVirtualScrollableWindow = class _CdkVirtualScrollableWindow extends CdkVirtualScrollable {
  constructor() {
    super();
    const document2 = inject(DOCUMENT);
    this.elementRef = new ElementRef(document2.documentElement);
    this._scrollElement = document2;
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from];
  }
  static \u0275fac = function CdkVirtualScrollableWindow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualScrollableWindow)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkVirtualScrollableWindow,
    selectors: [["cdk-virtual-scroll-viewport", "scrollWindow", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: VIRTUAL_SCROLLABLE,
      useExisting: _CdkVirtualScrollableWindow
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableWindow, [{
    type: Directive,
    args: [{
      selector: "cdk-virtual-scroll-viewport[scrollWindow]",
      providers: [{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableWindow
      }]
    }]
  }], () => [], null);
})();
var CdkScrollableModule = class _CdkScrollableModule {
  static \u0275fac = function CdkScrollableModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkScrollableModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CdkScrollableModule,
    imports: [CdkScrollable],
    exports: [CdkScrollable]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollableModule, [{
    type: NgModule,
    args: [{
      exports: [CdkScrollable],
      imports: [CdkScrollable]
    }]
  }], null, null);
})();
var ScrollingModule = class _ScrollingModule {
  static \u0275fac = function ScrollingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ScrollingModule,
    imports: [BidiModule, CdkScrollableModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollableWindow, CdkVirtualScrollableElement],
    exports: [BidiModule, CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, CdkVirtualScrollableWindow, CdkVirtualScrollableElement]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [BidiModule, CdkScrollableModule, BidiModule, CdkScrollableModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollingModule, [{
    type: NgModule,
    args: [{
      imports: [BidiModule, CdkScrollableModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollableWindow, CdkVirtualScrollableElement],
      exports: [BidiModule, CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, CdkVirtualScrollableWindow, CdkVirtualScrollableElement]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/_id-generator-chunk.mjs
var counters = {};
var _IdGenerator = class __IdGenerator {
  _appId = inject(APP_ID);
  static _infix = `a${Math.floor(Math.random() * 1e5).toString()}`;
  getId(prefix, randomize = false) {
    if (this._appId !== "ng") {
      prefix += this._appId;
    }
    if (!counters.hasOwnProperty(prefix)) {
      counters[prefix] = 0;
    }
    return `${prefix}${randomize ? __IdGenerator._infix + "-" : ""}${counters[prefix]++}`;
  }
  static \u0275fac = function _IdGenerator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __IdGenerator)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: __IdGenerator,
    factory: __IdGenerator.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_IdGenerator, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/_array-chunk.mjs
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}

// node_modules/@angular/cdk/fesm2022/drag-drop.mjs
function deepCloneNode(node) {
  const clone = node.cloneNode(true);
  const descendantsWithId = clone.querySelectorAll("[id]");
  const nodeName = node.nodeName.toLowerCase();
  clone.removeAttribute("id");
  for (let i = 0; i < descendantsWithId.length; i++) {
    descendantsWithId[i].removeAttribute("id");
  }
  if (nodeName === "canvas") {
    transferCanvasData(node, clone);
  } else if (nodeName === "input" || nodeName === "select" || nodeName === "textarea") {
    transferInputData(node, clone);
  }
  transferData("canvas", node, clone, transferCanvasData);
  transferData("input, textarea, select", node, clone, transferInputData);
  return clone;
}
function transferData(selector, node, clone, callback) {
  const descendantElements = node.querySelectorAll(selector);
  if (descendantElements.length) {
    const cloneElements = clone.querySelectorAll(selector);
    for (let i = 0; i < descendantElements.length; i++) {
      callback(descendantElements[i], cloneElements[i]);
    }
  }
}
var cloneUniqueId = 0;
function transferInputData(source, clone) {
  if (clone.type !== "file") {
    clone.value = source.value;
  }
  if (clone.type === "radio" && clone.name) {
    clone.name = `mat-clone-${clone.name}-${cloneUniqueId++}`;
  }
}
function transferCanvasData(source, clone) {
  const context = clone.getContext("2d");
  if (context) {
    try {
      context.drawImage(source, 0, 0);
    } catch {
    }
  }
}
function getMutableClientRect(element) {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    width: rect.width,
    height: rect.height,
    x: rect.x,
    y: rect.y
  };
}
function isInsideClientRect(clientRect, x, y) {
  const {
    top,
    bottom,
    left,
    right
  } = clientRect;
  return y >= top && y <= bottom && x >= left && x <= right;
}
function isOverflowingParent(parentRect, childRect) {
  const isLeftOverflowing = childRect.left < parentRect.left;
  const isRightOverflowing = childRect.left + childRect.width > parentRect.right;
  const isTopOverflowing = childRect.top < parentRect.top;
  const isBottomOverflowing = childRect.top + childRect.height > parentRect.bottom;
  return isLeftOverflowing || isRightOverflowing || isTopOverflowing || isBottomOverflowing;
}
function adjustDomRect(domRect, top, left) {
  domRect.top += top;
  domRect.bottom = domRect.top + domRect.height;
  domRect.left += left;
  domRect.right = domRect.left + domRect.width;
}
function isPointerNearDomRect(rect, threshold, pointerX, pointerY) {
  const {
    top,
    right,
    bottom,
    left,
    width,
    height
  } = rect;
  const xThreshold = width * threshold;
  const yThreshold = height * threshold;
  return pointerY > top - yThreshold && pointerY < bottom + yThreshold && pointerX > left - xThreshold && pointerX < right + xThreshold;
}
var ParentPositionTracker = class {
  _document;
  positions = /* @__PURE__ */ new Map();
  constructor(_document) {
    this._document = _document;
  }
  clear() {
    this.positions.clear();
  }
  cache(elements) {
    this.clear();
    this.positions.set(this._document, {
      scrollPosition: this.getViewportScrollPosition()
    });
    elements.forEach((element) => {
      this.positions.set(element, {
        scrollPosition: {
          top: element.scrollTop,
          left: element.scrollLeft
        },
        clientRect: getMutableClientRect(element)
      });
    });
  }
  handleScroll(event) {
    const target = _getEventTarget(event);
    const cachedPosition = this.positions.get(target);
    if (!cachedPosition) {
      return null;
    }
    const scrollPosition = cachedPosition.scrollPosition;
    let newTop;
    let newLeft;
    if (target === this._document) {
      const viewportScrollPosition = this.getViewportScrollPosition();
      newTop = viewportScrollPosition.top;
      newLeft = viewportScrollPosition.left;
    } else {
      newTop = target.scrollTop;
      newLeft = target.scrollLeft;
    }
    const topDifference = scrollPosition.top - newTop;
    const leftDifference = scrollPosition.left - newLeft;
    this.positions.forEach((position, node) => {
      if (position.clientRect && target !== node && target.contains(node)) {
        adjustDomRect(position.clientRect, topDifference, leftDifference);
      }
    });
    scrollPosition.top = newTop;
    scrollPosition.left = newLeft;
    return {
      top: topDifference,
      left: leftDifference
    };
  }
  getViewportScrollPosition() {
    return {
      top: window.scrollY,
      left: window.scrollX
    };
  }
};
function getRootNode(viewRef, _document) {
  const rootNodes = viewRef.rootNodes;
  if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
    return rootNodes[0];
  }
  const wrapper = _document.createElement("div");
  rootNodes.forEach((node) => wrapper.appendChild(node));
  return wrapper;
}
function extendStyles(dest, source, importantProperties2) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      const value = source[key];
      if (value) {
        dest.setProperty(key, value, importantProperties2?.has(key) ? "important" : "");
      } else {
        dest.removeProperty(key);
      }
    }
  }
  return dest;
}
function toggleNativeDragInteractions(element, enable) {
  const userSelect = enable ? "" : "none";
  extendStyles(element.style, {
    "touch-action": enable ? "" : "none",
    "-webkit-user-drag": enable ? "" : "none",
    "-webkit-tap-highlight-color": enable ? "" : "transparent",
    "user-select": userSelect,
    "-ms-user-select": userSelect,
    "-webkit-user-select": userSelect,
    "-moz-user-select": userSelect
  });
}
function toggleVisibility(element, enable, importantProperties2) {
  extendStyles(element.style, {
    position: enable ? "" : "fixed",
    top: enable ? "" : "0",
    opacity: enable ? "" : "0",
    left: enable ? "" : "-999em"
  }, importantProperties2);
}
function combineTransforms(transform, initialTransform) {
  return initialTransform && initialTransform != "none" ? transform + " " + initialTransform : transform;
}
function matchElementSize(target, sourceRect) {
  target.style.width = `${sourceRect.width}px`;
  target.style.height = `${sourceRect.height}px`;
  target.style.transform = getTransform(sourceRect.left, sourceRect.top);
}
function getTransform(x, y) {
  return `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
}
var capturingEventOptions = {
  capture: true
};
var activeCapturingEventOptions$1 = {
  passive: false,
  capture: true
};
var _ResetsLoader = class __ResetsLoader {
  static \u0275fac = function _ResetsLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __ResetsLoader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: __ResetsLoader,
    selectors: [["ng-component"]],
    hostAttrs: ["cdk-drag-resets-container", ""],
    decls: 0,
    vars: 0,
    template: function _ResetsLoader_Template(rf, ctx) {
    },
    styles: ["@layer cdk-resets {\n  .cdk-drag-preview {\n    background: none;\n    border: none;\n    padding: 0;\n    color: inherit;\n    inset: auto;\n  }\n}\n.cdk-drag-placeholder *,\n.cdk-drag-preview * {\n  pointer-events: none !important;\n}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_ResetsLoader, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "cdk-drag-resets-container": ""
      },
      styles: ["@layer cdk-resets {\n  .cdk-drag-preview {\n    background: none;\n    border: none;\n    padding: 0;\n    color: inherit;\n    inset: auto;\n  }\n}\n.cdk-drag-placeholder *,\n.cdk-drag-preview * {\n  pointer-events: none !important;\n}\n"]
    }]
  }], null, null);
})();
var DragDropRegistry = class _DragDropRegistry {
  _ngZone = inject(NgZone);
  _document = inject(DOCUMENT);
  _styleLoader = inject(_CdkPrivateStyleLoader);
  _renderer = inject(RendererFactory2).createRenderer(null, null);
  _cleanupDocumentTouchmove;
  _scroll = new Subject();
  _dropInstances = /* @__PURE__ */ new Set();
  _dragInstances = /* @__PURE__ */ new Set();
  _activeDragInstances = signal([], ...ngDevMode ? [{
    debugName: "_activeDragInstances"
  }] : []);
  _globalListeners;
  _draggingPredicate = (item) => item.isDragging();
  _domNodesToDirectives = null;
  pointerMove = new Subject();
  pointerUp = new Subject();
  constructor() {
  }
  registerDropContainer(drop) {
    if (!this._dropInstances.has(drop)) {
      this._dropInstances.add(drop);
    }
  }
  registerDragItem(drag) {
    this._dragInstances.add(drag);
    if (this._dragInstances.size === 1) {
      this._ngZone.runOutsideAngular(() => {
        this._cleanupDocumentTouchmove?.();
        this._cleanupDocumentTouchmove = this._renderer.listen(this._document, "touchmove", this._persistentTouchmoveListener, activeCapturingEventOptions$1);
      });
    }
  }
  removeDropContainer(drop) {
    this._dropInstances.delete(drop);
  }
  removeDragItem(drag) {
    this._dragInstances.delete(drag);
    this.stopDragging(drag);
    if (this._dragInstances.size === 0) {
      this._cleanupDocumentTouchmove?.();
    }
  }
  startDragging(drag, event) {
    if (this._activeDragInstances().indexOf(drag) > -1) {
      return;
    }
    this._styleLoader.load(_ResetsLoader);
    this._activeDragInstances.update((instances) => [...instances, drag]);
    if (this._activeDragInstances().length === 1) {
      const isTouchEvent2 = event.type.startsWith("touch");
      const endEventHandler = (e) => this.pointerUp.next(e);
      const toBind = [["scroll", (e) => this._scroll.next(e), capturingEventOptions], ["selectstart", this._preventDefaultWhileDragging, activeCapturingEventOptions$1]];
      if (isTouchEvent2) {
        toBind.push(["touchend", endEventHandler, capturingEventOptions], ["touchcancel", endEventHandler, capturingEventOptions]);
      } else {
        toBind.push(["mouseup", endEventHandler, capturingEventOptions]);
      }
      if (!isTouchEvent2) {
        toBind.push(["mousemove", (e) => this.pointerMove.next(e), activeCapturingEventOptions$1]);
      }
      this._ngZone.runOutsideAngular(() => {
        this._globalListeners = toBind.map(([name, handler, options]) => this._renderer.listen(this._document, name, handler, options));
      });
    }
  }
  stopDragging(drag) {
    this._activeDragInstances.update((instances) => {
      const index = instances.indexOf(drag);
      if (index > -1) {
        instances.splice(index, 1);
        return [...instances];
      }
      return instances;
    });
    if (this._activeDragInstances().length === 0) {
      this._clearGlobalListeners();
    }
  }
  isDragging(drag) {
    return this._activeDragInstances().indexOf(drag) > -1;
  }
  scrolled(shadowRoot) {
    const streams = [this._scroll];
    if (shadowRoot && shadowRoot !== this._document) {
      streams.push(new Observable((observer) => {
        return this._ngZone.runOutsideAngular(() => {
          const cleanup = this._renderer.listen(shadowRoot, "scroll", (event) => {
            if (this._activeDragInstances().length) {
              observer.next(event);
            }
          }, capturingEventOptions);
          return () => {
            cleanup();
          };
        });
      }));
    }
    return merge(...streams);
  }
  registerDirectiveNode(node, dragRef) {
    this._domNodesToDirectives ??= /* @__PURE__ */ new WeakMap();
    this._domNodesToDirectives.set(node, dragRef);
  }
  removeDirectiveNode(node) {
    this._domNodesToDirectives?.delete(node);
  }
  getDragDirectiveForNode(node) {
    return this._domNodesToDirectives?.get(node) || null;
  }
  ngOnDestroy() {
    this._dragInstances.forEach((instance) => this.removeDragItem(instance));
    this._dropInstances.forEach((instance) => this.removeDropContainer(instance));
    this._domNodesToDirectives = null;
    this._clearGlobalListeners();
    this.pointerMove.complete();
    this.pointerUp.complete();
  }
  _preventDefaultWhileDragging = (event) => {
    if (this._activeDragInstances().length > 0) {
      event.preventDefault();
    }
  };
  _persistentTouchmoveListener = (event) => {
    if (this._activeDragInstances().length > 0) {
      if (this._activeDragInstances().some(this._draggingPredicate)) {
        event.preventDefault();
      }
      this.pointerMove.next(event);
    }
  };
  _clearGlobalListeners() {
    this._globalListeners?.forEach((cleanup) => cleanup());
    this._globalListeners = void 0;
  }
  static \u0275fac = function DragDropRegistry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DragDropRegistry)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DragDropRegistry,
    factory: _DragDropRegistry.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDropRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function parseCssTimeUnitsToMs(value) {
  const multiplier = value.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3;
  return parseFloat(value) * multiplier;
}
function getTransformTransitionDurationInMs(element) {
  const computedStyle = getComputedStyle(element);
  const transitionedProperties = parseCssPropertyValue(computedStyle, "transition-property");
  const property = transitionedProperties.find((prop) => prop === "transform" || prop === "all");
  if (!property) {
    return 0;
  }
  const propertyIndex = transitionedProperties.indexOf(property);
  const rawDurations = parseCssPropertyValue(computedStyle, "transition-duration");
  const rawDelays = parseCssPropertyValue(computedStyle, "transition-delay");
  return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) + parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
function parseCssPropertyValue(computedStyle, name) {
  const value = computedStyle.getPropertyValue(name);
  return value.split(",").map((part) => part.trim());
}
var importantProperties = /* @__PURE__ */ new Set(["position"]);
var PreviewRef = class {
  _document;
  _rootElement;
  _direction;
  _initialDomRect;
  _previewTemplate;
  _previewClass;
  _pickupPositionOnPage;
  _initialTransform;
  _zIndex;
  _renderer;
  _previewEmbeddedView = null;
  _preview;
  get element() {
    return this._preview;
  }
  constructor(_document, _rootElement, _direction, _initialDomRect, _previewTemplate, _previewClass, _pickupPositionOnPage, _initialTransform, _zIndex, _renderer) {
    this._document = _document;
    this._rootElement = _rootElement;
    this._direction = _direction;
    this._initialDomRect = _initialDomRect;
    this._previewTemplate = _previewTemplate;
    this._previewClass = _previewClass;
    this._pickupPositionOnPage = _pickupPositionOnPage;
    this._initialTransform = _initialTransform;
    this._zIndex = _zIndex;
    this._renderer = _renderer;
  }
  attach(parent) {
    this._preview = this._createPreview();
    parent.appendChild(this._preview);
    if (supportsPopover(this._preview)) {
      this._preview["showPopover"]();
    }
  }
  destroy() {
    this._preview.remove();
    this._previewEmbeddedView?.destroy();
    this._preview = this._previewEmbeddedView = null;
  }
  setTransform(value) {
    this._preview.style.transform = value;
  }
  getBoundingClientRect() {
    return this._preview.getBoundingClientRect();
  }
  addClass(className) {
    this._preview.classList.add(className);
  }
  getTransitionDuration() {
    return getTransformTransitionDurationInMs(this._preview);
  }
  addEventListener(name, handler) {
    return this._renderer.listen(this._preview, name, handler);
  }
  _createPreview() {
    const previewConfig = this._previewTemplate;
    const previewClass = this._previewClass;
    const previewTemplate = previewConfig ? previewConfig.template : null;
    let preview;
    if (previewTemplate && previewConfig) {
      const rootRect = previewConfig.matchSize ? this._initialDomRect : null;
      const viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
      viewRef.detectChanges();
      preview = getRootNode(viewRef, this._document);
      this._previewEmbeddedView = viewRef;
      if (previewConfig.matchSize) {
        matchElementSize(preview, rootRect);
      } else {
        preview.style.transform = getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
      }
    } else {
      preview = deepCloneNode(this._rootElement);
      matchElementSize(preview, this._initialDomRect);
      if (this._initialTransform) {
        preview.style.transform = this._initialTransform;
      }
    }
    extendStyles(preview.style, {
      "pointer-events": "none",
      "margin": supportsPopover(preview) ? "0 auto 0 0" : "0",
      "position": "fixed",
      "top": "0",
      "left": "0",
      "z-index": this._zIndex + ""
    }, importantProperties);
    toggleNativeDragInteractions(preview, false);
    preview.classList.add("cdk-drag-preview");
    preview.setAttribute("popover", "manual");
    preview.setAttribute("dir", this._direction);
    if (previewClass) {
      if (Array.isArray(previewClass)) {
        previewClass.forEach((className) => preview.classList.add(className));
      } else {
        preview.classList.add(previewClass);
      }
    }
    return preview;
  }
};
function supportsPopover(element) {
  return "showPopover" in element;
}
var passiveEventListenerOptions = {
  passive: true
};
var activeEventListenerOptions = {
  passive: false
};
var activeCapturingEventOptions = {
  passive: false,
  capture: true
};
var MOUSE_EVENT_IGNORE_TIME = 800;
var PLACEHOLDER_CLASS = "cdk-drag-placeholder";
var dragImportantProperties = /* @__PURE__ */ new Set(["position"]);
function createDragRef(injector, element, config = {
  dragStartThreshold: 5,
  pointerDirectionChangeThreshold: 5
}) {
  const renderer = injector.get(Renderer2, null, {
    optional: true
  }) || injector.get(RendererFactory2).createRenderer(null, null);
  return new DragRef(element, config, injector.get(DOCUMENT), injector.get(NgZone), injector.get(ViewportRuler), injector.get(DragDropRegistry), renderer);
}
var DragRef = class {
  _config;
  _document;
  _ngZone;
  _viewportRuler;
  _dragDropRegistry;
  _renderer;
  _rootElementCleanups;
  _cleanupShadowRootSelectStart;
  _preview = null;
  _previewContainer;
  _placeholderRef = null;
  _placeholder;
  _pickupPositionInElement;
  _pickupPositionOnPage;
  _marker;
  _anchor = null;
  _passiveTransform = {
    x: 0,
    y: 0
  };
  _activeTransform = {
    x: 0,
    y: 0
  };
  _initialTransform;
  _hasStartedDragging = signal(false, ...ngDevMode ? [{
    debugName: "_hasStartedDragging"
  }] : []);
  _hasMoved = false;
  _initialContainer;
  _initialIndex;
  _parentPositions;
  _moveEvents = new Subject();
  _pointerDirectionDelta;
  _pointerPositionAtLastDirectionChange;
  _lastKnownPointerPosition;
  _rootElement;
  _ownerSVGElement = null;
  _rootElementTapHighlight;
  _pointerMoveSubscription = Subscription.EMPTY;
  _pointerUpSubscription = Subscription.EMPTY;
  _scrollSubscription = Subscription.EMPTY;
  _resizeSubscription = Subscription.EMPTY;
  _lastTouchEventTime;
  _dragStartTime;
  _boundaryElement = null;
  _nativeInteractionsEnabled = true;
  _initialDomRect;
  _previewRect;
  _boundaryRect;
  _previewTemplate;
  _placeholderTemplate;
  _handles = [];
  _disabledHandles = /* @__PURE__ */ new Set();
  _dropContainer;
  _direction = "ltr";
  _parentDragRef = null;
  _cachedShadowRoot;
  lockAxis = null;
  dragStartDelay = 0;
  previewClass;
  scale = 1;
  get disabled() {
    return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
  }
  set disabled(value) {
    if (value !== this._disabled) {
      this._disabled = value;
      this._toggleNativeDragInteractions();
      this._handles.forEach((handle) => toggleNativeDragInteractions(handle, value));
    }
  }
  _disabled = false;
  beforeStarted = new Subject();
  started = new Subject();
  released = new Subject();
  ended = new Subject();
  entered = new Subject();
  exited = new Subject();
  dropped = new Subject();
  moved = this._moveEvents;
  data;
  constrainPosition;
  constructor(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry, _renderer) {
    this._config = _config;
    this._document = _document;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._dragDropRegistry = _dragDropRegistry;
    this._renderer = _renderer;
    this.withRootElement(element).withParent(_config.parentDragRef || null);
    this._parentPositions = new ParentPositionTracker(_document);
    _dragDropRegistry.registerDragItem(this);
  }
  getPlaceholderElement() {
    return this._placeholder;
  }
  getRootElement() {
    return this._rootElement;
  }
  getVisibleElement() {
    return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
  }
  withHandles(handles) {
    this._handles = handles.map((handle) => coerceElement(handle));
    this._handles.forEach((handle) => toggleNativeDragInteractions(handle, this.disabled));
    this._toggleNativeDragInteractions();
    const disabledHandles = /* @__PURE__ */ new Set();
    this._disabledHandles.forEach((handle) => {
      if (this._handles.indexOf(handle) > -1) {
        disabledHandles.add(handle);
      }
    });
    this._disabledHandles = disabledHandles;
    return this;
  }
  withPreviewTemplate(template) {
    this._previewTemplate = template;
    return this;
  }
  withPlaceholderTemplate(template) {
    this._placeholderTemplate = template;
    return this;
  }
  withRootElement(rootElement) {
    const element = coerceElement(rootElement);
    if (element !== this._rootElement) {
      this._removeRootElementListeners();
      const renderer = this._renderer;
      this._rootElementCleanups = this._ngZone.runOutsideAngular(() => [renderer.listen(element, "mousedown", this._pointerDown, activeEventListenerOptions), renderer.listen(element, "touchstart", this._pointerDown, passiveEventListenerOptions), renderer.listen(element, "dragstart", this._nativeDragStart, activeEventListenerOptions)]);
      this._initialTransform = void 0;
      this._rootElement = element;
    }
    if (typeof SVGElement !== "undefined" && this._rootElement instanceof SVGElement) {
      this._ownerSVGElement = this._rootElement.ownerSVGElement;
    }
    return this;
  }
  withBoundaryElement(boundaryElement) {
    this._boundaryElement = boundaryElement ? coerceElement(boundaryElement) : null;
    this._resizeSubscription.unsubscribe();
    if (boundaryElement) {
      this._resizeSubscription = this._viewportRuler.change(10).subscribe(() => this._containInsideBoundaryOnResize());
    }
    return this;
  }
  withParent(parent) {
    this._parentDragRef = parent;
    return this;
  }
  dispose() {
    this._removeRootElementListeners();
    if (this.isDragging()) {
      this._rootElement?.remove();
    }
    this._marker?.remove();
    this._destroyPreview();
    this._destroyPlaceholder();
    this._dragDropRegistry.removeDragItem(this);
    this._removeListeners();
    this.beforeStarted.complete();
    this.started.complete();
    this.released.complete();
    this.ended.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this._moveEvents.complete();
    this._handles = [];
    this._disabledHandles.clear();
    this._dropContainer = void 0;
    this._resizeSubscription.unsubscribe();
    this._parentPositions.clear();
    this._boundaryElement = this._rootElement = this._ownerSVGElement = this._placeholderTemplate = this._previewTemplate = this._marker = this._parentDragRef = null;
  }
  isDragging() {
    return this._hasStartedDragging() && this._dragDropRegistry.isDragging(this);
  }
  reset() {
    this._rootElement.style.transform = this._initialTransform || "";
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform = {
      x: 0,
      y: 0
    };
  }
  resetToBoundary() {
    if (this._boundaryElement && this._rootElement && isOverflowingParent(this._boundaryElement.getBoundingClientRect(), this._rootElement.getBoundingClientRect())) {
      const parentRect = this._boundaryElement.getBoundingClientRect();
      const childRect = this._rootElement.getBoundingClientRect();
      let offsetX = 0;
      let offsetY = 0;
      if (childRect.left < parentRect.left) {
        offsetX = parentRect.left - childRect.left;
      } else if (childRect.right > parentRect.right) {
        offsetX = parentRect.right - childRect.right;
      }
      if (childRect.top < parentRect.top) {
        offsetY = parentRect.top - childRect.top;
      } else if (childRect.bottom > parentRect.bottom) {
        offsetY = parentRect.bottom - childRect.bottom;
      }
      const currentLeft = this._activeTransform.x;
      const currentTop = this._activeTransform.y;
      let x = currentLeft + offsetX, y = currentTop + offsetY;
      this._rootElement.style.transform = getTransform(x, y);
      this._activeTransform = {
        x,
        y
      };
      this._passiveTransform = {
        x,
        y
      };
    }
  }
  disableHandle(handle) {
    if (!this._disabledHandles.has(handle) && this._handles.indexOf(handle) > -1) {
      this._disabledHandles.add(handle);
      toggleNativeDragInteractions(handle, true);
    }
  }
  enableHandle(handle) {
    if (this._disabledHandles.has(handle)) {
      this._disabledHandles.delete(handle);
      toggleNativeDragInteractions(handle, this.disabled);
    }
  }
  withDirection(direction) {
    this._direction = direction;
    return this;
  }
  _withDropContainer(container) {
    this._dropContainer = container;
  }
  getFreeDragPosition() {
    const position = this.isDragging() ? this._activeTransform : this._passiveTransform;
    return {
      x: position.x,
      y: position.y
    };
  }
  setFreeDragPosition(value) {
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform.x = value.x;
    this._passiveTransform.y = value.y;
    if (!this._dropContainer) {
      this._applyRootElementTransform(value.x, value.y);
    }
    return this;
  }
  withPreviewContainer(value) {
    this._previewContainer = value;
    return this;
  }
  _sortFromLastPointerPosition() {
    const position = this._lastKnownPointerPosition;
    if (position && this._dropContainer) {
      this._updateActiveDropContainer(this._getConstrainedPointerPosition(position), position);
    }
  }
  _removeListeners() {
    this._pointerMoveSubscription.unsubscribe();
    this._pointerUpSubscription.unsubscribe();
    this._scrollSubscription.unsubscribe();
    this._cleanupShadowRootSelectStart?.();
    this._cleanupShadowRootSelectStart = void 0;
  }
  _destroyPreview() {
    this._preview?.destroy();
    this._preview = null;
  }
  _destroyPlaceholder() {
    this._anchor?.remove();
    this._placeholder?.remove();
    this._placeholderRef?.destroy();
    this._placeholder = this._anchor = this._placeholderRef = null;
  }
  _pointerDown = (event) => {
    this.beforeStarted.next();
    if (this._handles.length) {
      const targetHandle = this._getTargetHandle(event);
      if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
        this._initializeDragSequence(targetHandle, event);
      }
    } else if (!this.disabled) {
      this._initializeDragSequence(this._rootElement, event);
    }
  };
  _pointerMove = (event) => {
    const pointerPosition = this._getPointerPositionOnPage(event);
    if (!this._hasStartedDragging()) {
      const distanceX = Math.abs(pointerPosition.x - this._pickupPositionOnPage.x);
      const distanceY = Math.abs(pointerPosition.y - this._pickupPositionOnPage.y);
      const isOverThreshold = distanceX + distanceY >= this._config.dragStartThreshold;
      if (isOverThreshold) {
        const isDelayElapsed = Date.now() >= this._dragStartTime + this._getDragStartDelay(event);
        const container = this._dropContainer;
        if (!isDelayElapsed) {
          this._endDragSequence(event);
          return;
        }
        if (!container || !container.isDragging() && !container.isReceiving()) {
          if (event.cancelable) {
            event.preventDefault();
          }
          this._hasStartedDragging.set(true);
          this._ngZone.run(() => this._startDragSequence(event));
        }
      }
      return;
    }
    if (event.cancelable) {
      event.preventDefault();
    }
    const constrainedPointerPosition = this._getConstrainedPointerPosition(pointerPosition);
    this._hasMoved = true;
    this._lastKnownPointerPosition = pointerPosition;
    this._updatePointerDirectionDelta(constrainedPointerPosition);
    if (this._dropContainer) {
      this._updateActiveDropContainer(constrainedPointerPosition, pointerPosition);
    } else {
      const offset = this.constrainPosition ? this._initialDomRect : this._pickupPositionOnPage;
      const activeTransform = this._activeTransform;
      activeTransform.x = constrainedPointerPosition.x - offset.x + this._passiveTransform.x;
      activeTransform.y = constrainedPointerPosition.y - offset.y + this._passiveTransform.y;
      this._applyRootElementTransform(activeTransform.x, activeTransform.y);
    }
    if (this._moveEvents.observers.length) {
      this._ngZone.run(() => {
        this._moveEvents.next({
          source: this,
          pointerPosition: constrainedPointerPosition,
          event,
          distance: this._getDragDistance(constrainedPointerPosition),
          delta: this._pointerDirectionDelta
        });
      });
    }
  };
  _pointerUp = (event) => {
    this._endDragSequence(event);
  };
  _endDragSequence(event) {
    if (!this._dragDropRegistry.isDragging(this)) {
      return;
    }
    this._removeListeners();
    this._dragDropRegistry.stopDragging(this);
    this._toggleNativeDragInteractions();
    if (this._handles) {
      this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
    }
    if (!this._hasStartedDragging()) {
      return;
    }
    this.released.next({
      source: this,
      event
    });
    if (this._dropContainer) {
      this._dropContainer._stopScrolling();
      this._animatePreviewToPlaceholder().then(() => {
        this._cleanupDragArtifacts(event);
        this._cleanupCachedDimensions();
        this._dragDropRegistry.stopDragging(this);
      });
    } else {
      this._passiveTransform.x = this._activeTransform.x;
      const pointerPosition = this._getPointerPositionOnPage(event);
      this._passiveTransform.y = this._activeTransform.y;
      this._ngZone.run(() => {
        this.ended.next({
          source: this,
          distance: this._getDragDistance(pointerPosition),
          dropPoint: pointerPosition,
          event
        });
      });
      this._cleanupCachedDimensions();
      this._dragDropRegistry.stopDragging(this);
    }
  }
  _startDragSequence(event) {
    if (isTouchEvent(event)) {
      this._lastTouchEventTime = Date.now();
    }
    this._toggleNativeDragInteractions();
    const shadowRoot = this._getShadowRoot();
    const dropContainer = this._dropContainer;
    if (shadowRoot) {
      this._ngZone.runOutsideAngular(() => {
        this._cleanupShadowRootSelectStart = this._renderer.listen(shadowRoot, "selectstart", shadowDomSelectStart, activeCapturingEventOptions);
      });
    }
    if (dropContainer) {
      const element = this._rootElement;
      const parent = element.parentNode;
      const placeholder = this._placeholder = this._createPlaceholderElement();
      const marker = this._marker = this._marker || this._document.createComment(typeof ngDevMode === "undefined" || ngDevMode ? "cdk-drag-marker" : "");
      parent.insertBefore(marker, element);
      this._initialTransform = element.style.transform || "";
      this._preview = new PreviewRef(this._document, this._rootElement, this._direction, this._initialDomRect, this._previewTemplate || null, this.previewClass || null, this._pickupPositionOnPage, this._initialTransform, this._config.zIndex || 1e3, this._renderer);
      this._preview.attach(this._getPreviewInsertionPoint(parent, shadowRoot));
      toggleVisibility(element, false, dragImportantProperties);
      this._document.body.appendChild(parent.replaceChild(placeholder, element));
      this.started.next({
        source: this,
        event
      });
      dropContainer.start();
      this._initialContainer = dropContainer;
      this._initialIndex = dropContainer.getItemIndex(this);
    } else {
      this.started.next({
        source: this,
        event
      });
      this._initialContainer = this._initialIndex = void 0;
    }
    this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
  }
  _initializeDragSequence(referenceElement, event) {
    if (this._parentDragRef) {
      event.stopPropagation();
    }
    const isDragging = this.isDragging();
    const isTouchSequence = isTouchEvent(event);
    const isAuxiliaryMouseButton = !isTouchSequence && event.button !== 0;
    const rootElement = this._rootElement;
    const target = _getEventTarget(event);
    const isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime && this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
    const isFakeEvent = isTouchSequence ? isFakeTouchstartFromScreenReader(event) : isFakeMousedownFromScreenReader(event);
    if (target && target.draggable && event.type === "mousedown") {
      event.preventDefault();
    }
    if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent || isFakeEvent) {
      return;
    }
    if (this._handles.length) {
      const rootStyles = rootElement.style;
      this._rootElementTapHighlight = rootStyles.webkitTapHighlightColor || "";
      rootStyles.webkitTapHighlightColor = "transparent";
    }
    this._hasMoved = false;
    this._hasStartedDragging.set(this._hasMoved);
    this._removeListeners();
    this._initialDomRect = this._rootElement.getBoundingClientRect();
    this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
    this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
    this._scrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe((scrollEvent) => this._updateOnScroll(scrollEvent));
    if (this._boundaryElement) {
      this._boundaryRect = getMutableClientRect(this._boundaryElement);
    }
    const previewTemplate = this._previewTemplate;
    this._pickupPositionInElement = previewTemplate && previewTemplate.template && !previewTemplate.matchSize ? {
      x: 0,
      y: 0
    } : this._getPointerPositionInElement(this._initialDomRect, referenceElement, event);
    const pointerPosition = this._pickupPositionOnPage = this._lastKnownPointerPosition = this._getPointerPositionOnPage(event);
    this._pointerDirectionDelta = {
      x: 0,
      y: 0
    };
    this._pointerPositionAtLastDirectionChange = {
      x: pointerPosition.x,
      y: pointerPosition.y
    };
    this._dragStartTime = Date.now();
    this._dragDropRegistry.startDragging(this, event);
  }
  _cleanupDragArtifacts(event) {
    toggleVisibility(this._rootElement, true, dragImportantProperties);
    this._marker.parentNode.replaceChild(this._rootElement, this._marker);
    this._destroyPreview();
    this._destroyPlaceholder();
    this._initialDomRect = this._boundaryRect = this._previewRect = this._initialTransform = void 0;
    this._ngZone.run(() => {
      const container = this._dropContainer;
      const currentIndex = container.getItemIndex(this);
      const pointerPosition = this._getPointerPositionOnPage(event);
      const distance = this._getDragDistance(pointerPosition);
      const isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);
      this.ended.next({
        source: this,
        distance,
        dropPoint: pointerPosition,
        event
      });
      this.dropped.next({
        item: this,
        currentIndex,
        previousIndex: this._initialIndex,
        container,
        previousContainer: this._initialContainer,
        isPointerOverContainer,
        distance,
        dropPoint: pointerPosition,
        event
      });
      container.drop(this, currentIndex, this._initialIndex, this._initialContainer, isPointerOverContainer, distance, pointerPosition, event);
      this._dropContainer = this._initialContainer;
    });
  }
  _updateActiveDropContainer({
    x,
    y
  }, {
    x: rawX,
    y: rawY
  }) {
    let newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y);
    if (!newContainer && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(x, y)) {
      newContainer = this._initialContainer;
    }
    if (newContainer && newContainer !== this._dropContainer) {
      this._ngZone.run(() => {
        const exitIndex = this._dropContainer.getItemIndex(this);
        const nextItemElement = this._dropContainer.getItemAtIndex(exitIndex + 1)?.getVisibleElement() || null;
        this.exited.next({
          item: this,
          container: this._dropContainer
        });
        this._dropContainer.exit(this);
        this._conditionallyInsertAnchor(newContainer, this._dropContainer, nextItemElement);
        this._dropContainer = newContainer;
        this._dropContainer.enter(this, x, y, newContainer === this._initialContainer && newContainer.sortingDisabled ? this._initialIndex : void 0);
        this.entered.next({
          item: this,
          container: newContainer,
          currentIndex: newContainer.getItemIndex(this)
        });
      });
    }
    if (this.isDragging()) {
      this._dropContainer._startScrollingIfNecessary(rawX, rawY);
      this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);
      if (this.constrainPosition) {
        this._applyPreviewTransform(x, y);
      } else {
        this._applyPreviewTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
      }
    }
  }
  _animatePreviewToPlaceholder() {
    if (!this._hasMoved) {
      return Promise.resolve();
    }
    const placeholderRect = this._placeholder.getBoundingClientRect();
    this._preview.addClass("cdk-drag-animating");
    this._applyPreviewTransform(placeholderRect.left, placeholderRect.top);
    const duration = this._preview.getTransitionDuration();
    if (duration === 0) {
      return Promise.resolve();
    }
    return this._ngZone.runOutsideAngular(() => {
      return new Promise((resolve) => {
        const handler = (event) => {
          if (!event || this._preview && _getEventTarget(event) === this._preview.element && event.propertyName === "transform") {
            cleanupListener();
            resolve();
            clearTimeout(timeout);
          }
        };
        const timeout = setTimeout(handler, duration * 1.5);
        const cleanupListener = this._preview.addEventListener("transitionend", handler);
      });
    });
  }
  _createPlaceholderElement() {
    const placeholderConfig = this._placeholderTemplate;
    const placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
    let placeholder;
    if (placeholderTemplate) {
      this._placeholderRef = placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate, placeholderConfig.context);
      this._placeholderRef.detectChanges();
      placeholder = getRootNode(this._placeholderRef, this._document);
    } else {
      placeholder = deepCloneNode(this._rootElement);
    }
    placeholder.style.pointerEvents = "none";
    placeholder.classList.add(PLACEHOLDER_CLASS);
    return placeholder;
  }
  _getPointerPositionInElement(elementRect, referenceElement, event) {
    const handleElement = referenceElement === this._rootElement ? null : referenceElement;
    const referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
    const point = isTouchEvent(event) ? event.targetTouches[0] : event;
    const scrollPosition = this._getViewportScrollPosition();
    const x = point.pageX - referenceRect.left - scrollPosition.left;
    const y = point.pageY - referenceRect.top - scrollPosition.top;
    return {
      x: referenceRect.left - elementRect.left + x,
      y: referenceRect.top - elementRect.top + y
    };
  }
  _getPointerPositionOnPage(event) {
    const scrollPosition = this._getViewportScrollPosition();
    const point = isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] || {
      pageX: 0,
      pageY: 0
    } : event;
    const x = point.pageX - scrollPosition.left;
    const y = point.pageY - scrollPosition.top;
    if (this._ownerSVGElement) {
      const svgMatrix = this._ownerSVGElement.getScreenCTM();
      if (svgMatrix) {
        const svgPoint = this._ownerSVGElement.createSVGPoint();
        svgPoint.x = x;
        svgPoint.y = y;
        return svgPoint.matrixTransform(svgMatrix.inverse());
      }
    }
    return {
      x,
      y
    };
  }
  _getConstrainedPointerPosition(point) {
    const dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
    let {
      x,
      y
    } = this.constrainPosition ? this.constrainPosition(point, this, this._initialDomRect, this._pickupPositionInElement) : point;
    if (this.lockAxis === "x" || dropContainerLock === "x") {
      y = this._pickupPositionOnPage.y - (this.constrainPosition ? this._pickupPositionInElement.y : 0);
    } else if (this.lockAxis === "y" || dropContainerLock === "y") {
      x = this._pickupPositionOnPage.x - (this.constrainPosition ? this._pickupPositionInElement.x : 0);
    }
    if (this._boundaryRect) {
      const {
        x: pickupX,
        y: pickupY
      } = !this.constrainPosition ? this._pickupPositionInElement : {
        x: 0,
        y: 0
      };
      const boundaryRect = this._boundaryRect;
      const {
        width: previewWidth,
        height: previewHeight
      } = this._getPreviewRect();
      const minY = boundaryRect.top + pickupY;
      const maxY = boundaryRect.bottom - (previewHeight - pickupY);
      const minX = boundaryRect.left + pickupX;
      const maxX = boundaryRect.right - (previewWidth - pickupX);
      x = clamp$1(x, minX, maxX);
      y = clamp$1(y, minY, maxY);
    }
    return {
      x,
      y
    };
  }
  _updatePointerDirectionDelta(pointerPositionOnPage) {
    const {
      x,
      y
    } = pointerPositionOnPage;
    const delta = this._pointerDirectionDelta;
    const positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
    const changeX = Math.abs(x - positionSinceLastChange.x);
    const changeY = Math.abs(y - positionSinceLastChange.y);
    if (changeX > this._config.pointerDirectionChangeThreshold) {
      delta.x = x > positionSinceLastChange.x ? 1 : -1;
      positionSinceLastChange.x = x;
    }
    if (changeY > this._config.pointerDirectionChangeThreshold) {
      delta.y = y > positionSinceLastChange.y ? 1 : -1;
      positionSinceLastChange.y = y;
    }
    return delta;
  }
  _toggleNativeDragInteractions() {
    if (!this._rootElement || !this._handles) {
      return;
    }
    const shouldEnable = this._handles.length > 0 || !this.isDragging();
    if (shouldEnable !== this._nativeInteractionsEnabled) {
      this._nativeInteractionsEnabled = shouldEnable;
      toggleNativeDragInteractions(this._rootElement, shouldEnable);
    }
  }
  _removeRootElementListeners() {
    this._rootElementCleanups?.forEach((cleanup) => cleanup());
    this._rootElementCleanups = void 0;
  }
  _applyRootElementTransform(x, y) {
    const scale = 1 / this.scale;
    const transform = getTransform(x * scale, y * scale);
    const styles = this._rootElement.style;
    if (this._initialTransform == null) {
      this._initialTransform = styles.transform && styles.transform != "none" ? styles.transform : "";
    }
    styles.transform = combineTransforms(transform, this._initialTransform);
  }
  _applyPreviewTransform(x, y) {
    const initialTransform = this._previewTemplate?.template ? void 0 : this._initialTransform;
    const transform = getTransform(x, y);
    this._preview.setTransform(combineTransforms(transform, initialTransform));
  }
  _getDragDistance(currentPosition) {
    const pickupPosition = this._pickupPositionOnPage;
    if (pickupPosition) {
      return {
        x: currentPosition.x - pickupPosition.x,
        y: currentPosition.y - pickupPosition.y
      };
    }
    return {
      x: 0,
      y: 0
    };
  }
  _cleanupCachedDimensions() {
    this._boundaryRect = this._previewRect = void 0;
    this._parentPositions.clear();
  }
  _containInsideBoundaryOnResize() {
    let {
      x,
      y
    } = this._passiveTransform;
    if (x === 0 && y === 0 || this.isDragging() || !this._boundaryElement) {
      return;
    }
    const elementRect = this._rootElement.getBoundingClientRect();
    const boundaryRect = this._boundaryElement.getBoundingClientRect();
    if (boundaryRect.width === 0 && boundaryRect.height === 0 || elementRect.width === 0 && elementRect.height === 0) {
      return;
    }
    const leftOverflow = boundaryRect.left - elementRect.left;
    const rightOverflow = elementRect.right - boundaryRect.right;
    const topOverflow = boundaryRect.top - elementRect.top;
    const bottomOverflow = elementRect.bottom - boundaryRect.bottom;
    if (boundaryRect.width > elementRect.width) {
      if (leftOverflow > 0) {
        x += leftOverflow;
      }
      if (rightOverflow > 0) {
        x -= rightOverflow;
      }
    } else {
      x = 0;
    }
    if (boundaryRect.height > elementRect.height) {
      if (topOverflow > 0) {
        y += topOverflow;
      }
      if (bottomOverflow > 0) {
        y -= bottomOverflow;
      }
    } else {
      y = 0;
    }
    if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
      this.setFreeDragPosition({
        y,
        x
      });
    }
  }
  _getDragStartDelay(event) {
    const value = this.dragStartDelay;
    if (typeof value === "number") {
      return value;
    } else if (isTouchEvent(event)) {
      return value.touch;
    }
    return value ? value.mouse : 0;
  }
  _updateOnScroll(event) {
    const scrollDifference = this._parentPositions.handleScroll(event);
    if (scrollDifference) {
      const target = _getEventTarget(event);
      if (this._boundaryRect && target !== this._boundaryElement && target.contains(this._boundaryElement)) {
        adjustDomRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
      }
      this._pickupPositionOnPage.x += scrollDifference.left;
      this._pickupPositionOnPage.y += scrollDifference.top;
      if (!this._dropContainer) {
        this._activeTransform.x -= scrollDifference.left;
        this._activeTransform.y -= scrollDifference.top;
        this._applyRootElementTransform(this._activeTransform.x, this._activeTransform.y);
      }
    }
  }
  _getViewportScrollPosition() {
    return this._parentPositions.positions.get(this._document)?.scrollPosition || this._parentPositions.getViewportScrollPosition();
  }
  _getShadowRoot() {
    if (this._cachedShadowRoot === void 0) {
      this._cachedShadowRoot = _getShadowRoot(this._rootElement);
    }
    return this._cachedShadowRoot;
  }
  _getPreviewInsertionPoint(initialParent, shadowRoot) {
    const previewContainer = this._previewContainer || "global";
    if (previewContainer === "parent") {
      return initialParent;
    }
    if (previewContainer === "global") {
      const documentRef = this._document;
      return shadowRoot || documentRef.fullscreenElement || documentRef.webkitFullscreenElement || documentRef.mozFullScreenElement || documentRef.msFullscreenElement || documentRef.body;
    }
    return coerceElement(previewContainer);
  }
  _getPreviewRect() {
    if (!this._previewRect || !this._previewRect.width && !this._previewRect.height) {
      this._previewRect = this._preview ? this._preview.getBoundingClientRect() : this._initialDomRect;
    }
    return this._previewRect;
  }
  _nativeDragStart = (event) => {
    if (this._handles.length) {
      const targetHandle = this._getTargetHandle(event);
      if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
        event.preventDefault();
      }
    } else if (!this.disabled) {
      event.preventDefault();
    }
  };
  _getTargetHandle(event) {
    return this._handles.find((handle) => {
      return event.target && (event.target === handle || handle.contains(event.target));
    });
  }
  _conditionallyInsertAnchor(newContainer, exitContainer, nextItemElement) {
    if (newContainer === this._initialContainer) {
      this._anchor?.remove();
      this._anchor = null;
    } else if (exitContainer === this._initialContainer && exitContainer.hasAnchor) {
      const anchor = this._anchor ??= deepCloneNode(this._placeholder);
      anchor.classList.remove(PLACEHOLDER_CLASS);
      anchor.classList.add("cdk-drag-anchor");
      anchor.style.transform = "";
      if (nextItemElement) {
        nextItemElement.before(anchor);
      } else {
        coerceElement(exitContainer.element).appendChild(anchor);
      }
    }
  }
};
function clamp$1(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
function isTouchEvent(event) {
  return event.type[0] === "t";
}
function shadowDomSelectStart(event) {
  event.preventDefault();
}
function moveItemInArray(array, fromIndex, toIndex) {
  const from = clamp(fromIndex, array.length - 1);
  const to = clamp(toIndex, array.length - 1);
  if (from === to) {
    return;
  }
  const target = array[from];
  const delta = to < from ? -1 : 1;
  for (let i = from; i !== to; i += delta) {
    array[i] = array[i + delta];
  }
  array[to] = target;
}
function clamp(value, max) {
  return Math.max(0, Math.min(max, value));
}
var SingleAxisSortStrategy = class {
  _dragDropRegistry;
  _element;
  _sortPredicate;
  _itemPositions = [];
  _activeDraggables;
  orientation = "vertical";
  direction = "ltr";
  constructor(_dragDropRegistry) {
    this._dragDropRegistry = _dragDropRegistry;
  }
  _previousSwap = {
    drag: null,
    delta: 0,
    overlaps: false
  };
  start(items) {
    this.withItems(items);
  }
  sort(item, pointerX, pointerY, pointerDelta) {
    const siblings = this._itemPositions;
    const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
    if (newIndex === -1 && siblings.length > 0) {
      return null;
    }
    const isHorizontal = this.orientation === "horizontal";
    const currentIndex = siblings.findIndex((currentItem) => currentItem.drag === item);
    const siblingAtNewPosition = siblings[newIndex];
    const currentPosition = siblings[currentIndex].clientRect;
    const newPosition = siblingAtNewPosition.clientRect;
    const delta = currentIndex > newIndex ? 1 : -1;
    const itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
    const siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
    const oldOrder = siblings.slice();
    moveItemInArray(siblings, currentIndex, newIndex);
    siblings.forEach((sibling, index) => {
      if (oldOrder[index] === sibling) {
        return;
      }
      const isDraggedItem = sibling.drag === item;
      const offset = isDraggedItem ? itemOffset : siblingOffset;
      const elementToOffset = isDraggedItem ? item.getPlaceholderElement() : sibling.drag.getRootElement();
      sibling.offset += offset;
      const transformAmount = Math.round(sibling.offset * (1 / sibling.drag.scale));
      if (isHorizontal) {
        elementToOffset.style.transform = combineTransforms(`translate3d(${transformAmount}px, 0, 0)`, sibling.initialTransform);
        adjustDomRect(sibling.clientRect, 0, offset);
      } else {
        elementToOffset.style.transform = combineTransforms(`translate3d(0, ${transformAmount}px, 0)`, sibling.initialTransform);
        adjustDomRect(sibling.clientRect, offset, 0);
      }
    });
    this._previousSwap.overlaps = isInsideClientRect(newPosition, pointerX, pointerY);
    this._previousSwap.drag = siblingAtNewPosition.drag;
    this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
    return {
      previousIndex: currentIndex,
      currentIndex: newIndex
    };
  }
  enter(item, pointerX, pointerY, index) {
    const activeDraggables = this._activeDraggables;
    const currentIndex = activeDraggables.indexOf(item);
    const placeholder = item.getPlaceholderElement();
    if (currentIndex > -1) {
      activeDraggables.splice(currentIndex, 1);
    }
    const newIndex = index == null || index < 0 ? this._getItemIndexFromPointerPosition(item, pointerX, pointerY) : index;
    let newPositionReference = activeDraggables[newIndex];
    if (newPositionReference === item) {
      newPositionReference = activeDraggables[newIndex + 1];
    }
    if (!newPositionReference && (newIndex == null || newIndex === -1 || newIndex < activeDraggables.length - 1) && this._shouldEnterAsFirstChild(pointerX, pointerY)) {
      newPositionReference = activeDraggables[0];
    }
    if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
      const element = newPositionReference.getRootElement();
      element.parentElement.insertBefore(placeholder, element);
      activeDraggables.splice(newIndex, 0, item);
    } else {
      this._element.appendChild(placeholder);
      activeDraggables.push(item);
    }
    placeholder.style.transform = "";
    this._cacheItemPositions();
  }
  withItems(items) {
    this._activeDraggables = items.slice();
    this._cacheItemPositions();
  }
  withSortPredicate(predicate) {
    this._sortPredicate = predicate;
  }
  reset() {
    this._activeDraggables?.forEach((item) => {
      const rootElement = item.getRootElement();
      if (rootElement) {
        const initialTransform = this._itemPositions.find((p2) => p2.drag === item)?.initialTransform;
        rootElement.style.transform = initialTransform || "";
      }
    });
    this._itemPositions = [];
    this._activeDraggables = [];
    this._previousSwap.drag = null;
    this._previousSwap.delta = 0;
    this._previousSwap.overlaps = false;
  }
  getActiveItemsSnapshot() {
    return this._activeDraggables;
  }
  getItemIndex(item) {
    return this._getVisualItemPositions().findIndex((currentItem) => currentItem.drag === item);
  }
  getItemAtIndex(index) {
    return this._getVisualItemPositions()[index]?.drag || null;
  }
  updateOnScroll(topDifference, leftDifference) {
    this._itemPositions.forEach(({
      clientRect
    }) => {
      adjustDomRect(clientRect, topDifference, leftDifference);
    });
    this._itemPositions.forEach(({
      drag
    }) => {
      if (this._dragDropRegistry.isDragging(drag)) {
        drag._sortFromLastPointerPosition();
      }
    });
  }
  withElementContainer(container) {
    this._element = container;
  }
  _cacheItemPositions() {
    const isHorizontal = this.orientation === "horizontal";
    this._itemPositions = this._activeDraggables.map((drag) => {
      const elementToMeasure = drag.getVisibleElement();
      return {
        drag,
        offset: 0,
        initialTransform: elementToMeasure.style.transform || "",
        clientRect: getMutableClientRect(elementToMeasure)
      };
    }).sort((a, b) => {
      return isHorizontal ? a.clientRect.left - b.clientRect.left : a.clientRect.top - b.clientRect.top;
    });
  }
  _getVisualItemPositions() {
    return this.orientation === "horizontal" && this.direction === "rtl" ? this._itemPositions.slice().reverse() : this._itemPositions;
  }
  _getItemOffsetPx(currentPosition, newPosition, delta) {
    const isHorizontal = this.orientation === "horizontal";
    let itemOffset = isHorizontal ? newPosition.left - currentPosition.left : newPosition.top - currentPosition.top;
    if (delta === -1) {
      itemOffset += isHorizontal ? newPosition.width - currentPosition.width : newPosition.height - currentPosition.height;
    }
    return itemOffset;
  }
  _getSiblingOffsetPx(currentIndex, siblings, delta) {
    const isHorizontal = this.orientation === "horizontal";
    const currentPosition = siblings[currentIndex].clientRect;
    const immediateSibling = siblings[currentIndex + delta * -1];
    let siblingOffset = currentPosition[isHorizontal ? "width" : "height"] * delta;
    if (immediateSibling) {
      const start = isHorizontal ? "left" : "top";
      const end = isHorizontal ? "right" : "bottom";
      if (delta === -1) {
        siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
      } else {
        siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
      }
    }
    return siblingOffset;
  }
  _shouldEnterAsFirstChild(pointerX, pointerY) {
    if (!this._activeDraggables.length) {
      return false;
    }
    const itemPositions = this._itemPositions;
    const isHorizontal = this.orientation === "horizontal";
    const reversed = itemPositions[0].drag !== this._activeDraggables[0];
    if (reversed) {
      const lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
      return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
    } else {
      const firstItemRect = itemPositions[0].clientRect;
      return isHorizontal ? pointerX <= firstItemRect.left : pointerY <= firstItemRect.top;
    }
  }
  _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
    const isHorizontal = this.orientation === "horizontal";
    const index = this._itemPositions.findIndex(({
      drag,
      clientRect
    }) => {
      if (drag === item) {
        return false;
      }
      if (delta) {
        const direction = isHorizontal ? delta.x : delta.y;
        if (drag === this._previousSwap.drag && this._previousSwap.overlaps && direction === this._previousSwap.delta) {
          return false;
        }
      }
      return isHorizontal ? pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right) : pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
    });
    return index === -1 || !this._sortPredicate(index, item) ? -1 : index;
  }
};
var MixedSortStrategy = class {
  _document;
  _dragDropRegistry;
  _element;
  _sortPredicate;
  _rootNode;
  _activeItems;
  _previousSwap = {
    drag: null,
    deltaX: 0,
    deltaY: 0,
    overlaps: false
  };
  _relatedNodes = [];
  constructor(_document, _dragDropRegistry) {
    this._document = _document;
    this._dragDropRegistry = _dragDropRegistry;
  }
  start(items) {
    const childNodes = this._element.childNodes;
    this._relatedNodes = [];
    for (let i = 0; i < childNodes.length; i++) {
      const node = childNodes[i];
      this._relatedNodes.push([node, node.nextSibling]);
    }
    this.withItems(items);
  }
  sort(item, pointerX, pointerY, pointerDelta) {
    const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
    const previousSwap = this._previousSwap;
    if (newIndex === -1 || this._activeItems[newIndex] === item) {
      return null;
    }
    const toSwapWith = this._activeItems[newIndex];
    if (previousSwap.drag === toSwapWith && previousSwap.overlaps && previousSwap.deltaX === pointerDelta.x && previousSwap.deltaY === pointerDelta.y) {
      return null;
    }
    const previousIndex = this.getItemIndex(item);
    const current = item.getPlaceholderElement();
    const overlapElement = toSwapWith.getRootElement();
    if (newIndex > previousIndex) {
      overlapElement.after(current);
    } else {
      overlapElement.before(current);
    }
    moveItemInArray(this._activeItems, previousIndex, newIndex);
    const newOverlapElement = this._getRootNode().elementFromPoint(pointerX, pointerY);
    previousSwap.deltaX = pointerDelta.x;
    previousSwap.deltaY = pointerDelta.y;
    previousSwap.drag = toSwapWith;
    previousSwap.overlaps = overlapElement === newOverlapElement || overlapElement.contains(newOverlapElement);
    return {
      previousIndex,
      currentIndex: newIndex
    };
  }
  enter(item, pointerX, pointerY, index) {
    const currentIndex = this._activeItems.indexOf(item);
    if (currentIndex > -1) {
      this._activeItems.splice(currentIndex, 1);
    }
    let enterIndex = index == null || index < 0 ? this._getItemIndexFromPointerPosition(item, pointerX, pointerY) : index;
    if (enterIndex === -1) {
      enterIndex = this._getClosestItemIndexToPointer(item, pointerX, pointerY);
    }
    const targetItem = this._activeItems[enterIndex];
    if (targetItem && !this._dragDropRegistry.isDragging(targetItem)) {
      this._activeItems.splice(enterIndex, 0, item);
      targetItem.getRootElement().before(item.getPlaceholderElement());
    } else {
      this._activeItems.push(item);
      this._element.appendChild(item.getPlaceholderElement());
    }
  }
  withItems(items) {
    this._activeItems = items.slice();
  }
  withSortPredicate(predicate) {
    this._sortPredicate = predicate;
  }
  reset() {
    const root = this._element;
    const previousSwap = this._previousSwap;
    for (let i = this._relatedNodes.length - 1; i > -1; i--) {
      const [node, nextSibling] = this._relatedNodes[i];
      if (node.parentNode === root && node.nextSibling !== nextSibling) {
        if (nextSibling === null) {
          root.appendChild(node);
        } else if (nextSibling.parentNode === root) {
          root.insertBefore(node, nextSibling);
        }
      }
    }
    this._relatedNodes = [];
    this._activeItems = [];
    previousSwap.drag = null;
    previousSwap.deltaX = previousSwap.deltaY = 0;
    previousSwap.overlaps = false;
  }
  getActiveItemsSnapshot() {
    return this._activeItems;
  }
  getItemIndex(item) {
    return this._activeItems.indexOf(item);
  }
  getItemAtIndex(index) {
    return this._activeItems[index] || null;
  }
  updateOnScroll() {
    this._activeItems.forEach((item) => {
      if (this._dragDropRegistry.isDragging(item)) {
        item._sortFromLastPointerPosition();
      }
    });
  }
  withElementContainer(container) {
    if (container !== this._element) {
      this._element = container;
      this._rootNode = void 0;
    }
  }
  _getItemIndexFromPointerPosition(item, pointerX, pointerY) {
    const elementAtPoint = this._getRootNode().elementFromPoint(Math.floor(pointerX), Math.floor(pointerY));
    const index = elementAtPoint ? this._activeItems.findIndex((item2) => {
      const root = item2.getRootElement();
      return elementAtPoint === root || root.contains(elementAtPoint);
    }) : -1;
    return index === -1 || !this._sortPredicate(index, item) ? -1 : index;
  }
  _getRootNode() {
    if (!this._rootNode) {
      this._rootNode = _getShadowRoot(this._element) || this._document;
    }
    return this._rootNode;
  }
  _getClosestItemIndexToPointer(item, pointerX, pointerY) {
    if (this._activeItems.length === 0) {
      return -1;
    }
    if (this._activeItems.length === 1) {
      return 0;
    }
    let minDistance = Infinity;
    let minIndex = -1;
    for (let i = 0; i < this._activeItems.length; i++) {
      const current = this._activeItems[i];
      if (current !== item) {
        const {
          x,
          y
        } = current.getRootElement().getBoundingClientRect();
        const distance = Math.hypot(pointerX - x, pointerY - y);
        if (distance < minDistance) {
          minDistance = distance;
          minIndex = i;
        }
      }
    }
    return minIndex;
  }
};
var DROP_PROXIMITY_THRESHOLD = 0.05;
var SCROLL_PROXIMITY_THRESHOLD = 0.05;
var AutoScrollVerticalDirection;
(function(AutoScrollVerticalDirection2) {
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["NONE"] = 0] = "NONE";
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["UP"] = 1] = "UP";
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["DOWN"] = 2] = "DOWN";
})(AutoScrollVerticalDirection || (AutoScrollVerticalDirection = {}));
var AutoScrollHorizontalDirection;
(function(AutoScrollHorizontalDirection2) {
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["NONE"] = 0] = "NONE";
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["LEFT"] = 1] = "LEFT";
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["RIGHT"] = 2] = "RIGHT";
})(AutoScrollHorizontalDirection || (AutoScrollHorizontalDirection = {}));
function createDropListRef(injector, element) {
  return new DropListRef(element, injector.get(DragDropRegistry), injector.get(DOCUMENT), injector.get(NgZone), injector.get(ViewportRuler));
}
var DropListRef = class {
  _dragDropRegistry;
  _ngZone;
  _viewportRuler;
  element;
  disabled = false;
  sortingDisabled = false;
  lockAxis = null;
  autoScrollDisabled = false;
  autoScrollStep = 2;
  hasAnchor = false;
  enterPredicate = () => true;
  sortPredicate = () => true;
  beforeStarted = new Subject();
  entered = new Subject();
  exited = new Subject();
  dropped = new Subject();
  sorted = new Subject();
  receivingStarted = new Subject();
  receivingStopped = new Subject();
  data;
  _container;
  _isDragging = false;
  _parentPositions;
  _sortStrategy;
  _domRect;
  _draggables = [];
  _siblings = [];
  _activeSiblings = /* @__PURE__ */ new Set();
  _viewportScrollSubscription = Subscription.EMPTY;
  _verticalScrollDirection = AutoScrollVerticalDirection.NONE;
  _horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
  _scrollNode;
  _stopScrollTimers = new Subject();
  _cachedShadowRoot = null;
  _document;
  _scrollableElements = [];
  _initialScrollSnap;
  _direction = "ltr";
  constructor(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
    this._dragDropRegistry = _dragDropRegistry;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    const coercedElement = this.element = coerceElement(element);
    this._document = _document;
    this.withOrientation("vertical").withElementContainer(coercedElement);
    _dragDropRegistry.registerDropContainer(this);
    this._parentPositions = new ParentPositionTracker(_document);
  }
  dispose() {
    this._stopScrolling();
    this._stopScrollTimers.complete();
    this._viewportScrollSubscription.unsubscribe();
    this.beforeStarted.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this.sorted.complete();
    this.receivingStarted.complete();
    this.receivingStopped.complete();
    this._activeSiblings.clear();
    this._scrollNode = null;
    this._parentPositions.clear();
    this._dragDropRegistry.removeDropContainer(this);
  }
  isDragging() {
    return this._isDragging;
  }
  start() {
    this._draggingStarted();
    this._notifyReceivingSiblings();
  }
  enter(item, pointerX, pointerY, index) {
    this._draggingStarted();
    if (index == null && this.sortingDisabled) {
      index = this._draggables.indexOf(item);
    }
    this._sortStrategy.enter(item, pointerX, pointerY, index);
    this._cacheParentPositions();
    this._notifyReceivingSiblings();
    this.entered.next({
      item,
      container: this,
      currentIndex: this.getItemIndex(item)
    });
  }
  exit(item) {
    this._reset();
    this.exited.next({
      item,
      container: this
    });
  }
  drop(item, currentIndex, previousIndex, previousContainer, isPointerOverContainer, distance, dropPoint, event = {}) {
    this._reset();
    this.dropped.next({
      item,
      currentIndex,
      previousIndex,
      container: this,
      previousContainer,
      isPointerOverContainer,
      distance,
      dropPoint,
      event
    });
  }
  withItems(items) {
    const previousItems = this._draggables;
    this._draggables = items;
    items.forEach((item) => item._withDropContainer(this));
    if (this.isDragging()) {
      const draggedItems = previousItems.filter((item) => item.isDragging());
      if (draggedItems.every((item) => items.indexOf(item) === -1)) {
        this._reset();
      } else {
        this._sortStrategy.withItems(this._draggables);
      }
    }
    return this;
  }
  withDirection(direction) {
    this._direction = direction;
    if (this._sortStrategy instanceof SingleAxisSortStrategy) {
      this._sortStrategy.direction = direction;
    }
    return this;
  }
  connectedTo(connectedTo) {
    this._siblings = connectedTo.slice();
    return this;
  }
  withOrientation(orientation) {
    if (orientation === "mixed") {
      this._sortStrategy = new MixedSortStrategy(this._document, this._dragDropRegistry);
    } else {
      const strategy = new SingleAxisSortStrategy(this._dragDropRegistry);
      strategy.direction = this._direction;
      strategy.orientation = orientation;
      this._sortStrategy = strategy;
    }
    this._sortStrategy.withElementContainer(this._container);
    this._sortStrategy.withSortPredicate((index, item) => this.sortPredicate(index, item, this));
    return this;
  }
  withScrollableParents(elements) {
    const element = this._container;
    this._scrollableElements = elements.indexOf(element) === -1 ? [element, ...elements] : elements.slice();
    return this;
  }
  withElementContainer(container) {
    if (container === this._container) {
      return this;
    }
    const element = coerceElement(this.element);
    if ((typeof ngDevMode === "undefined" || ngDevMode) && container !== element && !element.contains(container)) {
      throw new Error("Invalid DOM structure for drop list. Alternate container element must be a descendant of the drop list.");
    }
    const oldContainerIndex = this._scrollableElements.indexOf(this._container);
    const newContainerIndex = this._scrollableElements.indexOf(container);
    if (oldContainerIndex > -1) {
      this._scrollableElements.splice(oldContainerIndex, 1);
    }
    if (newContainerIndex > -1) {
      this._scrollableElements.splice(newContainerIndex, 1);
    }
    if (this._sortStrategy) {
      this._sortStrategy.withElementContainer(container);
    }
    this._cachedShadowRoot = null;
    this._scrollableElements.unshift(container);
    this._container = container;
    return this;
  }
  getScrollableParents() {
    return this._scrollableElements;
  }
  getItemIndex(item) {
    return this._isDragging ? this._sortStrategy.getItemIndex(item) : this._draggables.indexOf(item);
  }
  getItemAtIndex(index) {
    return this._isDragging ? this._sortStrategy.getItemAtIndex(index) : this._draggables[index] || null;
  }
  isReceiving() {
    return this._activeSiblings.size > 0;
  }
  _sortItem(item, pointerX, pointerY, pointerDelta) {
    if (this.sortingDisabled || !this._domRect || !isPointerNearDomRect(this._domRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
      return;
    }
    const result = this._sortStrategy.sort(item, pointerX, pointerY, pointerDelta);
    if (result) {
      this.sorted.next({
        previousIndex: result.previousIndex,
        currentIndex: result.currentIndex,
        container: this,
        item
      });
    }
  }
  _startScrollingIfNecessary(pointerX, pointerY) {
    if (this.autoScrollDisabled) {
      return;
    }
    let scrollNode;
    let verticalScrollDirection = AutoScrollVerticalDirection.NONE;
    let horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
    this._parentPositions.positions.forEach((position, element) => {
      if (element === this._document || !position.clientRect || scrollNode) {
        return;
      }
      if (isPointerNearDomRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
        [verticalScrollDirection, horizontalScrollDirection] = getElementScrollDirections(element, position.clientRect, this._direction, pointerX, pointerY);
        if (verticalScrollDirection || horizontalScrollDirection) {
          scrollNode = element;
        }
      }
    });
    if (!verticalScrollDirection && !horizontalScrollDirection) {
      const {
        width,
        height
      } = this._viewportRuler.getViewportSize();
      const domRect = {
        width,
        height,
        top: 0,
        right: width,
        bottom: height,
        left: 0
      };
      verticalScrollDirection = getVerticalScrollDirection(domRect, pointerY);
      horizontalScrollDirection = getHorizontalScrollDirection(domRect, pointerX);
      scrollNode = window;
    }
    if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection || horizontalScrollDirection !== this._horizontalScrollDirection || scrollNode !== this._scrollNode)) {
      this._verticalScrollDirection = verticalScrollDirection;
      this._horizontalScrollDirection = horizontalScrollDirection;
      this._scrollNode = scrollNode;
      if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
        this._ngZone.runOutsideAngular(this._startScrollInterval);
      } else {
        this._stopScrolling();
      }
    }
  }
  _stopScrolling() {
    this._stopScrollTimers.next();
  }
  _draggingStarted() {
    const styles = this._container.style;
    this.beforeStarted.next();
    this._isDragging = true;
    if ((typeof ngDevMode === "undefined" || ngDevMode) && this._container !== coerceElement(this.element)) {
      for (const drag of this._draggables) {
        if (!drag.isDragging() && drag.getVisibleElement().parentNode !== this._container) {
          throw new Error("Invalid DOM structure for drop list. All items must be placed directly inside of the element container.");
        }
      }
    }
    this._initialScrollSnap = styles.msScrollSnapType || styles.scrollSnapType || "";
    styles.scrollSnapType = styles.msScrollSnapType = "none";
    this._sortStrategy.start(this._draggables);
    this._cacheParentPositions();
    this._viewportScrollSubscription.unsubscribe();
    this._listenToScrollEvents();
  }
  _cacheParentPositions() {
    this._parentPositions.cache(this._scrollableElements);
    this._domRect = this._parentPositions.positions.get(this._container).clientRect;
  }
  _reset() {
    this._isDragging = false;
    const styles = this._container.style;
    styles.scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap;
    this._siblings.forEach((sibling) => sibling._stopReceiving(this));
    this._sortStrategy.reset();
    this._stopScrolling();
    this._viewportScrollSubscription.unsubscribe();
    this._parentPositions.clear();
  }
  _startScrollInterval = () => {
    this._stopScrolling();
    interval(0, animationFrameScheduler).pipe(takeUntil(this._stopScrollTimers)).subscribe(() => {
      const node = this._scrollNode;
      const scrollStep = this.autoScrollStep;
      if (this._verticalScrollDirection === AutoScrollVerticalDirection.UP) {
        node.scrollBy(0, -scrollStep);
      } else if (this._verticalScrollDirection === AutoScrollVerticalDirection.DOWN) {
        node.scrollBy(0, scrollStep);
      }
      if (this._horizontalScrollDirection === AutoScrollHorizontalDirection.LEFT) {
        node.scrollBy(-scrollStep, 0);
      } else if (this._horizontalScrollDirection === AutoScrollHorizontalDirection.RIGHT) {
        node.scrollBy(scrollStep, 0);
      }
    });
  };
  _isOverContainer(x, y) {
    return this._domRect != null && isInsideClientRect(this._domRect, x, y);
  }
  _getSiblingContainerFromPosition(item, x, y) {
    return this._siblings.find((sibling) => sibling._canReceive(item, x, y));
  }
  _canReceive(item, x, y) {
    if (!this._domRect || !isInsideClientRect(this._domRect, x, y) || !this.enterPredicate(item, this)) {
      return false;
    }
    const elementFromPoint = this._getShadowRoot().elementFromPoint(x, y);
    if (!elementFromPoint) {
      return false;
    }
    return elementFromPoint === this._container || this._container.contains(elementFromPoint);
  }
  _startReceiving(sibling, items) {
    const activeSiblings = this._activeSiblings;
    if (!activeSiblings.has(sibling) && items.every((item) => {
      return this.enterPredicate(item, this) || this._draggables.indexOf(item) > -1;
    })) {
      activeSiblings.add(sibling);
      this._cacheParentPositions();
      this._listenToScrollEvents();
      this.receivingStarted.next({
        initiator: sibling,
        receiver: this,
        items
      });
    }
  }
  _stopReceiving(sibling) {
    this._activeSiblings.delete(sibling);
    this._viewportScrollSubscription.unsubscribe();
    this.receivingStopped.next({
      initiator: sibling,
      receiver: this
    });
  }
  _listenToScrollEvents() {
    this._viewportScrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe((event) => {
      if (this.isDragging()) {
        const scrollDifference = this._parentPositions.handleScroll(event);
        if (scrollDifference) {
          this._sortStrategy.updateOnScroll(scrollDifference.top, scrollDifference.left);
        }
      } else if (this.isReceiving()) {
        this._cacheParentPositions();
      }
    });
  }
  _getShadowRoot() {
    if (!this._cachedShadowRoot) {
      const shadowRoot = _getShadowRoot(this._container);
      this._cachedShadowRoot = shadowRoot || this._document;
    }
    return this._cachedShadowRoot;
  }
  _notifyReceivingSiblings() {
    const draggedItems = this._sortStrategy.getActiveItemsSnapshot().filter((item) => item.isDragging());
    this._siblings.forEach((sibling) => sibling._startReceiving(this, draggedItems));
  }
};
function getVerticalScrollDirection(clientRect, pointerY) {
  const {
    top,
    bottom,
    height
  } = clientRect;
  const yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
    return AutoScrollVerticalDirection.UP;
  } else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
    return AutoScrollVerticalDirection.DOWN;
  }
  return AutoScrollVerticalDirection.NONE;
}
function getHorizontalScrollDirection(clientRect, pointerX) {
  const {
    left,
    right,
    width
  } = clientRect;
  const xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
    return AutoScrollHorizontalDirection.LEFT;
  } else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
    return AutoScrollHorizontalDirection.RIGHT;
  }
  return AutoScrollHorizontalDirection.NONE;
}
function getElementScrollDirections(element, clientRect, direction, pointerX, pointerY) {
  const computedVertical = getVerticalScrollDirection(clientRect, pointerY);
  const computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
  let verticalScrollDirection = AutoScrollVerticalDirection.NONE;
  let horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
  if (computedVertical) {
    const scrollTop = element.scrollTop;
    if (computedVertical === AutoScrollVerticalDirection.UP) {
      if (scrollTop > 0) {
        verticalScrollDirection = AutoScrollVerticalDirection.UP;
      }
    } else if (element.scrollHeight - scrollTop > element.clientHeight) {
      verticalScrollDirection = AutoScrollVerticalDirection.DOWN;
    }
  }
  if (computedHorizontal) {
    const scrollLeft = element.scrollLeft;
    if (direction === "rtl") {
      if (computedHorizontal === AutoScrollHorizontalDirection.RIGHT) {
        if (scrollLeft < 0) {
          horizontalScrollDirection = AutoScrollHorizontalDirection.RIGHT;
        }
      } else if (element.scrollWidth + scrollLeft > element.clientWidth) {
        horizontalScrollDirection = AutoScrollHorizontalDirection.LEFT;
      }
    } else {
      if (computedHorizontal === AutoScrollHorizontalDirection.LEFT) {
        if (scrollLeft > 0) {
          horizontalScrollDirection = AutoScrollHorizontalDirection.LEFT;
        }
      } else if (element.scrollWidth - scrollLeft > element.clientWidth) {
        horizontalScrollDirection = AutoScrollHorizontalDirection.RIGHT;
      }
    }
  }
  return [verticalScrollDirection, horizontalScrollDirection];
}
var DragDrop = class _DragDrop {
  _injector = inject(Injector);
  constructor() {
  }
  createDrag(element, config) {
    return createDragRef(this._injector, element, config);
  }
  createDropList(element) {
    return createDropListRef(this._injector, element);
  }
  static \u0275fac = function DragDrop_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DragDrop)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DragDrop,
    factory: _DragDrop.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDrop, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CDK_DRAG_PARENT = new InjectionToken("CDK_DRAG_PARENT");
function assertElementNode(node, name) {
  if (node.nodeType !== 1) {
    throw Error(`${name} must be attached to an element node. Currently attached to "${node.nodeName}".`);
  }
}
var CDK_DRAG_HANDLE = new InjectionToken("CdkDragHandle");
var CdkDragHandle = class _CdkDragHandle {
  element = inject(ElementRef);
  _parentDrag = inject(CDK_DRAG_PARENT, {
    optional: true,
    skipSelf: true
  });
  _dragDropRegistry = inject(DragDropRegistry);
  _stateChanges = new Subject();
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._stateChanges.next(this);
  }
  _disabled = false;
  constructor() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      assertElementNode(this.element.nativeElement, "cdkDragHandle");
    }
    this._parentDrag?._addHandle(this);
  }
  ngAfterViewInit() {
    if (!this._parentDrag) {
      let parent = this.element.nativeElement.parentElement;
      while (parent) {
        const ref = this._dragDropRegistry.getDragDirectiveForNode(parent);
        if (ref) {
          this._parentDrag = ref;
          ref._addHandle(this);
          break;
        }
        parent = parent.parentElement;
      }
    }
  }
  ngOnDestroy() {
    this._parentDrag?._removeHandle(this);
    this._stateChanges.complete();
  }
  static \u0275fac = function CdkDragHandle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDragHandle)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDragHandle,
    selectors: [["", "cdkDragHandle", ""]],
    hostAttrs: [1, "cdk-drag-handle"],
    inputs: {
      disabled: [2, "cdkDragHandleDisabled", "disabled", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DRAG_HANDLE,
      useExisting: _CdkDragHandle
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragHandle, [{
    type: Directive,
    args: [{
      selector: "[cdkDragHandle]",
      host: {
        "class": "cdk-drag-handle"
      },
      providers: [{
        provide: CDK_DRAG_HANDLE,
        useExisting: CdkDragHandle
      }]
    }]
  }], () => [], {
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDragHandleDisabled",
        transform: booleanAttribute
      }]
    }]
  });
})();
var CDK_DRAG_CONFIG = new InjectionToken("CDK_DRAG_CONFIG");
var CDK_DROP_LIST = new InjectionToken("CdkDropList");
var CdkDrag = class _CdkDrag {
  element = inject(ElementRef);
  dropContainer = inject(CDK_DROP_LIST, {
    optional: true,
    skipSelf: true
  });
  _ngZone = inject(NgZone);
  _viewContainerRef = inject(ViewContainerRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _changeDetectorRef = inject(ChangeDetectorRef);
  _selfHandle = inject(CDK_DRAG_HANDLE, {
    optional: true,
    self: true
  });
  _parentDrag = inject(CDK_DRAG_PARENT, {
    optional: true,
    skipSelf: true
  });
  _dragDropRegistry = inject(DragDropRegistry);
  _destroyed = new Subject();
  _handles = new BehaviorSubject([]);
  _previewTemplate = null;
  _placeholderTemplate = null;
  _dragRef;
  data;
  lockAxis = null;
  rootElementSelector;
  boundaryElement;
  dragStartDelay;
  freeDragPosition;
  get disabled() {
    return this._disabled || !!(this.dropContainer && this.dropContainer.disabled);
  }
  set disabled(value) {
    this._disabled = value;
    this._dragRef.disabled = this._disabled;
  }
  _disabled = false;
  constrainPosition;
  previewClass;
  previewContainer;
  scale = 1;
  started = new EventEmitter();
  released = new EventEmitter();
  ended = new EventEmitter();
  entered = new EventEmitter();
  exited = new EventEmitter();
  dropped = new EventEmitter();
  moved = new Observable((observer) => {
    const subscription = this._dragRef.moved.pipe(map((movedEvent) => ({
      source: this,
      pointerPosition: movedEvent.pointerPosition,
      event: movedEvent.event,
      delta: movedEvent.delta,
      distance: movedEvent.distance
    }))).subscribe(observer);
    return () => {
      subscription.unsubscribe();
    };
  });
  _injector = inject(Injector);
  constructor() {
    const dropContainer = this.dropContainer;
    const config = inject(CDK_DRAG_CONFIG, {
      optional: true
    });
    this._dragRef = createDragRef(this._injector, this.element, {
      dragStartThreshold: config && config.dragStartThreshold != null ? config.dragStartThreshold : 5,
      pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ? config.pointerDirectionChangeThreshold : 5,
      zIndex: config?.zIndex
    });
    this._dragRef.data = this;
    this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement, this);
    if (config) {
      this._assignDefaults(config);
    }
    if (dropContainer) {
      dropContainer.addItem(this);
      dropContainer._dropListRef.beforeStarted.pipe(takeUntil(this._destroyed)).subscribe(() => {
        this._dragRef.scale = this.scale;
      });
    }
    this._syncInputs(this._dragRef);
    this._handleEvents(this._dragRef);
  }
  getPlaceholderElement() {
    return this._dragRef.getPlaceholderElement();
  }
  getRootElement() {
    return this._dragRef.getRootElement();
  }
  reset() {
    this._dragRef.reset();
  }
  resetToBoundary() {
    this._dragRef.resetToBoundary();
  }
  getFreeDragPosition() {
    return this._dragRef.getFreeDragPosition();
  }
  setFreeDragPosition(value) {
    this._dragRef.setFreeDragPosition(value);
  }
  ngAfterViewInit() {
    afterNextRender(() => {
      this._updateRootElement();
      this._setupHandlesListener();
      this._dragRef.scale = this.scale;
      if (this.freeDragPosition) {
        this._dragRef.setFreeDragPosition(this.freeDragPosition);
      }
    }, {
      injector: this._injector
    });
  }
  ngOnChanges(changes) {
    const rootSelectorChange = changes["rootElementSelector"];
    const positionChange = changes["freeDragPosition"];
    if (rootSelectorChange && !rootSelectorChange.firstChange) {
      this._updateRootElement();
    }
    this._dragRef.scale = this.scale;
    if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
      this._dragRef.setFreeDragPosition(this.freeDragPosition);
    }
  }
  ngOnDestroy() {
    if (this.dropContainer) {
      this.dropContainer.removeItem(this);
    }
    this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement);
    this._ngZone.runOutsideAngular(() => {
      this._handles.complete();
      this._destroyed.next();
      this._destroyed.complete();
      this._dragRef.dispose();
    });
  }
  _addHandle(handle) {
    const handles = this._handles.getValue();
    handles.push(handle);
    this._handles.next(handles);
  }
  _removeHandle(handle) {
    const handles = this._handles.getValue();
    const index = handles.indexOf(handle);
    if (index > -1) {
      handles.splice(index, 1);
      this._handles.next(handles);
    }
  }
  _setPreviewTemplate(preview) {
    this._previewTemplate = preview;
  }
  _resetPreviewTemplate(preview) {
    if (preview === this._previewTemplate) {
      this._previewTemplate = null;
    }
  }
  _setPlaceholderTemplate(placeholder) {
    this._placeholderTemplate = placeholder;
  }
  _resetPlaceholderTemplate(placeholder) {
    if (placeholder === this._placeholderTemplate) {
      this._placeholderTemplate = null;
    }
  }
  _updateRootElement() {
    const element = this.element.nativeElement;
    let rootElement = element;
    if (this.rootElementSelector) {
      rootElement = element.closest !== void 0 ? element.closest(this.rootElementSelector) : element.parentElement?.closest(this.rootElementSelector);
    }
    if (rootElement && (typeof ngDevMode === "undefined" || ngDevMode)) {
      assertElementNode(rootElement, "cdkDrag");
    }
    this._dragRef.withRootElement(rootElement || element);
  }
  _getBoundaryElement() {
    const boundary = this.boundaryElement;
    if (!boundary) {
      return null;
    }
    if (typeof boundary === "string") {
      return this.element.nativeElement.closest(boundary);
    }
    return coerceElement(boundary);
  }
  _syncInputs(ref) {
    ref.beforeStarted.subscribe(() => {
      if (!ref.isDragging()) {
        const dir = this._dir;
        const dragStartDelay = this.dragStartDelay;
        const placeholder = this._placeholderTemplate ? {
          template: this._placeholderTemplate.templateRef,
          context: this._placeholderTemplate.data,
          viewContainer: this._viewContainerRef
        } : null;
        const preview = this._previewTemplate ? {
          template: this._previewTemplate.templateRef,
          context: this._previewTemplate.data,
          matchSize: this._previewTemplate.matchSize,
          viewContainer: this._viewContainerRef
        } : null;
        ref.disabled = this.disabled;
        ref.lockAxis = this.lockAxis;
        ref.scale = this.scale;
        ref.dragStartDelay = typeof dragStartDelay === "object" && dragStartDelay ? dragStartDelay : coerceNumberProperty(dragStartDelay);
        ref.constrainPosition = this.constrainPosition;
        ref.previewClass = this.previewClass;
        ref.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(placeholder).withPreviewTemplate(preview).withPreviewContainer(this.previewContainer || "global");
        if (dir) {
          ref.withDirection(dir.value);
        }
      }
    });
    ref.beforeStarted.pipe(take(1)).subscribe(() => {
      if (this._parentDrag) {
        ref.withParent(this._parentDrag._dragRef);
        return;
      }
      let parent = this.element.nativeElement.parentElement;
      while (parent) {
        const parentDrag = this._dragDropRegistry.getDragDirectiveForNode(parent);
        if (parentDrag) {
          ref.withParent(parentDrag._dragRef);
          break;
        }
        parent = parent.parentElement;
      }
    });
  }
  _handleEvents(ref) {
    ref.started.subscribe((startEvent) => {
      this.started.emit({
        source: this,
        event: startEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.released.subscribe((releaseEvent) => {
      this.released.emit({
        source: this,
        event: releaseEvent.event
      });
    });
    ref.ended.subscribe((endEvent) => {
      this.ended.emit({
        source: this,
        distance: endEvent.distance,
        dropPoint: endEvent.dropPoint,
        event: endEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.entered.subscribe((enterEvent) => {
      this.entered.emit({
        container: enterEvent.container.data,
        item: this,
        currentIndex: enterEvent.currentIndex
      });
    });
    ref.exited.subscribe((exitEvent) => {
      this.exited.emit({
        container: exitEvent.container.data,
        item: this
      });
    });
    ref.dropped.subscribe((dropEvent) => {
      this.dropped.emit({
        previousIndex: dropEvent.previousIndex,
        currentIndex: dropEvent.currentIndex,
        previousContainer: dropEvent.previousContainer.data,
        container: dropEvent.container.data,
        isPointerOverContainer: dropEvent.isPointerOverContainer,
        item: this,
        distance: dropEvent.distance,
        dropPoint: dropEvent.dropPoint,
        event: dropEvent.event
      });
    });
  }
  _assignDefaults(config) {
    const {
      lockAxis,
      dragStartDelay,
      constrainPosition,
      previewClass,
      boundaryElement,
      draggingDisabled,
      rootElementSelector,
      previewContainer
    } = config;
    this.disabled = draggingDisabled == null ? false : draggingDisabled;
    this.dragStartDelay = dragStartDelay || 0;
    this.lockAxis = lockAxis || null;
    if (constrainPosition) {
      this.constrainPosition = constrainPosition;
    }
    if (previewClass) {
      this.previewClass = previewClass;
    }
    if (boundaryElement) {
      this.boundaryElement = boundaryElement;
    }
    if (rootElementSelector) {
      this.rootElementSelector = rootElementSelector;
    }
    if (previewContainer) {
      this.previewContainer = previewContainer;
    }
  }
  _setupHandlesListener() {
    this._handles.pipe(tap((handles) => {
      const handleElements = handles.map((handle) => handle.element);
      if (this._selfHandle && this.rootElementSelector) {
        handleElements.push(this.element);
      }
      this._dragRef.withHandles(handleElements);
    }), switchMap((handles) => {
      return merge(...handles.map((item) => item._stateChanges.pipe(startWith(item))));
    }), takeUntil(this._destroyed)).subscribe((handleInstance) => {
      const dragRef = this._dragRef;
      const handle = handleInstance.element.nativeElement;
      handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
    });
  }
  static \u0275fac = function CdkDrag_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDrag)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDrag,
    selectors: [["", "cdkDrag", ""]],
    hostAttrs: [1, "cdk-drag"],
    hostVars: 4,
    hostBindings: function CdkDrag_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
      }
    },
    inputs: {
      data: [0, "cdkDragData", "data"],
      lockAxis: [0, "cdkDragLockAxis", "lockAxis"],
      rootElementSelector: [0, "cdkDragRootElement", "rootElementSelector"],
      boundaryElement: [0, "cdkDragBoundary", "boundaryElement"],
      dragStartDelay: [0, "cdkDragStartDelay", "dragStartDelay"],
      freeDragPosition: [0, "cdkDragFreeDragPosition", "freeDragPosition"],
      disabled: [2, "cdkDragDisabled", "disabled", booleanAttribute],
      constrainPosition: [0, "cdkDragConstrainPosition", "constrainPosition"],
      previewClass: [0, "cdkDragPreviewClass", "previewClass"],
      previewContainer: [0, "cdkDragPreviewContainer", "previewContainer"],
      scale: [2, "cdkDragScale", "scale", numberAttribute]
    },
    outputs: {
      started: "cdkDragStarted",
      released: "cdkDragReleased",
      ended: "cdkDragEnded",
      entered: "cdkDragEntered",
      exited: "cdkDragExited",
      dropped: "cdkDragDropped",
      moved: "cdkDragMoved"
    },
    exportAs: ["cdkDrag"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DRAG_PARENT,
      useExisting: _CdkDrag
    }]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDrag, [{
    type: Directive,
    args: [{
      selector: "[cdkDrag]",
      exportAs: "cdkDrag",
      host: {
        "class": "cdk-drag",
        "[class.cdk-drag-disabled]": "disabled",
        "[class.cdk-drag-dragging]": "_dragRef.isDragging()"
      },
      providers: [{
        provide: CDK_DRAG_PARENT,
        useExisting: CdkDrag
      }]
    }]
  }], () => [], {
    data: [{
      type: Input,
      args: ["cdkDragData"]
    }],
    lockAxis: [{
      type: Input,
      args: ["cdkDragLockAxis"]
    }],
    rootElementSelector: [{
      type: Input,
      args: ["cdkDragRootElement"]
    }],
    boundaryElement: [{
      type: Input,
      args: ["cdkDragBoundary"]
    }],
    dragStartDelay: [{
      type: Input,
      args: ["cdkDragStartDelay"]
    }],
    freeDragPosition: [{
      type: Input,
      args: ["cdkDragFreeDragPosition"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDragDisabled",
        transform: booleanAttribute
      }]
    }],
    constrainPosition: [{
      type: Input,
      args: ["cdkDragConstrainPosition"]
    }],
    previewClass: [{
      type: Input,
      args: ["cdkDragPreviewClass"]
    }],
    previewContainer: [{
      type: Input,
      args: ["cdkDragPreviewContainer"]
    }],
    scale: [{
      type: Input,
      args: [{
        alias: "cdkDragScale",
        transform: numberAttribute
      }]
    }],
    started: [{
      type: Output,
      args: ["cdkDragStarted"]
    }],
    released: [{
      type: Output,
      args: ["cdkDragReleased"]
    }],
    ended: [{
      type: Output,
      args: ["cdkDragEnded"]
    }],
    entered: [{
      type: Output,
      args: ["cdkDragEntered"]
    }],
    exited: [{
      type: Output,
      args: ["cdkDragExited"]
    }],
    dropped: [{
      type: Output,
      args: ["cdkDragDropped"]
    }],
    moved: [{
      type: Output,
      args: ["cdkDragMoved"]
    }]
  });
})();
var CDK_DROP_LIST_GROUP = new InjectionToken("CdkDropListGroup");
var CdkDropListGroup = class _CdkDropListGroup {
  _items = /* @__PURE__ */ new Set();
  disabled = false;
  ngOnDestroy() {
    this._items.clear();
  }
  static \u0275fac = function CdkDropListGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDropListGroup)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDropListGroup,
    selectors: [["", "cdkDropListGroup", ""]],
    inputs: {
      disabled: [2, "cdkDropListGroupDisabled", "disabled", booleanAttribute]
    },
    exportAs: ["cdkDropListGroup"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DROP_LIST_GROUP,
      useExisting: _CdkDropListGroup
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDropListGroup, [{
    type: Directive,
    args: [{
      selector: "[cdkDropListGroup]",
      exportAs: "cdkDropListGroup",
      providers: [{
        provide: CDK_DROP_LIST_GROUP,
        useExisting: CdkDropListGroup
      }]
    }]
  }], null, {
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListGroupDisabled",
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkDropList = class _CdkDropList {
  element = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _scrollDispatcher = inject(ScrollDispatcher);
  _dir = inject(Directionality, {
    optional: true
  });
  _group = inject(CDK_DROP_LIST_GROUP, {
    optional: true,
    skipSelf: true
  });
  _latestSortedRefs;
  _destroyed = new Subject();
  _scrollableParentsResolved = false;
  static _dropLists = [];
  _dropListRef;
  connectedTo = [];
  data;
  orientation = "vertical";
  id = inject(_IdGenerator).getId("cdk-drop-list-");
  lockAxis = null;
  get disabled() {
    return this._disabled || !!this._group && this._group.disabled;
  }
  set disabled(value) {
    this._dropListRef.disabled = this._disabled = value;
  }
  _disabled = false;
  sortingDisabled = false;
  enterPredicate = () => true;
  sortPredicate = () => true;
  autoScrollDisabled = false;
  autoScrollStep;
  elementContainerSelector = null;
  hasAnchor = false;
  dropped = new EventEmitter();
  entered = new EventEmitter();
  exited = new EventEmitter();
  sorted = new EventEmitter();
  _unsortedItems = /* @__PURE__ */ new Set();
  constructor() {
    const config = inject(CDK_DRAG_CONFIG, {
      optional: true
    });
    const injector = inject(Injector);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      assertElementNode(this.element.nativeElement, "cdkDropList");
    }
    this._dropListRef = createDropListRef(injector, this.element);
    this._dropListRef.data = this;
    if (config) {
      this._assignDefaults(config);
    }
    this._dropListRef.enterPredicate = (drag, drop) => {
      return this.enterPredicate(drag.data, drop.data);
    };
    this._dropListRef.sortPredicate = (index, drag, drop) => {
      return this.sortPredicate(index, drag.data, drop.data);
    };
    this._setupInputSyncSubscription(this._dropListRef);
    this._handleEvents(this._dropListRef);
    _CdkDropList._dropLists.push(this);
    if (this._group) {
      this._group._items.add(this);
    }
  }
  addItem(item) {
    this._unsortedItems.add(item);
    item._dragRef._withDropContainer(this._dropListRef);
    if (this._dropListRef.isDragging()) {
      this._syncItemsWithRef(this.getSortedItems().map((item2) => item2._dragRef));
    }
  }
  removeItem(item) {
    this._unsortedItems.delete(item);
    if (this._latestSortedRefs) {
      const index = this._latestSortedRefs.indexOf(item._dragRef);
      if (index > -1) {
        this._latestSortedRefs.splice(index, 1);
        this._syncItemsWithRef(this._latestSortedRefs);
      }
    }
  }
  getSortedItems() {
    return Array.from(this._unsortedItems).sort((a, b) => {
      const documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement());
      return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
    });
  }
  ngOnDestroy() {
    const index = _CdkDropList._dropLists.indexOf(this);
    if (index > -1) {
      _CdkDropList._dropLists.splice(index, 1);
    }
    if (this._group) {
      this._group._items.delete(this);
    }
    this._latestSortedRefs = void 0;
    this._unsortedItems.clear();
    this._dropListRef.dispose();
    this._destroyed.next();
    this._destroyed.complete();
  }
  _setupInputSyncSubscription(ref) {
    if (this._dir) {
      this._dir.change.pipe(startWith(this._dir.value), takeUntil(this._destroyed)).subscribe((value) => ref.withDirection(value));
    }
    ref.beforeStarted.subscribe(() => {
      const siblings = coerceArray(this.connectedTo).map((drop) => {
        if (typeof drop === "string") {
          const correspondingDropList = _CdkDropList._dropLists.find((list) => list.id === drop);
          if (!correspondingDropList && (typeof ngDevMode === "undefined" || ngDevMode)) {
            console.warn(`CdkDropList could not find connected drop list with id "${drop}"`);
          }
          return correspondingDropList;
        }
        return drop;
      });
      if (this._group) {
        this._group._items.forEach((drop) => {
          if (siblings.indexOf(drop) === -1) {
            siblings.push(drop);
          }
        });
      }
      if (!this._scrollableParentsResolved) {
        const scrollableParents = this._scrollDispatcher.getAncestorScrollContainers(this.element).map((scrollable) => scrollable.getElementRef().nativeElement);
        this._dropListRef.withScrollableParents(scrollableParents);
        this._scrollableParentsResolved = true;
      }
      if (this.elementContainerSelector) {
        const container = this.element.nativeElement.querySelector(this.elementContainerSelector);
        if (!container && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw new Error(`CdkDropList could not find an element container matching the selector "${this.elementContainerSelector}"`);
        }
        ref.withElementContainer(container);
      }
      ref.disabled = this.disabled;
      ref.lockAxis = this.lockAxis;
      ref.sortingDisabled = this.sortingDisabled;
      ref.autoScrollDisabled = this.autoScrollDisabled;
      ref.autoScrollStep = coerceNumberProperty(this.autoScrollStep, 2);
      ref.hasAnchor = this.hasAnchor;
      ref.connectedTo(siblings.filter((drop) => drop && drop !== this).map((list) => list._dropListRef)).withOrientation(this.orientation);
    });
  }
  _handleEvents(ref) {
    ref.beforeStarted.subscribe(() => {
      this._syncItemsWithRef(this.getSortedItems().map((item) => item._dragRef));
      this._changeDetectorRef.markForCheck();
    });
    ref.entered.subscribe((event) => {
      this.entered.emit({
        container: this,
        item: event.item.data,
        currentIndex: event.currentIndex
      });
    });
    ref.exited.subscribe((event) => {
      this.exited.emit({
        container: this,
        item: event.item.data
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.sorted.subscribe((event) => {
      this.sorted.emit({
        previousIndex: event.previousIndex,
        currentIndex: event.currentIndex,
        container: this,
        item: event.item.data
      });
    });
    ref.dropped.subscribe((dropEvent) => {
      this.dropped.emit({
        previousIndex: dropEvent.previousIndex,
        currentIndex: dropEvent.currentIndex,
        previousContainer: dropEvent.previousContainer.data,
        container: dropEvent.container.data,
        item: dropEvent.item.data,
        isPointerOverContainer: dropEvent.isPointerOverContainer,
        distance: dropEvent.distance,
        dropPoint: dropEvent.dropPoint,
        event: dropEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    merge(ref.receivingStarted, ref.receivingStopped).subscribe(() => this._changeDetectorRef.markForCheck());
  }
  _assignDefaults(config) {
    const {
      lockAxis,
      draggingDisabled,
      sortingDisabled,
      listAutoScrollDisabled,
      listOrientation
    } = config;
    this.disabled = draggingDisabled == null ? false : draggingDisabled;
    this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
    this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
    this.orientation = listOrientation || "vertical";
    this.lockAxis = lockAxis || null;
  }
  _syncItemsWithRef(items) {
    this._latestSortedRefs = items;
    this._dropListRef.withItems(items);
  }
  static \u0275fac = function CdkDropList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDropList)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDropList,
    selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]],
    hostAttrs: [1, "cdk-drop-list"],
    hostVars: 7,
    hostBindings: function CdkDropList_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id);
        \u0275\u0275classProp("cdk-drop-list-disabled", ctx.disabled)("cdk-drop-list-dragging", ctx._dropListRef.isDragging())("cdk-drop-list-receiving", ctx._dropListRef.isReceiving());
      }
    },
    inputs: {
      connectedTo: [0, "cdkDropListConnectedTo", "connectedTo"],
      data: [0, "cdkDropListData", "data"],
      orientation: [0, "cdkDropListOrientation", "orientation"],
      id: "id",
      lockAxis: [0, "cdkDropListLockAxis", "lockAxis"],
      disabled: [2, "cdkDropListDisabled", "disabled", booleanAttribute],
      sortingDisabled: [2, "cdkDropListSortingDisabled", "sortingDisabled", booleanAttribute],
      enterPredicate: [0, "cdkDropListEnterPredicate", "enterPredicate"],
      sortPredicate: [0, "cdkDropListSortPredicate", "sortPredicate"],
      autoScrollDisabled: [2, "cdkDropListAutoScrollDisabled", "autoScrollDisabled", booleanAttribute],
      autoScrollStep: [0, "cdkDropListAutoScrollStep", "autoScrollStep"],
      elementContainerSelector: [0, "cdkDropListElementContainer", "elementContainerSelector"],
      hasAnchor: [2, "cdkDropListHasAnchor", "hasAnchor", booleanAttribute]
    },
    outputs: {
      dropped: "cdkDropListDropped",
      entered: "cdkDropListEntered",
      exited: "cdkDropListExited",
      sorted: "cdkDropListSorted"
    },
    exportAs: ["cdkDropList"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DROP_LIST_GROUP,
      useValue: void 0
    }, {
      provide: CDK_DROP_LIST,
      useExisting: _CdkDropList
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDropList, [{
    type: Directive,
    args: [{
      selector: "[cdkDropList], cdk-drop-list",
      exportAs: "cdkDropList",
      providers: [{
        provide: CDK_DROP_LIST_GROUP,
        useValue: void 0
      }, {
        provide: CDK_DROP_LIST,
        useExisting: CdkDropList
      }],
      host: {
        "class": "cdk-drop-list",
        "[attr.id]": "id",
        "[class.cdk-drop-list-disabled]": "disabled",
        "[class.cdk-drop-list-dragging]": "_dropListRef.isDragging()",
        "[class.cdk-drop-list-receiving]": "_dropListRef.isReceiving()"
      }
    }]
  }], () => [], {
    connectedTo: [{
      type: Input,
      args: ["cdkDropListConnectedTo"]
    }],
    data: [{
      type: Input,
      args: ["cdkDropListData"]
    }],
    orientation: [{
      type: Input,
      args: ["cdkDropListOrientation"]
    }],
    id: [{
      type: Input
    }],
    lockAxis: [{
      type: Input,
      args: ["cdkDropListLockAxis"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListDisabled",
        transform: booleanAttribute
      }]
    }],
    sortingDisabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListSortingDisabled",
        transform: booleanAttribute
      }]
    }],
    enterPredicate: [{
      type: Input,
      args: ["cdkDropListEnterPredicate"]
    }],
    sortPredicate: [{
      type: Input,
      args: ["cdkDropListSortPredicate"]
    }],
    autoScrollDisabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListAutoScrollDisabled",
        transform: booleanAttribute
      }]
    }],
    autoScrollStep: [{
      type: Input,
      args: ["cdkDropListAutoScrollStep"]
    }],
    elementContainerSelector: [{
      type: Input,
      args: ["cdkDropListElementContainer"]
    }],
    hasAnchor: [{
      type: Input,
      args: [{
        alias: "cdkDropListHasAnchor",
        transform: booleanAttribute
      }]
    }],
    dropped: [{
      type: Output,
      args: ["cdkDropListDropped"]
    }],
    entered: [{
      type: Output,
      args: ["cdkDropListEntered"]
    }],
    exited: [{
      type: Output,
      args: ["cdkDropListExited"]
    }],
    sorted: [{
      type: Output,
      args: ["cdkDropListSorted"]
    }]
  });
})();
var CDK_DRAG_PREVIEW = new InjectionToken("CdkDragPreview");
var CdkDragPreview = class _CdkDragPreview {
  templateRef = inject(TemplateRef);
  _drag = inject(CDK_DRAG_PARENT, {
    optional: true
  });
  data;
  matchSize = false;
  constructor() {
    this._drag?._setPreviewTemplate(this);
  }
  ngOnDestroy() {
    this._drag?._resetPreviewTemplate(this);
  }
  static \u0275fac = function CdkDragPreview_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDragPreview)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDragPreview,
    selectors: [["ng-template", "cdkDragPreview", ""]],
    inputs: {
      data: "data",
      matchSize: [2, "matchSize", "matchSize", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DRAG_PREVIEW,
      useExisting: _CdkDragPreview
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragPreview, [{
    type: Directive,
    args: [{
      selector: "ng-template[cdkDragPreview]",
      providers: [{
        provide: CDK_DRAG_PREVIEW,
        useExisting: CdkDragPreview
      }]
    }]
  }], () => [], {
    data: [{
      type: Input
    }],
    matchSize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var CDK_DRAG_PLACEHOLDER = new InjectionToken("CdkDragPlaceholder");
var CdkDragPlaceholder = class _CdkDragPlaceholder {
  templateRef = inject(TemplateRef);
  _drag = inject(CDK_DRAG_PARENT, {
    optional: true
  });
  data;
  constructor() {
    this._drag?._setPlaceholderTemplate(this);
  }
  ngOnDestroy() {
    this._drag?._resetPlaceholderTemplate(this);
  }
  static \u0275fac = function CdkDragPlaceholder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDragPlaceholder)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDragPlaceholder,
    selectors: [["ng-template", "cdkDragPlaceholder", ""]],
    inputs: {
      data: "data"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DRAG_PLACEHOLDER,
      useExisting: _CdkDragPlaceholder
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragPlaceholder, [{
    type: Directive,
    args: [{
      selector: "ng-template[cdkDragPlaceholder]",
      providers: [{
        provide: CDK_DRAG_PLACEHOLDER,
        useExisting: CdkDragPlaceholder
      }]
    }]
  }], () => [], {
    data: [{
      type: Input
    }]
  });
})();
var DRAG_DROP_DIRECTIVES = [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder];
var DragDropModule = class _DragDropModule {
  static \u0275fac = function DragDropModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DragDropModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DragDropModule,
    imports: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
    exports: [CdkScrollableModule, CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [DragDrop],
    imports: [CdkScrollableModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDropModule, [{
    type: NgModule,
    args: [{
      imports: DRAG_DROP_DIRECTIVES,
      exports: [CdkScrollableModule, ...DRAG_DROP_DIRECTIVES],
      providers: [DragDrop]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/listbox/index.mjs
var style5 = "\n    .p-listbox {\n        display: block;\n        background: dt('listbox.background');\n        color: dt('listbox.color');\n        border: 1px solid dt('listbox.border.color');\n        border-radius: dt('listbox.border.radius');\n        transition:\n            background dt('listbox.transition.duration'),\n            color dt('listbox.transition.duration'),\n            border-color dt('listbox.transition.duration'),\n            box-shadow dt('listbox.transition.duration'),\n            outline-color dt('listbox.transition.duration');\n        outline-color: transparent;\n        box-shadow: dt('listbox.shadow');\n    }\n\n    .p-listbox.p-disabled {\n        opacity: 1;\n        background: dt('listbox.disabled.background');\n        color: dt('listbox.disabled.color');\n    }\n\n    .p-listbox.p-disabled .p-listbox-option {\n        color: dt('listbox.disabled.color');\n    }\n\n    .p-listbox.p-invalid {\n        border-color: dt('listbox.invalid.border.color');\n    }\n\n    .p-listbox-header {\n        padding: dt('listbox.list.header.padding');\n    }\n\n    .p-listbox-filter {\n        width: 100%;\n    }\n\n    .p-listbox-list-container {\n        overflow: auto;\n    }\n\n    .p-listbox-list {\n        list-style-type: none;\n        margin: 0;\n        padding: dt('listbox.list.padding');\n        outline: 0 none;\n        display: flex;\n        flex-direction: column;\n        gap: dt('listbox.list.gap');\n    }\n\n    .p-listbox-option {\n        display: flex;\n        align-items: center;\n        cursor: pointer;\n        position: relative;\n        overflow: hidden;\n        padding: dt('listbox.option.padding');\n        border: 0 none;\n        border-radius: dt('listbox.option.border.radius');\n        color: dt('listbox.option.color');\n        transition:\n            background dt('listbox.transition.duration'),\n            color dt('listbox.transition.duration'),\n            border-color dt('listbox.transition.duration'),\n            box-shadow dt('listbox.transition.duration'),\n            outline-color dt('listbox.transition.duration');\n    }\n\n    .p-listbox-striped li:nth-child(even of .p-listbox-option) {\n        background: dt('listbox.option.striped.background');\n    }\n\n    .p-listbox .p-listbox-list .p-listbox-option.p-listbox-option-selected {\n        background: dt('listbox.option.selected.background');\n        color: dt('listbox.option.selected.color');\n    }\n\n    .p-listbox:not(.p-disabled) .p-listbox-option.p-listbox-option-selected.p-focus {\n        background: dt('listbox.option.selected.focus.background');\n        color: dt('listbox.option.selected.focus.color');\n    }\n\n    .p-listbox:not(.p-disabled) .p-listbox-option:not(.p-listbox-option-selected):not(.p-disabled).p-focus {\n        background: dt('listbox.option.focus.background');\n        color: dt('listbox.option.focus.color');\n    }\n\n    .p-listbox:not(.p-disabled) .p-listbox-option:not(.p-listbox-option-selected):not(.p-disabled):hover {\n        background: dt('listbox.option.focus.background');\n        color: dt('listbox.option.focus.color');\n    }\n\n    .p-listbox-option-blank-icon {\n        flex-shrink: 0;\n    }\n\n    .p-listbox-option-check-icon {\n        position: relative;\n        flex-shrink: 0;\n        margin-inline-start: dt('listbox.checkmark.gutter.start');\n        margin-inline-end: dt('listbox.checkmark.gutter.end');\n        color: dt('listbox.checkmark.color');\n    }\n\n    .p-listbox-option-group {\n        margin: 0;\n        padding: dt('listbox.option.group.padding');\n        color: dt('listbox.option.group.color');\n        background: dt('listbox.option.group.background');\n        font-weight: dt('listbox.option.group.font.weight');\n    }\n\n    .p-listbox-empty-message {\n        padding: dt('listbox.empty.message.padding');\n    }\n\n    .p-listbox-fluid {\n        width: 100%;\n    }\n";

// node_modules/primeng/fesm2022/primeng-listbox.mjs
var _c05 = ["item"];
var _c15 = ["group"];
var _c23 = ["header"];
var _c32 = ["filter"];
var _c42 = ["footer"];
var _c5 = ["emptyfilter"];
var _c6 = ["empty"];
var _c7 = ["filtericon"];
var _c8 = ["checkicon"];
var _c9 = ["checkmark"];
var _c10 = ["loader"];
var _c11 = ["headerchkbox"];
var _c122 = ["lastHiddenFocusableElement"];
var _c132 = ["firstHiddenFocusableElement"];
var _c142 = ["scroller"];
var _c152 = ["list"];
var _c16 = ["container"];
var _c17 = [[["p-header"]], [["p-footer"]]];
var _c18 = ["p-header", "p-footer"];
var _c19 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
var _c20 = (a0) => ({
  $implicit: a0
});
var _c21 = (a0) => ({
  options: a0
});
var _c222 = (a0) => ({
  height: a0
});
var _c232 = () => ({});
var _c24 = (a0, a1, a2) => ({
  option: a0,
  i: a1,
  scrollerOptions: a2
});
var _c25 = (a0, a1, a2, a3) => ({
  $implicit: a0,
  index: a1,
  selected: a2,
  disabled: a3
});
var _c26 = (a0) => ({
  implicit: a0
});
function Listbox_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Listbox_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275projection(1);
    \u0275\u0275template(2, Listbox_div_2_ng_container_2_Template, 1, 0, "ng-container", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("header"));
    \u0275\u0275property("pBind", ctx_r0.ptm("header"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.headerTemplate || ctx_r0._headerTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(5, _c19, ctx_r0.modelValue(), ctx_r0.visibleOptions()));
  }
}
function Listbox_div_3_p_checkbox_1_ng_container_2_ng_template_1_0_ng_template_0_Template(rf, ctx) {
}
function Listbox_div_3_p_checkbox_1_ng_container_2_ng_template_1_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Listbox_div_3_p_checkbox_1_ng_container_2_ng_template_1_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Listbox_div_3_p_checkbox_1_ng_container_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Listbox_div_3_p_checkbox_1_ng_container_2_ng_template_1_0_Template, 1, 0, null, 22);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.checkIconTemplate || ctx_r0._checkIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c20, ctx_r0.allSelected()));
  }
}
function Listbox_div_3_p_checkbox_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Listbox_div_3_p_checkbox_1_ng_container_2_ng_template_1_Template, 1, 4, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
}
function Listbox_div_3_p_checkbox_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-checkbox", 25, 4);
    \u0275\u0275listener("onChange", function Listbox_div_3_p_checkbox_1_Template_p_checkbox_onChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onToggleAll($event));
    });
    \u0275\u0275template(2, Listbox_div_3_p_checkbox_1_ng_container_2_Template, 3, 0, "ng-container", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.cx("optionCheckIcon"));
    \u0275\u0275property("ngModel", ctx_r0.allSelected())("disabled", ctx_r0.$disabled())("tabindex", -1)("variant", ctx_r0.config.inputStyle() === "filled" || ctx_r0.config.inputVariant() === "filled" ? "filled" : "outlined")("binary", true)("pt", ctx_r0.ptm("pcCheckbox"))("unstyled", ctx_r0.unstyled());
    \u0275\u0275attribute("aria-label", ctx_r0.toggleAllAriaLabel);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.checkIconTemplate || ctx_r0._checkIconTemplate);
  }
}
function Listbox_div_3_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Listbox_div_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Listbox_div_3_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 22);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.filterTemplate || ctx_r0._filterTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c21, ctx_r0.filterOptions));
  }
}
function Listbox_div_3_ng_template_3_Conditional_0__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 31);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("pBind", ctx_r0.ptm("filterIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function Listbox_div_3_ng_template_3_Conditional_0_span_5_1_ng_template_0_Template(rf, ctx) {
}
function Listbox_div_3_ng_template_3_Conditional_0_span_5_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Listbox_div_3_ng_template_3_Conditional_0_span_5_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Listbox_div_3_ng_template_3_Conditional_0_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, Listbox_div_3_ng_template_3_Conditional_0_span_5_1_Template, 1, 0, null, 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275attribute("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.filterIconTemplate || ctx_r0._filterIconTemplate);
  }
}
function Listbox_div_3_ng_template_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iconfield", 26)(1, "input", 28, 6);
    \u0275\u0275listener("input", function Listbox_div_3_ng_template_3_Conditional_0_Template_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onFilterChange($event));
    })("keydown", function Listbox_div_3_ng_template_3_Conditional_0_Template_input_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onFilterKeyDown($event));
    })("blur", function Listbox_div_3_ng_template_3_Conditional_0_Template_input_blur_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onFilterBlur($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-inputicon", 29);
    \u0275\u0275template(4, Listbox_div_3_ng_template_3_Conditional_0__svg_svg_4_Template, 1, 2, "svg", 30)(5, Listbox_div_3_ng_template_3_Conditional_0_span_5_Template, 2, 2, "span", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("pt", ctx_r0.ptm("pcFilterContainer"))("unstyled", ctx_r0.unstyled());
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.cx("pcFilter"));
    \u0275\u0275property("value", ctx_r0._filterValue() || "")("pt", ctx_r0.ptm("pcFilter"))("unstyled", ctx_r0.unstyled());
    \u0275\u0275attribute("disabled", ctx_r0.$disabled() ? "" : void 0)("aria-owns", ctx_r0.id + "_list")("aria-activedescendant", ctx_r0.focusedOptionId)("placeholder", ctx_r0.filterPlaceHolder)("aria-label", ctx_r0.ariaFilterLabel)("tabindex", !ctx_r0.$disabled() && !ctx_r0.focused ? ctx_r0.tabindex : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("pt", ctx_r0.ptm("pcFilterIconContainer"))("unstyled", ctx_r0.unstyled());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.filterIconTemplate && !ctx_r0._filterIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.filterIconTemplate || ctx_r0._filterIconTemplate);
  }
}
function Listbox_div_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Listbox_div_3_ng_template_3_Conditional_0_Template, 6, 17, "p-iconfield", 26);
    \u0275\u0275elementStart(1, "span", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.filter ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r0.ptm("hiddenFilterResult"));
    \u0275\u0275attribute("aria-live", "polite")("data-p-hidden-accessible", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.filterResultMessageText, " ");
  }
}
function Listbox_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, Listbox_div_3_p_checkbox_1_Template, 3, 11, "p-checkbox", 23)(2, Listbox_div_3_ng_container_2_Template, 2, 4, "ng-container", 24)(3, Listbox_div_3_ng_template_3_Template, 3, 5, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const builtInFilterElement_r4 = \u0275\u0275reference(4);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("header"));
    \u0275\u0275property("pBind", ctx_r0.ptm("header"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.checkbox && ctx_r0.multiple && ctx_r0.showToggleAll);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.filterTemplate || ctx_r0._filterTemplate)("ngIfElse", builtInFilterElement_r4);
  }
}
function Listbox_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.emptyFilterMessageText, " ");
  }
}
function Listbox_Conditional_6_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, null, 7);
  }
}
function Listbox_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Listbox_Conditional_6_Conditional_2_ng_container_0_Template, 2, 0, "ng-container", 32);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.emptyFilterTemplate || ctx_r0._emptyFilterTemplate || ctx_r0._emptyTemplate || ctx_r0.emptyTemplate);
  }
}
function Listbox_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275conditionalCreate(1, Listbox_Conditional_6_Conditional_1_Template, 1, 1)(2, Listbox_Conditional_6_Conditional_2_Template, 1, 1, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("emptyMessage"));
    \u0275\u0275property("pBind", ctx_r0.ptm("emptyMessage"));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.emptyFilterTemplate && !ctx_r0._emptyFilterTemplate && !ctx_r0._emptyTemplate && !ctx_r0.emptyTemplate ? 1 : 2);
  }
}
function Listbox_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.emptyMessage, " ");
  }
}
function Listbox_Conditional_7_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, null, 8);
  }
}
function Listbox_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Listbox_Conditional_7_Conditional_2_ng_container_0_Template, 2, 0, "ng-container", 32);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.emptyTemplate || ctx_r0._emptyTemplate);
  }
}
function Listbox_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275conditionalCreate(1, Listbox_Conditional_7_Conditional_1_Template, 1, 1)(2, Listbox_Conditional_7_Conditional_2_Template, 1, 1, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("emptyMessage"));
    \u0275\u0275property("pBind", ctx_r0.ptm("emptyMessage"));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.emptyTemplate && !ctx_r0._emptyTemplate ? 1 : 2);
  }
}
function Listbox_Conditional_8_p_scroller_0_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Listbox_Conditional_8_p_scroller_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Listbox_Conditional_8_p_scroller_0_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 22);
  }
  if (rf & 2) {
    const items_r6 = ctx.$implicit;
    const scrollerOptions_r7 = ctx.options;
    \u0275\u0275nextContext(2);
    const buildInItems_r8 = \u0275\u0275reference(3);
    \u0275\u0275property("ngTemplateOutlet", buildInItems_r8)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c19, items_r6, scrollerOptions_r7));
  }
}
function Listbox_Conditional_8_p_scroller_0_Conditional_4_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Listbox_Conditional_8_p_scroller_0_Conditional_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Listbox_Conditional_8_p_scroller_0_Conditional_4_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 22);
  }
  if (rf & 2) {
    const scrollerOptions_r9 = ctx.options;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.loaderTemplate || ctx_r0._loaderTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c21, scrollerOptions_r9));
  }
}
function Listbox_Conditional_8_p_scroller_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Listbox_Conditional_8_p_scroller_0_Conditional_4_ng_template_0_Template, 1, 4, "ng-template", null, 12, \u0275\u0275templateRefExtractor);
  }
}
function Listbox_Conditional_8_p_scroller_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-scroller", 34, 10);
    \u0275\u0275listener("onLazyLoad", function Listbox_Conditional_8_p_scroller_0_Template_p_scroller_onLazyLoad_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onLazyLoad.emit($event));
    });
    \u0275\u0275template(2, Listbox_Conditional_8_p_scroller_0_ng_template_2_Template, 1, 5, "ng-template", null, 11, \u0275\u0275templateRefExtractor);
    \u0275\u0275conditionalCreate(4, Listbox_Conditional_8_p_scroller_0_Conditional_4_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(10, _c222, ctx_r0.scrollHeight));
    \u0275\u0275property("pt", ctx_r0.ptm("virtualScroller"))("items", ctx_r0.visibleOptions())("itemSize", ctx_r0.virtualScrollItemSize)("autoSize", true)("lazy", ctx_r0.lazy)("options", ctx_r0.virtualScrollOptions)("tabindex", ctx_r0.scrollerTabIndex);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.loaderTemplate || ctx_r0._loaderTemplate ? 4 : -1);
  }
}
function Listbox_Conditional_8_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Listbox_Conditional_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Listbox_Conditional_8_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 22);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const buildInItems_r8 = \u0275\u0275reference(3);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", buildInItems_r8)("ngTemplateOutletContext", \u0275\u0275pureFunction2(3, _c19, ctx_r0.visibleOptions(), \u0275\u0275pureFunction0(2, _c232)));
  }
}
function Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r12 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getOptionGroupLabel(option_r12.optionGroup));
  }
}
function Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 37);
    \u0275\u0275listener("cdkDragStarted", function Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_0_Template_li_cdkDragStarted_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.isDragging.set(true));
    })("cdkDragEnded", function Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_0_Template_li_cdkDragEnded_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.isDragging.set(false));
    });
    \u0275\u0275template(2, Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_0_span_2_Template, 2, 1, "span", 18)(3, Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_0_ng_container_3_Template, 1, 0, "ng-container", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r12 = \u0275\u0275nextContext();
    const option_r12 = ctx_r12.$implicit;
    const i_r14 = ctx_r12.index;
    const scrollerOptions_r15 = \u0275\u0275nextContext().options;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.cx("optionGroup"));
    \u0275\u0275property("pBind", ctx_r0.getPTOptions(option_r12.optionGroup, scrollerOptions_r15, i_r14, "optionGroup"))("ngStyle", \u0275\u0275pureFunction1(10, _c222, scrollerOptions_r15.itemSize + "px"))("cdkDragData", option_r12)("cdkDragDisabled", !ctx_r0.dragdrop);
    \u0275\u0275attribute("id", ctx_r0.id + "_" + ctx_r0.getOptionIndex(i_r14, scrollerOptions_r15));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.groupTemplate && !ctx_r0._groupTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.groupTemplate || ctx_r0._groupTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(12, _c20, option_r12.optionGroup));
  }
}
function Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_p_checkbox_2_ng_container_1_ng_template_1_0_ng_template_0_Template(rf, ctx) {
}
function Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_p_checkbox_2_ng_container_1_ng_template_1_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_p_checkbox_2_ng_container_1_ng_template_1_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_p_checkbox_2_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_p_checkbox_2_ng_container_1_ng_template_1_0_Template, 1, 0, null, 22);
  }
  if (rf & 2) {
    const option_r12 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.checkIconTemplate || ctx_r0._checkIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c20, ctx_r0.isSelected(option_r12)));
  }
}
function Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_p_checkbox_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_p_checkbox_2_ng_container_1_ng_template_1_Template, 1, 4, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
}
function Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_p_checkbox_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-checkbox", 40);
    \u0275\u0275template(1, Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_p_checkbox_2_ng_container_1_Template, 3, 0, "ng-container", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r12 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cx("optionCheckIcon"));
    \u0275\u0275property("ngModel", ctx_r0.isSelected(option_r12))("readonly", true)("disabled", ctx_r0.$disabled() || ctx_r0.isOptionDisabled(option_r12))("tabindex", -1)("variant", ctx_r0.config.inputStyle() === "filled" || ctx_r0.config.inputVariant() === "filled" ? "filled" : "outlined")("binary", true)("pt", ctx_r0.ptm("pcCheckbox"))("unstyled", ctx_r0.unstyled());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.checkIconTemplate || ctx_r0._checkIconTemplate);
  }
}
function Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_ng_container_3_ng_container_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 43);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(7);
    \u0275\u0275classMap(ctx_r0.cx("optionBlankIcon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("optionBlankIcon"));
  }
}
function Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_ng_container_3_ng_container_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 44);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(7);
    \u0275\u0275classMap(ctx_r0.cx("optionCheckIcon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("optionCheckIcon"));
  }
}
function Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_ng_container_3_ng_container_1__svg_svg_1_Template, 1, 3, "svg", 41)(2, Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_ng_container_3_ng_container_1__svg_svg_2_Template, 1, 3, "svg", 42);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const option_r12 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isSelected(option_r12));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isSelected(option_r12));
  }
}
function Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_ng_container_3_ng_container_1_Template, 3, 2, "ng-container", 18)(2, Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 22);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const option_r12 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.checkmarkTemplate && !ctx_r0._checkmarkTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.checkmarkTemplate || ctx_r0._checkmarkTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c26, ctx_r0.isSelected(option_r12)));
  }
}
function Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r12 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getOptionLabel(option_r12));
  }
}
function Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 38);
    \u0275\u0275listener("click", function Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_Template_li_click_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r12 = \u0275\u0275nextContext();
      const option_r12 = ctx_r12.$implicit;
      const i_r14 = ctx_r12.index;
      const scrollerOptions_r15 = \u0275\u0275nextContext().options;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onOptionSelect($event, option_r12, ctx_r0.getOptionIndex(i_r14, scrollerOptions_r15)));
    })("dblclick", function Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_Template_li_dblclick_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      const option_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onOptionDoubleClick($event, option_r12));
    })("mousedown", function Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_Template_li_mousedown_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      const i_r14 = \u0275\u0275nextContext().index;
      const scrollerOptions_r15 = \u0275\u0275nextContext().options;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onOptionMouseDown($event, ctx_r0.getOptionIndex(i_r14, scrollerOptions_r15)));
    })("mouseenter", function Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_Template_li_mouseenter_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      const i_r14 = \u0275\u0275nextContext().index;
      const scrollerOptions_r15 = \u0275\u0275nextContext().options;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onOptionMouseEnter($event, ctx_r0.getOptionIndex(i_r14, scrollerOptions_r15)));
    })("touchend", function Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_Template_li_touchend_1_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onOptionTouchEnd());
    })("cdkDragStarted", function Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_Template_li_cdkDragStarted_1_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.isDragging.set(true));
    })("cdkDragEnded", function Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_Template_li_cdkDragEnded_1_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.isDragging.set(false));
    });
    \u0275\u0275template(2, Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_p_checkbox_2_Template, 2, 11, "p-checkbox", 39)(3, Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_ng_container_3_Template, 3, 5, "ng-container", 18)(4, Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_span_4_Template, 2, 1, "span", 18)(5, Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_ng_container_5_Template, 1, 0, "ng-container", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r12 = \u0275\u0275nextContext();
    const option_r12 = ctx_r12.$implicit;
    const i_r14 = ctx_r12.index;
    const scrollerOptions_r15 = \u0275\u0275nextContext().options;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.cx("option", \u0275\u0275pureFunction3(20, _c24, option_r12, i_r14, scrollerOptions_r15)));
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(24, _c222, scrollerOptions_r15.itemSize + "px"))("pBind", ctx_r0.getPTOptions(option_r12, scrollerOptions_r15, i_r14, "option"))("cdkDragData", option_r12)("cdkDragDisabled", !ctx_r0.dragdrop);
    \u0275\u0275attribute("id", ctx_r0.id + "_" + ctx_r0.getOptionIndex(i_r14, scrollerOptions_r15))("aria-label", ctx_r0.getOptionLabel(option_r12))("aria-selected", ctx_r0.isSelected(option_r12))("aria-disabled", ctx_r0.isOptionDisabled(option_r12))("aria-setsize", ctx_r0.ariaSetSize)("ariaPosInset", ctx_r0.getAriaPosInset(ctx_r0.getOptionIndex(i_r14, scrollerOptions_r15)))("data-p-selected", ctx_r0.isSelected(option_r12))("data-p-focused", ctx_r0.focusedOptionIndex() === ctx_r0.getOptionIndex(i_r14, scrollerOptions_r15))("data-p-disabled", ctx_r0.isOptionDisabled(option_r12));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.checkbox && ctx_r0.multiple);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.checkmark);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.itemTemplate && !ctx_r0._itemTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.itemTemplate || ctx_r0._itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction4(26, _c25, option_r12, ctx_r0.getOptionIndex(i_r14, scrollerOptions_r15), ctx_r0.isSelected(option_r12), ctx_r0.isOptionDisabled(option_r12)));
  }
}
function Listbox_Conditional_8_ng_template_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_0_Template, 4, 14, "ng-container", 18)(1, Listbox_Conditional_8_ng_template_2_ng_template_2_ng_container_1_Template, 6, 31, "ng-container", 18);
  }
  if (rf & 2) {
    const option_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r0.isOptionGroup(option_r12));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isOptionGroup(option_r12));
  }
}
function Listbox_Conditional_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", 35, 13);
    \u0275\u0275listener("focus", function Listbox_Conditional_8_ng_template_2_Template_ul_focus_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onListFocus($event));
    })("blur", function Listbox_Conditional_8_ng_template_2_Template_ul_blur_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onListBlur($event));
    })("keydown", function Listbox_Conditional_8_ng_template_2_Template_ul_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onListKeyDown($event));
    });
    \u0275\u0275template(2, Listbox_Conditional_8_ng_template_2_ng_template_2_Template, 2, 2, "ng-template", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r17 = ctx.$implicit;
    const scrollerOptions_r15 = ctx.options;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(scrollerOptions_r15.contentStyle);
    \u0275\u0275classMap(ctx_r0.cx("list"));
    \u0275\u0275property("id", ctx_r0.id + "_list")("tabindex", -1)("ngClass", scrollerOptions_r15.contentStyleClass)("pBind", ctx_r0.ptm("list"));
    \u0275\u0275attribute("aria-multiselectable", true)("aria-activedescendant", ctx_r0.focused ? ctx_r0.focusedOptionId : void 0)("aria-label", ctx_r0.ariaLabel)("aria-disabled", ctx_r0.$disabled());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", items_r17);
  }
}
function Listbox_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Listbox_Conditional_8_p_scroller_0_Template, 5, 12, "p-scroller", 33)(1, Listbox_Conditional_8_ng_container_1_Template, 2, 6, "ng-container", 18)(2, Listbox_Conditional_8_ng_template_2_Template, 3, 13, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r0.virtualScroll);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.virtualScroll);
  }
}
function Listbox_div_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Listbox_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275projection(1, 1);
    \u0275\u0275template(2, Listbox_div_9_ng_container_2_Template, 1, 0, "ng-container", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.footerTemplate || ctx_r0._footerTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c19, ctx_r0.modelValue(), ctx_r0.visibleOptions()));
  }
}
function Listbox_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("pBind", ctx_r0.ptm("hiddenEmptyMessage"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.emptyMessage, " ");
  }
}
var style6 = (
  /*css*/
  `
    ${style5}

    /* For PrimeNG */
    .p-listbox.ng-invalid.ng-dirty {
        border-color: dt('listbox.invalid.border.color');
    }

    .p-listbox-header {
        display: flex;
        align-items: center;
    }

    .p-listbox-header > .p-iconfield {
        flex-grow: 1;
    }

    .p-listbox-list-container {
        height: 100%;
    }

    /* CDK Drag & Drop styles */
    .p-listbox-option.cdk-drag-preview {
        background: dt('listbox.background');
    }

    .p-listbox-dragging .p-listbox-option:not(.cdk-drag-preview) {
        pointer-events: none !important;
    }

    .p-listbox-dragging .p-listbox-option:not(.cdk-drag-preview):hover {
        background: inherit !important;
        color: inherit !important;
    }

    .cdk-drag-placeholder {
        pointer-events: none;
    }
`
);
var classes4 = {
  root: ({
    instance
  }) => ["p-listbox p-component", {
    "p-listbox-striped": instance.striped,
    "p-disabled": instance.$disabled(),
    "p-invalid": instance.invalid(),
    "p-listbox-fluid": instance.fluid(),
    "p-listbox-dragging": instance.isDragging()
  }],
  header: "p-listbox-header",
  pcFilter: "p-listbox-filter",
  listContainer: "p-listbox-list-container",
  list: "p-listbox-list",
  optionGroup: "p-listbox-option-group",
  option: ({
    instance,
    option,
    i,
    scrollerOptions
  }) => ["p-listbox-option", {
    "p-listbox-option-selected": instance.isSelected(option) && instance.highlightOnSelect,
    "p-focus": instance.focusedOptionIndex() === instance.getOptionIndex(i, scrollerOptions),
    "p-disabled": instance.isOptionDisabled(option)
  }],
  optionCheckIcon: "p-listbox-option-check-icon",
  optionBlankIcon: "p-listbox-option-blank-icon",
  emptyMessage: "p-listbox-empty-message"
};
var ListBoxStyle = class _ListBoxStyle extends BaseStyle {
  name = "listbox";
  style = style6;
  classes = classes4;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ListBoxStyle_BaseFactory;
    return function ListBoxStyle_Factory(__ngFactoryType__) {
      return (\u0275ListBoxStyle_BaseFactory || (\u0275ListBoxStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ListBoxStyle)))(__ngFactoryType__ || _ListBoxStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ListBoxStyle,
    factory: _ListBoxStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListBoxStyle, [{
    type: Injectable
  }], null, null);
})();
var ListboxClasses;
(function(ListboxClasses2) {
  ListboxClasses2["root"] = "p-listbox";
  ListboxClasses2["header"] = "p-listbox-header";
  ListboxClasses2["pcFilter"] = "p-listbox-filter";
  ListboxClasses2["listContainer"] = "p-listbox-list-container";
  ListboxClasses2["list"] = "p-listbox-list";
  ListboxClasses2["optionGroup"] = "p-listbox-option-group";
  ListboxClasses2["option"] = "p-listbox-option";
  ListboxClasses2["optionCheckIcon"] = "p-listbox-option-check-icon";
  ListboxClasses2["optionBlankIcon"] = "p-listbox-option-blank-icon";
  ListboxClasses2["emptyMessage"] = "p-listbox-empty-message";
})(ListboxClasses || (ListboxClasses = {}));
var LISTBOX_INSTANCE = new InjectionToken("LISTBOX_INSTANCE");
var LISTBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Listbox),
  multi: true
};
var Listbox = class _Listbox extends BaseEditableHolder {
  filterService;
  componentName = "Listbox";
  hostName = "";
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  $pcListbox = inject(LISTBOX_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Unique identifier of the component.
   * @group Props
   */
  id;
  /**
   * Text to display when the search is active. Defaults to global value in i18n translation configuration.
   * @group Props
   * @defaultValue '{0} results are available'
   */
  searchMessage;
  /**
   * Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration.
   * @group Props
   * @defaultValue 'No selected item'
   */
  emptySelectionMessage;
  /**
   * Text to be displayed in hidden accessible field when options are selected. Defaults to global value in i18n translation configuration.
   * @group Props
   * @defaultValue '{0} items selected'
   */
  selectionMessage;
  /**
   * Whether to focus on the first visible or selected element when the overlay panel is shown.
   * @group Props
   */
  autoOptionFocus = true;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * When enabled, the focused option is selected.
   * @group Props
   */
  selectOnFocus;
  /**
   * Locale to use in searching. The default locale is the host environment's current locale.
   * @group Props
   */
  searchLocale;
  /**
   * When enabled, the hovered option will be focused.
   * @group Props
   */
  focusOnHover = true;
  /**
   * Text to display when filtering.
   * @group Props
   */
  filterMessage;
  /**
   * Fields used when filtering the options, defaults to optionLabel.
   * @group Props
   */
  filterFields;
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
   * Height of an item in the list for VirtualScrolling.
   * @group Props
   */
  virtualScrollItemSize;
  /**
   * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
   * @group Props
   */
  virtualScrollOptions;
  /**
   * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  scrollHeight = "14rem";
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * When specified, allows selecting multiple values.
   * @group Props
   */
  multiple;
  /**
   * Style class of the container.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the list element.
   * @group Props
   */
  listStyle;
  /**
   * Style class of the list element.
   * @group Props
   */
  listStyleClass;
  /**
   * When present, it specifies that the element value cannot be changed.
   * @group Props
   */
  readonly;
  /**
   * When specified, allows selecting items with checkboxes.
   * @group Props
   */
  checkbox = false;
  /**
   * When specified, displays a filter input at header.
   * @group Props
   */
  filter = false;
  /**
   * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
   * @group Props
   */
  filterBy;
  /**
   * Defines how the items are filtered.
   * @group Props
   */
  filterMatchMode = "contains";
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.
   * @group Props
   */
  metaKeySelection = false;
  /**
   * A property to uniquely identify a value in options.
   * @group Props
   */
  dataKey;
  /**
   * Whether header checkbox is shown in multiple mode.
   * @group Props
   */
  showToggleAll = true;
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
   * Name of the options field of an option group.
   * @group Props
   */
  optionGroupChildren = "items";
  /**
   * Name of the label field of an option group.
   * @group Props
   */
  optionGroupLabel = "label";
  /**
   * Name of the disabled field of an option or function to determine disabled state.
   * @group Props
   */
  optionDisabled;
  /**
   * Defines a string that labels the filter input.
   * @group Props
   */
  ariaFilterLabel;
  /**
   * Defines placeholder of the filter input.
   * @group Props
   */
  filterPlaceHolder;
  /**
   * Text to display when filtering does not return any results.
   * @group Props
   */
  emptyFilterMessage;
  /**
   * Text to display when there is no data. Defaults to global value in i18n translation configuration.
   * @group Props
   */
  emptyMessage;
  /**
   * Whether to display options as grouped when nested options are provided.
   * @group Props
   */
  group;
  /**
   * An array of selectitems to display as the available options.
   * @group Props
   */
  get options() {
    return this._options();
  }
  set options(val) {
    this._options.set(val);
  }
  /**
   * When specified, filter displays with this value.
   * @group Props
   */
  get filterValue() {
    return this._filterValue() || "";
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
   * Whether to displays rows with alternating colors.
   * @group Props
   * @defaultValue false
   */
  striped = false;
  /**
   * Whether the selected option will be add highlight class.
   * @group Props
   * @defaultValue true
   */
  highlightOnSelect = true;
  /**
   * Whether the selected option will be shown with a check mark.
   * @group Props
   * @defaultValue false
   */
  checkmark = false;
  /**
   * Whether to enable dragdrop based reordering.
   * @group Props
   */
  dragdrop = false;
  /**
   * Array to use for CDK drop list data binding. When not provided, uses options array.
   * @group Props
   */
  dropListData;
  /**
   * Computed property for stable CDK drop list data reference
   */
  cdkDropData = computed(() => {
    return this.dropListData || this._options();
  }, ...ngDevMode ? [{
    debugName: "cdkDropData"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Spans 100% width of the container when enabled.
   * @defaultValue undefined
   * @group Props
   */
  fluid = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "fluid"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Callback to invoke on value change.
   * @param {ListboxChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke when option is clicked.
   * @param {ListboxClickEvent} event - Custom click event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Callback to invoke when option is double clicked.
   * @param {ListboxDoubleClickEvent} event - Custom double click event.
   * @group Emits
   */
  onDblClick = new EventEmitter();
  /**
   * Callback to invoke when data is filtered.
   * @param {ListboxFilterEvent} event - Custom filter event.
   * @group Emits
   */
  onFilter = new EventEmitter();
  /**
   * Callback to invoke when component receives focus.
   * @param {FocusEvent} event - Focus event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when component loses focus.
   * @param {FocusEvent} event - Blur event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke when all data is selected.
   * @param {ListboxSelectAllChangeEvent} event - Custom select event.
   * @group Emits
   */
  onSelectAllChange = new EventEmitter();
  /**
   * Emits on lazy load.
   * @param {ScrollerLazyLoadEvent} event - Scroller lazy load event.
   * @group Emits
   */
  onLazyLoad = new EventEmitter();
  /**
   * Emits on item is dropped.
   * @param {CdkDragDrop<string[]>} event - Scroller lazy load event.
   * @group Emits
   */
  onDrop = new EventEmitter();
  headerCheckboxViewChild;
  filterViewChild;
  lastHiddenFocusableElement;
  firstHiddenFocusableElement;
  scroller;
  listViewChild;
  containerViewChild;
  headerFacet;
  footerFacet;
  /**
   * Custom item template.
   * @param {ListboxItemTemplateContext} context - item context.
   * @see {@link ListboxItemTemplateContext}
   * @group Templates
   */
  itemTemplate;
  /**
   * Custom group template.
   * @param {ListboxGroupTemplateContext} context - group context.
   * @see {@link ListboxGroupTemplateContext}
   * @group Templates
   */
  groupTemplate;
  /**
   * Custom header template.
   * @param {ListboxHeaderTemplateContext} context - header context.
   * @see {@link ListboxHeaderTemplateContext}
   * @group Templates
   */
  headerTemplate;
  /**
   * Custom filter template.
   * @param {ListboxFilterTemplateContext} context - filter context.
   * @see {@link ListboxFilterTemplateContext}
   * @group Templates
   */
  filterTemplate;
  /**
   * Custom footer template.
   * @param {ListboxFooterTemplateContext} context - footer context.
   * @see {@link ListboxFooterTemplateContext}
   * @group Templates
   */
  footerTemplate;
  /**
   * Custom empty filter message template.
   * @group Templates
   */
  emptyFilterTemplate;
  /**
   * Custom empty message template.
   * @group Templates
   */
  emptyTemplate;
  /**
   * Custom filter icon template.
   * @group Templates
   */
  filterIconTemplate;
  /**
   * Custom check icon template.
   * @param {ListboxCheckIconTemplateContext} context - check icon context.
   * @see {@link ListboxCheckIconTemplateContext}
   * @group Templates
   */
  checkIconTemplate;
  /**
   * Custom checkmark icon template.
   * @param {ListboxCheckmarkTemplateContext} context - checkmark context.
   * @see {@link ListboxCheckmarkTemplateContext}
   * @group Templates
   */
  checkmarkTemplate;
  /**
   * Custom loader template.
   * @param {ListboxLoaderTemplateContext} context - loader context.
   * @see {@link ListboxLoaderTemplateContext}
   * @group Templates
   */
  loaderTemplate;
  templates;
  _itemTemplate;
  _groupTemplate;
  _headerTemplate;
  _filterTemplate;
  _footerTemplate;
  _emptyFilterTemplate;
  _emptyTemplate;
  _filterIconTemplate;
  _checkIconTemplate;
  _checkmarkTemplate;
  _loaderTemplate;
  _filterValue = signal(null, ...ngDevMode ? [{
    debugName: "_filterValue"
  }] : (
    /* istanbul ignore next */
    []
  ));
  _filteredOptions;
  filterOptions;
  filtered;
  value;
  optionTouched;
  focus;
  headerCheckboxFocus;
  translationSubscription;
  focused;
  scrollerTabIndex = "0";
  _componentStyle = inject(ListBoxStyle);
  get focusedOptionId() {
    return this.focusedOptionIndex() !== -1 ? `${this.id}_${this.focusedOptionIndex()}` : null;
  }
  get filterResultMessageText() {
    return s(this.visibleOptions()) ? this.filterMessageText.replaceAll("{0}", this.visibleOptions().length) : this.emptyFilterMessageText;
  }
  get filterMessageText() {
    return this.filterMessage || this.config.translation.searchMessage || "";
  }
  get searchMessageText() {
    return this.searchMessage || this.config.translation.searchMessage || "";
  }
  get emptyFilterMessageText() {
    return this.emptyFilterMessage || this.config.translation.emptySearchMessage || this.config.translation.emptyFilterMessage || "";
  }
  get selectionMessageText() {
    return this.selectionMessage || this.config.translation.selectionMessage || "";
  }
  get emptySelectionMessageText() {
    return this.emptySelectionMessage || this.config.translation.emptySelectionMessage || "";
  }
  get selectedMessageText() {
    return this.hasSelectedOption() ? this.selectionMessageText.replaceAll("{0}", this.multiple ? this.modelValue().length : "1") : this.emptySelectionMessageText;
  }
  get ariaSetSize() {
    return this.visibleOptions().filter((option) => !this.isOptionGroup(option)).length;
  }
  get virtualScrollerDisabled() {
    return !this.virtualScroll;
  }
  get searchFields() {
    return this.filterBy?.split(",") || this.filterFields || [this.optionLabel];
  }
  get toggleAllAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria[this.allSelected() ? "selectAll" : "unselectAll"] : void 0;
  }
  searchValue;
  searchTimeout;
  _selectAll = null;
  _options = signal(null, ...ngDevMode ? [{
    debugName: "_options"
  }] : (
    /* istanbul ignore next */
    []
  ));
  startRangeIndex = signal(-1, ...ngDevMode ? [{
    debugName: "startRangeIndex"
  }] : (
    /* istanbul ignore next */
    []
  ));
  focusedOptionIndex = signal(-1, ...ngDevMode ? [{
    debugName: "focusedOptionIndex"
  }] : (
    /* istanbul ignore next */
    []
  ));
  isDragging = signal(false, ...ngDevMode ? [{
    debugName: "isDragging"
  }] : (
    /* istanbul ignore next */
    []
  ));
  onHostFocusOut(event) {
    this.onFocusout(event);
  }
  visibleOptions = computed(() => {
    const options = this.group ? this.flatOptions(this._options()) : this._options() || [];
    return this._filterValue() ? this.filterService.filter(options, this.searchFields, this._filterValue(), this.filterMatchMode, this.filterLocale) : options;
  }, ...ngDevMode ? [{
    debugName: "visibleOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  constructor(filterService) {
    super();
    this.filterService = filterService;
  }
  onInit() {
    this.id = this.id || s2("pn_id_");
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      this.cd.markForCheck();
    });
    this.autoUpdateModel();
    if (this.filterBy) {
      this.filterOptions = {
        filter: (value) => this.onFilterChange(value),
        reset: () => this.resetFilter()
      };
    }
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
        case "header":
          this._headerTemplate = item.template;
          break;
        case "filter":
          this._filterTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        case "empty":
          this._emptyTemplate = item.template;
          break;
        case "emptyfilter":
          this._emptyFilterTemplate = item.template;
          break;
        case "filtericon":
          this._filterIconTemplate = item.template;
          break;
        case "checkicon":
          this._checkIconTemplate = item.template;
          break;
        case "checkmark":
          this._checkmarkTemplate = item.template;
          break;
        case "loader":
          this._loaderTemplate = item.template;
          break;
        default:
          this._itemTemplate = item.template;
          break;
      }
    });
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
    if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption() && !this.multiple) {
      const focusedOptionIndex = this.findFirstFocusedOptionIndex();
      this.focusedOptionIndex.set(focusedOptionIndex);
      this.onOptionSelect(null, this.visibleOptions()[this.focusedOptionIndex()]);
    }
  }
  /**
   * Updates the model value.
   * @group Method
   */
  updateModel(value, event) {
    this.value = value;
    this.writeModelValue(value);
    this.onModelChange(value);
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
  }
  removeOption(option) {
    return this.modelValue().filter((val) => !k(val, this.getOptionValue(option), this.equalityKey() || ""));
  }
  onOptionSelect(event, option, index = -1) {
    if (this.$disabled() || this.isOptionDisabled(option) || this.readonly) {
      return;
    }
    event && this.onClick.emit({
      originalEvent: event,
      option,
      value: this.value
    });
    this.multiple ? this.onOptionSelectMultiple(event, option) : this.onOptionSelectSingle(event, option);
    this.optionTouched = false;
    index !== -1 && this.focusedOptionIndex.set(index);
  }
  onOptionSelectMultiple(event, option) {
    let selected = this.isSelected(option);
    let value = [];
    let metaSelection = this.optionTouched ? false : this.metaKeySelection;
    if (metaSelection) {
      let metaKey = event.metaKey || event.ctrlKey;
      if (selected) {
        value = metaKey ? this.removeOption(option) : [this.getOptionValue(option)];
      } else {
        value = metaKey ? this.modelValue() || [] : [];
        value = [...value || [], this.getOptionValue(option)];
      }
    } else {
      value = selected ? this.removeOption(option) : [...this.modelValue() || [], this.getOptionValue(option)];
    }
    this.updateModel(value, event);
  }
  onOptionSelectSingle(event, option) {
    let selected = this.isSelected(option);
    let valueChanged = false;
    let value = null;
    let metaSelection = this.optionTouched ? false : this.metaKeySelection;
    if (metaSelection) {
      let metaKey = event.metaKey || event.ctrlKey;
      if (selected) {
        if (metaKey) {
          value = null;
          valueChanged = true;
        }
      } else {
        value = this.getOptionValue(option);
        valueChanged = true;
      }
    } else {
      value = selected ? null : this.getOptionValue(option);
      valueChanged = true;
    }
    if (valueChanged) {
      this.updateModel(value, event);
    }
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
  onToggleAll(event) {
    if (this.$disabled() || this.readonly) {
      return;
    }
    bt(this.headerCheckboxViewChild?.nativeElement);
    if (this.selectAll !== null) {
      this.onSelectAllChange.emit({
        originalEvent: event,
        checked: !this.allSelected()
      });
    } else {
      const value = this.allSelected() ? [] : this.visibleOptions().filter((option) => this.isValidOption(option)).map((option) => this.getOptionValue(option));
      this.updateModel(value, event);
      this.onChange.emit({
        originalEvent: event,
        value: this.value
      });
    }
  }
  allSelected() {
    return this.selectAll !== null ? this.selectAll : s(this.visibleOptions()) && this.visibleOptions().every((option) => this.isOptionGroup(option) || this.isOptionDisabled(option) || this.isSelected(option));
  }
  onOptionTouchEnd() {
    if (this.$disabled()) {
      return;
    }
    this.optionTouched = true;
  }
  onOptionMouseDown(event, index) {
    this.changeFocusedOptionIndex(event, index);
  }
  onOptionMouseEnter(event, index) {
    if (this.focusOnHover && this.focused) {
      this.changeFocusedOptionIndex(event, index);
    }
  }
  onOptionDoubleClick(event, option) {
    if (this.$disabled() || this.isOptionDisabled(option) || this.readonly) {
      return;
    }
    this.onDblClick.emit({
      originalEvent: event,
      option,
      value: this.value
    });
  }
  onFirstHiddenFocus(event) {
    bt(this.listViewChild?.nativeElement);
    const firstFocusableEl = vt(this.el?.nativeElement, ':not([data-p-hidden-focusable="true"])');
    this.lastHiddenFocusableElement?.nativeElement && (this.lastHiddenFocusableElement.nativeElement.tabIndex = l(firstFocusableEl) ? -1 : void 0);
    this.firstHiddenFocusableElement?.nativeElement && (this.firstHiddenFocusableElement.nativeElement.tabIndex = -1);
  }
  onLastHiddenFocus(event) {
    const relatedTarget = event.relatedTarget;
    if (relatedTarget === this.listViewChild?.nativeElement) {
      const firstFocusableEl = vt(this.el?.nativeElement, ':not([data-p-hidden-focusable="true"])');
      bt(firstFocusableEl);
      this.firstHiddenFocusableElement?.nativeElement && (this.firstHiddenFocusableElement.nativeElement.tabIndex = void 0);
    } else {
      bt(this.firstHiddenFocusableElement?.nativeElement);
    }
    this.lastHiddenFocusableElement?.nativeElement && (this.lastHiddenFocusableElement.nativeElement.tabIndex = -1);
  }
  onFocusout(event) {
    if (!this.el.nativeElement.contains(event.relatedTarget) && this.lastHiddenFocusableElement && this.firstHiddenFocusableElement) {
      this.firstHiddenFocusableElement.nativeElement.tabIndex = this.lastHiddenFocusableElement.nativeElement.tabIndex = void 0;
      this.scrollerTabIndex = "0";
    }
  }
  onListFocus(event) {
    this.focused = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.findSelectedOptionIndex();
    this.focusedOptionIndex.set(focusedOptionIndex);
    this.scrollInView(focusedOptionIndex);
    this.onFocus.emit(event);
    this.scrollerTabIndex = "-1";
  }
  onListBlur(event) {
    this.focused = false;
    this.focusedOptionIndex.set(-1);
    this.startRangeIndex.set(-1);
    this.searchValue = "";
    this.onBlur.emit(event);
  }
  onHeaderCheckboxKeyDown(event) {
    if (this.$disabled()) {
      event.preventDefault();
      return;
    }
    switch (event.code) {
      case "Space":
        this.onToggleAll(event);
        break;
      case "Enter":
        this.onToggleAll(event);
        break;
      case "Tab":
        this.onHeaderCheckboxTabKeyDown(event);
        break;
      default:
        break;
    }
  }
  onHeaderCheckboxTabKeyDown(event) {
    bt(this.listViewChild?.nativeElement);
    event.preventDefault();
  }
  onFilterChange(event) {
    let value = event.target.value?.trim();
    this._filterValue.set(value);
    this.focusedOptionIndex.set(-1);
    this.startRangeIndex.set(-1);
    this.onFilter.emit({
      originalEvent: event,
      filter: this._filterValue()
    });
    !this.virtualScrollerDisabled && this.scroller?.scrollToIndex(0);
  }
  onFilterBlur(event) {
    this.focusedOptionIndex.set(-1);
    this.startRangeIndex.set(-1);
  }
  onListKeyDown(event) {
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
      case "NumpadEnter":
        this.onSpaceKey(event);
        break;
      case "Tab":
        break;
      case "ShiftLeft":
      case "ShiftRight":
        this.onShiftKey();
        break;
      default:
        if (this.multiple && event.code === "KeyA" && metaKey) {
          const value = this.visibleOptions().filter((option) => this.isValidOption(option)).map((option) => this.getOptionValue(option));
          this.updateModel(value, event);
          event.preventDefault();
          break;
        }
        if (!metaKey && J(event.key)) {
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
        this.onArrowUpKey(event);
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
        this.onEnterKey(event);
        break;
      case "ShiftLeft":
      case "ShiftRight":
        this.onShiftKey();
        break;
      default:
        break;
    }
  }
  onArrowDownKey(event) {
    const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.findFirstFocusedOptionIndex();
    if (this.multiple && event.shiftKey) {
      this.onOptionSelectRange(event, this.startRangeIndex(), optionIndex);
    }
    this.changeFocusedOptionIndex(event, optionIndex);
    event.preventDefault();
  }
  onArrowUpKey(event) {
    const optionIndex = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.findLastFocusedOptionIndex();
    if (this.multiple && event.shiftKey) {
      this.onOptionSelectRange(event, optionIndex, this.startRangeIndex());
    }
    this.changeFocusedOptionIndex(event, optionIndex);
    event.preventDefault();
  }
  onArrowLeftKey(event, pressedInInputText = false) {
    pressedInInputText && this.focusedOptionIndex.set(-1);
  }
  onHomeKey(event, pressedInInputText = false) {
    if (pressedInInputText) {
      event.currentTarget.setSelectionRange(0, 0);
      this.focusedOptionIndex.set(-1);
    } else {
      let metaKey = event.metaKey || event.ctrlKey;
      let optionIndex = this.findFirstOptionIndex();
      if (this.multiple && event.shiftKey && metaKey) {
        this.onOptionSelectRange(event, optionIndex, this.startRangeIndex());
      }
      this.changeFocusedOptionIndex(event, optionIndex);
    }
    event.preventDefault();
  }
  onEndKey(event, pressedInInputText = false) {
    if (pressedInInputText) {
      const target = event.currentTarget;
      const len = target.value.length;
      target.setSelectionRange(len, len);
      this.focusedOptionIndex.set(-1);
    } else {
      let metaKey = event.metaKey || event.ctrlKey;
      let optionIndex = this.findLastOptionIndex();
      if (this.multiple && event.shiftKey && metaKey) {
        this.onOptionSelectRange(event, this.startRangeIndex(), optionIndex);
      }
      this.changeFocusedOptionIndex(event, optionIndex);
    }
    event.preventDefault();
  }
  onPageDownKey(event) {
    this.scrollInView(0);
    event.preventDefault();
  }
  onPageUpKey(event) {
    this.scrollInView(this.visibleOptions().length - 1);
    event.preventDefault();
  }
  onEnterKey(event) {
    if (this.focusedOptionIndex() !== -1) {
      if (this.multiple && event.shiftKey) this.onOptionSelectRange(event, this.focusedOptionIndex());
      else this.onOptionSelect(event, this.visibleOptions()[this.focusedOptionIndex()]);
    }
    event.preventDefault();
  }
  onSpaceKey(event) {
    this.onEnterKey(event);
  }
  onShiftKey() {
    const focusedOptionIndex = this.focusedOptionIndex();
    this.startRangeIndex.set(focusedOptionIndex);
  }
  getOptionGroupChildren(optionGroup) {
    return this.optionGroupChildren ? p(optionGroup, this.optionGroupChildren) : optionGroup.items;
  }
  getOptionGroupLabel(optionGroup) {
    return this.optionGroupLabel ? p(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label !== void 0 ? optionGroup.label : optionGroup;
  }
  getOptionLabel(option) {
    return this.optionLabel ? p(option, this.optionLabel) : option.label != void 0 ? option.label : option;
  }
  getOptionIndex(index, scrollerOptions) {
    return this.virtualScrollerDisabled ? index : scrollerOptions && scrollerOptions.getItemOptions(index)["index"];
  }
  getOptionValue(option) {
    return this.optionValue ? p(option, this.optionValue) : !this.optionLabel && option && option.value !== void 0 ? option.value : option;
  }
  getAriaPosInset(index) {
    return (this.optionGroupLabel ? index - this.visibleOptions().slice(0, index).filter((option) => this.isOptionGroup(option)).length : index) + 1;
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
  hasSelectedOption() {
    return s(this.modelValue());
  }
  isOptionGroup(option) {
    return this.optionGroupLabel && option.optionGroup && option.group;
  }
  changeFocusedOptionIndex(event, index) {
    if (this.focusedOptionIndex() !== index) {
      this.focusedOptionIndex.set(index);
      this.scrollInView();
      if (this.selectOnFocus && !this.multiple) {
        this.onOptionSelect(event, this.visibleOptions()[index]);
      }
    }
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
  isOptionMatched(option) {
    return this.isValidOption(option) && this.getOptionLabel(option)?.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue?.toLocaleLowerCase(this.filterLocale));
  }
  scrollInView(index = -1) {
    const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
    const element = z(this.listViewChild?.nativeElement, `li[id="${id}"]`);
    if (element) {
      element.scrollIntoView && element.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    } else if (!this.virtualScrollerDisabled) {
      this.virtualScroll && this.scroller?.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex());
    }
  }
  findFirstOptionIndex() {
    return this.visibleOptions().findIndex((option) => this.isValidOption(option));
  }
  findLastOptionIndex() {
    return M(this.visibleOptions(), (option) => this.isValidOption(option));
  }
  findFirstFocusedOptionIndex() {
    const selectedIndex = this.findFirstSelectedOptionIndex();
    return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
  }
  findLastFocusedOptionIndex() {
    const selectedIndex = this.findLastSelectedOptionIndex();
    return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
  }
  findLastSelectedOptionIndex() {
    return this.hasSelectedOption() ? M(this.visibleOptions(), (option) => this.isValidSelectedOption(option)) : -1;
  }
  findNextOptionIndex(index) {
    const matchedOptionIndex = index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex((option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
  }
  findNextSelectedOptionIndex(index) {
    const matchedOptionIndex = this.hasSelectedOption() && index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex((option) => this.isValidSelectedOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : -1;
  }
  findPrevSelectedOptionIndex(index) {
    const matchedOptionIndex = this.hasSelectedOption() && index > 0 ? M(this.visibleOptions().slice(0, index), (option) => this.isValidSelectedOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : -1;
  }
  findFirstSelectedOptionIndex() {
    return this.hasSelectedOption() ? this.visibleOptions().findIndex((option) => this.isValidSelectedOption(option)) : -1;
  }
  findPrevOptionIndex(index) {
    const matchedOptionIndex = index > 0 ? M(this.visibleOptions().slice(0, index), (option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : index;
  }
  findSelectedOptionIndex() {
    if (this.$filled()) {
      if (this.multiple) {
        for (let index = this.modelValue().length - 1; index >= 0; index--) {
          const value = this.modelValue()[index];
          const matchedOptionIndex = this.visibleOptions().findIndex((option) => this.isValidSelectedOption(option) && this.isEquals(value, this.getOptionValue(option)));
          if (matchedOptionIndex > -1) return matchedOptionIndex;
        }
      } else {
        return this.visibleOptions().findIndex((option) => this.isValidSelectedOption(option));
      }
    }
    return -1;
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
  equalityKey() {
    return this.optionValue ? null : this.dataKey;
  }
  isValidSelectedOption(option) {
    return this.isValidOption(option) && this.isSelected(option);
  }
  isOptionDisabled(option) {
    if (c(this.optionDisabled)) {
      return this.optionDisabled(option);
    }
    return this.optionDisabled ? p(option, this.optionDisabled) : false;
  }
  isEquals(value1, value2) {
    return k(value1, value2, this.equalityKey() || "");
  }
  isSelected(option) {
    const optionValue = this.getOptionValue(option);
    if (this.multiple) return (this.modelValue() || []).some((value) => this.isEquals(value, optionValue));
    else return this.isEquals(this.modelValue(), optionValue);
  }
  isValidOption(option) {
    return option && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
  }
  isEmpty() {
    return !this._options()?.length || !this.visibleOptions()?.length;
  }
  hasFilter() {
    return this._filterValue() && (this._filterValue()?.trim().length || 0) > 0;
  }
  resetFilter() {
    if (this.filterViewChild && this.filterViewChild.nativeElement) {
      this.filterViewChild.nativeElement.value = "";
    }
    this._filterValue.set(null);
  }
  onDragEntered() {
    this.isDragging.set(true);
    this.el.nativeElement.setAttribute("p-listbox-dragging", "true");
  }
  onDragExited() {
    this.isDragging.set(false);
    this.el.nativeElement.setAttribute("p-listbox-dragging", "false");
  }
  drop(event) {
    this.isDragging.set(false);
    if (event) {
      if (this.dragdrop && event.previousContainer === event.container) {
        const currentOptions = [...this._options()];
        moveItemInArray(currentOptions, event.previousIndex, event.currentIndex);
        this._options.set(currentOptions);
        this.changeFocusedOptionIndex(event, event.currentIndex);
        if (this.modelValue()) {
          this.writeModelValue(this.modelValue());
          this.onModelChange(this.modelValue());
        }
        this.cd.markForCheck();
      }
      this.onDrop.emit(event);
    }
  }
  get containerDataP() {
    return this.cn({
      invalid: this.invalid(),
      disabled: this.$disabled()
    });
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    this.value = value;
    setModelValue(this.value);
    this.cd.markForCheck();
  }
  onDestroy() {
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
  }
  static \u0275fac = function Listbox_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Listbox)(\u0275\u0275directiveInject(FilterService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Listbox,
    selectors: [["p-listbox"], ["p-listBox"], ["p-list-box"]],
    contentQueries: function Listbox_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, Header, 5)(dirIndex, Footer, 5)(dirIndex, _c05, 4)(dirIndex, _c15, 4)(dirIndex, _c23, 4)(dirIndex, _c32, 4)(dirIndex, _c42, 4)(dirIndex, _c5, 4)(dirIndex, _c6, 4)(dirIndex, _c7, 4)(dirIndex, _c8, 4)(dirIndex, _c9, 4)(dirIndex, _c10, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerFacet = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerFacet = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.groupTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.filterTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.emptyFilterTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.emptyTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.filterIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.checkIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.checkmarkTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loaderTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Listbox_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c11, 5)(_c32, 5)(_c122, 5)(_c132, 5)(_c142, 5)(_c152, 5)(_c16, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerCheckboxViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.filterViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.lastHiddenFocusableElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.firstHiddenFocusableElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scroller = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.containerViewChild = _t.first);
      }
    },
    hostVars: 4,
    hostBindings: function Listbox_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focusout", function Listbox_focusout_HostBindingHandler($event) {
          return ctx.onHostFocusOut($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id)("data-p", ctx.containerDataP);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      hostName: "hostName",
      id: "id",
      searchMessage: "searchMessage",
      emptySelectionMessage: "emptySelectionMessage",
      selectionMessage: "selectionMessage",
      autoOptionFocus: [2, "autoOptionFocus", "autoOptionFocus", booleanAttribute],
      ariaLabel: "ariaLabel",
      selectOnFocus: [2, "selectOnFocus", "selectOnFocus", booleanAttribute],
      searchLocale: [2, "searchLocale", "searchLocale", booleanAttribute],
      focusOnHover: [2, "focusOnHover", "focusOnHover", booleanAttribute],
      filterMessage: "filterMessage",
      filterFields: "filterFields",
      lazy: [2, "lazy", "lazy", booleanAttribute],
      virtualScroll: [2, "virtualScroll", "virtualScroll", booleanAttribute],
      virtualScrollItemSize: [2, "virtualScrollItemSize", "virtualScrollItemSize", numberAttribute],
      virtualScrollOptions: "virtualScrollOptions",
      scrollHeight: "scrollHeight",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      multiple: [2, "multiple", "multiple", booleanAttribute],
      styleClass: "styleClass",
      listStyle: "listStyle",
      listStyleClass: "listStyleClass",
      readonly: [2, "readonly", "readonly", booleanAttribute],
      checkbox: [2, "checkbox", "checkbox", booleanAttribute],
      filter: [2, "filter", "filter", booleanAttribute],
      filterBy: "filterBy",
      filterMatchMode: "filterMatchMode",
      filterLocale: "filterLocale",
      metaKeySelection: [2, "metaKeySelection", "metaKeySelection", booleanAttribute],
      dataKey: "dataKey",
      showToggleAll: [2, "showToggleAll", "showToggleAll", booleanAttribute],
      optionLabel: "optionLabel",
      optionValue: "optionValue",
      optionGroupChildren: "optionGroupChildren",
      optionGroupLabel: "optionGroupLabel",
      optionDisabled: "optionDisabled",
      ariaFilterLabel: "ariaFilterLabel",
      filterPlaceHolder: "filterPlaceHolder",
      emptyFilterMessage: "emptyFilterMessage",
      emptyMessage: "emptyMessage",
      group: [2, "group", "group", booleanAttribute],
      options: "options",
      filterValue: "filterValue",
      selectAll: "selectAll",
      striped: [2, "striped", "striped", booleanAttribute],
      highlightOnSelect: [2, "highlightOnSelect", "highlightOnSelect", booleanAttribute],
      checkmark: [2, "checkmark", "checkmark", booleanAttribute],
      dragdrop: [2, "dragdrop", "dragdrop", booleanAttribute],
      dropListData: "dropListData",
      fluid: [1, "fluid"]
    },
    outputs: {
      onChange: "onChange",
      onClick: "onClick",
      onDblClick: "onDblClick",
      onFilter: "onFilter",
      onFocus: "onFocus",
      onBlur: "onBlur",
      onSelectAllChange: "onSelectAllChange",
      onLazyLoad: "onLazyLoad",
      onDrop: "onDrop"
    },
    features: [\u0275\u0275ProvidersFeature([LISTBOX_VALUE_ACCESSOR, ListBoxStyle, {
      provide: CDK_DRAG_CONFIG,
      useValue: {
        zIndex: 1200
      }
    }, {
      provide: LISTBOX_INSTANCE,
      useExisting: _Listbox
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Listbox
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c18,
    decls: 15,
    vars: 20,
    consts: [["firstHiddenFocusableElement", ""], ["container", ""], ["lastHiddenFocusableElement", ""], ["builtInFilterElement", ""], ["headerchkbox", ""], ["icon", ""], ["filterInput", ""], ["emptyFilter", ""], ["empty", ""], ["buildInItems", ""], ["scroller", ""], ["content", ""], ["loader", ""], ["list", ""], ["role", "presentation", 1, "p-hidden-accessible", "p-hidden-focusable", 3, "focus", "tabindex", "pBind"], [3, "class", "pBind", 4, "ngIf"], ["cdkDropList", "", 3, "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "ngStyle", "cdkDropListData", "pBind"], [3, "class", "pBind"], [4, "ngIf"], ["role", "status", "aria-live", "polite", "class", "p-hidden-accessible", 3, "pBind", 4, "ngIf"], ["role", "status", "aria-live", "polite", 1, "p-hidden-accessible", 3, "pBind"], [3, "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", "ngModel", "disabled", "tabindex", "variant", "binary", "pt", "unstyled", "onChange", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [3, "onChange", "ngModel", "disabled", "tabindex", "variant", "binary", "pt", "unstyled"], ["hostName", "listbox", 3, "pt", "unstyled"], ["role", "status", 1, "p-hidden-accessible", 3, "pBind"], ["pInputText", "", "type", "text", "role", "searchbox", "hostName", "listbox", 3, "input", "keydown", "blur", "value", "pt", "unstyled"], [3, "pt", "unstyled"], ["data-p-icon", "search", 3, "pBind", 4, "ngIf"], ["data-p-icon", "search", 3, "pBind"], [4, "ngTemplateOutlet"], ["hostName", "listbox", 3, "pt", "items", "style", "itemSize", "autoSize", "lazy", "options", "tabindex", "onLazyLoad", 4, "ngIf"], ["hostName", "listbox", 3, "onLazyLoad", "pt", "items", "itemSize", "autoSize", "lazy", "options", "tabindex"], ["role", "listbox", 3, "focus", "blur", "keydown", "id", "tabindex", "ngClass", "pBind"], ["ngFor", "", 3, "ngForOf"], ["role", "option", "cdkDrag", "", 3, "cdkDragStarted", "cdkDragEnded", "pBind", "ngStyle", "cdkDragData", "cdkDragDisabled"], ["pRipple", "", "role", "option", "cdkDrag", "", 3, "click", "dblclick", "mousedown", "mouseenter", "touchend", "cdkDragStarted", "cdkDragEnded", "ngStyle", "pBind", "cdkDragData", "cdkDragDisabled"], ["hostName", "listbox", 3, "class", "ngModel", "readonly", "disabled", "tabindex", "variant", "binary", "pt", "unstyled", 4, "ngIf"], ["hostName", "listbox", 3, "ngModel", "readonly", "disabled", "tabindex", "variant", "binary", "pt", "unstyled"], ["data-p-icon", "blank", 3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "check", 3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "blank", 3, "pBind"], ["data-p-icon", "check", 3, "pBind"]],
    template: function Listbox_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c17);
        \u0275\u0275elementStart(0, "span", 14, 0);
        \u0275\u0275listener("focus", function Listbox_Template_span_focus_0_listener($event) {
          return ctx.onFirstHiddenFocus($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(2, Listbox_div_2_Template, 3, 8, "div", 15)(3, Listbox_div_3_Template, 5, 6, "div", 15);
        \u0275\u0275elementStart(4, "div", 16, 1);
        \u0275\u0275listener("cdkDropListDropped", function Listbox_Template_div_cdkDropListDropped_4_listener($event) {
          return ctx.drop($event);
        })("cdkDropListEntered", function Listbox_Template_div_cdkDropListEntered_4_listener() {
          return ctx.onDragEntered();
        })("cdkDropListExited", function Listbox_Template_div_cdkDropListExited_4_listener() {
          return ctx.onDragExited();
        });
        \u0275\u0275conditionalCreate(6, Listbox_Conditional_6_Template, 3, 4, "div", 17)(7, Listbox_Conditional_7_Template, 3, 4, "div", 17)(8, Listbox_Conditional_8_Template, 4, 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, Listbox_div_9_Template, 3, 5, "div", 18)(10, Listbox_span_10_Template, 2, 2, "span", 19);
        \u0275\u0275elementStart(11, "span", 20);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 14, 2);
        \u0275\u0275listener("focus", function Listbox_Template_span_focus_13_listener($event) {
          return ctx.onLastHiddenFocus($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("tabindex", !ctx.$disabled() ? ctx.tabindex : -1)("pBind", ctx.ptm("hiddenFirstFocusableElement"));
        \u0275\u0275attribute("data-p-hidden-focusable", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.headerFacet || ctx.headerTemplate || ctx._headerTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.checkbox && ctx.multiple && ctx.showToggleAll || ctx.filter);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cn(ctx.cx("listContainer"), ctx.listStyleClass));
        \u0275\u0275styleProp("max-height", ctx.virtualScroll ? "auto" : ctx.scrollHeight || "auto");
        \u0275\u0275property("ngStyle", ctx.listStyle)("cdkDropListData", ctx.cdkDropData())("pBind", ctx.ptm("listContainer"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.hasFilter() && ctx.isEmpty() ? 6 : !ctx.hasFilter() && ctx.isEmpty() ? 7 : 8);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.footerFacet || ctx.footerTemplate || ctx._footerTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isEmpty());
        \u0275\u0275advance();
        \u0275\u0275property("pBind", ctx.ptm("hiddenSelectedMessage"));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.selectedMessageText, " ");
        \u0275\u0275advance();
        \u0275\u0275property("tabindex", !ctx.$disabled() ? ctx.tabindex : -1)("pBind", ctx.ptm("hiddenLastFocusableEl"));
        \u0275\u0275attribute("data-p-hidden-focusable", true);
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Ripple, Scroller, InputIcon, SearchIcon, Checkbox, CheckIcon, IconField, InputText, BlankIcon, FormsModule, NgControlStatus, NgModel, SharedModule, DragDropModule, CdkDropList, CdkDrag, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Listbox, [{
    type: Component,
    args: [{
      selector: "p-listbox, p-listBox, p-list-box",
      standalone: true,
      imports: [CommonModule, Ripple, Scroller, InputIcon, SearchIcon, Checkbox, CheckIcon, IconField, InputText, BlankIcon, FormsModule, SharedModule, DragDropModule, BindModule],
      template: `
        <span
            #firstHiddenFocusableElement
            role="presentation"
            class="p-hidden-accessible p-hidden-focusable"
            [tabindex]="!$disabled() ? tabindex : -1"
            (focus)="onFirstHiddenFocus($event)"
            [attr.data-p-hidden-focusable]="true"
            [pBind]="ptm('hiddenFirstFocusableElement')"
        >
        </span>
        <div [class]="cx('header')" *ngIf="headerFacet || headerTemplate || _headerTemplate" [pBind]="ptm('header')">
            <ng-content select="p-header"></ng-content>
            <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate; context: { $implicit: modelValue(), options: visibleOptions() }"></ng-container>
        </div>
        <div [class]="cx('header')" *ngIf="(checkbox && multiple && showToggleAll) || filter" [pBind]="ptm('header')">
            <p-checkbox
                #headerchkbox
                (onChange)="onToggleAll($event)"
                *ngIf="checkbox && multiple && showToggleAll"
                [class]="cx('optionCheckIcon')"
                [ngModel]="allSelected()"
                [disabled]="$disabled()"
                [tabindex]="-1"
                [variant]="config.inputStyle() === 'filled' || config.inputVariant() === 'filled' ? 'filled' : 'outlined'"
                [binary]="true"
                [attr.aria-label]="toggleAllAriaLabel"
                [pt]="ptm('pcCheckbox')"
                [unstyled]="unstyled()"
            >
                <ng-container *ngIf="checkIconTemplate || _checkIconTemplate">
                    <ng-template #icon>
                        <ng-template *ngTemplateOutlet="checkIconTemplate || _checkIconTemplate; context: { $implicit: allSelected() }"></ng-template>
                    </ng-template>
                </ng-container>
            </p-checkbox>
            <ng-container *ngIf="filterTemplate || _filterTemplate; else builtInFilterElement">
                <ng-container *ngTemplateOutlet="filterTemplate || _filterTemplate; context: { options: filterOptions }"></ng-container>
            </ng-container>
            <ng-template #builtInFilterElement>
                @if (filter) {
                    <p-iconfield [pt]="ptm('pcFilterContainer')" hostName="listbox" [unstyled]="unstyled()">
                        <input
                            #filterInput
                            pInputText
                            type="text"
                            [class]="cx('pcFilter')"
                            role="searchbox"
                            [value]="_filterValue() || ''"
                            [attr.disabled]="$disabled() ? '' : undefined"
                            [attr.aria-owns]="id + '_list'"
                            [attr.aria-activedescendant]="focusedOptionId"
                            [attr.placeholder]="filterPlaceHolder"
                            [attr.aria-label]="ariaFilterLabel"
                            [attr.tabindex]="!$disabled() && !focused ? tabindex : -1"
                            (input)="onFilterChange($event)"
                            (keydown)="onFilterKeyDown($event)"
                            (blur)="onFilterBlur($event)"
                            [pt]="ptm('pcFilter')"
                            [unstyled]="unstyled()"
                            hostName="listbox"
                        />
                        <p-inputicon [pt]="ptm('pcFilterIconContainer')" [unstyled]="unstyled()">
                            <svg data-p-icon="search" *ngIf="!filterIconTemplate && !_filterIconTemplate" [attr.aria-hidden]="true" [pBind]="ptm('filterIcon')" />
                            <span *ngIf="filterIconTemplate || _filterIconTemplate" [attr.aria-hidden]="true">
                                <ng-template *ngTemplateOutlet="filterIconTemplate || _filterIconTemplate"></ng-template>
                            </span>
                        </p-inputicon>
                    </p-iconfield>
                }
                <span role="status" [pBind]="ptm('hiddenFilterResult')" [attr.aria-live]="'polite'" class="p-hidden-accessible" [attr.data-p-hidden-accessible]="true">
                    {{ filterResultMessageText }}
                </span>
            </ng-template>
        </div>
        <div
            #container
            [class]="cn(cx('listContainer'), listStyleClass)"
            [ngStyle]="listStyle"
            [style.max-height]="virtualScroll ? 'auto' : scrollHeight || 'auto'"
            cdkDropList
            [cdkDropListData]="cdkDropData()"
            (cdkDropListDropped)="drop($event)"
            (cdkDropListEntered)="onDragEntered()"
            (cdkDropListExited)="onDragExited()"
            [pBind]="ptm('listContainer')"
        >
            @if (hasFilter() && isEmpty()) {
                <div [class]="cx('emptyMessage')" [pBind]="ptm('emptyMessage')">
                    @if (!emptyFilterTemplate && !_emptyFilterTemplate && !_emptyTemplate && !emptyTemplate) {
                        {{ emptyFilterMessageText }}
                    } @else {
                        <ng-container #emptyFilter *ngTemplateOutlet="emptyFilterTemplate || _emptyFilterTemplate || _emptyTemplate || emptyTemplate"></ng-container>
                    }
                </div>
            } @else if (!hasFilter() && isEmpty()) {
                <div [class]="cx('emptyMessage')" [pBind]="ptm('emptyMessage')">
                    @if (!emptyTemplate && !_emptyTemplate) {
                        {{ emptyMessage }}
                    } @else {
                        <ng-container #empty *ngTemplateOutlet="emptyTemplate || _emptyTemplate"></ng-container>
                    }
                </div>
            } @else {
                <p-scroller
                    [pt]="ptm('virtualScroller')"
                    hostName="listbox"
                    #scroller
                    *ngIf="virtualScroll"
                    [items]="visibleOptions()"
                    [style]="{ height: scrollHeight }"
                    [itemSize]="virtualScrollItemSize"
                    [autoSize]="true"
                    [lazy]="lazy"
                    [options]="virtualScrollOptions"
                    (onLazyLoad)="onLazyLoad.emit($event)"
                    [tabindex]="scrollerTabIndex"
                >
                    <ng-template #content let-items let-scrollerOptions="options">
                        <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: items, options: scrollerOptions }"></ng-container>
                    </ng-template>
                    @if (loaderTemplate || _loaderTemplate) {
                        <ng-template #loader let-scrollerOptions="options">
                            <ng-container *ngTemplateOutlet="loaderTemplate || _loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                        </ng-template>
                    }
                </p-scroller>
                <ng-container *ngIf="!virtualScroll">
                    <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: visibleOptions(), options: {} }"></ng-container>
                </ng-container>

                <ng-template #buildInItems let-items let-scrollerOptions="options">
                    <ul
                        #list
                        [id]="id + '_list'"
                        [class]="cx('list')"
                        role="listbox"
                        [tabindex]="-1"
                        [attr.aria-multiselectable]="true"
                        [ngClass]="scrollerOptions.contentStyleClass"
                        [style]="scrollerOptions.contentStyle"
                        [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                        [attr.aria-label]="ariaLabel"
                        [attr.aria-disabled]="$disabled()"
                        (focus)="onListFocus($event)"
                        (blur)="onListBlur($event)"
                        (keydown)="onListKeyDown($event)"
                        [pBind]="ptm('list')"
                    >
                        <ng-template ngFor let-option [ngForOf]="items" let-i="index">
                            <ng-container *ngIf="isOptionGroup(option)">
                                <li
                                    [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)"
                                    [class]="cx('optionGroup')"
                                    [pBind]="getPTOptions(option.optionGroup, scrollerOptions, i, 'optionGroup')"
                                    [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }"
                                    role="option"
                                    cdkDrag
                                    [cdkDragData]="option"
                                    [cdkDragDisabled]="!dragdrop"
                                    (cdkDragStarted)="isDragging.set(true)"
                                    (cdkDragEnded)="isDragging.set(false)"
                                >
                                    <span *ngIf="!groupTemplate && !_groupTemplate">{{ getOptionGroupLabel(option.optionGroup) }}</span>
                                    <ng-container *ngTemplateOutlet="groupTemplate || _groupTemplate; context: { $implicit: option.optionGroup }"></ng-container>
                                </li>
                            </ng-container>
                            <ng-container *ngIf="!isOptionGroup(option)">
                                <li
                                    pRipple
                                    [class]="cx('option', { option, i, scrollerOptions })"
                                    role="option"
                                    [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)"
                                    [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }"
                                    [attr.aria-label]="getOptionLabel(option)"
                                    [attr.aria-selected]="isSelected(option)"
                                    [attr.aria-disabled]="isOptionDisabled(option)"
                                    [attr.aria-setsize]="ariaSetSize"
                                    [attr.ariaPosInset]="getAriaPosInset(getOptionIndex(i, scrollerOptions))"
                                    [attr.data-p-selected]="isSelected(option)"
                                    [attr.data-p-focused]="focusedOptionIndex() === getOptionIndex(i, scrollerOptions)"
                                    [attr.data-p-disabled]="isOptionDisabled(option)"
                                    [pBind]="getPTOptions(option, scrollerOptions, i, 'option')"
                                    (click)="onOptionSelect($event, option, getOptionIndex(i, scrollerOptions))"
                                    (dblclick)="onOptionDoubleClick($event, option)"
                                    (mousedown)="onOptionMouseDown($event, getOptionIndex(i, scrollerOptions))"
                                    (mouseenter)="onOptionMouseEnter($event, getOptionIndex(i, scrollerOptions))"
                                    (touchend)="onOptionTouchEnd()"
                                    cdkDrag
                                    [cdkDragData]="option"
                                    [cdkDragDisabled]="!dragdrop"
                                    (cdkDragStarted)="isDragging.set(true)"
                                    (cdkDragEnded)="isDragging.set(false)"
                                >
                                    <p-checkbox
                                        *ngIf="checkbox && multiple"
                                        [class]="cx('optionCheckIcon')"
                                        [ngModel]="isSelected(option)"
                                        [readonly]="true"
                                        [disabled]="$disabled() || isOptionDisabled(option)"
                                        [tabindex]="-1"
                                        [variant]="config.inputStyle() === 'filled' || config.inputVariant() === 'filled' ? 'filled' : 'outlined'"
                                        [binary]="true"
                                        [pt]="ptm('pcCheckbox')"
                                        hostName="listbox"
                                        [unstyled]="unstyled()"
                                    >
                                        <ng-container *ngIf="checkIconTemplate || _checkIconTemplate">
                                            <ng-template #icon>
                                                <ng-template *ngTemplateOutlet="checkIconTemplate || _checkIconTemplate; context: { $implicit: isSelected(option) }"></ng-template>
                                            </ng-template>
                                        </ng-container>
                                    </p-checkbox>
                                    <ng-container *ngIf="checkmark">
                                        <ng-container *ngIf="!checkmarkTemplate && !_checkmarkTemplate">
                                            <svg data-p-icon="blank" *ngIf="!isSelected(option)" [class]="cx('optionBlankIcon')" [pBind]="ptm('optionBlankIcon')" />
                                            <svg data-p-icon="check" *ngIf="isSelected(option)" [class]="cx('optionCheckIcon')" [pBind]="ptm('optionCheckIcon')" />
                                        </ng-container>
                                        <ng-container *ngTemplateOutlet="checkmarkTemplate || _checkmarkTemplate; context: { implicit: isSelected(option) }"></ng-container>
                                    </ng-container>
                                    <span *ngIf="!itemTemplate && !_itemTemplate">{{ getOptionLabel(option) }}</span>
                                    <ng-container
                                        *ngTemplateOutlet="
                                            itemTemplate || _itemTemplate;
                                            context: {
                                                $implicit: option,
                                                index: getOptionIndex(i, scrollerOptions),
                                                selected: isSelected(option),
                                                disabled: isOptionDisabled(option)
                                            }
                                        "
                                    ></ng-container>
                                </li>
                            </ng-container>
                        </ng-template>
                    </ul>
                </ng-template>
            }
        </div>
        <div *ngIf="footerFacet || footerTemplate || _footerTemplate">
            <ng-content select="p-footer"></ng-content>
            <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate; context: { $implicit: modelValue(), options: visibleOptions() }"></ng-container>
        </div>
        <span *ngIf="isEmpty()" role="status" aria-live="polite" class="p-hidden-accessible" [pBind]="ptm('hiddenEmptyMessage')">
            {{ emptyMessage }}
        </span>
        <span role="status" aria-live="polite" class="p-hidden-accessible" [pBind]="ptm('hiddenSelectedMessage')">
            {{ selectedMessageText }}
        </span>
        <span
            #lastHiddenFocusableElement
            role="presentation"
            class="p-hidden-accessible p-hidden-focusable"
            [tabindex]="!$disabled() ? tabindex : -1"
            (focus)="onLastHiddenFocus($event)"
            [attr.data-p-hidden-focusable]="true"
            [pBind]="ptm('hiddenLastFocusableEl')"
        >
        </span>
    `,
      providers: [LISTBOX_VALUE_ACCESSOR, ListBoxStyle, {
        provide: CDK_DRAG_CONFIG,
        useValue: {
          zIndex: 1200
        }
      }, {
        provide: LISTBOX_INSTANCE,
        useExisting: Listbox
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Listbox
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[attr.id]": "id",
        "[class]": "cn(cx('root'), styleClass)",
        "[attr.data-p]": "containerDataP"
      },
      hostDirectives: [Bind]
    }]
  }], () => [{
    type: FilterService
  }], {
    hostName: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    searchMessage: [{
      type: Input
    }],
    emptySelectionMessage: [{
      type: Input
    }],
    selectionMessage: [{
      type: Input
    }],
    autoOptionFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaLabel: [{
      type: Input
    }],
    selectOnFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    searchLocale: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    focusOnHover: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filterMessage: [{
      type: Input
    }],
    filterFields: [{
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
    virtualScrollItemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    virtualScrollOptions: [{
      type: Input
    }],
    scrollHeight: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    styleClass: [{
      type: Input
    }],
    listStyle: [{
      type: Input
    }],
    listStyleClass: [{
      type: Input
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    checkbox: [{
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
    filterBy: [{
      type: Input
    }],
    filterMatchMode: [{
      type: Input
    }],
    filterLocale: [{
      type: Input
    }],
    metaKeySelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dataKey: [{
      type: Input
    }],
    showToggleAll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    optionLabel: [{
      type: Input
    }],
    optionValue: [{
      type: Input
    }],
    optionGroupChildren: [{
      type: Input
    }],
    optionGroupLabel: [{
      type: Input
    }],
    optionDisabled: [{
      type: Input
    }],
    ariaFilterLabel: [{
      type: Input
    }],
    filterPlaceHolder: [{
      type: Input
    }],
    emptyFilterMessage: [{
      type: Input
    }],
    emptyMessage: [{
      type: Input
    }],
    group: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
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
    striped: [{
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
    checkmark: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dragdrop: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dropListData: [{
      type: Input
    }],
    fluid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "fluid",
        required: false
      }]
    }],
    onChange: [{
      type: Output
    }],
    onClick: [{
      type: Output
    }],
    onDblClick: [{
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
    onSelectAllChange: [{
      type: Output
    }],
    onLazyLoad: [{
      type: Output
    }],
    onDrop: [{
      type: Output
    }],
    headerCheckboxViewChild: [{
      type: ViewChild,
      args: ["headerchkbox"]
    }],
    filterViewChild: [{
      type: ViewChild,
      args: ["filter"]
    }],
    lastHiddenFocusableElement: [{
      type: ViewChild,
      args: ["lastHiddenFocusableElement"]
    }],
    firstHiddenFocusableElement: [{
      type: ViewChild,
      args: ["firstHiddenFocusableElement"]
    }],
    scroller: [{
      type: ViewChild,
      args: ["scroller"]
    }],
    listViewChild: [{
      type: ViewChild,
      args: ["list"]
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    headerFacet: [{
      type: ContentChild,
      args: [Header]
    }],
    footerFacet: [{
      type: ContentChild,
      args: [Footer]
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
    filterIconTemplate: [{
      type: ContentChild,
      args: ["filtericon", {
        descendants: false
      }]
    }],
    checkIconTemplate: [{
      type: ContentChild,
      args: ["checkicon", {
        descendants: false
      }]
    }],
    checkmarkTemplate: [{
      type: ContentChild,
      args: ["checkmark", {
        descendants: false
      }]
    }],
    loaderTemplate: [{
      type: ContentChild,
      args: ["loader", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    onHostFocusOut: [{
      type: HostListener,
      args: ["focusout", ["$event"]]
    }]
  });
})();
var ListboxModule = class _ListboxModule {
  static \u0275fac = function ListboxModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListboxModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ListboxModule,
    imports: [Listbox, SharedModule],
    exports: [Listbox, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Listbox, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListboxModule, [{
    type: NgModule,
    args: [{
      imports: [Listbox, SharedModule],
      exports: [Listbox, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/popover/index.mjs
var style7 = "\n    .p-popover {\n        margin-block-start: dt('popover.gutter');\n        background: dt('popover.background');\n        color: dt('popover.color');\n        border: 1px solid dt('popover.border.color');\n        border-radius: dt('popover.border.radius');\n        box-shadow: dt('popover.shadow');\n        will-change: transform;\n    }\n\n    .p-popover-content {\n        padding: dt('popover.content.padding');\n    }\n\n    .p-popover-flipped {\n        margin-block-start: calc(dt('popover.gutter') * -1);\n        margin-block-end: dt('popover.gutter');\n    }\n\n    .p-popover:after,\n    .p-popover:before {\n        bottom: 100%;\n        left: calc(dt('popover.arrow.offset') + dt('popover.arrow.left'));\n        content: ' ';\n        height: 0;\n        width: 0;\n        position: absolute;\n        pointer-events: none;\n    }\n\n    .p-popover:after {\n        border-width: calc(dt('popover.gutter') - 2px);\n        margin-left: calc(-1 * (dt('popover.gutter') - 2px));\n        border-style: solid;\n        border-color: transparent;\n        border-bottom-color: dt('popover.background');\n    }\n\n    .p-popover:before {\n        border-width: dt('popover.gutter');\n        margin-left: calc(-1 * dt('popover.gutter'));\n        border-style: solid;\n        border-color: transparent;\n        border-bottom-color: dt('popover.border.color');\n    }\n\n    .p-popover-flipped:after,\n    .p-popover-flipped:before {\n        bottom: auto;\n        top: 100%;\n    }\n\n    .p-popover.p-popover-flipped:after {\n        border-bottom-color: transparent;\n        border-top-color: dt('popover.background');\n    }\n\n    .p-popover.p-popover-flipped:before {\n        border-bottom-color: transparent;\n        border-top-color: dt('popover.border.color');\n    }\n";

// node_modules/primeng/fesm2022/primeng-popover.mjs
var _c06 = ["content"];
var _c110 = ["*"];
var _c27 = (a0) => ({
  closeCallback: a0
});
function Popover_Conditional_0_3_ng_template_0_Template(rf, ctx) {
}
function Popover_Conditional_0_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Popover_Conditional_0_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Popover_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function Popover_Conditional_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayClick($event));
    })("pMotionOnEnter", function Popover_Conditional_0_Template_div_pMotionOnEnter_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAnimationStart($event));
    })("pMotionOnAfterLeave", function Popover_Conditional_0_Template_div_pMotionOnAfterLeave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAnimationEnd());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function Popover_Conditional_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onContentClick($event));
    })("mousedown", function Popover_Conditional_0_Template_div_mousedown_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onContentClick($event));
    });
    \u0275\u0275projection(2);
    \u0275\u0275template(3, Popover_Conditional_0_3_Template, 1, 0, null, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r1.sx("root"));
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("root"), ctx_r1.styleClass));
    \u0275\u0275property("pBind", ctx_r1.ptm("root"))("ngStyle", ctx_r1.style)("pMotion", ctx_r1.overlayVisible)("pMotionAppear", true)("pMotionOptions", ctx_r1.computedMotionOptions());
    \u0275\u0275attribute("aria-modal", ctx_r1.overlayVisible)("aria-label", ctx_r1.ariaLabel)("aria-labelledBy", ctx_r1.ariaLabelledBy);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("content"));
    \u0275\u0275property("pBind", ctx_r1.ptm("content"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.contentTemplate || ctx_r1._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(17, _c27, ctx_r1.onCloseClick.bind(ctx_r1)));
  }
}
var inlineStyles2 = {
  root: () => ({
    position: "absolute"
  })
};
var classes5 = {
  root: "p-popover p-component",
  content: "p-popover-content"
};
var PopoverStyle = class _PopoverStyle extends BaseStyle {
  name = "popover";
  style = style7;
  classes = classes5;
  inlineStyles = inlineStyles2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PopoverStyle_BaseFactory;
    return function PopoverStyle_Factory(__ngFactoryType__) {
      return (\u0275PopoverStyle_BaseFactory || (\u0275PopoverStyle_BaseFactory = \u0275\u0275getInheritedFactory(_PopoverStyle)))(__ngFactoryType__ || _PopoverStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PopoverStyle,
    factory: _PopoverStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverStyle, [{
    type: Injectable
  }], null, null);
})();
var POPOVER_INSTANCE = new InjectionToken("POPOVER_INSTANCE");
var Popover = class _Popover extends BaseComponent {
  componentName = "Popover";
  $pcPopover = inject(POPOVER_INSTANCE, {
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
   * Enables to hide the overlay when outside is clicked.
   * @group Props
   */
  dismissable = true;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @defaultValue 'self'
   * @group Props
   */
  appendTo = input("body", ...ngDevMode ? [{
    debugName: "appendTo"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Aria label of the close icon.
   * @group Props
   */
  ariaCloseLabel;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * When enabled, first button receives focus on show.
   * @group Props
   */
  focusOnShow = true;
  /**
   * Transition options of the show animation.
   * @group Props
   * @deprecated since v21.0.0. Use `motionOptions` instead.
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   * @deprecated since v21.0.0. Use `motionOptions` instead.
   */
  hideTransitionOptions = ".1s linear";
  /**
   * The motion options.
   * @group Props
   */
  motionOptions = input(void 0, ...ngDevMode ? [{
    debugName: "motionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  computedMotionOptions = computed(() => {
    return __spreadValues(__spreadValues({}, this.ptm("motion")), this.motionOptions());
  }, ...ngDevMode ? [{
    debugName: "computedMotionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Callback to invoke when an overlay becomes visible.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when an overlay gets hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{
    debugName: "$appendTo"
  }] : (
    /* istanbul ignore next */
    []
  ));
  container;
  overlayVisible = false;
  render = false;
  selfClick = false;
  documentClickListener;
  target;
  willHide;
  scrollHandler;
  documentResizeListener;
  /**
   * Custom content template.
   * @param {PopoverContentTemplateContext} context - content context.
   * @see {@link PopoverContentTemplateContext}
   * @group Templates
   */
  contentTemplate;
  templates;
  _contentTemplate;
  destroyCallback;
  overlayEventListener;
  overlaySubscription;
  _componentStyle = inject(PopoverStyle);
  zone = inject(NgZone);
  overlayService = inject(OverlayService);
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  bindDocumentClickListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.documentClickListener) {
        let documentEvent = Ut() ? "touchstart" : "click";
        const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
        this.documentClickListener = this.renderer.listen(documentTarget, documentEvent, (event) => {
          if (!this.dismissable) {
            return;
          }
          if (!this.container?.contains(event.target) && this.target !== event.target && !this.target.contains(event.target) && !this.selfClick) {
            this.hide();
          }
          this.selfClick = false;
          this.cd.markForCheck();
        });
      }
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
      this.selfClick = false;
    }
  }
  /**
   * Toggles the visibility of the panel.
   * @param {Event} event - Browser event
   * @param {Target} target - Target element.
   * @group Method
   */
  toggle(event, target) {
    if (this.overlayVisible) {
      if (this.hasTargetChanged(event, target)) {
        this.destroyCallback = () => {
          this.show(null, target || event.currentTarget || event.target);
        };
      }
      this.hide();
    } else {
      this.show(event, target);
    }
  }
  /**
   * Displays the panel.
   * @param {Event} event - Browser event
   * @param {Target} target - Target element.
   * @group Method
   */
  show(event, target) {
    target && event && event.stopPropagation();
    if (this.container && !this.overlayVisible) {
      this.container = null;
    }
    this.target = target || event.currentTarget || event.target;
    this.overlayVisible = true;
    this.render = true;
    this.cd.markForCheck();
  }
  onOverlayClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.el.nativeElement
    });
    this.selfClick = true;
  }
  onContentClick(event) {
    const targetElement = event.target;
    this.selfClick = event.offsetX < targetElement.clientWidth && event.offsetY < targetElement.clientHeight;
  }
  hasTargetChanged(event, target) {
    return this.target != null && this.target !== (target || event.currentTarget || event.target);
  }
  appendOverlay() {
    if (this.$appendTo() && this.$appendTo() !== "self") {
      if (this.$appendTo() === "body") {
        ut(this.document.body, this.container);
      } else {
        ut(this.$appendTo(), this.container);
      }
    }
  }
  restoreAppend() {
    if (this.container && this.$appendTo() && this.$appendTo() !== "self") {
      ut(this.el.nativeElement, this.container);
    }
  }
  setZIndex() {
    if (this.autoZIndex) {
      zindexutils.set("overlay", this.container, this.baseZIndex + this.config.zIndex.overlay);
    }
  }
  align() {
    if (this.target && this.container) {
      D(this.container, this.target, false);
      const containerOffset = K(this.container);
      const targetOffset = K(this.target);
      const borderRadius = this.document.defaultView?.getComputedStyle(this.container).getPropertyValue("border-radius");
      let arrowLeft = 0;
      if (containerOffset.left < targetOffset.left) {
        arrowLeft = targetOffset.left - containerOffset.left - parseFloat(borderRadius) * 2;
      }
      this.container.style.setProperty(rr("popover.arrow.left").name, `${arrowLeft}px`);
      if (containerOffset.top < targetOffset.top) {
        this.container.setAttribute("data-p-popover-flipped", "true");
        !this.$unstyled() && W(this.container, "p-popover-flipped");
      }
    }
  }
  onAnimationStart(event) {
    this.container = event.element;
    this.container?.setAttribute(this.$attrSelector, "");
    this.appendOverlay();
    this.align();
    this.setZIndex();
    this.bindDocumentClickListener();
    this.bindDocumentResizeListener();
    this.bindScrollListener();
    if (this.focusOnShow) {
      this.focus();
    }
    this.overlayEventListener = (e) => {
      if (this.container && this.container.contains(e.target)) {
        this.selfClick = true;
      }
    };
    this.overlaySubscription = this.overlayService.clickObservable.subscribe(this.overlayEventListener);
    this.onShow.emit(null);
  }
  onAnimationEnd() {
    if (!this.overlayVisible) {
      if (this.destroyCallback) {
        this.destroyCallback();
        this.destroyCallback = null;
      }
      if (this.overlaySubscription) {
        this.overlaySubscription.unsubscribe();
      }
      if (this.autoZIndex) {
        zindexutils.clear(this.container);
      }
      this.onContainerDestroy();
      this.onHide.emit({});
      this.render = false;
      this.container = null;
    }
  }
  focus() {
    let focusable = z(this.container, "[autofocus]");
    if (focusable) {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => focusable.focus(), 5);
      });
    }
  }
  /**
   * Hides the panel.
   * @group Method
   */
  hide() {
    this.overlayVisible = false;
    this.cd.markForCheck();
  }
  onCloseClick(event) {
    this.hide();
    event.preventDefault();
  }
  onEscapeKeydown(_event) {
    this.hide();
  }
  onWindowResize() {
    if (this.overlayVisible && !Yt()) {
      this.hide();
    }
  }
  bindDocumentResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.documentResizeListener) {
        const window2 = this.document.defaultView;
        this.documentResizeListener = this.renderer.listen(window2, "resize", this.onWindowResize.bind(this));
      }
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindScrollListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, () => {
          if (this.overlayVisible) {
            this.hide();
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    }
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  onContainerDestroy() {
    if (!this.cd.destroyed) {
      this.target = null;
    }
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
  }
  onDestroy() {
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.container && this.autoZIndex) {
      zindexutils.clear(this.container);
    }
    if (!this.cd.destroyed) {
      this.target = null;
    }
    this.destroyCallback = null;
    if (this.container) {
      this.restoreAppend();
      this.onContainerDestroy();
    }
    if (this.overlaySubscription) {
      this.overlaySubscription.unsubscribe();
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Popover_BaseFactory;
    return function Popover_Factory(__ngFactoryType__) {
      return (\u0275Popover_BaseFactory || (\u0275Popover_BaseFactory = \u0275\u0275getInheritedFactory(_Popover)))(__ngFactoryType__ || _Popover);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Popover,
    selectors: [["p-popover"]],
    contentQueries: function Popover_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c06, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostBindings: function Popover_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown.escape", function Popover_keydown_escape_HostBindingHandler($event) {
          return ctx.onEscapeKeydown($event);
        }, \u0275\u0275resolveDocument);
      }
    },
    inputs: {
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      dismissable: [2, "dismissable", "dismissable", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      appendTo: [1, "appendTo"],
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      ariaCloseLabel: "ariaCloseLabel",
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      focusOnShow: [2, "focusOnShow", "focusOnShow", booleanAttribute],
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      motionOptions: [1, "motionOptions"]
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide"
    },
    features: [\u0275\u0275ProvidersFeature([PopoverStyle, {
      provide: POPOVER_INSTANCE,
      useExisting: _Popover
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Popover
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c110,
    decls: 1,
    vars: 1,
    consts: [["role", "dialog", "pMotionName", "p-anchored-overlay", 3, "pBind", "class", "style", "ngStyle", "pMotion", "pMotionAppear", "pMotionOptions"], ["role", "dialog", "pMotionName", "p-anchored-overlay", 3, "click", "pMotionOnEnter", "pMotionOnAfterLeave", "pBind", "ngStyle", "pMotion", "pMotionAppear", "pMotionOptions"], [3, "click", "mousedown", "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function Popover_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, Popover_Conditional_0_Template, 4, 19, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.render ? 0 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet, NgStyle, SharedModule, Bind, MotionModule, MotionDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Popover, [{
    type: Component,
    args: [{
      selector: "p-popover",
      standalone: true,
      imports: [CommonModule, SharedModule, Bind, MotionModule],
      providers: [PopoverStyle, {
        provide: POPOVER_INSTANCE,
        useExisting: Popover
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Popover
      }],
      hostDirectives: [Bind],
      template: `
        @if (render) {
            <div
                [pBind]="ptm('root')"
                [class]="cn(cx('root'), styleClass)"
                [style]="sx('root')"
                [ngStyle]="style"
                (click)="onOverlayClick($event)"
                role="dialog"
                [attr.aria-modal]="overlayVisible"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledBy]="ariaLabelledBy"
                [pMotion]="overlayVisible"
                pMotionName="p-anchored-overlay"
                [pMotionAppear]="true"
                (pMotionOnEnter)="onAnimationStart($event)"
                (pMotionOnAfterLeave)="onAnimationEnd()"
                [pMotionOptions]="computedMotionOptions()"
            >
                <div [pBind]="ptm('content')" [class]="cx('content')" (click)="onContentClick($event)" (mousedown)="onContentClick($event)">
                    <ng-content></ng-content>
                    <ng-template *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { closeCallback: onCloseClick.bind(this) }"></ng-template>
                </div>
            </div>
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], null, {
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    dismissable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    appendTo: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "appendTo",
        required: false
      }]
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaCloseLabel: [{
      type: Input
    }],
    baseZIndex: [{
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
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    motionOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "motionOptions",
        required: false
      }]
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
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
    }],
    onEscapeKeydown: [{
      type: HostListener,
      args: ["document:keydown.escape", ["$event"]]
    }]
  });
})();
var PopoverModule = class _PopoverModule {
  static \u0275fac = function PopoverModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PopoverModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PopoverModule,
    imports: [Popover, SharedModule],
    exports: [Popover, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Popover, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverModule, [{
    type: NgModule,
    args: [{
      imports: [Popover, SharedModule],
      exports: [Popover, SharedModule]
    }]
  }], null, null);
})();

// src/app/shared/services/asset-grouping.service.ts
var AssetGroupingService = class _AssetGroupingService {
  clientDataService = inject(ClientDataService);
  entitiesService = inject(EntitiesService);
  authDataService = inject(AuthDataService);
  utilityService = inject(UtilityService);
  cacheService = inject(RequestCacheService);
  cache = {};
  globalClientId = this.clientDataService.getSelectedClient()?.id;
  buildFilterQuery(filter2) {
    return isDefined(filter2) ? `&name=*${this.utilityService.escapeRqlValue(filter2)}*` : "";
  }
  /**
   * Generic method to fetch and cache entities
   * @param entityType Type of entity to fetch ('costCentres', 'assetGroups', etc.)
   * @param clientId Client ID (owner ID)
   * @param fetchFn Function that returns a Promise with the API response
   * @param filter Optional filter string
   * @returns Promise of AssetGroupingItems
   */
  async getEntities(entityType, clientId, fetchFn, filter2) {
    const ownerId = clientId ?? this.globalClientId ?? "";
    const cacheKey = `${ownerId}/${entityType}`;
    const cachedItems = this.cache[cacheKey];
    if (isDefined(cachedItems)) {
      return cachedItems.items.map((x) => __spreadValues({}, x));
    }
    const result = await fetchFn(ownerId, filter2);
    result.items.sort((a, b) => (a.name ?? "").localeCompare(b.name ?? ""));
    this.cache[cacheKey] = {
      items: _AssetGroupingService.toAssetGroupingItems(result.items),
      count: result.count,
      limit: result.limit
    };
    if (isDefined(filter2) && entityType !== "costCentres" && entityType !== "assetGroups" && entityType !== "zoneGroups" && entityType !== "assetCategories") {
      return this.cache[cacheKey].items.filter((item) => item.name.toLowerCase().includes(filter2.toLowerCase()) === true);
    }
    return this.cache[cacheKey].items.map((x_1) => __spreadValues({}, x_1));
  }
  /**
   * Generic method to get entities as a tree
   * @param clientId Client ID
   * @param getItemsFn Function to get flat items
   * @param filter Optional filter string
   * @returns Promise of tree structure
   */
  async getEntitiesAsTree(clientId, getItemsFn, filter2) {
    const result = await getItemsFn(clientId, filter2);
    return _AssetGroupingService.toTree(result);
  }
  /**
   * Generic tree traversal utility that can be used for different tree operations
   * @param tree The tree structure to traverse
   * @param visitor Visitor function for each node
   * @returns Whether traversal was stopped early
   */
  traverseTree(tree, visitor) {
    const results = [];
    const recurse = (nodes) => {
      for (const node of nodes) {
        const visit = visitor(node);
        if (visit.collect !== void 0) {
          results.push(visit.collect);
        }
        if (isDefined(visit.stop)) {
          return true;
        }
        if (isDefined(node.children) && node.children.length > 0) {
          const shouldStop = recurse(node.children);
          if (shouldStop) {
            return true;
          }
        }
      }
      return false;
    };
    recurse(tree);
    return results;
  }
  static toTree(items) {
    const itemMap = /* @__PURE__ */ new Map();
    for (const item of items) {
      itemMap.set(item.id, __spreadProps(__spreadValues({}, item), {
        name: item.name,
        label: item.name,
        children: []
      }));
    }
    const rootItems = [];
    for (const item of items) {
      const treeItem = itemMap.get(item.id);
      if (isDefined(item.parent) && item.parent !== DEFAULT_SYSTEM_ID && itemMap.has(item.parent)) {
        const parentItem = itemMap.get(item.parent);
        if (isDefined(treeItem) && isDefined(parentItem?.children)) {
          parentItem.children.push(treeItem);
        }
      } else if (isDefined(treeItem)) {
        rootItems.push(treeItem);
      }
    }
    const sortChildren = (items2) => {
      items2.sort((a, b) => a.name.localeCompare(b.name));
      for (const item of items2) {
        if (isDefined(item.children) && item.children.length > 0) {
          sortChildren(item.children);
        }
      }
    };
    sortChildren(rootItems);
    return rootItems;
  }
  static toAssetGroupingItems(entities) {
    return entities.map((item) => ({
      id: item.id,
      name: item.name ?? "",
      parent: isDefined(item.parent) ? item.parent.id : DEFAULT_SYSTEM_ID,
      index: item.index ?? 0,
      contacts: item.contacts ?? [],
      data: item
    }));
  }
  static treeToComboValues(tree, startingDepth = 0) {
    const result = [];
    const recurseTree = (items, depth) => {
      if (isDefined(items)) {
        items.sort((a, b) => a.name.localeCompare(b.name));
        for (const item of items) {
          result.push({ key: item.id, value: item.name, indent: depth });
          if (isDefined(item.children) && item.children.length > 0) {
            recurseTree(item.children, depth + 1);
          }
        }
      }
    };
    recurseTree(tree, startingDepth);
    return result;
  }
  static createRootNode(clientId) {
    const data = {
      id: DEFAULT_SYSTEM_ID,
      name: "Root",
      parent: { id: null },
      contacts: [],
      owner: { id: clientId }
    };
    return {
      id: data.id,
      name: data.name,
      parent: null,
      data
    };
  }
  ngOnDestroy() {
    this.clear();
  }
  clear() {
    this.cache = {};
  }
  /**
   * Find a cost center in the cost center tree
   */
  findCCInCCTree(tree, costCentre) {
    if (isNullOrUndefined(costCentre)) {
      return [];
    }
    return this.traverseTree(tree, (node) => ({
      collect: node.id === costCentre.id ? node : void 0
    }));
  }
  /**
   * Filter cost centers using tree structure
   */
  getFilteredCostCentres(costCentreTree, costCentres) {
    const results = [];
    this.traverseTree(costCentreTree, (node) => {
      const costCentre = costCentres.find((x) => x.id === node.id);
      if (isDefined(costCentre)) {
        results.push(costCentre);
      }
      return {};
    });
    return results;
  }
  /**
   * Find a node in the tree by ID
   */
  findInTree(tree, id) {
    for (const node of tree) {
      if (node.id === id) {
        return node;
      }
      if (node.children && node.children.length > 0) {
        const found = this.findInTree(node.children, id);
        if (found) {
          return found;
        }
      }
    }
    return null;
  }
  getGroupResultInfo(clientId, type) {
    const { count, limit } = this.cache[`${clientId}/${type}`];
    return { count, limit };
  }
  getCostCentres(clientId, filter2) {
    return this.getEntities("costCentres", clientId, (ownerId, filter3) => firstValueFrom(this.entitiesService.listCostCentres(ownerId, 0, 1e3, "name", this.buildFilterQuery(filter3))), filter2);
  }
  getCostCentresAsTree(clientId, filter2) {
    return this.getEntitiesAsTree(clientId, this.getCostCentres.bind(this), filter2);
  }
  async getCostCentresAsTreeForUser(clientId, filter2) {
    const items = await this.getCostCentresAsTree(clientId, filter2);
    const costCenterId = this.authDataService.getUserProfile()?.costCentre?.id;
    if (isDefined(costCenterId)) {
      const item = this.findInTree(items, costCenterId);
      return [item].filter((x) => isDefined(x));
    }
    return items;
  }
  getAssetGroups(clientId, filter2) {
    return this.cacheService.getOrFetchAsync(`assetGroups-${clientId ?? this.globalClientId}-${filter2 ?? ""}`, () => this.getEntities("assetGroups", clientId, (ownerId, filter3) => firstValueFrom(this.entitiesService.listAssetGroups(ownerId, 0, 1e3, "name", this.buildFilterQuery(filter3))), filter2), 2 * 60 * 1e3);
  }
  getAssetGroupsAsTree(clientId, filter2) {
    return this.getEntitiesAsTree(clientId, this.getAssetGroups.bind(this), filter2);
  }
  getAssetCategories(clientId, filter2) {
    return this.cacheService.getOrFetchAsync(`assetCategories-${clientId ?? this.globalClientId}-${filter2 ?? ""}`, () => this.getEntities("assetCategories", clientId, (ownerId, filter3) => firstValueFrom(this.entitiesService.listAssetCategories(ownerId, 0, 1e3, "name", this.buildFilterQuery(filter3))), filter2), 5 * 60 * 1e3);
  }
  getAssetCategoriesAsTree(clientId, filter2) {
    return this.getEntitiesAsTree(clientId, this.getAssetCategories.bind(this), filter2);
  }
  async getAssetTypes(clientId, filter2) {
    return this.getEntities("assetTypes", clientId, async (ownerId) => firstValueFrom(this.entitiesService.listAssetTypes(ownerId)), filter2);
  }
  async getAssetTypesAsTree(clientId, filter2) {
    return this.getEntitiesAsTree(clientId, this.getAssetTypes.bind(this), filter2);
  }
  async getDeviceTypes(clientId, filter2) {
    return this.getEntities("deviceTypes", clientId, async (ownerId) => firstValueFrom(this.entitiesService.listDeviceTypes(ownerId)), filter2);
  }
  getDeviceTypesAsTree(clientId, filter2) {
    return this.getEntitiesAsTree(clientId, this.getDeviceTypes.bind(this), filter2);
  }
  getAssetTagTypes(clientId, _filter) {
    return this.getEntities("assetTagTypes", clientId, async (ownerId) => firstValueFrom(this.entitiesService.listAssetTagTypes(ownerId)));
  }
  getAssetTagTypesAsTree(clientId, filter2) {
    return this.getEntitiesAsTree(clientId, this.getAssetTagTypes.bind(this), filter2);
  }
  getZoneGroups(clientId, filter2) {
    return this.getEntities("zoneGroups", clientId, (ownerId, filter3) => firstValueFrom(this.entitiesService.listZoneGroups(ownerId, 0, 1e3, "name", this.buildFilterQuery(filter3))), filter2);
  }
  getZoneGroupsAsTree(clientId, filter2) {
    return this.getEntitiesAsTree(clientId, this.getZoneGroups.bind(this), filter2);
  }
  static \u0275fac = function AssetGroupingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssetGroupingService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AssetGroupingService, factory: _AssetGroupingService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetGroupingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ADMIN_TREE,
  ReminderType,
  WEEKDAY_OPTIONS,
  MONTH_OPTIONS,
  DAY_OF_MONTH_OPTIONS,
  IO_TYPE_MAP,
  CUSTOM_FIELD_TYPES,
  CUSTOM_FIELD_TYPES_MAP,
  LEGACY_RIGHTS,
  AVAILABLE_FONTS,
  FONT_WEIGHTS,
  FONT_TRANSFORMS,
  DROP_SHADOW_OPTIONS,
  DEFAULT_SHADE_VALUES,
  ICON_PACKS,
  SIZE_OPTIONS,
  POSITION_OPTIONS,
  UtilityService,
  Message,
  MessageModule,
  ProgressBar,
  ProgressBarModule,
  Platform,
  coerceArray,
  Listbox,
  ListboxModule,
  Popover,
  PopoverModule,
  AssetGroupingService,
  ToggleSwitch,
  ToggleSwitchModule
};
//# sourceMappingURL=chunk-RQOCDJ5X.js.map
