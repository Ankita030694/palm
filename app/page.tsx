'use client';
import { useState } from 'react';
import Navbar from './component/nav';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reservationSent, setReservationSent] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  function submitReservation(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      'Hello Palm, I would like to request a table.',
      `Name: ${data.get('name')}`,
      `Mobile: ${data.get('phone')}`,
      `Guests: ${data.get('guests')}`,
      `Date: ${data.get('date')}`,
      `Time: ${data.get('time')}`,
      data.get('notes') ? `Notes: ${data.get('notes')}` : ''
    ].filter(Boolean).join('\n');
    setReservationSent(true);
    window.open(`https://wa.me/919289222302?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className={`min-h-screen bg-[#FFF9F2] text-[#292622] font-sans ${menuOpen ? 'menu-open overflow-hidden' : ''}`}>

      {/* Navbar Component */}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} closeMenu={closeMenu} />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section id="home" className="hero relative h-[100dvh] min-h-[600px] flex items-center overflow-hidden bg-[#171513] text-white">
        <div
          className="hero-image absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url("/heroimgm.svg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <img src="/heroimgm.svg" alt="Palm Restaurant" className="w-full h-full object-cover" />
        </div>

        <div className="hero-overlay absolute inset-0 bg-gradient-to-r from-[#140F0C]/90 via-[#140F0C]/70 to-[#140F0C]/20 max-lg:from-[#140F0C]/95 max-lg:to-[#140F0C]/65" />

        <div className="hero-content relative z-[2] max-w-[1180px] w-[92%] mx-auto pt-[90px] max-lg:pt-[70px]">
          <span className="eyebrow text-[#ff555b] text-[13px] font-medium tracking-[2px] uppercase block">
            WELCOME TO PALM · NEW DELHI
          </span>

          <h1 className="font-serif !text-[clamp(42px,5.5vw,82px)] font-normal leading-[0.92] tracking-[-2px] lg:tracking-[-3px] mt-4 max-w-[680px]">
            For the <em className="text-[#ff3038] not-italic">pleasure</em><br />
            of a good table.
          </h1>

          <p className="hero-text text-white/75 !text-[17px] max-lg:!text-[15px] leading-[1.8] max-w-[440px] mt-6 max-lg:mt-5">
            Palm brings people together over seasonal plates,
            bright drinks and the sort of dinner that keeps
            unfolding long after the first course.
          </p>

          <div className="hero-buttons flex items-center gap-[25px] mt-[35px] max-lg:flex-col max-lg:items-start max-lg:gap-4">
            <a
              href="#reservation"
              onClick={closeMenu}
              className="red-button inline-flex items-center justify-center gap-2 bg-[#E51B23] hover:bg-[#B90F16] text-white min-h-[48px] px-7 py-4 rounded-full text-[14px] font-semibold transition-all duration-300 hover:-translate-y-0.5"
            >
              Reserve your table →
            </a>
            <a
              href="#menu"
              onClick={closeMenu}
              className="hero-menu-link text-white text-[15px] border-b border-white pb-1 hover:text-[#ff555b] hover:border-[#ff555b] transition-colors"
            >
              Explore the menu
            </a>
          </div>
        </div>

        {/* Hero booking card (Desktop) */}
        <div className="hero-booking absolute right-[5%] !bottom-[160px] xl:!bottom-[180px] z-[10] w-[310px] bg-white text-[#171513] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.25)] hidden lg:block">
          <small className="block text-[#E51B23] text-[11px] tracking-[2px] font-bold">
            YOUR TABLE AWAITS
          </small>
          <strong className="block font-serif font-normal text-[30px] leading-[1.05] my-3">
            Make an evening<br />
            <em className="text-[#E51B23] not-italic">of it.</em>
          </strong>
          <div className="booking-row flex justify-between border-b border-[#E7DED3] py-3 text-[12px]">
            <span>Guests</span>
            <span className="text-[#77716A]">2 Guests</span>
          </div>
          <div className="booking-row flex justify-between border-b border-[#E7DED3] py-3 text-[12px]">
            <span>Date</span>
            <span className="text-[#77716A]">Select date</span>
          </div>
          <div className="booking-row flex justify-between border-b border-[#E7DED3] py-3 text-[12px]">
            <span>Time</span>
            <span className="text-[#77716A]">7:30 PM</span>
          </div>
          <a
            href="#reservation"
            onClick={closeMenu}
            className="booking-link block bg-[#E51B23] hover:bg-[#B90F16] text-white text-center mt-5 p-3 text-[12px] font-semibold transition-colors"
          >
            BOOK YOUR TABLE →
          </a>
        </div>
      </section>

      {/* =========================================================
          FEATURES
      ========================================================= */}
      <section className="features bg-[#FFF9F2] border-b border-[#E7DED3]">
        <div className="container max-w-[1180px] w-[92%] mx-auto features-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="feature p-[30px_25px] max-lg:p-6 border-b sm:border-r border-[#E7DED3] lg:border-b-0">
            <div className="feature-icon text-[#E51B23] text-[22px] mb-2.5">✦</div>
            <h3 className="text-[15px] font-bold">Seasonal Plates</h3>
            <p className="text-[#77716A] text-[14px] leading-[1.65] mt-1">
              Fresh ingredients and thoughtful cooking.
            </p>
          </div>
          <div className="feature p-[30px_25px] max-lg:p-6 border-b lg:border-r lg:border-b-0 border-[#E7DED3]">
            <div className="feature-icon text-[#E51B23] text-[22px] mb-2.5">♡</div>
            <h3 className="text-[15px] font-bold">Warm Service</h3>
            <p className="text-[#77716A] text-[14px] leading-[1.65] mt-1">
              Easy hospitality from the moment you arrive.
            </p>
          </div>
          <div className="feature p-[30px_25px] max-lg:p-6 border-b sm:border-r border-[#E7DED3] sm:border-b-0">
            <div className="feature-icon text-[#E51B23] text-[22px] mb-2.5">—</div>
            <h3 className="text-[15px] font-bold">Private Dining</h3>
            <p className="text-[#77716A] text-[14px] leading-[1.65] mt-1">
              Spaces made for celebrations and gatherings.
            </p>
          </div>
          <div className="feature p-[30px_25px] max-lg:p-6">
            <div className="feature-icon text-[#E51B23] text-[22px] mb-2.5">◌</div>
            <h3 className="text-[15px] font-bold">Open Late</h3>
            <p className="text-[#77716A] text-[14px] leading-[1.65] mt-1">
              Come for dinner. Stay for another drink.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}
      <section id="about" className="about py-[120px] max-lg:py-20">
        <div className="container max-w-[1180px] w-[92%] mx-auto about-grid grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[100px] items-center">
          <div className="about-images relative pr-0 lg:pr-[60px]">
            <img
              src="/photos/DSC09996.JPG"
              alt="Palm dining"
              loading="lazy"
              className="about-main w-full lg:w-[90%] h-[420px] lg:h-[530px] object-cover"
            />
            <img
              src="/photos/DSC00085.JPG"
              alt="Palm food"
              loading="lazy"
              className="about-small absolute right-0 bottom-0 w-[135px] lg:w-[190px] h-[155px] lg:h-[210px] object-cover border-[6px] lg:border-[9px] border-[#FFF9F2]"
            />
            <div className="about-circle absolute right-2.5 lg:right-[30px] top-5 lg:top-[30px] w-[90px] lg:w-[105px] h-[90px] lg:h-[105px] rounded-full bg-[#E51B23] text-white flex items-center justify-center text-center text-[9px] lg:text-[10px] font-bold tracking-[1px] leading-tight">
              A LITTLE<br />MORE<br />PALM
            </div>
          </div>

          <div className="about-content">
            <span className="eyebrow text-[#E51B23] text-[13px] max-lg:text-[11px] font-bold tracking-[2px] uppercase block">
              OUR POINT OF VIEW
            </span>
            <h2 className="section-title font-serif font-normal text-[clamp(46px,5vw,76px)] leading-[0.98] tracking-[-2px] mt-4">
              Come hungry.<br />
              <em className="text-[#E51B23] not-italic">Leave happier.</em>
            </h2>
            <p className="section-description text-[#77716A] text-[19px] max-lg:text-[16px] leading-[1.85] mt-6">
              We believe a restaurant should make every ordinary
              life feel like an occasion. At Palm, you can drop
              in for a long lunch, settle into dinner, or linger
              with your favourite people.
            </p>
            <p className="section-description text-[#77716A] text-[19px] max-lg:text-[16px] leading-[1.85] mt-5">
              Our kitchen keeps things generous and ingredient-led.
              The rest is a little music, a warm room and something
              good in your glass.
            </p>
            <a
              href="#reservation"
              onClick={closeMenu}
              className="underline-link inline-block text-[14px] font-semibold border-b border-current pb-1 mt-7 hover:text-[#E51B23] transition-colors"
            >
              Make a reservation →
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="stats bg-[#E51B23] text-white py-11 max-lg:py-[38px]">
        <div className="container max-w-[1180px] w-[92%] mx-auto stats-grid grid grid-cols-2 lg:grid-cols-4 gap-y-8">
          <div className="stat text-center border-r border-white/25 max-lg:border-r-0">
            <strong className="block font-serif text-[47px] max-lg:text-[40px] font-normal leading-tight">2026</strong>
            <small className="block text-[10px] tracking-[2px] mt-1 text-white/80">ESTABLISHED</small>
          </div>
          <div className="stat text-center lg:border-r border-white/25">
            <strong className="block font-serif text-[47px] max-lg:text-[40px] font-normal leading-tight">
              4.9<span className="text-[27px]">★</span>
            </strong>
            <small className="block text-[10px] tracking-[2px] mt-1 text-white/80">GUEST RATING</small>
          </div>
          <div className="stat text-center border-r border-white/25 max-lg:border-r-0">
            <strong className="block font-serif text-[47px] max-lg:text-[40px] font-normal leading-tight">7</strong>
            <small className="block text-[10px] tracking-[2px] mt-1 text-white/80">DAYS A WEEK</small>
          </div>
          <div className="stat text-center">
            <strong className="block font-serif text-[47px] max-lg:text-[40px] font-normal leading-tight">∞</strong>
            <small className="block text-[10px] tracking-[2px] mt-1 text-white/80">GOOD TIMES</small>
          </div>
        </div>
      </section>

      {/* =========================================================
          EXPERIENCE
      ========================================================= */}
      <section id="experience" className="experience bg-[#171513] text-white py-[120px] max-lg:py-20">
        <div className="container max-w-[1180px] w-[92%] mx-auto">
          <div className="experience-head flex flex-col lg:flex-row justify-between lg:items-end mb-[55px] max-lg:mb-10 gap-5">
            <div>
              <span className="eyebrow text-[#E51B23] text-[13px] font-bold tracking-[2px] uppercase block">
                THE PALM EXPERIENCE
              </span>
              <h2 className="section-title font-serif font-normal text-[clamp(46px,5vw,76px)] leading-[0.98] tracking-[-2px] mt-3">
                More than<br />
                <em className="text-[#E51B23] not-italic">a meal.</em>
              </h2>
            </div>
            <p className="section-description text-white/60 text-[19px] max-lg:text-[16px] leading-[1.8] max-w-[350px]">
              From relaxed lunches to late-night celebrations,
              Palm is made for moments worth staying for.
            </p>
          </div>

          <div className="experience-grid grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1fr] gap-3.5">
            <article className="experience-card relative h-[480px] max-lg:h-[400px] overflow-hidden group">
              <img
                src="/photos/DSC04826.JPG"
                alt="Palm dining experience"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="experience-content absolute z-[2] left-[30px] right-[30px] bottom-[30px] max-lg:left-[22px] max-lg:right-[22px] max-lg:bottom-[22px]">
                <small className="text-[#ff4148] text-[11px] tracking-[2px] block">01 · DINING</small>
                <h3 className="font-serif text-[33px] max-lg:text-[31px] font-normal my-2">Everyday Dining</h3>
                <p className="text-white/70 text-[14px] leading-[1.7]">
                  Come for lunch, dinner or something good in your glass.
                </p>
                <a href="#reservation" onClick={closeMenu} className="inline-block text-[14px] border-b border-white pb-1 mt-4 hover:text-[#ff4148] hover:border-[#ff4148] transition-colors">
                  Reserve a table →
                </a>
              </div>
            </article>

            <article className="experience-card relative h-[480px] max-lg:h-[400px] overflow-hidden group">
              <img
                src="/photos/DSC04832.JPG"
                alt="Private dining"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="experience-content absolute z-[2] left-[30px] right-[30px] bottom-[30px] max-lg:left-[22px] max-lg:right-[22px] max-lg:bottom-[22px]">
                <small className="text-[#ff4148] text-[11px] tracking-[2px] block">02 · PRIVATE DINING</small>
                <h3 className="font-serif text-[33px] max-lg:text-[31px] font-normal my-2">Private Tables</h3>
                <p className="text-white/70 text-[14px] leading-[1.7]">
                  An intimate setting for special evenings.
                </p>
                <a href="#reservation" onClick={closeMenu} className="inline-block text-[14px] border-b border-white pb-1 mt-4 hover:text-[#ff4148] hover:border-[#ff4148] transition-colors">
                  Enquire now →
                </a>
              </div>
            </article>

            <article className="experience-card relative h-[480px] max-lg:h-[400px] overflow-hidden group">
              <img
                src="/photos/DSC00103.JPG"
                alt="Restaurant celebration"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="experience-content absolute z-[2] left-[30px] right-[30px] bottom-[30px] max-lg:left-[22px] max-lg:right-[22px] max-lg:bottom-[22px]">
                <small className="text-[#ff4148] text-[11px] tracking-[2px] block">03 · CELEBRATIONS</small>
                <h3 className="font-serif text-[33px] max-lg:text-[31px] font-normal my-2">Good Times</h3>
                <p className="text-white/70 text-[14px] leading-[1.7]">
                  Birthdays, dinners and evenings to remember.
                </p>
                <a href="#reservation" onClick={closeMenu} className="inline-block text-[14px] border-b border-white pb-1 mt-4 hover:text-[#ff4148] hover:border-[#ff4148] transition-colors">
                  Plan your evening →
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          MENU
      ========================================================= */}
      <section id="menu" className="menu py-[125px] max-lg:py-20 bg-[#F4EDE3]">
        <div className="container max-w-[1180px] w-[92%] mx-auto">
          <div className="menu-head flex flex-col lg:flex-row justify-between lg:items-end mb-11 max-lg:mb-9 gap-5">
            <div>
              <span className="eyebrow text-[#E51B23] text-[13px] font-bold tracking-[2px] uppercase block">
                FROM OUR KITCHEN
              </span>
              <h2 className="section-title font-serif font-normal text-[clamp(46px,5vw,76px)] leading-[0.98] tracking-[-2px] mt-3">
                Good food,<br />
                <em className="text-[#E51B23] not-italic">simply done.</em>
              </h2>
            </div>
            <p className="section-description text-[#77716A] text-[19px] max-lg:text-[16px] leading-[1.8] max-w-[350px]">
              Plates made for passing around, sharing generously and staying as long as you like.
            </p>
          </div>

          <div className="menu-tabs flex justify-center max-lg:justify-start gap-2 mb-11 overflow-x-auto pb-2 scrollbar-none flex-nowrap lg:flex-wrap">
            {[
              { id: 'all', label: 'All' },
              { id: 'small', label: 'Small Plates' },
              { id: 'mains', label: 'Mains' },
              { id: 'grill', label: 'Grill' },
              { id: 'drinks', label: 'Drinks' },
              { id: 'desserts', label: 'Desserts' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`menu-tab flex-shrink-0 px-5 py-2.5 rounded-full text-[13px] font-medium border border-[#E7DED3] transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'active bg-[#E51B23] text-white border-[#E51B23]'
                    : 'bg-transparent text-[#292622] hover:bg-[#E51B23] hover:text-white hover:border-[#E51B23]'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="food-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <article className="food-card bg-white p-[7px] max-lg:p-1.5 shadow-sm group">
              <div className="food-image relative h-[270px] max-lg:h-[290px] overflow-hidden">
                <img
                  src="/photos/DSC00077.JPG"
                  alt="Palm Burrata"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="food-number absolute left-3 top-3 w-[30px] h-[30px] rounded-full bg-white text-[#E51B23] flex items-center justify-center text-[11px] font-bold">
                  01
                </span>
              </div>
              <div className="food-content p-[20px_12px_22px]">
                <div className="flex justify-between items-baseline">
                  <span className="food-name font-serif text-[27px]">Palm Burrata</span>
                  <span className="food-price text-[#E51B23] font-serif text-[19px]">₹1,050</span>
                </div>
                <p className="food-description text-[#77716A] text-[14px] leading-[1.6] mt-1.5">
                  Heirloom tomato, basil oil & sourdough
                </p>
              </div>
            </article>

            <article className="food-card bg-white p-[7px] max-lg:p-1.5 shadow-sm group">
              <div className="food-image relative h-[270px] max-lg:h-[290px] overflow-hidden">
                <img
                  src="/photos/DSC00063.JPG"
                  alt="Charred market fish"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="food-number absolute left-3 top-3 w-[30px] h-[30px] rounded-full bg-white text-[#E51B23] flex items-center justify-center text-[11px] font-bold">
                  02
                </span>
              </div>
              <div className="food-content p-[20px_12px_22px]">
                <div className="flex justify-between items-baseline">
                  <span className="food-name font-serif text-[27px]">Charred Market Fish</span>
                  <span className="food-price text-[#E51B23] font-serif text-[19px]">₹1,450</span>
                </div>
                <p className="food-description text-[#77716A] text-[14px] leading-[1.6] mt-1.5">
                  Seasonal greens, citrus & brown butter
                </p>
              </div>
            </article>

            <article className="food-card bg-white p-[7px] max-lg:p-1.5 shadow-sm group">
              <div className="food-image relative h-[270px] max-lg:h-[290px] overflow-hidden">
                <img
                  src="/photos/DSC00088.JPG"
                  alt="Harissa chicken"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="food-number absolute left-3 top-3 w-[30px] h-[30px] rounded-full bg-white text-[#E51B23] flex items-center justify-center text-[11px] font-bold">
                  03
                </span>
              </div>
              <div className="food-content p-[20px_12px_22px]">
                <div className="flex justify-between items-baseline">
                  <span className="food-name font-serif text-[27px]">Harissa Chicken</span>
                  <span className="food-price text-[#E51B23] font-serif text-[19px]">₹1,150</span>
                </div>
                <p className="food-description text-[#77716A] text-[14px] leading-[1.6] mt-1.5">
                  Labneh, smoked chilli & summer herbs
                </p>
              </div>
            </article>

            <article className="food-card bg-white p-[7px] max-lg:p-1.5 shadow-sm group">
              <div className="food-image relative h-[270px] max-lg:h-[290px] overflow-hidden">
                <img
                  src="/photos/DSC00089.JPG"
                  alt="Seasonal pasta"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="food-number absolute left-3 top-3 w-[30px] h-[30px] rounded-full bg-white text-[#E51B23] flex items-center justify-center text-[11px] font-bold">
                  04
                </span>
              </div>
              <div className="food-content p-[20px_12px_22px]">
                <div className="flex justify-between items-baseline">
                  <span className="food-name font-serif text-[27px]">Seasonal Pasta</span>
                  <span className="food-price text-[#E51B23] font-serif text-[19px]">₹1,250</span>
                </div>
                <p className="food-description text-[#77716A] text-[14px] leading-[1.6] mt-1.5">
                  Fresh herbs, parmesan & seasonal vegetables
                </p>
              </div>
            </article>

            <article className="food-card bg-white p-[7px] max-lg:p-1.5 shadow-sm group">
              <div className="food-image relative h-[270px] max-lg:h-[290px] overflow-hidden">
                <img
                  src="/photos/DSC00062.JPG"
                  alt="Palm grill"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="food-number absolute left-3 top-3 w-[30px] h-[30px] rounded-full bg-white text-[#E51B23] flex items-center justify-center text-[11px] font-bold">
                  05
                </span>
              </div>
              <div className="food-content p-[20px_12px_22px]">
                <div className="flex justify-between items-baseline">
                  <span className="food-name font-serif text-[27px]">Palm Grill</span>
                  <span className="food-price text-[#E51B23] font-serif text-[19px]">₹1,650</span>
                </div>
                <p className="food-description text-[#77716A] text-[14px] leading-[1.6] mt-1.5">
                  Charred vegetables, herbs & house sauce
                </p>
              </div>
            </article>

            <article className="food-card bg-white p-[7px] max-lg:p-1.5 shadow-sm group">
              <div className="food-image relative h-[270px] max-lg:h-[290px] overflow-hidden">
                <img
                  src="/photos/DSC00076.JPG"
                  alt="Palm dessert"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="food-number absolute left-3 top-3 w-[30px] h-[30px] rounded-full bg-white text-[#E51B23] flex items-center justify-center text-[11px] font-bold">
                  06
                </span>
              </div>
              <div className="food-content p-[20px_12px_22px]">
                <div className="flex justify-between items-baseline">
                  <span className="food-name font-serif text-[27px]">Palm Dessert</span>
                  <span className="food-price text-[#E51B23] font-serif text-[19px]">₹650</span>
                </div>
                <p className="food-description text-[#77716A] text-[14px] leading-[1.6] mt-1.5">
                  Seasonal fruit, cream & toasted crumble
                </p>
              </div>
            </article>
          </div>

          <div className="menu-bottom text-center mt-11">
            <a
              href="#reservation"
              onClick={closeMenu}
              className="underline-link inline-block text-[14px] font-semibold border-b border-current pb-1 hover:text-[#E51B23] transition-colors"
            >
              View the full Palm menu →
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          SPECIAL OFFER
      ========================================================= */}
      <section className="special grid grid-cols-1 lg:grid-cols-2 bg-[#E51B23] text-white">
        <div className="special-image min-h-[400px] lg:min-h-[570px]">
          <img
            src="/photos/DSC00116.JPG"
            alt="Special Palm dinner"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="special-content p-10 lg:p-20 flex flex-col justify-center">
          <span className="eyebrow text-white text-[13px] font-bold tracking-[2px] uppercase block">
            THIS WEEK AT PALM
          </span>
          <h2 className="font-serif font-normal text-[clamp(46px,5vw,74px)] leading-[0.95] mt-4">
            An evening<br />
            <em className="text-[#171513] not-italic">worth remembering.</em>
          </h2>
          <p className="text-white/85 text-[16px] leading-[1.8] max-w-[440px] mt-6">
            Join us for a seasonal sharing menu,
            carefully selected drinks and an evening
            made for taking your time.
          </p>

          <div className="special-details flex gap-9 mt-9">
            <div className="special-detail">
              <strong className="block font-serif text-[29px] font-normal leading-tight">₹2,950</strong>
              <span className="block text-[10px] tracking-[1px] mt-1 text-white/80">PER PERSON</span>
            </div>
            <div className="special-detail">
              <strong className="block font-serif text-[29px] font-normal leading-tight">5</strong>
              <span className="block text-[10px] tracking-[1px] mt-1 text-white/80">COURSES</span>
            </div>
            <div className="special-detail">
              <strong className="block font-serif text-[29px] font-normal leading-tight">FRI–SUN</strong>
              <span className="block text-[10px] tracking-[1px] mt-1 text-white/80">EVENINGS</span>
            </div>
          </div>

          <a
            href="#reservation"
            onClick={closeMenu}
            className="dark-button inline-flex items-center justify-center bg-[#171513] hover:bg-white hover:text-[#171513] text-white min-h-[48px] px-7 py-3.5 rounded-full text-[14px] font-semibold transition-all duration-300 w-max mt-9"
          >
            Reserve this experience →
          </a>
        </div>
      </section>

      {/* =========================================================
          EVENTS
      ========================================================= */}
      <section id="events" className="events py-[120px] max-lg:py-20">
        <div className="container max-w-[1180px] w-[92%] mx-auto events-layout grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-[50px] lg:gap-[100px]">
          <div>
            <span className="eyebrow text-[#E51B23] text-[13px] font-bold tracking-[2px] uppercase block">
              WHAT'S ON
            </span>
            <h2 className="section-title font-serif font-normal text-[clamp(46px,5vw,76px)] leading-[0.98] tracking-[-2px] mt-3">
              Come back<br />
              <em className="text-[#E51B23] not-italic">for something new.</em>
            </h2>
            <p className="section-description text-[#77716A] text-[19px] max-lg:text-[16px] leading-[1.8] mt-6">
              Seasonal dinners, special menus and occasions worth putting in your calendar.
            </p>
          </div>

          <div className="event-list border-t border-[#E7DED3]">
            <div className="event-row grid grid-cols-[80px_1fr_auto] max-lg:grid-cols-[58px_1fr] gap-6 max-lg:gap-4 items-center py-7 border-b border-[#E7DED3]">
              <div className="event-date text-center">
                <small className="block text-[10px] tracking-[1px] text-[#77716A]">AUG</small>
                <strong className="block font-serif text-[41px] max-lg:text-[37px] font-normal text-[#E51B23] leading-none">29</strong>
              </div>
              <div className="event-info">
                <small className="text-[#E51B23] text-[10px] tracking-[1.5px] font-bold block">FRIDAY · DINNER</small>
                <h3 className="font-serif text-[29px] max-lg:text-[25px] font-normal mt-1 leading-tight">Friday at Palm</h3>
                <p className="text-[#77716A] text-[14px] max-lg:text-[13px] leading-[1.6] mt-1">Seasonal plates, cocktails and good company.</p>
              </div>
              <a href="#reservation" onClick={closeMenu} className="event-book text-[14px] border-b border-current pb-1 max-lg:col-start-2 max-lg:justify-self-start hover:text-[#E51B23] transition-colors">
                Reserve →
              </a>
            </div>

            <div className="event-row grid grid-cols-[80px_1fr_auto] max-lg:grid-cols-[58px_1fr] gap-6 max-lg:gap-4 items-center py-7 border-b border-[#E7DED3]">
              <div className="event-date text-center">
                <small className="block text-[10px] tracking-[1px] text-[#77716A]">AUG</small>
                <strong className="block font-serif text-[41px] max-lg:text-[37px] font-normal text-[#E51B23] leading-none">30</strong>
              </div>
              <div className="event-info">
                <small className="text-[#E51B23] text-[10px] tracking-[1.5px] font-bold block">SATURDAY · SPECIAL MENU</small>
                <h3 className="font-serif text-[29px] max-lg:text-[25px] font-normal mt-1 leading-tight">The Palm Table</h3>
                <p className="text-[#77716A] text-[14px] max-lg:text-[13px] leading-[1.6] mt-1">A special sharing menu for the weekend.</p>
              </div>
              <a href="#reservation" onClick={closeMenu} className="event-book text-[14px] border-b border-current pb-1 max-lg:col-start-2 max-lg:justify-self-start hover:text-[#E51B23] transition-colors">
                Reserve →
              </a>
            </div>

            <div className="event-row grid grid-cols-[80px_1fr_auto] max-lg:grid-cols-[58px_1fr] gap-6 max-lg:gap-4 items-center py-7 border-b border-[#E7DED3]">
              <div className="event-date text-center">
                <small className="block text-[10px] tracking-[1px] text-[#77716A]">AUG</small>
                <strong className="block font-serif text-[41px] max-lg:text-[37px] font-normal text-[#E51B23] leading-none">31</strong>
              </div>
              <div className="event-info">
                <small className="text-[#E51B23] text-[10px] tracking-[1.5px] font-bold block">SUNDAY · LONG LUNCH</small>
                <h3 className="font-serif text-[29px] max-lg:text-[25px] font-normal mt-1 leading-tight">Sunday at Palm</h3>
                <p className="text-[#77716A] text-[14px] max-lg:text-[13px] leading-[1.6] mt-1">Order generously. Stay as long as you like.</p>
              </div>
              <a href="#reservation" onClick={closeMenu} className="event-book text-[14px] border-b border-current pb-1 max-lg:col-start-2 max-lg:justify-self-start hover:text-[#E51B23] transition-colors">
                Reserve →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          KITCHEN
      ========================================================= */}
      <section className="kitchen grid grid-cols-1 lg:grid-cols-2 bg-[#F4EDE3]">
        <div className="kitchen-image relative min-h-[430px] lg:min-h-[600px]">
          <img
            src="/photos/DSC04833.JPG"
            alt="Palm chef"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="kitchen-badge absolute right-5 lg:-right-[50px] bottom-[-45px] lg:top-1/2 lg:-translate-y-1/2 w-[95px] lg:w-[110px] h-[95px] lg:h-[110px] rounded-full bg-[#E51B23] text-white flex items-center justify-center text-center text-[10px] lg:text-[11px] font-bold tracking-[1px] leading-tight z-[3]">
            FROM<br />THE<br />KITCHEN
          </div>
        </div>

        <div className="kitchen-content p-10 lg:p-[90px] flex flex-col justify-center">
          <span className="eyebrow text-[#E51B23] text-[13px] font-bold tracking-[2px] uppercase block">
            THE PEOPLE BEHIND PALM
          </span>
          <h2 className="section-title font-serif font-normal text-[clamp(46px,5vw,76px)] leading-[0.98] tracking-[-2px] mt-3">
            Simple food.<br />
            <em className="text-[#E51B23] not-italic">Serious attention.</em>
          </h2>
          <p className="text-[#77716A] text-[19px] max-lg:text-[16px] leading-[1.85] max-w-[450px] mt-7">
            Our kitchen is built around good ingredients,
            confident cooking and food that doesn't need
            to shout to be memorable.
          </p>

          <div className="kitchen-points grid grid-cols-3 gap-3.5 lg:gap-5 mt-10">
            <div className="kitchen-point">
              <strong className="block text-[#E51B23] font-serif text-[30px] max-lg:text-[27px] font-normal leading-none">01</strong>
              <span className="block text-[10px] tracking-[1px] text-[#292622] mt-1.5 font-medium">FRESH INGREDIENTS</span>
            </div>
            <div className="kitchen-point">
              <strong className="block text-[#E51B23] font-serif text-[30px] max-lg:text-[27px] font-normal leading-none">02</strong>
              <span className="block text-[10px] tracking-[1px] text-[#292622] mt-1.5 font-medium">SEASONAL MENUS</span>
            </div>
            <div className="kitchen-point">
              <strong className="block text-[#E51B23] font-serif text-[30px] max-lg:text-[27px] font-normal leading-none">03</strong>
              <span className="block text-[10px] tracking-[1px] text-[#292622] mt-1.5 font-medium">MADE TO SHARE</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          GALLERY
      ========================================================= */}
      <section id="gallery" className="gallery pt-[120px] max-lg:pt-20">
        <div className="gallery-head max-w-[1180px] w-[92%] mx-auto mb-12 flex flex-col sm:flex-row justify-between sm:items-end gap-4">
          <div>
            <span className="eyebrow text-[#E51B23] text-[13px] font-bold tracking-[2px] uppercase block">
              THE PALM MOOD
            </span>
            <h2 className="section-title font-serif font-normal text-[clamp(46px,5vw,76px)] leading-[0.98] tracking-[-2px] mt-3">
              Made for<br />
              <em className="text-[#E51B23] not-italic">good times.</em>
            </h2>
          </div>
          <p className="text-[#77716A] text-[15px] max-w-[330px]">
            Bring your people. We'll take care of the rest.
          </p>
        </div>

        <div className="gallery-grid grid grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.2fr] h-[450px] max-lg:h-auto gap-1.5">
          <div className="gallery-item overflow-hidden h-[220px] lg:h-full group">
            <img src="/photos/DSC04827.JPG" alt="Palm meal" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="gallery-item overflow-hidden h-[220px] lg:h-full group">
            <img src="/photos/DSC04898.JPG" alt="Restaurant table" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="gallery-item overflow-hidden h-[220px] lg:h-full group">
            <img src="/photos/DSC09964.JPG" alt="Pasta" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="gallery-item overflow-hidden h-[220px] lg:h-full group">
            <img src="/photos/DSC09993.JPG" alt="Dining room" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </section>

      {/* =========================================================
          REVIEWS
      ========================================================= */}
      <section className="reviews py-[120px] max-lg:py-20 bg-[#F4EDE3]">
        <div className="container max-w-[1180px] w-[92%] mx-auto">
          <div className="reviews-head text-center">
            <span className="eyebrow text-[#E51B23] text-[13px] font-bold tracking-[2px] uppercase block">
              FROM OUR GUESTS
            </span>
            <h2 className="section-title font-serif font-normal text-[clamp(46px,5vw,76px)] leading-[0.98] tracking-[-2px] mt-3">
              Don't just take<br />
              <em className="text-[#E51B23] not-italic">our word for it.</em>
            </h2>
            <div className="rating text-[#E51B23] text-[19px] tracking-[4px] mt-5">
              ★★★★★
              <span className="rating-number block font-serif text-[22px] text-[#171513] tracking-normal mt-1">
                4.9 / 5
              </span>
            </div>
          </div>

          <div className="review-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
            <article className="review-card bg-white p-10 min-h-[300px] flex flex-col shadow-sm">
              <div className="review-stars text-[#E51B23] text-[13px] tracking-[3px]">★★★★★</div>
              <blockquote className="font-serif text-[24px] leading-[1.5] my-7">
                “Beautiful setting, wonderful food and genuinely warm service. Palm is the kind of place you want to stay for hours.”
              </blockquote>
              <div className="review-author mt-auto text-[12px] font-bold tracking-[1px] text-[#77716A]">
                — VERIFIED GUEST
              </div>
            </article>

            <article className="review-card bg-white p-10 min-h-[300px] flex flex-col shadow-sm">
              <div className="review-stars text-[#E51B23] text-[13px] tracking-[3px]">★★★★★</div>
              <blockquote className="font-serif text-[24px] leading-[1.5] my-7">
                “Every dish felt thoughtful without being complicated. The atmosphere made the entire evening feel special.”
              </blockquote>
              <div className="review-author mt-auto text-[12px] font-bold tracking-[1px] text-[#77716A]">
                — VERIFIED GUEST
              </div>
            </article>

            <article className="review-card bg-white p-10 min-h-[300px] flex flex-col shadow-sm">
              <div className="review-stars text-[#E51B23] text-[13px] tracking-[3px]">★★★★★</div>
              <blockquote className="font-serif text-[24px] leading-[1.5] my-7">
                “A beautiful place for dinner with friends. Great food, lovely service and a room that makes you want to linger.”
              </blockquote>
              <div className="review-author mt-auto text-[12px] font-bold tracking-[1px] text-[#77716A]">
                — VERIFIED GUEST
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          RESERVATION
      ========================================================= */}
      <section id="reservation" className="reservation bg-[#171513] text-white py-[110px] max-lg:py-20">
        <div className="container max-w-[1180px] w-[92%] mx-auto reservation-grid grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-[60px] lg:gap-[100px] items-center">
          <div className="reservation-copy">
            <span className="eyebrow text-[#E51B23] text-[13px] font-bold tracking-[2px] uppercase block">
              YOUR TABLE AWAITS
            </span>
            <h2 className="section-title font-serif font-normal text-[clamp(46px,5vw,76px)] leading-[0.98] tracking-[-2px] mt-3 text-white">
              Make an<br />
              <em className="text-[#E51B23] not-italic">evening of it.</em>
            </h2>
            <p className="text-white/65 text-[16px] leading-[1.8] max-w-[380px] mt-6">
              Tell us when you're coming and we'll take care of the rest.
            </p>

            <div className="reservation-info mt-8 space-y-4">
              <div>
                <strong className="block text-[#ff4b52] text-[10px] tracking-[1.5px] uppercase">OPEN DAILY</strong>
                <span className="text-[14px]">12 PM — 11 PM</span>
              </div>
              <div>
                <strong className="block text-[#ff4b52] text-[10px] tracking-[1.5px] uppercase">CALL</strong>
                <span className="text-[14px]">+91 92892 22302</span>
              </div>
              <div>
                <strong className="block text-[#ff4b52] text-[10px] tracking-[1.5px] uppercase">LOCATION</strong>
                <span className="text-[14px]">Sainik Farms, New Delhi</span>
              </div>
            </div>
          </div>

          <form
            id="reservationForm"
            onSubmit={submitReservation}
            className="reservation-form bg-white text-[#171513] p-9 shadow-lg"
          >
            <div className="form-row grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="form-field border-b border-[#E7DED3] pb-2">
                <label htmlFor="guestName" className="block text-[12px] tracking-[1px] font-semibold mb-2">
                  YOUR NAME
                </label>
                <input
                  id="guestName"
                  name="name"
                  type="text"
                  placeholder="Full name"
                  required
                  className="w-full bg-transparent text-[16px] outline-none text-[#171513]"
                />
              </div>

              <div className="form-field border-b border-[#E7DED3] pb-2">
                <label htmlFor="guestPhone" className="block text-[12px] tracking-[1px] font-semibold mb-2">
                  MOBILE
                </label>
                <input
                  id="guestPhone"
                  name="phone"
                  type="tel"
                  placeholder="+91"
                  required
                  className="w-full bg-transparent text-[16px] outline-none text-[#171513]"
                />
              </div>
            </div>

            <div className="form-row grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="form-field border-b border-[#E7DED3] pb-2">
                <label htmlFor="guestDate" className="block text-[12px] tracking-[1px] font-semibold mb-2">
                  DATE
                </label>
                <input
                  id="guestDate"
                  name="date"
                  type="date"
                  required
                  className="w-full bg-transparent text-[16px] outline-none text-[#171513]"
                />
              </div>

              <div className="form-field border-b border-[#E7DED3] pb-2">
                <label htmlFor="guestTime" className="block text-[12px] tracking-[1px] font-semibold mb-2">
                  TIME
                </label>
                <input
                  id="guestTime"
                  name="time"
                  type="time"
                  required
                  className="w-full bg-transparent text-[16px] outline-none text-[#171513]"
                />
              </div>
            </div>

            <div className="form-row grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="form-field border-b border-[#E7DED3] pb-2">
                <label htmlFor="guestCount" className="block text-[12px] tracking-[1px] font-semibold mb-2">
                  GUESTS
                </label>
                <select id="guestCount" name="guests" className="w-full bg-transparent text-[16px] outline-none text-[#171513]">
                  <option value="2 Guests">2 Guests</option>
                  <option value="3 Guests">3 Guests</option>
                  <option value="4 Guests">4 Guests</option>
                  <option value="5 Guests">5 Guests</option>
                  <option value="6+ Guests">6+ Guests</option>
                </select>
              </div>

              <div className="form-field border-b border-[#E7DED3] pb-2">
                <label htmlFor="occasion" className="block text-[12px] tracking-[1px] font-semibold mb-2">
                  OCCASION
                </label>
                <select id="occasion" name="occasion" className="w-full bg-transparent text-[16px] outline-none text-[#171513]">
                  <option value="Dinner">Dinner</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Date Night">Date Night</option>
                  <option value="Business Dinner">Business Dinner</option>
                  <option value="Celebration">Celebration</option>
                </select>
              </div>
            </div>

            <div className="form-field form-full border-b border-[#E7DED3] pb-2 mb-6">
              <label htmlFor="specialRequest" className="block text-[12px] tracking-[1px] font-semibold mb-2">
                SPECIAL REQUEST
              </label>
              <textarea
                id="specialRequest"
                name="notes"
                placeholder="Dietary requirements or anything else we should know..."
                className="w-full min-h-[60px] bg-transparent text-[16px] outline-none resize-y text-[#171513]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="red-button form-submit w-full bg-[#E51B23] hover:bg-[#B90F16] text-white py-4 px-6 rounded-full text-[14px] font-semibold transition-all duration-300 cursor-pointer"
            >
              Continue on WhatsApp →
            </button>
          </form>
        </div>
      </section>

      {/* =========================================================
          LOCATION
      ========================================================= */}
      <section id="location" className="location py-[120px] max-lg:py-20">
        <div className="container max-w-[1180px] w-[92%] mx-auto location-grid grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] min-h-[500px] bg-[#E51B23] text-white shadow-lg overflow-hidden">
          <div className="location-image relative min-h-[350px] lg:min-h-[500px] p-0 overflow-hidden">
            <iframe
              title="Google Map for Sainik Farms, New Delhi"
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps?q=Sainik+Farms,+New+Delhi&output=embed"
            ></iframe>
          </div>

          <div className="location-content p-10 lg:p-[65px] flex flex-col justify-center">
            <span className="eyebrow text-white text-[13px] font-bold tracking-[2px] uppercase block">
              COME FIND US
            </span>
            <h2 className="section-title font-serif font-normal text-[clamp(46px,5vw,76px)] leading-[0.98] tracking-[-2px] mt-3 text-white">
              Your table<br />
              <em className="text-[#171513] not-italic">is waiting.</em>
            </h2>
            <p className="text-white/85 text-[16px] leading-[1.9] mt-6">
              Sainik Farms<br />
              New Delhi, India
              <br /><br />
              +91 92892 22302<br />
              thepalm192@gmail.com
              <br /><br />
              Open daily<br />
              12:00 PM — 11:00 PM
            </p>

            <div className="location-buttons flex flex-wrap gap-4 mt-8">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sainik+Farms+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#171513] hover:bg-[#171513] hover:text-white px-5 py-3 rounded-full text-[13px] font-semibold transition-colors"
              >
                Get directions →
              </a>
              <a
                href="#reservation"
                onClick={closeMenu}
                className="bg-white text-[#171513] hover:bg-[#171513] hover:text-white px-5 py-3 rounded-full text-[13px] font-semibold transition-colors"
              >
                Book a table →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="final-cta py-[120px] max-lg:py-20 text-center bg-[#FFF9F2]">
        <div className="container max-w-[1180px] w-[92%] mx-auto">
          <span className="eyebrow text-[#E51B23] text-[13px] font-bold tracking-[2px] uppercase block">
            THE PALM
          </span>
          <h2 className="font-serif font-normal text-[clamp(46px,7vw,94px)] leading-[0.9] tracking-[-3px] mt-4">
            Come hungry.<br />
            <em className="text-[#E51B23] not-italic">Leave happier.</em>
          </h2>
          <p className="text-[#77716A] text-[16px] leading-[1.8] max-w-[450px] mx-auto my-6">
            Good food, generous tables and evenings that are better when shared.
          </p>
          <a
            href="#reservation"
            onClick={closeMenu}
            className="red-button inline-flex items-center justify-center bg-[#E51B23] hover:bg-[#B90F16] text-white px-7 py-4 rounded-full text-[14px] font-semibold transition-all duration-300 hover:-translate-y-0.5"
          >
            Reserve your table →
          </a>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="footer bg-[#171513] text-white pt-[75px] pb-[25px]">
        <div className="container max-w-[1180px] w-[92%] mx-auto">
          <div className="footer-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 lg:gap-[50px]">
            <div>
              <div className="footer-logo font-serif text-[38px] italic">
                <img src="/logo-light.png" alt="Palm Restaurant Logo" className="w-[250px] h-auto block" />
              </div>
              <p className="footer-description text-white/50 text-[14px] leading-[1.7] max-w-[250px] mt-4">
                Seasonal plates, long evenings and always-warm hospitality in New Delhi.
              </p>
            </div>

            <div>
              <h4 className="text-white text-[11px] tracking-[1.5px] uppercase font-bold mb-4">EXPLORE</h4>
              <div className="space-y-2">
                <a href="#about" onClick={closeMenu} className="block text-white/55 hover:text-[#ff4a50] text-[14px] transition-colors">
                  About
                </a>
                <a href="#menu" onClick={closeMenu} className="block text-white/55 hover:text-[#ff4a50] text-[14px] transition-colors">
                  Menu
                </a>
                <a href="#experience" onClick={closeMenu} className="block text-white/55 hover:text-[#ff4a50] text-[14px] transition-colors">
                  Experience
                </a>
                <a href="#events" onClick={closeMenu} className="block text-white/55 hover:text-[#ff4a50] text-[14px] transition-colors">
                  What's On
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white text-[11px] tracking-[1.5px] uppercase font-bold mb-4">FIND US</h4>
              <div className="space-y-2">
                <a href="#location" onClick={closeMenu} className="block text-white/55 hover:text-[#ff4a50] text-[14px] transition-colors">
                  Sainik Farms
                </a>
                <a href="tel:+919289222302" className="block text-white/55 hover:text-[#ff4a50] text-[14px] transition-colors">
                  +91 92892 22302
                </a>
                <a href="mailto:thepalm192@gmail.com" className="block text-white/55 hover:text-[#ff4a50] text-[14px] transition-colors">
                  Email us
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white text-[11px] tracking-[1.5px] uppercase font-bold mb-4">FOLLOW</h4>
              <div className="space-y-2">
                <a href="#" className="block text-white/55 hover:text-[#ff4a50] text-[14px] transition-colors">
                  Instagram
                </a>
                <a href="#" className="block text-white/55 hover:text-[#ff4a50] text-[14px] transition-colors">
                  Facebook
                </a>
                <a href="#" className="block text-white/55 hover:text-[#ff4a50] text-[14px] transition-colors">
                  Google
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom flex flex-col sm:flex-row justify-between border-t border-white/10 mt-14 pt-5 text-white/35 text-[11px] gap-2">
            <span>© 2026 PALM RESTAURANT</span>
            <span>Made for good times.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
