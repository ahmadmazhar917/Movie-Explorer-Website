import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { FavoriteContextProvider } from "./store/favorites-context";
import SearchPage from "./pages/SearchPage";
import Navbar from "./components/Navbar";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <FavoriteContextProvider>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/searchpage" element={<SearchPage />} />
          <Route path="/moviedetails" element={<MovieDetails />} />
        </Routes>
      </Container>
    </FavoriteContextProvider>
  );
}

export default App;
