import Navbar from "../../Navbar/Navbar";
import Banner from "./Banner";
import CraftItems from "./CraftItems";

const Home = () => {

    return (
        <div>
            <div className="bg-[url('assets/download.jpeg')] bg-no-repeat bg-cover py-5">
                <div className="max-w-7xl mx-auto">
                    <div className="mt-0">
                        <Navbar />
                    </div>
                    <Banner />
                </div>
            </div>
            <CraftItems />
        </div>
    );
};

export default Home;