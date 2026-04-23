import api from "./api"

export const addCategory = async (data) => {
  try {
    const res = await api.post(`/category/addCategory.php`, data);
    return res.data;
  } catch (error) {
    console.error("FULL ERROR:", error);

    console.log("Response:", error.response);
    console.log("Data:", error.response?.data);
    console.log("Status:", error.response?.status);

    return {
      success: false,
      message: error.response?.data?.message || error.message
    };
  }
};
