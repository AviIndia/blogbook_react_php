import api from "./api"

export const loginUser = async(email,password) =>{
    try {

        const res = await api.post(`/auth/login.php`,{email,password})
        return res.data;
        
        
    } catch (error) {
        console.error("LoginError",error)
        return {
      success: false,
      message: "Server error"
    };
    }
}



export const signUpadd = async (userData) => {
  try {
    const res = await api.post(`/auth/register.php`, userData);
    return res.data;
  } catch (error) {
    console.error("Signup Error", error);

    return {
      success: false,
      message: error.response?.data?.message || "Signup failed"
    };
  }
};