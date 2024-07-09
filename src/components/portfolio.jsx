import React, { useLayoutEffect, useRef } from 'react';

const Portfolio = () => {

  const videos = [
    { src: "video/hero-video.mp4", poster: "img/pr1.jpg" },
    { src: "video/hero-video.mp4", poster: "img/pr2.jpg" },
    { src: "video/hero-video.mp4", poster: "img/pr3.jpg" },
    { src: "video/hero-video.mp4", poster: "img/pr4.jpg" },
    { src: "video/hero-video.mp4", poster: "img/pr5.jpg" },
    { src: "video/hero-video.mp4", poster: "img/pr6.jpg" }
  ];

  const handleMouseEnter = (event) => {
    event.target.play();
  };
  
  const handleMouseLeave = (event) => {
    const video = event.target;
    video.pause();
    video.currentTime = 0;
    video.load();
  };
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    ScrollTrigger.create({
      trigger: "#portfolio-video",
      start: "+=40%",
      onEnter: () => {
        gsap.to(".pr-hover-img", {
          display: 'none',
          duration: 0.5
        });
      },
      onLeaveBack: () => {
        gsap.to(".pr-hover-img", {
          display: 'block',
          duration: 0.5
        });
      }
    });
  }, []);
  

  return (
    <>
      <div className="portfolio-wrapper-main">

        <section id='banner-masking-portfolio' className='mask-hide'>
          <div></div>
        </section>

        <section id='portfolio'>
          <div className="container-fluid">
            <div className="col-lg-11 mx-auto">
              <div className="row">
                <div className="col-lg-7">
                  <h4>
                    Let's Explore<br />
                    Our great work
                  </h4>
                  <div className="content">
                    <div className="text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      </p>
                    </div>
                  </div>
                  <div className="btn">
                    <a href='work'>
                      <button className='hero-btn hover-mask-hide cr-hover'>
                        <span>
                          <svg>
                            <text className="svg-text">Learn More</text>
                          </svg>
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
                <div className="col-lg-5">
                  <canvas id='portfolio-hand'></canvas>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="ppp">
        <section id='portfolio-video' ref={videoRef}>
          <div className="container-fluid">
            <div className="col-lg-11 mx-auto">
              <div className="row">
                <div className="col-lg-12">
                  <div className="pr-heading" id='pr-heading'>
                    <img src="img/pr-heading.svg" className='img-fluid' />
                  </div>
                  <img src="img/hover.svg" className='pr-hover-img' />
                  <div className="portfoliowraper">
                    {videos.map((video, index) => (
                      <video
                        key={index}
                        loop
                        muted
                        className='hover-mask-hide cr-hover'
                        poster={video.poster}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <source src={video.src} type="video/mp4" />
                      </video>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
