import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  basicInformation: {
    accountType: "",
    currencyType: "",
    date: "",
    branchName: "",
    anticipatedYearlyTransaction: "",
    purposeOfAccountOpening: "",
    sourceOfFunds: "",
  },
  personalDetails: {
    titleSelect: "",
    otherSelect: "",
    maritalSelect: "",
    genderSelect: "",
    otherGender: "",
    firstName: "",
    middleName: "",
    lastName: "",
    nationality: "",
    DOB: "",
    DOBN: "",
    education: "",
    familySize: "",
    guardianName: "",
    guardianRelationship: "",
    fatherName: "",
    motherName: "",
    grandFatherName: "",
    grandMotherName: "",
    wifeName: "",
  },
  familyDetails: [],

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

  selectedGuardians: [],

  identificationDetailsMinor: {
    identificationType: "",
    minorId: "",
    issuedPlace: "",
    issuedBy: "",
    issuedDate: "",
    expiryDate: "",
  },

  transactionInfo: {
    deposit: "",
    withdrawl: "",
    daydeposit: "",
    daywithdrawl: "",
  },
  location: {
    latitude: "",
    longitude: "",
    nearestLandmark: "",
    nearestBranch: "",
  },
  declaration: {
    position: "",
    institution: "",
    information: "",
    declaration: false, // Checkbox initial value
    declaration2: false, // Checkbox initial value
    declaration3: false, // Checkbox initial value
    term: false, // Checkbox initial value
    term1: false, // Checkbox initial value
    term2: false, // Checkbox initial
    memberInfo: [],
  },
  nomineeInformationMinor: [],
  servicesMinor: {
    frequency: "",
    modeOfDelivery: "",
    statementPrint: [],
    debitCardService: false,
    debitCardType: "",
    onlineBanking: false,
    mobileBanking: false,
    smsBanking: false,
    phonePay: false,
    transactionAlert: false,
    merchantQR: false,
  },

  recommender: {
    titleSelect: "",
    otherSelect: "",
    Name: "",
    accountNO: "",
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

};

const KycMinorSlice = createSlice({
  name: "KycMinor",
  initialState,
  reducers: {
    updateBasicInformation: (state, { payload }) => {
      state.basicInformation = { ...state.basicInformation, ...payload };
    },
    updatePersonalDetailsMinor: (state, { payload }) => {
      state.personalDetails = { ...state.personalDetails, ...payload };
    },
    addFamilyDetailMinor: (state, { payload }) => {
      state.familyDetails.push(payload)
    },

    editFamilyMemberMinor: (state, { payload }) => {
      const { index, editedMemberData } = payload;
      state.familyDetails[index] = editedMemberData;
    },
    deleteFamilyMemberMinor: (state, { payload }) => {
      const updated = [...state.familyDetails];
      updated.splice(payload, 1);
      state.familyDetails = updated;
    },

    updateAddressDetailsMinor: (state, { payload }) => {
      state.addressDetails = { ...state.addressDetails, ...payload }
    },

    updateContactInformationMinor: (state, { payload }) => {
      state.contactInformation = { ...state.contactInformation, ...payload }
    },

    updateSelectedGuardians: (state, { payload }) => {
      state.selectedGuardians.push(payload);
    },

    removeGuardian: (state, { payload }) => {
      state.selectedGuardians = state.selectedGuardians.filter(
        (guardian) => guardian.id !== payload.id
      );
    },
    

    updateIdentificationDetailsMinor: (state, { payload }) => {
      state.identificationDetailsMinor = { ...state.identificationDetailsMinor, ...payload }
    },

    updateTransactionInfoMinor: (state, { payload }) => {
      state.transactionInfo = { ...state.transactionInfo, ...payload }
    },

    updateServicesMinor: (state, { payload }) => {
      state.servicesMinor = { ...state.servicesMinor, ...payload }
    },

    updateRecommenderMinor: (state, { payload }) => {
      state.recommender = { ...state.recommender, ...payload }
    },
    addNomineeInformationMinor: (state, { payload }) => {
      state.nomineeInformationMinor.push(payload);
    },

    deleteNomineeMinor: (state, { payload }) => {
      const updatedNominees = [...state.nomineeInformationMinor];
      updatedNominees.splice(payload, 1);
      state.nomineeInformationMinor = updatedNominees;
    },

    addMemberInfoMinor: (state, { payload }) => {
      state.declaration.memberInfo.push(payload);
    },

    editMemberInfoMinor: (state, { payload }) => {
      const { index, updatedMemberInfo } = payload;
      state.declaration.memberInfo[index] = updatedMemberInfo;
    },

    deleteMemberInfoMinor: (state, { payload }) => {
      const updatedMemberInfo = [...state.declaration.memberInfo];
      updatedMemberInfo.splice(payload, 1);
      state.declaration.memberInfo = updatedMemberInfo;
    },

    updateDeclarationMinor: (state, { payload }) => {
      state.declaration = { ...state.declaration, ...payload };
    },
    updateUploadDocuments: (state, { payload }) => {
      state.uploadDocuments = { ...state.uploadDocuments, ...payload };
    },

    updateLocationMinor: (state, { payload }) => {
      state.location = { ...state.location, ...payload };
    }



  },

});

export default KycMinorSlice.reducer;
export const { updateDeclarationMinor, deleteMemberInfoMinor, updateLocationMinor, editMemberInfoMinor, addMemberInfoMinor, updateBasicInformation, updateSelectedGuardians, removeGuardian, addNomineeInformationMinor, deleteNomineeMinor, updateRecommenderMinor, updateServicesMinor, updateTransactionInfoMinor, updateIdentificationDetailsMinor, updateContactInformationMinor, updatePersonalDetailsMinor, addFamilyDetailMinor, deleteFamilyMemberMinor, editFamilyMemberMinor, updateAddressDetailsMinor, updateUploadDocuments } = KycMinorSlice.actions;