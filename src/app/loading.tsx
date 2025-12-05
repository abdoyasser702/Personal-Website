"use client";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "var(--color-background, #fff)",
        zIndex: 9999,
      }}
    >
      {/* Spinner */}
      <div
        style={{
          width: "80px",
          height: "80px",
          border: "6px solid #e0e0e0",
          borderTop: "6px solid #03a696",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
          marginBottom: "30px",
        }}
      />

      {/* Loading Text */}
      <h2
        style={{
          color: "var(--color-text, #000)",
          fontSize: "40px",
          fontWeight: "700",
          letterSpacing: "1px",
          textAlign: "center",
          fontFamily: "Raleway, sans-serif",
          textTransform: "uppercase",
        }}
      >
        Loading{dots}
      </h2>

      {/* Progress Bar */}
      <div
        style={{
          width: "250px",
          height: "4px",
          background: "#e0e0e0",
          borderRadius: "10px",
          overflow: "hidden",
          marginTop: "25px",
        }}
      >
        <div
          style={{
            height: "100%",
            background: "linear-gradient(90deg, #03a696 0%, #42959b 100%)",
            animation: "progress 2s ease-in-out infinite",
            borderRadius: "10px",
          }}
        />
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes progress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
