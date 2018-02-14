import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div style={{
    flexDirection: 'column', marginLeft:'400px',  marginTop:'250px',background:'white',width: '267px'
  }}>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
