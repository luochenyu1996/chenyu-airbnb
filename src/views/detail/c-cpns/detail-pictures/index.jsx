import React, {memo, useEffect, useState} from "react";
import {DetailPicturesWrapper} from "@/views/detail/c-cpns/detail-pictures/styled";
import {shallowEqual, useSelector} from "react-redux";
import roomItem from "components/room-item";
import classNames from "classnames";
import PictureBrowser from "@/base-ui/picture-browser";


const DetailPictures = memo(() => {
    const [showBrowser, setShowBrowser] = useState(false)


    const {detailInfo} = useSelector((state) => ({
        detailInfo: state.detail.detailInfo
    }),shallowEqual)


    return (
        <DetailPicturesWrapper>
            <div className='pictures'>

                <div className='left'>
                    <div className='item'>
                        <div className='cover'></div>
                        <img src={detailInfo?.picture_urls?.[0]} alt=""/>
                    </div>
                </div>


                <div className='right'>
                    {
                        detailInfo?.picture_urls?.slice(1, 5).map(item => {
                            return (
                                <div className='item' key={item}>
                                    <div className='cover'></div>
                                    <img src={item} alt=""/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className='show-btn' onClick={e => {
                setShowBrowser(true)
            }}> 显示照片</div>


            {
                showBrowser && <PictureBrowser
                    pictureUrls={detailInfo?.picture_urls}
                    closeClick={()=>{setShowBrowser(false)}}/>
            }


        </DetailPicturesWrapper>

    )
})
export default DetailPictures
