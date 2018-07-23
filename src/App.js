import React from 'react';
import Checkbox from './Checkbox';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class App extends React.Component {
  render() {
    return (
      <div align="center">
        <Checkbox />
        <h1>Get Shit Done</h1>
        <div class="container">
          <TodoForm />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;