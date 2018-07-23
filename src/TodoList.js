import React from 'react';

class TodoList extends React.Component {
  render() {
    return(
      <ul align="left" id="list">
        <TodoItem />
      </ul>
    );
  }
}

class TodoItem extends React.Component {
  render() {
    return(
      <li>Life can be overwhelming 😅</li>
    );
  }
}

export default TodoList;