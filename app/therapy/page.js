"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BrainCircuit, Activity, HeartPulse, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa";

// Component Imports
import AboutUsSection from "@/components/AboutUsSection";
import CareSection from "@/components/CareSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WaitlistModal from "@/components/WaitlistModal";

// Assets
import therapy1 from "/public/images/therapy1.jpg";
import therapy2 from "/public/images/therapy2.jpg";

const aiFeatures = [
  {
    title: "Symptom Analysis",
    description: "HelixAI translates your descriptions into clinical insights, ensuring your journey starts with clarity.",
    icon: <BrainCircuit className="w-6 h-6" />,
  },
  {
    title: "Regional Insights",
    description: "We monitor local trends to ensure your care plan is relevant to your specific environment and community.",
    icon: <Activity className="w-6 h-6" />,
  },
  {
    title: "Doctor Briefing",
    description: "Your specialist receives a pre-prepared summary, making every minute of your session count towards healing.",
    icon: <HeartPulse className="w-6 h-6" />,
  }
];

const Section = ({ imageSrc, imageAlt, title, description, sectionClasses, textColorClasses, imagePriority = false }) => (
  <section className={`py-24 px-4 flex justify-center ${sectionClasses}`}>
    <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
        className="rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/20"
      >
        <Image src={imageSrc} alt={imageAlt} width={600} height={400} className="object-cover w-full h-[450px]" priority={imagePriority} />
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className={`space-y-8 ${textColorClasses}`}>
        <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">{title}</h2>
        {description.map((para, i) => <p key={i} className="text-lg opacity-90 leading-relaxed font-medium">{para}</p>)}
      </motion.div>
    </div>
  </section>
);

const TherapyPage = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <main className="flex flex-col min-h-screen relative bg-sky-50 text-slate-900">
      {/* 1. FIXED FAST NAV (Improved Visibility) */}
      <div className="fixed top-6 left-6 z-[100]">
        <Link href="/" prefetch={true}>
          <motion.button 
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-white/80 backdrop-blur-xl text-slate-900 px-6 py-3 rounded-2xl border border-blue-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:border-blue-400 transition-all"
          >
            <FaArrowLeft size={14} className="text-blue-500" />
            <span className="text-xs font-black uppercase tracking-widest">Back to Home</span>
          </motion.button>
        </Link>
      </div>

      {/* 2. HELIX AI HERO (Luminous Ocean Design) */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden bg-gradient-to-b from-blue-100/50 to-sky-50">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-200/30 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="inline-block text-blue-600 font-bold text-[11px] uppercase tracking-[0.3em] bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
              HelixAI Intelligence v1.0
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter text-slate-900">
              Expert Insight. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Human Connection.</span>
            </h1>
            <div className="grid gap-8 pt-4">
              {aiFeatures.map((f, i) => (
                <div key={i} className="flex gap-6 group items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-white shadow-md rounded-2xl flex items-center justify-center text-blue-500 border border-blue-50">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-lg mb-1">{f.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Protocol Card (Glassmorphism) */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-10 bg-white/70 backdrop-blur-3xl border border-white rounded-[3.5rem] shadow-[0_30px_60px_rgba(0,123,255,0.08)]">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-500 rounded-2xl shadow-lg shadow-blue-200">
                <Sparkles className="text-white" size={24} />
              </div>
              <h4 className="text-sm font-black uppercase tracking-widest text-slate-800">Matching Protocol</h4>
            </div>
            <div className="space-y-4">
              {["Secure NLP Mapping", "Local Outbreak Sync", "Doctor-Ready Handoff"].map((t, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-blue-50/50 rounded-2xl border border-blue-100 group hover:bg-blue-50 transition-colors">
                  <CheckCircle2 size={18} className="text-blue-500" />
                  <span className="text-sm font-bold text-slate-700">{t}</span>
                </div>
              ))}
              <div className="mt-8 p-5 bg-slate-900 rounded-[2rem] flex items-center justify-between shadow-xl">
                <div>
                  <span className="text-[10px] font-black text-blue-400 uppercase block mb-1">Privacy Grade</span>
                  <span className="text-xs font-bold text-white">Full Encryption Active</span>
                </div>
                <ShieldCheck size={24} className="text-blue-400" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. CORE CONTENT SECTIONS (High-Contrast for Readability) */}
      <Section
        imageSrc={therapy1}
        imageAlt="Personalized therapy"
        title="Personalized Therapy for You"
        description={[
          "We believe every journey is unique. Our platform ensures you're not just finding a therapist, but finding YOUR therapist.",
          "TeleHelix bridges the gap between your needs and the right professional support, wherever you are."
        ]}
        sectionClasses="bg-white"
        textColorClasses="text-slate-900"
        imagePriority={true}
      />

      <Section
        imageSrc={therapy2}
        imageAlt="Community support"
        title="Group Circles & Community"
        description={[
          "Strength is found in shared experiences. Our circles provide a safe haven for collective healing and growth.",
          "Join a community that understands your story and supports your future."
        ]}
        sectionClasses="bg-sky-50"
        textColorClasses="text-slate-900"
      />

      <div className="bg-white">
        <AboutUsSection />
        <CareSection />
        <TestimonialsSection />
      </div>

      {/* FOOTER CALL TO ACTION (Clean & Bold) */}
      <section className="py-24 bg-gradient-to-b from-sky-50 to-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-slate-900">Your journey to wellness starts today.</h2>
          <button 
            onClick={() => setIsWaitlistOpen(true)}
            className="px-12 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-slate-900 transition-all shadow-2xl shadow-blue-200 text-lg"
          >
            RESERVE YOUR EARLY ACCESS
          </button>
        </div>
      </section>

      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </main>
  );
};

export default TherapyPage;