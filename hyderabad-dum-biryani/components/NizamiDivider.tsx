"use client";

export default function NizamiDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 py-2 ${className}`}>
      <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-saffron/40" />
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="text-saffron/60"
      >
        <path
          d="M8 0L9.79 6.21L16 8L9.79 9.79L8 16L6.21 9.79L0 8L6.21 6.21L8 0Z"
          fill="currentColor"
        />
      </svg>
      <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-saffron/40" />
    </div>
  );
}
