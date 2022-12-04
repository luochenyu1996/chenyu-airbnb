import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData} from "@/services";


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
    })

const homeSlice = createSlice({
        name: "home",
        initialState: {
            goodPriceInfo: {},
            highScoreInfo: {},
            discountInfo: {}
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
            }
        },
        extraReducers: {
            // todo 代码进行重构到上面去了
            // [fetchHomeDataAction.fulfilled](state, {payload}) {
            //     state.goodPriceInfo = payload
            //
            // }
        }


    }
)


export const {
    changeGoodPriceInfoAction,
    changeHighScoreInfoAction,
    changeDiscountInfoAction,
} = homeSlice.actions

export default homeSlice.reducer
