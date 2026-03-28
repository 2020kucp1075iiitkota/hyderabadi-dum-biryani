"use client";

export default function NizamiBackground() {
  return (
    <>
      {/* ===== FIXED FULL-PAGE NIZAMI PATTERN ===== */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(nizamiPatternSVG)}")`,
          backgroundSize: "600px 600px",
          backgroundRepeat: "repeat",
          backgroundAttachment: "fixed",
          opacity: 0.05,
        }}
      />

      {/* ===== CORNER FLOURISHES ===== */}
      {/* Top-left */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "80px",
          height: "80px",
          zIndex: 1,
          pointerEvents: "none",
          opacity: 0.15,
        }}
        dangerouslySetInnerHTML={{ __html: cornerSVG("top-left") }}
      />
      {/* Top-right */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "80px",
          height: "80px",
          zIndex: 1,
          pointerEvents: "none",
          opacity: 0.15,
        }}
        dangerouslySetInnerHTML={{ __html: cornerSVG("top-right") }}
      />
      {/* Bottom-left */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "80px",
          height: "80px",
          zIndex: 1,
          pointerEvents: "none",
          opacity: 0.15,
        }}
        dangerouslySetInnerHTML={{ __html: cornerSVG("bottom-left") }}
      />
      {/* Bottom-right */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          width: "80px",
          height: "80px",
          zIndex: 1,
          pointerEvents: "none",
          opacity: 0.15,
        }}
        dangerouslySetInnerHTML={{ __html: cornerSVG("bottom-right") }}
      />

      {/* ===== FILM GRAIN TEXTURE OVERLAY ===== */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.02,
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(grainSVG)}")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />
    </>
  );
}

/* ===== SECTION OVERLAY (exported for use in specific sections) ===== */
export function NizamiSectionOverlay() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(nizamiPatternSVG)}")`,
        backgroundSize: "600px 600px",
        backgroundRepeat: "repeat",
        opacity: 0.08,
      }}
    />
  );
}

/* ===== GHOST SILHOUETTE (for Our Heritage section) ===== */
export function NizamiGhostSilhouette() {
  return (
    <div
      style={{
        position: "absolute",
        left: "-60px",
        top: "50%",
        transform: "translateY(-50%)",
        width: "400px",
        height: "600px",
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.03,
      }}
      dangerouslySetInnerHTML={{ __html: nizamiNobleman }}
    />
  );
}

/* ========================================================
   SVG ASSETS
   ======================================================== */

// --- Nizami nobleman silhouette ---
const nizamiNobleman = `<svg viewBox="0 0 300 500" fill="#FF9500" xmlns="http://www.w3.org/2000/svg">
  <!-- Turban -->
  <ellipse cx="150" cy="52" rx="48" ry="38"/>
  <path d="M120,52 Q150,5 180,52" fill="#FF9500"/>
  <ellipse cx="150" cy="30" rx="12" ry="16"/>
  <circle cx="150" cy="14" r="6"/>
  <!-- Turban jewel feather -->
  <path d="M150,14 Q165,0 155,14 Q170,-5 158,12" stroke="#FF9500" fill="none" stroke-width="2"/>
  <!-- Head -->
  <ellipse cx="150" cy="80" rx="28" ry="32"/>
  <!-- Neck -->
  <rect x="140" y="108" width="20" height="16" rx="4"/>
  <!-- Ornate robe body -->
  <path d="M100,124 Q90,200 85,320 L75,420 Q140,440 215,420 L205,320 Q200,200 190,124 Q170,118 150,116 Q130,118 100,124Z"/>
  <!-- Robe center panel -->
  <rect x="135" y="130" width="30" height="200" rx="4" fill="#040810" opacity="0.3"/>
  <line x1="150" y1="130" x2="150" y2="330" stroke="#FF9500" stroke-width="1" opacity="0.5"/>
  <!-- Waist sash -->
  <path d="M95,240 Q150,255 205,240 Q200,250 195,260 Q150,275 105,260 Q100,250 95,240Z"/>
  <!-- Left arm holding jewel -->
  <path d="M100,140 Q60,180 55,240 Q50,260 65,270 Q80,265 75,245 Q78,200 95,165Z"/>
  <!-- Jewel in hand -->
  <circle cx="62" cy="262" r="10"/>
  <circle cx="62" cy="262" r="5" fill="#040810" opacity="0.4"/>
  <!-- Right arm -->
  <path d="M190,140 Q220,180 230,220 Q235,250 225,260 Q210,255 215,235 Q215,195 195,160Z"/>
  <!-- Lower robe folds -->
  <path d="M85,320 Q80,370 75,420" stroke="#FF9500" fill="none" stroke-width="1.5" opacity="0.3"/>
  <path d="M120,320 Q115,370 110,420" stroke="#FF9500" fill="none" stroke-width="1" opacity="0.3"/>
  <path d="M180,320 Q185,370 190,420" stroke="#FF9500" fill="none" stroke-width="1" opacity="0.3"/>
  <path d="M205,320 Q210,370 215,420" stroke="#FF9500" fill="none" stroke-width="1.5" opacity="0.3"/>
  <!-- Feet -->
  <ellipse cx="120" cy="435" rx="25" ry="10"/>
  <ellipse cx="180" cy="435" rx="25" ry="10"/>
  <!-- Robe embroidery patterns -->
  <circle cx="115" cy="180" r="8" fill="none" stroke="#FF9500" stroke-width="0.8" opacity="0.4"/>
  <circle cx="185" cy="180" r="8" fill="none" stroke="#FF9500" stroke-width="0.8" opacity="0.4"/>
  <circle cx="115" cy="280" r="6" fill="none" stroke="#FF9500" stroke-width="0.8" opacity="0.4"/>
  <circle cx="185" cy="280" r="6" fill="none" stroke="#FF9500" stroke-width="0.8" opacity="0.4"/>
  <!-- Necklace -->
  <path d="M130,115 Q150,130 170,115" stroke="#FF9500" fill="none" stroke-width="2"/>
  <circle cx="150" cy="128" r="4"/>
</svg>`;

