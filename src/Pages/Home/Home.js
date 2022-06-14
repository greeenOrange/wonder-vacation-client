import React from 'react';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Banner from '../Header/Banner/Banner';
import Newslatter from '../Newslatter/Newslatter';
import Packages from '../Packages/Packages';
import TourGuide from '../TourGuide/TourGuide';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <Gallery></Gallery>
            <TourGuide></TourGuide>
            <Newslatter></Newslatter>
            <Footer></Footer>
        </div>
    );
};

export default Home;