import React from 'react';

const Todo = ({ text }) => {
  return (
    <div>
      <li>{text}</li>
      <button>complete</button>
      <button>delete</button>
    </div>
  );
};

export default Todo;
