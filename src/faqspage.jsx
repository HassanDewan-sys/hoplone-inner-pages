import React, { useLayoutEffect } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import gsap from 'gsap'; // Import gsap for animations

const faqspage = () => {
    const accordionItems = [
        {
            title: 'How fast will my requests be delivered?',
            content: 'You can typically expect to receive your tasks within 24 hours. However, please keep in mind that larger tasks demand additional time and attention, so the delivery timeframe might extend. Our commitment is to ensure each task receives the necessary dedication for top-notch results.',
        },
        {
            title: 'Who will I be working with?',
            content: 'You will be working with our dedicated team of professionals who are committed to delivering high-quality results tailored to your needs.',
        },
        {
            title: 'What languages do you code in?',
            content: 'We are proficient in various programming languages including JavaScript, Python, Java, and more, ensuring we can meet your coding requirements.',
        },
        {
            title: 'Why would I not just hire a freelancer?',
            content: 'Our service provides dedicated support and expertise across multiple disciplines, ensuring comprehensive and reliable solutions beyond what a freelancer can offer.',
        },
        {
            title: 'What if I dont have enough requests for the month?',
            content: 'No worries! Our flexible service model allows you to scale your requests as needed, ensuring you get the support you need without unnecessary overhead.',
        },
        {
            title: 'Can I customize my plan?',
            content: 'Absolutely! We offer customizable plans to fit your specific needs, ensuring you get the most out of our services tailored to your requirements.',
        },
        {
            title: 'How secure is my data?',
            content: 'We prioritize the security and confidentiality of your data. Our systems are designed with robust security measures to protect your information at all times.',
        },
        {
            title: 'Do you offer support outside business hours?',
            content: 'Yes, we understand the importance of timely support. Our team is available to assist you beyond regular business hours to address any urgent needs or inquiries.',
        },
        {
            title: 'What payment methods do you accept?',
            content: 'We accept various payment methods including credit/debit cards, PayPal, and bank transfers for your convenience.',
        },
    ];

    useLayoutEffect(() => {
        const drag_faqs = (event) => {
            gsap.to('.faq-page-cursor', {
                x: event.clientX,
                y: event.clientY,
                duration: 0.1,
                ease: 'power2.out'
            });
        };

        window.addEventListener('mousemove', drag_faqs);

        return () => {
            window.removeEventListener('mousemove', drag_faqs);
        };
    }, []);

    useLayoutEffect(() => {
        $(document).ready(function() {
            $('.faq-n-cursor').hover(function() {
                $('.faq-page-cursor').addClass('new');
            }, function() {
                $('.faq-page-cursor').removeClass('new');
            });
        });     
    }, []);

    return (
        <>
            <section id="faqpage" className="inner-banners hover-mask-hide cr-hover">
                <div className="container-fluid">
                    <div className="col-lg-11 mx-auto">
                        <div className="row">
                            <div className="col-lg-6">
                                <h4>Find Answers Here</h4>
                                <h5>FAQs</h5>
                            </div>
                            <div className="col-lg-6">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='faq' className='fag-page-faq-section'>
                <div className="faq-page-cursor">
                    <h5>Explore</h5>
                </div>
                <div className="container-fluid">
                    <div className="col-lg-11 mx-auto">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <div className="accordion faq-n-cursor" id="accordionExample">
                                    {accordionItems.map((item, index) => (
                                        <div className="accordion-item" key={index}>
                                            <h2 className="accordion-header" id={`heading${index}`}>
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#collapse${index}`}
                                                    aria-expanded={index === 0 ? 'true' : 'false'}
                                                    aria-controls={`collapse${index}`}
                                                >
                                                    {item.title}
                                                </button>
                                            </h2>
                                            <div
                                                id={`collapse${index}`}
                                                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                                aria-labelledby={`heading${index}`}
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body">
                                                    {item.content}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default faqspage;