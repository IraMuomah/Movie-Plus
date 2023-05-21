import { Routes, Route} from 'react-router-dom';
import './App.css';
import React from 'react';
import Header from './components/HeaderAndFooter/Header';
import Footer from './components/HeaderAndFooter/Footer';
import Home from './pages/Home';
import AllOffers from './pages/AllOffers';
// import SingleOffer from './pages/SingleOffer';




function App() {
  return (
    <>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/offers' element={<AllOffers/>}/>
          {/* <Route path='/offers/:ofrid' element={<SingleOffer/>}/> */}
        </Routes>
        <Footer />
    </>
  );
}

export default App;


// PERSONAL NOTE:
/* We are using HashRouter instead of normal BrowserRouter cause this is a Github project not a real project and...
GitHub Pages does not support browser history like your browser does. 
For example the route https://iramuomah.github.io/Movie-Plus/Offers 
doesn't help GitHub Pages understand where to point the user (since it is a frontend route).
To overcome this problem, we need to use a Hash Router instead of a Browser Router in our application. 
This type of router uses the hash portion of the URL to keep the UI in sync with the URL.
*/

// ALSO NOTE:
// the messy code bellow can be used instead of using a neater <Home/> component/page

/* import TopSlidder from './components/TopSlidder';
import RecomendedMovies from './components/RecomendedMovies';
import EndlessEntertainment from './components/EndlessEntertainment';
import LiveEvents from './components/LiveEvents'; */
          /* <Route exact path='/'>    
            <TopSlidder />
            <RecomendedMovies />
            <EndlessEntertainment />
            <LiveEvents />
          </Route> */
           
/*initially the 'exact' key word was used when routes had switch cases, 
and if you didnt use them you could just put the home route('/') at the bottome of the routes to avoid errors, 
but nowadays both switch and bottom placements arent needed no more */

