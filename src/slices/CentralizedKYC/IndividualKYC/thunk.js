import { addFamilyDetails, saveAddressDetails, saveApplicantDetails,appendNomineeInfoID, saveBasicInformation, saveContactInformation, saveDeclaration, saveIdentificationDetailsIndividual, saveLocation, saveOccupationDetails, saveVideoKyc, saveTransactionInfo, saveServicesYouWant, saveRecommender, appendFamilyDetailsID, addNomineeInformation, saveUploadDocuments } from "./reducer";
import axios from "axios";

const baseAPI = "http://api.centralkyc.ants.com.np/api";

const token = localStorage.getItem("token");
const headers = {
  Authorization: `Bearer ${token}`,
};

// // video Kyc
export const postVideoKycData = (data) => async (dispatch) => {
  console.log("video kyc dispatch data", data);

  try {

      const response = await axios.post(
        `${baseAPI}/IndividualKYC/submitVideoKyc`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }

      );

    const newData = {
      ...data,
      id: response.id, // Assuming the id is in the response.data object
    };

    console.log("response", response);

    if (newData) {
      dispatch(saveVideoKyc(newData));
    } else {
      console.log("Response failed");
    }
  } catch (error) {
    console.error("Error during API call:", error);
  }
};
// Basic information Kyc Individual
export const saveBasicInfo = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${baseAPI}/IndividualKYC/basicInfo`,
      data,
      { headers }
    );
    const newData = {
      ...data,
      id: response.id,
    };
    console.log("newData", newData);
    if (newData) {
      dispatch(saveBasicInformation(newData));
      console.log("response", response);
    } else {
      console.log("Response failed");
    }
  } catch (error) {
    console.error("Error during API call:", error);
  }
};

export const saveLocationInfo = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${baseAPI}/IndividualKYC/locationInfo`,
      data,
      { headers }
    );
    const newData = {
      ...data,
      id: response.id,
    };
    console.log("newData", newData);
    if (newData) {
      dispatch(saveLocation(newData));
      console.log("response", response);
    } else {
      console.log("Response failed");
    }
  } catch (error) {
    console.error("Error during API call:", error);
  }
};

export const saveDeclarationInfo = (data) => async (dispatch) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.post(
      `${baseAPI}/IndividualKYC/declarationsInfo`,
      data,
      { headers }
    );
    console.log("newData isssssssss", response);

    const newData = {
      ...data,
      id: response.savedDeclarationId,
    };
    if (newData) {
      dispatch(saveDeclaration(newData));
      console.log("response", response);
    } else {
      console.log("Response failed");
    }
  } catch (error) {
    console.error("Error during API call:", error);
  }
};


//personal information Kyc Individual

export const savePersonalInfo = (data) => async (dispatch) => {
  console.log("changes in personal", data);
  try {
    const response = await axios.post(
      `${baseAPI}/IndividualKYC/personalInfo`,
      data,
      { headers }
    );
    const newData = {
      ...data,
      id: response.id,
    };
    console.log("newData", newData);
    if (newData) {
      dispatch(saveApplicantDetails(newData));
      console.log("response", response);
    } else {
      console.log("Response failed");
    }
  } catch (error) {
    console.error("Error during API call:", error);
  }
};

//Address information Kyc Individual

export const saveAddressInfo = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${baseAPI}/IndividualKYC/addressInfo`,
      data,
      { headers }
    );
    const newData = {
      ...data,
      id: response.id,
    };
    console.log("newData", newData);
    if (newData) {
      dispatch(saveAddressDetails(newData));
      console.log("response", response);
    } else {
      console.log("Response failed");
    }
  } catch (error) {
    console.error("Error during API call:", error);
  }
};

//Contact information Kyc Individual
export const saveContactInfo = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${baseAPI}/IndividualKYC/contactInfo`,
      data,
      { headers }
    );
    const newData = {
      ...data,
      id: response.id,
    };
    console.log("newData", newData);
    if (newData) {
      dispatch(saveContactInformation(newData));
      console.log("response", response);
    } else {
      console.log("Response failed");
    }
  } catch (error) {
    console.error("Error during API call:", error);
  }
};

