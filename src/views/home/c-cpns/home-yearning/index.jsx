import React, {memo} from "react";
import {HomeYearningWrapper} from "@/views/home/c-cpns/home-yearning/styled";
import SectionHeader from "components/section-header";
import YearningItem from "components/yearning-item";
import ScrollView from "@/base-ui/scroll-view";

const HomeYearning = memo((props) => {
    const {infoData} = props


    return (

        <HomeYearningWrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
            <ScrollView>
                {
                    infoData.list.map(item => {
                        return <YearningItem itemData={item} key={item.city}/>
                    })
                }
            </ScrollView>
        </HomeYearningWrapper>
    )

})

export default  HomeYearning
