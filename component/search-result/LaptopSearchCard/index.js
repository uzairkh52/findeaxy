import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Button, Icon } from "semantic-ui-react";
import Link from "next/link";
import styles from "../../../styles/sass/search/searchCard.module.scss";

import { numberWithCommas } from "@/component/reUseable";
// import "react-circular-progressbar/dist/styles.css";
// import { saveCartAction } from "../../redux/actions/saveCartAction";
// import moment from "moment";
// import { getAppAction } from "../../redux/actions/getAppAction";
import { ImageUrl } from "@/store/apis/ImageUrl";

// import styles from "../sass/pages/Home.module.scss";
const LaptopSearchCard = (props) => {
  const imageurl = ImageUrl + props.item.laptop_images;
  const [showNumber, setShowNumber] = useState(true);
  const SHowNumberHandle = (e) => {
    setShowNumber((showNumber) => !showNumber);
  };

  // const dispatchSaveCart = useDispatch();
  // const getCart = useSelector((state) => state.getCartReducer);
  // const getApp = useSelector((state) => state.getAppReducer);
  // const appDispatch = useDispatch();
  // const addToCartHandle = (isCountry, countryIso) => {
  //   if (getCart.isError) {
  //     const app = getApp;
  //     app["data"].showLogin = true;
  //     appDispatch(getAppAction(app));
  //   } else {
  //     const params = {
  //       is_from_experience: false,
  //       product_id: props.item.product.id,
  //       count: 1,
  //     };
  //     dispatchSaveCart(saveCartAction(params));
  //   }
  // };

  // useEffect(() => {}, []);
  // const stock = parseInt(props.item.stock) ? parseInt(props.item.stock) : 0;
  // const updatedStock = parseInt(props.item.updated_stock)
  //   ? props.item.updated_stock
  //   : 0;
  // const perc = (parseInt(stock ? updatedStock : 0) / parseInt(stock)) * 100;

  // const getSaveCart = useSelector((state) => state.saveCartReducer);
  // const isProcessing =
  //   getSaveCart.processing &&
  //   getSaveCart.data.params &&
  //   getSaveCart.data.params.product_id === props.item.product.id;

  // const isCountry = router?.pathname?.includes("pk");
  // let countryIso = "";
  // let price = `AED ${numberWithCommas(props.item.product.price)}`;
  // const prd = props.item;
  // if (isCountry && prd.product_countries) {
  //   countryIso = router.pathname?.replace("/", "").toUpperCase();
  //   const prdCountry = prd.product_countries.find(
  //     (item) => item.country.iso === countryIso
  //   );
  //   price =
  //     prdCountry.country.currency + " " + numberWithCommas(prdCountry.price);
  // }
  return (
    <>
      <Grid.Column className={styles.CardColumn + " mb-30"}>
        <div className={styles.wjcard + " br-12 link-wrap"} mobile={16}>
          <Link className={"link"} href={props.item.slug}></Link>
          <div className={styles.CardHeader}>
            <div className={styles.progBar}>
              <div className={styles.progBarIn}>
                {/* <div className={styles.stockText}>
                  <div>
                    <span>aaa</span> sold out of <span>{"stock"}</span>
                  </div>
                </div> */}
                {/* <CircularProgressbarWithChildren
                  value={perc}
                  strokeWidth={6}
                  background={"red"}
                  backgroundPadding={0}
                  styles={buildStyles({
                    backgroundColor: "#fff",
                    textColor: "#E7003F",
                    pathColor: "#E7003F",
                    trailColor: "#CFD2E2",
                    background: "#fff",
                  })}
                /> */}
              </div>
            </div>
            <div
              className={styles.thumb}
              style={{
                backgroundImage: `url(${imageurl})`,
              }}
            />
          </div>

          <div className={styles.content}>
            <div className={styles.row_1}>
              <div
                className={styles.box + " flexbox flex-center jc-space-between"}
              >
                <div className={styles.titleWrap}>
                  <div className={styles.sub_title}>Title </div>
                  <h5 className={styles.title}>{props.item.title}</h5>
                </div>
              </div>
            </div>
            {/* get a chance row */}
            <div
              className={styles.row_1 + " flexbox flex-center jc-space-between"}
            >
              <div>
                <div className={styles.sub_title}>
                  Brand <span className={"basecolor2"}></span>
                </div>
                <div className={styles.title}>{props.item.laptop_brand}</div>
              </div>
              <div>
                <div className={styles.sub_title}>Laptop price</div>
                <div className={styles.price + " "}>Rs. {props.item.price}</div>
              </div>
            </div>
            <div
              className={styles.row_1 + " flexbox flex-center jc-space-between"}
            >
              <div>
                <div className={styles.sub_title}>Location</div>
                <div className={styles.title}>{props.item.location}</div>
              </div>
              <div>
                <div className={styles.sub_title}>Condition</div>
                <div className={styles.title}>{props.item.condition}</div>
              </div>
            </div>
            <div className={styles.row_3 + " flexbox flex-center jc-center"}>
              <Button
                value={props.item.user.phone}
                onClick={(e) => SHowNumberHandle(e)}
                size={"large"}
                className={"cta-button-1 " + styles.button}
              >
                {showNumber == true ? "Show Number" : props.item.user.phone}
              </Button>
            </div>
            <div className={styles.contentfooter + " align-center"}>
              <div>
                {/* {props.item.enable_buy ? (
                  <>
                    Draw on {moment(props.item.end_date).format("MMMM Do YYYY")}{" "}
                    or earlier Draw date to be announced soon.
                  </>
                ) : (
                  <>Draw date to be announced soon.</>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </Grid.Column>
    </>
  );
};

export default LaptopSearchCard;
