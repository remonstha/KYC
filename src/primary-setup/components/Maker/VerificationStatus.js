import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Row,
  Col,
  ButtonGroup,
  Button,
  Badge,
  Input,
  CardImg,
} from "reactstrap";
// import TableContainer from '../../Components/Common/TableContainer';
import TableContainer from "../../../Components/Common/TableContainerReactTable";

import { useMemo } from "react";
import { FaRegClock as PendingIcon } from "react-icons/fa";
import "../../../App.css";
import { DivIcon } from "leaflet";
import { Link } from "react-router-dom";
import { FaCheck, FaTimes } from "react-icons/fa";
import verifiedstatusTick from "../../assets/complianceImages/verifiedstatusTick.png";
import secondIcon from "../../assets/complianceImages/2ndIcon.png";
import transferIcon from "../../assets/complianceImages/transferIcon.png";
import viewIcon from "../../assets/complianceImages/viewIcon.png";
import pendingActionTick from "../../assets/complianceImages/pendingActionTick.png";
import pendingCrossIcon from "../../assets/complianceImages/pendingCrossIcon.png";

const VerificationStatus = () => {
  const [currentState, setCurrentState] = useState("pending");

  const approvedData = [
    {
      applicantname: "abc",
      productType: "household",
      accounttype: "Saving",
      appliedOn: "2023-10-01",
      approvedOn: "2023-05-28",
      branch: "Branch A",
      risk: "Low",
      priority: ["Normal", "Urgent"],

      status: "Approved",
      actions: ["Approve", "Reject"],
    },
    {
      applicantname: "dfjoe",
      accounttype: "Current",
      productType: "household",
      appliedOn: "2023-09-25",
      approvedOn: "2023-09-28",
      branch: "Branch B",
      risk: "Normal",
      priority: ["Normal", "Urgent"],

      status: "Approved",
      actions: ["View Details"],
    },
    {
      applicantname: "john",
      accounttype: "Saving",
      appliedOn: "2023-10-05",
      approvedOn: "2023-09-28",
      branch: "Branch C",
      risk: "High",
      priority: ["Normal", "Urgent"],

      status: "Approved",
      actions: ["View Details"],
    },
  ];

  const approvedColumns = useMemo(() => [
    {
      Header: "Applicant's name",
      accessor: "applicantname",
    },
    {
      Header: "Account type",
      accessor: "accounttype",
    },
    {
      Header: "Applied on",
      accessor: "appliedOn",
    },
    {
      Header: "Approved on",
      accessor: "approvedOn",
    },
    {
      Header: "Risk",
      accessor: "risk",
      Cell: ({ value }) => {
        const riskStyles = {
          padding: "5px",
          borderRadius: "5px",
          color: value === "High" ? "#FF0000" : "#67B173",
          backgroundColor: value === "High" ? "#FF00000A" : "#1DCF650A",
        };

        return <span style={riskStyles}>{value}</span>;
      },
    },
    {
      Header: "Branch",
      accessor: "branch",
    },
    {
      Header: "Status",
      accessor: "approvedStatus",
      Cell: () => {
        return (
          <>
            <img
              src={verifiedstatusTick}
              alt="Verified Status"
              style={{ width: "20px", height: "20px" }} // Adjust width and height as needed
              className="me-2"
            />
            <img
              src={secondIcon}
              alt="Second Icon"
              style={{ width: "25px", height: "20px" }} // Adjust width and height as needed
              className="me-1"
            />
            <img
              src={transferIcon}
              alt="Transfer Icon"
              style={{ width: "30px", height: "20px" }} // Adjust width and height as needed
              className="me-2"
            />
          </>
        );
      },
    },
    {
      Header: "Action",
      accessor: "approvedActions",
      Cell: () => {
        return (
          <>
            <Link to="/confirmsubmit">
              <img
                src={viewIcon}
                alt="View Icon"
                style={{ width: "20px", height: "20px" }} // Adjust width and height as needed
                className="me-1"
              />
            </Link>
            Details
          </>
        );
      },
    },
  ]);

  const pendingData = [
    {
      pendingApplicantName: "Sarah",
      pendingAccountType: "Saving",
      pendingAppliedOn: "2023-10-02",
      pendingBranch: "Branch D",
      risk: "High",
      priority: "Normal",

      // pendingStatus: "Pending",
      // pendingChecklist: ["Approve", "Reject"]
    },
    {
      pendingApplicantName: "Michael",
      pendingAccountType: "Current",
      pendingAppliedOn: "2023-10-03",
      pendingBranch: "Branch E",
      risk: "High",
      priority: "Normal",

      // pendingStatus: "Pending",
      // pendingChecklist: ["Approve", "Reject"]
    },
  ];

  const pendingColumns = useMemo(() => [
    {
      Header: "Applicant's Name",
      accessor: "pendingApplicantName",
    },
    {
      Header: "Account Type",
      accessor: "pendingAccountType",
    },
    {
      Header: "Applied On",
      accessor: "pendingAppliedOn",
    },
    {
      Header: "Risk",
      accessor: "risk",
      Cell: ({ value }) => {
        const riskStyles = {
          padding: "5px",
          borderRadius: "5px",
          color: value === "High" ? "#FF0000" : "#67B173",
          backgroundColor: value === "High" ? "#FF00000A" : "#1DCF650A",
        };

        return <span style={riskStyles}>{value}</span>;
      },
    },
    {
      Header: "Priority",
      accessor: "priority",
      Cell: ({ value }) => {
        const priorityStyles = {
          padding: "5px",
          borderRadius: "5px",
          color: value === "Urgent" ? "#FF0000" : "#2E5AAA",
          backgroundColor: value === "Urgent" ? "#FF00000A" : "#3E69D90A",
        };

        return <span style={priorityStyles}>{value}</span>;
      },
    },
    {
      Header: "Branch",
      accessor: "pendingBranch",
    },
    {
      Header: "Status",
      accessor: "pendingStatus",
      Cell: () => {
        return (
          <>
            {/* <Badge color="success" className=" me-1">
                            <ApproveIcon size={15}/>
                          </Badge>
                          <Badge color="danger" className=" me-1">
                            <RejectIcon size={15}/>
                          </Badge>
                          <Badge color="info" className=" me-1">
                            <TransferIcon size={15}/>
                          </Badge> */}
            <Badge color="secondary">
              <PendingIcon className="me-1" />
              Pending
            </Badge>
          </>
        );
      },
    },
    {
      Header: "CheckList",
      accessor: "pendingChecklist",
      Cell: () => {
        return (
          <>
            <img
              src={verifiedstatusTick}
              alt="Verified Status"
              style={{ width: "20px", height: "20px" }}
              className="me-2"
            />
            <img
              src={secondIcon}
              alt="Second Icon"
              style={{ width: "25px", height: "20px" }}
              className="me-1"
            />
            <img
              src={transferIcon}
              alt="Transfer Icon"
              style={{ width: "30px", height: "20px" }}
              className="me-2"
            />
          </>
        );
      },
    },
    {
      Header: "Action",
      accessor: "pendingActions",
      Cell: () => {
        return (
          <>
            <Link to="/confirmsubmit">
              <img
                src={viewIcon}
                alt="View Icon"
                style={{ width: "20px", height: "20px" }} // Adjust width and height as needed
                className="me-1"
              />
            </Link>{" "}
            Review
          </>
        );
      },
    },
  ]);

  const rejectedData = [
    {
      rejectedApplicantName: "Sarah",
      rejectedAccountType: "Individual",
      rejectedAppliedOn: "2023-10-02",
      rejectedBranch: "Branch D",
      rejectedRisk: "High",
      // rejectedStatus: "Pending",
      // rejectedActions: ["Approve", "Reject"]
    },
    {
      rejectedApplicantName: "Michael",
      rejectedAccountType: "Individual",
      rejectedAppliedOn: "2023-10-03",
      rejectedBranch: "Branch E",
      rejectedRisk: "High",

      // rejectedStatus: "Pending",
      // rejectedActions: ["Approve", "Reject"]
    },
  ];
  const rejectedColumns = useMemo(() => [
    {
      Header: "Applicant's Name",
      accessor: "rejectedApplicantName",
    },
    {
      Header: "Account Type",
      accessor: "rejectedAccountType",
    },
    {
      Header: "Applied On",
      accessor: "rejectedAppliedOn",
    },
    {
      Header: "Risk",
      accessor: "rejectedRisk",
      Cell: ({ value }) => {
        const riskStyles = {
          padding: "5px",
          borderRadius: "5px",
          color: value === "High" ? "#FF0000" : "#67B173",
          backgroundColor: value === "High" ? "#FF00000A" : "#1DCF650A",
        };

        return <span style={riskStyles}>{value}</span>;
      },
    },
    {
      Header: "Branch",
      accessor: "rejectedBranch",
    },

    {
      Header: "Status",
      accessor: "rejectedStatus",
      Cell: () => {
        return (
          <>
            <img
              src={verifiedstatusTick}
              alt="Verified Status"
              style={{ width: "20px", height: "20px" }} // Adjust width and height as needed
              className="me-2"
            />
            <img
              src={secondIcon}
              alt="Second Icon"
              style={{ width: "25px", height: "20px" }} // Adjust width and height as needed
              className="me-1"
            />
            <img
              src={transferIcon}
              alt="Transfer Icon"
              style={{ width: "30px", height: "20px" }} // Adjust width and height as needed
              className="me-2"
            />
          </>
        );
      },
    },
    {
      Header: "Action",
      accessor: "rejectedActions",
      Cell: () => {
        return (
          <>
            <Link to="/confirmsubmit">
              <img
                src={viewIcon}
                alt="View Icon"
                style={{ width: "20px", height: "20px" }} // Adjust width and height as needed
                className="me-1"
              />
            </Link>{" "}
            Details
          </>
        );
      },
    },
  ]);

  const handleStateChange = (state) => {
    setCurrentState(state);
  };

  const statusOptions = [
    { label: "Pending", value: "pending" },
    { label: "Approved", value: "approved" },
    { label: "Rejected", value: "rejected" },
  ];

  const branchOptions = [
    { label: "Branch A", value: "branchA" },
    { label: "Branch B", value: "branchB" },
    { label: "Branch C", value: "branchC" },
  ];

  return (
    <Card className="cardLayOut">
      <Row className="mt-4">
        <Col md={2} className="my-custom-division">
          <h6 className="text-start fw-b ">Verification</h6>
          <CardBody className="text-center">
            <ButtonGroup vertical >
              {statusOptions.map((option) => (
                <Button

                  key={option.value}
                  color={currentState === option.value ? "soft-info" : "black"}
                  style={
                    currentState === option.value
                      ? {
                          background:"linear-gradient(100deg, rgba(28, 209, 100, 0.12) 37.99%, rgba(32, 133, 211, 0.12) 63.57%, rgba(60, 104, 216, 0.12) 75.64%, rgba(33, 143, 195, 0.12) 100.37%)",
                          borderImage: "linear-gradient(100deg, #1CD164 37.99%, #2085D3 63.57%, #3C68D8 75.64%, #218FC3 100.37%)",
                          border:" 1px solid #d6d6d6",
                        }
                      : { background: "white" }
                  }
                  onClick={() => handleStateChange(option.value)}
                  className="my-custom-class mb-3 rounded-0"
                >
                  <span
                    style={
                      currentState === option.value
                        ? {
                            background:
                              "linear-gradient(100deg, #1CD164 37.99%, #2085D3 63.57%, #3C68D8 75.64%, #218FC3 100.37%)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }
                        : { background: "white" }
                    }
                  >
                    {option.label}
                  </span>
                </Button>
              ))}
            </ButtonGroup>
          </CardBody>
        </Col>
        <Col md={10} className="mt-2">
          <h6>
            {currentState === "pending"
              ? "PENDING APPLICANTS"
              : currentState === "approved"
              ? "APPROVED APPLICANTS"
              : "REJECTED APPLICANTS"}
          </h6>

          <CardBody>
            {currentState === "pending" ? (
              <TableContainer
                columns={pendingColumns}
                data={pendingData}
                isAddUserList={false}
                customPageSize={8}
                // thClass={'table-light text-muted'}
                  isPagination={true}
                isGlobalFilter={true}
                isGlobalBranch={true}
                branchOptions={branchOptions}
                // SearchPlaceholder={"overall Search"}

                styleVariant={"pending"}
              />
            ) : currentState === "approved" ? (
              <TableContainer
                columns={approvedColumns}
                data={approvedData}
                isAddUserList={false}
                customPageSize={8}
                isGlobalFilter={true}
                isPagination={true}
                isGlobalBranch={true}
                branchOptions={branchOptions}
                styleVariant={"approved"}
              />
            ) : currentState === "rejected" ? (
              <TableContainer
                columns={rejectedColumns}
                data={rejectedData}
                isAddUserList={false}
                customPageSize={8}
                isGlobalFilter={true}
                isPagination={true}
                isGlobalBranch={true}
                branchOptions={branchOptions}
                styleVariant={"rejected"}
              />
            ) : null}
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
};

export default VerificationStatus;
