import React, { useContext, useState } from 'react';
import Cookies from 'js-cookie';
import { Context as TodosContext } from '../../context/todosContext';
import CreateTodoItem from './CreateTodoItem';
import ListTodoItems from './ListTodoItems';

const RenderTodos = () => {
const [showCreateTodoItem, setShowCreateTodoItem] = useState(false);
const [todoId, setTodoId] = useState(0);
const [todoitem, setTodoitem] = useState('');
  const { state, createTodoItem, markTodoItemAsDone , fetchTodos, deleteTodo } = useContext(TodosContext); 

 const handleAddTodoItem = (todo) => {
   setShowCreateTodoItem(true);
   setTodoId(todo.id);
 }
  const handleChange = (e) =>{
setTodoitem(e.target.value);
   }
  const handleSubmit = async (e) => {
    e.preventDefault();
   if (todoitem){
    const res = await createTodoItem({text : todoitem, todoId}, Cookies);
   if (res) {
     await fetchTodos(Cookies);
   
   } 
   }
  
  } 

  
const handleDeleteTodo = async (todo) => {
const res = await deleteTodo(todo.id, Cookies);
if (res) {
  await fetchTodos(Cookies);

} 
}



const handleDone = async (todoitem) => {
const res =   await markTodoItemAsDone({
     id: todoitem.id,
     isCompleted:true,
     text: todoitem.text
   });
   if (res) {
    await fetchTodos(Cookies);
   }    
}
   

  return (
    <div className="container">
      <div className="row justify-content-center todos">
        {state.todos && state.todos.sort((a, b) => (a.id - b.id)).map((todo, i) => {
          i++;
          return (
            <div key={todo.id} className="col-md-10 todo">
              <button className="float-right delete-btn" onClick={() => handleDeleteTodo(todo)}>
                &times;
              </button>
              <button onClick={() => handleAddTodoItem(todo)} className="float-right add-btn">
                Ajouter tâches
              </button>
              <h5>{i}. {todo.title}</h5>
              <ul className="list-group">
                <ListTodoItems handleDone={handleDone} todo={todo} />

              </ul>
             {showCreateTodoItem && todoId === todo.id && <CreateTodoItem  handleChange={handleChange} handleSubmit={handleSubmit}/>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RenderTodos