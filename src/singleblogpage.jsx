import React, { useEffect, useState } from 'react';
import blogPosts from './components/blogarry';

const SingleBlogPage = () => {
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const blogId = queryParams.get('id');

        const selectedBlog = blogPosts.find(blog => blog.id === parseInt(blogId));
        setBlog(selectedBlog);
    }, []);

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (

        <>
            <section id='single-blog-page-banner' className="inner-banners hover-mask-hide cr-hover">
                <div className="container-fluid">
                    <div className="col-lg-11 mx-auto">
                    </div>
                </div>
            </section>

            <section id="single-blog-page" className='hover-mask-hide cr-hover'>
                <div className="container-fluid">
                    <div className="col-lg-11 mx-auto">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="img">
                                    <img src={blog.image} className='img-fluid' alt={blog.title} />
                                </div>
                                <div className="content">
                                    <h2>{blog.title}</h2>
                                    <p>{blog.content}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
        
    );
};

export default SingleBlogPage;
