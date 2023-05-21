import gphoto01 from "../../../assets/gphoto01.jpg"
import gphoto02 from "../../../assets/gphoto02.jpg"
import gphoto03 from "../../../assets/gphoto03.jpg"
import gphoto04 from "../../../assets/gphoto04.jpg"
import gphoto05 from "../../../assets/gphoto05.jpg"
import gphoto06 from "../../../assets/gphoto06.jpg"

const Gallery = () => {
    return (
        <div className="mb-20">
            <h1 className="text-5xl text-center font-bold mt-36">Our Gallery</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center mt-16">
                <div>
                    <img className="w-96 h-80 shadow-lg rounded-lg" src={gphoto01} alt="" />
                </div>
                <div>
                    <img className="w-96 h-80 shadow-lg rounded-lg" src={gphoto02} alt="" />
                </div>
                <div>
                    <img className="w-96 h-80 shadow-lg rounded-lg" src={gphoto03} alt="" />
                </div>
                <div>
                    <img className="w-96 h-80 shadow-lg rounded-lg" src={gphoto04} alt="" />
                </div>
                <div>
                    <img className="w-96 h-80 shadow-lg rounded-lg" src={gphoto05} alt="" />
                </div>
                <div>
                    <img className="w-96 h-80 shadow-lg rounded-lg" src={gphoto06} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;