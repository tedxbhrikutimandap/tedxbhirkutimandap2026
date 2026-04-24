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
    span: "col-span-full lg:col-span-4 lg:row-span-2",
    cardWidth: "w-full max-w-2xl min-h-[240px] sm:min-h-[280px]",
    imageClass: "aspect-[3/2] p-6 sm:p-8 md:p-12",
    accent: "bg-ted-red",
    tint: "bg-ted-red/[0.12]",
    buttonBg: "bg-ted-red hover:bg-ted-red-dark",
  },
  [SPONSOR_TIERS.GOLD]: {
    styles: "border-amber-500/20 bg-amber-500/[0.03]",
    icon: <Award className="text-amber-400" size={20} />,
    span: "col-span-full md:col-span-2 lg:col-span-2",
    cardWidth: "w-full sm:w-[calc(50%-0.75rem)] max-w-md min-h-[200px] sm:min-h-[240px]",
    imageClass: "aspect-[3/2] p-6 sm:p-8 md:p-10",
    accent: "bg-amber-500",
    tint: "bg-amber-500/[0.08]",
    buttonBg: "bg-amber-500 hover:bg-amber-600",
  },
  [SPONSOR_TIERS.SILVER]: {
    styles: "border-slate-300/20 bg-slate-300/[0.03]",
    icon: <Shield className="text-slate-300" size={18} />,
    span: "col-span-1 md:col-span-2 lg:col-span-2",
    cardWidth: "w-[calc(50%-0.5rem)] sm:w-[calc(33.33%-0.75rem)] max-w-sm min-h-[180px] sm:min-h-[220px]",
    imageClass: "aspect-[3/2] p-4 sm:p-6 md:p-8",
    accent: "bg-slate-300",
    tint: "bg-slate-300/[0.06]",
    buttonBg: "bg-slate-400 hover:bg-slate-500",
  },
  [SPONSOR_TIERS.BRONZE]: {
    styles: "border-orange-700/20 bg-orange-700/[0.03]",
    icon: <Shield className="text-orange-700" size={16} />,
    span: "col-span-1 md:col-span-2 lg:col-span-2",
    cardWidth: "w-[calc(50%-0.5rem)] sm:w-[calc(33.33%-0.75rem)] lg:w-[calc(25%-0.75rem)] min-h-[160px] sm:min-h-[180px]",
    imageClass: "aspect-[3/2] p-4 sm:p-5 md:p-8",
    accent: "bg-orange-700",
    tint: "bg-orange-700/[0.08]",
    buttonBg: "bg-orange-700 hover:bg-orange-800",
  },
  [SPONSOR_TIERS.COMMUNITY]: {
    styles: "border-white/10 bg-white/[0.02]",
    icon: <Users className="text-white/40" size={16} />,
    span: "col-span-1 md:col-span-2 lg:col-span-1.5",
    gridClass: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
    imageClass: "aspect-[3/2] p-4 sm:p-5",
    accent: "bg-white/20",
    tint: "bg-white/[0.04]",
    buttonBg: "bg-white/10 hover:bg-white/20",
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
                  className="col-span-full mb-8"
                >
                  {/* Tier Label */}
                  <div className="flex items-center gap-4 mb-8 opacity-90">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/40" />
                    <h2 className="text-xs font-[900] uppercase tracking-[0.6em] whitespace-nowrap text-white">
                      {tier} Partners
                    </h2>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/40" />
                  </div>

                  {/* Centered Flex Container */}
                  <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                  {tierSponsors.map((sponsor) => (
                    <button
                      key={sponsor.name}
                      onClick={() => setSelectedSponsor(sponsor)}
                      className={`group relative flex flex-col items-center justify-center border rounded-[2rem] overflow-hidden transition-all duration-500 hover:scale-[1.01] cursor-pointer text-left ${config.styles} ${config.cardWidth}`}
                    >
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className={`relative w-full ${config.imageClass} z-10 transition-all duration-500 group-hover:scale-105 flex items-center justify-center`}>
                        <div className="relative w-full aspect-[3/2]">
                          {sponsor.logo && (
                            <Image
                              src={sponsor.logo}
                              alt={sponsor.name}
                              fill
                              className={`object-contain transition-all duration-500 ${
                                sponsor.name.toLowerCase().includes('ather') ? 'invert brightness-[2] opacity-80 group-hover:opacity-100' : 'opacity-80 group-hover:opacity-100'
                              }`}
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          )}
                        </div>
                      </div>

                      {/* Info Icon Indicator */}
                      <div className="absolute top-6 right-6 text-white/5 group-hover:text-ted-red group-hover:scale-125 transition-all duration-500 z-20">
                        <Info size={16} />
                      </div>

                      {/* Name below image */}
                      <div className="w-full px-4 sm:px-8 pb-4 z-20 text-center -mt-4 sm:-mt-6">
                       <h3 className="text-[10px] sm:text-xs font-[900] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/90 group-hover:text-white transition-all duration-500 leading-relaxed block truncate">
                          {sponsor.name}
                        </h3>
                      </div>
                    </button>
                  ))}
                  </div>
                </AnimatedSection>
              );
            })}

            {/* Community Partners - Clean Minimal Bento at Bottom */}
            <AnimatedSection className="col-span-full mt-12 md:mt-16">
               <div className="flex items-center gap-4 mb-6 sm:mb-8 opacity-90">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/30" />
                  <h2 className="text-xs font-[900] uppercase tracking-[0.4em] sm:tracking-[0.6em] whitespace-nowrap text-white">
                    Community Partners
                  </h2>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/30" />
                </div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {sponsors.filter(s => s.tier === SPONSOR_TIERS.COMMUNITY).map((sponsor) => (
                   <button
                    key={sponsor.name}
                    onClick={() => setSelectedSponsor(sponsor)}
                    className={`group relative flex flex-col items-center justify-center border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-700 hover:scale-[1.02] cursor-pointer shadow-2xl ${tierConfig[SPONSOR_TIERS.COMMUNITY].styles} w-full xs:w-[calc(50%-0.75rem)] sm:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1.25rem)] min-h-[160px] gap-0`}
                    aria-label={`View details for ${sponsor.name}`}
                  >
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${tierConfig[SPONSOR_TIERS.COMMUNITY].tint}`} />
                    <div className="relative w-full flex-1 px-6 z-10 transition-all duration-700 group-hover:scale-105">
                      {sponsor.logo && (
                        <div className={`relative w-full ${tierConfig[SPONSOR_TIERS.COMMUNITY].imageClass}`}>
                          <Image
                            src={sponsor.logo}
                            alt={`${sponsor.name} logo`}
                            fill
                            className="object-contain opacity-60 group-hover:opacity-100 transition-all duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                          />
                        </div>
                      )}
                    </div>
                    <div className="w-full px-4 mt-4 z-20 text-center">
                       <p className="text-[10px] font-[900] uppercase tracking-[0.15em] text-white/70 group-hover:text-white transition-all duration-500 leading-tight">
                        {sponsor.name}
                      </p>
                      {sponsor.partnerLabel && (
                        <p className="text-[9px] font-black uppercase tracking-[0.1em] text-ted-red/80 mt-2">
                          {sponsor.partnerLabel}
                        </p>
                      )}
                    </div>
                  </button>
                ))}
                </div>
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
                    {selectedSponsor.logo && (
                      <Image
                        src={selectedSponsor.logo}
                        alt={selectedSponsor.name}
                        fill
                        className={`object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] ${
                          selectedSponsor.name.toLowerCase().includes('ather') ? 'invert brightness-[2]' : ''
                        }`}
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    )}
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
                <div className={`absolute inset-0 ${tierConfig[selectedSponsor.tier].tint}`} />
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />

                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className={`text-[10px] font-[900] uppercase tracking-[0.2em] text-white px-4 py-1.5 ${tierConfig[selectedSponsor.tier].accent} rounded-full shadow-lg`}>
                      {selectedSponsor.partnerLabel
                        ? selectedSponsor.partnerLabel
                        : `${selectedSponsor.tier} Sponsor`}
                    </span>
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
                      className={`group relative inline-flex items-center gap-3 ${tierConfig[selectedSponsor.tier].buttonBg} px-10 py-5 rounded-full text-white text-xs font-[900] uppercase tracking-[0.2em] shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300`}
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
    </>
  );
}
