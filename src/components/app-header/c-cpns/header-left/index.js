import React, {memo} from "react";
import {HeaderLeftWrapper} from "components/app-header/c-cpns/header-left/style";
import IconLogo from "@/assets/svg/icon_logo";
import {useNavigate} from "react-router-dom";

const HeaderLeft = memo(() => {
    const navigate = useNavigate()

    function logoClickHandel() {

        navigate("/home")
    }

    return (
        <HeaderLeftWrapper>
            <div className="logo" onClick={logoClickHandel}>
                <IconLogo/>
            </div>


        </HeaderLeftWrapper>
    )
})
export default HeaderLeft
