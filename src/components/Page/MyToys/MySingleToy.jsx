import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MySingleToy = ({ toys, setAllToys, allToys }) => {
    const { _id, picture_url, name, quantity, sellername } = toys;


    const handledelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to be Delete  this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://baby-toy-shop-server-coders-rabbi.vercel.app/alltoys/${id}`, {
                    method: "DELETE"
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Products deleted.", "success");
                            const remmaining = allToys.filter(toy => toy._id !== id);
                            setAllToys(remmaining)

                        }
                    });
            }
        });
    };













    return (
        <div>
            <table className="table w-full">

                <tbody>
                    <tr className='border grid grid-cols-6  justify-items-center items-center'>
                        <td>
                            <button onClick={() => { handledelete(_id) }} className="btn btn-circle btn-outline hover:bg-error">
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
                            <Link to={`/update/${_id}`} ><button className="btn btn-active btn-ghost">update</button></Link>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default MySingleToy;