import React, { useState, useEffect } from "react";
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
import { addMemberInfo } from "../slices/kycDetails.slice";
import { useLocation } from "react-router-dom";
import { addMemberInfoMinor } from "../slices/KycMinor.slice";
import { fetchRelationshipList } from "../../slices/CentralizedKYC/Dropdowns/thunk";


const CreateModal = ({toggle, createModal}) => {
const dispatch = useDispatch();
const location = useLocation();

// Getting Dropdown Data
const RelationshipWithApplicant = useSelector((state) => state.Dropdown?.Relationship);

console.log("Relationship List", RelationshipWithApplicant);

useEffect(() => {
  dispatch(fetchRelationshipList());

}, []);

const relationships = RelationshipWithApplicant?.map((item) => ({
  value: item.gur01uin,
  label: item.gur01title,
}))

const [selectTouched, setSelectTouched] = useState({
  accountType: false,
  branchName: false,
  currency: false,
  relationships: false,

});

const handleSelect = (fieldName, value) => {
  formik.setFieldValue(fieldName, value.value);
  setSelectTouched((prev) => ({
    ...prev,
    [fieldName]: true,
  }));
};

 const formik= useFormik({
    initialValues: {
      name: "",
      position: "",
      areaOfInvolvement: "",
      relationships: "",
      additionalInformation: "",

    },
    // validationSchema: createModalSchema,
    onSubmit: (values, { resetForm })=> {
      // addNewData(values);
      const memberInfoData={
                name: values.name,
                position: values.position,
                areaOfInvolvement: values.areaOfInvolvement,
                relationships: values.relationships,
                additionalInformation: values.additionalInformation,
              };

     if (location.pathname === '/kycindividual') dispatch(addMemberInfo(memberInfoData));
     if (location.pathname === '/kycminor') dispatch(addMemberInfoMinor(memberInfoData));

      resetForm();
      toggle();
      // console.log("values", formik.values);
    },

  });

  return (
    <>
      <Modal
        className="modal-dialog-centered"
        size="lg"
        isOpen={createModal}
        toggle={toggle}
      >
                <ModalHeader toggle={toggle }  > <span className="text-primary">Add Member Information</span></ModalHeader>

      <Form role="form" onSubmit={formik.handleSubmit}>
        <ModalBody className="modal-body pb-5 pt-5">

          <Row className=" g-3 ">
            <Col md={6}>
              <Label>Individual's Name</Label>
              <Input
                name="name"
                placeholder="Full Name"
                type="text"

                value={formik.values.name}
                onChange={formik.handleChange}
              />
             {formik.errors.name &&
                    formik.touched.name && (
                      <p className="text-danger">
                        {formik.errors.name}
                      </p>
                    )}
            </Col>
            <Col md={6}>
              <Label>Position  </Label>
              <Input
                name="position"
                type="text"
                placeholder="CEO"
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
              <Label>areaOfInvolvement  </Label>
              <Input
                name="areaOfInvolvement"
                type="text"
                placeholder="Work sector"
                value={formik.values.areaOfInvolvement}
                onChange={formik.handleChange}

              />
           {formik.errors.areaOfInvolvement &&
                    formik.touched.areaOfInvolvement && (
                      <p className="text-danger">
                        {formik.errors.areaOfInvolvement}
                      </p>
                    )}

            </Col>
            <Col lg={6  } className="relationship">
            <Label>
              Relationship with Applicant <span className="text-danger">*</span>{" "}
            </Label>
            <Select
              id="relationships"
              name="relationships"
              placeholder={"Select a relation"}
              options={relationships}
              value={relationships?.find((option) => option.value === formik.values.relationships
         )}
         onChange={(value) => {
          handleSelect("relationships", value);
        }}
        onBlur={() => {
          formik.setFieldTouched("relationships", true);
        }}
            />

            {formik.errors.relationships &&
              formik.touched.relationships && (
                <p className="text-danger">
                  {formik.errors.relationships}
                </p>
              )}
          </Col>
            {/* <Col md={6}>
              <Label>Relationship  </Label>
              <Input
                name="relationship"
                type="text"
                value={formik.values.relationship}
                onChange={formik.handleChange}
                placeholder="family"
              />
                {formik.errors.relationship &&
                    formik.touched.relationship && (
                      <p className="text-danger">
                        {formik.errors.relationship}
                      </p>
                    )}
            </Col> */}
            <Col md={12}>
              <Label>Additional Information  </Label>
              <Input
                name="additionalInformation"
                type="textarea"
                value={formik.values.additionalInformation}
                onChange={formik.handleChange}

              />
                {formik.errors.additionalInformation &&
                    formik.touched.additionalInformation && (
                      <p className="text-danger">
                        {formik.errors.additionalInformation}
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

export default CreateModal;
