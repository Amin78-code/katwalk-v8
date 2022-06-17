import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from "./UploadNewImgCard.module.css";

function UploadNewImgCard({ data }) {
  let imgPath = data?.img?.src.split("/");
  let _imgPath = imgPath[imgPath.length - 1];

  return (
    <>
      <div key={_imgPath} className="w-[166px] mb-[10px]">
        <div className="w-[100%] h-[140px] rounded-[3px] overflow-hidden">
          <span className="image_container">
            <Image src={data.img} alt="image" />
          </span>
        </div>
        <h6 className="text-[12px] leading-[1.3] pt-[9px] w-[100%] whitespace-nowrap text-ellipsis overflow-hidden">{imgPath}</h6>
        <p className="text-[11px] leading-[1.3] text-[#757575]">
          <span>00</span>KB
        </p>
      </div>
    </>
  );
}

export default UploadNewImgCard;
