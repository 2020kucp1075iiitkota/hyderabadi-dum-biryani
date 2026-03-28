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
        paddingTop: "140px",
        paddingBottom: "140px",
        paddingLeft: "80px",
        paddingRight: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <NizamiSectionOverlay />
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Label — centered */}
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

        {/* Title — centered */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            textAlign: "center",
            color: "#ffffff",
            fontSize: "64px",
            fontWeight: 700,
            marginBottom: "64px",
            letterSpacing: "-0.02em",
          }}
        >
          Loved by legends.
        </motion.h2>

        {/* Reviews grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px",
          }}
        >
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
                padding: "48px",
                border: "1px solid rgba(255,149,0,0.15)",
              }}
            >
              {/* Opening quote mark */}
              <div
                style={{
                  color: "#FF9500",
                  fontSize: "80px",
                  lineHeight: 0.8,
                  marginBottom: "24px",
                  fontFamily: "Georgia, serif",
                }}
              >
                &ldquo;
              </div>

              {/* Quote text */}
              <div
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "18px",
                  fontStyle: "italic",
                  lineHeight: 1.8,
                  marginBottom: "32px",
                }}
              >
                {review.quote}
              </div>

              {/* Reviewer name */}
              <div
                style={{
                  color: "#ffffff",
                  fontSize: "20px",
                  fontWeight: 700,
                  marginBottom: "6px",
                }}
              >
                {review.name}
              </div>

              {/* Reviewer title */}
              <div
                style={{
                  color: "#FF9500",
                  fontSize: "14px",
                  letterSpacing: "1px",
                }}
              >
                {review.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
