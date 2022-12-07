import React,{memo} from "react";
import {EntireWrapper} from "@/views/entire/style";
import {EntireFilterWrapper} from "@/views/entire/c-cpns/entire-filter/style";
import EntireFilter from "@/views/entire/c-cpns/entire-filter";


const  Entire =memo(()=>{
    return(
         <EntireWrapper>
             <EntireFilter/>
             <div  className='filter'>  </div>
             <div  className='rooms'>  </div>
             <div  className='pagination'>  </div>




         </EntireWrapper>


    )
})

export default  Entire
