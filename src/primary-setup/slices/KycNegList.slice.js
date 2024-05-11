import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    negListInfo: {
        firstNameNegative: '',
            middleNameNegative: '',
            lastNameNegative: '',
            nationalityNegative: '',
            fatherNameNegative: '',
            motherNameNegative: '',
            grandFatherNameNegative: '',
            grandMotherNameNegative: '',
            wifeNameNegative: '',
            mobNumber: '',
            idNumberNegative: '',
            issuedPlaceNegative: '',
            issuedByNegative: '',
            issuedDateNegative: '',
            expiryDateNegative: '',
            permCountry: '',
            permState: '',
            permDistrict: '',
            permMunicipality: '',
            permWardNo: '',
            permToleStreet: '',
            permHouseNo: '',
            tempCountry: '',
            tempState: '',
            tempDistrict: '',
            tempMunicipality: '',
            tempWardNo: '',
            tempToleStreet: '',
            tempHouseNo: '',
            dragAndDropKyc:[],
    },
};
const KycNegSlice = createSlice({
    name: "KycNegList",
    initialState,
    reducers:{
        updateNeglist: (state, { payload }) => {
            state.negListInfo = { ...state.negListInfo, ...payload };
          },
    }
});

export default KycNegSlice.reducer;
export const {updateNeglist} =  KycNegSlice.actions;