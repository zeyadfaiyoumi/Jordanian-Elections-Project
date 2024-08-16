import React from "react";
import jordanImage from '../Media/jordan.jpg'; // Adjust the import path according to your file structure
import Footer from "../component/footer";
import Nav from "../component/Nav";

const AboutUs = () => {
  const sections = [
    {
      title: "مرحبًا بكم في منصة الانتخابات الأردنية",
      content:
        "مهمتنا هي تقديم منصة إلكترونية شفافة وآمنة وسهلة الاستخدام مخصصة للعملية الانتخابية الأردنية. نحن ملتزمون بزيادة الوعي الانتخابي، وتشجيع المشاركة، وضمان نزاهة النظام الانتخابي.",
    },
    {
      title: "قصتنا",
      content:
        "تأسست منصتنا برؤية لتحديث وتبسيط العملية الانتخابية، وتمثل خطوة هامة نحو تحقيق المزيد من الشفافية والمشاركة في الانتخابات. بقيادة مبادئ النزاهة، والوصول، والأمان، طوّر فريقنا حلاً شاملاً يلبي احتياجات الناخبين، والمترشحين، والإداريين على حد سواء.",
    },
    {
      title: "ماذا نقدم",
      content:
        "للمصوتين: توفر منصتنا وصولاً سهلاً إلى العملية الانتخابية، بما في ذلك التسجيل، تصفح القوائم الانتخابية، الإدلاء بالأصوات، وعرض النتائج. يمكن للناخبين الاستمتاع بتجربة سلسة مع التركيز على الوضوح والبساطة.\n\nللمترشحين: يمكن للمترشحين تقديم طلباتهم، عرض حالة ترشحهم، وإدارة ملفاتهم الشخصية. تضمن منصتنا عملية سلسة لطلبات الترشح وإعلانات الانتخابات، بما في ذلك قسم مخصص للخدمات المدفوعة.",
    },
    {
      title: "ميزاتنا",
      content:
        "تصميم سهل الاستخدام: تم تصميم موقعنا مع التركيز على سهولة الاستخدام، مما يضمن أن جميع المستخدمين يمكنهم التنقل في المنصة بسهولة.\n\nتسجيل دخول آمن: عملية تحقق متعددة الخطوات تضمن أمان وخصوصية حسابات المستخدمين.\n\nصفحات الانتخابات: يمكن للناخبين الوصول إلى دوائرهم الانتخابية، التصويت في القوائم المحلية والحزبية، وعرض نتائج الانتخابات. يمكن للمترشحين تقديم طلبات الترشح وإدارة إعلاناتهم.\n\nلوحة تحكم المسؤولين: توفر أدوات شاملة لإدارة الانتخابات، حسابات المستخدمين، وأداء النظام العام.\n\nتحسينات مبتكرة: تشمل تحديثات حية لنسب التصويت، مناظرات المترشحين عبر Zoom، دعم الدردشة الحية، وخيارات الدفع المتكاملة للإعلانات.",
    },
    {
      title: "قانون الهيئة المستقلة للانتخاب",
      content: "قانون الهيئة المستقلة للانتخاب رقم (11) لسنة 2012.",
    },
  ];

  return (
    <>
    <Nav/>
    <div className="bg-gray-100">
      <div
        className="relative bg-cover bg-center h-64"
        style={{ backgroundImage: `url(${jordanImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold">نبذة عن الهيئة</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${jordanImage})` }}
              ></div>
              <div className="relative bg-white bg-opacity-60 p-6 h-full">
                <h2 className="text-xl font-semibold mb-4 text-right">
                  {section.title}
                </h2>
                <p className="text-gray-700 text-right whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;
