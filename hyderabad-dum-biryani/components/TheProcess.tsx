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
          Craftsmanship
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
            fontSize: "72px",
            fontWeight: 700,
            marginBottom: "80px",
            letterSpacing: "-0.02em",
          }}
        >
          The Dum Process
        </motion.h2>

        {/* Steps grid with timeline */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "40px",
            position: "relative",
          }}
        >
          {/* Horizontal gold timeline line */}
          <div
            style={{
              position: "absolute",
              top: "48px",
              left: "12.5%",
              right: "12.5%",
              height: "1px",
              background: "rgba(255,149,0,0.3)",
              zIndex: 0,
            }}
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Step number */}
              <div
                className="text-gradient-saffron"
                style={{
                  fontSize: "96px",
                  fontWeight: 900,
                  lineHeight: 1,
                  marginBottom: "16px",
                }}
              >
                {step.number}
              </div>

              {/* Title */}
              <div
                style={{
                  color: "#ffffff",
                  fontSize: "22px",
                  fontWeight: 700,
                  marginBottom: "16px",
                }}
              >
                {step.title}
              </div>

              {/* Description — no truncation */}
              <div
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "15px",
                  lineHeight: 1.7,
                }}
              >
                {step.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
