import { ToastContainer, toast } from "react-toastify";
import Navbar from "../../Navbar/Navbar";

const AddCraft = () => {

    const handleAdd = (e) => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const subcategory = form.subcategory.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const time = form.time.value;

        const newCraft = { photo, name, subcategory, description, price, rating, customization, time };
        console.log(newCraft);

        // send data 
        fetch('https://filmy-server-bk5hadlvf-siam-al-islams-projects.vercel.app/craft', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success("Item Added", {
                        position: 'top-center'
                    })
                }
            })
    }

    return (
        <div className="max-w-7xl mx-auto py-5">
            <Navbar />
            <div className="mt-10">
                <h1 className="text-center font-bold text-4xl">Add Items</h1>
            </div>
            <div className="w-full mt-10 px-3">
                <form onSubmit={handleAdd}>
                    <div className="flex flex-col md:flex-row w-full gap-6">
                        <div className="flex-1">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input type="text" placeholder="Image URL" name="photo" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter Item Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subcategory name</span>
                                </label>
                                <input type="text" placeholder="Subcategory name" name="subcategory" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Short description</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="description"
                                        name="description"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" placeholder="Price" name="price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="text" placeholder="Enter Rating" name="rating" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Customization</span>
                                </label>
                                <input type="text" placeholder="Customization- example: yes/no" name="customization" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Processing time</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Processing time"
                                        name="time"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-10"><button className="btn btn-wide bg-purple-700 text-white">Add</button></div>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default AddCraft;