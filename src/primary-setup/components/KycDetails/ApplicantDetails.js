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

import { useDispatch, useSelector } from "react-redux";
import { setKycSelectionIndividual } from "../../slices/selection.slice";
import { updateApplicantDetails } from "../../slices/kycDetails.slice";
import { savePersonalInfo } from "../../../slices/CentralizedKYC/IndividualKYC/thunk";

const ApplicantDetails = () => {
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
  const personalId = useSelector((state) => state.IndKyc?.applicantDetails);
  console.log("personalId ID", personalId?.id);

  const videoKYC = useSelector((state) => state.IndKyc.videoKYC);
  console.log("vedio KYC ID", videoKYC?.id);

  const formik = useFormik({
    initialValues,
    // validationSchema,
    onSubmit: (values) => {
      console.log('hfhfhfh', values)
      dispatch(updateApplicantDetails(values));
      dispatch(setKycSelectionIndividual("AddressDetails"));
      const newValues = {
        videoKycId: videoKYC?.id,
        title:
          formik.values.title === "Mr."
            ? 0
            : formik.values.title === "Mrs."
              ? 1
              : formik.values.title === "Ms."
                ? 2
                : formik.values.title === "other"
                  ? 3
                  : undefined,
        maritalStatus:
          formik.values.maritalStatus === "Single"
            ? 0
            : formik.values.maritalStatus === "Married"
              ? 1
              : formik.values.maritalStatus === "Divorced"
                ? 2
                : undefined,
        gender:
          formik.values.gender === "male"
            ? 0
            : formik.values.gender === "female"
              ? 1
              : formik.values.gender === "other"
                ? 2
                : undefined,
        firstName: values.firstName,
        middleName: values.middleName,
        lastName: values.lastName,
        nationality: values.nationality,
        dateOfBirthBS: values.dateOfBirthBS,
        dateOfBirthAD: values.dateOfBirthAD,
        education: values.education,
        familySize: values.familySize,
        fathersName: values.fathersName,
        mothersName: values.mothersName,
        grandfathersName: values.grandfathersName,
        grandmothersName: values.grandmothersName,
        husbandorWifeName: values.husbandorWifeName,

        id: personalId?.id,
      };
      dispatch(savePersonalInfo(newValues));
      console.log("Personal Details", values);
    },
  });

  const dismiss = (e) => {
    setVisiable(false);
  };
  const handleBsDate = (bsDate, index) => {
    console.log("set eng datesadasdad ");

    if (bsDate) {
      const [year, month, day] = bsDate.split("-").map(Number);

      if (
        year >= 2000 &&
        year <= 2090 &&
        month >= 1 &&
        month <= 12 &&
        day >= 1 &&
        day <= 32
      ) {
        console.log("set eng datesadasdad ");

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
    event.preventDefault();
    console.log('hiiiii index', index)
    try {
      const adDate = event.target.value;
      console.log('adddd dateeeeeeeee', adDate)
      const jsDate = new Date(adDate);
      console.log('jssss dateeeeeeeee', jsDate)

      const lowerBound = new Date('1943-04-15');
      const upperBound = new Date('2033-04-15');

      if (jsDate >= lowerBound && jsDate <= upperBound) {
        const nepaliDate = new NepaliDate(jsDate);
        const bsYear = nepaliDate.getYear();
        const bsMonth = nepaliDate.getMonth() + 1;
        const bsDay = nepaliDate.getDate();
        const formattedMonth = bsMonth.toString().padStart(2, "0");
        const formattedDay = bsDay.toString().padStart(2, "0");
        const convertedDate = `${bsYear}-${formattedMonth}-${formattedDay}`;
        setBsDate(convertedDate);
      }

      if (index === 1) {
        setAdDate(adDate);

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
    } catch (err) {
      console.log('errroroorororrrrrrrr', err)
    }
  };

  const updateDateFields = (bsDate, adDate) => {
    formik.setFieldValue("dateOfBirthBS", bsDate); // Update dateOfBirthBS
    formik.setFieldValue("dateOfBirthAD", adDate); // Update dateOfBirthAD field
  };

  useEffect(() => {
    if (bsDate && adDate) {
      updateDateFields(bsDate, adDate);
    }
  }, [bsDate, adDate]);

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
              name="title"
              value="Mr."
              checked={formik.values.title === "Mr."}
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
              name="title"
              value="Mrs"
              checked={formik.values.title === "Mrs"}
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
              name="title"
              value="Ms."
              checked={formik.values.title === "Ms."}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Label for="Ms." className="ms-2">
              Ms.
            </Label>

            <Input
              id="otherTitle"
              type="radio"
              className="ms-2"
              name="title"
              value="other"
              checked={formik.values.title === "other"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Label for="otherTitle" className="ms-2">
              Other
            </Label>

            {/* {formik.values.title === "other" ? (
              <input
                type="text"
                className=" ms-2 text-center border-0 border-bottom"
                placeholder="Please specify"
                name="otherTitle"
                value={formik.values.othertitle}
                // onChange={(e) => setOtherSelect(e.target.value)}
                onChange={formik.handleChange}
                // disabled={title !== 'other'}
              />
            ) : (
              ""
            )} */}

            {formik.errors.title && formik.touched.title && (
              <p className="text-danger">{formik.errors.title}</p>
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
              name="maritalStatus"
              value="Single"
              checked={formik.values.maritalStatus === "Single"}
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
              name="maritalStatus"
              value="Married"
              checked={formik.values.maritalStatus === "Married"}
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
              name="maritalStatus"
              value="Divorced"
              checked={formik.values.maritalStatus === "Divorced"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Label for="divorced" className="ms-3">
              Divorced
            </Label>
            {formik.errors.maritalStatus && formik.touched.maritalStatus && (
              <p className="text-danger">{formik.errors.maritalStatus}</p>
            )}
          </Col>

          <Col lg={4} className="gender">
            <p>
              Gender <span className="text-danger">*</span>{" "}
            </p>

            <Input
              id="male"
              type="radio"
              name="gender"
              value="male"
              checked={formik.values.gender === "male"}
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
              name="gender"
              value="female"
              checked={formik.values.gender === "female"}
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
              name="gender"
              value="other"
              checked={formik.values.gender === "other"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Label for="other" className="ms-3">
              Other
            </Label>

            {/* Disable the input if gender is not 'other' */}
            {/* {formik.values.gender === "other" ? (
              <input
                type="text"
                className=" text-center ms-2 border-0 border-bottom"
                placeholder="Please specify"
                name="otherGender"
                value={formik.values.otherGender}
                onChange={(e) => setOtherGenderSelect(e.target.value)}
                //   disabled={gender !== "other"}
              />
            ) : (
              ""
            )} */}
            {formik.errors.gender && formik.touched.gender && (
              <p className="text-danger">{formik.errors.gender}</p>
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
              name="dateOfBirthBS"
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

            {formik.errors.dateOfBirthBS && formik.touched.dateOfBirthBS && (
              <p className="text-danger">{formik.errors.dateOfBirthBS}</p>
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
              name="dateOfBirthAD"
              value={adDate}
              onChange={(e) => {

                handleAdDate(e, 1);

                updateDateFields(bsDate, e.target.value); // Update Formik fields
              }}
            />

            {formik.errors.dateOfBirthAD && formik.touched.dateOfBirthAD && (
              <p className="text-danger">{formik.errors.dateOfBirthAD}</p>
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

          {/* <Col lg={4} className="guardianName">
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
            <Input
              id="guardianRelationship"
              name="guardianRelationship"
              type="text"
              value={formik.values.guardianRelationship}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.guardianRelationship &&
              formik.touched.guardianRelationship && (
                <p className="text-danger">
                  {formik.errors.guardianRelationship}
                </p>
              )}
          </Col> */}

          <Col lg={4} className="fathersName">
            <Label>
              Father's Name <span className="text-danger">*</span>{" "}
            </Label>
            <Input
              id="fathersName"
              name="fathersName"
              type="text"
              value={formik.values.fathersName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.fathersName && formik.touched.fathersName && (
              <p className="text-danger">{formik.errors.fathersName}</p>
            )}
          </Col>

          <Col lg={4} className="mothersName">
            <Label>
              Mother's Name <span className="text-danger">*</span>{" "}
            </Label>
            <Input
              id="mothersName"
              name="mothersName"
              type="text"
              value={formik.values.mothersName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.mothersName && formik.touched.mothersName && (
              <p className="text-danger">{formik.errors.mothersName}</p>
            )}
          </Col>

          <Col lg={4} className="grandFathersName">
            <Label>
              Grand Father's Name <span className="text-danger">*</span>{" "}
            </Label>
            <Input
              id="grandfathersName"
              name="grandfathersName"
              type="text"
              value={formik.values.grandfathersName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.grandfathersName &&
              formik.touched.grandfathersName && (
                <p className="text-danger">{formik.errors.grandfathersName}</p>
              )}
          </Col>

          <Col lg={4} className="grandMothersName">
            <Label>
              Grand Mother's Name <span className="text-danger">*</span>{" "}
            </Label>
            <Input
              id="grandmotherName"
              name="grandmothersName"
              type="text"
              value={formik.values.grandmothersName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.grandmothersName &&
              formik.touched.grandmothersName && (
                <p className="text-danger">{formik.errors.grandmothersName}</p>
              )}
          </Col>

          <Col lg={4} className="spousesName">
            <Label>
              Husband/Wife's Name <span className="text-danger">*</span>{" "}
            </Label>
            <Input
              id="husbandorWifeName"
              name="husbandorWifeName"
              type="text"
              value={formik.values.husbandorWifeName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.husbandorWifeName &&
              formik.touched.husbandorWifeName && (
                <p className="text-danger">{formik.errors.husbandorWifeName}</p>
              )}
          </Col>

          <div className="d-flex justify-content-between mt-4">
            <Button
              color="light"
              onClick={() => {
                dispatch(setKycSelectionIndividual("BasicInfo"));
              }}
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

export default ApplicantDetails;
// onClick={() => setKycSelectionIndividual('AddressDetails')}
