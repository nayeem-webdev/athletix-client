import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-center px-6 py-12">
      <Helmet>
        <title>ATHLETIX | Error Page</title>
      </Helmet>
      <div className="max-w-lg w-full">
        <h1 className="text-6xl font-bold text-black font-quick">404</h1>
        <p className="mt-4 text-2xl text-black">
          OOPS! THE PAGE YOU ARE LOOKING FOR DOES NOT EXITS .
        </p>
        <p className="mt-2 text-lg text-gray-600 mb-6">
          It might have been moved or deleted.
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
