import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Hero = () => {
  return (
    <section className=" relative h-screen max-h-[900px]">
      {/* Swiper Section */}
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        effect="fade"
        pagination={{
          clickable: false,
        }}
        modules={[Autoplay, EffectFade, Pagination]}
        className="h-screen max-h-[900px]"
      >
        <SwiperSlide>
          <img
            src="/assets/slide-1.png"
            alt="Slide 1"
            className="object-cover w-full h-screen max-h-[900px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/slide-2.png"
            alt="Slide 2"
            className="object-cover w-full h-screen max-h-[900px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/slide-3.png"
            alt="Slide 3"
            className="object-cover w-full h-screen max-h-[900px]"
          />
        </SwiperSlide>
      </Swiper>

      {/* Hero Content */}
      <div className="container mx-auto absolute inset-0 z-20 px-4 md:px-6">
        <div className="flex flex-col justify-center h-full text-center md:text-left md:w-2/3">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Strength doesn’t come from winning, <br /> it comes from struggle.
          </h1>
          <Link
            to="/shop"
            className="font-bold self-center md:self-start mt-4 md:mt-6 bg-white border border-black rounded-xl px-8 py-4 md:px-6 md:py-3 text-sm md:text-lg hover:bg-black hover:text-white transition"
          >
            SHOP NOW
          </Link>
          <div className="border-b-[6px] border-primary w-full md:w-2/3 mx-auto md:mx-0 mt-3" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
