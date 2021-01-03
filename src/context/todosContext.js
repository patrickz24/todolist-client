import createDataContext from './createDataContext';
import todosReducer from '../reducers/todos';
import { createTodo, fetchTodos} from '../actions';


export const initialState = {
  createTodoError: '',
  fetchTodosError: '',
  todos: [],

};

export const { Context, Provider } = createDataContext(
  todosReducer,
  { createTodo, fetchTodos},
  initialState,
);

