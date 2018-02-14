import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, disabled,edit, dispatch, delet }) => (
  <ul  style={{padding: '0px',marginTop:'6px'
  }}
  >
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
        onDoubleClicked={() => disabled(todo.id)}
        newText = {todo.text}
        edit={(newText)=>edit(todo.id, newText)}
        delet={() => delet(todo.id)}     
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
  
}

export default TodoList
