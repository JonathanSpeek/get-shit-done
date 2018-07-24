import React from 'react';
import Checkbox from './Checkbox';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

let nextId = 1;
class App extends React.Component {
  
  state = {
    data: []
  };

  componentDidMount() {
    let cachedTodos = localStorage.getItem('data');

    if(cachedTodos) {
      this.setState({data: JSON.parse(cachedTodos)});
    } else {
      nextId = 4
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
  }

  addTodo(val) {
    const todo = {
      text: val, 
      id: nextId++,
      done: false
    };

    this.state.data.push(todo);
    localStorage.setItem('data', JSON.stringify(this.state.data));
    this.setState({data: JSON.parse(localStorage.getItem('data'))});
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

    localStorage.setItem('data', JSON.stringify(nextTodos));
    this.setState({data: JSON.parse(localStorage.getItem('data'))});
  }

  handleRemove(id) {
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    });

    localStorage.setItem('data', JSON.stringify(remainder));
    this.setState({data: JSON.parse(localStorage.getItem('data'))});
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