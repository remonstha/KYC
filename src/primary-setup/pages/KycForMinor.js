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

import VideoKycMinor from "../components/Minor/VideoKycMinor";
import BasicInfoMinor from "../components/Minor/BasicInfoMinor";
import PersonalDetailsMinor from "../components/Minor/PersonalDetailsMinor";
import FamilyDetailsMinor from "../components/Minor/FamilyDetailsMinor";
import AddressDetailsMinor from "../components/Minor/AddressDetailsMinor";
import ContactMinor from "../components/Minor/ContactMinor";
import Guardian from "../components/Minor/Guardian";
import IdentificationMinor from "../components/Minor/IdentificationMinor";
import LocationMinor from "../components/Minor/LocationMinor";
import DeclarationMinor from "../components/Minor/DeclarationMinor";
import NomineeMinor from "../components/Minor/NomineeMinor";
import TransactionInfoMinor from "../components/Minor/TransactionInfoMinor";
import ServicesMinor from "../components/Minor/ServicesMinor";
import RecommenderMinor from "../components/Minor/RecommenderMinor";
import UploadDocumentsMinor from "../components/Minor/UploadDocumentsMinor";
import Location from "../components/KycDetails/Location";
import FormVerification from "../components/ConfirmSubmit/FormVerification";

export default function KycForMinor() {
  const dispatch = useDispatch();
  const kycSelectionMinor = useSelector(
    (state) => state.Selection.kycSelectionMinor
  );

  const [visible, setVisible] = useState(true); // State to control visibility of the alert
  const onDismiss = () => {
    setVisible(false); // Function to hide the alert
  };

  const [activeArrowTab, setactiveArrowTab] = useState(1);
  const [passedarrowSteps, setPassedarrowSteps] = useState([1]);

  const steps = [
    { id: 1, label: "Basic Info", key: "BasicInformationMinor" },
    { id: 2, label: "Personal Info", key: "PersonalDetailsMinor" },
    { id: 3, label: "Family Details", key: "FamilyDetailsMinor" },
    { id: 4, label: "Address", key: "AddressDetailsMinor" },
    { id: 5, label: "Contact", key: "ContactMinor" },
    { id: 6, label: "Guardian", key: "Guardian" },
    { id: 7, label: "Identification", key: "IdentificationMinor" },
    { id: 8, label: "Location", key: "LocationMinor" },
    { id: 9, label: "Declaration", key: "DeclarationMinor" },
    { id: 10, label: "Nominee", key: "NomineeMinor" },
    { id: 11, label: "Transaction Info", key: "TransactionInfoMinor" },
    { id: 12, label: "Services", key: "ServicesMinor" },
    { id: 13, label: "Recommender", key: "RecommenderMinor" },
    { id: 14, label: "Upload", key: "UploadDocumentsMinor" },
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
    switch (kycSelectionMinor) {
      case "BasicInformationMinor":
        setAllTabsActive(1);
        break;
      case "PersonalDetailsMinor":
        setAllTabsActive(2);
        break;
      case "FamilyDetailsMinor":
        setAllTabsActive(3);
        break;
      case "AddressDetailsMinor":
        setAllTabsActive(4);
        break;
      case "ContactMinor":
        setAllTabsActive(5);
        break;
      case "Guardian":
        setAllTabsActive(6);
        break;
      case "IdentificationMinor":
        setAllTabsActive(7);
        break;
      case "LocationMinor":
        setAllTabsActive(8);
        break;
      case "DeclarationMinor":
        setAllTabsActive(9);
        break;
      case "NomineeMinor":
        setAllTabsActive(10);
        break;
      case "TransactionInfoMinor":
        setAllTabsActive(11);
        break;
      case "ServicesMinor":
        setAllTabsActive(12);
        break;
      case "RecommenderMinor":
        setAllTabsActive(13);
        break;
      case "UploadDocumentsMinor":
        setAllTabsActive(14);
        break;
        

      default:
        break;
    }
  }, [kycSelectionMinor]);

  let selectedComponent = null;

  switch (kycSelectionMinor) {
    case "VideoKycMinor":
      selectedComponent = <VideoKycMinor />;
      break;
    case "BasicInformationMinor":
      selectedComponent = <BasicInfoMinor />;
      break;
    case "PersonalDetailsMinor":
      selectedComponent = <PersonalDetailsMinor />;
      break;
    case "FamilyDetailsMinor":
      selectedComponent = <FamilyDetailsMinor />;
      break;
    case "AddressDetailsMinor":
      selectedComponent = <AddressDetailsMinor />;
      break;
    case "ContactMinor":
      selectedComponent = <ContactMinor />;
      break;
    case "Guardian":
      selectedComponent = <Guardian />;
      break;
    case "IdentificationMinor":
      selectedComponent = <IdentificationMinor />;
      break;
    case "LocationMinor":
      selectedComponent = <Location />;
      break;
    case "DeclarationMinor":
      selectedComponent = <DeclarationMinor />;
      break;
    case "NomineeMinor":
      selectedComponent = <NomineeMinor />;
      break;
    case "TransactionInfoMinor":
      selectedComponent = <TransactionInfoMinor />;
      break;
    case "ServicesMinor":
      selectedComponent = <ServicesMinor />;
      break;
    case "RecommenderMinor":
      selectedComponent = <RecommenderMinor />;
      break;
    case "UploadDocumentsMinor":
      selectedComponent = <UploadDocumentsMinor />;
      break;
      case "FormVerification":
        selectedComponent = <FormVerification />;
        break;
    default:
      selectedComponent = null;
  }

  return (
    <React.Fragment>
        {kycSelectionMinor === "FormVerification" && (
          <Container fluid>
            <Row>{selectedComponent}</Row>
          </Container>
        )}
      <div className="page-content">
      {kycSelectionMinor !== "FormVerification" && (

        <Container fluid>
          <Row>
            <h5 className="fw-bold mt-1">ACCOUNT OPENING FORM MINOR</h5>
          </Row>
          </Container>
          )}

          {kycSelectionMinor !== "VideoKycMinor" && kycSelectionMinor !== "FormVerification"  &&(
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

          <Row>{selectedComponent}</Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
