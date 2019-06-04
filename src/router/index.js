import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react"
import Home from "../pages/home/Home"
import Rank from "../pages/rankDetail/RankDetail"
import store from "../store/store"
import { Provider } from "react-redux"

class RouterHome extends React.Component {
    render() {
        return (
            <Router>             
                    <Provider store={store}>
                        <Route exact path="/" component={Home} ></Route>
                        <Route exact path="/rank/:id" component={Rank} ></Route>
                    </Provider>                
            </Router>
        )
    }
}



export default RouterHome