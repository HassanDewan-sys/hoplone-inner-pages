import React, { useLayoutEffect, useRef, useState } from 'react';

const VideoSection = () => {
  const videoRef = useRef(null);
  const cursorRef = useRef(null);
  const [videoMuted, setVideoMuted] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  useLayoutEffect(() => {
    const isMobile = window.innerWidth < 768;
    const startValue = isMobile ? "-=170%" : "-=50%";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#video",
        start: startValue,
        end: "+=100%",
        scrub: true,
        pin: false,
      }
    });

    tl.to([".circle01", ".circle02", ".video"], {
      left: "50%",
      x: '-50%',
      duration: 1,
    })
    .to([".circle01", ".circle02", ".video"], {
      top: '0vh',
      width: "100%",
      height: "100%",
      borderRadius: 0,
      ease: "power1.inOut",
      duration: 1,
    })
    .to(["#video-cursor"], {
      display: 'flex',
      ease: "power1.inOut",
      duration: 1,
    });

    const handleMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power1.out"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useLayoutEffect(() => {
    gsap.to("#video-cursor", {
      scrollTrigger: {
          trigger: "#video",
          start: "bottom",
          end: "bottom",
          scrub: 0.5,
      },
      display: 'none',
    });
  }, []);

  const toggleMute = () => {
    const newMuteState = !videoMuted;
    videoRef.current.muted = newMuteState;
    setVideoMuted(newMuteState);
  };

  const togglePlayPause = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <section id='video'>
      <div className="circle01"></div>
      <div className="circle02"></div>
      <div className="video">
        <button onClick={togglePlayPause}>
          <video ref={videoRef} muted autoPlay playsInline loop>
            <source src="video/hero-video.mp4" type="video/mp4" />
          </video>
        </button>
      </div>
      <div id="video-cursor" ref={cursorRef} onClick={toggleMute}>
        <div className="marquee">
          {videoMuted ? (
            <>
              <span>Play Sound&nbsp;</span>
              <span>Play Sound&nbsp;</span>
              <span>Play Sound&nbsp;</span>
              <span>Play Sound&nbsp;</span>
            </>
          ) : (
            <>
              <span>Pause Sound&nbsp;</span>
              <span>Pause Sound&nbsp;</span>
              <span>Pause Sound&nbsp;</span>
              <span>Pause Sound&nbsp;</span>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;