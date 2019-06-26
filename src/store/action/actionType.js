import axios from "axios"

export const homeHotInit = () => {
    return (dispatch) => {
        axios.get('/hot')
            .then((res) => {
                dispatch({
                    type: "Init_Home_Hot",
                    value: res.data.ranking
                })
            })
    }
}

export const homeVipInit = () => {
    return (dispatch) => {
        axios.get("/Vip")
            .then((res) => {
                dispatch({
                    type: "Init_Home_Vip",
                    value: res.data.ranking
                })
            })
    }
}
export const homeNewInit = () => {
    return (dispatch) => {
        axios.get("/new")
            .then((res) => {
                dispatch({
                    type: "Init_Home_New",
                    value: res.data.ranking
                })
            })
    }
}
export const cataInit = () => {
    return (dispatch) => {
        axios.get("/cata")
            .then((res) => {
                dispatch({
                    type: "Init_Cata",
                    value: res.data
                })
            })
    }
}


export const cataNovelInit=(addr)=>{
    return (dispatch)=>{
        axios.get("/zhuishushenqi"+addr)
        .then((res)=>{
            dispatch({
                type:"Init_Cata_Novels",
                value:res.data
            })
        })
    }
}


export const cataNovelAdd=(addr)=>{
    return (dispatch)=>{
        axios.get("/zhuishushenqi"+addr)
        .then((res)=>{
            dispatch({
                type:"Add_Cata_Novels",
                value:res.data
            })
        })
    }
}

export const cataListInit=()=>{
    return (dispatch)=>{
        axios.get("/zhuishushenqi"+"cats/lv2")
        .then((res)=>{
            dispatch({
                type:"Init_cata_list",
                value:res.data
            })
        })
    }
}

export const novelInit=(id)=>{
    return (dispatch)=>{
        axios.get("/zhuishushenqi"+"book/"+id)
        .then((res)=>{
            dispatch({
                type:"Init_novel",
                value:res.data
            })    
        })
    }
}