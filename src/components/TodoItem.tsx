import React from 'react';
import { TodoItem as TodoItemType } from '../interfaces';
import './TodoList.css';

interface TodoItemProps {
  item: TodoItemType;
  onAction: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ item, onAction }) => {
  return (
    <button className="item-button" onClick={onAction}>
      {item.name}
    </button>
  );
};

export default TodoItem;
