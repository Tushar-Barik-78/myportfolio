import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import {toast, ToastContainer,} from "react-toastify";

const Contact = () => {

  const form  = useRef();
  const [isSent, setIsSent] = useState(false);
  const sendEmail = (event)=>{
    event.preventDefault();

    emailjs.sendForm("service_32m59g9","template_evm9zdu",form.current,"v5-dGAXB8Kh42I6lT").then(()=>{
      setIsSent(true);
      form.current.reset();
      toast.success("Message sent successfully",{
        position:"top-right",
        autoClose:3000,
        hideProgressBar:false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable : true,
        theme:"dark",
      })
    },(error)=>{
      toast.error("Email Sending Message.",error);
      toast.error("Failed to send Message, Please Try Again",{
        position:"top-right",
        autoClose:3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme:"dark"

      })
    })
  }

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[7vw] md:px-[7vw] lg:px-[12vw]"
    >


    {/* Toast Message */}
    <ToastContainer/>

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or
          questions!
        </p>
      </div>

      {/* Contact form */}
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me
        </h3>

        {/* Form details */}
        <form className="flex flex-col space-y-4 mt-4" ref={form} onSubmit={sendEmail}>
          <input
            type="email"
            name="user-email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="user-name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          ></textarea>

          {/* Send button */}
          <button
            type="submit"
            className="w-full bg-linear-to-r from-purple-600 to-pink-500 py-3 text-white rounded-md hover:opacity-90 transition cursor-pointer"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
