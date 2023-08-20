import React, { useState, useEffect, useRef } from 'react';
import '../styles/animations/FadeInOnScroll.css'; // Make sure to create this CSS file

const FadeInOnScroll = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const currentRef = domRef.current;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting));
        });

        observer.observe(currentRef);

        return () => observer.unobserve(currentRef);
    }, []);

    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {children}
        </div>
    );
};

export default FadeInOnScroll;
