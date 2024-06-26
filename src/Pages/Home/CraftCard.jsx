const CraftCard = ({ craft }) => {

    const { photo, name, subcategory, description, price, rating, customization, time } = craft;

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photo} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default CraftCard;