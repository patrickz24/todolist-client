import createDataContext from './createDataContext';
import todosReducer from '../reducers/todos';
import { createTodo, fetchTodos, createTodoItem, markTodoItemAsDone, deleteTodo} from '../actions';


export const initialState = {
  createTodoError: '',
  fetchTodosError: '',
  todos: [],

};

export const { Context, Provider } = createDataContext(
  todosReducer,
  { createTodo, fetchTodos, createTodoItem, markTodoItemAsDone, deleteTodo},
  initialState,
);

