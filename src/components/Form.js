import React from 'react';

const Form = ({ setInputText, todos, setTodos, inputText }) => {
  const inputTextHandler = e => {
    //   console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = e => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.round(Math.random() * 100),
      },
    ]);
    setInputText('');
  };
  return (
    <form>
      <input
        className="todo-input"
        value={inputText}
        onChange={inputTextHandler}
        type="text"
      />
      <button className="todo-button" onClick={submitTodoHandler} type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};
export default Form;
