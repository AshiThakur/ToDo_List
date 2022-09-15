import React from 'react'
import {TodoItem} from '../MyComponents/TodoItem'; 

export const Todos = (props) => {
  let mystyle={
    minHeight:'80vh',
    margin:'10px auto'
  }
  return (
    <div className='container' style={mystyle}>
      <h3 className=' my-3'>Todos List</h3>
      
      {
      props.todos.length===0? "No Todos":props.todos.map((todo)=>{
        return(
        <> 
            <TodoItem todo= {todo} key ={todo.sno} onDelete={props.onDelete}/><hr/>
            
        </>)
      })}
    </div>
  )
}
