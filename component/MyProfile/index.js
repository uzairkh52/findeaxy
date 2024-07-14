import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/sass/components/CSupport.module.scss";
import {
  Grid,
  Container,
  Button,
  Icon,
  Form,
  Select,
  Dropdown,
} from "semantic-ui-react";
import Http from "@/store/Services/Http";
import { GET_USER, USER_UPDATE } from "@/store/Services/api";
const MyProfile = (props) => {
  const [activecol, setActivecol] = useState(1);
  const [FFname, setFFname] = useState();
  const [last_name, setLast_name] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  const [fieldFname, setFieldFname] = useState();
  const [fieldlname, setFieldLname] = useState(last_name);
  const [fieldphone, setFieldPhone] = useState(phone);
  const [fieldemail, setFieldEmail] = useState(email);
  // const [password, setPassword] = useState(props.first_name);

  const [data, setData] = useState({ FFname: FFname });

  const getUser = () => {
    Http.get(GET_USER)
      .then((response) => {
        const data = response.data.user;
        setFFname(data.first_name);
        setLast_name(data.last_name);
        setPhone(data.phone);
        setEmail(data.email);
      })
      .catch((error) => {
        const response = error.response;
        return { error: response };
      });
  };
  const fieldhandle = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  console.log("FFname", data);

  useEffect(() => {
    getUser();
  }, [getUser]);

  const editProfileHandle = (e) => {
    const params = {
      data: data,
    };
    Http.put(USER_UPDATE + props.id, params).then((res) => {
      const data = res;
    });
  };

  return (
    <Grid.Column computer={11} mobile={16}>
      <div
        className={
          styles.CSupport + " " + styles.usersection + " " + styles.active
        }
      >
        <ul className={styles.tabsNav}>
          <li
            className={`cursor-pointer ${
              activecol === 1 ? `activate ${styles.activeTab}` : " un-active"
            }`}
            onClick={() => setActivecol(1)}
          >
            <Link
              id="#MegaDraw"
              data-toggle="tab"
              role="tab"
              aria-controls="MegaDraw"
              aria-selected="true"
              href="#MegaDraw"
            >
              Personal Detail
            </Link>
          </li>
          <li
            className={`cursor-pointer ${
              activecol === 2 ? `activate ${styles.activeTab}` : " un-active"
            }`}
            onClick={() => setActivecol(2)}
          >
            <Link
              id="#MegaDraw"
              data-toggle="tab"
              role="tab"
              aria-controls="MegaDraw"
              aria-selected="true"
              href="#MegaDraw"
            >
              Setting
            </Link>
          </li>
        </ul>
        {activecol === 1 ? (
          <>
            {/* <div className={styles.tickletsList + " inner_main_wrap"}>
              <>
                <Grid>
                  <Grid.Row>
                    <Grid.Column computer={8}>
                      <div className="hgroup">
                        <div className="lightergray">First Name:</div>
                        <div className="darkgray">{props.first_name}</div>
                      </div>
                    </Grid.Column>
                    <Grid.Column computer={8}>
                      <div className="hgroup">
                        <div className="lightergray">Last Name:</div>
                        <div className="darkgray">{props.last_name}</div>
                      </div>
                    </Grid.Column>
                    <Grid.Column computer={8}>
                      <div className="hgroup">
                        <div className="lightergray">Phone no:</div>
                        <div className="darkgray">{props.phone}</div>
                      </div>
                    </Grid.Column>
                    <Grid.Column computer={8}>
                      <div className="hgroup">
                        <div className="lightergray">Email:</div>
                        <div className="darkgray">{props.email}</div>
                      </div>
                    </Grid.Column>
                    <Grid.Column computer={8}>
                      <div className="hgroup">
                        <div className="lightergray">Password:</div>
                        <div className="darkgray">*****</div>
                      </div>
                    </Grid.Column>
                    <Grid.Column computer={16} className="flexbox jc-center">
                      <Button onClick={() => setActivecol(2)}>Edit</Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </>
            </div> */}
            <div className={styles.tickletsList + " inner_main_wrap"}>
              <>
                <Form>
                  <section className={styles.active}>
                    <div className="mb-20">
                      <Form.Group widths="equal">
                        <Form.Field computer={8}>
                          <label>First Name:</label>
                          <input
                            type="name"
                            name={"fname"}
                            // value={data.fname}
                            // ref={inputRef}
                            onChange={(e) => fieldhandle(e)}
                          />
                        </Form.Field>

                        <Form.Field computer={8}>
                          <label>Last Name:</label>
                          <input
                            type="name"
                            name={"lanme"}
                            // value={data.lname}
                            onChange={(e) => fieldhandle(e)}
                          />
                        </Form.Field>
                      </Form.Group>
                      <Form.Group widths="equal">
                        <Form.Field>
                          <label>Phone no:</label>
                          <input
                            type="phone"
                            name={"phone"}
                            // value={data.phone}
                            onChange={(e) => fieldhandle(e)}
                          />
                        </Form.Field>

                        <Form.Field>
                          <label>Email:</label>
                          <input
                            type="name"
                            name={"email"}
                            // value={data.email}
                            onChange={(e) => fieldhandle(e)}
                          />
                        </Form.Field>
                      </Form.Group>
                      <Form.Group>
                        {/* <Form.Field width={8}>
                            <label>Password:</label>
                            <input
                              type="name"
                              name={"name"}
                              placeholder="Enter your email address"
                              value={props.password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </Form.Field> */}
                      </Form.Group>
                    </div>
                    <div className="flexbox jc-center">
                      <Button
                        primary
                        className=""
                        onClick={(e) => editProfileHandle(e)}
                      >
                        Save change
                      </Button>
                    </div>
                  </section>
                </Form>
              </>
            </div>
          </>
        ) : activecol === 2 ? (
          <></>
        ) : (
          ""
        )}
      </div>
    </Grid.Column>
  );
};

export default MyProfile;
