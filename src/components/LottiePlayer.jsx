import Lottie from "react-lottie";
import fileBin from "../lotties/fileBin.json";
import shoppingCartRunning from "../lotties/shoppingCartRunning.json";
import userLoading from "../lotties/userLoading.json";
import noData from "../lotties/noData.json";
import PropTypes from "prop-types";

const LottiePlayer = ({ animationType }) => {
  // Define the options for each animation
  const animationOptions = {
    bin: {
      loop: true,
      autoplay: true,
      animationData: fileBin,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
    cart: {
      loop: true,
      autoplay: true,
      animationData: shoppingCartRunning,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
    user: {
      loop: true,
      autoplay: true,
      animationData: userLoading,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
    noData: {
      loop: true,
      autoplay: true,
      animationData: noData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
  };

  const defaultOptions =
    animationOptions[animationType] || animationOptions.cart;

  return <Lottie options={defaultOptions} height={400} width={400} />;
};

LottiePlayer.propTypes = {
  animationType: PropTypes.string,
};
export default LottiePlayer;
