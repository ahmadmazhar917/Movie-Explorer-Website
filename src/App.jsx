import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { FavoriteContextProvider } from "./store/favorites-context";

function App() {
  return (
    <FavoriteContextProvider>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Container>
    </FavoriteContextProvider>
  );
}

export default App;
