import React from 'react'

const CreateTodoItem = ({handleSubmit, handleChange}) => {

    return (
        <form onClick={handleSubmit}>
            <div className="create-todoitem justify-content-center">
                <input onChange={handleChange} type="text" name="todoitem" placeholder="Entrer une nouvelle tâche"/>
                <button type="submit"> Ajouter</button>
            </div>
        </form>
    )
}

export default CreateTodoItem

