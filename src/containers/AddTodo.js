import React from 'react'
import { connect } from 'react-redux'
import { addTodo,  checkAll} from '../actions'
import FaAngleDown from  'react-icons/lib/fa/angle-down'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
       <button  style={{background:'white'}} type="button" onClick={e =>{
         dispatch(checkAll())
       }
       }>
       <FaAngleDown />
        </button>
        <input style={{width: '232px'}} ref={node => {
          input = node
        }} />
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
