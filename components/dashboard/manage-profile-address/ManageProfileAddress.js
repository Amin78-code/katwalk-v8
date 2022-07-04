import React, { useState, useRef } from "react";
import Image from "next/image";
import CardBody from "../card-body/CardBody";
import TableHeader from "../table-header/TableHeader";
import styles from "./ManageProfileAddress.module.css";
import TitleAndTableCard from "../title-and-table-card/TitleAndTableCard";
import Modal from "../modal/Modal";
import ModalNewAddress from "../modal/ModalNewAddress";
const addAddressData = [
  {
    type: "textarea",
    name: "Address",
    placeholder: "Your Address",
  },
  {
    type: "select",
    name: "Country",
    placeholder: "select country",
    options: [
      "Select Country",
      "Afghanistan",
      "Albania",
      "Algeria",
      "American Samoa",
      "Andorra",
      "Angola",
      "Anguilla",
      "Antarctica",
      "Antigua and Barbuda",
      "Argentina",
      "Armenia",
      "Aruba",
      "Australia",
      "Austria",
      "Azerbaijan",
      "Bahamas",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bermuda",
      "Bhutan",
      "Bolivia",
      "Bosnia and Herzegovina",
      "Botswana",
      "Bouvet Island",
      "Brazil",
      "British Indian Ocean Territory",
      "Brunei Darussalam",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
      "Cambodia",
      "Cameroon",
      "Canada",
      "Cape Verde",
      "Cayman Islands",
      "Central African Republic",
      "Chad",
      "Chile",
      "China",
      "Christmas Island",
      "Cocos (Keeling) Islands",
      "Colombia",
      "Comoros",
      "Congo",
      "Cook Islands",
      "Costa Rica",
      "Croatia (Hrvatska)",
      "Cuba",
      "Cyprus",
      "Czech Republic",
      "Denmark",
      "Djibouti",
      "Dominica",
      "Dominican Republic",
      "East Timor",
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Equatorial Guinea",
      "Eritrea",
      "Estonia",
      "Ethiopia",
      "Falkland Islands (Malvinas)",
      "Faroe Islands",
      "Fiji",
      "Finland",
      "France",
      "France, Metropolitan",
      "French Guiana",
      "French Polynesia",
      "French Southern Territories",
      "Gabon",
      "Gambia",
      "Georgia",
      "Germany",
      "Ghana",
      "Gibraltar",
      "Guernsey",
      "Greece",
      "Greenland",
      "Grenada",
      "Guadeloupe",
      "Guam",
      "Guatemala",
      "Guinea",
      "Guinea-Bissau",
      "Guyana",
      "Haiti",
      "Heard and Mc Donald Islands",
      "Honduras",
      "Hong Kong",
      "Hungary",
      "Iceland",
      "India",
      "Isle of Man",
      "Indonesia",
      "Iran (Islamic Republic of)",
      "Iraq",
      "Ireland",
      "Israel",
      "Italy",
      "Ivory Coast",
      "Jersey",
      "Jamaica",
      "Japan",
      "Jordan",
      "Kazakhstan",
      "Kenya",
      "Kiribati",
      "Korea, Democratic People's Republic of",
      "Korea, Republic of",
      "Kosovo",
      "Kuwait",
      "Kyrgyzstan",
      "Lao People's Democratic Republic",
      "Latvia",
      "Lebanon",
      "Lesotho",
      "Liberia",
      "Libyan Arab Jamahiriya",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Macau",
      "Macedonia",
      "Madagascar",
      "Malawi",
      "Malaysia",
      "Maldives",
      "Mali",
      "Malta",
      "Marshall Islands",
      "Martinique",
      "Mauritania",
      "Mauritius",
      "Mayotte",
      "Mexico",
      "Micronesia, Federated States of",
      "Moldova, Republic of",
      "Monaco",
      "Mongolia",
      "Montenegro",
      "Montserrat",
      "Morocco",
      "Mozambique",
      "Myanmar",
      "Namibia",
      "Nauru",
      "Nepal",
      "Netherlands",
      "Netherlands Antilles",
      "New Caledonia",
      "New Zealand",
      "Nicaragua",
      "Niger",
      "Nigeria",
      "Niue",
      "Norfolk Island",
      "Northern Mariana Islands",
      "Norway",
      "Oman",
      "Pakistan",
      "Palau",
      "Palestine",
      "Panama",
      "Papua New Guinea",
      "Paraguay",
      "Peru",
      "Philippines",
      "Pitcairn",
      "Poland",
      "Portugal",
      "Puerto Rico",
      "Qatar",
      "Reunion",
      "Romania",
      "Russian Federation",
      "Rwanda",
      "Saint Kitts and Nevis",
      "Saint Lucia",
      "Saint Vincent and the Grenadines",
      "Samoa",
      "San Marino",
      "Sao Tome and Principe",
      "Saudi Arabia",
      "Senegal",
      "Serbia",
      "Seychelles",
      "Sierra Leone",
      "Singapore",
      "Slovakia",
      "Slovenia",
      "Solomon Islands",
      "Somalia",
      "South Africa",
      "South Georgia South Sandwich Islands",
      "South Sudan",
      "Spain",
      "Sri Lanka",
      "St. Helena",
      "St. Pierre and Miquelon",
      "Sudan",
      "Suriname",
      "Svalbard and Jan Mayen Islands",
      "Swaziland",
      "Sweden",
      "Switzerland",
      "Syrian Arab Republic",
      "Taiwan",
      "Tajikistan",
      "Tanzania, United Republic of",
      "Thailand",
      "Togo",
      "Tokelau",
      "Tonga",
      "Trinidad and Tobago",
      "Tunisia",
      "Turkey",
      "Turkmenistan",
      "Turks and Caicos Islands",
      "Tuvalu",
      "Uganda",
      "Ukraine",
      "United Arab Emirates",
      "United Kingdom",
      "United States",
      "United States minor outlying islands",
      "Uruguay",
      "Uzbekistan",
      "Vanuatu",
      "Vatican City State",
      "Venezuela",
      "Vietnam",
      "Virgin Islands (British)",
      "Virgin Islands (U.S.)",
      "Wallis and Futuna Islands",
      "Western Sahara",
      "Yemen",
      "Zaire",
      "Zambia",
      "Zimbabwe",
    ],
  },
  {
    type: "select",
    name: "City",
    placeholder: "select City",
    options: [
      "Select City",
      "Karachi",
      "Lahore",
      "Islamabad"
    ],
  },
  {
    type: "input",
    name: "Area",
    placeholder: "Your Area",
  },
  {
    type: "input",
    name: "Postal Code",
    placeholder: "Your Postal Code",
  },
  {
    type: "input",
    name: "Phone",
    placeholder: "+880",
  },
];

function ManageProfileAddress({ data, title, handleChangeAddress, saveAddress, toggleModal, isShowModal, updateAddress }) {

  const basicInfoCardBody = useRef("");
  const typeSelect = useRef("");
  const [editOrDelete, setEditOrDelete] = useState("");
  const openCardBody = () => {
    basicInfoCardBody.current.classList.toggle(styles.slide_card_body);
  };

  const setOption = (selectedOption) => {
    // console.log("selectedOption", selectedOption);
    // console.log("optionsIndex", optionsIndex);
    if (selectedOption == "edit") {
      setEditOrDelete(selectedOption);
      toggleModal()
    } else if (optionsIndex == "delete") {
      setEditOrDelete(selectedOption);
    }
  };

  const openSelect = (dropdownName) => {
    document.getElementById(dropdownName).classList.toggle("dblock");
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
              className="flex ffr uppercase text-[14px] items-center cursor-pointer"
              onClick={() => openCardBody("basicInfo")}
            >
              edit
              <i className="las la-ellipsis-v mx-[5px]"></i>
            </p>
          </div>
        </TableHeader>
        <div
          ref={basicInfoCardBody}
          className={`max-h-0 h-auto overflow-hidden taPoint6`}
        >
          <CardBody>
            <TitleAndTableCard>
              <div className="p-[1rem] relative">
                {data.map((value) => {
                  return (
                    <p
                      key={value.name}
                      className="fwb text-[13px] text-[#1b1b28]"
                    >
                      {value.name}: &nbsp;&nbsp;&nbsp;
                      <span className="fwr">{value.value}</span>
                    </p>
                  );
                })}

                <div className="absolute right-[10px] top-[10px]">
                  <i
                    className="las la-ellipsis-v mx-[5px] cursor-pointer"
                    onClick={() => openSelect("editOrDelete")}
                  ></i>

                  <div
                    className="absolute w-[165px] right-[-10px] top-[25px] z-[2] dnone"
                    id={"editOrDelete"}
                  >
                    <div className="w-[100%] mt-[0px] py-[10px] bg-[#fff] z-[2] border-[1px] border-[#00000026] drop-shadow-[0_0px_50px_rgba(82,63,105,15%)] rounded-[5px] ">
                      <ul>
                        <li
                          onClick={() => setOption("edit")}
                          className={`${editOrDelete == "edit" ? styles.active_option : ""
                            }
                          block text-[#212529] text-[1rem] capitalize py-[0.25rem] px-[1rem] hover:bg-[#c53a24] hover:text-[#fff] cursor-pointer overflow-hidden overflow-ellipsis whitespace-nowrap taPoint3`}
                        >
                          edit
                        </li>
                        <li
                          onClick={() => setOption("delete")}
                          className={`${editOrDelete == "delete" ? styles.active_option : ""
                            }
                          block text-[#212529] text-[1rem] capitalize py-[0.25rem] px-[1rem] hover:bg-[#c53a24] hover:text-[#fff] cursor-pointer overflow-hidden overflow-ellipsis whitespace-nowrap taPoint3`}
                        >
                          delete
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="fwb text-[10px] text-[#fff] h-[25px] leading-[25px] tracking-[0.5px] capitalize rounded-[5px] bg-[#c83e27] block px-[5px] absolute right-[10px] bottom-[10px]">
                  default
                </div>
              </div>
            </TitleAndTableCard>
            <AddNewAddress toggleModal={toggleModal} />
            <div className="flex justify-end">
              <button onClick={()=>updateAddress()} className="light-brown-btn ffr text-[0.875rem] text-[#fff] h-[40px] leading-[40px] tracking-[0.5px] uppercase bg-[#c83e27] block px-[15px] m-[.25rem] mt-[15px]">
                update profile
              </button>
            </div>
          </CardBody>
        </div>
      </TitleAndTableCard>

      <ModalNewAddress
        isShowModal={isShowModal}
        toggleModal={toggleModal}
        data={addAddressData}
        handleChangeAddress={handleChangeAddress}
        saveAddress={saveAddress}
      />

    </>
  );
}

function AddNewAddress({ toggleModal }) {
  return (
    <div
      onClick={() => toggleModal()}
      className={`border-[1px] border-[#00000020] rounded-[.25rem] bg-[#f8f9fa] border-[#dee2e6] border-[1px] p-[1rem] mt-[15px] flex justify-center items-center flex-col cursor-pointer`}
    >
      <i className="las la-plus text-[26px] cursor-pointer mr-[5px]"></i>
      <p className="fwr capitalize text-[13px] text-[#1b1b28] mt-[3px]">
        add new address
      </p>
    </div>
  );
}

export default ManageProfileAddress;
