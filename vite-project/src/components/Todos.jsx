import {BiEdit , BiTrash} from "react-icons/bi"
const Todo = ({todo ,handleTodoEdit ,handleTodoDelete}) => {
    const handleCheckTodo=()=>{
        const newTodo = {
            ...todo,
            completed : !todo.completed
        };
        handleTodoEdit(todo.id , newTodo);
    }
    
    return (
    
        <li className="todo">
            <input
                className='todo__checkbox' 
                id={`inp-${todo.id}` }
                type="checkbox"  
                checked= {todo.completed}
                onChange={handleCheckTodo }
            />
            <label className='todo__label' htmlFor={`inp-${todo.id}` } >
            {todo.title}
            </label>
            <button className="todo__edit-button">
                <BiEdit size="1.5em" color="var(--primary-color)"/>
            </button>
            <button 
                className="todo__delete-button"
                onClick={()=>handleTodoDelete(todo.id)}>
                <BiTrash size="1.5em" color="var(--red)"/>
            </button>
        </li>
    
    )
}


const Todos = ({todos ,handleTodoEdit,handleTodoDelete}) => {


  return (
    <ul className="todos">
        {todos.map(todo=>(
        <Todo  key={todo.id} todo={todo} handleTodoEdit={handleTodoEdit} handleTodoDelete={handleTodoDelete} />)
        )}
    </ul>
  );
}

export default Todos
