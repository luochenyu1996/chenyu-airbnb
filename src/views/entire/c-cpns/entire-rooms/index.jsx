import React, {memo} from "react";
import {shallowEqual, useSelector} from "react-redux";
import {EntireRoomsWrapper} from "@/views/entire/c-cpns/entire-rooms/sytle";
import RoomItem from "components/room-item";

const EntireRooms = memo(() => {

    const {roomList, totalCount, isLoading} = useSelector((state) => ({
        roomList: state.entire.roomList,
        totalCount: state.entire.totalCount,
        isLoading: state.entire.isLoading
    }), shallowEqual)


    return (
        <EntireRoomsWrapper>
            <h2 className='title'>一共{totalCount}多处住所</h2>
            <div className='list'>
                {
                    roomList.map(item => {
                        return (<RoomItem itemData={item} itemWidth="20%" key={item._id}/>
                        )
                    })
                }
            </div>

            {isLoading && <div className='cover'/>}


        </EntireRoomsWrapper>

    )
})

export default EntireRooms


