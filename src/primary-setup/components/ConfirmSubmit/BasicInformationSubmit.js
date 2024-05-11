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


export default function BasicInformationSubmit() {
    const data = useSelector(state => state.KycDetails.basicInformation);
  return (
    <Card style={{border: '1px solid rgba(206, 212, 218, 1)' }}>
          <CardHeader className="p-2">
            <h5 className="mt-1 ms-2 text-muted">Basic Information</h5>
          </CardHeader>

          <CardBody className="p-5">
            <Row>
              
              <Col sm={4}>
                <p className="fw-bold">Applied on:</p>
              </Col>
              <Col sm={8}>
                <p className="fw-medium">{data.date || 'N/A'}</p>
              </Col>
              
              <Col sm={4} className="mt-3">
                <p className="fw-bold">Account Type:</p>
              </Col>
              <Col sm={8}  className="mt-3">
                <p className="fw-medium">{data.otherAccountType || data.accountType || 'N/A'}</p>
              </Col>
              
              <Col sm={4} className="mt-3">
                <p className="fw-bold">Branch Name:</p>
              </Col>
              <Col sm={8} className="mt-3">
                <p className="fw-medium">{data.branchName || 'N/A'}</p>
              </Col>
              
              <Col sm={4} className="mt-3">
                <p className="fw-bold">Account Number:</p>
              </Col>
              <Col sm={8}  className="mt-3">
                <p className="fw-medium">{data.accountNumber || 'N/A'}</p>
              </Col>
              
              <Col sm={4} className="mt-3">
                <p className="fw-bold">Purpose of Account Opening:</p>
              </Col>
              <Col sm={8}  className="mt-3">
                <p className="fw-medium">{data.purposeOfAccountOpening || 'N/A'}</p>
              </Col>
              
              <Col sm={4} className="mt-3">
                <p className="fw-bold">Source of Funds</p>
              </Col>
              <Col sm={8}  className="mt-3">
                <p className="fw-medium">{data.sourceOfFunds || 'N/A'}</p>
              </Col>
              
              <Col sm={4} className="mt-3">
                <p className="fw-bold">Currency:</p>
              </Col>
              <Col sm={8}  className="mt-3">
                <p className="fw-medium">{data.otherCurrencyType || data.currencyType || 'N/A'}</p>
              </Col>
              
              <Col sm={4} className="mt-3">
                <p className="fw-bold">Anticipated Yealy Transaction</p>
              </Col>
              <Col sm={8}  className="mt-3">
                <p className="fw-medium">{data.anticipatedYearlyTransaction || 'N/A'}</p>
              </Col>

            </Row>
          </CardBody>
        </Card>
  )
}
