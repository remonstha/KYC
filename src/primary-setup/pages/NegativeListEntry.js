import { useFormik, Field } from "formik";
import React, { useState, useEffect } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Form,
  Input,
  CardHeader,
  CardBody,
  FormGroup,
  Label,
  Button,
  Alert,
} from "reactstrap";
import NegativeList from "../components/NegativeList/negativeListEntry";
import { useDispatch } from "react-redux";
import { setKycSelectionIndividual } from "../slices/selection.slice";


export default function NegativeListEntry() {

  return (
<div className="page-content">
            <Container fluid>
                <Row>
                    <Col md={2} className="mt-4 ">
                    <h5 className="fw-bold mt-1">Negative List Entry</h5>
                    </Col><Col md={2} className="mt-4 justify-content-start ">
                  <Input
                    type="select"
                    name="issuedPlaceNegative"
                    // value={formik.values.issuedPlaceNegative}
                    // onChange={formik.handleChange}
                  >
                    
                    <option value="negativeList">Negative Form</option>
                    <option value="hotList">Hot list</option>
                    <option value="aversemedia">Adverse Media</option>
                  </Input>

                  {/* {formik.touched.issuedPlaceNegative && formik.errors.issuedPlaceNegative && (
                    <div className="text-danger">
                      {formik.errors.issuedPlaceNegative}
                    </div> */}
                  {/* )} */}
                </Col>
                </Row>


                <Row className="mt-2">
                    <NegativeList />
                </Row>



            </Container>
        </div>
  )
}
