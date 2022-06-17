import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from "./Overlay.module.css";

function Overlay({ children }) {
  return (
    <>
      <div className="fixed z-[10] w-[100%] h-[100vh] bg-[#00000033] flex justify-center item:center left-0 top-0">
        {children}
      </div>
    </>
  );
}

export default Overlay;
