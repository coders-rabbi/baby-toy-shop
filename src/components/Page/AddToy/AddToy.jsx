import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useHeader } from '../../../../useTitle';

const AddToy = () => {
    const { user } = useContext(AuthContext);
    useHeader("Add_Toy - Baby Toy Shop")

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.toyName.value;
        const sellername = form.sellerName.value;
        const picture_url = form.photoUrl.value;
        const selleremail = form.sellerEmail.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.availableQuantity.value;
        const detail_description = form.description.value;
        const addedToy = {
            name, sellername, selleremail, picture_url, category, price, rating, quantity, detail_description
        }
        console.log(addedToy);

        fetch('http://localhost:5000/alltoys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedToy)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire(
                    'Added Products!',
                    'Your Product has been Added.',
                    'success'
                )
                form.reset();
            })
    }


    return (
        <div>

            <form onSubmit={handleAddToy} className=' bg-[#F2F2F2] mb-28 rounded-lg mt-24 py-10'>
                <h1 className='text-center text-2xl font-bold'>Add a Toy Here</h1>
                <div className='grid grid-cols-2 gap-5 p-10'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name='toyName' placeholder="toy name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name='sellerName' placeholder="seller name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photoUrl' placeholder="photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="email" name='sellerEmail' value={user.email} placeholder="seller email" className="input input-bordered" re required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Select your Cetagory</span>
                        </label>
                        <select name='category' className="select select-bordered">
                            <option disabled selected>Select</option>
                            <option>Cars</option>
                            <option>Drone</option>
                            <option>Bike</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name='rating' placeholder="rating" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="text" name='availableQuantity' placeholder="available-quantity" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control px-10">
                    <label className="label">
                        <span className="label-text">Detail description</span>
                    </label>
                    <textarea className="bordered-lg" name="description" id="" cols="30" rows="10" required></textarea>
                </div>
                <div className='px-10 mt-10'>
                    <input className='btn btn-block' type="submit" value="Add Toy" />
                </div>
            </form>
        </div>
    );
};

export default AddToy;