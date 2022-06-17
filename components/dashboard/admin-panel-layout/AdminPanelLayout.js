import React, { useState, useRef, useEffect } from "react";
import styles from "./AdminPanelLayout.module.css";
import BottomBar from "./bottom-bar/BottomBar";
import SideBar from "./sidebar/sideBar";

const AdminPanelLayout = ({ children, footer, active }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  const openSidebar = () => {
    console.log("openSidebar called")
    setShowSideBar(!showSideBar);
  }
  return (
    <>
      <div
        className={`${styles.admin_main_div} w-[100%] flex justify-start leading-[1.5] tracking-[0.5px] mt-[80px] px-[10px] pb-[3rem] pt-[28px] overflow-visible      lg:overflow-y-auto lg:overflow-x-visible     md:px-[47px]`}
      >
        <div
          className={`${showSideBar == true ? styles.show_sidebar : ""} ${styles.sidebar_main_div} bg-[transparent] taPoint3 w-[100%] z-[-5] md:w-[unset] fixed md:relative top-0 md:top-[unset]    md:z-[0] ml-[-10px]     md:ml-0`}
        >
          <div className={`${showSideBar == true ? styles.slide_sidebar : ""} translate-x-[-320px] md:translate-x-[unset] taPoint3`}>
            <SideBar active={active} openSidebar={openSidebar} />
          </div>
        </div>
        <div
          className={`${styles.right_main_div} h-[100%] overflow-y-visible overflow-x-visible pl-[0]     md:pl-[30px]`}
        >
          {children}
        </div>
        <div className="block     md:hidden">
          <BottomBar active={active} openSidebar={openSidebar} />
        </div>
      </div>
    </>
  );
};

export default AdminPanelLayout;
