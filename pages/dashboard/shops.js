import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import AdminPanelLayout from "../../components/dashboard/admin-panel-layout/AdminPanelLayout";
import TitleAndTableCard from "../../components/dashboard/title-and-table-card/TitleAndTableCard";
import TableHeader from "../../components/dashboard/table-header/TableHeader";
import CardBody from "../../components/dashboard/card-body/CardBody";
import HeadingBar from "../../components/heading-bar/HeadingBar";
import styles from "../../components/Shops.module.css";
import ChooseImage from "../../components/dashboard/choose-image/ChooseImage";
import ChooseImageModal from "../../components/dashboard/choose-image-modal/ChooseImageModal";
import TwoTabs from "../../components/dashboard/two-tabs/TwoTabs";

function Shops() {
  const [basicInfo, setBasicInfo] = useState([
    { name: "product Name", value: "Test Designer" },
    { name: "Shop Logo (400x400)", value: "loadImg" },
    { name: "Designer Picture (1130x1500)", value: "loadImg" },
    { name: "shopAddress", value: "Saihat" },
    { name: "meta Title", value: "Aliya Designs" },
    { name: "meta description", value: "Aliya Designs" },
  ]);
  const [basicInfoInArabic, setBasicInfoInArabic] = useState([
    { name: "product Name", value: "تصاميم عالية" },
    { name: "Shop Logo (400x400)", value: "loadImg" },
    { name: "Designer Picture (1130x1500)", value: "loadImg" },
    { name: "shopAddress", value: "Saihat" },
    { name: "meta Title", value: "تصاميم عالية" },
    { name: "meta description", value: "تصاميم عالية" },
  ]);
  const [socialMediaLink, set_socialMediaLink] = useState([
    { name: "Facebook", value: "Facebook", note: "nsert link with https" },
    { name: "Twitter", value: "Twitter", note: "nsert link with https" },
    { name: "Google", value: "Google", note: "nsert link with https" },
    { name: "Youtube", value: "Youtube", note: "nsert link with https" },
  ]);

  const [bannerSetting, set_bannerSetting] = useState( [
    {
      name: "Banners (1500x550)",
      value: "loadImg",
      note: "We had to limit height to maintian consistancy. In some device both side of the banner might be cropped for height limitation.",
    },
    {
      name: "Mobile Banners (550x547)",
      value: "loadImg",
      note: "We had to limit height to maintian consistancy. In some device both side of the banner might be cropped for height limitation.",
    },
  ]); 
  const [shopDetailsInArabic, setShopDetailsInArabic] = useState({
    basicInfo: [
      { name: "product Name", value: "تصاميم عالية" },
      { name: "Shop Logo (400x400)", value: "loadImg" },
      { name: "Designer Picture (1130x1500)", value: "loadImg" },
      { name: "shopAddress", value: "Saihat" },
      { name: "meta Title", value: "تصاميم عالية" },
      { name: "meta description", value: "تصاميم عالية" },
    ],
  });

  const [enableArabic, setEnableArabic] = useState(true);

  const [currentImages, setCurrentImages] = useState([]);
  
  const [shopLogo, set_shopLogo] = useState(undefined);
  const [designerPicture, set_designerPicture] = useState(undefined);
  const [banners, set_banners] = useState([]);
  const [mobileBanners, set_mobileBanners] = useState([]);

  




  const toggleLang = (currentlanguage) => {
    if (currentlanguage == "en") {
      setEnableArabic(true);
    } else if (currentlanguage == "ar") {
      setEnableArabic(false);
    }
  };

  const handleChange = (e, name, dataName) => {
    let extractDataFrom = undefined;
    let dataToUpdate = undefined;

    if (dataName == "basicInfo") {
      extractDataFrom = basicInfo;
      dataToUpdate = basicInfo;
    } else if (dataName == "basicInfoInArabic") {
      extractDataFrom = basicInfoInArabic;
      dataToUpdate = basicInfoInArabic;
    }

    if (name == "product Name") {
      dataToUpdate.splice(0, 1, {
        name: extractDataFrom[0].name,
        value: e.target.value,
      });
    } else if (name == "shopAddress") {
      dataToUpdate.splice(3, 1, {
        name: extractDataFrom[3].name,
        value: e.target.value,
      });
    } else if (name == "meta Title") {
      dataToUpdate.splice(4, 1, {
        name: extractDataFrom[4].name,
        value: e.target.value,
      });
    } else if (name == "meta description") {
      dataToUpdate.splice(5, 1, {
        name: extractDataFrom[5].name,
        value: e.target.value,
      });
    }
    if (dataName == "basicInfo") {
      setBasicInfo([...dataToUpdate]);
    } else if (dataName == "basicInfoInArabic") {
      setBasicInfoInArabic([...dataToUpdate]);
    }
  };

  const saveBasicInfor =()=> {    
    let _basicInfo = basicInfo;
    _basicInfo.splice(1,1,{
      name: "Shop Logo (400x400)", value: shopLogo
    })
    _basicInfo.splice(2,1,{
      name: "Designer Picture (1130x1500)", value: designerPicture
    })
    setBasicInfo([..._basicInfo])
    console.log(basicInfo)
  }
const saveBasicInfoInArabic =()=> {
  let _basicInfoInArabic = basicInfoInArabic;
    _basicInfoInArabic.splice(1,1,{
      name: "Shop Logo (400x400)", value: shopLogo
    })
    _basicInfoInArabic.splice(2,1,{
      name: "Designer Picture (1130x1500)", value: designerPicture
    })
    setBasicInfoInArabic([..._basicInfoInArabic])
    console.log(basicInfoInArabic)
}
 
const saveBannerSetting =()=> {
  let _bannerSetting = bannerSetting;
    _bannerSetting.splice(0,1,{
      name: bannerSetting[0].name,
      value: banners,
      note: bannerSetting[0].note,
    })
    _bannerSetting.splice(1,1,{
      name: bannerSetting[1].name,
      value: mobileBanners,
      note: bannerSetting[1].note,
    })
    set_bannerSetting([..._bannerSetting])
    console.log(bannerSetting)
}

const handleChangeSocialMedia =(e,index)=> {
let _socialMediaLink = socialMediaLink;
let objToPush = undefined;
for (let i = 0; i < _socialMediaLink.length; i++) {
 if ([i] == index) {
  objToPush = {
    name: _socialMediaLink[i].name, value:e.target.value, note: _socialMediaLink[i].note
  }
  _socialMediaLink.splice(i,1, objToPush)
 }
}
set_socialMediaLink([..._socialMediaLink])
}

const saveSocialMediaLink = () => {
  console.log(socialMediaLink)
}

  return (
    <>
      <Layout>
        <div className="w-[100%] min-h-[100vh] h-[auto]">
          <AdminPanelLayout active={"Shops"}>
            <HeadingBar heading={"Shop Settings"} shopsPage={true} />
            <div className="w-[100%] ">
              {/* Basic Info */}
              <TitleAndTableCard
                width={"w-[100% mb-[20px]"}
                zindex={" z-[2] relative"}
              >
                <TableHeader>Basic Info</TableHeader>
                <TwoTabs enableArabic={enableArabic} toggleLang={toggleLang} />
                {enableArabic == true ? (
                  <CardBody>
                    <div className="fwr flex mb-[1rem] flex-col      lg:flex-row">
                      <p className="w-[100%]     lg:w-[23.4%] text-[#1b1b28] text-[13px] px-0     lg:px-[5px] capitalize pt-[7px]">
                        {basicInfo[0].name}
                        <span className="text-[#ff0032]">*</span>
                      </p>
                      <div className="w-[100%] px-0     lg:px-[15px]">
                        <input
                          type="text"
                          className="admin-input w-[100%] h-[44px] fwl text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                          value={basicInfo[0].value}
                          onChange={(e) =>
                            handleChange(e, "product Name", "basicInfo")
                          }
                        />
                      </div>
                    </div>

                    <ChooseImage data={basicInfo[1]} shopsPage={true} currentImages={shopLogo} setCurrentImages={set_shopLogo} shopLogo />
                    <ChooseImage data={basicInfo[2]} shopsPage={true} currentImages={designerPicture} setCurrentImages={set_designerPicture} designerPicture />

                    <div className="fwr flex mb-[1rem] flex-col      lg:flex-row">
                      <p className="w-[100%]     lg:w-[23.4%] text-[#1b1b28] text-[13px] px-0     lg:px-[5px] capitalize pt-[7px]">
                        {basicInfo[3].name}
                        <span className="text-[#ff0032]">*</span>
                      </p>
                      <div className="w-[100%] px-0     lg:px-[15px]">
                        <input
                          type="text"
                          className="admin-input w-[100%] h-[44px] fwl text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                          value={basicInfo[3].value}
                          onChange={(e) =>
                            handleChange(e, "shopAddress", "basicInfo")
                          }
                        />
                      </div>
                    </div>

                    <div className="fwr flex mb-[1rem] flex-col      lg:flex-row">
                      <p className="w-[100%]     lg:w-[23.4%] text-[#1b1b28] text-[13px] px-0     lg:px-[5px] capitalize pt-[7px]">
                        {basicInfo[4].name}
                        <span className="text-[#ff0032]">*</span>
                      </p>
                      <div className="w-[100%] px-0     lg:px-[15px]">
                        <input
                          type="text"
                          className="admin-input w-[100%] h-[44px] fwl text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                          value={basicInfo[4].value}
                          onChange={(e) =>
                            handleChange(e, "meta Title", "basicInfo")
                          }
                        />
                      </div>
                    </div>

                    <div className="fwr flex mb-[1rem] flex-col      lg:flex-row">
                      <p className="w-[100%]     lg:w-[23.4%] text-[#1b1b28] text-[13px] px-0     lg:px-[5px] capitalize pt-[7px]">
                        {basicInfo[5].name}
                        <span className="text-[#ff0032]">*</span>
                      </p>
                      <div className="w-[100%] px-0     lg:px-[15px]">
                        <textarea
                          rows={3}
                          className="admin-input w-[100%] min-h-[44px] fwl text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                          onChange={(e) =>
                            handleChange(e, "meta description", "basicInfo")
                          }
                          value={basicInfo[5].value}
                        ></textarea>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button onClick={() => saveBasicInfor()} className="light-brown-btn ffr text-[0.875rem] text-[#fff] h-[40px] leading-[40px] tracking-[0.5px] uppercase bg-[#c83e27] block px-[15px] m-[.25rem]">
                        save
                      </button>
                    </div>
                  </CardBody>
                ) : (
                  <CardBody rtl>
                    {/* arabic */}

                    <div className="fwr flex mb-[1rem] flex-col      lg:flex-row">
                      <p className="w-[100%]     lg:w-[23.4%] text-[#1b1b28] text-[13px] px-0     lg:px-[5px] capitalize pt-[7px]">
                        {basicInfoInArabic[0].name}
                        <span className="text-[#ff0032]">*</span>
                      </p>
                      <div className="w-[100%] px-0     lg:px-[15px]">
                        <input
                          type="text"
                          className="admin-input w-[100%] h-[44px] fwl text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                          value={basicInfoInArabic[0].value}
                          onChange={(e) =>
                            handleChange(e, "product Name", "basicInfoInArabic")
                          }
                        />
                      </div>
                    </div>

                    <ChooseImage data={basicInfoInArabic[1]} shopsPage={true} currentImages={shopLogo} setCurrentImages={set_shopLogo} shopLogo />
                    <ChooseImage data={basicInfoInArabic[2]} shopsPage={true} currentImages={designerPicture} setCurrentImages={set_designerPicture} designerPicture />

                    <div className="fwr flex mb-[1rem] flex-col      lg:flex-row">
                      <p className="w-[100%]     lg:w-[23.4%] text-[#1b1b28] text-[13px] px-0     lg:px-[5px] capitalize pt-[7px]">
                        {basicInfoInArabic[3].name}
                        <span className="text-[#ff0032]">*</span>
                      </p>
                      <div className="w-[100%] px-0     lg:px-[15px]">
                        <input
                          type="text"
                          className="admin-input w-[100%] h-[44px] fwl text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                          value={basicInfoInArabic[3].value}
                          onChange={(e) =>
                            handleChange(e, "shopAddress", "basicInfoInArabic")
                          }
                        />
                      </div>
                    </div>

                    <div className="fwr flex mb-[1rem] flex-col      lg:flex-row">
                      <p className="w-[100%]     lg:w-[23.4%] text-[#1b1b28] text-[13px] px-0     lg:px-[5px] capitalize pt-[7px]">
                        {basicInfoInArabic[4].name}
                        <span className="text-[#ff0032]">*</span>
                      </p>
                      <div className="w-[100%] px-0     lg:px-[15px]">
                        <input
                          type="text"
                          className="admin-input w-[100%] h-[44px] fwl text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                          value={basicInfoInArabic[4].value}
                          onChange={(e) =>
                            handleChange(e, "meta Title", "basicInfoInArabic")
                          }
                        />
                      </div>
                    </div>

                    <div className="fwr flex mb-[1rem] flex-col      lg:flex-row">
                      <p className="w-[100%]     lg:w-[23.4%] text-[#1b1b28] text-[13px] px-0     lg:px-[5px] capitalize pt-[7px]">
                        {basicInfoInArabic[5].name}
                        <span className="text-[#ff0032]">*</span>
                      </p>
                      <div className="w-[100%] px-0     lg:px-[15px]">
                        <textarea
                          rows={3}
                          className="admin-input w-[100%] min-h-[44px] fwl text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                          onChange={(e) =>
                            handleChange(
                              e,
                              "meta description",
                              "basicInfoInArabic"
                            )
                          }
                          value={basicInfoInArabic[5].value}
                        ></textarea>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button onClick={() => saveBasicInfoInArabic()} className="light-brown-btn ffr text-[0.875rem] text-[#fff] h-[40px] leading-[40px] tracking-[0.5px] uppercase bg-[#c83e27] block px-[15px] m-[.25rem]">
                        save
                      </button>
                    </div>
                  </CardBody>
                )}
              </TitleAndTableCard>

              {/* Banner Settings */}
              <TitleAndTableCard
                width={"w-[100% mb-[20px]"}
                zindex={" z-[2] relative "}
              >
                <TableHeader>Banner Settings</TableHeader>
                <CardBody>

                  <ChooseImage data={bannerSetting[0]} shopsPage={true} currentImages={banners} setCurrentImages={set_banners} banners />
                  <ChooseImage data={bannerSetting[1]} shopsPage={true} currentImages={mobileBanners} setCurrentImages={set_mobileBanners} mobileBanners />
                 
                  <div className="flex justify-end">
                    <button onClick={() => saveBannerSetting()} className="light-brown-btn ffr text-[0.875rem] text-[#fff] h-[40px] leading-[40px] tracking-[0.5px] uppercase bg-[#c83e27] block px-[15px] m-[.25rem]">
                      save
                    </button>
                  </div>
                </CardBody>
              </TitleAndTableCard>

              {/* Social Media Link */}
              <TitleAndTableCard
                width={"w-[100% mb-[20px]"}
                zindex={" z-[2] relative "}
              >
                <TableHeader>Social Media Link</TableHeader>
                <CardBody>
                  {socialMediaLink.map((value,index) => {
                    return (
                      <div
                        key={value.name}
                        className="fwr flex mb-[1rem] flex-col      lg:flex-row"
                      >
                        <p className="w-[100%]     lg:w-[23.4%] text-[#1b1b28] text-[13px] px-0     lg:px-[5px] capitalize pt-[7px]">
                          {value.name}
                        </p>
                        <div className="w-[100%] px-0     lg:px-[15px]">
                          <input
                            type="text"
                            className="admin-input w-[100%] h-[44px] fwl text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                            value={value.value}
                            onChange={(e)=> handleChangeSocialMedia(e, index)}
                          />
                          {value && value.note ? (
                            <p className="fwr text-[#6C757D] text-[13px] leading-[1.5] tracking-[0.5px]">
                              <small>{value.note}</small>
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    );
                  })}
                  <div className="flex justify-end">
                    <button  onClick={()=> saveSocialMediaLink()} className="light-brown-btn ffr text-[0.875rem] text-[#fff] h-[40px] leading-[40px] tracking-[0.5px] uppercase bg-[#c83e27] block px-[15px] m-[.25rem]">
                      save
                    </button>
                  </div>
                </CardBody>
              </TitleAndTableCard>
            </div>
          </AdminPanelLayout>
        </div>
      </Layout>
      <div id="upload_overlay1" className="dnone">
        <ChooseImageModal
         currentImages={shopLogo}
         setCurrentImages={set_shopLogo}
         shopLogo
          />
      </div>
      <div id="upload_overlay2" className="dnone">
        <ChooseImageModal
         currentImages={designerPicture}
         setCurrentImages={set_designerPicture}         
         designerPicture
          />
      </div>

      <div id="upload_overlay3" className="dnone">
        <ChooseImageModal
         currentImages={banners}
         setCurrentImages={set_banners}         
         banners
          />
      </div>

      <div id="upload_overlay4" className="dnone">
        <ChooseImageModal
         currentImages={mobileBanners}
         setCurrentImages={set_mobileBanners}         
         mobileBanners
          />
      </div>

<div id="upload_overlay" className="dnone">
        
        <ChooseImageModal
           
          />
      </div>

      

    </>
  );
}

export default Shops;
