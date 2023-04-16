import styles from "../../styles/sass/pages/profile.module.scss";
import Http from "../../store/apis/Http";

import {
  Grid,
  Container,
  Button,
  Icon,
  Modal,
  Form,
  Input,
  TextArea,
} from "semantic-ui-react";
import HeroSection from "@/component/HeroSection";
import OrderSidebar from "@/component/MyProfile/OrderSidebar";
import MyProfile from "../../component/MyProfile/index";
import { useEffect, useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import Header from "@/component/Header";
import { getUserAction } from "@/store/Services/Actions/getUserAction";

const Profile = (props) => {
  const [activecol, setActivecol] = useState(1);
  const [User, setUser] = useState();
  //   get user data
  const getUser = useSelector((state) => state.getUserReducer);
  const getUserDispatch = useDispatch();
  const loadUserDispatch = () => {
    getUserDispatch(getUserAction());
  };

  const str = getUser?.first_name;
  const firstLetter = str?.split("")[0]?.toUpperCase() + ".";

  console.log("User111", User);
  const GetUserControll = () => {
    {
      getUser && getUser.data ? setUser(getUser.data) : "";
    }
  };
  useEffect(() => {
    GetUserControll();
    loadUserDispatch();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.tickletsList + " inner_main_wrap"}>
        <>
          <HeroSection grd heading={"My Profile"} />
          <section className={"section-padding color-white-bg"}>
            <Container>
              <div className={"base-radius"}>
                <Grid className={styles.DownloadAppBox}>
                  <Grid.Row>
                    {/* <OrderSidebar activecol= {true} /> */}
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
                            <div
                              className={classNames(styles.Content, " pl-10")}
                            >
                              <div className=" black bold"></div>
                              {/* {getUser ? (
                                <>
                                  {firstLetter} {getUser?.last_name}
                                  <div className=" black f13">
                                    {getUser?.email}
                                  </div>
                                </>
                              ) : (
                                ""
                              )} */}
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
                                My Profile
                              </Link>
                            </li>
                            <li onClick={() => setActivecol(2)}>
                              <Link
                                id="#MyAccount"
                                data-toggle="tab"
                                role="tab"
                                aria-controls="MyAccount"
                                aria-selected="true"
                                href="/product/my-product"
                              >
                                My Product
                              </Link>
                            </li>
                            <li>
                              <Link href={"/support"}>Support</Link>
                            </li>
                            <li>
                              <Link href={"/my-wallet"}>My Wallet</Link>
                            </li>
                            <li>
                              <Button onClick={() => logoutHandle()}>
                                Logout
                              </Button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Grid.Column>

                    {activecol == 1 ? (
                      <>
                        {User && User.user ? (
                          <>
                            {console.log("User111", User.user)}
                            <MyProfile
                              first_name={User.user.first_name}
                              last_name={User.user.last_name}
                              phone={User.user.phone}
                              email={User.user.email}
                            />
                          </>
                        ) : (
                          ""
                        )}
                      </>
                    ) : activecol == 2 ? (
                      "<MyOrder/>"
                    ) : (
                      ""
                    )}
                  </Grid.Row>
                </Grid>
              </div>
            </Container>
            <div></div>
          </section>
        </>
      </div>
    </>
  );
};

export default Profile;
