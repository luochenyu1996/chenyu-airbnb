import React, {memo, useEffect} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import HomeBanner from "@/views/home/c-cpns/home-banner";
import {HomeWrapper} from "@/views/home/style";
import {fetchHomeDataAction} from "@/store/modules/home";
import HomeSectionV1 from "@/views/home/c-cpns/home-section-v1";
import HomeSectionV2 from "@/views/home/c-cpns/home-section-v2";
import HomeSectionV3 from "@/views/home/c-cpns/home-section-v3";
import {isNotEmptyObj} from "@/utils";
import HomeYearning from "@/views/home/c-cpns/home-yearning";


const Home = memo(() => {
    // 从redux中获取数据
    const {goodPriceInfo, highScoreInfo, discountInfo, plusInfo,yearningInfo} = useSelector((state) => ({
        goodPriceInfo: state.home.goodPriceInfo,
        highScoreInfo: state.home.highScoreInfo,
        discountInfo: state.home.discountInfo,
        plusInfo: state.home.plusInfo,
        yearningInfo:state.home.yearningInfo,
    }), shallowEqual)


    //派发异步事件，发送网络请求
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchHomeDataAction("###"))
    }, [dispatch])
    console.log(plusInfo)

    return (
        <HomeWrapper>
            <HomeBanner/>
            <div className="content">
                {
                    isNotEmptyObj(discountInfo) && <HomeSectionV2 infoData={discountInfo}/>
                }
                {
                    isNotEmptyObj(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}/>
                }

                {
                    isNotEmptyObj(yearningInfo) && <HomeYearning infoData={yearningInfo}/>
                }
                {
                    isNotEmptyObj(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo}/>
                }

                {
                     isNotEmptyObj(plusInfo) && <HomeSectionV3 infoData={plusInfo}/>
                }


            </div>


        </HomeWrapper>
    )
})
export default Home
