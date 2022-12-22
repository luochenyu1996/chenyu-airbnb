import React, {memo, useEffect, useRef} from "react";
import {IndicatorWrapper} from "@/base-ui/indicator/styled";
import PropTypes from "prop-types";
import styledComponentsBrowserEsm from "styled-components/dist/styled-components.browser.esm";

const Indicator = memo((props) => {
    const {selectIndex} = props
    const contentRef = useRef()

    useEffect(() => {

        // console.log(props)
        const selectItemEl = contentRef.current.children[selectIndex]
        console.log(selectIndex, selectItemEl)
        //拿到offsetLeft 需要有定位元素
        const itemOffsetLeft = selectItemEl.offsetLeft
        const itemWidth = selectItemEl.clientWidth
        console.log(itemOffsetLeft, itemWidth)
        // 2. content的高度
        const contentWidth = contentRef.current.clientWidth
        const contentScroll = contentRef.current.scrollWidth

        //3. 计算滚动距离
        let distance = itemOffsetLeft + itemWidth * 0.5 - contentWidth * 0.5
        const totalDistance = contentScroll - contentWidth
        //4.点击后计算出距离进行滚动
        // 4.1 左边特殊情况处理
        if (distance < 0) {
            distance = 0
        }
        // 4.2 右边左边特殊情况处理
        if (distance > totalDistance) {
            distance = totalDistance
        }

        contentRef.current.style.transform = `translate(${-distance}px)`
        // console.log(itemOffsetLeft,itemWidth,contentWidth)


    }, [selectIndex])


    return (
        <IndicatorWrapper>
            <div className='i-content' ref={contentRef}>
                {
                    props.children
                }
            </div>
        </IndicatorWrapper>

    )


})


Indicator.propTypes = {
    selectIndex: PropTypes.number
}
export default Indicator
