import React, { useRef, useLayoutEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';

const ImageRow = ({ images, delay, repeatCount = 100, direction = 'left', initialPosition = 4000 }) => {
    const [style, api] = useSpring(() => ({ x: initialPosition }));
    const galleryRef = useRef(null);
    const imageWidth = useRef(0);
    const intervalRef = useRef(null);

    const bind = useDrag(({ offset: [x], last, memo = style.x.get() }) => {
        if (last) {
            startSliding();
        } else {
            api.start({ x: memo + x });
            stopSliding();
        }
        return memo;
    });

    const getRepeatedImages = (images, count) => {
        const repeatedImages = [];
        for (let i = 0; i < count; i++) {
            repeatedImages.push(...images);
        }
        return repeatedImages;
    };

    const duplicatedImages = getRepeatedImages(images, repeatCount);

    useLayoutEffect(() => {
        if (galleryRef.current) {
            const img = galleryRef.current.querySelector('img');
            if (img) {
                imageWidth.current = img.offsetWidth;
            }
        }
    }, []);

    const startSliding = () => {
        intervalRef.current = setInterval(() => {
            const increment = direction === 'left' ? -5 : 5;
            api.start({ x: (style.x.get() + increment) % (imageWidth.current * duplicatedImages.length) });
        }, 10);  // Speed adjustment
    };

    const stopSliding = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    useLayoutEffect(() => {
        const timeout = setTimeout(startSliding, delay);
        return () => {
            clearTimeout(timeout);
            stopSliding();
        };
    }, [api, style.x, delay, duplicatedImages.length, direction]);

    return (
        <animated.div
            className="gallery-images-wrapper"
            ref={galleryRef}
            {...bind()}
            style={{ transform: style.x.to(x => `translate3d(${x}px,0,0)`) }}
        >
            {duplicatedImages.map((src, index) => (
                <div className="img-items" key={index}>
                    <img src={src} className='img-fluid' alt={`Image ${index}`} />
                </div>
            ))}
        </animated.div>
    );
};

const BrandingPage = () => {
    // Generate images dynamically within the component
    const images1 = generateImages(4, 1);
    const images2 = generateImages(4, 5);
    const images3 = generateImages(4, 9);
    const images4 = generateImages(4, 13);

    // Function to generate images based on start index
    function generateImages(count, startIdx) {
        const images = [];
        for (let i = 0; i < count; i++) {
            images.push(`img/branding-gallery/br-item${startIdx + i}.jpg`);
        }
        return images;
    }

    return (
        <>
            <section id="brandingpage" className="inner-banners hover-mask-hide cr-hover">
                <div className="container-fluid">
                    <div className="col-lg-11 mx-auto">
                        <div className="row">
                            <div className="col-lg-6">
                                <h4>Creative</h4>
                                <h5>Branding</h5>
                            </div>
                            <div className="col-lg-6">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="gallery">
                <div className="row">
                    <div className="col-lg-12">
                        <h5>Portfolio</h5>
                        <ImageRow images={images1} delay={0} direction="left" initialPosition={-4000} />
                        <ImageRow images={images2} delay={600} direction="right" initialPosition={4000} />
                        <ImageRow images={images3} delay={1200} direction="left" initialPosition={-4000} />
                        {/* <ImageRow images={images4} delay={1800} direction="right" initialPosition={4000} /> */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default BrandingPage;