import React from 'react'
import { Tick } from './Styles';

const ListTodoItems = ({handleDone, todo}) => {
   if(todo?.todoItems) {
    return (
        <>
        {todo.todoItems.map((todoitem) => (
     <li className="list-group-item">
    {todoitem.text}
    {todoitem.isCompleted ? <div className="float-right">
        <Tick/>
    </div> : (
        <div className="float-right">
            <button onClick={() =>handleDone(todoitem)}>À Faire</button>
        </div>
    )}
</li>))}
        </>
    )}
   return null;
}

export default ListTodoItems;
