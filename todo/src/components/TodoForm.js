import React, { Component } from 'react'
import { addTodo } from '../actions';

class TodoForm extends Component {
    constructor(props){
        super(props);
            this.state = {
                todo: ''
            }
    }

    handleChanges = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    
    handleAddTodo = event => {
        event.preventDefault();
        const newTodo = { todo: this.state.value, completed: false, id: Date.now() };
        addTodo(newTodo);
        console.log("added");
        this.setState({
            todo: ''
        })
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddTodo}>
            <input type="text" placeholder="todo" name="todo" required={true} value={this.state.todo} onChange={this.handleChanges} />
            <button>
            Add Todo
            </button>
        </form>
      </div>
    )
  }
}

export default TodoForm;
