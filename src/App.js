import React from 'react';
import Checkbox from './Checkbox';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class App extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.setState({data: [
      {
        id: 1,
        text: 'Life can be overwhelming 😅',
        done: false
      },
      {
        id: 2,
        text: 'Small, achievable todo lists can help ✍️',
        done: false
      },
      {
        id: 3,
        text: 'Go get your shit done ☕',
        done: true
      }
    ]});
  }

  addTodo(val) {
    let nextId;
    this.state.data.length > 0 ? nextId = this.state.data.length + 1 : nextId = 1;
    const todo = {
      text: val, 
      id: nextId,
      done: false
    };
    this.state.data.push(todo);
    this.setState({data: this.state.data});
  }

  handleDone = (id) => {
    const nextTodos = this.state.data.map((todo) => {
      if (todo.id === id && todo.done === false) {
        return Object.assign({}, todo, {
          done: true,
        });
      } else {
        return todo;
      }
    });

    this.setState({
      data: nextTodos,
    });
  }

  handleRemove(id) {
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    });

    this.setState({data: remainder});
  }

  render() {
    return (
      <div align="center">
        <Checkbox />
        <h1>Get Shit Done</h1>
        <div className="container">
          <TodoForm addTodo={this.addTodo.bind(this)} />
          <TodoList 
            todos={this.state.data}
            done={this.handleDone.bind(this)}
            remove={this.handleRemove.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;