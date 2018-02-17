let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

export const checkAll = () => ({
  type: 'CHECK_ALL'
})

export const disabled = (id) => ({
  type: 'DISABLED',
  id
})
 
export const edit = (id,text) => ({
  type: 'EDIT',
  id,
  text
})

export const delet = (id) => ({
  type: 'DELETE',
  id
})
