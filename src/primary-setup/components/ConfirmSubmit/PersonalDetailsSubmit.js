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
} from "reactstrap";
import { useSelector } from "react-redux";


export default function PersonalDetailsSubmit() {
  const data = useSelector(state => state.KycDetails.applicantDetails);

  return (
    <Card style={{ border: "1px solid rgba(206, 212, 218, 1)" }}>
      <CardHeader className="p-2">
        <h5 className="mt-1 ms-2 text-muted">Personal Details</h5>
      </CardHeader>

      <CardBody className="p-5">
        <Row>
            
          <Col sm={3}>
            <p className="fw-bold">Name:</p>
          </Col>
          <Col sm={3}>
            <p className="fw-medium"> {`${data.otherSelect || data.titleSelect} ${data.firstName} ${data.middleName} ${data.lastName}`}</p>
          </Col>

          <Col sm={3}>
            <p className="fw-bold">Guardian's Name:</p>
          </Col>
          <Col sm={3}>
            <p className="fw-medium">{data.guardianName || 'N/A'}</p>
          </Col>

          <Col sm={3}  className="mt-3">
            <p className="fw-bold">Nationality:</p>
          </Col>
          <Col sm={3}  className="mt-3">
            <p className="fw-medium">{data.nationality || 'N/A'}</p>
          </Col>

          <Col sm={3}  className="mt-3">
            <p className="fw-bold">Guardian's Relationship:</p>
          </Col>
          <Col sm={3}  className="mt-3">
            <p className="fw-medium">{data.guardianRelationship || 'N/A'}</p>
          </Col>

          <Col sm={3}  className="mt-3">
            <p className="fw-bold">Marital Status:</p>
          </Col>
          <Col sm={3}  className="mt-3">
            <p className="fw-medium">{data.maritalSelect}</p>
          </Col>

          <Col sm={3}  className="mt-3">
            <p className="fw-bold">Father's Name:</p>
          </Col>
          <Col sm={3}  className="mt-3">
            <p className="fw-medium">{data.fatherName || 'N/A'} </p>
          </Col>

          <Col sm={3}  className="mt-3">
            <p className="fw-bold">Gender:</p>
          </Col>
          <Col sm={3}  className="mt-3">
            <p className="fw-medium">{data.genderSelect === 'others' ? data.otherGender : data.genderSelect}</p>
          </Col>

          <Col sm={3}  className="mt-3">
            <p className="fw-bold">Mother's Name:</p>
          </Col>
          <Col sm={3}  className="mt-3">
            <p className="fw-medium">{data.motherName || 'N/A'} </p>
          </Col>

          <Col sm={3}  className="mt-3">
            <p className="fw-bold">Date of Birth:</p>
          </Col>
          <Col sm={3}  className="mt-3">
            <p className="fw-medium">{data.DOB}(AD)/{data.DOBN}(BS)</p>
          </Col>

          <Col sm={3}  className="mt-3">
            <p className="fw-bold">Grand Father's Name:</p>
          </Col>
          <Col sm={3}  className="mt-3">
            <p className="fw-medium">{data.grandFatherName || 'N/A'}</p>
          </Col>

          <Col sm={3}  className="mt-3">
            <p className="fw-bold">Education:</p>
          </Col>
          <Col sm={3}  className="mt-3">
            <p className="fw-medium">{data.education}</p>
          </Col>

          <Col sm={3}  className="mt-3">
            <p className="fw-bold">Grand Mother's Name:</p>
          </Col>
          <Col sm={3}  className="mt-3">
            <p className="fw-medium">{data.grandMotherName || 'N/A'}</p>
          </Col>

          <Col sm={3}  className="mt-3">
            <p className="fw-bold">Family Size:</p>
          </Col>
          <Col sm={3}  className="mt-3">
            <p className="fw-medium">{data.familySize || 'N/A'}</p>
          </Col>

          <Col sm={3}  className="mt-3">
            <p className="fw-bold">Husband/Wife</p>
          </Col>
          <Col sm={3}  className="mt-3">
            <p className="fw-medium">{data.wifeName || 'N/A'}</p>
          </Col>

         
        </Row>
      </CardBody>
    </Card>
  );
}
