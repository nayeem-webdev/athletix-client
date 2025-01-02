import { FaFacebookF, FaTwitter, FaGithub, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black/5 dark:bg-white/15 w-full">
      <div className="container mx-auto px-6 dark:text-white">
        <div className="py-36">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2">
              <h1 className="logo-shadow text-center text-2xl lg:text-5xl font-bold">
                ATHLETIX
              </h1>
            </div>
            <p className="mt-2 text-lg">
              Champions keep playing until they get it right.
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-white hover:text-accent transition"
              aria-label="Google"
            >
              <FaGoogle size={24} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-white hover:text-accent transition"
              aria-label="Facebook"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-white hover:text-accent transition"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-white hover:text-accent transition"
              aria-label="Github"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
      <hr className="border-white/30" />

      <div className="text-center dark:text-white/80 text-sm py-8 border-t border-t-black/30">
        <p>&copy; {new Date().getFullYear()} ATHLETIX. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
