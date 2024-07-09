import React, { useState, useLayoutEffect } from 'react';
import Header from './header';
import MobileMenu from './components/mobilemenu';
import Home from './home';
import AboutPage from './aboutpage';
import Servicepage from './servicepage';
import Footer from './footer';
import ContactPage from './contactpage';
import Brandingpage from './brandingpage';
import Faqspage from './faqspage';
import Workpage from './workpage';
import Blogpage from './blogpage';
import SingleBlogPage from './singleblogpage';

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useLayoutEffect(() => {
        const handleMouseEnter = () => {
            setIsHovered(true);
        };

        const handleMouseLeave = () => {
            setIsHovered(false);
        };

        const hoverElements = document.querySelectorAll('.cr-hover');
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            hoverElements.forEach(element => {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    useLayoutEffect(() => {
        const handleMouseMove = (event) => {
            gsap.to('.small-hover-cursor', {
                x: event.clientX,
                y: event.clientY,
                duration: 0.1,
                ease: 'power2.out'
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useLayoutEffect(() => {
        const hoverMaskHideElements = document.querySelectorAll('.hover-mask-hide');

        hoverMaskHideElements.forEach(hoverElement => {
            hoverElement.addEventListener('mouseenter', () => {
                const maskHideElements = document.querySelectorAll('.mask-hide');
                maskHideElements.forEach(maskElement => maskElement.classList.add('hide'));
            });

            hoverElement.addEventListener('mouseleave', () => {
                const maskHideElements = document.querySelectorAll('.mask-hide');
                maskHideElements.forEach(maskElement => maskElement.classList.remove('hide'));
            });
        });

        return () => {
            hoverMaskHideElements.forEach(hoverElement => {
                hoverElement.removeEventListener('mouseenter', () => { });
                hoverElement.removeEventListener('mouseleave', () => { });
            });
        };
    }, []);

    const renderContent = () => {
        switch (currentPath) {
            case '/':
                return <Home />;
            case '/about':
                return <AboutPage />;
            case '/service':
                return <Servicepage />;
            case '/contact':
                return <ContactPage />;
            case '/branding':
                return <Brandingpage />;
            case '/faq':
                return <Faqspage />;
            case '/work':
                return <Workpage />;
            case '/blog':
                return <Blogpage />;
            case '/single-blog':
                return <SingleBlogPage />;
            default:
                return <Home />;
        }
    };

    return (
        <div>
            <div className={`small-hover-cursor ${isHovered ? 'show' : ''}`}></div>
            <Header toggleMenu={toggleMenu} isMenuOpen={isOpen} />
            <MobileMenu isOpen={isOpen} />
            {renderContent()}
            <Footer />
        </div>
    );
};

export default App;