import React, { useState, useMemo } from "react";
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

export default function IdentificationDetailsSubmit() {
  const data = useSelector(state => state.KycDetails.identificationDetailsIndividual);

  return (
    <div>
      <Card style={{ border: "1px solid rgba(206, 212, 218, 1)" }}>
        <CardHeader className="p-2">
          <h5 className="mt-1 ms-2 text-muted">Identification</h5>
        </CardHeader>

        <CardBody className="p-5">
          <Row>
            <Col sm={3}>
              <p className="fw-bold">Identification Type:</p>
            </Col>
            <Col sm={3}>
              <p className="fw-medium">{data.otherIdentificationType || data.identificationType || 'N/A'}</p>
            </Col>

            <Col sm={3}>
              <p className="fw-bold">Issued Date:</p>
            </Col>
            <Col sm={3}>
              <p className="fw-medium">{data.issuedDate || 'N/A'}</p>
            </Col>

            <Col sm={3} className="mt-3">
              <p className="fw-bold">Issued Place:</p>
            </Col>
            <Col sm={3} className="mt-3">
              <p className="fw-medium">{data.issuedPlace || 'N/A'}</p>
            </Col>

            <Col sm={3} className="mt-3">
              <p className="fw-bold">Expiry Date:</p>
            </Col>
            <Col sm={3} className="mt-3">
              <p className="fw-medium">{data.expiryDate || 'N/A'}</p>
            </Col>

            <Col sm={3} className="mt-3">
              <p className="fw-bold">Issued Date:</p>
            </Col>
            <Col sm={3} className="mt-3">
              <p className="fw-medium">{data.issuedDate || 'N/A'}</p>
            </Col>

            <Col sm={3} className="mt-3">
              <p className="fw-bold">PAN Number:</p>
            </Col>
            <Col sm={3} className="mt-3">
              <p className="fw-medium">{data.panNumber || "N/A"}</p>
            </Col>

            <Col sm={3} className="mt-3">
              <p className="fw-bold">Issued By:</p>
            </Col>
            <Col sm={3} className="mt-3">
              <p className="fw-medium">{data.issuedBy || 'N/A'}</p>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
}
