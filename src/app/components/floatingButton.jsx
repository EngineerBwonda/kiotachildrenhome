"use client";
import Link from "next/link";

export default function FloatingButton() {
  return (
    <Link
      href="/donate"
      aria-label="Donate"
      className="d-block d-md-none floating-btn"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 1050,
        borderRadius: "50%",
        width: "80px",
        height: "80px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
        fontSize: "1.7rem",
        background: "linear-gradient(135deg, #ff6a00 0%, #ffd800 100%)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "none",
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "pointer",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "scale(1.08)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.35)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.25)";
      }}
    >
      <span
        style={{
          fontWeight: 700,
          fontSize: "1.25rem",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: "#222",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        Donate
      </span>
    </Link>
  );
}
