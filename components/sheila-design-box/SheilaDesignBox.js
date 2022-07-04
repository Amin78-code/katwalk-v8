import Image from "next/image";
import React from "react";
import styles from "./SheilaDesignBox.module.css";

function SheilaDesignBox({
  data,
  settingSheila,
  currectSelected,
}) {
  return (
    <>
      <div
        className={`${styles.color_main_div} `}
        onClick={() => settingSheila(data)}
      >
        <div
          className={`w-[83px] m-[2px] border-[1px] border-[#fff] border-b-[2px]  ${
            currectSelected?.name == data.name
              ? "color-selected"
              : ""
          }`}
        >
          <div className={`w-[75px] h-[75px] m-[3px] overflow-hidden`}>

            <Image src={data.img} alt={"image"} />

          </div>
          <p className="work-regular text-[12px] leading-[1.2] tracking-[0.5px] pt-[3px] pr-[3px] pb-[5px] pl-[5px] ">
            {data.name}
          </p>
        </div>
      </div>
    </>
  );
}

export default SheilaDesignBox;
