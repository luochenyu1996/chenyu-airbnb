import  {configureStore} from "@reduxjs/toolkit";
import homeReducer from  "./modules/home"
import detailReducer from "./modules/detail"
import entireReducer from "./modules/entire";

const store =configureStore({
    reducer:{
        // 简化的方式
        home:homeReducer,
        // 未简化的方式
        entire:entireReducer,

        detail:detailReducer
    }
})

export default store
