import { useState } from "react"
import { useReducer } from "react"

let initialState=[]
const reducer=(state,action)=>
{
    switch(action.type)
    {
        case 'add':
            return[...state,{task:action.payload,completed:false}]
        case 'update':
            return state.map((todo)=>todo.task===action.payload.task?{...todo,completed:true}:todo)
        case 'delete':
            return state.filter((todo)=>todo.task!=action.payload.task)
    }
}
function Todo()
{
    let[state,dispatch]=useReducer(reducer,initialState)
    let[input,setInput]=useState('')
    return(
        <div>
            <b>Enter the task</b>
            <input type="text" value={input} onChange={(event)=>setInput(event.target.value)}>
            </input>
            <button onClick={()=>dispatch({'type':'add',payload:input})}>Add</button>
            <ol>
                {state && state.map((todo)=><li>{todo.task}{todo.completed?'Completed':'Not Completed'}
                    <button onClick={()=>dispatch({'type':'update',payload:todo})}>Update</button>
                    <button onClick={()=>dispatch({'type':'delete',payload:todo})}>Delete</button></li>)}
            </ol>

        </div>
    )
}
export default Todo;