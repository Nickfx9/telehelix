"use client";

import { motion } from "framer-motion";
import { Bot, Video, CalendarCheck, Pill, ArrowRight } from "lucide-react";

const steps = [
  { 
    icon: <Bot className="w-10 h-10 text-teal-400" />, 
    title: "AI Symptom Check", 
    description: "Start with HelixAI. Briefly describe your symptoms and get matched to the right care path instantly." 
  },
  { 
    icon: <CalendarCheck className="w-10 h-10 text-emerald-400" />, 
    title: "Instant Matching", 
    description: "Our system connects you with the best-suited licensed doctor available in minutes." 
  },
  { 
    icon: <Video className="w-10 h-10 text-emerald-400" />, 
    title: "Secure Consult", 
    description: "Engage in a high-definition video consultation from anywhere in Kenya with full privacy." 
  },
  { 
    icon: <Pill className="w-10 h-10 text-emerald-400" />, 
    title: "Digital Care", 
    description: "Receive your digital prescription and have your medication delivered to your doorstep." 
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full py-24 px-6 overflow-hidden bg-gradient-to-b from-[#030712] via-[#022c22] to-[#030712]" id="how-it-works">
      
      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-400/10 rounded-full border border-emerald-400/20"
        >
          Simple 4-Step Process
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="text-4xl md:text-6xl font-extrabold text-white mb-6"
        >
          How <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">TeleHelix</span> Works
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.6, delay: 0.2 }} 
          className="text-gray-400 max-w-2xl mx-auto text-lg"
        >
          We've redesigned the healthcare journey to be faster, smarter, and completely digital.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {/* Connecting Line (Desktop Only) */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] border-t-2 border-dashed border-emerald-500/20 -translate-y-16"></div>

        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: index * 0.1 }} 
            className="group relative bg-[#0b1120]/50 backdrop-blur-xl rounded-3xl border border-white/5 p-8 text-center hover:border-emerald-500/50 transition-all duration-500"
          >
            {/* Step Number */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-emerald-500 text-[#030712] rounded-full flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(16,185,129,0.5)]">
              {index + 1}
            </div>

            {/* Icon with Pulse Effect */}
            <div className="relative mb-6 inline-block">
              <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl group-hover:bg-emerald-500/40 transition-all"></div>
              <div className="relative p-5 bg-[#111827] rounded-2xl border border-white/10 group-hover:border-emerald-500/50 transition-all">
                {step.icon}
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
              {step.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {step.description}
            </p>

            {/* Mobile Arrow */}
            {index !== steps.length - 1 && (
              <div className="lg:hidden mt-6 flex justify-center text-emerald-500/30">
                <ArrowRight className="rotate-90 w-6 h-6" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}