"use client";
export default function FloatingButton() {
  return (
    <button
      className="btn btn-success d-block d-md-none floating-btn"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 1050,
        borderRadius: "50%",
        width: "90px",
        height: "90px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        fontSize: "1.5rem",
      }}
      aria-label="Floating Action"
    >
      Donate
    </button>
  );
}
