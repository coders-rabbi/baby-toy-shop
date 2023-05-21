
import toybanner from "../../../assets/addToyBanner.jpg"
import { useLoaderData } from 'react-router-dom';
import SingleToy from "./SingleToy";
import { useHeader } from "../../../../useTitle";
import { FaSearch } from 'react-icons/fa';
import { useEffect, useState } from "react";

const AllToys = () => {
    const [searchText, setSearchText] = useState("");
    const [toys, setToys] = useState([]);
    const [visible, setVisible] = useState([20]);
    const showall = () => {
        setVisible((perval) => perval + 10);
    }

    useHeader("All_Toys - Baby Toy Shop")

    const handleSearch = () => {
        fetch(`https://baby-toy-shop-server-coders-rabbi.vercel.app/search/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setToys(data);
            });
    };

    useEffect(() => {
        fetch('https://baby-toy-shop-server-coders-rabbi.vercel.app/alltoys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return (
        <div>
            <div id="slide1" className="carousel-item relative w-full mb-20">
                <img src={toybanner} className="max-w-7xl w-full h-[300px] rounded-lg" />
                <div className="absolute flex items-center gap-6 bg-[#151515a3] h-full w-full rounded-lg">
                    <div className="space-y-7 text-white w-full">
                        <h1 className="text-6xl font-bold text-center">All Toys</h1>
                    </div>
                </div>
            </div>
            <div className="mb-10">
                <table className="table w-full">
                    <thead>
                        <tr className="grid grid-cols-5 justify-items-center bg-slate-200">
                            <th className="bg-slate-200">picture</th>
                            <th className="bg-slate-200">Name</th>
                            <th className="bg-slate-200">Seller</th>
                            <th className="bg-slate-200">Quantity</th>
                            <th className="bg-slate-200">details</th>
                        </tr>
                    </thead>
                </table>
                <div className='flex justify-center items-center py-10'>
                    <input
                        onChange={(e) => setSearchText(e.target.value)}
                        type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                    <button onClick={handleSearch} class="btn btn-primary ms-4"><FaSearch></FaSearch> Search</button>
                </div>
                {
                    toys.slice(0, visible).map(toy => <SingleToy
                        toy={toy}
                    ></SingleToy>)
                }
                <div className="showAll flex justify-center my-6">
                    <button className='btn btn-primary"' onClick={showall}>Show All Toy </button>
                </div>
            </div>
        </div>
    );
};

export default AllToys;