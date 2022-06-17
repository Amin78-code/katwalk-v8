import Image from "next/image";
import React, { useState, useRef } from "react";
import Link from "next/link";
import styles from "./SideBar.module.css";
import profileImg from "../../../../../assets/images/icons/profile-img.png";

function SideBar({ active, openSidebar }) {
  return (
    <div className="w-[320px]    md:w-[267px] h-[100vh] md:h-[auto] overflow-auto pb-[50px] bg-[#fff] rounded-0      md:rounded-[5px] shadow-md border-[1px] border-[#ebedf2] mr-[-10px]      md:ml-0">
      <div className="flex flex-col justify-center items-center mb-[1.5rem] relative">
        <div
          className="w-[64px] h-[64px] rounded-full overflow-hidden mt-[16px] mb-[33px]"
          id="profileImg"
        >
          <span className="image_container">
            <Image src={profileImg} alt="image" />
          </span>
        </div>
        <h6 className=" text-[13px] text-[#1b1b28] leading-[1.5] tracking-[0.5px] font-[600] flex items-center">
          Aliya Almusawi
          <i className="las la-check-circle ml-[12px] mr-[5px]"></i>
        </h6>
        <i className="las la-times text-[25px] absolute top-[10px] left-[10px] block     md:hidden" onClick={() => openSidebar()}></i>
        <i className="las la-sign-out-alt text-[25px] absolute top-[10px] right-[15px] block     md:hidden" onClick={() => openSidebar()}></i>
      </div>

      <nav className={`${styles.nav} mb-[1rem]`}>
        <ul>
          <li>
            <Link href="/ar/dashboard/home">
              <a
                className={`${active == "Dashboard" ? styles.active : ""
                  } w-[100%] flex items-center h-[40px] far text-[#63666b] text-[0.8125rem] tracking-[0.5px] capitalize border-[#fff] border-l-[3px] taPoint3 py-[10px] px-[25px] cursor-pointer`}
              >
                <i className="las la-home ml-[6px]"></i>
                حسابی
              </a>
            </Link>
          </li>
          <li>
            <Link href="/ar/dashboard/purchase_history">
              <a
                className={`${active == "PurchaseHistory" ? styles.active : ""
                  } w-[100%] flex items-center h-[40px] far text-[#63666b] text-[0.8125rem] tracking-[0.5px] capitalize border-[#fff] border-l-[3px] taPoint3 py-[10px] px-[25px] cursor-pointer`}
              >
                <i className="las la-file-alt ml-[6px]"></i>
                تاريخ شراء
              </a>
            </Link>
          </li>
          <li>
            <Link href="/ar/dashboard/wishlists">
              <a
                className={`${active == "Wishlists" ? styles.active : ""
                  } w-[100%] flex items-center h-[40px] far text-[#63666b] text-[0.8125rem] tracking-[0.5px] capitalize border-[#fff] border-l-[3px] taPoint3 py-[10px] px-[25px] cursor-pointer`}
              >
                <i className="las la-heart ml-[6px]"></i>
                قائمة الرغبات
              </a>
            </Link>
          </li>
          <li>
            <Link href="/ar/dashboard/products">
              <a
                className={`${active == "Products" ? styles.active : ""
                  } far w-[100%] flex items-center h-[40px] far text-[#63666b] text-[0.8125rem] tracking-[0.5px] capitalize border-[#fff] border-l-[3px] taPoint3 py-[10px] px-[25px] cursor-pointer`}
              >
                <i className="lab la-sketch ml-[6px]"></i>
                منتجات
              </a>
            </Link>
          </li>
          <li>
            <Link href="/ar/dashboard/orders">
              <a
                className={`${active == "Orders" ? styles.active : ""
                  } far w-[100%] flex items-center h-[40px] far text-[#63666b] text-[0.8125rem] tracking-[0.5px] capitalize border-[#fff] border-l-[3px] taPoint3 py-[10px] px-[25px] cursor-pointer`}
              >
                <i className="las la-money-bill ml-[6px]"></i>
                طلبات
              </a>
            </Link>
          </li>
          <li>
            <Link href="/ar/dashboard/pickup">
              <a
                className={`${active == "Pickup" ? styles.active : ""
                  } far w-[100%] flex items-center h-[40px] far text-[#63666b] text-[0.8125rem] tracking-[0.5px] capitalize border-[#fff] border-l-[3px] taPoint3 py-[10px] px-[25px] cursor-pointer`}
              >
                <i className="las la-truck-pickup ml-[6px]"></i>
                إنشاء بيك اب
              </a>
            </Link>
          </li>
          <li>
            <Link href="/ar/dashboard/view_pickup">
              <a
                className={`${active == "ViewPickup" ? styles.active : ""
                  } far w-[100%] flex items-center h-[40px] far text-[#63666b] text-[0.8125rem] tracking-[0.5px] capitalize border-[#fff] border-l-[3px] taPoint3 py-[10px] px-[25px] cursor-pointer`}
              >
                <i className="las la-truck-pickup ml-[6px]"></i>
                عرض بيك اب
              </a>
            </Link>
          </li>
          <li>
            <Link href="/ar/dashboard/withdraw_requests">
              <a
                className={`${active == "WithdrawRequests" ? styles.active : ""
                  } far w-[100%] flex items-center h-[40px] far text-[#63666b] text-[0.8125rem] tracking-[0.5px] capitalize border-[#fff] border-l-[3px] taPoint3 py-[10px] px-[25px] cursor-pointer`}
              >
                <i className="las la-money-bill-wave-alt ml-[6px]"></i>
                سحب الأموال
              </a>
            </Link>
          </li>
          <li>
            <Link href="/ar/dashboard/shops">
              <a
                className={`${active == "Shops" ? styles.active : ""
                  } far w-[100%] flex items-center h-[40px] far text-[#63666b] text-[0.8125rem] tracking-[0.5px] capitalize border-[#fff] border-l-[3px] taPoint3 py-[10px] px-[25px] cursor-pointer`}
              >
                <i className="las la-cog ml-[6px]"></i>
                إعداد المتجر
              </a>
            </Link>
          </li>
          <li>
            <Link href="/ar/dashboard/profile">
              <a
                className={`${active == "Profiles" ? styles.active : ""
                  } far w-[100%] flex items-center h-[40px] far text-[#63666b] text-[0.8125rem] tracking-[0.5px] capitalize border-[#fff] border-l-[3px] taPoint3 py-[10px] px-[25px] cursor-pointer`}
              >
                <i className="las la-user ml-[6px]"></i>
                تعديل معلومات الحساب
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <a
        className={`ffr pink-btn w-[100%] h-[40px] block text-[#e62e04] text-[0.875rem] text-center uppercase bg-[#e62e0426] tracking-[0.5px] taPoint3 py-[10px] px-[25px] cursor-pointer`}
      >
        <Link href="https://katwalk-admin.vercel.app/">logout</Link>
      </a>
      <hr className="h-[0] border-[#727272] border-0 border-b-[1px] shadow-sm my-[6px]" />
      <h6 className="far text-[13px] text-[#1b1b28] leading-[1.5] tracking-[0.5px] text-center my-[19px] font-[600]">
        Sold Amount
      </h6>
      <p className="far text-[0.75rem] text-center tracking-[0.5px] mb-[0.5rem]">
        Your sold amount (current month)
      </p>
      <button
        className={`maroon-btn ffr pink-btn w-[100%] h-[40px] block text-[0.875rem] text-[#fff] text-center uppercase bg-[#c83e27] tracking-[0.5px] taPoint3 py-[10px] px-[25px] cursor-pointer`}
      >
        SAR 0
      </button>
      <div className="pt-[1.5rem] pb-[2rem]">
        <table className="w-[100%]">
          <tbody className="far text-[13px] tracking-[0.5px]">
            <tr>
              <td className="text-center text-[#212529] p-[.25rem] w-[60%]">
                Total Sold:
              </td>
              <td className="font-[600] text-center">SAR 0</td>
            </tr>
            <tr>
              <td className="text-center text-[#212529] p-[.25rem] w-[60%]">
                Last Month Sold:
              </td>
              <td className="font-[600] text-center">SAR 0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SideBar;
