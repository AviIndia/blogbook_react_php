import { useEffect, useState } from 'react';

import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';
import { randomSingleBlog } from '../services/blogservice';
import { NavLink } from 'react-router-dom';

const Home = () => {

    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        const getRandomBlog = async () => {

            try {
                const res = await randomSingleBlog();
                console.log("Fetch From home page ",res.data);
                setBlogData(res.data);
            } catch (error) {
                console.log(error)
            }
        };
        getRandomBlog()
    }, [])



    return (
        <>

            <section className="blog-posts">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="all-blog-posts">
                                <div className="row">
                                   {
                                        blogData &&
                                        (
                                            <div className="col-lg-12">
                                            <div className="blog-post">
                                                
                                                <div className="blog-thumb" >
                                                <img src={blogData.blog_image} alt={blogData.title} style={{paddingTop:"120px",maxHeight:"500px"}}/>
                                                </div>

                                                <div className="down-content">
                                                <span>{blogData.category_name}</span>

                                                <NavLink to={`/singleblog/${blogData.id}`}>
                                                    <h4>{blogData.title}</h4>
                                                </NavLink>

                                                <ul className="post-info">
                                                    <li><a href="#">{blogData.user_name}</a></li>

                                                    <li>
                                                    <a href="#">
                                                        {new Date(blogData.creation_datetime).toLocaleDateString("en-GB", {
                                                        day: "numeric",
                                                        month: "long",
                                                        year: "numeric",
                                                        })}
                                                    </a>
                                                    </li>

                                                    <li>
                                                    <a href="#">
                                                        12 <i className="fa fa-comments" aria-hidden="true"></i>
                                                    </a>
                                                    </li>
                                                </ul>

                                           <p style={{ whiteSpace: "pre-line" }}>
                                            {blogData?.content
                                                ? blogData.content.split(" ").slice(0, 40).join(" ")
                                                : ""}

                                            {blogData?.content && blogData.content.split(" ").length > 40 && (
                                                <>
                                                ... <NavLink to={`/singleblog/${blogData.id}`}>Read More</NavLink>
                                                </>
                                            )}
                                            </p>
                                                </div>

                                            </div>
                                            </div>
                                        )
                                        }

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <BlogCard />



            </section>

        </>
    )
}
export default Home