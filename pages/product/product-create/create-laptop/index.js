import Header from "@/component/Header";
import HeroSection from "@/component/HeroSection";
import CreateLaptop from "@/component/product/CreateLaptop";

const index = () => {
  return (
    <>
      <Header />
      <HeroSection heading={"Create your product"} />
      <CreateLaptop />
    </>
  );
};

export default index;
