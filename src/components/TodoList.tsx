import { useReducer, useRef } from 'react';
import { Timers, TodoItem as TodoItemType, TodoState } from '../interfaces';
import TodoItem from './TodoItem';
import todoReducer from '../todoReducer';
import './TodoList.css';

const initialItems: TodoItemType[] = [
  { type: 'Fruit', name: 'Apple' },
  { type: 'Vegetable', name: 'Broccoli' },
  { type: 'Vegetable', name: 'Mushroom' },
  { type: 'Fruit', name: 'Banana' },
  { type: 'Vegetable', name: 'Tomato' },
  { type: 'Fruit', name: 'Orange' },
  { type: 'Fruit', name: 'Mango' },
  { type: 'Fruit', name: 'Pineapple' },
  { type: 'Vegetable', name: 'Cucumber' },
  { type: 'Fruit', name: 'Watermelon' },
  { type: 'Vegetable', name: 'Carrot' },
];

const initialState: TodoState = {
  list: initialItems,
  Fruit: [],
  Vegetable: []
};

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const timersRef = useRef<Timers>({}); 

  const handleMoveToColumn = (item: TodoItemType) => {
    clearTimeout(timersRef.current[item.name]); 
    dispatch({ type: 'MOVE_TO_COLUMN', payload: item });

 
    timersRef.current[item.name] = setTimeout(() => {
      dispatch({ type: 'RESET_TO_MAIN', payload: item });
    }, 5000);
  };

  const handleMoveToMain = (item: TodoItemType) => {
    clearTimeout(timersRef.current[item.name]); 
    dispatch({ type: 'MOVE_TO_MAIN', payload: item });
  };

  return (
    <div className="main">
    <div className="container">
      <div className="column">
        {state.list.map(item => (
          <TodoItem key={item.name} item={item} onAction={() => handleMoveToColumn(item)} />
        ))}
      </div>
      <div className="column">
        <h2>Fruits</h2>
        {state.Fruit.map(item => (
          <TodoItem key={item.name} item={item} onAction={() => handleMoveToMain(item)} />
        ))}
      </div>
      <div className="column">
        <h2>Vegetables</h2>
        {state.Vegetable.map(item => (
          <TodoItem key={item.name} item={item} onAction={() => handleMoveToMain(item)} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default TodoList;
