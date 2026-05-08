"use client";

export default function Footer() {
  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Our Story", href: "#our-story" },
    { name: "Menu", href: "#menu" },
    { name: "The Process", href: "#process" },
    { name: "Order Now", href: "#order" },
  ];

  return (
    <footer
      style={{
        background: "#020408",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "clamp(40px, 6vw, 60px) clamp(20px, 5vw, 80px)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Three columns — stacks on mobile */}
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ color: "#ffffff", fontSize: "17px", fontWeight: 700 }}>
              Hyderabad Dum Biryani
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "14px",
                marginTop: "8px",
              }}
            >
              Slow cooked. Dum sealed. Hyderabad.
            </div>
          </div>

          {/* Nav links */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              textAlign: "center",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "14px",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "#FF9500";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "16px",
              justifyContent: "flex-end",
              alignItems: "flex-start",
            }}
          >
            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              style={{ color: "rgba(255,255,255,0.4)", transition: "color 0.3s" }}
              onMouseEnter={(e) => {
                (e.target as SVGElement).closest("a")!.style.color = "#FF9500";
              }}
              onMouseLeave={(e) => {
                (e.target as SVGElement).closest("a")!.style.color = "rgba(255,255,255,0.4)";
              }}
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>

            {/* Google Maps */}
            <a
              href="#"
              aria-label="Google Maps"
              style={{ color: "rgba(255,255,255,0.4)", transition: "color 0.3s" }}
              onMouseEnter={(e) => {
                (e.target as SVGElement).closest("a")!.style.color = "#FF9500";
              }}
              onMouseLeave={(e) => {
                (e.target as SVGElement).closest("a")!.style.color = "rgba(255,255,255,0.4)";
              }}
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C7.802 0 4 3.403 4 7.602 4 11.8 7.469 16.812 12 24c4.531-7.188 8-12.2 8-16.398C20 3.403 16.199 0 12 0zm0 11a3 3 0 110-6 3 3 0 010 6z" />
              </svg>
            </a>

            {/* Zomato */}
            <a
              href="#"
              aria-label="Zomato"
              style={{ color: "rgba(255,255,255,0.4)", transition: "color 0.3s" }}
              onMouseEnter={(e) => {
                (e.target as SVGElement).closest("a")!.style.color = "#FF9500";
              }}
              onMouseLeave={(e) => {
                (e.target as SVGElement).closest("a")!.style.color = "rgba(255,255,255,0.4)";
              }}
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.5 8h-4.338l3.5-4h-8.324l-1.838 4H5.5l3-6.5h9L14 6l3.5 2zm-11 8v-5h2v5h-2zm3 0v-5h2v5h-2zm3 0v-5h2v5h-2zm3 0v-5h2v5h-2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Credit */}
        <div
          style={{
            marginTop: "36px",
            textAlign: "center",
            color: "rgba(255,255,255,0.2)",
            fontSize: "13px",
          }}
        >
          Designed and developed by Neralla Renukesh
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 32px;
          align-items: start;
        }
        @media (max-width: 767px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 28px;
            text-align: center;
          }
          .footer-grid > div:last-child {
            justify-content: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