// --- Corner flourish SVG ---
function cornerSVG(position: string): string {
  let transform = "";
  switch (position) {
    case "top-right":
      transform = 'transform="scale(-1,1) translate(-80,0)"';
      break;
    case "bottom-left":
      transform = 'transform="scale(1,-1) translate(0,-80)"';
      break;
    case "bottom-right":
      transform = 'transform="scale(-1,-1) translate(-80,-80)"';
      break;
    default:
      transform = "";
  }
  return `<svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" ${transform}>
    <g fill="none" stroke="#FF9500" stroke-width="1.2">
      <!-- Outer corner bracket -->
      <path d="M2,2 L2,35 Q2,38 5,38"/>
      <path d="M2,2 L35,2 Q38,2 38,5"/>
      <!-- Inner scroll -->
      <path d="M8,8 Q8,28 20,32 Q32,36 36,20"/>
      <!-- Arabesque curl -->
      <path d="M12,12 Q12,22 18,25 Q24,28 28,22 Q32,16 26,12"/>
      <!-- Lotus bud -->
      <path d="M18,18 Q20,14 22,18 Q24,14 26,18" stroke-width="1"/>
      <!-- Small rosette -->
      <circle cx="20" cy="20" r="3" stroke-width="0.8"/>
      <circle cx="20" cy="20" r="1.2" fill="#FF9500"/>
      <!-- Leaf -->
      <path d="M30,8 Q35,12 30,16 Q25,12 30,8Z" fill="#FF9500" opacity="0.4"/>
      <path d="M8,30 Q12,35 16,30 Q12,25 8,30Z" fill="#FF9500" opacity="0.4"/>
      <!-- Dot accents -->
      <circle cx="10" cy="4" r="1" fill="#FF9500"/>
      <circle cx="4" cy="10" r="1" fill="#FF9500"/>
      <circle cx="34" cy="6" r="0.8" fill="#FF9500"/>
      <circle cx="6" cy="34" r="0.8" fill="#FF9500"/>
    </g>
  </svg>`;
}

// --- Film grain SVG ---
const grainSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <filter id="grain">
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/>
    <feColorMatrix type="saturate" values="0"/>
  </filter>
  <rect width="200" height="200" filter="url(#grain)" opacity="1"/>
