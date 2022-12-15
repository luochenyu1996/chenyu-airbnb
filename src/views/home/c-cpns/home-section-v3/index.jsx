import React, {memo} from "react";
import {HomeSectionV3Wrapper} from "@/views/home/c-cpns/home-section-v3/style";
import SectionTabs from "components/section-tabs";
import SectionHeader from "components/section-header";
import SectionRooms from "components/section-rooms";
import ScrollView from "@/base-ui/scroll-view";
import RoomItem from "components/room-item";
import SectionFooter from "components/section-footer";


//  plusInfo 使用这个页面
const HomeSectionV3 = memo((props) => {
    const {infoData} = props


    return (
        <HomeSectionV3Wrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
            {/*更多房源要做滚动*/}

            <div className='room-list'>
                <ScrollView>
                    {
                        infoData.list.map((item) => {return <RoomItem itemData={item} itemWidth="20%" key={item.id}/>})
                    }
                </ScrollView>

            </div>
            <SectionFooter name="plus"/>
        </HomeSectionV3Wrapper>

    )
})
export default HomeSectionV3
