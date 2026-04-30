// src/app/features/administration/components/vendors/vendor-administration.config.ts
var VENDOR_ADMIN_FEATURES = {
  details: {
    label: "Details"
  },
  clients: {
    label: "Clients",
    permissions: {
      or: ["client:list", "client:create"]
    }
  },
  alerts: {
    label: "Alerts"
  },
  providers: {
    label: "Providers"
  },
  "vendor-email-providers": {
    label: "Email Providers"
  },
  "vendor-sms-gateway-providers": {
    label: "SMS Gateways"
  },
  profiles: {
    label: "Profiles"
  },
  "vendor-company-groups": {
    label: "Company Groups"
  },
  "vendor-io-types": {
    label: "IO Types"
  },
  "vendor-device-config-profiles": {
    label: "Device Config Profiles"
  },
  "vendor-overspeed-profiles": {
    label: "Overspeed Profiles"
  },
  "vendor-road-profiles": {
    label: "Road Profiles"
  },
  "vendor-geo-lock-profiles": {
    label: "Geo Lock Profiles"
  },
  "vendor-custom-fields": {
    label: "Custom Fields"
  },
  "vendor-themes": {
    label: "Themes"
  },
  accounts: {
    label: "Accounts",
    permissions: {
      or: [
        "vendor:list-users",
        "vendor:users",
        "vendor:list-userroles",
        "vendor:userroles"
      ]
    }
  },
  "vendor-users": {
    label: "Users",
    permissions: {
      or: ["vendor:list-users", "vendor:users"]
    }
  },
  "vendor-user-roles": {
    label: "User Roles",
    permissions: {
      or: ["vendor:list-userroles", "vendor:userroles"]
    }
  }
};

export {
  VENDOR_ADMIN_FEATURES
};
//# sourceMappingURL=chunk-2KKFLGPT.js.map
