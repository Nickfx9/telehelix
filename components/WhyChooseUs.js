"use client";

import Image from "next/image";
import Link from "next/link";
import { FaStethoscope, FaClock, FaShieldAlt, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="relative w-full py-24 bg-[#0f172a] overflow-hidden">
      {/* Central Radial Glow - Creates depth without heavy images */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side - The 3D Human-Tech Visual */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute -inset-2 bg-gradient-to-tr from-blue-500/10 to-teal-500/10 blur-xl rounded-3xl"></div>
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur-md p-2 shadow-2xl">
            <Image
              src="/images/telehelix-trust-mockup.png"
              alt="TeleHelix Secure Medical Connection"
              width={600}
              height={500}
              className="rounded-2xl object-cover w-full h-auto"
              loading="lazy" // Better for 3G performance
            />
            {/* Overlay Stats Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#1e293b]/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex justify-around text-center shadow-lg">
              <div>
                <p className="text-xl font-bold text-white">500+</p>
                <p className="text-[10px] uppercase tracking-wider text-teal-400 font-bold">Doctors</p>
              </div>
              <div className="w-px h-8 bg-white/10"></div>
              <div>
                <p className="text-xl font-bold text-white">99.9%</p>
                <p className="text-[10px] uppercase tracking-wider text-teal-400 font-bold">Secure</p>
              </div>
              <div className="w-px h-8 bg-white/10"></div>
              <div>
                <p className="text-xl font-bold text-white">24/7</p>
                <p className="text-[10px] uppercase tracking-wider text-teal-400 font-bold">Active</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <div className="order-1 lg:order-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-teal-400 font-bold tracking-widest text-[10px] lg:text-xs uppercase bg-teal-400/10 px-3 py-1 rounded-full border border-teal-400/20">
              Trusted Healthcare Ecosystem
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 leading-tight">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">TeleHelix</span> is the Best Choice
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Vetted Experts Card */}
            <div className="bg-white/5 border border-white/5 p-5 rounded-2xl hover:border-blue-500/30 transition-all duration-300 group">
              <FaStethoscope className="text-blue-400 text-xl mb-3" />
              <h4 className="text-white font-bold mb-1 text-base">Vetted Experts</h4>
              <p className="text-gray-400 text-xs leading-relaxed">Consult board-certified professionals verified by our medical board.</p>
            </div>

            {/* AI Privacy Card */}
            <div className="bg-white/5 border border-white/5 p-5 rounded-2xl hover:border-teal-500/30 transition-all duration-300">
              <FaShieldAlt className="text-teal-400 text-xl mb-3" />
              <h4 className="text-white font-bold mb-1 text-base">HelixAI Privacy</h4>
              <p className="text-gray-400 text-xs leading-relaxed">Encrypted health records that ensure your data remains strictly yours.</p>
            </div>

            {/* Zero Waiting Card */}
            <div className="bg-white/5 border border-white/5 p-5 rounded-2xl hover:border-blue-500/30 transition-all duration-300">
              <FaClock className="text-blue-400 text-xl mb-3" />
              <h4 className="text-white font-bold mb-1 text-base">Zero Waiting</h4>
              <p className="text-gray-400 text-xs leading-relaxed">Intelligent queue matching puts you with a doctor in under 5 minutes.</p>
            </div>

            {/* M-Pesa Security Card */}
            <div className="bg-white/5 border border-white/5 p-5 rounded-2xl hover:border-teal-500/30 transition-all duration-300">
              <div className="flex gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">Live Payments</span>
              </div>
              <h4 className="text-white font-bold mb-1 text-base">Accessible & Affordable</h4>
              <p className="text-gray-400 text-xs leading-relaxed">Quality care that fits your schedule and budget..</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all transform hover:scale-[1.02] shadow-lg shadow-blue-500/20 active:scale-95">
              PATNERSHIP && COLLABORATION
            </button>
            <Link href="/therapy">
              <button className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
                Explore More <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}