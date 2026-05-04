"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { Logo } from "./Logo";
import { navItems, ctaNav } from "@/data/navigation";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const isOpenRef = useRef(false);
  const lastScrollYRef = useRef(0);
  const scrolledRef = useRef(false);
  const visibleRef = useRef(true);
  const pathname = usePathname();

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const nextScrolled = currentScrollY > 20;
          let nextVisible = true;

          if (currentScrollY > 100 && currentScrollY > lastScrollYRef.current && !isOpenRef.current) {
            nextVisible = false;
          }

          if (nextScrolled !== scrolledRef.current) {
            scrolledRef.current = nextScrolled;
            setIsScrolled(nextScrolled);
          }

          if (nextVisible !== visibleRef.current) {
            visibleRef.current = nextVisible;
            setIsVisible(nextVisible);
          }

          lastScrollYRef.current = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleHomeClick = useCallback(() => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  }, []);

  const handleMenuToggle = useCallback(() => {
    setIsOpen((open) => {
      const nextOpen = !open;

      if (nextOpen) {
        visibleRef.current = true;
        setIsVisible(true);
      }

      return nextOpen;
    });
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        } ${isScrolled ? "py-4" : "py-6"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop & Mobile Navbar Container */}
          <div
            className={`mx-auto transition-all duration-500 relative ${
              isOpen ? "rounded-[2.5rem] shadow-2xl" : "rounded-full"
            } ${
              isScrolled || isOpen
                ? "bg-black/90 md:bg-black/80 md:backdrop-blur-xl border border-white/[0.08] md:shadow-[0_4px_30px_rgba(0,0,0,0.5)] px-6 py-3"
                : "bg-transparent ring-transparent px-2 py-2"
            }`}
          >
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="relative z-50 shrink-0" onClick={handleHomeClick}>
                <Logo
                  className={`transition-all duration-300 hover:scale-[1.02] ${
                    isScrolled || isOpen ? "!w-32 !h-8 md:!w-40 md:!h-10" : "!w-40 !h-10 md:!w-52 md:!h-12"
                  }`}
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center bg-white/[0.03] rounded-full px-2 py-1 border border-white/[0.05]">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-5 py-2 text-[11px] font-bold uppercase tracking-[0.15em] rounded-full transition-all duration-300 ${
                      isActive(item.href)
                        ? "text-ted-red bg-ted-red/10"
                        : "text-white/60 hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Desktop CTA */}
              <div className="hidden lg:flex items-center">
                <Link
                  href={ctaNav.href}
                  className="group relative px-6 py-2.5 bg-ted-red/15 border border-ted-red/30 text-ted-red font-[900] uppercase tracking-[0.15em] text-[11px] rounded-full overflow-hidden hover:bg-ted-red hover:text-white hover:border-ted-red transition-all duration-300"
                >
                  <span className="relative flex items-center gap-2">
                    {ctaNav.label} <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={handleMenuToggle}
                className="lg:hidden relative z-50 p-2.5 rounded-full bg-white/5 text-white/80 hover:text-white hover:bg-white/10 transition-all active:scale-90 border border-white/[0.05]"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div
              className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-[80vh] opacity-100 py-8" : "max-h-0 opacity-0 py-0"
              }`}
            >
              <div className="flex flex-col space-y-6 px-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-xl font-[900] uppercase tracking-[0.15em] transition-all ${
                      isActive(item.href)
                        ? "text-ted-red translate-x-2"
                        : "text-white/70 hover:text-white hover:translate-x-2"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="pt-8 border-t border-white/[0.08]">
                  <Link
                    href={ctaNav.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center px-8 py-4 bg-ted-red/15 border border-ted-red/30 text-ted-red text-sm font-[900] uppercase tracking-[0.2em] rounded-2xl hover:bg-ted-red hover:text-white transition-all duration-300 w-fit min-w-[200px]"
                  >
                    {ctaNav.label}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[45] bg-black/80 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
