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
  | { type: 'MOVE_TO_MAIN'; payload: TodoItem };

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

export interface User {
  department: string;
  gender: 'male' | 'female';
  hairColor?: string;
  firstName: string;
  lastName: string;
  age?: number;
  address?: {
    postalCode?: string;
  };
}


