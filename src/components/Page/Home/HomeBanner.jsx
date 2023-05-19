import banner01 from "../../../assets/banner/slider1.jpg"
import banner02 from "../../../assets/banner/slider2.jpg"
import banner03 from "../../../assets/banner/slider3.png"
import banner04 from "../../../assets/banner/slider4.png"

const HomeBanner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner01} className="max-w-7xl w-full h-[600px] rounded-lg" />
                    <div className="absolute flex items-center pl-10 gap-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21] h-full w-full rounded-lg">
                        <div className="space-y-7 text-white w-1/3">
                            <h1 className="text-6xl font-bold">New Arrivals Amazing Craft</h1>
                            <p className="">Latest baby product & toy collections</p>
                            <div className="flex items-center gap-8">
                                <button className="btn bg-transparent border-[#FF3811] hover:bg-[#FF3811]">Shop Now</button>
                                <p className="text-white font-bold text-4xl">Get -30% off</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-6 right-10 bottom-16">
                        <a href="#slide4" className="btn btn-circle hover:bg-[#FF3811]">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-[#FF3811]">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner02} className="max-w-7xl w-full h-[600px]" />
                    <div className="absolute flex items-center pl-10 gap-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21] h-full w-full rounded-lg">
                        <div className="space-y-7 text-white w-1/3">
                            <h1 className="text-6xl font-bold">New Arrivals Amazing Craft</h1>
                            <p className="">Latest baby product & toy collections</p>
                            <div>
                                <button className="btn bg-transparent border-[#FF3811] hover:bg-[#FF3811]">Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-6 right-10 bottom-16">
                        <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811]">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-[#FF3811]">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner03} className="max-w-7xl w-full h-[600px]" />
                    <div className="absolute flex items-center pl-10 gap-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21] h-full w-full rounded-lg">
                        <div className="space-y-7 text-white w-1/3">
                            <h1 className="text-6xl font-bold">New Arrivals Amazing Craft</h1>
                            <p className="">Latest baby product & toy collections</p>
                            <div>
                                <button className="btn bg-transparent border-[#FF3811] hover:bg-[#FF3811]">Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-6 right-10 bottom-16">
                        <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811]">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-[#FF3811]">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner04} className="max-w-7xl w-full h-[600px]" />
                    <div className="absolute flex items-center pl-10 gap-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21] h-full w-full rounded-lg">
                        <div className="space-y-7 text-white w-1/3">
                            <h1 className="text-6xl font-bold">New Arrivals Amazing Craft</h1>
                            <p className="">Latest baby product & toy collections</p>
                            <div>
                                <button className="btn bg-transparent border-[#FF3811] hover:bg-[#FF3811]">Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-6 right-10 bottom-16">
                        <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811]">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-[#FF3811]">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;