const initialState = [{
  id: 1,
  todo: 'Recolectar la piedra del Alma',
  done: false,
}];

const todoReducer = (state = initialState, action = {}) => {

  if(action.type === '[TODO] add todo'){
    return [...state, action.payload]
  }

  return state;
}

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: 'Recolectar la piedra del Poder',
  done: false,
}

const addTodoAction = {
  type: '[TODO] add todo',
  payload: newTodo, //Si la acción no necesita un payload no es necesario
}

todos = todoReducer(todos, addTodoAction)

console.log(todos)