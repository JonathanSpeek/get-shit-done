import React from 'react';

const TodoList = ({todos, done, remove}) => {
  const todoNode = todos.map((todo) => {
    return (
      <TodoItem
        key={'todo-' + todo.id}
        id={todo.id}
        todo={todo}
        done={done}
        remove={remove}
      />
    );
  });

  return (
    <ul align="left" id="list">{todoNode}</ul>
  );
}

const TodoItem = ({todo, done, remove}) => {
  return (
    <li
      className={todo.done ? 'checked' : ''}
      onClick={() => {
        todo.done ?
        remove(todo.id) :
        done(todo.id)
      }}
    >
      {todo.text}
    </li>
  );
}

export default TodoList;
