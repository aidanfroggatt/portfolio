import React, { useRef, useEffect, useState } from 'react';

function VideoPlayer({ src, style, className, controls, loop }) {
    const videoRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const video = videoRef.current;

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // When 50% of the video is in view
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                } else {
                    setIsInView(false);
                    // Reset video to the beginning
                    video.currentTime = 0;
                }
            });
        }, options);

        observer.observe(video);

        return () => {
            observer.unobserve(video);
        };
    }, []);

    useEffect(() => {
        const video = videoRef.current;

        if (isInView) {
            video.play();
            video.loop = loop;
        } else {
            video.pause();
            video.loop = false;
        }
    }, [isInView, loop]);

    return (
        <video ref={videoRef} style={style} className={className} controls={controls} loop={loop}>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}

export default VideoPlayer;
