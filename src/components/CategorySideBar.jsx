import { NavLink } from "react-router-dom";

const CategorySideBar = () => {
  const categories = [
    { name: "All Equipment", slug: "all-equipment" },
    { name: "Cricket Equipment", slug: "cricket-equipment" },
    { name: "Football Equipment", slug: "football-equipment" },
    { name: "Gym Equipment", slug: "gym-equipment" },
    { name: "Tennis Equipment", slug: "tennis-equipment" },
    { name: "Badminton Equipment", slug: "badminton-equipment" },
    { name: "Jerseys", slug: "jerseys" },
  ];

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-3 rounded-md w-full lg:w-1/4 mb-6 lg:mb-0 self-start">
      {categories.map((category) => (
        <NavLink
          className={({ isActive }) => {
            return isActive
              ? "w-full bg-black dark:bg-white text-white dark:text-black py-2 rounded-md font-semibold text-center"
              : "w-full bg-black/20 dark:bg-white/20 text-black/60 dark:text-white py-2 rounded-md font-semibold hover:bg-black/30 dark:hover:bg-white/30 transition text-center";
          }}
          key={category.name}
          to={`/shop/${category.slug}`}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default CategorySideBar;
