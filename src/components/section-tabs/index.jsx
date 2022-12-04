import React, {memo, useState} from "react";
import {SectionTabsWrapper} from "components/section-tabs/style";
import ScrollView from "@/base-ui/scroll-view";
import classNames from "classnames";

/**
 * 首页的选择bar
 * */
const SectionTabs = memo((props) => {

        //todo  tableClick的作用  --   tab 被点击了进行的处理 是一个回调函数
        const {tabNames = [], tabClick} = props
        const [currentIndex, setCurrentIndex] = useState(0)

        //点击处理函数
        function itemClickHandle(index, item) {
            setCurrentIndex(index)
            tabClick(index,item)
        }

        return (
            <SectionTabsWrapper>
                <ScrollView>
                    {
                        tabNames.map((item, index) => {
                            // todo classname 的用法
                            return (
                                <div
                                    className={classNames('item', {active: index === currentIndex})}
                                    key={index}
                                    onClick={(e) => {
                                        itemClickHandle(index, item)
                                    }}
                                >
                                    {item}
                                </div>
                            )
                        })
                    }
                </ScrollView>
            </SectionTabsWrapper>
        )


    }
)


export default SectionTabs
