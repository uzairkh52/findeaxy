import { useState } from "react";
import { Button, Divider, Grid, Icon, Item } from "semantic-ui-react";
// import { numbertoShortForm, numberWithCommas } from "../common/Reusable";
import styles from "../../styles/sass/components/ProductCard.module.scss";
import classNames from "classnames";
import Link from "next/link";
import { ImageUrl } from "@/store/apis/ImageUrl";

function ProductslugCard(props) {
  console.log("props", props);
  const imageurl = ImageUrl + props.item.car_images;
  return (
    // <Link
    //   className="flexbox flex-center jc-center"
    //   href={`/mega-draw/${props.productSlug}`}
    // >
    <div className={styles.ProductDetailBox + " white-bg"}>
      <Grid>
        <Grid.Row verticalAlign={"middle"}>
          <Grid.Column computer={7} mobile={16}>
            <div
              className={styles.ProductDetailBoxLeftCol}
              style={{
                backgroundImage: `url(${imageurl})`,
              }}
            >
              {/* <div
                className={styles.ProductDetailBoxProductImg + " bg-cover bg-center"}
                style={{ backgroundImage: `url(${props.ProductImage})` }}
              ></div> */}
              {/* <div className={styles.circlesWrapper}>
                <CircularProgressbar
                  size={"small"}
                  value={percentage}
                  text={`${Math.round(percentage)}%`}
                  styles={buildStyles({
                    pathColor: `#ffb80c`,
                    textColor: "#ffb80c",
                  })}
                />
              </div> */}
            </div>
          </Grid.Column>
          <Grid.Column computer={9} mobile={16}>
            <div className={styles.ProductDetailBoxRightCol}>
              <Grid>
                <Grid.Row>
                  <Grid.Column computer={16}>
                    <div className={styles.RightColHead}>
                      <div className={" mb-20 flexbox flex-center"}>
                        <div>
                          <h3 className="black bold nomargin">
                            {props.item.car_make} {props.item.car_model}
                          </h3>
                        </div>
                      </div>
                      {/*  */}
                      <div
                        className={
                          styles.row_2 + " flexbox flex-center jc-space-between"
                        }
                      >
                        <div>
                          <div className={styles.sub_title + " f14 bc1-light"}>
                            Car drive km
                          </div>
                          <div className={styles.title}>
                            {props.item.car_drive_km} km
                          </div>
                        </div>
                        <div>
                          <div className={styles.sub_title + " f14 bc1-light"}>
                            Car Location
                          </div>
                          <div className={styles.title}>
                            {props.item.location}
                          </div>
                        </div>
                        <div>
                          <div className={styles.sub_title + " f14 bc1-light"}>
                            car Year
                          </div>
                          <div className={styles.title}>
                            {props.item.car_year}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*  */}
                    <div className={styles.RightColHead}>
                      <div className={" mb-20 flexbox flex-center"}>
                        <div>
                          <h3 className="black bold nomargin">
                            Seller Description
                          </h3>
                        </div>
                      </div>
                      {/*  */}
                      <div className={styles.row_2 + " "}>
                        <Item.Group>
                          <Item>
                            <Item.Image
                              circular
                              size="tiny"
                              src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
                            />

                            <Item.Content verticalAlign="middle">
                              <Item.Header>
                                <div>muhammad umer iqbal</div>
                                <div className="f14 lightergray">
                                  Member since Oct 2016
                                </div>
                              </Item.Header>
                              <Item.Header className=" pull-right  ">
                                <Button className="btn btn-default btn-sm">
                                  Show Seller Number
                                </Button>
                              </Item.Header>
                            </Item.Content>
                          </Item>
                        </Item.Group>
                      </div>
                    </div>
                    <hr />
                    {/*  */}
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column computer={16}>
                    <div
                      className={
                        styles.ProductDetailBoxfooter +
                        " flexbox flex-center jc-space-between"
                      }
                    >
                      <div className={styles.PriceColum}>
                        <h2 className="nomargin bold">
                          Rs. {props.item.price}
                          {/* {numberWithCommas(props.Price)} */}
                        </h2>
                      </div>
                      <div className=" flexbox flex-center">
                        <div>
                          <Button
                            className="btn btn-primary btn-md"
                            //  loading={saveCart.processing}

                            //  onClick={() => addToCartBtnHandler()}
                          >
                            Chat with seller{" "}
                            <i className="icofont-arrow-right"></i>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
export default ProductslugCard;
