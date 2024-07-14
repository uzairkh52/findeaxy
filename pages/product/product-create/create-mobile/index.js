import Header from "@/component/Header";
import HeroSection from "@/component/HeroSection";
import CreateMobile from "@/component/product/CreateMobile";

const index = () => {
  return (
    <>
      <Header />
      <HeroSection heading={"Create your product"} />
      <CreateMobile />
    </>
  );
};

export default index;
