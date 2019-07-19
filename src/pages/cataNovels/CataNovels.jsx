import React from 'react'
import returnimg from "../../imgs/return.png"
import "./cataNovels.scss"
import { connect } from "react-redux"
import * as action from "../../store/action/actionType"
import { Link } from "react-router-dom"

class CataNovels extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cata_index:100,
            next_start:0,
            subCate:"",
            catatype:"男生",
            cataList:{
                    major:"",
                    mins:[]
                },
            returnimg: returnimg,
            novels: {
                books: [],
                total:0
            }
        }
    }
    render() {
        return (
            <div className="CataNovels">
                <div className="title">
                    <div className="title-wrap">
                        <img className="return" src={returnimg} alt="" onClick={() => { this.props.history.goBack() }} />
                        <span>{this.props.location.state.major}</span>
                    </div>
                </div>
                <div className="second-cata">
                    <div className="second-cata-title">次分类</div>
                    <div className="second-cata-wrap">
                        {
                        this.state.cataList.mins.map((el,index)=>{
                            return (
                                <span key={index} id={`cata${index}`} data_cataname={el} className={this.state.cata_index===`cata${index}`?"second-cata-each chosen":"second-cata-each"} onClick={el=>{this.cataClick(el.target)}}>{el}</span>
                            )
                        })
                        }
                    </div>
                </div>
                <div className="novels">
                    {
                        this.props.value.books.map((el) => {
                            return (
                                <Link to={`/novel/${el._id}`}>
                                      <div className="hot-each" key={el._id}>
                                    <img className="cover" src={`https://statics.zhuishushenqi.com${el.cover}`} alt="" />
                                    <div className="novel-text" key={el.title}>
                                        <span className="novel-title ellipsis ">{el.title}</span>
                                        <span className="novel-summary two-ellipsis">简介:{el.shortIntro}</span>
                                        <span className="novel-author ellipsis "><span>{el.author}</span><span className="novel-cata">{el.majorCate}{el.minorCate === "" ? null : ` ${el.minorCate}`}</span></span>
                                    </div>
                                    </div>
                                </Link>
                              
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.initData(this.props.match.params.cata,this.props.location.state.major)
        window.addEventListener('scroll', this.addNovels)
        this.props.initCata()
    }
    componentWillReceiveProps(nextProps){
        if(this.props.list!==nextProps.list){
            this.subCataInit()
        }
        if(this.props.value!==nextProps.value){
            this.setState({
                next_start:this.state.next_start+20
            })
        }
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.addNovels)
    }
    cataClick=(el)=>{
        if(el.getAttribute("data_cataname")===this.state.subCate){
            this.setState({
                cata_index:"",
                subCate:"",
                next_start:0
            },()=>{
                this.props.initData(this.props.match.params.cata,this.props.location.state.major,this.state.subCate)
            })
        }else{
            this.setState({
                cata_index:el.id,
                subCate:el.getAttribute("data_cataname"),
                next_start:0
            })
            this.props.initData(this.props.match.params.cata,this.props.location.state.major,el.getAttribute("data_cataname"))    
        }    
    }


    addNovels = () => {
        let scrollHeight = document.documentElement.scrollTop
        let availHeight = (document.body.clientHeight - window.screen.availHeight)
        if (scrollHeight === availHeight) {
            if(this.state.next_start<=this.props.value.total){
                this.props.addData(this.props.match.params.cata,this.props.location.state.major,this.state.next_start,this.state.subCate)
            }
        }
    }
    subCataInit=()=>{
        console.log("初始化二级目录")
        Object.keys(this.props.list).forEach((key)=>{
            switch(key){
                case this.props.match.params.cata:
                    this.props.list[key].map((el)=>{
                        switch(el.major){
                            case this.props.location.state.major:
                                this.setState({
                                    cataList:el
                                })
                                break
                            default:  
                        }
                        return 
                    })
                break
                default:
            }
       });
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        initData(cata,major,minor="") {
            dispatch(action.cataNovelInit(`book/by-categories?gender=${cata}&type=hot&major=${major}&minor=${minor}&start=0&limit=20`))
        },
        addData(cata,major,start,minor="") {
            dispatch(action.cataNovelAdd(`book/by-categories?gender=${cata}&type=hot&major=${major}&minor=${minor}&start=${start}&limit=20`))
            
        },
        initCata() {
            dispatch(action.cataListInit())
        }
    }
}
const mapStatetoProps = (state) => {
    return {
        value: state.cataNovels,
        list: state.cataList
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(CataNovels)