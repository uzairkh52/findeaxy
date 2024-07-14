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
import { CAR_ADD } from "@/store/Services/api";

const CreateCar = () => {
  const [car_make, setcar_Make] = useState("");
  const [fieldCarMake, setFieldCarMake] = useState("");
  const [fieldcarModel, setFieldcarModel] = useState("");
  const [fieldcarYear, setFieldcarYear] = useState("");

  const [car_model, setCar_model] = useState("");
  const [carYear, setCarYear] = useState("");

  const [city, setCity] = useState("");
  const RadioExampleToggle = () => <Radio toggle />;
  const [userId, setuserId] = useState("");
  const [userPhone, setuserPhone] = useState("");

  const [field_title, setField_title] = useState("");
  const [field_description, setField_description] = useState("");
  const [field_car_drive_km, setField_car_drive_km] = useState("");
  const [field_car_fuel, setField_car_fuel] = useState([]);
  const [field_registration_city, setField_registration_city] = useState("");
  const [field_car_documents, setField_car_documents] = useState();
  const [field_assembly, setField_assembly] = useState("");
  const [field_transmission, setField_transmission] = useState("");
  const [field_features, setField_features] = useState([]);
  const [field_condition, setField_condition] = useState("");
  const [field_price, setField_price] = useState("");
  const [field_car_images, setField_car_images] = useState("");
  const [field_location, setField_location] = useState("");
  const [submitmsg, setSubmitmsg] = useState();
  const [status, setStatus] = useState();
  // radio
  const [selected, setSelected] = useState([]);
  let get_city_val = [];
  //
  let get_car_make_val = [];
  let get_car_model_val = [];
  let getCarYearVal = [];
  if (city && city.length) {
    city.map((get_city, e) => {
      get_city_val.push({
        key: e,
        value: get_city,
        text: get_city,
      });
    });
  }

  if (car_make && car_make.length) {
    car_make.map((get_car_make, e) => {
      get_car_make_val.push({
        key: e,
        value: get_car_make,
        text: get_car_make,
      });
    });
  }
  if (car_model && car_model.length) {
    car_model.map((get_car_model, e) => {
      get_car_model_val.push({
        key: e,
        value: get_car_model,
        text: get_car_model,
      });
    });
  }
  if (carYear && carYear.length) {
    carYear.map((getCarYear, e) => {
      getCarYearVal.push({
        key: e,
        value: getCarYear,
        text: getCarYear,
      });
    });
  }

  // car make
  const cityHandle = () => {
    Http.get("/pk-cities").then((res) => {
      const data = res.data.city_names;
      setCity(data);
    });
  };
  const CarMakeHandle = () => {
    Http.get("/car-make").then((res) => {
      const data = res.data;
      setcar_Make(data);
    });
  };
  const SelectCarMakeHandle = (e) => {
    const SelectCarMakeVal = e.target.innerText;
    setFieldCarMake(SelectCarMakeVal);
    if (SelectCarMakeVal) {
      Http.get(`/car-model/${SelectCarMakeVal}`).then((res) => {
        const data = res.data;
        setCar_model(data);
      });
    }
  };
  const SelectCarModelHandle = (e) => {
    const selectCarModelval = e.target.innerText;
    setFieldcarModel(selectCarModelval);

    Http.get(`car-year/${fieldCarMake}/${selectCarModelval}`)
      .then((res) => {
        const data = res.data.car_year;
        setCarYear(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const SelectHandlerYear = (e) => {
    setFieldcarYear(e.target.innerText);
  };

  const SelectHandlerCity = (e, data) => {
    setField_registration_city(data.value);
  };
  // car make end ///

  // form values set
  // const [fuelCheckbox, setFuelCheckbox  ]=useState("");

  // setFuelCheckbox(fuelCheckbox);
  const getUser = useSelector((state) => state.getUserReducer);
  // const getUserDispatch = useDispatch();
  // const loadUserDispatch = () => {
  //   getUserDispatch(getUserAction());
  // };
  useEffect(() => {
    // loadUserDispatch();
    CarMakeHandle();
    cityHandle();

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
    fileData.append("category_id", "1");
    fileData.append("user_id", userId);
    fileData.append("car_images", field_car_images);
    fileData.append("title", field_title);
    fileData.append("description", field_description);
    fileData.append("car_make", fieldCarMake);
    fileData.append("car_model", fieldcarModel);
    fileData.append("car_year", fieldcarYear);
    fileData.append("car_drive_km", field_car_drive_km);
    fileData.append("car_fuel", field_car_fuel);
    fileData.append("registration_city", field_registration_city);
    fileData.append("car_documents", field_car_documents);
    fileData.append("assembly", field_assembly);
    fileData.append("transmission", field_transmission);
    fileData.append("features", field_features);
    fileData.append("condition", field_condition);
    fileData.append("price", field_price);
    fileData.append("location", field_location);
    fileData.append("status", "active");

    console.log("fileData", fileData);
    Http.post(CAR_ADD, fileData)
      .then((res) => {
        setStatus(res.status);
        setSubmitmsg(res.data.status);
      })
      .catch((error) => {});
  };

  const ImageHandle = (e) => {
    // console.log("aaaaaaaa", e.target.files[0]);
    setField_car_images(e.target.files[0]);
  };
  // const [value, setValue] = useState({});
  // const handleChange = ()=> {
  //    event => setValue({value: event.target.value});

  // }

  const fuelCheckbox = {
    fuelCheckbox: [
      { value: "Honda", key: "30", text: "Honda" },
      { value: "Hybrid", key: "31", text: "Hybrid" },
      { value: "Electric", key: "32", text: "Electric" },
    ],
  };
  const featuresChecbox = {
    featuresChecbox: [
      {
        key: "1",
        value: "Anti-lock braking systems",
        text: "Anti-lock braking systems",
      },
      { key: "2", value: "Air Bags ", text: "Air Bags " },
      { key: "3", value: "Air Conditioning ", text: "Air Conditioning " },
      { key: "4", value: "Alloy Rims ", text: "Alloy Rims " },
      { key: "5", value: "AM/FM Radio", text: "AM/FM Radio" },
      { key: "6", value: "Climate Control", text: "Climate Control" },
      {
        key: "7",
        value: "DVD Player Front Speakers",
        text: "DVD Player Front Speakers",
      },
      { key: "8", value: "Front Camera", text: "Front Camera" },
      { key: "9", value: "Power Locks", text: "Power Locks" },
      { key: "10", value: "Rear Camera", text: "Rear Camera" },
      { key: "11", value: "Power Mirrors", text: "Power Mirrors" },
      {
        key: "12",
        value: "Power Steering Power Windows",
        text: "Power Steering Power Windows",
      },
      {
        key: "13",
        value: "Sun Roof Steering Switches",
        text: "Sun Roof Steering Switches",
      },
      { key: "14", value: "CD Player", text: "CD Player" },
      { key: "15", value: "Heated Seats", text: "Heated Seats" },
      {
        key: "16",
        value: "USB and Auxillary Cable",
        text: "USB and Auxillary Cable",
      },
      { key: "17", value: "Cassette Player", text: "Cassette Player" },
      {
        key: "18",
        value: "Rear Seat Entertainment",
        text: "Rear Seat Entertainment",
      },
      { key: "19", value: "Cool Box", text: "Cool Box" },
      {
        key: "20",
        value: "Immobilizer Key Keyless Entry",
        text: "Immobilizer Key Keyless Entry",
      },
      { key: "21", value: "Cruise Control", text: "Cruise Control" },
      { key: "22", value: "Navigation System", text: "Navigation System" },
      {
        key: "23",
        value: "Rear AC Vents Rear speakers",
        text: "Rear AC Vents Rear speakers",
      },
    ],
  };

  console.log("field_car_fuel", field_car_fuel);
  const fuelHandleChnage = (i, e) => {
    const activeData = document.getElementById(i).checked;
    if (activeData == true) {
      setField_car_fuel((oldData) => [...oldData, e.target.value]);
    } else {
      setField_car_fuel(selected.filter((values) => values !== e.target.value));
    }
  };
  const featuresHandleChnage = (i, e) => {
    const activeData = document.getElementById(i).checked;
    if (activeData == true) {
      setField_features((oldData) => [...oldData, e.target.value]);
    } else {
      setField_features(selected.filter((values) => values !== e.target.value));
    }
  };
  const CarBrands = [
    { key: "1", value: "honda", text: "honda" },
    { key: "2", value: "toyota", text: "toyota" },
    { key: "3", value: "toyota", text: "toyota" },
    { key: "4", value: "toyota", text: "toyota" },
  ];

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
                  placeholder="car_make"
                  search
                  selection
                  value={get_car_make_val.value}
                  options={get_car_make_val}
                  onChange={(e) => SelectCarMakeHandle(e)}
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
                <label className={styles.labelfirst}>Model</label>
                <Form.Field
                  control={Select}
                  Dropdown
                  placeholder="Model"
                  search
                  selection
                  value={get_car_model_val.value}
                  options={get_car_model_val}
                  onChange={(e) => SelectCarModelHandle(e)}
                />
              </div>
              <div>
                <label className={styles.labelfirst}>Year</label>
                <Form.Field
                  control={Select}
                  Dropdown
                  placeholder="Year"
                  search
                  selection
                  value={getCarYearVal.value}
                  options={getCarYearVal}
                  onChange={(e) => SelectHandlerYear(e)}
                />
              </div>
              <div>
                <label className={styles.labelfirst}>
                  Car Drive Kilometers
                </label>
                <Form.Field
                  control={Input}
                  placeholder="Ex. 10000"
                  name={"field_car_drive_km"}
                  value={field_car_drive_km}
                  onChange={(e) => setField_car_drive_km(e.target.value)}
                />
              </div>

              {/* checkbox */}
              <div>
                <label className={styles.labelfirst}>Fuel</label>
                <div className="flexbox">
                  {fuelCheckbox.fuelCheckbox &&
                  fuelCheckbox &&
                  fuelCheckbox.fuelCheckbox.length ? (
                    <>
                      {fuelCheckbox.fuelCheckbox.map((get_fuel, i) => {
                        return (
                          <>
                            <label>
                              <input
                                type={"checkbox"}
                                // control={Checkbox}
                                // multiple={true}
                                name={"get_fuel.text"}
                                value={get_fuel.value}
                                id={get_fuel.key}
                                onChange={(e) =>
                                  fuelHandleChnage(get_fuel.key, e)
                                }
                              />
                              <div class={styles.checkboxLabel}>
                                {get_fuel.text}
                              </div>
                            </label>
                          </>
                        );
                      })}
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div>
                <label className={styles.labelfirst}>Registration City</label>
                <Form.Field
                  control={Select}
                  Dropdown
                  placeholder="Select city"
                  search
                  selection
                  value={get_city_val.value}
                  options={get_city_val}
                  onChange={SelectHandlerCity}
                />
              </div>
              <div>
                <label className={styles.labelfirst}>Car Documents</label>
                <div className="flexbox">
                  <label>
                    <input
                      type="radio"
                      value={"Original"}
                      name="Field_car_documents"
                      onChange={(e) => setField_car_documents(e.target.value)}
                    />
                    <div class={styles.radioLabel}>Original</div>
                  </label>
                  <label>
                    <input
                      type="radio"
                      value={"Duplicate"}
                      name="Field_car_documents"
                      onChange={(e) => setField_car_documents(e.target.value)}
                    />
                    <div class={styles.radioLabel}>Duplicate</div>
                  </label>
                </div>
              </div>
              <div>
                <label className={styles.labelfirst}>Assembly</label>
                <Form.Group>
                  <Form.Field widths={"equal"}>
                    <label>
                      <input
                        type={"radio"}
                        value={"Local"}
                        name={"assembly"}
                        onChange={(e) => setField_assembly(e.target.value)}
                      />
                      <div class={styles.radioLabel}>Local</div>
                    </label>
                  </Form.Field>
                  <Form.Field>
                    <label>
                      <input
                        type={"radio"}
                        value={"Imported"}
                        name={"assembly"}
                        onChange={(e) => setField_assembly(e.target.value)}
                      />
                      <div class={styles.radioLabel}>Imported</div>
                    </label>
                  </Form.Field>
                </Form.Group>
              </div>
              <div>
                <label className={styles.labelfirst}>Transmission</label>
                <div className="flexbox">
                  <label>
                    <input
                      type={"radio"}
                      name={"Transmission"}
                      value={"Automatic"}
                      onChange={(e) => setField_transmission(e.target.value)}
                    />
                    <div class={styles.radioLabel}>Automatic</div>
                  </label>
                  <label>
                    <input
                      type={"radio"}
                      name={"Transmission"}
                      value={"Manual"}
                      onChange={(e) => setField_transmission(e.target.value)}
                    />

                    <div class={styles.radioLabel}>Manual</div>
                  </label>
                </div>
              </div>
              <div>
                <div className="flexbox">
                  <Grid className="nomargin">
                    <Grid.Row className="nopadding nomargin">
                      <label className={styles.labelfirst}>Features</label>
                    </Grid.Row>
                    <Grid.Row className="nopadding nomargin">
                      {featuresChecbox.featuresChecbox &&
                      featuresChecbox &&
                      featuresChecbox.featuresChecbox.length ? (
                        <>
                          {featuresChecbox.featuresChecbox.map(
                            (get_featuresChecbox, i) => {
                              return (
                                <label>
                                  <input
                                    type={"checkbox"}
                                    name={"get_featuresChecbox.text"}
                                    value={get_featuresChecbox.value}
                                    onChange={(e) =>
                                      featuresHandleChnage(
                                        get_featuresChecbox.key,
                                        e
                                      )
                                    }
                                    id={get_featuresChecbox.key}
                                  />
                                  <div class={styles.checkboxLabel}>
                                    {get_featuresChecbox.text}
                                  </div>
                                </label>
                              );
                            }
                          )}
                        </>
                      ) : (
                        ""
                      )}
                    </Grid.Row>
                  </Grid>
                </div>
              </div>

              <div>
                <label className={styles.labelfirst}>Condition</label>
                <div className="flexbox">
                  <label>
                    <input
                      // checked={true}
                      type={"radio"}
                      name={"Condition"}
                      value={"Used Car"}
                      onChange={(e) => setField_condition(e.target.value)}
                    />
                    <div class={styles.radioLabel}>Used Car</div>
                  </label>
                  <label>
                    <input
                      type={"radio"}
                      name={"Condition"}
                      value={"New Car"}
                      onChange={(e) => setField_condition(e.target.value)}
                    />
                    <div class={styles.radioLabel}>New Car</div>
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
                          name={"field_car_images"}
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
                  name={"field_car_images"}
                  value={field_car_images}
                  onChange={(e)=> setField_car_images(e.target.value)}
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

export default CreateCar;
