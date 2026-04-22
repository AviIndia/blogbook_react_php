
import { AuthContext } from "../context/AuthContext";
import { NavLink} from "react-router-dom";


const Header = () => {



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

           
              </ul>
            </div>
          </div>
        </nav>
        
      </header>

    </>
  )
}
export default Header