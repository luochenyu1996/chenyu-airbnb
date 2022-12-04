import React, {memo} from "react";
import {SectionFooterWrapper} from "components/section-footer/style";
import IconMoreArrow from "@/assets/svg/icon_more_arrow";
import {useNavigate} from "react-router-dom";


const SectionFooter = memo((props) => {
    const {name} = props
    const navigate = useNavigate();

    let showMessage = "显示全部"
    if (name) {
        showMessage = `显示更多${name}房源`
    }

    //事件处理逻辑
    function moreClickHandle() {
        navigate("/entire")
    }

    return (
        <SectionFooterWrapper color={name ? "#00848A": "#000"}>

            <div className='info' onClick={moreClickHandle}>
                <span className='text'>{showMessage}</span>
            </div>
            <IconMoreArrow/>
        </SectionFooterWrapper>
    )
})

export default SectionFooter
