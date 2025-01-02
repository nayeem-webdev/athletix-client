import BrowseByCategory from "../components/BrowseByCategory";
import Hero from "../components/Hero";
import HomeProducts from "../components/HomeProducts";
import SubscribeToNewsletter from "../components/SubscribeToNewsletter";
import Testimonial from "../components/Testimonial";
const Home = () => {
  return (
    <>
      <Hero />
      <HomeProducts />
      <BrowseByCategory />
      <Testimonial />
      <SubscribeToNewsletter />
    </>
  );
};

export default Home;
