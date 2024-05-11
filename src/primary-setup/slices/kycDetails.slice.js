import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  videoKYC: {
    hasVideoKyc: 'No',
    videoKycLink: "",
    kycImages: [],
  },
  basicInformation: {
    accountType: "",
    // otherAccountType: "",
    currency: "",
    // otherCurrencyType: "",
    date: "",
    branchName: "",
    // accountNumber: "",
    anticipatedYearlyTransaction: "",
    purposeOfAccountOpening: "",
    sourceOfFund: "",
  },
  applicantDetails: {
    title: "",
    // otherSelect: "",
    maritalStatus: "",
    gender: "",
    // otherGender: "",
    firstName: "",
    middleName: "",
    lastName: "",
    nationality: "",
    dateOfBirthBS: "",
    dateOfBirthAD: "",
    education: "",
    familySize: "",
    guardianName: "",
    guardianRelationship: "",
    fathersName: "",
    mothersName: "",
    grandfathersName: "",
    grandmothersName: "",
    husbandorWifeName: "",
  },
  addressDetails: {
    permCountry: "",
    permState: "",
    permDistrict: "",
    permMunicipality: "",
    permWardNo: "",
    permToleStreet: "",
    permHouseNo: "",

    tempCountry: "",
    tempState: "",
    tempDistrict: "",
    tempMunicipality: "",
    tempWardNo: "",
    tempToleStreet: "",
    tempHouseNo: "",

    officeCountry: "",
    officeState: "",
    officeDistrict: "",
    officeMunicipality: "",
    officeWardNo: "",
    officeToleStreet: "",
    officeHouseNo: "",
    webAddress: "",
    officeEmail: "",
  },
  contactInformation: {
    mobileNo1: "",
    mobileNo2: "",
    faxNumber: "",
    residenceLandline: "",
    officeLandline: "",
    email: "",
    socialMedia: "",
    nonResName: "",
    nonResMobileNo1: "",
    address1: "",
    relationship1: "",
    landlineNo1: "",
    nonResName2: "",
    nonResMobileNo2: "",
    address2: "",
    relationship2: "",
    landlineNo2: "",
    bankName: "",
    bankAccNo: "",
    accountType: "",
    facilities: "",
  },
  identificationDetailsIndividual: {
    identificationType: "",
    idNumber: "",
    issuedBy: "",
    issuedDate: "",
    expiryDate: "",
    panNumber: "",
    issuedPlace: "",
  },
  occupationDetails: {
    institutionName: "",
    designationName: "",
    occupationType: "",
    annualIncome: "",
    selfInstitutionName: "",
    selfOccupationType: "",
    panNumber: "",
    renewalDate: "",
    constitution: "",
    totalEmployee: "",
    branchNumber: "",
    businessNature: "",
    turnOver: "",
    estimatedIncome: "",
    addInstitutionName: "",
    addDesignationName: "",
    addOccupationType: "",
    addAnnualIncome: "",
  },
  familyDetails: {
    family: [],

  },

  location: {
    latitude: "",
    longitude: "",
    nearestLandmark: "",
    nearestBranch: "",
  },

  declaration: {
    position: '',
    institution:'',
    information:'',
    declaration: false, // Checkbox initial value
    declaration2: false, // Checkbox initial value
    declaration3: false, // Checkbox initial value
    term: false, // Checkbox initial value
    term1: false, // Checkbox initial value
    term2: false, // Checkbox initial
    memberInfo: [],
  },

  nomineeInformation: {
    nomineeInfos: [],
  },

  servicesYouWant: {
    frequency: null,
    modeOfDelivery: null,
    statementPrint: [],
    debitCardService: false,
    debitCardType: null,
    onlineBanking: false,
    mobileBanking: false,
    smsBanking: false,
    phonePay: false,
    transactionAlert: false,
    merchantQR: false,
  },

  transactionInfo: {

    deposit: "",
    withdrawl: "",
    daydeposit: "",
    daywithdrawl: "",
  },
  recommender: {
    titleSelect: null,
    Name: "",
    accountNO: "",
    // titleSelect: "",
    // otherSelect: "",
    recommenderAccountName: "",
    recommenderAccountNumber: "",
  },

  uploadDocuments: {
    applicantPassportSizePhoto: null,
    applicantCitizenshipFrontPhoto: null,
    applicantCitizenshipBackPhoto: null,
    signatureOfAccountHolder: null,
    applicantPassportFront: null,
    applicantPassportBack: null,
    nomineePassportSizePhoto: null,
    rightThumbPrint: null,
    leftThumbPrint: null,
    nomineeIdentificationFront: null,
    nomineeIdentificationBack: null,
  },

  userAccountType: "",
  userCountry: ""
};

