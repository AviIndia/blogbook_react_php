import { useEffect, useState } from "react"
import { useParams,NavLink } from "react-router-dom";
import { blogsBycategory } from "../services/blogservice";

const CategoryBlog = () => {
    const [blogData, setBlogData] = useState([]);
    const { category_id } = useParams();
    console.log(category_id);
    const fetchBlogByCat = async () => {
        try {
            const res = await blogsBycategory(category_id);
            console.log(res.data);
            setBlogData(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (category_id) {
            fetchBlogByCat();
        }
    }, [category_id]);
    return (
        <>
            <div className="heading-page header-text">
                <section className="page-heading">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-content">
                                    <h4>category</h4>
                                    <h2>{blogData?.[0]?.category_name}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className="blog-posts mt-4">
                <div className="container">
                    <div className="sidebar-heading">

                    </div>
                    <div className="row">
                        {blogData.length > 0 ? (
                            blogData.map((item, index) => (
                                <div className="col-lg-4" key={index}>
                                    <div className="all-blog-posts">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="blog-post">
                                                    <div className="blog-thumb">
                                                        <img src={item.blog_image} alt={item.title} />
                                                    </div>
                                                    <div className="down-content">
                                                        <span>{item.category_name}</span>
                                                      <NavLink to={`/singleblog/${item.id}`}>
                                                            <h4 style={{ fontSize: "15px" }}>
                                                                
                                                                {item.title}
                                                            </h4>
                                                     </NavLink>

                                                        <ul className="post-info">
                                                            <li><a href="#">{item.user_name}</a></li>
                                                            <li>
                                                                <a href="#">
                                                                    {new Date(item.creation_datetime).toLocaleDateString("en-GB", {
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
                                                            {item.content.split(" ").slice(0, 20).join(" ")}
                                                            {item.content.split(" ").length > 20 && (
                                                                <>
                                                                    ... <a href={`/blog-details/${item.id}`}>Read More</a>
                                                                </>
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center">
                                <h4>No Blogs are found</h4>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
export default CategoryBlog