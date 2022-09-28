import "./styles.css";

import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

import { useState, useEffect } from "react";
import Context from "./context";

export default function App() {
  const endpoint = "/fotos.json";
  const [fotos, setFotos] = useState([]);
  const [favorite, setFavorite] = useState([]);

  const globalState = { fotos, setFotos, favorite, setFavorite };

  useEffect(() => {
    axios
      .get(endpoint)
      .then((res) => {
        console.log(res.data.photos);
        setFotos(res.data.photos);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Context.Provider value={globalState}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
