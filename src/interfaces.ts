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
