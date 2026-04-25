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

export const getMyBlogs = async (user_id)=>{
  try {
    const res = await api.get(`/blog/getMyBlogs.php`,{params:{user_id}});
    return res.data;

  } catch (error) {
    console.error("LOG",error)
    return {success:false,data:[]}
  }
}

export const blogDetails = async (id) => {
  try {
    const res = await api.get("/blog/getBlogById.php", {
      params: { id },
    });

    console.log(res.data); // ✅ log first
    return res.data;       // ✅ then return
  } catch (error) {
    console.log("Error:", error.message);
    return { success: false, data: null };
  }
};