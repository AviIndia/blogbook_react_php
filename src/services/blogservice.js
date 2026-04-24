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

export const getCategory = async ()=>{
  try {
    const res = await api.get(`category/getCategories.php`);
    return res.data;
  } catch (error) {
    console.error("FULL ERROR",error);
      console.log("Response:", error.response);
    console.log("Data:", error.response?.data);
    console.log("Status:", error.response?.status);

    return {
      success: false,
      message: error.response?.data?.message || error.message
    };
  }
}
export const postNewBlog = async (formData) => {
  const token = localStorage.getItem("token");

  console.log("SENDING TOKEN:", token); // 🔥 debug

  try {
    const res = await api.post("/blog/addBlog.php", formData, {
      headers: {
        Authorization: token,
      },
    });

    console.log("FULL RESPONSE:", res);
    console.log("BACKEND DATA:", res.data);
    console.log("SQL QUERY:", res.data?.query); // ✅ safe

    return res.data;

  } catch (error) {
    console.log("Error:", error);

    return {
      success: false,
      message: error.response?.data?.message || "Error occurred",
    };
  }
};