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
  FormFeedback,
} from "reactstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { editFamilyMember } from "../slices/kycDetails.slice";
import { useLocation } from "react-router";
import { editFamilyMemberMinor } from "../slices/KycMinor.slice";
import { useEffect, useState } from "react";
import {
  fetchIssuedPlaceList,
  fetchRelationshipList,
} from "../../slices/CentralizedKYC/Dropdowns/thunk";
import Select from "react-select";
import { toInteger } from "lodash";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  relationship: Yup.string().required("Relationship is required"),
  idNumber: Yup.string().required("ID Number is required"),
  issuedPlace: Yup.string().required("Issued Place is required"),
  issuedDate: Yup.date().required("Issued Date is required"),
  bankAccountNumber: Yup.string().required("Bank Account Number is required"),
  contactNumber: Yup.string().required("Contact Number is required"),
});

const FamilyDetailsUpdateModal = ({ isOpen, toggle, index }) => {
  const location = useLocation();

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

  // const reduxState =  useSelector((state) => state.KycDetails.familyDetails);
  // const reduxMinorState =  useSelector((state) => state.KycMinor.familyDetails);

  //  const previousData = reduxState[index];
  // const prevData = reduxMinorState[index];

  const reduxState = useSelector((state) => state.KycDetails.familyDetails);
  const reduxMinorState = useSelector((state) => state.KycMinor.familyDetails);
  const previousData =
    location.pathname === "/kycindividual"
      ? reduxState[index]
      : reduxMinorState[index];

  const initialValues = {
    name: previousData?.name,
    relationship: previousData?.relationship,
    idNumber: previousData?.idNumber,
    isAlive: previousData?.isAlive,
    issuedPlace: previousData?.issuedPlace,
    issuedDate: previousData?.issuedDate,
    bankAccountNumber: previousData?.bankAccountNumber,
    contactNumber: previousData?.contactNumber,
  };

  // console.log('initial values are', initialValues)

  React.useEffect(() => {
    // console.log('useeffect running')
    formik.setValues(initialValues);
    // console.log('this is formik values', formik.values)
  }, [previousData]);

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const editedMemberData = {
        name: values.name,
        relationship: values.relationship,
        idNumber: values.idNumber,
        // convertissuedPlace to integer
        issuedPlce: toInteger(values.issuedPlace),
        isAlive: values.isAlive,
        // issuedPlace: values.issuedPlace,
        issuedDate: values.issuedDate,
        bankAccountNumber: values.bankAccountNumber,
        contactNumber: values.contactNumber,
      };
      const payload = {
        index,
        editedMemberData,
      };
      // const editedMinorData = {
      //     name: values.name,
      //     relationship: values.relationship,
      //     idNumber: values.idNumber,
      //     isAlive: values.isAlive,
      //     issuedPlace: values.issuedPlace,
      //     issuedDate: values.issuedDate,
      //     bankAccountNumber: values.bankAccountNumber,
      //     contactNumber: values.contactNumber,
      // };
      // const payloadMinor = {
      //     index,
      //     editedMinorData
      // }
      if (location.pathname === "/kycindividual")
        dispatch(editFamilyMember(payload));
      if (location.pathname === "/kycminor")
        dispatch(editFamilyMemberMinor(payload));

      toggle();
    },
  });

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

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Edit Member Information</ModalHeader>

      <Form onSubmit={formik.handleSubmit}>
        <ModalBody>
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
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                id="isAlive"
                name="isAlive"
                checked={formik.values.isAlive}
                onChange={formik.handleChange}
              />{" "}
              Is Alive
            </Label>
          </FormGroup>
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
          <FormGroup>
            <Label htmlFor="issuedDate">Issued Date:</Label>
            <Input
              type="date"
              id="issuedDate"
              name="issuedDate"
              value={formik.values.issuedDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              invalid={formik.touched.issuedDate && formik.errors.issuedDate}
            />
            <FormFeedback>
              {formik.touched.issuedDate && formik.errors.issuedDate}
            </FormFeedback>
          </FormGroup>
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
        </ModalBody>

        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
          <Button color="primary" type="submit">
            Save
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default FamilyDetailsUpdateModal;
