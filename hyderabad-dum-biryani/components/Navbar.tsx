"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { name: "Overview", href: "#overview" },
  { name: "Our Story", href: "#our-story" },
  { name: "Menu", href: "#menu" },
  { name: "The Process", href: "#process" },
  { name: "Order Now", href: "#order" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [ctaHover, setCtaHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "72px",
        zIndex: 100,
        background: scrolled ? "rgba(5,5,5,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,149,0,0.15)"
          : "1px solid transparent",
        transition: "background 0.4s ease, backdrop-filter 0.4s ease, border-bottom 0.4s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 60px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left — Logo block */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "14px", textDecoration: "none" }}>
          {/* Charminar SVG */}
          <svg
            height="36"
            viewBox="0 0 80 100"
            fill="#FF9500"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Four minarets */}
            {/* Left outer minaret */}
            <rect x="2" y="20" width="8" height="70" rx="1" />
            <rect x="3" y="15" width="6" height="8" rx="1" />
            <polygon points="6,8 2,15 10,15" />
            <circle cx="6" cy="6" r="2" />

            {/* Left inner minaret */}
            <rect x="18" y="25" width="8" height="65" rx="1" />
            <rect x="19" y="20" width="6" height="8" rx="1" />
            <polygon points="22,13 18,20 26,20" />
            <circle cx="22" cy="11" r="2" />

            {/* Right inner minaret */}
            <rect x="54" y="25" width="8" height="65" rx="1" />
            <rect x="55" y="20" width="6" height="8" rx="1" />
            <polygon points="58,13 54,20 62,20" />
            <circle cx="58" cy="11" r="2" />

            {/* Right outer minaret */}
            <rect x="70" y="20" width="8" height="70" rx="1" />
            <rect x="71" y="15" width="6" height="8" rx="1" />
            <polygon points="74,8 70,15 78,15" />
            <circle cx="74" cy="6" r="2" />

            {/* Central arch structure */}
            <rect x="12" y="60" width="56" height="30" rx="2" />
            <path d="M28,60 Q40,35 52,60" fill="#040810" />
            {/* Small arches on sides */}
            <path d="M14,90 Q20,75 26,90" fill="#040810" />
            <path d="M54,90 Q60,75 66,90" fill="#040810" />

            {/* Top parapet connecting minarets */}
            <rect x="10" y="40" width="60" height="4" rx="1" />
            <rect x="10" y="48" width="60" height="3" rx="1" />

            {/* Central dome */}
            <ellipse cx="40" cy="38" rx="10" ry="6" />
            <rect x="38" y="30" width="4" height="8" rx="1" />
            <circle cx="40" cy="28" r="2.5" />

            {/* Crenellations */}
            {[14, 22, 30, 38, 46, 54, 62].map((x) => (
              <rect key={x} x={x} y="36" width="4" height="5" rx="0.5" />
            ))}

            {/* Base platform */}
            <rect x="0" y="90" width="80" height="10" rx="2" />
          </svg>

          {/* Two-line text */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "17px",
                letterSpacing: "0.5px",
                lineHeight: 1.3,
              }}
            >
              Hyderabad Dum Biryani
            </span>
            <span
              style={{
                color: "#FF9500",
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontWeight: 400,
                lineHeight: 1.3,
              }}
            >
              Since 1603 · Nizami Heritage
            </span>
          </div>
        </a>

        {/* Center — Navigation links */}
        <div style={{ display: "flex", gap: "40px" }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.5px",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "rgba(255,255,255,0.7)";
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right — CTA button */}
        <a
          href="#order"
          onMouseEnter={() => setCtaHover(true)}
          onMouseLeave={() => setCtaHover(false)}
          style={{
            background: ctaHover ? "#FF9500" : "transparent",
            border: "1px solid #FF9500",
            color: ctaHover ? "#000000" : "#FF9500",
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "1px",
            padding: "10px 28px",
            borderRadius: "999px",
            textDecoration: "none",
            transition: "all 0.3s",
            boxShadow: ctaHover ? "0 0 20px rgba(255,149,0,0.4)" : "none",
            cursor: "pointer",
          }}
        >
          Order Now
        </a>
      </div>
    </nav>
  );
}
