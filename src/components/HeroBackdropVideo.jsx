import { useEffect, useRef, useState } from "react";

function cx(...p) {
  return p.filter(Boolean).join(" ");
}

const HERO_VIDEO_SRC = "/videos/hero-bg.mp4";
/** Slightly slower than real time; 1 = normal. */
const HERO_VIDEO_PLAYBACK_RATE = 0.88;

export default function HeroBackdropVideo() {
  const videoRef = useRef(null);
  const [reduceMotion, setReduceMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const applyPlaybackRate = () => {
      v.playbackRate = HERO_VIDEO_PLAYBACK_RATE;
    };
    applyPlaybackRate();
    v.addEventListener("loadedmetadata", applyPlaybackRate);
    return () => v.removeEventListener("loadedmetadata", applyPlaybackRate);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      setReduceMotion(mq.matches);
      const v = videoRef.current;
      if (!v) return;
      if (mq.matches) {
        v.pause();
      } else {
        v.playbackRate = HERO_VIDEO_PLAYBACK_RATE;
        const p = v.play();
        if (p) void p.catch(() => {});
      }
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <video
      ref={videoRef}
      className={cx("absolute inset-0 h-full w-full object-cover [transform:translateZ(0)]", reduceMotion && "opacity-0")}
      src={HERO_VIDEO_SRC}
      autoPlay={!reduceMotion}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden
    />
  );
}
