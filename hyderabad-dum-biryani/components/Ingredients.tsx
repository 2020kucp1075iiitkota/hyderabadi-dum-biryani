"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ingredients = [
  {
    name: "Aged Basmati Rice",
    origin: "Punjab, India",
    role: "The canvas — long, slender grains that absorb every layer of flavor.",
    image: "/images/ingredient-rice.jpg",
  },
  {
    name: "Whole Chicken",
    origin: "Farm-raised, free-range",
    role: "The foundation — marinated overnight for tenderness and depth.",
    image: "/images/ingredient-chicken.jpg",
  },
  {
    name: "Star Anise",
    origin: "Southwest China",
    role: "The warmth — a deep, licorice-sweet undertone in every bite.",
    image: "/images/ingredient-staranise.jpg",
  },
  {
    name: "Green Cardamom",
    origin: "Kerala, India",
    role: "The perfume — aromatic and floral, the heart of biryani's fragrance.",
    image: "/images/ingredient-cardamom.jpg",
  },
  {
    name: "Saffron",
    origin: "Kashmir, India",
    role: "The gold — color, aroma, and unmistakable luxury in each strand.",
    image: "/images/ingredient-saffron.jpg",
  },
  {
    name: "Caramelized Onions",
    origin: "Freshly prepared daily",
    role: "The sweetness — slow-fried to a deep golden brown for richness.",
    image: "/images/ingredient-onions.jpg",
  },
  {
    name: "Mint Leaves",
    origin: "Locally grown",
    role: "The freshness — a cool, bright contrast to the rich, warm spices.",
    image: "/images/ingredient-mint.jpg",
  },
  {
    name: "Dum Ghee",
    origin: "Traditional slow-churned",
    role: "The soul — clarified butter that carries flavor into every grain.",
    image: "/images/ingredient-ghee.jpg",
  },
];

export default function Ingredients() {
  return (
    <section
      style={{
        background: "#040810",
        paddingTop: "140px",
        paddingBottom: "140px",
        paddingLeft: "80px",
        paddingRight: "80px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Label — left-aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{
            color: "#FF9500",
            fontSize: "13px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            fontWeight: 500,
            marginBottom: "16px",
            textAlign: "center" as const,
            display: "block",
            width: "100%",
          }}
        >
          Ingredients
        </motion.div>

        {/* Title — left-aligned */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            color: "#ffffff",
            fontSize: "72px",
            fontWeight: 800,
            marginBottom: "48px",
            letterSpacing: "-0.02em",
            textAlign: "center" as const,
          }}
        >
          What goes inside.
        </motion.h2>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          {ingredients.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              style={{
                background: "#0F0F0F",
                borderRadius: "12px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Image — fixed 220px */}
              <div
                style={{
                  width: "100%",
                  height: "220px",
                  position: "relative",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 1200px) 50vw, 25vw"
                />
              </div>

              {/* Text */}
              <div style={{ padding: "24px", flex: 1 }}>
                <div
                  style={{
                    color: "#ffffff",
                    fontSize: "18px",
                    fontWeight: 700,
                    marginBottom: "4px",
                  }}
                >
                  {item.name}
                </div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "13px",
                    fontStyle: "italic",
                    marginBottom: "12px",
                  }}
                >
                  {item.origin}
                </div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "14px",
                    lineHeight: 1.6,
                  }}
                >
                  {item.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
