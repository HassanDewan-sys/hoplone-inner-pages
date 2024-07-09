import React, { useLayoutEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from 'jquery';

const newtestimonial = () => {

    const testimonialSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
            breakpoint: 768, // Mobile breakpoint
            settings: {
                autoplaySpeed: 5000, // Slower autoplay speed on mobile
            },
            },
        ],
    };

    const testimonials = [
        { text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore diam nonummy nibh euismod tincidunt ut", author: "John Doe, Google" },
        { text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore diam nonummy nibh euismod tincidunt ut", author: "Jane Smith, Facebook" },
        { text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore diam nonummy nibh euismod tincidunt ut", author: "Alice Johnson, Amazon" },
        { text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore diam nonummy nibh euismod tincidunt ut", author: "Bob Brown, Microsoft" },
    ];

    useLayoutEffect(() => {
        const drag_testi = (event) => {
            gsap.to('.drag-testimonial', {
            x: event.clientX,
            y: event.clientY,
            duration: 0.1,
            ease: 'power2.out'
            });
        };

        window.addEventListener('mousemove', drag_testi);

        return () => {
            window.removeEventListener('mousemove', drag_testi);
        };
    }, []);

    useLayoutEffect(() => {
        $(document).ready(function() {
            $('#new_testimonial .testimonail-itms-new-wraaper .slick-arrow').hover(function() {
                $('.drag-testimonial').addClass('hide');
                $('.small-hover-cursor').addClass('show');
            }, function() {
                $('.drag-testimonial').removeClass('hide');
                $('.small-hover-cursor').removeClass('show');
            });
        });     
    }, []);

  return (
    <div className="testimonail-itms-new-wraaper hover-mask-hide">
        <div className="drag-testimonial">
            <h6>DRAG</h6>
        </div>
        <Slider {...testimonialSettings}>
        {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item-new">
            <p>{testimonial.text}</p>
            <h5>{testimonial.author}</h5>
            </div>
        ))}
        </Slider>
    </div>
  )
}

export default newtestimonial