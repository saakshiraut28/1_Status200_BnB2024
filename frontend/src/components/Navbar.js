/** @format */

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container flex items-center justify-between px-6 md:px-20 py-5 ">
        <Link to="/">
          <h1 className="font-bold text-xl">
            Health <span className="text-[#1fb84e]">D</span>eck
          </h1>
        </Link>
        <nav className="flex ">
          <div className="font-medium space-x-4">
            <span>Welcome!</span>
            <button>Log out</button>
          </div>

          <div className="font-medium space-x-4">
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
