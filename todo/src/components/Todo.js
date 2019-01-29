import React, { Component } from 'react'
import { toggleTodo } from '../actions';
import { connect } from 'react-redux';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: this.props.todo,
            completed: this.props.todo.completed         
        }
    }

    handleTodoChange(e) {
        this.setState({
            todo: e.target.value
        })
    }

  render() {
    return (
      <div>
          {this.state.todo.todo}
      </div>
    )
  }
}

export default connect(null, { toggleTodo })(Todo);
