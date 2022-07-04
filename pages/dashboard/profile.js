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

  const [paymentSetting, setPaymentSetting] = useState([
    { name: "Cash Payment", value: "", status: true },
    { name: "Bank Payment", value: "", status: false },
    { name: "Bank Name", placeHolder: "Bank Name", value: "sad" },
    { name: "Bank Account Name", placeHolder: "Bank Account Name", value: "" },
    {
      name: "Bank Account Number",
      placeHolder: "Bank Account Number",
      value: "",
    },
    {
      name: "Bank Routing Number",
      placeHolder: "Bank Routing Number",
      value: "",
    },
  ]);

  const [designer_VAT_and_CR_No, set_designer_VAT_and_CR_No] = useState([
    { name: "VAT Number", placeHolder: "Enter Vat Number", status: false },
    { name: "CR Number", value: "123456789", status: true },
  ]);

  const [changeYourEmail, set_changeYourEmail] = useState([
    { name: "Your Email", placeHolder: "azaamam@hotmail.com" },
  ]);

  const [currentImages, setCurrentImages] = useState(undefined);
  const [photo, set_photo] = useState([]);
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
    } else if (name == "Confirm Password") {
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
    // console.log("basicInfo", basicInfo);
    // console.log("currentImages", currentImages);
    
    let extractDataFrom = undefined;
    let dataToUpdate = undefined;

    extractDataFrom = basicInfo;
    dataToUpdate = basicInfo;

    if (currentImages.length == 0) {
      console.log("please select an image");
    } else {
      dataToUpdate.splice(2, 1, {
        name: extractDataFrom[2].name,
        value: currentImages.img,
      });
      setBasicInfo([...dataToUpdate]);
      console.log("basicInfo", basicInfo);
    }
  };

  const handleChangeAddress = (e, index, type) => {
    let _address = address;

    if (type == "select") {
      _address.splice(index, 1, {
        name: address[index].name,
        value: e,
      });
    } else {
      _address.splice(index, 1, {
        name: address[index].name,
        value: e.target.value,
      });
    }

    setAddress([..._address]);
  };
  const [isShowModal, setIsShowModal] = useState(false);

  const saveAddress = () => {
    toggleModal();
  };
  const toggleModal = () => {
    // console.log("toggleModal called")
    setIsShowModal(!isShowModal);
  };

  const updateAddress = () => {
    // console.log("updateAddress c a l l")
    // toggleModal();
    console.log("address", address);
  };

  const handleChangePayment = () => (e, index, type) => {
    console.log(" Fdfdf ")
    let _paymentSetting = paymentSetting;

    if (type == "checkbox") {
      _paymentSetting.splice(index, 1, {
        name: paymentSetting[index].name,
        value: e,
        status: true
      }
      );
    } else {
      _paymentSetting.splice(index, 1, {
        name: paymentSetting[index].name,
        value: e.target.value,
        placeHolder: paymentSetting[index].placeHolder
      });
    }

    setPaymentSetting([..._paymentSetting]);
  };

  const handleChangeDesigner = (e, index, type) => {
    let _designer_VAT_and_CR_No = designer_VAT_and_CR_No;

    if (type == "select") {
      _designer_VAT_and_CR_No.splice(index, 1, {
        name: designer_VAT_and_CR_No[index].name,
        value: e,
      });
    } else {
      _designer_VAT_and_CR_No.splice(index, 1, {
        name: designer_VAT_and_CR_No[index].name,
        value: e.target.value,
      });
    }

    set_designer_VAT_and_CR_No([..._designer_VAT_and_CR_No]);
  };

  const saveData_VAT_and_CR = () => {
    console.log("designer_VAT_and_CR_No", designer_VAT_and_CR_No);
  };

  const handleChangeEmail = (e, index, type) => {
    let _changeYourEmail = changeYourEmail;

    if (type == "select") {
      _changeYourEmail.splice(index, 1, {
        name: changeYourEmail[index].name,
        value: e,
      });
    } else {
      _changeYourEmail.splice(index, 1, {
        name: changeYourEmail[index].name,
        value: e.target.value,
      });
    }

    set_changeYourEmail([..._changeYourEmail]);
  };

  const updateEmail = () => {
    if (changeYourEmail[0].value == "") {
      console.log("please type your email");
    } else {
      console.log("changeYourEmail", changeYourEmail);
    }
  };
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
                setCurrentImages={setCurrentImages}
              />

              <ManageProfileAddress
                data={address}
                title={"Address"}
                handleChangeAddress={handleChangeAddress}
                saveAddress={saveAddress}
                toggleModal={toggleModal}
                isShowModal={isShowModal}
                updateAddress={updateAddress}
              />

              <ManageProfilePaymentSetting
                data={paymentSetting}
                title={"Payment Setting"}
                handleChangePayment={handleChangePayment}
              />

              <ManageProfileDesigner_VAT_and_CR_No
                data={designer_VAT_and_CR_No}
                title={"Designer VAT & CR No."}
                handleChangeDesigner={handleChangeDesigner}
                saveData_VAT_and_CR={saveData_VAT_and_CR}
              />

              <ManageProfileChangeYourEmail
                data={changeYourEmail}
                title={"Change your email"}
                handleChangeEmail={handleChangeEmail}
                updateEmail={updateEmail}
              />
            </div>
          </AdminPanelLayout>
        </div>
      </Layout>
      <div id="upload_overlay" className="dnone">
        <ChooseImageModal
          currentImages={currentImages}
          setCurrentImages={setCurrentImages}
          photo
        />
      </div>
    </>
  );
}

export default Profiles;
