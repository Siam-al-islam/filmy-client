import React, { useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const Register = () => {
    const auth = getAuth(app)
    const [loading, setLoading] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password');
        const photo = form.get('photo');
        console.log(email, password);
        setLoading(true)

        // creating user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                toast.success('Account Created Successfully', {
                    position: 'top-center'
                })
                setLoading(false)
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
                setLoading(false)
            })
    }

    return (
        <div>
            <div className="max-w-7xl mx-auto py-5">
                <Navbar />
            </div>
            <div className="hero">
                <div className="hero-content w-full md:flex-row flex-col gap-8">
                    <div className="card w-full max-w-lg shadow-2xl bg-[#9253ff10] border-2 border-[#7424ff]">
                        <div className="text-center mb-4 mt-3 text-[#7424ff] py-4">
                            <h1 className="text-3xl font-semibold">Create an Account</h1>
                        </div>
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        className="input input-bordered w-full"
                                        required />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                {
                                    loading ? <div className='flex justify-center'><span className="loading loading-spinner loading-lg"></span></div>
                                        : <button className="btn bg-[#7424ff] text-white">Register</button>
                                }
                            </div>
                            <div className="mt-6 text-center">
                                <h2>Already have an account? <Link to="/login" className="font-bold text-[#7424ff]">Login Now</Link></h2>
                            </div>
                            <ToastContainer />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;