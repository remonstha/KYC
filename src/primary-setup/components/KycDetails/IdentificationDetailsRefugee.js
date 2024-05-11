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
import { identificationDetailsRefugeeValidation as validationSchema } from "../../validationSchema/validationSchema";

export default function IdentificationDetailsRefugee() {
  const formik = useFormik({
    initialValues: {
      identificationType: "",
      refugeeId: null,
      issuedPlace: "",
      issuedBy: "",
      issuedDate: "",
      expiryDate: "",
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
                    id="refugeeIdentificationType"
                    name="identificationType"
                    checked={formik.values.identificationType === "refugee"}
                    onBlur={formik.handleBlur}
                    onChange={(e) => {
                      formik.setFieldValue(
                        "identificationType",
                        e.target.checked ? "refugee" : ""
                      );
                    }}
                  />
                  <Label for="refugeeIdentificationType" className="ms-2">
                    Refugee
                  </Label>

                  {formik.touched.identificationType &&
                    formik.errors.identificationType && (
                      <div className="text-danger">
                        {formik.errors.identificationType}
                      </div>
                    )}
                </Col>
                <Col md={4}>
                  <Label for="refugeeId">Refugee ID</Label>
                  <Input
                    type="number"
                    name="refugeeId"
                    value={formik.values.refugeeId}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {formik.touched.refugeeId && formik.errors.refugeeId && (
                    <div className="text-danger">{formik.errors.refugeeId}</div>
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
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
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
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
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
                    onBlur={formik.handleBlur}

                  />
                </Col> */}
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
