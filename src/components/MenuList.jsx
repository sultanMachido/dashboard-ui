import React from "react";

function MenuList({ list }) {
  return (
    <div>
      {list.map((listItem) => (
        <div className='flex ml-14 mt-4'>
          <span>{listItem.icon}</span>
          <p className="pl-3 text-sm pt-1">{listItem.title}</p>
        </div>
      ))}
    </div>
  );
}

export default MenuList;
