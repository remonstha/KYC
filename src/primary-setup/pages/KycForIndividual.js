import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Progress,
  Alert,
} from "reactstrap";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import VideoKyc from "../components/KycDetails/VideoKyc";
import BasicInformation from "../components/KycDetails/BasicInformation";
import ApplicantDetails from "../components/KycDetails/ApplicantDetails";
import AddressDetails from "../components/KycDetails/AddressDetails";
import ContactInformation from "../components/KycDetails/ContactInformation";
import IdentificationDetailsIndividual from "../components/KycDetails/IdentificationDetailsIndividual";
import OccupationDetails from "../components/KycDetails/OccupationDetails";
import FamilyDetails from "../components/KycDetails/FamilyDetails";
import Location from "../components/KycDetails/Location";
import Declaration from "../components/KycDetails/Declaration";
import NomineeForm from "../components/KycDetails/NomineeForm";
import TransactionInfo from "../components/KycDetails/TransactionInfo";
import ServicesYouWant from "../components/KycDetails/ServicesYouWant";
import Recommender from "../components/KycDetails/recommender";
import UploadDocuments from "../components/KycDetails/UploadDocuments";
import FormVerification from "../components/ConfirmSubmit/FormVerification";
import UserDetailsCard from "../components/KycDetails/UserDetailsCard";

