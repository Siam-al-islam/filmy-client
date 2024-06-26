const CraftCard = ({ craft }) => {

    const { photo, name, subcategory, description, price, rating, customization, time } = craft;

    return (
        <div className="border border-[#ab24e541] p-5 rounded-lg">
            <img className="rounded-lg" src={photo} />
            <div className="space-y-2 mt-4">
                <h2 className="card-title">{name}</h2>
                <h2 className="">{subcategory}</h2>
                <h2 className="text-2xl text-purple-500 font-semibold">{price} $</h2>
                <p>{description}</p>
                <div className="flex justify-between">
                    <h3>Rating: {rating}</h3>
                    <h3>Customization: {customization}</h3>
                </div>
                <h2>Time: {time} hrs</h2>
                <button className="btn w-full bg-purple-600 text-white">View Details</button>
            </div>
        </div>
    );
};

export default CraftCard;