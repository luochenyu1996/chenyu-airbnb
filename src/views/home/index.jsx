import React, {memo, useEffect} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import HomeBanner from "@/views/home/c-cpns/home-banner";
import {HomeWrapper} from "@/views/home/style";
import {fetchHomeDataAction} from "@/store/modules/home";
import SectionHeader from "components/section-header";
import SectionRooms from "components/section-rooms";



const Home = memo(() => {
    // 从redux中获取数据
    const {goodPriceInfo,highScoreInfo} = useSelector((state) => ({
        goodPriceInfo: state.home.goodPriceInfo,
        highScoreInfo: state.home.highScoreInfo
    }), shallowEqual)


    //派发异步事件，发送网络请求
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchHomeDataAction("###"))
    }, [dispatch])


    return (
        <HomeWrapper>
            <HomeBanner/>
            <div className="content">
                <div className='good-price'>
                    <SectionHeader title={goodPriceInfo.title}/>
                    <SectionRooms roomList={goodPriceInfo.list}/>
                </div>
                <div className='high-score'>
                    <SectionHeader title={highScoreInfo.title}  subtitle={highScoreInfo.subtitle} />
                    <SectionRooms roomList={highScoreInfo.list}/>

                </div>



            </div>



        </HomeWrapper>
    )
})
export default Home
