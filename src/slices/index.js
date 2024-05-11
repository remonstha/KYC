import { combineReducers } from "redux";

// Front
import LayoutReducer from "./layouts/reducer";

// Authentication
import LoginReducer from "./auth/login/reducer";
import AccountReducer from "./auth/register/reducer";
import ForgetPasswordReducer from "./auth/forgetpwd/reducer";
import ProfileReducer from "./auth/profile/reducer";

import authReducer from "./CentralizedKYC/authentication/reducer";

//kyc
import KycDetailsReducer from "../primary-setup/slices/kycDetails.slice";
import selectionReducer from "../primary-setup/slices/selection.slice";
import KycMinorReducer from "../primary-setup/slices/KycMinor.slice";
import kycCorporateReducer from "../primary-setup/slices/kycCorporate.slice";
import dropdownReducer from "./CentralizedKYC/Dropdowns/reducer";


// API Key
import APIKeyReducer from "./apiKey/reducer";
import KycNegListReducer from "../primary-setup/slices/KycNegList.slice";
import ecddFormReducer from "../primary-setup/slices/ecddForm.slice";
import indKycReducer from "./CentralizedKYC/IndividualKYC/reducer";

const rootReducer = combineReducers({
  Layout: LayoutReducer,
  Login: LoginReducer,
  Account: AccountReducer,
  ForgetPassword: ForgetPasswordReducer,
  Profile: ProfileReducer,
  APIKey: APIKeyReducer,
  Auth: authReducer,
  Dropdown: dropdownReducer,
  IndKyc : indKycReducer,

  KycDetails: KycDetailsReducer,
  KycMinor: KycMinorReducer,
  KycCorporate: kycCorporateReducer,
  KycNegList: KycNegListReducer,
  Selection: selectionReducer,
  EcddForm: ecddFormReducer,

});

export default rootReducer;
