import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {  editMemberInfo } from "../slices/ecddForm.slice";
import { useLocation } from "react-router-dom";
import { fetchRelationshipList } from "../../slices/CentralizedKYC/Dropdowns/thunk";


const EcddEditModal = ({toggle, isOpen, index}) => {
const dispatch = useDispatch();
const location = useLocation();
const RelationshipWithApplicant = useSelector((state) => state.Dropdown?.Relationship);
 
const reduxState = useSelector((state) => state.EcddForm.ecddForm.memberInfo);
const previousData = reduxState[index] ;

const initialValues ={
    familyDetails: previousData?.familyDetails,
    memberName: previousData?.memberName,
    position: previousData?.position,
    relationship: previousData?.relationship,
    screeningId: previousData?.screeningId,

}


React.useEffect(() => {
    // console.log('useeffect running')
    formik.setValues(initialValues);
    // console.log('this is formik values', formik.values)
}, [previousData]);

useEffect(() => {
  dispatch(fetchRelationshipList());

}, []);


const [selectTouched, setSelectTouched] = useState({
  accountType: false,
  branchName: false,
  currency: false,
  relationship: false,
});

const handleSelect = (fieldName, value) => {
  formik.setFieldValue(fieldName, value.value);
  setSelectTouched((prev) => ({
    ...prev,
    [fieldName]: true,
  }));
};

 const formik= useFormik({
    initialValues,
    // validationSchema: createModalSchema,
    onSubmit: (values, { resetForm })=> {

      // addNewData(values);
      const editedMemberData={
                familyDetails: values.familyDetails,
                memberName: values.memberName,
                position: values.position,
                relationship: values.relationship,
                screeningId: values.screeningId,
              };
              const payload = {
                index,
                editedMemberData
            }

    dispatch(editMemberInfo(payload));
      resetForm();
      toggle();
      console.log("values", values);
    },

  });

  const relationships = RelationshipWithApplicant?.map((item) => ({
    value: item.gur01title,
    label: item.gur01title,
  }))

  return (
    <>
      <Modal
        className="modal-dialog-centered"
        size="lg"
        isOpen={isOpen}
        toggle={toggle}
      >
                <ModalHeader toggle={toggle }  > <span className="text-primary">Add Member Information</span></ModalHeader>

      <Form role="form" onSubmit={formik.handleSubmit}>
        <ModalBody className="modal-body pb-5 pt-5">

          <Row className=" g-3 ">
            <Col md={6}>
              <Label>Family member Details</Label>
              <Input
                name="familyDetails"
                placeholder="Full Name"
                type="text"

                value={formik.values.familyDetails}
                onChange={formik.handleChange}
              />
             {formik.errors.familyDetails &&
                    formik.touched.familyDetails && (
                      <p className="text-danger">
                        {formik.errors.familyDetails}
                      </p>
                    )}
            </Col>
            <Col md={6}>
              <Label>Name of Family Member  </Label>
              <Input
                name="memberName"
                type="text"
                placeholder=""
                value={formik.values.memberName}
                onChange={formik.handleChange}

              />
               {formik.errors.memberName &&
                    formik.touched.memberName && (
                      <p className="text-danger">
                        {formik.errors.memberName}
                      </p>
                    )}
            </Col>
            <Col md={6}>
              <Label>Position  </Label>
              <Input
                name="position"
                type="text"
                placeholder="Work sector"
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
            <Col lg={6  } className="relationship">
            <Label>
              Relationship <span className="text-danger">*</span>{" "}
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
      
            <Col md={6}>
              <Label>  Screening Id  </Label>
              <Input
                name="screeningId"
                type="text"
                value={formik.values.screeningId}
                onChange={formik.handleChange}

              />
                {formik.errors.screeningId &&
                    formik.touched.screeningId && (
                      <p className="text-danger">
                        {formik.errors.screeningId}
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

export default EcddEditModal;
