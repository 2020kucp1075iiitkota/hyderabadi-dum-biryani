"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const menuItems: MenuItem[] = [
  {
    name: "Hyderabadi Chicken Dum Biryani",
    description:
      "Classic slow-cooked chicken layered with saffron-infused basmati rice",
    price: "₹449",
    image: "/images/menu-chicken-biryani.jpg",
    category: "Dum Biryani",
  },
  {
    name: "Mutton Dum Biryani",
    description:
      "Tender mutton pieces with hand-ground spice paste and aged rice",
    price: "₹549",
    image: "/images/menu-mutton-biryani.jpg",
    category: "Dum Biryani",
  },
  {
    name: "Egg Biryani",
    description:
      "Dum-cooked eggs with aromatic basmati, topped with fried onions",
    price: "₹349",
    image: "/images/menu-egg-biryani.jpg",
    category: "Dum Biryani",
  },
  {
    name: "Seekh Kebab",
    description: "Charcoal-grilled minced lamb skewers with green chutney",
    price: "₹329",
    image: "/images/menu-seekh-kebab.jpg",
    category: "Kebabs",
  },
  {
    name: "Shami Kebab",
    description:
      "Melt-in-mouth lentil and lamb patties with Nizami spices",
    price: "₹299",
    image: "/images/menu-shami-kebab.jpg",
    category: "Kebabs",
  },
  {
    name: "Mirchi ka Salan",
    description: "Tangy peanut and sesame gravy with green chillies",
    price: "₹179",
    image: "/images/menu-salan.jpg",
    category: "Sides",
  },
  {
    name: "Double Ka Meetha",
    description:
      "Bread pudding soaked in saffron milk, topped with dry fruits",
    price: "₹199",
    image: "/images/menu-meetha.jpg",
    category: "Sides",
  },
  {
    name: "Masala Chaas",
    description: "Spiced buttermilk with roasted cumin and fresh mint",
    price: "₹99",
    image: "/images/menu-chaas.jpg",
    category: "Beverages",
  },
];

const categories = ["All", "Dum Biryani", "Kebabs", "Sides", "Beverages"];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="menu"
      style={{
        background: "#040810",
        paddingTop: "140px",
        paddingBottom: "140px",
        paddingLeft: "80px",
        paddingRight: "80px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
          }}
        >
          Curated Selection
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
            marginTop: "16px",
            letterSpacing: "-0.02em",
          }}
        >
          The Menu
        </motion.h2>

        {/* Filter tabs — centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            marginTop: "32px",
            flexWrap: "wrap",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "10px 28px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.3s ease",
                background:
                  activeCategory === cat ? "#FF9500" : "transparent",
                color: activeCategory === cat ? "#050505" : "rgba(255,255,255,0.6)",
                border:
                  activeCategory === cat
                    ? "1px solid #FF9500"
                    : "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Menu grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px",
              marginTop: "48px",
              alignItems: "stretch",
            }}
          >
            {filteredItems.map((item, index) => (
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
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                  display: "flex",
                  flexDirection: "column",
                }}
                className="menu-card"
              >
                {/* Image — fixed 260px */}
                <div
                  style={{
                    width: "100%",
                    height: "260px",
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

                {/* Text content */}
                <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      color: "#ffffff",
                      fontSize: "20px",
                      fontWeight: 700,
                      marginBottom: "8px",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.name}
                  </div>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "15px",
                      lineHeight: 1.6,
                      marginBottom: "12px",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      flex: 1,
                    }}
                  >
                    {item.description}
                  </div>
                  <div
                    style={{
                      color: "#FF9500",
                      fontSize: "18px",
                      fontWeight: 700,
                    }}
                  >
                    {item.price}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
