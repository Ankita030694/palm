'use client';
import { useState, useEffect } from 'react';
import Navbar from './component/nav';
import CircularText from './component/CircularText';
import CTA from './component/cta';

const galleryImages = [
  "/1/Copy of DSC01533.jpg",
  "/1/Copy of DSC01552.jpg",
  "/1/Copy of DSC01693.jpg",
  "/1/Copy of DSC01775.jpg",
  "/1/Copy of DSC01850.jpg",
  "/1/Copy of DSC01976.jpg",
  "/2/Copy of RM408231.JPG",
  "/2/Copy of RM408240.JPG",
  "/2/Copy of RM408251.JPG",
  "/2/Copy of RM408255.JPG",
  "/2/Copy of RM408269.JPG",
  "/2/Copy of RM408276.JPG",
  "/2/Copy of RM408285.JPG",
];

const foodImages = [
  "/foodfilter/Copy of RM408240.JPG",
  "/foodfilter/Copy of RM408264.JPG",
  "/foodfilter/Copy of RM408276.JPG",
  "/foodfilter/Copy of RM408285.JPG",
  "/foodfilter/Copy of RM408300.JPG",
  "/foodfilter/Copy of RM408316.JPG",
  "/foodfilter/Copy of RM408332.JPG",
  "/foodfilter/Copy of RM408338.JPG",
  "/foodfilter/Copy of RM408352.JPG",
  "/foodfilter/Copy of RM408368.JPG",
];

const drinksImages = [
  "/drinksfilter/JASP0016.jpg",
  "/drinksfilter/JASP0028.jpg",
  "/drinksfilter/JASP0048.jpg",
  "/drinksfilter/JASP0082.jpg",
  "/drinksfilter/JASP0110.jpg",
  "/drinksfilter/JASP0133.jpg",
  "/drinksfilter/JASP0146.jpg",
  "/drinksfilter/JASP0327.jpg",
];

const partyImages = [
  "/package.JPG",
  "/food.JPG",
  "/drink.jpg",
  "/foodfilter/Copy of RM408276.JPG",
  "/drinksfilter/JASP0028.jpg",
  "/aboutbig.JPG",
  "/photos/DSC00062.JPG",
  "/foodfilter/Copy of RM408300.JPG",
  "/drinksfilter/JASP0133.jpg",
];

const menuCategories = [
  { id: 'food' as const, label: 'Food Menu', pdf: '/drinks.pdf' },
  { id: 'drinks' as const, label: 'Drink Menu', pdf: '/drinks.pdf' },
  { id: 'party' as const, label: 'Party Menu', pdf: '/party.pdf' },
];

