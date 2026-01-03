"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_ktv5u7h", // EmailJS Service ID
        "template_g2sdogk", // EmailJS Template ID (Auto-reply enabled)
        form.current,
        "geSWdCn2RqAqGxUxj" // EmailJS Public Key
      )
      .then(
        () => {
          form.current?.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Email send error:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 mx-auto mt-4 bg-purple-500" />
        <p className="mt-4 text-lg font-semibold text-gray-400">
          I’d love to hear from you—reach out for any opportunities or
          questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-md p-6 mt-8 border border-gray-700 shadow-lg bg-[#0d081f] rounded-lg">
        <h3 className="text-xl font-semibold text-center text-white">
          Send me a message. Let’s have a chat!
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col mt-4 space-y-4"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 text-white border border-gray-600 rounded-md bg-[#131025] focus:outline-none focus:border-purple-500"
          />

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 text-white border border-gray-600 rounded-md bg-[#131025] focus:outline-none focus:border-purple-500"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 text-white border border-gray-600 rounded-md bg-[#131025] focus:outline-none focus:border-purple-500"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            required
            className="w-full p-3 text-white border border-gray-600 rounded-md bg-[#131025] focus:outline-none focus:border-purple-500"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 font-semibold text-white rounded-md transition
              bg-gradient-to-r from-purple-600 to-pink-500
              ${loading ? "opacity-60 cursor-not-allowed" : "hover:opacity-90"}
            `}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
