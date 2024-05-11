import React, { useEffect, useState } from "react";
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
import { identificationDetailsIndividualValidation as validationSchema } from "../../validationSchema/validationSchema";
import { useDispatch, useSelector } from "react-redux";
import { updateIdentificationDetailsIndividual } from "../../slices/kycDetails.slice";
import { setKycSelectionIndividual } from "../../slices/selection.slice";
import UserDetailsCard from "./UserDetailsCard";
import { fetchIssuedPlaceList } from "../../../slices/CentralizedKYC/Dropdowns/thunk"
import { saveIdentificationInfo } from "../../../slices/CentralizedKYC/IndividualKYC/thunk";

export default function IdentificationDetailsIndividual() {
  const dispatch = useDispatch();
  const initialValues = useSelector(
    (state) => state.KycDetails.identificationDetailsIndividual
  );
  const IdentificationID = useSelector((state) => state.IndKyc?.identificationDetailsIndividual);
  const videoKYC = useSelector((state) => state.IndKyc.videoKYC);

  const formik = useFormik({
    initialValues,
    // validationSchema,
    onSubmit: (values) => {
      console.log("values", values);
      dispatch(updateIdentificationDetailsIndividual(values));
      dispatch(setKycSelectionIndividual("OccupationDetails"));
      const valueToSave = {
        ...values,
        identificationType: formik.values.identificationType === "citizenship" ? 0 : formik.values.identificationType === "passport" ? 1 : formik.values.identificationType === "others" ? 2 :  undefined,

        videoKycId: videoKYC?.id,
        id: IdentificationID?.id,
       }
       dispatch(saveIdentificationInfo(valueToSave));

      console.log("identification details: ", values);
    },
  });

  const [selectTouched, setSelectTouched] = useState({
    issuePlace: false,
  });

  const handleSelect = (fieldName, value) => {
    formik.setFieldValue(fieldName, value.value);
    setSelectTouched((prev) => ({
      ...prev,
      [fieldName]: true,
    }));
  };

  const issuedPlaces = useSelector((state) => state.Dropdown.IssuedPlace);

  useEffect(() => {
    dispatch(fetchIssuedPlaceList());
  },[])

  console.log("issuedPlaces: ", issuedPlaces);


  const places = issuedPlaces?.map((item) => ({
    value: item.issued01uin,
    label: item.issued01title,
  }));

  return (
    <>
    {/* <UserDetailsCard/> */}
    <Card className="p-0">
      <CardHeader className="px-4">
        <div className="">
          <h5 className="m-0">Identification Details</h5>
        </div>
      </CardHeader>

      <CardBody className="px-4">
        <Form onSubmit={formik.handleSubmit} className="row gx-5 gy-4 pt-3">
          <Col lg={4} className="identificationType">
            <Label className="d-block mb-3">Identification Type</Label>

            <Input
              id="citizenship"
              type="radio"
              name="identificationType"
              value="citizenship"
              checked={formik.values.identificationType === "citizenship"}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <Label for="citizenship" className="ms-1">
              Citizenship
            </Label>

            <Input
              id="passport"
              className="ms-2"
              type="radio"
              name="identificationType"
              value="passport"
              checked={formik.values.identificationType === "passport"}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <Label for="passport" className="ms-1">
              Passport
            </Label>

            <Input
              id="others"
              className="ms-2"
              type="radio"
              name="identificationType"
              value="others"
              checked={formik.values.identificationType === "others"}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <Label for="others" className="ms-1">
              Others
            </Label>

            {/* {formik.values.identificationType === "others" ? (
              <input
                type="text"
                className="ms-2 text-center border-0 border-bottom"
                placeholder="Please specify"
                name="otherIdentificaitonType"
                value={formik.values.otherIdentificationType}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            ) : null} */}

            {formik.touched.identificationType &&
              formik.errors.identificationType && (
                <div className="text-danger">
                  {formik.errors.identificationType}
                </div>
              )}
          </Col>

          <Col md={4} className="idNumber">
            <Label>ID Number</Label>
            <Input
              type="text"
              name="idNumber"
              value={formik.values.idNumber}
              onChange={formik.handleChange}
            />

            {formik.touched.idNumber && formik.errors.idNumber && (
              <div className="text-danger">{formik.errors.idNumber}</div>
            )}
          </Col>

          {/* ++++++++++++++++++ change this to react select +++++++++++++++++*/}
          <Col md={4} className="issuedPlace">
            <Label>Issued Place</Label>
            {/* <Input
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
            </Input> */}
            <Select
              id="issuePlace"
              name="issuePlace"
              placeholder={"ID issued place"}
              options={places}
              value={places?.find(
                (option) => option.value === formik.values.issuePlace
              )}
              onChange={(value) => {
                handleSelect("issuePlace", value);
              }}
              onBlur={() => {
                formik.setFieldTouched("issuePlace", true);
              }}
            />
            {formik.touched.issuePlace &&
              selectTouched.issuePlace === false && (
                <p className="text-danger">{formik.errors.issuePlace}</p>
              )}


          </Col>

          {/* ++++++++++++++++++ change this to react select +++++++++++++++++*/}
          <Col md={4} className="issuedBy">
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

          <Col lg={4} className="issuedDate">
            <Label>Issued Date</Label>
            <Input
              type="date"
              className=""
              name="issuedDate"
              value={formik.values.issuedDate}
              // onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />

            {formik.touched.issuedDate && formik.errors.issuedDate && (
              <div className="text-danger">{formik.errors.issuedDate}</div>
            )}
          </Col>

          <Col lg={4} className="expiryDate">
            <Label>Expiry Date</Label>
            <Input
              type="date"
              className=""
              name="expiryDate"
              value={formik.values.expiryDate}
              // onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />

            {formik.touched.expiryDate && formik.errors.expiryDate && (
              <div className="text-danger">{formik.errors.expiryDate}</div>
            )}
          </Col>

          <Col md={4} className="panNumber">
            <Label>PAN Number</Label>
            <Input
              type="text"
              name="panNumber"
              value={formik.values.panNumber}
              onChange={formik.handleChange}
            />

            {formik.touched.issuedBy && formik.errors.issuedBy && (
              <div className="text-danger">{formik.errors.issuedBy}</div>
            )}
          </Col>

          <div className="d-flex justify-content-between mt-4">
            <Button
              color="light"
              onClick={() =>
                dispatch(setKycSelectionIndividual("ContactInformation"))
              }
            >
              Back
            </Button>
            <Button color="primary" type="submit">
              Next
            </Button>
          </div>
        </Form>
      </CardBody>
    </Card>
    </>

  );
}