const KycDetailsSlice = createSlice({
  name: "KycDetails",
  initialState,
  reducers: {
    updateVideoKyc: (state, { payload }) => {
      state.videoKYC = { ...state.videoKYC, ...payload };
    },
    updateBasicInformation: (state, { payload }) => {
      state.basicInformation = { ...state.basicInformation, ...payload };
    },
    updateApplicantDetails: (state, { payload }) => {
      state.applicantDetails = { ...state.applicantDetails, ...payload };
    },

    updateAddressDetails: (state, { payload }) => {
      state.addressDetails = { ...state.addressDetails, ...payload };
    },

    updateContactInformation: (state, { payload }) => {
      state.contactInformation = { ...state.contactInformation, ...payload };
    },
    updateIdentificationDetailsIndividual: (state, { payload }) => {
      state.identificationDetailsIndividual = {
        ...state.identificationDetailsIndividual,
        ...payload,
      };
    },
    updateOccupationDetails: (state, { payload }) => {
      state.occupationDetails = { ...state.occupationDetails, ...payload };
    },

    addFamilyDetails: (state, { payload }) => {
      state.familyDetails.family.push(payload);
    },
    editFamilyMember: (state, { payload }) => {
      // console.log("this is payload", payload);
      const { index, editedMemberData } = payload;
      state.familyDetails.family[index] = editedMemberData;
    },

    deleteFamilyMember: (state, { payload }) => {
      const updated = [...state.familyDetails.family];
      updated.splice(payload, 1);
      state.familyDetails.family = updated;
    },

    updateLocation: (state, { payload }) => {
      state.location = { ...state.location, ...payload };
    },

    // member information from the Table in Declaration Form
    addMemberInfo: (state, { payload }) => {
      state.declaration.memberInfo.push(payload);
    },

    editMemberInfo: (state, { payload }) => {
      const { index, updatedMemberInfo } = payload;
      state.declaration.memberInfo[index] = updatedMemberInfo;
    },

    deleteMemberInfo: (state, { payload }) => {
      const updatedMemberInfo = [...state.declaration.memberInfo];
      updatedMemberInfo.splice(payload, 1);
      state.declaration.memberInfo = updatedMemberInfo;
    },

    updateDeclaration: (state, { payload }) => {
      state.declaration = { ...state.declaration, ...payload };
    },

    addNomineeInformation: (state, { payload }) => {
      // state.nomineeInformation = [...state.nomineeInformation, ...payload]
      state.nomineeInformation.nomineeInfos.push(payload);
    },
    deleteNominee: (state, { payload }) => {
      const updatedNominees = [...state.nomineeInformation];
      updatedNominees.splice(payload, 1);
      state.nomineeInformation.nomineeInfos = updatedNominees;
    },

    updateTransactionInfo: (state, { payload }) => {
      state.transactionInfo = { ...state.transactionInfo, ...payload };
    },
    updateRecommender: (state, { payload }) => {
      state.recommender = { ...state.recommender, ...payload };
    },
    updateServicesYouWant: (state, { payload }) => {
      state.servicesYouWant = { ...state.servicesYouWant, ...payload };
    },
    updateUploadDocuments: (state, { payload }) => {
      state.uploadDocuments = { ...state.uploadDocuments, ...payload };
    },
    updateUserAccountType: (state, {payload}) => {
      state.userAccountType = payload;
    },
    updateUserCountry: (state, {payload}) => {
      state.userCountry = payload;
    }
  },
});

export default KycDetailsSlice.reducer;
export const {
  updateVideoKyc,
  updateBasicInformation,
  deleteMemberInfo,
  editMemberInfo,
  updateApplicantDetails,
  updateAddressDetails,
  updateContactInformation,
  updateIdentificationDetailsIndividual,
  updateOccupationDetails,
  addFamilyDetails,
  deleteFamilyMember,
  editFamilyMember,
  updateLocation,
  addMemberInfo,
  updateDeclaration,
  addNomineeInformation,
  deleteNominee,
  updateTransactionInfo,
  updateRecommender,
  updateServicesYouWant,
  updateUploadDocuments,
  updateUserAccountType,
  updateUserCountry
} = KycDetailsSlice.actions;
