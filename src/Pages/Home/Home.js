import React from 'react';
import ClientReview from '../ClientReview/ClientReview';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Banner from '../Header/Banner/Banner';
import HeroWrapper from '../Header/Banner/HeroWrapper';
import Newslatter from '../Newslatter/Newslatter';
import Packages from '../Packages/Packages';
import TourGuide from '../TourGuide/TourGuide';

const Home = () => {
    return (
        <div>
            <HeroWrapper />
            <Packages></Packages>
            <Gallery></Gallery>
            <ClientReview></ClientReview>
            <TourGuide></TourGuide>
            <Newslatter></Newslatter>
            <Footer></Footer>
        </div>
    );
};

export default Home;