export default function KycForIndividual() {
  const dispatch = useDispatch();
  const kycSelectionIndividual = useSelector(
    (state) => state.Selection.KycSelectionIndividual
  );

  const [visible, setVisible] = useState(true); // State to control visibility of the alert
  const onDismiss = () => {
    setVisible(false); // Function to hide the alert
  };

  const [activeArrowTab, setactiveArrowTab] = useState(1);
  const [passedarrowSteps, setPassedarrowSteps] = useState([1]);

  const steps = [
    { id: 1, label: "Basic Info", key: "basicInfo" },
    { id: 2, label: "Personal Info", key: "personalInfo" },
    { id: 3, label: "Address Details", key: "address" },
    { id: 4, label: "Contact", key: "contact" },
    { id: 5, label: "Identification", key: "identification" },
    { id: 6, label: "Occupation", key: "occupation" },
    { id: 7, label: "Family Details", key: "familyDetails" },
    { id: 8, label: "Location", key: "location" },
    { id: 9, label: "Declaration", key: "declaration" },
    { id: 10, label: "Nominee", key: "nominee" },
    { id: 11, label: "Transaction Info", key: "transactionInfo" },
    { id: 12, label: "Services", key: "services" },
    { id: 13, label: "Recommender", key: "recommender" },
    { id: 14, label: "Upload", key: "upload" },
  ];

  const setAllTabsActive = (tab) => {
    const modifiedSteps = Array.from(
      { length: tab - 3 },
      (_, index) => index + 4
    );

    setactiveArrowTab(tab);
    setPassedarrowSteps(modifiedSteps);
  };

  const toggleArrowTab = (tab) => {
    if (activeArrowTab !== tab) {
      setAllTabsActive(tab);
    }
  };

  useEffect(() => {
    // This will be called after the component renders
    switch (kycSelectionIndividual) {
      case "BasicInfo":
        setAllTabsActive(1);
        break;
      case "ApplicantDetails":
        setAllTabsActive(2);
        break;
      case "AddressDetails":
        setAllTabsActive(3);
        break;
      case "ContactInformation":
        setAllTabsActive(4);
        break;
      case "IdentificationDetails":
        setAllTabsActive(5);
        break;
      case "OccupationDetails":
        setAllTabsActive(6);
        break;
      case "FamilyDetails":
        setAllTabsActive(7);
        break;
      case "Location":
        setAllTabsActive(8);
        break;
      case "Declaration":
        setAllTabsActive(9);
        break;
      case "NomineeForm":
        setAllTabsActive(10);
        break;
      case "TransactionInfo":
        setAllTabsActive(11);
        break;
      case "ServicesYouWant":
        setAllTabsActive(12);
        break;
      case "Recommender":
        setAllTabsActive(13);
        break;
      case "UploadDocuments":
        setAllTabsActive(14);
        break;

      default:
        break;
    }
  }, [kycSelectionIndividual]);

  let selectedComponent = null;

  switch (kycSelectionIndividual) {
    case "VideoKyc":
      selectedComponent = <VideoKyc />;
      break;
    case "BasicInfo":
      selectedComponent = <BasicInformation />;

      break;
    case "ApplicantDetails":
      selectedComponent = <ApplicantDetails />;
      break;
    case "AddressDetails":
      selectedComponent = <AddressDetails />;
      break;
    case "ContactInformation":
      selectedComponent = <ContactInformation />;
      break;
    case "IdentificationDetails":
      selectedComponent = <IdentificationDetailsIndividual />;
      break;
    case "OccupationDetails":
      selectedComponent = <OccupationDetails />;
      break;
    case "FamilyDetails":
      selectedComponent = <FamilyDetails />;
      break;
    case "Location":
      selectedComponent = <Location />;
      break;
    case "Declaration":
      selectedComponent = <Declaration />;
      break;
    case "NomineeForm":
      selectedComponent = <NomineeForm />;
      break;
    case "TransactionInfo":
      selectedComponent = <TransactionInfo />;
      break;
    case "ServicesYouWant":
      selectedComponent = <ServicesYouWant />;
      break;
    case "Recommender":
      selectedComponent = <Recommender />;
      break;
    case "UploadDocuments":
      selectedComponent = <UploadDocuments />;
      break;
    case "FormVerification":
      selectedComponent = <FormVerification />;
      break;
    default:
      selectedComponent = null;
  }


  return (
    <React.Fragment>
      <div className="page-content">

        {kycSelectionIndividual !== "FormVerification" && (
          <Container fluid>
            <Row>
              <h5 className="fw-bold mt-1">ACCOUNT OPENING FORM INDIVIDUAL</h5>
            </Row>
          </Container>
        )}

        {kycSelectionIndividual !== "VideoKyc" && kycSelectionIndividual !== "FormVerification" && (
          <div
            className="step-arrow-nav mb-4 mt-4"
            style={{ fontSize: "11px" }}
          >
            <Nav className="nav-pills custom-nav nav-justified" role="tablist">
              {steps.map((step) => (
                <NavItem key={step.id}>
                  <NavLink
                    href="#"
                    id={`steparrow-${step.key}-tab`}
                    className={classnames({
                      active: activeArrowTab === step.id,
                      done:
                        activeArrowTab <= 14 && activeArrowTab > step.id - 1,
                    })}
                  // onClick={() => toggleArrowTab(step.id)}
                  >
                    {step.label}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </div>
        )}


        <Container fluid>

          {kycSelectionIndividual !== "FormVerification" && (
            <Row>
              <Alert
                className="mt-2 fw-semibold"
                color="primary"
                isOpen={visible}
                toggle={onDismiss}
              >
                Please fill all the fields that are marked with{" "}
                <span className="text-danger">*</span> compulsorily.
              </Alert>
            </Row>
          )}
          {
            (kycSelectionIndividual === "IdentificationDetails" ||
              kycSelectionIndividual === "OccupationDetails" ||
              kycSelectionIndividual === "FamilyDetails" ||
              kycSelectionIndividual === "Location" ||
              kycSelectionIndividual === "Declaration" ||
              kycSelectionIndividual === "NomineeForm" ||
              kycSelectionIndividual === "TransactionInfo" ||
              kycSelectionIndividual === "ServicesYouWant" ||
              kycSelectionIndividual === "Recommender" ||
              kycSelectionIndividual === "UploadDocuments" ||
              kycSelectionIndividual === "FormVerification") && <UserDetailsCard />
          }
          <Row>{selectedComponent}</Row>
        </Container>




      </div>

    </React.Fragment>
  );
}
