import React from 'react';
import { Link } from 'react-router-dom';

const SingleProducts = ({ product }) => {
    const { _id, picture_url, name, price, rating } = product;
    return (
        <div className='mb-5'>
            <div className="card card-compact w-96 h-96 bg-base-100 shadow-lg border mx-auto px-10 py-4">
                <img className='h-40 w-full mx-auto' src={picture_url} alt="Shoes" />
                <div className="card-body ">
                    <h2 className="card-title mx-auto md:mx-0">{name}</h2>
                    <div className=''>
                        <p className='text-xl'>Price: {price}</p>
                        <p className='text-xl'>Rating: {rating}</p>
                    </div>
                    <div className="card-actions">
                        <Link to={`/toydetails/${_id}`} >
                            <button className="btn btn-primary">view details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProducts;