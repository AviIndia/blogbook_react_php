import { useParams } from 'react-router-dom';
import blogPost01 from '../assets/images/blog-post-01.jpg';
import { blogDetails } from "../services/blogservice";
import { useState,useEffect } from 'react';
const ViewMyBlog = ()=>{
 const { id } = useParams(); // ✅ FIXED

  const [blogdata, setBlogdata] = useState(null); // ✅ better for single object

  const getSingleBlog = async (blogId) => {
    try {
      const res = await blogDetails(blogId); // ✅ FIXED
      setBlogdata(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      getSingleBlog(id);
      console.log("ID",id)
    }
  }, [id]);
    return(<>
    
    <div className="heading-page header-text">
      <section className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-content">
                <h4>single blog details</h4>
                <h2>{blogdata?.title}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
            <section className="blog-posts mt-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="all-blog-posts">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="blog-post">
                                            <div className="blog-thumb">
                                                <img src={blogdata?.blog_image} alt="Blog Image"  height="300"/>
                                            </div>
                                            <div className="down-content">
                                                <span>{blogdata?.category_name}</span>
                                                <a><h4>{blogdata?.title}</h4></a>
                                                <ul className="post-info">
                                                    <li><a href="#">{blogdata?.user_name}</a></li>
                                                    <li><a href="#">{blogdata?.creation_datetime}</a></li>
                                                    <li><a href="#">12 Comments</a></li>
                                                </ul>
                                                <p>{blogdata?.content}</p>
                                              
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
              

               
                
            </section>
      </div>
    
    
    </>)
}
export default ViewMyBlog