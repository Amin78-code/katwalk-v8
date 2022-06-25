import React from "react";
import Image from "next/image";
import Layout from "../../components/layout/Layout";
import loginBgImg from "../../assets/images/bg/login-bg.jpg";
import logo from "../../assets/images/logo/logo.svg";
import Link from "next/link";

function Otp() {
  return (
    <section className="w-[100%] h-[100vh] relative bg-[#fff] flex justify-center items-center overflow-hidden">
      <div className={`w-[100%] h-[100%] absolute left-0 right-0`}>
        <span className="imgtagcover">
          <Image src={loginBgImg} />
        </span>
      </div>

      <div className="w-[350px] h-[405px ] relative bg-[#ffffff80] p-[1.25rem] flex justify-center">
        <div>
          {/* <div className="max-w-[208px] mx-[auto] mb-[1.05rem]">
            <span className="imgtagcover">
              <Image src={logo} />
            </span>
          </div> */}
          <div className="text-center mb-[10px]">
            {/* <h1 className="fwl text-[#c53a19] text-[1.75rem] leading-[1.2] tracking-[0]">
              Welcome to katwalk
            </h1> */}
            <p className="fwr text-[#212529] text-[1rem] mb-[1rem] leading-[1.5]">
              Verification
            </p>
          </div>

          <p className="text-[13px] mb-[10px]">
           We will send you an OTP on your email.
          </p>
          <input
            type="text"
            id="otp"
            placeholder="0000"
            className="text-[#c53a19] text-[2rem] w-[100%] border-[1px] border-[#ced4da] bg-[#fff] rounded-[10px] py-[0.375rem] px-[0.75rem] mb-[1rem] tracking-[20px] text-center"
          />

          <button className="text-[#fff] text-[16px] leading-[1.5] capitalize bg-[#c53a19] rounded-[0.3rem] w-[100% ] px-[1rem] py-[5px]">
            <Link href="/admin/otp">
verify
            </Link>
          </button>
          <p className="text-[13px] mt-[10px]"><span className="opacity-[0.6]">Did't receive the verification OTP?</span> <span className="text-[#c53a19] cursor-pointer">Resend again</span></p>
     
        
        </div>
      </div>
    </section>
  );
}

export default Otp;
