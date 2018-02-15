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
       <button  style={{background:'white',    border: 'none',
    borderBottom:'solid #eff2f5 1px', height: '34px'}} 
    type="button" onClick={e =>{
         dispatch(checkAll())
       }
       }>
       <FaAngleDown />
        </button>
        <input style={{ width: '241px',border:'none', borderBottom: 'solid #eff2f5 1px', height: '30px'}} ref={node => {
          input = node
        }} />
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
