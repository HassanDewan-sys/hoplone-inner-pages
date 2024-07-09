import React, { useLayoutEffect } from 'react';
import NewTestimonial from './components/new-testimonial';

const ServicePage = () => {
    

    useLayoutEffect(() => {
        let cursor = document.querySelector('#service-content-wrapper-masking');
        let mouseX = 0;
        let mouseY = 0;

        gsap.to({}, 0.016, {
            repeat: -1,
            onRepeat: function() {
            gsap.set(cursor, {
                css: {
                '-webkit-mask-position': `${mouseX}px ${mouseY}px`,
                'mask-position': `${mouseX}px ${mouseY}px`,
                },
            });
            },
        });

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
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
        const animationserviceheading = () => {
          const heading = document.querySelector('#heading-services h4');
          gsap.to(heading, {
            background: 'linear-gradient(to right, rgb(0, 0, 0) 20%, rgb(218, 218, 218) 20%)',
            ease: 'none',
            scrollTrigger: {
              trigger: '#heading-services',
              start: '-=250px',
              end: '+=200px',
              scrub: true,
              onUpdate: self => {
                const progress = self.progress.toFixed(3);
                heading.style.background = `linear-gradient(to right, #000000 ${progress * 100}%, #DADADA ${progress * 100}%)`;
              },
            },
          });
        };
    
    animationserviceheading();
    }, []);

  return (
    <>
      <section id='servicepage' className="inner-banners hover-mask-hide cr-hover">
        <div className="container-fluid">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              <div className="col-lg-6">
                <h4>Expertise</h4>
                <h5>Services</h5>
              </div>
              <div className="col-lg-6">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="service-content-wrapper">
        <section className="black-masking mask-hide" id='service-content-wrapper-masking'>
            <div></div>
        </section>

        <section id="heading-services">
          <div className="container-fluid">
            <div className="col-lg-11 mx-auto">
              <div className="row">
                <h4>It's so challenging to find a good<br /> team to do great things. But we<br /> can provide you the best one.</h4>
              </div>
            </div>
          </div>
        </section>

        <section id='service-section'>
          <div className="container-fluid">
            <div className="col-lg-11 mx-auto">
              <div className="row">
                <div className="col-lg-6">
                  <div className="new-service-items hover-mask-hide cr-hover" style={{ background: 'url(img/n-web-developnment.jpg)' }}>
                    <div className="shine"></div>
                    <div className="hover-hide">
                      <h3>Web Developnment</h3>
                    </div>
                    <div className="hover-show">
                      <h3>Web Developnment</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe fugit obcaecati unde explicabo!</p>
                      <div className="btn">
                        <a href='branding'>
                          <button className='hero-btn hover-mask-hide cr-hover'>
                            <span>
                              <svg>
                                <text className="svg-text">Explore More</text>
                              </svg>
                            </span>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="new-service-items hover-mask-hide cr-hover" style={{ background: 'url(img/n-branding-services.jpg)' }}>
                    <div className="shine"></div>
                    <div className="hover-hide">
                      <h3>Branding</h3>
                    </div>
                    <div className="hover-show">
                      <h3>Branding</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe fugit obcaecati unde explicabo!</p>
                      <div className="btn">
                        <a href='branding'>
                          <button className='hero-btn hover-mask-hide cr-hover'>
                            <span>
                              <svg>
                                <text className="svg-text">Explore More</text>
                              </svg>
                            </span>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="new-service-items hover-mask-hide cr-hover" style={{ background: 'url(img/n-app-developnemt.jpg)' }}>
                    <div className="shine"></div>
                    <div className="hover-hide">
                      <h3>App Developnment</h3>
                    </div>
                    <div className="hover-show">
                      <h3>App Developnment</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe fugit obcaecati unde explicabo!</p>
                      <div className="btn">
                        <a href='branding'>
                          <button className='hero-btn hover-mask-hide cr-hover'>
                            <span>
                              <svg>
                                <text className="svg-text">Explore More</text>
                              </svg>
                            </span>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="new-service-items hover-mask-hide cr-hover" style={{ background: 'url(img/n-digital-marketing.jpg)' }}>
                    <div className="shine"></div>
                    <div className="hover-hide">
                      <h3>Digital Marketing</h3>
                    </div>
                    <div className="hover-show">
                      <h3>Digital Marketing</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe fugit obcaecati unde explicabo!</p>
                      <div className="btn">
                        <a href='branding'>
                          <button className='hero-btn hover-mask-hide cr-hover'>
                            <span>
                              <svg>
                                <text className="svg-text">Explore More</text>
                              </svg>
                            </span>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="new-service-items hover-mask-hide cr-hover" style={{ background: 'url(img/n-sap-solution.jpg)' }}>
                    <div className="shine"></div>
                    <div className="hover-hide">
                      <h3>SAP Solutions</h3>
                    </div>
                    <div className="hover-show">
                      <h3>SAP Solutions</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe fugit obcaecati unde explicabo!</p>
                      <div className="btn">
                        <a href='branding'>
                          <button className='hero-btn hover-mask-hide cr-hover'>
                            <span>
                              <svg>
                                <text className="svg-text">Explore More</text>
                              </svg>
                            </span>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="new_testimonial">
          <div className="container-fluid">
            <div className="col-lg-7 mx-auto">
              <div className="row">
                <div className="testiheading">
                  <h3>Trusted by People</h3>
                </div>
                <NewTestimonial></NewTestimonial>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ServicePage;
