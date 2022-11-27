import React from "react";
import MenuList from "./MenuList";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SpeedIcon from "@mui/icons-material/Speed";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const main = [
  {
    icon: <SpeedIcon />,
    title: "Overview",
  },
];

const payment = [
  {
    icon: <AccountBalanceWalletIcon />,
    title: "All payments",
  },
  {
    icon: <AccountBalanceWalletIcon />,
    title: "Reconcilled payments",
  },
  {
    icon: <AccountBalanceWalletIcon />,
    title: "Un reconcilled payments",
  },
  {
    icon: <AccountBalanceWalletIcon />,
    title: "Manual settlement",
  },
];

const orders = [
  {
    icon: <ReceiptLongIcon />,
    title: "All orders",
  },
  {
    icon: <ReceiptLongIcon />,
    title: "Pending orders",
  },
  {
    icon: <ReceiptLongIcon />,
    title: "Reconcilled orders",
  },
];

const others = [
  {
    icon: <PersonOutlineIcon />,
    title: "Merchant profile",
  },
];

function Sidebar() {
  return (
    <div className='bg-white w-80 h-screen mt-1 '>
      <button className='bg-green-600 rounded-2xl w-40 h-8 mt-5'>
        <p className='text-xs text-white'>GENERATE INVOICE</p>
      </button>
      <div className='mt-10'>
        <div className=' mb-10'>
          <div>
            <p className='text-left pl-14'>Main</p>
          </div>
          <MenuList list={main} />
        </div>

        <div className='mb-10'>
          <p className='text-left pl-14'>Payments</p>
          <MenuList list={payment} />
        </div>

        <div className='mb-10'>
          <p className='text-left pl-14'>Orders</p>
          <MenuList list={orders} />
        </div>
      </div>
      <div>
        <MenuList list={others} />
      </div>
    </div>
  );
}

export default Sidebar;
