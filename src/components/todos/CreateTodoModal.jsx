import React, {useEffect} from 'react'
import { ModalWrapper } from './Styles'

const CreateTodoModal = ({closeModal}) => {
let myRef;
    useEffect(() => {
        document.addEventListener('click',  closeTodoModal)

    }, []);

    const closeTodoModal = (e) => {
       if (myRef && !myRef.contains(e.target)) 
    {
        closeModal();
    }

    }
    return (
        <ModalWrapper>
            <form ref={(node) => (myRef = node) }>
                <h4 className="text-center"> Créer une nouvelle liste</h4>
                    <div className="form-group"> 
                    <input 
                    type="text"
                    name="todo"
                    className="form-control"
                    placeholder="Entrer une nouvelle liste"
                    />
                    </div>
                    <button
                    className="btn btn-primary float-right">Save</button>
                    <button onClick={closeTodoModal} className="btn btn-danger float-right mr-1">Cancel</button>
            </form>
            
        </ModalWrapper>
    )
}

export default CreateTodoModal
