import React from "react"
import Search from "../../components/Search/Search"
import { connect } from "react-redux"
import "./home.scss"
import jsonp from "fetch-jsonp"
import axios from "axios"
import "../../setupProxy"
class Home extends React.Component {
    render() {
        return (
            <div>
                <Search></Search>
                <div className="hot">
                    <div className="hot-each">1</div>
                    <div className="hot-each">2</div>
                    <div className="hot-each">3</div>
                    <div className="hot-each">4</div>
                    <div className="hot-each">5</div>
                    <div className="hot-each">6</div>
                </div>
            </div>

        )
    }
    componentDidMount(){
        getHot()
    }
}



const getHot=()=>{
    axios.get('/hot')
    .then((res) => {
         console.log(res.data.list);
    })

    
    // jsonp(api).then(res => {
    //     return res.json();//这是一个promise
    // }).then(res => {
    //     console.log(res);//向后台请求的数据
    // })

}


const mapStateToProps = (state) => {
    return {
        value: state.value
    }
}
export default connect(mapStateToProps)(Home)