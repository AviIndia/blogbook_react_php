import { useContext, useState } from "react";
import { loginUser, signUpadd } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const Login = () => {
  const { login } = useContext(AuthContext)

  const navigate = useNavigate()
 const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [signUp,setSignup] = useState({
    user_name:"",
    email:"",
    dob:"",
    password:""
  })

  // ✅ FIXED handleChange
  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,          // 🔥 keep old values
      [name]: value
    }));
  }

  // ✅ Handle Submit
  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await loginUser(form.email, form.password);

    if (res.success) {
      console.log(res.user);
       login(res.user); // 🔥 this is MUST
      // 🔐 store token
      localStorage.setItem("token", res.user.token);
      localStorage.setItem("user", JSON.stringify(res.user));

      alert("Login successful");
      navigate("/profile");
    } else {
      alert(res.message);
    }
  };


  function handleSignup(e)
  {
    const {name,value} = e.target;
    setSignup((prev)=>({
      ...prev,
      [name]:value
    }))
  }

const postSignup = async (e)=>{
  e.preventDefault();
  const res = await signUpadd(signUp);
  if(res.success)
  {
    alert("Blog Member Added successfully!")
  }
  else
  {
    alert(res.message)
  }
}
  
  return (
    <div className="heading-page header-text">
      <section className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-content">
                <h4>login in / sign up</h4>
                <h2>more login / signup</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-5">
        <div className="row">
          {/* LOGIN */}
          <div className="col-lg-6">
            <div className="card p-4 shadow">
              <h3 className="mb-3">Login</h3>

           

              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label>Email</label>
                  <input type="email" name="email"  value={form.email} onChange={handleChange} className="form-control" />
                </div>

                <div className="mb-3">
                  <label>Password</label>
                  <input type="password" name="password" value={form.password} onChange={handleChange} className="form-control"/>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
            </div>
          </div>

          {/* SIGN UP */}
          <div className="col-lg-6">
            <div className="card p-4 shadow">
              <h3 className="mb-3">Sign Up</h3>

            
              <form onSubmit={postSignup}>
                <div className="mb-3">
                  <label>Name</label>
                  <input
                    type="text"
                    name="user_name"
                    className="form-control"
                    value={signUp.user_name}
                    onChange={handleSignup}
              
                  />
                </div>

                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={signUp.email}
                    onChange={handleSignup}
                  />
                </div>

                <div className="mb-3">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    className="form-control"
                  value={signUp.dob} onChange={handleSignup}
                  />
                </div>

                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={signUp.password}
                    onChange={handleSignup}
                  />
                </div>

                <button type="submit" className="btn btn-success w-100">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
