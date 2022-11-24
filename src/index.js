import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import  {HashRouter} from "react-router-dom";


import  {Provider} from "react-redux";
import App from './App' ;
import  "./assets/css/index.less";
import  "normalize.css"
import  "./assets/css/reset.less"
import Store from "./store";


// 通过 craco  修改一下webpeack 文件
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* Suspense   todo  这个标签看不懂*/}
      <Suspense fallback="loading" >

          <Provider store={Store}>
              <HashRouter>
                  <App />
              </HashRouter>
          </Provider>


      </Suspense>


  </React.StrictMode>
);
