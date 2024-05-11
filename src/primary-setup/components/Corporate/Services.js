
import React, { useState, useEffect } from "react";
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
import { setKycSelectionCorporate } from "../../slices/selection.slice";
import { updateServicesYouWant } from "../../slices/kycCorporate.slice";
import { fetchDebitCardTypeList, fetchFrequencyList, fetchModeOfDeliveryList } from "../../../slices/CentralizedKYC/Dropdowns/thunk";

const Services = () => {
  const dispatch = useDispatch();
  const initialValues = useSelector(
    (state) => state.KycCorporate.servicesYouWant
  );

  // Getting Dropdown Data
  const FrequencyList = useSelector((state) => state.Dropdown?.Frequency);
  const ModeOfDeliveryList = useSelector((state) => state.Dropdown?.ModeOfDelivery);
  const DebitCardTypeList = useSelector((state) => state.Dropdown?.DebitCardType);

  useEffect(() => {
    dispatch(fetchFrequencyList());
    dispatch(fetchModeOfDeliveryList());
    dispatch(fetchDebitCardTypeList());

  }, []);

  const [isDebitCardChecked, setIsDebitCardChecked] = useState(false);
  const [isOnlineBankingChecked, setIsOnlineBankingChecked] = useState(false);
  const [isMobileBankingChecked, setIsMobileBankingChecked] = useState(false);
  const [isSmsBankingChecked, setIsSmsBankingChecked] = useState(false);
  const [isPhonePayChecked, setIsPhonePayChecked] = useState(false);
  const [isTransactionAlertChecked, setIsTransactionAlertChecked] =
    useState(false);
  const [isMerchantQRChecked, setIsMerchantQRChecked] = useState(false);

  const validationSchema = Yup.object().shape({
    frequency: Yup.string().required("Frequency is required"),
    modeOfDelivery: Yup.string().required("Mode of Delivery is required"),
    statementPrint: Yup.array()
      .min(1, "Select at least one statement print option")
      .required("Statement Print is required"),
    debitCardType: isDebitCardChecked
      ? Yup.string().required("Debit Card Type is required")
      : Yup.string().notRequired(),
    onlineBanking: isOnlineBankingChecked
      ? Yup.string().required(
          "Third Party Transaction (Online Banking) is required"
        )
      : Yup.string().notRequired(),
    mobileBanking: isMobileBankingChecked
      ? Yup.string().required(
          "Third Party Transaction (Mobile Banking) is required"
        )
      : Yup.string(),
  });

  const [selectTouched, setSelectTouched] = useState({
    frequency: false,
    modeOfDelivery: false,
    debitCardType: false,
  });

  const formik = useFormik({
    initialValues,
    // validationSchema,
    onSubmit: (values) => {
    //   values.debitCardService = isDebitCardChecked;
    //   values.onlineBanking = isOnlineBankingChecked;
    //   values.mobileBanking = isMobileBankingChecked;
    //   values.smsBanking = isSmsBankingChecked;
    //   values.phonePay = isPhonePayChecked;
    //   values.transactionAlert = isTransactionAlertChecked;
    //   values.merchantQR = isMerchantQRChecked;
      // if (isDebitCardChecked === false) {
      //     values.debitCardType = '';
      // }
      console.log("Formik values:", values);
      dispatch(updateServicesYouWant(values));
      dispatch(setKycSelectionCorporate("location"));
    },
  });
  const frequencySelect = FrequencyList?.map((item) => ({
    value: item.frequency01title,
    label: item.frequency01title,
  }));

  const modeOfDelivery = ModeOfDeliveryList?.map((item) => ({
    value: item.mode01title,
    label: item.mode01title,
  }));

  const debitCardType = DebitCardTypeList?.map((item) => ({
    value: item.debit01title,
    label: item.debit01title,
  }));

  const yesNo = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

  const handleSelect = (fieldName) => {
    setSelectTouched((prev) => ({
      ...prev,
      [fieldName]: true,
    }));
  };
  return (
    <>
    <Card className="p-0">
      <CardHeader className="px-4">
        <div className="">
          <h5 className="m-0">Services you want</h5>
        </div>
      </CardHeader>
      <CardBody className="px-4">
        <Form className="row" onSubmit={formik.handleSubmit}>
          <Col md={12} className="mt-4 mb-5">
            <span className="fs-15 fw-bold" style={{ color: "#495057" }}>
              Statement
            </span>
          </Col>
          <Row className="gx-5">
            <Col md={4}>
              <FormGroup>
                <Label htmlFor="frequency">
                  Frequency<span className="text-danger">*</span>
                </Label>
                <Select
                  id="frequency"
                  name="frequency"
                  options={frequencySelect}
                  value={frequencySelect?.find(
                    (option) => option.value === formik.values.frequency
                  )}
                  onChange={(selectedOption) => {
                    formik.setFieldValue("frequency", selectedOption.value);
                    handleSelect("frequency");
                  }}
                  onBlur={() => {
                    formik.setFieldTouched("frequency", true);
                  }}
                />
                {formik.touched.frequency &&
                  selectTouched.frequency === false && (
                    <p className="text-danger">{formik.errors.frequency}</p>
                  )}
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label htmlFor="modeOfDelivery">
                  Mode Of Delivery<span className="text-danger">*</span>
                </Label>
                <Select
                  id="modeOfDelivery"
                  name="modeOfDelivery"
                  options={modeOfDelivery}
                  value={modeOfDelivery?.find(
                    (option) => option.value === formik.values.modeOfDelivery
                  )}
                  onChange={(selectedOption) => {
                    formik.setFieldValue(
                      "modeOfDelivery",
                      selectedOption.value
                    );
                    handleSelect("modeOfDelivery");
                  }}
                  onBlur={() => {
                    formik.setFieldTouched("modeOfDelivery", true);
                  }}
                />
                {formik.touched.modeOfDelivery &&
                  selectTouched.modeOfDelivery === false && (
                    <p className="text-danger">
                      {formik.errors.modeOfDelivery}
                    </p>
                  )}
              </FormGroup>
            </Col>

            <Col md={4} >

                <Label htmlFor="statementPrint">
                  Statement Print<span className="text-danger">*</span>
                </Label>
                <div className="d-flex mt-2 align-item-center gap-4">
                  <div className="d-flex justify-content-center align-item-center">
                    <input
                      type="checkbox"
                      id="nepaliCalendar"
                      name="statementPrint"
                      value="Nepali Calendar"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik.values.statementPrint.includes(
                        "Nepali Calendar"
                      )}
                    />
                    <label htmlFor="nepaliCalendar" className="mb-0 ms-2">
                      Nepali Calendar
                    </label>
                  </div>
                  <div className="d-flex justify-content-center align-item-center">
                    <input
                      type="checkbox"
                      id="englishCalendar"
                      name="statementPrint"
                      className="me-1"
                      value="English Calendar"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik.values.statementPrint.includes(
                        "English Calendar"
                      )}
                    />
                    <label htmlFor="englishCalendar" className="mb-0 ms-2">English Calendar</label>
                  </div>
                </div>

                {formik.touched.statementPrint && (
                  <p className="text-danger">{formik.errors.statementPrint}</p>
                )}

            </Col>
          </Row>

          <Col md={12} className="mt-4 mb-5">
            <span className="fs-15 fw-bold" style={{ color: "#495057" }}>
              Services To Active
            </span>
          </Col>
          <Row className="gx-5">
            <Col md={4}>
              <span className="d-flex justify-content-between">
                <span className="fw-semibold fs-15 text-dark">
                  Debit Card Service
                </span>
                <div className="form-check form-switch me-5">
                  <input
                    className="form-check-input border-0"
                    type="checkbox"
                    role="switch"
                    id="debitCardService"
                    name="debitCardService"
                    checked={formik.values.debitCardService}
                    onChange={formik.handleChange}
                    style={{
                      boxShadow: "none",
                      backgroundColor: formik.values.debitCardService ? "green" : "red",
                      boxShadow: "none",
                      backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba(255,255,255,1.0)'/></svg>")`,
                    }}
                  />
                  <label className="form-check-label" htmlFor="debitCardService">
                    {formik.values.debitCardService ? "Yes" : "No"}
                  </label>
                </div>
              </span>
              <FormGroup className="row mt-3">
                <Col md={12}>
                  <Label htmlFor="debitCardType">
                    Debit Card Type<span className="text-danger">*</span>
                  </Label>
                </Col>
                <Col md={12}>
                  <Select
                    id="debitCardType"
                    name="debitCardType"
                    options={debitCardType}
                    value={debitCardType?.find(
                      (option) => option.value === formik.values.debitCardType
                    )}
                    isDisabled={!formik.values.debitCardService}
                    onChange={(selectedOption) => {
                      formik.setFieldValue(
                        "debitCardType",
                        selectedOption.value
                      );
                      handleSelect("debitCardType");
                    }}
                    onBlur={() => {
                      formik.setFieldTouched("debitCardType", true);
                    }}
                  />
                  {formik.touched.debitCardType &&
                    selectTouched.debitCardType === false && (
                      <p className="text-danger">
                        {formik.errors.debitCardType}
                      </p>
                    )}
                </Col>
              </FormGroup>
            </Col>
            <Col md={4}>
              <h6 className="d-flex justify-content-between">
                <b>Online Banking</b>
                <div className="form-check form-switch me-5 mb-3">
                  <input
                    className="form-check-input border-0"
                    style={{
                      boxShadow: "none",
                      backgroundColor: formik.values.onlineBanking ? "green" : "red",
                      boxShadow: "none",
                      backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba(255,255,255,1.0)'/></svg>")`,
                    }}
                    type="checkbox"
                    role="switch"
                    id="onlineBanking"
                    name="onlineBanking"
                    checked= {formik.values.onlineBanking}
                    onChange={formik.handleChange}
                  />
                  <label className="form-check-label" htmlFor="onlineBanking">
                    {formik.values.onlineBanking ? "Yes" : "No"}
                  </label>
                </div>
              </h6>
              <h6 className="d-flex justify-content-between">
                <b>Mobile Banking</b>
                <div className="form-check form-switch me-5 mb-3">
                  <input
                    className="form-check-input border-0"
                    type="checkbox"
                    role="switch"
                    name="mobileBanking"
                    checked ={formik.values.mobileBanking}
                    onChange={formik.handleChange}
                    style={{
                      boxShadow: "none",
                      backgroundColor: formik.values.mobileBanking ? "green" : "red",
                      boxShadow: "none",
                      backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba(255,255,255,1.0)'/></svg>")`,
                    }}
                  />
                  <label className="form-check-label" htmlFor="mobileBanking">
                    {formik.values.mobileBanking ? "Yes" : "No"}
                  </label>
                </div>
              </h6>
              <h6 className="d-flex justify-content-between">
                <b>SMS Banking</b>
                <div className="form-check form-switch me-5 mb-3">
                  <input
                    className="form-check-input border-0"
                    type="checkbox"
                    role="switch"
                    name="smsBanking"
                    checked={formik.values.smsBanking}
                    onChange={formik.handleChange}
                    style={{
                      boxShadow: "none",
                      backgroundColor: formik.values.smsBanking ? "green" : "red",
                      boxShadow: "none",
                      backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba(255,255,255,1.0)'/></svg>")`,
                    }}
                  />
                  <label className="form-check-label" htmlFor="smsBanking">
                    {formik.values.smsBanking ? "Yes" : "No"}
                  </label>
                </div>
              </h6>
            </Col>
            <Col md={4}>
              <h6 className="d-flex justify-content-between">
                <b>Phone Pay</b>
                <div className="form-check form-switch me-5 mb-3">
                  <input
                    className="form-check-input border-0"
                    type="checkbox"
                    role="switch"
                    name="phonePay"
                    checked={formik.values.phonePay}
                    onChange={formik.handleChange}
                    style={{
                      boxShadow: "none",
                      backgroundColor: formik.values.phonePay ? "green" : "red",
                      boxShadow: "none",
                      backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba(255,255,255,1.0)'/></svg>")`,
                    }}
                  />
                  <label className="form-check-label" htmlFor="phonePay">
                    {formik.values.phonePay ? "Yes" : "No"}
                  </label>
                </div>
              </h6>
              <h6 className="d-flex justify-content-between">
                <b>Transaction Alert</b>
                <div className="form-check form-switch me-5 mb-3">
                  <input
                    className="form-check-input border-0"
                    type="checkbox"
                    role="switch"
                    name="transactionAlert"
                    checked={formik.values.transactionAlert}
                    onChange={formik.handleChange}
                    style={{
                      boxShadow: "none",
                      backgroundColor: formik.values.transactionAlert
                        ? "green"
                        : "red",
                      boxShadow: "none",
                      backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba(255,255,255,1.0)'/></svg>")`,
                    }}
                  />
                  <label className="form-check-label" htmlFor="transactionAlert">
                    {formik.values.transactionAlert ? "Yes" : "No"}
                  </label>
                </div>
              </h6>
              <h6 className="d-flex justify-content-between">
                <b>Merchant QR</b>
                <div className="form-check form-switch me-5 mb-3">
                  <input
                    className="form-check-input border-0"
                    type="checkbox"
                    role="switch"
                    id="merchantQR"
                    checked={formik.values.merchantQR}
                    onChange={formik.handleChange}
                    style={{
                      boxShadow: "none",
                      backgroundColor: formik.values.merchantQR ? "green" : "red",
                      boxShadow: "none",
                      backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba(255,255,255,1.0)'/></svg>")`,
                    }}
                  />
                  <label className="form-check-label" htmlFor="merchantQR">
                    {formik.values.merchantQR ? "Yes" : "No"}
                  </label>
                </div>
              </h6>
            </Col>
          </Row>

          <div className="d-flex justify-content-between mt-4">
            <Button
              color="light"
              onClick={() =>
                dispatch(setKycSelectionCorporate("accountOperatorInfo"))
              }
            >
              Back
            </Button>
            <Button color="primary" type="submit">
              Next
            </Button>
          </div>
        </Form>
      </CardBody>
    </Card>
    </>
  );
};

export default Services;