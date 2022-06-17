import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from "./ImgCard.module.css";

function ImgCard({ data ,selecImg , index, selectedImgs}) {

  let isThisCardSelected = false;


  let imgPath = data?.img?.src.split('/')
  let _imgPath = imgPath[imgPath.length - 1]

 for (let k = 0; k < selectedImgs.length; k++) {
   if(selectedImgs[k] == _imgPath) {
     console.log("yess");
   }
   
 }
  // const [isDisableBust, setIsDisableBust] = useState(false);

  // const bustSelect = useRef("");
  // const [selectedBust, setSelectedBust] = useState([]);
  // const [bustTitle, setBustTitle] = useState("nothing selected");

  // const openAnyAlterationSelect = (productionVaraitionName) => {

    // };

    // console.log("ss  selectedImgs",selectedImgs[index]);
    
    // console.log("ac  data",_imgPath);

  return (
    <div className={`w-[16.66666%] h-[160px] px-[8px] py-[8px] rounded-[0.25rem] bg-[#fff]     -----${selectedImgs}  /   ${_imgPath} ----- ${selectedImgs[index] == _imgPath ? " bg-[#007bff0d] border-[#007bff] ": "no"}    border-[#00000020]  border-[1px] mb-[10px]`}
    onClick={()=>selecImg(data, index)}
    >
      <div className={`${styles.card_img_div}`}>
        <span className="image_container">
          <Image src={data.img} alt="image" />
        </span>
      </div>
      <p className="fwb text-[#1b1b28] text-[0.8rem] w-[100%] whitespace-nowrap text-ellipsis overflow-hidden">{_imgPath}</p>
      <p className="text-[9px] text-[#8392a5] mt-[9px]">80 KB</p>
    </div>
  );
}

export default ImgCard;
