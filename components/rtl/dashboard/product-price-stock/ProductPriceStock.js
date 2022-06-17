import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./ProductPriceStock.module.css";

function ProductPriceStock({ data }) {
  return (
    <div
      className="flex mb-[1rem] flex-col      lg:flex-row"
    >
      <p className="w-[100%]     lg:w-[24.4%] text-[#1b1b28] text-[13px] px-0      lg:px-[5px] capitalize">
        <span className="text-[#ff0032]">*</span>
        {data.name}
      </p>
      <div className="w-[100%]     lg:w-[37.5%] px-0      lg:px-[15px]">
        {data.name == "سعر الوحدة" ? (
          <input
            type="number"
            className="admin-input w-[100%] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
            placeholder={data.name}
            step="0.01"
          />
        ) : (
          ""
        )}
        {data.name == "جودة" ? (
          <input
            type="number"
            className="admin-input w-[100%] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
            placeholder={data.name}
          />
        ) : (
          ""
        )}
        {data.name == "SKU" ? (
          <input
            type="text"
            className="admin-input w-[100%] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
            placeholder={data.name}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ProductPriceStock;
