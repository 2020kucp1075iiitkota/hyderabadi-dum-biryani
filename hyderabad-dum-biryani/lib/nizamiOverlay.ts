// Simplified Nizami overlay SVG for section-level pattern at higher opacity
export const nizamiOverlaySVG = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
  <g fill="none" stroke="#FF9500" stroke-width="0.5">
    <g transform="translate(0,0)">
      <rect x="5" y="5" width="290" height="290" rx="4" stroke-dasharray="2,4" />
      <path d="M30,150 C60,80 120,80 150,150 C180,220 240,220 270,150" />
      <path d="M30,150 C60,220 120,220 150,150 C180,80 240,80 270,150" />
      <g transform="translate(150,150)">
        <ellipse rx="12" ry="6" transform="rotate(0)" />
        <ellipse rx="12" ry="6" transform="rotate(45)" />
        <ellipse rx="12" ry="6" transform="rotate(90)" />
        <ellipse rx="12" ry="6" transform="rotate(135)" />
        <circle r="5" fill="#FF9500" />
      </g>
      <circle cx="150" cy="40" r="14" />
      <circle cx="150" cy="40" r="8" />
      <circle cx="150" cy="260" r="14" />
      <circle cx="150" cy="260" r="8" />
    </g>
    <g transform="translate(300,0)">
      <rect x="5" y="5" width="290" height="290" rx="4" stroke-dasharray="2,4" />
      <path d="M120,200 C110,170 115,140 130,120 C145,100 160,105 165,120 C170,135 175,140 190,135 C200,132 205,125 200,115" />
      <path d="M125,200 L120,250" />
      <path d="M140,200 L138,252" />
      <path d="M170,190 L168,248" />
      <path d="M180,185 L182,250" />
      <path d="M200,115 C210,108 215,100 210,90" />
      <path d="M210,90 C215,75 225,70 230,60" />
      <path d="M210,90 C205,78 200,72 195,62" />
      <circle cx="60" cy="60" r="6" />
      <circle cx="60" cy="60" r="3" fill="#FF9500" />
      <circle cx="240" cy="60" r="6" />
      <circle cx="240" cy="60" r="3" fill="#FF9500" />
    </g>
    <g transform="translate(0,300)">
      <rect x="5" y="5" width="290" height="290" rx="4" stroke-dasharray="2,4" />
      <path d="M30,280 L30,80 Q30,30 150,30 Q270,30 270,80 L270,280" />
      <path d="M50,180 C80,170 120,190 150,175 C180,160 220,170 260,165" />
      <g transform="translate(100,160)">
        <ellipse rx="14" ry="10" />
        <circle cx="12" cy="-4" r="6" />
        <path d="M-10,4 Q-20,10 -16,18" />
      </g>
      <g transform="translate(200,150) scale(-1,1)">
        <ellipse rx="14" ry="10" />
        <circle cx="12" cy="-4" r="6" />
        <path d="M-10,4 Q-20,10 -16,18" />
      </g>
      <circle cx="70" cy="175" r="5" />
      <circle cx="140" cy="182" r="5" />
      <circle cx="230" cy="168" r="5" />
    </g>
    <g transform="translate(300,300)">
      <rect x="5" y="5" width="290" height="290" rx="4" stroke-dasharray="2,4" />
      <g transform="translate(150,150)">
        <polygon points="0,-40 11,-11 40,-11 18,7 25,40 0,20 -25,40 -18,7 -40,-11 -11,-11" />
        <polygon points="0,-28 8,-8 28,-8 13,5 18,28 0,14 -18,28 -13,5 -28,-8 -8,-8" />
        <circle r="10" />
        <circle r="5" fill="#FF9500" />
      </g>
      <g transform="translate(60,60)">
        <polygon points="0,-15 5,-5 15,0 5,5 0,15 -5,5 -15,0 -5,-5" />
        <circle r="3" fill="#FF9500" />
      </g>
      <g transform="translate(240,240)">
        <polygon points="0,-15 5,-5 15,0 5,5 0,15 -5,5 -15,0 -5,-5" />
        <circle r="3" fill="#FF9500" />
      </g>
    </g>
  </g>
</svg>`;
