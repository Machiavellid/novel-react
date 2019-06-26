import React from "react"
import {Link} from "react-router-dom"
import "./indexRecom.scss"
import {connect} from "react-redux"
class IndexRecom extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value:{
                total:24,
                books:[{
                    cover:"",
                    title:"",
                    shortIntro:"",
                    author:"",
                    majorCate:"",
                    minorCate:""

                }]
            },
            test:""
        }
    }
    render() {
        return (
            <div className="hot" >
                <div className="cata-colume">
                    <span className="cata-title">VIP专属{this.state.value.total}</span>
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
        )
    }
    componentDidUpdate(){
        switch(this.props.rank){
            case "男生":
                this.setState({
                    value:this.props.value
                })
                break
            default:{
                console.log("失败")
            }
        }
    }

}
const mapStateToProps = (state) => {
    return {
        value: state.homeHot,
        Vip: state.homeVip,
        New: state.homeNew
    }
}
export default connect(mapStateToProps)(IndexRecom)