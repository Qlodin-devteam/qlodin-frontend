import { configureStore } from "@reduxjs/toolkit";

// import loginReducer from "./components/login/loginSlice";
// import userReducer from "./pages/dashboard/userSlice";
import registrationReducer from "../components/Registration-form/RegistrationSlice";
// import passwordReducer from "./components/password-reset/passwordSlice";

const store = configureStore({
	reducer: {
	
		// login: loginReducer,
		// user: userReducer,
		registration: registrationReducer,
		// password: passwordReducer,
	},
});

export default store;