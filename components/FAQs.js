"use client";

import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "What is TeleHelix?",
    answer: "TeleHelix is an advanced AI-powered telemedicine platform that connects you with licensed doctors via secure video calls. Think of it as a premium hospital experience, right in your pocket.",
  },
  {
    question: "How does HelixAI help me?",
    answer: "HelixAI is our smart assistant that analyzes your symptoms in seconds. It ensures you are matched with the exact specialist you need, saving you time and guesswork.",
  },
  {
    question: "Is my medical information secure?",
    answer: "Security is our core priority. We use bank-grade encryption and HIPAA-compliant storage on Google Cloud to ensure your consultations and records remain 100% private.",
  },
  {
    question: "Can I get prescriptions online?",
    answer: "Yes. Following your consultation, your doctor issues a digital prescription directly to the app, which you can use at any pharmacy or have delivered through our partners.",
  },
  {
    question: "Can I consult in Swahili or other local languages?",
    answer: "Absolutely. TeleHelix is built for Kenyans. You can choose to consult in Swahili, English, or other local languages to ensure you are fully understood by your doctor.",
  },
  {
    question: "When will the mobile app (APK) be available?",
    answer: "We are currently in a closed pre-launch phase. Join our waitlist today to be the first to receive the download link and a special early-bird discount on your first visit.",
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="w-full py-24 px-6 bg-white relative overflow-hidden">
      {/* Subtle Background Detail */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent"></div>

      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Support Center</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
          Common Questions
        </h2>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Everything you need to know about the TeleHelix experience and our upcoming launch.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`transition-all duration-300 rounded-2xl border ${
              activeIndex === index 
                ? "bg-blue-50/30 border-blue-200 shadow-sm" 
                : "bg-white border-slate-100 hover:border-blue-200"
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-6 text-left transition-colors"
            >
              <span className={`font-bold text-base md:text-lg flex items-center ${
                activeIndex === index ? "text-blue-700" : "text-slate-800"
              }`}>
                {/* Active Indicator Dot */}
                <span className={`w-2 h-2 rounded-full mr-3 ${
                  activeIndex === index ? "bg-blue-600 animate-pulse" : "bg-slate-200"
                }`}></span>
                {faq.question}
              </span>
              <div className={`p-1 rounded-full transition-all duration-300 ${
                activeIndex === index ? "bg-blue-600 text-white rotate-180" : "bg-slate-100 text-slate-400"
              }`}>
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>
            
            {activeIndex === index && (
              <div className="px-11 pb-6 text-slate-600 text-sm md:text-base leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="pt-2 border-t border-blue-100/50">
                  {faq.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-12 text-slate-400 text-sm">
        Still have questions? <span className="text-blue-600 font-bold cursor-pointer hover:underline">Contact our support team</span>
      </div>
    </section>
  );
}