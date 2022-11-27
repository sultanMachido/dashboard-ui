import React from "react";
import line from "../images/line.png"

function ChartBox({ transInfo }) {
  return (
    <div className="flex w-3/12 bg-white justify-around mx-2 h-16">
      <div>
        <p className="text-gray-500 text-sm pt-2">{transInfo.title}</p>
        <p className="text-left">{transInfo.count}</p>
      </div>
      <div className="relative">
        <img className="pt-2 absolute" src={line} alt="chart"/>
        <img className="pt-2" src={transInfo.chart} alt="chart"/>
      </div>
    </div>
  );
}

export default ChartBox;
