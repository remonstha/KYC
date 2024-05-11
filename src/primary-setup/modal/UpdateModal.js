import React, { useState } from "react";
import {
  Card,
  Input,
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
  Label,
  Button,
  Modal,
  Form,
  ModalHeader,
  ModalBody,
  FormFeedback,
  FormGroup,
  CardTitle,
} from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import { useFormik } from "formik";
import { createModalSchema } from "../validationSchema";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editMemberInfo } from "../slices/kycDetails.slice";
import { useLocation } from "react-router-dom";
import { editMemberInfoMinor } from "../slices/KycMinor.slice";
import { fetchRelationshipList } from "../../slices/CentralizedKYC/Dropdowns/thunk";

const UpdateModal = ({ toggle, updateModal, editingData, index }) => {
  const dispatch = useDispatch();

  const location = useLocation();

// Getting Dropdown Data
const RelationshipWithApplicant = useSelector((state) => state.Dropdown?.Relationship);

console.log("Relationship List", RelationshipWithApplicant);

useEffect(() => {
  dispatch(fetchRelationshipList());

}, []);


  const formik = useFormik({
    initialValues: {
      id: editingData?.id || "", // Include the id here

      individualName: editingData?.individualName || "",
      position: editingData?.position || "",
      involvement: editingData?.involvement || "",
      relationship: editingData?.relationship || "",
      info: editingData?.info || "",

    },
    validationSchema: createModalSchema,
    onSubmit: (values, { resetForm }) => {
      if (location.pathname === '/kycindividual')
        dispatch(editMemberInfo({ index, updatedMemberInfo: values }));
      if (location.pathname === '/kycminor')
        dispatch(editMemberInfoMinor({ index, updatedMemberInfo: values }));
      // updateDataModal(rowData, values); 
      // resetForm();
      toggle();
      console.log("values", formik.values);
    },

  });

  // Use useEffect to update formik values when editingData changes
  useEffect(() => {

    formik.setValues({
      id: editingData?.id || "", // Include the id here

      individualName: editingData?.individualName || "",
      position: editingData?.position || "",
      involvement: editingData?.involvement || "",
      relationship: editingData?.relationship || "",
      info: editingData?.info || "",

    });
  }, [editingData]);

  const relationships = RelationshipWithApplicant?.map((item) => ({
    value: item.gur01title,
    label: item.gur01title,
  }))
  
  const [selectTouched, setSelectTouched] = useState({
    accountType: false,
    branchName: false,
    currency: false,
  });

  const handleSelect = (fieldName, value) => {
    formik.setFieldValue(fieldName, value.value);
    setSelectTouched((prev) => ({
      ...prev,
      [fieldName]: true,
    }));
  };

  return (
    <>
      <Modal
        className="modal-dialog-centered"
        size="md"
        isOpen={updateModal}
        toggle={toggle}
      >
        <ModalHeader toggle={toggle} > Update Record</ModalHeader>

        <Form role="form" onSubmit={formik.handleSubmit}>
          <ModalBody className="modal-body">

            <Row className=" g-3 ">
              <Col md={6}>
                <Label>Individual's Name</Label>
                <Input
                  name="individualName"
                  type="text"

                  value={formik.values.individualName}
                  onChange={formik.handleChange}
                />
                {formik.errors.individualName &&
                  formik.touched.individualName && (
                    <p className="text-danger">
                      {formik.errors.individualName}
                    </p>
                  )}
              </Col>
              <Col md={6}>
                <Label>Position  </Label>
                <Input
                  name="position"
                  type="text"
                  value={formik.values.position}
                  onChange={formik.handleChange}

                />
                {formik.errors.position &&
                  formik.touched.position && (
                    <p className="text-danger">
                      {formik.errors.position}
                    </p>
                  )}
              </Col>
              <Col md={6}>
                <Label>Involvement  </Label>
                <Input
                  name="involvement"
                  type="text"
                  value={formik.values.involvement}
                  onChange={formik.handleChange}

                />
                {formik.errors.involvement &&
                  formik.touched.involvement && (
                    <p className="text-danger">
                      {formik.errors.involvement}
                    </p>
                  )}

              </Col>
              <Col lg={6} className="relationship">
                <Label>
                  Relationship with Applicant <span className="text-danger">*</span>{" "}
                </Label>
                <Select
                  id="relationship"
                  name="relationship"
                  placeholder={"Select a relation"}
                  options={relationships}
                  value={relationships?.find((option) => option.value === formik.values.relationship
                  )}
                  onChange={(value) => {
                    handleSelect("relationship", value);
                  }}
                  onBlur={() => {
                    formik.setFieldTouched("relationship", true);
                  }}
                />

                {formik.errors.relationship &&
                  formik.touched.relationship && (
                    <p className="text-danger">
                      {formik.errors.relationship}
                    </p>
                  )}
              </Col>
              <Col md={12}>
                <Label>Additional Information  </Label>
                <Input
                  name="info"
                  type="textarea"
                  value={formik.values.info}
                  onChange={formik.handleChange}

                />
                {formik.errors.info &&
                  formik.touched.info && (
                    <p className="text-danger">
                      {formik.errors.info}
                    </p>
                  )}
              </Col>



            </Row>


          </ModalBody>
          <div className="modal-footer">
            <div className="hstack gap-2 justify-content-end">
              <Button
                type="button"
                className="btn-light"
                onClick={toggle}

              >
                Close
              </Button>
              <button
                type="submit"
                className="btn btn-success"
                id="add-btn"

              >
                Save Changes
              </button>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default UpdateModal;
