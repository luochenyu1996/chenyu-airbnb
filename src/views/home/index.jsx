import React, {memo} from "react";

import {HeaderWrapper} from "components/app-header/style";
import HomeBanner from "@/views/home/c-cpns/home-banner";
import {HomeWrapper} from "@/views/home/style";


const Home = memo(() => {


    return (
        <HomeWrapper>
            <HomeBanner/>
        </HomeWrapper>
    )
})
export default Home
