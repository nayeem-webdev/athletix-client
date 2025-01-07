import { Helmet } from "react-helmet";
import { FaRunning, FaDumbbell, FaHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Helmet>
        <title>ATHLETIX | About</title>
      </Helmet>
      <div
        className="relative w-full h-screen bg-cover bg-bottom mb-12 mt-[72px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/GVNr8LW/pexels-photo-2294363.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center flex-col">
          <h1 className="text-5xl font-bold text-white">Welcome to</h1>
          <br />
          <Link
            to={"/"}
            className="logo-shadow text-center text-2xl lg:text-9xl font-bold text-white"
          >
            <h1>ATHLETIX</h1>
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-5 md:px-10 mb-20">
        <header className="text-center my-20">
          <p className="text-xl text-black dark:text-white max-w-2xl mx-auto">
            We are empowering athletes with top-notch sports equipment to
            achieve their best performance. At ATHLETIX, quality and passion
            drive everything we do.
          </p>
        </header>

        {/* Features Section */}
        <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-black p-6 shadow-lg dark:shadow-white/50 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
            <FaRunning className="text-4xl text-primary mb-4 mx-auto" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              To inspire and equip athletes of all levels with the gear they
              need to excel in their sport and push their limits.
            </p>
          </div>
          <div className="bg-white dark:bg-black p-6 shadow-lg dark:shadow-white/50 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
            <FaDumbbell className="text-4xl text-primary mb-4 mx-auto" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              Our Products
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              From cutting-edge training gear to durable sports equipment, our
              products are designed for performance and reliability.
            </p>
          </div>
          <div className="bg-white dark:bg-black p-6 shadow-lg dark:shadow-white/50 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
            <FaHandshake className="text-4xl text-primary mb-4 mx-auto" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              Our Promise
            </h2>
            <p className="text-black dark:text-white mt-2">
              We stand behind our products and are committed to delivering
              unmatched quality and customer support.
            </p>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="mt-16 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
            Our Story
          </h2>
          <p className="text-black dark:text-white leading-7">
            Founded with a deep love for sports and fitness, ATHLETIX was
            created to bridge the gap between passion and performance. Over the
            years, we have grown from a small startup to a trusted name in the
            sports equipment industry, continually evolving to meet the needs of
            athletes worldwide. Our dedication to excellence ensures that we
            provide only the best for every customer who shares our passion for
            greatness.
          </p>
        </section>

        <section className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-black dark:text-white  mb-4">
            Ready to Elevate Your Game?
          </h3>
          <p className="text-black dark:text-white mb-10">
            Discover the difference with ATHLETIX. Explore our range of premium
            sports equipment and take your performance to the next level.
          </p>
          <div className="flex gap-4 items-center justify-center">
            <Link
              to={"/"}
              className="font-bold self-center md:self-start md:mt-6 text-black dark:text-white bg-white dark:bg-black border border-black dark:border-white rounded-xl px-8 py-4 md:px-6 md:py-3 text-sm md:text-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              Home
            </Link>
            <Link
              to={"/shop"}
              className="font-bold self-center md:self-start md:mt-6 text-black dark:text-white bg-white dark:bg-black border border-black dark:border-white rounded-xl px-8 py-4 md:px-6 md:py-3 text-sm md:text-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              Shop Now
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
