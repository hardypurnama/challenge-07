import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/displayNavbar";
import Landing from "./pages/LandingPage";
import Filter from "./pages/Search/Filter";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/cari-mobil" element={<Filter />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
