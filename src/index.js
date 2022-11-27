import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from "react-router-dom";


import {Provider} from "react-redux";
import App from './App' ;
import "./assets/css/index.less";
import "normalize.css"
import "./assets/css/reset.less"
import Store from "./store";
import {ThemeProvider} from "styled-components";
import theme from "@/assets/theme";



// 通过 craco  修改一下webpeack 文件
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback="loading">
        <Provider store={Store}>
            <ThemeProvider theme={theme}>
            <HashRouter>
                <App/>
            </HashRouter>
            </ThemeProvider>
        </Provider>
    </Suspense>
);
