const defaultValue={
    books:[
        {
            cover:""
        }
    ]
}
export default (state=defaultValue,action)=>{
    switch(action.type){
        case "Init_Cata_Novels":
            return state=action.value
        case "Add_Cata_Novels":
            let tempValue={
                books:[]
            }
            tempValue.books=state.books.concat(action.value.books)
            return state=Object.assign({},state,tempValue)
        default:
            return state
    }
}