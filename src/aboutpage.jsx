import React, { useLayoutEffect } from 'react';
import $ from 'jquery';

const AboutPage = () => {

  useLayoutEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: "#about-process",
        start: "+=390px",
        end: "bottom center",
        scrub: true
      }
    })
    .to("#about-process .col-lg-11.mx-auto .tracker-process .bg", { 
      height: "100%",
      duration: 2,
      ease: "none"
    })
    .to("#about-process .col-lg-11.mx-auto .tracker-process span", { 
      top: '100%',
      duration: 2,
      ease: "none"
    }, 0);
  }, []);

  useLayoutEffect(() => {
    function aboutpageimg() {
      var $body = $("body"),
        $heroA = $(".img-box");
      TweenMax.set($heroA, { transformStyle: 'preserve-3d' });

      $body.mousemove(function(e) {
        var sxPos = e.pageX / $body.width() * 100 - 2;
        var syPos = e.pageY / $body.height() * 100 - 2;

        TweenMax.to($heroA, 0.5, {
          rotationY: 0.1 * sxPos,
          rotationX: 0.2 * syPos,
          rotationZ: '-0.1',
          transformPerspective: 500,
          transformOrigin: 'center center'
        });
      });
    }

    aboutpageimg();

  }, []);

  useLayoutEffect(() => {
    function animateCounter(selector, start, end, duration) {
      const element = document.querySelector(selector);
      const count = { value: start };
    
      gsap.to(count, {
        value: end,
        duration: duration,
        ease: "none",
        onUpdate: () => {
          element.textContent = Math.floor(count.value);
        },
      });
    }
    
    // ScrollTrigger to start the counter animation when the element comes into view
    ScrollTrigger.create({
      trigger: "#aboutpage",
      start: "center",
      onEnter: () => {
        animateCounter(".ab-counter-box .counter", 0, 28, 3);
      },
    });
  }, []);

  useLayoutEffect(() => {
    const animationAbout = () => {
      const heading = document.querySelector('#about-content h3');
      gsap.to(heading, {
        background: 'linear-gradient(to right, #000000 10%, #DADADA 100%)',
        ease: 'none',
        scrollTrigger: {
          trigger: '#about-content',
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

    animationAbout();
  }, []);

  useLayoutEffect(() => {
    let cursor1 = document.querySelector('#about-process-masking');
    let cursor2 = document.querySelector('#about-content-masking');
    let cursor3 = document.querySelector('#about-last-content-masking');
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
      if (cursor3) {
        gsap.set(cursor3, {
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
      <section id='aboutpage' className="inner-banners hover-mask-hide cr-hover">
        <div className="container-fluid">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              <div className="col-lg-6">
                <h4>Creative Agency</h4>
                <h5>About Us</h5>
              </div>
              <div className="col-lg-6">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-content">
        <section className="black-masking mask-hide" id='about-content-masking'>
          <div></div>
        </section>
        <div className="container-fluid">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              <div className="col-lg-6">
                <div className="img-box">
                  <img src="img/about.jpg" className="img-fluid" />
                  <div className="ab-counter-box hover-mask-hide cr-hover">
                    <h6><span className='counter'>0</span><span>+</span></h6>
                    <h5>YEARS WORKING<br/> EXPERIENCE</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h3>We're a creative<br/>digital agency</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
                <div className="about-contact">
                  <div className="btn">
                    <a href='contact'>
                      <button className='hero-btn hover-mask-hide cr-hover'>
                        <span>
                          <svg>
                            <text className="svg-text">Let's Talk Now</text>
                          </svg>  
                        </span>
                      </button>
                    </a>
                  </div>
                  <div className="phone hover-mask-hide cr-hover">
                    <span><img src="img/phone-icon.svg" className="img-fluid" /></span>
                    <a href="tel:1800111222">1 800 111 222</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-logos">
        <div className="container-fluid">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              <div className="logos">
                <img src="img/google-black-icon.png" className='img-fluid hover-mask-hide cr-hover' />
                <img src="img/google-black-icon.png" className='img-fluid hover-mask-hide cr-hover' />
                <img src="img/google-black-icon.png" className='img-fluid hover-mask-hide cr-hover' />
                <img src="img/google-black-icon.png" className='img-fluid hover-mask-hide cr-hover' />
                <img src="img/google-black-icon.png" className='img-fluid hover-mask-hide cr-hover' />
                <img src="img/google-black-icon.png" className='img-fluid hover-mask-hide cr-hover' />
              </div>
            </div>
          </div>
        </div>
      </section>   

      <section id="about-second-content">
        <div className="container-fluid">
          <div className="col-lg-11 mx-auto hover-mask-hide cr-hover">
            <div className="row">
              <div className="col-lg-12">
                <h4>Creative thinking team<br/> of designers, copywriters<br/> and developers.</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <div className="group-flex">
                  <span><img src="img/icon-trusted-company.svg" className='img-fluid' /></span>
                  <h5>Trusted Company</h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="group-flex">
                  <span><img src="img/icon-award-winning.svg" className='img-fluid' /></span>
                  <h5>Award Winning</h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="group-flex">
                  <span><img src="img/icon-professional-work.svg" className='img-fluid' /></span>
                  <h5>Professional Work</h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="group-flex">
                  <span><img src="img/icon-help-any-time.svg" className='img-fluid' /></span>
                  <h5>Help any time</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='about-process'>
      <section className="grenn-masking mask-hide" id='about-process-masking'>
        <div></div>
      </section>
        <div className="container-fluid">
          <div className="col-lg-11 mx-auto">
            <div className="tracker-process">
              <div className="bg"></div>
              <span></span>
            </div>
            <div className="row">
              <div className="col-lg-5">
                <span className='hover-mask-hide cr-hover'>Our Process 01</span>
                <h4>Creative Agency</h4>
                <h5>Research</h5>
              </div>
              <div className="col-lg-7">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5">
                <span className='hover-mask-hide cr-hover'>Our Process 02</span>
                <h4>UI / UX Design</h4>
                <h5>Concepts</h5>
              </div>
              <div className="col-lg-7">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5">
                <span className='hover-mask-hide cr-hover'>Our Process 03</span>
                <h4>Front-End / Back-End</h4>
                <h5>Development</h5>
              </div>
              <div className="col-lg-7">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5">
                <span className='hover-mask-hide cr-hover'>Our Process 04</span>
                <h4>Device Testing</h4>
                <h5>Cross-Platform</h5>
              </div>
              <div className="col-lg-7">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5">
                <span className='hover-mask-hide cr-hover'>Our Process 05</span>
                <h4>Deployment</h4>
                <h5>Launch & CMS</h5>
              </div>
              <div className="col-lg-7">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-last-content">
      <section className="black-masking mask-hide" id='about-last-content-masking'>
        <div></div>
      </section>
        <div className="container-fluid">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              <div className="col-lg-5">
                <h4>We want to<br/> bring and<br/> business the<br/> <span>digital</span> world.</h4>
              </div>
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-lg-6">
                    <h5>Successfully finished projects with creativity.</h5>
                  </div>
                  <div className="col-lg-6">
                    <p className='hover-mask-hide cr-hover'>Lorem ipsum dolor sit amet, conse ctetue adipiscing elit, sed diam nonummy nibh euism od tincidunt ut laoreet dolore Lorem ipsum dolor sit amet, consectetuer</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <h5>Work together for better digital solutions.</h5>
                  </div>
                  <div className="col-lg-6">
                    <p className='hover-mask-hide cr-hover'>Lorem ipsum dolor sit amet, conse ctetue adipiscing elit, sed diam nonummy nibh euism od tincidunt ut laoreet dolore Lorem ipsum dolor sit amet, consectetuer</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <h5>Committed to deliver creative digital media.</h5>
                  </div>
                  <div className="col-lg-6">
                    <p className='hover-mask-hide cr-hover'>Lorem ipsum dolor sit amet, conse ctetue adipiscing elit, sed diam nonummy nibh euism od tincidunt ut laoreet dolore Lorem ipsum dolor sit amet, consectetuer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage