import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useHeader } from '../../../../useTitle';

const UpdatePage = () => {
    const product = useLoaderData();
    const { _id, picture_url, name } = product;
    // console.log(product);

    useHeader("Update_Toy - Baby Toy Shop")


    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updateProdct = {
            price, quantity, description
        }
        console.log(updateProdct);
        fetch(`http://localhost:5000/alltoys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProdct)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    Swal.fire({
                        title: "Update",
                        text: "Toy Update Successfully",
                        icon: "success",
                        confirmButtonText: "Update",
                    });
                }
                form.reset();
                console.log(data);
            });
    }


    return (
        <div>
            <div className='border w-1/2 mx-auto space-y-8 p-10 rounded-2xl mb-16 mt-20 bg-gray-300'>
                <img className='mx-auto w-80 h-80' src={picture_url} alt="" />
                <h2 className='text-center text-5xl font-bold'>{name}</h2>
                <div>
                    <form onSubmit={handleUpdate}>
                        <div className='grid grid-cols-2 gap-5'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name='price' placeholder="price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="text" name='quantity' placeholder="quantity" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name='description' placeholder="description in details" className="input input-bordered" required />
                        </div>
                        <div className='mt-7'>
                            <input className='btn btn-block' type="submit" value="Add Toy" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdatePage;