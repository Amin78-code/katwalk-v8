import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Layout from "../../components/rtl/layout/Layout";
import productImg1 from "../../assets/images/products/orange-1/img3.jpg";
import productImg2 from "../../assets/images/products/product2.jpg";
import productImg3 from "../../assets/images/products/product3.jpg";
import productImg4 from "../../assets/images/products/product4.jpg";
import img1 from "../../assets/images/products/orange-1/img1.jpg";
import img2 from "../../assets/images/products/orange-1/img2.jpg";
import img3 from "../../assets/images/products/orange-1/img3.jpg";
import img4 from "../../assets/images/products/orange-1/img4.jpg";
import AbayaSetwithSideSlet from "../../assets/images/products/white-abaya-set/Abaya Set with Side Slet.jpg";
import AbayaSetwithSideSlet1 from "../../assets/images/products/white-abaya-set/Abaya Set with Side Slet.jpg";
import AbayaSetwithSideSlet2 from "../../assets/images/products/white-abaya-set/E0O4w2XoNtokGjNw2fQhpfcyB8x4b2zuBLnbHeI1.jpg";
import AbayaSetwithSideSlet3 from "../../assets/images/products/white-abaya-set/hyxun9TVXPODB99XtMjOglAwbK3b3zfbAu1hAjXq.jpg";
import AbayaSetwithSideSlet4 from "../../assets/images/products/white-abaya-set/sPoGXgIWzIfcOk1I3viLm1hduFzGuJlS61hIO0Ic.jpg";
import MulticolorPrintedAbaya from "../../assets/images/products/multicolor-printed-abaya/MulticolorPrintedAbaya.jpg";
import MulticolorPrintedAbaya1 from "../../assets/images/products/multicolor-printed-abaya/MulticolorPrintedAbaya.jpg";
import MulticolorPrintedAbaya2 from "../../assets/images/products/multicolor-printed-abaya/fkTVEMAP8QV2btFOZiYJTGpS7RWDZ62vfnSgHcpc.jpg";
import MulticolorPrintedAbaya3 from "../../assets/images/products/multicolor-printed-abaya/utVcX0Bwr2j3aYaQn5mhoecJ6ChnMuOYeyW9diwf.jpg";
import MulticolorPrintedAbaya4 from "../../assets/images/products/multicolor-printed-abaya/sduvuVP5LzgQ6qFpIdaNvjBHROBVNDFtD952PwQR.jpg";
import ColorBox from "../../components/rtl/color-box/ColorBox";
import { BsChevronDown } from "react-icons/bs";
import ProductSlider from "../../components/rtl/product-slider/Product-slider";
import OtherProducts from "../../components/rtl/other-products/OtherProducts";
import styles from "../../components/rtl/productDetails.module.css";
import SizeGuideModal from "../../components/rtl/size-guide-modal/SizeGuideModal";
import MessageModal from "../../components/rtl/message-modal/MessageModal";
import MSD_Box from "../../components/rtl/msd-box/MSD_Box";
import ProductSliderForSheila from "../../components/rtl/ProductSliderForSheila/ProductSliderForSheila";
import SheilaDesignBox from "../../components/rtl/sheila-design-box/SheilaDesignBox";


const basicColors = [
  {
    name: "Orange",
    colorCode: "bg-[#FFA500]",
  },
];
const sheilaColor = [
  {
    name: "Dodger Blue",
    colorCode: "bg-[#1E90FF]",
  },
  {
    name: "Orange",
    colorCode: "bg-[#FFA500]",
  },
  {
    name: "red",
    colorCode: "bg-[#ff0000]",
  },
];

const selectSize = ["50", "52", "54"];

const alterationLength = [" ???????????? ??????????", "50", "52", "54", "56", "58"];
const alterationBust = ["???????????? ??????????", "20", "22", "23", "25", "26", "28"];
const alterationSleeve = [" ???????????? ?????? ???????? ", "25", "26", "27", "28", "29"];

const selectSheilaLength = ["200cm", "170cm", "150cm"];

const otherProducts = [
  {
    img: productImg1,
    companyName: "Nada Line",
    productName: "Metallic Print Abaya",
    price: "760",
  },
  {
    img: productImg2,
    companyName: "Nada Line",
    productName: "Black Beaded Embroidery Abaya",
    price: "1.125",
  },
  {
    img: productImg3,
    companyName: "Nada Line",
    productName: "Crinkled Abaya with Printed Pattern",
    price: "760",
  },
  {
    img: productImg4,
    companyName: "Nada Line",
    productName: "Color Block Crinkled Abaya",
    price: "760",
  },
];

