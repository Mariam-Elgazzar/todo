import { useState } from "react";

const TodoForm = ({handleTodoAdd}) => {
    const [valueInput ,setValueInput] =useState("")
    function handlerSubmit(e){
        e.preventDefault();
        if(!valueInput.trim()) return;
        const newTodo={
            id:Date.now(),
            title:valueInput,
            completed:false,
        }
        handleTodoAdd(newTodo)
        setValueInput("")
    }
    return (
        <form  onSubmit={handlerSubmit} className="add-form">
            <fieldset className="add-form__fieldset">
                <legend className='add-form__legend'>
                    Write a new todo item
                </legend>
                <input  
                    aria-label=" mmmm" 
                    placeholder='learn html'
                    className='add-form__input' 
                    type="text"
                    checked
                    value={valueInput}
                    onChange={(e)=>setValueInput(e.target.value)} 
                />
                <button className='btn btn--primary add-form___submit' type="submit">Add</button>
            </fieldset>
        </form>
    )
}

export default TodoForm
