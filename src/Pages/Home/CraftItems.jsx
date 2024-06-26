import { useLoaderData } from "react-router-dom";
import CraftCard from "./CraftCard";

const CraftItems = () => {

    const loadedCrafts = useLoaderData();

    return (
        <div className="mt-10">
            <div className="max-w-lg mx-auto text-center">
                <h1 className="font-bold text-4xl">Craft Items</h1>
                <p className="mt-3">Drawing and painting craft items involve creativity, color coordination, and artistic skills to transform simple objects into beautiful art.</p>
            </div>
            <div className="mt-10 grid gap-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-3">
                {
                    loadedCrafts.map(craft => <CraftCard
                        key={craft._id}
                        craft={craft} />)
                }
            </div>
        </div>
    );
};

export default CraftItems;