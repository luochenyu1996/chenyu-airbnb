import React, {memo} from "react";
import {HeaderLeftWrapper} from "components/app-header/c-cpns/header-left/style";
import IconLogo from "@/assets/svg/icon_logo";

const HeaderLeft = memo(() => {
    return (
        <HeaderLeftWrapper>
            <div className="logo">
                <IconLogo/>
            </div>


        </HeaderLeftWrapper>
    )
})
export default HeaderLeft
