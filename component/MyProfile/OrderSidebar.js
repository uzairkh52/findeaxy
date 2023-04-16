import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/sass/components/OrderSidebar.module.scss";
import Http from "../../store/apis/Http";
import { Grid, Button, Icon } from "semantic-ui-react";
import classNames from "classnames";

const OrderSidebar = (props) => {
  const [activecol, setActivecol] = useState(1);

  //   const getUser = useSelector((state) => state.getUserReducer);
  //   let user = "";
  //   if (getUser.data && getUser.data.data) {
  //     user = getUser.data.data[0];
  //   }

  //   const logoutHandle = () => {
  //     Cookies.remove("token");
  //     window.location.href = "/";
  //   };
  //   let usersource = `${user.source}`;

  return (
    <>
      <Grid.Column computer={5} mobile={16} className={""}>
        <div className={styles.OrderSidebar + " "}>
          <div className={styles.userheader + "  "}>
            <div className="flexbox flex-center">
              {/* {user ? (
                <div className={classNames("thumb small")}>
                  {user.profile_image ? (
                    <img src={user.profile_image} />
                  ) : (
                    user.first_name.charAt(0)
                  )}
                </div>
              ) : (
                ""
              )} */}
              <div className={classNames(styles.Content, " pl-10")}>
                <div className=" black bold">uzair</div>
                <div className=" black f13">email</div>
              </div>
            </div>
          </div>
          <div className={styles.SidebarNav}>
            <ul className={"no-list"}>
              <li onClick={() => setActivecol(1)}>
                <Link
                  id="#MyOrder"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="MyOrder"
                  aria-selected="true"
                  href="#MyOrder"
                >
                  My Orders
                </Link>
              </li>
              <li onClick={() => setActivecol(2)}>
                <Link
                  id="#MyAccount"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="MyAccount"
                  aria-selected="true"
                  href="#MyAccount"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link href={"/my-profile"}>My Profile</Link>
              </li>
              <li>
                <Link href={"/support"}>Support</Link>
              </li>
              <li>
                <Link href={"/my-wallet"}>My Wallet</Link>
              </li>

              {/* <li>
                <Link href={"/setting"}>
                  Settings
                </Link>
              </li> */}
              <li>
                <Button onClick={() => logoutHandle()}>Logout</Button>
              </li>
            </ul>
          </div>
        </div>
      </Grid.Column>
    </>
  );
};

export default OrderSidebar;
