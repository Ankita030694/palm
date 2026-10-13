'use client';
import { useState, useEffect } from 'react';

interface NavbarProps {
  menuOpen?: boolean;
  setMenuOpen?: (open: boolean | ((prev: boolean) => boolean)) => void;
  closeMenu?: () => void;
}

export default function Navbar({
  menuOpen: controlledMenuOpen,
  setMenuOpen: controlledSetMenuOpen,
  closeMenu: controlledCloseMenu,
}: NavbarProps = {}) {
  const [internalMenuOpen, setInternalMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuExpanded, setMobileMenuExpanded] = useState(false);

  const isControlled = controlledMenuOpen !== undefined;
  const menuOpen = isControlled ? controlledMenuOpen : internalMenuOpen;

  const setMenuOpen = (open: boolean | ((prev: boolean) => boolean)) => {
    if (isControlled && controlledSetMenuOpen) {
      controlledSetMenuOpen(open);
    } else {
      setInternalMenuOpen(open);
    }
  };

  const handleClose = () => {
    if (controlledCloseMenu) {
      controlledCloseMenu();
    } else {
      setMenuOpen(false);
    }
    setMobileMenuExpanded(false);
  };

  const handleToggle = () => {
    if (menuOpen) {
      handleClose();
    } else {
      setMenuOpen(true);
    }
  };

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [menuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  // Close mobile menu if window resizes to desktop breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && menuOpen) {
        handleClose();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  // Scroll detection for header style change
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* =========================================================
          TOP BAR
      ========================================================= */}
      <div className="w-full h-[34px] bg-[#FFF9F2] text-[#171513] border-b border-[#E7DED3] overflow-hidden text-[11px] sm:text-[12px] flex items-center relative z-[101]">
        <div className="max-w-[1180px] w-[92%] h-full mx-auto flex items-center justify-between tracking-[0.6px]">
          <span className="hidden md:inline truncate text-[#171513]/85 font-medium">ONE GOLDEN MILE · NETAJI NAGAR, NEW DELHI</span>
          <span className="w-full md:w-auto text-center md:text-right shrink-0 truncate text-[#171513]/90">
            <a href="tel:+919599280444" className="hover:text-[#1C2D20] hover:underline font-medium">9599280444</a> | <a href="tel:+919599280666" className="hover:text-[#1C2D20] hover:underline font-medium">9599280666</a> &nbsp; · &nbsp; OPEN DAILY 12PM — 11PM
          </span>
        </div>
      </div>

      {/* =========================================================
          HEADER
      ========================================================= */}
      <header
        id="header"
        className={`fixed left-0 w-full z-[100] transition-all duration-300 ${
          scrolled
            ? 'top-0 bg-white/95 backdrop-blur-md text-[#171513] shadow-[0_5px_30px_rgba(0,0,0,0.08)]'
            : 'top-[34px] text-white bg-gradient-to-b from-black/50 via-black/20 to-transparent'
        }`}
      >
        <div className="max-w-[1240px] w-[92%] h-[80px] lg:h-[88px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="w-[130px] sm:w-[150px] h-auto block shrink-0">
            <img
              src={scrolled ? '/logoblack.svg' : '/logowhite.png'}
              alt="Palm Restaurant"
              className="block w-full h-auto object-contain"
              onError={(e: any) => {
                e.target.style.display = 'none';
                if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
              }}
            />
            <span style={{ display: 'none' }} className="font-serif italic text-[24px] leading-[0.8]">
              palm
              <small className="block font-sans not-italic text-[8px] tracking-[2px] mt-1">RESTAURANT</small>
            </span>
          </a>

          {/* Centered Navigation Links on Desktop */}
          <nav
            id="navigation"
            aria-label="Main Navigation"
            className="hidden lg:flex lg:flex-row lg:flex-1 lg:justify-center lg:items-center lg:gap-[28px] xl:gap-[36px] lg:text-[15px] lg:font-sans lg:font-semibold"
          >
            <a
              href="#about"
              className="hover:text-[#94D1A4] lg:hover:text-[#1C2D20] transition-colors"
            >
              About us
            </a>

            {/* Desktop Menu with Dropdown */}
            <div
              className="relative py-2 group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="inline-flex items-center gap-1.5 hover:text-[#94D1A4] lg:hover:text-[#1C2D20] transition-colors cursor-pointer select-none"
                aria-expanded={dropdownOpen}
              >
                <span>Menu</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Card */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[220px] transition-all duration-200 z-50 ${
                  dropdownOpen
                    ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                    : 'opacity-0 invisible translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto'
                }`}
              >
                <div className="bg-white text-[#171513] rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.18)] border border-[#E7DED3] p-2 flex flex-col gap-1">
                  <a
                    href="/drinks.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-[14px] font-medium hover:bg-[#F6F5F2] hover:text-[#1C2D20] transition-colors group/item"
                  >
                    <span>Food</span>
                    <span className="text-[11px] text-[#77716A] uppercase font-semibold tracking-wider group-hover/item:text-[#1C2D20]">PDF ↗</span>
                  </a>
                  <a
                    href="/drinks.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-[14px] font-medium hover:bg-[#F6F5F2] hover:text-[#1C2D20] transition-colors group/item"
                  >
                    <span>Drinks</span>
                    <span className="text-[11px] text-[#77716A] uppercase font-semibold tracking-wider group-hover/item:text-[#1C2D20]">PDF ↗</span>
                  </a>
                  <a
                    href="/party.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-[14px] font-medium hover:bg-[#F6F5F2] hover:text-[#1C2D20] transition-colors group/item"
                  >
                    <span>Party Packages</span>
                    <span className="text-[11px] text-[#77716A] uppercase font-semibold tracking-wider group-hover/item:text-[#1C2D20]">PDF ↗</span>
                  </a>
                </div>
              </div>
            </div>

            <a
              href="#experience"
              className="hover:text-[#94D1A4] lg:hover:text-[#1C2D20] transition-colors"
            >
              Experience
            </a>
            <a
              href="#events"
              className="hover:text-[#94D1A4] lg:hover:text-[#1C2D20] transition-colors"
            >
              What's On
            </a>
            <a
              href="#location"
              className="hover:text-[#94D1A4] lg:hover:text-[#1C2D20] transition-colors"
            >
              Location
            </a>
          </nav>

          {/* Right Action Button (Desktop) & Hamburger (Mobile) */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#reservation"
              style={{ color: '#ffffff' }}
              className="hidden lg:inline-flex items-center justify-center bg-[#1C2D20] hover:bg-[#132016] !text-white px-5 py-2.5 rounded-full text-[14px] font-semibold transition-all hover:scale-105 shadow-sm"
            >
              Book a table →
            </a>

            <button
              type="button"
              id="mobileMenu"
              onClick={handleToggle}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className={`lg:hidden flex items-center justify-center w-[44px] h-[44px] rounded-full cursor-pointer transition-all duration-200 border-0 shadow-md ${
                scrolled
                  ? 'bg-[#1C2D20] text-white hover:bg-[#132016] active:scale-95'
                  : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm active:scale-95'
              }`}
            >
              {menuOpen ? (
                <svg
                  className="w-5 h-5 fill-none stroke-current"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 fill-none stroke-current"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================
          MOBILE NAVIGATION DRAWER / MODAL OVERLAY
          (Rendered outside header to avoid backdrop-filter containing block bug)
      ========================================================= */}
      <div
        id="mobileNavigation"
        className={`lg:hidden fixed inset-0 z-[200] transition-opacity duration-300 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto visible'
            : 'opacity-0 pointer-events-none invisible'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        {/* Backdrop overlay */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
          onClick={handleClose}
          aria-hidden="true"
        />

        {/* Drawer Panel */}
        <div
          className={`relative w-full h-full bg-[#141210] text-white flex flex-col justify-between transition-transform duration-300 ease-out overflow-hidden shadow-2xl ${
            menuOpen ? 'translate-y-0' : '-translate-y-6'
          }`}
        >
          {/* Top Bar inside Drawer */}
          <div className="h-[74px] px-6 flex items-center justify-between border-b border-white/10 shrink-0 bg-[#171513]">
            <a href="#home" onClick={handleClose} className="w-[125px] block">
              <img
                src="/logowhite.png"
                alt="Palm Restaurant"
                className="w-full h-auto object-contain"
                onError={(e: any) => {
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
                }}
              />
              <span style={{ display: 'none' }} className="font-serif italic text-[22px] leading-tight text-white">
                palm
                <small className="block font-sans not-italic text-[8px] tracking-[2px] mt-0.5 text-white/70">RESTAURANT</small>
              </span>
            </a>

            <button
              type="button"
              onClick={handleClose}
              aria-label="Close navigation menu"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer border border-white/15"
            >
              <svg
                className="w-5 h-5 fill-none stroke-current"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable Nav Links & Content */}
          <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col justify-between">
            <nav className="flex flex-col gap-3">
              <a
                href="#about"
                onClick={handleClose}
                className="font-serif text-[24px] sm:text-[26px] text-white/95 hover:text-[#94D1A4] py-2 border-b border-white/5 transition-colors flex items-center justify-between"
              >
                <span>About us</span>
                <span className="text-[14px] font-sans text-white/40">01</span>
              </a>

              {/* Mobile Menu Accordion */}
              <div className="border-b border-white/5 pb-2">
                <button
                  type="button"
                  onClick={() => setMobileMenuExpanded(!mobileMenuExpanded)}
                  className="w-full flex items-center justify-between font-serif text-[24px] sm:text-[26px] text-white/95 hover:text-[#94D1A4] py-2 transition-colors cursor-pointer select-none"
                  aria-expanded={mobileMenuExpanded}
                >
                  <div className="flex items-center gap-3">
                    <span>Our Menus</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[14px] font-sans text-white/40">02</span>
                    <div className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-200 ${mobileMenuExpanded ? 'rotate-180 bg-[#1C2D20] text-[#94D1A4]' : 'text-white/70'}`}>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>

                {mobileMenuExpanded && (
                  <div className="mt-2 mb-2 flex flex-col gap-2 pl-2">
                    <a
                      href="/drinks.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleClose}
                      className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white font-sans text-[15px] font-medium transition-all group"
                    >
                      <span className="group-hover:text-[#94D1A4] transition-colors">Food Menu</span>
                      <span className="text-[11px] font-semibold tracking-wider text-[#94D1A4] uppercase">PDF ↗</span>
                    </a>
                    <a
                      href="/drinks.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleClose}
                      className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white font-sans text-[15px] font-medium transition-all group"
                    >
                      <span className="group-hover:text-[#94D1A4] transition-colors">Drinks Menu</span>
                      <span className="text-[11px] font-semibold tracking-wider text-[#94D1A4] uppercase">PDF ↗</span>
                    </a>
                    <a
                      href="/party.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleClose}
                      className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white font-sans text-[15px] font-medium transition-all group"
                    >
                      <span className="group-hover:text-[#94D1A4] transition-colors">Party Packages</span>
                      <span className="text-[11px] font-semibold tracking-wider text-[#94D1A4] uppercase">PDF ↗</span>
                    </a>
                  </div>
                )}
              </div>

              <a
                href="#experience"
                onClick={handleClose}
                className="font-serif text-[24px] sm:text-[26px] text-white/95 hover:text-[#94D1A4] py-2 border-b border-white/5 transition-colors flex items-center justify-between"
              >
                <span>Experience</span>
                <span className="text-[14px] font-sans text-white/40">03</span>
              </a>

              <a
                href="#events"
                onClick={handleClose}
                className="font-serif text-[24px] sm:text-[26px] text-white/95 hover:text-[#94D1A4] py-2 border-b border-white/5 transition-colors flex items-center justify-between"
              >
                <span>What's On</span>
                <span className="text-[14px] font-sans text-white/40">04</span>
              </a>

              <a
                href="#location"
                onClick={handleClose}
                className="font-serif text-[24px] sm:text-[26px] text-white/95 hover:text-[#94D1A4] py-2 border-b border-white/5 transition-colors flex items-center justify-between"
              >
                <span>Location & Hours</span>
                <span className="text-[14px] font-sans text-white/40">05</span>
              </a>
            </nav>

            <div className="mt-8 flex flex-col gap-6">
              {/* CTA Reservation Button */}
              <a
                href="#reservation"
                onClick={handleClose}
                className="w-full flex items-center justify-center gap-2 bg-[#1C2D20] hover:bg-[#132016] text-white border border-[#94D1A4]/40 font-sans font-semibold text-[15px] py-4 px-6 rounded-full transition-all shadow-lg active:scale-[0.98]"
              >
                <span>Reserve a Table</span>
                <span className="text-[#94D1A4]">→</span>
              </a>

              {/* Quick Info & Phone contact */}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-2 text-white/70 text-[12px] font-sans">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#94D1A4] animate-pulse"></span>
                  <span className="text-white/85">Open Daily: 12:00 PM — 11:00 PM</span>
                </div>
                <div className="text-white/60">
                  One Golden Mile · Netaji Nagar, New Delhi
                </div>
                <div className="flex gap-2 text-white/90 font-medium pt-1">
                  <a href="tel:+919599280444" className="hover:text-[#94D1A4] underline">9599280444</a>
                  <span>·</span>
                  <a href="tel:+919599280666" className="hover:text-[#94D1A4] underline">9599280666</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
