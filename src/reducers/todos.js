import { initialState } from "../context/todosContext";

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_TODO_LOADING':
        console.log(action);
      return { ...state };
    case 'CREATE_TODO_SUCCESS':
        console.log(action.payload);
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };
    case 'CREATE_TODO_FAILURE':
      console.log(action);
      return {
        ...state,
        createTodoError: action.error,
      };

    case 'FETCH_TODOS_LOADING':
      return {
        ...state,
      };
    case 'FETCH_TODOS_SUCCESS':
       
      console.log(action)
      console.log(state, "C4EST LE STTTTATTTE")
      return {
       
        ...state,
        todos: action.payload,
      };
    case 'FETCH_TODOS_FAILURE':
      console.log(action);
      return {
        ...state,
        fetchTodosError: action.error,
      };

    case 'DELETE_TODO_SUCCESS':
      const { todos } = state;
      const newTodos = todos.filter((todo) => todo.id !== action.payload);
      return {
          ...state, todos: newTodos
        };

    case 'CREATE_TODOITEM__SUCCESS':
       console.log(action.payload);
       return {
         ...state,
       } 

    default:
      return state;
  }
}

export default todosReducer;
