import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout/Layout";
import HeadingBar from "../../components/heading-bar/HeadingBar";
import AdminPanelLayout from "../../components/dashboard/admin-panel-layout/AdminPanelLayout";
import ManageProfileBasicInfo from "../../components/dashboard/manage-profile-basic-info/ManageProfileBasicInfo";
import ManageProfileAddress from "../../components/dashboard/manage-profile-address/ManageProfileAddress";
import ManageProfilePaymentSetting from "../../components/dashboard/manage-profile-payment-setting/ManageProfilePaymentSetting";
import ManageProfileDesigner_VAT_and_CR_No from "../../components/dashboard/manage-profile-designer-vat-and-cr-no/ManageProfileDesigner_VAT_and_CR_No";
import ManageProfileChangeYourEmail from "../../components/dashboard/manage-profile-change-your-email/ManageProfileChangeYourEmail";
import ChooseImageModal from "../../components/dashboard/choose-image-modal/ChooseImageModal";

function Profiles() {
  const [basicInfo, setBasicInfo] = useState([
    { name: "Your Name", value: "Aliya Almusawi" },
    { name: "Your Phone", value: "+966508011144" },
    { name: "Photo", value: undefined },
    { name: "New Password", placeHolder: "New Password" },
    { name: "Confirm Password", placeHolder: "Confirm Password" },
  ]);

  const [address, setAddress] = useState([
    { name: "Address", value: "Prince Nayef St." },
      { name: "Postal Code", value: "32424" },
      { name: "City", value: "Dammam" },
      { name: "Area", value: "Al Aziziyah" },
      { name: "Country", value: "SA" },
      { name: "Phone", value: "+966508011144" },
  ]);

  const [profileData, setProfileData] = useState({
    basicInfo: [
      { name: "Your Name", value: "Aliya Almusawi" },
      { name: "Your Phone", value: "+966508011144" },
      { name: "Photo", value: "" },
      { name: "New Password", placeHolder: "New Password" },
      { name: "Confirm Password", placeHolder: "Confirm Password" },
    ],
    address: [
      { name: "Address", value: "Prince Nayef St." },
      { name: "Postal Code", value: "32424" },
      { name: "City", value: "Dammam" },
      { name: "Area", value: "Al Aziziyah" },
      { name: "Country", value: "SA" },
      { name: "Phone", value: "+966508011144" },
    ],
    paymentSetting: [
      { name: "Cash Payment", value: "", status: true },
      { name: "Bank Payment", value: "", status: false },
      { name: "Bank Name", placeHolder: "Bank Name" },
      { name: "Bank Account Name", placeHolder: "Bank Account Name" },
      { name: "Bank Account Number", placeHolder: "Bank Account Number" },
      { name: "Bank Routing Number", placeHolder: "Bank Routing Number" },
    ],
    designer_VAT_and_CR_No: [
      { name: "VAT Number", placeHolder: "Enter Vat Number", status: false },
      { name: "CR Number", value: "123456789", status: true },
    ],
    changeYourEmail: [
      { name: "Your Email", placeHolder: "azaamam@hotmail.com" },
    ],
  });

  const [currentImages, setCurrentImages] = useState([]);

  const showModal = () => {
    document.getElementById("upload_overlay").classList.add("dblock");
  };

  const handleChange = (e, name, dataName) => {
    let extractDataFrom = undefined;
    let dataToUpdate = undefined;

    if (dataName == "basicInfo") {
      extractDataFrom = basicInfo;
      dataToUpdate = basicInfo;
    }

    if (name == "Your Name") {
      dataToUpdate.splice(0, 1, {
        name: extractDataFrom[0].name,
        value: e.target.value,
      });
    } else if (name == "Your Phone") {
      dataToUpdate.splice(1, 1, {
        name: extractDataFrom[1].name,
        value: e.target.value,
      });
    } else if (name == "New Password") {
      dataToUpdate.splice(3, 1, {
        name: extractDataFrom[3].name,
        value: e.target.value,
      });
    }
    else if (name == "Confirm Password") {
      dataToUpdate.splice(4, 1, {
        name: extractDataFrom[4].name,
        value: e.target.value,
      });
    }
    if (dataName == "basicInfo") {
      setBasicInfo([...dataToUpdate]);
    }
  };

  const updateBasicInfo = () => {
    let extractDataFrom = undefined;
    let dataToUpdate = undefined;

    extractDataFrom = basicInfo;
    dataToUpdate = basicInfo;

    dataToUpdate.splice(2, 1, {
      name: extractDataFrom[2].name,
      value: currentImages[0].img,
    });

    setBasicInfo([...dataToUpdate]);

    console.log("basicInfo", basicInfo);
  };

  const handleChangeAddress = (e, name, dataName) => {

  }

  return (
    <>
      <Layout>
        <div className="w-[100%] min-h-[100vh] h-[auto]">
          <AdminPanelLayout active={"Profiles"}>
            <HeadingBar heading={"Manage Profile"} />
            <div className="w-[100%]">
              <ManageProfileBasicInfo
                data={basicInfo}
                title={"Basic Info"}
                showModal={showModal}
                handleChange={handleChange}
                currentImages={currentImages}
                updateBasicInfo={updateBasicInfo}
              />

              <ManageProfileAddress
                data={address}
                title={"Address"}
                handleChangeAddress={handleChangeAddress}
              />

              <ManageProfilePaymentSetting
                data={profileData.paymentSetting}
                title={"Payment Setting"}
              />

              <ManageProfileDesigner_VAT_and_CR_No
                data={profileData.designer_VAT_and_CR_No}
                title={"Designer VAT & CR No."}
              />

              <ManageProfileChangeYourEmail
                data={profileData.changeYourEmail}
                title={"Change your email"}
              />
            </div>
          </AdminPanelLayout>
        </div>
      </Layout>
      <div id="upload_overlay" className="dnone">
        <ChooseImageModal
          currentImages={currentImages}
          setCurrentImages={setCurrentImages}
        />
      </div>
    </>
  );
}

export default Profiles;
