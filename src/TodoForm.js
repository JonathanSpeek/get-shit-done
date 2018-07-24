import React from 'react';

const TodoForm = ({addTodo}) => {
  let input;

  return (
    <form
      onSubmit={() => {
        addTodo(input.value);
        input.value = '';
      }}
    >
      <input
        type="text"
        placeholder="Add New..."
        ref={node => {
          input = node;
        }} 
      />
    </form>
  );
};

export default TodoForm;