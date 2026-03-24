export type TruckType = 'Isuzu' | 'Sino Truck' | 'Trailer' | 'Tanker' | 'Pickup' | 'Refrigerated';

export interface CargoPost {
  id: string;
  origin: string;
  destination: string;
  cargoType: string;
  weight: number;
  weightUnit: 'kg' | 'tons';
  preferredTruck: TruckType;
  pickupDate: string;
  status: 'pending' | 'accepted' | 'delivered';
  contactName: string;
  contactPhone: string;
}

export interface Truck {
  id: string;
  driverName: string;
  truckType: TruckType;
  plateNumber: string;
  location: string;
  rating: number;
  available: boolean;
}