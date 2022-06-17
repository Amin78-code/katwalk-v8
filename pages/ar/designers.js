import React, { useState, useRef } from "react";
import Image from "next/image";
import Layout from "../../components/rtl/layout/Layout";
import Eight from "../../assets/images/designers/eight.jpg";
import FourteenTen from "../../assets/images/designers/fourteen-ten.jpg";
import NadaLine from "../../assets/images/designers/nada-line.jpg";
import ZahraLine from "../../assets/images/designers/zahra-line.jpg";
import WalaaKazem from "../../assets/images/designers/walaa-kazem.jpg";
import KafByKaf from "../../assets/images/designers/kaf-by-kaf.jpg";
import FouzCouture from "../../assets/images/designers/fouz-couture.jpg";
import Gmash from "../../assets/images/designers/gmash.jpg";
import Nakhlah from "../../assets/images/designers/nakhlah.jpg";
import Clue from "../../assets/images/designers/clue.jpg";
import Maliha from "../../assets/images/designers/maliha.jpg";
import RawMestika from "../../assets/images/designers/raw-mestika.jpg";
import EstiloDesigns from "../../assets/images/designers/estilo-designs.jpg";
import MunaMattar from "../../assets/images/designers/muna-mattar.jpg";
import styles from "../../components/rtl/designers.module.css";
import Link from "next/link";
import ImgLazyLoad from "../../components/rtl/img-lazy-load/ImgLazyLoad";
import { useEffect } from "react";
function Designers() {
  useEffect(() => {
    document.querySelector("body").style.direction = 'rtl'
  }, [])
  const designers = [
    {
      name: "ثمانية",
      image: Eight,
    },
    {
      name: "فورتين تين",
      image: FourteenTen,
    },
    {
      name: "ندى لاين",
      image: NadaLine,
    },
    {
      name: "زهرة لاين",
      image: ZahraLine,
    },
    {
      name: "ولاء كاظم",
      image: WalaaKazem,
    },
    {
      name: "کاف باي كاف",
      image: KafByKaf,
    },
    {
      name: "فوز كوتور",
      image: FouzCouture,
    },
    {
      name: "جماش",
      image: Gmash,
    },
    {
      name: "نخلة",
      image: Nakhlah,
    },
    {
      name: "كلو",
      image: Clue,
    },
    {
      name: "مليحة",
      image: Maliha,
    },
    {
      name: "رومیستكا",
      image: RawMestika,
    },
    {
      name: "Estilo Designs",
      image: EstiloDesigns,
    },
    {
      name: "منى مطر",
      image: MunaMattar,
    },
  ];

  return (
    <>
      <Layout>
        <div className="w-[100%] max-w-[1600px] mx-auto mt-[80px] px-[3%]     sm:mt-[10px]">
          <div className="flex flex-wrap justify-center gap-x-[20px] flex-col pb-[0px]      sm:flex-row sm:pb-[50px]">
            {designers.map((value, index) => {
              return (
                <>
                  <div
                    key={index}
                    className={`${styles.designer_card} designer-card mt-[20px] mb-[20px]      md:mt-[90px]`}
                  >
                    <Link href="/ar/shop/designer">
                      <a>
                        <div className="w-[100%] h-[100%] mb-[20px]">
                          {/* <Image src={value.image} alt="image" /> */}
                          <ImgLazyLoad src={value.image} alt={"image"} classes={""} />
                        </div>
                        <p className=" text-[#000] text-[18px] mb-[10px]">
                          {value.name}
                        </p>
                      </a>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Designers;
