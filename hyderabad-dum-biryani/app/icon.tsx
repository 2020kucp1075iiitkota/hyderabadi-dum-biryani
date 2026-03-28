import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#050505",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 4,
        }}
      >
        <svg
          width="24"
          height="28"
          viewBox="0 0 80 100"
          fill="#FF9500"
        >
          {/* Left outer minaret */}
          <rect x="2" y="20" width="8" height="70" />
          <polygon points="6,10 0,20 12,20" />
          <circle cx="6" cy="8" r="3" />

          {/* Left inner minaret */}
          <rect x="18" y="28" width="8" height="62" />
          <polygon points="22,18 16,28 28,28" />
          <circle cx="22" cy="16" r="2.5" />

          {/* Right inner minaret */}
          <rect x="54" y="28" width="8" height="62" />
          <polygon points="58,18 52,28 64,28" />
          <circle cx="58" cy="16" r="2.5" />

          {/* Right outer minaret */}
          <rect x="70" y="20" width="8" height="70" />
          <polygon points="74,10 68,20 80,20" />
          <circle cx="74" cy="8" r="3" />

          {/* Central structure */}
          <rect x="12" y="55" width="56" height="35" />
          <path d="M28,55 Q40,30 52,55" fill="#050505" />
          <path d="M14,90 Q22,72 30,90" fill="#050505" />
          <path d="M50,90 Q58,72 66,90" fill="#050505" />

          {/* Connecting wall */}
          <rect x="10" y="42" width="60" height="5" />
          <rect x="10" y="50" width="60" height="3" />

          {/* Central dome */}
          <ellipse cx="40" cy="40" rx="10" ry="6" />
          <circle cx="40" cy="32" r="3" />

          {/* Base */}
          <rect x="0" y="90" width="80" height="10" rx="2" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
