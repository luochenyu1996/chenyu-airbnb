import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import  {HashRouter} from "react-router-dom";



import App from './App' ;
import  "./assets/css/index.less"

// 默认样式重置
import  "normalize.css"
import  "./assets/css/reset.less"


// 通过 craco  修改一下webpeack 文件
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* Suspense   todo  这个标签看不懂*/}
      <Suspense fallback="loading" >
          <HashRouter>
              <App />
          </HashRouter>

      </Suspense>


  </React.StrictMode>
);
