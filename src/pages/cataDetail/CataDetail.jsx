import React from "react"
import "./cataDetail.scss"
import * as action from "../../store/action/actionType"
import returnImg from "../../imgs/return.png"
import { connect } from "react-redux"

class CataDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state={
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
                        <span className="cata-text-each">男生</span>
                        <span className="cata-text-each">女生</span>
                        <span className="cata-text-each">漫画</span>
                        <span className="cata-text-each">出版</span>
                    </div>
                    <div className="cata-detail-wrap">
                        {/* 男生栏目 */}
                        <div className="cata-detail" >
                            {
                                this.props.cata.male.map((el) => {
                                    return (
                                        <div className="cata-detail-each" key={el.name}>
                                            <div className="detail-text">
                                                <span className="cata-name">{el.name}</span>
                                                <span className="cata-count">{el.bookCount}本</span>
                                            </div>
                                            <div className="detail-img">
                                                <img className="detail-img-each" src={`https://statics.zhuishushenqi.com${el.bookCover[0]}`} alt="" />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        {/* 女生栏目 */}
                        <div className="cata-detail">
                            {
                                this.props.cata.female.map((el) => {
                                    return (
                                        <div className="cata-detail-each" key={el.name}>
                                            <div className="detail-text">
                                                <span className="cata-name">{el.name}</span>
                                                <span className="cata-count">{el.bookCount}本</span>
                                            </div>
                                            <div className="detail-img">
                                                <img className="detail-img-each" src={`https://statics.zhuishushenqi.com${el.bookCover[0]}`} alt="" />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        {/* 图书栏目 */}
                        <div className="cata-detail">
                            {
                                this.props.cata.picture.map((el) => {
                                    return (
                                        <div className="cata-detail-each" key={el.name}>
                                            <div className="detail-text">
                                                <span className="cata-name">{el.name}</span>
                                                <span className="cata-count">{el.bookCount}本</span>
                                            </div>
                                            <div className="detail-img">
                                                <img className="detail-img-each" src={`https://statics.zhuishushenqi.com${el.bookCover[0]}`} alt="" />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        {/* 出版栏目 */}
                        <div className="cata-detail">
                            {
                                this.props.cata.press.map((el) => {
                                    return (
                                        <div className="cata-detail-each" key={el.name}>
                                            <div className="detail-text">
                                                <span className="cata-name">{el.name}</span>
                                                <span className="cata-count">{el.bookCount}本</span>
                                            </div>
                                            <div className="detail-img">
                                                <img className="detail-img-each" src={`https://statics.zhuishushenqi.com${el.bookCover[0]}`} alt="" />
                                            </div>
                                        </div>
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
        console.log(this.props.cata)
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