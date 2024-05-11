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

export default function RecommenderSubmit() {
  const data = useSelector(state => state.KycDetails.recommender);

  return (
    <Card style={{ border: "1px solid rgba(206, 212, 218, 1)" }}>
      <CardHeader className="p-2">
        <h5 className="mt-1 ms-2 text-muted">Recommender</h5>
      </CardHeader>

      <CardBody className="p-5">
        <Row>
            
          <Col sm={4}>
            <p className="fw-bold">Name:</p>
          </Col>
          <Col sm={8}>
            <p className="fw-medium">{`${data.otherSelect || data.titleSelect} ${data.Name}` || 'N/A'}</p>
          </Col>

          <Col sm={4}  className="mt-3">
            <p className="fw-bold">Account Number:</p>
          </Col>
          <Col sm={8}  className="mt-3">
            <p className="fw-medium">{data.accountNO || "N/A"}</p>
          </Col>

          <Col sm={4}  className="mt-3">
            <p className="fw-bold">Account Type:</p>
          </Col>
          <Col sm={8}  className="mt-3">
            <p className="fw-medium">N/A</p>
          </Col>

          <Col sm={4}  className="mt-3">
            <p className="fw-bold">Signature:</p>
          </Col>
          <Col sm={8}  className="mt-3">
            <p className="fw-medium">N/A</p>
          </Col>


         
        </Row>
      </CardBody>
    </Card>
  );
}
