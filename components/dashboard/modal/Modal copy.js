import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./Modal.module.css";
import TableHeader from "../table-header/TableHeader";
import CardBody from "../card-body/CardBody";
function Modal({
  isShowModal,
  toggleModal,
  page,
  data,
  selectedCity,
  selectedCountry,
  changeHandler,
  productCategories,
  productCategoriesForShow,
  setProductCategoriesForShow,
  categorySelect,
  openCategorySelect,
  setCountry,
  setCity,
}) {
  const [isDisableLength, setIsDisableLength] = useState(true);

  const lengthSelect = useRef("");

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
              <span className="capitalize">
                {page && page == "profile" ? (
                  "New Address"
                ) : (
                  <>
                    {page && page == "withdraw"
                      ? "send a withdraw request"
                      : "Cancel Confirmation"}
                  </>
                )}
              </span>
              <i
                onClick={() => toggleModal()}
                className="las la-times text-[20px] text-[#00000070] cursor-pointer"
              />
            </div>
          </TableHeader>

          {page && page == "profile" ? (
            <>
              <CardBody>
                {/* <div
                  className="fwr flex mb-[1rem] flex-col      lg:flex-row"
                >
                  <p className="w-[23.4%] text-[#1b1b28] text-[13px] px-0        lg:px-[5px] capitalize pt-[7px]">
               dsfg
                  </p>
                  <div className="w-[100%] px-0     lg:px-[15px]">
                    <input
                      type="text"
                      className="admin-input w-[100%] h-[44px] fwl text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                      value="sdg"
                      placeholder="SDFgdsfgd"
                    />
                  </div>
                </div> */}

                {data.map((value, index) => {
                  return (
                    <>
                      {value.type == "input" ? (
                        <div className="fwr flex mb-[1rem] flex-col      lg:flex-row">
                          <p className="w-[100%]     lg:w-[24.4%] text-[#1b1b28] text-[13px] px-[5px] capitalize">
                            {value.name}
                          </p>
                          <div className="w-[100%]     lg:w-[68.75%] px-[5px]     lg:px-[15px]">
                            <input
                              className="admin-input w-[100%] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                              placeholder={value.placeholder}
                            />
                          </div>
                        </div>
                      ) : (
                        <>
                          {value.type == "textarea" ? (
                            <div className="fwr flex mb-[1rem] flex-col      lg:flex-row">
                              <p className="w-[100%]     lg:w-[24.4%] text-[#1b1b28] text-[13px] px-[5px] capitalize">
                                {value.name}
                              </p>
                              <div className="w-[100%]     lg:w-[68.75%] px-[5px]     lg:px-[15px]">
                                <textarea
                                  className="admin-input w-[100%] h-[44px ] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                                  placeholder={value.placeholder}
                                ></textarea>
                              </div>
                            </div>
                          ) : (
                            <div className="fwr flex mb-[1rem] flex-col      lg:flex-row">
                              <p className="w-[100%]     lg:w-[24.4%] text-[#1b1b28] text-[13px] px-[5px] capitalize">
                                {value.name}
                              </p>
                              <div className="w-[100%]     lg:w-[68.75%] px-[5px]     lg:px-[15px]">
                                <div
                                  className="admin-input relative w-[100%] h-[44px] leading-[30px] text-[#b7b7b7] text-[1rem] bg-[#fff] border-[1px]  rounded-[.25rem] py-[0.375rem] px-[0.75rem] border-[#ced4da] cursor-pointer    before:absolute before:w-[0] before:h-[0] before:border-[4px] before:border-t-[#b7b7b7] before:border-l-[transparent] before:border-r-[transparent] before:border-b-[transparent] before:top-[18px] before:right-[10px]"
                                  // id={value.name+"Select"}
                                >
                                  <div
                                    onClick={() => openCategorySelect(value.name)}
                                    className="uppercase"
                                  >
                                    {value.name == "City" ? (
                                      <>
                                        {/* {selectedCity} */}
                                        {selectedCity &&
                                        selectedCity == "Select"
                                          ? selectedCity + value.name
                                          : selectedCity}
                                      </>
                                    ) : (
                                      <>
                                        {selectedCountry &&
                                        selectedCountry == "Select"
                                          ? selectedCountry + value.name
                                          : selectedCountry}
                                      </>
                                    )}
                                  </div>
                                  <div
                                    // ref={categorySelect}
                                    id={value.name+"Select"}
                                    className="absolute w-[100%] left-0 top-[43px] z-[1] dnone"
                                  >
                                    <div className="w-[100%] mt-[0px] py-[10px] bg-[#fff] z-[2] border-[1px] border-[#00000026] drop-shadow-[0_0px_50px_rgba(82,63,105,15%)]">
                                      <div className="py-[4px] px-[8px]">
                                        <input
                                          // kam
                                          onChange={(e) =>
                                            changeHandler(e, productCategories)
                                          }
                                          className="admin-input w-[100%] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                                        />
                                      </div>
                                      <ul>
                                        {value.options.map((valu, inde) => {
                                          console.log("value.name",value.name, valu);
                                          return (
                                            <>
                                              {value.name == "City" ?
                                              (
                                                <li
                                                  key={inde * 4}
                                                  onClick={() => setCity(valu)}
                                                  className={`${
                                                    value == selectedCity
                                                      ? styles.active_option
                                                      : ""
                                                  } capitalize block text-[#212529] text-[1rem] py-[0.25rem] px-[1rem] hover:bg-[#c53a24] hover:text-[#fff] taPoint3`}
                                                >
                                                  { inde +5} {valu}
                                                </li>
                                              ) : (
                                                <li
                                                  key={inde * 4}
                                                  onClick={() =>
                                                    setCountry(valu)
                                                  }
                                                  className={`${
                                                    value == selectedCountry
                                                      ? styles.active_option
                                                      : ""
                                                  } capitalize block text-[#212529] text-[1rem] py-[0.25rem] px-[1rem] hover:bg-[#c53a24] hover:text-[#fff] taPoint3`}
                                                >
                                                  {valu} { inde +7}
                                                </li>
                                              ) }
                                            </>
                                          );
                                        })}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </>
                  );
                })}

                <div className="w-[100%] h-[150px] p-[20px]">
                  <div className="h-[100%] flex justify-between flex-col">
                    <div className="flex justify-end">
                      <button className="light-brown-btn ffr text-[0.875rem] text-[#fff] h-[40px] leading-[40px] tracking-[0.5px] uppercase bg-[#c83e27] block px-[15px] m-[.25rem]">
                        delete
                      </button>
                    </div>
                  </div>
                </div>
              </CardBody>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Modal;
