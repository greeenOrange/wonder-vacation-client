import React from 'react';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Packages from '../Packages/Packages';
import TourGuide from '../TourGuide/TourGuide';

const Home = () => {
    return (
        <div>
            
            <Packages></Packages>
            <Gallery></Gallery>
            <TourGuide></TourGuide>
            <Footer></Footer>
        </div>
    );
};

export default Home;