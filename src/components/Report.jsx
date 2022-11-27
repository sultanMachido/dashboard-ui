import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import reportChart from "../images/Gradient.png";
import LinearProgress from "@mui/material/LinearProgress";

function Report() {
  return (
    <div className='flex w-full  mt-4'>
      <div className='w-7/12 bg-white ml-2'>
        <div className='flex justify-around pt-10'>
          <h2 className='text-xl font-bold'>Today: 5, Aug 2018</h2>
          <div>
            <select className='border-2 rounded p-1 w-36'>
              <option className='text-slate-200'>1 jan - 1 jun</option>
            </select>
          </div>
          <div className='flex justify-between'>
            <span className='border-2 bg-white text-gray-300 rounded mr-4'>
              <ChevronLeftIcon />
            </span>
            <span className='border-2 bg-white text-gray-300 rounded'>
              <ChevronRightIcon />
            </span>
          </div>
        </div>

        <div className='mt-10'>
          <div className='flex justify-around'>
            <p className='font-bold'>Jan</p>
            <p className='font-bold'>Feb</p>
            <p className='font-bold'>Mar</p>
            <p className='font-bold'>Apr</p>
            <p className='font-bold'>May</p>
            <p className='font-bold'>Jun</p>
          </div>
          <div>
            <img src={reportChart} alt='' className='pl-8 pt-10' />
          </div>
        </div>
      </div>
      <div className='w-5/12 '>
        <div className='bg-white w-full ml-2 h-40'>
          <p className='text-left font-bold pt-2 pb-2 pl-2'>Order</p>
          <div className='flex pl-2'>
            <div className='rounded h-1 w-8/12 bg-green-600'></div>
            <div className='rounded h-1 w-2/12 bg-yellow-600'></div>
          </div>

          <div className='text-left pl-2 pt-2'>
            <p>
              Pending Orders:<span className="text-yellow-600">20</span>
            </p>
            <p>
              Reconcilled Orders:<span className="text-green-600">80</span>
            </p>
            <p>
              Total Orders:<span className="text-blue-600">100</span>
            </p>
          </div>
        </div>
        <div className='bg-white w-full ml-2 h-40 mt-4'>
          <p className='text-left font-bold pt-2 pb-2 pl-2'>Payments</p>
          <div className='flex pl-2'>
            <div className='rounded h-1 w-8/12 bg-green-600'></div>
            <div className='rounded h-1 w-2/12 bg-yellow-600'></div>
          </div>
          <div className='text-left pl-2 pt-2'>
            <p>
              Un reconcilled Payments:<span className="text-yellow-600">20</span>
            </p>
            <p>
              Reconcilled Payments:<span className="text-green-600">80</span>
            </p>
            <p>
              Total Payments:<span className="text-blue-600">100</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
