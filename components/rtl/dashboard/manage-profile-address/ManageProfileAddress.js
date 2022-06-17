import React, { useState, useRef } from "react";
import Image from "next/image";
import CardBody from "../card-body/CardBody";
import TableHeader from "../table-header/TableHeader";
import styles from "./ManageProfileAddress.module.css";
import TitleAndTableCard from "../title-and-table-card/TitleAndTableCard";

function ManageProfileAddress({ data, title }) {
  const basicInfoCardBody = useRef("");
  const typeSelect = useRef("");
  const [editOrDelete, setEditOrDelete] = useState("");
  const openCardBody = () => {
    basicInfoCardBody.current.classList.toggle(styles.slide_card_body);
  };

  const setOption = (selectedOption) => {
    // console.log("selectedOption", selectedOption);
    // console.log("optionsIndex", optionsIndex);
    if (optionsIndex == "edit") {
      setEditOrDelete(selectedOption);
    } else if (optionsIndex == "delete") {
      setEditOrDelete(selectedOption);
    }
  };

  const openSelect = (dropdownName) => {
    document.getElementById(dropdownName).classList.toggle("dblock");
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
              className="flex uppercase text-[14px] items-center cursor-pointer"
              onClick={() => openCardBody("basicInfo")}
            >
              تعديل
              <i className="las la-ellipsis-v mx-[5px]"></i>
            </p>
          </div>
        </TableHeader>
        <div
          ref={basicInfoCardBody}
          className={`max-h-0 h-auto overflow-hidden taPoint6`}
        >
          <CardBody>
            <TitleAndTableCard>
              <div className="p-[1rem] relative">
                {data.map((value) => {
                  return (
                    <p key={value.name} className="fwb text-[13px] text-[#1b1b28]">
                      {value.name}: &nbsp;&nbsp;&nbsp;
                      <span className="fwr">{value.value}</span>
                    </p>
                  );
                })}

                <div className="absolute right-[10px] top-[10px]">
                  <i className="las la-ellipsis-v mx-[5px] cursor-pointer" onClick={() => openSelect("editOrDelete")}></i>

                  <div
                    className="absolute w-[165px] right-[-10px] top-[25px] z-[2] dnone"
                    id={"editOrDelete"}
                  >
                    <div className="w-[100%] mt-[0px] py-[10px] bg-[#fff] z-[2] border-[1px] border-[#00000026] drop-shadow-[0_0px_50px_rgba(82,63,105,15%)] rounded-[5px] ">
                      <ul>
                        <li
                          onClick={() => setOption("edit")}
                          className={`${editOrDelete == "edit" ? styles.active_option : ""
                            }
                          block text-[#212529] text-[1rem] capitalize py-[0.25rem] px-[1rem] hover:bg-[#c53a24] hover:text-[#fff] overflow-hidden overflow-ellipsis whitespace-nowrap taPoint3`}
                        >
                          edit
                        </li>
                        <li
                          onClick={() => setOption("delete")}
                          className={`${editOrDelete == "delete" ? styles.active_option : ""
                            }
                          block text-[#212529] text-[1rem] capitalize py-[0.25rem] px-[1rem] hover:bg-[#c53a24] hover:text-[#fff] overflow-hidden overflow-ellipsis whitespace-nowrap taPoint3`}
                        >
                          delete
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="fwb text-[10px] text-[#fff] h-[25px] leading-[25px] tracking-[0.5px] capitalize rounded-[5px] bg-[#c83e27] block px-[5px] absolute right-[10px] bottom-[10px]">
                  default
                </div>
              </div>
            </TitleAndTableCard>
            <AddNewAddress />
            <div className="flex justify-end">
              <button className="light-brown-btn ffr text-[0.875rem] text-[#fff] h-[40px] leading-[40px] tracking-[0.5px] uppercase bg-[#c83e27] block px-[15px] m-[.25rem] mt-[15px]">
                update profile
              </button>
            </div>
          </CardBody>
        </div>
      </TitleAndTableCard>
    </>
  );
}

function AddNewAddress() {
  return (
    <div
      className={`border-[1px] border-[#00000020] rounded-[.25rem] bg-[#f8f9fa] border-[#dee2e6] border-[1px] p-[1rem] mt-[15px] flex justify-center items-center flex-col`}
    >
      <i className="las la-plus text-[26px] cursor-pointer mr-[5px]"></i>
      <p className="fwr capitalize text-[13px] text-[#1b1b28] mt-[3px]">
        add new address
      </p>
    </div>
  );
}

export default ManageProfileAddress;
