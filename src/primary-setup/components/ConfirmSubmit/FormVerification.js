import React, { useState, useEffect, useRef } from "react";
import {
  Card,
  Row,
  Col,
  CardBody,
  CardHeader,
  Button,
  Container,
  Label,
  CardFooter,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import ModalImage from "react-modal-image";

import fileIcon from "../../assets/icons/fileIcon.png";
import downloadIcon from "../../assets/icons/downloadIcon.png";
import threeDotIcon from "../../assets/icons/threeDotIcon.png";
import replyIcon from "../../assets/icons/replyIcon.png";
import uploadAttachmentsIcon from "../../assets/icons/uploadAttachmentsIcon.png";
import openLinkIcon from "../../assets/icons/openLinkIcon.png";
import uploadIcon from "../../assets/icons/uploadIcon.png";
import {
  setKycSelectionIndividual,
  setKycSelectionMinor,
} from "../../slices/selection.slice";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
function ScrollableContent({
  children,
  activeSection,
  setActiveSection,
  activeByClick,
}) {
  const scrollbarStyles = {
    maxHeight: "444px",
    overflowY: "auto",
  };

  const contentRef = useRef();
  const isClickRef = useRef(false);

  useEffect(() => {
    isClickRef.current = true;

    const timeout = setTimeout(() => {
      isClickRef.current = false;
    }, 1000); // Adjust the delay time as needed

    return () => clearTimeout(timeout);
  }, [activeByClick]);

  useEffect(() => {
    const contentElement = contentRef.current;

    // Calculate the scroll position
    const personalInfoSection = document.querySelector(
      '[data-section="Personal Info"]'
    );
    const accountInfoSection = document.querySelector(
      '[data-section="Account Info"]'
    );
    const familyInfoSection = document.querySelector(
      '[data-section="Family Info"]'
    );
    const occupationSection = document.querySelector(
      '[data-section="Occupation"]'
    );
    const declarationSection = document.querySelector(
      '[data-section="Declaration"]'
    );
    const transactionInfoSection = document.querySelector(
      '[data-section="Transaction Info"]'
    );
    const servicesSection = document.querySelector('[data-section="Services"]');
    const identificationSection = document.querySelector(
      '[data-section="Identification"]'
    );
    const recommenderSection = document.querySelector(
      '[data-section="Recommender"]'
    );
    const uploadDocumentsSection = document.querySelector(
      '[data-section="Upload Documents"]'
    );

    const personalInfoSectionAtTop = personalInfoSection.offsetTop;
    const accountInfoSectionAtTop = accountInfoSection.offsetTop;
    const familyInfoSectionAtTop = familyInfoSection.offsetTop;
    const occupationSectionAtTop = occupationSection.offsetTop;
    const declarationSectionAtTop = declarationSection.offsetTop;
    const transactionInfoSectionAtTop = transactionInfoSection.offsetTop;
    const servicesSectionAtTop = servicesSection.offsetTop;
    const identificationSectionAtTop = identificationSection.offsetTop;
    const recommenderSectionAtTop = recommenderSection.offsetTop;
    const uploadDocumentsSectionAtTop = uploadDocumentsSection.offsetTop;

    console.log("hiihidhshdhs", declarationSection);

    const handleScroll = () => {
      console.log("scrolled");
      if (isClickRef.current) return;
      // console.log("nooo");

      const currentPosition = contentElement.scrollTop;

      if (0 <= currentPosition && currentPosition < accountInfoSectionAtTop) {
        setActiveSection("Personal Info");
      } else if (
        accountInfoSectionAtTop < currentPosition &&
        currentPosition < familyInfoSectionAtTop
      ) {
        setActiveSection("Account Info");
      } else if (
        familyInfoSectionAtTop < currentPosition &&
        currentPosition < occupationSectionAtTop
      ) {
        setActiveSection("Family Info");
      } else if (
        occupationSectionAtTop < currentPosition &&
        currentPosition < declarationSectionAtTop
      ) {
        setActiveSection("Occupation");
      } else if (
        declarationSectionAtTop < currentPosition &&
        currentPosition < transactionInfoSectionAtTop
      ) {
        setActiveSection("Declaration");
      } else if (
        transactionInfoSectionAtTop < currentPosition &&
        currentPosition < servicesSectionAtTop
      ) {
        setActiveSection("Transaction Info");
      } else if (
        servicesSectionAtTop < currentPosition &&
        currentPosition < identificationSectionAtTop
      ) {
        setActiveSection("Services");
      } else if (
        identificationSectionAtTop < currentPosition &&
        currentPosition < recommenderSectionAtTop
      ) {
        setActiveSection("Identification");
      } else if (
        recommenderSectionAtTop < currentPosition &&
        currentPosition < uploadDocumentsSectionAtTop
      ) {
        setActiveSection("Recommender");
      } else if (uploadDocumentsSectionAtTop < currentPosition) {
        setActiveSection("Upload Documents");
      }
    };

    contentElement.addEventListener("scroll", handleScroll);
    return () => {
      contentElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const contentElement = contentRef.current;

    // Calculate the scroll position for the "Account Info" section
    const personalInfoSection = document.querySelector(
      '[data-section="Personal Info"]'
    );
    const accountInfoSection = document.querySelector(
      '[data-section="Account Info"]'
    );
    const familyInfoSection = document.querySelector(
      '[data-section="Family Info"]'
    );
    const occupationSection = document.querySelector(
      '[data-section="Occupation"]'
    );
    const declarationSection = document.querySelector(
      '[data-section="Declaration"]'
    );
    const transactionInfoSection = document.querySelector(
      '[data-section="Transaction Info"]'
    );
    const servicesSection = document.querySelector('[data-section="Services"]');
    const identificationSection = document.querySelector(
      '[data-section="Identification"]'
    );
    const recommenderSection = document.querySelector(
      '[data-section="Recommender"]'
    );
    const uploadDocumentsSection = document.querySelector(
      '[data-section="Upload Documents"]'
    );

    const personalInfoSectionAtTop = personalInfoSection.offsetTop;
    const accountInfoSectionAtTop = accountInfoSection.offsetTop;
    const familyInfoSectionAtTop = familyInfoSection.offsetTop;
    const occupationSectionAtTop = occupationSection.offsetTop;
    const declarationSectionAtTop = declarationSection.offsetTop;
    const transactionInfoSectionAtTop = transactionInfoSection.offsetTop;
    const servicesSectionAtTop = servicesSection.offsetTop;
    const identificationSectionAtTop = identificationSection.offsetTop;
    const recommenderSectionAtTop = recommenderSection.offsetTop;
    const uploadDocumentsSectionAtTop = uploadDocumentsSection.offsetTop;

    const scrollToSection = (section) => {
      setActiveSection(section);
      switch (section) {
        case "Personal Info":
          contentElement.scrollTo({ top: 0, behavior: "smooth" });
          break;
        case "Account Info":
          contentElement.scrollTo({
            top: accountInfoSectionAtTop,
            behavior: "smooth",
          });
          break;
        case "Family Info":
          contentElement.scrollTo({
            top: familyInfoSectionAtTop,
            behavior: "smooth",
          });
          break;
        case "Occupation":
          contentElement.scrollTo({
            top: occupationSectionAtTop,
            behavior: "smooth",
          });
          break;
        case "Declaration":
          contentElement.scrollTo({
            top: declarationSectionAtTop,
            behavior: "smooth",
          });
          break;
        case "Transaction Info":
          contentElement.scrollTo({
            top: transactionInfoSectionAtTop,
            behavior: "smooth",
          });
          break;
        case "Services":
          contentElement.scrollTo({
            top: servicesSectionAtTop,
            behavior: "smooth",
          });
          break;
        case "Identification":
          contentElement.scrollTo({
            top: identificationSectionAtTop,
            behavior: "smooth",
          });
          break;
        case "Recommender":
          contentElement.scrollTo({
            top: recommenderSectionAtTop,
            behavior: "smooth",
          });
          break;
        case "Upload Documents":
          contentElement.scrollTo({
            top: uploadDocumentsSectionAtTop,
            behavior: "smooth",
          });
          break;
        default:
          break;
      }
    };

    scrollToSection(activeByClick);
  }, [activeByClick]);

  return (
    <div className="col-md-10 pe-0 border rounded-3">
      <div
        ref={contentRef}
        className="scrollable-content"
        style={scrollbarStyles}
      >
        {children}
      </div>
    </div>
  );
}

export default function FormVerification() {
  const [activeSection, setActiveSection] = useState("Personal Info");
  const [activeByClick, setActiveByClick] = useState("Personal Info");
  const dispatch = useDispatch();
  const location = useLocation();

  const [
    applicantPassportSizePhotoPreview,
    setApplicantPassportSizePhotoPreview,
  ] = useState(false);
  const [
    applicantCitizenshipFrontPhotoPreview,
    setApplicantCitizenshipFrontPhotoPreview,
  ] = useState(false);
  const [
    applicantCitizenshipBackPhotoPreview,
    setApplicantCitizenshipBackPhotoPreview,
  ] = useState(false);
  const [signatureOfAccountHolderPreview, setSignatureOfAccountHolderPreview] =
    useState(false);
  const [applicantPassportFrontPreview, setApplicantPassportFrontPreview] =
    useState(false);
  const [applicantPassportBack, setApplicantPassportBackPreview] =
    useState(false);
  const [nomineePassportSizePhotoPreview, setNomineePassportSizePhotoPreview] =
    useState(false);
  const [rightThumbPrintPreview, setRightThumbPrintPreview] = useState(false);
  const [leftThumbPrintPreview, setLeftThumbPrintPreview] = useState(false);
  const [
    nomineeIdentificationFrontPreview,
    setNomineeIdentificationFrontPreview,
  ] = useState(false);
  const [
    nomineeIdentificationBackPreview,
    setNomineeIdentificationBackPreview,
  ] = useState(false);

  // For individual
  const reduxApplicantPassportSizePhoto = useSelector(
    (state) => state.KycDetails.uploadDocuments.applicantPassportSizePhoto
  );
  const reduxApplicantCitizenshipFrontPhoto = useSelector(
    (state) => state.KycDetails.uploadDocuments.applicantCitizenshipFrontPhoto
  );
  const reduxApplicantCitizenshipBackPhoto = useSelector(
    (state) => state.KycDetails.uploadDocuments.applicantCitizenshipBackPhoto
  );
  const reduxSignatureOfAccountHolder = useSelector(
    (state) => state.KycDetails.uploadDocuments.signatureOfAccountHolder
  );
  const reduxApplicantPassportFront = useSelector(
    (state) => state.KycDetails.uploadDocuments.applicantPassportFront
  );
  const reduxApplicantPassportBack = useSelector(
    (state) => state.KycDetails.uploadDocuments.applicantPassportBack
  );
  const reduxNomineePassportSizePhoto = useSelector(
    (state) => state.KycDetails.uploadDocuments.nomineePassportSizePhoto
  );
  const reduxRightThumbPrint = useSelector(
    (state) => state.KycDetails.uploadDocuments.rightThumbPrint
  );
  const reduxLeftThumbPrint = useSelector(
    (state) => state.KycDetails.uploadDocuments.leftThumbPrint
  );
  const reduxNomineeIdentificationFront = useSelector(
    (state) => state.KycDetails.uploadDocuments.nomineeIdentificationFront
  );
  const reduxNomineeIdentificationBack = useSelector(
    (state) => state.KycDetails.uploadDocuments.nomineeIdentificationBack
  );
  const reduxIndividualbasicInfo = useSelector(
    (state) => state?.KycDetails?.basicInformation
  );

  const reduxIndividualPersonalInfo = useSelector(
    (state) => state?.KycDetails?.applicantDetails
  );

  const reduxIndividualAddressInfo = useSelector(
    (state) => state?.KycDetails?.addressDetails
  );
  const reduxIndividualContactInfo = useSelector(
    (state) => state?.KycDetails?.contactInformation
  );
  const reduxIndividualIdentificationInfo = useSelector(
    (state) => state?.KycDetails?.identificationDetailsIndividual
  );
  const reduxIndividualOccupationDetails = useSelector(
    (state) => state?.KycDetails?.occupationDetails
  );
  const reduxIndividualFamilyDetails = useSelector(
    (state) => state?.KycDetails?.familyDetails.family
  );
  const reduxIndividualLocation = useSelector(
    (state) => state?.KycDetails?.location
  );
  const reduxIndividualDeclaration = useSelector(
    (state) => state?.KycDetails?.declaration
  );
  const reduxIndividualNomineeInformation = useSelector(
    (state) => state?.KycDetails?.nomineeInformation
  );
  const reduxIndividualServicesYouWant = useSelector(
    (state) => state?.KycDetails?.servicesYouWant
  );
  const reduxIndividualTransactionInfo = useSelector(
    (state) => state?.KycDetails?.transactionInfo
  );
  const reduxIndividualRecommender = useSelector(
    (state) => state?.KycDetails?.recommender
  );

  // For minor
  const reduxMinorPersonalInfo = useSelector(
    (state) => state?.KycMinor?.personalDetails
  );

  const handleFormSubmit = () => {
    // Show toast for form submission success
    toast.success(
      " Form saved successfully! ",

      {
        duration: 2000,
        position: toast.POSITION.TOP_RIGHT,
      }
    );

    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  };

  return (
    <React.Fragment>
            <Card className="p-0">
              <CardHeader className="px-4">
                <div className="">
                  <h5 className="m-0">SUMMARY</h5>
                </div>
              </CardHeader>

            <CardBody className="px-4 ">
              <Row>
                <Col md={2}>
                  <div className=" border rounded-2 fs-13 px-2 py-4">
                    <p
                      className={`${
                        activeSection === "Personal Info"
                          ? "fw-semibold border-bottom ms-3"
                          : "text-muted"
                      }`}
                      onClick={() => setActiveByClick("Personal Info")}
                    >
                      - Personal Info
                    </p>
                    <p
                      className={`${
                        activeSection === "Account Info"
                          ? "fw-semibold border-bottom ms-3"
                          : "text-muted"
                      }`}
                      onClick={() => setActiveByClick("Account Info")}
                    >
                      - Account Info
                    </p>
                    <p
                      className={`${
                        activeSection === "Family Info"
                          ? "fw-semibold border-bottom ms-3"
                          : "text-muted"
                      }`}
                      onClick={() => {
                        setActiveByClick("Family Info");
                      }}
                    >
                      - Family Info
                    </p>
                    <p
                      className={`${
                        activeSection === "Occupation"
                          ? "fw-semibold border-bottom ms-3"
                          : "text-muted"
                      }`}
                      onClick={() => setActiveByClick("Occupation")}
                    >
                      - Occupation
                    </p>
                    <p
                      className={`${
                        activeSection === "Declaration"
                          ? "fw-semibold border-bottom ms-3"
                          : "text-muted"
                      }`}
                      onClick={() => setActiveByClick("Declaration")}
                    >
                      - Declaration
                    </p>
                    <p
                      className={`${
                        activeSection === "Transaction Info"
                          ? "fw-semibold border-bottom ms-3"
                          : "text-muted"
                      }`}
                      onClick={() => setActiveByClick("Transaction Info")}
                    >
                      - Transaction Info
                    </p>
                    <p
                      className={`${
                        activeSection === "Services"
                          ? "fw-semibold  border-bottom ms-3"
                          : "text-muted"
                      }`}
                      onClick={() => setActiveByClick("Services")}
                    >
                      - Services
                    </p>
                    <p
                      className={`${
                        activeSection === "Identification"
                          ? "fw-semibold border-bottom ms-3"
                          : "text-muted"
                      }`}
                      onClick={() => setActiveByClick("Identification")}
                    >
                      - Identification
                    </p>
                    <p
                      className={`${
                        activeSection === "Recommender"
                          ? "fw-semibold border-bottom ms-3"
                          : "text-muted"
                      }`}
                      onClick={() => setActiveByClick("Recommender")}
                    >
                      - Recommender
                    </p>
                    <p
                      className={`${
                        activeSection === "Upload Documents"
                          ? "fw-semibold border-bottom ms-3"
                          : "text-muted"
                      }`}
                      onClick={() => setActiveByClick("Upload Documents")}
                    >
                      - Upload Documents
                    </p>
                  </div>
                </Col>

                <ScrollableContent
                  clasName="pe-0 "
                  activeSection={activeSection}
                  setActiveSection={setActiveSection}
                  activeByClick={activeByClick}
                >
                  <Col md={12} className="p-3 pb-5 gy-5 scrollable-section">
                    {location.pathname === "/kycindividual" && (
                      // Personal Info
                      <div className="row " data-section="Personal Info">
                        <h5 className="fw-semibold text-muted mt-5 mb-5">
                          Personal Info
                        </h5>
                        <Col md={6}>
                          <Row className="leftside">
                            <Col md={6} className="fw-semibold">
                              <p>Name</p>
                              <p>Nationality</p>
                              <p>Marital Status</p>
                              <p>Gender</p>
                              <p>Date of Birth</p>
                              <p>Education</p>
                              <p>Family Size</p>
                            </Col>
                            <Col md={6}>
                              <p>
                                {reduxIndividualPersonalInfo.firstName ||
                                reduxIndividualPersonalInfo.middleName ||
                                reduxIndividualPersonalInfo.lastName
                                  ? `${
                                      reduxIndividualPersonalInfo.firstName ||
                                      ""
                                    } ${
                                      reduxIndividualPersonalInfo.middleName ||
                                      ""
                                    } ${
                                      reduxIndividualPersonalInfo.lastName || ""
                                    }`
                                  : "N.A"}
                              </p>
                              <p>
                                {reduxIndividualPersonalInfo.nationality ||
                                  "N.A"}
                              </p>
                              <p>
                                {reduxIndividualPersonalInfo.maritalStatus ||
                                  "N.A"}
                              </p>
                              <p>
                                {reduxIndividualPersonalInfo.gender || "N.A"}
                              </p>
                              <p>
                                {reduxIndividualPersonalInfo.dateOfBirthBS ||
                                  "N.A"}
                              </p>
                              <p>
                                {reduxIndividualPersonalInfo.education || "N.A"}
                              </p>
                              <p>
                                {reduxIndividualPersonalInfo.familySize ||
                                  "N.A"}
                              </p>
                            </Col>
                          </Row>
                        </Col>

                        <Col md={6}>
                          <Row className="rightside">
                            <Col md={6} className="fw-semibold">
                              {/* <p>Guardian's Name</p>
                              <p>Guardian's Relationship</p> */}
                              <p>Father's Name</p>
                              <p>Mother's Name</p>
                              <p>Grandfather's Name</p>
                              <p>Grandmother's Name</p>
                              <p>Husband/Wife</p>
                            </Col>
                            <Col md={6}>
                              {/* <p>Manish Aryal</p>
                              <p>Father</p> */}
                              <p>
                                {reduxIndividualPersonalInfo.fathersName ||
                                  "N.A"}
                              </p>
                              <p>
                                {reduxIndividualPersonalInfo.mothersName ||
                                  "N.A"}
                              </p>
                              <p>
                                {reduxIndividualPersonalInfo.grandfathersName ||
                                  "N.A"}
                              </p>
                              <p>
                                {reduxIndividualPersonalInfo.grandmothersName ||
                                  "N.A"}
                              </p>
                              <p>
                                {reduxIndividualPersonalInfo.husbandorWifeName ||
                                  "N.A"}
                              </p>
                            </Col>
                          </Row>
                        </Col>
                      </div>
                    )}

                    {location.pathname === "/kycminor" && (
                      // Personal Info
                      <div className="row " data-section="Personal Info">
                        <h5 className="fw-semibold text-muted mt-5 mb-5">
                          Personal Info
                        </h5>
                        <Col md={6}>
                          <Row className="leftside">
                            <Col md={6} className="fw-semibold">
                              <p>Name</p>
                              <p>Nationality</p>
                              <p>Marital Status</p>
                              <p>Gender</p>
                              <p>Date of Birth</p>
                              <p>Education</p>
                              <p>Family Size</p>
                            </Col>
                            <Col md={6}>
                              <p>
                                {reduxMinorPersonalInfo.firstName}
                                {reduxMinorPersonalInfo.middleName}
                                {reduxMinorPersonalInfo.lastName}
                              </p>
                              <p>
                                {reduxMinorPersonalInfo.nationality || "N.A"}
                              </p>
                              <p>
                                {reduxMinorPersonalInfo.maritalSelect || "N.A"}
                              </p>
                              <p>
                                {reduxMinorPersonalInfo.genderSelect || "N.A"}
                              </p>
                              <p>{reduxMinorPersonalInfo.DOB || "N.A"}</p>
                              <p>{reduxMinorPersonalInfo.education || "N.A"}</p>
                              <p>
                                {reduxMinorPersonalInfo.familySize || "N.A"}
                              </p>
                            </Col>
                          </Row>
                        </Col>

                        <Col md={6}>
                          <Row className="rightside">
                            <Col md={6} className="fw-semibold">
                              <p>Guardian's Name</p>
                              <p>Guardian's Relationship</p>
                              <p>Father's Name</p>
                              <p>Mother's Name</p>
                              <p>Grandfather's Name</p>
                              <p>Grandmother's Name</p>
                              {/* <p>Husband/Wife</p> */}
                            </Col>
                            <Col md={6}>
                              <p>
                                {reduxMinorPersonalInfo.guardianName || "N.A"}
                              </p>
                              <p>
                                {reduxMinorPersonalInfo.guardianRelationship ||
                                  "N.A"}
                              </p>
                              <p>
                                {reduxMinorPersonalInfo.fatherName || "N.A"}
                              </p>
                              <p>
                                {reduxMinorPersonalInfo.motherName || "N.A"}
                              </p>
                              <p>
                                {reduxMinorPersonalInfo.grandFatherName ||
                                  "N.A"}
                              </p>
                              <p>
                                {reduxMinorPersonalInfo.grandMotherName ||
                                  "N.A"}
                              </p>
                              {/* <p>{reduxMinorPersonalInfo.wifeName}</p> */}
                            </Col>
                          </Row>
                        </Col>
                      </div>
                    )}

                    {/* Account Info */}
                    {/* {location.pathname === "/kycindividual" && ( */}

                    <div className="row " data-section="Account Info">
                      <h5 className="fw-semibold text-muted mt-5 mb-5">
                        Account Information
                      </h5>
                      <Col md={6}>
                        <Row className="leftside">
                          <Col md={6} className="fw-semibold">
                            <p>Account Type</p>
                            <p>Branch Name</p>
                            <p>Date</p>
                            <p>Purpose of Account Opening</p>
                          </Col>
                          <Col md={6}>
                            <p>
                              {reduxIndividualbasicInfo.accountType || "N.A"}
                            </p>
                            <p>
                              {reduxIndividualbasicInfo.branchName || "N.A"}
                            </p>
                            <p>{reduxIndividualbasicInfo.date || "N.A"}</p>
                            <p>
                              {reduxIndividualbasicInfo.purposeOfAccountOpening ||
                                "N.A"}
                            </p>
                          </Col>
                        </Row>
                      </Col>

                      <Col md={6}>
                        <Row className="rightside">
                          <Col md={6} className="fw-semibold">
                            <p>Sources of Fund</p>
                            <p>Currency</p>
                          </Col>
                          <Col md={6}>
                            <p>
                              {reduxIndividualbasicInfo.sourceOfFunds || "N.A"}
                            </p>
                            <p>{reduxIndividualbasicInfo.currency || "N.A"}</p>
                          </Col>
                        </Row>
                      </Col>
                    </div>
                    {/* )} */}

                    {/* Family Info */}
                    <div className="row " data-section="Family Info">
                      <h5 className="fw-semibold  mt-5 mb-5 text-muted">
                        Family Information
                      </h5>
                      {reduxIndividualFamilyDetails.map(
                        (familyMember, index) => (
                          <div key={index}  style={{ borderBottom: '1px solid #ccc' }}> 
                          <Row className="mt-3">
                            <Col md={6}>
                              <Row className="leftside">
                                <Col md={6} className="fw-semibold">
                                  <p>Name</p>
                                  <p>Relationship</p>
                                  <p>Citizenship/ID Number</p>
                                  {/* <p>date of Birth</p> */}
                                  <p>Issued Place</p>
                                </Col>
                                <Col md={6}>
                                  <p>{familyMember.name || "N.A"}</p>
                                  <p>{familyMember.relationship || "N.A"}</p>
                                  <p>{familyMember.idNumber || "N.A"}</p>
                                  {/* <p>{familyMember.issuedDate}</p> */}
                                  <p>{familyMember.issuedPlace || "N.A"}</p>
                                </Col>
                              </Row>
                            </Col>

                            <Col md={6}>
                              <Row className="rightside">
                                <Col md={6} className="fw-semibold">
                                  <p>Issued Date</p>
                                  <p>Bank Account Number</p>
                                  <p>Contact Number</p>
                                  <p>Is Alive</p>
                                </Col>
                                <Col md={6}>
                                  <p>{familyMember.issuedDate || "N.A"}</p>
                                  <p>
                                    {familyMember.bankAccountNumber || "N.A"}
                                  </p>
                                  <p>{familyMember.contactNumber || "N.A"}</p>
                                  <p>
                                    {familyMember.isAlive === true
                                      ? "Yes"
                                      : "No"}
                                  </p>
                                </Col>
                              </Row>
                            </Col>
                            </Row>
                          </div>
                        )
                      )}
                    </div>

                    {/* Occupation */}
                    <div className="row " data-section="Occupation">
                      <h5 className="fw-semibold  mt-5 mb-5 text-muted">
                        Occupation Information
                      </h5>

                      <h6 className="fw-semibold  mt-1 mb-3 text-muted">
                        Salaried/ Others
                      </h6>
                      <Col md={6}>
                        <Row className="leftside">
                          <Col md={6} className="fw-semibold">
                            <p>Institution Name </p>
                            <p>Designation Name</p>
                            <p>Occupation Type</p>
                            <p>Estimated Annual Income</p>
                          </Col>
                          <Col md={6}>
                            <p>
                              {reduxIndividualOccupationDetails.institutionName ||
                                "N.A"}
                            </p>
                            <p>
                              {reduxIndividualOccupationDetails.designationName ||
                                "N.A"}
                            </p>
                            <p>
                              {reduxIndividualOccupationDetails.occupationType ||
                                "N.A"}
                            </p>
                            <p>
                              {reduxIndividualOccupationDetails.annualIncome ||
                                "N.A"}
                            </p>
                          </Col>
                        </Row>
                      </Col>

                      <h6 className="fw-semibold  mt-1 mb-3 text-muted">
                        Self Employed
                      </h6>
                      <Col md={6}>
                        <Row className="leftside">
                          <Col md={6} className="fw-semibold">
                            <p>Institution Name </p>
                            <p>Institution PAN Number</p>
                            <p>Occupation Type</p>
                            <p>Nature of Busines</p>
                            <p>Annual Turn Over </p>
                            <p>Estimated Annual Income</p>
                          </Col>
                          <Col md={6}>
                            <p>
                              {reduxIndividualOccupationDetails.selfInstitutionName ||
                                "N.A"}
                            </p>
                            <p>
                              {reduxIndividualOccupationDetails.panNumber ||
                                "N.A"}
                            </p>
                            <p>
                              {reduxIndividualOccupationDetails.selfOccupationType ||
                                "N.A"}
                            </p>
                            <p>
                              {reduxIndividualOccupationDetails.businessNature ||
                                "N.A"}
                            </p>
                            <p>
                              {reduxIndividualOccupationDetails.turnOver ||
                                "N.A"}
                            </p>
                            <p>
                              {reduxIndividualOccupationDetails.annualIncomeSelf ||
                                "N.A"}
                            </p>
                          </Col>
                        </Row>
                      </Col>

                      <Col md={6}>
                        <Row className="rightside">
                          <Col md={6} className="fw-semibold">
                            <p>Registration Renewal Date </p>
                            <p>Constitution</p>
                            <p>Total Employee</p>
                            <p>Total N.O of branch</p>
                          </Col>
                          <Col md={6}>
                            <p>
                              {reduxIndividualOccupationDetails.renewalDate ||
                                "N.A"}
                            </p>
                            <p>
                              {reduxIndividualOccupationDetails.constitution ||
                                "N.A"}
                            </p>
                            <p>
                              {reduxIndividualOccupationDetails.totalEmployee ||
                                "N.A"}
                            </p>
                            <p>
                              {reduxIndividualOccupationDetails.branchNunber ||
                                "N.A"}
                            </p>
                          </Col>
                        </Row>
                      </Col>

                      <h6 className="fw-semibold  mt-1 mb-3 text-muted">
                        Additional Occupation
                      </h6>
                      <Col md={6}>
                        <Row className="leftside">
                          <Col md={6} className="fw-semibold">
                            <p>Institution Name </p>
                            <p>Designation</p>
                            <p>Occupation Type</p>
                            <p>Estimated Annual Income</p>
                          </Col>
                          <Col md={6}>
                            <p>
                              {reduxIndividualOccupationDetails.addInstitutionName ||
                                "N.A"}
                            </p>
                            <p>
                              {reduxIndividualOccupationDetails.addDesignationName ||
                                "N.A"}
                            </p>
                            <p>
                              {reduxIndividualOccupationDetails.addOccupationType ||
                                "N.A"}
                            </p>
                            <p>
                              {reduxIndividualOccupationDetails.addAnnualIncome ||
                                "N.A"}
                            </p>
                          </Col>
                        </Row>
                      </Col>
                    </div>

                    {/* Declaration */}
                    <div className="row " data-section="Declaration">
                      <h5 className="fw-semibold  mt-5 mb-5 text-muted">
                        Declaration Information
                      </h5>

                      <Col md={12}>
                        <Row>
                          <Col md={11} className="fw-semibold">
                            <p>
                             - I am currently a Board of Director/CEO/TOP
                              management of any bank and financial institution.
                              :
                            </p>
                          </Col>

                          <Col md={1} className="fw-semibold">
                            <p
                              className={
                                reduxIndividualDeclaration.declaration ===
                                "true"
                                  ? "text-success"
                                  : "text-danger"
                              }
                            >
                              {reduxIndividualDeclaration.declaration === "true"
                                ? "Yes"
                                : "No"}
                            </p>
                          </Col>
                        </Row>
                      </Col>
                      {reduxIndividualDeclaration.declaration === true && (
                        <div>
                          <h6 className="fw-semibold text-muted mt-5 mb-5">
                            Information of the related member having high
                            profile or currently involved in or retired from
                            politics, bureaucrarcy or other high level of
                            position.
                          </h6>
                          <Col md={6}>
                            <Row className="leftside">
                              <Col md={6} className="fw-semibold">
                                <p>Institution Name</p>
                                <p>position</p>
                                <p>Additional Information</p>
                              </Col>
                              <Col md={6}>
                                <p>
                                  {reduxIndividualDeclaration.institution ||
                                    "N.A"}
                                </p>
                                <p>
                                  {reduxIndividualDeclaration.position || "N.A"}
                                </p>
                                <p>
                                  {reduxIndividualDeclaration.information ||
                                    "N.A"}
                                </p>
                              </Col>
                            </Row>
                          </Col>
                        </div>
                      )}
                      <div>
                        <h6 className="fw-semibold  mt-1 mb-3 text-muted">
                          Member details that have present or past connection
                        </h6>
                        {reduxIndividualDeclaration.memberInfo.map(
                          (memberInformation, index) => (
                            <div key={index}  style={{ borderBottom: '1px solid #ccc' }}>
                              <Col md={6}>
                                <Row className="leftside">
                                  <Col md={6} className="fw-semibold">
                                    <p>Individual's Name </p>
                                    <p>Position</p>
                                    <p>Area of Involvement</p>
                                  </Col>
                                  <Col md={6}>
                                    <p>{memberInformation.name || "N.A"}</p>
                                    <p>{memberInformation.position || "N.A"}</p>
                                    <p>
                                      {memberInformation.areaOfInvolvement ||
                                        "N.A"}
                                    </p>
                                  </Col>
                                </Row>
                              </Col>

                              <Col md={6}>
                                <Row className="rightside">
                                  <Col md={6} className="fw-semibold">
                                    <p>Relationship </p>
                                    <p>Additional Information</p>
                                  </Col>
                                  <Col md={6}>
                                    <p>
                                      {memberInformation.relationships || "N.A"}
                                    </p>
                                    <p>
                                      {memberInformation.additionalInformation ||
                                        "N.A"}
                                    </p>
                                  </Col>
                                </Row>
                              </Col>
                            </div>
                          )
                        )}
                      </div>

                      <h6 className="fw-semibold  mt-1 mb-3 text-muted"></h6>
                      <Col md={12}>
                        <Row className="align-items-start">
                          <Col md={11} className="fw-semibold">
                            <p>
                             - I have never been formally accused, charged, or
                              convicted of any crime. :
                            </p>
                          </Col>
                          <Col md={1} className="fw-semibold">
                            <p
                              className={
                                reduxIndividualDeclaration.declaration2 ===
                                "true"
                                  ? "text-success"
                                  : "text-danger"
                              }
                            >
                              {reduxIndividualDeclaration.declaration2 ===
                              "true"
                                ? "Yes"
                                : "No"}
                            </p>
                          </Col>
                          <Col md={11} className="fw-semibold">
                            <p>
                             - I have never been formally sanctioned, fired or
                              penalized by any government authority. :
                            </p>
                          </Col>

                          <Col md={1} className="fw-semibold">
                            <p
                              className={
                                reduxIndividualDeclaration.declaration3 ===
                                "true"
                                  ? "text-success"
                                  : "text-danger"
                              }
                            >
                              {reduxIndividualDeclaration.declaration3 ===
                              "true"
                                ? "Yes"
                                : "No"}
                            </p>
                          </Col>

                          <Col md={11} className="fw-semibold">
                            <p>
                             - I hereby confirm that this account or the bank
                              will not be used for anu money laundering,
                              terrorist financing or any other financial crime. :
                            </p>
                          </Col>
                          <Col md={1} className="fw-semibold">
                            <p
                              className={
                                reduxIndividualDeclaration.term === "true"
                                  ? "text-success"
                                  : "text-danger"
                              }
                            >
                              {reduxIndividualDeclaration.term === "true"
                                ? "Yes"
                                : "No"}
                            </p>
                          </Col>

                          <Col md={11} className="fw-semibold">
                            <p>
                             - I hereby confirm that this account will not be
                              used by any other person.  :
                            </p>
                          </Col>
                          <Col md={1} className="fw-semibold">
                            <p
                              className={
                                reduxIndividualDeclaration.term1 === "true"
                                  ? "text-success"
                                  : "text-danger"
                              }
                            >
                              {reduxIndividualDeclaration.term1 === "true"
                                ? "Yes"
                                : "No"}
                            </p>
                          </Col>

                          <Col md={11} className="fw-semibold">
                            <p>
                            - I will agree to notify the Bank within 30 calendar
                              days if there is a change in any information which
                              you have provided to the Bank. :
                            </p>
                          </Col>

                          <Col md={1} className="fw-semibold">
                            <p
                              className={
                                reduxIndividualDeclaration.term2 === "true"
                                  ? "text-success"
                                  : "text-danger"
                              }
                            >
                              {reduxIndividualDeclaration.term2 === "true"
                                ? "Yes"
                                : "No"}
                            </p>
                          </Col>
                        </Row>
                      </Col>
                    </div>

                    {/* Transaction Info */}
                    <div className="row " data-section="Transaction Info">
                      <h5 className="fw-semibold  mt-5 mb-5 text-muted">
                        Transaction Information
                      </h5>
                      <h6 className="fw-semibold  mt-1 mb-4 text-muted">
                        Maximum Transaction in Single Transaction{" "}
                      </h6>
                      <Col md={6}>
                        <Row className="leftside">
                          <Col md={6} className="fw-semibold">
                            <p>Deposit</p>
                            <p>Withdrawal</p>
                          </Col>
                          <Col md={6}>
                            <p>
                              {reduxIndividualTransactionInfo.deposit || "N.A"}
                            </p>
                            <p>
                              {reduxIndividualTransactionInfo.withdrawl ||
                                "N.A"}
                            </p>
                          </Col>
                        </Row>
                      </Col>
                      <h6 className="fw-semibold  mt-2 mb-4 text-muted">
                        Maximum Number of Transaction in Single Day
                      </h6>
                      <Col md={6}>
                        <Row className="leftside">
                          <Col md={6} className="fw-semibold">
                            <p>Deposit</p>
                            <p>Withdrawal</p>
                          </Col>
                          <Col md={6}>
                            <p>
                              {reduxIndividualTransactionInfo.daydeposit ||
                                "N.A"}
                            </p>
                            <p>
                              {reduxIndividualTransactionInfo.daywithdrawl ||
                                "N.A"}
                            </p>
                          </Col>
                        </Row>
                      </Col>
                    </div>

                    {/* Services */}
                    <div className="row" data-section="Services">
                      <h5 className="fw-semibold  mt-5 mb-5 text-muted">
                        Services You Selected
                      </h5>
                      <Col md={6}>
                        <Row className="leftside">
                          <Col md={6} className="fw-semibold">
                            <p>Frequency Statement</p>
                            <p>Mode of Delivery Statement</p>
                            <p>Statement Print</p>
                            <p>Debit Card Service</p>
                            <p>Debit Card Type*</p>
                            <p>Phone Pay</p>
                            <p> Merchant QR </p>
                          </Col>
                          <Col md={6}>
                            <p>
                              {reduxIndividualServicesYouWant.frequency ||
                                "N.A"}
                            </p>
                            <p>
                              {reduxIndividualServicesYouWant.modeOfDelivery ||
                                "N.A"}
                            </p>
                            <p>
                              {reduxIndividualServicesYouWant.statementPrint != ""
                                ? reduxIndividualServicesYouWant.statementPrint
                                : "N.A"}
                            </p>
                            <p>
                              {reduxIndividualServicesYouWant.debitCardService ===
                              true
                                ? "Yes"
                                : "No"}
                            </p>
                            <p>
                              {reduxIndividualServicesYouWant.debitCardType ||
                                "N.A"}
                            </p>

                            <p>
                              {reduxIndividualServicesYouWant.phonePay === true
                                ? "Yes"
                                : "No"}
                            </p>
                            <p>
                              {reduxIndividualServicesYouWant.merchantQR ===
                              true
                                ? "Yes"
                                : "No"}
                            </p>
                          </Col>
                        </Row>
                      </Col>

                      <Col md={6}>
                        <Row className="rightside">
                          <Col md={6} className="fw-semibold">
                            <p>Online Banking</p>
                            <p>Mobile Banking</p>
                            <p>SMS Banking</p>
                            <p>Transaction Alert</p>
                          </Col>
                          <Col md={6}>
                            <p>
                              {reduxIndividualServicesYouWant.onlineBanking ===
                              true
                                ? "Yes"
                                : "No"}
                            </p>
                            <p>
                              {reduxIndividualServicesYouWant.mobileBanking ===
                              true
                                ? "Yes"
                                : "No"}
                            </p>
                            <p>
                              {reduxIndividualServicesYouWant.smsBanking ===
                              true
                                ? "Yes"
                                : "No"}
                            </p>
                            <p>
                              {reduxIndividualServicesYouWant.transactionAlert ===
                              true
                                ? "Yes"
                                : "No"}
                            </p>
                          </Col>
                        </Row>
                      </Col>
                    </div>

                    {/* Identification */}
                    <div className="row" data-section="Identification">
                      <h5 className="fw-semibold text-muted  mt-5 mb-5">
                        Identification
                      </h5>
                      <Col md={6}>
                        <Row className="leftside">
                          <Col md={6} className="fw-semibold">
                            <p>Identification Type</p>
                            <p>ID Number</p>
                            <p>Issued By</p>
                            <p>Issued Place</p>
                          </Col>
                          <Col md={6}>
                            <p>
                              {reduxIndividualIdentificationInfo.identificationType ||
                                "N.A"}
                            </p>
                            <p>
                              {reduxIndividualIdentificationInfo.idNumber ||
                                "N.A"}
                            </p>
                            <p>
                              {reduxIndividualIdentificationInfo.issuedBy ||
                                "N.A"}
                            </p>
                            <p>
                              {reduxIndividualIdentificationInfo.issuePlace ||
                                "N.A"}
                            </p>
                          </Col>
                        </Row>
                      </Col>

                      <Col md={6}>
                        <Row className="rightside">
                          <Col md={6} className="fw-semibold">
                            <p>Issued Date</p>
                            <p>Expiry Date</p>
                            <p>PAN Number</p>
                          </Col>
                          <Col md={6}>
                            <p>
                              {reduxIndividualIdentificationInfo.issuedDate ||
                                "N.A"}
                            </p>
                            <p>
                              {reduxIndividualIdentificationInfo.expiryDate ||
                                "N.A"}
                            </p>
                            <p>
                              {reduxIndividualIdentificationInfo.panNumber ||
                                "N.A"}
                            </p>
                          </Col>
                        </Row>
                      </Col>
                    </div>

                    {/* Recommender */}
                    <div className="row pb-5 mb-5" data-section="Recommender">
                      <h5 className="fw-semibold text-muted  mt-5 mb-5">
                        Recommender
                      </h5>
                      <Col md={6}>
                        <Row className="leftside">
                          <Col md={6} className="fw-semibold">
                            {/* <p>Title</p> */}
                            <p>Name</p>
                            <p>Account Number</p>
                          </Col>
                          <Col md={6}>
                            {/* <p>{reduxIndividualRecommender.titleSelect}</p> */}
                            <p>{reduxIndividualRecommender.Name || "N.A"}</p>
                            <p>
                              {reduxIndividualRecommender.accountNO || "N.A"}
                            </p>
                          </Col>
                        </Row>
                      </Col>
                    </div>

                    {/* Upload Documents Section */}
                    <div
                      className="row pb-5 mb-5"
                      data-section="Upload Documents"
                    >
                      <h5 className="fw-semibold text-muted  mt-5 mb-5">
                        Upload Documents
                      </h5>
                      <h5 className="m-0 fw-semibold text-muted">
                        Personal Documents
                      </h5>

                      <div className="documents-container d-flex gap-5 mt-5 flex-nowrap">
                        <Row>
                          <Col md={4} className="d-flex flex-column gap-2">
                            <div
                              style={{
                                width: "100%",
                                cursor: "pointer",
                                height: "100%",
                                minHeight: "200px",
                                maxHeight: "200px",
                                overflow: "hidden",
                              }}
                            >
                              <ModalImage
                                small={
                                  reduxApplicantPassportSizePhoto
                                    ? URL.createObjectURL(
                                        reduxApplicantPassportSizePhoto
                                      )
                                    : null
                                }
                                large={
                                  reduxApplicantPassportSizePhoto
                                    ? URL.createObjectURL(
                                        reduxApplicantPassportSizePhoto
                                      )
                                    : null
                                }
                                alt="Applicant's passport size Photo"
                                onClick={() =>
                                  setApplicantPassportSizePhotoPreview(
                                    !applicantPassportSizePhotoPreview
                                  )
                                }
                              />
                            </div>
                            <Label className="text-muted">
                              Applicant's passport size Photo
                            </Label>
                          </Col>

                          <Col md={4} className="d-flex flex-column gap-2">
                            <div
                              style={{
                                objectFit: "cover",
                                width: "100%",
                                cursor: "pointer",
                                height: "200px",
                                minHeight: "200px",
                                maxHeight: "200px",
                                overflow: "hidden",
                              }}
                            >
                              <ModalImage
                                small={
                                  reduxApplicantCitizenshipFrontPhoto
                                    ? URL.createObjectURL(
                                        reduxApplicantCitizenshipFrontPhoto
                                      )
                                    : null
                                }
                                large={
                                  reduxApplicantCitizenshipFrontPhoto
                                    ? URL.createObjectURL(
                                        reduxApplicantCitizenshipFrontPhoto
                                      )
                                    : null
                                }
                                alt="Applicant Citizenship Front Photo"
                                onClick={() =>
                                  setApplicantCitizenshipFrontPhotoPreview(
                                    !applicantCitizenshipFrontPhotoPreview
                                  )
                                }
                              />
                            </div>

                            <Label className="text-muted">
                              Applicant Citizenship Front Photo
                            </Label>
                          </Col>

                          <Col md={4} className="d-flex flex-column gap-2">
                            <div
                              style={{
                                objectFit: "cover",
                                width: "100%",
                                cursor: "pointer",
                                height: "200px",
                                minHeight: "200px",
                                maxHeight: "200px",
                                overflow: "hidden",
                              }}
                            >
                              <ModalImage
                                small={
                                  reduxApplicantCitizenshipBackPhoto
                                    ? URL.createObjectURL(
                                        reduxApplicantCitizenshipBackPhoto
                                      )
                                    : null
                                }
                                large={
                                  reduxApplicantCitizenshipBackPhoto
                                    ? URL.createObjectURL(
                                        reduxApplicantCitizenshipBackPhoto
                                      )
                                    : null
                                }
                                alt="Applicant Citizenship Back Photo"
                                onClick={() =>
                                  setApplicantCitizenshipBackPhotoPreview(
                                    !applicantCitizenshipBackPhotoPreview
                                  )
                                }
                              />
                            </div>

                            <Label className="text-muted">
                              Applicant Citizenship Back Photo
                            </Label>
                          </Col>

                          <Col md={4} className="d-flex flex-column gap-2">
                            <div
                              style={{
                                objectFit: "cover",
                                width: "100%",
                                cursor: "pointer",
                                height: "200px",
                                minHeight: "200px",
                                maxHeight: "200px",
                                overflow: "hidden",
                              }}
                            >
                              <ModalImage
                                small={
                                  reduxSignatureOfAccountHolder
                                    ? URL.createObjectURL(
                                        reduxSignatureOfAccountHolder
                                      )
                                    : null
                                }
                                large={
                                  reduxSignatureOfAccountHolder
                                    ? URL.createObjectURL(
                                        reduxSignatureOfAccountHolder
                                      )
                                    : null
                                }
                                alt="Signature of Account Holder"
                                onClick={() =>
                                  setSignatureOfAccountHolderPreview(
                                    !signatureOfAccountHolderPreview
                                  )
                                }
                              />
                            </div>

                            <Label className="text-muted">
                              Signature of Account Holder
                            </Label>
                          </Col>

                          <Col md={4} className="d-flex flex-column gap-2">
                            <div
                              style={{
                                objectFit: "cover",
                                width: "100%",
                                cursor: "pointer",
                                height: "200px",
                                minHeight: "200px",
                                maxHeight: "200px",
                                overflow: "hidden",
                              }}
                            >
                              <ModalImage
                                small={
                                  reduxApplicantPassportFront
                                    ? URL.createObjectURL(
                                        reduxApplicantPassportFront
                                      )
                                    : null
                                }
                                large={
                                  reduxApplicantPassportFront
                                    ? URL.createObjectURL(
                                        reduxApplicantPassportFront
                                      )
                                    : null
                                }
                                alt="Applicant Passport's Front"
                                onClick={() =>
                                  setApplicantPassportFrontPreview(
                                    !applicantPassportFrontPreview
                                  )
                                }
                              />
                            </div>

                            <Label className="text-muted">
                              Applicant Passport's Front
                            </Label>
                          </Col>

                          <Col md={4} className="d-flex flex-column gap-2">
                            <div
                              style={{
                                objectFit: "cover",
                                width: "100%",
                                cursor: "pointer",
                                height: "200px",
                                minHeight: "200px",
                                maxHeight: "200px",
                                overflow: "hidden",
                              }}
                            >
                              <ModalImage
                                small={
                                  reduxApplicantPassportBack
                                    ? URL.createObjectURL(
                                        reduxApplicantPassportBack
                                      )
                                    : null
                                }
                                large={
                                  reduxApplicantPassportBack
                                    ? URL.createObjectURL(
                                        reduxApplicantPassportBack
                                      )
                                    : null
                                }
                                alt="Applicant Passport's Back"
                                onClick={() =>
                                  setApplicantPassportBackPreview(
                                    !applicantPassportBackPreview
                                  )
                                }
                              />
                            </div>

                            <Label className="text-muted">
                              Applicant Passport's Back
                            </Label>
                          </Col>

                          <Col md={12}>
                            <h5 className="fw-bold mt-5 fw-semibold text-muted">
                              Nominee Documents
                            </h5>
                          </Col>

                          <Col md={4} className="d-flex flex-column gap-2">
                            <div
                              style={{
                                objectFit: "cover",
                                width: "100%",
                                cursor: "pointer",
                                height: "200px",
                                minHeight: "200px",
                                maxHeight: "200px",
                                overflow: "hidden",
                              }}
                            >
                              <ModalImage
                                small={
                                  reduxNomineePassportSizePhoto
                                    ? URL.createObjectURL(
                                        reduxNomineePassportSizePhoto
                                      )
                                    : null
                                }
                                large={
                                  reduxNomineePassportSizePhoto
                                    ? URL.createObjectURL(
                                        reduxNomineePassportSizePhoto
                                      )
                                    : null
                                }
                                alt="Nominee's Passport Size Photo"
                                onClick={() =>
                                  setNomineePassportSizePhotoPreview(
                                    !nomineePassportSizePhotoPreview
                                  )
                                }
                              />
                            </div>

                            <Label className="text-muted">
                              Nominee's Passport Size Photo
                            </Label>
                          </Col>

                          <Col md={4} className="d-flex flex-column gap-2">
                            <div
                              style={{
                                objectFit: "cover",
                                width: "100%",
                                cursor: "pointer",
                                height: "200px",
                                minHeight: "200px",
                                maxHeight: "200px",
                                overflow: "hidden",
                              }}
                            >
                              <ModalImage
                                small={
                                  reduxRightThumbPrint
                                    ? URL.createObjectURL(reduxRightThumbPrint)
                                    : null
                                }
                                large={
                                  reduxRightThumbPrint
                                    ? URL.createObjectURL(reduxRightThumbPrint)
                                    : null
                                }
                                alt="Right Thumb Print"
                                onClick={() =>
                                  setRightThumbPrintPreview(
                                    !rightThumbPrintPreview
                                  )
                                }
                              />
                            </div>

                            <Label className="text-muted">
                              Right Thumb Print
                            </Label>
                          </Col>

                          <Col md={4} className="d-flex flex-column gap-2">
                            <div
                              style={{
                                objectFit: "cover",
                                width: "100%",
                                cursor: "pointer",
                                height: "200px",
                                minHeight: "200px",
                                maxHeight: "200px",
                                overflow: "hidden",
                              }}
                            >
                              <ModalImage
                                small={
                                  reduxLeftThumbPrint
                                    ? URL.createObjectURL(reduxLeftThumbPrint)
                                    : null
                                }
                                large={
                                  reduxLeftThumbPrint
                                    ? URL.createObjectURL(reduxLeftThumbPrint)
                                    : null
                                }
                                alt="Left Thumb Print"
                                onClick={() =>
                                  setLeftThumbPrintPreview(
                                    !leftThumbPrintPreview
                                  )
                                }
                              />
                            </div>

                            <Label className="text-muted">
                              Left Thumb Print
                            </Label>
                          </Col>

                          <Col md={4} className="d-flex flex-column gap-2">
                            <div
                              style={{
                                objectFit: "cover",
                                width: "100%",
                                cursor: "pointer",
                                height: "200px",
                                minHeight: "200px",
                                maxHeight: "200px",
                                overflow: "hidden",
                              }}
                            >
                              <ModalImage
                                small={
                                  reduxNomineeIdentificationFront
                                    ? URL.createObjectURL(
                                        reduxNomineeIdentificationFront
                                      )
                                    : null
                                }
                                large={
                                  reduxNomineeIdentificationFront
                                    ? URL.createObjectURL(
                                        reduxNomineeIdentificationFront
                                      )
                                    : null
                                }
                                alt="Nominee Identification Front Preview"
                                onClick={() =>
                                  setNomineeIdentificationFrontPreview(
                                    !nomineeIdentificationFrontPreview
                                  )
                                }
                              />
                            </div>

                            <Label className="text-muted">
                              Nominee Identification Front Preview
                            </Label>
                          </Col>

                          <Col md={4} className="d-flex flex-column gap-2">
                            <div
                              style={{
                                objectFit: "cover",
                                width: "100%",
                                cursor: "pointer",
                                height: "200px",
                                minHeight: "200px",
                                maxHeight: "200px",
                                overflow: "hidden",
                              }}
                            >
                              <ModalImage
                                small={
                                  reduxNomineeIdentificationBack
                                    ? URL.createObjectURL(
                                        reduxNomineeIdentificationBack
                                      )
                                    : null
                                }
                                large={
                                  reduxNomineeIdentificationBack
                                    ? URL.createObjectURL(
                                        reduxNomineeIdentificationBack
                                      )
                                    : null
                                }
                                alt="Nominee Identification Back Preview"
                                onClick={() =>
                                  setNomineeIdentificationBackPreview(
                                    !nomineeIdentificationBackPreview
                                  )
                                }
                              />
                            </div>

                              <Label className="text-muted">
                                Nominee Identification Back Preview
                              </Label>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Col>
                  </ScrollableContent>
                </Row>
              </CardBody>
              <CardFooter
                sm={12}
                className="d-flex justify-content-between mt-4"
              >
                <Button
                  color="light"
                  onClick={() =>
                    location.pathname === "/kycindividual"
                      ? dispatch(setKycSelectionIndividual("UploadDocuments"))
                      : dispatch(setKycSelectionMinor("UploadDocumentsMinor"))
                  }
                >
                  Back
                </Button>
                <Button
                  color="success"
                  type="submit"
                  onClick={handleFormSubmit}
                >
                  Submit
                </Button>
              </CardFooter>
            </Card>
    </React.Fragment>
  );
}
