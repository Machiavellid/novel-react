const defaultValue={
    author: "",
    cat: "",
    chaptersCount: 0,
    cover: "",
    gender: [""],
    lastChapter:"",
    longIntro:"",
    majorCateV2:"",
    minorCate:"",
    retentionRatio:"",
    rating: {count: 0, score: 0, tip: ""},
    title: "",
    updated: "",
    wordCount: 0,
    latelyFollower:0,
    tags: ["强者回归"]
}

export default (state=defaultValue,action)=>{
    switch(action.type){
        case "Init_novel":
            return state=action.value
        default:
            return state
    }
}