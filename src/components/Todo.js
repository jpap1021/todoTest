import React from 'react'
import PropTypes from 'prop-types'
import FaCircleO from 'react-icons/lib/fa/circle-o'
import FaCheckCircleO from 'react-icons/lib/fa/check-circle-o'
import FaClose from 'react-icons/lib/fa/close'


const Todo = ({ onClick, completed, newText, onDoubleClicked, disabled, edit, delet }) => (
  <li
  onDoubleClick={onDoubleClicked} 
    
    style={{
      listStyleType: 'none', borderBottom:'solid gray 1px' 
    }}
  >
  <div >
  <form onSubmit={e => {
        e.preventDefault()
        onDoubleClicked()
      }}>
      {completed ? <span style={{color:'green'}} onClick={onClick}><FaCheckCircleO/></span> : <span onClick={onClick}> <FaCircleO/> </span>}
  <input 
      style={{marginLeft:'5px', 
      textDecoration: completed ? 'line-through' : 'none',
      color: completed ? 'gray' : '#000',
      textDecorationColor: 'gray',
      background:'white',
      border:'none'
  }}
   value={newText} 
   disabled={disabled} 
   onChange={(e)=>{edit(e.target.value)}}
   autoFocus={true}
  /> <FaClose onClick={delet} />
 
</form>
  </div>

   
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired
}

export default Todo
