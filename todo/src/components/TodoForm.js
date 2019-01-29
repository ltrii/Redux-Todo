import React, { Component } from 'react'
import { addTodo } from '../actions';
import {connect} from 'react-redux';

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
        const newTodo = { todo: this.state.todo, completed: false, id: Date.now() };
        addTodo(newTodo);
        console.log("added", newTodo);
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

export default connect( () => ({}), {addTodo} )(TodoForm);
