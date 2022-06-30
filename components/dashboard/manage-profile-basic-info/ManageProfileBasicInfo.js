import React, { useState, useRef } from "react";
import Image from "next/image";
import CardBody from "../card-body/CardBody";
import TableHeader from "../table-header/TableHeader";
import styles from "./ManageProfileBasicInfo.module.css";
import TitleAndTableCard from "../title-and-table-card/TitleAndTableCard";
import ChooseImage from "../choose-image/ChooseImage";
import CurrentImgCard from "../current-img-card/CurrentImgCard";

function ManageProfileBasicInfo({
  data,
  title,
  showModal,
  handleChange,
  currentImages,
  updateBasicInfo,
  setCurrentImages
}) {
  console.log("erercurrentImages",currentImages)
  console.log("erercurrentImages",currentImages?.name)
  const basicInfoCardBody = useRef("");
  const openCardBody = () => {
    basicInfoCardBody.current.classList.toggle(styles.slide_card_body);
  };

  const deletethisSingleImg = () => {
    setCurrentImages(undefined);
  };
  return (
    <>
      <TitleAndTableCard
        width={"w-[100% mb-[20px]"}
        zindex={" z-[2] relative "}
      >
        <TableHeader>
          <div className="flex justify-between">
            {title ? title : "Title"}
            <p
              className="flex ffr uppercase text-[14px] items-center cursor-pointer"
              onClick={() => openCardBody("basicInfo")}
            >
              edit
              <i className="las la-ellipsis-v mx-[5px]"></i>
            </p>
          </div>
        </TableHeader>

        <div
          ref={basicInfoCardBody}
          className={`max-h-0 h-auto overflow-hidden taPoint6`}
        >
          <CardBody>
            <div className="fwr flex mb-[1rem] flex-col      lg:flex-row">
              <p className="w-[100%] md:w-[23.4%] text-[#1b1b28] text-[13px] px-0        lg:px-[5px] capitalize pt-[7px]">
                {data[0].name}
              </p>
              <div className="w-[100%] px-0     lg:px-[15px]">
                <input
                  type="text"
                  className="admin-input w-[100%] h-[44px] fwl text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                  value={data[0].value}
                  placeholder="Your Name"
                  onChange={(e) => handleChange(e, "Your Name", "basicInfo")}
                />
              </div>
            </div>

            <div className="fwr flex mb-[1rem] flex-col      lg:flex-row">
              <p className="w-[100%] md:w-[23.4%] text-[#1b1b28] text-[13px] px-0        lg:px-[5px] capitalize pt-[7px]">
                {data[1].name}
              </p>
              <div className="w-[100%] px-0     lg:px-[15px]">
                <input
                  type="text"
                  className="admin-input w-[100%] h-[44px] fwl text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                  value={data[1].value}
                  placeholder="Your Phone"
                  onChange={(e) => handleChange(e, "Your Phone", "basicInfo")}
                />
              </div>
            </div>

            <div className="fwr flex mb-[1rem] flex-col      lg:flex-row">
              <p className="w-[100%] md:w-[23.4%] text-[#1b1b28] text-[13px] px-0        lg:px-[5px] capitalize pt-[7px]">
                {data[2].name}
              </p>
              <div className="w-[100%] flex flex-col">
              <div className="w-[100%] px-0     lg:px-[15px]">
                <div className={`"w-[100%]"`}>
                  <div
                    className="flex admin-input relative w-[100%] h-[44px] leading-[30px] bg-[#fff] border-[1px]  rounded-[.25rem]  border-[#ced4da] cursor-pointer"
                    onClick={() => showModal()}
                  >
                    <div className="fwl text-[#495057] text-[1rem] py-[0.375rem] px-[0.75rem]">
                      {currentImages && currentImages.length !== ""
                        ? currentImages.name
                        : "Choose file"}
                    </div>
                  </div>
                </div>
              </div>
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
                  className={`relative w-[100px] h-[145px] rounded-[0.25rem] bg-[#fff]     ----- th}  ----- }    border-[#00000020]  border-[1px] mb-[10px] ml-[15px]`}
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

            <div className="fwr flex mb-[1rem] flex-col      lg:flex-row">
              <p className="w-[100%] md:w-[23.4%] text-[#1b1b28] text-[13px] px-0        lg:px-[5px] capitalize pt-[7px]">
                {data[3].name}
              </p>
              <div className="w-[100%] px-0     lg:px-[15px]">
                <input
                  type="text"
                  className="admin-input w-[100%] h-[44px] fwl text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                  value={data[3].value}
                  placeholder="New Password"
                  onChange={(e) => handleChange(e, "New Password", "basicInfo")}
                />
              </div>
            </div>

            <div className="fwr flex mb-[1rem] flex-col      lg:flex-row">
              <p className="w-[100%] md:w-[23.4%] text-[#1b1b28] text-[13px] px-0        lg:px-[5px] capitalize pt-[7px]">
                {data[4].name}
              </p>
              <div className="w-[100%] px-0     lg:px-[15px]">
                <input
                  type="text"
                  className="admin-input w-[100%] h-[44px] fwl text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                  value={data[4].value}
                  placeholder="Confirm Password"
                  onChange={(e) =>
                    handleChange(e, "Confirm Password", "basicInfo")
                  }
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => updateBasicInfo()}
                className="light-brown-btn ffr text-[0.875rem] text-[#fff] h-[40px] leading-[40px] tracking-[0.5px] uppercase bg-[#c83e27] block px-[15px] m-[.25rem]"
              >
                update profile
              </button>
            </div>
          </CardBody>
        </div>
      </TitleAndTableCard>
    </>
  );
}

export default ManageProfileBasicInfo;
