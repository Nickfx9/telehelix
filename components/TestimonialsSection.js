"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export default function MissionSection() {
  return (
    <section className="py-24 px-6 relative bg-gradient-to-b from-white to-blue-50/50 overflow-hidden">
      {/* Soft Sky-Blue Lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-100/30 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <span className="text-orange-600 font-bold text-[11px] uppercase tracking-[0.3em] bg-orange-50 px-4 py-2 rounded-full border border-orange-100">
            Our Purpose
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
            Bridging the Gap to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Emotional Wellness.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* THE PROBLEM CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-10 bg-white border border-red-100 rounded-[3rem] shadow-[0_20px_50px_rgba(239,68,68,0.05)] relative"
          >
            <div className="absolute top-8 right-8 text-red-500/20"><AlertCircle size={80} /></div>
            <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm italic font-black">!</span>
              The Current Struggle
            </h3>
            <ul className="space-y-6">
              {[
                { bold: "High Costs:", text: "Quality mental health care is often priced as a luxury, leaving many behind." },
                { bold: "Long Distances:", text: "Specialized therapists are mostly in cities, making travel a major barrier." },
                { bold: "Social Stigma:", text: "The fear of being judged often stops people from seeking the help they need." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                   <div className="w-2 h-2 mt-2 bg-red-400 rounded-full shrink-0" />
                   <p className="text-slate-600 leading-relaxed">
                     <span className="font-bold text-slate-900">{item.bold}</span> {item.text}
                   </p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* THE SOLUTION CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-10 bg-white border border-emerald-100 rounded-[3rem] shadow-[0_20px_50px_rgba(16,185,129,0.08)] relative"
          >
            <div className="absolute top-8 right-8 text-emerald-500/20"><CheckCircle2 size={80} /></div>
            <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm font-black">✓</span>
              The TeleHelix Promise
            </h3>
            <ul className="space-y-6">
              {[
                { bold: "Total Access:", text: "Consult with a professional from the comfort of your home, anywhere in Kenya." },
                { bold: "Absolute Privacy:", text: "Your sessions are 100% anonymous and protected by clinical-grade encryption." },
                { bold: "Smart Matching:", text: "We don't just give you a list; we find the specialist who fits your unique story." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start group">
                   <div className="w-2 h-2 mt-2 bg-emerald-400 rounded-full shrink-0" />
                   <p className="text-slate-600 leading-relaxed">
                     <span className="font-bold text-slate-900">{item.bold}</span> {item.text}
                   </p>
                </li>
              ))}
            </ul>
            
            <div className="mt-10 pt-8 border-t border-slate-100 flex items-center justify-between">
               <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest">
                  <ShieldCheck size={16} /> Verified Protocol
               </div>
               <button className="flex items-center gap-2 text-orange-500 font-black text-xs uppercase tracking-widest hover:translate-x-1 transition-transform">
                  Learn More <ArrowRight size={14} />
               </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}