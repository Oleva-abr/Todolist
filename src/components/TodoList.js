import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos }) => {
  // console.log(todos);
  return (
    <div>
      <ul>
        {todos.map(todo => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            text={todo.text}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
