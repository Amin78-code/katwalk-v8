import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from "./UploadNewSingleImgCard.module.css";

function UploadNewSingleImgCard({ data }) { 
console.log("data",data)
  return (
    <>
      <div className="w-[166px] mb-[10px]">
        <div className="w-[100%] h-[140px] rounded-[3px] overflow-hidden">
          <span className="image_container">
            <Image src={data} alt="image" />
          </span>
        </div>
        <h6 className="text-[12px] leading-[1.3] pt-[9px] w-[100%] whitespace-nowrap text-ellipsis overflow-hidden"></h6>
        <p className="text-[11px] leading-[1.3] text-[#757575]">
          <span>00</span>KB
        </p>
      </div>
    </>
  );
}

export default UploadNewSingleImgCard;
