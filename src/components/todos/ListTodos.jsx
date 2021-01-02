import React, {useState} from 'react';
import Layout from '../layouts/Layout';
import CreateTodoModal from './CreateTodoModal';
import { TodoList } from './Styles';

const ListTodos = () => {
    const [showModal, setShowModal]= useState(false);

    const handleShowModal= () => {
        setShowModal(true);
    }
    const handleCloseModal= () => {
        setShowModal(false);
    }


    return (
        <Layout>
            <TodoList>
           {showModal &&  <CreateTodoModal closeModal={handleCloseModal}/>}
            <div className="container">
           
            <div className="row">
                <div className="col-md-12 header text-center mt-3">
                    <h1>Mes Todos Listes</h1>
                </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <button className="btn btn-primary float-right" onClick={handleShowModal}>Nouvelle</button>
                    </div>
                </div>
                </div>
            </TodoList>       
        </Layout>
    )
}

export default ListTodos
