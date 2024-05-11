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
} from "reactstrap";
// import TableContainer from '../../Components/Common/TableContainer';
import TableContainer from "../../../Components/Common/TableContainerReactTable";

import { useMemo } from "react";
import { BsCheckCircle as ApproveIcon } from "react-icons/bs";
import { AiOutlineCloseCircle as RejectIcon } from "react-icons/ai";
import { AiOutlineExport as TransferIcon } from "react-icons/ai";
import { FaEye as ViewIcon } from "react-icons/fa";
import { FaRegClock as PendingIcon } from "react-icons/fa";
import Select from "react-select";
import verifiedstatusTick from "../../assets/complianceImages/verifiedstatusTick.png";
import secondIcon from "../../assets/complianceImages/2ndIcon.png";
import transferIcon from "../../assets/complianceImages/transferIcon.png";
import viewIcon from "../../assets/complianceImages/viewIcon.png";
import pendingActionTick from "../../assets/complianceImages/pendingActionTick.png";
import pendingCrossIcon from "../../assets/complianceImages/pendingCrossIcon.png";
import { Link } from "react-router-dom";
// import Compliance from '../pages/Compliance';

const ComplianceVerification = () => {
  const [currentState, setCurrentState] = useState("pending");
  const [branchFilterValue, setBranchFilterValue] = useState("All");

  const handleBranchFilterChange = (e) => {
    setBranchFilterValue(e.target.value);
    console.log(" this is the selected branch", e.target.value);
  };

  const approvedData = [
    {
      applicantname: "abc",
      accounttype: "Saving",
      forwardedOn: "2023-10-01",
      approvedOn: "",
      branch: "Branch A",
      risk: "High",
      status: "Approved",
      actions: ["Approve", "Reject"],
    },
    {
      applicantname: "dfjoe",
      accounttype: "current",
      forwardedOn: "2023-09-25",
      approvedOn: "2023-09-28",
      branch: "Branch B",
      risk: "Low",
      status: "Approved",
      actions: ["View Details"],
    },
    {
      applicantname: "john",
      accounttype: "current",
      forwardedOn: "2023-10-05",
      approvedOn: "",
      branch: "Branch C",
      risk: "Low",
      status: "Approved",
      actions: ["View Details"],
    },
  ];

  const approvedColumns = useMemo(() => [
    {
      Header: "Applicants name",
      accessor: "applicantname",
    },
    {
      Header: "account type",
      accessor: "accounttype",
    },
    {
      Header: "Forwarded On",
      accessor: "forwardedOn",
    },
    {
      Header: "Branch",
      accessor: "branch",
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
      Header: "Status",
      accessor: "status",
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
      Header: "Actions",
      accessor: "actions",
      Cell: () => {
        return (
          <>
            <Link to="/submit">
              <img
                src={viewIcon}
                alt="View Icon"
                style={{ width: "20px", height: "20px" }} // Adjust width and height as needed
                className="me-1"
              />
            </Link>
          </>
        );
      },
    },
  ]);

  const pendingData = [
    {
      pendingApplicantName: "Sarah",
      pendingAccountType: "Saving",
      pendingforwardedOn: "2023-10-02",
      branch: "Branch D",
      priority: "Normal",
      // pendingStatus: "Pending",
      // pendingActions: ["Approve", "Reject"]
    },
    {
      pendingApplicantName: "Michael",
      pendingAccountType: "Current",
      pendingforwardedOn: "2023-10-03",
      branch: "Branch E",
      priority: "Urgent",
      // pendingStatus: "Pending",
      // pendingActions: ["Approve", "Reject"]
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
      Header: "Forwarded On",
      accessor: "pendingforwardedOn",
    },
    {
      Header: "Branch",
      accessor: "branch",
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
      Header: "Status",
      accessor: "pendingStatus",
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
      Header: "Actions",
      accessor: "actions",
      Cell: () => {
        return (
          <>
            <img
              src={pendingActionTick}
              alt="Tick Icon"
              style={{ width: "25px", height: "20px" }} // Adjust width and height as needed
              className="me-1"
            />
            <Link to="/submit">
              <img
                src={viewIcon}
                alt="View Icon"
                style={{ width: "20px", height: "20px" }} // Adjust width and height as needed
                className="me-1"
              />
            </Link>
            <img
              src={pendingCrossIcon}
              alt="Cross Icon"
              style={{ width: "30px", height: "25px" }} // Adjust width and height as needed
              className="me-1"
            />
          </>
        );
      },
    },
  ]);

  const rejectedData = [
    {
      rejectedApplicantName: "Sarah",
      rejectedAccountType: "Individual",
      rejectedForwardedOn: "2023-10-02",
      risk: "High",
      branch: "Branch E",
      // pendingStatus: "Pending",
      // pendingActions: ["Approve", "Reject"]
    },
    {
      rejectedApplicantName: "Michael",
      rejectedAccountType: "Minor",
      rejectedForwardedOn: "2023-10-03",
      risk: "Low",
      branch: "Branch D",
      // pendingStatus: "Pending",
      // pendingActions: ["Approve", "Reject"]
    },
  ];

  const rejectedColumns = useMemo(() => [
    {
      Header: "Applicants name",
      accessor: "rejectedApplicantName",
    },
    {
      Header: "account type",
      accessor: "rejectedAccountType",
    },
    {
      Header: "Forwarded On",
      accessor: "rejectedForwardedOn",
    },
    {
      Header: "Branch",
      accessor: "branch",
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
      Header: "Status",
      accessor: "status",
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
      Header: "Actions",
      accessor: "actions",
      Cell: () => {
        return (
          <>
            <Link to="/submit">
              <img
                src={viewIcon}
                alt="View Icon"
                style={{ width: "20px", height: "20px" }} // Adjust width and height as needed
                className="me-1"
              />
            </Link>
          </>
        );
      },
    },
  ]);

  const handleStateChange = (state) => {
    setCurrentState(state);
    setBranchFilterValue("All");
  };

  const filterDataByBranch = (data, branchFilterValue) => {
    if (branchFilterValue === "All") return data;
    return data.filter((item) => item.branch === branchFilterValue);
  };

  const approvedDataToShow = filterDataByBranch(
    approvedData,
    branchFilterValue
  );

  // Usage for rejectedData
  const rejectedDataToShow = filterDataByBranch(
    rejectedData,
    branchFilterValue
  );

  const pendingDataToShow = filterDataByBranch(pendingData, branchFilterValue);

  const statusOptions = [
    { label: "Pending", value: "pending" },
    { label: "Approved", value: "approved" },
    { label: "Rejected", value: "rejected" },
    { label: "ECDD List", value: "ecddReviewList" },
  ];

  const branchOptions = [
    { label: "Branch A", value: "branchA" },
    { label: "Branch B", value: "branchB" },
    { label: "Branch C", value: "branchC" },
    { label: "Branch D", value: "branchD" },
    { label: "Branch E", value: "branchE" },
  ];

  return (
    <Card className="cardLayOut">
      <Row className="mt-4">
        <Col md={2} className="my-custom-division">
          <h6 className="text-start fw-500 ">Verification</h6>
          <CardBody className="text-center">
            <ButtonGroup vertical>
              {statusOptions.map((option) => (
                <Button
                  key={option.value}
                  color={currentState === option.value ? "soft-info" : "white"}
                  style={
                    currentState === option.value
                      ? {
                          background:"linear-gradient(100deg, rgba(28, 209, 100, 0.12) 37.99%, rgba(32, 133, 211, 0.12) 63.57%, rgba(60, 104, 216, 0.12) 75.64%, rgba(33, 143, 195, 0.12) 100.37%)",
                          borderImage: "linear-gradient(100deg, #1CD164 37.99%, #2085D3 63.57%, #3C68D8 75.64%, #218FC3 100.37%)",
                          border:" 1px solid #d6d6d6",
                          borderRadius:"0px",
                        }
                      : { background: "white" }
                  }
                  onClick={() => handleStateChange(option.value)}
                  className="my-custom-class mb-3"
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
        <Col md={10}>
          <h6>
            {currentState === "pending"
              ? "PENDING APPLICATIONS"
              : currentState === "approved"
              ? "APPROVED APPLICATIONS"
              : currentState === "rejected"
              ? "REJECTED APPLICATIONS"
              : null}
          </h6>

          <CardBody>
            {currentState === "pending" ? (
              <TableContainer
                columns={pendingColumns}
                data={pendingDataToShow}
                customPageSize={8}
                  isPagination={true}
                isGlobalFilter={true}
                isGlobalBranch={true}
                SearchPlaceholder={"overall Search"}
                styleVariant={'pending'} 
                tableClass="tablecss"
                branchOptions={branchOptions}
                handleBranchFilterChange={handleBranchFilterChange}
              />
            ) : currentState === "approved" ? (
              <TableContainer
                columns={approvedColumns}
                data={approvedDataToShow}
                customPageSize={8}
                isPagination={true}
                isGlobalFilter={true}
                isGlobalBranch={true}
                SearchPlaceholder={"overall Search"}
                styleVariant={'approved'} 
                branchOptions={branchOptions}
                handleBranchFilterChange={handleBranchFilterChange}
              />
            ) : currentState === "rejected" ? (
              <TableContainer
                columns={rejectedColumns}
                data={rejectedDataToShow}
                customPageSize={8}
                isPagination={true}
                isGlobalFilter={true}
                isGlobalBranch={true}
                SearchPlaceholder={"overall Search"}
                styleVariant={'rejected'}
                branchOptions={branchOptions}
                handleBranchFilterChange={handleBranchFilterChange}
              />
            ) : null}
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
};

export default ComplianceVerification;
