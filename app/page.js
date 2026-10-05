'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reservationSent, setReservationSent] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function submitReservation(event) {
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
    <main className={menuOpen ? 'menu-open' : ''}>



      {/* =========================================================
     TOP BAR
========================================================= */}

      <div className="top-bar">

        <div className="top-bar-inner">

          <span>
            SAINIK FARMS · NEW DELHI
          </span>

          <span>
            +91 92892 22302 &nbsp; · &nbsp; OPEN DAILY 12PM — 11PM
          </span>

        </div>

      </div>


      {/* =========================================================
     HEADER
========================================================= */}

      <header className={`header ${scrolled ? "scrolled" : ""}`} id="header">

        <div className="header-inner">



          <a href="#home" className="logo" style={{ width: '300px', height: 'auto' }}>
            <img src={scrolled ? "/logo-dark.png" : "/logo-light.png"} alt="Palm Restaurant" className="logo-img" style={{ display: 'block' }} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
            <span style={{ display: 'none' }}>
              palm
              <small>RESTAURANT</small>
            </span>
          </a>



          <nav className={`navigation ${menuOpen ? "mobile-open" : ""}`} id="navigation">

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#menu" onClick={closeMenu}>
              Menu
            </a>

            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>

            <a href="#events" onClick={closeMenu}>
              What's On
            </a>

            <a href="#gallery" onClick={closeMenu}>
              Moments
            </a>

            <a href="#location" onClick={closeMenu}>
              Visit
            </a>

            <a href="#reservation" onClick={closeMenu} className="nav-button">
              Book a table →
            </a>

          </nav>


          <div
            className="mobile-menu"
            id="mobileMenu" onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
            aria-expanded="false"
          >
            ☰
          </div>

        </div>

      </header>


      {/* =========================================================
     HERO
========================================================= */}

      <section className="hero" id="home">


        <div className="hero-image" style={{ backgroundImage: 'url("/photos/DSC04897.JPG")', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }}>

        </div>


        <div className="hero-overlay"></div>


        <div className="hero-content">

          <span className="eyebrow">
            WELCOME TO PALM · NEW DELHI
          </span>


          <h1>

            For the <em>pleasure</em><br />

            of a good table.

          </h1>


          <p className="hero-text">

            Palm brings people together over seasonal plates,
            bright drinks and the sort of dinner that keeps
            unfolding long after the first course.

          </p>


          <div className="hero-buttons">

            <a
              href="#reservation" onClick={closeMenu}
              className="red-button"
            >
              Reserve your table →
            </a>


            <a
              href="#menu" onClick={closeMenu}
              className="hero-menu-link"
            >
              Explore the menu
            </a>

          </div>

        </div>


        <div className="hero-booking">

          <small>
            YOUR TABLE AWAITS
          </small>


          <strong>

            Make an evening<br />

            <em>of it.</em>

          </strong>


          <div className="booking-row">

            <span>
              Guests
            </span>

            <span>
              2 Guests
            </span>

          </div>


          <div className="booking-row">

            <span>
              Date
            </span>

            <span>
              Select date
            </span>

          </div>


          <div className="booking-row">

            <span>
              Time
            </span>

            <span>
              7:30 PM
            </span>

          </div>


          <a
            href="#reservation" onClick={closeMenu}
            className="booking-link"
          >
            BOOK YOUR TABLE →
          </a>

        </div>

      </section>


      {/* =========================================================
     FEATURES
========================================================= */}

      <section className="features">

        <div className="container features-grid">


          <div className="feature">

            <div className="feature-icon">
              ✦
            </div>

            <h3>
              Seasonal Plates
            </h3>

            <p>
              Fresh ingredients and thoughtful cooking.
            </p>

          </div>


          <div className="feature">

            <div className="feature-icon">
              ♡
            </div>

            <h3>
              Warm Service
            </h3>

            <p>
              Easy hospitality from the moment you arrive.
            </p>

          </div>


          <div className="feature">

            <div className="feature-icon">
              —
            </div>

            <h3>
              Private Dining
            </h3>

            <p>
              Spaces made for celebrations and gatherings.
            </p>

          </div>


          <div className="feature">

            <div className="feature-icon">
              ◌
            </div>

            <h3>
              Open Late
            </h3>

            <p>
              Come for dinner. Stay for another drink.
            </p>

          </div>


        </div>

      </section>


      {/* =========================================================
     ABOUT
========================================================= */}

      <section className="about" id="about">

        <div className="container about-grid">


          <div className="about-images">


            <img
              className="about-main"
              src="/photos/DSC09996.JPG"
              alt="Palm dining"
              loading="lazy"
            />


            <img
              className="about-small"
              src="/photos/DSC00085.JPG"
              alt="Palm food"
              loading="lazy"
            />


            <div className="about-circle">

              A LITTLE<br />
              MORE<br />
              PALM

            </div>


          </div>


          <div className="about-content">

            <span className="eyebrow">
              OUR POINT OF VIEW
            </span>


            <h2 className="section-title">

              Come hungry.<br />

              <em>Leave happier.</em>

            </h2>


            <p className="section-description">

              We believe a restaurant should make every ordinary
              life feel like an occasion. At Palm, you can drop
              in for a long lunch, settle into dinner, or linger
              with your favourite people.

            </p>


            <p className="section-description">

              Our kitchen keeps things generous and ingredient-led.
              The rest is a little music, a warm room and something
              good in your glass.

            </p>


            <a
              href="#reservation" onClick={closeMenu}
              className="underline-link"
            >
              Make a reservation →
            </a>

          </div>

        </div>

      </section>


      {/* =========================================================
     STATS
========================================================= */}

      <section className="stats">

        <div className="container stats-grid">


          <div className="stat">

            <strong>
              2026
            </strong>

            <small>
              ESTABLISHED
            </small>

          </div>


          <div className="stat">

            <strong>
              4.9<span>★</span>
            </strong>

            <small>
              GUEST RATING
            </small>

          </div>


          <div className="stat">

            <strong>
              7
            </strong>

            <small>
              DAYS A WEEK
            </small>

          </div>


          <div className="stat">

            <strong>
              ∞
            </strong>

            <small>
              GOOD TIMES
            </small>

          </div>


        </div>

      </section>


      {/* =========================================================
     EXPERIENCE
========================================================= */}

      <section
        className="experience"
        id="experience"
      >

        <div className="container">


          <div className="experience-head">


            <div>

              <span className="eyebrow">
                THE PALM EXPERIENCE
              </span>


              <h2 className="section-title">

                More than<br />

                <em>a meal.</em>

              </h2>

            </div>


            <p className="section-description">

              From relaxed lunches to late-night celebrations,
              Palm is made for moments worth staying for.

            </p>


          </div>


          <div className="experience-grid">


            <article className="experience-card">

              <img
                src="/photos/DSC04826.JPG"
                alt="Palm dining experience"
                loading="lazy"
              />


              <div className="experience-content">

                <small>
                  01 · DINING
                </small>

                <h3>
                  Everyday Dining
                </h3>

                <p>
                  Come for lunch, dinner or something good
                  in your glass.
                </p>

                <a href="#reservation" onClick={closeMenu}>
                  Reserve a table →
                </a>

              </div>

            </article>


            <article className="experience-card">

              <img
                src="/photos/DSC04832.JPG"
                alt="Private dining"
                loading="lazy"
              />


              <div className="experience-content">

                <small>
                  02 · PRIVATE DINING
                </small>

                <h3>
                  Private Tables
                </h3>

                <p>
                  An intimate setting for special evenings.
                </p>

                <a href="#reservation" onClick={closeMenu}>
                  Enquire now →
                </a>

              </div>

            </article>


            <article className="experience-card">

              <img
                src="/photos/DSC00103.JPG"
                alt="Restaurant celebration"
                loading="lazy"
              />


              <div className="experience-content">

                <small>
                  03 · CELEBRATIONS
                </small>

                <h3>
                  Good Times
                </h3>

                <p>
                  Birthdays, dinners and evenings to remember.
                </p>

                <a href="#reservation" onClick={closeMenu}>
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

      <section
        className="menu"
        id="menu"
      >

        <div className="container">


          <div className="menu-head">


            <div>

              <span className="eyebrow">
                FROM OUR KITCHEN
              </span>


              <h2 className="section-title">

                Good food,<br />

                <em>simply done.</em>

              </h2>

            </div>


            <p className="section-description">

              Plates made for passing around, sharing generously
              and staying as long as you like.

            </p>


          </div>


          <div className="menu-tabs">

            <button type="button" className={`menu-tab ${activeTab === "all" ? "active" : ""}`} onClick={() => setActiveTab("all")}>
              All
            </button>

            <button type="button" className={`menu-tab ${activeTab === "small" ? "active" : ""}`} onClick={() => setActiveTab("small")}>
              Small Plates
            </button>

            <button type="button" className={`menu-tab ${activeTab === "mains" ? "active" : ""}`} onClick={() => setActiveTab("mains")}>
              Mains
            </button>

            <button type="button" className={`menu-tab ${activeTab === "grill" ? "active" : ""}`} onClick={() => setActiveTab("grill")}>
              Grill
            </button>

            <button type="button" className={`menu-tab ${activeTab === "drinks" ? "active" : ""}`} onClick={() => setActiveTab("drinks")}>
              Drinks
            </button>

            <button type="button" className={`menu-tab ${activeTab === "desserts" ? "active" : ""}`} onClick={() => setActiveTab("desserts")}>
              Desserts
            </button>

          </div>


          <div className="food-grid">


            <article
              className="food-card"
              data-category="small"
            >

              <div className="food-image">

                <img
                  src="/photos/DSC00077.JPG"
                  alt="Palm Burrata"
                  loading="lazy"
                />

                <span className="food-number">
                  01
                </span>

              </div>


              <div className="food-content">

                <span className="food-name">
                  Palm Burrata
                </span>

                <span className="food-price">
                  ₹1,050
                </span>

                <p className="food-description">
                  Heirloom tomato, basil oil & sourdough
                </p>

              </div>

            </article>


            <article
              className="food-card"
              data-category="mains"
            >

              <div className="food-image">

                <img
                  src="/photos/DSC00063.JPG"
                  alt="Charred market fish"
                  loading="lazy"
                />

                <span className="food-number">
                  02
                </span>

              </div>


              <div className="food-content">

                <span className="food-name">
                  Charred Market Fish
                </span>

                <span className="food-price">
                  ₹1,450
                </span>

                <p className="food-description">
                  Seasonal greens, citrus & brown butter
                </p>

              </div>

            </article>


            <article
              className="food-card"
              data-category="mains"
            >

              <div className="food-image">

                <img
                  src="/photos/DSC00088.JPG"
                  alt="Harissa chicken"
                  loading="lazy"
                />

                <span className="food-number">
                  03
                </span>

              </div>


              <div className="food-content">

                <span className="food-name">
                  Harissa Chicken
                </span>

                <span className="food-price">
                  ₹1,150
                </span>

                <p className="food-description">
                  Labneh, smoked chilli & summer herbs
                </p>

              </div>

            </article>


            <article
              className="food-card"
              data-category="mains"
            >

              <div className="food-image">

                <img
                  src="/photos/DSC00089.JPG"
                  alt="Seasonal pasta"
                  loading="lazy"
                />

                <span className="food-number">
                  04
                </span>

              </div>


              <div className="food-content">

                <span className="food-name">
                  Seasonal Pasta
                </span>

                <span className="food-price">
                  ₹1,250
                </span>

                <p className="food-description">
                  Fresh herbs, parmesan & seasonal vegetables
                </p>

              </div>

            </article>


            <article
              className="food-card"
              data-category="grill"
            >

              <div className="food-image">

                <img
                  src="/photos/DSC00062.JPG"
                  alt="Palm grill"
                  loading="lazy"
                />

                <span className="food-number">
                  05
                </span>

              </div>


              <div className="food-content">

                <span className="food-name">
                  Palm Grill
                </span>

                <span className="food-price">
                  ₹1,650
                </span>

                <p className="food-description">
                  Charred vegetables, herbs & house sauce
                </p>

              </div>

            </article>


            <article
              className="food-card"
              data-category="desserts"
            >

              <div className="food-image">

                <img
                  src="/photos/DSC00076.JPG"
                  alt="Palm dessert"
                  loading="lazy"
                />

                <span className="food-number">
                  06
                </span>

              </div>


              <div className="food-content">

                <span className="food-name">
                  Palm Dessert
                </span>

                <span className="food-price">
                  ₹650
                </span>

                <p className="food-description">
                  Seasonal fruit, cream & toasted crumble
                </p>

              </div>

            </article>


          </div>


          <div className="menu-bottom">

            <a
              href="#reservation" onClick={closeMenu}
              className="underline-link"
            >
              View the full Palm menu →
            </a>

          </div>

        </div>

      </section>


      {/* =========================================================
     SPECIAL OFFER
========================================================= */}

      <section className="special">


        <div className="special-image">

          <img
            src="/photos/DSC00116.JPG"
            alt="Special Palm dinner"
            loading="lazy"
          />

        </div>


        <div className="special-content">

          <span className="eyebrow">
            THIS WEEK AT PALM
          </span>


          <h2>

            An evening<br />

            <em>worth remembering.</em>

          </h2>


          <p>

            Join us for a seasonal sharing menu,
            carefully selected drinks and an evening
            made for taking your time.

          </p>


          <div className="special-details">


            <div className="special-detail">

              <strong>
                ₹2,950
              </strong>

              <span>
                PER PERSON
              </span>

            </div>


            <div className="special-detail">

              <strong>
                5
              </strong>

              <span>
                COURSES
              </span>

            </div>


            <div className="special-detail">

              <strong>
                FRI–SUN
              </strong>

              <span>
                EVENINGS
              </span>

            </div>


          </div>


          <a
            href="#reservation" onClick={closeMenu}
            className="dark-button"
          >
            Reserve this experience →
          </a>

        </div>

      </section>


      {/* =========================================================
     EVENTS
========================================================= */}

      <section
        className="events"
        id="events"
      >

        <div className="container events-layout">


          <div>

            <span className="eyebrow">
              WHAT'S ON
            </span>


            <h2 className="section-title">

              Come back<br />

              <em>for something new.</em>

            </h2>


            <p
              className="section-description"
              style={{ marginTop: '25px' }}
            >

              Seasonal dinners, special menus and occasions
              worth putting in your calendar.

            </p>

          </div>


          <div className="event-list">


            <div className="event-row">


              <div className="event-date">

                <small>
                  AUG
                </small>

                <strong>
                  29
                </strong>

              </div>


              <div className="event-info">

                <small>
                  FRIDAY · DINNER
                </small>

                <h3>
                  Friday at Palm
                </h3>

                <p>
                  Seasonal plates, cocktails and good company.
                </p>

              </div>


              <a
                href="#reservation" onClick={closeMenu}
                className="event-book"
              >
                Reserve →
              </a>


            </div>


            <div className="event-row">


              <div className="event-date">

                <small>
                  AUG
                </small>

                <strong>
                  30
                </strong>

              </div>


              <div className="event-info">

                <small>
                  SATURDAY · SPECIAL MENU
                </small>

                <h3>
                  The Palm Table
                </h3>

                <p>
                  A special sharing menu for the weekend.
                </p>

              </div>


              <a
                href="#reservation" onClick={closeMenu}
                className="event-book"
              >
                Reserve →
              </a>


            </div>


            <div className="event-row">


              <div className="event-date">

                <small>
                  AUG
                </small>

                <strong>
                  31
                </strong>

              </div>


              <div className="event-info">

                <small>
                  SUNDAY · LONG LUNCH
                </small>

                <h3>
                  Sunday at Palm
                </h3>

                <p>
                  Order generously. Stay as long as you like.
                </p>

              </div>


              <a
                href="#reservation" onClick={closeMenu}
                className="event-book"
              >
                Reserve →
              </a>


            </div>


          </div>

        </div>

      </section>


      {/* =========================================================
     KITCHEN
========================================================= */}

      <section className="kitchen">


        <div className="kitchen-image">

          <img
            src="/photos/DSC04833.JPG"
            alt="Palm chef"
            loading="lazy"
          />


          <div className="kitchen-badge">

            FROM<br />
            THE<br />
            KITCHEN

          </div>

        </div>


        <div className="kitchen-content">


          <span className="eyebrow">
            THE PEOPLE BEHIND PALM
          </span>


          <h2 className="section-title">

            Simple food.<br />

            <em>Serious attention.</em>

          </h2>


          <p>

            Our kitchen is built around good ingredients,
            confident cooking and food that doesn't need
            to shout to be memorable.

          </p>


          <div className="kitchen-points">


            <div className="kitchen-point">

              <strong>
                01
              </strong>

              <span>
                FRESH INGREDIENTS
              </span>

            </div>


            <div className="kitchen-point">

              <strong>
                02
              </strong>

              <span>
                SEASONAL MENUS
              </span>

            </div>


            <div className="kitchen-point">

              <strong>
                03
              </strong>

              <span>
                MADE TO SHARE
              </span>

            </div>


          </div>

        </div>

      </section>


      {/* =========================================================
     GALLERY
========================================================= */}

      <section
        className="gallery"
        id="gallery"
      >


        <div className="gallery-head">


          <div>

            <span className="eyebrow">
              THE PALM MOOD
            </span>


            <h2 className="section-title">

              Made for<br />

              <em>good times.</em>

            </h2>

          </div>


          <p>

            Bring your people. We'll take care
            of the rest.

          </p>

        </div>


        <div className="gallery-grid">


          <div className="gallery-item"><img src="/photos/DSC04827.JPG" alt="Palm meal" loading="lazy" /></div>


          <div className="gallery-item"><img src="/photos/DSC04898.JPG" alt="Restaurant table" loading="lazy" /></div>


          <div className="gallery-item"><img src="/photos/DSC09964.JPG" alt="Pasta" loading="lazy" /></div>


          <div className="gallery-item"><img src="/photos/DSC09993.JPG" alt="Dining room" loading="lazy" /></div>


        </div>

      </section>


      {/* =========================================================
     REVIEWS
========================================================= */}

      <section className="reviews">


        <div className="container">


          <div className="reviews-head">


            <span className="eyebrow">
              FROM OUR GUESTS
            </span>


            <h2 className="section-title">

              Don't just take<br />

              <em>our word for it.</em>

            </h2>


            <div className="rating">

              ★★★★★

              <span className="rating-number">
                4.9 / 5
              </span>

            </div>


          </div>


          <div className="review-grid">


            <article className="review-card">


              <div className="review-stars">
                ★★★★★
              </div>


              <blockquote>

                “Beautiful setting, wonderful food and
                genuinely warm service. Palm is the kind
                of place you want to stay for hours.”

              </blockquote>


              <div className="review-author">
                — VERIFIED GUEST
              </div>


            </article>


            <article className="review-card">


              <div className="review-stars">
                ★★★★★
              </div>


              <blockquote>

                “Every dish felt thoughtful without being
                complicated. The atmosphere made the
                entire evening feel special.”

              </blockquote>


              <div className="review-author">
                — VERIFIED GUEST
              </div>


            </article>


            <article className="review-card">


              <div className="review-stars">
                ★★★★★
              </div>


              <blockquote>

                “A beautiful place for dinner with friends.
                Great food, lovely service and a room that
                makes you want to linger.”

              </blockquote>


              <div className="review-author">
                — VERIFIED GUEST
              </div>


            </article>


          </div>

        </div>

      </section>


      {/* =========================================================
     RESERVATION
========================================================= */}

      <section
        className="reservation"
        id="reservation"
      >


        <div className="container reservation-grid">


          <div className="reservation-copy">


            <span className="eyebrow">
              YOUR TABLE AWAITS
            </span>


            <h2 className="section-title">

              Make an<br />

              <em>evening of it.</em>

            </h2>


            <p>

              Tell us when you're coming and we'll
              take care of the rest.

            </p>


            <div className="reservation-info">


              <strong>
                OPEN DAILY
              </strong>

              <span>
                12 PM — 11 PM
              </span>


              <strong>
                CALL
              </strong>

              <span>
                +91 92892 22302
              </span>


              <strong>
                LOCATION
              </strong>

              <span>
                Sainik Farms, New Delhi
              </span>


            </div>


          </div>


          <form
            className="reservation-form"
            id="reservationForm"
            onsubmit="sendWhatsApp(event)"
          >


            <div className="form-row">


              <div className="form-field">

                <label for="guestName">
                  YOUR NAME
                </label>

                <input
                  id="guestName"
                  type="text"
                  placeholder="Full name"
                  required
                />

              </div>


              <div className="form-field">

                <label for="guestPhone">
                  MOBILE
                </label>

                <input
                  id="guestPhone"
                  type="tel"
                  placeholder="+91"
                  required
                />

              </div>


            </div>


            <div className="form-row">


              <div className="form-field">

                <label for="guestDate">
                  DATE
                </label>

                <input
                  id="guestDate"
                  type="date"
                  required
                />

              </div>


              <div className="form-field">

                <label for="guestTime">
                  TIME
                </label>

                <input
                  id="guestTime"
                  type="time"
                  required
                />

              </div>


            </div>


            <div className="form-row">


              <div className="form-field">

                <label for="guestCount">
                  GUESTS
                </label>

                <select id="guestCount">

                  <option>
                    2 Guests
                  </option>

                  <option>
                    3 Guests
                  </option>

                  <option>
                    4 Guests
                  </option>

                  <option>
                    5 Guests
                  </option>

                  <option>
                    6+ Guests
                  </option>

                </select>

              </div>


              <div className="form-field">

                <label for="occasion">
                  OCCASION
                </label>

                <select id="occasion">

                  <option>
                    Dinner
                  </option>

                  <option>
                    Birthday
                  </option>

                  <option>
                    Date Night
                  </option>

                  <option>
                    Business Dinner
                  </option>

                  <option>
                    Celebration
                  </option>

                </select>

              </div>


            </div>


            <div className="form-field form-full">

              <label for="specialRequest">
                SPECIAL REQUEST
              </label>

              <textarea
                id="specialRequest"
                placeholder="Dietary requirements or anything else we should know..."
              ></textarea>

            </div>


            <button
              type="submit"
              className="red-button form-submit"
            >
              Continue on WhatsApp →
            </button>


          </form>

        </div>

      </section>


      {/* =========================================================
     LOCATION
========================================================= */}

      <section
        className="location"
        id="location"
      >


        <div className="container location-grid">



          <div className="location-image" style={{ padding: 0, position: 'relative', overflow: 'hidden' }}>
            <iframe title="Google Map for Sainik Farms, New Delhi" width="100%" height="100%" style={{ border: 0, position: 'absolute', top: 0, left: 0 }} loading="lazy" allowFullScreen src="https://www.google.com/maps?q=Sainik+Farms,+New+Delhi&output=embed"></iframe>
          </div>



          <div className="location-content">


            <span className="eyebrow">
              COME FIND US
            </span>


            <h2 className="section-title">

              Your table<br />

              <em>is waiting.</em>

            </h2>


            <p>

              Sainik Farms<br />
              New Delhi, India

              <br /><br />

              +91 92892 22302<br />
              thepalm192@gmail.com

              <br /><br />

              Open daily<br />
              12:00 PM — 11:00 PM

            </p>


            <div className="location-buttons">


              <a
                href="https://www.google.com/maps/search/?api=1&query=Sainik+Farms+New+Delhi"
                target="_blank"
                rel="noopener"
              >
                Get directions →
              </a>


              <a href="#reservation" onClick={closeMenu}>
                Book a table →
              </a>


            </div>


          </div>


        </div>

      </section>


      {/* =========================================================
     FINAL CTA
========================================================= */}

      <section className="final-cta">


        <div className="container">


          <span className="eyebrow">
            THE PALM
          </span>


          <h2>

            Come hungry.<br />

            <em>Leave happier.</em>

          </h2>


          <p>

            Good food, generous tables and evenings
            that are better when shared.

          </p>


          <a
            href="#reservation" onClick={closeMenu}
            className="red-button"
          >
            Reserve your table →
          </a>


        </div>

      </section>


      {/* =========================================================
     FOOTER
========================================================= */}

      <footer className="footer">


        <div className="container">


          <div className="footer-grid">


            <div>

              <div className="footer-logo">
                <img src="/logo-light.png" alt="Palm Restaurant Logo" style={{ width: '250px', height: 'auto', display: 'block' }} />
              </div>


              <p className="footer-description">

                Seasonal plates, long evenings and
                always-warm hospitality in New Delhi.

              </p>

            </div>


            <div>

              <h4>
                EXPLORE
              </h4>

              <a href="#about" onClick={closeMenu}>
                About
              </a>

              <a href="#menu" onClick={closeMenu}>
                Menu
              </a>

              <a href="#experience" onClick={closeMenu}>
                Experience
              </a>

              <a href="#events" onClick={closeMenu}>
                What's On
              </a>

            </div>


            <div>

              <h4>
                FIND US
              </h4>

              <a href="#location" onClick={closeMenu}>
                Sainik Farms
              </a>

              <a href="tel:+919289222302">
                +91 92892 22302
              </a>

              <a href="mailto:thepalm192@gmail.com">
                Email us
              </a>

            </div>


            <div>

              <h4>
                FOLLOW
              </h4>

              <a href="#">
                Instagram
              </a>

              <a href="#">
                Facebook
              </a>

              <a href="#">
                Google
              </a>

            </div>


          </div>


          <div className="footer-bottom">

            <span>
              © 2026 PALM RESTAURANT
            </span>

            <span>
              Made for good times.
            </span>

          </div>


        </div>

      </footer>


      {/* =========================================================
     JAVASCRIPT
========================================================= */}





    </main>
  );
}
