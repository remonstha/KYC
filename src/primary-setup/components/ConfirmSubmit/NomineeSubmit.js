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

export default function NomineeSubmit() {
  return (
    <Card style={{ border: "1px solid rgba(206, 212, 218, 1)" }}>
      <CardHeader className="p-2">
        <h5 className="mt-1 ms-2 text-muted">Nominee</h5>
      </CardHeader>

      <CardBody className="p-5">
        <Row>
            
          <Col sm={3}>
            <p className="fw-bold">Nominee's Name:</p>
          </Col>
          <Col sm={3}>
            <p className="fw-medium">Mr. Deewas Tamang</p>
          </Col>

          <Col sm={3}>
            <p className="fw-bold">Date of Birth:</p>
          </Col>
          <Col sm={3}>
            <p className="fw-medium">2023-21-12(AD)/2014-12-21(BS)</p>
          </Col>

          <Col sm={3}  className="mt-3">
            <p className="fw-bold">Relationship with Nominee:</p>
          </Col>
          <Col sm={3}  className="mt-3">
            <p className="fw-medium">Son</p>
          </Col>

          <Col sm={3}  className="mt-3">
            <p className="fw-bold">ID Type:</p>
          </Col>
          <Col sm={3}  className="mt-3">
            <p className="fw-medium">Citizenship</p>
          </Col>

          <Col sm={3}  className="mt-3">
            <p className="fw-bold">Contact Number:</p>
          </Col>
          <Col sm={3}  className="mt-3">
            <p className="fw-medium">23232333</p>
          </Col>

          <Col sm={3}  className="mt-3">
            <p className="fw-bold">ID Number:</p>
          </Col>
          <Col sm={3}  className="mt-3">
            <p className="fw-medium">934234234</p>
          </Col>

          <Col sm={3}  className="mt-3">
            <p className="fw-bold">Father's Name:</p>
          </Col>
          <Col sm={3}  className="mt-3">
            <p className="fw-medium">Buddhi Tamang</p>
          </Col>

          <Col sm={3}  className="mt-3">
            <p className="fw-bold">ID Issued Date:</p>
          </Col>
          <Col sm={3}  className="mt-3">
            <p className="fw-medium">2020-22-11</p>
          </Col>

          <Col sm={3}  className="mt-3">
            <p className="fw-bold">Mother's Name:</p>
          </Col>
          <Col sm={3}  className="mt-3">
            <p className="fw-medium">Vagwati Limbu</p>
          </Col>

          <Col sm={3}  className="mt-3">
            <p className="fw-bold">Id Issued Place:</p>
          </Col>
          <Col sm={3}  className="mt-3">
            <p className="fw-medium">Itahari</p>
          </Col>

          <Col sm={3}  className="mt-3">
            <p className="fw-bold">Grand Father's Name:</p>
          </Col>
          <Col sm={3}  className="mt-3">
            <p className="fw-medium">Biman Tamang</p>
          </Col>

          <Col sm={3}  className="mt-3">
            <p className="fw-bold">Grand Mother's Name:</p>
          </Col>
          <Col sm={3}  className="mt-3">
            <p className="fw-medium">Man Maya Tamang</p>
          </Col>

         
        </Row>
      </CardBody>
    </Card>
  );
}
