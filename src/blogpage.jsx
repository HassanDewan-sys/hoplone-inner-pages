import React, { useLayoutEffect, useRef } from 'react';
import blogPosts from './components/blogarry';

const blogpage = () => {

    const cursorRefblog = useRef(null);

    useLayoutEffect(() => {
        const cursor = cursorRefblog.current;

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power2.out',
            });
        };

        document.addEventListener('mousemove', moveCursor);

        return () => {
            document.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    const handleBlogClick = (blogId) => {
        window.open(`/single-blog?id=${blogId}`, '_blank');
    };

  return (
    <>
        <section id='blogpage' className="inner-banners hover-mask-hide cr-hover">
            <div className="container-fluid">
                <div className="col-lg-11 mx-auto">
                    <div className="row">
                        <div className="col-lg-6">
                            <h4>Our Insights</h4>
                            <h5>Blogs</h5>
                        </div>
                        <div className="col-lg-6">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id='blogs' className='blog-page-blogs '>
            <div className="container-fluid">
                <div className="col-lg-11 mx-auto">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blogs-wrapper">
                                <div ref={cursorRefblog} className="blog-cursor">
                                    <img src="img/blog-cursor.svg" className="img-fluid" alt="Custom Cursor" />
                                </div>
                                {blogPosts.map((blog) => (
                                    <a key={blog.id} onClick={() => handleBlogClick(blog.id)}>
                                        <div className="blogs-items">
                                            <div className="img">
                                                <img src={blog.image} className='img-fluid' alt={blog.title} />
                                            </div>
                                            <div className="content">
                                                <h2>{blog.title}</h2>
                                                <p>{blog.content}</p>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default blogpage