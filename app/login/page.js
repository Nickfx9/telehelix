// app/login/page.js
"use client";

import { useState, useEffect } from "react";
import LoginCard from "@/components/LoginCard"; // Adjust path if needed

export default function LoginPage() {
  const [isOpen, setIsOpen] = useState(true);

  // Close handler
  const handleClose = () => {
    setIsOpen(false);
    // Optional: redirect to home
    window.location.href = "/";
  };

  // Optional: Show success banner if coming from reset
  useEffect(() => {
    if (localStorage.getItem("justReset") === "true") {
      localStorage.removeItem("justReset");
    }
  }, []);

  if (!isOpen) return null;

  return <LoginCard onClose={handleClose} />;
}