function ProductDetail() {
  useEffect(() => {
    document.querySelector("body").style.direction = 'rtl'
  }, [])

  const [sheila, setSheila] = useState({});
  const [basicColor, setBasicColor] = useState({});
  const [sheilaStyle, setSheilaStyle] = useState({});
  const [selectedBasicSize, setSelectedBasicSize] = useState("");
  const [selectedSheilaSize, setSelectedSheilaSize] = useState("");
  const [selectedAlterationLength, setSelectedAlterationLength] = useState("");
  const [selectedAlterationBust, setSelectedAlterationBust] = useState("");
  const [selectedAlterationSleeve, setSelectedAlterationSleeve] = useState("");

  const [sheilaStyles, set_sheilaStyles] = useState([
    {
      name: "Style 1",
      img: AbayaSetwithSideSlet,
      sliderImages: [
        { image: AbayaSetwithSideSlet1 },
        { image: AbayaSetwithSideSlet2 },
        { image: AbayaSetwithSideSlet3 },
        { image: AbayaSetwithSideSlet4 },
      ],
      active: true
    },
    {
      name: "Style 2",
      img: MulticolorPrintedAbaya,
      sliderImages: [
        { image: MulticolorPrintedAbaya1 },
        { image: MulticolorPrintedAbaya2 },
        { image: MulticolorPrintedAbaya3 },
        { image: MulticolorPrintedAbaya4 },
        
      ],
      active: false
    },
  ]);

  const settingBasicColor = (selectedBasicColor) => {
    setBasicColor({ ...selectedBasicColor });
  };

  const settingSheilaStyle = (selectedSheilaStyle) => {
    setSheilaStyle({ ...selectedSheilaStyle });
    let _sheilaStyles = sheilaStyles;
    let forUpdate = [];
    for (let i = 0; i < _sheilaStyles.length; i++) {
      if (_sheilaStyles[i].name == selectedSheilaStyle.name) {
        console.log("yes");
        forUpdate.push({
            name: _sheilaStyles[i].name,
            img: _sheilaStyles[i].img,
            sliderImages:_sheilaStyles[i].sliderImages,
            active: true
        })
        
      } else {
        console.log("else");
        forUpdate.push ({
          name: _sheilaStyles[i].name,
              img: _sheilaStyles[i].img,
              sliderImages:_sheilaStyles[i].sliderImages,
              active: false
        })
      }
    }
    set_sheilaStyles([...forUpdate])
    console.log("forUpdate",forUpdate)
    console.log("sheilaStyles",sheilaStyles)
  };

  const settingSheila = (selectedSheilaColor) => {
    setSheila({ ...selectedSheilaColor });
  };

  const settingVariation = (selectedVariation, variationName) => {
    if (variationName == "basic-size") {
      setSelectedBasicSize(selectedVariation);
      sizeToggler();
    } else if (variationName == "sheila-size") {
      setSelectedSheilaSize(selectedVariation);
      sheilaLengthToggler();
    } else if (variationName == "alteration-length") {
      setSelectedAlterationLength(selectedVariation);
      lengthToggler();
    } else if (variationName == "alteration-bust") {
      setSelectedAlterationBust(selectedVariation);
      bustToggler();
    } else if (variationName == "alteration-sleeve") {
      setSelectedAlterationSleeve(selectedVariation);
      sleeveToggler();
    }
  };
  const [itemAdded, setItemAdded] = useState("[]");
  const [isSecureCheckout, setIsSecureCheckout] = useState("[]");

  const [isVartiationsSelected, setIsVartiationsSelected] = useState(false);

  const [togglerColorsDiv, settogglerColorsDiv] = useState([]);
  const [togglerColorsDivPlusIcon, settogglerColorsDivPlusIcon] = useState([]);

  const [togglerAlterationDiv, setTogglerAlterationDiv] = useState([]);
  const [togglerSizeGuideModal, setTogglerSizeGuideModal] = useState([]);

  const [togglerSheilaColorsDiv, settogglerSheilaColorsDiv] = useState([]);
  const [togglerSheilaColorsDivPlusIcon, settogglerSheilaColorsDivPlusIcon] =
    useState([]);

    const [togglerSheilaStyleDiv, settogglerSheilaStyleDiv] = useState([]);
    const [togglerSheilaStyleDivPlusIcon, settogglerSheilaStyleDivPlusIcon] =
      useState([]);

  const [togglerSize, settogglerSize] = useState([]);
  const [togglerSizePlusIcon, settogglerSizePlusIcon] = useState([]);

  const [togglerLength, setTogglerLength] = useState([]);
  const [togglerLengthPlusIcon, setTogglerLengthPlusIcon] = useState([]);

  const [togglerBust, setTogglerBust] = useState([]);
  const [togglerBustPlusIcon, setTogglerBustPlusIcon] = useState([]);

  const [togglerSleeve, setTogglerSleeve] = useState([]);
  const [togglerSleevePlusIcon, setTogglerSleevePlusIcon] = useState([]);

  const [togglerSheilaLength, settogglerSheilaLength] = useState([]);
  const [togglerSheilaLengthPlusIcon, settogglerSheilaLengthPlusIcon] =
    useState([]);



  const [togglerTab1, settogglerTab1] = useState([]);
  const [togglerTab1PlusIcon, settogglerTab1PlusIcon] = useState([]);

  const [togglerTab2, settogglerTab2] = useState([]);
  const [togglerTab2PlusIcon, settogglerTab2PlusIcon] = useState([]);

  const [togglerTab3, settogglerTab3] = useState([]);
  const [togglerTab3PlusIcon, settogglerTab3PlusIcon] = useState([]);

  const [togglerTab4, settogglerTab4] = useState([]);
  const [togglerTab4PlusIcon, settogglerTab4PlusIcon] = useState([]);



  const colorsDivToggler = () => {
    if (!togglerColorsDiv.includes("show-colors")) {
      settogglerColorsDiv(["show-colors"]);
    } else {
      settogglerColorsDiv([]);
    }
    if (!togglerColorsDivPlusIcon.includes("rotate45")) {
      settogglerColorsDivPlusIcon(["rotate45"]);
    } else {
      settogglerColorsDivPlusIcon([]);
    }
  };
  const sheilaColorsDivToggler = () => {
    if (!togglerSheilaColorsDiv.includes("show-colors")) {
      settogglerSheilaColorsDiv(["show-colors"]);
    } else {
      settogglerSheilaColorsDiv([]);
    }
    if (!togglerSheilaColorsDivPlusIcon.includes("rotate45")) {
      settogglerSheilaColorsDivPlusIcon(["rotate45"]);
    } else {
      settogglerSheilaColorsDivPlusIcon([]);
    }
  };
  const sheilaStyleDivToggler = () => {
    if (!togglerSheilaStyleDiv.includes("show-colors")) {
      settogglerSheilaStyleDiv(["show-colors"]);
    } else {
      settogglerSheilaStyleDiv([]);
    }
    if (!togglerSheilaStyleDivPlusIcon.includes("rotate45")) {
      settogglerSheilaStyleDivPlusIcon(["rotate45"]);
    } else {
      settogglerSheilaStyleDivPlusIcon([]);
    }
  };

  const tab1Toggler = () => {
    if (!togglerTab1.includes("slide-tab")) {
      settogglerTab1(["slide-tab"]);
    } else {
      settogglerTab1([]);
    }
    if (!togglerTab1PlusIcon.includes("rotate180")) {
      settogglerTab1PlusIcon(["rotate180"]);
    } else {
      settogglerTab1PlusIcon([]);
    }
  };

  const tab2Toggler = () => {
    if (!togglerTab2.includes("slide-tab")) {
      settogglerTab2(["slide-tab"]);
    } else {
      settogglerTab2([]);
    }
    if (!togglerTab2PlusIcon.includes("rotate180")) {
      settogglerTab2PlusIcon(["rotate180"]);
    } else {
      settogglerTab2PlusIcon([]);
    }
  };

  const tab3Toggler = () => {
    if (!togglerTab3.includes("slide-tab")) {
      settogglerTab3(["slide-tab"]);
    } else {
      settogglerTab3([]);
    }
    if (!togglerTab3PlusIcon.includes("rotate180")) {
      settogglerTab3PlusIcon(["rotate180"]);
    } else {
      settogglerTab3PlusIcon([]);
    }
  };

  const tab4Toggler = () => {
    if (!togglerTab4.includes("slide-tab")) {
      settogglerTab4(["slide-tab"]);
    } else {
      settogglerTab4([]);
    }
    if (!togglerTab4PlusIcon.includes("rotate180")) {
      settogglerTab4PlusIcon(["rotate180"]);
    } else {
      settogglerTab4PlusIcon([]);
    }
  };

  const alterationDivToggler = () => {
    if (!togglerAlterationDiv.includes("show-alteration-div")) {
      setTogglerAlterationDiv(["show-alteration-div"]);
    } else {
      setTogglerAlterationDiv([]);
    }
  };
  const toggleSizeGuideModal = () => {
    if (!togglerSizeGuideModal.includes("fading-in")) {
      setTogglerSizeGuideModal(["fading-in"]);
    } else {
      setTogglerSizeGuideModal(["fading-out"]);
    }
  };

  togglerSizeGuideModal;

  const sizeToggler = () => {
    // closing others
    if (togglerSheilaLength.includes("d-block")) {
      settogglerSheilaLength([]);
    }
    if (togglerSheilaLengthPlusIcon.includes("rotate180")) {
      settogglerSheilaLengthPlusIcon([]);
    }

    if (togglerLength.includes("d-block")) {
      setTogglerLength([]);
    }
    if (togglerLengthPlusIcon.includes("rotate180")) {
      setTogglerLengthPlusIcon([]);
    }

    if (togglerBust.includes("d-block")) {
      setTogglerBust([]);
    }
    if (togglerBustPlusIcon.includes("rotate180")) {
      setTogglerBustPlusIcon([]);
    }

    if (togglerSleeve.includes("d-block")) {
      setTogglerSleeve([]);
    }
    if (togglerSleevePlusIcon.includes("rotate180")) {
      setTogglerSleevePlusIcon([]);
    }

    // opening this one
    if (!togglerSize.includes("d-block")) {
      settogglerSize(["d-block"]);
    } else {
      settogglerSize([]);
    }
    if (!togglerSizePlusIcon.includes("rotate180")) {
      settogglerSizePlusIcon(["rotate180"]);
    } else {
      settogglerSizePlusIcon([]);
    }
  };

  const sheilaLengthToggler = () => {
    // closing others
    if (togglerSize.includes("d-block")) {
      settogglerSize([]);
    }
    if (togglerSizePlusIcon.includes("rotate180")) {
      settogglerSizePlusIcon([]);
    }

    if (togglerLength.includes("d-block")) {
      setTogglerLength([]);
    }
    if (togglerLengthPlusIcon.includes("rotate180")) {
      setTogglerLengthPlusIcon([]);
    }

    if (togglerBust.includes("d-block")) {
      setTogglerBust([]);
    }
    if (togglerBustPlusIcon.includes("rotate180")) {
      setTogglerBustPlusIcon([]);
    }

    if (togglerSleeve.includes("d-block")) {
      setTogglerSleeve([]);
    }
    if (togglerSleevePlusIcon.includes("rotate180")) {
      setTogglerSleevePlusIcon([]);
    }

    // opening  this one
    if (!togglerSheilaLength.includes("d-block")) {
      settogglerSheilaLength(["d-block"]);
    } else {
      settogglerSheilaLength([]);
    }
    if (!togglerSheilaLengthPlusIcon.includes("rotate180")) {
      settogglerSheilaLengthPlusIcon(["rotate180"]);
    } else {
      settogglerSheilaLengthPlusIcon([]);
    }
  };

  const lengthToggler = () => {
    // closing others
    if (togglerSize.includes("d-block")) {
      settogglerSize([]);
    }
    if (togglerSizePlusIcon.includes("rotate180")) {
      settogglerSizePlusIcon([]);
    }

    if (togglerSheilaLength.includes("d-block")) {
      settogglerSheilaLength([]);
    }
    if (togglerSheilaLengthPlusIcon.includes("rotate180")) {
      settogglerSheilaLengthPlusIcon([]);
    }

    if (togglerBust.includes("d-block")) {
      setTogglerBust([]);
    }
    if (togglerBustPlusIcon.includes("rotate180")) {
      setTogglerBustPlusIcon([]);
    }

    if (togglerSleeve.includes("d-block")) {
      setTogglerSleeve([]);
    }
    if (togglerSleevePlusIcon.includes("rotate180")) {
      setTogglerSleevePlusIcon([]);
    }

    if (!togglerLength.includes("d-block")) {
      setTogglerLength(["d-block"]);
    } else {
      setTogglerLength([]);
    }
    if (!togglerLengthPlusIcon.includes("rotate180")) {
      setTogglerLengthPlusIcon(["rotate180"]);
    } else {
      setTogglerLengthPlusIcon([]);
    }
  };

  const bustToggler = () => {
    // sizeToggler
    // sheilaLengthToggler
    // lengthToggler
    // bustToggler
    // sleeveToggler
    // closing others
    if (togglerSize.includes("d-block")) {
      settogglerSize([]);
    }
    if (togglerSizePlusIcon.includes("rotate180")) {
      settogglerSizePlusIcon([]);
    }

    if (togglerSheilaLength.includes("d-block")) {
      settogglerSheilaLength([]);
    }
    if (togglerSheilaLengthPlusIcon.includes("rotate180")) {
      settogglerSheilaLengthPlusIcon([]);
    }

    if (togglerLength.includes("d-block")) {
      setTogglerLength([]);
    }
    if (togglerLengthPlusIcon.includes("rotate180")) {
      setTogglerLengthPlusIcon([]);
    }

    if (togglerSleeve.includes("d-block")) {
      setTogglerSleeve([]);
    }
    if (togglerSleevePlusIcon.includes("rotate180")) {
      setTogglerSleevePlusIcon([]);
    }

    if (!togglerBust.includes("d-block")) {
      setTogglerBust(["d-block"]);
    } else {
      setTogglerBust([]);
    }
    if (!togglerBustPlusIcon.includes("rotate180")) {
      setTogglerBustPlusIcon(["rotate180"]);
    } else {
      setTogglerBustPlusIcon([]);
    }
  };

  const sleeveToggler = () => {
    // sizeToggler
    // sheilaLengthToggler
    // lengthToggler
    // bustToggler
    // sleeveToggler
    // closing others
    if (togglerSize.includes("d-block")) {
      settogglerSize([]);
    }
    if (togglerSizePlusIcon.includes("rotate180")) {
      settogglerSizePlusIcon([]);
    }

    if (togglerSheilaLength.includes("d-block")) {
      settogglerSheilaLength([]);
    }
    if (togglerSheilaLengthPlusIcon.includes("rotate180")) {
      settogglerSheilaLengthPlusIcon([]);
    }

    if (togglerLength.includes("d-block")) {
      setTogglerLength([]);
    }
    if (togglerLengthPlusIcon.includes("rotate180")) {
      setTogglerLengthPlusIcon([]);
    }

    if (togglerBust.includes("d-block")) {
      setTogglerBust([]);
    }
    if (togglerBustPlusIcon.includes("rotate180")) {
      setTogglerBustPlusIcon([]);
    }

    if (!togglerSleeve.includes("d-block")) {
      setTogglerSleeve(["d-block"]);
    } else {
      setTogglerSleeve([]);
    }
    if (!togglerSleevePlusIcon.includes("rotate180")) {
      setTogglerSleevePlusIcon(["rotate180"]);
    } else {
      setTogglerSleevePlusIcon([]);
    }
  };

  const [listColor, setListColor] = useState([1, 2, 3, 4, 5]);
  const ref = useRef(null);

  const color = useRef("");

  const addToBag = () => {
    if (
      sheila.name == {} ||
      basicColor.name == {} ||
      sheila.name == undefined ||
      basicColor.name == undefined ||
      selectedBasicSize == "" ||
      selectedSheilaSize == ""
    ) {
      setIsVartiationsSelected(true);
      clearTimeout(setTimeout(() => setIsVartiationsSelected(false), 3000));
    } else {
      setIsSecureCheckout(true);
    }
  };

  const closeItemAdded = () => {
    setItemAdded(false);
  };

  const proceedToCheckout = () => {
    setItemAdded(false);
    setIsSecureCheckout(true);
  };

  const closeProceedToCheckout = () => {
    setIsSecureCheckout(false);
  };

  return (
    <>
      <Layout>
        <div className="far container-for-product-detail mt-[60px] lg:mt-[80px] mx-auto">
          <div className="w-[100%] max-w-[ ] flex flex-col      lg:flex-row">
            <div className="max-w-[1090p x] w-[100%] product-slider-div     lg:w-[68%]">
            {sheilaStyles.map((slider)=>{
                return (
                  <>
                  {slider.active == true ?  <ProductSliderForSheila data={slider.sliderImages} /> : ""}
                  </>
                )
              })}
              {/* <ProductSlider data={productImages} /> */}
            </div>
            <div className="product-detail-content-div min-w-[500p x] w-[100%] pl-[45px] pr-[60px]     lg:w-[32%]">
              <p className=" text-[#1b1b28] text-[12px] tracking-[0.1em] mt-[20px] mb-[10px] hidden      md:block">
              ???????????????? / ???????????????? / ?????????? ?????????? ???????????? ?????????????? ????????????????
              </p>
              <h2 className="text-[#1b1b28] text-[18px] tracking-[0.5px] leading-[1.5] mt-[25px]     md:mt-[0]">
              ?????? ????????
              </h2>
              <p className=" text-[#7e7e7e] text-[12px] leading-[1.1] tracking-[0.5px] mt-[12px] uppercase mb-[10px]">
              ?????????? ?????????? ???????????? ?????????????? ????????????????
              </p>
              <p className=" text-[#7e7e7e] text-[20px] leading-[1.1] tracking-[0.5px] mt-[12px] uppercase mb-[10px]      md:text-[12px]">
              ??.??. 640
              </p>

              {/* color */}
              <div className="w-[100%] mb-[20px] cursor-pointer">
                <div
                  className="w-[100%} flex justify-between items-center border-b-[1px] border-[#ededed]"
                  onClick={() => colorsDivToggler()}
                >
                  <div>
                    <h6 className=" text-[12px] mt-[5px] mb-[2px] uppercase">
                      <span className="text-[#ff0032]">*</span>??????????:
                    </h6>
                    <p className="work-regular text-[11px] text-[#7e7e7e] capitalize py-[2px]">
                      Orange
                    </p>
                  </div>
                  <div className="w-[20px] h-[20px] relative">
                    {/* <AiOutlinePlus
                      className={`${togglerColorsDivPlusIcon.join(
                        " "
                      )} taPoint3 text-[22px] text-[#757575]`}
                    ></AiOutlinePlus> */}
                    <div
                      className={`${togglerColorsDivPlusIcon.join(
                        " "
                      )} taPoint3 w-[20px] h-[20px] cross down`}
                    ></div>
                  </div>
                </div>
                <div
                  className={`${togglerColorsDiv.join(
                    " "
                  )} taPoint3 max-h-[0] overflow-hidden`}
                >
                  <h6 className="fwb text-[#1b1b28] text-[13px] pt-[10px] pb-[10px]">
                  ??????????:
                  </h6>
                  <div className="flex gap-x-[3px] pl-[2px] h-[110px]">
                    {basicColors.map((value, index) => {
                      return (
                        <ColorBox
                          key={index}
                          data={value}
                          settingBasicColor={settingBasicColor}
                          currectSelectedColor={basicColor}
                          colorType={"basicColor"}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* sheila color */}
              <div className="w-[100%] cursor-pointer">
                <div
                  className="w-[100%} flex justify-between items-center border-b-[1px] border-[#ededed] mb-[20px]"
                  onClick={() => sheilaColorsDivToggler()}
                >
                  <div>
                    <h6 className=" text-[12px] mt-[5px] mb-[2px] uppercase">
                      <span className="text-[#ff0032]">*</span>?????? ????????????:
                    </h6>
                    <p className=" text-[11px] text-[#7e7e7e] capitalize py-2px]">
                    ???????????? ?????? ????????????
                    </p>
                  </div>
                  <div className="w-[20px] h-[20px] relative">
                    {/* <AiOutlinePlus
                      className={`${togglerSheilaColorsDivPlusIcon.join(
                        " "
                      )} taPoint3 text-[22px] text-[#757575]`}
                    ></AiOutlinePlus> */}
                    <div
                      className={`${togglerSheilaColorsDivPlusIcon.join(
                        " "
                      )} taPoint3 w-[20px] h-[20px] cross down`}
                    ></div>
                  </div>
                </div>
                <div
                  className={`${togglerSheilaColorsDiv.join(
                    " "
                  )} taPoint3 max-h-[0] overflow-hidden`}
                >
                  <h6 className="fwb text-[#1b1b28] text-[13px] pt-[10px] pb-[10px]">
                  ?????? ????????????:
                  </h6>
                  <div className="flex gap-x-[3px] pl-[2px]">
                    {sheilaColor.map((value, index) => {
                      return (
                        <>
                          <ColorBox
                            key={index}
                            data={value}
                            settingSheilaColor={settingSheila}
                            currectSelectedColor={sheila}
                            colorType={"sheilaColor"}
                          />
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* sheila style */}
              <div className="w-[100%]  cursor-pointer">
                <div
                  className="w-[100%] flex justify-between items-center border-b-[1px] border-[#ededed] mb-[20px]"
                  onClick={() => sheilaStyleDivToggler()}
                >
                  <div>
                    <h6 className="work-regular text-[12px] mt-[5px] mb-[2px] uppercase">
                      <span className="text-[#ff0032]">*</span>sheila style:
                    </h6>
                    <p className="work-regular text-[11px] text-[#7e7e7e] capitalize py-2px]">
                      select sheila style
                    </p>
                  </div>
                  <div className="w-[20px] h-[20px] relative">
                    <div
                      className={`${togglerSheilaStyleDivPlusIcon.join(
                        " "
                      )} taPoint3 w-[20px] h-[20px] cross down`}
                    ></div>
                  </div>
                </div>
                <div
                  className={`${togglerSheilaStyleDiv.join(
                    " "
                  )} taPoint3 max-h-[0] overflow-hidden`}
                >
                  <h6 className="fwb text-[#1b1b28] text-[13px] pt-[10px] pb-[10px]">
                    Sheila Style:
                  </h6>
                  <div className="flex gap-x-[3px] pl-[2px]">
                    {sheilaStyles.map((value, index) => {
                      return (
                        <>
                          <SheilaDesignBox
                            key={index}
                            data={value}
                            settingSheila={settingSheilaStyle}
                            currectSelected={sheilaStyle}
                          />
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* size */}
              <div className="w-[100%] cursor-pointer">
                <div className="w-[100%] flex justify-start items-center mb-[20px]">
                  <div className="min-w-[60px] max-w-[60px]">
                    <h6 className="far text-[12px] mt-[-13px] mb-[2px] uppercase">
                      <span className="text-[#ff0032]">*</span>????????:
                    </h6>
                  </div>

                  <div className="pt-[3px] border-b-[1px] border-[#ededed] w-[100%] max-w-[100%] relative">
                    <div
                      className="flex justify-between items-center"
                      onClick={() => sizeToggler()}
                    >
                      <p className="far h-[40px] leading-[40px] text-[11px] text-[#7e7e7e] capitalize">
                        {selectedBasicSize && selectedBasicSize !== ""
                          ? selectedBasicSize
                          : "???????????? ????????:"}
                      </p>

                      <BsChevronDown
                        className={`text-[12px] ${togglerSizePlusIcon.join(
                          " "
                        )} taPoint3`}
                      />
                    </div>
                    <div
                      className={`${togglerSize.join(" ")} ${styles.variation_dropdowns
                        } w-[100%] border-[#fbf1e8] border-[1px] border-b-[0] absolute bg-[#fff] z-[2] hidden`}
                    >
                      {selectSize.map((value) => {
                        return (
                          <Options
                            key={value + 1}
                            data={value}
                            variationName={"basic-size"}
                            settingVariation={settingVariation}
                            currectSelectedValue={selectedBasicSize}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* sheila length */}
              <div className="w-[100%] cursor-pointer">
                <div className="w-[100%} flex justify-start items-center mb-[20px]">
                  <div className="min-w-[60px] max-w-[60px]">
                    <h6 className="far text-[12px] mt-[5px] mb-[2px] uppercase">
                      <span className="text-[#ff0032]">*</span>?????? ????????????:
                    </h6>
                  </div>

                  <div className="pt-[3px] border-b-[1px] border-[#ededed] w-[100%] max-w-[100%] relative">
                    <div
                      className="flex justify-between items-center"
                      onClick={() => sheilaLengthToggler()}
                    >
                      <p className="far h-[40px] leading-[40px] text-[11px] text-[#7e7e7e] capitalize">
                        {selectedSheilaSize && selectedSheilaSize !== ""
                          ? selectedSheilaSize
                          : "???????????? ?????? ????????????:"}
                      </p>

                      <BsChevronDown
                        className={`text-[12px] ${togglerSheilaLengthPlusIcon.join(
                          " "
                        )} taPoint3`}
                      />
                    </div>
                    <div
                      className={`${togglerSheilaLength.join(" ")} ${styles.variation_dropdowns
                        } w-[100%] border-[#fbf1e8] border-[1px] border-b-[0] absolute bg-[#fff] z-[2] hidden`}
                    >
                      {selectSheilaLength.map((value) => {
                        return (
                          <Options
                            key={value + 1}
                            data={value}
                            variationName={"sheila-size"}
                            settingVariation={settingVariation}
                            currectSelectedValue={selectedSheilaSize}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* any alteration */}
              <div className="w-[100%] cursor-pointer">
                <div className="w-[100%] flex justify-between max-w-[400px]     lg:max-w-[100%]">
                  <div className="flex cursor-pointer">
                    <div className="animated-circle relative ml-[25px]"></div>
                    <p
                      className=" text-[12px] uppercase"
                      onClick={() => alterationDivToggler()}
                    >
            ???? ????????????
                    </p>
                  </div>
                  <div className="flex slide-underline relative  cursor-pointer">
                    {/* <BsRulers className="mr-[5px]"></BsRulers> */}
                    <div className="w-[21px] h-[19px] cursor-pointer ml-[5px] bgAllIcon bg-[left_-4px_top_-659px]"></div>
                    <p
                      className=" text-[12px] uppercase"
                      onClick={() => toggleSizeGuideModal()}
                    >
                    ???????? ????????????????

                    </p>
                    <div
                      className={`${togglerSizeGuideModal.join(" ")}  dnone`}
                    >
                      <SizeGuideModal
                        toggleSizeGuideModal={toggleSizeGuideModal}
                      />
                    </div>
                  </div>
                </div>
                <div className={`${togglerAlterationDiv.join(
                  " "
                )} w-[100%] h-[0] overflow-hidden mt-[15px] taPoint3`}>
                  {/* length */}
                  <div
                    className={`  taPoint3  overflow-hidde n`}
                  >
                    <div className="w-[100%} flex items-center mb-[20px]">
                      <div className="min-w-[60px] max-w-[60px]">
                        <h6 className="far text-[12px] mb-[2px] uppercase">
                        ??????????:
                        </h6>
                      </div>

                      <div className="pt-[3px] border-b-[1px] border-[#ededed] w-[100%] max-w-[100%] relative">
                        <div
                          className="flex justify-between items-center"
                          onClick={() => lengthToggler()}
                        >
                          <p className="far h-[40px] leading-[40px] text-[11px] text-[#7e7e7e] capitalize">
                          {selectedAlterationLength &&
                            selectedAlterationLength !== ""
                              ? selectedAlterationLength
                              : "???????????? ??????????:"}                                                                                                  
                          </p>

                          <BsChevronDown
                            className={`${togglerLengthPlusIcon.join(
                              " "
                            )} taPoint3`}
                          />
                        </div>
                        <div
                          className={`${togglerLength.join(" ")} ${styles.variation_dropdowns
                            } w-[100%] border-[#fbf1e8] border-[1px] border-b-[0] absolute bg-[#fff] z-[2] hidden`}
                        >
                           {alterationLength.map((value) => {
                            return (
                              <Options
                                key={value + 1}
                                data={value}
                                variationName={"alteration-length"}
                                settingVariation={settingVariation}
                                currectSelectedValue={selectedAlterationLength}
                              />
                            );
                          })}
                          {/* <div className="far text-[13px] text-[#1b1b28] border-b-[1px] border-b-[#fbf1e8] h-[48px] leading-[48px] pr-[7px]">
                         
                          ???????????? ??????????
                                                                         
                          </div>
                          <div className="far text-[13px] text-[#1b1b28] border-b-[1px] border-b-[#fbf1e8] h-[48px] leading-[48px] pr-[7px]">
                            50
                          </div>
                          <div className="far text-[13px] text-[#1b1b28] border-b-[1px] border-b-[#fbf1e8] h-[48px] leading-[48px] pr-[7px]">
                            52
                          </div>
                          <div className="far text-[13px] text-[#1b1b28] border-b-[1px] border-b-[#fbf1e8] h-[48px] leading-[48px] pr-[7px]">
                            54
                          </div>
                          <div className="far text-[13px] text-[#1b1b28] border-b-[1px] border-b-[#fbf1e8] h-[48px] leading-[48px] pr-[7px]">
                            56
                          </div>
                          <div className="far text-[13px] text-[#1b1b28] border-b-[1px] border-b-[#fbf1e8] h-[48px] leading-[48px] pr-[7px]">
                            58
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* bust */}
                  <div
                    className={` taPoint3  overflow-hidde n`}
                  >
                    <div className="w-[100%} flex items-center mb-[20px]">
                      <div className="min-w-[60px] max-w-[60px]">
                        <h6 className="far text-[12px] mb-[2px] uppercase">
                        ??????????:
                        </h6>
                      </div>

                      <div className="pt-[3px] border-b-[1px] border-[#ededed] w-[100%] max-w-[100%] relative">
                        <div
                          className="flex justify-between items-center"
                          onClick={() => bustToggler()}
                        >
                          <p className="far h-[40px] leading-[40px] text-[11px] text-[#7e7e7e] capitalize">
                          {selectedAlterationBust &&
                            selectedAlterationBust !== ""
                              ? selectedAlterationBust
                              : " ???????????? ?????????? :"}
                                                                                                
                          </p>

                          <BsChevronDown
                            className={`${togglerBustPlusIcon.join(
                              " "
                            )} taPoint3`}
                          />
                        </div>
                        <div
                          className={`${togglerBust.join(" ")} ${styles.variation_dropdowns
                            } w-[100%] border-[#fbf1e8] border-[1px] border-b-[0] absolute bg-[#fff] z-[2] hidden`}
                        >

{alterationBust.map((value) => {
                            return (
                              <Options
                                key={value + 1}
                                data={value}
                                variationName={"alteration-bust"}
                                settingVariation={settingVariation}
                                currectSelectedValue={selectedAlterationBust}
                              />
                            );
                          })}
                          {/* <div className="far text-[13px] text-[#1b1b28] border-b-[1px] border-b-[#fbf1e8] h-[48px] leading-[48px] pr-[7px]">
                         
                          ???????????? ??????????                                                                        
                          </div>
                          <div className="far text-[13px] text-[#1b1b28] border-b-[1px] border-b-[#fbf1e8] h-[48px] leading-[48px] pr-[7px]">
                            20
                          </div>
                          <div className="far text-[13px] text-[#1b1b28] border-b-[1px] border-b-[#fbf1e8] h-[48px] leading-[48px] pr-[7px]">
                            22
                          </div>
                          <div className="far text-[13px] text-[#1b1b28] border-b-[1px] border-b-[#fbf1e8] h-[48px] leading-[48px] pr-[7px]">
                            23
                          </div>
                          <div className="far text-[13px] text-[#1b1b28] border-b-[1px] border-b-[#fbf1e8] h-[48px] leading-[48px] pr-[7px]">
                            25
                          </div>
                          <div className="far text-[13px] text-[#1b1b28] border-b-[1px] border-b-[#fbf1e8] h-[48px] leading-[48px] pr-[7px]">
                            26
                          </div>
                          <div className="far text-[13px] text-[#1b1b28] border-b-[1px] border-b-[#fbf1e8] h-[48px] leading-[48px] pr-[7px]">
                            28
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* sleeve */}
                  <div
                    className={`  taPoint3  overflow-hidde n`}
                  >
                    <div className="w-[100%} flex items-center mb-[20px]">
                      <div className="min-w-[60px] max-w-[60px]">
                        <h6 className="far text-[12px] mb-[2px] uppercase">
                        ?????? ????????:
                        </h6>
                      </div>

                      <div className="pt-[3px] border-b-[1px] border-[#ededed] w-[100%] max-w-[100%] relative">
                        <div
                          className="flex justify-between items-center"
                          onClick={() => sleeveToggler()}
                        >
                          <p className="far h-[40px] leading-[40px] text-[11px] text-[#7e7e7e] capitalize">
                          {selectedAlterationSleeve &&
                            selectedAlterationSleeve !== ""
                              ? selectedAlterationSleeve
                              : "???????????? ?????? ????????:"}                                                          
                          </p>

                          <BsChevronDown
                            className={`${togglerSleevePlusIcon.join(
                              " "
                            )} taPoint3`}
                          />
                        </div>
                        <div
                          className={`${togglerSleeve.join(" ")} ${styles.variation_dropdowns
                            } w-[100%] border-[#fbf1e8] border-[1px] border-b-[0] absolute bg-[#fff] z-[2] hidden`}
                        >
                             {alterationSleeve.map((value) => {
                            return (
                              <Options
                                key={value + 1}
                                data={value}
                                variationName={"alteration-sleeve"}
                                settingVariation={settingVariation}
                                currectSelectedValue={selectedAlterationSleeve}
                              />
                            );
                          })}
                          {/* <div className="far text-[13px] text-[#1b1b28] border-b-[1px] border-b-[#fbf1e8] h-[48px] leading-[48px] pr-[7px]">
                            
                          ???????????? ?????? ????????                                                                        
                          </div>
                          <div className="far text-[13px] text-[#1b1b28] border-b-[1px] border-b-[#fbf1e8] h-[48px] leading-[48px] pr-[7px]">
                            25
                          </div>
                          <div className="far text-[13px] text-[#1b1b28] border-b-[1px] border-b-[#fbf1e8] h-[48px] leading-[48px] pr-[7px]">
                            26
                          </div>
                          <div className="far text-[13px] text-[#1b1b28] border-b-[1px] border-b-[#fbf1e8] h-[48px] leading-[48px] pr-[7px]">
                            27
                          </div>
                          <div className="far text-[13px] text-[#1b1b28] border-b-[1px] border-b-[#fbf1e8] h-[48px] leading-[48px] pr-[7px]">
                            28
                          </div>
                          <div className="far text-[13px] text-[#1b1b28] border-b-[1px] border-b-[#fbf1e8] h-[48px] leading-[48px] pr-[7px]">
                            29
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                className="add-to-bag-btn relative far overflow-hidden h-[40px] text-[14px] w-full text-[#fff] uppercase bg-[#111723] mt-[20px]"
                onClick={() => addToBag()}
              >
                <span className="relative z-[1]">?????????? ?????? ?????????? ????????????</span>
              </button>

              <div
                className={`${styles.need_help_div} slide-underline relative inline-block h-[20px] cursor-pointer pt-[20px] mb-[38px]`}
              >
                <p className="text-[12px] text-[#7e7e7e] uppercase ">
                ???????????? ??????????????
                </p>

                <div
                  className={`${styles.dropdown_menu_div} contact-box bg-[#fff] w-[402px] p-[20px] border-[#fbf1e8] border-[1px] absolute bottom-[25px] left-[50%] translate-x-[-50%] z-[12] cursor-default hidden`}
                >
                  <div className="flex justify-between">
                    <div className="border-r-[1px] border-[#e2e5ec] w-[48%] text-center">
                      <p className="work-regular text-[#000000b8] text-[12px] mb-[10px] uppercase">
                        click and chat
                      </p>
                      <a
                        href="#"
                        className="work-regular text-[13px] text-[#c53a19]"
                      >
                        Whatsapp
                      </a>
                    </div>
                    <div className="w-[50%] text-center">
                      <p className="work-regular text-[#000000b8] text-[12px] mb-[10px] uppercase">
                        email
                      </p>
                      <a
                        href="#"
                        className="work-regular text-[13px] text-[#c53a19]"
                      >
                        customercare@katwalk.sa
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="text-center">
                      <p className="work-regular text-[#000000b8] text-[12px] mb-[10px] uppercase pt-[30px]">
                        partnership and pr
                      </p>
                      <a
                        href="#"
                        className="work-regular text-[13px] text-[#c53a19]"
                      >
                        info@katwalk.sa
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* toggle tabs */}
              {/* tab1 */}
              <div className="w-[100%] mt-[5px] mb-[8px] max-w-[100%]      lg:max-w-[400px]">
                <div
                  className="w-[100%} flex justify-between items-center border-b-[1px] border-[#ededed] cursor-pointer"
                  onClick={() => tab1Toggler()}
                >
                  <div>
                    <h6 className="far text-[#7e7e7e] text-[13px] mt-[5px] mb-[12px] capitalize">
                    ????????????????:
                    </h6>
                  </div>
                  <div>
                    <BsChevronDown
                      className={`${togglerTab1PlusIcon.join(" ")} taPoint3`}
                    ></BsChevronDown>
                  </div>
                </div>
                <div
                  className={`${togglerTab1.join(
                    " "
                  )} taPoint3 max-h-[0] overflow-hidden`}
                >
                  <table className="w-[100%]">
                    <tbody>
                      <tr>
                        <td className="far text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                        ?????? ????????????
                        </td>
                        <td className="far text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                        ?????????? ???????? ????????????
                        </td>
                      </tr>

                      <tr>
                        <td className="far text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                        ?????? ????????????
                        </td>
                        <td className="far text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                        ????????
                        </td>
                      </tr>
                      <tr>
                        <td className="far text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                        ?????? ????????????
                        </td>
                        <td className="far text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                        ???????? ??????????
                        </td>
                      </tr>
                      <tr>
                        <td className="far text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                        ????????????
                        </td>
                        <td className="far text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                        ????????????, ????????, ????????, ???????? ??????????
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* tab2 */}
              <div className="w-[100%] mt-[5px] mb-[8px] max-w-[100%]      lg:max-w-[400px]">
                <div
                  className="w-[100%} flex justify-between items-center border-b-[1px] border-[#ededed] cursor-pointer"
                  onClick={() => tab2Toggler()}
                >
                  <div>
                    <h6 className="far text-[#7e7e7e] text-[13px] mt-[5px] mb-[12px] capitalize">
                    ???????????? ????????????
                    </h6>
                  </div>
                  <div>
                    <BsChevronDown
                      className={`${togglerTab2PlusIcon.join(" ")} taPoint3`}
                    ></BsChevronDown>
                  </div>
                </div>
                <div
                  className={`${togglerTab2.join(
                    " "
                  )} taPoint3 max-h-[0] overflow-hidden`}
                >
                  <table className="w-[100%]">
                    <tbody>
                      <tr>
                        <td className="far text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                        ????????????
                        </td>
                        <td className="far text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                        ??????????
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* tab3 */}
              <div className="w-[100%] mt-[5px] mb-[8px] max-w-[100%]      lg:max-w-[400px]">
                <div
                  className="w-[100%} flex justify-between items-center border-b-[1px] border-[#ededed] cursor-pointer"
                  onClick={() => tab3Toggler()}
                >
                  <div>
                    <h6 className="far text-[#7e7e7e] text-[13px] mt-[5px] mb-[12px] capitalize">
                    ?????????????? ??????????????
                    </h6>
                  </div>
                  <div>
                    <BsChevronDown
                      className={`${togglerTab3PlusIcon.join(" ")} taPoint3`}
                    ></BsChevronDown>
                  </div>
                </div>
                <div
                  className={`${togglerTab3.join(
                    " "
                  )} taPoint3 max-h-[0] overflow-hidden`}
                >
                  <table className="w-[100%]">
                    <tbody>
                      <tr>
                        <td className="far text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                        ?????????????? ??????????????
                        </td>
                        <td className="far text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                        ?????? ????????,
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* tab4 */}
              <div className="w-[100%] mt-[5px] mb-[8px] max-w-[100%]      lg:max-w-[400px]">
                <div
                  className="w-[100%} flex justify-between items-center border-b-[1px] border-[#ededed] cursor-pointer"
                  onClick={() => tab4Toggler()}
                >
                  <div>
                    <h6 className="far text-[#7e7e7e] text-[13px] mt-[5px] mb-[12px] capitalize">
                    ?????????? ????????????????
                    </h6>
                  </div>
                  <div>
                    <BsChevronDown
                      className={`${togglerTab4PlusIcon.join(" ")} taPoint3`}
                    ></BsChevronDown>
                  </div>
                </div>
                <div
                  className={`${togglerTab4.join(
                    " "
                  )} taPoint3 max-h-[0] overflow-hidden`}
                >
                  <table className="w-[100%]">
                    <tbody>
                      <tr>
                        <td className="far text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase align-top">
                        ?????????? ????????????????
                        </td>
                        <td className="far text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                        ?????? ???????????? ?????????? ?????? ???????????? ?????? ???????????? 10-14 ?????? ?????????????? ?????? ????????????
                          <br />
                          <br />
                          ?????? ?????????? ?????????????? ?????? ???????????? ???????????? ????????????.
                          <table className="w-[100%] mb-[20px]">
                            <tbody className="text-center border-[#ededed] border-b-[1px]">
                              <tr className="tr-hover-pink">
                                <td className="far text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                                ?????????? ??????????
                                </td>
                                <td className="far text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                                ?????? ??????????
                                </td>
                              </tr>
                              <tr className="tr-hover-blue">
                                <td className="far text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                                ?????????? ???????? ??????????. ???????????????? ?????? ?????????? ??????????
                                </td>
                                <td className="far text-[12px] tracking-[0.5px] border-[#ededed] border-t-[1px] py-[.75rem] uppercase">
                                6-10 ???????? ??????
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          ?????? ???????????? ???????? ?????????? ???????? ???????????????? ?????????????????? ?????????? ???????????? ?????????? ???????????? ???????????? ?????????????? ???????????? ???? ???? ?????????? ????????????.
                          <br />
                          <br />
                          ???????? ???????????? ?????? ???? ???????? ???????? ?????? ?????????????? ???????? ?????????? ???????????? ???????????????? ????????????????.
                          <br />
                          <br />
                          ?????????? ???????????????? ?????? ???????????? ?????? ?????????? ?????????????????? ?????? ?????????????? ?????????????? ???? ?????????? ??????????.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="share-icon-div w-[34px] h-[34px] flex justify-center items-center cursor-pointer border-[1px] border-[#ededed] text-[20px]">
                  {/* <IoShareSocialOutline /> */}
                  <div className="w-[21px] h-[19px] cursor-pointer relative z-4 bgAllIcon bg-[left_-47px_top_-260px]"></div>
                </div>
              </div>
            </div>
          </div>

          <OtherProducts data={otherProducts} />
        </div>

        {itemAdded == true ? (
          <MessageModal
            purpose={"item-added"}
            closeItemAdded={closeItemAdded}
            proceedToCheckout={proceedToCheckout}
          />
        ) : (
          ""
        )}
        {isSecureCheckout == true ? (
          <MessageModal
            purpose={"secure-checkout"}
            closeProceedToCheckout={closeProceedToCheckout}
          />
        ) : (
          ""
        )}
      </Layout>
      {isVartiationsSelected == true ? <MSD_Box message={"Please choose all the options"} /> : ""}
    </>
  );
}

function Options({
  data,
  variationName,
  settingVariation,
  currectSelectedValue,
}) {
  return (
    <div
      key={data + 1}
      className={` ${currectSelectedValue == data ? "active-variation" : ""
        } far text-[13px] text-[#1b1b28] border-b-[1px] border-b-[#fbf1e8] h-[48px] leading-[48px] pr-[7px] `}
      onClick={() => settingVariation(data, variationName)}
    >
      {data}
    </div>
  );
}

export default ProductDetail;
