const defaultValue={
    books:[
        {
            cover:""
        }
    ]
}

export default (state=defaultValue,action)=>{
    switch(action.type){
        case "Init_Home_Hot":
            return state=action.value
        default:
            return state
    }
}