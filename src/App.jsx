import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import ServicesDesc from './components/ServicesDesc';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Employees from './components/Employees';
import Footer from './components/Footer';
import BookNow from './components/BookNow';
import PaymentReview from './components/PaymentReview';



function Layout() {
  const location = useLocation(); // Get the current page URL

  return (
    <>
      {/* Hide Navbar on /book and /payment pages */}
      {location.pathname !== '/book' && location.pathname !== '/payment' && <Nav />}

      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <About />
            <ServicesDesc />
            <Rooms />
            <Amenities />
            <Employees />
            <Footer />
          </>
        } />

        <Route path="/book" element={<BookNow />} />
        <Route path="/payment" element={<PaymentReview />} />
      </Routes>
    </>
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
