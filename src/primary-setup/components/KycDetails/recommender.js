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
import "../../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { updateRecommender } from "../../slices/kycDetails.slice";
import { setKycSelectionIndividual } from "../../slices/selection.slice";
import { recommenderSchema as validationSchema } from "../../validationSchema";
import { postRecommender } from "../../../slices/CentralizedKYC/IndividualKYC/thunk";
import UserDetailsCard from "./UserDetailsCard";
import { saveRecommenderInfo } from "../../../slices/CentralizedKYC/IndividualKYC/thunk";

export default function Recommender() {
  const dispatch = useDispatch();
  const initialValues = useSelector((state) => state.KycDetails.recommender);
  const videoKyc = useSelector(state => state.IndKyc?.videoKYC);
  const recommenderId = useSelector(state => state.IndKyc?.recommender);

  const formik = useFormik({
    initialValues,
    // validationSchema,

    onSubmit: (values) => {
      dispatch(updateRecommender(values));
      console.log("values", values);
      dispatch(setKycSelectionIndividual("UploadDocuments"));

      const valueToSave = {
        title: parseInt(values.titleSelect),
        recommenderAccountNumber: values.accountNO,
        recommenderAccountName: values.Name,
        videoKycId: videoKyc?.id,
        id: recommenderId?.id,

      };

      dispatch(postRecommender(valueToSave));
    },
  });

  return (
    <>
      {/* <UserDetailsCard /> */}
      <Card className="p-0">
        <CardHeader className="px-4">
          <div className="">
            <h5 className="m-0">Recommender</h5>
          </div>
        </CardHeader>

        <CardBody className="px-4">
          <Form onSubmit={formik.handleSubmit}>
            <FormGroup>
              <Row>
                <Col lg={12}>
                  <p>
                    Title <span className="text-danger">*</span>{" "}
                  </p>

                  <Input
                    id="Mr."
                    type="radio"
                    name="titleSelect"
                    value={0}
                    checked={formik.values.titleSelect === 0}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <Label htmlFor="Mr." className="ms-2">
                    Mr.
                  </Label>

                  <Input
                    id="Mrs."
                    type="radio"
                    className="ms-2"
                    name="titleSelect"
                    value={1}
                    checked={formik.values.titleSelect === 1}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <Label htmlFor="Mrs." className="ms-2">
                    Mrs.
                  </Label>

                  <Input
                    id="Ms."
                    type="radio"
                    className="ms-2"
                    name="titleSelect"
                    value={2}
                    checked={formik.values.titleSelect === 2}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <Label htmlFor="Ms." className="ms-2">
                    Ms.
                  </Label>

                  <Input
                    id="other"
                    type="radio"
                    className="ms-2"
                    name="titleSelect"
                    value={3}
                    checked={formik.values.titleSelect === 3}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <Label htmlFor="other" className="ms-2">
                    Other
                  </Label>

                  {formik.errors.titleSelect && formik.touched.titleSelect && (
                    <p className="text-danger">{formik.errors.titleSelect}</p>
                  )}

                  {/* Error message for otherTitle */}
                  {formik.errors.otherTitle && formik.touched.otherTitle && (
                    <p className="text-danger">{formik.errors.otherTitle}</p>
                  )}
                </Col>
                <Col lg={6}>
                  <Label className="mt-4">
                    Account Number<span className="text-danger">*</span>{" "}
                  </Label>

                  {/* Input and Verify Button */}
                  <div className=" d-flex">
                    <Input
                      id="accountNO"
                      name="accountNO"
                      type="text"
                      placeholder="Account Number"
                      value={formik.values.accountNO}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="costomInput"
                    />
                    <div>
                      <button className="customButton border-0" type="button">
                        Verify
                      </button>
                    </div>
                  </div>

                  {/* Error message for accountNO */}
                  {formik.errors.accountNO && formik.touched.accountNO && (
                    <p className="text-danger">{formik.errors.accountNO}</p>
                  )}
                </Col>
                {/* Error message for recommenderAccountNumber */}
                {formik.errors.recommenderAccountNumber && formik.touched.recommenderAccountNumber && (
                  <p className="text-danger">{formik.errors.recommenderAccountNumber}</p>
                )}
                <Col lg={6}>
                  <Label className="mt-4">
                    Name<span className="text-danger">*</span>
                  </Label>
                  <Input
                    id="Name"
                    name="Name"
                    type="text"
                    placeholder="First Name"
                    value={formik.values.Name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                </Col>
              </Row>


              <div className="d-flex justify-content-between mt-4">
                <Button
                  color="light"
                  onClick={() =>
                    dispatch(setKycSelectionIndividual("ServicesYouWant"))
                  }
                >
                  Back
                </Button>
                <Button color="primary" type="submit">
                  Next
                </Button>
              </div>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </>
  );
}
