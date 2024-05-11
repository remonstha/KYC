import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    basicInformation: {
        date: '',
        accountType: '',
        currency: '',
        branchName: '',
        customerName: '',
        anticipatedYearlyTransaction: '',
        registeredAddress: '',
        registrationNumber: '',
        businessNature: '',
        registeredBS: '',
        registeredAD: '',
        pobox: '',
        permCountry: '', 
        permState: '', 
        permDistrict: '',
        panNumber: '',
        email: '',
        fax: '',
        website: '',
        phoneNumber1: '',
        phoneNumber2: '',
    },
    localAddress: {
        pobox: '',
        cityName: '',
        phoneNumber1: '',
        permCountry: '', // Assuming 'Select Country' is the default option
        permState: '', // Assuming 'Select State' is the default option
        permDistrict: '', // Assuming 'Select District' is the default option
        phoneNumber2: '',
        bankName: '',
        webAddress: '',
        email: '',
        otherBankAccounts: false // Assuming the default value for the checkbox is false
    },
    branch: {
        totalBranchesNepal: '',
        totalBranchesAbroad: '',
        data: [],

    },
    servicesYouWant: {
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
    location: {
        latitude: "",
        longitude: "",
        nearestLandmark:"",
        nearestBranch: "",
      },
    recommender: {
        titleSelect: "",
        otherSelect: "",
        Name: "",
        accountNO: "",
    },
    uploadDocuments: {
        applicantPhoto: null,
        registrationFront: null,
        registrationBack: null,
        organizationStamp: null,
        panRegistration: null,
        boardResolution: null,
        memorandumAndArticles: null,
        citizenshipOfAuthorized: null,
      },
}

const kycCorporateSlice = createSlice({
    name: "KycDetailsCorporate",
    initialState,
    reducers: {
        updateBasicInformation: (state, { payload }) => {
            state.basicInformation = { ...state.basicInformation, ...payload };
        },
        updateLocalAddress: (state, { payload }) => {
            state.localAddress = { ...state.localAddress, ...payload };
        },
        updateBranch: (state, { payload }) => {
            state.branch = { ...state.branch, ...payload };
        },
        addBranch: (state, { payload }) => {
            state.branch.data.push(payload)
        },
        updateServicesYouWant: (state, { payload }) => {
            state.servicesYouWant = { ...state.servicesYouWant, ...payload };
        },
        updateRecommender: (state, { payload }) => {
            state.recommender = { ...state.recommender, ...payload };
        },
        updateUploadDocuments: (state, { payload }) => {
            state.uploadDocuments = { ...state.uploadDocuments, ...payload };
        },
        updateLocationCorporate: (state, {payload}) => {
            state.location = { ...state.location, ...payload};
        }

    }
})

export default kycCorporateSlice.reducer;
export const { updateBasicInformation, updateLocalAddress, updateBranch, addBranch, updateServicesYouWant, updateLocationCorporate, updateRecommender, updateUploadDocuments } = kycCorporateSlice.actions;