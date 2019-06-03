const defautValue=[]

export default (state=defautValue,action)=>{
    switch(action.type){
        case "Init_Home":
            return state=action.value
        default:
            return state
    }
}