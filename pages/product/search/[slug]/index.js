import Header from "@/component/Header";
import ProductslugCard from "@/component/product/productslugCard";
import Http from "@/store/apis/Http";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";

const pid = (props) => {
  const router = useRouter();
  const slug = router.query.slug;
  const [product, setProduct] = useState("");

  const loadProduct = () => {
    Http.get(`/product/list/${slug}`).then((res) => {
      const data = res.data.productList;
      console.log("data11", data);
      setProduct(data);
    });
  };
  useEffect(() => {
    if (slug) {
      loadProduct(slug);
    }
  }, [router]);

  return (
    <>
      <main>
        <Header />
        <section id="sec-six" className="megadraw-prizes section-padding-lg">
          <Container>
            <>
              <ProductslugCard item={product} />
            </>
          </Container>
        </section>
      </main>
    </>
  );
};

export default pid;
