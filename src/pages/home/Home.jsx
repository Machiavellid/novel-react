import React from "react"
import Search from "../../components/Search/Search"
import { connect } from "react-redux"
import "./home.scss"
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
}
const mapStateToProps = (state) => {
    return {
        value: state.value
    }
}
export default connect(mapStateToProps)(Home)