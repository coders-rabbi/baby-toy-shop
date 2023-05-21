import React from 'react';
import HomeBanner from './HomeBanner';
import ShopByCetagory from './ShopByCetagory';
import { useHeader } from '../../../../useTitle';
import Gallery from './Gallery';
import TopSell from './TopSell';

const Home = () => {
    useHeader("Home - Baby Toy Shop")
    return (
        <div>
            <HomeBanner></HomeBanner>
            <TopSell></TopSell>
            <ShopByCetagory></ShopByCetagory>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;