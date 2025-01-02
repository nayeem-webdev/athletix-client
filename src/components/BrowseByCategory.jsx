import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaFutbol,
  FaDumbbell,
  FaTableTennis,
  FaTshirt,
} from "react-icons/fa";
import { GiTennisRacket } from "react-icons/gi";
import { PiCricketBold } from "react-icons/pi";

const BrowseByCategory = () => {
  const categories = [
    {
      name: "Cricket Equipment",
      slug: "cricket-equipment",
      icon: <PiCricketBold />,
    },
    {
      name: "Football Equipment",
      slug: "football-equipment",
      icon: <FaFutbol />,
    },
    { name: "Gym Equipment", slug: "gym-equipment", icon: <FaDumbbell /> },
    {
      name: "Tennis Equipment",
      slug: "tennis-equipment",
      icon: <FaTableTennis />,
    },
    {
      name: "Badminton Equipment",
      slug: "badminton-equipment",
      icon: <GiTennisRacket />,
    },
    { name: "Jerseys", slug: "jerseys", icon: <FaTshirt /> },
  ];

  return (
    <section className="container mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold dark:text-white mb-2 text-center">
        Browse By Category
      </h2>
      <p className="mb-6 text-center text-black/80 dark:text-white/80">
        Explore a wide range of categories
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.slug}
            to={`/shop/${category.slug}`}
            className="flex items-center justify-between bg-white dark:bg-white/10 p-4 rounded-lg dark:shadow-white/30 shadow hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl text-gray-800 dark:text-white">
                {category.icon}
              </span>
              <span className="text-gray-800 dark:text-white font-medium">
                {category.name}
              </span>
            </div>
            <FaArrowRight className="text-gray-500 dark:text-gray-400" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BrowseByCategory;
