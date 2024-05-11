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

export default function UploadDocumentsSubmit() {
  return (
    <Card style={{border: '1px solid rgba(206, 212, 218, 1)' }}>
    <CardHeader className="p-2">
      <h5 className="mt-1 ms-2 text-muted">Uploads</h5>
    </CardHeader>

    <CardBody>
        <h5 className="text-muted mt-1">Applicant's Document Proofs</h5>
      <Row className="p-5">
        
      

      </Row>
    </CardBody>
  </Card>
  )
}
