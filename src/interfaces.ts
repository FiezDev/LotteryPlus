export interface TodoItem {
  type: 'Fruit' | 'Vegetable';
  name: string;
}

export interface TodoState {
  list: TodoItem[];
  Fruit: TodoItem[];
  Vegetable: TodoItem[];
}

export type TodoAction =
  | { type: 'MOVE_TO_COLUMN'; payload: TodoItem }
  | { type: 'MOVE_TO_MAIN'; payload: TodoItem }
  | { type: 'RESET_TO_MAIN'; payload: TodoItem };

export interface DepartmentSummary {
  male: number;
  female: number;
  ageRange: string;
  hair: Record<string, number>;
  addressUser: Record<string, string>;
}

export interface Departments {
  [key: string]: DepartmentSummary;
}

export interface Timers {
  [key: string]: number;
}

interface Coordinates {
  lat: number;
  lng: number;
}

interface Address {
  address: string;
  city: string;
  coordinates: Coordinates;
  postalCode: string;
  state: string;
}

interface Hair {
  color: string;
  type: string;
}

interface BankDetails {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

interface Company {
  address: Address;
  department: string;
  name: string;
  title: string;
}

interface Crypto {
  coin: string;
  wallet: string;
  network: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  domain: string;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: BankDetails;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: Crypto;
}




