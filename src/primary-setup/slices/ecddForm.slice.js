import { createSlice } from "@reduxjs/toolkit";

const initialState ={ 
    ecddForm: {
    customerName: '',
    accountType: '',
    cifNumber: '',
    accountNumber: '',
    purposeOfAccountOpening: '',
    accountOpenDate: '',
    occupation: '',
    expectedAnnualIncome: '',
    anticipatedVolumeOfTransaction: '',
    reasonOfHighRiskCategorization: '',
    blackListedDate: '',
    blackListRemovalDate: '',
    reasonForBlacklisting: '',
    screeningID1: '',
    screeningID2: '',
    screeningIDbeneficialOwner: '',
    matchResultDetail: '',
    riskCategorization: '',
    ecddConductedByPosition: '',
    ecddVerifiedByPosition: '',
    ecddApprovedByPosition: '',
    ecddConductedByDate: '',
    ecddVerifiedByDate: '',
    ecddApprovedByDate: '',
    conductingScreening: false,
    screeningOfBeneficialOwner: false,
    resultScreening: false,
    screeningResult: false,
    familyMemberScreening: false,
    consent1: false,
    consent2: false,
    consent3: false,
    consent4: false,
    consent1remarks: "",
    consent2remarks: "",
    consent3remarks: "",
    consent4remarks: "",
    memberInfo: [],
    },
};

const EcddFormSlice = createSlice({
    name: "EcddForm",
    initialState,
    reducers: {
        updateEcddForm: (state, {payload}) => {
            state.ecddForm = {...state.ecddForm, ...payload};
        },

        addMemberInfo: (state, {payload} ) => {
            state.ecddForm.memberInfo.push(payload);
        },
        editMemberInfo: (state, { payload }) => {
            // console.log("this is payload", payload);
            const { index, editedMemberData } = payload;
            state.ecddForm.memberInfo[index] = editedMemberData;
          },
      
          deleteMemberInfo: (state, { payload }) => {
            const updated = [...state.ecddForm.memberInfo];
            updated.splice(payload, 1);
            state.ecddForm.memberInfo = updated;
          },

    },
});

export default EcddFormSlice.reducer;
export const { updateEcddForm, editMemberInfo, addMemberInfo, deleteMemberInfo } = EcddFormSlice.actions; 