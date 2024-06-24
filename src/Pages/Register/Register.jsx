import React from 'react';
import Navbar from '../../Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <Navbar />
            <div className="hero mt-8">
                <div className="hero-content w-full md:flex-row flex-col gap-8">
                    <div className="card w-full max-w-lg shadow-2xl bg-base-100 border-2 border-[#7424ff]">
                        <div className="text-center mb-4 mt-3 text-[#7424ff] py-4">
                            <h1 className="text-3xl font-semibold">Create an Account</h1>
                        </div>
                        <form className="card-body">
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
                                <input type="text" placeholder="Photo URL" name="url" className="input input-bordered" required />
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
                                <button className="btn bg-[#7424ff] text-white">Register</button>
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