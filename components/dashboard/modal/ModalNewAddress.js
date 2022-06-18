import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./Modal.module.css";
import TableHeader from "../table-header/TableHeader";
import CardBody from "../card-body/CardBody";
// import Options from "../options";

function ModalNewAddress({
  isShowModal,
  toggleModal,
  selectedType,
  data,
  setSelectedOption,
  selectedSizeAndFit,
  openSelect,
  optionsHandler,
  productCategoriesForShow,
  setProductCategoriesForShow,
  categorySelect,
  openCategorySelect,
  setCountry,
  setCity,
}) {
  const [isDisableLength, setIsDisableLength] = useState(true);

  const lengthSelect = useRef("");

  const typeSelect = useRef("");
  return (
    <>
      <div
        className={`${
          isShowModal && isShowModal == true ? styles.modal_main : ""
        } w-[100%] h-[100%] fixed top-0 left-0 z-[11] hidden bg-[#00000099] flex justify-center items-center`}
      >
        <div
          className={`${
            isShowModal && isShowModal == true ? styles.modal_div : ""
          } dnone opacity-0 w-[100%]      md:w-[533px] max-w-[533px] min-h-[235px] bg-[#fff] border-[1px] border-[#00000033] rounded-[.3rem] drop-shadow-[0_5px_15px_rgba(0,0,0,.5)]`}
        >
          <TableHeader>
            <div className="flex justify-between">
              <span className="capitalize">New Address</span>
              <i
                onClick={() => toggleModal()}
                className="las la-times text-[20px] text-[#00000070] cursor-pointer"
              />
            </div>
          </TableHeader>

      
      











          <CardBody>
                asfsdafasdf
                </CardBody>
















                <div className="w-[100%] h-[150px] p-[20px]">
              <div className="h-[100%] flex justify-between flex-col">
               
                <div className="flex justify-end">
                

                  <button className="light-brown-btn ffr text-[0.875rem] text-[#fff] h-[40px] leading-[40px] tracking-[0.5px] uppercase bg-[#c83e27] block px-[15px] m-[.25rem]">
                    save
                  </button>
                </div>
              </div>
            </div>


        </div>
      </div>
    </>
  );
}

export default ModalNewAddress;
