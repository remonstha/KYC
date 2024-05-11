import * as Yup from "yup";

const formSchema = Yup.object().shape({
    titleSelect: Yup.string().required("Title is required"),
    otherSelect: Yup.string(),
    
    maritalSelect: Yup.string().required("Marital status is required"),
    genderSelect: Yup.string().required("Gender is required"),
    otherGender: Yup.string(),
    firstName: Yup.string().required("First Name is required"),
    middleName: Yup.string(),
    lastName: Yup.string().required("Last Name is required"),
    nationality: Yup.string().required("Nationality is required"),
    DOB: Yup.date().required("Date of Birth (B.S) is required"),
    DOBN: Yup.date().required("Date of Birth (A.D) is required"),
    education: Yup.string().required("Education is required"),
    familySize: Yup.number().integer().positive("Family Size must be positive"),
    guardianName: Yup.string().required("Guardian's Name is required"),
    guardianRelationship: Yup.string().required("Guardian's Relationship is required"),
    fatherName: Yup.string().required("Father's Name is required"),
    motherName: Yup.string().required("Mother's Name is required"),
    grandFatherName: Yup.string().required("Grand Father's Name is required"),
    grandMotherName: Yup.string().required("Grand Mother's Name is required"),
    wifeName: Yup.string().required("Husband/Wife's Name is required"),
  });
 

  const OccupationSchema = Yup.object().shape({
  institutionName: Yup.string().required('Institution Name is required'),
  designationName: Yup.string().required('Designation Name is required'),
  occupationType: Yup.string().required('Occupation Type is required'),
  annualIncome: Yup.number().positive('Annual Income must be a positive number'),
  selfInstitutionName: Yup.string(),
  selfOccupationType: Yup.string(),
  panNumber: Yup.string().required('PAN Number is required'),
  renewalDate: Yup.date().required('Renewal Date is required'),
  constitution: Yup.string(),
  totalEmployee: Yup.number().positive('Total Employee must be a positive number'),
  branchNumber: Yup.number().positive('Branch Number must be a positive number'),
  businessNature: Yup.string(),
  turnOver: Yup.number().positive('Turn Over must be a positive number'),
  estimatedIncome: Yup.number().positive('Estimated Annual Income must be a positive number'),
  addInstitutionName: Yup.string(),
  assDesignationName: Yup.string(),
  addOccupationType: Yup.string(),
  addAnnualIncome: Yup.number().positive('Additional Annual Income must be a positive number'),
});

const transactionSchema = Yup.object().shape({
  deposit: Yup.number().positive('Amount must be a positive number').required('deposit amount is required'),
  withdrawal: Yup.number().positive('Amount must be a positive number').required('withdrawal amount is required'),
  daywithdrawal: Yup.number().positive('Amount must be a positive number').required(' deposit amount is required'),
  daydeposit: Yup.number().positive('Amount must be a positive number').required('withdrawal amount is required'),
});

const createModalSchema = Yup.object().shape({
  individualName: Yup.string().required('Individual Name is required'),
  position: Yup.string().required('Position is required'),
  involvement: Yup.string().required('Involvement is required'),
  relationship: Yup.string().required('Relationship is required'),
  info: Yup.string(),
});

const declarationSchema = Yup.object().shape({
  positionTop: Yup.string().required('Position is required'),
  institutionTop: Yup.string().required('Institution Name is required'),
  informationTop: Yup.string().required('Additional Information is required'),
  declaration: Yup.boolean(),
  declaration2: Yup.boolean(),
  declaration3: Yup.boolean(),
  term: Yup.boolean().oneOf([true], 'You must confirm this'),
  term1: Yup.boolean().oneOf([true], 'You must confirm this'),
  term2: Yup.boolean().oneOf([true], 'You must confirm this'),
});



const recommenderSchema = Yup.object().shape({
  titleSelect: Yup.number().positive('Amount must be a positive number').required('Title is required'),
  Name: Yup.string().required('Name is required'),
  accountNO: Yup.string().required('Account N.O is required'),
});

const NegativeSchema = Yup.object().shape({
  firstNameNegative: Yup.string().required('First Name is required'),
  middleNameNegative: Yup.string(),
  lastNameNegative: Yup.string().required('Last Name is required'),
  nationalityNegative: Yup.string().required('Nationality is required'),
  fatherNameNegative: Yup.string().required("Father's Name is required"),
  motherNameNegative: Yup.string().required("Mother's Name is required"),
  grandFatherNameNegative: Yup.string().required("Grand Father's Name is required"),
  grandMotherNameNegative: Yup.string().required("Grand Mother's Name is required"),
  wifeNameNegative: Yup.string().required("Husband/Wife's Name is required"),
  mobNumber: Yup.string().matches(/^[0-9]+$/, 'Mobile No must be a valid number'),
  idNumberNegative: Yup.string(),
  issuedPlaceNegative: Yup.string(),
  issuedByNegative: Yup.string(),
  issuedDateNegative: Yup.date(),
  expiryDateNegative: Yup.date(),
  permCountry: Yup.string().required('Country is required'),
  permState: Yup.string().required('State is required'),
  permDistrict: Yup.string().required('District is required'),
  permMunicipality: Yup.string().required('Municipality is required'),
  permWardNo: Yup.number().typeError('Ward No must be a number').required('Ward No is required'),
  permToleStreet: Yup.string(),
  permHouseNo: Yup.number().typeError('House No must be a number'),
  tempCountry: Yup.string().when('sameAsPermanent', {
    is: false,
    then: Yup.string().required('Country is required'),
  }),
  tempState: Yup.string().when('sameAsPermanent', {
    is: false,
    then: Yup.string().required('State is required'),
  }),
  tempDistrict: Yup.string().when('sameAsPermanent', {
    is: false,
    then: Yup.string().required('District is required'),
  }),
  tempMunicipality: Yup.string().when('sameAsPermanent', {
    is: false,
    then: Yup.string().required('Municipality is required'),
  }),
  tempWardNo: Yup.number().typeError('Ward No must be a number').when('sameAsPermanent', {
    is: false,
    then: Yup.number().required('Ward No is required'),
  }),
  tempToleStreet: Yup.string().when('sameAsPermanent', {
    is: false,
    then: Yup.string(),
  }),
  tempHouseNo: Yup.number().typeError('House No must be a number').when('sameAsPermanent', {
    is: false,
    then: Yup.number(),
  }),
  sameAsPermanent: Yup.boolean(),
  dragAndDropKyc: Yup.array()
});

const locationSchema = Yup.object().shape({
  latitude: Yup.number().required('Latitude is required'),
  longitude: Yup.number().required('Longitude is required'),
  nearestLandmark: Yup.string().required('Please, fill Nearest Landmark'),
  nearestBranch: Yup.string().required('Please, fill Nearest Branch'),

});



export { formSchema,NegativeSchema,locationSchema, OccupationSchema, transactionSchema,declarationSchema, createModalSchema, recommenderSchema};

 
  