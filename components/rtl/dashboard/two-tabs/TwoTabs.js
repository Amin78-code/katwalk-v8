import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from "./TwoTabs.module.css";
import enIcon from "../../../../assets/images/icons/en.png";
import arIcon from "../../../../assets/images/icons/ar.png";

function TwoTabs({ heading, lightHeadingBar }) {
  const [enableArabic, setEnableArabic] = useState(true);

  const toggleLang = () => {
    setEnableArabic(!enableArabic)
  }

  return (
    <div className="w-[100%] min-h-[50px] border-[#ebedf2] border-b-[1px] pt-[13px]">
      <div className="flex justify-between">
        <div
          className={`w-[100%]  flex justify-center items-center rounded-t-[0.25rem] border-[1px] border-[#dee2e6] mb-[-2px] fwr uppercase text-[12px] mx-[15px] py-[20px]    ${enableArabic == true
            ? "bg-[#fff] border-b-[3px] border-b-[#fff]"
            : "bg-[#2a324226]"
            }`}
          onClick={() => toggleLang()}
        >
          <span className="image_container mr-[5px]">
            <Image src={enIcon} alt="image" />
          </span>
          english
        </div>
        <div
          className={`w-[100%]  flex justify-center items-center rounded-t-[0.25rem] border-[1px] border-[#dee2e6] mb-[-2px] fwr uppercase text-[12px] mx-[15px] py-[20px] ${enableArabic !== true
            ? "bg-[#fff] border-b-[3px] border-b-[#fff]"
            : "bg-[#2a324226]"
            }`}
          onClick={() => toggleLang()}
        >
          <span className="image_container mr-[5px]">
            <Image src={arIcon} alt="image" />
          </span>
          arabic
        </div>
      </div>
    </div>
  );
}

export default TwoTabs;
