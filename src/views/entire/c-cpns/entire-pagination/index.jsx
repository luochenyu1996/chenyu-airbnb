import React, {memo} from "react";
import {EntirePaginationWrapper} from "@/views/entire/c-cpns/entire-pagination/sytle";
import {Pagination} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {
    changeCurrentPageAction,
    changeTotalCountAction,
    fetchRoomListAction
} from "@/store/modules/entire/actionCreators";


const EntirePagination = memo(() => {

    const {totalCount, currentPage, roomList} = useSelector((state) => ({
        totalCount: state.entire.totalCount,
        currentPage: state.entire.currentPage,
        roomList: state.entire.roomList
    }))

    const startCount = currentPage * 20 + 1
    const endCount = (currentPage + 1) * 20
    // const totalPage = Math.ceil(totalCount / 20)

    // 点击事件处理逻辑
    const dispatch=useDispatch()
    function pageChangeHandle(event, pageCount){
        //  回到顶部
        window.scrollTo(0,0)
        dispatch(changeCurrentPageAction(pageCount-1))
        dispatch(fetchRoomListAction())

    }


    return (
        <EntirePaginationWrapper>
            {
                !!roomList.length && (
                    <div className='info'>
                        <Pagination count={15} onChange={pageChangeHandle}/>
                        <div className='desc'>
                            第 {startCount} - {endCount} 个房源，共超过 {totalCount} 个
                        </div>

                    </div>
                )
            }
        </EntirePaginationWrapper>

    )

})
export default EntirePagination
