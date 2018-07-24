import React from 'react';

const TodoForm = ({addTodo}) => {
  let input;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(input.value);
        input.value = '';
      }}
    >
      <input
        type="text"
        placeholder="Add New..."
        ref={node => {input = node;}} 
      />
    </form>
  );
};

export default TodoForm;