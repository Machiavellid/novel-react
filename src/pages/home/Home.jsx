import React from "react"
import Search from "../../components/Search/Search"
import { connect } from "react-redux"
import "./home.scss"
import axios from "axios"
import "../../setupProxy"
import * as action from "../../store/action/actionType"
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
                    <div className="cata-colume">
                        <span className="cata-title">畅销精选</span>
                        <span className="cata-button">全部</span>
                    </div>
                    
                    {
                        this.props.value.map((el, index) => {
                            if(index<3){
                                return (
                                    <div className="hot-each" key={el._id}>
                                        <img className="cover" src={`https://statics.zhuishushenqi.com${el.cover}`} alt="" />
                                        <div className="novel-text">
                                            <span className="novel-title ellipsis pdb1">{el.title}</span>
                                            <span className="novel-author ellipsis pdb1">作者:{el.author}</span>
                                            <span className="novel-cata ellipsis pdb1">类型:{el.majorCate}{el.minorCate===""?null:` ${el.minorCate}`}</span>
                                            <span className="novel-summary two-ellipsis">简介:{el.shortIntro}</span>
                                        </div>
                                    </div>
                                )
                            }
                            else{
                                return null;
                            }
                            
                        })
                    }

                </div>
            </div>
        )
    }
    componentDidMount() {
        // this.getHot()
        this.props.initHome()
    }
    getHot = () => {
        axios.get('/hot')
            .then((res) => {
                console.log(res.data.ranking);
                const imgs = []
                res.data.ranking.books.map((el, index) => {
                    if (index < 9) {
                        imgs.push(el)
                    } else {
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
        value: state.home
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        initHome() {
            dispatch(action.homeInit())
        }
    }
}
export default connect(mapStateToProps, mapDispatchtoProps)(Home)