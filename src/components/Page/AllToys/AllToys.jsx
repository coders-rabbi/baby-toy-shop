
import toybanner from "../../../assets/addToyBanner.jpg"
import { useLoaderData } from 'react-router-dom';
import SingleToy from "./SingleToy";

const AllToys = () => {
    const allToys = useLoaderData([]);
    console.log(allToys);
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
                {
                    allToys.map(toy => <SingleToy
                        toy={toy}
                    ></SingleToy>)
                }
            </div>
        </div>
    );
};

export default AllToys;