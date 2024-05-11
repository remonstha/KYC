import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  //Video Kyc
  videoKYC: {
    IsRequestVideoKYC: "",
    VideoKYCLink: "",
    bankFiles: null,
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
    title: null,
    // otherSelect: "",
    maritalStatus: null,
    gender: null,
    // otherGender: "",
    firstName: "",
    middleName: "",
    lastName: "",
    nationality: "",
    dateOfBirthAD: "",
    dateOfBirthBS: "",
    education: "",
    familySize: "",
    // guardianName: "",
    // guardianRelationship: "",
    fathersName: "",
    mothersName: "",
    grandfathersName: "",
    grandmothersName: "",
    husbandorWifeName: "",
  },
  addressDetails: {
    permanentAddress: {
      country: "",
      state: "",
      district: "",
      municipality: "",
      wardNo: "",
      toleStreet: "",
      houseNo: "",
    },
    temportemporaryAddress: {
      country: "",
      state: "",
      district: "",
      municipality: "",
      wardNo: "",
      toleStreet: "",
      houseNo: "",
    },
    officeAddress: {
      country: "",
      state: "",
      district: "",
      municipality: "",
      wardNo: "",
      toleStreet: "",
      houseNo: "",
    },
    webAddress: "",
    officeEmail: "",
  },
  contactInformation: {
    mobileNo1: null,
    mobileNo2: null,
    faxNumber: null,
    residenceLandline: null,
    officeLandline: null,
    email: "",
    socialMedia: "",
    nonResName: "",
    nonResMobileNo1: "",
    address1: "",
    relationship1: "",
    landlineNo1: null,
    nonResName2: "",
    nonResMobileNo2: null,
    address2: "",
    relationship2: "",
    landlineNo2: "",
    bankName: "",
    bankAccNo: null,
    accountType: "",
    facilities: "",
  },
  identificationDetailsIndividual: {
    identificationType: null,
    // otherIdentificationType: "",
    idNumber: "",
    issuePlace: "",
    issuedBy: "",
    issuedDate: "",
    expiryDate: "",
    panNumber: "",
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
    positionAssociation: "",
    institutionName: "",

    additionaInformation: "",

    isCEOOfBanks: false, // Checkbox initial value
    isCrimeHistory: false, // Checkbox initial value
    isFormalSanction: false, // Checkbox initial value
    isNotToUseAccountForMoneyLaundering: false, // Checkbox initial value
    isNotBeUsedByAnotherPerson: false, // Checkbox initial value
    isAgreeToNotifyTheBank: false, // Checkbox initial
    declarationInfo: [],
  },

  nomineeInformation: {
    nomineeInfos: [],
  },

  servicesYouWant: {
    frequency: 0,
    modeOfDelivery: 0,
    isStatementPrintNepaliCalendar: false,
    isStatementPrintEnglishCalendar: false,
    debitCardType: 0,
    serviceToggles: {
      isDebitCardService: false,
      isOnlineBanking: false,
      isPhonePay: false,
      isMobileBanking: false,
      isTransactionAlert: false,
      isSMSBanking: false,
      isMerchantQR: false,
    },
  },

  transactionInfo: {
    deposit1: 0,
    withDrawal1: 0,

    deposit2: 0,
    withDrawal2: 0,
  },
  recommender: {
    title: null,
    recommenderAccountNumber: null,
    recommenderAccountName: "",
  },

  uploadDocuments: {
    
  },
};

const indKycSlice = createSlice({
  name: "indKyc",
  initialState,
  reducers: {
    saveVideoKyc: (state, action) => {
      console.log("videpo kyc payload", action.payload);
      state.videoKYC = { ...state.videoKYC, ...action.payload };
    },
    saveBasicInformation: (state, { payload }) => {
      state.basicInformation = { ...state.basicInformation, ...payload };
    },
    saveApplicantDetails: (state, { payload }) => {
      state.applicantDetails = { ...state.applicantDetails, ...payload };
    },

    saveAddressDetails: (state, { payload }) => {
      state.addressDetails = { ...state.addressDetails, ...payload };
    },

    saveContactInformation: (state, { payload }) => {
      state.contactInformation = { ...state.contactInformation, ...payload };
    },
    saveIdentificationDetailsIndividual: (state, { payload }) => {
      state.identificationDetailsIndividual = {
        ...state.identificationDetailsIndividual,
        ...payload,
      };
    },
    saveOccupationDetails: (state, { payload }) => {
      state.occupationDetails = { ...state.occupationDetails, ...payload };
    },
    appendFamilyDetailsID: (state, { payload }) => {
      state.familyDetails = { ...state.familyDetails, ...payload };
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
      const saved = [...state.familyDetails.family];
      saved.splice(payload, 1);
      state.familyDetails.family = saved;
    },

    saveLocation: (state, { payload }) => {
      state.location = { ...state.location, ...payload };
    },

    // member information from the Table in Declaration Form
    addMemberInfo: (state, { payload }) => {
      state.declaration.declarationInfo.push(payload);
    },

    editMemberInfo: (state, { payload }) => {
      const { index, savedMemberInfo } = payload;
      state.declaration.declarationInfo[index] = savedMemberInfo;
    },

    deleteMemberInfo: (state, { payload }) => {
      const savedMemberInfo = [...state.declaration.memberInfo];
      savedMemberInfo.splice(payload, 1);
      state.declaration.memberInfo = savedMemberInfo;
    },

    saveDeclaration: (state, { payload }) => {
      state.declaration = { ...state.declaration, ...payload };
    },

    addNomineeInformation: (state, { payload }) => {
      // state.nomineeInformation = [...state.nomineeInformation, ...payload]
      state.nomineeInformation.nomineeInfos.push(payload);
    },
    appendNomineeInfoID: (state, { payload }) => {
      state.nomineeInformation = { ...state.nomineeInformation, ...payload };
    },
    deleteNominee: (state, { payload }) => {
      const savedNominees = [...state.nomineeInformation];
      savedNominees.splice(payload, 1);
      state.nomineeInformation = savedNominees;
    },

    saveTransactionInfo: (state, { payload }) => {
      state.transactionInfo = { ...state.transactionInfo, ...payload };
    },
    saveRecommender: (state, { payload }) => {
      state.recommender = { ...state.recommender, ...payload };
    },
    saveServicesYouWant: (state, { payload }) => {
      state.servicesYouWant = { ...state.servicesYouWant, ...payload };
    },
    saveUploadDocuments: (state, { payload }) => {
      state.uploadDocuments = { ...state.uploadDocuments, ...payload };
    },
  },
});

export default indKycSlice.reducer;
export const {
  saveVideoKyc,
  saveBasicInformation,
  deleteMemberInfo,
  editMemberInfo,
  saveApplicantDetails,
  saveAddressDetails,
  saveContactInformation,
  saveIdentificationDetailsIndividual,
  saveOccupationDetails,
  addFamilyDetails,
  deleteFamilyMember,
  editFamilyMember,
  saveLocation,
  addMemberInfo,
  saveDeclaration,
  addNomineeInformation,
  appendNomineeInfoID,
  deleteNominee,
  saveTransactionInfo,
  saveRecommender,
  saveServicesYouWant,
  appendFamilyDetailsID,
  saveUploadDocuments,
} = indKycSlice.actions;
