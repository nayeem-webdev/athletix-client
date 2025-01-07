import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import AuthContext from "../context/AuthContext";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
import LottiePlayer from "../components/LottiePlayer";
import { Helmet } from "react-helmet";
import API from "../api/API";

const AuthPage = () => {
  const {
    loginWithPopUp,
    createUser,
    loginWithPassword,
    updateUser,
    setUser,
    user,
    loading,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  // Pass verify
  const [passFocus, setPassFocus] = useState(false);
  const [isLong, setIsLong] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasSymbol, setHasSymbol] = useState(false);

  const verifyPass = (e) => {
    const passValue = e.target.value;

    // Check Characters
    const hasUppercase = /[A-Z]/.test(passValue);
    const hasLowercase = /[a-z]/.test(passValue);
    const hasSymbol = /[!@#$%*]/.test(passValue);
    const isLong = passValue.length >= 8;

    // Check Delete Character
    setHasUppercase(hasUppercase);
    setHasLowercase(hasLowercase);
    setHasSymbol(hasSymbol);
    setIsLong(isLong);

    // Set Pass Verify
    if (hasUppercase) {
      setHasUppercase(true);
    }
    if (hasLowercase) {
      setHasLowercase(true);
    }
    if (hasSymbol) {
      setHasSymbol(true);
    }
    if (isLong) {
      setIsLong(true);
    }
  };

  // Handle Register
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const photoUrl = form.photoUrl.value;
    const emailRegister = form.emailRegister.value;
    const passwordRegister = form.passwordRegister.value;

    if (isLong && hasSymbol && hasLowercase && hasUppercase) {
      createUser(emailRegister, passwordRegister)
        .then((res) => {
          const user = res.user;
          updateUser(fullName, photoUrl).then(() => {
            toast.success("User Register Successful!");
            const newUser = {
              email: user.email,
              displayName: user.displayName,
              photoUrl: user.photoUrl,
              uid: user.uid,
              userRole: "customer",
            };
            API.post("/users", newUser)
              .then(() => {
                navigate("/account");
              })
              .catch((err) => {
                console.error("Error Creating Item:", err.message);
                toast.error("Failed to Add User!");
              });
          });
        })
        .catch((err) => {
          console.log(err.message);
          toast.error("User Register Failed!");
        });
    }
  };

  //  Handle Password Login
  const handlePasswordLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const emailLogin = form.emailLogin.value;
    const passwordLogin = form.passwordLogin.value;
    loginWithPassword(emailLogin, passwordLogin)
      .then((res) => {
        const usr = res.user;
        setUser(usr);
        toast.success("You are Logged in!");
        navigate("/account");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("User Login Failed!");
      });
  };

  // Google Login
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    loginWithPopUp(googleProvider)
      .then((res) => {
        const usr = res.user;
        setUser(usr);
        toast.success("You are Logged in!");
        navigate("/account");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("User Login Failed!");
      });
  };
  if (loading) {
    return (
      <div className="py-[100px]" height={200} width={200}>
        <LottiePlayer animationType="user" />
      </div>
    );
  } else if (user) {
    return <Navigate to={"/account"} />;
  } else {
    return (
      <div className="min-h-screen flex  items-center justify-center px-4 transition py-[72px]">
        <Helmet>
          <title>ATHLETIX | Login or Register</title>
        </Helmet>
        <Tooltip anchorSelect="#photoUrl" clickable>
          <button>
            upload your image on{" "}
            <a
              className="underline text-primary"
              href="https://imgbb.com/"
              target="blank"
            >
              imgBB
            </a>{" "}
            and paste the link here
          </button>
        </Tooltip>
        <div className="max-w-5xl w-full flex justify-between flex-col-reverse md:flex-row gap-8">
          {/* Register Section */}
          <div className="flex flex-col items-center p-8 w-full">
            <h1 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              REGISTER
            </h1>
            <form
              onSubmit={handleRegister}
              className="w-full max-w-xs space-y-4"
            >
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Full Name
                </label>
                <input
                  className="mt-1 block w-full bg-transparent border-b dark:dark:border-b-gray-100/50 border-b-gray-500/50 text-gray-900 dark:text-gray-200 focus:ring-black focus:border-black dark:focus:ring-white dark:focus:border-white"
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label
                  htmlFor="photoUrl"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Photo URL
                </label>
                <input
                  className="mt-1 block w-full bg-transparent border-b dark:dark:border-b-gray-100/50 border-b-gray-500/50 text-gray-900 dark:text-gray-200 focus:ring-black focus:border-black dark:focus:ring-white dark:focus:border-white"
                  type="url"
                  id="photoUrl"
                  name="photoUrl"
                  placeholder="Photo URL"
                />
              </div>
              <div>
                <label
                  htmlFor="emailRegister"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email address
                </label>
                <input
                  className="mt-1 block w-full bg-transparent border-b dark:dark:border-b-gray-100/50 border-b-gray-500/50  text-gray-900 dark:text-gray-200 focus:ring-black focus:border-black dark:focus:ring-white dark:focus:border-white"
                  type="email"
                  id="emailRegister"
                  name="emailRegister"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label
                  htmlFor="passwordRegister"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Password
                </label>
                <input
                  className="mt-1 block w-full bg-transparent border-b dark:dark:border-b-gray-100/50 border-b-gray-500/50  text-gray-900 dark:text-gray-200 focus:ring-black focus:border-black dark:focus:ring-white dark:focus:border-white"
                  type="password"
                  id="passwordRegister"
                  name="passwordRegister"
                  placeholder="Password"
                  onFocus={() => setPassFocus(true)}
                  onChange={verifyPass}
                />
              </div>
              {passFocus && (
                <ul>
                  <li
                    className={`text-[12px] ${
                      hasUppercase ? "text-green-600" : "text-red-600"
                    } `}
                  >
                    Must have an uppercase letter.
                  </li>
                  <li
                    className={`text-[12px] ${
                      hasLowercase ? "text-green-600" : "text-red-600"
                    } `}
                  >
                    Must have a lowercase letter.
                  </li>
                  <li
                    className={`text-[12px] ${
                      hasSymbol ? "text-green-600" : "text-red-600"
                    } `}
                  >
                    Must have a symbol ! @ # $ % *.
                  </li>
                  <li
                    className={`text-[12px] ${
                      isLong ? "text-green-600" : "text-red-600"
                    } `}
                  >
                    Must be 8 characters long.
                  </li>
                </ul>
              )}
              <button
                type="submit"
                className="w-full bg-black dark:bg-white text-white dark:text-black py-2 rounded-md font-medium hover:bg-black/70 dark:hover:bg-white/70 transition"
              >
                REGISTER
              </button>
            </form>
            <a
              href="/"
              className="mt-6 text-sm text-gray-500 dark:text-gray-400 hover:underline"
            >
              Return to Store
            </a>
          </div>

          {/* Login Section */}
          <div className="flex flex-col items-center p-8 w-full">
            <h1 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              LOGIN
            </h1>
            <form
              onSubmit={handlePasswordLogin}
              className="w-full max-w-xs space-y-4"
            >
              <div>
                <label
                  htmlFor="emailLogin"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email address
                </label>
                <input
                  className="mt-1 block w-full bg-transparent border-b dark:border-b-gray-100/50 border-b-gray-500/50 text-gray-900 dark:text-gray-200 focus:ring-black focus:border-black dark:focus:ring-white dark:focus:border-white"
                  type="email"
                  id="emailLogin"
                  name="emailLogin"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label
                  htmlFor="passwordLogin"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Password
                </label>
                <input
                  className="mt-1 block w-full bg-transparent border-b dark:border-b-gray-100/50 border-b-gray-500/50 text-gray-900 dark:text-gray-200 focus:ring-black focus:border-black dark:focus:ring-white dark:focus:border-white"
                  type="password"
                  id="passwordLogin"
                  name="passwordLogin"
                  placeholder="Password"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black dark:bg-white text-white dark:text-black py-2 rounded-md font-medium hover:bg-black/70 dark:hover:bg-white/70 transition"
              >
                LOG IN
              </button>
            </form>
            {/* Google Login Button */}
            <button
              onClick={handleGoogleLogin}
              className="mt-3 w-full max-w-xs  bg-black dark:bg-white text-white dark:text-black py-2 rounded-md font-medium hover:bg-black/70 dark:hover:bg-white/70 transition flex justify-center items-center gap-2"
              aria-label="Login with Google"
            >
              <FaGoogle />
              Login with Google
            </button>
            <div className="mt-6 text-sm flex justify-between w-full max-w-xs">
              <a
                href="/"
                className="text-gray-500 dark:text-gray-400 hover:underline"
              >
                Return to Store
              </a>
              <a
                href="/forgot-password"
                className="text-gray-500 dark:text-gray-400 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AuthPage;
