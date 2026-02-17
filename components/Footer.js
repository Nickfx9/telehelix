"use client";
import { useState } from "react";
import { MessageCircle, Facebook, Twitter, Instagram, X, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (card) => {
    setActiveCard(activeCard === card ? null : card);
  };

  const termsContent = (
    <div className="space-y-4">
      <h3 className="text-xl font-black text-white">Terms of Service</h3>
      <p className="text-sm text-slate-300 leading-relaxed">
        Welcome to **TeleHelix**, a telemedicine platform connecting Kenyans to licensed healthcare providers. By using our services, you agree to:
      </p>
      <ul className="text-sm text-slate-300 space-y-2 list-disc pl-4">
        <li><strong>Eligibility</strong>: You must be 18+ or have guardian consent.</li>
        <li><strong>Payments</strong>: Payments via M-Pesa are non-refundable unless specified.</li>
        <li><strong>Liability</strong>: TeleHelix connects you to experts but is not liable for medical outcomes.</li>
      </ul>
      <p className="text-[10px] text-slate-500 uppercase font-bold pt-4">Last updated: Feb 17, 2026</p>
    </div>
  );

  const privacyContent = (
    <div className="space-y-4">
      <h3 className="text-xl font-black text-white">Privacy Policy</h3>
      <p className="text-sm text-slate-300 leading-relaxed">
        TeleHelix respects your privacy under **Kenya’s Data Protection Act 2019**.
      </p>
      <ul className="text-sm text-slate-300 space-y-2 list-disc pl-4">
        <li><strong>Collection</strong>: We secure health data (medical history) for consultations.</li>
        <li><strong>Protection</strong>: We use 256-bit encryption for all data storage.</li>
        <li><strong>Rights</strong>: You can request data deletion at any time.</li>
      </ul>
    </div>
  );

  return (
    <footer className="relative w-full py-16 px-6 bg-slate-950 text-slate-400 border-t border-white/5">
      
      {/* MODAL OVERLAY */}
      {activeCard && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center z-[100] px-4">
          <div className="bg-slate-900 border border-white/10 text-white rounded-[2rem] p-8 max-w-lg w-full relative shadow-2xl">
            <button onClick={() => setActiveCard(null)} className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors">
              <X size={24} />
            </button>
            {activeCard === "terms" && termsContent}
            {activeCard === "privacy" && privacyContent}
            {activeCard === "blogs" && (
                <div className="space-y-4">
                    <h3 className="text-xl font-black text-white">TeleHelix Insights</h3>
                    <p className="text-sm text-slate-300 italic">"Accessing quality healthcare shouldn't be a luxury. Our mission is to bridge the gap using technology."</p>
                </div>
            )}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-4 group cursor-pointer">
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 7c1.5-1.5 3-2 4.5-2s3 1.5 4.5 3 3 2 4.5 2 3-.5 4.5-2" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M4.5 17c1.5 1.5 3 2 4.5 2s3-1.5 4.5-3 3-2 4.5-2 3 .5 4.5 2" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <h2 className="text-2xl font-black text-white tracking-tighter">
              Tele<span className="text-orange-500">Helix</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            Bridging the healthcare gap in Kenya through AI-powered consultations and local clinic integrations.
          </p>
        </div>

        {/* Links Columns */}
        <div>
          <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Company</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Our Mission</a></li>
            <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact Support</a></li>
            <li><button onClick={() => toggleCard("blogs")} className="hover:text-emerald-400 transition-colors">Health Blogs</button></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Legal</h3>
          <ul className="space-y-3 text-sm">
            <li><button onClick={() => toggleCard("terms")} className="hover:text-emerald-400 transition-colors">Terms of Service</button></li>
            <li><button onClick={() => toggleCard("privacy")} className="hover:text-emerald-400 transition-colors">Privacy Policy</button></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-6">HQ</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><MapPin size={14} className="text-orange-500"/> Nairobi, Kenya</li>
            <li className="flex items-center gap-2"><Mail size={14} className="text-orange-500"/> hello@telehelix.co.ke</li>
            <li className="flex items-center gap-2"><Phone size={14} className="text-orange-500"/> +254 746 000 720</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/5 mt-16 pt-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] font-bold tracking-widest uppercase gap-6">
        <p className="text-slate-600">© 2026 TELEHELIX TECHNOLOGIES. ALL RIGHTS RESERVED.</p>
        
        <div className="flex space-x-6">
          <a href="#" className="hover:text-emerald-400 transition-colors"><Twitter size={16} /></a>
          <a href="#" className="hover:text-emerald-400 transition-colors"><Facebook size={16} /></a>
          <a href="#" className="hover:text-emerald-400 transition-colors"><Instagram size={16} /></a>
        </div>

        <a href="#signup" className="bg-orange-500 hover:bg-white hover:text-orange-600 transition-all text-white px-6 py-2 rounded-full shadow-lg shadow-orange-500/20">
          Get Early Access
        </a>
      </div>
    </footer>
  );
}