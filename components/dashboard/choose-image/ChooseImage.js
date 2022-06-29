import React, { useState } from "react";
import Image from "next/image";
import styles from "./ChooseImage.module.css";
import img1 from "../../../assets/images/uploaded/IMG 3136.jpg";
import CurrentImgCard from "../current-img-card/CurrentImgCard";

function ChooseImage({
  data,
  shopsPage,
  currentImages,
  setCurrentImages,
  shopLogo,
  designerPicture,
  banners,
  mobileBanners
}) {
  const showModal = () => {
    if (shopLogo) {
      document.getElementById("upload_overlay1").classList.add("dblock");
    } else if (designerPicture) {
      document.getElementById("upload_overlay2").classList.add("dblock");
    } else if (banners) {
      document.getElementById("upload_overlay3").classList.add("dblock");
    } else if (mobileBanners) {
      document.getElementById("upload_overlay4").classList.add("dblock");
    } else {
      document.getElementById("upload_overlay").classList.add("dblock");
    }
  };
  const deletethisImg = (data, index) => {
    let _currentImages = currentImages;
    // for (let i = 0; i < currentImages.length; i++) {

    //   if (currentImages[i].img.src == data.img.src) {
    //     _currentImages.splice(i, 1);
    //   }
    // }
    _currentImages.splice(index, 1);
    setCurrentImages([]);
    setCurrentImages([..._currentImages]);
  };

  const deletethisSingleImg = () => {
    setCurrentImages(undefined);
  };

  return (
    <>
      <div className="fwr flex mb-[1rem] flex-col      lg:flex-row">
        <p
          className={` ${
            shopsPage && shopsPage == true
              ? "w-[100%]     lg:w-[23.4%]"
              : "w-[100%]     lg:w-[24.4%]"
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
          className={` ${
            shopsPage && shopsPage == true
              ? "w-[100%]"
              : "w-[100%]     lg:w-[68.75%]"
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
              {Array.isArray(currentImages) == true ? (
                <>
                  {currentImages && currentImages.length > 0
                    ? currentImages.length + " files selected"
                    : "Choose file"}
                </>
              ) : (
                <>
                
                {currentImages !== undefined ? <>{currentImages.name}</> : "Choose file"}
                
                </>
              )}
            </div>
          </div>
          {data && data.note ? (
            <p className="fwr text-[#6C757D] text-[13px] leading-[1.5] tracking-[0.5px]">
              <small>{data.note}</small>
            </p>
          ) : (
            ""
          )}

          {Array.isArray(currentImages) == true ? (
            <>
              {currentImages ? (
                <>
                  <div className="pt-[8px] flex gap-x-[5px] flex-wrap">
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
            <>
              {currentImages !== undefined ? (
                <div
                  className={`relative w-[100px] h-[145px] rounded-[0.25rem] bg-[#fff]     ----- th}  ----- }    border-[#00000020]  border-[1px] mb-[10px]`}
                  // onClick={() => selecImg(data, index)}
                >
                  <div
                    className="w-[17px] h-[17px] bg-[#000] rounded-full text-[10px] text-[#fff] absolute right-[-6px] top-[-5px] z-[2] flex justify-center item-center cursor-pointer"
                    onClick={() => deletethisSingleImg()}
                  >
                    x
                  </div>
                  <div className={`${styles.card_img_div}`}>
                    <span className="image_container">
                      <Image
                        src={currentImages.img.src}
                        alt="image"
                        width="30"
                        height="30"
                      />
                    </span>
                  </div>
                  <div className="px-[8px] py-[8px] pb-0">
                    <p className="fwb text-[#1b1b28] text-[0.8rem] w-[100%] whitespace-nowrap text-ellipsis overflow-hidden">
                      {currentImages.name}
                    </p>
                    <p className="text-[9px] text-[#8392a5] mt-[9px]">
                      {currentImages.sizeInKB}
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </>
          )}
        </div>
      </div>
      {/* <ChooseImageModal /> */}
    </>
  );
}

export default ChooseImage;
