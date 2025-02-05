import { useEffect, useState } from "react";
import { Button, Form, Input } from "semantic-ui-react";
import Http from "@/store/apis/Http";
import { useRouter } from "next/router";
import { Cookie } from "next-cookie";
import Cookies from "js-cookie";
const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState();
  const [isUserLoggedIn, setisUserLoggedIn] = useState();
  const [isLoading, setisLoading] = useState(false);

  const LoginController = (e) => {
    setisLoading(true);
    const params = {
      email: email,
      password: password,
    };
    console.log("params", params);
    Http.post("/auth/login", params)
      .then((res) => {
        const data = res.data;
        const token = res.data.token;
        const userid = res.data.user.id;
        setEmail();
        setPassword();
        // const setcookies = [
        //   {
        //     id: userid,
        //     email: params.email,
        //     password: params.password,
        //     token: token,
        //   },
        // ];
        Cookies.set("token", token);
        const issession = Cookies.get("token");
        if (issession) {
          setisLoading(false);
          setIsUserLoggedIn(issession);
        }
        console.log("res", res);
        
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const userSession = () => {
    const isLoggedIn = Cookies.get("token");
    setisUserLoggedIn(isLoggedIn);
    if (isUserLoggedIn) {
      router.push("/");
    }
  };

  useEffect(() => {
    userSession();
  });

  return (
    <>
      <Form className={"pb-20"}>
        <div className={"hgroup align-center"}>
          <h5>Create an account</h5>
        </div>

        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="Email"
            name={"email"}
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            type={"password"}
            label="Password"
            name={"password"}
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <div className={"align-center"}>
          <Form.Field
            control={Button}
            primary
            size={"large"}
            onClick={() => LoginController()}
            loading={isLoading}
          >
            Login
          </Form.Field>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;