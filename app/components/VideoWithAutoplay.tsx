import { useInView } from 'framer-motion';
import { CSSProperties, useEffect, useRef } from 'react';

interface VideoAssetProps {
  src: string;
  poster?: string | null;
  alt?: string;
}

interface VideoWithAutoplayProps {
  asset: VideoAssetProps;
  style?: CSSProperties;
  className?: string;
}

const VideoWithAutoplay = ({ asset, style, className = '' }: VideoWithAutoplayProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { amount: 0.25 });

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isInView]);

  return (
    <video
      ref={videoRef}
      className={`${className} relative z-10 max-h-[75vh] w-full h-full object-contain highlight-card-asset`}
      style={style}
      poster={asset.poster || undefined}
      playsInline
      muted
      loop
      aria-label={asset.alt}
    >
      <source src={asset.src} type="video/mp4" />
      <track kind="captions" srcLang="en" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoWithAutoplay;
