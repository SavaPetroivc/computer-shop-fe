export interface UserOrderCreated {
  firstName: string;
  lastName: string;
  username: string;
  userContactInfo: { email: string; contactPhone: string };
}
