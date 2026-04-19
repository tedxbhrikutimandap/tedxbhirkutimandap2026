"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, Star, Award, Shield, Users, X, ExternalLink, Info } from "lucide-react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { sponsors, sponsorTiers, SPONSOR_TIERS, type Sponsor } from "@/data/sponsors";

const tierConfig = {
  [SPONSOR_TIERS.TITLE]: {
    styles: "border-ted-red/30 bg-ted-red/[0.05] shadow-[0_0_50px_rgba(235,0,40,0.1)]",
    icon: <Star className="text-ted-red" size={24} />,
    span: "col-span-full lg:col-span-4 lg:row-span-2 min-h-[400px]",
    imageClass: "aspect-[2/1] p-12 md:p-20",
    accent: "bg-ted-red",
  },
  [SPONSOR_TIERS.GOLD]: {
    styles: "border-amber-500/20 bg-amber-500/[0.03]",
    icon: <Award className="text-amber-400" size={20} />,
    span: "col-span-full md:col-span-2 lg:col-span-2 min-h-[300px]",
    imageClass: "aspect-[3/1] p-10 md:p-14",
    accent: "bg-amber-500",
  },
  [SPONSOR_TIERS.SILVER]: {
    styles: "border-slate-300/20 bg-slate-300/[0.03]",
    icon: <Shield className="text-slate-300" size={18} />,
    span: "col-span-1 md:col-span-2 lg:col-span-2 min-h-[250px]",
    imageClass: "aspect-[3/1] p-8 md:p-12",
    accent: "bg-slate-300",
  },
  [SPONSOR_TIERS.BRONZE]: {
    styles: "border-orange-700/20 bg-orange-700/[0.03]",
    icon: <Shield className="text-orange-700" size={16} />,
    span: "col-span-1 md:col-span-2 lg:col-span-2 min-h-[200px]",
    imageClass: "aspect-[3/1] p-6 md:p-10",
    accent: "bg-orange-700",
  },
  [SPONSOR_TIERS.COMMUNITY]: {
    styles: "border-white/10 bg-white/[0.02]",
    icon: <Users className="text-white/40" size={16} />,
    span: "col-span-1 md:col-span-2 lg:col-span-1.5 min-h-[180px]",
    gridClass: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
    imageClass: "aspect-[3/1] p-6",
    accent: "bg-white",
  },
};

