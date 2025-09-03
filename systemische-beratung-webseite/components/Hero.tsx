import React, { useEffect, useRef, useState } from 'react';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showVideo, setShowVideo] = useState(true);
  const [visibleVideo, setVisibleVideo] = useState(false);

  useEffect(() => {
    // Respect users who prefer reduced motion
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setShowVideo(false);
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    // Try to play the muted video. If browser blocks autoplay, we'll silently ignore.
  let timeoutId: number | undefined;
  let hideTimeoutId: number | undefined;
  const startPlayback = async () => {
      // fade in
      setVisibleVideo(true);

      try {
        // Ensure video is ready to play; calling play() returns a promise
        await video.play();
      } catch (e) {
        // autoplay might be blocked; continue with visual fade but don't rely on audio
      }

      // After ~6s of visible play, start fade-out (1s transition)
      timeoutId = window.setTimeout(() => {
        setVisibleVideo(false); // triggers CSS transition to opacity 0

        // after transition ends, pause and unmount
        hideTimeoutId = window.setTimeout(() => {
          try { video.pause(); } catch {}
          setShowVideo(false);
        }, 1000);
      }, 6000);
    };
    setTimeout(startPlayback, 20000);
    

    return () => {
      if (typeof timeoutId === 'number') clearTimeout(timeoutId);
      if (typeof hideTimeoutId === 'number') clearTimeout(hideTimeoutId);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center text-fg-hero bg-cover bg-center hero-bg-matruschka bg-hero"
    >
      {/* Background video: plays once for ~6s, then hidden. Kept separate so background image remains. */}
      {showVideo && (
        <video
          ref={videoRef}
          src="images/dance.mp4"
          className={`absolute inset-0 w-full h-full object-cover z-0 hero-video ${visibleVideo ? 'hero-video--visible' : ''}`}
          muted
          playsInline
          preload="auto"
          loop={false}
        />
      )}

  <div className="absolute inset-0 opacity-40 z-10 hero-overlay"></div>
      <div className="relative z-20 p-6">
  <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg text-fg-hero-heading">
          Menschen & Systeme verstehen.
        </h1>
        <h2 className="font-body text-3xl md:text-5xl mt-4 drop-shadow-md">
          Lösungen entfalten. Freiheit finden.
        </h2>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-fg-hero" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;