import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
  CardFooter,
  CardImg,
  CardTitle,
  CardText,
} from "reactstrap";
import { useFormik } from "formik";
import TableContainer from "../../../Components/Common/TableContainerReactTable";
import FamilyDetailsAddModal from "../../modal/FamilyDetailsAddModal";
import FamilyDetailsUpdateModal from "../../modal/FamilyDetailsUpdateModal";
import {
  MdEmail,
  MdPhone,
  MdSchool,
  MdSingleBed,
  MdLocationOn,
  MdPlace,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setKycSelectionIndividual } from "../../slices/selection.slice";
import dedDupe from "../../assets/icons/dedDupe.png";
import verifyHotListIcon from "../../assets/icons/verifyHotListIcon.png";
import verifyNegListTick from "../../assets/icons/verifiedNegListTick.png";
import { deleteFamilyMember } from "../../slices/kycDetails.slice";
import UserDetailsCard from "./UserDetailsCard";
import { saveFamilyInfo } from "../../../slices/CentralizedKYC/IndividualKYC/thunk";
import { toInteger } from "lodash";

export default function FamilyDetails() {
  const initialValues = useSelector((state) => state.KycDetails.familyDetails?.family);
  const videoKYC = useSelector((state) => state.IndKyc?.videoKYC);
  const familyDetails = useSelector((state) => state.IndKyc?.familyDetails);

  // const initialValue = useSelector((state) => state.KycDetails);
  // console.log('FamilyDetails',initialValue);

  const dispatch = useDispatch();
  const [createModal, setCreateModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null)
  // const [tableData, setTableData] = useState(initialValues);

  const addMemberToTable = (newMemberData) => {
    // Update the table data state by adding the new member
    setTableData([...tableData, newMemberData]);
  };

  const toggleModal = () => {
    setCreateModal(!createModal);
  };

  const toggleUpdateModal = () => {
    setUpdateModal(!updateModal);
  }

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
        Cell: ({ value }) => {
          return value ? "True" : "False";
        },
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
                    onClick={() => dispatch(deleteFamilyMember(cellProps.row.index))}
                  ></i>
                </Link>
              </div>

            </React.Fragment>
          );
        },
      },
    ],
    []
  );
  const handleNext = () => {

    dispatch(setKycSelectionIndividual("Location"));


    const valueToSave = {
      family: initialValues.map((item) => ({
        name: item?.name,
        relationships: item?.relationship,
        citizenshipIDNo: item?.idNumber,
        issuedPlace: toInteger(item?.issuedPlace),
        issuedDate: item?.issuedDate,
        bankAccountNumber: item?.bankAccountNumber,
        contactNumber: item?.contactNumber,
      })),
      videoKycId: videoKYC?.id,
      id: familyDetails?.id,
    }

    console.log('valueToSave', valueToSave)
    dispatch(saveFamilyInfo(valueToSave));


  }
  return (
    <React.Fragment>
      <FamilyDetailsAddModal
        isOpen={createModal}
        toggle={toggleModal}
        addMemberToTable={addMemberToTable}
      />
      <FamilyDetailsUpdateModal
        isOpen={updateModal}
        toggle={toggleUpdateModal}
        index={editingIndex}
      />

      {/*---------------------------------- Application Snippet -------------------–––---------*/}
   {/* <UserDetailsCard/> */}

      <Card className="p-0">
        <CardHeader className="px-4">
          <div className="">
            <h5 className="m-0">Family Details</h5>
          </div>
        </CardHeader>

        <CardBody className="px-4">
          <div className="d-flex justify-content-end mt-2 mb-2">
            <Button color="primary" onClick={toggleModal}>
              Add Member Info
            </Button>
          </div>
          <div className="mb-2">
            <TableContainer
              columns={columns}
              data={initialValues}
              // isGlobalFilter={true}
              isAddUserList={false}
              customPageSize={8}
              styleVariant={"approved"}
              thClass={"fs-14 fw-semibold"}
            // styleVariant='module'
            />
          </div>
        </CardBody>
        <CardFooter>
          <div className="d-flex justify-content-between ">
            <Button
              color="light"
              onClick={() => {
                dispatch(setKycSelectionIndividual("OccupationDetails"));

              }
              }
            >
              Back
            </Button>
            <Button
              color="primary"
              onClick={handleNext}
            >
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </React.Fragment>
  );
}
