import React, { useState } from "react";
import jordanImage from '../Media/jordan.jpg';
import Footer from "../component/footer";
import Nav from "../component/Nav";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const cards = [
    { title: "خدمة العملاء", description: "نحن هنا لمساعدتك في أي استفسارات" },
    { title: "الدعم الفني", description: "فريق تقني متخصص لحل مشاكلك" },
    { title: "الاقتراحات", description: "نرحب بأفكارك لتحسين خدماتنا" },
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
          <h1 className="text-white text-4xl font-bold">تواصل معنا</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${jordanImage})` }}
              ></div>
              <div className="relative bg-white bg-opacity-90 p-6 h-full">
                <h3 className="text-xl font-semibold mb-2 text-right">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-right">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="relative bg-cover bg-center"
          style={{ backgroundImage: `url(${jordanImage})` }}
        >
          <div className="absolute inset-0 bg-gray-100 opacity-30"></div>{" "}
          {/* Adjust opacity for better contrast */}
          <div className="relative bg-white bg-opacity-90 p-6 md:p-8 lg:p-12 rounded-lg shadow-lg mx-auto max-w-2xl mt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  الاسم
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  الرسالة
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                إرسال
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;