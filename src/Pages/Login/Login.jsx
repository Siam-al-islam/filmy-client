import { ToastContainer, toast } from "react-toastify";
import Navbar from "../../Navbar/Navbar";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

    const { createUserByGoogle } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
    }

    const handleGithubLogin = (e) => {
        e.preventDefault();
    }

    const handleGoogleLogin = () => {
        createUserByGoogle();
        toast.success("Logged in")
    }

    return (
        <div className="max-w-7xl mx-auto  py-5">
            <Navbar />
            <div className="hero mt-8">
                <div className="hero-content w-full md:flex-row flex-col gap-8">
                    <div className="card w-full max-w-lg shadow-2xl bg-base-100 border-2 border-[#7424ff]">
                        <div className="text-center mb-4 mt-3 text-[#7424ff] py-4 rounded-t-xl">
                            <h1 className="text-3xl font-semibold">Login Now</h1>
                        </div>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#7424ff] text-white">Login</button>
                            </div>
                            <div className="mt-6 text-center">
                                <h2>Do not have an account? <Link to="/register" className="font-bold text-[#7424ff]">Register Now</Link></h2>
                            </div>
                            <ToastContainer />
                        </form>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold">Or <span className="text-[#7424ff]">Login</span> with</h3>
                        <button onClick={handleGoogleLogin} className="btn btn-outline w-full mt-6">
                            <FaGoogle />
                            Login with Google
                        </button>
                        <button onSubmit={handleGithubLogin} className="btn btn-outline w-full mt-3">
                            <FaGithub />
                            Login with GitHub
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;