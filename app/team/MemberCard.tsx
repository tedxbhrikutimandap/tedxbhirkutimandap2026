"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Linkedin, Instagram, Facebook, Github } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import type { TeamMember } from "@/data/team";

interface MemberCardProps {
  member: TeamMember;
  i: number;
  aspect?: string;
}

export function MemberCard({ member, i, aspect = "aspect-[4/5]" }: MemberCardProps) {
  const [active, setActive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Activate when the card enters the center band of the viewport.
  // rootMargin "-35% 0px -35% 0px" means only the middle 30% of the screen
  // counts as "visible", so the card lights up as it scrolls to centre.
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
      },
      {
        rootMargin: "-35% 0px -35% 0px",
        threshold: 0,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Still allow manual click toggle (useful on desktop too)
  const toggle = useCallback(() => setActive((v) => !v), []);

  return (
    <AnimatedSection delay={i * 0.05} className="h-full">
      <div
        ref={cardRef}
        className="group relative h-full flex flex-col cursor-pointer"
        onClick={toggle}
        aria-label={`${member.name}, ${member.role}`}
      >
        {/* Card Container */}
        <div
          className={`relative ${aspect} w-full overflow-hidden rounded-3xl bg-[#0a0a0a] shadow-xl transition-colors duration-500
            ${active
              ? "border border-ted-red/50"
              : "border border-white/10 group-hover:border-ted-red/50"
            }`}
        >
          {/* Image – Full Bleed */}
          {member.image && (
            <Image
              src={member.image}
              alt={member.name}
              fill
              className={`object-cover transition-all duration-700
                ${active
                  ? "grayscale-0 scale-105"
                  : "grayscale group-hover:grayscale-0 group-hover:scale-105"
                }`}
            />
          )}

          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500
              ${active ? "opacity-80" : "opacity-60 group-hover:opacity-80"}`}
          />

          {/* Social icons — top-right, slide in from right */}
          <div
            className={`absolute top-4 right-4 z-20 flex flex-col gap-2 transition-all duration-500 ease-out
              ${active
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
              }`}
          >
            {member.socials?.linkedin && (
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2.5 bg-black/40 backdrop-blur-md rounded-full shadow-lg hover:bg-ted-red hover:scale-110 active:scale-95 transition-all duration-300"
                aria-label={`${member.name} LinkedIn`}
              >
                <Linkedin size={18} className="text-white" />
              </a>
            )}
            {member.socials?.instagram && (
              <a
                href={member.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2.5 bg-black/40 backdrop-blur-md rounded-full shadow-lg hover:bg-ted-red hover:scale-110 active:scale-95 transition-all duration-300"
                aria-label={`${member.name} Instagram`}
              >
                <Instagram size={18} className="text-white" />
              </a>
            )}
            {member.socials?.facebook && (
              <a
                href={member.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2.5 bg-black/40 backdrop-blur-md rounded-full shadow-lg hover:bg-ted-red hover:scale-110 active:scale-95 transition-all duration-300"
                aria-label={`${member.name} Facebook`}
              >
                <Facebook size={18} className="text-white" />
              </a>
            )}
            {member.socials?.github && (
              <a
                href={member.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2.5 bg-black/40 backdrop-blur-md rounded-full shadow-lg hover:bg-ted-red hover:scale-110 active:scale-95 transition-all duration-300"
                aria-label={`${member.name} Github`}
              >
                <Github size={18} className="text-white" />
              </a>
            )}
          </div>

          {/* Quote overlay — slides up from bottom */}
          {member.quote && (
            <div
              className={`absolute bottom-6 left-6 right-6 z-20 transition-all duration-500 ease-out text-center
                ${active
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
                }`}
            >
              <p className="text-sm font-[900] text-white italic drop-shadow-md leading-snug">
                &quot;{member.quote}&quot;
              </p>
            </div>
          )}
        </div>

        {/* Info below photo */}
        <div className="pt-5 pb-2 px-1 text-center mt-auto">
          <h3
            className={`text-lg lg:text-xl font-[900] leading-tight transition-colors duration-300
              ${active ? "text-ted-red" : "text-white group-hover:text-ted-red"}`}
          >
            {member.name}
          </h3>
          <p className="text-xs lg:text-sm text-white/60 mt-1 font-medium tracking-wide uppercase">
            {member.role}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
