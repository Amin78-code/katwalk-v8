import React from "react";
import Layout from "../../components/rtl/layout/Layout";
import katwalkBag from "../../assets/images/designers/katwalk-bag.jpg";
import Features from "../../components/rtl/features/Features";
import HeadingAndText from "../../components/rtl/heading-and-text/HeadingAndText";
import { useEffect } from "react";
function FAQ() {
  useEffect(() => {
    document.querySelector("body").style.direction = 'rtl'
  }, [])

  const FAQ_Content = [
    {
      title: "عن كات ووك",
    },
    {
      title: "من كات ووك؟",
      content: [
        {
          type: "paragraph",
          text: [
            "كات ووك مفهوم عصري ومختلف في ربط المصمّمات ذوات الخبرة المبدعات مع محبي الموضة. تقود كات ووك التحوّل في الأزياء العربية؛ من خلال تقديم خدمات متكاملة تساعد المصممات الموهوبات على إحداث تأثيرٍ يساهم في تشكيل مستقبل الأزياء العربية.",
          ],
        },
      ],
    },
    {
      title: "ما هي تصاميم بيسبوك؟",
      content: [
        {
          type: "paragraph",
          text: [
            "نقدّم تصاميم بيسبوك الحصرية لتوفير التجربة الشخصية المطلقة للقِطَع المُصمَّمة خصيصًا لمن يبحثن عن قِطَع فريدة تتناسب مع ذوقهن ومقاساتهن بدقة. خدمة بيسبوك تُكمّل مظهرك بمجموعة حصرية متنوعة من الألوان والخصائص والأشكال؛ لمنحك التجربة التي طالما رغبت بها.",
          ],
        },
      ],
    },
    {
      title: "هل تقوم كات ووك بتصميم المنتجات؟",
      content: [
        {
          type: "paragraph",
          text: [
            "كات ووك منصة تسوق إلكترونية تربط المصمّمات ذوات الخبرة والناشئات المبدعات مع محبّي الموضة.",
          ],
        },
      ],
    },
    {
      title: "كيف بإمكاني البيع في كات ووك؟",
      content: [
        {
          type: "paragraph",
          text: [
            "كوني جزءًا من مستقبل الأزياء العربية عن طريق زيارة",
          ],
        },
        {
          type: "anchor",
          text: "https://4v3p9b7mvnx.typeform.com/joinkatwalk",
        },
      ],
    },
    {
      title: "الشحن والتوصيل",
      content: [
        {
          type: "paragraph",
          text: [
            "ماهي الدول التي يتم الشحن إليها؟",
            "نشحن لجميع مدن المملكة في الوقت الحالي.",
          ],
        },
      ],
    },
    {
      title: "كم يوم يستغرق توصيل طلبي؟",
      content: [
        {
          type: "paragraph",
          text: [
            "- القطع الجاهزة تستغرق يومين للتسليم إلى الناقل والقطع المفصلة حسب التصميم والمقاس تستغرق ١٠-١٤ يوم للتسليم إلى الناقل",
            "- يتم تسليم الطلبات إلى الناقل الحصري أرامكس ويستغرق المدة التالية",
          ],
        },
        {
          type: "table",
          tableHead: ["تكلفة الشحن", "المدة الزمنية	", "الموقع"],
          tableBody: [
            {
              rowData: [
                "مجاناً",
                "2-٥ أيام عمل",
                "	المشتري والبائع في بلد واحد",
              ],
            },

            {
              rowData: [
                "على المشتري",
                "٦-١٠ أيام عمل",
                "المشتري في بلد مختلف عن البائع",
              ],
            },
          ],
        },
        {
          type: "paragraph",
          text: [
            "- هذا الجدول مجرد تقدير زمني للتسليم، والبائعين لدينا يبذلون قصارى جهودهم لتسليم الطلبات الخاصة بكِ في الوقت المحدد.",

            "- يرجى ملاحظة أنه قد يكون هناك بعض التأخير خلال مواسم الذروة والترويج والعطلات",
            "- من المتوقع أن تدفع أي طلبات نقدية عند التسليم 20 ريال سعودي للشحن المحلي",
            "- عندما يتم وضع طلبكِ للتسليم سيتم الاتصال بكِ من قبل الناقل لتأكيد موقعك والوقت. يرجى ملاحظة أن لديك فقط 3 محاولات لاستلام الطلب قبل إلغاء طلبكِ أو سيتم تطبيق رسوم إضافية.",
          ],
        },
      ],
    },
    {
      title: "كيف يمكنني تتبع شحنتي؟",
      content: [
        {
          type: "paragraph",
          text: [
            "يمكنكِ تتبع شحنتكِ عبر حسابي > طلباتي",
          ],
        },
      ],
    },
    {
      title: "الطلب",
    },
    {
      title: "كيف يمكنني التواصل مع خدمة العملاء؟",
      content: [
        {
          type: "paragraph",
          text: ["يمكنكِ التواصل مع خدمة العملاء عن طريق زيارة: katwalk.sa/contact"],
        },
      ],
    },
    {
      title: "هل يمكنني الطلب عبر WhatsApp؟",
      content: [
        {
          type: "paragraph",
          text: [
            "جميع الطلبات تتم عبر موقعنا الإلكتروني فقط. بإمكانكِ التواصل معنا عن طريق WhatsApp للحصول على أيّ مساعدة.",
          ],
        },
      ],
    },
    {
      title: "كيف سيتم إعلامي أن طلبي مقبول؟",
      content: [
        {
          type: "paragraph",
          text: [
            "بمجرد قبول الطلب/رفضه، سيتم إرسال إشعار تأكيد عبر الرسائل القصيرة أو البريد الإلكتروني أو عبر تطبيق WhatsApp. تستغرق الطلبات ما يصل إلى يوم عمل حتى يتم قبولها مِن قِبَل المصممة",
          ],
        },
      ],
    },
    {
      title: "هل يمكنني تغيير طلبي أو تعديله أو إلغاؤه؟",
      content: [
        {
          type: "paragraph",
          text: [
            "يمكنكِ ذلك فقط في حال عدم تأكيد طلبكِ من قِبَل المصممة.",
            "بإمكانكِ تتبع حالة الطلب عبر حسابي > طلباتي",
            "في حال كانت حالة طلبكِ غير مؤكدة، يمكنكِ تغيير، تعديل أو إلغاء طلبكِ من خلال التواصل مع خدمة العملاء عن طريق زيارة:  katwalk.sa/contact",
          ],
        },
        {
          type: "paragraph_sm",
          text: [
            "يُرْجَى ملاحظة أنه وفقًا لقانون التجارة الإلكترونية في المملكة العربية السعودية، لا يمكن إرجاع القطع المفصّلة حسب التصميم والمقاس (منتجات تفصيل وبيسبوك)"
          ],
        },
      ],
    },
    {
      title: "أعطيت قياسات خاطئة، ماذا أفعل؟",
      content: [
        {
          type: "paragraph",
          text: [
            "يمكنكِ ذلك فقط في حال عدم تأكيد طلبكِ من قِبَل المصممة.",
            "بإمكانكِ تتبع حالة الطلب عبر حسابي > طلباتي",
            "في حال كانت حالة طلبكِ غير مؤكدة، يمكنكِ تغيير، تعديل أو إلغاء طلبكِ من خلال التواصل مع خدمة العملاء عن طريق زيارة:  katwalk.sa/contact",
          ],
        },
        {
          type: "paragraph_sm",
          text: [
            "يُرْجَى ملاحظة أنه وفقًا لقانون التجارة الإلكترونية في المملكة العربية السعودية، لا يمكن إرجاع القطع المفصّلة حسب التصميم والمقاس (منتجات تفصيل وبيسبوك)"
          ],
        },
      ],
    },
    {
      title: "How can I share my feedback about my Katwalk experience?",
      content: [
        {
          type: "paragraph",
          text: [
            "We’re always happy to hear from you. You can share your experience via our 10-sec shopping survey  or you can reach us through  We’re all ears!",
          ],
        },
      ],
    },
    {
      title: "Bespoke and Sizing",
    },
    {
      title: "What are bespoke designs?",
      content: [
        {
          type: "paragraph",
          text: [
            "Katwalk’s bespoke designs provide the ultimate personalised and unique pieces tailored to your tastes and exact size and fit. We complement your look with exclusivity and a variety of colours, cuts, and shapes to provide you with the experience and pieces you desire.",
          ],
        },
      ],
    },

    {
      title: "What size should I get?",
      content: [
        {
          type: "paragraph",
          text: [
            "We have provided below Guide to help you decide which size to buy!",
          ],
        },
        {
          type: "table",
          tableHead: [
            "Size",
            "Your Height (cm)",
            "Length (in)",
            "Bust (in)",
            "Sleeve Length (in)",
          ],
          tableBody: [
            {
              rowData: ["50", "146-150", "50", "20", "25"],
            },
            {
              rowData: ["52", "152-154", "52", "22", "26"],
            },
            {
              rowData: ["54", "157-160", "54", "23", "27"],
            },
            {
              rowData: ["56", "162-165", "56", "25", "28"],
            },
            {
              rowData: ["58", "167-170", "58", "26", "29"],
            },
            {
              rowData: ["60", "172-175", "60", "28", "30"],
            },
          ],
        },
        {
          type: "paragraph",
          text: [
            "*Please note that the above measurements are for the piece itself, NOT YOUR BODY MEASUREMENTS.",
            "**Some pieces may vary from these measurements due to different fabrics, styles, cuts, and designers, but you can still use them as a reference.",
            "***Please note that if you like to wear maxi length abayas, we recommend ordering one size smaller to what has been recommended for your height.",
          ],
        },
      ],
    },
    {
      title: "How can I take my measurements?",
      content: [
        {
          type: "paragraph",
          text: ["Please check Size Guide in product page."],
        },
      ],
    },
    {
      title: "Order Issues",
    },
    {
      title: "I have not received my order. What should I do?",
      content: [
        {
          type: "paragraph",
          text: [
            "You can track your order by visiting My Account > Purchase History.",
            "If you are still experiencing issues with your order, reach out to us at , and we’ll help work everything out.",
          ],
        },
      ],
    },
    {
      title: "I received an incorrect/damaged product. What should I do?",
      content: [
        {
          type: "paragraph",
          text: [
            "We’re sorry for that! All incorrect/accidentally damaged orders are eligible for a free return.",
            "If you are experiencing any issues with your order, simply visit us at  and we’ll help work everything out.",
          ],
        },
      ],
    },
    {
      title: "I gave the wrong measurements. What should I do?",
      content: [
        {
          type: "paragraph",
          text: [
            "It is possible to change or cancel an order that has not yet been accepted by the seller. Once an order has been accepted, it cannot be changed or cancelled.",
            "You can check the status of your order by visiting My Account > Purchase History.",
            "If you wish to change, edit or cancel a non-approved order, please visit .",
            "Kindly note that following the Electronic Commerce Law in Saudi Arabia, made-to-measure pieces and bespoke designs cannot be returned.",
          ],
        },
      ],
    },
    {
      title: "Can I change, edit, or cancel my order once it has been placed?",
      content: [
        {
          type: "paragraph",
          text: [
            "It is possible to change or cancel an order that has not yet been accepted by the seller. Once an order has been accepted, it cannot be changed or cancelled.",
            "You can check the status of your order by visiting My Account > Purchase History.",
            "If you wish to change, edit or cancel a non-approved order, please visit .",
            "Kindly note that following the Electronic Commerce Law in Saudi Arabia, made-to-measure pieces and bespoke designs cannot be returned.",
          ],
        },
      ],
    },
    {
      title: "Returns and Refunds",
    },
    {
      title: "How can I return a product?",
      content: [
        {
          type: "paragraph",
          text: [
            "If you wish to return your order, please visit  and select your preferred contact method. We will get back to you as soon as possible.",
            "- Please note that ready-to-wear products are eligible for return within 7 days of delivery.",
            "- Products must be new, unused, and in their original condition with all tags attached.",
          ],
        },
      ],
    },
    {
      title: "How much does it cost to return a product?",
      content: [
        {
          type: "paragraph",
          text: [
            "If you wish to return a product, you are responsible for the carrier return costs.",
            "If you have received a damaged or incorrect order, you are eligible for a free return.",
          ],
        },
      ],
    },
    {
      title: "How long do I have to return a product?",
      content: [
        {
          type: "paragraph",
          text: [
            "Katwalk follows Saudi Arabian e-commerce regulations.",
            "- Ready-to-wear products are eligible for return within 7 days of delivery.",
            "- Products must be new, unused, and in their original condition with all tags attached.",
          ],
        },
      ],
    },
    {
      title: "What can I return?",
      content: [
        {
          type: "paragraph",
          text: [
            "Katwalk follows Saudi Arabian e-commerce regulations.",
            "- Non-returnable items: any customizable product that has been made or tailored especially for you (made-to-measure and bespoke designs).",
            "Returnable items:",
            "- Ready-to-wear products are eligible for return within 7 days of delivery.",
            "- Products must be new, unused, and in their original condition with all tags attached.",
          ],
        },
      ],
    },
    {
      title: "Do I get a refund or store credit for returns?",
      content: [
        {
          type: "paragraph",
          text: [
            "ou will receive a refund after the returned items have been inspected and approved.",
            "- For returned items, you will be refunded the full paid amount, including VAT (excluding cash-on-delivery fees). You are responsible for any carrier return costs.",
            "- For damaged or incorrect items, you will be refunded the full paid amount, including cash-on-delivery fees, if applicable. You are not liable for any carrier return costs for damaged or incorrect items.",
            "- You will be refunded via your original payment method. It can take up to 30 days for the amount to appear in your account.",
          ],
        },
      ],
    },
    {
      title: "Account",
    },
    {
      title: "Do I need to create an account to shop at Katwalk?",
      content: [
        {
          type: "paragraph",
          text: [
            "Yes. You can create an account within a few seconds using your mobile number.",
          ],
        },
      ],
    },
    {
      title: "How can I create an account?",
      content: [
        {
          type: "paragraph",
          text: [
            "You can create an account by clicking on the account icon at the top right corner of any page of the website.",
          ],
        },
      ],
    },
    {
      title: "How can I change account details?",
      content: [
        {
          type: "paragraph",
          text: [
            "You can change account details by simply going to My Account > Manage Profile.",
          ],
        },
      ],
    },
    {
      title: "Payments",
    },
    {
      title: "What payment methods can I use?",
      content: [
        {
          type: "paragraph",
          text: [
            "We accept payments via Mada, Visa, Mastercard, STC Pay, Apple Pay, Katwalk eGift cards, and cash on delivery. Please be aware that any cash-on-delivery orders are subject to an anticipated fee of SAR 20",
          ],
        },
      ],
    },
    {
      title: "How do I select a payment currency?",
      content: [
        {
          type: "paragraph",
          text: [
            "All our prices are listed in SAR. Kindly note that if you are shopping outside Saudi Arabia, you are responsible for knowing currency exchange rates.",
          ],
        },
      ],
    },
    {
      title: "Is VAT included in prices?",
      content: [
        {
          type: "paragraph",
          text: ["All our prices are VAT inclusive."],
        },
      ],
    },
    {
      title: "When will I be charged for my order?",
      content: [
        {
          type: "paragraph",
          text: [
            "You will be charged directly once your order has been approved.",
          ],
        },
      ],
    },
    {
      title: "Can I pay cash on delivery?",
      content: [
        {
          type: "paragraph",
          text: [
            "Yes. Please be aware that any cash-on-delivery orders are subject to an anticipated fee of SAR 20.",
          ],
        },
      ],
    },
  ];

  return (
    <>
      <Layout>
        <div className="container-for-content-pages border-[1px] border-[#f9f9f9]">
          <h1 className=" text-[28px] text-center leading-[1.5] tracking-[0.5] mb-[23px]">
            الأسئلة المتكررة
          </h1>
          <div className="px-[20px] md:p-0">
            {FAQ_Content.map((value, index) => {
              return <HeadingAndText data={value} key={index} />;
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default FAQ;
