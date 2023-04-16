import { getUserAction } from "@/store/Services/Actions/getUserAction";
import Http from "@/store/Services/Http";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Checkbox,
  Container,
  Dropdown,
  Form,
  Grid,
  Input,
  Radio,
  Select,
  TextArea,
} from "semantic-ui-react";

const ProductCreate = () => {
  const [car_make, setcar_Make] = useState("");
  const [fieldCarMake, setFieldCarMake] = useState("");
  const [fieldcarModel, setFieldcarModel] = useState("");
  const [fieldcarYear, setFieldcarYear] = useState("");

  const [car_model, setCar_model] = useState("");
  const [carYear, setCarYear] = useState("");

  const [city, setCity] = useState("");
  const RadioExampleToggle = () => <Radio toggle />;
  const [userId, setuserId] = useState("");
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
  console.log("get_car_make_val", get_car_make_val);
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
  useEffect(() => {
    loadUserDispatch();
    CarMakeHandle();
    cityHandle();
    userid();
  }, []);
  // car make end ///

  // form values set
  // const [fuelCheckbox, setFuelCheckbox  ]=useState("");

  // setFuelCheckbox(fuelCheckbox);
  const getUser = useSelector((state) => state.getUserReducer.data);
  const getUserDispatch = useDispatch();
  const loadUserDispatch = () => {
    getUserDispatch(getUserAction());
  };
  const userid = () => {
    {
      getUser.user ? setuserId(getUser.user.id) : "";
    }
  };

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

    Http.post("/product/add", fileData)
      .then((res) => {
        console.log("data", res);
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
  const fuelHandleChnage = (i, e) => {
    const activeData = document.getElementById(i).checked;
    if (activeData == true) {
      setField_car_fuel((oldData) => [e.target.value]);
    } else {
      setField_car_fuel(selected.filter((values) => values !== e.target.value));
    }
  };
  const featuresHandleChnage = (i, e) => {
    console.log("iiii", i);
    const activeData = document.getElementById(i).checked;
    if (activeData == true) {
      setField_features((oldData) => [e.target.value]);
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

  return (
    <>
      <section className={"section section-padding"}>
        <Container text>
          <Form className={"pb-20"}>
            <h1>Include Some Details</h1>
            {/* primary key */}
            <Form.Field
              control={Input}
              label="Title"
              name={"title"}
              placeholder="Title"
              value={field_title}
              onChange={(e) => setField_title(e.target.value)}
            />
            <Form.Field
              control={TextArea}
              label="Description"
              placeholder="Last name"
              name={"description"}
              value={field_description}
              onChange={(e) => setField_description(e.target.value)}
            />
            <Form.Field
              label="Make"
              control={Select}
              Dropdown
              placeholder="car_make"
              search
              selection
              value={get_car_make_val.value}
              options={get_car_make_val}
              onChange={(e) => SelectCarMakeHandle(e)}
            />
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
            <Form.Field
              label="Model"
              control={Select}
              Dropdown
              placeholder="Model"
              search
              selection
              value={get_car_model_val.value}
              options={get_car_model_val}
              onChange={(e) => SelectCarModelHandle(e)}
            />
            <Form.Field
              label="Year"
              control={Select}
              Dropdown
              placeholder="Year"
              search
              selection
              value={getCarYearVal.value}
              options={getCarYearVal}
              onChange={(e) => SelectHandlerYear(e)}
            />
            <Form.Field
              control={Input}
              label="Car Drive Kilometers"
              placeholder="Ex. 10000"
              name={"field_car_drive_km"}
              value={field_car_drive_km}
              onChange={(e) => setField_car_drive_km(e.target.value)}
            />

            {/* checkbox */}

            <label>Fuel</label>
            <Form.Group widths="equal">
              {fuelCheckbox.fuelCheckbox &&
              fuelCheckbox &&
              fuelCheckbox.fuelCheckbox.length ? (
                <>
                  {fuelCheckbox.fuelCheckbox.map((get_fuel, i) => {
                    return (
                      <>
                        <Form.Field
                          control={Checkbox}
                          label={get_fuel.text}
                          multiple={true}
                          name={"get_fuel.text"}
                          value={get_fuel.value}
                          id={get_fuel.key}
                          onChange={(e) => fuelHandleChnage(get_fuel.key, e)}
                        />
                      </>
                    );
                  })}
                </>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Field
              label="Registration City"
              control={Select}
              Dropdown
              placeholder="Select city"
              search
              selection
              value={get_city_val.value}
              options={get_city_val}
              onChange={SelectHandlerCity}
            />
            <h4>Car Documents</h4>
            <Form.Group widths={"equal"}>
              <label>
                <input
                  type="radio"
                  value={"Original"}
                  name="Field_car_documents"
                  onChange={(e) => setField_car_documents(e.target.value)}
                />{" "}
                Original
              </label>
              <label>
                <input
                  type="radio"
                  value={"Duplicate"}
                  name="Field_car_documents"
                  onChange={(e) => setField_car_documents(e.target.value)}
                />{" "}
                Duplicate
              </label>
            </Form.Group>
            <label>Assembly</label>
            <Form.Group>
              <Form.Field widths={"equal"}>
                <label>
                  <input
                    type={"radio"}
                    value={"Local"}
                    name={"assembly"}
                    onChange={(e) => setField_assembly(e.target.value)}
                  />
                  Local
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
                  Imported
                </label>
              </Form.Field>
            </Form.Group>
            <label>Transmission</label>
            <Form.Group>
              <label>
                <input
                  type={"radio"}
                  name={"Transmission"}
                  value={"Automatic"}
                  onChange={(e) => setField_transmission(e.target.value)}
                />
                Automatic
              </label>
              <label>
                <input
                  type={"radio"}
                  name={"Transmission"}
                  value={"Manual"}
                  onChange={(e) => setField_transmission(e.target.value)}
                />
                Manual
              </label>
            </Form.Group>
            <label>Features</label>
            <Form.Group>
              <Grid>
                <Grid.Row>
                  {featuresChecbox.featuresChecbox &&
                  featuresChecbox &&
                  featuresChecbox.featuresChecbox.length ? (
                    <>
                      {featuresChecbox.featuresChecbox.map(
                        (get_featuresChecbox, i) => {
                          return (
                            <Grid.Column width={4}>
                              <Form.Field
                                control={Checkbox}
                                label={get_featuresChecbox.text}
                                multiple={true}
                                name={"get_featuresChecbox.text"}
                                value={get_featuresChecbox.value}
                                id={get_featuresChecbox.key}
                                onChange={(e) =>
                                  featuresHandleChnage(
                                    get_featuresChecbox.key,
                                    e
                                  )
                                }
                              />
                            </Grid.Column>
                          );
                        }
                      )}
                    </>
                  ) : (
                    ""
                  )}
                </Grid.Row>
              </Grid>
            </Form.Group>

            <label>Condition</label>
            <Form.Group>
              <label>
                <input
                  // checked={true}
                  type={"radio"}
                  name={"Condition"}
                  value={"Used Car"}
                  onChange={(e) => setField_condition(e.target.value)}
                />{" "}
                Used Car
              </label>
              <label>
                <input
                  type={"radio"}
                  name={"Condition"}
                  value={"New Car"}
                  onChange={(e) => setField_condition(e.target.value)}
                />{" "}
                New Car
              </label>
            </Form.Group>
            <hr />
            <h3>Set Price of Your Product</h3>

            <Form.Field
              control={Input}
              label="Price"
              placeholder="Rs."
              name={"field_price"}
              value={field_price}
              onChange={(e) => setField_price(e.target.value)}
            />
            <hr />
            <h3>Upload Images</h3>
            {/* <Form.Field
                  control={Input}
                  label="car image"
                  placeholder="car image"
                  name={"field_car_images"}
                  value={field_car_images}
                  onChange={(e)=> setField_car_images(e.target.value)}
               /> */}
            <input
              type={"file"}
              name={"field_car_images"}
              onChange={ImageHandle}
            />

            <hr />
            <h3>Pickup Location</h3>
            <Form.Field
              control={Input}
              label="Address"
              placeholder="Ex. House no 123 sector street famouse place"
              name={"field_location"}
              value={field_location}
              onChange={(e) => setField_location(e.target.value)}
            />

            {/* <Form.Group widths="equal">
               </Form.Group> */}

            <div className="flexbox jc-space-between hgroup">
              <div>
                <h4>Your phone number</h4>
              </div>
              <div>
                <h4>034343434</h4>
              </div>
            </div>
            <div className="flexbox jc-space-between hgroup">
              <h4>Do you want show Phone number in ads</h4>
              <Radio toggle label="" />
            </div>
            <Form.Field
              control={Button}
              primary
              size={"large"}
              onClick={() => adsSubmithandle()}
            >
              Let's Go
            </Form.Field>
          </Form>
        </Container>
      </section>
    </>
  );
};

export default ProductCreate;
