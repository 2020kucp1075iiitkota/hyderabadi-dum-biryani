"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { NizamiSectionOverlay } from "./NizamiBackground";

export default function OrderReserve() {
  const [primaryHover, setPrimaryHover] = useState(false);
  const [secondaryHover, setSecondaryHover] = useState(false);

  return (
    <section
      id="order"
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
          Experience
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            textAlign: "center",
            color: "#ffffff",
            fontSize: "clamp(2rem, 8vw, 5rem)",
            fontWeight: 900,
            marginBottom: "20px",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          Ready to experience it?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            textAlign: "center",
            color: "rgba(255,255,255,0.6)",
            fontSize: "clamp(15px, 2.5vw, 20px)",
            marginBottom: "40px",
            maxWidth: "560px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.6,
          }}
        >
          Four hundred years of heritage, delivered to your door or served at
          your table.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="order-buttons"
        >
          <button
            onMouseEnter={() => setPrimaryHover(true)}
            onMouseLeave={() => setPrimaryHover(false)}
            style={{
              background: "linear-gradient(135deg, #FF9500, #FFD700)",
              color: "#000000",
              fontWeight: 700,
              fontSize: "clamp(15px, 2.5vw, 18px)",
              padding: "16px 40px",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: primaryHover
                ? "0 0 40px rgba(255,149,0,0.3)"
                : "0 0 20px rgba(255,149,0,0.1)",
              transform: primaryHover ? "translateY(-2px)" : "translateY(0)",
              width: "100%",
              maxWidth: "280px",
            }}
          >
            Order Delivery
          </button>

          <button
            onMouseEnter={() => setSecondaryHover(true)}
            onMouseLeave={() => setSecondaryHover(false)}
            style={{
              background: secondaryHover ? "rgba(255,149,0,0.1)" : "transparent",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "clamp(15px, 2.5vw, 18px)",
              padding: "16px 40px",
              borderRadius: "999px",
              border: "2px solid #FF9500",
              cursor: "pointer",
              transition: "all 0.3s ease",
              transform: secondaryHover ? "translateY(-2px)" : "translateY(0)",
              width: "100%",
              maxWidth: "280px",
            }}
          >
            Reserve a Table
          </button>
        </motion.div>
      </div>

      <style>{`
        .order-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        @media (max-width: 480px) {
          .order-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}
