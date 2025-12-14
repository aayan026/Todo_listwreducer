import { useContext, useState } from "react"
import { MyContext } from "../App"

function TodoListItem({todoValue,id,status}){
    
    const {dispatch}=useContext(MyContext)
    return(
        <>
       <li style={{textDecoration: status?'none' : 'line-through'}}>
            <p><span>{id} - {todoValue}</span>
                <button 
                    onClick={()=>{
                    dispatch({type:'CHANGE_STATUS',payload:id})

                    setTimeout(() => {
                        dispatch({type:'DONE',payload: id})
                    }, 3000);    
                }
            }>DONE </button>
            <button onClick={()=>dispatch({type:'DELETE_TODO',payload:id})}>DELETE</button>
            </p>
       </li>
      </>
    )
}
export default TodoListItem