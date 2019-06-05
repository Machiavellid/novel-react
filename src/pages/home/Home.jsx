import React from "react"
// import Search from "../../components/Search/Search"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import "./home.scss"
import "../../setupProxy"
import * as action from "../../store/action/actionType"
import searchImg from "../../imgs/sou-suo.png"
import classImg from "../../imgs/class.png"
class Home extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div>
                <div className="header">
                    <div className="search">
                        <img className="search-img" src={searchImg} alt="" />
                        <input className="search-input" type="text" name="" id="" placeholder="请输入书名" />
                    </div>
                    <div className="cata">
                        <img className="cata-img" src={classImg} alt="" />
                        <Link to="/cata">
                            <span className="cata-text">分类</span>
                        </Link>

                    </div>
                </div>
                <div className="hot">
                    <div className="cata-colume">
                        <span className="cata-title">畅销精选</span>
                        <span className="cata-button"><Link to="/rank/value">更多 {this.props.value.total}</Link> </span>
                    </div>


                    <div className="hot-each">
                        <img className="cover" src={`https://statics.zhuishushenqi.com${this.props.value.books[0].cover}`} alt="" />
                        <div className="novel-text">
                            <span className="novel-title ellipsis ">{this.props.value.books[0].title}</span>
                            <span className="novel-summary two-ellipsis">简介:{this.props.value.books[0].shortIntro}</span>
                            <span className="novel-author ellipsis"><span>{this.props.value.books[0].author}</span><span className="novel-cata">{this.props.value.books[0].majorCate}{this.props.value.books[0].minorCate === "" ? null : ` ${this.props.value.books[0].minorCate}`}</span></span>
                        </div>
                    </div>

                    <div className="hot-rest pdt2">
                        {
                            this.props.value.books.map((el, index) => {
                                if (index > 0 & index < 5) {
                                    return (
                                        <div className="hot-rest-each" key={el._id}>
                                            <img className="cover" src={`https://statics.zhuishushenqi.com${el.cover}`} alt="" />
                                            <span className="novel-title ellipsis pdt1">{el.title}</span>
                                        </div>
                                    )
                                }
                                else {
                                    return null;
                                }

                            })
                        }
                    </div>

                </div>
                <div className="mid-bar"></div>
                <div className="hot">
                    <div className="cata-colume">
                        <span className="cata-title">VIP专属</span>
                        <span className="cata-button"><Link to="/rank/Vip">更多 {this.props.Vip.total}</Link> </span>
                    </div>


                    <div className="hot-each">
                        <img className="cover" src={`https://statics.zhuishushenqi.com${this.props.Vip.books[0].cover}`} alt="" />
                        <div className="novel-text">
                            <span className="novel-title ellipsis ">{this.props.Vip.books[0].title}</span>
                            <span className="novel-summary two-ellipsis">简介:{this.props.Vip.books[0].shortIntro}</span>
                            <span className="novel-author ellipsis "><span>{this.props.Vip.books[0].author}</span><span className="novel-cata">{this.props.Vip.books[0].majorCate}{this.props.Vip.books[0].minorCate === "" ? null : ` ${this.props.value.books[0].minorCate}`}</span></span>
                        </div>
                    </div>

                    <div className="hot-rest pdt2">
                        {
                            this.props.Vip.books.map((el, index) => {
                                if (index > 0 & index < 5) {
                                    return (
                                        <div className="hot-rest-each" key={el._id}>
                                            <img className="cover" src={`https://statics.zhuishushenqi.com${el.cover}`} alt="" />
                                            <span className="novel-title ellipsis pdt1">{el.title}</span>
                                        </div>
                                    )
                                }
                                else {
                                    return null;
                                }

                            })
                        }
                    </div>

                </div>
                <div className="mid-bar"></div>
                <div className="hot">
                    <div className="cata-colume">
                        <span className="cata-title">最新热书</span>
                        <span className="cata-button"><Link to="/rank/new">更多 {this.props.New.total}</Link> </span>
                    </div>


                    <div className="hot-each">
                        <img className="cover" src={`https://statics.zhuishushenqi.com${this.props.New.books[0].cover}`} alt="" />
                        <div className="novel-text">
                            <span className="novel-title ellipsis ">{this.props.New.books[0].title}</span>
                            <span className="novel-summary two-ellipsis">简介:{this.props.New.books[0].shortIntro}</span>
                            <span className="novel-author ellipsis "><span>{this.props.New.books[0].author}</span><span className="novel-cata">{this.props.New.books[0].majorCate}{this.props.New.books[0].minorCate === "" ? null : ` ${this.props.New.books[0].minorCate}`}</span></span>
                        </div>
                    </div>

                    <div className="hot-rest pdt2">
                        {
                            this.props.New.books.map((el, index) => {
                                if (index > 0 & index < 5) {
                                    return (
                                        <div className="hot-rest-each" key={el._id}>
                                            <img className="cover" src={`https://statics.zhuishushenqi.com${el.cover}`} alt="" />
                                            <span className="novel-title ellipsis pdt1">{el.title}</span>
                                        </div>
                                    )
                                }
                                else {
                                    return null;
                                }

                            })
                        }
                    </div>

                </div>
                <div className="mid-bar"></div>
            </div>
        )
    }
    componentDidMount() {
        this.props.initHomeHot()
        this.props.initHomeVip()
        this.props.initHomeNew()
    }
}
const mapStateToProps = (state) => {
    return {
        value: state.homeHot,
        Vip: state.homeVip,
        New: state.homeNew
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        initHomeHot() {
            dispatch(action.homeHotInit())
        },
        initHomeVip() {
            dispatch(action.homeVipInit())
        },
        initHomeNew() {
            dispatch(action.homeNewInit())
        }
    }
}
export default connect(mapStateToProps, mapDispatchtoProps)(Home)