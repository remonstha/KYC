//values are not properly storing
import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Alert,
  Button,
} from "reactstrap";
import Select from "react-select";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setKycSelectionMinor } from "../../slices/selection.slice";
import UserDetailsCard from "./UserDetailsCard";
import { updateAddressDetailsMinor } from "../../slices/KycMinor.slice";
import { fetchCountryList, fetchDistrictList, fetchMunicipalityList, fetchStateList } from "../../../slices/CentralizedKYC/Dropdowns/thunk";


const validationSchema = Yup.object().shape({
  permCountry: Yup.string().required("Country is required"),
  permState: Yup.string().required("State is required"),
  permDistrict: Yup.string().required("District is required"),
  permMunicipality: Yup.string().required("Municipality is required"),
  permWardNo: Yup.number()
    .required("Ward No is required")
    .positive("Ward No must be a positive number"),
  permToleStreet: Yup.string().required("Tole/Street is required"),
  permHouseNo: Yup.number()
    .required("House No is required")
    .positive("House No must be a positive number"),
  // Add validations for other permanent address fields

  tempCountry: Yup.string().required("Country is required"),
  tempState: Yup.string().required("State is required"),
  tempDistrict: Yup.string().required("District is required"),
  tempMunicipality: Yup.string().required("Municipality is required"),
  tempWardNo: Yup.number()
    .required("Ward No is required")
    .positive("Ward No must be a positive number"),
  tempToleStreet: Yup.string().required("Tole/Street is required"),
  tempHouseNo: Yup.number()
    .required("House No is required")
    .positive("House No must be a positive number"),
  // Add validations for other temporary address fields

  officeCountry: Yup.string().required("Country is required"),
  officeState: Yup.string().required("State is required"),
  officeDistrict: Yup.string().required("District is required"),
  officeMunicipality: Yup.string().required("Municipality is required"),
  officeWardNo: Yup.number()
    .required("Ward No is required")
    .positive("Ward No must be a positive number"),
  officeToleStreet: Yup.string().required("Tole/Street is required"),
  officeHouseNo: Yup.number()
    .required("House No is required")
    .positive("House No must be a positive number"),
  webAddress: Yup.string().required("this is required"), // Add specific validation for web address if needed
  officeEmail: Yup.string()
    .email("Invalid email")
    .required("email is required field"), // Validate email format for office email
  // Add validations for other office address fields
});

