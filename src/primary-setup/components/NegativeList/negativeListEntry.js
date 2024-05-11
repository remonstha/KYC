import { useFormik, Field } from "formik";
import React, { useState, useEffect } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Form,
  Input,
  CardHeader,
  CardBody,
  FormGroup,
  Label,
  Button,
  Alert,

} from "reactstrap";
import Select from "react-select";
import DragAndDropIcon from "../../assets/img/dragAndDropIcon.png";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { NegativeSchema } from "../../validationSchema";
import { useDispatch, useSelector } from "react-redux";
import { updateNeglist } from "../../slices/KycNegList.slice";

export default function NegativeList() {
  const dispatch = useDispatch();
  const initialValues = useSelector((state) => state.KycNegList.negListInfo);
  const reduxImage = useSelector((state) => state.KycNegList.negListInfo.dragAndDropKyc);
  const [dragAndDropKyc, setDragAndDropKyc] = useState(reduxImage || []);
  const [dragAndDropKycUrl, setDragAndDropKycUrl] = useState(null);
 
  

  const formik = useFormik({
    initialValues,
    // validationSchema: NegativeSchema,
    onSubmit: (values) => {
      formik.setFieldValue("dragAndDropKyc", dragAndDropKyc);
      dispatch(updateNeglist(values));
      console.log("negative values", values);
    },

  });
  useEffect(() => {
    // Update the initial values when dragAndDropKyc changes
    formik.setValues({
      ...formik.values,
      dragAndDropKyc: dragAndDropKyc,
    });
  }, [dragAndDropKyc]);

  // ... (rest of the code)




  const [sameAsPermanent, setSameAsPermanent] = useState(false);

  const togglePermanentAddress = () => {
    setSameAsPermanent(!sameAsPermanent);
    if (sameAsPermanent === false) {
      //   If toggled on, set tempCountry to permCountry
      formik.setFieldValue("tempCountry", formik.values.permCountry);
      formik.setFieldValue("tempState", formik.values.permState);
      formik.setFieldValue("tempDistrict", formik.values.permDistrict);
      formik.setFieldValue("tempMunicipality", formik.values.permMunicipality);
      formik.setFieldValue("tempWardNo", formik.values.permWardNo);
      formik.setFieldValue("tempToleStreet", formik.values.permToleStreet);
      formik.setFieldValue("tempHouseNo", formik.values.permHouseNo);
    }
  };
  console.log("toggle", sameAsPermanent);

  const countries = [
    { value: "nepal", label: "Nepal" },
    { value: "india", label: "India" },
    { value: "china", label: "China" },
  ];

  const states = [
    { value: "province-1", label: "Province 1" },
    { value: "province-2", label: "Province 2" },
    { value: "province-3", label: "Province 3" },
  ];

  const districts = [
    { value: "kathmandu", label: "Kathmandu" },
    { value: "bhaktapur", label: "Bhaktapur" },
    { value: "lalitpur", label: "Lalitpur" },
  ];

  const municipalities = [
    {
      value: "kathmandu-metropolitan-city",
      label: "Kathmandu Metropolitan City",
    },
    {
      value: "lalitpur-metropolitan-city",
      label: "Lalitpur Metropolitan City",
    },
    {
      value: "bhaktapur-metropolitan-city",
      label: "Bhaktapur Metropolitan City",
    },
  ];

  const [selectTouched, setSelectTouched] = useState({
    permCountry: false,
    permState: false,
    permDistrict: false,
    permMunicipality: false,

    tempCountry: false,
    tempState: false,
    tempDistrict: false,
    tempMunicipality: false,

  });

  const handleSelect = (fieldName, value) => {
    formik.setFieldValue(fieldName, value.value);
    setSelectTouched((prev) => ({
      ...prev,
      [fieldName]: true,
    }));
  };
  // const handleDragAndDropKycChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setDragAndDropKyc(file);
  //     setDragAndDropKycUrl(URL.createObjectURL(file)); // Create a temporary URL for the uploaded file
  //   }
  // };
  const handleDragAndDropKycChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      setDragAndDropKyc((prevFiles) => {
        return [...prevFiles, ...Array.from(files)];
      });
      setDragAndDropKycUrl(URL.createObjectURL(files[0]));

    }
  };

  const handleFileDelete = (index) => {
    const updatedFiles = [...dragAndDropKyc];
    updatedFiles.splice(index, 1);
    setDragAndDropKyc(updatedFiles);
  };


  useEffect(() => {
  }, [dragAndDropKyc]);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragAndDropKycDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      setDragAndDropKyc((prevFiles) => {
        return [...prevFiles, ...Array.from(files)];
      });
      setDragAndDropKycUrl(URL.createObjectURL(files[0]));
    }
  };



  const imageBoxStyle = {
    border: "2px dashed #ccc",
    // padding: "20px",
    textAlign: "center",
    cursor: "pointer",
    width: "100%",
    minWidth: "150px",
    height: "20vh",
    overflow: "hidden",
    position: "relative",
  };

  const roundToOneDecimal = (size) => Math.round(size * 10) / 10;

  const issuedPlaceNegative = [
    {
      value: "Kathmandu",
      label: "Kathmandu",
    },
    {
      value: "Pokhara",
      label: "Pokhara",
    },
    {
      value: "Chitwan",
      label: "Chitwan",
    },
    {
      value: "Palpa",
      label: "Palpa"
    }
  ];


  return (

    <React.Fragment >
      <Card className="mt-1 p-4">
        <CardHeader className=" p-2">
          <h5 className="mt-1">Negative List</h5>
        </CardHeader>

        <CardBody className="p-2">
          <Form >
            <FormGroup>
              <Row>
                <Col lg={4}>
                  <Label className="mt-4">
                    First Name<span className="text-danger">*</span>
                  </Label>
                  <Input
                    id="firstNameNegative"
                    name="firstNameNegative"
                    type="text"
                    placeholder="First Name"
                    value={formik.values.firstNameNegative}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {formik.errors.firstNameNegative && formik.touched.firstNameNegative && (
                    <p className="text-danger">{formik.errors.firstNameNegative}</p>
                  )}
                </Col>

                <Col lg={4}>
                  <Label className="mt-4"> Middle Name </Label>

                  <Input
                    id="middleNameNegative"
                    name="middleNameNegative"
                    type="text"
                    placeholder="Middle Name"
                    value={formik.values.middleNameNegative}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {formik.errors.middleNameNegative && formik.touched.middleNameNegative && (
                    <p className="text-danger">{formik.errors.middleNameNegative}</p>
                  )}
                </Col>
                <Col lg={4}>
                  <Label className="mt-4">
                    Last Name<span className="text-danger">*</span>{" "}
                  </Label>

                  <Input
                    id="lastNameNegative"
                    name="lastNameNegative"
                    type="text"
                    placeholder="Last Name"
                    value={formik.values.lastNameNegative}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {formik.errors.lastNameNegative && formik.touched.lastNameNegative && (
                    <p className="text-danger">{formik.errors.lastNameNegative}</p>
                  )}
                </Col>

                <Col lg={4}>
                  <Label className="mt-4">
                    Nationality <span className="text-danger">*</span>{" "}
                  </Label>
                  <Input
                    id="nationalityNegative"
                    name="nationalityNegative"
                    type="text"
                    placeholder="Nationality"
                    value={formik.values.nationalityNegative}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {formik.errors.nationalityNegative && formik.touched.nationalityNegative && (
                    <p className="text-danger">{formik.errors.nationalityNegative}</p>
                  )}
                </Col>


                <Col lg={4}>
                  <Label className="mt-4">
                    Father's Name <span className="text-danger">*</span>{" "}
                  </Label>
                  <Input
                    id="fatherNameNegative"
                    name="fatherNameNegative"
                    type="text"
                    value={formik.values.fatherNameNegative}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {formik.errors.fatherNameNegative && formik.touched.fatherNameNegative && (
                    <p className="text-danger">{formik.errors.fatherNameNegative}</p>
                  )}
                </Col>

                <Col lg={4}>
                  <Label className="mt-4">
                    Mother's Name <span className="text-danger">*</span>{" "}
                  </Label>
                  <Input
                    id="motherNameNegative"
                    name="motherNameNegative"
                    type="text"
                    value={formik.values.motherNameNegative}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {formik.errors.motherNameNegative && formik.touched.motherNameNegative && (
                    <p className="text-danger">{formik.errors.motherNameNegative}</p>
                  )}
                </Col>

                <Col lg={4}>
                  <Label className="mt-4">
                    Grand Father's Name <span className="text-danger">*</span>{" "}
                  </Label>
                  <Input
                    id="grandFatherNameNegative"
                    name="grandFatherNameNegative"
                    type="text"
                    value={formik.values.grandFatherNameNegative}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {formik.errors.grandFatherNameNegative &&
                    formik.touched.grandFatherNameNegative && (
                      <p className="text-danger">
                        {formik.errors.grandFatherNameNegative}
                      </p>
                    )}
                </Col>

                <Col lg={4}>
                  <Label className="mt-4">
                    Grand Mother's Name <span className="text-danger">*</span>{" "}
                  </Label>
                  <Input
                    id="grandMotherNameNegative"
                    name="grandMotherNameNegative"
                    type="text"
                    value={formik.values.grandMotherNameNegative}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {formik.errors.grandMotherNameNegative &&
                    formik.touched.grandMotherNameNegative && (
                      <p className="text-danger">
                        {formik.errors.grandMotherNameNegative}
                      </p>
                    )}
                </Col>

                <Col lg={4}>
                  <Label className="mt-4">
                    Husband/Wife's Name <span className="text-danger">*</span>{" "}
                  </Label>
                  <Input
                    id="wifeNameNegative"
                    name="wifeNameNegative"
                    type="text"
                    value={formik.values.wifeNameNegative}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {formik.errors.wifeNameNegative && formik.touched.wifeNameNegative && (
                    <p className="text-danger">{formik.errors.wifeNameNegative}</p>
                  )}
                </Col>

                <Col md={4} className="mt-4">
                  <Label>Mobile No</Label>
                  <Input
                    type="text"
                    name="mobNumber"
                    value={formik.values.mobNumber}
                    onChange={formik.handleChange}
                  />

                  {formik.touched.mobNumber && formik.errors.mobNumber && (
                    <div className="text-danger">{formik.errors.mobNumber}</div>
                  )}
                </Col>


                <Col md={4} className="mt-4">
                  <Label>ID Number</Label>
                  <Input
                    type="text"
                    name="idNumberNegative"
                    value={formik.values.idNumberNegative}
                    onChange={formik.handleChange}
                  />

                  {formik.touched.idNumberNegative && formik.errors.idNumberNegative && (
                    <div className="text-danger">{formik.errors.idNumberNegative}</div>
                  )}
                </Col>

                <Col md={4} className="mt-4">
                  <Label>Issued Place</Label>
                  <Select
                    id="issuedPlaceNegative"
                    name="issuedPlaceNegative"
                    placeholder={"Issued Place"}
                    options={issuedPlaceNegative}
                    value={issuedPlaceNegative.find(
                      (option) => option.value === formik.values.issuedPlaceNegative
                    )}
                    onChange={(value) => {
                      handleSelect("issuedPlaceNegative", value);
                    }}
                    onBlur={() => {
                      formik.setFieldTouched("issuedPlaceNegative", true);
                    }}
                  />
                  {formik.touched.issuedPlaceNegative &&
                    selectTouched.issuedPlaceNegative === false && (
                      <p className="text-danger">{formik.errors.issuedPlaceNegative}</p>
                    )}

                </Col>

                <Col md={4} className="mt-4">
                  <Label>Issued By</Label>
                  <Input
                    type="text"
                    name="issuedByNegative"
                    value={formik.values.issuedByNegative}
                    onChange={formik.handleChange}
                  />

                  {formik.touched.issuedByNegative && formik.errors.issuedByNegative && (
                    <div className="text-danger">{formik.errors.issuedByNegative}</div>
                  )}
                </Col>

                <Col lg={4} className="mt-4">
                  <Label>Issued Date</Label>
                  <Input
                    type="date"
                    className=""
                    name="issuedDateNegative"
                    value={formik.values.issuedDateNegative}
                    // onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />

                  {formik.touched.issuedDateNegative && formik.errors.issuedDateNegative && (
                    <div className="text-danger">
                      {formik.errors.issuedDateNegative}
                    </div>
                  )}
                </Col>

                <Col lg={4} className="mt-4 mb-4">
                  <Label>Expiry Date</Label>
                  <Input
                    type="date"
                    className=""
                    name="expiryDateNegative"
                    value={formik.values.expiryDateNegative}
                    // onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />

                  {formik.touched.expiryDateNegative && formik.errors.expiryDateNegative && (
                    <div className="text-danger">
                      {formik.errors.expiryDateNegative}
                    </div>
                  )}
                </Col>
                {/*---------------------------------- Permanent Address section -------------------–––---------*/}

                <Col lg={12} className="permanentAddress-label">
                  <p className="py-3 fs-16 fw-semibold ">Permanent Address</p>
                </Col>
                <Col md={4}>
                  <Label htmlFor="permCountry">
                    Country<span className="text-danger">*</span>
                  </Label>
                  <Select
                    id="permCountry"
                    name="permCountry"
                    options={countries}
                    value={countries.find(
                      (option) => option.value === formik.values.permCountry
                    )}
                    onChange={(value) => {
                      handleSelect("permCountry", value);
                    }}
                    onBlur={() => {
                      formik.setFieldTouched("permCountry", true);
                    }}
                  />
                  {formik.touched.permCountry &&
                    selectTouched.permCountry === false && (
                      <p className="text-danger">{formik.errors.permCountry}</p>
                    )}
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label htmlFor="permState">
                      State<span className="text-danger">*</span>
                    </Label>
                    <Select
                      id="permState"
                      name="permState"
                      options={states}
                      value={states.find(
                        (option) => option.value === formik.values.permState
                      )}
                      onChange={(value) => {
                        handleSelect("permState", value);
                      }}
                      onBlur={() => {
                        formik.setFieldTouched("permState", true);
                      }}
                    />
                    {formik.touched.permState &&
                      selectTouched.permState === false && (
                        <p className="text-danger">{formik.errors.permState}</p>
                      )}
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label htmlFor="permDistrict">
                      District<span className="text-danger">*</span>
                    </Label>
                    <Select
                      id="permDistrict"
                      name="permDistrict"
                      options={districts}
                      value={districts.find(
                        (option) => option.value === formik.values.permDistrict
                      )}
                      onChange={(value) => {
                        handleSelect("permDistrict", value);
                      }}
                      onBlur={() => {
                        formik.setFieldTouched("permDistrict", true);
                      }}
                    />
                    {formik.touched.permDistrict &&
                      selectTouched.permDistrict === false && (
                        <p className="text-danger">{formik.errors.permDistrict}</p>
                      )}
                  </FormGroup>
                </Col>

                <Col md={4}>
                  <FormGroup>
                    <Label htmlFor="permMunicipality">
                      Municipality<span className="text-danger">*</span>
                    </Label>
                    <Select
                      id="permMunicipality"
                      name="permMunicipality"
                      options={municipalities}
                      value={municipalities.find(
                        (option) => option.value === formik.values.permMunicipality
                      )}
                      onChange={(value) => {
                        handleSelect("permMunicipality", value);
                      }}
                      onBlur={() => {
                        formik.setFieldTouched("permMunicipality", true);
                      }}
                    />
                    {formik.touched.permMunicipality &&
                      selectTouched.permMunicipality === false && (
                        <p className="text-danger">
                          {formik.errors.permMunicipality}
                        </p>
                      )}
                  </FormGroup>
                </Col>

                <Col md={4}>
                  <FormGroup>
                    <Label htmlFor="permWardNo">
                      Ward No<span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="number"
                      id="permWardNo"
                      name="permWardNo"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.permWardNo}
                    />
                    {formik.touched.permWardNo && (
                      <p className="text-danger">{formik.errors.permWardNo}</p>
                    )}
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label htmlFor="permToleStreet">Tole/Street</Label>
                    <Input
                      type="text"
                      id="permToleStreet"
                      name="permToleStreet"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.permToleStreet}
                    />
                    {formik.touched.permToleStreet && (
                      <p className="text-danger">{formik.errors.permToleStreet}</p>
                    )}
                  </FormGroup>
                </Col>

                <Col md={4}>
                  <FormGroup>
                    <Label htmlFor="permHouseNo">House No</Label>
                    <Input
                      type="number"
                      id="permHouseNo"
                      name="permHouseNo"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.permHouseNo}
                    />
                    {formik.touched.permHouseNo && (
                      <p className="text-danger">{formik.errors.permHouseNo}</p>
                    )}
                  </FormGroup>
                </Col>

                {/*---------------------------------- Temporary Address section -------------------–––---------*/}

                <Col lg={12} className="pt-5">
                  <div className="d-flex  py-3 fs-16 fw-semibold">
                    Temporary/Current Address
                    <div className="ms-5">
                      <small className="text-muted d-flex flex-row">
                        Same as permanent?
                        <div className="form-check form-switch ms-2">
                          <input
                            className="form-check-input border-0"
                            style={{
                              backgroundColor: sameAsPermanent ? "green" : "red",
                              backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba(255,255,255,1.0)'/></svg>")`,
                            }}
                            type="checkbox"
                            role="switch"
                            id="sameAsPermanent"
                            name="sameAsPermanent"
                            onClick={togglePermanentAddress}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="sameAsPermanent"
                          >
                            {sameAsPermanent ? "Yes" : "No"}
                          </label>
                        </div>
                      </small>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label htmlFor="tempCountry">
                      Country<span className="text-danger">*</span>
                    </Label>
                    <Select
                      id="tempCountry"
                      name="tempCountry"
                      options={countries}
                      value={
                        sameAsPermanent
                          ? countries.find(
                            (option) => option.value === formik.values.permCountry
                          )
                          : countries.find(
                            (option) => option.value === formik.values.tempCountry
                          )
                      }
                      placeholder={
                        sameAsPermanent
                          ? formik.values.permCountry.label
                          : "Select a country"
                      }
                      onChange={(value) => {
                        handleSelect("tempCountry", value);
                      }}
                      onBlur={() => {
                        formik.setFieldTouched("tempCountry", true);
                      }}
                      isDisabled={sameAsPermanent}
                    />

                    {formik.touched.tempCountry &&
                      selectTouched.tempCountry === false && (
                        <p className="text-danger">{formik.errors.tempCountry}</p>
                      )}
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label htmlFor="tempState">
                      State<span className="text-danger">*</span>
                    </Label>
                    <Select
                      id="tempState"
                      name="tempState"
                      options={states}
                      value={
                        sameAsPermanent
                          ? states.find(
                            (option) => option.value === formik.values.permState
                          )
                          : states.find(
                            (option) => option.value === formik.values.tempState
                          )
                      }
                      placeholder={
                        sameAsPermanent
                          ? formik.values.permState.label
                          : "Select a state"
                      }
                      onChange={(value) => {
                        handleSelect("tempState", value);
                      }}
                      onBlur={() => {
                        formik.setFieldTouched("tempState", true);
                      }}
                      isDisabled={sameAsPermanent}
                    />
                    {formik.touched.tempState &&
                      selectTouched.tempState === false && (
                        <p className="text-danger">{formik.errors.tempState}</p>
                      )}
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label htmlFor="tempDistrict">
                      District<span className="text-danger">*</span>
                    </Label>
                    <Select
                      id="tempDistrict"
                      name="tempDistrict"
                      options={districts}
                      value={
                        sameAsPermanent
                          ? districts.find(
                            (option) =>
                              option.value === formik.values.permDistrict
                          )
                          : districts.find(
                            (option) =>
                              option.value === formik.values.tempDistrict
                          )
                      }
                      placeholder={
                        sameAsPermanent
                          ? formik.values.permDistrict.label
                          : "Select a district"
                      }
                      isDisabled={sameAsPermanent}
                      onChange={(value) => {
                        handleSelect("tempDistrict", value);
                      }}
                      onBlur={() => {
                        formik.setFieldTouched("tempDistrict", true);
                      }}
                    />
                    {formik.touched.tempDistrict &&
                      selectTouched.tempDistrict === false && (
                        <p className="text-danger">{formik.errors.tempDistrict}</p>
                      )}
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label htmlFor="tempMunicipality">
                      Municipality<span className="text-danger">*</span>
                    </Label>
                    <Select
                      id="tempMunicipality"
                      name="tempMunicipality"
                      options={municipalities}
                      value={
                        sameAsPermanent
                          ? municipalities.find(
                            (option) =>
                              option.value === formik.values.permMunicipality
                          )
                          : municipalities.find(
                            (option) =>
                              option.value === formik.values.tempMunicipality
                          )
                      }
                      placeholder={
                        sameAsPermanent
                          ? formik.values.permMunicipality.label
                          : "Select a municipality"
                      }
                      isDisabled={sameAsPermanent}
                      onChange={(value) => {
                        handleSelect("tempMunicipality", value);
                      }}
                      onBlur={() => {
                        formik.setFieldTouched("tempMunicipality", true);
                      }}
                    />
                    {formik.touched.tempMunicipality &&
                      selectTouched.tempMunicipality === false && (
                        <p className="text-danger">
                          {formik.errors.tempMunicipality}
                        </p>
                      )}
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label htmlFor="tempWardNo">
                      Ward No<span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="number"
                      id="tempWardNo"
                      name="tempWardNo"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.tempWardNo}
                      placeholder={
                        sameAsPermanent ? formik.values.permWardNo : "Select a ward"
                      }
                      disabled={sameAsPermanent}
                    />
                    {formik.touched.tempWardNo && (
                      <p className="text-danger">{formik.errors.tempWardNo}</p>
                    )}
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label htmlFor="tempToleStreet">Tole/Street</Label>
                    <Input
                      type="text"
                      id="tempToleStreet"
                      name="tempToleStreet"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.tempToleStreet}
                      placeholder={
                        sameAsPermanent
                          ? formik.values.permToleStreet
                          : "Select a tole"
                      }
                      disabled={sameAsPermanent}
                    />
                    {formik.touched.tempToleStreet && (
                      <p className="text-danger">{formik.errors.tempToleStreet}</p>
                    )}
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label htmlFor="tempHouseNo">House No</Label>
                    <Input
                      type="number"
                      id="tempHouseNo"
                      name="tempHouseNo"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.tempHouseNo}
                      placeholder={
                        sameAsPermanent
                          ? formik.values.permHouseNo
                          : "Select a house no."
                      }
                      disabled={sameAsPermanent}
                    />
                    {formik.touched.tempHouseNo && (
                      <p className="text-danger">{formik.errors.tempHouseNo}</p>
                    )}
                  </FormGroup>
                </Col>
                {/* </Row> */}
                {/*---------------------------------- Image Upload section -------------------–––---------*/}


                <Row className="mt-4">
                  <h6 className="py-3 fs-16 fw-semibold">Upload Documents</h6>
                  <Col className="ms-5 mt-3">
                    <FormGroup
                      onDragOver={handleDragOver}
                      onDrop={handleDragAndDropKycDrop}
                      style={imageBoxStyle}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <input
                        type="file"
                        name="dragAndDropKyc"
                        id="dragAndDropKycFiles"
                        accept="image/*"
                        onChange={handleDragAndDropKycChange}
                        hidden
                      />
                      <img
                        src={DragAndDropIcon}
                        alt="uploaded"
                        style={{
                          opacity: "0.7",
                          objectFit: "cover",
                          width: "40%",
                          padding: "50px"
                        }}
                      />

                      <Label
                        htmlFor="dragAndDropKycFiles"
                        className="text-light"
                        style={{
                          position: "absolute",
                          fontSize: "3.8em",
                          cursor: "pointer",
                          letterSpacing: ".2em",
                          opacity: "0",
                        }}
                      >
                        Change
                      </Label>
                    </FormGroup>

                    {dragAndDropKyc.length > 0 ? (
                      <div>
                        {dragAndDropKyc.map((file, index) => (
                          <CardBody key={index} style={{ marginBottom: '10px', marginRight: '111px', padding: '10px', borderRadius: '5px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                              <span className="serial-number">{index + 1}.  </span>
                              <img src={URL.createObjectURL(file)} alt="File" style={{ width: '30px', height: '30px', marginRight: '10px', marginLeft: '10px' }} />
                              <div>
                                <p style={{ marginBottom: '3px' }}>{file.name}</p>
                                <p className="text-info" style={{ marginBottom: '3px' }}>{roundToOneDecimal(file.size / 1024)} KB</p>
                              </div>
                            </div>
                            <AiOutlineCloseCircle
                              style={{ cursor: 'pointer', fontSize: '1.5em', color: '#e74c3c' }}
                              onClick={() => handleFileDelete(index)} // Implement your file deletion logic
                            />
                          </CardBody>
                        ))}
                      </div>
                    ) : (
                      <CardBody>No files selected</CardBody>
                    )}

                  </Col>


                </Row>

              </Row>
              <div className="d-flex justify-content-end mt-4">

              

                <Button
                  color="success"
                  type="submit"
                  onClick={formik.handleSubmit}
                >
                  submit
                </Button>
              </div>


            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </React.Fragment>
  )
};
