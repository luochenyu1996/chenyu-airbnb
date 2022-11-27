import React, {memo} from "react";
import {HeaderRightWrapper} from "components/app-header/c-cpns/header-right/style";
import Icon_global from "@/assets/svg/icon_global";
import Icon_Avatar from "@/assets/svg/icon_ avatar";
import IconGlobal from "@/assets/svg/icon_global";
import IconAvatar from "@/assets/svg/icon_ avatar";
import IconMenu from "@/assets/svg/icon_menu";


const HeaderRight = memo(() => {
    return (
        <HeaderRightWrapper>
            <div className='btns'>
                <span className='btn'>登录</span>
                <span className='btn'>注册</span>
                <span className='btn'>
                       <IconGlobal/>
                </span>

            </div>

            <div className="profile">
                <IconMenu/>
                <IconAvatar/>
            </div>

        </HeaderRightWrapper>

    )
})

export default HeaderRight
