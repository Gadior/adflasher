export type type__Name = string | null;

export interface int__rootSelect {
  id: number;
  value: string;
  label: string;
  marker: string;
}

export interface int__lvl2Selector {
  id: number;
  value: string;
  label: string;
  marker: string;
  prePrice: number;
  min: number;
  cost: number;
  type: string;
}

export interface int__EstimateData {
  id: number;
  data: int__lvl2Selector;
}
