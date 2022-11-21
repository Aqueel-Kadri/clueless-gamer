// import { dummyData } from "../../config/dummyData";
import { USER_STATE_CHANGE } from "../constants";

export const initialLoadingAction = () => (dispatch) => {
  dispatch({
    type: USER_STATE_CHANGE,
    loaded: true,
    currentUser: null,
  });
};

export const loginAction = (formData) => (dispatch) => {
  // const users = dummyData;
  //   const emailList = users.map((e) => e.email);
  //   const passwordList = users.map((e) => e.phone);
  //   const email = formData.eamil;
  //   const password = formData.password;

  //   if (email && password) {
  //     const emailIndex = emailList.indexOf(email);
  //     if (emailIndex !== -1) {
  //     }
  //   }
  dispatch({
    type: USER_STATE_CHANGE,
    loaded: true,
    currentUser: formData,
  });
};
export const registerAction = (formData) => (dispatch) => {
  dispatch({
    type: USER_STATE_CHANGE,
    loaded: true,
    currentUser: formData,
  });
};
