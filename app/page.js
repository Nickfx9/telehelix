"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import LocalCareBridge from "../components/LocalCareBridge";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";

// Import the new handshake modal
import WaitlistModal from "../components/WaitlistModal";

export default function Home() {
  // Single state to control the waitlist across the whole page
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      {/* Pass the trigger to Navbar */}
      <Navbar onOpenWaitlist={() => setIsWaitlistOpen(true)} />

      <main className="relative min-h-screen bg-[#0a192f] flex items-center pt-20 overflow-hidden">
        {/* Modern Background Effects */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] z-0"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] z-0"></div>

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          
          {/* LEFT SIDE: Text & Action */}
          <div className="text-left">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-teal-400 uppercase bg-teal-400/10 rounded-full border border-teal-400/20">
              Coming Soon 
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              The Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Healthcare</span> is Here.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
    Stop waiting. <span className="text-emerald-400 font-bold">Start healing.</span> 
    Connect with Kenya's top specialists in under 5 minutes. No queues, no traffic just world-class care via <span className="text-white font-semibold">TeleHelix.</span>
   </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsWaitlistOpen(true)} // Connected to Waitlist
                className="px-8 py-4 bg-teal-500 text-white font-bold rounded-xl hover:bg-teal-400 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(20,184,166,0.4)]"
              >
                Start your journey today
              </button>
              <button
                className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-xl hover:bg-white/10 transition-all backdrop-blur-md"
              >
                Watch Demo
              </button>
            </div>
            
            <p className="mt-6 text-sm text-gray-400 italic">
              * Your healing journey  start today ,Be Among the first users to explore the New Era of digital care 
            </p>
          </div>

          {/* RIGHT SIDE: The 3D Mockup */}
          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
            <img
              src="/images/telehelix-3d-mockup.png" 
              alt="TeleHelix App 3D Mockup"
              className="relative z-10 w-full max-w-[450px] drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </main>

      <section id="services">
        {/* Added onOpenAI to trigger the waitlist modal */}
        <Services onOpenAI={() => setIsWaitlistOpen(true)} />
      </section>

      <WhyChooseUs />
      <HowItWorks />
      
      {/* Pass the trigger to LocalCareBridge */}
      <LocalCareBridge onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      
      <FAQs />

      <section id="contact">
        <Footer />
      </section>

      {/* Global Waitlist Handshake Modal */}
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </>
  );
}