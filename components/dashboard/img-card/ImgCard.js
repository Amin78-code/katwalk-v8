import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from "./ImgCard.module.css";

function ImgCard({ data, selecImg, index, selectedImgs }) {
  // console.log("data >>>>>>", data);

  //   let isThisCardSelected = false;

  let imgPath = null;
  let _imgPath = null;
  if (data.img.src == undefined) {
    console.log("yes");
  } else {
    // console.log("else");
    imgPath = data?.img?.src.split("/");
    _imgPath = imgPath[imgPath.length - 1];
    // console.log("_imgPath",_imgPath)
    for (let k = 0; k < selectedImgs.length; k++) {
      if (selectedImgs[k] == _imgPath) {
        console.log("yess");
      }
    }
  }

  // console.log("_imgPath", _imgPath);

  // const [isDisableBust, setIsDisableBust] = useState(false);

  // const bustSelect = useRef("");
  // const [selectedBust, setSelectedBust] = useState([]);
  // const [bustTitle, setBustTitle] = useState("nothing selected");

  // const openAnyAlterationSelect = (productionVaraitionName) => {

  // };

  // console.log("ss  selectedImgs",selectedImgs[index]);

  // console.log("ac  data",_imgPath);
  // console.log("name",data.fileName)
  // console.log("fileType",data.fileType)

  return (
    <>
      {_imgPath == null ? (
        <>
          {data.fileType && data.fileType == "video/mp4" ? (
            <div
              className={`w-[49%] sm:w-[16.66666%] h-[160px] px-[8px] py-[8px] rounded-[0.25rem] bg-[#fff] shadow-sm      --- ${data.isSelected} ----  ${
                data.isSelected == true
                  ? " bg-[#007bff0d] border-[#007bff] "
                  : "no"
              }   border-[#00000020]  border-[1px] mb-[10px]`}
              onClick={() => selecImg(data, index)}
            >
              <div className="w-[100%] h-[105px] rounded-[3px] overflow-hidden bg-[#19af67] flex justify-center items-center">
                <i className="las la-video text-[30px] px-[15px] py-[20px] rounded-[3px] bg-[#fff]"></i>
              </div>

              <p className="fwb text-[#1b1b28] text-[0.8rem] w-[100%] whitespace-nowrap text-ellipsis overflow-hidden">
                {data.name}
              </p>
              <p className="text-[9px] text-[#8392a5] mt-[9px]">
                <span>{data.sizeInKB}</span>
              </p>
            </div>
          ) : (
            <div
              className={`w-[49%] sm:w-[16.66666%] h-[160px] px-[8px] py-[8px] rounded-[0.25rem] bg-[#fff] shadow-sm      --- ${data.isSelected} ----  ${
                data.isSelected == true
                  ? " bg-[#007bff0d] border-[#007bff] "
                  : "no"
              }   border-[#00000020]  border-[1px] mb-[10px]`}
              onClick={() => selecImg(data, index)}
            >
              <div className={`${styles.card_img_div}`}>
                <span className="image_container">
                  <Image src={data.img} alt={"image"} width="30" height="30" />
                </span>
              </div>
              <p className="fwb text-[#1b1b28] text-[0.8rem] w-[100%] whitespace-nowrap text-ellipsis overflow-hidden">
                {data.name}
              </p>
              <p className="text-[9px] text-[#8392a5] mt-[9px]">
                {data.sizeInKB}
              </p>
            </div>
          )}
        </>
      ) : (
        <div
          className={`w-[49%] sm:w-[16.66666%] h-[160px] px-[8px] py-[8px] rounded-[0.25rem] bg-[#fff] shadow-sm   --- ${data.isSelected} ----  ${
            data.isSelected == true
              ? " bg-[#007bff0d] border-[#007bff] "
              : "no"
          }    border-[#00000020]  border-[1px] mb-[10px]`}
          onClick={() => selecImg(data, index)}
        >
          <div className={`${styles.card_img_div}`}>
            <span className="image_container">
              <Image src={data.img} alt="image" />
            </span>
          </div>
          <p className="fwb text-[#1b1b28] text-[0.8rem] w-[100%] whitespace-nowrap text-ellipsis overflow-hidden">
            {data.name}
          </p>
          <p className="text-[9px] text-[#8392a5] mt-[9px]">80 KB</p>
        </div>
      )}
    </>
  );
}

export default ImgCard;
