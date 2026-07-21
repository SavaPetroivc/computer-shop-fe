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
    street?: string;
    number?: string;
    zip?: string;
    city?: { id: number; name: string } | null;
  };
}
