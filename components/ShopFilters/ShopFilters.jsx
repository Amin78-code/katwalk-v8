import React, { useState, useEffect, useRef } from "react";
import styles from "./ShopFilters.module.css";
import {
  IoChevronDown,
  IoCloseOutline,
} from "react-icons/io5";
import DesignerFilter from "./DesignerFilter";
import SizeFilter from "./SizeFilter";
import ColorFilter from "./ColorFilter";
import PriceFilter from "./PriceFilter";
import SortByFilter from "./SortByFilter";

const allDesigners = [
  {
    alphabet: "C",
    designers: ["Clue"],
  },
  {
    alphabet: "E",
    designers: ["Estilo Designs"],
  },
  {
    alphabet: "F",
    designers: ["Fouz Couture", "Fourteen Ten"],
  },
  {
    alphabet: "G",
    designers: ["Gmash"],
  },

  {
    alphabet: "K",
    designers: ["Kaf By Kaf"],
  },

  {
    alphabet: "M",
    designers: ["Maliha", "Muna Mattar"],
  },

  {
    alphabet: "N",
    designers: ["Nada Line", "Nakhlah"],
  },

  {
    alphabet: "R",
    designers: ["Raw Mestika"],
  },

  {
    alphabet: "Z",
    designers: ["Zahra Line"],
  },

  {
    alphabet: "",
    designers: ["ثمانية", "ولاء كاظم"],
  },
];
const allSizes = [
  "50",
  "52",
  "54",
  "56",
  "58",
  "60",
  "14 UK size",
  "Free size",
];
const allPriceRanges = [
  "SAR 500 - 1000",
  "SAR 10000 - 1500",
  "SAR 1500 - 2000",
  "> SAR 2000",
];
const allColors = {
  group1: [
    {
      name: "gray",
      colorCode: "bg-[#808080]",
    },
    {
      name: "black",
      colorCode: "bg-[#000000]",
    },
    {
      name: "pink",
      colorCode: "bg-[#FFC0CB]",
    },
  ],
};
const sortByMethods = [
  "What's New",
  "Best Seller",
  "Price from high to low",
  "Price from low to hight",
];

