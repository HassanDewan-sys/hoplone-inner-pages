import React, { useLayoutEffect, useRef, useState } from 'react';

const Services = () => {
  const [isBig, setIsBig] = useState(false);
  const cursorRefservicecursor = useRef(null);

  useLayoutEffect(() => {
    const handleMouseMove = (event) => {
      gsap.to(cursorRefservicecursor.current, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.2,
        ease: 'power1.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsBig(true);
  };

  const handleMouseLeave = () => {
    setIsBig(false);
  };

  useLayoutEffect(() => {
    const serviceLine = document.getElementById('bigheadingServices');
    
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
    const xyzAnimationHeading = () => {
      const xzxHeadingElement = document.querySelector('#Services .heading h3');
      gsap.to(xzxHeadingElement, {
        background: 'linear-gradient(to right, #000000 10%, #DADADA 100%)',
        ease: 'none',
        scrollTrigger: {
          trigger: '.services-wrapper-main',
          start: '+=30%',
          end: '+=200px',
          scrub: true,
          onUpdate: self => {
            const scrollProgress = self.progress.toFixed(3);
            xzxHeadingElement.style.background = `linear-gradient(to right, #fff ${scrollProgress * 100}%, #000 ${scrollProgress * 100}%)`;
          },
        },
      });
    };
  
    xyzAnimationHeading();
  }, []);

  return (
    <div className="services-wrapper-main">
      <section id='Services'>
        <div className="container-fluid">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              <div className="col-lg-12">
                <div className="heading">
                  <div className="smallheading">
                    <h3>Service</h3>
                  </div>
                  <div className="bigheading" id='bigheadingServices'>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={1170}
                        height={191}
                        viewBox="0 0 1170 191"
                        fill="none"
                      >
                        <g opacity="0.25" clipPath="url(#clip0_284_593)">
                          <path
                            d="M143.12 104.08C137.36 100.38 130.48 97.3702 122.48 95.0502C114.48 92.7302 105.58 90.8802 95.77 89.5002C85.28 87.9502 76.5 86.4002 69.45 84.8602C62.39 83.3102 56.81 81.6802 52.68 79.9602C48.55 78.2402 45.62 76.2202 43.91 73.9002C42.19 71.5802 41.33 68.8702 41.33 65.7702C41.33 57.8602 44.9 52.2702 52.04 49.0002C59.18 45.7302 68.25 44.1002 79.26 44.1002C91.13 44.1002 100.97 46.3402 108.8 50.8102C116.63 55.2902 120.88 62.5902 121.57 72.7402H155.11C155.45 54.8502 149.13 40.7902 136.15 30.5502C123.16 20.3202 104.63 15.2002 80.55 15.2002C64.55 15.2002 51.05 17.2602 40.04 21.3902C29.03 25.5202 20.73 31.2802 15.14 38.6802C9.55002 46.0802 6.75002 54.6802 6.75002 64.4802C6.75002 72.3902 8.60002 79.2302 12.3 84.9902C16 90.7502 21.07 95.6102 27.52 99.5702C33.97 103.53 41.41 106.75 49.84 109.25C58.27 111.75 67.21 113.68 76.67 115.05C88.71 116.77 98.43 118.45 105.83 120.08C113.22 121.72 118.64 123.78 122.08 126.27C125.52 128.77 127.24 132.33 127.24 136.98C127.24 141.63 125.86 145.93 123.11 149.37C120.36 152.81 116.14 155.48 110.47 157.37C104.79 159.26 97.57 160.21 88.8 160.21C79.16 160.21 70.48 158.88 62.74 156.21C55 153.54 48.76 149.85 44.03 145.12C39.3 140.39 36.59 135.1 35.9 129.25H1.08002C0.730019 133.55 1.47002 138.37 3.27002 143.7C5.08002 149.03 8.13002 154.37 12.43 159.7C16.73 165.03 22.32 169.94 29.2 174.41C36.08 178.88 44.25 182.45 53.71 185.12C63.17 187.78 74.09 189.12 86.48 189.12C103.85 189.12 118 187.06 128.92 182.93C139.84 178.8 147.92 173 153.17 165.51C158.42 158.03 161.04 149.21 161.04 139.06C161.04 130.8 159.49 123.84 156.4 118.16C153.31 112.48 148.87 107.8 143.11 104.1L143.12 104.08Z"
                            stroke="black"
                            strokeWidth={2}
                          />
                          <path
                            d="M305.02 62.4102C293.84 57.0802 279.82 54.4102 262.96 54.4102C246.1 54.4102 232.04 57.0802 219.74 62.4102C207.44 67.7402 197.85 75.4402 190.97 85.5002C184.09 95.5602 180.65 107.65 180.65 121.75C180.65 135.85 184.17 147.9 191.23 157.87C198.28 167.85 208.09 175.46 220.64 180.7C233.19 185.95 247.64 188.57 263.99 188.57C278.61 188.57 290.99 186.59 301.14 182.64C311.29 178.68 319.33 173.27 325.26 166.38C331.19 159.5 334.85 151.67 336.23 142.9H303.72C301.66 148.75 297.05 153.52 289.92 157.22C282.78 160.92 273.88 162.77 263.22 162.77C253.58 162.77 245.29 161.22 238.32 158.13C231.35 155.03 225.85 150.82 221.81 145.49C217.77 140.16 215.32 134.23 214.46 127.69H336.76C337.62 111.01 335.34 97.2902 329.92 86.5402C324.5 75.7902 316.2 67.7502 305.02 62.4202V62.4102ZM216.27 108.08C218.5 100.17 223.49 93.5002 231.23 88.0802C238.97 82.6602 249.03 79.9502 261.42 79.9502C273.81 79.9502 283.91 82.4902 291.22 87.5602C298.53 92.6402 302.61 99.4702 303.48 108.07H216.27V108.08Z"
                            stroke="black"
                            strokeWidth={2}
                          />
                          <path
                            d="M410.29 69.2502C406.33 73.6402 403.15 78.2002 400.74 82.9202C398.33 87.6502 396.52 92.0402 395.32 96.0802V57.2502H361.78V185.49H395.32V115.11C397.07 111.48 399.47 107.76 402.54 103.96C406.84 98.6302 412.51 94.1202 419.57 90.4102C426.62 86.7102 434.96 84.8602 444.6 84.8602V54.4102C437.03 54.4102 430.41 55.7902 424.73 58.5402C419.05 61.2902 414.24 64.8602 410.28 69.2502H410.29Z"
                            stroke="black"
                            strokeWidth={2}
                          />
                          <path
                            d="M529.98 149.6L490.53 57.25H453.64L514.01 185.48H545.75L607.42 57.25H570.78L529.98 149.6Z"
                            stroke="black"
                            strokeWidth={2}
                          />
                          <path
                            d="M662.63 57.25H629.09V185.49H662.63V57.25Z"
                            stroke="black"
                            strokeWidth={2}
                          />
                          <path d="M665.47 1H626.51V30.41H665.47V1Z" stroke="black" strokeWidth={2} />
                          <path
                            d="M802.09 155.55C794.43 160.37 784.59 162.77 772.55 162.77C763.6 162.77 755.43 161.27 748.04 158.25C740.64 155.24 734.79 150.68 730.5 144.58C726.2 138.48 724.05 130.86 724.05 121.75C724.05 112.64 726.24 104.76 730.63 98.6602C735.02 92.5602 740.86 87.9502 748.17 84.8602C755.48 81.7602 763.61 80.2202 772.55 80.2202C783.73 80.2202 793.28 82.6302 801.19 87.4402C809.1 92.2602 814.52 98.9702 817.44 107.56H848.14C847.11 96.3802 843.45 86.8302 837.17 78.9202C830.89 71.0102 822.33 64.9502 811.5 60.7302C800.66 56.5202 787.67 54.4102 772.54 54.4102C757.41 54.4102 742.57 56.9902 730.1 62.1502C717.63 67.3102 707.82 74.8802 700.69 84.8602C693.55 94.8402 689.98 107.14 689.98 121.76C689.98 136.38 693.55 148.64 700.69 158.53C707.83 168.42 717.63 175.91 730.1 180.98C742.57 186.05 756.72 188.59 772.54 188.59C788.36 188.59 800.75 186.48 811.76 182.27C822.77 178.06 831.41 171.91 837.69 163.82C843.97 155.74 847.53 146.11 848.4 134.92H817.7C814.95 143.87 809.74 150.75 802.09 155.56V155.55Z"
                            stroke="black"
                            strokeWidth={2}
                          />
                          <path
                            d="M991.34 62.4102C980.16 57.0802 966.14 54.4102 949.28 54.4102C932.42 54.4102 918.36 57.0802 906.06 62.4102C893.76 67.7402 884.17 75.4402 877.29 85.5002C870.41 95.5602 866.97 107.65 866.97 121.75C866.97 135.85 870.49 147.9 877.55 157.87C884.6 167.85 894.41 175.46 906.96 180.7C919.51 185.95 933.96 188.57 950.31 188.57C964.93 188.57 977.31 186.59 987.47 182.64C997.62 178.68 1005.66 173.27 1011.59 166.38C1017.52 159.5 1021.18 151.67 1022.56 142.9H990.05C987.99 148.75 983.38 153.52 976.25 157.22C969.11 160.92 960.21 162.77 949.55 162.77C939.91 162.77 931.62 161.22 924.65 158.13C917.68 155.03 912.18 150.82 908.14 145.49C904.1 140.16 901.64 134.23 900.79 127.69H1023.09C1023.95 111.01 1021.67 97.2902 1016.25 86.5402C1010.83 75.7902 1002.53 67.7502 991.35 62.4202L991.34 62.4102ZM902.58 108.08C904.81 100.17 909.8 93.5002 917.54 88.0802C925.28 82.6602 935.34 79.9502 947.73 79.9502C960.12 79.9502 970.22 82.4902 977.53 87.5602C984.84 92.6402 988.92 99.4702 989.79 108.07H902.58V108.08Z"
                            stroke="black"
                            strokeWidth={2}
                          />
                          <path
                            d="M1163.82 133.49C1160.98 129.1 1157.15 125.58 1152.34 122.91C1147.52 120.24 1142.06 118.05 1135.96 116.33C1129.85 114.61 1123.45 113.07 1116.74 111.69C1108.83 110.31 1102.25 109.02 1097 107.82C1091.75 106.62 1087.8 105.03 1085.13 103.05C1082.46 101.07 1081.13 98.2802 1081.13 94.6602C1081.13 90.1902 1083.28 86.6602 1087.58 84.0802C1091.88 81.5002 1098.24 80.2102 1106.67 80.2102C1115.1 80.2102 1121.63 81.6302 1125.76 84.4702C1129.89 87.3102 1132.64 91.9102 1134.02 98.2702H1163.69C1163.69 89.6702 1161.58 82.0602 1157.37 75.4402C1153.15 68.8202 1146.83 63.6602 1138.41 59.9602C1129.98 56.2602 1119.4 54.4102 1106.67 54.4102C1098.24 54.4102 1090.37 55.2702 1083.06 56.9902C1075.75 58.7102 1069.39 61.2102 1063.97 64.4702C1058.55 67.7402 1054.33 71.7802 1051.33 76.6002C1048.32 81.4202 1046.82 86.9202 1046.82 93.1102C1046.82 99.3002 1048.32 104.85 1051.33 109.24C1054.34 113.63 1058.43 117.24 1063.59 120.08C1068.75 122.92 1074.68 125.2 1081.39 126.92C1088.1 128.64 1095.06 130.1 1102.29 131.31C1109.51 132.34 1115.45 133.46 1120.09 134.66C1124.73 135.87 1128.17 137.46 1130.41 139.43C1132.64 141.41 1133.76 144.2 1133.76 147.82C1133.76 150.75 1133.07 153.37 1131.7 155.69C1130.32 158.01 1127.83 159.78 1124.22 160.98C1120.61 162.19 1115.53 162.79 1109 162.79C1099.37 162.79 1091.58 160.94 1085.65 157.24C1079.72 153.54 1075.8 148.77 1073.91 142.92H1042.95C1042.6 145.33 1042.95 148.43 1043.98 152.21C1045.01 156 1046.95 160 1049.79 164.21C1052.63 168.43 1056.63 172.38 1061.79 176.08C1066.95 179.78 1073.44 182.79 1081.27 185.11C1089.1 187.43 1098.43 188.59 1109.26 188.59C1121.47 188.59 1131.97 187.08 1140.74 184.07C1149.51 181.06 1156.26 176.72 1160.99 171.04C1165.72 165.36 1168.09 158.4 1168.09 150.14C1168.09 143.43 1166.67 137.88 1163.83 133.5L1163.82 133.49Z"
                            stroke="black"
                            strokeWidth={2}
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_284_593">
                            <rect width="1169.08" height="190.09" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                  </div>
                </div>  
              </div>
            </div>
          </div>
        </div>  
      </section>
      <section id="service-items">
        <div className="row">
          <div className={`service-cursor ${isBig ? 'big' : ''}`} ref={cursorRefservicecursor}>
          </div>
          <div className="col-lg-12 service-box" style={{ background: 'url(img/web.jpg)' }}>
            <div className="hover-hide">
              <h3>Web Development</h3>
            </div>
            <div className="hover-info">
              <h3>Web Development</h3>
              <p>The Perfect Scent for Your Business and Home</p>
              <a className='service-cursor-big' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><span>Explore More</span></a>
            </div>
          </div>
          <div className="col-lg-6 service-box service-left" style={{ background: 'url(img/branding.jpg)' }}>
            <div className="hover-hide">
              <h3>Branding</h3>
            </div>
            <div className="hover-info">
              <h3>Branding</h3>
              <p>The Perfect Scent for Your Business and Home</p>
              <a className='service-cursor-big' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><span>Explore More</span></a>
            </div>
          </div>
          <div className="col-lg-6 service-box service-right" style={{ background: 'url(img/App-Development.jpg)' }}>
            <div className="hover-hide">
              <h3>Mobile App Developnment</h3>
            </div>
            <div className="hover-info">
              <h3>Mobile App Developnment</h3>
              <p>The Perfect Scent for Your Business and Home</p>
              <a className='service-cursor-big' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><span>Explore More</span></a>
            </div>
          </div>
          <div className="col-lg-6 service-box service-left" style={{ background: 'url(img/digitalmarketing.jpg)' }}>
            <div className="hover-hide">
              <h3>Digital Marketing</h3>
            </div>
            <div className="hover-info">
              <h3>Digital Marketing</h3>
              <p>The Perfect Scent for Your Business and Home</p>
              <a className='service-cursor-big' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><span>Explore More</span></a>
            </div>
          </div>
          <div className="col-lg-6 service-box service-right" style={{ background: 'url(img/Sap-Solution.jpg)' }}>
            <div className="hover-hide">
              <h3>SAP Solutions</h3>
            </div>
            <div className="hover-info">
              <h3>SAP Solutions</h3>
              <p>The Perfect Scent for Your Business and Home</p>
              <a className='service-cursor-big' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><span>Explore More</span></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;