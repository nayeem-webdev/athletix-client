import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_serviceID;
    const templateID = import.meta.env.VITE_templateID;
    const publicKey = import.meta.env.VITE_publicKey;

    try {
      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      toast.success(" We Have Received Your Mail!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Failed to send email!");
    }
  };
  return (
    <div className="space-y-6 my-10">
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-md text-black/80 dark:text-white/80 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md dark:bg-white/20 bg-black/10 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-primary "
          />
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-md text-black/80 dark:text-white/80 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md dark:bg-white/20 bg-black/10 text-gray-800 dark:text-gray-100 focus:ring-1 focus:ring-primary focus:ring-opacity-50"
          />
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-md text-black/80 dark:text-white/80 mb-2"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="3"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md dark:bg-white/20 bg-black/10 text-gray-800 dark:text-gray-100 focus:ring-1 focus:ring-primary focus:ring-opacity-50"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary text-black font-medium px-6 py-3 rounded-md hover:bg-yellow-500 focus:ring-2 focus:ring-primary"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
