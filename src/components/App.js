import React from 'react'
import Footer from '../containers/Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div style={{
    flexDirection: 'column',background:'white',width: '267px', padding:'0px 10px 0px 10px', boxShadow:' 1px 1px 3px 0 #00000054, 9px 5px 0px 0 white, 12px 7px 2px 0 #00000045, 19px 14px 0px 0 white, 21px 16px 3px 0 #00000057'
  }}>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
