import React, { Component } from 'react'

class TodoForm extends Component {
  render() {
    return (
      <div>
        <form>
            <input type="text" placeholder="todo" name="text" value={this.props.text} />
            <button onClick={this.props.addTodo}>
            Add Todo
            </button>
        </form>
      </div>
    )
  }
}

export default TodoForm;
