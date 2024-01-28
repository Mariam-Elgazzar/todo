import { useState } from "react"
import TodoActions from "./TodoActions"
import TodoForm from "./TodoForm"
import Todos from "./Todos"

const fakeTodos =[
    { id:1 ,title:"learn react" ,completed:false},
    { id:2 ,title:"jsx" ,completed:true},
    { id:3 ,title:"react" ,completed:true}
]
const TodoApp = () =>{
    const [todos ,setTodos] = useState(fakeTodos);
    const handleTodoAdd = newTodo =>{
        setTodos((prevTodos)=>[...prevTodos, newTodo]);
    }
    const handleTodoEdit = (id,newTodo) =>{
        setTodos(
            (prevTodos) => {
                return prevTodos.map((todo )=>{
                    if(todo.id ===id){
                        return newTodo;
                    } 
                        return todo;
                });
            }
        );
    }
    function handleTodoDelete(id){
        setTodos(prevTodos=>{
        return prevTodos.filter(todo=>todo.id!== id)});
    }
    const len = todos.length;
    const filteredTodoLen = todos.filter(todo=>todo.completed).length
    return (
    <main className="main-container ">  
        <TodoForm handleTodoAdd={ handleTodoAdd }/>
        <TodoActions  len={len} filteredTodoLen={filteredTodoLen}/>
        <Todos todos={todos} handleTodoEdit={ handleTodoEdit } handleTodoDelete={handleTodoDelete}/>
    </main>
    )
}

export default TodoApp
