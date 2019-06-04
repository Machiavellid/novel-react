const defaultValue={
    books:[
        {
            cover:""
        }
    ]
}

export default (state=defaultValue,action)=>{
    switch(action.type){
        case "Init_Home_Vip":
            return state=action.value
        default:
            return state
    }
}