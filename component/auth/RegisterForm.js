import { useEffect, useState } from "react";
import { Button, Form, Input } from "semantic-ui-react";
import Http from "@/store/apis/Http";
import { Router } from "next/router";
import { useRouter } from "next/router";
const RegisterForm = () => {
  const router = useRouter();

  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState();

  // const webUserControler = () => {
  //   Http.get("/users").then((res) => {
  //     console.log("webusers", res);
  //   });
  // };

  const RegisterController = (e) => {
    const params = {
      first_name: first_name,
      last_name: last_name,
      phone: phone,
      email: email,
      password: password,
    };
    console.log("params", params);

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    Http.post("/auth/register", params, config)
      .then((res) => {
        const data = res.data;
        const token = res.data.token;
        const userid = res.data.user-data.id;

        setFirst_name();
        setLast_name();
        setPhone();
        setEmail();
        setPassword();
        setToken(token);
        console.log("ressss", res);
        const setcookies = [
          {
            email: params.email,
            password: params.password,
            token: token,
            id: userid,
          },
        ];
        Cookies.set("token", token);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const isUserLoggedIn = () => {
    const item = sessionStorage.getItem("userinfo");
    console.log("item", item);
    if (item) {
      router.push("/");
    }
  };
  useEffect(() => {
    // webUserControler();
    isUserLoggedIn();
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
            label="First name"
            name={"first_name"}
            placeholder="First name"
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
          />
          <Form.Field
            control={Input}
            label="Last name"
            placeholder="Last name"
            name={"last_name"}
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
          />
        </Form.Group>
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
            label={
              <>
                Phone <span className={"lblStackLeft"}></span>
              </>
            }
            name={"phone_no"}
            placeholder="556232947"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength={13}
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
            onClick={() => RegisterController()}
            // loading={registerData.processing}
          >
            Create an account
          </Form.Field>
        </div>
      </Form>
    </>
  );
};

export default RegisterForm;
