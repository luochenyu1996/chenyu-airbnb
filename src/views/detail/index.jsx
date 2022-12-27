import React, {memo, useEffect, useState} from "react";
import Indicator from "@/base-ui/indicator";
import {DetailWrapper} from "@/views/detail/styled";
import {useSelector} from "react-redux";
import DetailPictures from "@/views/detail/c-cpns/detail-pictures";
import {Descriptions} from "antd";


const Detail = memo(() => {


    return (
        <DetailWrapper>

            <DetailPictures/>
            <Descriptions/>



        </DetailWrapper>
    )
})
export default Detail
