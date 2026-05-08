"use client";

import { motion } from "framer-motion";
import { NizamiSectionOverlay } from "./NizamiBackground";

const reviews = [
  {
    quote:
      "The most authentic Dum Biryani I have ever tasted outside of Hyderabad. Every grain tells a story.",
    name: "A.R. Rahman",
    title: "Academy Award-Winning Composer",
  },
  {
    quote:
      "A masterpiece in a pot. This is not food — this is heritage, served with love and patience.",
    name: "Mahesh Babu",
    title: "Telugu Film Icon",
  },
  {
    quote:
      "I have eaten biryani across the world. Nothing comes close to this. The seal, the steam, the soul — unmatched.",
    name: "Virat Kohli",
    title: "Cricket Legend",
  },
];

export default function CelebrityReviews() {
  return (
    <section
      style={{
        background: "#040810",
        paddingTop: "clamp(60px, 10vw, 140px)",
        paddingBottom: "clamp(60px, 10vw, 140px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <NizamiSectionOverlay />
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 80px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            color: "#FF9500",
            fontSize: "13px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: "16px",
          }}
        >
          What They Say
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            textAlign: "center",
            color: "#ffffff",
            fontSize: "clamp(2rem, 7vw, 4rem)",
            fontWeight: 700,
            marginBottom: "48px",
            letterSpacing: "-0.02em",
          }}
        >
          Loved by legends.
        </motion.h2>

        {/* Reviews grid */}
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              style={{
                background: "#0F0F0F",
                borderRadius: "16px",
                padding: "clamp(24px, 4vw, 48px)",
                border: "1px solid rgba(255,149,0,0.15)",
              }}
            >
              {/* Quote mark */}
              <div
                style={{
                  color: "#FF9500",
                  fontSize: "64px",
                  lineHeight: 0.8,
                  marginBottom: "20px",
                  fontFamily: "Georgia, serif",
                }}
              >
                &ldquo;
              </div>

              {/* Quote */}
              <div
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "clamp(15px, 2vw, 18px)",
                  fontStyle: "italic",
                  lineHeight: 1.8,
                  marginBottom: "28px",
                }}
              >
                {review.quote}
              </div>

              {/* Name */}
              <div
                style={{
                  color: "#ffffff",
                  fontSize: "18px",
                  fontWeight: 700,
                  marginBottom: "6px",
                }}
              >
                {review.name}
              </div>

              {/* Title */}
              <div
                style={{
                  color: "#FF9500",
                  fontSize: "13px",
                  letterSpacing: "1px",
                }}
              >
                {review.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 900px) {
          .reviews-grid { grid-template-columns: 1fr; gap: 20px; }
        }
      `}</style>
    </section>
  );
}
