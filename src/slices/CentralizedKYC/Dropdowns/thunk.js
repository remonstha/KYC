import {
  getAccountTypeList,
  getDistrictList,
  getBranchList,
  getSourceOfFundList,
  getCurrencyList,
  getStateList,
  getMunicipalityList,
  getIssuedPlaceList,
  getOccupationTypeList,
  getEstimatedAnnualIncomeList,
  getNatureOfBusinessList,
  getDebitCardTypeList,
  getModeOfDeliveryList,
  getFrequencyList,
  getRelationshipList,
  getProvinceList,
  getCountryList,
  getDesignationList,
} from "./reducer";
import axios from "axios";

const baseAPI = "http://api.centralkyc.ants.com.np/api";

function getHeaders() {
  const token = localStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`,
  };
}


/*--------------------------------------Basic Information--------------------------------------*/

// Account Type Dropdown
export const fetchAccountTypeList = () => async (dispatch) => {
  const headers = getHeaders();
  try {
    const response = await axios.get(`${baseAPI}/AccountType`, {headers});
    dispatch(getAccountTypeList(response));
    console.log("Account Types Response From Api",response);
  }
  catch (error) {
    console.log("Account Types Response From Api", error);
  }
}


// export const fetchAccountTypeList = () => async (dispatch) => {


//   try {
//     const response = await axios.get(`${baseAPI}/AccountType`, {headers});
//     dispatch(getAccountTypeList(response));
//     console.log("Account Types Response From Api",response);
//   } catch (error) {
//     console.log("Account Types Response From Api", error);
//   }
// };

// Branch List Dropdown
export const fetchBranchList = () => async (dispatch) => {
  const headers = getHeaders();

  try {
    const response = await axios.get(`${baseAPI}/BankList`, {headers});
    dispatch(getBranchList(response));
    console.log("Branch List Response From Api",response);
  } catch (error) {
    console.log("Branch List Response From Api", error);
  }
};

// Source of Fund Dropdown
export const fetchSourceOFFundList = () => async (dispatch) => {
  const headers = getHeaders();

  try {
    const response = await axios.get(`${baseAPI}/FundList`, {headers});
    dispatch(getSourceOfFundList(response));
    console.log("Source of Fund List Response From Api",response);
  } catch (error) {
    console.log("Source of Fund List Response From Api", error);
  }
};

// Currency List Dropdown
export const fetchCurrencyList = () => async (dispatch) => {
  const headers = getHeaders();

  try {
    const response = await axios.get(`${baseAPI}/CurrencyList`, {headers});
    dispatch(getCurrencyList(response));
    console.log("Currency List Response From Api",response);
  } catch (error) {
    console.log("Currency List Response From Api", error);
  }
};


/*--------------------------------------Address Details--------------------------------------*/

// Country List
export const fetchCountryList = () => async (dispatch) => {
  const headers = getHeaders();
  try {
    const response = await axios.get(`${baseAPI}/CountryList`, {headers});
    dispatch(getCountryList(response));
    console.log("Country List Response From Api",response);
  } catch (error) {
    console.log("Country List Response From Api", error);
  }
};

// District List
export const fetchDistrictList = () => async (dispatch) => {
  const headers = getHeaders();
    try {
      const response = await axios.get(`${baseAPI}/District`, {headers});
      dispatch(getDistrictList(response));
      console.log("District List Response From Api",response);
    } catch (error) {
      console.log("District List Response From Api", error);
    }
  };

  // State List
export const fetchStateList = () => async (dispatch) => {
  const headers = getHeaders();
  try {
    const response = await axios.get(`${baseAPI}/State`, {headers});
    dispatch(getStateList(response));
    console.log("State List Response From Api",response);
  } catch (error) {
    console.log("State List Response From Api", error);
  }
};

 // Municipality List
 export const fetchMunicipalityList = () => async (dispatch) => {
  const headers = getHeaders();
  try {
    const response = await axios.get(`${baseAPI}/Municipality`, {headers});
    dispatch(getMunicipalityList(response));
    console.log("Municipality List Response From Api",response);
  } catch (error) {
    console.log("Municipality List Response From Api", error);
  }
};

/*--------------------------------------Identification Details--------------------------------------*/


 // Issued Place List
 export const fetchIssuedPlaceList = () => async (dispatch) => {
  const headers = getHeaders();
  try {
    const response = await axios.get(`${baseAPI}/IssuedPlaceList`, {headers});
    dispatch(getIssuedPlaceList(response));
    console.log("IssuedPlace List Response From Api",response);
  } catch (error) {
    console.log("IssuedPlace List Response From Api", error);
  }
};

/*--------------------------------------Occupation Details--------------------------------------*/


 // Occupation Type
 export const fetchOccupationTypeList = () => async (dispatch) => {
  const headers = getHeaders();
  try {
    const response = await axios.get(`${baseAPI}/OccupationType`, {headers});
    dispatch(getOccupationTypeList(response));
    console.log("OccupationType List Response From Api",response);
  } catch (error) {
    console.log("OccupationType List Response From Api", error);
  }
};

 // Estimated Annual Income Type
 export const fetchEstimatedAnnualIncomeList = () => async (dispatch) => {
  const headers = getHeaders();
  try {
    const response = await axios.get(`${baseAPI}/EstimatedAnnualIncome`, {headers});
    dispatch(getEstimatedAnnualIncomeList(response));
    console.log("EstimatedAnnualIncome List Response From Api",response);
  } catch (error) {
    console.log("EstimatedAnnualIncome List Response From Api", error);
  }
};

 // Nature of Business
 export const fetchNatureOfBusinessList = () => async (dispatch) => {
  const headers = getHeaders();
  try {
    const response = await axios.get(`${baseAPI}/NatureOfBusiness`, {headers});
    dispatch(getNatureOfBusinessList(response));
    console.log("NatureOfBusiness List Response From Api",response);
  } catch (error) {
    console.log("NatureOfBusiness List Response From Api", error);
  }
};

/*--------------------------------------Services You Want Details--------------------------------------*/

// Frequency
export const fetchFrequencyList = () => async (dispatch) => {
  const headers = getHeaders();
  try {
    const response = await axios.get(`${baseAPI}/FrequencyList`, {headers});
    dispatch(getFrequencyList(response));
    console.log("Frequency List Response From Api",response);
  } catch (error) {
    console.log("Frequency List Response From Api", error);
  }
};

// Mode of Delivery
export const fetchModeOfDeliveryList = () => async (dispatch) => {
  const headers = getHeaders();
  try {
    const response = await axios.get(`${baseAPI}/ModeOfDelivery`, {headers});
    dispatch(getModeOfDeliveryList(response));
    console.log("ModeOfDelivery List Response From Api",response);
  } catch (error) {
    console.log("ModeOfDelivery List Response From Api", error);
  }
};

// DebitCard Type
export const fetchDebitCardTypeList = () => async (dispatch) => {
  const headers = getHeaders();
  try {
    const response = await axios.get(`${baseAPI}/DebitCardTypeList`, {headers});
    dispatch(getDebitCardTypeList(response));
    console.log("DebitCardType List Response From Api",response);
  } catch (error) {
    console.log("DebitCardType List Response From Api", error);
  }
};

/*--------------------------------------Family Details Modal--------------------------------------*/

// RelationShip Type
export const fetchRelationshipList = () => async (dispatch) => {
  const headers = getHeaders();
  try {
    const response = await axios.get(`${baseAPI}/GuardianRelation`, {headers});
    dispatch(getRelationshipList(response));
    console.log("Relationship List Response From Api",response);
  } catch (error) {
    console.log("Relationship List Response From Api", error);
  }
};

/*--------------------------------------Corporate Modal--------------------------------------*/

// Designation List
export const fetchDesignationList = () => async (dispatch) => {
  const headers = getHeaders();
  try {
    const response = await axios.get(`${baseAPI}/Designations`, {headers});
    dispatch(getDesignationList(response));
    console.log("Designation List Response From Api",response);
  } catch (error) {
    console.log("Designation List Response From Api", error);
  }
};
