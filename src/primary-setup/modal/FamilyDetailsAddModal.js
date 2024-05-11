import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  Form,
  Row,
  Col,
  FormFeedback,
} from "reactstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addFamilyDetails } from "../slices/kycDetails.slice";
import { useState } from "react";
import Select from "react-select";
import { addFamilyDetailMinor } from "../slices/KycMinor.slice";
import { useLocation } from "react-router";
import { useEffect } from "react";
import { fetchIssuedPlaceList, fetchRelationshipList } from "../../slices/CentralizedKYC/Dropdowns/thunk";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  relationship: Yup.string().required("Relationship is required"),
  idNumber: Yup.string().required("ID Number is required"),
  issuedPlace: Yup.string().required("Issued Place is required"),
  issuedDate: Yup.date().required("Issued Date is required"),
  bankAccountNumber: Yup.string().required("Bank Account Number is required"),
  contactNumber: Yup.string().required("Contact Number is required"),
});


// const currSelection = useSelector ( (state) => (state.Selection.accountTypeSelection));
// console.log("selecton" , currSelection);

const FamilyDetailsAddModal = ({ isOpen, toggle, addMemberToTable }) => {
  const location = useLocation();
  const initialValues = {
    name: "",
    relationship: "",
    idNumber: "",
    aliveStatus: 'alive',
    issuedPlace: "",
    issuedDate: "",
    bankAccountNumber: "",
    contactNumber: "",
  };
  const currSelection = useSelector ( (state) => (state.Selection));

  // Getting Dropdown Data
  const Relationship = useSelector((state) => state.Dropdown?.Relationship);
  const issuedPlaces = useSelector((state) => state.Dropdown.IssuedPlace);

  useEffect(() => {

    dispatch(fetchRelationshipList());
    dispatch(fetchIssuedPlaceList());


  }, []);

//Dropdown Options
  const relationships = Relationship?.map((item) => ({
    value: item.gur01uin,
    label: item.gur01title,
  }));

  const places = issuedPlaces?.map((item) => ({
    value: item.issued01uin,
    label: item.issued01title,
  }));

  const [selectTouched, setSelectTouched] = useState({
    relationship: false,
    issuedPlace: false,
  });

  const handleSelect = (fieldName, value) => {
    formik.setFieldValue(fieldName, value.value);
    setSelectTouched((prev) => ({
      ...prev,
      [fieldName]: true,
    }));
  };

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const newMemberData = {
        name: values.name,
        relationship: values.relationship,
        idNumber: values.idNumber,
        isAlive: values.isAlive,
        issuedPlace: values.issuedPlace,
        issuedDate: values.issuedDate,
        bankAccountNumber: values.bankAccountNumber,
        contactNumber: values.contactNumber,
      };

      const newMinorData = {
        name: values.name,
        relationship: values.relationship,
        idNumber: values.idNumber,
        isAlive: values.isAlive,
        issuedPlace: values.issuedPlace,
        issuedDate: values.issuedDate,
        bankAccountNumber: values.bankAccountNumber,
        contactNumber: values.contactNumber,
      };

     if(location.pathname === '/kycindividual')
      dispatch(addFamilyDetails(newMemberData));

      if(location.pathname === '/kycminor')
      dispatch(addFamilyDetailMinor(newMinorData));


      toggle();
      formik.resetForm();
    },
  });

  //   React.useEffect(() => {
  //     formik.setValues(initialValues);
  // }, [initialValues]);

  return (
    <Modal isOpen={isOpen} size="lg" toggle={toggle}>
      <ModalHeader toggle={toggle} className="px-4" ><span className="text-secondary">Add Member Information</span></ModalHeader>

      <Form onSubmit={formik.handleSubmit}>
        <ModalBody className="mt-4 mb-4 px-4">
          <Row className="gx-4">
          <Col lg={6} className="isalive">
            <p>
              Person Status <span className="text-danger">*</span>{" "}
            </p>

            <Input
              id="alive"
              type="radio"
              name="aliveStatus"
              value="alive"
              checked={formik.values.aliveStatus === "alive"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Label for="alive" className="ms-3">
              Alive
            </Label>

            <Input
              id="deceased"
              type="radio"
              className="ms-3"
              name="aliveStatus"
              value="deceased"
              checked={formik.values.aliveStatus === "deceased"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Label for="deceased" className="ms-3">
              Deceased
            </Label>

            {formik.errors.aliveStatus && formik.touched.aliveStatus && (
              <p className="text-danger">{formik.errors.aliveStatus}</p>
            )}
          </Col>

            <Col md={6} className="name">
              {" "}
              <FormGroup>
                <Label htmlFor="name">Name:</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  invalid={formik.touched.name && formik.errors.name}
                />
                <FormFeedback>
                  {formik.touched.name && formik.errors.name}
                </FormFeedback>
              </FormGroup>
            </Col>
            <Col md={6} className="relationship">
              <FormGroup>
                <Label htmlFor="relationship">Relationship:</Label>

                <Select
                  id="relationship"
                  name="relationship"
                  placeholder={"Select Relationship"}
                  options={relationships}
                  value={relationships?.find(
                    (option) => option.value === formik.values.relationship
                  )}
                  onChange={(value) => {
                    handleSelect("relationship", value);
                  }}
                  onBlur={() => {
                    formik.setFieldTouched("relationship", true);
                  }}
                />
                {formik.touched.relationship &&
                  selectTouched.relationship === false && (
                    <p className="text-danger fs-12">
                      {formik.errors.relationship}
                    </p>
                  )}
                <FormFeedback>
                  {formik.touched.relationship && formik.errors.relationship}
                </FormFeedback>
              </FormGroup>
            </Col>
            <Col md={6} className="idNumber">
              <FormGroup>
                <Label htmlFor="idNumber">ID Number:</Label>
                <Input
                  type="text"
                  id="idNumber"
                  name="idNumber"
                  placeholder="Enter ID number"
                  value={formik.values.idNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  invalid={formik.touched.idNumber && formik.errors.idNumber}
                />
                <FormFeedback>
                  {formik.touched.idNumber && formik.errors.idNumber}
                </FormFeedback>
              </FormGroup>
            </Col>
            <Col md={6} className="issuedPlace">
              {" "}
              <FormGroup>
                <Label htmlFor="issuedPlace">Issued Place:</Label>
                <Select
              id="issuedPlace"
              name="issuedPlace"
              placeholder={"ID issued place"}
              options={places}
              value={places?.find(
                (option) => option.value === formik.values.issuedPlace
              )}
              onChange={(value) => {
                handleSelect("issuedPlace", value);
              }}
              onBlur={() => {
                formik.setFieldTouched("issuedPlace", true);
              }}
            />
            {formik.touched.issuedPlace &&
              selectTouched.issuedPlace === false && (
                <p className="text-danger">{formik.errors.issuedPlace}</p>
              )}
              </FormGroup>
            </Col>
            <Col md={6} className="issuedDate">
              <FormGroup>
                <Label htmlFor="issuedDate">Issued Date:</Label>
                <Input
                  type="date"
                  id="issuedDate"
                  name="issuedDate"
                  value={formik.values.issuedDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  invalid={
                    formik.touched.issuedDate && formik.errors.issuedDate
                  }
                />
                <FormFeedback>
                  {formik.touched.issuedDate && formik.errors.issuedDate}
                </FormFeedback>
              </FormGroup>
            </Col>
            <Col md={6} className="bankAccountNumber">
              <FormGroup>
                <Label htmlFor="bankAccountNumber">Bank Account Number:</Label>
                <Input
                  type="text"
                  id="bankAccountNumber"
                  name="bankAccountNumber"
                  placeholder="Enter bank account number"
                  value={formik.values.bankAccountNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  invalid={
                    formik.touched.bankAccountNumber &&
                    formik.errors.bankAccountNumber
                  }
                />
                <FormFeedback>
                  {formik.touched.bankAccountNumber &&
                    formik.errors.bankAccountNumber}
                </FormFeedback>
              </FormGroup>
            </Col>
            <Col md={6} className="contactNumber">
              <FormGroup>
                <Label htmlFor="contactNumber">Contact Number:</Label>
                <Input
                  type="text"
                  id="contactNumber"
                  name="contactNumber"
                  placeholder="Enter contact number"
                  value={formik.values.contactNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  invalid={
                    formik.touched.contactNumber && formik.errors.contactNumber
                  }
                />
                <FormFeedback>
                  {formik.touched.contactNumber && formik.errors.contactNumber}
                </FormFeedback>
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>

        <ModalFooter>
          <Button color="light" className="text-dark" onClick={toggle}>
            Close
          </Button>
          <Button color="success" type="submit">
            Save
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default FamilyDetailsAddModal;
