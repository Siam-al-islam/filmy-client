import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/all"><li>All Art & Crafts</li></NavLink>
        <NavLink to="/addItem"><li>Add Item</li></NavLink>
        <NavLink to="/myList"><li>My List</li></NavLink>
    </>
    return (
        <div className="navbar">
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
                <a className="btn btn-ghost text-2xl text-[#d4bfff]">Filmy</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-8 text-white">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <Link to="/login"><button className="border border-[#7424ff] text-[#7424ff] px-5 py-2 rounded-lg font-semibold">Login</button></Link>
                <Link to="/register"><button className="border border-[#7424ff] bg-[#7424ff] text-white px-5 py-2 rounded-lg hidden md:block">Register</button></Link>
            </div>
        </div>
    );
};

export default Navbar;