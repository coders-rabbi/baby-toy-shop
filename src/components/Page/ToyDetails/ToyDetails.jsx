import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const singleToy = useLoaderData();
    console.log(singleToy);
    const { picture_url, name, selleremail, sellername, price, rating, quantity, detail_description } = singleToy;
    return (
        <div>
            <div className='md:flex shadow-xl mb-10 mt-10 border rounded-2xl'>
                <img className='mx-auto w-80 h-72 rounded-2xl' src={picture_url} alt="" />
                <div className="card-body justify-center space-y-7">
                    <div className='md:flex justify-between mx-auto md:mx-0'>
                        <h2 className="card-title">{name}</h2>
                        <h2 className="card-title">{sellername}</h2>
                        <h2 className="card-title">{selleremail}</h2>
                    </div>
                    <div className='md:flex justify-between mx-auto md:mx-0'>
                        <h2 className="card-title">Price: ${price}</h2>
                        <h2 className="card-title">Rating: {rating}</h2>
                        <h2 className="card-title">{quantity} Pices</h2>
                    </div>
                    <p className='card-title flex-grow-0 text-center'>{detail_description}</p>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;