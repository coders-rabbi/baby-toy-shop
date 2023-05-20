import React from 'react';
import { Link } from 'react-router-dom';

const SingleToy = ({ toy }) => {
    console.log(toy);
    const { _id, picture_url, name, sellername, cetagory, price } = toy;
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <tbody>
                        <tr className='border grid grid-cols-5  justify-items-center items-center'>
                            <td>
                                <img className='w-14' src={picture_url} alt="" />
                            </td>

                            <td>
                                {name}
                            </td>

                            <td>
                                {sellername}
                            </td>

                            <td>
                                {price}
                            </td>

                            <td>
                                <Link to={`/toydetails/${_id}`} ><button className="btn btn-active btn-ghost">details</button></Link>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default SingleToy;