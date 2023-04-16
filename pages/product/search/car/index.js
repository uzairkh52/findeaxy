import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Container } from "semantic-ui-react";
import HeroSection from "@/component/HeroSection";
import SearchCard from "@/component/search-result/search-card";
import Http from "@/store/Services/Http";
import LoadingArea from "@/component/Layouts/LoadingArea";
import Header from "@/component/Header";
import { GetProductAction } from "@/store/Services/Actions/getProductAction";
import { GET_MY_PRODUCT, GET_PRODUCT } from "@/store/Services/api";
const SearchResult = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [Getproduct, setgetproduct] = useState();
  // redux
  // const GetProducData = useSelector((state) => {
  //   return state.GetProductReducer.data;
  // });
  // const productDispatch = useDispatch();
  // const loadproductDispatch = () => {
  //   productDispatch(GetProductAction());
  // };
  function getProduct() {
    setIsLoading(true);
    Http.get(GET_PRODUCT)
      .then((res) => {
        const data = res.data.productList;
        setgetproduct(data);
        setIsLoading(false);
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
        <HeroSection heading={"Car"} />
        <section className={"section-padding"}>
          <Container>
            <Grid stackable>
              {!isLoading ? (
                <>
                  <Grid.Row columns={3}>
                    {Getproduct ? (
                      <>
                        {Getproduct.map((item, i) => {
                          return <SearchCard item={item} key={i} />;
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
