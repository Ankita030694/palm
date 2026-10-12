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

  const menuOpen = controlledMenuOpen !== undefined ? controlledMenuOpen : internalMenuOpen;
  const setMenuOpen = controlledSetMenuOpen || setInternalMenuOpen;
  const closeMenu = controlledCloseMenu || (() => setMenuOpen(false));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* =========================================================
          TOP BAR
      ========================================================= */}
      <div className="top-bar w-full h-[34px] bg-[#171513] text-white">
        <div className="top-bar-inner max-w-[1180px] w-[92%] h-full mx-auto flex items-center justify-between text-[12px] tracking-[0.6px]">
          <span>ONE GOLDEN MILE · NETAJI NAGAR, NEW DELHI</span>
          <span>+91 92892 22302 &nbsp; · &nbsp; OPEN DAILY 12PM — 11PM</span>
        </div>
      </div>

      {/* =========================================================
          HEADER
      ========================================================= */}
      <header
        id="header"
        className={`header absolute left-0 w-full z-[100] transition-all duration-300 ${
          scrolled
            ? 'scrolled fixed top-0 bg-[#FFF9F2]/[0.97] text-[#171513] shadow-[0_5px_30px_rgba(0,0,0,0.08)]'
            : 'top-[34px] text-white'
        }`}
      >
        <div className="header-inner max-w-8xl 2xl:max-w-8xl w-[94%] h-[88px] max-lg:h-[80px] mx-auto flex items-center justify-between">
          {/* Small Logo */}
          <a href="#home" className="logo w-[150px] max-lg:w-[130px] h-auto block flex-shrink-0">
            <img
              src={scrolled ? "/logo-dark.png" : "/logo-light.png"}
              alt="Palm Restaurant"
              className="logo-img block w-full h-auto object-contain"
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
            className={`navigation ${
              menuOpen ? 'mobile-open flex' : 'hidden'
            } lg:flex lg:flex-1 lg:justify-center items-center gap-[28px] xl:gap-[36px] text-[15px] font-semibold`}
          >
            <a href="#about" onClick={closeMenu} className="hover:text-[#E51B23] transition-colors">
              About us
            </a>
            <a href="#menu" onClick={closeMenu} className="hover:text-[#E51B23] transition-colors">
              Menu
            </a>
            <a href="#experience" onClick={closeMenu} className="hover:text-[#E51B23] transition-colors">
              Experience
            </a>
            <a href="#events" onClick={closeMenu} className="hover:text-[#E51B23] transition-colors">
              What's On
            </a>
            <a
              href="#reservation"
              onClick={closeMenu}
              className="lg:hidden nav-button inline-flex items-center justify-center bg-[#E51B23] text-white px-5 py-3 rounded-full transition-colors mt-6"
            >
              Book a table
            </a>
          </nav>

          {/* Right Action Button (Desktop) & Hamburger (Mobile) */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <a
              href="#reservation"
              onClick={closeMenu}
              className="hidden lg:inline-flex nav-button items-center justify-center bg-[#E51B23] hover:bg-[#B90F16] text-white px-5 py-2.5 rounded-full text-[14px] font-semibold transition-all hover:scale-105"
            >
              Book a table →
            </a>

            <button
              type="button"
              id="mobileMenu"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="mobile-menu lg:hidden flex items-center justify-center w-[40px] h-[40px] bg-[#E51B23] text-white rounded-full text-[20px] cursor-pointer z-[200] border-0"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
