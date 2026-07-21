export interface UserInfo {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  role: string;
  activated: boolean;
  userContactInfo: {
    email: string;
    contactPhone: string;
  };
}
