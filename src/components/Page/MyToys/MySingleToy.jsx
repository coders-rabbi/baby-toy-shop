import React from 'react';
import { Link } from 'react-router-dom';

const MySingleToy = ({ toy }) => {
    const { _id, picture_url, name, quantity, sellername } = toy;
    return (
        <div>
            <table className="table w-full">

                <tbody>
                    <tr className='border grid grid-cols-6  justify-items-center items-center'>
                        <td>
                            <button className="btn btn-circle btn-outline hover:bg-error">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </td>

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
                            {quantity}
                        </td>

                        <td>
                            <Link to={`/toydetails/${_id}`} ><button className="btn btn-active btn-ghost">update</button></Link>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default MySingleToy;