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
        paddingTop: "140px",
        paddingBottom: "140px",
        paddingLeft: "80px",
        paddingRight: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <NizamiSectionOverlay />
      <NizamiGhostSilhouette />
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* ===== PART 1 — Centered Section Header ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              display: "block",
              width: "100%",
              textAlign: "center",
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

        {/* Nizami ornamental SVG divider — centered */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "60px",
          }}
        >
          <div
            style={{
              height: "1px",
              width: "64px",
              background:
                "linear-gradient(to right, transparent, rgba(255,149,0,0.4))",
            }}
          />
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8 0L9.79 6.21L16 8L9.79 9.79L8 16L6.21 9.79L0 8L6.21 6.21L8 0Z"
              fill="rgba(255,149,0,0.6)"
            />
          </svg>
          <div
            style={{
              height: "1px",
              width: "64px",
              background:
                "linear-gradient(to left, transparent, rgba(255,149,0,0.4))",
            }}
          />
        </div>

        {/* ===== PART 2 — Two Column Layout ===== */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* Left column — photograph */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              style={{
                width: "100%",
                height: "560px",
                borderRadius: "12px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src="/images/story-hero.jpg"
                alt="Traditional Hyderabad Dum Biryani cooking"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="50vw"
                priority
              />
            </div>
          </motion.div>

          {/* Right column — text content only */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "560px",
            }}
          >
            {/* Headline */}
            <h2
              style={{
                color: "#ffffff",
                fontSize: "52px",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: "32px",
                textAlign: "left",
                letterSpacing: "-0.02em",
              }}
            >
              Born in the kitchens
              <br />
              of Hyderabad.
            </h2>

            {/* Paragraph 1 */}
            <p
              style={{
                fontSize: "18px",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.8,
                marginBottom: "24px",
                textAlign: "left",
              }}
            >
              Over 400 years ago, in the royal Nizami kitchens of Hyderabad, a
              culinary masterpiece was born. The art of Dum cooking — sealing
              raw marinated meat and parboiled rice inside a heavy copper handi,
              cooking it over a slow, patient flame until every grain of rice
              absorbs the soul of the spices.
            </p>

            {/* Paragraph 2 */}
            <p
              style={{
                fontSize: "18px",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.8,
                textAlign: "left",
              }}
            >
              This was never fast food. It was an act of devotion. A philosophy
              that said: the best things in life take time. The sealed pot traps
              steam, aroma, and centuries of accumulated wisdom inside a single
              vessel.
            </p>

            {/* Since 1603 */}
            <div
              style={{
                color: "#FF9500",
                fontSize: "14px",
                letterSpacing: "2px",
                fontWeight: 600,
                marginTop: "16px",
              }}
            >
              Since 1603
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
