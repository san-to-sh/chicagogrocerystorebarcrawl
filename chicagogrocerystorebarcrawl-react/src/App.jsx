import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './index.css';

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content" style={{ textAlign: 'left', marginLeft: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <h1 className="hero-title" style={{ margin: 0 }}>Chicago Grocery Store Bar Crawl</h1>
            <span className="hero-subtitle" style={{ fontSize: '2rem', fontWeight: 400, margin: 0 }}>
              Discover the city's hidden gems through local markets and craft beverages
            </span>
          </div>
          <div className="hero-buttons" style={{ justifyContent: 'flex-start', display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <Link to="/routes" className="btn btn-primary">Explore Routes</Link>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', margin: '3rem 0 0 0' }}>
            <span role="img" aria-label="beer" style={{ fontSize: '6rem' }}>🍺</span>
            <span role="img" aria-label="cart" style={{ fontSize: '6rem' }}>🛒</span>
            <span role="img" aria-label="city" style={{ fontSize: '6rem' }}>🌆</span>
          </div>
        </div>
      </section>

      {/* Next Event Section */}
      <section id="next-event" className="next-event">
        <div className="container">
          <div className="next-event-content">
            <div className="next-event-icon">🎉</div>
            <h2 className="next-event-title">Next Event Coming Soon!</h2>
            <p className="next-event-date">TBD - Sometime Before Summer Ends</p>
            <p className="next-event-description">Get ready for another amazing Chicago Grocery Store Bar Crawl adventure! We're planning something special to close out the summer in style.</p>
            <div className="next-event-actions">
              <Link to="/contact" className="btn btn-primary">Get Notified</Link>
              <Link to="/routes" className="btn btn-secondary">View Routes</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Our Unique Experience</h2>
          <div className="about-content">
            <div className="about-text">
              <p>Welcome to the Chicago Grocery Store Bar Crawl - where we combine the best of local markets with craft beverages to create an unforgettable urban adventure. Our curated routes take you through Chicago's most vibrant neighborhoods, stopping at unique grocery stores, specialty markets, and local bars.</p>
              <p>This event was born when a few friends at work came up with this idea during a casual lunch break. What started as a joke about combining grocery shopping with bar hopping quickly evolved into a unique way to explore Chicago's diverse neighborhoods and support local businesses.</p>
              <p>Each location has been carefully selected to showcase the diversity and character of Chicago's food and drink scene. From artisanal cheese shops to craft beer havens, you'll experience the city like never before.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function About() {
  return (
    <main>
      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Our Experience</h2>
              <p>Welcome to the Chicago Grocery Store Bar Crawl - where we combine the best of local markets with craft beverages to create an unforgettable urban adventure. Our curated routes take you through Chicago's most vibrant neighborhoods, stopping at unique grocery stores, specialty markets, and local bars.</p>
              <p>Each location has been carefully selected to showcase the diversity and character of Chicago's food and drink scene. From artisanal cheese shops to craft beer havens, you'll experience the city like never before.</p>
              <p>What started as a joke among a few friends at work about combining grocery shopping with bar hopping quickly evolved into a unique way to explore Chicago's diverse neighborhoods and support local businesses.</p>
              <h3>Why Grocery Stores & Bars?</h3>
              <p>We believe that the best way to experience a city's culture is through its food and drink. Grocery stores and markets offer a window into local life, while bars and breweries showcase the community's creativity and craftsmanship. By combining both, we create a unique experience that's both educational and entertaining.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Event Section */}
      <section className="next-event">
        <div className="container">
          <div className="next-event-content">
            <div className="next-event-icon">🎉</div>
            <h2 className="next-event-title">Join Our Next Adventure!</h2>
            <p className="next-event-date">TBD - Sometime Before Summer Ends</p>
            <p className="next-event-description">We're planning our next Chicago Grocery Store Bar Crawl to close out the summer in style. Don't miss out on this unique opportunity to explore the city with fellow food and drink enthusiasts!</p>
            <div className="next-event-actions">
              <Link to="/contact" className="btn btn-primary">Get Notified</Link>
              <Link to="/routes" className="btn btn-secondary">View Routes</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function RoutesPage() {
  // Example static data for routes (replace with real data or fetch from API if needed)
  const routes = [
    {
      id: 'main-route',
      name: 'The OG Grocery Store Bar Crawl',
      description: 'Start at Jewel at Clark/Division, Whole Foods or Mariano’s at North/Clybourn, Mariano’s on Broadway, and end at Shakers on Clark.',
      stops: [
        'Jewel at Clark/Division',
        'Whole Foods or Mariano’s at North/Clybourn',
        'Mariano’s on Broadway',
        'Shakers on Clark (End)' 
      ],
      duration: '4-5 hours',
      distance: '3.5 miles',
      bestFor: 'Foodies & Local Culture',
      icon: '🍺🛒🌆',
    },
  ];
  return (
    <main>
      {/* Routes Section */}
      <section className="routes">
        <div className="container">
          <div style={{ marginTop: '3rem', marginBottom: '2rem', textAlign: 'center' }}>
            <h2 style={{ fontWeight: 700, fontSize: '2rem', color: '#fff', marginBottom: '0.5rem' }}>
              Ready for the OG Grocery Store Bar Crawl?
            </h2>
            <div style={{ fontSize: '1.2rem', color: '#ccc' }}>Here’s the route:</div>
          </div>
          {/* The rest of the route roadmap and details remain here */}
         <div className="route-card" style={{ maxWidth: '700px', margin: '0 auto' }}>
           <div className="route-image" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '3rem', marginBottom: '1rem' }}>
             <span role="img" aria-label="route-icon">🍺🛒🌆</span>
           </div>
           <div className="route-content">
             <h3>The OG Grocery Store Bar Crawl</h3>
             <div style={{ margin: '1rem 0', fontSize: '1.1rem' }}>
               <span role="img" aria-label="map">🗺️</span> <b>Route:</b>
             </div>
             <div className="roadmap" style={{ width: '100%', margin: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
               {/* Winding SVG Roadmap with Pins */}
               <svg viewBox="0 0 800 220" width="100%" height="220" style={{ maxWidth: '700px', display: 'block' }}>
                 {/* Winding road path */}
                 <path d="M 20 200 Q 200 100 400 180 Q 600 260 780 60" fill="none" stroke="#232b3d" strokeWidth="28" strokeLinecap="round" />
                 <path d="M 20 200 Q 200 100 400 180 Q 600 260 780 60" fill="none" stroke="#fff" strokeWidth="6" strokeDasharray="30 18" />
                 {/* Pins with emojis below the number */}
                 <g>
                   <g>
                     {/* Location pin icon */}
                     <path d="M60 156c-13 0-24 10-24 23 0 13 24 41 24 41s24-28 24-41c0-13-11-23-24-23zm0 32a9 9 0 1 1 0-18 9 9 0 0 1 0 18z" fill="#ffa94d" />
                     <text x="60" y="175" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">1</text>
                   </g>
                   <g>
                     <path d="M260 96c-13 0-24 10-24 23 0 13 24 41 24 41s24-28 24-41c0-13-11-23-24-23zm0 32a9 9 0 1 1 0-18 9 9 0 0 1 0 18z" fill="#ffa94d" />
                     <text x="260" y="115" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">2</text>
                   </g>
                   <g>
                     <path d="M480 156c-13 0-24 10-24 23 0 13 24 41 24 41s24-28 24-41c0-13-11-23-24-23zm0 32a9 9 0 1 1 0-18 9 9 0 0 1 0 18z" fill="#ffa94d" />
                     <text x="480" y="175" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">3</text>
                   </g>
                   <g>
                     <path d="M700 56c-13 0-24 10-24 23 0 13 24 41 24 41s24-28 24-41c0-13-11-23-24-23zm0 32a9 9 0 1 1 0-18 9 9 0 0 1 0 18z" fill="#ffa94d" />
                     <text x="700" y="75" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">4</text>
                   </g>
                 </g>
               </svg>
               {/* Stop labels */}
               <div style={{ width: '100%', maxWidth: '700px', margin: '1rem auto 0', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', color: '#ffa94d', fontSize: '1.1rem' }}>
                 <div style={{ width: '25%', textAlign: 'center' }}>
                   Jewel at Clark/Division
                   <div style={{ fontSize: '2rem', marginTop: '0.25rem' }}>🏪</div>
                 </div>
                 <div style={{ width: '25%', textAlign: 'center' }}>
                   Whole Foods or Mariano’s at North/Clybourn
                   <div style={{ fontSize: '2rem', marginTop: '0.25rem' }}>🥗</div>
                 </div>
                 <div style={{ width: '25%', textAlign: 'center' }}>
                   Mariano’s on Broadway
                   <div style={{ fontSize: '2rem', marginTop: '0.25rem' }}>🧀</div>
                 </div>
                 <div style={{ width: '25%', textAlign: 'center' }}>
                   Shakers on Clark (End)
                   <div style={{ fontSize: '2rem', marginTop: '0.25rem' }}>🎤</div>
                 </div>
               </div>
             </div>
             <div style={{ margin: '0.5rem 0', fontSize: '1.1rem' }}>
               <span><span role="img" aria-label="duration">⏱️</span> <b>Duration:</b> 4-5 hours</span>
               <span><span role="img" aria-label="distance">📏</span> <b>Distance:</b> 3.5 miles</span>
             </div>
             <div style={{ margin: '0.5rem 0', fontSize: '1.1rem' }}>
               <span><span role="img" aria-label="best-for">⭐</span> <b>Best For:</b> Foodies & Local Culture</span>
             </div>
           </div>
         </div>
        </div>
      </section>
    </main>
  );
}

function Gallery() {
  return (
    <main>
      <section className="gallery-combined-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '70vh', textAlign: 'center' }}>
        <div>
          <h1 className="hero-title">Gallery</h1>
          <div style={{ fontSize: '3rem', margin: '1.5rem 0' }}>👀</div>
          <h2 className="funny-note-title">Coming Soon!</h2>
          <p className="funny-note-text">Keep an eye on this space for moments from grocery store bar crawl! 🍺🛒</p>
        </div>
      </section>
    </main>
  );
}

function Contact() {
  return (
    <main>
      <section className="funny-contact-section" style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '5rem 0', textAlign: 'center' }}>
        <div>
          <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🤙</div>
          <h2 className="funny-contact-title" style={{ marginBottom: '1.2rem', fontSize: '2.5rem' }}>Cool People Only</h2>
          <p className="funny-contact-text" style={{ marginBottom: '1rem', fontSize: '1.4rem' }}>We'll contact you if you're cool! 🍺🛒</p>
          <p className="funny-contact-subtext" style={{ fontSize: '1.1rem', color: '#ccc' }}>(No promises, but we have pretty good taste in people)</p>
        </div>
      </section>
    </main>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Chicago Grocery Store Bar Crawl</h2>
        </div>
        <ul className="nav-menu">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
          <li className="nav-item"><Link to="/routes" className="nav-link">Routes</Link></li>
          <li className="nav-item"><Link to="/gallery" className="nav-link">Gallery</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Chicago Grocery Store Bar Crawl</h3>
            <p>Discovering Chicago one market and bar at a time.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/routes">Routes</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Chicago Grocery Store Bar Crawl. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  React.useEffect(() => {
    document.body.className = 'dark-theme';
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/routes" element={<RoutesPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
