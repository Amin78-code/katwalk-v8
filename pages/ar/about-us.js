import React from "react";
import Layout from "../../components/rtl/layout/Layout";
import printImg from "../../assets/images/categories/1print.jpg";
import styles from '../../components/rtl/about.module.css';
import ImgLazyLoad from "../../components/rtl/img-lazy-load/ImgLazyLoad";
import { useEffect } from "react";
function About() {
  useEffect(() => {
    document.querySelector("body").style.direction = 'rtl'
  }, [])

  return (
    <>
      <Layout>
        <div className="w-[100%] max-w-[1530px] h-[auto] mt-[120px] mb-[20px] px-[15px] mx-auto flex flex-col     xl:h-[790px] lg:flex-row md:px-[50px] nd:mt-[120px]">

          <div className="text-center max-w-[762px] px-[0px] mx-auto pt-[40px] pb-[20px]     lg:px-[80px] md:px-[20px] md:pt-[50px] md:pb-[50px]">
            <h1 className=" text-[28px] text-center leading-[1.5] tracking-[0.5] mb-[13px]    md:mb-[23px]">
              عن كات ووك
            </h1>
            <p className=" text-[#6b6e73] text-[15px] leading-[28px] tracking-[0.5px] pt-[15px]">
              {" "}
              نحن نعيش في وقتٍ تطوّرت فيه الأزياء العربية من عادات تقليدية وشعبية إلى جزء من إطلالة المرأة الأنيقة اليومية.
            </p>
            <p className=" text-[#6b6e73] text-[15px] leading-[28px] tracking-[0.5px] pt-[15px]">
              وُجِدَتْ كات ووك ضمان التجربة التي لطالما أرادتها المرأة العربية؛ برفع مستوى التسوق المحلي التقليدي إلى تجربة عصرية سلسة.
            </p>
            <p className=" text-[#6b6e73] text-[15px] leading-[28px] tracking-[0.5px] pt-[15px]">
              كات ووك ليست مجرد منصة تسوق إلكترونية، بل مفهوم عصري ومختلف في ربط المصمّمات ذوات الخبرة والناشئات المبدعات مع محبي الموضة.
            </p>
            <p className=" text-[#6b6e73] text-[15px] leading-[28px] tracking-[0.5px] pt-[15px]">
              تقود كات ووك التحول في الأزياء العربية من خلال تقديم خدمات متكاملة تساعد المصممات الموهوبات على إحداث تأثيرٍ يساهم في تشكيل مستقبل الأزياء العربية.
            </p>
            <p className=" text-[#6b6e73] text-[15px] leading-[28px] tracking-[0.5px] pt-[15px]">
              مرحبًا بكِ في كات ووك
            </p>
          </div>
          <div className={`${styles.left_img_main_div} max-w-[550px] w-[100%] image_container2`}>
            {/* <span className={`${styles.left_img_main_div} max-w-[550px] w-[100%] image_container2 block`}> */}
            {/* <Image src={printImg} alt="image" /> */}
            <ImgLazyLoad src={printImg} alt={"image"} classes={""} />
            {/* </span> */}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default About;
