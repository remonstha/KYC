import * as Yup from "yup";

const basicInformationValidation = Yup.object({
  accountType: Yup.string().required("Please specify the account type"),
  otherAccountType: Yup.string(),
  currencyType: Yup.string().required("Please specify the currency type"),
  otherCurrencyType: Yup.string(),
  date: Yup.string().required("Please select a date"),
  branchName: Yup.string()
    .required("Please enter the branch name")
    .min(4, "Name should be atleast 4 characters")
    .max(256, "Branch name shouldn't be more than 256 characters"),
  accountNumber: Yup.string()
    .min(10, "should be atleast 10 characters")
    .max(50, "number should not be more than 50 characters"),
  anticipatedYearlyTransaction: Yup.string().required(
    "Please enter this feild"
  ),
  purposeOfAccountOpening: Yup.string()
    .required("Please enter this feild")
    .min(4, "Name should be atlease 4 characters")
    .max(256, "Branch name shouldn't be more than 256 characters"),
  sourceOfFunds: Yup.string()
    .required("Please mention your source of funds")
    .min(4, "Name should be atlease 4 characters")
    .max(256, "Branch name shouldn't be more than 256 characters"),
  // accountFor: Yup.string().required(
  //   "Please select the account you want to open for"
  // ),
});

const identificationDetailsIndividualValidation = Yup.object({
  identificationType: Yup.string()
    .required("Identification type is required")
    .min(4, "Should be atleast 4 characters")
    .max(256, "Shouldn't be more than 256 characters"),
  otherIdentificationType: Yup.string(),
  idNumber: Yup.number("Must be a number")
    .required("ID number is required")
    .positive("ID number should be positive value")
    .integer("ID number should be a number"),
    issuePlace: Yup.string()
    .required("Issued place is required")
    .min(4, "Should be atleast 4 characters")
    .max(256, "Shouldn't be more than 256 characters"),
  issuedBy: Yup.string()
    .required("Issuer is required")
    .min(4, "Should be atleast 4 characters")
    .max(256, "Shouldn't be more than 256 characters"),
  issuedDate: Yup.string()
    .required("Issured Date is required")
    .min(4, "Should be atleast 4 characters")
    .max(256, "Shouldn't be more than 256 characters"),
  expiryDate: Yup.string()
    .required("Expiry Date is required")
    .min(4, "Should be atleast 4 characters")
    .max(256, "Shouldn't be more than 256 characters"),
  panNumber: Yup.string(),
});

const identificationDetailsMinorValidation = Yup.object({
  identificationType: Yup.string()
    .required("Identification type is required")
    .min(4, "Should be atleast 4 characters")
    .max(256, "Shouldn't be more than 256 characters"),
  minorId: Yup.string("Must be a number")
    .required("ID number is required"),
  issuedPlace: Yup.string()
    .required("Issued place is required")
    .min(4, "Should be atleast 4 characters")
    .max(256, "Shouldn't be more than 256 characters"),
  issuedBy: Yup.string()
    .required("Issuer is required")
    .min(4, "Should be atleast 4 characters")
    .max(256, "Shouldn't be more than 256 characters"),
  issuedDate: Yup.string()
    .required("Issured Date is required")
    .min(4, "Should be atleast 4 characters")
    .max(256, "Shouldn't be more than 256 characters"),
  expiryDate: Yup.string()
    .required("Expiry Date is required")
    .min(4, "Should be atleast 4 characters")
    .max(256, "Shouldn't be more than 256 characters"),
  // panNumber: Yup.string()
});

const identificationDetailsForeignNationalValidation = Yup.object({
  identificationType: Yup.string()
    .required("Identification type is required")
    .min(4, "Should be atleast 4 characters")
    .max(256, "Shouldn't be more than 256 characters"),
  passportId: Yup.string().required("Passport ID number is required"),
  issuedPlace: Yup.string()
    .required("Issued place is required")
    .min(4, "Should be atleast 4 characters")
    .max(256, "Shouldn't be more than 256 characters"),
  issuedBy: Yup.string()
    .required("Issuer is required")
    .min(4, "Should be atleast 4 characters")
    .max(256, "Shouldn't be more than 256 characters"),
  visaIssuedDate: Yup.string()
    .required("Issured Date is required")
    .min(4, "Should be atleast 4 characters")
    .max(256, "Shouldn't be more than 256 characters"),
  visaExpiryDate: Yup.string()
    .required("Expiry Date is required")
    .min(4, "Should be atleast 4 characters")
    .max(256, "Shouldn't be more than 256 characters"),
  // panNumber: Yup.number()
});

const identificationDetailsRefugeeValidation = Yup.object({
  identificationType: Yup.string()
    .required("Identification type is required")
    .min(4, "Should be atleast 4 characters")
    .max(256, "Shouldn't be more than 256 characters"),
  refugeeId: Yup.number("Must be a number")
    .required("ID number is required")
    .positive("ID number should be positive value")
    .integer("ID number should be a number"),
  issuedPlace: Yup.string()
    .required("Issued place is required")
    .min(4, "Should be atleast 4 characters")
    .max(256, "Shouldn't be more than 256 characters"),
  issuedBy: Yup.string()
    .required("Issuer is required")
    .min(4, "Should be atleast 4 characters")
    .max(256, "Shouldn't be more than 256 characters"),
  issuedDate: Yup.string()
    .required("Issured Date is required")
    .min(4, "Should be atleast 4 characters")
    .max(256, "Shouldn't be more than 256 characters"),
  expiryDate: Yup.string()
    .required("Expiry Date is required")
    .min(4, "Should be atleast 4 characters")
    .max(256, "Shouldn't be more than 256 characters"),
  // panNumber: Yup.string()
});

export default basicInformationValidation;
export {
  identificationDetailsIndividualValidation,
  identificationDetailsMinorValidation,
  identificationDetailsForeignNationalValidation,
  identificationDetailsRefugeeValidation
};
