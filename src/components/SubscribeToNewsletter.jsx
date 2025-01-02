import { FaEnvelope, FaArrowRight } from "react-icons/fa";

const SubscribeToNewsletter = () => {
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
          />
          <button className="bg-white text-black p-3 rounded-lg flex items-center space-x-2 hover:bg-gray-200 transition-colors">
            <span>Subscribe</span>
            <FaArrowRight className="text-lg" />
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 py-6">
        <FaEnvelope className="text-white text-6xl mx-auto" />
      </div>
    </section>
  );
};

export default SubscribeToNewsletter;
