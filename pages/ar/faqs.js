import React from "react";
import Layout from "../../components/rtl/layout/Layout";
import katwalkBag from "../../assets/images/designers/katwalk-bag.jpg";
import Features from "../../components/rtl/features/Features";
import HeadingAndText from "../../components/rtl/HeadingAndText/HeadingAndText";
import { useEffect } from "react";
import TableForTextPages from "../../components/rtl/TableForTextPages/TableForTextPages";
function FAQ() {
  useEffect(() => {
    document.querySelector("body").style.direction = "rtl";
  }, []);

  const FAQ_Content = [
    // 0
    {
      title: "عن كات ووك",
    },
    // 1
    {
      title: "من كات ووك؟",
      text: [
        "كات ووك مفهوم عصري ومختلف في ربط المصمّمات ذوات الخبرة المبدعات مع محبي الموضة. تقود كات ووك التحوّل في الأزياء العربية؛ من خلال تقديم خدمات متكاملة تساعد المصممات الموهوبات على إحداث تأثيرٍ يساهم في تشكيل مستقبل الأزياء العربية.",
      ],
    },
    // 2
    {
      title: "ما هي تصاميم بيسبوك؟",
      text: [
        "نقدّم تصاميم بيسبوك الحصرية لتوفير التجربة الشخصية المطلقة للقِطَع المُصمَّمة خصيصًا لمن يبحثن عن قِطَع فريدة تتناسب مع ذوقهن ومقاساتهن بدقة. خدمة بيسبوك تُكمّل مظهرك بمجموعة حصرية متنوعة من الألوان والخصائص والأشكال؛ لمنحك التجربة التي طالما رغبت بها.",
      ],
    },
    // 3
    {
      title: "هل تقوم كات ووك بتصميم المنتجات؟",
      text: [
        "كات ووك منصة تسوق إلكترونية تربط المصمّمات ذوات الخبرة والناشئات المبدعات مع محبّي الموضة.",
      ],
    },
    // self
    {
      title: "كيف بإمكاني البيع في كات ووك؟",
      content: [
        {
          type: "paragraph",
          text: ["كوني جزءًا من مستقبل الأزياء العربية عن طريق زيارة"],
        },
        {
          type: "anchor",
          text: "https://4v3p9b7mvnx.typeform.com/joinkatwalk",
        },
      ],
    },
    // 5
    {
      title: "الشحن والتوصيل",
      text: [
        "ماهي الدول التي يتم الشحن إليها؟",
        "نشحن لجميع مدن المملكة في الوقت الحالي.",
      ],
    },
    {
      title: "كم يوم يستغرق توصيل طلبي؟",
      text: [
        "- القطع الجاهزة تستغرق يومين للتسليم إلى الناقل والقطع المفصلة حسب التصميم والمقاس تستغرق ١٠-١٤ يوم للتسليم إلى الناقل",
        "- يتم تسليم الطلبات إلى الناقل الحصري أرامكس ويستغرق المدة التالية",
      ],
    },

    {
      type: "table",
      tableHead: ["الموقع", "المدة الزمنية	", "تكلفة الشحن"],
      tableBody: [
        {
          rowData: ["	المشتري والبائع في بلد واحد", "2-٥ أيام عمل", "مجاناً"],
        },
        {
          rowData: [
            "المشتري في بلد مختلف عن البائع",
            "٦-١٠ أيام عمل",
            "على المشتري",
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

    {
      title: "كيف يمكنني تتبع شحنتي؟",
      text: ["يمكنكِ تتبع شحنتكِ عبر حسابي > طلباتي"],
    },
    // 10
    {
      title: "الطلب",
    },
    {
      title: "كيف يمكنني التواصل مع خدمة العملاء؟",
      
    },
    {
      title: "هل يمكنني الطلب عبر WhatsApp؟",
      text: [
        "جميع الطلبات تتم عبر موقعنا الإلكتروني فقط. بإمكانكِ التواصل معنا عن طريق WhatsApp للحصول على أيّ مساعدة.",
      ],
    },
    {
      title: "كيف سيتم إعلامي أن طلبي مقبول؟",
      text: [
        "بمجرد قبول الطلب/رفضه، سيتم إرسال إشعار تأكيد عبر الرسائل القصيرة أو البريد الإلكتروني أو عبر تطبيق WhatsApp. تستغرق الطلبات ما يصل إلى يوم عمل حتى يتم قبولها مِن قِبَل المصممة",
      ],
    },
    {
      title: "هل يمكنني تغيير طلبي أو تعديله أو إلغاؤه؟",
      text: [
        "يمكنكِ ذلك فقط في حال عدم تأكيد طلبكِ من قِبَل المصممة.",
        "بإمكانكِ تتبع حالة الطلب عبر حسابي > طلباتي",
         ],
    },

    // 15 small text
    {
     
    },

    {
      title: "أعطيت قياسات خاطئة، ماذا أفعل؟",
      text: [
        "يمكنكِ ذلك فقط في حال عدم تأكيد طلبكِ من قِبَل المصممة.",
        "بإمكانكِ تتبع حالة الطلب عبر حسابي > طلباتي",
         ],
    },

    {
      type: "paragraph_sm",
      text: [
        "يُرْجَى ملاحظة أنه وفقًا لقانون التجارة الإلكترونية في المملكة العربية السعودية، لا يمكن إرجاع القطع المفصّلة حسب التصميم والمقاس (منتجات تفصيل وبيسبوك)",
      ],
    },
// 18
    {
      title: "لم أستلم طلبي، ماذا أفعل؟",
      text: [
        "يمكنكِ ذلك فقط في حال عدم تأكيد طلبكِ من قِبَل المصممة. ",
          ],
    },
    // {
    //   title: "Bespoke and Sizing",
    // },
    {
      title: "لم أستلم طلبي، ماذا أفعل؟",
      text: [
        "يمكنكِ تتبع الطلب عبر حسابي > طلباتي ",
       ],
    },
// 20
    {
      title: "استلمت طلبًا خاطئًا/تالفًا، ماذا أفعل؟",
      text: [
       
      ],
    },

    {
      title: "كيف يمكنني مشاركة تجربتي مع كات ووك؟      ",
      text: [
        "نسعد لسماع رأيكِ!",
        ],
    },

    {
      title: "بيسبوك والمقاسات",
    },

    {
      title: "ماهي تصاميم بيسبوك؟",
      text: [
        "نقدّم تصاميم بيسبوك الحصرية لتوفير التجربة الشخصية المطلقة للقِطَع المُصمَّمة خصيصًا لمن يبحثن عن قِطَع فريدة تتناسب مع ذوقهن ومقاساتهن بدقة. خدمة بيسبوك تُكمّل مظهرك بمجموعة حصرية متنوعة من الألوان والخصائص والأشكال؛ لمنحك التجربة التي ترغبين بها.",
      ],
    },

    {
      title: "كيف يمكنني معرفة مقاسي؟",
      text: ["جدول المقاسات أدناه سيساعدكِ في تحديد المقاس!"],
    },
//  25
    {
      type: "table",
      tableHead: [
        "طول الكم (إنش)	",
        "العرض (إنش)	",
        "طول القطعة (إنش)	",
        "طولكِ (سم)	",
        "المقاس",
      ],
      tableBody: [
        {
          rowData: ["٢٥", "٢٠", "٥٠", "١٤٦-١٥٠", "٥٠"],
        },
        {
          rowData: ["٢٦", "٢٢", "٥٢", "١٥٢-١٥٤", "٥٢"],
        },
        {
          rowData: ["٢٧", "٢٣", "٥٤", "١٥٧-١٦٠", "٥٤"],
        },
        {
          rowData: ["٢٨", "٢٥", "٥٦", "١٦٢-١٦٥	", "٥٦"],
        },
        {
          rowData: ["٢٩", "٢٦", "٥٨", "١٦٧-١٧٠	", "٥٨"],
        },
        {
          rowData: ["٣٠	", "٢٨", "٦٠", "١٧٢-١٧٥	", "٦٠"],
        },
      ],
    },
    {
      text: [
        ".نرجو ملاحظة أن القياسات المذكورة أعلاه هي قياسات القطعة، وليست قياسات جسمكِ*",
        ".قد تختلف بعض القطع عن هذه القياسات نظرًا لاختلاف الأقمشة والقصات والمصممات، ولكن بإمكانكِ استخدامها كمرجع**",
        ".إذا كنتِ ترغبين بارتداء عباية أقل من طول كعب القدم، فننصحكِ بطلب مقاس واحد أصغر مما هو موصى به لطولكِ***",
      ],
    },

    {
      title: "كيف يمكنني أخذ مقاساتي بشكل صحيح؟",
      text: ["نرجو الاطلاع على جدول المقاسات الموجود في صفحة المنتج."],
    },

    {
      title: "الاسترجاع والمبالغ المستردة",
    },
    {
      title: "كيف يمكنني استرجاع طلبي؟",
     
    },
    {
      title: "ما هي رسوم الشحن والإرجاع؟",
      text: [
        "العميل هو المسؤول عن تكاليف الاسترجاع للناقل.",
        " إذا كنتِ قد تلقيت طلبكِ، وكان تالفًا أو غير صحيح، سيكون طلبكِ مؤهل للاسترجاع المجاني عن طريق زيارة: واختيار طريقة الاتصال المفضلة لديكِ وذلك خلال ٧ أيام من استلام الطلب",
      ],
    },
    {
      title: "كم يومًا لدي لاسترجاع المنتج؟",
      text: [
        "تتبع كات ووك أنظمة التجارة الإلكترونية في المملكة العربية السعودية.",
        "- القطع الجاهزة قابلة للاسترجاع خلال ٧ أيام من استلام الطلب.",
        "- المنتجات غير القابلة للاسترجاع: القطع المفصلة حسب التصميم والمقاس (منتجات تفصيل وبيسبوك)",
        "- يجب أن تكون المنتجات جديدة وغير مستخدَمة، وبحالتها الأصلية، مع جميع الملصقات المرفقة إن وُجِدَتْ",
      ],
    },
    {
      title: "ماهي المنتجات القابلة للاسترجاع؟",
      text: [
        "تتبع كات ووك أنظمة التجارة الإلكترونية في المملكة العربية السعودية",
        "- القطع الجاهزة قابلة للاسترجاع خلال ٧ أيام من استلام الطلب.",
        "- المنتجات غير القابلة للاسترجاع: القطع المفصلة حسب التصميم والمقاس (منتجات تفصيل وبيسبوك)",
        "- يجب أن تكون المنتجات جديدة، وغير مستخدَمة، وبحالتها الأصلية، مع جميع الملصقات المرفقة إن وُجِدَتْ",
      ],
    },

    {
      title: "كيف يمكنني استرداد المبلغ؟",
      text: [
        "سيتم استرداد المبلغ بعد الفحص والموافقة على المنتج/المنتجات التي تم إرجاعها",
        "- المنتجات المسترجعة، سيتم استرداد مبلغ المنتج بما في ذلك ضريبة القيمة المضافة (باستثناء رسوم الدفع عند التسليم). سيكون العميل مسؤولاً عن تكاليف إرجاع الناقل",
        "- بالنسبة للمنتجات التالفة/غير الصحيحة، سيتم رد المبلغ المدفوع بالكامل. بما في ذلك، إن وُجِدَ، رسوم الدفع عند التسليم ولن يكون العميل مسؤولاً عن تكاليف إرجاع الناقل.",
        "- قد يستغرق المبلغ حتى ٣٠ يومًا ليظهر في رصيدك.",
      ],
    },
    {
      title: "حسابي",
    },
    {
      title: "هل أحتاج إنشاء حساب للتسوق في كات ووك؟",
      text: [
        "نعم. يحب إنشاء حساب في خلال ثوان قليلة باستخدام رقم هاتفك المحمول وذلك لإتمام الطلب.",
      ],
    },
    {
      title: "كيف يمكنني إنشاء حساب؟",
      text: [
        "يمكنكِ إنشاء حساب من خلال النقر على أيقونة الحساب في الزاوية اليمنى في أعلى الصفحة.",
      ],
    },
    {
      title: "كيف يمكنني تغيير معلومات الحساب؟",
      text: [
        "يمكنكِ تغيير تفاصيل الحساب بمجرد النقر على حسابي > تعديل معلومات الحساب",
      ],
    },
    {
      title: "الدفع",
    },
    {
      title: "ما هي وسائل الدفع في كات ووك؟",
      text: [
        "نقبل الدفع عبر مدى، فيزا، ماستر كارد، اس تي سي باي، آبل باي، بطاقات الهدايا الإلكترونية والدفع نقدًا عند الاستلام. يرجى ملاحظة أنه من المتوقع دفع رسوم بقيمة 20 ريالاً سعوديًّا في حال الدفع نقدًا عند الاستلام.",
      ],
    },

    {
      title: "كيف يمكنني اختيار عملة الدفع؟",
      text: [
        "جميع أسعارنا بالريال السعودي. في حال تسوقكِ خارج المملكة العربية السعودية، يرجى التأكد من فرق صرف العملة. ",
      ],
    },
    {
      title: "هل الأسعار تشمل ضريبة القيمة المضافة؟",
      type: "paragraph",
      text: ["جميع أسعارنا تشمل ضريبة القيمة المضافة."],
    },
    {
      title: "متى سيتم احتساب مبلغ الشراء؟",
      text: ["سيتم احتساب مبلغ الشراء مباشرةً عند إتمام الطلب."],
    },
    {
      title: "هل يمكنني الدفع نقدًا عند الاستلام؟",
      text: [
        "نعم. يرجى ملاحظة أنه من المتوقع دفع رسوم بقيمة 20 ريالاً سعوديًّا في حال الدفع نقدًا عند الاستلام.",
      ],
    },
  ];

  return (
    <>
      <Layout>
        <div className="container-for-content-pages border-[1px] border-[#f9f9f9] px-[24px] pb-[25px] ">
          <h1 className="far text-[28px] text-center leading-[1.5] tracking-[0.5] mb-[23px]">
            الأسئلة المتكررة
          </h1>
          <div className="fal px-[20px] md:p-0">
            <HeadingAndText data={FAQ_Content[0]} />
            <HeadingAndText data={FAQ_Content[1]} />
            <HeadingAndText data={FAQ_Content[2]} />
            {/* <h3 className="work-regular text-[20px] pt-[20px] mt-[16px]">
              How can I become a Katwalk partner?
            </h3>
            <p className="work-light text-[#6b6e73] text-[15px] leading-[28px] tracking-[0.5px] pt-[15px]">
              If you’re passionate about becoming a part of the future of
              Arabian fashion, please visit{" "}
              <a
                href="https://4v3p9b7mvnx.typeform.com/joinkatwalk"
                className="text-[#000]"
              >
                https://4v3p9b7mvnx.typeform.com/joinkatwalk
              </a>
            </p> */}
            <HeadingAndText data={FAQ_Content[3]} />
            <HeadingAndText data={FAQ_Content[4]} />
            <p className="fal text-[#6b6e73] text-[15px] leading-[28px] tracking-[0.5px] pt-[15px]">
            كوني جزءًا من مستقبل الأزياء العربية عن طريق زيارة
              <a
                href="https://4v3p9b7mvnx.typeform.com/joinkatwalk"
                className="text-[#000] text-[13px] block"
              >
                https://4v3p9b7mvnx.typeform.com/joinkatwalk
              </a>
            </p>
            <HeadingAndText data={FAQ_Content[5]} />
            
            <HeadingAndText data={FAQ_Content[6]} />
            <TableForTextPages data={FAQ_Content[7]} />
          
            <HeadingAndText data={FAQ_Content[7]} />
            <HeadingAndText data={FAQ_Content[8]} />
            <HeadingAndText data={FAQ_Content[9]} />
            <HeadingAndText data={FAQ_Content[10]} />
            <HeadingAndText data={FAQ_Content[11]} />
            <p className="fal text-[#6b6e73] text-[13px] leading-[1.5] pt-[15px]">
        
         يمكنكِ التواصل مع خدمة العملاء عن طريق زيارة: <a href="katwalk.sa/contact">katwalk.sa/contact</a> 
            </p>
            <HeadingAndText data={FAQ_Content[12]} />
            <HeadingAndText data={FAQ_Content[13]} />
     
           <HeadingAndText data={FAQ_Content[14]} />
           <p className="fal text-[#6b6e73] text-[13px] leading-[1.5] pt-[15px]">
            في حال كانت حالة طلبكِ غير مؤكدة، يمكنكِ تغيير، تعديل أو إلغاء طلبكِ من خلال التواصل مع خدمة العملاء عن طريق زيارة:  <a href="katwalk.sa/contact">katwalk.sa/contact</a>
           </p>
    
          <p className="fal text-[#6b6e73] text-[13px] leading-[1.5] pt-[15px]">
            يُرْجَى ملاحظة أنه وفقًا لقانون التجارة الإلكترونية في المملكة العربية السعودية، لا يمكن إرجاع القطع المفصّلة حسب التصميم والمقاس (منتجات تفصيل وبيسبوك)
            </p>
           {/* a <HeadingAndText data={FAQ_Content[15]} /> */}
            <HeadingAndText data={FAQ_Content[16]} />
            <p className="fal text-[#6b6e73] text-[13px] leading-[1.5] pt-[15px]">
          
            في حال كانت حالة طلبكِ غير مؤكدة، يمكنكِ تغيير، تعديل أو إلغاء طلبكِ من خلال التواصل مع خدمة العملاء عن طريق زيارة:  <a href="katwalk.sa/contact">katwalk.sa/contact</a>
            </p>

            <p className="fal text-[#6b6e73] text-[13px] leading-[1.5] pt-[15px]">
            يُرْجَى ملاحظة أنه وفقًا لقانون التجارة الإلكترونية في المملكة العربية السعودية، لا يمكن إرجاع القطع المفصّلة حسب التصميم والمقاس (منتجات تفصيل وبيسبوك)
            </p>
             <HeadingAndText data={FAQ_Content[18]} />

             <p className="fal text-[#6b6e73] text-[15px] leading-[28px] tracking-[0.5px] pt-[15px]">
            ب. الأسعار
         في حالة وجود خطأ أو عدم مقدرتكِ على تتبع الطلب، يرجى التواصل مع خدمة العملاء عن طريق زيارة: <a href="katwalk.sa/contact">katwalk.sa/contact</a>
</p>

<p className="fal text-[#6b6e73] text-[15px] leading-[28px] tracking-[0.5px] pt-[15px]">
         
في حالة وجود خطأ أو عدم مقدرتكِ على تتبع الطلب، يرجى التواصل مع خدمة العملاء عن طريق زيارة: <a href="katwalk.sa/contact">katwalk.sa/contact</a>
</p>

            <TableForTextPages data={FAQ_Content[19]} />
            <HeadingAndText data={FAQ_Content[20]} />

            <p className="fal text-[#6b6e73] text-[15px] leading-[28px] tracking-[0.5px] pt-[15px]">
         

 نعتذر على ذلك! إذا كنتِ قد تلقيتِ طلبكِ وكان تالفًا أو غير صحيح، سيكون طلبكِ مؤهل للاسترجاع المجاني عن طريق زيارة: <a href="katwalk.sa/contact">katwalk.sa/contact</a> واختيار طريقة الاتصال المفضلة لديكِ، وذلك خلال ٧ أيام من استلام الطلب.

</p>

            <HeadingAndText data={FAQ_Content[21]} />



          <p className="fal text-[#6b6e73] text-[15px] leading-[28px] tracking-[0.5px] pt-[15px]">
               يمكنكِ تعبئة استبيان كات ووك عن طريق زيارة:  <a
                href="https://4v3p9b7mvnx.typeform.com/joinkatwalk"
                className="text-[#000] text-[13px]"
              >
                https://4v3p9b7mvnx.typeform.com/joinkatwalk
              </a>
               </p>  <p className="fal text-[#6b6e73] text-[15px] leading-[28px] tracking-[0.5px] pt-[15px]">
         
                 أو التواصل مع خدمة العملاء عن طريق زيارة:  <a href="katwalk.sa/contact">katwalk.sa/contact</a>
     </p>

            <HeadingAndText data={FAQ_Content[22]} />
            <HeadingAndText data={FAQ_Content[23]} />
            <HeadingAndText data={FAQ_Content[24]} />
            <TableForTextPages data={FAQ_Content[25]} />
            <HeadingAndText data={FAQ_Content[26]} />
            <HeadingAndText data={FAQ_Content[27]} />
            <HeadingAndText data={FAQ_Content[28]} />
            <HeadingAndText data={FAQ_Content[29]} />
            <p className="fal text-[#6b6e73] text-[15px] leading-[28px] tracking-[0.5px] pt-[15px]">
            إذا كنتِ ترغبين في استرجاع طلبكِ، يرجى زيارة: <a href="katwalk.sa/contact">katwalk.sa/contact</a>
            </p>
            <p className="fal text-[#6b6e73] text-[15px] leading-[28px] tracking-[0.5px] pt-[15px]">
             واختيار طريقة الاتصال المفضلة لديكِ، وسوف نعود إليكِ في أقرب وقت ممكن
             </p>
             <p className="fal text-[#6b6e73] text-[15px] leading-[28px] tracking-[0.5px] pt-[15px]">
            - القطع الجاهزة قابلة للاسترجاع في خلال ٧ أيام من استلام الطلب.
            </p>
            <p className="fal text-[#6b6e73] text-[15px] leading-[28px] tracking-[0.5px] pt-[15px]">
            - يجب أن تكون المنتجات جديدة وغير مستخدمة وبحالتها الأصلية مع جميع الملصقات المرفقة إن وُجِدَتْب.
            </p>
            <HeadingAndText data={FAQ_Content[30]} />
            <HeadingAndText data={FAQ_Content[31]} />
            <HeadingAndText data={FAQ_Content[32]} />
            <HeadingAndText data={FAQ_Content[33]} />
            <HeadingAndText data={FAQ_Content[34]} />
            <HeadingAndText data={FAQ_Content[35]} />
            <HeadingAndText data={FAQ_Content[36]} />
            <HeadingAndText data={FAQ_Content[37]} />
            <HeadingAndText data={FAQ_Content[38]} />
            <HeadingAndText data={FAQ_Content[39]} />
            <HeadingAndText data={FAQ_Content[40]} />
            <HeadingAndText data={FAQ_Content[41]} />
            <HeadingAndText data={FAQ_Content[42]} />
            <HeadingAndText data={FAQ_Content[43]} />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default FAQ;
