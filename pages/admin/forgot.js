import React from "react";
import Image from "next/image";
import Layout from "../../components/layout/Layout";
import loginBgImg from "../../assets/images/bg/login-bg.jpg";
import logo from "../../assets/images/logo/logo.svg";
import Link from "next/link";

function Forgot() {
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
              Forgot Password
            </p>
          </div>

          <p className="text-[13px] mb-[10px]">
            Enter your email address to recover your password.
          </p>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="text-[#495057] text-[1rem] w-[100%] border-[1px] border-[#ced4da] bg-[#fff] rounded-[5px] py-[0.375rem] px-[0.75rem] mb-[1rem]"
          />

          <button className="text-[#fff] text-[16px] leading-[1.5] capitalize bg-[#c53a19] rounded-[0.3rem] w-[100% ] px-[1rem] py-[5px]">
            <Link href="/admin/otp">
            send password reset link
            </Link>
          </button>
          <Link href="/users/login">
            <p className="mt-[10px] opacity-[.6] cursor-pointer">Back to Login</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Forgot;
