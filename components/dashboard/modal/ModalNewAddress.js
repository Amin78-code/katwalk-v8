import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./Modal.module.css";
import TableHeader from "../table-header/TableHeader";
import CardBody from "../card-body/CardBody";
// import Options from "../options";

function ModalNewAddress({
  isShowModal,
  toggleModal,
  saveAddress,
  data,
  handleChangeAddress
}) {

  const countrySelect = useRef("")
  const countryNames = data[1].options
  const [countryNamesForShow, setCountryNamesForShow] = useState(countryNames)
  const [selectedCountry, setSelectedCountry] = useState("Select Your Country")

  const citySelect = useRef("")
  const [selectedCity, setSelectedCity] = useState("Select Your City")
  const cityNames = data[2].options
  const [cityNamesForShow, setCityNamesForShow] = useState(cityNames)


  const openSelect = (name) => {
    if (name == 'country') {
      countrySelect.current.classList.toggle("dblock");
      document.getElementById("countrySelect").classList.toggle(styles.red_border);
    } else if (name == 'city') {
      citySelect.current.classList.toggle("dblock");
      document.getElementById("citySelect").classList.toggle(styles.red_border);
    }
  };

  const setCountry = (value) => {
    handleChangeAddress(value, 4, "select")
    setSelectedCountry(value)
    countrySelect.current.classList.toggle("dblock");
    document.getElementById("countrySelect").classList.remove(styles.red_border);
  }
  const setCity = (value) => {
    handleChangeAddress(value, 2, "select")
    setSelectedCity(value)
    citySelect.current.classList.toggle("dblock");
    document.getElementById("citySelect").classList.remove(styles.red_border);
  }


  const countryChangeHandler = (e, countries) => {
    // console.log("initialData", e, countries);

    let _countryNames = countries;
    // setcountryNames(_countryNames);
    let __countryNames = [];
    // setcountryNamesForShow(_countryNames);
    for (let i = 0; i < _countryNames.length; i++) {
      __countryNames.push(countries[i].toLowerCase());
    }
    const data = __countryNames.filter((country) =>
      country.startsWith(e.target.value.toLowerCase())
    );
    setCountryNamesForShow(data);
  };


  const cityChangeHandler = (e, cities) => {
    // console.log("initialData", e, cities);

    let _cityNames = cities;
    // setcityNames(_cityNames);
    let __cityNames = [];
    // setcityNamesForShow(_cityNames);
    for (let i = 0; i < _cityNames.length; i++) {
      __cityNames.push(cities[i].toLowerCase());
    }
    const data = __cityNames.filter((city) =>
      city.startsWith(e.target.value.toLowerCase())
    );
    setCityNamesForShow(data);
  };

  return (
    <>
      <div
        className={`${isShowModal && isShowModal == true ? styles.modal_main : ""
          } w-[100%] h-[100%] fixed top-0 left-0 z-[11] hidden bg-[#00000099] flex justify-center items-center`}
      >
        <div
          className={`${isShowModal && isShowModal == true ? styles.modal_div : ""
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
            {/* Address */}
            <div className="fwr flex mb-[1rem] flex-col      lg:flex-row">
              <p className="w-[100%]     lg:w-[24.4%] text-[#1b1b28] text-[13px] px-[5px] capitalize">
                Address
              </p>
              <div className="w-[100%]     lg:w-[68.75%] px-[5px]     lg:px-[15px]">
                <input
                  className="admin-input w-[100%] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                  placeholder="Your Address"
                  value={data[0].value}
                  onChange={(e) => handleChangeAddress(e, 0)}
                />
              </div>
            </div>

            {/* Country */}
            <div className="fwr flex mb-[1rem] flex-col      lg:flex-row">
              <p className="w-[100%]     lg:w-[24.4%] text-[#1b1b28] text-[13px] px-[5px] capitalize">
                Country
              </p>
              <div className="ddd w-[100%]     lg:w-[68.75%] px-[5px]     lg:px-[15px]">
                <div
                  className="ddd admin-input relative w-[100%] h-[44px] leading-[30px] text-[#b7b7b7] text-[1rem] bg-[#fff] border-[1px]  rounded-[.25rem] py-[0.375rem] px-[0.75rem] border-[#ced4da] cursor-pointer    before:absolute before:w-[0] before:h-[0] before:border-[4px] before:border-t-[#b7b7b7] before:border-l-[transparent] before:border-r-[transparent] before:border-b-[transparent] before:top-[18px] before:right-[10px]"
                  id="countrySelect"
                >
                  <div onClick={() => openSelect('country')} className="ddd capitalize">
                    {selectedCountry ? selectedCountry : ""}
                  </div>
                  <div
                    ref={countrySelect}
                    className="ddd absolute w-[100%] left-0 top-[43px] z-[1] dnone"
                  >
                    <div className="ddd w-[100%] mt-[0px] py-[10px] bg-[#fff] z-[2] border-[1px] border-[#00000026] drop-shadow-[0_0px_50px_rgba(82,63,105,15%)]">
                      <div className="ddd py-[4px] px-[8px]">
                        <input
                          onChange={(e) => countryChangeHandler(e, countryNames)}
                          className="ddd admin-input w-[100%] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                        />
                      </div>
                      <ul className="ddd h-[300px] overflow-scroll">
                        {countryNamesForShow.map((value, index) => {
                          return (
                            <li
                              key={index * 4}
                              onClick={() => setCountry(value)}
                              className={`ddd ${value == selectedCountry
                                ? styles.active_option
                                : ""
                                } capitalize block text-[#212529] text-[1rem] py-[0.25rem] px-[1rem] hover:bg-[#c53a24] hover:text-[#fff] taPoint3`}
                            >
                              {value}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* City Select */}
            <div className="fwr flex mb-[1rem] flex-col      lg:flex-row">
              <p className="w-[100%]     lg:w-[24.4%] text-[#1b1b28] text-[13px] px-[5px] capitalize">
                City
              </p>
              <div className="ddd w-[100%]     lg:w-[68.75%] px-[5px]     lg:px-[15px]">
                <div
                  className="ddd admin-input relative w-[100%] h-[44px] leading-[30px] text-[#b7b7b7] text-[1rem] bg-[#fff] border-[1px]  rounded-[.25rem] py-[0.375rem] px-[0.75rem] border-[#ced4da] cursor-pointer    before:absolute before:w-[0] before:h-[0] before:border-[4px] before:border-t-[#b7b7b7] before:border-l-[transparent] before:border-r-[transparent] before:border-b-[transparent] before:top-[18px] before:right-[10px]"
                  id="citySelect"
                >
                  <div onClick={() => openSelect('city')} className="ddd capitalize">
                    {selectedCity ? selectedCity : ""}
                  </div>
                  <div
                    ref={citySelect}
                    className="ddd absolute w-[100%] left-0 top-[43px] z-[1] dnone"
                  >
                    <div className="ddd w-[100%] mt-[0px] py-[10px] bg-[#fff] z-[2] border-[1px] border-[#00000026] drop-shadow-[0_0px_50px_rgba(82,63,105,15%)]">
                      <div className="ddd py-[4px] px-[8px]">
                        <input
                          onChange={(e) => cityChangeHandler(e, cityNames)}
                          className="ddd admin-input w-[100%] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                        />
                      </div>
                      <ul className="ddd h-[200px] overflow-scroll">
                        {cityNamesForShow.map((value, index) => {
                          return (
                            <li
                              key={index * 4}
                              onClick={() => setCity(value)}
                              className={`ddd ${value == selectedCity
                                ? styles.active_option
                                : ""
                                } capitalize block text-[#212529] text-[1rem] py-[0.25rem] px-[1rem] hover:bg-[#c53a24] hover:text-[#fff] taPoint3`}
                            >
                              {value}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* Area */}
            <div className="fwr flex mb-[1rem] flex-col      lg:flex-row">
              <p className="w-[100%]     lg:w-[24.4%] text-[#1b1b28] text-[13px] px-[5px] capitalize">
                Area
              </p>
              <div className="w-[100%]     lg:w-[68.75%] px-[5px]     lg:px-[15px]">
                <input
                  className="admin-input w-[100%] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                  placeholder="Your Area"
                  value={data[3].value}
                  onChange={(e) => handleChangeAddress(e, 3)}
                />
              </div>
            </div>


            {/* Postal Code */}
            <div className="fwr flex mb-[1rem] flex-col      lg:flex-row">
              <p className="w-[100%]     lg:w-[24.4%] text-[#1b1b28] text-[13px] px-[5px] capitalize">
                Postal Code
              </p>
              <div className="w-[100%]     lg:w-[68.75%] px-[5px]     lg:px-[15px]">
                <input
                  className="admin-input w-[100%] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                  placeholder="Your Postal Code"
                  value={data[1].value}
                  onChange={(e) => handleChangeAddress(e, 1)}
                />
              </div>
            </div>


            {/* Phone */}
            <div className="fwr flex mb-[1rem] flex-col      lg:flex-row">
              <p className="w-[100%]     lg:w-[24.4%] text-[#1b1b28] text-[13px] px-[5px] capitalize">
                Phone
              </p>
              <div className="w-[100%]     lg:w-[68.75%] px-[5px]     lg:px-[15px]">
                <input
                  className="admin-input w-[100%] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                  placeholder="+880"
                  value={data[5].value}
                  onChange={(e) => handleChangeAddress(e, 5)}
                />
              </div>
            </div>

            <div className="h-[100%] flex justify-between flex-col">

              <div className="flex justify-end">


                <button onClick={() => saveAddress()} className="light-brown-btn ffr text-[0.875rem] text-[#fff] h-[40px] leading-[40px] tracking-[0.5px] uppercase bg-[#c83e27] block px-[15px] m-[.25rem]">
                  save
                </button>
              </div>
            </div>
          </CardBody>


        </div>
      </div>
    </>
  );
}

export default ModalNewAddress;
