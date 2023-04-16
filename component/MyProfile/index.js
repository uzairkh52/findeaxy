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
import { USER_UPDATE } from "@/store/Services/api";
const MyProfile = (props) => {
  const [activecol, setActivecol] = useState(1);

  const [first_name, setFirst_name] = useState(props?.first_name);
  const [last_name, setLast_name] = useState(props?.last_name);
  const [phone, setPhone] = useState(props?.phone);
  const [email, setEmail] = useState(props?.email);
  // const [password, setPassword] = useState(props.first_name);

  const editProfileHandle = (e) => {
    const params = {
      first_name: first_name,
      last_name: last_name,
      phone: phone,
      email: email,
    };
    Http.put(USER_UPDATE + props.id, params).then((res) => {
      const data = res;
      console.log("data111", data);
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
            <div className={styles.tickletsList + " inner_main_wrap"}>
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
            </div>
          </>
        ) : activecol === 2 ? (
          <>
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
                            name={"first_name"}
                            value={first_name}
                            // ref={inputRef}
                            onChange={(e) => {
                              setFirst_name(e.target.value);
                            }}
                          />
                        </Form.Field>

                        <Form.Field computer={8}>
                          <label>Last Name:</label>
                          <input
                            type="name"
                            name={"last_name"}
                            value={last_name}
                            onChange={(e) => {
                              setLast_name(e.target.value);
                            }}
                          />
                        </Form.Field>
                      </Form.Group>
                      <Form.Group widths="equal">
                        <Form.Field>
                          <label>Phone no:</label>
                          <input
                            type="phone"
                            name={"phone"}
                            value={phone}
                            onChange={(e) => {
                              setPhone(e.target.value);
                            }}
                          />
                        </Form.Field>

                        <Form.Field>
                          <label>Email:</label>
                          <input
                            type="name"
                            name={"email"}
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
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
        ) : (
          ""
        )}
      </div>
    </Grid.Column>
  );
};

export default MyProfile;
