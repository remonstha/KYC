import { useFormik, Field } from "formik";
import React, { useState, useEffect, useMemo } from "react";
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
import TableContainer from "../../../Components/Common/TableContainerReactTable";
import { useDispatch, useSelector } from "react-redux";

export default function DeclarationSubmit() {
  const data = useSelector((state) => state.KycDetails?.declaration);

  const initialValues = useSelector((state) => state.KycDetails?.declaration);

  const noBoxShadow = {
    boxShadow: "none",
  };

  const columns = useMemo(
    () => [
      {
        Header: "Individual's Name",
        accessor: "individualName",
        filterable: true,
      },
      {
        Header: "Position",
        accessor: "position",
        filterable: true,
      },
      {
        Header: "Area of Involvement",
        accessor: "involvement",
        filterable: true,
      },
      {
        Header: "Relationship",
        accessor: "relationship",
        filterable: true,
      },
      {
        Header: "Additional Information",
        accessor: "info",
        filterable: true,
      },
    ],
    []
  );

  const tableData = [
    {
      individualName: "Deewas",
      position: "developer",
      involvement: "web design",
      relationship: "N/A",
      info: "N/A",
    },
    {
      individualName: "bhuwan",
      position: "developer",
      involvement: "web design",
      relationship: "N/A",
      info: "N/A",
    },
  ];
  return (
    <Card className="p-0">
      <CardHeader className="px-4">
        <div className="">
          <h5 className="m-0">Declaration</h5>
        </div>
      </CardHeader>

      <CardBody className="px-4">
        <Form>
          <FormGroup>
            <Row>
              <h6 className="text-mute mt-2">
                Mention of position/association and institution name if you are
                a high profile individual or currently involved in or retired
                from politics, bureaucracy or other high level position.
              </h6>
              <Col sm={4} className="mt-3">
                <p className="fw-bold">Position/Association:</p>
              </Col>
              <Col sm={8} className="mt-3">
                <p className="fw-medium">{data.position || "N/A"}</p>
              </Col>
              <Col sm={4} className="mt-3">
                <p className="fw-bold">Institution Name:</p>
              </Col>
              <Col sm={8} className="mt-3">
                <p className="fw-medium">{data.institution || "N/A"} </p>
              </Col>
              <Col sm={4} className="mt-3">
                <p className="fw-bold">Additional Information</p>
              </Col>
              <Col sm={8} className="mt-3">
                <p className="fw-medium">{data.information || "N/A"} </p>
              </Col>
              <Col md={12} className="mt-3">
                <p className="text-muted">
                  Mention the details of your family members or close associates
                  having high profile or currently involved in or retired from
                  politics, bureaucracy or other high level position
                </p>
              </Col>
              <Col md={12} className=" mt-3">
                <TableContainer
                  columns={columns}
                  data={tableData}
                  // isGlobalFilter={true}
                  isAddUserList={false}
                  customPageSize={8}
                  divClass="table-responsive table-card mb-3"
                  tableClass="align-middle table-nowrap mb-0"
                  theadClass="table-primary table-nowrap "
                  // styleVariant='module'
                />
              </Col>
              <Col className="d-flex mt-5" md={12}>
                <Col md={8}>
                  <Label className="text-muted">
                    Are you currently a Board of Director/CEO/TOP management of
                    any bank and financial institution ?
                  </Label>
                </Col>
                <Col md={4}>
                  <div className="form-check form-switch ms-5  mb-2 ">
                    <Label className="form-check-Label" for="SwitchCheck1">
                      {data.declaration ? "Yes" : "No"}
                    </Label>
                    <input
                      className="form-check-input"
                      disabled
                      type="checkbox"
                      name="declaration"
                      role="switch"
                      id="SwitchCheck1"
                      checked={data?.declaration || false} // Set checked state
                      style={{
                        ...noBoxShadow,
                        backgroundColor:
                          data?.declaration || false
                            ? "green"
                            : "rgba(255, 0, 0, 0.8)",
                      }}
                    />
                  </div>
                </Col>
              </Col>
              <Col className="d-flex " md={12}>
                <Col md={8}>
                  <Label className="text-muted">
                    Have you ever been formally accused, charged, or convicted
                    of any crime ?
                  </Label>
                </Col>

                <Col md={4}>
                  <div className="form-check form-switch ms-5  mb-3 ">
                    <Label className="form-check-label" for="SwitchCheck2">
                      {data?.declaration2 || false ? "Yes" : "No"}
                    </Label>
                    <Input
                      className="form-check-input"
                      disabled
                      type="checkbox"
                      name="declaration2"
                      role="switch"
                      id="SwitchCheck2"
                      checked={data?.declaration2 || false} // Set checked state
                      style={{
                        ...noBoxShadow,
                        backgroundColor:
                          data?.declaration2 || false
                            ? "green"
                            : "rgba(255, 0, 0, 0.8)",
                      }} // Set switch color based on status
                    />
                  </div>
                </Col>
              </Col>
              <Col className="d-flex " md={12}>
                <Col md={8}>
                  <Label className="text-muted">
                    Have you been formally sanctioned, fired or penalized by any
                    government authority ?
                  </Label>
                </Col>

                <Col md={4}>
                  <div className="form-check form-switch ms-5 mb-3 ">
                    <Label className="form-check-label" for="SwitchCheck3">
                      {data?.declaration3 || false ? "Yes" : "No"}
                    </Label>
                    <Input
                      className="form-check-input box-shadow-0"
                      disabled
                      type="checkbox"
                      name="declaration3"
                      role="switch"
                      id="SwitchCheck3"
                      checked={data?.declaration3 || false} // Set checked state
                      label="red"
                      style={{
                        ...noBoxShadow,
                        backgroundColor:
                          data?.declaration3 || false
                            ? "green"
                            : "rgba(255, 0, 0, 0.8)",
                      }} // Set switch color based on status
                    />
                  </div>
                </Col>
              </Col>
              <Col md={12} className="d-flex mt-5 mb-2 ">
                <Input
                  disabled
                  name="term"
                  type="checkbox"
                  checked={data?.term || false}
                  style={noBoxShadow}
                />

                <Label className="ms-4 text-muted">
                  I hereby confirm that this account or the bank will not be
                  used for anu money laundering, terrorist financing or any
                  other financial crime.
                </Label>
              </Col>{" "}
              <Col></Col>
              <Col md={12} className="mb-2">
                <Input
                  disabled
                  type="checkbox"
                  name="term1"
                  checked={data?.term1 || false}
                  style={noBoxShadow}
                />

                <Label className="ms-4 text-muted">
                  I hereby confirm that this account will not be used by any
                  other person.
                </Label>
              </Col>
              <Col></Col>
              <Col md={12} className="mb-2 d-flex">
                <Input
                  disabled
                  type="checkbox"
                  name="term2"
                  checked={data?.term2 || false}
                  style={noBoxShadow}
                />

                <Label className="ms-4 text-muted">
                  I will agree to notify the Bank within 30 calendar days if
                  there is a change in any information which you have provided
                  to the Bank
                </Label>
              </Col>{" "}
              <Col></Col>
            </Row>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
}
