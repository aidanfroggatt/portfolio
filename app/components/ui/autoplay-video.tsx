import { useInView } from 'framer-motion';
import { CSSProperties, useEffect, useRef } from 'react';
import { buildUrl } from '~/lib/cloudinary';

interface VideoWithAutoplayProps {
  publicId: string;
  alt?: string;
  style?: CSSProperties;
  className?: string;
}

const VideoWithAutoplay = ({ publicId, alt, style, className = '' }: VideoWithAutoplayProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { amount: 0.25 });

  useEffect(() => {
    if (!videoRef.current) return;

    if (isInView) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn('Autoplay prevented by browser:', error);
        });
      }
    } else {
      videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <video
      ref={videoRef}
      className={`${className} relative z-10 max-h-[75vh]`}
      style={style}
      playsInline
      muted
      loop
      autoPlay
      preload="metadata"
      aria-label={alt}
      poster={buildUrl(publicId, 'video', { format: 'jpg', quality: 'auto' })}
    >
      <source src={buildUrl(publicId, 'video')} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoWithAutoplay;
