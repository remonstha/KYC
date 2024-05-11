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

export default function AddressDetailsSubmit() {
  const data = useSelector(state => state.KycDetails.addressDetails);

  return (
    <Card style={{ border: "1px solid rgba(206, 212, 218, 1)" }}>
      <CardHeader className="p-2">
        <h5 className="mt-1 ms-2 text-muted">Address</h5>
      </CardHeader>

      <CardBody>
      <h5 className="text-muted mt-3">Permanent Address</h5>
        <Row className="p-5">
          
          <Col sm={3}>
            <p className="fw-bold">Country:</p>
          </Col>
          <Col sm={3}>
            <p className="fw-medium">{data.permCountry || 'N/A'}</p>
          </Col>

          <Col sm={3}>
            <p className="fw-bold">Municipality:</p>
          </Col>
          <Col sm={3}>
            <p className="fw-medium">{data.permMunicipality || 'N/A'} </p>
          </Col>

          <Col sm={3} className="mt-3">
            <p className="fw-bold">State:</p>
          </Col>
          <Col sm={3} className="mt-3">
            <p className="fw-medium">{data.permState || 'N/A'}</p>
          </Col>

          <Col sm={3} className="mt-3">
            <p className="fw-bold">Ward No:</p>
          </Col>
          <Col sm={3} className="mt-3">
            <p className="fw-medium">{data.permWardNo || 'N/A'} </p>
          </Col>

          <Col sm={3} className="mt-3">
            <p className="fw-bold">District:</p>
          </Col>
          <Col sm={3} className="mt-3">
            <p className="fw-medium">{data.permDistrict || 'N/A'}</p>
          </Col>

          <Col sm={3} className="mt-3">
            <p className="fw-bold">Tole/Street:</p>
          </Col>
          <Col sm={3} className="mt-3">
            <p className="fw-medium">{data.permToleStreet || 'N/A'}  </p>
          </Col>

          <Col sm={3} className="mt-3">
            <p className="fw-bold">Hose No:</p>
          </Col>
          <Col sm={3} className="mt-3">
            <p className="fw-medium">{data.permHouseNo || "N/A"} </p>
          </Col>

        </Row>

        <h5 className="text-muted mt-2">Temporary Address</h5>

        <Row className="p-5">
        <Col sm={3}>
            <p className="fw-bold">Country:</p>
          </Col>
          <Col sm={3}>
            <p className="fw-medium">{data.tempCountry || "N/A"}</p>
          </Col>

          <Col sm={3}>
            <p className="fw-bold">Municipality:</p>
          </Col>
          <Col sm={3}>
            <p className="fw-medium">{data.tempMunicipality || 'N/A'} </p>
          </Col>

          <Col sm={3} className="mt-3">
            <p className="fw-bold">State:</p>
          </Col>
          <Col sm={3} className="mt-3">
            <p className="fw-medium">{data.tempState || 'N/A'}</p>
          </Col>

          <Col sm={3} className="mt-3">
            <p className="fw-bold">Ward No:</p>
          </Col>
          <Col sm={3} className="mt-3">
            <p className="fw-medium">{data.tempWardNo || 'N/A'} </p>
          </Col>

          <Col sm={3} className="mt-3">
            <p className="fw-bold">District:</p>
          </Col>
          <Col sm={3} className="mt-3">
            <p className="fw-medium">{data.tempDistrict || 'N/A'}</p>
          </Col>

          <Col sm={3} className="mt-3">
            <p className="fw-bold">Tole/Street:</p>
          </Col>
          <Col sm={3} className="mt-3">
            <p className="fw-medium">{data.tempToleStreet || 'N/A'} </p>
          </Col>

          <Col sm={3} className="mt-3">
            <p className="fw-bold">Hose No:</p>
          </Col>
          <Col sm={3} className="mt-3">
            <p className="fw-medium">{data.tempHouseNo || 'N/A'} </p>
          </Col>
        </Row>

        <h5 className="text-muted mt-2">Office Address</h5>

        
        <Row className="p-5">
        <Col sm={3}>
            <p className="fw-bold">Country:</p>
          </Col>
          <Col sm={3}>
            <p className="fw-medium">{data.officeCountry || 'N/A'}</p>
          </Col>

          <Col sm={3}>
            <p className="fw-bold">Municipality:</p>
          </Col>
          <Col sm={3}>
            <p className="fw-medium">{data.officeMunicipality || 'N/A'} </p>
          </Col>

          <Col sm={3} className="mt-3">
            <p className="fw-bold">State:</p>
          </Col>
          <Col sm={3} className="mt-3">
            <p className="fw-medium">{data.officeState || 'N/A'}</p>
          </Col>

          <Col sm={3} className="mt-3">
            <p className="fw-bold">Ward No:</p>
          </Col>
          <Col sm={3} className="mt-3">
            <p className="fw-medium">{data.officeWardNo || 'N/A'} </p>
          </Col>

          <Col sm={3} className="mt-3">
            <p className="fw-bold">District:</p>
          </Col>
          <Col sm={3} className="mt-3">
            <p className="fw-medium">{data.officeDistrict || 'N/A'}</p>
          </Col>

          <Col sm={3} className="mt-3">
            <p className="fw-bold">Tole/Street:</p>
          </Col>
          <Col sm={3} className="mt-3">
            <p className="fw-medium">{data.officeToleStreet || 'N/A'} </p>
          </Col>

          <Col sm={3} className="mt-3">
            <p className="fw-bold">Hose No:</p>
          </Col>
          <Col sm={3} className="mt-3">
            <p className="fw-medium">{data.officeHouseNo || 'N/A'} </p>
          </Col>

          <Col sm={3} className="mt-3">
            <p className="fw-bold">Web Address:</p>
          </Col>
          <Col sm={3} className="mt-3">
            <p className="fw-medium">{data.webAddress || 'N/A'} </p>
          </Col>

          <Col sm={3} className="mt-3">
            <p className="fw-bold">Office Email:</p>
          </Col>
          <Col sm={3} className="mt-3">
            <p className="fw-medium">{data.officeEmail || 'N/A'} </p>
          </Col>
        </Row>

      </CardBody>
    </Card>
  );
}
