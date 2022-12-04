import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {
    getHomeDiscountData,
    getHomeGoodPriceData,
    getHomeHighScoreData,
    getHomePlusData,
    getHomeYearningData
} from "@/services";


export const fetchHomeDataAction = createAsyncThunk(
    "fetchdata", (payload, {dispatch, getState}) => {
        getHomeGoodPriceData().then(res => {
            dispatch(changeGoodPriceInfoAction(res))
        })

        getHomeHighScoreData().then(res => {
            dispatch(changeHighScoreInfoAction(res))
        })

        getHomeDiscountData().then(res => {
            dispatch(changeDiscountInfoAction(res))
        })
        getHomePlusData().then(res => {
            dispatch(changePlusInfoAction(res))
        })
        getHomeYearningData().then(res => {
            dispatch(changeYearningInfoAction(res))
        })
    })

const homeSlice = createSlice({
        name: "home",
        initialState: {
            goodPriceInfo: {},
            highScoreInfo: {},
            discountInfo: {},
            yearningInfo:{}

        },
        reducers: {
            changeGoodPriceInfoAction(state, {payload}) {
                state.goodPriceInfo = payload
            },
            changeHighScoreInfoAction(state, {payload}) {
                state.highScoreInfo = payload
            },
            changeDiscountInfoAction(state, {payload}) {
                state.discountInfo = payload
            },
            changePlusInfoAction(state, {payload}) {
                state.plusInfo = payload
            },
            changeYearningInfoAction(state, {payload}) {
                state.yearningInfo = payload
            },
        },
        extraReducers: {

        }


    }
)


export const {
    changeGoodPriceInfoAction,
    changeHighScoreInfoAction,
    changeDiscountInfoAction,
    changePlusInfoAction,
    changeYearningInfoAction,

} = homeSlice.actions

export default homeSlice.reducer
