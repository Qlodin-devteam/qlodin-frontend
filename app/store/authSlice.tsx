import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  email: string | null;
}

const initialState: AuthState = {
  email: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    clearAuthState: (state) => {
      state.email = null;
    },
  },
});

export const { setEmail, clearAuthState } = authSlice.actions;
export default authSlice.reducer;
