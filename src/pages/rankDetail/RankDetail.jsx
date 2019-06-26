import React from "react"
import { connect } from "react-redux"
import "./rankDetail.scss"
import returnimg from "../../imgs/return.png"

class RankDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cata: "畅销精选",
            returnimg: returnimg,
            novels: {
                books: []
            }
        }
    }
    render() {
        return (
            <div className="rank">
                <div className="rank-title">
                    <div className="rank-title-wrap">
                        <img className="return" src={returnimg} alt="" onClick={() => { this.props.history.goBack() }} />
                        <span>{this.state.cata}</span>
                    </div>
                </div>
                <div className="novels">
                    {
                        this.state.novels.books.map((el) => {
                            return (
                                <div className="hot-each" key={el._id}>
                                    <img className="cover" src={`https://statics.zhuishushenqi.com${el.cover}`} alt="" />
                                    <div className="novel-text">
                                        <span className="novel-title ellipsis ">{el.title}</span>
                                        <span className="novel-summary two-ellipsis">简介:{el.shortIntro}</span>
                                        <span className="novel-author ellipsis "><span>{el.author}</span><span className="novel-cata">{el.majorCate}{el.minorCate === "" ? null : ` ${el.minorCate}`}</span></span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.switchCata(this.props.match.params.id)
    }
    switchCata = (value) => {
        switch (value) {
            case "new":
                this.setState({
                    cata: "最新热书",
                    novels: this.props.New
                })
                break
            case "Vip":
                this.setState({
                    cata: "VIP专属",
                    novels: this.props.Vip
                })
                break
            default:
                this.setState({
                    cata: "畅销精选",
                    novels: this.props.value
                })
        }
    }

}
const mapStatetoProps = (state) => {
    return {
        value: state.homeHot,
        Vip: state.homeVip,
        New: state.homeNew
    }
}
export default connect(mapStatetoProps)(RankDetail)