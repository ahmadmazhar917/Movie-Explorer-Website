import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Movies from "./components/Movies";

function App() {
  return (
    <Container>
      <Navbar />
      <Movies />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Container>
  );
}

export default App;
