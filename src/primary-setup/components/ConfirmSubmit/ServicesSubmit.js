import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Alert,
  CardImg,
  CardText,
  CardColumns,
  CardHeader,
} from "reactstrap";
import { useSelector } from "react-redux";

export default function ServicesSubmit() {
  const data = useSelector((state) => state.KycDetails.servicesYouWant);
  return (
    <Card style={{ border: "1px solid rgba(206, 212, 218, 1)" }}>
      <CardHeader className="p-2">
        <h5 className="mt-1 ms-2 text-muted">Services</h5>
      </CardHeader>

      <CardBody>
        <h5 className="mt-2 text-muted">Statement</h5>
        <Row className="p-5">
          <Col md={6}>
            <Row>
              <Col sm={6}>
                <p className="fw-bold">Frequency:</p>
              </Col>
              <Col sm={6}>
                <p className="fw-medium">{data.frequency || "N/A"}</p>
              </Col>

              <Col sm={6} className="mt-3">
                <p className="fw-bold">Mode of Delivery:</p>
              </Col>
              <Col sm={6} className="mt-3">
                <p className="fw-medium">{data.modeOfDelivery || "N/A"}</p>
              </Col>

              <Col sm={6} className="mt-3">
                <p className="fw-bold">Statement Print:</p>
              </Col>
              <Col sm={6} className="mt-3">
                <p className="fw-medium">
                  {data.statementPrint.map((item) => item + ', ')}
                </p>
              </Col>

              <Col sm={6} className="mt-3">
                <p className="fw-bold">Debit Card:</p>
              </Col>
              <Col sm={6} className="mt-3">
                <div className="form-check form-switch me-5 mb-3">
                  <input
                    className="form-check-input"
                    style={{
                      boxShadow: "none",
                      backgroundColor:
                        data?.debitCardService ? "green" : "red",
                      boxShadow: "none",
                    }}
                    type="checkbox"
                    role="switch"
                    id="onlineBanking"
                    name="onlineBanking"
                    checked={data.debitCardService}
                    disabled
                  />
                  <label className="form-check-label" for="onlineBanking">
                    {data?.debitCardService ? "Yes" : "No"}
                  </label>
                </div>
              </Col>

              <Col sm={6} className="mt-3">
                <p className="fw-bold">Debit Card Type:</p>
              </Col>
              <Col sm={6} className="mt-3">
                <p className="fw-medium">{data.debitCardType || 'N/A'}</p>
              </Col>

              
              <Col sm={6} className="mt-3">
                <p className="fw-bold">Merchant QR:</p>
              </Col>
              <Col sm={6} className="mt-3">
                <div className="form-check form-switch me-5 mb-3">
                  <input
                    className="form-check-input"
                    style={{
                      boxShadow: "none",
                      backgroundColor:
                        data?.merchantQR ? "green" : "red",
                      boxShadow: "none",
                    }}
                    type="checkbox"
                    disabled
                    role="switch"
                    id="onlineBanking"
                    name="merchantQR"
                    value={data.merchantQR}
                  />
                  <label className="form-check-label" for="onlineBanking">
                    {data?.merchantQR ? "Yes" : "No"}
                  </label>
                </div>
              </Col>
            </Row>
          </Col>

          <Col md={6}>
            <Row>
              <Col sm={6}>
                <p className="fw-bold">Online Banking:</p>
              </Col>
              <Col sm={6}>
                <div className="form-check form-switch me-5 mb-3">
                  <input
                    className="form-check-input"
                    style={{
                      boxShadow: "none",
                      backgroundColor:
                        data?.onlineBanking ? "green" : "red",
                      boxShadow: "none",
                    }}
                    type="checkbox"
                    disabled
                    role="switch"
                    id="onlineBanking"
                    name="onlineBanking"
                    value={data.onlineBanking}
                  />
                  <label className="form-check-label" for="onlineBanking">
                    {data?.onlineBanking ? "Yes" : "No"}
                  </label>
                </div>
              </Col>

              <Col sm={6} className="mt-3">
                <p className="fw-bold">Mobile Banking:</p>
              </Col>
              <Col sm={6} className="mt-3">
                <div className="form-check form-switch me-5 mb-3">
                  <input
                    className="form-check-input"
                    style={{
                      boxShadow: "none",
                      backgroundColor:
                        data?.mobileBanking ? "green" : "red",
                      boxShadow: "none",
                    }}
                    type="checkbox"
                    disabled
                    role="switch"
                    id="onlineBanking"
                    name="mobileBanking"
                    value={data.mobileBanking}
                  />
                  <label className="form-check-label" for="onlineBanking">
                    {data?.mobileBanking ? "Yes" : "No"}
                  </label>
                </div>
              </Col>

              <Col sm={6} className="mt-3">
                <p className="fw-bold">SMS Banking:</p>
              </Col>
              <Col sm={6} className="mt-3">
                <div className="form-check form-switch me-5 mb-3">
                  <input
                    className="form-check-input"
                    style={{
                      boxShadow: "none",
                      backgroundColor:
                        data?.smsBanking ? "green" : "red",
                      boxShadow: "none",
                    }}
                    type="checkbox"
                    disabled
                    role="switch"
                    id="onlineBanking"
                    name="smsBanking"
                    value={data.smsBanking}
                  />
                  <label className="form-check-label" for="onlineBanking">
                    {data?.smsBanking ? "Yes" : "No"}
                  </label>
                </div>
              </Col>

              <Col sm={6} className="mt-3">
                <p className="fw-bold">Phone Pay:</p>
              </Col>
              <Col sm={6} className="mt-3">
                <div className="form-check form-switch me-5 mb-3">
                  <input
                    className="form-check-input"
                    style={{
                      boxShadow: "none",
                      backgroundColor:
                        data?.phonePay ? "green" : "red",
                      boxShadow: "none",
                    }}
                    type="checkbox"
                    disabled
                    role="switch"
                    id="phonePay"
                    name="phonePay"
                    value={data.phonePay}
                  />
                  <label className="form-check-label" for="phonePay">
                    {data?.phonePay ? "Yes" : "No"}
                  </label>
                </div>
              </Col>

              <Col sm={6} className="mt-3">
                <p className="fw-bold">Transaction Alert:</p>
              </Col>
              <Col sm={6} className="mt-3">
                <div className="form-check form-switch me-5 mb-3">
                  <input
                    className="form-check-input"
                    style={{
                      boxShadow: "none",
                      backgroundColor:
                        data?.transactionAlert ? "green" : "red",
                      boxShadow: "none",
                    }}
                    type="checkbox"
                    disabled
                    role="switch"
                    id="transactionAlert"
                    name="transactionAlert"
                    value={data.transactionAlert}
                  />
                  <label className="form-check-label" for="transactionAlert">
                    {data?.transactionAlert ? "Yes" : "No"}
                  </label>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}
