import React from "react";
import {Navigate} from "react-router-dom";
// 懒加载配置
const Home = React.lazy(() => import("@/views/home"))
const Entire = React.lazy(() => import("@/views/entire"))
const Detail = React.lazy(() => import("@/views/detail"))

const routes = [
    // 默认页面
    {
        path: "/",
        element: <Navigate to="/home"/>
    },

    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/entire",
        element: <Entire/>
    },
    {
        path: "/detail",
        element: <Detail/>
    }

]

export default routes
