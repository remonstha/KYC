import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Row,
  Col,
  Label,
  FormGroup,
  Input,
  ModalFooter,
  FormFeedback,
} from "reactstrap";
import Select from "react-select";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addNomineeInformation } from "../slices/kycDetails.slice";
import { useLocation } from "react-router-dom";
import { addNomineeInformationMinor } from "../slices/KycMinor.slice";
import {
  fetchCountryList,
  fetchDistrictList,
  fetchIssuedPlaceList,
  fetchMunicipalityList,
  fetchRelationshipList,
  fetchStateList,
} from "../../slices/CentralizedKYC/Dropdowns/thunk";
import ReactSelect from "react-select";

const AddNomineeModal = ({ modalOpen, toggleModal, onAddNominee }) => {
  // Getting Dropdown Data
  const CountryList = useSelector((state) => state.Dropdown?.CountryList);
  const StateList = useSelector((state) => state.Dropdown?.StateList);
  const DistrictList = useSelector((state) => state.Dropdown?.DistrictList);
  const MunicipalityList = useSelector(
    (state) => state.Dropdown?.MunicipalityList
  );
  const Relationship = useSelector((state) => state.Dropdown?.Relationship);
  const issuedPlaces = useSelector((state) => state.Dropdown.IssuedPlace);

  useEffect(() => {
    // dispatch(fetchCountryList());
    dispatch(fetchStateList());
    dispatch(fetchDistrictList());
    dispatch(fetchMunicipalityList());
    dispatch(fetchRelationshipList());
    dispatch(fetchIssuedPlaceList());
  }, []);

  //Dropdown Options
  const countries = CountryList?.map((item) => ({
    value: item.add01uin,
    label: item.add01title,
  }));

  const states = StateList?.map((item) => ({
    value: item.add02uin,
    label: item.add02title,
  }));

  const districts = DistrictList?.map((item) => ({
    value: item.add03uin,
    label: item.add03title,
  }));
  const municipalities = MunicipalityList?.map((item) => ({
    value: item.add04uin,
    label: item.add04title,
  }));
  const relationships = Relationship?.map((item) => ({
    value: item.gur01uin,
    label: item.gur01title,
  }));
  const places = issuedPlaces?.map((item) => ({
    value: item.issued01uin,
    label: item.issued01title,
  }));

  const dispatch = useDispatch();
  const location = useLocation();
  const reduxState = useSelector(
    (state) => state.KycDetails.nomineeInformation.nomineeInfos
  );
  const minorReduxState = useSelector(
    (state) => state.KycMinor.nomineeInformationMinor
  );

  const validationSchema = Yup.object().shape({
    nomineeName: Yup.string().required("Nominee's name is required"),
    nomineeDateOfBirth: Yup.date().required("Nominee's date of birth is required"),
    citizenshipNo: Yup.string().required("Identification number is required"),
    placeOfIssue: Yup.string().required("Place of issue is required"),
    issuedDate: Yup.date().required("Date of issue is required"),
    relationshipWithNominee: Yup.string().required("Nominee relationshipWithNominee is required"),
    grandfatherName: Yup.string().required("Grandfather's name is required"),
    fatherName: Yup.string().required("Father's name is required"),
    motherName: Yup.string().required("Mother's name is required"),
    contactNumber: Yup.string().required("Contact number is required"),

    nomineePercentageShare: Yup.number()
      .required("This is required")
      .test(
        "total-share",
        "Total share should not exceed 100%",
        function (value) {
          let totalExistingShare = 0;

          if (location.pathname === "/kycindividual") {
            totalExistingShare = reduxState.reduce(
              (total, nominee) =>
                total + parseFloat(nominee.nomineePercentageShare || 0),
              0
            );
          } else if (location.pathname === "/kycminor") {
            totalExistingShare = minorReduxState.reduce(
              (total, nominee) =>
                total + parseFloat(nominee.nomineePercentageShare || 0),
              0
            );
          }

          const totalShareWithNewNominee =
            totalExistingShare + parseFloat(value || 0);
          return totalShareWithNewNominee <= 100;
        }
      ),

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
  });

  useEffect(() => {
    console.log("this is redux state", reduxState);
  }, [reduxState]);

  const [sameAsPermanent, setSameAsPermanent] = useState(false);
  const [selectTouched, setSelectTouched] = useState({
    permCountry: false,
    permState: false,
    permDistrict: false,
    permMunicipality: false,

    tempCountry: false,
    tempState: false,
    tempDistrict: false,
    tempMunicipality: false,
    relationshipWithNominee: false,
  });

  const handleSelect = (fieldName, value) => {
    formik.setFieldValue(fieldName, value.value);
    setSelectTouched((prev) => ({
      ...prev,
      [fieldName]: true,
    }));
  };

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

  const formik = useFormik({
    initialValues: {
      nomineeName: "",
      relationshipWithNominee: "",
      nomineeDateOfBirth: "",
      placeOfIssue: "",
      issuedDate: "",
      citizenshipNo: "",
      fatherName: "",
      motherName: "",
      grandfatherName: "",
      contactNumber: "",
      nomineePercentageShare: "",
      permCountry: "",
      permState: "",
      permDistrict: "",
      permMunicipality: "",
      permWardNo: "",
      permToleStreet: "",
      permHouseNo: "",
      tempCountry: "",
      tempState: "",
      tempDistrict: "",
      tempMunicipality: "",
      tempWardNo: "",
      tempToleStreet: "",
      tempHouseNo: "",
    },

    validationSchema,
    onSubmit: (values) => {
      const newNomineeData = {
        nomineeName: values.nomineeName,
        relationshipWithNominee: values.relationshipWithNominee,
        nomineeDateOfBirth: values.nomineeDateOfBirth,
        placeOfIssue: values.placeOfIssue,
        issuedDate: values.issuedDate,
        citizenshipNo: values.citizenshipNo,
        grandfatherName: values.grandfatherName,
        fatherName: values.fatherName,
        motherName: values.motherName,
        contactNumber: values.contactNumber,
        nomineePercentageShare: values.nomineePercentageShare,
        permCountry: values.permCountry,
        permState: values.permState,
        permDistrict: values.permDistrict,
        permMunicipality: values.permMunicipality,
        permWardNo: values.permWardNo,
        permToleStreet: values.permToleStreet,
        permHouseNo: values.permHouseNo,
        tempCountry: values.tempCountry,
        tempState: values.tempState,
        tempDistrict: values.tempDistrict,
        tempMunicipality: values.tempMunicipality,
        tempWardNo: values.tempWardNo,
        tempToleStreet: values.tempToleStreet,
        tempHouseNo: values.tempHouseNo,
      };
      // onAddNominee(values);

      const valueToSave = {
        nomineeName: newNomineeData.nomineeName,
        relationshipWithNominee: newNomineeData.relationshipWithNominee,
        nomineeDateOfBirth: newNomineeData.nomineeDateOfBirth,
        issuedPlace: newNomineeData.placeOfIssue,
        issuedDate: newNomineeData.issuedDate,
        citizenshipNo: newNomineeData.citizenshipNo,
        nomineePercentageShare: newNomineeData.nomineePercentageShare,
        permanentAddress: {
          country: newNomineeData.permCountry,
          state: newNomineeData.permState,
          district: newNomineeData.permDistrict,
          municipality: newNomineeData.permMunicipality,
          wardNo: newNomineeData.permWardNo,
          toleStreet: newNomineeData.permToleStreet,
          houseNo: newNomineeData.permHouseNo
        },
        isTemporaryAddressSameAsPermanent: sameAsPermanent,
        temporaryAddress: {
          country: newNomineeData.tempCountry,
          state: newNomineeData.tempState,
          district: newNomineeData.tempDistrict,
          municipality: newNomineeData.tempMunicipality,
          wardNo: newNomineeData.tempWardNo,
          toleStreet: newNomineeData.tempToleStreet,
          houseNo: newNomineeData.tempHouseNo
        }
      };

      if (location.pathname === "/kycindividual")
        dispatch(addNomineeInformation(valueToSave));
      if (location.pathname === "/kycminor")
        dispatch(addNomineeInformationMinor(valueToSave));

      toggleModal();
      formik.resetForm();
    },
  });

  return (
    <Modal isOpen={modalOpen} toggle={toggleModal} size="xl">
      <ModalHeader toggle={toggleModal} className="px-4">
        <span className="text-primary">Add Nominee</span>
      </ModalHeader>
      <ModalBody className="px-4 mt-5">
        <form onSubmit={formik.handleSubmit} className="row gy-3 gx-4">
          <Col md={4} className="nomineesName">
            <label htmlFor="nomineeName">Nominee's Name</label>
            <input
              type="text"
              name="nomineeName"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.nomineeName}
            />
            {formik.touched.nomineeName && (
              <p className="text-danger">{formik.errors.nomineeName}</p>
            )}
          </Col>
          <Col md={4} className="relationship">
            <FormGroup>
              <Label htmlFor="relationshipWithNominee">Relationship With Applicants</Label>

              <Select
                id="relationshipWithNominee"
                name="relationshipWithNominee"
                placeholder={"Select Relationship"}
                options={relationships}
                value={relationships?.find(
                  (option) => option.value === formik.values.relationshipWithNominee
                )}
                onChange={(value) => {
                  handleSelect("relationshipWithNominee", value);
                }}
                onBlur={() => {
                  formik.setFieldTouched("relationshipWithNominee", true);
                }}
              />
              {formik.touched.relationshipWithNominee &&
                selectTouched.relationshipWithNominee === false && (
                  <p className="text-danger fs-12">
                    {formik.errors.relationshipWithNominee}
                  </p>
                )}
              <FormFeedback>
                {formik.touched.relationshipWithNominee && formik.errors.relationshipWithNominee}
              </FormFeedback>
            </FormGroup>
          </Col>
          <Col md={4} className="dateOfBirth">
            <label htmlFor="nomineeDateOfBirth">Nominee's Date of Birth</label>
            <input
              type="date"
              name="nomineeDateOfBirth"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.nomineeDateOfBirth}
            />
            {formik.touched.nomineeDateOfBirth && (
              <p className="text-danger">{formik.errors.nomineeDateOfBirth}</p>
            )}
          </Col>
          <Col md={4} className="issuedPlace">
            <label>ID Issued Place</label>
            <Select
              id="placeOfIssue"
              name="placeOfIssue"
              placeholder={"ID issued place"}
              options={places}
              value={places?.find(
                (option) => option.value === formik.values.placeOfIssue
              )}
              onChange={(value) => {
                handleSelect("placeOfIssue", value);
              }}
              onBlur={() => {
                formik.setFieldTouched("placeOfIssue", true);
              }}
            />
            {formik.touched.placeOfIssue &&
              selectTouched.placeOfIssue === false && (
                <p className="text-danger">{formik.errors.placeOfIssue}</p>
              )}
          </Col>
          <Col md={4} className="issuedDate">
            <label htmlFor="issuedDate">ID Issued Date</label>
            <input
              type="date"
              name="issuedDate"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.issuedDate}
            />
            {formik.touched.issuedDate && (
              <p className="text-danger">{formik.errors.issuedDate}</p>
            )}
          </Col>

          <Col md={4} className="identificationNumber">
            <label className="d-block">Identification No.</label>
            <input
              type="text"
              name="citizenshipNo"
              // className="text-center border-0 border-bottom"
              className="form-control"
              placeholder="ID No."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.citizenshipNo}
            />
            {formik.touched.citizenshipNo && (
              <p className="text-danger">{formik.errors.citizenshipNo}</p>
            )}
          </Col>

          <Col md={4} className="fathersName">
            <label htmlFor="fatherName">Father's Name</label>
            <input
              type="text"
              name="fatherName"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fatherName}
            />
            {formik.touched.fatherName && (
              <p className="text-danger">{formik.errors.fatherName}</p>
            )}
          </Col>
          <Col md={4} className="mothersName">
            <label htmlFor="motherName">Mother's Name</label>
            <input
              type="text"
              name="motherName"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.motherName}
            />
            {formik.touched.motherName && (
              <p className="text-danger">{formik.errors.motherName}</p>
            )}
          </Col>
          <Col md={4} className="grandFathersName">
            <label htmlFor="grandfatherName">Grandfather's Name</label>
            <input
              type="text"
              name="grandfatherName"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.grandfatherName}
            />
            {formik.touched.grandfatherName && (
              <p className="text-danger">{formik.errors.grandfatherName}</p>
            )}
          </Col>

          <Col md={4} className="contactNumber">
            <label htmlFor="contactNumber">Contact Number</label>
            <input
              type="number"
              name="contactNumber"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.contactNumber}
            />
            {formik.touched.contactNumber && (
              <p className="text-danger">{formik.errors.contactNumber}</p>
            )}
          </Col>

          <Col md={4} className="nomineesShare">
            <label htmlFor="nomineePercentageShare">
              Nominees Percentage Share
            </label>
            <input
              type="number"
              name="nomineePercentageShare"
              className="form-control"
              placeholder="Example. 50%"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.nomineePercentageShare}
            />
            {formik.touched.nomineePercentageShare && (
              <p className="text-danger">
                {formik.errors.nomineePercentageShare}
              </p>
            )}
          </Col>

          {/*---------------------------------- Permanent Address section -------------------–––---------*/}
          <Col lg={12} className="permanentAddress-label mt-5 pt-5">
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
                type="text"
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
                        (option) => option.value === formik.values.permDistrict
                      )
                    : districts?.find(
                        (option) => option.value === formik.values.tempDistrict
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
                type="text"
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
          <ModalFooter>
            <Button color="light text-dark" onClick={() => toggleModal()}>
              Close
            </Button>
            <Button color="success" type="submit">
              Save
            </Button>
          </ModalFooter>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default AddNomineeModal;
