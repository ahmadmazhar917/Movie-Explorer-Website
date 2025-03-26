import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex mt-5 items-center justify-between font-mono">
      <div className="flex items-center ">
        <img
          src={Logo}
          alt="Movie Explorer Website Logo"
          height={50}
          width={50}
          className="rounded-xl"
        />
        <p>Movie Explorer Website</p>
      </div>
      <div>
        <ul className="flex gap-4">
          <li>
            <Link to="/" className="hover:text-purple-900">
              Home
            </Link>
          </li>
          <li>
            <Link to="/favorites" className="hover:text-purple-900">
              Favorites
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search movie"
          className="border border-purple-900 rounded-sm text-center"
        />
      </div>
    </nav>
  );
};

export default Navbar;
