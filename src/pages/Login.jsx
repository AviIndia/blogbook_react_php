
const Login = () => {
  


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

           

              <form >
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                   
                  />
                </div>

                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    
                  />
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

            
              <form >
                <div className="mb-3">
                  <label>Name</label>
                  <input
                    type="text"
                    name="user_name"
                    className="form-control"
              
                  />
                </div>

                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    
                  />
                </div>

                <div className="mb-3">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    className="form-control"
                  
                  />
                </div>

                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    
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
