import React, { useRef, useState } from "react";
import Image from "next/image";
import Layout from "../../components/layout/Layout";
import loginBgImg from "../../assets/images/login-bg.jpg";
import loginBgImgMob from "../../assets/images/login-bg-mob.jpg";
import HeadingAndText from "../../components/HeadingAndText/HeadingAndText";
import styles from "../../components/otp.module.css";
import ImgLazyLoad from "../../components/img-lazy-load/ImgLazyLoad";

function Registration() {
  const categorySelect = useRef("");

  const [selectedCategory, setSelectedCategory] = useState("Abaya");

  const [productCategoriesForShow, setProductCategoriesForShow] = useState([
    "Aba Alworood",
    "Abha",
    "Abha Manhal",
    "Abqaiq",
    "Abu Ajram",
    "Abu Areish",
    "Ad DahinahAd Dubaiyah",
    "Addayer",
    "Adham",
    "Afif",
    "Aflaj",
    "Ahad Masarha ",
    "Ahad Rufaidah",
    "Ain Dar",
    "Al Adari",
    "Al Ais",
    "Al Ajfar",
    "Al Ammarah",
    "Al Ardah",
    "Al Arja",
    "Al Asyah",
    "Al Bada",
    "Al BashayerAl Batra",
    "Al Bijadyah",
    "Al Dalemya",
    "Al Fuwaileq",
    "Al hait",
    "Al Haith",
    "Al Hassa",
    "Al Hayathem",
    "Al Hufayyirah",
    "Al Hulayfah As Sufla",
    "Al Idabi",
    "Al Khishaybi",
    "Al Khitah",
    "Al Laqayit",
    "Al Mada",
    "Al Mahani",
    "Al Mahd",
    "Al Midrij",
    "Al Moya",
    "Al Qarin",
    "Al Uwayqilah",
    "Al Wasayta",
    "Al-JshAlghat",
    "Alhada",
    "Alnabhanya",
    "Alrass",
    "Amaq",
    "An Nabk Abu Qasr",
    "An Nafiah",
    "An Nuqrah",
    "Anak",
    "Aqiq",
    "Aqool",
    "Ar Radifah",
    "Ar Rafi'ah",
    "Ar Rishawiyah",
    "Arar",
    "Artawiah",
    "As Sulaimaniyah",
    "As Sulubiayh",
    "Asfan",
    "Ash Shaara",
    "Ash Shamli",
    "Ash Shananah",
    "Ash Shimasiyah",
    "Ash Shuqaiq",
    "Asheirah",
    "At Tuwayr",
    "Atawleh",
    "Ath Thybiyah",
    "Awamiah",
    "Ayn Fuhayd          ",
    "Badaya",
    "Bader",
    "Badr Al Janoub",
    "Baha",
    "Bahara",
    "Bahr Abu Sukaynah",
    "Bahrat Al Moujoud",
    "Balahmar",
    "Balasmar",
    "Balqarn",
    "Baqa Ash Sharqiyah",
    "Baqaa",
    "Baqiq",
    "Bareq",
    "Batha",
    "Biljurashi",
    "Birk",
    "Bish ",
    "Bisha",
    "Bukeiriah",
    "Buraidah",
    "Daelim",
    "Damad",
    "Dammam",
    "Darb",
    "Dariyah",
    "Dawadmi",
    "Deraab",
    "Dere'Iyeh",
    "Dhahban",
    "Dhahran",
    "Dhahran Al Janoob",
    "Dhurma        ",
    "Domat Al Jandal",
    "Duba",
    "Duhknah",
    "Dulay Rashid",
    "Farasan",
    "Ghazalah",
    "Ghtai",
    "Gilwa",
    "Gizan",
    "Hadeethah",
    "Hafer Al Batin",
    "Hail",
    "Hajrah",
    "Halat Ammar",
    "Hali",
    "Haqil",
    "Harad",
    "Harajah",
    "Hareeq",
    "Hawea/Taif",
    "Haweyah",
    "Hawtat Bani Tamim",
    "Hazm Al Jalamid",
    "Hedeb",
    "Hinakeya",
    "Hofuf",
    "Horaimal",
    "Hotat Sudair",
    "Hubuna",
    "Huraymala",
    "Ja'Araneh",
    "Jafar",
    "Jalajel",
    "Jeddah",
    "Jouf",
    "Jubail",
    "Jumum",
    "Kahlah",
    "Kara",
    "Kara'A",
    "Karboos",
    "Khafji",
    "Khaibar",
    "Khairan",
    "Khamaseen",
    "Khamis Mushait",
    "Kharj",
    "Khasawyah",
    "Khobar",
    "Khodaria",
    "Khulais",
    "Khurma",
    "King Abdullah Economic City",
    "King Khalid Military City",
    "Kubadah",
    "Laith",
    "Layla",
    "Madinah",
    "Mahad Al Dahab",
    "Majarda",
    "Majma",
    "Makkah",
    "Mandak",
    "Mastura",
    "Mawqaq",
    "Midinhab",
    "Mikhwa",
    "Mohayel Aseer",
    "Moqaq",
    "Mrat",
    "Mubaraz",
    "Mubayid",
    "Mulaija",
    "Mulayh",
    "Munifat Al Qaid",
    "Muthaleif",
    "Muzahmiah",
    "Muzneb",
    "Nabiya",
    "Najran",
    "Namas",
    "New Muwayh",
    "Nimra",
    "Nisab",
    "Noweirieh",
    "Nwariah",
    "Ojam",
    "Onaiza",
    "Othmanyah",
    "Oula",
    "Oyaynah",
    "Oyoon Al Jawa",
    "Qahmah",
    "Qana",
    "Qarah               ",
    "Qariya Al Olaya",
    "Qasab               ",
    "Qassim",
    "Qatif",
    "Qaysoomah",
    "Qbah",
    "Qouz",
    "Qufar",
    "Qunfudah",
    "Qurayat",
    "Qusayba",
    "Quwei'Ieh",
    "Rabigh",
    "Rafha",
    "Rahima",
    "Rania",
    "Ras Al Kheir",
    "Ras Baridi",
    "Ras Tanura",
    "Rawdat Habbas",
    "Rejal Alma'A",
    "Remah",
    "Riyadh",
    "Riyadh Al Khabra",
    "Rowdat Sodair",
    "Rvaya Aljamsh",
    "Rwaydah",
    "Sabt El Alaya",
    "Sabya",
    "Sadal Malik",
    "Sadyan",
    "Safanyah",
    "Safwa",
    "Sahna",
    "Sajir",
    "Sakaka",
    "Salbookh",
    "Salwa",
    "Samakh",
    "Samtah ",
    "Saqf",
    "Sarar",
    "Sarat Obeida",
    "Satorp",
    "Seihat",
    "Shaqra",
    "Shari",
    "Sharourah",
    "Shefa'A",
    "Shinanh",
    "Shoaiba",
    "Shraie'E",
    "Shumeisi",
    "Siir",
    "Simira",
    "Subheka",
    "Sulaiyl",
    "Suwayr",
    "Tablah",
    "Tabrjal",
    "Tabuk",
    "Taiba",
    "Taif",
    "Tanda",
    "Tanjeeb",
    "Tanuma",
    "Tanumah",
    "Tarut",
    "Tatleeth",
    "Tayma               ",
    "Tebrak",
    "Thabya",
    "Thadek",
    "Tharmada",
    "Thebea",
    "Thumair             ",
    "Thuqba",
    "Towal",
    "Turaib",
    "Turaif",
    "Turba",
    "Tuwaim",
    "Udhaliyah",
    "Um Aljamajim",
    "Umluj",
    "Uqlat Al Suqur",
    "Ushayqir",
    "Uyun",
    "Wadeien",
    "Wadi Bin Hasbal",
    "Wadi El Dwaser",
    "Wadi Faraah",
    "Wadi Fatmah",
    "Wajeh (Al Wajh)",
    "Waly Al Ahd",
    "Yanbu",
    "Yanbu Al Baher",
    "Yanbu Nakhil",
    "Yuthma",
    "Zahban ",
    "Zallum",
    "Zulfi",
  ]);
  const productCategories = [
    "Aba Alworood",
    "Abha",
    "Abha Manhal",
    "Abqaiq",
    "Abu Ajram",
    "Abu Areish",
    "Ad DahinahAd Dubaiyah",
    "Addayer",
    "Adham",
    "Afif",
    "Aflaj",
    "Ahad Masarha ",
    "Ahad Rufaidah",
    "Ain Dar",
    "Al Adari",
    "Al Ais",
    "Al Ajfar",
    "Al Ammarah",
    "Al Ardah",
    "Al Arja",
    "Al Asyah",
    "Al Bada",
    "Al BashayerAl Batra",
    "Al Bijadyah",
    "Al Dalemya",
    "Al Fuwaileq",
    "Al hait",
    "Al Haith",
    "Al Hassa",
    "Al Hayathem",
    "Al Hufayyirah",
    "Al Hulayfah As Sufla",
    "Al Idabi",
    "Al Khishaybi",
    "Al Khitah",
    "Al Laqayit",
    "Al Mada",
    "Al Mahani",
    "Al Mahd",
    "Al Midrij",
    "Al Moya",
    "Al Qarin",
    "Al Uwayqilah",
    "Al Wasayta",
    "Al-JshAlghat",
    "Alhada",
    "Alnabhanya",
    "Alrass",
    "Amaq",
    "An Nabk Abu Qasr",
    "An Nafiah",
    "An Nuqrah",
    "Anak",
    "Aqiq",
    "Aqool",
    "Ar Radifah",
    "Ar Rafi'ah",
    "Ar Rishawiyah",
    "Arar",
    "Artawiah",
    "As Sulaimaniyah",
    "As Sulubiayh",
    "Asfan",
    "Ash Shaara",
    "Ash Shamli",
    "Ash Shananah",
    "Ash Shimasiyah",
    "Ash Shuqaiq",
    "Asheirah",
    "At Tuwayr",
    "Atawleh",
    "Ath Thybiyah",
    "Awamiah",
    "Ayn Fuhayd          ",
    "Badaya",
    "Bader",
    "Badr Al Janoub",
    "Baha",
    "Bahara",
    "Bahr Abu Sukaynah",
    "Bahrat Al Moujoud",
    "Balahmar",
    "Balasmar",
    "Balqarn",
    "Baqa Ash Sharqiyah",
    "Baqaa",
    "Baqiq",
    "Bareq",
    "Batha",
    "Biljurashi",
    "Birk",
    "Bish ",
    "Bisha",
    "Bukeiriah",
    "Buraidah",
    "Daelim",
    "Damad",
    "Dammam",
    "Darb",
    "Dariyah",
    "Dawadmi",
    "Deraab",
    "Dere'Iyeh",
    "Dhahban",
    "Dhahran",
    "Dhahran Al Janoob",
    "Dhurma        ",
    "Domat Al Jandal",
    "Duba",
    "Duhknah",
    "Dulay Rashid",
    "Farasan",
    "Ghazalah",
    "Ghtai",
    "Gilwa",
    "Gizan",
    "Hadeethah",
    "Hafer Al Batin",
    "Hail",
    "Hajrah",
    "Halat Ammar",
    "Hali",
    "Haqil",
    "Harad",
    "Harajah",
    "Hareeq",
    "Hawea/Taif",
    "Haweyah",
    "Hawtat Bani Tamim",
    "Hazm Al Jalamid",
    "Hedeb",
    "Hinakeya",
    "Hofuf",
    "Horaimal",
    "Hotat Sudair",
    "Hubuna",
    "Huraymala",
    "Ja'Araneh",
    "Jafar",
    "Jalajel",
    "Jeddah",
    "Jouf",
    "Jubail",
    "Jumum",
    "Kahlah",
    "Kara",
    "Kara'A",
    "Karboos",
    "Khafji",
    "Khaibar",
    "Khairan",
    "Khamaseen",
    "Khamis Mushait",
    "Kharj",
    "Khasawyah",
    "Khobar",
    "Khodaria",
    "Khulais",
    "Khurma",
    "King Abdullah Economic City",
    "King Khalid Military City",
    "Kubadah",
    "Laith",
    "Layla",
    "Madinah",
    "Mahad Al Dahab",
    "Majarda",
    "Majma",
    "Makkah",
    "Mandak",
    "Mastura",
    "Mawqaq",
    "Midinhab",
    "Mikhwa",
    "Mohayel Aseer",
    "Moqaq",
    "Mrat",
    "Mubaraz",
    "Mubayid",
    "Mulaija",
    "Mulayh",
    "Munifat Al Qaid",
    "Muthaleif",
    "Muzahmiah",
    "Muzneb",
    "Nabiya",
    "Najran",
    "Namas",
    "New Muwayh",
    "Nimra",
    "Nisab",
    "Noweirieh",
    "Nwariah",
    "Ojam",
    "Onaiza",
    "Othmanyah",
    "Oula",
    "Oyaynah",
    "Oyoon Al Jawa",
    "Qahmah",
    "Qana",
    "Qarah               ",
    "Qariya Al Olaya",
    "Qasab               ",
    "Qassim",
    "Qatif",
    "Qaysoomah",
    "Qbah",
    "Qouz",
    "Qufar",
    "Qunfudah",
    "Qurayat",
    "Qusayba",
    "Quwei'Ieh",
    "Rabigh",
    "Rafha",
    "Rahima",
    "Rania",
    "Ras Al Kheir",
    "Ras Baridi",
    "Ras Tanura",
    "Rawdat Habbas",
    "Rejal Alma'A",
    "Remah",
    "Riyadh",
    "Riyadh Al Khabra",
    "Rowdat Sodair",
    "Rvaya Aljamsh",
    "Rwaydah",
    "Sabt El Alaya",
    "Sabya",
    "Sadal Malik",
    "Sadyan",
    "Safanyah",
    "Safwa",
    "Sahna",
    "Sajir",
    "Sakaka",
    "Salbookh",
    "Salwa",
    "Samakh",
    "Samtah ",
    "Saqf",
    "Sarar",
    "Sarat Obeida",
    "Satorp",
    "Seihat",
    "Shaqra",
    "Shari",
    "Sharourah",
    "Shefa'A",
    "Shinanh",
    "Shoaiba",
    "Shraie'E",
    "Shumeisi",
    "Siir",
    "Simira",
    "Subheka",
    "Sulaiyl",
    "Suwayr",
    "Tablah",
    "Tabrjal",
    "Tabuk",
    "Taiba",
    "Taif",
    "Tanda",
    "Tanjeeb",
    "Tanuma",
    "Tanumah",
    "Tarut",
    "Tatleeth",
    "Tayma               ",
    "Tebrak",
    "Thabya",
    "Thadek",
    "Tharmada",
    "Thebea",
    "Thumair             ",
    "Thuqba",
    "Towal",
    "Turaib",
    "Turaif",
    "Turba",
    "Tuwaim",
    "Udhaliyah",
    "Um Aljamajim",
    "Umluj",
    "Uqlat Al Suqur",
    "Ushayqir",
    "Uyun",
    "Wadeien",
    "Wadi Bin Hasbal",
    "Wadi El Dwaser",
    "Wadi Faraah",
    "Wadi Fatmah",
    "Wajeh (Al Wajh)",
    "Waly Al Ahd",
    "Yanbu",
    "Yanbu Al Baher",
    "Yanbu Nakhil",
    "Yuthma",
    "Zahban ",
    "Zallum",
    "Zulfi",
  ];

  const setCategory = (selectedOption) => {
    setSelectedCategory(selectedOption);
    openCategorySelect();
  };

  const openCategorySelect = () => {
    categorySelect.current.classList.toggle("dblock");
    document
      .getElementById("categorySelect")
      .classList.toggle(styles.red_border);
  };

  const changeHandler = (e, filterName) => {
    // console.log("initialData", e, filterName);

    let _productCategories = filterName;
    // setProductCategories(_productCategories);
    let __productCategories = [];
    // setProductCategoriesForShow(_productCategories);
    for (let i = 0; i < _productCategories.length; i++) {
      __productCategories.push(filterName[i].toLowerCase());
    }
    const startsWithN = __productCategories.filter((country) =>
      country.startsWith(e.target.value.toLowerCase())
    );
    setProductCategoriesForShow(startsWithN);
  };

  return (
    <Layout footer={"none"}>
      {/* object-position: 'top' */}
      <div
        className={`${styles.login_main_div} overflow-hidden relative w-[100%] pt-[50px] flex justify-end items-start `}
      >
        <div
          className={`${styles.login_bg_img_div} absolute w-[100%] h-[100%] z-[-1] hidden     sm:block`}
        >
          <span className="image_container ">
            {/* <Image src={loginBgImg} alt="image" />  */}
            <ImgLazyLoad src={loginBgImg} alt={"image"} classes={""} />
          </span>
        </div>
        <div
          className={`${styles.login_bg_img_div} absolute w-[100%] h-[100%] z-[-1] block      sm:hidden`}
        >
          <span className="image_container ">
            {/* <Image src={loginBgImgMob} alt="image" /> */}
            <ImgLazyLoad src={loginBgImgMob} alt={"image"} classes={""} />
          </span>
        </div>
        <div className="w-[100%] mx-auto h-[210px ] bg-[#000000bf] p-[25px] mt-[130px] ml-[15px] mr-[15px]     sm:ml-[50px] sm:mr-[50px] sm:w-[90%] lg:w-[34%] lg:mr-[60px]">
          <h1 className="fwl text-[#fff] text-[24px] text-center">
            Welcome to katwalk
          </h1>
          <p className="fwr text-[12px] text-[#fff] leading-[14px] tracking-[0.5px] mb-[16px] text-center">
            Easy to Register
          </p>
          <div className="w-[100%] mt-[35px]">
            <input
              placeholder="Full Name"
              className="fwl w-[100%] bg-[transparent] border-[1px] border-[#fff] text-[#aaa] text-[15px] p-[8px] mb-[8px]  outline-none focus:outline-none"
              type="text"
            />

            <input
              placeholder="Last Name"
              className="fwl w-[100%] bg-[transparent] border-[1px] border-[#fff] text-[#aaa] text-[15px] p-[8px] mb-[8px]  outline-none focus:outline-none"
              type="text"
            />

            <input
              placeholder="Email Address"
              className="fwl w-[100%] bg-[transparent] border-[1px] border-[#fff] text-[#aaa] text-[15px] p-[8px] mb-[8px]  outline-none focus:outline-none"
              type="email"
            />

            <select className="fwl w-[100%] bg-[transparent] border-[1px] border-[#fff] text-[#aaa] text-[15px] p-[8px] mb-[8px]  outline-none focus:outline-none">
              <option className="capitalize" disabled>
                select country
              </option>
              <option className="capitalize">saudi arabia</option>
            </select>

            {/* <select className="fwl w-[100%] bg-[transparent] border-[1px] border-[#fff] text-[#aaa] text-[15px] p-[8px] mb-[8px]  outline-none focus:outline-none">
  <option className="capitalize" disabled>select city</option>
  <option className="capitalize">saudi arabia</option>
</select> */}

            <div className="fwr flex flex-col      lg:flex-row">
              <div className="w-[100%]">
                <div
                  className="admin-input relative fwl w-[100%] bg-[transparent] border-[1px] border-[#fff] text-[#aaa] text-[15px] p-[8px] mb-[8px]  outline-none focus:outline-none"
                  id="categorySelect"
                >
                  <div
                    onClick={() => openCategorySelect()}
                    className="capitalize"
                  >
                    {selectedCategory ? selectedCategory : ""}
                  </div>
                  <div
                    ref={categorySelect}
                    className="absolute w-[100%] left-0 top-[43px] z-[1] dnone"
                  >
                    <div className="w-[100%] mt-[0px] py-[10px] bg-[#fff] z-[2] border-[1px] border-[#00000026] drop-shadow-[0_0px_50px_rgba(82,63,105,15%)]">
                      <div className="py-[4px] px-[8px]">
                        <input
                          // kam
                          onChange={(e) => changeHandler(e, productCategories)}
                          className="admin-input w-[100%] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                        />
                      </div>
                      <ul>
                        {productCategoriesForShow.map((value, index) => {
                          return (
                            <li
                              key={index * 4}
                              onClick={() => setCategory(value)}
                              className={`${
                                value == selectedCategory
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

            <input
              placeholder="Street"
              className="fwl w-[100%] bg-[transparent] border-[1px] border-[#fff] text-[#aaa] text-[15px] p-[8px] mb-[8px]  outline-none focus:outline-none"
              type="text"
            />

            <input
              placeholder="Area"
              className="fwl w-[100%] bg-[transparent] border-[1px] border-[#fff] text-[#aaa] text-[15px] p-[8px] mb-[8px]  outline-none focus:outline-none"
              type="text"
            />

            <div className="flex justify-start">
              <div className="flex justify-start items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-[16px] h-[16px] bg-[transparent] mr-[12px] border-[1px] border-[#d1d7e2] mt-[-15px]"
                />
              </div>
              <p className="fwr text-[12px] text-[#fff] leading-[14px] tracking-[0.5px] mb-[16px] cursor-pointer">
                I agree to the
                <span className="text-[#c53a19]">
                  PRIVACY POLICY, TERMS &#38; CONDITIONS
                </span>
                of katwalk.
              </p>
            </div>

            <button className="red-on-hover-btn relative overflow-hidden ffr w-[100%] bg-[transparent] border-[1px] border-[#fff] text-[#fff] text-[14px] p-[8px] mb-[8px] uppercase">
              <span className="z-[2] relative">submit</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Registration;
