/* eslint-disable import/no-anonymous-default-export */
import React, {useState, useEffect, useContext} from 'react';
import Cookies from 'js-cookie';
import Layout from '../layouts/Layout';
import CreateTodoModal from './CreateTodoModal';
import { Context as TodosContext, Provider as TodosProvider} from '../../context/todosContext';
import { TodoList } from './Styles';
import RenderTodos from './RenderTodos';

const ListTodos = () => {
    const { fetchTodos } = useContext(TodosContext);
    const [showModal, setShowModal]= useState(false);
    
    useEffect(() => {
        (async () => {
          await fetchTodos(Cookies);
        })();
      }, []);

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
                    <h1>My Todo Lists</h1>
                </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <button className="btn btn-primary float-right" onClick={handleShowModal}>Nouvelle</button>
                    </div>
                </div>
                <RenderTodos/>
                </div>
            </TodoList>       
        </Layout>
    )
}

export default () => {
    return (
    <TodosProvider>
        <ListTodos/>
    </TodosProvider>
    )
};
