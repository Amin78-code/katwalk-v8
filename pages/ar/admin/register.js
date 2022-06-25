import React from "react";
import Image from "next/image";
import Layout from "../../../components/layout/Layout";
import loginBgImg from "../../../assets/images/bg/login-bg.jpg";
import logo from "../../../assets/images/logo/logo.svg";
import Link from "next/link";

function Register() {
  return (
    <section className="w-[100%] h-[100vh] relative bg-[#fff] flex justify-center items-center overflow-hidden">
      <div className={`w-[100%] h-[100%] absolute left-0 right-0`}>
        <span className="imgtagcover">
          <Image src={loginBgImg} />
        </span>
      </div>

      <div className="w-[350px] h-[405px ] relative bg-[#ffffff80] p-[1.25rem] flex justify-center">
        <div>
          <div className="max-w-[208px] mx-[auto] mb-[1.05rem]">
            <span className="imgtagcover">
              <Image src={logo} />
            </span>
          </div>
          <div className="text-center mb-[10px]">
            <h1 className="fwl text-[#c53a19] text-[1.75rem] leading-[1.2] tracking-[0]">
              Welcome to katwalk
            </h1>
            <p className="fwr text-[#212529] text-[1rem] mb-[1rem] leading-[1.5]">
              Create a New Account
            </p>
          </div>
          <input
            type="text"
            id="fullName"
            placeholder="Full Name"
            className="text-[#495057] text-[1rem] w-[100%] border-[1px] border-[#ced4da] bg-[#fff] rounded-[5px] py-[0.375rem] px-[0.75rem] mb-[1rem]"
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="text-[#495057] text-[1rem] w-[100%] border-[1px] border-[#ced4da] bg-[#fff] rounded-[5px] py-[0.375rem] px-[0.75rem] mb-[1rem]"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="text-[#495057] text-[1rem] w-[100%] border-[1px] border-[#ced4da] bg-[#fff] rounded-[5px] py-[0.375rem] px-[0.75rem] mb-[1rem]"
          />
          
          <input
            type="password"
            id="confirm_password"
            placeholder="Confirm Password"
            className="text-[#495057] text-[1rem] w-[100%] border-[1px] border-[#ced4da] bg-[#fff] rounded-[5px] py-[0.375rem] px-[0.75rem] mb-[1rem]"
          />
          <div className="mb-[20px]">
            <div className="flex justify-start items-center">
              <input type="checkbox" id="terms" className="w-[16px] h-[16px] bg-[transparent] mr-[12px] border-[1px] border-[#d1d7e2]" />
              <label htmlFor="terms" className="text-[#212529] text-[0.875rem] leading-[1.5] capitalize cursor-pointer">I agree with the Terms and Conditions</label>
            </div>
          
           </div>
          <button className="text-[#fff] text-[1.25rem] leading-[1.5] bg-[#c53a19] rounded-[0.3rem] w-[100%] px-[1rem] py-[0.56rem]">
            {/* <Link href=""> */}
              Register
              {/* </Link> */}
          </button>
          <p className="text-[13px] mt-[5px]">Already have an account ? <span className="text-[#c53a19]"><Link href="/admin/login">Sign in</Link></span></p>
        </div>
      </div>
    </section>
  );
}

export default Register;
