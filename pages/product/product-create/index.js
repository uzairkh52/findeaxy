import Header from "@/component/Header";
import HeroSection from "@/component/HeroSection";
import ProductCreate from "@/component/product/ProductCreate";

const index = () => {
   return (
      <>
         <Header />
         <HeroSection heading={"Create your product"} />
         <ProductCreate />
      </>
   );
}

export default index;