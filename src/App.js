import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Header from './components/HeaderAndFooter/Header';
import Footer from './components/HeaderAndFooter/Footer';
import Home from './pages/Home';
import AllOffers from './pages/AllOffers';
// import SingleOffer from './pages/SingleOffer';

// import TopSlidder from './components/TopSlidder';
// import RecomendedMovies from './components/RecomendedMovies';
// import EndlessEntertainment from './components/EndlessEntertainment';
// import LiveEvents from './components/LiveEvents';


function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/offers' element={<AllOffers/>}/>
          {/* <Route path='/offers/:ofrid' element={<SingleOffer/>}/> */}

          {/* <Route exact path='/'>    
            <TopSlidder />
            <RecomendedMovies />
            <EndlessEntertainment />
            <LiveEvents />
          </Route> */}
          {/* initially the 'exact' key word was used when routes had switch cases, and if you didnt use them you could just put the home route('/') at the bottome of the routes to avoid errors, but nowadays both switch and bottom placements arent needed no more */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
