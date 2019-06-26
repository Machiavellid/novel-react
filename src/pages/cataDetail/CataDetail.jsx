import React from "react"
import "./cataDetail.scss"
import * as action from "../../store/action/actionType"
import returnImg from "../../imgs/return.png"
import { connect } from "react-redux"
import {Link} from "react-router-dom"

class CataDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: "男生"
        }
    }
    render() {
        return (
            <div className="cata">
                <div className="header">
                    <img className="header-img" src={returnImg} alt="" onClick={() => { this.props.history.goBack() }} />
                    <span className="header-text">分类</span>
                </div>
                <div className="cata-content">
                    <div className="cata-text">
                        <span key="1" className={"男生" === this.state.show ? "cata-text-each chosen" : "cata-text-each"} onClick={() => { this.changeCata("男生") }}>男生</span>
                        <span key="2" className={"女生" === this.state.show ? "cata-text-each chosen" : "cata-text-each"} onClick={() => { this.changeCata("女生") }}>女生</span>
                        <span key="3" className={"图书" === this.state.show ? "cata-text-each chosen" : "cata-text-each"} onClick={() => { this.changeCata("图书") }}>漫画</span>
                        <span key="4" className={"出版" === this.state.show ? "cata-text-each chosen" : "cata-text-each"} onClick={() => { this.changeCata("出版") }}>出版</span>
                    </div>
                    <div className="cata-detail-wrap">
                        {/* 男生栏目 */}
                        <div className="cata-detail" style={{ display: ("男生" === this.state.show) ? "flex" : "none" }} key="1" >
                            {
                                this.props.cata.male.map((el,index) => {
                                    return (
                                        <Link className="detail-link" to={{pathname:`/novels/male`,state:{major:el.name}}}>
                                        <div className="cata-detail-each" key={index}>
                                            <div className="detail-text">
                                                <span className="cata-name">{el.name}</span>
                                                <span className="cata-count">{el.bookCount}本</span>
                                            </div>
                                            <div className="detail-img">
                                                <img className="detail-img-each" src={`https://statics.zhuishushenqi.com${el.bookCover[0]}`} alt="" />
                                            </div>
                                        </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>

                        {/* 女生栏目 */}
                        <div className="cata-detail" style={{ display: ("女生" === this.state.show) ? "flex" : "none" }} key="2">
                            {
                                this.props.cata.female.map((el) => {
                                    return (
                                        <Link className="detail-link" to={{pathname:`/novels/female`,state:{major:el.name}}}>
                                        <div className="cata-detail-each" key={el.name}>
                                            <div className="detail-text">
                                                <span className="cata-name">{el.name}</span>
                                                <span className="cata-count">{el.bookCount}本</span>
                                            </div>
                                            <div className="detail-img">
                                                <img className="detail-img-each" src={`https://statics.zhuishushenqi.com${el.bookCover[0]}`} alt="" />
                                            </div>
                                        </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>

                        {/* 图书栏目 */}
                        <div className="cata-detail" style={{ display: ("图书" === this.state.show) ? "flex" : "none" }} key="3">
                            {
                                this.props.cata.picture.map((el) => {
                                    return (
                                        <Link className="detail-link" to={{pathname:`/novels/picture`,state:{major:el.name}}}>
                                        <div className="cata-detail-each" key={el.name}>
                                            <div className="detail-text">
                                                <span className="cata-name">{el.name}</span>
                                                <span className="cata-count">{el.bookCount}本</span>
                                            </div>
                                            <div className="detail-img">
                                                <img className="detail-img-each" src={`https://statics.zhuishushenqi.com${el.bookCover[0]}`} alt="" />
                                            </div>
                                        </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>

                        {/* 出版栏目 */}
                        <div className="cata-detail" style={{ display: ("出版" === this.state.show) ? "flex" : "none" }} key="4">
                            {
                                this.props.cata.press.map((el) => {
                                    return (
                                        <Link className="detail-link" to={{pathname:`/novels/press`,state:{major:el.name}}}>
                                        <div className="cata-detail-each" key={el.name}>
                                            <div className="detail-text">
                                                <span className="cata-name">{el.name}</span>
                                                <span className="cata-count">{el.bookCount}本</span>
                                            </div>
                                            <div className="detail-img">
                                                <img className="detail-img-each" src={`https://statics.zhuishushenqi.com${el.bookCover[0]}`} alt="" />
                                            </div>
                                        </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        )
    }
    componentDidMount() {
            this.props.initCata()
    }
    changeCata = (cata) => {
        this.setState({
            show: cata
        })
    }
}

const mapStatetoProps = (state) => {
    return {
        cata: state.cata
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        initCata() {
            dispatch(action.cataInit())
        }
    }
}


export default connect(mapStatetoProps, mapDispatchtoProps)(CataDetail)