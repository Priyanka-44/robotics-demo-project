'use client';

import { useState } from 'react';

export default function ContactPage() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: '',
  });

  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  }

  async function handleSubmit(e) {

    e.preventDefault();

    try {

      const response = await fetch('/api/rfq', {

        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(formData),

      });

      const data = await response.json();

      if (data.success) {

        alert('RFQ Submitted Successfully 🚀');

        setFormData({
          name: '',
          email: '',
          company: '',
          product: '',
          message: '',
        });

      } else {

        alert('Something went wrong');

      }

    } catch (error) {

      console.log(error);

    }

  }
  return (

    <div className="bg-gray-100 min-h-screen">


      <section className="bg-blue-700 text-white py-24 px-10 text-center">

        <h1 className="text-6xl font-bold mb-6">
          Request A Quote
        </h1>

        <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
          Contact our robotics experts and get the perfect automation
          solution for your business.
        </p>

      </section>


      <section className="px-10 py-20">

        <div className="grid lg:grid-cols-2 gap-14 max-w-7xl mx-auto">

          <div>

            <h2 className="text-5xl font-bold mb-8 leading-tight">
              Let's Build The Future Of Robotics Together
            </h2>

            <p className="text-gray-600 text-lg leading-8 mb-10">
              Our team specializes in AI-powered robotics,
              automation systems, industrial robotics,
              surveillance solutions, and smart warehouse technology.
            </p>


            <div className="space-y-6">

              <div className="bg-white p-6 rounded-2xl shadow">

                <h3 className="text-2xl font-bold mb-2">
                  📍 Office
                </h3>

                <p className="text-gray-600">
                  Ahmedabad, Gujarat, India
                </p>

              </div>


              <div className="bg-white p-6 rounded-2xl shadow">

                <h3 className="text-2xl font-bold mb-2">
                  📧 Email
                </h3>

                <p className="text-gray-600">
                  info@roboxcel.com
                </p>

              </div>


              <div className="bg-white p-6 rounded-2xl shadow">

                <h3 className="text-2xl font-bold mb-2">
                  📞 Phone
                </h3>

                <p className="text-gray-600">
                  +91 9876543210
                </p>

              </div>

            </div>

          </div>

          <div className="bg-white p-10 rounded-3xl shadow-2xl">

            <h2 className="text-4xl font-bold mb-10">
              Contact Form
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <div>

                <label className="block mb-2 font-semibold">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 px-5 py-4 rounded-2xl outline-none focus:border-blue-700"
                />

              </div>


              <div>

                <label className="block mb-2 font-semibold">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 px-5 py-4 rounded-2xl outline-none focus:border-blue-700"
                />

              </div>


              <div>

                <label className="block mb-2 font-semibold">
                  Company Name
                </label>

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter company name"
                  className="w-full border border-gray-300 px-5 py-4 rounded-2xl outline-none focus:border-blue-700"
                />

              </div>


              <div>

                <label className="block mb-2 font-semibold">
                  Product Interested In
                </label>

                <input
                  type="text"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  placeholder="AI Robot / Drone / Automation..."
                  className="w-full border border-gray-300 px-5 py-4 rounded-2xl outline-none focus:border-blue-700"
                />

              </div>


              <div>

                <label className="block mb-2 font-semibold">
                  Message
                </label>

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your requirements..."
                  className="w-full border border-gray-300 px-5 py-4 rounded-2xl outline-none focus:border-blue-700"
                />

              </div>



              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-2xl text-xl font-semibold transition"
              >
                Submit Request
              </button>

            </form>

          </div>

        </div>

      </section>

    </div>

  );
}