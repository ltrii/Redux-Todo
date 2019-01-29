import React, { Component } from 'react'

class TodoForm extends Component {
    constructor(props){
        super(props);
            this.state = {
                todo: ''
            }
    }

handleTodo(e) {
    console.log(e);
    this.setState({
        todo: e.target.value
    })
}

handleSubmit(e) {
    e.preventDefault();
    if(this.state.todo != '') {
        this.props.addTodo(this.state.todo);
        this.setState({
            title: ''
        })
    }
}

  render() {
    return (
      <div>
        <form>
            <input type="text" placeholder="todo" name="todo" required={true} value={this.state.todo} onChange={this.todoInput} />
            <button onClick={this.handleSubmit.bind(this)}>
            Add Todo
            </button>
        </form>
      </div>
    )
  }
}

export default TodoForm;
