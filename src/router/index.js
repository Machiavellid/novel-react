import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react"
import Home from "../pages/home/Home"
import store from "../store/store"
import { Provider } from "react-redux"

class RouterHome extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Provider store={store}>
                        <Route path="/" component={Home} ></Route>
                    </Provider>
                </div>
            </Router>
        )
    }
}



export default RouterHome