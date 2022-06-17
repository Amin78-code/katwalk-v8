import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./Modal.module.css";
import TableHeader from "../table-header/TableHeader";
function Modal({ isShowModal, toggleModal, page }) {
  const [isDisableLength, setIsDisableLength] = useState(true);

  const lengthSelect = useRef("");

  return (
    <>
      <div
        className={`${
          isShowModal && isShowModal == true ? styles.modal_main : ""
        } w-[100%] h-[100%] fixed top-0 left-0 z-[3] hidden bg-[#00000099] flex justify-center items-center`}
      >
        <div
          className={`${
            isShowModal && isShowModal == true ? styles.modal_div : ""
          } dnone opacity-0 w-[100%]      md:w-[533px] max-w-[533px] min-h-[235px] bg-[#fff] border-[1px] border-[#00000033] rounded-[.3rem] drop-shadow-[0_5px_15px_rgba(0,0,0,.5)]`}
        >
          <TableHeader>
            <div className="flex justify-between">
              <span className="capitalize">
                {page && page == "withdraw"
                  ? "send a withdraw request"
                  : "Cancel Confirmation"}
              </span>
              <i
                onClick={() => toggleModal()}
                className="las la-times text-[20px] text-[#00000070] cursor-pointer"
              />
            </div>
          </TableHeader>

          {page && page == "withdraw" ? (
            <div className="w-[100%] h-[150px] flex justify-center items-center p-[20px]">
              <p className="fwr text-[13px] text-[#1b1b28] tracking-[0.5px]">
                You do not have enough balance to send withdraw request
              </p>
            </div>
          ) : (
            <div className="w-[100%] h-[150px] p-[20px]">
              <div className="h-[100%] flex justify-between flex-col">
                <p className="fwr text-[13px] text-[#1b1b28] tracking-[0.5px]">
                Are you sure to cancel this?
                </p>
                <div className="flex justify-between">
                  <button className="ffr text-[0.8125rem] text-[#e62e04] uppercase px-[1rem] h-[40px] leading-[40px] tracking-[.2em] border-[#e62e04] border-b-[1px] ml-[5px] flex items-center">
                    cancel
                  </button>

                  <button className="light-brown-btn ffr text-[0.875rem] text-[#fff] h-[40px] leading-[40px] tracking-[0.5px] uppercase bg-[#c83e27] block px-[15px] m-[.25rem]">
                    delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Modal;
