import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Input,
  CardHeader,
  Alert,
} from "reactstrap";
import * as Yup from "yup";
import AddNomineeModal from "../../modal/NomineeAddModal";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "../../assets/icons/deleteIcon.png";
import { setKycSelectionMinor } from "../../slices/selection.slice";
import UserDetailsCard from "./UserDetailsCard";
import { deleteNomineeMinor } from "../../slices/KycMinor.slice";


export default function NomineeMinor() {
  const dispatch = useDispatch();

  const [nomineeAddModal, setNomineeAddModal] = useState(false);
  const [nominees, setNominees] = useState([]);
  const initialValues = useSelector(
    (state) => state.KycMinor.nomineeInformationMinor
  );

  const toggle = () => {
    setNomineeAddModal(!nomineeAddModal);
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "auto",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  };

  const imageStyle = {
    width: "100px", // Adjust as needed
    height: "auto", // Adjust as needed
    borderRadius: "10%",
  };

  const div1style = {
    backgroundColor: "lightblue",
    height: "100%",
    width: "35%", // Adjusted to 40% for each card
    display: "flex",
    flexDirection: "column ",
    justifyContent: "space-between",
    alignItems: "center", // Align everything in the center horizontally
    padding: "25px",
  };
  const addNominee = (nominee) => {
    setNominees([...nominees, nominee]);
  };

  const handleDeleteNominee = (index) => {
    const updatedNominees = [...nominees];
    updatedNominees.splice(index, 1);
    setNominees(updatedNominees);
  };

  return (
    <>
      <AddNomineeModal
        modalOpen={nomineeAddModal}
        toggleModal={toggle}
        onAddNominee={addNominee}
      />
      <UserDetailsCard />
      <Card className="p-0">
        <CardHeader className="px-4 py-0 pe-0">
          <div className="row py-0">
            <div className="col-6">
              <h5 className="m-0 py-3">Nominee's Information</h5>
            </div>

            <div className="col-6 py-2 d-flex justify-content-end">
              <button
                className="btn border-0 rounded-left text-white bg-primary"
                onClick={toggle}
                style={{
                  color: "#2E5AAA",
                  cursor: "pointer",
                  borderRadius: "2px 0px 0px 2px",
                }}
              >
                Add New Nominee
              </button>
            </div>
          </div>
        </CardHeader>

        <CardBody className="px-4">
          <Alert
            style={{
              background:
                "linear-gradient(100deg, rgba(28, 209, 100, 0.12) 37.99%, rgba(32, 133, 211, 0.12) 63.57%, rgba(60, 104, 216, 0.12) 75.64%, rgba(33, 143, 195, 0.12) 100.37%)",
            }}
            className="fw-semibold text-secondary mt-3"
          >
            In the event of my death or incapacity, the following named nominee
            shall be entitled to the balance.
          </Alert>
          <Row>
            {initialValues.map((initialValues, index) => (
              <Col xl={6} lg={8} md={10} sm={12}>
                <div className="d-flex flex-row justify-content-between">
                  <Card key={index} style={cardStyle}>
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                      }}
                    >
                      <img
                        src={DeleteIcon}
                        alt="Delete"
                        style={{ width: "20px", cursor: "pointer" }}
                        // onClick={() => handleDeleteNominee(index)}
                        onClick={() => dispatch(deleteNomineeMinor(index))}
                      />
                    </div>
                    <Col md={3} style={div1style}>
                      <img
                        src="https://media.licdn.com/dms/image/C5603AQGlOVdzYxtD-g/profile-displayphoto-shrink_800_800/0/1633667584848?e=2147483647&v=beta&t=u-fqqXgoaAV1mPTY8qOLR5Myvl-AAXTB92-i5iSrgcQ"
                        alt="Person"
                        style={imageStyle}
                      />
                      <div className="mt-2 text-center ">
                        <p style={{ marginBottom: "4px" }}>
                          {initialValues.name}
                        </p>
                        <p style={{ marginBottom: "4px" }}>
                          {initialValues.dateOfBirth}
                        </p>
                        <p style={{ marginBottom: "4px" }}>
                          {initialValues.relationship}
                        </p>
                        <p style={{ marginBottom: "4px" }}>
                          {initialValues.permDistrict},{" "}
                          {initialValues.permCountry}
                        </p>
                        <p
                          style={{
                            backgroundColor: "white",
                            borderRadius: "12%",
                            color: "green",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "50px",
                            margin: "0 auto", // Center the white background horizontally
                          }}
                        >
                          {initialValues.nomineesPercentageShare}%
                        </p>
                      </div>
                    </Col>

                    <Col className="mt-3">
                      <div>
                        <Row className="ms-2 mt-2 p-2">
                          <Col xs="5" className="mb-2 text-muted">
                            Citizenship No.:
                          </Col>
                          <Col xs="7" className="mb-2">
                            <strong>{initialValues.idNumber}</strong>{" "}
                          </Col>

                          <Col xs="5" className="mb-2 text-muted">
                            {" "}
                            Issued Place:{" "}
                          </Col>
                          <Col xs="7" className="mb-2">
                            {" "}
                            <strong> {initialValues.placeOfIssue}</strong>
                          </Col>

                          <Col xs="5" className="mb-2 text-muted">
                            Issued Date:
                          </Col>
                          <Col xs="7" className="mb-2">
                            {" "}
                            <strong>{initialValues.dateOfIssue}</strong>
                          </Col>

                          <Col xs="5" className="mb-2 text-muted">
                            Father's Name:
                          </Col>
                          <Col xs="7" className="mb-2">
                            <strong>{initialValues.fatherName}</strong>
                          </Col>

                          <Col xs="5" className="mb-2 text-muted">
                            Mother's Name:
                          </Col>
                          <Col xs="7" className="mb-2">
                            {" "}
                            <strong>{initialValues.motherName}</strong>
                          </Col>

                          <Col xs="5" className="mb-2 text-muted">
                            {" "}
                            Grandfather's Name:{" "}
                          </Col>
                          <Col xs="7" className="mb-2">
                            {" "}
                            <strong>{initialValues.grandfatherName}</strong>
                          </Col>

                          <Col xs="5" className="mb-2 text-muted">
                            {" "}
                            Temporary Address:
                          </Col>
                          <Col xs="7" className="mb-2">
                            {" "}
                            <strong>
                              {initialValues.tempDistrict},{" "}
                              {initialValues.tempCountry}
                            </strong>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
          <div className="d-flex justify-content-between mt-4">
            <Button
              color="light"
              onClick={() => dispatch(setKycSelectionMinor("DeclarationMinor"))}
            >
              Back
            </Button>
            <Button
              color="primary"
              type="submit"
              onClick={() => {
                console.log("nomines are : ", nominees);
                // dispatch(updateTransactionInfo(nominees))
                dispatch(setKycSelectionMinor("TransactionInfoMinor"));
              }}
            >
              Next
            </Button>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
