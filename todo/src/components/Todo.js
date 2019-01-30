import React, { Component } from 'react'
import { toggleTodo } from '../actions';
import { connect } from 'react-redux';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {     
        }
    }

    handleTodoChange(e) {
        this.setState({
            todo: e.target.value
        })
    }

  render() {
    return (
      <div className="todoInd" >
          {this.props.todo.todo}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    console.log(state)
    return ({todos: state.todos})
}

export default connect(mapStateToProps, { toggleTodo })(Todo);
