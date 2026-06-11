// import React, { useRef, useState } from "react";
// import emailjs from '@emailjs/browser';
// import {toast, ToastContainer,} from "react-toastify";

// const Contact = () => {

//   const form  = useRef();
//   const [isSent, setIsSent] = useState(false);
//   const sendEmail = (event)=>{
//     event.preventDefault();

//     emailjs.sendForm("service_32m59g9","template_evm9zdu",form.current,"v5-dGAXB8Kh42I6lT").then(()=>{
//       setIsSent(true);
//       form.current.reset();
//       toast.success("Message sent successfully",{
//         position:"top-right",
//         autoClose:3000,
//         hideProgressBar:false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable : true,
//         theme:"dark",
//       })
//     },(error)=>{
//       toast.error("Email Sending Message.",error);
//       toast.error("Failed to send Message, Please Try Again",{
//         position:"top-right",
//         autoClose:3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         theme:"dark"

//       })
//     })
//   }

//   return (
//     <section
//       id="contact"
//       className="flex flex-col items-center justify-center py-24 px-[7vw] md:px-[7vw] lg:px-[12vw]"
//     >


//     {/* Toast Message */}
//     <ToastContainer/>

//       <div className="relative z-10 text-center mb-8 md:mb-15">

//         <h2 className="text-3xl md:text-4xl font-black text-white">
//           Contact Me
//         </h2>

//         <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-5 rounded-full"></div>

//         <p className="text-gray-400 mt-6 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
//           I’d love to hear from you—reach out for any opportunities or
//           questions!
//         </p>
//       </div>

//       {/* Contact form */}
//       <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
//         <h3 className="text-xl font-semibold text-white text-center">
//           Connect With Me
//         </h3>

//         {/* Form details */}
//         <form className="flex flex-col space-y-4 mt-4" ref={form} onSubmit={sendEmail}>
//           <input
//             type="email"
//             name="user-email"
//             placeholder="Your Email"
//             required
//             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
//           />
//           <input
//             type="text"
//             name="user-name"
//             placeholder="Your Name"
//             required
//             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
//           />
//           <input
//             type="text"
//             name="subject"
//             placeholder="Subject"
//             required
//             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
//           />
//           <textarea
//             name="message"
//             placeholder="Message"
//             rows={4}
//             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
//           ></textarea>

//           {/* Send button */}
//           <button
//             type="submit"
//             className="w-full bg-linear-to-r from-purple-600 to-pink-500 py-3 text-white rounded-md hover:opacity-90 transition cursor-pointer"
//           >
//             Send
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;



import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_32m59g9",
        "template_evm9zdu",
        form.current,
        "v5-dGAXB8Kh42I6lT"
      )
      .then(() => {
        setIsSent(true);
        form.current.reset();

        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#030712] py-24 px-[7vw] md:px-[8vw] lg:px-[12vw]"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/20 blur-[150px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[150px] rounded-full" />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <ToastContainer />

      <div className="relative z-10 flex flex-col items-center">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-black">
            <span className="text-white">Get In</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-white bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <div className="w-36 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-300 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 mt-6 text-sm md:text-lg max-w-2xl mx-auto">
            Have a project in mind, internship opportunity, freelance work, or
            just want to say hello? Feel free to reach out.
          </p>
        </div>

        {/* Contact Card */}
        <div
          className="
          w-full
          max-w-2xl
          rounded-3xl
          border
          border-blue-500/20
          bg-white/[0.03]
          backdrop-blur-xl
          p-8
          md:p-10
          shadow-[0_0_40px_rgba(59,130,246,0.15)]
          hover:border-blue-400/40
          transition-all
          duration-500
        "
        >
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Connect With Me
          </h3>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-5"
          >
            <input
              type="email"
              name="user-email"
              placeholder="Your Email"
              required
              className="
                w-full
                p-4
                rounded-xl
                bg-[#0f172a]
                text-white
                border
                border-slate-700
                focus:outline-none
                focus:border-cyan-400
                focus:ring-2
                focus:ring-cyan-500/20
                transition-all
              "
            />

            <input
              type="text"
              name="user-name"
              placeholder="Your Name"
              required
              className="
                w-full
                p-4
                rounded-xl
                bg-[#0f172a]
                text-white
                border
                border-slate-700
                focus:outline-none
                focus:border-cyan-400
                focus:ring-2
                focus:ring-cyan-500/20
                transition-all
              "
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="
                w-full
                p-4
                rounded-xl
                bg-[#0f172a]
                text-white
                border
                border-slate-700
                focus:outline-none
                focus:border-cyan-400
                focus:ring-2
                focus:ring-cyan-500/20
                transition-all
              "
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Write your message..."
              required
              className="
                w-full
                p-4
                rounded-xl
                bg-[#0f172a]
                text-white
                border
                border-slate-700
                focus:outline-none
                focus:border-cyan-400
                focus:ring-2
                focus:ring-cyan-500/20
                transition-all
                resize-none
              "
            />

            <button
              type="submit"
              className="
                flex
                items-center
                justify-center
                gap-2
                w-full
                py-4
                rounded-xl
                font-semibold
                text-white
                bg-gradient-to-r
                from-blue-600
                via-cyan-500
                to-blue-500
                shadow-[0_0_30px_rgba(59,130,246,0.4)]
                hover:scale-[1.02]
                hover:shadow-[0_0_50px_rgba(59,130,246,0.6)]
                transition-all
                duration-300
              "
            >
              Send Message
              <FiSend />
            </button>

            {isSent && (
              <p className="text-center text-cyan-400 text-sm mt-2">
                Thanks for reaching out. I'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

