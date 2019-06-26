const defaultValue={
    male:[{
        major:"",
        mins:[]
    }],
    female:[{
        major:"",
        mins:[]
    }],
    picture:[{
        major:"",
        mins:[]
    }],
    press:[{
        major:"",
        mins:[]
    }]
}
export default (state=defaultValue,action)=>{
    switch (action.type) {
        case "Init_cata_list":
            return state=action.value    
        default:
            return state
    }
}