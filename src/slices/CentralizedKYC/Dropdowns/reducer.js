import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // BasicInfo
  AccountTypeList: null,
  BranchList: null,
  SourceOfFunds: null,
  CurrencyList: null,

  // Address Info
  MunicipalityList: null,
  StateList: null,
  DistrictList: null,
  CountryList: null,

  //Identification Details
  IssuedPlace: null,

  // Occupation Details
  OccupationType: null,
  EstimatedAnnualIncome: null,
  NatureOfBusiness: null,

  //ServiceYouWant
  ModeOfDelivery: null,
  DebitCardType: null,
  Frequency: null,

  //FamilyDetails Modal
  Relationship: null,

  //Designation
  Designation: null,
};

const dropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    // Basic Info
    getAccountTypeList: (state, action) => {
      state.AccountTypeList = action.payload;
    },
    getBranchList: (state, action) => {
      state.BranchList = action.payload;
    },
    getSourceOfFundList: (state, action) => {
      state.SourceOfFunds = action.payload;
    },
    getCurrencyList: (state, action) => {
      state.CurrencyList = action.payload;
    },

    // Adress Info
    getCountryList: (state, action) => {
      state.CountryList = action.payload;
    },

    getMunicipalityList: (state, action) => {
      state.MunicipalityList = action.payload;
    },
    getStateList: (state, action) => {
      state.StateList = action.payload;
    },
    getDistrictList: (state, action) => {
      state.DistrictList = action.payload;
    },

    // Identification Details
    getIssuedPlaceList: (state, action) => {
      state.IssuedPlace = action.payload;
    },

    // Occupation Details
    getOccupationTypeList: (state, action) => {
      state.OccupationType = action.payload;
    },

    getEstimatedAnnualIncomeList: (state, action) => {
      state.EstimatedAnnualIncome = action.payload;
    },
    getNatureOfBusinessList: (state, action) => {
      state.NatureOfBusiness = action.payload;
    },

    // Sevices You Want
    getFrequencyList: (state, action) => {
      state.Frequency = action.payload;
    },

    getModeOfDeliveryList: (state, action) => {
      state.ModeOfDelivery = action.payload;
    },
    getDebitCardTypeList: (state, action) => {
      state.DebitCardType = action.payload;
    },

    // FamilyDetails Modal
    getRelationshipList: (state, action) => {
      state.Relationship = action.payload;
    },
    
    // Designation in corporate Kyc

    getDesignationList: (state, action) => {
      state.Designation = action.payload;
    }

  
  },
});

export const {
  // Basic Info
  getAccountTypeList,
  getBranchList,
  getSourceOfFundList,
  getCurrencyList,

  // Adress Info
  getMunicipalityList,
  getCountryList,
  getStateList,
  getDistrictList,

  // Identification Details
  getIssuedPlaceList,

  // Occupation Details
  getEstimatedAnnualIncomeList,
  getNatureOfBusinessList,
  getOccupationTypeList,

  // Sevices You Want
  getFrequencyList,
  getModeOfDeliveryList,
  getDebitCardTypeList,

  // FamilyDetails Modal
  getRelationshipList,

  // Designation in Corporate
  getDesignationList,
} = dropdownSlice.actions;

export default dropdownSlice.reducer;
