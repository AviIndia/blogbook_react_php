import { Routes, Route } from "react-router-dom";
import  Aboutus  from "../pages/Aboutus"
import BlogDetails from "../pages/BlogDetails"
import Category  from "../pages/Category"
import Home from "../pages/Home"
import  Login  from "../pages/Login"
import  NotFound  from "../pages/NotFound"
import ContactUs from "../pages/ContactUs";
import AddnewBlog from "../pages/AddnewBlog";
import Myblogs from "../pages/Myblogs";
import Profile from "../pages/Profile";

const AppRoutes = ()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<Aboutus/>}/>
            <Route path="/category/:categoryName" element={<Category />} />
            <Route path="/blog/:id" element={<BlogDetails/>} />
             <Route path="/contact" element={<ContactUs/>} />

             
             <Route path="/createBlog" element={<AddnewBlog/>} />
              <Route path="/myBlogs" element={<Myblogs/>} />
              <Route path="/profile" element={<Profile/>} />

            {/* Auth */}
            <Route path="/login" element={<Login />} />

            {/* 404 Page */}
            <Route path="*" element={<NotFound/>} />

        </Routes>
        </>
    )
}
export default AppRoutes