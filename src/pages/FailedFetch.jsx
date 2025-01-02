import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-center px-6 py-12">
      <Helmet>
        <meta charSet="utf-8" />
        <title>ATHLETIX | Error Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>{" "}
      <div className="max-w-lg w-full">
        <h1 className="text-6xl font-bold text-black font-quick">404</h1>
        <p className="mt-4 text-2xl text-black">
          OOPS! FAILED TO LOAD THE DATA FROM THE SERVER! .
        </p>
        <p className="mt-2 text-lg text-gray-600 mb-6">
          It might take some time please try again later.
        </p>
        <p>
          Please return to{" "}
          <Link to="/" className="text-primary">
            Home page
          </Link>{" "}
          or{" "}
          <Link to="/shop" className="text-primary">
            Shop page
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
