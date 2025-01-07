import { FaRegPaperPlane } from "react-icons/fa";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { TbLocationPin } from "react-icons/tb";

const AddressComponent = () => {
  return (
    <div className="flex flex-col mt-10 space-y-2">
      <div className="flex items-center hover:underline hover:text-primary">
        <FaRegPaperPlane />
        <a
          href="mailto:nayeem.webdev@gmail.com"
          target="_blank"
          className="ml-4 text-lg "
        >
          Shoot me an email
        </a>
      </div>
      <div className="flex items-center hover:underline hover:text-primary">
        <FaWhatsapp />
        <a
          href="https://wa.me/+8801852503030"
          target="_blank"
          className="ml-4 text-lg "
        >
          Catch me on WhatsApp
        </a>
      </div>
      <h2 className="text-xl font-medium pt-4">Give a Call</h2>
      <p className="text-black/50 dark:text-white/50 pb-1">
        Sun-Thu from 10am to 7pm
      </p>
      <div className="flex items-center hover:underline hover:text-primary">
        <FiPhoneCall />
        <a href="tel:+8801701048078" target="_blank" className="ml-4 text-lg ">
          +88 01701 048078
        </a>
      </div>
      <div className="flex items-center hover:underline hover:text-primary">
        <FiPhoneCall />
        <a href="tel:+8801852503030" target="_blank" className="ml-4 text-lg ">
          +88 01852 503030
        </a>
      </div>
      <h2 className="text-xl font-medium pt-4 pb-1 ">I am working from</h2>
      <div className="flex items-center hover:underline hover:text-primary">
        <TbLocationPin />
        <a
          href="https://www.google.com/maps/place/Chittagong/"
          target="_blank"
          className="ml-4 text-lg "
        >
          Chittagong, Bangladesh
        </a>
      </div>

      <h2 className="text-xl font-medium pt-4 pb-1 ">Give a Watch</h2>

      <div className="flex items-center hover:underline hover:text-primary">
        <FaGithub />
        <a
          href="https://github.com/nayeem-webdev"
          target="_blank"
          className="ml-4 text-lg "
        >
          GitHub
        </a>
      </div>
      <div className="flex items-center hover:underline hover:text-primary">
        <FaLinkedinIn />
        <a
          href="https://www.linkedin.com/in/nayeem33/"
          target="_blank"
          className="ml-4 text-lg "
        >
          LinkedIn
        </a>
      </div>
      <div className="flex items-center hover:underline hover:text-primary">
        <FaFacebookF />
        <a
          href="https://www.facebook.com/nayeem33r/"
          target="_blank"
          className="ml-4 text-lg "
        >
          Facebook
        </a>
      </div>
    </div>
  );
};

export default AddressComponent;
