"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // You can replace this with your API call or form submission logic
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white px-4 py-10">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-12 max-w-6xl w-full">

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 space-y-4 w-full max-w-md"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              onChange={handleChange}
              className="flex-1 p-3 rounded-md bg-[#f7f5f1] focus:outline-none text-gray-800"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              onChange={handleChange}
              className="flex-1 p-3 rounded-md bg-[#f7f5f1] focus:outline-none text-gray-800"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-[#f7f5f1] focus:outline-none text-gray-800"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-[#f7f5f1] focus:outline-none text-gray-800"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-[#f7f5f1] focus:outline-none text-gray-800"
          />
          <textarea
            name="message"
            placeholder="Message"
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-[#f7f5f1] h-32 focus:outline-none text-gray-800"
          />
          <button
            type="submit"
            className="w-full bg-[#013d45] text-white py-3 rounded-md hover:bg-[#012c32] transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info Section */}
        <div className="flex-1 flex flex-col gap-8 text-[#012c32] w-full max-w-md">
          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="bg-[#012c32] p-3 rounded-full">
              <Phone className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-lg">+94 41 313 0665</p>
              <p className="font-bold text-lg">+94 41 228 2268</p>
              <p className="text-sm mt-1 text-gray-600">Call us</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="bg-[#012c32] p-3 rounded-full">
              <Mail className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-lg">liyonta@gmail.com</p>
              <p className="text-sm mt-1 text-gray-600">Email us</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="bg-[#012c32] p-3 rounded-full">
              <MapPin className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-lg">
                Liyonta Tea Factory, <br />
                Dangala, Alapaladeniya
              </p>
              <p className="text-sm mt-1 text-gray-600">Our Address</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
