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
import Select from "react-select";

import validationSchema from "../../validationSchema/validationSchema";
import { updateBasicInformation } from "../../slices/KycMinor.slice";
import { useDispatch, useSelector } from "react-redux";
import {  setKycSelectionMinor } from "../../slices/selection.slice";
import * as Yup from "yup";
import { fetchAccountTypeList, fetchBranchList, fetchCurrencyList, fetchSourceOFFundList } from "../../../slices/CentralizedKYC/Dropdowns/thunk";

export default function BasicInfoMinor() {
  const dispatch = useDispatch();
  const initialValues = useSelector(
    (state) => state.KycDetails.basicInformation
  );
  const initialform = useSelector((state) => state.KycDetails);

    // Getting Dropdown Data
    const AccountTypeList = useSelector((state) => state.Dropdown?.AccountTypeList);
    const CurrencyList = useSelector((state) => state.Dropdown?.CurrencyList);
    const BranchList = useSelector((state) => state.Dropdown?.BranchList);
    const SourceOfFundList = useSelector((state) => state.Dropdown?.SourceOfFunds);
  
  
  
    useEffect(() => {
      dispatch(fetchAccountTypeList());
      dispatch(fetchCurrencyList());
      dispatch(fetchBranchList());
      dispatch(fetchSourceOFFundList());
  
    }, []);

  const [selectTouched, setSelectTouched] = useState({
    accountType: false,
    branchName: false,
    currency: false,
  });

  const handleSelect = (fieldName, value) => {
    formik.setFieldValue(fieldName, value.value);
    setSelectTouched((prev) => ({
      ...prev,
      [fieldName]: true,
    }));
  };

  const validationSchema = Yup.object().shape({
    accountType: Yup.string().required("Country is required"),
    branchName: Yup.string().required("State is required"),
    currency: Yup.string().required("Currency is required"),
  });

  const formik = useFormik({
    initialValues,
    // validationSchema,
    onSubmit: (values) => {
      dispatch(setKycSelectionMinor("PersonalDetailsMinor"));
      dispatch(updateBasicInformation(values));
      console.log("Basic information values", values);
      // console.log("Basic information entry", initialform);
    },
  });

    //Dropdown datas
    const Branches = BranchList?.map((item) => ({
      value: item.bra01title,
      label: item.bra01title,
    }));
  
    const accountTypes =AccountTypeList?.map((item) => ({
      value: item.acc01title,
      label: item.acc01title,
    }));
    const currencies = CurrencyList?.map((item) => ({
      value: item.cur01title,
      label: item.cur01title,
    }));
  
    const sourcesOfFunds = SourceOfFundList?.map((item) => ({
      value: item.fun01title,
      label: item.fun01title,
    }));
  

  return (
    <Card className="p-0">
      <CardHeader className="px-4">
        <div className="">
          <h5 className="m-0">Basic Information</h5>
        </div>
      </CardHeader>

      <CardBody className="px-4 ">
        <Form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <Row className="gy-4 gx-5 py-3">
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

              <Col lg={4} className="date">
                <p>
                  Date<span className="text-danger">*</span>
                </p>
                <Input
                  type="date"
                  className=""
                  name="date"
                  value={formik.values.date}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />

                {formik.touched.date && formik.errors.date && (
                  <div className="text-danger">{formik.errors.date}</div>
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

              {/* <Col lg={4} className="accountNumber">
                <p>Account Number (if any)</p>
                <Input
                  type="text"
                  placeholder="010452349803480097"
                  name="accountNumber"
                  value={formik.values.accountNumber}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />

                {formik.touched.accountNumber &&
                  formik.errors.accountNumber && (
                    <div className="text-danger">
                      {formik.errors.accountNumber}
                    </div>
                  )}
              </Col> */}

              <Col lg={4} className="anticipatedYearlyTransaction">
                <p>
                  Anticipated yearly transaction
                  <span className="text-danger">*</span>
                </p>
                <Input
                  type="text"
                  name="anticipatedYearlyTransaction"
                  value={formik.values.anticipatedYearlyTransaction}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />

                {formik.touched.anticipatedYearlyTransaction &&
                  formik.errors.anticipatedYearlyTransaction && (
                    <div className="text-danger">
                      {formik.errors.anticipatedYearlyTransaction}
                    </div>
                  )}
              </Col>

              <Col lg={4} className="purposeOfAccountOpening">
                <p>
                  Purpose of Account Opening
                  <span className="text-danger">*</span>
                </p>
                <Input
                  type="text"
                  name="purposeOfAccountOpening"
                  value={formik.values.purposeOfAccountOpening}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />

                {formik.touched.purposeOfAccountOpening &&
                  formik.errors.purposeOfAccountOpening && (
                    <div className="text-danger">
                      {formik.errors.purposeOfAccountOpening}
                    </div>
                  )}
              </Col>

              <Col lg={4} className="sourceOfFunds">
                <p>
                  Source of Funds<span className="text-danger">*</span>
                </p>
                {/* <Input
                  type="text"
                  name="sourceOfFunds"
                  value={formik.values.sourceOfFunds}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                /> */}

                <Select
                  id="sourceOfFunds"
                  name="sourceOfFunds"
                  placeholder={"Select a branch"}
                  options={sourcesOfFunds}
                  value={sourcesOfFunds?.find(
                    (option) => option.value === formik.values.sourceOfFunds
                  )}
                  onChange={(value) => {
                    handleSelect("sourceOfFunds", value);
                  }}
                  onBlur={() => {
                    formik.setFieldTouched("sourceOfFunds", true);
                  }}
                />
                {formik.touched.sourceOfFunds &&
                  selectTouched.sourceOfFunds === false && (
                    <p className="text-danger">{formik.errors.sourceOfFunds}</p>
                  )}
              </Col>

              {/* <Col lg={4} className="mt-4">
                <p>
                  Account For<span className="text-danger">*</span>
                </p>
                <Input
                  type="select"
                  className="text-center"
                  name="accountFor"
                  id="acountFor"
                  value={formik.values.accountFor}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                >
                  <option value="" className="text-muted">
                    Choose your account for
                  </option>
                  <option value="individual">Individual</option>
                  <option value="minor">Minor</option>
                  <option value="foreignNational">Foreign National</option>
                  <option value="refugee">Refugee</option>
                </Input>

                {formik.touched.accountFor && formik.errors.accountFor && (
                  <div className="text-danger">{formik.errors.accountFor}</div>
                )}
              </Col> */}
            </Row>

            <div className="d-flex justify-content-between mt-5">
              <Button
                color="light"
                onClick={() => dispatch(setKycSelectionMinor("VideoKycMinor"))}
              >
                Back
              </Button>
              <Button color="primary" type="submit">
                Next
              </Button>
            </div>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
}
