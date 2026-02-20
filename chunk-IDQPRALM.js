import {
  DEFAULT_SYSTEM_ID,
  isDefined,
  isNullOrUndefined
} from "./chunk-UNWLID6Q.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-4KHPVNTA.js";

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
  UtilityService
};
//# sourceMappingURL=chunk-IDQPRALM.js.map
