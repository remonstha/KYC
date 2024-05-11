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
import { identificationDetailsForeignNationalValidation as validationSchema } from "../../validationSchema/validationSchema";

export default function IdentificationDetailsForeignNational() {
  const formik = useFormik({
    initialValues: {
      identificationType: "",
      passportId: "",
      issuedPlace: "",
      issuedBy: "",
      visaIssuedDate: "",
      visaExpiryDate: "",
    //   panNumber: null,
    },
    onSubmit: (values) => {
      console.log("minor identification details ", values);
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
                    id="identificationType"
                    name="identificationType"
                    checked={formik.values.identificationType === "passport"}
                    onChange={(e) => {
                      formik.setFieldValue(
                        "identificationType",
                        e.target.checked ? "passport" : ""
                      );
                    }}
                  />
                  <Label for="identificationType" className="ms-2">
                    Passport/Visa
                  </Label>

                  {formik.touched.identificationType &&
                    formik.errors.identificationType && (
                      <div className="text-danger">
                        {formik.errors.identificationType}
                      </div>
                    )}
                </Col>
                <Col md={4}>
                  <Label for="passportId">Passport ID</Label>
                  <Input
                    type="text"
                    name="passportId"
                    value={formik.values.passportId}
                    onChange={formik.handleChange}
                  />

                  {formik.touched.passportId && formik.errors.passportId && (
                    <div className="text-danger">
                      {formik.errors.passportId}
                    </div>
                  )}
                </Col>

                <Col md={4}>
                  <Label>Issued Place</Label>
                  <Input
                    type="select"
                    name="issuedPlace"
                    value={formik.values.issuedPlace}
                    onChange={formik.handleChange}
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
                  />

                  {formik.touched.issuedBy && formik.errors.issuedBy && (
                    <div className="text-danger">{formik.errors.issuedBy}</div>
                  )}
                </Col>

                <Col lg={4} className="mt-4">
                  <Label>Visa Issued Date</Label>
                  <Input
                    type="date"
                    className=""
                    name="visaIssuedDate"
                    value={formik.values.visaIssuedDate}
                    // onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />

                  {formik.touched.visaIssuedDate &&
                    formik.errors.visaIssuedDate && (
                      <div className="text-danger">
                        {formik.errors.visaIssuedDate}
                      </div>
                    )}
                </Col>

                <Col lg={4} className="mt-4">
                  <Label>Visa Expiry Date</Label>
                  <Input
                    type="date"
                    className=""
                    name="visaExpiryDate"
                    value={formik.values.visaExpiryDate}
                    // onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />

                  {formik.touched.visaExpiryDate &&
                    formik.errors.visaExpiryDate && (
                      <div className="text-danger">
                        {formik.errors.visaExpiryDate}
                      </div>
                    )}
                </Col>

                {/* <Col md={4} className="mt-4">
                  <Label>PAN Number</Label>
                  <Input
                    type="number"
                    name="panNumber"
                    value={formik.values.panNumber}
                    onChange={formik.handleChange}
                  />
                </Col>

                {formik.touched.panNumber && formik.errors.panNumber && (
                  <div className="text-danger">{formik.errors.panNumber}</div>
                )} */}
              </Row>

              <div className="d-flex justify-content-between mt-4">
                <Button color="light">Back</Button>
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
