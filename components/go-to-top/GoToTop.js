import React from "react";
import Image from "next/image";
import styles from "./GoToTop.module.css";
import { AiOutlineArrowUp } from "react-icons/ai";

function GoToTop({ top }) {
  return (
    <>
      <a onClick={(e) => top(e)} className="hidden  cursor-pointer   lg:block">
        <div
          className={`${styles.back_to_top_div} overflow-hidden w-[50px] h-[50px] bg-[#111723] fixed bottom-[55px] right-[0] flex justify-center items-center`}
        >
          <AiOutlineArrowUp className="text-[#fff] text-[24px]" />
        </div>
      </a>
    </>
  );
}

export default GoToTop;
