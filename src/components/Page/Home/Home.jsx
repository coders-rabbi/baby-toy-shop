import React from 'react';
import HomeBanner from './HomeBanner';
import ShopByCetagory from './ShopByCetagory';
import { useHeader } from '../../../../useTitle';
import Gallery from './Gallery';
import TopSell from './TopSell';
import ClientFeedBack from './ClientFeedBack';
import AOS from 'aos';
import 'aos/dist/aos.css'


const Home = () => {
    useHeader("Home - Baby Toy Shop")
    AOS.init();

    return (
        <div data-aos="zoom-in-up">
            <HomeBanner></HomeBanner>
            <TopSell></TopSell>
            <ShopByCetagory></ShopByCetagory>
            <Gallery></Gallery>
            <ClientFeedBack></ClientFeedBack>
        </div>
    );
};

export default Home;