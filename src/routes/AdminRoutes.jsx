import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import LottiePlayer from "../components/LottiePlayer";

const AdminRoutes = ({ children }) => {
  const admin = true;
  const loading = false;

  if (loading) {
    return (
      <div
        className="flex justify-center items-center py-[100px]"
        style={{ height: 200, width: 200 }}
      >
        <LottiePlayer animationType="cart" />
      </div>
    );
  }

  if (!admin) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

AdminRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminRoutes;
