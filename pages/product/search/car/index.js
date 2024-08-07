import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Container, Button } from "semantic-ui-react";
import HeroSection from "@/component/HeroSection";
import SearchCard from "@/component/search-result/search-card";
import Http from "@/store/Services/Http";
import LoadingArea from "@/component/Layouts/LoadingArea";
import Header from "@/component/Header";
import { GetProductAction } from "@/store/Services/Actions/getProductAction";
import { GET_Cart_PRODUCT } from "@/store/Services/api";
import styles from "../../../../styles/sass/search/searchCard.module.scss";

const SearchResult = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [Carproduct, setCarproduct] = useState();
  function getProduct() {
    setIsLoading(true);
    Http.get(GET_Cart_PRODUCT)
      .then((res) => {
        const data = res.data;
        setCarproduct(data);
        setIsLoading(false);
      })
      .catch((error) => {
        const response = error.response;
        return { error: response };
      });
  }

  const ShowNumberHandle = (e, value, id) => {
    // const activenumber = document.getElementById(id);
    setShowNumber(false);
    // if (activenumber) {
    // } else {
    //   setShowNumber(value);
    // }
    // console.log("eee", value.value);
  };
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
                    {Carproduct.data ? (
                      <>
                        {Carproduct.data.map((item, i) => {
                          {
                            console.log("item111", item.user.phone);
                          }
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
