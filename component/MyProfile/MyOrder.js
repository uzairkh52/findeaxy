import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../sass/pages/MyOrder.module.scss";
import Http from "../../redux/Http";
import { Grid, Button, Icon } from "semantic-ui-react";
import moment from "moment";
import dynamic from "next/dynamic";
import LoadingArea from "../../components/LoadingArea";

const MyOrder = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [MyOrderData, setmyOrderData] = useState("");

  const loadMyorder = () => {
    Http.get("my/orders")
      .then((resp) => {
        const data = resp.data.data;
        setmyOrderData(data);
      })
      .catch((err) => {})
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    loadMyorder();
  }, []);
  return (
    <>
      {!isLoading ? (
        <>
          <Grid.Column computer={5} className={""}>
            <div className={styles.MyOrder + " "}>
              <h3>My Orders</h3>
              {MyOrderData.length ? (
                <div>
                  {MyOrderData.map((Myorder) => {
                    return (
                      <div className={styles.OrderGrid + " color-white-bg "}>
                        <div
                          className={
                            styles.OrderGridBoxHeader +
                            " flexbox jc-space-between"
                          }
                        >
                          <div className="">
                            <div className="bold">
                              {Myorder.order_reference}
                            </div>
                            <div className="lightgray">
                              Placed on
                              {Myorder.order_date}
                              {moment(Myorder.created_at).format(
                                "MMMM Do YYYY"
                              )}
                            </div>
                          </div>
                          <div>
                            <div className="lightgray">Total</div>
                            <div className="bold basecolor2 ">
                              AED {Myorder.total}
                            </div>
                          </div>
                        </div>
                        {Myorder.products.map((product) => {
                          return (
                            <div>
                              <div
                                className={
                                  styles.OrderGridBox + " flexbox flex-center"
                                }
                              >
                                <div className="flexbox flex-center">
                                  <div
                                    className={
                                      styles.thumb + " br-7 borderlight mr-20 "
                                    }
                                  >
                                    <img
                                      src={
                                        "https://winjoy-assets.s3.amazonaws.com/products/GnmpKuaJnvC4a4m4GtGW2q30z6PldXpiPz83yjSc.jpg"
                                      }
                                    />
                                  </div>
                                  <div>
                                    <div className="black bold f15">
                                      {product?.product?.title}
                                    </div>
                                    <div className="lightgray f14">
                                      {/*  */}
                                      {Myorder.draw_end_date}
                                      {moment(
                                        product?.product?.draw_end_date
                                      ).format("MMMM Do YYYY")}
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <div className="f15">Wj-1212</div>
                                  <div className="bold basecolor2">
                                    AED {product?.product?.price}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p>No order found</p>
              )}
            </div>
          </Grid.Column>
        </>
      ) : (
        <LoadingArea />
      )}
    </>
  );
};

export default MyOrder;
