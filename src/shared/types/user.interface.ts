export type UserRole = "OWNER" | "ADMIN" | "TENANT";

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
}
