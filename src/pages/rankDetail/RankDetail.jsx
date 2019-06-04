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
            novels:{

            }
        }
    }
    render() {
        return (
            <div className="rank">
                <div className="rank-title">
                    <img className="return" src={returnimg} alt="" onClick={()=>{this.props.history.goBack()}}/>
                    <span className="rank-text" style={{ clear: "both" }}></span><span>{this.state.cata}</span>
                </div>
                <div className="novels">
                    {
                        this.state.novels.map((el)=>{
                            
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
                    novels:this.props.New
                })
                break
            case "Vip":
                this.setState({
                    cata: "VIP专属",
                    novels:this.props.Vip
                })
                break
            default:
                this.setState({
                    cata: "畅销精选",
                    novels:this.props.value
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