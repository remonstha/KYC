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

import UploadKycForm from "../components/Corporate/UploadKycForm";
import BasicInfoCorporate from "../components/Corporate/BasicInfoCorporate";
import LocalAddress from "../components/Corporate/LocalAddress";
import Branch from "../components/Corporate/Branch";
import AccountOperatorsInfo from "../components/Corporate/AccountOperatorsInfo";
import Services from "../components/Corporate/Services";
import LocationCorporate from "../components/Corporate/LocationCorporate";
import RecommenderCorporate from "../components/Corporate/RecommendorCorporate";
import UploadDocumentsCorporate from "../components/Corporate/UploadDocumentsCorporate";
import Location from "../components/KycDetails/Location";

export default function KycForCorporate() {
  const dispatch = useDispatch();
  const kycSelectionCorporate = useSelector(
    (state) => state.Selection.kycSelectionCorporate
  );

  const [visible, setVisible] = useState(true); // State to control visibility of the alert
  const onDismiss = () => {
    setVisible(false); // Function to hide the alert
  };

  const [activeArrowTab, setactiveArrowTab] = useState(1);
  const [passedarrowSteps, setPassedarrowSteps] = useState([1]);

  const steps = [
    { id: 1, label: "Basic Info", key: "basicInformation" },
    { id: 2, label: "Address Info", key: "addressInformation" },
    { id: 3, label: "Branches", key: "branch" },
    { id: 4, label: "Account Operator Info", key: "accountOperatorInfo" },
    { id: 5, label: "Services", key: "services" },
    { id: 6, label: "Location", key: "location" },
    { id: 7, label: "Recommender", key: "recommender" },
    { id: 8, label: "Upload", key: "uploadDocuments" },
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
    switch (kycSelectionCorporate) {
      case "basicInformation":
        setAllTabsActive(1);
        break;
      case "addressInformation":
        setAllTabsActive(2);
        break;
      case "branch":
        setAllTabsActive(3);
        break;
      case "accountOperatorInfo":
        setAllTabsActive(4);
        break;
      case "services":
        setAllTabsActive(5);
        break;
      case "location":
        setAllTabsActive(6);
        break;
      case "recommender":
        setAllTabsActive(7);
        break;
      case "uploadDocuments":
        setAllTabsActive(8);
        break;
      default:
        break;
    }
  }, [kycSelectionCorporate]);

  let selectedComponent = null;

  switch (kycSelectionCorporate) {
    case "uploadKycForm":
      selectedComponent = <UploadKycForm />;
      break;
    case "basicInformation":
      selectedComponent = <BasicInfoCorporate />;
      break;
    case "addressInformation":
      selectedComponent = <LocalAddress />;
      break;
    case "branch":
      selectedComponent = <Branch />;
      break;
    case "accountOperatorInfo":
      selectedComponent = <AccountOperatorsInfo />;
      break;
    case "services":
      selectedComponent = <Services />;
      break;
    case "location":
      selectedComponent = <Location />;
      break;
    case "recommender":
      selectedComponent = <RecommenderCorporate />;
      break;
    case "uploadDocuments":
      selectedComponent = <UploadDocumentsCorporate />;
      break;
    default:
      selectedComponent = null;
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <h5 className="fw-bold mt-1">ACCOUNT OPENING FORM Corporate</h5>
          </Row>
        </Container>

        {kycSelectionCorporate !== "uploadKycForm" && (
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
                        activeArrowTab <= 8 && activeArrowTab > step.id - 1,
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
