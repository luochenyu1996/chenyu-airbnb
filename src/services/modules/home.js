import chenyuRequest from "../index.js"

export  function getHomeGoodPriceData(){

    return chenyuRequest.get({
         url:"/home/goodprice"
    })

}


export  function getHomeHighScoreData(){
    return chenyuRequest.get({
        url:"/home/highscore"
    })
}

export  function  getHomeDiscountData(){

    return chenyuRequest.get({
        url:"/home/discount"
    })
}

export  function   getHomePlusData(){
    return chenyuRequest.get({
        url: "/home/plus"
    })

}

export function getHomeYearningData() {
    return chenyuRequest.get({
        url: "/home/longfor"
    })
}


