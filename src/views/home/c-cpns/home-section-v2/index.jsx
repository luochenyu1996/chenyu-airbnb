import React, {memo, useCallback, useState} from "react";
import {HomeSectionV2Wrapper} from "@/views/home/c-cpns/home-section-v2/style";
import SectionHeader from "components/section-header";
import SectionRooms from "components/section-rooms";
import SectionFooter from "components/section-footer";
import SectionTabs from "components/section-tabs";

/**
 * discountInfo  recommendInfo 使用这个组件
 */
const HomeSectionV2 = memo((props) => {
    //组件需要接收的参数
    const {infoData} = props

    //定义内部state
    const initialName = Object.keys(infoData.dest_list)[0]


    const tabNames = infoData.dest_address?.map(item => item.name)
    const [name, setName] = useState(initialName)


    const tabClickHandle = useCallback(function (index, name) {
        setName(name)
    }, [])


    return (
        <HomeSectionV2Wrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
            <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}/>
            <SectionRooms roomList={infoData.dest_list?.[name]}  itemWidth="33.33333%"/>
            <SectionFooter name={name}/>
        </HomeSectionV2Wrapper>

    )
})

export default HomeSectionV2
