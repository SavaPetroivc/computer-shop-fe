import { BasicFk } from "../basic-fk.model";

export interface OrderDelivery {
  city: BasicFk;
  zip: string;
  street: string;
  number: string;
}
