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

export default function ContactInformationSubmit() {
  const data = useSelector(state => state.KycDetails.contactInformation);

  return (
    <Card style={{ border: "1px solid rgba(206, 212, 218, 1)" }}>
      <CardHeader className="p-2">
        <h5 className="mt-1 ms-2 text-muted">Contact</h5>
      </CardHeader>

      <CardBody>
        <Row className="p-5">
          <Col sm={3}>
            <p className="fw-bold">Mobile Number:</p>
          </Col>
          <Col sm={3}>
            <p className="fw-medium">{`${data.mobileNo1}${data.mobileNo2 ? '/'+data.mobileNo2 : null}`}</p>
          </Col>

          <Col sm={3}>
            <p className="fw-bold">Fax Number:</p>
          </Col>
          <Col sm={3}>
            <p className="fw-medium">{data.faxNumber || 'N/A'} </p>
          </Col>

          <Col sm={3} className="mt-3">
            <p className="fw-bold">
              Landline<small>(Residence)</small>
            </p>
          </Col>
          <Col sm={3} className="mt-3">
            <p className="fw-medium">{data.residenceLandline || 'N/A'}</p>
          </Col>

          <Col sm={3} className="mt-3">
            <p className="fw-bold">
              Landline<small>(Office)</small>
            </p>
          </Col>
          <Col sm={3} className="mt-3">
            <p className="fw-medium">{data.officeLandline || 'N/A'} </p>
          </Col>
        </Row>

        <h5 className="text-muted">Other Bank Details</h5>

        <Row className="p-5">
          <Col sm={3}>
            <p className="fw-bold">Bank Name:</p>
          </Col>
          <Col sm={3}>
            <p className="fw-medium">{data.bankName || "N/A"}</p>
          </Col>

          <Col sm={3}>
            <p className="fw-bold">Facilities:</p>
          </Col>
          <Col sm={3}>
            <p className="fw-medium">
              {data.facilities || 'N/A'}
            </p>
          </Col>

          <Col sm={3} className="mt-3">
            <p className="fw-bold">Account Number:</p>
          </Col>
          <Col sm={3} className="mt-3">
            <p className="fw-medium">{data.bankAccNo || 'N/A'}</p>
          </Col>

          <Col sm={3} className="mt-3">
            <p className="fw-bold">Account Type:</p>
          </Col>
          <Col sm={3} className="mt-3">
            <p className="fw-medium">{data.accountType || 'N/A'} </p>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}
