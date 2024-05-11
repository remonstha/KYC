import React from 'react';
import { useDispatch } from "react-redux";
import { setKycSelectionIndividual } from "../slices/selection.slice";
import ReportMis from '../components/MisReport/reportMis';
import { Container, Row } from 'reactstrap';


export default function MisReport() {

  return (
    <div className="page-content">
    <Container fluid>
     


        <Row className="mt-2">
            <ReportMis />
        </Row>



    </Container>
</div>
  )
}
