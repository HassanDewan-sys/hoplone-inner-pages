import React, { useLayoutEffect } from 'react';
import $ from 'jquery';
gsap.registerPlugin(ScrollTrigger);

const homemainjs = () => {

  // About js
  // Banner Js
  // Clinet Js
  // Portfolio Js
  // Footer Js
  // Blogs Js
  // FAQ Js
  // Services Js
  // Testimonial Js

  // About js Start

  useLayoutEffect(() => {
    const serviceLine = document.getElementById('bigheadingabout');

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('viewh');
          } else {
            entry.target.classList.remove('viewh');
          }
        });
      });

      observer.observe(serviceLine);
    } else {
      const onScroll = () => {
        const rect = serviceLine.getBoundingClientRect();
        const inView = (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );

        if (inView) {
          serviceLine.classList.add('view');
        } else {
          serviceLine.classList.remove('view');
        }
      };

      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, []);

  useLayoutEffect(() => {
    const animationAbout = () => {
      const heading = document.querySelector('#About .heading h3');
      gsap.to(heading, {
        background: 'linear-gradient(to right, #000000 10%, #DADADA 100%)',
        ease: 'none',
        scrollTrigger: {
          trigger: '#About',
          start: '-=200px',
          end: '+=300px',
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
    const lineAbout = () => {
      if (window.innerWidth < 768) {
        // If the screen width is less than 768px, do not execute the function
        return;
      }
    
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#About',
          start: 'top',
          end: 'center',
          scrub: true,
          pin: true,
        }
      });
    
      tl.set('#About .counter .counter-item span', {
        className: '+=visible'
      });
    
      tl.to('#About .counter .counter-item span', {
        height: (index, target) => {
          if (index === 1) return '300px';
          return '370px';
        },
        stagger: 0.1
      });

      tl.to('#About .counter .ab-statue', {
        opacity:0.1
      },0 );
    
      tl.to('#About .counter .counter-item img', {
        visibility: 'visible',
        opacity: 1,
        duration: 0.5,
        stagger: 0.1 
      });
    };
    
    // Call the function
    lineAbout();
    
    // Optional: Add an event listener to handle window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        lineAbout();
      }
    });
    
  }, []);

  useLayoutEffect(() => {
    // Mouse tracking animation for masking element
    let cursor = document.querySelector('#about-masking');
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
    // jQuery animation for hero element
    function initializeJQueryAnimation() {
      var $body = $(".about-wrraper"),
        $heroA = $(".ab-statue");
      TweenMax.set($heroA, { transformStyle: 'preserve-3d' });

      $body.mousemove(function(e) {
        var sxPos = e.pageX / $body.width() * 100 - 2;
        var syPos = e.pageY / $body.height() * 100 - 2;

        TweenMax.to($heroA, 0.5, {
          rotationY: 0.09 * sxPos,
          rotationX: 0.09 * syPos,
          rotationZ: '-0.1',
          transformPerspective: 500,
          transformOrigin: 'center center'
        });
      });
    }

    initializeJQueryAnimation();

  }, []);

  // About js Start
  
