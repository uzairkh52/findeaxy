import React, { useCallback, useState, useEffect } from "react";
import {
  Container,
  Grid,
  Button,
  Loader,
  Modal,
  Form,
  FormGroup,
  Input,
} from "semantic-ui-react";

import Link from "next/link";
import { useRouter } from "next/router";
import Header from "@/component/Header";
import HeroSection from "@/component/HeroSection";
import MyProductItem from "@/component/product/my-product/MyProductItem";
import Http from "@/store/Services/Http";
import LoadingArea from "@/component/Layouts/LoadingArea";
import styles from "../../../styles/sass/components/MyProduct.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { GetMyProductAction } from "@/store/Services/Actions/GetMyProductAction";
import { GET_MY_PRODUCT } from "@/store/Services/api";
function MyProduct() {
  const [activeStep, setActiveStep] = useState(0);
  const router = useRouter();
  const [activecol, setActivecol] = useState(1);
  const [deleteMyProduct, setdeleteMyProduct] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const [MyProduct, setMyProduct] = useState();
  //

  // const getMyProductData = useSelector((state) => {
  //   return state.GetMyProductReducer.data;
  // });
  // const myproductDispatch = useDispatch();
  // const LoadMyproduct = () => {
  //   myproductDispatch(GetMyProductAction());
  //   setIsloading(false);
  // };
  console.log("MyProduct", MyProduct);
  function getMyProduct() {
    setIsloading(true);
    Http.get(GET_MY_PRODUCT)
      .then((res) => {
        const data = res.data.myproduct;
        setMyProduct(data);
        setIsloading(false);
      })
      .catch((error) => {
        const response = error.response;
        return { error: response };
      });
  }

  // delete cart

  const DeleteProduct = (id) => {
    const params = { id: id };
    setIsloading(true);
    Http.delete(`/my-product/delete/${params.id}`).then((res) => {
      const data = res.data.status;
      setdeleteMyProduct(data);
      LoadMyproduct();
      setIsloading(false);
    });
  };

  useEffect(() => {
    getMyProduct();
  }, []);
  return (
    <>
      <main>
        <Header />
        <HeroSection heading={"aaa"} />
        <section className={"bc1-lightest-bg"}>
          <Container>
            <div>
              <section
                id="sec-checkout"
                className={styles.secCheckout + " section-padding"}
              >
                {/* <div className="checkout-tab">
                  <ul className="tabsNav">
                    <li
                      className={`cursor-pointer ${
                        activecol === 1
                          ? "activate active-left-tab"
                          : " un-active"
                      }`}
                      onClick={() => setActivecol(1)}
                    >
                      <Link href="#MegaDraw">MegaDraw</Link>
                    </li>

                    <li
                      className={`cursor-pointer ${
                        activecol === 2
                          ? "activate active-right-tab"
                          : " un-active"
                      }`}
                      onClick={() => setActivecol(2)}
                    >
                      <Link href="#options">Prizes</Link>
                    </li>
                    <li
                      className={`cursor-pointer ${
                        activecol === 3
                          ? "activate active-right-tab"
                          : " un-active"
                      }`}
                      onClick={() => setActivecol(3)}
                    >
                      <Link href="#competition-tab">Competition</Link>
                    </li>
                  </ul>
                </div> */}
                {!isLoading ? (
                  <>
                    {MyProduct ? (
                      <>
                        {MyProduct.map((getmyProduct, i) => {
                          return (
                            <>
                              <MyProductItem
                                key={i}
                                item={getmyProduct}
                                deleteHandle={
                                  <>
                                    <a
                                      onClick={() =>
                                        DeleteProduct(getmyProduct.id)
                                      }
                                    >
                                      <i class="icofont-ui-delete cursor-pointer"></i>
                                    </a>
                                  </>
                                }
                              />
                            </>
                          );
                        })}
                      </>
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  <LoadingArea />
                )}

                <div className="main-checkout-sec">
                  {/* 
                  {getMyProductData.myProduct &&
                  getMyProductData &&
                  getMyProductData.myProduct.length ? (
                    <>
                      {getMyProductData.myproduct.map((getMyproduct) => {
                        console.log("get111", getMyproduct);
                      })}
                    </>
                  ) : (
                    ""
                  )} */}

                  <div className={" cartPriceDetail"}>
                    <div className="jc-left align-right">
                      <h2 className="black-txt-all regular f34 total-ammount">
                        Total: <span className="f34 basecolor1 bold">AED</span>
                      </h2>
                    </div>
                    <div className="jc-left align-right">
                      <h2 className="black-txt-all regular f18 total-ammount">
                        Sub total:{" "}
                        <span className="f34 basecolor1 bold">AED</span>
                      </h2>
                    </div>
                    <div className="jc-left align-right">
                      <h2 className="black-txt-all regular f16 total-ammount">
                        VAT: <span className="f34 basecolor1 bold">AED</span>
                      </h2>
                    </div>
                    <div className="jc-left  align-right">
                      <p className="f12 regular black-txt-all hidden_mb">
                        By clicking the checkout button, you agree to our{" "}
                        <span className="basecolor1 f12 underline">
                          <Link href={`/terms-conditions`}>
                            terms and conditions
                          </Link>
                        </span>
                      </p>
                    </div>
                    <div className="checkoutFooter flexbox flex-center jc-right jc-left">
                      <Link href={"/"}>
                        <div>
                          <Button color={"white"} size={"huge"}>
                            Continue Shopping
                          </Button>
                        </div>
                      </Link>
                      <div className="ml-20">
                        <Button
                          primary
                          fluid
                          onClick={() => dispatch({ type: "OPEN_MODAL" })}
                          size={"huge"}
                        >
                          Checkout
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
export default MyProduct;
