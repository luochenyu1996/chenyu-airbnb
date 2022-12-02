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


