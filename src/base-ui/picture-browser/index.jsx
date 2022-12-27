import React, {memo, useEffect} from "react";
import {PictureBrowserWrapper} from "@/base-ui/picture-browser/styled";
import PropTypes from "prop-types";
import IconClose from "@/assets/svg/icon-close";

const PictureBrowser = memo((props) => {

    const {pictureUrls,closeClick}=props

    // 当图片浏览器展示时候，窗口的滚动功能应该消失
    useEffect(() => {
        document.body.style.overflow = "hidden"

        //关闭了，则继续滚动。这个副作用函数的返回值代表啥
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [])


    // 关闭事件逻辑
    function closeBtnClickHandle(){
        if(closeClick) closeClick()
    }


    return (

        <PictureBrowserWrapper>
            <div  className='top'>
                <div className='close-btn' onClick={closeBtnClickHandle}>
                    <IconClose/>
                </div>
            </div>

            <div className='list'></div>
            <div className='indicator'></div>


        </PictureBrowserWrapper>

    )


})

PictureBrowser.propTypes={
    pictureUrls:PropTypes.array
}
export default PictureBrowser
