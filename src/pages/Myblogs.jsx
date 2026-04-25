import { useEffect, useState, useContext } from "react";
import { getMyBlogs } from "../services/blogservice";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const Myblogs = ()=>{
    const [blogData,setblogData] = useState([]);
     const { user } = useContext(AuthContext);
     const navigate = useNavigate();
    const fetchMyBlog = async ()=>{
        try {
           
            const res = await getMyBlogs();
            setblogData(res.data);
            console.log(res.data)
        } catch (error) {
            console.error("Error fetching from blogs")
        }
    }
    useEffect(()=>{
        if(user?.id)
        {
            fetchMyBlog(user.id);
        }
    },[user])
    return(<>

        <div className="heading-page header-text">
                <section className="page-heading">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-content">
                                    <h4>blogs</h4>
                                    <h2>my blogs</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-4">
                            <div className="card">
                                <div className="card-header">
                                    My Blogs
                                </div>
                                <div className="card-body">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>BLOG IMAGE</th>
                                                <th>CATEGORY NAME</th>
                                                <th>TITLE</th>
                                                <th>STATUS</th>
                                                <th>VIEW</th>
                                            </tr>
                                            </thead>
                                                  <tbody>
                                                    {
                                                        blogData.length > 0 ? (
                                                        blogData.map((item) => (
                                                            <tr key={item.id}>
                                                                <td>{item.id}</td>
                                                            <td><img src={item.blog_image} width="70" /></td>
                                                            <td>{item.category_name}</td>
                                                            <td>{item.title}</td>
                                                            <td>{item.status}</td>
                                                            <td><button className="btn btn-primary btn-sm"  onClick={() => navigate(`/myBlogDetails/${item.id}`)}>
                                                                VIEW</button></td>
                                                            </tr>
                                                        ))
                                                        ) : (
                                                        <tr>
                                                            <td colSpan="3">No Blogs Found</td>
                                                        </tr>
                                                        )
                                                    }
                                                    </tbody>
                                        </table>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    
    
    </>)
}
export default Myblogs