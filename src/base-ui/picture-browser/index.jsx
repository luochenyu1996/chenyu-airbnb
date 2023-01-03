import React, {memo, useEffect, useState} from "react";
import {PictureBrowserWrapper} from "@/base-ui/picture-browser/styled";
import PropTypes from "prop-types";
import {CSSTransition, SwitchTransition} from "react-transition-group";

import IconClose from "@/assets/svg/icon-close";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import IconTriangleDown from "@/assets/svg/icon-triangle-down";
import Indicator from "@/base-ui/indicator";
import classNames from "classnames";

const PictureBrowser = memo((props) => {

    const {pictureUrls, closeClick} = props

    const [currentIndex, setCurrentIndex] = useState(0)
    const  [showList, setShowList]=useState(true)

    // 当图片浏览器展示时候，窗口的滚动功能应该消失
    useEffect(() => {
        document.body.style.overflow = "hidden"

        //关闭了，则继续滚动。这个副作用函数的返回值代表啥
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [])


    // 关闭事件逻辑
    function closeBtnClickHandle() {
        if (closeClick) closeClick()
    }

    function controlClickHandle(isNext = true) {
        let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
        if (newIndex < 0) newIndex = pictureUrls?.length - 1
        if (newIndex > pictureUrls?.length - 1) newIndex = 0
        setCurrentIndex(newIndex)
    }

    function toggleShowListHandle(){
        setShowList(false);
    }


    return (

        <PictureBrowserWrapper>
            <div className='top'>
                <div className='close-btn' onClick={closeBtnClickHandle}>
                    <IconClose/>
                </div>
            </div>

            <div className='slider'>
                <div className='control'>
                    <div className='btn left' onClick={e => controlClickHandle(false)}>
                        <IconArrowLeft width={77} height={77}/>
                    </div>
                    <div className='btn right' onClick={e => controlClickHandle(true)}>
                        <IconArrowRight width={77} height={77}/>
                    </div>
                </div>
                <div className='picture'>
                    <SwitchTransition mode='in-out'>
                        <CSSTransition
                            classNames='pic'
                            timeout={200}
                            key={pictureUrls[currentIndex]}>
                            <img src={pictureUrls?.[currentIndex]} alt=""/>
                        </CSSTransition>
                    </SwitchTransition>


                </div>

            </div>


            <div className='preview'>
                <div className='info'>
                    <div className='desc'>
                        <div className='count'>
                            <span>{currentIndex+1}/{pictureUrls?.length}:</span>
                            <span>room Apartment 图片{currentIndex+1}</span>
                        </div>
                        <div className='toggle' onClick={toggleShowListHandle}>
                            隐藏照片列表
                            {
                                showList&&(
                                    <IconTriangleDown/>
                                )
                            }


                            <IconTriangleDown/>
                        </div>

                    </div>
                    <div className='list'>
                        <Indicator selectIndex={currentIndex}>
                            {
                                pictureUrls.map((item,index) => {
                                    return (
                                        <div className={classNames("item",{active:currentIndex===index})}
                                             key={item}>
                                            <img src={item} alt=""/>
                                        </div>
                                    )
                                })
                            }

                        </Indicator>
                    </div>


                </div>
            </div>

        </PictureBrowserWrapper>

    )


})

PictureBrowser.propTypes = {
    pictureUrls: PropTypes.array
}
export default PictureBrowser
