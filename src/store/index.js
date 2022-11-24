import  {configureStore} from "@reduxjs/toolkit";
import homeReducer from  "./modules/home"
import entireReducer from "./modules/entire";

const store =configureStore({
    reducer:{
        // 简化的方式
        home:homeReducer,
        // 未简化的方式
        entire:entireReducer
    }
})

export default store
