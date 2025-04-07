import React, { useRef } from "react";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k38cald", // Your service ID
        "template_bnnrxc9", // Your template ID
        form.current, // The form element reference
        "HmuK9frLqrUCSndL5" // Your user ID (API key)
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Failed to send message.");
        }
      );

    e.target.reset(); // Reset the form after submission
  };

  return (
    <div className="bg-gradient-to-r from-gray-800 to-black p-16 rounded-lg shadow-2xl max-w-4xl mx-auto mt-16">
      <h2 className="text-5xl font-bold text-white text-center mb-6">
        Contact Me
      </h2>
      <p className="text-lg text-gray-300 text-center mb-12">
        I'd love to hear from you! Please fill out the form below, and I'll get
        back to you as soon as possible.
      </p>

      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="user_name"
            className="block text-xl font-medium text-gray-300 mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name" // Ensure this matches the template variable
            id="user_name"
            required
            className="w-full p-4 bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="user_email"
            className="block text-xl font-medium text-gray-300 mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email" // Ensure this matches the template variable
            id="user_email"
            required
            className="w-full p-4 bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            placeholder="Enter your email"
          />
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-xl font-medium text-gray-300 mb-2"
          >
            Message
          </label>
          <textarea
            name="message" // Ensure this matches the template variable
            id="message"
            required
            className="w-full p-4 bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            placeholder="Type your message here"
            rows="6"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold rounded-lg hover:bg-gradient-to-l hover:from-pink-600 hover:to-orange-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
