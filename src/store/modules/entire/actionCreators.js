import * as  actionTypes from "./constants"
import {getEntireRoomList} from "@/services";


export const changeCurrentPageAction = (currentPage) => ({
        type: actionTypes.CHANGE_CURRENT_PAGE,
        currentPage,
    }
)


export const changeRoomListAction = (roomList) => ({
        type: actionTypes.CHANGE_ROOM_LIST,
        roomList,
    }
)


export const changeTotalCountAction = (totalCount) => ({
        type: actionTypes.CHANGE_TOTAL_COUNT,
        totalCount
    }
)


export const fetchRoomListAction=()=>{


    return   dispatch =>{
        getEntireRoomList(0).then(res=>{
            console.log(res)
        })

    }

}
