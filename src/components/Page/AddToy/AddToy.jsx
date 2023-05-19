import React from 'react';

const AddToy = () => {


    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const photoUrl = form.photoUrl.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.availableQuantity.value;
        const description = form.description.value;
        const addedToy = {
            toyName, sellerName, sellerEmail, photoUrl, subCategory, price, rating, availableQuantity, description
        }
        console.log(addedToy);

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
                        <input type="text" name='toyName' placeholder="toy name" className="input input-bordered"  required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name='sellerName' placeholder="seller name" className="input input-bordered"  required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photoUrl' placeholder="photo url" className="input input-bordered"  required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="email" name='sellerEmail' placeholder="seller email" className="input input-bordered" re required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <input type="text" name='subCategory' placeholder="sub category" className="input input-bordered"  required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="price" className="input input-bordered"  required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name='rating' placeholder="rating" className="input input-bordered"  required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="text" name='availableQuantity' placeholder="available-quantity" className="input input-bordered"  required/>
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