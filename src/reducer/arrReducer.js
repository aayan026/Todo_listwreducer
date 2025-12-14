export let initialState={
    inputValue: '',
    todoArr:[
        {todoValue: 'Buy bread',id:1,status:true},
        {todoValue:'Buy account',id:2,status:true}
    ],
    completedTodos:[],
    lastDeletedItem:null
}


export function reducer(state,action){
     if(action.type==='DONE'){
        let newArr=[...state.todoArr]
        let completedArr=[...state.completedTodos]
        let index=newArr.findIndex((item)=>item.id===action.payload)
        let deletedItem=newArr[index]
        completedArr.push({...deletedItem,status:false})
        console.log(deletedItem.todoValue)
        newArr.splice(index,1)
        return{...state,todoArr: newArr,completedTodos:completedArr}
    }
    else if(action.type==='DELETE_TODO'){
        let newArr=[...state.todoArr]
        let index=newArr.findIndex((item)=>item.id===action.payload)
        let deletedItem=newArr[index]
        newArr.splice(index,1)
        return{...state,todoArr:newArr,lastDeletedItem:deletedItem}
    }
    else if(action.type==='GET_INPUT_VALUE'){
        return {...state,inputValue:action.payload}
    }
    else if(action.type==='ADD_TODO'){
        let newArr=[...state.todoArr]
        let newId=newArr.at(-1)?.id ?? 0
        newArr.push({todoValue:state.inputValue,id:newId+1,status:true})
        return{...state,todoArr:newArr}
    }
    else if(action.type==='CHANGE_STATUS'){
        let newArr=[...state.todoArr]
        let index=newArr.findIndex((item)=>item.id===action.payload)
        newArr[index].status=!newArr[index].status
        return{...state,todoArr:newArr}
    }
    else if(action.type==='UNDO_DELETE'){
        let newArr=[...state.todoArr]
        if(state.lastDeletedItem){
            newArr.push({...state.lastDeletedItem,status:true})
        }
        return{...state,todoArr:newArr,lastDeletedItem:null}
    }
    
    return
}