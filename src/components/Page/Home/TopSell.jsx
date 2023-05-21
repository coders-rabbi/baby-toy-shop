import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import gallery01 from "../../../assets/gallery/img01.jpg"
import gallery02 from "../../../assets/gallery/img02.jpg"
import gallery03 from "../../../assets/gallery/img03.jpg"
import gallery04 from "../../../assets/gallery/img04.jpeg"
import gallery05 from "../../../assets/gallery/img05.jpeg"
import gallery06 from "../../../assets/gallery/img06.jpeg"
import gallery07 from "../../../assets/gallery/img07.jpg"
import gallery08 from "../../../assets/gallery/img08.jpeg"
import gallery09 from "../../../assets/gallery/img09.jpeg"

const TopSell = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1154, min: 775 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 774, min: 0 },
            items: 1
        }
    };
    return (
        <div className='mt-24 mb-24'>
            <h1 className='text-center text-5xl font-bold mb-16'>Popular Products</h1>
            <div className='min-w-0 mx-auto text-center'>
                <Carousel responsive={responsive}>
                    <div>
                        <div className="card card-compact w-96 bg-base-100 shadow-lg border mx-auto">
                            <figure><img className='w-48 h-48' src={gallery01} alt="Shoes" /></figure>
                            <div className="card-body text-left">
                                <h2 className="card-title">High Speed Car</h2>
                                <p className=''>This Super Rideon bike by Toyhouse is safe and easy to operate?</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="card card-compact w-96 bg-base-100 shadow-lg border mx-auto">
                            <figure><img className='w-48 h-48' src={gallery02} alt="Shoes" /></figure>
                            <div className="card-body text-left">
                                <h2 className="card-title">RGB Drone!</h2>
                                <p>This is a multi color drone</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="card card-compact w-96 bg-base-100 shadow-lg border mx-auto">
                            <figure><img className='w-48 h-48' src={gallery03} alt="Shoes" /></figure>
                            <div className="card-body text-left">
                                <h2 className="card-title">Mini mercedes</h2>
                                <p>This is a Mini mercedes racing car price</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="card card-compact w-96 bg-base-100 shadow-lg border mx-auto">
                            <figure><img className='w-48 h-48' src={gallery04} alt="Shoes" /></figure>
                            <div className="card-body text-left">
                                <h2 className="card-title">Dinosaur</h2>
                                <p>This toy looks like Real dinosaur </p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="card card-compact w-96 bg-base-100 shadow-lg border mx-auto">
                            <figure><img className='w-48 h-48' src={gallery05} alt="Shoes" /></figure>
                            <div className="card-body text-left">
                                <h2 className="card-title">Royal bengal tiger</h2>
                                <p>The Tiger is the national animal of Bangladesh</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="card card-compact w-96 bg-base-100 shadow-lg border mx-auto">
                            <figure><img className='w-48 h-48' src={gallery06} alt="Shoes" /></figure>
                            <div className="card-body text-left">
                                <h2 className="card-title">Tubbie Wubbie Panda</h2>
                                <p>Cuddle up to our favorite Tubbie Wubbies collection! </p>
                                <div className="card-actions ">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="card card-compact w-96 bg-base-100 shadow-lg border mx-auto">
                            <figure><img className='w-48 h-48' src={gallery07} alt="Shoes" /></figure>
                            <div className="card-body text-left">
                                <h2 className="card-title">Supper Bike with Rechargeable</h2>
                                <p>This Super Rideon bike by Toyhouse is safe and easy to operate</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="card card-compact w-96 bg-base-100 shadow-lg border mx-auto">
                            <figure><img className='w-48 h-48' src={gallery08} alt="Shoes" /></figure>
                            <div className="card-body text-left">
                                <h2 className="card-title">Supper Toy drone without camera</h2>
                                <p>FEATURES: Headless Mode, One-Key Return, 3D Tumbling Stunt, LED Navigation Light,,</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="card card-compact w-96 bg-base-100 shadow-lg border mx-auto">
                            <figure><img className='w-48 h-48' src={gallery09} alt="Shoes" /></figure>
                            <div className="card-body text-left">
                                <h2 className="card-title">Hight Speed Rc Board</h2>
                                <p>This Super speed Rc board by Toyhouse is safe and easy to operate</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default TopSell;









