import React,{memo} from "react";
import {HomeSectionV1Wrapper} from "@/views/home/c-cpns/home-section-v1/style";
import SectionHeader from "components/section-header";
import SectionRooms from "components/section-rooms";
import SectionFooter from "components/section-footer";
import PropTypes from 'prop-types'

// goodPriceInfo highScoreInfo 使用这个组件
const HomeSectionV1 =memo((props)=>{
    const {infoData}=props

    return(
        <HomeSectionV1Wrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
            <SectionRooms roomList={infoData.list} itemWidth="25%"/>
            <SectionFooter/>
        </HomeSectionV1Wrapper>

    )
})

HomeSectionV1.propTypes = {
    infoData: PropTypes.object
}

export  default HomeSectionV1
