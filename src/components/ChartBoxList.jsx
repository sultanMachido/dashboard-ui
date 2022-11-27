import React from "react";
import ChartBox from "./ChartBox";

function ChartBoxList({data}){
    return <div className="flex w-full justify-around mt-5">
      {data.map(info=><ChartBox transInfo={info}/>)}
    </div>
}

export default ChartBoxList