// ----------------------------------------------------------

  // Banner Js Start

  useLayoutEffect(() => {
    // Mouse tracking animation for masking element
    let cursor = document.querySelector('#banner-masking');
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

    // GSAP animation for banner-masking opacity change based on ScrollTrigger
    gsap.to("#banner-masking", {
      scrollTrigger: {
        trigger: ".banner-img-wrapper",
        start: "center",
        end: "-=100%",
        scrub: false, // Disable scrubbing for immediate change
        onEnter: () => {
          gsap.set("#banner-masking", { opacity: 0 }); // Immediately set opacity to 0
        },
        onLeaveBack: () => {
          gsap.set("#banner-masking", { opacity: 1 }); // Ensure opacity is reset if needed
        }
      },
      opacity: 0, // Define opacity change in GSAP animation
    });
  }, []);

  useLayoutEffect(() => {
    // jQuery animation for hero element
    function initializeJQueryAnimation() {
      var $body = $("body"),
        $heroA = $("#swordmen");
      TweenMax.set($heroA, { transformStyle: 'preserve-3d' });

      $body.mousemove(function(e) {
        var sxPos = e.pageX / $body.width() * 100 - 2;
        var syPos = e.pageY / $body.height() * 100 - 2;

        TweenMax.to($heroA, 0.5, {
          rotationY: 0.2 * sxPos,
          rotationX: 0.100 * syPos,
          rotationZ: '-0.1',
          transformPerspective: 500,
          transformOrigin: 'center center'
        });
      });
    }

    initializeJQueryAnimation();

  }, []);

  // Banner Js End

  // ----------------------------------------------------------

  // Clinet Js Start

  useLayoutEffect(() => {
    const serviceLine = document.getElementById('bigheadingclient');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('viewh');
                } else {
                    entry.target.classList.remove('viewh');
                }
            });
        });

        observer.observe(serviceLine);
    } else {
        // Fallback for browsers that don't support Intersection Observer
        const onScroll = () => {
            const rect = serviceLine.getBoundingClientRect();
            const inView = (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );

            if (inView) {
                serviceLine.classList.add('view');
            } else {
                serviceLine.classList.remove('view');
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    } 
  }, []);

  useLayoutEffect(() => {
    const animateAddClients = () => {
        const headingElement = document.querySelector('#Clients .heading h3');
        gsap.to(headingElement, {
          background: 'linear-gradient(to right, #000000 10%, #DADADA 100%)',
          ease: 'none',
          scrollTrigger: {
            trigger: '#Clients',
            start: '+=45%',
            end: '+=90%',
            scrub: true,
            onUpdate: self => {
              const scrollProgress = self.progress.toFixed(3);
              headingElement.style.background = `linear-gradient(to right, #fff ${scrollProgress * 100}%, #000 ${scrollProgress * 100}%)`;
            },
          },
        });
      };
      
      // Call the animateAddClients function
      animateAddClients();
      
  }, []);

  useLayoutEffect(() => {
    // Mouse tracking animation for masking element
    let cursor = document.querySelector('#clinet-masking');
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

  // Clinet Js End

  // ----------------------------------------------------------

  // Portfolio Js Start

  useLayoutEffect(() => {
    const animateAddportfolio = () => {
        const headingElement = document.querySelector('#portfolio h4');
        gsap.to(headingElement, {
          background: 'linear-gradient(to right, #000000 10%, #DADADA 100%)',
          ease: 'none',
          scrollTrigger: {
            trigger: '.portfolio-wrapper-main',
            start: '-=200px',
            end: '+=300px',
            scrub: true,
            onUpdate: self => {
              const scrollProgress = self.progress.toFixed(3);
              headingElement.style.background = `linear-gradient(to right, #fff ${scrollProgress * 100}%, #000 ${scrollProgress * 100}%)`;
            },
          },
        });
      };
      
      // Call the animateAddportfolio function
      animateAddportfolio();
      
  }, []);

  useLayoutEffect(() => {
    function generateFilePathsportf(prefix, count, extension) {
      const paths = [];
      for (let i = 1; i <= count; i++) {
        paths.push(`${prefix}${i}${extension}`);
      }
      return paths;
    }

    function portfoliocanvas() {
      const canvas = document.querySelector("#portfolio-hand");
      const context = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
      });

      const files = generateFilePathsportf('./img/portfolio-hand/pr-hand', 42, '.webp');
      const frameCount = files.length;

      const images = [];
      const imageSeq = {
        frame: 0,
      };

      let loadedCount = 0; // Track loaded images count

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.onload = function () {
          loadedCount++;
          if (loadedCount === frameCount) {
            imagesLoaded();
          }
        };
        img.src = files[i];
        images.push(img);
      }

      function imagesLoaded() {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: "#portfolio",
            start: "top top", // Align trigger's top with viewport's top
            end: "center", // Align trigger's bottom with viewport's bottom
            scrub: 1,
            pin: true,
            onUpdate: render, // Callback function to execute on each update
          }
        });

        timeline.to(imageSeq, {
          frame: frameCount - 1,
          snap: "frame",
          ease: "none",
          duration: 2,
          onUpdate: render // Update on each frame change
        });

        timeline.to({}, { duration: 2 }); // 2 seconds delay after sequence animation

        timeline.to(".portfoliowraper", {  
          y: '-80%',
          scrollTrigger: {
            trigger: "#ppp",
            start: "top",
            end: "bottom",
            scrub: 1,
            pin: true,
          },
        });

        // Start rendering initially
        render();
      }

      function render() {
        if (images[imageSeq.frame]) {
          scaleImage(images[imageSeq.frame], context);
        }
      }

      function scaleImage(img, ctx) {
        const canvas = ctx.canvas;
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.min(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShift_x,
          centerShift_y,
          img.width * ratio,
          img.height * ratio
        );
      }
    }

    // Mouse tracking animation for masking element
    let cursor_portoflio = document.querySelector('#banner-masking-portfolio');
    let mouseX = 0;
    let mouseY = 0;

    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: function() {
        gsap.set(cursor_portoflio, {
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

    portfoliocanvas();
  }, []);

  // Portfolio Js End

  // ----------------------------------------------------------

  // Footer Js Start

  // Footer Js End

  // ----------------------------------------------------------

  // Blogs Js Start

  useLayoutEffect(() => {
    const animation = () => {
      const heading = document.querySelector('#blogs .heading h3');
      gsap.to(heading, {
        background: 'linear-gradient(to right, #000000 10%, #DADADA 100%)',
        ease: 'none',
        scrollTrigger: {
          trigger: '#blogs',
          start: '+=35%',
          end: '+=80%',
          scrub: true,
          onUpdate: self => {
            const progress = self.progress.toFixed(3);
            heading.style.background = `linear-gradient(to right, #000000 ${progress * 100}%, #DADADA ${progress * 100}%)`;
          },
        },
      });
    };

    animation();
  }, []);

  useLayoutEffect(() => {
    const serviceLine = document.getElementById('blogsbigheading');

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('viewh');
          } else {
            entry.target.classList.remove('viewh');
          }
        });
      });

      observer.observe(serviceLine);
    } else {
      const onScroll = () => {
        const rect = serviceLine.getBoundingClientRect();
        const inView = (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );

        if (inView) {
          serviceLine.classList.add('view');
        } else {
          serviceLine.classList.remove('view');
        }
      };

      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, []);
  
  useLayoutEffect(() => {
    // Mouse tracking animation for masking element
    let cursor = document.querySelector('#blog-masking');
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

  // Blogs Js End

  // ----------------------------------------------------------

  // FAQ Js Start

  useLayoutEffect(() => {
    const animateAddFaq = () => {
      const headingElement = document.querySelector('#faq .heading h3');
      gsap.to(headingElement, {
        background: 'linear-gradient(to right, #000000 10%, #DADADA 100%)',
        ease: 'none',
        scrollTrigger: {
          trigger: '#faq',
          start: '+=45%',
          end: '+=90%',
          scrub: true,
          onUpdate: self => {
            const scrollProgress = self.progress.toFixed(3);
            headingElement.style.background = `linear-gradient(to right, #fff ${scrollProgress * 100}%, #000 ${scrollProgress * 100}%)`;
          },
        },
      });
    };

    // Call the animateAddFaq function
    animateAddFaq();

  }, []);

  useLayoutEffect(() => {
    // Mouse tracking animation for masking element
    let cursor = document.querySelector('#faq-masking');
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

  // FAQ Js End

  // ----------------------------------------------------------

  // Services Js Start
  

  // Services Js End

  // ----------------------------------------------------------

  // Testimonial Js Start

  useLayoutEffect(() => {
    const animation = () => {
      const heading = document.querySelector('#testimonial .heading h3');
      gsap.to(heading, {
        background: 'linear-gradient(to right, #000000 10%, #DADADA 100%)',
        ease: 'none',
        scrollTrigger: {
          trigger: '#testimonial',
          start: '+=45%',
          end: '+=90%',
          scrub: true,
          onUpdate: self => {
            const progress = self.progress.toFixed(3);
            heading.style.background = `linear-gradient(to right, #000000 ${progress * 100}%, #DADADA ${progress * 100}%)`;
          },
        },
      });
    };

    animation();
  }, []);

  useLayoutEffect(() => {
    const serviceLine = document.getElementById('bigheading');

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('viewh');
          } else {
            entry.target.classList.remove('viewh');
          }
        });
      });

      observer.observe(serviceLine);
    } else {
      const onScroll = () => {
        const rect = serviceLine.getBoundingClientRect();
        const inView = (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );

        if (inView) {
          serviceLine.classList.add('view');
        } else {
          serviceLine.classList.remove('view');
        }
      };

      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, []);

  useLayoutEffect(() => {
    // Mouse tracking animation for masking element
    let cursor = document.querySelector('#testimonial-masking');
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

  // Testimonial Js End

  return (
    <></>
  )
}

export default homemainjs