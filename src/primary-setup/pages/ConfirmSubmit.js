import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Alert,
  CardImg,
  CardText,
  CardColumns,
  CardHeader,
  Button,
} from "reactstrap";
import {
  MdEmail,
  MdPhone,
  MdSchool,
  MdSingleBed,
  MdLocationOn,
  MdPlace,
} from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { setKycSelectionIndividualSubmit } from "../slices/selection.slice";

import RightTickMark from "../assets/icons/rightTickMark.png";
import readEye from "../assets/icons/readEye.png";
import print from "../assets/icons/print.png";

import BasicInformationSubmit from "../components/ConfirmSubmit/BasicInformationSubmit";
import PersonalDetailsSubmit from "../components/ConfirmSubmit/PersonalDetailsSubmit";
import ContactInformationSubmit from "../components/ConfirmSubmit/ContactInformationSubmit";
import AddressDetailsSubmit from "../components/ConfirmSubmit/AddressDetailsSubmit";
import FamilyDetailsSubmit from "../components/ConfirmSubmit/FamilyDetailsSubmit";
import IdentificationDetailsSubmit from "../components/ConfirmSubmit/IdentificationDetailsSubmit";
import OccupationDetailsForSalaried from "../components/ConfirmSubmit/OccupationDetailsForSalaried";
import OccupationDetailsForSelfEmployed from "../components/ConfirmSubmit/OccupationDetailsForSelfEmployed";
import LocationSubmit from "../components/ConfirmSubmit/LocationSubmit";
import DeclarationSubmit from "../components/ConfirmSubmit/DeclarationSubmit";
import NomineeSubmit from "../components/ConfirmSubmit/NomineeSubmit";
import TransactionInfoSubmit from "../components/ConfirmSubmit/TransactionInfoSubmit";
import ServicesSubmit from "../components/ConfirmSubmit/ServicesSubmit";
import RecommenderSubmit from "../components/ConfirmSubmit/RecommenderSubmit";
import UploadDocumentsSubmit from "../components/ConfirmSubmit/UploadDocumentsSubmit";
import UserDetailsCard from "../components/KycDetails/UserDetailsCard";

export default function ConfirmSubmit() {
  const dispatch = useDispatch();
  const kycSelectionIndividualSubmit = useSelector(state => state.Selection.kycSelectionIndividualSubmit);


  const [visible, setVisible] = useState(true); // State to control visibility of the alert

  const onDismiss = () => {
    setVisible(false); // Function to hide the alert
  };

  const sideMenuStyle = {
    border: "1px solid rgba(61, 120, 227, 1)", //rgba(233, 235, 236, 1)
    // minWidth: '250px',
    minHeight: "30px",
    borderRadius: "4px",
    cursor: 'pointer',
    marginTop: ".5em",
    //////////////////////////////////////////////////////////////////////////////////////////////////////////+7
  };
  return (
    <div className="page-content">
      <Container fluid>
        <Row>
          <h5 className=" mt-1">Verification</h5>

          <Alert
            className="mt-2 fw-bold"
            color="primary"
            isOpen={visible}
            toggle={onDismiss}
          >
            Please verify your details before submitting the form
          </Alert>
          <UserDetailsCard/>
        </Row>

        <Row className="mt-2">
          <Card>
            <Row>
              <Col md="2" className="mt-2">
                <CardBody style={sideMenuStyle} onClick={() => dispatch(setKycSelectionIndividualSubmit('basicInformation'))} >
                  <img src={RightTickMark} />
                  <span className="ms-3 fw-medium">Basic Information </span>
                </CardBody>

                <CardBody style={sideMenuStyle} onClick={() => dispatch(setKycSelectionIndividualSubmit('personalDetails'))}>
                  <img src={RightTickMark} />
                  <span className="ms-3 fw-medium">Personal Information </span>
                </CardBody>

                <CardBody style={sideMenuStyle} onClick={() => dispatch(setKycSelectionIndividualSubmit('contactInformation'))}>
                  <img src={RightTickMark} />
                  <span className="ms-3 fw-medium">Contact </span>
                </CardBody>

                <CardBody style={sideMenuStyle} onClick={() => dispatch(setKycSelectionIndividualSubmit('addressDetails'))}>
                  <img src={RightTickMark} />
                  <span className="ms-3 fw-medium">Address </span>
                </CardBody>

                <CardBody style={sideMenuStyle} onClick={() => dispatch(setKycSelectionIndividualSubmit('familyDetails'))}>
                  <img src={RightTickMark} />
                  <span className="ms-3 fw-medium">Family Details </span>
                </CardBody>

                <CardBody style={sideMenuStyle} onClick={() => dispatch(setKycSelectionIndividualSubmit('identificationDetails'))}>
                  <img src={RightTickMark} />
                  <span className="ms-3 fw-medium">Identification </span>
                </CardBody>

                <CardBody style={sideMenuStyle} onClick={() => dispatch(setKycSelectionIndividualSubmit('occupationDetailsForSelfEmployed'))}>
                  <img src={RightTickMark} />
                  <span className="ms-3 fw-medium">Occupation </span>
                </CardBody>

                <CardBody style={sideMenuStyle} onClick={() => dispatch(setKycSelectionIndividualSubmit('location'))}>
                  <img src={RightTickMark} />
                  <span className="ms-3 fw-medium">Location </span>
                </CardBody>

                <CardBody style={sideMenuStyle} onClick={() => dispatch(setKycSelectionIndividualSubmit('declaration'))}>
                  <img src={RightTickMark} />
                  <span className="ms-3 fw-medium">Declaration </span>
                </CardBody>

                <CardBody style={sideMenuStyle} onClick={() => dispatch(setKycSelectionIndividualSubmit('transactionInfo'))}>
                  <img src={RightTickMark} />
                  <span className="ms-3 fw-medium">Transaction Info </span>
                </CardBody>

                <CardBody style={sideMenuStyle} onClick={() => dispatch(setKycSelectionIndividualSubmit('services'))}>
                  <img src={RightTickMark} />
                  <span className="ms-3 fw-medium">Services </span>
                </CardBody>

                <CardBody style={sideMenuStyle} onClick={() => dispatch(setKycSelectionIndividualSubmit('recommender'))}>
                  <img src={RightTickMark} />
                  <span className="ms-3 fw-medium">Recommenders </span>
                </CardBody>

                <CardBody style={sideMenuStyle} onClick={() => dispatch(setKycSelectionIndividualSubmit('uploadDocuments'))}>
                  <img src={RightTickMark} />
                  <span className="ms-3 fw-medium">Uploads </span>
                </CardBody>
              </Col>

              <Col md="10" className="mt-2">
                <div className="text-end">
                  <Button className="mt-3 mb-3 me-3 bg-white text-dark rounded-0 border-dark">
                    <img src={readEye} className="me-3" />
                    View KYC
                  </Button>
                  <Button className="mt-3 mb-3 rounded-0 bg-dark text-white">
                    <img src={print} className="me-3" />
                    Print Preview
                  </Button>
                </div>

                {kycSelectionIndividualSubmit === 'basicInformation' && (
                  <BasicInformationSubmit />
                )
                }

                {kycSelectionIndividualSubmit === 'personalDetails' && (
                  <PersonalDetailsSubmit />
                )
                }

                {kycSelectionIndividualSubmit === 'contactInformation' && (
                  <ContactInformationSubmit />
                )
                }

                {kycSelectionIndividualSubmit === 'addressDetails' && (
                  <AddressDetailsSubmit />
                )
                }

                {kycSelectionIndividualSubmit === 'familyDetails' && (
                  <FamilyDetailsSubmit />
                )
                }

                {kycSelectionIndividualSubmit === 'identificationDetails' && (
                  <IdentificationDetailsSubmit />
                )
                }

                {kycSelectionIndividualSubmit === 'occupationDetailsForSelfEmployed' && (
                  <OccupationDetailsForSelfEmployed />
                )
                }

                {kycSelectionIndividualSubmit === 'location' && (
                  <LocationSubmit />
                )
                }

                {kycSelectionIndividualSubmit === 'declaration' && (
                  <DeclarationSubmit />
                )
                }

                {kycSelectionIndividualSubmit === 'nominee' && (
                  <NomineeSubmit />
                )
                }

                {kycSelectionIndividualSubmit === 'transactionInfo' && (
                  <TransactionInfoSubmit />
                )
                }

                {kycSelectionIndividualSubmit === 'services' && (
                  <ServicesSubmit />
                )
                }

                {kycSelectionIndividualSubmit === 'recommender' && (
                  <RecommenderSubmit />
                )
                }

                {kycSelectionIndividualSubmit === 'uploadDocuments' && (
                  <UploadDocumentsSubmit />
                )
                }

              </Col>

              <Col col={12} className="d-flex justify-content-between mt-3 mb-4">
                <Button
                  color="light"
                  onClick={() => 1}
                >
                  Back
                </Button>
                <Button color="success" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Card>
        </Row>
      </Container>
    </div>
  );
}
