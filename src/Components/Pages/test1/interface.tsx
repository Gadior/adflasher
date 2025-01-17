// tickets

export interface int_tickets {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
}

export interface Item {
  stops: number;
  [key: string]: any;
}
export interface Flags {
  all: boolean;
  none: boolean;
  one: boolean;
  two: boolean;
  three: boolean;
}
