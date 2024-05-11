import { useFormik, Field } from "formik";
import React, { useState, useEffect } from "react";
import TableContainer from "../../../Components/Common/TableContainerReactTable";

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
import { useMemo } from "react";
import EcddAddModal from "../../modal/EcddAddModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteMemberInfo } from "../../slices/ecddForm.slice";
import { Link } from "react-router-dom";
import EcddEditModal from "../../modal/EcddEditModal";
const EcddForm = ({ formik }) => {
  const dispatch = useDispatch();
  const [isDebitCardChecked, setIsDebitCardChecked] = useState(false);
  const [isDebitCard, setIsDebitCard] = useState(false);
  const [isDebit, setIsDebit] = useState(false);
  const [isCardChecked, setIsCardChecked] = useState(false);
  const [isCard, setIsCard] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null)
  const [updateModal, setUpdateModal] = useState(false);


  
  const reduxState = useSelector((state) => state.EcddForm?.ecddForm?.memberInfo ); 
console.log("REdusx state" , reduxState);
  const toggleModal = () => {
    setAddModal(!addModal);
}

  const toggleDebitCardService = () => {
    setIsDebitCardChecked(!isDebitCardChecked);
  };
  const toggleCardService = () => {
    setIsCardChecked(!isCardChecked);
  };
  const toggleDebitCard = () => {
    setIsDebitCard(!isDebitCard);
  };
  const toggleDebit = () => {
    setIsDebit(!isDebit);
  };
  const toggleCard = () => {
    setIsCard(!isCard);
  };
  const toggleUpdateModal = () => {
    setUpdateModal(!updateModal);
  }



  const demoData = [
    {
      name: "Jhon",
      familyDetail: "Jhon falls under the PEP catagory ",
      relation: "Father",
      Position: "CEO",
      screenimgId: "123456789",

    },
    {
      name: "hon",
      familyDetail: "hon falls under the PEP catagory ",
      relation: "Father",
      Position: "Manager",
      screenimgId: "123956789",

    }

  ];

  const columns = useMemo(
    () => [

      {
        Header: "Family member Details",
        accessor: "familyDetails",
        filterable: true,
      },
      {
        Header: "Name of Family Member",
        accessor: "memberName",
        filterable: true,
      },
      {
        Header: "Relation",
        accessor: "relationship",
        filterable: true,
      },
      {
        Header: "Position",
        accessor: "position",
        filterable: true,
      },
      {
        Header: "Screening Id",
        accessor: "screeningId",
        filterable: true,
      },
      {
        Header: "Action",
        filterable: true,
        Cell: (cellProps) => {
          return (
            <React.Fragment>
              <div className="gap-2 d-flex">
                <Link color="light"
                  className=""
                >
                  <i className="ri-pencil-fill"
                    onClick={() => {
                      toggleUpdateModal();
                      setEditingIndex(cellProps.row.index)
                    }}
                  ></i>
                </Link>
                <Link
                  color="danger"
                  className="me-2"
                >
                  <i className="ri-delete-bin-fill"
                    onClick={() => dispatch(deleteMemberInfo(cellProps.row.index))}
                  ></i>
                </Link>
              </div>

            </React.Fragment>
          );
        },
      },
    ], []
  );

  return (
    
    <div>
          <EcddAddModal isOpen={addModal} toggleModal={toggleModal}/>
          <EcddEditModal isOpen={updateModal} toggle={toggleUpdateModal}  index={editingIndex}
      />

      <h5 className="mt-2 text-success ">Basic Information</h5>
      <Form>
        <Row className="p-3">
          <Col md={4}>
            <Label className="mt-4"> Customer Name </Label>

            <Input
              name="customerName"
              type="text"
              placeholder=""
              value={formik.values.customerName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Col>
          <Col md={4}>
            <Label className="mt-4">Account type</Label>
            <Input
              id="accountType"
              name="accountType"
              type="text"
              placeholder=""
              value={formik.values.accountType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Col><Col md={4}>
            <Label className="mt-4">CIF Number</Label>
            <Input
              name="cifNumber"
              type="text"
              placeholder=""
              value={formik.values.cifNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {/* {formik.errors.cifNumber && formik.touched.cifNumber && (
    <p className="text-danger">{formik.errors.cifNumber}</p>
  )} */}
          </Col>

          <Col md={4}>
            <Label className="mt-4">Account Number</Label>
            <Input
              name="accountNumber"
              type="text"
              placeholder=""
              value={formik.values.accountNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {/* {formik.errors.accountNumber && formik.touched.accountNumber && (
    <p className="text-danger">{formik.errors.accountNumber}</p>
  )} */}
          </Col>

          <Col md={4}>
            <Label className="mt-4">Purpose of Account Opening</Label>
            <Input
              name="purposeOfAccountOpening"
              type="text"
              placeholder=""
              value={formik.values.purposeOfAccountOpening}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {/* {formik.errors.purposeOfAccountOpening && formik.touched.purposeOfAccountOpening && (
    <p className="text-danger">{formik.errors.purposeOfAccountOpening}</p>
  )} */}
          </Col>
          <Col md={4}>
            <Label className="mt-4">Account Open Date</Label>
            <Input
              name="accountOpenDate"
              type="date"
              placeholder=""
              value={formik.values.accountOpenDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {/* {formik.errors.accountOpenDate && formik.touched.accountOpenDate && (
    <p className="text-danger">{formik.errors.accountOpenDate}</p>
  )} */}
          </Col>

          <Col md={4}>
            <Label className="mt-4">Occupation</Label>
            <Input
              name="occupation"
              type="text"
              placeholder=""
              value={formik.values.occupation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {/* {formik.errors.occupation && formik.touched.occupation && (
    <p className="text-danger">{formik.errors.occupation}</p>
  )} */}
          </Col>

          <Col md={4}>
            <Label className="mt-4">Expected Annual Income</Label>
            <Input
              name="expectedAnnualIncome"
              type="text"
              placeholder=""
              value={formik.values.expectedAnnualIncome}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {/* {formik.errors.expectedAnnualIncome && formik.touched.expectedAnnualIncome && (
    <p className="text-danger">{formik.errors.expectedAnnualIncome}</p>
  )} */}
          </Col>

          <Col md={4}>
            <Label className="mt-4">Anticipated Volume of Transaction</Label>
            <Input
              name="anticipatedVolumeOfTransaction"
              type="text"
              placeholder=""
              value={formik.values.anticipatedVolumeOfTransaction}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {/* {formik.errors.anticipatedVolumeOfTransaction && formik.touched.anticipatedVolumeOfTransaction && (
    <p className="text-danger">{formik.errors.anticipatedVolumeOfTransaction}</p>
  )} */}
          </Col>
          <Col md={12}>
            <Label className="mt-4">Reason of High Risk Categorization</Label>
            <Input
              name="reasonOfHighRiskCategorization"
              type="textarea"
              placeholder=""
              value={formik.values.reasonOfHighRiskCategorization}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {/* {formik.errors.reasonHighRisk && formik.touched.reasonHighRisk && (
    <p className="text-danger">{formik.errors.reasonHighRisk}</p>
  )} */}
          </Col>

        </Row>
      </Form>

      <h5 className="mt-4 mb-4 text-success">Status Verification</h5>

      <Row className="ms-2">
        <Col lg={5}>
          <Col md={12}>
            <h6 className="d-flex justify-content-between">
              <b className="fw-bold">Conducting Screening</b>
              <div className="form-check form-switch me-5">
                <input
                  className="form-check-input"
                  type="checkbox"
                  style={{
                    boxShadow: "none",
                    backgroundColor: formik.values.conductingScreening ? "green" : "red",
                    backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba(255,255,255,1.0)'/></svg>")`,
                  }}
                  role="switch"
                  id="conductingScreening"
                  name="conductingScreening"
                  checked = {formik.values.conductingScreening}
                  onChange={formik.handleChange}
                />
                <label className="form-check-label" htmlFor="conductingScreening">
                  {formik.values.conductingScreening ? "Yes" : "No"}
                </label>
              </div>
            </h6>
            <FormGroup>
              <Label htmlFor="debitCardType" className="mb-4 mt-2">
                Screening ID
              </Label>
              <Input
                id="screeningID1"
                name="screeningID1"
                values={formik.values.screeningID1}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isDisabled={!isDebitCardChecked}
              />
            </FormGroup>
          </Col>
          <Col md={12}>
            <h6 className="d-flex justify-content-between">
              <b className="fw-bold">Screening of Beneficial Owner</b>
              <div className="form-check form-switch me-5">
                <input
                  className="form-check-input"
                  type="checkbox"
                  style={{
                    boxShadow: "none",
                    backgroundColor: formik.values.screeningOfBeneficialOwner ? "green" : "red",
                    backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba(255,255,255,1.0)'/></svg>")`,
                  }}
                  role="switch"
                  id="screeningOfBeneficialOwner"
                  name="screeningOfBeneficialOwner"
                  checked = {formik.values.screeningOfBeneficialOwner}
                  onChange={formik.handleChange}
                />
                <label className="form-check-label" htmlFor="screeningOfBeneficialOwner">
                  {formik.values.screeningOfBeneficialOwner ? "Yes" : "No"}
                </label>
              </div>
            </h6>
            <FormGroup>
              <Label htmlFor="debitCardTypeBeneficialOwner" className="mb-4 mt-2">
                Screening ID of Beneficial Owner
              </Label>
              <Input
                id="screeningIDbeneficialOwner"
                name="screeningIDbeneficialOwner"
                isDisabled={!isDebitCard}
                
              value={formik.values.screeningIDbeneficialOwner}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              />
            </FormGroup>
          </Col>
        </Col>

        <Col lg={7}>
          <h6 className="d-flex justify-content-start ">
            <b className="fw-bold">Screening Result</b>
            <div className="form-check form-switch  ms-4 ">
              <input
                className="form-check-input"
                type="checkbox"
                style={{
                  boxShadow: "none",
                  backgroundColor: formik.values.resultScreening ? "green" : "red",
                  boxShadow: "none",
                  backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba(255,255,255,1.0)'/></svg>")`,
                }}
                role="switch"
                id="resultScreening"
                name="resultScreening"
                checked={formik.values.resultScreening}
                onChange={formik.handleChange}
              />
              <label className="form-check-label" htmlFor="resultScreening">
                {formik.values.resultScreening ? "Match" : "No"}
              </label>
            </div>
          </h6>
          <FormGroup>
            <div
              className="text-dark"
              style={{
                background: "radial-gradient(circle, lightblue 95%,  lightgreen)",
                fontSize: "20px", // Adjust the font size as needed
                color: "white", // Text color
                padding: "10px", // Optional padding
                height: "200px", // Adjust the height as needed
              }}
            >
              MATCHED INFORMATION
            </div>
            {/* Add any additional elements or content here */}
          </FormGroup>
        </Col>

      </Row>

      <h5 className="mt-4 mb-4 text-success">Blacklist Verification</h5>
      <Form>
        <Row className="ms-2">
          <Col md={4}>
            <Label className="mt-4"> Black Listed Date </Label>
            <Input
              id="blackListedDate"
              name="blackListedDate"
              type="date"
              placeholder=""
              value={formik.values.blackListedDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {/* {formik.errors.blackListedDate && formik.touched.blackListedDate && (
            <p className="text-danger">{formik.errors.blackListedDate}</p>
          )} */}
          </Col>{" "}
          <Col md={4}>
            <Label className="mt-4"> Blacklist Removal Date </Label>
            <Input
              id="blackListRemovalDate"
              name="blackListRemovalDate"
              type="date"
              placeholder=""
              value={formik.values.blackListRemovalDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {/* {formik.errors.blacklistRemovalDate && formik.touched.blacklistRemovalDate && (
            <p className="text-danger">{formik.errors.blacklistRemovalDate}</p>
          )} */}
          </Col>{" "}
          <Col md={12}>
            <Label className="mt-4"> Reason for Blacklisting </Label>
            <Input
              id="reasonForBlacklisting"
              name="reasonForBlacklisting"
              type="textarea"
              placeholder=""
              value={formik.values.reasonForBlacklisting}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {/* {formik.errors.reasonForBlacklisting && formik.touched.reasonForBlacklisting && (
            <p className="text-danger">{formik.errors.reasonForBlacklisting}</p>
          )} */}
          </Col>
        </Row>
      </Form>

      <h5 className="mt-4 mb-4 text-success">Screening of family detail of PEP</h5>
      <Row className="ms-2">

        <Col md={4}>
          <h6 className="d-flex justify-content-between">
            <b className="fw-bold">Conducted Screening of Family Members</b>
            <div className="form-check form-switch me-5">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="familyMemberScreening"
                name="familyMemberScreening"
                onChange={formik.handleChange}
                checked={formik.values.familyMemberScreening}
                style={{
                  boxShadow: "none",
                  backgroundColor: formik.values.familyMemberScreening ? "green" : "red",
                  backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba(255,255,255,1.0)'/></svg>")`,
                }}
              />
              <label className="form-check-label" htmlFor="familyMemberScreening">
                {formik.values.familyMemberScreening ? "Yes" : "No"}
              </label>
            </div>
          </h6>
          <FormGroup>
            <Label htmlFor="screeningID2" className="mb-4 mt-2">
              Screening ID
            </Label>
            <Input
              id="screeningID2"
              name="screeningID2"
              value={formik.values.screeningID2}
              isDisabled={!isCardChecked}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {/* {formik.touched.familyMemberScreeningID && formik.errors.familyMemberScreeningID && (
      <p className="text-danger">{formik.errors.familyMemberScreeningID}</p>
    )} */}
          </FormGroup>
        </Col>

        <Col md={12} className="mb-4">
          <h6 className="d-flex justify-content-start">
            <b className="fw-bold">Screening Result</b>
            <div className="form-check form-switch ms-5">
              <input
                className="form-check-input"
                type="checkbox"
                style={{
                  boxShadow: "none",
                  backgroundColor: formik.values.screeningResult ? "green" : "red",
                  backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba(255,255,255,1.0)'/></svg>")`,
                  boxShadow: "none",
                }}
                role="switch"
                id="screeningResult"
                name="screeningResult"
                onChange={formik.handleChange}
                checked={formik.values.screeningResult}
              />
              <label className="form-check-label" htmlFor="screeningResult">
                {formik.values.screeningResult ? "Match" : "UnMatched"}
              </label>
            </div>
          </h6>
          <FormGroup>
            <Label htmlFor="matchResultDetail" className="mb-4 mt-2">
              Match Result in Detail
            </Label>
            <Input
              id="matchResultDetail"
              name="matchResultDetail"
              type="textarea"
              value={formik.values.matchResultDetail}
              // isDisabled={!isCard}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {/* {formik.touched.matchResultDetail && formik.errors.matchResultDetail && (
      <p className="text-danger">{formik.errors.matchResultDetail}</p>
    )} */}
          </FormGroup>
        </Col>

        <Col md={12} className="mb-4">

          <div className="d-flex justify-content-end  mb-2">
            <Button color="success" onClick={() => setAddModal(true)} >Add Member Info</Button>
          </div>

          <TableContainer
            columns={columns}
            data={reduxState}
            // isGlobalFilter={true}
            isAddUserList={false}
            customPageSize={8}
            styleVariant='pending'
          


          />
        </Col>

      </Row>

      <Row className="mt-4 mb-4">
        <Col md={2} className="mt-4 mb-4   ">
          <h6 >Risk Catagorization : </h6>
        </Col> <Col md={3} className="mt-4 mb-4 justify-content-start   ">

          <Input
            type="select"
            name="riskCategorization"
            value={formik.values.riskCategorization}
            onChange={formik.handleChange}
          >
            <option value="" className="text-muted" disabled>
              Select Risk
            </option>
            <option value="normalRisk">Normal Risk</option>
            <option value="lowRisk">Low Risk</option>
            <option value="highRisk">High Risk</option>
          </Input>

          {/* {formik.touched.issuedPlace && formik.errors.issuedPlace && (
                    <div className="text-danger">
                      {formik.errors.issuedPlace}
                    </div>
                  )} */}
        </Col>
      </Row>
      <div className="bg-light p-4" >
        <Row className="mt-4 text-center pe-4">
          <Col md={4} className="text-dark">
            <h6> ECDD conducted By</h6>
          </Col>
          <Col md={4} className="text-dark">
            <h6> ECDD Verified By</h6>
          </Col>
          <Col md={4} className="text-dark">
            <h6> ECDD Approved By</h6>
          </Col>
          <Col md={2} className="mt-4 mb-4 text-end">
            <h6>Position : </h6>
          </Col>
          <Col md={2} className="mt-4 mb-4 justify-content-start">
            <Input
              type="select"
              name="ecddConductedByPosition"
              value={formik.values.ecddConductedByPosition}
              onChange={formik.handleChange}
            >
              <option value="" className="text-muted" disabled>
                Select Position
              </option>
              <option value="CEO">CEO</option>
              <option value="Manager">Manager</option>
              <option value="HR">HR</option>
            </Input>
            {/* {formik.touched.conductedByPosition && formik.errors.conductedByPosition && (
      <div className="text-danger">{formik.errors.conductedByPosition}</div>
    )} */}
          </Col>
          <Col md={2} className="mt-4 mb-4 text-end">
            <h6>Position : </h6>
          </Col>
          <Col md={2} className="mt-4 mb-4 justify-content-start">
            <Input
              type="select"
              name="ecddVerifiedByPosition"
              value={formik.values.ecddVerifiedByPosition}
              onChange={formik.handleChange}
            >
              <option value="" className="text-muted" disabled>
                Select Position
              </option>
              <option value="CEO">CEO</option>
              <option value="Manager">Manager</option>
              <option value="HR">HR</option>
            </Input>
            {/* {formik.touched.verifiedByPosition && formik.errors.verifiedByPosition && (
      <div className="text-danger">{formik.errors.verifiedByPosition}</div>
    )} */}
          </Col>
          <Col md={2} className="mt-4 mb-4 text-end">
            <h6>Position : </h6>
          </Col>
          <Col md={2} className="mt-4 mb-4 justify-content-start">
            <Input
              type="select"
              name="ecddApprovedByPosition"
              value={formik.values.ecddApprovedByPosition}
              onChange={formik.handleChange}
            >
              <option value="" className="text-muted" disabled>
                Select Position
              </option>
              <option value="CEO">CEO</option>
              <option value="Manager">Manager</option>
              <option value="HR">HR</option>
            </Input>
            {/* {formik.touched.approvedByPosition && formik.errors.approvedByPosition && (
      <div className="text-danger">{formik.errors.approvedByPosition}</div>
    )} */}
          </Col>
          <Col md={2} className="mt-4 mb-4 text-end">
            <h6>Date : </h6>
          </Col>
          <Col md={2} className="mt-4 mb-4 justify-content-start">
            <Input
              type="date"
              name="ecddConductedByDate"
              value={formik.values.ecddConductedByDate}
              onChange={formik.handleChange}
            />
            {/* {formik.touched.conductedByDate && formik.errors.conductedByDate && (
      <div className="text-danger">{formik.errors.conductedByDate}</div>
    )} */}
          </Col>
          <Col md={2} className="mt-4 mb-4 text-end">
            <h6>Date : </h6>
          </Col>
          <Col md={2} className="mt-4 mb-4 justify-content-start">
            <Input
              type="date"
              name="ecddVerifiedByDate"
              value={formik.values.ecddVerifiedByDate}
              onChange={formik.handleChange}
            />
            {/* {formik.touched.verifiedByDate && formik.errors.verifiedByDate && (
      <div className="text-danger">{formik.errors.verifiedByDate}</div>
    )} */}
          </Col>
          <Col md={2} className="mt-4 mb-4 text-end">
            <h6>Date : </h6>
          </Col>
          <Col md={2} className="mt-4 mb-4 justify-content-start">
            <Input
              type="date"
              name="ecddApprovedByDate"
              value={formik.values.ecddApprovedByDate}
              onChange={formik.handleChange}
            />
            {/* {formik.touched.approvedByDate && formik.errors.approvedByDate && (
      <div className="text-danger">{formik.errors.approvedByDate}</div>
    )} */}
          </Col>
        </Row>


      </div>



    </div>

  );
};

export default EcddForm;
