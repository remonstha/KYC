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
import { transactionSchema as validationSchema } from "../../validationSchema";
import { updateTransactionInfo } from "../../slices/kycDetails.slice";
import { useDispatch, useSelector } from "react-redux";
import { setKycSelectionIndividual } from "../../slices/selection.slice";
import { postTransactionInfo } from "../../../slices/CentralizedKYC/IndividualKYC/thunk";
import UserDetailsCard from "./UserDetailsCard";

export default function TransactionInfo() {
  const dispatch = useDispatch();
  const initialValues = useSelector(
    (state) => state.KycDetails.transactionInfo
  );
  const videoKYC = useSelector((state) => state.IndKyc.videoKYC);
  const transactionId = useSelector((state) => state.IndKyc?.transactionInfo);

  const formik = useFormik({
    initialValues,
    // validationSchema,
    onSubmit: (values) => {
      dispatch(updateTransactionInfo(values));
      console.log("values", values);
      dispatch(setKycSelectionIndividual("ServicesYouWant"));

      const valueToSave = {
        deposit1: values.deposit,
        withDrawal1: values.withdrawl,

        deposit2: values.daydeposit,
        withDrawal2: values.daywithdrawl,
        videoKycId: videoKYC?.id,
        id: transactionId?.id,
      };
      dispatch(postTransactionInfo(valueToSave));
    },
  });

  return (
    <>
      {/* <UserDetailsCard /> */}
      <Card className="p-0">
        <CardHeader className="px-4">
          <div className="">
            <h5 className="m-0">Transaction Related Information</h5>
          </div>
        </CardHeader>

        <CardBody className="px-4">
          <Form onSubmit={formik.handleSubmit}>
            <FormGroup>
              <Row className="gy-3 mt-2">
                <h6 className="fw-bold mt-3" style={{ color: "#495057" }}>
                  Expected Maximum Transaction in Single Transaction{" "}
                </h6>

                <Col lg={6}>
                  <Label> Deposit </Label>

                  <Input
                    id="deposit"
                    name="deposit"
                    type="number"
                    placeholder="999999"
                    value={formik.values.deposit}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {formik.errors.deposit && formik.touched.deposit && (
                    <p className="text-danger">{formik.errors.deposit}</p>
                  )}
                </Col>

                <Col lg={6}>
                  <Label> Withdrawal </Label>

                  <Input
                    id="withdrawal"
                    name="withdrawl"
                    type="number"
                    placeholder="999999"
                    value={formik.values.withdrawl}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {formik.errors.withdrawl && formik.touched.withdrawl && (
                    <p className="text-danger">{formik.errors.withdrawl}</p>
                  )}
                </Col>

                <h6 className="fw-bold mt-5" style={{ color: "#495057" }}>
                  Expected Maximum Number of Transaction in Single Day{" "}
                </h6>

                <Col lg={6}>
                  <Label> Deposit </Label>

                  <Input
                    id="daydeposit"
                    name="daydeposit"
                    type="number"
                    placeholder="999999"
                    value={formik.values.daydeposit}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {formik.errors.daydeposit && formik.touched.daydeposit && (
                    <p className="text-danger">{formik.errors.daydeposit}</p>
                  )}
                </Col>

                <Col lg={6}>
                  <Label> Withdrawal </Label>

                  <Input
                    id="daywithdrawal"
                    name="daywithdrawl"
                    type="number"
                    placeholder="999999"
                    value={formik.values.daywithdrawl}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {formik.errors.daywithdrawl &&
                    formik.touched.daywithdrawl && (
                      <p className="text-danger">
                        {formik.errors.daywithdrawl}
                      </p>
                    )}
                </Col>
              </Row>
              <div className="d-flex justify-content-between mt-5">
                <Button
                  color="light"
                  onClick={() =>
                    dispatch(setKycSelectionIndividual("NomineeForm"))
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
