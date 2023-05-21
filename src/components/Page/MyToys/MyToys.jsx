import { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import mytoybanner from "../../../assets/banner/mytoy.jpg"
import MySingleToy from './MySingleToy';
import { useHeader } from '../../../../useTitle';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [allToys, setAllToys] = useState([]);
    useHeader("My_Toy - Baby Toy Shop")

    useEffect(() => {
        fetch(`https://baby-toy-shop-server-coders-rabbi.vercel.app/mytoys/${user?.email}`)
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])

    

    return (
        <div>
            {/* my toy banner */}
            <div id="slide1" className="carousel-item relative w-full mb-20">
                <img src={mytoybanner} className="max-w-7xl w-full h-[300px] rounded-lg" />
                <div className="absolute flex items-center gap-6 bg-[#151515a3] h-full w-full rounded-lg">
                    <div className="space-y-7 text-white w-full">
                        <h1 className="text-6xl font-bold text-center">My Toys</h1>
                    </div>
                </div>
            </div>

            <div className='mb-20'>
                <table className="table w-full">
                    <thead>
                        <tr className="grid grid-cols-6 justify-items-center bg-slate-200">
                            <th className="bg-slate-200">delete</th>
                            <th className="bg-slate-200">picture</th>
                            <th className="bg-slate-200">Name</th>
                            <th className="bg-slate-200">Seller</th>
                            <th className="bg-slate-200">Quantity</th>
                            <th className="bg-slate-200">Update</th>
                        </tr>
                        {
                            allToys.map(toy => <MySingleToy
                            key={toy._id}
                            toys={toy}
                            allToys={allToys}
                            setAllToys={setAllToys}
                            ></MySingleToy>)
                        }
                    </thead>
                </table>
            </div>
        </div>
    );
};

export default MyToys;