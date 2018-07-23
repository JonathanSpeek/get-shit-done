import React from 'react';

class TodoForm extends React.Component {
  render() {
    return(
      <form action="#">
        <input type="text" name="item" id="item" placeholder="Add New..." />
      </form>
    );
  }
}

export default TodoForm;