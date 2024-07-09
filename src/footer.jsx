import React, { useLayoutEffect } from 'react';

const Footer = () => {

  useLayoutEffect(() => {
    function generateFilePaths(prefix, count, extension) {
      const paths = [];
      for (let i = 1; i <= count; i++) {
        paths.push(`${prefix}${i}${extension}`);
      }
      return paths;
    }

    function pagefootercanvas() {
      const canvas = document.querySelector("#ft-hand");
      const context = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
      });

      const files = generateFilePaths('./img/ft-hand/hand', 70, '.webp');
      const frameCount = files.length;

      const images = [];
      const imageSeq = {
        frame: 0,
      };

      let loadedCount = 0; // Track loaded images count

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.onload = function() {
          loadedCount++;
          if (loadedCount === frameCount) {
            imagesLoaded();
          }
        };
        img.src = files[i];
        images.push(img);
      }

      function imagesLoaded() {
        gsap.to(imageSeq, {
          frame: frameCount - 1,
          snap: "frame",
          ease: "none",
          scrollTrigger: {
            trigger: "#footer",
            start: "+=0", // Align trigger's top with viewport's top
            end: "center", // Align trigger's bottom with viewport's bottom
            scrub: 1, 
            pin: true,
            onUpdate: render, // Callback function to execute on each update
          }
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

    pagefootercanvas();
  }, []);

  useLayoutEffect(() => {
    // Mouse tracking animation for masking element
    let cursor = document.querySelector('#footer-masking');
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

  return (
    <div className="footer-wrapper">
      <section id='footer-masking' className='mask-hide'>
        <div></div>
      </section>
      <section id='footer'>
        <div className="container-fluid">
          <div className="col-lg-11 mx-auto">

            <div className="row" id='hand-animation'>
              <div className="col-lg-8">
                <canvas id='ft-hand'></canvas>
              </div>
              <div className="col-lg-4">
                <a href='contact'>
                  <button className='hero-btn'>
                    <span>
                      <svg>
                        <text className="svg-text">Let's Talk</text>
                      </svg>  
                    </span>
                  </button>
                </a>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="ct-divider"></div>
              </div>
            </div>

            <div className="row" id='ft-content'>
              <div className="col-lg-4">
                <div className="ft-logo">
                  <img  src="img/logo.png" className='img-fluid hover-mask-hide cr-hover' />
                </div>
                <div className="content">
                  <h3>
                  Your brand,<br/>
                  built <span>amazing</span>
                  </h3>
                </div>
              </div>
              <div className="col-lg-2">
                  <h4>Company</h4>
                  <ul>
                    <li>
                      <a href='/' className='hover-mask-hide cr-hover'>Home</a>
                    </li>
                    <li>
                      <a href='about' className='hover-mask-hide cr-hover'>About</a>
                    </li>
                    <li>
                      <a href='work' className='hover-mask-hide cr-hover'>Work</a>
                    </li>
                    <li>
                      <a href='service' className='hover-mask-hide cr-hover'>Services</a>
                    </li>
                    <li>
                      <a href='contact' className='hover-mask-hide cr-hover'>Contact</a>
                    </li>
                  </ul>
              </div>
              <div className="col-lg-3">
                <h4>Services</h4>
                <ul>
                  <li>
                    <a href='branding' className='hover-mask-hide cr-hover'>Branding</a>
                  </li>
                  <li>
                    <a href='branding' className='hover-mask-hide cr-hover'>Application<br/> Development</a>
                  </li>
                  <li>
                    <a href='branding' className='hover-mask-hide cr-hover'>Digital Marketing</a>
                  </li>
                  <li>
                    <a href='branding' className='hover-mask-hide cr-hover'>Sap Solutions</a>
                  </li>
                  <li>
                    <a href='branding' className='hover-mask-hide cr-hover'>Web Development</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h4>Contact</h4>
                <ul>
                  <li>
                    <a href='/' className='hover-mask-hide cr-hover'>Phunk Creative, Salts<br/> Mill, Victoria Rd, Saltaire,<br/> Shipley BD18 3LA
                    </a>
                  </li>
                  <li>
                    <a href='mailto:hello@hoplon.com' className='hover-mask-hide cr-hover'>hello@hoplon.com</a>
                    <a href='tel:+441133 908 188' className='hover-mask-hide cr-hover'>+441133 908 188</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row" id='privacy'>
              <div className="col-lg-12">
                <div className="number">
                  <span className='hover-mask-hide cr-hover'>Company Number:</span> <a href='tel:13426455' className='hover-mask-hide cr-hover'>13426455</a>
                </div>
                <div className="number">
                  <a href='/' className='hover-mask-hide cr-hover'>Terms & Conditions</a>
                  <span></span>
                  <a href='/' className='hover-mask-hide cr-hover'>Privacy Policy</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section> 
    </div>     
  );
}

export default Footer;
