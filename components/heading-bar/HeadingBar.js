import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./HeadingBar.module.css";
import heroImage from "../../assets/images/hero-image.jpg";

function HeadingBar({ heading, lightHeadingBar, shopsPage }) {
  return (
    <div className="bg-[ff0000]">
      {shopsPage && shopsPage == true ? (
        <div className="flex justify-start items-center">
          {lightHeadingBar && lightHeadingBar == true ? (
            <h6 className="fwl text-[12px] text-[#1b1b28] leading-[1.5] tracking-[0.5px] uppercase mt-[0.5rem] mb-[1.5rem] pt-[1px] pl-[1px]">
              {heading ? heading : ""}
            </h6>
          ) : (
            <h6 className="fwr text-[1rem] text-[#1b1b28] tracking-[0.5px] capitalize mt-[21px] mb-[38px]">
              {heading ? heading : ""}
            </h6>
          )}
          <Link href="/dashboard/shop/test-designer">
            <a target="_blank">
            <button className="ffr text-[0.8125rem] text-[#e62e04] uppercase px-[1rem] h-[40px] leading-[40px] tracking-[.2em] border-[#e62e04] border-b-[1px] ml-[5px] flex items-center">
              (visit shop)
              <i className="las la-external-link-alt"></i>
            </button>
            </a>
          </Link>
        </div>
      ) : (
        <>
          {lightHeadingBar && lightHeadingBar == true ? (
            <h6 className="fwl text-[12px] text-[#1b1b28] leading-[1.5] tracking-[0.5px] uppercase mt-[0.5rem] mb-[1.5rem] pt-[1px] pl-[1px]">
              {heading ? heading : ""}
            </h6>
          ) : (
            <h6 className="fwr text-[1rem] text-[#1b1b28] tracking-[0.5px] capitalize mt-[21px] mb-[38px]">
              {heading ? heading : ""}
            </h6>
          )}
        </>
      )}
    </div>
  );
}

export default HeadingBar;
