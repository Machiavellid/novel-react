import axios from "axios"

export const homeInit=()=>{
    return (dispatch)=>{
        axios.get('/hot')
        .then((res) => {  
            
            dispatch({
                type:"Init_Home",
                value:res.data.ranking.books
            })
        })
    }
}