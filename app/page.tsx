'use client';
import { useState } from 'react';
import Navbar from './component/nav';
import CircularText from './component/CircularText';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reservationSent, setReservationSent] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  function submitReservation(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      'Hello Palm, I would like to make a reservation.',
      `Name: ${data.get('name')}`,
      `Phone: ${data.get('phone')}`,
      data.get('email') ? `Email: ${data.get('email')}` : '',
      `Guests: ${data.get('guests')}`,
      `Date: ${data.get('date')}`,
      `Time: ${data.get('time')}`,
      data.get('notes') ? `Special Requests: ${data.get('notes')}` : ''
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
            <h3 className="text-[15px] font-bold">01. Seasonal Flavours</h3>
            <p className="text-[#77716A] text-[14px] leading-[1.65] mt-1">
              Fresh ingredients, thoughtfully crafted dishes.
            </p>
          </div>
          <div className="feature p-[30px_25px] max-lg:p-6 border-b lg:border-r lg:border-b-0 border-[#E7DED3]">
            <div className="feature-icon text-[#E51B23] text-[22px] mb-2.5">♡</div>
            <h3 className="text-[15px] font-bold">02. Thoughtful Hospitality</h3>
            <p className="text-[#77716A] text-[14px] leading-[1.65] mt-1">
              Warm welcomes and service that feels personal.
            </p>
          </div>
          <div className="feature p-[30px_25px] max-lg:p-6 border-b sm:border-r border-[#E7DED3] sm:border-b-0">
            <div className="feature-icon text-[#E51B23] text-[22px] mb-2.5">—</div>
            <h3 className="text-[15px] font-bold">03. Rooftop Gatherings</h3>
            <p className="text-[#77716A] text-[14px] leading-[1.65] mt-1">
              The perfect setting for celebrations and special moments.
            </p>
          </div>
          <div className="feature p-[30px_25px] max-lg:p-6">
            <div className="feature-icon text-[#E51B23] text-[22px] mb-2.5">◌</div>
            <h3 className="text-[15px] font-bold">04. Evenings That Linger</h3>
            <p className="text-[#77716A] text-[14px] leading-[1.65] mt-1">
              Come for dinner. Stay for the atmosphere.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}
      <section id="about" className="about py-[120px] max-lg:py-20">
        <div className="container max-w-8xl 2xl:max-w-8xl w-[94%] mx-auto about-grid grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[100px] items-center">
          <div className="about-images relative pr-0 lg:pr-[60px]">
            <img
              src="/aboutbig.JPG"
              alt="Palm dining"
              loading="lazy"
              className="about-main w-full lg:w-[90%] h-[420px] lg:h-[530px] object-cover object-[36%_center] lg:ml-2"
            />
            <img
              src="/aboutsmall.JPG"
              alt="Palm food"
              loading="lazy"
              className="about-small absolute right-0 bottom-0 w-[135px] lg:w-[190px] h-[155px] lg:h-[210px] object-cover border-[6px] lg:border-[9px] border-[#FFF9F2]"
            />
            <div className="absolute right-1 lg:right-[15px] top-2 lg:top-[15px] w-[130px] lg:w-[150px] h-[130px] lg:h-[150px] flex items-center justify-center z-[4] pointer-events-auto">
              

              {/* Exact React Bits CircularText component */}
              <CircularText
                text="A*LITTLE*MORE*PALM*"
                spinDuration={20}
                onHover="speedUp"
                className="!w-[130px] !h-[130px] lg:!w-[150px] lg:!h-[150px] !text-[#E51B23] text-[13px] font-bold"
              />
            </div>
          </div>

          <div className="about-content">
            <span className="eyebrow text-[#E51B23] text-[13px] max-lg:text-[11px] font-medium tracking-[2px] uppercase block">
              OUR PHILOSOPHY
            </span>
            <h2 className="section-title font-serif font-normal !text-[clamp(38px,4.2vw,54px)] leading-[1.02] tracking-[-1.5px] mt-4">
              Come for the food.<br />
              <em className="text-[#E51B23] not-italic">Stay for the feeling.</em>
            </h2>
            <p className="section-description text-[#77716A] !text-[16px] max-lg:!text-[15px] leading-[1.8] mt-5">
              At The First Floor, every meal is an invitation to slow down and savour the moment. From relaxed lunches to intimate dinners, we bring people together over food worth sharing and conversations worth having.
            </p>
            <p className="section-description text-[#77716A] !text-[16px] max-lg:!text-[15px] leading-[1.8] mt-4">
              Our kitchen brings together bold flavours, thoughtfully prepared dishes, and ingredients chosen with care. Add a welcoming ambience, rooftop charm, and a little more time with your favourite people.
            </p>
            <a
              href="#reservation"
              onClick={closeMenu}
              className="underline-link inline-block text-[14px] font-semibold border-b border-current pb-1 mt-7 hover:text-[#E51B23] transition-colors"
            >
              Reserve your table →
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
        <div className="container max-w-8xl 2xl:max-w-8xl w-[94%] mx-auto">
          <div className="experience-head flex flex-col lg:flex-row justify-between lg:items-end mb-[55px] max-lg:mb-10 gap-8">
            <div>
              <span className="eyebrow text-[#E51B23] text-[13px] max-lg:text-[11px] font-medium tracking-[2px] uppercase block">
                THE FIRST FLOOR EXPERIENCE
              </span>
              <h2 className="section-title font-serif font-normal !text-[clamp(38px,4.2vw,54px)] leading-[1.02] tracking-[-1.5px] mt-4">
                More than<br />
                <em className="text-[#E51B23] not-italic">a meal.</em>
              </h2>
            </div>
            <div className="max-w-[480px] space-y-3">
              <p className="section-description text-white/70 !text-[16px] max-lg:!text-[15px] leading-[1.8]">
                From laid-back lunches to rooftop dinners and late-night celebrations, The First Floor brings people together over good food, warm hospitality, and moments worth remembering.
              </p>
              
            </div>
          </div>

          <div className="experience-grid !grid grid-cols-1 md:!grid-cols-3 gap-4 lg:gap-5">
            <article className="experience-card relative h-[480px] max-lg:h-[400px] overflow-hidden group">
              <img
                src="/drink.jpg"
                alt="Drinks"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="experience-content absolute z-[2] left-[30px] right-[30px] bottom-[30px] max-lg:left-[22px] max-lg:right-[22px] max-lg:bottom-[22px]">
                <small className="text-[#ff4148] text-[11px] tracking-[2px] block">01 · DRINKS</small>
                <h3 className="font-serif text-[33px] max-lg:text-[31px] font-normal my-2">Drinks</h3>
                <p className="text-white/70 text-[14px] leading-[1.7]">
                  Signature cocktails, fine spirits and refreshments curated for every toast.
                </p>
                <a href="#reservation" onClick={closeMenu} className="inline-block text-[14px] border-b border-white pb-1 mt-4 hover:text-[#ff4148] hover:border-[#ff4148] transition-colors">
                  Enquire now →
                </a>
              </div>
            </article>

            <article className="experience-card relative h-[480px] max-lg:h-[400px] overflow-hidden group">
              <img
                src="/food.JPG"
                alt="Food"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="experience-content absolute z-[2] left-[30px] right-[30px] bottom-[30px] max-lg:left-[22px] max-lg:right-[22px] max-lg:bottom-[22px]">
                <small className="text-[#ff4148] text-[11px] tracking-[2px] block">02 · FOOD</small>
                <h3 className="font-serif text-[33px] max-lg:text-[31px] font-normal my-2">Food</h3>
                <p className="text-white/70 text-[14px] leading-[1.7]">
                  Thoughtfully crafted plates, bold culinary flavours, and seasonal ingredients.
                </p>
                <a href="#reservation" onClick={closeMenu} className="inline-block text-[14px] border-b border-white pb-1 mt-4 hover:text-[#ff4148] hover:border-[#ff4148] transition-colors">
                  Enquire now →
                </a>
              </div>
            </article>

            <article className="experience-card relative h-[480px] max-lg:h-[400px] overflow-hidden group">
              <img
                src="/package.JPG"
                alt="Packages"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="experience-content absolute z-[2] left-[30px] right-[30px] bottom-[30px] max-lg:left-[22px] max-lg:right-[22px] max-lg:bottom-[22px]">
                <small className="text-[#ff4148] text-[11px] tracking-[2px] block">03 · PACKAGES</small>
                <h3 className="font-serif text-[33px] max-lg:text-[31px] font-normal my-2">Packages</h3>
                <p className="text-white/70 text-[14px] leading-[1.7]">
                  Tailored dining packages, curated menus and special gatherings made easy.
                </p>
                <a href="#reservation" onClick={closeMenu} className="inline-block text-[14px] border-b border-white pb-1 mt-4 hover:text-[#ff4148] hover:border-[#ff4148] transition-colors">
                  Enquire now →
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
          GALLERY
      ========================================================= */}
      <section id="gallery" className="gallery pt-[120px] max-lg:pt-20">
        <div className="container max-w-[1180px] w-[92%] mx-auto mb-12 flex flex-col sm:flex-row justify-between sm:items-end gap-4">
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
          RESERVATION
      ========================================================= */}
      <section id="reservation" className="reservation py-20 lg:py-28 bg-[#FCFAF7] text-[#171513]">
        <div className="container max-w-[1240px] w-[92%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Atmospheric Table Photo */}
          <div className="reservation-image overflow-hidden min-h-[420px] lg:min-h-[580px] h-full shadow-sm">
            <img
              src="/photos/DSC04898.JPG"
              alt="Restaurant table reservation"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Right Column: Form */}
          <div className="reservation-form-wrap flex flex-col justify-center lg:py-4">
            <h2 className="font-serif italic font-normal text-[36px] sm:text-[44px] text-[#2C1810] tracking-tight leading-tight">
              Make a Reservation
            </h2>
            <p className="text-[#6B655E] text-[15px] sm:text-[16px] leading-[1.6] mt-3 mb-8">
              Reserve your table and enjoy an unforgettable dining experience, thoughtfully prepared for every occasion.
            </p>

            <form
              id="reservationForm"
              onSubmit={submitReservation}
              className="reservation-form space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
                {/* Guests */}
                <div>
                  <label htmlFor="guestCount" className="block text-[13px] font-medium text-[#77716A] mb-2">
                    Guests
                  </label>
                  <div className="relative">
                    <select
                      id="guestCount"
                      name="guests"
                      defaultValue="1 Person"
                      className="w-full bg-[#F6F5F2] hover:bg-[#F0EEE9] focus:bg-white border border-transparent focus:border-[#D5CEC5] text-[#171513] text-[14px] py-3.5 px-4 pr-10 outline-none appearance-none cursor-pointer transition-all"
                    >
                      <option value="1 Person">1 Person</option>
                      <option value="2 People">2 People</option>
                      <option value="3 People">3 People</option>
                      <option value="4 People">4 People</option>
                      <option value="5 People">5 People</option>
                      <option value="6+ People">6+ People</option>
                    </select>
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#77716A] text-[11px]">
                      ▼
                    </span>
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label htmlFor="guestDate" className="block text-[13px] font-medium text-[#77716A] mb-2">
                    Date
                  </label>
                  <input
                    id="guestDate"
                    name="date"
                    type="date"
                    required
                    placeholder="mm/dd/yyyy"
                    className="w-full bg-[#F6F5F2] hover:bg-[#F0EEE9] focus:bg-white border border-transparent focus:border-[#D5CEC5] text-[#171513] text-[14px] py-3.5 px-4 outline-none transition-all placeholder:text-[#A09A93]"
                  />
                </div>

                {/* Time */}
                <div>
                  <label htmlFor="guestTime" className="block text-[13px] font-medium text-[#77716A] mb-2">
                    Time
                  </label>
                  <div className="relative">
                    <select
                      id="guestTime"
                      name="time"
                      defaultValue="11.00 AM"
                      className="w-full bg-[#F6F5F2] hover:bg-[#F0EEE9] focus:bg-white border border-transparent focus:border-[#D5CEC5] text-[#171513] text-[14px] py-3.5 px-4 pr-10 outline-none appearance-none cursor-pointer transition-all"
                    >
                      <option value="11.00 AM">11.00 AM</option>
                      <option value="12.00 PM">12.00 PM</option>
                      <option value="01.00 PM">01.00 PM</option>
                      <option value="02.00 PM">02.00 PM</option>
                      <option value="03.00 PM">03.00 PM</option>
                      <option value="07.00 PM">07.00 PM</option>
                      <option value="08.00 PM">08.00 PM</option>
                      <option value="09.00 PM">09.00 PM</option>
                      <option value="10.00 PM">10.00 PM</option>
                    </select>
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#77716A] text-[11px]">
                      ▼
                    </span>
                  </div>
                </div>

                {/* Full Name */}
                <div>
                  <label htmlFor="guestName" className="block text-[13px] font-medium text-[#77716A] mb-2">
                    Full Name
                  </label>
                  <input
                    id="guestName"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter Your Name"
                    className="w-full bg-[#F6F5F2] hover:bg-[#F0EEE9] focus:bg-white border border-transparent focus:border-[#D5CEC5] text-[#171513] text-[14px] py-3.5 px-4 outline-none transition-all placeholder:text-[#A09A93]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="guestEmail" className="block text-[13px] font-medium text-[#77716A] mb-2">
                    Email
                  </label>
                  <input
                    id="guestEmail"
                    name="email"
                    type="email"
                    placeholder="jane@framer.com"
                    className="w-full bg-[#F6F5F2] hover:bg-[#F0EEE9] focus:bg-white border border-transparent focus:border-[#D5CEC5] text-[#171513] text-[14px] py-3.5 px-4 outline-none transition-all placeholder:text-[#A09A93]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="guestPhone" className="block text-[13px] font-medium text-[#77716A] mb-2">
                    Phone
                  </label>
                  <input
                    id="guestPhone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Phone Number"
                    className="w-full bg-[#F6F5F2] hover:bg-[#F0EEE9] focus:bg-white border border-transparent focus:border-[#D5CEC5] text-[#171513] text-[14px] py-3.5 px-4 outline-none transition-all placeholder:text-[#A09A93]"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label htmlFor="specialRequest" className="block text-[13px] font-medium text-[#77716A] mb-2">
                  Special Requests
                </label>
                <textarea
                  id="specialRequest"
                  name="notes"
                  rows={3}
                  placeholder="Let us know about dietary preferences, celebrations, allergies, or any special requests."
                  className="w-full bg-[#F6F5F2] hover:bg-[#F0EEE9] focus:bg-white border border-transparent focus:border-[#D5CEC5] text-[#171513] text-[14px] p-4 outline-none resize-y transition-all placeholder:text-[#A09A93] leading-relaxed"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#271511] hover:bg-[#150B09] text-white py-4 px-6 text-[15px] font-medium tracking-wide transition-all duration-300 cursor-pointer shadow-sm hover:shadow"
              >
                Submit
              </button>

              {reservationSent && (
                <p className="mt-3 text-center text-[13px] text-green-700 font-medium">
                  Thank you! Your reservation request has been opened on WhatsApp.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* =========================================================
          LOCATION
      ========================================================= */}
      <section id="location" className="location py-[120px] max-lg:py-20">
        <div className="container max-w-[1180px] w-[92%] mx-auto location-grid grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] min-h-[500px] bg-[#E51B23] text-white shadow-lg overflow-hidden">
          <div className="location-image relative min-h-[350px] lg:min-h-[500px] p-0 overflow-hidden">
            <iframe
              title="Google Map for The First Floor, One Golden Mile, Netaji Nagar, New Delhi"
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps?q=The+First+Floor,+One+Golden+Mile,+Block+A,+Netaji+Nagar,+New+Delhi,+Delhi+110066&output=embed"
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
              The First Floor, One Golden Mile<br />
              Block A, Netaji Nagar<br />
              New Delhi, Delhi 110066
              <br /><br />
              +91 92892 22302<br />
              thepalm192@gmail.com
              <br /><br />
              Open daily<br />
              12:00 PM — 11:00 PM
            </p>

            <div className="location-buttons flex flex-wrap gap-4 mt-8">
              <a
                href="https://www.google.com/maps/dir//The+First+Floor,+One+Golden+Mile,+Block+A,+Netaji+Nagar,+New+Delhi,+Delhi,+110066/@26.6882664,77.8938889,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d1dab1258837f:0xc27d1fd707643722!2m2!1d77.1858787!2d28.570659?entry=ttu"
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
          FOOTER
      ========================================================= */}
      <footer className="footer bg-[#FFF9F2] text-[#171513] pt-20 pb-16 border-t border-[#E7DED3]">
        <div className="container max-w-[1240px] w-[92%] mx-auto">
          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1.1fr_1.4fr_auto] gap-x-12 gap-y-8 items-start">
            <div>
              <a
                href="#home"
                onClick={closeMenu}
                className="inline-flex items-start gap-1 group font-sans"
              >
                <span className="text-[38px] sm:text-[44px] font-bold tracking-tight text-[#171513] leading-none lowercase">
                  palm
                </span>
                <span className="text-[20px] text-[#77716A] leading-none group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  ↗
                </span>
              </a>
            </div>

            <div>
              <span className="block text-[11px] font-semibold tracking-[1.5px] uppercase text-[#77716A] mb-2">
                CONTACT US
              </span>
              <a
                href="tel:+919289222302"
                className="text-[20px] sm:text-[22px] font-semibold text-[#171513] tracking-tight hover:text-[#E51B23] transition-colors whitespace-nowrap"
              >
                +91 92892 22302
              </a>
            </div>

            <div>
              <span className="block text-[11px] font-semibold tracking-[1.5px] uppercase text-[#77716A] mb-2">
                ADDRESS
              </span>
              <a
                href="https://www.google.com/maps/dir//The+First+Floor,+One+Golden+Mile,+Block+A,+Netaji+Nagar,+New+Delhi,+Delhi,+110066/@26.6882664,77.8938889,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d1dab1258837f:0xc27d1fd707643722!2m2!1d77.1858787!2d28.570659?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] sm:text-[17px] font-medium text-[#171513] leading-[1.4] hover:text-[#E51B23] transition-colors block max-w-[340px]"
              >
                The First Floor, One Golden Mile, Block A, Netaji Nagar, New Delhi 110066
              </a>
            </div>

            <div className="hidden lg:block w-[140px]" />
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1.1fr_1.4fr_auto] gap-x-12 gap-y-8 items-end mt-16 sm:mt-20">
            <nav className="flex items-center flex-wrap gap-3 sm:gap-4 text-[14px] sm:text-[15px] font-medium text-[#171513]">
              <a href="#home" onClick={closeMenu} className="hover:text-[#E51B23] transition-colors">
                Home
              </a>
              <span className="text-[#C8BFB5] select-none">/</span>
              <a href="#reservation" onClick={closeMenu} className="hover:text-[#E51B23] transition-colors">
                Book a Table
              </a>
              <span className="text-[#C8BFB5] select-none">/</span>
              <a href="#menu" onClick={closeMenu} className="hover:text-[#E51B23] transition-colors">
                Menu
              </a>
            </nav>

            <div>
              <span className="block text-[11px] font-semibold tracking-[1.5px] uppercase text-[#77716A] mb-1.5">
                EMAIL
              </span>
              <a
                href="mailto:thepalm192@gmail.com"
                className="text-[16px] sm:text-[18px] font-medium text-[#171513] hover:text-[#E51B23] transition-colors"
              >
                thepalm192@gmail.com
              </a>
            </div>

            <div>
              <span className="block text-[11px] font-semibold tracking-[1.5px] uppercase text-[#77716A] mb-1.5">
                OPENING HOURS
              </span>
              <p className="text-[17px] sm:text-[19px] font-medium text-[#171513]">
                12pm—11pm
              </p>
            </div>

            <div className="lg:text-right pt-2 lg:pt-0">
              <span className="text-[13px] text-[#77716A] whitespace-nowrap">
                © 2026 — Copyright
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
