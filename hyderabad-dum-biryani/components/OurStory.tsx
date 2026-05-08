"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { NizamiSectionOverlay, NizamiGhostSilhouette } from "./NizamiBackground";

export default function OurStory() {
  return (
    <section
      id="our-story"
      style={{
        background: "#040810",
        paddingTop: "clamp(60px, 10vw, 140px)",
        paddingBottom: "clamp(60px, 10vw, 140px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <NizamiSectionOverlay />
      <NizamiGhostSilhouette />
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 80px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "20px" }}
        >
          <span
            style={{
              display: "block",
              color: "#FF9500",
              fontSize: "13px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Our Heritage
          </span>
        </motion.div>

        {/* Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              height: "1px",
              width: "64px",
              background: "linear-gradient(to right, transparent, rgba(255,149,0,0.4))",
            }}
          />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 0L9.79 6.21L16 8L9.79 9.79L8 16L6.21 9.79L0 8L6.21 6.21L8 0Z"
              fill="rgba(255,149,0,0.6)"
            />
          </svg>
          <div
            style={{
              height: "1px",
              width: "64px",
              background: "linear-gradient(to left, transparent, rgba(255,149,0,0.4))",
            }}
          />
        </div>

        {/* Two-column layout — stacks on mobile */}
        <div className="story-grid">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="story-image-wrap">
              <Image
                src="/images/story-hero.jpg"
                alt="Traditional Hyderabad Dum Biryani cooking"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 767px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2
              style={{
                color: "#ffffff",
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: "28px",
                letterSpacing: "-0.02em",
              }}
            >
              Born in the kitchens
              <br />
              of Hyderabad.
            </h2>

            <p
              style={{
                fontSize: "clamp(15px, 2vw, 18px)",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              Over 400 years ago, in the royal Nizami kitchens of Hyderabad, a
              culinary masterpiece was born. The art of Dum cooking — sealing
              raw marinated meat and parboiled rice inside a heavy copper handi,
              cooking it over a slow, patient flame until every grain of rice
              absorbs the soul of the spices.
            </p>

            <p
              style={{
                fontSize: "clamp(15px, 2vw, 18px)",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.8,
              }}
            >
              This was never fast food. It was an act of devotion. A philosophy
              that said: the best things in life take time. The sealed pot traps
              steam, aroma, and centuries of accumulated wisdom inside a single
              vessel.
            </p>

            <div
              style={{
                color: "#FF9500",
                fontSize: "14px",
                letterSpacing: "2px",
                fontWeight: 600,
                marginTop: "20px",
              }}
            >
              Since 1603
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .story-image-wrap {
          width: 100%;
          height: 480px;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
        }
        @media (max-width: 767px) {
          .story-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .story-image-wrap {
            height: 260px;
          }
        }
      `}</style>
    </section>
  );
}
