import Header from "@/component/Header";
import { useEffect, useState } from "react";
import { Button, Container, Divider } from "semantic-ui-react";
import LoginForm from "../../component/auth/LoginForm";
import HeroSection from "@/component/HeroSection";
import { useRouter } from "next/router";
const Login = () => {
  const [isLoginFormVisible, setisLoginFormVisible] = useState(false);
  const [isUserLoggedIn, setisUserLoggedIn] = useState();
  const router = useRouter();

  const loginRegisterSwitch = (isLogin) => {
    if (isLogin) {
      setisLoginFormVisible(true);
    } else {
      setisLoginFormVisible(false);
    }
  };

  const userSession = () => {
    const isSession = sessionStorage.getItem("userinfo");
    setisUserLoggedIn(isSession);
    if (isUserLoggedIn) {
      router.push("/");
    }
  };
  useEffect(() => {
    userSession();
  });

  return (
    <>
      <Header />
      <HeroSection heading={"Login"} />

      <div>
        {isLoginFormVisible ? (
          <div>
            <LoginForm />
            <Divider className={"stack-center sm"} />
            <h6 className={"align-center"}>
              Don't have an account?{" "}
              <Button
                primary
                basic
                size={"small"}
                onClick={() => loginRegisterSwitch(false)}
              >
                Create an account
              </Button>
            </h6>
          </div>
        ) : (
          /* register */
          <div>
            <section className={"section section-padding"}>
              <Container text>
                <LoginForm />
              </Container>
            </section>
            <Divider className={"stack-center sm"} />
            <h6 className={"align-center"}>
              Don't have an account?{" "}
              <a href="/register" primary basic size={"small"}>
                Register
              </a>
            </h6>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
