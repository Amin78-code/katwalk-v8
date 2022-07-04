import React, { useState, useRef } from "react";
import Image from "next/image";
import CardBody from "../card-body/CardBody";
import TableHeader from "../table-header/TableHeader";
import styles from "./ManageProfileDesigner_VAT_and_CR_No.module.css";
import TitleAndTableCard from "../title-and-table-card/TitleAndTableCard";
import ChooseImage from "../choose-image/ChooseImage";

function ManageProfileDesigner_VAT_and_CR_No({
  data,
  title,
  handleChangeDesigner,
  saveData_VAT_and_CR,
}) {
  const basicInfoCardBody = useRef("");
  const paymentMethodDiv = useRef("");
  const openCardBody = () => {
    basicInfoCardBody.current.classList.toggle(styles.slide_card_body);
  };

  const [isDisableVAT, setIsDisableVAT] = useState(true);
  const [isDisableCR, setIsDisableCR] = useState(true);

  const disableVAT = (id) => {
    console.log(
      "document.getElementById(id).checked",
      document.getElementById(id).checked
    );
    if (document.getElementById(id).checked == true) {
      setIsDisableVAT(false);
    } else {
      setIsDisableVAT(true);
    }
  };

  const disableCR = (id) => {
    console.log(
      "document.getElementById(id).checked",
      document.getElementById(id).checked
    );
    if (document.getElementById(id).checked == true) {
      setIsDisableCR(false);
    } else {
      setIsDisableCR(true);
    }
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
            <div className="fwr flex mb-[1rem] flex-col      lg:flex-row">
              <p className="w-[100%]     lg:w-[100%] md:w-[23.4%] text-[#1b1b28] text-[13px] px-0        lg:px-[5px] capitalize pt-[7px]">
                {data[0].name}
              </p>
              <div className="w-[100%] px-0     lg:px-[15px] flex flex-col      lg:flex-row">
                <div
                  id={"paymentMethodDiv_VAT"}
                  className={`${
                    isDisableVAT == true ? styles.disable_div : ""
                  } w-[100%] h-[44px] relative before:w-[100%] before:h-[100%] before:left-0 before:top-0 before:bg-[#ffffffa6]             before:absolute before:w-[0] before:h-[0] before:border-[4px] before:border-t-[#b7b7b7] before:border-l-[transparent] before:border-r-[transparent] before:border-b-[transparent] before:top-[18px] before:right-[0px]`}                >
                  <input
                    type="text"
                    className={`admin-input w-[100%] h-[44px] fwl text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]`}
                    value={data[0].value}
                    placeholder={data[0].placeHolder ? data[0].placeHolder : ""}
                    id={"paymentMethod_VAT"}
                    onChange={(e) => handleChangeDesigner(e, 0)}
                  />
                </div>

                <p className="fwr px-0      lg:px-[7%] text-[10px] text-[#6C767D] leading-[2] tracking-[0.5px] mt-[10px]      lg:mt-0">
                  <label
                    htmlFor={"togglePayment_VAT"}
                    className="flex items-center cursor-pointer"
                  >
                    <div className="relative">
                      <input
                        type="checkbox"
                        id={"togglePayment_VAT"}
                        className="sr-only"
                        // {value.status} is se checked unchecked set karna he
                        onChange={() => disableVAT("togglePayment_VAT")}
                      />
                      <div className="block bg-[#e8ebf1] w-[40px] h-[23px] rounded-full"></div>
                      <div className="dot absolute left-[2px] top-[2.5px] bg-white w-[17px] h-[17px] rounded-full transition"></div>
                    </div>
                  </label>
                </p>
              </div>
            </div>

            <div className="fwr flex mb-[1rem] flex-col      lg:flex-row">
              <p className="w-[100%]     lg:w-[100%] md:w-[23.4%] text-[#1b1b28] text-[13px] px-0        lg:px-[5px] capitalize pt-[7px]">
                {data[1].name}
              </p>
              <div className="w-[100%] px-0     lg:px-[15px] flex flex-col      lg:flex-row">
                <div
                  id={"paymentMethodDiv_VAT"}
                  className={`${
                    isDisableCR == true ? styles.disable_div : ""
                  } w-[100%] h-[44px] relative before:w-[100%] before:h-[100%] before:left-0 before:top-0 before:bg-[#ffffffa6]             before:absolute before:w-[0] before:h-[0] before:border-[4px] before:border-t-[#b7b7b7] before:border-l-[transparent] before:border-r-[transparent] before:border-b-[transparent] before:top-[18px] before:right-[0px]`}                >
                  <input
                    type="text"
                    className={`admin-input w-[100%] h-[44px] fwl text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]`}
                    value={data[1].value}
                    placeholder={data[1].placeHolder ? data[1].placeHolder : ""}
                    id={"paymentMethod_VAT"}
                    onChange={(e) => handleChangeDesigner(e, 1)}
                  />
                </div>

                <p className="fwr px-0      lg:px-[7%] text-[10px] text-[#6C767D] leading-[2] tracking-[0.5px] mt-[10px]      lg:mt-0">
                  <label
                    htmlFor={"togglePayment_CR"}
                    className="flex items-center cursor-pointer"
                  >
                    <div className="relative">
                      <input
                        type="checkbox"
                        id={"togglePayment_CR"}
                        className="sr-only"
                        // {value.status} is se checked unchecked set karna he
                        onChange={() => disableCR("togglePayment_CR")}
                      />
                      <div className="block bg-[#e8ebf1] w-[40px] h-[23px] rounded-full"></div>
                      <div className="dot absolute left-[2px] top-[2.5px] bg-white w-[17px] h-[17px] rounded-full transition"></div>
                    </div>
                  </label>
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => saveData_VAT_and_CR()}
                className="light-brown-btn ffr text-[0.875rem] text-[#fff] h-[40px] leading-[40px] tracking-[0.5px] uppercase bg-[#c83e27] block px-[15px] m-[.25rem]"
              >
                save
              </button>
            </div>
          </CardBody>
        </div>
      </TitleAndTableCard>
    </>
  );
}

export default ManageProfileDesigner_VAT_and_CR_No;
