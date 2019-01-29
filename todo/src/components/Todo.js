import React, { Component } from 'react'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: this.props.todos.todo,
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
        
      </div>
    )
  }
}

export default Todo;
