import React from "react";
import Layout from "../components/layout/Layout";
import printImg from "../assets/images/categories/1print.jpg";
import styles from '../styles/About.module.css';
import ImgLazyLoad from "../components/img-lazy-load/ImgLazyLoad";

function About() {
  

  return (
    <>
      <Layout>
        <div className="w-[100%] max-w-[1530px] h-[auto] mt-[120px] mb-[20px] px-[15px] mx-auto flex flex-col     xl:h-[790px] lg:flex-row md:px-[50px] nd:mt-[120px]">
          <div className={`${styles.left_img_main_div} max-w-[550px] w-[100%] image_container2`}>
            <ImgLazyLoad src={printImg} alt={"image"} classes={""} />
          </div>
          <div className="text-center max-w-[762px] px-[0px] mx-auto pt-[40px] pb-[20px]     lg:px-[80px] md:px-[20px] md:pt-[50px] md:pb-[50px]">
            <h1 className=" fahkwang-light text-[28px] text-center leading-[1.5] tracking-[0.5] mb-[13px]    md:mb-[23px]">
              About Katwalk
            </h1>
            <p className="work-light text-[#6b6e73] text-[15px] leading-[28px] tracking-[0.5px] pt-[15px]">
              {" "}
              We live in a time when Arabian fashion has evolved from the
              traditional norm to become a part of womens chic everyday wear.
            </p>
            <p className="work-light text-[#6b6e73] text-[15px] leading-[28px] tracking-[0.5px] pt-[15px]">
              katwalk exists to make sure women have the shopping experience
              they have always wanted. We elevate traditional local shopping to
              a modern and seamless shopping experience.
            </p>
            <p className="work-light text-[#6b6e73] text-[15px] leading-[28px] tracking-[0.5px] pt-[15px]">
              At katwalk, we’re doing shopping differently. katwalk is an
              elegant and sophisticated marketplace that connects creative and
              emerging designers with fashion-forward customers, bringing
              together what’s new in the world of Arabian fashion.
            </p>
            <p className="work-light text-[#6b6e73] text-[15px] leading-[28px] tracking-[0.5px] pt-[15px]">
              katwalk reflects modest fashion with a modern twist by providing
              inclusive services to talented designers to make an impact and
              forge the future of Arabian fashion.
            </p>
            <p className="work-light text-[#6b6e73] text-[15px] leading-[28px] tracking-[0.5px] pt-[15px]">
              Welcome to katwalk
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default About;
