import apiCall from "../apiCall"; 

export const createTodo = (dispatch) => async (todo, Cookies) => {  
  try {   
    dispatch({ type: 'CREATE_TODO_LOADING' }); 
    const res = await apiCall('/todos', 'post', todo, Cookies.get('token'))    
    dispatch({ type: 'CREATE_TODO_SUCCESS', payload: res.data })
    return res;
  } catch (err) {
    return dispatch({ type: 'CREATE_TODO_FAILURE' })
  }
};

export const fetchTodos = (dispatch) => async ( Cookies) => {
  try {
    dispatch({ type: 'FETCH_TODOS_LOADING' });  
    const res = await apiCall('/todos', 'get', null, Cookies.get('token'));    
    dispatch({ type: 'FETCH_TODOS_SUCCESS', payload: res.data })
    return res;
  } catch (err) {
    if (err && err.response) {
      return dispatch({ type: 'FETCH_TODOS_FAILURE', payload: err.response.data })
    }
  }
}

export const deleteTodo = (dispatch) => async (todoId, Cookies) => {
  try {
    dispatch({ type: 'DELETE_TODO_LOADING' }); 
    const res = await apiCall(`/todos/${todoId}`, 'delete', null, Cookies.get('token'));
    dispatch({ type: 'DELETE_TODO_SUCCESS', payload: todoId });
    return res;
  } catch (err) {          
      return dispatch({ type: 'DELETE_TODO_FAILURE' })
      }
}

export const createTodoItem = (dispatch) => async (todoitem, Cookies) => {
  try {
    dispatch({ type: 'CREATE_TODOITEM_LOADING' }); 
    const res = await apiCall('/todoItems', 'post', todoitem, Cookies.get('token'));
    dispatch({ type: 'CREATE_TODOITEM_SUCCESS', payload: res.data });  
    return res;
  } catch (err) {
    return dispatch({ type: 'CREATE_TODOITEM_FAILURE' })
  }
}

export const markTodoItemAsDone = (dispatch) => async (todoitem) => {
  try {
    dispatch({ type: 'MARK_AS_DONE_LOADING' });
    const res = await apiCall(`/todoItems/${todoitem.id}`, 'put', todoitem);
    dispatch({ type: 'MARK_AS_DONE_SUCCESS', payload: res.data });
    return res;
  } catch (err) {
    return dispatch({ type: 'MARK_AS_DONE_FAILURE'});
  }
}