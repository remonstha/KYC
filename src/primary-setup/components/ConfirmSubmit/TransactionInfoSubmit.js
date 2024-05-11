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

export default function TransactionInfoSubmit() {
  const data = useSelector(state => state.KycDetails.transactionInfo);

  return (
    <Card style={{ border: "1px solid rgba(206, 212, 218, 1)" }}>
      <CardHeader className="p-2">
        <h5 className="mt-1 ms-2 text-muted">
          Transaction Related Information
        </h5>
      </CardHeader>

      <CardBody className="p-5">
        <Row>
          <Col md={6}>
            <Row>
              <h5 className="mt-1 text-muted">
                Expected Maximum Amount in Single Transaction:
              </h5>
              <Col sm={6} className="mt-3">
                <p className="fw-bold">Deposit:</p>
              </Col>
              <Col sm={6} className="mt-3">
                <p className="fw-medium">{data.deposit || 'N/A'}</p>
              </Col>
              <Col sm={6} className="mt-3">
                <p className="fw-bold">Withdrawl:</p>
              </Col>
              <Col sm={6} className="mt-3">
                <p className="fw-medium">{data.withdrawl || "N/A"}</p>
              </Col>
            </Row>
          </Col>

          <Col md={6}>
            <Row>
              <h5 className="mt-1 text-muted">
                Expected Maximum Amount in Single Transaction:
              </h5>
              <Col sm={6} className="mt-3">
                <p className="fw-bold">Deposit:</p>
              </Col>
              <Col sm={6} className="mt-3">
                <p className="fw-medium">{data.daydeposit || "N/A"}</p>
              </Col>
              <Col sm={6} className="mt-3">
                <p className="fw-bold">Withdrawl:</p>
              </Col>
              <Col sm={6} className="mt-3">
                <p className="fw-medium">{data.daywithdrawl || "N/A"}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}
