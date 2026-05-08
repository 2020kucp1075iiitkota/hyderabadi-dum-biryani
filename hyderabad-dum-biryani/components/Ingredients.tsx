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
        paddingTop: "clamp(60px, 10vw, 140px)",
        paddingBottom: "clamp(60px, 10vw, 140px)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 80px)",
        }}
      >
        {/* Label */}
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
            textAlign: "center",
            display: "block",
            width: "100%",
          }}
        >
          Ingredients
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            color: "#ffffff",
            fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
            fontWeight: 800,
            marginBottom: "40px",
            letterSpacing: "-0.02em",
            textAlign: "center",
          }}
        >
          What goes inside.
        </motion.h2>

        {/* Grid */}
        <div className="ingredients-grid">
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
              {/* Image */}
              <div
                style={{
                  width: "100%",
                  height: "200px",
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
                  sizes="(max-width: 480px) 100vw, (max-width: 767px) 50vw, 25vw"
                />
              </div>

              {/* Text */}
              <div style={{ padding: "20px", flex: 1 }}>
                <div
                  style={{
                    color: "#ffffff",
                    fontSize: "17px",
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
                    marginBottom: "10px",
                  }}
                >
                  {item.origin}
                </div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "13px",
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

      <style>{`
        .ingredients-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          align-items: stretch;
        }
        @media (max-width: 1024px) {
          .ingredients-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 767px) {
          .ingredients-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
        }
        @media (max-width: 400px) {
          .ingredients-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
