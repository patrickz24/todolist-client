import React, {useEffect, useState, useContext} from 'react';
import Cookies from 'js-cookie';
import { ModalWrapper } from './Styles';
import {Context as TodosContext} from '../../context/todosContext';

const CreateTodoModal = (props) => {
const { createTodo } = useContext(TodosContext);
const [todo, setTodo]= useState('');
let myRef;
useEffect(() => {
        document.addEventListener('click',  closeTodoModal);
        return () => {
        document.removeEventListener('click', closeTodoModal);
        }
    }, []);

    const closeTodoModal = (e) => {
       if (myRef && !myRef.contains(e.target)) 
    {
        props.closeModal();
    }
    }

    const handleChange = (e) => {
        e.preventDefault();
       setTodo(e.target.value)
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();          
       await createTodo({ title: todo }, Cookies);
       props.closeModal();        
    }

    return (
        <ModalWrapper>
            <form onSubmit={handleSubmit} ref={(node) => (myRef = node) }>
                <h4 className="text-center"> Créer une nouvelle liste</h4>
                    <div className="form-group"> 
                    <input 
                    type="text"
                    name="todo"
                    className="form-control"
                    placeholder="Entrer une nouvelle liste"
                    onChange={handleChange}
                    />
                    </div>
                    <input type="submit"
                    className="btn btn-primary float-right" value="Save"/>
                    
                    
                    <button onClick={closeTodoModal} className="btn btn-danger float-right mr-1">Cancel</button>
            </form>
            
        </ModalWrapper>
    )
}

export default CreateTodoModal
