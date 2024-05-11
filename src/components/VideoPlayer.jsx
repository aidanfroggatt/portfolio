import React, { useRef, useEffect } from 'react';

function VideoPlayer({ src }) {
    const videoRef = useRef(null);

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
                    // When the video is in view, play and loop
                    video.play();
                    video.loop = true;
                } else {
                    // When the video is out of view, pause and stop looping
                    video.pause();
                    video.loop = false;
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

    return (
        <video ref={videoRef} width="640" height="360" controls>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}

export default VideoPlayer;