//Identification details Kyc Individual
export const saveIdentificationInfo = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${baseAPI}/IndividualKYC/identificationDetails`,
      data,
      { headers }
    );
    const newData = {
      ...data,
      id: response.id,
    };
    console.log("newData", newData);
    if (newData) {
      dispatch(saveIdentificationDetailsIndividual(newData));
      console.log("response", response);
    } else {
      console.log("Response failed");
    }
  } catch (error) {
    console.error("Error during API call:", error);
  }
};

//Occupation details Kyc Individual
export const saveOccupationInfo = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${baseAPI}/IndividualKYC/occupationDetails`,
      data,
      { headers }
    );

    const newData = {
      ...data,
      id: response.id,
    };
    console.log("newData", newData);
    if (newData) {
      dispatch(saveOccupationDetails(newData));
      console.log("response", response);
    } else {
      console.log("Response failed");
    }
  } catch (error) {
    console.error("Error during API call:", error);
  }
};

//Family details Kyc Individual
export const saveFamilyInfo = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${baseAPI}/IndividualKYC/familyDetails`,
      data,
      { headers }
    );
    console.log("Props Data", data)

      const newData = {
        ...data,
        id: response.id,
      };

    console.log("newData", response);
    if (response) {
      dispatch(addFamilyDetails(data));
      dispatch(appendFamilyDetailsID(newData));
      console.log("response", response);
    } else {
      console.log("Response failed");
    }
  } catch (error) {
    console.error("Error during API call:", error);
  }
};

export const saveNomineeInfo = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${baseAPI}/IndividualKYC/nomineesInfo`,
      data,
      { headers }
    );
    console.log("Props Data", data)
    
    const newData = {
      ...data,
      id: response.id,
    };
    console.log("newData", newData);
    if (newData) {
      dispatch(addNomineeInformation(data));
      dispatch(appendNomineeInfoID(newData));
    
      console.log("response", response);
    } else {
      console.log("Response failed");
    }
  } catch (error) {
    console.error("Error during API call:", error);
  }
};

export const postTransactionInfo = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${baseAPI}/IndividualKYC/transactionInfo`,
      data,
      { headers }
    );

    if (response) {
      const newData = {
        ...data,
        id: response.id,
      };
      dispatch(saveTransactionInfo(newData));
    } else {
      console.log("Response of transcation info individual failed.");
    }
  } catch (error) {
    console.error("Error during API call on transaction info", error);
  }
};

export const postServices = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${baseAPI}/IndividualKYC/serviceInfo`,
      data,
      {
        headers,
      }
    );

    if (response) {
      const newData = {
        ...data,
        id: response.id,
      };
      dispatch(saveServicesYouWant(newData));
    } else {
      console.log("Response of servies individual failed.");
    }
  } catch (error) {
    console.error(
      "Error during API call on services you want individual",
      error
    );
  }
};


export const postRecommender = (data) => async(dispatch) => {
    try {
        const response = await axios.post(`${baseAPI}/IndividualKYC/recommendorDetails`, data, { headers });

        if(response) {
            const newData = {
                ...data,
                id: response.id,
            }
            dispatch(saveRecommender(newData));
        } else {
            console.log("Response of recommender individual failed");
        }
    } catch (error) {
        console.error("Error during API call on recommender individual", error);
    }
}

export const postUploadDocuments = (data) => async(dispatch) => {
  try {
    const response = await axios.post(`${baseAPI}/IndividualKYC/uploadFiles`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    if(response) {
      let data = response;
      dispatch(saveUploadDocuments(data))
    } else {
      console.log("Response of upload documents individual failed.")
    }
  } catch(error) {
    console.error("Error during API call on upload documents individual", error);
  }
}
