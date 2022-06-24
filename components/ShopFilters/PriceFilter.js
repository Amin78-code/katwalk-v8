import React from "react";
import styles from "./PriceFilter.module.css";

function PriceFilter({
  data,
  price_dropdown,
  choosingFilterOption,
  currectSelected,
  filterName,
  currentSelectedPricee,
}) {
  return (
    <>
      <div
        className={`w-[100%] lg:w-[320px] border-[#fbf1e8] border-[1px] relative lg:absolute 
 pt-[20px] lg:pt-0 z-[2] bg-[#fff] f-out max-h-[350px] overflow-auto`}
        ref={price_dropdown}
      >
        <div className="w-[100%] px-[20px] py-[15px]">
          <p className="fwl text-[11px] text-[#1b1b28] capitalize pb-[10px]">
            size:
          </p>
          <div className="flex flex-wrap gap-x-[9px] gap-y-[9px]">
            {data.map((value, index) => {
              return (
                <PriceFilterItem
                  key={index}
                  data={value}
                  filterName={filterName}
                  choosingFilterOption={choosingFilterOption}
                  index={index}
                  currentSelectedPricee={currentSelectedPricee}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceFilter;

function PriceFilterItem({
  data,
  choosingFilterOption,
  filterName,
  index,
  currentSelectedPricee,
}) {
  return (
    <>
      {/* ${styles.active} */}
      <div
        className={`${
          currentSelectedPricee &&
          currentSelectedPricee.length &&
          currentSelectedPricee.length !== 0
            ? currentSelectedPricee[index].status == true
              ? styles.active
              : ""
            : ""
        } size-box taPoint3 cursor-pointer fwl w-[48%] h-[48px] border-[#fbf1e8] border-[1px] flex justify-center items-center text-[#1b1b28] text-[13px] leading-[13px] p-[5px] pr-[8px]`}
        onClick={() => choosingFilterOption(data, filterName)}
      >
        {data}
      </div>
    </>
  );
}
