import { Helmet } from "react-helmet";
import BrowseByCategory from "../components/BrowseByCategory";
import Hero from "../components/Hero";
import HomeProducts from "../components/HomeProducts";
import SubscribeToNewsletter from "../components/SubscribeToNewsletter";
import Testimonial from "../components/Testimonial";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>ATHLETIX | Home</title>
      </Helmet>
      <Hero />
      <BrowseByCategory />
      <HomeProducts />
      <Testimonial />
      <SubscribeToNewsletter />
    </>
  );
};

export default Home;
