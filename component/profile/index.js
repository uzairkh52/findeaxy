import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../sass/pages/CSupport.module.scss";
import {
  Grid,
  Container,
  Button,
  Icon,
  Form,
  Select,
  Dropdown,
} from "semantic-ui-react";
import OrderSidebar from "../../components/OrderDetail/OrderSidebar";
import getUserReducer from "../../reducers";
const initialValues = {
  first_name: "",
  last_name: "",
  bio: "",
  user_name: "",
  email: "",
  phone_no: "",
};
const MyProfile = (props) => {
  const [editProfile, setEditProfile] = useState(false);
  const [editProfileedit, setEditProfileedit] = useState(true);
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [email, setemail] = useState("");
  const [phone_no, setphone_no] = useState("");
  const [user_name, setuser_name] = useState("");
  const [company_name, setcompany_name] = useState("");
  const [address, setAddress] = useState("");
  const [activecol, setActivecol] = useState(1);
  const countries = useSelector((state) => state.getCountriesReducer);
  const [isLoading, setIsLoading] = useState(true);
  const [inputValues, setInputValues] = useState(initialValues);

  let countryOptions = [];
  if (countries.data && countries.data.length) {
    countries.data.map((country) => {
      countryOptions.push({
        key: country.id,
        value: country.phonecode,
        text: country.name,
      });
    });
  }
  const onCountryChange = (e, data) => {
    setInputValues({ ...inputValues, country: data.value });
  };
  //

  const getUser = useSelector((state) => state.getUserReducer);

  useEffect(() => {
    let userData = "";
    if (getUser && getUser.data) {
      userData = getUser.data.data[0];
      const inputValues = {
        first_name: userData.first_name,
        last_name: userData.last_name,
        email: userData.email,
        user_name: userData.user_name,
        phone_no: userData.phone_no,
        bio: userData.bio,
        designation: userData.designation,
        company_name: userData.company_name,
        office_address: userData.office_address,
        countrySelect: userData.country,
        address: userData.address,
      };
      setInputValues(inputValues);
    }
  }, [getUser]);

  const editProfileSave = (e) => {};
  // const genderOptions = [
  //   { key: "m", text: "Male", value: "male" },
  //   { key: "f", text: "Female", value: "female" },
  //   { key: "o", text: "Other", value: "other" },
  // ];
  //
  const appdispatch = useDispatch();
  const SavePersonalDetail = (e) => {
    const params = {
      editProfile: editProfile,
      editProfileedit: editProfileedit,
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone_no: phone_no,
      user_name: user_name,
      company_name: company_name,
      country: "pakistan",
    };
    appdispatch(getUserReducer(params));
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
            <Link href="#MegaDraw">
              <a
                id="#MegaDraw"
                data-toggle="tab"
                role="tab"
                aria-controls="MegaDraw"
                aria-selected="true"
              >
                Personal Detail
              </a>
            </Link>
          </li>
          <li
            className={`cursor-pointer ${
              activecol === 2 ? `activate ${styles.activeTab}` : " un-active"
            }`}
            onClick={() => setActivecol(2)}
          >
            <Link href="#MegaDraw">
              <a
                id="#MegaDraw"
                data-toggle="tab"
                role="tab"
                aria-controls="MegaDraw"
                aria-selected="true"
              >
                Career Detail
              </a>
            </Link>
          </li>
          <li
            className={`cursor-pointer ${
              activecol === 3 ? `activate ${styles.activeTab}` : " un-active"
            }`}
            onClick={() => setActivecol(3)}
          >
            <Link href="#MegaDraw">
              <a
                id="#MegaDraw"
                data-toggle="tab"
                role="tab"
                aria-controls="MegaDraw"
                aria-selected="true"
              >
                Setting
              </a>
            </Link>
          </li>
        </ul>
        {activecol === 1 ? (
          <>
            <div className={styles.tickletsList + " inner_main_wrap"}>
              <>
                <Form>
                  <section className={styles.active}>
                    <div className="mb-20">
                      <Form.Group widths="equal">
                        <Form.Field>
                          <label>First Name:</label>
                          <input
                            type="name"
                            name={"first name"}
                            value={first_name || inputValues.first_name}
                            onChange={(e) => setfirst_name(e.target.value)}
                          />
                        </Form.Field>
                        <Form.Field>
                          <label>Last Name:</label>
                          <input
                            type="name"
                            name={"last name"}
                            value={last_name || inputValues.last_name}
                            onChange={(e) => setlast_name(e.target.value)}
                          />
                        </Form.Field>
                      </Form.Group>
                      <Form.Group widths="equal">
                        <Form.Field>
                          <label>Username:</label>
                          <input
                            type="name"
                            name={"username"}
                            placeholder="Enter your email address"
                            value={user_name || inputValues.user_name}
                            onChange={(e) => setuser_name(e.target.value)}
                          />
                        </Form.Field>
                        <Form.Field>
                          <label>Email: </label>
                          <input
                            type="name"
                            name={"email"}
                            placeholder="Enter your email address"
                            value={email || inputValues.email}
                            onChange={(e) => setemail(e.target.value)}
                          />
                        </Form.Field>
                      </Form.Group>

                      <Form.Group widths="equal">
                        <Form.Field>
                          <label>Phone no: </label>
                          <input
                            type="name"
                            name={"phone no"}
                            placeholder="Enter your email address"
                            value={phone_no || inputValues.phone_no}
                            onChange={(e) => setphone_no(e.target.value)}
                          />
                        </Form.Field>
                        <Form.Field
                          control={Dropdown}
                          label={"Country: "}
                          placeholder="Country:"
                          fluid
                          search
                          selection
                          options={countryOptions}
                          value={inputValues.countrySelect}
                          onChange={onCountryChange}
                        />
                      </Form.Group>

                      <Form.Group widths="equal">
                        <Form.Field width={8}>
                          <label>Address: </label>
                          <input
                            type="name"
                            name={"Address"}
                            value={
                              address || inputValues.address == null
                                ? address || inputValues.address
                                : ""
                            }
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </Form.Field>
                      </Form.Group>
                    </div>
                    {/* <div>
                      <Button
                        primary
                        className=""
                        onClick={(e) => SavePersonalDetail()}
                      >
                        Save change
                      </Button>
                    </div> */}
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