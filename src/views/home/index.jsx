import React, {memo, useEffect, useState} from "react";
import chenyuRequest from "@/services"


const Home = memo(() => {
    //定义状态
    const [highScore, setHighScore] = useState({})


    useEffect(() => {
        chenyuRequest.get({url: "/home/highscore"}).then(res => {
            console.log(res)

            setHighScore(res)
        })
    }, [])


    return (
        <div>
            Home
            <h2>{highScore.title}</h2>
            <h2>{highScore.subtitle}</h2>
            {
                highScore.list &&
                <ul>
                    {highScore.list.map((item) => {
                        return <li key={item.id}>{item.name}</li>
                    })}
                </ul>
            }


        </div>

    )
})
export default Home
