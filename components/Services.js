"use client";

import { 
  HeartPulse, Baby, Brain, Stethoscope, 
  Syringe, BookOpen, Bot, Sparkles, ArrowRight 
} from "lucide-react";

const services = [
  {
    title: "General Medical",
    description: "Instant online consultations with licensed doctors for common illnesses.",
    icon: <Stethoscope className="w-6 h-6" />,
  },
  {
    title: "Maternal & Child",
    description: "Antenatal care, child health checkups, and vaccination guidance.",
    icon: <Baby className="w-6 h-6" />,
  },
  {
    title: "Mental Health",
    description: "Confidential therapy and counseling sessions to support well-being.",
    icon: <Brain className="w-6 h-6" />,
  },
  {
    title: "Chronic Care",
    description: "Manage diabetes, hypertension, and other conditions from home.",
    icon: <HeartPulse className="w-6 h-6" />,
  },
  {
    title: "Specialist Referrals",
    description: "Consult with specialists and receive expert care recommendations.",
    icon: <Syringe className="w-6 h-6" />,
  },
  {
    title: "Health Education",
    description: "Access health tips, nutrition advice, and preventive care resources.",
    icon: <BookOpen className="w-6 h-6" />,
  },
];

// 1. ADD THE onOpenAI PROP HERE
export default function Services({ onOpenAI }) {
  return (
    <section id="services" className="bg-white py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl text-left">
            <span className="text-orange-600 font-bold tracking-widest text-[10px] uppercase bg-orange-50 px-3 py-1 rounded-full border border-orange-100 mb-4 inline-block">
              Modern Healthcare
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              The Future of Care, <br/>
              <span className="text-orange-500 underline decoration-slate-200 underline-offset-8">Perfected.</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm text-sm font-medium border-l-4 border-orange-500 pl-4 leading-relaxed">
            TeleHelix leverages intelligent matching to ensure every Kenyan receives specialized care in under 5 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* HELIXAI PRE-DIAGNOSIS (The Attraction Spotlight) */}
          <div className="relative group lg:col-span-1 h-full">
            <div className="relative h-full bg-slate-950 rounded-[2rem] p-8 flex flex-col justify-between shadow-2xl shadow-orange-500/10 overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full blur-3xl"></div>
              
              <div>
                <div className="flex justify-between items-start mb-10">
                  <div className="p-4 bg-orange-500 rounded-2xl shadow-lg shadow-orange-500/30">
                    <Bot className="w-8 h-8 text-white" />
                  </div>
                  <span className="flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold text-orange-400 uppercase bg-white/5 rounded-full border border-white/10">
                    <span className="animate-pulse flex items-center gap-1.5">
                       <Sparkles className="w-3 h-3" /> HelixAI Active
                    </span>
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Pre-Diagnosis</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-10">
                  Our smart AI assistant analyzes your symptoms in real-time, matching you with the perfect specialist instantly.
                </p>
              </div>
              
              {/* 2. ATTACH THE CLICK HANDLER HERE */}
              <button 
                onClick={onOpenAI}
                className="w-full py-4 bg-white text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-orange-500 hover:text-white transition-all duration-300 group active:scale-95"
              >
                Try HelixAI Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* STANDARD SERVICES */}
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:bg-white hover:border-orange-500/30 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col items-start"
            >
              <div className="mb-8 w-14 h-14 flex items-center justify-center bg-white text-orange-500 rounded-2xl shadow-sm border border-slate-100 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}