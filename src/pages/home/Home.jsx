import React from "react"
import Search from "../../components/Search/Search"
import { connect } from "react-redux"
import "./home.scss"
import axios from "axios"
import "../../setupProxy"
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            novels: []
        };
    }
    render() {
        return (
            <div>
                <Search></Search>
                <div className="hot">
                    {
                        this.state.novels.map((el, index) => {        
                            return (
                                <div className="hot-each" key={index}>
                                    <img className="cover" src={`https://statics.zhuishushenqi.com${el.cover}`} alt="" />
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
    componentDidMount() {
        this.getHot()
    }
    getHot = () => {
        axios.get('/hot')
            .then((res) => {
                console.log(res.data.ranking);
                const imgs=[]
                res.data.ranking.books.map((el,index)=>{
                    if(index<9){
                        imgs.push(el)
                    }else{
                        return null
                    }
                })
                this.setState({
                    novels: imgs
                })
            })
    }
}






const mapStateToProps = (state) => {
    return {
        value: state.value
    }
}
export default connect(mapStateToProps)(Home)