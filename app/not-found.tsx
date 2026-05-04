"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-ted-red/10 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10 text-center">
        <div className="h-1 w-12 bg-ted-red rounded-full mb-8 mx-auto" />
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-[900] uppercase tracking-tight text-white leading-[0.9] mb-6">
          404
        </h1>
        <p className="text-lg md:text-xl text-white/50 max-w-md mx-auto mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 bg-ted-red px-7 py-3.5 rounded-full text-white text-xs font-[900] uppercase tracking-[0.15em] shadow-[0_8px_25px_rgba(235,0,40,0.4)] hover:shadow-[0_12px_35px_rgba(235,0,40,0.55)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Home size={16} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2.5 bg-white/[0.05] border border-white/[0.1] px-7 py-3.5 rounded-full text-white/80 text-xs font-[900] uppercase tracking-[0.15em] hover:bg-white/[0.1] hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>
      </Container>
    </div>
  );
}
