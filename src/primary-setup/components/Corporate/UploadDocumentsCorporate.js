import React, { useState, useEffect } from "react";
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
import { setKycSelectionCorporate } from "../../slices/selection.slice";
import { updateUploadDocuments } from "../../slices/kycCorporate.slice";

export default function UploadDocumentsCorporate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = useSelector(
    (state) => state.KycCorporate.uploadDocuments
  );

  const reduxApplicantPhoto = useSelector(state => state.KycCorporate.uploadDocuments.applicantPhoto);
  const reduxRegistrationFront = useSelector(state => state.KycCorporate.uploadDocuments.registrationFront);
  const reduxRegistrationBack = useSelector(state => state.KycCorporate.uploadDocuments.registrationBack);
  const reduxOrganizaitonStamp = useSelector(state => state.KycCorporate.uploadDocuments.organizaitonStamp);
  const reduxPanRegistration = useSelector(state => state.KycCorporate.uploadDocuments.panRegistration);
  const reduxBoardResolution = useSelector(state => state.KycCorporate.uploadDocuments.boardResolution);
  const reduxMemorandumAndArticles = useSelector(state => state.KycCorporate.uploadDocuments.memorandumAndArticles);
  const reduxCitizenshipOfAuthorized = useSelector(state => state.KycCorporate.uploadDocuments.citizenshipOfAuthorized);

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
        dispatch(updateUploadDocuments(values));
      navigate("/confirmsubmit");
    },
  });

  const [applicantPhoto, setApplicantPhoto] = useState(reduxApplicantPhoto || null);
  const [registrationFront, setRegistrationFront] = useState(reduxRegistrationFront || null);
  const [registrationBack, setRegistrationBack] = useState(reduxRegistrationBack || null);
  const [organizationStamp, setOrganizationStamp] = useState(reduxOrganizaitonStamp || null);
  const [panRegistration, setPanRegistration] = useState(reduxPanRegistration || null);
  const [boardResolution, setBoardResolution] = useState(reduxBoardResolution || null);
  const [memorandumAndArticles, setMemorandumAndArticles] = useState(reduxMemorandumAndArticles || null);
  const [citizenshipOfAuthorized, setCitizenshipOfAuthorized] = useState(reduxCitizenshipOfAuthorized || null);

  useEffect(() => {
    formik.setFieldValue('applicantPhoto', applicantPhoto);
    formik.setFieldValue('registrationFront', registrationFront);
    formik.setFieldValue('registrationBack', registrationBack);
    formik.setFieldValue('organizationStamp', organizationStamp);
    formik.setFieldValue('panRegistration', panRegistration);
    formik.setFieldValue('boardResolution', boardResolution);
    formik.setFieldValue('memorandumAndArticles', memorandumAndArticles);
    formik.setFieldValue('citizenshipOfAuthorized', citizenshipOfAuthorized);
  },[citizenshipOfAuthorized, applicantPhoto, registrationFront, registrationBack, organizationStamp, panRegistration, boardResolution, memorandumAndArticles]);

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

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleApplicantPhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setApplicantPhoto(file);
    }
  };

  const handleApplicantPhotoDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setApplicantPhoto(file);
    }
  };

  const handleRegistrationFrontChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setRegistrationFront(file);
    }
  };

  const handleRegistrationFrontDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setRegistrationFront(file);
    }
  };

  const handleRegistrationBackChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setRegistrationBack(file);
    }
  };

  const handleRegistrationBackDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setRegistrationBack(file);
    }
  };

  const handleOrganizationStampChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setOrganizationStamp(file);
    }
  };

  const handleOrganizationStampDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setOrganizationStamp(file);
    }
  };

  const handlePanRegistrationChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPanRegistration(file);
    }
  };

  const handlePanRegistrationDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setPanRegistration(file);
    }
  };

  const handleBoardResolutionChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBoardResolution(file);
    }
  };

  const handleBoardResolutionDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setBoardResolution(file);
    }
  };

  const handleMemorandumAndArticlesChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMemorandumAndArticles(file);
    }
  };

  const handleMemorandumAndArticlesDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setMemorandumAndArticles(file);
    }
  };

  const handleCitizenshipOfAuthorizedChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCitizenshipOfAuthorized(file);
    }
  };

  const handleCitizenshipOfAuthorizedDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setCitizenshipOfAuthorized(file);
    }
  };

  return (
    <Card className="p-0">
    <CardHeader className="px-4">
      <div className="">
        <h5 className="m-0">Upload Documents</h5>
      </div>
    </CardHeader>

    <CardBody className="px-4">
        <h5 className="fw-bold mt-3">Personal Documents</h5>

        <Form
          className="mt-4 p-2 d-flex gap-4 flex-wrap"
          onSubmit={formik.handleSubmit}
        >
          <div>
            <FormGroup
              onDragOver={handleDragOver}
              onDrop={handleApplicantPhotoDrop}
              style={imageBoxStyle}
              className="d-flex justify-content-center align-items-center bg-light"
            >
              <input
                type="file"
                id="photoInputBox"
                accept="image/*"
                onChange={handleApplicantPhotoChange}
                hidden
              />

              {applicantPhoto || reduxApplicantPhoto ? (
                <>
                  <img
                    src={URL.createObjectURL(applicantPhoto || reduxApplicantPhoto)}
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
                  Applicant's Photo
                </label>
              )}
            </FormGroup>
            <Label for="photoInputBox" className="text-muted cursor-pointer">
              {applicantPhoto || reduxApplicantPhoto ? "Applicant's Photo" : null}
            </Label>
          </div>

          <div>
            <FormGroup
              onDragOver={handleDragOver}
              onDrop={handleRegistrationFrontDrop}
              style={imageBoxStyle}
              className="d-flex justify-content-center align-items-center bg-light"
            >
              <input
                type="file"
                id="registrationFrontInputBox"
                accept="image/*, application/pdf"
                onChange={handleRegistrationFrontChange}
                hidden
              />

              {registrationFront || reduxRegistrationFront ? (
                <>
                  <img
                    src={URL.createObjectURL(registrationFront || reduxRegistrationFront)}
                    alt="uploaded"
                    style={{
                      opacity: "0.7",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />

                  <Label
                    for="registrationFrontInputBox"
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
                  for="registrationFrontInputBox"
                  style={{ cursor: "pointer" }}
                  className="fw-medium text-muted"
                >
                  Registration Front
                </label>
              )}
            </FormGroup>
            <Label
              for="registrationFrontInputBox"
              className="text-muted cursor-pointer"
            >
              {registrationFront || reduxRegistrationFront ? "Registration Front" : null}
            </Label>
          </div>

          <div>
            <FormGroup
              onDragOver={handleDragOver}
              onDrop={handleRegistrationBackDrop}
              style={imageBoxStyle}
              className="d-flex justify-content-center align-items-center bg-light"
            >
              <input
                type="file"
                id="registrationBackInputBox"
                accept="image/*, application/pdf"
                onChange={handleRegistrationBackChange}
                hidden
              />

              {registrationBack || reduxRegistrationBack ? (
                <>
                  <img
                    src={URL.createObjectURL(registrationBack || reduxRegistrationBack)}
                    alt="uploaded"
                    style={{
                      opacity: "0.7",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />

                  <Label
                    for="registrationBackInputBox"
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
                  for="registrationBackInputBox"
                  style={{ cursor: "pointer" }}
                  className="fw-medium text-muted"
                >
                  Registration Back
                </label>
              )}
            </FormGroup>
            <Label
              for="registrationBackInputBox"
              className="text-muted cursor-pointer"
            >
              {registrationBack || reduxRegistrationBack ? "Registration Back" : null}
            </Label>
          </div>

          <div>
            <FormGroup
              onDragOver={handleDragOver}
              onDrop={handleOrganizationStampDrop}
              style={imageBoxStyle}
              className="d-flex justify-content-center align-items-center bg-light"
            >
              <input
                type="file"
                id="organizationStampInputBox"
                accept="image/*, application/pdf"
                onChange={handleOrganizationStampChange}
                hidden
              />

              {organizationStamp || reduxOrganizaitonStamp ? (
                <>
                  <img
                    src={URL.createObjectURL(organizationStamp || reduxOrganizaitonStamp)}
                    alt="uploaded"
                    style={{
                      opacity: "0.7",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />

                  <Label
                    for="organizationStampInputBox"
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
                  for="organizationStampInputBox"
                  style={{ cursor: "pointer" }}
                  className="fw-medium text-muted"
                >
                  Organization Stamp
                </label>
              )}
            </FormGroup>
            <Label
              for="organizationStampInputBox"
              className="text-muted cursor-pointer"
            >
              {organizationStamp || reduxOrganizaitonStamp ? "Organization Stamp" : null}
            </Label>
          </div>

          <div>
            <FormGroup
              onDragOver={handleDragOver}
              onDrop={handlePanRegistrationDrop}
              style={imageBoxStyle}
              className="d-flex justify-content-center align-items-center bg-light"
            >
              <input
                type="file"
                id="panRegistrationInputBox"
                accept="image/*, application/pdf"
                onChange={handlePanRegistrationChange}
                hidden
              />

              {panRegistration || reduxPanRegistration ? (
                <>
                  <img
                    src={URL.createObjectURL(panRegistration || reduxPanRegistration)}
                    alt="uploaded"
                    style={{
                      opacity: "0.7",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />

                  <Label
                    for="panRegistrationInputBox"
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
                  for="panRegistrationInputBox"
                  style={{ cursor: "pointer" }}
                  className="fw-medium text-muted"
                >
                  PAN Registration
                </label>
              )}
            </FormGroup>
            <Label
              for="panRegistrationInputBox"
              className="text-muted cursor-pointer"
            >
              {panRegistration || reduxPanRegistration ? "PAN Registration" : null}
            </Label>
          </div>

          <div>
            <FormGroup
              onDragOver={handleDragOver}
              onDrop={handleBoardResolutionDrop}
              style={imageBoxStyle}
              className="d-flex justify-content-center align-items-center bg-light"
            >
              <input
                type="file"
                id="boardResolutionInputBox"
                accept="image/*, application/pdf"
                onChange={handleBoardResolutionChange}
                hidden
              />

              {boardResolution || reduxBoardResolution ? (
                <>
                  <img
                    src={URL.createObjectURL(boardResolution || reduxBoardResolution)}
                    alt="uploaded"
                    style={{
                      opacity: "0.7",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />

                  <Label
                    for="boardResolutionInputBox"
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
                  for="boardResolutionInputBox"
                  style={{ cursor: "pointer" }}
                  className="fw-medium text-muted"
                >
                  Board Resolution
                </label>
              )}
            </FormGroup>
            <Label
              for="boardResolutionInputBox"
              className="text-muted cursor-pointer"
            >
              {boardResolution || reduxBoardResolution ? "Board Resolution" : null}
            </Label>
          </div>

          <div>
            <FormGroup
              onDragOver={handleDragOver}
              onDrop={handleMemorandumAndArticlesDrop}
              style={imageBoxStyle}
              className="d-flex justify-content-center align-items-center bg-light"
            >
              <input
                type="file"
                id="memorandumAndArticlesInputBox"
                accept="image/*, application/pdf"
                onChange={handleMemorandumAndArticlesChange}
                hidden
              />

              {memorandumAndArticles || reduxMemorandumAndArticles ? (
                <>
                  <img
                    src={URL.createObjectURL(memorandumAndArticles || reduxMemorandumAndArticles)}
                    alt="uploaded"
                    style={{
                      opacity: "0.7",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />

                  <Label
                    for="memorandumAndArticlesInputBox"
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
                  for="memorandumAndArticlesInputBox"
                  style={{ cursor: "pointer" }}
                  className="fw-medium text-muted"
                >
                  Memorandum and Articles
                </label>
              )}
            </FormGroup>
            <Label
              for="memorandumAndArticlesInputBox"
              className="text-muted cursor-pointer"
            >
              {memorandumAndArticles || reduxMemorandumAndArticles ? "Memorandum and Articles" : null}
            </Label>
          </div>

          <div>
            <FormGroup
              onDragOver={handleDragOver}
              onDrop={handleCitizenshipOfAuthorizedDrop}
              style={imageBoxStyle}
              className="d-flex justify-content-center align-items-center bg-light"
            >
              <input
                type="file"
                id="citizenshipOfAuthorizedInputBox"
                accept="image/*, application/pdf"
                onChange={handleCitizenshipOfAuthorizedChange}
                hidden
              />

              {citizenshipOfAuthorized || reduxCitizenshipOfAuthorized ? (
                <>
                  <img
                    src={URL.createObjectURL(citizenshipOfAuthorized || reduxCitizenshipOfAuthorized )}
                    alt="uploaded"
                    style={{
                      opacity: "0.7",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />

                  <Label
                    for="citizenshipOfAuthorizedInputBox"
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
                  for="citizenshipOfAuthorizedInputBox"
                  style={{ cursor: "pointer" }}
                  className="fw-medium text-muted"
                >
                  Citizenship of Authorized Signatories
                </label>
              )}
            </FormGroup>
            <Label
              for="citizenshipOfAuthorizedInputBox"
              className="text-muted cursor-pointer"
            >
              {citizenshipOfAuthorized || reduxCitizenshipOfAuthorized
                ? "Citizenship of Authorized Signatories"
                : null}
            </Label>
          </div>
          <Col sm={12} className="d-flex justify-content-between mt-4">
            <Button
              color="light"
              onClick={() => dispatch(setKycSelectionCorporate("recommender"))}
            >
              Back
            </Button>
            <Button
              color="primary"
              type="submit"
            >
              Next
            </Button>
          </Col>
        </Form>
      </CardBody>
    </Card>
  );
}
