import { FaQuoteLeft, FaThumbsUp } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className="text-center py-12">
      <h2 className="text-3xl font-bold dark:text-white mb-2 text-center">
        What Our Customers Say
      </h2>
      <p className="mb-6 text-center text-black/80 dark:text-white/80">
        Powerful words from our customer.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Testimonial 1 */}
        <div className="bg-black/90 dark:bg-white/90 text-white dark:text-black p-6 rounded-lg shadow-md w-80 transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="flex justify-center mb-4">
            <FaQuoteLeft className=" text-3xl" />
          </div>
          <p className="italic text-lg  mb-4">
            &quot;This product exceeded my expectations! Highly
            recommended.&quot;
          </p>
          <span className="block text-xl font-semibold ">- Jane Doe</span>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-black/90 dark:bg-white/90 text-white dark:text-black p-6 rounded-lg shadow-md w-80 transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="flex justify-center mb-4">
            <FaQuoteLeft className=" text-3xl" />
          </div>
          <p className="italic text-lg  mb-4">
            &quot;Amazing quality and fast delivery. Would buy again!&quot;
          </p>
          <span className="block text-xl font-semibold ">- John Smith</span>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-black/90 dark:bg-white/90 text-white dark:text-black p-6 rounded-lg shadow-md w-80 transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="flex justify-center mb-4">
            <FaThumbsUp className=" text-3xl" />
          </div>
          <p className="italic text-lg  mb-4">
            &quot;Customer service was excellent, and the product works
            great.&quot;
          </p>
          <span className="block text-xl font-semibold">- Sarah Lee</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
