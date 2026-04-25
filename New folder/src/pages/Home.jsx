import blogPost01 from '../assets/images/blog-post-01.jpg';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>

            <section className="blog-posts">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="all-blog-posts">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="blog-post">
                                            <div className="blog-thumb">
                                                <img src={blogPost01} alt="" />
                                            </div>
                                            <div className="down-content">
                                                <span>Lifestyle</span>
                                                <a href="post-details.html"><h4>Best Template Website for HTML CSS</h4></a>
                                                <ul className="post-info">
                                                    <li><a href="#">Admin</a></li>
                                                    <li><a href="#">May 31, 2020</a></li>
                                                    <li><a href="#">12 Comments</a></li>
                                                </ul>
                                                <p>Stand Blog is a free HTML CSS template for your CMS theme. You can easily adapt or customize it for any kind of CMS or website builder. You are allowed to use it for your business. You are NOT allowed to re-distribute the template ZIP file on any template collection site for the download purpose. <a rel="nofollow" href="https://templatemo.com/contact" target="_parent">Contact TemplateMo</a> for more info. Thank you.</p>
                                              
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <BlogCard/>

               
                
            </section>

        </>
    )
}
export default Home