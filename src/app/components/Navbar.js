"use client"; // Указывает, что это клиентский компонент

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div style={{ padding: "1rem", position: "relative" }}>
      <button
        onClick={toggleDropdown}
        style={{
          backgroundColor: "#0070f3",
          color: "white",
          padding: "0.5rem 1rem",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Навигация
      </button>
      {isDropdownOpen && (
        <div
          style={{
            position: "absolute",
            top: "2.5rem",
            left: "0",
            backgroundColor: "white",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column", padding: "0.5rem 1rem" }}>
            <Link href="/" style={{ marginBottom: "0.5rem", color: "#0070f3" }}>
              base64
            </Link>
            <Link href="/about" style={{ marginBottom: "0.5rem", color: "#0070f3" }}>
              SHA-256
            </Link>
            <Link href="/contacts" style={{ color: "#0070f3" }}>
              Контакты
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
