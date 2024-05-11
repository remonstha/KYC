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
} from "reactstrap";
import { useSelector } from "react-redux";
import ModalImage from "react-modal-image";

import readEye from "../../assets/icons/readEye.png";
import print from "../../assets/icons/print.png";
import verifiedstatusTick from "../../assets/complianceImages/tick.png";
import secondIcon from "../../assets/complianceImages/dot.png";
import transferIcon from "../../assets/complianceImages/Vector.png";
import EcddModal from "../../modal/EcddModal";
import AmlModal from "../../modal/AmlModal";

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
      console.log("nooo");

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
          contentElement.scrollTo({ top: 70, behavior: "smooth" });
          break;
        case "Account Info":
          contentElement.scrollTo({
            top: accountInfoSectionAtTop ,
            behavior: "smooth",
          });
          break;
        case "Family Info":
          contentElement.scrollTo({
            top: familyInfoSectionAtTop ,
            behavior: "smooth",
          });
          break;
        case "Occupation":
          contentElement.scrollTo({
            top: occupationSectionAtTop ,
            behavior: "smooth",
          });
          break;
        case "Declaration":
          contentElement.scrollTo({
            top: declarationSectionAtTop ,
            behavior: "smooth",
          });
          break;
        case "Transaction Info":
          contentElement.scrollTo({
            top: transactionInfoSectionAtTop ,
            behavior: "smooth",
          });
          break;
        case "Services":
          contentElement.scrollTo({
            top: servicesSectionAtTop ,
            behavior: "smooth",
          });
          break;
        case "Identification":
          contentElement.scrollTo({
            top: identificationSectionAtTop ,
            behavior: "smooth",
          });
          break;
        case "Recommender":
          contentElement.scrollTo({
            top: recommenderSectionAtTop ,
            behavior: "smooth",
          });
          break;
        case "Upload Documents":
          contentElement.scrollTo({
            top: uploadDocumentsSectionAtTop ,
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

export default function ComplianceFormVerification() {
  const [activeSection, setActiveSection] = useState("Personal Info");
  const [activeByClick, setActiveByClick] = useState("Personal Info");

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

  const [riskLevel, setRiskLevel] = useState("Normal");
  const [visible, setVisible] = useState(true); // State to control visibility of the alert
  const [ecddModal, setEcddModal] = useState(false);
  const [amlModal, setAmlModal] = useState(false);

  const toggleAml = () => {
    setAmlModal(!amlModal);
  };
  const toggle = () => {
    setEcddModal(!ecddModal);
  };
  const onDismiss = () => {
    setVisible(false); // Function to hide the alert
  };

  const getRiskLevelColor = () => {
    if (riskLevel === "High") {
      return "text-danger"; // Red text for "High"
    } else if (riskLevel === "Low") {
      return "text-success"; // Green text for "Low"
    } else {
      return "text-dark"; // Default text color for "Normal"
    }
  };

  const handleRiskLevelChange = () => {
    if (riskLevel === "Normal") {
      setRiskLevel("Low");
    } else if (riskLevel === "Low") {
      setRiskLevel("High");
    } else {
      setRiskLevel("Normal");
    }
  };

  return (
    <React.Fragment>
      <EcddModal ecddModal={ecddModal} toggle={toggle} />
      <AmlModal amlModal={amlModal} toggle={toggleAml} />

      <div className="page-content">
        <Container fluid>
          <Col lg={12} className="mb-3">
            <Row>
              {/*---------------------------------- User Basic Detail with image -------------------–––---------*/}
              <Col
                lg={2}
                style={{
                  background:
                    "radial-gradient(1317.03% 148.69% at 79.24% 61.63%, rgba(22, 177, 95, 0.13) 67.16%, rgba(28, 208, 100, 0.15) 89.66%, rgba(30, 81, 211, 0.13) 14.93%, rgba(30, 135, 211, 0.15) 33.33%)",
                }}
              >
                <div className="d-flex py-3 align-items-center gap-3 px-2">
                  <div
                    className="image"
                    style={{
                      background:
                        "url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80')",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  ></div>
                  <div className="userDetail text-center">
                    <p className="m-0">
                      <span className="fw-semibold">John Doe</span>
                      <br />
                      <span className="text-muted fs-12"> 2023/10/10</span>
                      <br />
                      <svg
                        className="location-marker"
                        xmlns="http://www.w3.org/2000/svg"
                        width={15}
                        height={14}
                        viewBox="0 0 15 14"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_507_13080)">
                          <path
                            d="M7.75006 0.777771C6.53874 0.778783 5.37705 1.25909 4.5187 2.1138C3.66036 2.9685 3.17511 4.12814 3.16895 5.33944C3.16895 7.15555 4.18783 8.6761 4.9345 9.78444L5.07061 9.98666C5.8135 11.0633 6.61045 12.1017 7.45839 13.0978L7.75395 13.4439L8.0495 13.0978C8.89734 12.1016 9.69428 11.0633 10.4373 9.98666L10.5734 9.78055C11.3162 8.67222 12.3351 7.15555 12.3351 5.33944C12.3289 4.12747 11.8431 2.96724 10.9839 2.11243C10.1247 1.25761 8.96204 0.777755 7.75006 0.777771ZM7.75006 7.38888C7.24549 7.38888 6.75226 7.23926 6.33274 6.95894C5.91321 6.67862 5.58622 6.28019 5.39314 5.81404C5.20005 5.34788 5.14953 4.83494 5.24796 4.34007C5.3464 3.84521 5.58937 3.39064 5.94615 3.03386C6.30293 2.67708 6.75749 2.43411 7.25236 2.33568C7.74723 2.23724 8.26017 2.28776 8.72632 2.48085C9.19248 2.67394 9.59091 3.00092 9.87123 3.42045C10.1515 3.83998 10.3012 4.33321 10.3012 4.83777C10.3012 5.51437 10.0324 6.16325 9.55396 6.64168C9.07554 7.12011 8.42665 7.38888 7.75006 7.38888Z"
                            fill="url(#paint0_radial_507_13080)"
                          />
                          <path
                            d="M7.75036 6.28835C8.55148 6.28835 9.20092 5.63891 9.20092 4.83779C9.20092 4.03667 8.55148 3.38724 7.75036 3.38724C6.94924 3.38724 6.2998 4.03667 6.2998 4.83779C6.2998 5.63891 6.94924 6.28835 7.75036 6.28835Z"
                            fill="url(#paint1_radial_507_13080)"
                          />
                        </g>
                        <defs>
                          <radialGradient
                            id="paint1_radial_507_13080"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate( 8.58363 10.4323)  rotate(-107.854)  scale( 58.5964 18.4067)"
                          >
                            <stop
                              offset="0.149339"
                              stopColor="#1E51D3"
                              stopOpacity="0.86"
                            />
                            <stop offset="0.333333" stopColor="#1E87D3" />
                            <stop
                              offset="0.671581"
                              stopColor="#16B15F"
                              stopOpacity="0.87"
                            />
                            <stop offset="0.896606" stopColor="#1CD064" />
                          </radialGradient>
                          <radialGradient
                            id="paint0_radial_507_13080"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientUnits="userSpaceOnUse"
                            gradientTransform=" translate( 5.17513 8.59868 ) rotate(-103.121)  scale(  18.1261 4.31363)"
                          >
                            <stop
                              offset="0.149339"
                              stopColor="#1E51D3"
                              stopOpacity="0.86"
                            />
                            <stop offset="0.333333" stopColor="#1E87D3" />
                            <stop
                              offset="0.671581"
                              stopColor="#16B15F"
                              stopOpacity="0.87"
                            />
                            <stop offset="0.896606" stopColor="#1CD064" />
                          </radialGradient>
                          <clipPath id="clip0_507_13080">
                            <rect
                              width={14}
                              height={14}
                              fill="white"
                              transform="translate(0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      Nepal
                    </p>
                  </div>
                </div>
              </Col>

              {/*---------------------------------- Form Filled Details -------------------–––---------*/}
              <Col lg={6} className="bg-white">
                <div className="row align-items-center h-100">
                  {/*******************************  First List ************************************/}
                  <div className="col-4  fs-12">
                    <div className="d-flex flex-column gap-3">
                      <div className="d-flex gap-2 align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                        >
                          <path
                            d="M15.0723 3.5H4.57227C3.97553 3.5 3.40323 3.73705 2.98128 4.15901C2.55932 4.58097 2.32227 5.15326 2.32227 5.75V13.25C2.32227 13.8467 2.55932 14.419 2.98128 14.841C3.40323 15.2629 3.97553 15.5 4.57227 15.5H15.0723C15.669 15.5 16.2413 15.2629 16.6633 14.841C17.0852 14.419 17.3223 13.8467 17.3223 13.25V5.75C17.3223 5.15326 17.0852 4.58097 16.6633 4.15901C16.2413 3.73705 15.669 3.5 15.0723 3.5ZM14.5698 5L9.82227 8.5625L5.07477 5H14.5698ZM15.0723 14H4.57227C4.37335 14 4.18259 13.921 4.04194 13.7803C3.90128 13.6397 3.82227 13.4489 3.82227 13.25V5.9375L9.37227 10.1C9.50209 10.1974 9.65999 10.25 9.82227 10.25C9.98454 10.25 10.1424 10.1974 10.2723 10.1L15.8223 5.9375V13.25C15.8223 13.4489 15.7432 13.6397 15.6026 13.7803C15.4619 13.921 15.2712 14 15.0723 14Z"
                            fill="#495057"
                          />
                        </svg>
                        <p className="m-0">anisharyal058@gmail.com</p>
                      </div>
                      <div className="d-flex gap-2 align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={17}
                          height={17}
                          viewBox="0 0 17 17"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_507_13154)">
                            <path
                              d="M4.31693 9.67933L0.822266 6.83333L8.82227 0.5L16.8223 6.83333L13.3276 9.67933C12.5209 7.99933 10.8076 6.83333 8.82227 6.83333C6.8376 6.83333 5.1236 7.99867 4.31693 9.67933ZM8.82227 7.16667C7.58459 7.16667 6.3976 7.65833 5.52243 8.5335C4.64726 9.40867 4.1556 10.5957 4.1556 11.8333C4.1556 13.071 4.64726 14.258 5.52243 15.1332C6.3976 16.0083 7.58459 16.5 8.82227 16.5C10.0599 16.5 11.2469 16.0083 12.1221 15.1332C12.9973 14.258 13.4889 13.071 13.4889 11.8333C13.4889 10.5957 12.9973 9.40867 12.1221 8.5335C11.2469 7.65833 10.0599 7.16667 8.82227 7.16667Z"
                              fill="#495057"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_507_13154">
                              <rect
                                width={16}
                                height={16}
                                fill="white"
                                transform="translate(0.822266 0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>

                        <p className="m-0">anisharyal058@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  {/*********************************  Second List ************************************/}
                  <div className="col-4 gap-2 fs-12">
                    <div className="d-flex flex-column gap-3">
                      <div className="d-flex gap-1 align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={15}
                          height={15}
                          viewBox="0 0 15 15"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_507_13173)">
                            <path
                              d="M7.8221 4.58332V6.33332M8.98877 8.66666H10.7388M4.90544 8.66666H6.65544M7.8221 13.3333C11.0439 13.3333 13.6554 10.7217 13.6554 7.49999C13.6554 4.27824 11.0439 1.66666 7.8221 1.66666C4.60035 1.66666 1.98877 4.27824 1.98877 7.49999C1.98877 10.7217 4.60035 13.3333 7.8221 13.3333Z"
                              stroke="#495057"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_507_13173">
                              <rect
                                width={14}
                                height={14}
                                fill="white"
                                transform="translate(0.822266 0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>

                        <p className="m-0">
                          Type: <span className="fw-semibold">Savings</span>{" "}
                        </p>
                      </div>
                      <div className="d-flex gap-2 align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                        >
                          <path
                            d="M13.6423 10.6733L11.949 10.48C11.7499 10.4566 11.548 10.4786 11.3587 10.5445C11.1693 10.6103 10.9973 10.7182 10.8556 10.86L9.62896 12.0867C7.73642 11.1241 6.19815 9.58586 5.23563 7.69332L6.46896 6.45999C6.75563 6.17332 6.89563 5.77332 6.84896 5.36665L6.65563 3.68665C6.61783 3.36144 6.46175 3.06148 6.21712 2.84389C5.97248 2.62629 5.65636 2.50626 5.32896 2.50665H4.17563C3.42229 2.50665 2.79563 3.13332 2.84229 3.88665C3.19563 9.57999 7.74896 14.1267 13.4356 14.48C14.189 14.5267 14.8156 13.9 14.8156 13.1467V11.9933C14.8223 11.32 14.3156 10.7533 13.6423 10.6733Z"
                            fill="#495057"
                          />
                        </svg>
                        <p className="m-0">9849975133</p>
                      </div>
                    </div>
                  </div>
                  {/*******************************  Third List ************************************/}
                  <div className="col-4 fs-12">
                    <div className="d-flex flex-column gap-3">
                      <div className="d-flex gap-2 align-items-center">
                        <p className="m-0">Martial Status:</p>
                        <p className="m-0 text-muted">Single</p>
                      </div>
                      <div className="d-flex gap-1 align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                        >
                          <path
                            d="M16.0098 3.03125H3.63477C3.2618 3.03125 2.90412 3.17941 2.6404 3.44313C2.37667 3.70685 2.22852 4.06454 2.22852 4.4375V11.75C2.22852 12.123 2.37667 12.4806 2.6404 12.7444C2.90412 13.0081 3.2618 13.1562 3.63477 13.1562H16.0098C16.3827 13.1562 16.7404 13.0081 17.0041 12.7444C17.2679 12.4806 17.416 12.123 17.416 11.75V4.4375C17.416 4.06454 17.2679 3.70685 17.0041 3.44313C16.7404 3.17941 16.3827 3.03125 16.0098 3.03125ZM15.7285 11.4688H3.91602V4.71875H15.7285V11.4688ZM17.416 15.125C17.416 15.3488 17.3271 15.5634 17.1689 15.7216C17.0107 15.8799 16.796 15.9688 16.5723 15.9688H3.07227C2.84849 15.9688 2.63388 15.8799 2.47564 15.7216C2.31741 15.5634 2.22852 15.3488 2.22852 15.125C2.22852 14.9012 2.31741 14.6866 2.47564 14.5284C2.63388 14.3701 2.84849 14.2812 3.07227 14.2812H16.5723C16.796 14.2812 17.0107 14.3701 17.1689 14.5284C17.3271 14.6866 17.416 14.9012 17.416 15.125ZM8.13477 9.5V6.6875C8.13472 6.53686 8.17499 6.38896 8.25142 6.25915C8.32784 6.12934 8.43763 6.02235 8.56937 5.94931C8.70111 5.87626 8.85001 5.83981 9.00059 5.84376C9.15118 5.8477 9.29796 5.89188 9.4257 5.97172L11.6757 7.37797C11.7972 7.45378 11.8974 7.55927 11.9668 7.68449C12.0363 7.80972 12.0727 7.95055 12.0727 8.09375C12.0727 8.23695 12.0363 8.37778 11.9668 8.50301C11.8974 8.62823 11.7972 8.73372 11.6757 8.80953L9.4257 10.2158C9.29796 10.2956 9.15118 10.3398 9.00059 10.3437C8.85001 10.3477 8.70111 10.3112 8.56937 10.2382C8.43763 10.1651 8.32784 10.0582 8.25142 9.92835C8.17499 9.79854 8.13472 9.65064 8.13477 9.5Z"
                            fill="#495057"
                          />
                        </svg>
                        <p className="m-0">
                          Video KYC:
                          <span className="fw-semibold text-success">
                            {"  "}Yes
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>

              {/*---------------------------------- Action Buttons -------------------–––---------*/}
              <Col
                lg={4}
                className="bg-white ps-0 d-flex flex-column justify-content-center"
              >
                <div className="d-flex  justify-content-between">
                  <button
                    style={{
                      background: "rgba(22.07, 176.64, 95.32, 0.87)",
                      height: "35px",
                      padding: "0 3%",
                      color: "white",
                      fontSize: "12px", // Adjust the font size as needed
                      fontFamily: "Nunito",
                      fontWeight: "600",
                      wordWrap: "break-word",
                      border: "none",
                    }}
                  >
                    <svg
                      className="m-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1803_90)">
                        <path
                          opacity="0.3"
                          d="M13.9191 7.49818L13.9758 6.8961L14.1033 5.51485L12.7575 5.21026L12.1625 5.07568L11.8508 4.55151L11.1496 3.36151L9.88163 3.89985L9.32205 4.14068L8.76247 3.89985L7.49455 3.35443L6.7933 4.54443L6.48163 5.0686L5.88663 5.20318L4.5408 5.50776L4.6683 6.88193L4.72497 7.48401L4.3283 7.94443L3.41455 8.99276L4.3283 10.034L4.72497 10.4944L4.6683 11.0965L4.5408 12.4848L5.88663 12.7894L6.48163 12.924L6.7933 13.4482L7.49455 14.6311L8.75538 14.0857L9.32205 13.8519L9.88163 14.0928L11.1425 14.6382L11.8437 13.4482L12.1554 12.924L12.7504 12.7894L14.0962 12.4848L13.9687 11.1036L13.9121 10.5015L14.3087 10.0411L15.2225 8.99985L14.3087 7.9586L13.9191 7.49818ZM7.96913 12.3432L5.27747 9.64443L6.3258 8.5961L7.96913 10.2465L12.1129 6.0886L13.1612 7.13693L7.96913 12.3432Z"
                          fill="white"
                        />
                        <path
                          d="M17.1141 8.99292L15.3858 7.01667L15.6266 4.40292L13.0695 3.82208L11.7308 1.5625L9.32243 2.59667L6.9141 1.5625L5.57535 3.82208L3.01826 4.39583L3.2591 7.01667L1.53076 8.99292L3.2591 10.9692L3.01826 13.59L5.57535 14.1708L6.9141 16.4375L9.32243 15.3962L11.7308 16.4304L13.0695 14.1708L15.6266 13.59L15.3858 10.9762L17.1141 8.99292ZM14.3162 10.0413L13.9195 10.5017L13.9762 11.1038L14.1037 12.485L12.7578 12.7896L12.1628 12.9242L11.8512 13.4483L11.1499 14.6383L9.8891 14.0929L9.32243 13.8521L8.76285 14.0929L7.50201 14.6383L6.80076 13.4554L6.48909 12.9312L5.89409 12.7967L4.54826 12.4921L4.67576 11.1038L4.73243 10.5017L4.33576 10.0413L3.42201 9L4.33576 7.95167L4.73243 7.49125L4.66868 6.88208L4.54118 5.50792L5.88701 5.20333L6.48201 5.06875L6.79368 4.54458L7.49493 3.35458L8.75576 3.9L9.32243 4.14083L9.88201 3.9L11.1428 3.35458L11.8441 4.54458L12.1558 5.06875L12.7508 5.20333L14.0966 5.50792L13.9691 6.88917L13.9124 7.49125L14.3091 7.95167L15.2228 8.99292L14.3162 10.0413Z"
                          fill="white"
                        />
                        <path
                          d="M7.9695 10.2397L6.32617 8.58926L5.27783 9.64468L7.9695 12.3434L13.1687 7.13009L12.1203 6.07468L7.9695 10.2397Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1803_90">
                          <rect
                            width={17}
                            height={17}
                            fill="white"
                            transform="translate(0.822266 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    Verify Neg List
                  </button>
                  <button
                    style={{
                      border: "2px solid #16B15FDE",
                      height: "35px",
                      padding: "0 3%",
                      backgroundColor: "white",
                      color: "rgba(22.07, 176.64, 95.32, 0.87)",
                      fontSize: "12px", // Adjust the font size as needed
                      fontFamily: "Nunito",
                      fontWeight: "600",
                      wordWrap: "break-word",
                    }}
                  >
                    <svg
                      className="m-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1803_95)">
                        <path
                          d="M7.50427 6.259C6.99927 5.534 6.72327 5.138 6.87427 3.883C7.01327 2.727 7.55227 2.267 8.07227 1.824C8.47627 1.479 8.86927 1.144 9.05327 0.5C9.35427 1.222 9.01727 1.97 8.70427 2.664C8.39327 3.355 8.10527 3.993 8.49327 4.5C9.46427 5.771 10.4563 7.38 9.46427 9.086C9.25027 9.479 8.92527 9.767 8.60327 10.054C8.18127 10.429 7.76227 10.801 7.59927 11.402C7.33027 10.725 7.60727 10.036 7.88427 9.35C8.19027 8.591 8.49427 7.834 8.05627 7.099C7.85327 6.759 7.66627 6.492 7.50427 6.259ZM10.8753 5.085C10.7763 4.45737 10.907 3.8151 11.2433 3.276C11.6103 2.826 11.9443 2.634 12.2343 2.466C12.5793 2.267 12.8613 2.104 13.0643 1.589C13.3533 2.273 13.0643 2.777 12.7603 3.307C12.6413 3.514 12.5203 3.725 12.4313 3.952C12.2403 4.562 12.5323 4.845 12.8983 5.199C13.2563 5.545 13.6843 5.959 13.7973 6.816C13.8887 7.40412 13.7559 8.00511 13.4253 8.5C13.0693 8.936 12.7443 9.155 12.4603 9.346C12.1043 9.586 11.8123 9.783 11.6043 10.311C11.3123 9.623 11.6353 9.052 11.9573 8.483C12.0803 8.266 12.2033 8.049 12.2913 7.825C12.3643 7.267 12.0573 6.958 11.7103 6.608C11.3533 6.248 10.9523 5.845 10.8753 5.085ZM2.85727 5.085C2.75927 4.453 2.86227 3.785 3.22527 3.276C3.60127 2.748 3.95427 2.559 4.26027 2.395C4.58327 2.222 4.85427 2.077 5.04627 1.589C5.33527 2.272 5.03227 2.797 4.72127 3.338C4.59927 3.55 4.47527 3.765 4.38527 3.993C4.23327 4.378 4.51627 5.007 4.88627 5.235C5.88827 6.036 6.11327 7.521 5.43327 8.588C5.06727 9.036 4.72927 9.236 4.43427 9.411C4.08127 9.62 3.78927 9.793 3.58527 10.309C3.30727 9.653 3.59327 9.129 3.88527 8.595C4.01627 8.355 4.14827 8.114 4.23027 7.858C4.40927 7.301 4.09627 6.974 3.72027 6.581C3.37127 6.216 2.96827 5.796 2.85727 5.083V5.085ZM13.8223 9.499C14.5223 12.115 10.3483 12.499 8.32227 12.499C6.29627 12.499 2.12227 12.015 2.82227 9.499C2.18927 9.815 1.82227 10.46 1.82227 10.999C1.82227 12.518 4.73227 13.899 8.32227 13.899C11.9123 13.899 14.8223 12.518 14.8223 10.999C14.8223 10.46 14.4553 9.815 13.8223 9.499Z"
                          fill="#16B15F"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1803_95">
                          <rect
                            width={15}
                            height={15}
                            fill="white"
                            transform="translate(0.822266 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    Verify Hot List
                  </button>
                  <button
                    style={{
                      background: "rgba(22.07, 176.64, 95.32, 0.87)",
                      height: "35px",
                      padding: "0 3%",
                      color: "white",
                      fontSize: "12px", // Adjust the font size as needed
                      fontFamily: "Nunito",
                      fontWeight: "600",
                      wordWrap: "break-word",
                      border: "none",
                    }}
                  >
                    Verify De-Dupe{" "}
                    <svg
                      className="m-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M5.149 7.38101L2.6792 9.857L5.149 12.333V10.476H9.48818V9.23801H5.149V7.38101ZM13.8212 6.14302L11.3514 3.66702V5.52402H7.01219V6.76201H11.3514V8.61901L13.8212 6.14302Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </Col>
            </Row>
          </Col>

         
            <Card className="p-0">
              <CardHeader className="pl-3 pt-3 pb-0 d-flex ">
              <Col md={2} >
                  <h5 className="m-0">SUMMARY</h5>
                </Col>
             
                   
                   
                      <Col md={3}>
                        <div className="text-start">
                          <Button className=" me-3 bg-white text-dark rounded-0 border-dark">
                            <img src={readEye} className="me-3" />
                            Preview
                          </Button>
                          <Button className="  rounded-0 bg-dark text-white">
                            <img src={print} className="me-3" />
                            Files
                          </Button>
                        </div>
                      </Col>{" "}
                      <Col md={2}>
                        <div className="text-end">
                          <p className="font-weight-bold  ">
                            Risk:
                            <Button
                              className={`   bg-white rounded-0 border-white ${getRiskLevelColor()}`}
                              onClick={handleRiskLevelChange}
                            >
                              {riskLevel}
                            </Button>
                          </p>
                        </div>
                      </Col>
                      <Col md={5}>
                        <div className="text-end ">
                          <Button
                            onClick={() => setAmlModal(true)}
                            className="  me-3 bg-success text-White fW-b rounded-0 "
                          >
                            Verify Go AML
                            <img
                              src={verifiedstatusTick}
                              alt="Verified Status"
                              className="ms-2"
                            />
                          </Button>
                          <Button className="   me-3 bg-white text-success fW-b rounded-0">
                            Verify CIB
                            <img
                              src={secondIcon}
                              alt="Second Icon"
                              className="ms-1"
                            />
                          </Button>
                          <Button
                            onClick={() => setEcddModal(true)}
                            className="  bg-success text-White fW-b rounded-0"
                          >
                            Verify ECDD
                            <img
                              src={transferIcon}
                              alt="Transfer Icon"
                              className="ms-2"
                            />
                          </Button>
                        </div>
                      </Col>
                   
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
               
 
                    <Col md={12} className="p-3 pb-5 gy-5 mt-5 scrollable-section"  >
                      {/* Personal Info */}
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
                              <p>Anish Aryal</p>
                              <p>Father</p>
                              <p>Anish Aryal</p>
                              <p>Anish Aryal</p>
                              <p>2020-05-05</p>
                              <p>Bachelors</p>
                              <p>10</p>
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
                              <p>Husband/Wife</p>
                            </Col>
                            <Col md={6}>
                              <p>Manish Aryal</p>
                              <p>Father</p>
                              <p>Anish Aryal</p>
                              <p>Anish Aryal</p>
                              <p>2020-05-05</p>
                              <p>Bachelors</p>
                              <p>10</p>
                            </Col>
                          </Row>
                        </Col>
                      </div>

                      {/* Account Info */}
                      <div className="row " data-section="Account Info">
                        <h5 className="fw-semibold text-muted mt-5 mb-5">
                          Account Information
                        </h5>
                        <Col md={6}>
                          <Row className="leftside">
                            <Col md={6} className="fw-semibold">
                              <p>Account Type</p>
                              <p>Branch Name</p>
                              <p>Account Number</p>
                              <p>Purpose of Account Opening</p>
                            </Col>
                            <Col md={6}>
                              <p>Saving</p>
                              <p>Saving</p>
                              <p>Kalanki</p>
                              <p>1515454516654ANPR</p>
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
                              <p>Business</p>
                              <p>NPR</p>
                            </Col>
                          </Row>
                        </Col>
                      </div>

                      {/* Family Info */}
                      <div className="row " data-section="Family Info">
                        <h5 className="fw-semibold  mt-5 mb-5 text-muted">
                          Family Information
                        </h5>
                        <Col md={6}>
                          <Row className="leftside">
                            <Col md={6} className="fw-semibold">
                              <p>Name</p>
                              <p>Relationship</p>
                              <p>Citizenship/ID Number</p>
                              <p>date of Birth</p>
                              <p>Issued Place</p>
                            </Col>
                            <Col md={6}>
                              <p>Anish Aryal</p>
                              <p>Father</p>
                              <p>23-23-232332</p>
                              <p>2020-05-05</p>
                              <p>Kathmandu</p>
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
                              <p>2020-05-05</p>
                              <p>23423423422S</p>
                              <p>9861388523</p>
                              <p>yes</p>
                            </Col>
                          </Row>
                        </Col>
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
                              <p>Ants Pvt Ltd</p>
                              <p>Developer</p>
                              <p>Profession</p>
                              <p>2000000</p>
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
                              <p>Dipendra Pvt Ltd</p>
                              <p>420420420</p>
                              <p>Business</p>
                              <p>Private</p>
                              <p>200000000</p>
                              <p>420</p>
                            </Col>
                          </Row>
                        </Col>

                        <Col md={6}>
                          <Row className="rightside">
                            <Col md={6} className="fw-semibold">
                              <p>Lisence/Registration Renewal Date </p>
                              <p>Constitution</p>
                              <p>Total Employee</p>
                              <p>Total N.O of branch</p>
                            </Col>
                            <Col md={6}>
                              <p>2020-05-05l</p>
                              <p>Legal</p>
                              <p>1</p>
                              <p>420</p>
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
                              <p>Traders Co-operatives</p>
                              <p>CEO</p>
                              <p>Busines</p>
                              <p>20000032</p>
                            </Col>
                          </Row>
                        </Col>
                      </div>

                      {/* Declaration */}
                      <div className="row " data-section="Declaration">
                        <h5 className="fw-semibold  mt-5 mb-5 text-muted">
                          Declaration Information
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
                              <p>Ants Pvt Ltd</p>
                              <p>Developer</p>
                              <p>Profession</p>
                              <p>2000000</p>
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
                              <p>Dipendra Pvt Ltd</p>
                              <p>420420420</p>
                              <p>Business</p>
                              <p>Private</p>
                              <p>200000000</p>
                              <p>420</p>
                            </Col>
                          </Row>
                        </Col>

                        <Col md={6}>
                          <Row className="rightside">
                            <Col md={6} className="fw-semibold">
                              <p>Lisence/Registration Renewal Date </p>
                              <p>Constitution</p>
                              <p>Total Employee</p>
                              <p>Total N.O of branch</p>
                            </Col>
                            <Col md={6}>
                              <p>2020-05-05l</p>
                              <p>Legal</p>
                              <p>1</p>
                              <p>420</p>
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
                              <p>Traders Co-operatives</p>
                              <p>CEO</p>
                              <p>Busines</p>
                              <p>20000032</p>
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
                              <p>234234234</p>
                              <p>2342423</p>
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
                              <p>23</p>
                              <p>23</p>
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
                              <p>Transaction Alert</p>
                              <p> Merchant QR </p>
                            </Col>
                            <Col md={6}>
                              <p>Daily</p>
                              <p>Special</p>
                              <p>Nepali Calendar</p>
                              <p>Yes</p>
                              <p>Visa</p>
                              <p>Yes</p>
                              <p>Yes</p>
                              <p>Yes</p>
                            </Col>
                          </Row>
                        </Col>

                        <Col md={6}>
                          <Row className="rightside">
                            <Col md={6} className="fw-semibold">
                              <p>Online Banking</p>
                              <p>Mobile Banking</p>
                              <p>SMS Banking</p>
                              <p>Phone Pay</p>
                            </Col>
                            <Col md={6}>
                              <p>Yesl</p>
                              <p>No</p>
                              <p>Yes</p>
                              <p>Yes</p>
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
                              <p>Issued Place</p>
                              <p>Issued By</p>
                            </Col>
                            <Col md={6}>
                              <p>Citizenship</p>
                              <p>23-23-23232</p>
                              <p>Kathmandu</p>
                              <p>Person Thapa</p>
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
                              <p>12-12-2012</p>
                              <p>12-12-2012</p>
                              <p>2342342234</p>
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
                              <p>Title</p>
                              <p>Name</p>
                              <p>Account Numbe</p>
                            </Col>
                            <Col md={6}>
                              <p>Mr.</p>
                              <p>zoro</p>
                              <p>0N3P1363</p>
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
                                      ? URL.createObjectURL(
                                          reduxRightThumbPrint
                                        )
                                      : null
                                  }
                                  large={
                                    reduxRightThumbPrint
                                      ? URL.createObjectURL(
                                          reduxRightThumbPrint
                                        )
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
            </Card>
        
        </Container>
      </div>
    </React.Fragment>
  );
}
