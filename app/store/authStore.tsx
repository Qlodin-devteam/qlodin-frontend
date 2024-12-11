import { create } from "zustand";
import axios from "axios";

const API_URL = "https://qlodin-backend.onrender.com/api/user/auth";

const apiClient = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,
  message: null,

  signup: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await apiClient.post("/register", { email, password });
      set({ user: response.data.user, isAuthenticated: true, isLoading: false });
    } catch (error) {
      console.error("Signup error:", error); // Log errors
      set({ error: error.response?.data?.message || "Network Error", isLoading: false });
    }
  },

  verifyEmail: async (code) => {
    set({ isLoading: true, error: null });
    try {
      const response = await apiClient.post("/verify-email", { code }); 
      set({ 
        user: response.data.user, 
        isAuthenticated: true, 
        isLoading: false 
      });
      return response.data;
    } catch (error) {
      console.error("Verify Email error:", error); // Log errors
      set({ error: error.response?.data?.message || "Error verifying email", isLoading: false });
      throw error;
    }
  },

  profilesetup: async (firstName, lastName,userName,dateOfBirth,mobileNumber) => {
    set({ isLoading: true, error: null });
    try {
      const response = await apiClient.post("/profile-setup", { firstName, lastName,userName,dateOfBirth,mobileNumber });
      set({ user: response.data.user, isAuthenticated: true, isLoading: false });
    } catch (error) {
      console.error("Signup error:", error); // Log errors
      set({ error: error.response?.data?.message || "Network Error", isLoading: false });
    }
  },
  
  
  
  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await apiClient.post("/login", { email, password });
      set({ user: response.data.user, isAuthenticated: true, isLoading: false });
    } catch (error) {
      console.error("Signup error:", error); // Log errors
      set({ error: error.response?.data?.message || "Network Error", isLoading: false });
    }
  },
}));
