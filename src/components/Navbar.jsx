import Logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();
  function searchAction(formData) {
    const movieName = formData.get("searchedMovieName");
    if (movieName.trim() !== "") {
      navigate(`/searchpage?search=${movieName}`);
      setIsDrawerOpen(false);
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
      <IconButton
        sx={{
          display: { xs: "block", sm: "block", md: "none" },
          color: "purple",
        }}
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      <div className="hidden md:block">
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
      <form action={searchAction} className="hidden md:flex gap-2">
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
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <div className="w-64 p-4">
          <IconButton onClick={() => setIsDrawerOpen(false)} className="mb-4">
            <CloseIcon fontSize="large" />
          </IconButton>
          <List>
            <ListItem
              button
              component={NavLink}
              to="/"
              onClick={() => setIsDrawerOpen(false)}
            >
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem
              button
              component={NavLink}
              to="/favorites"
              onClick={() => setIsDrawerOpen(false)}
            >
              <ListItemText primary="Favorites" />
            </ListItem>
          </List>
          <form action={searchAction} className="flex gap-2 mt-4">
            <input
              type="text"
              placeholder="Search movie"
              className="border border-purple-900 rounded-sm text-center px-2 py-1 w-full"
              name="searchedMovieName"
            />
            <button
              type="submit"
              className="bg-purple-900 text-white px-3 py-1 rounded-sm hover:bg-purple-800"
            >
              Search
            </button>
          </form>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
