import React from "react";
import Image from "next/image";
import logoSquare from "../../../../assets/images/logo/logo-square.png";
import vat from "../../../../assets/images/logo/vat.png";
import styles from "./Footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="far w-[100%] h-[94px] bg-[#c53a19] py-[15px] items-center flex justify-between px-[3%]">
        <div className="flex  items-center">
          <div className={`${styles.image_div} max-w-[80px] mr-[0px] mt-[5px]       sm:max-w-[65px] sm:ml-[10px] md:ml-[50px]`}>
            <span className="image_container">
              <Image src={logoSquare} alt="image" />
            </span>
          </div>
          <ul
            className={`${styles.footer_menu} flex justify-start flex-wrap gap-x-[20px] pl-[20px] hidden    md:flex lg:pr-[0] `}
          >
            <li className="ml-[12px] mr-[22px]">
              <Link href="/ar/about-us">
                <a className="text-[#fff]  whitespace-nowrap text-[12px] tracking-[0.05em] uppercase cursor-pointer">
                  نبذة عنا
                </a>
              </Link>
            </li>
            <li className="relative ml-[12px] mr-[22px]">
              <a
                href="#"
                className="text-[#fff] whitespace-nowrap text-[12px] tracking-[0.05em] uppercase cursor-pointer"
              >
                تواصلي معنا
              </a>
              <div
                className={`${styles.dropdown_menu_div} contact-box bg-[#fff] w-[402px] p-[20px] border-[#fbf1e8] border-[1px] absolute bottom-[30px] left-[50%] translate-x-[-50%] hidden`}
              >
                <div className="flex justify-between">
                  <div className="border-l-[1px] border-[#e2e5ec] w-[48%] text-center">
                    <p className="text-[#000000b8] text-[12px] mb-[10px] uppercase">
                      محتاجة مساعدة
                    </p>
                    <a
                      href="#"
                      className="text-[13px] text-[#c53a19]"
                    >
                      Whatsapp
                    </a>
                  </div>
                  <div className="w-[50%] text-center">
                    <p className="text-[#000000b8] text-[12px] mb-[10px] uppercase">
                      البريد الالکتروني
                    </p>
                    <a
                      href="#"
                      className="text-[13px] text-[#c53a19]"
                    >
                      customercare@katwalk.sa
                    </a>
                  </div>
                </div>
                <div>
                  <div className="text-center">
                    <p className="text-[#000000b8] text-[12px] mb-[10px] uppercase pt-[30px]">
                      العلاقات العامة
                    </p>
                    <a
                      href="#"
                      className="text-[13px] text-[#c53a19]"
                    >
                      info@katwalk.sa
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="ml-[12px] mr-[22px]">
              <a
                href="#"
                className="text-[#fff] whitespace-nowrap text-[12px] tracking-[0.05em] uppercase cursor-pointer"
              >
                انضمي معنا!
              </a>
            </li>
            <li className="ml-[12px] mr-[22px]">
              <Link href="/ar/faqs">
                <a className="text-[#fff] whitespace-nowrap text-[12px] tracking-[0.05em] uppercase cursor-pointer">
                  الأسئلة المتكررة
                </a>
              </Link>
            </li>
            <li >
              <Link href="/ar/privacypolicy">
                <a className="far text-[#fff] whitespace-nowrap text-[12px] tracking-[0.05em] uppercase cursor-pointer">
                  سياسة الخصوصية والشروط والأحكام
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-end  items-center sm:justify-center ">
          <p className={`${styles.footer_right_div} text-[#fff] text-[10px] tracking-[0.05em] uppercase cursor-pointer pr-[20px] pb-[4px] text-right     sm:text-right sm:text-[12px] sm:pb-[0]`}>
            © كات ووك ٢٠٢١ ٢٠٦٢٦١٧٥٩١ الرقم الضريبي ٣١٠٤٠١٦٩١٢٠٠٠٠٣
          </p>
          <div className={`${styles.right_img_div} max-w-[40px] mt-[5px] mr-[10px]     sm:mr-[25px] sm:max-w-[45px]`}>
            <span className="image_container">
              <Image src={vat} className="cursor-pointer" alt="image" />
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