const AddressDetailsMinor = () => {
  const dispatch = useDispatch();
  const initialValues = useSelector((state) => state.KycMinor.addressDetails);

    //Getting DropDown Data
    const CountryList = useSelector((state) => state.Dropdown?.CountryList)
    const DistrictList = useSelector((state) => state.Dropdown?.DistrictList)
    const StateList = useSelector((state) => state.Dropdown?.StateList)
    const MunicipalityList = useSelector((state) => state.Dropdown?.MunicipalityList)
  
    console.log("Country List", CountryList);
    console.log("District List", DistrictList);
    console.log("StateList", StateList);
    console.log("MunicipalityList", MunicipalityList);
  
  
    useEffect(() => {
      dispatch(fetchCountryList());
      dispatch(fetchDistrictList());
      dispatch(fetchStateList());
      dispatch(fetchMunicipalityList());
  
  
    }, []);


  const formik = useFormik({
    initialValues,
    // validationSchema,
    onSubmit: (values) => {
      dispatch(updateAddressDetailsMinor(values));
      dispatch(setKycSelectionMinor("ContactMinor")) 
      console.log("Form submitted with values:", values);
    },
  });

  const [sameAsPermanent, setSameAsPermanent] = useState(false);

  const togglePermanentAddress = () => {
    setSameAsPermanent(!sameAsPermanent);
    if (sameAsPermanent === false) {
      // If toggled on, set tempCountry to permCountry
      formik.setFieldValue("tempCountry", formik.values.permCountry);
      formik.setFieldValue("tempState", formik.values.permState);
      formik.setFieldValue("tempDistrict", formik.values.permDistrict);
      formik.setFieldValue("tempMunicipality", formik.values.permMunicipality);
      formik.setFieldValue("tempWardNo", formik.values.permWardNo);
      formik.setFieldValue("tempToleStreet", formik.values.permToleStreet);
      formik.setFieldValue("tempHouseNo", formik.values.permHouseNo);
    }
  };

  const countries = CountryList?.map((item) => ({
    value: item.add01title,
    label: item.add01title,
  }));

  const states = StateList?.map((item) => ({
    value: item.add02title,
    label: item.add02title,

  }));
  const districts =  DistrictList?.map((item) => ({
    value: item.add03title,
    label: item.add03title,

  }));

  const municipalities =  MunicipalityList?.map((item) => ({
    value: item.add04title,
    label: item.add04title,

  }));

  const [selectTouched, setSelectTouched] = useState({
    permCountry: false,
    permState: false,
    permDistrict: false,
    permMunicipality: false,

    tempCountry: false,
    tempState: false,
    tempDistrict: false,
    tempMunicipality: false,

    officeCountry: false,
    officeState: false,
    officeDistrict: false,
    officeMunicipality: false,
  });

  const handleSelect = (fieldName, value) => {
    formik.setFieldValue(fieldName, value.value);
    setSelectTouched((prev) => ({
      ...prev,
      [fieldName]: true,
    }));
  };

  return (
    <>
      <UserDetailsCard />
      <Card className="p-0">
        <CardHeader className="px-4">
          <div className="">
            <h5 className="m-0">Address Details</h5>
          </div>
        </CardHeader>
        <CardBody className="px-4">
          <Form onSubmit={formik.handleSubmit} className="row gy-4 gx-5 ">
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
                value={countries?.find(
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
                  value={states?.find(
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
                  value={districts?.find(
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
                  value={municipalities?.find(
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
                      ? countries?.find(
                          (option) => option.value === formik.values.permCountry
                        )
                      : countries?.find(
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
                      ? states?.find(
                          (option) => option.value === formik.values.permState
                        )
                      : states?.find(
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
                      ? districts?.find(
                          (option) =>
                            option.value === formik.values.permDistrict
                        )
                      : districts?.find(
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
                      ? municipalities?.find(
                          (option) =>
                            option.value === formik.values.permMunicipality
                        )
                      : municipalities?.find(
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

            {/*---------------------------------- Office Address section -------------------–––---------*/}

            <Col lg={12} className="pt-5">
              <p className="py-3 fs-16">
                <b className="fw-semibold">Office Address,</b> if any
              </p>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label htmlFor="officeCountry">
                  Country<span className="text-danger">*</span>
                </Label>
                <Select
                  id="officeCountry"
                  name="officeCountry"
                  options={countries}
                  value={countries?.find(
                    (option) => option.value === formik.values.officeCountry
                  )}
                  onChange={(value) => {
                    handleSelect("officeCountry", value);
                  }}
                  onBlur={() => {
                    formik.setFieldTouched("officeCountry", true);
                  }}
                />
                {formik.touched.officeCountry &&
                  selectTouched.officeCountry === false && (
                    <p className="text-danger">{formik.errors.officeCountry}</p>
                  )}
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label htmlFor="officeState">
                  State<span className="text-danger">*</span>
                </Label>
                <Select
                  id="officeState"
                  name="officeState"
                  options={states}
                  value={states?.find(
                    (option) => option.value === formik.values.officeState
                  )}
                  onChange={(value) => {
                    handleSelect("officeState", value);
                  }}
                  onBlur={() => {
                    formik.setFieldTouched("officeState", true);
                  }}
                />
                {formik.touched.officeState &&
                  selectTouched.officeState === false && (
                    <p className="text-danger">{formik.errors.officeState}</p>
                  )}
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label htmlFor="officeDistrict">
                  District<span className="text-danger">*</span>
                </Label>
                <Select
                  id="officeDistrict"
                  name="officeDistrict"
                  options={districts}
                  value={districts?.find(
                    (option) => option.value === formik.values.officeDistrict
                  )}
                  onChange={(value) => {
                    handleSelect("officeDistrict", value);
                  }}
                  onBlur={() => {
                    formik.setFieldTouched("officeDistrict", true);
                  }}
                />
                {formik.touched.officeDistrict &&
                  selectTouched.officeDistrict === false && (
                    <p className="text-danger">
                      {formik.errors.officeDistrict}
                    </p>
                  )}
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label htmlFor="officeMunicipality">
                  Municipality<span className="text-danger">*</span>
                </Label>
                <Select
                  id="officeMunicipality"
                  name="officeMunicipality"
                  options={municipalities}
                  value={municipalities?.find(
                    (option) =>
                      option.value === formik.values.officeMunicipality
                  )}
                  onChange={(value) => {
                    handleSelect("officeMunicipality", value);
                  }}
                  onBlur={() => {
                    formik.setFieldTouched("officeMunicipality", true);
                  }}
                />
                {formik.touched.officeMunicipality &&
                  selectTouched.officeMunicipality === false && (
                    <p className="text-danger">
                      {formik.errors.officeMunicipality}
                    </p>
                  )}
              </FormGroup>
            </Col>

            <Col md={4}>
              <FormGroup>
                <Label htmlFor="officeWardNo">
                  Ward No<span className="text-danger">*</span>
                </Label>
                <Input
                  type="number"
                  id="officeWardNo"
                  name="officeWardNo"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.officeWardNo}
                />
                {formik.touched.officeWardNo && (
                  <p className="text-danger">{formik.errors.officeWardNo}</p>
                )}
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label htmlFor="officeToleStreet">Tole/Street</Label>
                <Input
                  type="text"
                  id="officeToleStreet"
                  name="officeToleStreet"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.officeToleStreet}
                />
                {formik.touched.officeToleStreet && (
                  <p className="text-danger">
                    {formik.errors.officeToleStreet}
                  </p>
                )}
              </FormGroup>
            </Col>

            <Col md={4}>
              <FormGroup>
                <Label className="officeHouseNo">House No</Label>
                <Input
                  type="number"
                  id="officeHouseNo"
                  name="officeHouseNo"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.officeHouseNo}
                />
                {formik.touched.officeHouseNo && (
                  <p className="text-danger">{formik.errors.officeHouseNo}</p>
                )}
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label htmlFor="webAddress">Web Address</Label>
                <Input
                  type="text"
                  id="webAddress"
                  name="webAddress"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.webAddress}
                />
                {formik.touched.webAddress && (
                  <p className="text-danger">{formik.errors.webAddress}</p>
                )}
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label htmlFor="officeEmail">Office Email</Label>
                <Input
                  type="text"
                  id="officeEmail"
                  name="officeEmail"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.officeEmail}
                />
                {formik.touched.officeEmail && (
                  <p className="text-danger">{formik.errors.officeEmail}</p>
                )}
              </FormGroup>
            </Col>

            {/*---------------------------------- Form Action section -------------------–––---------*/}
            <div className="d-flex justify-content-between mt-4">
              <Button
                color="light"
                onClick={() =>
                  dispatch(setKycSelectionMinor("FamilyDetailsMinor"))
                }
              >
                Back
              </Button>
              <Button
                color="primary"
                type="submit"
                // onClick={() => dispatch(setKycSelectionMinor("ContactMinor"))}
              >
                Next
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default AddressDetailsMinor;
