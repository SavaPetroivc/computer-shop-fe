import { RoleEnum } from "../../enum/role.enum";

export interface User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  role: { id: number; name: RoleEnum };
  userContactInfo: UserContactInfo;
}
export interface UserContactInfo {
  id: number;
  email: string;
  contactPhone: string;
}
export interface UserCreate extends Omit<User, "id" | "userContactInfo"> {
  userContactInfo: Omit<UserContactInfo, "id">;
}
