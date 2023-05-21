import React from 'react';
import Carousel from 'react-multi-carousel';
import client01 from "../../../assets//clientfeedback.jpg"

const ClientFeedBack = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1154, min: 775 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 774, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <h1 className='text-center text-4xl font-bold mb-16'>Our Client FeedBack</h1>
            <Carousel responsive={responsive}>
                <div>
                    <div className="card card-compact w-96 h-80 bg-base-100 shadow-lg border mx-auto">
                        <figure><img className='w-36 h-36' src={client01} alt="Shoes" /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-xl text-center">MD. Rabbi Mia</h2>
                            <p className=''>One Of the best online toy shop & they are really best in our country</p>
                        </div>
                    </div>
                </div>

                <div>

                    <div className="card card-compact w-96 h-80 bg-base-100 shadow-lg border mx-auto">
                        <figure><img className='w-36 h-36' src={client01} alt="Shoes" /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-xl text-center">Farhan Abdulla</h2>
                            <p className=''>One Of the best online toy shop & they are really best in our country</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card card-compact w-96 h-80 bg-base-100 shadow-lg border mx-auto">
                        <figure><img className='w-36 h-36' src={client01} alt="Shoes" /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-xl text-center">Shahadat Shakil</h2>
                            <p className=''>One Of the best online toy shop & they are really best in our country</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card card-compact w-96 h-80 bg-base-100 shadow-lg border mx-auto">
                        <figure><img className='w-36 h-36' src={client01} alt="Shoes" /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-xl text-center">MD. Rabbi Mia</h2>
                            <p className=''>One Of the best online toy shop & they are really best in our country</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card card-compact w-96 h-80 bg-base-100 shadow-lg border mx-auto">
                        <figure><img className='w-36 h-36' src={client01} alt="Shoes" /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-xl text-center">MD. Rabbi Mia</h2>
                            <p className=''>One Of the best online toy shop & they are really best in our country</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card card-compact w-96 h-80 bg-base-100 shadow-lg border mx-auto">
                        <figure><img className='w-36 h-36' src={client01} alt="Shoes" /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-xl text-center">MD. Rabbi Mia</h2>
                            <p className=''>One Of the best online toy shop & they are really best in our country</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card card-compact w-96 h-80 bg-base-100 shadow-lg border mx-auto">
                        <figure><img className='w-36 h-36' src={client01} alt="Shoes" /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-xl text-center">MD. Rabbi Mia</h2>
                            <p className=''>One Of the best online toy shop & they are really best in our country</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card card-compact w-96 h-80 bg-base-100 shadow-lg border mx-auto">
                        <figure><img className='w-36 h-36' src={client01} alt="Shoes" /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-xl text-center">MD. Rabbi Mia</h2>
                            <p className=''>One Of the best online toy shop & they are really best in our country</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card card-compact w-96 h-80 bg-base-100 shadow-lg border mx-auto">
                        <figure><img className='w-36 h-36' src={client01} alt="Shoes" /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-xl text-center">MD. Rabbi Mia</h2>
                            <p className=''>One Of the best online toy shop & they are really best in our country</p>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default ClientFeedBack;