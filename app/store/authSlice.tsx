// authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  email: string;
  otp: string | null; // Add otp for optional use, if needed
}

const initialState: AuthState = {
  email: "",
  otp: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setOtp(state, action: PayloadAction<string>) {
      state.otp = action.payload; // Optional, only if you want to store OTP
    },
    resetAuthState(state) {
      state.email = "";
      state.otp = null;
    },
  },
});

export const { setEmail, setOtp, resetAuthState } = authSlice.actions;
export default authSlice.reducer;
