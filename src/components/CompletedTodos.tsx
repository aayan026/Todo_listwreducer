import { useContext } from "react"
import { MyContext } from "../App"
import CompletedTodoListItem from "./CompletedTodoListItem"
import { Link } from "react-router"

function CompletedTodos(){
    const {state,dispatch}=useContext(MyContext)

    return(
        <main>
           
            <h1>COMPLETED TODOS</h1>
            {state.completedTodos.map((item:any)=><CompletedTodoListItem key={item.id} {...item}/>)}
            {state.completedTodos.length===0 &&
                <>
                <p>No tasks have been completed yet.</p>
                </>
            }
            <Link to='/'>todos</Link>
        </main>
    )
}
export default CompletedTodos