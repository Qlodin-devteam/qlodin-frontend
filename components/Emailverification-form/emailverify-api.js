import axios from "axios";

export const userRegistrationVerification = async (formData) => {
  try {
    const response = await axios.post(
      "https://qlodin-backend.onrender.com/api/user/auth/verify-email",
      formData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data; 
  } catch (error) {
    throw new Error(error.response?.data?.message || "Network error");
  }
};
