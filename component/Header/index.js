import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Container, Icon, Modal } from "semantic-ui-react";
import styles from "../../styles/sass/components/Header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "@/store/Services/Actions/getUserAction";
import Cookies from "js-cookie";

const Header = (props) => {
  const router = useRouter();
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [headerFixStyle, setHeaderFixStyle] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isUserLoggedIn, setisUserLoggedIn] = useState();
  const [desktopmenue, setDesktopmenue] = useState(false);
  const [isloading, setIsloading] = useState(false);

  const getUser = useSelector((state) => state.getUserReducer?.data?.user);
  const getUserDispatch = useDispatch();
  const loadUserDispatch = () => {
    getUserDispatch(getUserAction());
  };
  const str = getUser?.first_name;
  const firstLetter = str?.split("")[0].toUpperCase() + ".";

  const handleScroll = (event) => {
    const scrollTop = window.pageYOffset;
    setHeaderFixStyle(scrollTop > 30);
  };
  useEffect(() => {
    loadUserDispatch();
    window.addEventListener("scroll", handleScroll);

    const urlParams = new URLSearchParams(window.location.search);
    const referral = urlParams.get("referral");
    if (referral) {
      const app = getApp;
      app["data"].showLogin = true;
      app["data"].referral_code = referral;
      appDispatch(getAppAction(app));
    }
  }, []);
  const userSession = () => {
    const isLoggedIn = Cookies.get("token");
    setisUserLoggedIn(isLoggedIn);
  };
  const logoutHandle = () => {
    setIsloading(true);
    Cookies.remove("token");

    router.push("/");
  };
  useEffect(() => {
    userSession();
  });
  const onOpen = () => {};
  const onClose = () => {
    const app = getApp;
    app["data"].showLogin = false;
    appDispatch(getAppAction(app));
  };

  const menuVisibileHandle = () => {
    setIsMenuVisible(isMenuVisible ? false : true);
  };
  const desktopmenueHandle = () => {
    setDesktopmenue(desktopmenue ? false : true);
  };
  return (
    <>
      {/* <section className={styles.headerbar + " bold basecolor2-bg white"}>
        <Container>
          <div className="align-center">
              <div
                className={
                  styles.headerbarbox + " flexbox jc-center flex-center"
                }
              >
                <div className={" ml-10 mr-10 flexbox jc-center"}>
                  <div>Download WinJoy app now!</div>
                  <Link className="ml-10 mr-10" href="https://play.google.com/store/apps/details?id=com.winjoy">
                      <img src="/images/svg/android1.svg" />
                  </Link>
                  <Link className="ml-10 mr-10" href="https://apps.apple.com/pk/app/winjoy-spreading-joy/id1613371170">
                      <img src="/images/svg/appstor1.svg" />
                  </Link>
                </div>
              </div>
          </div>
        </Container>
      </section> */}
      <header
        id={styles.header}
        className={`${props.darkHeader ? styles.darkHeader : " "}`}
      >
        <Container>
          <div className={styles.headerRow}>
            <div className={styles.col1}>
              <div id={styles.logo}>
                <Link href="/">
                  FindEaxy
                </Link>
              </div>
            </div>
            <div className={styles.col2}>
              <nav
                className={classNames(
                  styles.nav,
                  isMenuVisible ? styles.menuOpen : ""
                )}
              >
                <div className={styles.Navabar}>
                  {isMenuVisible == true ? (
                    <>
                    <div className={styles.desktopHeader + " white-bg"}>
                      <ul className="no-list">
                        {isUserLoggedIn ? (
                          <>
                            
                          <li>
                            <Link href={"/product/search/car"}>Sell Your Car</Link>
                          </li>
                          <li>
                            <Link href={"/product/search/bike"}>Sell Your Bike</Link>
                          </li>
                          <li>
                            <Link href={"/product/search/mobile"}>Sell Your Mobile/Tablet</Link>
                          </li>
                          <li>
                            <Link href={"/product/search/laptop"}>Sell Your Laptop</Link>
                          </li>
                          </>
                        ) : (
                          <>
                            <Link
                              className={
                                styles.enterbutton + " btn button ui btn-primary"
                              }
                              href={"/login"}
                            >
                              Login/Signup
                            </Link>
                          </>
                        )}
                      </ul>
                    </div>
              </>
                  ) : (
                    ""
                  )}

                  <ul className={"no-list"}>
                    <li>
                      <Link href={"/product/search/car"}>Car</Link>
                    </li>
                    <li>
                      <Link href={"/product/search/bike"}>Bike</Link>
                    </li>
                    <li>
                      <Link href={"/product/search/mobile"}>Mobile/Tablet</Link>
                    </li>
                    <li>
                      <Link href={"/product/search/laptop"}>Laptop</Link>
                    </li>
                    <li>
                      <div className={styles.loginRow + " mobile only"}>
                        {isUserLoggedIn ? (
                          <Link
                            className={styles.mbbutton + " ui button primary"}
                            href={"/tickets"}
                          >
                            My Account
                          </Link>
                        ) : (
                          <Link className={"ui button primary"} href={"/login"}>
                            Login/Signup
                          </Link>
                        )}
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className={styles.col3}>
              <div
                className={
                  styles.socialIcons + " test flexbox flex-center jc-end"
                }
              >
                {/* 
                <Button
                  circular
                  className={styles.socialBtn}
                  icon="instagram"
                />
                <Button circular className={styles.socialBtn} icon="facebook" />
                <Button circular className={styles.socialBtn} icon="twitter" /> */}

                {isUserLoggedIn ? (
                  <>
                  <Button
                    className={classNames(
                      styles.Loginbutton + " ui button btn btn-white"
                    )}
                      onClick={() => menuVisibileHandle()}
                    >
                      Make Your Product
                    </Button>
                  </>
                ) : (
                  <>
                    <Link
                      className={
                        styles.Loginbutton + " ui button btn btn-white mr-10"
                      }
                      href={
                        isUserLoggedIn ? "/product/product-create" : "/login"
                      }
                    >
                      Make Your Product
                    </Link>
                    <Link
                      className={
                        styles.Loginbutton + " ui button btn btn-white"
                      }
                      href={"/login"}
                    >
                      Login
                    </Link>
                  </>
                )}
                <Button
                  className={classNames(
                    styles.hamburgerIcon,
                    " ui mobile only "
                  )}
                  square
                  color="basecolor2"
                  icon={!isMenuVisible ? "bars" : "close"}
                  onClick={() => menuVisibileHandle()}
                />

                <Button
                  className={classNames(
                    styles.hamburgerIcon,
                    " computer only  "
                  )}
                  square
                  color="basecolor2"
                  icon={!desktopmenue ? "bars" : "close"}
                  onClick={() => desktopmenueHandle()}
                />
              </div>
            </div>
            {desktopmenue === true ? (
              <>
                <div className={styles.desktopHeader + " white-bg"}>
                  <ul className="no-list">
                    {isUserLoggedIn ? (
                      <>
                        <li>
                          <Link href={"/product/my-product"}>My Product</Link>
                        </li>
                        <li>
                          <Link href={"/tickets"}>My Account</Link>
                        </li>

                        <li>
                          <Link href={"/profile"}>My Profile</Link>
                        </li>
                        <Button
                          className={
                            styles.enterbutton +
                            " btn button ui btn-primary btn-border"
                          }
                          loading={isloading}
                          onClick={() => logoutHandle()}
                        >
                          Logout
                        </Button>
                      </>
                    ) : (
                      <>
                        <Link
                          className={
                            styles.enterbutton + " btn button ui btn-primary"
                          }
                          href={"/login"}
                        >
                          Login/Signup
                        </Link>
                      </>
                    )}
                  </ul>
                  <div>
                    <div
                      className={
                        styles.socialIcons + " socialIcons flexbox flex-center"
                      }
                    >
                      <Link
                        href={
                          "https://www.instagram.com/winjoyae?utm_medium=copy_link"
                        }
                        circular
                        className={styles.socialBtn}
                      >
                        <Icon name="instagram" />
                      </Link>
                      <Link
                        href={"https://www.facebook.com/winjoyae"}
                        circular
                        className={styles.socialBtn}
                      >
                        <Icon name="facebook f" />
                      </Link>
                      <Link
                        href={"https://vm.tiktok.com/ZSe7SEt69/"}
                        circular
                        className={styles.socialBtn}
                      >
                        <img src={"/images/tik-tok.png"} />
                      </Link>
                      <Link
                        href={
                          "https://www.snapchat.com/add/wjwinjoy?share_id=WiY7dKP-QK4&locale=en-GB"
                        }
                        circular
                        className={styles.socialBtn}
                      >
                        <img src={"/images/snapchat.png"} />
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
