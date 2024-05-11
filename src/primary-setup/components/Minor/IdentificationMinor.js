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
import Select from "react-select";
import { identificationDetailsMinorValidation as validationSchema } from "../../validationSchema/validationSchema";
import { useDispatch, useSelector } from "react-redux";
import { setKycSelectionMinor } from "../../slices/selection.slice";
import { updateIdentificationDetailsMinor } from "../../slices/KycMinor.slice";
import { useEffect } from "react";
import { fetchIssuedPlaceList } from "../../../slices/CentralizedKYC/Dropdowns/thunk";

export default function IdentificationMinor() {
  const dispatch = useDispatch();
  const initialValues = useSelector((state) => state.KycMinor.identificationDetailsMinor)
  const formik = useFormik({
    initialValues,
    // validationSchema,
    onSubmit: (values) => {
      console.log("minor identification details ", values);
      dispatch(updateIdentificationDetailsMinor(values));
      dispatch(setKycSelectionMinor("LocationMinor"))
    },
    
  });

  const [selectTouched, setSelectTouched] = useState({
    issuedPlace: false,
  });

  const handleSelect = (fieldName, value) => {
    formik.setFieldValue(fieldName, value.value);
    setSelectTouched((prev) => ({
      ...prev,
      [fieldName]: true,
    }));
  };
   // getting Dropdown
   const issuedPlaces = useSelector((state) => state.Dropdown.IssuedPlace);

   useEffect(() => {
     dispatch(fetchIssuedPlaceList());
   },[])

  //DropDown Options
   const places = issuedPlaces?.map((item) => ({
    value: item.issued01title,
    label: item.issued01title,
  }));


  return (
    <Card className="p-0">
      <CardHeader className="px-4">
        <div className="">
          <h5 className="m-0">Identification Details</h5>
        </div>
      </CardHeader>

      <CardBody className="px-4">
        <Form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <Row className="gy-4">
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
                <Select
              id="issuedPlace"
              name="issuedPlace"
              placeholder={"ID issued place"}
              options={places}
              value={places?.find(
                (option) => option.value === formik.values.issuedPlace
              )}
              onChange={(value) => {
                handleSelect("issuedPlace", value);
              }}
              onBlur={() => {
                formik.setFieldTouched("issuedPlace", true);
              }}
            />
            {formik.touched.issuedPlace &&
              selectTouched.issuedPlace === false && (
                <p className="text-danger">{formik.errors.issuedPlace}</p>
              )}

              </Col>

              <Col md={4}>
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

              <Col lg={4}>
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
                  <div className="text-danger">{formik.errors.issuedDate}</div>
                )}
              </Col>

              <Col lg={4}>
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
                  <div className="text-danger">{formik.errors.expiryDate}</div>
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
              <Button
                color="light"
                onClick={() => dispatch(setKycSelectionMinor("Guardian"))}
              >
                Back
              </Button>
              <Button
                color="primary"
                type="submit"
               
              >
                Next
              </Button>
            </div>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
}
