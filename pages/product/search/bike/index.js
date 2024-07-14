import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Container } from "semantic-ui-react";
import HeroSection from "@/component/HeroSection";
import SearchCard from "@/component/search-result/search-card";
import Http from "@/store/Services/Http";
import LoadingArea from "@/component/Layouts/LoadingArea";
import Header from "@/component/Header";
import { GetProductAction } from "@/store/Services/Actions/getProductAction";
import {
  GET_Bike_PRODUCT,
  GET_MY_PRODUCT,
  GET_PRODUCT,
} from "@/store/Services/api";
import BikeSearchCard from "@/component/search-result/BikeSearchCard";
const SearchResult = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [Getproduct, setgetproduct] = useState();

  function getProduct() {
    setIsLoading(true);
    Http.get(GET_Bike_PRODUCT)
      .then((res) => {
        const data = res.data.data;
        setgetproduct(data);
        setIsLoading(false);
      })
      .catch((error) => {
        const response = error.response;
        return { error: response };
      });
  }
  console.log("resss", Getproduct);

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <main>
        <Header />
        <HeroSection heading={"Bike"} />
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
                          return <BikeSearchCard item={item} key={i} />;
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
