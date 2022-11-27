import React, {memo} from "react";

import {HeaderCenterWrapper} from "components/app-header/c-cpns/header-center/style";
import IconSearchbar from "@/assets/svg/icon_search_bar";

const HeaderCenter = memo(() => {

    return (
        <HeaderCenterWrapper>

            <div className='search-bar'>
                <div className='text'>
                    搜索房源和体验
                </div>
                <span className='icon'>
                <IconSearchbar/>
            </span>

            </div>

        </HeaderCenterWrapper>
    )
})

export default HeaderCenter
