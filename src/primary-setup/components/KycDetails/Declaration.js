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
  FormText,
} from "reactstrap";
import Table from "./table";
import { declarationSchema as validationSchema } from "../../validationSchema/index";
import { useDispatch, useSelector } from "react-redux";
import { updateDeclaration } from "../../slices/kycDetails.slice";
import { setKycSelectionIndividual } from "../../slices/selection.slice";
import UserDetailsCard from "./UserDetailsCard";
import { saveDeclarationInfo } from "../../../slices/CentralizedKYC/IndividualKYC/thunk";

export default function Declaration() {
  const dispatch = useDispatch();
  const [visiable, setVisiable] = useState(true);
  const initialValues = useSelector((state) => state.KycDetails?.declaration);
  const declaration = useSelector((state) => state.IndKyc?.declaration);
  console.log('declaration id', declaration)
  const videoKYC = useSelector((state) => state.IndKyc?.videoKYC);

  const tablevalues = useSelector(
    (state) => state.KycDetails.declaration?.memberInfo
  );

  const formik = useFormik({
    initialValues,
    // validationSchema,
    onSubmit: (values) => {

      const value={
        ...values,
        memberInfo:tablevalues
      }
      console.log('this is the values', value)
      const newValue = {
        isCEOOfBanks:values.declaration,
        positionAssociation:values.position,
        institutionName:values.institution,
        declarationInfo: tablevalues,
        isCrimeHistory:values.declaration2,
        isFormalSanction:values.declaration3,
        additionalInformation:values.information,
        isNotToUseAccountForMoneyLaundering:values.term,
        isNotBeUsedByAnotherPerson:values.term1,
        isAgreeToNotifyTheBank:values.term2

      };
      dispatch(updateDeclaration(value));
      console.log("values", newValue);
      dispatch(setKycSelectionIndividual("NomineeForm"));

      const valueToSave = {
        ...newValue,
        videoKycId: videoKYC?.id,
        id: declaration?.id,
      }
      console.log('value to sabe ', valueToSave)
      dispatch(saveDeclarationInfo(valueToSave));

    },
  });

  const dismiss = (e) => {
    setVisiable(false);
  };
  const noBoxShadow = {
    boxShadow: "none",
  };

  return (
    <>
      {/* <UserDetailsCard /> */}
      <Card className="p-0">
        <CardHeader className="px-4">
          <div className="">
            <h5 className="m-0">Declaration</h5>
          </div>
        </CardHeader>

        <CardBody className="px-4">
          <Form onSubmit={formik.handleSubmit}>
            <FormGroup>
              <Row>
                <Col md={12}>

                </Col>


                <div className="row justify-content-center px-0 pb-4">
                  <Col className="d-flex mt-4" md={12}>
                    <Col md={8} className="mt-3">
                      <div className="d-flex gap-3">
                        <Label className="text-muted">
                          Are you currently a Board of Director/CEO/TOP
                          management of any bank and financial institution ?
                        </Label>
                        <div className="form-check form-switch">
                          <Label
                            className="form-check-Label"
                            for="SwitchCheck1"
                          >
                            {formik.values.declaration ? "Yes" : "No"}
                          </Label>
                          <input

                            className="form-check-input border-0"
                            type="checkbox"
                            name="declaration"
                            role="switch"
                            id="SwitchCheck1"
                            checked={formik.values.declaration} // Set checked state
                            onChange={formik.handleChange} // Handle status change
                            style={{
                              ...noBoxShadow,
                              backgroundColor: formik.values.declaration
                                ? "green"
                                : "rgba(255, 0, 0, 0.8)",
                              backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba(255,255,255,1.0)'/></svg>")`,
                            }}
                          />
                          {formik.errors.declaration &&
                            formik.touched.declaration && (
                              <p className="text-danger">
                                {formik.errors.declaration}
                              </p>
                            )}
                        </div>
                      </div>
                    </Col>
                  </Col>
                 {formik.values.declaration && (
                  <>                  <Col md={6}>
                    <Label className="mt-4"> Position/Association </Label>
                    <Input
                      id="position"
                      name="position"
                      type="text"
                      placeholder="CEO"
                      value={formik.values.position}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    {formik.errors.position && formik.touched.position && (
                      <p className="text-danger">{formik.errors.position}</p>
                    )}
                  </Col>
                  <Col md={6}>
                    <Label className="mt-4"> Institution Name </Label>

                    <Input
                      id="institution"
                      name="institution"
                      type="text"
                      placeholder=""
                      value={formik.values.institution}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}

                    />

                    {formik.errors.institution &&
                      formik.touched.institution && (
                        <p className="text-danger">
                          {formik.errors.institution}
                        </p>
                      )}
                  </Col>

                  <Col md={12}>
                    <Label className="mt-4"> Additional Information </Label>

                    <Input
                      id="information"
                      name="information"
                      className="h-95"
                      type="textarea"
                      placeholder="More Information"
                      value={formik.values.information}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}

                    />

                    {formik.errors.information &&
                      formik.touched.information && (
                        <p className="text-danger">
                          {formik.errors.information}
                        </p>
                      )}
                  </Col>
                  </>

)}
                </div>
                <Col md={12}>
                  <div
                    className="p-3 px-5 text-primary fs-14 rounded-2 my-5"
                    style={{
                      background:
                        "linear-gradient(100deg, rgba(28, 209, 100, 0.12) 37.99%, rgba(32, 133, 211, 0.12) 63.57%, rgba(60, 104, 216, 0.12) 75.64%, rgba(33, 143, 195, 0.12) 100.37%)",
                      border: "1px solid #C5D7F7",
                    }}
                  >
                    Please mention the following details of your family members
                    or close associates having high profile or currently
                    involved in or retired from politics, bureaucrarcy or other
                    high level of position.
                  </div>
                </Col>
                <Col md={12} className=" mb-4">
                  <Table />
                </Col>
                <Col className="d-flex mt-4" md={12}>
                  {/* <Col md={8}>
                    <Label className="text-muted">
                      Are you currently a Board of Director/CEO/TOP management
                      of any bank and financial institution ?
                    </Label>
                  </Col> */}
                  {/* <Col md={4}>
                    <div className="form-check form-switch ms-5  mb-2 ">
                      <Label className="form-check-Label" for="SwitchCheck1">
                        {formik.values.declaration ? "Yes" : "No"}
                      </Label>
                      <input
                        className="form-check-input border-0"
                        type="checkbox"
                        name="declaration"
                        role="switch"
                        id="SwitchCheck1"
                        checked={formik.values.declaration} // Set checked state
                        onChange={formik.handleChange} // Handle status change
                        style={{
                          ...noBoxShadow,
                          backgroundColor: formik.values.declaration
                            ? "green"
                            : "rgba(255, 0, 0, 0.8)",
                          backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba(255,255,255,1.0)'/></svg>")`,
                        }}
                      />
                      {formik.errors.declaration &&
                        formik.touched.declaration && (
                          <p className="text-danger">
                            {formik.errors.declaration}
                          </p>
                        )}
                    </div>
                  </Col> */}
                </Col>
                <Col className="d-flex " md={12}>
                  <Col md={8}>
                    <Label className="text-muted">
                      Hace you ever been formally accused, charged, or convicted
                      of any crime ?
                    </Label>
                  </Col>

                  <Col md={4}>
                    <div className="form-check form-switch ms-5  mb-3 ">
                      <Label className="form-check-label" for="SwitchCheck2">
                        {formik.values.declaration2 ? "Yes" : "No"}
                      </Label>
                      <Input
                        className="form-check-input border-0"
                        type="checkbox"
                        name="declaration2"
                        role="switch"
                        id="SwitchCheck2"
                        checked={formik.values.declaration2} // Set checked state
                        onChange={formik.handleChange} // Handle status change
                        style={{
                          ...noBoxShadow,
                          backgroundColor: formik.values.declaration2
                            ? "green"
                            : "rgba(255, 0, 0, 0.8)",
                          backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba(255,255,255,1.0)'/></svg>")`,
                        }} // Set switch color based on status
                      />
                      {formik.errors.declaration2 &&
                        formik.touched.declaration2 && (
                          <p className="text-danger">
                            {formik.errors.declaration2}
                          </p>
                        )}
                    </div>
                  </Col>
                </Col>
                <Col className="d-flex " md={12}>
                  <Col md={8}>
                    <Label className="text-muted">
                      Have you been formally sanctioned, fired or penalized by
                      any government authority ?
                    </Label>
                  </Col>

                  <Col md={4}>
                    <div className="form-check form-switch ms-5 mb-3 ">
                      <Label className="form-check-label" for="SwitchCheck3">
                        {formik.values.declaration3 ? "Yes" : "No"}
                      </Label>
                      <Input
                        className="form-check-input box-shadow-0 border-0"
                        type="checkbox"
                        name="declaration3"
                        role="switch"
                        id="SwitchCheck3"
                        checked={formik.values.declaration3} // Set checked state
                        onChange={formik.handleChange} // Handle status change
                        label="red"
                        style={{
                          ...noBoxShadow,
                          backgroundColor: formik.values.declaration3
                            ? "green"
                            : "rgba(255, 0, 0, 0.8)",
                          backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba(255,255,255,1.0)'/></svg>")`,
                        }} // Set switch color based on status
                      />
                      {formik.errors.declaration3 &&
                        formik.touched.declaration3 && (
                          <p className="text-danger">
                            {formik.errors.declaration3}
                          </p>
                        )}
                    </div>
                  </Col>
                </Col>
                <Col md={12} className="d-flex mt-5 mb-2 ">
                  <Input
                    name="term"
                    type="checkbox"
                    checked={formik.values.term}
                    onChange={formik.handleChange}
                    style={noBoxShadow}
                  />

                  <Label className="ms-4 text-muted">
                    I hereby confirm that this account or the bank will not be
                    used for anu money laundering, terrorist financing or any
                    other financial crime.
                  </Label>
                </Col>{" "}
                <Col>
                  {formik.errors.term && formik.touched.term && (
                    <p className="text-danger">{formik.errors.term}</p>
                  )}
                </Col>
                <Col md={12} className="mb-2">
                  <Input
                    type="checkbox"
                    name="term1"
                    checked={formik.values.term1}
                    onChange={formik.handleChange}
                    style={noBoxShadow}
                  />

                  <Label className="ms-4 text-muted">
                    I hereby confirm that this account will not be used by any
                    other person.
                  </Label>
                </Col>
                <Col>
                  {formik.errors.term1 && formik.touched.term1 && (
                    <p className="text-danger">{formik.errors.term1}</p>
                  )}
                </Col>
                <Col md={12} className="mb-2 d-flex">
                  <Input
                    type="checkbox"
                    name="term2"
                    checked={formik.values.term2}
                    onChange={formik.handleChange}
                    style={noBoxShadow}
                  />

                  <Label className="ms-4 text-muted">
                    I will agree to notify the Bank within 30 calendar days if
                    there is a change in any information which you have provided
                    to the Bank
                  </Label>
                </Col>{" "}
                <Col>
                  {formik.errors.term2 && formik.touched.term2 && (
                    <p className="text-danger">{formik.errors.term2}</p>
                  )}
                </Col>
              </Row>
              <div className="d-flex justify-content-between mt-4">
                <Button
                  color="light"
                  onClick={() =>
                    dispatch(setKycSelectionIndividual("Location"))
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
