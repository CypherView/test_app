// src/app/features/administration/components/distributors/distributor-administration.config.ts
var DISTRIBUTOR_ADMIN_FEATURES = {
  details: {
    label: "Details"
  },
  vendors: {
    label: "Vendors",
    permissions: {
      or: ["vendor:list", "vendor:create"]
    }
  },
  providers: {
    label: "Providers"
  },
  "distributor-device-providers": {
    label: "Device Providers"
  },
  "distributor-email-providers": {
    label: "Email Providers"
  },
  profiles: {
    label: "Profiles"
  },
  "distributor-company-groups": {
    label: "Vendor Groups"
  },
  "distributor-road-profiles": {
    label: "Road Profiles"
  },
  "distributor-themes": {
    label: "Themes"
  },
  accounts: {
    label: "Accounts",
    permissions: {
      or: [
        "distributor:list-users",
        "distributor:users",
        "distributor:list-userroles",
        "distributor:userroles"
      ]
    }
  },
  "distributor-users": {
    label: "Users",
    permissions: {
      or: ["distributor:list-users", "distributor:users"]
    }
  },
  "distributor-user-roles": {
    label: "User Roles",
    permissions: {
      or: ["distributor:list-userroles", "distributor:userroles"]
    }
  }
};

export {
  DISTRIBUTOR_ADMIN_FEATURES
};
//# sourceMappingURL=chunk-4HWGHAKY.js.map
