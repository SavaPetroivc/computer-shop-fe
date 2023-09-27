import { BasicFk } from "../basic-fk.model";

export interface OrderDelivery {
  city: BasicFk;
  zip: string;
  street: string;
  number: string;
}

export interface OrderDeliveryGet extends Omit<OrderDelivery, "city"> {
  city: string;
}
