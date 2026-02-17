"use client";

import { BrainCircuit, Activity, HeartPulse, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const aiFeatures = [
  {
    title: "Intuitive Symptom Mapping",
    description: "Instead of generic search results, our AI maps your inputs to a clinical database to pinpoint specific health concerns.",
    icon: <BrainCircuit className="w-6 h-6" />,
  },
  {
    title: "Regional Intelligence",
    description: "HelixAI syncs with localized health data in Kenya to identify if your symptoms align with current regional outbreaks.",
    icon: <Activity className="w-6 h-6" />,
  },
  {
    title: "Seamless Doctor Prep",
    description: "Before your call, your doctor receives a clinical summary, allowing them to focus entirely on your recovery plan.",
    icon: <HeartPulse className="w-6 h-6" />,
  }
];

export default function AIPreDiagnosis() {
  return (
    <section className="bg-sky-50 py-28 px-6 relative overflow-hidden">
      {/* Ocean/Skyblue Lighting Effects */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-200/40 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* LEFT: Premium Glass Technical Card */}
          <div className="lg:w-1/2 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 bg-white/70 backdrop-blur-2xl border border-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,123,255,0.1)] relative"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-cyan-500/10 text-cyan-600 rounded-2xl border border-cyan-200">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-extrabold text-xl tracking-tight">HelixAI Engine</h4>
                  <p className="text-cyan-600 text-[10px] uppercase font-black tracking-widest">Advanced Clinical Intelligence</p>
                </div>
              </div>

              {/* Logic Steps */}
              <div className="space-y-6">
                {[
                  "Natural Language Understanding",
                  "Cross-Border Health Analytics",
                  "Anonymized Triage Verification"
                ].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center transition-colors group-hover:bg-cyan-500">
                      <CheckCircle2 size={16} className="text-cyan-600 group-hover:text-white" />
                    </div>
                    <span className="text-base text-slate-700 font-semibold">{text}</span>
                  </div>
                ))}

                <div className="pt-8 border-t border-slate-200 mt-8">
                  <div className="flex items-center justify-between p-5 bg-cyan-50/50 rounded-2xl border border-cyan-100">
                    <div className="flex items-center gap-3">
                      <ShieldCheck size={22} className="text-cyan-600" />
                      <div>
                        <span className="text-[10px] font-black text-cyan-800 uppercase block tracking-wider">Patient Security</span>
                        <span className="text-[11px] text-cyan-600/70 font-bold">End-to-End Encrypted</span>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-white rounded-lg text-[9px] font-mono font-bold text-slate-400 border border-slate-100 shadow-sm">
                      AES-256
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Modern Narrative */}
          <div className="lg:w-1/2 space-y-10">
            <div className="space-y-4">
              <span className="inline-block text-cyan-700 font-black text-[11px] uppercase tracking-[0.3em] bg-cyan-100/80 px-4 py-2 rounded-full border border-cyan-200 shadow-sm">
                Precision Health
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Intelligence that <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Empowers Recovery.</span>
              </h2>
              <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
                HelixAI is the bridge between your symptoms and the right specialist. It saves time, reduces anxiety, and ensures your doctor is ready for you from second one.
              </p>
            </div>

            <div className="grid gap-8">
              {aiFeatures.map((f, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-white shadow-lg shadow-cyan-200/50 border border-cyan-100 rounded-2xl flex items-center justify-center text-cyan-500 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-500">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-black text-lg mb-1">{f.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}