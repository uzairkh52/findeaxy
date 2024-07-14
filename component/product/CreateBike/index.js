import Http from "@/store/Services/Http";
import styles from "../../../styles/sass/pages/ProductCreate.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import $ from "jquery";

import {
  Button,
  Checkbox,
  Container,
  Dropdown,
  Form,
  Grid,
  GridColumn,
  Header,
  Icon,
  Input,
  Message,
  Radio,
  Segment,
  Select,
  TextArea,
} from "semantic-ui-react";
import Cookies from "js-cookie";
import { Router, useRouter } from "next/router";
import { BIKE_ADD } from "@/store/Services/api";

const CreateBike = () => {
  const [bikeMake, setBikeMake] = useState("");
  const [bikeYear, setBikeYear] = useState("");

  const [fieldBikeMake, setFieldBikeMake] = useState("");
  const [fieldBikeYear, setFieldBikeYear] = useState("");

  const [userId, setuserId] = useState("");
  const [userPhone, setuserPhone] = useState("");

  const [field_title, setField_title] = useState("");
  const [field_description, setField_description] = useState("");
  const [field_condition, setField_condition] = useState("");
  const [field_price, setField_price] = useState("");
  const [field_bike_images, setField_bike_images] = useState("");
  const [field_location, setField_location] = useState("");
  const [submitmsg, setSubmitmsg] = useState();
  const [status, setStatus] = useState();

  // radio
  const [isUserLoggedIn, setisUserLoggedIn] = useState();
  const UserSessionHandle = () => {
    const session = Cookies.get("token");
    setisUserLoggedIn(session);
  };
  console.log("isUserLoggedIn", isUserLoggedIn);
  //   const router = useRouter();
  //   {
  //     isUserLoggedIn ? "" : router.push("/login");
  //   }

  useEffect(() => {
    UserSessionHandle();
  }, []);
  let get_city_val = [];
  //

  let get_bikeMakeValue = [];
  let get_bikeYearValue = [];

  if (bikeMake && bikeMake.length) {
    bikeMake.map((get_bikeMake, e) => {
      get_bikeMakeValue.push({
        key: e,
        value: get_bikeMake.name,
        text: get_bikeMake.name,
      });
    });
  }
  if (bikeYear && bikeYear.length) {
    bikeYear.map((get_bikeYear, e) => {
      get_bikeYearValue.push({
        key: e,
        value: get_bikeYear.year,
        text: get_bikeYear.year,
      });
    });
  }

  // car make
  const CarMakeHandle = () => {
    Http.get("/list/bike-make").then((res) => {
      const data = res.data;
      const bike_make = data.bike_make;
      const bike_year = data.bike_year;

      setBikeMake(bike_make);
      setBikeYear(bike_year);
    });
  };
  const SelectBikeMakeHandle = (e) => {
    const SelectBikeMakeVal = e.target.innerText;
    setFieldBikeMake(SelectBikeMakeVal);
  };
  const SelectYearHandle = (e) => {
    setFieldBikeYear(e.target.innerText);
  };
  const getUser = useSelector((state) => state.getUserReducer);

  useEffect(() => {
    // loadUserDispatch();
    CarMakeHandle();

    {
      getUser && getUser.data ? setuserId(getUser.data.id) : "";
      getUser && getUser.data ? setuserPhone(getUser.data.phone) : "";
    }
    // userid();
  }, [getUser]);

  // const userid = () => {
  //   {
  //     getUser.user ? setuserId(getUser.user.id) : "";
  //   }
  // };

  const adsSubmithandle = (e) => {
    const fileData = new FormData();
    fileData.append("category_id", "2");
    fileData.append("user_id", userId);
    fileData.append("bike_images", field_bike_images);
    fileData.append("title", field_title);
    fileData.append("description", field_description);
    fileData.append("bike_make", fieldBikeMake);
    fileData.append("bike_year", fieldBikeYear);
    fileData.append("condition", field_condition);
    fileData.append("price", field_price);
    fileData.append("location", field_location);
    fileData.append("status", "active");

    Http.post(BIKE_ADD, fileData)
      .then((res) => {
        console.log("fileData", res);
        setStatus(res.status);
        setSubmitmsg(res.data.status);
      })
      .catch((error) => {});
  };

  const ImageHandle = (e) => {
    setField_bike_images(e.target.files[0]);
  };

  const customImageButton = () => {
    $('[type="file"]')
      .closest("label")
      .addClass("custom-input-wrap")
      .append('<div class="custom-input-file"></div>');
    $('[type="file"]').closest(".form-group").addClass("has-file");
  };
  const customRadioButton = () => {
    $('[type="radio"]')
      .closest("label")
      .addClass("custom-input-wrap")
      .append('<div class="custom-input-radio"></div>');
    $('[type="radio"]').closest(".form-group").addClass("has-radio");
  };
  const customCheckboxButton = () => {
    $('[type="checkbox"]')
      .closest("label")
      .addClass("custom-input-wrap")
      .append('<div class="custom-input-checkbox"></div>');
    $('[type="checkbox"]').closest(".form-group").addClass("has-checkbox");
  };
  useEffect(() => {
    customRadioButton();
    customCheckboxButton();
    customImageButton();
  }, []);

  return (
    <>
      <section
        className={styles.ProductCreateSection + " section section-padding"}
      >
        <Container text>
          {status == 200 ? (
            <>
              <Message>
                <div className="section-padding ">
                  <div className="hgroup">
                    <Header as="h2" icon textAlign="center">
                      <h1>Congratulation</h1>
                      <Header.Content>{submitmsg}</Header.Content>
                    </Header>
                  </div>
                  <div className="flexbox jc-center">
                    <a className="ui large button btn btn-border" href="/">
                      Go to home page
                    </a>
                    <a
                      className="ui large primary button"
                      href="/product/product-create"
                    >
                      Create more product
                    </a>
                  </div>
                </div>
              </Message>
            </>
          ) : (
            <Form className={"pb-20"}>
              <h1>Include Some Details</h1>
              {/* primary key */}
              <div>
                <label className={styles.labelfirst}>Title</label>
                <Form.Field
                  control={Input}
                  name={"title"}
                  placeholder="Title"
                  value={field_title}
                  onChange={(e) => setField_title(e.target.value)}
                />
              </div>
              <div>
                <label className={styles.labelfirst}>Description</label>
                <Form.Field
                  control={TextArea}
                  placeholder="Last name"
                  name={"description"}
                  value={field_description}
                  onChange={(e) => setField_description(e.target.value)}
                />
              </div>
              <div>
                <label className={styles.labelfirst}>Make</label>
                <Form.Field
                  control={Select}
                  Dropdown
                  placeholder="select bike make"
                  search
                  selection
                  value={get_bikeMakeValue.value}
                  options={get_bikeMakeValue}
                  onChange={(e) => SelectBikeMakeHandle(e)}
                />
              </div>
              {/* <select onChange={e => setField_car_make(e.target.value)}>
               {car_make_val.map((get_car_make_val)=> {
                  return (
                     <>
                        <option value={get_car_make_val.value}>{get_car_make_val.text}</option>
                     </>aa
                  )
               })
               }
             </select> */}
              <div>
                <label className={styles.labelfirst}>Year</label>
                <Form.Field
                  control={Select}
                  Dropdown
                  placeholder="Year"
                  search
                  selection
                  value={get_bikeYearValue.value}
                  options={get_bikeYearValue}
                  onChange={(e) => SelectYearHandle(e)}
                />
              </div>

              <div>
                <label className={styles.labelfirst}>Condition</label>
                <div className="flexbox">
                  <label>
                    <input
                      // checked={true}
                      type={"radio"}
                      name={"Condition"}
                      value={"Used Bike"}
                      onChange={(e) => setField_condition(e.target.value)}
                    />
                    <div class={styles.radioLabel}>Used Bike</div>
                  </label>
                  <label>
                    <input
                      type={"radio"}
                      name={"Condition"}
                      value={"New Bike"}
                      onChange={(e) => setField_condition(e.target.value)}
                    />
                    <div class={styles.radioLabel}>New Bike</div>
                  </label>
                </div>
              </div>
              <hr />
              <h4>Set Price of Your Product</h4>
              <div>
                <Form.Field
                  control={Input}
                  label="Price"
                  placeholder="Rs."
                  name={"field_price"}
                  value={field_price}
                  onChange={(e) => setField_price(e.target.value)}
                />
              </div>
              <div>
                <label className={styles.labelfirst}>Upload Images</label>
                <Grid>
                  <Grid.Row>
                    <GridColumn computer={8}>
                      <label className={styles.labelfirst}>
                        <input
                          type={"file"}
                          name={"field_bike_images"}
                          onChange={ImageHandle}
                        />
                        <div class={styles.FileLabel}>
                          <Message className="br-12">
                            <div className="section-padding-xs">
                              <div className="hgroup">
                                <Header as="h2" icon textAlign="center">
                                  <Icon name="images outline" size="tiny" />
                                </Header>
                              </div>
                              <div className="flexbox jc-center align-center">
                                <div className="align-center">
                                  <p className="f18">
                                    Select Images of your prodect{" "}
                                  </p>
                                  <div className="align-center lightgray f16">
                                    File type{" "}
                                    <span className="bold">
                                      JPG,PNG,SVG,WEBP
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Message>
                        </div>
                      </label>
                    </GridColumn>
                  </Grid.Row>
                </Grid>
              </div>
              <hr />
              {/* <Form.Field
                  control={Input}
                  label="car image"
                  placeholder="car image"
                  name={"field_bike_images"}
                  value={field_bike_images}
                  onChange={(e)=> setField_bike_images(e.target.value)}
               /> */}
              <div>
                <label className={styles.labelfirst}>Pickup Location</label>
                <Form.Field
                  control={Input}
                  label="Address"
                  placeholder="Ex. House no 123 sector street famouse place"
                  name={"field_location"}
                  value={field_location}
                  onChange={(e) => setField_location(e.target.value)}
                />
              </div>

              {/* <Form.Group widths="equal">
               </Form.Group> */}
              <Segment clearing>
                {/* <Header floated="right">Float Right</Header>
                <Header floated="left">Float Left</Header> */}
                <div className="flexbox jc-space-between hgroup">
                  <div>
                    <label className={styles.labelfirst}>
                      Your phone number is
                    </label>
                  </div>
                  <div>
                    <label className={styles.labelfirst}>{userPhone}</label>
                  </div>
                </div>
                <div className="flexbox jc-space-between hgroup">
                  <label className={styles.labelfirst}>
                    Do you want show Phone number in ads
                  </label>
                  <Radio toggle label="" />
                </div>
              </Segment>
              <Form.Field
                control={Button}
                primary
                size={"large"}
                onClick={() => adsSubmithandle()}
              >
                Let's Go
              </Form.Field>
            </Form>
          )}
        </Container>
      </section>
    </>
  );
};

export default CreateBike;
