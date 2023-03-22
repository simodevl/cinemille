import { Routes, Route } from "react-router-dom";
//components
import { Navbar, Footer } from "./components";
import MovieDetails from "./components/MovieDetails";
//pages
import { Movies } from "./pages";
//style
import "./styles/app.scss";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
