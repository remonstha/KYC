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
export default function OccupationDetailsForSalaried() {
  const data = useSelector(state => state.KycDetails.basicInformation);

  return (
    <div>
          <Card style={{ border: "1px solid rgba(206, 212, 218, 1)" }}>
      <CardHeader className="p-2">
        <h5 className="mt-1 ms-2 text-muted">Occupation</h5>
      </CardHeader>

      <CardBody>
      <h5 className="text-muted mt-3">Salaried/Others</h5>
        <Row className="p-5">
          
          <Col sm={4}>
            <p className="fw-bold">Institution Name:</p>
          </Col>
          <Col sm={8}>
            <p className="fw-medium">{data.institutionName || 'N/A'}</p>
          </Col>
          
          <Col sm={4} className="mt-3">
            <p className="fw-bold">Designation:</p>
          </Col>
          <Col sm={8} className="mt-3">
            <p className="fw-medium">{data.designationName || 'N/A'}</p>
          </Col>
          
          <Col sm={4} className="mt-3">
            <p className="fw-bold">Occupation Type:</p>
          </Col>
          <Col sm={8} className="mt-3">
            <p className="fw-medium">{data.occupationType || 'N/A'}</p>
          </Col>
          
          <Col sm={4} className="mt-3">
            <p className="fw-bold">Estimated Annual Income:</p>
          </Col>
          <Col sm={8} className="mt-3">
            <p className="fw-medium">{data.estimatedIncome || 'N/A'}</p>
          </Col>
        </Row>

        <h5 className="text-muted mt-3">Additional Occupation</h5>

        <Row className="p-5">
          
          <Col sm={4}>
            <p className="fw-bold">Institution Name:</p>
          </Col>
          <Col sm={8}>
            <p className="fw-medium">{data.addInstitutionName || 'N/A'}</p>
          </Col>
          
          <Col sm={4} className="mt-3">
            <p className="fw-bold">Designation:</p>
          </Col>
          <Col sm={8} className="mt-3">
            <p className="fw-medium">{data.addDesignationName || 'N/A'}</p>
          </Col>
          
          <Col sm={4} className="mt-3">
            <p className="fw-bold">Occupation Type:</p>
          </Col>
          <Col sm={8} className="mt-3">
            <p className="fw-medium">{data.addOccupationType || 'N/A'}</p>
          </Col>
          
          <Col sm={4} className="mt-3">
            <p className="fw-bold">Estimated Annual Income:</p>
          </Col>
          <Col sm={8} className="mt-3">
            <p className="fw-medium">{data.addAnnualIncome || 'N/A'}</p>
          </Col>
        </Row>
        </CardBody>
        </Card>
    </div>
  )
}
