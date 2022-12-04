import React, {memo, useEffect, useRef, useState} from "react";
import {ScrollViewWrapper} from "@/base-ui/scroll-view/style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";


const ScrollView = memo((props) => {
    // 定义内部状态
    const [showLeft, setShowLeft] = useState(false)
    const [showRight, setShowRight] = useState(false)
    const [posIndex, setPosIndex] = useState(0)

    // 这两个 ref 是不一样的
    const totalDistanceRef = useRef()
    // 组件渲染完毕后，判断是否显示右侧按钮 useEffect() 在组件渲染完成后 才会调用
    const scrollContentRef = useRef()  //这个函数用来拿组件
    useEffect(() => {
        //scrollWidth clientWidth 是元素固有的只读属性
        // 一共可以滚动的宽度,包含隐藏的宽度
        const scrollWidth = scrollContentRef.current.scrollWidth
        // 当前显示内容占据的宽度
        const clientWidth = scrollContentRef.current.clientWidth
        // 可滚动的跨度
        const totalDistance = scrollWidth - clientWidth
        totalDistanceRef.current = totalDistance
        setShowRight(totalDistance > 0)
    }, [props.children])

    /** 事件处理的逻辑 */
    function controlClickHandle(isRight) {
        // 左按钮 -1 ，右按钮 +1
        const newIndex = isRight ? posIndex + 1 : posIndex - 1
        //取出下一 tap
        const newEl = scrollContentRef.current.children[newIndex]
        const newOffsetLeft = newEl.offsetLeft
        //使用transform 做滚动样式
        scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
        setPosIndex(newIndex)
        // 是否继续显示右侧的按钮
        setShowRight(totalDistanceRef.current > newOffsetLeft)
        setShowLeft(newOffsetLeft > 0)
    }


    return (
        <ScrollViewWrapper>
            {
                showLeft &&
                <div className='control left' onClick={e => controlClickHandle(false)}>
                    <IconArrowLeft/>
                </div>
            }

            {
                showRight &&
                <div className='control right' onClick={e => controlClickHandle(true)}>
                    <IconArrowRight/>
                </div>
            }


            <div className='scroll'>
                <div className='scroll-content' ref={scrollContentRef}>
                    {/* todo <ScrollView>children 接收这里的内容</ScrollView>  */}
                    {props.children}
                </div>

            </div>


        </ScrollViewWrapper>

    )

})
export default ScrollView