export default function SponsorsPage() {
  const [selectedSponsor, setSelectedSponsor] = useState<Sponsor | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedSponsor) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedSponsor]);

  return (
    <>
      <PageHero
        title="Our Partners"
        subtitle="TEDxBhrikutiMandap 2026 is fueled by the bold vision and generous support of our partners who believe in the power of ideas."
      />

      {/* ── Bento Wall Layout ─────────────────────────────────────────── */}
      <section className="pb-20 md:pb-32 relative">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 auto-rows-max">
            {/* Title & Top Tiers Bento Grid */}
            {sponsorTiers.map((tier) => {
              const tierSponsors = sponsors.filter((s) => s.tier === tier);
              if (tierSponsors.length === 0) return null;
              if (tier === SPONSOR_TIERS.COMMUNITY) return null; // We'll handle Community separately for a cleaner grid at bottom

              const config = tierConfig[tier];

              return (
                <AnimatedSection 
                  key={tier} 
                  className={`col-span-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 mb-12`}
                >
                  {/* Tier Label (Optional, keeping it subtle) */}
                  <div className="col-span-full flex items-center gap-4 mb-4 opacity-50">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap">
                      {tier} Partners
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20" />
                  </div>

                  {tierSponsors.map((sponsor) => (
                    <button
                      key={sponsor.name}
                      onClick={() => setSelectedSponsor(sponsor)}
                      className={`group relative flex flex-col items-center justify-center border rounded-[2rem] overflow-hidden transition-all duration-500 hover:scale-[1.01] cursor-pointer text-left w-full ${config.styles} ${config.span}`}
                    >
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className={`relative w-full h-full ${config.imageClass} z-10 transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110 flex items-center justify-center`}>
                        <div className="relative w-full h-full">
                          <Image
                            src={sponsor.logo}
                            alt={sponsor.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* Info Icon Indicator */}
                      <div className="absolute top-6 right-6 text-white/5 group-hover:text-ted-red group-hover:scale-125 transition-all duration-500 z-20">
                        <Info size={16} />
                      </div>

                      {/* Name Reveal for larger cards */}
                      <div className="absolute bottom-6 left-8 z-20 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                         <span className="text-xs font-black uppercase tracking-[0.2em] text-white">
                          {sponsor.name}
                        </span>
                      </div>
                    </button>
                  ))}
                </AnimatedSection>
              );
            })}

            {/* Community Partners - Clean Minimal Bento at Bottom */}
            <AnimatedSection className="col-span-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 mt-12">
               <div className="col-span-full flex items-center gap-4 mb-4 opacity-50">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap">
                    Community Partners
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
                </div>

                {sponsors.filter(s => s.tier === SPONSOR_TIERS.COMMUNITY).map((sponsor) => (
                   <button
                    key={sponsor.name}
                    onClick={() => setSelectedSponsor(sponsor)}
                    className="group relative flex flex-col items-center justify-center border border-white/5 bg-white/[0.02] rounded-[1.5rem] overflow-hidden transition-all duration-500 hover:bg-white/[0.05] hover:border-white/10 cursor-pointer min-h-[160px] col-span-1 md:col-span-2 lg:col-span-1 shadow-lg"
                  >
                    <div className="relative w-full h-full p-8 z-10 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    {sponsor.partnerLabel && (
                      <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-[9px] font-black uppercase tracking-[0.1em] text-white/40">
                          {sponsor.partnerLabel}
                        </span>
                      </div>
                    )}
                  </button>
                ))}
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* ── Sponsor Detail Modal (Refined) ─────────────────────────────── */}
      <AnimatePresence mode="wait">
        {selectedSponsor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 perspective-1000"
          >
            {/* Backdrop with Ambient Glows */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSponsor(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-2xl"
            >
               {/* Ambient Red Splashes (Signature look) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-ted-red/20 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-ted-red/10 rounded-full blur-[100px] pointer-events-none" />
            </motion.div>

            {/* Cinematic Card */}
            <motion.div
              layoutId={selectedSponsor.name}
              initial={{ scale: 0.9, opacity: 0, y: 30, rotateX: 5 }}
              animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20, rotateX: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] flex flex-col md:flex-row z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSponsor(null)}
                className="absolute top-6 right-6 z-50 p-3 bg-white/[0.05] backdrop-blur-md border border-white/10 rounded-full hover:bg-ted-red hover:rotate-90 transition-all duration-500 group shadow-xl"
              >
                <X size={20} className="text-white/70 group-hover:text-white" />
              </button>

              {/* Logo Area: Variable Background & Patterns */}
              <div className="w-full md:w-[45%] lg:w-[40%] bg-black flex items-center justify-center p-12 md:p-16 relative overflow-hidden shrink-0 border-b md:border-b-0 md:border-r border-white/5">
                {/* Dynamic Background Pattern (Dot Grid) */}
                <div 
                  className="absolute inset-0 opacity-[0.07] mix-blend-screen"
                  style={{
                    backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                    backgroundSize: '24px 24px'
                  }}
                />
                
                {/* Tier-specific Radial Glow */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square ${tierConfig[selectedSponsor.tier as keyof typeof tierConfig].accent}/10 rounded-full blur-[80px]`} />
                
                {/* Logo with Soft Drop Shadow & Name Integration */}
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="relative w-full aspect-square z-10 max-w-[280px] flex flex-col items-center justify-center gap-8"
                >
                  <div className="relative w-full aspect-square">
                    <Image
                      src={selectedSponsor.logo}
                      alt={selectedSponsor.name}
                      fill
                      className="object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                    />
                  </div>
                  
                  {/* Integrated Name for Logo Area */}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-center"
                  >
                    <h4 className="text-white/80 text-lg md:text-xl font-[900] uppercase tracking-[0.25em] font-heading">
                      {selectedSponsor.name}
                    </h4>
                    <div className={`h-px w-12 mx-auto mt-3 ${tierConfig[selectedSponsor.tier as keyof typeof tierConfig].accent} opacity-50`} />
                  </motion.div>
                </motion.div>
              </div>

              {/* Content Area: Editorial Layout with Tier Tint */}
              <div className="w-full md:w-auto flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden">
                {/* Background Tint (Branded by Tier) */}
                <div className={`absolute inset-0 ${tierConfig[selectedSponsor.tier].accent}/[0.03] -z-10`} />
                <div className={`absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent -z-10`} />

                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className={`text-[10px] font-[900] uppercase tracking-[0.2em] text-white px-4 py-1.5 ${tierConfig[selectedSponsor.tier].accent} rounded-full shadow-lg`}>
                      {selectedSponsor.tier} Sponsor
                    </span>
                    {selectedSponsor.partnerLabel && (
                       <span className="text-[10px] font-[900] uppercase tracking-[0.2em] text-white/40 font-heading">
                       • {selectedSponsor.partnerLabel}
                     </span>
                    )}
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-[900] text-white uppercase tracking-tighter mb-8 leading-[0.9] font-heading">
                    {selectedSponsor.name}
                  </h3>

                  <div className="relative mb-10 group">
                    <p className="text-white/70 text-base md:text-lg leading-relaxed font-sans max-w-xl">
                      {selectedSponsor.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-8 border-t border-white/5 pt-10">
                    <a
                      href={selectedSponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-3 bg-ted-red px-10 py-5 rounded-full text-white text-xs font-[900] uppercase tracking-[0.2em] shadow-2xl hover:bg-ted-red-dark hover:scale-105 active:scale-95 transition-all duration-300"
                    >
                      Official Website
                      <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Become a Partner CTA (Branded) ────────────────────────────── */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-ted-red/10 rounded-full blur-[120px] pointer-events-none" />
        
        <Container className="text-center relative z-10">
          <AnimatedSection>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-ted-red/10 border border-ted-red/20 mb-8">
              <Mail size={32} className="text-ted-red" />
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-[900] uppercase tracking-tight text-white leading-[0.9] mb-6">
              Become a <br className="sm:hidden" /> <span className="text-ted-red">Partner</span>
            </h2>
            
            <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              Join a distinguished collective of organizations shaping the future of Nepal. 
              Multiple partnership tiers and unique activation opportunities available.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:sponsors@tedxbhrikutimandap.com"
                className="group relative inline-flex items-center gap-3 bg-ted-red px-10 py-5 rounded-full text-white text-sm font-[900] uppercase tracking-[0.2em] shadow-[0_15px_35px_rgba(235,0,40,0.3)] hover:shadow-[0_20px_45px_rgba(235,0,40,0.45)] hover:scale-105 active:scale-95 transition-all duration-500"
              >
                Inquire for 2026
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white/[0.03] border border-white/10 px-10 py-5 rounded-full text-white/70 text-sm font-[900] uppercase tracking-[0.2em] hover:bg-white/[0.08] hover:text-white hover:scale-105 active:scale-95 transition-all duration-500"
              >
                Get in Touch
              </Link>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
