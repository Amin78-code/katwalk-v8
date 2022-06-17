import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from "./Bust.module.css";

function Bust({ data, isDisableAllAlterations, openAltration }) {
  const [isDisableBust, setIsDisableBust] = useState(true);

  const bustSelect = useRef("");
  const [selectedBust, setSelectedBust] = useState([]);
  const [bustTitle, setBustTitle] = useState("nothing selected");

  const openAnyAlterationSelect = (productionVaraitionName) => {
    if (productionVaraitionName == "bustSelect") {
      bustSelect.current.classList.toggle("dblock");
    }
  };

  const settingSelectedBust = (selected) => {
    let allSelectedBust = selectedBust;
    let notInArray = true;

    for (let i = 0; i < data.bust.length; i++) {
      if (allSelectedBust[i] == selected) {
        allSelectedBust.splice(i, 1);
        notInArray = false;
      }
    }

    if (notInArray == true) {
      allSelectedBust.push(selected);
    }

    setSelectedBust(allSelectedBust);

    for (let i = 0; i < data.bust.length; i++) {
      if (data.bust[i] == selected) {
        document.getElementById("bustOptions" + i).classList.toggle("dblock");
      }
    }
    if (selectedBust.length == 1) {
      setBustTitle(
        <li
          className={`
                  block relative text-[#b7b7b7]  text-[1rem] tracking-0 mt-[-2px] py-[0.15rem] px-[1rem] pl-0 overflow-hidden overflow-ellipsis whitespace-nowrap taPoint3`}
        >
          {selectedBust[0]}
        </li>
      );
    } else if (selectedBust == "") {
      setBustTitle("nothing selected");
    } else {
      setBustTitle(selectedBust.length + " " + "items selected");
    }
  };

  const disableBust = (id) => {
    // console.log("e", document.getElementById(id).checked);
    if (document.getElementById(id).checked == true) {
      setIsDisableBust(false);
    } else {
      setIsDisableBust(true);
    }
  };

  return (
    <>
      <div className=" flex mb-[1rem] flex-col      lg:flex-row">
        <input
          className="w-[100%]     lg:w-[25%] h-[44px] leading-[34px] capitalize bg-[#e9ecef]  text-[#495057] text-[1rem] rounded-[.25rem] py-[.2rem] px-[.75rem] not-allowed"
          value="العرض"
        />
        <div className=" w-[100%]     lg:w-[62.5%] pl-0         lg:pl-[15px] pr-0         lg:pr-[5px]">
          <div
            className={`
            
            $ { isDisableAllAlterations == true ? styles.disable_div :
              isDisableBust ? styles.disable_div : ""}

             admin-input relative w-[100%] h-[44px] leading-[30px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#e2e5ec] rounded-[.25rem] py-[0.375rem] px-[0.75rem]  cursor-pointer       before:absolute before:w-[0] before:h-[0] before:border-[4px] before:border-t-[#b7b7b7] before:border-l-[transparent] before:border-r-[transparent] before:border-b-[transparent] before:top-[18px] before:right-[10px]`}
          >
            <span
              // onClick={() => openAltration("bust")}
              onClick={() => openAnyAlterationSelect("bustSelect")}
              className="alteration-tabs w-[100%] text-[#b7b7b7] text-[15px] tracking-0 uppercase h-[40px] overflow-hidden block"
            >
              {bustTitle}
            </span>
            <div
              ref={bustSelect}
              className="absolute w-[100%] left-0 top-[43px] z-[2] dnone"
            >
              <div className="w-[100%] mt-[0px] py-[10px] bg-[#fff] border-[1px] border-[#00000026] drop-shadow-[0_0px_50px_rgba(82,63,105,15%)]">
                <div className="py-[4px] px-[8px]">
                  <input className="admin-input w-[100%] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]" />
                </div>
                <ul className="max-h-[160px] overflow-auto">
                  {data.bust.map((value, index) => {
                    return (
                      <li
                        onClick={() => settingSelectedBust(value, index)}
                        key={value + 1}
                        className={`
                                              block relative text-[#212529]  text-[1rem] py-[0.15rem] px-[1rem] hover:bg-[#c53a24] hover:text-[#fff] overflow-hidden overflow-ellipsis whitespace-nowrap taPoint3`}
                      >
                        <div className="flex justify-between">
                          {value}
                          <div className="dnone" id={"bustOptions" + index}>
                            <i className="las la-check"></i>
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
        <p className=" w-[100%]     lg:w-[12.5%] text-[10px] text-[#6C767D] leading-[2] tracking-[0.5px] pr-0       lg:pr-[10px] pl-0       lg:pl-[20px] mt-[10px]       lg:mt-0">
          <label htmlFor="toggleBust" className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                id="toggleBust"
                className="sr-only"
                onChange={() => disableBust("toggleBust")}
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

export default Bust;
