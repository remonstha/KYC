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
// import "../../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { setKycSelectionMinor } from "../../slices/selection.slice";
import UserDetailsCard from "./UserDetailsCard";
import { updateRecommenderMinor } from "../../slices/KycMinor.slice";

export default function RecommenderMinor() {
  const dispatch = useDispatch();
  const initialValues = useSelector((state) => state.KycMinor.recommender);

  const formik = useFormik({
    initialValues,
    // validationSchema,

    onSubmit: (values) => {
      dispatch(updateRecommenderMinor(values));
      console.log("values", values);
      dispatch(setKycSelectionMinor("UploadDocumentsMinor"))
    },
  });

  const dismiss = (e) => {
    setVisiable(false);
  };

  return (
    <>
      <UserDetailsCard />
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
                    value="Mr."
                    checked={formik.values.titleSelect === "Mr."}
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
                    value="Mrs."
                    checked={formik.values.titleSelect === "Mrs."}
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
                    value="Ms."
                    checked={formik.values.titleSelect === "Ms."}
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
                    value="other"
                    checked={formik.values.titleSelect === "other"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                     <Label htmlFor="other" className="ms-2">
                    Other
                  </Label>

                  {/* {formik.values.titleSelect === "other" ? (
                    <input
                      type="text"
                      className=" ms-2 text-center border-0 border-bottom"
                      placeholder="Please specify"
                      name="otherTitle"
                      value={formik.values.othertitle}
                      // onChange={(e) => setOtherSelect(e.target.value)}
                      onChange={formik.handleChange}
                      // disabled={titleSelect !== 'other'}
                    />
                  ) : (
                    ""
                  )} */}

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

                  {formik.errors.Name && formik.touched.Name && (
                    <p className="text-danger">{formik.errors.Name}</p>
                  )}
                </Col>
              </Row>
              <div className="d-flex justify-content-between mt-4">
                <Button
                  color="light"
                  onClick={() =>
                    dispatch(setKycSelectionMinor("ServicesMinor"))
                  }
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
    </>
  );
}
