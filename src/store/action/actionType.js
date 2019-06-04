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