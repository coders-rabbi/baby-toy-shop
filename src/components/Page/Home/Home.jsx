import React from 'react';
import HomeBanner from './HomeBanner';
import ShopByCetagory from './ShopByCetagory';
import Gallery from './PopularProducts';
import PopularProducts from './PopularProducts';
import { useHeader } from '../../../../useTitle';

const Home = () => {
    useHeader("Home - Baby Toy Shop")
    return (
        <div>
            <HomeBanner></HomeBanner>
            <PopularProducts></PopularProducts>
            <ShopByCetagory></ShopByCetagory>
        </div>
    );
};

export default Home;