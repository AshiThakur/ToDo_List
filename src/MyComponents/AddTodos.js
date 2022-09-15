import React, { useState } from 'react'


export const AddTodos = (props) => {

    const [title,setTitle] =useState(" ");
    const [desc,setDesc] =useState(" ");

    const submit=(e)=>{
        e.preventDefault();  // Page  will not reload
        
        if(!title || !desc){
            alert("Title or Description cannot be empty :)")
        }
      else{ props.addTodo(title,desc);
        setTitle("")
        setDesc("")
      }
    }

    return (
        <div className='container my-3'>
            <h3>Add a ToDo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label for="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="desc" class="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" class="btn btn-success btn-sm">Add ToDo</button>
            </form>
        </div>
    )
}