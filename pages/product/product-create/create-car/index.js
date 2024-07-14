import Header from "@/component/Header";
import HeroSection from "@/component/HeroSection";
import CreateCar from "@/component/product/CreateCar";

const index = () => {
  return (
    <>
      <Header />
      <HeroSection heading={"Create your product"} />
      <CreateCar />
    </>
  );
};

export default index;
