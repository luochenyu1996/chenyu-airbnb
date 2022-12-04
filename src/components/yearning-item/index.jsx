import React, {memo} from "react";
import {YearningWrapper} from "components/yearning-item/styled";


const YearningItem = memo((props) => {
    const {itemData} = props

    return (
        <YearningWrapper>
            <div className='inner'>
                <div className='item-info'>
                    <img className='cover' src={itemData.picture_url} alt=""/>
                    <div className='bg-cover'></div>
                    <div className='info'>
                        <div className='city'>{itemData.city}</div>
                        <div className='price'>均价 {itemData.price}</div>
                    </div>
                </div>
            </div>
        </YearningWrapper>

    )
})

export default YearningItem
