import Logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  function searchAction(formData) {
    const movieName = formData.get("searchedMovieName");
    if (movieName.trim() !== "") {
      navigate(`/searchpage?search=${movieName}`);
    }
  }

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
        <p>Movie Explorer</p>
      </div>
      <div>
        <ul className="flex gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-purple-900 p-2 ${
                  isActive ? "border-b-2 border-purple-900 font-bold" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `hover:text-purple-900 p-2 ${
                  isActive ? "border-b-2 border-purple-900 font-bold" : ""
                }`
              }
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </div>
      <form action={searchAction} className="flex gap-2">
        <input
          type="text"
          placeholder="Search movie"
          className="border border-purple-900 rounded-sm text-center"
          name="searchedMovieName"
        />
        <button
          type="submit"
          className="bg-purple-900 text-white px-2 rounded-sm hover:cursor-pointer hover:bg-purple-800"
        >
          Search
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
