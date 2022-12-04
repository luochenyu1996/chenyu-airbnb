import React, {memo} from "react";
import {SectionRoomsWrapper} from "components/section-rooms/style";
import RoomItem from "components/room-item";
import PropTypes from "prop-types";


const SectionRooms = memo((props) => {

    const {itemWidth,roomList = []} = props


    return (
        <SectionRoomsWrapper>
            <ul className='room-list'>
                {
                    roomList.slice(0, 8)?.map(item => {
                        return (
                            <RoomItem itemData={item} itemWidth={itemWidth} key={item.id} />
                        )
                    })
                }
            </ul>
        </SectionRoomsWrapper>

    )
})

SectionRooms.prototype = {
    roomList: PropTypes.array
}
export default SectionRooms
