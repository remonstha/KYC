import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Form,
  Input,
  CardHeader,
  Alert,
} from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import Select from "react-select";

import { useDispatch, useSelector } from "react-redux";
import { updateContactInformation } from "../../slices/kycDetails.slice";
import { setKycSelectionIndividual } from "../../slices/selection.slice";
import UserDetailsCard from "./UserDetailsCard";
import { fetchAccountTypeList } from "../../../slices/CentralizedKYC/Dropdowns/thunk";
import { saveContactInfo } from "../../../slices/CentralizedKYC/IndividualKYC/thunk";


const validationSchema = Yup.object().shape({
  mobileNo1: Yup.string().required("Mobile No. 1 is required"),
  mobileNo2: Yup.string().required("Mobile No. 2 is required"),
  faxNumber: Yup.string().required("Fax Number is required"),
  residenceLandline: Yup.string().required(
    "Landline No. (Residence) is required"
  ),
  officeLandline: Yup.string().required("Landline No. (Office) is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  socialMedia: Yup.string().required(
    "Social Media Username and Type is required"
  ),
  nonResName: Yup.string().required("Name (Non-Resident) is required"),
  nonResMobileNo1: Yup.string().required(
    "Mobile/Phone No. (Non-Resident) is required"
  ),
  address1: Yup.string().required("Address 1 (Non-Resident) is required"),
  relationship1: Yup.string().required(
    "Relationship 1 (Non-Resident) is required"
  ),
  landlineNo1: Yup.string().required(
    "Landline No. 1 (Non-Resident) is required"
  ),
  nonResName2: Yup.string().required("Name 2 (Non-Resident) is required"),
  nonResMobileNo2: Yup.string().required(
    "Mobile/Phone No. 2 (Non-Resident) is required"
  ),
  address2: Yup.string().required("Address 2 (Non-Resident) is required"),
  relationship2: Yup.string().required(
    "Relationship 2 (Non-Resident) is required"
  ),
  landlineNo2: Yup.string().required(
    "Landline No. 2 (Non-Resident) is required"
  ),
  bankName: Yup.string().required("Bank Name is required"),
  bankAccNo: Yup.string().required("Account Number is required"),
  accountType: Yup.string().required("Account Type is required"),
  facilities: Yup.string().required("Facilities is required"),
});

