import Header from "@/component/Header";
import HeroSection from "@/component/HeroSection";
import CreateBike from "@/component/product/CreateBike";
import ProductCreate from "@/component/product/ProductCreate";

const index = () => {
  return (
    <>
      <Header />
      <HeroSection heading={"Create your product"} />
      <CreateBike />
    </>
  );
};

export default index;
