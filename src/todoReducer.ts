import { TodoState, TodoAction } from './interfaces';

const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'MOVE_TO_COLUMN': {
      const { type, name } = action.payload;
      return {
        ...state,
        list: state.list.filter(item => item.name !== name),
        [type]: [...state[type], action.payload]
      };
    }
    
    case 'MOVE_TO_MAIN':
      return {
        ...state,
        list: [...state.list, action.payload],
        [action.payload.type]: state[action.payload.type].filter(item => item.name !== action.payload.name)
      };
    default:
      return state;
  }
};

export default todoReducer;
