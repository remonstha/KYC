import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    KycSelectionIndividual: 'VideoKyc',
    kycSelectionIndividualSubmit: 'basicInformation',
    kycSelectionCorporate: 'uploadKycForm',
    kycSelectionMinor: 'VideoKycMinor',

}

const SelectionSlice = createSlice({
    name: 'Selection',
    initialState,
    reducers: {
        setKycSelectionIndividual: (state, {payload}) => {
            state.KycSelectionIndividual = payload;
        },
        setKycSelectionIndividualSubmit: (state, {payload}) => {
            state.kycSelectionIndividualSubmit = payload;
        },
        setKycSelectionCorporate : (state, {payload}) => {
            state.kycSelectionCorporate = payload;
        },
        setKycSelectionMinor : (state, {payload}) => {
            state.kycSelectionMinor = payload;
        }
    }
})

export const {setKycSelectionIndividual, setKycSelectionIndividualSubmit, setKycSelectionCorporate, setKycSelectionMinor} = SelectionSlice.actions;
export default SelectionSlice.reducer;