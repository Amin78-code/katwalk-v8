import React from "react";
import Image from "next/image";
import Layout from "../../../components/layout/Layout";
import loginBgImg from "../../../assets/images/bg/login-bg.jpg";
import logo from "../../../assets/images/logo/logo.svg";
import Link from "next/link";

function Login() {
  return (
    <section className="w-[100%] h-[100vh] relative bg-[#fff] flex justify-center items-center overflow-hidden">
      <div className={`w-[100%] h-[100%] absolute left-0 right-0`}>
        <span className="imgtagcover">
          <Image src={loginBgImg} />
        </span>
      </div>

      <div className="w-[350px] h-[405px] relative bg-[#ffffff80] p-[1.25rem] flex justify-center">
        <div>
          <div className="max-w-[208px] mx-[auto] mb-[1.05rem]">
            <span className="imgtagcover">
              <Image src={logo} />
            </span>
          </div>
          <div className="text-center mb-[3rem]">
            <h1 className="fwl text-[#c53a19] text-[1.75rem] leading-[1.2] tracking-[0]">
              Welcome to katwalk
            </h1>
            <p className="fwr text-[#212529] text-[1rem] mb-[1rem] leading-[1.5]">
              Login to your account.
            </p>
          </div>

          <input
            type="email"
            id="email"
            placeholder="Email"
            className="text-[#495057] text-[1rem] w-[100%] border-[1px] border-[#ced4da] bg-[#fff] rounded-[5px] py-[0.375rem] px-[0.75rem] mb-[1rem]"
          />
          <input
            type="password"
            id="password"
            placeholder="password"
            className="text-[#495057] text-[1rem] w-[100%] border-[1px] border-[#ced4da] bg-[#fff] rounded-[5px] py-[0.375rem] px-[0.75rem] mb-[1rem]"
          />
          <div className="flex justify-between mb-[20px]">
            <div className="flex justify-start items-center">
              <input type="checkbox" id="remember" className="w-[16px] h-[16px] bg-[transparent] mr-[12px] border-[1px] border-[#d1d7e2]" />
              <label htmlFor="remember" className="text-[#212529] text-[0.875rem] leading-[1.5] capitalize cursor-pointer">Remember me</label>
            </div>
            <p className="text-[#212529] text-[0.875rem] leading-[1.5] cursor-pointer">Forgot password ?</p>
          </div>
          <button className="text-[#fff] text-[1.25rem] leading-[1.5] bg-[#c53a19] rounded-[0.3rem] w-[100%] px-[1rem] py-[0.56rem]">
            <Link href="/dashboard">Login</Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Login;
