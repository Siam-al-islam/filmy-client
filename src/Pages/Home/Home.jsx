import Navbar from "../../Navbar/Navbar";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <div className="bg-[url('assets/download.jpeg')] bg-no-repeat">
                <div className="max-w-7xl mx-auto">
                    <div className="mt-0">
                        <Navbar />
                    </div>
                    <Banner />
                </div>
            </div>
        </div>
    );
};

export default Home;