export default function ContactInformation() {
  const dispatch = useDispatch();

  const [selectTouched, setSelectTouched] = useState(false);

  const handleSelect = (fieldName, value) => {
    formik.setFieldValue(fieldName, value.value);
    setSelectTouched((prev) => ({
      ...prev,
      [fieldName]: true,
    }));
  };
  const contactID = useSelector((state) => state.IndKyc?.contactInformation);
  const videoKYC = useSelector((state) => state.IndKyc.videoKYC);
   // Getting Dropdown Data
 const AccountTypeList = useSelector((state) => state.Dropdown?.AccountTypeList);
 
 useEffect(() => {
  dispatch(fetchAccountTypeList());
 

}, []);

  

  const accountTypes =AccountTypeList?.map((item) => ({
    value: item.acc01uin,
    label: item.acc01title,
  }));

  const initialValues = useSelector(
    (state) => state.KycDetails.contactInformation
  );

  const formik = useFormik({
    initialValues,
    // validationSchema,
    onSubmit: (values) => {
      dispatch(updateContactInformation(values));
      dispatch(setKycSelectionIndividual("IdentificationDetails"));

     const valueToSave = {
        mobileNo1: values.mobileNo1,
        mobileNo2: values.mobileNo2,
        faxNumber: values.faxNumber,
        landlineResidence: values.residenceLandline,
        landlineOffice: values.officeLandline,
        email: values.email,
        socialMediaUsername: values.socialMedia,
        nonResident: {
          name: null,
          mobileNo: 9874,
          address: null,
          relationship: null,
          landlineNo: 2342342,
        },
        otherBank: {
          bankName: values.bankName,
          accountNumber: values.bankAccNo,
          accountType: values.accountType,
          facilities: values.facilities,
        },
        videoKycId: videoKYC?.id,
        id: contactID?.id,
      }

      dispatch(saveContactInfo(valueToSave));

      console.log("Contact Information", values);
    },
  });

  return (
    <>
    <Card className="p-0">
      <CardHeader className="px-4">
        <div className="">
          <h5 className="m-0">Contact Information</h5>
        </div>
      </CardHeader>

      <CardBody className="px-4">
        <Form onSubmit={formik.handleSubmit} className="row gx-5 gy-4">
          <Col md={4} className="firstMobileNumber">
            <label htmlFor="mobileNo1">Mobile No. 1</label>
            <input
              type="number"
              name="mobileNo1"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mobileNo1}
            />
            {formik.touched.mobileNo1 && (
              <p className="text-danger">{formik.errors.mobileNo1}</p>
            )}
          </Col>
          <Col md={4} className="secondMobileNumber">
            <label htmlFor="mobileNo2">Mobile No. 2</label>
            <input
              type="number"
              name="mobileNo2"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mobileNo2}
            />
            {formik.touched.mobileNo2 && (
              <p className="text-danger">{formik.errors.mobileNo2}</p>
            )}
          </Col>
          <Col md={4} className="faxNumber">
            <label htmlFor="faxNumber">Fax Number</label>
            <Input
              name="faxNumber"
              type="number"
              value={formik.values.faxNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.faxNumber && selectTouched === false && (
              <p className="text-danger">{formik.errors.faxNumber}</p>
            )}
          </Col>

          <Col md={4} className="residenceLandline">
            <label htmlFor="residenceLandline">
              Landline No. ( Residence )
            </label>
            <input
            
            type="number"
            name="residenceLandline"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.residenceLandline}
            />
            {formik.touched.residenceLandline &&
              formik.errors.residenceLandline && (
                <p className="text-danger">{formik.errors.residenceLandline}</p>
              )}
          </Col>
          <Col md={4} className="officeLandline">
            <label htmlFor="officeLandline">Landline No. ( Office )</label>
            <input
              type="number"
              name="officeLandline"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.officeLandline}
            />
            {formik.touched.officeLandline && formik.errors.officeLandline && (
              <p className="text-danger">{formik.errors.officeLandline}</p>
            )}
          </Col>
          <Col md={4} className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-danger">{formik.errors.email}</p>
            )}
          </Col>

          <Col md={4} className="socialMedia">
            <label htmlFor="socialMedia">Social Media Username and Type</label>
            <input
              type="text"
              name="socialMedia"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.socialMedia}
            />
            {formik.touched.socialMedia && formik.errors.socialMedia && (
              <p className="text-danger">{formik.errors.socialMedia}</p>
            )}
          </Col>

          {/*---------------------------------- For Non-Resident Person -------------------–––---------*/}
          {/* <Col lg={12} className="nonResident-label">
            <p className="py-3 fs-16 fw-semibold ">For Non-Resident Person <span className="text-muted fs-14 fw-normal">(Details of Local
            Contact Person)</span></p>
          </Col>
          <Col md={4} className="name">
            <label htmlFor="nonResName">
              Name<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="nonResName"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.nonResName}
            />
            {formik.touched.nonResName && formik.errors.nonResName && (
              <p className="text-danger">{formik.errors.nonResName}</p>
            )}
          </Col>
          <Col md={4} className="mobileNumber">
            <label htmlFor="nonResMobileNo1">
              Mobile/Phone No.<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="nonResMobileNo1"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.nonResMobileNo1}
            />
            {formik.touched.nonResMobileNo1 &&
              formik.errors.nonResMobileNo1 && (
                <p className="text-danger">{formik.errors.nonResMobileNo1}</p>
              )}
          </Col>
          <Col md={4} className="address">
            <label htmlFor="address1">
              Address<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="address1"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address1}
            />
            {formik.touched.address1 && formik.errors.address1 && (
              <p className="text-danger">{formik.errors.address1}</p>
            )}
          </Col>

          <Col md={4} className="relationship">
            <label htmlFor="relationship1">
              Relationship<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="relationship1"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.relationship1}
            />
            {formik.touched.relationship1 && formik.errors.relationship1 && (
              <p className="text-danger">{formik.errors.relationship1}</p>
            )}
          </Col>
          <Col md={4} className="landlineno">
            <label htmlFor="landlineNo1">
              Landline No.<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="landlineNo1"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.landlineNo1}
            />
            {formik.touched.landlineNo1 && formik.errors.landlineNo1 && (
              <p className="text-danger">{formik.errors.landlineNo1}</p>
            )}
          </Col> */}




          {/*---------------------------------- For Minor Person -------------------–––---------*/}

          {/* <Col lg={12} className="forMinor">
            <p className="py-3 fs-16 fw-semibold ">For Minor Person </p>
          </Col>
          <Col md={4} className="name">
            <label htmlFor="nonResName2">
              Name<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="nonResName2"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.nonResName2}
            />
            {formik.touched.nonResName2 && formik.errors.nonResName2 && (
              <p className="text-danger">{formik.errors.nonResName2}</p>
            )}
          </Col>
          <Col md={4} className="mobileNumber">
            <label htmlFor="nonResMobileNo2">
              Mobile/Phone No.<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="nonResMobileNo2"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.nonResMobileNo2}
            />
            {formik.touched.nonResMobileNo2 &&
              formik.errors.nonResMobileNo2 && (
                <p className="text-danger">{formik.errors.nonResMobileNo2}</p>
              )}
          </Col>
          <Col md={4} className="address">
            <label htmlFor="address2">
              Address<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="address2"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address2}
            />
            {formik.touched.address2 && formik.errors.address2 && (
              <p className="text-danger">{formik.errors.address2}</p>
            )}
          </Col>

          <Col md={4} className="relationship">
            <label htmlFor="relationship2">
              Relationship<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="relationship2"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.relationship2}
            />
            {formik.touched.relationship2 && formik.errors.relationship2 && (
              <p className="text-danger">{formik.errors.relationship2}</p>
            )}
          </Col>
          <Col md={4} className="landlineNumber">
            <label htmlFor="landlineNo2">
              Landline No.<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="landlineNo2"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.landlineNo2}
            />
            {formik.touched.landlineNo2 && formik.errors.landlineNo2 && (
              <p className="text-danger">{formik.errors.landlineNo2}</p>
            )}
          </Col> */}

          {/*---------------------------------- Other Bank Details -------------------–––---------*/}
          <Col lg={12} className="otherBanks mt-5">
            <p className="py-3 fs-16 fw-semibold ">Other Bank Details</p>
          </Col>
          <Col md={4} className="bankName">
            <label htmlFor="bankName">Bank Name</label>
            <input
              type="text"
              name="bankName"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.bankName}
            />
            {formik.touched.bankName && formik.errors.bankName && (
              <p className="text-danger">{formik.errors.bankName}</p>
            )}
          </Col>
          <Col md={4} className="accountNumber">
            <label htmlFor="bankAccNo">Account Number</label>
            <input
              type="text"
              name="bankAccNo"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.bankAccNo}
            />
            {formik.touched.bankAccNo && formik.errors.bankAccNo && (
              <p className="text-danger">{formik.errors.bankAccNo}</p>
            )}
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

          <Col md={12} className="facilities">
            <label htmlFor="facilities">Facilities</label>
            <textarea
              type="text"
              name="facilities"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.facilities}
            />
            {formik.touched.facilities && formik.errors.facilities && (
              <p className="text-danger">{formik.errors.facilities}</p>
            )}
          </Col>

          <div className="d-flex justify-content-between mt-4">
            <Button
              color="light"
              onClick={() =>
                dispatch(setKycSelectionIndividual("AddressDetails"))
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
}