function ShopFilters({ forDesigner }) {
  const category_dropdown = useRef("");
  const size_dropdown = useRef("");
  const designer_dropdown = useRef("");
  const color_dropdown = useRef("");
  const price_dropdown = useRef("");
  const sort_by_dropdown = useRef("");

  const designerChevron = useRef(null);
  const sizeChevron = useRef(null);
  const colorChevron = useRef(null);
  const priceChevron = useRef(null);
  const sortByChevron = useRef(null);
  const categoryChevron = useRef(null);

  const designerPlus = useRef(null);
  const sizePlus = useRef(null);
  const colorPlus = useRef(null);
  const pricePlus = useRef(null);
  const sortByPlus = useRef(null);
  const categoryPlus = useRef(null);

  const allFiltersMainDiv = useRef(null);
  const resetAllFilterAndCrossDiv = useRef(null);

  const [currentSelectedSizeee, setCurrentSelectedSizeee] = useState([]);
  const [currentSelectedPricee, setCurrentSelectedPricee] = useState([]);
  const [currectSelectedColor, setCurrectSelectedColor] = useState("");
  const [currectSelectedPrice, setCurrectSelectedPrice] = useState("");
  const [currectSelectedSortBy, setCurrectSelectedSortBy] = useState("");

  const [allDesignersForShow, setAllDesignersForShow] = useState([
    {
      alphabet: "C",
      designers: ["Clue"],
    },
    {
      alphabet: "E",
      designers: ["Estilo Designs"],
    },
    {
      alphabet: "F",
      designers: ["Fouz Couture", "Fourteen Ten"],
    },
    {
      alphabet: "G",
      designers: ["Gmash"],
    },

    {
      alphabet: "K",
      designers: ["Kaf By Kaf"],
    },

    {
      alphabet: "M",
      designers: ["Maliha", "Muna Mattar"],
    },

    {
      alphabet: "N",
      designers: ["Nada Line", "Nakhlah"],
    },

    {
      alphabet: "R",
      designers: ["Raw Mestika"],
    },

    {
      alphabet: "Z",
      designers: ["Zahra Line"],
    },

    {
      alphabet: "",
      designers: ["ثمانية", "ولاء كاظم"],
    },
  ]);

  const choosingFilterOption = (selectedOption, filterName) => {
    if (filterName == "sizeFilter") {
      if (currentSelectedSizeee.length == 0) {
        let _currentSelectedSizeee = currentSelectedSizeee;
        for (let i = 0; i < allSizes.length; i++) {
          _currentSelectedSizeee.push({ value: allSizes[i], status: false });
        }
        setCurrentSelectedSizeee(_currentSelectedSizeee);
      }

      let __currentSelectedSizeee = currentSelectedSizeee;
      for (let j = 0; j < __currentSelectedSizeee.length; j++) {
        if (__currentSelectedSizeee[j].value == selectedOption) {
          __currentSelectedSizeee[j].status =
            !__currentSelectedSizeee[j].status;
        }
      }
      setCurrentSelectedSizeee([...__currentSelectedSizeee]);
    } else if (filterName == "colorFilter") {
      setCurrectSelectedColor(selectedOption);
    } else if (filterName == "prizeFilter") {
      if (currentSelectedPricee.length == 0) {
        let _currentSelectedPricee = currentSelectedPricee;
        for (let i = 0; i < allPriceRanges.length; i++) {
          _currentSelectedPricee.push({
            value: allPriceRanges[i],
            status: false,
          });
        }
        setCurrentSelectedPricee(_currentSelectedPricee);
      }

      let __currentSelectedPricee = currentSelectedPricee;
      for (let j = 0; j < __currentSelectedPricee.length; j++) {
        if (__currentSelectedPricee[j].value == selectedOption) {
          __currentSelectedPricee[j].status =
            !__currentSelectedPricee[j].status;
        }
      }
      setCurrentSelectedPricee([...__currentSelectedPricee]);
    } else if (filterName == "sortByFilter") {
      setCurrectSelectedSortBy(selectedOption);
    }
  };

  const openAllFiltersMainDiv = () => {
    allFiltersMainDiv.current.classList.add("toggle-all-filters-main-div");
    resetAllFilterAndCrossDiv.current.classList.add("dflex");
  };

  const closeAllFiltersMainDiv = () => {
    allFiltersMainDiv.current.classList.remove("toggle-all-filters-main-div");
    resetAllFilterAndCrossDiv.current.classList.remove("dflex");
  };

  // useEffect(() => {
  // const scrollFuntion = () => {
  //   category_dropdown.current.classList.remove("f-in");
  //   size_dropdown.current.classList.remove("f-in");
  //   designer_dropdown.current.classList.remove("f-in");
  //   color_dropdown.current.classList.remove("f-in");
  //   price_dropdown.current.classList.remove("f-in");
  //   sort_by_dropdown.current.classList.remove("f-in");

  //   categoryChevron.current.classList.remove("rotate180b");

  //   sizeChevron.current.classList.remove("rotate180b");

  //   priceChevron.current.classList.remove("rotate180b");

  //   designerChevron.current.classList.remove("rotate180b");

  //   colorChevron.current.classList.remove("rotate180b");

  //   sortByChevron.current.classList.remove("rotate180b");
  // };
  // window.addEventListener("scroll", scrollFuntion());
  // return () => {
  //   window.removeEventListener("scroll", scrollFuntion());
  // };
  // }, []);

  function openDropdown(dropdownName) {
    if (category_dropdown !== dropdownName) {
      if (category_dropdown.current.classList.contains("f-in")) {
        category_dropdown.current.classList.remove("f-in");
        categoryChevron.current.classList.toggle("rotate180b");
      }
    }

    if (size_dropdown !== dropdownName) {
      if (size_dropdown.current.classList.contains("f-in")) {
        size_dropdown.current.classList.remove("f-in");
        sizeChevron.current.classList.toggle("rotate180b");
      }
    }

    if (designer_dropdown !== dropdownName) {
      if (designer_dropdown.current.classList.contains("f-in")) {
        designer_dropdown.current.classList.remove("f-in");
        designerChevron.current.classList.toggle("rotate180b");
      }
    }
    if (color_dropdown !== dropdownName) {
      if (color_dropdown.current.classList.contains("f-in")) {
        color_dropdown.current.classList.remove("f-in");
        colorChevron.current.classList.toggle("rotate180b");
      }
    }
    if (price_dropdown !== dropdownName) {
      if (price_dropdown.current.classList.contains("f-in")) {
        price_dropdown.current.classList.remove("f-in");
        priceChevron.current.classList.toggle("rotate180b");
      }
    }
    if (sort_by_dropdown !== dropdownName) {
      if (sort_by_dropdown.current.classList.contains("f-in")) {
        sort_by_dropdown.current.classList.remove("f-in");

        sortByChevron.current.classList.toggle("rotate180b");
      }
    }
    if (dropdownName.current.classList.contains("f-in") == true) {
      dropdownName.current.classList.remove("f-in");
    } else {
      dropdownName.current.classList.add("f-in");
    }

    if (category_dropdown == dropdownName) {
      categoryChevron.current.classList.toggle("rotate180b");
      categoryPlus.current.classList.toggle("minus-icon");
    }
    if (size_dropdown == dropdownName) {
      sizeChevron.current.classList.toggle("rotate180b");
      sizePlus.current.classList.toggle("minus-icon");
    }
    if (designer_dropdown == dropdownName) {
      designerChevron.current.classList.toggle("rotate180b");
      designerPlus.current.classList.toggle("minus-icon");
    }
    if (color_dropdown == dropdownName) {
      colorChevron.current.classList.toggle("rotate180b");
      colorPlus.current.classList.toggle("minus-icon");
    }
    if (price_dropdown == dropdownName) {
      priceChevron.current.classList.toggle("rotate180b");
      pricePlus.current.classList.toggle("minus-icon");
    }
    if (sort_by_dropdown == dropdownName) {
      sortByChevron.current.classList.toggle("rotate180b");
      sortByPlus.current.classList.toggle("minus-icon");
    }
  }

  const resetAllFilters = () => {
    setCurrentSelectedSizeee("");
    setCurrectSelectedPricee("");
    setCurrectSelectedSortBy("");
  };

  const changeHandler = (e, filterName) => {
    // console.log("initialData==>", e, filterName);

    let _allDesigners = filterName;

    let __allDesigners = [];

    for (let i = 0; i < _allDesigners.length; i++) {
      __allDesigners.push(filterName[i]);
    }
    console.log("e.target.value", e.target.value);
    console.log("__allDesigners", __allDesigners);
    const startsWithN = __allDesigners.filter((country) =>
      country.alphabet.startsWith(e.target.value.toUpperCase())
    );
    setAllDesignersForShow([]);
    setAllDesignersForShow(startsWithN);
    console.log("startsWithN", startsWithN);
  };

  return (
    <>
      <div className="w-[100%] pt-[0px] px-[16px]       lg:pt-[30px]">
        {forDesigner == true ? (
          <>
            <div
              className={`text-center pb-0 mb-[20px] block pt-[30px]      lg:mb-0 lg:text-left lg:pt-0 sm:mb-[30px]`}
            >
              <p className="fwl text-[20px] tracking-[0.5px] uppercase mt-[-10px] pb-[0px]">
                NADA LINE PRODUCTS
              </p>
            </div>
          </>
        ) : (
          <>
            <div
              className={`${styles.center_heading_div} flex text-center main-title`}
            >
              <p className="fwl text-[20px] tracking-[0.5px] uppercase mt-[-2px] pb-[22px]">
                all products
              </p>
            </div>
          </>
        )}

        <div className={`${styles.right_heading_div} flex justify-end`}>
          <p
            className="fwr self-end text-[13px] text-[#c53a19] tracking-[0.5px] pr-[20px] cursor-pointer"
            onClick={() => resetAllFilters()}
          >
            {forDesigner == true ? "Reset filters" : "Reset All filters"}
          </p>
        </div>
        <div
          className={`filter-main-div border-[#b1b1b1] border-t-[0px] border-b-[0px]      md:border-t-[1px] md:border-b-[1px]`}
        >
          <div className={` w-[100%] hidden flex-start px-[10px]`}>
            <h3 className="fwl text-[#000] text-[13px] uppercase h-[34px] leading-[40px]">
              filters
            </h3>
          </div>

          <div
            className={`${styles.filters_heading} w-[100%] flex justify-between flex-start px-[10px]    lg:hidden`}
          >
            <h3
              className="fwl text-[#000] text-[13px] uppercase h-[34px] leading-[40px]"
              onClick={() => openAllFiltersMainDiv()}
            >
              filters
            </h3>
            <div
              className="flex  items-center hidden mb-[20px]"
              ref={resetAllFilterAndCrossDiv}
            >
              <h3
                className="fwl text-[#000] text-[13px] uppercase h-[34px] leading-[40px] cursor-pointer"
                onClick={() => resetAllFilters()}
              >
                reset all filters
              </h3>
              <IoCloseOutline
                className="ml-[10px] text-[25px]"
                onClick={() => closeAllFiltersMainDiv()}
              />
            </div>
          </div>

          <div
            ref={allFiltersMainDiv}
            className={`${styles.all_filters_div} hidden border-[#C53A19] border-t-[1px] lg:border-[0] lg:flex max-h-[100%]`}
          >
            <div
              className={`${styles.active} single-filter flex-1 relative cursor-pointer`}
            >
              <div
                className={`ddd flex justify-between items-center border-[#b1b1b1] border-b-[1px] lg:border-[0]`}
                onClick={() => openDropdown(category_dropdown)}
              >
                <p className="ddd fwl uppercase lg:capitalize text-[#1b1b28] text-[12px] lg:text-[11px] my-[8px] lg:my-[13px] px-[16px] h-[22px] leading-[22px] flex">
                  <div
                    ref={categoryPlus}
                    className={`ddd taPoint3 hidde n      lg:bloc k ${styles.plus_icon} block lg:hidden w-[20px] mr-[15px]`}
                  ></div>
                  category
                </p>
                <div
                  ref={categoryChevron}
                  className="ddd taPoint3 hidden     lg:block"
                >
                  <IoChevronDown className="ddd mr-[10px] text-[" />
                </div>
              </div>
              <div
                className={`ddd w-[100%] lg:w-[300px] border-[#fbf1e8] border-[1px] relative lg:absolute 
 pt-[20px] lg:pt-0 z-[2] bg-[#fff] f-out`}
                ref={category_dropdown}
              >
                <div className="ddd flex px-[15px] w-[100%] max-h-[350px] overflow-auto">
                  <div className="ddd w-[100%]">
                    <div className="ddd form-check taPoint3 cursor-pointer py-[7px] flex items-center relative">
                      <input
                        className="ddd w-[28px] form-check-input appearance-none border border-[#fbf1e8] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer w-[25px] h-[25px]"
                        type="checkbox"
                        value=""
                        id="categ1"
                      />
                      <label
                        className="ddd block w-[100%] fwr text-[11px] leading-[25px] text-[#000] capitalize form-check-label inline-block text-gray-800 pt-[4px] pl-[5px]"
                        htmlFor="categ1"
                      >
                        abaya
                      </label>
                    </div>
                    <div className="ddd form-check taPoint3 cursor-pointer py-[7px] flex items-center relative">
                      <input
                        className="ddd w-[28px] form-check-input appearance-none border border-[#fbf1e8] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer w-[25px] h-[25px]"
                        type="checkbox"
                        value=""
                        id="categ2"
                      />
                      <label
                        className="ddd block w-[100%] fwr text-[11px] leading-[25px] text-[#000] capitalize form-check-label inline-block text-gray-800 pt-[4px] pl-[5px]"
                        htmlFor="categ2"
                      >
                        kaftan
                      </label>
                    </div>
                    <div className="ddd form-check taPoint3 cursor-pointer py-[7px] flex items-center relative">
                      <input
                        className="ddd w-[28px] form-check-input appearance-none border border-[#fbf1e8] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer w-[25px] h-[25px]"
                        type="checkbox"
                        value=""
                        id="categ3"
                      />
                      <label
                        className="ddd block w-[100%] fwr text-[11px] leading-[25px] text-[#000] capitalize form-check-label inline-block text-gray-800 pt-[4px] pl-[5px]"
                        htmlFor="categ3"
                      >
                        dress
                      </label>
                    </div>
                    <div className="ddd form-check taPoint3 cursor-pointer py-[7px] flex items-center relative">
                      <input
                        className="ddd w-[28px] form-check-input appearance-none border border-[#fbf1e8] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer w-[25px] h-[25px]"
                        type="checkbox"
                        value=""
                        id="categ4"
                      />
                      <label
                        className="ddd block w-[100%] fwr text-[11px] leading-[25px] text-[#000] capitalize form-check-label inline-block text-gray-800 pt-[4px] pl-[5px]"
                        htmlFor="categ4"
                      >
                        farwa
                      </label>
                    </div>
                    <div className="ddd form-check taPoint3 cursor-pointer py-[7px] flex items-center relative">
                      <input
                        className="ddd w-[28px] form-check-input appearance-none border border-[#fbf1e8] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer w-[25px] h-[25px]"
                        type="checkbox"
                        value=""
                        id="categ5"
                      />
                      <label
                        className="ddd block w-[100%] fwr text-[11px] leading-[25px] text-[#000] capitalize form-check-label inline-block text-gray-800 pt-[4px] pl-[5px]"
                        htmlFor="categ5"
                      >
                        kimaono
                      </label>
                    </div>

                    <div className="ddd form-check taPoint3 cursor-pointer py-[7px] flex items-center relative">
                      <input
                        className="ddd w-[28px] form-check-input appearance-none border border-[#fbf1e8] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer w-[25px] h-[25px]"
                        type="checkbox"
                        value=""
                        id="categ6"
                      />
                      <label
                        className="ddd block w-[100%] fwr text-[11px] leading-[25px] text-[#000] capitalize form-check-label inline-block text-gray-800 pt-[4px] pl-[5px]"
                        htmlFor="categ6"
                      >
                        embroidery
                      </label>
                    </div>
                    <div className="ddd form-check taPoint3 cursor-pointer py-[7px] flex items-center relative">
                      <input
                        className="ddd w-[28px] form-check-input appearance-none border border-[#fbf1e8] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer w-[25px] h-[25px]"
                        type="checkbox"
                        value=""
                        id="categ7"
                      />
                      <label
                        className="ddd block w-[100%] fwr text-[11px] leading-[25px] text-[#000] capitalize form-check-label inline-block text-gray-800 pt-[4px] pl-[5px]"
                        htmlFor="categ7"
                      >
                        printing bloom
                      </label>
                    </div>
                    <div className="ddd form-check taPoint3 cursor-pointer py-[7px] flex items-center relative">
                      <input
                        className="ddd w-[28px] form-check-input appearance-none border border-[#fbf1e8] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer w-[25px] h-[25px]"
                        type="checkbox"
                        value=""
                        id="categ8"
                      />
                      <label
                        className="ddd block w-[100%] fwr text-[11px] leading-[25px] text-[#000] capitalize form-check-label inline-block text-gray-800 pt-[4px] pl-[5px]"
                        htmlFor="categ8"
                      >
                        casual
                      </label>
                    </div>
                    <div className="ddd form-check taPoint3 cursor-pointer py-[7px] flex items-center relative">
                      <input
                        className="ddd w-[28px] form-check-input appearance-none border border-[#fbf1e8] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer w-[25px] h-[25px]"
                        type="checkbox"
                        value=""
                        id="categ9"
                      />
                      <label
                        className="ddd block w-[100%] fwr text-[11px] leading-[25px] text-[#000] capitalize form-check-label inline-block text-gray-800 pt-[4px] pl-[5px]"
                        htmlFor="categ9"
                      >
                        formal
                      </label>
                    </div>
                    <div className="ddd form-check taPoint3 cursor-pointer py-[7px] flex items-center relative">
                      <input
                        className="ddd w-[28px] form-check-input appearance-none border border-[#fbf1e8] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer w-[25px] h-[25px]"
                        type="checkbox"
                        value=""
                        id="categ10"
                      />
                      <label
                        className="ddd block w-[100%] fwr text-[11px] leading-[25px] text-[#000] capitalize form-check-label inline-block text-gray-800 pt-[4px] pl-[5px]"
                        htmlFor="categ10"
                      >
                        suit
                      </label>
                    </div>
                    <div className="ddd form-check taPoint3 cursor-pointer py-[7px] flex items-center relative">
                      <input
                        className="ddd w-[28px] form-check-input appearance-none border border-[#fbf1e8] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer w-[25px] h-[25px]"
                        type="checkbox"
                        value=""
                        id="categ11"
                      />
                      <label
                        className="ddd block w-[100%] fwr text-[11px] leading-[25px] text-[#000] capitalize form-check-label inline-block text-gray-800 pt-[4px] pl-[5px]"
                        htmlFor="categ11"
                      >
                        lawns
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ddd flex-1 single-filter relative cursor-pointer">
              <div
                className={`ddd flex justify-between items-center border-[#b1b1b1] border-b-[1px] lg:border-[0]`}
                onClick={() => openDropdown(designer_dropdown)}
              >
                <p className="ddd fwl uppercase lg:capitalize text-[#1b1b28] text-[12px] lg:text-[11px] my-[8px] lg:my-[13px] px-[16px] h-[22px] leading-[22px] flex">
                  <div
                    ref={designerPlus}
                    className={`ddd taPoint3 hidde n      lg:bloc k ${styles.plus_icon} block lg:hidden w-[20px] mr-[15px]`}
                  ></div>
                  designers
                </p>
                <div
                  ref={designerChevron}
                  className="ddd taPoint3 hidden     lg:block"
                >
                  <IoChevronDown className="ddd mr-[10px] text-[" />
                </div>
              </div>
              <DesignerFilter
                designer_dropdown={designer_dropdown}
                // data={allDesigners}
                data={allDesignersForShow}
                changeHandler={changeHandler}
                allDesigners={allDesigners}
              />
            </div>
            <div className="ddd flex-1 single-filter relative cursor-pointer">
              <div
                onClick={() => openDropdown(size_dropdown)}
                className={`ddd flex justify-between items-center  border-[#b1b1b1] border-b-[1px] lg:border-[0]`}
              >
                <p className="ddd fwl uppercase lg:capitalize text-[#1b1b28] text-[12px] lg:text-[11px] my-[8px] lg:my-[13px] px-[16px] h-[22px] leading-[22px] flex">
                  <div
                    ref={sizePlus}
                    className={`ddd taPoint3 hidde n      lg:bloc k ${styles.plus_icon} block lg:hidden w-[20px] mr-[15px]`}
                  ></div>
                  size
                </p>
                <div ref={sizeChevron} className="ddd taPoint3 hidden     lg:block">
                  <IoChevronDown className="ddd mr-[10px] text-[" />
                </div>
              </div>
              <SizeFilter
                size_dropdown={size_dropdown}
                data={allSizes}
                choosingFilterOption={choosingFilterOption}
                currentSelectedSizeee={currentSelectedSizeee}
                filterName={"sizeFilter"}
              />
            </div>
            <div className="ddd flex-1 single-filter relative cursor-pointer">
              <div
                onClick={() => openDropdown(color_dropdown)}
                className={`ddd flex justify-between items-center  border-[#b1b1b1] border-b-[1px] lg:border-[0]`}
              >
                <p className="ddd fwl uppercase lg:capitalize text-[#1b1b28] text-[12px] lg:text-[11px] my-[8px] lg:my-[13px] px-[16px] h-[22px] leading-[22px] flex">
                  <div
                    ref={colorPlus}
                    className={`ddd taPoint3 hidde n      lg:bloc k ${styles.plus_icon} block lg:hidden w-[20px] mr-[15px]`}
                  ></div>
                  color
                </p>
                <div
                  ref={colorChevron}
                  className="ddd taPoint3 hidden      lg:block"
                >
                  <IoChevronDown className="ddd mr-[10px] text-[" />
                </div>
              </div>
              <ColorFilter
                color_dropdown={color_dropdown}
                data={allColors}
                choosingFilterOption={choosingFilterOption}
                currectSelected={currectSelectedColor}
                filterName={"colorFilter"}
              />
            </div>
            <div className="ddd flex-1 single-filter relative cursor-pointer">
              <div
                onClick={() => openDropdown(price_dropdown)}
                className={`ddd flex justify-between items-center  border-[#b1b1b1] border-b-[1px] lg:border-[0]`}
              >
                <p className="ddd fwl uppercase lg:capitalize text-[#1b1b28] text-[12px] lg:text-[11px] my-[8px] lg:my-[13px] px-[16px] h-[22px] leading-[22px] flex">
                  <div
                    ref={pricePlus}
                    className={`ddd taPoint3 hidde n      lg:bloc k ${styles.plus_icon} block lg:hidden w-[20px] mr-[15px]`}
                  ></div>
                  price
                </p>
                <div
                  ref={priceChevron}
                  className="ddd taPoint3 hidden      lg:block"
                >
                  <IoChevronDown className="ddd mr-[10px] text-[" />
                </div>
              </div>
              <PriceFilter
                price_dropdown={price_dropdown}
                data={allPriceRanges}
                choosingFilterOption={choosingFilterOption}
                currentSelectedPricee={currentSelectedPricee}
                filterName={"prizeFilter"}
              />
            </div>
            <div className="ddd flex-1 single-filter relative cursor-pointer">
              <div
                onClick={() => openDropdown(sort_by_dropdown)}
                className={`ddd flex justify-between items-center  border-[#b1b1b1] border-b-[1px] lg:border-[0]`}
              >
                <p className="ddd fwl uppercase lg:capitalize text-[#1b1b28] text-[12px] lg:text-[11px] my-[8px] lg:my-[13px] px-[16px] h-[22px] leading-[22px] flex">
                  <div
                    ref={sortByPlus}
                    className={`ddd taPoint3 hidde n      lg:bloc k ${styles.plus_icon} block lg:hidden w-[20px] mr-[15px]`}
                  ></div>
                  sorty by
                </p>
                <div
                  ref={sortByChevron}
                  className="ddd taPoint3 hidden     lg:block"
                >
                  <IoChevronDown className={`mr-[10px]`} />
                </div>
              </div>
              <SortByFilter
                sort_by_dropdown={sort_by_dropdown}
                data={sortByMethods}
                choosingFilterOption={choosingFilterOption}
                currectSelected={currectSelectedSortBy}
                filterName={"sortByFilter"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopFilters;
