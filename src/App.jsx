import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Lazy-loaded components for better performance
const Nav = lazy(() => import('./components/Nav'));
const Header = lazy(() => import('./components/Header'));
const About = lazy(() => import('./components/About'));
const ServicesDesc = lazy(() => import('./components/ServicesDesc'));
const Rooms = lazy(() => import('./components/Rooms'));
const Amenities = lazy(() => import('./components/Amenities'));
const Founders = lazy(() => import('./components/Founders'));
const Footer = lazy(() => import('./components/Footer'));
const BookNow = lazy(() => import('./components/BookNow'));
const PaymentReview = lazy(() => import('./components/PaymentReview'));

function Layout() {
  const location = useLocation(); // Get the current URL

  return (
    <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px' }}>Your website is being loaded,Please wait...</div>}>
      {/* Hide Navbar on /book and /payment pages */}
      {!['/book', '/payment'].includes(location.pathname) && <Nav />}

      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <About />
            <ServicesDesc />
            <Rooms />
            <Amenities />
            <Founders />
            <Footer />
          </>
        } />
        {/* <Route path="/home" element={<Header />} /> */}
        <Route path="/book" element={<BookNow />} />
        <Route path="/payment" element={<PaymentReview />} />
      </Routes>
    </Suspense>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
