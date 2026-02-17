"use client";

import { useState } from "react";
import { X, Send, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { db } from "@/lib/firebase"; // Importing the bridge you just built
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function WaitlistModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success

  const handleJoin = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      // THE HANDSHAKE: Sending data to your workshop-genai-477501 project
      await addDoc(collection(db, "waitlist"), {
        email: email,
        captured_at: serverTimestamp(),
        platform: "Marketing Site",
        status: "early_access"
      });

      setStatus("success");
      
      // Optional: Auto-close after 3 seconds on success
      setTimeout(() => {
        if (status === "success") onClose();
      }, 3000);

    } catch (error) {
      console.error("Firebase Handshake Error:", error);
      setStatus("idle");
      alert("Something went wrong. Please check your connection and try again.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-slate-900 border border-white/10 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="text-center space-y-6">
              {status === "success" ? (
                // SUCCESS STATE
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-6 space-y-4"
                >
                  <div className="inline-flex p-4 rounded-full bg-emerald-500/20 text-emerald-500 mb-2">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-2xl font-black text-white">You're on the list!</h3>
                  <p className="text-slate-400 text-sm">
                    We've secured your spot. You'll be the first to know when the TeleHelix APK drops.
                  </p>
                  <button 
                    onClick={onClose}
                    className="mt-4 text-orange-500 font-bold text-sm uppercase tracking-widest hover:text-white transition-colors"
                  >
                    Back to Site
                  </button>
                </motion.div>
              ) : (
                // INPUT STATE
                <>
                  <div className="inline-flex p-3 rounded-2xl bg-orange-500/10 text-orange-500 mb-2">
                    <ShieldCheck size={32} />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-white">Join the Alpha List</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Be the first to download the **TeleHelix APK** and access smart healthcare in your neighborhood.
                    </p>
                  </div>

                  <form onSubmit={handleJoin} className="space-y-4">
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full bg-slate-800 border border-white/5 p-4 rounded-2xl outline-none focus:border-orange-500 text-white text-sm transition-all"
                    />
                    <button 
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full bg-orange-500 hover:bg-white hover:text-orange-600 py-4 rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? "SECURING SPOT..." : "NOTIFY ME ON LAUNCH"} 
                      <Send size={16} />
                    </button>
                  </form>

                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">
                    No spam. Just healthcare updates.
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}