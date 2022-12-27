import React, {memo, useRef} from "react";
import PropTypes from "prop-types";
import {RoomItemWrapper} from "components/room-item/styled";
import {Rating} from "@mui/material";
import {Carousel} from "antd";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";


const RoomItem = memo((props) => {
    const {itemData, itemWidth = "25%"} = props
    const sliderRef = useRef()


    // 点击事件处理逻辑
    function controlClickHandle(isRight = true) {
        isRight ? sliderRef.current.next() : sliderRef.current.prev()

    }


    return (
        <RoomItemWrapper verifyColor={itemData?.verify_info?.text_color || "#39576a"}
                         itemWidth={itemWidth}
        >
            <div className='inner'>
                {!itemData?.picture_urls &&
                    (
                        <div className='cover'>
                            <img src={itemData.picture_url} alt=''></img>
                        </div>
                    )
                }


                {/*  重构  引入轮播效果*/}
                <div className='slider'>
                    <div className='control'>
                        <div className='btn left' onClick={e => controlClickHandle(false)}>
                            <IconArrowLeft width="30" height="30"/>
                        </div>
                        <div className='btn right' onClick={e => controlClickHandle(true)}>
                            <IconArrowRight width="30" height="30"/>
                        </div>
                    </div>

                    <Carousel dots={false} ref={sliderRef}>
                        {
                            itemData?.picture_urls?.map(item => {
                                return (
                                    <div className='cover' key={item}>
                                        <img src={item} alt=''></img>
                                    </div>
                                )
                            })
                        }

                    </Carousel>
                </div>


                <div className='desc'>
                    {
                        itemData.verify_info.messages.join("·")
                    }
                </div>

                <div className='name'>
                    {itemData.name}
                </div>
                <div className='price'>
                    ¥{itemData.price}/晚
                </div>
            </div>
            <div className='button'>
                <Rating value={itemData.star_rating ?? 3.5}
                        precision={0.5}
                        readOnly/>
                <span className='count'>{itemData.reviews_count}</span>

                {
                    itemData?.bottom_info &&
                    <span className='extra'>·{itemData?.bottom_info?.content}</span>
                }

            </div>

        </RoomItemWrapper>

    )

})


RoomItem.prototype = {
    itemData: PropTypes.object
}

export default RoomItem
