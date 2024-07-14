import React, { useState, useEffect } from "react";
import { Container, Grid, Button } from "semantic-ui-react";
import styles from "../../../styles/sass/components/MyProduct.module.scss";
import { ImageUrl } from "../../../store/apis/ImageUrl";
import Link from "next/link";
import Http from "@/store/apis/Http";
import { useRouter } from "next/router";
import classNames from "classnames";
function MyProductItem(props) {
  const [removeCartLoading, setRemoveCartLoading] = useState(false);

  const imageurl = ImageUrl + props.item.car_images;

  return (
    <>
      <div
        className={classNames(
          styles.checkboxMegaItem + " " + props.item.status + " link-wrap"
        )}
      >
        <Link
          className={"link"}
          href={`/product/search/${props.item.slug}`}
        ></Link>
        <Grid>
          <Grid.Row verticalAlign="middle">
            <Grid.Column computer={2}>
              <div
                className={styles.ProductImage + " bg-norepeat bg-center mr-10"}
                style={{ backgroundImage: `url(${imageurl})` }}
              ></div>
            </Grid.Column>
            <Grid.Column computer={14}>
              <Grid>
                <Grid.Row className={"nopadding"} verticalAlign={"middle"}>
                  <Grid.Column computer={5} mobile={10}>
                    <div>
                      <div className={"darkgray f14"}>Buy</div>
                      <h3
                        className={"bold buy_product darkgray"}
                        style={{ lineHeight: "12px" }}
                      >
                        {props.item.title}
                      </h3>
                    </div>
                  </Grid.Column>
                  <Grid.Column computer={4} mobile={6} floated={"left"}>
                    <div>
                      <div className={"flexbox jc-left"}>
                        <div>
                          <div className={"darkgray f14"}>Price</div>
                          <h3 className={"bold darkgray"}>
                            Rs.{props.item.price}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Grid.Column>
                  <Grid.Column computer={4} mobile={8} floated={"left"}>
                    <div className="mt-10">
                      <Button className={"ui button btn btn-xs btn-success"}>
                        {props.item.status}
                      </Button>
                      <div className={""}>
                        {props.item.status == "active"
                          ? "This product is live"
                          : "This product is not live"}
                      </div>
                    </div>
                  </Grid.Column>
                  <Grid.Column computer={3} mobile={8} floated={"right"}>
                    <div className={" align-right"}>
                      <div>{props.ACtiveDeactiveProduct}</div>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid>
                <Grid.Row className={"nopadding"} verticalAlign={"middle"}>
                  <Grid.Column computer={16} mobile={16} floated={"left"}>
                    <div
                      className={
                        styles.checkRow2 +
                        " flexbox flex-center jc-space-between"
                      }
                    >
                      <div className="flexbox flex-center">
                        <div className={styles.checkRow2Col + " darkgray"}>
                          <i class="icofont-eye-blocked"></i>
                          <span className="f14">Views</span>
                        </div>
                        <div className={styles.checkRow2Col + " darkgray"}>
                          <i class="icofont-ui-call"></i>{" "}
                          <span className="f14">Tel</span>
                        </div>
                        <div className={styles.checkRow2Col + " darkgray"}>
                          <i class="icofont-heart-alt"></i>{" "}
                          <span className="f14">Likes</span>
                        </div>
                        <div className={styles.checkRow2Col + " darkgray"}>
                          <i class="icofont-chat"></i>{" "}
                          <span className="f14">Chats</span>
                        </div>
                      </div>
                      <div>
                        {/* <i
                          onClick={() => DeleteProduct(props.item.id)}
                          class="icofont-ui-delete"
                        ></i> */}
                        {props.deleteHandle}
                      </div>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
}

export default MyProductItem;
