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
import { formSchema as validationSchema } from "../../validationSchema/index";
// import { NepaliDatePicker } from "nepali-datepicker-reactjs"; // for this npm i nepali-datepicker-reactjs --force
// // import NepaliDatePickerWrapper from "nepali-datepicker-reactjs/dist/NepaliDatePicker";
import "nepali-datepicker-reactjs/dist/index.css";
// import { NepaliDate } from "nepali-datepicker-reactjs";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
import NepaliDate from "nepali-date-converter";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { setKycSelectionMinor } from "../../slices/selection.slice";
import { updatePersonalDetailsMinor } from "../../slices/KycMinor.slice";
import Select from "react-select";
import { fetchRelationshipList } from "../../../slices/CentralizedKYC/Dropdowns/thunk";



const PersonalDetailsMinor = () => {
  const dispatch = useDispatch();
  const [otherGenderSelect, setOtherGenderSelect] = useState("");
  const [bsDate, setBsDate] = useState("");
  const [adDate, setAdDate] = useState("");
  const [kyc04IssuedDateNep, setKyc04IssuedDateNep] = useState("");
  const [kyc04IssuedDateEng, setKyc04IssuedDateEng] = useState("");

  const [kyc04PassportIssuedDateNep, setKyc04PassportIssuedDateNep] =
    useState("");
  const [kyc04PassportIssuedDateEng, setKyc04PassportIssuedDateEng] =
    useState("");

  const [kyc04ExpiryDateNep, setKyc04ExpiryDateNep] = useState("");
  const [kyc04ExpiryDateEng, setKyc04ExpiryDateEng] = useState("");

  const [kyc04VisaIssueDateNep, setKyc04VisaIssueDateNep] = useState("");
  const [kyc04VisaIssueDateEng, setKyc04VisaIssueDateEng] = useState("");

  const [kyc04VisaExpiryDateNep, setKyc04VisaExpiryDateNep] = useState("");
  const [kyc04VisaExpiryDateEng, setKyc04VisaExpiryDateEng] = useState("");

  const [kyc04VoterIdIssuedDateNep, setKyc04VoterIdIssuedDateNep] =
    useState("");
  const [kyc04VoterIdIssuedDateEng, setKyc04VoterIdIssuedDateEng] =
    useState("");
  const [formValues, setFormValues] = useState({}); // Define an initial state for form values

  const initialValues = useSelector(
    (state) => state.KycDetails.applicantDetails
  );

  const Relationship = useSelector(( state ) => (state.Dropdown?.Relationship));

  useEffect( () => {
    dispatch(fetchRelationshipList());
  }, []);

  const formik = useFormik({
    initialValues,
    // validationSchema,
    onSubmit: (values) => {
      dispatch(updatePersonalDetailsMinor(values));
      console.log("Personal Details", values);
      dispatch(setKycSelectionMinor("FamilyDetailsMinor"));
    },
  });

  const dismiss = (e) => {
    setVisiable(false);
  };
  const handleBsDate = (bsDate, index) => {
    if (bsDate) {
      const [year, month, day] = bsDate.split("-").map(Number);
      if (
        year >= 2000 &&
        year <= 2090 &&
        month >= 1 &&
        month <= 12 &&
        day >= 1 &&
        day <= 30
      ) {
        const nepaliDate = new NepaliDate(year, month - 1, day + 1);
        const convertedDate = nepaliDate.toJsDate().toISOString().slice(0, 10);
        if (index === 1) {
          setBsDate(bsDate);
          setAdDate(convertedDate);
        } else if (index === 2) {
          setKyc04IssuedDateNep(bsDate);
          setKyc04IssuedDateEng(convertedDate);
        } else if (index === 3) {
          setKyc04PassportIssuedDateNep(adDate);
          setKyc04PassportIssuedDateEng(convertedDate);
        } else if (index === 4) {
          setKyc04ExpiryDateNep(adDate);
          setKyc04ExpiryDateEng(convertedDate);
        } else if (index === 5) {
          setKyc04VisaIssueDateNep(adDate);
          setKyc04VisaIssueDateEng(convertedDate);
        } else if (index === 6) {
          setKyc04VisaExpiryDateNep(adDate);
          setKyc04VisaExpiryDateEng(convertedDate);
        } else if (index === 7) {
          setKyc04VoterIdIssuedDateNep(adDate);
          setKyc04VoterIdIssuedDateEng(convertedDate);
        }
      }
    }
  };

  const handleAdDate = (event, index) => {
    const adDate = event.target.value;
    const jsDate = new Date(adDate);
    const nepaliDate = new NepaliDate(jsDate);
    const bsYear = nepaliDate.getYear();
    const bsMonth = nepaliDate.getMonth() + 1;
    const bsDay = nepaliDate.getDate();
    const formattedMonth = bsMonth.toString().padStart(2, "0");
    const formattedDay = bsDay.toString().padStart(2, "0");
    const convertedDate = `${bsYear}-${formattedMonth}-${formattedDay}`;

    if (index === 1) {
      setAdDate(adDate);
      setBsDate(convertedDate);
    } else if (index === 2) {
      setKyc04IssuedDateEng(adDate);
      setKyc04IssuedDateNep(convertedDate);
    } else if (index === 3) {
      setKyc04PassportIssuedDateEng(adDate);
      setKyc04PassportIssuedDateNep(convertedDate);
    } else if (index === 4) {
      setKyc04ExpiryDateEng(adDate);
      setKyc04ExpiryDateNep(convertedDate);
    } else if (index === 5) {
      setKyc04VisaIssueDateEng(adDate);
      setKyc04VisaIssueDateNep(convertedDate);
    } else if (index === 6) {
      setKyc04VisaExpiryDateEng(adDate);
      setKyc04VisaExpiryDateNep(convertedDate);
    } else if (index === 7) {
      setKyc04VoterIdIssuedDateEng(adDate);
      setKyc04VoterIdIssuedDateNep(convertedDate);
    }
  };

  const updateDateFields = (bsDate, adDate) => {
    formik.setFieldValue("DOB", bsDate); // Update DOB field
    formik.setFieldValue("DOBN", adDate); // Update DOBN field
  };

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
  
  const relationships = Relationship?.map((item) => ({
    value: item.gur01title,
    label: item.gur01title,
  }))

  return (
    <Card className="p-0">
      <CardHeader className="px-4">
        <div className="p-0">
          <h5 className="m-0">Personal Details</h5>
        </div>
      </CardHeader>

      <CardBody className="px-4">

         {/*----------------------------------  section -------------------–––---------*/}
        <Form onSubmit={formik.handleSubmit} className="row gy-4 gx-5 py-3">
          <Col lg={4} className="title">
            <p>
              Title <span className="text-danger">*</span>{" "}
            </p>

            <Input
              id="Mr."
              type="radio"
              name="titleSelect"
              value="Mr."
              checked={formik.values.titleSelect === "Mr."}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Label for="Mr." className="ms-2">
              Mr.
            </Label>

            <Input
              id="Mrs."
              type="radio"
              className="ms-2"
              name="titleSelect"
              value="Mrs."
              checked={formik.values.titleSelect === "Mrs."}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Label for="Mrs." className="ms-2">
              Mrs.
            </Label>

            <Input
              id="Ms."
              type="radio"
              className="ms-2"
              name="titleSelect"
              value="Ms."
              checked={formik.values.titleSelect === "Ms."}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Label for="Ms." className="ms-2">
              Ms.
            </Label>

            <Input
              id="other"
              type="radio"
              className="ms-2"
              name="titleSelect"
              value="other"
              checked={formik.values.titleSelect === "other"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.values.titleSelect === "other" ? (
              <input
                type="text"
                className=" ms-2 text-center border-0 border-bottom"
                placeholder="Please specify"
                name="otherTitle"
                value={formik.values.othertitle}
                // onChange={(e) => setOtherSelect(e.target.value)}
                onChange={formik.handleChange}
                // disabled={titleSelect !== 'other'}
              />
            ) : (
              ""
            )}

            {formik.errors.titleSelect && formik.touched.titleSelect && (
              <p className="text-danger">{formik.errors.titleSelect}</p>
            )}

            {/* Error message for otherTitle */}
            {formik.errors.otherTitle && formik.touched.otherTitle && (
              <p className="text-danger">{formik.errors.otherTitle}</p>
            )}
          </Col>
          <Col lg={4} className="martialStatus">
            <p>
              Marital status <span className="text-danger">*</span>{" "}
            </p>

            <Input
              id="single"
              type="radio"
              name="maritalSelect"
              value="single"
              checked={formik.values.maritalSelect === "single"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Label for="single" className="ms-3">
              Single
            </Label>

            <Input
              id="married"
              type="radio"
              className="ms-3"
              name="maritalSelect"
              value="married"
              checked={formik.values.maritalSelect === "married"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Label for="married" className="ms-3">
              Married
            </Label>

            <Input
              id="divorced"
              type="radio"
              className="ms-3"
              name="maritalSelect"
              value="divorced"
              checked={formik.values.maritalSelect === "divorced"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Label for="divorced" className="ms-3">
              Divorced
            </Label>
            {formik.errors.maritalSelect && formik.touched.maritalSelect && (
              <p className="text-danger">{formik.errors.maritalSelect}</p>
            )}
          </Col>

          <Col lg={4} className="gender">
            <p>
              Gender <span className="text-danger">*</span>{" "}
            </p>

            <Input
              id="male"
              type="radio"
              name="genderSelect"
              value="male"
              checked={formik.values.genderSelect === "male"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Label for="male" className="ms-3">
              Male
            </Label>

            <Input
              id="female"
              type="radio"
              className="ms-3"
              name="genderSelect"
              value="female"
              checked={formik.values.genderSelect === "female"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Label for="female" className="ms-3">
              Female
            </Label>

            <Input
              id="other"
              type="radio"
              className="ms-3"
              name="genderSelect"
              value="other"
              checked={formik.values.genderSelect === "other"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {/* Disable the input if genderSelect is not 'other' */}
            {formik.values.genderSelect === "other" ? (
              <input
                type="text"
                className=" text-center ms-2 border-0 border-bottom"
                placeholder="Please specify"
                name="otherGender"
                value={formik.values.otherGender}
                onChange={(e) => setOtherGenderSelect(e.target.value)}
                //   disabled={genderSelect !== "other"}
              />
            ) : (
              ""
            )}
            {formik.errors.genderSelect && formik.touched.genderSelect && (
              <p className="text-danger">{formik.errors.genderSelect}</p>
            )}
          </Col>

          <Col lg={4} className="firstName">
            <Label>
              First Name<span className="text-danger">*</span>
            </Label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.firstName && formik.touched.firstName && (
              <p className="text-danger">{formik.errors.firstName}</p>
            )}
          </Col>

          <Col lg={4} className="middleName">
            <Label> Middle Name </Label>

            <Input
              id="middleName"
              name="middleName"
              type="text"
              placeholder="Middle Name"
              value={formik.values.middleName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.middleName && formik.touched.middleName && (
              <p className="text-danger">{formik.errors.middleName}</p>
            )}
          </Col>
          <Col lg={4} className="lastName">
            <Label>
              Last Name<span className="text-danger">*</span>{" "}
            </Label>

            <Input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.lastName && formik.touched.lastName && (
              <p className="text-danger">{formik.errors.lastName}</p>
            )}
          </Col>

          <Col lg={4} className="nationality">
            <Label>
              Nationality <span className="text-danger">*</span>{" "}
            </Label>
            <Input
              id="nationality"
              name="nationality"
              type="text"
              placeholder="Nationality"
              value={formik.values.nationality}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.nationality && formik.touched.nationality && (
              <p className="text-danger">{formik.errors.nationality}</p>
            )}
          </Col>
          <Col lg={4} className="dateOfBirthNepali">
            <Label>
              Date of Birth (B.S) <span className="text-danger">*</span>
            </Label>
            <NepaliDatePicker
              id="bsdate1"
              inputClassName="form-control"
              readOnly
              name="DOB"
              value={bsDate}
              onChange={(value) => {
                handleBsDate(value, 1);
                updateDateFields(value, adDate); // Update Formik fields

                setFormValues((prevValues) => ({
                  ...prevValues,
                  kyc01dob_nep: value,
                }));
              }}
              options={{ calenderLocale: "ne", valueLocale: "en" }}
            />

            {formik.errors.DOB && formik.touched.DOB && (
              <p className="text-danger">{formik.errors.DOB}</p>
            )}
          </Col>

          <Col lg={4} className="dateofBirthEnglish">
            <Label>
              Date of Birth (A.D) <span className="text-danger">*</span>
            </Label>
            <input
              id="addate1"
              type="date"
              className="form-control englishDate text dateISO"
              name="DOBN"
              value={adDate}
              onChange={(e) => {
                handleAdDate(e, 1);
                updateDateFields(bsDate, e.target.value); // Update Formik fields
              }}
            />

            {formik.errors.DOBN && formik.touched.DOBN && (
              <p className="text-danger">{formik.errors.DOBN}</p>
            )}
          </Col>
          <Col lg={4} className="education">
            <Label>
              Education <span className="text-danger">*</span>{" "}
            </Label>
            <Input
              id="education"
              name="education"
              type="text"
              value={formik.values.education}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.education && formik.touched.education && (
              <p className="text-danger">{formik.errors.education}</p>
            )}
          </Col>

          <Col lg={4} className="familySize">
            <Label> Family Size </Label>
            <Input
              id="familySize"
              name="familySize"
              type="number"
              placeholder="Number"
              value={formik.values.familySize}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.familySize && formik.touched.familySize && (
              <p className="text-danger">{formik.errors.familySize}</p>
            )}
          </Col>

          <Col lg={4} className="guardianName">
            <Label>
              Guardian's Name <span className="text-danger">*</span>{" "}
            </Label>
            <Input
              id="guardianName"
              name="guardianName"
              type="text"
              value={formik.values.guardianName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.guardianName && formik.touched.guardianName && (
              <p className="text-danger">{formik.errors.guardianName}</p>
            )}
          </Col>

          <Col lg={4} className="guardianRelationship">
            <Label>
              Guardian's Relationship <span className="text-danger">*</span>{" "}
            </Label>
            <Select
              id="guardianRelationship"
              name="guardianRelationship"
              placeholder={"Select a relation"}
              options={relationships}
              value={relationships?.find((option) => option.value === formik.values.guardianRelationship
         )}   
         onChange={(value) => {
          handleSelect("guardianRelationship", value);
        }}
        onBlur={() => {
          formik.setFieldTouched("guardianRelationship", true);
        }}
            />

            {formik.errors.guardianRelationship &&
              formik.touched.guardianRelationship && (
                <p className="text-danger">
                  {formik.errors.guardianRelationship}
                </p>
              )}
          </Col>

          <Col lg={4} className="fathersName">
            <Label>
              Father's Name <span className="text-danger">*</span>{" "}
            </Label>
            <Input
              id="fatherName"
              name="fatherName"
              type="text"
              value={formik.values.fatherName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.fatherName && formik.touched.fatherName && (
              <p className="text-danger">{formik.errors.fatherName}</p>
            )}
          </Col>

          <Col lg={4} className="mothersName">
            <Label>
              Mother's Name <span className="text-danger">*</span>{" "}
            </Label>
            <Input
              id="motherName"
              name="motherName"
              type="text"
              value={formik.values.motherName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.motherName && formik.touched.motherName && (
              <p className="text-danger">{formik.errors.motherName}</p>
            )}
          </Col>

          <Col lg={4} className="grandFathersName">
            <Label>
              Grand Father's Name <span className="text-danger">*</span>{" "}
            </Label>
            <Input
              id="grandfatherName"
              name="grandFatherName"
              type="text"
              value={formik.values.grandFatherName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.grandFatherName &&
              formik.touched.grandFatherName && (
                <p className="text-danger">{formik.errors.grandFatherName}</p>
              )}
          </Col>

          <Col lg={4} className="grandMothersName">
            <Label>
              Grand Mother's Name <span className="text-danger">*</span>{" "}
            </Label>
            <Input
              id="grandmotherName"
              name="grandMotherName"
              type="text"
              value={formik.values.grandMotherName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.grandMotherName &&
              formik.touched.grandMotherName && (
                <p className="text-danger">{formik.errors.grandMotherName}</p>
              )}
          </Col>

          {/* <Col lg={4} className="spousesName">
            <Label>
              Husband/Wife's Name <span className="text-danger">*</span>{" "}
            </Label>
            <Input
              id="wifeName"
              name="wifeName"
              type="text"
              value={formik.values.wifeName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.wifeName && formik.touched.wifeName && (
              <p className="text-danger">{formik.errors.wifeName}</p>
            )}
          </Col> */}

          {/*---------------------------------- Form Action section -------------------–––---------*/}
          <div className="d-flex justify-content-between mt-4">
            <Button
              color="light"
              onClick={() => dispatch(setKycSelectionMinor("BasicInformationMinor"))}
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
  );
};

export default PersonalDetailsMinor;
