import React from "react"
import "./search.scss"

class Search extends React.Component{
    render(){
        return(
            <div className="search-wrap">
                <input className="input-box" type="text" defaultValue=""/>
                <input className="input-button" type="button" value="搜索"/>
            </div>
        )
    }
}
export default Search