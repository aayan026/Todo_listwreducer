
function CompletedTodoListItem({todoValue,id}){


    return(
        <main>
            <p><span>{id} - {todoValue}</span></p>
        </main>
    )
}
export default CompletedTodoListItem