</svg>`;

// --- Main Nizami pattern tile 600x600 with 5 panel types ---
const nizamiPatternSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
  <g fill="none" stroke="#FF9500" stroke-width="0.8">

    <!-- ========== PANEL 1: Arabesque Floral Lattice (top-left 300x300) ========== -->
    <g transform="translate(0,0)">
      <rect x="5" y="5" width="290" height="290" rx="4" stroke-width="0.5"/>
      <!-- Main diamond lattice -->
      <path d="M150,20 L280,150 L150,280 L20,150Z" stroke-width="0.6"/>
      <path d="M150,50 L250,150 L150,250 L50,150Z" stroke-width="0.5"/>
      <!-- Lotus flowers at cardinal points -->
      <g transform="translate(150,25)">
        <path d="M0,-12 Q6,-6 0,0 Q-6,-6 0,-12Z" fill="#FF9500" opacity="0.3"/>
        <path d="M-4,-10 Q0,-4 4,-10" stroke-width="0.6"/>
        <circle r="2" fill="#FF9500" opacity="0.4"/>
      </g>
      <g transform="translate(275,150)">
        <path d="M12,0 Q6,6 0,0 Q6,-6 12,0Z" fill="#FF9500" opacity="0.3"/>
        <circle r="2" fill="#FF9500" opacity="0.4"/>
      </g>
      <g transform="translate(150,275)">
        <path d="M0,12 Q-6,6 0,0 Q6,6 0,12Z" fill="#FF9500" opacity="0.3"/>
        <circle r="2" fill="#FF9500" opacity="0.4"/>
      </g>
      <g transform="translate(25,150)">
        <path d="M-12,0 Q-6,-6 0,0 Q-6,6 -12,0Z" fill="#FF9500" opacity="0.3"/>
        <circle r="2" fill="#FF9500" opacity="0.4"/>
      </g>
      <!-- Vine curves -->
      <path d="M80,80 Q110,60 150,80 Q190,100 220,80"/>
      <path d="M80,220 Q110,240 150,220 Q190,200 220,220"/>
      <path d="M80,80 Q60,110 80,150 Q100,190 80,220"/>
      <path d="M220,80 Q240,110 220,150 Q200,190 220,220"/>
      <!-- Central rosette -->
      <circle cx="150" cy="150" r="20" stroke-width="0.6"/>
      <circle cx="150" cy="150" r="12" stroke-width="0.5"/>
      <circle cx="150" cy="150" r="4" fill="#FF9500" opacity="0.3"/>
      <!-- Rosette petals -->
      <path d="M150,130 Q158,140 150,150 Q142,140 150,130Z" fill="#FF9500" opacity="0.2"/>
      <path d="M170,150 Q160,158 150,150 Q160,142 170,150Z" fill="#FF9500" opacity="0.2"/>
      <path d="M150,170 Q142,160 150,150 Q158,160 150,170Z" fill="#FF9500" opacity="0.2"/>
      <path d="M130,150 Q140,142 150,150 Q140,158 130,150Z" fill="#FF9500" opacity="0.2"/>
      <!-- Corner leaf clusters -->
      <path d="M20,20 Q35,25 30,40 Q25,35 20,20Z" fill="#FF9500" opacity="0.15"/>
      <path d="M280,20 Q265,25 270,40 Q275,35 280,20Z" fill="#FF9500" opacity="0.15"/>
      <path d="M20,280 Q35,275 30,260 Q25,265 20,280Z" fill="#FF9500" opacity="0.15"/>
      <path d="M280,280 Q265,275 270,260 Q275,265 280,280Z" fill="#FF9500" opacity="0.15"/>
      <!-- Small dot accents -->
      <circle cx="100" cy="100" r="2" fill="#FF9500" opacity="0.25"/>
      <circle cx="200" cy="100" r="2" fill="#FF9500" opacity="0.25"/>
      <circle cx="100" cy="200" r="2" fill="#FF9500" opacity="0.25"/>
      <circle cx="200" cy="200" r="2" fill="#FF9500" opacity="0.25"/>
    </g>

    <!-- ========== PANEL 2: Mughal Deer (top-right 300x300) ========== -->
    <g transform="translate(300,0)">
      <!-- Dotted border frame -->
      <rect x="8" y="8" width="284" height="284" rx="6" stroke-dasharray="3,4" stroke-width="0.6"/>
      <rect x="14" y="14" width="272" height="272" rx="4" stroke-width="0.5"/>
      <!-- Ground line -->
      <path d="M30,240 Q150,230 270,240" stroke-width="0.5"/>
      <!-- Deer body -->
      <ellipse cx="155" cy="180" rx="50" ry="30" stroke-width="0.7"/>
      <!-- Deer neck and head -->
      <path d="M190,165 Q200,130 195,110" stroke-width="0.7"/>
      <ellipse cx="197" cy="105" rx="14" ry="11" stroke-width="0.7"/>
      <!-- Eye -->
      <circle cx="203" cy="103" r="2" fill="#FF9500" opacity="0.4"/>
      <!-- Curved antlers -->
      <path d="M195,95 Q185,65 175,55" stroke-width="0.6"/>
      <path d="M175,55 Q170,50 172,45" stroke-width="0.5"/>
      <path d="M175,55 Q180,48 178,42" stroke-width="0.5"/>
      <path d="M200,95 Q215,70 225,60" stroke-width="0.6"/>
      <path d="M225,60 Q230,55 228,50" stroke-width="0.5"/>
      <path d="M225,60 Q222,52 225,47" stroke-width="0.5"/>
      <!-- Legs -->
      <line x1="125" y1="205" x2="118" y2="238" stroke-width="0.6"/>
      <line x1="140" y1="208" x2="135" y2="238" stroke-width="0.6"/>
      <line x1="170" y1="208" x2="175" y2="238" stroke-width="0.6"/>
      <line x1="185" y1="205" x2="192" y2="238" stroke-width="0.6"/>
      <!-- Tail -->
      <path d="M105,170 Q90,160 85,165 Q88,172 105,175" stroke-width="0.5"/>
      <!-- Surrounding vine and flowers -->
      <path d="M40,40 Q60,60 50,100 Q40,140 60,170 Q50,200 40,230" stroke-width="0.5"/>
      <path d="M260,40 Q240,60 250,100 Q260,140 240,170 Q250,200 260,230" stroke-width="0.5"/>
      <!-- Flowers on vines -->
      <circle cx="50" cy="80" r="6" stroke-width="0.5"/>
      <circle cx="50" cy="80" r="2.5" fill="#FF9500" opacity="0.2"/>
      <circle cx="55" cy="150" r="5" stroke-width="0.5"/>
      <circle cx="55" cy="150" r="2" fill="#FF9500" opacity="0.2"/>
      <circle cx="250" cy="90" r="6" stroke-width="0.5"/>
      <circle cx="250" cy="90" r="2.5" fill="#FF9500" opacity="0.2"/>
      <circle cx="245" cy="160" r="5" stroke-width="0.5"/>
      <circle cx="245" cy="160" r="2" fill="#FF9500" opacity="0.2"/>
      <!-- Leaf pairs on vines -->
      <path d="M45,60 Q38,55 35,60 Q38,65 45,60Z" fill="#FF9500" opacity="0.15"/>
      <path d="M55,120 Q48,115 45,120 Q48,125 55,120Z" fill="#FF9500" opacity="0.15"/>
      <path d="M255,70 Q262,65 265,70 Q262,75 255,70Z" fill="#FF9500" opacity="0.15"/>
      <path d="M245,130 Q252,125 255,130 Q252,135 245,130Z" fill="#FF9500" opacity="0.15"/>
      <!-- Small grass tufts -->
      <path d="M80,238 Q82,228 84,238" stroke-width="0.4"/>
      <path d="M220,238 Q222,228 224,238" stroke-width="0.4"/>
    </g>

    <!-- ========== PANEL 3: Birds on Branch (bottom-left 300x300) ========== -->
    <g transform="translate(0,300)">
      <!-- Arched frame -->
      <path d="M20,290 L20,80 Q20,20 80,20 L220,20 Q280,20 280,80 L280,290" stroke-width="0.6"/>
      <path d="M20,20 Q150,5 280,20" stroke-width="0.5"/>
      <!-- Inner arch -->
      <path d="M40,280 L40,90 Q40,40 90,40 L210,40 Q260,40 260,90 L260,280" stroke-width="0.4"/>
      <!-- Main branch -->
      <path d="M60,200 Q100,180 150,185 Q200,190 250,170" stroke-width="1"/>
      <path d="M150,185 Q155,150 145,120" stroke-width="0.6"/>
      <path d="M100,183 Q90,160 95,140" stroke-width="0.5"/>
      <!-- Bird 1 (left) -->
      <ellipse cx="110" cy="172" rx="16" ry="12" stroke-width="0.7"/>
      <ellipse cx="120" cy="165" rx="8" ry="7" stroke-width="0.6"/>
      <circle cx="123" cy="163" r="1.5" fill="#FF9500" opacity="0.4"/>
      <path d="M128,165 L135,163 L128,167Z" fill="#FF9500" opacity="0.3"/>
      <path d="M95,175 Q90,180 92,185" stroke-width="0.5"/>
      <line x1="108" y1="183" x2="106" y2="195" stroke-width="0.4"/>
      <line x1="114" y1="183" x2="113" y2="195" stroke-width="0.4"/>
      <!-- Bird 2 (right) -->
      <ellipse cx="200" cy="180" rx="16" ry="12" stroke-width="0.7"/>
      <ellipse cx="190" cy="173" rx="8" ry="7" stroke-width="0.6"/>
      <circle cx="187" cy="171" r="1.5" fill="#FF9500" opacity="0.4"/>
      <path d="M182,173 L175,171 L182,175Z" fill="#FF9500" opacity="0.3"/>
      <path d="M215,183 Q220,188 218,193" stroke-width="0.5"/>
      <line x1="198" y1="191" x2="196" y2="203" stroke-width="0.4"/>
      <line x1="204" y1="191" x2="203" y2="203" stroke-width="0.4"/>
      <!-- Flowers on branches -->
      <g transform="translate(145,118)">
        <path d="M0,-8 Q4,-4 0,0 Q-4,-4 0,-8Z" fill="#FF9500" opacity="0.2"/>
        <path d="M-8,0 Q-4,-4 0,0 Q-4,4 -8,0Z" fill="#FF9500" opacity="0.2"/>
        <path d="M0,8 Q4,4 0,0 Q-4,4 0,8Z" fill="#FF9500" opacity="0.2"/>
        <path d="M8,0 Q4,-4 0,0 Q4,4 8,0Z" fill="#FF9500" opacity="0.2"/>
        <circle r="2.5" fill="#FF9500" opacity="0.3"/>
      </g>
      <g transform="translate(93,138)">
        <path d="M0,-6 Q3,-3 0,0 Q-3,-3 0,-6Z" fill="#FF9500" opacity="0.2"/>
        <path d="M6,0 Q3,3 0,0 Q3,-3 6,0Z" fill="#FF9500" opacity="0.2"/>
        <circle r="2" fill="#FF9500" opacity="0.3"/>
      </g>
      <!-- Leaf fills in arch spandrels -->
      <path d="M35,50 Q45,45 50,55 Q45,60 35,55Z" fill="#FF9500" opacity="0.1"/>
      <path d="M250,50 Q240,45 235,55 Q240,60 250,55Z" fill="#FF9500" opacity="0.1"/>
      <!-- Petal scattered fills -->
      <circle cx="70" cy="250" r="3" stroke-width="0.4"/>
      <circle cx="230" cy="240" r="3" stroke-width="0.4"/>
      <circle cx="150" cy="260" r="4" stroke-width="0.4"/>
      <circle cx="150" cy="260" r="1.5" fill="#FF9500" opacity="0.2"/>
    </g>

    <!-- ========== PANEL 4: Cypress/Chinar Leaf (bottom-center-right upper 300x150) ========== -->
    <g transform="translate(300,300)">
      <rect x="8" y="8" width="284" height="134" rx="4" stroke-width="0.5"/>
      <!-- Large chinar leaf outline -->
      <path d="M150,20 Q100,40 90,70 Q80,100 100,120 Q120,135 150,130 Q180,135 200,120 Q220,100 210,70 Q200,40 150,20Z" stroke-width="0.7"/>
      <!-- Central vein -->
      <line x1="150" y1="25" x2="150" y2="125" stroke-width="0.5"/>
      <!-- Side veins -->
      <path d="M150,45 Q120,50 100,65" stroke-width="0.4"/>
      <path d="M150,45 Q180,50 200,65" stroke-width="0.4"/>
      <path d="M150,70 Q125,75 105,90" stroke-width="0.4"/>
      <path d="M150,70 Q175,75 195,90" stroke-width="0.4"/>
      <path d="M150,95 Q130,100 115,112" stroke-width="0.4"/>
      <path d="M150,95 Q170,100 185,112" stroke-width="0.4"/>
      <!-- Leaf lobe notches -->
      <path d="M95,55 Q105,60 95,70" stroke-width="0.3"/>
      <path d="M205,55 Q195,60 205,70" stroke-width="0.3"/>
      <!-- Small flowers inside leaf -->
      <circle cx="125" cy="65" r="4" stroke-width="0.4"/>
      <circle cx="125" cy="65" r="1.5" fill="#FF9500" opacity="0.2"/>
      <circle cx="175" cy="65" r="4" stroke-width="0.4"/>
      <circle cx="175" cy="65" r="1.5" fill="#FF9500" opacity="0.2"/>
      <circle cx="130" cy="100" r="3" stroke-width="0.4"/>
      <circle cx="170" cy="100" r="3" stroke-width="0.4"/>
      <!-- Side cypress trees -->
      <path d="M40,130 Q40,70 45,40 Q50,70 50,130" stroke-width="0.5" fill="#FF9500" opacity="0.08"/>
      <line x1="45" y1="40" x2="45" y2="130" stroke-width="0.3"/>
      <path d="M250,130 Q250,70 255,40 Q260,70 260,130" stroke-width="0.5" fill="#FF9500" opacity="0.08"/>
      <line x1="255" y1="40" x2="255" y2="130" stroke-width="0.3"/>
    </g>

    <!-- ========== PANEL 5: Geometric Star & Arabesque (bottom-right lower 300x150) ========== -->
    <g transform="translate(300,450)">
      <rect x="8" y="8" width="284" height="134" rx="4" stroke-width="0.5"/>
      <!-- Eight-pointed star center -->
      <polygon points="150,25 162,55 195,55 168,73 178,105 150,87 122,105 132,73 105,55 138,55" stroke-width="0.6"/>
      <!-- Inner star -->
      <polygon points="150,45 157,62 175,62 161,72 166,90 150,80 134,90 139,72 125,62 143,62" stroke-width="0.4"/>
      <!-- Star center -->
      <circle cx="150" cy="70" r="8" stroke-width="0.5"/>
      <circle cx="150" cy="70" r="3" fill="#FF9500" opacity="0.25"/>
      <!-- Radiating arabesque from star -->
      <path d="M150,25 Q145,15 150,10 Q155,15 150,25" stroke-width="0.4"/>
      <path d="M195,55 Q205,50 210,55 Q205,60 195,55" stroke-width="0.4"/>
      <path d="M178,105 Q183,115 178,120 Q173,115 178,105" stroke-width="0.4"/>
      <path d="M122,105 Q117,115 122,120 Q127,115 122,105" stroke-width="0.4"/>
      <path d="M105,55 Q95,50 90,55 Q95,60 105,55" stroke-width="0.4"/>
      <!-- Four-pointed stars in corners -->
      <g transform="translate(40,35)">
        <polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" stroke-width="0.4"/>
        <circle r="2" fill="#FF9500" opacity="0.2"/>
      </g>
      <g transform="translate(260,35)">
        <polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" stroke-width="0.4"/>
        <circle r="2" fill="#FF9500" opacity="0.2"/>
      </g>
      <g transform="translate(40,110)">
        <polygon points="0,-8 2.5,-2.5 8,0 2.5,2.5 0,8 -2.5,2.5 -8,0 -2.5,-2.5" stroke-width="0.4"/>
        <circle r="1.5" fill="#FF9500" opacity="0.2"/>
      </g>
      <g transform="translate(260,110)">
        <polygon points="0,-8 2.5,-2.5 8,0 2.5,2.5 0,8 -2.5,2.5 -8,0 -2.5,-2.5" stroke-width="0.4"/>
        <circle r="1.5" fill="#FF9500" opacity="0.2"/>
      </g>
      <!-- Connecting vine elements -->
      <path d="M55,35 Q80,25 105,55" stroke-width="0.3"/>
      <path d="M245,35 Q220,25 195,55" stroke-width="0.3"/>
      <path d="M55,110 Q80,120 122,105" stroke-width="0.3"/>
      <path d="M245,110 Q220,120 178,105" stroke-width="0.3"/>
    </g>

  </g>
</svg>`;
