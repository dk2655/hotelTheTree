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

function Layout() {
  const location = useLocation(); // Get the current page URL

  return (
    <>
      {/* Hide Navbar only on /book page */}
      {location.pathname !== '/book' && <Nav />}

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
