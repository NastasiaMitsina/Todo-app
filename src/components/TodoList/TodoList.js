import React from 'react';
import { TodoListItem } from '../TodoListItem/TodoListItem';
import './TodoList.css';

export const TodoList = ( { plans, onDeleted, onToogleDone, onToogleImportant } ) => {

  const items = plans.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className='list-group-item'>
        <TodoListItem 
          {...itemProps} 
          onDeleted={() => onDeleted(id)}
          onToogleImportant={() => onToogleImportant(id)}
          onToogleDone={() => onToogleDone(id)}
        />
      </li>
    );
  });

  return (
    <ul className='list-group'>
      { items }
    </ul>
  );
};