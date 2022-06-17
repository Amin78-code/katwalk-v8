import React, { useState, useRef } from "react";
import Image from "next/image";
import Layout from "../../components/layout/Layout";
import AdminPanelLayout from "../../components/dashboard/admin-panel-layout/AdminPanelLayout";
import TitleAndTableCard from "../../components/dashboard/title-and-table-card/TitleAndTableCard";
import TableHeader from "../../components/dashboard/table-header/TableHeader";
import styles from "../../components/Pickup.module.css";

const filters = [
  {
    name: "Filter by Payment Status",
    options: ["Filter by Payment Status", "paid", "unpaid"],
  },
  {
    name: "Filter by Deliver Status",
    options: [
      "Filter by Deliver Status",
      "pending",
      "confirmed",
      "on delivery",
      "delivered",
    ],
  },
];

function Pickup() {
  const [filterByPayment, setFilterByPayment] = useState(
    "Filter by Payment Status"
  );
  const [filterByDeliver, setFilterByDeliver] = useState(
    "Filter by Deliver Status"
  );
  const typeSelect = useRef("");

  const openSelect = (dropdownName, index) => {
    let allOptions = [];
    for (let i = 0; i < filters.length; i++) {
      allOptions.push("options" + i);
    }

    for (let i = 0; i < filters.length; i++) {
      if (dropdownName !== allOptions[i]) {
        document.getElementById(allOptions[i]).classList.remove("dblock");
      }
    }
    let dropdown = document.getElementById(dropdownName);
    dropdown.classList.toggle("dblock");

    if ("optionMainDiv" + index == "optionMainDiv0") {
      document
        .getElementById("optionMainDiv1")
        .classList.remove("border-[#c53a24]");

      document
        .getElementById("optionMainDiv0")
        .classList.add("border-[#c53a24]");
    } else if ("optionMainDiv" + index == "optionMainDiv1") {
      document
        .getElementById("optionMainDiv0")
        .classList.remove("border-[#c53a24]");

      document
        .getElementById("optionMainDiv1")
        .classList.add("border-[#c53a24]");
    }
  };

  const setOption = (selectedOption, optionsIndex) => {
    if (optionsIndex == 0) {
      setFilterByPayment(selectedOption);
    } else if (optionsIndex == 1) {
      setFilterByDeliver(selectedOption);
    }

    openSelect("options" + optionsIndex, optionsIndex);
  };

  return (
    <>
      <Layout>
        <div className="w-[100%] min-h-[100vh] h-[auto]">
          <AdminPanelLayout active={"Pickup"}>
            <TitleAndTableCard>
            <div className="flex items-center pr-[0] lg:pr-[12px] flex-col      lg:flex-row">
                <TableHeader>Orders</TableHeader>
                <div className="flex flex-col      lg:flex-row gap-y-[5px] p-[5px] w-[100%]">
                  {filters.map((value, index) => {
                    return (
                      <div key={value.name + 1} className="fwr w-[100%]        lg:w-[180px]        xl:w-[209px]">
                        <div className="fwl w-[100%] pr-0 lg:pr-[10px]">
                          <div

                            className="admin-input relative w-[100%] h-[44px] leading-[30px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#e2e5ec] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                            id={"optionMainDiv" + index}
                          >
                            <div className="text-[#b7b7b7] text-[15px] tracking-0 uppercase h-[40px] overflow-hidden block" onClick={() => openSelect("options" + index, index)}>
                              {index == 0
                                ? filterByPayment
                                  ? filterByPayment
                                  : ""
                                : ""}
                              {index == 1
                                ? filterByDeliver
                                  ? filterByDeliver
                                  : ""
                                : ""}
                            </div>
                            <div
                              ref={typeSelect}
                              className="absolute w-[100%] left-0 top-[43px] z-[2] dnone"
                              id={"options" + index}
                            >
                              <div className="w-[100%] mt-[0px] py-[10px] bg-[#fff] z-[2] border-[1px] border-[#00000026] drop-shadow-[0_0px_50px_rgba(82,63,105,15%)]">
                                <div className="py-[4px] px-[8px]">
                                  <input className="admin-input w-[100%] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]" />
                                </div>
                                <ul>
                                  {value.options.map((valu) => {
                                    return (
                                      <li
                                        onClick={() => setOption(valu, index)}
                                        key={valu + 1}
                                        className={`
                                        ${index == 0
                                            ? valu == filterByPayment
                                              ? styles.active_option
                                              : ""
                                            : ""
                                          }
                                        ${index == 1
                                            ? valu == filterByDeliver
                                              ? styles.active_option
                                              : ""
                                            : ""
                                          }
                                        block text-[#212529] text-[1rem] py-[0.25rem] px-[1rem] hover:bg-[#c53a24] hover:text-[#fff] overflow-hidden overflow-ellipsis whitespace-nowrap taPoint3`}
                                      >
                                        {valu}
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <input
                    type="text"
                    className="admin-input w-[100%]        lg:w-[180px]        xl:w-[230px] h-[44px] fwl text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                    placeholder="Type Order code & hit Enter"
                  />
                </div>
              </div>
            </TitleAndTableCard>
          </AdminPanelLayout>
        </div>
      </Layout>
    </>
  );
}

export default Pickup;
