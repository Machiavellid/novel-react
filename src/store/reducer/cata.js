const defaulValue={
    male:[{
        bookCover:""
    }],
    female:[{
        bookCover:""
    }],
    picture:[{
        bookCover:""
    }],
    press:[{
        bookCover:""
    }]
}


export default (state=defaulValue,action)=>{
    switch(action.type){
        case "Init_Cata":
            return state=action.value
        default:
            return state
    }
}