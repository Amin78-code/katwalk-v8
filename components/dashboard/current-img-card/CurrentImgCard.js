import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from "./CurrentImgCard.module.css";

function CurrentImgCard({ data, index, deletethisImg }) {
  let isThisCardSelected = false;

  //   let imgPath = data?.img?.src.split('/')
  //   let _imgPath = imgPath[imgPath.length - 1]

  //  for (let k = 0; k < selectedImgs.length; k++) {
  //    if(selectedImgs[k] == _imgPath) {
  //      console.log("yess")
  //    }
  //  }
  return (
    <div
      className={`relative w-[100px] h-[145px] rounded-[0.25rem] bg-[#fff]     ----- th}  ----- }    border-[#00000020]  border-[1px] mb-[10px]`}
      // onClick={() => selecImg(data, index)}
    >
         <div className="w-[17px] h-[17px] bg-[#000] rounded-full text-[10px] text-[#fff] absolute right-[-6px] top-[-5px] z-[2] flex justify-center item-center" onClick={()=> deletethisImg(data,index)}>x</div>
      <div className={`${styles.card_img_div}`}>
        <span className="image_container">
          <Image src={data.img} alt="image" />
        </span>
      </div>
      <div className="px-[8px] py-[8px] pb-0">
        <p className="fwb text-[#1b1b28] text-[0.8rem] w-[100%] whitespace-nowrap text-ellipsis overflow-hidden">
          _imgPath
        </p>
        <p className="text-[9px] text-[#8392a5] mt-[9px]">80 KB</p>
      </div>
    </div>
  );
}

export default CurrentImgCard;
