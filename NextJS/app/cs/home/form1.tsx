"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // You can add actual form submission logic here
  };

  return (
    <div className="min-h-screen bg-cover bg-center">
      <div className="flex flex-col md:flex-row justify-center items-center min-h-screen">
        
        {/* Form Section */}
        <form onSubmit={handleSubmit} className="bg-white/20 p-8 rounded-xl shadow-md space-y-4 w-full md:w-2/3 max-w-2xl m-4">
          <div className="flex gap-4">
            <input type="text" name="firstName" placeholder="First name" onChange={handleChange} className="flex-1 p-2 rounded-md bg-white/55 focus:outline-none w-full text-black" />
            <input type="text" name="lastName" placeholder="Last name" onChange={handleChange} className="flex-1 p-2 rounded-md bg-white/55 focus:outline-none w-full text-black" />
          </div>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 rounded-md bg-white/55 focus:outline-none text-black" />
          <input type="text" name="phone" placeholder="Phone" onChange={handleChange} className="w-full p-2 rounded-md bg-white/55 focus:outline-none text-black" />
          <input type="text" name="subject" placeholder="Subject" onChange={handleChange} className="w-full p-2 rounded-md bg-white/55 focus:outline-none text-black" />
          <textarea name="message" placeholder="Message" onChange={handleChange} className="w-full p-2 rounded-md bg-white/55 h-32 focus:outline-none text-black" />
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
            Send
          </button>
        </form>

        {/* Map Section */}
        <div className="w-full max-w-md h-[400px] m-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d253801.7637399387!2d80.41881!3d6.309294!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1602fd2997c47%3A0x5cc13ccd7f742955!2sLiyonta%20tea%20factory!5e0!3m2!1sen!2sus!4v1745654326227!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow-md"
          ></iframe>
        </div>

      </div>
    </div>
  );
}
