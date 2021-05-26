import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos }) => {
  console.log(todos);
  return (
    <div>
      <ul>
        {todos.map(todo => (
          <Todo text={todo.text} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
