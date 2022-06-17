import Image from "next/image";
import React, { useState, useRef } from "react";
import Link from "next/link";
import styles from "./BottomBar.module.css";
import profileImg from "../../../../assets/images/icons/profile-img.png";

function BottomBar({ active, openSidebar }) {
  return (
    <div className="w-[100%] h-[60px] shadow-md border-t-[1px] border-[#dee2e6] bottom-0 fixed bg-[#dee2e6] flex gap-x-[.2%] left-0 z-[22]">
      <div
        className={`${
          active == "Dashboard" ? styles.active : ""
        } bg-[#fff] w-[24.9%]  flex justify-center items-center`}
      >
        <i className="text-[1.7em] text-[#1b1b28.] las la-home la-2x"></i>
      </div>
      <div
        className={`${
          active == "Wishlists" ? styles.active : ""
        } bg-[#fff] w-[24.9%]  flex justify-center items-center`}
      >
        <i className="text-[1.7em] text-[#1b1b28.] las la-heart la-2x relative flex">
          <span className="fwr flex justify-center items-center absolute right-[-19px] top-0 bg-[#c53a19] rounded-[3px] w-[19px] h-[17px] text-[#fff] text-[9px] p-[2px]">
            0
          </span>
        </i>
      </div>
      <div
        className={`${
          active == "Dashboard" ? styles.active : ""
        } bg-[#fff] w-[24.9%]  flex justify-center items-center`}
      >
        <i className="text-[1.7em] text-[#1b1b28.] las la-shopping-cart la-2x relative flex">
          <span className="fwr flex justify-center items-center absolute right-[-19px] top-0 bg-[#c53a19] rounded-[3px] w-[19px] h-[17px] text-[#fff] text-[9px] p-[2px]">
            0
          </span>
        </i>
      </div>
      <div
        className={`bg-[#fff] w-[24.9%] flex justify-center items-center`}
        onClick={() => openSidebar()}
      >
        <div className="w-[44px] h-[44px] rounded-full overflow-hidden">
          <span className="image_container">
            <Image src={profileImg} alt="image" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
