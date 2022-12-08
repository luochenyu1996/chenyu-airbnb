import * as actionTypes from "./constants"

const initialState = {
    // 当前页码
    currentPage: 0,
    // 房间列表
    roomList: [],
    // 总数据数
    totalCount: 0,


}

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case actionTypes.CHANGE_ROOM_LIST:
            return {...state, currentPage: action.roomList}
        case actionTypes.CHANGE_TOTAL_COUNT:
            return {...state, totalCount: action.totalCount}
        default:
            return state
    }
}

export default reducer
