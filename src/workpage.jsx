import React, { useRef ,useLayoutEffect } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import NewTestimonial from './components/new-testimonial';

const WorkPage = () => {
    const portfoliovideo = [
        { src: "video/hero-video.mp4", poster: "img/branding.jpg" },
        { src: "video/hero-video.mp4", poster: "img/branding.jpg" },
        { src: "video/hero-video.mp4", poster: "img/branding.jpg" },
        { src: "video/hero-video.mp4", poster: "img/branding.jpg" },
        { src: "video/hero-video.mp4", poster: "img/branding.jpg" },
        { src: "video/hero-video.mp4", poster: "img/branding.jpg" }
    ];

    const portfoliowebdevelopment = [
        { src: "video/hero-video.mp4", poster: "img/pr1.jpg" },
        { src: "video/hero-video.mp4", poster: "img/pr2.jpg" },
        { src: "video/hero-video.mp4", poster: "img/pr3.jpg" },
        { src: "video/hero-video.mp4", poster: "img/pr4.jpg" },
        { src: "video/hero-video.mp4", poster: "img/pr5.jpg" },
        { src: "video/hero-video.mp4", poster: "img/pr6.jpg" }
    ];

    const portfolioSapSolution = [
        { src: "video/hero-video.mp4", poster: "img/Sap-Solution.jpg" },
        { src: "video/hero-video.mp4", poster: "img/Sap-Solution.jpg" },
        { src: "video/hero-video.mp4", poster: "img/Sap-Solution.jpg" },
        { src: "video/hero-video.mp4", poster: "img/Sap-Solution.jpg" },
        { src: "video/hero-video.mp4", poster: "img/Sap-Solution.jpg" },
        { src: "video/hero-video.mp4", poster: "img/Sap-Solution.jpg" }
    ];

    const portfolioDigitalMarketing = [
        { src: "video/hero-video.mp4", poster: "img/digitalmarketing.jpg" },
        { src: "video/hero-video.mp4", poster: "img/digitalmarketing.jpg" },
        { src: "video/hero-video.mp4", poster: "img/digitalmarketing.jpg" },
        { src: "video/hero-video.mp4", poster: "img/digitalmarketing.jpg" },
        { src: "video/hero-video.mp4", poster: "img/digitalmarketing.jpg" },
        { src: "video/hero-video.mp4", poster: "img/digitalmarketing.jpg" }
    ];

    const portfolioappdevelopment = [
        { src: "video/hero-video.mp4", poster: "img/n-app-developnemt.jpg" },
        { src: "video/hero-video.mp4", poster: "img/n-app-developnemt.jpg" },
        { src: "video/hero-video.mp4", poster: "img/n-app-developnemt.jpg" },
        { src: "video/hero-video.mp4", poster: "img/n-app-developnemt.jpg" },
        { src: "video/hero-video.mp4", poster: "img/n-app-developnemt.jpg" },
        { src: "video/hero-video.mp4", poster: "img/n-app-developnemt.jpg" }
    ];

    useLayoutEffect(() => {
        const tabsElement = document.getElementById('portfolio-tabs');
        const tabsOffsetTop = tabsElement.offsetTop;
    
        const handleScroll = () => {
            if (window.scrollY >= tabsOffsetTop) {
              tabsElement.classList.add('fixed');
              document.querySelectorAll('.work-page').forEach(workPage => {
                workPage.classList.add('down');
              });
            } else {
              tabsElement.classList.remove('fixed');
              document.querySelectorAll('.work-page').forEach(workPage => {
                workPage.classList.remove('down');
              });
            }
          };
    
        window.addEventListener('scroll', handleScroll);

        gsap.to(".portfoliowraper", {
            y: "-80%",
            scrollTrigger: {
              trigger: ".tab-content",
              start: "top",
              end: "+=300%",
              pin: true,
              scrub: true,
            }
          });

          gsap.to("#portfolio-tabs", {
            opacity: "0",
            pointerEvents:'none',
            scrollTrigger: {
              trigger: "#workpageportfolio",
              start: "+=80%",
              end: "+=70%",
              pin: false,
              scrub: true,
            }
          });
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useLayoutEffect(() => {
        const animationtesti = () => {
          const heading = document.querySelector('#new_testimonial h3');
          gsap.to(heading, {
            background: 'linear-gradient(to right, rgb(0, 0, 0) 20%, rgb(218, 218, 218) 20%)',
            ease: 'none',
            scrollTrigger: {
              trigger: '#new_testimonial',
              start: '-=250px',
              end: '+=150px',
              scrub: true,
              onUpdate: self => {
                const progress = self.progress.toFixed(3);
                heading.style.background = `linear-gradient(to right, #000000 ${progress * 100}%, #DADADA ${progress * 100}%)`;
              },
            },
          });
        };
    
    animationtesti();
    }, []);

    useLayoutEffect(() => {
        let cursor1 = document.querySelector('#workpageportfolio-masking');
        let cursor2 = document.querySelector('#work-page-testimonial-masking');
        let mouseX = 0;
        let mouseY = 0;

        const updateMaskPosition = () => {
            if (cursor1) {
            gsap.set(cursor1, {
                css: {
                '-webkit-mask-position': `${mouseX}px ${mouseY}px`,
                'mask-position': `${mouseX}px ${mouseY}px`,
                },
            });
            }
            if (cursor2) {
            gsap.set(cursor2, {
                css: {
                '-webkit-mask-position': `${mouseX}px ${mouseY}px`,
                'mask-position': `${mouseX}px ${mouseY}px`,
                },
            });
            }
        };

        const mouseMoveHandler = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        // GSAP ticker for smooth animation
        gsap.ticker.add(updateMaskPosition);
        window.addEventListener('mousemove', mouseMoveHandler);

        return () => {
            gsap.ticker.remove(updateMaskPosition);
            window.removeEventListener('mousemove', mouseMoveHandler);
        };
    }, []);

    return (
        <>
            <section id="workpage" className="inner-banners hover-mask-hide cr-hover">
                <div className="container-fluid">
                    <div className="col-lg-11 mx-auto">
                        <div className="row">
                            <div className="col-lg-6">
                                <h4>Creative</h4>
                                <h5>Our Work</h5>
                            </div>
                            <div className="col-lg-6">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="workpageportfolio">
                <section className="grenn-masking mask-hide" id='workpageportfolio-masking'>
                    <div></div>
                </section>
                <div className="container-fluid">
                    <div className="col-lg-11 mx-auto">
                        <div className="row">
                            <div className="work-portfolio-wrapper">
                                <Tabs defaultActiveKey="portfolio-video" id="portfolio-tabs" className="mb-3">
                                    <Tab eventKey="portfolio-video" className='portfolio-work' title="Branding">
                                        <PortfolioSection videos={portfoliovideo} sectionId="portfolio-video" />
                                    </Tab>
                                    <Tab eventKey="portfolio-webdevelopment" className='portfolio-work' title="Web Development">
                                        <PortfolioSection videos={portfoliowebdevelopment} sectionId="portfolio-webdevelopment" />
                                    </Tab>
                                    <Tab eventKey="portfolio-SapSolution" className='portfolio-work' title="SAP Solutions">
                                        <PortfolioSection videos={portfolioSapSolution} sectionId="portfolio-SapSolution" />
                                    </Tab>
                                    <Tab eventKey="portfolio-DigitalMarketing" className='portfolio-work' title="Digital Marketing">
                                        <PortfolioSection videos={portfolioDigitalMarketing} sectionId="portfolio-DigitalMarketing" />
                                    </Tab>
                                    <Tab eventKey="portfolio-appdevelopment" className='portfolio-work' title="App Development">
                                        <PortfolioSection videos={portfolioappdevelopment} sectionId="portfolio-appdevelopment" />
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="new_testimonial" className='work-page-testimonial'>
                <section className="black-masking mask-hide" id='work-page-testimonial-masking'>
                    <div></div>
                </section>
                <div className="container-fluid">
                    <div className="col-lg-7 mx-auto">
                        <div className="row">
                            <div className="testiheading">
                                <h3>Trusted by People</h3>
                            </div>
                            <NewTestimonial />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const PortfolioSection = ({ videos, sectionId }) => {
    const videoRefs = useRef([]);

    const handleMouseEnter = (event) => {
        event.target.play();
    };

    const handleMouseLeave = (event) => {
        const video = event.target;
        video.pause();
        video.currentTime = 0;
        video.load();
    };

    return (
        <section id={sectionId} className={`work-page ${sectionId}`}>
            <div className="container-fluid">
                <div className="col-lg-11 mx-auto">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pr-heading" id={`${sectionId}-heading`}>
                                <img src="img/pr-heading.svg" className='img-fluid' alt="Portfolio Heading" />
                            </div>
                            <img src="img/hover.svg" className='pr-hover-img' alt="Hover Image" />
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
    );
};

export default WorkPage;