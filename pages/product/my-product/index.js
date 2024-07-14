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
  const [myproductactive, setMyproductActive] = useState("active");
  function ActiveDeactiveHandle(e, value, id) {
    console.log("eee", value.value);
    if (value.value === "active") {
      // setMyproductActive("deactive");
      const params = { status: "active" };
      Http.put(`/my-product/update/${id}`, params).then((res) => {
        const data = res.data;
        getMyProduct();
      });
    } else {
      const params = { status: "deactive" };
      Http.put(`/my-product/update/${id}`, params).then((res) => {
        const data = res.data;
        getMyProduct();
      });
    }
  }

  // const getMyProductData = useSelector((state) => state.GetMyProductReducer);

  // console.log("getMyProductData", getMyProductData);
  // useEffect(() => {
  //   getMyProductData;
  // }, [getMyProductData]);
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
        const data = res.data.data;
        console.log("data111", data);
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
      setIsloading(false);
      getMyProduct();
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
                                      className="none"
                                      onClick={() =>
                                        DeleteProduct(getmyProduct.id)
                                      }
                                    >
                                      <i class="icofont-ui-delete cursor-pointer"></i>
                                    </a>
                                  </>
                                }
                                ACtiveDeactiveProduct={
                                  <>
                                    <Button
                                      // loading={removeCartLoading}
                                      className={"btn btn btn-primary btn-sm"}
                                      value={
                                        getmyProduct.status == "active"
                                          ? "deactive"
                                          : "active"
                                      }
                                      onClick={(e, value) =>
                                        ActiveDeactiveHandle(
                                          e,
                                          value,
                                          getmyProduct.id
                                        )
                                      }
                                    >
                                      {getmyProduct.status == "active" ? (
                                        <>
                                          <i class="icofont-eye"></i>
                                          <span value={"aaa"}>Deactive</span>
                                        </>
                                      ) : (
                                        <>
                                          <i class="icofont-eye-blocked"></i>
                                          <span>Active</span>
                                        </>
                                      )}
                                    </Button>
                                  </>
                                }
                                ACtiveDeactiveClass={getmyProduct.status}
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
