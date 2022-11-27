import React, {memo, useEffect, useState} from "react";
import {HeaderRightWrapper} from "components/app-header/c-cpns/header-right/style";
import Icon_global from "@/assets/svg/icon_global";
import Icon_Avatar from "@/assets/svg/icon_ avatar";
import IconGlobal from "@/assets/svg/icon_global";
import IconAvatar from "@/assets/svg/icon_ avatar";
import IconMenu from "@/assets/svg/icon_menu";


const HeaderRight = memo(() => {

    const [showPanel, setShowPanel] = useState(false)

    /*副作用代码*/


     useEffect(()=>{
          function windowHandleClick(){
              setShowPanel(false)
          }

         // 添加监听  todo 需要了解  参数 true 的作用，和事件冒泡相关
         window.addEventListener("click",windowHandleClick,true)

         //取消肩监听
         return()=>{
              window.removeEventListener("click",windowHandleClick,true)
         }
     },[])




    /*事件处理函数*/

     function profileClickHandle(){
        setShowPanel(true)
     }

    // 监听窗口被点击



    return (
        <HeaderRightWrapper>
            <div className='btns'>
                <span className='btn'>登录</span>
                <span className='btn'>注册</span>
                <span className='btn'>
                       <IconGlobal/>
                </span>

            </div>

            <div className="profile" onClick={profileClickHandle}>
                <IconMenu/>
                <IconAvatar/>
                {
                    showPanel && (
                        <div className='panel'>
                            <div className='top'>
                                <div className='item'>注册</div>
                                <div className='item'>登录</div>
                            </div>
                            <div className='bottom'>
                                <div className='item'>出租房源</div>
                                <div className='item'>开展体验</div>
                                <div className='item'>帮助</div>
                            </div>
                        </div>
                    )
                }


            </div>

        </HeaderRightWrapper>

    )
})

export default HeaderRight
