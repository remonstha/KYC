import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
} from "reactstrap";
import { useFormik } from "formik";
import { identificationDetailsMinorValidation as validationSchema } from "../../validationSchema/validationSchema";
import { useDispatch, useSelector } from "react-redux";
import { setKycSelectionIndividual } from "../../slices/selection.slice";

export default function IdentificationDetailsMinor() {
  const formik = useFormik({
    initialValues: {
      identificationType: "",
      minorId: null,
      issuedPlace: "",
      issuedBy: "",
      issuedDate: "",
      expiryDate: "",
      //   panNumber: null,
    },
    onSubmit: (values) => {
      console.log("minor identification details ", values);
      dispatch(setKycSelectionIndividual('OccupationDetails'));
    },
    validationSchema,
  });

  return (
      <Card className="mt-1">
        <CardHeader className="p-2">
          <h5 className="mt-1">Identification Details</h5>
        </CardHeader>

        <CardBody className="p-2">
          <Form onSubmit={formik.handleSubmit}>
            <FormGroup>
              <Row>
                <Col lg={4}>
                  <Label className="d-block">Identification Type</Label>

                  <Input
                    type="checkbox"
                    id="minorIdentificationType"
                    name="identificationType"
                    checked={
                      formik.values.identificationType === "birthCertificate"
                    }
                    onBlur={formik.handleBlur}
                    onChange={(e) => {
                      formik.setFieldValue(
                        "identificationType",
                        e.target.checked ? "birthCertificate" : ""
                      );
                    }}
                  />
                  <Label for="minorIdentificationType" className="ms-2">
                    Birth Certificate
                  </Label>

                  {formik.touched.identificationType &&
                    formik.errors.identificationType && (
                      <div className="text-danger">
                        {formik.errors.identificationType}
                      </div>
                    )}
                </Col>

                <Col md={4}>
                  <Label for="minorId">Minor's ID</Label>
                  <Input
                    type="text"
                    name="minorId"
                    value={formik.values.minorId}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {formik.touched.minorId && formik.errors.minorId && (
                    <div className="text-danger">{formik.errors.minorId}</div>
                  )}
                </Col>

                <Col md={4}>
                  <Label>Issued Place</Label>
                  <Input
                    type="select"
                    name="issuedPlace"
                    value={formik.values.issuedPlace}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="" className="text-muted" disabled>
                      Select Issued place
                    </option>
                    <option value="kalanki">Kalanki</option>
                    <option value="baneshwor">Baneshwor</option>
                    <option value="balaju">Balaju</option>
                  </Input>

                  {formik.touched.issuedPlace && formik.errors.issuedPlace && (
                    <div className="text-danger">
                      {formik.errors.issuedPlace}
                    </div>
                  )}
                </Col>

                <Col md={4} className="mt-4">
                  <Label>Issued By</Label>
                  <Input
                    type="text"
                    name="issuedBy"
                    value={formik.values.issuedBy}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {formik.touched.issuedBy && formik.errors.issuedBy && (
                    <div className="text-danger">{formik.errors.issuedBy}</div>
                  )}
                </Col>

                <Col lg={4} className="mt-4">
                  <Label>Issued Date</Label>
                  <Input
                    type="date"
                    className=""
                    name="issuedDate"
                    value={formik.values.issuedDate}
                    // onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {formik.touched.issuedDate && formik.errors.issuedDate && (
                    <div className="text-danger">
                      {formik.errors.issuedDate}
                    </div>
                  )}
                </Col>

                <Col lg={4} className="mt-4">
                  <Label>Expiry Date</Label>
                  <Input
                    type="date"
                    className=""
                    name="expiryDate"
                    value={formik.values.expiryDate}
                    // onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {formik.touched.expiryDate && formik.errors.expiryDate && (
                    <div className="text-danger">
                      {formik.errors.expiryDate}
                    </div>
                  )}
                </Col>

                {/* <Col md={4} className="mt-4">
                  <Label>PAN Number</Label>
                  <Input
                    type="text"
                    name="issuedBy"
                    value={formik.values.panNumber}
                    onChange={formik.handleChange}
                    
                  />
                </Col> */}
              </Row>

              <div className="d-flex justify-content-between mt-4">
                <Button color="light" onClick={() => dispatch(setKycSelectionIndividual('ContactInformation'))}>Back</Button>
                <Button color="primary" type="submit">
                  Next
                </Button>
              </div>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
  );
}
