import React from 'react';
import TopSlidder from '../components/TopSlidder';
import RecomendedMovies from '../components/RecomendedMovies';
import EndlessEntertainment from '../components/EndlessEntertainment';
import LiveEvents from '../components/LiveEvents';


function Home() {
    return (
        <>
            <TopSlidder />
            <RecomendedMovies />
            <EndlessEntertainment />
            <LiveEvents />
        </>
    );
}

export default Home;
