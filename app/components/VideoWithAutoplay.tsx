import { useInView } from "framer-motion";
import { CSSProperties, useRef } from "react";
import { VideoAsset } from "~/data/work";

interface VideoWithAutoplay {
  asset: VideoAsset;
  style?: CSSProperties;
  className?: string;
}

const VideoWithAutoplay = ({
  asset,
  style,
  className = "",
}: VideoWithAutoplay) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { amount: 0.25 });

  // Play or pause the video based on visibility
  if (videoRef.current) {
    if (isInView) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset video playback when out of view
    }
  }

  return (
    <video
      ref={videoRef}
      className={`${className} relative z-10 max-h-[75vh] w-full h-full object-contain highlight-card-asset`}
      style={style}
      poster={asset.poster}
      playsInline
      muted
      loop
    >
      <source src={asset.src} type="video/mp4" />
      <track kind="captions" srcLang="en" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoWithAutoplay;
