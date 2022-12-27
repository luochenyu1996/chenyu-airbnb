import React, {memo, useState} from "react";
import {EntireFilterWrapper} from "@/views/entire/c-cpns/entire-filter/style";
import filterData from "@/assets/data/filter_data.json"
import classNames from "classnames";

const EntireFilter = memo(() => {

    const [selectItems,setSelectItems]=useState([])

    function itemClickHandle(item){

        const newItems=[...selectItems]
        if(newItems.includes(item)){
            const  arrIndex=newItems.findIndex(delItem=> delItem===item)
            newItems.splice(arrIndex,1)
        }else {
            newItems.push(item)
        }

        setSelectItems(newItems)
    }

    return (
        <EntireFilterWrapper>
            <div  className='filter'>
                {
                    filterData.map(
                        (item,index) => {
                            return (
                                <div
                                    className={classNames("item", {active:selectItems.includes(item)})}
                                    key={item}
                                    onClick={e=>{itemClickHandle(item)}}
                                >{item}</div>
                            )
                        }
                    )
                }
            </div>
        </EntireFilterWrapper>
    )
})
export default EntireFilter
