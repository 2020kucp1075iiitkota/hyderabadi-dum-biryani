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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on link click
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "64px",
          zIndex: 100,
          background: scrolled || menuOpen ? "rgba(5,5,5,0.95)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
          borderBottom:
            scrolled || menuOpen
              ? "1px solid rgba(255,149,0,0.15)"
              : "1px solid transparent",
          transition:
            "background 0.4s ease, backdrop-filter 0.4s ease, border-bottom 0.4s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 20px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <svg
              height="30"
              viewBox="0 0 80 100"
              fill="#FF9500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" y="20" width="8" height="70" rx="1" />
              <rect x="3" y="15" width="6" height="8" rx="1" />
              <polygon points="6,8 2,15 10,15" />
              <circle cx="6" cy="6" r="2" />
              <rect x="18" y="25" width="8" height="65" rx="1" />
              <rect x="19" y="20" width="6" height="8" rx="1" />
              <polygon points="22,13 18,20 26,20" />
              <circle cx="22" cy="11" r="2" />
              <rect x="54" y="25" width="8" height="65" rx="1" />
              <rect x="55" y="20" width="6" height="8" rx="1" />
              <polygon points="58,13 54,20 62,20" />
              <circle cx="58" cy="11" r="2" />
              <rect x="70" y="20" width="8" height="70" rx="1" />
              <rect x="71" y="15" width="6" height="8" rx="1" />
              <polygon points="74,8 70,15 78,15" />
              <circle cx="74" cy="6" r="2" />
              <rect x="12" y="60" width="56" height="30" rx="2" />
              <path d="M28,60 Q40,35 52,60" fill="#040810" />
              <path d="M14,90 Q20,75 26,90" fill="#040810" />
              <path d="M54,90 Q60,75 66,90" fill="#040810" />
              <rect x="10" y="40" width="60" height="4" rx="1" />
              <rect x="10" y="48" width="60" height="3" rx="1" />
              <ellipse cx="40" cy="38" rx="10" ry="6" />
              <rect x="38" y="30" width="4" height="8" rx="1" />
              <circle cx="40" cy="28" r="2.5" />
              {[14, 22, 30, 38, 46, 54, 62].map((x) => (
                <rect key={x} x={x} y="36" width="4" height="5" rx="0.5" />
              ))}
              <rect x="0" y="90" width="80" height="10" rx="2" />
            </svg>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "15px",
                  letterSpacing: "0.3px",
                  lineHeight: 1.3,
                }}
              >
                Hyderabad Dum Biryani
              </span>
              <span
                style={{
                  color: "#FF9500",
                  fontSize: "10px",
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

          {/* Desktop nav links */}
          <div
            className="desktop-nav"
            style={{ display: "flex", gap: "32px" }}
          >
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
                  (e.target as HTMLElement).style.color =
                    "rgba(255,255,255,0.7)";
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#order"
            className="desktop-cta"
            onMouseEnter={() => setCtaHover(true)}
            onMouseLeave={() => setCtaHover(false)}
            style={{
              background: ctaHover ? "#FF9500" : "transparent",
              border: "1px solid #FF9500",
              color: ctaHover ? "#000000" : "#FF9500",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "1px",
              padding: "9px 24px",
              borderRadius: "999px",
              textDecoration: "none",
              transition: "all 0.3s",
              boxShadow: ctaHover ? "0 0 20px rgba(255,149,0,0.4)" : "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Order Now
          </a>

          {/* Hamburger button — mobile only */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "#FF9500",
                borderRadius: "2px",
                transition: "transform 0.3s, opacity 0.3s",
                transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "#FF9500",
                borderRadius: "2px",
                transition: "opacity 0.3s",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "#FF9500",
                borderRadius: "2px",
                transition: "transform 0.3s, opacity 0.3s",
                transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className="mobile-menu"
        style={{
          position: "fixed",
          top: "64px",
          left: 0,
          width: "100%",
          background: "rgba(4,8,16,0.98)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,149,0,0.2)",
          zIndex: 99,
          display: menuOpen ? "flex" : "none",
          flexDirection: "column",
          padding: "24px 20px 32px",
          gap: "0",
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={handleLinkClick}
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "18px",
              fontWeight: 500,
              textDecoration: "none",
              padding: "14px 0",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              transition: "color 0.2s",
            }}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#order"
          onClick={handleLinkClick}
          style={{
            marginTop: "24px",
            background: "linear-gradient(135deg, #FF9500, #FFD700)",
            color: "#000",
            fontWeight: 700,
            fontSize: "16px",
            padding: "14px",
            borderRadius: "999px",
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          Order Now
        </a>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hamburger { display: none !important; }
          .mobile-menu { display: none !important; }
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: inline-block !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
