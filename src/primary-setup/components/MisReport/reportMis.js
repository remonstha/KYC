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
import { BsCheckCircle as ApproveIcon } from "react-icons/bs";
import { AiOutlineCloseCircle as RejectIcon } from "react-icons/ai";
import { AiOutlineExport as TransferIcon } from "react-icons/ai";
import { FaEye as ViewIcon } from "react-icons/fa";
import { FaRegClock as PendingIcon } from "react-icons/fa";
import Select from "react-select";
import "../../../App.css";
import { DivIcon } from "leaflet";
import { Link } from "react-router-dom";
import { FaCheck, FaTimes } from "react-icons/fa";
import verifiedstatusTick from "../../assets/complianceImages/verifiedstatusTick.png";
import secondIcon from "../../assets/complianceImages/2ndIcon.png";
import FolderIcon from "../../assets/complianceImages/folder.png";

import transferIcon from "../../assets/complianceImages/transferIcon.png";
import viewIcon from "../../assets/complianceImages/viewIcon.png";
import pendingActionTick from "../../assets/complianceImages/pendingActionTick.png";
import pendingCrossIcon from "../../assets/complianceImages/pendingCrossIcon.png";

const ReportMis = () => {
  const [currentState, setCurrentState] = useState("pending");
  const Report = [
    {
      applicantname: "abc",
      productType: "household",
      accounttype: "father",
      appliedOn: "2023-10-01",
      approvedOn: "2023-05-28",
      branch: "Branch A",
      risk: "Low",
      priority: "Urgent",
      corporateType: "Partnership",
      status: "Approved",
      actions: ["Approve", "Reject"],
      approvedBy: "Ram",
      kycType: "individual",
      cifNo: "1232456512",
      accountNo: "4578956515",
      ecddBy: "Hari",
      amlBy: "Shyam",
      verifiedDate: "2023-05-29",
      checkedOn: "2023-05-29",
      checkedBy: "Remon",
    },
    {
      applicantname: "dfjoe",
      accounttype: "mother",
      productType: "household",
      appliedOn: "2023-09-25",
      approvedOn: "2023-09-28",
      branch: "Branch B",
      risk: "Normal",
      priority: "Urgent",
      corporateType: "corporate",
      amlBy: "Sita",

      status: "Approved",
      actions: ["View Details"],
      approvedBy: "Ram",
      kycType: "individual",
      cifNo: "1232456512",
      accountNo: "4578956515",
      ecddBy: "Arun",
      verifiedDate: "2023-05-29",
      checkedOn: "2023-05-29",
      checkedBy: "Simon",
    },
    {
      applicantname: "john",
      accounttype: "brother",
      appliedOn: "2023-10-05",
      approvedOn: "2023-09-28",
      branch: "Branch C",
      risk: "High",
      priority: "Normal",
      productType: "household",
      corporateType: "institution",
      amlBy: "Hariram",

      status: "Approved",
      actions: ["View Details"],
      approvedBy: "Shyam",
      kycType: "Corporate",
      cifNo: "1234566512",
      accountNo: "1235495651",
      ecddBy: "Narhari",
      verifiedDate: "2023-05-29",
      checkedOn: "2023-05-29",
      checkedBy: "Gimon",
    },
  ];

  // Indicidual report Table Memo
  const individualReportColumns = useMemo(() => [
    {
      Header: "S.No",
      accessor: "taskI",
      filterable: true,
      Cell: (cellProps) => {
        const { row } = cellProps;
        const sno = row.index + 1; // Calculate the serial number based on the row index
        return <span>{sno}</span>; // Display the generated serial number
      },
    },
    {
      Header: "Branch",
      accessor: "branch",
    },
    {
      Header: "Applied On",
      accessor: "appliedOn",
    },
    {
      Header: "Name",
      accessor: "applicantname",
    },
    {
      Header: "Product Type",
      accessor: "productType",
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
      Header: "Priority Status",
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
  ]);
  // corporate report Table Memo
  const CorporateReportColumns = useMemo(() => [
    {
      Header: "S.No",
      accessor: "taskI",
      filterable: true,
      Cell: (cellProps) => {
        const { row } = cellProps;
        const sno = row.index + 1; // Calculate the serial number based on the row index
        return <span>{sno}</span>; // Display the generated serial number
      },
    },
    {
      Header: "Branch",
      accessor: "branch",
    },
    {
      Header: "Applied On",
      accessor: "appliedOn",
    },
    {
      Header: "Name",
      accessor: "applicantname",
    },
    {
      Header: "Product Type",
      accessor: "productType",
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
      Header: "Corporate Type",
      accessor: "corporateType",
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
      accessor: "IndididualChecklist",
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
  ]);

  // Accoubt open List report Table Memo
  const AccoubtlistColumns = useMemo(() => [
    {
      Header: "S.No",
      accessor: "taskI",
      filterable: true,
      Cell: (cellProps) => {
        const { row } = cellProps;
        const sno = row.index + 1; // Calculate the serial number based on the row index
        return <span>{sno}</span>; // Display the generated serial number
      },
    },
    {
      Header: "Branch",
      accessor: "branch",
    },

    {
      Header: "Name",
      accessor: "applicantname",
    },
    {
      Header: "KYC Type",
      accessor: "kycType",
    },
    {
      Header: "Applied On",
      accessor: "appliedOn",
    },
    {
      Header: "Approved On",
      accessor: "approvedOn",
    },
    {
      Header: "Approved By",
      accessor: "approvedBy",
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
      Header: "CIF No",
      accessor: "cifNo",
    },
    {
      Header: "Account No",
      accessor: "accountNo",
    },
  ]);

  // ECDDD report Table Memo
  const ECDDColumns = useMemo(() => [
    {
      Header: "S.No",
      accessor: "taskI",
      filterable: true,
      Cell: (cellProps) => {
        const { row } = cellProps;
        const sno = row.index + 1; // Calculate the serial number based on the row index
        return <span>{sno}</span>; // Display the generated serial number
      },
    },
    {
      Header: "Branch",
      accessor: "branch",
    },
    {
      Header: "Applied On",
      accessor: "appliedOn",
    },
    {
      Header: "Name",
      accessor: "applicantname",
    },
    {
      Header: "Product Type",
      accessor: "productType",
    },
    {
      Header: "KYC Type",
      accessor: "kycType",
    },
    {
      Header: "ECDD By",
      accessor: "ecddBy",
    },
    {
      Header: " Verified Date",
      accessor: "verifiedDate",
    },

    {
      Header: "Corporate Type",
      accessor: "corporateType",
    },
    //  {
    //   Header: "Risk",
    //   accessor: "risk",
    //      Cell: ({ value }) => {
    //       const riskStyles = {
    //         padding: '5px',
    //         borderRadius: '5px',
    //         color: value === 'High' ? '#FF0000' : '#67B173',
    //         backgroundColor: value === 'High' ? '#FF00000A' : '#1DCF650A',
    //       };

    //       return (
    //         <span style={riskStyles}>
    //           {value}
    //         </span>
    //       );
    //     },
    // },
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
      accessor: "IndididualChecklist",
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
  ]);

  // AML report Table Memo
  const AMLColumns = useMemo(() => [
    {
      Header: "S.No",
      accessor: "taskI",
      filterable: true,
      Cell: (cellProps) => {
        const { row } = cellProps;
        const sno = row.index + 1; // Calculate the serial number based on the row index
        return <span>{sno}</span>; // Display the generated serial number
      },
    },
    {
      Header: "Branch",
      accessor: "branch",
    },
    {
      Header: "Applied On",
      accessor: "appliedOn",
    },
    {
      Header: "Name",
      accessor: "applicantname",
    },
    {
      Header: "Product Type",
      accessor: "productType",
    },
    {
      Header: "KYC Type",
      accessor: "kycType",
    },
    {
      Header: "AML By",
      accessor: "amlBy",
    },
    {
      Header: "Verified Date",
      accessor: "verifiedDate",
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
      accessor: "IndididualChecklist",
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
  ]);

  // CIB report Table Memo
  const CIBColumns = useMemo(() => [
    {
      Header: "S.No",
      accessor: "taskI",
      filterable: true,
      Cell: (cellProps) => {
        const { row } = cellProps;
        const sno = row.index + 1; // Calculate the serial number based on the row index
        return <span>{sno}</span>; // Display the generated serial number
      },
    },
    {
      Header: "Branch",
      accessor: "branch",
    },
    {
      Header: "Applied On",
      accessor: "appliedOn",
    },
    {
      Header: "Name",
      accessor: "applicantname",
    },
    {
      Header: "Product Type",
      accessor: "productType",
    },
    {
      Header: "KYC Type",
      accessor: "kycType",
    },
    {
      Header: "AML By",
      accessor: "amlBy",
    },
    {
      Header: "Verified Date",
      accessor: "verifiedDate",
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
      accessor: "IndididualChecklist",
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
  ]);

  // Neg list report Table Memo
  const NegListColumns = useMemo(() => [
    {
      Header: "S.No",
      accessor: "taskI",
      filterable: true,
      Cell: (cellProps) => {
        const { row } = cellProps;
        const sno = row.index + 1; // Calculate the serial number based on the row index
        return <span>{sno}</span>; // Display the generated serial number
      },
    },
    {
      Header: "Branch",
      accessor: "branch",
    },
    {
      Header: "Applied On",
      accessor: "appliedOn",
    },
    {
      Header: "Name",
      accessor: "applicantname",
    },
    {
      Header: "Product Type",
      accessor: "productType",
    },
    {
      Header: "KYC Type",
      accessor: "kycType",
    },
    {
      Header: "Checked By",
      accessor: "checkedBy",
    },
    {
      Header: " Checked On",
      accessor: "checkedOn",
    },

    {
      Header: "CheckList",
      accessor: "IndididualChecklist",
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
      Header: "Document",
      accessor: "folder",
      Cell: () => {
        return (
          <>
            <img
              src={FolderIcon}
              alt="Folder"
              style={{ width: "20px", height: "20px" }}
              className="me-2"
            />
          </>
        );
      },
    },
  ]);

  // Risk report Table Memo
  const RiskReportColumns = useMemo(() => [
    {
      Header: "S.No",
      accessor: "taskI",
      filterable: true,
      Cell: (cellProps) => {
        const { row } = cellProps;
        const sno = row.index + 1; // Calculate the serial number based on the row index
        return <span>{sno}</span>; // Display the generated serial number
      },
    },
    {
      Header: "Branch",
      accessor: "branch",
    },
    {
      Header: "Applied On",
      accessor: "appliedOn",
    },
    {
      Header: "Name",
      accessor: "applicantname",
    },
    {
      Header: "Product Type",
      accessor: "productType",
    },
    {
      Header: "KYC Type",
      accessor: "kycType",
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
  ]);

  // Priority report Table Memo
  const PriorityReportColumns = useMemo(() => [
    {
      Header: "S.No",
      accessor: "taskI",
      filterable: true,
      Cell: (cellProps) => {
        const { row } = cellProps;
        const sno = row.index + 1; // Calculate the serial number based on the row index
        return <span>{sno}</span>; // Display the generated serial number
      },
    },
    {
      Header: "Branch",
      accessor: "branch",
    },
    {
      Header: "Applied On",
      accessor: "appliedOn",
    },
    {
      Header: "Name",
      accessor: "applicantname",
    },
    {
      Header: "Product Type",
      accessor: "productType",
    },
    {
      Header: "KYC Type",
      accessor: "kycType",
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
  ]);

  const handleStateChange = (state) => {
    setCurrentState(state);
  };

  const StatusOptions = [
    { label: "Individual Report", value: "IndividualReport" },
    { label: "Corporate Report", value: "CorporateReport" },
    { label: "Account open List", value: "AccountList" },
    { label: "ECDD Report", value: "ECDDReport" },
    { label: "AML Report", value: "AMLReport" },
    { label: "CIB Report", value: "CIBReport" },
    { label: "Neg List Report", value: "NegReport" },
    { label: "Risk Report", value: "RiskReport" },
    { label: "Priority Report", value: "PriorityReport" },
  ];
  const branchOptions = [
    { label: "Branch A", value: "branchA" },
    { label: "Branch B", value: "branchB" },
    { label: "Branch C", value: "branchC" },
    { label: "Branch D", value: "branchD" },
    { label: "Branch E", value: "branchE" },
  ];

  const statusOptions = [
    { label: "Approved", value: "approved" },
    { label: "Pending", value: "pending" },
    { label: "Reject", value: "Reject" },
  ];
  const kycOptions = [
    { label: "Individual", value: "individual" },
    { label: "Corporate", value: "corporate" },
    { label: "Minor", value: "minor" },
  ];
  const riskOptions = [
    { label: "Normal", value: "normal" },
    { label: "Low", value: "low" },
    { label: "High", value: "high" },
  ];
  const priorityOptions = [
    { label: "Urgent", value: "Urgent" },
    { label: "Normal", value: "normal" },
  ];
  const approvedByOptions = [
    { label: "Jhon", value: "Jhon" },
    { label: "Ram", value: "ram" },
    { label: "Hari", value: "Hari" },
  ];
  const verifiedByOptions = [
    { label: "Jhon", value: "Jhon" },
    { label: "Ram", value: "ram" },
    { label: "Hari", value: "Hari" },
  ];
  const productTypeOptions = [
    { label: "Individual", value: "individual" },
    { label: "Corporate", value: "corporate" },
    { label: "Minor", value: "minor" },
  ];

  return (
    <Card>
      <Row className="mt-4">
        <Col md={2} className="my-custom-division">
          <h6 className="text-start fw-b text-muted">Master Menu</h6>
          <CardBody className="text-center">
            <ButtonGroup vertical>
              {StatusOptions.map((option) => (
                <Button
                  key={option.value}
                  color={currentState === option.value ? "soft-info" : "white"}
                  style={
                    currentState === option.value
                      ? {
                          background:
                            "linear-gradient(100deg, rgba(28, 209, 100, 0.12) 37.99%, rgba(32, 133, 211, 0.12) 63.57%, rgba(60, 104, 216, 0.12) 75.64%, rgba(33, 143, 195, 0.12) 100.37%)",
                          borderImage:
                            "linear-gradient(100deg, #1CD164 37.99%, #2085D3 63.57%, #3C68D8 75.64%, #218FC3 100.37%)",
                          border: " 1px solid #d6d6d6",
                          borderRadius: "0px",
                        }
                      : { background: "white" }
                  }
                  onClick={() => handleStateChange(option.value)}
                  className="my-custom-class p-2 mb-2"
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
                  </span>{" "}
                </Button>
              ))}
            </ButtonGroup>
          </CardBody>
        </Col>
        <Col md={10} className="mt-2">
          {/* <h6>
            {currentState === "IndividualReport"
              ? "Individual Report "
              : currentState === "CorporateReport"
                ? "Corporate Report"
                : "REJECTED APPLICANTS"
            }
          </h6> */}

          <CardBody>
            {currentState === "IndividualReport" ? (
              <TableContainer
                columns={individualReportColumns}
                data={Report}
                isAddUserList={false}
                customPageSize={8}
                isPagination={true}
                isGlobalBranch={true}
                branchOptions={branchOptions}
                statusOptions={statusOptions}
                isGlobalStatus={true}
                isGlobalFrom={true}
                isGlobalTo={true}
                styleVariant={"pending"}
              />
            ) : currentState === "CorporateReport" ? (
              <TableContainer
                columns={CorporateReportColumns}
                data={Report}
                isAddUserList={false}
                customPageSize={8}
                isGlobalBranch={true}
                branchOptions={branchOptions}
                statusOptions={statusOptions}
                isGlobalStatus={true}
                isGlobalFrom={true}
                isGlobalTo={true}
                isPagination={true}
                styleVariant={"pending"}
              />
            ) : currentState === "AccountList" ? (
              <TableContainer
                columns={AccoubtlistColumns}
                data={Report}
                isAddUserList={false}
                customPageSize={8}
                isPagination={true}
                isGlobalBranch={true}
                branchOptions={branchOptions}
                isGlobalKyc={true}
                isGlobalRisk={true}
                isGlobalFrom={true}
                isGlobalTo={true}
                isGlobalApprovedBy={true}
                approvedByOptions={approvedByOptions}
                kycOptions={kycOptions}
                styleVariant={"pending"}
                riskOptions={riskOptions}
              />
            ) : currentState === "ECDDReport" ? (
              <TableContainer
                columns={ECDDColumns}
                data={Report}
                isAddUserList={false}
                customPageSize={8}
                isPagination={true}
                isGlobalBranch={true}
                branchOptions={branchOptions}
                isGlobalKyc={true}
                isGlobalRisk={true}
                isGlobalFrom={true}
                isGlobalTo={true}
                isGlobalVerifiedBy={true}
                verifiedByOptions={verifiedByOptions}
                kycOptions={kycOptions}
                riskOptions={riskOptions}
                styleVariant={"pending"}
              />
            ) : currentState === "AMLReport" ? (
              <TableContainer
                columns={AMLColumns}
                data={Report}
                isAddUserList={false}
                customPageSize={8}
                isPagination={true}
                isGlobalBranch={true}
                branchOptions={branchOptions}
                isGlobalKyc={true}
                isGlobalRisk={true}
                isGlobalFrom={true}
                isGlobalTo={true}
                isGlobalVerifiedBy={true}
                verifiedByOptions={verifiedByOptions}
                kycOptions={kycOptions}
                riskOptions={riskOptions}
                styleVariant={"pending"}
              />
            ) : currentState === "CIBReport" ? (
              <TableContainer
                columns={CIBColumns}
                data={Report}
                isAddUserList={false}
                customPageSize={8}
                isPagination={true}
                isGlobalBranch={true}
                isGlobalKyc={true}
                isGlobalRisk={true}
                isGlobalFrom={true}
                isGlobalTo={true}
                isGlobalVerifiedBy={true}
                verifiedByOptions={verifiedByOptions}
                kycOptions={kycOptions}
                riskOptions={riskOptions}
                styleVariant={"pending"}
              />
            ) : currentState === "NegReport" ? (
              <TableContainer
                columns={NegListColumns}
                data={Report}
                isAddUserList={false}
                customPageSize={8}
                isPagination={true}
                isGlobalBranch={true}
                branchOptions={branchOptions}
                productTypeOptions={productTypeOptions}
                isGlobalProductType={true}
                isGlobalFrom={true}
                isGlobalTo={true}
                styleVariant={"pending"}
              />
            ) : currentState === "RiskReport" ? (
              <TableContainer
                columns={RiskReportColumns}
                data={Report}
                isAddUserList={false}
                customPageSize={8}
                isPagination={true}
                isGlobalBranch={true}
                branchOptions={branchOptions}
                isGlobalProductType={true}
                isGlobalRisk={true}
                isGlobalFrom={true}
                isGlobalTo={true}
                styleVariant={"pending"}
                productTypeOptions={productTypeOptions}
                riskOptions={riskOptions}
              />
            ) : currentState === "PriorityReport" ? (
              <TableContainer
                columns={PriorityReportColumns}
                data={Report}
                isAddUserList={false}
                customPageSize={8}
                isPagination={true}
                isGlobalBranch={true}
                branchOptions={branchOptions}
                isGlobalProductType={true}
                isGlobalPriority={true}
                isGlobalFrom={true}
                isGlobalTo={true}
                styleVariant={"pending"}
                productTypeOptions={productTypeOptions}
                priorityOptions={priorityOptions}
              />
            ) : (
              setCurrentState("IndividualReport")
            )}
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
};

export default ReportMis;
