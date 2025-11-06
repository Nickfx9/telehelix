"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const router = useRouter();

  // Countdown timer for resend
  useEffect(() => {
    if (resendTimer > 0) {
      const interval = setInterval(() => setResendTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [resendTimer]);

  // Step 1 — send email code
  async function handleEmailSubmit(e) {
    e.preventDefault();
    setMessage(null);

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setMessage({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/forgotpassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: "A code has been sent to your email." });
        setStep(2);
        setResendTimer(30);
      } else {
        setMessage({ type: "error", text: data.error || "Something went wrong." });
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Network error. Try again." });
    } finally {
      setLoading(false);
    }
  }

  // Step 2 — verify code
  async function handleCodeSubmit(e) {
    e.preventDefault();
    setMessage(null);

    if (!code || code.length < 4) {
      setMessage({ type: "error", text: "Please enter the code sent to your email." });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/verifycode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });

      const data = await res.json();

      if (res.ok) {
  const { token } = data;  // ← GET THE TOKEN FROM API

  if (!token) {
    setMessage({ type: "error", text: "Verification failed. No token received." });
    return;
  }

  // Save token for reset page
  localStorage.setItem("resetToken", token);
  localStorage.removeItem("verifiedEmail");        // optional cleanup
  localStorage.removeItem("canResetPassword");     // optional cleanup

  setMessage({ type: "success", text: "Code verified! Redirecting..." });

  setTimeout(() => router.push("/update-password"), 1500);
} else {
  setMessage({ type: "error", text: data.error || "Invalid code." });
}
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Network error. Try again." });
    } finally {
      setLoading(false);
    }
  }

  // Resend code
  async function handleResend() {
    if (resendTimer > 0) return;

    setLoading(true);
    try {
      const res = await fetch("/api/forgotpassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setMessage({ type: "success", text: "A new code has been sent to your email." });
        setResendTimer(30);
      } else {
        setMessage({ type: "error", text: "Unable to resend code. Try again." });
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Network error. Try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-white shadow-md rounded-xl p-6 border border-gray-100"
      >
        <h1 className="text-2xl font-semibold mb-2 text-gray-800 text-center">
          {step === 1 ? "Forgot Password" : "Enter Verification Code"}
        </h1>

        <p className="text-sm text-gray-600 mb-6 text-center">
          {step === 1
            ? "Enter your account email address, and we’ll send you a code to reset your password."
            : "Please check your email and enter the 6-digit code below."}
        </p>

        {step === 1 ? (
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded-md text-white font-medium transition ${
                loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Sending..." : "Send Code"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleCodeSubmit} className="space-y-4">
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Verification Code</span>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter the 6-digit code"
                maxLength={6}
                required
                className="mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 tracking-widest text-center"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded-md text-white font-medium transition ${
                loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Verifying..." : "Verify Code"}
            </button>

            <div className="text-center text-sm text-gray-600 mt-2">
              Didn’t receive the code?{" "}
              <button
                type="button"
                onClick={handleResend}
                disabled={resendTimer > 0 || loading}
                className="text-blue-600 hover:underline disabled:text-gray-400"
              >
                {resendTimer > 0 ? `Resend in ${resendTimer}s` : "Resend code"}
              </button>
            </div>
          </form>
        )}

        {message && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-4 p-3 rounded-lg text-center text-sm border ${
              message.type === "success"
                ? "bg-green-50 border-green-300 text-green-700"
                : "bg-red-50 border-red-300 text-red-700"
            }`}
          >
            {message.text}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
