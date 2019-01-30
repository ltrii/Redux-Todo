import React, { Component } from 'react'
import { addTodo, toggleTodo } from '../actions';
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

    
   handleAddTodo = e => {
      e.preventDefault();
      const{ todo } = this.state;
      const newTodo = { todo: todo, id: Date.now(), completed: false };
      this.props.addTodo(newTodo);
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
