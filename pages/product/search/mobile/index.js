import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Container } from "semantic-ui-react";
import HeroSection from "@/component/HeroSection";
import SearchCard from "@/component/search-result/search-card";
import Http from "@/store/Services/Http";
import LoadingArea from "@/component/Layouts/LoadingArea";
import Header from "@/component/Header";
import { GET_MOBILE_BRAND, GET_MOBILE_PRODUCT } from "@/store/Services/api";
import MobileSearchCard from "@/component/search-result/MobileSearchCard";
const SearchResult = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [Getproduct, setgetproduct] = useState();

  function getProduct() {
    setIsLoading(true);
    Http.get(GET_MOBILE_PRODUCT)
      .then((res) => {
        const data = res.data.data;
        setgetproduct(data);
        setIsLoading(false);
        console.log("data11", data);
      })
      .catch((error) => {
        const response = error.response;
        return { error: response };
      });
  }

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <main>
        <Header />
        <HeroSection heading={"Mobile"} />
        <section className={"section-padding"}>
          <Container>
            <Grid stackable>
              {!isLoading ? (
                <>
                  <Grid.Row columns={3}>
                    {Getproduct ? (
                      <>
                        {Getproduct.map((item, i) => {
                          console.log("item", item);
                          return <MobileSearchCard item={item} key={i} />;
                        })}
                      </>
                    ) : (
                      ""
                    )}
                  </Grid.Row>
                </>
              ) : (
                <>
                  <LoadingArea />
                </>
              )}
            </Grid>
          </Container>
        </section>
      </main>
    </>
  );
};

export default SearchResult;
