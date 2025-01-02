import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import LottiePlayer from "../components/LottiePlayer";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="py-[100px]" height={200} width={200}>
        <LottiePlayer animationType="cart" />
      </div>
    );
  } else if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoutes;
