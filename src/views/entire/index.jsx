import React, {memo, useEffect} from "react";
import {EntireWrapper} from "@/views/entire/style";
import EntireFilter from "@/views/entire/c-cpns/entire-filter";
import {getEntireRoomList} from "@/services";
import {useDispatch} from "react-redux";
import {fetchRoomListAction} from "@/store/modules/entire/actionCreators";
import EntireRooms from "@/views/entire/c-cpns/entire-rooms";
import EntirePagination from "@/views/entire/c-cpns/entire-pagination";


const Entire = memo(() => {

    const dispatch= useDispatch()

    useEffect(() => {
        dispatch(fetchRoomListAction())

        },[dispatch])

    return (
        <EntireWrapper>
            <EntireFilter/>
            <EntireRooms/>
            <EntirePagination/>



        </EntireWrapper>


    )
})

export default Entire
