import React from "react";
import Image from "next/image";
import styles from "./TitleAndTableCard.module.css";

function TitleAndTableCard({ children, width, zindex, mt, mr, mb, ml }) {
  return (
    <>
      <div
        className={`${width ? width : ""} ${zindex ? zindex : ""}
        mt-[${mt ? mt : ""}] 
        mr-[${mr ? mr : ""}] 
        mb-[${mb ? mb : ""}]
        ml-[${ml ? ml : ""}]
           border-[1px] border-[#00000020] rounded-[.25rem] bg-[#fff] drop-shadow-[0_0px_8px_rgba(82,63,105,0.03)]`}
      >
        {children}
      </div>
    </>
  );
}

export default TitleAndTableCard;
