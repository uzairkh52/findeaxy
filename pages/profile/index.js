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

const Profile = (props) => {
  const [activecol, setActivecol] = useState(1);
  const [user, setUser] = useState();
  //   get user data
  const [userId, setUserId] = useState("");
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");

  const getUser = useSelector((state) => state.getUserReducer);

  // const getUserData = () => {
  //   setFirstname(getUser.first_name);
  //   setLastname(getUser.last_name);
  //   setPhone(getUser.phone);
  //   setEmail(getUser.email);
  // };
  // {
  //   Firstname ? console.log("Firstname", Firstname) : "";
  // }

  useEffect(() => {
    {
      getUser && getUser.data ? setUserId(getUser.data.id) : "";
      getUser && getUser.data ? setFirstname(getUser.data.first_name) : "";
      getUser && getUser.data ? setLastname(getUser.data.last_name) : "";
      getUser && getUser.data ? setEmail(getUser.data.email) : "";
      getUser && getUser.data ? setPhone(getUser.data.phone) : "";
    }
    // userid();
  }, [getUser]);

  console.log("Firstname", Firstname);
  const str = Firstname;
  const firstLetter = str.split("")[0]?.toUpperCase() + ".";
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
                              <>
                                {firstLetter} {Lastname}
                                <div className=" black f13">{Email}</div>
                              </>
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
                        <MyProfile
                          first_name={Firstname}
                          last_name={Lastname}
                          phone={Phone}
                          email={Email}
                        />
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
