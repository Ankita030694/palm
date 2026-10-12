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

  const menuOpen = controlledMenuOpen !== undefined ? controlledMenuOpen : internalMenuOpen;
  const setMenuOpen = controlledSetMenuOpen || setInternalMenuOpen;
  const closeMenu = controlledCloseMenu || (() => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setMobileMenuExpanded(false);
  });

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
      <div className="w-full h-[34px] bg-[#171513] text-white overflow-hidden text-[11px] sm:text-[12px] flex items-center">
        <div className="max-w-[1180px] w-[92%] h-full mx-auto flex items-center justify-between tracking-[0.6px]">
          <span className="hidden md:inline truncate text-white/90">ONE GOLDEN MILE · NETAJI NAGAR, NEW DELHI</span>
          <span className="w-full md:w-auto text-center md:text-right shrink-0 truncate">
            <a href="tel:+919599280444" className="hover:underline">9599280444</a> | <a href="tel:+919599280666" className="hover:underline">9599280666</a> &nbsp; · &nbsp; OPEN DAILY 12PM — 11PM
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

          {/* Centered Navigation Links on Desktop, Full-Screen Menu on Mobile */}
          <nav
            id="navigation"
            className={`${
              menuOpen
                ? 'fixed inset-0 bg-[#171513] text-white z-[150] flex flex-col justify-center items-center gap-6 text-[22px] font-serif p-6 animate-fadeIn overflow-y-auto'
                : 'hidden'
            } lg:flex lg:static lg:bg-transparent lg:text-inherit lg:z-auto lg:flex-row lg:flex-1 lg:justify-center lg:items-center lg:gap-[28px] xl:gap-[36px] lg:text-[15px] lg:font-sans lg:font-semibold`}
          >
            <a
              href="#about"
              onClick={closeMenu}
              className="hover:text-[#94D1A4] lg:hover:text-[#1C2D20] transition-colors"
            >
              About us
            </a>

            {/* Desktop Menu with Dropdown */}
            <div
              className="relative hidden lg:block py-2 group"
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
                    onClick={() => { setDropdownOpen(false); }}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-[14px] font-medium hover:bg-[#F6F5F2] hover:text-[#1C2D20] transition-colors group/item"
                  >
                    <span>Food</span>
                    <span className="text-[11px] text-[#77716A] uppercase font-semibold tracking-wider group-hover/item:text-[#1C2D20]">PDF ↗</span>
                  </a>
                  <a
                    href="/drinks.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => { setDropdownOpen(false); }}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-[14px] font-medium hover:bg-[#F6F5F2] hover:text-[#1C2D20] transition-colors group/item"
                  >
                    <span>Drinks</span>
                    <span className="text-[11px] text-[#77716A] uppercase font-semibold tracking-wider group-hover/item:text-[#1C2D20]">PDF ↗</span>
                  </a>
                  <a
                    href="/party.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => { setDropdownOpen(false); }}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-[14px] font-medium hover:bg-[#F6F5F2] hover:text-[#1C2D20] transition-colors group/item"
                  >
                    <span>Party Packages</span>
                    <span className="text-[11px] text-[#77716A] uppercase font-semibold tracking-wider group-hover/item:text-[#1C2D20]">PDF ↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Menu Item with Accordion Submenu */}
            <div className="lg:hidden w-full flex flex-col items-center">
              <button
                type="button"
                onClick={() => setMobileMenuExpanded(!mobileMenuExpanded)}
                className="inline-flex items-center justify-center gap-2 hover:text-[#94D1A4] transition-colors cursor-pointer text-[22px] font-serif"
              >
                <span>Menu</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mobileMenuExpanded ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobileMenuExpanded && (
                <div className="flex flex-col gap-2 mt-3 w-full max-w-[260px] bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/20 animate-fadeIn">
                  <a
                    href="/drinks.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="flex items-center justify-between px-4 py-2.5 rounded-lg text-[15px] font-sans font-medium text-white hover:bg-white/20 transition-colors"
                  >
                    <span>Food</span>
                    <span className="text-[11px] text-white/75 uppercase tracking-wider">PDF ↗</span>
                  </a>
                  <a
                    href="/drinks.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="flex items-center justify-between px-4 py-2.5 rounded-lg text-[15px] font-sans font-medium text-white hover:bg-white/20 transition-colors"
                  >
                    <span>Drinks</span>
                    <span className="text-[11px] text-white/75 uppercase tracking-wider">PDF ↗</span>
                  </a>
                  <a
                    href="/party.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="flex items-center justify-between px-4 py-2.5 rounded-lg text-[15px] font-sans font-medium text-white hover:bg-white/20 transition-colors"
                  >
                    <span>Party Packages</span>
                    <span className="text-[11px] text-white/75 uppercase tracking-wider">PDF ↗</span>
                  </a>
                </div>
              )}
            </div>

            <a
              href="#experience"
              onClick={closeMenu}
              className="hover:text-[#94D1A4] lg:hover:text-[#1C2D20] transition-colors"
            >
              Experience
            </a>
            <a
              href="#events"
              onClick={closeMenu}
              className="hover:text-[#94D1A4] lg:hover:text-[#1C2D20] transition-colors"
            >
              What's On
            </a>
            <a
              href="#reservation"
              onClick={closeMenu}
              style={{ backgroundColor: '#ffffff', color: '#171513' }}
              className="lg:hidden inline-flex items-center justify-center !text-[#171513] px-7 py-3 rounded-full text-[15px] font-sans font-semibold transition-colors mt-2 shadow-sm"
            >
              Book a table →
            </a>
          </nav>

          {/* Right Action Button (Desktop) & Hamburger (Mobile) */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#reservation"
              onClick={closeMenu}
              style={{ color: '#ffffff' }}
              className="hidden lg:inline-flex items-center justify-center bg-[#1C2D20] hover:bg-[#132016] !text-white px-5 py-2.5 rounded-full text-[14px] font-semibold transition-all hover:scale-105 shadow-sm"
            >
              Book a table →
            </a>

            <button
              type="button"
              id="mobileMenu"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="lg:hidden flex items-center justify-center w-[42px] h-[42px] bg-[#1C2D20] text-white rounded-full text-[18px] cursor-pointer z-[200] border-0 shadow-md"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
