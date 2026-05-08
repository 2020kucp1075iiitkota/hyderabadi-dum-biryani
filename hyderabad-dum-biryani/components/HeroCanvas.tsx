"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

const TOTAL_FRAMES = 240;
const SCROLL_HEIGHT_VH = 400;

interface StoryBeat {
  startProgress: number;
  endProgress: number;
  align: "center" | "left" | "right";
  headline: string;
  subtitle?: string;
  lines: string[];
  cta?: { primary: string; secondary: string; micro: string };
}

const storyBeats: StoryBeat[] = [
  {
    startProgress: 0,
    endProgress: 0.15,
    align: "center",
    headline: "Hyderabad Dum Biryani",
    subtitle: "Patience, perfected.",
    lines: ["Centuries of culinary mastery, sealed inside a single pot."],
  },
  {
    startProgress: 0.15,
    endProgress: 0.4,
    align: "left",
    headline: "Layered with precision, cooked with purpose.",
    lines: [
      "Slow-cooked marinated chicken, hand-selected whole spices, and aged basmati rice — sealed together by the ancient art of dum cooking.",
      "Every layer built intentionally. Every grain of rice a decision.",
    ],
  },
  {
    startProgress: 0.4,
    endProgress: 0.65,
    align: "right",
    headline: "A symphony of spices, redefined.",
    lines: [
      "Every spice selected for depth, warmth, and balance.",
      "Star anise, cardamom, cinnamon — not decoration, but architecture.",
      "Your senses stay captivated. Noise, stress, and hunger fade away.",
    ],
  },
  {
    startProgress: 0.65,
    endProgress: 0.85,
    align: "left",
    headline: "Rich, layered, and deeply alive.",
    lines: [
      "Aged basmati rice that absorbs every flavor. Hand-pounded spice pastes. Slow dum heat that transforms raw ingredients into something unforgettable.",
      "This is not just food. This is architecture.",
    ],
  },
  {
    startProgress: 0.85,
    endProgress: 1.0,
    align: "center",
    headline: "Taste everything. Forget everything else.",
    subtitle:
      "Hyderabad Dum Biryani. Crafted for the senses. Built on centuries.",
    lines: [],
    cta: {
      primary: "Order Now",
      secondary: "Explore the Menu",
      micro: "Slow cooked. Dum sealed. Hand crafted — every single time.",
    },
  },
];

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const rafIdRef = useRef<number>(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const num = i.toString().padStart(3, "0");
      img.src = `/frames/frame_${num}.jpg`;
      img.onload = () => {
        loadedCount++;
        setLoadProgress(loadedCount / TOTAL_FRAMES);
        if (loadedCount === TOTAL_FRAMES) {
          setImagesLoaded(true);
        }
      };
      images.push(img);
    }
    imagesRef.current = images;
  }, []);

  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[frameIndex];
    if (!canvas || !ctx || !img) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.fillStyle = "#040810";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const imgRatio = img.width / img.height;
    const canvasRatio = canvas.width / canvas.height;
    let drawWidth, drawHeight, drawX, drawY;

    if (canvasRatio > imgRatio) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      drawX = 0;
      drawY = (canvas.height - drawHeight) / 2;
    } else {
      drawHeight = canvas.height;
      drawWidth = canvas.height * imgRatio;
      drawX = (canvas.width - drawWidth) / 2;
      drawY = 0;
    }

    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollableHeight =
        containerRef.current.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));

      setScrollProgress(progress);

      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(progress * (TOTAL_FRAMES - 1)))
      );

      if (
        frameIndex !== currentFrameRef.current &&
        imagesRef.current[frameIndex]
      ) {
        currentFrameRef.current = frameIndex;
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = requestAnimationFrame(() => drawFrame(frameIndex));
      }
    };

    const handleResize = () => {
      if (imagesRef.current[currentFrameRef.current]) {
        drawFrame(currentFrameRef.current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafIdRef.current);
    };
  }, [drawFrame]);

  useEffect(() => {
    if (imagesLoaded) {
      drawFrame(0);
    }
  }, [imagesLoaded, drawFrame]);

  const activeBeat = storyBeats.find(
    (beat) =>
      scrollProgress >= beat.startProgress &&
      scrollProgress < beat.endProgress
  );

  const getBeatOpacity = (beat: StoryBeat) => {
    const beatDuration = beat.endProgress - beat.startProgress;
    const beatProgress = (scrollProgress - beat.startProgress) / beatDuration;
    const fadeIn = Math.min(1, beatProgress / 0.15);
    const fadeOut = Math.min(1, (1 - beatProgress) / 0.15);
    return Math.min(fadeIn, fadeOut);
  };

  const getAlignmentStyles = (align: string) => {
    // On mobile always center, on desktop use the original alignment
    const base = {
      position: "absolute" as const,
      top: "50%",
      transform: "translateY(-50%)",
      display: "flex",
      flexDirection: "column" as const,
      gap: "12px",
      padding: "0 20px",
      zIndex: 10,
      pointerEvents: "none" as const,
      width: "100%",
      maxWidth: "100vw",
    };

    if (align === "left") {
      return { ...base };
    } else if (align === "right") {
      return { ...base };
    } else {
      return { ...base };
    }
  };

  return (
    <section
      id="overview"
      ref={containerRef}
      className="relative"
      style={{ height: `${SCROLL_HEIGHT_VH}vh` }}
    >
      {/* Loading screen */}
      {!imagesLoaded && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-biryani-black">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-6 px-8 text-center"
          >
            <h2 className="text-xl md:text-2xl font-light tracking-wider text-white/80">
              HYDERABAD DUM BIRYANI
            </h2>
            <div className="w-40 md:w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-saffron to-amber"
                style={{ width: `${loadProgress * 100}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="text-sm text-white/40">
              {Math.round(loadProgress * 100)}%
            </p>
          </motion.div>
        </div>
      )}

      {/* Sticky canvas */}
      <div className="sticky top-0 h-screen w-full">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ background: "#040810" }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(13,8,0,0.4) 0%, transparent 70%)",
          }}
        />

        {/* Text Overlays */}
        {storyBeats.map((beat, index) => {
          const isActive =
            scrollProgress >= beat.startProgress &&
            scrollProgress < beat.endProgress;
          const opacity = isActive ? getBeatOpacity(beat) : 0;

          return (
            <motion.div
              key={index}
              style={{
                position: "absolute",
                top: "50%",
                left: beat.align === "right" ? "auto" : beat.align === "left" ? "0" : "50%",
                right: beat.align === "right" ? "0" : "auto",
                transform: beat.align === "center" ? "translate(-50%, -50%)" : "translateY(-50%)",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                zIndex: 10,
                pointerEvents: "none",
              }}
              className={`hero-beat hero-beat--${beat.align}`}
              animate={{
                opacity,
                y: isActive ? 0 : 30,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h1 className="hero-headline">{beat.headline}</h1>

              {beat.subtitle && (
                <p className="hero-subtitle">{beat.subtitle}</p>
              )}

              {beat.lines.map((line, li) => (
                <p key={li} className="hero-line">
                  {line}
                </p>
              ))}

              {beat.cta && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "16px",
                    marginTop: "16px",
                    pointerEvents: "auto",
                  }}
                >
                  <a
                    href="#order"
                    className="btn-gradient"
                    style={{
                      padding: "14px 32px",
                      borderRadius: "999px",
                      fontSize: "16px",
                      fontWeight: 600,
                      letterSpacing: "0.5px",
                      textDecoration: "none",
                    }}
                  >
                    {beat.cta.primary}
                  </a>
                  <a
                    href="#menu"
                    style={{
                      color: "#FF9500",
                      fontSize: "14px",
                      letterSpacing: "0.5px",
                      textDecoration: "none",
                    }}
                  >
                    {beat.cta.secondary} →
                  </a>
                  <p
                    style={{
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.3)",
                      marginTop: "8px",
                      letterSpacing: "1px",
                      textAlign: "center",
                    }}
                  >
                    {beat.cta.micro}
                  </p>
                </div>
              )}
            </motion.div>
          );
        })}

        {/* Scroll indicator */}
        {scrollProgress < 0.05 && imagesLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-xs text-white/30 tracking-widest uppercase">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
            >
              <div className="w-1 h-1.5 rounded-full bg-saffron" />
            </motion.div>
          </motion.div>
        )}
      </div>

      <style>{`
        .hero-beat {
          padding: 0 20px;
          max-width: 92vw;
        }
        .hero-beat--left { max-width: min(560px, 92vw); }
        .hero-beat--right { max-width: min(560px, 92vw); }
        .hero-beat--center { max-width: min(640px, 92vw); }

        .hero-headline {
          color: rgba(255,255,255,0.9);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
          font-size: clamp(1.6rem, 6vw, 4.5rem);
        }
        .hero-subtitle {
          color: rgba(255,255,255,0.6);
          font-weight: 300;
          letter-spacing: 0.02em;
          font-size: clamp(1rem, 3vw, 1.5rem);
        }
        .hero-line {
          color: rgba(255,255,255,0.5);
          font-weight: 300;
          line-height: 1.6;
          font-size: clamp(0.9rem, 2.5vw, 1.1rem);
        }

        @media (min-width: 768px) {
          .hero-beat--left {
            left: 8% !important;
            right: auto !important;
            transform: translateY(-50%) !important;
            text-align: left;
            align-items: flex-start;
          }
          .hero-beat--right {
            right: 8% !important;
            left: auto !important;
            transform: translateY(-50%) !important;
            text-align: right;
            align-items: flex-end;
          }
          .hero-beat--center {
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            text-align: center;
            align-items: center;
          }
        }
        @media (max-width: 767px) {
          .hero-beat {
            left: 50% !important;
            right: auto !important;
            transform: translate(-50%, -50%) !important;
            text-align: center !important;
            align-items: center !important;
          }
        }
      `}</style>
    </section>
  );
}
