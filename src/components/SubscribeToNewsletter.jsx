import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { toast } from "react-toastify";

const SubscribeToNewsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      toast.error("Please enter your email!");
      return;
    }
    setEmail("");
    toast.success("Email subscribed!");
  };

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="mb-8 text-gray-400">
          Stay updated with our latest products and offers. Subscribe now!
        </p>
        <div className="flex justify-center items-center space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg text-black w-80 focus:outline-none focus:ring-2 focus:ring-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bg-white text-black p-3 rounded-lg flex items-center space-x-2 hover:bg-gray-200 transition-colors"
            onClick={handleSubscribe}
          >
            <span>Subscribe</span>
            <FaArrowRight className="text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubscribeToNewsletter;
