import React, {memo} from "react";
import PropTypes from "prop-types";
import {RoomItemWrapper} from "components/room-item/styled";
import {Rating} from "@mui/material";


const RoomItem = memo((props) => {
    const {itemData, itemWidth = "25%"} = props


    return (
        <RoomItemWrapper verifyColor={itemData?.verify_info?.text_color || "#39576a"}
                         itemWidth={itemWidth}
        >
            <div className='inner'>
                <div className='cover'>
                    <img src={itemData.picture_url} alt=''></img>
                </div>

                <div className='desc'>
                    {
                        itemData.verify_info.messages.join("-")
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
