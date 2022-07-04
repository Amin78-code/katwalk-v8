import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from "./Sleeves.module.css";

function Sleeves({
  data,
  isDisableAllAlterations,
  openAltration,
  sleevesTitle,
  setSleevesTitle,
  openAnyAlterationSelect,
  selectName,
  changeHandler,
  alterationSleevesForShow,
}) {
  const [isDisableSleeves, setIsDisableSleeves] = useState(true);
  const [selectedSleeves, setSelectedSleeves] = useState([]);
  const [firstSelect, set_firstSelect] = useState(false);

  const settingSelectedSleeves = (selected) => {
    let allSelectedSleeves = selectedSleeves;
    let notInArray = true;

    for (let i = 0; i < alterationSleevesForShow.length; i++) {
      if (allSelectedSleeves[i] == selected) {
        allSelectedSleeves.splice(i, 1);
        notInArray = false;
      }
    }

    if (notInArray == true) {
      allSelectedSleeves.push(selected);
    }

    setSelectedSleeves(allSelectedSleeves);

    for (let i = 0; i < alterationSleevesForShow.length; i++) {
      if (alterationSleevesForShow[i] == selected) {
        document
          .getElementById("sleevesOptions" + i)
          .classList.toggle("d-block");
      }
    }
    if (selectedSleeves.length == 1) {
      setSleevesTitle(
        <li
          className={`ddd 
                  block relative text-[#b7b7b7] fwl text-[1rem] tracking-0 mt-[-2px] py-[0.15rem] px-[1rem] pl-0 overflow-hidden overflow-ellipsis whitespace-nowrap taPoint3`}
        >
          {selectedSleeves[0]}
        </li>
      );
    } else if (selectedSleeves == "") {
      setSleevesTitle("nothing selected");
    } else {
      setSleevesTitle(selectedSleeves.length + " " + "items selected");
    }
  };

  const disableSleeves = (id) => {
    console.log(
      "document.getElementById(id).checked",
      document.getElementById(id).checked
    );
    if (document.getElementById(id).checked == true) {
      setIsDisableSleeves(false);
    } else {
      setIsDisableSleeves(true);
    }
  };

  const selectAll = () => {
    console.log("selectAll");
    for (let i = 0; i < alterationSleevesForShow.length; i++) {
      settingSelectedSleeves(alterationSleevesForShow[i]);
    }
    set_firstSelect(!firstSelect);
  };

  return (
    <>
      <div className="ddd fwl flex mb-[1rem] flex-col      lg:flex-row">
        <input
          className="ddd w-[100%]     lg:w-[25%] h-[44px] leading-[34px] capitalize bg-[#e9ecef] fwl text-[#495057] text-[1rem] rounded-[.25rem] py-[.375rem] px-[.75rem] not-allowed"
          value="Sleeves"
        />
        <div className="ddd fwl w-[100%]     lg:w-[62.5%] pl-0         lg:pl-[15px] pr-0         lg:pr-[5px]">
          <div
            className={`ddd 

            ${
              isDisableAllAlterations == true
                ? styles.disable_div
                : isDisableSleeves
                ? styles.disable_div
                : ""
            }

             admin-input relative w-[100%] h-[44px] leading-[30px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#e2e5ec] rounded-[.25rem] py-[0.375rem] px-[0.75rem]  cursor-pointer       before:absolute before:w-[0] before:h-[0] before:border-[4px] before:border-t-[#b7b7b7] before:border-l-[transparent] before:border-r-[transparent] before:border-b-[transparent] before:top-[18px] before:right-[10px]`}
          >
            <span
              // onClick={() => openAltration("sleeves")}
              onClick={() => openAnyAlterationSelect("sleevesSelect")}
              className="ddd alteration-tabs w-[100%] text-[#b7b7b7] text-[15px] tracking-0 uppercase h-[40px] overflow-hidden block"
            >
              {sleevesTitle}
            </span>
            <div
              ref={selectName}
              className="ddd absolute w-[100%] left-0 top-[43px] z-[2] dnone"
            >
              <div className="ddd w-[100%] mt-[0px] py-[10px] bg-[#fff] border-[1px] border-[#00000026] drop-shadow-[0_0px_50px_rgba(82,63,105,15%)]">
                <div className="ddd py-[4px] px-[8px]">
                  <input
                     onChange={(e) => changeHandler(e, data)}
                      className="ddd admin-input w-[100%] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]" />

<div className="flex pt-[5px]">
                    {firstSelect == false ? (
                      <>
                        <button
                          onClick={() => selectAll()}
                          className="w-[50%] border-[1px] border-[#000] uppercase py-[2px] px-[5px]"
                        >
                          select all
                        </button>
                        <button className="w-[50%] border-[1px] border-[#000] uppercase py-[2px] px-[5px]">
                          diselect
                        </button>
                      </>
                    ) : (
                      <>
                        <button className=" w-[50%] border-[1px] border-[#000] uppercase py-[2px] px-[5px]">
                          select all
                        </button>
                        <button
                          onClick={() => selectAll()}
                          className="w-[50%] border-[1px] border-[#000] uppercase py-[2px] px-[5px]"
                        >
                          deselect all
                        </button>
                      </>
                    )}
                  </div>

                </div>
                <ul className="ddd max-h-[160px] overflow-auto">
                  {alterationSleevesForShow.map((value, index) => {
                    return (
                      <li
                        onClick={() => settingSelectedSleeves(value, index)}
                        key={value + 1}
                        className={`ddd 
                                              block relative text-[#212529] fwr text-[1rem] py-[0.15rem] px-[1rem] hover:bg-[#c53a24] hover:text-[#fff] overflow-hidden overflow-ellipsis whitespace-nowrap taPoint3`}
                      >
                        <div className="ddd flex justify-between">
                          {value}
                          <div
                            className="ddd dnone"
                            id={"sleevesOptions" + index}
                          >
                            <i className="ddd las la-check"></i>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="fwr w-[100%]     lg:w-[12.5%] text-[10px] text-[#6C767D] leading-[2] tracking-[0.5px] pr-0       lg:pr-[10px] pl-0       lg:pl-[20px] mt-[10px]       lg:mt-0">
          <label
            htmlFor="toggleSleeves"
            className="flex items-center cursor-pointer"
          >
            <div className="relative">
              <input
                type="checkbox"
                id="toggleSleeves"
                className="sr-only"
                onChange={() => disableSleeves("toggleSleeves")}
              />
              <div className="block bg-[#e8ebf1] w-[40px] h-[23px] rounded-full"></div>
              <div className="dot absolute left-[2px] top-[2.5px] bg-white w-[17px] h-[17px] rounded-full transition"></div>
            </div>
          </label>
        </p>
      </div>
    </>
  );
}

export default Sleeves;
