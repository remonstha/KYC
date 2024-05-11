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
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setKycSelectionMinor } from "../../slices/selection.slice";
import UserDetailsCard from "./UserDetailsCard";
import {  updateUploadDocuments } from "../../slices/KycMinor.slice";

export default function UploadDocumentsMinor() {

  const imageBoxStyle = {
    border: "1px solid #E9EBEC",
    background: "#F5F5F5",
    // padding: "20px",
    textAlign: "center",
    cursor: "pointer",
    width: "15vw",
    minWidth: "150px",
    height: "20vh",
    overflow: "hidden",
    position: "relative",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = useSelector(state => state.KycMinor.uploadDocuments);

  const reduxApplicantPassportSizePhoto = useSelector(state => state.KycMinor.uploadDocuments.applicantPassportSizePhoto);
  const reduxApplicantCitizenshipFrontPhoto = useSelector(state => state.KycMinor.uploadDocuments.applicantCitizenshipFrontPhoto);
  const reduxApplicantCitizenshipBackPhoto = useSelector(state => state.KycMinor.uploadDocuments.applicantCitizenshipBackPhoto);
  const reduxSignatureOfAccountHolder = useSelector(state => state.KycMinor.uploadDocuments.signatureOfAccountHolder);
  const reduxApplicantPassportFront = useSelector(state => state.KycMinor.uploadDocuments.applicantPassportFront);
  const reduxApplicantPassportBack = useSelector(state => state.KycMinor.uploadDocuments.applicantPassportBack);
  const reduxNomineePassportSizePhoto = useSelector(state => state.KycMinor.uploadDocuments.nomineePassportSizePhoto);
  const reduxRightThumbPrint = useSelector(state => state.KycMinor.uploadDocuments.rightThumbPrint);
  const reduxLeftThumbPrint = useSelector(state => state.KycMinor.uploadDocuments.leftThumbPrint);
  const reduxNomineeIdentificationFront = useSelector(state => state.KycMinor.uploadDocuments.nomineeIdentificationFront);
  const reduxNomineeIdentificationBack = useSelector(state => state.KycMinor.uploadDocuments.nomineeIdentificationBack);

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      dispatch(updateUploadDocuments(values));
      dispatch(setKycSelectionMinor("FormVerification"));
    },
  });



  const [applicantPassportSizePhoto, setApplicantPassportSizePhoto] =  useState(reduxApplicantPassportSizePhoto || null);
  const [applicantCitizenshipFrontPhoto, setApplicantCitizenshipFrontPhoto] =  useState(reduxApplicantCitizenshipFrontPhoto || null);
  const [signatureOfAccountHolder, setSignatureOfAccountHolder] = useState(reduxSignatureOfAccountHolder || null);
  const [applicantCitizenshipBackPhoto, setApplicantCitizenshipBackPhoto] = useState(reduxApplicantCitizenshipBackPhoto || null);
  const [applicantPassportFront, setApplicantPassportFront] = useState(reduxApplicantPassportFront || null);
  const [applicantPassportBack, setApplicantPassportBack] = useState(reduxApplicantPassportBack || null);
  const [nomineePassportSizePhoto, setNomineePassportSizePhoto] = useState(reduxNomineePassportSizePhoto || null);
  const [rightThumbPrint, setRightThumbPrint] = useState(reduxRightThumbPrint || null);
  const [leftThumbPrint, setLeftThumbPrint] = useState(reduxLeftThumbPrint || null);
  const [nomineeIdentificationFront, setNomineeIdentificationFront] = useState(reduxNomineeIdentificationFront || null);
  const [nomineeIdentificationBack, setNomineeIdentificationBack] = useState(reduxNomineeIdentificationBack || null);

  useEffect(() => {
    formik.setFieldValue('applicantPassportSizePhoto', applicantPassportSizePhoto);
    formik.setFieldValue('applicantCitizenshipFrontPhoto', applicantCitizenshipFrontPhoto);
    formik.setFieldValue('applicantCitizenshipBackPhoto', applicantCitizenshipBackPhoto);
    formik.setFieldValue('signatureOfAccountHolder', signatureOfAccountHolder);
    formik.setFieldValue('applicantPassportFront', applicantPassportFront);
    formik.setFieldValue('applicantPassportBack', applicantPassportBack);
    formik.setFieldValue('nomineePassportSizePhoto', nomineePassportSizePhoto);
    formik.setFieldValue('rightThumbPrint', rightThumbPrint);
    formik.setFieldValue('leftThumbPrint', leftThumbPrint);
    formik.setFieldValue('nomineeIdentificationFront', nomineeIdentificationFront);
    formik.setFieldValue('nomineeIdentificationBack', nomineeIdentificationBack);
  },[applicantPassportSizePhoto, applicantCitizenshipFrontPhoto, applicantCitizenshipBackPhoto, signatureOfAccountHolder, applicantPassportFront, applicantPassportBack, nomineePassportSizePhoto, rightThumbPrint, leftThumbPrint, nomineeIdentificationFront, nomineeIdentificationBack]);


  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleApplicantPassportSizePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setApplicantPassportSizePhoto(file);
    }
  };

  const handleApplicantPassportSizePhotoDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setApplicantPassportSizePhoto(file);
    }
  };
  const handleApplicantCitizenshipFrontPhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setApplicantCitizenshipFrontPhoto(file);
    }
  };

  const handleApplicantCitizenshipFrontPhotoDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setApplicantCitizenshipFrontPhoto(file);
    }
  };

  const handleApplicantCitizenshipBackPhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setApplicantCitizenshipBackPhoto(file);
    }
  };

  const handleApplicantCitizenshipBackPhotoDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setApplicantCitizenshipBackPhoto(file);
    }
  };

  const handleSignatureOfAccountHolderChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSignatureOfAccountHolder(file);
    }
  };

  const handleSignatureOfAccountHolderDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setSignatureOfAccountHolder(file);
    }
  };

  const handleApplicantPassportFrontChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setApplicantPassportFront(file);
    }
  };

  const handleApplicantPassportFrontDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setApplicantPassportFront(file);
    }
  };

  const handleApplicantPassportBackChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setApplicantPassportBack(file);
    }
  };

  const handleApplicantPassportBackDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setApplicantPassportBack(file);
    }
  };

  const handleNomineePassportSizePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNomineePassportSizePhoto(file);
    }
  };

  const handleNomineePassportSizePhotoDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setNomineePassportSizePhoto(file);
    }
  };

  const handleRightThumbPrintChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setRightThumbPrint(file);
    }
  };

  const handleRightThumbPrintDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setRightThumbPrint(file);
    }
  };

  const handleLeftThumbPrintChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLeftThumbPrint(file);
    }
  };

  const handleLeftThumbPrintDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setLeftThumbPrint(file);
    }
  };

  const handleNomineeIdentificationFrontChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNomineeIdentificationFront(file);
    }
  };

  const handleNomineeIdentificationFrontDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setNomineeIdentificationFront(file);
    }
  };

  const handleNomineeIdentificationBackChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNomineeIdentificationBack(file);
    }
  };

  const handleNomineeIdentificationBackDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setNomineeIdentificationBack(file);
    }
  };

  return (
    <>
    <UserDetailsCard/>
    <Card className="p-0">
      <CardHeader className="px-4">
        <div className="">
          <h5 className="m-0">Upload Documents</h5>
        </div>
      </CardHeader>

      <CardBody className="px-4">
        <h5 className="fw-bold mt-3">Personal Documents</h5>

        <Col md={12}>
                <div
                  className="p-3 px-5 text-primary fs-14 rounded-2 my-5"
                  style={{
                    background: "linear-gradient(100deg, rgba(28, 209, 100, 0.12) 37.99%, rgba(32, 133, 211, 0.12) 63.57%, rgba(60, 104, 216, 0.12) 75.64%, rgba(33, 143, 195, 0.12) 100.37%)",
                    border: "1px solid #C5D7F7",

                  }}
                >
                  Note: Click on the box or drag and drop the files to upload the documents.
                </div>
              </Col>

        <Form
          className="mt-4 p-2 d-flex gap-4 flex-wrap"
          onSubmit={formik.handleSubmit}
        >
          <div>
            <FormGroup
              onDragOver={handleDragOver}
              onDrop={handleApplicantPassportSizePhotoDrop}
              style={imageBoxStyle}
              className="d-flex justify-content-center align-items-center bg-light"
            >
              <input
                type="file"
                id="photoInputBox"
                name='applicantPassportSizePhoto'
                accept="image/*"
                onChange={handleApplicantPassportSizePhotoChange}
                hidden
              />

              {reduxApplicantPassportSizePhoto || applicantPassportSizePhoto ? (
                <>
                  <img
                    src={URL.createObjectURL(applicantPassportSizePhoto || reduxApplicantPassportSizePhoto )}
                    alt="uploaded"
                    style={{
                      opacity: "0.7",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />

                  <Label
                    for="photoInputBox"
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
                </>
              ) : (
                <label
                  for="photoInputBox"
                  style={{ cursor: "pointer" }}
                  className="fw-medium text-muted"
                >
                  Applicant's Passport size photo
                </label>
              )}
            </FormGroup>
            <Label for="photoInputBox" className="text-muted cursor-pointer">
              {reduxApplicantPassportSizePhoto || applicantPassportSizePhoto
                ? "Applicant's Passport size photo"
                : null}
            </Label>
          </div>

          <div>
            <FormGroup
              onDragOver={handleDragOver}
              onDrop={handleApplicantCitizenshipFrontPhotoDrop}
              style={imageBoxStyle}
              className="d-flex justify-content-center align-items-center bg-light"
            >
              <input
                type="file"
                id="citizenshipFront"
                accept="image/*"
                onChange={handleApplicantCitizenshipFrontPhotoChange}
                hidden
              />

              {reduxApplicantCitizenshipFrontPhoto || applicantCitizenshipFrontPhoto ? (
                <>
                  <img
                    src={URL.createObjectURL( applicantCitizenshipFrontPhoto || reduxApplicantCitizenshipFrontPhoto)}
                    alt="uploaded"
                    style={{
                      opacity: "0.7",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />

                  <Label
                    for="citizenshipFront"
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
                </>
              ) : (
                <label
                  for="citizenshipFront"
                  style={{ cursor: "pointer" }}
                  className="fw-medium text-muted"
                >
                  Applicant's Citizenship Front
                </label>
              )}
            </FormGroup>
            <Label for="citizenshipFront" className="text-muted cursor-pointer">
              {reduxApplicantCitizenshipFrontPhoto || applicantCitizenshipFrontPhoto
                ? "Applicant's Citizenship Front"
                : null}
            </Label>
          </div>

          <div>
            <FormGroup
              onDragOver={handleDragOver}
              onDrop={handleApplicantCitizenshipBackPhotoDrop}
              style={imageBoxStyle}
              className="d-flex justify-content-center align-items-center bg-light"
            >
              <input
                type="file"
                id="applicantCitizenshipBackPhotoUrl"
                accept="image/*"
                onChange={handleApplicantCitizenshipBackPhotoChange}
                hidden
              />

              {reduxApplicantCitizenshipBackPhoto || applicantCitizenshipBackPhoto ? (
                <>
                  <img
                    src={URL.createObjectURL(applicantCitizenshipBackPhoto || reduxApplicantCitizenshipBackPhoto)}
                    alt="uploaded"
                    style={{
                      opacity: "0.7",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />

                  <Label
                    for="applicantCitizenshipBackPhotoUrl"
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
                </>
              ) : (
                <label
                  for="applicantCitizenshipBackPhotoUrl"
                  style={{ cursor: "pointer" }}
                  className="fw-medium text-muted"
                >
                  Applicant's Citizenship Back
                </label>
              )}
            </FormGroup>
            <Label
              for="applicantCitizenshipBackPhotoUrl"
              className="text-muted cursor-pointer"
            >
              {reduxApplicantCitizenshipBackPhoto || applicantCitizenshipBackPhoto
                ? "Applicant's Citizenship Back"
                : null}
            </Label>
          </div>

          <div>
            <FormGroup
              onDragOver={handleDragOver}
              onDrop={handleSignatureOfAccountHolderDrop}
              style={imageBoxStyle}
              className="d-flex justify-content-center align-items-center bg-light"
            >
              <input
                type="file"
                id="signatureOfAccountHolder"
                accept="image/*"
                onChange={handleSignatureOfAccountHolderChange}
                hidden
              />

              {reduxSignatureOfAccountHolder || signatureOfAccountHolder ? (
                <>
                  <img
                    src={URL.createObjectURL(signatureOfAccountHolder || reduxSignatureOfAccountHolder )}
                    alt="uploaded"
                    style={{
                      opacity: "0.7",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />

                  <Label
                    for="signatureOfAccountHolder"
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
                </>
              ) : (
                <label
                  for="signatureOfAccountHolder"
                  style={{ cursor: "pointer" }}
                  className="fw-medium text-muted"
                >
                  Signature of Account Holder
                </label>
              )}
            </FormGroup>
            <Label
              for="signatureOfAccountHolder"
              className="text-muted cursor-pointer"
            >
              {reduxSignatureOfAccountHolder || signatureOfAccountHolder ? "Signature of Account Holder" : null}
            </Label>
          </div>

          <div>
            <FormGroup
              onDragOver={handleDragOver}
              onDrop={handleApplicantPassportFrontDrop}
              style={imageBoxStyle}
              className="d-flex justify-content-center align-items-center bg-light"
            >
              <input
                type="file"
                id="ApplicantPassportFront"
                accept="image/*"
                onChange={handleApplicantPassportFrontChange}
                hidden
              />

              {reduxApplicantPassportFront ||applicantPassportFront ? (
                <>
                  <img
                    src={URL.createObjectURLapplicantPassportFront || (reduxApplicantPassportFront )}
                    alt="uploaded"
                    style={{
                      opacity: "0.7",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />

                  <Label
                    for="ApplicantPassportFront"
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
                </>
              ) : (
                <label
                  for="ApplicantPassportFront"
                  style={{ cursor: "pointer" }}
                  className="fw-medium text-muted"
                >
                  Applicant's Passport Front
                </label>
              )}
            </FormGroup>
            <Label
              for="ApplicantPassportFront"
              className="text-muted cursor-pointer"
            >
              {reduxApplicantPassportFront || applicantPassportFront ? "Applicant's passport front" : null}
            </Label>
          </div>

          <div>
            <FormGroup
              onDragOver={handleDragOver}
              onDrop={handleApplicantPassportBackDrop}
              style={imageBoxStyle}
              className="d-flex justify-content-center align-items-center bg-light"
            >
              <input
                type="file"
                id="ApplicantPassportBack"
                accept="image/*"
                onChange={handleApplicantPassportBackChange}
                hidden
              />

              {reduxApplicantPassportBack || applicantPassportBack ? (
                <>
                  <img
                    src={URL.createObjectURL(applicantPassportBack || reduxApplicantPassportBack )}
                    alt="uploaded"
                    style={{
                      opacity: "0.7",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />

                  <Label
                    for="ApplicantPassportBack"
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
                </>
              ) : (
                <label
                  for="ApplicantPassportBack"
                  style={{ cursor: "pointer" }}
                  className="fw-medium text-muted"
                >
                  Applicant's Passport Back
                </label>
              )}
            </FormGroup>
            <Label
              for="ApplicantPassportBack"
              className="text-muted cursor-pointer"
            >
              {reduxApplicantPassportBack || applicantPassportBack ? "Applicant's Passport Back" : null}
            </Label>
          </div>

          <Col sm={12}>
            <h5>Nominee Documents</h5>
          </Col>

          <div>
            <FormGroup
              onDragOver={handleDragOver}
              onDrop={handleNomineePassportSizePhotoDrop}
              style={imageBoxStyle}
              className="d-flex justify-content-center align-items-center bg-light"
            >
              <input
                type="file"
                id="NomineePassportSizePhoto"
                accept="image/*"
                onChange={handleNomineePassportSizePhotoChange}
                hidden
              />

              {reduxNomineePassportSizePhoto || nomineePassportSizePhoto ? (
                <>
                  <img
                    src={URL.createObjectURL(nomineePassportSizePhoto || reduxNomineePassportSizePhoto)}
                    alt="uploaded"
                    style={{
                      opacity: "0.7",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />

                  <Label
                    for="NomineePassportSizePhoto"
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
                </>
              ) : (
                <label
                  for="NomineePassportSizePhoto"
                  style={{ cursor: "pointer" }}
                  className="fw-medium text-muted"
                >
                  Nominee's Passport size photo
                </label>
              )}
            </FormGroup>
            <Label
              for="NomineePassportSizePhoto"
              className="text-muted cursor-pointer"
            >
              {reduxNomineePassportSizePhoto || nomineePassportSizePhoto
                ? "Nominee's Passport Size Photo"
                : null}
            </Label>
          </div>

          <div>
            <FormGroup
              onDragOver={handleDragOver}
              onDrop={handleRightThumbPrintDrop}
              style={imageBoxStyle}
              className="d-flex justify-content-center align-items-center bg-light"
            >
              <input
                type="file"
                id="RightThumbPrint"
                accept="image/*"
                onChange={handleRightThumbPrintChange}
                hidden
              />

              {reduxRightThumbPrint || rightThumbPrint ? (
                <>
                  <img
                    src={URL.createObjectURL(rightThumbPrint || reduxRightThumbPrint )}
                    alt="uploaded"
                    style={{
                      opacity: "0.7",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />

                  <Label
                    for="RightThumbPrint"
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
                </>
              ) : (
                <label
                  for="RightThumbPrint"
                  style={{ cursor: "pointer" }}
                  className="fw-medium text-muted"
                >
                  Right Thumb's Print
                </label>
              )}
            </FormGroup>
            <Label for="RightThumbPrint" className="text-muted cursor-pointer">
              {reduxRightThumbPrint || rightThumbPrint ? "Right Thumb's print" : null}
            </Label>
          </div>

          <div>
            <FormGroup
              onDragOver={handleDragOver}
              onDrop={handleLeftThumbPrintDrop}
              style={imageBoxStyle}
              className="d-flex justify-content-center align-items-center bg-light"
            >
              <input
                type="file"
                id="LeftThumbPrint"
                accept="image/*"
                onChange={handleLeftThumbPrintChange}
                hidden
              />

              {reduxLeftThumbPrint || leftThumbPrint ? (
                <>
                  <img
                    src={URL.createObjectURL(leftThumbPrint || reduxLeftThumbPrint)}
                    alt="uploaded"
                    style={{
                      opacity: "0.7",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />

                  <Label
                    for="LeftThumbPrint"
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
                </>
              ) : (
                <label
                  for="LeftThumbPrint"
                  style={{ cursor: "pointer" }}
                  className="fw-medium text-muted"
                >
                  Left Thumb's Print
                </label>
              )}
            </FormGroup>
            <Label for="LeftThumbPrint" className="text-muted cursor-pointer">
              {reduxLeftThumbPrint || leftThumbPrint ? "Left Thumb's Print" : null}
            </Label>
          </div>

          <div>
            <FormGroup
              onDragOver={handleDragOver}
              onDrop={handleNomineeIdentificationFrontDrop}
              style={imageBoxStyle}
              className="d-flex justify-content-center align-items-center bg-light"
            >
              <input
                type="file"
                id="NomineeIdentificationFront"
                accept="image/*"
                onChange={handleNomineeIdentificationFrontChange}
                hidden
              />

              {reduxNomineeIdentificationFront || nomineeIdentificationFront ? (
                <>
                  <img
                    src={URL.createObjectURL(nomineeIdentificationFront || reduxNomineeIdentificationFront)}
                    alt="uploaded"
                    style={{ objectFit: "cover", width: "100%" }}
                  />

                  <Label
                    for="NomineeIdentificationFront"
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
                </>
              ) : (
                <label
                  for="NomineeIdentificationFront"
                  style={{ cursor: "pointer" }}
                  className="fw-medium text-muted"
                >
                  Nominee's Identification Front
                </label>
              )}
            </FormGroup>
            <Label
              for="NomineeIdentificationFront"
              className="text-muted cursor-pointer"
            >
              {reduxNomineeIdentificationFront || nomineeIdentificationFront
                ? "Nominee's Identificatoin Front"
                : null}
            </Label>
          </div>

          <div>
            <FormGroup
              onDragOver={handleDragOver}
              onDrop={handleNomineeIdentificationBackDrop}
              style={imageBoxStyle}
              className="d-flex justify-content-center align-items-center bg-light"
            >
              <input
                type="file"
                id="NomineeIdentificationBack"
                accept="image/*"
                onChange={handleNomineeIdentificationBackChange}
                hidden
              />

              {reduxNomineeIdentificationBack || nomineeIdentificationBack ? (
                <>
                  <img
                    src={URL.createObjectURL(nomineeIdentificationBack || reduxNomineeIdentificationBack )}
                    alt="uploaded"
                    style={{
                      opacity: "0.7",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />

                  <Label
                    for="NomineeIdentificationBack"
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
                </>
              ) : (
                <label
                  for="NomineeIdentificationBack"
                  style={{ cursor: "pointer" }}
                  className="fw-medium text-muted"
                >
                  Nominee's Identification Back
                </label>
              )}
            </FormGroup>
            <Label
              for="NomineeIdentificationBack"
              className="text-muted cursor-pointer"
            >
              {reduxNomineeIdentificationBack || nomineeIdentificationBack
                ? "Nominee's Identification Back"
                : null}
            </Label>
          </div>

          <Col sm={12} className="d-flex justify-content-between mt-4">
            <Button
              color="light"
              onClick={() => dispatch(setKycSelectionMinor("RecommenderMinor"))}
            >
              Back
            </Button>
            <Button color="primary" type="submit">
              Next
            </Button>
          </Col>
        </Form>
      </CardBody>
    </Card>
    </>
  );
}
