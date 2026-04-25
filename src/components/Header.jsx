
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";


const Header = () => {

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate()

  return (
    <>
      <header className="">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* LOGO */}
            <NavLink className="navbar-brand" to="/">
              <h2>Blog Book<em>.</em></h2>
            </NavLink>

            {/* TOGGLER */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
                </li>

                {/* CATEGORY DROPDOWN */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Category
                  </a>

                  <ul className="dropdown-menu">
                    <li><NavLink className="dropdown-item" to="/category/tech">Tech</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/category/travel">Travel</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/category/lifestyle">Lifestyle</NavLink></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>

                {user ? (
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                      style={{ cursor: "pointer" }}
                    >
                      {user.user_name}
                    </a>

                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <button onClick={() => navigate("/profile")} className="dropdown-item">
                          My Profile
                        </button>
                      </li>

                      <li>
                        <button onClick={() => navigate("/createBlog")} className="dropdown-item">
                          Create New Blog
                        </button>
                      </li>

                      <li>
                        <button onClick={() => navigate("/myBlogs")} className="dropdown-item">
                          My Blogs
                        </button>
                      </li>
                         <li>
                        <button onClick={() => navigate("/category")} className="dropdown-item">
                          Category
                        </button>
                      </li>
                      <li><hr className="dropdown-divider" /></li>

                      <li>
                        <button
                          onClick={() => {
                            logout();
                            navigate("/login");
                          }}
                          className="dropdown-item text-danger"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>
                  </li>
                )}


              </ul>
            </div>
          </div>
        </nav>

      </header>

    </>
  )
}
export default Header