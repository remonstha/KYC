import React, { useState, useMemo } from "react";
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
import TableContainer from "../../../Components/Common/TableContainerReactTable";

export default function FamilyDetailsSubmit() {

    const demoData = [
        {
          name: "abc",
          relationship: "father",
          idNumber: "",
          isAlive: true,
          issuedPlace: "",
          issuedDate: "",
          bankAccountNumber: "",
          contactNumber: "",
        },
        {
          name: "dfjoe",
          relationship: "mother",
          idNumber: "djf",
          isAlive: true,
          issuedPlace: "kdjfo",
          issuedDate: "",
          bankAccountNumber: "sjkdpf3kj3",
          contactNumber: "",
        },
        {
          name: "john",
          relationship: "brother",
          idNumber: "",
          isAlive: false,
          issuedPlace: "ksdjf",
          issuedDate: "",
          bankAccountNumber: "",
          contactNumber: "dsfe",
        },
        {
          name: "john",
          relationship: "brother",
          idNumber: "",
          isAlive: false,
          issuedPlace: "ksdjf",
          issuedDate: "",
          bankAccountNumber: "",
          contactNumber: "dsfe",
        },
      ];

      const columns = useMemo(
        () => [
          {
            Header: "S.No",
            accessor: "taskI",
            Cell: (cellProps) => {
              const { row } = cellProps;
              const sno = row.index + 1; // Calculate the serial number based on the row index

              return <span>{sno}</span>; // Display the generated serial number
            },
          },
          {
            Header: "Name",
            accessor: "name",
            filterable: true,
          },
          {
            Header: "Relationship",
            accessor: "relationship",
            filterable: true,
          },
          {
            Header: "Citizenship/ID Number",
            accessor: "idNumber",
            filterable: true,
          },
          {
            Header: "Is Alive",
            accessor: "isAlive",
            filterable: true,
          },
          {
            Header: "Issued Place",
            accessor: "issuedPlace",
            filterable: true,
          },
          {
            Header: "Issued Date",
            accessor: "issuedDate",
            filterable: true,
          },
          {
            Header: "Bank Account Number",
            accessor: "bankAccountNumber",
            filterable: true,
          },
          {
            Header: "Contact Number",
            accessor: "contactNumber",
            filterable: true,
          },
        ], []
      );
  return (
    <div>
        {/* <Card style={{border: '1px solid rgba(206, 212, 218, 1)' }}> */}
          <CardHeader className="p-2">
            <h5 className="mt-1 ms-2 text-muted">Family Details</h5>
          </CardHeader>

          <CardBody className="p-5">
          <TableContainer
            columns={columns}
            data={demoData}
            // isGlobalFilter={true}
            isAddUserList={false}
            customPageSize={8}
            theadStyle={{
              // display: 'flex',
              padding: "10px",
              alignItems: "center",
              gap: "10px",
              alignSelf: "stretch",
              background: "rgba(29, 207, 101, 1) ",
              color: "#FFF",
              border: "1px solid #BDBAE4",
            }}

          />
          </CardBody>
        {/* </Card> */}
    </div>
  )
}