const menuItemsData: Record<string, Array<{ num: string; name: string; price: string; desc: string }>> = {
  food: [
    { num: '01', name: 'Palm Burrata', price: '₹1,050', desc: 'Heirloom tomato, basil oil & sourdough' },
    { num: '02', name: 'Slow-Cooked Lamb Chops', price: '₹1,850', desc: 'Rosemary jus, asparagus & garlic mash' },
    { num: '03', name: 'Charred Market Fish', price: '₹1,450', desc: 'Seasonal greens, citrus & brown butter' },
    { num: '04', name: 'Harissa Roasted Chicken', price: '₹1,150', desc: 'Labneh, smoked chilli & summer herbs' },
    { num: '05', name: 'Seasonal Handmade Pasta', price: '₹1,250', desc: 'Fresh herbs, parmesan & seasonal vegetables' },
    { num: '06', name: 'The First Floor Grill', price: '₹1,650', desc: 'Charred vegetables, herbs & signature glaze' },
    { num: '07', name: 'Artisan Baos & Spreads', price: '₹850', desc: 'Steamed brioche baos with trio of house dips' },
    { num: '08', name: 'Spiced Cocktail Prawns', price: '₹1,350', desc: 'Togarashi spice, yuzu aioli & garden cress' },
    { num: '09', name: 'Palm Signature Dessert', price: '₹650', desc: 'Seasonal fruit, cream & toasted crumble' },
  ],
  drinks: [
    { num: '01', name: 'Botanical Palm Spritz', price: '₹750', desc: 'Garden botanicals, citrus tonic & sparkling prosecco' },
    { num: '02', name: 'Clarified Milk Punch', price: '₹850', desc: 'Spiced rum, pineapple, citrus & clarified whey' },
    { num: '03', name: 'Smoked Mezcalita', price: '₹850', desc: 'Artisanal mezcal, fresh lime & smoked chilli salt rim' },
    { num: '04', name: 'The Golden Mile Highball', price: '₹800', desc: 'Japanese whisky, soda & charred orange peel' },
    { num: '05', name: 'Saffron & Cardamom Sour', price: '₹850', desc: 'Bourbon, saffron cordial, lemon & silky foam' },
    { num: '06', name: 'Roasted Espresso Martini', price: '₹750', desc: 'Cold brew espresso, vodka & Madagascar vanilla' },
    { num: '07', name: 'Artisanal Gin & Tonic', price: '₹800', desc: 'House-infused botanicals, elderflower & fresh thyme' },
    { num: '08', name: 'Berry Kombucha Cooler', price: '₹450', desc: 'Fermented berries, crushed mint & effervescent soda' },
    { num: '09', name: 'Curated Reserve Wine', price: '₹1,200', desc: 'Premium international vintage pours by the glass' },
  ],
  party: [
    { num: '01', name: 'Rooftop Soirée Package', price: '₹2,500 / guest', desc: 'Free-flowing cocktails, passed canapés & rooftop views' },
    { num: '02', name: 'The First Floor Feast', price: '₹2,200 / guest', desc: 'Curated multi-course family feast with drink pairing' },
    { num: '03', name: 'Sunset Cocktails & Grazing', price: '₹1,800 / guest', desc: 'Signature cocktail bar, artisanal grazing tables & DJ setup' },
    { num: '04', name: "Celebration Chef's Table", price: '₹2,800 / guest', desc: 'Private multi-course tasting menu tailored for milestones' },
    { num: '05', name: 'Corporate & Private Dining', price: 'Custom Quote', desc: 'Bespoke culinary experience with private terrace access' },
    { num: '06', name: 'Weekend Rooftop Brunch', price: '₹1,950 / guest', desc: 'Signature brunch cocktails, live grills & leisurely plates' },
    { num: '07', name: 'Intimate Gathering Menu', price: '₹1,900 / guest', desc: 'Curated appetisers, sharing mains & bespoke desserts' },
    { num: '08', name: 'Cocktail Reception Package', price: '₹2,100 / guest', desc: 'Crafted cocktails, gourmet sliders & bao platters' },
    { num: '09', name: 'Midnight Celebration Bites', price: '₹1,650 / guest', desc: 'Late-night cocktails, artisanal bites & celebratory toasts' },
  ],
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'food' | 'drinks' | 'party'>('food');
  const [imageStep, setImageStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImageStep((prev) => (prev + 1) % 100);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const currentCategory = menuCategories.find((c) => c.id === activeTab) || menuCategories[0];
  const activeItems = menuItemsData[activeTab] || menuItemsData.food;
  const categoryImages =
    activeTab === 'drinks' ? drinksImages : activeTab === 'party' ? partyImages : foodImages;

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#292622] font-sans">

      {/* Navbar Component */}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} closeMenu={closeMenu} />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section id="home" className="hero relative h-[100dvh] min-h-[600px] flex items-center overflow-hidden bg-[#171513] text-white">
        <div
          className="hero-image absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url("/hero.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <img src="/hero.jpg" alt="The First Floor Restaurant" className="w-full h-full object-cover" />
        </div>

        {/* Hero Gradient Overlay */}
        <div className="hero-overlay absolute inset-0 bg-gradient-to-r from-[#140F0C]/90 via-[#140F0C]/70 to-[#140F0C]/20 max-lg:from-[#140F0C]/95 max-lg:to-[#140F0C]/65" />
          
        <div className="hero-content relative z-[2] max-w-[1180px] w-[92%] mx-auto pt-[90px] max-lg:pt-[70px]">
          <span className="eyebrow text-[#A2C4AB] text-[13px] font-medium tracking-[2px] uppercase block">
            WELCOME TO THE FIRST FLOOR · NEW DELHI
          </span>

          <h1 className="font-serif !text-[clamp(42px,5.5vw,82px)] font-normal leading-[0.92] tracking-[-2px] lg:tracking-[-3px] mt-4 max-w-[680px]">
            For the <em className="text-[#A2C4AB] not-italic">pleasure</em><br />
            of a good table.
          </h1>

          <p className="hero-text text-white/75 !text-[17px] max-lg:!text-[15px] leading-[1.8] max-w-[480px] mt-6 max-lg:mt-5">
            The First Floor brings people together over thoughtfully crafted dishes, refreshing drinks, and rooftop evenings that make every moment worth savouring.
          </p>

          <div className="hero-buttons flex items-center gap-[25px] mt-[35px] max-lg:flex-col max-lg:items-start max-lg:gap-4">
            <a
              href="#reservation"
              onClick={closeMenu}
              style={{ backgroundColor: '#1C2D20', color: '#ffffff' }}
              className="red-button inline-flex items-center justify-center gap-2 hover:bg-[#132016] !text-white min-h-[48px] px-7 py-4 rounded-full text-[14px] font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
            >
              Reserve your table →
            </a>
            <a
              href="#menu"
              onClick={closeMenu}
              style={{ color: '#ffffff' }}
              className="hero-menu-link text-white text-[15px] border-b border-white pb-1 hover:text-[#A2C4AB] hover:border-[#A2C4AB] transition-colors"
            >
              Explore the menu →
            </a>
          </div>
        </div>

        {/* Hero booking card (Desktop) */}
        <div className="hero-booking absolute right-[5%] !bottom-[160px] xl:!bottom-[180px] z-[10] w-[310px] bg-white text-[#171513] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.25)] hidden lg:block">
          <small className="block text-[#1C2D20] text-[11px] tracking-[2px] font-bold">
            YOUR TABLE AWAITS
          </small>
          <strong className="block font-serif font-normal text-[30px] leading-[1.05] my-3">
            Make an evening<br />
            <em className="text-[#1C2D20] not-italic">of it.</em>
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
            <span className="text-[#77716A]">Select time</span>
          </div>
          <a
            href="#reservation"
            onClick={closeMenu}
            style={{ backgroundColor: '#1C2D20', color: '#ffffff' }}
            className="booking-link block hover:bg-[#132016] !text-white text-center mt-5 p-3 text-[12px] font-semibold transition-colors"
          >
            BOOK YOUR TABLE →
          </a>
        </div>
      </section>

      {/* =========================================================
          FEATURES
      ========================================================= */}
      <section className="features bg-[#FFFFFF] border-b border-[#E7DED3]">
        <div className="container max-w-[1180px] w-[92%] mx-auto features-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="feature p-[30px_25px] max-lg:p-6 border-b sm:border-r border-[#E7DED3] lg:border-b-0">
            <div className="feature-icon text-[#1C2D20] text-[22px] mb-2.5">✦</div>
            <h3 className="text-[15px] font-bold">01. Seasonal Flavours</h3>
            <p className="text-[#77716A] text-[14px] leading-[1.65] mt-1">
              Fresh ingredients, thoughtfully crafted dishes.
            </p>
          </div>
          <div className="feature p-[30px_25px] max-lg:p-6 border-b lg:border-r lg:border-b-0 border-[#E7DED3]">
            <div className="feature-icon text-[#1C2D20] text-[22px] mb-2.5">♡</div>
            <h3 className="text-[15px] font-bold">02. Thoughtful Hospitality</h3>
            <p className="text-[#77716A] text-[14px] leading-[1.65] mt-1">
              Warm welcomes and service that feels personal.
            </p>
          </div>
          <div className="feature p-[30px_25px] max-lg:p-6 border-b sm:border-r border-[#E7DED3] sm:border-b-0">
            <div className="feature-icon text-[#1C2D20] text-[22px] mb-2.5">—</div>
            <h3 className="text-[15px] font-bold">03. Rooftop Gatherings</h3>
            <p className="text-[#77716A] text-[14px] leading-[1.65] mt-1">
              The perfect setting for celebrations and special moments.
            </p>
          </div>
          <div className="feature p-[30px_25px] max-lg:p-6">
            <div className="feature-icon text-[#1C2D20] text-[22px] mb-2.5">◌</div>
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
                text="A LITTLE MORE*FLAVOUR*" 
                spinDuration={20}
                onHover="speedUp"
                className="!w-[130px] !h-[130px] lg:!w-[150px] lg:!h-[150px] !text-[#2eff5e] text-[13px] font-bold"
              />
            </div>
          </div>

          <div className="about-content">
            <span className="eyebrow text-[#1C2D20] text-[13px] max-lg:text-[11px] font-medium tracking-[2px] uppercase block">
              OUR PHILOSOPHY
            </span>
            <h2 className="section-title font-serif font-normal !text-[clamp(38px,4.2vw,54px)] leading-[1.02] tracking-[-1.5px] mt-4">
              Come for the food.<br />
              <em className="text-[#1C2D20] not-italic">Stay for the feeling.</em>
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
              className="underline-link inline-block text-[14px] font-semibold border-b border-current pb-1 mt-7 hover:text-[#1C2D20] transition-colors"
            >
              Reserve your table →
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="stats bg-[#1C2D20] text-white py-11 max-lg:py-[38px]">
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
              <span className="eyebrow text-[#A2C4AB] text-[13px] max-lg:text-[11px] font-medium tracking-[2px] uppercase block">
                THE FIRST FLOOR EXPERIENCE
              </span>
              <h2 className="section-title font-serif font-normal !text-[clamp(38px,4.2vw,54px)] leading-[1.02] tracking-[-1.5px] mt-4">
                More than<br />
                <em className="text-[#A2C4AB] not-italic">a meal.</em>
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
                <small className="text-[#A2C4AB] text-[11px] tracking-[2px] block">01 · DRINKS</small>
                <h3 className="font-serif text-[33px] max-lg:text-[31px] font-normal my-2">Drinks</h3>
                <p className="text-white/70 text-[14px] leading-[1.7]">
                  Signature cocktails, fine spirits and refreshments curated for every toast.
                </p>
                <a
                  href="/drinks.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[14px] border-b border-white pb-1 mt-4 hover:text-[#A2C4AB] hover:border-[#A2C4AB] transition-colors"
                >
                  View Drinks Menu (PDF) →
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
                <small className="text-[#A2C4AB] text-[11px] tracking-[2px] block">02 · FOOD</small>
                <h3 className="font-serif text-[33px] max-lg:text-[31px] font-normal my-2">Food</h3>
                <p className="text-white/70 text-[14px] leading-[1.7]">
                  Thoughtfully crafted plates, bold culinary flavours, and seasonal ingredients.
                </p>
                <a
                  href="/drinks.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[14px] border-b border-white pb-1 mt-4 hover:text-[#A2C4AB] hover:border-[#A2C4AB] transition-colors"
                >
                  View Food Menu (PDF) →
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
                <small className="text-[#A2C4AB] text-[11px] tracking-[2px] block">03 · PACKAGES</small>
                <h3 className="font-serif text-[33px] max-lg:text-[31px] font-normal my-2">Packages</h3>
                <p className="text-white/70 text-[14px] leading-[1.7]">
                  Tailored dining packages, curated menus and special gatherings made easy.
                </p>
                <a
                  href="/party.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[14px] border-b border-white pb-1 mt-4 hover:text-[#A2C4AB] hover:border-[#A2C4AB] transition-colors"
                >
                  View Party Packages (PDF) →
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          MENU
      ========================================================= */}
      <section id="menu" className="menu py-[125px] max-lg:py-20 bg-[#FFFFFF]">
        <div className="container max-w-[1180px] w-[92%] mx-auto">
          <div className="menu-head flex flex-col lg:flex-row justify-between lg:items-end mb-11 max-lg:mb-9 gap-5">
            <div>
              <span className="eyebrow text-[#1C2D20] text-[13px] font-bold tracking-[2px] uppercase block">
                FROM OUR KITCHEN
              </span>
              <h2 className="section-title font-serif font-normal text-[clamp(46px,5vw,76px)] leading-[0.98] tracking-[-2px] mt-3">
                Good food,<br />
                <em className="text-[#1C2D20] not-italic">simply done.</em>
              </h2>
            </div>
            <p className="section-description text-[#77716A] text-[19px] max-lg:text-[16px] leading-[1.8] max-w-[350px]">
              Plates made for passing around, sharing generously and staying as long as you like.
            </p>
          </div>

          {/* Filters & Right Corner "View Menu" Button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-9 pb-3 border-b border-[#E7DED3]/60">
            {/* Filter Buttons */}
            <div className="menu-tabs flex items-center gap-2.5 overflow-x-auto pb-1 scrollbar-none">
              {menuCategories.map((cat) => {
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    style={
                      isActive
                        ? { backgroundColor: '#1C2D20', color: '#ffffff' }
                        : { backgroundColor: '#ffffff', color: '#171513', borderColor: '#E7DED3' }
                    }
                    className={`px-6 py-2.5 rounded-full text-[13px] sm:text-[14px] font-medium transition-all cursor-pointer whitespace-nowrap shrink-0 border ${
                      isActive ? 'shadow-sm font-semibold' : 'hover:border-[#1C2D20]'
                    }`}
                    onClick={() => {
                      setActiveTab(cat.id);
                      setImageStep(0);
                    }}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* View Menu Button in Right Corner above the images */}
            <div className="flex justify-end shrink-0">
              <a
                href={currentCategory.pdf}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: '#1C2D20', color: '#ffffff' }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all hover:bg-[#132016] hover:scale-105 shadow-sm"
              >
                <span>View Menu (PDF)</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* 3x3 Grid with cycling images from respective folder */}
          <div className="food-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {activeItems.map((item, index) => {
              const currentImg = categoryImages[(index + imageStep) % categoryImages.length];
              return (
                <article
                  key={`${activeTab}-${item.num}-${index}`}
                  className="food-card bg-white p-3 rounded-xl border border-[#E7DED3]/70 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="food-image relative h-[250px] sm:h-[270px] overflow-hidden rounded-lg bg-[#F6F5F2]">
                    <img
                      key={currentImg}
                      src={currentImg}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <span className="food-number absolute left-3 top-3 px-2.5 py-1 rounded-full bg-white/95 text-[#1C2D20] text-[11px] font-bold shadow-sm">
                      {item.num}
                    </span>
                  </div>
                  <div className="food-content pt-4 pb-2 px-1">
                    <div className="flex justify-between items-baseline gap-2">
                      <span className="food-name font-serif text-[22px] sm:text-[24px] text-[#171513] font-normal leading-tight">
                        {item.name}
                      </span>
                      <span className="food-price text-[#1C2D20] font-serif text-[17px] sm:text-[18px] font-medium shrink-0">
                        {item.price}
                      </span>
                    </div>
                    <p className="food-description text-[#77716A] text-[13.5px] leading-[1.6] mt-2">
                      {item.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="menu-bottom text-center mt-12">
            <a
              href={currentCategory.pdf}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1C2D20', borderColor: '#1C2D20' }}
              className="underline-link inline-block text-[14px] font-semibold border-b pb-1 hover:opacity-80 transition-opacity"
            >
              View the full {currentCategory.label} (PDF) →
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          RESERVATION CTA
      ========================================================= */}
      <CTA />


      {/* =========================================================
          EVENTS
      ========================================================= */}
      <section id="events" className="events py-[120px] max-lg:py-20 bg-[#FFFFFF]">
        <div className="container max-w-[1180px] w-[92%] mx-auto events-layout grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-[50px] lg:gap-[100px]">
          <div>
            <span className="eyebrow text-[#1C2D20] text-[13px] font-bold tracking-[2px] uppercase block">
              WHAT'S ON
            </span>
            <h2 className="section-title font-serif font-normal text-[clamp(46px,5vw,76px)] leading-[0.98] tracking-[-2px] mt-3">
              Come back<br />
              <em className="text-[#1C2D20] not-italic">for something<br />new.</em>
            </h2>
            <p className="section-description text-[#77716A] text-[19px] max-lg:text-[16px] leading-[1.8] mt-6">
              Seasonal dinners, signature menus and special occasions worth making time for.
            </p>
          </div>

          <div className="event-list border-t border-[#E7DED3]">
            {/* Event 1 */}
            <div className="event-row flex items-center justify-between gap-6 py-8 border-b border-[#E7DED3]">
              <div className="event-info max-w-[580px]">
                <h3 className="font-serif text-[28px] sm:text-[32px] font-normal leading-tight text-[#171513]">Friday at The First Floor</h3>
                <p className="text-[#77716A] text-[15px] sm:text-[16px] leading-[1.6] mt-2">An evening of delicious food, crafted cocktails and great company.</p>
              </div>
              <a href="#reservation" onClick={closeMenu} className="event-book text-[15px] font-medium border-b border-current pb-1 flex-shrink-0 hover:text-[#1C2D20] transition-colors">
                Reserve →
              </a>
            </div>

            {/* Event 2 */}
            <div className="event-row flex items-center justify-between gap-6 py-8 border-b border-[#E7DED3]">
              <div className="event-info max-w-[580px]">
                <h3 className="font-serif text-[28px] sm:text-[32px] font-normal leading-tight text-[#171513]">The First Floor Table</h3>
                <p className="text-[#77716A] text-[15px] sm:text-[16px] leading-[1.6] mt-2">A special sharing menu made for good food and even better company.</p>
              </div>
              <a href="#reservation" onClick={closeMenu} className="event-book text-[15px] font-medium border-b border-current pb-1 flex-shrink-0 hover:text-[#1C2D20] transition-colors">
                Reserve →
              </a>
            </div>

            {/* Event 3 */}
            <div className="event-row flex items-center justify-between gap-6 py-8 border-b border-[#E7DED3]">
              <div className="event-info max-w-[580px]">
                <h3 className="font-serif text-[28px] sm:text-[32px] font-normal leading-tight text-[#171513]">Slow Sundays</h3>
                <p className="text-[#77716A] text-[15px] sm:text-[16px] leading-[1.6] mt-2">Take your time, savour every bite and stay a little longer.</p>
              </div>
              <a href="#reservation" onClick={closeMenu} className="event-book text-[15px] font-medium border-b border-current pb-1 flex-shrink-0 hover:text-[#1C2D20] transition-colors">
                Reserve →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          REVIEWS & GALLERY (MERGED SECTION)
      ========================================================= */}
      <section id="gallery" className="py-[120px] max-lg:py-20 bg-[#FFFFFF]">
        <div className="container max-w-[1180px] w-[92%] mx-auto">
          {/* Single Section Header */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-6 mb-16 md:mb-20">
            <div>
              <span className="eyebrow text-[#1C2D20] text-[13px] font-bold tracking-[2px] uppercase block">
                THE FIRST FLOOR FEELING
              </span>
              <h2 className="section-title font-serif font-normal text-[clamp(46px,5vw,76px)] leading-[0.98] tracking-[-2px] mt-3">
                Made for<br />
                <em className="text-[#1C2D20] not-italic">good times.</em>
              </h2>
            </div>
            <div className="sm:text-right">
              <div className="rating text-[#1C2D20] text-[17px] tracking-[3px] mb-2 sm:justify-end flex items-center gap-2">
                <span>★★★★★</span>
                <span className="font-serif text-[18px] text-[#171513] tracking-normal font-medium">
                  4.9 / 5
                </span>
              </div>
              <p className="text-[#77716A] text-[15px] max-w-[330px]">
                Bring your people. We'll take care of the rest.
              </p>
            </div>
          </div>

          {/* Testimonial Review Cards */}
          <div className="review-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:mb-20">
            <article className="review-card bg-[#FFFFFF] border border-[#E7DED3] p-10 min-h-[300px] flex flex-col shadow-sm">
              <div className="review-stars text-[#1C2D20] text-[13px] tracking-[3px]">★★★★★</div>
              <blockquote className="font-serif text-[24px] leading-[1.5] my-7">
                “Beautiful setting, wonderful food and genuinely warm service. Palm is the kind of place you want to stay for hours.”
              </blockquote>
              <div className="review-author mt-auto text-[12px] font-bold tracking-[1px] text-[#77716A]">
                — VERIFIED GUEST
              </div>
            </article>

            <article className="review-card bg-[#FFFFFF] border border-[#E7DED3] p-10 min-h-[300px] flex flex-col shadow-sm">
              <div className="review-stars text-[#1C2D20] text-[13px] tracking-[3px]">★★★★★</div>
              <blockquote className="font-serif text-[24px] leading-[1.5] my-7">
                “Every dish felt thoughtful without being complicated. The atmosphere made the entire evening feel special.”
              </blockquote>
              <div className="review-author mt-auto text-[12px] font-bold tracking-[1px] text-[#77716A]">
                — VERIFIED GUEST
              </div>
            </article>

            <article className="review-card bg-[#FFFFFF] border border-[#E7DED3] p-10 min-h-[300px] flex flex-col shadow-sm">
              <div className="review-stars text-[#1C2D20] text-[13px] tracking-[3px]">★★★★★</div>
              <blockquote className="font-serif text-[24px] leading-[1.5] my-7">
                “A beautiful place for dinner with friends. Great food, lovely service and a room that makes you want to linger.”
              </blockquote>
              <div className="review-author mt-auto text-[12px] font-bold tracking-[1px] text-[#77716A]">
                — VERIFIED GUEST
              </div>
            </article>
          </div>
        </div>

        {/* Gap between Testimonial Cards and Image Gallery */}
        <div className="w-full h-16 sm:h-20 block" aria-hidden="true" />

        {/* Image Gallery - Continuous Auto-Scrolling Carousel (Right to Left) */}
        <div className="gallery-marquee-container w-full overflow-hidden relative">
          <div className="animate-marquee-infinite flex gap-3 sm:gap-4 md:gap-5">
            {[...galleryImages, ...galleryImages].map((imgSrc, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[240px] sm:w-[285px] md:w-[330px] aspect-[3/4] overflow-hidden group shadow-sm bg-[#F6F5F2]"
                style={{ aspectRatio: '3 / 4' }}
              >
                <img
                  src={imgSrc}
                  alt={`Palm Restaurant moment ${(index % galleryImages.length) + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* =========================================================
          LOCATION
      ========================================================= */}
      <section id="location" className="location py-[120px] max-lg:py-20">
        <div className="container max-w-[1180px] w-[92%] mx-auto location-grid grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] min-h-[500px] bg-[#1C2D20] text-white shadow-lg overflow-hidden">
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
              <em className="text-[#FFFFFF] not-italic">is waiting.</em>
            </h2>
            <p className="text-white/85 text-[16px] leading-[1.9] mt-6">
              The First Floor, One Golden Mile<br />
              Block A, Netaji Nagar<br />
              New Delhi, Delhi 110066
              <br /><br />
              <a href="tel:+919599280444" className="hover:underline">9599280444</a> | <a href="tel:+919599280666" className="hover:underline">9599280666</a><br />
              thefirstfloordelhi@gmail.com
              <br /><br />
              Open daily<br />
              12:00 PM — 11:00 PM
            </p>

            <div className="location-buttons flex flex-wrap gap-4 mt-8">
              <a
                href="https://www.google.com/maps/dir//The+First+Floor,+One+Golden+Mile,+Block+A,+Netaji+Nagar,+New+Delhi,+Delhi,+110066/@26.6882664,77.8938889,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d1dab1258837f:0xc27d1fd707643722!2m2!1d77.1858787!2d28.570659?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: '#ffffff', color: '#171513' }}
                className="hover:bg-[#171513] hover:!text-white px-5 py-3 rounded-full text-[13px] font-semibold transition-colors shadow-sm"
              >
                Get directions →
              </a>
              <a
                href="#reservation"
                onClick={closeMenu}
                style={{ backgroundColor: '#ffffff', color: '#171513' }}
                className="hover:bg-[#171513] hover:!text-white px-5 py-3 rounded-full text-[13px] font-semibold transition-colors shadow-sm"
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
      <footer className="footer bg-[#FFF9F2] text-[#171513] pt-10 sm:pt-12 pb-8 sm:pb-10 border-t border-[#E7DED3]">
        <div className="container max-w-[1240px] w-[92%] mx-auto">
          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1.1fr_1.4fr_auto] gap-x-12 gap-y-6 items-start">
            <div>
              <a
                href="#home"
                onClick={closeMenu}
                className="inline-block"
              >
                <img
                  src="/logoblack.svg"
                  alt="Palm Restaurant"
                  className="w-[140px] max-sm:w-[120px] h-auto block object-contain"
                />
              </a>
            </div>

            <div>
              <span className="block text-[11px] font-semibold tracking-[1.5px] uppercase text-[#77716A] mb-1.5">
                CONTACT US
              </span>
              <div className="text-[17px] sm:text-[19px] font-semibold text-[#171513] tracking-tight flex flex-wrap items-center gap-x-2">
                <a
                  href="tel:+919599280444"
                  className="hover:text-[#1C2D20] transition-colors whitespace-nowrap"
                >
                  9599280444
                </a>
                <span className="text-[#77716A] font-normal">|</span>
                <a
                  href="tel:+919599280666"
                  className="hover:text-[#1C2D20] transition-colors whitespace-nowrap"
                >
                  9599280666
                </a>
              </div>
            </div>

            <div>
              <span className="block text-[11px] font-semibold tracking-[1.5px] uppercase text-[#77716A] mb-1.5">
                ADDRESS
              </span>
              <a
                href="https://www.google.com/maps/dir//The+First+Floor,+One+Golden+Mile,+Block+A,+Netaji+Nagar,+New+Delhi,+Delhi,+110066/@26.6882664,77.8938889,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d1dab1258837f:0xc27d1fd707643722!2m2!1d77.1858787!2d28.570659?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] sm:text-[15px] font-medium text-[#171513] leading-[1.4] hover:text-[#1C2D20] transition-colors block max-w-[340px]"
              >
                The First Floor, One Golden Mile, Block A, Netaji Nagar, New Delhi 110066
              </a>
            </div>

            <div className="hidden lg:block w-[140px]" />
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1.1fr_1.4fr_auto] gap-x-12 gap-y-6 items-end mt-8 sm:mt-10 pt-6 border-t border-[#E7DED3]/60">
            <nav className="flex items-center flex-wrap gap-3 sm:gap-4 text-[13px] sm:text-[14px] font-medium text-[#171513]">
              <a href="#home" onClick={closeMenu} className="hover:text-[#1C2D20] transition-colors">
                Home
              </a>
              <span className="text-[#C8BFB5] select-none">/</span>
              <a href="#reservation" onClick={closeMenu} className="hover:text-[#1C2D20] transition-colors">
                Book a Table
              </a>
              <span className="text-[#C8BFB5] select-none">/</span>
              <a href="#menu" onClick={closeMenu} className="hover:text-[#1C2D20] transition-colors">
                Menu
              </a>
            </nav>

            <div>
              <span className="block text-[11px] font-semibold tracking-[1.5px] uppercase text-[#77716A] mb-1">
                EMAIL
              </span>
              <a
                href="mailto:thefirstfloordelhi@gmail.com"
                className="text-[14px] sm:text-[15px] font-medium text-[#171513] hover:text-[#1C2D20] transition-colors"
              >
                thefirstfloordelhi@gmail.com
              </a>
            </div>

            <div>
              <span className="block text-[11px] font-semibold tracking-[1.5px] uppercase text-[#77716A] mb-1">
                OPENING HOURS
              </span>
              <p className="text-[14px] sm:text-[16px] font-medium text-[#171513]">
                12pm—11pm
              </p>
            </div>

            <div className="lg:text-right pt-2 lg:pt-0">
              <span className="text-[12px] text-[#77716A] whitespace-nowrap">
                © 2026 — Copyright
              </span>
            </div>
          </div>
        </div> 
      </footer>
    </main>
  );
}
