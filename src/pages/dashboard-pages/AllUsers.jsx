import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
  const secureAPI = useAxiosSecure();
  const { data: allData = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await secureAPI.get("/users");
      return res.data;
    },
  });
  console.log(allData);
  return (
    <div className="">
      <Helmet>
        <title>ATHLETIX Admin Panel | All Users</title>
      </Helmet>
      <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
        All Users
      </h2>

      {/* Scrollable Table Wrapper */}
      <div className="h-[calc(100vh-146px)] overflow-y-auto shadow-md custom-scrollbar w-full">
        {/* Product Table */}
        <table className="w-full border-collapse">
          <thead className="sticky top-0 z-10 bg-black dark:bg-white/20 text-white">
            <tr>
              <th className="py-2 px-4">Sl.</th>
              <th className="py-2 px-4">Image</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Role</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {allData.map((user, index) => (
              <tr
                key={user._id}
                className={
                  index % 2 === 0
                    ? "bg-black/10 dark:bg-white/30 dark:text-white"
                    : "bg-black/5 dark:bg-white/40 dark:text-white"
                }
              >
                <td className="py-2 px-4 text-center">{index + 1}</td>
                <td className="py-2 px-4 text-center">
                  <img
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co.com/nRm6fz9/Png-Item-5067022.png"
                    }
                    alt={user.displayName}
                    className="w-14 h-14 mx-auto object-scale-down bg-white p-1"
                  />
                </td>
                <td className="py-2 px-4">{user.displayName}</td>
                <td className="py-2 px-4 text-center">{user.email}</td>
                <td className="py-2 px-4 text-center">{user.userRole}</td>
                <td className="py-2 px-4 text-center">
                  <Link
                    to={`/profile/${user._id}`}
                    className="mt-3 w-full bg-black dark:bg-white text-white dark:text-black py-2 px-4 rounded-md hover:bg-black/70 dark:hover:bg-white/70 transition flex justify-center users-center gap-2 font-bold"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
