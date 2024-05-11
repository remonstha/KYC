import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody, Alert } from "reactstrap";

import ComplianceVerification from "../components/Compliance/ComplianceVerification";

import { useDispatch } from "react-redux";



export default function Compliance() {

  return (

        <div className="page-content">
            <Container fluid>
                <Row>
                    <h5 className="fw-bold mt-1">ACCOUNT OPENING FORM INDIVIDUAL</h5>
                </Row>


                <Row className="mt-2">
                    <ComplianceVerification/>
                </Row>



            </Container>
        </div>

  )
}
