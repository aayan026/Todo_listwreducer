import { useContext,useEffect, useState } from "react"
import { MyContext } from "../App"
import TodoListItem from "./TodoListItem"
import {Link} from "react-router-dom"
function TodoList(){
    
    const {state,dispatch}=useContext(MyContext)
    const [showUndo, setShowUndo] = useState(true)

    useEffect(() => {
        if (state.lastDeletedItem) {
            setShowUndo(true)
        }
    }, [state.lastDeletedItem])

    return(
        <main>
            <h1>TO DO LIST</h1>
            <input type="text" onChange={(ev)=>dispatch({type:'GET_INPUT_VALUE',payload:ev.target.value})}/>
            <button onClick={()=>dispatch({type:'ADD_TODO'})}>ADD</button>
            {state.todoArr.map((item)=><TodoListItem key={item.id} {...item}/>)}
            <div className="undoButton">
                {state.lastDeletedItem && showUndo &&(
                <>
                <button onClick={() => dispatch({type:'UNDO_DELETE'})}>
                    Restore  {state.lastDeletedItem.todoValue}
                </button>
                <button onClick={()=>setShowUndo(false)}>Dismiss</button>
                </>)}
            </div>
            <Link to="/completedTodos">Completed</Link>
        </main>
    )
}
export default TodoList