"use client";

import { motion } from "framer-motion";
import { NizamiSectionOverlay } from "./NizamiBackground";

const steps = [
  {
    number: "01",
    title: "Marination",
    description:
      "Chicken rests overnight in hand-ground spice pastes and yoghurt. Each piece absorbs the essence of Nizami tradition.",
  },
  {
    number: "02",
    title: "Layering",
    description:
      "Parboiled rice and marinated meat are layered by hand inside the copper handi. Saffron milk, fried onions, and ghee mark each layer.",
  },
  {
    number: "03",
    title: "Sealing",
    description:
      "The handi is sealed with dough, trapping all steam and aroma inside. No escape. No compromise. Total containment.",
  },
  {
    number: "04",
    title: "Slow Dum",
    description:
      "Low heat for 45 minutes. Pressure builds. Flavors fuse. Magic happens. The seal is broken only at the table.",
  },
];

export default function TheProcess() {
  return (
    <section
      id="process"
      style={{
        background: "#0A0A0A",
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
          Craftsmanship
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
            fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
            fontWeight: 700,
            marginBottom: "clamp(40px, 6vw, 80px)",
            letterSpacing: "-0.02em",
          }}
        >
          The Dum Process
        </motion.h2>

        {/* Steps */}
        <div className="process-grid">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="process-step"
            >
              <div
                className="text-gradient-saffron"
                style={{
                  fontSize: "clamp(3rem, 10vw, 6rem)",
                  fontWeight: 900,
                  lineHeight: 1,
                  marginBottom: "12px",
                }}
              >
                {step.number}
              </div>

              <div
                style={{
                  color: "#ffffff",
                  fontSize: "clamp(16px, 2.5vw, 22px)",
                  fontWeight: 700,
                  marginBottom: "12px",
                }}
              >
                {step.title}
              </div>

              <div
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "14px",
                  lineHeight: 1.7,
                }}
              >
                {step.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          position: relative;
        }
        .process-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        @media (max-width: 767px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
          }
        }
        @media (max-width: 400px) {
          .process-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
