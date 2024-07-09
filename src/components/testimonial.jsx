import Newtestimonial from "./new-testimonial";

const Testimonial = () => {
  // const containerRef = useRef(null);
  // const wrapperRef = useRef(null);

  // const testimonials = [
  //   {
  //     text: "Jords+Co has created both a brand identity and a new website that I could not be happier with. In the beginning, Jordan took the time to understand my business and the objectives of both the new branding and the website. Throughout the process communication was fantastic and Jordan really went the extra mile to deliver something that has exceeded my expectations.",
  //     name: "Tom Kirk",
  //     title: "Founder, Zeit Engineering"
  //   },
  //   {
  //     text: "Jords+Co has created both a brand identity and a new website that I could not be happier with. In the beginning, Jordan took the time to understand my business and the objectives of both the new branding and the website. Throughout the process communication was fantastic and Jordan really went the extra mile to deliver something that has exceeded my expectations.",
  //     name: "Tom Kirk",
  //     title: "Founder, Zeit Engineering"
  //   },
  //   {
  //     text: "Jords+Co has created both a brand identity and a new website that I could not be happier with. In the beginning, Jordan took the time to understand my business and the objectives of both the new branding and the website. Throughout the process communication was fantastic and Jordan really went the extra mile to deliver something that has exceeded my expectations.",
  //     name: "Tom Kirk",
  //     title: "Founder, Zeit Engineering"
  //   },
  //   {
  //     text: "Jords+Co has created both a brand identity and a new website that I could not be happier with. In the beginning, Jordan took the time to understand my business and the objectives of both the new branding and the website. Throughout the process communication was fantastic and Jordan really went the extra mile to deliver something that has exceeded my expectations.",
  //     name: "Tom Kirk",
  //     title: "Founder, Zeit Engineering"
  //   },
  // ];

  // useLayoutEffect(() => {
  //   const wrapper = wrapperRef.current;

  //   if (testimonials.length > 0) {
  //     // Clone the testimonials for infinite scrolling
  //     for (let i = 0; i < testimonials.length; i++) {
  //       const clone = wrapper.children[i].cloneNode(true);
  //       wrapper.appendChild(clone);
  //     }

  //     const tl = gsap.timeline({ repeat: -1, paused: true });
  //     tl.to(wrapper, {
  //       xPercent: -100 * testimonials.length,
  //       ease: 'none',
  //       duration: 20 * testimonials.length,
  //     });

  //     const draggable = Draggable.create(wrapper, {
  //       type: 'x',
  //       bounds: { minX: -containerRef.current.offsetWidth * testimonials.length, maxX: 0 },
  //       inertia: true,
  //       onPress() {
  //         tl.pause();
  //       },
  //       onDrag() {
  //         gsap.to(wrapper, {
  //           x: this.x,
  //           duration: 0.1,
  //         });
  //       },
  //       onRelease() {
  //         const totalWidth = containerRef.current.offsetWidth * testimonials.length;
  //         const currentX = this.x;
  //         const progress = gsap.utils.wrap(0, 1, -currentX / totalWidth);

  //         if (this.x < -containerRef.current.offsetWidth * testimonials.length) {
  //           this.endDrag();
  //           gsap.to(wrapper, { x: 0 });
  //           tl.restart();
  //         } else {
  //           tl.progress(progress).play();
  //         }
  //       },
  //     });

  //     tl.play();

  //     return () => {
  //       draggable[0].kill();
  //     };
  //   }
  // }, [testimonials.length]);

  // const cursorRef = useRef(null);

  // useLayoutEffect(() => {
  //   const cursor = cursorRef.current;

  //   // Mouse move event to update cursor position
  //   const moveCursor = (e) => {
  //     gsap.to(cursor, {
  //       x: e.clientX,
  //       y: e.clientY,
  //       duration: 0.1,
  //       ease: 'power2.out',
  //     });
  //   };

  //   // Attach the mouse move event listener
  //   document.addEventListener('mousemove', moveCursor);

  //   // Clean up the event listener on component unmount
  //   return () => {
  //     document.removeEventListener('mousemove', moveCursor);
  //   };
  // }, []);

  return (
    <section id='testimonial'>
      <section className="black-masking" id='testimonial-masking'>
        <div></div>
      </section>
      <div className="container-fluid">
        <div className="col-lg-11 mx-auto">
          <div className="row" id="new_testimonial">
            <div className="col-lg-12">
              <div className="heading">
                <div className="smallheading">
                  <h3>Testimonials</h3>
                </div>
                <div className="bigheading" id='bigheading'>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={1777}
                      height={190}
                      viewBox="0 0 1777 190"
                      fill="none"
                      >
                      <g opacity="0.25" clipPath="url(#clip0_294_721)">
                          <path
                          d="M176.97 47.19V18.54H1V47.19H71.96V185.48H106.27V47.19H176.97Z"
                          stroke="black"
                          strokeWidth={2}
                          />
                          <path
                          d="M294.88 62.4102C283.7 57.0802 269.68 54.4102 252.82 54.4102C235.96 54.4102 221.9 57.0802 209.6 62.4102C197.3 67.7402 187.71 75.4402 180.83 85.5002C173.95 95.5602 170.51 107.65 170.51 121.75C170.51 135.85 174.03 147.9 181.09 157.87C188.14 167.85 197.95 175.46 210.5 180.7C223.05 185.95 237.5 188.57 253.85 188.57C268.47 188.57 280.85 186.59 291 182.63C301.15 178.67 309.19 173.26 315.12 166.37C321.05 159.49 324.71 151.66 326.09 142.89H293.58C291.52 148.74 286.91 153.51 279.78 157.21C272.64 160.91 263.74 162.76 253.08 162.76C243.44 162.76 235.15 161.21 228.18 158.12C221.21 155.03 215.71 150.81 211.67 145.48C207.63 140.15 205.18 134.22 204.32 127.68H326.62C327.48 111 325.2 97.2802 319.78 86.5302C314.36 75.7802 306.06 67.7402 294.88 62.4102ZM206.12 108.08C208.35 100.17 213.34 93.5002 221.08 88.0802C228.82 82.6602 238.88 79.9502 251.27 79.9502C263.66 79.9502 273.76 82.4902 281.07 87.5602C288.38 92.6402 292.46 99.4702 293.33 108.07H206.12V108.08Z"
                          stroke="black"
                          strokeWidth={2}
                          />
                          <path
                          d="M455.88 122.91C451.06 120.24 445.6 118.05 439.5 116.33C433.39 114.61 426.99 113.06 420.28 111.69C412.37 110.31 405.79 109.03 400.54 107.82C395.29 106.62 391.34 105.03 388.67 103.05C386 101.07 384.67 98.2802 384.67 94.6602C384.67 90.1902 386.82 86.6602 391.12 84.0802C395.42 81.5002 401.78 80.2102 410.21 80.2102C418.64 80.2102 425.17 81.6302 429.3 84.4702C433.43 87.3102 436.18 91.9102 437.56 98.2702H467.23C467.23 89.6702 465.12 82.0602 460.91 75.4402C456.69 68.8202 450.37 63.6602 441.95 59.9602C433.52 56.2602 422.94 54.4102 410.21 54.4102C401.78 54.4102 393.91 55.2702 386.6 56.9902C379.29 58.7102 372.93 61.2102 367.51 64.4702C362.09 67.7402 357.87 71.7802 354.87 76.6002C351.86 81.4202 350.35 86.9202 350.35 93.1102C350.35 99.3002 351.85 104.85 354.87 109.23C357.88 113.62 361.97 117.23 367.13 120.07C372.29 122.91 378.22 125.19 384.93 126.91C391.64 128.63 398.61 130.09 405.83 131.3C413.05 132.33 418.99 133.45 423.63 134.65C428.27 135.86 431.71 137.45 433.95 139.42C436.18 141.4 437.3 144.19 437.3 147.81C437.3 150.74 436.61 153.36 435.24 155.68C433.86 158 431.37 159.77 427.76 160.97C424.15 162.18 419.07 162.78 412.54 162.78C402.9 162.78 395.12 160.93 389.19 157.23C383.26 153.53 379.34 148.76 377.45 142.91H346.49C346.14 145.32 346.49 148.42 347.52 152.2C348.55 155.99 350.49 159.99 353.33 164.2C356.17 168.42 360.17 172.37 365.33 176.07C370.49 179.77 376.98 182.78 384.81 185.1C392.64 187.42 401.97 188.58 412.81 188.58C425.02 188.58 435.52 187.07 444.29 184.06C453.06 181.05 459.81 176.71 464.54 171.03C469.27 165.35 471.64 158.39 471.64 150.13C471.64 143.42 470.22 137.87 467.38 133.49C464.54 129.1 460.71 125.58 455.9 122.91H455.88Z"
                          stroke="black"
                          strokeWidth={2}
                          />
                          <path
                          d="M554.7 22.1602H521.16V57.2502H488.13V83.3102H521.16V185.48H554.7V83.3102H587.73V57.2502H554.7V22.1602Z"
                          stroke="black"
                          strokeWidth={2}
                          />
                          <path d="M647.58 1H608.62V30.41H647.58V1Z" stroke="black" strokeWidth={2} />
                          <path
                          d="M644.74 57.25H611.2V185.48H644.74V57.25Z"
                          stroke="black"
                          strokeWidth={2}
                          />
                          <path
                          d="M922.63 67.0504C917.64 62.7504 911.79 59.5704 905.09 57.5004C898.38 55.4404 891.07 54.4004 883.16 54.4004C874.39 54.4004 866.43 55.7804 859.29 58.5304C852.15 61.2804 845.91 64.9804 840.58 69.6204C835.25 74.2604 830.95 79.4204 827.68 85.1004C826.6 86.9704 825.67 88.8404 824.86 90.7104C824.24 88.1404 823.47 85.7004 822.52 83.4304C819.77 76.8104 815.9 71.3504 810.91 67.0504C805.92 62.7504 800.07 59.5704 793.37 57.5004C786.67 55.4304 779.35 54.4004 771.44 54.4004C762.32 54.4004 754.15 55.7804 746.93 58.5304C739.71 61.2804 733.47 65.0304 728.22 69.7504C722.97 74.4804 718.8 79.6804 715.71 85.3604C714.13 88.2604 712.84 91.2104 711.84 94.2104V57.2404H678.3V185.47H711.84V109.22C713.16 105.97 715.13 102.79 717.77 99.6804C722.24 94.4404 728.09 90.0904 735.31 86.6504C742.53 83.2104 750.62 81.4904 759.56 81.4904C771.43 81.4904 779.98 84.0304 785.23 89.1004C790.47 94.1804 793.1 102.13 793.1 112.97V185.47H826.64V107.03C826.64 105.85 826.61 104.69 826.57 103.55C827.42 102.25 828.39 100.96 829.48 99.6804C833.95 94.4404 839.8 90.0904 847.02 86.6504C854.24 83.2104 862.33 81.4904 871.27 81.4904C883.14 81.4904 891.74 84.0304 897.07 89.1004C902.4 94.1804 905.07 102.13 905.07 112.97V185.47H938.61V107.03C938.61 97.9104 937.19 90.0504 934.35 83.4204C931.51 76.8004 927.6 71.3404 922.61 67.0404L922.63 67.0504Z"
                          stroke="black"
                          strokeWidth={2}
                          />
                          <path
                          d="M1087.12 62.1502C1074.99 56.9902 1060.84 54.4102 1044.68 54.4102C1028.52 54.4102 1014.27 56.9902 1001.98 62.1502C989.68 67.3102 980.09 74.9202 973.21 84.9802C966.33 95.0402 962.89 107.3 962.89 121.75C962.89 136.2 966.33 148.37 973.21 158.26C980.09 168.15 989.68 175.68 1001.98 180.84C1014.28 186 1028.51 188.58 1044.68 188.58C1060.85 188.58 1075 186 1087.12 180.84C1099.24 175.68 1108.75 168.16 1115.63 158.26C1122.51 148.37 1125.95 136.2 1125.95 121.75C1125.95 107.3 1122.51 95.0502 1115.63 84.9802C1108.75 74.9202 1099.25 67.3102 1087.12 62.1502ZM1085.7 144.07C1081.57 150.18 1075.94 154.82 1068.8 158C1061.66 161.19 1053.62 162.77 1044.68 162.77C1035.74 162.77 1027.39 161.18 1020.17 158C1012.95 154.82 1007.27 150.18 1003.14 144.07C999.01 137.97 996.95 130.53 996.95 121.75C996.95 112.97 999.05 105.24 1003.27 99.0402C1007.48 92.8502 1013.2 88.1202 1020.43 84.8502C1027.65 81.5802 1035.74 79.9502 1044.68 79.9502C1053.62 79.9502 1061.88 81.5902 1068.93 84.8502C1075.98 88.1202 1081.57 92.8902 1085.7 99.1702C1089.83 105.45 1091.89 112.97 1091.89 121.75C1091.89 130.53 1089.83 137.96 1085.7 144.07Z"
                          stroke="black"
                          strokeWidth={2}
                          />
                          <path
                          d="M1283.34 67.0504C1278.35 62.7504 1272.5 59.5704 1265.79 57.5004C1259.08 55.4404 1251.77 54.4004 1243.86 54.4004C1234.74 54.4004 1226.57 55.7804 1219.35 58.5304C1212.13 61.2804 1205.89 65.0304 1200.64 69.7504C1195.39 74.4804 1191.22 79.6804 1188.13 85.3604C1186.55 88.2604 1185.26 91.2104 1184.26 94.2104V57.2404H1150.72V185.47H1184.26V109.22C1185.58 105.97 1187.55 102.79 1190.19 99.6804C1194.66 94.4404 1200.51 90.0904 1207.73 86.6504C1214.95 83.2104 1223.04 81.4904 1231.98 81.4904C1243.85 81.4904 1252.4 84.0304 1257.65 89.1004C1262.9 94.1804 1265.52 102.13 1265.52 112.97V185.47H1299.06V107.03C1299.06 97.9104 1297.68 90.0504 1294.93 83.4204C1292.18 76.8004 1288.31 71.3404 1283.32 67.0404L1283.34 67.0504Z"
                          stroke="black"
                          strokeWidth={2}
                          />
                          <path
                          d="M1365.12 57.25H1331.58V185.48H1365.12V57.25Z"
                          stroke="black"
                          strokeWidth={2}
                          />
                          <path d="M1367.96 1H1329V30.41H1367.96V1Z" stroke="black" strokeWidth={2} />
                          <path
                          d="M1521.22 95.7699C1520.42 92.9099 1519.48 90.1299 1518.38 87.4399C1514.25 77.2899 1507.67 69.2499 1498.64 63.3199C1489.61 57.3899 1477.7 54.4199 1462.9 54.4199C1449.48 54.4199 1437.48 57.2199 1426.91 62.7999C1416.33 68.3899 1407.95 76.1799 1401.75 86.1499C1395.56 96.1299 1392.46 107.91 1392.46 121.5C1392.46 135.09 1395.51 146.4 1401.62 156.46C1407.72 166.52 1415.98 174.35 1426.39 179.94C1436.8 185.53 1448.36 188.32 1461.09 188.32C1472.44 188.32 1482.16 186.3 1490.25 182.26C1498.33 178.22 1504.87 172.89 1509.86 166.26C1514.85 159.64 1518.54 152.42 1520.95 144.59C1521.04 144.29 1521.12 144 1521.21 143.7V152.46C1521.21 157.45 1521.38 162.52 1521.73 167.68C1522.07 172.84 1522.67 178.78 1523.54 185.48H1554.76V57.2499H1521.22V95.7699ZM1515.29 142.91C1511.33 149.1 1505.65 153.92 1498.26 157.36C1490.86 160.8 1482.09 162.52 1471.94 162.52C1462.99 162.52 1455.12 160.8 1448.33 157.36C1441.53 153.92 1436.24 149.15 1432.46 143.04C1428.67 136.94 1426.78 129.75 1426.78 121.5C1426.78 109.12 1430.74 99.1799 1438.65 91.6999C1446.56 84.2199 1457.65 80.4799 1471.93 80.4799C1482.08 80.4799 1490.81 82.0699 1498.12 85.2499C1505.43 88.4299 1511.11 93.0799 1515.15 99.1799C1519.19 105.29 1521.21 112.73 1521.21 121.5C1521.21 129.59 1519.23 136.72 1515.28 142.92L1515.29 142.91Z"
                          stroke="black"
                          strokeWidth={2}
                          />
                          <path
                          d="M1621.33 5.63965H1587.79V185.48H1621.33V5.63965Z"
                          stroke="black"
                          strokeWidth={2}
                          />
                          <path
                          d="M1770.85 133.49C1768.01 129.1 1764.18 125.58 1759.37 122.91C1754.55 120.24 1749.09 118.05 1742.99 116.33C1736.88 114.61 1730.48 113.06 1723.77 111.69C1715.86 110.31 1709.28 109.03 1704.03 107.82C1698.78 106.62 1694.83 105.03 1692.16 103.05C1689.49 101.07 1688.16 98.2802 1688.16 94.6602C1688.16 90.1902 1690.31 86.6602 1694.61 84.0802C1698.91 81.5002 1705.27 80.2102 1713.7 80.2102C1722.13 80.2102 1728.66 81.6302 1732.79 84.4702C1736.92 87.3102 1739.67 91.9102 1741.05 98.2702H1770.72C1770.72 89.6702 1768.61 82.0602 1764.4 75.4402C1760.18 68.8202 1753.86 63.6602 1745.44 59.9602C1737.01 56.2602 1726.43 54.4102 1713.7 54.4102C1705.27 54.4102 1697.4 55.2702 1690.09 56.9902C1682.78 58.7102 1676.42 61.2102 1671 64.4702C1665.58 67.7402 1661.36 71.7802 1658.36 76.6002C1655.35 81.4202 1653.85 86.9202 1653.85 93.1102C1653.85 99.3002 1655.35 104.85 1658.36 109.23C1661.37 113.62 1665.46 117.23 1670.62 120.07C1675.78 122.91 1681.71 125.19 1688.42 126.91C1695.13 128.63 1702.09 130.09 1709.32 131.3C1716.54 132.33 1722.48 133.45 1727.12 134.65C1731.76 135.86 1735.2 137.45 1737.44 139.42C1739.67 141.4 1740.79 144.19 1740.79 147.81C1740.79 150.74 1740.1 153.36 1738.73 155.68C1737.35 158 1734.86 159.77 1731.25 160.97C1727.64 162.18 1722.56 162.78 1716.03 162.78C1706.4 162.78 1698.61 160.93 1692.68 157.23C1686.75 153.53 1682.83 148.76 1680.94 142.91H1649.98C1649.63 145.32 1649.98 148.42 1651.01 152.2C1652.04 155.99 1653.98 159.99 1656.82 164.2C1659.66 168.42 1663.66 172.37 1668.82 176.07C1673.98 179.77 1680.47 182.78 1688.3 185.1C1696.13 187.42 1705.46 188.58 1716.29 188.58C1728.5 188.58 1739 187.07 1747.77 184.06C1756.54 181.05 1763.29 176.71 1768.02 171.03C1772.75 165.35 1775.12 158.39 1775.12 150.13C1775.12 143.42 1773.7 137.87 1770.86 133.49H1770.85Z"
                          stroke="black"
                          strokeWidth={2}
                          />
                      </g>
                      <defs>
                          <clipPath id="clip0_294_721">
                          <rect width="1776.11" height="189.58" fill="white" />
                          </clipPath>
                      </defs>
                  </svg>
                </div>
              </div>
            </div>
            <Newtestimonial></Newtestimonial>
            {/* <div className="col-lg-12">
              <div ref={cursorRef} className="drag-cursor">
                <img src="img/drga-cursor.svg" className="img-fluid" alt="Custom Cursor" />
              </div>
              <div className="testimponila_wrapper" ref={wrapperRef}>
                {testimonials.map((testimonial, index) => (
                  <div className="testimonila-items" key={index}>
                    <img src="img/testimonila-stars.svg" className='img-fluid'/>
                    <p>{testimonial.text}</p>
                    <div className="clinet-info">
                      <h4>{testimonial.name}</h4>
                      <h5>{testimonial.title}</h5>
                    </div>
                    <video
                      loop
                      muted
                      playsInline
                      autoPlay
                      preload='true'
                      className='hover-mask-hide'
                    >
                      <source src='video/testimonial.mp4' type="video/mp4" />
                    </video>
                  </div>
                ))}
                {testimonials.map((testimonial, index) => (
                  <div className="testimonila-items" key={index}>
                    <img src="img/testimonila-stars.svg" className='img-fluid'/>
                    <p>{testimonial.text}</p>
                    <div className="clinet-info">
                      <h4>{testimonial.name}</h4>
                      <h5>{testimonial.title}</h5>
                    </div>
                    <video
                      loop
                      muted
                      playsInline
                      autoPlay
                      preload='true'
                      className='hover-mask-hide'
                    >
                      <source src='video/testimonial.mp4' type="video/mp4" />
                    </video>
                  </div>
                ))}
                {testimonials.map((testimonial, index) => (
                  <div className="testimonila-items" key={index}>
                    <img src="img/testimonila-stars.svg" className='img-fluid'/>
                    <p>{testimonial.text}</p>
                    <div className="clinet-info">
                      <h4>{testimonial.name}</h4>
                      <h5>{testimonial.title}</h5>
                    </div>
                    <video
                      loop
                      muted
                      playsInline
                      autoPlay
                      preload='true'
                      className='hover-mask-hide'
                    >
                      <source src='video/testimonial.mp4' type="video/mp4" />
                    </video>
                  </div>
                ))}
                {testimonials.map((testimonial, index) => (
                  <div className="testimonila-items" key={index}>
                    <img src="img/testimonila-stars.svg" className='img-fluid'/>
                    <p>{testimonial.text}</p>
                    <div className="clinet-info">
                      <h4>{testimonial.name}</h4>
                      <h5>{testimonial.title}</h5>
                    </div>
                    <video
                      loop
                      muted
                      playsInline
                      autoPlay
                      preload='true'
                      className='hover-mask-hide'
                    >
                      <source src='video/testimonial.mp4' type="video/mp4" />
                    </video>
                  </div>
                ))}
                {testimonials.map((testimonial, index) => (
                  <div className="testimonila-items" key={index}>
                    <img src="img/testimonila-stars.svg" className='img-fluid'/>
                    <p>{testimonial.text}</p>
                    <div className="clinet-info">
                      <h4>{testimonial.name}</h4>
                      <h5>{testimonial.title}</h5>
                    </div>
                    <video
                      loop
                      muted
                      playsInline
                      autoPlay
                      preload='true'
                      className='hover-mask-hide'
                    >
                      <source src='video/testimonial.mp4' type="video/mp4" />
                    </video>
                  </div>
                ))}
                {testimonials.map((testimonial, index) => (
                  <div className="testimonila-items" key={index}>
                    <img src="img/testimonila-stars.svg" className='img-fluid'/>
                    <p>{testimonial.text}</p>
                    <div className="clinet-info">
                      <h4>{testimonial.name}</h4>
                      <h5>{testimonial.title}</h5>
                    </div>
                    <video
                      loop
                      muted
                      playsInline
                      autoPlay
                      preload='true'
                      className='hover-mask-hide'
                    >
                      <source src='video/testimonial.mp4' type="video/mp4" />
                    </video>
                  </div>
                ))}
                {testimonials.map((testimonial, index) => (
                  <div className="testimonila-items" key={index}>
                    <img src="img/testimonila-stars.svg" className='img-fluid'/>
                    <p>{testimonial.text}</p>
                    <div className="clinet-info">
                      <h4>{testimonial.name}</h4>
                      <h5>{testimonial.title}</h5>
                    </div>
                    <video
                      loop
                      muted
                      playsInline
                      autoPlay
                      preload='true'
                      className='hover-mask-hide'
                    >
                      <source src='video/testimonial.mp4' type="video/mp4" />
                    </video>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
