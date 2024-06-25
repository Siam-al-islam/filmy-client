import { ToastContainer, toast } from "react-toastify";
import Navbar from "../../Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa6";

const Login = () => {
    const auth = getAuth(app);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password');
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result);
                toast.success("Logged in successfully",
                    {
                        position: 'top-center'
                    })
                navigate(location?.state ? location.state : "/");
                setLoading(false);
                setLoginError("")
            })
            .catch(error => {
                setLoginError(error.message);
                setLoading(false);
            })
    }

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result);
                toast.success("Logged in successfully",
                    {
                        position: 'top-center'
                    })
                navigate(location?.state ? location.state : "/");
            })
            .catch()
    }

    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result);
                toast.success("Logged in successfully",
                    {
                        position: 'top-center'
                    })
            })
    }

    return (
        <div className="max-w-7xl mx-auto py-5">
            <Navbar />
            <div className="hero mt-8">
                <div className="hero-content w-full md:flex-row flex-col gap-8">
                    <div className="card w-full max-w-lg shadow-2xl bg-[#9253ff10] border-2 border-[#7424ff]">
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
                                        : <button className="btn bg-[#7424ff] text-white">Login</button>
                                }
                            </div>
                            <div className="mt-6 text-center">
                                {
                                    loginError && <p className="text-red-600">{loginError}</p>
                                }
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
                        <button onClick={handleGithubLogin} className="btn btn-outline w-full mt-3">
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