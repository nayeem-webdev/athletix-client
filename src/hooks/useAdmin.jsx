import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const secureAPI = useAxiosSecure();
  const { data: isAdmin } = useQuery({
    queryKey: [user?.uid, "isAdmin"],
    queryFn: async () => {
      const res = await secureAPI.get(`user/admin/${user.uid}`);
      console.log(res.data);
      return res.data?.admin;
    },
  });
  return [isAdmin];
};

export default useAdmin;
