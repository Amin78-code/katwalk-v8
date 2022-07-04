import React, { useEffect } from "react";
import Image from "next/image";
import Layout from "../../components/layout/Layout";
import loginBgImg from "../../assets/images/login-bg.jpg";
import loginBgImgMob from "../../assets/images/login-bg-mob.jpg";
import HeadingAndText from "../../components/HeadingAndText/HeadingAndText";
import styles from "../../components/otp.module.css";
import ImgLazyLoad from "../../components/img-lazy-load/ImgLazyLoad";
import Link from "next/link";

function OTP() {
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
            New sms message sent with your new code. *
          </p>
          <p className="fwr text-[12px] text-[#fff] leading-[14px] tracking-[0.5px] mb-[16px] text-center">
            Do you want to change your number?{" "}
            <a className="text-[#c53a19]">Click Here</a>
          </p>
          <div className="w-[100%] mt-[35px]">
            <div className="flex  w-[100%] gap-x-[18px]">
              <input
                placeholder="123456"
                className="fwl w-[100%] bg-[transparent] border-[1px] border-[#fff] text-[#aaa] text-[15px] p-[8px] mb-[8px]  outline-none focus:outline-none"
              />
            </div>
            <button className="red-on-hover-btn relative overflow-hidden ffr w-[100%] bg-[transparent] border-[1px] border-[#fff] text-[#fff] text-[14px] p-[8px] mb-[8px] uppercase">
             <Link href="/users/registration">
             <span className="z-[2] relative">continue</span>
             </Link>
            </button>
            <p className="fwr text-[12px] text-[#fff] leading-[14px] tracking-[0.5px] mb-[16px] text-center">
              Click here to resend code{" "}
              <a className="text-[#c53a19]">Click Here</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default OTP;
