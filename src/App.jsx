import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { FavoriteContextProvider } from "./store/favorites-context";
import SearchPage from "./pages/SearchPage";
import Navbar from "./components/Navbar";
import MovieDetails from "./pages/MovieDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <FavoriteContextProvider>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/searchpage" element={<SearchPage />} />
          <Route path="/moviedetails/:id" element={<MovieDetails />} />
        </Routes>
      </Container>
      <Footer />
    </FavoriteContextProvider>
  );
}

export default App;
