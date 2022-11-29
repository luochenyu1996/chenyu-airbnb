import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getHomeGoodPriceData} from "@/services";


export const fetchHomeDataAction = createAsyncThunk("fetchdata", async (payload, {dispatch}) => {
    getHomeGoodPriceData().then(res => {
        dispatch(changeGoodPriceInfoAction(res))
    })

})

const homeSlice = createSlice({
        name: "home",
        initialState: {
            goodPriceInfo: {},
        },
        changeGoodPriceInfoAction(state, {payload}) {
            state.goodPriceInfo = payload
        },
        extraReducers: {
            [fetchHomeDataAction.fulfilled](state, {payload}) {
                state.goodPriceInfo = payload

            }
        }


    }
)


export const {
    changeGoodPriceInfoAction,
} = homeSlice.actions

export default homeSlice.reducer
