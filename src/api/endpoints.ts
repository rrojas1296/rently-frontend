export const ENDPOINTS = {
  auth: {
    login: "/login",
    register: "/register",
    refresh: "/auth/refresh",
    logout: "/auth/logout",
    validate: "/auth/validate",
    checkEmailExist: "auth/checkEmailExist",
  },
  properties: {
    create: "/properties",
    get: "/properties",
    getAvailable: "/properties/available",
  },
  tenants: {
    create: "/tenants",
    getAll: "/tenants",
  },
};
