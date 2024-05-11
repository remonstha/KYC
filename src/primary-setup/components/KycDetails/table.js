import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import TableContainer from '../../../Components/Common/TableContainerReactTable';
// import TableContainer from "../../Components/Common/TableContainer";
import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
} from "reactstrap";
import CreateModal from "../../modal/createModal";
import { Link, useLocation } from "react-router-dom";
import UpdateModal from "../../modal/UpdateModal";
import DeleteModal from "../../modal/DeleteModal";
import Declaration from "./Declaration";
import { useDispatch, useSelector } from "react-redux";
import { deleteMemberInfo, editMemberInfo } from "../../slices/kycDetails.slice";
import { deleteMemberInfoMinor } from "../../slices/KycMinor.slice";

const Table = ({ }) => {
 const location = useLocation()
// const initialValues = location.pathname === '/kycindividual'? useSelector((state) => state.KycDetails?.declaration?.declarationInfo) : useSelector((state) => state.KycMinor?.declaration?.declarationInfo) ;
const initialValues = useSelector((state) => state.KycDetails?.declaration?.memberInfo);
console.log("data present in the table", initialValues)

  const dispatch = useDispatch();



  const [data, setData] = useState([]);
  const [createModal, setCreateModal] = useState(false);
  const [editingData, setEditingData] = useState(null);
  const [updateModal, setUpdateModal] = useState(false);
  const[deleteModal, setDeleteModal] = useState(false);
  const[deleteRowId,setDeleteRowId] = useState(null)
  const[selectedIndex, setSelectedIndex] = useState(null);


  const toggleCreateModal = () => {
    setCreateModal(!createModal);
  };

  const toggleUpdateModal = () => {
    setUpdateModal(!updateModal);
  };
  const toggleDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };









  const handleDeleteSubmit = async (deleteRowId) => {
    try {
      // if (!deleteRowId) {
      //   return;
      // }

      console.error("ater delete state is ", data);
      // Send a DELETE request to your API endpoint for deleteRowId
      // await axios.delete(`http://localhost:5000/users/${deleteRowId}`);

      // Remove the deleted item from the data state
      if(location.pathname === '/kycminor')
      {console.log("location path", location.pathname)
      dispatch(deleteMemberInfoMinor(deleteRowId));}
      if(location.pathname === '/kycindividual')
     { console.log("location path", location.pathname)
      dispatch(deleteMemberInfo(deleteRowId));}



      // Close the delete modal and clear deleteRowId
      setDeleteRowId(null);
      setDeleteModal(false);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const columns = useMemo(
    () => [
      // {
      //   Header: "S.No",
      //   accessor: "taskI",
      //   filterable: true,
      //   Cell: (cellProps) => {
      //     const { row } = cellProps;
      //     const sno = row.index + 1; // Calculate the serial number based on the row index
      //     return <span>{sno}</span>; // Display the generated serial number
      //   },
      // },
      {
        Header: "Individual's Name",
        accessor: "name",
        filterable: true,
      },
      {
        Header: "Position",
        accessor: "position",
        filterable: true,
      },
      {
        Header: "Area of Involvement",
        accessor: "areaOfInvolvement",
        filterable: true,
      },
      {
        Header: "Relationship",
        accessor: "relationships",
        filterable: true,
      },
      {
        Header: "Additional Information",
        accessor: "additionalInformation",
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
              onClick={(e) => {
                e.preventDefault();
                const rowData = cellProps.row.original;
                // Handle Edit action here
                setSelectedIndex(cellProps.row.index);
                setUpdateModal(true);
                setEditingData(rowData);

              }}
            >
                        <i className="ri-pencil-fill"></i>
            </Link>
            <Link
            color="danger"
              className="me-2"
              onClick={() => {
                const rowData = cellProps.row.original;
                // Handle Delete action here
                setDeleteRowId(rowData.id);
                setDeleteModal(true);
              }}
            >
                        <i className="ri-delete-bin-fill"></i>
            </Link>
              </div>

          </React.Fragment>
          );
        },
      },
    ],
    [data]
  );


  const reportstyle ={
    // display: 'flex',
    padding: "10px",
    alignItems: "center",
    // gap: "10px",
    alignSelf: "stretch",
    background: "#3E69D9",
    color: "#FFF",
    border: '1px solid #BDBAE4',

   };





  return (
    <>
      <CreateModal toggle={toggleCreateModal}  createModal={createModal}/>
      <UpdateModal toggle={toggleUpdateModal} editingData={editingData} index={selectedIndex}
        updateModal={updateModal} />


  <DeleteModal toggle={toggleDeleteModal} deleteModal={deleteModal}   handleDeleteSubmit={handleDeleteSubmit}
  deleteRowId={deleteRowId} />

      <div className=" ">
          <Row className="row bg-white  justify-content-between align-items-center ">
            <Col lg={12} className="d-flex justify-content-end align-items-center ">
                <Button
                  color="success"
                  className=" btn btn-success "
                  onClick={() => setCreateModal(true)}
                >
                  <i className="ri-add-line align-bottom me-2"></i> Add Information
                </Button>

            </Col>

            <Col lg={12} className="mt-2">
              <TableContainer
                columns={columns}
                data={initialValues}
                isAddUserList={false}
                customPageSize={8}
                styleVariant="pending"
                theadStyle={ reportstyle}
                />
            </Col>
          </Row>
      </div>
    </>
  );
};

export default Table;
