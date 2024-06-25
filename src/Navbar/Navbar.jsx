import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import app from "../firebase/firebase.config";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
    const links = <>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/all"><li>All Art & Crafts</li></NavLink>
        <NavLink to="/addItem"><li>Add Item</li></NavLink>
        <NavLink to="/myList"><li>My List</li></NavLink>
    </>

    const auth = getAuth(app);

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unSubscribe();
        }
    }, [])


    const handleLogOut = () => {
        setLoading(true)
        setUser(null);
        return (
            signOut(auth)
                .then(result => {
                    toast.warn("Logged out Successfully", {
                        position: 'top-center'
                    })
                    setLoading(false);
                })
                .catch(error => {
                    console.log(error);
                })
        )
    }

    return (
        <div className="navbar bg-[#38057b9a] rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-8 text-white">
                        {
                            links
                        }
                    </ul>
                </div>
                <Link to="/"><h2 className="btn btn-ghost text-2xl text-[#ffffff]">Filmy</h2></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-8 text-white">
                    {links}
                </ul>
            </div>

            {
                loading ? <span className="loading loading-spinner loading-lg"></span> :
                    <div className="navbar-end gap-3">
                        {
                            user ?
                                <div className="dropdown dropdown-end flex gap-3 items-center">
                                    <div>
                                        <h3 className="text-white">{user && user?.displayName}</h3>
                                    </div>
                                    <div>
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img
                                                    alt={user?.displayName}
                                                    src={user ? user?.photoURL : "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg"} />
                                            </div>
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                            <li>
                                                <a className="justify-between">
                                                    Profile
                                                    <span className="badge">New</span>
                                                </a>
                                            </li>
                                            <li><a>Settings</a></li>
                                            <li onClick={handleLogOut}><a>Logout</a></li>
                                        </ul>
                                    </div>
                                </div>
                                :
                                <div className="flex gap-3">
                                    <Link to="/login"><button className="border border-[#7424ff] text-white px-5 py-2 rounded-lg font-semibold">Login</button></Link>
                                    <Link to="/register"><button className="border border-[#7424ff] bg-[#7424ff] text-white px-5 py-2 rounded-lg hidden md:block">Register</button></Link>
                                </div>
                        }
                    </div>
            }
            <ToastContainer />
        </div>
    );
};

export default Navbar;