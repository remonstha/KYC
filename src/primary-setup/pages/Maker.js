import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody, Alert } from "reactstrap";
import VerificationStatus from "../components/Maker/VerificationStatus";
import { useDispatch } from "react-redux";
import { setKycSelectionIndividual } from "../slices/selection.slice";

export default function Maker() {
    
  return (

        <div className="page-content">
            <Container fluid>
                <Row>
                    <h5 className="fw-bold mt-1">ACCOUNT OPENING FORM INDIVIDUAL</h5>
                </Row>


                <Row className="mt-2">
                    <VerificationStatus />
                </Row>



            </Container>
        </div>

  )
}
