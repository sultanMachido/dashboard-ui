import React from "react";
import SearchIcon from "../images/Search.png";
import ProfileImage from "../images/profile_image.png";
import Badge from "@mui/material/Badge";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import styles from "./styles/Topbar.module.css"

function Topbar() {
  return (
    <div className='flex pt-4 bg-white pb-2 shadow-md'>
      <div className='w-2/12'>
        <h2 className='text-blue-500 font-black text-2xl ml-10'>
          TransMonitor
        </h2>
      </div>
      <div className='flex w-5/12 ml-14 '>
        <img
          src={SearchIcon}
          style={{ width: "12px", height: "12px" }}
          className='mt-3 ml-20'
          alt=''
        />
        <input placeholder='Search...' className='pl-4 pt-0 w-5/12 h-8' />
      </div>
      <div className='flex justify-around w-5/12'>
        <p>Support</p>
        <p>FAQ</p>
        <Badge badgeContent={8} color='primary'>
          <NotificationsNoneIcon color='action' />
        </Badge>
      </div>
      <div className='flex  w-52' id={styles.profile}>
        <div>
          <p className='text-xs text-right'>Hello</p>
          <p>Oluwaleke Ojo</p>
        </div>
        <div>
          <img src={ProfileImage} alt='profile' className='rounded-full' />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
