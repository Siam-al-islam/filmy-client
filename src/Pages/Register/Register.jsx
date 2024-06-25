import React, { useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa6';

const Register = () => {
    const auth = getAuth(app)
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [registerError, setRegisterError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const photo = form.get('photo');
        console.log(email, password);
        setLoading(true)

        if (password.length < 6) {
            setRegisterError("Password should be at least 6 characters");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError("Your Password should have at least one upper case characters");
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError("Your Password should have at least one lowecase case characters");
            return;
        }

        // creating user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                toast.success('Account Created Successfully', {
                    position: 'top-center'
                })
                navigate(location?.state ? location.state : "/");
                setLoading(false);
                setRegisterError("")
            })
            .catch(error => {
                setRegisterError(error.message);
                setLoading(false);
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
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        name="password"
                                        className="input input-bordered w-full"
                                        required />
                                    <span onClick={() => setShowPassword(!showPassword)} className='absolute text-xl cursor-pointer top-3 right-4'>
                                        {
                                            showPassword ? <FaEyeSlash /> : <FaRegEye />
                                        }
                                    </span>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                {
                                    loading ? <div className='flex justify-center'><span className="loading loading-spinner loading-lg"></span></div>
                                        : <button className="btn bg-[#7424ff] text-white">Register</button>
                                }
                            </div>
                            <div className="mt-6 text-center">
                                {
                                    registerError && <p className="text-red-600">{registerError}</p>
                                }
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