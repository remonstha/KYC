import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
} from "reactstrap";
import { useFormik } from "formik";
import "nepali-datepicker-reactjs/dist/index.css";
// import { NepaliDate } from "nepali-datepicker-reactjs";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
import NepaliDate from "nepali-date-converter";
import Select from "react-select";

import { useDispatch, useSelector } from "react-redux";
import { setKycSelectionCorporate } from "../../slices/selection.slice";
import { updateBasicInformation } from "../../slices/kycCorporate.slice";
import {
  fetchAccountTypeList,
  fetchBranchList,
  fetchCountryList,
  fetchCurrencyList,
  fetchDistrictList,
  fetchNatureOfBusinessList,
  fetchSourceOFFundList,
  fetchStateList,
} from "../../../slices/CentralizedKYC/Dropdowns/thunk";

export default function BasicInfoCorporate() {
  const dispatch = useDispatch();
  const AccountTypeList = useSelector(
    (state) => state.Dropdown?.AccountTypeList
  );
  const CurrencyList = useSelector((state) => state.Dropdown?.CurrencyList);
  const BranchList = useSelector((state) => state.Dropdown?.BranchList);
  const NatureOfBusinessList = useSelector(
    (state) => state.Dropdown?.NatureOfBusiness
  );
  const CountryList = useSelector((state) => state.Dropdown?.CountryList);
  const DistrictList = useSelector((state) => state.Dropdown?.DistrictList);
  const StateList = useSelector((state) => state.Dropdown?.StateList);

  useEffect(() => {
    dispatch(fetchAccountTypeList());
    dispatch(fetchCurrencyList());
    dispatch(fetchBranchList());
    dispatch(fetchSourceOFFundList());
    dispatch(fetchNatureOfBusinessList());
    dispatch(fetchCountryList());
    dispatch(fetchDistrictList());
    dispatch(fetchStateList());
  }, []);

  // const initialValues = useSelector((state) => state);
  const initialValues = useSelector(
    (state) => state.KycCorporate.basicInformation
  );

  useEffect(() => {
    console.log("this is baiscInfoCorporate", initialValues);
  }, [initialValues]);

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log("these are formik values", values);
      dispatch(updateBasicInformation(values));
      dispatch(setKycSelectionCorporate("addressInformation"));
    },
  });

  const [selectTouched, setSelectTouched] = useState({
    accountType: false,
    branchName: false,
    currency: false,
    permCountry: false,
    permState: false,
    permDistrict: false,
    permMunicipality: false,
  });

  const handleSelect = (fieldName, value) => {
    formik.setFieldValue(fieldName, value.value);
    setSelectTouched((prev) => ({
      ...prev,
      [fieldName]: true,
    }));
  };

  //Dropdown datas
  const Branches = BranchList?.map((item) => ({
    value: item.bra01title,
    label: item.bra01title,
  }));

  const accountTypes = AccountTypeList?.map((item) => ({
    value: item.acc01title,
    label: item.acc01title,
  }));
  const currencies = CurrencyList?.map((item) => ({
    value: item.cur01title,
    label: item.cur01title,
  }));
  const businessNatures = NatureOfBusinessList?.map((item) => ({
    value: item.nature01title,
    label: item.nature01title,
  }));
  const countries = CountryList?.map((item) => ({
    value: item.add01title,
    label: item.add01title,
  }));

  const states = StateList?.map((item) => ({
    value: item.add02title,
    label: item.add02title,
  }));
  const districts = DistrictList?.map((item) => ({
    value: item.add03title,
    label: item.add03title,
  }));

  return (
    <Card className="p-0">
      <CardHeader className="px-4">
        <h5 className="m-0">Basic Information</h5>
      </CardHeader>

      <CardBody className="px-4">
        <Form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <Row className="gy-4 gx-5 py-3">
              <Col lg={4} className="">
                <Label>Date</Label>
                <Input
                  type="date"
                  className=""
                  name="date"
                  value={formik.values.date}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </Col>

              <Col md={4} className="accountType">
                <p>
                  Account Type<span className="text-danger">*</span>
                </p>

                <Select
                  id="accountType"
                  name="accountType"
                  placeholder={"Choose your account type"}
                  options={accountTypes}
                  value={accountTypes?.find(
                    (option) => option.value === formik.values.accountType
                  )}
                  onChange={(value) => {
                    handleSelect("accountType", value);
                  }}
                  onBlur={() => {
                    formik.setFieldTouched("accountType", true);
                  }}
                />
                {formik.touched.accountType &&
                  selectTouched.accountType === false && (
                    <p className="text-danger">{formik.errors.accountType}</p>
                  )}
              </Col>

              <Col md={4} className="currency">
                <p>
                  Currency<span className="text-danger">*</span>
                </p>
                <Select
                  id="currency"
                  name="currency"
                  placeholder={"Select currency"}
                  options={currencies}
                  value={currencies?.find(
                    (option) => option.value === formik.values.currency
                  )}
                  onChange={(value) => {
                    handleSelect("currency", value);
                  }}
                  onBlur={() => {
                    formik.setFieldTouched("currency", true);
                  }}
                />
                {formik.touched.currency &&
                  selectTouched.currency === false && (
                    <p className="text-danger">{formik.errors.currency}</p>
                  )}
              </Col>
              <Col lg={4} className="branchName">
                <p>
                  Branch Name<span className="text-danger">*</span>
                </p>

                <Select
                  id="branchName"
                  name="branchName"
                  placeholder={"Select a branch"}
                  options={Branches}
                  value={Branches?.find(
                    (option) => option.value === formik.values.branchName
                  )}
                  onChange={(value) => {
                    handleSelect("branchName", value);
                  }}
                  onBlur={() => {
                    formik.setFieldTouched("branchName", true);
                  }}
                />
                {formik.touched.branchName &&
                  selectTouched.branchName === false && (
                    <p className="text-danger">{formik.errors.branchName}</p>
                  )}
              </Col>

              <Col md={4} className="mt-4">
                <Label>Customer Name</Label>
                <Input
                  type="text"
                  name="customerName"
                  value={formik.values.customerName}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </Col>

              <Col md={4} className="mt-4">
                <Label>Anticipated Yearly Transaction</Label>
                <Input
                  type="text"
                  name="anticipatedYearlyTransaction"
                  value={formik.values.anticipatedYearlyTransaction}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </Col>

              <h6 className="fw-bold mt-5">Salaried/Others</h6>

              <Col lg={4} className="mt-4">
                <Label>Registered Address</Label>
                <Input
                  type="text"
                  name="registeredAddress"
                  value={formik.values.registeredAddress}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </Col>

              <Col md={4} className="mt-4">
                <Label>Registration Number</Label>
                <Input
                  type="text"
                  name="registrationNumber"
                  value={formik.values.registrationNumber}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </Col>

              <Col lg={4} className="NatureOfBusiness">
                <Label> Nature of Busines </Label>

                <Select
                  id="businessNature"
                  name="businessNature"
                  placeholder={"Select nature of Business"}
                  options={businessNatures}
                  value={businessNatures?.find(
                    (option) => option.value === formik.values.businessNature
                  )}
                  onChange={(value) => {
                    handleSelect("businessNature", value);
                  }}
                  onBlur={() => {
                    formik.setFieldTouched("businessNature", true);
                  }}
                />
                {formik.touched.businessNature &&
                  selectTouched.businessNature === false && (
                    <p className="text-danger">
                      {formik.errors.businessNature}
                    </p>
                  )}
              </Col>
              <Col lg={4}>
                <Label className="mt-4">
                  Registered On (B.S) <span className="text-danger">*</span>
                </Label>
                <NepaliDatePicker
                  id="bsdate1"
                  inputClassName="form-control"
                  readOnly
                  name="registeredBS"
                  selected={formik.values.registeredBS} // Assuming the field is registeredBS
                  onChange={(date) =>
                    formik.setFieldValue("registeredBS", date)
                  } // Use setFieldValue to update value
                />
              </Col>

              <Col lg={4}>
                <Label htmlfor=" addate1" className="mt-4">
                  Registered On (A.D) <span className="text-danger">*</span>
                </Label>
                <input
                  id="addate1"
                  type="date"
                  className="form-control englishDate text dateISO"
                  name="registeredAD"
                  value={formik.values.registeredAD}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </Col>

              <Col lg={4} className="mt-4">
                <Label>P.O. Box</Label>
                <Input
                  type="text"
                  name="pobox"
                  value={formik.values.pobox}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
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
                      <p className="text-danger">
                        {formik.errors.permDistrict}
                      </p>
                    )}
                </FormGroup>
              </Col>
              <Col lg={4} className="mt-4">
                <Label>PAN Number</Label>
                <Input
                  type="text"
                  name="panNumber"
                  value={formik.values.panNumber}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </Col>

              <Col md={4} className="mt-4">
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </Col>

              <Col md={4} className="mt-4">
                <Label>Fax</Label>
                <Input
                  type="text"
                  name="fax"
                  value={formik.values.fax}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </Col>

              <Col lg={4} className="mt-4">
                <Label>Website</Label>
                <Input
                  type="text"
                  name="website"
                  value={formik.values.website}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </Col>

              <Col md={4} className="mt-4">
                <Label>Phone Number 1</Label>
                <Input
                  type="text"
                  name="phoneNumber1"
                  value={formik.values.phoneNumber1}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </Col>

              <Col md={4} className="mt-4">
                <Label>Phone Number 2</Label>
                <Input
                  type="text"
                  name="phoneNumber2"
                  value={formik.values.phoneNumber2}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </Col>

           
            </Row>

            <div className="d-flex justify-content-between mt-4">
              <Button
                color="light"
                onClick={() =>
                  dispatch(setKycSelectionCorporate("uploadKycForm"))
                }
              >
                Back
              </Button>
              <Button
                color="primary"
                type="submit"
                // onClick={() => dispatch(setKycSelectionCorporate('addressInformation'))}
              >
                Next
              </Button>
            </div>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
}
