"use client";

import { motion } from "framer-motion";

export const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none select-none bg-black">
      {/* Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Primary Red Splash - Top Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0.3, 0.45, 0.3],
          scale: [1, 1.15, 1],
          x: [0, 20, 0],
          y: [0, 10, 0]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-[-15%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-ted-red/20 blur-[120px]"
      />

      {/* Secondary Red Splash - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0.25, 0.4, 0.25],
          scale: [1, 1.25, 1],
          x: [0, -30, 0],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[65vw] h-[65vw] rounded-full bg-ted-red/25 blur-[100px]"
      />

      {/* Center Glow (Very Subtle) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vh] rounded-full bg-ted-red/[0.05] blur-[150px]" />

      {/* Accent Splash - Middle Left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          y: [0, 50, 0]
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 5
        }}
        className="absolute top-[30%] left-[5%] w-[40vw] h-[40vw] rounded-full bg-ted-red/15 blur-[90px]"
      />

      {/* Tiny floating red dots for extra "splash" feel */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-[20%] left-[40%] w-1 h-1 bg-ted-red rounded-full blur-[1px]" 
        />
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.5, 1] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute top-[60%] left-[20%] w-2 h-2 bg-ted-red rounded-full blur-[2px]" 
        />
        <motion.div 
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          className="absolute top-[80%] left-[70%] w-1 h-1 bg-ted-red rounded-full blur-[1px]" 
        />
      </div>
    </div>
  );
};

