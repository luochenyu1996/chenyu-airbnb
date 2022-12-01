import React, {memo, useEffect} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import HomeBanner from "@/views/home/c-cpns/home-banner";
import {HomeWrapper} from "@/views/home/style";
import {fetchHomeDataAction} from "@/store/modules/home";
import SectionHeader from "components/section-header";
import RoomItem from "components/room-item";
import {Rating} from "@mui/material";



const Home = memo(() => {
    // 从redux中获取数据
    const {goodPriceInfo} = useSelector((state) => ({
        goodPriceInfo: state.home.goodPriceInfo
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
                    <SectionHeader title={goodPriceInfo.title}></SectionHeader>
                    <ul className='room-list'>
                        {
                            goodPriceInfo.list?.slice(0,8)?.map(item => {
                                return (
                                    <RoomItem itemData={item} key={item.id}/>
                                )
                            })
                        }
                    </ul>

                </div>
            </div>



        </HomeWrapper>
    )
})
export default Home
