import { NavLink } from 'react-router-dom';
import blogPost01 from '../assets/images/blog-post-01.jpg';
import { useEffect, useState } from 'react';
import { randomBlog } from '../services/blogservice';
const BlogCard = () => {
    const [blogData, setBlogData] = useState([])
    const getRandomBlogs = async () => {
        try {
            const res = await randomBlog();
            console.log(res.data);
            setBlogData(res.data)
        } catch (error) {
            console.log(error.message)
        }

    }
    useEffect(() => {
        getRandomBlogs()
    }, [])

    return (
        <>
            {blogData.length > 0 &&
                blogData.map((category, index) => (
                    <div className="container mb-5" key={index}>

                        {/* Category Heading */}
                        <div
                            className="sidebar-heading"
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                borderBottom: "solid 1px #dcdbdb",
                            }}
                        >
                            <div>
                                <h2
                                    style={{
                                        border: "none",
                                        marginBottom: "10px",
                                        paddingBottom: "0",
                                    }}
                                >
                                    {category.category_name}
                                </h2>
                            </div>

                            <div>
                                <NavLink
                                    to={`/categoryByBlog/${category.category_id}`}
                                    style={{ fontSize: "25px", color: "#f48840" }}
                                >
                                    <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                </NavLink>
                            </div>
                        </div>

                        {/* Blogs Row */}
                        <div className="row mt-3">
                            {category.blogs.map((blog, blogIndex) => (
                                <div className="col-lg-4" key={blogIndex}>
                                    <div className="all-blog-posts">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="blog-post">

                                                    {/* Blog Image */}
                                                    <div className="blog-thumb">
                                                        <img src={blog.blog_image} alt={blog.title} />
                                                    </div>

                                                    {/* Blog Content */}
                                                    <div className="down-content">
                                                        <span>{blog.category_name}</span>

                                                        <NavLink
                                                            to={`/singleblog/${blog.id}`}
                                                            style={{ textDecoration: "none" }}
                                                            >
                                                            <h4
                                                                style={{
                                                                fontSize: "18px",
                                                                lineHeight: "1.5",
                                                                height: "54px", // fixed 2 lines height
                                                                overflow: "hidden",
                                                                display: "-webkit-box",
                                                                WebkitLineClamp: 2,
                                                                WebkitBoxOrient: "vertical",
                                                                textOverflow: "ellipsis",
                                                                wordBreak: "break-word",
                                                                }}
                                                            >
                                                                {blog.title}
                                                            </h4>
                                                            </NavLink>

                                                        <ul className="post-info">
                                                            <li>
                                                                <a href="#">{blog.user_name}</a>
                                                            </li>

                                                            <li>
                                                                <a href="#">
                                                                    {new Date(blog.creation_datetime).toLocaleDateString(
                                                                        "en-GB",
                                                                        {
                                                                            day: "numeric",
                                                                            month: "long",
                                                                            year: "numeric",
                                                                        }
                                                                    )}
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href="#">
                                                                    <i
                                                                        className="fa fa-comments"
                                                                        aria-hidden="true"
                                                                    ></i>
                                                                </a>
                                                            </li>
                                                        </ul>

                                                        <p style={{ whiteSpace: "pre-line" }}>
                                                            {blog.content.split(" ").slice(0, 20).join(" ")}
                                                            {blog.content.split(" ").length > 20 && (
                                                                <>
                                                                    ...{" "}
                                                                    <NavLink to={`/singleblog/${blog.id}`}>
                                                                        Read More
                                                                    </NavLink>
                                                                </>
                                                            )}
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
        </>
    );
}
export default BlogCard