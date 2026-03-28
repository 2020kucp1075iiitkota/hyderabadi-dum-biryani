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
          Experience
        </motion.div>

        {/* Headline — 80px */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            textAlign: "center",
            color: "#ffffff",
            fontSize: "80px",
            fontWeight: 900,
            marginBottom: "24px",
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
            fontSize: "20px",
            marginBottom: "48px",
            maxWidth: "600px",
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
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {/* Primary */}
          <button
            onMouseEnter={() => setPrimaryHover(true)}
            onMouseLeave={() => setPrimaryHover(false)}
            style={{
              background: "linear-gradient(135deg, #FF9500, #FFD700)",
              color: "#000000",
              fontWeight: 700,
              fontSize: "18px",
              padding: "20px 48px",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: primaryHover
                ? "0 0 40px rgba(255,149,0,0.3)"
                : "0 0 20px rgba(255,149,0,0.1)",
              transform: primaryHover ? "translateY(-2px)" : "translateY(0)",
            }}
          >
            Order Delivery
          </button>

          {/* Secondary */}
          <button
            onMouseEnter={() => setSecondaryHover(true)}
            onMouseLeave={() => setSecondaryHover(false)}
            style={{
              background: secondaryHover
                ? "rgba(255,149,0,0.1)"
                : "transparent",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "18px",
              padding: "20px 48px",
              borderRadius: "999px",
              border: "2px solid #FF9500",
              cursor: "pointer",
              transition: "all 0.3s ease",
              transform: secondaryHover ? "translateY(-2px)" : "translateY(0)",
            }}
          >
            Reserve a Table
          </button>
        </motion.div>
      </div>
    </section>
  );
}
