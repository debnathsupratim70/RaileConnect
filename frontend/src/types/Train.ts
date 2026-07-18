export interface TrainClass {
  code: string;
  name: string;

  fare: number;

  status: "AVAILABLE" | "RAC" | "WL";

  available: number;
}

export interface Train {
  id: number;

  trainNumber: string;
  trainName: string;
  trainType: string;

  from: string;
  fromCode: string;

  to: string;
  toCode: string;

  departure: string;
  arrival: string;

  duration: string;

  days: string[];

  classes: TrainClass[];
}