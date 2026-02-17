"use client";

import { MapPin, ArrowRight, ShieldCheck, Zap, Globe, Share2 } from "lucide-react";

const bridgePillars = [
  {
    title: "Smart Geo-Mapping",
    text: "We bridge the distance by using real-time GPS to pinpoint the closest specialized care for your specific diagnosis.",
    icon: <MapPin className="w-5 h-5" />,
    borderColor: "border-orange-500"
  },
  {
    title: "Verified Provider Network",
    text: "Breaking the trust gap by only suggesting facilities that have passed our rigorous quality and equipment audit.",
    icon: <ShieldCheck className="w-5 h-5" />,
    borderColor: "border-yellow-500"
  },
  {
    title: "Instant Digital Referral",
    text: "Your virtual doctor sends your history directly to the clinic before you arrive, ensuring a seamless handoff.",
    icon: <Zap className="w-5 h-5" />,
    borderColor: "border-orange-400"
  }
];

// 1. ADD THE PROP HERE
export default function LocalCareBridge({ onOpenWaitlist }) {
  return (
    <section className="bg-slate-50 py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-bold tracking-widest text-[10px] uppercase bg-orange-50 px-3 py-1 rounded-full border border-orange-200 mb-4 inline-block">
            Closing the Gap
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Connecting Digital Care to <br />
            <span className="text-blue-600">Physical Streets.</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            TeleHelix isn't just an app; it's a movement to make every clinic in your neighborhood accessible with a single tap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {bridgePillars.map((pillar, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-[2rem] border-t-4 ${pillar.borderColor} shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300 group cursor-pointer`}
              onClick={onOpenWaitlist} // 2. Map clicking individual pillars to the waitlist too
            >
              <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>

        {/* The "Movement" Card */}
        <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-orange-100 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            <div className="max-w-lg">
              <div className="flex items-center gap-2 mb-6">
                 <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                       <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                       </div>
                    ))}
                 </div>
                 <p className="text-xs font-bold text-slate-400">Join 500+ Early Adopters</p>
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4">Are you a Provider in Kenya?</h3>
              <p className="text-slate-600 mb-8 italic">
                "We are currently mapping out local clinics and pharmacies in Nairobi to ensure the best coverage for our launch."
              </p>
              <div className="flex flex-wrap gap-4">
                 <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full uppercase">
                    <Globe className="w-3 h-3" /> Digital-First
                 </div>
                 <div className="flex items-center gap-2 text-[10px] font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full uppercase">
                    <Share2 className="w-3 h-3" /> Community-Driven
                 </div>
              </div>
            </div>

            {/* 3. ATTACH THE OPEN ACTION HERE */}
            <button 
              onClick={onOpenWaitlist}
              className="w-full lg:w-auto px-10 py-5 bg-orange-500 text-white font-black rounded-2xl hover:bg-slate-900 transition-all shadow-xl shadow-orange-500/20 text-lg active:scale-95"
            >
              Get Notified on Launch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}