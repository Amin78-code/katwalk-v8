import React, { useState } from "react";
import Image from "next/image";
import styles from "./ChooseImage.module.css";
import img1 from "../../../../assets/images/uploaded/IMG 3136.jpg";
import CurrentImgCard from "../current-img-card/CurrentImgCard";

function ChooseImage({ data, editpage, shopsPage, currentImages, setCurrentImages }) {


  const showModal = () => {
    document.getElementById("upload_overlay").classList.add("dblock");
  };
  const deletethisImg = (data, img) => {
    let _currentImages = currentImages;
    for (let i = 0; i < currentImages.length; i++) {

      if (currentImages[i].img.src == data.img.src) {
        _currentImages.splice(i, 1);
      }
    }
    setCurrentImages([]);
    setCurrentImages(_currentImages);
  };

  return (
    <>
      <div className="fwr flex mb-[1rem] flex-col      lg:flex-row">
        <p
          className={` ${shopsPage && shopsPage == true ? "w-[100%]     lg:w-[23.4%]" : "w-[100%]     lg:w-[24.4%]"
            } text-[#1b1b28] text-[13px] px-0     lg:px-[5px] capitalize pt-[7px]`}
        >
          {shopsPage && shopsPage == true ? (
            ""
          ) : (
            <span className="text-[#ff0032]">*</span>
          )}
          {data.name} <small>{data.imageResolution}</small>
        </p>
        <div
          className={` ${shopsPage && shopsPage == true ? "w-[100%]" : "w-[100%]     lg:w-[68.75%]"
            } px-0     lg:px-[15px]`}
        >
          <div className="flex admin-input relative w-[100%] h-[44px] leading-[30px] bg-[#fff] border-[1px]  rounded-[.25rem]  border-[#ced4da]">
            <p
              className="bg-[#8f97ab26] rounded-[0.25rem] capitalize text-[1rem] text-[#495057] py-[0.375rem] px-[0.75rem]"
              onClick={() => showModal()}
            >
              browse
            </p>
            <div className="text-[#b7b7b7] text-[1rem] py-[0.375rem] px-[0.75rem]">
              {currentImages && currentImages.length > 0 ? currentImages.length + " files selected" : "Choose file"}
            </div>
          </div>
          {data && data.note ? (
            <p className="fwr text-[#6C757D] text-[13px] leading-[1.5] tracking-[0.5px]">
              <small>{data.note}</small>
            </p>
          ) : (
            ""
          )}

          <>
            {editpage ? (
              <>
                {editpage == true ? (
                  <>
                    <div className="pt-[8px]">
                      {currentImages.map((value, index) => {
                        return (
                          <CurrentImgCard
                            key={value.sizeInKB + 1}
                            data={value}
                            index={index}
                            deletethisImg={deletethisImg}
                          // selectedImgs={selectedImgs}
                          // selecImg={selecImg}
                          />
                        );
                      })}
                    </div>
                  </>
                ) : (
                  ""
                )}
              </>
            ) : (
              ""
            )}
          </>
        </div>
      </div>
      {/* <ChooseImageModal /> */}
    </>
  );
}

export default ChooseImage;
