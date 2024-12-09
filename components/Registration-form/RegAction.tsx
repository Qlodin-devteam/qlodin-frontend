import {
    registrationPending,
    registrationSuccess,
    registrationError,
  } from "./RegistrationSlice";
  import { userRegistration } from "./reg-api";
  
  export const newUserRegistration = (formData) => async (dispatch) => {
    try {
      dispatch(registrationPending());
  
      const result = await userRegistration(formData);
      if (result.status === "success") {
        dispatch(registrationSuccess(result.message));
      } else {
        dispatch(registrationError(result.message));
      }
  
      console.log(result);
    } catch (error) {
      dispatch(registrationError(error.message));
    }
  };
  