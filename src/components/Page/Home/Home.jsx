import React from 'react';
import HomeBanner from './HomeBanner';
import ShopByCetagory from './ShopByCetagory';
import Gallery from './Gallery';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Gallery></Gallery>
            <ShopByCetagory></ShopByCetagory>
        </div>
    );
};

export default Home;