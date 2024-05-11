import { useFormik, Field } from "formik";
import React, { useState } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Form,
  Input,
  CardHeader,
  CardBody,
  FormGroup,
  Label,
  Button,
  Alert,
} from "reactstrap";
import Select from "react-select";
import { OccupationSchema as validationSchema } from "../../validationSchema/index";
import { useDispatch, useSelector } from "react-redux";
import { updateOccupationDetails } from "../../slices/kycDetails.slice";
import { setKycSelectionIndividual } from "../../slices/selection.slice";
import UserDetailsCard from "./UserDetailsCard";
import { fetchDesignationList, fetchEstimatedAnnualIncomeList, fetchNatureOfBusinessList, fetchOccupationTypeList } from "../../../slices/CentralizedKYC/Dropdowns/thunk";
import { useEffect } from "react";
import { saveOccupationInfo } from "../../../slices/CentralizedKYC/IndividualKYC/thunk";

export default function OccupationDetails() {
  const dispatch = useDispatch();
  const initialValues = useSelector(
    (state) => state.KycDetails.occupationDetails
  );
  // const valuesss = useSelector(
  //   (state) => state.KycDetails
  // );
  const OccupationID = useSelector((state) => state.IndKyc?.occupationDetails);
  const videoKYC = useSelector((state) => state.IndKyc.videoKYC);

  // Getting Dropdown Data
  const OccupationList = useSelector((state) => state.Dropdown?.OccupationType);
  const NatureOfBusinessList = useSelector((state) => state.Dropdown?.NatureOfBusiness);
  const EstimatedAnnualIncomeList = useSelector((state) => state.Dropdown?.EstimatedAnnualIncome);


  console.log("Occupation", OccupationList);
  console.log("Nature of business", NatureOfBusinessList);

  useEffect(() => {
    dispatch(fetchOccupationTypeList());
    dispatch(fetchNatureOfBusinessList());
    dispatch(fetchEstimatedAnnualIncomeList());

  }, []);

  const formik = useFormik({
    initialValues,
    // validationSchema,
    onSubmit: (values) => {
      dispatch(updateOccupationDetails(values));
      console.log("Occupation Details", values);
      dispatch(setKycSelectionIndividual("FamilyDetails"));

      const valueToSave = {
    
          salaried: {
            institutionName: values.institutionName,
            designation: values.designationName,
            estimatedAnnualIncome: values.annualIncome,
            occupationTypes: values.occupationType,

          }, 
          additionalOccupation: {
            institutionName: values.addInstitutionName,
            designation: values.addDesignationName,
            estimatedAnnualIncome: values.addAnnualIncome,
            occupationTypes: values.addOccupationType,

          },
          selfEmployed: {
            institutionName: values.selfInstitutionName,
            occupationType: values.selfOccupationType,
            institutionPanNumber: values.panNumber,
            licenseRenewalDate: values.renewalDate,
            constitution: values.constitution,
            totalEmployee: values.totalEmployee,
            totalNumberOfBranch: values.branchNunber,
            natureOfBusiness: values.businessNature,
            annualTurnover: values.turnOver,
            estimatedAnnualIncome: values.annualIncomeSelf
          },
         
       
        
        videoKycId: videoKYC?.id,
        id: OccupationID?.id,
       }
       dispatch(saveOccupationInfo(valueToSave));
       console.log( " vhsmgdgmldskfgsd",valueToSave)

    },
  });

  const [selectTouched, setSelectTouched] = useState({
    occupationType: false,
    selfOccupationType: false,
    addOccupationType: false,
    annualIncome: false,
    annualIncomeSelf: false,
    addAnnualIncome: false,
    businessNature : false,
  });

  const handleSelect = (fieldName, value) => {
    formik.setFieldValue(fieldName, value.value);
    setSelectTouched((prev) => ({
      ...prev,
      [fieldName]: true,
    }));
  };




  const Options = OccupationList?.map((item) => ({
    value: item.occu01uin,
    label: item.occu01title,
  }));

  const incomeRange = EstimatedAnnualIncomeList?.map((item) => ({
    value: item.id,
    label: item.title,
  }));

  const businessNatures = NatureOfBusinessList?.map((item) => ({
    value: item.nature01uin,
    label: item.nature01title,
  }));


  const dismiss = (e) => {
    setVisiable(false);
  };
  return (
    <>
    {/* <UserDetailsCard/> */}
    <Card className="p-0">
      <CardHeader className="px-4">
        <div className="">
          <h5 className="m-0">Occupation Details</h5>
        </div>
      </CardHeader>

      <CardBody className="px-4">
        <Form onSubmit={formik.handleSubmit} className="row gx-5 gy-4">
          {/*---------------------------------- Salaried & Other section -------------------–––---------*/}
          <Col lg={12} className="permanentAddress-label">
            <p className="py-3 fs-16 fw-semibold ">Salaried / Others</p>
          </Col>

          <Col lg={6} className="institutionName">
            <Label> Institution Name </Label>

            <Input
              id="institutionName"
              name="institutionName"
              type="text"
              value={formik.values.institutionName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.institutionName &&
              formik.touched.institutionName && (
                <p className="text-danger">{formik.errors.institutionName}</p>
              )}
          </Col>

          <Col lg={6} className="designation">
            <Label> Designation Name </Label>

            <Input
              id="designationName"
              name="designationName"
              type="text"
              placeholder="Designation"
              value={formik.values.designationName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.designationName &&
              formik.touched.designationName && (
                <p className="text-danger">{formik.errors.designationName}</p>
              )}
          </Col>

          <Col md={6} className="occupationType">
            <Label>Occupation Type</Label>
            <Select
              name="occupationType"
              options={Options}
              placeholder="Select Occupation Type"
              value={Options?.find(
                (option) => option.value === formik.values.occupationType
              )}
              onChange={(selectedOption) => {
                formik.setFieldValue("occupationType", selectedOption.value);
              }}
              onBlur={() => {
                formik.setFieldTouched("occupationType", true);
              }}
            />
            {formik.touched.occupationType && formik.errors.occupationType && (
              <p className="text-danger">{formik.errors.occupationType}</p>
            )}
          </Col>

          <Col lg={6} className="estimatedAnnualIncome">
            <Label> Estimated Annual Income </Label>
{/*
            <Input
              id="annualIncome"
              name="annualIncome"
              type="number"
              placeholder="100000"
              value={formik.values.annualIncome}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.annualIncome && formik.touched.annualIncome && (
              <p className="text-danger">{formik.errors.annualIncome}</p>
            )} */}
            <Select
                  id="annualIncome"
                  name="annualIncome"
                  placeholder={"Select your Income Range"}
                  options={incomeRange}
                  value={incomeRange?.find(
                    (option) => option.value === formik.values.annualIncome
                  )}
                  onChange={(value) => {
                    handleSelect("annualIncome", value);
                  }}
                  onBlur={() => {
                    formik.setFieldTouched("annualIncome", true);
                  }}
                />
                {formik.touched.annualIncome &&
                  selectTouched.annualIncome === false && (
                    <p className="text-danger">{formik.errors.annualIncome}</p>
                  )}
          </Col>

          {/*---------------------------------- Self Employed Section -------------------–––---------*/}

          <Col lg={12}>
            <p className="py-3 fs-16  fw-semibold ">Self Employed</p>
          </Col>

          <Col lg={4} className="institutionName">
            <Label> Institution Name </Label>

            <Input
              id="selfInstitutionName"
              name="selfInstitutionName"
              type="text"
              value={formik.values.selfInstitutionName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.selfInstitutionName &&
              formik.touched.selfInstitutionName && (
                <p className="text-danger">
                  {formik.errors.selfInstitutionName}
                </p>
              )}
          </Col>

          <Col md={4} className="occupationType">
            <Label>Occupation Type</Label>
            <Select
              name="selfOccupationType"
              options={Options}
              placeholder="Select Occupation Type"
              value={Options?.find(
                (option) => option.value === formik.values.selfOccupationType
              )}
              onChange={(selectedOption) => {
                formik.setFieldValue(
                  "selfOccupationType",
                  selectedOption.value
                );
              }}
              onBlur={() => {
                formik.setFieldTouched("selfOccupationType", true);
              }}
            />
            {formik.touched.selfOccupationType &&
              formik.errors.selfOccupationType && (
                <p className="text-danger">
                  {formik.errors.selfOccupationType}
                </p>
              )}{" "}
          </Col>

          <Col lg={4} className="institutionPANnumber">
            <Label> Institution PAN Number </Label>

            <Input
              id="panNumber"
              name="panNumber"
              type="text"
              value={formik.values.panNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.panNumber && formik.touched.panNumber && (
              <p className="text-danger">{formik.errors.panNumber}</p>
            )}
          </Col>

          <Col lg={4} className="lisence-Registration">
            <Label>
              Lisence/Registration Renewal Date{" "}
              <span className="text-danger">*</span>
            </Label>
            <Input
              id="renewalDate"
              name="renewalDate"
              type="date"
              value={formik.values.renewalDate}
              onChange={formik.handleChange} // Handle English date change
              onBlur={formik.handleBlur}
            />
            {formik.errors.renewalDate && formik.touched.renewalDate && (
              <p className="text-danger">{formik.errors.renewalDate}</p>
            )}
          </Col>

          <Col lg={4} className="constitution">
            <Label> Constitution </Label>

            <Input
              id="constitution"
              name="constitution"
              type="text"
              placeholder=""
              value={formik.values.constitution}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.constitution && formik.touched.constitution && (
              <p className="text-danger">{formik.errors.constitution}</p>
            )}
          </Col>

          <Col lg={4} className="totalEmployee">
            <Label> Total Employee </Label>

            <Input
              id="totalEmployee"
              name="totalEmployee"
              type="number"
              placeholder=""
              value={formik.values.totalEmployee}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.totalEmployee && formik.touched.totalEmployee && (
              <p className="text-danger">{formik.errors.totalEmployee}</p>
            )}
          </Col>

          <Col lg={4} className="totalNoOfBranch">
            <Label> Total N.O of branch </Label>

            <Input
              id="branchNunber"
              name="branchNunber"
              type="number"
              placeholder=""
              value={formik.values.branchNunber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.branchNunber && formik.touched.branchNunber && (
              <p className="text-danger">{formik.errors.branchNunber}</p>
            )}
          </Col>

          <Col lg={4} className="NatureOfBusiness">
            <Label> Nature of Busines </Label>

        
            <Select
                  id="businessNature"
                  name="businessNature"
                  placeholder={"Select nature of Business"}
                  options={businessNatures}
                  value={businessNatures?.find(
                    (option) => option.value === formik.values.businessNature
                  )}
                  onChange={(value) => {
                    handleSelect("businessNature", value);
                  }}
                  onBlur={() => {
                    formik.setFieldTouched("businessNature", true);
                  }}
                />
                {formik.touched.businessNature &&
                  selectTouched.businessNature === false && (
                    <p className="text-danger">{formik.errors.businessNature}</p>
                  )}
          </Col>

          <Col lg={4} className="annualTurnOver">
            <Label> Annual Turn Over (Sales) </Label>

            <Input
              id="turnOver"
              name="turnOver"
              type="number"
              placeholder=""
              value={formik.values.turnOver}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.turnOver && formik.touched.turnOver && (
              <p className="text-danger">{formik.errors.turnOver}</p>
            )}
          </Col>

          <Col lg={4} className="estimatedAnnualIncome">
            <Label> Estimated Annual Income </Label>

            {/* <Input
              id="estimatedIncome"
              name="estimatedIncome"
              type="number"
              placeholder="100000"
              value={formik.values.estimatedIncome}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.estimatedIncome &&
              formik.touched.estimatedIncome && (
                <p className="text-danger">{formik.errors.estimatedIncome}</p>
              )} */}
                    <Select
                  id="annualIncomeSelf"
                  name="annualIncomeSelf"
                  placeholder={"Select your Income Range"}
                  options={incomeRange}
                  value={incomeRange?.find(
                    (option) => option.value === formik.values.annualIncomeSelf
                  )}
                  onChange={(value) => {
                    handleSelect("annualIncomeSelf", value);
                  }}
                  onBlur={() => {
                    formik.setFieldTouched("annualIncomeSelf", true);
                  }}
                />
                {formik.touched.annualIncomeSelf &&
                  selectTouched.annualIncomeSelf === false && (
                    <p className="text-danger">{formik.errors.annualIncomeSelf}</p>
                  )}
          </Col>

          {/*---------------------------------- Additional Occupation section -------------------–––---------*/}

          <Col lg={12}>
            <p className="py-3 fs-16 m-0 mt-3 fw-semibold ">
              Additional Occupation
            </p>
          </Col>

          <Col lg={6} className="institutionName">
            <Label> Institution Name </Label>

            <Input
              id="addInstitutionName"
              name="addInstitutionName"
              type="text"
              value={formik.values.addInstitutionName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.addInstitutionName &&
              formik.touched.addInstitutionName && (
                <p className="text-danger">
                  {formik.errors.addInstitutionName}
                </p>
              )}
          </Col>

          <Col lg={6} className="designationName">
            <Label> Designation Name </Label>

            <Input
              id="addDesignationName"
              name="addDesignationName"
              type="text"
              value={formik.values.addDesignationName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.addDesignationName &&
              formik.touched.addDesignationName && (
                <p className="text-danger">
                  {formik.errors.addDesignationName}
                </p>
              )}
          </Col>

          <Col md={6} className="occupationType">
            <Label>Occupation Type</Label>
            <Select
              name="addOccupationType"
              options={Options}
              placeholder="Select Occupation Type"
              value={Options?.find(
                (option) => option.value === formik.values.addOccupationType
              )}
              onChange={(selectedOption) => {
                formik.setFieldValue("addOccupationType", selectedOption.value);
              }}
              onBlur={() => {
                formik.setFieldTouched("addOccupationType", true);
              }}
            />
            {formik.touched.addOccupationType &&
              formik.errors.addOccupationType && (
                <p className="text-danger">{formik.errors.addOccupationType}</p>
              )}{" "}
          </Col>

          <Col lg={6} className="estimatedAnnualIncome">
            <Label> Estimated Annual Income </Label>

            {/* <Input
              id="addAnnualIncome"
              name="addAnnualIncome"
              type="number"
              placeholder="100000"
              value={formik.values.addAnnualIncome}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.addAnnualIncome &&
              formik.touched.addAnnualIncome && (
                <p className="text-danger">{formik.errors.addAnnualIncome}</p>
              )} */}

              <Select
                  id="addAnnualIncome"
                  name="addAnnualIncome"
                  placeholder={"Select your Income Range"}
                  options={incomeRange}
                  value={incomeRange?.find(
                    (option) => option.value === formik.values.addAnnualIncome
                  )}
                  onChange={(value) => {
                    handleSelect("addAnnualIncome", value);
                  }}
                  onBlur={() => {
                    formik.setFieldTouched("addAnnualIncome", true);
                  }}
                />
                {formik.touched.addAnnualIncome &&
                  selectTouched.addAnnualIncome === false && (
                    <p className="text-danger">{formik.errors.addAnnualIncome}</p>
                  )}

          </Col>

          {/*---------------------------------- Form Action section -------------------–––---------*/}
          <div className="d-flex justify-content-between mt-4">
            <Button
              color="light"
              onClick={() =>
                dispatch(setKycSelectionIndividual("IdentificationDetails"))
              }
            >
              Back
            </Button>
            <Button color="primary" type="submit">
              Next
            </Button>
          </div>
        </Form>
      </CardBody>
    </Card>
    </>
  );
}
