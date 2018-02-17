const todos = (state = [], action) => {
 
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          disabled: true,
          
        }
      ] 
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'CHECK_ALL':
      let comple = true;
      let cont = 0;
        return state.map(todo =>{
          if(cont === 0){
            comple = !todo.completed;
            cont++; 
            console.log(cont)
          }
          todo.completed=comple;
          return todo
        })
    case 'DISABLED':
      return state.map(todo =>{
        return (todo.id === action.id) 
        ? {...todo, disabled: !todo.disabled}
        : todo
      }
    )

   case 'EDIT' :
   return state.map(todo =>{
    return (todo.id === action.id) 
    ? {...todo, text: action.text}
        : todo
  }
)
case 'DELETE':
return state.filter(todo =>{
  if (todo.id === action.id) {
    return false
  }else{
    return true
  }
}
)
    default:
      return state      
  }
 
}

export default todos
