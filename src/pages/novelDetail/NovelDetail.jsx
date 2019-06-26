import React from "react"
import returnimg from "../../imgs/return.png"
import * as action from "../../store/action/actionType"
import "./novelDetail.scss"
import { connect } from "react-redux"

class NovelDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            returnimg: returnimg
        }
    }
    render() {
        return (
            <div className="novelDetail">
                <div className="title">
                    <div className="title-wrap">
                        <img className="return" src={returnimg} alt="" onClick={() => { this.props.history.goBack() }} />
                    </div>
                </div>
                <div className="novel-wrap">
                    <div className="info">
                        <img className="cover" src={`https://statics.zhuishushenqi.com${this.props.value.cover}`} alt="" />
                        <div className="detail">
                            <div className="title">{this.props.value.title}</div>
                            <div className="author">
                                <span className="author-text">{this.props.value.author}</span>
                                <span className="padding-symbol">|</span>
                                <span className="cata">{this.props.value.majorCate}</span>
                            </div>
                            <div className="word-count">
                                <span className="count-text">{this.props.value.wordCount > 9999 ? `${Math.floor(this.props.value.wordCount / 10000)}万` : this.props.value.wordCount}字</span>
                                <span className="padding-symbol">|</span>
                                <span>{this.props.value.chaptersCount}章</span>
                            </div>
                            <div className="update">{`最近更新：${this.props.value.updated.substring(0, 10)}`}</div>
                            <div className="tags">
                                <span className="tags-title">标签:</span>
                                <span className="tags-wrap">
                                    {
                                        this.props.value.tags.map((el) => {
                                            return (
                                                <span className="tags-each" key={el}>{el}</span>
                                            )
                                        })
                                    }
                                </span>

                            </div>
                        </div>
                    </div>
                    <div className="novel-data">
                        <div className="rating-wrap">
                            <span className="rating-score">
                                {this.props.value.rating.score}分
                            </span>
                            <span className="rating-count">
                                {this.props.value.rating.tip}
                            </span>
                        </div>
                        <div className="retentionRatio-wrap">
                            <span className="retentionRatio-score">
                                {this.props.value.retentionRatio}%
                            </span>
                            <span className="retentionRatio-text">
                                    读者留存
                            </span>
                        </div>
                        <div className="follower-wrap">
                        <span className="follower-count">
                                {this.props.value.latelyFollower}
                            </span>
                            <span className="follower-text">
                                    追书人气
                            </span>
                        </div>
                    </div>
                    <div className="novel-intro">
                        <div className="intro-title">
                            简介
                        </div>
                        <div className="intro-text">
                            {this.props.value.longIntro}
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.novelInit(this.props.match.params.id)
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.value !== nextProps.value) {
            console.log(nextProps.value)
        }
    }

}
const mapDispatchtoState = (dispatch) => {
    return {
        novelInit(id) {
            dispatch(action.novelInit(id))
        }
    }
}
const mapStatetoProps = (state) => {
    return {
        value: state.novelDetail
    }
}

export default connect(mapStatetoProps, mapDispatchtoState)(NovelDetail)