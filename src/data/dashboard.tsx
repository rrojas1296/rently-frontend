import { DEFAULT_USER_IMAGE } from "@/shared/constants/defaults";

export const dashboardStats = [
  {
    id: 1,
    title: "Dashboard.stats.properties.title",
    value: 24,
  },
  {
    id: 2,
    title: "Dashboard.stats.rented.title",
    value: "12 / 24",
  },
  {
    id: 3,
    title: "Dashboard.stats.requests.title",
    value: 4,
  },
  {
    id: 4,
    title: "Dashboard.stats.totalRevenue.title",
    value: "S/. 3000",
  },
];

export const nextPayments = [
  {
    id: 1,
    tenantName: "Jorge Diaz Romero",
    apartment: "Departamento 202",
    paymentDate: "2026-02-12T14:24:12.595Z",
    amount: "S/. 3000",
    status: "ON_TIME",
  },
  {
    id: 2,
    tenantName: "Jorge Diaz Romero",
    apartment: "Departamento 202",
    paymentDate: "2026-02-12T14:24:12.595Z",
    amount: "S/. 3000",
    status: "OVERDUE",
  },

  {
    id: 3,
    tenantName: "Jorge Diaz Romero",
    apartment: "Departamento 202",
    paymentDate: "2026-02-12T14:24:12.595Z",
    amount: "S/. 3000",
    status: "PENDING",
  },
  {
    id: 4,
    tenantName: "Jorge Diaz Romero",
    apartment: "Departamento 202",
    paymentDate: "2026-02-12T14:24:12.595Z",
    amount: "S/. 3000",
    status: "OVERDUE",
  },
];

export const lastTenants = [
  {
    id: 1,
    name: "Jorge Romero",
    email: "jorgeromero@.com",
    entryDate: "2026-02-12T14:24:12.595Z",
    apartment: "Departamento 202",
  },
  {
    id: 2,
    name: "María López",
    imageUrl: DEFAULT_USER_IMAGE,
    email: "maria.lopez@example.com",
    entryDate: "2026-01-05T09:15:45.320Z",
    apartment: "Departamento 104",
  },
  {
    id: 3,
    name: "Carlos Pérez",
    email: "carlos.perez@example.com",
    entryDate: "2026-03-18T17:42:20.110Z",
    apartment: "Departamento 305",
  },
  {
    id: 4,
    name: "Ana Torres",
    imageUrl: DEFAULT_USER_IMAGE,
    email: "ana.torres@example.com",
    entryDate: "2026-04-02T12:03:10.780Z",
    apartment: "Departamento 108",
  },
  {
    id: 5,
    name: "Luis Fernández",
    imageUrl: DEFAULT_USER_IMAGE,
    email: "luis.fernandez@example.com",
    entryDate: "2026-05-10T19:55:33.210Z",
    apartment: "Departamento 401",
  },
];
